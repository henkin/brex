import React, { Component, PropTypes } from 'react'

import { ItemList } from './itemList';
import { ItemEdit } from './itemEdit';

export class Main extends React.Component {
    constructor(thing) {
        super(thing);
        this.items = [
            {id: 1234, name: 'Item 1 is good'},
            {id: 4234, name: 'Item 2 is better'}
        ];
        console.log('Main', this.items);
    }

    render() {
        return (
            <div className="list-group">
                <p><h1>Items</h1></p>
                <ItemList items={this.items} />
                <br />
                <ItemEdit />
            </div>
        )
    }
}
