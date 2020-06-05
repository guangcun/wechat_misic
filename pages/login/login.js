// pages/login/login.js
import request from '../../utils/requset'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:''
  },
  handleInput(event){
    let type=event.currentTarget.id  
    this.setData({
      [type]:event.detail.value
    })
  },
  async toLogin(){
    const {phone,password}=this.data
  if(!phone|| ! password){
    wx.showToast({
      title: '请输入手机号/密码',
      icon:'none'
    })
  }else{
    let result=await request('/login/cellphone',{phone:this.data.phone,password:this.data.password,isLogin:true})
    if(result.code===400){
      wx.showToast({
        title: '手机号错误',
        icon:'none'
      })
    }else if(result.code===502){
      wx.showToast({
        title: '密码错误',
        icon:'none'
      })
    }else{
      wx.showToast({
        title: '登陆成功',
        success:()=>{
          wx.setStorage({
            data: JSON.stringify(result.profile),
            key: 'userInfo',
          })
          wx.switchTab({
            url:'/pages/personal/personal'
          })
        }
      })
    }
  }
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