
Page({
  data:{
    id: 1523074607650,
    title:'',
    date:'',
    source:'DUDU新闻',
    readCount:1125,
    firstImage:'',
    content:''
  },
  onLoad(options){
    this.setData({
      id: options.id
    })
    this.getDetail()
  },
  onPullDownRefresh() {
    this.getDetail(() => {
      wx.stopPullDownRefresh()
    })
  },
  getDetail(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail', 
      data: {
        id:this.data.id
      },
      success: res => {
        let result = res.data.result  
        this.getTopData(result)
        this.getDetailData(result)
      },
      complete: () => {
        callback && callback()
      }
    })
  },
  getTopData(result){
    let title = result.title
    let date = result.date
    let source = result.source
    let readCount = result.readCount
    if(source == ''){
      source = 'DUDU新闻'
    }
    this.setData({
      title: title,
      date: date.slice(0, 10) + " " + date.slice(11, 16),
      source: source,
      readCount: readCount
    })
  },
  getDetailData(result){
    let firstImage = result.firstImage
    let content = result.content
    this.setData({
      firstImage: firstImage,
      content: content
    })
  }
})