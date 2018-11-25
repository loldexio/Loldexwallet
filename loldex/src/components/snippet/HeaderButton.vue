<template>
    <div class="header-button">
        <div class="header-button-wrapper verticle-center" 
            @click="onClick"
        >
            <span class="header-button__icon header-button__icon--pre-icon" 
                v-html="data.preIcon"
            ></span>
            <span class="header-button-label" 
                :class="{'header-button-label--big': data.buttonBigSize}" 
                v-html="displayValue"
            ></span>
            <span class="header-button__icon header-button__icon--pos-icon" 
                v-html="data.posIcon"
            ></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-button",
        props: ["data"],
        data: function() {
            return {
            }
        },
        computed: {
            displayValue: {
                get() {
                    return this.data.label;
                },
                set(newValue) {
                    return this.data.label = newValue;
                }
            }
        },
        methods: {
            async onClick() {
                if (typeof(this.data.onClick) == "function") {
                    await this.data.onClick(this);
                }
            }
        }
    }
</script>

<style lang="scss">
    .header-button {
        height: 100%;
        position: relative;

        .header-button-wrapper {
            height: 100%;
            padding: 15px;
            font-weight: bold;
            cursor: pointer;
            &.header-button--active {
                background-color: $header-button-active-background-color;
            }
            .header-button-label {
                font-size: $header-button-label-font-size;
            }
            .header-button-label--big {
                font-size: $header-button-label-big-font-size;
            }
            .header-button__icon--pos-icon {
                margin-left: 5px;
            }
            .header-button__icon--pre-icon {
                margin-right: 5px;
            }
        }
    }
</style>
