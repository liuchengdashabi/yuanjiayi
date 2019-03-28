var mongoose = require('../common/db');

var dsq = new mongoose.Schema({
    src:String,
    name:String,
    nr:String
})
dsq.statics.findById = function(id,callBack){
    this.findOne({_id:id},callBack);
};
dsq.statics.findAll = function(callBack){
    this.find({},callBack);
};
var movieModel = mongoose.model('dsq',dsq);
module.exports = movieModel;
