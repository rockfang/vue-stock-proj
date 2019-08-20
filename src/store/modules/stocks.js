import stocksdata from "../../data/stocksdata.js"
const state = {
  stocks: []
};

const mutations = {
  "SET_STOCKS" (state,stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS (state) {

  }
};

const actions = {
  initStocks: ({commit}) => {
    commit("SET_STOCKS",stocksdata);
  },
  buyStock: ({commit},order) => {
    commit();
  },
  randomStocks:({commit}) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};
//这里是导出一个对象，内容是，state:state,mutations:mutations...
export default  {
  state,
  mutations,
  actions,
  getters
}
