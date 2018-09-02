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
  // 获取对应新闻的详情内容
  getDetail(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail', 
      data: {
        id:this.data.id
      },
      success: res => {
        let result = res.data.result  
        this.getTopData(result)
        this.getDetailData(result)
      }
    })
  },
  // 获取新闻详情页顶部信息
  getTopData(result){
    let title = result.title
    let date = result.date
    let source = result.source
    let readCount = result.readCount
    // 如果来源为空，默认"DUDU新闻"
    // if(source == ''){
    //   source = 'DUDU新闻'
    // }
    this.setData({
      title: title,
      date: date.slice(0, 10) + " " + date.slice(11, 16),
      source: source || "DUDU新闻",
      readCount: readCount
    })
  },
  // 获取新闻详情页具体文章
  getDetailData(result){
    let firstImage = result.firstImage
    let content = result.content
    this.setData({
      firstImage: firstImage || "/images/default_image.jpg",
      content: content
    })
  }
})