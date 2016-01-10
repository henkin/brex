var React = require('react');

export class ItemEdit extends React.Component {
    constructor(props) {
        super(props);
        //console.log(thing);
        this.state = {name: ''};
        this.onItemAdded = props.onItemAdded;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e) {
        this.setState({name: e.target.value});
        console.log('t', e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        let item = { id: this.guid(), name: this.state.name.trim() }
        console.log(item);
        this.onItemAdded(item);
        // TODO: send request to the server
        this.setState({name: ''});
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    render() {
        return (<form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputAmount">New Item</label>
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               id="exampleInputAmount"
                               placeholder="Something Great"
                               value={this.state.name}
                               onChange={this.handleTextChange}
                        />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-default">Post</button>
                        </span>
                    </div>
                </div>
            </form>)
    };

}

