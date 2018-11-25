<template>
    <div class="dashboard-body">
        <div class="row dashboard-body__row">
            <!-- col 1 -->
            <div class="col-md-3 dashboard-body__col">
                <div class="dashboard-body__item">
                    <body-panel :title="'Balance'">
                        <b-tabs nav-wrapper-class="tab-header">
                            <b-tab title="Deposit" active>
                            </b-tab>
                            <b-tab title="Withdraw">
                            </b-tab>
                            <b-tab title="Transfer">
                            </b-tab>
                        </b-tabs>
                    </body-panel>
                </div>
                <div class="dashboard-body__item">
                    <body-panel :title="'Volume'">
                        <volume-table
                            :data = "volume"
                        >
                        </volume-table>
                    </body-panel>
                </div>
            </div>
            <!-- col 2 -->
            <div class="col-md-2 dashboard-body__col">
                <div class="dashboard-body__item">
                    <body-panel :title="'Order Book'">
                        
                    </body-panel>
                </div>
                <div class="dashboard-body__item">
                    <body-panel :title="'New Order'">
                        <b-tabs nav-wrapper-class="tab-header">
                            <b-tab title="Buy" active>
                            </b-tab>
                            <b-tab title="Sell">
                            </b-tab>
                        </b-tabs>
                    </body-panel>
                </div>
            </div>
            <!-- col 3 -->
            <div class="col-md-4 dashboard-body__col">
                <div class="dashboard-body__item">
                    <body-panel :title="'Order Book'">
                        <b-tabs nav-wrapper-class="tab-header">
                            <b-tab title="Price" active>
                            </b-tab>
                            <b-tab title="Depth">
                            </b-tab>
                        </b-tabs>
                    </body-panel>
                </div>
                <div class="dashboard-body__item">
                    <body-panel :title="'New Order'">
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
                    </body-panel>
                </div>
            </div>
            <!-- col 4 -->
            <div class="col-md-3 dashboard-body__col">
                <div class="dashboard-body__item">
                    <body-panel :title="'Trades'">
                    </body-panel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BodyPanel from "../snippet/BodyPanel";
    import VolumeTable from "../snippet/VolumeTable";
    export default {
        name: "dashboard-body",
        components: {
            BodyPanel,
            VolumeTable
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
            }
        },
        mounted: async function() {
            await this.$store.dispatch("fetchVolumeList");
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
                height: 50%;
            }
        }
    }
</style>
