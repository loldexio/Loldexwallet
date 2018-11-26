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
    export default {
        name: "dashboard-body",
        components: {
            Panel,
            VolumeTable,
            PriceChart,
            DepthChart
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
            flex-basis: 50%;  

            .dashboard-body__item {
                flex-grow: 1;
                display: flex;
                align-items: stretch;
                height: 50%;
            }
        }
    }
</style>
