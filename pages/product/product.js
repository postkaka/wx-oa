// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {value:"host", name: "一体机门锁"},
      {value:"lock",name:"门锁"}
    ],
    choose: [
      {value:"visit", name:"上门安装"},
      {value:"DIY", name:"自行安装"}
    ]
  },
  //
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
  },
  _radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const chooses = this.data.choose
    for (let i = 0, len = chooses.length; i < len; ++i) {
      chooses[i].checked = chooses[i].value === e.detail.value
    }

    this.setData({
      chooses
    })
  },
  //上传付款信息
  viewBtn() {
    console.log("上传付款信息")
    wx.chooseImage({
      count: 1,
      sourceType: ["album","camera"],
      success(res) {
        const tempFilePaths = res.tempFilePaths
      }
    })
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

  }
})