var React = require('react');

export class ItemEdit extends React.Component {
    constructor(thing) {
        super(thing);
        console.log(thing);
    }

    handleTextChange() {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        //var author = this.state.author.trim();
        //var text = this.state.text.trim();
        //if (!text) {
        //    return;
        //}
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

