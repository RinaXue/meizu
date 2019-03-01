import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

const api = {
  /**
   * 请求轮播图数据
  */
  requestBanner () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_311)
        })
        .catch(err => reject(err))
    })
  },
  /**
   * 请求tip数据
  */
  requesttip () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_313)
        })
        .catch(err => reject(err))
    })
  },
  /**
   * 请求hot数据
  */
  requesthot () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_314)
        })
        .catch(err => reject(err))
    })
  },
  /**
   * 请求foot数据
  */
  requestfoot () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_328)
        })
        .catch(err => reject(err))
    })
  },
  /**
   * 请求智能手机数据
  */
  requestsmartphone () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_317)
        })
        .catch(err => reject(err))
    })
  },
  /**
   * 请求homelist数据
  */
  requestacousticsTop () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_355)
        })
        .catch(err => reject(err))
    })
  },
  requestacousticsList () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_319)
        })
        .catch(err => reject(err))
    })
  },
  requestaccessoriesTop () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_356)
        })
        .catch(err => reject(err))
    })
  },
  requestaccessoriesList () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_321)
        })
        .catch(err => reject(err))
    })
  },
  requestlifeTop () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_357)
        })
        .catch(err => reject(err))
    })
  },
  requestlifeList () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=311,312,313,314,315,316,317,319,321,323,326,327,328,353,355,356,357',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_323)
        })
        .catch(err => reject(err))
    })
  },
  /**
   * 请求top组件数据
  */
  requesttoptop () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=205,206,207,208',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_206)
        })
        .catch(err => reject(err))
    })
  },
  requesttopmiddle () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=205,206,207,208',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_207)
        })
        .catch(err => reject(err))
    })
  },
  requesttopbottom () {
    return new Promise((resolve, reject) => {
      axios({
        url:'https://dms-dataapi.meizu.com/data/jsdata.jsonp?blockIds=205,206,207,208',
        adapter: jsonpAdapter
      })
        .then(data => {
          resolve(data.data.block_208)
        })
        .catch(err => reject(err))
    })
  },
  /**
   * 请求inquire数据
  */
  requestDataName (shopname) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.94.88.61:3000/api/product/search_s?shopname=' + shopname).then(data => {
        console.log(data.data)
        resolve(data.data)
      }).catch(err => reject(err))
    })
  },
  requestDataBrand (brand) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.94.88.61:3000/api/product/search_b?brand=' + brand).then(data => {
        console.log(data.data)
        resolve(data.data)
      }).catch(err => reject(err))
    })
  },
}

export default api
