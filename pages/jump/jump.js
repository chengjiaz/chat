/**
 * //获取应用实例(后续会使用到)
 *const app = getApp()
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  //如下代码为测试代码
  //(1)页面跳转-不含参数
  jump:function(){
    wx.redirectTo({
      url: '../jumpResult/jumpResult',
    })
  },
  jumpParam:function(e){
   /**
    * 1>获取参数的形式:
    *[e.currentTarget.dataset.address]
    *[e.currentTarget.dataset.address]
    *2>可以采用拼接的形式,把参数绑定在url上
    */
    wx.redirectTo({
      url: '../jumpResult/jumpResult',
    })
  },
  //演示-跳转首页
  jumpIndex:function(){
    wx.reLaunch({
      url: '../index/index',
    })
  }
})