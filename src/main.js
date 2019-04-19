const path = require("path");

const { WIDEVINECDM_VERSION } = require("./constants");

// load adds the Widevine plugin to the Electron app
module.exports.load = app => {
  // TODO: asar Path ??
  const widevinePath = path.join(__dirname, "..", "widevine");
  app.commandLine.appendSwitch("widevine-cdm-path", widevinePath);
  app.commandLine.appendSwitch("widevine-cdm-version", WIDEVINECDM_VERSION);
};
