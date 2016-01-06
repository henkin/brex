var React = require('react');
var Item = require('./item').Item;

export class ItemList extends React.Component {
    constructor(thing) {
        super(thing);
        console.log(thing);
    }

    render() {
        return (<div class="list-group">
                <a href="#" className="list-group-item disabled">
                    Cras justo odio
                </a>
                <a href="#" className="list-group-item">Morbi leo risus</a>
                <a href="#" className="list-group-item">Porta ac consectetur ac</a>
                <a href="#" className="list-group-item">Vestibulum at eros</a>
                <a href="#" className="list-group-item">Dapibus ac facilisis in</a>
            </div>
        );
    }
}
