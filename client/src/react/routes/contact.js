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
            question: "",
            message: undefined,
            messageIsError: false
        };

        this.contact = this.contact.bind(this);
        this.updateField = this.updateField.bind(this);
        this.getTranslation = this.getTranslation.bind(this);
    }

    contact(e) {
        e.preventDefault();

        let validation = "";
        if(!this.state.name) {
            validation = "Name is required. ";
        }
        if(!this.state.email) { 
            validation += "Email is required. ";
        } else {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexEmail.test(this.state.email.toLowerCase())) {
                validation = "Email address is not valid. ";
            }
        }
        if(!this.state.question) { 
            validation += "Your question is required. ";
        }

        if(validation){
            this.setState({
                messageIsError: true,
                message: validation
            });
        }
        else {
            this.setState({
                messageIsError: false,
                message: undefined
            });

            axios.post('/api/contact', {
                name: this.state.name,
                email: this.state.email,
                question: this.state.question
            })
            .then (res => { 
                console.log(`Has validation errors: ${res.data.hasValidationErrors}`)

                    this.setState((prevState, props) => ({
                        messageIsError: res.data.hasValidationErrors,
                        message: res.data.hasValidationErrors ? res.data.validationErrors : res.data.status,
                        name: res.data.hasValidationErrors ? prevState.name : "",
                        email: res.data.hasValidationErrors ? prevState.email : "",
                        question: res.data.hasValidationErrors ? prevState.question : ""
                    }));
                },
                err => { 
                    this.setState({
                        messageIsError: true,
                        message: "Something went wrong on the server. Please contact jochen.panjaer@telenet.be if the problem persists."
                    });
                }
            );
        }
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

                    <div className={ this.state.messageIsError ? "messages messages-error" : "messages messages-success" }>
                        {
                            this.state.message && 
                            (<p>{ this.state.message }</p>)
                        }                        
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