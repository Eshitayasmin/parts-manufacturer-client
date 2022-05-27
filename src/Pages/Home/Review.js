import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Review = ({user}) => {
    const {name, img, review, rating} = user;
    return (
        <div className=''>
        <div className='flex'>
        <img className='w-96' src={img} alt="" />
        <p className=' text-lg md:text-2xl ml-2'>{name}</p>
        </div>
         <p>{review}</p>
         <p><span className='mr-3'>Ratings:</span>
         <Rating
         initialRating={rating}
         emptySymbol={<FontAwesomeIcon icon={faStar} />}
         fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
          readonly
         ></Rating></p>
    </div>
    );
};

export default Review;