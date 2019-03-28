/**
 * Created by Administrator on 2019/2/27.
 */
var mongoose = require('../common/db');
//�û����ݼ�
var user = new mongoose.Schema({
    username:String,
    password:String,
    userMail:String,
    userPhone:String,
    userAdmin:Boolean,
    userPower:Number,
    userStop:Boolean
})
//�û��Ĳ��ҷ���
user.statics.findAll = function (callBack) {
    this.find({},callBack);
};
//ʹ���û������ҵķ�ʽ
user.statics.findByUsername = function (name,callBack) {
    this.find({username:name},callBack);
};
//��¼ƥ���ǲ���ӵ����ͬ���û��������벢��û�д��ڷ�ͣ״̬
user.statics.findUserLogin = function (name,password,callBack) {
    this.find({username:name,password:password,userStop:false},callBack);
};
//��֤���䡢�绰���û����ҵ��û�
user.statics.findUserPassword = function (name, mail, phone, callBack) {
    this.find({username:name,userMail:mail,userPhone:phone},callBack);
};
var userModel = mongoose.model('user',user);
module.exports = userModel;
