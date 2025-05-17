if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$k = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _imports_0$1 = "/static/login3.png";
  const _sfc_main$j = {
    data() {
      return {
        remeberOrNot: false,
        account: "",
        password: ""
      };
    },
    methods: {
      goVcLogin() {
        uni.navigateTo({
          url: "/pages/Login/vcLogin"
        });
      },
      goRegister() {
        uni.navigateTo({
          url: "/pages/Register/Register"
        });
      },
      handleChange() {
        this.remeberOrNot = !this.remeberOrNot;
        formatAppLog("log", "at pages/Login/apLogin.vue:63", this.remeberOrNot);
      },
      show() {
        formatAppLog("log", "at pages/Login/apLogin.vue:66", this.account, this.password);
      },
      async checkPassword() {
        if (!this.account.trim()) {
          uni.showToast({
            title: "请输入账号",
            icon: "none"
          });
          return;
        }
        if (!this.password.trim()) {
          uni.showToast({
            title: "请输入密码",
            icon: "none"
          });
          return;
        }
        const url = "https://121.41.70.8:8082/auth/login";
        const data = {
          account: this.account,
          password: this.password
        };
        try {
          const res = await uni.request({
            url,
            method: "POST",
            data,
            header: {
              "Content-Type": "application/json"
            }
          });
          if (res.data.message === "登录成功") {
            uni.showToast({
              title: "登录成功",
              icon: "success"
            });
            uni.setStorageSync("isLoggedIn", true);
            const app = getApp();
            app.globalData.userInfo = { id: res.data.userId };
            uni.reLaunch({
              url: "/pages/index/index"
            });
          } else {
            uni.showToast({
              title: res.data,
              icon: "none"
            });
          }
        } catch (error) {
          uni.showToast({
            title: "网络请求失败",
            icon: "none"
          });
          formatAppLog("error", "at pages/Login/apLogin.vue:122", error);
        }
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "login-container" }, [
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$1,
        mode: "heightFix"
      }),
      vue.createElementVNode("view", { class: "login-box" }, [
        vue.createElementVNode("view", { class: "login-textbox" }, [
          vue.createElementVNode("text", { class: "login-title" }, "登录"),
          vue.createElementVNode("text", {
            class: "y-text",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.goVcLogin())
          }, "验证码登录")
        ]),
        vue.createElementVNode("view", { class: "input-groups" }, [
          vue.createElementVNode("view", { class: "input-group" }, [
            vue.createVNode(_component_uni_icons, {
              type: "person",
              size: "60rpx",
              color: "#6966AD"
            }),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "login-input",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.account = $event),
                placeholder: "账号/手机号/邮箱"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.account]
            ])
          ]),
          vue.createElementVNode("view", { class: "input-group" }, [
            vue.createVNode(_component_uni_icons, {
              type: "locked",
              size: "60rpx",
              color: "#6966AD"
            }),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "login-input",
                type: "password",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.password = $event),
                placeholder: "登录密码"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.password]
            ])
          ]),
          vue.createElementVNode("view", { class: "remeberme" }, [
            vue.createElementVNode(
              "checkbox-group",
              {
                name: "",
                onChange: _cache[3] || (_cache[3] = ($event) => $options.handleChange())
              },
              [
                vue.createElementVNode(
                  "checkbox",
                  {
                    value: "checkbox1",
                    style: vue.normalizeStyle({ transform: "scale(0.6)" })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("text", { class: "z-text" }, "记住我"),
            vue.createElementVNode("text", { class: "w-text" }, "忘记密码")
          ]),
          vue.createElementVNode("button", {
            class: "login-button",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.checkPassword())
          }, "登录"),
          vue.createElementVNode("view", { class: "to-register" }, [
            vue.createElementVNode("text", { class: "rn-text" }, "没有账号？"),
            vue.createElementVNode("text", {
              class: "r-text",
              onClick: _cache[5] || (_cache[5] = ($event) => $options.goRegister())
            }, " 点此注册")
          ])
        ])
      ])
    ]);
  }
  const PagesLoginApLogin = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/pages/Login/apLogin.vue"]]);
  const _sfc_main$i = {
    data() {
      return {
        sortOptions: ["默认排序", "最近使用", "最久未用", "从大到小", "从小到大"],
        currentSort: "默认排序",
        fileOptions: ["所有文件", "图片", "文件", "文件夹", "视频", "音频"],
        currentFile: "所有文件",
        isBatchMode: false
      };
    },
    methods: {
      handleSortChange(e) {
        this.currentSort = this.sortOptions[e.detail.value];
        uni.$emit("sortedEvent", e);
      },
      handleFileChange(e) {
        this.currentFile = this.fileOptions[e.detail.value];
      },
      toggleBatchMode() {
        this.isBatchMode = !this.isBatchMode;
        uni.$emit("toggleBatchModes", this.isBatchMode);
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "custom-navbar" }, [
        vue.createCommentVNode(" 排序方式 "),
        vue.createElementVNode("picker", {
          mode: "selector",
          range: $data.sortOptions,
          onChange: _cache[0] || (_cache[0] = (...args) => $options.handleSortChange && $options.handleSortChange(...args)),
          class: "nav-item"
        }, [
          vue.createElementVNode(
            "view",
            { class: "nav-item-text" },
            vue.toDisplayString($data.currentSort),
            1
            /* TEXT */
          )
        ], 40, ["range"]),
        vue.createCommentVNode(" 文件类型 "),
        vue.createElementVNode("picker", {
          mode: "selector",
          range: $data.fileOptions,
          onChange: _cache[1] || (_cache[1] = (...args) => $options.handleFileChange && $options.handleFileChange(...args)),
          class: "nav-item"
        }, [
          vue.createElementVNode(
            "view",
            { class: "nav-item-text" },
            vue.toDisplayString($data.currentFile),
            1
            /* TEXT */
          )
        ], 40, ["range"]),
        vue.createCommentVNode(" 批量操作 "),
        vue.createElementVNode("view", {
          class: "nav-item",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleBatchMode && $options.toggleBatchMode(...args))
        }, [
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["nav-item-text", { "batch-active": $data.isBatchMode }])
            },
            vue.toDisplayString($data.isBatchMode ? "完成" : "批量操作"),
            3
            /* TEXT, CLASS */
          )
        ])
      ])
    ]);
  }
  const myNavagationBar = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-77ec4929"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/components/myNavigationBar.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$h = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$g = {
    data() {
      return {};
    },
    methods: {
      search(res) {
        uni.showToast({
          title: "搜索：" + res.value,
          icon: "none"
        });
      },
      blur(res) {
        uni.showToast({
          title: "blur事件，输入值为：" + res.value,
          icon: "none"
        });
      },
      focus(e) {
        uni.showToast({
          title: "focus事件，输出值为：" + e.value,
          icon: "none"
        });
      },
      change(e) {
        formatAppLog("log", "at components/mySearchInput.vue:34", "e:", e);
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_search_bar, {
        class: "searchbar",
        onConfirm: $options.search,
        focus: false,
        onBlur: $options.blur,
        onFocus: $options.focus,
        placeholder: "请输入文字"
      }, null, 8, ["onConfirm", "onBlur", "onFocus"])
    ]);
  }
  const mySearchInput = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-d7055f20"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/components/mySearchInput.vue"]]);
  const _sfc_main$f = {
    name: "spaceUsageDisplay",
    data() {
      return {
        usedStorage: "3.2GB",
        totalStorage: "8.0GB",
        usedPercents: 40,
        fileCount: 152
      };
    },
    computed: {
      usePercentages: function() {
        let usedPercent = 40;
        return usedPercent + "%";
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "content-wrapper" }, [
        vue.createElementVNode("view", { class: "content" }, [
          vue.createCommentVNode(" 左侧环状图 "),
          vue.createElementVNode("view", { class: "chart-container" }, [
            vue.createElementVNode("view", { class: "chart-inner" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "ring-progress",
                  style: vue.normalizeStyle({ background: `conic-gradient(#FFD700 ${$data.usedPercents}%, #EAEEF4 0%)` })
                },
                [
                  vue.createElementVNode("view", { class: "ring-inner" }, [
                    vue.createCommentVNode(' 							<text class="percentage">{{ Math.round(usedPercent) }}%</text> '),
                    vue.createElementVNode("text", { class: "usage-label" }, "内存使用率")
                  ])
                ],
                4
                /* STYLE */
              )
            ])
          ]),
          vue.createCommentVNode(" 右侧数据 "),
          vue.createElementVNode("view", { class: "data-container" }, [
            vue.createElementVNode("view", { class: "data-item" }, [
              vue.createElementVNode("text", { class: "label" }, "已用内存"),
              vue.createElementVNode(
                "text",
                { class: "value" },
                vue.toDisplayString($data.usedStorage) + " / " + vue.toDisplayString($data.totalStorage),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "data-item" }, [
              vue.createElementVNode("text", { class: "label" }, "文件数目"),
              vue.createElementVNode(
                "text",
                { class: "value" },
                vue.toDisplayString($data.fileCount) + " 个",
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "data-item" }, [
              vue.createElementVNode(
                "text",
                { class: "infos" },
                "已用 " + vue.toDisplayString($options.usePercentages) + ", 可放心使用",
                1
                /* TEXT */
              )
            ])
          ])
        ])
      ])
    ]);
  }
  const spaceUsageDisplay = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-0131ded6"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/components/spaceUsageDisplay.vue"]]);
  const _sfc_main$e = {
    props: ["file"],
    data() {
      return {
        // name: "�ļ���1",
        // date: "2024-12-1",
        // size: "123G",
        // tag: "����"
      };
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "file-item" }, [
      vue.createElementVNode("view", { class: "file-icon" }, [
        vue.createElementVNode("text", null, "haha")
      ]),
      vue.createElementVNode("view", { class: "file-divider" }),
      vue.createElementVNode("view", { class: "file-info" }, [
        vue.createElementVNode("view", { class: "file-nametag" }, [
          vue.createElementVNode(
            "text",
            { class: "file-name" },
            vue.toDisplayString($props.file.name),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "file-tag" },
            vue.toDisplayString($props.file.tag),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "file-datesize" }, [
          vue.createElementVNode(
            "text",
            { class: "file-date" },
            vue.toDisplayString($props.file.date),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { class: "file-size" },
            vue.toDisplayString($props.file.size),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const cloudFileListItem = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-cde9d81a"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/components/cloudFileListItem.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        isBatchModes: false,
        files: [
          {
            name: "文件夹1",
            date: "2024-12-01",
            size: "1.22G",
            type: "文件夹",
            selected: false,
            tag: "工作"
          },
          {
            name: "文件夹2",
            date: "2024-12-01",
            size: "1.22G",
            type: "文件夹",
            selected: false,
            tag: "工作"
          },
          {
            name: "旅行照片",
            date: "2024-11-28",
            size: "5.6M",
            type: "图片",
            selected: false,
            tag: "工作"
          },
          {
            name: "工作报告",
            date: "2024-11-25",
            size: "2.3M",
            type: "文档",
            selected: false,
            tag: "工作"
          },
          {
            name: "会议视频",
            date: "2024-11-20",
            size: "156M",
            type: "视频",
            selected: false,
            tag: "工作"
          },
          {
            name: "语音备忘录",
            date: "2024-11-18",
            size: "3.2M",
            type: "音频",
            selected: false,
            tag: "工作"
          },
          {
            name: "项目计划书",
            date: "2024-11-15",
            size: "1.8M",
            type: "文档",
            selected: false,
            tag: "工作"
          },
          {
            name: "家庭视频",
            date: "2024-11-10",
            size: "230M",
            type: "视频",
            selected: true,
            tag: "工作"
          },
          {
            name: "工作文件夹",
            date: "2024-11-05",
            size: "1.22G",
            type: "文件夹",
            selected: false,
            tag: "工作"
          },
          {
            name: "系统备份",
            date: "2024-11-01",
            size: "4.5G",
            type: "文件夹",
            selected: false,
            tag: "工作"
          }
        ]
      };
    },
    components: {
      cloudFileListItem
    },
    created() {
      uni.$on("toggleBatchModes", (function(e) {
        formatAppLog("log", "at components/cloudFileList.vue:111", "监听到事件，携带参数为：" + e);
        if (this.isBatchModes === true && e === false) {
          const selectedFiles = this.files.filter(function(file) {
            return file.selected;
          });
          for (let i = 0; i < selectedFiles.length; i++) {
            formatAppLog("log", "at components/cloudFileList.vue:120", selectedFiles[i].name);
          }
          for (let i = 0; i < this.files.length; i++) {
            this.files[i].selected = false;
          }
        }
        this.isBatchModes = e;
      }).bind(this));
    },
    methods: {
      selected(name) {
        if (this.isBatchModes === true) {
          for (let i = 0; i < this.files.length; i++) {
            if (this.files[i].name === name) {
              this.files[i].selected = !this.files[i].selected;
              break;
            }
          }
        }
        for (let i = 0; i < this.files.length; i++) {
          if (this.files[i].name === name) {
            formatAppLog("log", "at components/cloudFileList.vue:144", this.files[i].name, this.files[i].selected);
            break;
          }
        }
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cloudFileListItem = vue.resolveComponent("cloudFileListItem");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "file-list-container" }, [
        vue.createElementVNode("scroll-view", {
          "scroll-y": "true",
          class: "file-scroll-view"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.files, (file, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                vue.createElementVNode("view", {
                  class: vue.normalizeClass({ "file-item-container": file.selected && $data.isBatchModes }),
                  onClick: ($event) => $options.selected(file.name)
                }, [
                  vue.createVNode(_component_cloudFileListItem, {
                    class: "file-item",
                    file
                  }, null, 8, ["file"])
                ], 10, ["onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const cloudFileList = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-6947bb4a"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/components/cloudFileList.vue"]]);
  const _sfc_main$c = {
    data() {
      return {};
    },
    // computed: {
    // 	// 根据搜索文本和当前文件类型筛选文件
    // 	filteredFiles() {
    // 		return this.files.filter(file => {
    // 			// 搜索文本过滤
    // 			const matchSearch = this.searchText === '' ||
    // 				file.name.toLowerCase().includes(this.searchText.toLowerCase());
    // 			// 文件类型过滤
    // 			const matchType = this.currentFile === '文件类型' ||
    // 				this.currentFile === '所有文件' ||
    // 				file.type === this.currentFile;
    // 			return matchSearch && matchType;
    // 		});
    // 	}
    // },
    methods: {},
    components: {
      myNavagationBar,
      mySearchInput,
      spaceUsageDisplay,
      cloudFileList
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myNavagationBar = vue.resolveComponent("myNavagationBar");
    const _component_mySearchInput = vue.resolveComponent("mySearchInput");
    const _component_spaceUsageDisplay = vue.resolveComponent("spaceUsageDisplay");
    const _component_cloudFileList = vue.resolveComponent("cloudFileList");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_myNavagationBar),
      vue.createVNode(_component_mySearchInput),
      vue.createVNode(_component_spaceUsageDisplay),
      vue.createVNode(_component_cloudFileList)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/pages/index/index.vue"]]);
  const _sfc_main$b = {
    props: {
      file: {
        type: Object,
        default: () => []
      },
      checked: {
        type: Boolean,
        default: false
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "file-item" }, [
      $props.checked ? (vue.openBlock(), vue.createElementBlock("checkbox", { key: 0 })) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "file-icon" }, [
        vue.createElementVNode("text", null, "haha")
      ]),
      vue.createCommentVNode(" �ļ���Ϣ "),
      vue.createElementVNode("view", { class: "file-info" }, [
        vue.createElementVNode(
          "text",
          { class: "file-name" },
          vue.toDisplayString($props.file.name) + " " + vue.toDisplayString($props.file.selected) + " " + vue.toDisplayString($props.checked),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "file-datesize" }, [
          vue.createElementVNode(
            "text",
            { class: "file-date" },
            vue.toDisplayString($props.file.date),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { class: "file-size" },
            vue.toDisplayString($props.file.size),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const localFileListItem = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-1262fcc0"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/components/localFileListItem.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        isBatchModes: false,
        files: [
          {
            name: "文件夹1",
            date: "2024-12-01",
            size: "1.22G",
            type: "文件夹",
            selected: false
          },
          {
            name: "文件夹2",
            date: "2024-12-01",
            size: "1.22G",
            type: "文件夹",
            selected: false
          },
          {
            name: "旅行照片",
            date: "2024-11-28",
            size: "5.6M",
            type: "图片",
            selected: false
          },
          {
            name: "工作报告",
            date: "2024-11-25",
            size: "2.3M",
            type: "文档",
            selected: false
          },
          {
            name: "会议视频",
            date: "2024-11-20",
            size: "156M",
            type: "视频",
            selected: false
          },
          {
            name: "语音备忘录",
            date: "2024-11-18",
            size: "3.2M",
            type: "音频",
            selected: false
          },
          {
            name: "项目计划书",
            date: "2024-11-15",
            size: "1.8M",
            type: "文档",
            selected: false
          },
          {
            name: "家庭视频",
            date: "2024-11-10",
            size: "230M",
            type: "视频",
            selected: true
          },
          {
            name: "工作文件夹",
            date: "2024-11-05",
            size: "1.22G",
            type: "文件夹",
            selected: false
          },
          {
            name: "系统备份",
            date: "2024-11-01",
            size: "4.5G",
            type: "文件夹",
            selected: false
          }
        ],
        sortedFiles: []
      };
    },
    components: {
      localFileListItem
    },
    created() {
      this.getFilesList();
      this.sortedFiles = this.files;
      uni.$on("sortedEvent", (function(e) {
        formatAppLog("log", "at components/localFileList.vue:107", "aminoac:   " + e.detail.value);
        if (e.detail.value === 3) {
          this.sortedFiles = [...this.files].sort((b, a) => {
            const sizeA = this.getSizeInMB(a.size);
            const sizeB = this.getSizeInMB(b.size);
            return sizeA - sizeB;
          });
        }
        if (e.detail.value === 4) {
          this.sortedFiles = [...this.files].sort((a, b) => {
            const sizeA = this.getSizeInMB(a.size);
            const sizeB = this.getSizeInMB(b.size);
            return sizeA - sizeB;
          });
        }
      }).bind(this));
      uni.$on("toggleBatchModes", (function(e) {
        formatAppLog("log", "at components/localFileList.vue:125", "监听到事件，携带参数为1：" + e);
        if (this.isBatchModes === true && e === false) {
          const selectedFiles = this.files.filter(function(file) {
            return file.selected;
          });
          for (let i = 0; i < selectedFiles.length; i++) {
            formatAppLog("log", "at components/localFileList.vue:134", selectedFiles[i].name);
          }
          for (let i = 0; i < this.files.length; i++) {
            this.files[i].selected = false;
          }
        }
        this.isBatchModes = e;
      }).bind(this));
    },
    methods: {
      getFilesList() {
        formatAppLog("log", "at components/localFileList.vue:147", "当前环境:", "app");
        uni.getSystemInfo({
          success: (sysInfo) => {
            formatAppLog("log", "at components/localFileList.vue:151", "平台信息:", sysInfo);
            if (sysInfo.platform === "android") {
              formatAppLog("log", "at components/localFileList.vue:154", "检测到 Android 平台");
              if (typeof plus === "undefined") {
                formatAppLog("error", "at components/localFileList.vue:158", "plus 对象未定义，可能不是 App 环境");
                return;
              }
              this.checkAndRequestReadPermission();
            } else if (sysInfo.platform === "ios")
              ;
          },
          fail: (err) => {
            formatAppLog("error", "at components/localFileList.vue:169", "获取系统信息失败", err);
          }
        });
      },
      checkAndRequestReadPermission() {
        try {
          const ContextCompat = plus.android.importClass("androidx.core.content.ContextCompat");
          const ActivityCompat = plus.android.importClass("androidx.core.app.ActivityCompat");
          const Manifest = plus.android.importClass("android.Manifest");
          const mainActivity = plus.android.runtimeMainActivity();
          const hasReadPermission = ContextCompat.checkSelfPermission(
            mainActivity,
            Manifest.permission.READ_EXTERNAL_STORAGE
          ) === plus.android.importClass("android.content.pm.PackageManager").PERMISSION_GRANTED;
          formatAppLog("log", "at components/localFileList.vue:187", "READ_EXTERNAL_STORAGE 权限:", hasReadPermission);
          if (hasReadPermission) {
            formatAppLog("log", "at components/localFileList.vue:190", "权限已获取，继续文件操作");
            this.readPublicDirectory();
          } else {
            formatAppLog("log", "at components/localFileList.vue:193", "请求 READ_EXTERNAL_STORAGE 权限");
            ActivityCompat.requestPermissions(
              mainActivity,
              [Manifest.permission.READ_EXTERNAL_STORAGE],
              1001
            );
          }
        } catch (error) {
          formatAppLog("error", "at components/localFileList.vue:201", "检查/请求权限时出错:", error);
          uni.showToast({
            title: "权限请求失败，请手动授权",
            icon: "none",
            duration: 3e3
          });
        }
      },
      readPublicDirectory() {
        try {
          const Build = plus.android.importClass("android.os.Build");
          const Environment = plus.android.importClass("android.os.Environment");
          const mainActivity = plus.android.runtimeMainActivity();
          let downloadDir = null;
          if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            if (Environment.isExternalStorageManager()) {
              downloadDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
            } else {
              downloadDir = mainActivity.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
            }
          } else {
            downloadDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
          }
          if (downloadDir) {
            const path = plus.android.invoke(downloadDir, "getPath");
            formatAppLog("log", "at components/localFileList.vue:236", "Download 目录路径:", path);
            const File = plus.android.importClass("java.io.File");
            const file = new File(path);
            if (file.exists() && file.isDirectory() && file.canRead()) {
              const files = plus.android.invoke(file, "listFiles");
              formatAppLog("log", "at components/localFileList.vue:244", "目录中共有", files.length, "个文件/文件夹");
              const fileList = [];
              for (let i = 0; i < files.length; i++) {
                const fileItem = files[i];
                const fileName = plus.android.invoke(fileItem, "getName");
                const isDirectory = plus.android.invoke(fileItem, "isDirectory");
                const fileSize = isDirectory ? "文件夹" : this.formatFileSize(plus.android.invoke(fileItem, "length"));
                const lastModified = new Date(plus.android.invoke(fileItem, "lastModified")).toLocaleString();
                fileList.push({
                  name: fileName,
                  isDirectory,
                  size: fileSize,
                  lastModified
                });
              }
              formatAppLog("log", "at components/localFileList.vue:263", "文件列表:", fileList);
              this.fileList = fileList;
              return path;
            } else {
              formatAppLog("log", "at components/localFileList.vue:267", "目录不存在、不可读或不是目录");
              return null;
            }
          } else {
            formatAppLog("log", "at components/localFileList.vue:271", "无法获取 Download 目录");
            return null;
          }
        } catch (error) {
          formatAppLog("error", "at components/localFileList.vue:275", "获取 Download 目录时出错:", error);
          return null;
        }
      },
      selected(name) {
        if (this.isBatchModes === true) {
          for (let i = 0; i < this.files.length; i++) {
            if (this.files[i].name === name) {
              this.files[i].selected = !this.files[i].selected;
              break;
            }
          }
        }
        for (let i = 0; i < this.files.length; i++) {
          if (this.files[i].name === name) {
            formatAppLog("log", "at components/localFileList.vue:292", this.files[i].name, this.files[i].selected);
            break;
          }
        }
      },
      getSizeInMB(sizeStr) {
        const value = parseFloat(sizeStr.slice(0, -1));
        const unit = sizeStr.slice(-1).toUpperCase();
        if (unit === "G") {
          return value * 1024;
        } else if (unit === "M") {
          return value;
        } else {
          return 0;
        }
      },
      handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedFile = file;
          this.fileName = `已选择文件：${file.name}`;
        }
      },
      async uploadFile() {
        if (!this.selectedFile) {
          this.showStatus("请先选择文件", "error");
          return;
        }
        try {
          this.isUploading = true;
          this.uploadButtonText = "上传中...";
          this.statusMessage = "";
          const formData = new FormData();
          formData.append("file", this.selectedFile);
          const response = await fetch("http://localhost:8082/file/upload", {
            method: "POST",
            body: formData
          });
          const result = await response.text();
          if (response.ok) {
            this.showStatus(`上传成功：${result}`, "success");
            this.$refs.fileInput.value = "";
            this.selectedFile = null;
            this.fileName = "";
          } else {
            this.showStatus(`上传失败：${result}`, "error");
          }
        } catch (error) {
          this.showStatus(`请求失败：${error.message}`, "error");
        } finally {
          this.isUploading = false;
          this.uploadButtonText = "开始上传";
        }
      },
      showStatus(message, type) {
        this.statusMessage = message;
        this.statusType = type;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_localFileListItem = vue.resolveComponent("localFileListItem");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "file-list-container" }, [
        vue.createElementVNode("scroll-view", {
          "scroll-y": "true",
          class: "file-scroll-view"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.sortedFiles, (file, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                vue.createElementVNode("view", {
                  class: vue.normalizeClass({ "file-item-container": file.selected && $data.isBatchModes }),
                  onClick: ($event) => $options.selected(file.name)
                }, [
                  vue.createVNode(_component_localFileListItem, {
                    class: "file-item",
                    file,
                    checked: $data.isBatchModes
                  }, null, 8, ["file", "checked"])
                ], 10, ["onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => $options.readPublicDirectory())
          })
        ])
      ])
    ]);
  }
  const localFileList = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-6d6010fe"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/components/localFileList.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {};
    },
    // computed: {
    // 	// 根据搜索文本和当前文件类型筛选文件
    // 	filteredFiles() {
    // 		return this.files.filter(file => {
    // 			// 搜索文本过滤
    // 			const matchSearch = this.searchText === '' ||
    // 				file.name.toLowerCase().includes(this.searchText.toLowerCase());
    // 			// 文件类型过滤
    // 			const matchType = this.currentFile === '文件类型' ||
    // 				this.currentFile === '所有文件' ||
    // 				file.type === this.currentFile;
    // 			return matchSearch && matchType;
    // 		});
    // 	}
    // },
    methods: {},
    components: {
      myNavagationBar,
      mySearchInput,
      spaceUsageDisplay,
      localFileList
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myNavagationBar = vue.resolveComponent("myNavagationBar");
    const _component_mySearchInput = vue.resolveComponent("mySearchInput");
    const _component_spaceUsageDisplay = vue.resolveComponent("spaceUsageDisplay");
    const _component_localFileList = vue.resolveComponent("localFileList");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_myNavagationBar),
      vue.createVNode(_component_mySearchInput),
      vue.createVNode(_component_spaceUsageDisplay),
      vue.createVNode(_component_localFileList)
    ]);
  }
  const PagesLocalLocal = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/pages/local/local.vue"]]);
  const _imports_0 = "/static/register2.png";
  const _sfc_main$8 = {
    data() {
      return {
        phone: "",
        email: "",
        verificationCode: "",
        password: "",
        confirmPassword: ""
      };
    },
    methods: {
      // 获取验证码
      getVerificationCode() {
        if (!this.email) {
          uni.showToast({
            title: "请输入邮箱",
            icon: "none"
          });
          return;
        }
        uni.showToast({
          title: "验证码已发送至邮箱",
          icon: "success"
        });
      },
      // 注册事件
      handleRegister() {
        const phoneRegex = /^1[3-9]\d{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
        if (!phoneRegex.test(this.phone)) {
          uni.showToast({
            title: "请输入正确的手机号",
            icon: "none"
          });
          return;
        }
        if (!emailRegex.test(this.email)) {
          uni.showToast({
            title: "请输入正确的邮箱",
            icon: "none"
          });
          return;
        }
        if (!this.verificationCode) {
          uni.showToast({
            title: "请输入验证码",
            icon: "none"
          });
          return;
        }
        if (this.password !== this.confirmPassword) {
          uni.showToast({
            title: "两次输入的密码不一致",
            icon: "none"
          });
          return;
        }
        if (!passwordRegex.test(this.password)) {
          uni.showToast({
            title: "密码必须包含字母和数字，且长度大于10位",
            icon: "none"
          });
          return;
        }
        uni.showToast({
          title: "注册成功",
          icon: "success"
        });
        this.phone = "";
        this.email = "";
        this.verificationCode = "";
        this.password = "";
        this.confirmPassword = "";
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0,
        mode: "scaleToFill"
      }),
      vue.createElementVNode("view", { class: "login-container" }, [
        vue.createElementVNode("view", { class: "login-title" }, "注册"),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createVNode(_component_uni_icons, {
            type: "phone",
            size: "60rpx",
            color: "#6966AD"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.phone = $event),
              class: "login-input",
              placeholder: "请输入你的手机号"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.phone]
          ])
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createVNode(_component_uni_icons, {
            type: "email",
            size: "60rpx",
            color: "#6966AD"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.email = $event),
              class: "login-input",
              placeholder: "请输入你的邮箱"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.email]
          ])
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createVNode(_component_uni_icons, {
            type: "auth",
            size: "60rpx",
            color: "#6966AD"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.verificationCode = $event),
              class: "Verification-input",
              placeholder: "请输入验证码"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.verificationCode]
          ]),
          vue.createElementVNode("button", {
            class: "Verification-button",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.getVerificationCode && $options.getVerificationCode(...args))
          }, "获取")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createVNode(_component_uni_icons, {
            type: "locked",
            size: "60rpx",
            color: "#6966AD"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.password = $event),
              type: "password",
              class: "login-input",
              placeholder: "请输入密码"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.password]
          ])
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createVNode(_component_uni_icons, {
            type: "locked-filled",
            size: "60rpx",
            color: "#6966AD"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.confirmPassword = $event),
              type: "password",
              class: "login-input",
              placeholder: "再次输入以确认密码"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.confirmPassword]
          ])
        ]),
        vue.createElementVNode("view", { class: "to-login" }, [
          vue.createElementVNode("text", { class: "rn-text" }, "已有账号？"),
          vue.createElementVNode("text", { class: "r-text" }, " 点此登录")
        ]),
        vue.createElementVNode("button", {
          class: "login-button",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.handleRegister && $options.handleRegister(...args))
        }, "注册")
      ])
    ]);
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/pages/Register/Register.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        remeberOrNot: false,
        account: "",
        password: ""
      };
    },
    methods: {
      goApLogin() {
        uni.navigateTo({
          url: "/pages/Login/apLogin"
        });
      },
      goRegister() {
        uni.navigateTo({
          url: "/pages/Register/Register"
        });
      },
      // 获取验证码
      async getVerification() {
        const account = this.account.trim();
        if (!account) {
          uni.showToast({
            title: "请输入邮箱",
            icon: "none"
          });
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(account)) {
          uni.showToast({
            title: "请输入有效的邮箱地址",
            icon: "none"
          });
          return;
        }
        try {
          const res = await uni.request({
            url: "https://274c7adb.r21.cpolar.top/verification/send",
            method: "POST",
            data: {
              email: account
            },
            // 传递邮箱
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
              // 表单格式
            }
          });
          if (res.data === "验证码发送成功。") {
            uni.showToast({
              title: "验证码已发送",
              icon: "success"
            });
          } else {
            uni.showToast({
              title: res.data,
              icon: "none"
            });
          }
        } catch (error) {
          uni.showToast({
            title: "发送失败，请重试",
            icon: "none"
          });
          formatAppLog("error", "at pages/Login/vcLogin.vue:103", "发送验证码错误:", error);
        }
      },
      // 验证验证码并登录
      async checkVerification() {
        const account = this.account.trim();
        const code = this.password.trim();
        if (!account || !code) {
          uni.showToast({
            title: "请输入邮箱和验证码",
            icon: "none"
          });
          return;
        }
        try {
          const res = await uni.request({
            url: "https://274c7adb.r21.cpolar.top/verification/verify",
            method: "POST",
            data: {
              email: account,
              code
            },
            // 传递邮箱和验证码
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          if (res.data === "验证码验证成功。") {
            uni.showToast({
              title: "登录成功",
              icon: "success"
            });
            uni.setStorageSync("isLoggedIn", true);
            uni.reLaunch({
              url: "/pages/index/index"
            });
          } else {
            uni.showToast({
              title: res.data,
              icon: "none"
            });
          }
        } catch (error) {
          uni.showToast({
            title: "验证失败，请重试",
            icon: "none"
          });
          formatAppLog("error", "at pages/Login/vcLogin.vue:154", "验证码验证错误:", error);
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "login-container" }, [
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0$1,
        mode: "heightFix"
      }),
      vue.createElementVNode("view", { class: "login-box" }, [
        vue.createElementVNode("view", { class: "login-textbox" }, [
          vue.createElementVNode("text", { class: "login-title" }, "登录"),
          vue.createElementVNode("text", {
            class: "y-text",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.goApLogin())
          }, "账号密码登录")
        ]),
        vue.createElementVNode("view", { class: "input-groups" }, [
          vue.createElementVNode("view", { class: "input-group" }, [
            vue.createVNode(_component_uni_icons, {
              type: "person",
              size: "60rpx",
              color: "#6966AD"
            }),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "login-input",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.account = $event),
                placeholder: "手机号/邮箱"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.account]
            ])
          ]),
          vue.createElementVNode("view", { class: "input-group" }, [
            vue.createVNode(_component_uni_icons, {
              type: "locked",
              size: "60rpx",
              color: "#6966AD"
            }),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "login-input",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.password = $event),
                placeholder: "验证码"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.password]
            ]),
            vue.createElementVNode("button", {
              class: "Verification-button",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.getVerification())
            }, "获取")
          ]),
          vue.createElementVNode("button", {
            class: "login-button",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.checkVerification())
          }, "登录"),
          vue.createElementVNode("view", { class: "to-register" }, [
            vue.createElementVNode("text", { class: "rn-text" }, "没有账号？"),
            vue.createElementVNode("text", {
              class: "r-text",
              onClick: _cache[5] || (_cache[5] = ($event) => $options.goRegister())
            }, " 点此注册")
          ])
        ])
      ])
    ]);
  }
  const PagesLoginVcLogin = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/pages/Login/vcLogin.vue"]]);
  var wvCurrent;
  var currentWebview;
  var wb;
  const _sfc_main$6 = {
    name: "ss-upload",
    props: {
      isUploadServer: {
        //上传成功之后是否直接上传服务器；设置为true时必传uploadOptions
        type: Boolean,
        default: false
      },
      uploadOptions: {
        //上传服务器相关信息
        type: Object,
        default: () => {
          return {
            // 上传服务器地址，此地址需要替换为你的接口地址
            url: "",
            //请求方式，get,post
            type: "post",
            // 上传附件的key
            name: "file",
            // 根据你接口需求自定义请求头
            header: {
              // 'token':'',
            },
            // 根据你接口需求自定义body参数
            formData: {
              // key:'1'
            }
          };
        }
      },
      webviewStyle: {
        //原生子窗体样式
        type: Object,
        default: () => {
          return {
            height: "50px",
            width: "130px",
            position: "static",
            background: "transparent",
            top: "50px",
            left: "24px"
          };
        }
      },
      fileInput: {
        //webview内部上传input样式与内容
        type: Object,
        default: () => {
          return {
            fileStyle: {
              borderRadius: "10px",
              backgroundColor: "#1975F7",
              color: "#fff",
              fontSize: "20px"
            },
            fileTitle: "上传附件"
          };
        }
      },
      width: {
        type: String,
        default: "130px"
      },
      height: {
        type: String,
        default: "70px"
      }
    },
    data() {
      return {
        isShow: false
      };
    },
    //组件更新后触发
    updated() {
      formatAppLog("log", "at uni_modules/ss-upload/components/ss-upload/ss-upload.vue:84", 123);
      this.show();
    },
    mounted() {
      let that = this;
      that.show();
      plus.globalEvent.addEventListener("plusMessage", function(msg) {
        formatAppLog("log", "at uni_modules/ss-upload/components/ss-upload/ss-upload.vue:93", msg.data.args.data.arg);
        let data = msg.data.args.data.arg;
        if (data && data.filePath) {
          let result = data.filePath;
          that.$emit("getFile", result);
        }
        if (data && data.files) {
          let result = [JSON.parse(data.files)];
          that.$emit("uploadSuccess", result);
        }
      });
    },
    methods: {
      show() {
        let that = this;
        that.isShow = true;
        var pages = getCurrentPages();
        var page = pages[pages.length - 1];
        currentWebview = page.$getAppWebview();
        that.getDomStyles((styles) => {
          formatAppLog("log", "at uni_modules/ss-upload/components/ss-upload/ss-upload.vue:117", 666895, styles);
          wb = plus.webview.create(`/uni_modules/ss-upload/hybrid/html/file.html`, "", {
            ...styles,
            position: "static",
            background: "transparent"
          });
          currentWebview.append(wb);
          setTimeout(() => {
            wvCurrent = currentWebview.children()[0];
            wvCurrent.evalJS(`passInfo(${JSON.stringify(that.uploadOptions)})`);
          }, 500);
        });
      },
      hide() {
        wb.close();
      },
      getDomStyles(callback) {
        let view = uni.createSelectorQuery().in(this).select(".fileBox");
        view.fields(
          {
            size: true,
            rect: true
          },
          ({
            height,
            width,
            top,
            left,
            right,
            bottom
          }) => {
            uni.createSelectorQuery().selectViewport().scrollOffset(({
              scrollTop
            }) => {
              return callback({
                top: parseInt(top) + parseInt(scrollTop) + "px",
                left: parseInt(left) + "px",
                width: parseInt(width) + "px",
                height: parseInt(height) + "px"
              });
            }).exec();
          }
        ).exec();
      },
      uploadFile() {
      },
      async getUpload(fileList) {
        let that = this;
        let result = await Promise.all(
          fileList.map((item) => {
            formatAppLog("log", "at uni_modules/ss-upload/components/ss-upload/ss-upload.vue:226", "item", item);
            return new Promise((reslove, reject) => {
              uni.uploadFile({
                url: that.uploadOptions.url,
                filePath: item.path ? item.path : item,
                name: that.uploadOptions.name,
                header: that.uploadOptions.header,
                formData: that.uploadOptions.formData,
                complete: (uploadFileRes) => {
                  let data = JSON.parse(uploadFileRes.data);
                  reslove(data);
                }
              });
            });
          })
        );
        formatAppLog("log", "at uni_modules/ss-upload/components/ss-upload/ss-upload.vue:245", "服务器返回结果", result);
        this.$emit("uploadSuccess", result);
      }
    },
    watch: {
      uploadOptions: {
        deep: true,
        handler: function(value) {
          if (this.isUploadServer) {
            setTimeout(() => {
              wvCurrent.evalJS(`passInfo(${JSON.stringify(value)})`);
            }, 2e3);
          }
        }
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "box" }, [
      vue.createElementVNode(
        "view",
        {
          class: "fileBox",
          style: vue.normalizeStyle({ width: $props.width, height: $props.height })
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-4fcdf4c4"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/uni_modules/ss-upload/components/ss-upload/ss-upload.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        message: "",
        fileLists: null,
        files: [],
        filesApp: "",
        isUploadServer: true,
        uploadOptions: {
          // 上传服务器地址，此地址需要替换为你的接口地址
          url: "https://121.41.70.8:8082/file/upload",
          //仅为示例，非真实的接口地址,
          //请求方式，get,post
          type: "post",
          // 上传附件的key
          name: "file",
          // 根据你接口需求自定义请求头
          header: {
            "token": "123456"
          },
          // 根据你接口需求自定义body参数
          formData: {
            userId: getApp().globalData.userInfo.id
          }
        },
        webviewStyle: {
          height: "50px",
          width: "130px",
          position: "static",
          background: "transparent",
          top: "50px",
          left: "24px"
        },
        fileInput: {
          //设置app端html里面input样式与内容
          fileStyle: {
            borderRadius: "10px",
            backgroundColor: "#1975F7",
            color: "#fff",
            fontSize: "20px"
          },
          fileTitle: "上传附件"
        },
        result: ""
      };
    },
    methods: {
      goHistory() {
        uni.navigateTo({
          url: "/pages/ShareHistory/ShareHistory"
        });
      },
      goChangePass() {
        uni.navigateTo({
          url: "/pages/ChangePass/ChangePass"
        });
      },
      testConnection() {
        const app = getApp();
        formatAppLog("log", "at pages/My/My.vue:78", app.globalData.userInfo.id);
        uni.request({
          url: "https://121.41.70.8:8082/getAllUserInfo/getAllUserInfo",
          method: "GET",
          header: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          success: (res) => {
            this.message = `连接成功，后端返回状态码：${res.statusCode}`;
          },
          fail: (err) => {
            if (err.errMsg.includes("request:fail")) {
              this.message = err.errMsg + " " + err.statusCode;
            } else {
              this.message = `连接失败，错误信息：${err.errMsg}`;
            }
          }
        });
      },
      scrolltolower() {
        formatAppLog("log", "at pages/My/My.vue:99", 145623);
        this.$refs.ssUpload.hide();
        setTimeout(() => {
          this.$refs.ssUpload.show();
        });
      },
      uploadFile() {
      },
      //获取文件
      getFile(result) {
        formatAppLog("log", "at pages/My/My.vue:114", "结果结果结果", result);
        this.filesApp = result;
      },
      uploadSuccess(result) {
        formatAppLog("log", "at pages/My/My.vue:123", "上传服务器后端返回结果", result);
        this.result = JSON.stringify(result);
        uni.showModal({
          title: "建议",
          content: "这是一个模态弹窗",
          success: function(res) {
            if (res.confirm) {
              formatAppLog("log", "at pages/My/My.vue:130", "用户点击确定");
            } else if (res.cancel) {
              formatAppLog("log", "at pages/My/My.vue:132", "用户点击取消");
            }
          }
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ss_upload = resolveEasycom(vue.resolveDynamicComponent("ss-upload"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "containerall" }, [
      vue.createElementVNode("view", { class: "containerone" }, [
        vue.createElementVNode("text", null, "aaa"),
        vue.createElementVNode("text", null, "@")
      ]),
      vue.createElementVNode("view", { class: "containertwo" }, [
        vue.createElementVNode("text", {
          onClick: _cache[0] || (_cache[0] = ($event) => $options.goHistory())
        }, "历史"),
        vue.createElementVNode("text", {
          onClick: _cache[1] || (_cache[1] = ($event) => $options.goChangePass())
        }, "修改"),
        vue.createElementVNode("text", null, " 3")
      ]),
      vue.createElementVNode("button", {
        class: "btn-1",
        onClick: _cache[2] || (_cache[2] = ($event) => $options.testConnection())
      }, " 透出"),
      $data.message ? (vue.openBlock(), vue.createElementBlock(
        "view",
        { key: 0 },
        vue.toDisplayString($data.message),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_ss_upload, {
        ref: "ssUpload",
        width: "260rpx",
        height: "100rpx",
        onGetFile: $options.getFile,
        onUploadSuccess: $options.uploadSuccess,
        uploadOptions: $data.uploadOptions,
        isUploadServer: $data.isUploadServer,
        webviewStyle: $data.webviewStyle,
        fileInput: $data.fileInput
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "button",
            {
              class: "btn",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.uploadFile && $options.uploadFile(...args))
            },
            vue.toDisplayString($data.fileInput.fileTitle),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onGetFile", "onUploadSuccess", "uploadOptions", "isUploadServer", "webviewStyle", "fileInput"])
    ]);
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/pages/My/My.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        phone: "",
        email: "",
        verificationCode: "",
        password: "",
        confirmPassword: ""
      };
    },
    methods: {
      // 获取验证码
      getVerificationCode() {
        if (!this.email) {
          uni.showToast({
            title: "请输入邮箱",
            icon: "none"
          });
          return;
        }
        uni.showToast({
          title: "验证码已发送至邮箱",
          icon: "success"
        });
      },
      // 注册事件
      handleRegister() {
        const phoneRegex = /^1[3-9]\d{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
        if (!phoneRegex.test(this.phone)) {
          uni.showToast({
            title: "请输入正确的手机号",
            icon: "none"
          });
          return;
        }
        if (!emailRegex.test(this.email)) {
          uni.showToast({
            title: "请输入正确的邮箱",
            icon: "none"
          });
          return;
        }
        if (!this.verificationCode) {
          uni.showToast({
            title: "请输入验证码",
            icon: "none"
          });
          return;
        }
        if (this.password !== this.confirmPassword) {
          uni.showToast({
            title: "两次输入的密码不一致",
            icon: "none"
          });
          return;
        }
        if (!passwordRegex.test(this.password)) {
          uni.showToast({
            title: "密码必须包含字母和数字，且长度大于10位",
            icon: "none"
          });
          return;
        }
        uni.showToast({
          title: "注册成功",
          icon: "success"
        });
        this.phone = "";
        this.email = "";
        this.verificationCode = "";
        this.password = "";
        this.confirmPassword = "";
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        class: "background-image",
        src: _imports_0,
        mode: "scaleToFill"
      }),
      vue.createElementVNode("view", { class: "login-container" }, [
        vue.createElementVNode("view", { class: "login-title" }, "修改密码"),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createVNode(_component_uni_icons, {
            type: "email",
            size: "60rpx",
            color: "#6966AD"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.email = $event),
              class: "login-input",
              placeholder: "请输入你注册的邮箱"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.email]
          ])
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createVNode(_component_uni_icons, {
            type: "auth",
            size: "60rpx",
            color: "#6966AD"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.verificationCode = $event),
              class: "Verification-input",
              placeholder: "请输入验证码"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.verificationCode]
          ]),
          vue.createElementVNode("button", {
            class: "Verification-button",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.getVerificationCode && $options.getVerificationCode(...args))
          }, "获取")
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createVNode(_component_uni_icons, {
            type: "locked",
            size: "60rpx",
            color: "#6966AD"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.password = $event),
              type: "password",
              class: "login-input",
              placeholder: "请输入新密码"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.password]
          ])
        ]),
        vue.createElementVNode("view", { class: "input-group" }, [
          vue.createVNode(_component_uni_icons, {
            type: "locked-filled",
            size: "60rpx",
            color: "#6966AD"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.confirmPassword = $event),
              type: "password",
              class: "login-input",
              placeholder: "再次输入以确认密码"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.confirmPassword]
          ])
        ]),
        vue.createElementVNode("button", {
          class: "login-button",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.handleRegister && $options.handleRegister(...args))
        }, "确认")
      ])
    ]);
  }
  const PagesChangePassChangePass = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/pages/ChangePass/ChangePass.vue"]]);
  const _sfc_main$3 = {
    props: ["file"]
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "file-item" }, [
      vue.createElementVNode("view", { class: "file-icon" }, [
        vue.createElementVNode("text", null, "馃搫")
      ]),
      vue.createCommentVNode(" 鏂囦欢淇℃伅 "),
      vue.createElementVNode("view", { class: "file-info" }, [
        vue.createElementVNode(
          "text",
          { class: "file-name" },
          vue.toDisplayString($props.file.name),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "file-datesize" }, [
          vue.createElementVNode(
            "text",
            { class: "file-date" },
            vue.toDisplayString($props.file.date),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { class: "file-size" },
            vue.toDisplayString($props.file.size),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const historyListItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-772c61ba"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/components/historyListItem.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        // 示例文件数据
        files: [
          {
            name: "文件夹1",
            date: "2024-12-01",
            size: "1.22G",
            type: "文件夹",
            selected: false
          },
          {
            name: "文件夹2",
            date: "2024-12-01",
            size: "1.22G",
            type: "文件夹",
            selected: false
          },
          {
            name: "旅行照片",
            date: "2024-11-28",
            size: "5.6M",
            type: "图片",
            selected: false
          },
          {
            name: "工作报告",
            date: "2024-11-25",
            size: "2.3M",
            type: "文档",
            selected: false
          },
          {
            name: "会议视频",
            date: "2024-11-20",
            size: "156M",
            type: "视频",
            selected: false
          },
          {
            name: "语音备忘录",
            date: "2024-11-18",
            size: "3.2M",
            type: "音频",
            selected: false
          },
          {
            name: "项目计划书",
            date: "2024-11-15",
            size: "1.8M",
            type: "文档",
            selected: false
          },
          {
            name: "家庭视频",
            date: "2024-11-10",
            size: "230M",
            type: "视频",
            selected: false
          },
          {
            name: "工作文件夹",
            date: "2024-11-05",
            size: "1.22G",
            type: "文件夹",
            selected: false
          },
          {
            name: "系统备份",
            date: "2024-11-01",
            size: "4.5G",
            type: "文件夹",
            selected: false
          }
        ]
      };
    },
    components: {
      historyListItem
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_historyListItem = vue.resolveComponent("historyListItem");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "file-list-container" }, [
        vue.createElementVNode("scroll-view", {
          "scroll-y": "true",
          class: "file-scroll-view"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.files, (file, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                vue.createVNode(_component_historyListItem, { file }, null, 8, ["file"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const historyListUvue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-d25b2513"], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/components/historyList.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {},
    components: {
      mySearchInput,
      historyListUvue
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_mySearchInput = vue.resolveComponent("mySearchInput");
    const _component_historyListUvue = vue.resolveComponent("historyListUvue");
    return vue.openBlock(), vue.createElementBlock("scroll-view", { style: { "flex": "1" } }, [
      vue.createElementVNode("view", { style: { "background-color": "#8D8DC1" } }, [
        vue.createVNode(_component_mySearchInput, { style: {} }),
        vue.createVNode(_component_historyListUvue)
      ])
    ]);
  }
  const PagesShareHistoryShareHistory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/pages/ShareHistory/ShareHistory.vue"]]);
  __definePage("pages/Login/apLogin", PagesLoginApLogin);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/local/local", PagesLocalLocal);
  __definePage("pages/Register/Register", PagesRegisterRegister);
  __definePage("pages/Login/vcLogin", PagesLoginVcLogin);
  __definePage("pages/My/My", PagesMyMy);
  __definePage("pages/ChangePass/ChangePass", PagesChangePassChangePass);
  __definePage("pages/ShareHistory/ShareHistory", PagesShareHistoryShareHistory);
  const _sfc_main = {
    globalData: {
      userInfo: null
    },
    onLaunch: function() {
      formatAppLog("log", "at App.vue:7", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:10", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:13", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/xiaochengxu/xiangmu1/xiangmu111/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
