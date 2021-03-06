'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _itemList = require('./itemList');

var _itemEdit = require('./itemEdit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = exports.Main = (function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));

        _this.items = [];

        console.info('Main loaded', props);
        _this.onItemAdded = _this.onItemAdded.bind(_this);
        return _this;
    }

    _createClass(Main, [{
        key: 'onComponentDidMount',
        value: function onComponentDidMount() {
            this.setState({ items: this.items });
        }
    }, {
        key: 'onItemAdded',
        value: function onItemAdded(item) {
            this.items.push(item);

            $.ajax({
                url: '/api/items',
                dataType: 'json',
                type: 'POST',
                data: item,
                success: (function (data) {
                    //this.setState({name: data});
                }).bind(this),
                error: (function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }).bind(this)
            });

            this.setState({ items: this.items });
        }
    }, {
        key: 'render',
        value: function render() {
            var itemList = this.state && this.state.items.length > 0 ? _react2.default.createElement(_itemList.ItemList, { items: this.items }) : _react2.default.createElement(
                'h2',
                null,
                'No Items!'
            );

            return _react2.default.createElement(
                'div',
                { className: 'list-group' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Items'
                ),
                itemList,
                _react2.default.createElement('br', null),
                _react2.default.createElement(_itemEdit.ItemEdit, { onItemAdded: this.onItemAdded })
            );
        }
    }]);

    return Main;
})(_react2.default.Component);
//# sourceMappingURL=main.js.map