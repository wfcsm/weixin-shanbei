// pages/remember/cet4/cet4.js
var word = require('../../word/word.js')
let list;
let total_word=20;  //背单词数量

const unknow_list = [] //不记得单词的数组
let unknow_word = unknow_list.length; //不记得单词

const know_list = []//认识单词的数组
let know_word = know_list.length; //记得单词
 

let LWidth;
let RWidth;



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
    // let LWidth;
    let width = this.wordWidth();
    
    //如果认识单词等于总数
    if (know_list.length == total_word){
      //跳转到成功页面
      wx.redirectTo({
        url: '../../summarize/summarize',
      })
   }else if((know_list.length + unknow_list.length)==total_word){
     know_list.push(word.wordList[list[know_word]]);

     LWidth = know_word * width ;
     //随机不知道单词数组的下标
     let index =Math.floor((Math.random()*(unknow_list.length)));
     this.setData({
       content:unknow_list[index].content,
       knowWidth: LWidth,
       definition: unknow_list[index].definition,
       pron: unknow_list[index].pron,
       
     })

   }else{
      know_list.push(word.wordList[list[know_word]]);
      // LWidth = (know_word+1) * width+"%";
      LWidth = (know_word + 1) * width ;
      this.setData({
        content: word.wordList[list[know_word]].content,
        knowWidth: LWidth,
        definition: word.wordList[list[know_word]].definition,
        pron: word.wordList[list[know_word]].pron
      })
   }
    know_word++
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
      showModel:true
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const arr=[];
    while(arr.length<total_word){
      let num = Math.floor(Math.random() * 1001) + 1;
      if (arr.indexOf(num) == -1) {
        arr.push(num);
      }
    }
    this.setData({
        content:word.wordList[arr[0]].content
    }) 
    list =arr
    console.log(list)
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