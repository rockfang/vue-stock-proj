const state = {
  funds: 10000,//资金
  stocks: [] //已拥有的股票
};
const mutations = {
  //把购买逻辑放此处，也可放在stocks.js模块
  "BUY_STOCK" (state,{id,quantity,price}) {
    //找到匹配的股票
    let record = state.stocks.find(element => id == element.id);
    //判断是否改股票已经拥有
    if(record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id,
        quantity,
      });
    }
    state.funds -= price * quantity;
  },
  //售卖股票
  "SELL_STOCK" (state,{id,quantity,price}) {
    let record = state.stocks.find(element => id == element.id);
    if(record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record),1);
    }
    state.funds += price * quantity;
  },

  "SET_PORTFOLIO" (state,{funds,stockPortfolio}) {
    state.funds = funds;
    state.stocks = stockPortfolio;
  }
};

const actions = {
  sellStock({commit},order) {
    commit("SELL_STOCK",order);
  }
};

const getters = {
  //获取拥有的股票,通过map变换，找到股票中心的stocks中对应股票(包含该股票的全部信息)
  stockPortfolio(state,getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds: state => {
    return state.funds;
  }
};
export default  {
  state,
  mutations,
  actions,
  getters
}
