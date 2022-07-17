import React from 'react';
import { render } from 'react-dom';
import { Redirect, Link, Route } from 'react-router-dom';


class Complete extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault()
        this.props.history.push('/vdeos')
    }

    render() {

        return (
            <div className="last-step">
                <img src={window.completeURL}></img>
                <h1> Congratulations, bla bla.</h1>
                <h3>Help yourself to some Phoking Movies.</h3>

                <button onClick={this.handleSubmit}>CONTINUE</button>

            </div>
        )
    }
};

export default Complete;
