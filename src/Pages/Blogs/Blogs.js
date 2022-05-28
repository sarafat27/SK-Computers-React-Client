import React from 'react';

const Blogs = () => {
    return (
        <div className='mb-6'>
            <h1 className='text-center text-success text-3xl font-bold mb-3'>These are some basics of reactJS</h1>
            <h3 className='text-3xl text-black-700'>(1) How will you improve the performance of a React Application?</h3>
            <p className='ml-5 mt-4'>Ans: 1.Keeping component state local where necessary.
                <br></br>
                2.Memoizing React components to prevent unnecessary re-renders.
                <br></br>
                3.Code-splitting in React using dynamic import()
                <br></br>
                4.Windowing or list virtualization in React.
                <br></br>
                5.Lazy loading images in React.</p>
            <h3 className='text-3xl text-black-700'>(2)  What are the different ways to manage a state in a React application?</h3>
            <p className='ml-5 mt-4'>Ans: There are four main types of state you need to properly manage in your React apps:
                <br></br>
                1.Local state
                <br></br>
                2.Global state
                <br></br>
                3.Server state
                <br></br>
                4.URL state</p>
            <h3 className='text-3xl text-black-700'>(3) How does prototypical inheritance work?</h3>
            <p className='ml-5 mt-4'>Ans: Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript

                used to add methods and properties in objects. It is a method by which an object can inherit
                the properties and methods of another object. Traditionally,
                in order to get and set the [[Prototype]] of an object,
                we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays,
                in modern language, it is being set using _proto_</p>
            <h3 className='text-3xl text-black-700'>(4)  Why you do not set the state directly in React?</h3>
            <p className='ml-5 mt-4'>Ans:  1.If you update it directly, calling the setState() afterward may just replace the update you made.<br></br>
                2.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will
                only return the present value.<br></br>
                3.You will lose control of the state across all components.</p>
            <h3 className='text-3xl text-black-700'>(5) What is a unit test? Why should write unit tests?</h3>
            <p className='ml-5 mt-4'>Ans: <span className='font-bold'>Unit test:</span> Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input. For React components,
                this could mean checking that the component renders correctly for the specified props <br></br>
                <span className='font-bold'>Why should write unit tests:-</span> Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code.
                This can help them to stay focused and can also help them to create much better designs</p>

        </div>
    );
};

export default Blogs;