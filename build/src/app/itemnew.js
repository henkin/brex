'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var ItemEdit = exports.ItemEdit = (function (_React$Component) {
    _inherits(ItemEdit, _React$Component);

    function ItemEdit(thing) {
        _classCallCheck(this, ItemEdit);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItemEdit).call(this, thing));

        console.log(thing);
        return _this;
    }

    _createClass(ItemEdit, [{
        key: 'handleTextChange',
        value: function handleTextChange() {
            this.setState({ text: e.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var author = this.state.author.trim();
            var text = this.state.text.trim();
            if (!text) {
                return;
            }
            // TODO: send request to the server
            this.setState({ text: '' });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { className: 'commentForm', onSubmit: this.handleSubmit },
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'New Item',
                    value: '',
                    onChange: this.handleTextChange
                }),
                React.createElement('input', { type: 'submit', value: 'Post' })
            );
        }
    }]);

    return ItemEdit;
})(React.Component);
//# sourceMappingURL=itemnew.js.map