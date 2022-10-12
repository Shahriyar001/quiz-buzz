import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h3>3 new blog has been published</h3>
            <div>
                <div className='blog-qa'>
                    <h4>what is the purpose of react router?</h4>
                </div>
                <div className='blog-qa'>
                    <p>Client-side routing can be achieved in React applications using different external libraries. The most popular of these libraries is React Router—a lightweight open-source routing library for React.js built and maintained by the Remix team. In late 2021, Tanner Linsley introduced React Location, an enterprise routing library for React applications, to solve some of the limitations of previous routing mechanisms. Today, React Location has evolved into a full-fledged routing library.

                        In this post, we’ll point out the significance of client-side routing vs. server-side routing before walking through the process of implementing React Router in a simple React application. Finally, we will introduce React Location as an alternative to React Router and go through some of its unique capabilities. To proceed, you need a basic understanding of React.js.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;