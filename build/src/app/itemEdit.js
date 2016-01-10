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

    function ItemEdit(props) {
        _classCallCheck(this, ItemEdit);

        //console.log(thing);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItemEdit).call(this, props));

        _this.state = { name: '' };
        _this.onItemAdded = props.onItemAdded;
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleTextChange = _this.handleTextChange.bind(_this);
        return _this;
    }

    _createClass(ItemEdit, [{
        key: 'handleTextChange',
        value: function handleTextChange(e) {
            this.setState({ name: e.target.value });
            console.log('t', e.target.value);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var item = { id: this.guid(), name: this.state.name.trim() };
            console.log(item);
            this.onItemAdded(item);
            // TODO: send request to the server
            this.setState({ name: '' });
        }
    }, {
        key: 'guid',
        value: function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { className: 'form-inline', onSubmit: this.handleSubmit },
                React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                        'label',
                        { className: 'sr-only', htmlFor: 'exampleInputAmount' },
                        'New Item'
                    ),
                    React.createElement(
                        'div',
                        { className: 'input-group' },
                        React.createElement('input', { type: 'text',
                            className: 'form-control',
                            id: 'exampleInputAmount',
                            placeholder: 'Something Great',
                            value: this.state.name,
                            onChange: this.handleTextChange
                        }),
                        React.createElement(
                            'span',
                            { className: 'input-group-btn' },
                            React.createElement(
                                'button',
                                { type: 'submit', className: 'btn btn-default' },
                                'Post'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ItemEdit;
})(React.Component);
//# sourceMappingURL=itemEdit.js.map