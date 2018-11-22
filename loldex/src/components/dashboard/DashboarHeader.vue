<template>
    <div class="dashboard-header">
        <div class="dashboard-header__logo">
            <img class="logo" src="@/assets/img/logo.png">
        </div>
        <div class="dashboard-header__content">
            <ul class="nav-menu nav-menu--left">
                <li class="nav-menu__item">
                    <header-dropdown :data="tradeTokenDropdown"></header-dropdown>
                </li>
            </ul>

            <ul class="nav-menu nav-menu--right">
                <li class="nav-menu__item">
                    <header-button :data="aboutButton"></header-button>
                </li>
                <li class="nav-menu__item">
                    <header-dropdown :data="tokenDropdown"></header-dropdown>
                </li>
                <li class="nav-menu__item">
                    <header-dropdown :data="smartContractDropdown"></header-dropdown>
                </li>
                <li class="nav-menu__item">
                    <header-dropdown :data="languageDropdown"></header-dropdown>
                </li>
                <li class="nav-menu__item">
                    <header-dropdown :data="accountDropdown"></header-dropdown>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import HeaderDropdown from "../snippet/HeaderDropdown";
    import HeaderButton from "../snippet/HeaderButton";
    export default {
        name: "dashboard-header",
        components: {
            HeaderDropdown,
            HeaderButton
        },
        data: function() {
            return {
                aboutButton: {
                    label: "About ForkDelta",
                    preIcon: '<i class="fas fa-info-circle"></i>',
                    onClick() {
                        this.$router.push('/about');
                    }
                }
            }
        },
        computed: {
            tradeTokenDropdown() {
                return {
                    displayValue: "trade",
                    buttonBigSize: true,
                    group: [
                        {
                            option: this.$store.getters.getTradeTokenList,
                            onSelect(item, dropdown) {
                                dropdown.displayValue = item.title;
                                dropdown.close();
                            }
                        }
                    ]
                }
            },
            accountDropdown() {
                return {
                    displayValue: "Select account",
                    preIcon: '<i class="fas fa-user"></i>',
                    dropdownAlignRight: true,
                    group: [
                        {
                            option: [
                                {
                                    title: "New account"
                                },
                                {
                                    title: "Import account"
                                },
                                {
                                    title: "Ledger Nano S"
                                },
                                {
                                    title: "Gas price"
                                }
                            ],
                            onSelect(item, dropdown) {
                                alert(item.title);
                                dropdown.close();
                            }
                        }
                    ]
                };
            },
            languageDropdown() {
                return {
                    displayValue: "Language",
                    preIcon: '<i class="fas fa-language"></i>',
                    dropdownAlignRight: true,
                    group: [
                        {
                            option: this.$store.getters.getLanguageList,
                            onSelect(item, dropdown) {
                                dropdown.displayValue = item.title;
                                dropdown.close();
                            }
                        }
                    ]
                }
            },
            smartContractDropdown() {
                return {
                    displayValue: "Smart contract",
                    preIcon: '<i class="fas fa-file-contract"></i>',
                    postIcon: null,
                    dropdownAlignRight: true,
                    group: [
                        {
                            option: [
                                {
                                    title: "Connection: PublicRPC (https://api.myetherwallet.com/eth)",
                                    value: "https://api.myetherwallet.com/eth"
                                }, {
                                    title: "Etherscan contract",
                                    value: "https://etherscan.io/address/0x8d12a197cb00d4747a1fe03395095ce2a5cc6819"
                                }, {
                                    title: "Smart contract overview",
                                    value: "https://www.reddit.com/r/EtherDelta/comments/6kdiyl/smart_contract_overview/"
                                }
                            ],
                            onSelect(item, dropdown) {
                                window.open(item.value , '_blank');
                                dropdown.close();
                            }
                        },
                        {
                            option: this.$store.getters.getSmartContractList,
                            onSelect(item, dropdown) {
                                alert(item.title);
                                dropdown.close();
                            }
                        }
                    ]
                }
            },
            tokenDropdown() {
                return {
                    displayValue: "Tokens",
                    preIcon: '<i class="fas fa-info-circle"></i>',
                    group: [
                        {
                            option: this.$store.getters.getTokenList,
                            onSelect(item, dropdown) {
                                alert(item.title);
                                dropdown.close();
                            }
                        }
                    ]
                }
            }
        },
        mounted: async function() {
            await this.$store.dispatch("fetchTradeTokenList");
            await this.$store.dispatch("fetchLanguageList");
            await this.$store.dispatch("fetchSmartContract");
            await this.$store.dispatch("fetchTokenList");
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
            .nav-menu--left {

            }
            .nav-menu--right {
                float: right
            }
        }
    }
</style>
