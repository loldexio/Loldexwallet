<template>
    <div class="partition-table">
        <div class="partition-table-wrapper">
            <table class="table table--collapse">
                <tbody>
                    <tr v-for="(r, index) of _data.top" :key="'a' + index" class="table__row table__row--partition" v-if="data.row.length">
                        <td 
                            v-for="(h, index) of data.col" 
                            :key="index" 
                            v-bind:class="_class(h, r)" 
                            v-html="render(h, r)"
                            @click="topOnClick(h, r)"
                        ></td>
                    </tr>
                    <tr v-if="!data.row.length" class="table__row table__row--partition">
                        <td 
                            :colspan="data.col.length"
                        >{{data.empty || "emtpy"}}</td>
                    </tr>

                    <tr class="table__head table__head--partition">
                        <td 
                            v-for="(h, index) of data.col" 
                            :key="index"
                        >{{h.label}}</td>
                    </tr>

                    <tr v-for="(r, index) of _data.bottom" :key="'b' + index" class="table__row table__row--partition" v-if="data.row.length">
                        <td 
                            v-for="(h, index) of data.col" 
                            :key="index" 
                            v-bind:class="_class(h, r)" 
                            v-html="render(h, r)"
                            @click="bottomOnClick(h, r)"
                        ></td>
                    </tr>
                    <tr v-if="!data.row.length" class="table__row table__row--partition">
                        <td 
                            :colspan="data.col.length"
                        >{{data.empty || "emtpy"}}</td>
                    </tr>

                    <tr v-if="data.note" class="table__row table__row--partition">
                        <td 
                            :colspan="data.col.length"
                        >{{data.note}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "partition-table",
        props: ["data"],
        data: function() {
            return {
                _data: {
                    top: [],
                    bottom: []
                }
            }
        },
        watch: {
            data(newValue) {
                if (newValue.partition && typeof(newValue.partition) == "function") {
                    this._data.top = [];
                    this._data.bottom = [];

                    for (var r of newValue.row) {
                        if (newValue.partition(r)) {
                            this._data.top.push(r);
                        } else {
                            this._data.bottom.push(r);
                        }
                    }
                } else {
                    this._data.top = [];
                    this._data.bottom = newValue.row;
                }
            }
        },
        methods: {
            _class(col, row) {
                if (col.class && typeof(col.class) == "function") {
                    return col.class(row);
                } else {
                    return {};
                }
            },
            render(col, row) {
                if (col.render && typeof(col.render) == "function") {
                    return col.render(row);
                } else {
                    return row[col.prop] || "";
                }
            },
            topOnClick(col, row) {
                if (this.data.topOnClick && typeof(this.data.topOnClick) == "function") {
                    return this.data.topOnClick(col, row);
                } else {
                    return;
                }
            },
            bottomOnClick(col, row) {
                if (this.data.bottomOnClick && typeof(this.data.bottomOnClick) == "function") {
                    return this.data.bottomOnClick(col, row);
                } else {
                    return;
                }
            }
        }
    }
</script>

<style lang="scss">
    .partition-table {
        width: 100%;
        height: 100%;
        overflow: auto;

        table {
            width: 100%;
        }
    }
</style>
