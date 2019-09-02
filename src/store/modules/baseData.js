const baseData = {
  state: {
    pageData: {}
  },
  mutations: {
    setPageData: (state, data) => {
      state.pageData = data
    }
  },
  actions: {
    ADD_ERROR_LOG({ commit }, log) {
      commit('ADD_ERROR_LOG', log)
    }
  }
}

export default baseData
