// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sideBar: ['常见虫害', '白蚁专区', '别墅除虫', '商业除虫'],
    num: 1,
    contentArray: {
      0: [
        {
          name: '除蟑螂服务',
          icon: 'cockroach',
        },
        {
          name: '灭跳蚤服务',
          icon: 'flea',
        },
        {
          name: '灭老鼠服务',
          icon: 'rats',
        },
        {
          name: '除蚂蚁服务',
          icon: 'ants',
        },
        {
          name: '白蚁灭治',
          icon: 'white_ant_check',
        },
        {
          name: '综合虫害预防',
          icon: 'pest_prevention',
        },
        {
          name: '未知虫害鉴定',
          icon: 'unknownpest2',
        }
      ],
      1: [
        {
          name: '白蚁灭治',
          icon: 'white_ant_check',
        },
        {
          name: '白蚁预防',
          icon: 'white_ant_precaution',
        },
      ],
      2: [
        {
          name: '综合虫害管家服务',
          icon: 'villa_package_A',
        },
        {
          name: '飞虫无忧',
          icon: 'villa_package_B',
        },
        {
          name: '综合虫害预防',
          icon: 'pest_prevention',
        },
        {
          name: '派对准备',
          icon: 'party_prepair',
        },
      ],
    },
    menuActive: 0
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
    console.log(123);
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
  // 点击左侧按钮
  sideLink: function(e) {
    // console.log(e.currentTarget.dataset.id);
    this.menuActive = e.currentTarget.dataset.index;
    this.setData({
      menuActive: e.currentTarget.dataset.index
    })
    console.log(e.currentTarget.dataset.index);
  },
  // 点击商品服务
  selectService: function(e) {
    console.log(e);
  },
  // 点击打电话
  callPhone: function(e) {
    console.log('callPhone');
  }
})