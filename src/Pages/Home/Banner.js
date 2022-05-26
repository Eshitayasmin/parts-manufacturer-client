import React from 'react';
import { useNavigate } from 'react-router-dom';
import './banner.css';

const Banner = () => {
  const navigate = useNavigate();
    return (
      <div class="hero min-h-screen banner">
      <div class="hero-overlay bg-opacity-30"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-4xl">
          <h1 class="mb-5 text-3xl lg:text-5xl font-bold ">Welcome To AR Parts Manufacturer!</h1>
          <p class="mb-5 lg:mx-16">AR Parts sets the standard for quality and innovation in braking technology and is well-respected for our pioneering approach and thought leadership. From prototyping to production, our network of over 5,000 suppliers has the capacity for all of your manufacturing projects.</p>
          <button onClick={() => navigate('/dashboard')} class="btn btn-accent text-white" >Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;