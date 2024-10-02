(self.webpackChunk_shibaswap_interface = self.webpackChunk_shibaswap_interface || []).push([
    [687], {
        82294: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(47313);
            const o = (0, n(32399).Z)(r.createElement("path", {
                d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
            }), "ExpandMore")
        },
        82955: (e, t, n) => {
            var r = n(47313),
                o = n(69003),
                i = n(7918);

            function s(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var a = s(o),
                l = function() {
                    return l = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, l.apply(this, arguments)
                };
            var c = function(e) {
                    var t = e.widgetCallback,
                        n = e.listeners;
                    return l(l({}, n || {}), {
                        close: function() {
                            t && t(), (null === n || void 0 === n ? void 0 : n.close) && n.close()
                        }
                    })
                },
                u = function(e) {
                    if (!e) return {};
                    var t = e.private_key,
                        n = function(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                            }
                            return n
                        }(e, ["private_key"]);
                    return i.signSmartContractData(n, t)
                },
                d = ["theme", "color_background", "color_buttons", "color_buttons_text", "color_secondary_buttons", "color_secondary_buttons_text", "color_main_text", "color_secondary_text", "color_icons", "color_links", "color_success", "color_warning", "color_error"],
                f = function(e) {
                    var t = e.widget,
                        n = e.options,
                        r = e.prevOptions,
                        o = e.widgetCallback;
                    ! function(e) {
                        var t = e.widget,
                            n = e.options,
                            r = e.prevOptions;
                        if (t) {
                            var o = d.reduce((function(e, t) {
                                var o, i;
                                return (null === (i = r.current) || void 0 === i ? void 0 : i[t]) !== (null === n || void 0 === n ? void 0 : n[t]) ? l(l({}, e), "theme" === t ? {
                                    theme: null === n || void 0 === n ? void 0 : n[t]
                                } : {
                                    colors: l(l({}, e.colors), (o = {}, o[t] = null === n || void 0 === n ? void 0 : n[t], o))
                                }) : e
                            }), {});
                            Object.keys(o).length && t.updateTheme(o)
                        }
                    }({
                        widget: t,
                        options: n,
                        prevOptions: r
                    }),
                    function(e) {
                        var t, n = e.widget,
                            r = e.options,
                            o = e.prevOptions,
                            i = e.widgetCallback;
                        if (n) {
                            if (null === (t = o.current) || void 0 === t ? void 0 : t.listeners) {
                                var s = (null === r || void 0 === r ? void 0 : r.listeners) || {},
                                    a = Object.keys(o.current.listeners).filter((function(e) {
                                        return !(e in s)
                                    }));
                                a.length && n.removeEventListeners(a)
                            }
                            var l = c({
                                listeners: null === r || void 0 === r ? void 0 : r.listeners,
                                widgetCallback: i
                            });
                            n.addEventListeners(l)
                        }
                    }({
                        widget: t,
                        options: n,
                        prevOptions: r,
                        widgetCallback: o
                    }), r.current = n
                };
            t.s = function(e) {
                var t = r.useRef(e),
                    n = r.useRef(),
                    o = r.useState(!1),
                    i = o[0],
                    s = o[1];
                return r.useEffect((function() {
                    f({
                        widget: n.current,
                        widgetCallback: function() {
                            return s(!1)
                        },
                        options: e,
                        prevOptions: t
                    })
                }), [e]), {
                    open: function(t) {
                        var r = t.options,
                            o = t.smartContractOptions;
                        i ? console.error("The Wert widget is already open") : (n.current = new a.default(l(l(l(l({}, r), e), {
                            listeners: c({
                                listeners: null === e || void 0 === e ? void 0 : e.listeners,
                                widgetCallback: function() {
                                    return s(!1)
                                }
                            })
                        }), o ? u(o) : {})), n.current.open(), s(!0))
                    },
                    close: function() {
                        var e;
                        i ? (null === (e = n.current) || void 0 === e || e.close(), s(!1)) : console.error("The Wert widget is already closed")
                    },
                    isWidgetOpen: i
                }
            }
        },
        69003: e => {
            "use strict";
            e.exports = class {
                constructor(e) {
                    this.options = e, this.iframe = document.createElement("iframe"), this.widgetWindow = null, this.widget_layout_mode = "Modal", this.await_data = !1, this.onMessage = e => {
                        var t, n, r, o, i, s, a, l, c, u;
                        const d = e.source === this.widgetWindow,
                            f = "object" === typeof e.data;
                        if (d && f) switch (e.data.type) {
                            case "loaded":
                                this.sendEvent("allow-redirect", {
                                    redirectAllowed: !1
                                }), this.sendEvent("extra", this.options.extra), null === (n = null === (t = this.options.listeners) || void 0 === t ? void 0 : t[e.data.type]) || void 0 === n || n.call(t);
                                break;
                            case "payment-status":
                                null === (o = null === (r = this.options.listeners) || void 0 === r ? void 0 : r[e.data.type]) || void 0 === o || o.call(r, e.data.data);
                                break;
                            case "position":
                                null === (s = null === (i = this.options.listeners) || void 0 === i ? void 0 : i[e.data.type]) || void 0 === s || s.call(i, e.data.data);
                                break;
                            case "rate-update":
                                null === (l = null === (a = this.options.listeners) || void 0 === a ? void 0 : a[e.data.type]) || void 0 === l || l.call(a, e.data.data);
                                break;
                            case "close":
                                this.close();
                                break;
                            case "error":
                                null === (u = null === (c = this.options.listeners) || void 0 === c ? void 0 : c[e.data.type]) || void 0 === u || u.call(c, e.data.data);
                                break;
                            case "3ds-start":
                                this.iframe.style.background = "#fff";
                                break;
                            case "3ds-end":
                                this.iframe.style.background = "transparent"
                        }
                    }, this.validateOptions(e), this.options.origin || (this.options.origin = "https://widget.wert.io"), this.options.extra && (this.await_data = !0)
                }
                open() {
                    this.iframe.style.border = "none", this.iframe.style.width = "100%", this.iframe.style.height = "100%", this.iframe.style.bottom = "0", this.iframe.style.right = "0", this.iframe.style.position = "fixed", this.iframe.style.zIndex = "10000", document.body.style.overflow = "hidden", this.iframe.setAttribute("src", this.getEmbedUrl()), this.iframe.setAttribute("allow", "camera *; microphone *"), this.iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-popups allow-same-origin"), document.body.appendChild(this.iframe), this.widgetWindow = this.iframe.contentWindow, this.listenWidget()
                }
                addEventListeners(e) {
                    this.options.listeners = Object.assign(Object.assign({}, this.options.listeners), e)
                }
                removeEventListeners(e) {
                    var t, n;
                    if ("undefined" === typeof e) delete this.options.listeners;
                    else if ("string" === typeof e) null === (t = this.options.listeners) || void 0 === t || delete t[e];
                    else
                        for (const r of e) null === (n = this.options.listeners) || void 0 === n || delete n[r]
                }
                updateTheme(e) {
                    e && Object.keys(e).length && this.sendEvent("theme", e)
                }
                close() {
                    var e, t;
                    document.body.removeChild(this.iframe), document.body.style.overflow = "", this.unListenWidget(), null === (t = null === (e = this.options.listeners) || void 0 === e ? void 0 : e.close) || void 0 === t || t.call(e)
                }
                validateOptions(e) {
                    var t, n, r, o;
                    if (!e.partner_id) throw Error("Please provide a partner_id in order for the widget to work correctly");
                    e.container_id && console.error("container_id is no longer supported"), (null === (n = null === (t = e.extra) || void 0 === t ? void 0 : t.item_info) || void 0 === n ? void 0 : n.name) && e.extra.item_info.name.length > 40 && console.error("Max length of the extra.item_info.name value is ".concat(40, " characters")), (null === (o = null === (r = e.extra) || void 0 === r ? void 0 : r.item_info) || void 0 === o ? void 0 : o.category) && e.extra.item_info.category.length > 40 && console.error("Max length of the extra.item_info.category value is ".concat(40, " characters"))
                }
                listenWidget() {
                    window.addEventListener("message", this.onMessage);
                    this.checkIntervalId = window.setInterval((() => {
                        this.widgetWindow && !this.widgetWindow.closed || this.unListenWidget()
                    }), 200)
                }
                unListenWidget() {
                    this.checkIntervalId && (clearInterval(this.checkIntervalId), this.checkIntervalId = void 0, window.removeEventListener("message", this.onMessage))
                }
                sendEvent(e, t) {
                    var n;
                    t && (null === (n = this.widgetWindow) || void 0 === n || n.postMessage({
                        data: t,
                        type: e
                    }, this.options.origin))
                }
                getEmbedUrl() {
                    const e = this.getParametersString();
                    return "".concat(this.options.origin, "/").concat(this.options.partner_id, "/widget").concat(e)
                }
                getParametersString() {
                    return Object.entries(Object.assign(Object.assign(Object.assign({}, this.options), {
                        widget_layout_mode: this.widget_layout_mode
                    }), this.await_data && {
                        await_data: this.await_data
                    })).reduce(((e, t) => {
                        let [n, r] = t;
                        if (void 0 === r || "object" === typeof r || ["origin", "partner_id"].includes(n)) return e;
                        return e + (e.length ? "&" : "?") + n + "=" + encodeURIComponent(r)
                    }), "")
                }
            }
        },
        7918: (e, t, n) => {
            "use strict";
            const r = n(50626),
                o = n(40918),
                i = ["address", "commodity", "commodity_amount", "network", "sc_address", "sc_input_data"],
                s = new r.eddsa("ed25519"),
                a = [...i, "signature"];
            e.exports = {
                signSmartContractData: (e, t) => {
                    const n = i.every((t => t in e)),
                        r = Object.keys(e).filter((e => !i.includes(e)));
                    if (!n) throw Error("All of following keys in options (as first argument) are required for signing: ".concat(i.map((e => '"'.concat(e, '"'))).join(", ")));
                    if (!t) throw Error("Private key (as second argument) is required for signing");
                    if (r.length) throw Error("Unexpected keys provided in options: ".concat(r.map((e => '"'.concat(e, '"'))).join(", ")));
                    const a = s.keyFromSecret((l = t) && "0x" === l.substring(0, 2) ? l.substring(2) : l);
                    var l;
                    const c = i.map((t => {
                            let n;
                            switch (t) {
                                case "commodity_amount":
                                    n = String("string" === typeof e.commodity_amount ? e.commodity_amount : parseFloat(e.commodity_amount));
                                    break;
                                case "commodity":
                                case "network":
                                    n = String(e[t]).toLowerCase();
                                    break;
                                default:
                                    n = String(e[t])
                            }
                            return "".concat(t, ":").concat(n)
                        })).join("\n"),
                        u = o.Buffer.from(c, "utf8").toString("hex"),
                        d = a.sign(u).toHex();
                    return Object.assign(Object.assign({}, e), {
                        signature: d
                    })
                },
                scKeysList: a
            }
        },
        48701: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(47313),
                o = n(75192),
                i = n.n(o);

            function s() {
                return s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, s.apply(this, arguments)
            }

            function a(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var l = (0, r.forwardRef)((function(e, t) {
                var n = e.color,
                    o = void 0 === n ? "currentColor" : n,
                    i = e.size,
                    l = void 0 === i ? 24 : i,
                    c = a(e, ["color", "size"]);
                return r.createElement("svg", s({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), r.createElement("polyline", {
                    points: "22 12 18 12 15 21 9 3 6 12 2 12"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "Activity";
            const c = l
        },
        19347: (e, t, n) => {
            "use strict";
            n.d(t, {
                p: () => $
            });
            var r = n(47313),
                o = n.t(r, 2),
                i = Object.defineProperty,
                s = (e, t, n) => (((e, t, n) => {
                    t in e ? i(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" != typeof t ? t + "" : t, n), n);
            let a = new class {
                    constructor() {
                        s(this, "current", this.detect()), s(this, "handoffState", "pending"), s(this, "currentId", 0)
                    }
                    set(e) {
                        this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                    }
                    reset() {
                        this.set(this.detect())
                    }
                    nextId() {
                        return ++this.currentId
                    }
                    get isServer() {
                        return "server" === this.current
                    }
                    get isClient() {
                        return "client" === this.current
                    }
                    detect() {
                        return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                    }
                    handoff() {
                        "pending" === this.handoffState && (this.handoffState = "complete")
                    }
                    get isHandoffComplete() {
                        return "complete" === this.handoffState
                    }
                },
                l = (e, t) => {
                    a.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
                };
            let c = function(e) {
                let t = function(e) {
                    let t = (0, r.useRef)(e);
                    return l((() => {
                        t.current = e
                    }), [e]), t
                }(e);
                return r.useCallback((function() {
                    return t.current(...arguments)
                }), [t])
            };

            function u() {
                let e = function() {
                        let e = "undefined" == typeof document;
                        return (e => e.useSyncExternalStore)(o)((() => () => {}), (() => !1), (() => !e))
                    }(),
                    [t, n] = r.useState(a.isHandoffComplete);
                return t && !1 === a.isHandoffComplete && n(!1), r.useEffect((() => {
                    !0 !== t && n(!0)
                }), [t]), r.useEffect((() => a.handoff()), []), !e && t
            }
            var d;
            let f = null != (d = r.useId) ? d : function() {
                let e = u(),
                    [t, n] = r.useState(e ? () => a.nextId() : null);
                return l((() => {
                    null === t && n(a.nextId())
                }), [t]), null != t ? "" + t : void 0
            };

            function p(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                return "string" == typeof n && "button" === n.toLowerCase() ? "button" : void 0
            }

            function h(e, t) {
                let [n, o] = (0, r.useState)((() => p(e)));
                return l((() => {
                    o(p(e))
                }), [e.type, e.as]), l((() => {
                    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && o("button")
                }), [n, t]), n
            }
            let v = Symbol();

            function g() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let o = (0, r.useRef)(t);
                (0, r.useEffect)((() => {
                    o.current = t
                }), [t]);
                let i = c((e => {
                    for (let t of o.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
                }));
                return t.every((e => null == e || (null == e ? void 0 : e[v]))) ? void 0 : i
            }
            let m = (0, r.createContext)(null);
            m.displayName = "OpenClosedContext";
            var y, w = ((y = w || {})[y.Open = 1] = "Open", y[y.Closed = 2] = "Closed", y[y.Closing = 4] = "Closing", y[y.Opening = 8] = "Opening", y);

            function b() {
                return (0, r.useContext)(m)
            }

            function k(e) {
                let {
                    value: t,
                    children: n
                } = e;
                return r.createElement(m.Provider, {
                    value: t
                }, n)
            }

            function O(e) {
                let t = e.parentElement,
                    n = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
                return (!r || ! function(e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(n)) && r
            }

            function E(e, t) {
                if (e in t) {
                    let i = t[e];
                    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
                    return "function" == typeof i ? i(...r) : i
                }
                let i = new Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map((e => '"'.concat(e, '"'))).join(", "), "."));
                throw Error.captureStackTrace && Error.captureStackTrace(i, E), i
            }

            function S(e) {
                return a.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }

            function _() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Array.from(new Set(t.flatMap((e => "string" == typeof e ? e.split(" ") : [])))).filter(Boolean).join(" ")
            }
            var j, P = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(P || {}),
                x = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(x || {});

            function C(e) {
                let {
                    ourProps: t,
                    theirProps: n,
                    slot: r,
                    defaultTag: o,
                    features: i,
                    visible: s = !0,
                    name: a,
                    mergeRefs: l
                } = e;
                l = null != l ? l : T;
                let c = A(n, t);
                if (s) return I(c, r, o, a, l);
                let u = null != i ? i : 0;
                if (2 & u) {
                    let {
                        static: e = !1,
                        ...t
                    } = c;
                    if (e) return I(t, r, o, a, l)
                }
                if (1 & u) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = c;
                    return E(e ? 0 : 1, {
                        0: () => null,
                        1: () => I({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, r, o, a, l)
                    })
                }
                return I(c, r, o, a, l)
            }

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    o = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    {
                        as: s = n,
                        children: a,
                        refName: l = "ref",
                        ...c
                    } = N(e, ["unmount", "static"]),
                    u = void 0 !== e.ref ? {
                        [l]: e.ref
                    } : {},
                    d = "function" == typeof a ? a(t) : a;
                "className" in c && c.className && "function" == typeof c.className && (c.className = c.className(t));
                let f = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
                    e && (f["data-headlessui-state"] = n.join(" "))
                }
                if (s === r.Fragment && Object.keys(R(c)).length > 0) {
                    if (!(0, r.isValidElement)(d) || Array.isArray(d) && d.length > 1) throw new Error(['Passing props on "Fragment"!', "", "The current component <".concat(o, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(c).map((e => "  - ".concat(e))).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => "  - ".concat(e))).join("\n")].join("\n"));
                    let e = d.props,
                        t = "function" == typeof(null == e ? void 0 : e.className) ? function() {
                            return _(null == e ? void 0 : e.className(...arguments), c.className)
                        } : _(null == e ? void 0 : e.className, c.className),
                        n = t ? {
                            className: t
                        } : {};
                    return (0, r.cloneElement)(d, Object.assign({}, A(d.props, R(N(c, ["ref"]))), f, u, {
                        ref: i(d.ref, u.ref)
                    }, n))
                }
                return (0, r.createElement)(s, Object.assign({}, N(c, ["ref"]), s !== r.Fragment && u, s !== r.Fragment && f), d)
            }

            function D() {
                let e = (0, r.useRef)([]),
                    t = (0, r.useCallback)((t => {
                        for (let n of e.current) null != n && ("function" == typeof n ? n(t) : n.current = t)
                    }), []);
                return function() {
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    if (!r.every((e => null == e))) return e.current = r, t
                }
            }

            function T() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.every((e => null == e)) ? void 0 : e => {
                    for (let n of t) null != n && ("function" == typeof n ? n(e) : n.current = e)
                }
            }

            function A() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (0 === t.length) return {};
                if (1 === t.length) return t[0];
                let r = {},
                    o = {};
                for (let i of t)
                    for (let e in i) e.startsWith("on") && "function" == typeof i[e] ? (null != o[e] || (o[e] = []), o[e].push(i[e])) : r[e] = i[e];
                if (r.disabled || r["aria-disabled"]) return Object.assign(r, Object.fromEntries(Object.keys(o).map((e => [e, void 0]))));
                for (let i in o) Object.assign(r, {
                    [i](e) {
                        let t = o[i];
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
                        for (let o of t) {
                            if ((e instanceof Event || (null == e ? void 0 : e.nativeEvent) instanceof Event) && e.defaultPrevented) return;
                            o(e, ...r)
                        }
                    }
                });
                return r
            }

            function L(e) {
                var t;
                return Object.assign((0, r.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function R(e) {
                let t = Object.assign({}, e);
                for (let n in t) void 0 === t[n] && delete t[n];
                return t
            }

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = Object.assign({}, e);
                for (let r of t) r in n && delete n[r];
                return n
            }
            let M = null != (j = r.startTransition) ? j : function(e) {
                e()
            };
            var W = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(W || {}),
                H = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(H || {}),
                B = (e => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.LinkPanel = 4] = "LinkPanel", e[e.UnlinkPanel = 5] = "UnlinkPanel", e))(B || {});
            let U = {
                    0: e => ({ ...e,
                        disclosureState: E(e.disclosureState, {
                            0: 1,
                            1: 0
                        })
                    }),
                    1: e => 1 === e.disclosureState ? e : { ...e,
                        disclosureState: 1
                    },
                    4: e => !0 === e.linkedPanel ? e : { ...e,
                        linkedPanel: !0
                    },
                    5: e => !1 === e.linkedPanel ? e : { ...e,
                        linkedPanel: !1
                    },
                    2: (e, t) => e.buttonId === t.buttonId ? e : { ...e,
                        buttonId: t.buttonId
                    },
                    3: (e, t) => e.panelId === t.panelId ? e : { ...e,
                        panelId: t.panelId
                    }
                },
                F = (0, r.createContext)(null);

            function z(e) {
                let t = (0, r.useContext)(F);
                if (null === t) {
                    let t = new Error("<".concat(e, " /> is missing a parent <Disclosure /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, z), t
                }
                return t
            }
            F.displayName = "DisclosureContext";
            let K = (0, r.createContext)(null);

            function Z(e) {
                let t = (0, r.useContext)(K);
                if (null === t) {
                    let t = new Error("<".concat(e, " /> is missing a parent <Disclosure /> component."));
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Z), t
                }
                return t
            }
            K.displayName = "DisclosureAPIContext";
            let q = (0, r.createContext)(null);

            function V(e, t) {
                return E(t.type, U, e, t)
            }
            q.displayName = "DisclosurePanelContext";
            let Y = r.Fragment;
            let G = P.RenderStrategy | P.Static;
            let J = L((function(e, t) {
                    let {
                        defaultOpen: n = !1,
                        ...o
                    } = e, i = (0, r.useRef)(null), s = g(t, function(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return Object.assign(e, {
                            [v]: t
                        })
                    }((e => {
                        i.current = e
                    }), void 0 === e.as || e.as === r.Fragment)), a = (0, r.useRef)(null), l = (0, r.useRef)(null), u = (0, r.useReducer)(V, {
                        disclosureState: n ? 0 : 1,
                        linkedPanel: !1,
                        buttonRef: l,
                        panelRef: a,
                        buttonId: null,
                        panelId: null
                    }), [{
                        disclosureState: d,
                        buttonId: f
                    }, p] = u, h = c((e => {
                        p({
                            type: 1
                        });
                        let t = S(i);
                        if (!t || !f) return;
                        let n = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(f) : t.getElementById(f);
                        null == n || n.focus()
                    })), m = (0, r.useMemo)((() => ({
                        close: h
                    })), [h]), y = (0, r.useMemo)((() => ({
                        open: 0 === d,
                        close: h
                    })), [d, h]), b = {
                        ref: s
                    };
                    return r.createElement(F.Provider, {
                        value: u
                    }, r.createElement(K.Provider, {
                        value: m
                    }, r.createElement(k, {
                        value: E(d, {
                            0: w.Open,
                            1: w.Closed
                        })
                    }, C({
                        ourProps: b,
                        theirProps: o,
                        slot: y,
                        defaultTag: Y,
                        name: "Disclosure"
                    }))))
                })),
                Q = L((function(e, t) {
                    let n = f(),
                        {
                            id: o = "headlessui-disclosure-button-".concat(n),
                            ...i
                        } = e,
                        [s, a] = z("Disclosure.Button"),
                        l = (0, r.useContext)(q),
                        u = null !== l && l === s.panelId,
                        d = (0, r.useRef)(null),
                        p = g(d, t, u ? null : s.buttonRef),
                        v = D();
                    (0, r.useEffect)((() => {
                        if (!u) return a({
                            type: 2,
                            buttonId: o
                        }), () => {
                            a({
                                type: 2,
                                buttonId: null
                            })
                        }
                    }), [o, a, u]);
                    let m = c((e => {
                            var t;
                            if (u) {
                                if (1 === s.disclosureState) return;
                                switch (e.key) {
                                    case W.Space:
                                    case W.Enter:
                                        e.preventDefault(), e.stopPropagation(), a({
                                            type: 0
                                        }), null == (t = s.buttonRef.current) || t.focus()
                                }
                            } else switch (e.key) {
                                case W.Space:
                                case W.Enter:
                                    e.preventDefault(), e.stopPropagation(), a({
                                        type: 0
                                    })
                            }
                        })),
                        y = c((e => {
                            if (e.key === W.Space) e.preventDefault()
                        })),
                        w = c((t => {
                            var n;
                            O(t.currentTarget) || e.disabled || (u ? (a({
                                type: 0
                            }), null == (n = s.buttonRef.current) || n.focus()) : a({
                                type: 0
                            }))
                        })),
                        b = (0, r.useMemo)((() => ({
                            open: 0 === s.disclosureState
                        })), [s]),
                        k = h(e, d);
                    return C({
                        mergeRefs: v,
                        ourProps: u ? {
                            ref: p,
                            type: k,
                            onKeyDown: m,
                            onClick: w
                        } : {
                            ref: p,
                            id: o,
                            type: k,
                            "aria-expanded": 0 === s.disclosureState,
                            "aria-controls": s.linkedPanel ? s.panelId : void 0,
                            onKeyDown: m,
                            onKeyUp: y,
                            onClick: w
                        },
                        theirProps: i,
                        slot: b,
                        defaultTag: "button",
                        name: "Disclosure.Button"
                    })
                })),
                X = L((function(e, t) {
                    let n = f(),
                        {
                            id: o = "headlessui-disclosure-panel-".concat(n),
                            ...i
                        } = e,
                        [s, a] = z("Disclosure.Panel"),
                        {
                            close: l
                        } = Z("Disclosure.Panel"),
                        c = D(),
                        u = g(t, s.panelRef, (e => {
                            M((() => a({
                                type: e ? 4 : 5
                            })))
                        }));
                    (0, r.useEffect)((() => (a({
                        type: 3,
                        panelId: o
                    }), () => {
                        a({
                            type: 3,
                            panelId: null
                        })
                    })), [o, a]);
                    let d = b(),
                        p = null !== d ? (d & w.Open) === w.Open : 0 === s.disclosureState,
                        h = (0, r.useMemo)((() => ({
                            open: 0 === s.disclosureState,
                            close: l
                        })), [s, l]),
                        v = {
                            ref: u,
                            id: o
                        };
                    return r.createElement(q.Provider, {
                        value: s.panelId
                    }, C({
                        mergeRefs: c,
                        ourProps: v,
                        theirProps: i,
                        slot: h,
                        defaultTag: "div",
                        features: G,
                        visible: p,
                        name: "Disclosure.Panel"
                    }))
                })),
                $ = Object.assign(J, {
                    Button: Q,
                    Panel: X
                })
        }
    }
]);