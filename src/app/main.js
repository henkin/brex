import React, { Component, PropTypes } from 'react'

import { ItemList } from './itemList';
import { ItemEdit } from './itemEdit';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.items = [];

        console.info('Main loaded', props);
        this.onItemAdded = this.onItemAdded.bind(this);
    }

    onComponentDidMount() {
        this.setState({items: this.items});
    }

    onItemAdded(item)
    {
        this.items.push(item);

        $.ajax({
            url: '/api/items',
            dataType: 'json',
            type: 'POST',
            data: item,
            success: function(data) {
                //this.setState({name: data});
            }.bind(this),
            error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
            }.bind(this)
        });

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
