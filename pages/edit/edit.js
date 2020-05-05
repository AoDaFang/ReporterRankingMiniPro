// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reporterList: [
      '方明伟',
      '王五',
      '李四'
    ],
    reporterIndex: '',
    channelList: [
      '揍嘛新闻',
      '闪电新闻',
      '大众日报'
    ],
    currentRepoter: '选择记者',
    currentChannel: '选择渠道'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 改变记者选择
  bindPickerChange(e) {
    // 选择记者
    if (e.target.dataset.tag === 'reporterPicker') {
      this.setData({ currentRepoter: this.data.reporterList[e.detail.value] })
    } else if (e.target.dataset.tag === 'channelPicker') {
      this.setData({ currentChannel: this.data.channelList[e.detail.value] })
    }
  },

  // 点击确定
  OKTap() {
    console.log('点击了确定');
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