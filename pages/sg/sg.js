/**
 * //获取应用实例(后续会使用到)
 *const app = getApp()
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldValue :"", 
    value:'0' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        //
        this.setData({
          oldValue:"这个是原始值"
        })
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
  changeValue:function(e){
    //实现新值与原始值之间的切换
    if (0 == e.currentTarget.dataset.value){
      this.setData({
        oldValue: "这个是新值",
        value: 1
      })
    }else{
      this.setData({
        oldValue: "这个是原始值",
        value: 0
      })
    }
    
   
  }

})