import React from 'react';

const Blog = () => {
    return (
        <div className='m-5 w-full md:w-3/4 mx-auto'>
            <h3 className='text-center text-2xl font-bold text-orange-700 my-5'>Our blog</h3>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL!
                </div>
                <div className="collapse-content">
                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    </li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    </li>
                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    </li>
                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </li>
                </div>
            </div>
            
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                   <p>
                   JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.
                   </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                   <p>
                    <strong>JavaScript: </strong>
                   It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.We can only run JS on browsers.It is utilised on the web page’s client-side.
                   </p>
                   <p>
                    <strong>NodeJs: </strong>
                    It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.NodeJS helps us run JS outside the browser as well.It lets us use JS on the server-side as well since it works on the server-side.
                   </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                  <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;