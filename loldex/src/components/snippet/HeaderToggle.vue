<template>
    <div class="header-toggle" :class="{'header-toggle-active': isActive}">
        <div class="header-toggle-wrapper verticle-center" 
            @click="onClick"
        >
            <div class="header-toggle-button">
                <span class="header-toggle-label" v-html="display"></span>
            </div>   
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-toggle",
        props: ["data"],
        data: function() {
            return {
                state: 0
            }
        },
        computed: {
            display() {
                return this.$store.getters.getTheme.style;
            },
            isActive() {
                return this.state == 1;
            }
        },
        methods: {
            async onClick() {
                this.state = this.state == 0 ? this.state = 1 : this.state = 0;
                var cb = this.data[this.state].onActive;
                if (typeof(cb) == "function") {
                    await cb(this);
                }
            }
        }
    }
</script>

<style lang="scss">
    .header-toggle {
        height: 100%;
        position: relative;

        .header-toggle-wrapper {
            height: 100%;
            padding: 15px;
            font-weight: bold;
            cursor: pointer;

            .header-toggle-button {
                padding: 5px 10px;
                border: 1px solid $header-toggle-border-color;
                border-radius: 5px;
                
                .header-toggle-label {
                    text-transform: capitalize;
                    color: $header-toggle-color;
                }
            }
        }
    }
</style>
