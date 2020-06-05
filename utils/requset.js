
import config from './config'
export default (url,data={},method='GET')=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.host+url,
      //url: config.modileHost+url,
      data,
      header:{
         //cookie:(wx.getStorageSync('cookies')|| []).toString()
        cookie:(JSON.parse(wx.getStorageSync('cookies')|| '[]')).toString()
      },
      success:(res)=>{
        if(data.isLogin){
          wx.setStorage({
            data:JSON.stringify(res.cookies),
            //data:res.cookies,
            key: 'cookies',
          })
        }
        resolve(res.data)
      },
      fail:(err)=>{
        console.log('请求数据失败',err)
      }
    })
  })
}