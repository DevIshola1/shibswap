"use strict";
(self.webpackChunk_shibaswap_interface = self.webpackChunk_shibaswap_interface || []).push([
    [208], {
        27208: (n, e, t) => {
            t.r(e), t.d(e, {
                W3mModal: () => w
            });
            var i, o = t(30168),
                s = t(72288),
                a = t(52984),
                r = t(28770),
                l = t(19010);
            const d = (0, r.iv)(i || (i = (0, o.Z)(["\n  :host {\n    z-index: var(--w3m-z-index);\n    display: block;\n    backface-visibility: hidden;\n    will-change: opacity;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    opacity: 0;\n    background-color: var(--wui-cover);\n    transition: opacity 0.2s var(--wui-ease-out-power-2);\n    will-change: opacity;\n  }\n\n  :host(.open) {\n    opacity: 1;\n  }\n\n  @keyframes zoom-in {\n    0% {\n      transform: scale(0.95) translateY(0);\n    }\n    100% {\n      transform: scale(1) translateY(0);\n    }\n  }\n\n  @keyframes slide-in {\n    0% {\n      transform: scale(1) translateY(50px);\n    }\n    100% {\n      transform: scale(1) translateY(0);\n    }\n  }\n\n  wui-card {\n    max-width: var(--w3m-modal-width);\n    width: 100%;\n    position: relative;\n    animation-duration: 0.2s;\n    animation-name: zoom-in;\n    animation-fill-mode: backwards;\n    animation-timing-function: var(--wui-ease-out-power-2);\n    outline: none;\n  }\n\n  wui-flex {\n    overflow-x: hidden;\n    overflow-y: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-height: 700px) and (min-width: 431px) {\n    wui-flex {\n      align-items: flex-start;\n    }\n\n    wui-card {\n      margin: var(--wui-spacing-xxl) 0px;\n    }\n  }\n\n  @media (max-width: 430px) {\n    wui-flex {\n      align-items: flex-end;\n    }\n\n    wui-card {\n      max-width: 100%;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      border-bottom: none;\n      animation-name: slide-in;\n    }\n  }\n"])));
            var c, h = function(n, e, t, i) {
                var o, s = arguments.length,
                    a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, t) : i;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) a = Reflect.decorate(n, e, t, i);
                else
                    for (var r = n.length - 1; r >= 0; r--)(o = n[r]) && (a = (s < 3 ? o(a) : s > 3 ? o(e, t, a) : o(e, t)) || a);
                return s > 3 && a && Object.defineProperty(e, t, a), a
            };
            const u = "scroll-lock";
            let w = class extends r.oi {
                constructor() {
                    super(), this.unsubscribe = [], this.abortController = void 0, this.open = s.IN.state.open, this.caipAddress = s.Ni.state.caipAddress, this.isSiweEnabled = s.hD.state.isSiweEnabled, this.connected = s.Ni.state.isConnected, this.loading = s.IN.state.loading, this.initializeTheming(), s.QT.prefetch(), this.unsubscribe.push(s.IN.subscribeKey("open", (n => n ? this.onOpen() : this.onClose())), s.IN.subscribeKey("loading", (n => {
                        this.loading = n, this.onNewAddress(s.Ni.state.caipAddress)
                    })), s.Ni.subscribeKey("isConnected", (n => this.connected = n)), s.Ni.subscribeKey("caipAddress", (n => this.onNewAddress(n))), s.hD.subscribeKey("isSiweEnabled", (n => this.isSiweEnabled = n))), s.Xs.sendEvent({
                        type: "track",
                        event: "MODAL_LOADED"
                    })
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach((n => n())), this.onRemoveKeyboardListener()
                }
                render() {
                    return this.open ? (0, r.dy)(c || (c = (0, o.Z)(["\n          <wui-flex @click=", '>\n            <wui-card role="alertdialog" aria-modal="true" tabindex="0">\n              <w3m-header></w3m-header>\n              <w3m-router></w3m-router>\n              <w3m-snackbar></w3m-snackbar>\n            </wui-card>\n          </wui-flex>\n          <w3m-tooltip></w3m-tooltip>\n        '])), this.onOverlayClick.bind(this)) : null
                }
                async onOverlayClick(n) {
                    n.target === n.currentTarget && await this.handleClose()
                }
                async handleClose() {
                    if (this.isSiweEnabled) {
                        const {
                            SIWEController: n
                        } = await t.e(174).then(t.bind(t, 4174));
                        "success" !== n.state.status && this.connected && await s.lZ.disconnect()
                    }
                    s.IN.close()
                }
                initializeTheming() {
                    const {
                        themeVariables: n,
                        themeMode: e
                    } = s.u0.state, t = a.UiHelperUtil.getColorTheme(e);
                    (0, a.initializeTheming)(n, t)
                }
                onClose() {
                    this.open = !1, this.classList.remove("open"), this.onScrollUnlock(), s.KC.hide(), this.onRemoveKeyboardListener()
                }
                onOpen() {
                    this.open = !0, this.classList.add("open"), this.onScrollLock(), this.onAddKeyboardListener()
                }
                onScrollLock() {
                    const n = document.createElement("style");
                    n.dataset.w3m = u, n.textContent = "\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ", document.head.appendChild(n)
                }
                onScrollUnlock() {
                    const n = document.head.querySelector('style[data-w3m="'.concat(u, '"]'));
                    n && n.remove()
                }
                onAddKeyboardListener() {
                    var n;
                    this.abortController = new AbortController;
                    const e = null === (n = this.shadowRoot) || void 0 === n ? void 0 : n.querySelector("wui-card");
                    null === e || void 0 === e || e.focus(), window.addEventListener("keydown", (n => {
                        if ("Escape" === n.key) this.handleClose();
                        else if ("Tab" === n.key) {
                            const {
                                tagName: t
                            } = n.target;
                            !t || t.includes("W3M-") || t.includes("WUI-") || null === e || void 0 === e || e.focus()
                        }
                    }), this.abortController)
                }
                onRemoveKeyboardListener() {
                    var n;
                    null === (n = this.abortController) || void 0 === n || n.abort(), this.abortController = void 0
                }
                async onNewAddress(n) {
                    if (!this.connected || this.loading) return;
                    const e = s.j1.getPlainAddress(this.caipAddress),
                        i = s.j1.getPlainAddress(n),
                        o = s.j1.getNetworkId(this.caipAddress),
                        a = s.j1.getNetworkId(n);
                    if (this.caipAddress = n, this.isSiweEnabled) {
                        const {
                            SIWEController: n
                        } = await t.e(174).then(t.bind(t, 4174)), s = await n.getSession();
                        var r, l;
                        if (s && e && i && e !== i) return void(null !== (r = n.state._client) && void 0 !== r && r.options.signOutOnAccountChange && (await n.signOut(), this.onSiweNavigation()));
                        if (s && o && a && o !== a) return void(null !== (l = n.state._client) && void 0 !== l && l.options.signOutOnNetworkChange && (await n.signOut(), this.onSiweNavigation()));
                        this.onSiweNavigation()
                    }
                }
                onSiweNavigation() {
                    this.open ? s.Pc.push("ConnectingSiwe") : s.IN.open({
                        view: "ConnectingSiwe"
                    })
                }
            };
            w.styles = d, h([(0, l.SB)()], w.prototype, "open", void 0), h([(0, l.SB)()], w.prototype, "caipAddress", void 0), h([(0, l.SB)()], w.prototype, "isSiweEnabled", void 0), h([(0, l.SB)()], w.prototype, "connected", void 0), h([(0, l.SB)()], w.prototype, "loading", void 0), w = h([(0, a.customElement)("w3m-modal")], w)
        }
    }
]);