<template>
    <div class="transfer-form">
        <div class="transfer-form__wrapper">
            <table class="table table--collapse">
                <thead>
                    <tr class="table__head table__head--balance">
                        <th 
                            v-for="(h, index) of col" 
                            :key="index"
                        >{{h.label}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table__row table__row--balance">
                        <td 
                            v-html="'DAI'"
                        ></td>
                        <td 
                            v-html="'0.000'"
                        ></td>
                        <td 
                            v-html="'0.000'"
                        ></td>
                    </tr>
                    <tr class="table__row table__row--balance">
                        <td>
                            <b-form-input
                                :type="form.amountToken && form.amountToken.type"
                                v-model="form.amountToken.value"
                                :required="form.amountToken && form.amountToken.required"
                                :placeholder="form.amountToken && form.amountToken.placeholder"
                            >
                            </b-form-input>
                        </td>
                        <td>
                            <b-form-input
                                :type="form.transferAddress && form.transferAddress.type"
                                v-model="form.transferAddress.value"
                                :required="form.transferAddress && form.transferAddress.required"
                                :placeholder="form.transferAddress && form.transferAddress.placeholder"
                            >
                            </b-form-input>
                        </td>
                        <td>
                            <b-button variant="primary" class="btn--full-width">Transfer</b-button>
                        </td>
                    </tr>
                    <tr class="table__row table__row--balance">
                        <td 
                            v-html="'ETH'"
                        ></td>
                        <td 
                            v-html="'0.000'"
                        ></td>
                        <td 
                            v-html="'0.000'"
                        ></td>
                    </tr>
                    <tr class="table__row table__row--balance">
                        <td>
                            <b-form-input
                                :type="form.amountEth && form.amountEth.type"
                                v-model="form.amountEth.value"
                                :required="form.amountEth && form.amountEth.required"
                                :placeholder="form.amountEth && form.amountEth.placeholder"
                            >
                            </b-form-input>
                        </td>
                        <td>
                            <b-form-input
                                :type="form.transferAddress && form.transferAddress.type"
                                v-model="form.transferAddress.value"
                                :required="form.transferAddress && form.transferAddress.required"
                                :placeholder="form.transferAddress && form.transferAddress.placeholder"
                            >
                            </b-form-input>
                        </td>
                        <td>
                            <b-button variant="primary" class="btn--full-width">Transfer</b-button>
                        </td>
                    </tr>
                    <tr v-if="note" class="table__row table__row--balance">
                        <td 
                            :colspan="col.length"
                        >{{note}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "transfer-form",
        data: function() {
            return {
                col: [
                    {label: "Token"},
                    {label: "Wallet"},
                    {label: "ForkDelta"},
                ],
                note: "Make sure DAI is the token you actually want to trade. Multiple tokens can share the same name.",
                defautForm: {
                    amountToken: {
                        value: null,
                        placeholder: "Amount",
                        type: "number",
                        required: true
                    },
                    amountEth: {
                        value: null,
                        placeholder: "Amount",
                        type: "number",
                        required: false
                    },
                    transferAddress: {
                        value: null,
                        placeholder: "Address",
                        type: "text",
                        required: true
                    }
                },
                form: {
                    amountToken: {
                        value: null
                    },
                    amountEth: {
                        value: null
                    },
                    transferAddress: {
                        value: null
                    }
                }
            }
        },
        mounted() {
            this.form = JSON.parse(JSON.stringify(this.defautForm));
        },
        methods: {
            onSubmit() {
                alert("transfer");
                this.form = JSON.parse(JSON.stringify(this.defautForm));
            }
        }
    }
</script>

<style lang="scss">
    .transfer-form {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>
