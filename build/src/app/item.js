'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React, { Component, PropTypes } from 'react'
var React = require('react');

var Item = exports.Item = (function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item(data) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, data));

        _this.name = data.name;
        console.log('Item', _this.name);
        return _this;
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'a',
                { key: '#', className: 'list-group-item' },
                this.name
            );
        }
    }]);

    return Item;
})(React.Component);
//# sourceMappingURL=item.js.map