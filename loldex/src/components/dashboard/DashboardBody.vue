<template>
    <div class="dashboard-body">
        <div class="row dashboard-body__row">
            <!-- col 1 -->
            <div class="col-md-3 dashboard-body__col">
                <div class="dashboard-body__item">
                    <panel :title="'Balance'">
                        <b-tabs nav-wrapper-class="tab-header">
                            <b-tab title="Deposit" active>
                            </b-tab>
                            <b-tab title="Withdraw">
                            </b-tab>
                            <b-tab title="Transfer">
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
                        
                    </panel>
                </div>
                <div class="dashboard-body__item">
                    <panel :title="'New Order'">
                        <b-tabs nav-wrapper-class="tab-header">
                            <b-tab title="Buy" active>
                            </b-tab>
                            <b-tab title="Sell">
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
                                    :data="orderBook.price.data"
                                ></price-chart>
                            </b-tab>
                            <b-tab title="Depth">
                                <depth-chart
                                    :data="orderBook.depth.data"
                                ></depth-chart>
                            </b-tab>
                        </b-tabs>
                    </panel>
                </div>
                <div class="dashboard-body__item">
                    <panel :title="'New Order'">
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
                            </b-tab>
                            <b-tab title="Orders">
                            </b-tab>
                            <b-tab title="Funds">
                            </b-tab>
                        </b-tabs>
                    </panel>
                </div>
            </div>
            <!-- col 4 -->
            <div class="col-md-3 dashboard-body__col">
                <div class="dashboard-body__item">
                    <panel :title="'Trades'">
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
    export default {
        name: "dashboard-body",
        components: {
            Panel,
            VolumeTable,
            PriceChart,
            DepthChart,
            TextBox
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
            orderBook() {
                return {
                    price: {
                        data: this.$store.getters.getPriceChartData
                    },
                    depth: {
                        data: this.$store.getters.getDepthChartData
                    }
                }
            }
        },
        mounted: async function() {
            await this.$store.dispatch("fetchVolumeList");
            await this.$store.dispatch("fetchPriceChartData");
            await this.$store.dispatch("fetchDepthChartData");
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
        div[class*=col] {
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
