
Page({
  data:{
    id: 1523074607650,
    title:'',
    date:'',
    source:'DUDU新闻',
    readCount:1125,
    firstImage:''
  },
  onLoad(){
    this.getDetail()
  },
  onPullDownRefresh() {
    this.getWeekWeather(() => {
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
  getDetailData(){

  }
})