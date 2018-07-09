import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Contact extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            name: "",
            email: "",
            question: ""
        };

        this.contact = this.contact.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    contact(e) {
        e.preventDefault();

        axios.post('/api/contact', {
            name: this.state.name,
            email: this.state.email,
            question: this.state.question
        })
        .then (res => {
            //Todo
        });
    }

    updateField(e){
        switch (e.target.id) {
            case "name":
                this.setState({
                    name: e.target.value
                });
                break;
            case "email":
                this.setState({
                    email: e.target.value
                });
                break;
            case "question":
                this.setState({
                    question: e.target.value
                });
                break;
        }                
    }

    render(){
        return (
            <section className="contact">
                <form>
                    <p>I'm interested in hearing what I can do for you...</p>

                    <label htmlFor="name">Name</label>
                    <input type="text" 
                           id="name" 
                           value={this.state.name}
                           onChange={this.updateField} />

                    <label htmlFor="email">Email</label>
                    <input type="email" 
                           id="email" 
                           value={this.state.email}
                           onChange={this.updateField} />

                    <label htmlFor="question">Your inquiry</label>
                    <textarea id="question" 
                              value={this.state.question}
                              onChange={this.updateField} />

                    <div className="controls">
                        <Link to="/">Go back</Link>
                        <button onClick={this.contact}>Send</button>
                    </div>
                </form>
            </section>
        );
    } 
}

export default Contact;