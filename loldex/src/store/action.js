import dump from "./dump";
import mType from "./mutation-type";

async function fetchLanguageList({commit}, payload) {
    commit(mType.FETCH_LANGUAGE_LIST, dump.languageList);
}

async function fetchSmartContract({commit}, payload) {
    commit(mType.FETCH_SMART_CONTRACT, dump.smartContract);
}

async function fetchTokenList({commit}, payload) {
    commit(mType.FETCH_TOKEN_LIST, dump.tokenList);
}

async function fetchVolumeList({commit}, payload) {
    commit(mType.FETCH_VOLUME_LIST, dump.volumeList);
}

async function fetchPriceChartData({commit}, payload) {
    commit(mType.FETCH_PRICE_CHART_DATA, dump.priceChartData);
}

async function fetchDepthChartData({commit}, payload) {
    commit(mType.FETCH_DEPTH_CHART_DATA, dump.depthChartData);
}

async function fetchTradeData({commit}, payload) {
    commit(mType.FETCH_TRADE_DATA, dump.tradeData);
}

async function fetchOrderData({commit}, payload) {
    commit(mType.FETCH_ORDER_DATA, dump.orderData);
}

async function fetchFundData({commit}, payload) {
    commit(mType.FETCH_FUND_DATA, dump.fundData);
}

async function fetchTradeList({commit}, payload) {
    commit(mType.FETCH_TRADE_LIST, dump.tradeList);
}

async function fetchOrderBookList({commit}, payload) {
    commit(mType.FETCH_ORDER_BOOK_LIST, dump.orderBookList);
}

async function setTheme({commit}, payload) {
    localStorage.setItem("theme.style", payload);
    commit(mType.SET_THEME, payload);
}

export default {
    fetchLanguageList,
    fetchSmartContract,
    fetchTokenList,
    fetchVolumeList,
    fetchPriceChartData,
    fetchDepthChartData,
    fetchTradeData,
    fetchOrderData,
    fetchFundData,
    fetchTradeList,
    fetchOrderBookList,
    setTheme
}