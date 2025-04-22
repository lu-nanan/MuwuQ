"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent(new UTSJSONObject({
  data() {
    return {
      title: "Helloi",
      options: ["选项1", "选项2", "选项3", "选项4"],
      selectedIndex: 0
    };
  },
  onLoad() {
  },
  onReady() {
  },
  methods: new UTSJSONObject({
    onPickerChange(e = null) {
      this.selectedIndex = e.detail.value;
      common_vendor.index.__f__("log", "at pages/index/index.uvue:40", "选择的选项是:", this.options[this.selectedIndex]);
    }
  })
}));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.options[$data.selectedIndex]),
    b: $data.options,
    c: common_vendor.o((...args) => $options.onPickerChange && $options.onPickerChange(...args)),
    d: $data.selectedIndex,
    e: common_vendor.t($data.options[$data.selectedIndex]),
    f: $data.options,
    g: common_vendor.o((...args) => $options.onPickerChange && $options.onPickerChange(...args)),
    h: $data.selectedIndex,
    i: common_vendor.t($data.options[$data.selectedIndex]),
    j: $data.options,
    k: common_vendor.o((...args) => $options.onPickerChange && $options.onPickerChange(...args)),
    l: $data.selectedIndex,
    m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
