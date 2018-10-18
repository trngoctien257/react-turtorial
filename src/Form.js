import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name : '',
            job  : ''
        }

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name, job} = this.state;

        return(
            <form>
                <label>Name: </label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                <label>Job: </label>
                <input type="text" name="job" onChange={this.handleChange} value={this.state.job} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;