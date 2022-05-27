import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Review = ({user}) => {
    const {name, review, rating} = user;
    return (
        <div className='border border-slate-300 bg-green-100 p-4 rounded-md text-center'>
        <h1 className='text-xl text-blue-600'>{name}</h1>
         <p>{review}</p>
         <p><span>Ratings:</span>
         <Rating
         initialRating={rating}
         emptySymbol={<FontAwesomeIcon icon={faStar} />}
         fullSymbol={<FontAwesomeIcon style={{color: 'salmon'}} icon={faStar} />}
          readonly
         ></Rating> <span className='text-blue-400'> ({rating}) </span></p>
    </div>
    );
};

export default Review;