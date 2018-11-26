<template>
    <div class="text-box">
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "text-box"
    }
</script>

<style lang="scss">
    .text-box {
        width: 100%;
        height: 100%;
        padding: 12px;
        font-size: $text-box-font-size;
        overflow: auto;

        .text-box__header {
            color: $text-box-header-color; 
            font-weight: bold;
            margin-bottom: 10px;
        }

        .text-box__content {
            color: $text-box-content-color;
        }

        .text-box__link {
            color: $text-box-link-color;
            text-decoration: none;
        }
    }
</style>
