<template>
    <div class="header-dropdown">
        <div class="header-dropdown__button verticle-center" 
            :class="{ 'header-dropdown__button--active': toggle }" 
            @click="toggleMenu"
        >
            <span class="header-dropdown__icon header-dropdown__icon--pre-icon" 
                v-html="data.preIcon"
            ></span>
            <span class="header-dropdown__button-label" 
                :class="{'header-dropdown__button-label--big': data.buttonBigSize}" 
                v-html="displayValue"
            ></span>
            <span class="header-dropdown__icon header-dropdown__icon--pos-icon" 
                v-html="posIcon"
            ></span>
        </div>
        <div class="header-dropdown__menu" 
            :class="{'header-dropdown__menu--right': data.dropdownAlignRight}" 
            v-click-away="close" 
            v-if="toggle"
        >
            <div class="header-dropdown__group" 
                v-for="(group, groupIndex) of data.group" 
                :key="groupIndex"
            >
                <div class="header-dropdown__item" 
                    v-for="(item, itemIndex) of group.option" 
                    :key="itemIndex" 
                    @click="onClick(group, item)"
                >
                    <span class="header-dropdown__title" v-html="item.title"></span>
                    <span class="header-dropdown__sub-title" v-html="item.subTitle"></span>
                </div>
                <div class="header-dropdown__separator" 
                    v-if="(groupIndex + 1) != data.group.length"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-dropdown",
        props: ["data"],
        data: function() {
            return {
                toggle: false,
                label: null
            }
        },
        computed: {
            displayValue() {
                return this.label || this.data.displayValue;
            },
            posIcon() {
                return this.data.posIcon === undefined ? '<i class="fas fa-caret-down" style="font-size: 0.7em;"></i>' : this.data.posIcon;
            }
        },
        methods: {
            toggleMenu() {
                this.toggle = !this.toggle;
            },
            async onClick(group, item) {
                if (typeof(group.onSelect) == "function") {
                    await group.onSelect(item, this);
                }
            },
            close() {
                this.toggle = false;
            }
        }
    }
</script>

<style lang="scss">
    .header-dropdown {
        height: 100%;
        position: relative;   

        .header-dropdown__button {
            height: 100%;
            padding: 15px;
            font-weight: bold;
            cursor: pointer;
            &.header-dropdown__button--active {
                background-color: $header-button-active-background-color;
            }
            .header-dropdown__button-label {
                font-size: $header-button-label-font-size;
            }
            .header-dropdown__button-label--big {
                font-size: $header-button-label-big-font-size;
            }
            .header-dropdown__icon--pos-icon {
                margin-left: 5px;
            }
            .header-dropdown__icon--pre-icon {
                margin-right: 5px;
            }
        }

        .header-dropdown__menu {
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

            @media (max-width: $break-point) {
                width: 100%;
            }

            &.header-dropdown__menu--right {
                left: unset;
                right: 0;
            }
            .header-dropdown__group {
                .header-dropdown__separator {
                    height: 1px;
                    background-color: $header-dropdown-separator-color;
                }
                .header-dropdown__item {
                    padding: 10px;
                    font-size: $header-dropdown-menu-font-size;
                    cursor: pointer;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    &:hover {
                        text-decoration: none;
                        background-color: $header-dropdown-item-hover-background-color;
                    }
                    .header-dropdown__title {
                        color: $header-dropdown-title-color;
                        font-weight: bold;
                    }
                    .header-dropdown__sub-title {
                        color: $header-dropdown-sub-title-color;
                        font-weight: normal;
                        padding-left: 5px;
                    }
                }
            }
        }
    }
</style>
