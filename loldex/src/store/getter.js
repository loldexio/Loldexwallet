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

export default {
    getTradeTokenList,
    getLanguageList,
    getSmartContractList,
    getTokenList
}