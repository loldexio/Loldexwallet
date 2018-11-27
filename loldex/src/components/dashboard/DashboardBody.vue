<template>
    <div class="dashboard-body">
        <div class="row dashboard-body__row">
            <!-- col 1 -->
            <div class="col-md-3 dashboard-body__col">
                <div class="dashboard-body__item">
                    <panel :title="'Balance'">
                        <b-tabs nav-wrapper-class="tab-header">
                            <b-tab title="Deposit" active>
                                <deposit-form></deposit-form>
                            </b-tab>
                            <b-tab title="Withdraw">
                                <withdraw-form></withdraw-form>
                            </b-tab>
                            <b-tab title="Transfer">
                                <transfer-form></transfer-form>
                            </b-tab>
                        </b-tabs>
                    </panel>
                </div>
                <div class="dashboard-body__item">
                    <panel :title="'Volume'">
                        <volume-table
                            :data = "volume"
                        >
                        </volume-table>
                    </panel>
                </div>
            </div>
            <!-- col 2 -->
            <div class="col-md-2 dashboard-body__col">
                <div class="dashboard-body__item">
                    <panel :title="'Order Book'">
                        <partition-table
                            :data="orderBook"
                        ></partition-table>
                    </panel>
                </div>
                <div class="dashboard-body__item">
                    <panel :title="'New Order'">
                        <b-tabs nav-wrapper-class="tab-header">
                            <b-tab title="Buy" active>
                                <new-order-buy-form></new-order-buy-form>
                            </b-tab>
                            <b-tab title="Sell">
                                <new-order-sell-form></new-order-sell-form>
                            </b-tab>
                        </b-tabs>
                    </panel>
                </div>
            </div>
            <!-- col 3 -->
            <div class="col-md-4 dashboard-body__col">
                <div class="dashboard-body__item">
                    <panel :title="'Price Chart'">
                        <b-tabs nav-wrapper-class="tab-header">
                            <b-tab title="Price" active>
                                <price-chart
                                    :data="priceChart.price.data"
                                ></price-chart>
                            </b-tab>
                            <b-tab title="Depth">
                                <depth-chart
                                    :data="priceChart.depth.data"
                                ></depth-chart>
                            </b-tab>
                        </b-tabs>
                    </panel>
                </div>
                <div class="dashboard-body__item">
                    <panel :title="'My Transactions'">
                        <b-tabs nav-wrapper-class="tab-header">
                            <b-tab title="Important" active>
                                <text-box>
                                    <div class="text-box__header">URL & Status</div>
                                    <div class="text-box__content">
                                        The URL of this project is <a href="https://forkdelta.app" class="text-box__link">forkdelta.app</a>. Bookmark it once and use the bookmark.
                                    </div>
                                    <div class="text-box__content">
                                        This interface is a fork of <a href="https://etherdelta.com" class="text-box__link">EtherDelta</a> with a ton of improvements including a much faster order processing system. It interacts with ForkDelta's revamped API and EtherDelta's original contract.
                                    </div>
                                    <div class="text-box__header">
                                        How to Start Trading
                                    </div>
                                    <div class="text-box__content">
                                        Use the Deposit form (upper left) to put your funds (ETH and tokens) on the exchange. Do not send your tokens directly to the smart contract, or they will be lost and unrecoverable. ForkDelta cannot help you with funds incorrectly deposited to the trading smart contract.
                                    </div>
                                    <div class="text-box__header">
                                        ForkDelta Disclaimer
                                    </div>
                                    <div class="text-box__content">
                                        ForkDelta is a decentralized trading platform that lets you trade Ether and Ethereum-based tokens directly with other users. You are responsible for your own account, funds, and private keys. You are responsible for your own trading decisions, and the details and mechanics of the tokens you trade. ForkDelta is not responsible for your decisions, actions, or losses that result from using ForkDelta. ForkDelta makes no guarantee about the tokens that you trade using ForkDelta. ForkDelta does not hold your funds and does not offer refunds. While the information contained on ForkDelta is periodically updated, no guarantee is given that the information provided on ForkDelta is correct, complete, or up-to-date. By using ForkDelta, you acknowledge this and agree to these terms.
                                    </div>
                                </text-box>
                            </b-tab>
                            <b-tab title="Trades">
                                <custom-table
                                    :data="transaction.trade"
                                ></custom-table>
                            </b-tab>
                            <b-tab title="Orders">
                                <custom-table
                                    :data="transaction.order"
                                ></custom-table>
                            </b-tab>
                            <b-tab title="Funds">
                                <custom-table
                                    :data="transaction.fund"
                                ></custom-table>
                            </b-tab>
                        </b-tabs>
                    </panel>
                </div>
            </div>
            <!-- col 4 -->
            <div class="col-md-3 dashboard-body__col">
                <div class="dashboard-body__item">
                    <panel :title="'Trades'">
                        <custom-table
                            :data="trade"
                        ></custom-table>
                    </panel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Panel from "../snippet/Panel";
    import VolumeTable from "../snippet/VolumeTable";
    import PriceChart from "../snippet/PriceChart";
    import DepthChart from "../snippet/DepthChart";
    import TextBox from "../snippet/TextBox";
    import CustomTable from "../snippet/CustomTable";
    import PartitionTable from "../snippet/PartitionTable";
    import NewOrderBuyForm from "../snippet/NewOrderBuyForm";
    import NewOrderSellForm from "../snippet/NewOrderSellForm";
    import DepositForm from "../snippet/DepositForm";
    import WithdrawForm from "../snippet/WithdrawForm";
    import TransferForm from "../snippet/TransferForm";
    export default {
        name: "dashboard-body",
        components: {
            Panel,
            VolumeTable,
            PriceChart,
            DepthChart,
            TextBox,
            CustomTable,
            PartitionTable,
            NewOrderBuyForm,
            NewOrderSellForm,
            DepositForm,
            WithdrawForm,
            TransferForm
        },
        data: function() {
            return {};
        },
        computed: {
            volume() {
                return {
                    row: this.$store.getters.getVolumeList,
                    onClick: function(item, table) {
                        alert(item.name);
                    }
                };
            },
            priceChart() {
                return {
                    price: {
                        data: this.$store.getters.getPriceChartData
                    },
                    depth: {
                        data: this.$store.getters.getDepthChartData
                    }
                }
            },
            transaction() {
                return {
                    trade: {
                        col: [
                            {
                                label: "Transaction",
                                prop: "transaction"
                            },
                            {
                                label: "Type",
                                prop: "type"
                            },
                            {
                                label: "10MT",
                                prop: "token"
                            },
                            {
                                label: "ETH",
                                prop: "eth"
                            },
                            {
                                label: "10MT/ETH",
                                prop: "ratio"
                            }
                        ],
                        row: this.$store.getters.getTradeData,
                        note: "Note: ForkDelta will only show recent transactions."
                    },
                    order: {
                        col: [
                            {
                                label: "10MT/ETH",
                                prop: "ratio"
                            },
                            {
                                label: "Available Volume",
                                prop: "availableVolume"
                            },
                            {
                                label: "Expire in",
                                prop: "expireIn"
                            },
                            {
                                label: "Cancel",
                                prop: "cancel"
                            }
                        ],
                        row: this.$store.getters.getOrderData
                    },
                    fund: {
                        col: [
                            {
                                label: "Transaction",
                                prop: "transaction"
                            },
                            {
                                label: "Type",
                                prop: "type"
                            },
                            {
                                label: "10MT",
                                prop: "token"
                            },
                            {
                                label: "ETH",
                                prop: "eth"
                            }
                        ],
                        row: this.$store.getters.getFundData,
                        note: "Note: ForkDelta will only show recent transactions."
                    }
                }
            },
            trade() {
                return {
                    col: [
                        {
                            label: "DAI/ETH",
                            prop: "ratio",
                            class: (row) => {
                                return {
                                    "table__td--green": !!(row.type == "buy"),
                                    "table__td--red": !!(row.type =="sell")
                                }
                            }
                        },
                        {
                            label: "DAI",
                            prop: "token"
                        },
                        {
                            label: "ETH",
                            prop: "eth",
                            render: (row) => {
                                return `${row.eth} <a href="#"><i class="fas fa-external-link-alt"></i></a>`;
                            } 
                        }
                    ],
                    row: this.$store.getters.getTradeList,
                }
            },
            orderBook() {
                return {
                    col: [
                        {
                            label: "DAI/ETH",
                            prop: "ratio",
                            class: (row) => {
                                return {
                                    "table__td--green": !!(row.type == "buy"),
                                    "table__td--red": !!(row.type == "sell")
                                }
                            }
                        },
                        {
                            label: "DAI",
                            prop: "token"
                        },
                        {
                            label: "ETH",
                            prop: "eth"
                        }
                    ],
                    row: this.$store.getters.getOrderBookList,
                    partition: (row) => {
                        return !!(row.type == "sell");
                    },
                    topOnClick: (col, row) => {
                        return alert("Buy")
                    },
                    bottomOnClick: (col, row) => {
                        return alert("Sell")
                    }
                }
            }

        },
        mounted: async function() {
            await this.$store.dispatch("fetchVolumeList");
            await this.$store.dispatch("fetchPriceChartData");
            await this.$store.dispatch("fetchDepthChartData");
            await this.$store.dispatch("fetchTradeData");
            await this.$store.dispatch("fetchOrderData");
            await this.$store.dispatch("fetchFundData");
            await this.$store.dispatch("fetchTradeList");
            await this.$store.dispatch("fetchOrderBookList");
        }
    }
</script>

<style lang="scss">    
    .dashboard-body {
        width: 100%;
        height: 100%;

        ::-webkit-scrollbar, .scroll::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }
        ::-webkit-scrollbar-thumb, .scroll::-webkit-scrollbar-thumb {
            background-color: #233540;
            border: 1px solid #233540;
            transition: all 0.2s ease-out;
        }
        ::-webkit-scrollbar-track, .scroll::-webkit-scrollbar-track {
            background: #15232c;
        }

        &.container-fluid,
        .row,
        div[class*=col].dashboard-body__col {
            margin: 0;
            padding: 0;
        }

        .dashboard-body__row {
            height: 100%;            
        }
        .dashboard-body__col {
            height: 100%; 
            border-right: 2px solid #18252e;     
            display: flex;
            flex-direction: column;
            justify-content: space-between;  

            .dashboard-body__item {
                flex-grow: 1;
                display: flex;
                align-items: stretch;
                flex-basis: 50%;  
            }
        }
    }
</style>
