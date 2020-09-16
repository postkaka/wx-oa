export default function(options) {
  return new Promise((resovle,reject) => {
    wx.request({
      url: 'options.url',
      method: options.method || "get",
      data: options.data || {},
      success: resovle,
      fail: reject
    })
  })
}