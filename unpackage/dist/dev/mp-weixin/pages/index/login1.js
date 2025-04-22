"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent(new UTSJSONObject({
  data() {
    return {};
  },
  methods: new UTSJSONObject({
    goPage(url) {
      if (url == "./index") {
        common_vendor.index.switchTab({ url });
      } else {
        common_vendor.index.navigateTo({ url });
      }
    }
  })
}));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.goPage("./login2")),
    b: common_vendor.o(($event) => $options.goPage("./index")),
    c: common_vendor.o(($event) => $options.goPage("./register")),
    d: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/login1.js.map
