import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const imageStorageKey = 'a3c8d49eb8ed51861c1f1248826e3c72';

    const onSubmit = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
              
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        minimumQuantity: data.minimumQuantity,
                        availableQuantity: data.availableQuantity,
                        img: img
                    }

                    //send database
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res =>res.json())
                    .then(inserted =>{
                        console.log(inserted);
                        if(inserted.result.insertedId){
                            toast.success('product added successfully')
                           reset();
                        }
                        else{
                            toast.error('Failed to add the product');
                        }
                    })
                }
            })

       


            
    };
    return (
        <div className='w-screen my-12'>
             <h4 className='text-blue-400 font-mono text-2xl lg:text-3xl lg:ml-96 px-4 mb-4'> Add A Product</h4>
            <div className='w-10/12 lg:w-1/2 mx-4 lg:mx-auto'>
                <form className='d-flex flex-column add-form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='block border w-96 rounded-sm max-w-sm mb-3 p-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' placeholder='Description' {...register("description")} />
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' placeholder='Price' {...register("price")} />
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' placeholder='Minimum Quantity' type="number" {...register("minimumQuantity")} />
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' placeholder='Available Quantity' type="number" {...register("availableQuantity")} />
                    <input className='block border w-96 rounded-sm max-w-sm  mb-3 p-2' type="file" placeholder='Photo' {...register("image")} />
                    <button type='submit' className="btn w-96 max-w-sm">Add Product</button>
                </form>
            </div> 
        </div>
    );
};
export default AddProduct;