// pages/orderList/orderList.js
const app = getApp()

Page({

  onLoad: function () {
    console.log('jiazai');
    this.getOrderList()
  },
  /**
   * 页面的初始数据
   */
  data: {
    select_tap: 1,
    order_type_list: [{
        text: '历史订单',
      },
      {
        text: '当前订单',
      },
    ],
    current_list: [],
    history_list: [],
    baseUrl: app.globalData.baseUrl
  },

  getOrderList: function () {
    let self = this
    wx.request({
      method: 'post',
      url: self.data.baseUrl + '/api/order/get_order_list_v3/',
      data: {
        count: 200,
        page_number: 0
      },
      fail: function (data) {
        console.log('fail');
        console.log(data);
      },
      success: function (data) {
        console.log(data);
      }
    })
  },
  select: function (e) {
    console.log(e.currentTarget.dataset.index);
    this.setData({
      select_tap: e.currentTarget.dataset.index
    })
  },

})