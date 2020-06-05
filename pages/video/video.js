import requset from '../../utils/requset'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoNavList:[],
    navVideoList:[],
    navId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    //获取导航区列表
    let videoNavListArr=await requset('/video/group/list')
    this.setData({
      videoNavList:videoNavListArr.data.slice(0,14),
      navId:videoNavListArr.data[0].id
    })
    //获取导航区视频
    let navVideoListArr=await requset('/video/group',{id:this.data.navId})
    this.setData({
      navVideoList:navVideoListArr.datas
    })
  },
  handelNavId(event){
    let navId=event.currentTarget.dataset.id >>> 0
    this.setData({
      navId
    })
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