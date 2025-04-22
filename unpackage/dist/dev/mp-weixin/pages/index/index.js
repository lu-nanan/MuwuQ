"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent(new UTSJSONObject({
  data() {
    return {
      range: [new UTSJSONObject({
        "value": 0,
        "text": "篮球",
        "disable": true
      }), new UTSJSONObject({
        "value": 1,
        "text": "足球"
      }), new UTSJSONObject({
        "value": 2,
        "text": "游泳"
      })],
      selectedIndex: 1
    };
  },
  onLoad() {
  },
  onReady() {
  },
  methods: new UTSJSONObject({
    search(res = null) {
      common_vendor.index.showToast({
        title: "搜索：" + res.value,
        icon: "none"
      });
    },
    input(res = null) {
      common_vendor.index.__f__("log", "at pages/index/index.uvue:53", "----input:", res);
    },
    clear(res = null) {
      common_vendor.index.showToast({
        title: "clear事件，清除值为：" + res.value,
        icon: "none"
      });
    },
    blur(res = null) {
      common_vendor.index.showToast({
        title: "blur事件，输入值为：" + res.value,
        icon: "none"
      });
    },
    focus(e = null) {
      common_vendor.index.showToast({
        title: "focus事件，输出值为：" + e.value,
        icon: "none"
      });
    },
    cancel(res = null) {
      common_vendor.index.showToast({
        title: "点击取消，输入值为：" + res.value,
        icon: "none"
      });
    },
    change(e = null) {
      common_vendor.index.__f__("log", "at pages/index/index.uvue:81", "e:", e);
    }
  })
}));
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_uni_data_select2 + _easycom_uni_section2 + _easycom_uni_search_bar2)();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_data_select + _easycom_uni_section + _easycom_uni_search_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.p({
      localdata: $data.range,
      label: "排序",
      placement: "bottom"
    }),
    c: common_vendor.o($options.change),
    d: common_vendor.o(($event) => $data.selectedIndex = $event),
    e: common_vendor.p({
      localdata: $data.range,
      modelValue: $data.selectedIndex
    }),
    f: common_vendor.p({
      title: "本地数据",
      type: "line"
    }),
    g: common_vendor.o($options.search),
    h: common_vendor.o($options.blur),
    i: common_vendor.o($options.focus),
    j: common_vendor.o($options.input),
    k: common_vendor.o($options.cancel),
    l: common_vendor.o($options.clear),
    m: common_vendor.p({
      focus: false
    }),
    n: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
