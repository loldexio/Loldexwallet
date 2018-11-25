<template>
    <div class="body-panel">
        <div class="body-panel__header verticle-center">
            <span v-html="title"></span>
        </div>
        <div class="body-panel__body">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "body-panel",
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        data: function() {
            return {};
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    .body-panel {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        
        .body-panel__header {
            flex: 0 1 $body-panel-header-height;
            width: 100%;
            padding: 8px;
            background: $body-panel-header-background-color;
            font-size: $body-panel-header-font-size;
            font-weight: bold;
            text-transform: capitalize;
            color: $body-panel-header-color;
            border-bottom: 2px solid $body-panel-header-border-bottom-color;
        }

        .body-panel__body {
            flex: 1 1 auto;
        }
    }
</style>
