<template>
    <div class="depth-chart">
        <div class="depth-chart__content">
            <GChart
                :resizeDebounce="500"
                type="AreaChart"
                :data="data"
                :options="option"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "depth-chart",
        props: ["data"],
        data: function() {
            return {
                option: {
                    theme: "maximized",
                    colors:['red','green'],
                    legend: "none",
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
    .depth-chart {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: stretch;

        .depth-chart__content {
            width: 100%;
            overflow: auto;
            margin: auto;
            padding: 10px;
            box-sizing: border-box;
        }
    }
</style>
