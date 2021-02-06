import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/xoqpbpra"
                method="POST"
            >
                <div>
                    <label htmlFor='name'>Name:</label>
                    <br />
                    <input type='text' name='name' />
                </div>

                <div className='pt-3'>
                    <label htmlFor='email'>Email address:</label>
                    <br />
                    <input type='email' name='email' />
                </div>

                <div className='pt-3 pb-1'>
                    <label htmlFor='message'>Message:</label>
                    <br />
                    <textarea name='message' rows='5' />
                </div>
                {status === "SUCCESS"
                    ? <p>Thank you for your message!</p>
                    : <div className="pt-3">
                        <button>Submit</button>
                    </div>
                }
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}