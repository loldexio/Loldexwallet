<template>
    <div class="dashboard-body">
        <div class="row dashboard-body__row">
            <div class="col-md-3 dashboard-body__col">
                <body-panel :title="'Balance'">
                </body-panel>
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
    .container-fluid,
    .row,
    .col-* {
        margin: 0;
        padding: 0;
    }
    .dashboard-body {
        width: 100%;
        height: 100%;

        .dashboard-body__row {
            height: 100%;            
        }
        .dashboard-body__col {
            height: 100%;            
        }
    }
</style>
