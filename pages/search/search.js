// pages/search/search.js
var word=require('../word/word.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    arr:[]
  },
  /**
   * 输入框聚焦时触发
   */
  search(e){
    let temp_list = [];
    console.log(e.detail.value)
    if(e.detail.value == ""){
      console.log(2);
      this.setData({
        show:false,
        arr: []
      })
    }else{
      // console.log(e.detail.value);
      //循环 word.wordList 数组
      for (var i of word.wordList) {
        // console.log(i.content.indexOf(e.detail.value));
        if (i.content.indexOf(e.detail.value) > -1) {
          temp_list.push(i);
        }
      }
      this.setData({
        show: true,
        arr: temp_list
      })
    }
    
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(word);
    
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