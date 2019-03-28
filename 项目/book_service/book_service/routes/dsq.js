var express = require('express');
var router = express.Router();
var dsq = require('../models/dsq');
router.get('/list', function (req, res, next) {
    dsq.findAll(function (err, allMovie) {
        res.json({status: 0, message: '获取成功', data: allMovie})
    })
});

router.get('/add', function (req, res, next) {
   var objectlc = new dsq({
       src:'../static/img/bg3.gif',
       name:'今晚打老虎',
       nr:'两只老虎'
   })
    objectlc.save();
    res.json({status: 0, message: '添加成功'})
});
module.exports = router;