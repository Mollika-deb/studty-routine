import React from 'react';

const Blog = () => {
    return (
        <div>
        <hr />
        <h1 className='text-center my-10 text-4xl font-bold text-green-700'>Welcome to the Blog</h1>
            <h1 className='text-3xl font-bold'>1. How does react work?</h1>
            <p className='py-4 font-semibold'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>

            <h1 className='text-3xl font-bold'>2. What is  the difference between props & state?</h1>
            <p className='text-3xl font-bold text-green-800 pt-3'>State :</p>
            <p className='py-4 font-semibold'>The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again.</p>
            <p className='text-3xl font-bold text-green-800 pt-3'>Props :</p>
            <p className='py-4 font-semibold'>Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.

                Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.</p>

            <h1 className='text-3xl font-bold'>3. Except data loading , In wchich purpose useEffect is used?</h1>
            <p className='py-4 font-semibold'>he useEffect Hook allows you to perform side effects in your components.

                Some examples of side effects are: fetching data, directly updating the DOM, and timers.

                useEffect accepts two arguments. The second argument is optional</p>
        </div>
    );
};

export default Blog;