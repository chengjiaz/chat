// pages/getinfo/getinfo.js
/**
 * //获取应用实例(后续会使用到)
 *const app = getApp()
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {

  //测试死数据
    getInfo: [
      {
       name:'zjc',
       address:'上海市徐汇区',
       age:'20'
      
      },
      {
        name: 'yc',
        address: '上海市静安区',
        age: '22'

      },
      {
        name: 'mh',
        address: '上海市浦东新区',
        age: '26'

      }
      
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})