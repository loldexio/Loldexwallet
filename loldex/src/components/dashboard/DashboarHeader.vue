<template>
  <div class="dashboard-header">
    <div class="dashboard-header__logo">
      <img class="logo" src="@/assets/img/logo.png">
    </div>
		<div class="dashboard-header__toggle-button">
			<header-button :data="toggleButton"></header-button>
		</div>
    <div class="dashboard-header__content" :class="{'dashboard-header__content--show': toggle, 'dashboard-header__content--hide': !toggle}">
      <ul class="nav-menu nav-menu--right">
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
    <b-modal id="balance-modal" title="Balance" ok-only v-model="modal.balance" modal-class="modal--expand">
			<b-tabs nav-wrapper-class="tab-header">
				<b-tab title="Important" active>
					<text-box>
						<div class="text-box__header">URL & Status</div>
						<div class="text-box__content">
							The URL of this project is
							<a
								href="https://loldex.io/"
								class="text-box__link"
							>loldex.io</a>. Bookmark it once and use the bookmark.
						</div>
						<div class="text-box__content">
							This interface is a fork of
							<a
								href="https://etherdelta.com"
								class="text-box__link"
							>EtherDelta</a> with a ton of improvements including a much faster order processing system. It interacts with LoLDEX's revamped API and EtherDelta's original contract.
						</div>
						<div class="text-box__header">How to Start Trading</div>
						<div
							class="text-box__content"
						>Use the Deposit form (upper left) to put your funds (ETH and tokens) on the exchange. Do not send your tokens directly to the smart contract, or they will be lost and unrecoverable. LoLDEX cannot help you with funds incorrectly deposited to the trading smart contract.</div>
						<div class="text-box__header">LoLDEX Disclaimer</div>
						<div
							class="text-box__content"
						>LoLDEX is a decentralized trading platform that lets you trade Ether and Ethereum-based tokens directly with other users. You are responsible for your own account, funds, and private keys. You are responsible for your own trading decisions, and the details and mechanics of the tokens you trade. LoLDEX is not responsible for your decisions, actions, or losses that result from using LoLDEX. LoLDEX makes no guarantee about the tokens that you trade using LoLDEX. LoLDEX does not hold your funds and does not offer refunds. While the information contained on LoLDEX is periodically updated, no guarantee is given that the information provided on LoLDEX is correct, complete, or up-to-date. By using LoLDEX, you acknowledge this and agree to these terms.</div>
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
    <b-modal id="volume-modal" title="Volume" ok-only v-model="modal.volume" modal-class="modal--expand">
      <volume-table :data="volume"></volume-table>
    </b-modal>
    <b-modal id="import-account-modal" title="Import account" v-model="modal.importAccount">
        <form autocomplete="off">
          <div class="form-group">
            <label>Address</label>
            <input type="text" class="form-control" placeholder="0x...">
          </div>
          <div class="form-group">
            <label>Private key</label>
            <input type="text" class="form-control" placeholder="0x...">
          </div>
        </form>
        <div slot="modal-footer" class="w-100">
           <b-btn size="sm" class="float-right ml-2" variant="primary" @click="modal.importAccount=false">
              Import account
            </b-btn>
            <b-btn size="sm" class="float-right" variant="primary" @click="modal.importAccount=false">
              Cancel
            </b-btn>
        </div>
    </b-modal>
    <b-modal id="ledger-instruction-modal" title="Ledger" hide-footer v-model="modal.ledgerInstruction">
        <div class="ad">
          <a href="https://www.ledgerwallet.com/r/be21?path=/products/ledger-nano-s" target="_blank">
          <img src="@/assets/img/ledger.png" class="ledger-img w-100 mt-4 mb-4">
          </a>
        </div>
        <h3>Instructions</h3>
        <ol>
          <li>Plug in your Ledger Nano S.</li>
          <li>On the Ledger Nano S, open the Ethereum app.</li>
          <li>On the Ledger Nano S, go to "Settings" and turn on "Browser" and "Contract" modes.</li>
          <li>Refresh LoLDEX.</li>
          <li>Your Ledger Nano S address will appear in the account dropdown automatically, with a green "Ledger" box next to it.</li>
          <li>When you deposit, withdraw, place an order, or trade, approve the transaction using your Ledger Nano S.</li>
        </ol>
        <div slot="modal-footer" class="w-100">
        </div>
    </b-modal>
    <b-modal id="gas-price-modal" title="Import account" v-model="modal.gasPrice">
        <form>
          <div class="form-group">
            <label>Gas price (gwei)</label>
            <input type="text" class="form-control" value="4">
          </div>
        </form>
        <div slot="modal-footer" class="w-100">
           <b-btn size="sm" class="float-right ml-2" variant="primary" @click="modal.gasPrice=false">
              Set gas price
            </b-btn>
            <b-btn size="sm" class="float-right" variant="primary" @click="modal.gasPrice=false">
              Cancel
            </b-btn>
        </div>
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
      modal: {
        balance: false,
        volume: false,
        importAccount: false,
        ledgerInstruction: false,
        gasPrice: false
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
      var self = this;
      return {
        row: this.$store.getters.getVolumeList,
        onClick: function(item, table) {
          alert(item.name);
          self.modal.volume = false;
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
          note: "Note: LoLDEX will only show recent transactions."
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
          row: this.$store.getters.getOrderData,
          note: "Note: LoLDEX will only show recent transactions."
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
          note: "Note: LoLDEX will only show recent transactions."
        }
      };
    },
    accountDropdown() {
      var self = this;
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
                title: "Import account",
                onActive: function() {
                  self.modal.importAccount = true;
                }
              },
              {
                title: "Ledger Nano S",
                onActive: function() {
                  self.modal.ledgerInstruction = true;
                }
              },
              {
                title: "Gas price",
                onActive: function() {
                  self.modal.gasPrice = true;
                }
              }
            ],
            onSelect(item, dropdown) {
              console.log(item);
              if(typeof(item.onActive) != "function") {
                alert(item.title);
              } else {
                item.onActive();
              }
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

  .dashboard-header__logo {
    padding: 5px;
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
