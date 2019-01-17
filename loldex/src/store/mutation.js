import mType from "./mutation-type";

export default {
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
    },
    [mType.FETCH_TRADE_DATA]: (state, payload) => {
        state.tradeData = payload;
    },
    [mType.FETCH_ORDER_DATA]: (state, payload) => {
        state.orderData = payload;
    },
    [mType.FETCH_FUND_DATA]: (state, payload) => {
        state.fundData = payload;
    },
    [mType.FETCH_TRADE_LIST]: (state, payload) => {
        state.tradeList = payload;
    },
    [mType.FETCH_ORDER_BOOK_LIST]: (state, payload) => {
        state.orderBookList = payload;
    },
    [mType.SET_THEME]: (state, payload) => {
        state.theme = {
            style: payload
        };
    }
}