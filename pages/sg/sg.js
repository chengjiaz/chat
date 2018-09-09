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
    value:'0' ,
    DataValue:{
      value:'zjc'
    }
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
    //演示-页面加载时使用的方法
    wx.showLoading({
      title: '欢迎进入sg页面',
    })
   
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
  //演示-数据的获取与修改
  changeValue:function(e){
    //实现新值与原始值之间的切换
    if (0 == e.currentTarget.dataset.value){
      this.setData({
        oldValue: "这个是新值",
        value: 1
      })
      //演示-操作成功之后-信息提示
      wx.showToast({
        title: '显示新值成功!',
      })
    }else{
      this.setData({
        oldValue: "这个是原始值",
        value: 0
      })
      //演示-操作成功之后-信息提示
      wx.showToast({
        title: '显示原始值成功!',
      })
    }
    
   
  },
  //演示获取page中data数据
  getPageData:function(){
    //获取方式
    //代码
    //this.data.DataValue.value
    
  },
  //演示-手动关闭loading
  closeLoading:function(){
    //页面加载结束.loading隐藏
    wx.hideLoading();
  }

})