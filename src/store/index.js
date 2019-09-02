import Vue from 'vue'
import Vuex from 'vuex'
import errorLog from './modules/errorLog'
import user from './modules/user'
import getters from './getters'
import baseData from './modules/baseData'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog,
    user,
    baseData
  },
  getters,
  plugins: [createLogger()]
})

export default store
