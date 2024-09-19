const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const RegisterDisasterModule = buildModule("RegisterDisasterModule", (m) => {
  const RegisterDisaster = m.contract("RegisterDisaster");

  return { RegisterDisaster };
});

module.exports = RegisterDisasterModule;