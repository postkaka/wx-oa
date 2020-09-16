// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 点击跳转页面订单管理页面
  contentListBtn(){
    console.log("点击成功了")
    wx.navigateTo({
      url:"../sale/index"
    })
  }, 
  // 点击跳转库存管理页面
  contentInventory(){
    console.log("点击跳转库存管理")
    wx.navigateTo({
      url: '../inventory/inventory',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://192.168.1.149:8084/lnbyadminproject/test',
    //   success(res){
    //     console.log(res)
    //   },
    //   fail(res){
    //     console.log(res)
    //   }
    // })
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

  }
})