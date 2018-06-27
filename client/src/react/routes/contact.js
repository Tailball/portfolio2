import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return <section className="contact">
        <form>
            <p>I'm interested in hearing what I can do for you...</p>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="question">Your inquiry</label>
            <textarea id="question" />

            <div className="controls">
                <Link to="/">Go back</Link>
                <button>Send</button>
            </div>
        </form>
    </section>;
};

export default Contact;