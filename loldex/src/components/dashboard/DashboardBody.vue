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
                        <price-chart
                            :data="priceChart.price.data"
                        ></price-chart>
                    </panel>
                </div>
            </div>
        </div>
        <b-modal id="buy-modal" title="Buy" v-model="modal.buy">
            <form>
                <div class="form-group">
                    <label>Order</label>
                    <div>10.617 VERI @ 0.142998336 VERI/ETH</div>
                    <div>Expires in -22 blocks</div>
                </div>
                <div class="form-group">
                    <label>Amount to buy (VERI)</label>
                    <input type="text" class="form-control trn" placeholder="Amount" value="10.617">
                </div>
                <div class="form-group">
                    <label>ETH</label>
                    <input type="text" class="form-control trn" value="1.518" readonly>
                </div>
                <div class="form-group">
                    <label>Fee (ETH)</label>
                    <input type="text" class="form-control trn" value="0.005" readonly>
                </div>
                <div class="help-block small text-muted">
                    Order ID: 0xa1fc55d45c6b5202697850b1fbd1d906789ab0a66d96c42c6e55eeee8bf435dc_sell
                    <br>Offered by: 0x5510acc649bb8caac72602fa7b6b8b0cf5247ce6
                    <br>Last updated: 2018-12-19T10:03:01
                </div>
            </form>
            <div slot="modal-footer" class="w-100">
                <b-btn size="sm" class="float-right" variant="primary" @click="modal.buy=false">
                    Buy
                </b-btn>
            </div>
        </b-modal>
        <b-modal id="sell-modal" title="Sell" v-model="modal.sell">
            <form>
                <div class="form-group">
                    <label>Order</label>
                    <div>0.236 VERI @ 0.130344999 VERI/ETH</div>
                    <div>Expires in 20 blocks</div>
                </div>
                <div class="form-group">
                    <label>Amount to sell (VERI)</label>
                    <input type="text" class="form-control trn" placeholder="Amount" value="0.236">
                </div>
                <div class="form-group">
                    <label>ETH</label>
                    <input type="text" class="form-control trn" value="0.031" readonly>
                </div>
                <div class="form-group">
                    <label>Fee (VERI)</label>
                    <input type="text" class="form-control trn" value="0.000" readonly>
                </div>
                <div class="help-block small text-muted">
                    Order ID: 0x2c8622b993e18e124c526bc7a0cc1c950d903141f4f6f85d616cc0f1179275e2_buy
                    <br>Offered by: 0x26e59016b5cccccc93b242f4267fb0e660399dad
                    <br>Last updated: 2018-12-19T10:37:31
                </div>
            </form>
            <div slot="modal-footer" class="w-100">
                <b-btn size="sm" class="float-right" variant="primary" @click="modal.sell=false">
                    Sell
                </b-btn>
            </div>
        </b-modal>
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
            return {
                modal: {
                    sell: false,
                    buy: false
                }
            };
        },
        computed: {
            priceChart() {
                return {
                    price: {
                        data: this.$store.getters.getPriceChartData
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
                var self = this;
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
                        self.modal.buy =true;
                    },
                    bottomOnClick: (col, row) => {
                        self.modal.sell =true;
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
            border-right: 2px solid $dashboard-body-col-border-color;     
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
