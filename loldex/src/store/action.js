import dump from "./dump";
import mType from "./mutation-type";

async function fetchTradeTokenList({commit}, payload) {
    commit(mType.FETCH_TRADE_TOKEN_LIST, dump.tradeTokenList);
}

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

export default {
    fetchTradeTokenList,
    fetchLanguageList,
    fetchSmartContract,
    fetchTokenList,
    fetchVolumeList,
    fetchPriceChartData,
    fetchDepthChartData
}