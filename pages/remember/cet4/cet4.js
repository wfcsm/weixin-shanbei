// pages/remember/cet4/cet4.js
var word = require('../../word/word.js')
let list;
let num=20;  //背单词数量
let notRemenber=0; //不记得单词
let remember=0; //记得单词
let count=1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:""
  },

  know(){ 
    count++
    this.setData({
      content:word.wordList[list[count]].content
    })
    remember++
    //记住全部单词，页面跳转
    if(remember=(num-1)){
      wx.navigateTo({
        url: '',
      })
    }
  },
  unknow(){
    count++
    this.setData({
      content: word.wordList[list[count]].content
    })
    notRemenber++

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const arr=[];
    while(arr.length<num){
      let num = Math.floor(Math.random() * 1001) + 1;
      if (arr.indexOf(num) == -1) {
        arr.push(num);
      }
    }
    this.setData({
        content:word.wordList[arr[0]].content
    }) 
    list =arr
    return list;
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