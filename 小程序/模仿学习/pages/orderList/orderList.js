// pages/orderList/orderList.js
Component({

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
        current_list: {

        }
    },
    methods: {
        DateFomart: function (mils) {
    
          if (this.isNumber(mils)) {
            var date = new Date(mils);
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            const hour = date.getHours()
            const minute = date.getMinutes()
            var min = minute + "";
            if (minute < 10) {
              min = '0' + minute;
            }
            return year + "年" + month + "月" + day + "日 " + hour + ":" + min
          } else {
            return "";
          }
        },
        isNumber: function (val) {
          var regPos = /^\d+(\.\d+)?$/; //非负浮点数
          var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
          if (regPos.test(val) || regNeg.test(val)) {
            return true;
          } else {
            return false;
          }
        },
        getOrder: function (list) {
          var current_list = [],
            history_list = [];
          list.forEach((order) => {
            order.show_more = false;
            let edit_custom = order.order_state != 14 && order.order_state != 15 && order.order_state != 16 //test
            let more_flag1 = (order.order_state != 15) && (order.has_report == true)
            let more_flag2 = edit_custom
            // console.log(more_flag1 && more_flag2);
            let customer_service_btn = !(order.order_state != 15 && order.has_report == true && more_flag2)
            let status_list = {
              // 申请发票
              'invoice_btn': order.order_state != 15,
              //服务报告
              'report_btn': order.has_report === true,
              //评论
              'evalution_btn': (order.order_state == 14 || order.order_state == 16 || order.order_state == 13) && order.rating == -1,
              // 联系客服
              'customer_service_btn': customer_service_btn,
              // 修改联系人(待改)
              'edit_custom': edit_custom,
              // 更多（待改）
              'more_btn': more_flag1 && more_flag2 && !customer_service_btn,
            };
            if (more_flag1 && more_flag2) {
              status_list['edit_custom'] = false
              status_list['customer_service_btn'] = false
            }
            order.status_list = status_list;
    
            if (order.order_state == 14 || order.order_state == 15 || order.order_state == 16) {
              history_list.push(order)
            }else{
              current_list.push(order)
            }
          })
          return {
            current_list,
            history_list,
          }
        },
        getOrderList: function () {
          let that = this;
          wx.showLoading({
            title: '加载中',
          })
          app.RequestHttpConnect({
            method: "post",
            url: app.globalData.getOrderList,
            data: {
              count: 200,
              page_number: 0
            },
            fail: function (data) {
              wx.hideLoading();
              log.err('获取用户所有订单失败');
              log.err(data);
              wx.showToast({
                title: '获取信息失败',
                icon: 'fail',
                duration: 2000
              })
            },
            success: function (data) {
              console.log('用户订单所有数据----',data)
              log.info('成功获取用户所有订单信息')
              var create_time
              var create_timeValue
              var order_list = data.data.data.order_list;
      
              // 显示或者隐藏已过保
              for (let i in order_list) {
                let orderList = order_list[i]
                for (let j in orderList.product_list) {
                  var overtime = "orderList[" + i + "].product_list[" + j + "].overtime"
                  var qd = orderList.product_list[j].quatily_day
                  if (qd != '\\' || qd != '无质保') {
                    var nd = new Date().getTime();
                    qd = qd.replace(/年|月/g, '-').replace(/日/g, '')
                    var ad = new Date(qd).getTime();
                    if ((ad - nd) <= 0) {
                      order_list[i].product_list[j].overtime = true
                    } else {
                      order_list[i].product_list[j].overtime = false
                    }
                  } else {
                    order_list[i].product_list[j].overtime = false
                  }
                }
              }
              console.log(order_list)
      
              let listContents = [];
              for (let n in order_list) {
      
                let invoice_show = false;
                if (order_list[n].order_amount > order_list[n].need_pay_amount && order_list[n].order_amount != 0 && order_list[n].order_state != 15) {
                  invoice_show = true;
                }
                if (order_list[n].order_state == 16 && (order_list[n].invoice_status == -1)) {
                  invoice_show = false;
                }
                order_list[n].invoice_show = invoice_show;
                listContents.push(order_list[n]);
              }
              for (var index in listContents) {
                var product_list = listContents[index].product_list
                listContents[index].time = that.DateFomart(listContents[index].time * 1)
                for (var time = 0; time < listContents[index].product_list.length; time++) {
                  create_time = listContents[index].product_list[time].create_time
                }
      
              }
              if (!data.data.data.order_list) {
                that.setData({
                  orderList: [],
                  current_list: [],
                  history_list: [],
                  listIsloading: false,
                  isEmpty: true
                })
                console.warn("failed1");
              } else {
                let list = that.getOrder(data.data.data.order_list)
      
                that.setData({
                  orderList: data.data.data.order_list,
                  current_list: list.current_list,
                  history_list: list.history_list,
                  listIsloading: false,
                  isEmpty: false
                })
                console.log("failed2");
              }
              console.log(data)
              wx.hideLoading();
            },
          });
        },
        CancelOrder: function (e) {
          var that = this;
    
          wx.showModal({
            title: '提示：',
            content: '确认取消订单？',
            success: function (res) {
              if (res.confirm) {
                app.RequestHttpConnect({
                  method: "post",
                  url: app.globalData.cancelOrder,
                  data: {
                    'order_id': e.currentTarget.dataset.value.order_id
                  },
                  success: function (res) {
                    console.log(res)
                    if (res.statusCode == 200) {
                      var position = e.currentTarget.dataset.index;
                      var list = that.data.orderList;
                      // that.data.allList[position].order_state = 5;
                      wx.showToast({
                        title: '取消订单成功',
                        icon: 'succes',
                        duration: 1000,
                        mask: true
                      })
                      console.log("取消成功")
                    } else {
                      console.log("取消失败")
                      wx.showToast({
                        title: '取消订单失败',
                        duration: 1000,
                        mask: true
                      })
                    }
                    that.setData({
                      localAllList: that.data.localAllList
                    });
                  },
                  fail: function (data) {
                    wx.showToast({
                      title: '取消订单失败',
                      icon: 'succes',
                      duration: 1000,
                      mask: true
                    })
                    console.log("取消失败")
                  }
    
                });
              } else {
    
              }
            }
          })
        },
    
        select: function (e) {
          console.log(e.currentTarget.dataset.index);
          this.setData({
              select_tap: e.currentTarget.dataset.index
          })
        },
      },
})