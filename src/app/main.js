import React, { Component, PropTypes } from 'react'


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

export default Main;