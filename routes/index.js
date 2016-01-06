
var express = require('express'),
  router = express.Router(),
  React = require('react'),
  ReactDOMServer = require('react-dom/server');
  //Main = require('../build/src/app/main.js').Main,
  //mainElement = React.createFactory(Main);

router.get('/', function(req, res, next) {
  var Main = require('../build/src/app/main.js').Main;
  var mainElement = React.createFactory(Main);
  var output = ReactDOMServer.renderToString(mainElement());

  delete require.cache[require.resolve('../build/src/app/main.js')];

  res.render('index', {
    title: 'Express',
    user: req.user,
    reactOutput: output
  });
});

module.exports = router;
