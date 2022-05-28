import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();
    const navigateWelcome =() =>{
        navigate('/welcome');
    }
    return (
        <div className='block lg:flex justify-around items-center mx-16'>
              <div className='mb-5 xs:w-screen xs:mx-auto'>
                  <img className='w-9/12 lg:w-8/12' src="https://cdn.pixabay.com/photo/2016/01/16/17/43/contact-us-1143659_960_720.jpg" alt="" />
              </div>
            <div className='mx-6 lg:mx-4 lg:mr-12'>
               <h2 className='text-3xl text-blue-400'>Send us a message</h2>
               <p className='mb-3'>If You have any queries please use this form to contact us!</p>
               <form onSubmit={navigateWelcome}>
               <input type="text" placeholder="Your Name" class="input input-bordered input-warning w-full max-w-xs block mb-3" required/>
               <input type="email" placeholder="Your Email" class="input input-bordered input-warning w-full max-w-xs block mb-3" required/>
               <textarea class="textarea textarea-warning w-full max-w-xs mb-3" cols="30" rows="3" placeholder="Message" required></textarea>
               <input className='btn btn-info w-full max-w-xs text-white' type="submit" value="Submit" />
               </form>
            </div>
        </div>
    );
};

export default ContactUs;