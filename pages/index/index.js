const typeMap = {
  'gn':'国内',
  'gj':'国际',
  'cj':'财经',
  'yl':'娱乐',
  'js':'军事',
  'ty':'体育',
  'other':'其他'
}



Page({
  data: {
    newsType:['国内','国际','财经','娱乐','军事','体育','其他'],
    newsList:[0,1,2,3,4,5,6,7,8]
  },
  onLoad() {
    // wx.request({
    //   url: 'https://test-miniprogram.com/api/news/list',
    //   data: {
        
    //   },
    //   success: res => {
        
    //   }
    // })
  } 
})
