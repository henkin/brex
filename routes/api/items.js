"use strict";

var config = require('config');
var r = require('../../db');

var express = require('express'),
    router = express.Router();


router.get('/', function(req, res, next) {
    res.json([{id: 2346, name: "item server"}, {id: 234, name: "item another"}]);
});

function createItem(userId, item) {
    return r.table('items')
        .insert({
            id: item.id,
            userId: userId,
            body: item.name
        })
        .run(r.conn);
};

router.post('/', function(req, res, next) {
    //res.json([{id: 2346, name: "item server"}, {id: 234, name: "item another"}]);
    console.log('getting there', req.user, req.body);
    createItem(req.user.id, req.body).then((item) => {
        res.json(item);
    }).catch(err => {
        throw Error(err);
    })
});

module.exports = router;