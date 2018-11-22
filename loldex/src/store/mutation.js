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
    }
}