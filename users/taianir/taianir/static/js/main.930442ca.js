/*! For license information please see main.930442ca.js.LICENSE.txt */
!(function () {
  var e = {
      905: function (e, t, n) {
        var r = n(989);
        function a(e, t) {
          var n = new r(e, t);
          return function (e) {
            return n.convert(e);
          };
        }
        (a.BIN = "01"),
          (a.OCT = "01234567"),
          (a.DEC = "0123456789"),
          (a.HEX = "0123456789abcdef"),
          (e.exports = a);
      },
      989: function (e) {
        "use strict";
        function t(e, t) {
          if (!e || !t || !e.length || !t.length)
            throw new Error("Bad alphabet");
          (this.srcAlphabet = e), (this.dstAlphabet = t);
        }
        (t.prototype.convert = function (e) {
          var t,
            n,
            r,
            a = {},
            l = this.srcAlphabet.length,
            o = this.dstAlphabet.length,
            i = e.length,
            u = "string" === typeof e ? "" : [];
          if (!this.isValid(e))
            throw new Error(
              'Number "' +
                e +
                '" contains of non-alphabetic digits (' +
                this.srcAlphabet +
                ")"
            );
          if (this.srcAlphabet === this.dstAlphabet) return e;
          for (t = 0; t < i; t++) a[t] = this.srcAlphabet.indexOf(e[t]);
          do {
            for (n = 0, r = 0, t = 0; t < i; t++)
              (n = n * l + a[t]) >= o
                ? ((a[r++] = parseInt(n / o, 10)), (n %= o))
                : r > 0 && (a[r++] = 0);
            (i = r), (u = this.dstAlphabet.slice(n, n + 1).concat(u));
          } while (0 !== r);
          return u;
        }),
          (t.prototype.isValid = function (e) {
            for (var t = 0; t < e.length; ++t)
              if (-1 === this.srcAlphabet.indexOf(e[t])) return !1;
            return !0;
          }),
          (e.exports = t);
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          j = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          T = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var F = Symbol.iterator;
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (F && e[F]) || e["@@iterator"])
            ? e
            : null;
        }
        var I,
          R = Object.assign;
        function D(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var A = !1;
        function U(e, t) {
          if (!e || A) return "";
          A = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (A = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case _:
              return "StrictMode";
            case N:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case j:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Y(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          Y(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function le(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = R(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          _e = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = wa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          Se ? (_e ? _e.push(e) : (_e = [e])) : (Se = e);
        }
        function je() {
          if (Se) {
            var e = Se,
              t = _e;
            if (((_e = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Ne() {}
        var Oe = !1;
        function Le(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Oe = !1), (null !== Se || null !== _e) && (Ne(), je());
          }
        }
        function Te(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var ze = !1;
        if (c)
          try {
            var Fe = {};
            Object.defineProperty(Fe, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", Fe, Fe),
              window.removeEventListener("test", Fe, Fe);
          } catch (ce) {
            ze = !1;
          }
        function Me(e, t, n, r, a, l, o, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ie = !1,
          Re = null,
          De = !1,
          Ae = null,
          Ue = {
            onError: function (e) {
              (Ie = !0), (Re = e);
            },
          };
        function Be(e, t, n, r, a, l, o, i, u) {
          (Ie = !1), (Re = null), Me.apply(Ue, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Ve(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return He(a), e;
                    if (o === r) return He(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ye = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = ft(i)) : 0 !== (l &= o) && (r = ft(l));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== l && (r = ft(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          St,
          _t,
          Ct,
          Et = !1,
          jt = [],
          Pt = null,
          Nt = null,
          Ot = null,
          Lt = new Map(),
          Tt = new Map(),
          zt = [],
          Ft =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Rt(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function At(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function Ut() {
          (Et = !1),
            null !== Pt && Dt(Pt) && (Pt = null),
            null !== Nt && Dt(Nt) && (Nt = null),
            null !== Ot && Dt(Ot) && (Ot = null),
            Lt.forEach(At),
            Tt.forEach(At);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Vt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < jt.length) {
            Bt(jt[0], e);
            for (var n = 1; n < jt.length; n++) {
              var r = jt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Bt(Pt, e),
              null !== Nt && Bt(Nt, e),
              null !== Ot && Bt(Ot, e),
              Lt.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < zt.length;
            n++
          )
            (r = zt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
            Rt(n), null === n.blockedOn && zt.shift();
        }
        var $t = x.ReactCurrentBatchConfig,
          Ht = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            l = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = l);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            l = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), ($t.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var a = Gt(e, t, n, r);
            if (null === a) Hr(e, t, r, Kt, n), Mt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = It(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nt = It(Nt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = It(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Lt.set(l, It(Lt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Tt.set(l, It(Tt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Mt(e, r), 4 & t && -1 < Ft.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && wt(l),
                  null === (l = Gt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Gt(e, t, n, r) {
          if (((Kt = null), null !== (e = ga((e = we(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Yt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Yt ? Yt.value : Yt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = R({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = R({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (on = e.screenY - un.screenY))
                      : (on = ln = 0),
                    (un = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(R({}, pn, { dataTransfer: 0 })),
          vn = an(R({}, fn, { relatedTarget: 0 })),
          yn = an(
            R({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = R({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          xn = an(R({}, sn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return _n;
        }
        var En = R({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          jn = an(En),
          Pn = an(
            R({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = an(
            R({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          On = an(
            R({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = R({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tn = an(Ln),
          zn = [9, 13, 27, 32],
          Fn = c && "CompositionEvent" in window,
          Mn = null;
        c && "documentMode" in document && (Mn = document.documentMode);
        var In = c && "TextEvent" in window && !Mn,
          Rn = c && (!Fn || (Mn && 8 < Mn && 11 >= Mn)),
          Dn = String.fromCharCode(32),
          An = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ee(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Kn(e) {
          Dr(e, 0);
        }
        function Gn(e) {
          if (q(xa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Yn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Yn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(qn)) {
            var t = [];
            Wn(t, qn, e, we(e)), Le(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(qn);
        }
        function lr(e, t) {
          if ("click" === e) return Gn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          yr = null,
          gr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== K(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = Qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          _r = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Er = Cr("animationend"),
          jr = Cr("animationiteration"),
          Pr = Cr("animationstart"),
          Nr = Cr("transitionend"),
          Or = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Tr(e, t) {
          Or.set(e, t), u(t, [e]);
        }
        for (var zr = 0; zr < Lr.length; zr++) {
          var Fr = Lr[zr];
          Tr(Fr.toLowerCase(), "on" + (Fr[0].toUpperCase() + Fr.slice(1)));
        }
        Tr(Er, "onAnimationEnd"),
          Tr(jr, "onAnimationIteration"),
          Tr(Pr, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(Nr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr)
          );
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, u, s) {
              if ((Be.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(l(198));
                var c = Re;
                (Ie = !1), (Re = null), De || ((De = !0), (Ae = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  Rr(a, i, s), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  Rr(a, i, s), (l = u);
                }
            }
          }
          if (De) throw ((e = Ae), (De = !1), (Ae = null), e);
        }
        function Ar(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ur("selectionchange", !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !ze ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = ga(i))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = l,
              a = we(n),
              o = [];
            e: {
              var i = Or.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = jn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = vn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Nn;
                    break;
                  case Er:
                  case jr:
                  case Pr:
                    u = yn;
                    break;
                  case Nr:
                    u = On;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Tn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Te(h, d)) &&
                        c.push(Wr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ga(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ga(s)
                          : null) &&
                        (s !== (f = Ve(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : xa(u)),
                  (p = null == s ? i : xa(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = d; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Kr(o, i, u, c, !1),
                  null !== s && null !== f && Kr(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? xa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var v = Xn;
              else if (Hn(i))
                if (Yn) v = or;
                else {
                  v = ar;
                  var y = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? Wn(o, v, n, a)
                  : (y && y(e, i, r),
                    "focusout" === e &&
                      (y = i._wrapperState) &&
                      y.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (y = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((vr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, a);
              }
              var g;
              if (Fn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Rn &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (g = en())
                    : ((Jt = "value" in (Yt = a) ? Yt.value : Yt.textContent),
                      (Vn = !0))),
                0 < (y = Qr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  o.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Bn(n)) && (b.data = g))),
                (g = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((An = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && An ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!Fn && Un(e, t))
                          ? ((e = en()), (Zt = Jt = Yt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Rn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Dr(o, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Te(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = Te(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Te(n, l)) && o.unshift(Wr(n, u, i))
                : a || (null != (u = Te(n, l)) && o.push(Wr(n, u, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Gr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Xr, "");
        }
        function Jr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(l(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          va = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function _a(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Ea(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var ja = {},
          Pa = _a(ja),
          Na = _a(!1),
          Oa = ja;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return ja;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function za() {
          Ca(Na), Ca(Pa);
        }
        function Fa(e, t, n) {
          if (Pa.current !== ja) throw Error(l(168));
          Ea(Pa, t), Ea(Na, n);
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, $(e) || "Unknown", a));
          return R({}, n, r);
        }
        function Ia(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              ja),
            (Oa = Pa.current),
            Ea(Pa, e),
            Ea(Na, Na.current),
            !0
          );
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Ma(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Na),
              Ca(Pa),
              Ea(Pa, e))
            : Ca(Na),
            Ea(Na, n);
        }
        var Da = null,
          Aa = !1,
          Ua = !1;
        function Ba(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Va() {
          if (!Ua && null !== Da) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Aa = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe(Ze, Va), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var $a = [],
          Ha = 0,
          Wa = null,
          Qa = 0,
          qa = [],
          Ka = 0,
          Ga = null,
          Xa = 1,
          Ya = "";
        function Ja(e, t) {
          ($a[Ha++] = Qa), ($a[Ha++] = Wa), (Wa = e), (Qa = t);
        }
        function Za(e, t, n) {
          (qa[Ka++] = Xa), (qa[Ka++] = Ya), (qa[Ka++] = Ga), (Ga = e);
          var r = Xa;
          e = Ya;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Xa = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ya = l + e);
          } else (Xa = (1 << l) | (n << a) | r), (Ya = e);
        }
        function el(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = $a[--Ha]), ($a[Ha] = null), (Qa = $a[--Ha]), ($a[Ha] = null);
          for (; e === Ga; )
            (Ga = qa[--Ka]),
              (qa[Ka] = null),
              (Ya = qa[--Ka]),
              (qa[Ka] = null),
              (Xa = qa[--Ka]),
              (qa[Ka] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = Ls(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function il(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Xa, overflow: Ya } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ls(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ul(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function sl(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!il(e, t)) {
                if (ul(e)) throw Error(l(418));
                t = sa(n.nextSibling);
                var r = nl;
                t && il(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (ul(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function fl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (ul(e)) throw (dl(), Error(l(418)));
            for (; t; ) ol(e, t), (t = sa(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function dl() {
          for (var e = rl; e; ) e = sa(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = x.ReactCurrentBatchConfig;
        function vl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = R({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yl = _a(null),
          gl = null,
          bl = null,
          xl = null;
        function wl() {
          xl = bl = gl = null;
        }
        function kl(e) {
          var t = yl.current;
          Ca(yl), (e._currentValue = t);
        }
        function Sl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function _l(e, t) {
          (gl = e),
            (xl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xi = !0), (e.firstContext = null));
        }
        function Cl(e) {
          var t = e._currentValue;
          if (xl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === gl) throw Error(l(308));
              (bl = e), (gl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var El = null;
        function jl(e) {
          null === El ? (El = [e]) : El.push(e);
        }
        function Pl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), jl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Nl(e, r)
          );
        }
        function Nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ol = !1;
        function Ll(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Tl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Fl(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Pu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Nl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), jl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Nl(e, n)
          );
        }
        function Ml(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Il(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Rl(e, t, n, r) {
          var a = e.updateQueue;
          Ol = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = R({}, f, d);
                      break e;
                    case 2:
                      Ol = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Iu |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Dl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Al = new r.Component().refs;
        function Ul(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              l = zl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Fl(e, l, a)) && (ns(t, e, a, r), Ml(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              l = zl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Fl(e, l, a)) && (ns(t, e, a, r), Ml(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              a = zl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Fl(e, a, r)) && (ns(t, e, r, n), Ml(t, e, r));
          },
        };
        function Vl(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, l);
        }
        function $l(e, t, n) {
          var r = !1,
            a = ja,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Cl(l))
              : ((a = Ta(t) ? Oa : Pa.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : ja)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Hl(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Al), Ll(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Cl(l))
            : ((l = Ta(t) ? Oa : Pa.current), (a.context = La(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Ul(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bl.enqueueReplaceState(a, a.state, null),
              Rl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ql(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Al && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Kl(e) {
          return (0, e._init)(e._payload);
        }
        function Gl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = zs(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Rs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var l = n.type;
            return l === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === T &&
                    Kl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ql(e, t, n)), (r.return = e), r)
              : (((r = Fs(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ds(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Ms(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Rs("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Fs(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Ds(t, e.mode, n)).return = e), t;
                case T:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || M(t))
                return ((t = Ms(t, e.mode, n, null)).return = e), t;
              ql(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case T:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || M(n)) return null !== a ? null : f(e, t, n, r, null);
              ql(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case T:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || M(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              ql(t, r);
            }
            return null;
          }
          function m(a, l, i, u) {
            for (
              var s = null, c = null, f = l, m = (l = 0), v = null;
              null !== f && m < i.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var y = p(a, f, i[m], u);
              if (null === y) {
                null === f && (f = v);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (l = o(y, l, m)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = v);
            }
            if (m === i.length) return n(a, f), al && Ja(a, m), s;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) &&
                  ((l = o(f, l, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return al && Ja(a, m), s;
            }
            for (f = r(a, f); m < i.length; m++)
              null !== (v = h(f, a, m, i[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (l = o(v, l, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, m),
              s
            );
          }
          function v(a, i, u, s) {
            var c = M(u);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (u = c.call(u))) throw Error(l(151));
            for (
              var f = (c = null), m = i, v = (i = 0), y = null, g = u.next();
              null !== m && !g.done;
              v++, g = u.next()
            ) {
              m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(a, m, g.value, s);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = y);
            }
            if (g.done) return n(a, m), al && Ja(a, v), c;
            if (null === m) {
              for (; !g.done; v++, g = u.next())
                null !== (g = d(a, g.value, s)) &&
                  ((i = o(g, i, v)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return al && Ja(a, v), c;
            }
            for (m = r(a, m); !g.done; v++, g = u.next())
              null !== (g = h(m, a, v, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  m.delete(null === g.key ? v : g.key),
                (i = o(g, i, v)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, v),
              c
            );
          }
          return function e(r, l, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var s = o.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === T &&
                            Kl(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = Ql(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((l = Ms(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = l))
                      : (((u = Fs(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ql(r, l, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case k:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Ds(o, r.mode, u)).return = r), (r = l);
                  }
                  return i(r);
                case T:
                  return e(r, l, (c = o._init)(o._payload), u);
              }
              if (te(o)) return m(r, l, o, u);
              if (M(o)) return v(r, l, o, u);
              ql(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Rs(o, r.mode, u)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var Xl = Gl(!0),
          Yl = Gl(!1),
          Jl = {},
          Zl = _a(Jl),
          eo = _a(Jl),
          to = _a(Jl);
        function no(e) {
          if (e === Jl) throw Error(l(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ea(to, t), Ea(eo, e), Ea(Zl, Jl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Zl), Ea(Zl, t);
        }
        function ao() {
          Ca(Zl), Ca(eo), Ca(to);
        }
        function lo(e) {
          no(to.current);
          var t = no(Zl.current),
            n = ue(t, e.type);
          t !== n && (Ea(eo, e), Ea(Zl, n));
        }
        function oo(e) {
          eo.current === e && (Ca(Zl), Ca(eo));
        }
        var io = _a(0);
        function uo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var so = [];
        function co() {
          for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null;
          so.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          po = x.ReactCurrentBatchConfig,
          ho = 0,
          mo = null,
          vo = null,
          yo = null,
          go = !1,
          bo = !1,
          xo = 0,
          wo = 0;
        function ko() {
          throw Error(l(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function _o(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (mo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (yo = vo = null),
                (t.updateQueue = null),
                (fo.current = si),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = oi),
            (t = null !== vo && null !== vo.next),
            (ho = 0),
            (yo = vo = mo = null),
            (go = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function Co() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Eo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yo ? (mo.memoizedState = yo = e) : (yo = yo.next = e), yo
          );
        }
        function jo() {
          if (null === vo) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vo.next;
          var t = null === yo ? mo.memoizedState : yo.next;
          if (null !== t) (yo = t), (vo = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (vo = e).memoizedState,
              baseState: vo.baseState,
              baseQueue: vo.baseQueue,
              queue: vo.queue,
              next: null,
            }),
              null === yo ? (mo.memoizedState = yo = e) : (yo = yo.next = e);
          }
          return yo;
        }
        function Po(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function No(e) {
          var t = jo(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = vo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (mo.lanes |= f),
                  (Iu |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (xi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (mo.lanes |= o), (Iu |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Oo(e) {
          var t = jo(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, t.memoizedState) || (xi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Lo() {}
        function To(e, t) {
          var n = mo,
            r = jo(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (xi = !0)),
            (r = r.queue),
            Ho(Mo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== yo && 1 & yo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ao(9, Fo.bind(null, n, r, a, t), void 0, null),
              null === Nu)
            )
              throw Error(l(349));
            0 !== (30 & ho) || zo(n, t, a);
          }
          return a;
        }
        function zo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Fo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Io(t) && Ro(e);
        }
        function Mo(e, t, n) {
          return n(function () {
            Io(t) && Ro(e);
          });
        }
        function Io(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ro(e) {
          var t = Nl(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function Do(e) {
          var t = Eo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Po,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, mo, e)),
            [t.memoizedState, e]
          );
        }
        function Ao(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Uo() {
          return jo().memoizedState;
        }
        function Bo(e, t, n, r) {
          var a = Eo();
          (mo.flags |= e),
            (a.memoizedState = Ao(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Vo(e, t, n, r) {
          var a = jo();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== vo) {
            var o = vo.memoizedState;
            if (((l = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = Ao(t, n, l, r));
          }
          (mo.flags |= e), (a.memoizedState = Ao(1 | t, n, l, r));
        }
        function $o(e, t) {
          return Bo(8390656, 8, e, t);
        }
        function Ho(e, t) {
          return Vo(2048, 8, e, t);
        }
        function Wo(e, t) {
          return Vo(4, 2, e, t);
        }
        function Qo(e, t) {
          return Vo(4, 4, e, t);
        }
        function qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ko(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vo(4, 4, qo.bind(null, t, e), n)
          );
        }
        function Go() {}
        function Xo(e, t) {
          var n = jo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Yo(e, t) {
          var n = jo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Jo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (xi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (mo.lanes |= n), (Iu |= n), (e.baseState = !0)),
              t);
        }
        function Zo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function ei() {
          return jo().memoizedState;
        }
        function ti(e, t, n) {
          var r = ts(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = Pl(e, t, n, r))) {
            ns(n, e, r, es()), li(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = ts(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), jl(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = Pl(e, t, a, r)) &&
              (ns(n, e, r, (a = es())), li(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === mo || (null !== t && t === mo);
        }
        function ai(e, t) {
          bo = go = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function li(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var oi = {
            readContext: Cl,
            useCallback: ko,
            useContext: ko,
            useEffect: ko,
            useImperativeHandle: ko,
            useInsertionEffect: ko,
            useLayoutEffect: ko,
            useMemo: ko,
            useReducer: ko,
            useRef: ko,
            useState: ko,
            useDebugValue: ko,
            useDeferredValue: ko,
            useTransition: ko,
            useMutableSource: ko,
            useSyncExternalStore: ko,
            useId: ko,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Cl,
            useCallback: function (e, t) {
              return (Eo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Cl,
            useEffect: $o,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bo(4194308, 4, qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Eo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Eo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, mo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Eo().memoizedState = e);
            },
            useState: Do,
            useDebugValue: Go,
            useDeferredValue: function (e) {
              return (Eo().memoizedState = e);
            },
            useTransition: function () {
              var e = Do(!1),
                t = e[0];
              return (
                (e = Zo.bind(null, e[1])), (Eo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mo,
                a = Eo();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Nu)) throw Error(l(349));
                0 !== (30 & ho) || zo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                $o(Mo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Ao(9, Fo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Eo(),
                t = Nu.identifierPrefix;
              if (al) {
                var n = Ya;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - ot(Xa) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Cl,
            useCallback: Xo,
            useContext: Cl,
            useEffect: Ho,
            useImperativeHandle: Ko,
            useInsertionEffect: Wo,
            useLayoutEffect: Qo,
            useMemo: Yo,
            useReducer: No,
            useRef: Uo,
            useState: function () {
              return No(Po);
            },
            useDebugValue: Go,
            useDeferredValue: function (e) {
              return Jo(jo(), vo.memoizedState, e);
            },
            useTransition: function () {
              return [No(Po)[0], jo().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: To,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: Cl,
            useCallback: Xo,
            useContext: Cl,
            useEffect: Ho,
            useImperativeHandle: Ko,
            useInsertionEffect: Wo,
            useLayoutEffect: Qo,
            useMemo: Yo,
            useReducer: Oo,
            useRef: Uo,
            useState: function () {
              return Oo(Po);
            },
            useDebugValue: Go,
            useDeferredValue: function (e) {
              var t = jo();
              return null === vo
                ? (t.memoizedState = e)
                : Jo(t, vo.memoizedState, e);
            },
            useTransition: function () {
              return [Oo(Po)[0], jo().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: To,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fi(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function hi(e, t, n) {
          ((n = zl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hu || ((Hu = !0), (Wu = r)), di(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = zl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
        }
        function yi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zl(-1, 1)).tag = 2), Fl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = x.ReactCurrentOwner,
          xi = !1;
        function wi(e, t, n, r) {
          t.child = null === e ? Yl(t, null, n, r) : Xl(t, e.child, n, r);
        }
        function ki(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            _l(t, a),
            (r = _o(e, t, n, r, l, a)),
            (n = Co()),
            null === e || xi
              ? (al && n && el(t), (t.flags |= 1), wi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Ts(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fs(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), _i(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Hi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = zs(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _i(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
              if (((xi = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Hi(e, t, a);
              0 !== (131072 & e.flags) && (xi = !0);
            }
          }
          return ji(e, t, n, r, a);
        }
        function Ci(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ea(zu, Tu),
                (Tu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ea(zu, Tu),
                  (Tu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ea(zu, Tu),
                (Tu |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ea(zu, Tu),
              (Tu |= r);
          return wi(e, t, a, n), t.child;
        }
        function Ei(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function ji(e, t, n, r, a) {
          var l = Ta(n) ? Oa : Pa.current;
          return (
            (l = La(t, l)),
            _l(t, a),
            (n = _o(e, t, n, r, l, a)),
            (r = Co()),
            null === e || xi
              ? (al && r && el(t), (t.flags |= 1), wi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function Pi(e, t, n, r, a) {
          if (Ta(n)) {
            var l = !0;
            Ia(t);
          } else l = !1;
          if ((_l(t, a), null === t.stateNode))
            $i(e, t), $l(t, n, r), Wl(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var u = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Cl(s))
              : (s = La(t, (s = Ta(n) ? Oa : Pa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== s) && Hl(t, o, r, s)),
              (Ol = !1);
            var d = t.memoizedState;
            (o.state = d),
              Rl(t, r, o, a),
              (u = t.memoizedState),
              i !== r || d !== u || Na.current || Ol
                ? ("function" === typeof c &&
                    (Ul(t, n, c, r), (u = t.memoizedState)),
                  (i = Ol || Vl(t, n, i, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Tl(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : vl(t.type, i)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Cl(u))
                : (u = La(t, (u = Ta(n) ? Oa : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== f || d !== u) && Hl(t, o, r, u)),
              (Ol = !1),
              (d = t.memoizedState),
              (o.state = d),
              Rl(t, r, o, a);
            var h = t.memoizedState;
            i !== f || d !== h || Na.current || Ol
              ? ("function" === typeof p &&
                  (Ul(t, n, p, r), (h = t.memoizedState)),
                (s = Ol || Vl(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ni(e, t, n, r, l, a);
        }
        function Ni(e, t, n, r, a, l) {
          Ei(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Ra(t, n, !1), Hi(e, t, l);
          (r = t.stateNode), (bi.current = t);
          var i =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Xl(t, e.child, null, l)),
                (t.child = Xl(t, null, i, l)))
              : wi(e, t, i, l),
            (t.memoizedState = r.state),
            a && Ra(t, n, !0),
            t.child
          );
        }
        function Oi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Fa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Fa(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Li(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), wi(e, t, n, r), t.child;
        }
        var Ti,
          zi,
          Fi,
          Mi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ii(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ri(e, t, n) {
          var r,
            a = t.pendingProps,
            o = io.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ea(io, 1 & o),
            null === e)
          )
            return (
              sl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Is(u, a, 0, null)),
                      (e = Ms(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Ii(n)),
                      (t.memoizedState = Mi),
                      e)
                    : Di(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ai(e, t, i, (r = fi(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Is(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Ms(o, a, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xl(t, e.child, null, i),
                    (t.child.memoizedState = Ii(i)),
                    (t.memoizedState = Mi),
                    o);
              if (0 === (1 & t.mode)) return Ai(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ai(e, t, i, (r = fi((o = Error(l(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), xi || u)) {
                if (null !== (r = Nu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Nl(e, a), ns(r, e, a, -1));
                }
                return ms(), Ai(e, t, i, (r = fi(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = js.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = sa(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ka++] = Xa),
                    (qa[Ka++] = Ya),
                    (qa[Ka++] = Ga),
                    (Xa = e.id),
                    (Ya = e.overflow),
                    (Ga = t)),
                  ((t = Di(t, r.children)).flags |= 4096),
                  t);
            })(e, t, u, a, r, o, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = zs(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = zs(r, i))
                : ((i = Ms(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ii(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Mi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = zs(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Di(e, t) {
          return (
            ((t = Is(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ai(e, t, n, r) {
          return (
            null !== r && hl(r),
            Xl(t, e.child, null, n),
            ((e = Di(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ui(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Sl(e.return, t, n);
        }
        function Bi(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Vi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = io.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t);
                else if (19 === e.tag) Ui(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ea(io, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === uo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bi(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === uo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bi(t, !0, n, null, l);
                break;
              case "together":
                Bi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $i(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Iu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = zs((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = zs(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wi(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qi(t), null;
            case 1:
            case 17:
              return Ta(t.type) && za(), Qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Ca(Na),
                Ca(Pa),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (os(ll), (ll = null)))),
                Qi(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                zi(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Qi(t), null;
                }
                if (((e = no(Zl.current)), fl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ar("cancel", r), Ar("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Mr.length; a++) Ar(Mr[a], r);
                      break;
                    case "source":
                      Ar("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ar("error", r), Ar("load", r);
                      break;
                    case "details":
                      Ar("toggle", r);
                      break;
                    case "input":
                      X(r, o), Ar("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ar("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Ar("invalid", r);
                  }
                  for (var u in (ge(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Ar("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      Q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ti(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Ar("cancel", e), Ar("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ar("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Mr.length; a++) Ar(Mr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ar("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ar("error", e), Ar("load", e), (a = r);
                        break;
                      case "details":
                        Ar("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = G(e, r)), Ar("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = R({}, r, { value: void 0 })),
                          Ar("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ar("invalid", e);
                    }
                    for (o in (ge(n, a), (s = a)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        "style" === o
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Ar("scroll", e)
                              : null != c && b(e, o, c, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qi(t), null;
            case 6:
              if (e && null != t.stateNode) Fi(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = no(to.current)), no(Zl.current), fl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Qi(t), null;
            case 13:
              if (
                (Ca(io),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  dl(), pl(), (t.flags |= 98560), (o = !1);
                else if (((o = fl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[da] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qi(t), (o = !1);
                } else null !== ll && (os(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & io.current)
                        ? 0 === Fu && (Fu = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null);
            case 4:
              return (
                ao(), null === e && Vr(t.stateNode.containerInfo), Qi(t), null
              );
            case 10:
              return kl(t.type._context), Qi(t), null;
            case 19:
              if ((Ca(io), null === (o = t.memoizedState))) return Qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) Wi(o, !1);
                else {
                  if (0 !== Fu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          t.flags |= 128,
                            Wi(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ea(io, (1 & io.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ye() > Vu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wi(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wi(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return Qi(t), null;
                  } else
                    2 * Ye() - o.renderingStartTime > Vu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wi(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = io.current),
                  Ea(io, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qi(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Tu) &&
                    (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Ki(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Ta(t.type) && za(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Ca(Na),
                Ca(Pa),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ca(io),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(io), null;
            case 4:
              return ao(), null;
            case 10:
              return kl(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Ti = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (zi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Zl.current);
              var l,
                o = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (o = []);
                  break;
                case "select":
                  (a = R({}, a, { value: void 0 })),
                    (r = R({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]));
                    } else n || (o || (o = []), o.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (o = o || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Ar("scroll", e),
                            o || u === s || (o = []))
                          : (o = o || []).push(c, s));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Fi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Gi = !1,
          Xi = !1,
          Yi = "function" === typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function Zi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                _s(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            _s(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && eu(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function iu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Xi || Zi(n, t);
            case 6:
              var r = cu,
                a = fu;
              (cu = null),
                du(e, t, n),
                (fu = a),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Vt(e))
                  : ua(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (a = fu),
                (cu = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (cu = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      eu(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Xi &&
                (Zi(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  _s(n, t, i);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xi = (r = Xi) || null !== n.memoizedState),
                  du(e, t, n),
                  (Xi = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Yi()),
              t.forEach(function (t) {
                var r = Ps.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(l(160));
                pu(o, i, a), (cu = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                _s(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), yu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (v) {
                  _s(e, e.return, v);
                }
                try {
                  nu(5, e, e.return);
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              break;
            case 1:
              mu(t, e), yu(e), 512 & r && null !== n && Zi(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                yu(e),
                512 & r && null !== n && Zi(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      Y(a, o),
                      be(u, i);
                    var c = be(u, o);
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1];
                      "style" === f
                        ? ve(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        J(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (v) {
                    _s(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (v) {
                  _s(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (v) {
                  _s(e, e.return, v);
                }
              break;
            case 4:
            default:
              mu(t, e), yu(e);
              break;
            case 13:
              mu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bu = Ye())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xi = (c = Xi) || f), mu(t, e), (Xi = c))
                  : mu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Ji = e, f = e.child; null !== f; ) {
                    for (d = Ji = f; null !== Ji; ) {
                      switch (((h = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Zi(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              _s(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Zi(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            wu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Ji = h)) : wu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (v) {
                        _s(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (v) {
                        _s(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), yu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    su(e, iu(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  uu(e, iu(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (i) {
              _s(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gu(e, t, n) {
          (Ji = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Ji; ) {
            var a = Ji,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Gi;
              if (!o) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Xi;
                i = Gi;
                var s = Xi;
                if (((Gi = o), (Xi = u) && !s))
                  for (Ji = a; null !== Ji; )
                    (u = (o = Ji).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ku(a)
                        : null !== u
                        ? ((u.return = o), (Ji = u))
                        : ku(a);
                for (; null !== l; ) (Ji = l), bu(l, t, n), (l = l.sibling);
                (Ji = a), (Gi = i), (Xi = s);
              }
              xu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Ji = l))
                : xu(e);
          }
        }
        function xu(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : vl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Dl(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Dl(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Vt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Xi || (512 & t.flags && au(t));
              } catch (p) {
                _s(t, t.return, p);
              }
            }
            if (t === e) {
              Ji = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function wu(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (t === e) {
              Ji = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function ku(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    _s(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      _s(t, a, u);
                    }
                  }
                  var l = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    _s(t, l, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    _s(t, o, u);
                  }
              }
            } catch (u) {
              _s(t, t.return, u);
            }
            if (t === e) {
              Ji = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Ji = i);
              break;
            }
            Ji = t.return;
          }
        }
        var Su,
          _u = Math.ceil,
          Cu = x.ReactCurrentDispatcher,
          Eu = x.ReactCurrentOwner,
          ju = x.ReactCurrentBatchConfig,
          Pu = 0,
          Nu = null,
          Ou = null,
          Lu = 0,
          Tu = 0,
          zu = _a(0),
          Fu = 0,
          Mu = null,
          Iu = 0,
          Ru = 0,
          Du = 0,
          Au = null,
          Uu = null,
          Bu = 0,
          Vu = 1 / 0,
          $u = null,
          Hu = !1,
          Wu = null,
          Qu = null,
          qu = !1,
          Ku = null,
          Gu = 0,
          Xu = 0,
          Yu = null,
          Ju = -1,
          Zu = 0;
        function es() {
          return 0 !== (6 & Pu) ? Ye() : -1 !== Ju ? Ju : (Ju = Ye());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Pu) && 0 !== Lu
            ? Lu & -Lu
            : null !== ml.transition
            ? (0 === Zu && (Zu = mt()), Zu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function ns(e, t, n, r) {
          if (50 < Xu) throw ((Xu = 0), (Yu = null), Error(l(185)));
          yt(e, n, r),
            (0 !== (2 & Pu) && e === Nu) ||
              (e === Nu && (0 === (2 & Pu) && (Ru |= n), 4 === Fu && is(e, Lu)),
              rs(e, r),
              1 === n &&
                0 === Pu &&
                0 === (1 & t.mode) &&
                ((Vu = Ye() + 500), Aa && Va()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                i = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = dt(e, e === Nu ? Lu : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Aa = !0), Ba(e);
                  })(us.bind(null, e))
                : Ba(us.bind(null, e)),
                oa(function () {
                  0 === (6 & Pu) && Va();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ns(n, as.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function as(e, t) {
          if (((Ju = -1), (Zu = 0), 0 !== (6 & Pu))) throw Error(l(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = dt(e, e === Nu ? Lu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
          else {
            t = r;
            var a = Pu;
            Pu |= 2;
            var o = hs();
            for (
              (Nu === e && Lu === t) ||
              (($u = null), (Vu = Ye() + 500), ds(e, t));
              ;

            )
              try {
                gs();
                break;
              } catch (u) {
                ps(e, u);
              }
            wl(),
              (Cu.current = o),
              (Pu = a),
              null !== Ou ? (t = 0) : ((Nu = null), (Lu = 0), (t = Fu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ls(e, a))),
              1 === t)
            )
              throw ((n = Mu), ds(e, 0), is(e, r), rs(e, Ye()), n);
            if (6 === t) is(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(l(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vs(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ls(e, o))),
                  1 === t))
              )
                throw ((n = Mu), ds(e, 0), is(e, r), rs(e, Ye()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  ws(e, Uu, $u);
                  break;
                case 3:
                  if (
                    (is(e, r),
                    (130023424 & r) === r && 10 < (t = Bu + 500 - Ye()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ws.bind(null, e, Uu, $u), t);
                    break;
                  }
                  ws(e, Uu, $u);
                  break;
                case 4:
                  if ((is(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * _u(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ws.bind(null, e, Uu, $u), r);
                    break;
                  }
                  ws(e, Uu, $u);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return rs(e, Ye()), e.callbackNode === n ? as.bind(null, e) : null;
        }
        function ls(e, t) {
          var n = Au;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256),
            2 !== (e = vs(e, t)) && ((t = Uu), (Uu = n), null !== t && os(t)),
            e
          );
        }
        function os(e) {
          null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
        }
        function is(e, t) {
          for (
            t &= ~Du,
              t &= ~Ru,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & Pu)) throw Error(l(327));
          ks();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rs(e, Ye()), null;
          var n = vs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ls(e, r)));
          }
          if (1 === n) throw ((n = Mu), ds(e, 0), is(e, t), rs(e, Ye()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ws(e, Uu, $u),
            rs(e, Ye()),
            null
          );
        }
        function ss(e, t) {
          var n = Pu;
          Pu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Pu = n) && ((Vu = Ye() + 500), Aa && Va());
          }
        }
        function cs(e) {
          null !== Ku && 0 === Ku.tag && 0 === (6 & Pu) && ks();
          var t = Pu;
          Pu |= 1;
          var n = ju.transition,
            r = bt;
          try {
            if (((ju.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (ju.transition = n), 0 === (6 & (Pu = t)) && Va();
          }
        }
        function fs() {
          (Tu = zu.current), Ca(zu);
        }
        function ds(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ou))
            for (n = Ou.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za();
                  break;
                case 3:
                  ao(), Ca(Na), Ca(Pa), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ca(io);
                  break;
                case 10:
                  kl(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Nu = e),
            (Ou = e = zs(e.current, null)),
            (Lu = Tu = t),
            (Fu = 0),
            (Mu = null),
            (Du = Ru = Iu = 0),
            (Uu = Au = null),
            null !== El)
          ) {
            for (t = 0; t < El.length; t++)
              if (null !== (r = (n = El[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            El = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = Ou;
            try {
              if ((wl(), (fo.current = oi), go)) {
                for (var r = mo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                go = !1;
              }
              if (
                ((ho = 0),
                (yo = vo = mo = null),
                (bo = !1),
                (xo = 0),
                (Eu.current = null),
                null === n || null === n.return)
              ) {
                (Fu = 1), (Mu = t), (Ou = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Lu),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      gi(h, i, u, 0, t),
                      1 & h.mode && vi(o, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vi(o, c, t), ms();
                    break e;
                  }
                  s = Error(l(426));
                } else if (al && 1 & u.mode) {
                  var y = yi(i);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gi(y, i, u, 0, t),
                      hl(ci(s, u));
                    break e;
                  }
                }
                (o = s = ci(s, u)),
                  4 !== Fu && (Fu = 2),
                  null === Au ? (Au = [o]) : Au.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Il(o, hi(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var g = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Il(o, mi(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xs(n);
            } catch (x) {
              (t = x), Ou === n && null !== n && (Ou = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Cu.current;
          return (Cu.current = oi), null === e ? oi : e;
        }
        function ms() {
          (0 !== Fu && 3 !== Fu && 2 !== Fu) || (Fu = 4),
            null === Nu ||
              (0 === (268435455 & Iu) && 0 === (268435455 & Ru)) ||
              is(Nu, Lu);
        }
        function vs(e, t) {
          var n = Pu;
          Pu |= 2;
          var r = hs();
          for ((Nu === e && Lu === t) || (($u = null), ds(e, t)); ; )
            try {
              ys();
              break;
            } catch (a) {
              ps(e, a);
            }
          if ((wl(), (Pu = n), (Cu.current = r), null !== Ou))
            throw Error(l(261));
          return (Nu = null), (Lu = 0), Fu;
        }
        function ys() {
          for (; null !== Ou; ) bs(Ou);
        }
        function gs() {
          for (; null !== Ou && !Ge(); ) bs(Ou);
        }
        function bs(e) {
          var t = Su(e.alternate, e, Tu);
          (e.memoizedProps = e.pendingProps),
            null === t ? xs(e) : (Ou = t),
            (Eu.current = null);
        }
        function xs(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Tu))) return void (Ou = n);
            } else {
              if (null !== (n = Ki(n, t)))
                return (n.flags &= 32767), void (Ou = n);
              if (null === e) return (Fu = 6), void (Ou = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ou = t);
            Ou = t = e;
          } while (null !== t);
          0 === Fu && (Fu = 5);
        }
        function ws(e, t, n) {
          var r = bt,
            a = ju.transition;
          try {
            (ju.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Ku);
                if (0 !== (6 & Pu)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === Nu && ((Ou = Nu = null), (Lu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Ns(tt, function () {
                      return ks(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = ju.transition), (ju.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = Pu;
                  (Pu |= 4),
                    (Eu.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === o && ++f === r && (s = i),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Ji = t;
                        null !== Ji;

                      )
                        if (
                          ((e = (t = Ji).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            t = Ji;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        y = m.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : vl(t.type, v),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (w) {
                              _s(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ji = e);
                              break;
                            }
                            Ji = t.return;
                          }
                      (m = tu), (tu = !1);
                    })(e, n),
                    vu(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    gu(n, e, a),
                    Xe(),
                    (Pu = u),
                    (bt = i),
                    (ju.transition = o);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Ku = e), (Gu = a)),
                  0 === (o = e.pendingLanes) && (Qu = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Hu) throw ((Hu = !1), (e = Wu), (Wu = null), e);
                0 !== (1 & Gu) && 0 !== e.tag && ks(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === Yu
                      ? Xu++
                      : ((Xu = 0), (Yu = e))
                    : (Xu = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (ju.transition = a), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Ku) {
            var e = xt(Gu),
              t = ju.transition,
              n = bt;
            try {
              if (((ju.transition = null), (bt = 16 > e ? 16 : e), null === Ku))
                var r = !1;
              else {
                if (((e = Ku), (Ku = null), (Gu = 0), 0 !== (6 & Pu)))
                  throw Error(l(331));
                var a = Pu;
                for (Pu |= 4, Ji = e.current; null !== Ji; ) {
                  var o = Ji,
                    i = o.child;
                  if (0 !== (16 & Ji.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Ji = c; null !== Ji; ) {
                          var f = Ji;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Ji = d);
                          else
                            for (; null !== Ji; ) {
                              var p = (f = Ji).sibling,
                                h = f.return;
                              if ((lu(f), f === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Ji = p);
                                break;
                              }
                              Ji = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var y = v.sibling;
                            (v.sibling = null), (v = y);
                          } while (null !== v);
                        }
                      }
                      Ji = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 !== (2048 & (o = Ji).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, o, o.return);
                        }
                      var g = o.sibling;
                      if (null !== g) {
                        (g.return = o.return), (Ji = g);
                        break e;
                      }
                      Ji = o.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var x = (i = Ji).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== x)
                    (x.return = i), (Ji = x);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 !== (2048 & (u = Ji).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (k) {
                          _s(u, u.return, k);
                        }
                      if (u === i) {
                        Ji = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Ji = w);
                        break e;
                      }
                      Ji = u.return;
                    }
                }
                if (
                  ((Pu = a),
                  Va(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (ju.transition = t);
            }
          }
          return !1;
        }
        function Ss(e, t, n) {
          (e = Fl(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (yt(e, 1, t), rs(e, t));
        }
        function _s(e, t, n) {
          if (3 === e.tag) Ss(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ss(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  (t = Fl(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (yt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Nu === e &&
              (Lu & n) === n &&
              (4 === Fu ||
              (3 === Fu && (130023424 & Lu) === Lu && 500 > Ye() - Bu)
                ? ds(e, 0)
                : (Du |= n)),
            rs(e, t);
        }
        function Es(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = Nl(e, t)) && (yt(e, t, n), rs(e, n));
        }
        function js(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Es(e, n);
        }
        function Ps(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Es(e, n);
        }
        function Ns(e, t) {
          return qe(e, t);
        }
        function Os(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ls(e, t, n, r) {
          return new Os(e, t, n, r);
        }
        function Ts(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function zs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ls(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Fs(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Ts(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return Ms(n.children, a, o, t);
              case _:
                (i = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Ls(12, n, t, 2 | a)).elementType = C), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Ls(13, n, t, a)).elementType = N), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = Ls(19, n, t, a)).elementType = O), (e.lanes = o), e
                );
              case z:
                return Is(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      i = 10;
                      break e;
                    case j:
                      i = 9;
                      break e;
                    case P:
                      i = 11;
                      break e;
                    case L:
                      i = 14;
                      break e;
                    case T:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ls(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Ms(e, t, n, r) {
          return ((e = Ls(7, e, r, t)).lanes = n), e;
        }
        function Is(e, t, n, r) {
          return (
            ((e = Ls(22, e, r, t)).elementType = z),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Rs(e, t, n) {
          return ((e = Ls(6, e, null, t)).lanes = n), e;
        }
        function Ds(e, t, n) {
          return (
            ((t = Ls(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function As(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Us(e, t, n, r, a, l, o, i, u) {
          return (
            (e = new As(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Ls(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ll(l),
            e
          );
        }
        function Bs(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Vs(e) {
          if (!e) return ja;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ta(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ta(n)) return Ma(e, n, t);
          }
          return t;
        }
        function $s(e, t, n, r, a, l, o, i, u) {
          return (
            ((e = Us(n, r, !0, e, 0, l, 0, i, u)).context = Vs(null)),
            (n = e.current),
            ((l = zl((r = es()), (a = ts(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Fl(n, l, a),
            (e.current.lanes = a),
            yt(e, a, r),
            rs(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            l = es(),
            o = ts(a);
          return (
            (n = Vs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Fl(a, t, o)) && (ns(e, a, o, l), Ml(e, a, o)),
            o
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Qs(e, t), (e = e.alternate) && Qs(e, t);
        }
        Su = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) xi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Oi(t), pl();
                        break;
                      case 5:
                        lo(t);
                        break;
                      case 1:
                        Ta(t.type) && Ia(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ea(yl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ea(io, 1 & io.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ri(e, t, n)
                            : (Ea(io, 1 & io.current),
                              null !== (e = Hi(e, t, n)) ? e.sibling : null);
                        Ea(io, 1 & io.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ea(io, io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ci(e, t, n);
                    }
                    return Hi(e, t, n);
                  })(e, t, n)
                );
              xi = 0 !== (131072 & e.flags);
            }
          else (xi = !1), al && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $i(e, t), (e = t.pendingProps);
              var a = La(t, Pa.current);
              _l(t, n), (a = _o(null, t, r, e, a, n));
              var o = Co();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ta(r) ? ((o = !0), Ia(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ll(t),
                    (a.updater = Bl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wl(t, r, e, n),
                    (t = Ni(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    wi(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($i(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ts(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = vl(r, e)),
                  a)
                ) {
                  case 0:
                    t = ji(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pi(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ki(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, vl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ji(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 3:
              e: {
                if ((Oi(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Tl(e, t),
                  Rl(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Li(e, t, r, n, (a = ci(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Li(e, t, r, n, (a = ci(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = sa(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Yl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Hi(e, t, n);
                    break e;
                  }
                  wi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                lo(t),
                null === e && sl(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ei(e, t),
                wi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && sl(t), null;
            case 13:
              return Ri(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xl(t, null, r, n)) : wi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ki(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 7:
              return wi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Ea(yl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !Na.current) {
                      t = Hi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        i = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = zl(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= n),
                              null !== (s = o.alternate) && (s.lanes |= n),
                              Sl(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Sl(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                wi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                _l(t, n),
                (r = r((a = Cl(a)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = vl((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = vl(r.type, a)), n)
              );
            case 15:
              return _i(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : vl(r, a)),
                $i(e, t),
                (t.tag = 1),
                Ta(r) ? ((e = !0), Ia(t)) : (e = !1),
                _l(t, n),
                $l(t, r, a),
                Wl(t, r, a, n),
                Ni(null, t, r, !0, e, n)
              );
            case 19:
              return Vi(e, t, n);
            case 22:
              return Ci(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Ks =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gs(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Ws(o);
                i.call(e);
              };
            }
            Hs(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Ws(o);
                    l.call(e);
                  };
                }
                var o = $s(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Ws(u);
                  i.call(e);
                };
              }
              var u = Us(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Ws(o);
        }
        (Xs.prototype.render = Gs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Hs(e, t, null, null);
          }),
          (Xs.prototype.unmount = Gs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Xs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < zt.length && 0 !== t && t < zt[n].priority;
                n++
              );
              zt.splice(n, 0, e), 0 === n && Rt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    rs(t, Ye()),
                    0 === (6 & Pu) && ((Vu = Ye() + 500), Va()));
                }
                break;
              case 13:
                cs(function () {
                  var t = Nl(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Nl(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              qs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = Nl(e, t);
              if (null !== n) ns(n, e, t, es());
              qs(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(l(90));
                      q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = ss),
          (Ne = cs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, Ee, je, ss],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ys(t)) throw Error(l(200));
            return Bs(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ys(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Ks;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Us(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Gs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Js(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ys(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              i = Ks;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = $s(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[ha] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xs(t);
          }),
          (t.render = function (e, t, n) {
            if (!Js(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Js(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Js(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: i.current,
          };
        }
        (t.Fragment = l), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var x = (b.prototype = new g());
        (x.constructor = b), m(x, y.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !_.hasOwnProperty(a) && (l[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) l.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            l.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: S.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var j = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === l ? "." + P(u, 0) : l),
              w(o)
                ? ((a = ""),
                  null != e && (a = e.replace(j, "$&/") + "/"),
                  N(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(j, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (l = "" === l ? "." : l + ":"), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + P((i = e[s]), s);
              u += N(i, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += N((i = i.value), t, a, (c = l + P(i, s++)), o);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          z = { transition: null },
          F = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = S.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !_.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((v = !1), x(e), !m))
            if (null !== r(s)) (m = !0), z(k);
            else {
              var t = r(c);
              null !== t && F(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), g(E), (E = -1)), (h = !0);
          var l = p;
          try {
            for (
              x(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var i = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(s) && a(s),
                  x(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && F(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          _ = !1,
          C = null,
          E = -1,
          j = 5,
          P = -1;
        function N() {
          return !(t.unstable_now() - P < j);
        }
        function O() {
          if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((_ = !1), (C = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            T = L.port2;
          (L.port1.onmessage = O),
            (S = function () {
              T.postMessage(null);
            });
        } else
          S = function () {
            y(O, 0);
          };
        function z(e) {
          (C = e), _ || ((_ = !0), S());
        }
        function F(e, n) {
          E = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), z(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (j = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (g(E), (E = -1)) : (v = !0), F(w, l - o)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), z(k))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      244: function (e, t, n) {
        var r,
          a = n(861).default,
          l = n(122).default,
          o = n(658).v4,
          i = n(905),
          u = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          s = { consistentLength: !0 },
          c = function (e, t, n) {
            var r = t(e.toLowerCase().replace(/-/g, ""));
            return n && n.consistentLength
              ? r.padStart(n.shortIdLength, n.paddingChar)
              : r;
          };
        e.exports = (function () {
          var e = function (e, t) {
            var n = e || u,
              r = l(l({}, s), t);
            if (a(new Set(Array.from(n))).length !== n.length)
              throw new Error(
                "The provided Alphabet has duplicate characters resulting in unreliable results"
              );
            var f,
              d =
                ((f = n.length),
                Math.ceil(Math.log(Math.pow(2, 128)) / Math.log(f))),
              p = {
                shortIdLength: d,
                consistentLength: r.consistentLength,
                paddingChar: n[0],
              },
              h = i(i.HEX, n),
              m = i(n, i.HEX),
              v = function () {
                return c(o(), h, p);
              },
              y = {
                new: v,
                generate: v,
                uuid: o,
                fromUUID: function (e) {
                  return c(e, h, p);
                },
                toUUID: function (e) {
                  return (function (e, t) {
                    var n = t(e)
                      .padStart(32, "0")
                      .match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);
                    return [n[1], n[2], n[3], n[4], n[5]].join("-");
                  })(e, m);
                },
                alphabet: n,
                maxLength: d,
              };
            return Object.freeze(y), y;
          };
          return (
            (e.constants = {
              flickrBase58: u,
              cookieBase90:
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
            }),
            (e.uuid = o),
            (e.generate = function () {
              return r || (r = e(u).generate), r();
            }),
            e
          );
        })();
      },
      658: function (e, t, n) {
        "use strict";
        var r;
        n.r(t),
          n.d(t, {
            NIL: function () {
              return T;
            },
            parse: function () {
              return v;
            },
            stringify: function () {
              return d;
            },
            v1: function () {
              return m;
            },
            v3: function () {
              return E;
            },
            v4: function () {
              return j;
            },
            v5: function () {
              return L;
            },
            validate: function () {
              return i;
            },
            version: function () {
              return z;
            },
          });
        var a = new Uint8Array(16);
        function l() {
          if (
            !r &&
            !(r =
              ("undefined" !== typeof crypto &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)) ||
              ("undefined" !== typeof msCrypto &&
                "function" === typeof msCrypto.getRandomValues &&
                msCrypto.getRandomValues.bind(msCrypto)))
          )
            throw new Error(
              "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
            );
          return r(a);
        }
        var o =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        for (
          var i = function (e) {
              return "string" === typeof e && o.test(e);
            },
            u = [],
            s = 0;
          s < 256;
          ++s
        )
          u.push((s + 256).toString(16).substr(1));
        var c,
          f,
          d = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = (
                u[e[t + 0]] +
                u[e[t + 1]] +
                u[e[t + 2]] +
                u[e[t + 3]] +
                "-" +
                u[e[t + 4]] +
                u[e[t + 5]] +
                "-" +
                u[e[t + 6]] +
                u[e[t + 7]] +
                "-" +
                u[e[t + 8]] +
                u[e[t + 9]] +
                "-" +
                u[e[t + 10]] +
                u[e[t + 11]] +
                u[e[t + 12]] +
                u[e[t + 13]] +
                u[e[t + 14]] +
                u[e[t + 15]]
              ).toLowerCase();
            if (!i(n)) throw TypeError("Stringified UUID is invalid");
            return n;
          },
          p = 0,
          h = 0;
        var m = function (e, t, n) {
          var r = (t && n) || 0,
            a = t || new Array(16),
            o = (e = e || {}).node || c,
            i = void 0 !== e.clockseq ? e.clockseq : f;
          if (null == o || null == i) {
            var u = e.random || (e.rng || l)();
            null == o && (o = c = [1 | u[0], u[1], u[2], u[3], u[4], u[5]]),
              null == i && (i = f = 16383 & ((u[6] << 8) | u[7]));
          }
          var s = void 0 !== e.msecs ? e.msecs : Date.now(),
            m = void 0 !== e.nsecs ? e.nsecs : h + 1,
            v = s - p + (m - h) / 1e4;
          if (
            (v < 0 && void 0 === e.clockseq && (i = (i + 1) & 16383),
            (v < 0 || s > p) && void 0 === e.nsecs && (m = 0),
            m >= 1e4)
          )
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (p = s), (h = m), (f = i);
          var y = (1e4 * (268435455 & (s += 122192928e5)) + m) % 4294967296;
          (a[r++] = (y >>> 24) & 255),
            (a[r++] = (y >>> 16) & 255),
            (a[r++] = (y >>> 8) & 255),
            (a[r++] = 255 & y);
          var g = ((s / 4294967296) * 1e4) & 268435455;
          (a[r++] = (g >>> 8) & 255),
            (a[r++] = 255 & g),
            (a[r++] = ((g >>> 24) & 15) | 16),
            (a[r++] = (g >>> 16) & 255),
            (a[r++] = (i >>> 8) | 128),
            (a[r++] = 255 & i);
          for (var b = 0; b < 6; ++b) a[r + b] = o[b];
          return t || d(a);
        };
        var v = function (e) {
          if (!i(e)) throw TypeError("Invalid UUID");
          var t,
            n = new Uint8Array(16);
          return (
            (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
            (n[1] = (t >>> 16) & 255),
            (n[2] = (t >>> 8) & 255),
            (n[3] = 255 & t),
            (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
            (n[5] = 255 & t),
            (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
            (n[7] = 255 & t),
            (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
            (n[9] = 255 & t),
            (n[10] =
              ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
            (n[11] = (t / 4294967296) & 255),
            (n[12] = (t >>> 24) & 255),
            (n[13] = (t >>> 16) & 255),
            (n[14] = (t >>> 8) & 255),
            (n[15] = 255 & t),
            n
          );
        };
        function y(e, t, n) {
          function r(e, r, a, l) {
            if (
              ("string" === typeof e &&
                (e = (function (e) {
                  e = unescape(encodeURIComponent(e));
                  for (var t = [], n = 0; n < e.length; ++n)
                    t.push(e.charCodeAt(n));
                  return t;
                })(e)),
              "string" === typeof r && (r = v(r)),
              16 !== r.length)
            )
              throw TypeError(
                "Namespace must be array-like (16 iterable integer values, 0-255)"
              );
            var o = new Uint8Array(16 + e.length);
            if (
              (o.set(r),
              o.set(e, r.length),
              ((o = n(o))[6] = (15 & o[6]) | t),
              (o[8] = (63 & o[8]) | 128),
              a)
            ) {
              l = l || 0;
              for (var i = 0; i < 16; ++i) a[l + i] = o[i];
              return a;
            }
            return d(o);
          }
          try {
            r.name = e;
          } catch (a) {}
          return (
            (r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
            (r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
            r
          );
        }
        function g(e) {
          return 14 + (((e + 64) >>> 9) << 4) + 1;
        }
        function b(e, t) {
          var n = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
        }
        function x(e, t, n, r, a, l) {
          return b(
            ((o = b(b(t, e), b(r, l))) << (i = a)) | (o >>> (32 - i)),
            n
          );
          var o, i;
        }
        function w(e, t, n, r, a, l, o) {
          return x((t & n) | (~t & r), e, t, a, l, o);
        }
        function k(e, t, n, r, a, l, o) {
          return x((t & r) | (n & ~r), e, t, a, l, o);
        }
        function S(e, t, n, r, a, l, o) {
          return x(t ^ n ^ r, e, t, a, l, o);
        }
        function _(e, t, n, r, a, l, o) {
          return x(n ^ (t | ~r), e, t, a, l, o);
        }
        var C = function (e) {
            if ("string" === typeof e) {
              var t = unescape(encodeURIComponent(e));
              e = new Uint8Array(t.length);
              for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
            }
            return (function (e) {
              for (
                var t = [], n = 32 * e.length, r = "0123456789abcdef", a = 0;
                a < n;
                a += 8
              ) {
                var l = (e[a >> 5] >>> a % 32) & 255,
                  o = parseInt(r.charAt((l >>> 4) & 15) + r.charAt(15 & l), 16);
                t.push(o);
              }
              return t;
            })(
              (function (e, t) {
                (e[t >> 5] |= 128 << t % 32), (e[g(t) - 1] = t);
                for (
                  var n = 1732584193,
                    r = -271733879,
                    a = -1732584194,
                    l = 271733878,
                    o = 0;
                  o < e.length;
                  o += 16
                ) {
                  var i = n,
                    u = r,
                    s = a,
                    c = l;
                  (n = w(n, r, a, l, e[o], 7, -680876936)),
                    (l = w(l, n, r, a, e[o + 1], 12, -389564586)),
                    (a = w(a, l, n, r, e[o + 2], 17, 606105819)),
                    (r = w(r, a, l, n, e[o + 3], 22, -1044525330)),
                    (n = w(n, r, a, l, e[o + 4], 7, -176418897)),
                    (l = w(l, n, r, a, e[o + 5], 12, 1200080426)),
                    (a = w(a, l, n, r, e[o + 6], 17, -1473231341)),
                    (r = w(r, a, l, n, e[o + 7], 22, -45705983)),
                    (n = w(n, r, a, l, e[o + 8], 7, 1770035416)),
                    (l = w(l, n, r, a, e[o + 9], 12, -1958414417)),
                    (a = w(a, l, n, r, e[o + 10], 17, -42063)),
                    (r = w(r, a, l, n, e[o + 11], 22, -1990404162)),
                    (n = w(n, r, a, l, e[o + 12], 7, 1804603682)),
                    (l = w(l, n, r, a, e[o + 13], 12, -40341101)),
                    (a = w(a, l, n, r, e[o + 14], 17, -1502002290)),
                    (n = k(
                      n,
                      (r = w(r, a, l, n, e[o + 15], 22, 1236535329)),
                      a,
                      l,
                      e[o + 1],
                      5,
                      -165796510
                    )),
                    (l = k(l, n, r, a, e[o + 6], 9, -1069501632)),
                    (a = k(a, l, n, r, e[o + 11], 14, 643717713)),
                    (r = k(r, a, l, n, e[o], 20, -373897302)),
                    (n = k(n, r, a, l, e[o + 5], 5, -701558691)),
                    (l = k(l, n, r, a, e[o + 10], 9, 38016083)),
                    (a = k(a, l, n, r, e[o + 15], 14, -660478335)),
                    (r = k(r, a, l, n, e[o + 4], 20, -405537848)),
                    (n = k(n, r, a, l, e[o + 9], 5, 568446438)),
                    (l = k(l, n, r, a, e[o + 14], 9, -1019803690)),
                    (a = k(a, l, n, r, e[o + 3], 14, -187363961)),
                    (r = k(r, a, l, n, e[o + 8], 20, 1163531501)),
                    (n = k(n, r, a, l, e[o + 13], 5, -1444681467)),
                    (l = k(l, n, r, a, e[o + 2], 9, -51403784)),
                    (a = k(a, l, n, r, e[o + 7], 14, 1735328473)),
                    (n = S(
                      n,
                      (r = k(r, a, l, n, e[o + 12], 20, -1926607734)),
                      a,
                      l,
                      e[o + 5],
                      4,
                      -378558
                    )),
                    (l = S(l, n, r, a, e[o + 8], 11, -2022574463)),
                    (a = S(a, l, n, r, e[o + 11], 16, 1839030562)),
                    (r = S(r, a, l, n, e[o + 14], 23, -35309556)),
                    (n = S(n, r, a, l, e[o + 1], 4, -1530992060)),
                    (l = S(l, n, r, a, e[o + 4], 11, 1272893353)),
                    (a = S(a, l, n, r, e[o + 7], 16, -155497632)),
                    (r = S(r, a, l, n, e[o + 10], 23, -1094730640)),
                    (n = S(n, r, a, l, e[o + 13], 4, 681279174)),
                    (l = S(l, n, r, a, e[o], 11, -358537222)),
                    (a = S(a, l, n, r, e[o + 3], 16, -722521979)),
                    (r = S(r, a, l, n, e[o + 6], 23, 76029189)),
                    (n = S(n, r, a, l, e[o + 9], 4, -640364487)),
                    (l = S(l, n, r, a, e[o + 12], 11, -421815835)),
                    (a = S(a, l, n, r, e[o + 15], 16, 530742520)),
                    (n = _(
                      n,
                      (r = S(r, a, l, n, e[o + 2], 23, -995338651)),
                      a,
                      l,
                      e[o],
                      6,
                      -198630844
                    )),
                    (l = _(l, n, r, a, e[o + 7], 10, 1126891415)),
                    (a = _(a, l, n, r, e[o + 14], 15, -1416354905)),
                    (r = _(r, a, l, n, e[o + 5], 21, -57434055)),
                    (n = _(n, r, a, l, e[o + 12], 6, 1700485571)),
                    (l = _(l, n, r, a, e[o + 3], 10, -1894986606)),
                    (a = _(a, l, n, r, e[o + 10], 15, -1051523)),
                    (r = _(r, a, l, n, e[o + 1], 21, -2054922799)),
                    (n = _(n, r, a, l, e[o + 8], 6, 1873313359)),
                    (l = _(l, n, r, a, e[o + 15], 10, -30611744)),
                    (a = _(a, l, n, r, e[o + 6], 15, -1560198380)),
                    (r = _(r, a, l, n, e[o + 13], 21, 1309151649)),
                    (n = _(n, r, a, l, e[o + 4], 6, -145523070)),
                    (l = _(l, n, r, a, e[o + 11], 10, -1120210379)),
                    (a = _(a, l, n, r, e[o + 2], 15, 718787259)),
                    (r = _(r, a, l, n, e[o + 9], 21, -343485551)),
                    (n = b(n, i)),
                    (r = b(r, u)),
                    (a = b(a, s)),
                    (l = b(l, c));
                }
                return [n, r, a, l];
              })(
                (function (e) {
                  if (0 === e.length) return [];
                  for (
                    var t = 8 * e.length, n = new Uint32Array(g(t)), r = 0;
                    r < t;
                    r += 8
                  )
                    n[r >> 5] |= (255 & e[r / 8]) << r % 32;
                  return n;
                })(e),
                8 * e.length
              )
            );
          },
          E = y("v3", 48, C);
        var j = function (e, t, n) {
          var r = (e = e || {}).random || (e.rng || l)();
          if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
            n = n || 0;
            for (var a = 0; a < 16; ++a) t[n + a] = r[a];
            return t;
          }
          return d(r);
        };
        function P(e, t, n, r) {
          switch (e) {
            case 0:
              return (t & n) ^ (~t & r);
            case 1:
            case 3:
              return t ^ n ^ r;
            case 2:
              return (t & n) ^ (t & r) ^ (n & r);
          }
        }
        function N(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        var O = function (e) {
            var t = [1518500249, 1859775393, 2400959708, 3395469782],
              n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" === typeof e) {
              var r = unescape(encodeURIComponent(e));
              e = [];
              for (var a = 0; a < r.length; ++a) e.push(r.charCodeAt(a));
            } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
            e.push(128);
            for (
              var l = e.length / 4 + 2,
                o = Math.ceil(l / 16),
                i = new Array(o),
                u = 0;
              u < o;
              ++u
            ) {
              for (var s = new Uint32Array(16), c = 0; c < 16; ++c)
                s[c] =
                  (e[64 * u + 4 * c] << 24) |
                  (e[64 * u + 4 * c + 1] << 16) |
                  (e[64 * u + 4 * c + 2] << 8) |
                  e[64 * u + 4 * c + 3];
              i[u] = s;
            }
            (i[o - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
              (i[o - 1][14] = Math.floor(i[o - 1][14])),
              (i[o - 1][15] = (8 * (e.length - 1)) & 4294967295);
            for (var f = 0; f < o; ++f) {
              for (var d = new Uint32Array(80), p = 0; p < 16; ++p)
                d[p] = i[f][p];
              for (var h = 16; h < 80; ++h)
                d[h] = N(d[h - 3] ^ d[h - 8] ^ d[h - 14] ^ d[h - 16], 1);
              for (
                var m = n[0], v = n[1], y = n[2], g = n[3], b = n[4], x = 0;
                x < 80;
                ++x
              ) {
                var w = Math.floor(x / 20),
                  k = (N(m, 5) + P(w, v, y, g) + b + t[w] + d[x]) >>> 0;
                (b = g), (g = y), (y = N(v, 30) >>> 0), (v = m), (m = k);
              }
              (n[0] = (n[0] + m) >>> 0),
                (n[1] = (n[1] + v) >>> 0),
                (n[2] = (n[2] + y) >>> 0),
                (n[3] = (n[3] + g) >>> 0),
                (n[4] = (n[4] + b) >>> 0);
            }
            return [
              (n[0] >> 24) & 255,
              (n[0] >> 16) & 255,
              (n[0] >> 8) & 255,
              255 & n[0],
              (n[1] >> 24) & 255,
              (n[1] >> 16) & 255,
              (n[1] >> 8) & 255,
              255 & n[1],
              (n[2] >> 24) & 255,
              (n[2] >> 16) & 255,
              (n[2] >> 8) & 255,
              255 & n[2],
              (n[3] >> 24) & 255,
              (n[3] >> 16) & 255,
              (n[3] >> 8) & 255,
              255 & n[3],
              (n[4] >> 24) & 255,
              (n[4] >> 16) & 255,
              (n[4] >> 8) & 255,
              255 & n[4],
            ];
          },
          L = y("v5", 80, O),
          T = "00000000-0000-0000-0000-000000000000";
        var z = function (e) {
          if (!i(e)) throw TypeError("Invalid UUID");
          return parseInt(e.substr(14, 1), 16);
        };
      },
      897: function (e) {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      405: function (e, t, n) {
        var r = n(897);
        (e.exports = function (e) {
          if (Array.isArray(e)) return r(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      416: function (e) {
        (e.exports = function (e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      498: function (e) {
        (e.exports = function (e) {
          if (
            ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      281: function (e) {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      122: function (e, t, n) {
        var r = n(416);
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        (e.exports = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  r(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      861: function (e, t, n) {
        var r = n(405),
          a = n(498),
          l = n(116),
          o = n(281);
        (e.exports = function (e) {
          return r(e) || a(e) || l(e) || o();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      116: function (e, t, n) {
        var r = n(897);
        (e.exports = function (e, t) {
          if (e) {
            if ("string" === typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(e, t)
                : void 0
            );
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.d = function (e, t) {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n(250);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function l(e, t) {
        if (e) {
          if ("string" === typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? a(e, t)
              : void 0
          );
        }
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                l = [],
                o = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (l.push(r.value), !t || l.length !== t);
                  o = !0
                );
              } catch (u) {
                (i = !0), (a = u);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (i) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          l(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var u = function (e) {
        return e;
      };
      var s = "beforeunload",
        c = "popstate";
      function f(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function d() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function p() {
        return Math.random().toString(36).substr(2, 8);
      }
      function h(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          l = e.hash,
          o = void 0 === l ? "" : l;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function m(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      var v = (0, t.createContext)(null);
      var y = (0, t.createContext)(null);
      var g = (0, t.createContext)({ outlet: null, matches: [] });
      function b(e, t) {
        if (!e) throw new Error(t);
      }
      function x(e, t, n) {
        void 0 === n && (n = "/");
        var r = P(("string" === typeof t ? m(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = w(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var l = null, o = 0; null == l && o < a.length; ++o)
          l = C(a[o], r);
        return l;
      }
      function w(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var l = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            l.relativePath.startsWith("/") &&
              (l.relativePath.startsWith(r) || b(!1),
              (l.relativePath = l.relativePath.slice(r.length)));
            var o = N([r, l.relativePath]),
              i = n.concat(l);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && b(!1), w(e.children, t, i, o)),
              (null != e.path || e.index) &&
                t.push({ path: o, score: _(o, e.index), routesMeta: i });
          }),
          t
        );
      }
      var k = /^:\w+$/,
        S = function (e) {
          return "*" === e;
        };
      function _(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(S) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !S(e);
            })
            .reduce(function (e, t) {
              return e + (k.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function C(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", l = [], o = 0;
          o < n.length;
          ++o
        ) {
          var i = n[o],
            u = o === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = E(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = i.route;
          l.push({
            params: r,
            pathname: N([a, c.pathname]),
            pathnameBase: O(N([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = N([a, c.pathnameBase]));
        }
        return l;
      }
      function E(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
            return [new RegExp(a, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          r = o(n, 2),
          a = r[0],
          l = r[1],
          i = t.match(a);
        if (!i) return null;
        var u = i[0],
          s = u.replace(/(.)\/+$/, "$1"),
          c = i.slice(1);
        return {
          params: l.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              s = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return e;
                }
              })(c[n] || "")),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: s,
          pattern: e,
        };
      }
      function j(e, t, n) {
        var r,
          a = "string" === typeof e ? m(e) : e,
          l = "" === e || "" === a.pathname ? "/" : a.pathname;
        if (null == l) r = n;
        else {
          var o = t.length - 1;
          if (l.startsWith("..")) {
            for (var i = l.split("/"); ".." === i[0]; ) i.shift(), (o -= 1);
            a.pathname = i.join("/");
          }
          r = o >= 0 ? t[o] : "/";
        }
        var u = (function (e, t) {
          void 0 === t && (t = "/");
          var n = "string" === typeof e ? m(e) : e,
            r = n.pathname,
            a = n.search,
            l = void 0 === a ? "" : a,
            o = n.hash,
            i = void 0 === o ? "" : o,
            u = r
              ? r.startsWith("/")
                ? r
                : (function (e, t) {
                    var n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach(function (e) {
                        ".." === e
                          ? n.length > 1 && n.pop()
                          : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(r, t)
              : t;
          return { pathname: u, search: L(l), hash: T(i) };
        })(a, r);
        return (
          l &&
            "/" !== l &&
            l.endsWith("/") &&
            !u.pathname.endsWith("/") &&
            (u.pathname += "/"),
          u
        );
      }
      function P(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      var N = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        O = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        L = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        T = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        };
      function z(e) {
        F() || b(!1);
        var n = (0, t.useContext)(v),
          r = n.basename,
          a = n.navigator,
          l = R(e),
          o = l.hash,
          i = l.pathname,
          u = l.search,
          s = i;
        if ("/" !== r) {
          var c = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" === typeof e
                ? m(e).pathname
                : e.pathname;
            })(e),
            f = null != c && c.endsWith("/");
          s = "/" === i ? r + (f ? "/" : "") : N([r, i]);
        }
        return a.createHref({ pathname: s, search: u, hash: o });
      }
      function F() {
        return null != (0, t.useContext)(y);
      }
      function M() {
        return F() || b(!1), (0, t.useContext)(y).location;
      }
      function I() {
        F() || b(!1);
        var e = (0, t.useContext)(v),
          n = e.basename,
          r = e.navigator,
          a = (0, t.useContext)(g).matches,
          l = M().pathname,
          o = JSON.stringify(
            a.map(function (e) {
              return e.pathnameBase;
            })
          ),
          i = (0, t.useRef)(!1);
        return (
          (0, t.useEffect)(function () {
            i.current = !0;
          }),
          (0, t.useCallback)(
            function (e, t) {
              if ((void 0 === t && (t = {}), i.current))
                if ("number" !== typeof e) {
                  var a = j(e, JSON.parse(o), l);
                  "/" !== n && (a.pathname = N([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state);
                } else r.go(e);
            },
            [n, r, o, l]
          )
        );
      }
      function R(e) {
        var n = (0, t.useContext)(g).matches,
          r = M().pathname,
          a = JSON.stringify(
            n.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, t.useMemo)(
          function () {
            return j(e, JSON.parse(a), r);
          },
          [e, a, r]
        );
      }
      function D(e, n) {
        return (
          void 0 === n && (n = []),
          null == e
            ? null
            : e.reduceRight(function (r, a, l) {
                return (0,
                t.createElement)(g.Provider, { children: void 0 !== a.route.element ? a.route.element : r, value: { outlet: r, matches: n.concat(e.slice(0, l + 1)) } });
              }, null)
        );
      }
      function A(e) {
        b(!1);
      }
      function U(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          l = n.children,
          o = void 0 === l ? null : l,
          i = n.location,
          u = n.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        F() && b(!1);
        var p = O(a),
          h = (0, t.useMemo)(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof i && (i = m(i));
        var g = i,
          x = g.pathname,
          w = void 0 === x ? "/" : x,
          k = g.search,
          S = void 0 === k ? "" : k,
          _ = g.hash,
          C = void 0 === _ ? "" : _,
          E = g.state,
          j = void 0 === E ? null : E,
          N = g.key,
          L = void 0 === N ? "default" : N,
          T = (0, t.useMemo)(
            function () {
              var e = P(w, p);
              return null == e
                ? null
                : { pathname: e, search: S, hash: C, state: j, key: L };
            },
            [p, w, S, C, j, L]
          );
        return null == T
          ? null
          : (0, t.createElement)(
              v.Provider,
              { value: h },
              (0, t.createElement)(y.Provider, {
                children: o,
                value: { location: T, navigationType: s },
              })
            );
      }
      function B(e) {
        var n = e.children,
          r = e.location;
        return (function (e, n) {
          F() || b(!1);
          var r,
            a = (0, t.useContext)(g).matches,
            l = a[a.length - 1],
            o = l ? l.params : {},
            i = (l && l.pathname, l ? l.pathnameBase : "/"),
            u = (l && l.route, M());
          if (n) {
            var s,
              c = "string" === typeof n ? m(n) : n;
            "/" === i ||
              (null == (s = c.pathname) ? void 0 : s.startsWith(i)) ||
              b(!1),
              (r = c);
          } else r = u;
          var f = r.pathname || "/",
            d = x(e, { pathname: "/" === i ? f : f.slice(i.length) || "/" });
          return D(
            d &&
              d.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, o, e.params),
                  pathname: N([i, e.pathname]),
                  pathnameBase:
                    "/" === e.pathnameBase ? i : N([i, e.pathnameBase]),
                });
              }),
            a
          );
        })(V(n), r);
      }
      function V(e) {
        var n = [];
        return (
          t.Children.forEach(e, function (e) {
            if ((0, t.isValidElement)(e))
              if (e.type !== t.Fragment) {
                e.type !== A && b(!1);
                var r = {
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  index: e.props.index,
                  path: e.props.path,
                };
                e.props.children && (r.children = V(e.props.children)),
                  n.push(r);
              } else n.push.apply(n, V(e.props.children));
          }),
          n
        );
      }
      function $() {
        return (
          ($ =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          $.apply(this, arguments)
        );
      }
      function H(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var W = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
      function Q(n) {
        var r = n.basename,
          a = n.children,
          l = n.window,
          v = (0, t.useRef)();
        null == v.current &&
          (v.current = (function (t) {
            void 0 === t && (t = {});
            var n = t.window,
              r = void 0 === n ? document.defaultView : n,
              a = r.history;
            function l() {
              var e = r.location,
                t = e.pathname,
                n = e.search,
                l = e.hash,
                o = a.state || {};
              return [
                o.idx,
                u({
                  pathname: t,
                  search: n,
                  hash: l,
                  state: o.usr || null,
                  key: o.key || "default",
                }),
              ];
            }
            var o = null;
            r.addEventListener(c, function () {
              if (o) w.call(o), (o = null);
              else {
                var t = e.Pop,
                  n = l(),
                  r = n[0],
                  a = n[1];
                if (w.length) {
                  if (null != r) {
                    var i = g - r;
                    i &&
                      ((o = {
                        action: t,
                        location: a,
                        retry: function () {
                          j(-1 * i);
                        },
                      }),
                      j(i));
                  }
                } else E(t);
              }
            });
            var v = e.Pop,
              y = l(),
              g = y[0],
              b = y[1],
              x = d(),
              w = d();
            function k(e) {
              return "string" === typeof e ? e : h(e);
            }
            function S(e, t) {
              return (
                void 0 === t && (t = null),
                u(
                  i(
                    { pathname: b.pathname, hash: "", search: "" },
                    "string" === typeof e ? m(e) : e,
                    { state: t, key: p() }
                  )
                )
              );
            }
            function _(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, k(e)];
            }
            function C(e, t, n) {
              return (
                !w.length || (w.call({ action: e, location: t, retry: n }), !1)
              );
            }
            function E(e) {
              v = e;
              var t = l();
              (g = t[0]), (b = t[1]), x.call({ action: v, location: b });
            }
            function j(e) {
              a.go(e);
            }
            null == g &&
              ((g = 0), a.replaceState(i({}, a.state, { idx: g }), ""));
            var P = {
              get action() {
                return v;
              },
              get location() {
                return b;
              },
              createHref: k,
              push: function t(n, l) {
                var o = e.Push,
                  i = S(n, l);
                if (
                  C(o, i, function () {
                    t(n, l);
                  })
                ) {
                  var u = _(i, g + 1),
                    s = u[0],
                    c = u[1];
                  try {
                    a.pushState(s, "", c);
                  } catch (f) {
                    r.location.assign(c);
                  }
                  E(o);
                }
              },
              replace: function t(n, r) {
                var l = e.Replace,
                  o = S(n, r);
                if (
                  C(l, o, function () {
                    t(n, r);
                  })
                ) {
                  var i = _(o, g),
                    u = i[0],
                    s = i[1];
                  a.replaceState(u, "", s), E(l);
                }
              },
              go: j,
              back: function () {
                j(-1);
              },
              forward: function () {
                j(1);
              },
              listen: function (e) {
                return x.push(e);
              },
              block: function (e) {
                var t = w.push(e);
                return (
                  1 === w.length && r.addEventListener(s, f),
                  function () {
                    t(), w.length || r.removeEventListener(s, f);
                  }
                );
              },
            };
            return P;
          })({ window: l }));
        var y = v.current,
          g = o((0, t.useState)({ action: y.action, location: y.location }), 2),
          b = g[0],
          x = g[1];
        return (
          (0, t.useLayoutEffect)(
            function () {
              return y.listen(x);
            },
            [y]
          ),
          (0, t.createElement)(U, {
            basename: r,
            children: a,
            location: b.location,
            navigationType: b.action,
            navigator: y,
          })
        );
      }
      var q = (0, t.forwardRef)(function (e, n) {
        var r = e.onClick,
          a = e.reloadDocument,
          l = e.replace,
          o = void 0 !== l && l,
          i = e.state,
          u = e.target,
          s = e.to,
          c = H(e, W),
          f = z(s),
          d = (function (e, n) {
            var r = void 0 === n ? {} : n,
              a = r.target,
              l = r.replace,
              o = r.state,
              i = I(),
              u = M(),
              s = R(e);
            return (0, t.useCallback)(
              function (t) {
                if (
                  0 === t.button &&
                  (!a || "_self" === a) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(t)
                ) {
                  t.preventDefault();
                  var n = !!l || h(u) === h(s);
                  i(e, { replace: n, state: o });
                }
              },
              [u, i, s, l, o, a, e]
            );
          })(s, { replace: o, state: i, target: u });
        return (0, t.createElement)(
          "a",
          $({}, c, {
            href: f,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || a || d(e);
            },
            ref: n,
            target: u,
          })
        );
      });
      var K = "Navbar_navbar__f7F4b",
        G = n.p + "static/media/logo.475d806890589f5ac1b2.png",
        X = n(184);
      var Y = function () {
        return (0, X.jsxs)("nav", {
          className: K,
          children: [
            (0, X.jsx)(q, {
              to: "/",
              children: (0, X.jsx)("img", { src: G, alt: "" }),
            }),
            (0, X.jsx)("h1", {
              children: (0, X.jsx)(q, {
                to: "/",
                children: "Controle de Caixa",
              }),
            }),
            (0, X.jsxs)("ul", {
              children: [
                (0, X.jsx)(q, {
                  to: "/products",
                  children: (0, X.jsx)("li", { children: "Produtos" }),
                }),
                (0, X.jsx)(q, {
                  to: "/caixa",
                  children: (0, X.jsx)("li", { children: "Caixa" }),
                }),
                (0, X.jsx)(q, {
                  to: "/balanco",
                  children: (0, X.jsx)("li", { children: "Balan\xe7o" }),
                }),
              ],
            }),
          ],
        });
      };
      function J(e) {
        return (
          (J =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          J(e)
        );
      }
      function Z() {
        Z = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          l = r.asyncIterator || "@@asyncIterator",
          o = r.toStringTag || "@@toStringTag";
        function i(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          i({}, "");
        } catch (E) {
          i = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var a = t && t.prototype instanceof f ? t : f,
            l = Object.create(a.prototype),
            o = new S(r || []);
          return (
            (l._invoke = (function (e, t, n) {
              var r = "suspendedStart";
              return function (a, l) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw l;
                  return C();
                }
                for (n.method = a, n.arg = l; ; ) {
                  var o = n.delegate;
                  if (o) {
                    var i = x(o, n);
                    if (i) {
                      if (i === c) continue;
                      return i;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var u = s(e, t, n);
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === c)
                    )
                      continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(e, n, o)),
            l
          );
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = u;
        var c = {};
        function f() {}
        function d() {}
        function p() {}
        var h = {};
        i(h, a, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(_([])));
        v && v !== t && n.call(v, a) && (h = v);
        var y = (p.prototype = f.prototype = Object.create(h));
        function g(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          function r(a, l, o, i) {
            var u = s(e[a], e, l);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == J(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      r("next", e, o, i);
                    },
                    function (e) {
                      r("throw", e, o, i);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), o(c);
                    },
                    function (e) {
                      return r("throw", e, o, i);
                    }
                  );
            }
            i(u.arg);
          }
          var a;
          this._invoke = function (e, n) {
            function l() {
              return new t(function (t, a) {
                r(e, n, t, a);
              });
            }
            return (a = a ? a.then(l, l) : l());
          };
        }
        function x(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)
              )
                return c;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return c;
          }
          var r = s(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), c
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                c)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              c);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function S(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                l = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (l.next = l);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = p),
          i(y, "constructor", p),
          i(p, "constructor", d),
          (d.displayName = i(p, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), i(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          g(b.prototype),
          i(b.prototype, l, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, l) {
            void 0 === l && (l = Promise);
            var o = new b(u(t, n, r, a), l);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          g(y),
          i(y, o, "Generator"),
          i(y, a, function () {
            return this;
          }),
          i(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = _),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var l = this.tryEntries[a],
                  o = l.completion;
                if ("root" === l.tryLoc) return r("end");
                if (l.tryLoc <= this.prev) {
                  var i = n.call(l, "catchLoc"),
                    u = n.call(l, "finallyLoc");
                  if (i && u) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  } else if (i) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var l = a;
                  break;
                }
              }
              l &&
                ("break" === e || "continue" === e) &&
                l.tryLoc <= t &&
                t <= l.finallyLoc &&
                (l = null);
              var o = l ? l.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                l
                  ? ((this.method = "next"), (this.next = l.finallyLoc), c)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                c
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), c;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    k(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                c
              );
            },
          }),
          e
        );
      }
      function ee(e, t, n, r, a, l, o) {
        try {
          var i = e[l](o),
            u = i.value;
        } catch (s) {
          return void n(s);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function te(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var l = e.apply(t, n);
            function o(e) {
              ee(l, r, a, o, i, "next", e);
            }
            function i(e) {
              ee(l, r, a, o, i, "throw", e);
            }
            o(void 0);
          });
        };
      }
      var ne = "Button_btn__qf8zr";
      var re = function (e) {
        var t = e.handleOnClick,
          n = e.text;
        return (0, X.jsx)("input", {
          className: ne,
          type: "button",
          value: n,
          onClick: t,
        });
      };
      function ae(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? le(Object(n), !0).forEach(function (t) {
                ae(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : le(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ie = "Input_input_container__4+B3t";
      var ue = function (e) {
          var t = e.type,
            n = e.name,
            r = e.text,
            a = e.placeholder,
            l = e.handleOnChange,
            o = e.value;
          return (0, X.jsxs)("div", {
            className: ie,
            children: [
              (0, X.jsx)("label", { htmlFor: n, children: r }),
              (0, X.jsx)("input", {
                type: t,
                name: n,
                placeholder: a,
                onChange: l,
                value: o,
                required: !0,
              }),
            ],
          });
        },
        se = "SubmitButton_btn__9IIEu";
      var ce = function (e) {
          var t = e.text;
          return (0, X.jsx)("button", { className: se, children: t });
        },
        fe = "ProductsForm_form_container__jQ8u3",
        de = "ProductsForm_form_buttons__xKlBU";
      var pe = function (e) {
        var n = e.handleSubmit,
          r = o((0, t.useState)({}), 2),
          a = r[0],
          l = r[1];
        function i(e) {
          l(oe(oe({}, a), {}, ae({}, e.target.name, e.target.value)));
        }
        return (0, X.jsxs)("form", {
          onSubmit: function (e) {
            e.preventDefault(), n(a);
          },
          className: fe,
          children: [
            (0, X.jsx)("h1", { children: "Cadastro" }),
            (0, X.jsx)(ue, {
              type: "text",
              name: "name",
              text: "Nome",
              placeholder: "Insira o nome do produto",
              handleOnChange: i,
              value: a.name ? a.name : "",
            }),
            (0, X.jsx)(ue, {
              type: "text",
              name: "brand",
              text: "Marca",
              placeholder: "Insira a marca do produto",
              handleOnChange: i,
              value: a.brand ? a.brand : "",
            }),
            (0, X.jsx)(ue, {
              type: "text",
              name: "description",
              text: "Descri\xe7\xe3o",
              placeholder: "Insira a descri\xe7\xe3o do produto",
              handleOnChange: i,
              value: a.description ? a.description : "",
            }),
            (0, X.jsx)(ue, {
              type: "number",
              name: "price",
              text: "Valor",
              placeholder: "Insira a valor do produto",
              handleOnChange: i,
              value: a.price ? a.price : "",
            }),
            (0, X.jsxs)("div", {
              className: de,
              children: [
                (0, X.jsx)(ce, { text: "Cadastrar" }),
                (0, X.jsx)(re, {
                  func: function () {
                    Array.from(document.querySelectorAll("input")).forEach(
                      function (e) {
                        ["Cadastrar", "Encontrar", "Limpar"].includes(
                          e.value
                        ) || (e.value = "");
                      }
                    );
                  },
                  text: "Limpar",
                }),
              ],
            }),
          ],
        });
      };
      var he = function (e) {
        var t = e.type,
          n = e.name,
          r = e.text,
          a = e.placeholder,
          l = e.handleOnChange,
          o = e.value,
          i = e.myFocus;
        return (0, X.jsxs)("div", {
          className: ie,
          children: [
            (0, X.jsx)("label", { htmlFor: n, children: r }),
            (0, X.jsx)("input", {
              type: t,
              name: n,
              placeholder: a,
              onChange: l,
              value: o,
              autoFocus: i,
            }),
          ],
        });
      };
      var me = function (e) {
          var n = e.handleSubmit,
            r = o((0, t.useState)({}), 2),
            a = r[0],
            l = r[1];
          function i(e) {
            l(oe(oe({}, a), {}, ae({}, e.target.name, e.target.value)));
          }
          return (0, X.jsxs)("form", {
            onSubmit: function (e) {
              e.preventDefault(), n(a);
            },
            className: fe,
            children: [
              (0, X.jsx)("h1", { children: "Encontrar" }),
              (0, X.jsx)(he, {
                type: "search",
                name: "name",
                text: "Nome",
                placeholder: "Insira o nome do produto",
                handleOnChange: i,
                value: a.name ? a.name : "",
              }),
              (0, X.jsx)(he, {
                type: "search",
                name: "brand",
                text: "Marca",
                placeholder: "Insira a marca do produto",
                handleOnChange: i,
                value: a.brand ? a.brand : "",
              }),
              (0, X.jsx)(he, {
                type: "search",
                name: "description",
                text: "Descri\xe7\xe3o",
                placeholder: "Insira a descri\xe7\xe3o do produto",
                handleOnChange: i,
                value: a.description ? a.description : "",
              }),
              (0, X.jsx)(he, {
                type: "number",
                name: "id",
                text: "C\xf3digo",
                placeholder: "Insira o c\xf3digo do produto",
                handleOnChange: i,
                value: a.id ? a.id : "",
              }),
              (0, X.jsxs)("div", {
                className: de,
                children: [
                  (0, X.jsx)(ce, { text: "Buscar" }),
                  (0, X.jsx)(re, {
                    func: function () {
                      l({});
                    },
                    text: "Limpar",
                  }),
                ],
              }),
            ],
          });
        },
        ve = "Products_products_container__AET1S",
        ye = "Products_products_buttons__pLi7X",
        ge = "Products_products_forms__bGRW4",
        be = "Products_product_card__yO12G";
      function xe(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = 0,
          l = 3051,
          o = a ? "localhost" : "54.209.185.105";
        if ((console.log(o), "GET" === t)) {
          var i = fetch(
            "http://".concat(o, ":").concat(l, "/").concat(r).concat(n),
            { method: t, headers: { "Content-Type": "application/json" } }
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              return e.name ? [e] : e;
            })
            .catch(function (e) {
              return console.log(e);
            });
          return i;
        }
        fetch(
          "http://".concat(o, ":").concat(l, "/").concat(r, "/").concat(n),
          {
            method: t,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e),
          }
        )
          .then(function (e) {
            return e.json();
          })
          .catch(function (e) {
            return console.log(e);
          });
      }
      function we(e, t, n, r) {
        e(t),
          n(r),
          setTimeout(function () {
            e("");
          }, 2e3);
      }
      var ke = "ProductsCard_productCardContainer__ARkCP",
        Se = "ProductsCard_card_data__Bx94A",
        _e = "ProductsCard_card_butons__NrkvR";
      var Ce = function (e) {
          var t = e.product,
            n = e.handleEdit,
            r = e.handleRemove;
          return (0, X.jsxs)("div", {
            className: ke,
            children: [
              (0, X.jsx)("h2", { children: t.name }),
              (0, X.jsxs)("div", {
                className: Se,
                children: [
                  (0, X.jsxs)("p", {
                    children: [
                      (0, X.jsx)("span", { children: "Marca: " }),
                      t.brand,
                    ],
                  }),
                  (0, X.jsxs)("p", {
                    children: [
                      (0, X.jsx)("span", { children: "Descri\xe7\xe3o: " }),
                      t.description,
                    ],
                  }),
                  (0, X.jsxs)("p", {
                    children: [
                      (0, X.jsx)("span", { children: "Pre\xe7o: " }),
                      t.price,
                    ],
                  }),
                  (0, X.jsxs)("p", {
                    children: [
                      (0, X.jsx)("span", { children: "C\xf3digo: " }),
                      t.id,
                    ],
                  }),
                ],
              }),
              (0, X.jsxs)("div", {
                className: _e,
                children: [
                  (0, X.jsx)("span", {
                    onClick: function () {
                      n(t.id);
                    },
                    children: "Editar",
                  }),
                  (0, X.jsx)("span", {
                    onClick: function () {
                      r(t.id);
                    },
                    children: "Apagar",
                  }),
                ],
              }),
            ],
          });
        },
        Ee = {
          container: "Message_container__qX45k",
          error: "Message_error__vKyqR",
          success: "Message_success__VXsqX",
        };
      var je = function (e) {
          var t = e.type,
            n = e.text;
          return (0, X.jsx)("p", {
            className: "".concat(Ee.container, " ").concat(Ee[t]),
            children: n,
          });
        },
        Pe = "ProductForm_form_container__FZ95p",
        Ne = "ProductForm_form_buttons__wn3xW";
      var Oe = function (e) {
        var n = e.handleSubmit,
          r = e.data,
          a = o((0, t.useState)(r), 2),
          l = a[0],
          i = a[1];
        function u(e) {
          i(oe(oe({}, l), {}, ae({}, e.target.name, e.target.value)));
        }
        return (0, X.jsxs)("form", {
          onSubmit: function (e) {
            e.preventDefault(), n(l, r.id);
          },
          className: Pe,
          children: [
            (0, X.jsx)("h1", { children: "Editar" }),
            (0, X.jsx)(ue, {
              type: "text",
              name: "name",
              text: "Nome",
              placeholder: "Insira o nome do produto",
              handleOnChange: u,
              value: l.name ? l.name : "",
            }),
            (0, X.jsx)(ue, {
              type: "text",
              name: "brand",
              text: "Marca",
              placeholder: "Insira a marca do produto",
              handleOnChange: u,
              value: l.brand ? l.brand : "",
            }),
            (0, X.jsx)(ue, {
              type: "text",
              name: "description",
              text: "Descri\xe7\xe3o",
              placeholder: "Insira a descri\xe7\xe3o do produto",
              handleOnChange: u,
              value: l.description ? l.description : "",
            }),
            (0, X.jsx)(ue, {
              type: "number",
              name: "price",
              text: "Valor",
              placeholder: "Insira a valor do produto",
              handleOnChange: u,
              value: l.price ? l.price : "",
            }),
            (0, X.jsx)("div", {
              className: Ne,
              children: (0, X.jsx)(ce, { text: "Salvar" }),
            }),
          ],
        });
      };
      var Le = function () {
          var e = o((0, t.useState)(!1), 2),
            n = e[0],
            r = e[1],
            a = o((0, t.useState)(!1), 2),
            l = a[0],
            i = a[1],
            u = o((0, t.useState)(!1), 2),
            s = u[0],
            c = u[1],
            f = o((0, t.useState)({}), 2),
            d = f[0],
            p = f[1],
            h = o((0, t.useState)(!1), 2),
            m = h[0],
            v = h[1],
            y = o((0, t.useState)([]), 2),
            g = y[0],
            b = y[1],
            x = o((0, t.useState)(""), 2),
            w = x[0],
            k = x[1],
            S = o((0, t.useState)(""), 2),
            _ = S[0],
            C = S[1];
          function E() {
            return (E = te(
              Z().mark(function e(t) {
                var n, r, a, l, o, i;
                return Z().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.id ? "/".concat(t.id) : ""),
                          (r = t.name ? "&name_like=".concat(t.name) : ""),
                          (a = t.description
                            ? "&description_like=".concat(t.description)
                            : ""),
                          (l = t.brand ? "&brand_like=".concat(t.brand) : ""),
                          (o = "".concat(r).concat(a).concat(l)),
                          (e.next = 7),
                          xe(
                            {},
                            "GET",
                            n || "?_sort=name".concat(o),
                            "products"
                          )
                        );
                      case 7:
                        (i = e.sent).length
                          ? c(!0)
                          : (we(k, "Nenhum resultado", C, "error"), c(!1)),
                          b(i),
                          v(!1);
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function j(e) {
            return P.apply(this, arguments);
          }
          function P() {
            return (P = te(
              Z().mark(function e(t) {
                var n;
                return Z().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), xe({}, "GET", "/".concat(t), "products")
                        );
                      case 2:
                        (n = e.sent), p(n[0]), c(!1), v(!0);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function N() {
            return (N = te(
              Z().mark(function e(t, n) {
                return Z().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), xe(t, "PATCH", n, "products");
                      case 2:
                        v(!1),
                          we(k, "Produto alterado com sucesso!", C, "success");
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function O(e) {
            return L.apply(this, arguments);
          }
          function L() {
            return (L = te(
              Z().mark(function e(t) {
                var n;
                return Z().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), xe({}, "DELETE", t, "products");
                      case 2:
                        return (
                          (e.next = 4), xe({}, "GET", "?_sort=name", "products")
                        );
                      case 4:
                        (n = e.sent), b(n), c(!0);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (0, X.jsxs)("div", {
            className: ve,
            children: [
              w && (0, X.jsx)(je, { type: _, text: w }),
              (0, X.jsx)("h1", { children: "Produtos" }),
              (0, X.jsxs)("div", {
                className: ye,
                children: [
                  (0, X.jsx)(re, {
                    handleOnClick: function () {
                      r(!n), i(!1), c(!1), v(!1);
                    },
                    text: "Cadastrar",
                  }),
                  (0, X.jsx)(re, {
                    handleOnClick: function () {
                      i(!l), n && r(!n);
                    },
                    text: "Encontrar",
                  }),
                ],
              }),
              (0, X.jsxs)("div", {
                className: ge,
                children: [
                  n &&
                    (0, X.jsx)(pe, {
                      handleSubmit: function (e) {
                        (e.name = e.name.toLowerCase()),
                          (e.brand = e.brand.toLowerCase()),
                          (e.description = e.description.toLowerCase()),
                          (e.price = parseFloat(e.price).toFixed(2)),
                          xe(e, "POST", "", "products"),
                          we(
                            k,
                            "Produto registrado com sucesso!",
                            C,
                            "success"
                          );
                      },
                    }),
                  l &&
                    (0, X.jsx)(me, {
                      handleSubmit: function (e) {
                        return E.apply(this, arguments);
                      },
                    }),
                ],
              }),
              (0, X.jsxs)("div", {
                className: be,
                children: [
                  s &&
                    g.map(function (e) {
                      return (0,
                      X.jsx)(Ce, { product: e, handleEdit: j, handleRemove: O }, e.id);
                    }),
                  m &&
                    (0, X.jsx)(Oe, {
                      handleSubmit: function (e, t) {
                        return N.apply(this, arguments);
                      },
                      data: d,
                    }),
                ],
              }),
            ],
          });
        },
        Te = "Home_container__FcHm2";
      var ze = function () {
        return (0, X.jsx)("h1", { className: Te, children: "Bem Vindo!" });
      };
      function Fe(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Me = n(244),
        Ie = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Re = t.createContext && t.createContext(Ie),
        De = function () {
          return (
            (De =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            De.apply(this, arguments)
          );
        },
        Ae = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function Ue(e) {
        return (
          e &&
          e.map(function (e, n) {
            return t.createElement(e.tag, De({ key: n }, e.attr), Ue(e.child));
          })
        );
      }
      function Be(e) {
        return function (n) {
          return t.createElement(
            Ve,
            De({ attr: De({}, e.attr) }, n),
            Ue(e.child)
          );
        };
      }
      function Ve(e) {
        var n = function (n) {
          var r,
            a = e.attr,
            l = e.size,
            o = e.title,
            i = Ae(e, ["attr", "size", "title"]),
            u = l || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            t.createElement(
              "svg",
              De(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                i,
                {
                  className: r,
                  style: De(
                    De({ color: e.color || n.color }, n.style),
                    e.style
                  ),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && t.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== Re
          ? t.createElement(Re.Consumer, null, function (e) {
              return n(e);
            })
          : n(Ie);
      }
      function $e(e) {
        return Be({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z",
              },
            },
          ],
        })(e);
      }
      function He(e) {
        return Be({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z",
              },
            },
          ],
        })(e);
      }
      var We = "Caixa_container__siU2D",
        Qe = "Caixa_list_buy__L-4jb",
        qe = "Caixa_list_buy_tittle__y1CMa",
        Ke = "Caixa_list_buy_tittle_product__vacdw",
        Ge = "Caixa_list_buy_tittle_description__xTAVx",
        Xe = "Caixa_list_buy_tittle_brand__n2dD9",
        Ye = "Caixa_list_buy_tittle_amount__fUw35",
        Je = "Caixa_list_buy_tittle_price__B-Akx",
        Ze = "Caixa_list_buy_total__jv2FS",
        et = "Caixa_fastFind__jcwm4",
        tt = "Caixa_fastFind_result__OfqIg",
        nt = "Caixa_open_find__luQ00",
        rt = "Caixa_close_find__gw-XJ",
        at = "Select_container__XhI+V";
      var lt = function (e) {
          var t = e.text,
            n = e.name,
            r = e.options,
            a = e.handleOnChange,
            l = e.value;
          return (
            e.key,
            (0, X.jsxs)("div", {
              className: at,
              children: [
                (0, X.jsx)("label", { htmlFor: n, children: t }),
                (0, X.jsxs)("select", {
                  name: n,
                  id: n,
                  onChange: a,
                  value: l || "",
                  children: [
                    (0, X.jsx)("option", {}),
                    r.map(function (e) {
                      return (0,
                      X.jsx)("option", { value: e.id, children: e.name }, e.id);
                    }),
                  ],
                }),
              ],
            })
          );
        },
        ot = "CaixaForm_form_container__rI+zl",
        it = "CaixaForm_buttons__UEm6M",
        ut = "CaixaForm_inputs__BUDFf",
        st = "CaixaForm_cod__oPc7l";
      var ct = function (e) {
          var n = e.handleSubmit,
            r = e.handleClick,
            a = o((0, t.useState)({}), 2),
            l = a[0],
            i = a[1],
            u = o((0, t.useState)([]), 2),
            s = u[0],
            c = u[1];
          function f(e) {
            i(oe(oe({}, l), {}, ae({}, e.target.name, e.target.value))),
              console.log(l);
          }
          return (0, X.jsxs)("form", {
            onSubmit: function (e) {
              e.preventDefault(), n(l.id, l.fraction, l.amount), i({});
            },
            className: ot,
            children: [
              (0, X.jsxs)("div", {
                className: ut,
                children: [
                  (0, X.jsx)("div", {
                    className: st,
                    children: (0, X.jsx)(he, {
                      type: "number",
                      name: "id",
                      text: "C\xf3digo do produto",
                      placeholder: "Digite o c\xf3digo do produto",
                      handleOnChange: f,
                      value: l.id ? l.id : "",
                      myFocus: !0,
                    }),
                  }),
                  (0, X.jsx)(he, {
                    type: "number",
                    name: "amount",
                    text: "Quantidade",
                    placeholder: "1",
                    handleOnChange: f,
                    value: l.amount ? l.amount : "",
                    myFocus: !1,
                  }),
                  (0, X.jsx)(he, {
                    type: "number",
                    name: "fraction",
                    text: "Fra\xe7\xe3o",
                    placeholder: "1,0",
                    handleOnChange: f,
                    value: l.fraction ? l.fraction : "",
                    myFocus: !1,
                  }),
                  (0, X.jsx)(lt, {
                    text: "Tipo de pagamento",
                    name: "payment",
                    options: [
                      { name: "D\xe9bito", id: 1 },
                      { name: "Cr\xe9dito", id: 2 },
                      { name: "Dinheiro", id: 3 },
                      { name: "Pix", id: 4 },
                    ],
                    handleOnChange: function (e) {
                      c(
                        oe(
                          oe({}, s),
                          {},
                          {
                            idPay: e.target.value,
                            pay: e.target.options[e.target.selectedIndex].text,
                          }
                        )
                      );
                    },
                    value: s.idPay ? s.idPay : "",
                  }),
                ],
              }),
              (0, X.jsxs)("div", {
                className: it,
                children: [
                  (0, X.jsx)(ce, { text: "Adicionar" }),
                  (0, X.jsx)(re, {
                    text: "Finalizar",
                    handleOnClick: function () {
                      r(s.pay), c([]);
                    },
                  }),
                ],
              }),
            ],
          });
        },
        ft = "CaixaListBuy_card_container__fY061",
        dt = "CaixaListBuy_card_list__vD4RK",
        pt = "CaixaListBuy_product_id__kAnT7",
        ht = "CaixaListBuy_product_name__GFKQM",
        mt = "CaixaListBuy_product_description__8jz2l",
        vt = "CaixaListBuy_product_brand__7DOOd",
        yt = "CaixaListBuy_product_amount__fXhAf",
        gt = "CaixaListBuy_product_price__G9cpS";
      var bt = function (e) {
        var t = e.product,
          n = e.handleOnRemove;
        return (0, X.jsx)("div", {
          className: ft,
          children:
            t.name &&
            (0, X.jsxs)("div", {
              className: dt,
              children: [
                (0, X.jsxs)("p", { className: pt, children: ["cod. ", t.id] }),
                (0, X.jsx)("p", { className: ht, children: t.name }),
                (0, X.jsx)("p", { className: mt, children: t.description }),
                (0, X.jsx)("p", { className: vt, children: t.brand }),
                (0, X.jsx)("p", { className: yt, children: t.amount }),
                (0, X.jsx)("p", { className: gt, children: t.price }),
                (0, X.jsx)("span", {
                  onClick: function () {
                    n(t.uid);
                  },
                  children: (0, X.jsx)($e, {}),
                }),
              ],
            }),
        });
      };
      var xt = function () {
          var e = o((0, t.useState)([]), 2),
            n = e[0],
            r = e[1],
            a = o((0, t.useState)([]), 2),
            l = a[0],
            i = a[1],
            u = o((0, t.useState)(!1), 2),
            s = u[0],
            c = u[1],
            f = o((0, t.useState)(""), 2),
            d = f[0],
            p = f[1],
            h = o((0, t.useState)(""), 2),
            m = h[0],
            v = h[1],
            y = o((0, t.useState)(0), 2),
            g = y[0],
            b = y[1];
          function x() {
            return (
              (x = te(
                Z().mark(function e(t, a, l) {
                  var o, i, u, s;
                  return Z().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            xe({}, "GET", "/".concat(t), "products")
                          );
                        case 2:
                          if ((o = e.sent).length) {
                            e.next = 6;
                            break;
                          }
                          return (
                            we(p, "Produto n\xe3o encontrado!", v, "error"),
                            e.abrupt("return")
                          );
                        case 6:
                          return (
                            (i = o[0]),
                            a &&
                              (i.price = (
                                parseFloat(i.price) * parseFloat(a)
                              ).toFixed(2)),
                            l
                              ? ((i.price = (
                                  parseFloat(i.price) * parseFloat(l)
                                ).toFixed(2)),
                                (i.amount = l))
                              : (i.amount = 1),
                            (i.uid = (0, Me.generate)()),
                            (u = (parseFloat(i.price) + parseFloat(g)).toFixed(
                              2
                            )),
                            b(u),
                            r([].concat(Fe(n), [i])),
                            (e.next = 15),
                            xe({}, "GET", "/1", "temporary")
                          );
                        case 15:
                          (s = e.sent).listBuy.push(i),
                            (s.total = u),
                            xe(s, "PATCH", 1, "temporary");
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              x.apply(this, arguments)
            );
          }
          function w() {
            return (w = te(
              Z().mark(function e(t) {
                var n, a, l;
                return Z().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), xe({}, "GET", "/1", "temporary");
                      case 2:
                        if ((n = e.sent).listBuy.length) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          we(p, "Nenhum produto na lista!", v, "error")
                        );
                      case 7:
                        if (t) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          we(p, "Escolha uma forma de pagamento!", v, "error")
                        );
                      case 9:
                        return (
                          (a = new Date()),
                          (l = ""
                            .concat(a.toLocaleDateString(), " - ")
                            .concat(a.toLocaleTimeString())),
                          (n.date = l),
                          (n.id = ""),
                          (n.items = n.listBuy.length),
                          (n.payment = t),
                          (e.next = 17),
                          xe(n, "POST", "", "caixa")
                        );
                      case 17:
                        return (
                          (n.listBuy = []),
                          (n.total = "0.00"),
                          (e.next = 21),
                          xe(n, "PATCH", 1, "temporary")
                        );
                      case 21:
                        return (
                          r([]),
                          b(0),
                          e.abrupt(
                            "return",
                            we(p, "Finalizado com sucesso!", v, "success")
                          )
                        );
                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function k(e) {
            return S.apply(this, arguments);
          }
          function S() {
            return (S = te(
              Z().mark(function e(t) {
                var a, l, o;
                return Z().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = 0),
                          (l = n.filter(function (e) {
                            if (e.uid === t) {
                              var n = parseFloat(g) - parseFloat(e.price);
                              (a = n.toFixed(2)), b(a);
                            }
                            return e.uid !== t;
                          })),
                          r(l),
                          (e.next = 5),
                          xe({}, "GET", "/1", "temporary")
                        );
                      case 5:
                        ((o = e.sent).listBuy = l),
                          (o.total = a),
                          xe(o, "PATCH", 1, "temporary");
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function _() {
            return (_ = te(
              Z().mark(function e() {
                var t;
                return Z().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r([]),
                          b("0.00"),
                          (t = { listBuy: [], total: "0.00" }),
                          (e.next = 5),
                          xe(t, "PATCH", 1, "temporary")
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          function C() {
            c(!s), i([]);
          }
          function E() {
            return (E = te(
              Z().mark(function e(t) {
                var n, r;
                return Z().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!((n = t.target.value).length > 1)) {
                          e.next = 8;
                          break;
                        }
                        return (
                          (e.next = 4),
                          xe(
                            {},
                            "GET",
                            "?_sort=name&name_like=".concat(n),
                            "products"
                          )
                        );
                      case 4:
                        (r = e.sent), i(r), (e.next = 9);
                        break;
                      case 8:
                        i([]);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (
            (0, t.useEffect)(function () {
              fetch("http://54.209.185.105:3051/temporary/1", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  r(e.listBuy), b(e.total);
                })
                .catch(function (e) {
                  return console.log(e);
                });
            }, []),
            (0, X.jsxs)("div", {
              className: We,
              children: [
                d && (0, X.jsx)(je, { text: d, type: m }),
                (0, X.jsx)("h1", { children: "Caixa" }),
                (0, X.jsx)(ct, {
                  handleSubmit: function (e, t, n) {
                    return x.apply(this, arguments);
                  },
                  handleClick: function (e) {
                    return w.apply(this, arguments);
                  },
                }),
                (0, X.jsx)("h2", { children: "Lista de Compras:" }),
                (0, X.jsxs)("div", {
                  className: Qe,
                  children: [
                    (0, X.jsxs)("div", {
                      className: qe,
                      children: [
                        (0, X.jsx)("h3", {
                          className: Ke,
                          children: "Produto",
                        }),
                        (0, X.jsx)("h3", {
                          className: Ge,
                          children: "Descri\xe7\xe3o",
                        }),
                        (0, X.jsx)("h3", { className: Xe, children: "Marca" }),
                        (0, X.jsx)("h3", { className: Ye, children: "Qtd" }),
                        (0, X.jsx)("h3", {
                          className: Je,
                          children: "Pre\xe7o",
                        }),
                        (0, X.jsx)("span", {
                          onClick: function () {
                            return _.apply(this, arguments);
                          },
                          children: (0, X.jsx)($e, {}),
                        }),
                      ],
                    }),
                    1 === n.length
                      ? (0, X.jsx)(bt, { handleOnRemove: k, product: n[0] })
                      : n.map(function (e) {
                          return (0,
                          X.jsx)(bt, { items: [r, n, b, g], handleOnRemove: k, product: e }, (0, Me.generate)());
                        }),
                    (0, X.jsxs)("div", {
                      className: "".concat(Ze, " ").concat(qe),
                      children: [
                        (0, X.jsx)("h3", { children: "Total:" }),
                        (0, X.jsxs)("h3", { children: ["R$ ", g] }),
                      ],
                    }),
                  ],
                }),
                s
                  ? (0, X.jsxs)("div", {
                      className: et,
                      children: [
                        (0, X.jsx)("h3", { children: "Consulta r\xe1pida" }),
                        (0, X.jsx)(he, {
                          type: "search",
                          name: "name",
                          placeholder: "Nome do produto (min 2 letras)",
                          handleOnChange: function (e) {
                            return E.apply(this, arguments);
                          },
                          autoFocus: !1,
                        }),
                        (0, X.jsx)("div", {
                          onClick: C,
                          className: rt,
                          children: "X",
                        }),
                        l.map(function (e) {
                          return (0,
                          X.jsxs)("div", { className: tt, children: [(0, X.jsxs)("p", { children: ["Nome: ", (0, X.jsx)("span", { children: e.name })] }), (0, X.jsxs)("p", { children: ["Marca: ", (0, X.jsx)("span", { children: e.brand })] }), (0, X.jsxs)("p", { children: ["Tipo: ", (0, X.jsx)("span", { children: e.description })] }), (0, X.jsxs)("p", { children: ["Pre\xe7o: ", (0, X.jsx)("span", { children: e.price })] }), (0, X.jsxs)("p", { children: ["Cod. ", (0, X.jsx)("span", { children: e.id })] })] }, e.id);
                        }),
                      ],
                    })
                  : (0, X.jsx)("div", {
                      onClick: C,
                      className: nt,
                      children: (0, X.jsx)(He, {}),
                    }),
              ],
            })
          );
        },
        wt = "BalancoCard_container__XtqtR",
        kt = "BalancoCard_cards__5GH-5",
        St = "BalancoCard_items__UQV2g",
        _t = "BalancoCard_payment__35RmY",
        Ct = "BalancoCard_details__Cd8QF",
        Et = "BalancoCard_details_item__nLFNJ",
        jt = "BalancoCard_fechar__dmlQ6",
        Pt = "BalancoDelete_trash__THQNX";
      var Nt = function (e) {
        var t = e.deleteId,
          n = e.solds,
          r = e.handleDelete;
        function a() {
          return (a = te(
            Z().mark(function e() {
              var a;
              return Z().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), xe({}, "DELETE", t, "caixa");
                    case 2:
                      (a = n.filter(function (e) {
                        return e.id !== t;
                      })),
                        r(a);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (0, X.jsx)(X.Fragment, {
          children: (0, X.jsx)($e, {
            onClick: function () {
              return a.apply(this, arguments);
            },
            className: Pt,
          }),
        });
      };
      var Ot = function (e) {
          var n = e.solds,
            r = e.handleDelete,
            a = o((0, t.useState)(!1), 2),
            l = a[0],
            i = a[1],
            u = o((0, t.useState)([]), 2),
            s = u[0],
            c = u[1];
          function f(e) {
            var t = parseInt(e.target.id);
            n.forEach(function (e) {
              e.id === t && c(e.listBuy);
            }),
              i(!0);
          }
          function d(e) {
            r(e);
          }
          return (0, X.jsxs)("div", {
            className: wt,
            children: [
              n.map(function (e) {
                return (0,
                X.jsxs)("div", { className: kt, children: [(0, X.jsx)("h3", { onClick: f, id: e.id, children: "Ver produtos" }), (0, X.jsxs)("p", { className: _t, children: [(0, X.jsx)("span", { children: "Pagamento: " }), e.payment] }), (0, X.jsxs)("p", { className: St, children: [(0, X.jsx)("span", { children: "Items: " }), e.items] }), (0, X.jsxs)("p", { children: [(0, X.jsx)("span", { children: "Total: " }), "R$ ", e.total] }), (0, X.jsxs)("p", { children: [(0, X.jsx)("span", { children: "Hora: " }), e.date.split("-")[1]] }), (0, X.jsx)(Nt, { deleteId: e.id, solds: n, handleDelete: d })] }, e.id);
              }),
              l &&
                (0, X.jsxs)("div", {
                  className: Ct,
                  children: [
                    (0, X.jsx)("h2", { children: "Lista de Produtos" }),
                    (0, X.jsx)("div", {
                      className: jt,
                      onClick: function () {
                        i(!1);
                      },
                      children: (0, X.jsx)("p", { children: "X" }),
                    }),
                    (0, X.jsx)("div", {
                      className: Et,
                      children: s.map(function (e) {
                        return (0,
                        X.jsxs)("div", { children: [(0, X.jsxs)("p", { children: ["Nome: ", (0, X.jsx)("span", { children: e.name })] }), (0, X.jsxs)("p", { children: ["Marca: ", (0, X.jsx)("span", { children: e.brand })] }), (0, X.jsxs)("p", { children: ["Descri\xe7\xe3o: ", (0, X.jsx)("span", { children: e.description })] }), (0, X.jsxs)("p", { children: ["Quantidade: ", (0, X.jsx)("span", { children: e.amount })] }), (0, X.jsxs)("p", { children: ["Pre\xe7o: ", (0, X.jsx)("span", { children: e.price })] })] }, e.uid);
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        Lt = "BalancoForm_form__dUT1x",
        Tt = "BalancoForm_inputs__iWng9";
      var zt = function (e) {
          var t = e.handleSubmit;
          function n() {
            return (n = te(
              Z().mark(function e(n) {
                var r, a;
                return Z().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.preventDefault(),
                          !(r = n.target[0].value
                            .split("-")
                            .reverse()
                            .join("/")))
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (e.next = 5),
                          xe({}, "GET", "?date_like=".concat(r), "caixa")
                        );
                      case 5:
                        (a = e.sent), t(a);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (0, X.jsxs)("form", {
            className: Lt,
            onSubmit: function (e) {
              return n.apply(this, arguments);
            },
            children: [
              (0, X.jsxs)("div", {
                className: Tt,
                children: [
                  (0, X.jsx)(he, {
                    type: "date",
                    name: "date",
                    text: "Por data",
                    myFocus: !0,
                  }),
                  (0, X.jsx)(he, {
                    type: "number",
                    name: "id",
                    text: "Por c\xf3digo do produto",
                    myFocus: !0,
                  }),
                ],
              }),
              (0, X.jsx)(ce, { text: "Pesquisar" }),
            ],
          });
        },
        Ft = "Balanco_container__O8EZR",
        Mt = "Balanco_find_card__TEz6V";
      var It = function () {
        var e = o((0, t.useState)(!1), 2),
          n = e[0],
          r = e[1],
          a = o((0, t.useState)([]), 2),
          l = a[0],
          i = a[1];
        return (0, X.jsxs)("div", {
          className: Ft,
          children: [
            (0, X.jsx)("h1", { children: "Balan\xe7o de Vendas" }),
            (0, X.jsx)("h2", { children: "Pesquisar: " }),
            (0, X.jsx)(zt, {
              handleSubmit: function (e) {
                i(e), r(!0);
              },
            }),
            (0, X.jsx)("div", {
              className: Mt,
              children:
                n &&
                (0, X.jsx)(Ot, {
                  solds: l,
                  handleDelete: function (e) {
                    i(e);
                  },
                }),
            }),
          ],
        });
      };
      var Rt = function () {
        return (0, X.jsxs)(Q, {
          children: [
            (0, X.jsx)(Y, {}),
            (0, X.jsxs)(B, {
              children: [
                (0, X.jsx)(A, { path: "/", element: (0, X.jsx)(ze, {}) }),
                (0, X.jsx)(A, {
                  path: "/products",
                  element: (0, X.jsx)(Le, {}),
                }),
                (0, X.jsx)(A, { path: "/caixa", element: (0, X.jsx)(xt, {}) }),
                (0, X.jsx)(A, {
                  path: "/balanco",
                  element: (0, X.jsx)(It, {}),
                }),
              ],
            }),
          ],
        });
      };
      r.createRoot(document.getElementById("root")).render(
        (0, X.jsx)(t.StrictMode, { children: (0, X.jsx)(Rt, {}) })
      );
    })();
})();
//# sourceMappingURL=main.930442ca.js.map
