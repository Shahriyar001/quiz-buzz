import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h3>3 new blog has been published</h3>
            <div className='blog-sec'>
                <div className='blog-qa'>
                    <h4>What is the purpose of react router?</h4>
                </div>
                <div className='blog-qa'>
                    <p>Client-side routing can be achieved in React applications using different external libraries. The most popular of these libraries is React Router—a lightweight open-source routing library for React.js built and maintained by the Remix team. In late 2021, Tanner Linsley introduced React Location, an enterprise routing library for React applications, to solve some of the limitations of previous routing mechanisms. Today, React Location has evolved into a full-fledged routing library.

                        In this post, we’ll point out the significance of client-side routing vs. server-side routing before walking through the process of implementing React Router in a simple React application. Finally, we will introduce React Location as an alternative to React Router and go through some of its unique capabilities. To proceed, you need a basic understanding of React.js.</p>
                </div>
            </div>
            <div className='blog-sec'>
                <div className='blog-qa'>
                    <h4>How does context api work?</h4>
                </div>
                <div className='blog-qa'>
                    <p>As we mentioned earlier, the Context API is useful for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and more. In situations where we have these types of data, we can use the Context API and we don’t necessarily have to use extra modules.

                        In fact, any situation where you have to pass a prop through a component so it reaches another component somewhere down the tree is where you can use the Context API.
                        ith the new Context API, several new functions have been added to the mix creating giving us a rich tool to work with. If you’ve previously attempted to use the old (experimental, do not use) Context API, you may have come across some methods. However, let’s look at some code snippets on how we can use the Context API.</p>
                </div>
            </div>
            <div className='blog-sec'>
                <div className='blog-qa'>
                    <h4>Use ref hook</h4>
                </div>
                <div className='blog-qa'>
                    <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.

                        Example: How to access the DOM using useRef hook.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;