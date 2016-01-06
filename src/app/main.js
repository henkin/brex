import React, { Component, PropTypes } from 'react'

import { ItemList } from './itemlist';

export class Main extends React.Component {
    render() {
        return (
            <div>
                <p>Items (there are X)</p>
                <ItemList />
            </div>
        )
    }
}
