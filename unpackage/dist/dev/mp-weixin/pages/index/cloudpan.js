"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent(new UTSJSONObject({
  methods: new UTSJSONObject({
    testConnection() {
      const apiUrl = "https://muwutools.top/getAllUserInfo/getAllUserInfo";
      common_vendor.index.request({
        url: apiUrl,
        method: "GET",
        sslVerify: false,
        success: (res) => {
          if (res.statusCode === 200) {
            common_vendor.index.__f__("log", "at pages/index/cloudpan.uvue:19", "后端返回的字符串:", res.data);
          } else {
            common_vendor.index.__f__("error", "at pages/index/cloudpan.uvue:21", "请求失败，状态码:", res.statusCode);
          }
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/index/cloudpan.uvue:25", "请求出错:", err);
        }
      });
    }
  })
}));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.testConnection && $options.testConnection(...args)),
    b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-72b39eeb"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/cloudpan.js.map
