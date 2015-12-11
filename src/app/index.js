'use strict'

import React from 'react';
import { render } from 'react-dom';
//import Main from './main';

class Title extends React.Component {
    constructor(thing) {
        super(thing);
        console.log(thing);
    }

    render() {
        return (<div className="title">
            <span>{this.props.foo}</span>
        </div>)
    }
}

class Main extends React.Component {
    render() {
        return (
        <div>
            <Title foo="to the top with you!"/>
            <p>Major Content</p>
        </div>
        )
    }
}

render(
    <Main />,
    document.getElementById('example')
);
