const typeMap = {
  'gn':'国内',
  'gj':'国际',
  'cj':'财经',
  'yl':'娱乐',
  'js':'军事',
  'ty':'体育',
  'other':'其他'
}

// const typeMap2 = {
//   '国内':'gn',
//   '国际':'gj',
//   '财经':'cj',
//   '娱乐':'yl',
//   '军事':'js',
//   '体育':'ty',
//   '其他':'other'
// }




Page({
  data: {
    newsType:['国内','国际','财经','娱乐','军事','体育','其他'],
    // newsType: ['gn', 'gj', 'cj', 'yl', 'js', 'ty', 'other'],
    newsList:'',
    newsDate:[],
    type:'gn'
  },
  onLoad() {
    this.getNewsList()
  },
  onPullDownRefresh(){
    this.getNewsList(() => {
      wx.stopPullDownRefresh()
    })
  },



  // 点击新闻类别
  onTapNewsType0(){
    this.setData({
      type:'gn'
    })
    this.getNewsList()
  },
  onTapNewsType1() {
    this.setData({
      type: 'gj'
    })
    this.getNewsList()
  },
  onTapNewsType2() {
    this.setData({
      type: 'cj'
    })
    this.getNewsList()
  },
  onTapNewsType3() {
    this.setData({
      type: 'yl'
    })
    this.getNewsList()
  },
  onTapNewsType4() {
    this.setData({
      type: 'js'
    })
    this.getNewsList()
  },
  onTapNewsType5() {
    this.setData({
      type: 'ty'
    })
    this.getNewsList()
  },
  onTapNewsType6() {
    this.setData({
      type: 'other'
    })
    this.getNewsList()
  },

  // 点击新闻
  onTapNewList(e){
    let id = e.currentTarget.dataset.value
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },


  // 获取指定新闻类别的列表
  getNewsList(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: this.data.type
      },
      success: res => {
        let result = res.data.result
        console.log(res)
        let realResult = []
        let j = result.length
        for (let i = 0; i < j; i++) {
          realResult.push({
            id: result[i].id,
            title: result[i].title,
            date: result[i].date.slice(0, 10) + " " + result[i].date.slice(11, 16),
            source: result[i].source,
            firstImage: result[i].firstImage
          })
          if (realResult[i].source === "") {
            realResult[i].source = "DUDU新闻"
          }
        }
        this.setData({
          newsList: realResult
        })
      },
      // 用回调函数来判断是否停止下拉刷新
      complete: () => {

        // 当callback不为空的时候，执行callback函数
        callback && callback()

      }
    })
  }
})
