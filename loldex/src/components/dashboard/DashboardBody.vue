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
    export default {
        name: "dashboard-body",
        components: {
            BodyPanel
        },
        data: function() {
            return {};
        },
        computed: {
        },
        mounted: async function() {
        }
    }
</script>

<style lang="scss">    
    .dashboard-body {
        width: 100%;
        height: 100%;

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
            }
        }
    }
</style>
