/**
 * Created by Administrator on 2019/2/27.
 */
var mongoose = require('mongoose');
var url = 'mongodb://localhost/movieServer';
mongoose.connect(url);
//�������ݿ�
module.exports = mongoose;