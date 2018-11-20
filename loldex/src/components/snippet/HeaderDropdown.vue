<template>
    <div class="header-dropdown">
        <div class="header-dropdown__button" :class="{ 'header-dropdown__button--active': toggle }" @click="toggleMenu">
            ABC
            <i class="fas fa-caret-down"></i>
        </div>
        <div class="header-dropdown__menu" v-if="toggle">
            <h1>aaa</h1>
        </div>
    </div>
</template>

<script>
    // data: {
    //     group: [
    //         {
    //             option: [
    //                 {
    //                     title: string,
    //                     subTitle: string,
    //                     value: any
    //                 }
    //             ],
    //             onSelect: function
    //         }
    //     ]
    // }

    export default {
        name: "header-dropdown",
        props: ["data"],
        data: function() {
            return {
                toggle: false
            }
        },
        methods: {
            toggleMenu() {
                this.toggle = !this.toggle;
                console.log("toggle", this.toggle);
            }
        }
    }
</script>

<style lang="scss">
    .header-dropdown {
        height: 100%;
        position: relative;

        .header-dropdown__button {
            font-size: 135%;
            height: 100%;
            display : flex;
            align-items : center;
            padding: 15px;
            font-weight: bold;
            &.header-dropdown__button--active {
                background-color: $header-dropdown-button-active-color;
            }
            cursor: pointer;
            i {
                margin-left: 5px;
            }
        }

        .header-dropdown__menu {
            max-width: 100%;
            min-width: 240px;
            max-height: 500px;
            overflow-y: auto;
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 1000;
            padding: 5px 0;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid rgba(0,0,0,.15);
            border-radius: 4px;
            box-shadow: 0 6px 12px rgba(0,0,0,.175);
            font-size: 100%;
        }
    }
</style>
