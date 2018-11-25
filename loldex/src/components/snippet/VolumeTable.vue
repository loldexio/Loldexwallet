<template>
    <div class="volume-table">
        <div class="volume-table__search">
            <b-form-input 
                v-model="keyword"
                type="text"
                placeholder="Search for name, symbol, or address"
            ></b-form-input>
        </div>
        <div class="volume-table__content">
            <div class="volume-table__item" v-for="(r, index) of filterData.row" :key="index" @click="onClick(r)">
                <div class="volume-table__row">
                    <div class="volume-table__left">
                        <span class="volume-table__name">{{r.name}}</span>
                    </div>
                    <div class="volume-table__right">
                        <span>{{r.value1}}</span>
                    </div>
                </div>
                <div>
                    <div class="volume-table__sub-name">
                        <span>{{r.subName}}</span>
                    </div>
                </div>
                <div class="volume-table__row">
                    <div class="volume-table__left">
                        <div>Bid {{r.bid}}</div>
                        <div>Ask {{r.ask}}</div>
                    </div>
                    <div class="volume-table__right">
                        <span>{{r.value2}} Ξ Daily</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "volume-table",
        props: ["data"],
        data: function() {
            return {
                keyword: ""
            }
        },
        computed: {
            filterData() {
                var ret = this.data ? JSON.parse(JSON.stringify(this.data)) : {};
                
                ret.row = ret.row.filter(r => {
                    return this.keyword ? !!(r.name.toLowerCase().indexOf(this.keyword.toLowerCase()) > -1) : true;
                });

                return ret;
            }
        },
        methods: {
            onClick(r) {
                var data = this.data;
                if (data.onClick && typeof(data.onClick) == "function") {
                    data.onClick(r, this);
                }
            }
        }
    }
</script>

<style lang="scss">
    .volume-table {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100%;

        .volume-table__search {
            flex: 0 1 36px;
        }

        .volume-table__content {
            flex: 1 1 auto;
            overflow: auto;

            .volume-table__item {
                cursor: pointer;
                padding: 4px 6px;
                font-size: $volume-table-font-size;
                color: $volume-table-color;
                line-height: 1.4em;

                &:hover {
                    background-color: $volume-table-hover-background-color;
                }
                .volume-table__row {
                    display: flex;
                    justify-content: space-between;
                }
                .volume-table__name {
                    font-weight: bold;
                }
            }
        }
    }
</style>
