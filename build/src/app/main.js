"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = exports.Title = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = exports.Title = (function (_React$Component) {
    _inherits(Title, _React$Component);

    function Title(thing) {
        _classCallCheck(this, Title);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Title).call(this, thing));

        console.log(thing);
        return _this;
    }

    _createClass(Title, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "title" },
                _react2.default.createElement(
                    "span",
                    null,
                    this.props.foo
                )
            );
        }
    }]);

    return Title;
})(_react2.default.Component);

var Main = exports.Main = (function (_React$Component2) {
    _inherits(Main, _React$Component2);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(Title, { foo: "to the top with you!" }),
                _react2.default.createElement(
                    "p",
                    null,
                    "Major Content"
                )
            );
        }
    }]);

    return Main;
})(_react2.default.Component);
//# sourceMappingURL=main.js.map