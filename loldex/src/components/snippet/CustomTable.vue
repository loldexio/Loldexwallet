<template>
    <div class="custom-table">
        <div class="custom-table-wrapper">
            <table class="table table--collapse">
                <thead class="table__head">
                    <tr>
                        <th v-for="(h, index) of data.col" :key="index">{{h.label}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(r, index) of data.row" :key="index" class="table__row" v-if="data.row.length">
                        <td v-for="(h, index) of data.col" :key="index">{{r[h.prop]}}</td>
                    </tr>
                    <tr v-if="!data.row.length" class="table__row">
                        <td :colspan="data.col.length">{{data.empty || "emtpy"}}</td>
                    </tr>
                    <tr v-if="data.note" class="table__row">
                        <td :colspan="data.col.length">{{data.note}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "custom-table",
        props: ["data"],
        computed: {
        },
        methods: {
            
        }
    }
</script>

<style lang="scss">
    .custom-table {
        width: 100%;
        height: 100%;
        overflow: auto;

        table {
            width: 100%;
        }
    }
</style>
