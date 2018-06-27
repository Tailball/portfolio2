import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="cta">
            <Link to="/contact">
                <h2>Start a project</h2>
                <p>Interested in working together?<br/>Just click this big button!</p>
            </Link>
        </section>
    );
};

export default CTA;


