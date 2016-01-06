import React, { Component, PropTypes } from 'react'

import { ItemList } from './itemList';
import { ItemEdit } from './itemEdit';

export class Main extends React.Component {
    render() {
        return (
            <div className="list-group">
                <p><h1>Items</h1></p>
                <ul class="list-group">
                    <li className="list-group-item"><ItemList /></li>
                    <li className="list-group-item"><ItemEdit /></li>
                </ul>
            </div>
        )
    }
}
