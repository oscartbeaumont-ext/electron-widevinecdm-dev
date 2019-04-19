const download = require("download");
const os = require("os");

const { WIDEVINECDM_VERSION } = require("../src/constants");
const SYSTEM_ARCH = os.arch();
const SYSTEM_PLATFORM = os.platform();

console.log(
  `Downloading Widevine Version ${WIDEVINECDM_VERSION} for Arch ${SYSTEM_ARCH}...`
);

// Determine The Download URL based On Your System
var DOWNLOAD_URL = "";
switch (SYSTEM_PLATFORM) {
  case "linux":
    DOWNLOAD_URL = `https://dl.google.com/widevine-cdm/${WIDEVINECDM_VERSION}-linux-${SYSTEM_ARCH}.zip`;
  case "darwin":
    DOWNLOAD_URL = `https://dl.google.com/widevine-cdm/${WIDEVINECDM_VERSION}-mac-${SYSTEM_ARCH}.zip`;
  case "win32":
    DOWNLOAD_URL = `https://dl.google.com/widevine-cdm/${WIDEVINECDM_VERSION}-win-${SYSTEM_ARCH}.zip`;
}

// Download Widevine
download(DOWNLOAD_URL, "widevine", {
  // TEMP: path.resolve(__dirname, "widevine")
  extract: true
}).catch(() => {
  console.error(
    "Error downloading Widevine. Your OS or Arch may not be supported or your internet connection was interrupted!"
  );
});
