// pages/remember/cet4/cet4.js
var word = require('../../word/word.js')
let list;
let total_word=20;  //背单词数量

const unknow_list = [] //不记得单词的数组
let unknow_word = unknow_list.length; //不记得单词

let know_list = []//认识单词的数组
let know_word = 0; //记得单词
 

let LWidth;
// let RWidth;
 
let remember_list=[] ;



Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    knowWidth: 0,
    showModel: false,
    definition:"",
    pron:""
    // unknowWidth: 0,
    // width=0
  
  },

  /**
   * 一个单词在进度条中的宽度
   */
  wordWidth(){
    return (1/total_word)*100;
  },

  /**
   * 点击认识按钮执行
   */
  know(){
    know_word++
    // let LWidth;
    let width = this.wordWidth();
    // console.log(know_list.length);
    //如果认识单词等于总数
    if (know_list.length == (total_word-1)){
      //跳转到成功页面
      wx.redirectTo({
        url: '../../summarize/summarize',
      })
   }else{
      know_list.push(word.wordList[list[know_word]]);
      // LWidth = (know_word+1) * width+"%";
      LWidth = (know_word + 1) * width ;
      // console.log(know_word);
      // console.log(word.wordList[list[know_word]].content)
      this.setData({
        content: word.wordList[list[know_word]].content,
        knowWidth: LWidth,
        // definition: word.wordList[list[know_word]].definition,
        // pron: word.wordList[list[know_word]].pron
      })
   }
    
  },
  /**
   * 关闭弹窗
   */
  hideModel() {
    this.setData({
      showModel: false
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventModel() {

  },
  /**
   * 按钮点击关闭弹窗
   */
  onCancel() {
    this.hideModel();
  },
  /**
   * 点击不认识按钮执行
   */
  unknow(){
    this.setData({
      showModel:true,
      content: word.wordList[list[know_word]].content,
      knowWidth: LWidth,
      definition: word.wordList[list[know_word]].definition,
      pron: word.wordList[list[know_word]].pron
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const arr=[]
    if(know_list.length==(total_word-1)){
      know_word=0;
      know_list.length = 0;
      remember_list.length = 0;

    }

    if (remember_list.length == total_word){
      LWidth = (know_word + 1) * this.wordWidth();
      this.setData({
        content: word.wordList[remember_list[know_word]].content,
        knowWidth: LWidth,
        
      })
      return remember_list;
    }else{
      while (arr.length < total_word) {
        let num = Math.floor(Math.random() * 1001) + 1;
        if (arr.indexOf(num) == -1) {
          arr.push(num);
        }
      }
      this.setData({
        content: word.wordList[arr[0]].content
      })
      list = arr
      remember_list = arr
      console.log(remember_list)
      return list;
    }
    
     












    // if ((know_list.length ) == (total_word-1)){
    //   know_word=0;
    //   know_list.length=0;
    //   remember_list.length=0;
    // }
    
    //   const arr = [];
    //   while (arr.length < total_word) {
    //     let num = Math.floor(Math.random() * 1001) + 1;
    //     if (arr.indexOf(num) == -1) {
    //       arr.push(num);
    //     }
    //   }
    //   this.setData({
    //     content: word.wordList[arr[0]].content
    //   })
    //   list = arr
    //   remember_list = arr
    //   console.log(list)

    // return list;
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