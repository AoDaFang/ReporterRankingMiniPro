//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    rankingList: [
      {
        name: "方明伟",
        rank: 1,
        provincialTV: 2, //省台
        cityTVNews: 2, // 市台新闻
        dazhongDaily: 32, // 大众日报
        dezhouDaily: 31, // 德州日报
        dezhou24Hour: 31, // 德州24小时
        lightningNews: 312, // 闪电新闻
        zoumaNews: 312 // 奏嘛新闻
      },
      {
        name: "李四",
        rank: 1,
        provincialTV: 2, //省台
        cityTVNews: 2, // 市台新闻
        dazhongDaily: 32, // 大众日报
        dezhouDaily: 31, // 德州日报
        dezhou24Hour: 31, // 德州24小时
        lightningNews: 312, // 闪电新闻
        zoumaNews: 312 // 奏嘛新闻
      }
    ]
  },
  onLoad: function () {
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 下拉刷新
  onPullDownRefresh() {
    console.log("正在下拉刷新");
    const that = this
    // wx.request({
    //   url: '',
    //   data: {
    //   },
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {

    //   }
    // })
  },
  // 点击编辑按钮
  editData: function(){
    
  }
})
