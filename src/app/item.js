//import React, { Component, PropTypes } from 'react'
var React = require('react');

export class Item extends React.Component {
    constructor(thing) {
        super(thing);
        console.log(thing);
    }

    handleTextChange() {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text) {
            return;
        }
        // TODO: send request to the server
        this.setState({text: ''});
    }

    render() {
        return (<div className="list-group-item">
            <ul>
                <li></li>
            </ul>
        </div>)
    };
}