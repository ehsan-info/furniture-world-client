import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl'>Some Users' Question !!!</h2>
            <h4 className='text-primary'>What are the different ways to manage a state in a React application?</h4>
            <p className='text-muted'>There are four different ways</p>
            <ul>
                <li>Local State</li>
                <li>Global State</li>
                <li>Server State</li>
                <li>URL State</li>
            </ul>
            <h4 className='text-primary'>How does prototypical inheritance work?</h4>
            <p className='text-muted'>A prototype-based, object-oriented programming language is JavaScript. After the ES6 revisions, JavaScript supported "prototypal inheritance," which allows for the sharing, extending, and copying of objects and methods.</p>
            <p className='text-muted'>Sharing among objects makes inheritance of state, behavior, and structure (data fields) simple (data values).</p>
            <p className='text-muted'>The most popular prototype-capable language is JavaScript, and it has several quite specialized features. Prototypical inheritance in JavaScript is a potent technique that, when utilized properly, can prevent hours of code.</p>
            <h4 className='text-primary'>What is a unit test? Why should we write unit tests?</h4>
            <p className='text-muted'>Individual software modules or components are tested as part of a type of software testing known as unit testing. The goal is to confirm that each piece of software code operates as intended. Developers perform unit testing while creating an application (the coding phase). Unit tests isolate a specific piece of code and validate its accuracy. An singular function, method, procedure, module, or object might be considered a unit.</p>
            <h4 className='text-primary'>React vs. Angular vs. Vue?</h4>
            <p className='text-muted'>Angular is a complete front-end framework, React is a UI library, and Vue.js is a progressive framework.</p>
            <p className='text-muted'>
                React Or React Built By Facebook ensuring faster loading.
            </p>
            <p className='text-muted'>
                Angular Built by Google. Without a question, Angular is the most popular framework out of the three. In actuality, a platform rather than a framework is sometimes used to describe it. However, React has eclipsed Angular with its unrivaled features.
            </p>
            <p>
                Vue.js is A Community-Driven Framework.We may construct progressive single-page apps using the Vue.js progressive framework. Vue is all about creating User Interfaces by integrating reusable components, just as Angular and React. Beyond that, though, Vue offers more React functionality and less Angular, which is why it is outperforming Angular.
            </p>
        </div>
    );
};

export default Blog;