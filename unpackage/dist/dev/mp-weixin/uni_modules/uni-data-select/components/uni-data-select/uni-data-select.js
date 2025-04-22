"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  name: "uni-data-select",
  mixins: [common_vendor.tr.mixinDatacom || {}],
  props: {
    localdata: new UTSJSONObject({
      type: Array,
      default() {
        return [];
      }
    }),
    value: new UTSJSONObject({
      type: [String, Number],
      default: ""
    }),
    modelValue: new UTSJSONObject({
      type: [String, Number],
      default: ""
    }),
    label: new UTSJSONObject({
      type: String,
      default: ""
    }),
    placeholder: new UTSJSONObject({
      type: String,
      default: "请选择"
    }),
    emptyTips: new UTSJSONObject({
      type: String,
      default: "无选项"
    }),
    clear: new UTSJSONObject({
      type: Boolean,
      default: true
    }),
    defItem: new UTSJSONObject({
      type: Number,
      default: 0
    }),
    disabled: new UTSJSONObject({
      type: Boolean,
      default: false
    }),
    // 格式化输出 用法 field="_id as value, version as text, uni_platform as label" format="{label} - {text}"
    format: new UTSJSONObject({
      type: String,
      default: ""
    }),
    placement: new UTSJSONObject({
      type: String,
      default: "bottom"
    })
  },
  data() {
    return {
      showSelector: false,
      current: "",
      mixinDatacomResData: [],
      apps: [],
      channels: [],
      cacheKey: "uni-data-select-lastSelectedValue"
    };
  },
  created() {
    this.debounceGet = this.debounce(() => {
      this.query();
    }, 300);
    if (this.collection && !this.localdata.length) {
      this.debounceGet();
    }
  },
  computed: {
    typePlaceholder() {
      const text = new UTSJSONObject({
        "opendb-stat-app-versions": "版本",
        "opendb-app-channels": "渠道",
        "opendb-app-list": "应用"
      });
      const common = this.placeholder;
      const placeholder = text[this.collection];
      return placeholder ? common + placeholder : common;
    },
    valueCom() {
      return this.modelValue;
    },
    textShow() {
      let text = this.current;
      return text;
    },
    getOffsetByPlacement() {
      switch (this.placement) {
        case "top":
          return "bottom:calc(100% + 12px);";
        case "bottom":
          return "top:calc(100% + 12px);";
      }
    }
  },
  watch: {
    localdata: {
      immediate: true,
      handler(val = null, old = null) {
        if (Array.isArray(val) && old !== val) {
          this.mixinDatacomResData = val;
        }
      }
    },
    valueCom(val = null, old = null) {
      this.initDefVal();
    },
    mixinDatacomResData: {
      immediate: true,
      handler(val = null) {
        if (val.length) {
          this.initDefVal();
        }
      }
    }
  },
  methods: new UTSJSONObject({
    debounce(fn = null, time = 100) {
      let timer = null;
      return function(...args) {
        if (timer)
          clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, time);
      };
    },
    // 执行数据库查询
    query() {
      this.mixinDatacomEasyGet();
    },
    // 监听查询条件变更事件
    onMixinDatacomPropsChange() {
      if (this.collection) {
        this.debounceGet();
      }
    },
    initDefVal() {
      let defValue = "";
      if ((this.valueCom || this.valueCom === 0) && !this.isDisabled(this.valueCom)) {
        defValue = this.valueCom;
      } else {
        let strogeValue = null;
        if (this.collection) {
          strogeValue = this.getCache();
        }
        if (strogeValue || strogeValue === 0) {
          defValue = strogeValue;
        } else {
          let defItem = "";
          if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
            defItem = this.mixinDatacomResData[this.defItem - 1].value;
          }
          defValue = defItem;
        }
        if (defValue || defValue === 0) {
          this.emit(defValue);
        }
      }
      const def = this.mixinDatacomResData.find((item) => {
        return item.value === defValue;
      });
      this.current = def ? this.formatItemName(def) : "";
    },
    /**
     * @param {[String, Number]} value
     * 判断用户给的 value 是否同时为禁用状态
     */
    isDisabled(value = null) {
      let isDisabled = false;
      this.mixinDatacomResData.forEach((item) => {
        if (item.value === value) {
          isDisabled = item.disable;
        }
      });
      return isDisabled;
    },
    clearVal() {
      this.emit("");
      this.current = "";
      if (this.collection) {
        this.removeCache();
      }
    },
    change(item = null) {
      if (!item.disable) {
        this.showSelector = false;
        this.current = this.formatItemName(item);
        this.emit(item.value);
      }
    },
    emit(val = null) {
      this.$emit("input", val);
      this.$emit("update:modelValue", val);
      this.$emit("change", val);
      if (this.collection) {
        this.setCache(val);
      }
    },
    toggleSelector() {
      if (this.disabled) {
        return null;
      }
      this.showSelector = !this.showSelector;
    },
    formatItemName(item = null) {
      let text = item.text, value = item.value, channel_code = item.channel_code;
      channel_code = channel_code ? `(${channel_code})` : "";
      if (this.format) {
        let str = "";
        str = this.format;
        for (let key in item) {
          str = str.replace(new RegExp(`{${key}}`, "g"), item[key]);
        }
        return str;
      } else {
        return this.collection.indexOf("app-list") > 0 ? `${text}(${value})` : text ? text : `未命名${channel_code}`;
      }
    },
    // 获取当前加载的数据
    getLoadData() {
      return this.mixinDatacomResData;
    },
    // 获取当前缓存key
    getCurrentCacheKey() {
      return this.collection;
    },
    // 获取缓存
    getCache(name = this.getCurrentCacheKey()) {
      let cacheData = common_vendor.index.getStorageSync(this.cacheKey) || new UTSJSONObject({});
      return cacheData[name];
    },
    // 设置缓存
    setCache(value = null, name = this.getCurrentCacheKey()) {
      let cacheData = common_vendor.index.getStorageSync(this.cacheKey) || new UTSJSONObject({});
      cacheData[name] = value;
      common_vendor.index.setStorageSync(this.cacheKey, cacheData);
    },
    // 删除缓存
    removeCache(name = this.getCurrentCacheKey()) {
      let cacheData = common_vendor.index.getStorageSync(this.cacheKey) || new UTSJSONObject({});
      delete cacheData[name];
      common_vendor.index.setStorageSync(this.cacheKey, cacheData);
    }
  })
});
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.label
  }, $props.label ? {
    b: common_vendor.t($props.label + "：")
  } : {}, {
    c: $data.current
  }, $data.current ? {
    d: common_vendor.t($options.textShow)
  } : {
    e: common_vendor.t($options.typePlaceholder)
  }, {
    f: $data.current && $props.clear && !$props.disabled
  }, $data.current && $props.clear && !$props.disabled ? {
    g: common_vendor.p({
      type: "clear",
      color: "#c0c4cc",
      size: "24"
    }),
    h: common_vendor.o((...args) => $options.clearVal && $options.clearVal(...args))
  } : {
    i: common_vendor.p({
      type: $data.showSelector ? "top" : "bottom",
      size: "14",
      color: "#999"
    })
  }, {
    j: common_vendor.o((...args) => $options.toggleSelector && $options.toggleSelector(...args)),
    k: $data.showSelector
  }, $data.showSelector ? {
    l: common_vendor.o((...args) => $options.toggleSelector && $options.toggleSelector(...args))
  } : {}, {
    m: $data.showSelector
  }, $data.showSelector ? common_vendor.e({
    n: common_vendor.n($props.placement == "bottom" ? "uni-popper__arrow_bottom" : "uni-popper__arrow_top"),
    o: $data.mixinDatacomResData.length === 0
  }, $data.mixinDatacomResData.length === 0 ? {
    p: common_vendor.t($props.emptyTips)
  } : {
    q: common_vendor.f($data.mixinDatacomResData, (item, index, i0) => {
      return {
        a: common_vendor.t($options.formatItemName(item)),
        b: item.disable ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $options.change(item), index)
      };
    })
  }, {
    r: common_vendor.s($options.getOffsetByPlacement)
  }) : {}, {
    s: $props.disabled ? 1 : "",
    t: $data.current ? 1 : "",
    v: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js.map
