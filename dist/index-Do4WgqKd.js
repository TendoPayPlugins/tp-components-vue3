import * as gn from "vue";
import { createElementBlock as j, openBlock as L, createElementVNode as C, mergeModels as je, useModel as yt, watch as De, createCommentVNode as Q, createTextVNode as He, toDisplayString as ne, withDirectives as Fe, normalizeClass as we, vModelText as Qt, createVNode as ee, unref as re, renderSlot as Ce, Fragment as ce, renderList as Le, ref as F, onMounted as se, withKeys as Bu, nextTick as Ee, computed as B, watchEffect as ve, cloneVNode as Hr, h as X, defineComponent as J, provide as de, inject as fe, onUnmounted as be, shallowRef as In, getCurrentInstance as Vr, Teleport as rr, reactive as Rn, withCtx as Me, createBlock as $e, resolveDynamicComponent as On, vModelCheckbox as _i, vModelRadio as zu, vModelSelect as qi, vShow as gt, withModifiers as Tt, TransitionGroup as Nu, Transition as Wr, isProxy as Hu, mergeProps as so, resolveComponent as Jt, onBeforeUnmount as Zi } from "vue";
function Wo(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
function Vu(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
    })
  ]);
}
function Fn(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function Wu(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    }),
    C("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
const Uu = ["data-test"], _u = {
  key: 0,
  class: "tc-text-red-500"
}, qu = { class: "tc-relative tc-mt-2 tc-rounded-md tc-shadow-sm" }, Zu = ["data-test", "disabled", "max", "min", "placeholder", "readonly", "step"], Ku = { class: "tc-mt-2 tc-text-sm tc-text-gray-500 dark:tc-text-gray-400" }, Gu = { class: "tc-mt-2 tc-text-sm tc-text-green-600 dark:tc-text-green-400" }, Xu = {
  key: 1,
  class: "block tc-mb-2"
}, Ju = ["data-test"], m1 = {
  __name: "InputNumber",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = yt(e, "modelValue"), t = n, i = () => {
      t("update:modelValue", r.value);
    };
    return De(r, i), (a, o) => {
      var s, l, c, d, f, u;
      return L(), j("div", null, [
        e.label ? (L(), j("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          class: "tc-block tc-mb-2 tc-text-base tc-font-medium tc-text-gray-900 dark:tc-text-white",
          for: "number-input"
        }, [
          He(ne(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (L(), j("span", _u, "*")) : Q("", !0)
        ], 8, Uu)) : Q("", !0),
        C("div", qu, [
          Fe(C("input", {
            id: "number-input",
            "onUpdate:modelValue": o[0] || (o[0] = (h) => r.value = h),
            class: we(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
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
          }, null, 42, Zu), [
            [Qt, r.value]
          ]),
          (d = e.v) != null && d.$invalid ? (L(), j("div", {
            key: 0,
            class: we(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
          }, [
            ee(re(Fn), { class: "tc-size-5 tc-text-red-500" })
          ], 2)) : Q("", !0)
        ]),
        C("p", Ku, [
          Ce(a.$slots, "info")
        ]),
        C("p", Gu, [
          Ce(a.$slots, "success")
        ]),
        e.showError && ((f = e.v) != null && f.$invalid) ? (L(), j("span", Xu, [
          (L(!0), j(ce, null, Le((u = e.v) == null ? void 0 : u.$silentErrors, (h, p) => (L(), j("p", {
            key: p,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-email-error" + h.$uid,
              class: "tc-font-medium"
            }, ne(h.$message), 9, Ju)
          ]))), 128))
        ])) : Q("", !0)
      ]);
    };
  }
}, Qu = { class: "tc-relative" }, ec = ["data-test"], tc = {
  key: 0,
  class: "tc-text-red-500"
}, nc = { class: "tc-relative tc-rounded-md tc-shadow-sm" }, rc = ["data-test", "disabled", "maxlength", "placeholder", "readonly"], ac = { class: "tc-mt-2 tc-text-sm tc-text-gray-500 dark:tc-text-gray-400" }, oc = { class: "tc-mt-2 tc-text-sm tc-text-green-600 dark:tc-text-green-400" }, ic = {
  key: 2,
  class: "block tc-mb-2"
}, sc = ["data-test"], g1 = {
  __name: "InputEmail",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = yt(e, "modelValue"), t = n, i = () => {
      t("update:modelValue", r.value);
    };
    return De(r, i), (a, o) => {
      var s, l, c, d, f, u;
      return L(), j("div", Qu, [
        e.label ? (L(), j("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          class: "tc-block tc-mb-2 tc-text-sm tc-font-medium tc-text-gray-900 dark:tc-text-white",
          for: "number-input"
        }, [
          He(ne(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (L(), j("span", tc, "*")) : Q("", !0)
        ], 8, ec)) : Q("", !0),
        C("div", nc, [
          Fe(C("input", {
            id: "email-input",
            "onUpdate:modelValue": o[0] || (o[0] = (h) => r.value = h),
            class: we(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
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
          }, null, 42, rc), [
            [Qt, r.value]
          ])
        ]),
        (d = e.v) != null && d.$invalid ? (L(), j("div", {
          key: 1,
          class: we(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
        }, [
          ee(re(Fn), { class: "tc-size-5 tc-text-red-500" })
        ], 2)) : Q("", !0),
        C("p", ac, [
          Ce(a.$slots, "info")
        ]),
        C("p", oc, [
          Ce(a.$slots, "success")
        ]),
        e.showError && ((f = e.v) != null && f.$invalid) ? (L(), j("span", ic, [
          (L(!0), j(ce, null, Le((u = e.v) == null ? void 0 : u.$silentErrors, (h, p) => (L(), j("p", {
            key: p,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-email-error" + h.$uid,
              class: "tc-font-medium"
            }, ne(h.$message), 9, sc)
          ]))), 128))
        ])) : Q("", !0)
      ]);
    };
  }
}, lc = { class: "relative" }, uc = ["placeholder"], cc = ["disabled", "readonly", "placeholder"], dc = {
  key: 3,
  class: "block tc-mb-2"
}, fc = ["data-test"], y1 = {
  __name: "InputPhoneNumber",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["error", "close", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = /(\w)(\w{3})(\w{3})(\w{4})/, t = F(), i = yt(e, "modelValue"), a = F(), o = F(!1), s = e, l = n, c = F(""), d = F(!1), f = (x) => {
      const S = x.key;
      if (/^\d+$/.test(S) === !1)
        x.preventDefault();
      else
        return !0;
    }, u = (x) => `${x}`.replace(/\D/g, "").substring(0, 12), h = (x) => u(x).substring(0, 11).padEnd(11, "").replace(r, "$1$2-$3-$4"), p = () => {
      const x = u(a.value).replace(/^63/, "0");
      c.value = h(x);
    }, m = () => {
      o.value = !0, Ee(() => {
        t.value.focus();
      });
    }, v = () => {
      const x = u(a.value).replace(/^63/, "0");
      c.value = h(x), o.value = !1, l("close");
    };
    De(i, () => {
      a.value = i.value, p();
    });
    const g = (x) => {
      const S = u(x).substring(0, 11);
      return S.startsWith("0") ? S.replace(r, "+63 ($2) $3 $4") : S.replace(r, "$1 ($2) $3 $4");
    }, y = (x) => !x || `${x}`.localeCompare(s.placeholder) === 0, k = (x, S = null, b = null, w = null) => {
      if (S) {
        let I = y(x) ? 0 : S.selectionStart;
        I >= 11 && (I = 13), !d.value && (I === 4 || I === 8) && ++I, y(x) ? window.setTimeout(() => {
          E(S, I);
        }, 0) : Ee(() => {
          E(S, I);
        });
      }
      if (b && w) {
        this[b] = g(x), this[w] = h(x), l("update:modelValue", this[b]);
        return;
      }
      a.value = g(x), c.value = h(x), l("update:modelValue", a.value);
    }, E = (x, S) => {
      x.setSelectionRange && (x.focus(), x.setSelectionRange(S, S, "forward"));
    };
    return se(() => {
      p();
    }), (x, S) => {
      var b, w, I, P, O, W, Y;
      return L(), j("div", lc, [
        o.value ? Fe((L(), j("input", {
          key: 0,
          ref_key: "editableField",
          ref: t,
          "onUpdate:modelValue": S[0] || (S[0] = ($) => c.value = $),
          placeholder: e.placeholder,
          "aria-describedby": "PhoneNumberHelp",
          class: we(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
            "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (b = e.v) == null ? void 0 : b.$invalid,
            "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((w = e.v) != null && w.$invalid),
            disabled: e.disabled
          }]),
          "data-private": "",
          name: "phone",
          type: "tel",
          onBlur: v,
          onInput: S[1] || (S[1] = ($) => k($.target.value, x.$refs.phoneRef)),
          onKeypress: S[2] || (S[2] = ($) => f($)),
          onKeyup: Bu(v, ["enter"])
        }, null, 42, uc)), [
          [Qt, c.value]
        ]) : Q("", !0),
        o.value ? Q("", !0) : Fe((L(), j("input", {
          key: 1,
          "onUpdate:modelValue": S[3] || (S[3] = ($) => a.value = $),
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          "aria-describedby": "PhoneNumberHelp",
          class: we(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-text-sm sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
            "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (I = e.v) == null ? void 0 : I.$invalid,
            "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((P = e.v) != null && P.$invalid),
            disabled: e.disabled
          }]),
          "data-private": "",
          name: "phone",
          type: "tel",
          onFocus: m
        }, null, 42, cc)), [
          [Qt, a.value]
        ]),
        (O = e.v) != null && O.$invalid ? (L(), j("div", {
          key: 2,
          class: we(`tc-absolute tc-right-2 ${x.label ? "tc-top-9" : "tc-top-2"}`)
        }, [
          ee(re(Fn), { class: "tc-size-5 tc-text-red-500" })
        ], 2)) : Q("", !0),
        e.showError && ((W = e.v) != null && W.$invalid) ? (L(), j("span", dc, [
          (L(!0), j(ce, null, Le((Y = e.v) == null ? void 0 : Y.$silentErrors, ($, D) => (L(), j("span", {
            key: D,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-email-error" + ($ == null ? void 0 : $.$uid),
              class: "tc-font-medium"
            }, ne($ == null ? void 0 : $.$message), 9, fc)
          ]))), 128))
        ])) : Q("", !0)
      ]);
    };
  }
}, hc = { class: "tc-relative" }, pc = ["data-test", "for"], vc = {
  key: 0,
  class: "tc-text-red-500"
}, mc = ["id", "disabled", "data-test", "placeholder", "maxlength", "readonly"], gc = {
  key: 2,
  class: "block tc-mb-2"
}, yc = ["data-test"], bc = {
  __name: "InputText",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = yt(e, "modelValue"), t = n;
    return De(r, () => {
      r.value === "" && (r.value = null), t("update:modelValue", r.value);
    }), (a, o) => {
      var s, l, c, d, f, u;
      return L(), j("div", hc, [
        e.label ? (L(), j("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          for: e.dataTest,
          class: "tc-block tc-mb-2 tc-text-base tc-font-medium tc-text-gray-900"
        }, [
          He(ne(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (L(), j("span", vc, "*")) : Q("", !0)
        ], 8, pc)) : Q("", !0),
        Fe(C("input", {
          id: e.dataTest,
          "onUpdate:modelValue": o[0] || (o[0] = (h) => r.value = h),
          disabled: e.disabled,
          class: we(["tc-text-base tc-block tc-w-full tc-rounded-md tc-border-0 tc-p-2 tc-ring-1 tc-ring-inset tc-ring-gray-300 sm:tc-leading-6 focus:tc-ring-2 focus:tc-ring-inset", {
            "tc-text-red-900 tc-ring-red-500 placeholder:tc-text-red-500 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
            "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((c = e.v) != null && c.$invalid),
            disabled: e.disabled
          }]),
          "data-test": e.dataTest + "-input",
          placeholder: e.placeholder,
          maxlength: e.maxLength || null,
          readonly: e.readonly,
          type: "text"
        }, null, 10, mc), [
          [Qt, r.value]
        ]),
        (d = e.v) != null && d.$invalid ? (L(), j("div", {
          key: 1,
          class: we(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
        }, [
          ee(re(Fn), { class: "tc-size-5 tc-text-red-500" })
        ], 2)) : Q("", !0),
        e.showError && ((f = e.v) != null && f.$invalid) ? (L(), j("span", gc, [
          (L(!0), j(ce, null, Le((u = e.v) == null ? void 0 : u.$silentErrors, (h, p) => (L(), j("span", {
            key: p,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-error" + h.$uid,
              class: "tc-font-medium"
            }, ne(h.$message), 9, yc)
          ]))), 128))
        ])) : Q("", !0)
      ]);
    };
  }
};
function wc(e, n, r) {
  let t = F(r == null ? void 0 : r.value), i = B(() => e.value !== void 0);
  return [B(() => i.value ? e.value : t.value), function(a) {
    return i.value || (t.value = a), n == null ? void 0 : n(a);
  }];
}
function lo(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function ar() {
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
    return lo(() => {
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
    let t = ar();
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
var Uo;
let xc = Symbol("headlessui.useid"), $c = 0;
const at = (Uo = gn.useId) != null ? Uo : function() {
  return gn.inject(xc, () => `${++$c}`)();
};
function ae(e) {
  var n;
  if (e == null || e.value == null) return null;
  let r = (n = e.value.$el) != null ? n : e.value;
  return r instanceof Node ? r : null;
}
function ht(e, n, ...r) {
  if (e in n) {
    let i = n[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, ht), t;
}
var Sc = Object.defineProperty, kc = (e, n, r) => n in e ? Sc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, _o = (e, n, r) => (kc(e, typeof n != "symbol" ? n + "" : n, r), r);
let Mc = class {
  constructor() {
    _o(this, "current", this.detect()), _o(this, "currentId", 0);
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
}, or = new Mc();
function It(e) {
  if (or.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = ae(e);
    if (n) return n.ownerDocument;
  }
  return document;
}
let Oa = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var tt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(tt || {}), Qn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Qn || {}), Dc = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Dc || {});
function ir(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Oa)).sort((n, r) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ur = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ur || {});
function _r(e, n = 0) {
  var r;
  return e === ((r = It(e)) == null ? void 0 : r.body) ? !1 : ht(n, { 0() {
    return e.matches(Oa);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(Oa)) return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
function Ki(e) {
  let n = It(e);
  Ee(() => {
    n && !_r(n.activeElement, 0) && pn(e);
  });
}
var Tc = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Tc || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function pn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Pc = ["textarea", "input"].join(",");
function Ec(e) {
  var n, r;
  return (r = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Pc)) != null ? r : !1;
}
function Gi(e, n = (r) => r) {
  return e.slice().sort((r, t) => {
    let i = n(r), a = n(t);
    if (i === null || a === null) return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Oc(e, n) {
  return Pt(ir(), n, { relativeTo: e });
}
function Pt(e, n, { sorted: r = !0, relativeTo: t = null, skipElements: i = [] } = {}) {
  var a;
  let o = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? r ? Gi(e) : e : ir(e);
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
  return n & 6 && Ec(h) && h.select(), 2;
}
function Xi() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ac() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Cc() {
  return Xi() || Ac();
}
function gr(e, n, r) {
  or.isServer || ve((t) => {
    document.addEventListener(e, n, r), t(() => document.removeEventListener(e, n, r));
  });
}
function Ji(e, n, r) {
  or.isServer || ve((t) => {
    window.addEventListener(e, n, r), t(() => window.removeEventListener(e, n, r));
  });
}
function uo(e, n, r = B(() => !0)) {
  function t(a, o) {
    if (!r.value || a.defaultPrevented) return;
    let s = o(a);
    if (s === null || !s.getRootNode().contains(s)) return;
    let l = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of l) {
      if (c === null) continue;
      let d = c instanceof HTMLElement ? c : ae(c);
      if (d != null && d.contains(s) || a.composed && a.composedPath().includes(d)) return;
    }
    return !_r(s, Ur.Loose) && s.tabIndex !== -1 && a.preventDefault(), n(a, s);
  }
  let i = F(null);
  gr("pointerdown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), gr("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), gr("click", (a) => {
    Cc() || i.value && (t(a, () => i.value), i.value = null);
  }, !0), gr("touchend", (a) => t(a, () => a.target instanceof HTMLElement ? a.target : null), !0), Ji("blur", (a) => t(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function qo(e, n) {
  if (e) return e;
  let r = n ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function co(e, n) {
  let r = F(qo(e.value.type, e.value.as));
  return se(() => {
    r.value = qo(e.value.type, e.value.as);
  }), ve(() => {
    var t;
    r.value || ae(n) && ae(n) instanceof HTMLButtonElement && !((t = ae(n)) != null && t.hasAttribute("type")) && (r.value = "button");
  }), r;
}
function Zo(e) {
  return [e.screenX, e.screenY];
}
function Lc() {
  let e = F([-1, -1]);
  return { wasMoved(n) {
    let r = Zo(n);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(n) {
    e.value = Zo(n);
  } };
}
function Ic({ container: e, accept: n, walk: r, enabled: t }) {
  ve(() => {
    let i = e.value;
    if (!i || t !== void 0 && !t.value) return;
    let a = It(e);
    if (!a) return;
    let o = Object.assign((l) => n(l), { acceptNode: n }), s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; s.nextNode(); ) r(s.currentNode);
  });
}
var Vt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Vt || {}), cn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(cn || {});
function Ue({ visible: e = !0, features: n = 0, ourProps: r, theirProps: t, ...i }) {
  var a;
  let o = es(t, r), s = Object.assign(i, { props: o });
  if (e || n & 2 && o.static) return pa(s);
  if (n & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return ht(l, { 0() {
      return null;
    }, 1() {
      return pa({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return pa(s);
}
function pa({ props: e, attrs: n, slots: r, slot: t, name: i }) {
  var a, o;
  let { as: s, ...l } = fo(e, ["unmount", "static"]), c = (a = r.default) == null ? void 0 : a.call(r, t), d = {};
  if (t) {
    let f = !1, u = [];
    for (let [h, p] of Object.entries(t)) typeof p == "boolean" && (f = !0), p === !0 && u.push(h);
    f && (d["data-headlessui-state"] = u.join(" "));
  }
  if (s === "template") {
    if (c = Qi(c ?? []), Object.keys(l).length > 0 || Object.keys(n).length > 0) {
      let [f, ...u] = c ?? [];
      if (!Fc(f) || u.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(n)).map((m) => m.trim()).filter((m, v, g) => g.indexOf(m) === v).sort((m, v) => m.localeCompare(v)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = es((o = f.props) != null ? o : {}, l, d), p = Hr(f, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return X(s, Object.assign({}, l, d), { default: () => c });
}
function Qi(e) {
  return e.flatMap((n) => n.type === ce ? Qi(n.children) : [n]);
}
function es(...e) {
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
function Rc(e) {
  let n = Object.assign({}, e);
  for (let r in n) n[r] === void 0 && delete n[r];
  return n;
}
function fo(e, n = []) {
  let r = Object.assign({}, e);
  for (let t of n) t in r && delete r[t];
  return r;
}
function Fc(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var en = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(en || {});
let yn = J({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: r }) {
  return () => {
    var t;
    let { features: i, ...a } = e, o = { "aria-hidden": (i & 2) === 2 ? !0 : (t = a["aria-hidden"]) != null ? t : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return Ue({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: n, name: "Hidden" });
  };
} }), ts = Symbol("Context");
var Ze = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ze || {});
function Yc() {
  return Vn() !== null;
}
function Vn() {
  return fe(ts, null);
}
function ho(e) {
  de(ts, e);
}
var Be = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Be || {});
function jc(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let kn = [];
jc(() => {
  function e(n) {
    n.target instanceof HTMLElement && n.target !== document.body && kn[0] !== n.target && (kn.unshift(n.target), kn = kn.filter((r) => r != null && r.isConnected), kn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Bc(e) {
  throw new Error("Unexpected object: " + e);
}
var wt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(wt || {});
function zc(e, n) {
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
      Bc(e);
  }
}
function Nc(e) {
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
function po(e, n, r, t) {
  or.isServer || ve((i) => {
    e = e ?? window, e.addEventListener(n, r, t), i(() => e.removeEventListener(n, r, t));
  });
}
var xt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(xt || {});
function vo() {
  let e = F(0);
  return Ji("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function ns(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let t = ae(r);
    t instanceof HTMLElement && n.add(t);
  }
  return n;
}
var rs = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(rs || {});
let _n = Object.assign(J({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: F(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null);
  t({ el: i, $el: i });
  let a = B(() => It(i)), o = F(!1);
  se(() => o.value = !0), be(() => o.value = !1), Vc({ ownerDocument: a }, B(() => o.value && !!(e.features & 16)));
  let s = Wc({ ownerDocument: a, container: i, initialFocus: B(() => e.initialFocus) }, B(() => o.value && !!(e.features & 2)));
  Uc({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, B(() => o.value && !!(e.features & 8)));
  let l = vo();
  function c(h) {
    let p = ae(i);
    p && ((m) => m())(() => {
      ht(l.value, { [xt.Forwards]: () => {
        Pt(p, tt.First, { skipElements: [h.relatedTarget] });
      }, [xt.Backwards]: () => {
        Pt(p, tt.Last, { skipElements: [h.relatedTarget] });
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
    let p = ns(e.containers);
    ae(i) instanceof HTMLElement && p.add(ae(i));
    let m = h.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (as(p, m) || (d.value ? Pt(ae(i), ht(l.value, { [xt.Forwards]: () => tt.Next, [xt.Backwards]: () => tt.Previous }) | tt.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && pn(h.target)));
  }
  return () => {
    let h = {}, p = { ref: i, onKeydown: f, onFocusout: u }, { features: m, initialFocus: v, containers: g, ...y } = e;
    return X(ce, [!!(m & 4) && X(yn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: en.Focusable }), Ue({ ourProps: p, theirProps: { ...n, ...y }, slot: h, attrs: n, slots: r, name: "FocusTrap" }), !!(m & 4) && X(yn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: en.Focusable })]);
  };
} }), { features: rs });
function Hc(e) {
  let n = F(kn.slice());
  return De([e], ([r], [t]) => {
    t === !0 && r === !1 ? lo(() => {
      n.value.splice(0);
    }) : t === !1 && r === !0 && (n.value = kn.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n.value.find((t) => t != null && t.isConnected)) != null ? r : null;
  };
}
function Vc({ ownerDocument: e }, n) {
  let r = Hc(n);
  se(() => {
    ve(() => {
      var t, i;
      n.value || ((t = e.value) == null ? void 0 : t.activeElement) === ((i = e.value) == null ? void 0 : i.body) && pn(r());
    }, { flush: "post" });
  }), be(() => {
    n.value && pn(r());
  });
}
function Wc({ ownerDocument: e, container: n, initialFocus: r }, t) {
  let i = F(null), a = F(!1);
  return se(() => a.value = !0), be(() => a.value = !1), se(() => {
    De([n, r, t], (o, s) => {
      if (o.every((c, d) => (s == null ? void 0 : s[d]) === c) || !t.value) return;
      let l = ae(n);
      l && lo(() => {
        var c, d;
        if (!a.value) return;
        let f = ae(r), u = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === u) {
            i.value = u;
            return;
          }
        } else if (l.contains(u)) {
          i.value = u;
          return;
        }
        f ? pn(f) : Pt(l, tt.First | tt.NoScroll) === Qn.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Uc({ ownerDocument: e, container: n, containers: r, previousActiveElement: t }, i) {
  var a;
  po((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value) return;
    let s = ns(r);
    ae(n) instanceof HTMLElement && s.add(ae(n));
    let l = t.value;
    if (!l) return;
    let c = o.target;
    c && c instanceof HTMLElement ? as(s, c) ? (t.value = c, pn(c)) : (o.preventDefault(), o.stopPropagation(), pn(l)) : pn(t.value);
  }, !0);
}
function as(e, n) {
  for (let r of e) if (r.contains(n)) return !0;
  return !1;
}
function _c(e) {
  let n = In(e.getSnapshot());
  return be(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function qc(e, n) {
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
function Zc() {
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
function Kc() {
  return Xi() ? { before({ doc: e, d: n, meta: r }) {
    function t(i) {
      return r.containers.flatMap((a) => a()).some((a) => a.contains(i));
    }
    n.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = ar();
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
function Gc() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function Xc(e) {
  let n = {};
  for (let r of e) Object.assign(n, r(n));
  return n;
}
let Tn = qc(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var r;
  let t = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: ar(), meta: /* @__PURE__ */ new Set() };
  return t.count++, t.meta.add(n), this.set(e, t), this;
}, POP(e, n) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: r }) {
  let t = { doc: e, d: n, meta: Xc(r) }, i = [Kc(), Zc(), Gc()];
  i.forEach(({ before: a }) => a == null ? void 0 : a(t)), i.forEach(({ after: a }) => a == null ? void 0 : a(t));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Tn.subscribe(() => {
  let e = Tn.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [r] of e) n.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let t = n.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !t || !i && t) && Tn.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Tn.dispatch("TEARDOWN", r);
  }
});
function Jc(e, n, r) {
  let t = _c(Tn), i = B(() => {
    let a = e.value ? t.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return De([e, n], ([a, o], [s], l) => {
    if (!a || !o) return;
    Tn.dispatch("PUSH", a, r);
    let c = !1;
    l(() => {
      c || (Tn.dispatch("POP", s ?? a, r), c = !0);
    });
  }, { immediate: !0 }), i;
}
let va = /* @__PURE__ */ new Map(), qn = /* @__PURE__ */ new Map();
function Ko(e, n = F(!0)) {
  ve((r) => {
    var t;
    if (!n.value) return;
    let i = ae(e);
    if (!i) return;
    r(function() {
      var o;
      if (!i) return;
      let s = (o = qn.get(i)) != null ? o : 1;
      if (s === 1 ? qn.delete(i) : qn.set(i, s - 1), s !== 1) return;
      let l = va.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, va.delete(i));
    });
    let a = (t = qn.get(i)) != null ? t : 0;
    qn.set(i, a + 1), a === 0 && (va.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
function os({ defaultContainers: e = [], portals: n, mainTreeNodeRef: r } = {}) {
  let t = F(null), i = It(t);
  function a() {
    var o, s, l;
    let c = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? c.push(d) : "value" in d && d.value instanceof HTMLElement && c.push(d.value));
    if (n != null && n.value) for (let d of n.value) c.push(d);
    for (let d of (o = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? o : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(ae(t)) || d.contains((l = (s = ae(t)) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || c.some((f) => d.contains(f)) || c.push(d));
    return c;
  }
  return { resolveContainers: a, contains(o) {
    return a().some((s) => s.contains(o));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return r != null ? null : X(yn, { features: en.Hidden, ref: t });
  } };
}
function Qc() {
  let e = F(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return X(yn, { features: en.Hidden, ref: e });
  } };
}
let is = Symbol("ForcePortalRootContext");
function ed() {
  return fe(is, !1);
}
let Aa = J({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: r }) {
  return de(is, e.force), () => {
    let { force: t, ...i } = e;
    return Ue({ theirProps: i, ourProps: {}, slot: {}, slots: n, attrs: r, name: "ForcePortalRoot" });
  };
} }), ss = Symbol("StackContext");
var Ca = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ca || {});
function td() {
  return fe(ss, () => {
  });
}
function nd({ type: e, enabled: n, element: r, onUpdate: t }) {
  let i = td();
  function a(...o) {
    t == null || t(...o), i(...o);
  }
  se(() => {
    De(n, (o, s) => {
      o ? a(0, e, r) : s === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), be(() => {
    n.value && a(1, e, r);
  }), de(ss, a);
}
let ls = Symbol("DescriptionContext");
function rd() {
  let e = fe(ls, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function us({ slot: e = F({}), name: n = "Description", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return de(ls, { register: i, slot: e, name: n, props: r }), B(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
J({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-description-${at()}`, a = rd();
  return se(() => be(a.register(i))), () => {
    let { name: o = "Description", slot: s = F({}), props: l = {} } = a, { ...c } = e, d = { ...Object.entries(l).reduce((f, [u, h]) => Object.assign(f, { [u]: re(h) }), {}), id: i };
    return Ue({ ourProps: d, theirProps: c, slot: s.value, attrs: n, slots: r, name: o });
  };
} });
function ad(e) {
  let n = It(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = n.getElementById("headlessui-portal-root");
  if (r) return r;
  let t = n.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(t);
}
const La = /* @__PURE__ */ new WeakMap();
function od(e) {
  var n;
  return (n = La.get(e)) != null ? n : 0;
}
function Go(e, n) {
  let r = n(od(e));
  return r <= 0 ? La.delete(e) : La.set(e, r), r;
}
let cs = J({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = B(() => It(t)), a = ed(), o = fe(fs, null), s = F(a === !0 || o == null ? ad(t.value) : o.resolveTarget());
  s.value && Go(s.value, (u) => u + 1);
  let l = F(!1);
  se(() => {
    l.value = !0;
  }), ve(() => {
    a || o != null && (s.value = o.resolveTarget());
  });
  let c = fe(Ia, null), d = !1, f = Vr();
  return De(t, () => {
    if (d || !c) return;
    let u = ae(t);
    u && (be(c.register(u), f), d = !0);
  }), be(() => {
    var u, h;
    let p = (u = i.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    !p || s.value !== p || Go(s.value, (m) => m - 1) || s.value.children.length > 0 || (h = s.value.parentElement) == null || h.removeChild(s.value);
  }), () => {
    if (!l.value || s.value === null) return null;
    let u = { ref: t, "data-headlessui-portal": "" };
    return X(rr, { to: s.value }, Ue({ ourProps: u, theirProps: e, slot: {}, attrs: r, slots: n, name: "Portal" }));
  };
} }), Ia = Symbol("PortalParentContext");
function ds() {
  let e = fe(Ia, null), n = F([]);
  function r(a) {
    return n.value.push(a), e && e.register(a), () => t(a);
  }
  function t(a) {
    let o = n.value.indexOf(a);
    o !== -1 && n.value.splice(o, 1), e && e.unregister(a);
  }
  let i = { register: r, unregister: t, portals: n };
  return [n, J({ name: "PortalWrapper", setup(a, { slots: o }) {
    return de(Ia, i), () => {
      var s;
      return (s = o.default) == null ? void 0 : s.call(o);
    };
  } })];
}
let fs = Symbol("PortalGroupContext"), id = J({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: r }) {
  let t = Rn({ resolveTarget() {
    return e.target;
  } });
  return de(fs, t), () => {
    let { target: i, ...a } = e;
    return Ue({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: r, name: "PortalGroup" });
  };
} });
var sd = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(sd || {});
let Ra = Symbol("DialogContext");
function sr(e) {
  let n = fe(Ra, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, sr), r;
  }
  return n;
}
let yr = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", ld = J({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: yr }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a, o;
  let s = (a = e.id) != null ? a : `headlessui-dialog-${at()}`, l = F(!1);
  se(() => {
    l.value = !0;
  });
  let c = !1, d = B(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0, console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), f = F(0), u = Vn(), h = B(() => e.open === yr && u !== null ? (u.value & Ze.Open) === Ze.Open : e.open), p = F(null), m = B(() => It(p));
  if (i({ el: p, $el: p }), !(e.open !== yr || u !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof h.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value === yr ? void 0 : e.open}`);
  let v = B(() => l.value && h.value ? 0 : 1), g = B(() => v.value === 0), y = B(() => f.value > 1), k = fe(Ra, null) !== null, [E, x] = ds(), { resolveContainers: S, mainTreeNodeRef: b, MainTreeNode: w } = os({ portals: E, defaultContainers: [B(() => {
    var R;
    return (R = A.panelRef.value) != null ? R : p.value;
  })] }), I = B(() => y.value ? "parent" : "leaf"), P = B(() => u !== null ? (u.value & Ze.Closing) === Ze.Closing : !1), O = B(() => k || P.value ? !1 : g.value), W = B(() => {
    var R, H, _;
    return (_ = Array.from((H = (R = m.value) == null ? void 0 : R.querySelectorAll("body > *")) != null ? H : []).find((G) => G.id === "headlessui-portal-root" ? !1 : G.contains(ae(b)) && G instanceof HTMLElement)) != null ? _ : null;
  });
  Ko(W, O);
  let Y = B(() => y.value ? !0 : g.value), $ = B(() => {
    var R, H, _;
    return (_ = Array.from((H = (R = m.value) == null ? void 0 : R.querySelectorAll("[data-headlessui-portal]")) != null ? H : []).find((G) => G.contains(ae(b)) && G instanceof HTMLElement)) != null ? _ : null;
  });
  Ko($, Y), nd({ type: "Dialog", enabled: B(() => v.value === 0), element: p, onUpdate: (R, H) => {
    if (H === "Dialog") return ht(R, { [Ca.Add]: () => f.value += 1, [Ca.Remove]: () => f.value -= 1 });
  } });
  let D = us({ name: "DialogDescription", slot: B(() => ({ open: h.value })) }), M = F(null), A = { titleId: M, panelRef: F(null), dialogState: v, setTitleId(R) {
    M.value !== R && (M.value = R);
  }, close() {
    n("close", !1);
  } };
  de(Ra, A);
  let T = B(() => !(!g.value || y.value));
  uo(S, (R, H) => {
    R.preventDefault(), A.close(), Ee(() => H == null ? void 0 : H.focus());
  }, T);
  let z = B(() => !(y.value || v.value !== 0));
  po((o = m.value) == null ? void 0 : o.defaultView, "keydown", (R) => {
    z.value && (R.defaultPrevented || R.key === Be.Escape && (R.preventDefault(), R.stopPropagation(), A.close()));
  });
  let N = B(() => !(P.value || v.value !== 0 || k));
  return Jc(m, N, (R) => {
    var H;
    return { containers: [...(H = R.containers) != null ? H : [], S] };
  }), ve((R) => {
    if (v.value !== 0) return;
    let H = ae(p);
    if (!H) return;
    let _ = new ResizeObserver((G) => {
      for (let le of G) {
        let ge = le.target.getBoundingClientRect();
        ge.x === 0 && ge.y === 0 && ge.width === 0 && ge.height === 0 && A.close();
      }
    });
    _.observe(H), R(() => _.disconnect());
  }), () => {
    let { open: R, initialFocus: H, ..._ } = e, G = { ...r, ref: p, id: s, role: d.value, "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": M.value, "aria-describedby": D.value }, le = { open: v.value === 0 };
    return X(Aa, { force: !0 }, () => [X(cs, () => X(id, { target: p.value }, () => X(Aa, { force: !1 }, () => X(_n, { initialFocus: H, containers: S, features: g.value ? ht(I.value, { parent: _n.features.RestoreFocus, leaf: _n.features.All & ~_n.features.FocusLock }) : _n.features.None }, () => X(x, {}, () => Ue({ ourProps: G, theirProps: { ..._, ...r }, slot: le, attrs: r, slots: t, visible: v.value === 0, features: Vt.RenderStrategy | Vt.Static, name: "Dialog" })))))), X(w)]);
  };
} });
J({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-overlay-${at()}`, a = sr("DialogOverlay");
  function o(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), a.close());
  }
  return () => {
    let { ...s } = e;
    return Ue({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: s, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogOverlay" });
  };
} });
J({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-backdrop-${at()}`, o = sr("DialogBackdrop"), s = F(null);
  return t({ el: s, $el: s }), se(() => {
    if (o.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...l } = e, c = { id: a, ref: s, "aria-hidden": !0 };
    return X(Aa, { force: !0 }, () => X(cs, () => Ue({ ourProps: c, theirProps: { ...n, ...l }, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogBackdrop" })));
  };
} });
let ud = J({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-panel-${at()}`, o = sr("DialogPanel");
  t({ el: o.panelRef, $el: o.panelRef });
  function s(l) {
    l.stopPropagation();
  }
  return () => {
    let { ...l } = e, c = { id: a, ref: o.panelRef, onClick: s };
    return Ue({ ourProps: c, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogPanel" });
  };
} }), cd = J({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-title-${at()}`, a = sr("DialogTitle");
  return se(() => {
    a.setTitleId(i), be(() => a.setTitleId(null));
  }), () => {
    let { ...o } = e;
    return Ue({ ourProps: { id: i }, theirProps: o, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogTitle" });
  };
} }), Xo = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Jo(e) {
  var n, r;
  let t = (n = e.innerText) != null ? n : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return t;
  let a = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), a = !0;
  let o = a ? (r = i.innerText) != null ? r : "" : t;
  return Xo.test(o) && (o = o.replace(Xo, "")), o;
}
function dd(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string") return n.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let t = r.split(" ").map((i) => {
      let a = document.getElementById(i);
      if (a) {
        let o = a.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Jo(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (t.length > 0) return t.join(", ");
  }
  return Jo(e).trim();
}
function fd(e) {
  let n = F(""), r = F("");
  return () => {
    let t = ae(e);
    if (!t) return "";
    let i = t.innerText;
    if (n.value === i) return r.value;
    let a = dd(t).trim().toLowerCase();
    return n.value = i, r.value = a, a;
  };
}
var hd = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(hd || {}), pd = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(pd || {});
function vd(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let hs = Symbol("MenuContext");
function qr(e) {
  let n = fe(hs, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, qr), r;
  }
  return n;
}
let ps = J({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(1), i = F(null), a = F(null), o = F([]), s = F(""), l = F(null), c = F(1);
  function d(u = (h) => h) {
    let h = l.value !== null ? o.value[l.value] : null, p = Gi(u(o.value.slice()), (v) => ae(v.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let f = { menuState: t, buttonRef: i, itemsRef: a, items: o, searchQuery: s, activeItemIndex: l, activationTrigger: c, closeMenu: () => {
    t.value = 1, l.value = null;
  }, openMenu: () => t.value = 0, goToItem(u, h, p) {
    let m = d(), v = zc(u === wt.Specific ? { focus: wt.Specific, id: h } : { focus: u }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
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
  return uo([i, a], (u, h) => {
    var p;
    f.closeMenu(), _r(h, Ur.Loose) || (u.preventDefault(), (p = ae(i)) == null || p.focus());
  }, B(() => t.value === 0)), de(hs, f), ho(B(() => ht(t.value, { 0: Ze.Open, 1: Ze.Closed }))), () => {
    let u = { open: t.value === 0, close: f.closeMenu };
    return Ue({ ourProps: {}, theirProps: e, slot: u, slots: n, attrs: r, name: "Menu" });
  };
} }), vs = J({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-button-${at()}`, o = qr("MenuButton");
  t({ el: o.buttonRef, $el: o.buttonRef });
  function s(f) {
    switch (f.key) {
      case Be.Space:
      case Be.Enter:
      case Be.ArrowDown:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Ee(() => {
          var u;
          (u = ae(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(wt.First);
        });
        break;
      case Be.ArrowUp:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Ee(() => {
          var u;
          (u = ae(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(wt.Last);
        });
        break;
    }
  }
  function l(f) {
    switch (f.key) {
      case Be.Space:
        f.preventDefault();
        break;
    }
  }
  function c(f) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Ee(() => {
      var u;
      return (u = ae(o.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), o.openMenu(), vd(() => {
      var u;
      return (u = ae(o.itemsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let d = co(B(() => ({ as: e.as, type: n.type })), o.buttonRef);
  return () => {
    var f;
    let u = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: a, type: d.value, "aria-haspopup": "menu", "aria-controls": (f = ae(o.itemsRef)) == null ? void 0 : f.id, "aria-expanded": o.menuState.value === 0, onKeydown: s, onKeyup: l, onClick: c };
    return Ue({ ourProps: p, theirProps: h, slot: u, attrs: n, slots: r, name: "MenuButton" });
  };
} }), ms = J({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-items-${at()}`, o = qr("MenuItems"), s = F(null);
  t({ el: o.itemsRef, $el: o.itemsRef }), Ic({ container: B(() => ae(o.itemsRef)), enabled: B(() => o.menuState.value === 0), accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function l(u) {
    var h;
    switch (s.value && clearTimeout(s.value), u.key) {
      case Be.Space:
        if (o.searchQuery.value !== "") return u.preventDefault(), u.stopPropagation(), o.search(u.key);
      case Be.Enter:
        if (u.preventDefault(), u.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = ae(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), Ki(ae(o.buttonRef));
        break;
      case Be.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(wt.Next);
      case Be.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(wt.Previous);
      case Be.Home:
      case Be.PageUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(wt.First);
      case Be.End:
      case Be.PageDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(wt.Last);
      case Be.Escape:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Ee(() => {
          var p;
          return (p = ae(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case Be.Tab:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Ee(() => Oc(ae(o.buttonRef), u.shiftKey ? tt.Previous : tt.Next));
        break;
      default:
        u.key.length === 1 && (o.search(u.key), s.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function c(u) {
    switch (u.key) {
      case Be.Space:
        u.preventDefault();
        break;
    }
  }
  let d = Vn(), f = B(() => d !== null ? (d.value & Ze.Open) === Ze.Open : o.menuState.value === 0);
  return () => {
    var u, h;
    let p = { open: o.menuState.value === 0 }, { ...m } = e, v = { "aria-activedescendant": o.activeItemIndex.value === null || (u = o.items.value[o.activeItemIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (h = ae(o.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: l, onKeyup: c, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return Ue({ ourProps: v, theirProps: m, slot: p, attrs: n, slots: r, features: Vt.RenderStrategy | Vt.Static, visible: f.value, name: "MenuItems" });
  };
} }), gs = J({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-item-${at()}`, o = qr("MenuItem"), s = F(null);
  t({ el: s, $el: s });
  let l = B(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === a : !1), c = fd(s), d = B(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: s }));
  se(() => o.registerItem(a, d)), be(() => o.unregisterItem(a)), ve(() => {
    o.menuState.value === 0 && l.value && o.activationTrigger.value !== 0 && Ee(() => {
      var g, y;
      return (y = (g = ae(s)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : y.call(g, { block: "nearest" });
    });
  });
  function f(g) {
    if (e.disabled) return g.preventDefault();
    o.closeMenu(), Ki(ae(o.buttonRef));
  }
  function u() {
    if (e.disabled) return o.goToItem(wt.Nothing);
    o.goToItem(wt.Specific, a);
  }
  let h = Lc();
  function p(g) {
    h.update(g);
  }
  function m(g) {
    h.wasMoved(g) && (e.disabled || l.value || o.goToItem(wt.Specific, a, 0));
  }
  function v(g) {
    h.wasMoved(g) && (e.disabled || l.value && o.goToItem(wt.Nothing));
  }
  return () => {
    let { disabled: g, ...y } = e, k = { active: l.value, disabled: g, close: o.closeMenu };
    return Ue({ ourProps: { id: a, ref: s, role: "menuitem", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, onClick: f, onFocus: u, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v }, theirProps: { ...r, ...y }, slot: k, attrs: r, slots: n, name: "MenuItem" });
  };
} });
var md = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(md || {});
let ys = Symbol("PopoverContext");
function Zr(e) {
  let n = fe(ys, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <${$s.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Zr), r;
  }
  return n;
}
let bs = Symbol("PopoverGroupContext");
function ws() {
  return fe(bs, null);
}
let xs = Symbol("PopoverPanelContext");
function gd() {
  return fe(xs, null);
}
let $s = J({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = F(null);
  t({ el: a, $el: a });
  let o = F(1), s = F(null), l = F(null), c = F(null), d = F(null), f = B(() => It(a)), u = B(() => {
    var x, S;
    if (!ae(s) || !ae(d)) return !1;
    for (let Y of document.querySelectorAll("body > *")) if (Number(Y == null ? void 0 : Y.contains(ae(s))) ^ Number(Y == null ? void 0 : Y.contains(ae(d)))) return !0;
    let b = ir(), w = b.indexOf(ae(s)), I = (w + b.length - 1) % b.length, P = (w + 1) % b.length, O = b[I], W = b[P];
    return !((x = ae(d)) != null && x.contains(O)) && !((S = ae(d)) != null && S.contains(W));
  }), h = { popoverState: o, buttonId: F(null), panelId: F(null), panel: d, button: s, isPortalled: u, beforePanelSentinel: l, afterPanelSentinel: c, togglePopover() {
    o.value = ht(o.value, { 0: 1, 1: 0 });
  }, closePopover() {
    o.value !== 1 && (o.value = 1);
  }, close(x) {
    h.closePopover();
    let S = x ? x instanceof HTMLElement ? x : x.value instanceof HTMLElement ? ae(x) : ae(h.button) : ae(h.button);
    S == null || S.focus();
  } };
  de(ys, h), ho(B(() => ht(o.value, { 0: Ze.Open, 1: Ze.Closed })));
  let p = { buttonId: h.buttonId, panelId: h.panelId, close() {
    h.closePopover();
  } }, m = ws(), v = m == null ? void 0 : m.registerPopover, [g, y] = ds(), k = os({ mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef, portals: g, defaultContainers: [s, d] });
  function E() {
    var x, S, b, w;
    return (w = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null ? w : ((x = f.value) == null ? void 0 : x.activeElement) && (((S = ae(s)) == null ? void 0 : S.contains(f.value.activeElement)) || ((b = ae(d)) == null ? void 0 : b.contains(f.value.activeElement)));
  }
  return ve(() => v == null ? void 0 : v(p)), po((i = f.value) == null ? void 0 : i.defaultView, "focus", (x) => {
    var S, b;
    x.target !== window && x.target instanceof HTMLElement && o.value === 0 && (E() || s && d && (k.contains(x.target) || (S = ae(h.beforePanelSentinel)) != null && S.contains(x.target) || (b = ae(h.afterPanelSentinel)) != null && b.contains(x.target) || h.closePopover()));
  }, !0), uo(k.resolveContainers, (x, S) => {
    var b;
    h.closePopover(), _r(S, Ur.Loose) || (x.preventDefault(), (b = ae(s)) == null || b.focus());
  }, B(() => o.value === 0)), () => {
    let x = { open: o.value === 0, close: h.close };
    return X(ce, [X(y, {}, () => Ue({ theirProps: { ...e, ...r }, ourProps: { ref: a }, slot: x, slots: n, attrs: r, name: "Popover" })), X(k.MainTreeNode)]);
  };
} }), yd = J({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-button-${at()}`, o = Zr("PopoverButton"), s = B(() => It(o.button));
  t({ el: o.button, $el: o.button }), se(() => {
    o.buttonId.value = a;
  }), be(() => {
    o.buttonId.value = null;
  });
  let l = ws(), c = l == null ? void 0 : l.closeOthers, d = gd(), f = B(() => d === null ? !1 : d.value === o.panelId.value), u = F(null), h = `headlessui-focus-sentinel-${at()}`;
  f.value || ve(() => {
    o.button.value = ae(u);
  });
  let p = co(B(() => ({ as: e.as, type: n.type })), u);
  function m(x) {
    var S, b, w, I, P;
    if (f.value) {
      if (o.popoverState.value === 1) return;
      switch (x.key) {
        case Be.Space:
        case Be.Enter:
          x.preventDefault(), (b = (S = x.target).click) == null || b.call(S), o.closePopover(), (w = ae(o.button)) == null || w.focus();
          break;
      }
    } else switch (x.key) {
      case Be.Space:
      case Be.Enter:
        x.preventDefault(), x.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover();
        break;
      case Be.Escape:
        if (o.popoverState.value !== 0) return c == null ? void 0 : c(o.buttonId.value);
        if (!ae(o.button) || (I = s.value) != null && I.activeElement && !((P = ae(o.button)) != null && P.contains(s.value.activeElement))) return;
        x.preventDefault(), x.stopPropagation(), o.closePopover();
        break;
    }
  }
  function v(x) {
    f.value || x.key === Be.Space && x.preventDefault();
  }
  function g(x) {
    var S, b;
    e.disabled || (f.value ? (o.closePopover(), (S = ae(o.button)) == null || S.focus()) : (x.preventDefault(), x.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover(), (b = ae(o.button)) == null || b.focus()));
  }
  function y(x) {
    x.preventDefault(), x.stopPropagation();
  }
  let k = vo();
  function E() {
    let x = ae(o.panel);
    if (!x) return;
    function S() {
      ht(k.value, { [xt.Forwards]: () => Pt(x, tt.First), [xt.Backwards]: () => Pt(x, tt.Last) }) === Qn.Error && Pt(ir().filter((b) => b.dataset.headlessuiFocusGuard !== "true"), ht(k.value, { [xt.Forwards]: tt.Next, [xt.Backwards]: tt.Previous }), { relativeTo: ae(o.button) });
    }
    S();
  }
  return () => {
    let x = o.popoverState.value === 0, S = { open: x }, { ...b } = e, w = f.value ? { ref: u, type: p.value, onKeydown: m, onClick: g } : { ref: u, id: a, type: p.value, "aria-expanded": o.popoverState.value === 0, "aria-controls": ae(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: v, onClick: g, onMousedown: y };
    return X(ce, [Ue({ ourProps: w, theirProps: { ...n, ...b }, slot: S, attrs: n, slots: r, name: "PopoverButton" }), x && !f.value && o.isPortalled.value && X(yn, { id: h, features: en.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: E })]);
  };
} }), bd = J({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: r }) {
  let t = Zr("PopoverOverlay"), i = `headlessui-popover-overlay-${at()}`, a = Vn(), o = B(() => a !== null ? (a.value & Ze.Open) === Ze.Open : t.popoverState.value === 0);
  function s() {
    t.closePopover();
  }
  return () => {
    let l = { open: t.popoverState.value === 0 };
    return Ue({ ourProps: { id: i, "aria-hidden": !0, onClick: s }, theirProps: e, slot: l, attrs: n, slots: r, features: Vt.RenderStrategy | Vt.Static, visible: o.value, name: "PopoverOverlay" });
  };
} }), wd = J({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-panel-${at()}`, { focus: o } = e, s = Zr("PopoverPanel"), l = B(() => It(s.panel)), c = `headlessui-focus-sentinel-before-${at()}`, d = `headlessui-focus-sentinel-after-${at()}`;
  t({ el: s.panel, $el: s.panel }), se(() => {
    s.panelId.value = a;
  }), be(() => {
    s.panelId.value = null;
  }), de(xs, s.panelId), ve(() => {
    var y, k;
    if (!o || s.popoverState.value !== 0 || !s.panel) return;
    let E = (y = l.value) == null ? void 0 : y.activeElement;
    (k = ae(s.panel)) != null && k.contains(E) || Pt(ae(s.panel), tt.First);
  });
  let f = Vn(), u = B(() => f !== null ? (f.value & Ze.Open) === Ze.Open : s.popoverState.value === 0);
  function h(y) {
    var k, E;
    switch (y.key) {
      case Be.Escape:
        if (s.popoverState.value !== 0 || !ae(s.panel) || l.value && !((k = ae(s.panel)) != null && k.contains(l.value.activeElement))) return;
        y.preventDefault(), y.stopPropagation(), s.closePopover(), (E = ae(s.button)) == null || E.focus();
        break;
    }
  }
  function p(y) {
    var k, E, x, S, b;
    let w = y.relatedTarget;
    w && ae(s.panel) && ((k = ae(s.panel)) != null && k.contains(w) || (s.closePopover(), ((x = (E = ae(s.beforePanelSentinel)) == null ? void 0 : E.contains) != null && x.call(E, w) || (b = (S = ae(s.afterPanelSentinel)) == null ? void 0 : S.contains) != null && b.call(S, w)) && w.focus({ preventScroll: !0 })));
  }
  let m = vo();
  function v() {
    let y = ae(s.panel);
    if (!y) return;
    function k() {
      ht(m.value, { [xt.Forwards]: () => {
        var E;
        Pt(y, tt.First) === Qn.Error && ((E = ae(s.afterPanelSentinel)) == null || E.focus());
      }, [xt.Backwards]: () => {
        var E;
        (E = ae(s.button)) == null || E.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function g() {
    let y = ae(s.panel);
    if (!y) return;
    function k() {
      ht(m.value, { [xt.Forwards]: () => {
        let E = ae(s.button), x = ae(s.panel);
        if (!E) return;
        let S = ir(), b = S.indexOf(E), w = S.slice(0, b + 1), I = [...S.slice(b + 1), ...w];
        for (let P of I.slice()) if (P.dataset.headlessuiFocusGuard === "true" || x != null && x.contains(P)) {
          let O = I.indexOf(P);
          O !== -1 && I.splice(O, 1);
        }
        Pt(I, tt.First, { sorted: !1 });
      }, [xt.Backwards]: () => {
        var E;
        Pt(y, tt.Previous) === Qn.Error && ((E = ae(s.button)) == null || E.focus());
      } });
    }
    k();
  }
  return () => {
    let y = { open: s.popoverState.value === 0, close: s.close }, { focus: k, ...E } = e, x = { ref: s.panel, id: a, onKeydown: h, onFocusout: o && s.popoverState.value === 0 ? p : void 0, tabIndex: -1 };
    return Ue({ ourProps: x, theirProps: { ...n, ...E }, attrs: n, slot: y, slots: { ...r, default: (...S) => {
      var b;
      return [X(ce, [u.value && s.isPortalled.value && X(yn, { id: c, ref: s.beforePanelSentinel, features: en.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v }), (b = r.default) == null ? void 0 : b.call(r, ...S), u.value && s.isPortalled.value && X(yn, { id: d, ref: s.afterPanelSentinel, features: en.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: Vt.RenderStrategy | Vt.Static, visible: u.value, name: "PopoverPanel" });
  };
} });
J({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null), a = In([]), o = B(() => It(i)), s = Qc();
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
    return (u = ae(i)) != null && u.contains(p) ? !0 : a.value.some((m) => {
      var v, g;
      return ((v = h.getElementById(m.buttonId.value)) == null ? void 0 : v.contains(p)) || ((g = h.getElementById(m.panelId.value)) == null ? void 0 : g.contains(p));
    });
  }
  function f(u) {
    for (let h of a.value) h.buttonId.value !== u && h.close();
  }
  return de(bs, { registerPopover: c, unregisterPopover: l, isFocusWithinPopoverGroup: d, closeOthers: f, mainTreeNodeRef: s.mainTreeNodeRef }), () => X(ce, [Ue({ ourProps: { ref: i }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: r, name: "PopoverGroup" }), X(s.MainTreeNode)]);
} });
let Ss = Symbol("LabelContext");
function ks() {
  let e = fe(Ss, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, ks), n;
  }
  return e;
}
function xd({ slot: e = {}, name: n = "Label", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return de(Ss, { register: i, slot: e, name: n, props: r }), B(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
let $d = J({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-label-${at()}`, a = ks();
  return se(() => be(a.register(i))), () => {
    let { name: o = "Label", slot: s = {}, props: l = {} } = a, { passive: c, ...d } = e, f = { ...Object.entries(l).reduce((u, [h, p]) => Object.assign(u, { [h]: re(p) }), {}), id: i };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), Ue({ ourProps: f, theirProps: d, slot: s, attrs: r, slots: n, name: o });
  };
} }), Ms = Symbol("GroupContext"), Sd = J({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = xd({ name: "SwitchLabel", props: { htmlFor: B(() => {
    var o;
    return (o = t.value) == null ? void 0 : o.id;
  }), onClick(o) {
    t.value && (o.currentTarget.tagName === "LABEL" && o.preventDefault(), t.value.click(), t.value.focus({ preventScroll: !0 }));
  } } }), a = us({ name: "SwitchDescription" });
  return de(Ms, { switchRef: t, labelledby: i, describedby: a }), () => Ue({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: r, name: "SwitchGroup" });
} }), kd = J({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: null }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a;
  let o = (a = e.id) != null ? a : `headlessui-switch-${at()}`, s = fe(Ms, null), [l, c] = wc(B(() => e.modelValue), (y) => n("update:modelValue", y), B(() => e.defaultChecked));
  function d() {
    c(!l.value);
  }
  let f = F(null), u = s === null ? f : s.switchRef, h = co(B(() => ({ as: e.as, type: r.type })), u);
  i({ el: u, $el: u });
  function p(y) {
    y.preventDefault(), d();
  }
  function m(y) {
    y.key === Be.Space ? (y.preventDefault(), d()) : y.key === Be.Enter && Nc(y.currentTarget);
  }
  function v(y) {
    y.preventDefault();
  }
  let g = B(() => {
    var y, k;
    return (k = (y = ae(u)) == null ? void 0 : y.closest) == null ? void 0 : k.call(y, "form");
  });
  return se(() => {
    De([g], () => {
      if (!g.value || e.defaultChecked === void 0) return;
      function y() {
        c(e.defaultChecked);
      }
      return g.value.addEventListener("reset", y), () => {
        var k;
        (k = g.value) == null || k.removeEventListener("reset", y);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: y, value: k, form: E, tabIndex: x, ...S } = e, b = { checked: l.value }, w = { id: o, ref: u, role: "switch", type: h.value, tabIndex: x === -1 ? 0 : x, "aria-checked": l.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: p, onKeyup: m, onKeypress: v };
    return X(ce, [y != null && l.value != null ? X(yn, Rc({ features: en.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: E, disabled: S.disabled, name: y, value: k })) : null, Ue({ ourProps: w, theirProps: { ...r, ...fo(S, ["modelValue", "defaultChecked"]) }, slot: b, attrs: r, slots: t, name: "Switch" })]);
  };
} }), br = $d;
function Md(e) {
  let n = { called: !1 };
  return (...r) => {
    if (!n.called) return n.called = !0, e(...r);
  };
}
function ma(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function wr(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var Fa = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Fa || {});
function Dd(e, n) {
  let r = ar();
  if (!e) return r.dispose;
  let { transitionDuration: t, transitionDelay: i } = getComputedStyle(e), [a, o] = [t, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, d) => d - c);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => n("finished"), a + o) : n("finished"), r.add(() => n("cancelled")), r.dispose;
}
function Qo(e, n, r, t, i, a) {
  let o = ar(), s = a !== void 0 ? Md(a) : () => {
  };
  return wr(e, ...i), ma(e, ...n, ...r), o.nextFrame(() => {
    wr(e, ...r), ma(e, ...t), o.add(Dd(e, (l) => (wr(e, ...t, ...n), ma(e, ...i), s(l))));
  }), o.add(() => wr(e, ...n, ...r, ...t, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function xn(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let mo = Symbol("TransitionContext");
var Td = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Td || {});
function Pd() {
  return fe(mo, null) !== null;
}
function Ed() {
  let e = fe(mo, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Od() {
  let e = fe(go, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let go = Symbol("NestingContext");
function Kr(e) {
  return "children" in e ? Kr(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function Ds(e) {
  let n = F([]), r = F(!1);
  se(() => r.value = !0), be(() => r.value = !1);
  function t(a, o = cn.Hidden) {
    let s = n.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (ht(o, { [cn.Unmount]() {
      n.value.splice(s, 1);
    }, [cn.Hidden]() {
      n.value[s].state = "hidden";
    } }), !Kr(n) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = n.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : n.value.push({ id: a, state: "visible" }), () => t(a, cn.Unmount);
  }
  return { children: n, register: i, unregister: t };
}
let Ts = Vt.RenderStrategy, Ya = J({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  let a = F(0);
  function o() {
    a.value |= Ze.Opening, n("beforeEnter");
  }
  function s() {
    a.value &= ~Ze.Opening, n("afterEnter");
  }
  function l() {
    a.value |= Ze.Closing, n("beforeLeave");
  }
  function c() {
    a.value &= ~Ze.Closing, n("afterLeave");
  }
  if (!Pd() && Yc()) return () => X(Ps, { ...e, onBeforeEnter: o, onAfterEnter: s, onBeforeLeave: l, onAfterLeave: c }, t);
  let d = F(null), f = B(() => e.unmount ? cn.Unmount : cn.Hidden);
  i({ el: d, $el: d });
  let { show: u, appear: h } = Ed(), { register: p, unregister: m } = Od(), v = F(u.value ? "visible" : "hidden"), g = { value: !0 }, y = at(), k = { value: !1 }, E = Ds(() => {
    !k.value && v.value !== "hidden" && (v.value = "hidden", m(y), c());
  });
  se(() => {
    let Y = p(y);
    be(Y);
  }), ve(() => {
    if (f.value === cn.Hidden && y) {
      if (u.value && v.value !== "visible") {
        v.value = "visible";
        return;
      }
      ht(v.value, { hidden: () => m(y), visible: () => p(y) });
    }
  });
  let x = xn(e.enter), S = xn(e.enterFrom), b = xn(e.enterTo), w = xn(e.entered), I = xn(e.leave), P = xn(e.leaveFrom), O = xn(e.leaveTo);
  se(() => {
    ve(() => {
      if (v.value === "visible") {
        let Y = ae(d);
        if (Y instanceof Comment && Y.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function W(Y) {
    let $ = g.value && !h.value, D = ae(d);
    !D || !(D instanceof HTMLElement) || $ || (k.value = !0, u.value && o(), u.value || l(), Y(u.value ? Qo(D, x, S, b, w, (M) => {
      k.value = !1, M === Fa.Finished && s();
    }) : Qo(D, I, P, O, w, (M) => {
      k.value = !1, M === Fa.Finished && (Kr(E) || (v.value = "hidden", m(y), c()));
    })));
  }
  return se(() => {
    De([u], (Y, $, D) => {
      W(D), g.value = !1;
    }, { immediate: !0 });
  }), de(go, E), ho(B(() => ht(v.value, { visible: Ze.Open, hidden: Ze.Closed }) | a.value)), () => {
    let { appear: Y, show: $, enter: D, enterFrom: M, enterTo: A, entered: T, leave: z, leaveFrom: N, leaveTo: R, ...H } = e, _ = { ref: d }, G = { ...H, ...h.value && u.value && or.isServer ? { class: we([r.class, H.class, ...x, ...S]) } : {} };
    return Ue({ theirProps: G, ourProps: _, slot: {}, slots: t, attrs: r, features: Ts, visible: v.value === "visible", name: "TransitionChild" });
  };
} }), Ad = Ya, Ps = J({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t }) {
  let i = Vn(), a = B(() => e.show === null && i !== null ? (i.value & Ze.Open) === Ze.Open : e.show);
  ve(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = F(a.value ? "visible" : "hidden"), s = Ds(() => {
    o.value = "hidden";
  }), l = F(!0), c = { show: a, appear: B(() => e.appear || !l.value) };
  return se(() => {
    ve(() => {
      l.value = !1, a.value ? o.value = "visible" : Kr(s) || (o.value = "hidden");
    });
  }), de(go, s), de(mo, c), () => {
    let d = fo(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return Ue({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...t, default: () => [X(Ad, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...r, ...f, ...d }, t.default)] }, attrs: {}, features: Ts, visible: o.value === "visible", name: "Transition" });
  };
} });
const Cd = ["data-test"], Ld = ["data-test"], Id = {
  key: 0,
  class: "tc-block tc-mb-2"
}, Rd = ["data-test"], w1 = {
  __name: "InputSwitch",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = n, t = yt(e, "modelValue"), i = () => {
      r("update:modelValue", !!t.value);
    };
    return De(t, i), (a, o) => {
      var s, l;
      return L(), j(ce, null, [
        ee(re(Sd), {
          as: "div",
          class: "tc-flex tc-items-center"
        }, {
          default: Me(() => [
            e.disabledText ? (L(), $e(re(br), {
              key: 0,
              as: "span",
              class: "tc-mr-3 tc-text-sm"
            }, {
              default: Me(() => [
                C("span", {
                  "data-test": e.dataTest + "-disabled-text",
                  class: "tc-font-medium tc-text-gray-900"
                }, ne(e.disabledText), 9, Cd),
                o[1] || (o[1] = He(" " + ne(" "), -1))
              ]),
              _: 1
            })) : Q("", !0),
            e.disabledIcon ? (L(), $e(re(br), {
              key: 1,
              "data-test": e.dataTest + "-disabled-icon",
              as: "span",
              class: "tc-mr-3"
            }, {
              default: Me(() => [
                (L(), $e(On(e.disabledIcon), { class: "tc-h-6 tc-w-6 tc-cursor-pointer" })),
                o[2] || (o[2] = He(" " + ne(" "), -1))
              ]),
              _: 1
            }, 8, ["data-test"])) : Q("", !0),
            ee(re(kd), {
              modelValue: t.value,
              "onUpdate:modelValue": o[0] || (o[0] = (c) => t.value = c),
              disabled: e.disabled,
              "data-test": e.dataTest + "-switch",
              class: we([t.value ? "tc-bg-tonik-purple" : "tc-bg-gray-300", "tc-relative tc-inline-flex tc-h-6 tc-w-11 tc-flex-shrink-0 tc-cursor-pointer tc-rounded-full tc-border-2 tc-border-transparent tc-transition-colors tc-duration-200 tc-ease-in-out focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-tonik-purple focus:tc-ring-offset-2"]),
              onClick: i
            }, {
              default: Me(() => [
                o[3] || (o[3] = C("span", { class: "sr-only" }, "Use setting", -1)),
                C("span", {
                  "aria-hidden": "true",
                  class: we([t.value ? "tc-translate-x-5" : "tc-translate-x-0", "tc-pointer-events-none tc-inline-block tc-size-5 tc-transform tc-rounded-full tc-bg-white tc-shadow tc-ring-0 tc-transition tc-duration-200 tc-ease-in-out"])
                }, null, 2)
              ]),
              _: 1
            }, 8, ["modelValue", "disabled", "data-test", "class"]),
            e.enabledText ? (L(), $e(re(br), {
              key: 2,
              as: "span",
              class: "tc-ml-3 tc-text-sm"
            }, {
              default: Me(() => [
                C("span", {
                  "data-test": e.dataTest + "-enabled-text",
                  class: "tc-font-medium tc-text-gray-900"
                }, ne(e.enabledText), 9, Ld),
                o[4] || (o[4] = He(" " + ne(" "), -1))
              ]),
              _: 1
            })) : Q("", !0),
            e.enabledIcon ? (L(), $e(re(br), {
              key: 3,
              "data-test": e.dataTest + "-enabled-icon",
              as: "span",
              class: "tc-ml-3"
            }, {
              default: Me(() => [
                (L(), $e(On(e.enabledIcon), { class: "tc-h-6 tc-w-6 tc-cursor-pointer" })),
                o[5] || (o[5] = He(" " + ne(" "), -1))
              ]),
              _: 1
            }, 8, ["data-test"])) : Q("", !0)
          ]),
          _: 1
        }),
        e.showError && ((s = e.v) != null && s.$invalid) ? (L(), j("span", Id, [
          (L(!0), j(ce, null, Le((l = e.v) == null ? void 0 : l.$silentErrors, (c, d) => (L(), j("p", {
            key: d,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-email-error" + c.$uid,
              class: "tc-font-medium"
            }, ne(c.$message), 9, Rd)
          ]))), 128))
        ])) : Q("", !0)
      ], 64);
    };
  }
}, Fd = ["id", "disabled", "data-test"], Yd = ["for", "data-test"], jd = {
  key: 0,
  class: "tc-text-red-500"
}, Bd = { key: 1 }, zd = ["data-test"], ei = {
  __name: "InputCheckbox",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue", "clicked"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = yt(e, "modelValue"), t = n, i = () => {
      t("clicked", !r.value);
    };
    return De(r, () => {
      t("update:modelValue", r.value);
    }), (o, s) => {
      var l, c, d;
      return L(), j(ce, null, [
        Fe(C("input", {
          id: e.dataTest + "checkbox-label",
          "onUpdate:modelValue": s[0] || (s[0] = (f) => r.value = f),
          disabled: e.disabled,
          type: "checkbox",
          "data-test": e.dataTest + "-option",
          class: "tc-size-4 tc-rounded tc-border-gray-300 tc-text-tp-primary focus:tc-ring-tonik-purple",
          onClick: i
        }, null, 8, Fd), [
          [_i, r.value]
        ]),
        e.label ? (L(), j("label", {
          key: 0,
          for: e.dataTest + "checkbox-label",
          "data-test": e.dataTest + "-label",
          class: "tc-font-medium tc-text-gray-900 tc-ml-2"
        }, [
          He(ne(e.label) + " ", 1),
          (l = e.v) != null && l.required ? (L(), j("span", jd, "*")) : Q("", !0)
        ], 8, Yd)) : Q("", !0),
        e.showError && ((c = e.v) != null && c.$invalid) ? (L(), j("span", Bd, [
          (L(!0), j(ce, null, Le((d = e.v) == null ? void 0 : d.$silentErrors, (f, u) => (L(), j("p", {
            key: u,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              class: "tc-font-medium",
              "data-test": e.dataTest + "-email-error" + f.$uid
            }, ne(f.$message), 9, zd)
          ]))), 128))
        ])) : Q("", !0)
      ], 64);
    };
  }
}, Nd = {
  key: 0,
  class: "tc-text-base tc-font-semibold tc-leading-6 tc-text-gray-900"
}, Hd = { class: "tc-mt-6 tc-space-y-6" }, Vd = { class: "tc-flex tc-h-6 tc-items-center" }, Wd = ["id", "data-test", "value"], Ud = { class: "tc-text-base tc-leading-6" }, _d = ["data-test", "for"], qd = ["data-test"], Zd = { key: 0 }, Kd = ["data-test"], x1 = {
  __name: "InputCheckboxGroup",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = yt(e, "modelValue"), t = n;
    return De(r, () => {
      t("update:modelValue", r.value);
    }), (a, o) => {
      var s, l;
      return L(), j("div", null, [
        C("fieldset", null, [
          e.label ? (L(), j("legend", Nd)) : Q("", !0),
          C("div", Hd, [
            (L(!0), j(ce, null, Le(e.options, (c, d) => (L(), j("div", {
              key: d,
              class: "tc-relative tc-flex tc-gap-x-3"
            }, [
              C("div", Vd, [
                Fe(C("input", {
                  id: c.value,
                  "onUpdate:modelValue": o[0] || (o[0] = (f) => r.value = f),
                  "data-test": e.dataTest + "-option-" + d,
                  value: c.value,
                  class: "tc-h-4 tc-w-4 tc-rounded tc-border-gray-300 tc-text-tp-primary focus:tc-ring-tonik-purple",
                  type: "checkbox"
                }, null, 8, Wd), [
                  [_i, r.value]
                ])
              ]),
              C("div", Ud, [
                C("label", {
                  "data-test": e.dataTest + "-label-" + d,
                  for: c.index + "-label",
                  class: "tc-font-medium tc-text-gray-900"
                }, ne(c.label), 9, _d),
                c.description ? (L(), j("p", {
                  key: 0,
                  "data-test": e.dataTest + "-description-" + d,
                  class: "tc-text-gray-500"
                }, ne(c.description), 9, qd)) : Q("", !0)
              ])
            ]))), 128))
          ])
        ]),
        e.showError && ((s = e.v) != null && s.$invalid) ? (L(), j("span", Zd, [
          (L(!0), j(ce, null, Le((l = e.v) == null ? void 0 : l.$silentErrors, (c, d) => (L(), j("p", {
            key: d,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-email-error" + c.$uid,
              class: "tc-font-medium"
            }, ne(c.$message), 9, Kd)
          ]))), 128))
        ])) : Q("", !0)
      ]);
    };
  }
}, Gd = ["data-test"], Xd = ["data-test"], Jd = { class: "tc-mt-6 tc-space-y-6" }, Qd = ["id", "data-test", "value"], ef = ["data-test", "for"], tf = { key: 0 }, nf = ["data-test"], $1 = {
  __name: "InputRadio",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = yt(e, "modelValue"), t = n, i = () => {
      t("update:modelValue", r.value);
    };
    return De(r, i), (a, o) => (L(), j("fieldset", null, [
      e.legend ? (L(), j("legend", {
        key: 0,
        "data-test": e.dataTest + "-legend",
        class: "tc-text-base tc-font-semibold tc-leading-6 tc-text-gray-900"
      }, ne(e.legend), 9, Gd)) : Q("", !0),
      e.description ? (L(), j("p", {
        key: 1,
        "data-test": e.dataTest + "-description",
        class: "tc-mt-1 tc-text-base tc-leading-6 tc-text-gray-600"
      }, ne(e.description), 9, Xd)) : Q("", !0),
      C("div", Jd, [
        (L(!0), j(ce, null, Le(e.options, (s, l) => {
          var c, d;
          return L(), j("div", {
            key: l,
            class: "tc-flex tc-items-center tc-gap-x-3"
          }, [
            Fe(C("input", {
              id: s.value,
              "onUpdate:modelValue": o[0] || (o[0] = (f) => r.value = f),
              "data-test": e.dataTest + "-input-" + l,
              value: s.value,
              class: "tc-h-4 tc-w-4 tc-border-gray-300 tc-text-tp-primary focus:tc-ring-tonik-purple",
              type: "radio",
              onChange: i
            }, null, 40, Qd), [
              [zu, r.value]
            ]),
            C("label", {
              "data-test": e.dataTest + "-label-" + l,
              for: s.value,
              class: "tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900"
            }, ne(s.label), 9, ef),
            e.showError && ((c = e.v) != null && c.$invalid) ? (L(), j("span", tf, [
              (L(!0), j(ce, null, Le((d = e.v) == null ? void 0 : d.$silentErrors, (f, u) => (L(), j("p", {
                key: u,
                class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
              }, [
                C("span", {
                  "data-test": e.dataTest + "-email-error" + f.$uid,
                  class: "tc-font-medium"
                }, ne(f.$message), 9, nf)
              ]))), 128))
            ])) : Q("", !0)
          ]);
        }), 128))
      ])
    ]));
  }
};
function rf(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function af(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function of(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function sf(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function lf(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function uf(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function cf(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", { d: "M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z" })
  ]);
}
function df(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", { d: "M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" })
  ]);
}
function ff(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function hf(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const pf = { class: "tc-flex" }, vf = { class: "tc-flex-shrink-0" }, mf = { class: "tc-ml-3" }, gf = {
  key: 0,
  class: "tc-ml-auto tc-pl-3"
}, yf = { class: "-tc-mx-1.5 -tc-my-1.5" }, Es = {
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
    return (i, a) => (L(), j("div", {
      class: we(["tc-rounded-md tc-p-4", {
        "tc-bg-yellow-50": e.type === "warning",
        "tc-bg-green-2": e.type === "success",
        "tc-bg-error-light": e.type === "error",
        "tc-bg-info": e.type === "primary"
      }])
    }, [
      C("div", pf, [
        C("div", vf, [
          e.type === "success" ? (L(), $e(re(af), {
            key: 0,
            class: "tc-size-5 tc-text-success",
            "aria-hidden": "true"
          })) : Q("", !0),
          e.type === "warning" ? (L(), $e(re(lf), {
            key: 1,
            class: "tc-size-5 tc-text-yellow-400",
            "aria-hidden": "true"
          })) : Q("", !0),
          e.type === "error" ? (L(), $e(re(ff), {
            key: 2,
            class: "tc-size-5 tc-text-error",
            "aria-hidden": "true"
          })) : Q("", !0),
          e.type === "primary" ? (L(), $e(re(uf), {
            key: 3,
            class: "tc-size-5 tc-text-tendo-blue",
            "aria-hidden": "true"
          })) : Q("", !0)
        ]),
        C("div", mf, [
          C("p", {
            class: we(["tc-text-base tc-font-medium", {
              "tc-text-yellow-700": e.type === "warning",
              "tc-text-success": e.type === "success",
              "tc-text-error": e.type === "error",
              "tc-text-tendo-blue": e.type === "primary"
            }])
          }, ne(e.message), 3),
          Ce(i.$slots, "default", { class: "tc-mt-2 tc-text-base" })
        ]),
        e.close ? (L(), j("div", gf, [
          C("div", yf, [
            C("button", {
              type: "button",
              class: "tc-inline-flex tc-rounded-md tc-bg-green-2 tc-p-1.5 tc-text-success hover:tc-bg-green-100 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-green-600 focus:tc-ring-offset-2 focus:tc-ring-offset-green-50",
              onClick: t
            }, [
              a[0] || (a[0] = C("span", { class: "tc-sr-only" }, "Dismiss", -1)),
              ee(re(hf), {
                class: "tc-size-5",
                "aria-hidden": "true"
              })
            ])
          ])
        ])) : Q("", !0)
      ])
    ], 2));
  }
}, bf = { class: "tc-relative" }, wf = ["for"], xf = { class: "tc-flex tc-rounded-md tc-shadow-sm tc-py-2" }, $f = { class: "tc-relative tc-flex tc-flex-grow tc-items-stretch focus-within:tc-z-10" }, Sf = ["id", "data-test", "type", "value"], kf = ["data-test"], Mf = ["data-test"], S1 = {
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
    const r = n, t = Rn({
      secretHidden: !0,
      copied: !1,
      timeoutObj: null
    }), i = B(() => (t.copied && (t.timeoutObj = setTimeout(() => t.copied = !1, 800)), !!t.copied)), a = e;
    function o() {
      navigator.clipboard.writeText(a.value), r("copy"), t.copied = !0;
    }
    function s() {
      t.secretHidden = !t.secretHidden;
    }
    return (l, c) => (L(), j(ce, null, [
      C("div", bf, [
        e.label ? (L(), j("label", {
          key: 0,
          for: e.dataTest,
          class: "tc-block tc-text-base tc-font-medium tc-leading-6 tc-text-gray-900"
        }, ne(e.label), 9, wf)) : Q("", !0),
        C("div", xf, [
          C("div", $f, [
            C("input", {
              id: e.dataTest,
              "data-test": e.dataTest + "-input",
              type: e.hide && t.secretHidden ? "password" : "text",
              value: e.value,
              class: "tc-block tc-w-full focus:tc-ring-tonik-purple tc-rounded-none tc-rounded-l-md tc-border-0 tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-gray-300 placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset sm:tc-text-sm sm:tc-leading-6",
              name: "text",
              readonly: ""
            }, null, 8, Sf)
          ]),
          C("button", {
            class: we([{ "tc-rounded-r-md": !e.hide }, "tc-relative -tc-ml-px tc-inline-flex tc-items-center tc-gap-x-1.5 tc-px-3 tc-py-2 tc-text-base tc-font-semibold tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-tonik-purple hover:tc-bg-gray-50"]),
            "data-test": e.dataTest + "-copy-button",
            type: "button",
            onClick: o
          }, [
            ee(re(Vu), {
              class: "-tc-ml-0.5 tc-size-5 tc-text-tonik-purple",
              "aria-hidden": "true"
            })
          ], 10, kf),
          e.hide ? (L(), j("button", {
            key: 0,
            "data-test": e.dataTest + "-toggle-button",
            class: "tc-relative -tc-ml-px tc-inline-flex tc-items-center tc-gap-x-1.5 tc-rounded-r-md tc-px-3 tc-py-2 tc-text-sm tc-font-semibold tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-tonik-purple hover:tc-bg-gray-50",
            type: "button",
            onClick: s
          }, [
            ee(re(Wu), {
              class: "-tc-ml-0.5 tc-size-5 tc-text-tonik-purple",
              "aria-hidden": "true"
            })
          ], 8, Mf)) : Q("", !0)
        ])
      ]),
      i.value ? (L(), $e(Es, {
        key: 0,
        message: a.resultMessage,
        class: "tc-mt-2 tc-mb-2",
        type: "success"
      }, null, 8, ["message"])) : Q("", !0)
    ], 64));
  }
}, Df = ["data-test"], Tf = {
  key: 0,
  class: "tc-text-red-500"
}, Pf = { class: "tc-relative tc-mt-2" }, Ef = ["placeholder", "disabled", "maxlength", "readonly", "data-test"], Of = {
  key: 1,
  class: "block tc-mb-2"
}, Af = ["data-test"], Cf = {
  key: 0,
  class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
}, Lf = ["data-test"], If = {
  key: 1,
  class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
}, Rf = ["data-test"], k1 = {
  __name: "InputTextarea",
  props: /* @__PURE__ */ je({
    label: { type: String, default: null },
    value: { type: String, default: null },
    placeholder: { type: String, default: null },
    maxLength: { type: Number, default: null },
    disabled: { type: Boolean, default: !1 },
    showError: { type: Boolean, default: !0 },
    readonly: { type: Boolean, default: !1 },
    v: { type: Object, default: () => null },
    dataTest: { type: String, required: !0 }
  }, {
    modelValue: { type: String, default: null, required: !1 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = yt(e, "modelValue"), t = n, i = () => {
      t("update:modelValue", r.value);
    };
    return De(r, i), (a, o) => {
      var s, l, c, d, f, u, h, p, m, v, g;
      return L(), j("div", null, [
        e.label ? (L(), j("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          class: "tc-block tc-text-base tc-font-medium tc-text-gray-900",
          for: "input-textarea"
        }, [
          He(ne(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (L(), j("span", Tf, "*")) : Q("", !0)
        ], 8, Df)) : Q("", !0),
        C("div", Pf, [
          Fe(C("textarea", {
            id: "input-textarea",
            "onUpdate:modelValue": o[0] || (o[0] = (y) => r.value = y),
            placeholder: e.placeholder,
            disabled: e.disabled,
            maxlength: e.maxLength,
            readonly: e.readonly,
            name: "comment",
            rows: "4",
            class: we(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-p-3 tc-ring-1 tc-ring-inset tc-ring-gray-300 tc-text-base tc-leading-6 placeholder:tc-text-base placeholder:tc-font-medium focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple", {
              "tc-text-red-900 tc-ring-red-500 placeholder:tc-text-red-500 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
              disabled: e.disabled
            }]),
            "data-test": e.dataTest + "-textarea",
            onInput: i
          }, null, 42, Ef), [
            [Qt, r.value]
          ]),
          (c = e.v) != null && c.$invalid ? (L(), j("div", {
            key: 0,
            class: we(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
          }, [
            ee(re(Fn), { class: "tc-size-5 tc-text-red-500" })
          ], 2)) : Q("", !0)
        ]),
        e.showError && ((d = e.v) != null && d.$invalid) ? (L(), j("span", Of, [
          (L(!0), j(ce, null, Le((f = e.v) == null ? void 0 : f.$silentErrors, (y, k) => (L(), j("p", {
            key: k,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-email-error" + y.$uid,
              class: "tc-font-medium"
            }, ne(y.$message), 9, Af)
          ]))), 128)),
          (h = (u = e.v) == null ? void 0 : u.maxLength) != null && h.$invalid ? (L(), j("p", Cf, [
            C("span", {
              "data-test": e.dataTest + "-maxLength-error",
              class: "tc-font-medium"
            }, ne((p = e.v) == null ? void 0 : p.maxLength.$message), 9, Lf)
          ])) : Q("", !0),
          (v = (m = e.v) == null ? void 0 : m.minLength) != null && v.$invalid ? (L(), j("p", If, [
            C("span", {
              "data-test": e.dataTest + "-minLength-error",
              class: "tc-font-medium"
            }, ne((g = e.v) == null ? void 0 : g.minLength.$message), 9, Rf)
          ])) : Q("", !0)
        ])) : Q("", !0)
      ]);
    };
  }
}, yo = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [t, i] of n)
    r[t] = i;
  return r;
}, Ff = { class: "tc-relative" }, Yf = ["data-test", "for"], jf = {
  key: 0,
  class: "tc-text-red-500"
}, Bf = { class: "tc-relative tc-rounded-md tc-shadow-sm" }, zf = { class: "tc-absolute tc-inset-y-0 tc-left-0 tc-flex tc-items-center" }, Nf = ["disabled", "data-test"], Hf = ["data-test"], Vf = ["id", "disabled", "placeholder", "data-test"], Wf = {
  key: 2,
  class: "block tc-mb-2"
}, Uf = ["data-test"], _f = {
  __name: "InputUrl",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = F(""), t = F("https"), i = yt(e, "modelValue"), a = [
      "https",
      "http"
    ], o = n, s = B(() => `${t.value}://${r.value}`), l = () => {
      i != null && i.value && (t.value = i.value.startsWith("https") ? "https" : "http", r.value = i.value.replace(/^https?:\/\//, ""));
    };
    return l(), De(i, () => {
      l();
    }), De([t, r], () => {
      if (r.value.length === 0) {
        o("update:modelValue", null);
        return;
      }
      o("update:modelValue", s.value);
    }), (c, d) => {
      var f, u, h, p, m, v;
      return L(), j("div", Ff, [
        e.label ? (L(), j("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          for: e.dataTest,
          class: "tc-block tc-text-sm tc-font-medium tc-leading-6 tc-text-gray-900 tc-mb-2"
        }, [
          He(ne(e.label) + " ", 1),
          (f = e.v) != null && f.required ? (L(), j("span", jf, "*")) : Q("", !0)
        ], 8, Yf)) : Q("", !0),
        C("div", Bf, [
          C("div", zf, [
            Fe(C("select", {
              "onUpdate:modelValue": d[0] || (d[0] = (g) => t.value = g),
              disabled: e.disabled,
              name: "type",
              autocomplete: "type",
              "data-test": e.dataTest + "-select-type",
              class: "tc-h-full tc-rounded-md tc-border-0 tc-bg-transparent tc-pl-3 tc-pr-12 tc-text-gray-500 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple sm:tc-text-sm"
            }, [
              (L(), j(ce, null, Le(a, (g, y) => C("option", {
                key: y,
                "data-test": e.dataTest + "-option-" + y
              }, ne(g), 9, Hf)), 64))
            ], 8, Nf), [
              [qi, t.value]
            ])
          ]),
          Fe(C("input", {
            id: e.dataTest,
            "onUpdate:modelValue": d[1] || (d[1] = (g) => r.value = g),
            disabled: e.disabled,
            type: "text",
            name: "url",
            class: we(["input-offset tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-gray-300 placeholder:tc-text-gray-400 sm:tc-text-sm sm:tc-leading-6", {
              "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (u = e.v) == null ? void 0 : u.$invalid,
              "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((h = e.v) != null && h.$invalid),
              disabled: e.disabled
            }]),
            placeholder: e.placeholder,
            "data-test": e.dataTest + "-input"
          }, null, 10, Vf), [
            [Qt, r.value]
          ])
        ]),
        (p = e.v) != null && p.$invalid ? (L(), j("div", {
          key: 1,
          class: we(`tc-absolute tc-right-2 ${e.label ? "tc-top-9" : "tc-top-2"}`)
        }, [
          ee(re(Fn), { class: "tc-size-5 tc-text-red-500" })
        ], 2)) : Q("", !0),
        e.showError && ((m = e.v) != null && m.$invalid) ? (L(), j("span", Wf, [
          (L(!0), j(ce, null, Le((v = e.v) == null ? void 0 : v.$silentErrors, (g, y) => (L(), j("p", {
            key: y,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-url-error" + g.$uid,
              class: "tc-font-medium"
            }, ne(g.$message), 9, Uf)
          ]))), 128))
        ])) : Q("", !0)
      ]);
    };
  }
}, M1 = /* @__PURE__ */ yo(_f, [["__scopeId", "data-v-6ff60168"]]), qf = {
  key: 0,
  class: "tc-block tc-text-base tc-font-medium tc-leading-6 tc-text-gray-900",
  for: "price"
}, Zf = {
  key: 0,
  class: "tc-text-red-500"
}, Kf = { class: "tc-relative tc-rounded-md tc-shadow-sm" }, Gf = ["disabled", "max", "min", "placeholder", "step"], Xf = { class: "tc-pointer-events-none tc-absolute tc-inset-y-0 tc-right-0 tc-flex tc-items-center tc-pr-3" }, Jf = {
  id: "price-currency",
  class: "tc-text-gray-500 sm:tc-text-sm"
}, Qf = {
  key: 0,
  class: "tc-absolute tc-right-16 tc-top-2"
}, eh = {
  key: 1,
  class: "block tc-mb-2"
}, th = ["data-test"], D1 = {
  __name: "InputCurrency",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = yt(e, "modelValue"), t = e, i = n;
    return De(r, () => {
      i("update:modelValue", r.value);
    }), (o, s) => {
      var l, c, d, f, u;
      return L(), j("div", null, [
        t.label ? (L(), j("label", qf, [
          Ce(o.$slots, "label", {}, () => {
            var h;
            return [
              He(ne(e.label) + " ", 1),
              (h = e.v) != null && h.required ? (L(), j("span", Zf, "*")) : Q("", !0)
            ];
          })
        ])) : Q("", !0),
        C("div", Kf, [
          Fe(C("input", {
            id: "price",
            "onUpdate:modelValue": s[0] || (s[0] = (h) => r.value = h),
            disabled: e.disabled,
            max: e.max,
            min: e.min,
            placeholder: e.placeholder,
            step: e.step,
            "aria-describedby": "price-currency",
            class: we(["tc-block tc-w-full tc-rounded-md tc-border-0 tc-py-1.5 tc-pl-7 tc-pr-12 tc-text-gray-900 tc-ring-1 tc-ring-inset tc-ring-gray-300 placeholder:tc-text-gray-400 sm:tc-text-sm sm:tc-leading-6", {
              "tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
              "tc-text-gray-900 tc-shadow-sm placeholder:tc-text-gray-400 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((c = e.v) != null && c.$invalid),
              disabled: e.disabled
            }]),
            name: "price",
            type: "number"
          }, null, 10, Gf), [
            [Qt, r.value]
          ]),
          C("div", Xf, [
            C("span", Jf, ne(t.currency), 1)
          ]),
          (d = e.v) != null && d.$invalid ? (L(), j("div", Qf, [
            ee(re(Fn), { class: "tc-size-5 tc-text-red-500" })
          ])) : Q("", !0)
        ]),
        e.showError && ((f = e.v) != null && f.$invalid) ? (L(), j("span", eh, [
          (L(!0), j(ce, null, Le((u = e.v) == null ? void 0 : u.$silentErrors, (h, p) => (L(), j("p", {
            key: p,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-email-error" + h.$uid,
              class: "tc-font-medium"
            }, ne(h.$message), 9, th)
          ]))), 128))
        ])) : Q("", !0)
      ]);
    };
  }
};
var rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function an(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Os = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(rn, function() {
    var r = 1e3, t = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", l = "hour", c = "day", d = "week", f = "month", u = "quarter", h = "year", p = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var D = ["th", "st", "nd", "rd"], M = $ % 100;
      return "[" + $ + (D[(M - 20) % 10] || D[M] || D[0]) + "]";
    } }, k = function($, D, M) {
      var A = String($);
      return !A || A.length >= D ? $ : "" + Array(D + 1 - A.length).join(M) + $;
    }, E = { s: k, z: function($) {
      var D = -$.utcOffset(), M = Math.abs(D), A = Math.floor(M / 60), T = M % 60;
      return (D <= 0 ? "+" : "-") + k(A, 2, "0") + ":" + k(T, 2, "0");
    }, m: function $(D, M) {
      if (D.date() < M.date()) return -$(M, D);
      var A = 12 * (M.year() - D.year()) + (M.month() - D.month()), T = D.clone().add(A, f), z = M - T < 0, N = D.clone().add(A + (z ? -1 : 1), f);
      return +(-(A + (M - T) / (z ? T - N : N - T)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: f, y: h, w: d, d: c, D: p, h: l, m: s, s: o, ms: a, Q: u }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, x = "en", S = {};
    S[x] = y;
    var b = "$isDayjsObject", w = function($) {
      return $ instanceof W || !(!$ || !$[b]);
    }, I = function $(D, M, A) {
      var T;
      if (!D) return x;
      if (typeof D == "string") {
        var z = D.toLowerCase();
        S[z] && (T = z), M && (S[z] = M, T = z);
        var N = D.split("-");
        if (!T && N.length > 1) return $(N[0]);
      } else {
        var R = D.name;
        S[R] = D, T = R;
      }
      return !A && T && (x = T), T || !A && x;
    }, P = function($, D) {
      if (w($)) return $.clone();
      var M = typeof D == "object" ? D : {};
      return M.date = $, M.args = arguments, new W(M);
    }, O = E;
    O.l = I, O.i = w, O.w = function($, D) {
      return P($, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var W = function() {
      function $(M) {
        this.$L = I(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[b] = !0;
      }
      var D = $.prototype;
      return D.parse = function(M) {
        this.$d = function(A) {
          var T = A.date, z = A.utc;
          if (T === null) return /* @__PURE__ */ new Date(NaN);
          if (O.u(T)) return /* @__PURE__ */ new Date();
          if (T instanceof Date) return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var N = T.match(v);
            if (N) {
              var R = N[2] - 1 || 0, H = (N[7] || "0").substring(0, 3);
              return z ? new Date(Date.UTC(N[1], R, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, H)) : new Date(N[1], R, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, H);
            }
          }
          return new Date(T);
        }(M), this.init();
      }, D.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, D.$utils = function() {
        return O;
      }, D.isValid = function() {
        return this.$d.toString() !== m;
      }, D.isSame = function(M, A) {
        var T = P(M);
        return this.startOf(A) <= T && T <= this.endOf(A);
      }, D.isAfter = function(M, A) {
        return P(M) < this.startOf(A);
      }, D.isBefore = function(M, A) {
        return this.endOf(A) < P(M);
      }, D.$g = function(M, A, T) {
        return O.u(M) ? this[A] : this.set(T, M);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(M, A) {
        var T = this, z = !!O.u(A) || A, N = O.p(M), R = function(Se, ue) {
          var ye = O.w(T.$u ? Date.UTC(T.$y, ue, Se) : new Date(T.$y, ue, Se), T);
          return z ? ye : ye.endOf(c);
        }, H = function(Se, ue) {
          return O.w(T.toDate()[Se].apply(T.toDate("s"), (z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), T);
        }, _ = this.$W, G = this.$M, le = this.$D, ge = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case h:
            return z ? R(1, 0) : R(31, 11);
          case f:
            return z ? R(1, G) : R(0, G + 1);
          case d:
            var xe = this.$locale().weekStart || 0, Ae = (_ < xe ? _ + 7 : _) - xe;
            return R(z ? le - Ae : le + (6 - Ae), G);
          case c:
          case p:
            return H(ge + "Hours", 0);
          case l:
            return H(ge + "Minutes", 1);
          case s:
            return H(ge + "Seconds", 2);
          case o:
            return H(ge + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, D.endOf = function(M) {
        return this.startOf(M, !1);
      }, D.$set = function(M, A) {
        var T, z = O.p(M), N = "set" + (this.$u ? "UTC" : ""), R = (T = {}, T[c] = N + "Date", T[p] = N + "Date", T[f] = N + "Month", T[h] = N + "FullYear", T[l] = N + "Hours", T[s] = N + "Minutes", T[o] = N + "Seconds", T[a] = N + "Milliseconds", T)[z], H = z === c ? this.$D + (A - this.$W) : A;
        if (z === f || z === h) {
          var _ = this.clone().set(p, 1);
          _.$d[R](H), _.init(), this.$d = _.set(p, Math.min(this.$D, _.daysInMonth())).$d;
        } else R && this.$d[R](H);
        return this.init(), this;
      }, D.set = function(M, A) {
        return this.clone().$set(M, A);
      }, D.get = function(M) {
        return this[O.p(M)]();
      }, D.add = function(M, A) {
        var T, z = this;
        M = Number(M);
        var N = O.p(A), R = function(G) {
          var le = P(z);
          return O.w(le.date(le.date() + Math.round(G * M)), z);
        };
        if (N === f) return this.set(f, this.$M + M);
        if (N === h) return this.set(h, this.$y + M);
        if (N === c) return R(1);
        if (N === d) return R(7);
        var H = (T = {}, T[s] = t, T[l] = i, T[o] = r, T)[N] || 1, _ = this.$d.getTime() + M * H;
        return O.w(_, this);
      }, D.subtract = function(M, A) {
        return this.add(-1 * M, A);
      }, D.format = function(M) {
        var A = this, T = this.$locale();
        if (!this.isValid()) return T.invalidDate || m;
        var z = M || "YYYY-MM-DDTHH:mm:ssZ", N = O.z(this), R = this.$H, H = this.$m, _ = this.$M, G = T.weekdays, le = T.months, ge = T.meridiem, xe = function(ue, ye, Te, Oe) {
          return ue && (ue[ye] || ue(A, z)) || Te[ye].slice(0, Oe);
        }, Ae = function(ue) {
          return O.s(R % 12 || 12, ue, "0");
        }, Se = ge || function(ue, ye, Te) {
          var Oe = ue < 12 ? "AM" : "PM";
          return Te ? Oe.toLowerCase() : Oe;
        };
        return z.replace(g, function(ue, ye) {
          return ye || function(Te) {
            switch (Te) {
              case "YY":
                return String(A.$y).slice(-2);
              case "YYYY":
                return O.s(A.$y, 4, "0");
              case "M":
                return _ + 1;
              case "MM":
                return O.s(_ + 1, 2, "0");
              case "MMM":
                return xe(T.monthsShort, _, le, 3);
              case "MMMM":
                return xe(le, _);
              case "D":
                return A.$D;
              case "DD":
                return O.s(A.$D, 2, "0");
              case "d":
                return String(A.$W);
              case "dd":
                return xe(T.weekdaysMin, A.$W, G, 2);
              case "ddd":
                return xe(T.weekdaysShort, A.$W, G, 3);
              case "dddd":
                return G[A.$W];
              case "H":
                return String(R);
              case "HH":
                return O.s(R, 2, "0");
              case "h":
                return Ae(1);
              case "hh":
                return Ae(2);
              case "a":
                return Se(R, H, !0);
              case "A":
                return Se(R, H, !1);
              case "m":
                return String(H);
              case "mm":
                return O.s(H, 2, "0");
              case "s":
                return String(A.$s);
              case "ss":
                return O.s(A.$s, 2, "0");
              case "SSS":
                return O.s(A.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(ue) || N.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(M, A, T) {
        var z, N = this, R = O.p(A), H = P(M), _ = (H.utcOffset() - this.utcOffset()) * t, G = this - H, le = function() {
          return O.m(N, H);
        };
        switch (R) {
          case h:
            z = le() / 12;
            break;
          case f:
            z = le();
            break;
          case u:
            z = le() / 3;
            break;
          case d:
            z = (G - _) / 6048e5;
            break;
          case c:
            z = (G - _) / 864e5;
            break;
          case l:
            z = G / i;
            break;
          case s:
            z = G / t;
            break;
          case o:
            z = G / r;
            break;
          default:
            z = G;
        }
        return T ? z : O.a(z);
      }, D.daysInMonth = function() {
        return this.endOf(f).$D;
      }, D.$locale = function() {
        return S[this.$L];
      }, D.locale = function(M, A) {
        if (!M) return this.$L;
        var T = this.clone(), z = I(M, A, !0);
        return z && (T.$L = z), T;
      }, D.clone = function() {
        return O.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), Y = W.prototype;
    return P.prototype = Y, [["$ms", a], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", h], ["$D", p]].forEach(function($) {
      Y[$[1]] = function(D) {
        return this.$g(D, $[0], $[1]);
      };
    }), P.extend = function($, D) {
      return $.$i || ($(D, W, P), $.$i = !0), P;
    }, P.locale = I, P.isDayjs = w, P.unix = function($) {
      return P(1e3 * $);
    }, P.en = S[x], P.Ls = S, P.p = {}, P;
  });
})(Os);
var nh = Os.exports;
const V = /* @__PURE__ */ an(nh);
var As = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(rn, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
    return function(i, a, o) {
      var s, l = function(u, h, p) {
        p === void 0 && (p = {});
        var m = new Date(u), v = function(g, y) {
          y === void 0 && (y = {});
          var k = y.timeZoneName || "short", E = g + "|" + k, x = t[E];
          return x || (x = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: g, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: k }), t[E] = x), x;
        }(h, p);
        return v.formatToParts(m);
      }, c = function(u, h) {
        for (var p = l(u, h), m = [], v = 0; v < p.length; v += 1) {
          var g = p[v], y = g.type, k = g.value, E = r[y];
          E >= 0 && (m[E] = parseInt(k, 10));
        }
        var x = m[3], S = x === 24 ? 0 : x, b = m[0] + "-" + m[1] + "-" + m[2] + " " + S + ":" + m[4] + ":" + m[5] + ":000", w = +u;
        return (o.utc(b).valueOf() - (w -= w % 1e3)) / 6e4;
      }, d = a.prototype;
      d.tz = function(u, h) {
        u === void 0 && (u = s);
        var p, m = this.utcOffset(), v = this.toDate(), g = v.toLocaleString("en-US", { timeZone: u }), y = Math.round((v - new Date(g)) / 1e3 / 60), k = 15 * -Math.round(v.getTimezoneOffset() / 15) - y;
        if (!Number(k)) p = this.utcOffset(0, h);
        else if (p = o(g, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(k, !0), h) {
          var E = p.utcOffset();
          p = p.add(m - E, "minute");
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
        var y = function(S, b, w) {
          var I = S - 60 * b * 1e3, P = c(I, w);
          if (b === P) return [I, b];
          var O = c(I -= 60 * (P - b) * 1e3, w);
          return P === O ? [I, P] : [S - 60 * Math.min(P, O) * 1e3, Math.max(P, O)];
        }(o.utc(u, m).valueOf(), g, v), k = y[0], E = y[1], x = o(k).utcOffset(E);
        return x.$x.$timezone = v, x;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(u) {
        s = u;
      };
    };
  });
})(As);
var rh = As.exports;
const ah = /* @__PURE__ */ an(rh);
var Cs = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(rn, function() {
    return function(r, t, i) {
      var a = t.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, s = function(f, u, h, p, m) {
        var v = f.name ? f : f.$locale(), g = o(v[u]), y = o(v[h]), k = g || y.map(function(x) {
          return x.slice(0, p);
        });
        if (!m) return k;
        var E = v.weekStart;
        return k.map(function(x, S) {
          return k[(S + (E || 0)) % 7];
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
})(Cs);
var oh = Cs.exports;
const ih = /* @__PURE__ */ an(oh);
var Ls = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(rn, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, i, a) {
      var o = i.prototype, s = o.format;
      a.en.formats = r, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, d = function(f, u) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, p, m) {
            var v = m && m.toUpperCase();
            return p || u[m] || r[m] || u[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, y, k) {
              return y || k.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, d);
      };
    };
  });
})(Ls);
var sh = Ls.exports;
const lh = /* @__PURE__ */ an(sh);
var Is = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(rn, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(g) {
        this[v] = +g;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(g) {
        if (!g || g === "Z") return 0;
        var y = g.match(/([+-]|\d\d)/g), k = 60 * y[1] + (+y[2] || 0);
        return k === 0 ? 0 : y[0] === "+" ? -k : k;
      }(v);
    }], u = function(v) {
      var g = l[v];
      return g && (g.indexOf ? g : g.s.concat(g.f));
    }, h = function(v, g) {
      var y, k = l.meridiem;
      if (k) {
        for (var E = 1; E <= 24; E += 1) if (v.indexOf(k(E, 0, g)) > -1) {
          y = E > 12;
          break;
        }
      } else y = v === (g ? "pm" : "PM");
      return y;
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
      var g = l.ordinal, y = v.match(/\d+/);
      if (this.day = y[0], g) for (var k = 1; k <= 31; k += 1) g(k).replace(/\[|\]/g, "") === v && (this.day = k);
    }], w: [o, d("week")], ww: [a, d("week")], M: [o, d("month")], MM: [a, d("month")], MMM: [s, function(v) {
      var g = u("months"), y = (u("monthsShort") || g.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(v) + 1;
      if (y < 1) throw new Error();
      this.month = y % 12 || y;
    }], MMMM: [s, function(v) {
      var g = u("months").indexOf(v) + 1;
      if (g < 1) throw new Error();
      this.month = g % 12 || g;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, d("year")], Z: f, ZZ: f };
    function m(v) {
      var g, y;
      g = v, y = l && l.formats;
      for (var k = (v = g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, O, W) {
        var Y = W && W.toUpperCase();
        return O || y[W] || r[W] || y[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function($, D, M) {
          return D || M.slice(1);
        });
      })).match(t), E = k.length, x = 0; x < E; x += 1) {
        var S = k[x], b = p[S], w = b && b[0], I = b && b[1];
        k[x] = I ? { regex: w, parser: I } : S.replace(/^\[|\]$/g, "");
      }
      return function(P) {
        for (var O = {}, W = 0, Y = 0; W < E; W += 1) {
          var $ = k[W];
          if (typeof $ == "string") Y += $.length;
          else {
            var D = $.regex, M = $.parser, A = P.slice(Y), T = D.exec(A)[0];
            M.call(O, T), P = P.replace(T, "");
          }
        }
        return function(z) {
          var N = z.afternoon;
          if (N !== void 0) {
            var R = z.hours;
            N ? R < 12 && (z.hours += 12) : R === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(O), O;
      };
    }
    return function(v, g, y) {
      y.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var k = g.prototype, E = k.parse;
      k.parse = function(x) {
        var S = x.date, b = x.utc, w = x.args;
        this.$u = b;
        var I = w[1];
        if (typeof I == "string") {
          var P = w[2] === !0, O = w[3] === !0, W = P || O, Y = w[2];
          O && (Y = w[2]), l = this.$locale(), !P && Y && (l = y.Ls[Y]), this.$d = function(A, T, z, N) {
            try {
              if (["x", "X"].indexOf(T) > -1) return new Date((T === "X" ? 1e3 : 1) * A);
              var R = m(T)(A), H = R.year, _ = R.month, G = R.day, le = R.hours, ge = R.minutes, xe = R.seconds, Ae = R.milliseconds, Se = R.zone, ue = R.week, ye = /* @__PURE__ */ new Date(), Te = G || (H || _ ? 1 : ye.getDate()), Oe = H || ye.getFullYear(), Ve = 0;
              H && !_ || (Ve = _ > 0 ? _ - 1 : ye.getMonth());
              var Xe, st = le || 0, lt = ge || 0, ut = xe || 0, ct = Ae || 0;
              return Se ? new Date(Date.UTC(Oe, Ve, Te, st, lt, ut, ct + 60 * Se.offset * 1e3)) : z ? new Date(Date.UTC(Oe, Ve, Te, st, lt, ut, ct)) : (Xe = new Date(Oe, Ve, Te, st, lt, ut, ct), ue && (Xe = N(Xe).week(ue).toDate()), Xe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, I, b, y), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), W && S != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (I instanceof Array) for (var $ = I.length, D = 1; D <= $; D += 1) {
          w[1] = I[D - 1];
          var M = y.apply(this, w);
          if (M.isValid()) {
            this.$d = M.$d, this.$L = M.$L, this.init();
            break;
          }
          D === $ && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else E.call(this, x);
      };
    };
  });
})(Is);
var uh = Is.exports;
const ch = /* @__PURE__ */ an(uh);
var Rs = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(rn, function() {
    return function(r, t, i) {
      t.prototype.isToday = function() {
        var a = "YYYY-MM-DD", o = i();
        return this.format(a) === o.format(a);
      };
    };
  });
})(Rs);
var dh = Rs.exports;
const fh = /* @__PURE__ */ an(dh);
var Fs = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(rn, function() {
    return function(r, t, i) {
      t.prototype.isBetween = function(a, o, s, l) {
        var c = i(a), d = i(o), f = (l = l || "()")[0] === "(", u = l[1] === ")";
        return (f ? this.isAfter(c, s) : !this.isBefore(c, s)) && (u ? this.isBefore(d, s) : !this.isAfter(d, s)) || (f ? this.isBefore(c, s) : !this.isAfter(c, s)) && (u ? this.isAfter(d, s) : !this.isBefore(d, s));
      };
    };
  });
})(Fs);
var hh = Fs.exports;
const ph = /* @__PURE__ */ an(hh);
var Ys = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(rn, function() {
    var r, t, i = 1e3, a = 6e4, o = 36e5, s = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, u = { years: c, months: d, days: s, hours: o, minutes: a, seconds: i, milliseconds: 1, weeks: 6048e5 }, h = function(S) {
      return S instanceof E;
    }, p = function(S, b, w) {
      return new E(S, w, b.$l);
    }, m = function(S) {
      return t.p(S) + "s";
    }, v = function(S) {
      return S < 0;
    }, g = function(S) {
      return v(S) ? Math.ceil(S) : Math.floor(S);
    }, y = function(S) {
      return Math.abs(S);
    }, k = function(S, b) {
      return S ? v(S) ? { negative: !0, format: "" + y(S) + b } : { negative: !1, format: "" + S + b } : { negative: !1, format: "" };
    }, E = function() {
      function S(w, I, P) {
        var O = this;
        if (this.$d = {}, this.$l = P, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return p(w * u[m(I)], this);
        if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object") return Object.keys(w).forEach(function($) {
          O.$d[m($)] = w[$];
        }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var W = w.match(f);
          if (W) {
            var Y = W.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = Y[0], this.$d.months = Y[1], this.$d.weeks = Y[2], this.$d.days = Y[3], this.$d.hours = Y[4], this.$d.minutes = Y[5], this.$d.seconds = Y[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var b = S.prototype;
      return b.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(I, P) {
          return I + (w.$d[P] || 0) * u[P];
        }, 0);
      }, b.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = g(w / c), w %= c, this.$d.months = g(w / d), w %= d, this.$d.days = g(w / s), w %= s, this.$d.hours = g(w / o), w %= o, this.$d.minutes = g(w / a), w %= a, this.$d.seconds = g(w / i), w %= i, this.$d.milliseconds = w;
      }, b.toISOString = function() {
        var w = k(this.$d.years, "Y"), I = k(this.$d.months, "M"), P = +this.$d.days || 0;
        this.$d.weeks && (P += 7 * this.$d.weeks);
        var O = k(P, "D"), W = k(this.$d.hours, "H"), Y = k(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3, $ = Math.round(1e3 * $) / 1e3);
        var D = k($, "S"), M = w.negative || I.negative || O.negative || W.negative || Y.negative || D.negative, A = W.format || Y.format || D.format ? "T" : "", T = (M ? "-" : "") + "P" + w.format + I.format + O.format + A + W.format + Y.format + D.format;
        return T === "P" || T === "-P" ? "P0D" : T;
      }, b.toJSON = function() {
        return this.toISOString();
      }, b.format = function(w) {
        var I = w || "YYYY-MM-DDTHH:mm:ss", P = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return I.replace(l, function(O, W) {
          return W || String(P[O]);
        });
      }, b.as = function(w) {
        return this.$ms / u[m(w)];
      }, b.get = function(w) {
        var I = this.$ms, P = m(w);
        return P === "milliseconds" ? I %= 1e3 : I = P === "weeks" ? g(I / u[P]) : this.$d[P], I || 0;
      }, b.add = function(w, I, P) {
        var O;
        return O = I ? w * u[m(I)] : h(w) ? w.$ms : p(w, this).$ms, p(this.$ms + O * (P ? -1 : 1), this);
      }, b.subtract = function(w, I) {
        return this.add(w, I, !0);
      }, b.locale = function(w) {
        var I = this.clone();
        return I.$l = w, I;
      }, b.clone = function() {
        return p(this.$ms, this);
      }, b.humanize = function(w) {
        return r().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, b.valueOf = function() {
        return this.asMilliseconds();
      }, b.milliseconds = function() {
        return this.get("milliseconds");
      }, b.asMilliseconds = function() {
        return this.as("milliseconds");
      }, b.seconds = function() {
        return this.get("seconds");
      }, b.asSeconds = function() {
        return this.as("seconds");
      }, b.minutes = function() {
        return this.get("minutes");
      }, b.asMinutes = function() {
        return this.as("minutes");
      }, b.hours = function() {
        return this.get("hours");
      }, b.asHours = function() {
        return this.as("hours");
      }, b.days = function() {
        return this.get("days");
      }, b.asDays = function() {
        return this.as("days");
      }, b.weeks = function() {
        return this.get("weeks");
      }, b.asWeeks = function() {
        return this.as("weeks");
      }, b.months = function() {
        return this.get("months");
      }, b.asMonths = function() {
        return this.as("months");
      }, b.years = function() {
        return this.get("years");
      }, b.asYears = function() {
        return this.as("years");
      }, S;
    }(), x = function(S, b, w) {
      return S.add(b.years() * w, "y").add(b.months() * w, "M").add(b.days() * w, "d").add(b.hours() * w, "h").add(b.minutes() * w, "m").add(b.seconds() * w, "s").add(b.milliseconds() * w, "ms");
    };
    return function(S, b, w) {
      r = w, t = w().$utils(), w.duration = function(O, W) {
        var Y = w.locale();
        return p(O, { $l: Y }, W);
      }, w.isDuration = h;
      var I = b.prototype.add, P = b.prototype.subtract;
      b.prototype.add = function(O, W) {
        return h(O) ? x(this, O, 1) : I.bind(this)(O, W);
      }, b.prototype.subtract = function(O, W) {
        return h(O) ? x(this, O, -1) : P.bind(this)(O, W);
      };
    };
  });
})(Ys);
var vh = Ys.exports;
const mh = /* @__PURE__ */ an(vh);
var js = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(rn, function() {
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
})(js);
var gh = js.exports;
const yh = /* @__PURE__ */ an(gh);
function zt(e, n) {
  const r = fe(e, n);
  if (!r)
    throw new Error(`Could not resolve ${e.description}`);
  return r;
}
const ti = Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({})).map(
    ([e, n]) => {
      var r;
      return [(r = e.match(/([\w-]*)\.js$/)) == null ? void 0 : r[1], n];
    }
  )
), bh = { class: "tc-flex tc-justify-between tc-items-center tc-px-2 tc-py-1.5" }, wh = { class: "tc-flex-shrink-0" }, xh = { class: "tc-inline-flex tc-rounded-full" }, $h = {
  class: "tc-w-5 tc-h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Sh = ["d"], kh = { class: "tc-px-1.5 tc-space-x-1.5 tc-flex tc-flex-1" }, Mh = { class: "tc-flex-1 tc-flex tc-rounded-md" }, Dh = ["textContent"], Th = { class: "tc-flex-1 tc-flex tc-rounded-md" }, Ph = ["textContent"], Eh = { class: "tc-flex-shrink-0" }, Oh = { class: "tc-inline-flex tc-rounded-full" }, Ah = {
  class: "tc-w-5 tc-h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Ch = ["d"], xr = /* @__PURE__ */ J({
  __name: "Header",
  props: {
    panel: {},
    calendar: {}
  },
  setup(e) {
    return (n, r) => (L(), j("div", bh, [
      C("div", wh, [
        Fe(C("span", xh, [
          C("button", {
            type: "button",
            class: "tc-p-1.5 tc-rounded-full tc-bg-white tc-text-vtd-secondary-600 tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50",
            onClick: r[0] || (r[0] = (t) => e.panel.calendar ? e.calendar.onPrevious() : e.calendar.onPreviousYear())
          }, [
            (L(), j("svg", $h, [
              C("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: e.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Sh)
            ]))
          ])
        ], 512), [
          [gt, e.panel.calendar || e.panel.year]
        ])
      ]),
      C("div", kh, [
        C("span", Mh, [
          C("button", {
            type: "button",
            class: "tc-px-3 tc-py-1.5 tc-block tc-w-full tc-leading-relaxed tc-rounded-md tc-bg-white tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-text-vtd-secondary-600 tc-font-semibold sm:tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none tc-uppercase dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50",
            onClick: r[1] || (r[1] = (t) => e.calendar.openMonth()),
            textContent: ne(e.calendar.month)
          }, null, 8, Dh)
        ]),
        C("span", Th, [
          C("button", {
            type: "button",
            class: "tc-px-3 tc-py-1.5 tc-block tc-w-full tc-leading-relaxed tc-rounded-md tc-bg-white tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-text-vtd-secondary-600 tc-font-semibold sm:tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none tc-uppercase dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50",
            onClick: r[2] || (r[2] = (t) => e.calendar.openYear()),
            textContent: ne(e.calendar.year)
          }, null, 8, Ph)
        ])
      ]),
      C("div", Eh, [
        Fe(C("span", Oh, [
          C("button", {
            type: "button",
            class: "tc-p-1.5 tc-rounded-full tc-bg-white tc-text-vtd-secondary-600 tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50",
            onClick: r[3] || (r[3] = (t) => e.panel.calendar ? e.calendar.onNext() : e.calendar.onNextYear())
          }, [
            (L(), j("svg", Ah, [
              C("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: e.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, Ch)
            ]))
          ])
        ], 512), [
          [gt, e.panel.calendar || e.panel.year]
        ])
      ])
    ]));
  }
}), Bs = Symbol("isBetweenRange"), zs = Symbol(
  "betweenRangeClasses"
), Ns = Symbol("datepickerClasses"), Hs = Symbol("atMouseOver"), Vs = Symbol("setToToday"), Ws = Symbol("setToYesterday"), Us = Symbol("setToLastDay"), _s = Symbol("setToThisMonth"), qs = Symbol("setToLastMonth"), Zs = Symbol("setToCustomShortcut"), Lh = {
  key: 0,
  class: "tc-relative tc-w-full tc-border-t tc-border-b-0 sm:tc-border-t-0 sm:tc-border-b lg:tc-border-b-0 lg:tc-border-r tc-border-black/[.1] tc-order-last sm:tc-order-none dark:tc-border-vtd-secondary-700/[1] sm:tc-mt-1 lg:tc-mr-1 sm:tc-mb-1 lg:tc-mb-0 sm:tc-mx-1 lg:tc-mx-0 sm:tc-w-auto"
}, Ih = {
  key: 0,
  class: "tc-grid tc-grid-cols-2 sm:tc-grid-cols-3 tc-gap-1 lg:tc-block tc-w-full tc-pr-5 sm:tc-pr-6 tc-mt-1.5 sm:tc-mt-0 sm:tc-mb-1.5 lg:tc-mb-0"
}, Rh = ["onClick", "textContent"], Fh = {
  key: 1,
  class: "tc-grid tc-grid-cols-2 sm:tc-grid-cols-3 tc-gap-1 lg:tc-block tc-w-full tc-pr-5 sm:tc-pr-6 tc-mt-1.5 sm:tc-mt-0 sm:tc-mb-1.5 lg:tc-mb-0"
}, ni = /* @__PURE__ */ J({
  __name: "Shortcut",
  props: {
    shortcuts: { type: [Boolean, Function] },
    close: { type: Function },
    asRange: { type: Boolean },
    asSingle: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const n = e, r = zt(Vs), t = zt(Ws), i = zt(Us), a = zt(_s), o = zt(qs), s = zt(Zs), l = B(() => typeof n.shortcuts == "function" ? n.shortcuts() : !1);
    return (c, d) => n.asRange && n.asSingle || n.asRange && !n.asSingle ? (L(), j("div", Lh, [
      l.value ? (L(), j("ol", Ih, [
        (L(!0), j(ce, null, Le(l.value, (f, u) => (L(), j("li", { key: u }, [
          C("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: Tt((h) => re(s)(f, e.close), ["prevent"]),
            textContent: ne(f.label)
          }, null, 8, Rh)
        ]))), 128))
      ])) : (L(), j("ol", Fh, [
        C("li", null, [
          C("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[0] || (d[0] = Tt((f) => re(r)(e.close), ["prevent"]))
          }, ne(n.i18n.today), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[1] || (d[1] = Tt((f) => re(t)(e.close), ["prevent"]))
          }, ne(n.i18n.yesterday), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[2] || (d[2] = Tt((f) => re(i)(7, e.close), ["prevent"]))
          }, ne(n.i18n.past(7)), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[3] || (d[3] = Tt((f) => re(i)(30, e.close), ["prevent"]))
          }, ne(n.i18n.past(30)), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[4] || (d[4] = Tt((f) => re(a)(e.close), ["prevent"]))
          }, ne(n.i18n.currentMonth), 1)
        ]),
        C("li", null, [
          C("a", {
            href: "#",
            class: "tc-vtd-shortcuts tc-block tc-text-sm lg:tc-text-base tc-px-2 tc-py-2 sm:tc-leading-4 tc-whitespace-nowrap tc-font-medium tc-rounded tc-text-tonik-purple hover:tc-text-tonik-purple-dark tc-transition-colors hover:tc-bg-vtd-secondary-100 focus:tc-bg-vtd-secondary-100 focus:tc-text-tonik-purple dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-primary-300 dark:tc-text-vtd-primary-400 dark:focus:tc-bg-vtd-secondary-700 dark:focus:tc-text-vtd-primary-300",
            onClick: d[5] || (d[5] = Tt((f) => re(o)(e.close), ["prevent"]))
          }, ne(n.i18n.pastMonth), 1)
        ])
      ]))
    ])) : Q("", !0);
  }
}), Yh = { class: "tc-grid tc-grid-cols-7 tc-gap-y-0.5 tc-my-1" }, jh = {
  key: 0,
  class: "tc-col-span-7 tc-border-b tc-relative dark:tc-border-vtd-secondary-600"
}, Bh = { class: "tc-absolute tc--left-2 tc-top-1/2 tc--translate-y-2/4 tc-bg-white dark:tc-bg-vtd-secondary-800 tc-text-[8px] tc-pr-2 tc-text-vtd-secondary-400" }, zh = ["data-tooltip"], Nh = ["disabled", "data-date", "onClick", "onMouseenter", "onFocusin", "textContent"], $r = /* @__PURE__ */ J({
  __name: "Calendar",
  props: {
    calendar: {},
    weeks: {},
    weekNumber: { type: Boolean },
    asRange: { type: Boolean }
  },
  emits: ["updateDate"],
  setup(e, { emit: n }) {
    const r = n, t = zt(Bs), i = zt(zs), a = zt(Ns), o = zt(Hs);
    return (s, l) => (L(), j("div", Yh, [
      ee(Nu, {
        "enter-from-class": "tc-opacity-0",
        "enter-to-class": "tc-opacity-100",
        "enter-active-class": "tc-transition-opacity tc-ease-out tc-duration-300",
        "leave-active-class": "tc-transition-opacity tc-ease-in tc-duration-200",
        "leave-from-class": "tc-opacity-100",
        "leave-to-class": "tc-opacity-0"
      }, {
        default: Me(() => [
          (L(!0), j(ce, null, Le(e.calendar.date(), (c, d) => (L(), j(ce, { key: d }, [
            d % 7 === 0 && e.weekNumber ? (L(), j("div", jh, [
              C("span", Bh, ne(c.week()), 1)
            ])) : Q("", !0),
            C("div", {
              class: we(["tc-relative", { "vtd-tooltip": e.asRange && c.duration() }]),
              "data-tooltip": `${c.duration()}`
            }, [
              ee(Wr, {
                "enter-from-class": "tc-opacity-0",
                "enter-to-class": "tc-opacity-100",
                "enter-active-class": "tc-transition-opacity tc-ease-out tc-duration-200",
                "leave-active-class": "tc-transition-opacity tc-ease-in tc-duration-150",
                "leave-from-class": "tc-opacity-100",
                "leave-to-class": "tc-opacity-0"
              }, {
                default: Me(() => [
                  re(t)(c) || c.hovered() ? (L(), j("span", {
                    key: 0,
                    class: we(["tc-absolute tc-bg-light-blue-1 tc-bg-opacity-60 dark:tc-bg-vtd-secondary-700 dark:tc-bg-opacity-50", re(i)(c)])
                  }, null, 2)) : Q("", !0)
                ]),
                _: 2
              }, 1024),
              C("button", {
                type: "button",
                class: we(["vtd-datepicker-date tc-relative tc-w-[2.7rem] tc-h-[2.7rem] lg:tc-w-10 lg:tc-h-10 tc-flex tc-justify-center tc-items-center tc-text-sm 2xl:tc-text-base", [
                  re(a)(c),
                  e.asRange ? "tc-transition-all" : "tc-transition-colors"
                ]]),
                disabled: c.disabled || c.inRange(),
                "data-date": c.toDate(),
                onClick: (f) => r("updateDate", c),
                onMouseenter: (f) => re(o)(c),
                onFocusin: (f) => re(o)(c),
                textContent: ne(c.date())
              }, null, 42, Nh)
            ], 10, zh)
          ], 64))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), Hh = { class: "tc-flex tc-flex-wrap" }, Vh = { class: "tc-flex tc-rounded-md tc-mt-1.5" }, Wh = ["onClick", "textContent"], Sr = /* @__PURE__ */ J({
  __name: "Year",
  props: {
    years: {}
  },
  emits: ["updateYear"],
  setup(e, { emit: n }) {
    const r = n;
    return (t, i) => (L(), j("div", Hh, [
      (L(!0), j(ce, null, Le(e.years, (a, o) => (L(), j("div", {
        key: o,
        class: "tc-w-1/2 tc-px-0.5"
      }, [
        C("span", Vh, [
          C("button", {
            type: "button",
            class: "tc-px-3 tc-py-2 tc-block tc-w-full tc-leading-6 tc-rounded-md tc-bg-white tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-text-vtd-secondary-600 tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none uppercase dark:tc-bg-vtd-secondary-800 dark:hover:tc-bg-vtd-secondary-700 dark:tc-text-vtd-secondary-300 dark:hover:tc-text-vtd-secondary-100 dark:focus:tc-bg-vtd-secondary-700",
            onClick: (s) => r("updateYear", a),
            textContent: ne(a)
          }, null, 8, Wh)
        ])
      ]))), 128))
    ]));
  }
}), Uh = { class: "tc-grid tc-grid-cols-7 tc-py-2 tc-mt-0.5" }, _h = ["textContent"], kr = /* @__PURE__ */ J({
  __name: "Week",
  props: {
    weeks: {}
  },
  setup(e) {
    return (n, r) => (L(), j("div", Uh, [
      (L(!0), j(ce, null, Le(e.weeks, (t, i) => (L(), j("div", {
        key: i,
        class: "tc-text-vtd-secondary-500 tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-font-medium tc-text-center tc-cursor-default dark:tc-text-vtd-secondary-400"
      }, [
        C("span", {
          textContent: ne(t)
        }, null, 8, _h)
      ]))), 128))
    ]));
  }
}), qh = { class: "tc-flex tc-flex-wrap tc-mt-1.5" }, Zh = { class: "tc-flex tc-rounded-md tc-mt-1.5" }, Kh = ["onClick", "textContent"], Mr = /* @__PURE__ */ J({
  __name: "Month",
  props: {
    months: {}
  },
  emits: ["updateMonth"],
  setup(e, { emit: n }) {
    const r = n;
    return (t, i) => (L(), j("div", qh, [
      (L(!0), j(ce, null, Le(e.months, (a, o) => (L(), j("div", {
        key: o,
        class: "tc-w-1/2 tc-px-0.5"
      }, [
        C("span", Zh, [
          C("button", {
            type: "button",
            class: "tc-px-3 tc-py-2 tc-block tc-w-full tc-leading-6 tc-rounded-md tc-bg-white tc-text-sm 2xl:tc-text-base tc-tracking-wide tc-text-vtd-secondary-600 tc-font-medium tc-transition-colors tc-border tc-border-transparent hover:tc-bg-vtd-secondary-100 hover:tc-text-vtd-secondary-900 focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none tc-uppercase dark:tc-bg-vtd-secondary-800 dark:hover:tc-bg-vtd-secondary-700 dark:tc-text-vtd-secondary-300 dark:hover:tc-text-vtd-secondary-100 dark:focus:tc-bg-vtd-secondary-700",
            onClick: (s) => r("updateMonth", o),
            textContent: ne(a)
          }, null, 8, Kh)
        ])
      ]))), 128))
    ]));
  }
});
function Gh() {
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
function Xh() {
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
const Jh = {
  class: "tc-flex tc-items-center tc-gap-2",
  "data-timepicker": ""
}, Qh = { class: "relative" }, ep = { class: "tc-font-semibold" }, tp = {
  key: 0,
  class: "tc-absolute tc-z-50 tc-mt-1 tc-bg-white tc-border tc-text-tonik-purple tc-rounded-md tc-shadow-lg tc-max-h-52 tc-overflow-y-auto tc-w-20 tc-py-1"
}, np = ["onClick"], rp = { class: "relative" }, ap = { class: "tc-font-semibold" }, op = {
  key: 0,
  class: "tc-absolute tc-z-50 tc-mt-1 tc-bg-white tc-border tc-text-tonik-purple tc-rounded-md tc-shadow-lg tc-max-h-52 tc-overflow-y-auto tc-w-20 tc-py-1"
}, ip = ["onClick"], sp = { class: "tc-flex tc-gap-1 tc-ml-1" }, ri = {
  __name: "TimePicker",
  props: {
    modelValue: { type: String, default: "00:00" }
    // 24h format
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const r = e, t = n, i = F(0), a = F(0), o = F("AM"), s = F(null), l = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], c = Array.from({ length: 60 }, (g, y) => y);
    se(() => {
      const [g, y] = r.modelValue.split(":").map(Number);
      i.value = g, a.value = y, g === 0 || g < 12 ? o.value = "AM" : o.value = "PM";
    });
    const d = B(() => i.value === 0 ? 12 : i.value > 12 ? i.value - 12 : i.value), f = B(() => d.value.toString().padStart(2, "0")), u = B(() => a.value.toString().padStart(2, "0"));
    De([i, a], () => {
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
    }), (g, y) => (L(), j("div", Jh, [
      C("div", Qh, [
        C("button", {
          class: "tc-flex tc-items-center tc-gap-1 tc-bg-white tc-text-tonik-purple tc-px-2 tc-py-1 tc-rounded-md tc-border tc-border-tonik-purple tc-w-14 justify-center",
          onClick: y[0] || (y[0] = (k) => h("hour"))
        }, [
          C("span", ep, ne(f.value), 1),
          ee(re(Wo), { class: "tc-w-4 tc-h-4" })
        ]),
        s.value === "hour" ? (L(), j("div", tp, [
          (L(), j(ce, null, Le(l, (k) => C("div", {
            key: k,
            class: we(["tc-px-3 tc-py-1 tc-text-tonik-purple tc-cursor-pointer hover:tc-bg-tonik-purple-dark hover:tc-text-white tc-text-center", { "tc-bg-tonik-purple tc-text-white": k === d.value }]),
            onClick: (E) => p(k)
          }, ne(k.toString().padStart(2, "0")), 11, np)), 64))
        ])) : Q("", !0)
      ]),
      y[4] || (y[4] = C("span", { class: "tc-text-xl tc-text-tonik-purple" }, ":", -1)),
      C("div", rp, [
        C("button", {
          class: "tc-flex tc-items-center tc-gap-1 tc-bg-white tc-text-tonik-purple tc-px-2 tc-py-1 tc-rounded-md tc-border tc-border-tonik-purple tc-w-14 justify-center",
          onClick: y[1] || (y[1] = (k) => h("minute"))
        }, [
          C("span", ap, ne(u.value), 1),
          ee(re(Wo), { class: "tc-w-4 tc-h-4" })
        ]),
        s.value === "minute" ? (L(), j("div", op, [
          (L(!0), j(ce, null, Le(re(c), (k) => (L(), j("div", {
            key: k,
            class: we(["tc-px-3 tc-py-1 tc-text-tonik-purple tc-cursor-pointer hover:tc-bg-tonik-purple-dark hover:tc-text-white tc-text-center", { "tc-bg-tonik-purple tc-text-white": k === a.value }]),
            onClick: (E) => m(k)
          }, ne(k.toString().padStart(2, "0")), 11, ip))), 128))
        ])) : Q("", !0)
      ]),
      C("div", sp, [
        C("button", {
          class: we(["tc-px-3 tc-py-1 tc-rounded-md tc-font-semibold", o.value === "AM" ? "tc-bg-tonik-purple tc-text-white" : "tc-bg-gray-100 tc-text-gray-600"]),
          onClick: y[2] || (y[2] = (k) => v("AM"))
        }, " AM ", 2),
        C("button", {
          class: we(["tc-px-3 tc-py-1 tc-rounded-md tc-font-semibold", o.value === "PM" ? "tc-bg-tonik-purple tc-text-white" : "tc-bg-gray-100 tc-text-gray-600"]),
          onClick: y[3] || (y[3] = (k) => v("PM"))
        }, " PM ", 2)
      ])
    ]));
  }
}, lp = ["disabled", "placeholder"], up = { class: "tc-absolute tc-inset-y-0 tc-right-0 tc-inline-flex tc-items-center tc-rounded-md tc-overflow-hidden" }, cp = ["disabled"], dp = {
  class: "tc-w-5 tc-h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, fp = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, hp = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, pp = { class: "tc-flex tc-flex-wrap lg:tc-flex-nowrap" }, vp = { class: "tc-relative tc-flex tc-flex-wrap sm:tc-flex-nowrap tc-p-1 tc-w-full" }, mp = {
  key: 0,
  class: "tc-hidden tc-h-full tc-absolute tc-inset-0 sm:tc-flex tc-justify-center tc-items-center"
}, gp = { class: "tc-px-0.5 sm:tc-px-2" }, yp = {
  key: 1,
  class: "tc-relative tc-w-full md:tc-w-1/2 lg:tc-w-80 tc-overflow-hidden tc-mt-3 sm:tc-mt-0 sm:tc-ml-2"
}, bp = { class: "tc-px-0.5 sm:tc-px-2" }, wp = {
  key: 0,
  class: "tc-border-t tc-border-gray-200 tc-p-5"
}, xp = { class: "tc-flex tc-gap-6 tc-justify-end" }, $p = { class: "tc-flex tc-flex-col tc-gap-2" }, Sp = { key: 1 }, kp = { class: "tc-mt-2 tc-mx-2 tc-py-1.5 tc-border-t tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, Mp = { class: "tc-mt-1.5 sm:tc-flex sm:tc-flex-row-reverse" }, Dp = ["disabled", "onClick", "textContent"], Tp = ["onClick", "textContent"], Pp = {
  key: 2,
  class: "sm:tc-hidden"
}, Ep = { class: "tc-mt-2 tc-mx-2 tc-py-1.5 tc-border-t tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, Op = { class: "tc-mt-1.5 sm:tc-flex sm:tc-flex-row-reverse" }, Ap = ["onClick", "textContent"], Cp = {
  key: 1,
  class: "tc-flex"
}, Lp = { class: "tc-bg-white tc-rounded-lg tc-shadow-sm tc-border tc-border-black/[.1] tc-px-3 tc-py-3 sm:tc-px-4 sm:tc-py-4 dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700/[1]" }, Ip = { class: "tc-flex tc-flex-wrap lg:tc-flex-nowrap" }, Rp = { class: "tc-relative tc-flex tc-flex-wrap sm:tc-flex-nowrap tc-p-1 tc-w-full" }, Fp = {
  key: 0,
  class: "tc-hidden tc-h-full tc-absolute tc-inset-0 sm:tc-flex tc-justify-center tc-items-center"
}, Yp = { class: "tc-px-0.5 sm:tc-px-2" }, jp = {
  key: 1,
  class: "tc-relative tc-w-full md:tc-w-1/2 lg:tc-w-80 tc-overflow-hidden tc-mt-3 sm:tc-mt-0 sm:tc-ml-2"
}, Bp = { class: "tc-px-0.5 sm:tc-px-2" }, zp = { key: 0 }, Np = { class: "tc-mt-2 tc-mx-2 tc-py-1.5 tc-border-t tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, Hp = { class: "tc-mt-1.5 sm:tc-flex sm:tc-flex-row-reverse" }, Vp = ["disabled", "textContent"], Ks = /* @__PURE__ */ J({
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
    } = Gh(), { useVisibleViewport: p } = Xh();
    V.extend(ih), V.extend(lh), V.extend(ch), V.extend(fh), V.extend(ph), V.extend(mh), V.extend(yh), V.extend(ah), V.tz.setDefault("Asia/Manila");
    const m = F(null), v = F(null), g = F(null), y = F(""), k = F(null), E = F(""), x = F(""), S = B(() => {
      if (t.time) {
        const K = t.modelValue;
        if (Array.isArray(K))
          return [
            K[0] ? V(K[0]).toDate() : null,
            K[1] ? V(K[1]).toDate() : null
          ];
      }
      return [null, null];
    }), b = F(
      S.value[0] ? V(S.value[0]).format("HH:mm") : ""
    ), w = F(
      S.value[1] ? V(S.value[1]).format("HH:mm") : ""
    ), I = F([]), P = F([]), O = F(null), W = F(null), Y = Rn({
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
    }), $ = F({
      previous: V(),
      next: V().add(1, "month"),
      year: {
        previous: V().year(),
        next: V().year()
      },
      weeks: t.weekdaysSize === "min" ? V.weekdaysMin() : V.weekdaysShort(),
      months: t.formatter.month === "MMM" ? V.monthsShort() : V.months()
    }), D = B(() => $.value.weeks), M = B(() => $.value.months), A = B(() => {
      const { previous: K, next: U, year: Z } = re($);
      return {
        previous: {
          date: () => c(K).concat(a(K)).concat(l(K)).map((q) => (Object.assign(q, {
            today: q.isToday(),
            active: K.month() === q.month(),
            off: K.month() !== q.month(),
            sunday: q.day() === 0,
            disabled: o(q, t) && !H(q),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return K.month() !== q.month();
            },
            hovered: () => R() && I.value.length > 1 ? (q.isBetween(
              I.value[0],
              I.value[1],
              "date",
              "()"
            ) || q.isBetween(
              I.value[1],
              I.value[0],
              "date",
              "(]"
            )) && K.month() === q.month() : !1,
            duration: () => !1
          }), q)),
          month: K && K.format(t.formatter.month),
          year: K && K.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (q, te) => Z.previous + te
          ),
          onPrevious: () => {
            $.value.previous = K.subtract(1, "month"), i("clickPrev", $.value.previous);
          },
          onNext: () => {
            $.value.previous = K.add(1, "month"), K.diff(U, "month") === -1 && ($.value.next = U.add(1, "month")), i("clickNext", $.value.previous);
          },
          onPreviousYear: () => {
            $.value.year.previous = $.value.year.previous - 12;
          },
          onNextYear: () => {
            $.value.year.previous = $.value.year.previous + 12;
          },
          openMonth: () => {
            Y.previous.month = !Y.previous.month, Y.previous.year = !1, Y.previous.calendar = !Y.previous.month;
          },
          setMonth: (q) => {
            $.value.previous = K.month(q), Y.previous.month = !Y.previous.month, Y.previous.year = !1, Y.previous.calendar = !Y.previous.month, i("selectMonth", $.value.previous), Ee(() => {
              ($.value.next.isSame($.value.previous, "month") || $.value.next.isBefore($.value.previous)) && ($.value.next = $.value.previous.add(1, "month")), $.value.year.next = $.value.next.year();
            });
          },
          openYear: () => {
            Y.previous.year = !Y.previous.year, Y.previous.month = !1, Y.previous.calendar = !Y.previous.year;
          },
          setYear: (q) => {
            $.value.previous = K.year(q), Y.previous.year = !Y.previous.year, Y.previous.calendar = !Y.previous.year, i("selectYear", $.value.previous), Ee(() => {
              ($.value.next.isSame($.value.previous, "month") || $.value.next.isBefore($.value.previous)) && ($.value.next = $.value.previous.add(1, "month")), $.value.year.previous = $.value.previous.year(), $.value.year.next = $.value.next.year();
            });
          }
        },
        next: {
          date: () => c(U).concat(a(U)).concat(l(U)).map((q) => (Object.assign(q, {
            today: q.isToday(),
            active: U.month() === q.month(),
            off: U.month() !== q.month(),
            sunday: q.day() === 0,
            disabled: o(q, t) && !H(q),
            inRange: () => {
              if (t.asSingle && !t.useRange)
                return U.month() !== q.month();
            },
            hovered: () => I.value.length > 1 ? (q.isBetween(
              I.value[0],
              I.value[1],
              "date",
              "()"
            ) || q.isBetween(
              I.value[1],
              I.value[0],
              "date",
              "(]"
            )) && U.month() === q.month() : !1,
            duration: () => !1
          }), q)),
          month: U && U.format(t.formatter.month),
          year: U && U.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (q, te) => Z.next + te
          ),
          onPrevious: () => {
            $.value.next = U.subtract(1, "month"), U.diff(K, "month") === 1 && ($.value.previous = K.subtract(1, "month")), i("clickRightPrev", $.value.next);
          },
          onNext: () => {
            $.value.next = U.add(1, "month"), i("clickRightNext", $.value.next);
          },
          onPreviousYear: () => {
            $.value.year.next = $.value.year.next - 12;
          },
          onNextYear: () => {
            $.value.year.next = $.value.year.next + 12;
          },
          openMonth: () => {
            Y.next.month = !Y.next.month, Y.next.year = !1, Y.next.calendar = !Y.next.month;
          },
          setMonth: (q) => {
            $.value.next = U.month(q), Y.next.month = !Y.next.month, Y.next.year = !1, Y.next.calendar = !Y.next.month, i("selectRightMonth", $.value.next), Ee(() => {
              ($.value.previous.isSame($.value.next, "month") || $.value.previous.isAfter($.value.next)) && ($.value.previous = $.value.next.subtract(
                1,
                "month"
              )), $.value.year.previous = $.value.previous.year();
            });
          },
          openYear: () => {
            Y.next.year = !Y.next.year, Y.next.month = !1, Y.next.calendar = !Y.next.year;
          },
          setYear: (q) => {
            $.value.next = U.year(q), Y.next.year = !Y.next.year, Y.next.month = !1, Y.next.calendar = !Y.next.year, i("selectRightYear", $.value.next), Ee(() => {
              ($.value.previous.isSame($.value.next, "month") || $.value.previous.isAfter($.value.next)) && ($.value.previous = $.value.next.subtract(
                1,
                "month"
              )), $.value.year.previous = $.value.previous.year(), $.value.year.next = $.value.next.year();
            });
          }
        }
      };
    }), T = F(!1);
    setTimeout(() => {
      T.value = !0;
    }, 250);
    function z() {
      return V().localeData().firstDayOfWeek();
    }
    function N(K) {
      const U = [...K], Z = U.shift();
      return [...U, Z];
    }
    function R() {
      return !t.useRange && !t.asSingle ? !0 : !t.useRange && t.asSingle ? !1 : t.useRange && !t.asSingle ? !0 : !!(t.useRange && t.asSingle);
    }
    function H(K) {
      if (t.disableInRange || E.value === "")
        return !1;
      let U, Z;
      if (Array.isArray(t.modelValue)) {
        const [q, te] = t.modelValue;
        U = q, Z = te;
      } else if (typeof t.modelValue == "object") {
        if (t.modelValue) {
          const [q, te] = Object.values(t.modelValue);
          U = q, Z = te;
        }
      } else {
        const [q, te] = t.modelValue.split(t.separator);
        U = q, Z = te;
      }
      return K.isBetween(
        V(U, t.formatter.date, !0),
        V(Z, t.formatter.date, !0),
        "date",
        "[]"
      );
    }
    function _() {
      O.value = null, W.value = null, I.value = [], k.value = null;
    }
    function G() {
      if (E.value = "", Array.isArray(t.modelValue))
        i("update:modelValue", []);
      else if (typeof t.modelValue == "object") {
        const K = {}, [U, Z] = Object.keys(t.modelValue);
        K[U] = "", K[Z] = "", i("update:modelValue", K);
      } else
        i("update:modelValue", "");
      P.value = [], v.value && v.value.focus();
    }
    n({ clearPicker: G });
    function le() {
      if (R()) {
        const [K, U] = E.value.split(t.separator), [Z, q] = [
          V(K, t.formatter.date, !0),
          V(U, t.formatter.date, !0)
        ];
        if (Z.isValid() && q.isValid())
          if (xe(Z), xe(q), Array.isArray(t.modelValue))
            i("update:modelValue", [K, U]);
          else if (typeof t.modelValue == "object") {
            const te = {}, [pe, Pe] = Object.keys(t.modelValue);
            te[pe] = K, te[Pe] = U, i("update:modelValue", te);
          } else
            i(
              "update:modelValue",
              d(
                {
                  previous: Z,
                  next: q
                },
                t
              )
            );
      } else {
        const K = V(E.value, t.formatter.date, !0);
        if (K.isValid())
          if (xe(K), Array.isArray(t.modelValue))
            i("update:modelValue", [E.value]);
          else if (typeof t.modelValue == "object") {
            const U = {}, [Z] = Object.keys(t.modelValue);
            U[Z] = E.value, i("update:modelValue", U);
          } else
            i("update:modelValue", E.value);
      }
    }
    function ge(K, U) {
      const [Z, q] = K.split(":").map(Number);
      if (R()) {
        const [Pe, Qe] = E.value.split(t.separator), [ke, Ye] = [
          V(Pe, t.formatter.date, !0),
          V(Qe, t.formatter.date, !0)
        ];
        var te = ke, pe = Ye;
        U === "from" && (te = ke.hour(Z).minute(q).second(0), xe(te)), U === "to" && (pe = Ye.hour(Z).minute(q).second(0), xe(pe)), i("update:modelValue", [te.format(t.formatter.date), pe.format(t.formatter.date)]);
      }
    }
    function xe(K, U) {
      if (R())
        if (O.value)
          if (W.value = K, t.autoApply) {
            K.isBefore(O.value) ? E.value = d(
              {
                previous: K,
                next: O.value
              },
              t
            ) : E.value = d(
              {
                previous: O.value,
                next: K
              },
              t
            );
            const [Z, q] = E.value.split(t.separator);
            if (Array.isArray(t.modelValue))
              i("update:modelValue", [
                V(Z, t.formatter.date, !0).format(t.formatter.date),
                V(q, t.formatter.date, !0).format(t.formatter.date)
              ]);
            else if (typeof t.modelValue == "object") {
              const te = {}, [pe, Pe] = Object.keys(t.modelValue);
              te[pe] = Z, te[Pe] = q, i("update:modelValue", te);
            } else
              i(
                "update:modelValue",
                d(
                  {
                    previous: V(Z, t.formatter.date, !0),
                    next: V(q, t.formatter.date, !0)
                  },
                  t
                )
              );
            U && U(), P.value = [], V(Z, t.formatter.date, !0).isSame(
              V(q, t.formatter.date, !0),
              "month"
            ) || ($.value.previous = V(Z, t.formatter.date, !0), $.value.next = V(q, t.formatter.date, !0)), _();
          } else {
            O.value.isAfter(K, "month") ? P.value = [K, O.value] : P.value = [O.value, K];
            const [Z, q] = P.value;
            Z.isSame(q, "month") || ($.value.previous = Z, $.value.next = q), _();
          }
        else
          P.value = [], O.value = K, k.value = K, I.value.push(K), P.value.push(K), $.value.previous = K, $.value.next.isSame(K, "month") && ($.value.previous = $.value.next, $.value.next = K.add(1, "month"));
      else if (t.autoApply) {
        if (E.value = u(K, t), Array.isArray(t.modelValue))
          i("update:modelValue", [E.value]);
        else if (typeof t.modelValue == "object") {
          const Z = {}, [q] = Object.keys(t.modelValue);
          Z[q] = E.value, i("update:modelValue", Z);
        } else
          i("update:modelValue", E.value);
        U && U(), P.value = [], _();
      } else
        P.value = [K], _();
    }
    function Ae(K) {
      if (P.value.length < 1)
        return !1;
      let U;
      if (R()) {
        const [Z, q] = P.value;
        q.isBefore(Z) ? U = d(
          {
            previous: q,
            next: Z
          },
          t
        ) : U = d(
          {
            previous: Z,
            next: q
          },
          t
        );
      } else {
        const [Z] = P.value;
        U = Z;
      }
      if (R()) {
        const [Z, q] = U.split(t.separator);
        if (Array.isArray(t.modelValue))
          i("update:modelValue", [
            V(Z, t.formatter.date, !0).format(t.formatter.date),
            V(q, t.formatter.date, !0).format(t.formatter.date)
          ]);
        else if (typeof t.modelValue == "object") {
          const te = {}, [pe, Pe] = Object.keys(t.modelValue);
          te[pe] = Z, te[Pe] = q, i("update:modelValue", te);
        } else
          i(
            "update:modelValue",
            d(
              {
                previous: V(Z, t.formatter.date, !0),
                next: V(q, t.formatter.date, !0)
              },
              t
            )
          );
        E.value = U;
      } else if (E.value = U.format(t.formatter.date), Array.isArray(t.modelValue))
        i("update:modelValue", [E.value]);
      else if (typeof t.modelValue == "object") {
        const Z = {}, [q] = Object.keys(t.modelValue);
        Z[q] = E.value, i("update:modelValue", Z);
      } else
        i("update:modelValue", E.value);
      K && K();
    }
    function Se(K) {
      if (!R())
        return !1;
      if (O.value)
        I.value = [O.value, K];
      else
        return I.value = [], !1;
    }
    function ue(K) {
      if (O.value && t.autoApply)
        return !1;
      let U, Z;
      if (I.value.length > 1) {
        const [q, te] = I.value;
        U = V(q, t.formatter.date, !0), Z = V(te, t.formatter.date, !0);
      } else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          const [q, te] = t.modelValue;
          U = q && V(q, t.formatter.date, !0), Z = te && V(te, t.formatter.date, !0);
        } else {
          const [q, te] = P.value;
          U = V(q, t.formatter.date, !0), Z = V(te, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [q, te] = Object.values(t.modelValue);
            U = q && V(q, t.formatter.date, !0), Z = te && V(te, t.formatter.date, !0);
          }
        } else {
          const [q, te] = P.value;
          U = V(q, t.formatter.date, !0), Z = V(te, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        const [q, te] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        U = q && V(q, t.formatter.date, !0), Z = te && V(te, t.formatter.date, !0);
      } else {
        const [q, te] = P.value;
        U = V(q, t.formatter.date, !0), Z = V(te, t.formatter.date, !0);
      }
      return U && Z ? s(K, {
        previous: U,
        next: Z
      }) : !1;
    }
    function ye(K) {
      const { today: U, active: Z, off: q, disabled: te } = K;
      let pe, Pe, Qe;
      if (R())
        if (Array.isArray(t.modelValue))
          if (k.value) {
            const [ke, Ye] = I.value;
            Pe = ke && V(ke, t.formatter.date, !0), Qe = Ye && V(Ye, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [ke, Ye] = t.modelValue;
            Pe = ke && V(ke, t.formatter.date, !0), Qe = Ye && V(Ye, t.formatter.date, !0);
          } else {
            const [ke, Ye] = P.value;
            Pe = ke && V(ke, t.formatter.date, !0), Qe = Ye && V(Ye, t.formatter.date, !0);
          }
        else if (typeof t.modelValue == "object")
          if (k.value) {
            const [ke, Ye] = I.value;
            Pe = ke && V(ke, t.formatter.date, !0), Qe = Ye && V(Ye, t.formatter.date, !0);
          } else if (t.autoApply) {
            const [ke, Ye] = t.modelValue ? Object.values(t.modelValue) : [null, null];
            Pe = ke && V(ke, t.formatter.date, !0), Qe = Ye && V(Ye, t.formatter.date, !0);
          } else {
            const [ke, Ye] = P.value;
            Pe = ke && V(ke, t.formatter.date, !0), Qe = Ye && V(Ye, t.formatter.date, !0);
          }
        else if (k.value) {
          const [ke, Ye] = I.value;
          Pe = ke && V(ke, t.formatter.date, !0), Qe = Ye && V(Ye, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [ke, Ye] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
          Pe = ke && V(ke, t.formatter.date, !0), Qe = Ye && V(Ye, t.formatter.date, !0);
        } else {
          const [ke, Ye] = P.value;
          Pe = ke && V(ke, t.formatter.date, !0), Qe = Ye && V(Ye, t.formatter.date, !0);
        }
      else if (Array.isArray(t.modelValue))
        if (t.autoApply) {
          if (t.modelValue.length > 0) {
            const [ke] = t.modelValue;
            Pe = V(ke, t.formatter.date, !0);
          }
        } else {
          const [ke] = P.value;
          Pe = ke && V(ke, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (t.autoApply) {
          if (t.modelValue) {
            const [ke] = Object.values(t.modelValue);
            Pe = V(ke, t.formatter.date, !0);
          }
        } else {
          const [ke] = P.value;
          Pe = ke && V(ke, t.formatter.date, !0);
        }
      else if (t.autoApply) {
        if (t.modelValue) {
          const [ke] = t.modelValue.split(t.separator);
          Pe = V(ke, t.formatter.date, !0);
        }
      } else {
        const [ke] = P.value;
        Pe = ke && V(ke, t.formatter.date, !0);
      }
      return Z && (pe = U ? "tc-text-vtd-primary-500 tc-font-semibold dark:tc-text-vtd-primary-400 tc-rounded-full focus:tc-bg-vtd-primary-50 focus:tc-text-vtd-secondary-900 focus:tc-border-vtd-primary-300 focus:tc-ring focus:tc-ring-vtd-primary-500 focus:tc-ring-opacity-10 focus:tc-outline-none dark:tc-bg-vtd-secondary-800 dark:tc-text-vtd-secondary-300 dark:hover:tc-bg-vtd-secondary-700 dark:hover:tc-text-vtd-secondary-300 dark:focus:tc-bg-vtd-secondary-600 dark:focus:tc-text-vtd-secondary-100 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-25 dark:focus:tc-bg-opacity-50" : te ? "tc-text-vtd-secondary-600 tc-font-normal disabled:tc-text-vtd-secondary-500 disabled:tc-cursor-not-allowed tc-rounded-full" : K.isBetween(Pe, Qe, "date", "()") ? "tc-text-vtd-secondary-700 tc-font-medium dark:tc-text-vtd-secondary-100 tc-rounded-full" : "tc-text-vtd-secondary-600 tc-font-medium dark:tc-text-vtd-secondary-200 tc-rounded-full"), q && (pe = "tc-text-vtd-secondary-400 tc-font-light disabled:tc-cursor-not-allowed"), Pe && Qe && !q ? (K.isSame(Pe, "date") && (pe = Qe.isAfter(Pe, "date") ? "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-l-full disabled:tc-cursor-not-allowed" : "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-r-full disabled:tc-cursor-not-allowed", Pe.isSame(Qe, "date") && (pe = "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-full disabled:tc-cursor-not-allowed")), K.isSame(Qe, "date") && (pe = Qe.isAfter(Pe, "date") ? "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-r-full disabled:tc-cursor-not-allowed" : "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-l-full disabled:tc-cursor-not-allowed", Pe.isSame(Qe, "date") && (pe = "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-full disabled:tc-cursor-not-allowed"))) : Pe && K.isSame(Pe, "date") && !q && (pe = "tc-bg-tonik-purple tc-text-white tc-font-bold tc-rounded-full disabled:tc-cursor-not-allowed"), pe;
    }
    function Te(K) {
      let U, Z, q;
      if (U = "", !R())
        return U;
      if (Array.isArray(t.modelValue))
        if (I.value.length > 1) {
          const [te, pe] = I.value;
          Z = te && V(te, t.formatter.date, !0), q = pe && V(pe, t.formatter.date, !0);
        } else if (t.autoApply) {
          const [te, pe] = t.modelValue;
          Z = te && V(te, t.formatter.date, !0), q = pe && V(pe, t.formatter.date, !0);
        } else {
          const [te, pe] = P.value;
          Z = te && V(te, t.formatter.date, !0), q = pe && V(pe, t.formatter.date, !0);
        }
      else if (typeof t.modelValue == "object")
        if (I.value.length > 1) {
          const [te, pe] = I.value;
          Z = te && V(te, t.formatter.date, !0), q = pe && V(pe, t.formatter.date, !0);
        } else if (t.autoApply) {
          if (t.modelValue) {
            const [te, pe] = Object.values(t.modelValue);
            Z = te && V(te, t.formatter.date, !0), q = pe && V(pe, t.formatter.date, !0);
          }
        } else {
          const [te, pe] = P.value;
          Z = te && V(te, t.formatter.date, !0), q = pe && V(pe, t.formatter.date, !0);
        }
      else if (I.value.length > 1) {
        const [te, pe] = I.value;
        Z = te && V(te, t.formatter.date, !0), q = pe && V(pe, t.formatter.date, !0);
      } else if (t.autoApply) {
        const [te, pe] = t.modelValue ? t.modelValue.split(t.separator) : [null, null];
        Z = te && V(te, t.formatter.date, !0), q = pe && V(pe, t.formatter.date, !0);
      } else {
        const [te, pe] = P.value;
        Z = te && V(te, t.formatter.date, !0), q = pe && V(pe, t.formatter.date, !0);
      }
      return Z && q && (K.isSame(Z, "date") ? (q.isBefore(Z) && (U += " rounded-r-full inset-0"), Z.isBefore(q) && (U += " rounded-l-full inset-0")) : K.isSame(q, "date") ? (q.isBefore(Z) && (U += " rounded-l-full inset-0"), Z.isBefore(q) && (U += " rounded-r-full inset-0")) : U += " inset-0"), U;
    }
    function Oe(K, U) {
      $.value.previous = V(K, t.formatter.date, !0), $.value.next = V(U, t.formatter.date, !0), (V.duration($.value.next.diff($.value.previous)).get("months") === 2 || V.duration($.value.next.diff($.value.previous)).get("months") === 1 && V.duration($.value.next.diff($.value.previous)).get("days") === 7) && ($.value.next = $.value.next.subtract(1, "month")), ($.value.next.isSame($.value.previous, "month") || $.value.next.isBefore($.value.previous)) && ($.value.next = $.value.previous.add(1, "month"));
    }
    function Ve(K, U) {
      if (R())
        if (t.autoApply) {
          if (Array.isArray(t.modelValue))
            i("update:modelValue", [K, U]);
          else if (typeof t.modelValue == "object") {
            const Z = {}, [q, te] = Object.keys(t.modelValue);
            Z[q] = K, Z[te] = U, i("update:modelValue", Z);
          } else
            i(
              "update:modelValue",
              d(
                {
                  previous: V(K, t.formatter.date, !0),
                  next: V(U, t.formatter.date, !0)
                },
                t
              )
            );
          E.value = `${K}${t.separator}${U}`;
        } else
          P.value = [
            V(K, t.formatter.date, !0),
            V(U, t.formatter.date, !0)
          ];
      else if (t.autoApply) {
        if (Array.isArray(t.modelValue))
          i("update:modelValue", [K]);
        else if (typeof t.modelValue == "object") {
          const Z = {}, [q] = Object.keys(t.modelValue);
          Z[q] = K, i("update:modelValue", Z);
        } else
          i("update:modelValue", K);
        E.value = K;
      } else
        P.value = [
          V(K, t.formatter.date, !0),
          V(U, t.formatter.date, !0)
        ];
      Oe(K, U);
    }
    function Xe(K) {
      const U = V().format(t.formatter.date), Z = V().format(t.formatter.date);
      Ve(U, Z), K && K();
    }
    function st(K) {
      const U = V().subtract(1, "day").format(t.formatter.date), Z = V().subtract(1, "day").format(t.formatter.date);
      Ve(U, Z), K && K();
    }
    function lt(K, U) {
      const Z = V().subtract(K - 1, "day").format(t.formatter.date), q = V().format(t.formatter.date);
      Ve(Z, q), U && U();
    }
    function ut(K) {
      const U = V().date(1).format(t.formatter.date), Z = V().date(V().daysInMonth()).format(t.formatter.date);
      Ve(U, Z), K && K();
    }
    function ct(K) {
      const U = V().date(1).subtract(1, "month").format(t.formatter.date), Z = V().date(0).format(t.formatter.date);
      Ve(U, Z), K && K();
    }
    function Vo(K, U) {
      const [Z, q] = K.atClick(), te = V(Z).format(t.formatter.date), pe = V(q).format(t.formatter.date);
      Ve(te, pe), U && U();
    }
    De(
      () => P.value,
      (K) => {
        K.length > 0 && (Y.previous.calendar = !0, Y.previous.month = !1, Y.previous.year = !1, Y.next.calendar = !0, Y.next.month = !1, Y.next.year = !1);
      }
    ), ve(() => {
      t.placeholder ? y.value = t.placeholder : R() ? y.value = `${t.formatter.date}${t.separator}${t.formatter.date}` : y.value = t.formatter.date;
    }), V.locale(t.i18n), De(() => t.i18n, () => V.locale(t.i18n)), ve(() => {
      const K = t.i18n, U = t.modelValue;
      Ee(async () => {
        if (K in ti) {
          const pe = await ti[K]();
          V.locale(pe, void 0, !0), V.locale(K);
        }
        let Z, q;
        if (R()) {
          if (Array.isArray(U)) {
            if (U.length > 0) {
              const [pe, Pe] = U;
              Z = V(pe, t.formatter.date, !0), q = V(Pe, t.formatter.date, !0);
            }
          } else if (typeof U == "object") {
            if (!Hu(U))
              try {
                Object.keys(U);
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
            if (U) {
              const [pe, Pe] = Object.values(U);
              Z = pe && V(pe, t.formatter.date, !0), q = Pe && V(Pe, t.formatter.date, !0);
            }
          } else if (U) {
            const [pe, Pe] = U.split(t.separator);
            Z = V(pe, t.formatter.date, !0), q = V(Pe, t.formatter.date, !0);
          }
          Z && q ? (E.value = d(
            {
              previous: Z,
              next: q
            },
            t
          ), x.value = f(
            {
              previous: Z,
              next: q
            },
            t
          ), q.isBefore(Z, "month") ? ($.value.previous = q, $.value.next = Z, $.value.year.previous = q.year(), $.value.year.next = Z.year()) : q.isSame(Z, "month") ? ($.value.previous = Z, $.value.next = q.add(1, "month"), $.value.year.previous = Z.year(), $.value.year.next = Z.add(1, "year").year()) : ($.value.previous = Z, $.value.next = q, $.value.year.previous = Z.year(), $.value.year.next = q.year()), t.autoApply || (P.value = [Z, q])) : ($.value.previous = V(t.startFrom), $.value.next = V(t.startFrom).add(1, "month"), $.value.year.previous = $.value.previous.year(), $.value.year.next = $.value.next.year());
        } else {
          if (Array.isArray(U)) {
            if (U.length > 0) {
              const [pe] = U;
              Z = V(pe, t.formatter.date, !0);
            }
          } else if (typeof U == "object") {
            if (U) {
              const [pe] = Object.values(U);
              Z = V(pe, t.formatter.date, !0);
            }
          } else if (U.length) {
            const [pe] = U.split(t.separator);
            Z = V(pe, t.formatter.date, !0);
          }
          Z && Z.isValid() ? (E.value = u(Z, t), x.value = h(Z, t), $.value.previous = Z, $.value.next = Z.add(1, "month"), $.value.year.previous = Z.year(), $.value.year.next = Z.add(1, "year").year(), t.autoApply || (P.value = [Z])) : ($.value.previous = V(t.startFrom), $.value.next = V(t.startFrom).add(1, "month"), $.value.year.previous = $.value.previous.year(), $.value.year.next = $.value.next.year());
        }
        const te = t.weekdaysSize === "min" ? V.weekdaysMin() : V.weekdaysShort();
        $.value.weeks = z() ? N(te) : te, $.value.months = t.formatter.month === "MMM" ? V.monthsShort() : V.months();
      });
    });
    function Yu(K) {
      return K && g.value === null && (g.value = p(m.value)), K && g.value ? "place-right" : "place-left";
    }
    function ju(K) {
      return K && g.value === null && (g.value = p(m.value)), g.value ? "left-auto right-0" : "left-0 right-auto";
    }
    return de(Bs, ue), de(zs, Te), de(Ns, ye), de(Hs, Se), de(Vs, Xe), de(Ws, st), de(Us, lt), de(_s, ut), de(qs, ct), de(Zs, Vo), (K, U) => t.noInput ? T.value ? (L(), j("div", Cp, [
      C("div", Lp, [
        C("div", Ip, [
          t.shortcuts ? (L(), $e(ni, {
            key: 0,
            shortcuts: t.shortcuts,
            "as-range": R(),
            "as-single": t.asSingle,
            i18n: t.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : Q("", !0),
          C("div", Rp, [
            R() && !t.asSingle ? (L(), j("div", Fp, [...U[13] || (U[13] = [
              C("div", { class: "tc-h-full tc-border-r tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, null, -1)
            ])])) : Q("", !0),
            C("div", {
              class: we(["tc-relative tc-w-full lg:tc-w-80", {
                "tc-mb-3 sm:tc-mb-0 sm:tc-mr-2 md:tc-w-1/2": R() && !t.asSingle
              }])
            }, [
              ee(xr, {
                panel: Y.previous,
                calendar: A.value.previous
              }, null, 8, ["panel", "calendar"]),
              C("div", Yp, [
                Fe(ee(Mr, {
                  months: M.value,
                  onUpdateMonth: A.value.previous.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [gt, Y.previous.month]
                ]),
                Fe(ee(Sr, {
                  years: A.value.previous.years(),
                  onUpdateYear: A.value.previous.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [gt, Y.previous.year]
                ]),
                Fe(C("div", null, [
                  ee(kr, { weeks: D.value }, null, 8, ["weeks"]),
                  ee($r, {
                    calendar: A.value.previous,
                    weeks: D.value,
                    "as-range": R(),
                    "week-number": e.weekNumber,
                    onUpdateDate: U[7] || (U[7] = (Z) => xe(Z))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [gt, Y.previous.calendar]
                ])
              ])
            ], 2),
            R() && !t.asSingle ? (L(), j("div", jp, [
              ee(xr, {
                "as-prev-or-next": "",
                panel: Y.next,
                calendar: A.value.next
              }, null, 8, ["panel", "calendar"]),
              C("div", Bp, [
                Fe(ee(Mr, {
                  months: M.value,
                  onUpdateMonth: A.value.next.setMonth
                }, null, 8, ["months", "onUpdateMonth"]), [
                  [gt, Y.next.month]
                ]),
                Fe(ee(Sr, {
                  "as-prev-or-next": "",
                  years: A.value.next.years(),
                  onUpdateYear: A.value.next.setYear
                }, null, 8, ["years", "onUpdateYear"]), [
                  [gt, Y.next.year]
                ]),
                Fe(C("div", null, [
                  ee(kr, { weeks: D.value }, null, 8, ["weeks"]),
                  ee($r, {
                    "as-prev-or-next": "",
                    calendar: A.value.next,
                    weeks: D.value,
                    "as-range": R(),
                    "week-number": e.weekNumber,
                    onUpdateDate: U[8] || (U[8] = (Z) => xe(Z))
                  }, null, 8, ["calendar", "weeks", "as-range", "week-number"])
                ], 512), [
                  [gt, Y.next.calendar]
                ])
              ])
            ])) : Q("", !0)
          ])
        ]),
        t.autoApply ? Q("", !0) : (L(), j("div", zp, [
          C("div", Np, [
            C("div", Hp, [
              C("button", {
                type: "button",
                class: "away-apply-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-transparent tc-shadow-sm tc-px-4 tc-py-2 tc-bg-vtd-primary-600 tc-text-base tc-font-medium tc-text-white hover:tc-bg-vtd-primary-700 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800 disabled:tc-cursor-not-allowed",
                disabled: t.asSingle ? P.value.length < 1 : P.value.length < 2,
                onClick: U[9] || (U[9] = (Z) => Ae()),
                textContent: ne(t.options.footer.apply)
              }, null, 8, Vp)
            ])
          ])
        ]))
      ])
    ])) : Q("", !0) : (L(), $e(re($s), {
      key: 0,
      id: "vtd",
      as: "div",
      class: "tc-relative tc-w-full"
    }, {
      default: Me(({ open: Z }) => [
        t.overlay && !t.disabled ? (L(), $e(re(bd), {
          key: 0,
          class: "tc-fixed tc-inset-0 tc-bg-black tc-opacity-30"
        })) : Q("", !0),
        ee(re(yd), {
          as: "label",
          class: "tc-relative tc-block"
        }, {
          default: Me(() => [
            Ce(K.$slots, "default", {
              value: E.value,
              placeholder: y.value,
              clear: G
            }, () => [
              Fe(C("input", so({
                ref_key: "VtdInputRef",
                ref: v
              }, K.$attrs, {
                "onUpdate:modelValue": U[0] || (U[0] = (q) => x.value = q),
                type: "text",
                class: ["tc-relative tc-block tc-w-full tc-min-w-[300px]", [
                  t.disabled ? "tc-cursor-default tc-opacity-50" : "tc-opacity-100",
                  e.inputClasses || "tc-pl-3 tc-pr-12 tc-rounded-lg tc-overflow-hidden tc-text-base tc-text-vtd-secondary-700 tc-placeholder-vtd-secondary-400 tc-transition-colors tc-bg-white tc-border-0 tc-ring-1 tc-ring-inset tc-ring-gray-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700 dark:tc-text-vtd-secondary-100 dark:tc-placeholder-vtd-secondary-500 dark:focus:tc-border-vtd-primary-500 dark:focus:tc-ring-opacity-20"
                ]],
                disabled: t.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other",
                placeholder: y.value,
                onKeyup: Tt(le, ["stop"]),
                onKeydown: U[1] || (U[1] = Tt(() => {
                }, ["stop"]))
              }), null, 16, lp), [
                [Qt, x.value]
              ]),
              C("div", up, [
                C("button", {
                  type: "button",
                  disabled: t.disabled,
                  class: we([
                    t.disabled ? "tc-cursor-default tc-opacity-50" : "tc-opacity-100",
                    "tc-px-2 tc-py-1 tc-mr-1 focus:tc-outline-none tc-text-vtd-secondary-400 dark:tc-text-opacity-70 tc-rounded-md"
                  ]),
                  onClick: U[2] || (U[2] = (q) => {
                    var te;
                    return t.disabled ? !1 : E.value ? G() : (te = v.value) == null ? void 0 : te.focus();
                  })
                }, [
                  Ce(K.$slots, "inputIcon", { value: E.value }, () => [
                    (L(), j("svg", dp, [
                      E.value ? (L(), j("path", fp)) : (L(), j("path", hp))
                    ]))
                  ])
                ], 10, cp)
              ])
            ])
          ]),
          _: 3
        }),
        ee(Wr, {
          "enter-from-class": "tc-opacity-0 tc-translate-y-3",
          "enter-to-class": "tc-opacity-100 tc-translate-y-0",
          "enter-active-class": "tc-transform tc-transition tc-ease-out tc-duration-200",
          "leave-active-class": "tc-transform tc-transition tc-ease-in tc-duration-150",
          "leave-from-class": "tc-opacity-100 tc-translate-y-0",
          "leave-to-class": "tc-opacity-0 tc-translate-y-3"
        }, {
          default: Me(() => [
            t.disabled ? Q("", !0) : (L(), $e(re(wd), {
              key: 0,
              as: "div",
              class: "tc-relative tc-z-50"
            }, {
              default: Me(({ close: q }) => [
                C("div", {
                  class: we(["tc-absolute tc-z-50 tc-top-full sm:tc-mt-2.5", ju(Z)])
                }, [
                  C("div", {
                    ref_key: "VtdRef",
                    ref: m,
                    class: "tc-fixed tc-inset-0 tc-z-50 tc-overflow-y-auto sm:tc-overflow-visible sm:tc-static sm:tc-z-auto tc-bg-white dark:tc-bg-vtd-secondary-800 sm:tc-rounded-lg tc-shadow-sm"
                  }, [
                    C("div", {
                      class: we(["vtd-datepicker tc-static sm:tc-relative tc-w-full tc-bg-white sm:tc-rounded-lg sm:tc-shadow-sm tc-border-0 sm:tc-border tc-border-black/[.1] tc-px-3 tc-py-3 sm:tc-px-4 sm:tc-py-4 dark:tc-bg-vtd-secondary-800 dark:tc-border-vtd-secondary-700/[1]", Yu(Z)])
                    }, [
                      C("div", pp, [
                        t.shortcuts ? (L(), $e(ni, {
                          key: 0,
                          shortcuts: t.shortcuts,
                          "as-range": R(),
                          "as-single": t.asSingle,
                          i18n: t.options.shortcuts,
                          close: q
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : Q("", !0),
                        C("div", vp, [
                          R() && !t.asSingle ? (L(), j("div", mp, [...U[10] || (U[10] = [
                            C("div", { class: "tc-h-full tc-border-r tc-border-black/[.1] dark:tc-border-vtd-secondary-700/[1]" }, null, -1)
                          ])])) : Q("", !0),
                          C("div", {
                            class: we(["tc-relative", {
                              "tc-mb-3 sm:tc-mb-0 sm:tc-mr-2 tc-w-full md:tc-w-1/2 lg:tc-w-80": R() && !t.asSingle,
                              "tc-w-full": !R() && t.asSingle
                            }])
                          }, [
                            ee(xr, {
                              panel: Y.previous,
                              calendar: A.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            C("div", gp, [
                              Fe(ee(Mr, {
                                months: M.value,
                                onUpdateMonth: A.value.previous.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [gt, Y.previous.month]
                              ]),
                              Fe(ee(Sr, {
                                years: A.value.previous.years(),
                                onUpdateYear: A.value.previous.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [gt, Y.previous.year]
                              ]),
                              Fe(C("div", null, [
                                ee(kr, { weeks: D.value }, null, 8, ["weeks"]),
                                ee($r, {
                                  calendar: A.value.previous,
                                  weeks: D.value,
                                  "as-range": R(),
                                  "week-number": e.weekNumber,
                                  onUpdateDate: (te) => xe(te, q)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [gt, Y.previous.calendar]
                              ])
                            ])
                          ], 2),
                          R() && !t.asSingle ? (L(), j("div", yp, [
                            ee(xr, {
                              "as-prev-or-next": "",
                              panel: Y.next,
                              calendar: A.value.next
                            }, null, 8, ["panel", "calendar"]),
                            C("div", bp, [
                              Fe(ee(Mr, {
                                months: M.value,
                                onUpdateMonth: A.value.next.setMonth
                              }, null, 8, ["months", "onUpdateMonth"]), [
                                [gt, Y.next.month]
                              ]),
                              Fe(ee(Sr, {
                                "as-prev-or-next": "",
                                years: A.value.next.years(),
                                onUpdateYear: A.value.next.setYear
                              }, null, 8, ["years", "onUpdateYear"]), [
                                [gt, Y.next.year]
                              ]),
                              Fe(C("div", null, [
                                ee(kr, { weeks: D.value }, null, 8, ["weeks"]),
                                ee($r, {
                                  "as-prev-or-next": "",
                                  calendar: A.value.next,
                                  weeks: D.value,
                                  "as-range": R(),
                                  "week-number": e.weekNumber,
                                  onUpdateDate: (te) => xe(te, q)
                                }, null, 8, ["calendar", "weeks", "as-range", "week-number", "onUpdateDate"])
                              ], 512), [
                                [gt, Y.next.calendar]
                              ])
                            ])
                          ])) : Q("", !0)
                        ])
                      ]),
                      t.time ? (L(), j("div", wp, [
                        C("div", xp, [
                          C("div", $p, [
                            C("div", null, [
                              U[11] || (U[11] = C("p", { class: "tc-font-bold" }, "Start:", -1)),
                              ee(ri, {
                                modelValue: b.value,
                                "onUpdate:modelValue": [
                                  U[3] || (U[3] = (te) => b.value = te),
                                  U[4] || (U[4] = (te) => ge(te, "from"))
                                ],
                                "data-test": "hour-from"
                              }, null, 8, ["modelValue"])
                            ]),
                            C("div", null, [
                              U[12] || (U[12] = C("p", { class: "tc-font-bold" }, "End:", -1)),
                              ee(ri, {
                                modelValue: w.value,
                                "onUpdate:modelValue": [
                                  U[5] || (U[5] = (te) => w.value = te),
                                  U[6] || (U[6] = (te) => ge(te, "to"))
                                ],
                                "data-test": "hour-to"
                              }, null, 8, ["modelValue"])
                            ])
                          ])
                        ])
                      ])) : Q("", !0),
                      t.autoApply ? (L(), j("div", Pp, [
                        C("div", Ep, [
                          C("div", Op, [
                            C("button", {
                              type: "button",
                              class: "away-cancel-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-vtd-secondary-300 tc-shadow-sm tc-px-4 tc-py-2 tc-bg-white tc-text-base tc-font-medium tc-text-vtd-secondary-700 hover:tc-bg-vtd-secondary-50 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-mt-0 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800",
                              onClick: (te) => q(),
                              textContent: ne(t.options.footer.cancel)
                            }, null, 8, Ap)
                          ])
                        ])
                      ])) : (L(), j("div", Sp, [
                        C("div", kp, [
                          C("div", Mp, [
                            C("button", {
                              type: "button",
                              class: "away-apply-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-transparent tc-shadow-sm tc-px-4 tc-py-2 tc-bg-vtd-primary-600 tc-text-base tc-font-medium tc-text-white hover:tc-bg-vtd-primary-700 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800 disabled:tc-cursor-not-allowed",
                              disabled: t.asSingle ? P.value.length < 1 : P.value.length < 2,
                              onClick: (te) => Ae(q),
                              textContent: ne(t.options.footer.apply)
                            }, null, 8, Dp),
                            C("button", {
                              type: "button",
                              class: "tc-mt-3 away-cancel-picker tc-w-full tc-transition tc-ease-out tc-duration-300 tc-inline-flex tc-justify-center tc-rounded-md tc-border tc-border-vtd-secondary-300 tc-shadow-sm tc-px-4 tc-py-2 tc-bg-white tc-text-base tc-font-medium tc-text-vtd-secondary-700 hover:tc-bg-vtd-secondary-50 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-offset-2 focus:tc-ring-vtd-primary-500 sm:tc-mt-0 sm:tc-ml-3 sm:tc-w-auto sm:tc-text-sm dark:tc-ring-offset-vtd-secondary-800",
                              onClick: (te) => q(),
                              textContent: ne(t.options.footer.cancel)
                            }, null, 8, Tp)
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
}), Wp = { key: 0 }, Up = ["data-test"], T1 = {
  __name: "DatePicker",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["input", "update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = n, t = yt(e, "modelValue"), i = e, a = B(() => i.time ? {
      date: "YYYY-MM-DD HH:mm",
      month: "MMM",
      preview: "MM/DD/YYYY HH:mm A"
    } : {
      date: "YYYY-MM-DD",
      month: "MMM",
      preview: "MM/DD/YYYY"
    });
    return De(t, () => {
      r("update:modelValue", t.value);
    }), (s, l) => {
      var c, d;
      return L(), j(ce, null, [
        ee(Ks, {
          modelValue: t.value,
          "onUpdate:modelValue": l[0] || (l[0] = (f) => t.value = f),
          disabled: e.disabled,
          formatter: a.value,
          "no-input": e.inline,
          placeholder: e.placeholder,
          "as-single": ""
        }, null, 8, ["modelValue", "disabled", "formatter", "no-input", "placeholder"]),
        e.showError && ((c = e.v) != null && c.$invalid) ? (L(), j("span", Wp, [
          (L(!0), j(ce, null, Le((d = e.v) == null ? void 0 : d.$silentErrors, (f, u) => (L(), j("p", {
            key: u,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-email-error" + f.$uid,
              class: "tc-font-medium"
            }, ne(f.$message), 9, Up)
          ]))), 128))
        ])) : Q("", !0)
      ], 64);
    };
  }
}, _p = { class: "tc-isolate tc-inline-flex tc-items-center" }, P1 = {
  __name: "DatePrevNextPicker",
  props: {
    modelValue: { type: Array, required: !1, default: [null, null] },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = n, t = yt(e, "modelValue"), i = F(t.value[0]), a = F(t.value[1]);
    De(t, ([l, c]) => {
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
    return (l, c) => (L(), j("span", _p, [
      C("button", {
        class: we([{ disabled: !1 }, "tc-relative tc-inline-flex tc-items-center tc-px-2 tc-py-2 tc-text-gray-800 hover:tc-text-gray-400 focus:tc-z-10"]),
        type: "button",
        onClick: o
      }, [
        ee(re(of), {
          class: "tc-size-5 tc-text-gray-400",
          "aria-hidden": "true"
        }),
        c[0] || (c[0] = C("span", { class: "tc-uppercase tc-font-semibold tc-text-sm" }, "Previous", -1))
      ], 2),
      c[2] || (c[2] = C("div", { class: "tc-text-gray-300" }, "|", -1)),
      C("button", {
        class: we([{ disabled: !1 }, "tc-relative -tc-ml-px tc-inline-flex tc-items-center tc-px-2 tc-py-2 tc-text-gray-800 hover:tc-text-gray-400 focus:tc-z-10"]),
        type: "button",
        onClick: s
      }, [
        c[1] || (c[1] = C("span", { class: "tc-uppercase tc-font-semibold tc-text-sm" }, "Next", -1)),
        ee(re(sf), {
          class: "tc-size-5 tc-text-gray-400",
          "aria-hidden": "true"
        })
      ], 2)
    ]));
  }
}, qp = { class: "tc-flex" }, Zp = { key: 0 }, Kp = ["data-test"], E1 = {
  __name: "DateRangePicker",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = n, t = yt(e, "modelValue"), i = e, a = () => [
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
    ], o = B(() => i.time ? {
      date: "YYYY-MM-DD HH:mm",
      month: "MMM",
      preview: "MM/DD/YYYY HH:mm A"
    } : {
      date: "YYYY-MM-DD",
      month: "MMM",
      preview: "MM/DD/YYYY"
    });
    return De(t, () => {
      r("update:modelValue", t.value);
    }), (l, c) => {
      var d, f;
      return L(), j("div", qp, [
        ee(Ks, {
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
        e.showError && ((d = e.v) != null && d.$invalid) ? (L(), j("span", Zp, [
          (L(!0), j(ce, null, Le((f = e.v) == null ? void 0 : f.$silentErrors, (u, h) => (L(), j("p", {
            key: h,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-error" + u.$uid,
              class: "tc-font-medium"
            }, ne(u.$message), 9, Kp)
          ]))), 128))
        ])) : Q("", !0)
      ]);
    };
  }
}, Gp = ["data-test", "for"], Xp = {
  key: 0,
  class: "tc-text-red-500"
}, Jp = ["id", "data-test", "disabled", "multiple"], Qp = {
  key: 0,
  value: [],
  disabled: "",
  hidden: "",
  class: "whitespace-nowrap"
}, ev = ["value"], tv = {
  key: 1,
  class: "tc-mt-2 tc-text-sm tc-text-gray-500 dark:tc-text-gray-400"
}, nv = {
  key: 2,
  class: "tc-mt-2 tc-text-sm tc-text-green-600 dark:tc-text-green-400"
}, rv = {
  key: 3,
  class: "block tc-mb-2"
}, av = ["data-test"], O1 = {
  __name: "InputSelect",
  props: /* @__PURE__ */ je({
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
  emits: /* @__PURE__ */ je(["update:modelValue"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = yt(e, "modelValue"), t = n;
    return De(r, () => {
      t("update:modelValue", r.value);
    }), (a, o) => {
      var s, l, c, d, f;
      return L(), j("div", null, [
        e.label ? (L(), j("label", {
          key: 0,
          "data-test": e.dataTest + "-label",
          for: e.dataTest,
          class: "tc-block tc-mb-2 tc-text-base tc-font-medium tc-text-gray-900"
        }, [
          He(ne(e.label) + " ", 1),
          (s = e.v) != null && s.required ? (L(), j("span", Xp, "*")) : Q("", !0)
        ], 8, Gp)) : Q("", !0),
        Fe(C("select", {
          id: e.dataTest,
          "onUpdate:modelValue": o[0] || (o[0] = (u) => r.value = u),
          "data-test": e.dataTest + "-select",
          disabled: e.disabled,
          multiple: e.multiple,
          class: we(["tc-block tc-w-full tc-rounded-lg tc-px-4 tc-py-2 tc-text-gray-900 tc-text-base border border-gray-400 sm:border-0", {
            "tc-border-red-300 tc-text-red-900 tc-ring-red-300 placeholder:tc-text-red-300 focus:tc-border-red-300 focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-red-500": (l = e.v) == null ? void 0 : l.$invalid,
            "tc-border-0 tc-ring-1 tc-ring-inset tc-ring-gray-300 tc-shadow-sm placeholder:tc-text-black focus:tc-ring-2 focus:tc-ring-inset focus:tc-ring-tonik-purple": !((c = e.v) != null && c.$invalid),
            disabled: e.disabled
          }])
        }, [
          e.placeholder ? (L(), j("option", Qp, ne(e.placeholder), 1)) : Q("", !0),
          (L(!0), j(ce, null, Le(e.options, (u, h) => (L(), j("option", {
            key: h,
            value: u.value,
            class: "whitespace-nowrap"
          }, ne(u.label), 9, ev))), 128))
        ], 10, Jp), [
          [qi, r.value]
        ]),
        a.$slots.info ? (L(), j("p", tv, [
          Ce(a.$slots, "info")
        ])) : Q("", !0),
        a.$slots.success ? (L(), j("p", nv, [
          Ce(a.$slots, "success")
        ])) : Q("", !0),
        e.showError && ((d = e.v) != null && d.$invalid) ? (L(), j("span", rv, [
          (L(!0), j(ce, null, Le((f = e.v) == null ? void 0 : f.$silentErrors, (u, h) => (L(), j("p", {
            key: h,
            class: "tc-mt-2 tc-text-sm tc-text-red-600 dark:tc-text-red-400"
          }, [
            C("span", {
              "data-test": e.dataTest + "-email-error" + u.$uid,
              class: "tc-font-medium"
            }, ne(u.$message), 9, av)
          ]))), 128))
        ])) : Q("", !0)
      ]);
    };
  }
}, ov = ["data-test", "disabled"], jn = {
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
    return (t, i) => (L(), j("button", {
      class: we([
        "tc-font-bold tc-rounded tc-text-base",
        e.disabled ? "tc-bg-tp-grey-300 tc-text-white" : e.type === "danger" ? "tc-bg-red-500 tc-text-white hover:tc-bg-red-600 focus:tc-outline-none" : e.type === "gray" ? "tc-bg-tp-grey-300 tc-text-gray-400" : e.type === "black-outline" ? "tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2" : e.type === "primary" ? "tc-bg-tonik-purple hover:tc-bg-tonik-purple-dark tc-text-white" : e.type === "primary-outline" ? "tc-bg-transparent tc-text-tp-primary tc-border-tp-primary tc-border hover:tc-bg-tp-primary hover:tc-text-white" : e.type === "secondary" ? "tc-bg-tp-secondary hover:tc-bg-tp-secondary-dark tc-text-gray-800" : e.type === "secondary-outline" ? "tc-bg-transparent tc-text-tp-secondary tc-border-tp-secondary tc-border hover:tc-bg-tp-secondary hover:tc-text-white" : "tc-bg-blue-500 tc-text-white hover:tc-bg-blue-700",
        e.size === "sm" ? "tc-text-sm tc-px-4 tc-py-2.5" : e.size === "md" ? "tc-text-base tc-px-5 tc-py-3" : e.size === "xs" ? "tc-text-xs tc-px-2 tc-py-1" : "tc-text-lg tc-px-8 tc-py-3"
      ]),
      "data-test": e.dataTest + "-button",
      disabled: e.disabled,
      onClick: i[0] || (i[0] = (a) => r("click"))
    }, [
      Ce(t.$slots, "default", {
        dataTest: e.dataTest + "-text"
      }, () => [
        He(ne(e.dataTest), 1)
      ])
    ], 10, ov));
  }
};
function ai(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function iv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function sv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function lv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function uv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function cv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function dv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", { d: "M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" }),
    C("path", { d: "M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" })
  ]);
}
function fv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function hv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function pv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function vv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function mv(e, n) {
  return L(), j("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    C("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const gv = { class: "tc-font-bold tc-text-sm tc-text-black" }, yv = { class: "py-1" }, bv = ["onClick"], wv = ["data-test", "disabled"], A1 = {
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
    return De(() => r.data, async (i, a) => {
      if (r.data === null)
        return;
      if (r.async) {
        const l = i instanceof Blob ? await i.text() : i;
        t("asyncDone", l);
        return;
      }
      const o = window.URL.createObjectURL(new Blob([i])), s = document.createElement("a");
      s.href = o, s.setAttribute("download", r.filename), document.body.appendChild(s), s.click();
    }), (i, a) => r.options.length >= 1 ? (L(), $e(re(ps), {
      key: 0,
      as: "div",
      class: "relative inline-block text-left"
    }, {
      default: Me(() => [
        C("div", null, [
          ee(re(vs), {
            "data-test": e.dataTest + "-download-button",
            disabled: e.disabled,
            class: "tc-flex tc-items-center tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2"
          }, {
            default: Me(() => [
              ee(re(ai), { class: "tc-size-3 tc-mr-3 tc-text-black" }),
              C("span", gv, [
                Ce(i.$slots, "text", {}, () => [
                  a[1] || (a[1] = He("Download", -1))
                ])
              ])
            ]),
            _: 3
          }, 8, ["data-test", "disabled"])
        ]),
        ee(Wr, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: Me(() => [
            ee(re(ms), { class: "tc-absolute tc-right-0 tc-z-1 tc-w-56 tc-origin-top-right tc-rounded-md tc-bg-white tc-shadow-lg tc-border tc-border-tp-grey-300 focus:tc-outline-none" }, {
              default: Me(() => [
                C("div", yv, [
                  (L(!0), j(ce, null, Le(r.options, (o) => (L(), $e(re(gs), {
                    key: `item-${o.key}`
                  }, {
                    default: Me(({ active: s }) => [
                      C("div", {
                        class: we([s ? "tc-bg-gray-100 tc-text-gray-900 tc-outline-none" : "tc-text-gray-700", "tc-block tc-px-4 tc-py-2 tc-text-sm tc-cursor-pointer"]),
                        onClick: (l) => t("download", o.type)
                      }, ne(o.label), 11, bv)
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
    })) : (L(), j("button", {
      key: 1,
      "data-test": e.dataTest + "-download-button",
      disabled: e.disabled,
      class: "tc-flex tc-items-center tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2",
      onClick: a[0] || (a[0] = (o) => t("download"))
    }, [
      ee(re(ai), { class: "tc-size-3 tc-mr-3" }),
      a[2] || (a[2] = C("span", { class: "tc-font-bold tc-text-sm" }, "Download", -1))
    ], 8, wv));
  }
}, xv = { "aria-label": "Progress" }, $v = {
  class: "tc-flex tc-items-center",
  role: "list"
}, Sv = ["onClick"], kv = { class: "tc-sr-only" }, Mv = ["onClick"], Dv = { class: "tc-sr-only" }, Tv = ["onClick"], Pv = { class: "tc-sr-only" }, C1 = {
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
    return (i, a) => (L(), j("nav", xv, [
      C("ol", $v, [
        (L(!0), j(ce, null, Le(e.steps, (o, s) => (L(), j("li", {
          key: o.name,
          class: we([
            s !== e.steps.length - 1 ? "tc-pr-8 sm:tc-pr-20" : "",
            "tc-relative"
          ])
        }, [
          o.status === "complete" ? (L(), j(ce, { key: 0 }, [
            a[1] || (a[1] = C("div", {
              "aria-hidden": "true",
              class: "tc-absolute tc-inset-0 tc-flex tc-items-center"
            }, [
              C("div", { class: "tc-h-1.5 tc-w-full tc-bg-green-1" })
            ], -1)),
            C("a", {
              class: "tc-cursor-pointer tc-relative tc-flex tc-h-6 tc-w-6 tc-items-center tc-justify-center tc-rounded-full tc-bg-green-1 hover:tc-bg-green-1",
              onClick: (l) => t(o)
            }, [
              a[0] || (a[0] = C("svg", {
                width: "14",
                height: "10",
                viewBox: "0 0 12 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                C("path", {
                  d: "M1.83398 4.41667L5.16732 6.91667L11.0007 1.5",
                  stroke: "#1F2931",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1)),
              C("span", kv, ne(o.name), 1)
            ], 8, Sv)
          ], 64)) : o.status === "current" ? (L(), j(ce, { key: 1 }, [
            a[3] || (a[3] = C("div", {
              "aria-hidden": "true",
              class: "tc-cursor-pointer tc-absolute tc-inset-0 tc-flex tc-items-center"
            }, [
              C("div", { class: "tc-h-1.5 tc-w-full tc-bg-grey-2" })
            ], -1)),
            C("a", {
              "aria-current": "step",
              class: "tc-cursor-pointer tc-relative tc-flex tc-h-6 tc-w-6 tc-items-center tc-justify-center tc-rounded-full tc-border-4 tc-border-green-1 bg-white",
              onClick: (l) => t(o)
            }, [
              a[2] || (a[2] = C("span", {
                "aria-hidden": "true",
                class: "tc-h-1.5 tc-w-2.5 tc-rounded-full tc-bg-white"
              }, null, -1)),
              C("span", Dv, ne(o.name), 1)
            ], 8, Mv)
          ], 64)) : (L(), j(ce, { key: 2 }, [
            a[4] || (a[4] = C("div", {
              "aria-hidden": "true",
              class: "tc-absolute tc-inset-0 tc-flex tc-items-center"
            }, [
              C("div", { class: "tc-h-1.5 tc-w-full tc-bg-grey-2" })
            ], -1)),
            C("a", {
              class: "tc-cursor-pointer tc-group tc-relative tc-flex tc-h-6 tc-w-6 tc-items-center tc-justify-center tc-rounded-full tc-border-4 tc-border-grey-2 tc-bg-white",
              onClick: (l) => t(o)
            }, [
              C("span", Pv, ne(o.name), 1)
            ], 8, Tv)
          ], 64))
        ], 2))), 128))
      ])
    ]));
  }
}, Ev = { class: "tc-flex tc-min-h-full tc-items-end tc-justify-center tc-p-4 tc-text-center sm:tc-items-center sm:tc-p-0" }, Ov = { class: "tc-absolute tc-right-0 tc-top-0 tc-pr-4 tc-pt-4 sm:tc-block" }, Av = { class: "sm:tc-flex sm:tc-items-start sm:tc-justify-center" }, Cv = { class: "tc-mt-3 sm:tc-ml-4 sm:tc-mt-0 sm:tc-text-left tc-w-full" }, Lv = { class: "tc-mt-2" }, Iv = { class: "tc-text-base tc-text-gray-500" }, Rv = {
  key: 0,
  class: "tc-mt-5 sm:tc-mt-4 sm:tc-flex"
}, L1 = {
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
    return (s, l) => (L(), $e(re(Ps), {
      show: !0,
      as: "template",
      onClose: l[3] || (l[3] = (c) => o())
    }, {
      default: Me(() => [
        ee(re(ld), {
          as: "div",
          class: we(`relative ${a[e.zindex]}`)
        }, {
          default: Me(() => [
            ee(re(Ya), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: Me(() => [
                t.backdrop ? (L(), j("div", {
                  key: 0,
                  class: we(`fixed ${a[e.zindex]} tc-inset-0 tc-bg-gray-500 tc-bg-opacity-75 tc-transition-opacity`)
                }, null, 2)) : Q("", !0)
              ]),
              _: 1
            }),
            C("div", {
              class: we(`tc-fixed tc-inset-0 ${a[e.zindex]} tc-w-full tc-overflow-y-auto`)
            }, [
              C("div", Ev, [
                ee(re(Ya), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: Me(() => [
                    ee(re(ud), {
                      class: we(`tc-relative tc-transform tc-overflow-hidden tc-rounded-lg tc-bg-white tc-px-4 tc-pb-4 tc-pt-5 tc-text-left tc-shadow-xl tc-transition-all sm:tc-my-8 sm:tc-p-6 ${i[e.size]}`)
                    }, {
                      default: Me(() => [
                        C("div", Ov, [
                          C("button", {
                            class: "tc-rounded-md tc-bg-white tc-text-gray-400 hover:tc-text-gray-500 focus:tc-outline-none focus:tc-ring-0",
                            type: "button",
                            onClick: l[0] || (l[0] = (c) => r("close"))
                          }, [
                            l[4] || (l[4] = C("span", { class: "sr-only" }, "Close", -1)),
                            ee(re(mv), {
                              "aria-hidden": "true",
                              class: "tc-size-6"
                            })
                          ])
                        ]),
                        C("div", Av, [
                          C("div", Cv, [
                            ee(re(cd), {
                              as: "h2",
                              class: "tc-text-lg tc-font-semibold tc-leading-6 tc-text-gray-900"
                            }, {
                              default: Me(() => [
                                Ce(s.$slots, "title")
                              ]),
                              _: 3
                            }),
                            C("div", Lv, [
                              C("p", Iv, [
                                Ce(s.$slots, "content")
                              ])
                            ])
                          ])
                        ]),
                        e.buttons ? (L(), j("div", Rv, [
                          Ce(s.$slots, "buttons", { class: "tc-flex-col" }, () => [
                            ee(jn, {
                              class: "tc-justify-center",
                              "data-test": "cancel-app",
                              type: "secondary-bordered",
                              onClick: l[1] || (l[1] = (c) => r("close"))
                            }, {
                              default: Me(() => [...l[5] || (l[5] = [
                                He(" Cancel ", -1)
                              ])]),
                              _: 1
                            }),
                            ee(jn, {
                              class: "tc-justify-center tc-ml-4",
                              "data-test": "save-app",
                              type: "primary",
                              onClick: l[2] || (l[2] = (c) => r("save"))
                            }, {
                              default: Me(() => [...l[6] || (l[6] = [
                                He(" Save ", -1)
                              ])]),
                              _: 1
                            })
                          ])
                        ])) : Q("", !0)
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
function Fv(e) {
  F(null);
  let n = null;
  const r = async () => {
    if (!(typeof window > "u"))
      return n || (n = (await import("./plotly.min-8usfbhWK.js").then((a) => a.p)).default, n);
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
  return se(() => {
    t();
  }), De(
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
const Yv = ["id"], I1 = {
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
      const { x: l, headers: c, type: d, opacity: f, options: u } = t.config, h = Object.keys(c), p = h.reduce((k, E) => ({ ...k, [E]: [] }), { x: [] }), m = s.reduce((k, E) => {
        const x = h.reduce((S, b) => (S[b] = [...S[b], E[b]], S), p);
        return x.x = [...k.x, E[l]], x;
      }, p), v = m.x;
      delete m.x;
      const { parents: g } = t.config, y = i();
      switch (d) {
        case "pie":
          return Object.keys(m).reduce((k, E) => [...k, {
            values: m[E],
            labels: v,
            type: d,
            ...u ? u[E] || {} : {}
          }], []);
        case "treemap":
          return Object.keys(m).reduce((k, E) => [...k, {
            type: "treemap",
            labels: v,
            parents: g,
            values: m[E],
            textinfo: "label+value+percent entry",
            ...u ? u[E] || {} : {}
          }], []);
        case "bar":
          return Object.keys(m).reduce((k, E, x) => [...k, {
            x: v,
            y: m[E],
            name: c[E],
            marker: { color: y[x] ?? n() },
            type: d,
            opacity: 1,
            ...u ? u[E] || {} : {}
          }], []);
        case "scatter":
        default:
          return Object.keys(m).reduce((k, E, x) => [...k, {
            x: v,
            y: m[E],
            name: c[E],
            type: d || "scatter",
            opacity: f && x > 0 ? f : 1,
            marker: { color: y[x] ?? n() },
            ...u ? u[E] || {} : {}
          }], []);
      }
    }
    const o = () => a(t.data);
    return Fv({
      id: t.id,
      layout: t.config.layout,
      getData: o
    }), (s, l) => (L(), j("div", { id: e.id }, null, 8, Yv));
  }
};
function oi(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Ie(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? oi(Object(r), !0).forEach(function(t) {
      Et(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oi(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Et(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function jv(e, n) {
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
function An(e) {
  return function(n) {
    if (Array.isArray(n)) return ga(n);
  }(e) || function(n) {
    if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
  }(e) || function(n, r) {
    if (n) {
      if (typeof n == "string") return ga(n, r);
      var t = Object.prototype.toString.call(n).slice(8, -1);
      if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
      if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ga(n, r);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ga(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
  return t;
}
var ii, Bv, Dr, Je = (ii = function(e) {
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
}, ii(Dr = { path: Bv, exports: {}, require: function(e, n) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(n == null && Dr.path);
} }, Dr.exports), Dr.exports), Bt = function(e) {
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
function ja(e, n, r) {
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
ja.debounce = ja;
var Ba = ja, me = function() {
  return me = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) for (var i in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    return e;
  }, me.apply(this, arguments);
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
function Gs(e, n) {
  var r, t;
  return e && n ? (r = "" + e + n[0].toUpperCase() + n.slice(1), t = e + "-" + n) : (r = e || n, t = e || n), { name: r, classname: t };
}
function Xs(e) {
  return /^blob:/.test(e);
}
function si(e) {
  return Xs(e) || function(n) {
    return /^data:/.test(n);
  }(e);
}
function Yn(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function et(e) {
  return e === void 0;
}
function zr(e) {
  return typeof e == "object" && e !== null;
}
function za(e, n, r) {
  var t = {};
  return zr(e) ? (Object.keys(n).forEach(function(i) {
    et(e[i]) ? t[i] = n[i] : zr(n[i]) ? zr(e[i]) ? t[i] = za(e[i], n[i], r[i]) : t[i] = e[i] ? n[i] : r[i] : n[i] === !0 || n[i] === !1 ? t[i] = !!e[i] : t[i] = e[i];
  }), t) : e ? n : r;
}
function Tr(e) {
  var n = Number(e);
  return Number.isNaN(n) ? e : n;
}
function li(e) {
  return typeof (e == "number" || /* @__PURE__ */ function(n) {
    return typeof n == "object" && n !== null;
  }(e) && toString.call(e) == "[object Number]") && !Js(e);
}
function Js(e) {
  return e != e;
}
function Qs(e, n) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
var Jn = function(e, n) {
  e === void 0 && (e = {}), n === void 0 && (n = {}), this.type = "manipulateImage", this.move = e, this.scale = n;
}, zv = function(e, n) {
  n === void 0 && (n = {}), this.type = "resize", this.directions = e, this.params = n;
}, bo = function(e) {
  this.type = "move", this.directions = e;
}, Nv = function() {
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
}(), wo = { name: "DraggableElement", props: { classname: { type: String } }, beforeMount: function() {
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
  e.cancelable && !this.disabled && e.touches.length === 1 && (this.touches = An(e.touches), this.hovered || (this.$emit("enter"), this.hovered = !0), e.touches.length && this.initAnchor(this.touches.reduce(function(n, r) {
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
  var r = An(n);
  if (this.touches.length) {
    if (this.touches.length === 1 && r.length === 1) {
      var t = this.$refs.draggable;
      this.$emit("drag", new Nv(e, t, { left: r[0].clientX, top: r[0].clientY }, { left: this.touches[0].clientX, top: this.touches[0].clientY }, this.anchor));
    }
    this.touches = r;
  }
}, processEnd: function() {
  this.touches.length && this.$emit("drag-end"), this.hovered && (this.$emit("leave"), this.hovered = !1), this.touches = [];
} }, emits: ["drag", "drag-end", "leave", "enter"] };
wo.render = function(e, n, r, t, i, a) {
  return L(), $e("div", { ref: "draggable", class: r.classname, onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onMouseover: n[3] || (n[3] = function() {
    return a.onMouseOver && a.onMouseOver.apply(a, arguments);
  }), onMouseleave: n[4] || (n[4] = function() {
    return a.onMouseLeave && a.onMouseLeave.apply(a, arguments);
  }) }, [Ce(e.$slots, "default")], 34);
};
var ya = Bt("vue-handler-wrapper"), el = { name: "HandlerWrapper", components: { DraggableElement: wo }, props: { horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, computed: { classes: function() {
  var e;
  if (this.horizontalPosition || this.verticalPosition) {
    var n, r = Gs(this.horizontalPosition, this.verticalPosition);
    e = ya((Et(n = {}, r.classname, !0), Et(n, "disabled", this.disabled), n));
  } else e = ya({ disabled: this.disabled });
  return { root: e, draggable: ya("draggable") };
} }, emits: ["leave", "enter", "drag", "drag-end"] };
el.render = function(e, n, r, t, i, a) {
  var o = Jt("DraggableElement");
  return L(), $e("div", { class: a.classes.root }, [ee(o, { class: a.classes.draggable, onDrag: n[1] || (n[1] = function(s) {
    return e.$emit("drag", s);
  }), onDragEnd: n[2] || (n[2] = function(s) {
    return e.$emit("drag-end");
  }), onLeave: n[3] || (n[3] = function(s) {
    return e.$emit("leave");
  }), onEnter: n[4] || (n[4] = function(s) {
    return e.$emit("enter");
  }) }, { default: Me(function() {
    return [Ce(e.$slots, "default")];
  }), _: 3 }, 8, ["class"])], 2);
};
var Hv = Bt("vue-line-wrapper"), tl = { name: "LineWrapper", components: { DraggableElement: wo }, props: { position: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } }, computed: { classname: function() {
  var e;
  return Hv((Et(e = {}, this.position, !0), Et(e, "disabled", this.disabled), e));
} }, emits: ["leave", "enter", "drag", "drag-end"] };
tl.render = function(e, n, r, t, i, a) {
  var o = Jt("DraggableElement");
  return L(), $e(o, { class: a.classname, onDrag: n[1] || (n[1] = function(s) {
    return e.$emit("drag", s);
  }), onDragEnd: n[2] || (n[2] = function(s) {
    return e.$emit("drag-end");
  }), onLeave: n[3] || (n[3] = function(s) {
    return e.$emit("leave");
  }), onEnter: n[4] || (n[4] = function(s) {
    return e.$emit("enter");
  }) }, { default: Me(function() {
    return [Ce(e.$slots, "default")];
  }), _: 3 }, 8, ["class"]);
};
var Ht = ["left", "right", "top", "bottom"], Vv = ["left", "right"], Wv = ["top", "bottom"], Uv = ["left", "top"], _v = ["fill-area", "fit-area", "stencil", "none"], ui = { left: 0, top: 0, width: 0, height: 0 };
function ci(e, n, r) {
  return !(r = r || ["width", "height", "left", "top"]).some(function(t) {
    return e[t] !== n[t];
  });
}
function Wt(e) {
  return { left: e.left, top: e.top, right: e.left + e.width, bottom: e.top + e.height };
}
function Bn(e, n) {
  return { left: e.left - n.left, top: e.top - n.top };
}
function dt(e) {
  return { left: e.left + e.width / 2, top: e.top + e.height / 2 };
}
function er(e, n) {
  var r = { left: 0, top: 0, right: 0, bottom: 0 };
  return Ht.forEach(function(t) {
    var i = n[t], a = Wt(e)[t];
    r[t] = i !== void 0 && a !== void 0 ? t === "left" || t === "top" ? Math.max(0, i - a) : Math.max(0, a - i) : 0;
  }), r;
}
function Nt(e, n) {
  return { left: e.left - n.left, top: e.top - n.top, width: e.width + n.left + n.right, height: e.height + n.top + n.bottom };
}
function Gr(e) {
  return { left: -e.left, top: -e.top };
}
function bt(e, n) {
  return me(me({}, e), { left: e.left + n.left, top: e.top + n.top });
}
function Ct(e, n, r, t) {
  if (n !== 1) {
    if (r) {
      var i = dt(e);
      return { width: e.width * n, height: e.height * n, left: e.left + e.width * (1 - n) / 2 + (r.left - i.left) * (1 - n), top: e.top + e.height * (1 - n) / 2 + (r.top - i.top) * (1 - n) };
    }
    return { width: e.width * n, height: e.height * n, left: e.left + e.width * (1 - n) / 2, top: e.top + e.height * (1 - n) / 2 };
  }
  return e;
}
function Re(e) {
  return e.width / e.height;
}
function zn(e, n) {
  return Math.min(n.right !== void 0 && n.left !== void 0 ? (n.right - n.left) / e.width : 1 / 0, n.bottom !== void 0 && n.top !== void 0 ? (n.bottom - n.top) / e.height : 1 / 0);
}
function Nn(e, n) {
  var r = { left: 0, top: 0 }, t = er(e, n);
  return t.left && t.left > 0 ? r.left = t.left : t.right && t.right > 0 && (r.left = -t.right), t.top && t.top > 0 ? r.top = t.top : t.bottom && t.bottom > 0 && (r.top = -t.bottom), r;
}
function ba(e, n) {
  var r;
  return n.minimum && e < n.minimum ? r = n.minimum : n.maximum && e > n.maximum && (r = n.maximum), r;
}
function nl(e, n) {
  var r = Re(e), t = Re(n);
  return n.width < 1 / 0 && n.height < 1 / 0 ? r > t ? { width: n.width, height: n.width / r } : { width: n.height * r, height: n.height } : n.width < 1 / 0 ? { width: n.width, height: n.width / r } : n.height < 1 / 0 ? { width: n.height * r, height: n.height } : e;
}
function rl(e, n) {
  var r = n * Math.PI / 180;
  return { width: Math.abs(e.width * Math.cos(r)) + Math.abs(e.height * Math.sin(r)), height: Math.abs(e.width * Math.sin(r)) + Math.abs(e.height * Math.cos(r)) };
}
function un(e, n) {
  var r = n * Math.PI / 180;
  return { left: e.left * Math.cos(r) - e.top * Math.sin(r), top: e.left * Math.sin(r) + e.top * Math.cos(r) };
}
function Xr(e, n) {
  var r = er(ft(e, n), n);
  return r.left + r.right + r.top + r.bottom ? r.left + r.right > r.top + r.bottom ? Math.min((e.width + r.left + r.right) / e.width, zn(e, n)) : Math.min((e.height + r.top + r.bottom) / e.height, zn(e, n)) : 1;
}
function ft(e, n, r) {
  r === void 0 && (r = !1);
  var t = Nn(e, n);
  return bt(e, r ? Gr(t) : t);
}
function Na(e) {
  return { width: e.right !== void 0 && e.left !== void 0 ? e.right - e.left : 1 / 0, height: e.bottom !== void 0 && e.top !== void 0 ? e.bottom - e.top : 1 / 0 };
}
function qv(e, n) {
  return me(me({}, e), { minWidth: Math.min(n.width, e.minWidth), minHeight: Math.min(n.height, e.minHeight), maxWidth: Math.min(n.width, e.maxWidth), maxHeight: Math.min(n.height, e.maxHeight) });
}
function al(e, n, r) {
  r === void 0 && (r = !0);
  var t = {};
  return Ht.forEach(function(i) {
    var a = e[i], o = n[i];
    a !== void 0 && o !== void 0 ? t[i] = i === "left" || i === "top" ? r ? Math.max(a, o) : Math.min(a, o) : r ? Math.min(a, o) : Math.max(a, o) : o !== void 0 ? t[i] = o : a !== void 0 && (t[i] = a);
  }), t;
}
function Jr(e, n) {
  return al(e, n, !0);
}
function di(e) {
  var n = e.size, r = e.aspectRatio, t = e.ignoreMinimum, i = e.sizeRestrictions;
  return !!((n.correctRatio || Re(n) >= r.minimum && Re(n) <= r.maximum) && n.height <= i.maxHeight && n.width <= i.maxWidth && n.width && n.height && (t || n.height >= i.minHeight && n.width >= i.minWidth));
}
function fi(e, n) {
  return Math.pow(e.width - n.width, 2) + Math.pow(e.height - n.height, 2);
}
function Gt(e) {
  var n = e.width, r = e.height, t = e.sizeRestrictions, i = { minimum: e.aspectRatio && e.aspectRatio.minimum || 0, maximum: e.aspectRatio && e.aspectRatio.maximum || 1 / 0 }, a = { width: Math.max(t.minWidth, Math.min(t.maxWidth, n)), height: Math.max(t.minHeight, Math.min(t.maxHeight, r)) };
  function o(c, d) {
    return d === void 0 && (d = !1), c.reduce(function(f, u) {
      return di({ size: u, aspectRatio: i, sizeRestrictions: t, ignoreMinimum: d }) && (!f || fi(u, { width: n, height: r }) < fi(f, { width: n, height: r })) ? u : f;
    }, null);
  }
  var s = [];
  i && [i.minimum, i.maximum].forEach(function(c) {
    c && s.push({ width: a.width, height: a.width / c, correctRatio: !0 }, { width: a.height * c, height: a.height, correctRatio: !0 });
  }), di({ size: a, aspectRatio: i, sizeRestrictions: t }) && s.push(a);
  var l = o(s) || o(s, !0);
  return l && { width: l.width, height: l.height };
}
function Ha(e) {
  var n = e.event, r = e.coordinates, t = e.positionRestrictions, i = t === void 0 ? {} : t, a = bt(r, n.directions);
  return bt(a, Nn(a, i));
}
function Zv(e) {
  var n = e.coordinates, r = e.transform, t = e.imageSize, i = e.sizeRestrictions, a = e.positionRestrictions, o = e.aspectRatio, s = e.visibleArea, l = function(d, f) {
    return Ha({ coordinates: d, positionRestrictions: a, event: new bo({ left: f.left - d.left, top: f.top - d.top }) });
  }, c = me({}, n);
  return (Array.isArray(r) ? r : [r]).forEach(function(d) {
    var f = {};
    et((f = typeof d == "function" ? d({ coordinates: c, imageSize: t, visibleArea: s }) : d).width) && et(f.height) || (c = function(u, h) {
      var p = me(me(me({}, u), Gt({ width: h.width, height: h.height, sizeRestrictions: i, aspectRatio: o })), { left: 0, top: 0 });
      return l(p, { left: u.left, top: u.top });
    }(c, me(me({}, c), f))), et(f.left) && et(f.top) || (c = l(c, me(me({}, c), f)));
  }), c;
}
function Kv(e) {
  e.event;
  var n = e.getAreaRestrictions, r = e.boundaries, t = e.coordinates, i = e.visibleArea;
  e.aspectRatio;
  var a = e.stencilSize, o = e.sizeRestrictions, s = e.positionRestrictions;
  e.stencilReference;
  var l, c, d, f = me({}, t), u = me({}, i), h = me({}, a);
  l = Re(h), c = Re(f), d === void 0 && (d = 1e-3), (l === 0 || c === 0 ? Math.abs(c - l) < d : Math.abs(c / l) < 1 + d && Math.abs(c / l) > 1 - d) || (f = me(me({}, f), Gt({ sizeRestrictions: o, width: f.width, height: f.height, aspectRatio: { minimum: Re(h), maximum: Re(h) } })));
  var p = Xr(u = Ct(u, f.width * r.width / (u.width * h.width)), n({ visibleArea: u, type: "resize" }));
  return p !== 1 && (u = Ct(u, p), f = Ct(f, p)), u = ft(u = bt(u, Bn(dt(f), dt(u))), n({ visibleArea: u, type: "move" })), { coordinates: f = ft(f, Jr(Wt(u), s)), visibleArea: u };
}
function Gv(e) {
  var n = e.event, r = e.getAreaRestrictions, t = e.boundaries, i = e.coordinates, a = e.visibleArea;
  e.aspectRatio, e.stencilSize, e.sizeRestrictions;
  var o = e.positionRestrictions;
  e.stencilReference;
  var s = me({}, i), l = me({}, a);
  if (i && a && n.type !== "manipulateImage") {
    var c = { width: 0, height: 0 };
    l.width, t.width, Re(t) > Re(s) ? (c.height = 0.8 * t.height, c.width = c.height * Re(s)) : (c.width = 0.8 * t.width, c.height = c.width * Re(s));
    var d = Xr(l = Ct(l, s.width * t.width / (l.width * c.width)), r({ visibleArea: l, type: "resize" }));
    l = Ct(l, d), d !== 1 && (c.height /= d, c.width /= d), l = ft(l = bt(l, Bn(dt(s), dt(l))), r({ visibleArea: l, type: "move" })), s = ft(s, Jr(Wt(l), o));
  }
  return { coordinates: s, visibleArea: l };
}
function Xv(e) {
  var n = e.event, r = e.coordinates, t = e.visibleArea, i = e.getAreaRestrictions, a = me({}, t), o = me({}, r);
  if (n.type === "setCoordinates") {
    var s = Math.max(0, o.width - a.width), l = Math.max(0, o.height - a.height);
    s > l ? a = Ct(a, Math.min(o.width / a.width, zn(a, i({ visibleArea: a, type: "resize" })))) : l > s && (a = Ct(a, Math.min(o.height / a.height, zn(a, i({ visibleArea: a, type: "resize" }))))), a = ft(a = bt(a, Gr(Nn(o, Wt(a)))), i({ visibleArea: a, type: "move" }));
  }
  return { visibleArea: a, coordinates: o };
}
function Jv(e) {
  var n = e.imageSize, r = e.visibleArea, t = e.coordinates, i = r || n;
  return { left: (r ? r.left : 0) + i.width / 2 - t.width / 2, top: (r ? r.top : 0) + i.height / 2 - t.height / 2 };
}
function Qv(e) {
  var n = e.imageSize, r = e.visibleArea, t = e.aspectRatio, i = e.sizeRestrictions, a = r || n, o = Math.min(t.maximum || 1 / 0, Math.max(t.minimum || 0, Re(a))), s = a.width < a.height ? { width: 0.8 * a.width, height: 0.8 * a.width / o } : { height: 0.8 * a.height, width: 0.8 * a.height * o };
  return Gt(me(me({}, s), { aspectRatio: t, sizeRestrictions: i }));
}
function em(e) {
  var n, r, t = e.imageSize, i = e.visibleArea, a = e.boundaries, o = e.aspectRatio, s = e.sizeRestrictions, l = e.stencilSize, c = i || t;
  return Re(c) > Re(a) ? r = (n = l.height * c.height / a.height) * Re(l) : n = (r = l.width * c.width / a.width) / Re(l), Gt({ width: r, height: n, aspectRatio: o, sizeRestrictions: s });
}
function tm(e) {
  var n = e.getAreaRestrictions, r = e.coordinates, t = e.imageSize, i = Re(e.boundaries);
  if (r) {
    var a = { height: Math.max(r.height, t.height), width: Math.max(r.width, t.width) }, o = nl({ width: Re(a) > i ? a.width : a.height * i, height: Re(a) > i ? a.width / i : a.height }, Na(n())), s = { left: r.left + r.width / 2 - o.width / 2, top: r.top + r.height / 2 - o.height / 2, width: o.width, height: o.height }, l = er(r, Wt(me({ left: 0, top: 0 }, t))), c = {};
    return !l.left && !l.right && s.width <= t.width && (c.left = 0, c.right = t.width), !l.top && !l.bottom && s.height <= t.height && (c.top = 0, c.bottom = t.height), ft(s, c);
  }
  var d = Re(t);
  return o = { height: d > i ? t.height : t.width / i, width: d > i ? t.height * i : t.width }, { left: t.width / 2 - o.width / 2, top: t.height / 2 - o.height / 2, width: o.width, height: o.height };
}
function Pr(e, n) {
  return al(e, Wt(n));
}
function nm(e) {
  var n = e.event, r = e.coordinates, t = e.visibleArea, i = e.sizeRestrictions, a = e.getAreaRestrictions, o = e.positionRestrictions, s = e.adjustStencil, l = n.scale, c = n.move, d = me({}, t), f = me({}, r), u = 1, h = 1, p = l.factor && Math.abs(l.factor - 1) > 1e-3;
  d = bt(d, { left: c.left || 0, top: c.top || 0 });
  var m = { stencil: { minimum: Math.max(i.minWidth ? i.minWidth / f.width : 0, i.minHeight ? i.minHeight / f.height : 0), maximum: Math.min(i.maxWidth ? i.maxWidth / f.width : 1 / 0, i.maxHeight ? i.maxHeight / f.height : 1 / 0, zn(f, o)) }, area: { maximum: zn(d, a({ visibleArea: d, type: "resize" })) } };
  l.factor && p && (l.factor < 1 ? (h = Math.max(l.factor, m.stencil.minimum)) > 1 && (h = 1) : l.factor > 1 && (h = Math.min(l.factor, Math.min(m.area.maximum, m.stencil.maximum))) < 1 && (h = 1)), h && (d = Ct(d, h, l.center));
  var v = r.left - t.left, g = t.width + t.left - (r.width + r.left), y = r.top - t.top, k = t.height + t.top - (r.height + r.top);
  return d = ft(d = bt(d, Nn(d, { left: o.left !== void 0 ? o.left - v * h : void 0, top: o.top !== void 0 ? o.top - y * h : void 0, bottom: o.bottom !== void 0 ? o.bottom + k * h : void 0, right: o.right !== void 0 ? o.right + g * h : void 0 })), a({ visibleArea: d, type: "move" })), f.width = f.width * h, f.height = f.height * h, f.left = d.left + v * h, f.top = d.top + y * h, f = ft(f, Jr(Wt(d), o)), l.factor && p && s && (l.factor > 1 ? u = Math.min(m.area.maximum, l.factor) / h : l.factor < 1 && (u = Math.max(f.height / d.height, f.width / d.width, l.factor / h)), u !== 1 && (d = bt(d = ft(d = Ct(d, u, l.factor > 1 ? l.center : dt(f)), a({ visibleArea: d, type: "move" })), Gr(Nn(f, Wt(d)))))), { coordinates: f, visibleArea: d };
}
function rm(e) {
  var n = e.aspectRatio, r = e.getAreaRestrictions, t = e.coordinates, i = e.visibleArea, a = e.sizeRestrictions, o = e.positionRestrictions, s = e.imageSize, l = e.previousImageSize, c = e.angle, d = me({}, t), f = me({}, i), u = un(dt(me({ left: 0, top: 0 }, l)), c);
  return (d = me(me({}, Gt({ sizeRestrictions: a, aspectRatio: n, width: d.width, height: d.height })), un(dt(d), c))).left -= u.left - s.width / 2 + d.width / 2, d.top -= u.top - s.height / 2 + d.height / 2, f = Ct(f, Xr(f, r({ visibleArea: f, type: "resize" }))), { coordinates: d = ft(d, o), visibleArea: f = ft(f = bt(f, Bn(dt(d), dt(t))), r({ visibleArea: f, type: "move" })) };
}
function am(e) {
  var n = e.flip, r = e.previousFlip, t = e.rotate, i = e.getAreaRestrictions, a = e.coordinates, o = e.visibleArea, s = e.imageSize, l = me({}, a), c = me({}, o), d = r.horizontal !== n.horizontal, f = r.vertical !== n.vertical;
  if (d || f) {
    var u = un({ left: s.width / 2, top: s.height / 2 }, -t), h = un(dt(l), -t), p = un({ left: d ? u.left - (h.left - u.left) : h.left, top: f ? u.top - (h.top - u.top) : h.top }, t);
    l = bt(l, Bn(p, dt(l))), h = un(dt(c), -t), c = ft(c = bt(c, Bn(p = un({ left: d ? u.left - (h.left - u.left) : h.left, top: f ? u.top - (h.top - u.top) : h.top }, t), dt(c))), i({ visibleArea: c, type: "move" }));
  }
  return { coordinates: l, visibleArea: c };
}
function hi(e) {
  var n = e.directions, r = e.coordinates, t = e.positionRestrictions, i = t === void 0 ? {} : t, a = e.sizeRestrictions, o = e.preserveRatio, s = e.compensate, l = me({}, n), c = Nt(r, l).width, d = Nt(r, l).height;
  c < 0 && (l.left < 0 && l.right < 0 ? (l.left = -(r.width - a.minWidth) / (l.left / l.right), l.right = -(r.width - a.minWidth) / (l.right / l.left)) : l.left < 0 ? l.left = -(r.width - a.minWidth) : l.right < 0 && (l.right = -(r.width - a.minWidth))), d < 0 && (l.top < 0 && l.bottom < 0 ? (l.top = -(r.height - a.minHeight) / (l.top / l.bottom), l.bottom = -(r.height - a.minHeight) / (l.bottom / l.top)) : l.top < 0 ? l.top = -(r.height - a.minHeight) : l.bottom < 0 && (l.bottom = -(r.height - a.minHeight)));
  var f = er(Nt(r, l), i);
  s && (f.left && f.left > 0 && f.right === 0 ? (l.right += f.left, l.left -= f.left) : f.right && f.right > 0 && f.left === 0 && (l.left += f.right, l.right -= f.right), f.top && f.top > 0 && f.bottom === 0 ? (l.bottom += f.top, l.top -= f.top) : f.bottom && f.bottom > 0 && f.top === 0 && (l.top += f.bottom, l.bottom -= f.bottom), f = er(Nt(r, l), i));
  var u = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
  if (Ht.forEach(function(m) {
    var v = f[m];
    v && l[m] && (u[m] = Math.max(0, 1 - v / l[m]));
  }), o) {
    var h = Math.min.apply(null, Ht.map(function(m) {
      return u[m];
    }));
    h !== 1 / 0 && Ht.forEach(function(m) {
      l[m] *= h;
    });
  } else Ht.forEach(function(m) {
    u[m] !== 1 / 0 && (l[m] *= u[m]);
  });
  if (c = Nt(r, l).width, d = Nt(r, l).height, l.right + l.left && (c > a.maxWidth ? u.width = (a.maxWidth - r.width) / (l.right + l.left) : c < a.minWidth && (u.width = (a.minWidth - r.width) / (l.right + l.left))), l.bottom + l.top && (d > a.maxHeight ? u.height = (a.maxHeight - r.height) / (l.bottom + l.top) : d < a.minHeight && (u.height = (a.minHeight - r.height) / (l.bottom + l.top))), o) {
    var p = Math.min(u.width, u.height);
    p !== 1 / 0 && Ht.forEach(function(m) {
      l[m] *= p;
    });
  } else u.width !== 1 / 0 && Vv.forEach(function(m) {
    l[m] *= u.width;
  }), u.height !== 1 / 0 && Wv.forEach(function(m) {
    l[m] *= u.height;
  });
  return l;
}
function Er(e, n, r) {
  return n == 0 && r == 0 ? e / 2 : n == 0 ? 0 : r == 0 ? e : e * Math.abs(n / (n + r));
}
var om = Bt("vue-simple-handler"), im = Bt("vue-simple-handler-wrapper"), xo = { name: "SimpleHandler", components: { HandlerWrapper: el }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  var e, n = (Et(e = {}, this.horizontalPosition, !!this.horizontalPosition), Et(e, this.verticalPosition, !!this.verticalPosition), Et(e, "".concat(this.horizontalPosition, "-").concat(this.verticalPosition), !!(this.verticalPosition && this.horizontalPosition)), Et(e, "hover", this.hover), e);
  return { default: Je(om(n), this.defaultClass, this.hover && this.hoverClass), wrapper: Je(im(n), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
xo.render = function(e, n, r, t, i, a) {
  var o = Jt("HandlerWrapper");
  return L(), $e(o, { class: a.classes.wrapper, "vertical-position": r.verticalPosition, "horizontal-position": r.horizontalPosition, disabled: r.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: Me(function() {
    return [ee("div", { class: a.classes.default }, null, 2)];
  }), _: 1 }, 8, ["class", "vertical-position", "horizontal-position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var sm = Bt("vue-simple-line"), lm = Bt("vue-simple-line-wrapper"), $o = { name: "SimpleLine", components: { LineWrapper: tl }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, position: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  return { root: Je(sm(Et({}, this.position, !0)), this.defaultClass, this.hover && this.hoverClass), wrapper: Je(lm(Et({}, this.position, !0)), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
$o.render = function(e, n, r, t, i, a) {
  var o = Jt("LineWrapper");
  return L(), $e(o, { class: a.classes.wrapper, position: r.position, disabled: r.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: Me(function() {
    return [ee("div", { class: a.classes.root }, null, 2)];
  }), _: 1 }, 8, ["class", "position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var wa = Bt("vue-bounding-box"), um = ["east", "west", null], cm = ["south", "north", null], ol = { name: "BoundingBox", props: { width: { type: Number }, height: { type: Number }, transitions: { type: Object }, handlers: { type: Object, default: function() {
  return { eastNorth: !0, north: !0, westNorth: !0, west: !0, westSouth: !0, south: !0, eastSouth: !0, east: !0 };
} }, handlersComponent: { type: [Object, String], default: function() {
  return xo;
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} }, lines: { type: Object, default: function() {
  return { west: !0, north: !0, east: !0, south: !0 };
} }, linesComponent: { type: [Object, String], default: function() {
  return $o;
} }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, resizable: { type: Boolean, default: !0 } }, data: function() {
  var e = [];
  return um.forEach(function(n) {
    cm.forEach(function(r) {
      if (n !== r) {
        var t = Gs(n, r), i = t.name, a = t.classname;
        e.push({ name: i, classname: a, verticalDirection: r, horizontalDirection: n });
      }
    });
  }), { points: e };
}, computed: { style: function() {
  var e = {};
  return this.width && this.height && (e.width = "".concat(this.width, "px"), e.height = "".concat(this.height, "px"), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction))), e;
}, classes: function() {
  var e = this.handlersClasses, n = this.handlersWrappersClasses, r = this.linesClasses, t = this.linesWrappersClasses;
  return { root: wa(), handlers: e, handlersWrappers: n, lines: r, linesWrappers: t };
}, lineNodes: function() {
  var e = this, n = [];
  return this.points.forEach(function(r) {
    r.horizontalDirection && r.verticalDirection || !e.lines[r.name] || n.push({ name: r.name, component: e.linesComponent, class: Je(e.classes.lines.default, e.classes.lines[r.name], !e.resizable && e.classes.lines.disabled), wrapperClass: Je(e.classes.linesWrappers.default, e.classes.linesWrappers[r.name], !e.resizable && e.classes.linesWrappers.disabled), hoverClass: e.classes.lines.hover, verticalDirection: r.verticalDirection, horizontalDirection: r.horizontalDirection, disabled: !e.resizable });
  }), n;
}, handlerNodes: function() {
  var e = this, n = [], r = this.width, t = this.height;
  return this.points.forEach(function(i) {
    if (e.handlers[i.name]) {
      var a = { name: i.name, component: e.handlersComponent, class: Je(e.classes.handlers.default, e.classes.handlers[i.name]), wrapperClass: Je(e.classes.handlersWrappers.default, e.classes.handlersWrappers[i.name]), hoverClass: e.classes.handlers.hover, verticalDirection: i.verticalDirection, horizontalDirection: i.horizontalDirection, disabled: !e.resizable };
      if (r && t) {
        var o = i.horizontalDirection, s = i.verticalDirection, l = o === "east" ? r : o === "west" ? 0 : r / 2, c = s === "south" ? t : s === "north" ? 0 : t / 2;
        a.wrapperClass = wa("handler"), a.wrapperStyle = { transform: "translate(".concat(l, "px, ").concat(c, "px)") }, e.transitions && e.transitions.enabled && (a.wrapperStyle.transition = "".concat(e.transitions.time, "ms ").concat(e.transitions.timingFunction));
      } else a.wrapperClass = wa("handler", Et({}, i.classname, !0));
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
  n === "west" ? s.left -= a : n === "east" && (s.right += a), r === "north" ? s.top -= o : r === "south" && (s.bottom += o), !r && n ? t = "width" : r && !n && (t = "height"), this.resizable && this.$emit("resize", new zv(s, { allowedDirections: { left: n === "west" || !n, right: n === "east" || !n, bottom: r === "south" || !r, top: r === "north" || !r }, preserveAspectRatio: e.nativeEvent && e.nativeEvent.shiftKey, respectDirection: t }));
} }, emits: ["resize", "resize-end"] };
ol.render = function(e, n, r, t, i, a) {
  return L(), $e("div", { ref: "box", class: a.classes.root, style: a.style }, [Ce(e.$slots, "default"), ee("div", null, [(L(!0), $e(ce, null, Le(a.lineNodes, function(o) {
    return L(), $e(On(o.component), { key: o.name, "default-class": o.class, "hover-class": o.hoverClass, "wrapper-class": o.wrapperClass, position: o.name, disabled: o.disabled, onDrag: function(s) {
      return a.onHandlerDrag(s, o.horizontalDirection, o.verticalDirection);
    }, onDragEnd: n[1] || (n[1] = function(s) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "position", "disabled", "onDrag"]);
  }), 128))]), (L(!0), $e(ce, null, Le(a.handlerNodes, function(o) {
    return L(), $e("div", { key: o.name, style: o.wrapperStyle, class: o.wrapperClass }, [(L(), $e(On(o.component), { "default-class": o.class, "hover-class": o.hoverClass, "wrapper-class": o.wrapperClass, "horizontal-position": o.horizontalDirection, "vertical-position": o.verticalDirection, disabled: o.disabled, onDrag: function(s) {
      return a.onHandlerDrag(s, o.horizontalDirection, o.verticalDirection);
    }, onDragEnd: n[2] || (n[2] = function(s) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "horizontal-position", "vertical-position", "disabled", "onDrag"]))], 6);
  }), 128))], 6);
};
var dm = Bt("vue-draggable-area"), il = { name: "DraggableArea", props: { movable: { type: Boolean, default: !0 }, activationDistance: { type: Number, default: 20 } }, computed: { classnames: function() {
  return { default: dm() };
} }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [], this.touchStarted = !1;
}, methods: { onTouchStart: function(e) {
  if (e.cancelable) {
    var n = this.movable && e.touches.length === 1;
    n && (this.touches = An(e.touches)), (this.touchStarted || n) && (e.preventDefault(), e.stopPropagation());
  }
}, onTouchEnd: function() {
  this.touchStarted = !1, this.processEnd();
}, onTouchMove: function(e) {
  this.touches.length >= 1 && (this.touchStarted ? (this.processMove(e, e.touches), e.preventDefault(), e.stopPropagation()) : Qs({ x: this.touches[0].clientX, y: this.touches[0].clientY }, { x: e.touches[0].clientX, y: e.touches[0].clientY }) > this.activationDistance && (this.initAnchor({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }), this.touchStarted = !0));
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
  var r = An(n);
  if (this.touches.length) {
    var t = this.$refs.container.getBoundingClientRect(), i = t.left, a = t.top;
    this.touches.length === 1 && r.length === 1 && this.$emit("move", new bo({ left: r[0].clientX - (i + this.anchor.x), top: r[0].clientY - (a + this.anchor.y) }));
  }
}, processEnd: function() {
  this.touches.length && this.$emit("move-end"), this.touches = [];
} }, emits: ["move", "move-end"] };
il.render = function(e, n, r, t, i, a) {
  return L(), $e("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }) }, [Ce(e.$slots, "default")], 544);
};
function xa(e) {
  var n, r;
  return { rotate: e.rotate || 0, flip: { horizontal: ((n = e == null ? void 0 : e.flip) === null || n === void 0 ? void 0 : n.horizontal) || !1, vertical: ((r = e == null ? void 0 : e.flip) === null || r === void 0 ? void 0 : r.vertical) || !1 } };
}
function fm(e) {
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
function sl(e) {
  var n = e.rotate, r = e.flip, t = e.scaleX, i = e.scaleY, a = "";
  return a += " rotate(" + n + "deg) ", a += " scaleX(" + t * (r.horizontal ? -1 : 1) + ") ", a += " scaleY(" + i * (r.vertical ? -1 : 1) + ") ";
}
function hm(e) {
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
function pi(e, n) {
  var r = n.getBoundingClientRect(), t = r.left, i = r.top, a = { left: 0, top: 0 }, o = 0;
  return e.forEach(function(s) {
    a.left += (s.clientX - t) / e.length, a.top += (s.clientY - i) / e.length;
  }), e.forEach(function(s) {
    o += Qs({ x: a.left, y: a.top }, { x: s.clientX - t, y: s.clientY - i });
  }), { centerMass: a, spread: o, count: e.length };
}
var ll = { props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 }, eventsFilter: { type: Function, required: !1 } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, created: function() {
  this.transforming = !1, this.debouncedProcessEnd = Ba(this.processEnd), this.touches = [];
}, methods: { processMove: function(e, n) {
  if (this.touches.length) {
    if (this.touches.length === 1 && n.length === 1) this.$emit("move", new Jn({ left: this.touches[0].clientX - n[0].clientX, top: this.touches[0].clientY - n[0].clientY }));
    else if (this.touches.length > 1 && this.touchResize) {
      var r = pi(n, this.$refs.container), t = this.oldGeometricProperties;
      t.count === r.count && t.count > 1 && this.$emit("resize", new Jn({ left: t.centerMass.left - r.centerMass.left, top: t.centerMass.top - r.centerMass.top }, { factor: t.spread / r.spread, center: r.centerMass })), this.oldGeometricProperties = r;
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
    this.touches = An(e.touches).filter(function(s) {
      return s.clientX > t && s.clientX < o && s.clientY > i && s.clientY < a;
    }), this.oldGeometricProperties = pi(this.touches, n);
  }
}, onTouchEnd: function(e) {
  e.touches.length === 0 && (this.touches = [], this.processEnd());
}, onTouchMove: function(e) {
  var n = this;
  if (this.touches.length) {
    var r = An(e.touches).filter(function(t) {
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
    var n = this.$refs.container.getBoundingClientRect(), r = n.left, t = n.top, i = 1 + this.wheelResize.ratio * (o = e.deltaY || e.detail || e.wheelDelta, (s = +o) == 0 || Js(s) ? s : s > 0 ? 1 : -1), a = { left: e.clientX - r, top: e.clientY - t };
    this.$emit("resize", new Jn({}, { factor: i, center: a })), this.touches.length || this.debouncedProcessEnd();
  }
  var o, s;
} }, emits: ["resize", "move", "transform-end"] };
ll.render = function(e, n, r, t, i, a) {
  return L(), $e("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onWheel: n[3] || (n[3] = function() {
    return a.onWheel && a.onWheel.apply(a, arguments);
  }) }, [Ce(e.$slots, "default")], 544);
};
var Va = { components: { TransformableImage: ll }, props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 } }, emits: ["resize", "move"] };
Va.render = function(e, n, r, t, i, a) {
  var o = Jt("transformable-image");
  return L(), $e(o, { "touch-move": r.touchMove, "touch-resize": r.touchResize, "mouse-move": r.mouseMove, "wheel-resize": r.wheelResize, onMove: n[1] || (n[1] = function(s) {
    return e.$emit("move", s);
  }), onResize: n[2] || (n[2] = function(s) {
    return e.$emit("resize", s);
  }) }, { default: Me(function() {
    return [Ce(e.$slots, "default")];
  }), _: 3 }, 8, ["touch-move", "touch-resize", "mouse-move", "wheel-resize"]);
};
var Or = Bt("vue-preview"), ul = { props: { coordinates: { type: Object }, transitions: { type: Object }, image: { type: Object, default: function() {
  return {};
} }, imageClass: { type: String }, width: { type: Number }, height: { type: Number }, fill: { type: Boolean } }, data: function() {
  return { calculatedImageSize: { width: 0, height: 0 }, calculatedSize: { width: 0, height: 0 } };
}, computed: { classes: function() {
  return { root: Or({ fill: this.fill }), wrapper: Or("wrapper"), imageWrapper: Or("image-wrapper"), image: Je(Or("image"), this.imageClass) };
}, style: function() {
  if (this.fill) return {};
  var e = {};
  return this.width && (e.width = "".concat(this.size.width, "px")), this.height && (e.height = "".concat(this.size.height, "px")), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, wrapperStyle: function() {
  var e = { width: "".concat(this.size.width, "px"), height: "".concat(this.size.height, "px"), left: "calc(50% - ".concat(this.size.width / 2, "px)"), top: "calc(50% - ".concat(this.size.height / 2, "px)") };
  return this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, imageStyle: function() {
  if (this.coordinates && this.image) {
    var e = this.coordinates.width / this.size.width, n = Ie(Ie({ rotate: 0, flip: { horizontal: !1, vertical: !1 } }, this.image.transforms), {}, { scaleX: 1 / e, scaleY: 1 / e }), r = this.imageSize.width, t = this.imageSize.height, i = rl({ width: r, height: t }, n.rotate), a = { width: "".concat(r, "px"), height: "".concat(t, "px"), left: "0px", top: "0px" }, o = { rotate: { left: (r - i.width) * n.scaleX / 2, top: (t - i.height) * n.scaleY / 2 }, scale: { left: (1 - n.scaleX) * r / 2, top: (1 - n.scaleY) * t / 2 } };
    return a.transform = `translate(
				`.concat(-this.coordinates.left / e - o.rotate.left - o.scale.left, "px,").concat(-this.coordinates.top / e - o.rotate.top - o.scale.top, "px) ") + sl(n), this.transitions && this.transitions.enabled && (a.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), a;
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
ul.render = function(e, n, r, t, i, a) {
  return L(), $e("div", { ref: "root", class: a.classes.root, style: a.style }, [ee("div", { ref: "wrapper", class: a.classes.wrapper, style: a.wrapperStyle }, [Fe(ee("img", { ref: "image", src: r.image && r.image.src, class: a.classes.image, style: a.imageStyle }, null, 14, ["src"]), [[gt, r.image && r.image.src]])], 6)], 6);
};
var cl = { components: { Preview: ul }, inheritAttrs: !1 };
cl.render = function(e, n, r, t, i, a) {
  var o = Jt("preview");
  return L(), $e(o, so(e.$attrs, { fill: !0 }), null, 16);
};
var $a = Bt("vue-rectangle-stencil"), dl = { name: "RectangleStencil", components: { StencilPreview: cl, BoundingBox: ol, DraggableArea: il }, props: { image: { type: Object }, coordinates: { type: Object }, stencilCoordinates: { type: Object }, handlers: { type: Object }, handlersComponent: { type: [Object, String], default: function() {
  return xo;
} }, lines: { type: Object }, linesComponent: { type: [Object, String], default: function() {
  return $o;
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
  return { stencil: Je($a({ movable: this.movable, moving: this.moving, resizing: this.resizing }), this.moving && this.movingClass, this.resizing && this.resizingClass), preview: Je($a("preview"), this.previewClass), boundingBox: Je($a("bounding-box"), this.boundingBoxClass) };
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
dl.render = function(e, n, r, t, i, a) {
  var o = Jt("stencil-preview"), s = Jt("draggable-area"), l = Jt("bounding-box");
  return L(), $e("div", { class: a.classes.stencil, style: a.style }, [ee(l, { width: r.stencilCoordinates.width, height: r.stencilCoordinates.height, transitions: r.transitions, class: a.classes.boundingBox, handlers: r.handlers, "handlers-component": r.handlersComponent, "handlers-classes": r.handlersClasses, "handlers-wrappers-classes": r.handlersWrappersClasses, lines: r.lines, "lines-component": r.linesComponent, "lines-classes": r.linesClasses, "lines-wrappers-classes": r.linesWrappersClasses, resizable: r.resizable, onResize: a.onResize, onResizeEnd: a.onResizeEnd }, { default: Me(function() {
    return [ee(s, { movable: r.movable, onMove: a.onMove, onMoveEnd: a.onMoveEnd }, { default: Me(function() {
      return [ee(o, { image: r.image, coordinates: r.coordinates, width: r.stencilCoordinates.width, height: r.stencilCoordinates.height, class: a.classes.preview, transitions: r.transitions }, null, 8, ["image", "coordinates", "width", "height", "class", "transitions"])];
    }), _: 1 }, 8, ["movable", "onMove", "onMoveEnd"])];
  }), _: 1 }, 8, ["width", "height", "transitions", "class", "handlers", "handlers-component", "handlers-classes", "handlers-wrappers-classes", "lines", "lines-component", "lines-classes", "lines-wrappers-classes", "resizable", "onResize", "onResizeEnd"])], 6);
};
var pm = ["transitions"], Kt = Bt("vue-advanced-cropper"), fl = { name: "Cropper", components: { BackgroundWrapper: Va }, props: { src: { type: String, default: null }, stencilComponent: { type: [Object, String], default: function() {
  return dl;
} }, backgroundWrapperComponent: { type: [Object, String], default: function() {
  return Va;
} }, stencilProps: { type: Object, default: function() {
  return {};
} }, autoZoom: { type: Boolean, default: !1 }, imageClass: { type: String }, boundariesClass: { type: String }, backgroundClass: { type: String }, foregroundClass: { type: String }, minWidth: { type: [Number, String] }, minHeight: { type: [Number, String] }, maxWidth: { type: [Number, String] }, maxHeight: { type: [Number, String] }, debounce: { type: [Boolean, Number], default: 500 }, transitions: { type: Boolean, default: !0 }, checkOrientation: { type: Boolean, default: !0 }, canvas: { type: [Object, Boolean], default: !0 }, crossOrigin: { type: [Boolean, String], default: void 0 }, transitionTime: { type: Number, default: 300 }, imageRestriction: { type: String, default: "fit-area", validator: function(e) {
  return _v.indexOf(e) !== -1;
} }, roundResult: { type: Boolean, default: !0 }, defaultSize: { type: [Function, Object] }, defaultPosition: { type: [Function, Object] }, defaultVisibleArea: { type: [Function, Object] }, defaultTransforms: { type: [Function, Object] }, defaultBoundaries: { type: [Function, String], validator: function(e) {
  return !(typeof e == "string" && e !== "fill" && e !== "fit");
} }, priority: { type: String, default: "coordinates" }, stencilSize: { type: [Object, Function] }, resizeImage: { type: [Boolean, Object], default: !0 }, moveImage: { type: [Boolean, Object], default: !0 }, autoZoomAlgorithm: { type: Function }, resizeAlgorithm: { type: Function, default: function(e) {
  var n = e.event, r = e.coordinates, t = e.aspectRatio, i = e.positionRestrictions, a = e.sizeRestrictions, o = me(me({}, r), { right: r.left + r.width, bottom: r.top + r.height }), s = n.params || {}, l = me({}, n.directions), c = s.allowedDirections || { left: !0, right: !0, bottom: !0, top: !0 };
  a.widthFrozen && (l.left = 0, l.right = 0), a.heightFrozen && (l.top = 0, l.bottom = 0), Ht.forEach(function(E) {
    c[E] || (l[E] = 0);
  });
  var d = Nt(o, l = hi({ coordinates: o, directions: l, sizeRestrictions: a, positionRestrictions: i })).width, f = Nt(o, l).height, u = s.preserveRatio ? Re(o) : ba(d / f, t);
  if (u) {
    var h = s.respectDirection;
    if (h || (h = o.width >= o.height || u === 1 ? "width" : "height"), h === "width") {
      var p = d / u - o.height;
      if (c.top && c.bottom) {
        var m = l.top, v = l.bottom;
        l.bottom = Er(p, v, m), l.top = Er(p, m, v);
      } else c.bottom ? l.bottom = p : c.top ? l.top = p : c.right ? l.right = 0 : c.left && (l.left = 0);
    } else if (h === "height") {
      var g = o.width - f * u;
      if (c.left && c.right) {
        var y = l.left, k = l.right;
        l.left = -Er(g, y, k), l.right = -Er(g, k, y);
      } else c.left ? l.left = -g : c.right ? l.right = -g : c.top ? l.top = 0 : c.bottom && (l.bottom = 0);
    }
    l = hi({ directions: l, coordinates: o, sizeRestrictions: a, positionRestrictions: i, preserveRatio: !0, compensate: s.compensate });
  }
  return d = Nt(o, l).width, f = Nt(o, l).height, (u = s.preserveRatio ? Re(o) : ba(d / f, t)) && Math.abs(u - d / f) > 1e-3 && Ht.forEach(function(E) {
    c[E] || (l[E] = 0);
  }), Ha({ event: new bo({ left: -l.left, top: -l.top }), coordinates: { width: r.width + l.right + l.left, height: r.height + l.top + l.bottom, left: r.left, top: r.top }, positionRestrictions: i });
} }, moveAlgorithm: { type: Function, default: Ha }, initStretcher: { type: Function, default: function(e) {
  var n = e.stretcher, r = e.imageSize, t = Re(r);
  n.style.width = r.width + "px", n.style.height = n.clientWidth / t + "px", n.style.width = n.clientWidth + "px";
} }, fitCoordinates: { type: Function, default: function(e) {
  var n = e.visibleArea, r = e.coordinates, t = e.aspectRatio, i = e.sizeRestrictions, a = e.positionRestrictions, o = me(me({}, r), Gt({ width: r.width, height: r.height, aspectRatio: t, sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minHeight: Math.min(n.height, i.minHeight), minWidth: Math.min(n.width, i.minWidth) } }));
  return o = ft(o = bt(o, Bn(dt(r), dt(o))), Jr(Wt(n), a));
} }, fitVisibleArea: { type: Function, default: function(e) {
  var n = e.visibleArea, r = e.boundaries, t = e.getAreaRestrictions, i = e.coordinates, a = me({}, n);
  a.height = a.width / Re(r), a.top += (n.height - a.height) / 2, (i.height - a.height > 0 || i.width - a.width > 0) && (a = Ct(a, Math.max(i.height / a.height, i.width / a.width)));
  var o = Gr(Nn(i, Wt(a = Ct(a, Xr(a, t({ visibleArea: a, type: "resize" }))))));
  return a.width < i.width && (o.left = 0), a.height < i.height && (o.top = 0), a = ft(a = bt(a, o), t({ visibleArea: a, type: "move" }));
} }, areaRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.visibleArea, r = e.boundaries, t = e.imageSize, i = e.imageRestriction, a = e.type, o = {};
  return i === "fill-area" ? o = { left: 0, top: 0, right: t.width, bottom: t.height } : i === "fit-area" && (Re(r) > Re(t) ? (o = { top: 0, bottom: t.height }, n && a === "move" && (n.width > t.width ? (o.left = -(n.width - t.width) / 2, o.right = t.width - o.left) : (o.left = 0, o.right = t.width))) : (o = { left: 0, right: t.width }, n && a === "move" && (n.height > t.height ? (o.top = -(n.height - t.height) / 2, o.bottom = t.height - o.top) : (o.top = 0, o.bottom = t.height)))), o;
} }, sizeRestrictionsAlgorithm: { type: Function, default: function(e) {
  return { minWidth: e.minWidth, minHeight: e.minHeight, maxWidth: e.maxWidth, maxHeight: e.maxHeight };
} }, positionRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.imageSize, r = {};
  return e.imageRestriction !== "none" && (r = { left: 0, top: 0, right: n.width, bottom: n.height }), r;
} } }, data: function() {
  return { transitionsActive: !1, imageLoaded: !1, imageAttributes: { width: null, height: null, crossOrigin: null, src: null }, defaultImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, appliedImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, boundaries: { width: 0, height: 0 }, visibleArea: null, coordinates: Ie({}, ui) };
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
  var e = za(this.resizeImage, { touch: !0, wheel: { ratio: 0.1 }, adjustStencil: !0 }, { touch: !1, wheel: !1, adjustStencil: !1 });
  return { moveImage: za(this.moveImage, { touch: !0, mouse: !0 }, { touch: !1, mouse: !1 }), resizeImage: e };
}, coefficient: function() {
  return this.visibleArea ? this.visibleArea.width / this.boundaries.width : 0;
}, areaRestrictions: function() {
  return this.imageLoaded ? this.areaRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction, boundaries: this.boundaries }) : {};
}, transitionsOptions: function() {
  return { enabled: this.transitionsActive, timingFunction: "ease-in-out", time: 350 };
}, sizeRestrictions: function() {
  if (this.boundaries.width && this.boundaries.height && this.imageSize.width && this.imageSize.height) {
    var e = this.sizeRestrictionsAlgorithm({ imageSize: this.imageSize, minWidth: et(this.minWidth) ? 0 : Tr(this.minWidth), minHeight: et(this.minHeight) ? 0 : Tr(this.minHeight), maxWidth: et(this.maxWidth) ? 1 / 0 : Tr(this.maxWidth), maxHeight: et(this.maxHeight) ? 1 / 0 : Tr(this.maxHeight) });
    if (e = function(t) {
      var i = t.areaRestrictions, a = t.sizeRestrictions, o = t.boundaries, s = t.positionRestrictions, l = me(me({}, a), { minWidth: a.minWidth !== void 0 ? a.minWidth : 0, minHeight: a.minHeight !== void 0 ? a.minHeight : 0, maxWidth: a.maxWidth !== void 0 ? a.maxWidth : 1 / 0, maxHeight: a.maxHeight !== void 0 ? a.maxHeight : 1 / 0 });
      s.left !== void 0 && s.right !== void 0 && (l.maxWidth = Math.min(l.maxWidth, s.right - s.left)), s.bottom !== void 0 && s.top !== void 0 && (l.maxHeight = Math.min(l.maxHeight, s.bottom - s.top));
      var c = Na(i), d = nl(o, c);
      return c.width < 1 / 0 && (!l.maxWidth || l.maxWidth > d.width) && (l.maxWidth = Math.min(l.maxWidth, d.width)), c.height < 1 / 0 && (!l.maxHeight || l.maxHeight > d.height) && (l.maxHeight = Math.min(l.maxHeight, d.height)), l.minWidth > l.maxWidth && (l.minWidth = l.maxWidth, l.widthFrozen = !0), l.minHeight > l.maxHeight && (l.minHeight = l.maxHeight, l.heightFrozen = !0), l;
    }({ sizeRestrictions: e, areaRestrictions: this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }), imageSize: this.imageSize, boundaries: this.boundaries, positionRestrictions: this.positionRestrictions, imageRestriction: this.imageRestriction, visibleArea: this.visibleArea, stencilSize: this.getStencilSize() }), this.visibleArea && this.stencilSize) {
      var n = this.getStencilSize(), r = Na(this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }));
      e.maxWidth = Math.min(e.maxWidth, r.width * n.width / this.boundaries.width), e.maxHeight = Math.min(e.maxHeight, r.height * n.height / this.boundaries.height), e.maxWidth < e.minWidth && (e.minWidth = e.maxWidth), e.maxHeight < e.minHeight && (e.minHeight = e.maxHeight);
    }
    return e;
  }
  return { minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 };
}, positionRestrictions: function() {
  return this.positionRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction });
}, classes: function() {
  return { cropper: Kt(), image: Je(Kt("image"), this.imageClass), stencil: Kt("stencil"), boundaries: Je(Kt("boundaries"), this.boundariesClass), stretcher: Je(Kt("stretcher")), background: Je(Kt("background"), this.backgroundClass), foreground: Je(Kt("foreground"), this.foregroundClass), imageWrapper: Je(Kt("image-wrapper")), cropperWrapper: Je(Kt("cropper-wrapper")) };
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
  var e = this.imageAttributes.width > this.imageAttributes.height ? { width: Math.min(1024, this.imageAttributes.width), height: Math.min(1024, this.imageAttributes.width) / (this.imageAttributes.width / this.imageAttributes.height) } : { height: Math.min(1024, this.imageAttributes.height), width: Math.min(1024, this.imageAttributes.height) * (this.imageAttributes.width / this.imageAttributes.height) }, n = { left: (e.width - this.imageSize.width) / (2 * this.coefficient), top: (e.height - this.imageSize.height) / (2 * this.coefficient) }, r = { left: (1 - 1 / this.coefficient) * e.width / 2, top: (1 - 1 / this.coefficient) * e.height / 2 }, t = Ie(Ie({}, this.imageTransforms), {}, { scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / e.width), scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / e.height) }), i = { width: "".concat(e.width, "px"), height: "".concat(e.height, "px"), left: "0px", top: "0px", transform: "translate(".concat(-n.left - r.left - this.imageTransforms.translateX, "px, ").concat(-n.top - r.top - this.imageTransforms.translateY, "px)") + sl(t) };
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
  this.debouncedUpdate = Ba(this.update, this.debounce), this.debouncedDisableTransitions = Ba(this.disableTransitions, this.transitionsOptions.time), this.awaiting = !1;
}, mounted: function() {
  this.$refs.image.addEventListener("load", this.onSuccessLoadImage), this.$refs.image.addEventListener("error", this.onFailLoadImage), this.onChangeImage(), window.addEventListener("resize", this.refresh), window.addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  window.removeEventListener("resize", this.refresh), window.removeEventListener("orientationchange", this.refresh), this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.debouncedUpdate.clear(), this.debouncedDisableTransitions.clear();
}, methods: { getResult: function() {
  var e = this.initialized ? this.prepareResult(Ie({}, this.coordinates)) : this.defaultCoordinates(), n = { rotate: this.imageTransforms.rotate % 360, flip: Ie({}, this.imageTransforms.flip) };
  if (this.src && this.imageLoaded) {
    var r = this;
    return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? Ie({}, this.visibleArea) : null, imageTransforms: n, get canvas() {
      return r.canvas ? r.getCanvas() : void 0;
    } };
  }
  return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? Ie({}, this.visibleArea) : null, canvas: void 0, imageTransforms: n };
}, zoom: function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = r.transitions, i = t === void 0 || t;
  this.onManipulateImage(new Jn({}, { factor: 1 / e, center: n }), { normalize: !1, transitions: i });
}, move: function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = r.transitions, i = t === void 0 || t;
  this.onManipulateImage(new Jn({ left: e || 0, top: n || 0 }), { normalize: !1, transitions: i });
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
    return a.width > t.maxWidth ? a.width = Math.floor(r.width) : a.width < t.minWidth && (a.width = Math.ceil(r.width)), a.height > t.maxHeight ? a.height = Math.floor(r.height) : a.height < t.minHeight && (a.height = Math.ceil(r.height)), ft(a, i);
  }(Ie(Ie({}, this.getPublicProperties()), {}, { positionRestrictions: Pr(this.positionRestrictions, this.visibleArea), coordinates: e })) : e;
}, processAutoZoom: function(e, n, r, t) {
  var i = this.autoZoomAlgorithm;
  i || (i = this.stencilSize ? Kv : this.autoZoom ? Gv : Xv);
  var a = i({ event: { type: e, params: t }, visibleArea: n, coordinates: r, boundaries: this.boundaries, aspectRatio: this.getAspectRatio(), positionRestrictions: this.positionRestrictions, getAreaRestrictions: this.getAreaRestrictions, sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize() });
  return Ie(Ie({}, a), {}, { changed: !ci(a.visibleArea, n) || !ci(a.coordinates, r) });
}, runAutoZoom: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transitions, t = r !== void 0 && r, i = jv(n, pm), a = this.processAutoZoom(e, this.visibleArea, this.coordinates, i), o = a.visibleArea, s = a.coordinates, l = a.changed;
  t && l && this.enableTransitions(), this.visibleArea = o, this.coordinates = s, t && l && this.debouncedDisableTransitions();
}, normalizeEvent: function(e) {
  return function(n) {
    var r = n.event, t = n.visibleArea, i = n.coefficient;
    if (r.type === "manipulateImage") return me(me({}, r), { move: { left: r.move && r.move.left ? i * r.move.left : 0, top: r.move && r.move.top ? i * r.move.top : 0 }, scale: { factor: r.scale && r.scale.factor ? r.scale.factor : 1, center: r.scale && r.scale.center ? { left: r.scale.center.left * i + t.left, top: r.scale.center.top * i + t.top } : null } });
    if (r.type === "resize") {
      var a = me(me({}, r), { directions: me({}, r.directions) });
      return Ht.forEach(function(s) {
        a.directions[s] *= i;
      }), a;
    }
    if (r.type === "move") {
      var o = me(me({}, r), { directions: me({}, r.directions) });
      return Uv.forEach(function(s) {
        o.directions[s] *= i;
      }), o;
    }
    return r;
  }(Ie(Ie({}, this.getPublicProperties()), {}, { event: e }));
}, getCanvas: function() {
  if (this.$refs.canvas) {
    var e = this.$refs.canvas, n = this.$refs.image, r = this.imageTransforms.rotate !== 0 || this.imageTransforms.flip.horizontal || this.imageTransforms.flip.vertical ? function(s, l, c) {
      var d = c.rotate, f = c.flip, u = { width: l.naturalWidth, height: l.naturalHeight }, h = rl(u, d), p = s.getContext("2d");
      s.height = h.height, s.width = h.width, p.save();
      var m = un(dt(me({ left: 0, top: 0 }, u)), d);
      return p.translate(-(m.left - h.width / 2), -(m.top - h.height / 2)), p.rotate(d * Math.PI / 180), p.translate(f.horizontal ? u.width : 0, f.vertical ? u.height : 0), p.scale(f.horizontal ? -1 : 1, f.vertical ? -1 : 1), p.drawImage(l, 0, 0, u.width, u.height), p.restore(), s;
    }(this.$refs.sourceCanvas, n, this.imageTransforms) : n, t = Ie({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: this.maxCanvasSize, imageSmoothingEnabled: !0, imageSmoothingQuality: "high", fillColor: "transparent" }, this.canvas), i = function(s) {
      return s.find(function(l) {
        return c = l, !Number.isNaN(parseFloat(c)) && isFinite(c);
        var c;
      });
    }, a = Gt({ sizeRestrictions: { minWidth: i([t.width, t.minWidth]) || 0, minHeight: i([t.height, t.minHeight]) || 0, maxWidth: i([t.width, t.maxWidth]) || 1 / 0, maxHeight: i([t.height, t.maxHeight]) || 1 / 0 }, width: this.coordinates.width, height: this.coordinates.height, aspectRatio: { minimum: this.coordinates.width / this.coordinates.height, maximum: this.coordinates.width / this.coordinates.height } });
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
  var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r = this.visibleArea && n ? qv(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions, t = this.visibleArea && n ? Pr(this.positionRestrictions, this.visibleArea) : this.positionRestrictions;
  return Zv({ transform: e, coordinates: this.coordinates, imageSize: this.imageSize, sizeRestrictions: r, positionRestrictions: t, aspectRatio: this.getAspectRatio(), visibleArea: this.visibleArea });
}, resetCoordinates: function() {
  var e = this;
  if (this.$refs.image) {
    this.$refs.cropper, this.$refs.image;
    var n = this.defaultSize;
    n || (n = this.stencilSize ? em : Qv);
    var r = this.sizeRestrictions;
    r.minWidth, r.minHeight, r.maxWidth, r.maxHeight;
    var t = Yn(n) ? n({ boundaries: this.boundaries, imageSize: this.imageSize, aspectRatio: this.getAspectRatio(), sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize(), visibleArea: this.visibleArea }) : n, i = this.defaultPosition || Jv, a = [t, function(o) {
      var s = o.coordinates;
      return Ie({}, Yn(i) ? i({ coordinates: s, imageSize: e.imageSize, visibleArea: e.visibleArea }) : e.defaultPosition);
    }];
    this.delayedTransforms && a.push.apply(a, An(Array.isArray(this.delayedTransforms) ? this.delayedTransforms : [this.delayedTransforms])), this.coordinates = this.applyTransform(a, !0), this.delayedTransforms = null;
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
    if (Yn(e.defaultBoundaries) ? e.boundaries = e.defaultBoundaries(t) : e.defaultBoundaries === "fit" ? e.boundaries = function(i) {
      var a = i.cropper, o = i.imageSize, s = a.clientHeight, l = a.clientWidth, c = s, d = o.width * s / o.height;
      return d > l && (d = l, c = o.height * l / o.width), { width: d, height: c };
    }(t) : e.boundaries = function(i) {
      var a = i.cropper;
      return { width: a.clientWidth, height: a.clientHeight };
    }(t), !e.boundaries.width || !e.boundaries.height) throw new Error("It's impossible to fit the cropper in the current container");
  });
}, resetVisibleArea: function() {
  var e = this;
  return this.appliedImageTransforms = Ie(Ie({}, this.defaultImageTransforms), {}, { flip: Ie({}, this.defaultImageTransforms.flip) }), this.updateBoundaries().then(function() {
    e.priority !== "visible-area" && (e.visibleArea = null, e.resetCoordinates());
    var n, r, t, i, a, o, s = e.defaultVisibleArea || tm;
    e.visibleArea = Yn(s) ? s({ imageSize: e.imageSize, boundaries: e.boundaries, coordinates: e.priority !== "visible-area" ? e.coordinates : null, getAreaRestrictions: e.getAreaRestrictions, stencilSize: e.getStencilSize() }) : e.defaultVisibleArea, e.visibleArea = (n = { visibleArea: e.visibleArea, boundaries: e.boundaries, getAreaRestrictions: e.getAreaRestrictions }, r = n.visibleArea, t = n.boundaries, i = n.getAreaRestrictions, a = me({}, r), o = Re(t), a.width / a.height !== o && (a.height = a.width / o), ft(a, i({ visibleArea: a, type: "move" }))), e.priority === "visible-area" ? e.resetCoordinates() : e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("resetVisibleArea");
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
      if (si(i)) return !1;
      var a = window.location, o = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(i) || [], s = { protocol: o[1] || "", host: o[2] || "", port: o[3] || "" }, l = function(c) {
        return c.port || ((c.protocol || a.protocol) === "http" ? 80 : 433);
      };
      return !(!s.protocol && !s.host && !s.port || s.protocol && s.protocol == a.protocol && s.host && s.host == a.host && s.host && l(s) == l(a));
    }(this.src)) {
      var r = et(this.crossOrigin) ? this.canvas : this.crossOrigin;
      r === !0 && (r = "anonymous"), this.imageAttributes.crossOrigin = r || null;
    }
    if (this.checkOrientation) {
      var t = (e = this.src, new Promise(function(i) {
        fm(e).then(function(a) {
          var o = hm(a);
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
  this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.imageAttributes.revoke = !1, t && i && i > 1 ? Xs(r) || !si(r) ? (this.imageAttributes.src = URL.createObjectURL(new Blob([t])), this.imageAttributes.revoke = !0) : this.imageAttributes.src = function(a) {
    for (var o = [], s = new Uint8Array(a); s.length > 0; ) {
      var l = s.subarray(0, 8192);
      o.push(String.fromCharCode.apply(null, Array.from ? Array.from(l) : l.slice())), s = s.subarray(8192);
    }
    return "data:image/jpeg;base64," + btoa(o.join(""));
  }(t) : this.imageAttributes.src = r, Yn(this.defaultTransforms) ? this.appliedImageTransforms = xa(this.defaultTransforms()) : zr(this.defaultTransforms) ? this.appliedImageTransforms = xa(this.defaultTransforms) : this.appliedImageTransforms = function(a) {
    var o = xa({});
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
  }(i), this.defaultImageTransforms = Ie(Ie({}, this.appliedImageTransforms), {}, { flip: Ie({}, this.appliedImageTransforms.flip) }), this.$nextTick(function() {
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
    n.coordinates = n.moveAlgorithm(Ie(Ie({}, n.getPublicProperties()), {}, { positionRestrictions: Pr(n.positionRestrictions, n.visibleArea), coordinates: n.coordinates, event: n.normalizeEvent(e) })), n.onChange();
  });
}, onResize: function(e) {
  var n = this;
  this.transitionsOptions.enabled || this.stencilSize && !this.autoZoom || this.awaitRender(function() {
    var r = n.sizeRestrictions, t = Math.min(n.coordinates.width, n.coordinates.height, 20 * n.coefficient);
    n.coordinates = n.resizeAlgorithm(Ie(Ie({}, n.getPublicProperties()), {}, { positionRestrictions: Pr(n.positionRestrictions, n.visibleArea), sizeRestrictions: { maxWidth: Math.min(r.maxWidth, n.visibleArea.width), maxHeight: Math.min(r.maxHeight, n.visibleArea.height), minWidth: Math.max(r.minWidth, t), minHeight: Math.max(r.minHeight, t) }, event: n.normalizeEvent(e) })), n.onChange(), n.ticking = !1;
  });
}, onManipulateImage: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!this.transitionsOptions.enabled) {
    var r = n.transitions, t = r !== void 0 && r, i = n.normalize, a = i === void 0 || i;
    t && this.enableTransitions();
    var o = nm(Ie(Ie({}, this.getPublicProperties()), {}, { event: a ? this.normalizeEvent(e) : e, getAreaRestrictions: this.getAreaRestrictions, imageRestriction: this.imageRestriction, adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil })), s = o.visibleArea, l = o.coordinates;
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
  if (et(n) && (n = et(i) ? a : i), et(r) && (r = et(i) ? o : i), !e && (et(n) || et(r))) {
    var l = this.getStencilSize(), c = l ? Re(l) : null;
    et(n) && (n = li(c) ? c : void 0), et(r) && (r = li(c) ? c : void 0);
  }
  return { minimum: n, maximum: r };
}, getStencilSize: function() {
  if (this.stencilSize) return e = { currentStencilSize: { width: this.stencilCoordinates.width, height: this.stencilCoordinates.height }, stencilSize: this.stencilSize, boundaries: this.boundaries, coefficient: this.coefficient, coordinates: this.coordinates, aspectRatio: this.getAspectRatio(!0) }, n = e.boundaries, r = e.stencilSize, t = e.aspectRatio, ba(Re(i = Yn(r) ? r({ boundaries: n, aspectRatio: t }) : r), t) && (i = Gt({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: i.width, height: i.height, aspectRatio: { minimum: t.minimum, maximum: t.maximum } })), (i.width > n.width || i.height > n.height) && (i = Gt({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: i.width, height: i.height, aspectRatio: { minimum: Re(i), maximum: Re(i) } })), i;
  var e, n, r, t, i;
}, getPublicProperties: function() {
  return { coefficient: this.coefficient, visibleArea: this.visibleArea, coordinates: this.coordinates, boundaries: this.boundaries, sizeRestrictions: this.sizeRestrictions, positionRestrictions: this.positionRestrictions, aspectRatio: this.getAspectRatio(), imageRestriction: this.imageRestriction };
}, defaultCoordinates: function() {
  return Ie({}, ui);
}, flip: function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = r.transitions, i = t === void 0 || t;
  if (!this.transitionsActive) {
    i && this.enableTransitions();
    var a = Ie({}, this.imageTransforms.flip), o = am({ flip: { horizontal: e ? !a.horizontal : a.horizontal, vertical: n ? !a.vertical : a.vertical }, previousFlip: a, rotate: this.imageTransforms.rotate, visibleArea: this.visibleArea, coordinates: this.coordinates, imageSize: this.imageSize, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), s = o.visibleArea, l = o.coordinates;
    e && (this.appliedImageTransforms.flip.horizontal = !this.appliedImageTransforms.flip.horizontal), n && (this.appliedImageTransforms.flip.vertical = !this.appliedImageTransforms.flip.vertical), this.visibleArea = s, this.coordinates = l, this.onChange(), i && this.debouncedDisableTransitions();
  }
}, rotate: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transitions, t = r === void 0 || r;
  if (!this.transitionsActive) {
    t && this.enableTransitions();
    var i = Ie({}, this.imageSize);
    this.appliedImageTransforms.rotate += e;
    var a = rm({ visibleArea: this.visibleArea, coordinates: this.coordinates, previousImageSize: i, imageSize: this.imageSize, angle: e, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), o = a.visibleArea, s = a.coordinates, l = this.processAutoZoom("rotateImage", o, s);
    o = l.visibleArea, s = l.coordinates, this.visibleArea = o, this.coordinates = s, this.onChange(), t && this.debouncedDisableTransitions();
  }
} }, emits: ["change", "error", "ready"] }, vm = { key: 0, ref: "canvas", style: { display: "none" } }, mm = { key: 1, ref: "sourceCanvas", style: { display: "none" } };
fl.render = function(e, n, r, t, i, a) {
  return L(), $e("div", { ref: "cropper", class: a.classes.cropper }, [ee("div", { ref: "stretcher", class: a.classes.stretcher }, null, 2), ee("div", { class: a.classes.boundaries, style: a.boundariesStyle }, [(L(), $e(On(r.backgroundWrapperComponent), { class: a.classes.cropperWrapper, "wheel-resize": a.settings.resizeImage.wheel, "touch-resize": a.settings.resizeImage.touch, "touch-move": a.settings.moveImage.touch, "mouse-move": a.settings.moveImage.mouse, onMove: a.onManipulateImage, onResize: a.onManipulateImage }, { default: Me(function() {
    return [ee("div", { class: a.classes.background, style: a.boundariesStyle }, null, 6), ee("div", { class: a.classes.imageWrapper }, [ee("img", { ref: "image", crossorigin: i.imageAttributes.crossOrigin, src: i.imageAttributes.src, class: a.classes.image, style: a.imageStyle, onMousedown: n[1] || (n[1] = Tt(function() {
    }, ["prevent"])) }, null, 46, ["crossorigin", "src"])], 2), ee("div", { class: a.classes.foreground, style: a.boundariesStyle }, null, 6), Fe((L(), $e(On(r.stencilComponent), so({ ref: "stencil", image: a.image, coordinates: i.coordinates, "stencil-coordinates": a.stencilCoordinates, transitions: a.transitionsOptions }, r.stencilProps, { onResize: a.onResize, onResizeEnd: a.onResizeEnd, onMove: a.onMove, onMoveEnd: a.onMoveEnd }), null, 16, ["image", "coordinates", "stencil-coordinates", "transitions", "onResize", "onResizeEnd", "onMove", "onMoveEnd"])), [[gt, i.imageLoaded]]), r.canvas ? (L(), $e("canvas", vm, null, 512)) : Q("", !0), r.canvas ? (L(), $e("canvas", mm, null, 512)) : Q("", !0)];
  }), _: 1 }, 8, ["class", "wheel-resize", "touch-resize", "touch-move", "mouse-move", "onMove", "onResize"]))], 6)], 2);
};
const gm = { class: "tc-flex tc-flex-col tc-space-y-4" }, ym = { class: "tc-bg-gray-200 tc-h-80 tc-flex tc-items-center tc-justify-center tc-w-full tc-max-w-md" }, bm = { class: "tc-bg-gray-100 tc-flex tc-items-center tc-justify-center tc-p-4" }, wm = { class: "tc-flex tc-items-center tc-justify-between tc-p-4" }, xm = {
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
    return be(() => {
      t.value.src && URL.revokeObjectURL(t.value.src);
    }), (d, f) => (L(), j("div", gm, [
      C("div", ym, [
        t.value.src ? (L(), $e(re(fl), {
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
        }, null, 8, ["canvas", "src"])) : Q("", !0)
      ]),
      C("div", bm, [
        C("input", {
          ref_key: "file",
          ref: a,
          accept: "image/*",
          class: "tc-py-3 tc-px-8 tc-text-gray-800",
          type: "file",
          onChange: c
        }, null, 544)
      ]),
      C("div", wm, [
        ee(jn, {
          disabled: !t.value.src,
          type: "gray",
          size: "lg",
          "data-test": "reset-button",
          onClick: l
        }, {
          default: Me(() => [...f[0] || (f[0] = [
            He(" Reset ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        ee(jn, {
          disabled: !t.value.src,
          type: "secondary",
          size: "lg",
          "data-test": "save-button",
          onClick: s
        }, {
          default: Me(() => [...f[1] || (f[1] = [
            He(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}, R1 = /* @__PURE__ */ yo(xm, [["__scopeId", "data-v-7fa3c80a"]]), hl = Symbol("ConfirmDialog");
function F1() {
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
  de(hl, {
    isVisible: e,
    message: r,
    title: n,
    showDialog: a,
    confirm: o,
    cancel: s,
    password: i
  });
}
function $m() {
  const e = fe(hl);
  if (!e)
    throw new Error("useConfirmDialog must be used within a provideConfirmDialog");
  return e;
}
const Sm = {
  key: 0,
  class: "tc-fixed tc-inset-0 tc-flex tc-items-center tc-justify-center tc-bg-black tc-bg-opacity-50 tc-z-[9999]"
}, km = { class: "tc-bg-white tc-p-8 tc-rounded-lg tc-shadow-md lg:tc-w-1/3 md:tc-w-1/2 sm:tc-w-auto" }, Mm = { class: "tc-text-lg tc-font-semibold tc-mb-4" }, Dm = { class: "tc-text-gray-700 tc-mb-6" }, Tm = { key: 0 }, Pm = { class: "tc-flex tc-justify-end" }, Y1 = {
  __name: "ConfirmDialog",
  setup(e) {
    const n = F(null), { isVisible: r, title: t, message: i, confirm: a, cancel: o, password: s = null } = $m(), l = () => {
      n.value = null, o();
    }, c = () => {
      n.value = null, a();
    };
    return (d, f) => (L(), $e(rr, { to: "body" }, [
      re(r) ? (L(), j("div", Sm, [
        C("div", km, [
          C("p", Mm, ne(re(t) || "-"), 1),
          C("p", Dm, ne(re(i) || "-"), 1),
          re(s) ? (L(), j("p", Tm, [
            ee(bc, {
              modelValue: n.value,
              "onUpdate:modelValue": f[0] || (f[0] = (u) => n.value = u),
              "data-test": "confirm-password"
            }, null, 8, ["modelValue"])
          ])) : Q("", !0),
          C("div", Pm, [
            ee(jn, {
              type: "gray",
              class: "tc-px-4 tc-py-2 tc-mr-2",
              "data-test": "cancel-delete",
              onClick: l
            }, {
              default: Me(() => [...f[1] || (f[1] = [
                He(" Cancel ", -1)
              ])]),
              _: 1
            }),
            ee(jn, {
              type: "danger",
              "data-test": "confirm-delete",
              disabled: re(s) !== n.value,
              onClick: c
            }, {
              default: Me(() => [...f[2] || (f[2] = [
                He(" Confirm ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])
      ])) : Q("", !0)
    ]));
  }
}, Em = { class: "copy-container" }, j1 = {
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
    const i = B(() => {
      if (r.value) {
        const s = Number(n.timeout);
        t = setTimeout(() => r.value = !1, s);
      }
      return r.value;
    }), a = B(() => n.successMessage), o = () => {
      const s = document.createElement("textarea");
      s.value = n.value, s.setAttribute("readonly", "readonly"), s.style.position = "absolute", s.style.left = "-9999px", document.body.appendChild(s), s.select(), r.value = document.execCommand("copy"), document.body.removeChild(s);
    };
    return Zi(() => {
      n.timeout && clearTimeout(t);
    }), (s, l) => (L(), j("span", Em, [
      C("a", {
        class: "clickable",
        href: "#",
        onClick: Tt(o, ["prevent"])
      }, [
        Ce(s.$slots, "default", {}, () => [
          ee(re(dv), {
            class: "-tc-ml-0.5 tc-size-5 tc-text-gray-400",
            "aria-hidden": "true"
          })
        ])
      ]),
      i.value ? (L(), $e(Es, {
        key: 0,
        message: a.value
      }, null, 8, ["message"])) : Q("", !0)
    ]));
  }
}, Om = { class: "tc-relative tc-inline-block" }, Am = { class: "tc-flex tc-items-center" }, B1 = {
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
    const n = e, r = F(!1), t = B(() => {
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
    return (i, a) => (L(), j("div", Om, [
      C("div", Am, [
        Ce(i.$slots, "default"),
        C("div", {
          class: "tc-relative tc-flex tc-items-center",
          onMouseenter: a[0] || (a[0] = (o) => r.value = !0),
          onMouseleave: a[1] || (a[1] = (o) => r.value = !1)
        }, [
          Ce(i.$slots, "icon", {}, () => [
            ee(re(pv), { class: "tc-w-5 tc-h-5 tc-ml-2 tc-text-tonik-purple tc-cursor-pointer" })
          ]),
          r.value ? (L(), j("div", {
            key: 0,
            class: we([
              "tc-absolute tc-z-10 tc-bg-gray-800 tc-text-white tc-text-sm tc-rounded tc-p-3 tc-whitespace-nowrap tc-transition-opacity tc-duration-300",
              t.value
            ])
          }, [
            He(ne(e.text) + " ", 1),
            Ce(i.$slots, "html")
          ], 2)) : Q("", !0)
        ], 32)
      ])
    ]));
  }
}, Cm = { class: "tc-relative tc-m-auto tc-text-black" }, Lm = {
  key: 0,
  class: "tc-absolute tc-top-0 tc-left-5 tc-h-full"
}, z1 = {
  __name: "RoleIcon",
  props: {
    isEmployer: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (n, r) => (L(), j("div", Cm, [
      ee(re(vv), {
        class: "tc-size-6 tc-text-black",
        "aria-hidden": "true"
      }),
      e.isEmployer ? (L(), j("div", Lm, [...r[0] || (r[0] = [
        C("span", { class: "tc-font-bold" }, "e", -1)
      ])])) : Q("", !0)
    ]));
  }
}, Im = { class: "tc-m-auto tc-flex tc-flex-col tc-items-center" }, Rm = { class: "tc-text-green-2" }, Fm = { class: "tc-text-sm tc-uppercase tc-font-semibold" }, Ym = { class: "tc-text-tendo-blue" }, jm = { class: "tc-text-sm tc-uppercase tc-font-semibold" }, Bm = { class: "tc-text-error" }, zm = { class: "tc-text-sm tc-uppercase tc-font-semibold" }, N1 = {
  __name: "StatusIcon",
  props: {
    status: {
      type: String,
      default: "pending"
    }
  },
  setup(e) {
    return (n, r) => (L(), j("div", Im, [
      e.status === "pending" ? (L(), j(ce, { key: 0 }, [
        r[0] || (r[0] = C("div", { class: "tc-size-6 tc-text-green-2 tc-fill-green-2" }, [
          C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512"
          }, [
            C("path", { d: "M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM288 437v11H96V437c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z" })
          ])
        ], -1)),
        C("div", Rm, [
          C("span", Fm, ne(e.status), 1)
        ])
      ], 64)) : e.status === "complete" ? (L(), j(ce, { key: 1 }, [
        ee(re(iv), {
          class: "tc-size-6 tc-text-tendo-blue",
          "aria-hidden": "true"
        }),
        C("div", Ym, [
          C("span", jm, ne(e.status), 1)
        ])
      ], 64)) : e.status === "cancelled" ? (L(), j(ce, { key: 2 }, [
        ee(re(hv), {
          class: "tc-size-6 tc-text-error",
          "aria-hidden": "true"
        }),
        C("div", Bm, [
          C("span", zm, ne(e.status), 1)
        ])
      ], 64)) : Q("", !0)
    ]));
  }
}, Nm = { class: "tc-relative tc-m-auto tc-text-black" }, Hm = { class: "tc-size-6 tc-text-black tc-fill-black" }, Vm = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, Wm = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, Um = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, _m = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, H1 = {
  __name: "EmployerRoleIcon",
  props: {
    role: {
      type: String,
      default: "manager"
    }
  },
  setup(e) {
    return (n, r) => (L(), j("div", Nm, [
      C("div", Hm, [
        e.role === "manager" ? (L(), j("svg", Vm, [...r[0] || (r[0] = [
          C("path", { d: "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" }, null, -1)
        ])])) : e.role === "collection" ? (L(), j("svg", Wm, [...r[1] || (r[1] = [
          C("path", { d: "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" }, null, -1)
        ])])) : e.role === "employee_profile" ? (L(), j("svg", Um, [...r[2] || (r[2] = [
          C("path", { d: "M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" }, null, -1)
        ])])) : e.role === "reward_manager" ? (L(), j("svg", _m, [...r[3] || (r[3] = [
          C("path", { d: "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" }, null, -1)
        ])])) : Q("", !0)
      ])
    ]));
  }
};
function qm(e, n, r) {
  let t = F(r == null ? void 0 : r.value), i = B(() => e.value !== void 0);
  return [B(() => i.value ? e.value : t.value), function(a) {
    return i.value || (t.value = a), n == null ? void 0 : n(a);
  }];
}
function So(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function lr() {
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
    return So(() => {
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
    let t = lr();
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
var vi;
let Zm = Symbol("headlessui.useid"), Km = 0;
const ot = (vi = gn.useId) != null ? vi : function() {
  return gn.inject(Zm, () => `${++Km}`)();
};
function oe(e) {
  var n;
  if (e == null || e.value == null) return null;
  let r = (n = e.value.$el) != null ? n : e.value;
  return r instanceof Node ? r : null;
}
function pt(e, n, ...r) {
  if (e in n) {
    let i = n[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, pt), t;
}
var Gm = Object.defineProperty, Xm = (e, n, r) => n in e ? Gm(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, mi = (e, n, r) => (Xm(e, typeof n != "symbol" ? n + "" : n, r), r);
let Jm = class {
  constructor() {
    mi(this, "current", this.detect()), mi(this, "currentId", 0);
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
}, ur = new Jm();
function Rt(e) {
  if (ur.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = oe(e);
    if (n) return n.ownerDocument;
  }
  return document;
}
let Wa = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var nt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(nt || {}), tr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(tr || {}), Qm = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Qm || {});
function cr(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Wa)).sort((n, r) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Qr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Qr || {});
function ea(e, n = 0) {
  var r;
  return e === ((r = Rt(e)) == null ? void 0 : r.body) ? !1 : pt(n, { 0() {
    return e.matches(Wa);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(Wa)) return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
function pl(e) {
  let n = Rt(e);
  Ee(() => {
    n && !ea(n.activeElement, 0) && vn(e);
  });
}
var eg = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(eg || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function vn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let tg = ["textarea", "input"].join(",");
function ng(e) {
  var n, r;
  return (r = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, tg)) != null ? r : !1;
}
function vl(e, n = (r) => r) {
  return e.slice().sort((r, t) => {
    let i = n(r), a = n(t);
    if (i === null || a === null) return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function rg(e, n) {
  return Ot(cr(), n, { relativeTo: e });
}
function Ot(e, n, { sorted: r = !0, relativeTo: t = null, skipElements: i = [] } = {}) {
  var a;
  let o = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? r ? vl(e) : e : cr(e);
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
  return n & 6 && ng(h) && h.select(), 2;
}
function ml() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function ag() {
  return /Android/gi.test(window.navigator.userAgent);
}
function og() {
  return ml() || ag();
}
function Ar(e, n, r) {
  ur.isServer || ve((t) => {
    document.addEventListener(e, n, r), t(() => document.removeEventListener(e, n, r));
  });
}
function gl(e, n, r) {
  ur.isServer || ve((t) => {
    window.addEventListener(e, n, r), t(() => window.removeEventListener(e, n, r));
  });
}
function ko(e, n, r = B(() => !0)) {
  function t(a, o) {
    if (!r.value || a.defaultPrevented) return;
    let s = o(a);
    if (s === null || !s.getRootNode().contains(s)) return;
    let l = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of l) {
      if (c === null) continue;
      let d = c instanceof HTMLElement ? c : oe(c);
      if (d != null && d.contains(s) || a.composed && a.composedPath().includes(d)) return;
    }
    return !ea(s, Qr.Loose) && s.tabIndex !== -1 && a.preventDefault(), n(a, s);
  }
  let i = F(null);
  Ar("pointerdown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Ar("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Ar("click", (a) => {
    og() || i.value && (t(a, () => i.value), i.value = null);
  }, !0), Ar("touchend", (a) => t(a, () => a.target instanceof HTMLElement ? a.target : null), !0), gl("blur", (a) => t(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function gi(e, n) {
  if (e) return e;
  let r = n ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function Mo(e, n) {
  let r = F(gi(e.value.type, e.value.as));
  return se(() => {
    r.value = gi(e.value.type, e.value.as);
  }), ve(() => {
    var t;
    r.value || oe(n) && oe(n) instanceof HTMLButtonElement && !((t = oe(n)) != null && t.hasAttribute("type")) && (r.value = "button");
  }), r;
}
function yi(e) {
  return [e.screenX, e.screenY];
}
function ig() {
  let e = F([-1, -1]);
  return { wasMoved(n) {
    let r = yi(n);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(n) {
    e.value = yi(n);
  } };
}
function sg({ container: e, accept: n, walk: r, enabled: t }) {
  ve(() => {
    let i = e.value;
    if (!i || t !== void 0 && !t.value) return;
    let a = Rt(e);
    if (!a) return;
    let o = Object.assign((l) => n(l), { acceptNode: n }), s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; s.nextNode(); ) r(s.currentNode);
  });
}
var Ut = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ut || {}), dn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(dn || {});
function _e({ visible: e = !0, features: n = 0, ourProps: r, theirProps: t, ...i }) {
  var a;
  let o = bl(t, r), s = Object.assign(i, { props: o });
  if (e || n & 2 && o.static) return Sa(s);
  if (n & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return pt(l, { 0() {
      return null;
    }, 1() {
      return Sa({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Sa(s);
}
function Sa({ props: e, attrs: n, slots: r, slot: t, name: i }) {
  var a, o;
  let { as: s, ...l } = Do(e, ["unmount", "static"]), c = (a = r.default) == null ? void 0 : a.call(r, t), d = {};
  if (t) {
    let f = !1, u = [];
    for (let [h, p] of Object.entries(t)) typeof p == "boolean" && (f = !0), p === !0 && u.push(h);
    f && (d["data-headlessui-state"] = u.join(" "));
  }
  if (s === "template") {
    if (c = yl(c ?? []), Object.keys(l).length > 0 || Object.keys(n).length > 0) {
      let [f, ...u] = c ?? [];
      if (!ug(f) || u.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(n)).map((m) => m.trim()).filter((m, v, g) => g.indexOf(m) === v).sort((m, v) => m.localeCompare(v)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = bl((o = f.props) != null ? o : {}, l, d), p = Hr(f, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return X(s, Object.assign({}, l, d), { default: () => c });
}
function yl(e) {
  return e.flatMap((n) => n.type === ce ? yl(n.children) : [n]);
}
function bl(...e) {
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
function lg(e) {
  let n = Object.assign({}, e);
  for (let r in n) n[r] === void 0 && delete n[r];
  return n;
}
function Do(e, n = []) {
  let r = Object.assign({}, e);
  for (let t of n) t in r && delete r[t];
  return r;
}
function ug(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var tn = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(tn || {});
let bn = J({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: r }) {
  return () => {
    var t;
    let { features: i, ...a } = e, o = { "aria-hidden": (i & 2) === 2 ? !0 : (t = a["aria-hidden"]) != null ? t : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return _e({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: n, name: "Hidden" });
  };
} }), wl = Symbol("Context");
var Ke = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ke || {});
function cg() {
  return Wn() !== null;
}
function Wn() {
  return fe(wl, null);
}
function To(e) {
  de(wl, e);
}
var ze = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ze || {});
function dg(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let Mn = [];
dg(() => {
  function e(n) {
    n.target instanceof HTMLElement && n.target !== document.body && Mn[0] !== n.target && (Mn.unshift(n.target), Mn = Mn.filter((r) => r != null && r.isConnected), Mn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function fg(e) {
  throw new Error("Unexpected object: " + e);
}
var $t = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))($t || {});
function hg(e, n) {
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
      fg(e);
  }
}
function pg(e) {
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
function Po(e, n, r, t) {
  ur.isServer || ve((i) => {
    e = e ?? window, e.addEventListener(n, r, t), i(() => e.removeEventListener(n, r, t));
  });
}
var St = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(St || {});
function Eo() {
  let e = F(0);
  return gl("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function xl(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let t = oe(r);
    t instanceof HTMLElement && n.add(t);
  }
  return n;
}
var $l = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))($l || {});
let Zn = Object.assign(J({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: F(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null);
  t({ el: i, $el: i });
  let a = B(() => Rt(i)), o = F(!1);
  se(() => o.value = !0), be(() => o.value = !1), mg({ ownerDocument: a }, B(() => o.value && !!(e.features & 16)));
  let s = gg({ ownerDocument: a, container: i, initialFocus: B(() => e.initialFocus) }, B(() => o.value && !!(e.features & 2)));
  yg({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, B(() => o.value && !!(e.features & 8)));
  let l = Eo();
  function c(h) {
    let p = oe(i);
    p && ((m) => m())(() => {
      pt(l.value, { [St.Forwards]: () => {
        Ot(p, nt.First, { skipElements: [h.relatedTarget] });
      }, [St.Backwards]: () => {
        Ot(p, nt.Last, { skipElements: [h.relatedTarget] });
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
    let p = xl(e.containers);
    oe(i) instanceof HTMLElement && p.add(oe(i));
    let m = h.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (Sl(p, m) || (d.value ? Ot(oe(i), pt(l.value, { [St.Forwards]: () => nt.Next, [St.Backwards]: () => nt.Previous }) | nt.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && vn(h.target)));
  }
  return () => {
    let h = {}, p = { ref: i, onKeydown: f, onFocusout: u }, { features: m, initialFocus: v, containers: g, ...y } = e;
    return X(ce, [!!(m & 4) && X(bn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: tn.Focusable }), _e({ ourProps: p, theirProps: { ...n, ...y }, slot: h, attrs: n, slots: r, name: "FocusTrap" }), !!(m & 4) && X(bn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: tn.Focusable })]);
  };
} }), { features: $l });
function vg(e) {
  let n = F(Mn.slice());
  return De([e], ([r], [t]) => {
    t === !0 && r === !1 ? So(() => {
      n.value.splice(0);
    }) : t === !1 && r === !0 && (n.value = Mn.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n.value.find((t) => t != null && t.isConnected)) != null ? r : null;
  };
}
function mg({ ownerDocument: e }, n) {
  let r = vg(n);
  se(() => {
    ve(() => {
      var t, i;
      n.value || ((t = e.value) == null ? void 0 : t.activeElement) === ((i = e.value) == null ? void 0 : i.body) && vn(r());
    }, { flush: "post" });
  }), be(() => {
    n.value && vn(r());
  });
}
function gg({ ownerDocument: e, container: n, initialFocus: r }, t) {
  let i = F(null), a = F(!1);
  return se(() => a.value = !0), be(() => a.value = !1), se(() => {
    De([n, r, t], (o, s) => {
      if (o.every((c, d) => (s == null ? void 0 : s[d]) === c) || !t.value) return;
      let l = oe(n);
      l && So(() => {
        var c, d;
        if (!a.value) return;
        let f = oe(r), u = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === u) {
            i.value = u;
            return;
          }
        } else if (l.contains(u)) {
          i.value = u;
          return;
        }
        f ? vn(f) : Ot(l, nt.First | nt.NoScroll) === tr.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function yg({ ownerDocument: e, container: n, containers: r, previousActiveElement: t }, i) {
  var a;
  Po((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value) return;
    let s = xl(r);
    oe(n) instanceof HTMLElement && s.add(oe(n));
    let l = t.value;
    if (!l) return;
    let c = o.target;
    c && c instanceof HTMLElement ? Sl(s, c) ? (t.value = c, vn(c)) : (o.preventDefault(), o.stopPropagation(), vn(l)) : vn(t.value);
  }, !0);
}
function Sl(e, n) {
  for (let r of e) if (r.contains(n)) return !0;
  return !1;
}
function bg(e) {
  let n = In(e.getSnapshot());
  return be(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function wg(e, n) {
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
function xg() {
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
function $g() {
  return ml() ? { before({ doc: e, d: n, meta: r }) {
    function t(i) {
      return r.containers.flatMap((a) => a()).some((a) => a.contains(i));
    }
    n.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = lr();
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
function Sg() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function kg(e) {
  let n = {};
  for (let r of e) Object.assign(n, r(n));
  return n;
}
let Pn = wg(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var r;
  let t = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: lr(), meta: /* @__PURE__ */ new Set() };
  return t.count++, t.meta.add(n), this.set(e, t), this;
}, POP(e, n) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: r }) {
  let t = { doc: e, d: n, meta: kg(r) }, i = [$g(), xg(), Sg()];
  i.forEach(({ before: a }) => a == null ? void 0 : a(t)), i.forEach(({ after: a }) => a == null ? void 0 : a(t));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Pn.subscribe(() => {
  let e = Pn.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [r] of e) n.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let t = n.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !t || !i && t) && Pn.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Pn.dispatch("TEARDOWN", r);
  }
});
function Mg(e, n, r) {
  let t = bg(Pn), i = B(() => {
    let a = e.value ? t.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return De([e, n], ([a, o], [s], l) => {
    if (!a || !o) return;
    Pn.dispatch("PUSH", a, r);
    let c = !1;
    l(() => {
      c || (Pn.dispatch("POP", s ?? a, r), c = !0);
    });
  }, { immediate: !0 }), i;
}
let ka = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map();
function bi(e, n = F(!0)) {
  ve((r) => {
    var t;
    if (!n.value) return;
    let i = oe(e);
    if (!i) return;
    r(function() {
      var o;
      if (!i) return;
      let s = (o = Kn.get(i)) != null ? o : 1;
      if (s === 1 ? Kn.delete(i) : Kn.set(i, s - 1), s !== 1) return;
      let l = ka.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, ka.delete(i));
    });
    let a = (t = Kn.get(i)) != null ? t : 0;
    Kn.set(i, a + 1), a === 0 && (ka.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
function kl({ defaultContainers: e = [], portals: n, mainTreeNodeRef: r } = {}) {
  let t = F(null), i = Rt(t);
  function a() {
    var o, s, l;
    let c = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? c.push(d) : "value" in d && d.value instanceof HTMLElement && c.push(d.value));
    if (n != null && n.value) for (let d of n.value) c.push(d);
    for (let d of (o = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? o : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(oe(t)) || d.contains((l = (s = oe(t)) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || c.some((f) => d.contains(f)) || c.push(d));
    return c;
  }
  return { resolveContainers: a, contains(o) {
    return a().some((s) => s.contains(o));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return r != null ? null : X(bn, { features: tn.Hidden, ref: t });
  } };
}
function Dg() {
  let e = F(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return X(bn, { features: tn.Hidden, ref: e });
  } };
}
let Ml = Symbol("ForcePortalRootContext");
function Tg() {
  return fe(Ml, !1);
}
let Ua = J({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: r }) {
  return de(Ml, e.force), () => {
    let { force: t, ...i } = e;
    return _e({ theirProps: i, ourProps: {}, slot: {}, slots: n, attrs: r, name: "ForcePortalRoot" });
  };
} }), Dl = Symbol("StackContext");
var _a = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(_a || {});
function Pg() {
  return fe(Dl, () => {
  });
}
function Eg({ type: e, enabled: n, element: r, onUpdate: t }) {
  let i = Pg();
  function a(...o) {
    t == null || t(...o), i(...o);
  }
  se(() => {
    De(n, (o, s) => {
      o ? a(0, e, r) : s === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), be(() => {
    n.value && a(1, e, r);
  }), de(Dl, a);
}
let Tl = Symbol("DescriptionContext");
function Og() {
  let e = fe(Tl, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function Pl({ slot: e = F({}), name: n = "Description", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return de(Tl, { register: i, slot: e, name: n, props: r }), B(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
J({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-description-${ot()}`, a = Og();
  return se(() => be(a.register(i))), () => {
    let { name: o = "Description", slot: s = F({}), props: l = {} } = a, { ...c } = e, d = { ...Object.entries(l).reduce((f, [u, h]) => Object.assign(f, { [u]: re(h) }), {}), id: i };
    return _e({ ourProps: d, theirProps: c, slot: s.value, attrs: n, slots: r, name: o });
  };
} });
function Ag(e) {
  let n = Rt(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = n.getElementById("headlessui-portal-root");
  if (r) return r;
  let t = n.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(t);
}
const qa = /* @__PURE__ */ new WeakMap();
function Cg(e) {
  var n;
  return (n = qa.get(e)) != null ? n : 0;
}
function wi(e, n) {
  let r = n(Cg(e));
  return r <= 0 ? qa.delete(e) : qa.set(e, r), r;
}
let El = J({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = B(() => Rt(t)), a = Tg(), o = fe(Al, null), s = F(a === !0 || o == null ? Ag(t.value) : o.resolveTarget());
  s.value && wi(s.value, (u) => u + 1);
  let l = F(!1);
  se(() => {
    l.value = !0;
  }), ve(() => {
    a || o != null && (s.value = o.resolveTarget());
  });
  let c = fe(Za, null), d = !1, f = Vr();
  return De(t, () => {
    if (d || !c) return;
    let u = oe(t);
    u && (be(c.register(u), f), d = !0);
  }), be(() => {
    var u, h;
    let p = (u = i.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    !p || s.value !== p || wi(s.value, (m) => m - 1) || s.value.children.length > 0 || (h = s.value.parentElement) == null || h.removeChild(s.value);
  }), () => {
    if (!l.value || s.value === null) return null;
    let u = { ref: t, "data-headlessui-portal": "" };
    return X(rr, { to: s.value }, _e({ ourProps: u, theirProps: e, slot: {}, attrs: r, slots: n, name: "Portal" }));
  };
} }), Za = Symbol("PortalParentContext");
function Ol() {
  let e = fe(Za, null), n = F([]);
  function r(a) {
    return n.value.push(a), e && e.register(a), () => t(a);
  }
  function t(a) {
    let o = n.value.indexOf(a);
    o !== -1 && n.value.splice(o, 1), e && e.unregister(a);
  }
  let i = { register: r, unregister: t, portals: n };
  return [n, J({ name: "PortalWrapper", setup(a, { slots: o }) {
    return de(Za, i), () => {
      var s;
      return (s = o.default) == null ? void 0 : s.call(o);
    };
  } })];
}
let Al = Symbol("PortalGroupContext"), Lg = J({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: r }) {
  let t = Rn({ resolveTarget() {
    return e.target;
  } });
  return de(Al, t), () => {
    let { target: i, ...a } = e;
    return _e({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: r, name: "PortalGroup" });
  };
} });
var Ig = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ig || {});
let Ka = Symbol("DialogContext");
function dr(e) {
  let n = fe(Ka, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, dr), r;
  }
  return n;
}
let Cr = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
J({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Cr }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a, o;
  let s = (a = e.id) != null ? a : `headlessui-dialog-${ot()}`, l = F(!1);
  se(() => {
    l.value = !0;
  });
  let c = !1, d = B(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0, console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), f = F(0), u = Wn(), h = B(() => e.open === Cr && u !== null ? (u.value & Ke.Open) === Ke.Open : e.open), p = F(null), m = B(() => Rt(p));
  if (i({ el: p, $el: p }), !(e.open !== Cr || u !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof h.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value === Cr ? void 0 : e.open}`);
  let v = B(() => l.value && h.value ? 0 : 1), g = B(() => v.value === 0), y = B(() => f.value > 1), k = fe(Ka, null) !== null, [E, x] = Ol(), { resolveContainers: S, mainTreeNodeRef: b, MainTreeNode: w } = kl({ portals: E, defaultContainers: [B(() => {
    var R;
    return (R = A.panelRef.value) != null ? R : p.value;
  })] }), I = B(() => y.value ? "parent" : "leaf"), P = B(() => u !== null ? (u.value & Ke.Closing) === Ke.Closing : !1), O = B(() => k || P.value ? !1 : g.value), W = B(() => {
    var R, H, _;
    return (_ = Array.from((H = (R = m.value) == null ? void 0 : R.querySelectorAll("body > *")) != null ? H : []).find((G) => G.id === "headlessui-portal-root" ? !1 : G.contains(oe(b)) && G instanceof HTMLElement)) != null ? _ : null;
  });
  bi(W, O);
  let Y = B(() => y.value ? !0 : g.value), $ = B(() => {
    var R, H, _;
    return (_ = Array.from((H = (R = m.value) == null ? void 0 : R.querySelectorAll("[data-headlessui-portal]")) != null ? H : []).find((G) => G.contains(oe(b)) && G instanceof HTMLElement)) != null ? _ : null;
  });
  bi($, Y), Eg({ type: "Dialog", enabled: B(() => v.value === 0), element: p, onUpdate: (R, H) => {
    if (H === "Dialog") return pt(R, { [_a.Add]: () => f.value += 1, [_a.Remove]: () => f.value -= 1 });
  } });
  let D = Pl({ name: "DialogDescription", slot: B(() => ({ open: h.value })) }), M = F(null), A = { titleId: M, panelRef: F(null), dialogState: v, setTitleId(R) {
    M.value !== R && (M.value = R);
  }, close() {
    n("close", !1);
  } };
  de(Ka, A);
  let T = B(() => !(!g.value || y.value));
  ko(S, (R, H) => {
    R.preventDefault(), A.close(), Ee(() => H == null ? void 0 : H.focus());
  }, T);
  let z = B(() => !(y.value || v.value !== 0));
  Po((o = m.value) == null ? void 0 : o.defaultView, "keydown", (R) => {
    z.value && (R.defaultPrevented || R.key === ze.Escape && (R.preventDefault(), R.stopPropagation(), A.close()));
  });
  let N = B(() => !(P.value || v.value !== 0 || k));
  return Mg(m, N, (R) => {
    var H;
    return { containers: [...(H = R.containers) != null ? H : [], S] };
  }), ve((R) => {
    if (v.value !== 0) return;
    let H = oe(p);
    if (!H) return;
    let _ = new ResizeObserver((G) => {
      for (let le of G) {
        let ge = le.target.getBoundingClientRect();
        ge.x === 0 && ge.y === 0 && ge.width === 0 && ge.height === 0 && A.close();
      }
    });
    _.observe(H), R(() => _.disconnect());
  }), () => {
    let { open: R, initialFocus: H, ..._ } = e, G = { ...r, ref: p, id: s, role: d.value, "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": M.value, "aria-describedby": D.value }, le = { open: v.value === 0 };
    return X(Ua, { force: !0 }, () => [X(El, () => X(Lg, { target: p.value }, () => X(Ua, { force: !1 }, () => X(Zn, { initialFocus: H, containers: S, features: g.value ? pt(I.value, { parent: Zn.features.RestoreFocus, leaf: Zn.features.All & ~Zn.features.FocusLock }) : Zn.features.None }, () => X(x, {}, () => _e({ ourProps: G, theirProps: { ..._, ...r }, slot: le, attrs: r, slots: t, visible: v.value === 0, features: Ut.RenderStrategy | Ut.Static, name: "Dialog" })))))), X(w)]);
  };
} });
J({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-overlay-${ot()}`, a = dr("DialogOverlay");
  function o(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), a.close());
  }
  return () => {
    let { ...s } = e;
    return _e({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: s, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogOverlay" });
  };
} });
J({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-backdrop-${ot()}`, o = dr("DialogBackdrop"), s = F(null);
  return t({ el: s, $el: s }), se(() => {
    if (o.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...l } = e, c = { id: a, ref: s, "aria-hidden": !0 };
    return X(Ua, { force: !0 }, () => X(El, () => _e({ ourProps: c, theirProps: { ...n, ...l }, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogBackdrop" })));
  };
} });
J({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-panel-${ot()}`, o = dr("DialogPanel");
  t({ el: o.panelRef, $el: o.panelRef });
  function s(l) {
    l.stopPropagation();
  }
  return () => {
    let { ...l } = e, c = { id: a, ref: o.panelRef, onClick: s };
    return _e({ ourProps: c, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogPanel" });
  };
} });
J({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-title-${ot()}`, a = dr("DialogTitle");
  return se(() => {
    a.setTitleId(i), be(() => a.setTitleId(null));
  }), () => {
    let { ...o } = e;
    return _e({ ourProps: { id: i }, theirProps: o, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogTitle" });
  };
} });
let xi = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function $i(e) {
  var n, r;
  let t = (n = e.innerText) != null ? n : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return t;
  let a = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), a = !0;
  let o = a ? (r = i.innerText) != null ? r : "" : t;
  return xi.test(o) && (o = o.replace(xi, "")), o;
}
function Rg(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string") return n.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let t = r.split(" ").map((i) => {
      let a = document.getElementById(i);
      if (a) {
        let o = a.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : $i(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (t.length > 0) return t.join(", ");
  }
  return $i(e).trim();
}
function Fg(e) {
  let n = F(""), r = F("");
  return () => {
    let t = oe(e);
    if (!t) return "";
    let i = t.innerText;
    if (n.value === i) return r.value;
    let a = Rg(t).trim().toLowerCase();
    return n.value = i, r.value = a, a;
  };
}
var Yg = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Yg || {}), jg = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(jg || {});
function Bg(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Cl = Symbol("MenuContext");
function ta(e) {
  let n = fe(Cl, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ta), r;
  }
  return n;
}
J({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(1), i = F(null), a = F(null), o = F([]), s = F(""), l = F(null), c = F(1);
  function d(u = (h) => h) {
    let h = l.value !== null ? o.value[l.value] : null, p = vl(u(o.value.slice()), (v) => oe(v.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let f = { menuState: t, buttonRef: i, itemsRef: a, items: o, searchQuery: s, activeItemIndex: l, activationTrigger: c, closeMenu: () => {
    t.value = 1, l.value = null;
  }, openMenu: () => t.value = 0, goToItem(u, h, p) {
    let m = d(), v = hg(u === $t.Specific ? { focus: $t.Specific, id: h } : { focus: u }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
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
  return ko([i, a], (u, h) => {
    var p;
    f.closeMenu(), ea(h, Qr.Loose) || (u.preventDefault(), (p = oe(i)) == null || p.focus());
  }, B(() => t.value === 0)), de(Cl, f), To(B(() => pt(t.value, { 0: Ke.Open, 1: Ke.Closed }))), () => {
    let u = { open: t.value === 0, close: f.closeMenu };
    return _e({ ourProps: {}, theirProps: e, slot: u, slots: n, attrs: r, name: "Menu" });
  };
} });
J({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-button-${ot()}`, o = ta("MenuButton");
  t({ el: o.buttonRef, $el: o.buttonRef });
  function s(f) {
    switch (f.key) {
      case ze.Space:
      case ze.Enter:
      case ze.ArrowDown:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Ee(() => {
          var u;
          (u = oe(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem($t.First);
        });
        break;
      case ze.ArrowUp:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Ee(() => {
          var u;
          (u = oe(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem($t.Last);
        });
        break;
    }
  }
  function l(f) {
    switch (f.key) {
      case ze.Space:
        f.preventDefault();
        break;
    }
  }
  function c(f) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Ee(() => {
      var u;
      return (u = oe(o.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), o.openMenu(), Bg(() => {
      var u;
      return (u = oe(o.itemsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let d = Mo(B(() => ({ as: e.as, type: n.type })), o.buttonRef);
  return () => {
    var f;
    let u = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: a, type: d.value, "aria-haspopup": "menu", "aria-controls": (f = oe(o.itemsRef)) == null ? void 0 : f.id, "aria-expanded": o.menuState.value === 0, onKeydown: s, onKeyup: l, onClick: c };
    return _e({ ourProps: p, theirProps: h, slot: u, attrs: n, slots: r, name: "MenuButton" });
  };
} });
J({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-items-${ot()}`, o = ta("MenuItems"), s = F(null);
  t({ el: o.itemsRef, $el: o.itemsRef }), sg({ container: B(() => oe(o.itemsRef)), enabled: B(() => o.menuState.value === 0), accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function l(u) {
    var h;
    switch (s.value && clearTimeout(s.value), u.key) {
      case ze.Space:
        if (o.searchQuery.value !== "") return u.preventDefault(), u.stopPropagation(), o.search(u.key);
      case ze.Enter:
        if (u.preventDefault(), u.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = oe(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), pl(oe(o.buttonRef));
        break;
      case ze.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem($t.Next);
      case ze.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem($t.Previous);
      case ze.Home:
      case ze.PageUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem($t.First);
      case ze.End:
      case ze.PageDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem($t.Last);
      case ze.Escape:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Ee(() => {
          var p;
          return (p = oe(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case ze.Tab:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Ee(() => rg(oe(o.buttonRef), u.shiftKey ? nt.Previous : nt.Next));
        break;
      default:
        u.key.length === 1 && (o.search(u.key), s.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function c(u) {
    switch (u.key) {
      case ze.Space:
        u.preventDefault();
        break;
    }
  }
  let d = Wn(), f = B(() => d !== null ? (d.value & Ke.Open) === Ke.Open : o.menuState.value === 0);
  return () => {
    var u, h;
    let p = { open: o.menuState.value === 0 }, { ...m } = e, v = { "aria-activedescendant": o.activeItemIndex.value === null || (u = o.items.value[o.activeItemIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (h = oe(o.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: l, onKeyup: c, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return _e({ ourProps: v, theirProps: m, slot: p, attrs: n, slots: r, features: Ut.RenderStrategy | Ut.Static, visible: f.value, name: "MenuItems" });
  };
} });
J({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-item-${ot()}`, o = ta("MenuItem"), s = F(null);
  t({ el: s, $el: s });
  let l = B(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === a : !1), c = Fg(s), d = B(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: s }));
  se(() => o.registerItem(a, d)), be(() => o.unregisterItem(a)), ve(() => {
    o.menuState.value === 0 && l.value && o.activationTrigger.value !== 0 && Ee(() => {
      var g, y;
      return (y = (g = oe(s)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : y.call(g, { block: "nearest" });
    });
  });
  function f(g) {
    if (e.disabled) return g.preventDefault();
    o.closeMenu(), pl(oe(o.buttonRef));
  }
  function u() {
    if (e.disabled) return o.goToItem($t.Nothing);
    o.goToItem($t.Specific, a);
  }
  let h = ig();
  function p(g) {
    h.update(g);
  }
  function m(g) {
    h.wasMoved(g) && (e.disabled || l.value || o.goToItem($t.Specific, a, 0));
  }
  function v(g) {
    h.wasMoved(g) && (e.disabled || l.value && o.goToItem($t.Nothing));
  }
  return () => {
    let { disabled: g, ...y } = e, k = { active: l.value, disabled: g, close: o.closeMenu };
    return _e({ ourProps: { id: a, ref: s, role: "menuitem", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, onClick: f, onFocus: u, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v }, theirProps: { ...r, ...y }, slot: k, attrs: r, slots: n, name: "MenuItem" });
  };
} });
var zg = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(zg || {});
let Ll = Symbol("PopoverContext");
function na(e) {
  let n = fe(Ll, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <${Hg.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, na), r;
  }
  return n;
}
let Il = Symbol("PopoverGroupContext");
function Rl() {
  return fe(Il, null);
}
let Fl = Symbol("PopoverPanelContext");
function Ng() {
  return fe(Fl, null);
}
let Hg = J({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = F(null);
  t({ el: a, $el: a });
  let o = F(1), s = F(null), l = F(null), c = F(null), d = F(null), f = B(() => Rt(a)), u = B(() => {
    var x, S;
    if (!oe(s) || !oe(d)) return !1;
    for (let Y of document.querySelectorAll("body > *")) if (Number(Y == null ? void 0 : Y.contains(oe(s))) ^ Number(Y == null ? void 0 : Y.contains(oe(d)))) return !0;
    let b = cr(), w = b.indexOf(oe(s)), I = (w + b.length - 1) % b.length, P = (w + 1) % b.length, O = b[I], W = b[P];
    return !((x = oe(d)) != null && x.contains(O)) && !((S = oe(d)) != null && S.contains(W));
  }), h = { popoverState: o, buttonId: F(null), panelId: F(null), panel: d, button: s, isPortalled: u, beforePanelSentinel: l, afterPanelSentinel: c, togglePopover() {
    o.value = pt(o.value, { 0: 1, 1: 0 });
  }, closePopover() {
    o.value !== 1 && (o.value = 1);
  }, close(x) {
    h.closePopover();
    let S = x ? x instanceof HTMLElement ? x : x.value instanceof HTMLElement ? oe(x) : oe(h.button) : oe(h.button);
    S == null || S.focus();
  } };
  de(Ll, h), To(B(() => pt(o.value, { 0: Ke.Open, 1: Ke.Closed })));
  let p = { buttonId: h.buttonId, panelId: h.panelId, close() {
    h.closePopover();
  } }, m = Rl(), v = m == null ? void 0 : m.registerPopover, [g, y] = Ol(), k = kl({ mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef, portals: g, defaultContainers: [s, d] });
  function E() {
    var x, S, b, w;
    return (w = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null ? w : ((x = f.value) == null ? void 0 : x.activeElement) && (((S = oe(s)) == null ? void 0 : S.contains(f.value.activeElement)) || ((b = oe(d)) == null ? void 0 : b.contains(f.value.activeElement)));
  }
  return ve(() => v == null ? void 0 : v(p)), Po((i = f.value) == null ? void 0 : i.defaultView, "focus", (x) => {
    var S, b;
    x.target !== window && x.target instanceof HTMLElement && o.value === 0 && (E() || s && d && (k.contains(x.target) || (S = oe(h.beforePanelSentinel)) != null && S.contains(x.target) || (b = oe(h.afterPanelSentinel)) != null && b.contains(x.target) || h.closePopover()));
  }, !0), ko(k.resolveContainers, (x, S) => {
    var b;
    h.closePopover(), ea(S, Qr.Loose) || (x.preventDefault(), (b = oe(s)) == null || b.focus());
  }, B(() => o.value === 0)), () => {
    let x = { open: o.value === 0, close: h.close };
    return X(ce, [X(y, {}, () => _e({ theirProps: { ...e, ...r }, ourProps: { ref: a }, slot: x, slots: n, attrs: r, name: "Popover" })), X(k.MainTreeNode)]);
  };
} });
J({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-button-${ot()}`, o = na("PopoverButton"), s = B(() => Rt(o.button));
  t({ el: o.button, $el: o.button }), se(() => {
    o.buttonId.value = a;
  }), be(() => {
    o.buttonId.value = null;
  });
  let l = Rl(), c = l == null ? void 0 : l.closeOthers, d = Ng(), f = B(() => d === null ? !1 : d.value === o.panelId.value), u = F(null), h = `headlessui-focus-sentinel-${ot()}`;
  f.value || ve(() => {
    o.button.value = oe(u);
  });
  let p = Mo(B(() => ({ as: e.as, type: n.type })), u);
  function m(x) {
    var S, b, w, I, P;
    if (f.value) {
      if (o.popoverState.value === 1) return;
      switch (x.key) {
        case ze.Space:
        case ze.Enter:
          x.preventDefault(), (b = (S = x.target).click) == null || b.call(S), o.closePopover(), (w = oe(o.button)) == null || w.focus();
          break;
      }
    } else switch (x.key) {
      case ze.Space:
      case ze.Enter:
        x.preventDefault(), x.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover();
        break;
      case ze.Escape:
        if (o.popoverState.value !== 0) return c == null ? void 0 : c(o.buttonId.value);
        if (!oe(o.button) || (I = s.value) != null && I.activeElement && !((P = oe(o.button)) != null && P.contains(s.value.activeElement))) return;
        x.preventDefault(), x.stopPropagation(), o.closePopover();
        break;
    }
  }
  function v(x) {
    f.value || x.key === ze.Space && x.preventDefault();
  }
  function g(x) {
    var S, b;
    e.disabled || (f.value ? (o.closePopover(), (S = oe(o.button)) == null || S.focus()) : (x.preventDefault(), x.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover(), (b = oe(o.button)) == null || b.focus()));
  }
  function y(x) {
    x.preventDefault(), x.stopPropagation();
  }
  let k = Eo();
  function E() {
    let x = oe(o.panel);
    if (!x) return;
    function S() {
      pt(k.value, { [St.Forwards]: () => Ot(x, nt.First), [St.Backwards]: () => Ot(x, nt.Last) }) === tr.Error && Ot(cr().filter((b) => b.dataset.headlessuiFocusGuard !== "true"), pt(k.value, { [St.Forwards]: nt.Next, [St.Backwards]: nt.Previous }), { relativeTo: oe(o.button) });
    }
    S();
  }
  return () => {
    let x = o.popoverState.value === 0, S = { open: x }, { ...b } = e, w = f.value ? { ref: u, type: p.value, onKeydown: m, onClick: g } : { ref: u, id: a, type: p.value, "aria-expanded": o.popoverState.value === 0, "aria-controls": oe(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: v, onClick: g, onMousedown: y };
    return X(ce, [_e({ ourProps: w, theirProps: { ...n, ...b }, slot: S, attrs: n, slots: r, name: "PopoverButton" }), x && !f.value && o.isPortalled.value && X(bn, { id: h, features: tn.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: E })]);
  };
} });
J({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: r }) {
  let t = na("PopoverOverlay"), i = `headlessui-popover-overlay-${ot()}`, a = Wn(), o = B(() => a !== null ? (a.value & Ke.Open) === Ke.Open : t.popoverState.value === 0);
  function s() {
    t.closePopover();
  }
  return () => {
    let l = { open: t.popoverState.value === 0 };
    return _e({ ourProps: { id: i, "aria-hidden": !0, onClick: s }, theirProps: e, slot: l, attrs: n, slots: r, features: Ut.RenderStrategy | Ut.Static, visible: o.value, name: "PopoverOverlay" });
  };
} });
J({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-panel-${ot()}`, { focus: o } = e, s = na("PopoverPanel"), l = B(() => Rt(s.panel)), c = `headlessui-focus-sentinel-before-${ot()}`, d = `headlessui-focus-sentinel-after-${ot()}`;
  t({ el: s.panel, $el: s.panel }), se(() => {
    s.panelId.value = a;
  }), be(() => {
    s.panelId.value = null;
  }), de(Fl, s.panelId), ve(() => {
    var y, k;
    if (!o || s.popoverState.value !== 0 || !s.panel) return;
    let E = (y = l.value) == null ? void 0 : y.activeElement;
    (k = oe(s.panel)) != null && k.contains(E) || Ot(oe(s.panel), nt.First);
  });
  let f = Wn(), u = B(() => f !== null ? (f.value & Ke.Open) === Ke.Open : s.popoverState.value === 0);
  function h(y) {
    var k, E;
    switch (y.key) {
      case ze.Escape:
        if (s.popoverState.value !== 0 || !oe(s.panel) || l.value && !((k = oe(s.panel)) != null && k.contains(l.value.activeElement))) return;
        y.preventDefault(), y.stopPropagation(), s.closePopover(), (E = oe(s.button)) == null || E.focus();
        break;
    }
  }
  function p(y) {
    var k, E, x, S, b;
    let w = y.relatedTarget;
    w && oe(s.panel) && ((k = oe(s.panel)) != null && k.contains(w) || (s.closePopover(), ((x = (E = oe(s.beforePanelSentinel)) == null ? void 0 : E.contains) != null && x.call(E, w) || (b = (S = oe(s.afterPanelSentinel)) == null ? void 0 : S.contains) != null && b.call(S, w)) && w.focus({ preventScroll: !0 })));
  }
  let m = Eo();
  function v() {
    let y = oe(s.panel);
    if (!y) return;
    function k() {
      pt(m.value, { [St.Forwards]: () => {
        var E;
        Ot(y, nt.First) === tr.Error && ((E = oe(s.afterPanelSentinel)) == null || E.focus());
      }, [St.Backwards]: () => {
        var E;
        (E = oe(s.button)) == null || E.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function g() {
    let y = oe(s.panel);
    if (!y) return;
    function k() {
      pt(m.value, { [St.Forwards]: () => {
        let E = oe(s.button), x = oe(s.panel);
        if (!E) return;
        let S = cr(), b = S.indexOf(E), w = S.slice(0, b + 1), I = [...S.slice(b + 1), ...w];
        for (let P of I.slice()) if (P.dataset.headlessuiFocusGuard === "true" || x != null && x.contains(P)) {
          let O = I.indexOf(P);
          O !== -1 && I.splice(O, 1);
        }
        Ot(I, nt.First, { sorted: !1 });
      }, [St.Backwards]: () => {
        var E;
        Ot(y, nt.Previous) === tr.Error && ((E = oe(s.button)) == null || E.focus());
      } });
    }
    k();
  }
  return () => {
    let y = { open: s.popoverState.value === 0, close: s.close }, { focus: k, ...E } = e, x = { ref: s.panel, id: a, onKeydown: h, onFocusout: o && s.popoverState.value === 0 ? p : void 0, tabIndex: -1 };
    return _e({ ourProps: x, theirProps: { ...n, ...E }, attrs: n, slot: y, slots: { ...r, default: (...S) => {
      var b;
      return [X(ce, [u.value && s.isPortalled.value && X(bn, { id: c, ref: s.beforePanelSentinel, features: tn.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v }), (b = r.default) == null ? void 0 : b.call(r, ...S), u.value && s.isPortalled.value && X(bn, { id: d, ref: s.afterPanelSentinel, features: tn.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: Ut.RenderStrategy | Ut.Static, visible: u.value, name: "PopoverPanel" });
  };
} });
J({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null), a = In([]), o = B(() => Rt(i)), s = Dg();
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
    return (u = oe(i)) != null && u.contains(p) ? !0 : a.value.some((m) => {
      var v, g;
      return ((v = h.getElementById(m.buttonId.value)) == null ? void 0 : v.contains(p)) || ((g = h.getElementById(m.panelId.value)) == null ? void 0 : g.contains(p));
    });
  }
  function f(u) {
    for (let h of a.value) h.buttonId.value !== u && h.close();
  }
  return de(Il, { registerPopover: c, unregisterPopover: l, isFocusWithinPopoverGroup: d, closeOthers: f, mainTreeNodeRef: s.mainTreeNodeRef }), () => X(ce, [_e({ ourProps: { ref: i }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: r, name: "PopoverGroup" }), X(s.MainTreeNode)]);
} });
let Yl = Symbol("LabelContext");
function jl() {
  let e = fe(Yl, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, jl), n;
  }
  return e;
}
function Vg({ slot: e = {}, name: n = "Label", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return de(Yl, { register: i, slot: e, name: n, props: r }), B(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
J({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-label-${ot()}`, a = jl();
  return se(() => be(a.register(i))), () => {
    let { name: o = "Label", slot: s = {}, props: l = {} } = a, { passive: c, ...d } = e, f = { ...Object.entries(l).reduce((u, [h, p]) => Object.assign(u, { [h]: re(p) }), {}), id: i };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), _e({ ourProps: f, theirProps: d, slot: s, attrs: r, slots: n, name: o });
  };
} });
let Bl = Symbol("GroupContext");
J({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = Vg({ name: "SwitchLabel", props: { htmlFor: B(() => {
    var o;
    return (o = t.value) == null ? void 0 : o.id;
  }), onClick(o) {
    t.value && (o.currentTarget.tagName === "LABEL" && o.preventDefault(), t.value.click(), t.value.focus({ preventScroll: !0 }));
  } } }), a = Pl({ name: "SwitchDescription" });
  return de(Bl, { switchRef: t, labelledby: i, describedby: a }), () => _e({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: r, name: "SwitchGroup" });
} });
J({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: null }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a;
  let o = (a = e.id) != null ? a : `headlessui-switch-${ot()}`, s = fe(Bl, null), [l, c] = qm(B(() => e.modelValue), (y) => n("update:modelValue", y), B(() => e.defaultChecked));
  function d() {
    c(!l.value);
  }
  let f = F(null), u = s === null ? f : s.switchRef, h = Mo(B(() => ({ as: e.as, type: r.type })), u);
  i({ el: u, $el: u });
  function p(y) {
    y.preventDefault(), d();
  }
  function m(y) {
    y.key === ze.Space ? (y.preventDefault(), d()) : y.key === ze.Enter && pg(y.currentTarget);
  }
  function v(y) {
    y.preventDefault();
  }
  let g = B(() => {
    var y, k;
    return (k = (y = oe(u)) == null ? void 0 : y.closest) == null ? void 0 : k.call(y, "form");
  });
  return se(() => {
    De([g], () => {
      if (!g.value || e.defaultChecked === void 0) return;
      function y() {
        c(e.defaultChecked);
      }
      return g.value.addEventListener("reset", y), () => {
        var k;
        (k = g.value) == null || k.removeEventListener("reset", y);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: y, value: k, form: E, tabIndex: x, ...S } = e, b = { checked: l.value }, w = { id: o, ref: u, role: "switch", type: h.value, tabIndex: x === -1 ? 0 : x, "aria-checked": l.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: p, onKeyup: m, onKeypress: v };
    return X(ce, [y != null && l.value != null ? X(bn, lg({ features: tn.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: E, disabled: S.disabled, name: y, value: k })) : null, _e({ ourProps: w, theirProps: { ...r, ...Do(S, ["modelValue", "defaultChecked"]) }, slot: b, attrs: r, slots: t, name: "Switch" })]);
  };
} });
function Wg(e) {
  let n = { called: !1 };
  return (...r) => {
    if (!n.called) return n.called = !0, e(...r);
  };
}
function Ma(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function Lr(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var Ga = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Ga || {});
function Ug(e, n) {
  let r = lr();
  if (!e) return r.dispose;
  let { transitionDuration: t, transitionDelay: i } = getComputedStyle(e), [a, o] = [t, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, d) => d - c);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => n("finished"), a + o) : n("finished"), r.add(() => n("cancelled")), r.dispose;
}
function Si(e, n, r, t, i, a) {
  let o = lr(), s = a !== void 0 ? Wg(a) : () => {
  };
  return Lr(e, ...i), Ma(e, ...n, ...r), o.nextFrame(() => {
    Lr(e, ...r), Ma(e, ...t), o.add(Ug(e, (l) => (Lr(e, ...t, ...n), Ma(e, ...i), s(l))));
  }), o.add(() => Lr(e, ...n, ...r, ...t, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function $n(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let Oo = Symbol("TransitionContext");
var _g = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(_g || {});
function qg() {
  return fe(Oo, null) !== null;
}
function Zg() {
  let e = fe(Oo, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Kg() {
  let e = fe(Ao, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Ao = Symbol("NestingContext");
function ra(e) {
  return "children" in e ? ra(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function zl(e) {
  let n = F([]), r = F(!1);
  se(() => r.value = !0), be(() => r.value = !1);
  function t(a, o = dn.Hidden) {
    let s = n.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (pt(o, { [dn.Unmount]() {
      n.value.splice(s, 1);
    }, [dn.Hidden]() {
      n.value[s].state = "hidden";
    } }), !ra(n) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = n.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : n.value.push({ id: a, state: "visible" }), () => t(a, dn.Unmount);
  }
  return { children: n, register: i, unregister: t };
}
let Nl = Ut.RenderStrategy, Gg = J({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  let a = F(0);
  function o() {
    a.value |= Ke.Opening, n("beforeEnter");
  }
  function s() {
    a.value &= ~Ke.Opening, n("afterEnter");
  }
  function l() {
    a.value |= Ke.Closing, n("beforeLeave");
  }
  function c() {
    a.value &= ~Ke.Closing, n("afterLeave");
  }
  if (!qg() && cg()) return () => X(Jg, { ...e, onBeforeEnter: o, onAfterEnter: s, onBeforeLeave: l, onAfterLeave: c }, t);
  let d = F(null), f = B(() => e.unmount ? dn.Unmount : dn.Hidden);
  i({ el: d, $el: d });
  let { show: u, appear: h } = Zg(), { register: p, unregister: m } = Kg(), v = F(u.value ? "visible" : "hidden"), g = { value: !0 }, y = ot(), k = { value: !1 }, E = zl(() => {
    !k.value && v.value !== "hidden" && (v.value = "hidden", m(y), c());
  });
  se(() => {
    let Y = p(y);
    be(Y);
  }), ve(() => {
    if (f.value === dn.Hidden && y) {
      if (u.value && v.value !== "visible") {
        v.value = "visible";
        return;
      }
      pt(v.value, { hidden: () => m(y), visible: () => p(y) });
    }
  });
  let x = $n(e.enter), S = $n(e.enterFrom), b = $n(e.enterTo), w = $n(e.entered), I = $n(e.leave), P = $n(e.leaveFrom), O = $n(e.leaveTo);
  se(() => {
    ve(() => {
      if (v.value === "visible") {
        let Y = oe(d);
        if (Y instanceof Comment && Y.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function W(Y) {
    let $ = g.value && !h.value, D = oe(d);
    !D || !(D instanceof HTMLElement) || $ || (k.value = !0, u.value && o(), u.value || l(), Y(u.value ? Si(D, x, S, b, w, (M) => {
      k.value = !1, M === Ga.Finished && s();
    }) : Si(D, I, P, O, w, (M) => {
      k.value = !1, M === Ga.Finished && (ra(E) || (v.value = "hidden", m(y), c()));
    })));
  }
  return se(() => {
    De([u], (Y, $, D) => {
      W(D), g.value = !1;
    }, { immediate: !0 });
  }), de(Ao, E), To(B(() => pt(v.value, { visible: Ke.Open, hidden: Ke.Closed }) | a.value)), () => {
    let { appear: Y, show: $, enter: D, enterFrom: M, enterTo: A, entered: T, leave: z, leaveFrom: N, leaveTo: R, ...H } = e, _ = { ref: d }, G = { ...H, ...h.value && u.value && ur.isServer ? { class: we([r.class, H.class, ...x, ...S]) } : {} };
    return _e({ theirProps: G, ourProps: _, slot: {}, slots: t, attrs: r, features: Nl, visible: v.value === "visible", name: "TransitionChild" });
  };
} }), Xg = Gg, Jg = J({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t }) {
  let i = Wn(), a = B(() => e.show === null && i !== null ? (i.value & Ke.Open) === Ke.Open : e.show);
  ve(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = F(a.value ? "visible" : "hidden"), s = zl(() => {
    o.value = "hidden";
  }), l = F(!0), c = { show: a, appear: B(() => e.appear || !l.value) };
  return se(() => {
    ve(() => {
      l.value = !1, a.value ? o.value = "visible" : ra(s) || (o.value = "hidden");
    });
  }), de(Ao, s), de(Oo, c), () => {
    let d = Do(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return _e({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...t, default: () => [X(Xg, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...r, ...f, ...d }, t.default)] }, attrs: {}, features: Nl, visible: o.value === "visible", name: "Transition" });
  };
} });
var on = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qg = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(on, function() {
    var r = 1e3, t = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", l = "hour", c = "day", d = "week", f = "month", u = "quarter", h = "year", p = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var D = ["th", "st", "nd", "rd"], M = $ % 100;
      return "[" + $ + (D[(M - 20) % 10] || D[M] || D[0]) + "]";
    } }, k = function($, D, M) {
      var A = String($);
      return !A || A.length >= D ? $ : "" + Array(D + 1 - A.length).join(M) + $;
    }, E = { s: k, z: function($) {
      var D = -$.utcOffset(), M = Math.abs(D), A = Math.floor(M / 60), T = M % 60;
      return (D <= 0 ? "+" : "-") + k(A, 2, "0") + ":" + k(T, 2, "0");
    }, m: function $(D, M) {
      if (D.date() < M.date()) return -$(M, D);
      var A = 12 * (M.year() - D.year()) + (M.month() - D.month()), T = D.clone().add(A, f), z = M - T < 0, N = D.clone().add(A + (z ? -1 : 1), f);
      return +(-(A + (M - T) / (z ? T - N : N - T)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: f, y: h, w: d, d: c, D: p, h: l, m: s, s: o, ms: a, Q: u }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, x = "en", S = {};
    S[x] = y;
    var b = "$isDayjsObject", w = function($) {
      return $ instanceof W || !(!$ || !$[b]);
    }, I = function $(D, M, A) {
      var T;
      if (!D) return x;
      if (typeof D == "string") {
        var z = D.toLowerCase();
        S[z] && (T = z), M && (S[z] = M, T = z);
        var N = D.split("-");
        if (!T && N.length > 1) return $(N[0]);
      } else {
        var R = D.name;
        S[R] = D, T = R;
      }
      return !A && T && (x = T), T || !A && x;
    }, P = function($, D) {
      if (w($)) return $.clone();
      var M = typeof D == "object" ? D : {};
      return M.date = $, M.args = arguments, new W(M);
    }, O = E;
    O.l = I, O.i = w, O.w = function($, D) {
      return P($, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var W = function() {
      function $(M) {
        this.$L = I(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[b] = !0;
      }
      var D = $.prototype;
      return D.parse = function(M) {
        this.$d = function(A) {
          var T = A.date, z = A.utc;
          if (T === null) return /* @__PURE__ */ new Date(NaN);
          if (O.u(T)) return /* @__PURE__ */ new Date();
          if (T instanceof Date) return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var N = T.match(v);
            if (N) {
              var R = N[2] - 1 || 0, H = (N[7] || "0").substring(0, 3);
              return z ? new Date(Date.UTC(N[1], R, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, H)) : new Date(N[1], R, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, H);
            }
          }
          return new Date(T);
        }(M), this.init();
      }, D.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, D.$utils = function() {
        return O;
      }, D.isValid = function() {
        return this.$d.toString() !== m;
      }, D.isSame = function(M, A) {
        var T = P(M);
        return this.startOf(A) <= T && T <= this.endOf(A);
      }, D.isAfter = function(M, A) {
        return P(M) < this.startOf(A);
      }, D.isBefore = function(M, A) {
        return this.endOf(A) < P(M);
      }, D.$g = function(M, A, T) {
        return O.u(M) ? this[A] : this.set(T, M);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(M, A) {
        var T = this, z = !!O.u(A) || A, N = O.p(M), R = function(Se, ue) {
          var ye = O.w(T.$u ? Date.UTC(T.$y, ue, Se) : new Date(T.$y, ue, Se), T);
          return z ? ye : ye.endOf(c);
        }, H = function(Se, ue) {
          return O.w(T.toDate()[Se].apply(T.toDate("s"), (z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), T);
        }, _ = this.$W, G = this.$M, le = this.$D, ge = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case h:
            return z ? R(1, 0) : R(31, 11);
          case f:
            return z ? R(1, G) : R(0, G + 1);
          case d:
            var xe = this.$locale().weekStart || 0, Ae = (_ < xe ? _ + 7 : _) - xe;
            return R(z ? le - Ae : le + (6 - Ae), G);
          case c:
          case p:
            return H(ge + "Hours", 0);
          case l:
            return H(ge + "Minutes", 1);
          case s:
            return H(ge + "Seconds", 2);
          case o:
            return H(ge + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, D.endOf = function(M) {
        return this.startOf(M, !1);
      }, D.$set = function(M, A) {
        var T, z = O.p(M), N = "set" + (this.$u ? "UTC" : ""), R = (T = {}, T[c] = N + "Date", T[p] = N + "Date", T[f] = N + "Month", T[h] = N + "FullYear", T[l] = N + "Hours", T[s] = N + "Minutes", T[o] = N + "Seconds", T[a] = N + "Milliseconds", T)[z], H = z === c ? this.$D + (A - this.$W) : A;
        if (z === f || z === h) {
          var _ = this.clone().set(p, 1);
          _.$d[R](H), _.init(), this.$d = _.set(p, Math.min(this.$D, _.daysInMonth())).$d;
        } else R && this.$d[R](H);
        return this.init(), this;
      }, D.set = function(M, A) {
        return this.clone().$set(M, A);
      }, D.get = function(M) {
        return this[O.p(M)]();
      }, D.add = function(M, A) {
        var T, z = this;
        M = Number(M);
        var N = O.p(A), R = function(G) {
          var le = P(z);
          return O.w(le.date(le.date() + Math.round(G * M)), z);
        };
        if (N === f) return this.set(f, this.$M + M);
        if (N === h) return this.set(h, this.$y + M);
        if (N === c) return R(1);
        if (N === d) return R(7);
        var H = (T = {}, T[s] = t, T[l] = i, T[o] = r, T)[N] || 1, _ = this.$d.getTime() + M * H;
        return O.w(_, this);
      }, D.subtract = function(M, A) {
        return this.add(-1 * M, A);
      }, D.format = function(M) {
        var A = this, T = this.$locale();
        if (!this.isValid()) return T.invalidDate || m;
        var z = M || "YYYY-MM-DDTHH:mm:ssZ", N = O.z(this), R = this.$H, H = this.$m, _ = this.$M, G = T.weekdays, le = T.months, ge = T.meridiem, xe = function(ue, ye, Te, Oe) {
          return ue && (ue[ye] || ue(A, z)) || Te[ye].slice(0, Oe);
        }, Ae = function(ue) {
          return O.s(R % 12 || 12, ue, "0");
        }, Se = ge || function(ue, ye, Te) {
          var Oe = ue < 12 ? "AM" : "PM";
          return Te ? Oe.toLowerCase() : Oe;
        };
        return z.replace(g, function(ue, ye) {
          return ye || function(Te) {
            switch (Te) {
              case "YY":
                return String(A.$y).slice(-2);
              case "YYYY":
                return O.s(A.$y, 4, "0");
              case "M":
                return _ + 1;
              case "MM":
                return O.s(_ + 1, 2, "0");
              case "MMM":
                return xe(T.monthsShort, _, le, 3);
              case "MMMM":
                return xe(le, _);
              case "D":
                return A.$D;
              case "DD":
                return O.s(A.$D, 2, "0");
              case "d":
                return String(A.$W);
              case "dd":
                return xe(T.weekdaysMin, A.$W, G, 2);
              case "ddd":
                return xe(T.weekdaysShort, A.$W, G, 3);
              case "dddd":
                return G[A.$W];
              case "H":
                return String(R);
              case "HH":
                return O.s(R, 2, "0");
              case "h":
                return Ae(1);
              case "hh":
                return Ae(2);
              case "a":
                return Se(R, H, !0);
              case "A":
                return Se(R, H, !1);
              case "m":
                return String(H);
              case "mm":
                return O.s(H, 2, "0");
              case "s":
                return String(A.$s);
              case "ss":
                return O.s(A.$s, 2, "0");
              case "SSS":
                return O.s(A.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(ue) || N.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(M, A, T) {
        var z, N = this, R = O.p(A), H = P(M), _ = (H.utcOffset() - this.utcOffset()) * t, G = this - H, le = function() {
          return O.m(N, H);
        };
        switch (R) {
          case h:
            z = le() / 12;
            break;
          case f:
            z = le();
            break;
          case u:
            z = le() / 3;
            break;
          case d:
            z = (G - _) / 6048e5;
            break;
          case c:
            z = (G - _) / 864e5;
            break;
          case l:
            z = G / i;
            break;
          case s:
            z = G / t;
            break;
          case o:
            z = G / r;
            break;
          default:
            z = G;
        }
        return T ? z : O.a(z);
      }, D.daysInMonth = function() {
        return this.endOf(f).$D;
      }, D.$locale = function() {
        return S[this.$L];
      }, D.locale = function(M, A) {
        if (!M) return this.$L;
        var T = this.clone(), z = I(M, A, !0);
        return z && (T.$L = z), T;
      }, D.clone = function() {
        return O.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), Y = W.prototype;
    return P.prototype = Y, [["$ms", a], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", h], ["$D", p]].forEach(function($) {
      Y[$[1]] = function(D) {
        return this.$g(D, $[0], $[1]);
      };
    }), P.extend = function($, D) {
      return $.$i || ($(D, W, P), $.$i = !0), P;
    }, P.locale = I, P.isDayjs = w, P.unix = function($) {
      return P(1e3 * $);
    }, P.en = S[x], P.Ls = S, P.p = {}, P;
  });
})(Qg);
var e0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(on, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
    return function(i, a, o) {
      var s, l = function(u, h, p) {
        p === void 0 && (p = {});
        var m = new Date(u), v = function(g, y) {
          y === void 0 && (y = {});
          var k = y.timeZoneName || "short", E = g + "|" + k, x = t[E];
          return x || (x = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: g, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: k }), t[E] = x), x;
        }(h, p);
        return v.formatToParts(m);
      }, c = function(u, h) {
        for (var p = l(u, h), m = [], v = 0; v < p.length; v += 1) {
          var g = p[v], y = g.type, k = g.value, E = r[y];
          E >= 0 && (m[E] = parseInt(k, 10));
        }
        var x = m[3], S = x === 24 ? 0 : x, b = m[0] + "-" + m[1] + "-" + m[2] + " " + S + ":" + m[4] + ":" + m[5] + ":000", w = +u;
        return (o.utc(b).valueOf() - (w -= w % 1e3)) / 6e4;
      }, d = a.prototype;
      d.tz = function(u, h) {
        u === void 0 && (u = s);
        var p, m = this.utcOffset(), v = this.toDate(), g = v.toLocaleString("en-US", { timeZone: u }), y = Math.round((v - new Date(g)) / 1e3 / 60), k = 15 * -Math.round(v.getTimezoneOffset() / 15) - y;
        if (!Number(k)) p = this.utcOffset(0, h);
        else if (p = o(g, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(k, !0), h) {
          var E = p.utcOffset();
          p = p.add(m - E, "minute");
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
        var y = function(S, b, w) {
          var I = S - 60 * b * 1e3, P = c(I, w);
          if (b === P) return [I, b];
          var O = c(I -= 60 * (P - b) * 1e3, w);
          return P === O ? [I, P] : [S - 60 * Math.min(P, O) * 1e3, Math.max(P, O)];
        }(o.utc(u, m).valueOf(), g, v), k = y[0], E = y[1], x = o(k).utcOffset(E);
        return x.$x.$timezone = v, x;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(u) {
        s = u;
      };
    };
  });
})(e0);
var t0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(on, function() {
    return function(r, t, i) {
      var a = t.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, s = function(f, u, h, p, m) {
        var v = f.name ? f : f.$locale(), g = o(v[u]), y = o(v[h]), k = g || y.map(function(x) {
          return x.slice(0, p);
        });
        if (!m) return k;
        var E = v.weekStart;
        return k.map(function(x, S) {
          return k[(S + (E || 0)) % 7];
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
})(t0);
var n0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(on, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, i, a) {
      var o = i.prototype, s = o.format;
      a.en.formats = r, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, d = function(f, u) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, p, m) {
            var v = m && m.toUpperCase();
            return p || u[m] || r[m] || u[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, y, k) {
              return y || k.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, d);
      };
    };
  });
})(n0);
var r0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(on, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(g) {
        this[v] = +g;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(g) {
        if (!g || g === "Z") return 0;
        var y = g.match(/([+-]|\d\d)/g), k = 60 * y[1] + (+y[2] || 0);
        return k === 0 ? 0 : y[0] === "+" ? -k : k;
      }(v);
    }], u = function(v) {
      var g = l[v];
      return g && (g.indexOf ? g : g.s.concat(g.f));
    }, h = function(v, g) {
      var y, k = l.meridiem;
      if (k) {
        for (var E = 1; E <= 24; E += 1) if (v.indexOf(k(E, 0, g)) > -1) {
          y = E > 12;
          break;
        }
      } else y = v === (g ? "pm" : "PM");
      return y;
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
      var g = l.ordinal, y = v.match(/\d+/);
      if (this.day = y[0], g) for (var k = 1; k <= 31; k += 1) g(k).replace(/\[|\]/g, "") === v && (this.day = k);
    }], w: [o, d("week")], ww: [a, d("week")], M: [o, d("month")], MM: [a, d("month")], MMM: [s, function(v) {
      var g = u("months"), y = (u("monthsShort") || g.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(v) + 1;
      if (y < 1) throw new Error();
      this.month = y % 12 || y;
    }], MMMM: [s, function(v) {
      var g = u("months").indexOf(v) + 1;
      if (g < 1) throw new Error();
      this.month = g % 12 || g;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, d("year")], Z: f, ZZ: f };
    function m(v) {
      var g, y;
      g = v, y = l && l.formats;
      for (var k = (v = g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, O, W) {
        var Y = W && W.toUpperCase();
        return O || y[W] || r[W] || y[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function($, D, M) {
          return D || M.slice(1);
        });
      })).match(t), E = k.length, x = 0; x < E; x += 1) {
        var S = k[x], b = p[S], w = b && b[0], I = b && b[1];
        k[x] = I ? { regex: w, parser: I } : S.replace(/^\[|\]$/g, "");
      }
      return function(P) {
        for (var O = {}, W = 0, Y = 0; W < E; W += 1) {
          var $ = k[W];
          if (typeof $ == "string") Y += $.length;
          else {
            var D = $.regex, M = $.parser, A = P.slice(Y), T = D.exec(A)[0];
            M.call(O, T), P = P.replace(T, "");
          }
        }
        return function(z) {
          var N = z.afternoon;
          if (N !== void 0) {
            var R = z.hours;
            N ? R < 12 && (z.hours += 12) : R === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(O), O;
      };
    }
    return function(v, g, y) {
      y.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var k = g.prototype, E = k.parse;
      k.parse = function(x) {
        var S = x.date, b = x.utc, w = x.args;
        this.$u = b;
        var I = w[1];
        if (typeof I == "string") {
          var P = w[2] === !0, O = w[3] === !0, W = P || O, Y = w[2];
          O && (Y = w[2]), l = this.$locale(), !P && Y && (l = y.Ls[Y]), this.$d = function(A, T, z, N) {
            try {
              if (["x", "X"].indexOf(T) > -1) return new Date((T === "X" ? 1e3 : 1) * A);
              var R = m(T)(A), H = R.year, _ = R.month, G = R.day, le = R.hours, ge = R.minutes, xe = R.seconds, Ae = R.milliseconds, Se = R.zone, ue = R.week, ye = /* @__PURE__ */ new Date(), Te = G || (H || _ ? 1 : ye.getDate()), Oe = H || ye.getFullYear(), Ve = 0;
              H && !_ || (Ve = _ > 0 ? _ - 1 : ye.getMonth());
              var Xe, st = le || 0, lt = ge || 0, ut = xe || 0, ct = Ae || 0;
              return Se ? new Date(Date.UTC(Oe, Ve, Te, st, lt, ut, ct + 60 * Se.offset * 1e3)) : z ? new Date(Date.UTC(Oe, Ve, Te, st, lt, ut, ct)) : (Xe = new Date(Oe, Ve, Te, st, lt, ut, ct), ue && (Xe = N(Xe).week(ue).toDate()), Xe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, I, b, y), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), W && S != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (I instanceof Array) for (var $ = I.length, D = 1; D <= $; D += 1) {
          w[1] = I[D - 1];
          var M = y.apply(this, w);
          if (M.isValid()) {
            this.$d = M.$d, this.$L = M.$L, this.init();
            break;
          }
          D === $ && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else E.call(this, x);
      };
    };
  });
})(r0);
var a0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(on, function() {
    return function(r, t, i) {
      t.prototype.isToday = function() {
        var a = "YYYY-MM-DD", o = i();
        return this.format(a) === o.format(a);
      };
    };
  });
})(a0);
var o0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(on, function() {
    return function(r, t, i) {
      t.prototype.isBetween = function(a, o, s, l) {
        var c = i(a), d = i(o), f = (l = l || "()")[0] === "(", u = l[1] === ")";
        return (f ? this.isAfter(c, s) : !this.isBefore(c, s)) && (u ? this.isBefore(d, s) : !this.isAfter(d, s)) || (f ? this.isBefore(c, s) : !this.isAfter(c, s)) && (u ? this.isAfter(d, s) : !this.isBefore(d, s));
      };
    };
  });
})(o0);
var i0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(on, function() {
    var r, t, i = 1e3, a = 6e4, o = 36e5, s = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, u = { years: c, months: d, days: s, hours: o, minutes: a, seconds: i, milliseconds: 1, weeks: 6048e5 }, h = function(S) {
      return S instanceof E;
    }, p = function(S, b, w) {
      return new E(S, w, b.$l);
    }, m = function(S) {
      return t.p(S) + "s";
    }, v = function(S) {
      return S < 0;
    }, g = function(S) {
      return v(S) ? Math.ceil(S) : Math.floor(S);
    }, y = function(S) {
      return Math.abs(S);
    }, k = function(S, b) {
      return S ? v(S) ? { negative: !0, format: "" + y(S) + b } : { negative: !1, format: "" + S + b } : { negative: !1, format: "" };
    }, E = function() {
      function S(w, I, P) {
        var O = this;
        if (this.$d = {}, this.$l = P, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return p(w * u[m(I)], this);
        if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object") return Object.keys(w).forEach(function($) {
          O.$d[m($)] = w[$];
        }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var W = w.match(f);
          if (W) {
            var Y = W.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = Y[0], this.$d.months = Y[1], this.$d.weeks = Y[2], this.$d.days = Y[3], this.$d.hours = Y[4], this.$d.minutes = Y[5], this.$d.seconds = Y[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var b = S.prototype;
      return b.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(I, P) {
          return I + (w.$d[P] || 0) * u[P];
        }, 0);
      }, b.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = g(w / c), w %= c, this.$d.months = g(w / d), w %= d, this.$d.days = g(w / s), w %= s, this.$d.hours = g(w / o), w %= o, this.$d.minutes = g(w / a), w %= a, this.$d.seconds = g(w / i), w %= i, this.$d.milliseconds = w;
      }, b.toISOString = function() {
        var w = k(this.$d.years, "Y"), I = k(this.$d.months, "M"), P = +this.$d.days || 0;
        this.$d.weeks && (P += 7 * this.$d.weeks);
        var O = k(P, "D"), W = k(this.$d.hours, "H"), Y = k(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3, $ = Math.round(1e3 * $) / 1e3);
        var D = k($, "S"), M = w.negative || I.negative || O.negative || W.negative || Y.negative || D.negative, A = W.format || Y.format || D.format ? "T" : "", T = (M ? "-" : "") + "P" + w.format + I.format + O.format + A + W.format + Y.format + D.format;
        return T === "P" || T === "-P" ? "P0D" : T;
      }, b.toJSON = function() {
        return this.toISOString();
      }, b.format = function(w) {
        var I = w || "YYYY-MM-DDTHH:mm:ss", P = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return I.replace(l, function(O, W) {
          return W || String(P[O]);
        });
      }, b.as = function(w) {
        return this.$ms / u[m(w)];
      }, b.get = function(w) {
        var I = this.$ms, P = m(w);
        return P === "milliseconds" ? I %= 1e3 : I = P === "weeks" ? g(I / u[P]) : this.$d[P], I || 0;
      }, b.add = function(w, I, P) {
        var O;
        return O = I ? w * u[m(I)] : h(w) ? w.$ms : p(w, this).$ms, p(this.$ms + O * (P ? -1 : 1), this);
      }, b.subtract = function(w, I) {
        return this.add(w, I, !0);
      }, b.locale = function(w) {
        var I = this.clone();
        return I.$l = w, I;
      }, b.clone = function() {
        return p(this.$ms, this);
      }, b.humanize = function(w) {
        return r().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, b.valueOf = function() {
        return this.asMilliseconds();
      }, b.milliseconds = function() {
        return this.get("milliseconds");
      }, b.asMilliseconds = function() {
        return this.as("milliseconds");
      }, b.seconds = function() {
        return this.get("seconds");
      }, b.asSeconds = function() {
        return this.as("seconds");
      }, b.minutes = function() {
        return this.get("minutes");
      }, b.asMinutes = function() {
        return this.as("minutes");
      }, b.hours = function() {
        return this.get("hours");
      }, b.asHours = function() {
        return this.as("hours");
      }, b.days = function() {
        return this.get("days");
      }, b.asDays = function() {
        return this.as("days");
      }, b.weeks = function() {
        return this.get("weeks");
      }, b.asWeeks = function() {
        return this.as("weeks");
      }, b.months = function() {
        return this.get("months");
      }, b.asMonths = function() {
        return this.as("months");
      }, b.years = function() {
        return this.get("years");
      }, b.asYears = function() {
        return this.as("years");
      }, S;
    }(), x = function(S, b, w) {
      return S.add(b.years() * w, "y").add(b.months() * w, "M").add(b.days() * w, "d").add(b.hours() * w, "h").add(b.minutes() * w, "m").add(b.seconds() * w, "s").add(b.milliseconds() * w, "ms");
    };
    return function(S, b, w) {
      r = w, t = w().$utils(), w.duration = function(O, W) {
        var Y = w.locale();
        return p(O, { $l: Y }, W);
      }, w.isDuration = h;
      var I = b.prototype.add, P = b.prototype.subtract;
      b.prototype.add = function(O, W) {
        return h(O) ? x(this, O, 1) : I.bind(this)(O, W);
      }, b.prototype.subtract = function(O, W) {
        return h(O) ? x(this, O, -1) : P.bind(this)(O, W);
      };
    };
  });
})(i0);
var s0 = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(on, function() {
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
})(s0);
Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({})).map(
    ([e, n]) => {
      var r;
      return [(r = e.match(/([\w-]*)\.js$/)) == null ? void 0 : r[1], n];
    }
  )
);
const l0 = ["data-test", "disabled"], ki = {
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
    return (t, i) => (L(), j("button", {
      class: we([
        "tc-font-bold tc-rounded tc-text-base",
        e.disabled ? "tc-bg-tp-grey-300 tc-text-white" : e.type === "danger" ? "tc-bg-red-500 tc-text-white hover:tc-bg-red-600 focus:tc-outline-none" : e.type === "gray" ? "tc-bg-tp-grey-300 tc-text-gray-400" : e.type === "black-outline" ? "tc-bg-transparent tc-border-2 tc-border-tp-grey-600 tc-rounded-md tc-px-4 tc-py-2" : e.type === "primary" ? "tc-bg-tonik-purple hover:tc-bg-tonik-purple-dark tc-text-white" : e.type === "primary-outline" ? "tc-bg-transparent tc-text-tp-primary tc-border-tp-primary tc-border hover:tc-bg-tp-primary hover:tc-text-white" : e.type === "secondary" ? "tc-bg-tp-secondary hover:tc-bg-tp-secondary-dark tc-text-gray-800" : e.type === "secondary-outline" ? "tc-bg-transparent tc-text-tp-secondary tc-border-tp-secondary tc-border hover:tc-bg-tp-secondary hover:tc-text-white" : "tc-bg-blue-500 tc-text-white hover:tc-bg-blue-700",
        e.size === "sm" ? "tc-text-sm tc-px-4 tc-py-2.5" : e.size === "md" ? "tc-text-base tc-px-5 tc-py-3" : e.size === "xs" ? "tc-text-xs tc-px-2 tc-py-1" : "tc-text-lg tc-px-8 tc-py-3"
      ]),
      "data-test": e.dataTest + "-button",
      disabled: e.disabled,
      onClick: i[0] || (i[0] = (a) => r("click"))
    }, [
      Ce(t.$slots, "default", {
        dataTest: e.dataTest + "-text"
      }, () => [
        He(ne(e.dataTest), 1)
      ])
    ], 10, l0));
  }
};
var Mi, u0, Ir;
Mi = function(e) {
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
}, Mi(Ir = { path: u0, exports: {}, require: function(e, n) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(n == null && Ir.path);
} }, Ir.exports), Ir.exports;
function Di(e, n, r) {
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
Di.debounce = Di;
function c0(e, n, r) {
  let t = F(r == null ? void 0 : r.value), i = B(() => e.value !== void 0);
  return [B(() => i.value ? e.value : t.value), function(a) {
    return i.value || (t.value = a), n == null ? void 0 : n(a);
  }];
}
function Co(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function fr() {
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
    return Co(() => {
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
    let t = fr();
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
var Ti;
let d0 = Symbol("headlessui.useid"), f0 = 0;
const it = (Ti = gn.useId) != null ? Ti : function() {
  return gn.inject(d0, () => `${++f0}`)();
};
function ie(e) {
  var n;
  if (e == null || e.value == null) return null;
  let r = (n = e.value.$el) != null ? n : e.value;
  return r instanceof Node ? r : null;
}
function vt(e, n, ...r) {
  if (e in n) {
    let i = n[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, vt), t;
}
var h0 = Object.defineProperty, p0 = (e, n, r) => n in e ? h0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Pi = (e, n, r) => (p0(e, typeof n != "symbol" ? n + "" : n, r), r);
let v0 = class {
  constructor() {
    Pi(this, "current", this.detect()), Pi(this, "currentId", 0);
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
}, hr = new v0();
function Ft(e) {
  if (hr.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = ie(e);
    if (n) return n.ownerDocument;
  }
  return document;
}
let Xa = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var rt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(rt || {}), nr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(nr || {}), m0 = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(m0 || {});
function pr(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Xa)).sort((n, r) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var aa = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(aa || {});
function oa(e, n = 0) {
  var r;
  return e === ((r = Ft(e)) == null ? void 0 : r.body) ? !1 : vt(n, { 0() {
    return e.matches(Xa);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(Xa)) return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
function Hl(e) {
  let n = Ft(e);
  Ee(() => {
    n && !oa(n.activeElement, 0) && mn(e);
  });
}
var g0 = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(g0 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function mn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let y0 = ["textarea", "input"].join(",");
function b0(e) {
  var n, r;
  return (r = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, y0)) != null ? r : !1;
}
function Vl(e, n = (r) => r) {
  return e.slice().sort((r, t) => {
    let i = n(r), a = n(t);
    if (i === null || a === null) return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function w0(e, n) {
  return At(pr(), n, { relativeTo: e });
}
function At(e, n, { sorted: r = !0, relativeTo: t = null, skipElements: i = [] } = {}) {
  var a;
  let o = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? r ? Vl(e) : e : pr(e);
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
  return n & 6 && b0(h) && h.select(), 2;
}
function Wl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function x0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function $0() {
  return Wl() || x0();
}
function Rr(e, n, r) {
  hr.isServer || ve((t) => {
    document.addEventListener(e, n, r), t(() => document.removeEventListener(e, n, r));
  });
}
function Ul(e, n, r) {
  hr.isServer || ve((t) => {
    window.addEventListener(e, n, r), t(() => window.removeEventListener(e, n, r));
  });
}
function Lo(e, n, r = B(() => !0)) {
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
    return !oa(s, aa.Loose) && s.tabIndex !== -1 && a.preventDefault(), n(a, s);
  }
  let i = F(null);
  Rr("pointerdown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Rr("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Rr("click", (a) => {
    $0() || i.value && (t(a, () => i.value), i.value = null);
  }, !0), Rr("touchend", (a) => t(a, () => a.target instanceof HTMLElement ? a.target : null), !0), Ul("blur", (a) => t(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Ei(e, n) {
  if (e) return e;
  let r = n ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function Io(e, n) {
  let r = F(Ei(e.value.type, e.value.as));
  return se(() => {
    r.value = Ei(e.value.type, e.value.as);
  }), ve(() => {
    var t;
    r.value || ie(n) && ie(n) instanceof HTMLButtonElement && !((t = ie(n)) != null && t.hasAttribute("type")) && (r.value = "button");
  }), r;
}
function Oi(e) {
  return [e.screenX, e.screenY];
}
function S0() {
  let e = F([-1, -1]);
  return { wasMoved(n) {
    let r = Oi(n);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(n) {
    e.value = Oi(n);
  } };
}
function k0({ container: e, accept: n, walk: r, enabled: t }) {
  ve(() => {
    let i = e.value;
    if (!i || t !== void 0 && !t.value) return;
    let a = Ft(e);
    if (!a) return;
    let o = Object.assign((l) => n(l), { acceptNode: n }), s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; s.nextNode(); ) r(s.currentNode);
  });
}
var _t = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(_t || {}), fn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(fn || {});
function qe({ visible: e = !0, features: n = 0, ourProps: r, theirProps: t, ...i }) {
  var a;
  let o = ql(t, r), s = Object.assign(i, { props: o });
  if (e || n & 2 && o.static) return Da(s);
  if (n & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return vt(l, { 0() {
      return null;
    }, 1() {
      return Da({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Da(s);
}
function Da({ props: e, attrs: n, slots: r, slot: t, name: i }) {
  var a, o;
  let { as: s, ...l } = Ro(e, ["unmount", "static"]), c = (a = r.default) == null ? void 0 : a.call(r, t), d = {};
  if (t) {
    let f = !1, u = [];
    for (let [h, p] of Object.entries(t)) typeof p == "boolean" && (f = !0), p === !0 && u.push(h);
    f && (d["data-headlessui-state"] = u.join(" "));
  }
  if (s === "template") {
    if (c = _l(c ?? []), Object.keys(l).length > 0 || Object.keys(n).length > 0) {
      let [f, ...u] = c ?? [];
      if (!D0(f) || u.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(n)).map((m) => m.trim()).filter((m, v, g) => g.indexOf(m) === v).sort((m, v) => m.localeCompare(v)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = ql((o = f.props) != null ? o : {}, l, d), p = Hr(f, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return X(s, Object.assign({}, l, d), { default: () => c });
}
function _l(e) {
  return e.flatMap((n) => n.type === ce ? _l(n.children) : [n]);
}
function ql(...e) {
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
function M0(e) {
  let n = Object.assign({}, e);
  for (let r in n) n[r] === void 0 && delete n[r];
  return n;
}
function Ro(e, n = []) {
  let r = Object.assign({}, e);
  for (let t of n) t in r && delete r[t];
  return r;
}
function D0(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var nn = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(nn || {});
let wn = J({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: r }) {
  return () => {
    var t;
    let { features: i, ...a } = e, o = { "aria-hidden": (i & 2) === 2 ? !0 : (t = a["aria-hidden"]) != null ? t : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return qe({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: n, name: "Hidden" });
  };
} }), Zl = Symbol("Context");
var Ge = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ge || {});
function T0() {
  return Un() !== null;
}
function Un() {
  return fe(Zl, null);
}
function Fo(e) {
  de(Zl, e);
}
var Ne = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ne || {});
function P0(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let Dn = [];
P0(() => {
  function e(n) {
    n.target instanceof HTMLElement && n.target !== document.body && Dn[0] !== n.target && (Dn.unshift(n.target), Dn = Dn.filter((r) => r != null && r.isConnected), Dn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function E0(e) {
  throw new Error("Unexpected object: " + e);
}
var kt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(kt || {});
function O0(e, n) {
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
      E0(e);
  }
}
function A0(e) {
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
function Yo(e, n, r, t) {
  hr.isServer || ve((i) => {
    e = e ?? window, e.addEventListener(n, r, t), i(() => e.removeEventListener(n, r, t));
  });
}
var Mt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Mt || {});
function jo() {
  let e = F(0);
  return Ul("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function Kl(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let t = ie(r);
    t instanceof HTMLElement && n.add(t);
  }
  return n;
}
var Gl = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Gl || {});
let Gn = Object.assign(J({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: F(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null);
  t({ el: i, $el: i });
  let a = B(() => Ft(i)), o = F(!1);
  se(() => o.value = !0), be(() => o.value = !1), L0({ ownerDocument: a }, B(() => o.value && !!(e.features & 16)));
  let s = I0({ ownerDocument: a, container: i, initialFocus: B(() => e.initialFocus) }, B(() => o.value && !!(e.features & 2)));
  R0({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, B(() => o.value && !!(e.features & 8)));
  let l = jo();
  function c(h) {
    let p = ie(i);
    p && ((m) => m())(() => {
      vt(l.value, { [Mt.Forwards]: () => {
        At(p, rt.First, { skipElements: [h.relatedTarget] });
      }, [Mt.Backwards]: () => {
        At(p, rt.Last, { skipElements: [h.relatedTarget] });
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
    let p = Kl(e.containers);
    ie(i) instanceof HTMLElement && p.add(ie(i));
    let m = h.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (Xl(p, m) || (d.value ? At(ie(i), vt(l.value, { [Mt.Forwards]: () => rt.Next, [Mt.Backwards]: () => rt.Previous }) | rt.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && mn(h.target)));
  }
  return () => {
    let h = {}, p = { ref: i, onKeydown: f, onFocusout: u }, { features: m, initialFocus: v, containers: g, ...y } = e;
    return X(ce, [!!(m & 4) && X(wn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: nn.Focusable }), qe({ ourProps: p, theirProps: { ...n, ...y }, slot: h, attrs: n, slots: r, name: "FocusTrap" }), !!(m & 4) && X(wn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: nn.Focusable })]);
  };
} }), { features: Gl });
function C0(e) {
  let n = F(Dn.slice());
  return De([e], ([r], [t]) => {
    t === !0 && r === !1 ? Co(() => {
      n.value.splice(0);
    }) : t === !1 && r === !0 && (n.value = Dn.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n.value.find((t) => t != null && t.isConnected)) != null ? r : null;
  };
}
function L0({ ownerDocument: e }, n) {
  let r = C0(n);
  se(() => {
    ve(() => {
      var t, i;
      n.value || ((t = e.value) == null ? void 0 : t.activeElement) === ((i = e.value) == null ? void 0 : i.body) && mn(r());
    }, { flush: "post" });
  }), be(() => {
    n.value && mn(r());
  });
}
function I0({ ownerDocument: e, container: n, initialFocus: r }, t) {
  let i = F(null), a = F(!1);
  return se(() => a.value = !0), be(() => a.value = !1), se(() => {
    De([n, r, t], (o, s) => {
      if (o.every((c, d) => (s == null ? void 0 : s[d]) === c) || !t.value) return;
      let l = ie(n);
      l && Co(() => {
        var c, d;
        if (!a.value) return;
        let f = ie(r), u = (c = e.value) == null ? void 0 : c.activeElement;
        if (f) {
          if (f === u) {
            i.value = u;
            return;
          }
        } else if (l.contains(u)) {
          i.value = u;
          return;
        }
        f ? mn(f) : At(l, rt.First | rt.NoScroll) === nr.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function R0({ ownerDocument: e, container: n, containers: r, previousActiveElement: t }, i) {
  var a;
  Yo((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value) return;
    let s = Kl(r);
    ie(n) instanceof HTMLElement && s.add(ie(n));
    let l = t.value;
    if (!l) return;
    let c = o.target;
    c && c instanceof HTMLElement ? Xl(s, c) ? (t.value = c, mn(c)) : (o.preventDefault(), o.stopPropagation(), mn(l)) : mn(t.value);
  }, !0);
}
function Xl(e, n) {
  for (let r of e) if (r.contains(n)) return !0;
  return !1;
}
function F0(e) {
  let n = In(e.getSnapshot());
  return be(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function Y0(e, n) {
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
function j0() {
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
function B0() {
  return Wl() ? { before({ doc: e, d: n, meta: r }) {
    function t(i) {
      return r.containers.flatMap((a) => a()).some((a) => a.contains(i));
    }
    n.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = fr();
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
function z0() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function N0(e) {
  let n = {};
  for (let r of e) Object.assign(n, r(n));
  return n;
}
let En = Y0(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var r;
  let t = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: fr(), meta: /* @__PURE__ */ new Set() };
  return t.count++, t.meta.add(n), this.set(e, t), this;
}, POP(e, n) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: r }) {
  let t = { doc: e, d: n, meta: N0(r) }, i = [B0(), j0(), z0()];
  i.forEach(({ before: a }) => a == null ? void 0 : a(t)), i.forEach(({ after: a }) => a == null ? void 0 : a(t));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
En.subscribe(() => {
  let e = En.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [r] of e) n.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let t = n.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !t || !i && t) && En.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && En.dispatch("TEARDOWN", r);
  }
});
function H0(e, n, r) {
  let t = F0(En), i = B(() => {
    let a = e.value ? t.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return De([e, n], ([a, o], [s], l) => {
    if (!a || !o) return;
    En.dispatch("PUSH", a, r);
    let c = !1;
    l(() => {
      c || (En.dispatch("POP", s ?? a, r), c = !0);
    });
  }, { immediate: !0 }), i;
}
let Ta = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map();
function Ai(e, n = F(!0)) {
  ve((r) => {
    var t;
    if (!n.value) return;
    let i = ie(e);
    if (!i) return;
    r(function() {
      var o;
      if (!i) return;
      let s = (o = Xn.get(i)) != null ? o : 1;
      if (s === 1 ? Xn.delete(i) : Xn.set(i, s - 1), s !== 1) return;
      let l = Ta.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, Ta.delete(i));
    });
    let a = (t = Xn.get(i)) != null ? t : 0;
    Xn.set(i, a + 1), a === 0 && (Ta.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
function Jl({ defaultContainers: e = [], portals: n, mainTreeNodeRef: r } = {}) {
  let t = F(null), i = Ft(t);
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
    return r != null ? null : X(wn, { features: nn.Hidden, ref: t });
  } };
}
function V0() {
  let e = F(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return X(wn, { features: nn.Hidden, ref: e });
  } };
}
let Ql = Symbol("ForcePortalRootContext");
function W0() {
  return fe(Ql, !1);
}
let Ja = J({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: r }) {
  return de(Ql, e.force), () => {
    let { force: t, ...i } = e;
    return qe({ theirProps: i, ourProps: {}, slot: {}, slots: n, attrs: r, name: "ForcePortalRoot" });
  };
} }), eu = Symbol("StackContext");
var Qa = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Qa || {});
function U0() {
  return fe(eu, () => {
  });
}
function _0({ type: e, enabled: n, element: r, onUpdate: t }) {
  let i = U0();
  function a(...o) {
    t == null || t(...o), i(...o);
  }
  se(() => {
    De(n, (o, s) => {
      o ? a(0, e, r) : s === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), be(() => {
    n.value && a(1, e, r);
  }), de(eu, a);
}
let tu = Symbol("DescriptionContext");
function q0() {
  let e = fe(tu, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function nu({ slot: e = F({}), name: n = "Description", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return de(tu, { register: i, slot: e, name: n, props: r }), B(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
J({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-description-${it()}`, a = q0();
  return se(() => be(a.register(i))), () => {
    let { name: o = "Description", slot: s = F({}), props: l = {} } = a, { ...c } = e, d = { ...Object.entries(l).reduce((f, [u, h]) => Object.assign(f, { [u]: re(h) }), {}), id: i };
    return qe({ ourProps: d, theirProps: c, slot: s.value, attrs: n, slots: r, name: o });
  };
} });
function Z0(e) {
  let n = Ft(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = n.getElementById("headlessui-portal-root");
  if (r) return r;
  let t = n.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(t);
}
const eo = /* @__PURE__ */ new WeakMap();
function K0(e) {
  var n;
  return (n = eo.get(e)) != null ? n : 0;
}
function Ci(e, n) {
  let r = n(K0(e));
  return r <= 0 ? eo.delete(e) : eo.set(e, r), r;
}
let ru = J({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = B(() => Ft(t)), a = W0(), o = fe(ou, null), s = F(a === !0 || o == null ? Z0(t.value) : o.resolveTarget());
  s.value && Ci(s.value, (u) => u + 1);
  let l = F(!1);
  se(() => {
    l.value = !0;
  }), ve(() => {
    a || o != null && (s.value = o.resolveTarget());
  });
  let c = fe(to, null), d = !1, f = Vr();
  return De(t, () => {
    if (d || !c) return;
    let u = ie(t);
    u && (be(c.register(u), f), d = !0);
  }), be(() => {
    var u, h;
    let p = (u = i.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    !p || s.value !== p || Ci(s.value, (m) => m - 1) || s.value.children.length > 0 || (h = s.value.parentElement) == null || h.removeChild(s.value);
  }), () => {
    if (!l.value || s.value === null) return null;
    let u = { ref: t, "data-headlessui-portal": "" };
    return X(rr, { to: s.value }, qe({ ourProps: u, theirProps: e, slot: {}, attrs: r, slots: n, name: "Portal" }));
  };
} }), to = Symbol("PortalParentContext");
function au() {
  let e = fe(to, null), n = F([]);
  function r(a) {
    return n.value.push(a), e && e.register(a), () => t(a);
  }
  function t(a) {
    let o = n.value.indexOf(a);
    o !== -1 && n.value.splice(o, 1), e && e.unregister(a);
  }
  let i = { register: r, unregister: t, portals: n };
  return [n, J({ name: "PortalWrapper", setup(a, { slots: o }) {
    return de(to, i), () => {
      var s;
      return (s = o.default) == null ? void 0 : s.call(o);
    };
  } })];
}
let ou = Symbol("PortalGroupContext"), G0 = J({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: r }) {
  let t = Rn({ resolveTarget() {
    return e.target;
  } });
  return de(ou, t), () => {
    let { target: i, ...a } = e;
    return qe({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: r, name: "PortalGroup" });
  };
} });
var X0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(X0 || {});
let no = Symbol("DialogContext");
function vr(e) {
  let n = fe(no, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, vr), r;
  }
  return n;
}
let Fr = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
J({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Fr }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a, o;
  let s = (a = e.id) != null ? a : `headlessui-dialog-${it()}`, l = F(!1);
  se(() => {
    l.value = !0;
  });
  let c = !1, d = B(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (c || (c = !0, console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), f = F(0), u = Un(), h = B(() => e.open === Fr && u !== null ? (u.value & Ge.Open) === Ge.Open : e.open), p = F(null), m = B(() => Ft(p));
  if (i({ el: p, $el: p }), !(e.open !== Fr || u !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof h.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h.value === Fr ? void 0 : e.open}`);
  let v = B(() => l.value && h.value ? 0 : 1), g = B(() => v.value === 0), y = B(() => f.value > 1), k = fe(no, null) !== null, [E, x] = au(), { resolveContainers: S, mainTreeNodeRef: b, MainTreeNode: w } = Jl({ portals: E, defaultContainers: [B(() => {
    var R;
    return (R = A.panelRef.value) != null ? R : p.value;
  })] }), I = B(() => y.value ? "parent" : "leaf"), P = B(() => u !== null ? (u.value & Ge.Closing) === Ge.Closing : !1), O = B(() => k || P.value ? !1 : g.value), W = B(() => {
    var R, H, _;
    return (_ = Array.from((H = (R = m.value) == null ? void 0 : R.querySelectorAll("body > *")) != null ? H : []).find((G) => G.id === "headlessui-portal-root" ? !1 : G.contains(ie(b)) && G instanceof HTMLElement)) != null ? _ : null;
  });
  Ai(W, O);
  let Y = B(() => y.value ? !0 : g.value), $ = B(() => {
    var R, H, _;
    return (_ = Array.from((H = (R = m.value) == null ? void 0 : R.querySelectorAll("[data-headlessui-portal]")) != null ? H : []).find((G) => G.contains(ie(b)) && G instanceof HTMLElement)) != null ? _ : null;
  });
  Ai($, Y), _0({ type: "Dialog", enabled: B(() => v.value === 0), element: p, onUpdate: (R, H) => {
    if (H === "Dialog") return vt(R, { [Qa.Add]: () => f.value += 1, [Qa.Remove]: () => f.value -= 1 });
  } });
  let D = nu({ name: "DialogDescription", slot: B(() => ({ open: h.value })) }), M = F(null), A = { titleId: M, panelRef: F(null), dialogState: v, setTitleId(R) {
    M.value !== R && (M.value = R);
  }, close() {
    n("close", !1);
  } };
  de(no, A);
  let T = B(() => !(!g.value || y.value));
  Lo(S, (R, H) => {
    R.preventDefault(), A.close(), Ee(() => H == null ? void 0 : H.focus());
  }, T);
  let z = B(() => !(y.value || v.value !== 0));
  Yo((o = m.value) == null ? void 0 : o.defaultView, "keydown", (R) => {
    z.value && (R.defaultPrevented || R.key === Ne.Escape && (R.preventDefault(), R.stopPropagation(), A.close()));
  });
  let N = B(() => !(P.value || v.value !== 0 || k));
  return H0(m, N, (R) => {
    var H;
    return { containers: [...(H = R.containers) != null ? H : [], S] };
  }), ve((R) => {
    if (v.value !== 0) return;
    let H = ie(p);
    if (!H) return;
    let _ = new ResizeObserver((G) => {
      for (let le of G) {
        let ge = le.target.getBoundingClientRect();
        ge.x === 0 && ge.y === 0 && ge.width === 0 && ge.height === 0 && A.close();
      }
    });
    _.observe(H), R(() => _.disconnect());
  }), () => {
    let { open: R, initialFocus: H, ..._ } = e, G = { ...r, ref: p, id: s, role: d.value, "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": M.value, "aria-describedby": D.value }, le = { open: v.value === 0 };
    return X(Ja, { force: !0 }, () => [X(ru, () => X(G0, { target: p.value }, () => X(Ja, { force: !1 }, () => X(Gn, { initialFocus: H, containers: S, features: g.value ? vt(I.value, { parent: Gn.features.RestoreFocus, leaf: Gn.features.All & ~Gn.features.FocusLock }) : Gn.features.None }, () => X(x, {}, () => qe({ ourProps: G, theirProps: { ..._, ...r }, slot: le, attrs: r, slots: t, visible: v.value === 0, features: _t.RenderStrategy | _t.Static, name: "Dialog" })))))), X(w)]);
  };
} });
J({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-overlay-${it()}`, a = vr("DialogOverlay");
  function o(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), a.close());
  }
  return () => {
    let { ...s } = e;
    return qe({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: s, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogOverlay" });
  };
} });
J({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-backdrop-${it()}`, o = vr("DialogBackdrop"), s = F(null);
  return t({ el: s, $el: s }), se(() => {
    if (o.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...l } = e, c = { id: a, ref: s, "aria-hidden": !0 };
    return X(Ja, { force: !0 }, () => X(ru, () => qe({ ourProps: c, theirProps: { ...n, ...l }, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogBackdrop" })));
  };
} });
J({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-dialog-panel-${it()}`, o = vr("DialogPanel");
  t({ el: o.panelRef, $el: o.panelRef });
  function s(l) {
    l.stopPropagation();
  }
  return () => {
    let { ...l } = e, c = { id: a, ref: o.panelRef, onClick: s };
    return qe({ ourProps: c, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogPanel" });
  };
} });
J({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-dialog-title-${it()}`, a = vr("DialogTitle");
  return se(() => {
    a.setTitleId(i), be(() => a.setTitleId(null));
  }), () => {
    let { ...o } = e;
    return qe({ ourProps: { id: i }, theirProps: o, slot: { open: a.dialogState.value === 0 }, attrs: n, slots: r, name: "DialogTitle" });
  };
} });
let Li = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ii(e) {
  var n, r;
  let t = (n = e.innerText) != null ? n : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return t;
  let a = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), a = !0;
  let o = a ? (r = i.innerText) != null ? r : "" : t;
  return Li.test(o) && (o = o.replace(Li, "")), o;
}
function J0(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string") return n.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let t = r.split(" ").map((i) => {
      let a = document.getElementById(i);
      if (a) {
        let o = a.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Ii(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (t.length > 0) return t.join(", ");
  }
  return Ii(e).trim();
}
function Q0(e) {
  let n = F(""), r = F("");
  return () => {
    let t = ie(e);
    if (!t) return "";
    let i = t.innerText;
    if (n.value === i) return r.value;
    let a = J0(t).trim().toLowerCase();
    return n.value = i, r.value = a, a;
  };
}
var ey = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ey || {}), ty = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(ty || {});
function ny(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let iu = Symbol("MenuContext");
function ia(e) {
  let n = fe(iu, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ia), r;
  }
  return n;
}
J({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(1), i = F(null), a = F(null), o = F([]), s = F(""), l = F(null), c = F(1);
  function d(u = (h) => h) {
    let h = l.value !== null ? o.value[l.value] : null, p = Vl(u(o.value.slice()), (v) => ie(v.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let f = { menuState: t, buttonRef: i, itemsRef: a, items: o, searchQuery: s, activeItemIndex: l, activationTrigger: c, closeMenu: () => {
    t.value = 1, l.value = null;
  }, openMenu: () => t.value = 0, goToItem(u, h, p) {
    let m = d(), v = O0(u === kt.Specific ? { focus: kt.Specific, id: h } : { focus: u }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
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
  return Lo([i, a], (u, h) => {
    var p;
    f.closeMenu(), oa(h, aa.Loose) || (u.preventDefault(), (p = ie(i)) == null || p.focus());
  }, B(() => t.value === 0)), de(iu, f), Fo(B(() => vt(t.value, { 0: Ge.Open, 1: Ge.Closed }))), () => {
    let u = { open: t.value === 0, close: f.closeMenu };
    return qe({ ourProps: {}, theirProps: e, slot: u, slots: n, attrs: r, name: "Menu" });
  };
} });
J({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-button-${it()}`, o = ia("MenuButton");
  t({ el: o.buttonRef, $el: o.buttonRef });
  function s(f) {
    switch (f.key) {
      case Ne.Space:
      case Ne.Enter:
      case Ne.ArrowDown:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Ee(() => {
          var u;
          (u = ie(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(kt.First);
        });
        break;
      case Ne.ArrowUp:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Ee(() => {
          var u;
          (u = ie(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(kt.Last);
        });
        break;
    }
  }
  function l(f) {
    switch (f.key) {
      case Ne.Space:
        f.preventDefault();
        break;
    }
  }
  function c(f) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Ee(() => {
      var u;
      return (u = ie(o.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), o.openMenu(), ny(() => {
      var u;
      return (u = ie(o.itemsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let d = Io(B(() => ({ as: e.as, type: n.type })), o.buttonRef);
  return () => {
    var f;
    let u = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: a, type: d.value, "aria-haspopup": "menu", "aria-controls": (f = ie(o.itemsRef)) == null ? void 0 : f.id, "aria-expanded": o.menuState.value === 0, onKeydown: s, onKeyup: l, onClick: c };
    return qe({ ourProps: p, theirProps: h, slot: u, attrs: n, slots: r, name: "MenuButton" });
  };
} });
J({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-items-${it()}`, o = ia("MenuItems"), s = F(null);
  t({ el: o.itemsRef, $el: o.itemsRef }), k0({ container: B(() => ie(o.itemsRef)), enabled: B(() => o.menuState.value === 0), accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function l(u) {
    var h;
    switch (s.value && clearTimeout(s.value), u.key) {
      case Ne.Space:
        if (o.searchQuery.value !== "") return u.preventDefault(), u.stopPropagation(), o.search(u.key);
      case Ne.Enter:
        if (u.preventDefault(), u.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = ie(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), Hl(ie(o.buttonRef));
        break;
      case Ne.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(kt.Next);
      case Ne.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(kt.Previous);
      case Ne.Home:
      case Ne.PageUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(kt.First);
      case Ne.End:
      case Ne.PageDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(kt.Last);
      case Ne.Escape:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Ee(() => {
          var p;
          return (p = ie(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case Ne.Tab:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Ee(() => w0(ie(o.buttonRef), u.shiftKey ? rt.Previous : rt.Next));
        break;
      default:
        u.key.length === 1 && (o.search(u.key), s.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function c(u) {
    switch (u.key) {
      case Ne.Space:
        u.preventDefault();
        break;
    }
  }
  let d = Un(), f = B(() => d !== null ? (d.value & Ge.Open) === Ge.Open : o.menuState.value === 0);
  return () => {
    var u, h;
    let p = { open: o.menuState.value === 0 }, { ...m } = e, v = { "aria-activedescendant": o.activeItemIndex.value === null || (u = o.items.value[o.activeItemIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (h = ie(o.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: l, onKeyup: c, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return qe({ ourProps: v, theirProps: m, slot: p, attrs: n, slots: r, features: _t.RenderStrategy | _t.Static, visible: f.value, name: "MenuItems" });
  };
} });
J({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-item-${it()}`, o = ia("MenuItem"), s = F(null);
  t({ el: s, $el: s });
  let l = B(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === a : !1), c = Q0(s), d = B(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: s }));
  se(() => o.registerItem(a, d)), be(() => o.unregisterItem(a)), ve(() => {
    o.menuState.value === 0 && l.value && o.activationTrigger.value !== 0 && Ee(() => {
      var g, y;
      return (y = (g = ie(s)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : y.call(g, { block: "nearest" });
    });
  });
  function f(g) {
    if (e.disabled) return g.preventDefault();
    o.closeMenu(), Hl(ie(o.buttonRef));
  }
  function u() {
    if (e.disabled) return o.goToItem(kt.Nothing);
    o.goToItem(kt.Specific, a);
  }
  let h = S0();
  function p(g) {
    h.update(g);
  }
  function m(g) {
    h.wasMoved(g) && (e.disabled || l.value || o.goToItem(kt.Specific, a, 0));
  }
  function v(g) {
    h.wasMoved(g) && (e.disabled || l.value && o.goToItem(kt.Nothing));
  }
  return () => {
    let { disabled: g, ...y } = e, k = { active: l.value, disabled: g, close: o.closeMenu };
    return qe({ ourProps: { id: a, ref: s, role: "menuitem", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, onClick: f, onFocus: u, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v }, theirProps: { ...r, ...y }, slot: k, attrs: r, slots: n, name: "MenuItem" });
  };
} });
var ry = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ry || {});
let su = Symbol("PopoverContext");
function sa(e) {
  let n = fe(su, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <${oy.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, sa), r;
  }
  return n;
}
let lu = Symbol("PopoverGroupContext");
function uu() {
  return fe(lu, null);
}
let cu = Symbol("PopoverPanelContext");
function ay() {
  return fe(cu, null);
}
let oy = J({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = F(null);
  t({ el: a, $el: a });
  let o = F(1), s = F(null), l = F(null), c = F(null), d = F(null), f = B(() => Ft(a)), u = B(() => {
    var x, S;
    if (!ie(s) || !ie(d)) return !1;
    for (let Y of document.querySelectorAll("body > *")) if (Number(Y == null ? void 0 : Y.contains(ie(s))) ^ Number(Y == null ? void 0 : Y.contains(ie(d)))) return !0;
    let b = pr(), w = b.indexOf(ie(s)), I = (w + b.length - 1) % b.length, P = (w + 1) % b.length, O = b[I], W = b[P];
    return !((x = ie(d)) != null && x.contains(O)) && !((S = ie(d)) != null && S.contains(W));
  }), h = { popoverState: o, buttonId: F(null), panelId: F(null), panel: d, button: s, isPortalled: u, beforePanelSentinel: l, afterPanelSentinel: c, togglePopover() {
    o.value = vt(o.value, { 0: 1, 1: 0 });
  }, closePopover() {
    o.value !== 1 && (o.value = 1);
  }, close(x) {
    h.closePopover();
    let S = x ? x instanceof HTMLElement ? x : x.value instanceof HTMLElement ? ie(x) : ie(h.button) : ie(h.button);
    S == null || S.focus();
  } };
  de(su, h), Fo(B(() => vt(o.value, { 0: Ge.Open, 1: Ge.Closed })));
  let p = { buttonId: h.buttonId, panelId: h.panelId, close() {
    h.closePopover();
  } }, m = uu(), v = m == null ? void 0 : m.registerPopover, [g, y] = au(), k = Jl({ mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef, portals: g, defaultContainers: [s, d] });
  function E() {
    var x, S, b, w;
    return (w = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null ? w : ((x = f.value) == null ? void 0 : x.activeElement) && (((S = ie(s)) == null ? void 0 : S.contains(f.value.activeElement)) || ((b = ie(d)) == null ? void 0 : b.contains(f.value.activeElement)));
  }
  return ve(() => v == null ? void 0 : v(p)), Yo((i = f.value) == null ? void 0 : i.defaultView, "focus", (x) => {
    var S, b;
    x.target !== window && x.target instanceof HTMLElement && o.value === 0 && (E() || s && d && (k.contains(x.target) || (S = ie(h.beforePanelSentinel)) != null && S.contains(x.target) || (b = ie(h.afterPanelSentinel)) != null && b.contains(x.target) || h.closePopover()));
  }, !0), Lo(k.resolveContainers, (x, S) => {
    var b;
    h.closePopover(), oa(S, aa.Loose) || (x.preventDefault(), (b = ie(s)) == null || b.focus());
  }, B(() => o.value === 0)), () => {
    let x = { open: o.value === 0, close: h.close };
    return X(ce, [X(y, {}, () => qe({ theirProps: { ...e, ...r }, ourProps: { ref: a }, slot: x, slots: n, attrs: r, name: "Popover" })), X(k.MainTreeNode)]);
  };
} });
J({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-button-${it()}`, o = sa("PopoverButton"), s = B(() => Ft(o.button));
  t({ el: o.button, $el: o.button }), se(() => {
    o.buttonId.value = a;
  }), be(() => {
    o.buttonId.value = null;
  });
  let l = uu(), c = l == null ? void 0 : l.closeOthers, d = ay(), f = B(() => d === null ? !1 : d.value === o.panelId.value), u = F(null), h = `headlessui-focus-sentinel-${it()}`;
  f.value || ve(() => {
    o.button.value = ie(u);
  });
  let p = Io(B(() => ({ as: e.as, type: n.type })), u);
  function m(x) {
    var S, b, w, I, P;
    if (f.value) {
      if (o.popoverState.value === 1) return;
      switch (x.key) {
        case Ne.Space:
        case Ne.Enter:
          x.preventDefault(), (b = (S = x.target).click) == null || b.call(S), o.closePopover(), (w = ie(o.button)) == null || w.focus();
          break;
      }
    } else switch (x.key) {
      case Ne.Space:
      case Ne.Enter:
        x.preventDefault(), x.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover();
        break;
      case Ne.Escape:
        if (o.popoverState.value !== 0) return c == null ? void 0 : c(o.buttonId.value);
        if (!ie(o.button) || (I = s.value) != null && I.activeElement && !((P = ie(o.button)) != null && P.contains(s.value.activeElement))) return;
        x.preventDefault(), x.stopPropagation(), o.closePopover();
        break;
    }
  }
  function v(x) {
    f.value || x.key === Ne.Space && x.preventDefault();
  }
  function g(x) {
    var S, b;
    e.disabled || (f.value ? (o.closePopover(), (S = ie(o.button)) == null || S.focus()) : (x.preventDefault(), x.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover(), (b = ie(o.button)) == null || b.focus()));
  }
  function y(x) {
    x.preventDefault(), x.stopPropagation();
  }
  let k = jo();
  function E() {
    let x = ie(o.panel);
    if (!x) return;
    function S() {
      vt(k.value, { [Mt.Forwards]: () => At(x, rt.First), [Mt.Backwards]: () => At(x, rt.Last) }) === nr.Error && At(pr().filter((b) => b.dataset.headlessuiFocusGuard !== "true"), vt(k.value, { [Mt.Forwards]: rt.Next, [Mt.Backwards]: rt.Previous }), { relativeTo: ie(o.button) });
    }
    S();
  }
  return () => {
    let x = o.popoverState.value === 0, S = { open: x }, { ...b } = e, w = f.value ? { ref: u, type: p.value, onKeydown: m, onClick: g } : { ref: u, id: a, type: p.value, "aria-expanded": o.popoverState.value === 0, "aria-controls": ie(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: v, onClick: g, onMousedown: y };
    return X(ce, [qe({ ourProps: w, theirProps: { ...n, ...b }, slot: S, attrs: n, slots: r, name: "PopoverButton" }), x && !f.value && o.isPortalled.value && X(wn, { id: h, features: nn.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: E })]);
  };
} });
J({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: r }) {
  let t = sa("PopoverOverlay"), i = `headlessui-popover-overlay-${it()}`, a = Un(), o = B(() => a !== null ? (a.value & Ge.Open) === Ge.Open : t.popoverState.value === 0);
  function s() {
    t.closePopover();
  }
  return () => {
    let l = { open: t.popoverState.value === 0 };
    return qe({ ourProps: { id: i, "aria-hidden": !0, onClick: s }, theirProps: e, slot: l, attrs: n, slots: r, features: _t.RenderStrategy | _t.Static, visible: o.value, name: "PopoverOverlay" });
  };
} });
J({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-panel-${it()}`, { focus: o } = e, s = sa("PopoverPanel"), l = B(() => Ft(s.panel)), c = `headlessui-focus-sentinel-before-${it()}`, d = `headlessui-focus-sentinel-after-${it()}`;
  t({ el: s.panel, $el: s.panel }), se(() => {
    s.panelId.value = a;
  }), be(() => {
    s.panelId.value = null;
  }), de(cu, s.panelId), ve(() => {
    var y, k;
    if (!o || s.popoverState.value !== 0 || !s.panel) return;
    let E = (y = l.value) == null ? void 0 : y.activeElement;
    (k = ie(s.panel)) != null && k.contains(E) || At(ie(s.panel), rt.First);
  });
  let f = Un(), u = B(() => f !== null ? (f.value & Ge.Open) === Ge.Open : s.popoverState.value === 0);
  function h(y) {
    var k, E;
    switch (y.key) {
      case Ne.Escape:
        if (s.popoverState.value !== 0 || !ie(s.panel) || l.value && !((k = ie(s.panel)) != null && k.contains(l.value.activeElement))) return;
        y.preventDefault(), y.stopPropagation(), s.closePopover(), (E = ie(s.button)) == null || E.focus();
        break;
    }
  }
  function p(y) {
    var k, E, x, S, b;
    let w = y.relatedTarget;
    w && ie(s.panel) && ((k = ie(s.panel)) != null && k.contains(w) || (s.closePopover(), ((x = (E = ie(s.beforePanelSentinel)) == null ? void 0 : E.contains) != null && x.call(E, w) || (b = (S = ie(s.afterPanelSentinel)) == null ? void 0 : S.contains) != null && b.call(S, w)) && w.focus({ preventScroll: !0 })));
  }
  let m = jo();
  function v() {
    let y = ie(s.panel);
    if (!y) return;
    function k() {
      vt(m.value, { [Mt.Forwards]: () => {
        var E;
        At(y, rt.First) === nr.Error && ((E = ie(s.afterPanelSentinel)) == null || E.focus());
      }, [Mt.Backwards]: () => {
        var E;
        (E = ie(s.button)) == null || E.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function g() {
    let y = ie(s.panel);
    if (!y) return;
    function k() {
      vt(m.value, { [Mt.Forwards]: () => {
        let E = ie(s.button), x = ie(s.panel);
        if (!E) return;
        let S = pr(), b = S.indexOf(E), w = S.slice(0, b + 1), I = [...S.slice(b + 1), ...w];
        for (let P of I.slice()) if (P.dataset.headlessuiFocusGuard === "true" || x != null && x.contains(P)) {
          let O = I.indexOf(P);
          O !== -1 && I.splice(O, 1);
        }
        At(I, rt.First, { sorted: !1 });
      }, [Mt.Backwards]: () => {
        var E;
        At(y, rt.Previous) === nr.Error && ((E = ie(s.button)) == null || E.focus());
      } });
    }
    k();
  }
  return () => {
    let y = { open: s.popoverState.value === 0, close: s.close }, { focus: k, ...E } = e, x = { ref: s.panel, id: a, onKeydown: h, onFocusout: o && s.popoverState.value === 0 ? p : void 0, tabIndex: -1 };
    return qe({ ourProps: x, theirProps: { ...n, ...E }, attrs: n, slot: y, slots: { ...r, default: (...S) => {
      var b;
      return [X(ce, [u.value && s.isPortalled.value && X(wn, { id: c, ref: s.beforePanelSentinel, features: nn.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v }), (b = r.default) == null ? void 0 : b.call(r, ...S), u.value && s.isPortalled.value && X(wn, { id: d, ref: s.afterPanelSentinel, features: nn.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: _t.RenderStrategy | _t.Static, visible: u.value, name: "PopoverPanel" });
  };
} });
J({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null), a = In([]), o = B(() => Ft(i)), s = V0();
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
  return de(lu, { registerPopover: c, unregisterPopover: l, isFocusWithinPopoverGroup: d, closeOthers: f, mainTreeNodeRef: s.mainTreeNodeRef }), () => X(ce, [qe({ ourProps: { ref: i }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: r, name: "PopoverGroup" }), X(s.MainTreeNode)]);
} });
let du = Symbol("LabelContext");
function fu() {
  let e = fe(du, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, fu), n;
  }
  return e;
}
function iy({ slot: e = {}, name: n = "Label", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return de(du, { register: i, slot: e, name: n, props: r }), B(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
J({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-label-${it()}`, a = fu();
  return se(() => be(a.register(i))), () => {
    let { name: o = "Label", slot: s = {}, props: l = {} } = a, { passive: c, ...d } = e, f = { ...Object.entries(l).reduce((u, [h, p]) => Object.assign(u, { [h]: re(p) }), {}), id: i };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), qe({ ourProps: f, theirProps: d, slot: s, attrs: r, slots: n, name: o });
  };
} });
let hu = Symbol("GroupContext");
J({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = iy({ name: "SwitchLabel", props: { htmlFor: B(() => {
    var o;
    return (o = t.value) == null ? void 0 : o.id;
  }), onClick(o) {
    t.value && (o.currentTarget.tagName === "LABEL" && o.preventDefault(), t.value.click(), t.value.focus({ preventScroll: !0 }));
  } } }), a = nu({ name: "SwitchDescription" });
  return de(hu, { switchRef: t, labelledby: i, describedby: a }), () => qe({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: r, name: "SwitchGroup" });
} });
J({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: null }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a;
  let o = (a = e.id) != null ? a : `headlessui-switch-${it()}`, s = fe(hu, null), [l, c] = c0(B(() => e.modelValue), (y) => n("update:modelValue", y), B(() => e.defaultChecked));
  function d() {
    c(!l.value);
  }
  let f = F(null), u = s === null ? f : s.switchRef, h = Io(B(() => ({ as: e.as, type: r.type })), u);
  i({ el: u, $el: u });
  function p(y) {
    y.preventDefault(), d();
  }
  function m(y) {
    y.key === Ne.Space ? (y.preventDefault(), d()) : y.key === Ne.Enter && A0(y.currentTarget);
  }
  function v(y) {
    y.preventDefault();
  }
  let g = B(() => {
    var y, k;
    return (k = (y = ie(u)) == null ? void 0 : y.closest) == null ? void 0 : k.call(y, "form");
  });
  return se(() => {
    De([g], () => {
      if (!g.value || e.defaultChecked === void 0) return;
      function y() {
        c(e.defaultChecked);
      }
      return g.value.addEventListener("reset", y), () => {
        var k;
        (k = g.value) == null || k.removeEventListener("reset", y);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: y, value: k, form: E, tabIndex: x, ...S } = e, b = { checked: l.value }, w = { id: o, ref: u, role: "switch", type: h.value, tabIndex: x === -1 ? 0 : x, "aria-checked": l.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: p, onKeyup: m, onKeypress: v };
    return X(ce, [y != null && l.value != null ? X(wn, M0({ features: nn.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: E, disabled: S.disabled, name: y, value: k })) : null, qe({ ourProps: w, theirProps: { ...r, ...Ro(S, ["modelValue", "defaultChecked"]) }, slot: b, attrs: r, slots: t, name: "Switch" })]);
  };
} });
function sy(e) {
  let n = { called: !1 };
  return (...r) => {
    if (!n.called) return n.called = !0, e(...r);
  };
}
function Pa(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function Yr(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var ro = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ro || {});
function ly(e, n) {
  let r = fr();
  if (!e) return r.dispose;
  let { transitionDuration: t, transitionDelay: i } = getComputedStyle(e), [a, o] = [t, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, d) => d - c);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => n("finished"), a + o) : n("finished"), r.add(() => n("cancelled")), r.dispose;
}
function Ri(e, n, r, t, i, a) {
  let o = fr(), s = a !== void 0 ? sy(a) : () => {
  };
  return Yr(e, ...i), Pa(e, ...n, ...r), o.nextFrame(() => {
    Yr(e, ...r), Pa(e, ...t), o.add(ly(e, (l) => (Yr(e, ...t, ...n), Pa(e, ...i), s(l))));
  }), o.add(() => Yr(e, ...n, ...r, ...t, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function Sn(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let Bo = Symbol("TransitionContext");
var uy = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(uy || {});
function cy() {
  return fe(Bo, null) !== null;
}
function dy() {
  let e = fe(Bo, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function fy() {
  let e = fe(zo, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let zo = Symbol("NestingContext");
function la(e) {
  return "children" in e ? la(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function pu(e) {
  let n = F([]), r = F(!1);
  se(() => r.value = !0), be(() => r.value = !1);
  function t(a, o = fn.Hidden) {
    let s = n.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (vt(o, { [fn.Unmount]() {
      n.value.splice(s, 1);
    }, [fn.Hidden]() {
      n.value[s].state = "hidden";
    } }), !la(n) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = n.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : n.value.push({ id: a, state: "visible" }), () => t(a, fn.Unmount);
  }
  return { children: n, register: i, unregister: t };
}
let vu = _t.RenderStrategy, hy = J({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  let a = F(0);
  function o() {
    a.value |= Ge.Opening, n("beforeEnter");
  }
  function s() {
    a.value &= ~Ge.Opening, n("afterEnter");
  }
  function l() {
    a.value |= Ge.Closing, n("beforeLeave");
  }
  function c() {
    a.value &= ~Ge.Closing, n("afterLeave");
  }
  if (!cy() && T0()) return () => X(vy, { ...e, onBeforeEnter: o, onAfterEnter: s, onBeforeLeave: l, onAfterLeave: c }, t);
  let d = F(null), f = B(() => e.unmount ? fn.Unmount : fn.Hidden);
  i({ el: d, $el: d });
  let { show: u, appear: h } = dy(), { register: p, unregister: m } = fy(), v = F(u.value ? "visible" : "hidden"), g = { value: !0 }, y = it(), k = { value: !1 }, E = pu(() => {
    !k.value && v.value !== "hidden" && (v.value = "hidden", m(y), c());
  });
  se(() => {
    let Y = p(y);
    be(Y);
  }), ve(() => {
    if (f.value === fn.Hidden && y) {
      if (u.value && v.value !== "visible") {
        v.value = "visible";
        return;
      }
      vt(v.value, { hidden: () => m(y), visible: () => p(y) });
    }
  });
  let x = Sn(e.enter), S = Sn(e.enterFrom), b = Sn(e.enterTo), w = Sn(e.entered), I = Sn(e.leave), P = Sn(e.leaveFrom), O = Sn(e.leaveTo);
  se(() => {
    ve(() => {
      if (v.value === "visible") {
        let Y = ie(d);
        if (Y instanceof Comment && Y.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function W(Y) {
    let $ = g.value && !h.value, D = ie(d);
    !D || !(D instanceof HTMLElement) || $ || (k.value = !0, u.value && o(), u.value || l(), Y(u.value ? Ri(D, x, S, b, w, (M) => {
      k.value = !1, M === ro.Finished && s();
    }) : Ri(D, I, P, O, w, (M) => {
      k.value = !1, M === ro.Finished && (la(E) || (v.value = "hidden", m(y), c()));
    })));
  }
  return se(() => {
    De([u], (Y, $, D) => {
      W(D), g.value = !1;
    }, { immediate: !0 });
  }), de(zo, E), Fo(B(() => vt(v.value, { visible: Ge.Open, hidden: Ge.Closed }) | a.value)), () => {
    let { appear: Y, show: $, enter: D, enterFrom: M, enterTo: A, entered: T, leave: z, leaveFrom: N, leaveTo: R, ...H } = e, _ = { ref: d }, G = { ...H, ...h.value && u.value && hr.isServer ? { class: we([r.class, H.class, ...x, ...S]) } : {} };
    return qe({ theirProps: G, ourProps: _, slot: {}, slots: t, attrs: r, features: vu, visible: v.value === "visible", name: "TransitionChild" });
  };
} }), py = hy, vy = J({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: r, slots: t }) {
  let i = Un(), a = B(() => e.show === null && i !== null ? (i.value & Ge.Open) === Ge.Open : e.show);
  ve(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = F(a.value ? "visible" : "hidden"), s = pu(() => {
    o.value = "hidden";
  }), l = F(!0), c = { show: a, appear: B(() => e.appear || !l.value) };
  return se(() => {
    ve(() => {
      l.value = !1, a.value ? o.value = "visible" : la(s) || (o.value = "hidden");
    });
  }), de(zo, s), de(Bo, c), () => {
    let d = Ro(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return qe({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...t, default: () => [X(py, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...r, ...f, ...d }, t.default)] }, attrs: {}, features: vu, visible: o.value === "visible", name: "Transition" });
  };
} });
var sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, my = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(sn, function() {
    var r = 1e3, t = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", l = "hour", c = "day", d = "week", f = "month", u = "quarter", h = "year", p = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var D = ["th", "st", "nd", "rd"], M = $ % 100;
      return "[" + $ + (D[(M - 20) % 10] || D[M] || D[0]) + "]";
    } }, k = function($, D, M) {
      var A = String($);
      return !A || A.length >= D ? $ : "" + Array(D + 1 - A.length).join(M) + $;
    }, E = { s: k, z: function($) {
      var D = -$.utcOffset(), M = Math.abs(D), A = Math.floor(M / 60), T = M % 60;
      return (D <= 0 ? "+" : "-") + k(A, 2, "0") + ":" + k(T, 2, "0");
    }, m: function $(D, M) {
      if (D.date() < M.date()) return -$(M, D);
      var A = 12 * (M.year() - D.year()) + (M.month() - D.month()), T = D.clone().add(A, f), z = M - T < 0, N = D.clone().add(A + (z ? -1 : 1), f);
      return +(-(A + (M - T) / (z ? T - N : N - T)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: f, y: h, w: d, d: c, D: p, h: l, m: s, s: o, ms: a, Q: u }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, x = "en", S = {};
    S[x] = y;
    var b = "$isDayjsObject", w = function($) {
      return $ instanceof W || !(!$ || !$[b]);
    }, I = function $(D, M, A) {
      var T;
      if (!D) return x;
      if (typeof D == "string") {
        var z = D.toLowerCase();
        S[z] && (T = z), M && (S[z] = M, T = z);
        var N = D.split("-");
        if (!T && N.length > 1) return $(N[0]);
      } else {
        var R = D.name;
        S[R] = D, T = R;
      }
      return !A && T && (x = T), T || !A && x;
    }, P = function($, D) {
      if (w($)) return $.clone();
      var M = typeof D == "object" ? D : {};
      return M.date = $, M.args = arguments, new W(M);
    }, O = E;
    O.l = I, O.i = w, O.w = function($, D) {
      return P($, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var W = function() {
      function $(M) {
        this.$L = I(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[b] = !0;
      }
      var D = $.prototype;
      return D.parse = function(M) {
        this.$d = function(A) {
          var T = A.date, z = A.utc;
          if (T === null) return /* @__PURE__ */ new Date(NaN);
          if (O.u(T)) return /* @__PURE__ */ new Date();
          if (T instanceof Date) return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var N = T.match(v);
            if (N) {
              var R = N[2] - 1 || 0, H = (N[7] || "0").substring(0, 3);
              return z ? new Date(Date.UTC(N[1], R, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, H)) : new Date(N[1], R, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, H);
            }
          }
          return new Date(T);
        }(M), this.init();
      }, D.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, D.$utils = function() {
        return O;
      }, D.isValid = function() {
        return this.$d.toString() !== m;
      }, D.isSame = function(M, A) {
        var T = P(M);
        return this.startOf(A) <= T && T <= this.endOf(A);
      }, D.isAfter = function(M, A) {
        return P(M) < this.startOf(A);
      }, D.isBefore = function(M, A) {
        return this.endOf(A) < P(M);
      }, D.$g = function(M, A, T) {
        return O.u(M) ? this[A] : this.set(T, M);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(M, A) {
        var T = this, z = !!O.u(A) || A, N = O.p(M), R = function(Se, ue) {
          var ye = O.w(T.$u ? Date.UTC(T.$y, ue, Se) : new Date(T.$y, ue, Se), T);
          return z ? ye : ye.endOf(c);
        }, H = function(Se, ue) {
          return O.w(T.toDate()[Se].apply(T.toDate("s"), (z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), T);
        }, _ = this.$W, G = this.$M, le = this.$D, ge = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case h:
            return z ? R(1, 0) : R(31, 11);
          case f:
            return z ? R(1, G) : R(0, G + 1);
          case d:
            var xe = this.$locale().weekStart || 0, Ae = (_ < xe ? _ + 7 : _) - xe;
            return R(z ? le - Ae : le + (6 - Ae), G);
          case c:
          case p:
            return H(ge + "Hours", 0);
          case l:
            return H(ge + "Minutes", 1);
          case s:
            return H(ge + "Seconds", 2);
          case o:
            return H(ge + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, D.endOf = function(M) {
        return this.startOf(M, !1);
      }, D.$set = function(M, A) {
        var T, z = O.p(M), N = "set" + (this.$u ? "UTC" : ""), R = (T = {}, T[c] = N + "Date", T[p] = N + "Date", T[f] = N + "Month", T[h] = N + "FullYear", T[l] = N + "Hours", T[s] = N + "Minutes", T[o] = N + "Seconds", T[a] = N + "Milliseconds", T)[z], H = z === c ? this.$D + (A - this.$W) : A;
        if (z === f || z === h) {
          var _ = this.clone().set(p, 1);
          _.$d[R](H), _.init(), this.$d = _.set(p, Math.min(this.$D, _.daysInMonth())).$d;
        } else R && this.$d[R](H);
        return this.init(), this;
      }, D.set = function(M, A) {
        return this.clone().$set(M, A);
      }, D.get = function(M) {
        return this[O.p(M)]();
      }, D.add = function(M, A) {
        var T, z = this;
        M = Number(M);
        var N = O.p(A), R = function(G) {
          var le = P(z);
          return O.w(le.date(le.date() + Math.round(G * M)), z);
        };
        if (N === f) return this.set(f, this.$M + M);
        if (N === h) return this.set(h, this.$y + M);
        if (N === c) return R(1);
        if (N === d) return R(7);
        var H = (T = {}, T[s] = t, T[l] = i, T[o] = r, T)[N] || 1, _ = this.$d.getTime() + M * H;
        return O.w(_, this);
      }, D.subtract = function(M, A) {
        return this.add(-1 * M, A);
      }, D.format = function(M) {
        var A = this, T = this.$locale();
        if (!this.isValid()) return T.invalidDate || m;
        var z = M || "YYYY-MM-DDTHH:mm:ssZ", N = O.z(this), R = this.$H, H = this.$m, _ = this.$M, G = T.weekdays, le = T.months, ge = T.meridiem, xe = function(ue, ye, Te, Oe) {
          return ue && (ue[ye] || ue(A, z)) || Te[ye].slice(0, Oe);
        }, Ae = function(ue) {
          return O.s(R % 12 || 12, ue, "0");
        }, Se = ge || function(ue, ye, Te) {
          var Oe = ue < 12 ? "AM" : "PM";
          return Te ? Oe.toLowerCase() : Oe;
        };
        return z.replace(g, function(ue, ye) {
          return ye || function(Te) {
            switch (Te) {
              case "YY":
                return String(A.$y).slice(-2);
              case "YYYY":
                return O.s(A.$y, 4, "0");
              case "M":
                return _ + 1;
              case "MM":
                return O.s(_ + 1, 2, "0");
              case "MMM":
                return xe(T.monthsShort, _, le, 3);
              case "MMMM":
                return xe(le, _);
              case "D":
                return A.$D;
              case "DD":
                return O.s(A.$D, 2, "0");
              case "d":
                return String(A.$W);
              case "dd":
                return xe(T.weekdaysMin, A.$W, G, 2);
              case "ddd":
                return xe(T.weekdaysShort, A.$W, G, 3);
              case "dddd":
                return G[A.$W];
              case "H":
                return String(R);
              case "HH":
                return O.s(R, 2, "0");
              case "h":
                return Ae(1);
              case "hh":
                return Ae(2);
              case "a":
                return Se(R, H, !0);
              case "A":
                return Se(R, H, !1);
              case "m":
                return String(H);
              case "mm":
                return O.s(H, 2, "0");
              case "s":
                return String(A.$s);
              case "ss":
                return O.s(A.$s, 2, "0");
              case "SSS":
                return O.s(A.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(ue) || N.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(M, A, T) {
        var z, N = this, R = O.p(A), H = P(M), _ = (H.utcOffset() - this.utcOffset()) * t, G = this - H, le = function() {
          return O.m(N, H);
        };
        switch (R) {
          case h:
            z = le() / 12;
            break;
          case f:
            z = le();
            break;
          case u:
            z = le() / 3;
            break;
          case d:
            z = (G - _) / 6048e5;
            break;
          case c:
            z = (G - _) / 864e5;
            break;
          case l:
            z = G / i;
            break;
          case s:
            z = G / t;
            break;
          case o:
            z = G / r;
            break;
          default:
            z = G;
        }
        return T ? z : O.a(z);
      }, D.daysInMonth = function() {
        return this.endOf(f).$D;
      }, D.$locale = function() {
        return S[this.$L];
      }, D.locale = function(M, A) {
        if (!M) return this.$L;
        var T = this.clone(), z = I(M, A, !0);
        return z && (T.$L = z), T;
      }, D.clone = function() {
        return O.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), Y = W.prototype;
    return P.prototype = Y, [["$ms", a], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", h], ["$D", p]].forEach(function($) {
      Y[$[1]] = function(D) {
        return this.$g(D, $[0], $[1]);
      };
    }), P.extend = function($, D) {
      return $.$i || ($(D, W, P), $.$i = !0), P;
    }, P.locale = I, P.isDayjs = w, P.unix = function($) {
      return P(1e3 * $);
    }, P.en = S[x], P.Ls = S, P.p = {}, P;
  });
})(my);
var gy = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(sn, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
    return function(i, a, o) {
      var s, l = function(u, h, p) {
        p === void 0 && (p = {});
        var m = new Date(u), v = function(g, y) {
          y === void 0 && (y = {});
          var k = y.timeZoneName || "short", E = g + "|" + k, x = t[E];
          return x || (x = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: g, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: k }), t[E] = x), x;
        }(h, p);
        return v.formatToParts(m);
      }, c = function(u, h) {
        for (var p = l(u, h), m = [], v = 0; v < p.length; v += 1) {
          var g = p[v], y = g.type, k = g.value, E = r[y];
          E >= 0 && (m[E] = parseInt(k, 10));
        }
        var x = m[3], S = x === 24 ? 0 : x, b = m[0] + "-" + m[1] + "-" + m[2] + " " + S + ":" + m[4] + ":" + m[5] + ":000", w = +u;
        return (o.utc(b).valueOf() - (w -= w % 1e3)) / 6e4;
      }, d = a.prototype;
      d.tz = function(u, h) {
        u === void 0 && (u = s);
        var p, m = this.utcOffset(), v = this.toDate(), g = v.toLocaleString("en-US", { timeZone: u }), y = Math.round((v - new Date(g)) / 1e3 / 60), k = 15 * -Math.round(v.getTimezoneOffset() / 15) - y;
        if (!Number(k)) p = this.utcOffset(0, h);
        else if (p = o(g, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(k, !0), h) {
          var E = p.utcOffset();
          p = p.add(m - E, "minute");
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
        var y = function(S, b, w) {
          var I = S - 60 * b * 1e3, P = c(I, w);
          if (b === P) return [I, b];
          var O = c(I -= 60 * (P - b) * 1e3, w);
          return P === O ? [I, P] : [S - 60 * Math.min(P, O) * 1e3, Math.max(P, O)];
        }(o.utc(u, m).valueOf(), g, v), k = y[0], E = y[1], x = o(k).utcOffset(E);
        return x.$x.$timezone = v, x;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(u) {
        s = u;
      };
    };
  });
})(gy);
var yy = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(sn, function() {
    return function(r, t, i) {
      var a = t.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, s = function(f, u, h, p, m) {
        var v = f.name ? f : f.$locale(), g = o(v[u]), y = o(v[h]), k = g || y.map(function(x) {
          return x.slice(0, p);
        });
        if (!m) return k;
        var E = v.weekStart;
        return k.map(function(x, S) {
          return k[(S + (E || 0)) % 7];
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
})(yy);
var by = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(sn, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, i, a) {
      var o = i.prototype, s = o.format;
      a.en.formats = r, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, d = function(f, u) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, p, m) {
            var v = m && m.toUpperCase();
            return p || u[m] || r[m] || u[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, y, k) {
              return y || k.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, d);
      };
    };
  });
})(by);
var wy = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(sn, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(g) {
        this[v] = +g;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(g) {
        if (!g || g === "Z") return 0;
        var y = g.match(/([+-]|\d\d)/g), k = 60 * y[1] + (+y[2] || 0);
        return k === 0 ? 0 : y[0] === "+" ? -k : k;
      }(v);
    }], u = function(v) {
      var g = l[v];
      return g && (g.indexOf ? g : g.s.concat(g.f));
    }, h = function(v, g) {
      var y, k = l.meridiem;
      if (k) {
        for (var E = 1; E <= 24; E += 1) if (v.indexOf(k(E, 0, g)) > -1) {
          y = E > 12;
          break;
        }
      } else y = v === (g ? "pm" : "PM");
      return y;
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
      var g = l.ordinal, y = v.match(/\d+/);
      if (this.day = y[0], g) for (var k = 1; k <= 31; k += 1) g(k).replace(/\[|\]/g, "") === v && (this.day = k);
    }], w: [o, d("week")], ww: [a, d("week")], M: [o, d("month")], MM: [a, d("month")], MMM: [s, function(v) {
      var g = u("months"), y = (u("monthsShort") || g.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(v) + 1;
      if (y < 1) throw new Error();
      this.month = y % 12 || y;
    }], MMMM: [s, function(v) {
      var g = u("months").indexOf(v) + 1;
      if (g < 1) throw new Error();
      this.month = g % 12 || g;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, d("year")], Z: f, ZZ: f };
    function m(v) {
      var g, y;
      g = v, y = l && l.formats;
      for (var k = (v = g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, O, W) {
        var Y = W && W.toUpperCase();
        return O || y[W] || r[W] || y[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function($, D, M) {
          return D || M.slice(1);
        });
      })).match(t), E = k.length, x = 0; x < E; x += 1) {
        var S = k[x], b = p[S], w = b && b[0], I = b && b[1];
        k[x] = I ? { regex: w, parser: I } : S.replace(/^\[|\]$/g, "");
      }
      return function(P) {
        for (var O = {}, W = 0, Y = 0; W < E; W += 1) {
          var $ = k[W];
          if (typeof $ == "string") Y += $.length;
          else {
            var D = $.regex, M = $.parser, A = P.slice(Y), T = D.exec(A)[0];
            M.call(O, T), P = P.replace(T, "");
          }
        }
        return function(z) {
          var N = z.afternoon;
          if (N !== void 0) {
            var R = z.hours;
            N ? R < 12 && (z.hours += 12) : R === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(O), O;
      };
    }
    return function(v, g, y) {
      y.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var k = g.prototype, E = k.parse;
      k.parse = function(x) {
        var S = x.date, b = x.utc, w = x.args;
        this.$u = b;
        var I = w[1];
        if (typeof I == "string") {
          var P = w[2] === !0, O = w[3] === !0, W = P || O, Y = w[2];
          O && (Y = w[2]), l = this.$locale(), !P && Y && (l = y.Ls[Y]), this.$d = function(A, T, z, N) {
            try {
              if (["x", "X"].indexOf(T) > -1) return new Date((T === "X" ? 1e3 : 1) * A);
              var R = m(T)(A), H = R.year, _ = R.month, G = R.day, le = R.hours, ge = R.minutes, xe = R.seconds, Ae = R.milliseconds, Se = R.zone, ue = R.week, ye = /* @__PURE__ */ new Date(), Te = G || (H || _ ? 1 : ye.getDate()), Oe = H || ye.getFullYear(), Ve = 0;
              H && !_ || (Ve = _ > 0 ? _ - 1 : ye.getMonth());
              var Xe, st = le || 0, lt = ge || 0, ut = xe || 0, ct = Ae || 0;
              return Se ? new Date(Date.UTC(Oe, Ve, Te, st, lt, ut, ct + 60 * Se.offset * 1e3)) : z ? new Date(Date.UTC(Oe, Ve, Te, st, lt, ut, ct)) : (Xe = new Date(Oe, Ve, Te, st, lt, ut, ct), ue && (Xe = N(Xe).week(ue).toDate()), Xe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, I, b, y), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), W && S != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (I instanceof Array) for (var $ = I.length, D = 1; D <= $; D += 1) {
          w[1] = I[D - 1];
          var M = y.apply(this, w);
          if (M.isValid()) {
            this.$d = M.$d, this.$L = M.$L, this.init();
            break;
          }
          D === $ && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else E.call(this, x);
      };
    };
  });
})(wy);
var xy = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(sn, function() {
    return function(r, t, i) {
      t.prototype.isToday = function() {
        var a = "YYYY-MM-DD", o = i();
        return this.format(a) === o.format(a);
      };
    };
  });
})(xy);
var $y = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(sn, function() {
    return function(r, t, i) {
      t.prototype.isBetween = function(a, o, s, l) {
        var c = i(a), d = i(o), f = (l = l || "()")[0] === "(", u = l[1] === ")";
        return (f ? this.isAfter(c, s) : !this.isBefore(c, s)) && (u ? this.isBefore(d, s) : !this.isAfter(d, s)) || (f ? this.isBefore(c, s) : !this.isAfter(c, s)) && (u ? this.isAfter(d, s) : !this.isBefore(d, s));
      };
    };
  });
})($y);
var Sy = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(sn, function() {
    var r, t, i = 1e3, a = 6e4, o = 36e5, s = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, u = { years: c, months: d, days: s, hours: o, minutes: a, seconds: i, milliseconds: 1, weeks: 6048e5 }, h = function(S) {
      return S instanceof E;
    }, p = function(S, b, w) {
      return new E(S, w, b.$l);
    }, m = function(S) {
      return t.p(S) + "s";
    }, v = function(S) {
      return S < 0;
    }, g = function(S) {
      return v(S) ? Math.ceil(S) : Math.floor(S);
    }, y = function(S) {
      return Math.abs(S);
    }, k = function(S, b) {
      return S ? v(S) ? { negative: !0, format: "" + y(S) + b } : { negative: !1, format: "" + S + b } : { negative: !1, format: "" };
    }, E = function() {
      function S(w, I, P) {
        var O = this;
        if (this.$d = {}, this.$l = P, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return p(w * u[m(I)], this);
        if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object") return Object.keys(w).forEach(function($) {
          O.$d[m($)] = w[$];
        }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var W = w.match(f);
          if (W) {
            var Y = W.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = Y[0], this.$d.months = Y[1], this.$d.weeks = Y[2], this.$d.days = Y[3], this.$d.hours = Y[4], this.$d.minutes = Y[5], this.$d.seconds = Y[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var b = S.prototype;
      return b.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(I, P) {
          return I + (w.$d[P] || 0) * u[P];
        }, 0);
      }, b.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = g(w / c), w %= c, this.$d.months = g(w / d), w %= d, this.$d.days = g(w / s), w %= s, this.$d.hours = g(w / o), w %= o, this.$d.minutes = g(w / a), w %= a, this.$d.seconds = g(w / i), w %= i, this.$d.milliseconds = w;
      }, b.toISOString = function() {
        var w = k(this.$d.years, "Y"), I = k(this.$d.months, "M"), P = +this.$d.days || 0;
        this.$d.weeks && (P += 7 * this.$d.weeks);
        var O = k(P, "D"), W = k(this.$d.hours, "H"), Y = k(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3, $ = Math.round(1e3 * $) / 1e3);
        var D = k($, "S"), M = w.negative || I.negative || O.negative || W.negative || Y.negative || D.negative, A = W.format || Y.format || D.format ? "T" : "", T = (M ? "-" : "") + "P" + w.format + I.format + O.format + A + W.format + Y.format + D.format;
        return T === "P" || T === "-P" ? "P0D" : T;
      }, b.toJSON = function() {
        return this.toISOString();
      }, b.format = function(w) {
        var I = w || "YYYY-MM-DDTHH:mm:ss", P = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return I.replace(l, function(O, W) {
          return W || String(P[O]);
        });
      }, b.as = function(w) {
        return this.$ms / u[m(w)];
      }, b.get = function(w) {
        var I = this.$ms, P = m(w);
        return P === "milliseconds" ? I %= 1e3 : I = P === "weeks" ? g(I / u[P]) : this.$d[P], I || 0;
      }, b.add = function(w, I, P) {
        var O;
        return O = I ? w * u[m(I)] : h(w) ? w.$ms : p(w, this).$ms, p(this.$ms + O * (P ? -1 : 1), this);
      }, b.subtract = function(w, I) {
        return this.add(w, I, !0);
      }, b.locale = function(w) {
        var I = this.clone();
        return I.$l = w, I;
      }, b.clone = function() {
        return p(this.$ms, this);
      }, b.humanize = function(w) {
        return r().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, b.valueOf = function() {
        return this.asMilliseconds();
      }, b.milliseconds = function() {
        return this.get("milliseconds");
      }, b.asMilliseconds = function() {
        return this.as("milliseconds");
      }, b.seconds = function() {
        return this.get("seconds");
      }, b.asSeconds = function() {
        return this.as("seconds");
      }, b.minutes = function() {
        return this.get("minutes");
      }, b.asMinutes = function() {
        return this.as("minutes");
      }, b.hours = function() {
        return this.get("hours");
      }, b.asHours = function() {
        return this.as("hours");
      }, b.days = function() {
        return this.get("days");
      }, b.asDays = function() {
        return this.as("days");
      }, b.weeks = function() {
        return this.get("weeks");
      }, b.asWeeks = function() {
        return this.as("weeks");
      }, b.months = function() {
        return this.get("months");
      }, b.asMonths = function() {
        return this.as("months");
      }, b.years = function() {
        return this.get("years");
      }, b.asYears = function() {
        return this.as("years");
      }, S;
    }(), x = function(S, b, w) {
      return S.add(b.years() * w, "y").add(b.months() * w, "M").add(b.days() * w, "d").add(b.hours() * w, "h").add(b.minutes() * w, "m").add(b.seconds() * w, "s").add(b.milliseconds() * w, "ms");
    };
    return function(S, b, w) {
      r = w, t = w().$utils(), w.duration = function(O, W) {
        var Y = w.locale();
        return p(O, { $l: Y }, W);
      }, w.isDuration = h;
      var I = b.prototype.add, P = b.prototype.subtract;
      b.prototype.add = function(O, W) {
        return h(O) ? x(this, O, 1) : I.bind(this)(O, W);
      }, b.prototype.subtract = function(O, W) {
        return h(O) ? x(this, O, -1) : P.bind(this)(O, W);
      };
    };
  });
})(Sy);
var ky = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(sn, function() {
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
})(ky);
Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({})).map(
    ([e, n]) => {
      var r;
      return [(r = e.match(/([\w-]*)\.js$/)) == null ? void 0 : r[1], n];
    }
  )
);
var Fi, My, jr;
Fi = function(e) {
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
}, Fi(jr = { path: My, exports: {}, require: function(e, n) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(n == null && jr.path);
} }, jr.exports), jr.exports;
function Yi(e, n, r) {
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
Yi.debounce = Yi;
function Dy(e, n, r) {
  let t = F(r == null ? void 0 : r.value), i = B(() => e.value !== void 0);
  return [B(() => i.value ? e.value : t.value), function(a) {
    return i.value || (t.value = a), n == null ? void 0 : n(a);
  }];
}
var ji;
let Ty = Symbol("headlessui.useid"), Py = 0;
const Lt = (ji = gn.useId) != null ? ji : function() {
  return gn.inject(Ty, () => `${++Py}`)();
};
function he(e) {
  var n;
  if (e == null || e.value == null) return null;
  let r = (n = e.value.$el) != null ? n : e.value;
  return r instanceof Node ? r : null;
}
function qt(e, n, ...r) {
  if (e in n) {
    let i = n[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let t = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, qt), t;
}
var Ey = Object.defineProperty, Oy = (e, n, r) => n in e ? Ey(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Bi = (e, n, r) => (Oy(e, typeof n != "symbol" ? n + "" : n, r), r);
let Ay = class {
  constructor() {
    Bi(this, "current", this.detect()), Bi(this, "currentId", 0);
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
}, ua = new Ay();
function Zt(e) {
  if (ua.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let n = he(e);
    if (n) return n.ownerDocument;
  }
  return document;
}
let ao = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Yt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Yt || {}), Nr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Nr || {}), Cy = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Cy || {});
function mr(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ao)).sort((n, r) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ca = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ca || {});
function da(e, n = 0) {
  var r;
  return e === ((r = Zt(e)) == null ? void 0 : r.body) ? !1 : qt(n, { 0() {
    return e.matches(ao);
  }, 1() {
    let t = e;
    for (; t !== null; ) {
      if (t.matches(ao)) return !0;
      t = t.parentElement;
    }
    return !1;
  } });
}
function mu(e) {
  let n = Zt(e);
  Ee(() => {
    n && !da(n.activeElement, 0) && Iy(e);
  });
}
var Ly = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Ly || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Iy(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ry = ["textarea", "input"].join(",");
function Fy(e) {
  var n, r;
  return (r = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Ry)) != null ? r : !1;
}
function gu(e, n = (r) => r) {
  return e.slice().sort((r, t) => {
    let i = n(r), a = n(t);
    if (i === null || a === null) return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Yy(e, n) {
  return hn(mr(), n, { relativeTo: e });
}
function hn(e, n, { sorted: r = !0, relativeTo: t = null, skipElements: i = [] } = {}) {
  var a;
  let o = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? r ? gu(e) : e : mr(e);
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
  return n & 6 && Fy(h) && h.select(), 2;
}
function jy() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function By() {
  return /Android/gi.test(window.navigator.userAgent);
}
function zy() {
  return jy() || By();
}
function Br(e, n, r) {
  ua.isServer || ve((t) => {
    document.addEventListener(e, n, r), t(() => document.removeEventListener(e, n, r));
  });
}
function yu(e, n, r) {
  ua.isServer || ve((t) => {
    window.addEventListener(e, n, r), t(() => window.removeEventListener(e, n, r));
  });
}
function bu(e, n, r = B(() => !0)) {
  function t(a, o) {
    if (!r.value || a.defaultPrevented) return;
    let s = o(a);
    if (s === null || !s.getRootNode().contains(s)) return;
    let l = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of l) {
      if (c === null) continue;
      let d = c instanceof HTMLElement ? c : he(c);
      if (d != null && d.contains(s) || a.composed && a.composedPath().includes(d)) return;
    }
    return !da(s, ca.Loose) && s.tabIndex !== -1 && a.preventDefault(), n(a, s);
  }
  let i = F(null);
  Br("pointerdown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Br("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), Br("click", (a) => {
    zy() || i.value && (t(a, () => i.value), i.value = null);
  }, !0), Br("touchend", (a) => t(a, () => a.target instanceof HTMLElement ? a.target : null), !0), yu("blur", (a) => t(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function zi(e, n) {
  if (e) return e;
  let r = n ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function No(e, n) {
  let r = F(zi(e.value.type, e.value.as));
  return se(() => {
    r.value = zi(e.value.type, e.value.as);
  }), ve(() => {
    var t;
    r.value || he(n) && he(n) instanceof HTMLButtonElement && !((t = he(n)) != null && t.hasAttribute("type")) && (r.value = "button");
  }), r;
}
function Ni(e) {
  return [e.screenX, e.screenY];
}
function Ny() {
  let e = F([-1, -1]);
  return { wasMoved(n) {
    let r = Ni(n);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(n) {
    e.value = Ni(n);
  } };
}
function Hy({ container: e, accept: n, walk: r, enabled: t }) {
  ve(() => {
    let i = e.value;
    if (!i || t !== void 0 && !t.value) return;
    let a = Zt(e);
    if (!a) return;
    let o = Object.assign((l) => n(l), { acceptNode: n }), s = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, o, !1);
    for (; s.nextNode(); ) r(s.currentNode);
  });
}
var Cn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Cn || {}), Vy = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Vy || {});
function mt({ visible: e = !0, features: n = 0, ourProps: r, theirProps: t, ...i }) {
  var a;
  let o = xu(t, r), s = Object.assign(i, { props: o });
  if (e || n & 2 && o.static) return Ea(s);
  if (n & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return qt(l, { 0() {
      return null;
    }, 1() {
      return Ea({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ea(s);
}
function Ea({ props: e, attrs: n, slots: r, slot: t, name: i }) {
  var a, o;
  let { as: s, ...l } = $u(e, ["unmount", "static"]), c = (a = r.default) == null ? void 0 : a.call(r, t), d = {};
  if (t) {
    let f = !1, u = [];
    for (let [h, p] of Object.entries(t)) typeof p == "boolean" && (f = !0), p === !0 && u.push(h);
    f && (d["data-headlessui-state"] = u.join(" "));
  }
  if (s === "template") {
    if (c = wu(c ?? []), Object.keys(l).length > 0 || Object.keys(n).length > 0) {
      let [f, ...u] = c ?? [];
      if (!Uy(f) || u.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(n)).map((m) => m.trim()).filter((m, v, g) => g.indexOf(m) === v).sort((m, v) => m.localeCompare(v)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let h = xu((o = f.props) != null ? o : {}, l, d), p = Hr(f, h, !0);
      for (let m in h) m.startsWith("on") && (p.props || (p.props = {}), p.props[m] = h[m]);
      return p;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return X(s, Object.assign({}, l, d), { default: () => c });
}
function wu(e) {
  return e.flatMap((n) => n.type === ce ? wu(n.children) : [n]);
}
function xu(...e) {
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
function Wy(e) {
  let n = Object.assign({}, e);
  for (let r in n) n[r] === void 0 && delete n[r];
  return n;
}
function $u(e, n = []) {
  let r = Object.assign({}, e);
  for (let t of n) t in r && delete r[t];
  return r;
}
function Uy(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Ln = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ln || {});
let Hn = J({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: r }) {
  return () => {
    var t;
    let { features: i, ...a } = e, o = { "aria-hidden": (i & 2) === 2 ? !0 : (t = a["aria-hidden"]) != null ? t : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return mt({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: n, name: "Hidden" });
  };
} }), Su = Symbol("Context");
var jt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(jt || {});
function Ho() {
  return fe(Su, null);
}
function ku(e) {
  de(Su, e);
}
var We = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(We || {});
function _y(e) {
  throw new Error("Unexpected object: " + e);
}
var Dt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Dt || {});
function qy(e, n) {
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
      _y(e);
  }
}
function Zy(e) {
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
function Ky(e, n, r, t) {
  ua.isServer || ve((i) => {
    e = e ?? window, e.addEventListener(n, r, t), i(() => e.removeEventListener(n, r, t));
  });
}
var Xt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Xt || {});
function Mu() {
  let e = F(0);
  return yu("keydown", (n) => {
    n.key === "Tab" && (e.value = n.shiftKey ? 1 : 0);
  }), e;
}
function Gy({ defaultContainers: e = [], portals: n, mainTreeNodeRef: r } = {}) {
  let t = F(null), i = Zt(t);
  function a() {
    var o, s, l;
    let c = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? c.push(d) : "value" in d && d.value instanceof HTMLElement && c.push(d.value));
    if (n != null && n.value) for (let d of n.value) c.push(d);
    for (let d of (o = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? o : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(he(t)) || d.contains((l = (s = he(t)) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || c.some((f) => d.contains(f)) || c.push(d));
    return c;
  }
  return { resolveContainers: a, contains(o) {
    return a().some((s) => s.contains(o));
  }, mainTreeNodeRef: t, MainTreeNode() {
    return r != null ? null : X(Hn, { features: Ln.Hidden, ref: t });
  } };
}
function Xy() {
  let e = F(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return X(Hn, { features: Ln.Hidden, ref: e });
  } };
}
let Du = Symbol("ForcePortalRootContext");
function Jy() {
  return fe(Du, !1);
}
J({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: r }) {
  return de(Du, e.force), () => {
    let { force: t, ...i } = e;
    return mt({ theirProps: i, ourProps: {}, slot: {}, slots: n, attrs: r, name: "ForcePortalRoot" });
  };
} });
let Tu = Symbol("DescriptionContext");
function Qy() {
  let e = fe(Tu, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function eb({ slot: e = F({}), name: n = "Description", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return de(Tu, { register: i, slot: e, name: n, props: r }), B(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
J({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-description-${Lt()}`, a = Qy();
  return se(() => be(a.register(i))), () => {
    let { name: o = "Description", slot: s = F({}), props: l = {} } = a, { ...c } = e, d = { ...Object.entries(l).reduce((f, [u, h]) => Object.assign(f, { [u]: re(h) }), {}), id: i };
    return mt({ ourProps: d, theirProps: c, slot: s.value, attrs: n, slots: r, name: o });
  };
} });
function tb(e) {
  let n = Zt(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = n.getElementById("headlessui-portal-root");
  if (r) return r;
  let t = n.createElement("div");
  return t.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(t);
}
const oo = /* @__PURE__ */ new WeakMap();
function nb(e) {
  var n;
  return (n = oo.get(e)) != null ? n : 0;
}
function Hi(e, n) {
  let r = n(nb(e));
  return r <= 0 ? oo.delete(e) : oo.set(e, r), r;
}
J({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = B(() => Zt(t)), a = Jy(), o = fe(Pu, null), s = F(a === !0 || o == null ? tb(t.value) : o.resolveTarget());
  s.value && Hi(s.value, (u) => u + 1);
  let l = F(!1);
  se(() => {
    l.value = !0;
  }), ve(() => {
    a || o != null && (s.value = o.resolveTarget());
  });
  let c = fe(io, null), d = !1, f = Vr();
  return De(t, () => {
    if (d || !c) return;
    let u = he(t);
    u && (be(c.register(u), f), d = !0);
  }), be(() => {
    var u, h;
    let p = (u = i.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    !p || s.value !== p || Hi(s.value, (m) => m - 1) || s.value.children.length > 0 || (h = s.value.parentElement) == null || h.removeChild(s.value);
  }), () => {
    if (!l.value || s.value === null) return null;
    let u = { ref: t, "data-headlessui-portal": "" };
    return X(rr, { to: s.value }, mt({ ourProps: u, theirProps: e, slot: {}, attrs: r, slots: n, name: "Portal" }));
  };
} });
let io = Symbol("PortalParentContext");
function rb() {
  let e = fe(io, null), n = F([]);
  function r(a) {
    return n.value.push(a), e && e.register(a), () => t(a);
  }
  function t(a) {
    let o = n.value.indexOf(a);
    o !== -1 && n.value.splice(o, 1), e && e.unregister(a);
  }
  let i = { register: r, unregister: t, portals: n };
  return [n, J({ name: "PortalWrapper", setup(a, { slots: o }) {
    return de(io, i), () => {
      var s;
      return (s = o.default) == null ? void 0 : s.call(o);
    };
  } })];
}
let Pu = Symbol("PortalGroupContext");
J({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: r }) {
  let t = Rn({ resolveTarget() {
    return e.target;
  } });
  return de(Pu, t), () => {
    let { target: i, ...a } = e;
    return mt({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: r, name: "PortalGroup" });
  };
} });
let Vi = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Wi(e) {
  var n, r;
  let t = (n = e.innerText) != null ? n : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return t;
  let a = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), a = !0;
  let o = a ? (r = i.innerText) != null ? r : "" : t;
  return Vi.test(o) && (o = o.replace(Vi, "")), o;
}
function ab(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string") return n.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let t = r.split(" ").map((i) => {
      let a = document.getElementById(i);
      if (a) {
        let o = a.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Wi(a).trim();
      }
      return null;
    }).filter(Boolean);
    if (t.length > 0) return t.join(", ");
  }
  return Wi(e).trim();
}
function ob(e) {
  let n = F(""), r = F("");
  return () => {
    let t = he(e);
    if (!t) return "";
    let i = t.innerText;
    if (n.value === i) return r.value;
    let a = ab(t).trim().toLowerCase();
    return n.value = i, r.value = a, a;
  };
}
var ib = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ib || {}), sb = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(sb || {});
function lb(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Eu = Symbol("MenuContext");
function fa(e) {
  let n = fe(Eu, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, fa), r;
  }
  return n;
}
J({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(1), i = F(null), a = F(null), o = F([]), s = F(""), l = F(null), c = F(1);
  function d(u = (h) => h) {
    let h = l.value !== null ? o.value[l.value] : null, p = gu(u(o.value.slice()), (v) => he(v.dataRef.domRef)), m = h ? p.indexOf(h) : null;
    return m === -1 && (m = null), { items: p, activeItemIndex: m };
  }
  let f = { menuState: t, buttonRef: i, itemsRef: a, items: o, searchQuery: s, activeItemIndex: l, activationTrigger: c, closeMenu: () => {
    t.value = 1, l.value = null;
  }, openMenu: () => t.value = 0, goToItem(u, h, p) {
    let m = d(), v = qy(u === Dt.Specific ? { focus: Dt.Specific, id: h } : { focus: u }, { resolveItems: () => m.items, resolveActiveIndex: () => m.activeItemIndex, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
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
  return bu([i, a], (u, h) => {
    var p;
    f.closeMenu(), da(h, ca.Loose) || (u.preventDefault(), (p = he(i)) == null || p.focus());
  }, B(() => t.value === 0)), de(Eu, f), ku(B(() => qt(t.value, { 0: jt.Open, 1: jt.Closed }))), () => {
    let u = { open: t.value === 0, close: f.closeMenu };
    return mt({ ourProps: {}, theirProps: e, slot: u, slots: n, attrs: r, name: "Menu" });
  };
} });
J({ name: "MenuButton", props: { disabled: { type: Boolean, default: !1 }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-button-${Lt()}`, o = fa("MenuButton");
  t({ el: o.buttonRef, $el: o.buttonRef });
  function s(f) {
    switch (f.key) {
      case We.Space:
      case We.Enter:
      case We.ArrowDown:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Ee(() => {
          var u;
          (u = he(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(Dt.First);
        });
        break;
      case We.ArrowUp:
        f.preventDefault(), f.stopPropagation(), o.openMenu(), Ee(() => {
          var u;
          (u = he(o.itemsRef)) == null || u.focus({ preventScroll: !0 }), o.goToItem(Dt.Last);
        });
        break;
    }
  }
  function l(f) {
    switch (f.key) {
      case We.Space:
        f.preventDefault();
        break;
    }
  }
  function c(f) {
    e.disabled || (o.menuState.value === 0 ? (o.closeMenu(), Ee(() => {
      var u;
      return (u = he(o.buttonRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })) : (f.preventDefault(), o.openMenu(), lb(() => {
      var u;
      return (u = he(o.itemsRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    })));
  }
  let d = No(B(() => ({ as: e.as, type: n.type })), o.buttonRef);
  return () => {
    var f;
    let u = { open: o.menuState.value === 0 }, { ...h } = e, p = { ref: o.buttonRef, id: a, type: d.value, "aria-haspopup": "menu", "aria-controls": (f = he(o.itemsRef)) == null ? void 0 : f.id, "aria-expanded": o.menuState.value === 0, onKeydown: s, onKeyup: l, onClick: c };
    return mt({ ourProps: p, theirProps: h, slot: u, attrs: n, slots: r, name: "MenuButton" });
  };
} });
J({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-items-${Lt()}`, o = fa("MenuItems"), s = F(null);
  t({ el: o.itemsRef, $el: o.itemsRef }), Hy({ container: B(() => he(o.itemsRef)), enabled: B(() => o.menuState.value === 0), accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function l(u) {
    var h;
    switch (s.value && clearTimeout(s.value), u.key) {
      case We.Space:
        if (o.searchQuery.value !== "") return u.preventDefault(), u.stopPropagation(), o.search(u.key);
      case We.Enter:
        if (u.preventDefault(), u.stopPropagation(), o.activeItemIndex.value !== null) {
          let p = o.items.value[o.activeItemIndex.value];
          (h = he(p.dataRef.domRef)) == null || h.click();
        }
        o.closeMenu(), mu(he(o.buttonRef));
        break;
      case We.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(Dt.Next);
      case We.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(Dt.Previous);
      case We.Home:
      case We.PageUp:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(Dt.First);
      case We.End:
      case We.PageDown:
        return u.preventDefault(), u.stopPropagation(), o.goToItem(Dt.Last);
      case We.Escape:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Ee(() => {
          var p;
          return (p = he(o.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case We.Tab:
        u.preventDefault(), u.stopPropagation(), o.closeMenu(), Ee(() => Yy(he(o.buttonRef), u.shiftKey ? Yt.Previous : Yt.Next));
        break;
      default:
        u.key.length === 1 && (o.search(u.key), s.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  function c(u) {
    switch (u.key) {
      case We.Space:
        u.preventDefault();
        break;
    }
  }
  let d = Ho(), f = B(() => d !== null ? (d.value & jt.Open) === jt.Open : o.menuState.value === 0);
  return () => {
    var u, h;
    let p = { open: o.menuState.value === 0 }, { ...m } = e, v = { "aria-activedescendant": o.activeItemIndex.value === null || (u = o.items.value[o.activeItemIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (h = he(o.buttonRef)) == null ? void 0 : h.id, id: a, onKeydown: l, onKeyup: c, role: "menu", tabIndex: 0, ref: o.itemsRef };
    return mt({ ourProps: v, theirProps: m, slot: p, attrs: n, slots: r, features: Cn.RenderStrategy | Cn.Static, visible: f.value, name: "MenuItems" });
  };
} });
J({ name: "MenuItem", inheritAttrs: !1, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-menu-item-${Lt()}`, o = fa("MenuItem"), s = F(null);
  t({ el: s, $el: s });
  let l = B(() => o.activeItemIndex.value !== null ? o.items.value[o.activeItemIndex.value].id === a : !1), c = ob(s), d = B(() => ({ disabled: e.disabled, get textValue() {
    return c();
  }, domRef: s }));
  se(() => o.registerItem(a, d)), be(() => o.unregisterItem(a)), ve(() => {
    o.menuState.value === 0 && l.value && o.activationTrigger.value !== 0 && Ee(() => {
      var g, y;
      return (y = (g = he(s)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : y.call(g, { block: "nearest" });
    });
  });
  function f(g) {
    if (e.disabled) return g.preventDefault();
    o.closeMenu(), mu(he(o.buttonRef));
  }
  function u() {
    if (e.disabled) return o.goToItem(Dt.Nothing);
    o.goToItem(Dt.Specific, a);
  }
  let h = Ny();
  function p(g) {
    h.update(g);
  }
  function m(g) {
    h.wasMoved(g) && (e.disabled || l.value || o.goToItem(Dt.Specific, a, 0));
  }
  function v(g) {
    h.wasMoved(g) && (e.disabled || l.value && o.goToItem(Dt.Nothing));
  }
  return () => {
    let { disabled: g, ...y } = e, k = { active: l.value, disabled: g, close: o.closeMenu };
    return mt({ ourProps: { id: a, ref: s, role: "menuitem", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, onClick: f, onFocus: u, onPointerenter: p, onMouseenter: p, onPointermove: m, onMousemove: m, onPointerleave: v, onMouseleave: v }, theirProps: { ...r, ...y }, slot: k, attrs: r, slots: n, name: "MenuItem" });
  };
} });
var ub = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ub || {});
let Ou = Symbol("PopoverContext");
function ha(e) {
  let n = fe(Ou, null);
  if (n === null) {
    let r = new Error(`<${e} /> is missing a parent <${db.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ha), r;
  }
  return n;
}
let Au = Symbol("PopoverGroupContext");
function Cu() {
  return fe(Au, null);
}
let Lu = Symbol("PopoverPanelContext");
function cb() {
  return fe(Lu, null);
}
let db = J({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: r, expose: t }) {
  var i;
  let a = F(null);
  t({ el: a, $el: a });
  let o = F(1), s = F(null), l = F(null), c = F(null), d = F(null), f = B(() => Zt(a)), u = B(() => {
    var x, S;
    if (!he(s) || !he(d)) return !1;
    for (let Y of document.querySelectorAll("body > *")) if (Number(Y == null ? void 0 : Y.contains(he(s))) ^ Number(Y == null ? void 0 : Y.contains(he(d)))) return !0;
    let b = mr(), w = b.indexOf(he(s)), I = (w + b.length - 1) % b.length, P = (w + 1) % b.length, O = b[I], W = b[P];
    return !((x = he(d)) != null && x.contains(O)) && !((S = he(d)) != null && S.contains(W));
  }), h = { popoverState: o, buttonId: F(null), panelId: F(null), panel: d, button: s, isPortalled: u, beforePanelSentinel: l, afterPanelSentinel: c, togglePopover() {
    o.value = qt(o.value, { 0: 1, 1: 0 });
  }, closePopover() {
    o.value !== 1 && (o.value = 1);
  }, close(x) {
    h.closePopover();
    let S = x ? x instanceof HTMLElement ? x : x.value instanceof HTMLElement ? he(x) : he(h.button) : he(h.button);
    S == null || S.focus();
  } };
  de(Ou, h), ku(B(() => qt(o.value, { 0: jt.Open, 1: jt.Closed })));
  let p = { buttonId: h.buttonId, panelId: h.panelId, close() {
    h.closePopover();
  } }, m = Cu(), v = m == null ? void 0 : m.registerPopover, [g, y] = rb(), k = Gy({ mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef, portals: g, defaultContainers: [s, d] });
  function E() {
    var x, S, b, w;
    return (w = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null ? w : ((x = f.value) == null ? void 0 : x.activeElement) && (((S = he(s)) == null ? void 0 : S.contains(f.value.activeElement)) || ((b = he(d)) == null ? void 0 : b.contains(f.value.activeElement)));
  }
  return ve(() => v == null ? void 0 : v(p)), Ky((i = f.value) == null ? void 0 : i.defaultView, "focus", (x) => {
    var S, b;
    x.target !== window && x.target instanceof HTMLElement && o.value === 0 && (E() || s && d && (k.contains(x.target) || (S = he(h.beforePanelSentinel)) != null && S.contains(x.target) || (b = he(h.afterPanelSentinel)) != null && b.contains(x.target) || h.closePopover()));
  }, !0), bu(k.resolveContainers, (x, S) => {
    var b;
    h.closePopover(), da(S, ca.Loose) || (x.preventDefault(), (b = he(s)) == null || b.focus());
  }, B(() => o.value === 0)), () => {
    let x = { open: o.value === 0, close: h.close };
    return X(ce, [X(y, {}, () => mt({ theirProps: { ...e, ...r }, ourProps: { ref: a }, slot: x, slots: n, attrs: r, name: "Popover" })), X(k.MainTreeNode)]);
  };
} });
J({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-button-${Lt()}`, o = ha("PopoverButton"), s = B(() => Zt(o.button));
  t({ el: o.button, $el: o.button }), se(() => {
    o.buttonId.value = a;
  }), be(() => {
    o.buttonId.value = null;
  });
  let l = Cu(), c = l == null ? void 0 : l.closeOthers, d = cb(), f = B(() => d === null ? !1 : d.value === o.panelId.value), u = F(null), h = `headlessui-focus-sentinel-${Lt()}`;
  f.value || ve(() => {
    o.button.value = he(u);
  });
  let p = No(B(() => ({ as: e.as, type: n.type })), u);
  function m(x) {
    var S, b, w, I, P;
    if (f.value) {
      if (o.popoverState.value === 1) return;
      switch (x.key) {
        case We.Space:
        case We.Enter:
          x.preventDefault(), (b = (S = x.target).click) == null || b.call(S), o.closePopover(), (w = he(o.button)) == null || w.focus();
          break;
      }
    } else switch (x.key) {
      case We.Space:
      case We.Enter:
        x.preventDefault(), x.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover();
        break;
      case We.Escape:
        if (o.popoverState.value !== 0) return c == null ? void 0 : c(o.buttonId.value);
        if (!he(o.button) || (I = s.value) != null && I.activeElement && !((P = he(o.button)) != null && P.contains(s.value.activeElement))) return;
        x.preventDefault(), x.stopPropagation(), o.closePopover();
        break;
    }
  }
  function v(x) {
    f.value || x.key === We.Space && x.preventDefault();
  }
  function g(x) {
    var S, b;
    e.disabled || (f.value ? (o.closePopover(), (S = he(o.button)) == null || S.focus()) : (x.preventDefault(), x.stopPropagation(), o.popoverState.value === 1 && (c == null || c(o.buttonId.value)), o.togglePopover(), (b = he(o.button)) == null || b.focus()));
  }
  function y(x) {
    x.preventDefault(), x.stopPropagation();
  }
  let k = Mu();
  function E() {
    let x = he(o.panel);
    if (!x) return;
    function S() {
      qt(k.value, { [Xt.Forwards]: () => hn(x, Yt.First), [Xt.Backwards]: () => hn(x, Yt.Last) }) === Nr.Error && hn(mr().filter((b) => b.dataset.headlessuiFocusGuard !== "true"), qt(k.value, { [Xt.Forwards]: Yt.Next, [Xt.Backwards]: Yt.Previous }), { relativeTo: he(o.button) });
    }
    S();
  }
  return () => {
    let x = o.popoverState.value === 0, S = { open: x }, { ...b } = e, w = f.value ? { ref: u, type: p.value, onKeydown: m, onClick: g } : { ref: u, id: a, type: p.value, "aria-expanded": o.popoverState.value === 0, "aria-controls": he(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: v, onClick: g, onMousedown: y };
    return X(ce, [mt({ ourProps: w, theirProps: { ...n, ...b }, slot: S, attrs: n, slots: r, name: "PopoverButton" }), x && !f.value && o.isPortalled.value && X(Hn, { id: h, features: Ln.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: E })]);
  };
} });
J({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: r }) {
  let t = ha("PopoverOverlay"), i = `headlessui-popover-overlay-${Lt()}`, a = Ho(), o = B(() => a !== null ? (a.value & jt.Open) === jt.Open : t.popoverState.value === 0);
  function s() {
    t.closePopover();
  }
  return () => {
    let l = { open: t.popoverState.value === 0 };
    return mt({ ourProps: { id: i, "aria-hidden": !0, onClick: s }, theirProps: e, slot: l, attrs: n, slots: r, features: Cn.RenderStrategy | Cn.Static, visible: o.value, name: "PopoverOverlay" });
  };
} });
J({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { attrs: n, slots: r, expose: t }) {
  var i;
  let a = (i = e.id) != null ? i : `headlessui-popover-panel-${Lt()}`, { focus: o } = e, s = ha("PopoverPanel"), l = B(() => Zt(s.panel)), c = `headlessui-focus-sentinel-before-${Lt()}`, d = `headlessui-focus-sentinel-after-${Lt()}`;
  t({ el: s.panel, $el: s.panel }), se(() => {
    s.panelId.value = a;
  }), be(() => {
    s.panelId.value = null;
  }), de(Lu, s.panelId), ve(() => {
    var y, k;
    if (!o || s.popoverState.value !== 0 || !s.panel) return;
    let E = (y = l.value) == null ? void 0 : y.activeElement;
    (k = he(s.panel)) != null && k.contains(E) || hn(he(s.panel), Yt.First);
  });
  let f = Ho(), u = B(() => f !== null ? (f.value & jt.Open) === jt.Open : s.popoverState.value === 0);
  function h(y) {
    var k, E;
    switch (y.key) {
      case We.Escape:
        if (s.popoverState.value !== 0 || !he(s.panel) || l.value && !((k = he(s.panel)) != null && k.contains(l.value.activeElement))) return;
        y.preventDefault(), y.stopPropagation(), s.closePopover(), (E = he(s.button)) == null || E.focus();
        break;
    }
  }
  function p(y) {
    var k, E, x, S, b;
    let w = y.relatedTarget;
    w && he(s.panel) && ((k = he(s.panel)) != null && k.contains(w) || (s.closePopover(), ((x = (E = he(s.beforePanelSentinel)) == null ? void 0 : E.contains) != null && x.call(E, w) || (b = (S = he(s.afterPanelSentinel)) == null ? void 0 : S.contains) != null && b.call(S, w)) && w.focus({ preventScroll: !0 })));
  }
  let m = Mu();
  function v() {
    let y = he(s.panel);
    if (!y) return;
    function k() {
      qt(m.value, { [Xt.Forwards]: () => {
        var E;
        hn(y, Yt.First) === Nr.Error && ((E = he(s.afterPanelSentinel)) == null || E.focus());
      }, [Xt.Backwards]: () => {
        var E;
        (E = he(s.button)) == null || E.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function g() {
    let y = he(s.panel);
    if (!y) return;
    function k() {
      qt(m.value, { [Xt.Forwards]: () => {
        let E = he(s.button), x = he(s.panel);
        if (!E) return;
        let S = mr(), b = S.indexOf(E), w = S.slice(0, b + 1), I = [...S.slice(b + 1), ...w];
        for (let P of I.slice()) if (P.dataset.headlessuiFocusGuard === "true" || x != null && x.contains(P)) {
          let O = I.indexOf(P);
          O !== -1 && I.splice(O, 1);
        }
        hn(I, Yt.First, { sorted: !1 });
      }, [Xt.Backwards]: () => {
        var E;
        hn(y, Yt.Previous) === Nr.Error && ((E = he(s.button)) == null || E.focus());
      } });
    }
    k();
  }
  return () => {
    let y = { open: s.popoverState.value === 0, close: s.close }, { focus: k, ...E } = e, x = { ref: s.panel, id: a, onKeydown: h, onFocusout: o && s.popoverState.value === 0 ? p : void 0, tabIndex: -1 };
    return mt({ ourProps: x, theirProps: { ...n, ...E }, attrs: n, slot: y, slots: { ...r, default: (...S) => {
      var b;
      return [X(ce, [u.value && s.isPortalled.value && X(Hn, { id: c, ref: s.beforePanelSentinel, features: Ln.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v }), (b = r.default) == null ? void 0 : b.call(r, ...S), u.value && s.isPortalled.value && X(Hn, { id: d, ref: s.afterPanelSentinel, features: Ln.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: Cn.RenderStrategy | Cn.Static, visible: u.value, name: "PopoverPanel" });
  };
} });
J({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: r, expose: t }) {
  let i = F(null), a = In([]), o = B(() => Zt(i)), s = Xy();
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
    return (u = he(i)) != null && u.contains(p) ? !0 : a.value.some((m) => {
      var v, g;
      return ((v = h.getElementById(m.buttonId.value)) == null ? void 0 : v.contains(p)) || ((g = h.getElementById(m.panelId.value)) == null ? void 0 : g.contains(p));
    });
  }
  function f(u) {
    for (let h of a.value) h.buttonId.value !== u && h.close();
  }
  return de(Au, { registerPopover: c, unregisterPopover: l, isFocusWithinPopoverGroup: d, closeOthers: f, mainTreeNodeRef: s.mainTreeNodeRef }), () => X(ce, [mt({ ourProps: { ref: i }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: r, name: "PopoverGroup" }), X(s.MainTreeNode)]);
} });
let Iu = Symbol("LabelContext");
function Ru() {
  let e = fe(Iu, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ru), n;
  }
  return e;
}
function fb({ slot: e = {}, name: n = "Label", props: r = {} } = {}) {
  let t = F([]);
  function i(a) {
    return t.value.push(a), () => {
      let o = t.value.indexOf(a);
      o !== -1 && t.value.splice(o, 1);
    };
  }
  return de(Iu, { register: i, slot: e, name: n, props: r }), B(() => t.value.length > 0 ? t.value.join(" ") : void 0);
}
J({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: n, attrs: r }) {
  var t;
  let i = (t = e.id) != null ? t : `headlessui-label-${Lt()}`, a = Ru();
  return se(() => be(a.register(i))), () => {
    let { name: o = "Label", slot: s = {}, props: l = {} } = a, { passive: c, ...d } = e, f = { ...Object.entries(l).reduce((u, [h, p]) => Object.assign(u, { [h]: re(p) }), {}), id: i };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), mt({ ourProps: f, theirProps: d, slot: s, attrs: r, slots: n, name: o });
  };
} });
let Fu = Symbol("GroupContext");
J({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: r }) {
  let t = F(null), i = fb({ name: "SwitchLabel", props: { htmlFor: B(() => {
    var o;
    return (o = t.value) == null ? void 0 : o.id;
  }), onClick(o) {
    t.value && (o.currentTarget.tagName === "LABEL" && o.preventDefault(), t.value.click(), t.value.focus({ preventScroll: !0 }));
  } } }), a = eb({ name: "SwitchDescription" });
  return de(Fu, { switchRef: t, labelledby: i, describedby: a }), () => mt({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: r, name: "SwitchGroup" });
} });
J({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: null }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: r, slots: t, expose: i }) {
  var a;
  let o = (a = e.id) != null ? a : `headlessui-switch-${Lt()}`, s = fe(Fu, null), [l, c] = Dy(B(() => e.modelValue), (y) => n("update:modelValue", y), B(() => e.defaultChecked));
  function d() {
    c(!l.value);
  }
  let f = F(null), u = s === null ? f : s.switchRef, h = No(B(() => ({ as: e.as, type: r.type })), u);
  i({ el: u, $el: u });
  function p(y) {
    y.preventDefault(), d();
  }
  function m(y) {
    y.key === We.Space ? (y.preventDefault(), d()) : y.key === We.Enter && Zy(y.currentTarget);
  }
  function v(y) {
    y.preventDefault();
  }
  let g = B(() => {
    var y, k;
    return (k = (y = he(u)) == null ? void 0 : y.closest) == null ? void 0 : k.call(y, "form");
  });
  return se(() => {
    De([g], () => {
      if (!g.value || e.defaultChecked === void 0) return;
      function y() {
        c(e.defaultChecked);
      }
      return g.value.addEventListener("reset", y), () => {
        var k;
        (k = g.value) == null || k.removeEventListener("reset", y);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: y, value: k, form: E, tabIndex: x, ...S } = e, b = { checked: l.value }, w = { id: o, ref: u, role: "switch", type: h.value, tabIndex: x === -1 ? 0 : x, "aria-checked": l.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: p, onKeyup: m, onKeypress: v };
    return X(ce, [y != null && l.value != null ? X(Hn, Wy({ features: Ln.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: E, disabled: S.disabled, name: y, value: k })) : null, mt({ ourProps: w, theirProps: { ...r, ...$u(S, ["modelValue", "defaultChecked"]) }, slot: b, attrs: r, slots: t, name: "Switch" })]);
  };
} });
var ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hb = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(ln, function() {
    var r = 1e3, t = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", l = "hour", c = "day", d = "week", f = "month", u = "quarter", h = "year", p = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var D = ["th", "st", "nd", "rd"], M = $ % 100;
      return "[" + $ + (D[(M - 20) % 10] || D[M] || D[0]) + "]";
    } }, k = function($, D, M) {
      var A = String($);
      return !A || A.length >= D ? $ : "" + Array(D + 1 - A.length).join(M) + $;
    }, E = { s: k, z: function($) {
      var D = -$.utcOffset(), M = Math.abs(D), A = Math.floor(M / 60), T = M % 60;
      return (D <= 0 ? "+" : "-") + k(A, 2, "0") + ":" + k(T, 2, "0");
    }, m: function $(D, M) {
      if (D.date() < M.date()) return -$(M, D);
      var A = 12 * (M.year() - D.year()) + (M.month() - D.month()), T = D.clone().add(A, f), z = M - T < 0, N = D.clone().add(A + (z ? -1 : 1), f);
      return +(-(A + (M - T) / (z ? T - N : N - T)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: f, y: h, w: d, d: c, D: p, h: l, m: s, s: o, ms: a, Q: u }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, x = "en", S = {};
    S[x] = y;
    var b = "$isDayjsObject", w = function($) {
      return $ instanceof W || !(!$ || !$[b]);
    }, I = function $(D, M, A) {
      var T;
      if (!D) return x;
      if (typeof D == "string") {
        var z = D.toLowerCase();
        S[z] && (T = z), M && (S[z] = M, T = z);
        var N = D.split("-");
        if (!T && N.length > 1) return $(N[0]);
      } else {
        var R = D.name;
        S[R] = D, T = R;
      }
      return !A && T && (x = T), T || !A && x;
    }, P = function($, D) {
      if (w($)) return $.clone();
      var M = typeof D == "object" ? D : {};
      return M.date = $, M.args = arguments, new W(M);
    }, O = E;
    O.l = I, O.i = w, O.w = function($, D) {
      return P($, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var W = function() {
      function $(M) {
        this.$L = I(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[b] = !0;
      }
      var D = $.prototype;
      return D.parse = function(M) {
        this.$d = function(A) {
          var T = A.date, z = A.utc;
          if (T === null) return /* @__PURE__ */ new Date(NaN);
          if (O.u(T)) return /* @__PURE__ */ new Date();
          if (T instanceof Date) return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var N = T.match(v);
            if (N) {
              var R = N[2] - 1 || 0, H = (N[7] || "0").substring(0, 3);
              return z ? new Date(Date.UTC(N[1], R, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, H)) : new Date(N[1], R, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, H);
            }
          }
          return new Date(T);
        }(M), this.init();
      }, D.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, D.$utils = function() {
        return O;
      }, D.isValid = function() {
        return this.$d.toString() !== m;
      }, D.isSame = function(M, A) {
        var T = P(M);
        return this.startOf(A) <= T && T <= this.endOf(A);
      }, D.isAfter = function(M, A) {
        return P(M) < this.startOf(A);
      }, D.isBefore = function(M, A) {
        return this.endOf(A) < P(M);
      }, D.$g = function(M, A, T) {
        return O.u(M) ? this[A] : this.set(T, M);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(M, A) {
        var T = this, z = !!O.u(A) || A, N = O.p(M), R = function(Se, ue) {
          var ye = O.w(T.$u ? Date.UTC(T.$y, ue, Se) : new Date(T.$y, ue, Se), T);
          return z ? ye : ye.endOf(c);
        }, H = function(Se, ue) {
          return O.w(T.toDate()[Se].apply(T.toDate("s"), (z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), T);
        }, _ = this.$W, G = this.$M, le = this.$D, ge = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case h:
            return z ? R(1, 0) : R(31, 11);
          case f:
            return z ? R(1, G) : R(0, G + 1);
          case d:
            var xe = this.$locale().weekStart || 0, Ae = (_ < xe ? _ + 7 : _) - xe;
            return R(z ? le - Ae : le + (6 - Ae), G);
          case c:
          case p:
            return H(ge + "Hours", 0);
          case l:
            return H(ge + "Minutes", 1);
          case s:
            return H(ge + "Seconds", 2);
          case o:
            return H(ge + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, D.endOf = function(M) {
        return this.startOf(M, !1);
      }, D.$set = function(M, A) {
        var T, z = O.p(M), N = "set" + (this.$u ? "UTC" : ""), R = (T = {}, T[c] = N + "Date", T[p] = N + "Date", T[f] = N + "Month", T[h] = N + "FullYear", T[l] = N + "Hours", T[s] = N + "Minutes", T[o] = N + "Seconds", T[a] = N + "Milliseconds", T)[z], H = z === c ? this.$D + (A - this.$W) : A;
        if (z === f || z === h) {
          var _ = this.clone().set(p, 1);
          _.$d[R](H), _.init(), this.$d = _.set(p, Math.min(this.$D, _.daysInMonth())).$d;
        } else R && this.$d[R](H);
        return this.init(), this;
      }, D.set = function(M, A) {
        return this.clone().$set(M, A);
      }, D.get = function(M) {
        return this[O.p(M)]();
      }, D.add = function(M, A) {
        var T, z = this;
        M = Number(M);
        var N = O.p(A), R = function(G) {
          var le = P(z);
          return O.w(le.date(le.date() + Math.round(G * M)), z);
        };
        if (N === f) return this.set(f, this.$M + M);
        if (N === h) return this.set(h, this.$y + M);
        if (N === c) return R(1);
        if (N === d) return R(7);
        var H = (T = {}, T[s] = t, T[l] = i, T[o] = r, T)[N] || 1, _ = this.$d.getTime() + M * H;
        return O.w(_, this);
      }, D.subtract = function(M, A) {
        return this.add(-1 * M, A);
      }, D.format = function(M) {
        var A = this, T = this.$locale();
        if (!this.isValid()) return T.invalidDate || m;
        var z = M || "YYYY-MM-DDTHH:mm:ssZ", N = O.z(this), R = this.$H, H = this.$m, _ = this.$M, G = T.weekdays, le = T.months, ge = T.meridiem, xe = function(ue, ye, Te, Oe) {
          return ue && (ue[ye] || ue(A, z)) || Te[ye].slice(0, Oe);
        }, Ae = function(ue) {
          return O.s(R % 12 || 12, ue, "0");
        }, Se = ge || function(ue, ye, Te) {
          var Oe = ue < 12 ? "AM" : "PM";
          return Te ? Oe.toLowerCase() : Oe;
        };
        return z.replace(g, function(ue, ye) {
          return ye || function(Te) {
            switch (Te) {
              case "YY":
                return String(A.$y).slice(-2);
              case "YYYY":
                return O.s(A.$y, 4, "0");
              case "M":
                return _ + 1;
              case "MM":
                return O.s(_ + 1, 2, "0");
              case "MMM":
                return xe(T.monthsShort, _, le, 3);
              case "MMMM":
                return xe(le, _);
              case "D":
                return A.$D;
              case "DD":
                return O.s(A.$D, 2, "0");
              case "d":
                return String(A.$W);
              case "dd":
                return xe(T.weekdaysMin, A.$W, G, 2);
              case "ddd":
                return xe(T.weekdaysShort, A.$W, G, 3);
              case "dddd":
                return G[A.$W];
              case "H":
                return String(R);
              case "HH":
                return O.s(R, 2, "0");
              case "h":
                return Ae(1);
              case "hh":
                return Ae(2);
              case "a":
                return Se(R, H, !0);
              case "A":
                return Se(R, H, !1);
              case "m":
                return String(H);
              case "mm":
                return O.s(H, 2, "0");
              case "s":
                return String(A.$s);
              case "ss":
                return O.s(A.$s, 2, "0");
              case "SSS":
                return O.s(A.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(ue) || N.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(M, A, T) {
        var z, N = this, R = O.p(A), H = P(M), _ = (H.utcOffset() - this.utcOffset()) * t, G = this - H, le = function() {
          return O.m(N, H);
        };
        switch (R) {
          case h:
            z = le() / 12;
            break;
          case f:
            z = le();
            break;
          case u:
            z = le() / 3;
            break;
          case d:
            z = (G - _) / 6048e5;
            break;
          case c:
            z = (G - _) / 864e5;
            break;
          case l:
            z = G / i;
            break;
          case s:
            z = G / t;
            break;
          case o:
            z = G / r;
            break;
          default:
            z = G;
        }
        return T ? z : O.a(z);
      }, D.daysInMonth = function() {
        return this.endOf(f).$D;
      }, D.$locale = function() {
        return S[this.$L];
      }, D.locale = function(M, A) {
        if (!M) return this.$L;
        var T = this.clone(), z = I(M, A, !0);
        return z && (T.$L = z), T;
      }, D.clone = function() {
        return O.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), Y = W.prototype;
    return P.prototype = Y, [["$ms", a], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", h], ["$D", p]].forEach(function($) {
      Y[$[1]] = function(D) {
        return this.$g(D, $[0], $[1]);
      };
    }), P.extend = function($, D) {
      return $.$i || ($(D, W, P), $.$i = !0), P;
    }, P.locale = I, P.isDayjs = w, P.unix = function($) {
      return P(1e3 * $);
    }, P.en = S[x], P.Ls = S, P.p = {}, P;
  });
})(hb);
var pb = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(ln, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
    return function(i, a, o) {
      var s, l = function(u, h, p) {
        p === void 0 && (p = {});
        var m = new Date(u), v = function(g, y) {
          y === void 0 && (y = {});
          var k = y.timeZoneName || "short", E = g + "|" + k, x = t[E];
          return x || (x = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: g, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: k }), t[E] = x), x;
        }(h, p);
        return v.formatToParts(m);
      }, c = function(u, h) {
        for (var p = l(u, h), m = [], v = 0; v < p.length; v += 1) {
          var g = p[v], y = g.type, k = g.value, E = r[y];
          E >= 0 && (m[E] = parseInt(k, 10));
        }
        var x = m[3], S = x === 24 ? 0 : x, b = m[0] + "-" + m[1] + "-" + m[2] + " " + S + ":" + m[4] + ":" + m[5] + ":000", w = +u;
        return (o.utc(b).valueOf() - (w -= w % 1e3)) / 6e4;
      }, d = a.prototype;
      d.tz = function(u, h) {
        u === void 0 && (u = s);
        var p, m = this.utcOffset(), v = this.toDate(), g = v.toLocaleString("en-US", { timeZone: u }), y = Math.round((v - new Date(g)) / 1e3 / 60), k = 15 * -Math.round(v.getTimezoneOffset() / 15) - y;
        if (!Number(k)) p = this.utcOffset(0, h);
        else if (p = o(g, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(k, !0), h) {
          var E = p.utcOffset();
          p = p.add(m - E, "minute");
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
        var y = function(S, b, w) {
          var I = S - 60 * b * 1e3, P = c(I, w);
          if (b === P) return [I, b];
          var O = c(I -= 60 * (P - b) * 1e3, w);
          return P === O ? [I, P] : [S - 60 * Math.min(P, O) * 1e3, Math.max(P, O)];
        }(o.utc(u, m).valueOf(), g, v), k = y[0], E = y[1], x = o(k).utcOffset(E);
        return x.$x.$timezone = v, x;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(u) {
        s = u;
      };
    };
  });
})(pb);
var vb = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(ln, function() {
    return function(r, t, i) {
      var a = t.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, s = function(f, u, h, p, m) {
        var v = f.name ? f : f.$locale(), g = o(v[u]), y = o(v[h]), k = g || y.map(function(x) {
          return x.slice(0, p);
        });
        if (!m) return k;
        var E = v.weekStart;
        return k.map(function(x, S) {
          return k[(S + (E || 0)) % 7];
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
})(vb);
var mb = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(ln, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(t, i, a) {
      var o = i.prototype, s = o.format;
      a.en.formats = r, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, d = function(f, u) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, p, m) {
            var v = m && m.toUpperCase();
            return p || u[m] || r[m] || u[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, y, k) {
              return y || k.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, d);
      };
    };
  });
})(mb);
var gb = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(ln, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, o = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, d = function(v) {
      return function(g) {
        this[v] = +g;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(g) {
        if (!g || g === "Z") return 0;
        var y = g.match(/([+-]|\d\d)/g), k = 60 * y[1] + (+y[2] || 0);
        return k === 0 ? 0 : y[0] === "+" ? -k : k;
      }(v);
    }], u = function(v) {
      var g = l[v];
      return g && (g.indexOf ? g : g.s.concat(g.f));
    }, h = function(v, g) {
      var y, k = l.meridiem;
      if (k) {
        for (var E = 1; E <= 24; E += 1) if (v.indexOf(k(E, 0, g)) > -1) {
          y = E > 12;
          break;
        }
      } else y = v === (g ? "pm" : "PM");
      return y;
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
      var g = l.ordinal, y = v.match(/\d+/);
      if (this.day = y[0], g) for (var k = 1; k <= 31; k += 1) g(k).replace(/\[|\]/g, "") === v && (this.day = k);
    }], w: [o, d("week")], ww: [a, d("week")], M: [o, d("month")], MM: [a, d("month")], MMM: [s, function(v) {
      var g = u("months"), y = (u("monthsShort") || g.map(function(k) {
        return k.slice(0, 3);
      })).indexOf(v) + 1;
      if (y < 1) throw new Error();
      this.month = y % 12 || y;
    }], MMMM: [s, function(v) {
      var g = u("months").indexOf(v) + 1;
      if (g < 1) throw new Error();
      this.month = g % 12 || g;
    }], Y: [/[+-]?\d+/, d("year")], YY: [a, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, d("year")], Z: f, ZZ: f };
    function m(v) {
      var g, y;
      g = v, y = l && l.formats;
      for (var k = (v = g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, O, W) {
        var Y = W && W.toUpperCase();
        return O || y[W] || r[W] || y[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function($, D, M) {
          return D || M.slice(1);
        });
      })).match(t), E = k.length, x = 0; x < E; x += 1) {
        var S = k[x], b = p[S], w = b && b[0], I = b && b[1];
        k[x] = I ? { regex: w, parser: I } : S.replace(/^\[|\]$/g, "");
      }
      return function(P) {
        for (var O = {}, W = 0, Y = 0; W < E; W += 1) {
          var $ = k[W];
          if (typeof $ == "string") Y += $.length;
          else {
            var D = $.regex, M = $.parser, A = P.slice(Y), T = D.exec(A)[0];
            M.call(O, T), P = P.replace(T, "");
          }
        }
        return function(z) {
          var N = z.afternoon;
          if (N !== void 0) {
            var R = z.hours;
            N ? R < 12 && (z.hours += 12) : R === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(O), O;
      };
    }
    return function(v, g, y) {
      y.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var k = g.prototype, E = k.parse;
      k.parse = function(x) {
        var S = x.date, b = x.utc, w = x.args;
        this.$u = b;
        var I = w[1];
        if (typeof I == "string") {
          var P = w[2] === !0, O = w[3] === !0, W = P || O, Y = w[2];
          O && (Y = w[2]), l = this.$locale(), !P && Y && (l = y.Ls[Y]), this.$d = function(A, T, z, N) {
            try {
              if (["x", "X"].indexOf(T) > -1) return new Date((T === "X" ? 1e3 : 1) * A);
              var R = m(T)(A), H = R.year, _ = R.month, G = R.day, le = R.hours, ge = R.minutes, xe = R.seconds, Ae = R.milliseconds, Se = R.zone, ue = R.week, ye = /* @__PURE__ */ new Date(), Te = G || (H || _ ? 1 : ye.getDate()), Oe = H || ye.getFullYear(), Ve = 0;
              H && !_ || (Ve = _ > 0 ? _ - 1 : ye.getMonth());
              var Xe, st = le || 0, lt = ge || 0, ut = xe || 0, ct = Ae || 0;
              return Se ? new Date(Date.UTC(Oe, Ve, Te, st, lt, ut, ct + 60 * Se.offset * 1e3)) : z ? new Date(Date.UTC(Oe, Ve, Te, st, lt, ut, ct)) : (Xe = new Date(Oe, Ve, Te, st, lt, ut, ct), ue && (Xe = N(Xe).week(ue).toDate()), Xe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, I, b, y), this.init(), Y && Y !== !0 && (this.$L = this.locale(Y).$L), W && S != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (I instanceof Array) for (var $ = I.length, D = 1; D <= $; D += 1) {
          w[1] = I[D - 1];
          var M = y.apply(this, w);
          if (M.isValid()) {
            this.$d = M.$d, this.$L = M.$L, this.init();
            break;
          }
          D === $ && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else E.call(this, x);
      };
    };
  });
})(gb);
var yb = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(ln, function() {
    return function(r, t, i) {
      t.prototype.isToday = function() {
        var a = "YYYY-MM-DD", o = i();
        return this.format(a) === o.format(a);
      };
    };
  });
})(yb);
var bb = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(ln, function() {
    return function(r, t, i) {
      t.prototype.isBetween = function(a, o, s, l) {
        var c = i(a), d = i(o), f = (l = l || "()")[0] === "(", u = l[1] === ")";
        return (f ? this.isAfter(c, s) : !this.isBefore(c, s)) && (u ? this.isBefore(d, s) : !this.isAfter(d, s)) || (f ? this.isBefore(c, s) : !this.isAfter(c, s)) && (u ? this.isAfter(d, s) : !this.isBefore(d, s));
      };
    };
  });
})(bb);
var wb = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(ln, function() {
    var r, t, i = 1e3, a = 6e4, o = 36e5, s = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2628e6, f = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, u = { years: c, months: d, days: s, hours: o, minutes: a, seconds: i, milliseconds: 1, weeks: 6048e5 }, h = function(S) {
      return S instanceof E;
    }, p = function(S, b, w) {
      return new E(S, w, b.$l);
    }, m = function(S) {
      return t.p(S) + "s";
    }, v = function(S) {
      return S < 0;
    }, g = function(S) {
      return v(S) ? Math.ceil(S) : Math.floor(S);
    }, y = function(S) {
      return Math.abs(S);
    }, k = function(S, b) {
      return S ? v(S) ? { negative: !0, format: "" + y(S) + b } : { negative: !1, format: "" + S + b } : { negative: !1, format: "" };
    }, E = function() {
      function S(w, I, P) {
        var O = this;
        if (this.$d = {}, this.$l = P, w === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return p(w * u[m(I)], this);
        if (typeof w == "number") return this.$ms = w, this.parseFromMilliseconds(), this;
        if (typeof w == "object") return Object.keys(w).forEach(function($) {
          O.$d[m($)] = w[$];
        }), this.calMilliseconds(), this;
        if (typeof w == "string") {
          var W = w.match(f);
          if (W) {
            var Y = W.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = Y[0], this.$d.months = Y[1], this.$d.weeks = Y[2], this.$d.days = Y[3], this.$d.hours = Y[4], this.$d.minutes = Y[5], this.$d.seconds = Y[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var b = S.prototype;
      return b.calMilliseconds = function() {
        var w = this;
        this.$ms = Object.keys(this.$d).reduce(function(I, P) {
          return I + (w.$d[P] || 0) * u[P];
        }, 0);
      }, b.parseFromMilliseconds = function() {
        var w = this.$ms;
        this.$d.years = g(w / c), w %= c, this.$d.months = g(w / d), w %= d, this.$d.days = g(w / s), w %= s, this.$d.hours = g(w / o), w %= o, this.$d.minutes = g(w / a), w %= a, this.$d.seconds = g(w / i), w %= i, this.$d.milliseconds = w;
      }, b.toISOString = function() {
        var w = k(this.$d.years, "Y"), I = k(this.$d.months, "M"), P = +this.$d.days || 0;
        this.$d.weeks && (P += 7 * this.$d.weeks);
        var O = k(P, "D"), W = k(this.$d.hours, "H"), Y = k(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3, $ = Math.round(1e3 * $) / 1e3);
        var D = k($, "S"), M = w.negative || I.negative || O.negative || W.negative || Y.negative || D.negative, A = W.format || Y.format || D.format ? "T" : "", T = (M ? "-" : "") + "P" + w.format + I.format + O.format + A + W.format + Y.format + D.format;
        return T === "P" || T === "-P" ? "P0D" : T;
      }, b.toJSON = function() {
        return this.toISOString();
      }, b.format = function(w) {
        var I = w || "YYYY-MM-DDTHH:mm:ss", P = { Y: this.$d.years, YY: t.s(this.$d.years, 2, "0"), YYYY: t.s(this.$d.years, 4, "0"), M: this.$d.months, MM: t.s(this.$d.months, 2, "0"), D: this.$d.days, DD: t.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: t.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: t.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: t.s(this.$d.seconds, 2, "0"), SSS: t.s(this.$d.milliseconds, 3, "0") };
        return I.replace(l, function(O, W) {
          return W || String(P[O]);
        });
      }, b.as = function(w) {
        return this.$ms / u[m(w)];
      }, b.get = function(w) {
        var I = this.$ms, P = m(w);
        return P === "milliseconds" ? I %= 1e3 : I = P === "weeks" ? g(I / u[P]) : this.$d[P], I || 0;
      }, b.add = function(w, I, P) {
        var O;
        return O = I ? w * u[m(I)] : h(w) ? w.$ms : p(w, this).$ms, p(this.$ms + O * (P ? -1 : 1), this);
      }, b.subtract = function(w, I) {
        return this.add(w, I, !0);
      }, b.locale = function(w) {
        var I = this.clone();
        return I.$l = w, I;
      }, b.clone = function() {
        return p(this.$ms, this);
      }, b.humanize = function(w) {
        return r().add(this.$ms, "ms").locale(this.$l).fromNow(!w);
      }, b.valueOf = function() {
        return this.asMilliseconds();
      }, b.milliseconds = function() {
        return this.get("milliseconds");
      }, b.asMilliseconds = function() {
        return this.as("milliseconds");
      }, b.seconds = function() {
        return this.get("seconds");
      }, b.asSeconds = function() {
        return this.as("seconds");
      }, b.minutes = function() {
        return this.get("minutes");
      }, b.asMinutes = function() {
        return this.as("minutes");
      }, b.hours = function() {
        return this.get("hours");
      }, b.asHours = function() {
        return this.as("hours");
      }, b.days = function() {
        return this.get("days");
      }, b.asDays = function() {
        return this.as("days");
      }, b.weeks = function() {
        return this.get("weeks");
      }, b.asWeeks = function() {
        return this.as("weeks");
      }, b.months = function() {
        return this.get("months");
      }, b.asMonths = function() {
        return this.as("months");
      }, b.years = function() {
        return this.get("years");
      }, b.asYears = function() {
        return this.as("years");
      }, S;
    }(), x = function(S, b, w) {
      return S.add(b.years() * w, "y").add(b.months() * w, "M").add(b.days() * w, "d").add(b.hours() * w, "h").add(b.minutes() * w, "m").add(b.seconds() * w, "s").add(b.milliseconds() * w, "ms");
    };
    return function(S, b, w) {
      r = w, t = w().$utils(), w.duration = function(O, W) {
        var Y = w.locale();
        return p(O, { $l: Y }, W);
      }, w.isDuration = h;
      var I = b.prototype.add, P = b.prototype.subtract;
      b.prototype.add = function(O, W) {
        return h(O) ? x(this, O, 1) : I.bind(this)(O, W);
      }, b.prototype.subtract = function(O, W) {
        return h(O) ? x(this, O, -1) : P.bind(this)(O, W);
      };
    };
  });
})(wb);
var xb = { exports: {} };
(function(e, n) {
  (function(r, t) {
    e.exports = t();
  })(ln, function() {
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
})(xb);
Object.fromEntries(
  Object.entries(/* @__PURE__ */ Object.assign({})).map(
    ([e, n]) => {
      var r;
      return [(r = e.match(/([\w-]*)\.js$/)) == null ? void 0 : r[1], n];
    }
  )
);
const $b = { class: "tc-flex tc-items-center tc-space-x-2 tc-text-base tc-text-gray-700" }, V1 = {
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
    return Zi(() => {
      l();
    }), (d, f) => (L(), j("div", $b, [
      C("span", null, "Page will be reloaded after " + ne(i.value) + " sec.", 1),
      ee(re(ki), {
        size: "sm",
        onClick: c
      }, {
        default: Me(() => [
          (L(), $e(On(a.value ? re(cf) : re(df)), { class: "tc-w-4 tc-h-4" }))
        ]),
        _: 1
      }),
      ee(re(ki), {
        size: "sm",
        onClick: f[0] || (f[0] = (u) => t("reload"))
      }, {
        default: Me(() => [
          ee(re(rf), { class: "tc-w-4 tc-h-4" })
        ]),
        _: 1
      })
    ]));
  }
}, Sb = "tc-font-semibold tc-rounded-md tc-inline-flex tc-items-center", W1 = {
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
    return (t, i) => (L(), j("span", {
      class: we([
        Sb,
        n[e.size] || n.sm,
        r[e.color] || r.default
      ])
    }, [
      Ce(t.$slots, "default"),
      Ce(t.$slots, "icon", { class: "tc-ml-2" })
    ], 2));
  }
}, kb = { class: "sm:tc-hidden" }, Mb = {
  id: "tabs",
  class: "tc-block tc-w-full tc-rounded-md tc-border-gray-300 tc-py-2 tc-pl-3 tc-pr-10 tc-text-base focus:tc-border-tp-primary focus:tc-outline-none focus:tc-ring-tp-primary sm:tc-text-sm",
  name: "tabs"
}, Db = ["selected"], Tb = { class: "tc-hidden sm:tc-block" }, Pb = { class: "tc-border-b tc-border-gray-200" }, Eb = {
  "aria-label": "Tabs",
  class: "-tc-mb-px tc-flex tc-space-x-8"
}, Ob = ["aria-current"], U1 = {
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
    return (n, r) => (L(), j("div", null, [
      C("div", kb, [
        r[0] || (r[0] = C("label", {
          class: "tc-sr-only",
          for: "tabs"
        }, "Select a tab", -1)),
        C("select", Mb, [
          (L(!0), j(ce, null, Le(e.tabs, (t) => (L(), j("option", {
            key: t.name,
            selected: t.id === e.active
          }, ne(t.name), 9, Db))), 128))
        ])
      ]),
      C("div", Tb, [
        C("div", Pb, [
          C("nav", Eb, [
            (L(!0), j(ce, null, Le(e.tabs, (t) => (L(), j("a", {
              key: t.name,
              "aria-current": t.current ? "page" : void 0,
              class: we([[t.id === e.active ? "tc-border-tp-primary tc-text-tp-primary" : "tc-border-transparent tc-text-gray-500 hover:tc-border-gray-300 hover:tc-text-gray-700", "tc-whitespace-nowrap tc-border-b-2 tc-py-4 tc-px-1 tc-text-sm tc-font-medium"], "tc-cursor-pointer"])
            }, ne(t.name), 11, Ob))), 128))
          ])
        ])
      ])
    ]));
  }
}, Ab = { class: "tc-flex tc-items-center tc-justify-between tc-border-t tc-border-gray-200 tc-bg-white tc-px-4 tc-py-3 sm:tc-px-6" }, Cb = { class: "sm:tc-flex sm:tc-flex-1 sm:tc-items-center sm:tc-justify-between" }, Lb = {
  key: 0,
  class: "tc-text-basic tc-text-gray-700"
}, Ib = { "data-test": "pagination-from" }, Rb = { "data-test": "pagination-to" }, Fb = { "data-test": "pagination-total" }, Yb = {
  "aria-label": "Pagination",
  class: "tc-isolate tc-inline-flex -tc-space-x-px tc-rounded-md tc-text-xs tc-justify-center tc-items-center"
}, jb = { class: "tc-px-3 tc-justify-center tc-uppercase" }, Bb = ["disabled"], zb = { class: "tc-pl-3 tc-justify-center tc-inline-flex" }, Nb = ["value"], Hb = ["value"], Vb = { class: "tc-px-3 tc-justify-center tc-font-normal tc-text-xs" }, Wb = { class: "tc-font-semibold" }, Ub = { class: "tc-px-3 tc-justify-center tc-uppercase" }, _b = ["disabled"], Ui = {
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
      return L(), j("div", Ab, [
        C("div", Cb, [
          C("div", null, [
            e.showResults ? (L(), j("p", Lb, [
              c[3] || (c[3] = He(" Showing " + ne(" ") + " ", -1)),
              C("span", Ib, ne(((d = e.pagination) == null ? void 0 : d.from) || 0), 1),
              c[4] || (c[4] = He(" " + ne(" ") + " - " + ne(" ") + " ", -1)),
              C("span", Rb, ne(((f = e.pagination) == null ? void 0 : f.to) || 0), 1),
              c[5] || (c[5] = He(" " + ne(" ") + " of " + ne(" ") + " ", -1)),
              C("span", Fb, ne(((u = e.pagination) == null ? void 0 : u.total) || 0), 1),
              c[6] || (c[6] = He(" " + ne(" ") + " results ", -1))
            ])) : Q("", !0)
          ]),
          C("div", null, [
            C("nav", Yb, [
              C("div", jb, [
                C("button", {
                  "data-test": "pagination-prev-button",
                  disabled: !e.pagination.has_prev,
                  class: "tc-relative tc-inline-flex tc-uppercase tc-font-semibold tc-text-xs tc-text-gray-700 hover:tc-text-gray-400",
                  onClick: c[0] || (c[0] = (h) => a())
                }, [
                  ee(re(lv), {
                    "aria-hidden": "true",
                    class: "tc-h-3 tc-w-3 tc-mr-2"
                  }),
                  c[7] || (c[7] = C("span", null, "Previous", -1))
                ], 8, Bb)
              ]),
              c[10] || (c[10] = C("div", { class: "tc-text-gray-300" }, " | ", -1)),
              C("div", zb, [
                C("select", {
                  value: e.pagination.current_page,
                  "data-test": "pagination-select-page",
                  class: "tc-justify-center tc-block tc-px-2 tc-py-1 tc-text-sm tc-border tc-border-gray-300 tc-rounded-md focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-blue-500 focus:tc-border-blue-500",
                  onChange: c[1] || (c[1] = (h) => s(h.target.value))
                }, [
                  (L(!0), j(ce, null, Le(i(e.pagination.last_page), (h, p) => (L(), j("option", {
                    key: p,
                    value: h
                  }, ne(h), 9, Hb))), 128))
                ], 40, Nb)
              ]),
              C("div", Vb, [
                c[8] || (c[8] = He(" out of ", -1)),
                C("span", Wb, ne(e.pagination.last_page), 1)
              ]),
              c[11] || (c[11] = C("div", { class: "tc-text-gray-300" }, " | ", -1)),
              C("div", Ub, [
                C("button", {
                  "data-test": "pagination-next-button",
                  disabled: !e.pagination.has_next,
                  class: "tc-relative tc-inline-flex tc-items-center tc-uppercase tc-font-semibold tc-text-xs tc-text-gray-700 hover:tc-text-gray-400",
                  onClick: c[2] || (c[2] = (h) => o())
                }, [
                  c[9] || (c[9] = C("span", null, "Next", -1)),
                  ee(re(uv), {
                    "aria-hidden": "true",
                    class: "tc-h-3 tc-w-3 tc-ml-2"
                  })
                ], 8, _b)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}, qb = { class: "tc-py-1" }, Zb = ["onClick"], Kb = {
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
    return (t, i) => (L(), $e(re(ps), {
      as: "div",
      class: "tc-relative tc-inline-block tc-text-left"
    }, {
      default: Me(() => [
        C("div", null, [
          ee(re(vs), { class: "tc-flex tc-items-center tc-rounded-full tc-bg-gray-100 tc-text-gray-400 hover:tc-text-gray-600 focus:tc-outline-none focus:tc-ring-2 focus:tc-ring-indigo-500 focus:tc-ring-offset-2 focus:tc-ring-offset-gray-100" }, {
            default: Me(() => [
              i[0] || (i[0] = C("span", { class: "tc-sr-only" }, "Open options", -1)),
              Ce(t.$slots, "icon", {}, () => [
                ee(re(fv), {
                  class: "tc-size-5",
                  "aria-hidden": "true"
                })
              ], !0)
            ]),
            _: 3
          })
        ]),
        ee(Wr, { name: "dropdown" }, {
          default: Me(() => [
            ee(re(ms), {
              class: we(["tc-absolute tc-right-0 tc-z-50 tc-mt-2 tc-w-56 tc-origin-top-right tc-rounded-md tc-bg-white tc-shadow-lg tc-ring-1 tc-ring-black tc-ring-opacity-5 focus:tc-outline-none", e.position === "left" ? "tc-right-0 z-50" : "tc-left-0 tc-z-50"])
            }, {
              default: Me(() => [
                C("div", qb, [
                  (L(!0), j(ce, null, Le(e.actions, (a, o) => (L(), $e(re(gs), { key: o }, {
                    default: Me(({ active: s, close: l }) => [
                      C("a", {
                        class: we([[s ? "tc-bg-gray-100 tc-text-gray-900" : "tc-text-gray-700", "tc-block tc-px-4 tc-py-2 tc-text-sm"], "tc-cursor-pointer"]),
                        onClick: Tt((c) => r(a, l), ["stop", "prevent"])
                      }, ne(a.label), 11, Zb)
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
}, Gb = /* @__PURE__ */ yo(Kb, [["__scopeId", "data-v-45f30c50"]]), Xb = ["data-test"], Jb = {
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
    const n = B(() => {
      const { total: i = 0 } = t.pagination || {}, a = r.value + t.idx;
      return t.reverse ? i - a + 1 : a;
    }), r = B(() => {
      const { current_page: i = 1, per_page: a = 1 } = t.pagination || {};
      return (i - 1) * a + 1;
    }), t = e;
    return (i, a) => (L(), j("span", {
      class: "text-base",
      "data-test": "batch-item-" + e.idx
    }, ne(n.value), 9, Xb));
  }
}, Qb = { class: "overflow-x-auto" }, e1 = { class: "tc-mt-8 tc-flow-root" }, t1 = { class: "tc-inline-block tc-min-w-full tc-py-2 tc-min-h-[300px] tc-align-middle" }, n1 = { class: "tc-min-h-[300px]" }, r1 = { key: 0 }, a1 = {
  class: "tc-min-w-full tc-divide-y tc-divide-gray-200",
  "data-test": "table"
}, o1 = { class: "tc-bg-gray-300 tc-text-gray-500 tc-text-sm" }, i1 = {
  key: 0,
  class: "tc-py-2.5"
}, s1 = { key: 1 }, l1 = { key: 2 }, u1 = { class: "tc-divide-y tc-divide-gray-200" }, c1 = ["data-test"], d1 = {
  key: 0,
  class: "tc-whitespace-nowrap tc-text-center tc-py-4 tc-text-sm tc-font-medium tc-text-gray-900"
}, f1 = {
  key: 1,
  class: "tc-whitespace-nowrap tc-text-center tc-py-4 tc-text-sm tc-font-medium tc-text-gray-900"
}, h1 = {
  key: 2,
  class: "tc-relative tc-whitespace-nowrap tc-py-4 tc-text-sm tc-font-medium sm:tc-pr-0"
}, p1 = { key: 1 }, _1 = {
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
    const r = Rn({
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
    }), (c, d) => (L(), j("div", Qb, [
      C("div", e1, [
        C("div", t1, [
          C("div", n1, [
            e.showPagination ? (L(), j("div", r1, [
              ee(Ui, {
                pagination: r.pagination,
                onPage: e.goPage
              }, null, 8, ["pagination", "onPage"])
            ])) : Q("", !0),
            C("table", a1, [
              C("thead", o1, [
                C("tr", null, [
                  e.batchActions ? (L(), j("th", i1, [
                    ee(ei, {
                      modelValue: r.batchAll,
                      "onUpdate:modelValue": d[0] || (d[0] = (f) => r.batchAll = f),
                      "data-test": "checkbox-batch-all" + e.dataTest,
                      type: "checkbox",
                      onClicked: i
                    }, null, 8, ["modelValue", "data-test"])
                  ])) : Q("", !0),
                  e.numerate ? (L(), j("th", s1, " No. ")) : Q("", !0),
                  Ce(c.$slots, "headers"),
                  e.itemActions ? (L(), j("th", l1, " Actions ")) : Q("", !0)
                ])
              ]),
              C("tbody", u1, [
                Ce(c.$slots, "rows"),
                (L(!0), j(ce, null, Le(r.data, (f, u) => (L(), j("tr", {
                  key: u,
                  "data-test": "row-index-" + u
                }, [
                  e.batchActions ? (L(), j("td", d1, [
                    ee(ei, {
                      "data-test": "batch-list-" + u,
                      value: s(f.id),
                      type: "checkbox",
                      "onUpdate:modelValue": (h) => l(f)
                    }, null, 8, ["data-test", "value", "onUpdate:modelValue"])
                  ])) : Q("", !0),
                  e.numerate ? (L(), j("td", f1, [
                    ee(Jb, {
                      pagination: r.pagination,
                      idx: u,
                      "data-test": "numbering"
                    }, null, 8, ["pagination", "idx"])
                  ])) : Q("", !0),
                  Ce(c.$slots, "columns", {
                    item: f,
                    class: "tc-text-center tc-text-sm"
                  }),
                  e.itemActions ? (L(), j("td", h1, [
                    ee(Gb, {
                      actions: e.itemActions,
                      item: f
                    }, null, 8, ["actions", "item"])
                  ])) : Q("", !0)
                ], 8, c1))), 128))
              ])
            ]),
            e.showPagination ? (L(), j("div", p1, [
              ee(Ui, {
                pagination: r.pagination,
                "show-results": !1,
                onPage: e.goPage
              }, null, 8, ["pagination", "onPage"])
            ])) : Q("", !0)
          ])
        ])
      ])
    ]));
  }
}, q1 = {
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
    const r = e, t = B(() => r.active), i = n, a = () => {
      i("sort", { sort: r.sort, dir: r.dir === "asc" ? "desc" : "asc" });
    };
    return (o, s) => (L(), j("span", {
      class: "tc-cursor-pointer tc-group tc-inline-flex",
      onClick: s[0] || (s[0] = (l) => a())
    }, [
      Ce(o.$slots, "default"),
      C("span", {
        class: we([
          "tc-ml-2 tc-flex-none tc-rounded",
          { "tc-bg-tonik-purple tc-text-white": t.value, "tc-bg-gray-100 tc-text-gray-900": t.value }
        ])
      }, [
        r.dir === "asc" ? (L(), $e(re(cv), {
          key: 0,
          "aria-hidden": "true",
          class: "tc-h-5 tc-w-5"
        })) : Q("", !0),
        r.dir === "desc" ? (L(), $e(re(sv), {
          key: 1,
          "aria-hidden": "true",
          class: "tc-h-5 tc-w-5"
        })) : Q("", !0)
      ], 2)
    ]));
  }
};
export {
  j1 as A,
  B1 as B,
  z1 as C,
  N1 as D,
  H1 as E,
  V1 as F,
  W1 as G,
  U1 as H,
  M1 as I,
  Ui as J,
  _1 as K,
  q1 as L,
  Gb as M,
  m1 as _,
  g1 as a,
  y1 as b,
  bc as c,
  w1 as d,
  ei as e,
  x1 as f,
  an as g,
  $1 as h,
  S1 as i,
  k1 as j,
  D1 as k,
  T1 as l,
  P1 as m,
  E1 as n,
  ri as o,
  F1 as p,
  O1 as q,
  jn as r,
  A1 as s,
  C1 as t,
  $m as u,
  Es as v,
  L1 as w,
  I1 as x,
  R1 as y,
  Y1 as z
};
