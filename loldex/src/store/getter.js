function getTradeTokenList(state) {
    return state.tradeTokenList;
}

function getLanguageList(state) {
    return state.languageList;
}

function getSmartContractList(state) {
    return state.smartContractList;
}

function getTokenList(state) {
    return state.tokenList;
}

function getVolumeList(state) {
    return state.volumeList;
}

function getPriceChartData(state) {
    return state.priceChartData;
}

function getDepthChartData(state) {
    return state.depthChartData;
}

function getTradeData(state) {
    return state.tradeData;
}

function getFundData(state) {
    return state.fundData;
}

function getOrderData(state) {
    return state.orderData;
}

function getTradeList(state) {
    return state.tradeList;
}

function getOrderBookList(state) {
    return state.orderBookList;
}

export default {
    getTradeTokenList,
    getLanguageList,
    getSmartContractList,
    getTokenList,
    getVolumeList,
    getPriceChartData,
    getDepthChartData,
    getTradeData,
    getFundData,
    getOrderData,
    getTradeList,
    getOrderBookList
}