// pages/index.js
import requset from '../../utils/requset'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      banner:[],
      recommendList:[],
      topList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    // banner轮播图
   const bannerObj=await requset('/banner',{type:2})
   this.setData({
     banner:bannerObj.banners
   })
   //请求推荐歌单
   const recommendObj=await requset('/personalized',{limit:30})
   this.setData({
    recommendList:recommendObj.result
   })
   //请求排行榜
   let arr=[0,1,2,3]
   let index=0
   let topListArr=[]
   while (index<arr.length) {
     let topListObj=await requset(`/top/list?idx=${index++}`)
     topListArr.push({name:topListObj.playlist.name,tracks:topListObj.playlist.tracks.slice(0,3)})
     this.setData({
      topList:topListArr
     })
   }
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