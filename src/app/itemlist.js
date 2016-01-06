var React = require('react');
var Item = require('./item').Item;

export class ItemList extends React.Component {
    constructor(thing) {
        super(thing);
        console.log(thing);
    }

    render() {
        return (<div className="itemList">
            <ul>
                <li><Item /></li>
            </ul>
        </div>)
    }
}
