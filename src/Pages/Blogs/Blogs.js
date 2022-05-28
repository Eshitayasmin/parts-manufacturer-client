import React from 'react';

const Blogs = () => {
    return (
        <div className='w-screen my-24'>
            <div className='w-11/12 lg:w-8/12 border-2 border-slate-400 mx-auto p-8 rounded-md'>
                <h1 className='text-2xl text-blue-700 mb-3'>How will you improve the performance of a React Application?</h1>
                <p className='text-xl text-slate-500'>Optimizing performance in a React application:-</p>
                <ul>
                 
                    <li>1. Make sure that components receive only necessary props.</li>
                    <li>2. Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>3. Windowing or list virtualization in React applications.</li>
                    <li>4. Keeping component state local where necessary.</li>
                    <li>5. Using Multiple Chunk Files.</li>
                    <li>6. Avoid Anonymous Functions.</li>
                    
                    
                </ul>
            </div>
            <div className='w-11/12 lg:w-8/12 border-2 border-slate-400 mx-auto p-8 rounded-md mt-12'>
                   <h1 className='text-2xl text-blue-700 mb-3'>What are the different ways to manage a state in a React application?</h1>
                   <p className='text-xl text-slate-500 mb-1'>There are four main types of state you need to properly manage in your React apps:</p>
                   
                   <p><span className='text-purple-500'>1. Local state:</span> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</p>

                   <p><span className='text-purple-500'>2. Global state:</span> Global state is data we manage across multiple components. It  is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                   <p><span className='text-purple-500'>3.Server state:</span> Data that comes from an external server that must be integrated with our UI state. This state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                   <p><span className='text-purple-500'>4.URL state:</span> Data that exists on our URLs, including the pathname and query parameters. This is often missing as a category of state, but it is an important one.</p>
            </div>
            <div className='w-11/12 lg:w-8/12 border-2 border-slate-400 mx-auto p-8 rounded-md mt-12'>
                <h1 className='text-2xl text-blue-700 mb-3'>How does prototypical inheritance work?</h1>
                <p className='text-justify'>JavaScript is a prototype-based, Object Oriented programming language. Prototypical inheritance refers to the ability to access object properties from another object. We can then essentially tell our JS code to inherit properties from a prototype. If an object has an own property and an inherited property with the same name, then JavaScript always picks the own property. Inheritance solves the problem of data and logic duplication. By inheriting, objects can share properties and methods.</p>
            </div>

            <div className='w-11/12 lg:w-8/12 border-2 border-slate-400 mx-auto p-8 rounded-md mt-12'>
                <h1 className='text-2xl text-blue-700 mb-3'> What is a unit test? Why should write unit tests?</h1>
                <p className='mb-2 text-justify'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.   In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. In most programming languages, that is a function, a subroutine, a method or property. </p>
                <p>Unit testing ensures that all code meets quality standards before it's deployed. This can help them to stay focused and can also help them to create much better designs.This makes your implementation details in your code shorter and easier to understand. Unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            </div>
            <div className='w-11/12 lg:w-8/12 border-2 border-slate-400 mx-auto p-8 rounded-md mt-12'>
                <h1 className='text-2xl text-blue-700 mb-3'>Why you do not set the state directly in React?</h1>

                <p className='text-md text-justify'>If update state directly then it won't re-render the component. If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change state. You will lose control of the state across all components. Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.</p>
            </div>
        </div>
    );
};

export default Blogs;