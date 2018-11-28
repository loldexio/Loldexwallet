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
                    <panel :title="'Trades'">
                        <custom-table
                            :data="trade"
                        ></custom-table>
                    </panel>
                </div>
            </div>
            <!-- col 2 -->
            <div class="col-md-3 dashboard-body__col">
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
            <!-- col 6 -->
            <div class="col-md-6 dashboard-body__col">
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
            </div>
        </div>
    </div>
</template>

<script>
    import Panel from "../snippet/Panel";
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
