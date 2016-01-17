"use strict";

var express = require('express'),
  router = express.Router(),
  React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  Main = require('../build/src/app/main.js').Main,
  mainElement = React.createFactory(Main);

router.get('/', function(req, res, next) {
  Main = require('../build/src/app/main.js').Main;
  mainElement = React.createFactory(Main);
  var output = ReactDOMServer.renderToString(mainElement({user: req.user}));

  //deleteCache();

  res.render('index', {
    title: 'Express',
    user: req.user,
    serializedUser: JSON.stringify(req.user || {}, null, '\t'),
    reactOutput: output
  });
});

function deleteCache() {
  delete require.cache[require.resolve('../build/src/app/main.js')];
  delete require.cache[require.resolve('../build/src/app/item.js')];
  delete require.cache[require.resolve('../build/src/app/itemEdit.js')];
  delete require.cache[require.resolve('../build/src/app/itemList.js')];
}

module.exports = router;
