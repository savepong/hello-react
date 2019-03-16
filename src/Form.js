import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            first_name: '',
            last_name: '',
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { first_name, last_name } = this.state;

        return (
            <form>
                <label>First name</label>
                <input
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={this.handleChange} />

                <label>Last name</label>
                <input
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={this.handleChange} />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;

    
    