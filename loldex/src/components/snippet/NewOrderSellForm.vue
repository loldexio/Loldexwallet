<template>
    <div class="new-order-sell-form">
        <div class="new-order-sell-form__wrapper">
            <b-form @submit="onSubmit">
                <b-form-group v-for="(f, index) in form" :key="index">
                    <div class="row">
                        <label class="col-sm-4">{{f.label}}</label>
                        <b-form-input
                            :type="f.type"
                            v-model="f.value"
                            :required="f.required"
                            :placeholder="f.placeholder"
                            :class="{'col-sm-8': true}"
                            :disabled="f.disabled"
                        >
                        </b-form-input>
                    </div>
                </b-form-group>
                <div class="row">
                    <div class="col-sm-8 offset-sm-4 padding-0">
                        <b-button type="submit" variant="danger" class="btn--full-width">Sell</b-button>
                    </div>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "new-order-sell-form",
        data: function() {
            return {
                defautForm: {
                    amountToSell: {
                        value: null,
                        label: "DAI",
                        placeholder: "Amount to sell",
                        type: "number",
                        required: true,
                        disabled: false
                    },
                    price: {
                        value: null,
                        label: "DAI/ETH",
                        placeholder: "Price",
                        type: "number",
                        required: true,
                        disabled: false
                    },
                    eth: {
                        value: null,
                        label: "ETH",
                        placeholder: "Total",
                        type: "number",
                        required: false,
                        disabled: true
                    },
                    expire: {
                        value: 10000,
                        label: "Expires",
                        placeholder: "Number of blocks",
                        type: "number",
                        required: true,
                        disabled: false
                    }
                },
                form: {}
            }
        },
        mounted() {
            this.form = JSON.parse(JSON.stringify(this.defautForm));
        },
        methods: {
            onSubmit() {
                alert("sell");
                this.form = JSON.parse(JSON.stringify(this.defautForm));
            }
        },
        watch: {
            'form.amountToSell.value': function(newValue) {
                this.form.eth.value = this.form.amountToSell.value * this.form.price.value;
            },
            'form.price.value': function(newValue) {
                this.form.eth.value = this.form.amountToSell.value * this.form.price.value;
            }
        }
    }
</script>

<style lang="scss">
    .new-order-sell-form {
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 12px;
    }
</style>
