"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/login1.js";
  "./pages/index/index.js";
  "./pages/index/my.js";
  "./pages/index/cloudpan.js";
  "./pages/index/login2.js";
  "./pages/index/register.js";
}
const _sfc_main = common_vendor.defineComponent(new UTSJSONObject({
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.uvue:5", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.uvue:8", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.uvue:11", "App Hide");
  },
  onExit: function() {
    common_vendor.index.__f__("log", "at App.uvue:32", "App Exit");
  }
}));
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
