import * as vn from "vue";
import { createElementBlock as L, openBlock as D, createElementVNode as M, mergeModels as Ie, useModel as st, watch as Me, createCommentVNode as G, createTextVNode as je, toDisplayString as Q, withDirectives as Ce, normalizeClass as pe, vModelText as Vt, createVNode as X, unref as te, renderSlot as Ee, Fragment as se, renderList as Ae, ref as F, onMounted as he, withKeys as Js, nextTick as Le, computed as j, watchEffect as ge, cloneVNode as fa, h as oe, defineComponent as ae, provide as fe, inject as ve, onUnmounted as Se, shallowRef as Cn, getCurrentInstance as ha, Teleport as ur, reactive as xn, withCtx as be, createBlock as me, resolveDynamicComponent as un, vModelCheckbox as Lo, vModelRadio as Qs, vModelSelect as Ro, vShow as it, withModifiers as yt, TransitionGroup as el, Transition as cr, isProxy as tl, mergeProps as pa, resolveComponent as Bt, onBeforeUnmount as Io } from "vue";
function Va(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
function nl(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
    })
  ]);
}
function hn(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function rl(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    }),
    M("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
const al = ["data-test"], ol = {
  key: 0,
  class: "tc-text-red-500"
}, il = { class: "tc-relative tc-mt-2 tc-rounded-md tc-shadow-sm" }, sl = ["data-test", "disabled", "max", "min", "placeholder", "readonly", "step"], ll = { class: "tc-mt-2 tc-text-sm tc-text-gray-500 dark:tc-text-gray-400" }, ul = { class: "tc-mt-2 tc-text-sm tc-text-green-600 dark:tc-text-green-400" }, cl = {
  key: 1,
  class: "block tc-mb-2"
}, dl = ["data-test"], hg = {
  __name: "InputNumber",
  props: /* @__PURE__ */ Ie({
    label: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    showError: {
      type: Boolean,
      default: !0
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    dataTest: {
      type: String,
      required: !0
    }
  }, {
    modelValue: { required: !1, default: null, type: Number },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = st(e, "modelValue"), t = n, i = () => {
      t("update:modelValue", r.value);
    };
    return Me(r, i), (a, o) => {
      var s, l, c, d, f, u;
      return D(), L("div", null, [
        e.label ? (D(), L("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          class: "tc-block tc-mb-2 tc-text-base tc-font-medium tc-text-gray-900 dark:tc-text-white",
          for: "number-input"
        }, [
          je(Q(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (D(), L("span", ol, "*")) : G("", !0)
        ], 8, al)) : G("", !0),
        M("div", il, [
          Ce(M("input", {
            id: "number-input",
            "onUpdate:modelValue": o[0] || (o[0] = (h) => r.value = h),
            class: pe(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
              "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
              "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((c = e.v) != null && c.$invalid),
              disabled: e.disabled
            }]),
            "data-test": e.dataTest + "-input",
            disabled: e.disabled,
            max: e.max,
            min: e.min,
            placeholder: e.placeholder,
            readonly: e.readonly,
            step: e.step,
            "aria-describedby": "helper-text-explanation",
            type: "number",
            onInput: i
          }, null, 42, sl), [
            [Vt, r.value]
          ]),
          (d = e.v) != null && d.$invalid ? (D(), L("div", {
            key: 0,
            class: pe(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
          }, [
            X(te(hn), { class: "tc-size-5 tc-text-red-500" })
          ], 2)) : G("", !0)
        ]),
        M("p", ll, [
          Ee(a.$slots, "info")
        ]),
        M("p", ul, [
          Ee(a.$slots, "success")
        ]),
        e.showError && ((f = e.v) != null && f.$invalid) ? (D(), L("span", cl, [
          (D(!0), L(se, null, Ae((u = e.v) == null ? void 0 : u.$silentErrors, (h, p) => (D(), L("p", {
            key: p,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-email-error" + h.$uid,
              class: "tc-font-medium"
            }, Q(h.$message), 9, dl)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}, fl = { class: "tc-relative" }, hl = ["data-test"], pl = {
  key: 0,
  class: "tc-text-red-500"
}, vl = { class: "tc-relative tc-rounded-md tc-shadow-sm" }, ml = ["data-test", "disabled", "maxlength", "placeholder", "readonly"], gl = { class: "tc-mt-2 tc-text-sm tc-text-gray-500 dark:tc-text-gray-400" }, yl = { class: "tc-mt-2 tc-text-sm tc-text-green-600 dark:tc-text-green-400" }, bl = {
  key: 2,
  class: "block tc-mb-2"
}, wl = ["data-test"], pg = {
  __name: "InputEmail",
  props: /* @__PURE__ */ Ie({
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "you@example.com"
    },
    maxLength: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    showError: {
      type: Boolean,
      default: !0
    },
    v: {
      type: Object,
      default: () => null
    },
    dataTest: {
      type: String,
      required: !0
    }
  }, {
    modelValue: { type: String, required: !1, default: null },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = st(e, "modelValue"), t = n, i = () => {
      t("update:modelValue", r.value);
    };
    return Me(r, i), (a, o) => {
      var s, l, c, d, f, u;
      return D(), L("div", fl, [
        e.label ? (D(), L("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          class: "tc-block tc-mb-2 tc-text-sm tc-font-medium tc-text-gray-900 dark:tc-text-white",
          for: "number-input"
        }, [
          je(Q(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (D(), L("span", pl, "*")) : G("", !0)
        ], 8, hl)) : G("", !0),
        M("div", vl, [
          Ce(M("input", {
            id: "email-input",
            "onUpdate:modelValue": o[0] || (o[0] = (h) => r.value = h),
            class: pe(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
              "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
              "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((c = e.v) != null && c.$invalid),
              disabled: e.disabled
            }]),
            "data-test": e.dataTest + "-input",
            disabled: e.disabled,
            maxlength: e.maxLength,
            placeholder: e.placeholder,
            readonly: e.readonly,
            "aria-describedby": "helper-text-explanation",
            type: "email",
            onChange: i
          }, null, 42, ml), [
            [Vt, r.value]
          ])
        ]),
        (d = e.v) != null && d.$invalid ? (D(), L("div", {
          key: 1,
          class: pe(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
        }, [
          X(te(hn), { class: "tc-size-5 tc-text-red-500" })
        ], 2)) : G("", !0),
        M("p", gl, [
          Ee(a.$slots, "info")
        ]),
        M("p", yl, [
          Ee(a.$slots, "success")
        ]),
        e.showError && ((f = e.v) != null && f.$invalid) ? (D(), L("span", bl, [
          (D(!0), L(se, null, Ae((u = e.v) == null ? void 0 : u.$silentErrors, (h, p) => (D(), L("p", {
            key: p,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-email-error" + h.$uid,
              class: "tc-font-medium"
            }, Q(h.$message), 9, wl)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}, xl = { class: "relative" }, $l = ["placeholder"], kl = ["disabled", "readonly", "placeholder"], Sl = {
  key: 3,
  class: "block tc-mb-2"
}, Ml = ["data-test"], vg = {
  __name: "InputPhoneNumber",
  props: /* @__PURE__ */ Ie({
    placeholder: {
      type: String,
      default: "starts with 09"
    },
    title: {
      type: String,
      default: "Mobile Number"
    },
    dataTest: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    v: {
      type: Object,
      default: () => null
    },
    showError: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: { type: String, required: !1, default: null },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["error", "close", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = /(\w)(\w{3})(\w{3})(\w{4})/, t = F(), i = st(e, "modelValue"), a = F(), o = F(!1), s = e, l = n, c = F(""), d = F(!1), f = ($) => {
      const S = $.key;
      if (/^\d+$/.test(S) === !1)
        $.preventDefault();
      else
        return !0;
    }, u = ($) => `${$}`.replace(/\D/g, "").substring(0, 12), h = ($) => u($).substring(0, 11).padEnd(11, "").replace(r, "$1$2-$3-$4"), p = () => {
      const $ = u(a.value).replace(/^63/, "0");
      c.value = h($);
    }, m = () => {
      o.value = !0, Le(() => {
        t.value.focus();
      });
    }, v = () => {
      const $ = u(a.value).replace(/^63/, "0");
      c.value = h($), o.value = !1, l("close");
    };
    Me(i, () => {
      a.value = i.value, p();
    });
    const g = ($) => {
      const S = u($).substring(0, 11);
      return S.startsWith("0") ? S.replace(r, "+63 ($2) $3 $4") : S.replace(r, "$1 ($2) $3 $4");
    }, b = ($) => !$ || `${$}`.localeCompare(s.placeholder) === 0, k = ($, S = null, w = null, x = null) => {
      if (S) {
        let I = b($) ? 0 : S.selectionStart;
        I >= 11 && (I = 13), !d.value && (I === 4 || I === 8) && ++I, b($) ? window.setTimeout(() => {
          P(S, I);
        }, 0) : Le(() => {
          P(S, I);
        });
      }
      if (w && x) {
        this[w] = g($), this[x] = h($), l("update:modelValue", this[w]);
        return;
      }
      a.value = g($), c.value = h($), l("update:modelValue", a.value);
    }, P = ($, S) => {
      $.setSelectionRange && ($.focus(), $.setSelectionRange(S, S, "forward"));
    };
    return he(() => {
      p();
    }), ($, S) => {
      var w, x, I, O, C, Z, Y;
      return D(), L("div", xl, [
        o.value ? Ce((D(), L("input", {
          key: 0,
          ref_key: "editableField",
          ref: t,
          "onUpdate:modelValue": S[0] || (S[0] = (y) => c.value = y),
          placeholder: e.placeholder,
          "aria-describedby": "PhoneNumberHelp",
          class: pe(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
            "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (w = e.v) == null ? void 0 : w.$invalid,
            "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((x = e.v) != null && x.$invalid),
            disabled: e.disabled
          }]),
          "data-private": "",
          name: "phone",
          type: "tel",
          onBlur: v,
          onInput: S[1] || (S[1] = (y) => k(y.target.value, $.$refs.phoneRef)),
          onKeypress: S[2] || (S[2] = (y) => f(y)),
          onKeyup: Js(v, ["enter"])
        }, null, 42, $l)), [
          [Vt, c.value]
        ]) : G("", !0),
        o.value ? G("", !0) : Ce((D(), L("input", {
          key: 1,
          "onUpdate:modelValue": S[3] || (S[3] = (y) => a.value = y),
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          "aria-describedby": "PhoneNumberHelp",
          class: pe(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
            "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (I = e.v) == null ? void 0 : I.$invalid,
            "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((O = e.v) != null && O.$invalid),
            disabled: e.disabled
          }]),
          "data-private": "",
          name: "phone",
          type: "tel",
          onFocus: m
        }, null, 42, kl)), [
          [Vt, a.value]
        ]),
        (C = e.v) != null && C.$invalid ? (D(), L("div", {
          key: 2,
          class: pe(`tc-absolute tc-right-2 ${$.label ? "tc-top-9" : "tc-top-2"}`)
        }, [
          X(te(hn), { class: "tc-size-5 tc-text-red-500" })
        ], 2)) : G("", !0),
        e.showError && ((Z = e.v) != null && Z.$invalid) ? (D(), L("span", Sl, [
          (D(!0), L(se, null, Ae((Y = e.v) == null ? void 0 : Y.$silentErrors, (y, A) => (D(), L("span", {
            key: A,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-email-error" + (y == null ? void 0 : y.$uid),
              class: "tc-font-medium"
            }, Q(y == null ? void 0 : y.$message), 9, Ml)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}, Dl = { class: "tc-relative" }, El = ["data-test", "for"], Al = {
  key: 0,
  class: "tc-text-red-500"
}, Tl = ["id", "disabled", "data-test", "placeholder", "maxlength", "readonly"], Pl = {
  key: 2,
  class: "block tc-mb-2"
}, Ol = ["data-test"], Cl = {
  __name: "InputText",
  props: /* @__PURE__ */ Ie({
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    showError: {
      type: Boolean,
      default: !0
    },
    maxLength: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    v: {
      type: Object,
      default: () => null
    },
    dataTest: {
      type: String,
      required: !0
    }
  }, {
    modelValue: { type: String, default: null, required: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = st(e, "modelValue"), t = n;
    return Me(r, () => {
      r.value === "" && (r.value = null), t("update:modelValue", r.value);
    }), (a, o) => {
      var s, l, c, d, f, u;
      return D(), L("div", Dl, [
        e.label ? (D(), L("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          for: e.dataTest,
          class: "tc-block tc-mb-2 tc-text-base tc-font-medium tc-text-gray-900"
        }, [
          je(Q(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (D(), L("span", Al, "*")) : G("", !0)
        ], 8, El)) : G("", !0),
        Ce(M("input", {
          id: e.dataTest,
          "onUpdate:modelValue": o[0] || (o[0] = (h) => r.value = h),
          disabled: e.disabled,
          class: pe(["tc-text-base tc-block tc-w-full tc-rounded-md tc-border-0 tc-p-2 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
            "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
            "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((c = e.v) != null && c.$invalid),
            disabled: e.disabled
          }]),
          "data-test": e.dataTest + "-input",
          placeholder: e.placeholder,
          maxlength: e.maxLength || null,
          readonly: e.readonly,
          type: "text"
        }, null, 10, Tl), [
          [Vt, r.value]
        ]),
        (d = e.v) != null && d.$invalid ? (D(), L("div", {
          key: 1,
          class: pe(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
        }, [
          X(te(hn), { class: "tc-size-5 tc-text-red-500" })
        ], 2)) : G("", !0),
        e.showError && ((f = e.v) != null && f.$invalid) ? (D(), L("span", Pl, [
          (D(!0), L(se, null, Ae((u = e.v) == null ? void 0 : u.$silentErrors, (h, p) => (D(), L("span", {
            key: p,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-error" + h.$uid,
              class: "tc-font-medium"
            }, Q(h.$message), 9, Ol)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
};
function Ll(e, n, r) {
  let t = F(r == null ? void 0 : r.value), i = j(() => e.value !== void 0);
  return [j(() => i.value ? e.value : t.value), function(a) {
    return i.value || (t.value = a), n == null ? void 0 : n(a);
  }];
}
function va(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function Ln() {
  let e = [], n = { addEventListener(r, t, i, a) {
    return r.addEventListener(t, i, a), n.add(() => r.removeEventListener(t, i, a));
  }, requestAnimationFrame(...r) {
    let t = requestAnimationFrame(...r);
    n.add(() => cancelAnimationFrame(t));
  }, nextFrame(...r) {
    n.requestAnimationFrame(() => {
      n.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let t = setTimeout(...r);
    n.add(() => clearTimeout(t));
  }, microTask(...r) {
    let t = { current: !0 };
    return va(() => {
      t.current && r[0]();
    }), n.add(() => {
      t.current = !1;
    });
  }, style(r, t, i) {
    let a = r.style.getPropertyValue(t);
    return Object.assign(r.style, { [t]: i }), this.add(() => {
      Object.assign(r.style, { [t]: a });
    });
  }, group(r) {
    let t = Ln();
    return r(t), this.add(() => t.dispose());
  }, add(r) {
    return e.push(r), () => {
      let t = e.indexOf(r);
      if (t >= 0) for (let i of e.splice(t, 1)) i();
    };
  }, dispose() {
    for (let r of e.splice(0)) r();
  } };
  return n;
}
var Na;
let Rl = Symbol("headlessui.useid"), Il = 0;
const Je = (Na = vn.useId) != null ? Na : function() {
  return vn.inject(Rl, () => `${++Il}`)();
};
function ne(e) {
  var n;
  if (e == null || e.value == null) return null;
  let r = (n = e.value.$el) != null ? n : e.value;
  return r instanceof Node ? r : null;
}
function nt(e, n, ...r) {
  if (e in n) {
    let i = n[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, nt), t;
}
var zl = Object.defineProperty, Fl = (e, n, r) => n in e ? zl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Ha = (e, n, r) => (Fl(e, typeof n != "symbol" ? n + "" : n, r), r);
let Yl = class {
  constructor() {
    Ha(this, "current", this.detect()), Ha(this, "currentId", 0);
  }
  set(n) {
    this.current !== n && (this.currentId = 0, this.current = n);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, Rn = new Yl();
function St(e) {
  if (Rn.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = ne(e);
    if (n) return n.ownerDocument;
  }
  return document;
}
let Nr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ge = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Ge || {}), Tn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Tn || {}), jl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(jl || {});
function In(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Nr)).sort((n, r) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var dr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(dr || {});
function fr(e, n = 0) {
  var r;
  return e === ((r = St(e)) == null ? void 0 : r.body) ? !1 : nt(n, { 0() {
    return e.matches(Nr);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(Nr)) return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
function zo(e) {
  let n = St(e);
  Le(() => {
    n && !fr(n.activeElement, 0) && Jt(e);
  });
}
var Bl = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Bl || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Jt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Vl = ["textarea", "input"].join(",");
function Nl(e) {
  var n, r;
  return (r = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Vl)) != null ? r : !1;
}
function Fo(e, n = (r) => r) {
  return e.slice().sort((r, t) => {
    let i = n(r), a = n(t);
    if (i === null || a === null) return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Hl(e, n) {
  return bt(In(), n, { relativeTo: e });
}
function bt(e, n, { sorted: r = !0, relativeTo: t = null, skipElements: i = [] } = {}) {
  var a;
  let o = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? r ? Fo(e) : e : In(e);
  i.length > 0 && s.length > 1 && (s = s.filter((p) => !i.includes(p))), t = t ?? o.activeElement;
  let l = (() => {
    if (n & 5) return 1;
    if (n & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (n & 1) return 0;
    if (n & 2) return Math.max(0, s.indexOf(t)) - 1;
    if (n & 4) return Math.max(0, s.indexOf(t)) + 1;
    if (n & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = n & 32 ? { preventScroll: !0 } : {}, f = 0, u = s.length, h;
  do {
    if (f >= u || f + u <= 0) return 0;
    let p = c + f;
    if (n & 16) p = (p + u) % u;
    else {
      if (p < 0) return 3;
      if (p >= u) return 1;
    }
    h = s[p], h == null || h.focus(d), f += l;
  } while (h !== o.activeElement);
  return n & 6 && Nl(h) && h.select(), 2;
}
function Yo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Wl() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Ul() {
  return Yo() || Wl();
}
function Nn(e, n, r) {
  Rn.isServer || ge((t) => {
    document.addEventListener(e, n, r), t(() => document.removeEventListener(e, n, r));
  });
}
function jo(e, n, r) {
  Rn.isServer || ge((t) => {
    window.addEventListener(e, n, r), t(() => window.removeEventListener(e, n, r));
  });
}
function ma(e, n, r = j(() => !0)) {
  function t(a, o) {
    if (!r.value || a.defaultPrevented) return;
    let s = o(a);
    if (s === null || !s.getRootNode().contains(s)) return;
    let l = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of l) {
      if (c === null) continue;
      let d = c instanceof HTMLElement ? c : ne(c);
      if (d != null && d.contains(s) || a.composed && a.composedPath().includes(d)) return;
    }
    return !fr(s, dr.Loose) && s.tabIndex !== -1 && a.preventDefault(), n(a, s);
  }
  let i = F(null);
  Nn("pointerdown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Nn("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Nn("click", (a) => {
    Ul() || i.value && (t(a, () => i.value), i.value = null);
  }, !0), Nn("touchend", (a) => t(a, () => a.target instanceof HTMLElement ? a.target : null), !0), jo("blur", (a) => t(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Wa(e, n) {
  if (e) return e;
  let r = n ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function ga(e, n) {
  let r = F(Wa(e.value.type, e.value.as));
  return he(() => {
    r.value = Wa(e.value.type, e.value.as);
  }), ge(() => {
    var t;
    r.value || ne(n) && ne(n) instanceof HTMLButtonElement && !((t = ne(n)) != null && t.hasAttribute("type")) && (r.value = "button");
  }), r;
}
function Ua(e) {
  return [e.screenX, e.screenY];
}
function _l() {
  let e = F([-1, -1]);
  return { wasMoved(n) {
    let r = Ua(n);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(n) {
    e.value = Ua(n);
  } };
}
function ql({ container: e, accept: n, walk: r, enabled: t }) {
  ge(() => {
    let i = e.value;
    if (!i || t !== void 0 && !t.value) return;
    let a = St(e);
    if (!a) return;
    let o = Object.assign((l) => n(l), { acceptNode: n }), s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; s.nextNode(); ) r(s.currentNode);
  });
}
var Ct = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ct || {}), Kt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Kt || {});
function Ne({ visible: e = !0, features: n = 0, ourProps: r, theirProps: t, ...i }) {
  var a;
  let o = Vo(t, r), s = Object.assign(i, { props: o });
  if (e || n & 2 && o.static) return Tr(s);
  if (n & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return nt(l, { 0() {
      return null;
    }, 1() {
      return Tr({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Tr(s);
}
function Tr({ props: e, attrs: n, slots: r, slot: t, name: i }) {
  var a, o;
  let { as: s, ...l } = ya(e, ["unmount", "static"]), c = (a = r.default) == null ? void 0 : a.call(r, t), d = {};
  if (t) {
    let f = !1, u = [];
    for (let [h, p] of Object.entries(t)) typeof p == "boolean" && (f = !0), p === !0 && u.push(h);
    f && (d["data-headlessui-state"] = u.join(" "));
  }
  if (s === "template") {
    if (c = Bo(c ?? []), Object.keys(l).length > 0 || Object.keys(n).length > 0) {
      let [f, ...u] = c ?? [];
      if (!Kl(f) || u.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(n)).map((m) => m.trim()).filter((m, v, g) => g.indexOf(m) === v).sort((m, v) => m.localeCompare(v)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = Vo((o = f.props) != null ? o : {}, l, d), p = fa(f, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return oe(s, Object.assign({}, l, d), { default: () => c });
}
function Bo(e) {
  return e.flatMap((n) => n.type === se ? Bo(n.children) : [n]);
}
function Vo(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let n = {}, r = {};
  for (let t of e) for (let i in t) i.startsWith("on") && typeof t[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(t[i])) : n[i] = t[i];
  if (n.disabled || n["aria-disabled"]) return Object.assign(n, Object.fromEntries(Object.keys(r).map((t) => [t, void 0])));
  for (let t in r) Object.assign(n, { [t](i, ...a) {
    let o = r[t];
    for (let s of o) {
      if (i instanceof Event && i.defaultPrevented) return;
      s(i, ...a);
    }
  } });
  return n;
}
function Zl(e) {
  let n = Object.assign({}, e);
  for (let r in n) n[r] === void 0 && delete n[r];
  return n;
}
function ya(e, n = []) {
  let r = Object.assign({}, e);
  for (let t of n) t in r && delete r[t];
  return r;
}
function Kl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Nt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Nt || {});
let en = ae({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: r }) {
  return () => {
    var t;
    let { features: i, ...a } = e, o = { "aria-hidden": (i & 2) === 2 ? !0 : (t = a["aria-hidden"]) != null ? t : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return Ne({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: n, name: "Hidden" });
  };
} }), No = Symbol("Context");
var We = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(We || {});
function Gl() {
  return $n() !== null;
}
function $n() {
  return ve(No, null);
}
function ba(e) {
  fe(No, e);
}
var Fe = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Fe || {});
function Xl(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let an = [];
Xl(() => {
  function e(n) {
    n.target instanceof HTMLElement && n.target !== document.body && an[0] !== n.target && (an.unshift(n.target), an = an.filter((r) => r != null && r.isConnected), an.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Jl(e) {
  throw new Error("Unexpected object: " + e);
}
var ht = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ht || {});
function Ql(e, n) {
  let r = n.resolveItems();
  if (r.length <= 0) return null;
  let t = n.resolveActiveIndex(), i = t ?? -1;
  switch (e.focus) {
    case 0: {
      for (let a = 0; a < r.length; ++a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 1: {
      i === -1 && (i = r.length);
      for (let a = i - 1; a >= 0; --a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 2: {
      for (let a = i + 1; a < r.length; ++a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 3: {
      for (let a = r.length - 1; a >= 0; --a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 4: {
      for (let a = 0; a < r.length; ++a) if (n.resolveId(r[a], a, r) === e.id) return a;
      return t;
    }
    case 5:
      return null;
    default:
      Jl(e);
  }
}
function eu(e) {
  var n, r;
  let t = (n = e == null ? void 0 : e.form) != null ? n : e.closest("form");
  if (t) {
    for (let i of t.elements) if (i !== e && (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image")) {
      i.click();
      return;
    }
    (r = t.requestSubmit) == null || r.call(t);
  }
}
function wa(e, n, r, t) {
  Rn.isServer || ge((i) => {
    e = e ?? window, e.addEventListener(n, r, t), i(() => e.removeEventListener(n, r, t));
  });
}
var pt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(pt || {});
function xa() {
  let e = F(0);
  return jo("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function Ho(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let t = ne(r);
    t instanceof HTMLElement && n.add(t);
  }
  return n;
}
var Wo = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Wo || {});
let Sn = Object.assign(ae({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: F(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null);
  t({ el: i, $el: i });
  let a = j(() => St(i)), o = F(!1);
  he(() => o.value = !0), Se(() => o.value = !1), nu({ ownerDocument: a }, j(() => o.value && !!(e.features & 16)));
  let s = ru({ ownerDocument: a, container: i, initialFocus: j(() => e.initialFocus) }, j(() => o.value && !!(e.features & 2)));
  au({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, j(() => o.value && !!(e.features & 8)));
  let l = xa();
  function c(h) {
    let p = ne(i);
    p && ((m) => m())(() => {
      nt(l.value, { [pt.Forwards]: () => {
        bt(p, Ge.First, { skipElements: [h.relatedTarget] });
      }, [pt.Backwards]: () => {
        bt(p, Ge.Last, { skipElements: [h.relatedTarget] });
      } });
    });
  }
  let d = F(!1);
  function f(h) {
    h.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function u(h) {
    if (!o.value) return;
    let p = Ho(e.containers);
    ne(i) instanceof HTMLElement && p.add(ne(i));
    let m = h.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (Uo(p, m) || (d.value ? bt(ne(i), nt(l.value, { [pt.Forwards]: () => Ge.Next, [pt.Backwards]: () => Ge.Previous }) | Ge.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && Jt(h.target)));
  }
  return () => {
    let h = {}, p = { ref: i, onKeydown: f, onFocusout: u }, { features: m, initialFocus: v, containers: g, ...b } = e;
    return oe(se, [!!(m & 4) && oe(en, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Nt.Focusable }), Ne({ ourProps: p, theirProps: { ...n, ...b }, slot: h, attrs: n, slots: r, name: "FocusTrap" }), !!(m & 4) && oe(en, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Nt.Focusable })]);
  };
} }), { features: Wo });
function tu(e) {
  let n = F(an.slice());
  return Me([e], ([r], [t]) => {
    t === !0 && r === !1 ? va(() => {
      n.value.splice(0);
    }) : t === !1 && r === !0 && (n.value = an.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n.value.find((t) => t != null && t.isConnected)) != null ? r : null;
  };
}
function nu({ ownerDocument: e }, n) {
  let r = tu(n);
  he(() => {
    ge(() => {
      var t, i;
      n.value || ((t = e.value) == null ? void 0 : t.activeElement) === ((i = e.value) == null ? void 0 : i.body) && Jt(r());
    }, { flush: "post" });
  }), Se(() => {
    n.value && Jt(r());
  });
}
function ru({ ownerDocument: e, container: n, initialFocus: r }, t) {
  let i = F(null), a = F(!1);
  return he(() => a.value = !0), Se(() => a.value = !1), he(() => {
    Me([n, r, t], (o, s) => {
      if (o.every((c, d) => (s == null ? void 0 : s[d]) === c) || !t.value) return;
      let l = ne(n);
      l && va(() => {
        var c, d;
        if (!a.value) return;
        let f = ne(r), u = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === u) {
            i.value = u;
            return;
          }
        } else if (l.contains(u)) {
          i.value = u;
          return;
        }
        f ? Jt(f) : bt(l, Ge.First | Ge.NoScroll) === Tn.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function au({ ownerDocument: e, container: n, containers: r, previousActiveElement: t }, i) {
  var a;
  wa((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value) return;
    let s = Ho(r);
    ne(n) instanceof HTMLElement && s.add(ne(n));
    let l = t.value;
    if (!l) return;
    let c = o.target;
    c && c instanceof HTMLElement ? Uo(s, c) ? (t.value = c, Jt(c)) : (o.preventDefault(), o.stopPropagation(), Jt(l)) : Jt(t.value);
  }, !0);
}
function Uo(e, n) {
  for (let r of e) if (r.contains(n)) return !0;
  return !1;
}
function ou(e) {
  let n = Cn(e.getSnapshot());
  return Se(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function iu(e, n) {
  let r = e(), t = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return t.add(i), () => t.delete(i);
  }, dispatch(i, ...a) {
    let o = n[i].call(r, ...a);
    o && (r = o, t.forEach((s) => s()));
  } };
}
function su() {
  let e;
  return { before({ doc: n }) {
    var r;
    let t = n.documentElement;
    e = ((r = n.defaultView) != null ? r : window).innerWidth - t.clientWidth;
  }, after({ doc: n, d: r }) {
    let t = n.documentElement, i = t.clientWidth - t.offsetWidth, a = e - i;
    r.style(t, "paddingRight", `${a}px`);
  } };
}
function lu() {
  return Yo() ? { before({ doc: e, d: n, meta: r }) {
    function t(i) {
      return r.containers.flatMap((a) => a()).some((a) => a.contains(i));
    }
    n.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Ln();
        s.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => s.dispose()));
      }
      let a = (i = window.scrollY) != null ? i : window.pageYOffset, o = null;
      n.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let l = s.target.closest("a");
          if (!l) return;
          let { hash: c } = new URL(l.href), d = e.querySelector(c);
          d && !t(d) && (o = d);
        } catch {
        }
      }, !0), n.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (t(s.target)) {
          let l = s.target;
          for (; l.parentElement && t(l.parentElement); ) l = l.parentElement;
          n.style(l, "overscrollBehavior", "contain");
        } else n.style(s.target, "touchAction", "none");
      }), n.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (t(s.target)) {
            let l = s.target;
            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); ) l = l.parentElement;
            l.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), n.add(() => {
        var s;
        let l = (s = window.scrollY) != null ? s : window.pageYOffset;
        a !== l && window.scrollTo(0, a), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
      });
    });
  } } : {};
}
function uu() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function cu(e) {
  let n = {};
  for (let r of e) Object.assign(n, r(n));
  return n;
}
let sn = iu(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var r;
  let t = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Ln(), meta: /* @__PURE__ */ new Set() };
  return t.count++, t.meta.add(n), this.set(e, t), this;
}, POP(e, n) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: r }) {
  let t = { doc: e, d: n, meta: cu(r) }, i = [lu(), su(), uu()];
  i.forEach(({ before: a }) => a == null ? void 0 : a(t)), i.forEach(({ after: a }) => a == null ? void 0 : a(t));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
sn.subscribe(() => {
  let e = sn.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [r] of e) n.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let t = n.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !t || !i && t) && sn.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && sn.dispatch("TEARDOWN", r);
  }
});
function du(e, n, r) {
  let t = ou(sn), i = j(() => {
    let a = e.value ? t.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return Me([e, n], ([a, o], [s], l) => {
    if (!a || !o) return;
    sn.dispatch("PUSH", a, r);
    let c = !1;
    l(() => {
      c || (sn.dispatch("POP", s ?? a, r), c = !0);
    });
  }, { immediate: !0 }), i;
}
let Pr = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new Map();
function _a(e, n = F(!0)) {
  ge((r) => {
    var t;
    if (!n.value) return;
    let i = ne(e);
    if (!i) return;
    r(function() {
      var o;
      if (!i) return;
      let s = (o = Mn.get(i)) != null ? o : 1;
      if (s === 1 ? Mn.delete(i) : Mn.set(i, s - 1), s !== 1) return;
      let l = Pr.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, Pr.delete(i));
    });
    let a = (t = Mn.get(i)) != null ? t : 0;
    Mn.set(i, a + 1), a === 0 && (Pr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
function _o({ defaultContainers: e = [], portals: n, mainTreeNodeRef: r } = {}) {
  let t = F(null), i = St(t);
  function a() {
    var o, s, l;
    let c = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? c.push(d) : "value" in d && d.value instanceof HTMLElement && c.push(d.value));
    if (n != null && n.value) for (let d of n.value) c.push(d);
    for (let d of (o = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? o : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(ne(t)) || d.contains((l = (s = ne(t)) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || c.some((f) => d.contains(f)) || c.push(d));
    return c;
  }
  return { resolveContainers: a, contains(o) {
    return a().some((s) => s.contains(o));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return r != null ? null : oe(en, { features: Nt.Hidden, ref: t });
  } };
}
function fu() {
  let e = F(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return oe(en, { features: Nt.Hidden, ref: e });
  } };
}
let qo = Symbol("ForcePortalRootContext");
function hu() {
  return ve(qo, !1);
}
let Hr = ae({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: r }) {
  return fe(qo, e.force), () => {
    let { force: t, ...i } = e;
    return Ne({ theirProps: i, ourProps: {}, slot: {}, slots: n, attrs: r, name: "ForcePortalRoot" });
  };
} }), Zo = Symbol("StackContext");
var Wr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Wr || {});
function pu() {
  return ve(Zo, () => {
  });
}
function vu({ type: e, enabled: n, element: r, onUpdate: t }) {
  let i = pu();
  function a(...o) {
    t == null || t(...o), i(...o);
  }
  he(() => {
    Me(n, (o, s) => {
      o ? a(0, e, r) : s === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), Se(() => {
    n.value && a(1, e, r);
  }), fe(Zo, a);
}
let Ko = Symbol("DescriptionContext");
function mu() {
  let e = ve(Ko, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function Go({ slot: e = F({}), name: n = "Description", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return fe(Ko, { register: i, slot: e, name: n, props: r }), j(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
ae({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-description-${Je()}`, a = mu();
  return he(() => Se(a.register(i))), () => {
    let { name: o = "Description", slot: s = F({}), props: l = {} } = a, { ...c } = e, d = { ...Object.entries(l).reduce((f, [u, h]) => Object.assign(f, { [u]: te(h) }), {}), id: i };
    return Ne({ ourProps: d, theirProps: c, slot: s.value, attrs: n, slots: r, name: o });
  };
} });
function gu(e) {
  let n = St(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = n.getElementById("headlessui-portal-root");
  if (r) return r;
  let t = n.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(t);
}
const Ur = /* @__PURE__ */ new WeakMap();
function yu(e) {
  var n;
  return (n = Ur.get(e)) != null ? n : 0;
}
function qa(e, n) {
  let r = n(yu(e));
  return r <= 0 ? Ur.delete(e) : Ur.set(e, r), r;
}
let Xo = ae({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = j(() => St(t)), a = hu(), o = ve(Qo, null), s = F(a === !0 || o == null ? gu(t.value) : o.resolveTarget());
  s.value && qa(s.value, (u) => u + 1);
  let l = F(!1);
  he(() => {
    l.value = !0;
  }), ge(() => {
    a || o != null && (s.value = o.resolveTarget());
  });
  let c = ve(_r, null), d = !1, f = ha();
  return Me(t, () => {
    if (d || !c) return;
    let u = ne(t);
    u && (Se(c.register(u), f), d = !0);
  }), Se(() => {
    var u, h;
    let p = (u = i.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    !p || s.value !== p || qa(s.value, (m) => m - 1) || s.value.children.length > 0 || (h = s.value.parentElement) == null || h.removeChild(s.value);
  }), () => {
    if (!l.value || s.value === null) return null;
    let u = { ref: t, "data-headlessui-portal": "" };
    return oe(ur, { to: s.value }, Ne({ ourProps: u, theirProps: e, slot: {}, attrs: r, slots: n, name: "Portal" }));
  };
} }), _r = Symbol("PortalParentContext");
function Jo() {
  let e = ve(_r, null), n = F([]);
  function r(a) {
    return n.value.push(a), e && e.register(a), () => t(a);
  }
  function t(a) {
    let o = n.value.indexOf(a);
    o !== -1 && n.value.splice(o, 1), e && e.unregister(a);
  }
  let i = { register: r, unregister: t, portals: n };
  return [n, ae({ name: "PortalWrapper", setup(a, { slots: o }) {
    return fe(_r, i), () => {
      var s;
      return (s = o.default) == null ? void 0 : s.call(o);
    };
  } })];
}
let Qo = Symbol("PortalGroupContext"), bu = ae({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: r }) {
  let t = xn({ resolveTarget() {
    return e.target;
  } });
  return fe(Qo, t), () => {
    let { target: i, ...a } = e;
    return Ne({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: r, name: "PortalGroup" });
  };
} });
var wu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(wu || {});
let qr = Symbol("DialogContext");
function zn(e) {
  let n = ve(qr, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, zn), r;
  }
  return n;
}
let Hn = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", xu = ae({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Hn }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a, o;
  let s = (a = e.id) != null ? a : `headlessui-dialog-${Je()}`, l = F(!1);
  he(() => {
    l.value = !0;
  });
  let c = !1, d = j(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0, console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), f = F(0), u = $n(), h = j(() => e.open === Hn && u !== null ? (u.value & We.Open) === We.Open : e.open), p = F(null), m = j(() => St(p));
  if (i({ el: p, $el: p }), !(e.open !== Hn || u !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof h.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value === Hn ? void 0 : e.open}`);
  let v = j(() => l.value && h.value ? 0 : 1), g = j(() => v.value === 0), b = j(() => f.value > 1), k = ve(qr, null) !== null, [P, $] = Jo(), { resolveContainers: S, mainTreeNodeRef: w, MainTreeNode: x } = _o({ portals: P, defaultContainers: [j(() => {
    var z;
    return (z = R.panelRef.value) != null ? z : p.value;
  })] }), I = j(() => b.value ? "parent" : "leaf"), O = j(() => u !== null ? (u.value & We.Closing) === We.Closing : !1), C = j(() => k || O.value ? !1 : g.value), Z = j(() => {
    var z, _, K;
    return (K = Array.from((_ = (z = m.value) == null ? void 0 : z.querySelectorAll("body > *")) != null ? _ : []).find((ee) => ee.id === "headlessui-portal-root" ? !1 : ee.contains(ne(w)) && ee instanceof HTMLElement)) != null ? K : null;
  });
  _a(Z, C);
  let Y = j(() => b.value ? !0 : g.value), y = j(() => {
    var z, _, K;
    return (K = Array.from((_ = (z = m.value) == null ? void 0 : z.querySelectorAll("[data-headlessui-portal]")) != null ? _ : []).find((ee) => ee.contains(ne(w)) && ee instanceof HTMLElement)) != null ? K : null;
  });
  _a(y, Y), vu({ type: "Dialog", enabled: j(() => v.value === 0), element: p, onUpdate: (z, _) => {
    if (_ === "Dialog") return nt(z, { [Wr.Add]: () => f.value += 1, [Wr.Remove]: () => f.value -= 1 });
  } });
  let A = Go({ name: "DialogDescription", slot: j(() => ({ open: h.value })) }), E = F(null), R = { titleId: E, panelRef: F(null), dialogState: v, setTitleId(z) {
    E.value !== z && (E.value = z);
  }, close() {
    n("close", !1);
  } };
  fe(qr, R);
  let T = j(() => !(!g.value || b.value));
  ma(S, (z, _) => {
    z.preventDefault(), R.close(), Le(() => _ == null ? void 0 : _.focus());
  }, T);
  let B = j(() => !(b.value || v.value !== 0));
  wa((o = m.value) == null ? void 0 : o.defaultView, "keydown", (z) => {
    B.value && (z.defaultPrevented || z.key === Fe.Escape && (z.preventDefault(), z.stopPropagation(), R.close()));
  });
  let N = j(() => !(O.value || v.value !== 0 || k));
  return du(m, N, (z) => {
    var _;
    return { containers: [...(_ = z.containers) != null ? _ : [], S] };
  }), ge((z) => {
    if (v.value !== 0) return;
    let _ = ne(p);
    if (!_) return;
    let K = new ResizeObserver((ee) => {
      for (let ce of ee) {
        let xe = ce.target.getBoundingClientRect();
        xe.x === 0 && xe.y === 0 && xe.width === 0 && xe.height === 0 && R.close();
      }
    });
    K.observe(_), z(() => K.disconnect());
  }), () => {
    let { open: z, initialFocus: _, ...K } = e, ee = { ...r, ref: p, id: s, role: d.value, "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": A.value }, ce = { open: v.value === 0 };
    return oe(Hr, { force: !0 }, () => [oe(Xo, () => oe(bu, { target: p.value }, () => oe(Hr, { force: !1 }, () => oe(Sn, { initialFocus: _, containers: S, features: g.value ? nt(I.value, { parent: Sn.features.RestoreFocus, leaf: Sn.features.All & ~Sn.features.FocusLock }) : Sn.features.None }, () => oe($, {}, () => Ne({ ourProps: ee, theirProps: { ...K, ...r }, slot: ce, attrs: r, slots: t, visible: v.value === 0, features: Ct.RenderStrategy | Ct.Static, name: "Dialog" })))))), oe(x)]);
  };
} });
ae({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-overlay-${Je()}`, a = zn("DialogOverlay");
  function o(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), a.close());
  }
  return () => {
    let { ...s } = e;
    return Ne({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: s, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogOverlay" });
  };
} });
ae({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-backdrop-${Je()}`, o = zn("DialogBackdrop"), s = F(null);
  return t({ el: s, $el: s }), he(() => {
    if (o.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...l } = e, c = { id: a, ref: s, "aria-hidden": !0 };
    return oe(Hr, { force: !0 }, () => oe(Xo, () => Ne({ ourProps: c, theirProps: { ...n, ...l }, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogBackdrop" })));
  };
} });
let $u = ae({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-panel-${Je()}`, o = zn("DialogPanel");
  t({ el: o.panelRef, $el: o.panelRef });
  function s(l) {
    l.stopPropagation();
  }
  return () => {
    let { ...l } = e, c = { id: a, ref: o.panelRef, onClick: s };
    return Ne({ ourProps: c, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogPanel" });
  };
} }), ku = ae({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-title-${Je()}`, a = zn("DialogTitle");
  return he(() => {
    a.setTitleId(i), Se(() => a.setTitleId(null));
  }), () => {
    let { ...o } = e;
    return Ne({ ourProps: { id: i }, theirProps: o, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogTitle" });
  };
} }), Za = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ka(e) {
  var n, r;
  let t = (n = e.innerText) != null ? n : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return t;
  let a = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), a = !0;
  let o = a ? (r = i.innerText) != null ? r : "" : t;
  return Za.test(o) && (o = o.replace(Za, "")), o;
}
function Su(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string") return n.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let t = r.split(" ").map((i) => {
      let a = document.getElementById(i);
      if (a) {
        let o = a.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Ka(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (t.length > 0) return t.join(", ");
  }
  return Ka(e).trim();
}
function Mu(e) {
  let n = F(""), r = F("");
  return () => {
    let t = ne(e);
    if (!t) return "";
    let i = t.innerText;
    if (n.value === i) return r.value;
    let a = Su(t).trim().toLowerCase();
    return n.value = i, r.value = a, a;
  };
}
var Du = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Du || {}), Eu = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Eu || {});
function Au(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let ei = Symbol("MenuContext");
function hr(e) {
  let n = ve(ei, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, hr), r;
  }
  return n;
}
let ti = ae({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(1), i = F(null), a = F(null), o = F([]), s = F(""), l = F(null), c = F(1);
  function d(u = (h) => h) {
    let h = l.value !== null ? o.value[l.value] : null, p = Fo(u(o.value.slice()), (v) => ne(v.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let f = { menuState: t, buttonRef: i, itemsRef: a, items: o, searchQuery: s, activeItemIndex: l, activationTrigger: c, closeMenu: () => {
    t.value = 1, l.value = null;
  }, openMenu: () => t.value = 0, goToItem(u, h, p) {
    let m = d(), v = Ql(u === ht.Specific ? { focus: ht.Specific, id: h } : { focus: u }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    s.value = "", l.value = v, c.value = p ?? 1, o.value = m.items;
  }, search(u) {
    let h = s.value !== "" ? 0 : 1;
    s.value += u.toLowerCase();
    let p = (l.value !== null ? o.value.slice(l.value + h).concat(o.value.slice(0, l.value + h)) : o.value).find((v) => v.dataRef.textValue.startsWith(s.value) && !v.dataRef.disabled), m = p ? o.value.indexOf(p) : -1;
    m === -1 || m === l.value || (l.value = m, c.value = 1);
  }, clearSearch() {
    s.value = "";
  }, registerItem(u, h) {
    let p = d((m) => [...m, { id: u, dataRef: h }]);
    o.value = p.items, l.value = p.activeItemIndex, c.value = 1;
  }, unregisterItem(u) {
    let h = d((p) => {
      let m = p.findIndex((v) => v.id === u);
      return m !== -1 && p.splice(m, 1), p;
    });
    o.value = h.items, l.value = h.activeItemIndex, c.value = 1;
  } };
  return ma([i, a], (u, h) => {
    var p;
    f.closeMenu(), fr(h, dr.Loose) || (u.preventDefault(), (p = ne(i)) == null || p.focus());
  }, j(() => t.value === 0)), fe(ei, f), ba(j(() => nt(t.value, { 0: We.Open, 1: We.Closed }))), () => {
    let u = { open: t.value === 0, close: f.closeMenu };
    return Ne({ ourProps: {}, theirProps: e, slot: u, slots: n, attrs: r, name: "Menu" });
  };
} }), ni = ae({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-button-${Je()}`, o = hr("MenuButton");
  t({ el: o.buttonRef, $el: o.buttonRef });
  function s(f) {
    switch (f.key) {
      case Fe.Space:
      case Fe.Enter:
      case Fe.ArrowDown:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Le(() => {
          var u;
          (u = ne(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(ht.First);
        });
        break;
      case Fe.ArrowUp:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Le(() => {
          var u;
          (u = ne(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(ht.Last);
        });
        break;
    }
  }
  function l(f) {
    switch (f.key) {
      case Fe.Space:
        f.preventDefault();
        break;
    }
  }
  function c(f) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Le(() => {
      var u;
      return (u = ne(o.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), o.openMenu(), Au(() => {
      var u;
      return (u = ne(o.itemsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let d = ga(j(() => ({ as: e.as, type: n.type })), o.buttonRef);
  return () => {
    var f;
    let u = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: a, type: d.value, "aria-haspopup": "menu", "aria-controls": (f = ne(o.itemsRef)) == null ? void 0 : f.id, "aria-expanded": o.menuState.value === 0, onKeydown: s, onKeyup: l, onClick: c };
    return Ne({ ourProps: p, theirProps: h, slot: u, attrs: n, slots: r, name: "MenuButton" });
  };
} }), ri = ae({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-items-${Je()}`, o = hr("MenuItems"), s = F(null);
  t({ el: o.itemsRef, $el: o.itemsRef }), ql({ container: j(() => ne(o.itemsRef)), enabled: j(() => o.menuState.value === 0), accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function l(u) {
    var h;
    switch (s.value && clearTimeout(s.value), u.key) {
      case Fe.Space:
        if (o.searchQuery.value !== "") return u.preventDefault(), u.stopPropagation(), o.search(u.key);
      case Fe.Enter:
        if (u.preventDefault(), u.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = ne(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), zo(ne(o.buttonRef));
        break;
      case Fe.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(ht.Next);
      case Fe.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(ht.Previous);
      case Fe.Home:
      case Fe.PageUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(ht.First);
      case Fe.End:
      case Fe.PageDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(ht.Last);
      case Fe.Escape:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Le(() => {
          var p;
          return (p = ne(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case Fe.Tab:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Le(() => Hl(ne(o.buttonRef), u.shiftKey ? Ge.Previous : Ge.Next));
        break;
      default:
        u.key.length === 1 && (o.search(u.key), s.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function c(u) {
    switch (u.key) {
      case Fe.Space:
        u.preventDefault();
        break;
    }
  }
  let d = $n(), f = j(() => d !== null ? (d.value & We.Open) === We.Open : o.menuState.value === 0);
  return () => {
    var u, h;
    let p = { open: o.menuState.value === 0 }, { ...m } = e, v = { "aria-activedescendant": o.activeItemIndex.value === null || (u = o.items.value[o.activeItemIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (h = ne(o.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: l, onKeyup: c, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return Ne({ ourProps: v, theirProps: m, slot: p, attrs: n, slots: r, features: Ct.RenderStrategy | Ct.Static, visible: f.value, name: "MenuItems" });
  };
} }), ai = ae({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-item-${Je()}`, o = hr("MenuItem"), s = F(null);
  t({ el: s, $el: s });
  let l = j(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === a : !1), c = Mu(s), d = j(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: s }));
  he(() => o.registerItem(a, d)), Se(() => o.unregisterItem(a)), ge(() => {
    o.menuState.value === 0 && l.value && o.activationTrigger.value !== 0 && Le(() => {
      var g, b;
      return (b = (g = ne(s)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : b.call(g, { block: "nearest" });
    });
  });
  function f(g) {
    if (e.disabled) return g.preventDefault();
    o.closeMenu(), zo(ne(o.buttonRef));
  }
  function u() {
    if (e.disabled) return o.goToItem(ht.Nothing);
    o.goToItem(ht.Specific, a);
  }
  let h = _l();
  function p(g) {
    h.update(g);
  }
  function m(g) {
    h.wasMoved(g) && (e.disabled || l.value || o.goToItem(ht.Specific, a, 0));
  }
  function v(g) {
    h.wasMoved(g) && (e.disabled || l.value && o.goToItem(ht.Nothing));
  }
  return () => {
    let { disabled: g, ...b } = e, k = { active: l.value, disabled: g, close: o.closeMenu };
    return Ne({ ourProps: { id: a, ref: s, role: "menuitem", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, onClick: f, onFocus: u, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v }, theirProps: { ...r, ...b }, slot: k, attrs: r, slots: n, name: "MenuItem" });
  };
} });
var Tu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Tu || {});
let oi = Symbol("PopoverContext");
function pr(e) {
  let n = ve(oi, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <${ui.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, pr), r;
  }
  return n;
}
let ii = Symbol("PopoverGroupContext");
function si() {
  return ve(ii, null);
}
let li = Symbol("PopoverPanelContext");
function Pu() {
  return ve(li, null);
}
let ui = ae({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = F(null);
  t({ el: a, $el: a });
  let o = F(1), s = F(null), l = F(null), c = F(null), d = F(null), f = j(() => St(a)), u = j(() => {
    var $, S;
    if (!ne(s) || !ne(d)) return !1;
    for (let Y of document.querySelectorAll("body > *")) if (Number(Y == null ? void 0 : Y.contains(ne(s))) ^ Number(Y == null ? void 0 : Y.contains(ne(d)))) return !0;
    let w = In(), x = w.indexOf(ne(s)), I = (x + w.length - 1) % w.length, O = (x + 1) % w.length, C = w[I], Z = w[O];
    return !(($ = ne(d)) != null && $.contains(C)) && !((S = ne(d)) != null && S.contains(Z));
  }), h = { popoverState: o, buttonId: F(null), panelId: F(null), panel: d, button: s, isPortalled: u, beforePanelSentinel: l, afterPanelSentinel: c, togglePopover() {
    o.value = nt(o.value, { 0: 1, 1: 0 });
  }, closePopover() {
    o.value !== 1 && (o.value = 1);
  }, close($) {
    h.closePopover();
    let S = $ ? $ instanceof HTMLElement ? $ : $.value instanceof HTMLElement ? ne($) : ne(h.button) : ne(h.button);
    S == null || S.focus();
  } };
  fe(oi, h), ba(j(() => nt(o.value, { 0: We.Open, 1: We.Closed })));
  let p = { buttonId: h.buttonId, panelId: h.panelId, close() {
    h.closePopover();
  } }, m = si(), v = m == null ? void 0 : m.registerPopover, [g, b] = Jo(), k = _o({ mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef, portals: g, defaultContainers: [s, d] });
  function P() {
    var $, S, w, x;
    return (x = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null ? x : (($ = f.value) == null ? void 0 : $.activeElement) && (((S = ne(s)) == null ? void 0 : S.contains(f.value.activeElement)) || ((w = ne(d)) == null ? void 0 : w.contains(f.value.activeElement)));
  }
  return ge(() => v == null ? void 0 : v(p)), wa((i = f.value) == null ? void 0 : i.defaultView, "focus", ($) => {
    var S, w;
    $.target !== window && $.target instanceof HTMLElement && o.value === 0 && (P() || s && d && (k.contains($.target) || (S = ne(h.beforePanelSentinel)) != null && S.contains($.target) || (w = ne(h.afterPanelSentinel)) != null && w.contains($.target) || h.closePopover()));
  }, !0), ma(k.resolveContainers, ($, S) => {
    var w;
    h.closePopover(), fr(S, dr.Loose) || ($.preventDefault(), (w = ne(s)) == null || w.focus());
  }, j(() => o.value === 0)), () => {
    let $ = { open: o.value === 0, close: h.close };
    return oe(se, [oe(b, {}, () => Ne({ theirProps: { ...e, ...r }, ourProps: { ref: a }, slot: $, slots: n, attrs: r, name: "Popover" })), oe(k.MainTreeNode)]);
  };
} }), Ou = ae({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-button-${Je()}`, o = pr("PopoverButton"), s = j(() => St(o.button));
  t({ el: o.button, $el: o.button }), he(() => {
    o.buttonId.value = a;
  }), Se(() => {
    o.buttonId.value = null;
  });
  let l = si(), c = l == null ? void 0 : l.closeOthers, d = Pu(), f = j(() => d === null ? !1 : d.value === o.panelId.value), u = F(null), h = `headlessui-focus-sentinel-${Je()}`;
  f.value || ge(() => {
    o.button.value = ne(u);
  });
  let p = ga(j(() => ({ as: e.as, type: n.type })), u);
  function m($) {
    var S, w, x, I, O;
    if (f.value) {
      if (o.popoverState.value === 1) return;
      switch ($.key) {
        case Fe.Space:
        case Fe.Enter:
          $.preventDefault(), (w = (S = $.target).click) == null || w.call(S), o.closePopover(), (x = ne(o.button)) == null || x.focus();
          break;
      }
    } else switch ($.key) {
      case Fe.Space:
      case Fe.Enter:
        $.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover();
        break;
      case Fe.Escape:
        if (o.popoverState.value !== 0) return c == null ? void 0 : c(o.buttonId.value);
        if (!ne(o.button) || (I = s.value) != null && I.activeElement && !((O = ne(o.button)) != null && O.contains(s.value.activeElement))) return;
        $.preventDefault(), $.stopPropagation(), o.closePopover();
        break;
    }
  }
  function v($) {
    f.value || $.key === Fe.Space && $.preventDefault();
  }
  function g($) {
    var S, w;
    e.disabled || (f.value ? (o.closePopover(), (S = ne(o.button)) == null || S.focus()) : ($.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover(), (w = ne(o.button)) == null || w.focus()));
  }
  function b($) {
    $.preventDefault(), $.stopPropagation();
  }
  let k = xa();
  function P() {
    let $ = ne(o.panel);
    if (!$) return;
    function S() {
      nt(k.value, { [pt.Forwards]: () => bt($, Ge.First), [pt.Backwards]: () => bt($, Ge.Last) }) === Tn.Error && bt(In().filter((w) => w.dataset.headlessuiFocusGuard !== "true"), nt(k.value, { [pt.Forwards]: Ge.Next, [pt.Backwards]: Ge.Previous }), { relativeTo: ne(o.button) });
    }
    S();
  }
  return () => {
    let $ = o.popoverState.value === 0, S = { open: $ }, { ...w } = e, x = f.value ? { ref: u, type: p.value, onKeydown: m, onClick: g } : { ref: u, id: a, type: p.value, "aria-expanded": o.popoverState.value === 0, "aria-controls": ne(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: v, onClick: g, onMousedown: b };
    return oe(se, [Ne({ ourProps: x, theirProps: { ...n, ...w }, slot: S, attrs: n, slots: r, name: "PopoverButton" }), $ && !f.value && o.isPortalled.value && oe(en, { id: h, features: Nt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: P })]);
  };
} }), Cu = ae({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: r }) {
  let t = pr("PopoverOverlay"), i = `headlessui-popover-overlay-${Je()}`, a = $n(), o = j(() => a !== null ? (a.value & We.Open) === We.Open : t.popoverState.value === 0);
  function s() {
    t.closePopover();
  }
  return () => {
    let l = { open: t.popoverState.value === 0 };
    return Ne({ ourProps: { id: i, "aria-hidden": !0, onClick: s }, theirProps: e, slot: l, attrs: n, slots: r, features: Ct.RenderStrategy | Ct.Static, visible: o.value, name: "PopoverOverlay" });
  };
} }), Lu = ae({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-panel-${Je()}`, { focus: o } = e, s = pr("PopoverPanel"), l = j(() => St(s.panel)), c = `headlessui-focus-sentinel-before-${Je()}`, d = `headlessui-focus-sentinel-after-${Je()}`;
  t({ el: s.panel, $el: s.panel }), he(() => {
    s.panelId.value = a;
  }), Se(() => {
    s.panelId.value = null;
  }), fe(li, s.panelId), ge(() => {
    var b, k;
    if (!o || s.popoverState.value !== 0 || !s.panel) return;
    let P = (b = l.value) == null ? void 0 : b.activeElement;
    (k = ne(s.panel)) != null && k.contains(P) || bt(ne(s.panel), Ge.First);
  });
  let f = $n(), u = j(() => f !== null ? (f.value & We.Open) === We.Open : s.popoverState.value === 0);
  function h(b) {
    var k, P;
    switch (b.key) {
      case Fe.Escape:
        if (s.popoverState.value !== 0 || !ne(s.panel) || l.value && !((k = ne(s.panel)) != null && k.contains(l.value.activeElement))) return;
        b.preventDefault(), b.stopPropagation(), s.closePopover(), (P = ne(s.button)) == null || P.focus();
        break;
    }
  }
  function p(b) {
    var k, P, $, S, w;
    let x = b.relatedTarget;
    x && ne(s.panel) && ((k = ne(s.panel)) != null && k.contains(x) || (s.closePopover(), (($ = (P = ne(s.beforePanelSentinel)) == null ? void 0 : P.contains) != null && $.call(P, x) || (w = (S = ne(s.afterPanelSentinel)) == null ? void 0 : S.contains) != null && w.call(S, x)) && x.focus({ preventScroll: !0 })));
  }
  let m = xa();
  function v() {
    let b = ne(s.panel);
    if (!b) return;
    function k() {
      nt(m.value, { [pt.Forwards]: () => {
        var P;
        bt(b, Ge.First) === Tn.Error && ((P = ne(s.afterPanelSentinel)) == null || P.focus());
      }, [pt.Backwards]: () => {
        var P;
        (P = ne(s.button)) == null || P.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function g() {
    let b = ne(s.panel);
    if (!b) return;
    function k() {
      nt(m.value, { [pt.Forwards]: () => {
        let P = ne(s.button), $ = ne(s.panel);
        if (!P) return;
        let S = In(), w = S.indexOf(P), x = S.slice(0, w + 1), I = [...S.slice(w + 1), ...x];
        for (let O of I.slice()) if (O.dataset.headlessuiFocusGuard === "true" || $ != null && $.contains(O)) {
          let C = I.indexOf(O);
          C !== -1 && I.splice(C, 1);
        }
        bt(I, Ge.First, { sorted: !1 });
      }, [pt.Backwards]: () => {
        var P;
        bt(b, Ge.Previous) === Tn.Error && ((P = ne(s.button)) == null || P.focus());
      } });
    }
    k();
  }
  return () => {
    let b = { open: s.popoverState.value === 0, close: s.close }, { focus: k, ...P } = e, $ = { ref: s.panel, id: a, onKeydown: h, onFocusout: o && s.popoverState.value === 0 ? p : void 0, tabIndex: -1 };
    return Ne({ ourProps: $, theirProps: { ...n, ...P }, attrs: n, slot: b, slots: { ...r, default: (...S) => {
      var w;
      return [oe(se, [u.value && s.isPortalled.value && oe(en, { id: c, ref: s.beforePanelSentinel, features: Nt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v }), (w = r.default) == null ? void 0 : w.call(r, ...S), u.value && s.isPortalled.value && oe(en, { id: d, ref: s.afterPanelSentinel, features: Nt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: Ct.RenderStrategy | Ct.Static, visible: u.value, name: "PopoverPanel" });
  };
} });
ae({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null), a = Cn([]), o = j(() => St(i)), s = fu();
  t({ el: i, $el: i });
  function l(u) {
    let h = a.value.indexOf(u);
    h !== -1 && a.value.splice(h, 1);
  }
  function c(u) {
    return a.value.push(u), () => {
      l(u);
    };
  }
  function d() {
    var u;
    let h = o.value;
    if (!h) return !1;
    let p = h.activeElement;
    return (u = ne(i)) != null && u.contains(p) ? !0 : a.value.some((m) => {
      var v, g;
      return ((v = h.getElementById(m.buttonId.value)) == null ? void 0 : v.contains(p)) || ((g = h.getElementById(m.panelId.value)) == null ? void 0 : g.contains(p));
    });
  }
  function f(u) {
    for (let h of a.value) h.buttonId.value !== u && h.close();
  }
  return fe(ii, { registerPopover: c, unregisterPopover: l, isFocusWithinPopoverGroup: d, closeOthers: f, mainTreeNodeRef: s.mainTreeNodeRef }), () => oe(se, [Ne({ ourProps: { ref: i }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: r, name: "PopoverGroup" }), oe(s.MainTreeNode)]);
} });
let ci = Symbol("LabelContext");
function di() {
  let e = ve(ci, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, di), n;
  }
  return e;
}
function Ru({ slot: e = {}, name: n = "Label", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return fe(ci, { register: i, slot: e, name: n, props: r }), j(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
let Iu = ae({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-label-${Je()}`, a = di();
  return he(() => Se(a.register(i))), () => {
    let { name: o = "Label", slot: s = {}, props: l = {} } = a, { passive: c, ...d } = e, f = { ...Object.entries(l).reduce((u, [h, p]) => Object.assign(u, { [h]: te(p) }), {}), id: i };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), Ne({ ourProps: f, theirProps: d, slot: s, attrs: r, slots: n, name: o });
  };
} }), fi = Symbol("GroupContext"), zu = ae({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = Ru({ name: "SwitchLabel", props: { htmlFor: j(() => {
    var o;
    return (o = t.value) == null ? void 0 : o.id;
  }), onClick(o) {
    t.value && (o.currentTarget.tagName === "LABEL" && o.preventDefault(), t.value.click(), t.value.focus({ preventScroll: !0 }));
  } } }), a = Go({ name: "SwitchDescription" });
  return fe(fi, { switchRef: t, labelledby: i, describedby: a }), () => Ne({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: r, name: "SwitchGroup" });
} }), Fu = ae({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: null }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a;
  let o = (a = e.id) != null ? a : `headlessui-switch-${Je()}`, s = ve(fi, null), [l, c] = Ll(j(() => e.modelValue), (b) => n("update:modelValue", b), j(() => e.defaultChecked));
  function d() {
    c(!l.value);
  }
  let f = F(null), u = s === null ? f : s.switchRef, h = ga(j(() => ({ as: e.as, type: r.type })), u);
  i({ el: u, $el: u });
  function p(b) {
    b.preventDefault(), d();
  }
  function m(b) {
    b.key === Fe.Space ? (b.preventDefault(), d()) : b.key === Fe.Enter && eu(b.currentTarget);
  }
  function v(b) {
    b.preventDefault();
  }
  let g = j(() => {
    var b, k;
    return (k = (b = ne(u)) == null ? void 0 : b.closest) == null ? void 0 : k.call(b, "form");
  });
  return he(() => {
    Me([g], () => {
      if (!g.value || e.defaultChecked === void 0) return;
      function b() {
        c(e.defaultChecked);
      }
      return g.value.addEventListener("reset", b), () => {
        var k;
        (k = g.value) == null || k.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: b, value: k, form: P, tabIndex: $, ...S } = e, w = { checked: l.value }, x = { id: o, ref: u, role: "switch", type: h.value, tabIndex: $ === -1 ? 0 : $, "aria-checked": l.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: p, onKeyup: m, onKeypress: v };
    return oe(se, [b != null && l.value != null ? oe(en, Zl({ features: Nt.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: P, disabled: S.disabled, name: b, value: k })) : null, Ne({ ourProps: x, theirProps: { ...r, ...ya(S, ["modelValue", "defaultChecked"]) }, slot: w, attrs: r, slots: t, name: "Switch" })]);
  };
} }), Wn = Iu;
function Yu(e) {
  let n = { called: !1 };
  return (...r) => {
    if (!n.called) return n.called = !0, e(...r);
  };
}
function Or(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function Un(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var Zr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Zr || {});
function ju(e, n) {
  let r = Ln();
  if (!e) return r.dispose;
  let { transitionDuration: t, transitionDelay: i } = getComputedStyle(e), [a, o] = [t, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, d) => d - c);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => n("finished"), a + o) : n("finished"), r.add(() => n("cancelled")), r.dispose;
}
function Ga(e, n, r, t, i, a) {
  let o = Ln(), s = a !== void 0 ? Yu(a) : () => {
  };
  return Un(e, ...i), Or(e, ...n, ...r), o.nextFrame(() => {
    Un(e, ...r), Or(e, ...t), o.add(ju(e, (l) => (Un(e, ...t, ...n), Or(e, ...i), s(l))));
  }), o.add(() => Un(e, ...n, ...r, ...t, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function nn(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let $a = Symbol("TransitionContext");
var Bu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Bu || {});
function Vu() {
  return ve($a, null) !== null;
}
function Nu() {
  let e = ve($a, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Hu() {
  let e = ve(ka, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let ka = Symbol("NestingContext");
function vr(e) {
  return "children" in e ? vr(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function hi(e) {
  let n = F([]), r = F(!1);
  he(() => r.value = !0), Se(() => r.value = !1);
  function t(a, o = Kt.Hidden) {
    let s = n.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (nt(o, { [Kt.Unmount]() {
      n.value.splice(s, 1);
    }, [Kt.Hidden]() {
      n.value[s].state = "hidden";
    } }), !vr(n) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = n.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : n.value.push({ id: a, state: "visible" }), () => t(a, Kt.Unmount);
  }
  return { children: n, register: i, unregister: t };
}
let pi = Ct.RenderStrategy, Kr = ae({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  let a = F(0);
  function o() {
    a.value |= We.Opening, n("beforeEnter");
  }
  function s() {
    a.value &= ~We.Opening, n("afterEnter");
  }
  function l() {
    a.value |= We.Closing, n("beforeLeave");
  }
  function c() {
    a.value &= ~We.Closing, n("afterLeave");
  }
  if (!Vu() && Gl()) return () => oe(vi, { ...e, onBeforeEnter: o, onAfterEnter: s, onBeforeLeave: l, onAfterLeave: c }, t);
  let d = F(null), f = j(() => e.unmount ? Kt.Unmount : Kt.Hidden);
  i({ el: d, $el: d });
  let { show: u, appear: h } = Nu(), { register: p, unregister: m } = Hu(), v = F(u.value ? "visible" : "hidden"), g = { value: !0 }, b = Je(), k = { value: !1 }, P = hi(() => {
    !k.value && v.value !== "hidden" && (v.value = "hidden", m(b), c());
  });
  he(() => {
    let Y = p(b);
    Se(Y);
  }), ge(() => {
    if (f.value === Kt.Hidden && b) {
      if (u.value && v.value !== "visible") {
        v.value = "visible";
        return;
      }
      nt(v.value, { hidden: () => m(b), visible: () => p(b) });
    }
  });
  let $ = nn(e.enter), S = nn(e.enterFrom), w = nn(e.enterTo), x = nn(e.entered), I = nn(e.leave), O = nn(e.leaveFrom), C = nn(e.leaveTo);
  he(() => {
    ge(() => {
      if (v.value === "visible") {
        let Y = ne(d);
        if (Y instanceof Comment && Y.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function Z(Y) {
    let y = g.value && !h.value, A = ne(d);
    !A || !(A instanceof HTMLElement) || y || (k.value = !0, u.value && o(), u.value || l(), Y(u.value ? Ga(A, $, S, w, x, (E) => {
      k.value = !1, E === Zr.Finished && s();
    }) : Ga(A, I, O, C, x, (E) => {
      k.value = !1, E === Zr.Finished && (vr(P) || (v.value = "hidden", m(b), c()));
    })));
  }
  return he(() => {
    Me([u], (Y, y, A) => {
      Z(A), g.value = !1;
    }, { immediate: !0 });
  }), fe(ka, P), ba(j(() => nt(v.value, { visible: We.Open, hidden: We.Closed }) | a.value)), () => {
    let { appear: Y, show: y, enter: A, enterFrom: E, enterTo: R, entered: T, leave: B, leaveFrom: N, leaveTo: z, ..._ } = e, K = { ref: d }, ee = { ..._, ...h.value && u.value && Rn.isServer ? { class: pe([r.class, _.class, ...$, ...S]) } : {} };
    return Ne({ theirProps: ee, ourProps: K, slot: {}, slots: t, attrs: r, features: pi, visible: v.value === "visible", name: "TransitionChild" });
  };
} }), Wu = Kr, vi = ae({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t }) {
  let i = $n(), a = j(() => e.show === null && i !== null ? (i.value & We.Open) === We.Open : e.show);
  ge(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = F(a.value ? "visible" : "hidden"), s = hi(() => {
    o.value = "hidden";
  }), l = F(!0), c = { show: a, appear: j(() => e.appear || !l.value) };
  return he(() => {
    ge(() => {
      l.value = !1, a.value ? o.value = "visible" : vr(s) || (o.value = "hidden");
    });
  }), fe(ka, s), fe($a, c), () => {
    let d = ya(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return Ne({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...t, default: () => [oe(Wu, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...r, ...f, ...d }, t.default)] }, attrs: {}, features: pi, visible: o.value === "visible", name: "Transition" });
  };
} });
const Uu = ["data-test"], _u = ["data-test"], qu = {
  key: 0,
  class: "tc-block tc-mb-2"
}, Zu = ["data-test"], gg = {
  __name: "InputSwitch",
  props: /* @__PURE__ */ Ie({
    value: {
      type: Boolean,
      default: !1
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    enabledIcon: {
      type: Object,
      default: null
    },
    disabledIcon: {
      type: Object,
      default: null
    },
    enabledText: {
      type: String,
      default: null
    },
    disabledText: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    dataTest: {
      type: String,
      required: !0
    },
    showError: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: { required: !1, default: null, type: [Number, String] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = n, t = st(e, "modelValue"), i = () => {
      r("update:modelValue", !!t.value);
    };
    return Me(t, i), (a, o) => {
      var s, l;
      return D(), L(se, null, [
        X(te(zu), {
          as: "div",
          class: "tc-flex tc-items-center"
        }, {
          default: be(() => [
            e.disabledText ? (D(), me(te(Wn), {
              key: 0,
              as: "span",
              class: "tc-mr-3 tc-text-sm"
            }, {
              default: be(() => [
                M("span", {
                  "data-test": e.dataTest + "-disabled-text",
                  class: "tc-font-medium tc-text-gray-900"
                }, Q(e.disabledText), 9, Uu),
                o[1] || (o[1] = je(" " + Q(" "), -1))
              ]),
              _: 1
            })) : G("", !0),
            e.disabledIcon ? (D(), me(te(Wn), {
              key: 1,
              "data-test": e.dataTest + "-disabled-icon",
              as: "span",
              class: "tc-mr-3"
            }, {
              default: be(() => [
                (D(), me(un(e.disabledIcon), { class: "tc-h-6 tc-w-6 tc-cursor-pointer" })),
                o[2] || (o[2] = je(" " + Q(" "), -1))
              ]),
              _: 1
            }, 8, ["data-test"])) : G("", !0),
            X(te(Fu), {
              modelValue: t.value,
              "onUpdate:modelValue": o[0] || (o[0] = (c) => t.value = c),
              disabled: e.disabled,
              "data-test": e.dataTest + "-switch",
              class: pe([t.value ? "tc-bg-tonik-purple" : "tc-bg-gray-300", "tc-relative tc-inline-flex tc-h-6 tc-w-11 tc-flex-shrink-0 tc-cursor-pointer tc-rounded-full tc-border-2 tc-border-transparent tc-transition-colors tc-duration-200 tc-ease-in-out focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-tonik-purple focus:tc-ring-offset-2"]),
              onClick: i
            }, {
              default: be(() => [
                o[3] || (o[3] = M("span", { class: "sr-only" }, "Use setting", -1)),
                M("span", {
                  "aria-hidden": "true",
                  class: pe([t.value ? "tc-translate-x-5" : "tc-translate-x-0", "tc-pointer-events-none tc-inline-block tc-size-5 tc-transform tc-rounded-full tc-bg-white tc-shadow tc-ring-0 tc-transition tc-duration-200 tc-ease-in-out"])
                }, null, 2)
              ]),
              _: 1
            }, 8, ["modelValue", "disabled", "data-test", "class"]),
            e.enabledText ? (D(), me(te(Wn), {
              key: 2,
              as: "span",
              class: "tc-ml-3 tc-text-sm"
            }, {
              default: be(() => [
                M("span", {
                  "data-test": e.dataTest + "-enabled-text",
                  class: "tc-font-medium tc-text-gray-900"
                }, Q(e.enabledText), 9, _u),
                o[4] || (o[4] = je(" " + Q(" "), -1))
              ]),
              _: 1
            })) : G("", !0),
            e.enabledIcon ? (D(), me(te(Wn), {
              key: 3,
              "data-test": e.dataTest + "-enabled-icon",
              as: "span",
              class: "tc-ml-3"
            }, {
              default: be(() => [
                (D(), me(un(e.enabledIcon), { class: "tc-h-6 tc-w-6 tc-cursor-pointer" })),
                o[5] || (o[5] = je(" " + Q(" "), -1))
              ]),
              _: 1
            }, 8, ["data-test"])) : G("", !0)
          ]),
          _: 1
        }),
        e.showError && ((s = e.v) != null && s.$invalid) ? (D(), L("span", qu, [
          (D(!0), L(se, null, Ae((l = e.v) == null ? void 0 : l.$silentErrors, (c, d) => (D(), L("p", {
            key: d,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-email-error" + c.$uid,
              class: "tc-font-medium"
            }, Q(c.$message), 9, Zu)
          ]))), 128))
        ])) : G("", !0)
      ], 64);
    };
  }
}, Ku = ["id", "disabled", "data-test"], Gu = ["for", "data-test"], Xu = {
  key: 0,
  class: "tc-text-red-500"
}, Ju = { key: 1 }, Qu = ["data-test"], Xa = {
  __name: "InputCheckbox",
  props: /* @__PURE__ */ Ie({
    label: {
      type: String,
      default: null,
      required: !1
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    dataTest: {
      type: String,
      required: !0
    },
    showError: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: { type: Boolean, default: null, required: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue", "clicked"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = st(e, "modelValue"), t = n, i = () => {
      t("clicked", !r.value);
    };
    return Me(r, () => {
      t("update:modelValue", r.value);
    }), (o, s) => {
      var l, c, d;
      return D(), L(se, null, [
        Ce(M("input", {
          id: e.dataTest + "checkbox-label",
          "onUpdate:modelValue": s[0] || (s[0] = (f) => r.value = f),
          disabled: e.disabled,
          type: "checkbox",
          "data-test": e.dataTest + "-option",
          class: "tc-size-4 tc-rounded tc-border-gray-300 tc-text-tp-primary focus:tc-ring-tonik-purple",
          onClick: i
        }, null, 8, Ku), [
          [Lo, r.value]
        ]),
        e.label ? (D(), L("label", {
          key: 0,
          for: e.dataTest + "checkbox-label",
          "data-test": e.dataTest + "-label",
          class: "tc-font-medium tc-text-gray-900 tc-ml-2"
        }, [
          je(Q(e.label) + " ", 1),
          (l = e.v) != null && l.required ? (D(), L("span", Xu, "*")) : G("", !0)
        ], 8, Gu)) : G("", !0),
        e.showError && ((c = e.v) != null && c.$invalid) ? (D(), L("span", Ju, [
          (D(!0), L(se, null, Ae((d = e.v) == null ? void 0 : d.$silentErrors, (f, u) => (D(), L("p", {
            key: u,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              class: "tc-font-medium",
              "data-test": e.dataTest + "-email-error" + f.$uid
            }, Q(f.$message), 9, Qu)
          ]))), 128))
        ])) : G("", !0)
      ], 64);
    };
  }
}, ec = {
  key: 0,
  class: "tc-text-base tc-font-semibold tc-leading-6 tc-text-gray-900"
}, tc = { class: "tc-mt-6 tc-space-y-6" }, nc = { class: "tc-flex tc-h-6 tc-items-center" }, rc = ["id", "data-test", "value"], ac = { class: "tc-text-base tc-leading-6" }, oc = ["data-test", "for"], ic = ["data-test"], sc = { key: 0 }, lc = ["data-test"], yg = {
  __name: "InputCheckboxGroup",
  props: /* @__PURE__ */ Ie({
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: null,
      required: !1
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    dataTest: {
      type: String,
      required: !0
    },
    showError: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: { default: null, required: !1, type: Array },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = st(e, "modelValue"), t = n;
    return Me(r, () => {
      t("update:modelValue", r.value);
    }), (a, o) => {
      var s, l;
      return D(), L("div", null, [
        M("fieldset", null, [
          e.label ? (D(), L("legend", ec)) : G("", !0),
          M("div", tc, [
            (D(!0), L(se, null, Ae(e.options, (c, d) => (D(), L("div", {
              key: d,
              class: "tc-relative tc-flex tc-gap-x-3"
            }, [
              M("div", nc, [
                Ce(M("input", {
                  id: c.value,
                  "onUpdate:modelValue": o[0] || (o[0] = (f) => r.value = f),
                  "data-test": e.dataTest + "-option-" + d,
                  value: c.value,
                  class: "tc-h-4 tc-w-4 tc-rounded tc-border-gray-300 tc-text-tp-primary focus:tc-ring-tonik-purple",
                  type: "checkbox"
                }, null, 8, rc), [
                  [Lo, r.value]
                ])
              ]),
              M("div", ac, [
                M("label", {
                  "data-test": e.dataTest + "-label-" + d,
                  for: c.index + "-label",
                  class: "tc-font-medium tc-text-gray-900"
                }, Q(c.label), 9, oc),
                c.description ? (D(), L("p", {
                  key: 0,
                  "data-test": e.dataTest + "-description-" + d,
                  class: "tc-text-gray-500"
                }, Q(c.description), 9, ic)) : G("", !0)
              ])
            ]))), 128))
          ])
        ]),
        e.showError && ((s = e.v) != null && s.$invalid) ? (D(), L("span", sc, [
          (D(!0), L(se, null, Ae((l = e.v) == null ? void 0 : l.$silentErrors, (c, d) => (D(), L("p", {
            key: d,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-email-error" + c.$uid,
              class: "tc-font-medium"
            }, Q(c.$message), 9, lc)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}, uc = ["data-test"], cc = ["data-test"], dc = { class: "tc-mt-6 tc-space-y-6" }, fc = ["id", "data-test", "value"], hc = ["data-test", "for"], pc = { key: 0 }, vc = ["data-test"], bg = {
  __name: "InputRadio",
  props: /* @__PURE__ */ Ie({
    options: {
      type: Array,
      default: () => []
    },
    legend: {
      type: String,
      required: !1,
      default: null
    },
    description: {
      type: String,
      required: !1,
      default: null
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    dataTest: {
      type: String,
      required: !0
    },
    showError: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: { default: null, type: Array, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = st(e, "modelValue"), t = n, i = () => {
      t("update:modelValue", r.value);
    };
    return Me(r, i), (a, o) => (D(), L("fieldset", null, [
      e.legend ? (D(), L("legend", {
        key: 0,
        "data-test": e.dataTest + "-legend",
        class: "tc-text-base tc-font-semibold tc-leading-6 tc-text-gray-900"
      }, Q(e.legend), 9, uc)) : G("", !0),
      e.description ? (D(), L("p", {
        key: 1,
        "data-test": e.dataTest + "-description",
        class: "tc-mt-1 tc-text-base tc-leading-6 tc-text-gray-600"
      }, Q(e.description), 9, cc)) : G("", !0),
      M("div", dc, [
        (D(!0), L(se, null, Ae(e.options, (s, l) => {
          var c, d;
          return D(), L("div", {
            key: l,
            class: "tc-flex tc-items-center tc-gap-x-3"
          }, [
            Ce(M("input", {
              id: s.value,
              "onUpdate:modelValue": o[0] || (o[0] = (f) => r.value = f),
              "data-test": e.dataTest + "-input-" + l,
              value: s.value,
              class: "tc-h-4 tc-w-4 tc-border-gray-300 tc-text-tp-primary focus:tc-ring-tonik-purple",
              type: "radio",
              onChange: i
            }, null, 40, fc), [
              [Qs, r.value]
            ]),
            M("label", {
              "data-test": e.dataTest + "-label-" + l,
              for: s.value,
              class: "tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900"
            }, Q(s.label), 9, hc),
            e.showError && ((c = e.v) != null && c.$invalid) ? (D(), L("span", pc, [
              (D(!0), L(se, null, Ae((d = e.v) == null ? void 0 : d.$silentErrors, (f, u) => (D(), L("p", {
                key: u,
                class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
              }, [
                M("span", {
                  "data-test": e.dataTest + "-email-error" + f.$uid,
                  class: "tc-font-medium"
                }, Q(f.$message), 9, vc)
              ]))), 128))
            ])) : G("", !0)
          ]);
        }), 128))
      ])
    ]));
  }
};
function mc(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function gc(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function yc(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function bc(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function wc(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function xc(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function $c(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", { d: "M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z" })
  ]);
}
function kc(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", { d: "M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" })
  ]);
}
function Sc(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Mc(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const Dc = { class: "tc-flex" }, Ec = { class: "tc-flex-shrink-0" }, Ac = { class: "tc-ml-3" }, Tc = {
  key: 0,
  class: "tc-ml-auto tc-pl-3"
}, Pc = { class: "-tc-mx-1.5 -tc-my-1.5" }, mi = {
  __name: "AlertDialog",
  props: {
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "success"
    },
    close: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const r = n, t = () => {
      r("close");
    };
    return (i, a) => (D(), L("div", {
      class: pe(["tc-rounded-md tc-p-4", {
        "tc-bg-yellow-50": e.type === "warning",
        "tc-bg-green-2": e.type === "success",
        "tc-bg-error-light": e.type === "error",
        "tc-bg-info": e.type === "primary"
      }])
    }, [
      M("div", Dc, [
        M("div", Ec, [
          e.type === "success" ? (D(), me(te(gc), {
            key: 0,
            class: "tc-size-5 tc-text-success",
            "aria-hidden": "true"
          })) : G("", !0),
          e.type === "warning" ? (D(), me(te(wc), {
            key: 1,
            class: "tc-size-5 tc-text-yellow-400",
            "aria-hidden": "true"
          })) : G("", !0),
          e.type === "error" ? (D(), me(te(Sc), {
            key: 2,
            class: "tc-size-5 tc-text-error",
            "aria-hidden": "true"
          })) : G("", !0),
          e.type === "primary" ? (D(), me(te(xc), {
            key: 3,
            class: "tc-size-5 tc-text-tendo-blue",
            "aria-hidden": "true"
          })) : G("", !0)
        ]),
        M("div", Ac, [
          M("p", {
            class: pe(["tc-text-base tc-font-medium", {
              "tc-text-yellow-700": e.type === "warning",
              "tc-text-success": e.type === "success",
              "tc-text-error": e.type === "error",
              "tc-text-tendo-blue": e.type === "primary"
            }])
          }, Q(e.message), 3),
          Ee(i.$slots, "default", { class: "tc-mt-2 tc-text-base" })
        ]),
        e.close ? (D(), L("div", Tc, [
          M("div", Pc, [
            M("button", {
              type: "button",
              class: "tc-inline-flex tc-rounded-md tc-bg-green-2 tc-p-1.5 tc-text-success hover:tc-bg-green-100 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-green-600 focus:tc-ring-offset-2 focus:tc-ring-offset-green-50",
              onClick: t
            }, [
              a[0] || (a[0] = M("span", { class: "tc-sr-only" }, "Dismiss", -1)),
              X(te(Mc), {
                class: "tc-size-5",
                "aria-hidden": "true"
              })
            ])
          ])
        ])) : G("", !0)
      ])
    ], 2));
  }
}, Oc = { class: "tc-relative" }, Cc = ["for"], Lc = { class: "tc-flex tc-rounded-md tc-shadow-sm tc-py-2" }, Rc = { class: "tc-relative tc-flex tc-flex-grow tc-items-stretch focus-within:tc-z-10" }, Ic = ["id", "data-test", "type", "value"], zc = ["data-test"], Fc = ["data-test"], wg = {
  __name: "InputCopy",
  props: {
    value: {
      type: String,
      default: ""
    },
    hide: {
      type: Boolean,
      default: !1
    },
    dataTest: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: null,
      required: !1
    },
    resultMessage: {
      type: String,
      default: "Copied"
    }
  },
  emits: ["copy"],
  setup(e, { emit: n }) {
    const r = n, t = xn({
      secretHidden: !0,
      copied: !1,
      timeoutObj: null
    }), i = j(() => (t.copied && (t.timeoutObj = setTimeout(() => t.copied = !1, 800)), !!t.copied)), a = e;
    function o() {
      navigator.clipboard.writeText(a.value), r("copy"), t.copied = !0;
    }
    function s() {
      t.secretHidden = !t.secretHidden;
    }
    return (l, c) => (D(), L(se, null, [
      M("div", Oc, [
        e.label ? (D(), L("label", {
          key: 0,
          for: e.dataTest,
          class: "tc-block tc-text-base tc-font-medium tc-leading-6 tc-text-gray-900"
        }, Q(e.label), 9, Cc)) : G("", !0),
        M("div", Lc, [
          M("div", Rc, [
            M("input", {
              id: e.dataTest,
              "data-test": e.dataTest + "-input",
              type: e.hide && t.secretHidden ? "password" : "text",
              value: e.value,
              class: "tc-block tc-w-full focus:tc-ring-tonik-purple tc-rounded-none tc-rounded-l-md tc-border-0 tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-gray-300 placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset sm:tc-text-sm sm:tc-leading-6",
              name: "text",
              readonly: ""
            }, null, 8, Ic)
          ]),
          M("button", {
            class: pe([{ "tc-rounded-r-md": !e.hide }, "tc-relative -tc-ml-px tc-inline-flex tc-items-center tc-gap-x-1.5 tc-px-3 tc-py-2 tc-text-base tc-font-semibold tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-tonik-purple hover:tc-bg-gray-50"]),
            "data-test": e.dataTest + "-copy-button",
            type: "button",
            onClick: o
          }, [
            X(te(nl), {
              class: "-tc-ml-0.5 tc-size-5 tc-text-tonik-purple",
              "aria-hidden": "true"
            })
          ], 10, zc),
          e.hide ? (D(), L("button", {
            key: 0,
            "data-test": e.dataTest + "-toggle-button",
            class: "tc-relative -tc-ml-px tc-inline-flex tc-items-center tc-gap-x-1.5 tc-rounded-r-md tc-px-3 tc-py-2 tc-text-sm tc-font-semibold tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-tonik-purple hover:tc-bg-gray-50",
            type: "button",
            onClick: s
          }, [
            X(te(rl), {
              class: "-tc-ml-0.5 tc-size-5 tc-text-tonik-purple",
              "aria-hidden": "true"
            })
          ], 8, Fc)) : G("", !0)
        ])
      ]),
      i.value ? (D(), me(mi, {
        key: 0,
        message: a.resultMessage,
        class: "tc-mt-2 tc-mb-2",
        type: "success"
      }, null, 8, ["message"])) : G("", !0)
    ], 64));
  }
}, Yc = ["data-test"], jc = {
  key: 0,
  class: "tc-text-red-500"
}, Bc = { class: "tc-relative tc-mt-2" }, Vc = ["data-test", "disabled", "maxlength", "placeholder", "readonly"], Nc = {
  key: 1,
  class: "block tc-mb-2"
}, Hc = ["data-test"], Wc = {
  key: 0,
  class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
}, Uc = ["data-test"], _c = {
  key: 1,
  class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
}, qc = ["data-test"], xg = {
  __name: "InputTextarea",
  props: /* @__PURE__ */ Ie({
    label: {
      type: String,
      default: null,
      required: !1
    },
    value: {
      type: String,
      default: null,
      required: !1
    },
    placeholder: {
      type: String,
      default: null,
      required: !1
    },
    maxLength: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    showError: {
      type: Boolean,
      default: !0
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    dataTest: {
      type: String,
      required: !0
    }
  }, {
    modelValue: { type: String, default: null, required: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = st(e, "modelValue"), t = n, i = () => {
      t("update:modelValue", r.value);
    };
    return Me(r, i), (a, o) => {
      var s, l, c, d, f, u, h, p, m, v, g, b;
      return D(), L("div", null, [
        e.label ? (D(), L("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          class: "tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900",
          for: "input-textarea"
        }, [
          je(Q(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (D(), L("span", jc, "*")) : G("", !0)
        ], 8, Yc)) : G("", !0),
        M("div", Bc, [
          Ce(M("textarea", {
            id: "input-textarea",
            "onUpdate:modelValue": o[0] || (o[0] = (k) => r.value = k),
            class: pe(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6", {
              "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
              "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((c = e.v) != null && c.$invalid),
              disabled: e.disabled
            }]),
            "data-test": e.dataTest + "-textarea",
            disabled: e.disabled,
            maxlength: e.maxLength,
            placeholder: e.placeholder,
            readonly: e.readonly,
            name: "comment",
            rows: "4",
            onInput: i
          }, null, 42, Vc), [
            [Vt, r.value]
          ]),
          (d = e.v) != null && d.$invalid ? (D(), L("div", {
            key: 0,
            class: pe(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
          }, [
            X(te(hn), { class: "tc-size-5 tc-text-red-500" })
          ], 2)) : G("", !0)
        ]),
        e.showError && ((f = e.v) != null && f.$invalid) ? (D(), L("span", Nc, [
          (D(!0), L(se, null, Ae((u = e.v) == null ? void 0 : u.$silentErrors, (k, P) => (D(), L("p", {
            key: P,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-email-error" + k.$uid,
              class: "tc-font-medium"
            }, Q(k.$message), 9, Hc)
          ]))), 128)),
          (p = (h = e.v) == null ? void 0 : h.maxLength) != null && p.$invalid ? (D(), L("p", Wc, [
            M("span", {
              "data-test": e.dataTest + "-maxLength-error",
              class: "tc-font-medium"
            }, Q((m = e.v) == null ? void 0 : m.maxLength.$message), 9, Uc)
          ])) : G("", !0),
          (g = (v = e.v) == null ? void 0 : v.minLength) != null && g.$invalid ? (D(), L("p", _c, [
            M("span", {
              "data-test": e.dataTest + "-minLength-error",
              class: "tc-font-medium"
            }, Q((b = e.v) == null ? void 0 : b.minLength.$message), 9, qc)
          ])) : G("", !0)
        ])) : G("", !0)
      ]);
    };
  }
}, Sa = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [t, i] of n)
    r[t] = i;
  return r;
}, Zc = { class: "tc-relative" }, Kc = ["data-test", "for"], Gc = {
  key: 0,
  class: "tc-text-red-500"
}, Xc = { class: "tc-relative tc-rounded-md tc-shadow-sm" }, Jc = { class: "tc-absolute tc-inset-y-0 tc-left-0 tc-flex tc-items-center" }, Qc = ["disabled", "data-test"], ed = ["data-test"], td = ["id", "disabled", "placeholder", "data-test"], nd = {
  key: 2,
  class: "block tc-mb-2"
}, rd = ["data-test"], ad = {
  __name: "InputUrl",
  props: /* @__PURE__ */ Ie({
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: "example.com"
    },
    v: {
      type: Object,
      default: () => null
    },
    dataTest: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    showError: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: { type: String, required: !1, default: null },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = F(""), t = F("https"), i = st(e, "modelValue"), a = [
      "https",
      "http"
    ], o = n, s = j(() => `${t.value}://${r.value}`), l = () => {
      i != null && i.value && (t.value = i.value.startsWith("https") ? "https" : "http", r.value = i.value.replace(/^https?:\/\//, ""));
    };
    return l(), Me(i, () => {
      l();
    }), Me([t, r], () => {
      if (r.value.length === 0) {
        o("update:modelValue", null);
        return;
      }
      o("update:modelValue", s.value);
    }), (c, d) => {
      var f, u, h, p, m, v;
      return D(), L("div", Zc, [
        e.label ? (D(), L("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          for: e.dataTest,
          class: "tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900 tc-mb-2"
        }, [
          je(Q(e.label) + " ", 1),
          (f = e.v) != null && f.required ? (D(), L("span", Gc, "*")) : G("", !0)
        ], 8, Kc)) : G("", !0),
        M("div", Xc, [
          M("div", Jc, [
            Ce(M("select", {
              "onUpdate:modelValue": d[0] || (d[0] = (g) => t.value = g),
              disabled: e.disabled,
              name: "type",
              autocomplete: "type",
              "data-test": e.dataTest + "-select-type",
              class: "tc-h-full tc-rounded-md tc-border-0 tc-bg-transparent tc-pl-3 tc-pr-12 tc-text-gray-500 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple sm:tc-text-sm"
            }, [
              (D(), L(se, null, Ae(a, (g, b) => M("option", {
                key: b,
                "data-test": e.dataTest + "-option-" + b
              }, Q(g), 9, ed)), 64))
            ], 8, Qc), [
              [Ro, t.value]
            ])
          ]),
          Ce(M("input", {
            id: e.dataTest,
            "onUpdate:modelValue": d[1] || (d[1] = (g) => r.value = g),
            disabled: e.disabled,
            type: "text",
            name: "url",
            class: pe(["input-offset tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-gray-300 placeholder:tc-text-gray-400 sm:tc-text-sm sm:tc-leading-6", {
              "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (u = e.v) == null ? void 0 : u.$invalid,
              "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((h = e.v) != null && h.$invalid),
              disabled: e.disabled
            }]),
            placeholder: e.placeholder,
            "data-test": e.dataTest + "-input"
          }, null, 10, td), [
            [Vt, r.value]
          ])
        ]),
        (p = e.v) != null && p.$invalid ? (D(), L("div", {
          key: 1,
          class: pe(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
        }, [
          X(te(hn), { class: "tc-size-5 tc-text-red-500" })
        ], 2)) : G("", !0),
        e.showError && ((m = e.v) != null && m.$invalid) ? (D(), L("span", nd, [
          (D(!0), L(se, null, Ae((v = e.v) == null ? void 0 : v.$silentErrors, (g, b) => (D(), L("p", {
            key: b,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-url-error" + g.$uid,
              class: "tc-font-medium"
            }, Q(g.$message), 9, rd)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}, $g = /* @__PURE__ */ Sa(ad, [["__scopeId", "data-v-6ff60168"]]), od = {
  key: 0,
  class: "tc-block tc-text-base tc-font-medium tc-leading-6 tc-text-gray-900",
  for: "price"
}, id = {
  key: 0,
  class: "tc-text-red-500"
}, sd = { class: "tc-relative tc-rounded-md tc-shadow-sm" }, ld = ["disabled", "max", "min", "placeholder", "step"], ud = { class: "tc-pointer-events-none tc-absolute tc-inset-y-0 tc-right-0 tc-flex tc-items-center tc-pr-3" }, cd = {
  id: "price-currency",
  class: "tc-text-gray-500 sm:tc-text-sm"
}, dd = {
  key: 0,
  class: "tc-absolute tc-right-16 tc-top-2"
}, fd = {
  key: 1,
  class: "block tc-mb-2"
}, hd = ["data-test"], kg = {
  __name: "InputCurrency",
  props: /* @__PURE__ */ Ie({
    currency: {
      type: String,
      default: "PHP"
    },
    label: {
      type: String,
      required: !1,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      required: !1,
      default: null
    },
    dataTest: {
      type: String,
      required: !0
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: 0.01
    },
    showError: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: { type: [Number, String], default: null, required: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = st(e, "modelValue"), t = e, i = n;
    return Me(r, () => {
      i("update:modelValue", r.value);
    }), (o, s) => {
      var l, c, d, f, u;
      return D(), L("div", null, [
        t.label ? (D(), L("label", od, [
          Ee(o.$slots, "label", {}, () => {
            var h;
            return [
              je(Q(e.label) + " ", 1),
              (h = e.v) != null && h.required ? (D(), L("span", id, "*")) : G("", !0)
            ];
          })
        ])) : G("", !0),
        M("div", sd, [
          Ce(M("input", {
            id: "price",
            "onUpdate:modelValue": s[0] || (s[0] = (h) => r.value = h),
            disabled: e.disabled,
            max: e.max,
            min: e.min,
            placeholder: e.placeholder,
            step: e.step,
            "aria-describedby": "price-currency",
            class: pe(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-pl-7 tc-pr-12 tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-gray-300 placeholder:tc-text-gray-400 sm:tc-text-sm sm:tc-leading-6", {
              "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
              "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((c = e.v) != null && c.$invalid),
              disabled: e.disabled
            }]),
            name: "price",
            type: "number"
          }, null, 10, ld), [
            [Vt, r.value]
          ]),
          M("div", ud, [
            M("span", cd, Q(t.currency), 1)
          ]),
          (d = e.v) != null && d.$invalid ? (D(), L("div", dd, [
            X(te(hn), { class: "tc-size-5 tc-text-red-500" })
          ])) : G("", !0)
        ]),
        e.showError && ((f = e.v) != null && f.$invalid) ? (D(), L("span", fd, [
          (D(!0), L(se, null, Ae((u = e.v) == null ? void 0 : u.$silentErrors, (h, p) => (D(), L("p", {
            key: p,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-email-error" + h.$uid,
              class: "tc-font-medium"
            }, Q(h.$message), 9, hd)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
};
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ut(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gi = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Wt, function() {
    var r = 1e3, t = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", l = "hour", c = "day", d = "week", f = "month", u = "quarter", h = "year", p = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(y) {
      var A = ["th", "st", "nd", "rd"], E = y % 100;
      return "[" + y + (A[(E - 20) % 10] || A[E] || A[0]) + "]";
    } }, k = function(y, A, E) {
      var R = String(y);
      return !R || R.length >= A ? y : "" + Array(A + 1 - R.length).join(E) + y;
    }, P = { s: k, z: function(y) {
      var A = -y.utcOffset(), E = Math.abs(A), R = Math.floor(E / 60), T = E % 60;
      return (A <= 0 ? "+" : "-") + k(R, 2, "0") + ":" + k(T, 2, "0");
    }, m: function y(A, E) {
      if (A.date() < E.date()) return -y(E, A);
      var R = 12 * (E.year() - A.year()) + (E.month() - A.month()), T = A.clone().add(R, f), B = E - T < 0, N = A.clone().add(R + (B ? -1 : 1), f);
      return +(-(R + (E - T) / (B ? T - N : N - T)) || 0);
    }, a: function(y) {
      return y < 0 ? Math.ceil(y) || 0 : Math.floor(y);
    }, p: function(y) {
      return { M: f, y: h, w: d, d: c, D: p, h: l, m: s, s: o, ms: a, Q: u }[y] || String(y || "").toLowerCase().replace(/s$/, "");
    }, u: function(y) {
      return y === void 0;
    } }, $ = "en", S = {};
    S[$] = b;
    var w = "$isDayjsObject", x = function(y) {
      return y instanceof Z || !(!y || !y[w]);
    }, I = function y(A, E, R) {
      var T;
      if (!A) return $;
      if (typeof A == "string") {
        var B = A.toLowerCase();
        S[B] && (T = B), E && (S[B] = E, T = B);
        var N = A.split("-");
        if (!T && N.length > 1) return y(N[0]);
      } else {
        var z = A.name;
        S[z] = A, T = z;
      }
      return !R && T && ($ = T), T || !R && $;
    }, O = function(y, A) {
      if (x(y)) return y.clone();
      var E = typeof A == "object" ? A : {};
      return E.date = y, E.args = arguments, new Z(E);
    }, C = P;
    C.l = I, C.i = x, C.w = function(y, A) {
      return O(y, { locale: A.$L, utc: A.$u, x: A.$x, $offset: A.$offset });
    };
    var Z = function() {
      function y(E) {
        this.$L = I(E.locale, null, !0), this.parse(E), this.$x = this.$x || E.x || {}, this[w] = !0;
      }
      var A = y.prototype;
      return A.parse = function(E) {
        this.$d = function(R) {
          var T = R.date, B = R.utc;
          if (T === null) return /* @__PURE__ */ new Date(NaN);
          if (C.u(T)) return /* @__PURE__ */ new Date();
          if (T instanceof Date) return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var N = T.match(v);
            if (N) {
              var z = N[2] - 1 || 0, _ = (N[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(N[1], z, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, _)) : new Date(N[1], z, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, _);
            }
          }
          return new Date(T);
        }(E), this.init();
      }, A.init = function() {
        var E = this.$d;
        this.$y = E.getFullYear(), this.$M = E.getMonth(), this.$D = E.getDate(), this.$W = E.getDay(), this.$H = E.getHours(), this.$m = E.getMinutes(), this.$s = E.getSeconds(), this.$ms = E.getMilliseconds();
      }, A.$utils = function() {
        return C;
      }, A.isValid = function() {
        return this.$d.toString() !== m;
      }, A.isSame = function(E, R) {
        var T = O(E);
        return this.startOf(R) <= T && T <= this.endOf(R);
      }, A.isAfter = function(E, R) {
        return O(E) < this.startOf(R);
      }, A.isBefore = function(E, R) {
        return this.endOf(R) < O(E);
      }, A.$g = function(E, R, T) {
        return C.u(E) ? this[R] : this.set(T, E);
      }, A.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, A.valueOf = function() {
        return this.$d.getTime();
      }, A.startOf = function(E, R) {
        var T = this, B = !!C.u(R) || R, N = C.p(E), z = function(De, ue) {
          var we = C.w(T.$u ? Date.UTC(T.$y, ue, De) : new Date(T.$y, ue, De), T);
          return B ? we : we.endOf(c);
        }, _ = function(De, ue) {
          return C.w(T.toDate()[De].apply(T.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), T);
        }, K = this.$W, ee = this.$M, ce = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case h:
            return B ? z(1, 0) : z(31, 11);
          case f:
            return B ? z(1, ee) : z(0, ee + 1);
          case d:
            var $e = this.$locale().weekStart || 0, Be = (K < $e ? K + 7 : K) - $e;
            return z(B ? ce - Be : ce + (6 - Be), ee);
          case c:
          case p:
            return _(xe + "Hours", 0);
          case l:
            return _(xe + "Minutes", 1);
          case s:
            return _(xe + "Seconds", 2);
          case o:
            return _(xe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, A.endOf = function(E) {
        return this.startOf(E, !1);
      }, A.$set = function(E, R) {
        var T, B = C.p(E), N = "set" + (this.$u ? "UTC" : ""), z = (T = {}, T[c] = N + "Date", T[p] = N + "Date", T[f] = N + "Month", T[h] = N + "FullYear", T[l] = N + "Hours", T[s] = N + "Minutes", T[o] = N + "Seconds", T[a] = N + "Milliseconds", T)[B], _ = B === c ? this.$D + (R - this.$W) : R;
        if (B === f || B === h) {
          var K = this.clone().set(p, 1);
          K.$d[z](_), K.init(), this.$d = K.set(p, Math.min(this.$D, K.daysInMonth())).$d;
        } else z && this.$d[z](_);
        return this.init(), this;
      }, A.set = function(E, R) {
        return this.clone().$set(E, R);
      }, A.get = function(E) {
        return this[C.p(E)]();
      }, A.add = function(E, R) {
        var T, B = this;
        E = Number(E);
        var N = C.p(R), z = function(ee) {
          var ce = O(B);
          return C.w(ce.date(ce.date() + Math.round(ee * E)), B);
        };
        if (N === f) return this.set(f, this.$M + E);
        if (N === h) return this.set(h, this.$y + E);
        if (N === c) return z(1);
        if (N === d) return z(7);
        var _ = (T = {}, T[s] = t, T[l] = i, T[o] = r, T)[N] || 1, K = this.$d.getTime() + E * _;
        return C.w(K, this);
      }, A.subtract = function(E, R) {
        return this.add(-1 * E, R);
      }, A.format = function(E) {
        var R = this, T = this.$locale();
        if (!this.isValid()) return T.invalidDate || m;
        var B = E || "YYYY-MM-DDTHH:mm:ssZ", N = C.z(this), z = this.$H, _ = this.$m, K = this.$M, ee = T.weekdays, ce = T.months, xe = T.meridiem, $e = function(ue, we, Oe, ze) {
          return ue && (ue[we] || ue(R, B)) || Oe[we].slice(0, ze);
        }, Be = function(ue) {
          return C.s(z % 12 || 12, ue, "0");
        }, De = xe || function(ue, we, Oe) {
          var ze = ue < 12 ? "AM" : "PM";
          return Oe ? ze.toLowerCase() : ze;
        };
        return B.replace(g, function(ue, we) {
          return we || function(Oe) {
            switch (Oe) {
              case "YY":
                return String(R.$y).slice(-2);
              case "YYYY":
                return C.s(R.$y, 4, "0");
              case "M":
                return K + 1;
              case "MM":
                return C.s(K + 1, 2, "0");
              case "MMM":
                return $e(T.monthsShort, K, ce, 3);
              case "MMMM":
                return $e(ce, K);
              case "D":
                return R.$D;
              case "DD":
                return C.s(R.$D, 2, "0");
              case "d":
                return String(R.$W);
              case "dd":
                return $e(T.weekdaysMin, R.$W, ee, 2);
              case "ddd":
                return $e(T.weekdaysShort, R.$W, ee, 3);
              case "dddd":
                return ee[R.$W];
              case "H":
                return String(z);
              case "HH":
                return C.s(z, 2, "0");
              case "h":
                return Be(1);
              case "hh":
                return Be(2);
              case "a":
                return De(z, _, !0);
              case "A":
                return De(z, _, !1);
              case "m":
                return String(_);
              case "mm":
                return C.s(_, 2, "0");
              case "s":
                return String(R.$s);
              case "ss":
                return C.s(R.$s, 2, "0");
              case "SSS":
                return C.s(R.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(ue) || N.replace(":", "");
        });
      }, A.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, A.diff = function(E, R, T) {
        var B, N = this, z = C.p(R), _ = O(E), K = (_.utcOffset() - this.utcOffset()) * t, ee = this - _, ce = function() {
          return C.m(N, _);
        };
        switch (z) {
          case h:
            B = ce() / 12;
            break;
          case f:
            B = ce();
            break;
          case u:
            B = ce() / 3;
            break;
          case d:
            B = (ee - K) / 6048e5;
            break;
          case c:
            B = (ee - K) / 864e5;
            break;
          case l:
            B = ee / i;
            break;
          case s:
            B = ee / t;
            break;
          case o:
            B = ee / r;
            break;
          default:
            B = ee;
        }
        return T ? B : C.a(B);
      }, A.daysInMonth = function() {
        return this.endOf(f).$D;
      }, A.$locale = function() {
        return S[this.$L];
      }, A.locale = function(E, R) {
        if (!E) return this.$L;
        var T = this.clone(), B = I(E, R, !0);
        return B && (T.$L = B), T;
      }, A.clone = function() {
        return C.w(this.$d, this);
      }, A.toDate = function() {
        return new Date(this.valueOf());
      }, A.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, A.toISOString = function() {
        return this.$d.toISOString();
      }, A.toString = function() {
        return this.$d.toUTCString();
      }, y;
    }(), Y = Z.prototype;
    return O.prototype = Y, [["$ms", a], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", h], ["$D", p]].forEach(function(y) {
      Y[y[1]] = function(A) {
        return this.$g(A, y[0], y[1]);
      };
    }), O.extend = function(y, A) {
      return y.$i || (y(A, Z, O), y.$i = !0), O;
    }, O.locale = I, O.isDayjs = x, O.unix = function(y) {
      return O(1e3 * y);
    }, O.en = S[$], O.Ls = S, O.p = {}, O;
  });
})(gi);
var pd = gi.exports;
const V = /* @__PURE__ */ Ut(pd);
var yi = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Wt, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
    return function(i, a, o) {
      var s, l = function(u, h, p) {
        p === void 0 && (p = {});
        var m = new Date(u), v = function(g, b) {
          b === void 0 && (b = {});
          var k = b.timeZoneName || "short", P = g + "|" + k, $ = t[P];
          return $ || ($ = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: g, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: k }), t[P] = $), $;
        }(h, p);
        return v.formatToParts(m);
      }, c = function(u, h) {
        for (var p = l(u, h), m = [], v = 0; v < p.length; v += 1) {
          var g = p[v], b = g.type, k = g.value, P = r[b];
          P >= 0 && (m[P] = parseInt(k, 10));
        }
        var $ = m[3], S = $ === 24 ? 0 : $, w = m[0] + "-" + m[1] + "-" + m[2] + " " + S + ":" + m[4] + ":" + m[5] + ":000", x = +u;
        return (o.utc(w).valueOf() - (x -= x % 1e3)) / 6e4;
      }, d = a.prototype;
      d.tz = function(u, h) {
        u === void 0 && (u = s);
        var p, m = this.utcOffset(), v = this.toDate(), g = v.toLocaleString("en-US", { timeZone: u }), b = Math.round((v - new Date(g)) / 1e3 / 60), k = 15 * -Math.round(v.getTimezoneOffset() / 15) - b;
        if (!Number(k)) p = this.utcOffset(0, h);
        else if (p = o(g, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(k, !0), h) {
          var P = p.utcOffset();
          p = p.add(m - P, "minute");
        }
        return p.$x.$timezone = u, p;
      }, d.offsetName = function(u) {
        var h = this.$x.$timezone || o.tz.guess(), p = l(this.valueOf(), h, { timeZoneName: u }).find(function(m) {
          return m.type.toLowerCase() === "timezonename";
        });
        return p && p.value;
      };
      var f = d.startOf;
      d.startOf = function(u, h) {
        if (!this.$x || !this.$x.$timezone) return f.call(this, u, h);
        var p = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return f.call(p, u, h).tz(this.$x.$timezone, !0);
      }, o.tz = function(u, h, p) {
        var m = p && h, v = p || h || s, g = c(+o(), v);
        if (typeof u != "string") return o(u).tz(v);
        var b = function(S, w, x) {
          var I = S - 60 * w * 1e3, O = c(I, x);
          if (w === O) return [I, w];
          var C = c(I -= 60 * (O - w) * 1e3, x);
          return O === C ? [I, O] : [S - 60 * Math.min(O, C) * 1e3, Math.max(O, C)];
        }(o.utc(u, m).valueOf(), g, v), k = b[0], P = b[1], $ = o(k).utcOffset(P);
        return $.$x.$timezone = v, $;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(u) {
        s = u;
      };
    };
  });
})(yi);
var vd = yi.exports;
const md = /* @__PURE__ */ Ut(vd);
var bi = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Wt, function() {
    return function(r, t, i) {
      var a = t.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, s = function(f, u, h, p, m) {
        var v = f.name ? f : f.$locale(), g = o(v[u]), b = o(v[h]), k = g || b.map(function($) {
          return $.slice(0, p);
        });
        if (!m) return k;
        var P = v.weekStart;
        return k.map(function($, S) {
          return k[(S + (P || 0)) % 7];
        });
      }, l = function() {
        return i.Ls[i.locale()];
      }, c = function(f, u) {
        return f.formats[u] || function(h) {
          return h.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(p, m, v) {
            return m || v.slice(1);
          });
        }(f.formats[u.toUpperCase()]);
      }, d = function() {
        var f = this;
        return { months: function(u) {
          return u ? u.format("MMMM") : s(f, "months");
        }, monthsShort: function(u) {
          return u ? u.format("MMM") : s(f, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return f.$locale().weekStart || 0;
        }, weekdays: function(u) {
          return u ? u.format("dddd") : s(f, "weekdays");
        }, weekdaysMin: function(u) {
          return u ? u.format("dd") : s(f, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(u) {
          return u ? u.format("ddd") : s(f, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(u) {
          return c(f.$locale(), u);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      a.localeData = function() {
        return d.bind(this)();
      }, i.localeData = function() {
        var f = l();
        return { firstDayOfWeek: function() {
          return f.weekStart || 0;
        }, weekdays: function() {
          return i.weekdays();
        }, weekdaysShort: function() {
          return i.weekdaysShort();
        }, weekdaysMin: function() {
          return i.weekdaysMin();
        }, months: function() {
          return i.months();
        }, monthsShort: function() {
          return i.monthsShort();
        }, longDateFormat: function(u) {
          return c(f, u);
        }, meridiem: f.meridiem, ordinal: f.ordinal };
      }, i.months = function() {
        return s(l(), "months");
      }, i.monthsShort = function() {
        return s(l(), "monthsShort", "months", 3);
      }, i.weekdays = function(f) {
        return s(l(), "weekdays", null, null, f);
      }, i.weekdaysShort = function(f) {
        return s(l(), "weekdaysShort", "weekdays", 3, f);
      }, i.weekdaysMin = function(f) {
        return s(l(), "weekdaysMin", "weekdays", 2, f);
      };
    };
  });
})(bi);
var gd = bi.exports;
const yd = /* @__PURE__ */ Ut(gd);
var wi = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Wt, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, i, a) {
      var o = i.prototype, s = o.format;
      a.en.formats = r, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, d = function(f, u) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, p, m) {
            var v = m && m.toUpperCase();
            return p || u[m] || r[m] || u[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, b, k) {
              return b || k.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, d);
      };
    };
  });
})(wi);
var bd = wi.exports;
const wd = /* @__PURE__ */ Ut(bd);
var xi = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Wt, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(g) {
        this[v] = +g;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(g) {
        if (!g || g === "Z") return 0;
        var b = g.match(/([+-]|\d\d)/g), k = 60 * b[1] + (+b[2] || 0);
        return k === 0 ? 0 : b[0] === "+" ? -k : k;
      }(v);
    }], u = function(v) {
      var g = l[v];
      return g && (g.indexOf ? g : g.s.concat(g.f));
    }, h = function(v, g) {
      var b, k = l.meridiem;
      if (k) {
        for (var P = 1; P <= 24; P += 1) if (v.indexOf(k(P, 0, g)) > -1) {
          b = P > 12;
          break;
        }
      } else b = v === (g ? "pm" : "PM");
      return b;
    }, p = { A: [s, function(v) {
      this.afternoon = h(v, !1);
    }], a: [s, function(v) {
      this.afternoon = h(v, !0);
    }], Q: [i, function(v) {
      this.month = 3 * (v - 1) + 1;
    }], S: [i, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [a, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [o, d("seconds")], ss: [o, d("seconds")], m: [o, d("minutes")], mm: [o, d("minutes")], H: [o, d("hours")], h: [o, d("hours")], HH: [o, d("hours")], hh: [o, d("hours")], D: [o, d("day")], DD: [a, d("day")], Do: [s, function(v) {
      var g = l.ordinal, b = v.match(/\d+/);
      if (this.day = b[0], g) for (var k = 1; k <= 31; k += 1) g(k).replace(/\[|\]/g, "") === v && (this.day = k);
    }], w: [o, d("week")], ww: [a, d("week")], M: [o, d("month")], MM: [a, d("month")], MMM: [s, function(v) {
      var g = u("months"), b = (u("monthsShort") || g.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(v) + 1;
      if (b < 1) throw new Error();
      this.month = b % 12 || b;
    }], MMMM: [s, function(v) {
      var g = u("months").indexOf(v) + 1;
      if (g < 1) throw new Error();
      this.month = g % 12 || g;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, d("year")], Z: f, ZZ: f };
    function m(v) {
      var g, b;
      g = v, b = l && l.formats;
      for (var k = (v = g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, C, Z) {
        var Y = Z && Z.toUpperCase();
        return C || b[Z] || r[Z] || b[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, A, E) {
          return A || E.slice(1);
        });
      })).match(t), P = k.length, $ = 0; $ < P; $ += 1) {
        var S = k[$], w = p[S], x = w && w[0], I = w && w[1];
        k[$] = I ? { regex: x, parser: I } : S.replace(/^\[|\]$/g, "");
      }
      return function(O) {
        for (var C = {}, Z = 0, Y = 0; Z < P; Z += 1) {
          var y = k[Z];
          if (typeof y == "string") Y += y.length;
          else {
            var A = y.regex, E = y.parser, R = O.slice(Y), T = A.exec(R)[0];
            E.call(C, T), O = O.replace(T, "");
          }
        }
        return function(B) {
          var N = B.afternoon;
          if (N !== void 0) {
            var z = B.hours;
            N ? z < 12 && (B.hours += 12) : z === 12 && (B.hours = 0), delete B.afternoon;
          }
        }(C), C;
      };
    }
    return function(v, g, b) {
      b.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var k = g.prototype, P = k.parse;
      k.parse = function($) {
        var S = $.date, w = $.utc, x = $.args;
        this.$u = w;
        var I = x[1];
        if (typeof I == "string") {
          var O = x[2] === !0, C = x[3] === !0, Z = O || C, Y = x[2];
          C && (Y = x[2]), l = this.$locale(), !O && Y && (l = b.Ls[Y]), this.$d = function(R, T, B, N) {
            try {
              if (["x", "X"].indexOf(T) > -1) return new Date((T === "X" ? 1e3 : 1) * R);
              var z = m(T)(R), _ = z.year, K = z.month, ee = z.day, ce = z.hours, xe = z.minutes, $e = z.seconds, Be = z.milliseconds, De = z.zone, ue = z.week, we = /* @__PURE__ */ new Date(), Oe = ee || (_ || K ? 1 : we.getDate()), ze = _ || we.getFullYear(), _e = 0;
              _ && !K || (_e = K > 0 ? K - 1 : we.getMonth());
              var ot, ut = ce || 0, ct = xe || 0, dt = $e || 0, ft = Be || 0;
              return De ? new Date(Date.UTC(ze, _e, Oe, ut, ct, dt, ft + 60 * De.offset * 1e3)) : B ? new Date(Date.UTC(ze, _e, Oe, ut, ct, dt, ft)) : (ot = new Date(ze, _e, Oe, ut, ct, dt, ft), ue && (ot = N(ot).week(ue).toDate()), ot);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, I, w, b), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), Z && S != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (I instanceof Array) for (var y = I.length, A = 1; A <= y; A += 1) {
          x[1] = I[A - 1];
          var E = b.apply(this, x);
          if (E.isValid()) {
            this.$d = E.$d, this.$L = E.$L, this.init();
            break;
          }
          A === y && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else P.call(this, $);
      };
    };
  });
})(xi);
var xd = xi.exports;
const $d = /* @__PURE__ */ Ut(xd);
var $i = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Wt, function() {
    return function(r, t, i) {
      t.prototype.isToday = function() {
        var a = "YYYY-MM-DD", o = i();
        return this.format(a) === o.format(a);
      };
    };
  });
})($i);
var kd = $i.exports;
const Sd = /* @__PURE__ */ Ut(kd);
var ki = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Wt, function() {
    return function(r, t, i) {
      t.prototype.isBetween = function(a, o, s, l) {
        var c = i(a), d = i(o), f = (l = l || "()")[0] === "(", u = l[1] === ")";
        return (f ? this.isAfter(c, s) : !this.isBefore(c, s)) && (u ? this.isBefore(d, s) : !this.isAfter(d, s)) || (f ? this.isBefore(c, s) : !this.isAfter(c, s)) && (u ? this.isAfter(d, s) : !this.isBefore(d, s));
      };
    };
  });
})(ki);
var Md = ki.exports;
const Dd = /* @__PURE__ */ Ut(Md);
var Si = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Wt, function() {
    var r, t, i = 1e3, a = 6e4, o = 36e5, s = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, u = { years: c, months: d, days: s, hours: o, minutes: a, seconds: i, milliseconds: 1, weeks: 6048e5 }, h = function(S) {
      return S instanceof P;
    }, p = function(S, w, x) {
      return new P(S, x, w.$l);
    }, m = function(S) {
      return t.p(S) + "s";
    }, v = function(S) {
      return S < 0;
    }, g = function(S) {
      return v(S) ? Math.ceil(S) : Math.floor(S);
    }, b = function(S) {
      return Math.abs(S);
    }, k = function(S, w) {
      return S ? v(S) ? { negative: !0, format: "" + b(S) + w } : { negative: !1, format: "" + S + w } : { negative: !1, format: "" };
    }, P = function() {
      function S(x, I, O) {
        var C = this;
        if (this.$d = {}, this.$l = O, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return p(x * u[m(I)], this);
        if (typeof x == "number") return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object") return Object.keys(x).forEach(function(y) {
          C.$d[m(y)] = x[y];
        }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var Z = x.match(f);
          if (Z) {
            var Y = Z.slice(2).map(function(y) {
              return y != null ? Number(y) : 0;
            });
            return this.$d.years = Y[0], this.$d.months = Y[1], this.$d.weeks = Y[2], this.$d.days = Y[3], this.$d.hours = Y[4], this.$d.minutes = Y[5], this.$d.seconds = Y[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var w = S.prototype;
      return w.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(I, O) {
          return I + (x.$d[O] || 0) * u[O];
        }, 0);
      }, w.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = g(x / c), x %= c, this.$d.months = g(x / d), x %= d, this.$d.days = g(x / s), x %= s, this.$d.hours = g(x / o), x %= o, this.$d.minutes = g(x / a), x %= a, this.$d.seconds = g(x / i), x %= i, this.$d.milliseconds = x;
      }, w.toISOString = function() {
        var x = k(this.$d.years, "Y"), I = k(this.$d.months, "M"), O = +this.$d.days || 0;
        this.$d.weeks && (O += 7 * this.$d.weeks);
        var C = k(O, "D"), Z = k(this.$d.hours, "H"), Y = k(this.$d.minutes, "M"), y = this.$d.seconds || 0;
        this.$d.milliseconds && (y += this.$d.milliseconds / 1e3, y = Math.round(1e3 * y) / 1e3);
        var A = k(y, "S"), E = x.negative || I.negative || C.negative || Z.negative || Y.negative || A.negative, R = Z.format || Y.format || A.format ? "T" : "", T = (E ? "-" : "") + "P" + x.format + I.format + C.format + R + Z.format + Y.format + A.format;
        return T === "P" || T === "-P" ? "P0D" : T;
      }, w.toJSON = function() {
        return this.toISOString();
      }, w.format = function(x) {
        var I = x || "YYYY-MM-DDTHH:mm:ss", O = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return I.replace(l, function(C, Z) {
          return Z || String(O[C]);
        });
      }, w.as = function(x) {
        return this.$ms / u[m(x)];
      }, w.get = function(x) {
        var I = this.$ms, O = m(x);
        return O === "milliseconds" ? I %= 1e3 : I = O === "weeks" ? g(I / u[O]) : this.$d[O], I || 0;
      }, w.add = function(x, I, O) {
        var C;
        return C = I ? x * u[m(I)] : h(x) ? x.$ms : p(x, this).$ms, p(this.$ms + C * (O ? -1 : 1), this);
      }, w.subtract = function(x, I) {
        return this.add(x, I, !0);
      }, w.locale = function(x) {
        var I = this.clone();
        return I.$l = x, I;
      }, w.clone = function() {
        return p(this.$ms, this);
      }, w.humanize = function(x) {
        return r().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
      }, w.valueOf = function() {
        return this.asMilliseconds();
      }, w.milliseconds = function() {
        return this.get("milliseconds");
      }, w.asMilliseconds = function() {
        return this.as("milliseconds");
      }, w.seconds = function() {
        return this.get("seconds");
      }, w.asSeconds = function() {
        return this.as("seconds");
      }, w.minutes = function() {
        return this.get("minutes");
      }, w.asMinutes = function() {
        return this.as("minutes");
      }, w.hours = function() {
        return this.get("hours");
      }, w.asHours = function() {
        return this.as("hours");
      }, w.days = function() {
        return this.get("days");
      }, w.asDays = function() {
        return this.as("days");
      }, w.weeks = function() {
        return this.get("weeks");
      }, w.asWeeks = function() {
        return this.as("weeks");
      }, w.months = function() {
        return this.get("months");
      }, w.asMonths = function() {
        return this.as("months");
      }, w.years = function() {
        return this.get("years");
      }, w.asYears = function() {
        return this.as("years");
      }, S;
    }(), $ = function(S, w, x) {
      return S.add(w.years() * x, "y").add(w.months() * x, "M").add(w.days() * x, "d").add(w.hours() * x, "h").add(w.minutes() * x, "m").add(w.seconds() * x, "s").add(w.milliseconds() * x, "ms");
    };
    return function(S, w, x) {
      r = x, t = x().$utils(), x.duration = function(C, Z) {
        var Y = x.locale();
        return p(C, { $l: Y }, Z);
      }, x.isDuration = h;
      var I = w.prototype.add, O = w.prototype.subtract;
      w.prototype.add = function(C, Z) {
        return h(C) ? $(this, C, 1) : I.bind(this)(C, Z);
      }, w.prototype.subtract = function(C, Z) {
        return h(C) ? $(this, C, -1) : O.bind(this)(C, Z);
      };
    };
  });
})(Si);
var Ed = Si.exports;
const Ad = /* @__PURE__ */ Ut(Ed);
var Mi = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(Wt, function() {
    var r = "week", t = "year";
    return function(i, a, o) {
      var s = a.prototype;
      s.week = function(l) {
        if (l === void 0 && (l = null), l !== null) return this.add(7 * (l - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = o(this).startOf(t).add(1, t).date(c), f = o(this).endOf(r);
          if (d.isBefore(f)) return 1;
        }
        var u = o(this).startOf(t).date(c).startOf(r).subtract(1, "millisecond"), h = this.diff(u, r, !0);
        return h < 0 ? o(this).startOf("week").week() : Math.ceil(h);
      }, s.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Mi);
var Td = Mi.exports;
const Pd = /* @__PURE__ */ Ut(Td);
function Tt(e, n) {
  const r = ve(e, n);
  if (!r)
    throw new Error(`Could not resolve ${e.description}`);
  return r;
}
const Ja = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({})).map(
    ([e, n]) => {
      var r;
      return [(r = e.match(/([\w-]*)\.js$/)) == null ? void 0 : r[1], n];
    }
  )
), Od = { class: "tc-flex tc-justify-between tc-items-center tc-px-2 tc-py-1.5" }, Cd = { class: "tc-flex-shrink-0" }, Ld = { class: "tc-inline-flex tc-rounded-full" }, Rd = {
  class: "tc-w-5 tc-h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Id = ["d"], zd = { class: "tc-px-1.5 tc-space-x-1.5 tc-flex tc-flex-1" }, Fd = { class: "tc-flex-1 tc-flex tc-rounded-md" }, Yd = ["textContent"], jd = { class: "tc-flex-1 tc-flex tc-rounded-md" }, Bd = ["textContent"], Vd = { class: "tc-flex-shrink-0" }, Nd = { class: "tc-inline-flex tc-rounded-full" }, Hd = {
  class: "tc-w-5 tc-h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Wd = ["d"], _n = /* @__PURE__ */ ae({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(e) {
    return (n, r) => (D(), L("div", Od, [
      M("div", Cd, [
        Ce(M("span", Ld, [
          M("button", {
            type: "button",
            class: "tc-p-1.5 tc-rounded-full tc-bg-white tc-text-vtd-secondary-600 tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50",
            onClick: r[0] || (r[0] = (t) => e.panel.calendar ? e.calendar.onPrevious() : e.calendar.onPreviousYear())
          }, [
            (D(), L("svg", Rd, [
              M("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: e.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Id)
            ]))
          ])
        ], 512), [
          [it, e.panel.calendar || e.panel.year]
        ])
      ]),
      M("div", zd, [
        M("span", Fd, [
          M("button", {
            type: "button",
            class: "tc-px-3 tc-py-1.5 tc-block tc-w-full tc-leading-relaxed tc-rounded-md tc-bg-white tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-text-vtd-secondary-600 tc-font-semibold sm:tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none tc-uppercase dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50",
            onClick: r[1] || (r[1] = (t) => e.calendar.openMonth()),
            textContent: Q(e.calendar.month)
          }, null, 8, Yd)
        ]),
        M("span", jd, [
          M("button", {
            type: "button",
            class: "tc-px-3 tc-py-1.5 tc-block tc-w-full tc-leading-relaxed tc-rounded-md tc-bg-white tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-text-vtd-secondary-600 tc-font-semibold sm:tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none tc-uppercase dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50",
            onClick: r[2] || (r[2] = (t) => e.calendar.openYear()),
            textContent: Q(e.calendar.year)
          }, null, 8, Bd)
        ])
      ]),
      M("div", Vd, [
        Ce(M("span", Nd, [
          M("button", {
            type: "button",
            class: "tc-p-1.5 tc-rounded-full tc-bg-white tc-text-vtd-secondary-600 tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50",
            onClick: r[3] || (r[3] = (t) => e.panel.calendar ? e.calendar.onNext() : e.calendar.onNextYear())
          }, [
            (D(), L("svg", Hd, [
              M("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: e.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, Wd)
            ]))
          ])
        ], 512), [
          [it, e.panel.calendar || e.panel.year]
        ])
      ])
    ]));
  }
}), Di = Symbol("isBetweenRange"), Ei = Symbol(
  "betweenRangeClasses"
), Ai = Symbol("datepickerClasses"), Ti = Symbol("atMouseOver"), Pi = Symbol("setToToday"), Oi = Symbol("setToYesterday"), Ci = Symbol("setToLastDay"), Li = Symbol("setToThisMonth"), Ri = Symbol("setToLastMonth"), Ii = Symbol("setToCustomShortcut"), Ud = {
  key: 0,
  class: "tc-relative tc-w-full tc-border-t tc-border-b-0 sm:tc-border-t-0 sm:tc-border-b lg:tc-border-b-0 lg:tc-border-r tc-border-black/[.1] tc-order-last sm:tc-order-none dark:tc-border-vtd-secondary-700/[1] sm:tc-mt-1 lg:tc-mr-1 sm:tc-mb-1 lg:tc-mb-0 sm:tc-mx-1 lg:tc-mx-0 sm:tc-w-auto"
}, _d = {
  key: 0,
  class: "tc-grid tc-grid-cols-2 sm:tc-grid-cols-3 tc-gap-1 lg:tc-block tc-w-full tc-pr-5 sm:tc-pr-6 tc-mt-1.5 sm:tc-mt-0 sm:tc-mb-1.5 lg:tc-mb-0"
}, qd = ["onClick", "textContent"], Zd = {
  key: 1,
  class: "tc-grid tc-grid-cols-2 sm:tc-grid-cols-3 tc-gap-1 lg:tc-block tc-w-full tc-pr-5 sm:tc-pr-6 tc-mt-1.5 sm:tc-mt-0 sm:tc-mb-1.5 lg:tc-mb-0"
}, Qa = /* @__PURE__ */ ae({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const n = e, r = Tt(Pi), t = Tt(Oi), i = Tt(Ci), a = Tt(Li), o = Tt(Ri), s = Tt(Ii), l = j(() => typeof n.shortcuts == "function" ? n.shortcuts() : !1);
    return (c, d) => n.asRange && n.asSingle || n.asRange && !n.asSingle ? (D(), L("div", Ud, [
      l.value ? (D(), L("ol", _d, [
        (D(!0), L(se, null, Ae(l.value, (f, u) => (D(), L("li", { key: u }, [
          M("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: yt((h) => te(s)(f, e.close), ["prevent"]),
            textContent: Q(f.label)
          }, null, 8, qd)
        ]))), 128))
      ])) : (D(), L("ol", Zd, [
        M("li", null, [
          M("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[0] || (d[0] = yt((f) => te(r)(e.close), ["prevent"]))
          }, Q(n.i18n.today), 1)
        ]),
        M("li", null, [
          M("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[1] || (d[1] = yt((f) => te(t)(e.close), ["prevent"]))
          }, Q(n.i18n.yesterday), 1)
        ]),
        M("li", null, [
          M("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[2] || (d[2] = yt((f) => te(i)(7, e.close), ["prevent"]))
          }, Q(n.i18n.past(7)), 1)
        ]),
        M("li", null, [
          M("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[3] || (d[3] = yt((f) => te(i)(30, e.close), ["prevent"]))
          }, Q(n.i18n.past(30)), 1)
        ]),
        M("li", null, [
          M("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[4] || (d[4] = yt((f) => te(a)(e.close), ["prevent"]))
          }, Q(n.i18n.currentMonth), 1)
        ]),
        M("li", null, [
          M("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[5] || (d[5] = yt((f) => te(o)(e.close), ["prevent"]))
          }, Q(n.i18n.pastMonth), 1)
        ])
      ]))
    ])) : G("", !0);
  }
}), Kd = { class: "tc-grid tc-grid-cols-7 tc-gap-y-0.5 tc-my-1" }, Gd = {
  key: 0,
  class: "tc-col-span-7 tc-border-b tc-relative dark:tc-border-vtd-secondary-600"
}, Xd = { class: "tc-absolute tc--left-2 tc-top-1/2 tc--translate-y-2/4 tc-bg-white dark:tc-bg-vtd-secondary-800 tc-text-[8px] tc-pr-2 tc-text-vtd-secondary-400" }, Jd = ["data-tooltip"], Qd = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], qn = /* @__PURE__ */ ae({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    weekNumber: { type: Boolean },
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(e, { emit: n }) {
    const r = n, t = Tt(Di), i = Tt(Ei), a = Tt(Ai), o = Tt(Ti);
    return (s, l) => (D(), L("div", Kd, [
      X(el, {
        "enter-from-class": "tc-opacity-0",
        "enter-to-class": "tc-opacity-100",
        "enter-active-class": "tc-transition-opacity tc-ease-out tc-duration-300",
        "leave-active-class": "tc-transition-opacity tc-ease-in tc-duration-200",
        "leave-from-class": "tc-opacity-100",
        "leave-to-class": "tc-opacity-0"
      }, {
        default: be(() => [
          (D(!0), L(se, null, Ae(e.calendar.date(), (c, d) => (D(), L(se, { key: d }, [
            d % 7 === 0 && e.weekNumber ? (D(), L("div", Gd, [
              M("span", Xd, Q(c.week()), 1)
            ])) : G("", !0),
            M("div", {
              class: pe(["tc-relative", { "vtd-tooltip": e.asRange && c.duration() }]),
              "data-tooltip": `${c.duration()}`
            }, [
              X(cr, {
                "enter-from-class": "tc-opacity-0",
                "enter-to-class": "tc-opacity-100",
                "enter-active-class": "tc-transition-opacity tc-ease-out tc-duration-200",
                "leave-active-class": "tc-transition-opacity tc-ease-in tc-duration-150",
                "leave-from-class": "tc-opacity-100",
                "leave-to-class": "tc-opacity-0"
              }, {
                default: be(() => [
                  te(t)(c) || c.hovered() ? (D(), L("span", {
                    key: 0,
                    class: pe(["tc-absolute tc-bg-light-blue-1 tc-bg-opacity-60 dark:tc-bg-vtd-secondary-700 dark:tc-bg-opacity-50", te(i)(c)])
                  }, null, 2)) : G("", !0)
                ]),
                _: 2
              }, 1024),
              M("button", {
                type: "button",
                class: pe(["vtd-datepicker-date tc-relative tc-w-[2.7rem] tc-h-[2.7rem] lg:tc-w-10 lg:tc-h-10 tc-flex tc-justify-center tc-items-center tc-text-sm 2xl:tc-text-base", [
                  te(a)(c),
                  e.asRange ? "tc-transition-all" : "tc-transition-colors"
                ]]),
                disabled: c.disabled || c.inRange(),
                "data-date": c.toDate(),
                onClick: (f) => r("updateDate", c),
                onMouseenter: (f) => te(o)(c),
                onFocusin: (f) => te(o)(c),
                textContent: Q(c.date())
              }, null, 42, Qd)
            ], 10, Jd)
          ], 64))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), ef = { class: "tc-flex tc-flex-wrap" }, tf = { class: "tc-flex tc-rounded-md tc-mt-1.5" }, nf = ["onClick", "textContent"], Zn = /* @__PURE__ */ ae({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(e, { emit: n }) {
    const r = n;
    return (t, i) => (D(), L("div", ef, [
      (D(!0), L(se, null, Ae(e.years, (a, o) => (D(), L("div", {
        key: o,
        class: "tc-w-1/2 tc-px-0.5"
      }, [
        M("span", tf, [
          M("button", {
            type: "button",
            class: "tc-px-3 tc-py-2 tc-block tc-w-full tc-leading-6 tc-rounded-md tc-bg-white tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-text-vtd-secondary-600 tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none uppercase dark:tc-bg-vtd-secondary-800 dark:hover:tc-bg-vtd-secondary-700 dark:tc-text-vtd-secondary-300 dark:hover:tc-text-vtd-secondary-100 dark:focus:tc-bg-vtd-secondary-700",
            onClick: (s) => r("updateYear", a),
            textContent: Q(a)
          }, null, 8, nf)
        ])
      ]))), 128))
    ]));
  }
}), rf = { class: "tc-grid tc-grid-cols-7 tc-py-2 tc-mt-0.5" }, af = ["textContent"], Kn = /* @__PURE__ */ ae({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(e) {
    return (n, r) => (D(), L("div", rf, [
      (D(!0), L(se, null, Ae(e.weeks, (t, i) => (D(), L("div", {
        key: i,
        class: "tc-text-vtd-secondary-500 tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-font-medium tc-text-center tc-cursor-default dark:tc-text-vtd-secondary-400"
      }, [
        M("span", {
          textContent: Q(t)
        }, null, 8, af)
      ]))), 128))
    ]));
  }
}), of = { class: "tc-flex tc-flex-wrap tc-mt-1.5" }, sf = { class: "tc-flex tc-rounded-md tc-mt-1.5" }, lf = ["onClick", "textContent"], Gn = /* @__PURE__ */ ae({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(e, { emit: n }) {
    const r = n;
    return (t, i) => (D(), L("div", of, [
      (D(!0), L(se, null, Ae(e.months, (a, o) => (D(), L("div", {
        key: o,
        class: "tc-w-1/2 tc-px-0.5"
      }, [
        M("span", sf, [
          M("button", {
            type: "button",
            class: "tc-px-3 tc-py-2 tc-block tc-w-full tc-leading-6 tc-rounded-md tc-bg-white tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-text-vtd-secondary-600 tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none tc-uppercase dark:tc-bg-vtd-secondary-800 dark:hover:tc-bg-vtd-secondary-700 dark:tc-text-vtd-secondary-300 dark:hover:tc-text-vtd-secondary-100 dark:focus:tc-bg-vtd-secondary-700",
            onClick: (s) => r("updateMonth", o),
            textContent: Q(a)
          }, null, 8, lf)
        ])
      ]))), 128))
    ]));
  }
});
function uf() {
  const e = (c) => {
    const d = [], f = c.localeData().firstDayOfWeek();
    for (let u = 0; u <= c.date(0 - f).day(); u++)
      d.push(c.date(0).subtract(u, "day"));
    return d.sort((u, h) => u.date() - h.date());
  };
  return {
    usePreviousDate: e,
    useCurrentDate: (c) => Array.from(
      {
        length: c.daysInMonth()
      },
      (d, f) => c.date(f + 1)
    ),
    useNextDate: (c) => {
      const d = [];
      for (let f = 1; f <= 42 - (e(c).length + c.daysInMonth()); f++)
        d.push(c.date(f).month(c.month()).add(1, "month"));
      return d;
    },
    useDisableDate: (c, { disableDate: d }) => typeof d == "function" ? d(c.toDate()) : !1,
    useBetweenRange: (c, { previous: d, next: f }) => {
      const u = d.isAfter(f, "date") ? "(]" : "[)";
      return c.isBetween(d, f, "date", u) && !c.off;
    },
    useToValueFromString: (c, { formatter: d }) => c.format(d.date),
    useToFormattedValueFromString: (c, { formatter: d }) => c.format(d.preview),
    useToValueFromArray: ({ previous: c, next: d }, {
      formatter: f,
      separator: u
    }) => `${c.format(f.date)}${u}${d.format(
      f.date
    )}`,
    useToFormattedValueFromArray: ({ previous: c, next: d }, {
      formatter: f,
      separator: u
    }) => `${c.format(f.preview)}${u}${d.format(
      f.preview
    )}`
  };
}
function cf() {
  return {
    useVisibleViewport: (n) => {
      if (n) {
        const { right: r } = n.getBoundingClientRect(), t = window.innerWidth || document.documentElement.clientWidth;
        return r > t;
      } else
        return null;
    }
  };
}
const df = {
  class: "tc-flex tc-items-center tc-gap-2",
  "data-timepicker": ""
}, ff = { class: "relative" }, hf = { class: "tc-font-semibold" }, pf = {
  key: 0,
  class: "tc-absolute tc-z-50 tc-mt-1 tc-bg-white tc-border tc-text-tonik-purple tc-rounded-md tc-shadow-lg tc-max-h-52 tc-overflow-y-auto tc-w-20 tc-py-1"
}, vf = ["onClick"], mf = { class: "relative" }, gf = { class: "tc-font-semibold" }, yf = {
  key: 0,
  class: "tc-absolute tc-z-50 tc-mt-1 tc-bg-white tc-border tc-text-tonik-purple tc-rounded-md tc-shadow-lg tc-max-h-52 tc-overflow-y-auto tc-w-20 tc-py-1"
}, bf = ["onClick"], wf = { class: "tc-flex tc-gap-1 tc-ml-1" }, eo = {
  __name: "TimePicker",
  props: {
    modelValue: { type: String, default: "00:00" }
    // 24h format
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const r = e, t = n, i = F(0), a = F(0), o = F("AM"), s = F(null), l = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], c = Array.from({ length: 60 }, (g, b) => b);
    he(() => {
      const [g, b] = r.modelValue.split(":").map(Number);
      i.value = g, a.value = b, g === 0 || g < 12 ? o.value = "AM" : o.value = "PM";
    });
    const d = j(() => i.value === 0 ? 12 : i.value > 12 ? i.value - 12 : i.value), f = j(() => d.value.toString().padStart(2, "0")), u = j(() => a.value.toString().padStart(2, "0"));
    Me([i, a], () => {
      t("update:modelValue", `${i.value.toString().padStart(2, "0")}:${u.value}`);
    });
    function h(g) {
      s.value = s.value === g ? null : g;
    }
    function p(g) {
      o.value === "AM" ? i.value = g === 12 ? 0 : g : i.value = g === 12 ? 12 : g + 12, s.value = null;
    }
    function m(g) {
      a.value = g, s.value = null;
    }
    function v(g) {
      o.value = g, g === "AM" ? i.value >= 12 && (i.value -= 12) : i.value < 12 && (i.value += 12);
    }
    return document.addEventListener("click", (g) => {
      g.target.closest("[data-timepicker]") || (s.value = null);
    }), (g, b) => (D(), L("div", df, [
      M("div", ff, [
        M("button", {
          class: "tc-flex tc-items-center tc-gap-1 tc-bg-white tc-text-tonik-purple tc-px-2 tc-py-1 tc-rounded-md tc-border tc-border-tonik-purple tc-w-14 justify-center",
          onClick: b[0] || (b[0] = (k) => h("hour"))
        }, [
          M("span", hf, Q(f.value), 1),
          X(te(Va), { class: "tc-w-4 tc-h-4" })
        ]),
        s.value === "hour" ? (D(), L("div", pf, [
          (D(), L(se, null, Ae(l, (k) => M("div", {
            key: k,
            class: pe(["tc-px-3 tc-py-1 tc-text-tonik-purple tc-cursor-pointer hover:tc-bg-tonik-purple-dark hover:tc-text-white tc-text-center", { "tc-bg-tonik-purple tc-text-white": k === d.value }]),
            onClick: (P) => p(k)
          }, Q(k.toString().padStart(2, "0")), 11, vf)), 64))
        ])) : G("", !0)
      ]),
      b[4] || (b[4] = M("span", { class: "tc-text-xl tc-text-tonik-purple" }, ":", -1)),
      M("div", mf, [
        M("button", {
          class: "tc-flex tc-items-center tc-gap-1 tc-bg-white tc-text-tonik-purple tc-px-2 tc-py-1 tc-rounded-md tc-border tc-border-tonik-purple tc-w-14 justify-center",
          onClick: b[1] || (b[1] = (k) => h("minute"))
        }, [
          M("span", gf, Q(u.value), 1),
          X(te(Va), { class: "tc-w-4 tc-h-4" })
        ]),
        s.value === "minute" ? (D(), L("div", yf, [
          (D(!0), L(se, null, Ae(te(c), (k) => (D(), L("div", {
            key: k,
            class: pe(["tc-px-3 tc-py-1 tc-text-tonik-purple tc-cursor-pointer hover:tc-bg-tonik-purple-dark hover:tc-text-white tc-text-center", { "tc-bg-tonik-purple tc-text-white": k === a.value }]),
            onClick: (P) => m(k)
          }, Q(k.toString().padStart(2, "0")), 11, bf))), 128))
        ])) : G("", !0)
      ]),
      M("div", wf, [
        M("button", {
          class: pe(["tc-px-3 tc-py-1 tc-rounded-md tc-font-semibold", o.value === "AM" ? "tc-bg-tonik-purple tc-text-white" : "tc-bg-gray-100 tc-text-gray-600"]),
          onClick: b[2] || (b[2] = (k) => v("AM"))
        }, " AM ", 2),
        M("button", {
          class: pe(["tc-px-3 tc-py-1 tc-rounded-md tc-font-semibold", o.value === "PM" ? "tc-bg-tonik-purple tc-text-white" : "tc-bg-gray-100 tc-text-gray-600"]),
          onClick: b[3] || (b[3] = (k) => v("PM"))
        }, " PM ", 2)
      ])
    ]));
  }
}, xf = ["disabled", "placeholder"], $f = { class: "tc-absolute tc-inset-y-0 tc-right-0 tc-inline-flex tc-items-center tc-rounded-md tc-overflow-hidden" }, kf = ["disabled"], Sf = {
  class: "tc-w-5 tc-h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Mf = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Df = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, Ef = { class: "tc-flex tc-flex-wrap lg:tc-flex-nowrap" }, Af = { class: "tc-relative tc-flex tc-flex-wrap sm:tc-flex-nowrap tc-p-1 tc-w-full" }, Tf = {
  key: 0,
  class: "tc-hidden tc-h-full tc-absolute tc-inset-0 sm:tc-flex tc-justify-center tc-items-center"
}, Pf = { class: "tc-px-0.5 sm:tc-px-2" }, Of = {
  key: 1,
  class: "tc-relative tc-w-full md:tc-w-1/2 lg:tc-w-80 tc-overflow-hidden tc-mt-3 sm:tc-mt-0 sm:tc-ml-2"
}, Cf = { class: "tc-px-0.5 sm:tc-px-2" }, Lf = {
  key: 0,
  class: "tc-border-t tc-border-gray-200 tc-p-5"
}, Rf = { class: "tc-flex tc-gap-6 tc-justify-end" }, If = { class: "tc-flex tc-flex-col tc-gap-2" }, zf = { key: 1 }, Ff = { class: "tc-mt-2 tc-mx-2 tc-py-1.5 tc-border-t tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, Yf = { class: "tc-mt-1.5 sm:tc-flex sm:tc-flex-row-reverse" }, jf = ["disabled", "onClick", "textContent"], Bf = ["onClick", "textContent"], Vf = {
  key: 2,
  class: "sm:tc-hidden"
}, Nf = { class: "tc-mt-2 tc-mx-2 tc-py-1.5 tc-border-t tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, Hf = { class: "tc-mt-1.5 sm:tc-flex sm:tc-flex-row-reverse" }, Wf = ["onClick", "textContent"], Uf = {
  key: 1,
  class: "tc-flex"
}, _f = { class: "tc-bg-white tc-rounded-lg tc-shadow-sm tc-border tc-border-black/[.1] tc-px-3 tc-py-3 sm:tc-px-4 sm:tc-py-4 dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700/[1]" }, qf = { class: "tc-flex tc-flex-wrap lg:tc-flex-nowrap" }, Zf = { class: "tc-relative tc-flex tc-flex-wrap sm:tc-flex-nowrap tc-p-1 tc-w-full" }, Kf = {
  key: 0,
  class: "tc-hidden tc-h-full tc-absolute tc-inset-0 sm:tc-flex tc-justify-center tc-items-center"
}, Gf = { class: "tc-px-0.5 sm:tc-px-2" }, Xf = {
  key: 1,
  class: "tc-relative tc-w-full md:tc-w-1/2 lg:tc-w-80 tc-overflow-hidden tc-mt-3 sm:tc-mt-0 sm:tc-ml-2"
}, Jf = { class: "tc-px-0.5 sm:tc-px-2" }, Qf = { key: 0 }, eh = { class: "tc-mt-2 tc-mx-2 tc-py-1.5 tc-border-t tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, th = { class: "tc-mt-1.5 sm:tc-flex sm:tc-flex-row-reverse" }, nh = ["disabled", "textContent"], zi = /* @__PURE__ */ ae({
  __name: "VueTailwindDatePicker",
  props: {
    noInput: { type: Boolean },
    overlay: { type: Boolean },
    asSingle: { type: Boolean },
    useRange: { type: Boolean },
    placeholder: { default: "" },
    i18n: { default: "en" },
    inputClasses: { default: "" },
    disabled: { type: Boolean, default: !1 },
    disableInRange: { type: Boolean, default: !1 },
    disableDate: { type: [Boolean, Function], default: !1 },
    autoApply: { type: Boolean, default: !0 },
    shortcuts: { type: [Boolean, Function], default: !0 },
    separator: { default: " - " },
    formatter: { default: () => ({
      date: "YYYY-MM-DD HH:mm:ss",
      month: "MMM",
      preview: "MM/DD/YYYY"
    }) },
    startFrom: { default: () => /* @__PURE__ */ new Date() },
    weekdaysSize: { default: "short" },
    weekNumber: { type: Boolean, default: !1 },
    options: { default: () => ({
      shortcuts: {
        today: "Today",
        yesterday: "Yesterday",
        past: (e) => `Last ${e} Days`,
        currentMonth: "This Month",
        pastMonth: "Last Month"
      },
      footer: {
        apply: "Apply",
        cancel: "Cancel"
      }
    }) },
    time: { type: Boolean, default: !1 },
    modelValue: { default: () => [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()] }
  },
  emits: ["update:modelValue", "selectMonth", "selectYear", "selectTime", "selectRightMonth", "selectRightYear", "clickPrev", "clickNext", "clickRightPrev", "clickRightNext"],
  setup(e, { expose: n, emit: r }) {
    const t = e, i = r, {
      useCurrentDate: a,
      useDisableDate: o,
      useBetweenRange: s,
      useNextDate: l,
      usePreviousDate: c,
      useToValueFromArray: d,
      useToFormattedValueFromArray: f,
      useToValueFromString: u,
      useToFormattedValueFromString: h
    } = uf(), { useVisibleViewport: p } = cf();
    V.extend(yd), V.extend(wd), V.extend($d), V.extend(Sd), V.extend(Dd), V.extend(Ad), V.extend(Pd), V.extend(md), V.tz.setDefault("Asia/Manila");
    const m = F(null), v = F(null), g = F(null), b = F(""), k = F(null), P = F(""), $ = F(""), S = j(() => {
      if (t.time) {
        const q = t.modelValue;
        if (Array.isArray(q))
          return [
            q[0] ? V(q[0]).toDate() : null,
            q[1] ? V(q[1]).toDate() : null
          ];
      }
      return [null, null];
    }), w = F(
      S.value[0] ? V(S.value[0]).format("HH:mm") : ""
    ), x = F(
      S.value[1] ? V(S.value[1]).format("HH:mm") : ""
    ), I = F([]), O = F([]), C = F(null), Z = F(null), Y = xn({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), y = F({
      previous: V(),
      next: V().add(1, "month"),
      year: {
        previous: V().year(),
        next: V().year()
      },
      weeks: t.weekdaysSize === "min" ? V.weekdaysMin() : V.weekdaysShort(),
      months: t.formatter.month === "MMM" ? V.monthsShort() : V.months()
    }), A = j(() => y.value.weeks), E = j(() => y.value.months), R = j(() => {
      const { previous: q, next: H, year: U } = te(y);
      return {
        previous: {
          date: () => c(q).concat(a(q)).concat(l(q)).map((W) => (Object.assign(W, {
            today: W.isToday(),
            active: q.month() === W.month(),
            off: q.month() !== W.month(),
            sunday: W.day() === 0,
            disabled: o(W, t) && !_(W),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return q.month() !== W.month();
            },
            hovered: () => z() && I.value.length > 1 ? (W.isBetween(
              I.value[0],
              I.value[1],
              "date",
              "()"
            ) || W.isBetween(
              I.value[1],
              I.value[0],
              "date",
              "(]"
            )) && q.month() === W.month() : !1,
            duration: () => !1
          }), W)),
          month: q && q.format(t.formatter.month),
          year: q && q.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (W, J) => U.previous + J
          ),
          onPrevious: () => {
            y.value.previous = q.subtract(1, "month"), i("clickPrev", y.value.previous);
          },
          onNext: () => {
            y.value.previous = q.add(1, "month"), q.diff(H, "month") === -1 && (y.value.next = H.add(1, "month")), i("clickNext", y.value.previous);
          },
          onPreviousYear: () => {
            y.value.year.previous = y.value.year.previous - 12;
          },
          onNextYear: () => {
            y.value.year.previous = y.value.year.previous + 12;
          },
          openMonth: () => {
            Y.previous.month = !Y.previous.month, Y.previous.year = !1, Y.previous.calendar = !Y.previous.month;
          },
          setMonth: (W) => {
            y.value.previous = q.month(W), Y.previous.month = !Y.previous.month, Y.previous.year = !1, Y.previous.calendar = !Y.previous.month, i("selectMonth", y.value.previous), Le(() => {
              (y.value.next.isSame(y.value.previous, "month") || y.value.next.isBefore(y.value.previous)) && (y.value.next = y.value.previous.add(1, "month")), y.value.year.next = y.value.next.year();
            });
          },
          openYear: () => {
            Y.previous.year = !Y.previous.year, Y.previous.month = !1, Y.previous.calendar = !Y.previous.year;
          },
          setYear: (W) => {
            y.value.previous = q.year(W), Y.previous.year = !Y.previous.year, Y.previous.calendar = !Y.previous.year, i("selectYear", y.value.previous), Le(() => {
              (y.value.next.isSame(y.value.previous, "month") || y.value.next.isBefore(y.value.previous)) && (y.value.next = y.value.previous.add(1, "month")), y.value.year.previous = y.value.previous.year(), y.value.year.next = y.value.next.year();
            });
          }
        },
        next: {
          date: () => c(H).concat(a(H)).concat(l(H)).map((W) => (Object.assign(W, {
            today: W.isToday(),
            active: H.month() === W.month(),
            off: H.month() !== W.month(),
            sunday: W.day() === 0,
            disabled: o(W, t) && !_(W),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return H.month() !== W.month();
            },
            hovered: () => I.value.length > 1 ? (W.isBetween(
              I.value[0],
              I.value[1],
              "date",
              "()"
            ) || W.isBetween(
              I.value[1],
              I.value[0],
              "date",
              "(]"
            )) && H.month() === W.month() : !1,
            duration: () => !1
          }), W)),
          month: H && H.format(t.formatter.month),
          year: H && H.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (W, J) => U.next + J
          ),
          onPrevious: () => {
            y.value.next = H.subtract(1, "month"), H.diff(q, "month") === 1 && (y.value.previous = q.subtract(1, "month")), i("clickRightPrev", y.value.next);
          },
          onNext: () => {
            y.value.next = H.add(1, "month"), i("clickRightNext", y.value.next);
          },
          onPreviousYear: () => {
            y.value.year.next = y.value.year.next - 12;
          },
          onNextYear: () => {
            y.value.year.next = y.value.year.next + 12;
          },
          openMonth: () => {
            Y.next.month = !Y.next.month, Y.next.year = !1, Y.next.calendar = !Y.next.month;
          },
          setMonth: (W) => {
            y.value.next = H.month(W), Y.next.month = !Y.next.month, Y.next.year = !1, Y.next.calendar = !Y.next.month, i("selectRightMonth", y.value.next), Le(() => {
              (y.value.previous.isSame(y.value.next, "month") || y.value.previous.isAfter(y.value.next)) && (y.value.previous = y.value.next.subtract(
                1,
                "month"
              )), y.value.year.previous = y.value.previous.year();
            });
          },
          openYear: () => {
            Y.next.year = !Y.next.year, Y.next.month = !1, Y.next.calendar = !Y.next.year;
          },
          setYear: (W) => {
            y.value.next = H.year(W), Y.next.year = !Y.next.year, Y.next.month = !1, Y.next.calendar = !Y.next.year, i("selectRightYear", y.value.next), Le(() => {
              (y.value.previous.isSame(y.value.next, "month") || y.value.previous.isAfter(y.value.next)) && (y.value.previous = y.value.next.subtract(
                1,
                "month"
              )), y.value.year.previous = y.value.previous.year(), y.value.year.next = y.value.next.year();
            });
          }
        }
      };
    }), T = F(!1);
    setTimeout(() => {
      T.value = !0;
    }, 250);
    function B() {
      return V().localeData().firstDayOfWeek();
    }
    function N(q) {
      const H = [...q], U = H.shift();
      return [...H, U];
    }
    function z() {
      return !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle);
    }
    function _(q) {
      if (t.disableInRange || P.value === "")
        return !1;
      let H, U;
      if (Array.isArray(t.modelValue)) {
        const [W, J] = t.modelValue;
        H = W, U = J;
      } else if (typeof t.modelValue == "object") {
        if (t.modelValue) {
          const [W, J] = Object.values(t.modelValue);
          H = W, U = J;
        }
      } else {
        const [W, J] = t.modelValue.split(t.separator);
        H = W, U = J;
      }
      return q.isBetween(
        V(H, t.formatter.date, !0),
        V(U, t.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function K() {
      C.value = null, Z.value = null, I.value = [], k.value = null;
    }
    function ee() {
      if (P.value = "", Array.isArray(t.modelValue))
        i("update:modelValue", []);
      else if (typeof t.modelValue == "object") {
        const q = {}, [H, U] = Object.keys(t.modelValue);
        q[H] = "", q[U] = "", i("update:modelValue", q);
      } else
        i("update:modelValue", "");
      O.value = [], v.value && v.value.focus();
    }
    n({ clearPicker: ee });
    function ce() {
      if (z()) {
        const [q, H] = P.value.split(t.separator), [U, W] = [
          V(q, t.formatter.date, !0),
          V(H, t.formatter.date, !0)
        ];
        if (U.isValid() && W.isValid())
          if ($e(U), $e(W), Array.isArray(t.modelValue))
            i("update:modelValue", [q, H]);
          else if (typeof t.modelValue == "object") {
            const J = {}, [le, ke] = Object.keys(t.modelValue);
            J[le] = q, J[ke] = H, i("update:modelValue", J);
          } else
            i(
              "update:modelValue",
              d(
                {
                  previous: U,
                  next: W
                },
                t
              )
            );
      } else {
        const q = V(P.value, t.formatter.date, !0);
        if (q.isValid())
          if ($e(q), Array.isArray(t.modelValue))
            i("update:modelValue", [P.value]);
          else if (typeof t.modelValue == "object") {
            const H = {}, [U] = Object.keys(t.modelValue);
            H[U] = P.value, i("update:modelValue", H);
          } else
            i("update:modelValue", P.value);
      }
    }
    function xe(q, H) {
      const [U, W] = q.split(":").map(Number);
      if (z()) {
        const [ke, Ze] = P.value.split(t.separator), [ye, Re] = [
          V(ke, t.formatter.date, !0),
          V(Ze, t.formatter.date, !0)
        ];
        var J = ye, le = Re;
        H === "from" && (J = ye.hour(U).minute(W).second(0), $e(J)), H === "to" && (le = Re.hour(U).minute(W).second(0), $e(le)), i("update:modelValue", [J.format(t.formatter.date), le.format(t.formatter.date)]);
      }
    }
    function $e(q, H) {
      if (z())
        if (C.value)
          if (Z.value = q, t.autoApply) {
            q.isBefore(C.value) ? P.value = d(
              {
                previous: q,
                next: C.value
              },
              t
            ) : P.value = d(
              {
                previous: C.value,
                next: q
              },
              t
            );
            const [U, W] = P.value.split(t.separator);
            if (Array.isArray(t.modelValue))
              i("update:modelValue", [
                V(U, t.formatter.date, !0).format(t.formatter.date),
                V(W, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (typeof t.modelValue == "object") {
              const J = {}, [le, ke] = Object.keys(t.modelValue);
              J[le] = U, J[ke] = W, i("update:modelValue", J);
            } else
              i(
                "update:modelValue",
                d(
                  {
                    previous: V(U, t.formatter.date, !0),
                    next: V(W, t.formatter.date, !0)
                  },
                  t
                )
              );
            H && H(), O.value = [], V(U, t.formatter.date, !0).isSame(
              V(W, t.formatter.date, !0),
              "month"
            ) || (y.value.previous = V(U, t.formatter.date, !0), y.value.next = V(W, t.formatter.date, !0)), K();
          } else {
            C.value.isAfter(q, "month") ? O.value = [q, C.value] : O.value = [C.value, q];
            const [U, W] = O.value;
            U.isSame(W, "month") || (y.value.previous = U, y.value.next = W), K();
          }
        else
          O.value = [], C.value = q, k.value = q, I.value.push(q), O.value.push(q), y.value.previous = q, y.value.next.isSame(q, "month") && (y.value.previous = y.value.next, y.value.next = q.add(1, "month"));
      else if (t.autoApply) {
        if (P.value = u(q, t), Array.isArray(t.modelValue))
          i("update:modelValue", [P.value]);
        else if (typeof t.modelValue == "object") {
          const U = {}, [W] = Object.keys(t.modelValue);
          U[W] = P.value, i("update:modelValue", U);
        } else
          i("update:modelValue", P.value);
        H && H(), O.value = [], K();
      } else
        O.value = [q], K();
    }
    function Be(q) {
      if (O.value.length < 1)
        return !1;
      let H;
      if (z()) {
        const [U, W] = O.value;
        W.isBefore(U) ? H = d(
          {
            previous: W,
            next: U
          },
          t
        ) : H = d(
          {
            previous: U,
            next: W
          },
          t
        );
      } else {
        const [U] = O.value;
        H = U;
      }
      if (z()) {
        const [U, W] = H.split(t.separator);
        if (Array.isArray(t.modelValue))
          i("update:modelValue", [
            V(U, t.formatter.date, !0).format(t.formatter.date),
            V(W, t.formatter.date, !0).format(t.formatter.date)
          ]);
        else if (typeof t.modelValue == "object") {
          const J = {}, [le, ke] = Object.keys(t.modelValue);
          J[le] = U, J[ke] = W, i("update:modelValue", J);
        } else
          i(
            "update:modelValue",
            d(
              {
                previous: V(U, t.formatter.date, !0),
                next: V(W, t.formatter.date, !0)
              },
              t
            )
          );
        P.value = H;
      } else if (P.value = H.format(t.formatter.date), Array.isArray(t.modelValue))
        i("update:modelValue", [P.value]);
      else if (typeof t.modelValue == "object") {
        const U = {}, [W] = Object.keys(t.modelValue);
        U[W] = P.value, i("update:modelValue", U);
      } else
        i("update:modelValue", P.value);
      q && q();
    }
    function De(q) {
      if (!z())
        return !1;
      if (C.value)
        I.value = [C.value, q];
      else
        return I.value = [], !1;
    }
    function ue(q) {
      if (C.value && t.autoApply)
        return !1;
      let H, U;
      if (I.value.length > 1) {
        const [W, J] = I.value;
        H = V(W, t.formatter.date, !0), U = V(J, t.formatter.date, !0);
      } else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          const [W, J] = t.modelValue;
          H = W && V(W, t.formatter.date, !0), U = J && V(J, t.formatter.date, !0);
        } else {
          const [W, J] = O.value;
          H = V(W, t.formatter.date, !0), U = V(J, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [W, J] = Object.values(t.modelValue);
            H = W && V(W, t.formatter.date, !0), U = J && V(J, t.formatter.date, !0);
          }
        } else {
          const [W, J] = O.value;
          H = V(W, t.formatter.date, !0), U = V(J, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [W, J] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        H = W && V(W, t.formatter.date, !0), U = J && V(J, t.formatter.date, !0);
      } else {
        const [W, J] = O.value;
        H = V(W, t.formatter.date, !0), U = V(J, t.formatter.date, !0);
      }
      return H && U ? s(q, {
        previous: H,
        next: U
      }) : !1;
    }
    function we(q) {
      const { today: H, active: U, off: W, disabled: J } = q;
      let le, ke, Ze;
      if (z())
        if (Array.isArray(t.modelValue))
          if (k.value) {
            const [ye, Re] = I.value;
            ke = ye && V(ye, t.formatter.date, !0), Ze = Re && V(Re, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [ye, Re] = t.modelValue;
            ke = ye && V(ye, t.formatter.date, !0), Ze = Re && V(Re, t.formatter.date, !0);
          } else {
            const [ye, Re] = O.value;
            ke = ye && V(ye, t.formatter.date, !0), Ze = Re && V(Re, t.formatter.date, !0);
          }
        else if (typeof t.modelValue == "object")
          if (k.value) {
            const [ye, Re] = I.value;
            ke = ye && V(ye, t.formatter.date, !0), Ze = Re && V(Re, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [ye, Re] = t.modelValue ? Object.values(t.modelValue) : [null, null];
            ke = ye && V(ye, t.formatter.date, !0), Ze = Re && V(Re, t.formatter.date, !0);
          } else {
            const [ye, Re] = O.value;
            ke = ye && V(ye, t.formatter.date, !0), Ze = Re && V(Re, t.formatter.date, !0);
          }
        else if (k.value) {
          const [ye, Re] = I.value;
          ke = ye && V(ye, t.formatter.date, !0), Ze = Re && V(Re, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [ye, Re] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
          ke = ye && V(ye, t.formatter.date, !0), Ze = Re && V(Re, t.formatter.date, !0);
        } else {
          const [ye, Re] = O.value;
          ke = ye && V(ye, t.formatter.date, !0), Ze = Re && V(Re, t.formatter.date, !0);
        }
      else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [ye] = t.modelValue;
            ke = V(ye, t.formatter.date, !0);
          }
        } else {
          const [ye] = O.value;
          ke = ye && V(ye, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [ye] = Object.values(t.modelValue);
            ke = V(ye, t.formatter.date, !0);
          }
        } else {
          const [ye] = O.value;
          ke = ye && V(ye, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [ye] = t.modelValue.split(t.separator);
          ke = V(ye, t.formatter.date, !0);
        }
      } else {
        const [ye] = O.value;
        ke = ye && V(ye, t.formatter.date, !0);
      }
      return U && (le = H ? "tc-text-vtd-primary-500 tc-font-semibold dark:tc-text-vtd-primary-400 tc-rounded-full focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50" : J ? "tc-text-vtd-secondary-600 tc-font-normal disabled:tc-text-vtd-secondary-500 disabled:tc-cursor-not-allowed tc-rounded-full" : q.isBetween(ke, Ze, "date", "()") ? "tc-text-vtd-secondary-700 tc-font-medium dark:tc-text-vtd-secondary-100 tc-rounded-full" : "tc-text-vtd-secondary-600 tc-font-medium dark:tc-text-vtd-secondary-200 tc-rounded-full"), W && (le = "tc-text-vtd-secondary-400 tc-font-light disabled:tc-cursor-not-allowed"), ke && Ze && !W ? (q.isSame(ke, "date") && (le = Ze.isAfter(ke, "date") ? "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-l-full disabled:tc-cursor-not-allowed" : "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-r-full disabled:tc-cursor-not-allowed", ke.isSame(Ze, "date") && (le = "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-full disabled:tc-cursor-not-allowed")), q.isSame(Ze, "date") && (le = Ze.isAfter(ke, "date") ? "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-r-full disabled:tc-cursor-not-allowed" : "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-l-full disabled:tc-cursor-not-allowed", ke.isSame(Ze, "date") && (le = "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-full disabled:tc-cursor-not-allowed"))) : ke && q.isSame(ke, "date") && !W && (le = "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-full disabled:tc-cursor-not-allowed"), le;
    }
    function Oe(q) {
      let H, U, W;
      if (H = "", !z())
        return H;
      if (Array.isArray(t.modelValue))
        if (I.value.length > 1) {
          const [J, le] = I.value;
          U = J && V(J, t.formatter.date, !0), W = le && V(le, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [J, le] = t.modelValue;
          U = J && V(J, t.formatter.date, !0), W = le && V(le, t.formatter.date, !0);
        } else {
          const [J, le] = O.value;
          U = J && V(J, t.formatter.date, !0), W = le && V(le, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (I.value.length > 1) {
          const [J, le] = I.value;
          U = J && V(J, t.formatter.date, !0), W = le && V(le, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [J, le] = Object.values(t.modelValue);
            U = J && V(J, t.formatter.date, !0), W = le && V(le, t.formatter.date, !0);
          }
        } else {
          const [J, le] = O.value;
          U = J && V(J, t.formatter.date, !0), W = le && V(le, t.formatter.date, !0);
        }
      else if (I.value.length > 1) {
        const [J, le] = I.value;
        U = J && V(J, t.formatter.date, !0), W = le && V(le, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [J, le] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        U = J && V(J, t.formatter.date, !0), W = le && V(le, t.formatter.date, !0);
      } else {
        const [J, le] = O.value;
        U = J && V(J, t.formatter.date, !0), W = le && V(le, t.formatter.date, !0);
      }
      return U && W && (q.isSame(U, "date") ? (W.isBefore(U) && (H += " rounded-r-full inset-0"), U.isBefore(W) && (H += " rounded-l-full inset-0")) : q.isSame(W, "date") ? (W.isBefore(U) && (H += " rounded-l-full inset-0"), U.isBefore(W) && (H += " rounded-r-full inset-0")) : H += " inset-0"), H;
    }
    function ze(q, H) {
      y.value.previous = V(q, t.formatter.date, !0), y.value.next = V(H, t.formatter.date, !0), (V.duration(y.value.next.diff(y.value.previous)).get("months") === 2 || V.duration(y.value.next.diff(y.value.previous)).get("months") === 1 && V.duration(y.value.next.diff(y.value.previous)).get("days") === 7) && (y.value.next = y.value.next.subtract(1, "month")), (y.value.next.isSame(y.value.previous, "month") || y.value.next.isBefore(y.value.previous)) && (y.value.next = y.value.previous.add(1, "month"));
    }
    function _e(q, H) {
      if (z())
        if (t.autoApply) {
          if (Array.isArray(t.modelValue))
            i("update:modelValue", [q, H]);
          else if (typeof t.modelValue == "object") {
            const U = {}, [W, J] = Object.keys(t.modelValue);
            U[W] = q, U[J] = H, i("update:modelValue", U);
          } else
            i(
              "update:modelValue",
              d(
                {
                  previous: V(q, t.formatter.date, !0),
                  next: V(H, t.formatter.date, !0)
                },
                t
              )
            );
          P.value = `${q}${t.separator}${H}`;
        } else
          O.value = [
            V(q, t.formatter.date, !0),
            V(H, t.formatter.date, !0)
          ];
      else if (t.autoApply) {
        if (Array.isArray(t.modelValue))
          i("update:modelValue", [q]);
        else if (typeof t.modelValue == "object") {
          const U = {}, [W] = Object.keys(t.modelValue);
          U[W] = q, i("update:modelValue", U);
        } else
          i("update:modelValue", q);
        P.value = q;
      } else
        O.value = [
          V(q, t.formatter.date, !0),
          V(H, t.formatter.date, !0)
        ];
      ze(q, H);
    }
    function ot(q) {
      const H = V().format(t.formatter.date), U = V().format(t.formatter.date);
      _e(H, U), q && q();
    }
    function ut(q) {
      const H = V().subtract(1, "day").format(t.formatter.date), U = V().subtract(1, "day").format(t.formatter.date);
      _e(H, U), q && q();
    }
    function ct(q, H) {
      const U = V().subtract(q - 1, "day").format(t.formatter.date), W = V().format(t.formatter.date);
      _e(U, W), H && H();
    }
    function dt(q) {
      const H = V().date(1).format(t.formatter.date), U = V().date(V().daysInMonth()).format(t.formatter.date);
      _e(H, U), q && q();
    }
    function ft(q) {
      const H = V().date(1).subtract(1, "month").format(t.formatter.date), U = V().date(0).format(t.formatter.date);
      _e(H, U), q && q();
    }
    function Ba(q, H) {
      const [U, W] = q.atClick(), J = V(U).format(t.formatter.date), le = V(W).format(t.formatter.date);
      _e(J, le), H && H();
    }
    Me(
      () => O.value,
      (q) => {
        q.length > 0 && (Y.previous.calendar = !0, Y.previous.month = !1, Y.previous.year = !1, Y.next.calendar = !0, Y.next.month = !1, Y.next.year = !1);
      }
    ), ge(() => {
      t.placeholder ? b.value = t.placeholder : z() ? b.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : b.value = t.formatter.date;
    }), V.locale(t.i18n), Me(() => t.i18n, () => V.locale(t.i18n)), ge(() => {
      const q = t.i18n, H = t.modelValue;
      Le(async () => {
        if (q in Ja) {
          const le = await Ja[q]();
          V.locale(le, void 0, !0), V.locale(q);
        }
        let U, W;
        if (z()) {
          if (Array.isArray(H)) {
            if (H.length > 0) {
              const [le, ke] = H;
              U = V(le, t.formatter.date, !0), W = V(ke, t.formatter.date, !0);
            }
          } else if (typeof H == "object") {
            if (!tl(H))
              try {
                Object.keys(H);
              } catch {
                console.warn(
                  "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                  "font-style: italic; color: #42b883;",
                  ", but you pass it undefined or null."
                ), console.warn(
                  "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                  "font-style: italic; color: #42b883;",
                  ", but you can replace manually."
                ), i("update:modelValue", {
                  startDate: "",
                  endDate: ""
                });
              }
            if (H) {
              const [le, ke] = Object.values(H);
              U = le && V(le, t.formatter.date, !0), W = ke && V(ke, t.formatter.date, !0);
            }
          } else if (H) {
            const [le, ke] = H.split(t.separator);
            U = V(le, t.formatter.date, !0), W = V(ke, t.formatter.date, !0);
          }
          U && W ? (P.value = d(
            {
              previous: U,
              next: W
            },
            t
          ), $.value = f(
            {
              previous: U,
              next: W
            },
            t
          ), W.isBefore(U, "month") ? (y.value.previous = W, y.value.next = U, y.value.year.previous = W.year(), y.value.year.next = U.year()) : W.isSame(U, "month") ? (y.value.previous = U, y.value.next = W.add(1, "month"), y.value.year.previous = U.year(), y.value.year.next = U.add(1, "year").year()) : (y.value.previous = U, y.value.next = W, y.value.year.previous = U.year(), y.value.year.next = W.year()), t.autoApply || (O.value = [U, W])) : (y.value.previous = V(t.startFrom), y.value.next = V(t.startFrom).add(1, "month"), y.value.year.previous = y.value.previous.year(), y.value.year.next = y.value.next.year());
        } else {
          if (Array.isArray(H)) {
            if (H.length > 0) {
              const [le] = H;
              U = V(le, t.formatter.date, !0);
            }
          } else if (typeof H == "object") {
            if (H) {
              const [le] = Object.values(H);
              U = V(le, t.formatter.date, !0);
            }
          } else if (H.length) {
            const [le] = H.split(t.separator);
            U = V(le, t.formatter.date, !0);
          }
          U && U.isValid() ? (P.value = u(U, t), $.value = h(U, t), y.value.previous = U, y.value.next = U.add(1, "month"), y.value.year.previous = U.year(), y.value.year.next = U.add(1, "year").year(), t.autoApply || (O.value = [U])) : (y.value.previous = V(t.startFrom), y.value.next = V(t.startFrom).add(1, "month"), y.value.year.previous = y.value.previous.year(), y.value.year.next = y.value.next.year());
        }
        const J = t.weekdaysSize === "min" ? V.weekdaysMin() : V.weekdaysShort();
        y.value.weeks = B() ? N(J) : J, y.value.months = t.formatter.month === "MMM" ? V.monthsShort() : V.months();
      });
    });
    function Gs(q) {
      return q && g.value === null && (g.value = p(m.value)), q && g.value ? "place-right" : "place-left";
    }
    function Xs(q) {
      return q && g.value === null && (g.value = p(m.value)), g.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return fe(Di, ue), fe(Ei, Oe), fe(Ai, we), fe(Ti, De), fe(Pi, ot), fe(Oi, ut), fe(Ci, ct), fe(Li, dt), fe(Ri, ft), fe(Ii, Ba), (q, H) => t.noInput ? T.value ? (D(), L("div", Uf, [
      M("div", _f, [
        M("div", qf, [
          t.shortcuts ? (D(), me(Qa, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": z(),
            "as-single": t.asSingle,
            i18n: t.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : G("", !0),
          M("div", Zf, [
            z() && !t.asSingle ? (D(), L("div", Kf, [...H[13] || (H[13] = [
              M("div", { class: "tc-h-full tc-border-r tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, null, -1)
            ])])) : G("", !0),
            M("div", {
              class: pe(["tc-relative tc-w-full lg:tc-w-80", {
                "tc-mb-3 sm:tc-mb-0 sm:tc-mr-2 md:tc-w-1/2": z() && !t.asSingle
              }])
            }, [
              X(_n, {
                panel: Y.previous,
                calendar: R.value.previous
              }, null, 8, ["panel", "calendar"]),
              M("div", Gf, [
                Ce(X(Gn, {
                  months: E.value,
                  onUpdateMonth: R.value.previous.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [it, Y.previous.month]
                ]),
                Ce(X(Zn, {
                  years: R.value.previous.years(),
                  onUpdateYear: R.value.previous.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [it, Y.previous.year]
                ]),
                Ce(M("div", null, [
                  X(Kn, { weeks: A.value }, null, 8, ["weeks"]),
                  X(qn, {
                    calendar: R.value.previous,
                    weeks: A.value,
                    "as-range": z(),
                    "week-number": e.weekNumber,
                    onUpdateDate: H[7] || (H[7] = (U) => $e(U))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [it, Y.previous.calendar]
                ])
              ])
            ], 2),
            z() && !t.asSingle ? (D(), L("div", Xf, [
              X(_n, {
                "as-prev-or-next": "",
                panel: Y.next,
                calendar: R.value.next
              }, null, 8, ["panel", "calendar"]),
              M("div", Jf, [
                Ce(X(Gn, {
                  months: E.value,
                  onUpdateMonth: R.value.next.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [it, Y.next.month]
                ]),
                Ce(X(Zn, {
                  "as-prev-or-next": "",
                  years: R.value.next.years(),
                  onUpdateYear: R.value.next.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [it, Y.next.year]
                ]),
                Ce(M("div", null, [
                  X(Kn, { weeks: A.value }, null, 8, ["weeks"]),
                  X(qn, {
                    "as-prev-or-next": "",
                    calendar: R.value.next,
                    weeks: A.value,
                    "as-range": z(),
                    "week-number": e.weekNumber,
                    onUpdateDate: H[8] || (H[8] = (U) => $e(U))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [it, Y.next.calendar]
                ])
              ])
            ])) : G("", !0)
          ])
        ]),
        t.autoApply ? G("", !0) : (D(), L("div", Qf, [
          M("div", eh, [
            M("div", th, [
              M("button", {
                type: "button",
                class: "away-apply-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-transparent tc-shadow-sm tc-px-4 tc-py-2 tc-bg-vtd-primary-600 tc-text-base tc-font-medium tc-text-white hover:tc-bg-vtd-primary-700 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800 disabled:tc-cursor-not-allowed",
                disabled: t.asSingle ? O.value.length < 1 : O.value.length < 2,
                onClick: H[9] || (H[9] = (U) => Be()),
                textContent: Q(t.options.footer.apply)
              }, null, 8, nh)
            ])
          ])
        ]))
      ])
    ])) : G("", !0) : (D(), me(te(ui), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "tc-relative tc-w-full"
    }, {
      default: be(({ open: U }) => [
        t.overlay && !t.disabled ? (D(), me(te(Cu), {
          key: 0,
          class: "tc-fixed tc-inset-0 tc-bg-black tc-opacity-30"
        })) : G("", !0),
        X(te(Ou), {
          as: "label",
          class: "tc-relative tc-block"
        }, {
          default: be(() => [
            Ee(q.$slots, "default", {
              value: P.value,
              placeholder: b.value,
              clear: ee
            }, () => [
              Ce(M("input", pa({
                ref_key: "VtdInputRef",
                ref: v
              }, q.$attrs, {
                "onUpdate:modelValue": H[0] || (H[0] = (W) => $.value = W),
                type: "text",
                class: ["tc-relative tc-block tc-w-full tc-min-w-[300px]", [
                  t.disabled ? "tc-cursor-default tc-opacity-50" : "tc-opacity-100",
                  e.inputClasses || "tc-pl-3 tc-pr-12 tc-rounded-lg tc-overflow-hidden tc-text-base tc-text-vtd-secondary-700 tc-placeholder-vtd-secondary-400 tc-transition-colors tc-bg-white tc-border-0 tc-ring-1 tc-ring-inset tc-ring-gray-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700 dark:tc-text-vtd-secondary-100 dark:tc-placeholder-vtd-secondary-500 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-20"
                ]],
                disabled: t.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: b.value,
                onKeyup: yt(ce, ["stop"]),
                onKeydown: H[1] || (H[1] = yt(() => {
                }, ["stop"]))
              }), null, 16, xf), [
                [Vt, $.value]
              ]),
              M("div", $f, [
                M("button", {
                  type: "button",
                  disabled: t.disabled,
                  class: pe([
                    t.disabled ? "tc-cursor-default tc-opacity-50" : "tc-opacity-100",
                    "tc-px-2 tc-py-1 tc-mr-1 focus:tc-outline-none tc-text-vtd-secondary-400 dark:tc-text-opacity-70 tc-rounded-md"
                  ]),
                  onClick: H[2] || (H[2] = (W) => {
                    var J;
                    return t.disabled ? !1 : P.value ? ee() : (J = v.value) == null ? void 0 : J.focus();
                  })
                }, [
                  Ee(q.$slots, "inputIcon", { value: P.value }, () => [
                    (D(), L("svg", Sf, [
                      P.value ? (D(), L("path", Mf)) : (D(), L("path", Df))
                    ]))
                  ])
                ], 10, kf)
              ])
            ])
          ]),
          _: 3
        }),
        X(cr, {
          "enter-from-class": "tc-opacity-0 tc-translate-y-3",
          "enter-to-class": "tc-opacity-100 tc-translate-y-0",
          "enter-active-class": "tc-transform tc-transition tc-ease-out tc-duration-200",
          "leave-active-class": "tc-transform tc-transition tc-ease-in tc-duration-150",
          "leave-from-class": "tc-opacity-100 tc-translate-y-0",
          "leave-to-class": "tc-opacity-0 tc-translate-y-3"
        }, {
          default: be(() => [
            t.disabled ? G("", !0) : (D(), me(te(Lu), {
              key: 0,
              as: "div",
              class: "tc-relative tc-z-50"
            }, {
              default: be(({ close: W }) => [
                M("div", {
                  class: pe(["tc-absolute tc-z-50 tc-top-full sm:tc-mt-2.5", Xs(U)])
                }, [
                  M("div", {
                    ref_key: "VtdRef",
                    ref: m,
                    class: "tc-fixed tc-inset-0 tc-z-50 tc-overflow-y-auto sm:tc-overflow-visible sm:tc-static sm:tc-z-auto tc-bg-white dark:tc-bg-vtd-secondary-800 sm:tc-rounded-lg tc-shadow-sm"
                  }, [
                    M("div", {
                      class: pe(["vtd-datepicker tc-static sm:tc-relative tc-w-full tc-bg-white sm:tc-rounded-lg sm:tc-shadow-sm tc-border-0 sm:tc-border tc-border-black/[.1] tc-px-3 tc-py-3 sm:tc-px-4 sm:tc-py-4 dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700/[1]", Gs(U)])
                    }, [
                      M("div", Ef, [
                        t.shortcuts ? (D(), me(Qa, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": z(),
                          "as-single": t.asSingle,
                          i18n: t.options.shortcuts,
                          close: W
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : G("", !0),
                        M("div", Af, [
                          z() && !t.asSingle ? (D(), L("div", Tf, [...H[10] || (H[10] = [
                            M("div", { class: "tc-h-full tc-border-r tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, null, -1)
                          ])])) : G("", !0),
                          M("div", {
                            class: pe(["tc-relative", {
                              "tc-mb-3 sm:tc-mb-0 sm:tc-mr-2 tc-w-full md:tc-w-1/2 lg:tc-w-80": z() && !t.asSingle,
                              "tc-w-full": !z() && t.asSingle
                            }])
                          }, [
                            X(_n, {
                              panel: Y.previous,
                              calendar: R.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            M("div", Pf, [
                              Ce(X(Gn, {
                                months: E.value,
                                onUpdateMonth: R.value.previous.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [it, Y.previous.month]
                              ]),
                              Ce(X(Zn, {
                                years: R.value.previous.years(),
                                onUpdateYear: R.value.previous.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [it, Y.previous.year]
                              ]),
                              Ce(M("div", null, [
                                X(Kn, { weeks: A.value }, null, 8, ["weeks"]),
                                X(qn, {
                                  calendar: R.value.previous,
                                  weeks: A.value,
                                  "as-range": z(),
                                  "week-number": e.weekNumber,
                                  onUpdateDate: (J) => $e(J, W)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [it, Y.previous.calendar]
                              ])
                            ])
                          ], 2),
                          z() && !t.asSingle ? (D(), L("div", Of, [
                            X(_n, {
                              "as-prev-or-next": "",
                              panel: Y.next,
                              calendar: R.value.next
                            }, null, 8, ["panel", "calendar"]),
                            M("div", Cf, [
                              Ce(X(Gn, {
                                months: E.value,
                                onUpdateMonth: R.value.next.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [it, Y.next.month]
                              ]),
                              Ce(X(Zn, {
                                "as-prev-or-next": "",
                                years: R.value.next.years(),
                                onUpdateYear: R.value.next.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [it, Y.next.year]
                              ]),
                              Ce(M("div", null, [
                                X(Kn, { weeks: A.value }, null, 8, ["weeks"]),
                                X(qn, {
                                  "as-prev-or-next": "",
                                  calendar: R.value.next,
                                  weeks: A.value,
                                  "as-range": z(),
                                  "week-number": e.weekNumber,
                                  onUpdateDate: (J) => $e(J, W)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [it, Y.next.calendar]
                              ])
                            ])
                          ])) : G("", !0)
                        ])
                      ]),
                      t.time ? (D(), L("div", Lf, [
                        M("div", Rf, [
                          M("div", If, [
                            M("div", null, [
                              H[11] || (H[11] = M("p", { class: "tc-font-bold" }, "Start:", -1)),
                              X(eo, {
                                modelValue: w.value,
                                "onUpdate:modelValue": [
                                  H[3] || (H[3] = (J) => w.value = J),
                                  H[4] || (H[4] = (J) => xe(J, "from"))
                                ],
                                "data-test": "hour-from"
                              }, null, 8, ["modelValue"])
                            ]),
                            M("div", null, [
                              H[12] || (H[12] = M("p", { class: "tc-font-bold" }, "End:", -1)),
                              X(eo, {
                                modelValue: x.value,
                                "onUpdate:modelValue": [
                                  H[5] || (H[5] = (J) => x.value = J),
                                  H[6] || (H[6] = (J) => xe(J, "to"))
                                ],
                                "data-test": "hour-to"
                              }, null, 8, ["modelValue"])
                            ])
                          ])
                        ])
                      ])) : G("", !0),
                      t.autoApply ? (D(), L("div", Vf, [
                        M("div", Nf, [
                          M("div", Hf, [
                            M("button", {
                              type: "button",
                              class: "away-cancel-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-vtd-secondary-300 tc-shadow-sm tc-px-4 tc-py-2 tc-bg-white tc-text-base tc-font-medium tc-text-vtd-secondary-700 hover:tc-bg-vtd-secondary-50 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-mt-0 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800",
                              onClick: (J) => W(),
                              textContent: Q(t.options.footer.cancel)
                            }, null, 8, Wf)
                          ])
                        ])
                      ])) : (D(), L("div", zf, [
                        M("div", Ff, [
                          M("div", Yf, [
                            M("button", {
                              type: "button",
                              class: "away-apply-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-transparent tc-shadow-sm tc-px-4 tc-py-2 tc-bg-vtd-primary-600 tc-text-base tc-font-medium tc-text-white hover:tc-bg-vtd-primary-700 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800 disabled:tc-cursor-not-allowed",
                              disabled: t.asSingle ? O.value.length < 1 : O.value.length < 2,
                              onClick: (J) => Be(W),
                              textContent: Q(t.options.footer.apply)
                            }, null, 8, jf),
                            M("button", {
                              type: "button",
                              class: "tc-mt-3 away-cancel-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-vtd-secondary-300 tc-shadow-sm tc-px-4 tc-py-2 tc-bg-white tc-text-base tc-font-medium tc-text-vtd-secondary-700 hover:tc-bg-vtd-secondary-50 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-mt-0 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800",
                              onClick: (J) => W(),
                              textContent: Q(t.options.footer.cancel)
                            }, null, 8, Bf)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
}), rh = { key: 0 }, ah = ["data-test"], Sg = {
  __name: "DatePicker",
  props: /* @__PURE__ */ Ie({
    disabled: {
      type: Boolean,
      default: !1
    },
    dataTest: {
      type: String,
      required: !0
    },
    placeholder: {
      type: String,
      default: "Select"
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    inline: {
      type: Boolean,
      default: !1
    },
    showError: {
      type: Boolean,
      default: !0
    },
    time: {
      type: Boolean,
      default: () => !1
    }
  }, {
    modelValue: { type: Array, default: [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["input", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = n, t = st(e, "modelValue"), i = e, a = j(() => i.time ? {
      date: "YYYY-MM-DD HH:mm",
      month: "MMM",
      preview: "MM/DD/YYYY HH:mm A"
    } : {
      date: "YYYY-MM-DD",
      month: "MMM",
      preview: "MM/DD/YYYY"
    });
    return Me(t, () => {
      r("update:modelValue", t.value);
    }), (s, l) => {
      var c, d;
      return D(), L(se, null, [
        X(zi, {
          modelValue: t.value,
          "onUpdate:modelValue": l[0] || (l[0] = (f) => t.value = f),
          disabled: e.disabled,
          formatter: a.value,
          "no-input": e.inline,
          placeholder: e.placeholder,
          "as-single": ""
        }, null, 8, ["modelValue", "disabled", "formatter", "no-input", "placeholder"]),
        e.showError && ((c = e.v) != null && c.$invalid) ? (D(), L("span", rh, [
          (D(!0), L(se, null, Ae((d = e.v) == null ? void 0 : d.$silentErrors, (f, u) => (D(), L("p", {
            key: u,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-email-error" + f.$uid,
              class: "tc-font-medium"
            }, Q(f.$message), 9, ah)
          ]))), 128))
        ])) : G("", !0)
      ], 64);
    };
  }
}, oh = { class: "tc-isolate tc-inline-flex tc-items-center" }, Mg = {
  __name: "DatePrevNextPicker",
  props: {
    modelValue: { type: Array, required: !1, default: [null, null] },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = n, t = st(e, "modelValue"), i = F(t.value[0]), a = F(t.value[1]);
    Me(t, ([l, c]) => {
      i.value = l, a.value = c;
    });
    const o = () => {
      const l = V(i.value, "YYYY-MM-DD"), c = V(a.value, "YYYY-MM-DD");
      c.diff(l, "years") === c.diff(l, "years", !0) ? (a.value = l.clone().subtract(1, "days"), i.value = a.value.clone().subtract(c.diff(l, "years"), "years")) : l.format("YYYY-MM-DD") === l.clone().startOf("months").format("YYYY-MM-DD") && c.format("YYYY-MM-DD") === c.clone().endOf("months").format("YYYY-MM-DD") ? (a.value = l.clone().subtract(1, "days"), i.value = a.value.clone().subtract(c.diff(l, "months"), "months").startOf("months")) : c.diff(l, "days", !0) === 7 ? (a.value = l.clone().subtract(1, "days"), i.value = a.value.clone().subtract(c.diff(l, "weeks"), "weeks")) : (a.value = l.clone().subtract(1, "days"), i.value = a.value.clone().subtract(c.diff(l, "days"), "days")), r("update:modelValue", [
        i.value.format("YYYY-MM-DD"),
        a.value.format("YYYY-MM-DD")
      ]);
    }, s = () => {
      const l = V(i.value, "YYYY-MM-DD"), c = V(a.value, "YYYY-MM-DD");
      c.diff(l, "years") === c.diff(l, "years", !0) ? (i.value = c.clone().add(1, "days"), a.value = i.value.clone().add(c.diff(l, "years"), "years")) : l.format("YYYY-MM-DD") === l.clone().startOf("months").format("YYYY-MM-DD") && c.format("YYYY-MM-DD") === c.clone().endOf("months").format("YYYY-MM-DD") ? (i.value = c.clone().add(1, "days"), a.value = i.value.clone().add(c.diff(l, "months"), "months").endOf("months")) : c.diff(l, "days", !0) === 7 ? (i.value = c.clone().add(1, "days"), a.value = i.value.clone().add(c.diff(l, "weeks"), "weeks")) : (i.value = c.clone().add(1, "days"), a.value = i.value.clone().add(c.diff(l, "days"), "days")), r("update:modelValue", [
        i.value.format("YYYY-MM-DD"),
        a.value.format("YYYY-MM-DD")
      ]);
    };
    return (l, c) => (D(), L("span", oh, [
      M("button", {
        class: pe([{ disabled: !1 }, "tc-relative tc-inline-flex tc-items-center tc-px-2 tc-py-2 tc-text-gray-800 hover:tc-text-gray-400 focus:tc-z-10"]),
        type: "button",
        onClick: o
      }, [
        X(te(yc), {
          class: "tc-size-5 tc-text-gray-400",
          "aria-hidden": "true"
        }),
        c[0] || (c[0] = M("span", { class: "tc-uppercase tc-font-semibold tc-text-sm" }, "Previous", -1))
      ], 2),
      c[2] || (c[2] = M("div", { class: "tc-text-gray-300" }, "|", -1)),
      M("button", {
        class: pe([{ disabled: !1 }, "tc-relative -tc-ml-px tc-inline-flex tc-items-center tc-px-2 tc-py-2 tc-text-gray-800 hover:tc-text-gray-400 focus:tc-z-10"]),
        type: "button",
        onClick: s
      }, [
        c[1] || (c[1] = M("span", { class: "tc-uppercase tc-font-semibold tc-text-sm" }, "Next", -1)),
        X(te(bc), {
          class: "tc-size-5 tc-text-gray-400",
          "aria-hidden": "true"
        })
      ], 2)
    ]));
  }
}, ih = { class: "tc-flex" }, sh = { key: 0 }, lh = ["data-test"], Dg = {
  __name: "DateRangePicker",
  props: /* @__PURE__ */ Ie({
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "Select"
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    inline: {
      type: Boolean,
      default: !1
    },
    showError: {
      type: Boolean,
      default: !0
    },
    dataTest: {
      type: String,
      required: !0
    },
    shortcutsOverride: {
      type: Function,
      default: void 0
    },
    time: {
      type: Boolean,
      default: () => !1
    }
  }, {
    modelValue: { required: !1, type: Array, default: [null, null] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = n, t = st(e, "modelValue"), i = e, a = () => [
      {
        label: "Past 1 week",
        atClick: () => [V().startOf("week"), V().endOf("week")]
      },
      {
        label: "Past 1 month",
        atClick: () => [V().startOf("month"), V().endOf("month")]
      },
      {
        label: "Past 3 months",
        atClick: () => [V().subtract(2, "months").startOf("month"), V().endOf("month")]
      },
      {
        label: "Past 6 months",
        atClick: () => [V().subtract(5, "months").startOf("month"), V().endOf("month")]
      },
      {
        label: "Past 1 year",
        atClick: () => [V().subtract(11, "months").startOf("month"), V().endOf("month")]
      }
    ], o = j(() => i.time ? {
      date: "YYYY-MM-DD HH:mm",
      month: "MMM",
      preview: "MM/DD/YYYY HH:mm A"
    } : {
      date: "YYYY-MM-DD",
      month: "MMM",
      preview: "MM/DD/YYYY"
    });
    return Me(t, () => {
      r("update:modelValue", t.value);
    }), (l, c) => {
      var d, f;
      return D(), L("div", ih, [
        X(zi, {
          modelValue: t.value,
          "onUpdate:modelValue": c[0] || (c[0] = (u) => t.value = u),
          disabled: e.disabled,
          formatter: o.value,
          "no-input": e.inline,
          placeholder: e.placeholder,
          shortcuts: i.shortcutsOverride || a,
          "as-single": "",
          "input-classes": "",
          "use-range": "",
          time: i.time
        }, null, 8, ["modelValue", "disabled", "formatter", "no-input", "placeholder", "shortcuts", "time"]),
        e.showError && ((d = e.v) != null && d.$invalid) ? (D(), L("span", sh, [
          (D(!0), L(se, null, Ae((f = e.v) == null ? void 0 : f.$silentErrors, (u, h) => (D(), L("p", {
            key: h,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-error" + u.$uid,
              class: "tc-font-medium"
            }, Q(u.$message), 9, lh)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}, uh = ["data-test", "for"], ch = {
  key: 0,
  class: "tc-text-red-500"
}, dh = ["id", "data-test", "disabled", "multiple"], fh = {
  key: 0,
  value: [],
  disabled: "",
  hidden: "",
  class: "whitespace-nowrap"
}, hh = ["value"], ph = {
  key: 1,
  class: "tc-mt-2 tc-text-sm tc-text-gray-500 dark:tc-text-gray-400"
}, vh = {
  key: 2,
  class: "tc-mt-2 tc-text-sm tc-text-green-600 dark:tc-text-green-400"
}, mh = {
  key: 3,
  class: "block tc-mb-2"
}, gh = ["data-test"], Eg = {
  __name: "InputSelect",
  props: /* @__PURE__ */ Ie({
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    showError: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    },
    v: {
      type: Object,
      default: () => {
      }
    },
    dataTest: {
      type: String,
      required: !0
    }
  }, {
    modelValue: { default: null, required: !1, type: [String, Array, Number] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = st(e, "modelValue"), t = n;
    return Me(r, () => {
      t("update:modelValue", r.value);
    }), (a, o) => {
      var s, l, c, d, f;
      return D(), L("div", null, [
        e.label ? (D(), L("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          for: e.dataTest,
          class: "tc-block tc-mb-2 tc-text-base tc-font-medium tc-text-gray-900"
        }, [
          je(Q(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (D(), L("span", ch, "*")) : G("", !0)
        ], 8, uh)) : G("", !0),
        Ce(M("select", {
          id: e.dataTest,
          "onUpdate:modelValue": o[0] || (o[0] = (u) => r.value = u),
          "data-test": e.dataTest + "-select",
          disabled: e.disabled,
          multiple: e.multiple,
          class: pe(["tc-block tc-w-full tc-rounded-lg tc-px-4 tc-py-2 tc-text-gray-900 tc-text-base border border-gray-400 sm:border-0", {
            "tc-border-red-300 tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-border-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
            "tc-border-0 tc-ring-1 tc-ring-inset tc-ring-gray-300 tc-shadow-sm placeholder:tc-text-black focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((c = e.v) != null && c.$invalid),
            disabled: e.disabled
          }])
        }, [
          e.placeholder ? (D(), L("option", fh, Q(e.placeholder), 1)) : G("", !0),
          (D(!0), L(se, null, Ae(e.options, (u, h) => (D(), L("option", {
            key: h,
            value: u.value,
            class: "whitespace-nowrap"
          }, Q(u.label), 9, hh))), 128))
        ], 10, dh), [
          [Ro, r.value]
        ]),
        a.$slots.info ? (D(), L("p", ph, [
          Ee(a.$slots, "info")
        ])) : G("", !0),
        a.$slots.success ? (D(), L("p", vh, [
          Ee(a.$slots, "success")
        ])) : G("", !0),
        e.showError && ((d = e.v) != null && d.$invalid) ? (D(), L("span", mh, [
          (D(!0), L(se, null, Ae((f = e.v) == null ? void 0 : f.$silentErrors, (u, h) => (D(), L("p", {
            key: h,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            M("span", {
              "data-test": e.dataTest + "-email-error" + u.$uid,
              class: "tc-font-medium"
            }, Q(u.$message), 9, gh)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}, yh = ["data-test", "disabled"], mn = {
  __name: "FormButton",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "primary"
    },
    dataTest: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      default: "md"
    }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const r = n;
    return (t, i) => (D(), L("button", {
      class: pe([
        "tc-font-bold tc-rounded tc-text-base",
        e.disabled ? "tc-bg-tp-grey-300 tc-text-white" : e.type === "danger" ? "tc-bg-red-500 tc-text-white hover:tc-bg-red-600 focus:tc-outline-none" : e.type === "gray" ? "tc-bg-tp-grey-300 tc-text-gray-400" : e.type === "black-outline" ? "tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2" : e.type === "primary" ? "tc-bg-tonik-purple hover:tc-bg-tonik-purple-dark tc-text-white" : e.type === "primary-outline" ? "tc-bg-transparent tc-text-tp-primary tc-border-tp-primary tc-border hover:tc-bg-tp-primary hover:tc-text-white" : e.type === "secondary" ? "tc-bg-tp-secondary hover:tc-bg-tp-secondary-dark tc-text-gray-800" : e.type === "secondary-outline" ? "tc-bg-transparent tc-text-tp-secondary tc-border-tp-secondary tc-border hover:tc-bg-tp-secondary hover:tc-text-white" : "tc-bg-blue-500 tc-text-white hover:tc-bg-blue-700",
        e.size === "sm" ? "tc-text-sm tc-px-4 tc-py-2.5" : e.size === "md" ? "tc-text-base tc-px-5 tc-py-3" : e.size === "xs" ? "tc-text-xs tc-px-2 tc-py-1" : "tc-text-lg tc-px-8 tc-py-3"
      ]),
      "data-test": e.dataTest + "-button",
      disabled: e.disabled,
      onClick: i[0] || (i[0] = (a) => r("click"))
    }, [
      Ee(t.$slots, "default", {
        dataTest: e.dataTest + "-text"
      }, () => [
        je(Q(e.dataTest), 1)
      ])
    ], 10, yh));
  }
};
function to(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function bh(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function wh(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function xh(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function $h(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function kh(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Sh(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", { d: "M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" }),
    M("path", { d: "M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" })
  ]);
}
function Mh(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Dh(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Eh(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ah(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Th(e, n) {
  return D(), L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Ph = { class: "tc-font-bold tc-text-sm tc-text-black" }, Oh = { class: "py-1" }, Ch = ["onClick"], Lh = ["data-test", "disabled"], Ag = {
  __name: "DownloadButton",
  props: {
    data: Blob,
    disabled: {
      type: Boolean,
      default: !1
    },
    filename: {
      type: String,
      default: ""
    },
    async: {
      type: Boolean,
      default: !1
    },
    dataTest: {
      type: String,
      required: !0
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["download", "asyncDone"],
  setup(e, { emit: n }) {
    const r = e, t = n;
    return Me(() => r.data, async (i, a) => {
      if (r.data === null)
        return;
      if (r.async) {
        const l = i instanceof Blob ? await i.text() : i;
        t("asyncDone", l);
        return;
      }
      const o = window.URL.createObjectURL(new Blob([i])), s = document.createElement("a");
      s.href = o, s.setAttribute("download", r.filename), document.body.appendChild(s), s.click();
    }), (i, a) => r.options.length >= 1 ? (D(), me(te(ti), {
      key: 0,
      as: "div",
      class: "relative inline-block text-left"
    }, {
      default: be(() => [
        M("div", null, [
          X(te(ni), {
            "data-test": e.dataTest + "-download-button",
            disabled: e.disabled,
            class: "tc-flex tc-items-center tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2"
          }, {
            default: be(() => [
              X(te(to), { class: "tc-size-3 tc-mr-3 tc-text-black" }),
              M("span", Ph, [
                Ee(i.$slots, "text", {}, () => [
                  a[1] || (a[1] = je("Download", -1))
                ])
              ])
            ]),
            _: 3
          }, 8, ["data-test", "disabled"])
        ]),
        X(cr, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: be(() => [
            X(te(ri), { class: "tc-absolute tc-right-0 tc-z-1 tc-w-56 tc-origin-top-right tc-rounded-md tc-bg-white tc-shadow-lg tc-border tc-border-tp-grey-300 focus:tc-outline-none" }, {
              default: be(() => [
                M("div", Oh, [
                  (D(!0), L(se, null, Ae(r.options, (o) => (D(), me(te(ai), {
                    key: `item-${o.key}`
                  }, {
                    default: be(({ active: s }) => [
                      M("div", {
                        class: pe([s ? "tc-bg-gray-100 tc-text-gray-900 tc-outline-none" : "tc-text-gray-700", "tc-block tc-px-4 tc-py-2 tc-text-sm tc-cursor-pointer"]),
                        onClick: (l) => t("download", o.type)
                      }, Q(o.label), 11, Ch)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 3
    })) : (D(), L("button", {
      key: 1,
      "data-test": e.dataTest + "-download-button",
      disabled: e.disabled,
      class: "tc-flex tc-items-center tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2",
      onClick: a[0] || (a[0] = (o) => t("download"))
    }, [
      X(te(to), { class: "tc-size-3 tc-mr-3" }),
      a[2] || (a[2] = M("span", { class: "tc-font-bold tc-text-sm" }, "Download", -1))
    ], 8, Lh));
  }
}, Rh = { "aria-label": "Progress" }, Ih = {
  class: "tc-flex tc-items-center",
  role: "list"
}, zh = ["onClick"], Fh = { class: "tc-sr-only" }, Yh = ["onClick"], jh = { class: "tc-sr-only" }, Bh = ["onClick"], Vh = { class: "tc-sr-only" }, Tg = {
  __name: "StepBar",
  props: {
    steps: {
      type: Array,
      default: () => []
    }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const r = n, t = (i) => {
      r("click", i);
    };
    return (i, a) => (D(), L("nav", Rh, [
      M("ol", Ih, [
        (D(!0), L(se, null, Ae(e.steps, (o, s) => (D(), L("li", {
          key: o.name,
          class: pe([
            s !== e.steps.length - 1 ? "tc-pr-8 sm:tc-pr-20" : "",
            "tc-relative"
          ])
        }, [
          o.status === "complete" ? (D(), L(se, { key: 0 }, [
            a[1] || (a[1] = M("div", {
              "aria-hidden": "true",
              class: "tc-absolute tc-inset-0 tc-flex tc-items-center"
            }, [
              M("div", { class: "tc-h-1.5 tc-w-full tc-bg-green-1" })
            ], -1)),
            M("a", {
              class: "tc-cursor-pointer tc-relative tc-flex tc-h-6 tc-w-6 tc-items-center tc-justify-center tc-rounded-full tc-bg-green-1 hover:tc-bg-green-1",
              onClick: (l) => t(o)
            }, [
              a[0] || (a[0] = M("svg", {
                width: "14",
                height: "10",
                viewBox: "0 0 12 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                M("path", {
                  d: "M1.83398 4.41667L5.16732 6.91667L11.0007 1.5",
                  stroke: "#1F2931",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1)),
              M("span", Fh, Q(o.name), 1)
            ], 8, zh)
          ], 64)) : o.status === "current" ? (D(), L(se, { key: 1 }, [
            a[3] || (a[3] = M("div", {
              "aria-hidden": "true",
              class: "tc-cursor-pointer tc-absolute tc-inset-0 tc-flex tc-items-center"
            }, [
              M("div", { class: "tc-h-1.5 tc-w-full tc-bg-grey-2" })
            ], -1)),
            M("a", {
              "aria-current": "step",
              class: "tc-cursor-pointer tc-relative tc-flex tc-h-6 tc-w-6 tc-items-center tc-justify-center tc-rounded-full tc-border-4 tc-border-green-1 bg-white",
              onClick: (l) => t(o)
            }, [
              a[2] || (a[2] = M("span", {
                "aria-hidden": "true",
                class: "tc-h-1.5 tc-w-2.5 tc-rounded-full tc-bg-white"
              }, null, -1)),
              M("span", jh, Q(o.name), 1)
            ], 8, Yh)
          ], 64)) : (D(), L(se, { key: 2 }, [
            a[4] || (a[4] = M("div", {
              "aria-hidden": "true",
              class: "tc-absolute tc-inset-0 tc-flex tc-items-center"
            }, [
              M("div", { class: "tc-h-1.5 tc-w-full tc-bg-grey-2" })
            ], -1)),
            M("a", {
              class: "tc-cursor-pointer tc-group tc-relative tc-flex tc-h-6 tc-w-6 tc-items-center tc-justify-center tc-rounded-full tc-border-4 tc-border-grey-2 tc-bg-white",
              onClick: (l) => t(o)
            }, [
              M("span", Vh, Q(o.name), 1)
            ], 8, Bh)
          ], 64))
        ], 2))), 128))
      ])
    ]));
  }
}, Nh = { class: "tc-flex tc-min-h-full tc-items-end tc-justify-center tc-p-4 tc-text-center sm:tc-items-center sm:tc-p-0" }, Hh = { class: "tc-absolute tc-right-0 tc-top-0 tc-pr-4 tc-pt-4 sm:tc-block" }, Wh = { class: "sm:tc-flex sm:tc-items-start sm:tc-justify-center" }, Uh = { class: "tc-mt-3 sm:tc-ml-4 sm:tc-mt-0 sm:tc-text-left tc-w-full" }, _h = { class: "tc-mt-2" }, qh = { class: "tc-text-base tc-text-gray-500" }, Zh = {
  key: 0,
  class: "tc-mt-5 sm:tc-mt-4 sm:tc-flex"
}, Pg = {
  __name: "ModalPopup",
  props: {
    scrollable: {
      type: Boolean,
      default: !0
    },
    buttons: {
      type: Boolean,
      default: !0
    },
    closeOutside: {
      type: Boolean,
      default: !0
    },
    backdrop: {
      type: Boolean,
      default: !0
    },
    size: {
      type: String,
      default: "sm"
    },
    zindex: {
      type: Number,
      default: 10
    }
  },
  emits: ["close", "save"],
  setup(e, { emit: n }) {
    const r = n, t = e, i = {
      sm: "tc-min-w-lg",
      md: "tc-min-w-2xl",
      lg: "tc-min-w-5xl"
    }, a = {
      10: "tc-z-10",
      15: "tc-z-15",
      20: "tc-z-20",
      25: "tc-z-25"
    };
    function o() {
      t.closeOutside && r("close");
    }
    return (s, l) => (D(), me(te(vi), {
      show: !0,
      as: "template",
      onClose: l[3] || (l[3] = (c) => o())
    }, {
      default: be(() => [
        X(te(xu), {
          as: "div",
          class: pe(`relative ${a[e.zindex]}`)
        }, {
          default: be(() => [
            X(te(Kr), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: be(() => [
                t.backdrop ? (D(), L("div", {
                  key: 0,
                  class: pe(`fixed ${a[e.zindex]} tc-inset-0 tc-bg-gray-500 tc-bg-opacity-75 tc-transition-opacity`)
                }, null, 2)) : G("", !0)
              ]),
              _: 1
            }),
            M("div", {
              class: pe(`tc-fixed tc-inset-0 ${a[e.zindex]} tc-w-full tc-overflow-y-auto`)
            }, [
              M("div", Nh, [
                X(te(Kr), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: be(() => [
                    X(te($u), {
                      class: pe(`tc-relative tc-transform tc-overflow-hidden tc-rounded-lg tc-bg-white tc-px-4 tc-pb-4 tc-pt-5 tc-text-left tc-shadow-xl tc-transition-all sm:tc-my-8 sm:tc-p-6 ${i[e.size]}`)
                    }, {
                      default: be(() => [
                        M("div", Hh, [
                          M("button", {
                            class: "tc-rounded-md tc-bg-white tc-text-gray-400 hover:tc-text-gray-500 focus:tc-outline-none focus:tc-ring-0",
                            type: "button",
                            onClick: l[0] || (l[0] = (c) => r("close"))
                          }, [
                            l[4] || (l[4] = M("span", { class: "sr-only" }, "Close", -1)),
                            X(te(Th), {
                              "aria-hidden": "true",
                              class: "tc-size-6"
                            })
                          ])
                        ]),
                        M("div", Wh, [
                          M("div", Uh, [
                            X(te(ku), {
                              as: "h2",
                              class: "tc-text-lg tc-font-semibold tc-leading-6 tc-text-gray-900"
                            }, {
                              default: be(() => [
                                Ee(s.$slots, "title")
                              ]),
                              _: 3
                            }),
                            M("div", _h, [
                              M("p", qh, [
                                Ee(s.$slots, "content")
                              ])
                            ])
                          ])
                        ]),
                        e.buttons ? (D(), L("div", Zh, [
                          Ee(s.$slots, "buttons", { class: "tc-flex-col" }, () => [
                            X(mn, {
                              class: "tc-justify-center",
                              "data-test": "cancel-app",
                              type: "secondary-bordered",
                              onClick: l[1] || (l[1] = (c) => r("close"))
                            }, {
                              default: be(() => [...l[5] || (l[5] = [
                                je(" Cancel ", -1)
                              ])]),
                              _: 1
                            }),
                            X(mn, {
                              class: "tc-justify-center tc-ml-4",
                              "data-test": "save-app",
                              type: "primary",
                              onClick: l[2] || (l[2] = (c) => r("save"))
                            }, {
                              default: be(() => [...l[6] || (l[6] = [
                                je(" Save ", -1)
                              ])]),
                              _: 1
                            })
                          ])
                        ])) : G("", !0)
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                })
              ])
            ], 2)
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }));
  }
};
function Kh(e) {
  F(null);
  let n = null;
  const r = async () => {
    if (!(typeof window > "u"))
      return n || (n = (await import("./plotly.min-DK8Svk3i.js").then((a) => a.p)).default, n);
  }, t = async () => {
    if (typeof window > "u") return;
    const a = await r();
    a && a.newPlot(
      e.id,
      e.getData(),
      e.layout || {},
      {
        showSendToCloud: !0,
        responsive: !0
      }
    );
  }, i = async () => {
    if (typeof window > "u") return;
    const a = await r();
    a && a.react(
      e.id,
      e.getData(),
      e.layout || {},
      {
        responsive: !0,
        modeBarButtonsToRemove: ["toImage"],
        displaylogo: !1
      }
    );
  };
  return he(() => {
    t();
  }), Me(
    () => e,
    () => {
      i();
    },
    { deep: !0 }
  ), {
    drawPlot: t,
    updatePlot: i
  };
}
const Gh = ["id"], Og = {
  __name: "ChartComponent",
  props: {
    id: { type: String, required: !0 },
    data: { type: Array, required: !0 },
    config: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const n = () => "#" + Math.floor(Math.random() * 16777215).toString(16), r = [
      "#1f77b4",
      "#185a88",
      "#ff7f0e",
      "#E71D36",
      "#ad8bcc",
      "#9467bd",
      "#7b49a8",
      "#8c564b",
      "#e377c2",
      "#7f7f7f",
      "#bcbd22",
      "#0062cc",
      "#6610f2",
      "#6f42c1",
      "#e83e8c",
      "#dc3545",
      "#fd7e14",
      "#ffc107",
      "#28a745",
      "#6c757d",
      "#343a40",
      "#007bff"
    ], t = e, i = () => {
      var s, l;
      return (l = (s = t.config) == null ? void 0 : s.layout) != null && l.colorway && Array.isArray(t.config.layout.colorway) ? t.config.layout.colorway : r;
    };
    function a(s) {
      if (!s || !Array.isArray(s) || s.length === 0)
        return [];
      const { x: l, headers: c, type: d, opacity: f, options: u } = t.config, h = Object.keys(c), p = h.reduce((k, P) => ({ ...k, [P]: [] }), { x: [] }), m = s.reduce((k, P) => {
        const $ = h.reduce((S, w) => (S[w] = [...S[w], P[w]], S), p);
        return $.x = [...k.x, P[l]], $;
      }, p), v = m.x;
      delete m.x;
      const { parents: g } = t.config, b = i();
      switch (d) {
        case "pie":
          return Object.keys(m).reduce((k, P) => [...k, {
            values: m[P],
            labels: v,
            type: d,
            ...u ? u[P] || {} : {}
          }], []);
        case "treemap":
          return Object.keys(m).reduce((k, P) => [...k, {
            type: "treemap",
            labels: v,
            parents: g,
            values: m[P],
            textinfo: "label+value+percent entry",
            ...u ? u[P] || {} : {}
          }], []);
        case "bar":
          return Object.keys(m).reduce((k, P, $) => [...k, {
            x: v,
            y: m[P],
            name: c[P],
            marker: { color: b[$] ?? n() },
            type: d,
            opacity: 1,
            ...u ? u[P] || {} : {}
          }], []);
        case "scatter":
        default:
          return Object.keys(m).reduce((k, P, $) => [...k, {
            x: v,
            y: m[P],
            name: c[P],
            type: d || "scatter",
            opacity: f && $ > 0 ? f : 1,
            marker: { color: b[$] ?? n() },
            ...u ? u[P] || {} : {}
          }], []);
      }
    }
    const o = () => a(t.data);
    return Kh({
      id: t.id,
      layout: t.config.layout,
      getData: o
    }), (s, l) => (D(), L("div", { id: e.id }, null, 8, Gh));
  }
};
function no(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Te(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? no(Object(r), !0).forEach(function(t) {
      wt(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function wt(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function Xh(e, n) {
  if (e == null) return {};
  var r, t, i = function(o, s) {
    if (o == null) return {};
    var l, c, d = {}, f = Object.keys(o);
    for (c = 0; c < f.length; c++) l = f[c], s.indexOf(l) >= 0 || (d[l] = o[l]);
    return d;
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (t = 0; t < a.length; t++) r = a[t], n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function cn(e) {
  return function(n) {
    if (Array.isArray(n)) return Cr(n);
  }(e) || function(n) {
    if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
  }(e) || function(n, r) {
    if (n) {
      if (typeof n == "string") return Cr(n, r);
      var t = Object.prototype.toString.call(n).slice(8, -1);
      if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
      if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Cr(n, r);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Cr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
  return t;
}
var ro, Jh, Xn, qe = (ro = function(e) {
  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  (function() {
    var n = {}.hasOwnProperty;
    function r() {
      for (var t = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var o = typeof a;
          if (o === "string" || o === "number") t.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var s = r.apply(null, a);
              s && t.push(s);
            }
          } else if (o === "object") if (a.toString === Object.prototype.toString) for (var l in a) n.call(a, l) && a[l] && t.push(l);
          else t.push(a.toString());
        }
      }
      return t.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
}, ro(Xn = { path: Jh, exports: {}, require: function(e, n) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(n == null && Xn.path);
} }, Xn.exports), Xn.exports), At = function(e) {
  return function(n, r) {
    if (!n) return e;
    var t;
    typeof n == "string" ? t = n : r = n;
    var i = e;
    return t && (i += "__" + t), i + (r ? Object.keys(r).reduce(function(a, o) {
      var s = r[o];
      return s && (a += " " + (typeof s == "boolean" ? i + "--" + o : i + "--" + o + "_" + s)), a;
    }, "") : "");
  };
};
function Gr(e, n, r) {
  var t, i, a, o, s;
  function l() {
    var d = Date.now() - o;
    d < n && d >= 0 ? t = setTimeout(l, n - d) : (t = null, r || (s = e.apply(a, i), a = i = null));
  }
  n == null && (n = 100);
  var c = function() {
    a = this, i = arguments, o = Date.now();
    var d = r && !t;
    return t || (t = setTimeout(l, n)), d && (s = e.apply(a, i), a = i = null), s;
  };
  return c.clear = function() {
    t && (clearTimeout(t), t = null);
  }, c.flush = function() {
    t && (s = e.apply(a, i), a = i = null, clearTimeout(t), t = null);
  }, c;
}
Gr.debounce = Gr;
var Xr = Gr, de = function() {
  return de = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) for (var i in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    return e;
  }, de.apply(this, arguments);
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Fi(e, n) {
  var r, t;
  return e && n ? (r = "" + e + n[0].toUpperCase() + n.slice(1), t = e + "-" + n) : (r = e || n, t = e || n), { name: r, classname: t };
}
function Yi(e) {
  return /^blob:/.test(e);
}
function ao(e) {
  return Yi(e) || function(n) {
    return /^data:/.test(n);
  }(e);
}
function pn(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function Ke(e) {
  return e === void 0;
}
function sr(e) {
  return typeof e == "object" && e !== null;
}
function Jr(e, n, r) {
  var t = {};
  return sr(e) ? (Object.keys(n).forEach(function(i) {
    Ke(e[i]) ? t[i] = n[i] : sr(n[i]) ? sr(e[i]) ? t[i] = Jr(e[i], n[i], r[i]) : t[i] = e[i] ? n[i] : r[i] : n[i] === !0 || n[i] === !1 ? t[i] = !!e[i] : t[i] = e[i];
  }), t) : e ? n : r;
}
function Jn(e) {
  var n = Number(e);
  return Number.isNaN(n) ? e : n;
}
function oo(e) {
  return typeof (e == "number" || /* @__PURE__ */ function(n) {
    return typeof n == "object" && n !== null;
  }(e) && toString.call(e) == "[object Number]") && !ji(e);
}
function ji(e) {
  return e != e;
}
function Bi(e, n) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
var An = function(e, n) {
  e === void 0 && (e = {}), n === void 0 && (n = {}), this.type = "manipulateImage", this.move = e, this.scale = n;
}, Qh = function(e, n) {
  n === void 0 && (n = {}), this.type = "resize", this.directions = e, this.params = n;
}, Ma = function(e) {
  this.type = "move", this.directions = e;
}, ep = function() {
  function e(n, r, t, i, a) {
    this.type = "drag", this.nativeEvent = n, this.position = t, this.previousPosition = i, this.element = r, this.anchor = a;
  }
  return e.prototype.shift = function() {
    var n = this, r = n.element, t = n.anchor, i = n.position;
    if (r) {
      var a = r.getBoundingClientRect(), o = a.left, s = a.top;
      return { left: i.left - o - t.left, top: i.top - s - t.top };
    }
    return { left: 0, top: 0 };
  }, e;
}(), Da = { name: "DraggableElement", props: { classname: { type: String } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  if (!this.$refs.draggable) throw new Error('You should add ref "draggable" to your root element to use draggable mixin');
  this.touches = [], this.hovered = !1;
}, methods: { onMouseOver: function() {
  this.hovered || (this.hovered = !0, this.$emit("enter"));
}, onMouseLeave: function() {
  this.hovered && !this.touches.length && (this.hovered = !1, this.$emit("leave"));
}, onTouchStart: function(e) {
  e.cancelable && !this.disabled && e.touches.length === 1 && (this.touches = cn(e.touches), this.hovered || (this.$emit("enter"), this.hovered = !0), e.touches.length && this.initAnchor(this.touches.reduce(function(n, r) {
    return { clientX: n.clientX + r.clientX / e.touches.length, clientY: n.clientY + r.clientY / e.touches.length };
  }, { clientX: 0, clientY: 0 })), e.preventDefault && e.preventDefault(), e.stopPropagation());
}, onTouchEnd: function() {
  this.processEnd();
}, onTouchMove: function(e) {
  this.touches.length && (this.processMove(e, e.touches), e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation());
}, onMouseDown: function(e) {
  if (!this.disabled) {
    var n = { fake: !0, clientX: e.clientX, clientY: e.clientY };
    this.touches = [n], this.initAnchor(n), e.stopPropagation();
  }
}, onMouseMove: function(e) {
  this.touches.length && (this.processMove(e, [{ fake: !0, clientX: e.clientX, clientY: e.clientY }]), e.preventDefault && e.preventDefault());
}, onMouseUp: function() {
  this.processEnd();
}, initAnchor: function(e) {
  var n = this.$refs.draggable.getBoundingClientRect(), r = n.left, t = n.right, i = n.bottom, a = n.top;
  this.anchor = { left: e.clientX - r, top: e.clientY - a, bottom: i - e.clientY, right: t - e.clientX };
}, processMove: function(e, n) {
  var r = cn(n);
  if (this.touches.length) {
    if (this.touches.length === 1 && r.length === 1) {
      var t = this.$refs.draggable;
      this.$emit("drag", new ep(e, t, { left: r[0].clientX, top: r[0].clientY }, { left: this.touches[0].clientX, top: this.touches[0].clientY }, this.anchor));
    }
    this.touches = r;
  }
}, processEnd: function() {
  this.touches.length && this.$emit("drag-end"), this.hovered && (this.$emit("leave"), this.hovered = !1), this.touches = [];
} }, emits: ["drag", "drag-end", "leave", "enter"] };
Da.render = function(e, n, r, t, i, a) {
  return D(), me("div", { ref: "draggable", class: r.classname, onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onMouseover: n[3] || (n[3] = function() {
    return a.onMouseOver && a.onMouseOver.apply(a, arguments);
  }), onMouseleave: n[4] || (n[4] = function() {
    return a.onMouseLeave && a.onMouseLeave.apply(a, arguments);
  }) }, [Ee(e.$slots, "default")], 34);
};
var Lr = At("vue-handler-wrapper"), Vi = { name: "HandlerWrapper", components: { DraggableElement: Da }, props: { horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, computed: { classes: function() {
  var e;
  if (this.horizontalPosition || this.verticalPosition) {
    var n, r = Fi(this.horizontalPosition, this.verticalPosition);
    e = Lr((wt(n = {}, r.classname, !0), wt(n, "disabled", this.disabled), n));
  } else e = Lr({ disabled: this.disabled });
  return { root: e, draggable: Lr("draggable") };
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Vi.render = function(e, n, r, t, i, a) {
  var o = Bt("DraggableElement");
  return D(), me("div", { class: a.classes.root }, [X(o, { class: a.classes.draggable, onDrag: n[1] || (n[1] = function(s) {
    return e.$emit("drag", s);
  }), onDragEnd: n[2] || (n[2] = function(s) {
    return e.$emit("drag-end");
  }), onLeave: n[3] || (n[3] = function(s) {
    return e.$emit("leave");
  }), onEnter: n[4] || (n[4] = function(s) {
    return e.$emit("enter");
  }) }, { default: be(function() {
    return [Ee(e.$slots, "default")];
  }), _: 3 }, 8, ["class"])], 2);
};
var tp = At("vue-line-wrapper"), Ni = { name: "LineWrapper", components: { DraggableElement: Da }, props: { position: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } }, computed: { classname: function() {
  var e;
  return tp((wt(e = {}, this.position, !0), wt(e, "disabled", this.disabled), e));
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ni.render = function(e, n, r, t, i, a) {
  var o = Bt("DraggableElement");
  return D(), me(o, { class: a.classname, onDrag: n[1] || (n[1] = function(s) {
    return e.$emit("drag", s);
  }), onDragEnd: n[2] || (n[2] = function(s) {
    return e.$emit("drag-end");
  }), onLeave: n[3] || (n[3] = function(s) {
    return e.$emit("leave");
  }), onEnter: n[4] || (n[4] = function(s) {
    return e.$emit("enter");
  }) }, { default: be(function() {
    return [Ee(e.$slots, "default")];
  }), _: 3 }, 8, ["class"]);
};
var Ot = ["left", "right", "top", "bottom"], np = ["left", "right"], rp = ["top", "bottom"], ap = ["left", "top"], op = ["fill-area", "fit-area", "stencil", "none"], io = { left: 0, top: 0, width: 0, height: 0 };
function so(e, n, r) {
  return !(r = r || ["width", "height", "left", "top"]).some(function(t) {
    return e[t] !== n[t];
  });
}
function Lt(e) {
  return { left: e.left, top: e.top, right: e.left + e.width, bottom: e.top + e.height };
}
function gn(e, n) {
  return { left: e.left - n.left, top: e.top - n.top };
}
function et(e) {
  return { left: e.left + e.width / 2, top: e.top + e.height / 2 };
}
function Pn(e, n) {
  var r = { left: 0, top: 0, right: 0, bottom: 0 };
  return Ot.forEach(function(t) {
    var i = n[t], a = Lt(e)[t];
    r[t] = i !== void 0 && a !== void 0 ? t === "left" || t === "top" ? Math.max(0, i - a) : Math.max(0, a - i) : 0;
  }), r;
}
function Pt(e, n) {
  return { left: e.left - n.left, top: e.top - n.top, width: e.width + n.left + n.right, height: e.height + n.top + n.bottom };
}
function mr(e) {
  return { left: -e.left, top: -e.top };
}
function lt(e, n) {
  return de(de({}, e), { left: e.left + n.left, top: e.top + n.top });
}
function $t(e, n, r, t) {
  if (n !== 1) {
    if (r) {
      var i = et(e);
      return { width: e.width * n, height: e.height * n, left: e.left + e.width * (1 - n) / 2 + (r.left - i.left) * (1 - n), top: e.top + e.height * (1 - n) / 2 + (r.top - i.top) * (1 - n) };
    }
    return { width: e.width * n, height: e.height * n, left: e.left + e.width * (1 - n) / 2, top: e.top + e.height * (1 - n) / 2 };
  }
  return e;
}
function Pe(e) {
  return e.width / e.height;
}
function yn(e, n) {
  return Math.min(n.right !== void 0 && n.left !== void 0 ? (n.right - n.left) / e.width : 1 / 0, n.bottom !== void 0 && n.top !== void 0 ? (n.bottom - n.top) / e.height : 1 / 0);
}
function bn(e, n) {
  var r = { left: 0, top: 0 }, t = Pn(e, n);
  return t.left && t.left > 0 ? r.left = t.left : t.right && t.right > 0 && (r.left = -t.right), t.top && t.top > 0 ? r.top = t.top : t.bottom && t.bottom > 0 && (r.top = -t.bottom), r;
}
function Rr(e, n) {
  var r;
  return n.minimum && e < n.minimum ? r = n.minimum : n.maximum && e > n.maximum && (r = n.maximum), r;
}
function Hi(e, n) {
  var r = Pe(e), t = Pe(n);
  return n.width < 1 / 0 && n.height < 1 / 0 ? r > t ? { width: n.width, height: n.width / r } : { width: n.height * r, height: n.height } : n.width < 1 / 0 ? { width: n.width, height: n.width / r } : n.height < 1 / 0 ? { width: n.height * r, height: n.height } : e;
}
function Wi(e, n) {
  var r = n * Math.PI / 180;
  return { width: Math.abs(e.width * Math.cos(r)) + Math.abs(e.height * Math.sin(r)), height: Math.abs(e.width * Math.sin(r)) + Math.abs(e.height * Math.cos(r)) };
}
function Zt(e, n) {
  var r = n * Math.PI / 180;
  return { left: e.left * Math.cos(r) - e.top * Math.sin(r), top: e.left * Math.sin(r) + e.top * Math.cos(r) };
}
function gr(e, n) {
  var r = Pn(tt(e, n), n);
  return r.left + r.right + r.top + r.bottom ? r.left + r.right > r.top + r.bottom ? Math.min((e.width + r.left + r.right) / e.width, yn(e, n)) : Math.min((e.height + r.top + r.bottom) / e.height, yn(e, n)) : 1;
}
function tt(e, n, r) {
  r === void 0 && (r = !1);
  var t = bn(e, n);
  return lt(e, r ? mr(t) : t);
}
function Qr(e) {
  return { width: e.right !== void 0 && e.left !== void 0 ? e.right - e.left : 1 / 0, height: e.bottom !== void 0 && e.top !== void 0 ? e.bottom - e.top : 1 / 0 };
}
function ip(e, n) {
  return de(de({}, e), { minWidth: Math.min(n.width, e.minWidth), minHeight: Math.min(n.height, e.minHeight), maxWidth: Math.min(n.width, e.maxWidth), maxHeight: Math.min(n.height, e.maxHeight) });
}
function Ui(e, n, r) {
  r === void 0 && (r = !0);
  var t = {};
  return Ot.forEach(function(i) {
    var a = e[i], o = n[i];
    a !== void 0 && o !== void 0 ? t[i] = i === "left" || i === "top" ? r ? Math.max(a, o) : Math.min(a, o) : r ? Math.min(a, o) : Math.max(a, o) : o !== void 0 ? t[i] = o : a !== void 0 && (t[i] = a);
  }), t;
}
function yr(e, n) {
  return Ui(e, n, !0);
}
function lo(e) {
  var n = e.size, r = e.aspectRatio, t = e.ignoreMinimum, i = e.sizeRestrictions;
  return !!((n.correctRatio || Pe(n) >= r.minimum && Pe(n) <= r.maximum) && n.height <= i.maxHeight && n.width <= i.maxWidth && n.width && n.height && (t || n.height >= i.minHeight && n.width >= i.minWidth));
}
function uo(e, n) {
  return Math.pow(e.width - n.width, 2) + Math.pow(e.height - n.height, 2);
}
function Yt(e) {
  var n = e.width, r = e.height, t = e.sizeRestrictions, i = { minimum: e.aspectRatio && e.aspectRatio.minimum || 0, maximum: e.aspectRatio && e.aspectRatio.maximum || 1 / 0 }, a = { width: Math.max(t.minWidth, Math.min(t.maxWidth, n)), height: Math.max(t.minHeight, Math.min(t.maxHeight, r)) };
  function o(c, d) {
    return d === void 0 && (d = !1), c.reduce(function(f, u) {
      return lo({ size: u, aspectRatio: i, sizeRestrictions: t, ignoreMinimum: d }) && (!f || uo(u, { width: n, height: r }) < uo(f, { width: n, height: r })) ? u : f;
    }, null);
  }
  var s = [];
  i && [i.minimum, i.maximum].forEach(function(c) {
    c && s.push({ width: a.width, height: a.width / c, correctRatio: !0 }, { width: a.height * c, height: a.height, correctRatio: !0 });
  }), lo({ size: a, aspectRatio: i, sizeRestrictions: t }) && s.push(a);
  var l = o(s) || o(s, !0);
  return l && { width: l.width, height: l.height };
}
function ea(e) {
  var n = e.event, r = e.coordinates, t = e.positionRestrictions, i = t === void 0 ? {} : t, a = lt(r, n.directions);
  return lt(a, bn(a, i));
}
function sp(e) {
  var n = e.coordinates, r = e.transform, t = e.imageSize, i = e.sizeRestrictions, a = e.positionRestrictions, o = e.aspectRatio, s = e.visibleArea, l = function(d, f) {
    return ea({ coordinates: d, positionRestrictions: a, event: new Ma({ left: f.left - d.left, top: f.top - d.top }) });
  }, c = de({}, n);
  return (Array.isArray(r) ? r : [r]).forEach(function(d) {
    var f = {};
    Ke((f = typeof d == "function" ? d({ coordinates: c, imageSize: t, visibleArea: s }) : d).width) && Ke(f.height) || (c = function(u, h) {
      var p = de(de(de({}, u), Yt({ width: h.width, height: h.height, sizeRestrictions: i, aspectRatio: o })), { left: 0, top: 0 });
      return l(p, { left: u.left, top: u.top });
    }(c, de(de({}, c), f))), Ke(f.left) && Ke(f.top) || (c = l(c, de(de({}, c), f)));
  }), c;
}
function lp(e) {
  e.event;
  var n = e.getAreaRestrictions, r = e.boundaries, t = e.coordinates, i = e.visibleArea;
  e.aspectRatio;
  var a = e.stencilSize, o = e.sizeRestrictions, s = e.positionRestrictions;
  e.stencilReference;
  var l, c, d, f = de({}, t), u = de({}, i), h = de({}, a);
  l = Pe(h), c = Pe(f), d === void 0 && (d = 1e-3), (l === 0 || c === 0 ? Math.abs(c - l) < d : Math.abs(c / l) < 1 + d && Math.abs(c / l) > 1 - d) || (f = de(de({}, f), Yt({ sizeRestrictions: o, width: f.width, height: f.height, aspectRatio: { minimum: Pe(h), maximum: Pe(h) } })));
  var p = gr(u = $t(u, f.width * r.width / (u.width * h.width)), n({ visibleArea: u, type: "resize" }));
  return p !== 1 && (u = $t(u, p), f = $t(f, p)), u = tt(u = lt(u, gn(et(f), et(u))), n({ visibleArea: u, type: "move" })), { coordinates: f = tt(f, yr(Lt(u), s)), visibleArea: u };
}
function up(e) {
  var n = e.event, r = e.getAreaRestrictions, t = e.boundaries, i = e.coordinates, a = e.visibleArea;
  e.aspectRatio, e.stencilSize, e.sizeRestrictions;
  var o = e.positionRestrictions;
  e.stencilReference;
  var s = de({}, i), l = de({}, a);
  if (i && a && n.type !== "manipulateImage") {
    var c = { width: 0, height: 0 };
    l.width, t.width, Pe(t) > Pe(s) ? (c.height = 0.8 * t.height, c.width = c.height * Pe(s)) : (c.width = 0.8 * t.width, c.height = c.width * Pe(s));
    var d = gr(l = $t(l, s.width * t.width / (l.width * c.width)), r({ visibleArea: l, type: "resize" }));
    l = $t(l, d), d !== 1 && (c.height /= d, c.width /= d), l = tt(l = lt(l, gn(et(s), et(l))), r({ visibleArea: l, type: "move" })), s = tt(s, yr(Lt(l), o));
  }
  return { coordinates: s, visibleArea: l };
}
function cp(e) {
  var n = e.event, r = e.coordinates, t = e.visibleArea, i = e.getAreaRestrictions, a = de({}, t), o = de({}, r);
  if (n.type === "setCoordinates") {
    var s = Math.max(0, o.width - a.width), l = Math.max(0, o.height - a.height);
    s > l ? a = $t(a, Math.min(o.width / a.width, yn(a, i({ visibleArea: a, type: "resize" })))) : l > s && (a = $t(a, Math.min(o.height / a.height, yn(a, i({ visibleArea: a, type: "resize" }))))), a = tt(a = lt(a, mr(bn(o, Lt(a)))), i({ visibleArea: a, type: "move" }));
  }
  return { visibleArea: a, coordinates: o };
}
function dp(e) {
  var n = e.imageSize, r = e.visibleArea, t = e.coordinates, i = r || n;
  return { left: (r ? r.left : 0) + i.width / 2 - t.width / 2, top: (r ? r.top : 0) + i.height / 2 - t.height / 2 };
}
function fp(e) {
  var n = e.imageSize, r = e.visibleArea, t = e.aspectRatio, i = e.sizeRestrictions, a = r || n, o = Math.min(t.maximum || 1 / 0, Math.max(t.minimum || 0, Pe(a))), s = a.width < a.height ? { width: 0.8 * a.width, height: 0.8 * a.width / o } : { height: 0.8 * a.height, width: 0.8 * a.height * o };
  return Yt(de(de({}, s), { aspectRatio: t, sizeRestrictions: i }));
}
function hp(e) {
  var n, r, t = e.imageSize, i = e.visibleArea, a = e.boundaries, o = e.aspectRatio, s = e.sizeRestrictions, l = e.stencilSize, c = i || t;
  return Pe(c) > Pe(a) ? r = (n = l.height * c.height / a.height) * Pe(l) : n = (r = l.width * c.width / a.width) / Pe(l), Yt({ width: r, height: n, aspectRatio: o, sizeRestrictions: s });
}
function pp(e) {
  var n = e.getAreaRestrictions, r = e.coordinates, t = e.imageSize, i = Pe(e.boundaries);
  if (r) {
    var a = { height: Math.max(r.height, t.height), width: Math.max(r.width, t.width) }, o = Hi({ width: Pe(a) > i ? a.width : a.height * i, height: Pe(a) > i ? a.width / i : a.height }, Qr(n())), s = { left: r.left + r.width / 2 - o.width / 2, top: r.top + r.height / 2 - o.height / 2, width: o.width, height: o.height }, l = Pn(r, Lt(de({ left: 0, top: 0 }, t))), c = {};
    return !l.left && !l.right && s.width <= t.width && (c.left = 0, c.right = t.width), !l.top && !l.bottom && s.height <= t.height && (c.top = 0, c.bottom = t.height), tt(s, c);
  }
  var d = Pe(t);
  return o = { height: d > i ? t.height : t.width / i, width: d > i ? t.height * i : t.width }, { left: t.width / 2 - o.width / 2, top: t.height / 2 - o.height / 2, width: o.width, height: o.height };
}
function Qn(e, n) {
  return Ui(e, Lt(n));
}
function vp(e) {
  var n = e.event, r = e.coordinates, t = e.visibleArea, i = e.sizeRestrictions, a = e.getAreaRestrictions, o = e.positionRestrictions, s = e.adjustStencil, l = n.scale, c = n.move, d = de({}, t), f = de({}, r), u = 1, h = 1, p = l.factor && Math.abs(l.factor - 1) > 1e-3;
  d = lt(d, { left: c.left || 0, top: c.top || 0 });
  var m = { stencil: { minimum: Math.max(i.minWidth ? i.minWidth / f.width : 0, i.minHeight ? i.minHeight / f.height : 0), maximum: Math.min(i.maxWidth ? i.maxWidth / f.width : 1 / 0, i.maxHeight ? i.maxHeight / f.height : 1 / 0, yn(f, o)) }, area: { maximum: yn(d, a({ visibleArea: d, type: "resize" })) } };
  l.factor && p && (l.factor < 1 ? (h = Math.max(l.factor, m.stencil.minimum)) > 1 && (h = 1) : l.factor > 1 && (h = Math.min(l.factor, Math.min(m.area.maximum, m.stencil.maximum))) < 1 && (h = 1)), h && (d = $t(d, h, l.center));
  var v = r.left - t.left, g = t.width + t.left - (r.width + r.left), b = r.top - t.top, k = t.height + t.top - (r.height + r.top);
  return d = tt(d = lt(d, bn(d, { left: o.left !== void 0 ? o.left - v * h : void 0, top: o.top !== void 0 ? o.top - b * h : void 0, bottom: o.bottom !== void 0 ? o.bottom + k * h : void 0, right: o.right !== void 0 ? o.right + g * h : void 0 })), a({ visibleArea: d, type: "move" })), f.width = f.width * h, f.height = f.height * h, f.left = d.left + v * h, f.top = d.top + b * h, f = tt(f, yr(Lt(d), o)), l.factor && p && s && (l.factor > 1 ? u = Math.min(m.area.maximum, l.factor) / h : l.factor < 1 && (u = Math.max(f.height / d.height, f.width / d.width, l.factor / h)), u !== 1 && (d = lt(d = tt(d = $t(d, u, l.factor > 1 ? l.center : et(f)), a({ visibleArea: d, type: "move" })), mr(bn(f, Lt(d)))))), { coordinates: f, visibleArea: d };
}
function mp(e) {
  var n = e.aspectRatio, r = e.getAreaRestrictions, t = e.coordinates, i = e.visibleArea, a = e.sizeRestrictions, o = e.positionRestrictions, s = e.imageSize, l = e.previousImageSize, c = e.angle, d = de({}, t), f = de({}, i), u = Zt(et(de({ left: 0, top: 0 }, l)), c);
  return (d = de(de({}, Yt({ sizeRestrictions: a, aspectRatio: n, width: d.width, height: d.height })), Zt(et(d), c))).left -= u.left - s.width / 2 + d.width / 2, d.top -= u.top - s.height / 2 + d.height / 2, f = $t(f, gr(f, r({ visibleArea: f, type: "resize" }))), { coordinates: d = tt(d, o), visibleArea: f = tt(f = lt(f, gn(et(d), et(t))), r({ visibleArea: f, type: "move" })) };
}
function gp(e) {
  var n = e.flip, r = e.previousFlip, t = e.rotate, i = e.getAreaRestrictions, a = e.coordinates, o = e.visibleArea, s = e.imageSize, l = de({}, a), c = de({}, o), d = r.horizontal !== n.horizontal, f = r.vertical !== n.vertical;
  if (d || f) {
    var u = Zt({ left: s.width / 2, top: s.height / 2 }, -t), h = Zt(et(l), -t), p = Zt({ left: d ? u.left - (h.left - u.left) : h.left, top: f ? u.top - (h.top - u.top) : h.top }, t);
    l = lt(l, gn(p, et(l))), h = Zt(et(c), -t), c = tt(c = lt(c, gn(p = Zt({ left: d ? u.left - (h.left - u.left) : h.left, top: f ? u.top - (h.top - u.top) : h.top }, t), et(c))), i({ visibleArea: c, type: "move" }));
  }
  return { coordinates: l, visibleArea: c };
}
function co(e) {
  var n = e.directions, r = e.coordinates, t = e.positionRestrictions, i = t === void 0 ? {} : t, a = e.sizeRestrictions, o = e.preserveRatio, s = e.compensate, l = de({}, n), c = Pt(r, l).width, d = Pt(r, l).height;
  c < 0 && (l.left < 0 && l.right < 0 ? (l.left = -(r.width - a.minWidth) / (l.left / l.right), l.right = -(r.width - a.minWidth) / (l.right / l.left)) : l.left < 0 ? l.left = -(r.width - a.minWidth) : l.right < 0 && (l.right = -(r.width - a.minWidth))), d < 0 && (l.top < 0 && l.bottom < 0 ? (l.top = -(r.height - a.minHeight) / (l.top / l.bottom), l.bottom = -(r.height - a.minHeight) / (l.bottom / l.top)) : l.top < 0 ? l.top = -(r.height - a.minHeight) : l.bottom < 0 && (l.bottom = -(r.height - a.minHeight)));
  var f = Pn(Pt(r, l), i);
  s && (f.left && f.left > 0 && f.right === 0 ? (l.right += f.left, l.left -= f.left) : f.right && f.right > 0 && f.left === 0 && (l.left += f.right, l.right -= f.right), f.top && f.top > 0 && f.bottom === 0 ? (l.bottom += f.top, l.top -= f.top) : f.bottom && f.bottom > 0 && f.top === 0 && (l.top += f.bottom, l.bottom -= f.bottom), f = Pn(Pt(r, l), i));
  var u = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
  if (Ot.forEach(function(m) {
    var v = f[m];
    v && l[m] && (u[m] = Math.max(0, 1 - v / l[m]));
  }), o) {
    var h = Math.min.apply(null, Ot.map(function(m) {
      return u[m];
    }));
    h !== 1 / 0 && Ot.forEach(function(m) {
      l[m] *= h;
    });
  } else Ot.forEach(function(m) {
    u[m] !== 1 / 0 && (l[m] *= u[m]);
  });
  if (c = Pt(r, l).width, d = Pt(r, l).height, l.right + l.left && (c > a.maxWidth ? u.width = (a.maxWidth - r.width) / (l.right + l.left) : c < a.minWidth && (u.width = (a.minWidth - r.width) / (l.right + l.left))), l.bottom + l.top && (d > a.maxHeight ? u.height = (a.maxHeight - r.height) / (l.bottom + l.top) : d < a.minHeight && (u.height = (a.minHeight - r.height) / (l.bottom + l.top))), o) {
    var p = Math.min(u.width, u.height);
    p !== 1 / 0 && Ot.forEach(function(m) {
      l[m] *= p;
    });
  } else u.width !== 1 / 0 && np.forEach(function(m) {
    l[m] *= u.width;
  }), u.height !== 1 / 0 && rp.forEach(function(m) {
    l[m] *= u.height;
  });
  return l;
}
function er(e, n, r) {
  return n == 0 && r == 0 ? e / 2 : n == 0 ? 0 : r == 0 ? e : e * Math.abs(n / (n + r));
}
var yp = At("vue-simple-handler"), bp = At("vue-simple-handler-wrapper"), Ea = { name: "SimpleHandler", components: { HandlerWrapper: Vi }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  var e, n = (wt(e = {}, this.horizontalPosition, !!this.horizontalPosition), wt(e, this.verticalPosition, !!this.verticalPosition), wt(e, "".concat(this.horizontalPosition, "-").concat(this.verticalPosition), !!(this.verticalPosition && this.horizontalPosition)), wt(e, "hover", this.hover), e);
  return { default: qe(yp(n), this.defaultClass, this.hover && this.hoverClass), wrapper: qe(bp(n), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
Ea.render = function(e, n, r, t, i, a) {
  var o = Bt("HandlerWrapper");
  return D(), me(o, { class: a.classes.wrapper, "vertical-position": r.verticalPosition, "horizontal-position": r.horizontalPosition, disabled: r.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: be(function() {
    return [X("div", { class: a.classes.default }, null, 2)];
  }), _: 1 }, 8, ["class", "vertical-position", "horizontal-position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var wp = At("vue-simple-line"), xp = At("vue-simple-line-wrapper"), Aa = { name: "SimpleLine", components: { LineWrapper: Ni }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, position: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  return { root: qe(wp(wt({}, this.position, !0)), this.defaultClass, this.hover && this.hoverClass), wrapper: qe(xp(wt({}, this.position, !0)), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
Aa.render = function(e, n, r, t, i, a) {
  var o = Bt("LineWrapper");
  return D(), me(o, { class: a.classes.wrapper, position: r.position, disabled: r.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: be(function() {
    return [X("div", { class: a.classes.root }, null, 2)];
  }), _: 1 }, 8, ["class", "position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var Ir = At("vue-bounding-box"), $p = ["east", "west", null], kp = ["south", "north", null], _i = { name: "BoundingBox", props: { width: { type: Number }, height: { type: Number }, transitions: { type: Object }, handlers: { type: Object, default: function() {
  return { eastNorth: !0, north: !0, westNorth: !0, west: !0, westSouth: !0, south: !0, eastSouth: !0, east: !0 };
} }, handlersComponent: { type: [Object, String], default: function() {
  return Ea;
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} }, lines: { type: Object, default: function() {
  return { west: !0, north: !0, east: !0, south: !0 };
} }, linesComponent: { type: [Object, String], default: function() {
  return Aa;
} }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, resizable: { type: Boolean, default: !0 } }, data: function() {
  var e = [];
  return $p.forEach(function(n) {
    kp.forEach(function(r) {
      if (n !== r) {
        var t = Fi(n, r), i = t.name, a = t.classname;
        e.push({ name: i, classname: a, verticalDirection: r, horizontalDirection: n });
      }
    });
  }), { points: e };
}, computed: { style: function() {
  var e = {};
  return this.width && this.height && (e.width = "".concat(this.width, "px"), e.height = "".concat(this.height, "px"), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction))), e;
}, classes: function() {
  var e = this.handlersClasses, n = this.handlersWrappersClasses, r = this.linesClasses, t = this.linesWrappersClasses;
  return { root: Ir(), handlers: e, handlersWrappers: n, lines: r, linesWrappers: t };
}, lineNodes: function() {
  var e = this, n = [];
  return this.points.forEach(function(r) {
    r.horizontalDirection && r.verticalDirection || !e.lines[r.name] || n.push({ name: r.name, component: e.linesComponent, class: qe(e.classes.lines.default, e.classes.lines[r.name], !e.resizable && e.classes.lines.disabled), wrapperClass: qe(e.classes.linesWrappers.default, e.classes.linesWrappers[r.name], !e.resizable && e.classes.linesWrappers.disabled), hoverClass: e.classes.lines.hover, verticalDirection: r.verticalDirection, horizontalDirection: r.horizontalDirection, disabled: !e.resizable });
  }), n;
}, handlerNodes: function() {
  var e = this, n = [], r = this.width, t = this.height;
  return this.points.forEach(function(i) {
    if (e.handlers[i.name]) {
      var a = { name: i.name, component: e.handlersComponent, class: qe(e.classes.handlers.default, e.classes.handlers[i.name]), wrapperClass: qe(e.classes.handlersWrappers.default, e.classes.handlersWrappers[i.name]), hoverClass: e.classes.handlers.hover, verticalDirection: i.verticalDirection, horizontalDirection: i.horizontalDirection, disabled: !e.resizable };
      if (r && t) {
        var o = i.horizontalDirection, s = i.verticalDirection, l = o === "east" ? r : o === "west" ? 0 : r / 2, c = s === "south" ? t : s === "north" ? 0 : t / 2;
        a.wrapperClass = Ir("handler"), a.wrapperStyle = { transform: "translate(".concat(l, "px, ").concat(c, "px)") }, e.transitions && e.transitions.enabled && (a.wrapperStyle.transition = "".concat(e.transitions.time, "ms ").concat(e.transitions.timingFunction));
      } else a.wrapperClass = Ir("handler", wt({}, i.classname, !0));
      n.push(a);
    }
  }), n;
} }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [];
}, methods: { onEnd: function() {
  this.$emit("resize-end");
}, onHandlerDrag: function(e, n, r) {
  var t, i = e.shift(), a = i.left, o = i.top, s = { left: 0, right: 0, top: 0, bottom: 0 };
  n === "west" ? s.left -= a : n === "east" && (s.right += a), r === "north" ? s.top -= o : r === "south" && (s.bottom += o), !r && n ? t = "width" : r && !n && (t = "height"), this.resizable && this.$emit("resize", new Qh(s, { allowedDirections: { left: n === "west" || !n, right: n === "east" || !n, bottom: r === "south" || !r, top: r === "north" || !r }, preserveAspectRatio: e.nativeEvent && e.nativeEvent.shiftKey, respectDirection: t }));
} }, emits: ["resize", "resize-end"] };
_i.render = function(e, n, r, t, i, a) {
  return D(), me("div", { ref: "box", class: a.classes.root, style: a.style }, [Ee(e.$slots, "default"), X("div", null, [(D(!0), me(se, null, Ae(a.lineNodes, function(o) {
    return D(), me(un(o.component), { key: o.name, "default-class": o.class, "hover-class": o.hoverClass, "wrapper-class": o.wrapperClass, position: o.name, disabled: o.disabled, onDrag: function(s) {
      return a.onHandlerDrag(s, o.horizontalDirection, o.verticalDirection);
    }, onDragEnd: n[1] || (n[1] = function(s) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "position", "disabled", "onDrag"]);
  }), 128))]), (D(!0), me(se, null, Ae(a.handlerNodes, function(o) {
    return D(), me("div", { key: o.name, style: o.wrapperStyle, class: o.wrapperClass }, [(D(), me(un(o.component), { "default-class": o.class, "hover-class": o.hoverClass, "wrapper-class": o.wrapperClass, "horizontal-position": o.horizontalDirection, "vertical-position": o.verticalDirection, disabled: o.disabled, onDrag: function(s) {
      return a.onHandlerDrag(s, o.horizontalDirection, o.verticalDirection);
    }, onDragEnd: n[2] || (n[2] = function(s) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "horizontal-position", "vertical-position", "disabled", "onDrag"]))], 6);
  }), 128))], 6);
};
var Sp = At("vue-draggable-area"), qi = { name: "DraggableArea", props: { movable: { type: Boolean, default: !0 }, activationDistance: { type: Number, default: 20 } }, computed: { classnames: function() {
  return { default: Sp() };
} }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [], this.touchStarted = !1;
}, methods: { onTouchStart: function(e) {
  if (e.cancelable) {
    var n = this.movable && e.touches.length === 1;
    n && (this.touches = cn(e.touches)), (this.touchStarted || n) && (e.preventDefault(), e.stopPropagation());
  }
}, onTouchEnd: function() {
  this.touchStarted = !1, this.processEnd();
}, onTouchMove: function(e) {
  this.touches.length >= 1 && (this.touchStarted ? (this.processMove(e, e.touches), e.preventDefault(), e.stopPropagation()) : Bi({ x: this.touches[0].clientX, y: this.touches[0].clientY }, { x: e.touches[0].clientX, y: e.touches[0].clientY }) > this.activationDistance && (this.initAnchor({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }), this.touchStarted = !0));
}, onMouseDown: function(e) {
  if (this.movable && e.button === 0) {
    var n = { fake: !0, clientX: e.clientX, clientY: e.clientY };
    this.touches = [n], this.initAnchor(n), e.stopPropagation();
  }
}, onMouseMove: function(e) {
  this.touches.length && (this.processMove(e, [{ fake: !0, clientX: e.clientX, clientY: e.clientY }]), e.preventDefault && e.cancelable && e.preventDefault(), e.stopPropagation());
}, onMouseUp: function() {
  this.processEnd();
}, initAnchor: function(e) {
  var n = this.$refs.container.getBoundingClientRect(), r = n.left, t = n.top;
  this.anchor = { x: e.clientX - r, y: e.clientY - t };
}, processMove: function(e, n) {
  var r = cn(n);
  if (this.touches.length) {
    var t = this.$refs.container.getBoundingClientRect(), i = t.left, a = t.top;
    this.touches.length === 1 && r.length === 1 && this.$emit("move", new Ma({ left: r[0].clientX - (i + this.anchor.x), top: r[0].clientY - (a + this.anchor.y) }));
  }
}, processEnd: function() {
  this.touches.length && this.$emit("move-end"), this.touches = [];
} }, emits: ["move", "move-end"] };
qi.render = function(e, n, r, t, i, a) {
  return D(), me("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }) }, [Ee(e.$slots, "default")], 544);
};
function zr(e) {
  var n, r;
  return { rotate: e.rotate || 0, flip: { horizontal: ((n = e == null ? void 0 : e.flip) === null || n === void 0 ? void 0 : n.horizontal) || !1, vertical: ((r = e == null ? void 0 : e.flip) === null || r === void 0 ? void 0 : r.vertical) || !1 } };
}
function Mp(e) {
  return new Promise(function(n, r) {
    try {
      if (e) if (/^data:/i.test(e)) n(function(l) {
        l = l.replace(/^data:([^;]+);base64,/gim, "");
        for (var c = atob(l), d = c.length, f = new ArrayBuffer(d), u = new Uint8Array(f), h = 0; h < d; h++) u[h] = c.charCodeAt(h);
        return f;
      }(e));
      else if (/^blob:/i.test(e)) {
        var t = new FileReader();
        t.onload = function(l) {
          n(l.target.result);
        }, a = e, o = function(l) {
          t.readAsArrayBuffer(l);
        }, (s = new XMLHttpRequest()).open("GET", a, !0), s.responseType = "blob", s.onload = function() {
          this.status != 200 && this.status !== 0 || o(this.response);
        }, s.send();
      } else {
        var i = new XMLHttpRequest();
        i.onreadystatechange = function() {
          i.readyState === 4 && (i.status === 200 || i.status === 0 ? n(i.response) : r("Warning: could not load an image to parse its orientation"), i = null);
        }, i.onprogress = function() {
          i.getResponseHeader("content-type") !== "image/jpeg" && i.abort();
        }, i.withCredentials = !1, i.open("GET", e, !0), i.responseType = "arraybuffer", i.send(null);
      }
      else r("Error: the image is empty");
    } catch (l) {
      r(l);
    }
    var a, o, s;
  });
}
function Zi(e) {
  var n = e.rotate, r = e.flip, t = e.scaleX, i = e.scaleY, a = "";
  return a += " rotate(" + n + "deg) ", a += " scaleX(" + t * (r.horizontal ? -1 : 1) + ") ", a += " scaleY(" + i * (r.vertical ? -1 : 1) + ") ";
}
function Dp(e) {
  try {
    var n, r = new DataView(e), t = void 0, i = void 0, a = void 0, o = void 0;
    if (r.getUint8(0) === 255 && r.getUint8(1) === 216) for (var s = r.byteLength, l = 2; l + 1 < s; ) {
      if (r.getUint8(l) === 255 && r.getUint8(l + 1) === 225) {
        a = l;
        break;
      }
      l++;
    }
    if (a && (t = a + 10, function(h, p, m) {
      var v, g = "";
      for (v = p, m += p; v < m; v++) g += String.fromCharCode(h.getUint8(v));
      return g;
    }(r, a + 4, 4) === "Exif")) {
      var c = r.getUint16(t);
      if (((i = c === 18761) || c === 19789) && r.getUint16(t + 2, i) === 42) {
        var d = r.getUint32(t + 4, i);
        d >= 8 && (o = t + d);
      }
    }
    if (o) {
      for (var f = r.getUint16(o, i), u = 0; u < f; u++)
        if (l = o + 12 * u + 2, r.getUint16(l, i) === 274) {
          l += 8, n = r.getUint16(l, i), r.setUint16(l, 1, i);
          break;
        }
    }
    return n;
  } catch {
    return null;
  }
}
function fo(e, n) {
  var r = n.getBoundingClientRect(), t = r.left, i = r.top, a = { left: 0, top: 0 }, o = 0;
  return e.forEach(function(s) {
    a.left += (s.clientX - t) / e.length, a.top += (s.clientY - i) / e.length;
  }), e.forEach(function(s) {
    o += Bi({ x: a.left, y: a.top }, { x: s.clientX - t, y: s.clientY - i });
  }), { centerMass: a, spread: o, count: e.length };
}
var Ki = { props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 }, eventsFilter: { type: Function, required: !1 } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, created: function() {
  this.transforming = !1, this.debouncedProcessEnd = Xr(this.processEnd), this.touches = [];
}, methods: { processMove: function(e, n) {
  if (this.touches.length) {
    if (this.touches.length === 1 && n.length === 1) this.$emit("move", new An({ left: this.touches[0].clientX - n[0].clientX, top: this.touches[0].clientY - n[0].clientY }));
    else if (this.touches.length > 1 && this.touchResize) {
      var r = fo(n, this.$refs.container), t = this.oldGeometricProperties;
      t.count === r.count && t.count > 1 && this.$emit("resize", new An({ left: t.centerMass.left - r.centerMass.left, top: t.centerMass.top - r.centerMass.top }, { factor: t.spread / r.spread, center: r.centerMass })), this.oldGeometricProperties = r;
    }
    this.touches = n;
  }
}, processEnd: function() {
  this.transforming && (this.transforming = !1, this.$emit("transform-end"));
}, processStart: function() {
  this.transforming = !0, this.debouncedProcessEnd.clear();
}, processEvent: function(e) {
  return this.eventsFilter ? this.eventsFilter(e, this.transforming) !== !1 : (e.preventDefault(), e.stopPropagation(), !0);
}, onTouchStart: function(e) {
  if (e.cancelable && (this.touchMove || this.touchResize && e.touches.length > 1) && this.processEvent(e)) {
    var n = this.$refs.container, r = n.getBoundingClientRect(), t = r.left, i = r.top, a = r.bottom, o = r.right;
    this.touches = cn(e.touches).filter(function(s) {
      return s.clientX > t && s.clientX < o && s.clientY > i && s.clientY < a;
    }), this.oldGeometricProperties = fo(this.touches, n);
  }
}, onTouchEnd: function(e) {
  e.touches.length === 0 && (this.touches = [], this.processEnd());
}, onTouchMove: function(e) {
  var n = this;
  if (this.touches.length) {
    var r = cn(e.touches).filter(function(t) {
      return !t.identifier || n.touches.find(function(i) {
        return i.identifier === t.identifier;
      });
    });
    this.processEvent(e) && (this.processMove(e, r), this.processStart());
  }
}, onMouseDown: function(e) {
  if (this.mouseMove && "buttons" in e && e.buttons === 1 && this.processEvent(e)) {
    var n = { fake: !0, clientX: e.clientX, clientY: e.clientY };
    this.touches = [n], this.processStart();
  }
}, onMouseMove: function(e) {
  this.touches.length && this.processEvent(e) && this.processMove(e, [{ clientX: e.clientX, clientY: e.clientY }]);
}, onMouseUp: function() {
  this.touches = [], this.processEnd();
}, onWheel: function(e) {
  if (this.wheelResize && this.processEvent(e)) {
    var n = this.$refs.container.getBoundingClientRect(), r = n.left, t = n.top, i = 1 + this.wheelResize.ratio * (o = e.deltaY || e.detail || e.wheelDelta, (s = +o) == 0 || ji(s) ? s : s > 0 ? 1 : -1), a = { left: e.clientX - r, top: e.clientY - t };
    this.$emit("resize", new An({}, { factor: i, center: a })), this.touches.length || this.debouncedProcessEnd();
  }
  var o, s;
} }, emits: ["resize", "move", "transform-end"] };
Ki.render = function(e, n, r, t, i, a) {
  return D(), me("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onWheel: n[3] || (n[3] = function() {
    return a.onWheel && a.onWheel.apply(a, arguments);
  }) }, [Ee(e.$slots, "default")], 544);
};
var ta = { components: { TransformableImage: Ki }, props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 } }, emits: ["resize", "move"] };
ta.render = function(e, n, r, t, i, a) {
  var o = Bt("transformable-image");
  return D(), me(o, { "touch-move": r.touchMove, "touch-resize": r.touchResize, "mouse-move": r.mouseMove, "wheel-resize": r.wheelResize, onMove: n[1] || (n[1] = function(s) {
    return e.$emit("move", s);
  }), onResize: n[2] || (n[2] = function(s) {
    return e.$emit("resize", s);
  }) }, { default: be(function() {
    return [Ee(e.$slots, "default")];
  }), _: 3 }, 8, ["touch-move", "touch-resize", "mouse-move", "wheel-resize"]);
};
var tr = At("vue-preview"), Gi = { props: { coordinates: { type: Object }, transitions: { type: Object }, image: { type: Object, default: function() {
  return {};
} }, imageClass: { type: String }, width: { type: Number }, height: { type: Number }, fill: { type: Boolean } }, data: function() {
  return { calculatedImageSize: { width: 0, height: 0 }, calculatedSize: { width: 0, height: 0 } };
}, computed: { classes: function() {
  return { root: tr({ fill: this.fill }), wrapper: tr("wrapper"), imageWrapper: tr("image-wrapper"), image: qe(tr("image"), this.imageClass) };
}, style: function() {
  if (this.fill) return {};
  var e = {};
  return this.width && (e.width = "".concat(this.size.width, "px")), this.height && (e.height = "".concat(this.size.height, "px")), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, wrapperStyle: function() {
  var e = { width: "".concat(this.size.width, "px"), height: "".concat(this.size.height, "px"), left: "calc(50% - ".concat(this.size.width / 2, "px)"), top: "calc(50% - ".concat(this.size.height / 2, "px)") };
  return this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, imageStyle: function() {
  if (this.coordinates && this.image) {
    var e = this.coordinates.width / this.size.width, n = Te(Te({ rotate: 0, flip: { horizontal: !1, vertical: !1 } }, this.image.transforms), {}, { scaleX: 1 / e, scaleY: 1 / e }), r = this.imageSize.width, t = this.imageSize.height, i = Wi({ width: r, height: t }, n.rotate), a = { width: "".concat(r, "px"), height: "".concat(t, "px"), left: "0px", top: "0px" }, o = { rotate: { left: (r - i.width) * n.scaleX / 2, top: (t - i.height) * n.scaleY / 2 }, scale: { left: (1 - n.scaleX) * r / 2, top: (1 - n.scaleY) * t / 2 } };
    return a.transform = `translate(
				`.concat(-this.coordinates.left / e - o.rotate.left - o.scale.left, "px,").concat(-this.coordinates.top / e - o.rotate.top - o.scale.top, "px) ") + Zi(n), this.transitions && this.transitions.enabled && (a.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), a;
  }
  return {};
}, size: function() {
  return { width: this.width || this.calculatedSize.width, height: this.height || this.calculatedSize.height };
}, imageSize: function() {
  return { width: this.image.width || this.calculatedImageSize.width, height: this.image.height || this.calculatedImageSize.height };
} }, watch: { image: function(e) {
  (e.width || e.height) && this.onChangeImage();
} }, mounted: function() {
  var e = this;
  this.onChangeImage(), this.$refs.image.addEventListener("load", function() {
    e.refreshImage();
  }), window.addEventListener("resize", this.refresh), window.addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  window.removeEventListener("resize", this.refresh), window.removeEventListener("orientationchange", this.refresh);
}, methods: { refreshImage: function() {
  var e = this.$refs.image;
  this.calculatedImageSize.height = e.naturalHeight, this.calculatedImageSize.width = e.naturalWidth;
}, refresh: function() {
  var e = this.$refs.root;
  this.width || (this.calculatedSize.width = e.clientWidth), this.height || (this.calculatedSize.height = e.clientHeight);
}, onChangeImage: function() {
  var e = this.$refs.image;
  e && e.complete && this.refreshImage(), this.refresh();
} } };
Gi.render = function(e, n, r, t, i, a) {
  return D(), me("div", { ref: "root", class: a.classes.root, style: a.style }, [X("div", { ref: "wrapper", class: a.classes.wrapper, style: a.wrapperStyle }, [Ce(X("img", { ref: "image", src: r.image && r.image.src, class: a.classes.image, style: a.imageStyle }, null, 14, ["src"]), [[it, r.image && r.image.src]])], 6)], 6);
};
var Xi = { components: { Preview: Gi }, inheritAttrs: !1 };
Xi.render = function(e, n, r, t, i, a) {
  var o = Bt("preview");
  return D(), me(o, pa(e.$attrs, { fill: !0 }), null, 16);
};
var Fr = At("vue-rectangle-stencil"), Ji = { name: "RectangleStencil", components: { StencilPreview: Xi, BoundingBox: _i, DraggableArea: qi }, props: { image: { type: Object }, coordinates: { type: Object }, stencilCoordinates: { type: Object }, handlers: { type: Object }, handlersComponent: { type: [Object, String], default: function() {
  return Ea;
} }, lines: { type: Object }, linesComponent: { type: [Object, String], default: function() {
  return Aa;
} }, aspectRatio: { type: [Number, String] }, minAspectRatio: { type: [Number, String] }, maxAspectRatio: { type: [Number, String] }, movable: { type: Boolean, default: !0 }, resizable: { type: Boolean, default: !0 }, transitions: { type: Object }, movingClass: { type: String }, resizingClass: { type: String }, previewClass: { type: String }, boundingBoxClass: { type: String }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} } }, data: function() {
  return { moving: !1, resizing: !1 };
}, computed: { classes: function() {
  return { stencil: qe(Fr({ movable: this.movable, moving: this.moving, resizing: this.resizing }), this.moving && this.movingClass, this.resizing && this.resizingClass), preview: qe(Fr("preview"), this.previewClass), boundingBox: qe(Fr("bounding-box"), this.boundingBoxClass) };
}, style: function() {
  var e = this.stencilCoordinates, n = e.height, r = e.width, t = e.left, i = e.top, a = { width: "".concat(r, "px"), height: "".concat(n, "px"), transform: "translate(".concat(t, "px, ").concat(i, "px)") };
  return this.transitions && this.transitions.enabled && (a.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), a;
} }, methods: { onMove: function(e) {
  this.$emit("move", e), this.moving = !0;
}, onMoveEnd: function() {
  this.$emit("move-end"), this.moving = !1;
}, onResize: function(e) {
  this.$emit("resize", e), this.resizing = !0;
}, onResizeEnd: function() {
  this.$emit("resize-end"), this.resizing = !1;
}, aspectRatios: function() {
  return { minimum: this.aspectRatio || this.minAspectRatio, maximum: this.aspectRatio || this.maxAspectRatio };
} }, emits: ["resize", "resize-end", "move", "move-end"] };
Ji.render = function(e, n, r, t, i, a) {
  var o = Bt("stencil-preview"), s = Bt("draggable-area"), l = Bt("bounding-box");
  return D(), me("div", { class: a.classes.stencil, style: a.style }, [X(l, { width: r.stencilCoordinates.width, height: r.stencilCoordinates.height, transitions: r.transitions, class: a.classes.boundingBox, handlers: r.handlers, "handlers-component": r.handlersComponent, "handlers-classes": r.handlersClasses, "handlers-wrappers-classes": r.handlersWrappersClasses, lines: r.lines, "lines-component": r.linesComponent, "lines-classes": r.linesClasses, "lines-wrappers-classes": r.linesWrappersClasses, resizable: r.resizable, onResize: a.onResize, onResizeEnd: a.onResizeEnd }, { default: be(function() {
    return [X(s, { movable: r.movable, onMove: a.onMove, onMoveEnd: a.onMoveEnd }, { default: be(function() {
      return [X(o, { image: r.image, coordinates: r.coordinates, width: r.stencilCoordinates.width, height: r.stencilCoordinates.height, class: a.classes.preview, transitions: r.transitions }, null, 8, ["image", "coordinates", "width", "height", "class", "transitions"])];
    }), _: 1 }, 8, ["movable", "onMove", "onMoveEnd"])];
  }), _: 1 }, 8, ["width", "height", "transitions", "class", "handlers", "handlers-component", "handlers-classes", "handlers-wrappers-classes", "lines", "lines-component", "lines-classes", "lines-wrappers-classes", "resizable", "onResize", "onResizeEnd"])], 6);
};
var Ep = ["transitions"], Ft = At("vue-advanced-cropper"), Qi = { name: "Cropper", components: { BackgroundWrapper: ta }, props: { src: { type: String, default: null }, stencilComponent: { type: [Object, String], default: function() {
  return Ji;
} }, backgroundWrapperComponent: { type: [Object, String], default: function() {
  return ta;
} }, stencilProps: { type: Object, default: function() {
  return {};
} }, autoZoom: { type: Boolean, default: !1 }, imageClass: { type: String }, boundariesClass: { type: String }, backgroundClass: { type: String }, foregroundClass: { type: String }, minWidth: { type: [Number, String] }, minHeight: { type: [Number, String] }, maxWidth: { type: [Number, String] }, maxHeight: { type: [Number, String] }, debounce: { type: [Boolean, Number], default: 500 }, transitions: { type: Boolean, default: !0 }, checkOrientation: { type: Boolean, default: !0 }, canvas: { type: [Object, Boolean], default: !0 }, crossOrigin: { type: [Boolean, String], default: void 0 }, transitionTime: { type: Number, default: 300 }, imageRestriction: { type: String, default: "fit-area", validator: function(e) {
  return op.indexOf(e) !== -1;
} }, roundResult: { type: Boolean, default: !0 }, defaultSize: { type: [Function, Object] }, defaultPosition: { type: [Function, Object] }, defaultVisibleArea: { type: [Function, Object] }, defaultTransforms: { type: [Function, Object] }, defaultBoundaries: { type: [Function, String], validator: function(e) {
  return !(typeof e == "string" && e !== "fill" && e !== "fit");
} }, priority: { type: String, default: "coordinates" }, stencilSize: { type: [Object, Function] }, resizeImage: { type: [Boolean, Object], default: !0 }, moveImage: { type: [Boolean, Object], default: !0 }, autoZoomAlgorithm: { type: Function }, resizeAlgorithm: { type: Function, default: function(e) {
  var n = e.event, r = e.coordinates, t = e.aspectRatio, i = e.positionRestrictions, a = e.sizeRestrictions, o = de(de({}, r), { right: r.left + r.width, bottom: r.top + r.height }), s = n.params || {}, l = de({}, n.directions), c = s.allowedDirections || { left: !0, right: !0, bottom: !0, top: !0 };
  a.widthFrozen && (l.left = 0, l.right = 0), a.heightFrozen && (l.top = 0, l.bottom = 0), Ot.forEach(function(P) {
    c[P] || (l[P] = 0);
  });
  var d = Pt(o, l = co({ coordinates: o, directions: l, sizeRestrictions: a, positionRestrictions: i })).width, f = Pt(o, l).height, u = s.preserveRatio ? Pe(o) : Rr(d / f, t);
  if (u) {
    var h = s.respectDirection;
    if (h || (h = o.width >= o.height || u === 1 ? "width" : "height"), h === "width") {
      var p = d / u - o.height;
      if (c.top && c.bottom) {
        var m = l.top, v = l.bottom;
        l.bottom = er(p, v, m), l.top = er(p, m, v);
      } else c.bottom ? l.bottom = p : c.top ? l.top = p : c.right ? l.right = 0 : c.left && (l.left = 0);
    } else if (h === "height") {
      var g = o.width - f * u;
      if (c.left && c.right) {
        var b = l.left, k = l.right;
        l.left = -er(g, b, k), l.right = -er(g, k, b);
      } else c.left ? l.left = -g : c.right ? l.right = -g : c.top ? l.top = 0 : c.bottom && (l.bottom = 0);
    }
    l = co({ directions: l, coordinates: o, sizeRestrictions: a, positionRestrictions: i, preserveRatio: !0, compensate: s.compensate });
  }
  return d = Pt(o, l).width, f = Pt(o, l).height, (u = s.preserveRatio ? Pe(o) : Rr(d / f, t)) && Math.abs(u - d / f) > 1e-3 && Ot.forEach(function(P) {
    c[P] || (l[P] = 0);
  }), ea({ event: new Ma({ left: -l.left, top: -l.top }), coordinates: { width: r.width + l.right + l.left, height: r.height + l.top + l.bottom, left: r.left, top: r.top }, positionRestrictions: i });
} }, moveAlgorithm: { type: Function, default: ea }, initStretcher: { type: Function, default: function(e) {
  var n = e.stretcher, r = e.imageSize, t = Pe(r);
  n.style.width = r.width + "px", n.style.height = n.clientWidth / t + "px", n.style.width = n.clientWidth + "px";
} }, fitCoordinates: { type: Function, default: function(e) {
  var n = e.visibleArea, r = e.coordinates, t = e.aspectRatio, i = e.sizeRestrictions, a = e.positionRestrictions, o = de(de({}, r), Yt({ width: r.width, height: r.height, aspectRatio: t, sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minHeight: Math.min(n.height, i.minHeight), minWidth: Math.min(n.width, i.minWidth) } }));
  return o = tt(o = lt(o, gn(et(r), et(o))), yr(Lt(n), a));
} }, fitVisibleArea: { type: Function, default: function(e) {
  var n = e.visibleArea, r = e.boundaries, t = e.getAreaRestrictions, i = e.coordinates, a = de({}, n);
  a.height = a.width / Pe(r), a.top += (n.height - a.height) / 2, (i.height - a.height > 0 || i.width - a.width > 0) && (a = $t(a, Math.max(i.height / a.height, i.width / a.width)));
  var o = mr(bn(i, Lt(a = $t(a, gr(a, t({ visibleArea: a, type: "resize" }))))));
  return a.width < i.width && (o.left = 0), a.height < i.height && (o.top = 0), a = tt(a = lt(a, o), t({ visibleArea: a, type: "move" }));
} }, areaRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.visibleArea, r = e.boundaries, t = e.imageSize, i = e.imageRestriction, a = e.type, o = {};
  return i === "fill-area" ? o = { left: 0, top: 0, right: t.width, bottom: t.height } : i === "fit-area" && (Pe(r) > Pe(t) ? (o = { top: 0, bottom: t.height }, n && a === "move" && (n.width > t.width ? (o.left = -(n.width - t.width) / 2, o.right = t.width - o.left) : (o.left = 0, o.right = t.width))) : (o = { left: 0, right: t.width }, n && a === "move" && (n.height > t.height ? (o.top = -(n.height - t.height) / 2, o.bottom = t.height - o.top) : (o.top = 0, o.bottom = t.height)))), o;
} }, sizeRestrictionsAlgorithm: { type: Function, default: function(e) {
  return { minWidth: e.minWidth, minHeight: e.minHeight, maxWidth: e.maxWidth, maxHeight: e.maxHeight };
} }, positionRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.imageSize, r = {};
  return e.imageRestriction !== "none" && (r = { left: 0, top: 0, right: n.width, bottom: n.height }), r;
} } }, data: function() {
  return { transitionsActive: !1, imageLoaded: !1, imageAttributes: { width: null, height: null, crossOrigin: null, src: null }, defaultImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, appliedImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, boundaries: { width: 0, height: 0 }, visibleArea: null, coordinates: Te({}, io) };
}, computed: { image: function() {
  return { src: this.imageAttributes.src, width: this.imageAttributes.width, height: this.imageAttributes.height, transforms: this.imageTransforms };
}, imageTransforms: function() {
  return { rotate: this.appliedImageTransforms.rotate, flip: { horizontal: this.appliedImageTransforms.flip.horizontal, vertical: this.appliedImageTransforms.flip.vertical }, translateX: this.visibleArea ? this.visibleArea.left / this.coefficient : 0, translateY: this.visibleArea ? this.visibleArea.top / this.coefficient : 0, scaleX: 1 / this.coefficient, scaleY: 1 / this.coefficient };
}, imageSize: function() {
  var e = function(n) {
    return n * Math.PI / 180;
  }(this.imageTransforms.rotate);
  return { width: Math.abs(this.imageAttributes.width * Math.cos(e)) + Math.abs(this.imageAttributes.height * Math.sin(e)), height: Math.abs(this.imageAttributes.width * Math.sin(e)) + Math.abs(this.imageAttributes.height * Math.cos(e)) };
}, initialized: function() {
  return !!(this.visibleArea && this.imageLoaded);
}, settings: function() {
  var e = Jr(this.resizeImage, { touch: !0, wheel: { ratio: 0.1 }, adjustStencil: !0 }, { touch: !1, wheel: !1, adjustStencil: !1 });
  return { moveImage: Jr(this.moveImage, { touch: !0, mouse: !0 }, { touch: !1, mouse: !1 }), resizeImage: e };
}, coefficient: function() {
  return this.visibleArea ? this.visibleArea.width / this.boundaries.width : 0;
}, areaRestrictions: function() {
  return this.imageLoaded ? this.areaRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction, boundaries: this.boundaries }) : {};
}, transitionsOptions: function() {
  return { enabled: this.transitionsActive, timingFunction: "ease-in-out", time: 350 };
}, sizeRestrictions: function() {
  if (this.boundaries.width && this.boundaries.height && this.imageSize.width && this.imageSize.height) {
    var e = this.sizeRestrictionsAlgorithm({ imageSize: this.imageSize, minWidth: Ke(this.minWidth) ? 0 : Jn(this.minWidth), minHeight: Ke(this.minHeight) ? 0 : Jn(this.minHeight), maxWidth: Ke(this.maxWidth) ? 1 / 0 : Jn(this.maxWidth), maxHeight: Ke(this.maxHeight) ? 1 / 0 : Jn(this.maxHeight) });
    if (e = function(t) {
      var i = t.areaRestrictions, a = t.sizeRestrictions, o = t.boundaries, s = t.positionRestrictions, l = de(de({}, a), { minWidth: a.minWidth !== void 0 ? a.minWidth : 0, minHeight: a.minHeight !== void 0 ? a.minHeight : 0, maxWidth: a.maxWidth !== void 0 ? a.maxWidth : 1 / 0, maxHeight: a.maxHeight !== void 0 ? a.maxHeight : 1 / 0 });
      s.left !== void 0 && s.right !== void 0 && (l.maxWidth = Math.min(l.maxWidth, s.right - s.left)), s.bottom !== void 0 && s.top !== void 0 && (l.maxHeight = Math.min(l.maxHeight, s.bottom - s.top));
      var c = Qr(i), d = Hi(o, c);
      return c.width < 1 / 0 && (!l.maxWidth || l.maxWidth > d.width) && (l.maxWidth = Math.min(l.maxWidth, d.width)), c.height < 1 / 0 && (!l.maxHeight || l.maxHeight > d.height) && (l.maxHeight = Math.min(l.maxHeight, d.height)), l.minWidth > l.maxWidth && (l.minWidth = l.maxWidth, l.widthFrozen = !0), l.minHeight > l.maxHeight && (l.minHeight = l.maxHeight, l.heightFrozen = !0), l;
    }({ sizeRestrictions: e, areaRestrictions: this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }), imageSize: this.imageSize, boundaries: this.boundaries, positionRestrictions: this.positionRestrictions, imageRestriction: this.imageRestriction, visibleArea: this.visibleArea, stencilSize: this.getStencilSize() }), this.visibleArea && this.stencilSize) {
      var n = this.getStencilSize(), r = Qr(this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }));
      e.maxWidth = Math.min(e.maxWidth, r.width * n.width / this.boundaries.width), e.maxHeight = Math.min(e.maxHeight, r.height * n.height / this.boundaries.height), e.maxWidth < e.minWidth && (e.minWidth = e.maxWidth), e.maxHeight < e.minHeight && (e.minHeight = e.maxHeight);
    }
    return e;
  }
  return { minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 };
}, positionRestrictions: function() {
  return this.positionRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction });
}, classes: function() {
  return { cropper: Ft(), image: qe(Ft("image"), this.imageClass), stencil: Ft("stencil"), boundaries: qe(Ft("boundaries"), this.boundariesClass), stretcher: qe(Ft("stretcher")), background: qe(Ft("background"), this.backgroundClass), foreground: qe(Ft("foreground"), this.foregroundClass), imageWrapper: qe(Ft("image-wrapper")), cropperWrapper: qe(Ft("cropper-wrapper")) };
}, stencilCoordinates: function() {
  if (this.initialized) {
    var e = this.coordinates, n = e.width, r = e.height, t = e.left, i = e.top;
    return { width: n / this.coefficient, height: r / this.coefficient, left: (t - this.visibleArea.left) / this.coefficient, top: (i - this.visibleArea.top) / this.coefficient };
  }
  return this.defaultCoordinates();
}, boundariesStyle: function() {
  var e = { width: this.boundaries.width ? "".concat(Math.round(this.boundaries.width), "px") : "auto", height: this.boundaries.height ? "".concat(Math.round(this.boundaries.height), "px") : "auto", transition: "opacity ".concat(this.transitionTime, "ms"), pointerEvents: this.imageLoaded ? "all" : "none" };
  return this.imageLoaded || (e.opacity = "0"), e;
}, imageStyle: function() {
  var e = this.imageAttributes.width > this.imageAttributes.height ? { width: Math.min(1024, this.imageAttributes.width), height: Math.min(1024, this.imageAttributes.width) / (this.imageAttributes.width / this.imageAttributes.height) } : { height: Math.min(1024, this.imageAttributes.height), width: Math.min(1024, this.imageAttributes.height) * (this.imageAttributes.width / this.imageAttributes.height) }, n = { left: (e.width - this.imageSize.width) / (2 * this.coefficient), top: (e.height - this.imageSize.height) / (2 * this.coefficient) }, r = { left: (1 - 1 / this.coefficient) * e.width / 2, top: (1 - 1 / this.coefficient) * e.height / 2 }, t = Te(Te({}, this.imageTransforms), {}, { scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / e.width), scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / e.height) }), i = { width: "".concat(e.width, "px"), height: "".concat(e.height, "px"), left: "0px", top: "0px", transform: "translate(".concat(-n.left - r.left - this.imageTransforms.translateX, "px, ").concat(-n.top - r.top - this.imageTransforms.translateY, "px)") + Zi(t) };
  return this.transitionsOptions.enabled && (i.transition = "".concat(this.transitionsOptions.time, "ms ").concat(this.transitionsOptions.timingFunction)), i;
} }, watch: { src: function() {
  this.onChangeImage();
}, stencilComponent: function() {
  var e = this;
  this.$nextTick(function() {
    e.resetCoordinates(), e.runAutoZoom("setCoordinates"), e.onChange();
  });
}, minWidth: function() {
  this.onPropsChange();
}, maxWidth: function() {
  this.onPropsChange();
}, minHeight: function() {
  this.onPropsChange();
}, maxHeight: function() {
  this.onPropsChange();
}, imageRestriction: function() {
  this.reset();
}, stencilProps: function(e, n) {
  ["aspectRatio", "minAspectRatio", "maxAspectRatio"].find(function(r) {
    return e[r] !== n[r];
  }) && this.$nextTick(this.onPropsChange);
} }, created: function() {
  this.debouncedUpdate = Xr(this.update, this.debounce), this.debouncedDisableTransitions = Xr(this.disableTransitions, this.transitionsOptions.time), this.awaiting = !1;
}, mounted: function() {
  this.$refs.image.addEventListener("load", this.onSuccessLoadImage), this.$refs.image.addEventListener("error", this.onFailLoadImage), this.onChangeImage(), window.addEventListener("resize", this.refresh), window.addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  window.removeEventListener("resize", this.refresh), window.removeEventListener("orientationchange", this.refresh), this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.debouncedUpdate.clear(), this.debouncedDisableTransitions.clear();
}, methods: { getResult: function() {
  var e = this.initialized ? this.prepareResult(Te({}, this.coordinates)) : this.defaultCoordinates(), n = { rotate: this.imageTransforms.rotate % 360, flip: Te({}, this.imageTransforms.flip) };
  if (this.src && this.imageLoaded) {
    var r = this;
    return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? Te({}, this.visibleArea) : null, imageTransforms: n, get canvas() {
      return r.canvas ? r.getCanvas() : void 0;
    } };
  }
  return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? Te({}, this.visibleArea) : null, canvas: void 0, imageTransforms: n };
}, zoom: function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = r.transitions, i = t === void 0 || t;
  this.onManipulateImage(new An({}, { factor: 1 / e, center: n }), { normalize: !1, transitions: i });
}, move: function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = r.transitions, i = t === void 0 || t;
  this.onManipulateImage(new An({ left: e || 0, top: n || 0 }), { normalize: !1, transitions: i });
}, setCoordinates: function(e) {
  var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = r.autoZoom, i = t === void 0 || t, a = r.transitions, o = a === void 0 || a;
  this.$nextTick(function() {
    n.imageLoaded ? (n.transitionsActive || (o && n.enableTransitions(), n.coordinates = n.applyTransform(e), i && n.runAutoZoom("setCoordinates"), o && n.debouncedDisableTransitions()), n.onChange()) : n.delayedTransforms = e;
  });
}, refresh: function() {
  var e = this, n = this.$refs.image;
  if (this.src && n) return this.initialized ? this.updateVisibleArea().then(function() {
    e.onChange();
  }) : this.resetVisibleArea().then(function() {
    e.onChange();
  });
}, reset: function() {
  var e = this;
  return this.resetVisibleArea().then(function() {
    e.onChange(!1);
  });
}, awaitRender: function(e) {
  var n = this;
  this.awaiting || (this.awaiting = !0, this.$nextTick(function() {
    e(), n.awaiting = !1;
  }));
}, prepareResult: function(e) {
  return this.roundResult ? function(n) {
    var r = n.coordinates, t = n.sizeRestrictions, i = n.positionRestrictions, a = { width: Math.round(r.width), height: Math.round(r.height), left: Math.round(r.left), top: Math.round(r.top) };
    return a.width > t.maxWidth ? a.width = Math.floor(r.width) : a.width < t.minWidth && (a.width = Math.ceil(r.width)), a.height > t.maxHeight ? a.height = Math.floor(r.height) : a.height < t.minHeight && (a.height = Math.ceil(r.height)), tt(a, i);
  }(Te(Te({}, this.getPublicProperties()), {}, { positionRestrictions: Qn(this.positionRestrictions, this.visibleArea), coordinates: e })) : e;
}, processAutoZoom: function(e, n, r, t) {
  var i = this.autoZoomAlgorithm;
  i || (i = this.stencilSize ? lp : this.autoZoom ? up : cp);
  var a = i({ event: { type: e, params: t }, visibleArea: n, coordinates: r, boundaries: this.boundaries, aspectRatio: this.getAspectRatio(), positionRestrictions: this.positionRestrictions, getAreaRestrictions: this.getAreaRestrictions, sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize() });
  return Te(Te({}, a), {}, { changed: !so(a.visibleArea, n) || !so(a.coordinates, r) });
}, runAutoZoom: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transitions, t = r !== void 0 && r, i = Xh(n, Ep), a = this.processAutoZoom(e, this.visibleArea, this.coordinates, i), o = a.visibleArea, s = a.coordinates, l = a.changed;
  t && l && this.enableTransitions(), this.visibleArea = o, this.coordinates = s, t && l && this.debouncedDisableTransitions();
}, normalizeEvent: function(e) {
  return function(n) {
    var r = n.event, t = n.visibleArea, i = n.coefficient;
    if (r.type === "manipulateImage") return de(de({}, r), { move: { left: r.move && r.move.left ? i * r.move.left : 0, top: r.move && r.move.top ? i * r.move.top : 0 }, scale: { factor: r.scale && r.scale.factor ? r.scale.factor : 1, center: r.scale && r.scale.center ? { left: r.scale.center.left * i + t.left, top: r.scale.center.top * i + t.top } : null } });
    if (r.type === "resize") {
      var a = de(de({}, r), { directions: de({}, r.directions) });
      return Ot.forEach(function(s) {
        a.directions[s] *= i;
      }), a;
    }
    if (r.type === "move") {
      var o = de(de({}, r), { directions: de({}, r.directions) });
      return ap.forEach(function(s) {
        o.directions[s] *= i;
      }), o;
    }
    return r;
  }(Te(Te({}, this.getPublicProperties()), {}, { event: e }));
}, getCanvas: function() {
  if (this.$refs.canvas) {
    var e = this.$refs.canvas, n = this.$refs.image, r = this.imageTransforms.rotate !== 0 || this.imageTransforms.flip.horizontal || this.imageTransforms.flip.vertical ? function(s, l, c) {
      var d = c.rotate, f = c.flip, u = { width: l.naturalWidth, height: l.naturalHeight }, h = Wi(u, d), p = s.getContext("2d");
      s.height = h.height, s.width = h.width, p.save();
      var m = Zt(et(de({ left: 0, top: 0 }, u)), d);
      return p.translate(-(m.left - h.width / 2), -(m.top - h.height / 2)), p.rotate(d * Math.PI / 180), p.translate(f.horizontal ? u.width : 0, f.vertical ? u.height : 0), p.scale(f.horizontal ? -1 : 1, f.vertical ? -1 : 1), p.drawImage(l, 0, 0, u.width, u.height), p.restore(), s;
    }(this.$refs.sourceCanvas, n, this.imageTransforms) : n, t = Te({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: this.maxCanvasSize, imageSmoothingEnabled: !0, imageSmoothingQuality: "high", fillColor: "transparent" }, this.canvas), i = function(s) {
      return s.find(function(l) {
        return c = l, !Number.isNaN(parseFloat(c)) && isFinite(c);
        var c;
      });
    }, a = Yt({ sizeRestrictions: { minWidth: i([t.width, t.minWidth]) || 0, minHeight: i([t.height, t.minHeight]) || 0, maxWidth: i([t.width, t.maxWidth]) || 1 / 0, maxHeight: i([t.height, t.maxHeight]) || 1 / 0 }, width: this.coordinates.width, height: this.coordinates.height, aspectRatio: { minimum: this.coordinates.width / this.coordinates.height, maximum: this.coordinates.width / this.coordinates.height } });
    if (t.maxArea && a.width * a.height > t.maxArea) {
      var o = Math.sqrt(t.maxArea / (a.width * a.height));
      a = { width: Math.round(o * a.width), height: Math.round(o * a.height) };
    }
    return function(s, l, c, d, f) {
      s.width = d ? d.width : c.width, s.height = d ? d.height : c.height;
      var u = s.getContext("2d");
      u.clearRect(0, 0, s.width, s.height), f && (f.imageSmoothingEnabled && (u.imageSmoothingEnabled = f.imageSmoothingEnabled), f.imageSmoothingQuality && (u.imageSmoothingQuality = f.imageSmoothingQuality), f.fillColor && (u.fillStyle = f.fillColor, u.fillRect(0, 0, s.width, s.height), u.save()));
      var h = c.left < 0 ? -c.left : 0, p = c.top < 0 ? -c.top : 0;
      u.drawImage(l, c.left + h, c.top + p, c.width, c.height, h * (s.width / c.width), p * (s.height / c.height), s.width, s.height);
    }(e, r, this.coordinates, a, t), e;
  }
}, update: function() {
  this.$emit("change", this.getResult());
}, applyTransform: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r = this.visibleArea && n ? ip(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions, t = this.visibleArea && n ? Qn(this.positionRestrictions, this.visibleArea) : this.positionRestrictions;
  return sp({ transform: e, coordinates: this.coordinates, imageSize: this.imageSize, sizeRestrictions: r, positionRestrictions: t, aspectRatio: this.getAspectRatio(), visibleArea: this.visibleArea });
}, resetCoordinates: function() {
  var e = this;
  if (this.$refs.image) {
    this.$refs.cropper, this.$refs.image;
    var n = this.defaultSize;
    n || (n = this.stencilSize ? hp : fp);
    var r = this.sizeRestrictions;
    r.minWidth, r.minHeight, r.maxWidth, r.maxHeight;
    var t = pn(n) ? n({ boundaries: this.boundaries, imageSize: this.imageSize, aspectRatio: this.getAspectRatio(), sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize(), visibleArea: this.visibleArea }) : n, i = this.defaultPosition || dp, a = [t, function(o) {
      var s = o.coordinates;
      return Te({}, pn(i) ? i({ coordinates: s, imageSize: e.imageSize, visibleArea: e.visibleArea }) : e.defaultPosition);
    }];
    this.delayedTransforms && a.push.apply(a, cn(Array.isArray(this.delayedTransforms) ? this.delayedTransforms : [this.delayedTransforms])), this.coordinates = this.applyTransform(a, !0), this.delayedTransforms = null;
  }
}, clearImage: function() {
  var e = this;
  this.imageLoaded = !1, setTimeout(function() {
    var n = e.$refs.stretcher;
    n && (n.style.height = "auto", n.style.width = "auto"), e.coordinates = e.defaultCoordinates(), e.boundaries = { width: 0, height: 0 };
  }, this.transitionTime);
}, enableTransitions: function() {
  this.transitions && (this.transitionsActive = !0);
}, disableTransitions: function() {
  this.transitionsActive = !1;
}, updateBoundaries: function() {
  var e = this, n = this.$refs.stretcher, r = this.$refs.cropper;
  return this.initStretcher({ cropper: r, stretcher: n, imageSize: this.imageSize }), this.$nextTick().then(function() {
    var t = { cropper: r, imageSize: e.imageSize };
    if (pn(e.defaultBoundaries) ? e.boundaries = e.defaultBoundaries(t) : e.defaultBoundaries === "fit" ? e.boundaries = function(i) {
      var a = i.cropper, o = i.imageSize, s = a.clientHeight, l = a.clientWidth, c = s, d = o.width * s / o.height;
      return d > l && (d = l, c = o.height * l / o.width), { width: d, height: c };
    }(t) : e.boundaries = function(i) {
      var a = i.cropper;
      return { width: a.clientWidth, height: a.clientHeight };
    }(t), !e.boundaries.width || !e.boundaries.height) throw new Error("It's impossible to fit the cropper in the current container");
  });
}, resetVisibleArea: function() {
  var e = this;
  return this.appliedImageTransforms = Te(Te({}, this.defaultImageTransforms), {}, { flip: Te({}, this.defaultImageTransforms.flip) }), this.updateBoundaries().then(function() {
    e.priority !== "visible-area" && (e.visibleArea = null, e.resetCoordinates());
    var n, r, t, i, a, o, s = e.defaultVisibleArea || pp;
    e.visibleArea = pn(s) ? s({ imageSize: e.imageSize, boundaries: e.boundaries, coordinates: e.priority !== "visible-area" ? e.coordinates : null, getAreaRestrictions: e.getAreaRestrictions, stencilSize: e.getStencilSize() }) : e.defaultVisibleArea, e.visibleArea = (n = { visibleArea: e.visibleArea, boundaries: e.boundaries, getAreaRestrictions: e.getAreaRestrictions }, r = n.visibleArea, t = n.boundaries, i = n.getAreaRestrictions, a = de({}, r), o = Pe(t), a.width / a.height !== o && (a.height = a.width / o), tt(a, i({ visibleArea: a, type: "move" }))), e.priority === "visible-area" ? e.resetCoordinates() : e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("resetVisibleArea");
  }).catch(function() {
    e.visibleArea = null;
  });
}, updateVisibleArea: function() {
  var e = this;
  return this.updateBoundaries().then(function() {
    e.visibleArea = e.fitVisibleArea({ imageSize: e.imageSize, boundaries: e.boundaries, visibleArea: e.visibleArea, coordinates: e.coordinates, getAreaRestrictions: e.getAreaRestrictions }), e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("updateVisibleArea");
  }).catch(function() {
    e.visibleArea = null;
  });
}, onChange: function() {
  var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  e && this.debounce ? this.debouncedUpdate() : this.update();
}, onChangeImage: function() {
  var e, n = this;
  if (this.imageLoaded = !1, this.delayedTransforms = null, this.src) {
    if (function(i) {
      if (ao(i)) return !1;
      var a = window.location, o = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(i) || [], s = { protocol: o[1] || "", host: o[2] || "", port: o[3] || "" }, l = function(c) {
        return c.port || ((c.protocol || a.protocol) === "http" ? 80 : 433);
      };
      return !(!s.protocol && !s.host && !s.port || s.protocol && s.protocol == a.protocol && s.host && s.host == a.host && s.host && l(s) == l(a));
    }(this.src)) {
      var r = Ke(this.crossOrigin) ? this.canvas : this.crossOrigin;
      r === !0 && (r = "anonymous"), this.imageAttributes.crossOrigin = r || null;
    }
    if (this.checkOrientation) {
      var t = (e = this.src, new Promise(function(i) {
        Mp(e).then(function(a) {
          var o = Dp(a);
          i(a ? { source: e, arrayBuffer: a, orientation: o } : { source: e, arrayBuffer: null, orientation: null });
        }).catch(function(a) {
          console.warn(a), i({ source: e, arrayBuffer: null, orientation: null });
        });
      }));
      setTimeout(function() {
        t.then(n.onParseImage);
      }, this.transitionTime);
    } else setTimeout(function() {
      n.onParseImage({ source: n.src });
    }, this.transitionTime);
  } else this.clearImage();
}, onFailLoadImage: function() {
  this.imageAttributes.src && (this.clearImage(), this.$emit("error"));
}, onSuccessLoadImage: function() {
  var e = this, n = this.$refs.image;
  n && !this.imageLoaded && (this.imageAttributes.height = n.naturalHeight, this.imageAttributes.width = n.naturalWidth, this.imageLoaded = !0, this.resetVisibleArea().then(function() {
    e.$emit("ready"), e.onChange(!1);
  }));
}, onParseImage: function(e) {
  var n = this, r = e.source, t = e.arrayBuffer, i = e.orientation;
  this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.imageAttributes.revoke = !1, t && i && i > 1 ? Yi(r) || !ao(r) ? (this.imageAttributes.src = URL.createObjectURL(new Blob([t])), this.imageAttributes.revoke = !0) : this.imageAttributes.src = function(a) {
    for (var o = [], s = new Uint8Array(a); s.length > 0; ) {
      var l = s.subarray(0, 8192);
      o.push(String.fromCharCode.apply(null, Array.from ? Array.from(l) : l.slice())), s = s.subarray(8192);
    }
    return "data:image/jpeg;base64," + btoa(o.join(""));
  }(t) : this.imageAttributes.src = r, pn(this.defaultTransforms) ? this.appliedImageTransforms = zr(this.defaultTransforms()) : sr(this.defaultTransforms) ? this.appliedImageTransforms = zr(this.defaultTransforms) : this.appliedImageTransforms = function(a) {
    var o = zr({});
    if (a) switch (a) {
      case 2:
        o.flip.horizontal = !0;
        break;
      case 3:
        o.rotate = -180;
        break;
      case 4:
        o.flip.vertical = !0;
        break;
      case 5:
        o.rotate = 90, o.flip.vertical = !0;
        break;
      case 6:
        o.rotate = 90;
        break;
      case 7:
        o.rotate = 90, o.flip.horizontal = !0;
        break;
      case 8:
        o.rotate = -90;
    }
    return o;
  }(i), this.defaultImageTransforms = Te(Te({}, this.appliedImageTransforms), {}, { flip: Te({}, this.appliedImageTransforms.flip) }), this.$nextTick(function() {
    var a = n.$refs.image;
    a && a.complete && (function(o) {
      return !!o.naturalWidth;
    }(a) ? n.onSuccessLoadImage() : n.onFailLoadImage());
  });
}, onResizeEnd: function() {
  this.runAutoZoom("resize", { transitions: !0 });
}, onMoveEnd: function() {
  this.runAutoZoom("move", { transitions: !0 });
}, onMove: function(e) {
  var n = this;
  this.transitionsOptions.enabled || this.awaitRender(function() {
    n.coordinates = n.moveAlgorithm(Te(Te({}, n.getPublicProperties()), {}, { positionRestrictions: Qn(n.positionRestrictions, n.visibleArea), coordinates: n.coordinates, event: n.normalizeEvent(e) })), n.onChange();
  });
}, onResize: function(e) {
  var n = this;
  this.transitionsOptions.enabled || this.stencilSize && !this.autoZoom || this.awaitRender(function() {
    var r = n.sizeRestrictions, t = Math.min(n.coordinates.width, n.coordinates.height, 20 * n.coefficient);
    n.coordinates = n.resizeAlgorithm(Te(Te({}, n.getPublicProperties()), {}, { positionRestrictions: Qn(n.positionRestrictions, n.visibleArea), sizeRestrictions: { maxWidth: Math.min(r.maxWidth, n.visibleArea.width), maxHeight: Math.min(r.maxHeight, n.visibleArea.height), minWidth: Math.max(r.minWidth, t), minHeight: Math.max(r.minHeight, t) }, event: n.normalizeEvent(e) })), n.onChange(), n.ticking = !1;
  });
}, onManipulateImage: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!this.transitionsOptions.enabled) {
    var r = n.transitions, t = r !== void 0 && r, i = n.normalize, a = i === void 0 || i;
    t && this.enableTransitions();
    var o = vp(Te(Te({}, this.getPublicProperties()), {}, { event: a ? this.normalizeEvent(e) : e, getAreaRestrictions: this.getAreaRestrictions, imageRestriction: this.imageRestriction, adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil })), s = o.visibleArea, l = o.coordinates;
    this.visibleArea = s, this.coordinates = l, this.runAutoZoom("manipulateImage"), this.onChange(), t && this.debouncedDisableTransitions();
  }
}, onPropsChange: function() {
  this.coordinates = this.applyTransform(this.coordinates, !0), this.onChange(!1);
}, getAreaRestrictions: function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.visibleArea, r = e.type, t = r === void 0 ? "move" : r;
  return this.areaRestrictionsAlgorithm({ boundaries: this.boundaries, imageSize: this.imageSize, imageRestriction: this.imageRestriction, visibleArea: n, type: t });
}, getAspectRatio: function(e) {
  var n, r, t = this.stencilProps, i = t.aspectRatio, a = t.minAspectRatio, o = t.maxAspectRatio;
  if (this.$refs.stencil && this.$refs.stencil.aspectRatios) {
    var s = this.$refs.stencil.aspectRatios();
    n = s.minimum, r = s.maximum;
  }
  if (Ke(n) && (n = Ke(i) ? a : i), Ke(r) && (r = Ke(i) ? o : i), !e && (Ke(n) || Ke(r))) {
    var l = this.getStencilSize(), c = l ? Pe(l) : null;
    Ke(n) && (n = oo(c) ? c : void 0), Ke(r) && (r = oo(c) ? c : void 0);
  }
  return { minimum: n, maximum: r };
}, getStencilSize: function() {
  if (this.stencilSize) return e = { currentStencilSize: { width: this.stencilCoordinates.width, height: this.stencilCoordinates.height }, stencilSize: this.stencilSize, boundaries: this.boundaries, coefficient: this.coefficient, coordinates: this.coordinates, aspectRatio: this.getAspectRatio(!0) }, n = e.boundaries, r = e.stencilSize, t = e.aspectRatio, Rr(Pe(i = pn(r) ? r({ boundaries: n, aspectRatio: t }) : r), t) && (i = Yt({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: i.width, height: i.height, aspectRatio: { minimum: t.minimum, maximum: t.maximum } })), (i.width > n.width || i.height > n.height) && (i = Yt({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: i.width, height: i.height, aspectRatio: { minimum: Pe(i), maximum: Pe(i) } })), i;
  var e, n, r, t, i;
}, getPublicProperties: function() {
  return { coefficient: this.coefficient, visibleArea: this.visibleArea, coordinates: this.coordinates, boundaries: this.boundaries, sizeRestrictions: this.sizeRestrictions, positionRestrictions: this.positionRestrictions, aspectRatio: this.getAspectRatio(), imageRestriction: this.imageRestriction };
}, defaultCoordinates: function() {
  return Te({}, io);
}, flip: function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = r.transitions, i = t === void 0 || t;
  if (!this.transitionsActive) {
    i && this.enableTransitions();
    var a = Te({}, this.imageTransforms.flip), o = gp({ flip: { horizontal: e ? !a.horizontal : a.horizontal, vertical: n ? !a.vertical : a.vertical }, previousFlip: a, rotate: this.imageTransforms.rotate, visibleArea: this.visibleArea, coordinates: this.coordinates, imageSize: this.imageSize, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), s = o.visibleArea, l = o.coordinates;
    e && (this.appliedImageTransforms.flip.horizontal = !this.appliedImageTransforms.flip.horizontal), n && (this.appliedImageTransforms.flip.vertical = !this.appliedImageTransforms.flip.vertical), this.visibleArea = s, this.coordinates = l, this.onChange(), i && this.debouncedDisableTransitions();
  }
}, rotate: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transitions, t = r === void 0 || r;
  if (!this.transitionsActive) {
    t && this.enableTransitions();
    var i = Te({}, this.imageSize);
    this.appliedImageTransforms.rotate += e;
    var a = mp({ visibleArea: this.visibleArea, coordinates: this.coordinates, previousImageSize: i, imageSize: this.imageSize, angle: e, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), o = a.visibleArea, s = a.coordinates, l = this.processAutoZoom("rotateImage", o, s);
    o = l.visibleArea, s = l.coordinates, this.visibleArea = o, this.coordinates = s, this.onChange(), t && this.debouncedDisableTransitions();
  }
} }, emits: ["change", "error", "ready"] }, Ap = { key: 0, ref: "canvas", style: { display: "none" } }, Tp = { key: 1, ref: "sourceCanvas", style: { display: "none" } };
Qi.render = function(e, n, r, t, i, a) {
  return D(), me("div", { ref: "cropper", class: a.classes.cropper }, [X("div", { ref: "stretcher", class: a.classes.stretcher }, null, 2), X("div", { class: a.classes.boundaries, style: a.boundariesStyle }, [(D(), me(un(r.backgroundWrapperComponent), { class: a.classes.cropperWrapper, "wheel-resize": a.settings.resizeImage.wheel, "touch-resize": a.settings.resizeImage.touch, "touch-move": a.settings.moveImage.touch, "mouse-move": a.settings.moveImage.mouse, onMove: a.onManipulateImage, onResize: a.onManipulateImage }, { default: be(function() {
    return [X("div", { class: a.classes.background, style: a.boundariesStyle }, null, 6), X("div", { class: a.classes.imageWrapper }, [X("img", { ref: "image", crossorigin: i.imageAttributes.crossOrigin, src: i.imageAttributes.src, class: a.classes.image, style: a.imageStyle, onMousedown: n[1] || (n[1] = yt(function() {
    }, ["prevent"])) }, null, 46, ["crossorigin", "src"])], 2), X("div", { class: a.classes.foreground, style: a.boundariesStyle }, null, 6), Ce((D(), me(un(r.stencilComponent), pa({ ref: "stencil", image: a.image, coordinates: i.coordinates, "stencil-coordinates": a.stencilCoordinates, transitions: a.transitionsOptions }, r.stencilProps, { onResize: a.onResize, onResizeEnd: a.onResizeEnd, onMove: a.onMove, onMoveEnd: a.onMoveEnd }), null, 16, ["image", "coordinates", "stencil-coordinates", "transitions", "onResize", "onResizeEnd", "onMove", "onMoveEnd"])), [[it, i.imageLoaded]]), r.canvas ? (D(), me("canvas", Ap, null, 512)) : G("", !0), r.canvas ? (D(), me("canvas", Tp, null, 512)) : G("", !0)];
  }), _: 1 }, 8, ["class", "wheel-resize", "touch-resize", "touch-move", "mouse-move", "onMove", "onResize"]))], 6)], 2);
};
const Pp = { class: "tc-flex tc-flex-col tc-space-y-4" }, Op = { class: "tc-bg-gray-200 tc-h-80 tc-flex tc-items-center tc-justify-center tc-w-full tc-max-w-md" }, Cp = { class: "tc-bg-gray-100 tc-flex tc-items-center tc-justify-center tc-p-4" }, Lp = { class: "tc-flex tc-items-center tc-justify-between tc-p-4" }, Rp = {
  __name: "ImageCropper",
  props: {
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    }
  },
  emits: ["image"],
  setup(e, { emit: n }) {
    const r = n, t = F({ src: null, type: null }), i = F(null), a = F(null);
    function o(d, f = null) {
      const u = new Uint8Array(d).subarray(0, 4);
      let h = "";
      for (let p = 0; p < u.length; p++)
        h += u[p].toString(16);
      switch (h) {
        case "89504e47":
          return "image/png";
        case "47494638":
          return "image/gif";
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
          return "image/jpeg";
        default:
          return f;
      }
    }
    const s = () => {
      const { canvas: d } = i.value.getResult();
      d.toBlob((f) => {
        r("image", f);
      }, t.value.type);
    }, l = () => {
      t.value = { src: null, type: null };
    }, c = (d) => {
      const { files: f } = d.target;
      if (f && f[0]) {
        t.value.src && URL.revokeObjectURL(t.value.src);
        const u = URL.createObjectURL(f[0]), h = new FileReader();
        h.onload = (p) => {
          t.value = {
            src: u,
            type: o(p.target.result, f[0].type)
          };
        }, h.readAsArrayBuffer(f[0]);
      }
    };
    return Se(() => {
      t.value.src && URL.revokeObjectURL(t.value.src);
    }), (d, f) => (D(), L("div", Pp, [
      M("div", Op, [
        t.value.src ? (D(), me(te(Qi), {
          key: 0,
          ref_key: "cropper",
          ref: i,
          canvas: {
            height: e.width,
            width: e.height
          },
          src: t.value.src,
          "stencil-props": {
            handlers: {},
            movable: !1,
            scalable: !1,
            aspectRatio: 1
          },
          class: "cropper",
          "image-restriction": "stencil"
        }, null, 8, ["canvas", "src"])) : G("", !0)
      ]),
      M("div", Cp, [
        M("input", {
          ref_key: "file",
          ref: a,
          accept: "image/*",
          class: "tc-py-3 tc-px-8 tc-text-gray-800",
          type: "file",
          onChange: c
        }, null, 544)
      ]),
      M("div", Lp, [
        X(mn, {
          disabled: !t.value.src,
          type: "gray",
          size: "lg",
          "data-test": "reset-button",
          onClick: l
        }, {
          default: be(() => [...f[0] || (f[0] = [
            je(" Reset ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        X(mn, {
          disabled: !t.value.src,
          type: "secondary",
          size: "lg",
          "data-test": "save-button",
          onClick: s
        }, {
          default: be(() => [...f[1] || (f[1] = [
            je(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}, Cg = /* @__PURE__ */ Sa(Rp, [["__scopeId", "data-v-7fa3c80a"]]), es = Symbol("ConfirmDialog");
function Lg() {
  const e = F(!1), n = F("Confirmation"), r = F(""), t = F(null), i = F(null);
  function a(l = "Are you sure?", c = "This operation cannot be undone. Would you like to proceed?", d = null) {
    return r.value = c, n.value = l, e.value = !0, i.value = d, new Promise((f) => {
      t.value = f;
    });
  }
  function o() {
    t.value && t.value(!0), e.value = !1;
  }
  function s() {
    t.value && t.value(!1), e.value = !1;
  }
  fe(es, {
    isVisible: e,
    message: r,
    title: n,
    showDialog: a,
    confirm: o,
    cancel: s,
    password: i
  });
}
function Ip() {
  const e = ve(es);
  if (!e)
    throw new Error("useConfirmDialog must be used within a provideConfirmDialog");
  return e;
}
const zp = {
  key: 0,
  class: "tc-fixed tc-inset-0 tc-flex tc-items-center tc-justify-center tc-bg-black tc-bg-opacity-50 tc-z-[9999]"
}, Fp = { class: "tc-bg-white tc-p-8 tc-rounded-lg tc-shadow-md lg:tc-w-1/3 md:tc-w-1/2 sm:tc-w-auto" }, Yp = { class: "tc-text-lg tc-font-semibold tc-mb-4" }, jp = { class: "tc-text-gray-700 tc-mb-6" }, Bp = { key: 0 }, Vp = { class: "tc-flex tc-justify-end" }, Rg = {
  __name: "ConfirmDialog",
  setup(e) {
    const n = F(null), { isVisible: r, title: t, message: i, confirm: a, cancel: o, password: s = null } = Ip(), l = () => {
      n.value = null, o();
    }, c = () => {
      n.value = null, a();
    };
    return (d, f) => (D(), me(ur, { to: "body" }, [
      te(r) ? (D(), L("div", zp, [
        M("div", Fp, [
          M("p", Yp, Q(te(t) || "-"), 1),
          M("p", jp, Q(te(i) || "-"), 1),
          te(s) ? (D(), L("p", Bp, [
            X(Cl, {
              modelValue: n.value,
              "onUpdate:modelValue": f[0] || (f[0] = (u) => n.value = u),
              "data-test": "confirm-password"
            }, null, 8, ["modelValue"])
          ])) : G("", !0),
          M("div", Vp, [
            X(mn, {
              type: "gray",
              class: "tc-px-4 tc-py-2 tc-mr-2",
              "data-test": "cancel-delete",
              onClick: l
            }, {
              default: be(() => [...f[1] || (f[1] = [
                je(" Cancel ", -1)
              ])]),
              _: 1
            }),
            X(mn, {
              type: "danger",
              "data-test": "confirm-delete",
              disabled: te(s) !== n.value,
              onClick: c
            }, {
              default: be(() => [...f[2] || (f[2] = [
                je(" Confirm ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])
      ])) : G("", !0)
    ]));
  }
}, Np = { class: "copy-container" }, Ig = {
  __name: "CopyText",
  props: {
    value: {
      type: [String, Number],
      required: !0
    },
    timeout: {
      type: String,
      required: !1,
      default: 800
    },
    successMessage: {
      type: String,
      required: !1,
      default: "Copied"
    }
  },
  setup(e) {
    const n = e, r = F(!1);
    let t = null;
    const i = j(() => {
      if (r.value) {
        const s = Number(n.timeout);
        t = setTimeout(() => r.value = !1, s);
      }
      return r.value;
    }), a = j(() => n.successMessage), o = () => {
      const s = document.createElement("textarea");
      s.value = n.value, s.setAttribute("readonly", "readonly"), s.style.position = "absolute", s.style.left = "-9999px", document.body.appendChild(s), s.select(), r.value = document.execCommand("copy"), document.body.removeChild(s);
    };
    return Io(() => {
      n.timeout && clearTimeout(t);
    }), (s, l) => (D(), L("span", Np, [
      M("a", {
        class: "clickable",
        href: "#",
        onClick: yt(o, ["prevent"])
      }, [
        Ee(s.$slots, "default", {}, () => [
          X(te(Sh), {
            class: "-tc-ml-0.5 tc-size-5 tc-text-gray-400",
            "aria-hidden": "true"
          })
        ])
      ]),
      i.value ? (D(), me(mi, {
        key: 0,
        message: a.value
      }, null, 8, ["message"])) : G("", !0)
    ]));
  }
}, Hp = { class: "tc-relative tc-inline-block" }, Wp = { class: "tc-flex tc-items-center" }, zg = {
  __name: "ToolTip",
  props: {
    text: {
      type: String,
      required: !1,
      default: () => null
    },
    position: {
      type: String,
      default: "top",
      validator: (e) => ["top", "bottom", "left", "right"].includes(e)
    }
  },
  setup(e) {
    const n = e, r = F(!1), t = j(() => {
      switch (n.position) {
        case "bottom":
          return "tc-top-full tc-mt-2 tc-left-1/2 -tc-translate-x-1/2";
        case "left":
          return "tc-right-full tc-mr-2 tc-top-1/2 -tc-translate-y-1/2";
        case "right":
          return "tc-left-full tc-ml-2 tc-top-1/2 -tc-translate-y-1/2";
        case "top":
        default:
          return "tc-bottom-full tc-mb-2 tc-left-1/2 -tc-translate-x-1/2";
      }
    });
    return (i, a) => (D(), L("div", Hp, [
      M("div", Wp, [
        Ee(i.$slots, "default"),
        M("div", {
          class: "tc-relative tc-flex tc-items-center",
          onMouseenter: a[0] || (a[0] = (o) => r.value = !0),
          onMouseleave: a[1] || (a[1] = (o) => r.value = !1)
        }, [
          Ee(i.$slots, "icon", {}, () => [
            X(te(Eh), { class: "tc-w-5 tc-h-5 tc-ml-2 tc-text-tonik-purple tc-cursor-pointer" })
          ]),
          r.value ? (D(), L("div", {
            key: 0,
            class: pe([
              "tc-absolute tc-z-10 tc-bg-gray-800 tc-text-white tc-text-sm tc-rounded tc-p-3 tc-whitespace-nowrap tc-transition-opacity tc-duration-300",
              t.value
            ])
          }, [
            je(Q(e.text) + " ", 1),
            Ee(i.$slots, "html")
          ], 2)) : G("", !0)
        ], 32)
      ])
    ]));
  }
}, Up = { class: "tc-relative tc-m-auto tc-text-black" }, _p = {
  key: 0,
  class: "tc-absolute tc-top-0 tc-left-5 tc-h-full"
}, Fg = {
  __name: "RoleIcon",
  props: {
    isEmployer: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (n, r) => (D(), L("div", Up, [
      X(te(Ah), {
        class: "tc-size-6 tc-text-black",
        "aria-hidden": "true"
      }),
      e.isEmployer ? (D(), L("div", _p, [...r[0] || (r[0] = [
        M("span", { class: "tc-font-bold" }, "e", -1)
      ])])) : G("", !0)
    ]));
  }
}, qp = { class: "tc-m-auto tc-flex tc-flex-col tc-items-center" }, Zp = { class: "tc-text-green-2" }, Kp = { class: "tc-text-sm tc-uppercase tc-font-semibold" }, Gp = { class: "tc-text-tendo-blue" }, Xp = { class: "tc-text-sm tc-uppercase tc-font-semibold" }, Jp = { class: "tc-text-error" }, Qp = { class: "tc-text-sm tc-uppercase tc-font-semibold" }, Yg = {
  __name: "StatusIcon",
  props: {
    status: {
      type: String,
      default: "pending"
    }
  },
  setup(e) {
    return (n, r) => (D(), L("div", qp, [
      e.status === "pending" ? (D(), L(se, { key: 0 }, [
        r[0] || (r[0] = M("div", { class: "tc-size-6 tc-text-green-2 tc-fill-green-2" }, [
          M("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512"
          }, [
            M("path", { d: "M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM288 437v11H96V437c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z" })
          ])
        ], -1)),
        M("div", Zp, [
          M("span", Kp, Q(e.status), 1)
        ])
      ], 64)) : e.status === "complete" ? (D(), L(se, { key: 1 }, [
        X(te(bh), {
          class: "tc-size-6 tc-text-tendo-blue",
          "aria-hidden": "true"
        }),
        M("div", Gp, [
          M("span", Xp, Q(e.status), 1)
        ])
      ], 64)) : e.status === "cancelled" ? (D(), L(se, { key: 2 }, [
        X(te(Dh), {
          class: "tc-size-6 tc-text-error",
          "aria-hidden": "true"
        }),
        M("div", Jp, [
          M("span", Qp, Q(e.status), 1)
        ])
      ], 64)) : G("", !0)
    ]));
  }
}, ev = { class: "tc-relative tc-m-auto tc-text-black" }, tv = { class: "tc-size-6 tc-text-black tc-fill-black" }, nv = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, rv = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, av = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, ov = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, jg = {
  __name: "EmployerRoleIcon",
  props: {
    role: {
      type: String,
      default: "manager"
    }
  },
  setup(e) {
    return (n, r) => (D(), L("div", ev, [
      M("div", tv, [
        e.role === "manager" ? (D(), L("svg", nv, [...r[0] || (r[0] = [
          M("path", { d: "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" }, null, -1)
        ])])) : e.role === "collection" ? (D(), L("svg", rv, [...r[1] || (r[1] = [
          M("path", { d: "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" }, null, -1)
        ])])) : e.role === "employee_profile" ? (D(), L("svg", av, [...r[2] || (r[2] = [
          M("path", { d: "M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" }, null, -1)
        ])])) : e.role === "reward_manager" ? (D(), L("svg", ov, [...r[3] || (r[3] = [
          M("path", { d: "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" }, null, -1)
        ])])) : G("", !0)
      ])
    ]));
  }
};
function iv(e, n, r) {
  let t = F(r == null ? void 0 : r.value), i = j(() => e.value !== void 0);
  return [j(() => i.value ? e.value : t.value), function(a) {
    return i.value || (t.value = a), n == null ? void 0 : n(a);
  }];
}
function Ta(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function Fn() {
  let e = [], n = { addEventListener(r, t, i, a) {
    return r.addEventListener(t, i, a), n.add(() => r.removeEventListener(t, i, a));
  }, requestAnimationFrame(...r) {
    let t = requestAnimationFrame(...r);
    n.add(() => cancelAnimationFrame(t));
  }, nextFrame(...r) {
    n.requestAnimationFrame(() => {
      n.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let t = setTimeout(...r);
    n.add(() => clearTimeout(t));
  }, microTask(...r) {
    let t = { current: !0 };
    return Ta(() => {
      t.current && r[0]();
    }), n.add(() => {
      t.current = !1;
    });
  }, style(r, t, i) {
    let a = r.style.getPropertyValue(t);
    return Object.assign(r.style, { [t]: i }), this.add(() => {
      Object.assign(r.style, { [t]: a });
    });
  }, group(r) {
    let t = Fn();
    return r(t), this.add(() => t.dispose());
  }, add(r) {
    return e.push(r), () => {
      let t = e.indexOf(r);
      if (t >= 0) for (let i of e.splice(t, 1)) i();
    };
  }, dispose() {
    for (let r of e.splice(0)) r();
  } };
  return n;
}
var ho;
let sv = Symbol("headlessui.useid"), lv = 0;
const Qe = (ho = vn.useId) != null ? ho : function() {
  return vn.inject(sv, () => `${++lv}`)();
};
function re(e) {
  var n;
  if (e == null || e.value == null) return null;
  let r = (n = e.value.$el) != null ? n : e.value;
  return r instanceof Node ? r : null;
}
function rt(e, n, ...r) {
  if (e in n) {
    let i = n[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, rt), t;
}
var uv = Object.defineProperty, cv = (e, n, r) => n in e ? uv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, po = (e, n, r) => (cv(e, typeof n != "symbol" ? n + "" : n, r), r);
let dv = class {
  constructor() {
    po(this, "current", this.detect()), po(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, Yn = new dv();
function Mt(e) {
  if (Yn.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = re(e);
    if (n) return n.ownerDocument;
  }
  return document;
}
let na = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Xe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Xe || {}), On = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(On || {}), fv = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(fv || {});
function jn(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(na)).sort((n, r) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var br = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(br || {});
function wr(e, n = 0) {
  var r;
  return e === ((r = Mt(e)) == null ? void 0 : r.body) ? !1 : rt(n, { 0() {
    return e.matches(na);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(na)) return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
function ts(e) {
  let n = Mt(e);
  Le(() => {
    n && !wr(n.activeElement, 0) && Qt(e);
  });
}
var hv = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(hv || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Qt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let pv = ["textarea", "input"].join(",");
function vv(e) {
  var n, r;
  return (r = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, pv)) != null ? r : !1;
}
function ns(e, n = (r) => r) {
  return e.slice().sort((r, t) => {
    let i = n(r), a = n(t);
    if (i === null || a === null) return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function mv(e, n) {
  return xt(jn(), n, { relativeTo: e });
}
function xt(e, n, { sorted: r = !0, relativeTo: t = null, skipElements: i = [] } = {}) {
  var a;
  let o = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? r ? ns(e) : e : jn(e);
  i.length > 0 && s.length > 1 && (s = s.filter((p) => !i.includes(p))), t = t ?? o.activeElement;
  let l = (() => {
    if (n & 5) return 1;
    if (n & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (n & 1) return 0;
    if (n & 2) return Math.max(0, s.indexOf(t)) - 1;
    if (n & 4) return Math.max(0, s.indexOf(t)) + 1;
    if (n & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = n & 32 ? { preventScroll: !0 } : {}, f = 0, u = s.length, h;
  do {
    if (f >= u || f + u <= 0) return 0;
    let p = c + f;
    if (n & 16) p = (p + u) % u;
    else {
      if (p < 0) return 3;
      if (p >= u) return 1;
    }
    h = s[p], h == null || h.focus(d), f += l;
  } while (h !== o.activeElement);
  return n & 6 && vv(h) && h.select(), 2;
}
function rs() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function gv() {
  return /Android/gi.test(window.navigator.userAgent);
}
function yv() {
  return rs() || gv();
}
function nr(e, n, r) {
  Yn.isServer || ge((t) => {
    document.addEventListener(e, n, r), t(() => document.removeEventListener(e, n, r));
  });
}
function as(e, n, r) {
  Yn.isServer || ge((t) => {
    window.addEventListener(e, n, r), t(() => window.removeEventListener(e, n, r));
  });
}
function Pa(e, n, r = j(() => !0)) {
  function t(a, o) {
    if (!r.value || a.defaultPrevented) return;
    let s = o(a);
    if (s === null || !s.getRootNode().contains(s)) return;
    let l = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of l) {
      if (c === null) continue;
      let d = c instanceof HTMLElement ? c : re(c);
      if (d != null && d.contains(s) || a.composed && a.composedPath().includes(d)) return;
    }
    return !wr(s, br.Loose) && s.tabIndex !== -1 && a.preventDefault(), n(a, s);
  }
  let i = F(null);
  nr("pointerdown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), nr("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), nr("click", (a) => {
    yv() || i.value && (t(a, () => i.value), i.value = null);
  }, !0), nr("touchend", (a) => t(a, () => a.target instanceof HTMLElement ? a.target : null), !0), as("blur", (a) => t(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function vo(e, n) {
  if (e) return e;
  let r = n ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function Oa(e, n) {
  let r = F(vo(e.value.type, e.value.as));
  return he(() => {
    r.value = vo(e.value.type, e.value.as);
  }), ge(() => {
    var t;
    r.value || re(n) && re(n) instanceof HTMLButtonElement && !((t = re(n)) != null && t.hasAttribute("type")) && (r.value = "button");
  }), r;
}
function mo(e) {
  return [e.screenX, e.screenY];
}
function bv() {
  let e = F([-1, -1]);
  return { wasMoved(n) {
    let r = mo(n);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(n) {
    e.value = mo(n);
  } };
}
function wv({ container: e, accept: n, walk: r, enabled: t }) {
  ge(() => {
    let i = e.value;
    if (!i || t !== void 0 && !t.value) return;
    let a = Mt(e);
    if (!a) return;
    let o = Object.assign((l) => n(l), { acceptNode: n }), s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; s.nextNode(); ) r(s.currentNode);
  });
}
var Rt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Rt || {}), Gt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Gt || {});
function He({ visible: e = !0, features: n = 0, ourProps: r, theirProps: t, ...i }) {
  var a;
  let o = is(t, r), s = Object.assign(i, { props: o });
  if (e || n & 2 && o.static) return Yr(s);
  if (n & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return rt(l, { 0() {
      return null;
    }, 1() {
      return Yr({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Yr(s);
}
function Yr({ props: e, attrs: n, slots: r, slot: t, name: i }) {
  var a, o;
  let { as: s, ...l } = Ca(e, ["unmount", "static"]), c = (a = r.default) == null ? void 0 : a.call(r, t), d = {};
  if (t) {
    let f = !1, u = [];
    for (let [h, p] of Object.entries(t)) typeof p == "boolean" && (f = !0), p === !0 && u.push(h);
    f && (d["data-headlessui-state"] = u.join(" "));
  }
  if (s === "template") {
    if (c = os(c ?? []), Object.keys(l).length > 0 || Object.keys(n).length > 0) {
      let [f, ...u] = c ?? [];
      if (!$v(f) || u.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(n)).map((m) => m.trim()).filter((m, v, g) => g.indexOf(m) === v).sort((m, v) => m.localeCompare(v)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = is((o = f.props) != null ? o : {}, l, d), p = fa(f, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return oe(s, Object.assign({}, l, d), { default: () => c });
}
function os(e) {
  return e.flatMap((n) => n.type === se ? os(n.children) : [n]);
}
function is(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let n = {}, r = {};
  for (let t of e) for (let i in t) i.startsWith("on") && typeof t[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(t[i])) : n[i] = t[i];
  if (n.disabled || n["aria-disabled"]) return Object.assign(n, Object.fromEntries(Object.keys(r).map((t) => [t, void 0])));
  for (let t in r) Object.assign(n, { [t](i, ...a) {
    let o = r[t];
    for (let s of o) {
      if (i instanceof Event && i.defaultPrevented) return;
      s(i, ...a);
    }
  } });
  return n;
}
function xv(e) {
  let n = Object.assign({}, e);
  for (let r in n) n[r] === void 0 && delete n[r];
  return n;
}
function Ca(e, n = []) {
  let r = Object.assign({}, e);
  for (let t of n) t in r && delete r[t];
  return r;
}
function $v(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Ht = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ht || {});
let tn = ae({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: r }) {
  return () => {
    var t;
    let { features: i, ...a } = e, o = { "aria-hidden": (i & 2) === 2 ? !0 : (t = a["aria-hidden"]) != null ? t : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return He({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: n, name: "Hidden" });
  };
} }), ss = Symbol("Context");
var Ue = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ue || {});
function kv() {
  return kn() !== null;
}
function kn() {
  return ve(ss, null);
}
function La(e) {
  fe(ss, e);
}
var Ye = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ye || {});
function Sv(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let on = [];
Sv(() => {
  function e(n) {
    n.target instanceof HTMLElement && n.target !== document.body && on[0] !== n.target && (on.unshift(n.target), on = on.filter((r) => r != null && r.isConnected), on.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Mv(e) {
  throw new Error("Unexpected object: " + e);
}
var vt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(vt || {});
function Dv(e, n) {
  let r = n.resolveItems();
  if (r.length <= 0) return null;
  let t = n.resolveActiveIndex(), i = t ?? -1;
  switch (e.focus) {
    case 0: {
      for (let a = 0; a < r.length; ++a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 1: {
      i === -1 && (i = r.length);
      for (let a = i - 1; a >= 0; --a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 2: {
      for (let a = i + 1; a < r.length; ++a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 3: {
      for (let a = r.length - 1; a >= 0; --a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 4: {
      for (let a = 0; a < r.length; ++a) if (n.resolveId(r[a], a, r) === e.id) return a;
      return t;
    }
    case 5:
      return null;
    default:
      Mv(e);
  }
}
function Ev(e) {
  var n, r;
  let t = (n = e == null ? void 0 : e.form) != null ? n : e.closest("form");
  if (t) {
    for (let i of t.elements) if (i !== e && (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image")) {
      i.click();
      return;
    }
    (r = t.requestSubmit) == null || r.call(t);
  }
}
function Ra(e, n, r, t) {
  Yn.isServer || ge((i) => {
    e = e ?? window, e.addEventListener(n, r, t), i(() => e.removeEventListener(n, r, t));
  });
}
var mt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(mt || {});
function Ia() {
  let e = F(0);
  return as("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function ls(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let t = re(r);
    t instanceof HTMLElement && n.add(t);
  }
  return n;
}
var us = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(us || {});
let Dn = Object.assign(ae({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: F(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null);
  t({ el: i, $el: i });
  let a = j(() => Mt(i)), o = F(!1);
  he(() => o.value = !0), Se(() => o.value = !1), Tv({ ownerDocument: a }, j(() => o.value && !!(e.features & 16)));
  let s = Pv({ ownerDocument: a, container: i, initialFocus: j(() => e.initialFocus) }, j(() => o.value && !!(e.features & 2)));
  Ov({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, j(() => o.value && !!(e.features & 8)));
  let l = Ia();
  function c(h) {
    let p = re(i);
    p && ((m) => m())(() => {
      rt(l.value, { [mt.Forwards]: () => {
        xt(p, Xe.First, { skipElements: [h.relatedTarget] });
      }, [mt.Backwards]: () => {
        xt(p, Xe.Last, { skipElements: [h.relatedTarget] });
      } });
    });
  }
  let d = F(!1);
  function f(h) {
    h.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function u(h) {
    if (!o.value) return;
    let p = ls(e.containers);
    re(i) instanceof HTMLElement && p.add(re(i));
    let m = h.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (cs(p, m) || (d.value ? xt(re(i), rt(l.value, { [mt.Forwards]: () => Xe.Next, [mt.Backwards]: () => Xe.Previous }) | Xe.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && Qt(h.target)));
  }
  return () => {
    let h = {}, p = { ref: i, onKeydown: f, onFocusout: u }, { features: m, initialFocus: v, containers: g, ...b } = e;
    return oe(se, [!!(m & 4) && oe(tn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Ht.Focusable }), He({ ourProps: p, theirProps: { ...n, ...b }, slot: h, attrs: n, slots: r, name: "FocusTrap" }), !!(m & 4) && oe(tn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Ht.Focusable })]);
  };
} }), { features: us });
function Av(e) {
  let n = F(on.slice());
  return Me([e], ([r], [t]) => {
    t === !0 && r === !1 ? Ta(() => {
      n.value.splice(0);
    }) : t === !1 && r === !0 && (n.value = on.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n.value.find((t) => t != null && t.isConnected)) != null ? r : null;
  };
}
function Tv({ ownerDocument: e }, n) {
  let r = Av(n);
  he(() => {
    ge(() => {
      var t, i;
      n.value || ((t = e.value) == null ? void 0 : t.activeElement) === ((i = e.value) == null ? void 0 : i.body) && Qt(r());
    }, { flush: "post" });
  }), Se(() => {
    n.value && Qt(r());
  });
}
function Pv({ ownerDocument: e, container: n, initialFocus: r }, t) {
  let i = F(null), a = F(!1);
  return he(() => a.value = !0), Se(() => a.value = !1), he(() => {
    Me([n, r, t], (o, s) => {
      if (o.every((c, d) => (s == null ? void 0 : s[d]) === c) || !t.value) return;
      let l = re(n);
      l && Ta(() => {
        var c, d;
        if (!a.value) return;
        let f = re(r), u = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === u) {
            i.value = u;
            return;
          }
        } else if (l.contains(u)) {
          i.value = u;
          return;
        }
        f ? Qt(f) : xt(l, Xe.First | Xe.NoScroll) === On.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Ov({ ownerDocument: e, container: n, containers: r, previousActiveElement: t }, i) {
  var a;
  Ra((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value) return;
    let s = ls(r);
    re(n) instanceof HTMLElement && s.add(re(n));
    let l = t.value;
    if (!l) return;
    let c = o.target;
    c && c instanceof HTMLElement ? cs(s, c) ? (t.value = c, Qt(c)) : (o.preventDefault(), o.stopPropagation(), Qt(l)) : Qt(t.value);
  }, !0);
}
function cs(e, n) {
  for (let r of e) if (r.contains(n)) return !0;
  return !1;
}
function Cv(e) {
  let n = Cn(e.getSnapshot());
  return Se(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function Lv(e, n) {
  let r = e(), t = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return t.add(i), () => t.delete(i);
  }, dispatch(i, ...a) {
    let o = n[i].call(r, ...a);
    o && (r = o, t.forEach((s) => s()));
  } };
}
function Rv() {
  let e;
  return { before({ doc: n }) {
    var r;
    let t = n.documentElement;
    e = ((r = n.defaultView) != null ? r : window).innerWidth - t.clientWidth;
  }, after({ doc: n, d: r }) {
    let t = n.documentElement, i = t.clientWidth - t.offsetWidth, a = e - i;
    r.style(t, "paddingRight", `${a}px`);
  } };
}
function Iv() {
  return rs() ? { before({ doc: e, d: n, meta: r }) {
    function t(i) {
      return r.containers.flatMap((a) => a()).some((a) => a.contains(i));
    }
    n.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Fn();
        s.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => s.dispose()));
      }
      let a = (i = window.scrollY) != null ? i : window.pageYOffset, o = null;
      n.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let l = s.target.closest("a");
          if (!l) return;
          let { hash: c } = new URL(l.href), d = e.querySelector(c);
          d && !t(d) && (o = d);
        } catch {
        }
      }, !0), n.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (t(s.target)) {
          let l = s.target;
          for (; l.parentElement && t(l.parentElement); ) l = l.parentElement;
          n.style(l, "overscrollBehavior", "contain");
        } else n.style(s.target, "touchAction", "none");
      }), n.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (t(s.target)) {
            let l = s.target;
            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); ) l = l.parentElement;
            l.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), n.add(() => {
        var s;
        let l = (s = window.scrollY) != null ? s : window.pageYOffset;
        a !== l && window.scrollTo(0, a), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
      });
    });
  } } : {};
}
function zv() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function Fv(e) {
  let n = {};
  for (let r of e) Object.assign(n, r(n));
  return n;
}
let ln = Lv(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var r;
  let t = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Fn(), meta: /* @__PURE__ */ new Set() };
  return t.count++, t.meta.add(n), this.set(e, t), this;
}, POP(e, n) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: r }) {
  let t = { doc: e, d: n, meta: Fv(r) }, i = [Iv(), Rv(), zv()];
  i.forEach(({ before: a }) => a == null ? void 0 : a(t)), i.forEach(({ after: a }) => a == null ? void 0 : a(t));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ln.subscribe(() => {
  let e = ln.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [r] of e) n.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let t = n.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !t || !i && t) && ln.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && ln.dispatch("TEARDOWN", r);
  }
});
function Yv(e, n, r) {
  let t = Cv(ln), i = j(() => {
    let a = e.value ? t.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return Me([e, n], ([a, o], [s], l) => {
    if (!a || !o) return;
    ln.dispatch("PUSH", a, r);
    let c = !1;
    l(() => {
      c || (ln.dispatch("POP", s ?? a, r), c = !0);
    });
  }, { immediate: !0 }), i;
}
let jr = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new Map();
function go(e, n = F(!0)) {
  ge((r) => {
    var t;
    if (!n.value) return;
    let i = re(e);
    if (!i) return;
    r(function() {
      var o;
      if (!i) return;
      let s = (o = En.get(i)) != null ? o : 1;
      if (s === 1 ? En.delete(i) : En.set(i, s - 1), s !== 1) return;
      let l = jr.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, jr.delete(i));
    });
    let a = (t = En.get(i)) != null ? t : 0;
    En.set(i, a + 1), a === 0 && (jr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
function ds({ defaultContainers: e = [], portals: n, mainTreeNodeRef: r } = {}) {
  let t = F(null), i = Mt(t);
  function a() {
    var o, s, l;
    let c = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? c.push(d) : "value" in d && d.value instanceof HTMLElement && c.push(d.value));
    if (n != null && n.value) for (let d of n.value) c.push(d);
    for (let d of (o = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? o : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(re(t)) || d.contains((l = (s = re(t)) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || c.some((f) => d.contains(f)) || c.push(d));
    return c;
  }
  return { resolveContainers: a, contains(o) {
    return a().some((s) => s.contains(o));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return r != null ? null : oe(tn, { features: Ht.Hidden, ref: t });
  } };
}
function jv() {
  let e = F(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return oe(tn, { features: Ht.Hidden, ref: e });
  } };
}
let fs = Symbol("ForcePortalRootContext");
function Bv() {
  return ve(fs, !1);
}
let ra = ae({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: r }) {
  return fe(fs, e.force), () => {
    let { force: t, ...i } = e;
    return He({ theirProps: i, ourProps: {}, slot: {}, slots: n, attrs: r, name: "ForcePortalRoot" });
  };
} }), hs = Symbol("StackContext");
var aa = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(aa || {});
function Vv() {
  return ve(hs, () => {
  });
}
function Nv({ type: e, enabled: n, element: r, onUpdate: t }) {
  let i = Vv();
  function a(...o) {
    t == null || t(...o), i(...o);
  }
  he(() => {
    Me(n, (o, s) => {
      o ? a(0, e, r) : s === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), Se(() => {
    n.value && a(1, e, r);
  }), fe(hs, a);
}
let ps = Symbol("DescriptionContext");
function Hv() {
  let e = ve(ps, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function vs({ slot: e = F({}), name: n = "Description", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return fe(ps, { register: i, slot: e, name: n, props: r }), j(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
ae({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-description-${Qe()}`, a = Hv();
  return he(() => Se(a.register(i))), () => {
    let { name: o = "Description", slot: s = F({}), props: l = {} } = a, { ...c } = e, d = { ...Object.entries(l).reduce((f, [u, h]) => Object.assign(f, { [u]: te(h) }), {}), id: i };
    return He({ ourProps: d, theirProps: c, slot: s.value, attrs: n, slots: r, name: o });
  };
} });
function Wv(e) {
  let n = Mt(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = n.getElementById("headlessui-portal-root");
  if (r) return r;
  let t = n.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(t);
}
const oa = /* @__PURE__ */ new WeakMap();
function Uv(e) {
  var n;
  return (n = oa.get(e)) != null ? n : 0;
}
function yo(e, n) {
  let r = n(Uv(e));
  return r <= 0 ? oa.delete(e) : oa.set(e, r), r;
}
let ms = ae({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = j(() => Mt(t)), a = Bv(), o = ve(ys, null), s = F(a === !0 || o == null ? Wv(t.value) : o.resolveTarget());
  s.value && yo(s.value, (u) => u + 1);
  let l = F(!1);
  he(() => {
    l.value = !0;
  }), ge(() => {
    a || o != null && (s.value = o.resolveTarget());
  });
  let c = ve(ia, null), d = !1, f = ha();
  return Me(t, () => {
    if (d || !c) return;
    let u = re(t);
    u && (Se(c.register(u), f), d = !0);
  }), Se(() => {
    var u, h;
    let p = (u = i.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    !p || s.value !== p || yo(s.value, (m) => m - 1) || s.value.children.length > 0 || (h = s.value.parentElement) == null || h.removeChild(s.value);
  }), () => {
    if (!l.value || s.value === null) return null;
    let u = { ref: t, "data-headlessui-portal": "" };
    return oe(ur, { to: s.value }, He({ ourProps: u, theirProps: e, slot: {}, attrs: r, slots: n, name: "Portal" }));
  };
} }), ia = Symbol("PortalParentContext");
function gs() {
  let e = ve(ia, null), n = F([]);
  function r(a) {
    return n.value.push(a), e && e.register(a), () => t(a);
  }
  function t(a) {
    let o = n.value.indexOf(a);
    o !== -1 && n.value.splice(o, 1), e && e.unregister(a);
  }
  let i = { register: r, unregister: t, portals: n };
  return [n, ae({ name: "PortalWrapper", setup(a, { slots: o }) {
    return fe(ia, i), () => {
      var s;
      return (s = o.default) == null ? void 0 : s.call(o);
    };
  } })];
}
let ys = Symbol("PortalGroupContext"), _v = ae({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: r }) {
  let t = xn({ resolveTarget() {
    return e.target;
  } });
  return fe(ys, t), () => {
    let { target: i, ...a } = e;
    return He({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: r, name: "PortalGroup" });
  };
} });
var qv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(qv || {});
let sa = Symbol("DialogContext");
function Bn(e) {
  let n = ve(sa, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Bn), r;
  }
  return n;
}
let rr = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
ae({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: rr }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a, o;
  let s = (a = e.id) != null ? a : `headlessui-dialog-${Qe()}`, l = F(!1);
  he(() => {
    l.value = !0;
  });
  let c = !1, d = j(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0, console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), f = F(0), u = kn(), h = j(() => e.open === rr && u !== null ? (u.value & Ue.Open) === Ue.Open : e.open), p = F(null), m = j(() => Mt(p));
  if (i({ el: p, $el: p }), !(e.open !== rr || u !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof h.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value === rr ? void 0 : e.open}`);
  let v = j(() => l.value && h.value ? 0 : 1), g = j(() => v.value === 0), b = j(() => f.value > 1), k = ve(sa, null) !== null, [P, $] = gs(), { resolveContainers: S, mainTreeNodeRef: w, MainTreeNode: x } = ds({ portals: P, defaultContainers: [j(() => {
    var z;
    return (z = R.panelRef.value) != null ? z : p.value;
  })] }), I = j(() => b.value ? "parent" : "leaf"), O = j(() => u !== null ? (u.value & Ue.Closing) === Ue.Closing : !1), C = j(() => k || O.value ? !1 : g.value), Z = j(() => {
    var z, _, K;
    return (K = Array.from((_ = (z = m.value) == null ? void 0 : z.querySelectorAll("body > *")) != null ? _ : []).find((ee) => ee.id === "headlessui-portal-root" ? !1 : ee.contains(re(w)) && ee instanceof HTMLElement)) != null ? K : null;
  });
  go(Z, C);
  let Y = j(() => b.value ? !0 : g.value), y = j(() => {
    var z, _, K;
    return (K = Array.from((_ = (z = m.value) == null ? void 0 : z.querySelectorAll("[data-headlessui-portal]")) != null ? _ : []).find((ee) => ee.contains(re(w)) && ee instanceof HTMLElement)) != null ? K : null;
  });
  go(y, Y), Nv({ type: "Dialog", enabled: j(() => v.value === 0), element: p, onUpdate: (z, _) => {
    if (_ === "Dialog") return rt(z, { [aa.Add]: () => f.value += 1, [aa.Remove]: () => f.value -= 1 });
  } });
  let A = vs({ name: "DialogDescription", slot: j(() => ({ open: h.value })) }), E = F(null), R = { titleId: E, panelRef: F(null), dialogState: v, setTitleId(z) {
    E.value !== z && (E.value = z);
  }, close() {
    n("close", !1);
  } };
  fe(sa, R);
  let T = j(() => !(!g.value || b.value));
  Pa(S, (z, _) => {
    z.preventDefault(), R.close(), Le(() => _ == null ? void 0 : _.focus());
  }, T);
  let B = j(() => !(b.value || v.value !== 0));
  Ra((o = m.value) == null ? void 0 : o.defaultView, "keydown", (z) => {
    B.value && (z.defaultPrevented || z.key === Ye.Escape && (z.preventDefault(), z.stopPropagation(), R.close()));
  });
  let N = j(() => !(O.value || v.value !== 0 || k));
  return Yv(m, N, (z) => {
    var _;
    return { containers: [...(_ = z.containers) != null ? _ : [], S] };
  }), ge((z) => {
    if (v.value !== 0) return;
    let _ = re(p);
    if (!_) return;
    let K = new ResizeObserver((ee) => {
      for (let ce of ee) {
        let xe = ce.target.getBoundingClientRect();
        xe.x === 0 && xe.y === 0 && xe.width === 0 && xe.height === 0 && R.close();
      }
    });
    K.observe(_), z(() => K.disconnect());
  }), () => {
    let { open: z, initialFocus: _, ...K } = e, ee = { ...r, ref: p, id: s, role: d.value, "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": A.value }, ce = { open: v.value === 0 };
    return oe(ra, { force: !0 }, () => [oe(ms, () => oe(_v, { target: p.value }, () => oe(ra, { force: !1 }, () => oe(Dn, { initialFocus: _, containers: S, features: g.value ? rt(I.value, { parent: Dn.features.RestoreFocus, leaf: Dn.features.All & ~Dn.features.FocusLock }) : Dn.features.None }, () => oe($, {}, () => He({ ourProps: ee, theirProps: { ...K, ...r }, slot: ce, attrs: r, slots: t, visible: v.value === 0, features: Rt.RenderStrategy | Rt.Static, name: "Dialog" })))))), oe(x)]);
  };
} });
ae({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-overlay-${Qe()}`, a = Bn("DialogOverlay");
  function o(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), a.close());
  }
  return () => {
    let { ...s } = e;
    return He({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: s, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogOverlay" });
  };
} });
ae({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-backdrop-${Qe()}`, o = Bn("DialogBackdrop"), s = F(null);
  return t({ el: s, $el: s }), he(() => {
    if (o.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...l } = e, c = { id: a, ref: s, "aria-hidden": !0 };
    return oe(ra, { force: !0 }, () => oe(ms, () => He({ ourProps: c, theirProps: { ...n, ...l }, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogBackdrop" })));
  };
} });
ae({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-panel-${Qe()}`, o = Bn("DialogPanel");
  t({ el: o.panelRef, $el: o.panelRef });
  function s(l) {
    l.stopPropagation();
  }
  return () => {
    let { ...l } = e, c = { id: a, ref: o.panelRef, onClick: s };
    return He({ ourProps: c, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogPanel" });
  };
} });
ae({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-title-${Qe()}`, a = Bn("DialogTitle");
  return he(() => {
    a.setTitleId(i), Se(() => a.setTitleId(null));
  }), () => {
    let { ...o } = e;
    return He({ ourProps: { id: i }, theirProps: o, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogTitle" });
  };
} });
let bo = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function wo(e) {
  var n, r;
  let t = (n = e.innerText) != null ? n : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return t;
  let a = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), a = !0;
  let o = a ? (r = i.innerText) != null ? r : "" : t;
  return bo.test(o) && (o = o.replace(bo, "")), o;
}
function Zv(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string") return n.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let t = r.split(" ").map((i) => {
      let a = document.getElementById(i);
      if (a) {
        let o = a.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : wo(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (t.length > 0) return t.join(", ");
  }
  return wo(e).trim();
}
function Kv(e) {
  let n = F(""), r = F("");
  return () => {
    let t = re(e);
    if (!t) return "";
    let i = t.innerText;
    if (n.value === i) return r.value;
    let a = Zv(t).trim().toLowerCase();
    return n.value = i, r.value = a, a;
  };
}
var Gv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Gv || {}), Xv = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Xv || {});
function Jv(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let bs = Symbol("MenuContext");
function xr(e) {
  let n = ve(bs, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, xr), r;
  }
  return n;
}
ae({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(1), i = F(null), a = F(null), o = F([]), s = F(""), l = F(null), c = F(1);
  function d(u = (h) => h) {
    let h = l.value !== null ? o.value[l.value] : null, p = ns(u(o.value.slice()), (v) => re(v.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let f = { menuState: t, buttonRef: i, itemsRef: a, items: o, searchQuery: s, activeItemIndex: l, activationTrigger: c, closeMenu: () => {
    t.value = 1, l.value = null;
  }, openMenu: () => t.value = 0, goToItem(u, h, p) {
    let m = d(), v = Dv(u === vt.Specific ? { focus: vt.Specific, id: h } : { focus: u }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    s.value = "", l.value = v, c.value = p ?? 1, o.value = m.items;
  }, search(u) {
    let h = s.value !== "" ? 0 : 1;
    s.value += u.toLowerCase();
    let p = (l.value !== null ? o.value.slice(l.value + h).concat(o.value.slice(0, l.value + h)) : o.value).find((v) => v.dataRef.textValue.startsWith(s.value) && !v.dataRef.disabled), m = p ? o.value.indexOf(p) : -1;
    m === -1 || m === l.value || (l.value = m, c.value = 1);
  }, clearSearch() {
    s.value = "";
  }, registerItem(u, h) {
    let p = d((m) => [...m, { id: u, dataRef: h }]);
    o.value = p.items, l.value = p.activeItemIndex, c.value = 1;
  }, unregisterItem(u) {
    let h = d((p) => {
      let m = p.findIndex((v) => v.id === u);
      return m !== -1 && p.splice(m, 1), p;
    });
    o.value = h.items, l.value = h.activeItemIndex, c.value = 1;
  } };
  return Pa([i, a], (u, h) => {
    var p;
    f.closeMenu(), wr(h, br.Loose) || (u.preventDefault(), (p = re(i)) == null || p.focus());
  }, j(() => t.value === 0)), fe(bs, f), La(j(() => rt(t.value, { 0: Ue.Open, 1: Ue.Closed }))), () => {
    let u = { open: t.value === 0, close: f.closeMenu };
    return He({ ourProps: {}, theirProps: e, slot: u, slots: n, attrs: r, name: "Menu" });
  };
} });
ae({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-button-${Qe()}`, o = xr("MenuButton");
  t({ el: o.buttonRef, $el: o.buttonRef });
  function s(f) {
    switch (f.key) {
      case Ye.Space:
      case Ye.Enter:
      case Ye.ArrowDown:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Le(() => {
          var u;
          (u = re(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(vt.First);
        });
        break;
      case Ye.ArrowUp:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Le(() => {
          var u;
          (u = re(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(vt.Last);
        });
        break;
    }
  }
  function l(f) {
    switch (f.key) {
      case Ye.Space:
        f.preventDefault();
        break;
    }
  }
  function c(f) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Le(() => {
      var u;
      return (u = re(o.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), o.openMenu(), Jv(() => {
      var u;
      return (u = re(o.itemsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let d = Oa(j(() => ({ as: e.as, type: n.type })), o.buttonRef);
  return () => {
    var f;
    let u = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: a, type: d.value, "aria-haspopup": "menu", "aria-controls": (f = re(o.itemsRef)) == null ? void 0 : f.id, "aria-expanded": o.menuState.value === 0, onKeydown: s, onKeyup: l, onClick: c };
    return He({ ourProps: p, theirProps: h, slot: u, attrs: n, slots: r, name: "MenuButton" });
  };
} });
ae({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-items-${Qe()}`, o = xr("MenuItems"), s = F(null);
  t({ el: o.itemsRef, $el: o.itemsRef }), wv({ container: j(() => re(o.itemsRef)), enabled: j(() => o.menuState.value === 0), accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function l(u) {
    var h;
    switch (s.value && clearTimeout(s.value), u.key) {
      case Ye.Space:
        if (o.searchQuery.value !== "") return u.preventDefault(), u.stopPropagation(), o.search(u.key);
      case Ye.Enter:
        if (u.preventDefault(), u.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = re(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), ts(re(o.buttonRef));
        break;
      case Ye.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(vt.Next);
      case Ye.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(vt.Previous);
      case Ye.Home:
      case Ye.PageUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(vt.First);
      case Ye.End:
      case Ye.PageDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(vt.Last);
      case Ye.Escape:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Le(() => {
          var p;
          return (p = re(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case Ye.Tab:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Le(() => mv(re(o.buttonRef), u.shiftKey ? Xe.Previous : Xe.Next));
        break;
      default:
        u.key.length === 1 && (o.search(u.key), s.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function c(u) {
    switch (u.key) {
      case Ye.Space:
        u.preventDefault();
        break;
    }
  }
  let d = kn(), f = j(() => d !== null ? (d.value & Ue.Open) === Ue.Open : o.menuState.value === 0);
  return () => {
    var u, h;
    let p = { open: o.menuState.value === 0 }, { ...m } = e, v = { "aria-activedescendant": o.activeItemIndex.value === null || (u = o.items.value[o.activeItemIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (h = re(o.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: l, onKeyup: c, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return He({ ourProps: v, theirProps: m, slot: p, attrs: n, slots: r, features: Rt.RenderStrategy | Rt.Static, visible: f.value, name: "MenuItems" });
  };
} });
ae({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-item-${Qe()}`, o = xr("MenuItem"), s = F(null);
  t({ el: s, $el: s });
  let l = j(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === a : !1), c = Kv(s), d = j(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: s }));
  he(() => o.registerItem(a, d)), Se(() => o.unregisterItem(a)), ge(() => {
    o.menuState.value === 0 && l.value && o.activationTrigger.value !== 0 && Le(() => {
      var g, b;
      return (b = (g = re(s)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : b.call(g, { block: "nearest" });
    });
  });
  function f(g) {
    if (e.disabled) return g.preventDefault();
    o.closeMenu(), ts(re(o.buttonRef));
  }
  function u() {
    if (e.disabled) return o.goToItem(vt.Nothing);
    o.goToItem(vt.Specific, a);
  }
  let h = bv();
  function p(g) {
    h.update(g);
  }
  function m(g) {
    h.wasMoved(g) && (e.disabled || l.value || o.goToItem(vt.Specific, a, 0));
  }
  function v(g) {
    h.wasMoved(g) && (e.disabled || l.value && o.goToItem(vt.Nothing));
  }
  return () => {
    let { disabled: g, ...b } = e, k = { active: l.value, disabled: g, close: o.closeMenu };
    return He({ ourProps: { id: a, ref: s, role: "menuitem", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, onClick: f, onFocus: u, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v }, theirProps: { ...r, ...b }, slot: k, attrs: r, slots: n, name: "MenuItem" });
  };
} });
var Qv = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Qv || {});
let ws = Symbol("PopoverContext");
function $r(e) {
  let n = ve(ws, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <${tm.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, $r), r;
  }
  return n;
}
let xs = Symbol("PopoverGroupContext");
function $s() {
  return ve(xs, null);
}
let ks = Symbol("PopoverPanelContext");
function em() {
  return ve(ks, null);
}
let tm = ae({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = F(null);
  t({ el: a, $el: a });
  let o = F(1), s = F(null), l = F(null), c = F(null), d = F(null), f = j(() => Mt(a)), u = j(() => {
    var $, S;
    if (!re(s) || !re(d)) return !1;
    for (let Y of document.querySelectorAll("body > *")) if (Number(Y == null ? void 0 : Y.contains(re(s))) ^ Number(Y == null ? void 0 : Y.contains(re(d)))) return !0;
    let w = jn(), x = w.indexOf(re(s)), I = (x + w.length - 1) % w.length, O = (x + 1) % w.length, C = w[I], Z = w[O];
    return !(($ = re(d)) != null && $.contains(C)) && !((S = re(d)) != null && S.contains(Z));
  }), h = { popoverState: o, buttonId: F(null), panelId: F(null), panel: d, button: s, isPortalled: u, beforePanelSentinel: l, afterPanelSentinel: c, togglePopover() {
    o.value = rt(o.value, { 0: 1, 1: 0 });
  }, closePopover() {
    o.value !== 1 && (o.value = 1);
  }, close($) {
    h.closePopover();
    let S = $ ? $ instanceof HTMLElement ? $ : $.value instanceof HTMLElement ? re($) : re(h.button) : re(h.button);
    S == null || S.focus();
  } };
  fe(ws, h), La(j(() => rt(o.value, { 0: Ue.Open, 1: Ue.Closed })));
  let p = { buttonId: h.buttonId, panelId: h.panelId, close() {
    h.closePopover();
  } }, m = $s(), v = m == null ? void 0 : m.registerPopover, [g, b] = gs(), k = ds({ mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef, portals: g, defaultContainers: [s, d] });
  function P() {
    var $, S, w, x;
    return (x = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null ? x : (($ = f.value) == null ? void 0 : $.activeElement) && (((S = re(s)) == null ? void 0 : S.contains(f.value.activeElement)) || ((w = re(d)) == null ? void 0 : w.contains(f.value.activeElement)));
  }
  return ge(() => v == null ? void 0 : v(p)), Ra((i = f.value) == null ? void 0 : i.defaultView, "focus", ($) => {
    var S, w;
    $.target !== window && $.target instanceof HTMLElement && o.value === 0 && (P() || s && d && (k.contains($.target) || (S = re(h.beforePanelSentinel)) != null && S.contains($.target) || (w = re(h.afterPanelSentinel)) != null && w.contains($.target) || h.closePopover()));
  }, !0), Pa(k.resolveContainers, ($, S) => {
    var w;
    h.closePopover(), wr(S, br.Loose) || ($.preventDefault(), (w = re(s)) == null || w.focus());
  }, j(() => o.value === 0)), () => {
    let $ = { open: o.value === 0, close: h.close };
    return oe(se, [oe(b, {}, () => He({ theirProps: { ...e, ...r }, ourProps: { ref: a }, slot: $, slots: n, attrs: r, name: "Popover" })), oe(k.MainTreeNode)]);
  };
} });
ae({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-button-${Qe()}`, o = $r("PopoverButton"), s = j(() => Mt(o.button));
  t({ el: o.button, $el: o.button }), he(() => {
    o.buttonId.value = a;
  }), Se(() => {
    o.buttonId.value = null;
  });
  let l = $s(), c = l == null ? void 0 : l.closeOthers, d = em(), f = j(() => d === null ? !1 : d.value === o.panelId.value), u = F(null), h = `headlessui-focus-sentinel-${Qe()}`;
  f.value || ge(() => {
    o.button.value = re(u);
  });
  let p = Oa(j(() => ({ as: e.as, type: n.type })), u);
  function m($) {
    var S, w, x, I, O;
    if (f.value) {
      if (o.popoverState.value === 1) return;
      switch ($.key) {
        case Ye.Space:
        case Ye.Enter:
          $.preventDefault(), (w = (S = $.target).click) == null || w.call(S), o.closePopover(), (x = re(o.button)) == null || x.focus();
          break;
      }
    } else switch ($.key) {
      case Ye.Space:
      case Ye.Enter:
        $.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover();
        break;
      case Ye.Escape:
        if (o.popoverState.value !== 0) return c == null ? void 0 : c(o.buttonId.value);
        if (!re(o.button) || (I = s.value) != null && I.activeElement && !((O = re(o.button)) != null && O.contains(s.value.activeElement))) return;
        $.preventDefault(), $.stopPropagation(), o.closePopover();
        break;
    }
  }
  function v($) {
    f.value || $.key === Ye.Space && $.preventDefault();
  }
  function g($) {
    var S, w;
    e.disabled || (f.value ? (o.closePopover(), (S = re(o.button)) == null || S.focus()) : ($.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover(), (w = re(o.button)) == null || w.focus()));
  }
  function b($) {
    $.preventDefault(), $.stopPropagation();
  }
  let k = Ia();
  function P() {
    let $ = re(o.panel);
    if (!$) return;
    function S() {
      rt(k.value, { [mt.Forwards]: () => xt($, Xe.First), [mt.Backwards]: () => xt($, Xe.Last) }) === On.Error && xt(jn().filter((w) => w.dataset.headlessuiFocusGuard !== "true"), rt(k.value, { [mt.Forwards]: Xe.Next, [mt.Backwards]: Xe.Previous }), { relativeTo: re(o.button) });
    }
    S();
  }
  return () => {
    let $ = o.popoverState.value === 0, S = { open: $ }, { ...w } = e, x = f.value ? { ref: u, type: p.value, onKeydown: m, onClick: g } : { ref: u, id: a, type: p.value, "aria-expanded": o.popoverState.value === 0, "aria-controls": re(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: v, onClick: g, onMousedown: b };
    return oe(se, [He({ ourProps: x, theirProps: { ...n, ...w }, slot: S, attrs: n, slots: r, name: "PopoverButton" }), $ && !f.value && o.isPortalled.value && oe(tn, { id: h, features: Ht.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: P })]);
  };
} });
ae({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: r }) {
  let t = $r("PopoverOverlay"), i = `headlessui-popover-overlay-${Qe()}`, a = kn(), o = j(() => a !== null ? (a.value & Ue.Open) === Ue.Open : t.popoverState.value === 0);
  function s() {
    t.closePopover();
  }
  return () => {
    let l = { open: t.popoverState.value === 0 };
    return He({ ourProps: { id: i, "aria-hidden": !0, onClick: s }, theirProps: e, slot: l, attrs: n, slots: r, features: Rt.RenderStrategy | Rt.Static, visible: o.value, name: "PopoverOverlay" });
  };
} });
ae({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-panel-${Qe()}`, { focus: o } = e, s = $r("PopoverPanel"), l = j(() => Mt(s.panel)), c = `headlessui-focus-sentinel-before-${Qe()}`, d = `headlessui-focus-sentinel-after-${Qe()}`;
  t({ el: s.panel, $el: s.panel }), he(() => {
    s.panelId.value = a;
  }), Se(() => {
    s.panelId.value = null;
  }), fe(ks, s.panelId), ge(() => {
    var b, k;
    if (!o || s.popoverState.value !== 0 || !s.panel) return;
    let P = (b = l.value) == null ? void 0 : b.activeElement;
    (k = re(s.panel)) != null && k.contains(P) || xt(re(s.panel), Xe.First);
  });
  let f = kn(), u = j(() => f !== null ? (f.value & Ue.Open) === Ue.Open : s.popoverState.value === 0);
  function h(b) {
    var k, P;
    switch (b.key) {
      case Ye.Escape:
        if (s.popoverState.value !== 0 || !re(s.panel) || l.value && !((k = re(s.panel)) != null && k.contains(l.value.activeElement))) return;
        b.preventDefault(), b.stopPropagation(), s.closePopover(), (P = re(s.button)) == null || P.focus();
        break;
    }
  }
  function p(b) {
    var k, P, $, S, w;
    let x = b.relatedTarget;
    x && re(s.panel) && ((k = re(s.panel)) != null && k.contains(x) || (s.closePopover(), (($ = (P = re(s.beforePanelSentinel)) == null ? void 0 : P.contains) != null && $.call(P, x) || (w = (S = re(s.afterPanelSentinel)) == null ? void 0 : S.contains) != null && w.call(S, x)) && x.focus({ preventScroll: !0 })));
  }
  let m = Ia();
  function v() {
    let b = re(s.panel);
    if (!b) return;
    function k() {
      rt(m.value, { [mt.Forwards]: () => {
        var P;
        xt(b, Xe.First) === On.Error && ((P = re(s.afterPanelSentinel)) == null || P.focus());
      }, [mt.Backwards]: () => {
        var P;
        (P = re(s.button)) == null || P.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function g() {
    let b = re(s.panel);
    if (!b) return;
    function k() {
      rt(m.value, { [mt.Forwards]: () => {
        let P = re(s.button), $ = re(s.panel);
        if (!P) return;
        let S = jn(), w = S.indexOf(P), x = S.slice(0, w + 1), I = [...S.slice(w + 1), ...x];
        for (let O of I.slice()) if (O.dataset.headlessuiFocusGuard === "true" || $ != null && $.contains(O)) {
          let C = I.indexOf(O);
          C !== -1 && I.splice(C, 1);
        }
        xt(I, Xe.First, { sorted: !1 });
      }, [mt.Backwards]: () => {
        var P;
        xt(b, Xe.Previous) === On.Error && ((P = re(s.button)) == null || P.focus());
      } });
    }
    k();
  }
  return () => {
    let b = { open: s.popoverState.value === 0, close: s.close }, { focus: k, ...P } = e, $ = { ref: s.panel, id: a, onKeydown: h, onFocusout: o && s.popoverState.value === 0 ? p : void 0, tabIndex: -1 };
    return He({ ourProps: $, theirProps: { ...n, ...P }, attrs: n, slot: b, slots: { ...r, default: (...S) => {
      var w;
      return [oe(se, [u.value && s.isPortalled.value && oe(tn, { id: c, ref: s.beforePanelSentinel, features: Ht.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v }), (w = r.default) == null ? void 0 : w.call(r, ...S), u.value && s.isPortalled.value && oe(tn, { id: d, ref: s.afterPanelSentinel, features: Ht.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: Rt.RenderStrategy | Rt.Static, visible: u.value, name: "PopoverPanel" });
  };
} });
ae({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null), a = Cn([]), o = j(() => Mt(i)), s = jv();
  t({ el: i, $el: i });
  function l(u) {
    let h = a.value.indexOf(u);
    h !== -1 && a.value.splice(h, 1);
  }
  function c(u) {
    return a.value.push(u), () => {
      l(u);
    };
  }
  function d() {
    var u;
    let h = o.value;
    if (!h) return !1;
    let p = h.activeElement;
    return (u = re(i)) != null && u.contains(p) ? !0 : a.value.some((m) => {
      var v, g;
      return ((v = h.getElementById(m.buttonId.value)) == null ? void 0 : v.contains(p)) || ((g = h.getElementById(m.panelId.value)) == null ? void 0 : g.contains(p));
    });
  }
  function f(u) {
    for (let h of a.value) h.buttonId.value !== u && h.close();
  }
  return fe(xs, { registerPopover: c, unregisterPopover: l, isFocusWithinPopoverGroup: d, closeOthers: f, mainTreeNodeRef: s.mainTreeNodeRef }), () => oe(se, [He({ ourProps: { ref: i }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: r, name: "PopoverGroup" }), oe(s.MainTreeNode)]);
} });
let Ss = Symbol("LabelContext");
function Ms() {
  let e = ve(Ss, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ms), n;
  }
  return e;
}
function nm({ slot: e = {}, name: n = "Label", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return fe(Ss, { register: i, slot: e, name: n, props: r }), j(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
ae({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-label-${Qe()}`, a = Ms();
  return he(() => Se(a.register(i))), () => {
    let { name: o = "Label", slot: s = {}, props: l = {} } = a, { passive: c, ...d } = e, f = { ...Object.entries(l).reduce((u, [h, p]) => Object.assign(u, { [h]: te(p) }), {}), id: i };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), He({ ourProps: f, theirProps: d, slot: s, attrs: r, slots: n, name: o });
  };
} });
let Ds = Symbol("GroupContext");
ae({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = nm({ name: "SwitchLabel", props: { htmlFor: j(() => {
    var o;
    return (o = t.value) == null ? void 0 : o.id;
  }), onClick(o) {
    t.value && (o.currentTarget.tagName === "LABEL" && o.preventDefault(), t.value.click(), t.value.focus({ preventScroll: !0 }));
  } } }), a = vs({ name: "SwitchDescription" });
  return fe(Ds, { switchRef: t, labelledby: i, describedby: a }), () => He({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: r, name: "SwitchGroup" });
} });
ae({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: null }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a;
  let o = (a = e.id) != null ? a : `headlessui-switch-${Qe()}`, s = ve(Ds, null), [l, c] = iv(j(() => e.modelValue), (b) => n("update:modelValue", b), j(() => e.defaultChecked));
  function d() {
    c(!l.value);
  }
  let f = F(null), u = s === null ? f : s.switchRef, h = Oa(j(() => ({ as: e.as, type: r.type })), u);
  i({ el: u, $el: u });
  function p(b) {
    b.preventDefault(), d();
  }
  function m(b) {
    b.key === Ye.Space ? (b.preventDefault(), d()) : b.key === Ye.Enter && Ev(b.currentTarget);
  }
  function v(b) {
    b.preventDefault();
  }
  let g = j(() => {
    var b, k;
    return (k = (b = re(u)) == null ? void 0 : b.closest) == null ? void 0 : k.call(b, "form");
  });
  return he(() => {
    Me([g], () => {
      if (!g.value || e.defaultChecked === void 0) return;
      function b() {
        c(e.defaultChecked);
      }
      return g.value.addEventListener("reset", b), () => {
        var k;
        (k = g.value) == null || k.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: b, value: k, form: P, tabIndex: $, ...S } = e, w = { checked: l.value }, x = { id: o, ref: u, role: "switch", type: h.value, tabIndex: $ === -1 ? 0 : $, "aria-checked": l.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: p, onKeyup: m, onKeypress: v };
    return oe(se, [b != null && l.value != null ? oe(tn, xv({ features: Ht.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: P, disabled: S.disabled, name: b, value: k })) : null, He({ ourProps: x, theirProps: { ...r, ...Ca(S, ["modelValue", "defaultChecked"]) }, slot: w, attrs: r, slots: t, name: "Switch" })]);
  };
} });
function rm(e) {
  let n = { called: !1 };
  return (...r) => {
    if (!n.called) return n.called = !0, e(...r);
  };
}
function Br(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function ar(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var la = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(la || {});
function am(e, n) {
  let r = Fn();
  if (!e) return r.dispose;
  let { transitionDuration: t, transitionDelay: i } = getComputedStyle(e), [a, o] = [t, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, d) => d - c);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => n("finished"), a + o) : n("finished"), r.add(() => n("cancelled")), r.dispose;
}
function xo(e, n, r, t, i, a) {
  let o = Fn(), s = a !== void 0 ? rm(a) : () => {
  };
  return ar(e, ...i), Br(e, ...n, ...r), o.nextFrame(() => {
    ar(e, ...r), Br(e, ...t), o.add(am(e, (l) => (ar(e, ...t, ...n), Br(e, ...i), s(l))));
  }), o.add(() => ar(e, ...n, ...r, ...t, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function rn(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let za = Symbol("TransitionContext");
var om = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(om || {});
function im() {
  return ve(za, null) !== null;
}
function sm() {
  let e = ve(za, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function lm() {
  let e = ve(Fa, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Fa = Symbol("NestingContext");
function kr(e) {
  return "children" in e ? kr(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function Es(e) {
  let n = F([]), r = F(!1);
  he(() => r.value = !0), Se(() => r.value = !1);
  function t(a, o = Gt.Hidden) {
    let s = n.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (rt(o, { [Gt.Unmount]() {
      n.value.splice(s, 1);
    }, [Gt.Hidden]() {
      n.value[s].state = "hidden";
    } }), !kr(n) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = n.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : n.value.push({ id: a, state: "visible" }), () => t(a, Gt.Unmount);
  }
  return { children: n, register: i, unregister: t };
}
let As = Rt.RenderStrategy, um = ae({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  let a = F(0);
  function o() {
    a.value |= Ue.Opening, n("beforeEnter");
  }
  function s() {
    a.value &= ~Ue.Opening, n("afterEnter");
  }
  function l() {
    a.value |= Ue.Closing, n("beforeLeave");
  }
  function c() {
    a.value &= ~Ue.Closing, n("afterLeave");
  }
  if (!im() && kv()) return () => oe(dm, { ...e, onBeforeEnter: o, onAfterEnter: s, onBeforeLeave: l, onAfterLeave: c }, t);
  let d = F(null), f = j(() => e.unmount ? Gt.Unmount : Gt.Hidden);
  i({ el: d, $el: d });
  let { show: u, appear: h } = sm(), { register: p, unregister: m } = lm(), v = F(u.value ? "visible" : "hidden"), g = { value: !0 }, b = Qe(), k = { value: !1 }, P = Es(() => {
    !k.value && v.value !== "hidden" && (v.value = "hidden", m(b), c());
  });
  he(() => {
    let Y = p(b);
    Se(Y);
  }), ge(() => {
    if (f.value === Gt.Hidden && b) {
      if (u.value && v.value !== "visible") {
        v.value = "visible";
        return;
      }
      rt(v.value, { hidden: () => m(b), visible: () => p(b) });
    }
  });
  let $ = rn(e.enter), S = rn(e.enterFrom), w = rn(e.enterTo), x = rn(e.entered), I = rn(e.leave), O = rn(e.leaveFrom), C = rn(e.leaveTo);
  he(() => {
    ge(() => {
      if (v.value === "visible") {
        let Y = re(d);
        if (Y instanceof Comment && Y.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function Z(Y) {
    let y = g.value && !h.value, A = re(d);
    !A || !(A instanceof HTMLElement) || y || (k.value = !0, u.value && o(), u.value || l(), Y(u.value ? xo(A, $, S, w, x, (E) => {
      k.value = !1, E === la.Finished && s();
    }) : xo(A, I, O, C, x, (E) => {
      k.value = !1, E === la.Finished && (kr(P) || (v.value = "hidden", m(b), c()));
    })));
  }
  return he(() => {
    Me([u], (Y, y, A) => {
      Z(A), g.value = !1;
    }, { immediate: !0 });
  }), fe(Fa, P), La(j(() => rt(v.value, { visible: Ue.Open, hidden: Ue.Closed }) | a.value)), () => {
    let { appear: Y, show: y, enter: A, enterFrom: E, enterTo: R, entered: T, leave: B, leaveFrom: N, leaveTo: z, ..._ } = e, K = { ref: d }, ee = { ..._, ...h.value && u.value && Yn.isServer ? { class: pe([r.class, _.class, ...$, ...S]) } : {} };
    return He({ theirProps: ee, ourProps: K, slot: {}, slots: t, attrs: r, features: As, visible: v.value === "visible", name: "TransitionChild" });
  };
} }), cm = um, dm = ae({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t }) {
  let i = kn(), a = j(() => e.show === null && i !== null ? (i.value & Ue.Open) === Ue.Open : e.show);
  ge(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = F(a.value ? "visible" : "hidden"), s = Es(() => {
    o.value = "hidden";
  }), l = F(!0), c = { show: a, appear: j(() => e.appear || !l.value) };
  return he(() => {
    ge(() => {
      l.value = !1, a.value ? o.value = "visible" : kr(s) || (o.value = "hidden");
    });
  }), fe(Fa, s), fe(za, c), () => {
    let d = Ca(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return He({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...t, default: () => [oe(cm, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...r, ...f, ...d }, t.default)] }, attrs: {}, features: As, visible: o.value === "visible", name: "Transition" });
  };
} });
var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fm = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(_t, function() {
    var r = 1e3, t = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", l = "hour", c = "day", d = "week", f = "month", u = "quarter", h = "year", p = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(y) {
      var A = ["th", "st", "nd", "rd"], E = y % 100;
      return "[" + y + (A[(E - 20) % 10] || A[E] || A[0]) + "]";
    } }, k = function(y, A, E) {
      var R = String(y);
      return !R || R.length >= A ? y : "" + Array(A + 1 - R.length).join(E) + y;
    }, P = { s: k, z: function(y) {
      var A = -y.utcOffset(), E = Math.abs(A), R = Math.floor(E / 60), T = E % 60;
      return (A <= 0 ? "+" : "-") + k(R, 2, "0") + ":" + k(T, 2, "0");
    }, m: function y(A, E) {
      if (A.date() < E.date()) return -y(E, A);
      var R = 12 * (E.year() - A.year()) + (E.month() - A.month()), T = A.clone().add(R, f), B = E - T < 0, N = A.clone().add(R + (B ? -1 : 1), f);
      return +(-(R + (E - T) / (B ? T - N : N - T)) || 0);
    }, a: function(y) {
      return y < 0 ? Math.ceil(y) || 0 : Math.floor(y);
    }, p: function(y) {
      return { M: f, y: h, w: d, d: c, D: p, h: l, m: s, s: o, ms: a, Q: u }[y] || String(y || "").toLowerCase().replace(/s$/, "");
    }, u: function(y) {
      return y === void 0;
    } }, $ = "en", S = {};
    S[$] = b;
    var w = "$isDayjsObject", x = function(y) {
      return y instanceof Z || !(!y || !y[w]);
    }, I = function y(A, E, R) {
      var T;
      if (!A) return $;
      if (typeof A == "string") {
        var B = A.toLowerCase();
        S[B] && (T = B), E && (S[B] = E, T = B);
        var N = A.split("-");
        if (!T && N.length > 1) return y(N[0]);
      } else {
        var z = A.name;
        S[z] = A, T = z;
      }
      return !R && T && ($ = T), T || !R && $;
    }, O = function(y, A) {
      if (x(y)) return y.clone();
      var E = typeof A == "object" ? A : {};
      return E.date = y, E.args = arguments, new Z(E);
    }, C = P;
    C.l = I, C.i = x, C.w = function(y, A) {
      return O(y, { locale: A.$L, utc: A.$u, x: A.$x, $offset: A.$offset });
    };
    var Z = function() {
      function y(E) {
        this.$L = I(E.locale, null, !0), this.parse(E), this.$x = this.$x || E.x || {}, this[w] = !0;
      }
      var A = y.prototype;
      return A.parse = function(E) {
        this.$d = function(R) {
          var T = R.date, B = R.utc;
          if (T === null) return /* @__PURE__ */ new Date(NaN);
          if (C.u(T)) return /* @__PURE__ */ new Date();
          if (T instanceof Date) return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var N = T.match(v);
            if (N) {
              var z = N[2] - 1 || 0, _ = (N[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(N[1], z, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, _)) : new Date(N[1], z, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, _);
            }
          }
          return new Date(T);
        }(E), this.init();
      }, A.init = function() {
        var E = this.$d;
        this.$y = E.getFullYear(), this.$M = E.getMonth(), this.$D = E.getDate(), this.$W = E.getDay(), this.$H = E.getHours(), this.$m = E.getMinutes(), this.$s = E.getSeconds(), this.$ms = E.getMilliseconds();
      }, A.$utils = function() {
        return C;
      }, A.isValid = function() {
        return this.$d.toString() !== m;
      }, A.isSame = function(E, R) {
        var T = O(E);
        return this.startOf(R) <= T && T <= this.endOf(R);
      }, A.isAfter = function(E, R) {
        return O(E) < this.startOf(R);
      }, A.isBefore = function(E, R) {
        return this.endOf(R) < O(E);
      }, A.$g = function(E, R, T) {
        return C.u(E) ? this[R] : this.set(T, E);
      }, A.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, A.valueOf = function() {
        return this.$d.getTime();
      }, A.startOf = function(E, R) {
        var T = this, B = !!C.u(R) || R, N = C.p(E), z = function(De, ue) {
          var we = C.w(T.$u ? Date.UTC(T.$y, ue, De) : new Date(T.$y, ue, De), T);
          return B ? we : we.endOf(c);
        }, _ = function(De, ue) {
          return C.w(T.toDate()[De].apply(T.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), T);
        }, K = this.$W, ee = this.$M, ce = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case h:
            return B ? z(1, 0) : z(31, 11);
          case f:
            return B ? z(1, ee) : z(0, ee + 1);
          case d:
            var $e = this.$locale().weekStart || 0, Be = (K < $e ? K + 7 : K) - $e;
            return z(B ? ce - Be : ce + (6 - Be), ee);
          case c:
          case p:
            return _(xe + "Hours", 0);
          case l:
            return _(xe + "Minutes", 1);
          case s:
            return _(xe + "Seconds", 2);
          case o:
            return _(xe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, A.endOf = function(E) {
        return this.startOf(E, !1);
      }, A.$set = function(E, R) {
        var T, B = C.p(E), N = "set" + (this.$u ? "UTC" : ""), z = (T = {}, T[c] = N + "Date", T[p] = N + "Date", T[f] = N + "Month", T[h] = N + "FullYear", T[l] = N + "Hours", T[s] = N + "Minutes", T[o] = N + "Seconds", T[a] = N + "Milliseconds", T)[B], _ = B === c ? this.$D + (R - this.$W) : R;
        if (B === f || B === h) {
          var K = this.clone().set(p, 1);
          K.$d[z](_), K.init(), this.$d = K.set(p, Math.min(this.$D, K.daysInMonth())).$d;
        } else z && this.$d[z](_);
        return this.init(), this;
      }, A.set = function(E, R) {
        return this.clone().$set(E, R);
      }, A.get = function(E) {
        return this[C.p(E)]();
      }, A.add = function(E, R) {
        var T, B = this;
        E = Number(E);
        var N = C.p(R), z = function(ee) {
          var ce = O(B);
          return C.w(ce.date(ce.date() + Math.round(ee * E)), B);
        };
        if (N === f) return this.set(f, this.$M + E);
        if (N === h) return this.set(h, this.$y + E);
        if (N === c) return z(1);
        if (N === d) return z(7);
        var _ = (T = {}, T[s] = t, T[l] = i, T[o] = r, T)[N] || 1, K = this.$d.getTime() + E * _;
        return C.w(K, this);
      }, A.subtract = function(E, R) {
        return this.add(-1 * E, R);
      }, A.format = function(E) {
        var R = this, T = this.$locale();
        if (!this.isValid()) return T.invalidDate || m;
        var B = E || "YYYY-MM-DDTHH:mm:ssZ", N = C.z(this), z = this.$H, _ = this.$m, K = this.$M, ee = T.weekdays, ce = T.months, xe = T.meridiem, $e = function(ue, we, Oe, ze) {
          return ue && (ue[we] || ue(R, B)) || Oe[we].slice(0, ze);
        }, Be = function(ue) {
          return C.s(z % 12 || 12, ue, "0");
        }, De = xe || function(ue, we, Oe) {
          var ze = ue < 12 ? "AM" : "PM";
          return Oe ? ze.toLowerCase() : ze;
        };
        return B.replace(g, function(ue, we) {
          return we || function(Oe) {
            switch (Oe) {
              case "YY":
                return String(R.$y).slice(-2);
              case "YYYY":
                return C.s(R.$y, 4, "0");
              case "M":
                return K + 1;
              case "MM":
                return C.s(K + 1, 2, "0");
              case "MMM":
                return $e(T.monthsShort, K, ce, 3);
              case "MMMM":
                return $e(ce, K);
              case "D":
                return R.$D;
              case "DD":
                return C.s(R.$D, 2, "0");
              case "d":
                return String(R.$W);
              case "dd":
                return $e(T.weekdaysMin, R.$W, ee, 2);
              case "ddd":
                return $e(T.weekdaysShort, R.$W, ee, 3);
              case "dddd":
                return ee[R.$W];
              case "H":
                return String(z);
              case "HH":
                return C.s(z, 2, "0");
              case "h":
                return Be(1);
              case "hh":
                return Be(2);
              case "a":
                return De(z, _, !0);
              case "A":
                return De(z, _, !1);
              case "m":
                return String(_);
              case "mm":
                return C.s(_, 2, "0");
              case "s":
                return String(R.$s);
              case "ss":
                return C.s(R.$s, 2, "0");
              case "SSS":
                return C.s(R.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(ue) || N.replace(":", "");
        });
      }, A.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, A.diff = function(E, R, T) {
        var B, N = this, z = C.p(R), _ = O(E), K = (_.utcOffset() - this.utcOffset()) * t, ee = this - _, ce = function() {
          return C.m(N, _);
        };
        switch (z) {
          case h:
            B = ce() / 12;
            break;
          case f:
            B = ce();
            break;
          case u:
            B = ce() / 3;
            break;
          case d:
            B = (ee - K) / 6048e5;
            break;
          case c:
            B = (ee - K) / 864e5;
            break;
          case l:
            B = ee / i;
            break;
          case s:
            B = ee / t;
            break;
          case o:
            B = ee / r;
            break;
          default:
            B = ee;
        }
        return T ? B : C.a(B);
      }, A.daysInMonth = function() {
        return this.endOf(f).$D;
      }, A.$locale = function() {
        return S[this.$L];
      }, A.locale = function(E, R) {
        if (!E) return this.$L;
        var T = this.clone(), B = I(E, R, !0);
        return B && (T.$L = B), T;
      }, A.clone = function() {
        return C.w(this.$d, this);
      }, A.toDate = function() {
        return new Date(this.valueOf());
      }, A.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, A.toISOString = function() {
        return this.$d.toISOString();
      }, A.toString = function() {
        return this.$d.toUTCString();
      }, y;
    }(), Y = Z.prototype;
    return O.prototype = Y, [["$ms", a], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", h], ["$D", p]].forEach(function(y) {
      Y[y[1]] = function(A) {
        return this.$g(A, y[0], y[1]);
      };
    }), O.extend = function(y, A) {
      return y.$i || (y(A, Z, O), y.$i = !0), O;
    }, O.locale = I, O.isDayjs = x, O.unix = function(y) {
      return O(1e3 * y);
    }, O.en = S[$], O.Ls = S, O.p = {}, O;
  });
})(fm);
var hm = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(_t, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
    return function(i, a, o) {
      var s, l = function(u, h, p) {
        p === void 0 && (p = {});
        var m = new Date(u), v = function(g, b) {
          b === void 0 && (b = {});
          var k = b.timeZoneName || "short", P = g + "|" + k, $ = t[P];
          return $ || ($ = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: g, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: k }), t[P] = $), $;
        }(h, p);
        return v.formatToParts(m);
      }, c = function(u, h) {
        for (var p = l(u, h), m = [], v = 0; v < p.length; v += 1) {
          var g = p[v], b = g.type, k = g.value, P = r[b];
          P >= 0 && (m[P] = parseInt(k, 10));
        }
        var $ = m[3], S = $ === 24 ? 0 : $, w = m[0] + "-" + m[1] + "-" + m[2] + " " + S + ":" + m[4] + ":" + m[5] + ":000", x = +u;
        return (o.utc(w).valueOf() - (x -= x % 1e3)) / 6e4;
      }, d = a.prototype;
      d.tz = function(u, h) {
        u === void 0 && (u = s);
        var p, m = this.utcOffset(), v = this.toDate(), g = v.toLocaleString("en-US", { timeZone: u }), b = Math.round((v - new Date(g)) / 1e3 / 60), k = 15 * -Math.round(v.getTimezoneOffset() / 15) - b;
        if (!Number(k)) p = this.utcOffset(0, h);
        else if (p = o(g, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(k, !0), h) {
          var P = p.utcOffset();
          p = p.add(m - P, "minute");
        }
        return p.$x.$timezone = u, p;
      }, d.offsetName = function(u) {
        var h = this.$x.$timezone || o.tz.guess(), p = l(this.valueOf(), h, { timeZoneName: u }).find(function(m) {
          return m.type.toLowerCase() === "timezonename";
        });
        return p && p.value;
      };
      var f = d.startOf;
      d.startOf = function(u, h) {
        if (!this.$x || !this.$x.$timezone) return f.call(this, u, h);
        var p = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return f.call(p, u, h).tz(this.$x.$timezone, !0);
      }, o.tz = function(u, h, p) {
        var m = p && h, v = p || h || s, g = c(+o(), v);
        if (typeof u != "string") return o(u).tz(v);
        var b = function(S, w, x) {
          var I = S - 60 * w * 1e3, O = c(I, x);
          if (w === O) return [I, w];
          var C = c(I -= 60 * (O - w) * 1e3, x);
          return O === C ? [I, O] : [S - 60 * Math.min(O, C) * 1e3, Math.max(O, C)];
        }(o.utc(u, m).valueOf(), g, v), k = b[0], P = b[1], $ = o(k).utcOffset(P);
        return $.$x.$timezone = v, $;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(u) {
        s = u;
      };
    };
  });
})(hm);
var pm = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(_t, function() {
    return function(r, t, i) {
      var a = t.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, s = function(f, u, h, p, m) {
        var v = f.name ? f : f.$locale(), g = o(v[u]), b = o(v[h]), k = g || b.map(function($) {
          return $.slice(0, p);
        });
        if (!m) return k;
        var P = v.weekStart;
        return k.map(function($, S) {
          return k[(S + (P || 0)) % 7];
        });
      }, l = function() {
        return i.Ls[i.locale()];
      }, c = function(f, u) {
        return f.formats[u] || function(h) {
          return h.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(p, m, v) {
            return m || v.slice(1);
          });
        }(f.formats[u.toUpperCase()]);
      }, d = function() {
        var f = this;
        return { months: function(u) {
          return u ? u.format("MMMM") : s(f, "months");
        }, monthsShort: function(u) {
          return u ? u.format("MMM") : s(f, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return f.$locale().weekStart || 0;
        }, weekdays: function(u) {
          return u ? u.format("dddd") : s(f, "weekdays");
        }, weekdaysMin: function(u) {
          return u ? u.format("dd") : s(f, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(u) {
          return u ? u.format("ddd") : s(f, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(u) {
          return c(f.$locale(), u);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      a.localeData = function() {
        return d.bind(this)();
      }, i.localeData = function() {
        var f = l();
        return { firstDayOfWeek: function() {
          return f.weekStart || 0;
        }, weekdays: function() {
          return i.weekdays();
        }, weekdaysShort: function() {
          return i.weekdaysShort();
        }, weekdaysMin: function() {
          return i.weekdaysMin();
        }, months: function() {
          return i.months();
        }, monthsShort: function() {
          return i.monthsShort();
        }, longDateFormat: function(u) {
          return c(f, u);
        }, meridiem: f.meridiem, ordinal: f.ordinal };
      }, i.months = function() {
        return s(l(), "months");
      }, i.monthsShort = function() {
        return s(l(), "monthsShort", "months", 3);
      }, i.weekdays = function(f) {
        return s(l(), "weekdays", null, null, f);
      }, i.weekdaysShort = function(f) {
        return s(l(), "weekdaysShort", "weekdays", 3, f);
      }, i.weekdaysMin = function(f) {
        return s(l(), "weekdaysMin", "weekdays", 2, f);
      };
    };
  });
})(pm);
var vm = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(_t, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, i, a) {
      var o = i.prototype, s = o.format;
      a.en.formats = r, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, d = function(f, u) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, p, m) {
            var v = m && m.toUpperCase();
            return p || u[m] || r[m] || u[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, b, k) {
              return b || k.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, d);
      };
    };
  });
})(vm);
var mm = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(_t, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(g) {
        this[v] = +g;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(g) {
        if (!g || g === "Z") return 0;
        var b = g.match(/([+-]|\d\d)/g), k = 60 * b[1] + (+b[2] || 0);
        return k === 0 ? 0 : b[0] === "+" ? -k : k;
      }(v);
    }], u = function(v) {
      var g = l[v];
      return g && (g.indexOf ? g : g.s.concat(g.f));
    }, h = function(v, g) {
      var b, k = l.meridiem;
      if (k) {
        for (var P = 1; P <= 24; P += 1) if (v.indexOf(k(P, 0, g)) > -1) {
          b = P > 12;
          break;
        }
      } else b = v === (g ? "pm" : "PM");
      return b;
    }, p = { A: [s, function(v) {
      this.afternoon = h(v, !1);
    }], a: [s, function(v) {
      this.afternoon = h(v, !0);
    }], Q: [i, function(v) {
      this.month = 3 * (v - 1) + 1;
    }], S: [i, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [a, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [o, d("seconds")], ss: [o, d("seconds")], m: [o, d("minutes")], mm: [o, d("minutes")], H: [o, d("hours")], h: [o, d("hours")], HH: [o, d("hours")], hh: [o, d("hours")], D: [o, d("day")], DD: [a, d("day")], Do: [s, function(v) {
      var g = l.ordinal, b = v.match(/\d+/);
      if (this.day = b[0], g) for (var k = 1; k <= 31; k += 1) g(k).replace(/\[|\]/g, "") === v && (this.day = k);
    }], w: [o, d("week")], ww: [a, d("week")], M: [o, d("month")], MM: [a, d("month")], MMM: [s, function(v) {
      var g = u("months"), b = (u("monthsShort") || g.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(v) + 1;
      if (b < 1) throw new Error();
      this.month = b % 12 || b;
    }], MMMM: [s, function(v) {
      var g = u("months").indexOf(v) + 1;
      if (g < 1) throw new Error();
      this.month = g % 12 || g;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, d("year")], Z: f, ZZ: f };
    function m(v) {
      var g, b;
      g = v, b = l && l.formats;
      for (var k = (v = g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, C, Z) {
        var Y = Z && Z.toUpperCase();
        return C || b[Z] || r[Z] || b[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, A, E) {
          return A || E.slice(1);
        });
      })).match(t), P = k.length, $ = 0; $ < P; $ += 1) {
        var S = k[$], w = p[S], x = w && w[0], I = w && w[1];
        k[$] = I ? { regex: x, parser: I } : S.replace(/^\[|\]$/g, "");
      }
      return function(O) {
        for (var C = {}, Z = 0, Y = 0; Z < P; Z += 1) {
          var y = k[Z];
          if (typeof y == "string") Y += y.length;
          else {
            var A = y.regex, E = y.parser, R = O.slice(Y), T = A.exec(R)[0];
            E.call(C, T), O = O.replace(T, "");
          }
        }
        return function(B) {
          var N = B.afternoon;
          if (N !== void 0) {
            var z = B.hours;
            N ? z < 12 && (B.hours += 12) : z === 12 && (B.hours = 0), delete B.afternoon;
          }
        }(C), C;
      };
    }
    return function(v, g, b) {
      b.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var k = g.prototype, P = k.parse;
      k.parse = function($) {
        var S = $.date, w = $.utc, x = $.args;
        this.$u = w;
        var I = x[1];
        if (typeof I == "string") {
          var O = x[2] === !0, C = x[3] === !0, Z = O || C, Y = x[2];
          C && (Y = x[2]), l = this.$locale(), !O && Y && (l = b.Ls[Y]), this.$d = function(R, T, B, N) {
            try {
              if (["x", "X"].indexOf(T) > -1) return new Date((T === "X" ? 1e3 : 1) * R);
              var z = m(T)(R), _ = z.year, K = z.month, ee = z.day, ce = z.hours, xe = z.minutes, $e = z.seconds, Be = z.milliseconds, De = z.zone, ue = z.week, we = /* @__PURE__ */ new Date(), Oe = ee || (_ || K ? 1 : we.getDate()), ze = _ || we.getFullYear(), _e = 0;
              _ && !K || (_e = K > 0 ? K - 1 : we.getMonth());
              var ot, ut = ce || 0, ct = xe || 0, dt = $e || 0, ft = Be || 0;
              return De ? new Date(Date.UTC(ze, _e, Oe, ut, ct, dt, ft + 60 * De.offset * 1e3)) : B ? new Date(Date.UTC(ze, _e, Oe, ut, ct, dt, ft)) : (ot = new Date(ze, _e, Oe, ut, ct, dt, ft), ue && (ot = N(ot).week(ue).toDate()), ot);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, I, w, b), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), Z && S != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (I instanceof Array) for (var y = I.length, A = 1; A <= y; A += 1) {
          x[1] = I[A - 1];
          var E = b.apply(this, x);
          if (E.isValid()) {
            this.$d = E.$d, this.$L = E.$L, this.init();
            break;
          }
          A === y && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else P.call(this, $);
      };
    };
  });
})(mm);
var gm = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(_t, function() {
    return function(r, t, i) {
      t.prototype.isToday = function() {
        var a = "YYYY-MM-DD", o = i();
        return this.format(a) === o.format(a);
      };
    };
  });
})(gm);
var ym = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(_t, function() {
    return function(r, t, i) {
      t.prototype.isBetween = function(a, o, s, l) {
        var c = i(a), d = i(o), f = (l = l || "()")[0] === "(", u = l[1] === ")";
        return (f ? this.isAfter(c, s) : !this.isBefore(c, s)) && (u ? this.isBefore(d, s) : !this.isAfter(d, s)) || (f ? this.isBefore(c, s) : !this.isAfter(c, s)) && (u ? this.isAfter(d, s) : !this.isBefore(d, s));
      };
    };
  });
})(ym);
var bm = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(_t, function() {
    var r, t, i = 1e3, a = 6e4, o = 36e5, s = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, u = { years: c, months: d, days: s, hours: o, minutes: a, seconds: i, milliseconds: 1, weeks: 6048e5 }, h = function(S) {
      return S instanceof P;
    }, p = function(S, w, x) {
      return new P(S, x, w.$l);
    }, m = function(S) {
      return t.p(S) + "s";
    }, v = function(S) {
      return S < 0;
    }, g = function(S) {
      return v(S) ? Math.ceil(S) : Math.floor(S);
    }, b = function(S) {
      return Math.abs(S);
    }, k = function(S, w) {
      return S ? v(S) ? { negative: !0, format: "" + b(S) + w } : { negative: !1, format: "" + S + w } : { negative: !1, format: "" };
    }, P = function() {
      function S(x, I, O) {
        var C = this;
        if (this.$d = {}, this.$l = O, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return p(x * u[m(I)], this);
        if (typeof x == "number") return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object") return Object.keys(x).forEach(function(y) {
          C.$d[m(y)] = x[y];
        }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var Z = x.match(f);
          if (Z) {
            var Y = Z.slice(2).map(function(y) {
              return y != null ? Number(y) : 0;
            });
            return this.$d.years = Y[0], this.$d.months = Y[1], this.$d.weeks = Y[2], this.$d.days = Y[3], this.$d.hours = Y[4], this.$d.minutes = Y[5], this.$d.seconds = Y[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var w = S.prototype;
      return w.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(I, O) {
          return I + (x.$d[O] || 0) * u[O];
        }, 0);
      }, w.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = g(x / c), x %= c, this.$d.months = g(x / d), x %= d, this.$d.days = g(x / s), x %= s, this.$d.hours = g(x / o), x %= o, this.$d.minutes = g(x / a), x %= a, this.$d.seconds = g(x / i), x %= i, this.$d.milliseconds = x;
      }, w.toISOString = function() {
        var x = k(this.$d.years, "Y"), I = k(this.$d.months, "M"), O = +this.$d.days || 0;
        this.$d.weeks && (O += 7 * this.$d.weeks);
        var C = k(O, "D"), Z = k(this.$d.hours, "H"), Y = k(this.$d.minutes, "M"), y = this.$d.seconds || 0;
        this.$d.milliseconds && (y += this.$d.milliseconds / 1e3, y = Math.round(1e3 * y) / 1e3);
        var A = k(y, "S"), E = x.negative || I.negative || C.negative || Z.negative || Y.negative || A.negative, R = Z.format || Y.format || A.format ? "T" : "", T = (E ? "-" : "") + "P" + x.format + I.format + C.format + R + Z.format + Y.format + A.format;
        return T === "P" || T === "-P" ? "P0D" : T;
      }, w.toJSON = function() {
        return this.toISOString();
      }, w.format = function(x) {
        var I = x || "YYYY-MM-DDTHH:mm:ss", O = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return I.replace(l, function(C, Z) {
          return Z || String(O[C]);
        });
      }, w.as = function(x) {
        return this.$ms / u[m(x)];
      }, w.get = function(x) {
        var I = this.$ms, O = m(x);
        return O === "milliseconds" ? I %= 1e3 : I = O === "weeks" ? g(I / u[O]) : this.$d[O], I || 0;
      }, w.add = function(x, I, O) {
        var C;
        return C = I ? x * u[m(I)] : h(x) ? x.$ms : p(x, this).$ms, p(this.$ms + C * (O ? -1 : 1), this);
      }, w.subtract = function(x, I) {
        return this.add(x, I, !0);
      }, w.locale = function(x) {
        var I = this.clone();
        return I.$l = x, I;
      }, w.clone = function() {
        return p(this.$ms, this);
      }, w.humanize = function(x) {
        return r().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
      }, w.valueOf = function() {
        return this.asMilliseconds();
      }, w.milliseconds = function() {
        return this.get("milliseconds");
      }, w.asMilliseconds = function() {
        return this.as("milliseconds");
      }, w.seconds = function() {
        return this.get("seconds");
      }, w.asSeconds = function() {
        return this.as("seconds");
      }, w.minutes = function() {
        return this.get("minutes");
      }, w.asMinutes = function() {
        return this.as("minutes");
      }, w.hours = function() {
        return this.get("hours");
      }, w.asHours = function() {
        return this.as("hours");
      }, w.days = function() {
        return this.get("days");
      }, w.asDays = function() {
        return this.as("days");
      }, w.weeks = function() {
        return this.get("weeks");
      }, w.asWeeks = function() {
        return this.as("weeks");
      }, w.months = function() {
        return this.get("months");
      }, w.asMonths = function() {
        return this.as("months");
      }, w.years = function() {
        return this.get("years");
      }, w.asYears = function() {
        return this.as("years");
      }, S;
    }(), $ = function(S, w, x) {
      return S.add(w.years() * x, "y").add(w.months() * x, "M").add(w.days() * x, "d").add(w.hours() * x, "h").add(w.minutes() * x, "m").add(w.seconds() * x, "s").add(w.milliseconds() * x, "ms");
    };
    return function(S, w, x) {
      r = x, t = x().$utils(), x.duration = function(C, Z) {
        var Y = x.locale();
        return p(C, { $l: Y }, Z);
      }, x.isDuration = h;
      var I = w.prototype.add, O = w.prototype.subtract;
      w.prototype.add = function(C, Z) {
        return h(C) ? $(this, C, 1) : I.bind(this)(C, Z);
      }, w.prototype.subtract = function(C, Z) {
        return h(C) ? $(this, C, -1) : O.bind(this)(C, Z);
      };
    };
  });
})(bm);
var wm = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(_t, function() {
    var r = "week", t = "year";
    return function(i, a, o) {
      var s = a.prototype;
      s.week = function(l) {
        if (l === void 0 && (l = null), l !== null) return this.add(7 * (l - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = o(this).startOf(t).add(1, t).date(c), f = o(this).endOf(r);
          if (d.isBefore(f)) return 1;
        }
        var u = o(this).startOf(t).date(c).startOf(r).subtract(1, "millisecond"), h = this.diff(u, r, !0);
        return h < 0 ? o(this).startOf("week").week() : Math.ceil(h);
      }, s.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(wm);
Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({})).map(
    ([e, n]) => {
      var r;
      return [(r = e.match(/([\w-]*)\.js$/)) == null ? void 0 : r[1], n];
    }
  )
);
const xm = ["data-test", "disabled"], $o = {
  __name: "FormButton",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "primary"
    },
    dataTest: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      default: "md"
    }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const r = n;
    return (t, i) => (D(), L("button", {
      class: pe([
        "tc-font-bold tc-rounded tc-text-base",
        e.disabled ? "tc-bg-tp-grey-300 tc-text-white" : e.type === "danger" ? "tc-bg-red-500 tc-text-white hover:tc-bg-red-600 focus:tc-outline-none" : e.type === "gray" ? "tc-bg-tp-grey-300 tc-text-gray-400" : e.type === "black-outline" ? "tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2" : e.type === "primary" ? "tc-bg-tonik-purple hover:tc-bg-tonik-purple-dark tc-text-white" : e.type === "primary-outline" ? "tc-bg-transparent tc-text-tp-primary tc-border-tp-primary tc-border hover:tc-bg-tp-primary hover:tc-text-white" : e.type === "secondary" ? "tc-bg-tp-secondary hover:tc-bg-tp-secondary-dark tc-text-gray-800" : e.type === "secondary-outline" ? "tc-bg-transparent tc-text-tp-secondary tc-border-tp-secondary tc-border hover:tc-bg-tp-secondary hover:tc-text-white" : "tc-bg-blue-500 tc-text-white hover:tc-bg-blue-700",
        e.size === "sm" ? "tc-text-sm tc-px-4 tc-py-2.5" : e.size === "md" ? "tc-text-base tc-px-5 tc-py-3" : e.size === "xs" ? "tc-text-xs tc-px-2 tc-py-1" : "tc-text-lg tc-px-8 tc-py-3"
      ]),
      "data-test": e.dataTest + "-button",
      disabled: e.disabled,
      onClick: i[0] || (i[0] = (a) => r("click"))
    }, [
      Ee(t.$slots, "default", {
        dataTest: e.dataTest + "-text"
      }, () => [
        je(Q(e.dataTest), 1)
      ])
    ], 10, xm));
  }
};
var ko, $m, or;
ko = function(e) {
  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  (function() {
    var n = {}.hasOwnProperty;
    function r() {
      for (var t = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var o = typeof a;
          if (o === "string" || o === "number") t.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var s = r.apply(null, a);
              s && t.push(s);
            }
          } else if (o === "object") if (a.toString === Object.prototype.toString) for (var l in a) n.call(a, l) && a[l] && t.push(l);
          else t.push(a.toString());
        }
      }
      return t.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
}, ko(or = { path: $m, exports: {}, require: function(e, n) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(n == null && or.path);
} }, or.exports), or.exports;
function So(e, n, r) {
  var t, i, a, o, s;
  function l() {
    var d = Date.now() - o;
    d < n && d >= 0 ? t = setTimeout(l, n - d) : (t = null, r || (s = e.apply(a, i), a = i = null));
  }
  n == null && (n = 100);
  var c = function() {
    a = this, i = arguments, o = Date.now();
    var d = r && !t;
    return t || (t = setTimeout(l, n)), d && (s = e.apply(a, i), a = i = null), s;
  };
  return c.clear = function() {
    t && (clearTimeout(t), t = null);
  }, c.flush = function() {
    t && (s = e.apply(a, i), a = i = null, clearTimeout(t), t = null);
  }, c;
}
So.debounce = So;
function km(e, n, r) {
  let t = F(r == null ? void 0 : r.value), i = j(() => e.value !== void 0);
  return [j(() => i.value ? e.value : t.value), function(a) {
    return i.value || (t.value = a), n == null ? void 0 : n(a);
  }];
}
var Mo;
let Sm = Symbol("headlessui.useid"), Mm = 0;
const kt = (Mo = vn.useId) != null ? Mo : function() {
  return vn.inject(Sm, () => `${++Mm}`)();
};
function ie(e) {
  var n;
  if (e == null || e.value == null) return null;
  let r = (n = e.value.$el) != null ? n : e.value;
  return r instanceof Node ? r : null;
}
function It(e, n, ...r) {
  if (e in n) {
    let i = n[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, It), t;
}
var Dm = Object.defineProperty, Em = (e, n, r) => n in e ? Dm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Do = (e, n, r) => (Em(e, typeof n != "symbol" ? n + "" : n, r), r);
let Am = class {
  constructor() {
    Do(this, "current", this.detect()), Do(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, Sr = new Am();
function zt(e) {
  if (Sr.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = ie(e);
    if (n) return n.ownerDocument;
  }
  return document;
}
let ua = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Dt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Dt || {}), lr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(lr || {}), Tm = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Tm || {});
function Vn(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ua)).sort((n, r) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Mr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Mr || {});
function Dr(e, n = 0) {
  var r;
  return e === ((r = zt(e)) == null ? void 0 : r.body) ? !1 : It(n, { 0() {
    return e.matches(ua);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(ua)) return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
function Ts(e) {
  let n = zt(e);
  Le(() => {
    n && !Dr(n.activeElement, 0) && Om(e);
  });
}
var Pm = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Pm || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Om(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Cm = ["textarea", "input"].join(",");
function Lm(e) {
  var n, r;
  return (r = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Cm)) != null ? r : !1;
}
function Ps(e, n = (r) => r) {
  return e.slice().sort((r, t) => {
    let i = n(r), a = n(t);
    if (i === null || a === null) return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Rm(e, n) {
  return Xt(Vn(), n, { relativeTo: e });
}
function Xt(e, n, { sorted: r = !0, relativeTo: t = null, skipElements: i = [] } = {}) {
  var a;
  let o = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? r ? Ps(e) : e : Vn(e);
  i.length > 0 && s.length > 1 && (s = s.filter((p) => !i.includes(p))), t = t ?? o.activeElement;
  let l = (() => {
    if (n & 5) return 1;
    if (n & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (n & 1) return 0;
    if (n & 2) return Math.max(0, s.indexOf(t)) - 1;
    if (n & 4) return Math.max(0, s.indexOf(t)) + 1;
    if (n & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = n & 32 ? { preventScroll: !0 } : {}, f = 0, u = s.length, h;
  do {
    if (f >= u || f + u <= 0) return 0;
    let p = c + f;
    if (n & 16) p = (p + u) % u;
    else {
      if (p < 0) return 3;
      if (p >= u) return 1;
    }
    h = s[p], h == null || h.focus(d), f += l;
  } while (h !== o.activeElement);
  return n & 6 && Lm(h) && h.select(), 2;
}
function Im() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function zm() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Fm() {
  return Im() || zm();
}
function ir(e, n, r) {
  Sr.isServer || ge((t) => {
    document.addEventListener(e, n, r), t(() => document.removeEventListener(e, n, r));
  });
}
function Os(e, n, r) {
  Sr.isServer || ge((t) => {
    window.addEventListener(e, n, r), t(() => window.removeEventListener(e, n, r));
  });
}
function Cs(e, n, r = j(() => !0)) {
  function t(a, o) {
    if (!r.value || a.defaultPrevented) return;
    let s = o(a);
    if (s === null || !s.getRootNode().contains(s)) return;
    let l = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of l) {
      if (c === null) continue;
      let d = c instanceof HTMLElement ? c : ie(c);
      if (d != null && d.contains(s) || a.composed && a.composedPath().includes(d)) return;
    }
    return !Dr(s, Mr.Loose) && s.tabIndex !== -1 && a.preventDefault(), n(a, s);
  }
  let i = F(null);
  ir("pointerdown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), ir("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), ir("click", (a) => {
    Fm() || i.value && (t(a, () => i.value), i.value = null);
  }, !0), ir("touchend", (a) => t(a, () => a.target instanceof HTMLElement ? a.target : null), !0), Os("blur", (a) => t(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Eo(e, n) {
  if (e) return e;
  let r = n ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function Ya(e, n) {
  let r = F(Eo(e.value.type, e.value.as));
  return he(() => {
    r.value = Eo(e.value.type, e.value.as);
  }), ge(() => {
    var t;
    r.value || ie(n) && ie(n) instanceof HTMLButtonElement && !((t = ie(n)) != null && t.hasAttribute("type")) && (r.value = "button");
  }), r;
}
function Ao(e) {
  return [e.screenX, e.screenY];
}
function Ym() {
  let e = F([-1, -1]);
  return { wasMoved(n) {
    let r = Ao(n);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(n) {
    e.value = Ao(n);
  } };
}
function jm({ container: e, accept: n, walk: r, enabled: t }) {
  ge(() => {
    let i = e.value;
    if (!i || t !== void 0 && !t.value) return;
    let a = zt(e);
    if (!a) return;
    let o = Object.assign((l) => n(l), { acceptNode: n }), s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; s.nextNode(); ) r(s.currentNode);
  });
}
var dn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(dn || {}), Bm = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Bm || {});
function at({ visible: e = !0, features: n = 0, ourProps: r, theirProps: t, ...i }) {
  var a;
  let o = Rs(t, r), s = Object.assign(i, { props: o });
  if (e || n & 2 && o.static) return Vr(s);
  if (n & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return It(l, { 0() {
      return null;
    }, 1() {
      return Vr({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Vr(s);
}
function Vr({ props: e, attrs: n, slots: r, slot: t, name: i }) {
  var a, o;
  let { as: s, ...l } = Is(e, ["unmount", "static"]), c = (a = r.default) == null ? void 0 : a.call(r, t), d = {};
  if (t) {
    let f = !1, u = [];
    for (let [h, p] of Object.entries(t)) typeof p == "boolean" && (f = !0), p === !0 && u.push(h);
    f && (d["data-headlessui-state"] = u.join(" "));
  }
  if (s === "template") {
    if (c = Ls(c ?? []), Object.keys(l).length > 0 || Object.keys(n).length > 0) {
      let [f, ...u] = c ?? [];
      if (!Nm(f) || u.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(n)).map((m) => m.trim()).filter((m, v, g) => g.indexOf(m) === v).sort((m, v) => m.localeCompare(v)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = Rs((o = f.props) != null ? o : {}, l, d), p = fa(f, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return oe(s, Object.assign({}, l, d), { default: () => c });
}
function Ls(e) {
  return e.flatMap((n) => n.type === se ? Ls(n.children) : [n]);
}
function Rs(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let n = {}, r = {};
  for (let t of e) for (let i in t) i.startsWith("on") && typeof t[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(t[i])) : n[i] = t[i];
  if (n.disabled || n["aria-disabled"]) return Object.assign(n, Object.fromEntries(Object.keys(r).map((t) => [t, void 0])));
  for (let t in r) Object.assign(n, { [t](i, ...a) {
    let o = r[t];
    for (let s of o) {
      if (i instanceof Event && i.defaultPrevented) return;
      s(i, ...a);
    }
  } });
  return n;
}
function Vm(e) {
  let n = Object.assign({}, e);
  for (let r in n) n[r] === void 0 && delete n[r];
  return n;
}
function Is(e, n = []) {
  let r = Object.assign({}, e);
  for (let t of n) t in r && delete r[t];
  return r;
}
function Nm(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var fn = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(fn || {});
let wn = ae({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: r }) {
  return () => {
    var t;
    let { features: i, ...a } = e, o = { "aria-hidden": (i & 2) === 2 ? !0 : (t = a["aria-hidden"]) != null ? t : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return at({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: n, name: "Hidden" });
  };
} }), zs = Symbol("Context");
var Et = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Et || {});
function ja() {
  return ve(zs, null);
}
function Fs(e) {
  fe(zs, e);
}
var Ve = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ve || {});
function Hm(e) {
  throw new Error("Unexpected object: " + e);
}
var gt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(gt || {});
function Wm(e, n) {
  let r = n.resolveItems();
  if (r.length <= 0) return null;
  let t = n.resolveActiveIndex(), i = t ?? -1;
  switch (e.focus) {
    case 0: {
      for (let a = 0; a < r.length; ++a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 1: {
      i === -1 && (i = r.length);
      for (let a = i - 1; a >= 0; --a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 2: {
      for (let a = i + 1; a < r.length; ++a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 3: {
      for (let a = r.length - 1; a >= 0; --a) if (!n.resolveDisabled(r[a], a, r)) return a;
      return t;
    }
    case 4: {
      for (let a = 0; a < r.length; ++a) if (n.resolveId(r[a], a, r) === e.id) return a;
      return t;
    }
    case 5:
      return null;
    default:
      Hm(e);
  }
}
function Um(e) {
  var n, r;
  let t = (n = e == null ? void 0 : e.form) != null ? n : e.closest("form");
  if (t) {
    for (let i of t.elements) if (i !== e && (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image")) {
      i.click();
      return;
    }
    (r = t.requestSubmit) == null || r.call(t);
  }
}
function _m(e, n, r, t) {
  Sr.isServer || ge((i) => {
    e = e ?? window, e.addEventListener(n, r, t), i(() => e.removeEventListener(n, r, t));
  });
}
var jt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(jt || {});
function Ys() {
  let e = F(0);
  return Os("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function qm({ defaultContainers: e = [], portals: n, mainTreeNodeRef: r } = {}) {
  let t = F(null), i = zt(t);
  function a() {
    var o, s, l;
    let c = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? c.push(d) : "value" in d && d.value instanceof HTMLElement && c.push(d.value));
    if (n != null && n.value) for (let d of n.value) c.push(d);
    for (let d of (o = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? o : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(ie(t)) || d.contains((l = (s = ie(t)) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || c.some((f) => d.contains(f)) || c.push(d));
    return c;
  }
  return { resolveContainers: a, contains(o) {
    return a().some((s) => s.contains(o));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return r != null ? null : oe(wn, { features: fn.Hidden, ref: t });
  } };
}
function Zm() {
  let e = F(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return oe(wn, { features: fn.Hidden, ref: e });
  } };
}
let js = Symbol("ForcePortalRootContext");
function Km() {
  return ve(js, !1);
}
ae({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: r }) {
  return fe(js, e.force), () => {
    let { force: t, ...i } = e;
    return at({ theirProps: i, ourProps: {}, slot: {}, slots: n, attrs: r, name: "ForcePortalRoot" });
  };
} });
let Bs = Symbol("DescriptionContext");
function Gm() {
  let e = ve(Bs, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function Xm({ slot: e = F({}), name: n = "Description", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return fe(Bs, { register: i, slot: e, name: n, props: r }), j(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
ae({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-description-${kt()}`, a = Gm();
  return he(() => Se(a.register(i))), () => {
    let { name: o = "Description", slot: s = F({}), props: l = {} } = a, { ...c } = e, d = { ...Object.entries(l).reduce((f, [u, h]) => Object.assign(f, { [u]: te(h) }), {}), id: i };
    return at({ ourProps: d, theirProps: c, slot: s.value, attrs: n, slots: r, name: o });
  };
} });
function Jm(e) {
  let n = zt(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = n.getElementById("headlessui-portal-root");
  if (r) return r;
  let t = n.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(t);
}
const ca = /* @__PURE__ */ new WeakMap();
function Qm(e) {
  var n;
  return (n = ca.get(e)) != null ? n : 0;
}
function To(e, n) {
  let r = n(Qm(e));
  return r <= 0 ? ca.delete(e) : ca.set(e, r), r;
}
ae({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = j(() => zt(t)), a = Km(), o = ve(Vs, null), s = F(a === !0 || o == null ? Jm(t.value) : o.resolveTarget());
  s.value && To(s.value, (u) => u + 1);
  let l = F(!1);
  he(() => {
    l.value = !0;
  }), ge(() => {
    a || o != null && (s.value = o.resolveTarget());
  });
  let c = ve(da, null), d = !1, f = ha();
  return Me(t, () => {
    if (d || !c) return;
    let u = ie(t);
    u && (Se(c.register(u), f), d = !0);
  }), Se(() => {
    var u, h;
    let p = (u = i.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    !p || s.value !== p || To(s.value, (m) => m - 1) || s.value.children.length > 0 || (h = s.value.parentElement) == null || h.removeChild(s.value);
  }), () => {
    if (!l.value || s.value === null) return null;
    let u = { ref: t, "data-headlessui-portal": "" };
    return oe(ur, { to: s.value }, at({ ourProps: u, theirProps: e, slot: {}, attrs: r, slots: n, name: "Portal" }));
  };
} });
let da = Symbol("PortalParentContext");
function e0() {
  let e = ve(da, null), n = F([]);
  function r(a) {
    return n.value.push(a), e && e.register(a), () => t(a);
  }
  function t(a) {
    let o = n.value.indexOf(a);
    o !== -1 && n.value.splice(o, 1), e && e.unregister(a);
  }
  let i = { register: r, unregister: t, portals: n };
  return [n, ae({ name: "PortalWrapper", setup(a, { slots: o }) {
    return fe(da, i), () => {
      var s;
      return (s = o.default) == null ? void 0 : s.call(o);
    };
  } })];
}
let Vs = Symbol("PortalGroupContext");
ae({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: r }) {
  let t = xn({ resolveTarget() {
    return e.target;
  } });
  return fe(Vs, t), () => {
    let { target: i, ...a } = e;
    return at({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: r, name: "PortalGroup" });
  };
} });
let Po = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Oo(e) {
  var n, r;
  let t = (n = e.innerText) != null ? n : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return t;
  let a = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), a = !0;
  let o = a ? (r = i.innerText) != null ? r : "" : t;
  return Po.test(o) && (o = o.replace(Po, "")), o;
}
function t0(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string") return n.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let t = r.split(" ").map((i) => {
      let a = document.getElementById(i);
      if (a) {
        let o = a.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Oo(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (t.length > 0) return t.join(", ");
  }
  return Oo(e).trim();
}
function n0(e) {
  let n = F(""), r = F("");
  return () => {
    let t = ie(e);
    if (!t) return "";
    let i = t.innerText;
    if (n.value === i) return r.value;
    let a = t0(t).trim().toLowerCase();
    return n.value = i, r.value = a, a;
  };
}
var r0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(r0 || {}), a0 = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(a0 || {});
function o0(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Ns = Symbol("MenuContext");
function Er(e) {
  let n = ve(Ns, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Er), r;
  }
  return n;
}
ae({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(1), i = F(null), a = F(null), o = F([]), s = F(""), l = F(null), c = F(1);
  function d(u = (h) => h) {
    let h = l.value !== null ? o.value[l.value] : null, p = Ps(u(o.value.slice()), (v) => ie(v.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let f = { menuState: t, buttonRef: i, itemsRef: a, items: o, searchQuery: s, activeItemIndex: l, activationTrigger: c, closeMenu: () => {
    t.value = 1, l.value = null;
  }, openMenu: () => t.value = 0, goToItem(u, h, p) {
    let m = d(), v = Wm(u === gt.Specific ? { focus: gt.Specific, id: h } : { focus: u }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    s.value = "", l.value = v, c.value = p ?? 1, o.value = m.items;
  }, search(u) {
    let h = s.value !== "" ? 0 : 1;
    s.value += u.toLowerCase();
    let p = (l.value !== null ? o.value.slice(l.value + h).concat(o.value.slice(0, l.value + h)) : o.value).find((v) => v.dataRef.textValue.startsWith(s.value) && !v.dataRef.disabled), m = p ? o.value.indexOf(p) : -1;
    m === -1 || m === l.value || (l.value = m, c.value = 1);
  }, clearSearch() {
    s.value = "";
  }, registerItem(u, h) {
    let p = d((m) => [...m, { id: u, dataRef: h }]);
    o.value = p.items, l.value = p.activeItemIndex, c.value = 1;
  }, unregisterItem(u) {
    let h = d((p) => {
      let m = p.findIndex((v) => v.id === u);
      return m !== -1 && p.splice(m, 1), p;
    });
    o.value = h.items, l.value = h.activeItemIndex, c.value = 1;
  } };
  return Cs([i, a], (u, h) => {
    var p;
    f.closeMenu(), Dr(h, Mr.Loose) || (u.preventDefault(), (p = ie(i)) == null || p.focus());
  }, j(() => t.value === 0)), fe(Ns, f), Fs(j(() => It(t.value, { 0: Et.Open, 1: Et.Closed }))), () => {
    let u = { open: t.value === 0, close: f.closeMenu };
    return at({ ourProps: {}, theirProps: e, slot: u, slots: n, attrs: r, name: "Menu" });
  };
} });
ae({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-button-${kt()}`, o = Er("MenuButton");
  t({ el: o.buttonRef, $el: o.buttonRef });
  function s(f) {
    switch (f.key) {
      case Ve.Space:
      case Ve.Enter:
      case Ve.ArrowDown:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Le(() => {
          var u;
          (u = ie(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(gt.First);
        });
        break;
      case Ve.ArrowUp:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Le(() => {
          var u;
          (u = ie(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(gt.Last);
        });
        break;
    }
  }
  function l(f) {
    switch (f.key) {
      case Ve.Space:
        f.preventDefault();
        break;
    }
  }
  function c(f) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Le(() => {
      var u;
      return (u = ie(o.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), o.openMenu(), o0(() => {
      var u;
      return (u = ie(o.itemsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let d = Ya(j(() => ({ as: e.as, type: n.type })), o.buttonRef);
  return () => {
    var f;
    let u = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: a, type: d.value, "aria-haspopup": "menu", "aria-controls": (f = ie(o.itemsRef)) == null ? void 0 : f.id, "aria-expanded": o.menuState.value === 0, onKeydown: s, onKeyup: l, onClick: c };
    return at({ ourProps: p, theirProps: h, slot: u, attrs: n, slots: r, name: "MenuButton" });
  };
} });
ae({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-items-${kt()}`, o = Er("MenuItems"), s = F(null);
  t({ el: o.itemsRef, $el: o.itemsRef }), jm({ container: j(() => ie(o.itemsRef)), enabled: j(() => o.menuState.value === 0), accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function l(u) {
    var h;
    switch (s.value && clearTimeout(s.value), u.key) {
      case Ve.Space:
        if (o.searchQuery.value !== "") return u.preventDefault(), u.stopPropagation(), o.search(u.key);
      case Ve.Enter:
        if (u.preventDefault(), u.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = ie(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), Ts(ie(o.buttonRef));
        break;
      case Ve.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(gt.Next);
      case Ve.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(gt.Previous);
      case Ve.Home:
      case Ve.PageUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(gt.First);
      case Ve.End:
      case Ve.PageDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(gt.Last);
      case Ve.Escape:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Le(() => {
          var p;
          return (p = ie(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case Ve.Tab:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Le(() => Rm(ie(o.buttonRef), u.shiftKey ? Dt.Previous : Dt.Next));
        break;
      default:
        u.key.length === 1 && (o.search(u.key), s.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function c(u) {
    switch (u.key) {
      case Ve.Space:
        u.preventDefault();
        break;
    }
  }
  let d = ja(), f = j(() => d !== null ? (d.value & Et.Open) === Et.Open : o.menuState.value === 0);
  return () => {
    var u, h;
    let p = { open: o.menuState.value === 0 }, { ...m } = e, v = { "aria-activedescendant": o.activeItemIndex.value === null || (u = o.items.value[o.activeItemIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (h = ie(o.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: l, onKeyup: c, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return at({ ourProps: v, theirProps: m, slot: p, attrs: n, slots: r, features: dn.RenderStrategy | dn.Static, visible: f.value, name: "MenuItems" });
  };
} });
ae({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-item-${kt()}`, o = Er("MenuItem"), s = F(null);
  t({ el: s, $el: s });
  let l = j(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === a : !1), c = n0(s), d = j(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: s }));
  he(() => o.registerItem(a, d)), Se(() => o.unregisterItem(a)), ge(() => {
    o.menuState.value === 0 && l.value && o.activationTrigger.value !== 0 && Le(() => {
      var g, b;
      return (b = (g = ie(s)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : b.call(g, { block: "nearest" });
    });
  });
  function f(g) {
    if (e.disabled) return g.preventDefault();
    o.closeMenu(), Ts(ie(o.buttonRef));
  }
  function u() {
    if (e.disabled) return o.goToItem(gt.Nothing);
    o.goToItem(gt.Specific, a);
  }
  let h = Ym();
  function p(g) {
    h.update(g);
  }
  function m(g) {
    h.wasMoved(g) && (e.disabled || l.value || o.goToItem(gt.Specific, a, 0));
  }
  function v(g) {
    h.wasMoved(g) && (e.disabled || l.value && o.goToItem(gt.Nothing));
  }
  return () => {
    let { disabled: g, ...b } = e, k = { active: l.value, disabled: g, close: o.closeMenu };
    return at({ ourProps: { id: a, ref: s, role: "menuitem", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, onClick: f, onFocus: u, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v }, theirProps: { ...r, ...b }, slot: k, attrs: r, slots: n, name: "MenuItem" });
  };
} });
var i0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(i0 || {});
let Hs = Symbol("PopoverContext");
function Ar(e) {
  let n = ve(Hs, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <${l0.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ar), r;
  }
  return n;
}
let Ws = Symbol("PopoverGroupContext");
function Us() {
  return ve(Ws, null);
}
let _s = Symbol("PopoverPanelContext");
function s0() {
  return ve(_s, null);
}
let l0 = ae({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = F(null);
  t({ el: a, $el: a });
  let o = F(1), s = F(null), l = F(null), c = F(null), d = F(null), f = j(() => zt(a)), u = j(() => {
    var $, S;
    if (!ie(s) || !ie(d)) return !1;
    for (let Y of document.querySelectorAll("body > *")) if (Number(Y == null ? void 0 : Y.contains(ie(s))) ^ Number(Y == null ? void 0 : Y.contains(ie(d)))) return !0;
    let w = Vn(), x = w.indexOf(ie(s)), I = (x + w.length - 1) % w.length, O = (x + 1) % w.length, C = w[I], Z = w[O];
    return !(($ = ie(d)) != null && $.contains(C)) && !((S = ie(d)) != null && S.contains(Z));
  }), h = { popoverState: o, buttonId: F(null), panelId: F(null), panel: d, button: s, isPortalled: u, beforePanelSentinel: l, afterPanelSentinel: c, togglePopover() {
    o.value = It(o.value, { 0: 1, 1: 0 });
  }, closePopover() {
    o.value !== 1 && (o.value = 1);
  }, close($) {
    h.closePopover();
    let S = $ ? $ instanceof HTMLElement ? $ : $.value instanceof HTMLElement ? ie($) : ie(h.button) : ie(h.button);
    S == null || S.focus();
  } };
  fe(Hs, h), Fs(j(() => It(o.value, { 0: Et.Open, 1: Et.Closed })));
  let p = { buttonId: h.buttonId, panelId: h.panelId, close() {
    h.closePopover();
  } }, m = Us(), v = m == null ? void 0 : m.registerPopover, [g, b] = e0(), k = qm({ mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef, portals: g, defaultContainers: [s, d] });
  function P() {
    var $, S, w, x;
    return (x = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null ? x : (($ = f.value) == null ? void 0 : $.activeElement) && (((S = ie(s)) == null ? void 0 : S.contains(f.value.activeElement)) || ((w = ie(d)) == null ? void 0 : w.contains(f.value.activeElement)));
  }
  return ge(() => v == null ? void 0 : v(p)), _m((i = f.value) == null ? void 0 : i.defaultView, "focus", ($) => {
    var S, w;
    $.target !== window && $.target instanceof HTMLElement && o.value === 0 && (P() || s && d && (k.contains($.target) || (S = ie(h.beforePanelSentinel)) != null && S.contains($.target) || (w = ie(h.afterPanelSentinel)) != null && w.contains($.target) || h.closePopover()));
  }, !0), Cs(k.resolveContainers, ($, S) => {
    var w;
    h.closePopover(), Dr(S, Mr.Loose) || ($.preventDefault(), (w = ie(s)) == null || w.focus());
  }, j(() => o.value === 0)), () => {
    let $ = { open: o.value === 0, close: h.close };
    return oe(se, [oe(b, {}, () => at({ theirProps: { ...e, ...r }, ourProps: { ref: a }, slot: $, slots: n, attrs: r, name: "Popover" })), oe(k.MainTreeNode)]);
  };
} });
ae({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-button-${kt()}`, o = Ar("PopoverButton"), s = j(() => zt(o.button));
  t({ el: o.button, $el: o.button }), he(() => {
    o.buttonId.value = a;
  }), Se(() => {
    o.buttonId.value = null;
  });
  let l = Us(), c = l == null ? void 0 : l.closeOthers, d = s0(), f = j(() => d === null ? !1 : d.value === o.panelId.value), u = F(null), h = `headlessui-focus-sentinel-${kt()}`;
  f.value || ge(() => {
    o.button.value = ie(u);
  });
  let p = Ya(j(() => ({ as: e.as, type: n.type })), u);
  function m($) {
    var S, w, x, I, O;
    if (f.value) {
      if (o.popoverState.value === 1) return;
      switch ($.key) {
        case Ve.Space:
        case Ve.Enter:
          $.preventDefault(), (w = (S = $.target).click) == null || w.call(S), o.closePopover(), (x = ie(o.button)) == null || x.focus();
          break;
      }
    } else switch ($.key) {
      case Ve.Space:
      case Ve.Enter:
        $.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover();
        break;
      case Ve.Escape:
        if (o.popoverState.value !== 0) return c == null ? void 0 : c(o.buttonId.value);
        if (!ie(o.button) || (I = s.value) != null && I.activeElement && !((O = ie(o.button)) != null && O.contains(s.value.activeElement))) return;
        $.preventDefault(), $.stopPropagation(), o.closePopover();
        break;
    }
  }
  function v($) {
    f.value || $.key === Ve.Space && $.preventDefault();
  }
  function g($) {
    var S, w;
    e.disabled || (f.value ? (o.closePopover(), (S = ie(o.button)) == null || S.focus()) : ($.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover(), (w = ie(o.button)) == null || w.focus()));
  }
  function b($) {
    $.preventDefault(), $.stopPropagation();
  }
  let k = Ys();
  function P() {
    let $ = ie(o.panel);
    if (!$) return;
    function S() {
      It(k.value, { [jt.Forwards]: () => Xt($, Dt.First), [jt.Backwards]: () => Xt($, Dt.Last) }) === lr.Error && Xt(Vn().filter((w) => w.dataset.headlessuiFocusGuard !== "true"), It(k.value, { [jt.Forwards]: Dt.Next, [jt.Backwards]: Dt.Previous }), { relativeTo: ie(o.button) });
    }
    S();
  }
  return () => {
    let $ = o.popoverState.value === 0, S = { open: $ }, { ...w } = e, x = f.value ? { ref: u, type: p.value, onKeydown: m, onClick: g } : { ref: u, id: a, type: p.value, "aria-expanded": o.popoverState.value === 0, "aria-controls": ie(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: v, onClick: g, onMousedown: b };
    return oe(se, [at({ ourProps: x, theirProps: { ...n, ...w }, slot: S, attrs: n, slots: r, name: "PopoverButton" }), $ && !f.value && o.isPortalled.value && oe(wn, { id: h, features: fn.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: P })]);
  };
} });
ae({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: r }) {
  let t = Ar("PopoverOverlay"), i = `headlessui-popover-overlay-${kt()}`, a = ja(), o = j(() => a !== null ? (a.value & Et.Open) === Et.Open : t.popoverState.value === 0);
  function s() {
    t.closePopover();
  }
  return () => {
    let l = { open: t.popoverState.value === 0 };
    return at({ ourProps: { id: i, "aria-hidden": !0, onClick: s }, theirProps: e, slot: l, attrs: n, slots: r, features: dn.RenderStrategy | dn.Static, visible: o.value, name: "PopoverOverlay" });
  };
} });
ae({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-panel-${kt()}`, { focus: o } = e, s = Ar("PopoverPanel"), l = j(() => zt(s.panel)), c = `headlessui-focus-sentinel-before-${kt()}`, d = `headlessui-focus-sentinel-after-${kt()}`;
  t({ el: s.panel, $el: s.panel }), he(() => {
    s.panelId.value = a;
  }), Se(() => {
    s.panelId.value = null;
  }), fe(_s, s.panelId), ge(() => {
    var b, k;
    if (!o || s.popoverState.value !== 0 || !s.panel) return;
    let P = (b = l.value) == null ? void 0 : b.activeElement;
    (k = ie(s.panel)) != null && k.contains(P) || Xt(ie(s.panel), Dt.First);
  });
  let f = ja(), u = j(() => f !== null ? (f.value & Et.Open) === Et.Open : s.popoverState.value === 0);
  function h(b) {
    var k, P;
    switch (b.key) {
      case Ve.Escape:
        if (s.popoverState.value !== 0 || !ie(s.panel) || l.value && !((k = ie(s.panel)) != null && k.contains(l.value.activeElement))) return;
        b.preventDefault(), b.stopPropagation(), s.closePopover(), (P = ie(s.button)) == null || P.focus();
        break;
    }
  }
  function p(b) {
    var k, P, $, S, w;
    let x = b.relatedTarget;
    x && ie(s.panel) && ((k = ie(s.panel)) != null && k.contains(x) || (s.closePopover(), (($ = (P = ie(s.beforePanelSentinel)) == null ? void 0 : P.contains) != null && $.call(P, x) || (w = (S = ie(s.afterPanelSentinel)) == null ? void 0 : S.contains) != null && w.call(S, x)) && x.focus({ preventScroll: !0 })));
  }
  let m = Ys();
  function v() {
    let b = ie(s.panel);
    if (!b) return;
    function k() {
      It(m.value, { [jt.Forwards]: () => {
        var P;
        Xt(b, Dt.First) === lr.Error && ((P = ie(s.afterPanelSentinel)) == null || P.focus());
      }, [jt.Backwards]: () => {
        var P;
        (P = ie(s.button)) == null || P.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function g() {
    let b = ie(s.panel);
    if (!b) return;
    function k() {
      It(m.value, { [jt.Forwards]: () => {
        let P = ie(s.button), $ = ie(s.panel);
        if (!P) return;
        let S = Vn(), w = S.indexOf(P), x = S.slice(0, w + 1), I = [...S.slice(w + 1), ...x];
        for (let O of I.slice()) if (O.dataset.headlessuiFocusGuard === "true" || $ != null && $.contains(O)) {
          let C = I.indexOf(O);
          C !== -1 && I.splice(C, 1);
        }
        Xt(I, Dt.First, { sorted: !1 });
      }, [jt.Backwards]: () => {
        var P;
        Xt(b, Dt.Previous) === lr.Error && ((P = ie(s.button)) == null || P.focus());
      } });
    }
    k();
  }
  return () => {
    let b = { open: s.popoverState.value === 0, close: s.close }, { focus: k, ...P } = e, $ = { ref: s.panel, id: a, onKeydown: h, onFocusout: o && s.popoverState.value === 0 ? p : void 0, tabIndex: -1 };
    return at({ ourProps: $, theirProps: { ...n, ...P }, attrs: n, slot: b, slots: { ...r, default: (...S) => {
      var w;
      return [oe(se, [u.value && s.isPortalled.value && oe(wn, { id: c, ref: s.beforePanelSentinel, features: fn.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v }), (w = r.default) == null ? void 0 : w.call(r, ...S), u.value && s.isPortalled.value && oe(wn, { id: d, ref: s.afterPanelSentinel, features: fn.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: dn.RenderStrategy | dn.Static, visible: u.value, name: "PopoverPanel" });
  };
} });
ae({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null), a = Cn([]), o = j(() => zt(i)), s = Zm();
  t({ el: i, $el: i });
  function l(u) {
    let h = a.value.indexOf(u);
    h !== -1 && a.value.splice(h, 1);
  }
  function c(u) {
    return a.value.push(u), () => {
      l(u);
    };
  }
  function d() {
    var u;
    let h = o.value;
    if (!h) return !1;
    let p = h.activeElement;
    return (u = ie(i)) != null && u.contains(p) ? !0 : a.value.some((m) => {
      var v, g;
      return ((v = h.getElementById(m.buttonId.value)) == null ? void 0 : v.contains(p)) || ((g = h.getElementById(m.panelId.value)) == null ? void 0 : g.contains(p));
    });
  }
  function f(u) {
    for (let h of a.value) h.buttonId.value !== u && h.close();
  }
  return fe(Ws, { registerPopover: c, unregisterPopover: l, isFocusWithinPopoverGroup: d, closeOthers: f, mainTreeNodeRef: s.mainTreeNodeRef }), () => oe(se, [at({ ourProps: { ref: i }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: r, name: "PopoverGroup" }), oe(s.MainTreeNode)]);
} });
let qs = Symbol("LabelContext");
function Zs() {
  let e = ve(qs, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, Zs), n;
  }
  return e;
}
function u0({ slot: e = {}, name: n = "Label", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return fe(qs, { register: i, slot: e, name: n, props: r }), j(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
ae({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-label-${kt()}`, a = Zs();
  return he(() => Se(a.register(i))), () => {
    let { name: o = "Label", slot: s = {}, props: l = {} } = a, { passive: c, ...d } = e, f = { ...Object.entries(l).reduce((u, [h, p]) => Object.assign(u, { [h]: te(p) }), {}), id: i };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), at({ ourProps: f, theirProps: d, slot: s, attrs: r, slots: n, name: o });
  };
} });
let Ks = Symbol("GroupContext");
ae({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = u0({ name: "SwitchLabel", props: { htmlFor: j(() => {
    var o;
    return (o = t.value) == null ? void 0 : o.id;
  }), onClick(o) {
    t.value && (o.currentTarget.tagName === "LABEL" && o.preventDefault(), t.value.click(), t.value.focus({ preventScroll: !0 }));
  } } }), a = Xm({ name: "SwitchDescription" });
  return fe(Ks, { switchRef: t, labelledby: i, describedby: a }), () => at({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: r, name: "SwitchGroup" });
} });
ae({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: null }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a;
  let o = (a = e.id) != null ? a : `headlessui-switch-${kt()}`, s = ve(Ks, null), [l, c] = km(j(() => e.modelValue), (b) => n("update:modelValue", b), j(() => e.defaultChecked));
  function d() {
    c(!l.value);
  }
  let f = F(null), u = s === null ? f : s.switchRef, h = Ya(j(() => ({ as: e.as, type: r.type })), u);
  i({ el: u, $el: u });
  function p(b) {
    b.preventDefault(), d();
  }
  function m(b) {
    b.key === Ve.Space ? (b.preventDefault(), d()) : b.key === Ve.Enter && Um(b.currentTarget);
  }
  function v(b) {
    b.preventDefault();
  }
  let g = j(() => {
    var b, k;
    return (k = (b = ie(u)) == null ? void 0 : b.closest) == null ? void 0 : k.call(b, "form");
  });
  return he(() => {
    Me([g], () => {
      if (!g.value || e.defaultChecked === void 0) return;
      function b() {
        c(e.defaultChecked);
      }
      return g.value.addEventListener("reset", b), () => {
        var k;
        (k = g.value) == null || k.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: b, value: k, form: P, tabIndex: $, ...S } = e, w = { checked: l.value }, x = { id: o, ref: u, role: "switch", type: h.value, tabIndex: $ === -1 ? 0 : $, "aria-checked": l.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: p, onKeyup: m, onKeypress: v };
    return oe(se, [b != null && l.value != null ? oe(wn, Vm({ features: fn.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: P, disabled: S.disabled, name: b, value: k })) : null, at({ ourProps: x, theirProps: { ...r, ...Is(S, ["modelValue", "defaultChecked"]) }, slot: w, attrs: r, slots: t, name: "Switch" })]);
  };
} });
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(qt, function() {
    var r = 1e3, t = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", l = "hour", c = "day", d = "week", f = "month", u = "quarter", h = "year", p = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(y) {
      var A = ["th", "st", "nd", "rd"], E = y % 100;
      return "[" + y + (A[(E - 20) % 10] || A[E] || A[0]) + "]";
    } }, k = function(y, A, E) {
      var R = String(y);
      return !R || R.length >= A ? y : "" + Array(A + 1 - R.length).join(E) + y;
    }, P = { s: k, z: function(y) {
      var A = -y.utcOffset(), E = Math.abs(A), R = Math.floor(E / 60), T = E % 60;
      return (A <= 0 ? "+" : "-") + k(R, 2, "0") + ":" + k(T, 2, "0");
    }, m: function y(A, E) {
      if (A.date() < E.date()) return -y(E, A);
      var R = 12 * (E.year() - A.year()) + (E.month() - A.month()), T = A.clone().add(R, f), B = E - T < 0, N = A.clone().add(R + (B ? -1 : 1), f);
      return +(-(R + (E - T) / (B ? T - N : N - T)) || 0);
    }, a: function(y) {
      return y < 0 ? Math.ceil(y) || 0 : Math.floor(y);
    }, p: function(y) {
      return { M: f, y: h, w: d, d: c, D: p, h: l, m: s, s: o, ms: a, Q: u }[y] || String(y || "").toLowerCase().replace(/s$/, "");
    }, u: function(y) {
      return y === void 0;
    } }, $ = "en", S = {};
    S[$] = b;
    var w = "$isDayjsObject", x = function(y) {
      return y instanceof Z || !(!y || !y[w]);
    }, I = function y(A, E, R) {
      var T;
      if (!A) return $;
      if (typeof A == "string") {
        var B = A.toLowerCase();
        S[B] && (T = B), E && (S[B] = E, T = B);
        var N = A.split("-");
        if (!T && N.length > 1) return y(N[0]);
      } else {
        var z = A.name;
        S[z] = A, T = z;
      }
      return !R && T && ($ = T), T || !R && $;
    }, O = function(y, A) {
      if (x(y)) return y.clone();
      var E = typeof A == "object" ? A : {};
      return E.date = y, E.args = arguments, new Z(E);
    }, C = P;
    C.l = I, C.i = x, C.w = function(y, A) {
      return O(y, { locale: A.$L, utc: A.$u, x: A.$x, $offset: A.$offset });
    };
    var Z = function() {
      function y(E) {
        this.$L = I(E.locale, null, !0), this.parse(E), this.$x = this.$x || E.x || {}, this[w] = !0;
      }
      var A = y.prototype;
      return A.parse = function(E) {
        this.$d = function(R) {
          var T = R.date, B = R.utc;
          if (T === null) return /* @__PURE__ */ new Date(NaN);
          if (C.u(T)) return /* @__PURE__ */ new Date();
          if (T instanceof Date) return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var N = T.match(v);
            if (N) {
              var z = N[2] - 1 || 0, _ = (N[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(N[1], z, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, _)) : new Date(N[1], z, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, _);
            }
          }
          return new Date(T);
        }(E), this.init();
      }, A.init = function() {
        var E = this.$d;
        this.$y = E.getFullYear(), this.$M = E.getMonth(), this.$D = E.getDate(), this.$W = E.getDay(), this.$H = E.getHours(), this.$m = E.getMinutes(), this.$s = E.getSeconds(), this.$ms = E.getMilliseconds();
      }, A.$utils = function() {
        return C;
      }, A.isValid = function() {
        return this.$d.toString() !== m;
      }, A.isSame = function(E, R) {
        var T = O(E);
        return this.startOf(R) <= T && T <= this.endOf(R);
      }, A.isAfter = function(E, R) {
        return O(E) < this.startOf(R);
      }, A.isBefore = function(E, R) {
        return this.endOf(R) < O(E);
      }, A.$g = function(E, R, T) {
        return C.u(E) ? this[R] : this.set(T, E);
      }, A.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, A.valueOf = function() {
        return this.$d.getTime();
      }, A.startOf = function(E, R) {
        var T = this, B = !!C.u(R) || R, N = C.p(E), z = function(De, ue) {
          var we = C.w(T.$u ? Date.UTC(T.$y, ue, De) : new Date(T.$y, ue, De), T);
          return B ? we : we.endOf(c);
        }, _ = function(De, ue) {
          return C.w(T.toDate()[De].apply(T.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), T);
        }, K = this.$W, ee = this.$M, ce = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case h:
            return B ? z(1, 0) : z(31, 11);
          case f:
            return B ? z(1, ee) : z(0, ee + 1);
          case d:
            var $e = this.$locale().weekStart || 0, Be = (K < $e ? K + 7 : K) - $e;
            return z(B ? ce - Be : ce + (6 - Be), ee);
          case c:
          case p:
            return _(xe + "Hours", 0);
          case l:
            return _(xe + "Minutes", 1);
          case s:
            return _(xe + "Seconds", 2);
          case o:
            return _(xe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, A.endOf = function(E) {
        return this.startOf(E, !1);
      }, A.$set = function(E, R) {
        var T, B = C.p(E), N = "set" + (this.$u ? "UTC" : ""), z = (T = {}, T[c] = N + "Date", T[p] = N + "Date", T[f] = N + "Month", T[h] = N + "FullYear", T[l] = N + "Hours", T[s] = N + "Minutes", T[o] = N + "Seconds", T[a] = N + "Milliseconds", T)[B], _ = B === c ? this.$D + (R - this.$W) : R;
        if (B === f || B === h) {
          var K = this.clone().set(p, 1);
          K.$d[z](_), K.init(), this.$d = K.set(p, Math.min(this.$D, K.daysInMonth())).$d;
        } else z && this.$d[z](_);
        return this.init(), this;
      }, A.set = function(E, R) {
        return this.clone().$set(E, R);
      }, A.get = function(E) {
        return this[C.p(E)]();
      }, A.add = function(E, R) {
        var T, B = this;
        E = Number(E);
        var N = C.p(R), z = function(ee) {
          var ce = O(B);
          return C.w(ce.date(ce.date() + Math.round(ee * E)), B);
        };
        if (N === f) return this.set(f, this.$M + E);
        if (N === h) return this.set(h, this.$y + E);
        if (N === c) return z(1);
        if (N === d) return z(7);
        var _ = (T = {}, T[s] = t, T[l] = i, T[o] = r, T)[N] || 1, K = this.$d.getTime() + E * _;
        return C.w(K, this);
      }, A.subtract = function(E, R) {
        return this.add(-1 * E, R);
      }, A.format = function(E) {
        var R = this, T = this.$locale();
        if (!this.isValid()) return T.invalidDate || m;
        var B = E || "YYYY-MM-DDTHH:mm:ssZ", N = C.z(this), z = this.$H, _ = this.$m, K = this.$M, ee = T.weekdays, ce = T.months, xe = T.meridiem, $e = function(ue, we, Oe, ze) {
          return ue && (ue[we] || ue(R, B)) || Oe[we].slice(0, ze);
        }, Be = function(ue) {
          return C.s(z % 12 || 12, ue, "0");
        }, De = xe || function(ue, we, Oe) {
          var ze = ue < 12 ? "AM" : "PM";
          return Oe ? ze.toLowerCase() : ze;
        };
        return B.replace(g, function(ue, we) {
          return we || function(Oe) {
            switch (Oe) {
              case "YY":
                return String(R.$y).slice(-2);
              case "YYYY":
                return C.s(R.$y, 4, "0");
              case "M":
                return K + 1;
              case "MM":
                return C.s(K + 1, 2, "0");
              case "MMM":
                return $e(T.monthsShort, K, ce, 3);
              case "MMMM":
                return $e(ce, K);
              case "D":
                return R.$D;
              case "DD":
                return C.s(R.$D, 2, "0");
              case "d":
                return String(R.$W);
              case "dd":
                return $e(T.weekdaysMin, R.$W, ee, 2);
              case "ddd":
                return $e(T.weekdaysShort, R.$W, ee, 3);
              case "dddd":
                return ee[R.$W];
              case "H":
                return String(z);
              case "HH":
                return C.s(z, 2, "0");
              case "h":
                return Be(1);
              case "hh":
                return Be(2);
              case "a":
                return De(z, _, !0);
              case "A":
                return De(z, _, !1);
              case "m":
                return String(_);
              case "mm":
                return C.s(_, 2, "0");
              case "s":
                return String(R.$s);
              case "ss":
                return C.s(R.$s, 2, "0");
              case "SSS":
                return C.s(R.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(ue) || N.replace(":", "");
        });
      }, A.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, A.diff = function(E, R, T) {
        var B, N = this, z = C.p(R), _ = O(E), K = (_.utcOffset() - this.utcOffset()) * t, ee = this - _, ce = function() {
          return C.m(N, _);
        };
        switch (z) {
          case h:
            B = ce() / 12;
            break;
          case f:
            B = ce();
            break;
          case u:
            B = ce() / 3;
            break;
          case d:
            B = (ee - K) / 6048e5;
            break;
          case c:
            B = (ee - K) / 864e5;
            break;
          case l:
            B = ee / i;
            break;
          case s:
            B = ee / t;
            break;
          case o:
            B = ee / r;
            break;
          default:
            B = ee;
        }
        return T ? B : C.a(B);
      }, A.daysInMonth = function() {
        return this.endOf(f).$D;
      }, A.$locale = function() {
        return S[this.$L];
      }, A.locale = function(E, R) {
        if (!E) return this.$L;
        var T = this.clone(), B = I(E, R, !0);
        return B && (T.$L = B), T;
      }, A.clone = function() {
        return C.w(this.$d, this);
      }, A.toDate = function() {
        return new Date(this.valueOf());
      }, A.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, A.toISOString = function() {
        return this.$d.toISOString();
      }, A.toString = function() {
        return this.$d.toUTCString();
      }, y;
    }(), Y = Z.prototype;
    return O.prototype = Y, [["$ms", a], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", h], ["$D", p]].forEach(function(y) {
      Y[y[1]] = function(A) {
        return this.$g(A, y[0], y[1]);
      };
    }), O.extend = function(y, A) {
      return y.$i || (y(A, Z, O), y.$i = !0), O;
    }, O.locale = I, O.isDayjs = x, O.unix = function(y) {
      return O(1e3 * y);
    }, O.en = S[$], O.Ls = S, O.p = {}, O;
  });
})(c0);
var d0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(qt, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
    return function(i, a, o) {
      var s, l = function(u, h, p) {
        p === void 0 && (p = {});
        var m = new Date(u), v = function(g, b) {
          b === void 0 && (b = {});
          var k = b.timeZoneName || "short", P = g + "|" + k, $ = t[P];
          return $ || ($ = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: g, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: k }), t[P] = $), $;
        }(h, p);
        return v.formatToParts(m);
      }, c = function(u, h) {
        for (var p = l(u, h), m = [], v = 0; v < p.length; v += 1) {
          var g = p[v], b = g.type, k = g.value, P = r[b];
          P >= 0 && (m[P] = parseInt(k, 10));
        }
        var $ = m[3], S = $ === 24 ? 0 : $, w = m[0] + "-" + m[1] + "-" + m[2] + " " + S + ":" + m[4] + ":" + m[5] + ":000", x = +u;
        return (o.utc(w).valueOf() - (x -= x % 1e3)) / 6e4;
      }, d = a.prototype;
      d.tz = function(u, h) {
        u === void 0 && (u = s);
        var p, m = this.utcOffset(), v = this.toDate(), g = v.toLocaleString("en-US", { timeZone: u }), b = Math.round((v - new Date(g)) / 1e3 / 60), k = 15 * -Math.round(v.getTimezoneOffset() / 15) - b;
        if (!Number(k)) p = this.utcOffset(0, h);
        else if (p = o(g, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(k, !0), h) {
          var P = p.utcOffset();
          p = p.add(m - P, "minute");
        }
        return p.$x.$timezone = u, p;
      }, d.offsetName = function(u) {
        var h = this.$x.$timezone || o.tz.guess(), p = l(this.valueOf(), h, { timeZoneName: u }).find(function(m) {
          return m.type.toLowerCase() === "timezonename";
        });
        return p && p.value;
      };
      var f = d.startOf;
      d.startOf = function(u, h) {
        if (!this.$x || !this.$x.$timezone) return f.call(this, u, h);
        var p = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return f.call(p, u, h).tz(this.$x.$timezone, !0);
      }, o.tz = function(u, h, p) {
        var m = p && h, v = p || h || s, g = c(+o(), v);
        if (typeof u != "string") return o(u).tz(v);
        var b = function(S, w, x) {
          var I = S - 60 * w * 1e3, O = c(I, x);
          if (w === O) return [I, w];
          var C = c(I -= 60 * (O - w) * 1e3, x);
          return O === C ? [I, O] : [S - 60 * Math.min(O, C) * 1e3, Math.max(O, C)];
        }(o.utc(u, m).valueOf(), g, v), k = b[0], P = b[1], $ = o(k).utcOffset(P);
        return $.$x.$timezone = v, $;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(u) {
        s = u;
      };
    };
  });
})(d0);
var f0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(qt, function() {
    return function(r, t, i) {
      var a = t.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, s = function(f, u, h, p, m) {
        var v = f.name ? f : f.$locale(), g = o(v[u]), b = o(v[h]), k = g || b.map(function($) {
          return $.slice(0, p);
        });
        if (!m) return k;
        var P = v.weekStart;
        return k.map(function($, S) {
          return k[(S + (P || 0)) % 7];
        });
      }, l = function() {
        return i.Ls[i.locale()];
      }, c = function(f, u) {
        return f.formats[u] || function(h) {
          return h.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(p, m, v) {
            return m || v.slice(1);
          });
        }(f.formats[u.toUpperCase()]);
      }, d = function() {
        var f = this;
        return { months: function(u) {
          return u ? u.format("MMMM") : s(f, "months");
        }, monthsShort: function(u) {
          return u ? u.format("MMM") : s(f, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return f.$locale().weekStart || 0;
        }, weekdays: function(u) {
          return u ? u.format("dddd") : s(f, "weekdays");
        }, weekdaysMin: function(u) {
          return u ? u.format("dd") : s(f, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(u) {
          return u ? u.format("ddd") : s(f, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(u) {
          return c(f.$locale(), u);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      a.localeData = function() {
        return d.bind(this)();
      }, i.localeData = function() {
        var f = l();
        return { firstDayOfWeek: function() {
          return f.weekStart || 0;
        }, weekdays: function() {
          return i.weekdays();
        }, weekdaysShort: function() {
          return i.weekdaysShort();
        }, weekdaysMin: function() {
          return i.weekdaysMin();
        }, months: function() {
          return i.months();
        }, monthsShort: function() {
          return i.monthsShort();
        }, longDateFormat: function(u) {
          return c(f, u);
        }, meridiem: f.meridiem, ordinal: f.ordinal };
      }, i.months = function() {
        return s(l(), "months");
      }, i.monthsShort = function() {
        return s(l(), "monthsShort", "months", 3);
      }, i.weekdays = function(f) {
        return s(l(), "weekdays", null, null, f);
      }, i.weekdaysShort = function(f) {
        return s(l(), "weekdaysShort", "weekdays", 3, f);
      }, i.weekdaysMin = function(f) {
        return s(l(), "weekdaysMin", "weekdays", 2, f);
      };
    };
  });
})(f0);
var h0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(qt, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, i, a) {
      var o = i.prototype, s = o.format;
      a.en.formats = r, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, d = function(f, u) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, p, m) {
            var v = m && m.toUpperCase();
            return p || u[m] || r[m] || u[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, b, k) {
              return b || k.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, d);
      };
    };
  });
})(h0);
var p0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(qt, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(g) {
        this[v] = +g;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(g) {
        if (!g || g === "Z") return 0;
        var b = g.match(/([+-]|\d\d)/g), k = 60 * b[1] + (+b[2] || 0);
        return k === 0 ? 0 : b[0] === "+" ? -k : k;
      }(v);
    }], u = function(v) {
      var g = l[v];
      return g && (g.indexOf ? g : g.s.concat(g.f));
    }, h = function(v, g) {
      var b, k = l.meridiem;
      if (k) {
        for (var P = 1; P <= 24; P += 1) if (v.indexOf(k(P, 0, g)) > -1) {
          b = P > 12;
          break;
        }
      } else b = v === (g ? "pm" : "PM");
      return b;
    }, p = { A: [s, function(v) {
      this.afternoon = h(v, !1);
    }], a: [s, function(v) {
      this.afternoon = h(v, !0);
    }], Q: [i, function(v) {
      this.month = 3 * (v - 1) + 1;
    }], S: [i, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [a, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [o, d("seconds")], ss: [o, d("seconds")], m: [o, d("minutes")], mm: [o, d("minutes")], H: [o, d("hours")], h: [o, d("hours")], HH: [o, d("hours")], hh: [o, d("hours")], D: [o, d("day")], DD: [a, d("day")], Do: [s, function(v) {
      var g = l.ordinal, b = v.match(/\d+/);
      if (this.day = b[0], g) for (var k = 1; k <= 31; k += 1) g(k).replace(/\[|\]/g, "") === v && (this.day = k);
    }], w: [o, d("week")], ww: [a, d("week")], M: [o, d("month")], MM: [a, d("month")], MMM: [s, function(v) {
      var g = u("months"), b = (u("monthsShort") || g.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(v) + 1;
      if (b < 1) throw new Error();
      this.month = b % 12 || b;
    }], MMMM: [s, function(v) {
      var g = u("months").indexOf(v) + 1;
      if (g < 1) throw new Error();
      this.month = g % 12 || g;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, d("year")], Z: f, ZZ: f };
    function m(v) {
      var g, b;
      g = v, b = l && l.formats;
      for (var k = (v = g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, C, Z) {
        var Y = Z && Z.toUpperCase();
        return C || b[Z] || r[Z] || b[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, A, E) {
          return A || E.slice(1);
        });
      })).match(t), P = k.length, $ = 0; $ < P; $ += 1) {
        var S = k[$], w = p[S], x = w && w[0], I = w && w[1];
        k[$] = I ? { regex: x, parser: I } : S.replace(/^\[|\]$/g, "");
      }
      return function(O) {
        for (var C = {}, Z = 0, Y = 0; Z < P; Z += 1) {
          var y = k[Z];
          if (typeof y == "string") Y += y.length;
          else {
            var A = y.regex, E = y.parser, R = O.slice(Y), T = A.exec(R)[0];
            E.call(C, T), O = O.replace(T, "");
          }
        }
        return function(B) {
          var N = B.afternoon;
          if (N !== void 0) {
            var z = B.hours;
            N ? z < 12 && (B.hours += 12) : z === 12 && (B.hours = 0), delete B.afternoon;
          }
        }(C), C;
      };
    }
    return function(v, g, b) {
      b.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var k = g.prototype, P = k.parse;
      k.parse = function($) {
        var S = $.date, w = $.utc, x = $.args;
        this.$u = w;
        var I = x[1];
        if (typeof I == "string") {
          var O = x[2] === !0, C = x[3] === !0, Z = O || C, Y = x[2];
          C && (Y = x[2]), l = this.$locale(), !O && Y && (l = b.Ls[Y]), this.$d = function(R, T, B, N) {
            try {
              if (["x", "X"].indexOf(T) > -1) return new Date((T === "X" ? 1e3 : 1) * R);
              var z = m(T)(R), _ = z.year, K = z.month, ee = z.day, ce = z.hours, xe = z.minutes, $e = z.seconds, Be = z.milliseconds, De = z.zone, ue = z.week, we = /* @__PURE__ */ new Date(), Oe = ee || (_ || K ? 1 : we.getDate()), ze = _ || we.getFullYear(), _e = 0;
              _ && !K || (_e = K > 0 ? K - 1 : we.getMonth());
              var ot, ut = ce || 0, ct = xe || 0, dt = $e || 0, ft = Be || 0;
              return De ? new Date(Date.UTC(ze, _e, Oe, ut, ct, dt, ft + 60 * De.offset * 1e3)) : B ? new Date(Date.UTC(ze, _e, Oe, ut, ct, dt, ft)) : (ot = new Date(ze, _e, Oe, ut, ct, dt, ft), ue && (ot = N(ot).week(ue).toDate()), ot);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, I, w, b), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), Z && S != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (I instanceof Array) for (var y = I.length, A = 1; A <= y; A += 1) {
          x[1] = I[A - 1];
          var E = b.apply(this, x);
          if (E.isValid()) {
            this.$d = E.$d, this.$L = E.$L, this.init();
            break;
          }
          A === y && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else P.call(this, $);
      };
    };
  });
})(p0);
var v0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(qt, function() {
    return function(r, t, i) {
      t.prototype.isToday = function() {
        var a = "YYYY-MM-DD", o = i();
        return this.format(a) === o.format(a);
      };
    };
  });
})(v0);
var m0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(qt, function() {
    return function(r, t, i) {
      t.prototype.isBetween = function(a, o, s, l) {
        var c = i(a), d = i(o), f = (l = l || "()")[0] === "(", u = l[1] === ")";
        return (f ? this.isAfter(c, s) : !this.isBefore(c, s)) && (u ? this.isBefore(d, s) : !this.isAfter(d, s)) || (f ? this.isBefore(c, s) : !this.isAfter(c, s)) && (u ? this.isAfter(d, s) : !this.isBefore(d, s));
      };
    };
  });
})(m0);
var g0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(qt, function() {
    var r, t, i = 1e3, a = 6e4, o = 36e5, s = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, u = { years: c, months: d, days: s, hours: o, minutes: a, seconds: i, milliseconds: 1, weeks: 6048e5 }, h = function(S) {
      return S instanceof P;
    }, p = function(S, w, x) {
      return new P(S, x, w.$l);
    }, m = function(S) {
      return t.p(S) + "s";
    }, v = function(S) {
      return S < 0;
    }, g = function(S) {
      return v(S) ? Math.ceil(S) : Math.floor(S);
    }, b = function(S) {
      return Math.abs(S);
    }, k = function(S, w) {
      return S ? v(S) ? { negative: !0, format: "" + b(S) + w } : { negative: !1, format: "" + S + w } : { negative: !1, format: "" };
    }, P = function() {
      function S(x, I, O) {
        var C = this;
        if (this.$d = {}, this.$l = O, x === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return p(x * u[m(I)], this);
        if (typeof x == "number") return this.$ms = x, this.parseFromMilliseconds(), this;
        if (typeof x == "object") return Object.keys(x).forEach(function(y) {
          C.$d[m(y)] = x[y];
        }), this.calMilliseconds(), this;
        if (typeof x == "string") {
          var Z = x.match(f);
          if (Z) {
            var Y = Z.slice(2).map(function(y) {
              return y != null ? Number(y) : 0;
            });
            return this.$d.years = Y[0], this.$d.months = Y[1], this.$d.weeks = Y[2], this.$d.days = Y[3], this.$d.hours = Y[4], this.$d.minutes = Y[5], this.$d.seconds = Y[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var w = S.prototype;
      return w.calMilliseconds = function() {
        var x = this;
        this.$ms = Object.keys(this.$d).reduce(function(I, O) {
          return I + (x.$d[O] || 0) * u[O];
        }, 0);
      }, w.parseFromMilliseconds = function() {
        var x = this.$ms;
        this.$d.years = g(x / c), x %= c, this.$d.months = g(x / d), x %= d, this.$d.days = g(x / s), x %= s, this.$d.hours = g(x / o), x %= o, this.$d.minutes = g(x / a), x %= a, this.$d.seconds = g(x / i), x %= i, this.$d.milliseconds = x;
      }, w.toISOString = function() {
        var x = k(this.$d.years, "Y"), I = k(this.$d.months, "M"), O = +this.$d.days || 0;
        this.$d.weeks && (O += 7 * this.$d.weeks);
        var C = k(O, "D"), Z = k(this.$d.hours, "H"), Y = k(this.$d.minutes, "M"), y = this.$d.seconds || 0;
        this.$d.milliseconds && (y += this.$d.milliseconds / 1e3, y = Math.round(1e3 * y) / 1e3);
        var A = k(y, "S"), E = x.negative || I.negative || C.negative || Z.negative || Y.negative || A.negative, R = Z.format || Y.format || A.format ? "T" : "", T = (E ? "-" : "") + "P" + x.format + I.format + C.format + R + Z.format + Y.format + A.format;
        return T === "P" || T === "-P" ? "P0D" : T;
      }, w.toJSON = function() {
        return this.toISOString();
      }, w.format = function(x) {
        var I = x || "YYYY-MM-DDTHH:mm:ss", O = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return I.replace(l, function(C, Z) {
          return Z || String(O[C]);
        });
      }, w.as = function(x) {
        return this.$ms / u[m(x)];
      }, w.get = function(x) {
        var I = this.$ms, O = m(x);
        return O === "milliseconds" ? I %= 1e3 : I = O === "weeks" ? g(I / u[O]) : this.$d[O], I || 0;
      }, w.add = function(x, I, O) {
        var C;
        return C = I ? x * u[m(I)] : h(x) ? x.$ms : p(x, this).$ms, p(this.$ms + C * (O ? -1 : 1), this);
      }, w.subtract = function(x, I) {
        return this.add(x, I, !0);
      }, w.locale = function(x) {
        var I = this.clone();
        return I.$l = x, I;
      }, w.clone = function() {
        return p(this.$ms, this);
      }, w.humanize = function(x) {
        return r().add(this.$ms, "ms").locale(this.$l).fromNow(!x);
      }, w.valueOf = function() {
        return this.asMilliseconds();
      }, w.milliseconds = function() {
        return this.get("milliseconds");
      }, w.asMilliseconds = function() {
        return this.as("milliseconds");
      }, w.seconds = function() {
        return this.get("seconds");
      }, w.asSeconds = function() {
        return this.as("seconds");
      }, w.minutes = function() {
        return this.get("minutes");
      }, w.asMinutes = function() {
        return this.as("minutes");
      }, w.hours = function() {
        return this.get("hours");
      }, w.asHours = function() {
        return this.as("hours");
      }, w.days = function() {
        return this.get("days");
      }, w.asDays = function() {
        return this.as("days");
      }, w.weeks = function() {
        return this.get("weeks");
      }, w.asWeeks = function() {
        return this.as("weeks");
      }, w.months = function() {
        return this.get("months");
      }, w.asMonths = function() {
        return this.as("months");
      }, w.years = function() {
        return this.get("years");
      }, w.asYears = function() {
        return this.as("years");
      }, S;
    }(), $ = function(S, w, x) {
      return S.add(w.years() * x, "y").add(w.months() * x, "M").add(w.days() * x, "d").add(w.hours() * x, "h").add(w.minutes() * x, "m").add(w.seconds() * x, "s").add(w.milliseconds() * x, "ms");
    };
    return function(S, w, x) {
      r = x, t = x().$utils(), x.duration = function(C, Z) {
        var Y = x.locale();
        return p(C, { $l: Y }, Z);
      }, x.isDuration = h;
      var I = w.prototype.add, O = w.prototype.subtract;
      w.prototype.add = function(C, Z) {
        return h(C) ? $(this, C, 1) : I.bind(this)(C, Z);
      }, w.prototype.subtract = function(C, Z) {
        return h(C) ? $(this, C, -1) : O.bind(this)(C, Z);
      };
    };
  });
})(g0);
var y0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(qt, function() {
    var r = "week", t = "year";
    return function(i, a, o) {
      var s = a.prototype;
      s.week = function(l) {
        if (l === void 0 && (l = null), l !== null) return this.add(7 * (l - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = o(this).startOf(t).add(1, t).date(c), f = o(this).endOf(r);
          if (d.isBefore(f)) return 1;
        }
        var u = o(this).startOf(t).date(c).startOf(r).subtract(1, "millisecond"), h = this.diff(u, r, !0);
        return h < 0 ? o(this).startOf("week").week() : Math.ceil(h);
      }, s.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(y0);
Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({})).map(
    ([e, n]) => {
      var r;
      return [(r = e.match(/([\w-]*)\.js$/)) == null ? void 0 : r[1], n];
    }
  )
);
const b0 = { class: "tc-flex tc-items-center tc-space-x-2 tc-text-base tc-text-gray-700" }, Bg = {
  __name: "CountdownComponent",
  props: {
    seconds: {
      type: Number,
      default: 30
    }
  },
  emits: ["reload"],
  setup(e, { emit: n }) {
    const r = e, t = n, i = F(r.seconds), a = F(!1);
    let o = null;
    function s() {
      o || (o = setInterval(() => {
        i.value > 0 ? i.value-- : (i.value = r.seconds, t("reload"));
      }, 1e3));
    }
    function l() {
      clearInterval(o), o = null;
    }
    function c() {
      a.value = !a.value, a.value ? s() : l();
    }
    return Io(() => {
      l();
    }), (d, f) => (D(), L("div", b0, [
      M("span", null, "Page will be reloaded after " + Q(i.value) + " sec.", 1),
      X(te($o), {
        size: "sm",
        onClick: c
      }, {
        default: be(() => [
          (D(), me(un(a.value ? te($c) : te(kc)), { class: "tc-w-4 tc-h-4" }))
        ]),
        _: 1
      }),
      X(te($o), {
        size: "sm",
        onClick: f[0] || (f[0] = (u) => t("reload"))
      }, {
        default: be(() => [
          X(te(mc), { class: "tc-w-4 tc-h-4" })
        ]),
        _: 1
      })
    ]));
  }
}, w0 = "tc-font-semibold tc-rounded-md tc-inline-flex tc-items-center", Vg = {
  __name: "Badge",
  props: {
    size: {
      type: String,
      default: "sm"
    },
    color: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const n = {
      xs: "tc-text-[10px] tc-px-1 tc-py-0.5",
      sm: "tc-text-xs tc-px-2 tc-py-0.5",
      md: "tc-text-sm tc-px-2.5 tc-py-1",
      lg: "tc-text-base tc-px-3 tc-py-1.5",
      xl: "tc-text-lg tc-px-4 tc-py-2"
    }, r = {
      default: "tc-bg-gray-500 tc-text-white",
      purple: "tc-bg-tonik-purple tc-text-white",
      blue: "tc-bg-tendo-blue tc-text-white",
      white: "tc-bg-gray-300 tc-text-black",
      black: "tc-bg-black tc-text-white",
      gray: "tc-bg-gray-600 tc-text-white",
      light: "tc-bg-gray-300 tc-text-black",
      success: "tc-bg-green-600 tc-text-white",
      warning: "tc-bg-yellow-500 tc-text-white",
      danger: "tc-bg-red-600 tc-text-white",
      error: "tc-bg-red-700 tc-text-white",
      info: "tc-bg-blue-400 tc-text-white",
      primary: "tc-bg-indigo-600 tc-text-white",
      secondary: "tc-bg-pink-500 tc-text-white",
      accent: "tc-bg-fuchsia-500 tc-text-white",
      transparent: "tc-bg-transparent tc-border tc-border-gray-400 tc-text-gray-700"
    };
    return (t, i) => (D(), L("span", {
      class: pe([
        w0,
        n[e.size] || n.sm,
        r[e.color] || r.default
      ])
    }, [
      Ee(t.$slots, "default"),
      Ee(t.$slots, "icon", { class: "tc-ml-2" })
    ], 2));
  }
}, x0 = { class: "sm:tc-hidden" }, $0 = {
  id: "tabs",
  class: "tc-block tc-w-full tc-rounded-md tc-border-gray-300 tc-py-2 tc-pl-3 tc-pr-10 tc-text-base focus:tc-border-tp-primary focus:tc-outline-none focus:tc-ring-tp-primary sm:tc-text-sm",
  name: "tabs"
}, k0 = ["selected"], S0 = { class: "tc-hidden sm:tc-block" }, M0 = { class: "tc-border-b tc-border-gray-200" }, D0 = {
  "aria-label": "Tabs",
  class: "-tc-mb-px tc-flex tc-space-x-8"
}, E0 = ["aria-current"], Ng = {
  __name: "TabsComponent",
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    active: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (n, r) => (D(), L("div", null, [
      M("div", x0, [
        r[0] || (r[0] = M("label", {
          class: "tc-sr-only",
          for: "tabs"
        }, "Select a tab", -1)),
        M("select", $0, [
          (D(!0), L(se, null, Ae(e.tabs, (t) => (D(), L("option", {
            key: t.name,
            selected: t.id === e.active
          }, Q(t.name), 9, k0))), 128))
        ])
      ]),
      M("div", S0, [
        M("div", M0, [
          M("nav", D0, [
            (D(!0), L(se, null, Ae(e.tabs, (t) => (D(), L("a", {
              key: t.name,
              "aria-current": t.current ? "page" : void 0,
              class: pe([[t.id === e.active ? "tc-border-tp-primary tc-text-tp-primary" : "tc-border-transparent tc-text-gray-500 hover:tc-border-gray-300 hover:tc-text-gray-700", "tc-whitespace-nowrap tc-border-b-2 tc-py-4 tc-px-1 tc-text-sm tc-font-medium"], "tc-cursor-pointer"])
            }, Q(t.name), 11, E0))), 128))
          ])
        ])
      ])
    ]));
  }
}, A0 = { class: "tc-flex tc-items-center tc-justify-between tc-border-t tc-border-gray-200 tc-bg-white tc-px-4 tc-py-3 sm:tc-px-6" }, T0 = { class: "sm:tc-flex sm:tc-flex-1 sm:tc-items-center sm:tc-justify-between" }, P0 = {
  key: 0,
  class: "tc-text-basic tc-text-gray-700"
}, O0 = { "data-test": "pagination-from" }, C0 = { "data-test": "pagination-to" }, L0 = { "data-test": "pagination-total" }, R0 = {
  "aria-label": "Pagination",
  class: "tc-isolate tc-inline-flex -tc-space-x-px tc-rounded-md tc-text-xs tc-justify-center tc-items-center"
}, I0 = { class: "tc-px-3 tc-justify-center tc-uppercase" }, z0 = ["disabled"], F0 = { class: "tc-pl-3 tc-justify-center tc-inline-flex" }, Y0 = ["value"], j0 = ["value"], B0 = { class: "tc-px-3 tc-justify-center tc-font-normal tc-text-xs" }, V0 = { class: "tc-font-semibold" }, N0 = { class: "tc-px-3 tc-justify-center tc-uppercase" }, H0 = ["disabled"], Co = {
  __name: "TablePagination",
  props: {
    pagination: {
      type: Object,
      required: !0,
      default: () => ({
        current_page: 1,
        last_page: 1,
        to: 0,
        from: 0,
        total: 0,
        has_prev: !1,
        has_next: !1
      })
    },
    showResults: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["page"],
  setup(e, { emit: n }) {
    const r = n, t = e;
    function i(l) {
      var c = [];
      for (let d = 1; d <= l; d++)
        c.push(d);
      return c;
    }
    const a = () => {
      r("page", t.pagination.current_page - 1);
    }, o = () => {
      r("page", t.pagination.current_page + 1);
    }, s = (l) => {
      r("page", l);
    };
    return (l, c) => {
      var d, f, u;
      return D(), L("div", A0, [
        M("div", T0, [
          M("div", null, [
            e.showResults ? (D(), L("p", P0, [
              c[3] || (c[3] = je(" Showing " + Q(" ") + " ", -1)),
              M("span", O0, Q(((d = e.pagination) == null ? void 0 : d.from) || 0), 1),
              c[4] || (c[4] = je(" " + Q(" ") + " - " + Q(" ") + " ", -1)),
              M("span", C0, Q(((f = e.pagination) == null ? void 0 : f.to) || 0), 1),
              c[5] || (c[5] = je(" " + Q(" ") + " of " + Q(" ") + " ", -1)),
              M("span", L0, Q(((u = e.pagination) == null ? void 0 : u.total) || 0), 1),
              c[6] || (c[6] = je(" " + Q(" ") + " results ", -1))
            ])) : G("", !0)
          ]),
          M("div", null, [
            M("nav", R0, [
              M("div", I0, [
                M("button", {
                  "data-test": "pagination-prev-button",
                  disabled: !e.pagination.has_prev,
                  class: "tc-relative tc-inline-flex tc-uppercase tc-font-semibold tc-text-xs tc-text-gray-700 hover:tc-text-gray-400",
                  onClick: c[0] || (c[0] = (h) => a())
                }, [
                  X(te(xh), {
                    "aria-hidden": "true",
                    class: "tc-h-3 tc-w-3 tc-mr-2"
                  }),
                  c[7] || (c[7] = M("span", null, "Previous", -1))
                ], 8, z0)
              ]),
              c[10] || (c[10] = M("div", { class: "tc-text-gray-300" }, " | ", -1)),
              M("div", F0, [
                M("select", {
                  value: e.pagination.current_page,
                  "data-test": "pagination-select-page",
                  class: "tc-justify-center tc-block tc-px-2 tc-py-1 tc-text-sm tc-border tc-border-gray-300 tc-rounded-md focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-blue-500 focus:tc-border-blue-500",
                  onChange: c[1] || (c[1] = (h) => s(h.target.value))
                }, [
                  (D(!0), L(se, null, Ae(i(e.pagination.last_page), (h, p) => (D(), L("option", {
                    key: p,
                    value: h
                  }, Q(h), 9, j0))), 128))
                ], 40, Y0)
              ]),
              M("div", B0, [
                c[8] || (c[8] = je(" out of ", -1)),
                M("span", V0, Q(e.pagination.last_page), 1)
              ]),
              c[11] || (c[11] = M("div", { class: "tc-text-gray-300" }, " | ", -1)),
              M("div", N0, [
                M("button", {
                  "data-test": "pagination-next-button",
                  disabled: !e.pagination.has_next,
                  class: "tc-relative tc-inline-flex tc-items-center tc-uppercase tc-font-semibold tc-text-xs tc-text-gray-700 hover:tc-text-gray-400",
                  onClick: c[2] || (c[2] = (h) => o())
                }, [
                  c[9] || (c[9] = M("span", null, "Next", -1)),
                  X(te($h), {
                    "aria-hidden": "true",
                    class: "tc-h-3 tc-w-3 tc-ml-2"
                  })
                ], 8, H0)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}, W0 = { class: "tc-py-1" }, U0 = ["onClick"], _0 = {
  __name: "DropDownActions",
  props: {
    actions: {
      type: Array,
      default: () => null,
      required: !0
    },
    position: {
      type: String,
      default: "left"
    },
    buttonClass: {
      type: String,
      default: ""
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    item: {
      type: [Object, Number, String],
      default: () => null,
      required: !1
    }
  },
  setup(e) {
    const n = e, r = (t, i) => {
      t.disabled || (t.$click(n.item), i());
    };
    return (t, i) => (D(), me(te(ti), {
      as: "div",
      class: "tc-relative tc-inline-block tc-text-left"
    }, {
      default: be(() => [
        M("div", null, [
          X(te(ni), { class: "tc-flex tc-items-center tc-rounded-full tc-bg-gray-100 tc-text-gray-400 hover:tc-text-gray-600 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-indigo-500 focus:tc-ring-offset-2 focus:tc-ring-offset-gray-100" }, {
            default: be(() => [
              i[0] || (i[0] = M("span", { class: "tc-sr-only" }, "Open options", -1)),
              Ee(t.$slots, "icon", {}, () => [
                X(te(Mh), {
                  class: "tc-size-5",
                  "aria-hidden": "true"
                })
              ], !0)
            ]),
            _: 3
          })
        ]),
        X(cr, { name: "dropdown" }, {
          default: be(() => [
            X(te(ri), {
              class: pe(["tc-absolute tc-right-0 tc-z-50 tc-mt-2 tc-w-56 tc-origin-top-right tc-rounded-md tc-bg-white tc-shadow-lg tc-ring-1 tc-ring-black tc-ring-opacity-5 focus:tc-outline-none", e.position === "left" ? "tc-right-0 z-50" : "tc-left-0 tc-z-50"])
            }, {
              default: be(() => [
                M("div", W0, [
                  (D(!0), L(se, null, Ae(e.actions, (a, o) => (D(), me(te(ai), { key: o }, {
                    default: be(({ active: s, close: l }) => [
                      M("a", {
                        class: pe([[s ? "tc-bg-gray-100 tc-text-gray-900" : "tc-text-gray-700", "tc-block tc-px-4 tc-py-2 tc-text-sm"], "tc-cursor-pointer"]),
                        onClick: yt((c) => r(a, l), ["stop", "prevent"])
                      }, Q(a.label), 11, U0)
                    ]),
                    _: 2
                  }, 1024))), 128))
                ])
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 3
    }));
  }
}, q0 = /* @__PURE__ */ Sa(_0, [["__scopeId", "data-v-45f30c50"]]), Z0 = ["data-test"], K0 = {
  __name: "TableNumbering",
  props: {
    idx: {
      type: Number,
      required: !0
    },
    pagination: {
      type: Object,
      required: !0
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    dataTest: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const n = j(() => {
      const { total: i = 0 } = t.pagination || {}, a = r.value + t.idx;
      return t.reverse ? i - a + 1 : a;
    }), r = j(() => {
      const { current_page: i = 1, per_page: a = 1 } = t.pagination || {};
      return (i - 1) * a + 1;
    }), t = e;
    return (i, a) => (D(), L("span", {
      class: "text-base",
      "data-test": "batch-item-" + e.idx
    }, Q(n.value), 9, Z0));
  }
}, G0 = { class: "overflow-x-auto" }, X0 = { class: "tc-mt-8 tc-flow-root" }, J0 = { class: "tc-inline-block tc-min-w-full tc-py-2 tc-min-h-[300px] tc-align-middle" }, Q0 = { class: "tc-min-h-[300px]" }, eg = { key: 0 }, tg = {
  class: "tc-min-w-full tc-divide-y tc-divide-gray-200",
  "data-test": "table"
}, ng = { class: "tc-bg-gray-300 tc-text-gray-500 tc-text-sm" }, rg = {
  key: 0,
  class: "tc-py-2.5"
}, ag = { key: 1 }, og = { key: 2 }, ig = { class: "tc-divide-y tc-divide-gray-200" }, sg = ["data-test"], lg = {
  key: 0,
  class: "tc-whitespace-nowrap tc-text-center tc-py-4 tc-text-sm tc-font-medium tc-text-gray-900"
}, ug = {
  key: 1,
  class: "tc-whitespace-nowrap tc-text-center tc-py-4 tc-text-sm tc-font-medium tc-text-gray-900"
}, cg = {
  key: 2,
  class: "tc-relative tc-whitespace-nowrap tc-py-4 tc-text-sm tc-font-medium sm:tc-pr-0"
}, dg = { key: 1 }, Hg = {
  __name: "TableComponent",
  props: {
    numerate: {
      type: Boolean,
      default: !0
    },
    goPage: {
      type: Function,
      default: () => Function()
    },
    showPagination: {
      type: Boolean,
      default: !0
    },
    batchActions: {
      type: Array,
      default: null
    },
    itemActions: {
      type: Array,
      default: null
    },
    dataTest: {
      type: String,
      required: !0
    }
  },
  setup(e, { expose: n }) {
    const r = xn({
      batchList: [],
      batchAll: !1,
      pagination: {},
      loading: !1,
      data: []
    }), t = e, i = (c) => {
      c ? r.batchList = r.data : r.batchList = [];
    };
    (async (c) => {
      r.data = t.goPage(1);
    })();
    const o = (c) => {
      const { data: d = [], current_page: f = 1, from: u = 0, per_page: h = 30, to: p = 0, total: m = 0, last_page: v = 1 } = c;
      r.data = d, t.showPagination && (r.pagination = {
        has_next: f < v,
        has_prev: f >= 2,
        current_page: f,
        from: u,
        to: p,
        per_page: h,
        total: m,
        last_page: v
      });
    }, s = (c) => r.batchList.some((d) => d.id === c), l = (c) => {
      s(c.id) ? r.batchList = r.batchList.filter((d) => d.id !== c.id) : r.batchList.push(c), r.batchList.length > 0 && (r.batchAll = r.batchList.length === r.data.length);
    };
    return n({
      setData: o
    }), (c, d) => (D(), L("div", G0, [
      M("div", X0, [
        M("div", J0, [
          M("div", Q0, [
            e.showPagination ? (D(), L("div", eg, [
              X(Co, {
                pagination: r.pagination,
                onPage: e.goPage
              }, null, 8, ["pagination", "onPage"])
            ])) : G("", !0),
            M("table", tg, [
              M("thead", ng, [
                M("tr", null, [
                  e.batchActions ? (D(), L("th", rg, [
                    X(Xa, {
                      modelValue: r.batchAll,
                      "onUpdate:modelValue": d[0] || (d[0] = (f) => r.batchAll = f),
                      "data-test": "checkbox-batch-all" + e.dataTest,
                      type: "checkbox",
                      onClicked: i
                    }, null, 8, ["modelValue", "data-test"])
                  ])) : G("", !0),
                  e.numerate ? (D(), L("th", ag, " No. ")) : G("", !0),
                  Ee(c.$slots, "headers"),
                  e.itemActions ? (D(), L("th", og, " Actions ")) : G("", !0)
                ])
              ]),
              M("tbody", ig, [
                Ee(c.$slots, "rows"),
                (D(!0), L(se, null, Ae(r.data, (f, u) => (D(), L("tr", {
                  key: u,
                  "data-test": "row-index-" + u
                }, [
                  e.batchActions ? (D(), L("td", lg, [
                    X(Xa, {
                      "data-test": "batch-list-" + u,
                      value: s(f.id),
                      type: "checkbox",
                      "onUpdate:modelValue": (h) => l(f)
                    }, null, 8, ["data-test", "value", "onUpdate:modelValue"])
                  ])) : G("", !0),
                  e.numerate ? (D(), L("td", ug, [
                    X(K0, {
                      pagination: r.pagination,
                      idx: u,
                      "data-test": "numbering"
                    }, null, 8, ["pagination", "idx"])
                  ])) : G("", !0),
                  Ee(c.$slots, "columns", {
                    item: f,
                    class: "tc-text-center tc-text-sm"
                  }),
                  e.itemActions ? (D(), L("td", cg, [
                    X(q0, {
                      actions: e.itemActions,
                      item: f
                    }, null, 8, ["actions", "item"])
                  ])) : G("", !0)
                ], 8, sg))), 128))
              ])
            ]),
            e.showPagination ? (D(), L("div", dg, [
              X(Co, {
                pagination: r.pagination,
                "show-results": !1,
                onPage: e.goPage
              }, null, 8, ["pagination", "onPage"])
            ])) : G("", !0)
          ])
        ])
      ])
    ]));
  }
}, Wg = {
  __name: "TableSort",
  props: {
    sort: {
      type: String,
      required: !0
    },
    dir: {
      type: String,
      required: !0
    },
    active: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  emits: ["sort"],
  setup(e, { emit: n }) {
    const r = e, t = j(() => r.active), i = n, a = () => {
      i("sort", { sort: r.sort, dir: r.dir === "asc" ? "desc" : "asc" });
    };
    return (o, s) => (D(), L("span", {
      class: "tc-cursor-pointer tc-group tc-inline-flex",
      onClick: s[0] || (s[0] = (l) => a())
    }, [
      Ee(o.$slots, "default"),
      M("span", {
        class: pe([
          "tc-ml-2 tc-flex-none tc-rounded",
          { "tc-bg-tonik-purple tc-text-white": t.value, "tc-bg-gray-100 tc-text-gray-900": t.value }
        ])
      }, [
        r.dir === "asc" ? (D(), me(te(kh), {
          key: 0,
          "aria-hidden": "true",
          class: "tc-h-5 tc-w-5"
        })) : G("", !0),
        r.dir === "desc" ? (D(), me(te(wh), {
          key: 1,
          "aria-hidden": "true",
          class: "tc-h-5 tc-w-5"
        })) : G("", !0)
      ], 2)
    ]));
  }
};
export {
  Ig as A,
  zg as B,
  Fg as C,
  Yg as D,
  jg as E,
  Bg as F,
  Vg as G,
  Ng as H,
  $g as I,
  Co as J,
  Hg as K,
  Wg as L,
  q0 as M,
  hg as _,
  pg as a,
  vg as b,
  Cl as c,
  gg as d,
  Xa as e,
  yg as f,
  Ut as g,
  bg as h,
  wg as i,
  xg as j,
  kg as k,
  Sg as l,
  Mg as m,
  Dg as n,
  eo as o,
  Lg as p,
  Eg as q,
  mn as r,
  Ag as s,
  Tg as t,
  Ip as u,
  mi as v,
  Pg as w,
  Og as x,
  Cg as y,
  Rg as z
};
