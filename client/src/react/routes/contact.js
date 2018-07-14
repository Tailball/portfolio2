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
            validation = this.getTranslation().validationName;
        }
        if(!this.state.email) { 
            validation += this.getTranslation().validationEmail;
        } else {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexEmail.test(this.state.email.toLowerCase())) {
                validation = this.getTranslation().validationEmailForm;
            }
        }
        if(!this.state.question) { 
            validation += this.getTranslation().validationQuestion;
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
                let serverValidation = "";
                if(res.data.validationErrors) {
                    for(var i = 0; i < res.data.validationErrors.length; i++) {
                        switch(res.data.validationErrors[i]){
                            case "name":
                                serverValidation += this.getTranslation().validationName;
                                break;
                            case "email":
                                serverValidation += this.getTranslation().validationEmail;
                                break;
                            case "emailform":
                                serverValidation += this.getTranslation().validationEmailForm;
                                break;
                            case "question":
                                serverValidation += this.getTranslation().validationQuestion;
                                break;
                        }
                    }
                }

                this.setState((prevState, props) => ({
                    messageIsError: res.data.hasValidationErrors,
                    message: res.data.hasValidationErrors ? 
                                serverValidation : (res.data.status === 1 ? 
                                                        this.getTranslation().serverSuccess : this.getTranslation().serverFailure),
                    name: res.data.hasValidationErrors ? prevState.name : "",
                    email: res.data.hasValidationErrors ? prevState.email : "",
                    question: res.data.hasValidationErrors ? prevState.question : ""
                }));
            },
                err => { 
                    this.setState({
                        messageIsError: true,
                        message: this.getTranslation().serverFailure
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
                back: "Go back",
                validationName: "Name is required. ",
                validationEmail: "Email is required. ",
                validationQuestion: "Your question is required. ",
                validationEmailForm: "Email address is not valid. ",
                serverSuccess: "Your email was sent correctly!",
                serverFailure: "Something went wrong on the server. Please contact jochen.panjaer@telenet.be if the problem persists."
            } : 
            {
                title: "Ik hoor graag wat ik voor u kan betekenen...",
                name: "Naam",
                question: "Uw vraag",
                send: "Verstuur",
                back: "Ga terug",
                validationName: "Naam is vereist. ",
                validationEmail: "Email is vereist. ",
                validationQuestion: "Uw vraag is vereist. ",
                validationEmailForm: "Email is niet geldig. ",
                serverSuccess: "Uw email werd correct verstuurd!",
                serverFailure: "Er is een probleem op de server. Contacteer jochen.panjaer@telenet.be als dit probleem zich blijft voordoen."
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