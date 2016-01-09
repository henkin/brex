var React = require('react');

export class ItemEdit extends React.Component {
    constructor(thing) {
        super(thing);
        console.log(thing);
    }

    handleTextChange(e) {
        this.setState({name: e.target.value});
        console.log('text', this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        let author = this.state.name.trim();
        console.log(author);
        // TODO: send request to the server
        this.setState({text: ''});
    }

    render() {
        return (<form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="sr-only" for="exampleInputAmount">New Item</label>
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               id="exampleInputAmount"
                               placeholder="Something Great"
                               onChange={this.handleTextChange}
                        />
                        <div className="input-group-addon">Post</div>
                    </div>
                </div>
            </form>)
    };
}

