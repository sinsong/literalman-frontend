import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {GET_MAN_HTML} from './mutation-types'

Vue.use(Vuex)
const HOST = "http://localhost:8080/"

export default new Vuex.Store({
  //TODO init state shoule be setted
  state: {
    htmlContent: {
      code: "",
      content: ""
    }
  },
  mutations: {
    [GET_MAN_HTML] (state, querySet) {
      axios({
        method: 'post',
        url: HOST + 'man',
        data: querySet,
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        Vue.set(state.htmlContent, "code", response.data.code)
        Vue.set(state.htmlContent, "content", response.data.content)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
