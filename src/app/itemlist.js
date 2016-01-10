var React = require('react');
var Item = require('./item').Item;

export class ItemList extends React.Component {
    constructor(items) {
        super(items);
        this.items = items.items;
        console.log('ItemList', this.items);
    }

    render() {
        let itemNodes = this.items.map((item) => {
            return (<Item key={item.id} name={item.name}/>)
        });
        
        return (<div className="list-group">
                    {itemNodes}
                </div>);
    }
}
