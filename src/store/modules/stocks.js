import stocksdata from "../../data/stocksdata.js"
const state = {
  stocks: []
};

const mutations = {
  "SET_STOCKS" (state,stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS (state) {
    // state.stocks.map(stock => {
    //   stock.price = Math.ceil(stock.price * ((Math.random() + 1)-0.5));
    // });
    //简单算法修改股票价格在原价的0.6-1.5倍之间
    state.stocks.forEach(stock => {
      stock.price = Math.ceil(stock.price * ((Math.random() + 1)-0.5));
    })
  }
};

const actions = {
  initStocks: ({commit}) => {
    commit("SET_STOCKS",stocksdata);
  },
  buyStock: ({commit},order) => {
    commit("BUY_STOCK",order);
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
