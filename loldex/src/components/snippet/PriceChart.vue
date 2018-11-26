<template>
    <div class="price-chart">
        <div class="price-chart__content">
            <GChart
                :resizeDebounce="500"
                type="ScatterChart"
                :data="data"
                :options="option"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "price-chart",
        props: ["data"],
        data: function() {
            return {
                option: {
                    legend: "none",
                    colors: ['#087037'],
                    backgroundColor: "transparent",
                    hAxis: {
                        textStyle: {
                            color: "white"
                        }
                    },
                    vAxis: {
                        textStyle: {
                            color: "white"
                        }
                    }
            
                }
            };
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    .price-chart {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: stretch;

        .price-chart__content {
            width: 100%;
            overflow: auto;
            margin: auto;
            padding: 10px;
            box-sizing: border-box;
        }
    }
</style>
