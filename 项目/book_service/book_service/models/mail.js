/**
 * Created by Administrator on 2019/2/27.
 */
//������ص��ļ��ʹ����
var mongoose = require('../common/db');
//�������ݼ�����һ���µ�mail��������
var mail = new mongoose.Schema({
    fromUser:String,
    toUser:String,
    title:String,
    context:String
})
//���ݲ�����һЩ���õķ���
mail.statics.findByToUserId = function (user_id,callBack) {
    this.find({toUser:user_id},callBack);
};
mail.statics.findByFromUserId = function (user_id,callBack) {
    this.find({fromUser:user_id},callBack);
};
var mailModel = mongoose.model('mail',mail);
module.exports = mailModel