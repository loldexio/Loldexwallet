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

export default {
    getTradeTokenList,
    getLanguageList,
    getSmartContractList,
    getTokenList,
    getVolumeList,
    getPriceChartData,
    getDepthChartData
}