'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _main = require('./main');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// we need the user passed in a parameter
(0, _reactDom.render)(_react2.default.createElement(_main.Main, { user: serializedUser }), document.getElementById('example'));
//# sourceMappingURL=index.js.map