//import React, { Component, PropTypes } from 'react'
var React = require('react');

export class Item extends React.Component {
    constructor(data) {
        super(data);
        this.name = data.name;
        console.log('Item', this.name);
    }

    render() {
        return (<a key="#" className="list-group-item">{this.name}</a>
        )
    };
}