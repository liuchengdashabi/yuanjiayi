/**
 * Created by Administrator on 2019/2/28.
 */
var mongoose = require('../common/db');
//���ݿ�����ݼ�
var recommend = new mongoose.Schema({
    recommendImg:String,
    recommendSrc:String,
    recommendTitle:String
})
//���ݲ�����һЩ���÷���
//ͨ��ID��ȡ��ҳ�Ƽ�
recommend.statics.findByIndexId = function (m_id,callBack) {
    this.find({finByIndexId:m_id},callBack);
}
//�ҵ����е��Ƽ�
recommend.statics.findAll = function (callBack) {
    this.find({},callBack);
};
var recommendModel = mongoose.model('recommend',recommend);
module.exports = recommendModel