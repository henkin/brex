import React, { Component, PropTypes } from 'react'

import { ItemList } from './itemList';
import { ItemEdit } from './itemEdit';

export class Main extends React.Component {
    constructor(thing) {
        super(thing);
        console.log('Main', this.items);
        this.onItemAdded = this.onItemAdded.bind(this);
    }

    onComponentDidMount() {
        this.setState({items: this.items});
    }

    onItemAdded(item)
    {
        this.items.push(item);
        this.setState({items: this.items});
    }

    render() {
        let itemList = this.state && this.state.items.length > 0 ?
            (<ItemList items={this.items} />) :
            (<h2>No Items!</h2>);

        return (
            <div className="list-group">
                <h1>Items</h1>
                {itemList}
                <br />
                <ItemEdit onItemAdded={this.onItemAdded}/>
            </div>
        )
    }
}
