const WeMint = artifacts.require('WeMint');

module.exports = async function (deployer) {
  await deployer.deploy(WeMint);
};
