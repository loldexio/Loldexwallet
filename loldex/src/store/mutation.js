import mType from "./mutation-type";

export default {
    [mType.FETCH_TRADE_TOKEN_LIST]: (state, payload) => {
        state.tradeTokenList = payload;
    },
    [mType.FETCH_LANGUAGE_LIST]: (state, payload) => {
        state.languageList = payload;
    },
    [mType.FETCH_SMART_CONTRACT]: (state, payload) => {
        state.smartContractList = payload
    },
    [mType.FETCH_TOKEN_LIST]: (state, payload) => {
        state.tokenList = payload
    },
    [mType.FETCH_VOLUME_LIST]: (state, payload) => {
        state.volumeList = payload;
    },
    [mType.FETCH_PRICE_CHART_DATA]: (state, payload) => {
        state.priceChartData = payload;
    },
    [mType.FETCH_DEPTH_CHART_DATA]: (state, payload) => {
        state.depthChartData = payload;
    }
}