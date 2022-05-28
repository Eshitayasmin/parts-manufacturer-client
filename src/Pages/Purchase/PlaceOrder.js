import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const PlaceOrder = ({ productDetail }) => {
    const [user] = useAuthState(auth);
    const { minimumQuantity, availableQuantity, name, price, _id } = productDetail;
    const [quantityError, setQuantityError] = useState('');
    const [quantity, seQuantity] = useState('');
    const [disabled, setDisabled] = useState(false);
    const { reset } = useForm();




    const handleBooking = event => {
        event.preventDefault();

        const booking = {
            bookingId: _id,
            name: user?.displayName,
            email: user.email,
            productName: name,
            price: price,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
     if(booking.quantity >= minimumQuantity){
        fetch('https://limitless-basin-34615.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(`Order has been placed`)
                    event.target.reset();
                }
                else {
                    toast.error("Order didn't place")
                }

                reset();
            })

     }
     else if(availableQuantity < quantity){
        toast.error(`You can not order more than ${minimumQuantity} pcs`)
     }
  else{
      
      toast.error(`You can not order less than ${minimumQuantity} pcs`)
  }
    }



    return (
        <div className='my-16 py-12  bg-slate-100'>
            <div className="form-section block lg:flex justify-around lg:w-1/2 rounded-md bg-base-100 shadow-xl mx-6 lg:mx-auto p-8">
                <div className='form-div'>
                    <h2 className='text-info text-2xl font-bold mb-3'>Purchase</h2>
            
                    <form className='d-flex flex-column w-full mx-auto' onSubmit={handleBooking}>
                       
                        <input type="text" name="name" placeholder="Type here" className="input input-bordered input-md block mb-3 mt-3 w-full lg:w-80 max-w-sm px-4" value={user?.displayName}/>
                        <input type="email" name='email' className="input input-bordered input-md block  w-full lg:w-80 max-w-sm mb-3" readOnly value={user?.email} />

                        <input className='input input-bordered input-md block mb-3 w-full lg:w-80 max-w-sm' type="text" name="productName" id="" value={name} />

                        <input name="price" id="" className='input input-bordered input-md block mb-3 w-full lg:w-80 max-w-sm' value={price} placeholder='Price'/>

                        <input name="quantity" id="quantity-field" className='input input-bordered input-md block mb-3 w-full lg:w-80 max-w-sm' placeholder='Quantity'/>

                        <input name="address" className='input input-bordered input-md block mb-3 w-full max-w-sm' placeholder='Address' type='text'/>
                        <input name="phone" className='input input-bordered input-md block mb-3 w-full lg:w-80 max-w-sm' placeholder='Phone Number' type="number"/>
                        <button type='submit' className="btn btn-wide w-full max-w-sm">Place Order</button>
                      
                    </form>


                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;