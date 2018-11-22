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

export default {
    fetchTradeTokenList,
    fetchLanguageList,
    fetchSmartContract,
    fetchTokenList
}