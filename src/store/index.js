import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // modules: {

  // },
  state: {
    blogList: []
  },
  mutations: {
    queryBlogList (state, data) {
      state.blogList = data
    }
  },
  actions: {
    // 异步处理
    getBlogList (state, searchValue) {
      fetch(`http://yanglihao.cn:3003/api/blog/list?keyword=${searchValue}`).then(res => res.json()).then(res => {
        this.commit('queryBlogList', res.data)
      })
    }
  },
  modules: {
  }
})
