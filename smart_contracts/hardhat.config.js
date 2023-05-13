// https://eth-sepolia.g.alchemy.com/v2/mkgNg-n7-ecJ_pkSl8IBpFcj4K_i78Oc

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/mkgNg-n7-ecJ_pkSl8IBpFcj4K_i78Oc',
      accounts: ['9330633c6423bad287554dcbeac85a17c473aae12ab91dfa37dc75a4dae755aa'],
    },
  },
}