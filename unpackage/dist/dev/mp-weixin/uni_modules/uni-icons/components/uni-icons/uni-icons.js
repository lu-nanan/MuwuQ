"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uniIcons_components_uniIcons_uniicons_file = require("./uniicons_file.js");
const _sfc_main = common_vendor.defineComponent({
  name: "uni-icons",
  props: {
    type: new UTSJSONObject({
      type: String,
      default: ""
    }),
    color: new UTSJSONObject({
      type: String,
      default: "#333333"
    }),
    size: new UTSJSONObject({
      type: [Number, String],
      default: 16
    }),
    fontFamily: new UTSJSONObject({
      type: String,
      default: ""
    })
  },
  data() {
    return {};
  },
  computed: new UTSJSONObject({
    unicode() {
      let codes = UTS.arrayFind(uni_modules_uniIcons_components_uniIcons_uniicons_file.fontData, (item) => {
        return item.font_class == this.type;
      });
      if (codes !== null) {
        return codes.unicode;
      }
      return "";
    },
    iconSize() {
      const size = this.size;
      if (typeof size == "string") {
        const reg = /^[0-9]*$/g;
        return reg.test(size) ? "" + size + "px" : "" + size;
      }
      return this.getFontSize(size);
    },
    styleObj() {
      if (this.fontFamily !== "") {
        return new UTSJSONObject({ color: this.color, fontSize: this.iconSize, fontFamily: this.fontFamily });
      }
      return new UTSJSONObject({ color: this.color, fontSize: this.iconSize });
    }
  }),
  created() {
  },
  methods: new UTSJSONObject({
    /**
     * 字体大小
     */
    getFontSize(size) {
      return size + "px";
    }
  })
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.unicode),
    b: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
    c: common_vendor.s($options.styleObj)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-776b174b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-icons/components/uni-icons/uni-icons.js.map
