<template>
  <div class="dashboard-header">
    <div class="dashboard-header__logo">
      <img class="logo" src="@/assets/img/logo.png">
    </div>
		<div class="dashboard-header__toggle-button">
			<header-button :data="toggleButton"></header-button>
		</div>
    <div class="dashboard-header__content" :class="{'dashboard-header__content--show': toggle, 'dashboard-header__content--hide': !toggle}">
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
          <header-button :data="balanceButton"></header-button>
        </li>
				<li class="nav-menu__item">
          <header-button :data="volumeButton"></header-button>
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
        <li class="nav-menu__item">
          <header-toggle :data="themeToggle"></header-toggle>
        </li>
      </ul>
    </div>
    <b-modal id="balance-modal" title="Balance" ok-only v-model="modal.balance">
			<b-tabs nav-wrapper-class="tab-header">
				<b-tab title="Important" active>
					<text-box>
						<div class="text-box__header">URL & Status</div>
						<div class="text-box__content">
							The URL of this project is
							<a
								href="https://forkdelta.app"
								class="text-box__link"
							>forkdelta.app</a>. Bookmark it once and use the bookmark.
						</div>
						<div class="text-box__content">
							This interface is a fork of
							<a
								href="https://etherdelta.com"
								class="text-box__link"
							>EtherDelta</a> with a ton of improvements including a much faster order processing system. It interacts with ForkDelta's revamped API and EtherDelta's original contract.
						</div>
						<div class="text-box__header">How to Start Trading</div>
						<div
							class="text-box__content"
						>Use the Deposit form (upper left) to put your funds (ETH and tokens) on the exchange. Do not send your tokens directly to the smart contract, or they will be lost and unrecoverable. ForkDelta cannot help you with funds incorrectly deposited to the trading smart contract.</div>
						<div class="text-box__header">ForkDelta Disclaimer</div>
						<div
							class="text-box__content"
						>ForkDelta is a decentralized trading platform that lets you trade Ether and Ethereum-based tokens directly with other users. You are responsible for your own account, funds, and private keys. You are responsible for your own trading decisions, and the details and mechanics of the tokens you trade. ForkDelta is not responsible for your decisions, actions, or losses that result from using ForkDelta. ForkDelta makes no guarantee about the tokens that you trade using ForkDelta. ForkDelta does not hold your funds and does not offer refunds. While the information contained on ForkDelta is periodically updated, no guarantee is given that the information provided on ForkDelta is correct, complete, or up-to-date. By using ForkDelta, you acknowledge this and agree to these terms.</div>
					</text-box>
				</b-tab>
				<b-tab title="Trades">
					<custom-table :data="transaction.trade"></custom-table>
				</b-tab>
				<b-tab title="Orders">
					<custom-table :data="transaction.order"></custom-table>
				</b-tab>
				<b-tab title="Funds">
					<custom-table :data="transaction.fund"></custom-table>
				</b-tab>
			</b-tabs>
    </b-modal>
    <b-modal id="volume-modal" title="Volume" ok-only v-model="modal.volume">
      <volume-table :data="volume"></volume-table>
    </b-modal>
  </div>
</template>

<script>
import HeaderDropdown from "../snippet/HeaderDropdown";
import HeaderButton from "../snippet/HeaderButton";
import HeaderToggle from "../snippet/HeaderToggle";
import Panel from "../snippet/Panel";
import VolumeTable from "../snippet/VolumeTable";
import TextBox from "../snippet/TextBox";
import CustomTable from "../snippet/CustomTable";
export default {
  name: "dashboard-header",
  components: {
    HeaderDropdown,
    HeaderButton,
    Panel,
    VolumeTable,
    TextBox,
    CustomTable,
    HeaderToggle
  },
  data: function() {
    var self = this;
    return {
      aboutButton: {
        label: "About ForkDelta",
        preIcon: '<i class="fas fa-info-circle"></i>',
        onClick() {
          self.$router.push("/about");
        }
      },
      modal: {
        balance: false,
        volume: false
			},
			toggle: false,
      balanceButton: {
				label: "Balance",
				preIcon: '<i class="fas fa-money-check-alt"></i>',
        onClick() {
					self.modalShow("balance");
					self.toggle = false;
        }
			},
			volumeButton: {
				label: "Volume",
				preIcon: '<i class="fas fa-align-left"></i>',
        onClick() {
					self.modalShow("volume");
					self.toggle = false;
        }
			},
			toggleButton: {
				preIcon: '<i class="fas fa-bars"></i>',
				onClick() {
					self.toggle = !self.toggle;
				}
			}
    };
  },
  methods: {
		closeAllModal() {
			for (var key in this.modal) {
				this.modal[key] = false;
			}
		},
		modalShow(modalName) {
			this.closeAllModal();
			this.modal[modalName] = true;
		}
	},
  computed: {
    themeToggle() {
      var self = this;
      return [{
          label: "Dark",
          onActive: function() {
            self.$store.dispatch("setTheme", "dark");
          }
        }, {
          label: "Light",
          onActive: function() {
            self.$store.dispatch("setTheme", "light");
          }
      }]
    },
    volume() {
      return {
        row: this.$store.getters.getVolumeList,
        onClick: function(item, table) {
          alert(item.name);
        }
      };
    },
    transaction() {
      return {
        trade: {
          col: [
            {
              label: "Transaction",
              prop: "transaction"
            },
            {
              label: "Type",
              prop: "type"
            },
            {
              label: "10MT",
              prop: "token"
            },
            {
              label: "ETH",
              prop: "eth"
            },
            {
              label: "10MT/ETH",
              prop: "ratio"
            }
          ],
          row: this.$store.getters.getTradeData,
          note: "Note: ForkDelta will only show recent transactions."
        },
        order: {
          col: [
            {
              label: "10MT/ETH",
              prop: "ratio"
            },
            {
              label: "Available Volume",
              prop: "availableVolume"
            },
            {
              label: "Expire in",
              prop: "expireIn"
            },
            {
              label: "Cancel",
              prop: "cancel"
            }
          ],
          row: this.$store.getters.getOrderData
        },
        fund: {
          col: [
            {
              label: "Transaction",
              prop: "transaction"
            },
            {
              label: "Type",
              prop: "type"
            },
            {
              label: "10MT",
              prop: "token"
            },
            {
              label: "ETH",
              prop: "eth"
            }
          ],
          row: this.$store.getters.getFundData,
          note: "Note: ForkDelta will only show recent transactions."
        }
      };
    },
    tradeTokenDropdown() {
      return {
        displayValue: "Token",
        buttonBigSize: true,
        group: [
          {
            option: this.$store.getters.getTradeTokenList,
            onSelect(item, dropdown) {
              dropdown.label = item.value;
              dropdown.close();
            }
          }
        ]
      };
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
              dropdown.label = item.title;
              dropdown.close();
            }
          }
        ]
      };
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
                title:
                  "Connection: PublicRPC (https://api.myetherwallet.com/eth)",
                value: "https://api.myetherwallet.com/eth"
              },
              {
                title: "Etherscan contract",
                value:
                  "https://etherscan.io/address/0x8d12a197cb00d4747a1fe03395095ce2a5cc6819"
              },
              {
                title: "Smart contract overview",
                value:
                  "https://www.reddit.com/r/EtherDelta/comments/6kdiyl/smart_contract_overview/"
              }
            ],
            onSelect(item, dropdown) {
              window.open(item.value, "_blank");
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
      };
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
      };
    }
  },
  mounted: async function() {
    await this.$store.dispatch("fetchTradeTokenList");
    await this.$store.dispatch("fetchLanguageList");
    await this.$store.dispatch("fetchSmartContract");
    await this.$store.dispatch("fetchTokenList");
  }
};
</script>

<style lang="scss">
.dashboard-header {
  height: 100%;
  border-bottom: 1px solid black;
  display: flex;
	align-items: stretch;
	position: relative;

	.dashboard-header__toggle-button {
		position: absolute;
		top: 0;
		right: 0;
		display: none;
	}
	@media (max-width: $break-point) {
		.dashboard-header__toggle-button {
			display: inline-block;
		}
	}
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border: 1px solid #ccc;
    transition: all 0.2s ease-out;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  .dashboard-header__logo {
    .logo {
      height: 100%;
    }
  }
  .dashboard-header__content {
		flex: 1 1 auto;
		display: inline-block;
    .nav-menu {
      padding: 0;
      margin: 0;
      display: inline-block;
      list-style-type: none;
			height: 100%;
			font-size: 0;
      .nav-menu__item {
        display: inline-block;
				height: 100%;
				font-size: $header-content-font-size;
      }
    }
    .nav-menu--left {
    }
    .nav-menu--right {
      float: right;
		}
		&.dashboard-header__content--hide {
			display: none;

			@media (min-width: $break-point) {
				display: inline-block
			}
		}
		&.dashboard-header__content--show {
			display: initial;
		}
		@media (max-width: $break-point) {
			position: absolute;
			top: 100%;
			left: 0;
			z-index: 9999;
			background-color: #fff;
			width: 100%;

			.nav-menu {
				float: none !important;
				width: 100%;

				.nav-menu__item {
					display: block;
				}
			}
		}
  }
}
</style>
