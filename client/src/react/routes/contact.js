import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

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
        this.getTranslation = this.getTranslation.bind(this);
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

    getTranslation() {
        const lang = this.props.lang;
        return (
            lang === "EN" ? 
            {
                title: "I'm interested in hearing what I can do for you...",
                name: "Name",
                question: "Your enquiry",
                send: "Send",
                back: "Go back"
            } : 
            {
                title: "Ik hoor graag wat ik voor u kan betekenen...",
                name: "Naam",
                question: "Uw vraag",
                send: "Verstuur",
                back: "Ga terug"
            }
        );
    }

    render(){
        return (
            <section className="contact">
                <form>
                    <p> { this.getTranslation().title }</p>

                    <label htmlFor="name">{ this.getTranslation().name }</label>
                    <input type="text" 
                           id="name" 
                           value={this.state.name}
                           onChange={this.updateField} />

                    <label htmlFor="email">Email</label>
                    <input type="email" 
                           id="email" 
                           value={this.state.email}
                           onChange={this.updateField} />

                    <label htmlFor="question">{ this.getTranslation().question }</label>
                    <textarea id="question" 
                              value={this.state.question}
                              onChange={this.updateField} />

                    <div className="controls">
                        <Link to="/">{ this.getTranslation().back }</Link>
                        <button onClick={this.contact}>{ this.getTranslation().send }</button>
                    </div>
                </form>
            </section>
        );
    } 
}

const mapStateToProps = (state) => ({
    lang: state.language
});

export default connect(mapStateToProps)(Contact);