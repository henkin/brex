'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Item = require('./item').Item;

var ItemList = exports.ItemList = (function (_React$Component) {
    _inherits(ItemList, _React$Component);

    function ItemList(items) {
        _classCallCheck(this, ItemList);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItemList).call(this, items));

        _this.items = items.items;
        console.log('ItemList', _this.items);
        return _this;
    }

    _createClass(ItemList, [{
        key: 'render',
        value: function render() {
            var itemNodes = this.items.map(function (item) {
                return React.createElement(Item, { key: item.id, name: item.name });
            });
            return React.createElement(
                'div',
                { 'class': 'list-group' },
                itemNodes
            );
        }
    }]);

    return ItemList;
})(React.Component);
//# sourceMappingURL=itemList.js.map