<template>
    <div class="panel">
        <div class="panel__header verticle-center">
            <span v-html="title"></span>
        </div>
        <div class="panel__body">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "panel",
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
    .panel {
        width: 100%;
        display: flex;
        flex-direction: column;
        
        .panel__header {
            flex: 0 0 $panel-header-height;
            width: 100%;
            padding: 8px;
            background: $panel-header-background-color;
            font-size: $panel-header-font-size;
            font-weight: bold;
            text-transform: capitalize;
            color: $panel-header-color;
            border-bottom: 2px solid $panel-header-border-bottom-color;
        }

        .panel__body {
            flex: 1 1 auto;
            display: flex;
            align-items: stretch;
        }
    }
</style>
