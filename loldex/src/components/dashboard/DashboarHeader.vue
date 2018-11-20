<template>
    <div class="dashboard-header">
        <div class="dashboard-header__logo">
            <img class="logo" src="@/assets/img/logo.png">
        </div>
        <div class="dashboard-header__content">
            <ul class="nav-menu">
                <li class="nav-menu__item">
                    <header-dropdown></header-dropdown>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import HeaderDropdown from "../snippet/HeaderDropdown";
    export default {
        name: "dashboard-header",
        components: {
            HeaderDropdown
        }
    }
</script>

<style lang="scss">
    .dashboard-header {
        height: 100%;
        border-bottom: 1px solid black;
        display: flex;
        .dashboard-header__logo {
            height: 100%;
            .logo {
                height: 100%;
            }
        }
        .dashboard-header__content {
            height: 100%;
            flex: 1 1 auto;
            .nav-menu {
                padding: 0;
                margin: 0;
                display: inline-block;
                list-style-type: none;
                height: 100%;
                .nav-menu__item {
                    display: inline-block;
                    height: 100%;
                }
            }
        }
    }
</style>
