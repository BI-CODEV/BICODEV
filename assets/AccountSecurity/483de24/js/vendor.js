(window.authWebpackJsonpFunction = window.authWebpackJsonpFunction || []).push([
    [0],
    [
        function(t, e, n) {
            "use strict";

            function r(t, e, n, r, i, o, s, a) {
                var u, c = "function" == typeof t ? t.options : t;
                if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = "data-v-" + o), s ? (u = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(s)
                    }, c._ssrRegister = u) : i && (u = a ? function() {
                        i.call(this, this.$root.$options.shadowRoot)
                    } : i), u)
                    if (c.functional) {
                        c._injectStyles = u;
                        var l = c.render;
                        c.render = function(t, e) {
                            return u.call(e), l(t, e)
                        }
                    } else {
                        var d = c.beforeCreate;
                        c.beforeCreate = d ? [].concat(d, u) : [u]
                    }
                return {
                    exports: t,
                    options: c
                }
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        function(t, e, n) {
            "use strict";
            var r, i, o = n(24),
                s = n.n(o),
                a = n(5),
                u = n.n(a),
                c = n(56),
                l = n.n(c),
                d = n(2),
                f = n.n(d),
                h = n(763),
                p = n(35),
                m = n.n(p),
                v = n(58),
                g = n.n(v),
                b = n(18),
                y = n.n(b),
                w = n(19),
                _ = n.n(w),
                k = n(20),
                S = n(23),
                E = n(37),
                x = function(t) {
                    return function(e, n) {
                        if (!n.locked) {
                            var r = e.data,
                                i = r.redirectUrl;
                            i && E.a.setContext(t).navigate(i, r.redirectCode)
                        }
                        return e
                    }
                },
                C = n(690),
                O = function(t) {
                    return (new I).setExtraData("function" == typeof t ? t() : t)
                },
                I = function() {
                    function t() {
                        y()(this, t), this.extraData = {}, this.converter = function(t) {
                            return t
                        }
                    }
                    return _()(t, [{
                        key: "submit",
                        value: function(t) {
                            var e = this,
                                n = Mt.getters["auth/form/formObject"](t),
                                r = Mt.getters["auth/form/inputs"](t),
                                i = {};
                            return Promise.resolve(this.extraData).then((function(o) {
                                return Object.assign(i, o), Object.values(r || {}).forEach((function(t) {
                                    var n = t.getValue ? t.getValue() : t.value,
                                        r = t.valueConverter ? t.valueConverter(n) : n;
                                    if (e.isEmptyValue(r) || (i[t.domName] = r), t.storeValue) try {
                                        localStorage.setItem(t.storageKey, JSON.stringify(t.value))
                                    } catch (t) {}
                                })), Promise.resolve(e.converter(i, n)).then((function(r) {
                                    return r = e.filterValues(r), Object(k.a)(e.appendCurrentQueryParameters(n.action), [].concat(g()((n.responseInterceptors || []).concat(n.customResponseInterceptors || [])), [Object(C.a)(t), Object(S.a)(t), x(n)]), {
                                        component: n
                                    }).post(r).res((function(t) {
                                        return t.data = {}, t.json().then((function(e) {
                                            return t.data = e, e.alerts ? Promise.reject(e) : t
                                        }), (function() {
                                            return t
                                        }))
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "appendCurrentQueryParameters",
                        value: function(t) {
                            var e = window.location.search;
                            return -1 !== t.indexOf("?") && e && (e = "&" + e.substr(1)), t + e
                        }
                    }, {
                        key: "setExtraData",
                        value: function(t) {
                            return this.extraData = t, this
                        }
                    }, {
                        key: "setRequestDataConverter",
                        value: function(t) {
                            return t && (this.converter = t), this
                        }
                    }, {
                        key: "filterValues",
                        value: function(t) {
                            var e = this,
                                n = {};
                            return Object.entries(t).forEach((function(t) {
                                var r = s()(t, 2),
                                    i = r[0],
                                    o = r[1];
                                e.isEmptyValue(o) || (n[i] = "object" === m()(o) ? e.filterValues(o) : o)
                            })), n
                        }
                    }, {
                        key: "isEmptyValue",
                        value: function(t) {
                            switch (t) {
                                case "":
                                case !1:
                                case void 0:
                                case null:
                                    return !0
                            }
                            return !1
                        }
                    }]), t
                }(),
                A = n(29),
                T = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return n.reduce((function(t, e) {
                        return t[e] || {}
                    }), t)
                },
                P = n(709),
                R = {
                    namespaced: !0,
                    state: {
                        status: {},
                        forms: {},
                        controls: {},
                        lastUsedControl: {},
                        inputAlerts: {},
                        validators: {},
                        inputs: {},
                        submitDisabled: {}
                    },
                    mutations: (r = {}, f()(r, "setInputAlerts", (function(t, e) {
                        u.a.set(t.inputAlerts, e.formId, e.data)
                    })), f()(r, "inputAlert", (function(t, e) {})), f()(r, "clearInputAlerts", (function(t, e) {
                        u.a.set(t.inputAlerts, e.formId, {})
                    })), f()(r, "registerForm", (function(t, e) {
                        u.a.set(t.forms, e.id, e.object), u.a.set(t.inputs, e.id, void 0), u.a.set(t.inputAlerts, e.id, void 0), u.a.set(t.validators, e.id, void 0), u.a.set(t.lastUsedControl, e.id, void 0)
                    })), f()(r, "registerInput", (function(t, e) {
                        var n = t.inputs[e.formId] || {};
                        n[e.id] = e, i = e, u.a.set(t.inputs, e.formId, n)
                    })), f()(r, "registerValidator", (function(t, e) {
                        i && e.proposeInputId(i.id);
                        var n = t.validators[e.formId] || {},
                            r = n[e.inputId] || {};
                        r[e.name] = e, n[e.inputId] = r, u.a.set(t.validators, e.formId, n)
                    })), f()(r, "unregisterInput", (function(t, e) {
                        var n = (t.inputs[e.formId] || {})[e.id];
                        n && e._uid === n._uid && u.a.delete(T(t.inputs, e.formId), e.id)
                    })), f()(r, "unregisterValidator", (function(t, e) {
                        u.a.delete(T(t.validators, e.formId, e.inputId), e.name)
                    })), f()(r, "formState", (function(t, e) {
                        u.a.set(t.status, e.formId, e.status)
                    })), f()(r, "cancel", (function(t, e) {
                        u.a.set(t.status, e.formId, P.a.CANCELED)
                    })), f()(r, "controls", (function(t, e) {
                        e.controls.forEach((function(t, e) {
                            return t.id = e
                        })), u.a.set(t.controls, e.formId, e.controls)
                    })), f()(r, "setLastUsedControl", (function(t, e) {
                        u.a.set(t.lastUsedControl, e.formId, e.controlId)
                    })), f()(r, "setSubmitDisabled", (function(t, e) {
                        u.a.set(t.submitDisabled, e.formId, e.disabled)
                    })), r),
                    getters: {
                        inputs: function(t) {
                            return function(e) {
                                return t.inputs[e] || {}
                            }
                        },
                        input: function(t) {
                            return function(e, n) {
                                return (t.inputs[e] || {})[n]
                            }
                        },
                        validators: function(t) {
                            return function(e) {
                                return t.validators[e] || {}
                            }
                        },
                        inputAlerts: function(t) {
                            return function(e) {
                                return t.inputAlerts[e] || {}
                            }
                        },
                        formObject: function(t) {
                            return function(e) {
                                return t.forms[e]
                            }
                        },
                        controls: function(t) {
                            return function(e) {
                                return t.controls[e]
                            }
                        },
                        status: function(t) {
                            return function(e) {
                                return t.status[e]
                            }
                        },
                        lastUsedControl: function(t) {
                            return function(e) {
                                return t.lastUsedControl[e]
                            }
                        },
                        submitDisabled: function(t) {
                            return function(e) {
                                var n = t.forms[e];
                                return (!n || !n.doNotDisableSubmit) && (t.submitDisabled[e] || "submitting" === t.status[e])
                            }
                        }
                    },
                    actions: {
                        submit: function(t, e) {
                            var n = t.commit,
                                r = t.getters,
                                i = r.formObject(e);
                            return n("clearInputAlerts", {
                                formId: e
                            }), i.onBeforeSubmit().then((function() {
                                return h.a.validate(e).then((function() {
                                    return A.a.clear(e), n("formState", {
                                        formId: e,
                                        status: P.a.SUBMITTING
                                    }), i.onCustomSubmit ? i.onCustomSubmit() : O(i.extraSubmitData()).setRequestDataConverter(i.requestDataConverter).submit(e)
                                })).then((function(t) {
                                    return Promise.resolve(void 0 !== t.res ? t.res() : t).then((function(t) {
                                        if (void 0 !== t.ok && !t.ok) return Promise.reject()
                                    })).then((function() {
                                        return i.onValidateResponse(t)
                                    })).then((function(e) {
                                        return e ? Promise.resolve(t) : Promise.reject()
                                    }))
                                })).then((function(t) {
                                    return n("formState", {
                                        formId: e,
                                        status: P.a.SUBMITTED
                                    }), i.onSuccessSubmitCallbacks.forEach((function(e) {
                                        return e(t)
                                    })), i.$emit("onSuccessSubmit"), !0
                                })).
                                catch((function(t) {
                                    return n("formState", {
                                            formId: e,
                                            status: P.a.INVALID
                                        }),
                                        function(t, e, n, r) {
                                            if (!e || !e.input) return;
                                            t("setInputAlerts", {
                                                formId: n,
                                                data: e.input
                                            });
                                            var i = 0,
                                                o = 0,
                                                s = Object.values(r.inputs(n) || {}).find((function(t) {
                                                    return e.input[t.id]
                                                }));
                                            s && s.focus && s.focus();
                                            Object.values(e.input).forEach((function(e) {
                                                var r = e.length;
                                                o += r, r && t("inputAlert", {
                                                    formId: n,
                                                    alert: e[0]
                                                }), e.forEach((function(t) {
                                                    t.generic && i++
                                                }))
                                            })), i !== o && A.a.setFixErrors(n)
                                        }(n, (t || {}).alerts, e, r), i.onFailedSubmitCallbacks.forEach((function(e) {
                                            return e(t)
                                        })), !1
                                }))
                            })).
                            catch((function(t) {}))
                        },
                        register: function(t, e) {
                            (0, t.commit)("registerForm", e), A.a.clear(e.id)
                        },
                        controls: function(t, e) {
                            (0, t.commit)("controls", e)
                        },
                        cancel: function(t, e) {
                            var n = t.commit,
                                r = t.getters;
                            n("cancel", {
                                formId: e
                            });
                            var i = r.formObject(e);
                            i.onCancelCallbacks.forEach((function(t) {
                                return t()
                            })), i.$emit("onCancel")
                        },
                        registerInput: function(t, e) {
                            var n = t.commit,
                                r = t.state;
                            return !(r.inputs[e.formId] || {})[e.id] && (Object.keys(r.inputs[e.formId] || {}).length || setTimeout((function() {
                                return e.focus()
                            }), 500), n("registerInput", e), !0)
                        },
                        unregisterInput: function(t, e) {
                            (0, t.commit)("unregisterInput", e)
                        },
                        registerValidator: function(t, e) {
                            (0, t.commit)("registerValidator", e)
                        },
                        unregisterValidator: function(t, e) {
                            (0, t.commit)("unregisterValidator", e)
                        },
                        reset: function(t, e) {
                            var n = t.commit,
                                r = t.getters;
                            n("clearInputAlerts", {
                                formId: e
                            }), n("formState", {
                                formId: e,
                                status: void 0
                            }), Object.values(r.inputs(e) || {}).forEach((function(t) {
                                return t.clear()
                            }))
                        },
                        setLastUsedControl: function(t, e) {
                            (0, t.commit)("setLastUsedControl", e)
                        },
                        setSubmitDisabled: function(t, e) {
                            (0, t.commit)("setSubmitDisabled", e)
                        }
                    }
                };
            var N, j, D, B, L, M = n(651),
                $ = n.n(M),
                U = n(674),
                F = (N = {}, f()(N, U.a.fix, {
                    id: U.a.fix,
                    type: "error",
                    message: "Please fix the errors below."
                }), f()(N, U.a.unexpected, {
                    id: U.a.unexpected,
                    type: "danger",
                    message: "Due to technical difficulties we are unable to process your request. Please try again later."
                }), N),
                V = {
                    namespaced: !0,
                    state: {
                        alerts: {}
                    },
                    mutations: (j = {}, f()(j, "addAlerts", (function(t, e) {
                        var n = t.alerts[e.context] || [];
                        e.alert.id && n.find((function(t) {
                            return t.id === e.alert.id
                        })) || (n.push(Object.assign({
                            type: "success",
                            closable: !0
                        }, e.alert)), u.a.set(t.alerts, e.context, n))
                    })), f()(j, "clear", (function(t, e) {
                        var n = t.alerts[e] || [];
                        u.a.set(t.alerts, e, n.filter((function(t) {
                            return t.manualRemoveOnly
                        })))
                    })), f()(j, "close", (function(t, e) {
                        var n = void 0 !== e.id ? function(t) {
                            return t.id !== e.id
                        } : function(t, n) {
                            return $()(t), n !== e.index
                        };
                        u.a.set(t.alerts, e.context, (t.alerts[e.context] || []).filter(n))
                    })), j),
                    getters: {
                        all: function(t) {
                            return function(e) {
                                return t.alerts[e] || []
                            }
                        }
                    },
                    actions: {
                        add: function(t, e) {
                            var n = t.commit;
                            e.alerts.forEach((function(t) {
                                n("addAlerts", {
                                    context: e.context,
                                    alert: t
                                })
                            }))
                        },
                        set: function(t, e) {
                            var n = t.commit;
                            if (e.id) {
                                var r = F[e.id];
                                if (!r) throw new Error("Undefined alert id: " + e.id);
                                n("addAlerts", {
                                    context: e.context,
                                    alert: r
                                })
                            }
                        },
                        close: function(t, e) {
                            (0, t.commit)("close", e)
                        },
                        clear: function(t, e) {
                            (0, t.commit)("clear", e)
                        }
                    }
                },
                q = n(654),
                z = n(728),
                K = {
                    namespaced: !0,
                    state: {
                        info: {},
                        uid: void 0,
                        nid: void 0,
                        loginName: void 0
                    },
                    mutations: (D = {}, f()(D, "updateInfo", (function(t, e) {
                        e && (t.info = e)
                    })), f()(D, "setUid", (function(t, e) {
                        t.uid = e
                    })), f()(D, "setNid", (function(t, e) {
                        t.nid = e
                    })), f()(D, "setLoginName", (function(t, e) {
                        t.loginName = e
                    })), D),
                    getters: {
                        info: function(t) {
                            return t.info || {}
                        },
                        uid: function(t) {
                            return t.uid
                        },
                        nid: function(t) {
                            return t.nid
                        },
                        loginName: function(t) {
                            return t.loginName
                        },
                        syncAllowed: function(t) {
                            return function(t) {
                                return !0
                            }
                        }
                    },
                    actions: {
                        initInfo: function(t) {
                            var e = t.commit;
                            return Object(q.a)("/ab/account-security/userinfo/info").then((function(t) {
                                t && (e("updateInfo", t.data), e("setNid", t.data.nid))
                            }))
                        },
                        logout: function() {
                            var t = document.createElement("form");
                            t.setAttribute("action", z.a), t.setAttribute("method", "POST"), document.body.appendChild(t), t.submit()
                        },
                        setUid: function(t, e) {
                            (0, t.commit)("setUid", e)
                        },
                        setNid: function(t, e) {
                            (0, t.commit)("setNid", e)
                        },
                        setLoginName: function(t, e) {
                            (0, t.commit)("setLoginName", e)
                        }
                    }
                },
                H = {
                    namespaced: !0,
                    state: {
                        user: {},
                        countries: []
                    },
                    mutations: (B = {}, f()(B, "setCountries", (function(t, e) {
                        t.countries = e
                    })), f()(B, "setUserLocation", (function(t, e) {
                        t.user = e
                    })), B),
                    getters: {
                        userCountry: function(t) {
                            return t.user.country
                        },
                        countries: function(t) {
                            return t.countries
                        }
                    },
                    actions: {
                        initCountries: function(t, e) {
                            var n = t.commit;
                            return Object(q.a)("/ab/compliance/countries", e, !0).then((function(t) {
                                return n("setCountries", t.data), t.data
                            }))
                        },
                        initUser: function(t, e) {
                            var n = t.commit;
                            return Object(q.a)("/ab/account-security/userinfo/location", e, !0).then((function(t) {
                                return n("setUserLocation", t.data), t.data
                            }))
                        }
                    }
                },
                Y = n(707),
                Q = n(640),
                W = n(28),
                G = 0,
                J = !1,
                X = [],
                Z = {
                    namespaced: !0,
                    state: {
                        modalRefs: {},
                        vueInstances: {}
                    },
                    mutations: (L = {}, f()(L, "register", (function(t, e) {
                        u.a.set(t.modalRefs, e.id, e.object)
                    })), f()(L, "register_vue", (function(t, e) {
                        u.a.set(t.vueInstances, e.id, e.vueInstance)
                    })), f()(L, "close", (function(t, e) {
                        u.a.set(t.modalRefs, e, void 0), u.a.set(t.vueInstances, e, void 0)
                    })), L),
                    getters: {
                        isOpened: function(t) {
                            return function(e) {
                                return !!t.modalRefs[e] || !!t.vueInstances[e]
                            }
                        }
                    },
                    actions: {
                        registerModalRef: function(t, e) {
                            var n = t.commit,
                                r = (t.state, t.dispatch);
                            n("register", e);
                            var i = e.object;
                            i && (i.addEventListener("closed", (function() {
                                r("clearArtifacts", e)
                            })), i.componentOnReady().then((function() {
                                i.open()
                            })))
                        },
                        clearArtifacts: function(t, e) {
                            var n = t.commit,
                                r = t.state;
                            setTimeout((function() {
                                X = [],
                                    function(t, e) {
                                        t && t.$destroy();
                                        e && e.parentNode && e.parentNode.removeChild(e)
                                    }(r.vueInstances[e.id], e.object), n("close", e.id)
                            }), 100)
                        },
                        open: function(t, e) {
                            var n = t.commit,
                                r = (t.state, t.dispatch),
                                i = e.id || "_auth_modal_" + ++G;
                            return e.data.id = i, "undefined" != typeof window && Y.a.get() && window.$nuxt ? function(t, e, n) {
                                var r = Y.a.get();
                                if (r.$openModal({
                                        title: "...",
                                        name: t,
                                        params: r.$route.params,
                                        data: JSON.stringify({
                                            modalId: t
                                        })
                                    }), "undefined" == typeof window) return;
                                if (Object(W.a)()) return X.push(t), void(J || (Q.a.onMessage((function(t) {
                                    "up/lifecycle/v1/SCREEN_CHANGED" === t.type && "will_appear" === t.payload.event && X.forEach((function(t) {
                                        e("clearArtifacts", {
                                            id: t
                                        })
                                    }))
                                })), J = !0));
                                var i = new RegExp("/".concat(t, "[/^]?")),
                                    o = setInterval((function() {
                                        i.test(window.location.pathname) || (e("clearArtifacts", {
                                            id: t
                                        }), clearInterval(o))
                                    }), 1e3)
                            }(e.id, r) : function(t, e, n) {
                                var r = document.createElement("div");
                                document.body.appendChild(r);
                                var i = new u.a({
                                    el: r,
                                    render: function(n) {
                                        return n(e.component, Object.assign({
                                            id: t
                                        }, {
                                            attrs: e.data || {}
                                        }))
                                    }
                                });
                                n("register_vue", {
                                    id: t,
                                    vueInstance: i
                                })
                            }(i, e, n), A.a.clear(i), r("auth/form/reset", i, {
                                root: !0
                            }), i
                        },
                        close: function(t, e) {
                            t.commit;
                            var n = t.state.modalRefs[e];
                            if (!n) return Promise.resolve();
                            var r = new Promise((function(t) {
                                n.addEventListener("closed", (function() {
                                    setTimeout((function() {
                                        t()
                                    }), 100)
                                }))
                            }));
                            return n.close(), r
                        }
                    }
                };
            var tt = n(14),
                et = n(644),
                nt = n(706);

            function rt(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return it(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return it(t, e)
                        }(t))) {
                        var e = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return e >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[e++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        r = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = r.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == r.
                            return || r.
                            return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function it(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var ot = {},
                st = Object.values(tt.c);
            Object.values(tt.a).forEach((function(t) {
                return ot[t] = function(t) {
                    var e;
                    return {
                        namespaced: !0,
                        state: {
                            id: "",
                            uid: void 0,
                            default: !1,
                            allowAdd: void 0,
                            list: void 0,
                            limits: 0,
                            allowSwitch: void 0
                        },
                        mutations: (e = {}, f()(e, "updateUid", (function(t, e) {
                            t.uid = e
                        })), f()(e, "updateId", (function(t, e) {
                            t.id = e
                        })), f()(e, "updateDefault", (function(t, e) {
                            t.
                            default = e
                        })), f()(e, "markLimit", (function(t, e) {
                            t.limits |= e
                        })), f()(e, "resetLimit", (function(t, e) {
                            t.limits = void 0 !== e ? t.limits & ~e : 0
                        })), f()(e, "allowAdd", (function(t) {
                            t.allowAdd = !0
                        })), f()(e, "setList", (function(t, e) {
                            t.list = e
                        })), f()(e, "allowSwitch", (function(t, e) {
                            t.allowSwitch = e
                        })), e),
                        getters: {
                            id: function(t) {
                                return t.id
                            },
                            uid: function(t) {
                                return t.uid
                            },
                            list: function(t) {
                                return t.list
                            },
                            default: function(t) {
                                return t.
                                default
                            },
                            limits: function(t) {
                                return t.limits
                            },
                            allowAdd: function(e) {
                                return void 0 !== e.allowAdd ? e.allowAdd : !!window.Applet && Applet.getVar(t + "AllowAdd")
                            },
                            allowSwitch: function(t) {
                                return void 0 === t.allowSwitch || t.allowSwitch
                            },
                            syncAllowed: function(t) {
                                return function(t) {
                                    return !0
                                }
                            }
                        },
                        actions: {
                            set: function(t, e) {
                                var n = t.commit;
                                n("updateId", e.id), n("updateUid", e.uid), n("setList", e.list)
                            },
                            setUid: function(t, e) {
                                (0, t.commit)("updateUid", e)
                            },
                            setId: function(t, e) {
                                (0, t.commit)("updateId", e)
                            },
                            setDefault: function(t, e) {
                                (0, t.commit)("updateDefault", e)
                            },
                            setList: function(t, e) {
                                (0, t.commit)("setList", e)
                            },
                            markLimit: function(t, e) {
                                (0, t.commit)("markLimit", e)
                            },
                            resetLimit: function(t, e) {
                                (0, t.commit)("resetLimit", e)
                            },
                            sendOtp: function(e, n) {
                                var r = e.commit,
                                    i = e.getters,
                                    o = Object.assign({
                                        url: "/ab/account-security/device-authorization/send-otp",
                                        meta: {}
                                    }, n.config || {});
                                return new Promise((function(e, s) {
                                    Object(k.a)(o.url, [Object(nt.a)(t, et.a.SEND), Object(S.a)(n.context), Object(C.a)(n.context)]).post(Object.assign({
                                        name: t,
                                        uid: i.uid,
                                        type: i.type,
                                        init: n.init
                                    }, o.meta)).json((function(t) {
                                        if (t.uid && r("updateUid", t.uid), !t.eventCode) return r("resetLimit"), void e(!0);
                                        s()
                                    }))
                                }))
                            },
                            add: function(t, e) {
                                var n = t.commit;
                                n("updateUid", e.uid), e.id && n("updateId", e.id)
                            },
                            remove: function(t, e) {
                                var n = t.commit,
                                    r = t.getters,
                                    i = [];
                                e && r.list && n("setList", i = r.list.filter((function(t) {
                                    return t.uid !== e
                                }))), i.length || (n("updateUid", null), n("updateId", null))
                            },
                            allowAdd: function(t) {
                                (0, t.commit)("allowAdd")
                            },
                            allowSwitch: function(t, e) {
                                (0, t.commit)("allowSwitch", e)
                            }
                        }
                    }
                }(t)
            }));
            var at, ut = {
                    namespaced: !0,
                    modules: ot,
                    getters: {
                        availableOtpNames: function(t, e) {
                            var n = [];
                            return st.forEach((function(t) {
                                e[t + "/uid"] && n.push(t)
                            })), n
                        },
                        hasOtpChallenge: function(t, e) {
                            var n, r = rt(st);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    if (e[n.value + "/uid"]) return !0
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                            return !1
                        },
                        limitExceeded: function(t, e) {
                            var n, r = rt(st);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    if (e[n.value + "/limits"] > 0) return !0
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                            return !1
                        }
                    },
                    actions: {
                        setDefault: function(t, e) {
                            var n = t.dispatch;
                            st.forEach((function(t) {
                                n(t + "/setDefault", !1)
                            })), n(e + "/setDefault", !0)
                        }
                    }
                },
                ct = {
                    namespaced: !0,
                    state: {
                        siteKey: null,
                        enabled: !1
                    },
                    mutations: (at = {}, f()(at, "setSiteKey", (function(t, e) {
                        t.siteKey = e
                    })), f()(at, "enable", (function(t, e) {
                        t.enable = e
                    })), at),
                    getters: {
                        siteKey: function(t) {
                            return t.siteKey
                        },
                        isEnabled: function(t) {
                            return t.enabled
                        }
                    },
                    actions: {
                        siteKey: function(t, e) {
                            (0, t.commit)("setSiteKey", e)
                        },
                        enable: function(t, e) {
                            (0, t.commit)("enable", e)
                        }
                    }
                },
                lt = function() {
                    if ("undefined" == typeof window) return null;
                    var t = dt();
                    return t ? t.getUid() : (t = ft()) ? t.uid : void 0
                };

            function dt() {
                return window.Applet ? Applet.getUser() : null
            }

            function ft() {
                var t = window.$nuxt && $nuxt.$store && $nuxt.$store.state && $nuxt.$store.state.context;
                return t && t.user
            }
            var ht, pt = n(652);
            var mt, vt, gt, bt = {
                    namespaced: !0,
                    state: {
                        resetInProgress: !1,
                        acknowledge: function() {
                            var t = null;
                            try {
                                t = localStorage.getItem("sq_reset_acknowledge")
                            } catch (t) {}
                            return lt() === t
                        }(),
                        initCode: void 0,
                        code: void 0,
                        state: void 0
                    },
                    mutations: (ht = {}, f()(ht, "updateResetInProgress", (function(t, e) {
                        e && (t.resetInProgress = e)
                    })), f()(ht, "updateAcknowledge", (function(t, e) {
                        try {
                            e ? localStorage.setItem("sq_reset_acknowledge", lt()) : localStorage.removeItem("sq_reset_acknowledge")
                        } catch (t) {}
                        t.acknowledge = e
                    })), f()(ht, "setInitCode", (function(t, e) {
                        t.initCode = e
                    })), f()(ht, "setCode", (function(t, e) {
                        t.code = e
                    })), f()(ht, "setState", (function(t, e) {
                        t.state = e
                    })), ht),
                    getters: {
                        inProgress: function(t) {
                            return t.resetInProgress
                        },
                        isAcknowledged: function(t) {
                            return t.acknowledge
                        },
                        initCode: function(t) {
                            return t.initCode
                        },
                        code: function(t) {
                            return t.code
                        }
                    },
                    actions: {
                        checkInProgress: function(t, e) {
                            var n = t.commit;
                            return Object(q.a)("/ab/account-security/reset-security-question/in-progress", e).then((function(t) {
                                var e = t.data.status;
                                return n("updateResetInProgress", e), e
                            }))
                        },
                        showAcknowledgeMessage: function(t, e) {
                            $()(t), A.a.add(e, [{
                                id: "sqResetFlowAlreadyStarted",
                                message: "We have already received your request to reset your security question and have sent you an\n                    email with instructions. If you don't see it, be sure to check your spam folder.",
                                type: "alert",
                                closable: !0
                            }])
                        },
                        start: function(t, e) {
                            var n = t.dispatch,
                                r = t.commit;
                            n("clearAcknowledge");
                            var i = e.initUrl || "/ab/account-security/reset-security-question/submit-init";
                            return Object(k.a)(i, [Object(S.a)(e.context), x()]).post().json((function(t) {
                                var i = t.reason;
                                switch (r("updateResetInProgress", "in-progress" === i), i) {
                                    case "limit":
                                        n("setState", pt.a.trouble);
                                        break;
                                    case "in-progress":
                                        n("showAcknowledgeMessage", e.context);
                                        break;
                                    default:
                                        if (t.status) return void n("setState", pt.a.sent)
                                }
                                return Promise.reject()
                            }))
                        },
                        acknowledge: function(t) {
                            (0, t.commit)("updateAcknowledge", !0)
                        },
                        clearAcknowledge: function(t) {
                            (0, t.commit)("updateAcknowledge", !1)
                        },
                        setInitCode: function(t, e) {
                            (0, t.commit)("setInitCode", e)
                        },
                        setCode: function(t, e) {
                            (0, t.commit)("setCode", e)
                        },
                        setState: function(t, e) {
                            (0, t.commit)("setState", e);
                            for (var n = new URL(document.location).pathname, r = 0, i = Object.values(pt.a); r < i.length; r++) {
                                var o = i[r];
                                if (0 === n.indexOf(o.replace("/{code}", ""))) return
                            }
                            document.location = e
                        }
                    },
                    plugins: [
                        function(t) {
                            t.subscribe((function(e) {
                                "auth/alerts/close" === e.type && "sqResetFlowAlreadyStarted" === e.payload.id && t.dispatch("auth/securityQuestion/reset/acknowledge")
                            }))
                        }
                    ]
                },
                yt = {
                    namespaced: !0,
                    modules: {
                        reset: bt
                    },
                    state: {
                        securityQuestion: null,
                        wasCreated: !1
                    },
                    mutations: (mt = {}, f()(mt, "updateSecurityQuestion", (function(t, e) {
                        t.wasCreated = e.securityQuestion && !e.currentSecurityQuestion, t.securityQuestion = e.securityQuestion
                    })), f()(mt, "initSecurityQuestion", (function(t, e) {
                        t.securityQuestion = e
                    })), mt),
                    getters: {
                        securityQuestion: function(t) {
                            return t.securityQuestion || (window.Applet ? Applet.getVar("account_security_question") : null)
                        },
                        wasCreated: function(t) {
                            return t.wasCreated
                        }
                    },
                    actions: {
                        init: function(t) {
                            var e = t.commit,
                                n = t.getters.securityQuestion;
                            return n ? (e("initSecurityQuestion", n), Promise.resolve()) : Object(q.a)("/ab/account-security/security-question/info").then((function(t) {
                                var n = t.data;
                                n && n.securityQuestion && e("initSecurityQuestion", n.securityQuestion)
                            }))
                        },
                        sync: function(t, e) {
                            (0, t.commit)("initSecurityQuestion", e)
                        },
                        update: function(t, e) {
                            (0, t.commit)("updateSecurityQuestion", {
                                securityQuestion: e,
                                currentSecurityQuestion: t.getters.securityQuestion
                            })
                        }
                    }
                },
                wt = {
                    namespaced: !0,
                    state: {
                        available: null,
                        sso: null
                    },
                    mutations: (vt = {}, f()(vt, "setAvailability", (function(t, e) {
                        t.available = e
                    })), f()(vt, "setSso", (function(t, e) {
                        t.sso = e
                    })), vt),
                    getters: {
                        available: function(t) {
                            return t.available
                        },
                        sso: function(t) {
                            return t.sso
                        },
                        syncAllowed: function(t) {
                            return function(t) {
                                return !0
                            }
                        }
                    },
                    actions: {
                        init: function(t) {
                            var e = t.commit;
                            return Object(q.a)("/ab/account-security/userinfo/has_password", null, !0).then((function(t) {
                                e("setAvailability", t.data.available), e("setSso", t.data.sso)
                            }))
                        },
                        setAvailable: function(t, e) {
                            (0, t.commit)("setAvailability", e)
                        },
                        updated: function(t) {
                            (0, t.commit)("setAvailability", !0)
                        }
                    }
                },
                _t = n(4),
                kt = n.n(_t),
                St = n(8),
                Et = n.n(St);

            function xt() {
                return Ct.apply(this, arguments)
            }

            function Ct() {
                return (Ct = Et()(kt.a.mark((function t() {
                    var e, n, r, i, o;
                    return kt.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = {}, t.prev = 1, t.next = 4, Q.a.post("up/credentials/META");
                            case 4:
                                r = t.sent, t.next = 9;
                                break;
                            case 7:
                                t.prev = 7, t.t0 = t.
                                catch(1);
                            case 9:
                                return -1 === (i = (null === (e = r) || void 0 === e || null === (n = e.payload) || void 0 === n ? void 0 : n.features) || []).indexOf("biometryLockout") && (-1 !== i.indexOf("biometrics") && (r.isBiometricEnabled = !0), r.biometryTypes = (null === (o = r) || void 0 === o ? void 0 : o.biometryTypes) || [], i.forEach((function(t) {
                                    0 === t.indexOf("biometryType") && r.biometryTypes.push(t)
                                })), r.biometryTypes.length && (r.isBiometricAvailable = !0)), t.abrupt("return", r);
                            case 12:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 7]
                    ])
                })))).apply(this, arguments)
            }

            function Ot(t, e) {
                if (Object(W.a)()) {
                    var n = At();
                    n[t] = e;
                    try {
                        window.localStorage.setItem("authBiometricStorage", JSON.stringify(n))
                    } catch (t) {}
                }
            }

            function It(t) {
                return Object(W.a)() && At()[t] || {}
            }

            function At() {
                var t;
                try {
                    t = window.localStorage.getItem("authBiometricStorage")
                } catch (t) {}
                return t ? JSON.parse(t) : {}
            }

            function Tt() {
                return Pt.apply(this, arguments)
            }

            function Pt() {
                return (Pt = Et()(kt.a.mark((function t() {
                    var e;
                    return kt.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(e = Mt.getters["auth/user/nid"])) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", e);
                            case 3:
                                return t.next = 5, Mt.dispatch("auth/user/initInfo");
                            case 5:
                                return t.abrupt("return", Mt.getters["auth/user/nid"]);
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var Rt = {
                form: R,
                alerts: V,
                user: K,
                location: H,
                modal: Z,
                challenge: ut,
                captcha: ct,
                securityQuestion: yt,
                password: wt,
                biometric: {
                    namespaced: !0,
                    state: {
                        isEnabled: !1,
                        isAvailable: !1,
                        mainSupportedType: null,
                        userName: null,
                        enrolmentStatus: {},
                        data: {}
                    },
                    mutations: (gt = {}, f()(gt, "setEnabled", (function(t, e) {
                        t.isEnabled = e
                    })), f()(gt, "setAvailable", (function(t, e) {
                        t.isAvailable = e
                    })), f()(gt, "setEnabledForUsername", (function(t, e) {
                        Ot("authBiometricFido2UserName", e), t.userName = e.name
                    })), f()(gt, "setDeviceData", (function(t, e) {
                        Object.entries(e).forEach((function(e) {
                            var n = s()(e, 2),
                                r = n[0],
                                i = n[1];
                            u.a.set(t.data, r, i)
                        }))
                    })), f()(gt, "assignDeviceDataForUser", (function(t, e) {
                        u.a.set(t.data, e.userNid, e.data), Ot("authBiometricFido2Map", t.data)
                    })), f()(gt, "clearDeviceDataForUser", (function(t, e) {
                        u.a.delete(t.data, e), Ot("authBiometricFido2Map", t.data)
                    })), f()(gt, "setEnrolmentStatusData", (function(t, e) {
                        Object.entries(e).forEach((function(e) {
                            var n = s()(e, 2),
                                r = n[0],
                                i = n[1];
                            u.a.set(t.enrolmentStatus, r, i)
                        }))
                    })), f()(gt, "setEnrolmentStatus", (function(t, e) {
                        e.status ? u.a.set(t.enrolmentStatus, e.userNid, !0) : u.a.delete(t.enrolmentStatus, e.userNid), Ot("authBiometricEnrolmentStatus", t.enrolmentStatus)
                    })), f()(gt, "setMainType", (function(t, e) {
                        t.mainSupportedType = 1 === e.length ? e[0] : null
                    })), gt),
                    getters: {
                        isEnabledOnDevice: function(t) {
                            return t.isEnabled
                        },
                        isAvailable: function(t) {
                            return t.isAvailable
                        },
                        isEnabledInApp: function(t, e) {
                            return e.uidOnDevice && e.isEnabledOnDevice
                        },
                        uidOnDevice: function(t, e) {
                            return e.deviceDataInApp.uid
                        },
                        rawIdOnDevice: function(t, e) {
                            return e.deviceDataInApp.rawId
                        },
                        enrolmentWasShown: function(t, e, n, r) {
                            return t.enrolmentStatus[r["auth/user/nid"]]
                        },
                        deviceDataInApp: function(t, e, n, r) {
                            return t.data[r["auth/user/nid"]] || {}
                        },
                        enabledForUserName: function(t) {
                            return t.userName
                        },
                        mainSupportedType: function(t) {
                            return t.mainSupportedType
                        }
                    },
                    actions: {
                        init: function(t, e) {
                            return Et()(kt.a.mark((function n() {
                                var r, i;
                                return kt.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return (r = t.commit)("setEnabledForUsername", It("authBiometricFido2UserName")), r("setDeviceData", It("authBiometricFido2Map")), r("setEnrolmentStatusData", It("authBiometricEnrolmentStatus")), n.next = 6, xt();
                                        case 6:
                                            return i = n.sent, r("setEnabled", i.isBiometricEnabled), r("setAvailable", i.isBiometricAvailable), r("setMainType", i.biometryTypes), n.abrupt("return", e ? null : Tt());
                                        case 11:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        enableForCurrentUser: function(t, e) {
                            return Et()(kt.a.mark((function n() {
                                var r, i;
                                return kt.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return r = t.commit, n.next = 3, Tt();
                                        case 3:
                                            i = n.sent, r("assignDeviceDataForUser", {
                                                userNid: i,
                                                data: {
                                                    uid: e.fido2Uid,
                                                    rawId: e.rawId
                                                }
                                            }), r("setEnabledForUsername", {
                                                name: Mt.getters["auth/user/loginName"],
                                                nid: i
                                            });
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        setEnrolmentShown: function(t) {
                            return Et()(kt.a.mark((function e() {
                                var n;
                                return kt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.commit, e.t0 = n, e.t1 = "setEnrolmentStatus", e.next = 5, Tt();
                                        case 5:
                                            e.t2 = e.sent, e.t3 = {
                                                userNid: e.t2,
                                                status: !0
                                            }, (0, e.t0)(e.t1, e.t3);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        setLoginUserName: function(t, e) {
                            (0, t.commit)("setEnabledForUsername", e)
                        },
                        changed: function(t) {
                            return Et()(kt.a.mark((function e() {
                                var n;
                                return kt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.commit, (0, t.dispatch)("clearUidForThisDevice"), e.t0 = n, e.t1 = "setEnrolmentStatus", e.next = 6, Tt();
                                        case 6:
                                            e.t2 = e.sent, e.t3 = {
                                                userNid: e.t2,
                                                status: !1
                                            }, (0, e.t0)(e.t1, e.t3);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        clearUidForThisDevice: function(t) {
                            return Et()(kt.a.mark((function e() {
                                var n;
                                return kt.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.commit, e.t0 = n, e.t1 = "clearDeviceDataForUser", e.next = 5, Tt();
                                        case 5:
                                            e.t2 = e.sent, (0, e.t0)(e.t1, e.t2), n("setEnabledForUsername", {});
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                event: {
                    namespaced: !0,
                    actions: {
                        click: function(t, e) {
                            $()(t)
                        },
                        custom: function() {}
                    }
                },
                response: {
                    namespaced: !0,
                    actions: {
                        code: function(t, e) {
                            $()(t)
                        }
                    }
                }
            };
            u.a.use(l.a);
            var Nt, jt, Dt = [];
            "undefined" != typeof window && Dt.push((jt = {}, window.addEventListener("storage", (function(t) {
                if ("auth-store-update" === t.key && !Nt) {
                    var e = JSON.parse(t.newValue);
                    e && (Nt = !0, Bt.commit(e.type, e.payload), Nt = !1)
                }
            })), function(t) {
                try {
                    jt = JSON.parse(localStorage.getItem("auth-store-data") || "") || {}
                } catch (t) {}(function() {
                    if (window.Applet) {
                        var t = Applet.getUser();
                        return Promise.resolve(t ? t.getUid() : "")
                    }
                    return new Promise((function(t, n) {
                        var r = 10;
                        e = setInterval((function() {
                            window.$nuxt && window.$nuxt.$store && t(window.$nuxt.$store), r-- >= 0 && n("$nuxt is not available")
                        }), 100)
                    })).
                    finally((function() {
                        clearInterval(e)
                    })).then((function(t) {
                        return t.dispatch("context/ready")
                    })).then((function() {
                        return $nuxt.$store.state.user ? $nuxt.$store.state.user.id : ""
                    })).
                    catch((function() {
                        return ""
                    }));
                    var e
                })().then((function(e) {
                    var n = (jt.meta || {}).userUid,
                        r = {
                            meta: {
                                userUid: e
                            }
                        };
                    n !== e && n ? jt = r : (Nt = !0, Object.entries(jt).forEach((function(e) {
                        var n = s()(e, 2),
                            r = n[0],
                            i = n[1];
                        "meta" !== r && t.commit(r, i)
                    })), Object.assign(jt, r), Nt = !1)
                })), t.subscribe((function(e) {
                    var n = e.type,
                        r = n.lastIndexOf("/"),
                        i = n.substr(r + 1),
                        o = t.getters[n.substr(0, r) + "/syncAllowed"];
                    if (!Nt && o && o(i)) {
                        jt[n] = e.payload;
                        try {
                            Nt = !0, localStorage.setItem("auth-store-update", JSON.stringify(e)), localStorage.setItem("auth-store-data", JSON.stringify(jt))
                        } finally {
                            Nt = !1
                        }
                    }
                }))
            }));
            var Bt = new l.a.Store({
                modules: {
                    auth: {
                        namespaced: !0,
                        modules: Rt
                    }
                },
                plugins: Dt
            });
            if (Object.values(Rt).forEach((function(t) {
                    return function t(e) {
                        (e.plugins || []).forEach((function(t) {
                            return t(Bt)
                        })), Object.values(e.modules || {}).forEach((function(e) {
                            t(e)
                        }))
                    }(t)
                })), "undefined" != typeof window && window.Applet) {
                var Lt = Applet.getVar("storeSync");
                Object.entries(Lt || {}).forEach((function(t) {
                    var e = s()(t, 2),
                        n = e[0],
                        r = e[1];
                    Bt.dispatch(n, r)
                }))
            }
            var Mt = e.a = Bt
        },
        function(t, e) {
            t.exports = function(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(2),
                i = n.n(r),
                o = n(18),
                s = n.n(o),
                a = n(19),
                u = n.n(a),
                c = n(839),
                l = n.n(c),
                d = n(655),
                f = n.n(d),
                h = n(57),
                p = n.n(h),
                m = n(48),
                v = n.n(m),
                g = function() {
                    function t(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        s()(this, t), this.dataCallbacks = [], this.data = {
                            event: e,
                            label: n,
                            data: Object.assign({}, r)
                        }
                    }
                    return u()(t, [{
                        key: "setExtraData",
                        value: function(t) {
                            Object.assign(this.data.data, t)
                        }
                    }, {
                        key: "addDataCallback",
                        value: function(t) {
                            this.dataCallbacks.push(t)
                        }
                    }, {
                        key: "getEventData",
                        value: function(t) {
                            var e = Object.assign({}, this.data),
                                n = [];
                            return this.dataCallbacks.forEach((function(r) {
                                n.push(Promise.resolve(r(t)).then((function(t) {
                                    Object.assign(e.data, t)
                                })))
                            })), Promise.all(n).then((function() {
                                return e
                            }))
                        }
                    }]), t
                }(),
                b = n(691),
                y = n(32),
                w = n(1);

            function _() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }
            var k = function(t) {
                    v()(r, t);
                    var e, n = (e = r, function() {
                        var t, n = p()(e);
                        if (_()) {
                            var r = p()(this).constructor;
                            t = Reflect.construct(n, arguments, r)
                        } else t = n.apply(this, arguments);
                        return f()(this, t)
                    });

                    function r(t) {
                        var e;
                        return s()(this, r), (e = n.call(this, (function(t, n) {
                            t.addDataCallback((function() {
                                var t = {},
                                    e = w.a.getters["auth/user/uid"];
                                return e && (t.user_uid = e), t
                            })), e.trackEvent(t, n)
                        }))).formId = t, e.commonData = {}, e
                    }
                    return u()(r, [{
                        key: "location",
                        value: function(t) {
                            return this.commonData.location = t, this
                        }
                    }, {
                        key: "subLocation",
                        value: function(t) {
                            return this.commonData.sublocation = t, this
                        }
                    }, {
                        key: "click",
                        value: function(t) {
                            return this.setLastObject(new g("click", t, this.commonData))
                        }
                    }, {
                        key: "impression",
                        value: function(t) {
                            return this.setLastObject(new g("impression", t, this.commonData))
                        }
                    }, {
                        key: "onValidationError",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "event_message",
                                n = l()(p()(r.prototype), "onValidationError", this).call(this, t);
                            return e && n.data((function(t) {
                                return t.alert ? i()({}, e, t.alert.message) : {}
                            })), this
                        }
                    }, {
                        key: "data",
                        value: function(t) {
                            return this.getLastObject().then((function(e) {
                                return e.addDataCallback(t)
                            })), this
                        }
                    }, {
                        key: "trackEvent",
                        value: function(t, e) {
                            t.getEventData(e).then((function(t) {
                                t.trackers = ["snowplow"], y.a.getTracker().track(t)
                            }))
                        }
                    }, {
                        key: "convertFormId",
                        value: function(t) {
                            return t || this.formId
                        }
                    }]), r
                }(b.a),
                S = n(840);
            e.a = {
                mixins: [S.a],
                created: function() {
                    this.eventsObject = new k(this.id), this.logEvents && this.logEvents(this.eventsObject)
                },
                destroyed: function() {
                    var t = this;
                    setTimeout((function() {
                        t.eventsObject.destroy()
                    }), 100)
                },
                methods: {
                    $eventLog: function(t) {
                        this.$storeEvent(t, this.id)
                    }
                }
            }
        },
        function(t, e, n) {
            t.exports = n(967)
        }, ,
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("button", {
                    directives: [{
                        name: "click-event",
                        rawName: "v-click-event"
                    }],
                    ref: "button",
                    staticClass: "up-btn mr-0",
                    class: t.cKind,
                    attrs: {
                        id: t.submitDomId,
                        "target-form": t.targetFormName,
                        "button-role": t.type,
                        disabled: t.cDisabled,
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.click()
                        }
                    }
                }, [t._t("default", [t._v(t._s(t.label))])], 2)
            };
            r._withStripped = !0;
            var i = n(1),
                o = n(731),
                s = n(663),
                a = n(38),
                u = (n(31), n(13), {
                    mixins: [o.a, s.a],
                    props: {
                        id: {
                            type: String,
                            default: "control"
                        },
                        type: {
                            type: String,
                            default: "submit"
                        },
                        kind: {
                            type: String,
                            required: !1
                        },
                        forForm: {
                            type: String,
                            required: !1
                        },
                        disabled: {
                            type: Boolean,
                            required: !1
                        },
                        action: Function,
                        event: String
                    },
                    directives: {
                        ClickEvent: a.a
                    },
                    computed: {
                        cDisabled: function() {
                            return !!i.a.getters["auth/form/submitDisabled"](this.getTargetFormId()) || void 0 !== this.disabled && this.disabled
                        },
                        cKind: function() {
                            if (this.kind) return this.kind;
                            switch (this.type) {
                                case "continue":
                                case "save":
                                case "submit":
                                    return "up-btn-primary";
                                case "logout":
                                case "cancel":
                                    return "up-btn-link"
                            }
                            return ""
                        },
                        label: function() {
                            switch (this.type) {
                                case "save":
                                    return "Save";
                                case "cancel":
                                    return "Cancel";
                                case "continue":
                                    return "Continue";
                                case "logout":
                                    return "Log Out"
                            }
                            return ""
                        },
                        submitDomId: function() {
                            return this.type !== this.id ? this.domId + "_" + this.type : this.domId
                        },
                        targetFormName: function() {
                            var t = this.getTargetFormId();
                            return (i.a.getters["auth/form/formObject"](t) || {}).name
                        }
                    },
                    methods: {
                        click: function() {
                            var t = this.getTargetFormId();
                            i.a.dispatch("auth/form/setLastUsedControl", {
                                controlId: this.id,
                                formId: t
                            }), this.action ? this.action() : i.a.dispatch(this.getEvent(), t)
                        },
                        getEvent: function() {
                            if (this.event) return this.event;
                            switch (this.type) {
                                case "continue":
                                case "submit":
                                case "save":
                                    return "auth/form/submit";
                                case "cancel":
                                    return "auth/form/cancel";
                                case "logout":
                                    return "auth/user/logout"
                            }
                            throw new Error("No event is defined for type: " + this.type)
                        },
                        focus: function() {
                            this.$refs.button.focus()
                        }
                    }
                }),
                c = (n(970), n(0)),
                l = Object(c.a)(u, r, [], !1, null, "0c7bde74", null);
            l.options.__file = "node_modules/@upwork/auth-common/components/form-control.vue";
            e.a = l.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("form", {
                    staticClass: "form auth-growable-flex",
                    attrs: {
                        id: t.domId,
                        name: t.domName,
                        novalidate: "novalidate"
                    },
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.submit(e)
                        }
                    }
                }, [n("button", {
                    staticClass: "auth-submit-button",
                    attrs: {
                        disabled: t.disabled,
                        type: "submit",
                        tabindex: "-1",
                        "aria-hidden": "true"
                    }
                }), t._v(" "), t._t("default")], 2)
            };
            r._withStripped = !0;
            var i = n(1),
                o = (n(63), {
                    props: {
                        id: {
                            type: String,
                            required: !0
                        },
                        name: String,
                        submitDisabled: Boolean
                    },
                    computed: {
                        domId: function() {
                            return this.domName
                        },
                        domName: function() {
                            return this.name || this.id
                        },
                        formId: function() {
                            return this.id
                        },
                        disabled: function() {
                            return i.a.getters["auth/form/submitDisabled"](this.id)
                        }
                    },
                    mounted: function() {
                        i.a.dispatch("auth/form/setSubmitDisabled", {
                            formId: this.id,
                            disabled: this.submitDisabled
                        })
                    },
                    methods: {
                        submit: function() {
                            i.a.dispatch("auth/form/submit", this.id)
                        }
                    },
                    watch: {
                        submitDisabled: function(t) {
                            i.a.dispatch("auth/form/setSubmitDisabled", {
                                formId: this.id,
                                disabled: t
                            })
                        }
                    }
                }),
                s = (n(977), n(0)),
                a = Object(s.a)(o, r, [], !1, null, "44072c38", null);
            a.options.__file = "node_modules/@upwork/auth-common/components/form.vue";
            e.a = a.exports
        },
        function(t, e) {
            function n(t, e, n, r, i, o, s) {
                try {
                    var a = t[o](s),
                        u = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(r, i)
            }
            t.exports = function(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(i, o) {
                        var s = t.apply(e, r);

                        function a(t) {
                            n(s, i, o, a, u, "next", t)
                        }

                        function u(t) {
                            n(s, i, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r, i, o, s, a = n(1),
                u = n(2),
                c = n.n(u),
                l = n(5),
                d = n.n(l),
                f = n(26),
                h = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    a.a.dispatch("auth/modal/open", {
                        id: t,
                        component: e,
                        data: n
                    })
                },
                p = function(t) {
                    return a.a.dispatch("auth/modal/close", t)
                },
                m = n(692),
                v = {
                    namespaced: !0,
                    state: {
                        behavior: m.a.direct,
                        cancelLabel: void 0,
                        submitLabel: void 0
                    },
                    mutations: (r = {}, c()(r, "setBehavior", (function(t, e) {
                        t.behavior = e
                    })), c()(r, "setCancelLabel", (function(t, e) {
                        t.cancelLabel = e
                    })), c()(r, "setSubmitLabel", (function(t, e) {
                        t.submitLabel = e
                    })), r),
                    getters: {
                        behavior: function(t) {
                            return t.behavior
                        },
                        cancelLabel: function(t) {
                            return t.cancelLabel
                        },
                        submitLabel: function(t) {
                            return t.submitLabel
                        }
                    },
                    actions: {
                        setBehavior: function(t, e) {
                            (0, t.commit)("setBehavior", e)
                        },
                        setCancelLabel: function(t, e) {
                            (0, t.commit)("setCancelLabel", e)
                        },
                        setSubmitLabel: function(t, e) {
                            (0, t.commit)("setSubmitLabel", e)
                        },
                        enableCustomBehavior: function(t) {
                            var e = t.commit;
                            e("setBehavior", m.a.custom), e("setSubmitLabel", "Try another method"), e("setCancelLabel", "Cancel")
                        },
                        resetBehavior: function(t) {
                            var e = t.commit;
                            e("setBehavior", m.a.direct), e("setSubmitLabel", void 0), e("setCancelLabel", void 0)
                        },
                        cancel: function(t, e) {
                            t.commit
                        }
                    }
                },
                g = 1,
                b = 2,
                y = 3,
                w = "setChallengeState",
                _ = "setCloseBehavior",
                k = {},
                S = {
                    namespaced: !0,
                    modules: {
                        deviceAuthorization: {
                            namespaced: !0,
                            modules: {
                                controls: v
                            }
                        }
                    },
                    state: {
                        challenges: {},
                        closeBehaviors: {}
                    },
                    mutations: (i = {}, c()(i, w, (function(t, e) {
                        d.a.set(t.challenges, e.mode, e.state)
                    })), c()(i, _, (function(t, e) {
                        d.a.set(t.closeBehaviors, e.mode, e.action)
                    })), i),
                    getters: {
                        isVerified: function(t) {
                            return function(e) {
                                return b === t.challenges[e]
                            }
                        },
                        wasTriggered: function(t) {
                            return function(e) {
                                return g === t.challenges[e]
                            }
                        },
                        isActive: function(t) {
                            return function() {
                                return -1 !== Object.values(t.challenges).indexOf(g)
                            }
                        },
                        getCloseBehavior: function(t) {
                            return function(e) {
                                return t.closeBehaviors[e]
                            }
                        },
                        syncAllowed: function() {
                            return function(t) {
                                return -1 !== [w, _].indexOf(t)
                            }
                        }
                    },
                    actions: {
                        setCloseBehavior: function(t, e) {
                            (0, t.commit)(_, {
                                mode: e.mode,
                                action: e.action
                            })
                        },
                        verified: function(t, e) {
                            (0, t.commit)(w, {
                                mode: e,
                                state: b
                            })
                        },
                        triggered: function(t, e) {
                            var n = t.commit,
                                r = (t.dispatch, f.a.Modals[e.modalName]);
                            if (r) {
                                var i = e.mode;
                                return k[i] || (n(w, {
                                    mode: i,
                                    state: g
                                }), k[i] = [], setTimeout((function() {
                                    h(i, r)
                                }))), new Promise((function(t, n) {
                                    k[i].push({
                                        requestCallback: e.requestCallback,
                                        resolve: t,
                                        reject: n
                                    })
                                }))
                            }
                        },
                        canceled: function(t, e) {
                            (0, t.commit)(w, {
                                mode: e,
                                state: y
                            })
                        }
                    },
                    plugins: [
                        function(t) {
                            t.subscribe((function(e) {
                                if ("auth/sensitiveZone/" + w === e.type && b === e.payload.state) {
                                    var n = e.payload.mode;
                                    p(n).then((function() {
                                        (k[n] || []).forEach((function(t) {
                                            t.resolve(t.requestCallback())
                                        })), delete k[n]
                                    }))
                                }
                                if ("auth/modal/close" === e.type) {
                                    var r = e.payload;
                                    t.getters["auth/sensitiveZone/wasTriggered"](r) && ("verified" === t.getters["auth/sensitiveZone/getCloseBehavior"](r) ? t.dispatch("auth/sensitiveZone/verified", r) : ((k[r] || []).forEach((function(t) {
                                        t.reject({
                                            cancelMessage: f.a.Modals[r].cancelMessage
                                        })
                                    })), t.dispatch("auth/sensitiveZone/canceled", r), delete k[r]))
                                }
                            }))
                        }
                    ]
                },
                E = n(4),
                x = n.n(E),
                C = n(8),
                O = n.n(C),
                I = n(20),
                A = n(23),
                T = n(641),
                P = n(765),
                R = n(640),
                N = {
                    namespaced: !0,
                    state: {
                        initData: {},
                        credentials: void 0,
                        activeUid: void 0,
                        authenticatorAttachment: void 0,
                        inProgress: !1
                    },
                    mutations: (o = {}, c()(o, "setInitData", (function(t, e) {
                        t.initData = e
                    })), c()(o, "setCredentials", (function(t, e) {
                        t.credentials = e
                    })), c()(o, "setActiveUid", (function(t, e) {
                        t.activeUid = e
                    })), c()(o, "SET_AUTHENTICATOR_ATTACHMENT", (function(t, e) {
                        t.authenticatorAttachment = e
                    })), c()(o, "setInProgress", (function(t, e) {
                        t.inProgress = e
                    })), o),
                    getters: {
                        initData: function(t) {
                            return t.initData
                        },
                        credentials: function(t) {
                            return t.credentials
                        },
                        activeUid: function(t) {
                            return t.activeUid
                        },
                        authenticatorAttachment: function(t) {
                            return t.authenticatorAttachment
                        },
                        inProgress: function(t) {
                            return t.inProgress
                        }
                    },
                    actions: {
                        init: function(t, e) {
                            var n = t.commit;
                            return new Promise((function(t, r) {
                                Object(I.a)("/ab/account-security/fido2/init", [Object(A.a)(e.context)]).post({
                                    initFido2: {
                                        resendRequest: e.resendRequest || !1,
                                        primary: e.primary || !1
                                    }
                                }).json((function(e) {
                                    n("setInitData", e), t(e)
                                })).
                                catch((function(t) {
                                    return r(t)
                                }))
                            }))
                        },
                        createCredentials: function(t) {
                            return O()(x.a.mark((function e() {
                                var n, r, i, o, s, a, u, c;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = t.commit, r = t.getters, i = r.initData, o = P.a.isMobileApp(), s = T.a.parse(i.challenge), a = T.a.parse(i.user.id), u = {
                                                    publicKey: {
                                                        challenge: o ? Array.from(s) : s,
                                                        excludeCredentials: [],
                                                        rp: {
                                                            id: window.location.host,
                                                            name: "some"
                                                        },
                                                        user: {
                                                            id: o ? Array.from(a) : a,
                                                            name: "webauthn@upwork.com",
                                                            displayName: i.user.displayName
                                                        },
                                                        pubKeyCredParams: [{
                                                            alg: -7,
                                                            type: "public-key"
                                                        }],
                                                        authenticatorSelection: {
                                                            authenticatorAttachment: r.authenticatorAttachment,
                                                            requireResidentKey: i.authenticatorSelection.requireResidentKey,
                                                            userVerification: i.authenticatorSelection.userVerification
                                                        },
                                                        attestation: i.attestation
                                                    }
                                                }, !o) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 9, R.a.post("up/credentials/v1/CREATE", {
                                                options: u,
                                                requireBiometrics: !0,
                                                biometricsBehavior: "verifyBiometricsStateOnAssertion"
                                            }).then((function(t) {
                                                var e;
                                                return null == t || null === (e = t.payload) || void 0 === e ? void 0 : e.response
                                            }));
                                        case 9:
                                            e.t0 = e.sent, e.next = 15;
                                            break;
                                        case 12:
                                            return e.next = 14, navigator.credentials.create(u);
                                        case 14:
                                            e.t0 = e.sent;
                                        case 15:
                                            return (c = e.t0).stringifiedRawId = T.a.stringify(new Uint8Array(c.rawId)), n("setCredentials", c), e.abrupt("return", c);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        finalize: function(t, e) {
                            var n = t.commit,
                                r = t.getters.credentials;
                            return n("setInProgress", !0), new Promise((function(t, i) {
                                Object(I.a)("/ab/account-security/fido2/confirm", [Object(A.a)(e.context)]).post({
                                    confirmFido2: {
                                        fidoId: r.id,
                                        rawId: r.stringifiedRawId,
                                        fidoType: r.type,
                                        name: e.name,
                                        clientDataJson: T.a.stringify(P.a.isIosApp() ? Uint8Array.from(r.response.clientDataJSON, (function(t) {
                                            return t.charCodeAt(0)
                                        })) : new Uint8Array(r.response.clientDataJSON)),
                                        attestationObject: T.a.stringify(new Uint8Array(r.response.attestationObject)),
                                        origin: window.location.origin,
                                        rpId: window.location.host
                                    }
                                }).json((function(e) {
                                    return t(e)
                                })).
                                catch((function(t) {
                                    return i(t)
                                })).
                                finally((function() {
                                    return n("setInProgress", !1)
                                }))
                            }))
                        },
                        setActiveUid: function(t, e) {
                            (0, t.commit)("setActiveUid", e)
                        },
                        setAuthenticatorAttachment: function(t, e) {
                            (0, t.commit)("SET_AUTHENTICATOR_ATTACHMENT", e)
                        }
                    }
                },
                j = n(24),
                D = n.n(j),
                B = n(28),
                L = {
                    namespaced: !0,
                    state: {
                        initData: {},
                        formId: null
                    },
                    mutations: (s = {}, c()(s, "setInitData", (function(t, e) {
                        t.initData = e
                    })), c()(s, "setFormId", (function(t, e) {
                        t.formId = e
                    })), c()(s, "canceled", (function(t, e) {})), s),
                    getters: {
                        initData: function(t) {
                            return t.initData
                        },
                        formId: function(t) {
                            return t.formId
                        }
                    },
                    actions: {
                        init: function(t, e) {
                            var n, r = t.commit,
                                i = null !== (n = e.url) && void 0 !== n ? n : "/ab/account-security/fido2/init-verify",
                                o = {};
                            return r("setFormId", e.formId), Object.entries({
                                authToken: e.authToken,
                                primary: e.primary
                            }).forEach((function(t) {
                                var e = D()(t, 2),
                                    n = e[0],
                                    r = e[1];
                                r && (o[n] = r)
                            })), new Promise((function(t, n) {
                                a.a.dispatch("auth/form/setSubmitDisabled", {
                                    formId: e.formId,
                                    disabled: !0
                                }), Object(I.a)(i, [Object(A.a)(e.formId)]).post({
                                    initFido2: o
                                }).json((function(e) {
                                    r("setInitData", e), t(e)
                                })).
                                catch((function(t) {
                                    return n(t)
                                })).
                                finally((function() {
                                    a.a.dispatch("auth/form/setSubmitDisabled", {
                                        formId: e.formId,
                                        disabled: !1
                                    })
                                }))
                            }))
                        },
                        createCredentials: function(t) {
                            return O()(x.a.mark((function e() {
                                var n, r, i, o, s, u, c;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.commit, r = t.getters, i = [], o = Object(B.a)(), e.next = 5, r.initData;
                                        case 5:
                                            if ((s = e.sent).allowCredentials.forEach((function(t) {
                                                    var e = T.a.parse(t.id);
                                                    o && a.a.getters["auth/biometric/rawIdOnDevice"] !== T.a.stringify(new Uint8Array(e)) || i.push({
                                                        id: o ? Array.from(e) : e,
                                                        type: t.type,
                                                        transports: o ? ["internal"] : t.transports || []
                                                    })
                                                })), u = T.a.parse(s.challenge), c = {
                                                    publicKey: {
                                                        rpId: window.location.host,
                                                        userVerification: s.userVerification,
                                                        challenge: o ? Array.from(u) : u,
                                                        allowCredentials: i
                                                    }
                                                }, !o) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.abrupt("return", R.a.post("up/credentials/v1/GET", {
                                                id: "fido2",
                                                options: c,
                                                requireBiometrics: !0
                                            }).then((function(t) {
                                                return t.payload.response
                                            })).catch((function(t) {
                                                var e;
                                                switch (null == t || null === (e = t.payload) || void 0 === e ? void 0 : e.code) {
                                                    case -1002:
                                                        a.a.dispatch("auth/biometric/changed");
                                                        break;
                                                    case 4:
                                                        n("canceled", r.formId)
                                                }
                                                return Promise.reject(t.payload)
                                            })));
                                        case 11:
                                            return c.publicKey.timeout = s.timeout, e.abrupt("return", navigator.credentials.get(c));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                };
            a.a.registerModule(["auth", "webauthn"], {
                namespaced: !0,
                modules: {
                    add: N,
                    verify: L
                }
            }), a.a.registerModule(["auth", "sensitiveZone"], S), S.plugins.forEach((function(t) {
                return t(a.a)
            }));
            e.a = a.a
        },
        function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(37),
                o = n(7);
            e.a = {
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    action: {
                        type: String,
                        required: !0
                    },
                    name: {
                        type: String,
                        required: !0
                    },
                    successSubmitRedirectUrl: String,
                    subForm: Boolean,
                    doNotDisableSubmit: Boolean,
                    customResponseInterceptors: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    requestDataConverter: Function
                },
                created: function() {
                    var t = this;
                    this.onSuccessSubmitCallbacks = [], this.onFailedSubmitCallbacks = [], this.onCancelCallbacks = [], r.a.dispatch("auth/form/register", {
                        id: this.id,
                        object: this
                    }), this.onSuccessSubmit((function() {
                        t.successSubmitRedirectUrl && i.a.setContext(t).navigate(t.successSubmitRedirectUrl)
                    }))
                },
                computed: {
                    formContainer: function() {
                        return this.subForm ? "div" : o.a
                    }
                },
                methods: {
                    onBeforeSubmit: function() {
                        return Promise.resolve()
                    },
                    onValidateResponse: function() {
                        return !0
                    },
                    onSuccessSubmit: function(t) {
                        this.onSuccessSubmitCallbacks.push(t)
                    },
                    onFailedSubmit: function(t) {
                        this.onFailedSubmitCallbacks.push(t)
                    },
                    onCancel: function(t) {
                        this.onCancelCallbacks.push(t)
                    },
                    extraSubmitData: function() {
                        return {}
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.controls && t.controls.length ? n("div", {
                    staticClass: "up-btn-row"
                }, t._l(t.controls, (function(e) {
                    return n("form-control", {
                        key: e.id,
                        attrs: {
                            type: e.type,
                            kind: e.kind,
                            event: e.event
                        }
                    }, [n("span", [t._v(t._s(e.label))])])
                })), 1) : n("div", {
                    staticClass: "up-btn-row"
                }, [t._t("default")], 2)])
            };
            r._withStripped = !0;
            var i = n(1),
                o = n(6),
                s = {
                    props: {
                        forForm: String
                    },
                    computed: {
                        controls: function() {
                            return i.a.getters["auth/form/controls"](this.forForm)
                        },
                        hasSlot: function() {
                            return !!this.$slots.
                            default
                        }
                    },
                    components: {
                        FormControl: o.a
                    }
                },
                a = (n(971), n(0)),
                u = Object(a.a)(s, r, [], !1, null, "f2a8dda2", null);
            u.options.__file = "node_modules/@upwork/auth-common/components/form-controls.vue";
            e.a = u.exports
        },
        function(t, e, n) {
            "use strict";
            var r = n(10);
            e.a = {
                mixins: [r.a],
                props: {
                    action: {
                        type: String,
                        default: ""
                    }
                },
                methods: {
                    onCustomSubmit: function() {
                        return !0
                    }
                }
            }
        },
        function(t, e, n) {},
        function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return r
            })), n.d(e, "b", (function() {
                return i
            })), n.d(e, "a", (function() {
                return o
            }));
            var r = {
                    TOTP: "totp",
                    PHONE: "phone",
                    EMAIL: "email",
                    PUSH: "push",
                    FIDO2: "fido2",
                    SQ: "securityQuestion"
                },
                i = {
                    FIDO2_PRIMARY: "fido2Primary"
                },
                o = Object.assign({}, r, i)
        }, , ,
        function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return r
            })), n.d(e, "a", (function() {
                return i
            }));
            var r = function(t) {
                    return /(iPad|iPhone|iPod)/gi.test(t)
                },
                i = function(t) {
                    return /(Android)/gi.test(t)
                }
        },
        function(t, e) {
            t.exports = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
        },
        function(t, e) {
            function n(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            t.exports = function(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(875);
            e.a = r.a
        }, ,
        function(t, e, n) {
            "use strict";
            var r = n(43);
            e.a = {
                data: function() {
                    return {
                        view: r.a.dummy()
                    }
                },
                computed: {
                    viewId: function() {
                        return r.a.getId(this.view)
                    }
                },
                created: function() {
                    var t = this;
                    this.vs = new r.a((function(e) {
                        t.view = e, t.$emit("switched", e), t.onViewSwitched && t.onViewSwitched(e)
                    })), this.viewState(this.vs)
                },
                methods: {
                    viewState: function(t) {}
                },
                destroyed: function() {
                    this.vs.destroy()
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(29),
                i = n(767);
            e.a = function(t) {
                return function(e, n) {
                    return Promise.resolve(i.a.externalCaptchaRequested(e).then((function(i) {
                        return i || function(t, e, n) {
                            if (!n || e.locked) return;
                            var i = n.alerts;
                            if (i) return r.a.add(t, i.top || []), !0
                        }(t, n, e.data) || e.ok || r.a.setUndefinedError(t), e
                    })))
                }
            }
        },
        function(t, e, n) {
            var r = n(961),
                i = n(962),
                o = n(893),
                s = n(963);
            t.exports = function(t, e) {
                return r(t) || i(t, e) || o(t, e) || s()
            }
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement;
                return (this._self._c || t)("illustration", {
                    staticClass: "illustration",
                    attrs: {
                        name: this.name
                    }
                })
            };
            r._withStripped = !0;
            var i = n(866),
                o = {
                    props: {
                        name: String
                    },
                    components: {
                        Illustration: i.a
                    }
                },
                s = (n(995), n(0)),
                a = Object(s.a)(o, r, [], !1, null, "43ae9470", null);
            a.options.__file = "node_modules/@upwork/auth-common/components/illustration.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            var r = n(4),
                i = n.n(r),
                o = n(8),
                s = n.n(o),
                a = n(2),
                u = n.n(a),
                c = n(28),
                l = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("modal", {
                        attrs: {
                            id: this.id,
                            form: this.form,
                            "form-attrs": this.$attrs,
                            title: "Add extra layers of security"
                        }
                    }, [e("div", [e("client-only", [e("router-view")], 1)], 1), this._v(" "), e("p", [this._v("\n        You'll be prompted to enter your unique password and security answer when we need to verify your identity.\n        So be sure to choose a password and answer that only you will know.\n    ")])])
                };
            l._withStripped = !0;
            n(53);
            var d = n(40),
                f = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a-form", {
                        attrs: {
                            id: this.id,
                            name: this.name
                        }
                    }, [e("div", {
                        staticClass: "row flex-1"
                    }, [e("div", {
                        staticClass: "col-md-10"
                    }, [e("set-password-inputs", {
                        staticClass: "mb-0"
                    })], 1), this._v(" "), e("div", {
                        staticClass: "col-md-12 pb-10"
                    }, [e("hr", {
                        staticClass: "mt-30"
                    })]), this._v(" "), e("div", {
                        staticClass: "col-md-10"
                    }, [e("security-question-and-answer", {
                        ref: "questionAndAnswer",
                        staticClass: "mb-20"
                    }, [e("span", {
                        attrs: {
                            slot: "newQuestionLabel"
                        },
                        slot: "newQuestionLabel"
                    }, [this._v("\n                    Select Security Question\n                ")])]), this._v(" "), e("security-question-options")], 1)])])
                };
            f._withStripped = !0;
            var h = n(7),
                p = n(10),
                m = n(1),
                v = n(697),
                g = n(702),
                b = n(703),
                y = (n(13), n(34), n(724), n(725), {
                    mixins: [p.a],
                    props: {
                        action: {
                            type: String,
                            default: "/ab/account-security/security-attributes"
                        },
                        name: {
                            default: "setPasswordQuestion"
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.onSuccessSubmit((function() {
                            m.a.dispatch("auth/password/setAvailable", !0), m.a.dispatch("auth/securityQuestion/update", t.$refs.questionAndAnswer.getQuestion())
                        }))
                    },
                    components: {
                        AForm: h.a,
                        SetPasswordInputs: v.a,
                        SecurityQuestionAndAnswer: g.a,
                        SecurityQuestionOptions: b.a
                    }
                }),
                w = (n(984), n(0)),
                _ = Object(w.a)(y, f, [], !1, null, "b140cc86", null);
            _.options.__file = "node_modules/@upwork/sensitive-zone/components/set-password-question/form.vue";
            var k = _.exports,
                S = {
                    layout: "modal",
                    cancelMessage: "You must set up your password and security question before you can continue.",
                    props: {
                        id: String
                    },
                    data: function() {
                        return {
                            form: k
                        }
                    },
                    components: {
                        Modal: d.a
                    }
                },
                E = Object(w.a)(S, l, [], !1, null, null, null);
            E.options.__file = "node_modules/@upwork/sensitive-zone/components/set-password-question/modal.vue";
            var x = E.exports,
                C = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("modal", {
                        attrs: {
                            id: this.id,
                            form: this.form,
                            "form-attrs": this.$attrs,
                            title: "Add extra layers of security"
                        }
                    }, [e("div", [e("client-only", [e("router-view")], 1)], 1), this._v(" "), e("p", [this._v("\n        You'll be prompted to enter your unique password when we need to verify your identity.\n        So be sure to choose a password that only you will know.\n    ")])])
                };
            C._withStripped = !0;
            var O = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "row flex-1"
                }, [e("div", {
                    staticClass: "col-md-10"
                }, [e("a-form", {
                    attrs: {
                        id: this.id,
                        name: this.name
                    }
                }, [e("set-password-inputs")], 1)], 1)])
            };
            O._withStripped = !0;
            var I = {
                    mixins: [p.a],
                    props: {
                        name: {
                            default: "setPassword"
                        },
                        action: {
                            type: String,
                            default: "/ab/account-security/set-password"
                        }
                    },
                    mounted: function() {
                        this.onSuccessSubmit((function() {
                            m.a.dispatch("auth/password/setAvailable", !0)
                        }))
                    },
                    components: {
                        SetPasswordInputs: v.a,
                        AForm: h.a
                    }
                },
                A = Object(w.a)(I, O, [], !1, null, null, null);
            A.options.__file = "node_modules/@upwork/sensitive-zone/components/set-password/form.vue";
            var T = A.exports,
                P = {
                    layout: "modal",
                    cancelMessage: "You must set up your password before you can continue.",
                    props: {
                        id: String
                    },
                    data: function() {
                        return {
                            form: T
                        }
                    },
                    components: {
                        Modal: d.a
                    }
                },
                R = Object(w.a)(P, C, [], !1, null, null, null);
            R.options.__file = "node_modules/@upwork/sensitive-zone/components/set-password/modal.vue";
            var N = R.exports,
                j = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("modal", {
                        attrs: {
                            id: this.id,
                            form: this.form,
                            "form-attrs": this.$attrs,
                            title: "Change Password"
                        }
                    }, [e("div", [e("client-only", [e("router-view")], 1)], 1)])
                };
            j._withStripped = !0;
            var D = n(766),
                B = n(3),
                L = n(841),
                M = {
                    layout: "modal",
                    mixins: [B.a],
                    props: {
                        id: String
                    },
                    data: function() {
                        return {
                            form: D.a
                        }
                    },
                    methods: {
                        logEvents: function(t) {
                            t.subLocation(L.a), t.impression("password_impression").now()
                        }
                    },
                    components: {
                        Modal: d.a
                    }
                },
                $ = Object(w.a)(M, j, [], !1, null, null, null);
            $.options.__file = "node_modules/@upwork/sensitive-zone/components/change-password/modal.vue";
            var U = $.exports,
                F = function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("modal", {
                        attrs: {
                            id: this.id,
                            form: this.form,
                            "form-attrs": this.$attrs,
                            title: "Device authorization",
                            "submit-label": "Continue"
                        }
                    })
                };
            F._withStripped = !0;
            var V = n(6),
                q = n(739),
                z = {
                    layout: "modal",
                    mixins: [B.a],
                    cancelMessage: "You must answer your security question before you can continue.",
                    props: {
                        id: String
                    },
                    data: function() {
                        return {
                            form: q.a
                        }
                    },
                    methods: {
                        logEvents: function(t) {
                            t.subLocation("device_authorization"), t.impression("device_authorizaton_impression").now()
                        }
                    },
                    components: {
                        Modal: d.a,
                        FormControl: V.a
                    }
                },
                K = Object(w.a)(z, F, [], !1, null, null, null);
            K.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth/modal.vue";
            var H = K.exports,
                Y = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("modal", {
                        attrs: {
                            id: t.id,
                            "effective-form-id": t.subViewId,
                            form: t.view,
                            "form-attrs": t.$attrs,
                            title: "Authorize your device",
                            "submit-label": t.submitLabel,
                            "close-on-submit": t.closeOnSubmit,
                            "cancel-button": t.cancelButton,
                            "submit-button": t.submitButton
                        },
                        on: {
                            switched: t.onSwitch
                        }
                    }, [n("controls", {
                        class: t.formControlsClass,
                        attrs: {
                            slot: "controls",
                            "for-form": t.subViewId,
                            "submit-label": t.submitLabel,
                            "challenge-name": t.challengeName
                        },
                        slot: "controls"
                    })], 1)
                };
            Y._withStripped = !0;
            var Q = n(700),
                W = n(22),
                G = n(693),
                J = n(43),
                X = n(699),
                Z = {
                    layout: "modal",
                    mixins: [G.a, W.a],
                    cancelMessage: "You must provide the code we sent to you before you can continue.",
                    props: {
                        id: String
                    },
                    data: function() {
                        return {
                            subView: null
                        }
                    },
                    computed: {
                        subViewId: function() {
                            return J.a.getId(this.subView) || this.id
                        },
                        submitLabel: function() {
                            return (this.subView || {}).submitLabel
                        },
                        challengeName: function() {
                            return this.view.challengeName
                        },
                        closeOnSubmit: function() {
                            return (this.subView || {}).closeOnSubmit || !1
                        },
                        formControlsClass: function() {
                            return "side" === (this.subView || {}).formControlsAlignment ? this.controlsSideClass : "text-center"
                        }
                    },
                    mounted: function() {
                        var t = this;
                        m.a.subscribeAction((function(e) {
                            "auth/sensitiveZone/deviceAuthorization/controls/cancel" === e.type && m.a.dispatch("auth/modal/close", t.id)
                        }))
                    },
                    methods: {
                        viewState: function(t) {
                            Object(X.a)(t).now()
                        },
                        onSwitch: function(t) {
                            this.subView = t
                        },
                        onViewSwitched: function(t) {
                            this.subView = t
                        }
                    },
                    components: {
                        Modal: d.a,
                        Controls: Q.a
                    }
                },
                tt = Object(w.a)(Z, Y, [], !1, null, null, null);
            tt.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/modal.vue";
            var et = tt.exports,
                nt = function() {
                    var t = this,
                        e = t.$createElement;
                    return (t._self._c || e)("modal", {
                        attrs: {
                            id: t.id,
                            form: t.form,
                            "form-attrs": t.formAttrs,
                            title: t.title,
                            "submit-label": t.submitLabel,
                            "cancel-label": t.cancelLabel,
                            "close-on-submit": t.closeOnSubmit,
                            "cancel-button": t.cancelButton,
                            "form-controls-class": t.formControlsClass,
                            "inverse-footer": t.inverseFooter
                        },
                        on: {
                            switched: t.onSwitch
                        }
                    })
                };
            nt._withStripped = !0;
            var rt = n(862),
                it = n(845),
                ot = {
                    layout: "modal",
                    mixins: [B.a, G.a],
                    cancelMessage: "You must enter your password before you can continue.",
                    props: {
                        id: String
                    },
                    data: function() {
                        return {
                            form: rt.a
                        }
                    },
                    computed: {
                        formAttrs: function() {
                            return Object.assign({}, this.$attrs, {
                                allowRevoke: !1
                            })
                        }
                    },
                    methods: {
                        onSwitch: function(t) {
                            this.view = t
                        },
                        logEvents: function(t) {
                            t.subLocation(it.a), t.impression("reenter_password_impression").now()
                        }
                    },
                    components: {
                        Modal: d.a
                    }
                },
                st = Object(w.a)(ot, nt, [], !1, null, null, null);
            st.options.__file = "node_modules/@upwork/sensitive-zone/components/reenter-password/modal.vue";
            var at, ut, ct = st.exports,
                lt = n(865),
                dt = n(9),
                ft = n(20),
                ht = n(14),
                pt = Object.assign({}, {
                    REENTER_PASSWORD: "reenter-password",
                    DEVICE_AUTHORIZATION: "device-auth",
                    DEVICE_AUTHORIZATION_OTP: "device-auth-otp"
                }, {
                    SECURITY_QUESTION: "security-question",
                    SET_PASSWORD: "set-password",
                    SET_PASSWORD_QUESTION: "set-password-question",
                    CHANGE_PASSWORD: "change-password"
                }),
                mt = (at = {}, u()(at, pt.DEVICE_AUTHORIZATION, H), u()(at, pt.REENTER_PASSWORD, ct), u()(at, pt.DEVICE_AUTHORIZATION_OTP, et), at),
                vt = (ut = {}, u()(ut, pt.SET_PASSWORD_QUESTION, x), u()(ut, pt.SET_PASSWORD, N), u()(ut, pt.CHANGE_PASSWORD, U), u()(ut, pt.SECURITY_QUESTION, lt.a), ut);
            e.a = {
                Modes: pt,
                VerifyModals: mt,
                SetModals: vt,
                Modals: Object.assign({}, vt, mt),
                isModeValid: function(t) {
                    return -1 !== Object.values(pt).indexOf(t)
                },
                getModeFromResponseData: function(t) {
                    return (t || {}).szMode
                },
                getModalNameFromMode: function(t) {
                    var e = arguments,
                        n = this;
                    return s()(i.a.mark((function r() {
                        var o, s, a, u;
                        return i.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if ((o = e.length > 1 && void 0 !== e[1] ? e[1] : {
                                            useCache: !1,
                                            skipCombinedCheck: !1
                                        }).useCache) {
                                        r.next = 4;
                                        break
                                    }
                                    return r.next = 4, n.initSensitiveZoneInfo();
                                case 4:
                                    if (s = dt.a.getters["auth/challenge/hasOtpChallenge"], a = dt.a.getters["auth/password/available"], u = dt.a.getters["auth/securityQuestion/securityQuestion"], o.skipCombinedCheck || u || s || a) {
                                        r.next = 9;
                                        break
                                    }
                                    return r.abrupt("return", pt.SET_PASSWORD_QUESTION);
                                case 9:
                                    r.t0 = t, r.next = r.t0 === pt.DEVICE_AUTHORIZATION ? 12 : r.t0 === pt.REENTER_PASSWORD ? 15 : 16;
                                    break;
                                case 12:
                                    if (!s) {
                                        r.next = 14;
                                        break
                                    }
                                    return r.abrupt("return", pt.DEVICE_AUTHORIZATION_OTP);
                                case 14:
                                    return r.abrupt("return", u ? t : pt.SECURITY_QUESTION);
                                case 15:
                                    return r.abrupt("return", a ? t : pt.SET_PASSWORD);
                                case 16:
                                    return r.abrupt("return", t);
                                case 17:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                },
                initSensitiveZoneInfo: function() {
                    var t = this;
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return Object(ft.a)("/ab/account-security/sensitive-zone/info").post().json((function(e) {
                        return t.setMetaFromResponseData(e), e
                    }))
                },
                setMetaFromResponseData: function(t, e) {
                    var n;
                    e || dt.a.dispatch("auth/password/setAvailable", t.hasPassword || !1), dt.a.dispatch("auth/challenge/phone/setId", null == t || null === (n = t.phone) || void 0 === n ? void 0 : n.number), dt.a.dispatch("auth/securityQuestion/sync", t.securityQuestion), Object.values(ht.a).forEach((function(e) {
                        var n = "auth/challenge/".concat(e),
                            r = t[e] || {};
                        dt.a.dispatch(n + "/setUid", r.uid), dt.a.dispatch(n + "/setDefault", r.default || !1), dt.a.dispatch(n + "/setList", r.list)
                    }))
                },
                getInitiatorUrl: function() {
                    var t = function() {
                        var t = new URL(window.location.href).searchParams.get("szRedir");
                        if (null === t) return;
                        var e = new URL(t, window.location.origin);
                        if (-1 === ["http:", "https:"].indexOf(e.protocol)) return;
                        return e
                    }();
                    if (!t) return "/";
                    var e = Object(c.a)() ? t.search + (t.search ? "&" : "?") + "nav_dir=replace" : t.search;
                    return t.pathname + e + t.hash
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement;
                return (this._self._c || t)("span")
            };
            r._withStripped = !0;
            var i = {
                    mixins: [n(657).a],
                    props: {
                        val: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        value: function() {
                            return this.val
                        }
                    }
                },
                o = n(0),
                s = Object(o.a)(i, r, [], !1, null, null, null);
            s.options.__file = "node_modules/@upwork/auth-common/components/inputs/hidden.vue";
            e.a = s.exports
        },
        function(t, e, n) {
            "use strict";
            var r;

            function i() {
                return r || (r = "undefined" != typeof navigator ? navigator.userAgent : ""), /Upwork (Android|iOS)/.test(r)
            }
            n.d(e, "a", (function() {
                return i
            }))
        },
        function(t, e, n) {
            "use strict";
            var r = n(674),
                i = n(1);
            e.a = {
                setUndefinedError: function(t) {
                    this.setById(t, r.a.unexpected)
                },
                setFixErrors: function(t) {
                    this.setById(t, r.a.fix)
                },
                setById: function(t, e) {
                    i.a.dispatch("auth/alerts/set", {
                        context: t,
                        id: e
                    })
                },
                add: function(t, e) {
                    i.a.dispatch("auth/alerts/add", {
                        context: t,
                        alerts: e
                    })
                },
                close: function(t, e) {
                    i.a.dispatch("auth/alerts/close", {
                        context: t,
                        id: e
                    })
                },
                clear: function(t) {
                    i.a.dispatch("auth/alerts/clear", t)
                }
            }
        }, ,
        function(t, e, n) {},
        function(t, e, n) {
            "use strict";
            var r;
            e.a = {
                getTracker: function() {
                    if (r) return r;
                    if ("undefined" == typeof window) return {
                        track: function() {}
                    };
                    if (window.$nuxt && $nuxt.$tracker) return $nuxt.$tracker;
                    throw new Error("No event tracker is defined")
                },
                setTracker: function(t) {
                    r = t
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("input-group", {
                    attrs: {
                        id: t.id,
                        required: t.required
                    }
                }, [t.hasLabel ? n("label", {
                    staticClass: "up-label",
                    attrs: {
                        for: t.domId
                    }
                }, [t._t("default")], 2) : t._e(), t._v(" "), n("div", {
                    class: t.inputWrapper
                }, [t.icon ? n("div", {
                    staticClass: "up-input-group-prepend"
                }, [n("up-c-icon", {
                    attrs: {
                        name: t.icon
                    }
                })], 1) : t._e(), t._v(" "), "checkbox" === t.type ? n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.value,
                        expression: "value"
                    }],
                    ref: "input",
                    staticClass: "up-input",
                    class: t.inputClass,
                    attrs: {
                        id: t.domId,
                        name: t.domName,
                        placeholder: t.placeholder,
                        "aria-label": t.ariaLabel,
                        maxlength: t.maxlength,
                        inputmode: t.inputmode,
                        "aria-describedby": t.ariaDescribedby,
                        "aria-required": t.required,
                        autocomplete: t.autocomplete,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.value) ? t._i(t.value, null) > -1 : t.value
                    },
                    on: {
                        input: function(e) {
                            return t.update()
                        },
                        change: function(e) {
                            var n = t.value,
                                r = e.target,
                                i = !!r.checked;
                            if (Array.isArray(n)) {
                                var o = t._i(n, null);
                                r.checked ? o < 0 && (t.value = n.concat([null])) : o > -1 && (t.value = n.slice(0, o).concat(n.slice(o + 1)))
                            } else t.value = i
                        }
                    }
                }) : "radio" === t.type ? n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.value,
                        expression: "value"
                    }],
                    ref: "input",
                    staticClass: "up-input",
                    class: t.inputClass,
                    attrs: {
                        id: t.domId,
                        name: t.domName,
                        placeholder: t.placeholder,
                        "aria-label": t.ariaLabel,
                        maxlength: t.maxlength,
                        inputmode: t.inputmode,
                        "aria-describedby": t.ariaDescribedby,
                        "aria-required": t.required,
                        autocomplete: t.autocomplete,
                        type: "radio"
                    },
                    domProps: {
                        checked: t._q(t.value, null)
                    },
                    on: {
                        input: function(e) {
                            return t.update()
                        },
                        change: function(e) {
                            t.value = null
                        }
                    }
                }) : n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.value,
                        expression: "value"
                    }],
                    ref: "input",
                    staticClass: "up-input",
                    class: t.inputClass,
                    attrs: {
                        id: t.domId,
                        name: t.domName,
                        placeholder: t.placeholder,
                        "aria-label": t.ariaLabel,
                        maxlength: t.maxlength,
                        inputmode: t.inputmode,
                        "aria-describedby": t.ariaDescribedby,
                        "aria-required": t.required,
                        autocomplete: t.autocomplete,
                        type: t.type
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: [
                            function(e) {
                                e.target.composing || (t.value = e.target.value)
                            },
                            function(e) {
                                return t.update()
                            }
                        ]
                    }
                }), t._v(" "), t._t("append-block")], 2), t._v(" "), t._t("inline-alert", null, {
                    slot: "inline-alert"
                }), t._v(" "), t._t("hint", null, {
                    slot: "hint"
                }), t._v(" "), t._t("after-alert-hint", null, {
                    slot: "after-alert-hint"
                })], 2)
            };
            r._withStripped = !0;
            var i = n(47),
                o = n(668),
                s = n(657),
                a = (n(957), n(958), {
                    mixins: [s.a],
                    props: {
                        icon: String,
                        autocomplete: String,
                        inputmode: String,
                        ariaDescribedby: String,
                        ariaLabel: String,
                        inputWrapperClass: {
                            type: Object
                        },
                        type: {
                            type: String,
                            default: "text"
                        },
                        placeholder: {
                            type: String,
                            default: ""
                        },
                        maxlength: {
                            type: Number,
                            default: void 0
                        }
                    },
                    computed: {
                        inputWrapper: function() {
                            return Object.assign({
                                "up-input-group": this.icon
                            }, this.inputWrapperClass || {})
                        }
                    },
                    methods: {
                        focus: function() {
                            this.$refs.input && this.$refs.input.focus()
                        },
                        update: function() {
                            this.$emit("input", this.value)
                        }
                    },
                    components: {
                        InputGroup: o.a,
                        UpCIcon: i.
                        default
                    }
                }),
                u = (n(980), n(0)),
                c = Object(u.a)(a, r, [], !1, null, "9baadd78", null);
            c.options.__file = "node_modules/@upwork/auth-common/components/inputs/input.vue";
            e.a = c.exports
        },
        function(t, e, n) {},
        function(t, e) {
            function n(e) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) {
                    return typeof t
                } : t.exports = n = function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(e)
            }
            t.exports = n
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return w
            })), n.d(e, "a", (function() {
                return _
            }));
            var r, i = n(39),
                o = /bot|googlebot|crawler|spider|robot|crawling/i,
                s = [{
                    name: "xs",
                    minWidth: 0,
                    maxWidth: 480
                }, {
                    name: "sm",
                    minWidth: 480,
                    maxWidth: 768
                }, {
                    name: "md",
                    minWidth: 768,
                    maxWidth: 992
                }, {
                    name: "lg",
                    minWidth: 992,
                    maxWidth: 1200
                }, {
                    name: "xl",
                    minWidth: 1200,
                    maxWidth: Number.MAX_VALUE
                }],
                a = function(t) {
                    var e = t.innerWidth;
                    return s.find((function(t) {
                        var n = t.minWidth,
                            r = t.maxWidth;
                        return e >= n && e < r
                    })).name
                };
            ! function(t) {
                t.IOS_APP_REFERRER = "mobile_app_ios", t.ANDROID_APP_REFERRER = "mobile_app_android", t.MOBILE_WEB_IOS_REFERRER = "mobile_web_ios", t.MOBILE_WEB_ANDROID_REFERRER = "mobile_web_android", t.MOBILE_WEB_OTHER_REFERRER = "mobile_web_other", t.DESKTOP_REFERRER = "desktop"
            }(r || (r = {}));
            var u, c = function(t, e) {
                    var n, i = r.DESKTOP_REFERRER;
                    return e && e.platform ? i = "android" === (n = e.platform) ? r.ANDROID_APP_REFERRER : "ios" === n ? r.IOS_APP_REFERRER : void 0 : function(t) {
                        var e, n = !1;
                        return e = t.navigator.userAgent || t.navigator.vendor || t.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0, 4))) && (n = !0), n
                    }(t) && (i = function(t) {
                        var e = r.MOBILE_WEB_OTHER_REFERRER;
                        return /Android/.test(t) ? e = r.MOBILE_WEB_ANDROID_REFERRER : /iPad|iPhone|iPod/.test(t) && (e = r.MOBILE_WEB_IOS_REFERRER), e
                    }(t.navigator.userAgent)), i
                },
                l = function() {
                    function t(t) {
                        this.config = t;
                        var e = this.config,
                            n = e.userNid,
                            r = e.visitorId;
                        n || r || console.warn("Unable to identify user, check olog configuration")
                    }
                    return t.prototype.setApi = function(t) {
                        this.api = t
                    }, t.prototype.sendEvent = function(t, e) {
                        if (void 0 === e && (e = {}), n = window.navigator.userAgent, o.test(n)) return Promise.reject();
                        var n, r = this.config,
                            i = r.userNid,
                            s = r.visitorId,
                            l = r.organizationUid,
                            d = r.mobileNativeApp,
                            f = r.organizationTypeTitle;
                        "page" === t.event && (u = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                            var e = 16 * Math.random() | 0;
                            return ("x" === t ? e : 3 & e | 8).toString(16)
                        })));
                        var h = {
                            log_guid: u,
                            screensize: a(window),
                            referrer: c(window, d),
                            organization_uid: l,
                            organization_type_title: f
                        };
                        e.eventContext && Object.assign(h, e.eventContext), t.screensize = h.screensize, t.referrer = h.referrer, Array.isArray(t.data) && t.data.forEach((function(t) {
                            Object.assign(t, h)
                        }));
                        var p = {
                            id: i || s,
                            data: t
                        };
                        p.data = JSON.stringify(t);
                        var m = "/api/o2/v1/logging/:id.json".replace(":id", p.id);
                        return this.api.url(m).options({}).headers(this.getHeaders(e)).json(p).post()
                    }, t.prototype.getHeaders = function(t) {
                        var e = this.config,
                            n = e.XOdeskReferrer,
                            r = e.userNid,
                            i = e.visitorId,
                            o = e.visitorApiKey,
                            s = {
                                "X-Odesk-Referrer": n || "desktop"
                            };
                        return !r && i && o && (s["X-Odesk-Visitor"] = o), t && t.headers && Array.isArray(t.headers) && t.headers.forEach((function(t) {
                            Object.assign(s, t)
                        })), s
                    }, t
                }(),
                d = function(t) {
                    var e = this;
                    this.data = [{}], this.timestamp = t.timestamp || Date.now(), Object.keys(t).map((function(n) {
                        e[n] = t[n]
                    }))
                },
                f = n(660),
                h = n(749),
                p = function(t, e) {
                    return (p = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                };
            var m = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    n.config = e;
                    var r = n.config.ccstCookieName,
                        i = [Object(h.c)()];
                    n.config.userNid && i.push(Object(h.a)({
                        ccstCookieName: r
                    }));
                    var o = Object(f.a)().middlewares(i);
                    return t.prototype.setApi.call(n, o), n
                }
                return function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    p(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }(e, t), e
            }(l);
            var v = function() {
                    var t = {},
                        e = window.Applet;
                    if (void 0 !== e) {
                        if ("function" == typeof e.getUser && null != e.getUser() && (t.User = e.getUser(), t.userNid = t.User.getNid()), "function" == typeof e.getOrganization && null != e.getOrganization() && (t.Organization = e.getOrganization(), t.organizationUid = t.Organization.getUid(), t.organizationTypeTitle = t.Organization.getTypeTitle && t.Organization.getTypeTitle()), "function" == typeof e.getVisitorId && null != e.getVisitorId()) {
                            var n = {
                                getVisitorId: e.getVisitorId
                            };
                            t.visitorId = e.getVisitorId(), "function" == typeof e.getVisitorApiKey && null != e.getVisitorApiKey() && (n.getVisitorApiKey = e.getVisitorApiKey, t.visitorApiKey = e.getVisitorApiKey()), t.Visitor = n
                        }
                        "function" == typeof e.getVar && null != e.getVar("urchinId") && (t.EO = {
                            analytics: {
                                urchinId: e.getVar("urchinId")
                            }
                        }), "function" == typeof e.getInstanceEnv && (t.Environment = e.getInstanceEnv()), t.CsrfTokenHeaderName = e.getVar("csrfTokenHeaderName"), t.CsrfTokenCookieName = e.getVar("csrfTokenCookieName"), t.PageId = e.getVar("pageId"), t.ccstCookieName = e.getVar("ccstCookieName"), t.disputesASIntegration = e.getVar("disputesASIntegration"), t.NotificationASIntegration = e.getVar("NotificationASIntegration"), t.XOdeskReferrer = e.getVar("XOdeskReferrer"), t.CI7646GraphqlSmf = e.getVar("CI7646GraphqlSmf"), t.mobileNativeApp = e.getVar("mobile_native_app")
                    }
                    return t
                }(),
                g = {
                    userUid: v.User ? v.User.getUid() : null,
                    userNid: v.userNid,
                    organizationUid: v.organizationUid,
                    visitorId: v.visitorId,
                    visitorApiKey: v.visitorApiKey,
                    mobileNativeApp: v.mobileNativeApp,
                    ccstCookieName: v.ccstCookieName,
                    XOdeskReferrer: v.XOdeskReferrer,
                    organizationTypeTitle: v.organizationTypeTitle
                },
                b = {
                    user_uid: v.User ? v.User.getUid() : null,
                    organization_uid: v.Organization ? v.Organization.getUid() : null,
                    visitor_id: v.visitorId,
                    organization_type_title: v.organizationTypeTitle
                },
                y = new i.d,
                w = new i.v(new i.i, y),
                _ = new i.a(y, w),
                k = new m(g);
            _.register("enter", i.h), _.register("impression", i.m), _.register("page-impression", i.q), _.register("page-load", i.q), _.register("page-unload", i.r), _.register("clickLink", i.b), _.register("clickLinkNewContext", i.c), w.addPublisher(new i.k).addPublisher(new i.j).addSubscriber(new i.l(b), [i.e]).addPublisher(new i.t).addPublisher(new i.s).addSubscriber(new i.u(b), [i.g]).addPublisher(new i.o).addPublisher(new i.n).addSubscriber(new i.p(k, d), [i.f]), w.pageView()
        },
        function(t, e, n) {
            "use strict";
            var r = n(18),
                i = n.n(r),
                o = n(19),
                s = n.n(o),
                a = n(1),
                u = !1,
                c = function() {
                    function t() {
                        i()(this, t)
                    }
                    return s()(t, [{
                        key: "navigate",
                        value: function(t, e) {
                            if (!u) {
                                if (u = !0, setTimeout((function() {
                                        u = !1
                                    }), 300), this.context) {
                                    if (this.context.onChangeLocation && this.context.onChangeLocation(t)) return;
                                    this.context.id && a.a.dispatch("auth/form/setSubmitDisabled", {
                                        formId: this.context.id,
                                        disabled: !0
                                    })
                                }
                                document.location = t
                            }
                        }
                    }, {
                        key: "setContext",
                        value: function(t) {
                            return this.context = t, this
                        }
                    }]), t
                }();
            e.a = {
                navigate: function(t, e) {
                    (new c).navigate(t, e)
                },
                setContext: function(t) {
                    return (new c).setContext(t)
                },
                reset: function() {
                    u = !1
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1);
            e.a = {
                inserted: function(t, e) {
                    t.addEventListener("click", (function() {
                        r.a.dispatch("auth/event/click", e.value || t.getAttribute("id"))
                    }))
                }
            }
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return k
            })), n.d(e, "i", (function() {
                return S
            })), n.d(e, "v", (function() {
                return M
            })), n.d(e, "d", (function() {
                return w
            })), n.d(e, "h", (function() {
                return $
            })), n.d(e, "m", (function() {
                return F
            })), n.d(e, "q", (function() {
                return V
            })), n.d(e, "b", (function() {
                return K
            })), n.d(e, "c", (function() {
                return z
            })), n.d(e, "r", (function() {
                return H
            })), n.d(e, "e", (function() {
                return C
            })), n.d(e, "k", (function() {
                return O
            })), n.d(e, "j", (function() {
                return I
            })), n.d(e, "l", (function() {
                return A
            })), n.d(e, "f", (function() {
                return T
            })), n.d(e, "o", (function() {
                return P
            })), n.d(e, "n", (function() {
                return R
            })), n.d(e, "p", (function() {
                return N
            })), n.d(e, "g", (function() {
                return j
            })), n.d(e, "t", (function() {
                return D
            })), n.d(e, "s", (function() {
                return B
            })), n.d(e, "u", (function() {
                return L
            }));
            var r, i = n(839),
                o = n.n(i),
                s = n(655),
                a = n.n(s),
                u = n(57),
                c = n.n(u),
                l = n(48),
                d = n.n(l),
                f = n(2),
                h = n.n(f),
                p = n(18),
                m = n.n(p),
                v = n(19),
                g = n.n(v);

            function b(t) {
                return function() {
                    var e, n = c()(t);
                    if (y()) {
                        var r = c()(this).constructor;
                        e = Reflect.construct(n, arguments, r)
                    } else e = n.apply(this, arguments);
                    return a()(this, e)
                }
            }

            function y() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }! function(t) {
                t.EVENT_TRACKED = "eventTracked", t.EVENT_REGISTERED = "eventRegistered"
            }(r || (r = {}));
            var w = function() {
                    function t() {
                        m()(this, t)
                    }
                    return g()(t, [{
                        key: "log",
                        value: function(t, e) {
                            var n = new CustomEvent(t.toString(), {
                                detail: {
                                    data: e
                                }
                            });
                            document.dispatchEvent(n)
                        }
                    }]), t
                }(),
                _ = function() {
                    function t(e, n, r) {
                        m()(this, t), this.event = e, this.element = n, this.callback = r
                    }
                    return g()(t, [{
                        key: "handler",
                        value: function(t) {}
                    }, {
                        key: "init",
                        value: function() {
                            var t = this;
                            return this.handler = function(e) {
                                t.callback()
                            }, this.element.addEventListener(this.event, this.handler), this
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this.element.removeEventListener(this.event, this.handler)
                        }
                    }]), t
                }(),
                k = function() {
                    function t(e, n) {
                        m()(this, t), this.logger = e, this.tracker = n, this.bindings = {}
                    }
                    return g()(t, [{
                        key: "register",
                        value: function(t, e) {
                            this.bindings[t] || (this.bindings[t] = []), this.bindings[t].push(e)
                        }
                    }, {
                        key: "listen",
                        value: function(t) {
                            var e = this,
                                n = t.event,
                                i = t.element,
                                o = t.data,
                                s = function() {
                                    return e.tracker.modifyEvent(o instanceof Function ? o() : o)
                                };
                            return new Promise((function(t) {
                                var o = (e.bindings[n] || [_]).map((function(t) {
                                    return new t(n, i, (function() {
                                        return e.tracker.track(s())
                                    })).init()
                                }));
                                e.logger.log(r.EVENT_REGISTERED, s()), t(o)
                            }))
                        }
                    }]), t
                }(),
                S = function() {
                    function t() {
                        m()(this, t), this.subscribers = {}
                    }
                    return g()(t, [{
                        key: "publish",
                        value: function(t) {
                            if (this.subscribers[t.type]) return this.subscribers[t.type].forEach((function(e) {
                                return e.handle(t)
                            })), this
                        }
                    }, {
                        key: "subscribe",
                        value: function(t, e) {
                            return this.subscribers[e] || (this.subscribers[e] = []), -1 === this.subscribers[e].indexOf(t) && this.subscribers[e].push(t), this
                        }
                    }]), t
                }(),
                E = function() {
                    function t() {
                        m()(this, t)
                    }
                    return g()(t, [{
                        key: "handle",
                        value: function(t) {
                            this.bus && this.isHandleable(t) && this.bus.publish(this.getEvent(t))
                        }
                    }]), t
                }(),
                x = function() {
                    function t(e) {
                        m()(this, t), this.userContext = e
                    }
                    return g()(t, [{
                        key: "getCookie",
                        value: function(t) {
                            var e = document.cookie.split(/;\s*/).map((function(t) {
                                return t.split("=", 2)
                            })).filter((function(e) {
                                return e[0] === t
                            }));
                            return e.length ? decodeURI(e[0][1]) : null
                        }
                    }, {
                        key: "isTouchScreen",
                        value: function() {
                            return !!("ontouchstart" in document.documentElement || window.DocumentTouch && document instanceof DocumentTouch)
                        }
                    }, {
                        key: "getBrowserPayload",
                        value: function() {
                            return {
                                recognized: this.getCookie("recognized"),
                                touch_screen: this.isTouchScreen()
                            }
                        }
                    }, {
                        key: "getUserContextData",
                        value: function() {
                            return this.userContext
                        }
                    }, {
                        key: "getBackendPayload",
                        value: function() {
                            return window.Applet && window.Applet.getVar("event_data") || {}
                        }
                    }, {
                        key: "getData",
                        value: function(t) {
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            return Object.assign({}, n.reduce((function(t, e) {
                                return Object.assign(t, e)
                            }), {}), t)
                        }
                    }, {
                        key: "merge",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            var r = Object.assign.apply(null, e.concat([{}]).reverse());
                            return Object.keys(r).reduce((function(t, n) {
                                return Object.assign(t, h()({}, n, e.reduce((function(t, e) {
                                    return e && void 0 !== e[n] ? e[n] : t
                                }), r[n])))
                            }), {})
                        }
                    }, {
                        key: "handle",
                        value: function(t) {
                            var e = this.getBackendPayload(),
                                n = this.getBrowserPayload(),
                                r = this.getUserContextData();
                            this.send(this.merge(e, t, {
                                data: this.getData(t.data, n, r, e.data)
                            }))
                        }
                    }]), t
                }();
            var C = "gtm",
                O = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "isHandleable",
                        value: function(t) {
                            return t.event && (!Array.isArray(t.trackers) || !t.trackers.length || t.trackers.indexOf(C) > -1)
                        }
                    }, {
                        key: "getEvent",
                        value: function(t) {
                            return {
                                type: C,
                                gtmEvent: t.gtmEvent,
                                event: t.event,
                                sublocation: t.sublocation,
                                label: t.label || t.element,
                                value: t.value,
                                data: t.data
                            }
                        }
                    }]), n
                }(E),
                I = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "isHandleable",
                        value: function(t) {
                            return t.trackingEvent && (1 == +t.trackingGtm || !t.hasOwnProperty("trackingGtm"))
                        }
                    }, {
                        key: "getEvent",
                        value: function(t) {
                            return {
                                type: C,
                                gtmEvent: t.trackingGtmEvent,
                                event: t.trackingEventAlias || t.trackingEvent,
                                sublocation: t.trackingSublocation,
                                label: t.trackingLabel || t.trackingElement,
                                value: t.trackingValue,
                                data: t.trackingData
                            }
                        }
                    }]), n
                }(E),
                A = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "normalize",
                        value: function(t) {
                            return Object.assign({}, t.data, {
                                event: t.gtmEvent || "ga",
                                eventAction: t.event || " ",
                                eventCategory: t.sublocation || " ",
                                eventLabel: t.label || " ",
                                eventValue: t.value || " "
                            })
                        }
                    }, {
                        key: "send",
                        value: function(t) {
                            var e = window.dataLayer;
                            e && e.push(this.normalize(t))
                        }
                    }]), n
                }(x),
                T = "olog",
                P = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "isHandleable",
                        value: function(t) {
                            return t.event && (!Array.isArray(t.trackers) || !t.trackers.length || t.trackers.indexOf(T) > -1)
                        }
                    }, {
                        key: "getEvent",
                        value: function(t) {
                            return {
                                type: T,
                                event: t.event,
                                location: t.location,
                                locationDefault: t.locationDefault,
                                sublocation: t.sublocation,
                                label: t.label || t.element,
                                data: t.data
                            }
                        }
                    }]), n
                }(E),
                R = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "isHandleable",
                        value: function(t) {
                            return !!t.ologEvent || t.trackingEvent && (1 == +t.trackingOlog || !t.hasOwnProperty("trackingOlog"))
                        }
                    }, {
                        key: "getEvent",
                        value: function(t) {
                            return {
                                type: T,
                                event: t.ologEvent || t.trackingEventAlias || t.trackingEvent,
                                location: t.ologLocation || t.trackingLocation,
                                locationDefault: t.trackingLocationDefault,
                                sublocation: t.ologSublocation || t.trackingSublocation,
                                label: t.trackingLabel || t.trackingElement,
                                referrer: t.ologReferrer,
                                data: t.ologData || t.trackingData
                            }
                        }
                    }]), n
                }(E),
                N = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n(t, r) {
                        var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                        return m()(this, n), (i = e.call(this, {
                            user_uid: t.config.userUid,
                            organization_uid: t.config.organizationUid,
                            visitor_id: t.config.visitorId,
                            organization_type_title: t.config.organizationTypeTitle
                        })).olog = t, i.oLogEvent = r, i.pageLocation = o, i
                    }
                    return g()(n, [{
                        key: "getBrowserPayload",
                        value: function() {
                            return Object.assign(o()(c()(n.prototype), "getBrowserPayload", this).call(this), {
                                userAgent: window.navigator.userAgent,
                                language: window.navigator.language || window.navigator.userLanguage,
                                platform: window.navigator.platform
                            })
                        }
                    }, {
                        key: "getData",
                        value: function(t) {
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            return (Array.isArray(t) && t.length ? t : [t]).map((function(t) {
                                return Object.assign({}, n.reduce((function(t, e) {
                                    return Object.assign(t, e)
                                }), {}), t)
                            }))
                        }
                    }, {
                        key: "send",
                        value: function(t) {
                            var e = new this.oLogEvent({
                                event: t.event,
                                location: t.location || t.locationDefault || this.pageLocation(),
                                referrer: t.referrer,
                                sublocation: t.sublocation,
                                data: t.data.map((function(e) {
                                    return Object.assign({
                                        event_label: t.label
                                    }, e)
                                })),
                                timestamp: +new Date
                            });
                            return this.olog.sendEvent(e)
                        }
                    }]), n
                }(x),
                j = "snowplow",
                D = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "isHandleable",
                        value: function(t) {
                            return t.event && (!Array.isArray(t.trackers) || !t.trackers.length || t.trackers.indexOf(j) > -1)
                        }
                    }, {
                        key: "getEvent",
                        value: function(t) {
                            return {
                                type: j,
                                event: t.event,
                                event_label: t.label || t.element,
                                location: t.location,
                                locationDefault: t.locationDefault,
                                sublocation: t.sublocation,
                                value: t.value,
                                data: t.data
                            }
                        }
                    }]), n
                }(E),
                B = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "isHandleable",
                        value: function(t) {
                            return t.trackingEvent && (1 == +t.trackingSnowplow || !t.hasOwnProperty("trackingSnowplow"))
                        }
                    }, {
                        key: "getEvent",
                        value: function(t) {
                            return {
                                type: j,
                                event: t.trackingEventAlias || t.trackingEvent,
                                event_label: t.trackingLabel || t.trackingElement,
                                location: t.trackingLocation,
                                locationDefault: t.trackingLocationDefault,
                                sublocation: t.trackingSublocation,
                                value: t.trackingValue,
                                data: t.trackingData
                            }
                        }
                    }]), n
                }(E),
                L = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n(t) {
                        var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                        return m()(this, n), (r = e.call(this, t)).userContext = t, r.pageLocation = i, r
                    }
                    return g()(n, [{
                        key: "getPayload",
                        value: function(t) {
                            var e = ["type", "data", "locationDefault"];
                            return this.merge({
                                location: t.locationDefault
                            }, Object.assign(Object.keys(t).filter((function(t) {
                                return -1 === e.indexOf(t)
                            })).reduce((function(e, n) {
                                return Object.assign(e, h()({}, n, t[n]))
                            }), {}), t.data))
                        }
                    }, {
                        key: "send",
                        value: function(t) {
                            var e = window.dataLayer,
                                n = this.getPayload(t);
                            n.location = n.location || this.pageLocation(), n.location && !n.location.startsWith("widget_") || console.warn("location is invalid", n), e ? e.push({
                                event_payload: void 0
                            }, {
                                event: "snowplow",
                                event_payload: n
                            }) : console.warn("dataLayer is not available, unable to send payload", n)
                        }
                    }]), n
                }(x),
                M = function() {
                    function t(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
                        m()(this, t), this.bus = e, this.logger = n, this.config = r, this.publishers = [], this.subscribers = {}, this.config.upTracking = this.config.upTracking || {}
                    }
                    return g()(t, [{
                        key: "addPublisher",
                        value: function(t) {
                            return t.bus = this.bus, this.publishers.push(t), this
                        }
                    }, {
                        key: "addSubscriber",
                        value: function(t, e) {
                            var n = this;
                            return e.forEach((function(e) {
                                n.subscribers[e] || (n.subscribers[e] = []), -1 === n.subscribers[e].indexOf(t) && (n.subscribers[e].push(t), n.bus.subscribe(t, e))
                            })), this
                        }
                    }, {
                        key: "getLocation",
                        value: function(t) {
                            var e = t.location || t.trackingLocation,
                                n = this.config.upTracking && this.config.upTracking.location,
                                r = (this.config.Applet && this.config.Applet.getVar("event_data") || {}).location,
                                i = t.locationDefault || t.trackingLocationDefault;
                            return e || n || r || i
                        }
                    }, {
                        key: "track",
                        value: function(t) {
                            var e = this;
                            t["trackingEvent" in t ? "trackingLocation" : "location"] = this.getLocation(t);
                            var n = this.modifyEvent(t);
                            return new Promise((function(t) {
                                e.publishers.forEach((function(t) {
                                    t.handle(n)
                                })), e.logger.log(r.EVENT_TRACKED, n), t()
                            }))
                        }
                    }, {
                        key: "setLocation",
                        value: function(t) {
                            this.config.upTracking.location = t
                        }
                    }, {
                        key: "modifyEvent",
                        value: function(t) {
                            return this.config.upTracking ? (this.config.upTracking.eventModifiers || []).reduce((function(t, e) {
                                return e instanceof Function ? e(t) : t
                            }), t) : t
                        }
                    }, {
                        key: "pageView",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [j];
                            this.config.upTracking.pageViewSent || (this.config.upTracking.pageViewSent = !0, this.track({
                                trackers: t,
                                event: "impression",
                                sublocation: "page",
                                label: "general_pv"
                            }))
                        }
                    }, {
                        key: "addEventModifier",
                        value: function(t) {
                            this.config.upTracking.eventModifiers || (this.config.upTracking.eventModifiers = []), "function" == typeof t && this.config.upTracking.eventModifiers.push(t)
                        }
                    }]), t
                }(),
                $ = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            return this.handler = function(e) {
                                13 !== e.keyCode && "Enter" !== e.key && "Enter" !== e.code || t.callback()
                            }, this.element.addEventListener("keydown", this.handler), this
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this.element.removeEventListener("keydown", this.handler)
                        }
                    }]), n
                }(_),
                U = function() {
                    function t() {
                        m()(this, t), this.observations = [], this.observer = new IntersectionObserver(this.callback.bind(this), this.getOptions())
                    }
                    return g()(t, [{
                        key: "getOptions",
                        value: function() {
                            return {
                                root: null,
                                rootMargin: "0px",
                                threshold: function() {
                                    for (var t = [], e = 0; e <= 100; e++) t.push(e / 100);
                                    return t
                                }()
                            }
                        }
                    }, {
                        key: "callback",
                        value: function(t) {
                            var e = this;
                            t.forEach((function(t) {
                                for (var n = 0; n < e.observations.length; n++) t.target === e.observations[n].element && e.observations[n].callback(100 * t.intersectionRatio)
                            }))
                        }
                    }, {
                        key: "observe",
                        value: function(t, e) {
                            this.observations.push({
                                element: t,
                                callback: e
                            }), this.observer.observe(t)
                        }
                    }, {
                        key: "unobserve",
                        value: function(t) {
                            for (var e = 0; e < this.observations.length; e++)
                                if (t === this.observations[e].element) {
                                    this.observer.unobserve(t), this.observations.splice(e, 1);
                                    break
                                }
                        }
                    }]), t
                }(),
                F = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        var t;
                        return m()(this, n), (t = e.apply(this, arguments)).checking = !1, t
                    }
                    return g()(n, [{
                        key: "init",
                        value: function() {
                            return this.observer = n.getObserver(), this.target = this.getTarget(), this.observer.observe(this.target, this.update.bind(this)), this
                        }
                    }, {
                        key: "getTarget",
                        value: function() {
                            return "tracking" === this.element.tagName.toLowerCase() ? this.element.parentElement : this.element
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            this.ratio = t, this.check()
                        }
                    }, {
                        key: "check",
                        value: function() {
                            var t = this;
                            this.checking || (this.checking = !0, setTimeout((function() {
                                t.ratio > 0 && t.trigger(), t.checking = !1
                            }), 1e3))
                        }
                    }, {
                        key: "trigger",
                        value: function() {
                            this.callback(), this.observer.unobserve(this.target)
                        }
                    }], [{
                        key: "getObserver",
                        value: function() {
                            return this.observer || (this.observer = new U), this.observer
                        }
                    }]), n
                }(_),
                V = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            return this.handler = function() {
                                t.callback()
                            }, -1 !== ["interactive", "complete"].indexOf(document.readyState) ? this.callback() : window.addEventListener("DOMContentLoaded", this.handler), this
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            window.removeEventListener("DOMContentLoaded", this.handler)
                        }
                    }]), n
                }(_),
                q = function(t) {
                    return -1 !== window.navigator.platform.indexOf("Mac") ? t.metaKey || t.shiftKey : t.ctrlKey || t.shiftKey
                },
                z = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            return this.handler = function(e) {
                                q(e) && t.callback()
                            }, this.element.addEventListener("click", this.handler), this
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this.element.removeEventListener("click", this.handler)
                        }
                    }]), n
                }(_),
                K = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            return this.handler = function(e) {
                                q(e) || t.callback()
                            }, this.element.addEventListener("click", this.handler), this
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this.element.removeEventListener("click", this.handler)
                        }
                    }]), n
                }(_),
                H = function(t) {
                    d()(n, t);
                    var e = b(n);

                    function n() {
                        return m()(this, n), e.apply(this, arguments)
                    }
                    return g()(n, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            return this.handler = function() {
                                t.callback()
                            }, window.addEventListener("beforeunload", this.handler), this
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            window.removeEventListener("beforeunload", this.handler)
                        }
                    }]), n
                }(_)
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)(t.modalType, t._g(t._b({
                    tag: "component"
                }, "component", t.$attrs, !1), t.$listeners), [t._l(t.$slots, (function(e, n) {
                    return t._t(n, null, {
                        slot: n
                    })
                }))], 2)
            };
            r._withStripped = !0;
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("client-only", [n("nuxt-modal", {
                    ref: "modal",
                    attrs: {
                        size: "sm"
                    },
                    on: {
                        "modal-dismiss": t.onDismiss
                    }
                }, [n("alerts", {
                    attrs: {
                        context: t.viewId
                    }
                }), t._v(" "), t._t("default"), t._v(" "), n(t.form, t._b({
                    tag: "component",
                    attrs: {
                        id: t.cEffectiveFormId
                    },
                    on: {
                        onCancel: function(e) {
                            return t.close("cancel")
                        },
                        onSuccessSubmit: function(e) {
                            return t.close("success")
                        },
                        switched: t.onSwitch
                    }
                }, "component", t.formAttrs, !1)), t._v(" "), t._t("afterForm"), t._v(" "), n("div", {
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [t._t("controls", [n("form-controls", {
                    class: t.formControlsClass,
                    attrs: {
                        "for-form": t.viewId
                    }
                }, [n("form-control", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.cancelButton,
                        expression: "cancelButton"
                    }],
                    attrs: {
                        kind: t.cancelKind,
                        type: "cancel"
                    }
                }, [t._v(t._s(t.cancelLabel))]), t._v(" "), n("form-control", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.submitButton,
                        expression: "submitButton"
                    }],
                    class: {
                        "width-sm mx-0": !t.cancelButton
                    },
                    attrs: {
                        type: "save"
                    }
                }, [t._v(t._s(t.submitLabel))])], 1)])], 2)], 2)], 1)
            };
            i._withStripped = !0;
            var o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.currentComponent ? n(t.currentComponent, t._b({
                    ref: "modal",
                    tag: "component",
                    on: {
                        "modal-closed": t.onClose,
                        "slider-closed": t.onClose,
                        "modal-opened": t.onOpened,
                        "slider-opened": t.onOpened,
                        "modal-dismiss": t.onDismiss,
                        "hook:created": t.onCreated
                    },
                    scopedSlots: t._u([{
                        key: "header",
                        fn: function() {
                            return [t._t("header")]
                        },
                        proxy: !0
                    }, {
                        key: "footer",
                        fn: function() {
                            return [t._t("footer")]
                        },
                        proxy: !0
                    }, {
                        key: "back-btn-title",
                        fn: function() {
                            return [t._t("back-btn-title")]
                        },
                        proxy: !0
                    }], null, !0)
                }, "component", Object.assign({}, {
                    modalTitle: t.title
                }, t.$props, {
                    autoOpen: !0
                }), !1), [t._t("default")], 2) : t._e()
            };
            o._withStripped = !0;
            var s = n(773).a,
                a = (n(969), n(0)),
                u = Object(a.a)(s, o, [], !1, null, null, null);
            u.options.__file = "node_modules/@upwork/nuxt-core/src/modal/modal.vue";
            var c = u.exports,
                l = n(11),
                d = n(6),
                f = n(41),
                h = n(43),
                p = n(707),
                m = n(1),
                v = (n(13), {
                    props: {
                        title: String,
                        form: Object,
                        effectiveFormId: String,
                        formAttrs: Object,
                        submitLabel: {
                            type: String,
                            default: "Save"
                        },
                        cancelLabel: {
                            type: String,
                            default: "Cancel"
                        },
                        closeOnSubmit: {
                            type: Boolean,
                            default: !0
                        },
                        inverseFooter: {
                            type: Boolean,
                            default: !1
                        },
                        submitButton: {
                            type: Boolean,
                            default: !0
                        },
                        cancelButton: {
                            type: Boolean,
                            default: !0
                        },
                        formControlsClass: {
                            type: String,
                            default: "text-right"
                        },
                        hideFooter: Boolean,
                        sticky: Boolean
                    },
                    data: function() {
                        return {
                            view: null
                        }
                    },
                    computed: {
                        id: function() {
                            return this.cashedId || (this.cashedId = (JSON.parse(this.$modal().data) || {}).modalId), this.cashedId
                        },
                        viewId: function() {
                            var t, e = this.view || this.form;
                            return e && (t = e.ID || h.a.getId(e)), t || this.id
                        },
                        cEffectiveFormId: function() {
                            return this.effectiveFormId || this.viewId
                        },
                        hasAlerts: function() {
                            return 0 !== m.a.getters["auth/alerts/all"](this.viewId).length
                        },
                        cancelKind: function() {
                            return this.submitButton ? "up-btn-link" : "up-btn-default"
                        }
                    },
                    watch: {
                        hasAlerts: function(t) {
                            this.$el.classList && this.$el.classList.toggle("has-alerts", t)
                        },
                        title: function(t) {
                            this.updateTitle(t)
                        },
                        hideFooter: function(t) {
                            this.$refs.modal.classList.toggle("hide-footer", !!t)
                        },
                        inverseFooter: function(t) {
                            this.$refs.modal.modalFooterInverse = t
                        },
                        ariaLabel: function(t) {
                            this.$refs.modal.ariaLabel = t
                        },
                        form: function(t) {
                            this.view = t
                        }
                    },
                    mounted: function() {
                        p.a.set(this);
                        var t = this.id;
                        m.a.dispatch("auth/modal/registerModalRef", {
                            id: t
                        }), this.aliveWatchdog = setInterval((function() {
                            localStorage.setItem(p.a.getModalTtlKey(t), String((new Date).getTime()))
                        }), 1e3), this.title && this.updateTitle(this.title)
                    },
                    destroyed: function() {
                        clearInterval(this.aliveWatchdog)
                    },
                    methods: {
                        onDismiss: function() {
                            m.a.dispatch("auth/modal/clearArtifacts", {
                                id: this.id
                            })
                        },
                        onSwitch: function(t) {
                            this.view = t, this.$emit("switched", t)
                        },
                        close: function(t) {
                            var e = this;
                            ("success" !== t || this.closeOnSubmit) && setTimeout((function() {
                                e.$refs.modal.close(), m.a.dispatch("auth/modal/close", e.id)
                            }), 100)
                        },
                        updateTitle: function(t) {
                            var e = this;
                            setTimeout((function() {
                                e.$refs.modal && e.$refs.modal.updateTitle(t)
                            }), 100)
                        }
                    },
                    components: {
                        NuxtModal: c,
                        FormControls: l.a,
                        FormControl: d.a,
                        Alerts: f.a
                    }
                }),
                g = (n(975), Object(a.a)(v, i, [], !1, null, null, null));
            g.options.__file = "node_modules/@upwork/auth-common/components/nuxt-modal.vue";
            var b = g.exports,
                y = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("up-c-modal", {
                        ref: "modal",
                        attrs: {
                            size: "sm",
                            tabindex: "-1",
                            role: "dialog"
                        }
                    }, [n("div", {
                        attrs: {
                            slot: "body"
                        },
                        slot: "body"
                    }, [n("alerts", {
                        attrs: {
                            context: t.viewId
                        }
                    }), t._v(" "), t._t("default"), t._v(" "), n(t.form, t._b({
                        tag: "component",
                        attrs: {
                            id: t.cEffectiveFormId
                        },
                        on: {
                            onCancel: function(e) {
                                return t.close("cancel")
                            },
                            onSuccessSubmit: function(e) {
                                return t.close("success")
                            },
                            switched: t.onSwitch
                        }
                    }, "component", t.formAttrs, !1)), t._v(" "), t._t("afterForm")], 2), t._v(" "), n("div", {
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [t._t("controls", [n("form-controls", {
                        class: t.formControlsClass,
                        attrs: {
                            "for-form": t.viewId
                        }
                    }, [n("form-control", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.cancelButton,
                            expression: "cancelButton"
                        }],
                        attrs: {
                            kind: t.cancelKind,
                            type: "cancel"
                        }
                    }, [t._v(t._s(t.cancelLabel))]), t._v(" "), n("form-control", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.submitButton,
                            expression: "submitButton"
                        }],
                        class: {
                            "width-sm mx-0": !t.cancelButton
                        },
                        attrs: {
                            type: "save"
                        }
                    }, [t._v(t._s(t.submitLabel))])], 1)])], 2)])
                };
            y._withStripped = !0;
            var w = n(35),
                _ = n.n(w),
                k = {
                    props: {
                        id: String,
                        title: String,
                        form: Object,
                        effectiveFormId: String,
                        formAttrs: Object,
                        submitLabel: {
                            type: String,
                            default: "Save"
                        },
                        cancelLabel: {
                            type: String,
                            default: "Cancel"
                        },
                        closeOnSubmit: {
                            type: Boolean,
                            default: !0
                        },
                        inverseFooter: {
                            type: Boolean,
                            default: !1
                        },
                        submitButton: {
                            type: Boolean,
                            default: !0
                        },
                        cancelButton: {
                            type: Boolean,
                            default: !0
                        },
                        formControlsClass: {
                            type: String,
                            default: "text-right"
                        },
                        hideFooter: Boolean,
                        sticky: Boolean
                    },
                    data: function() {
                        return {
                            view: null
                        }
                    },
                    computed: {
                        viewId: function() {
                            var t, e = this.view || this.form;
                            return e && (t = e.ID || h.a.getId(e)), t || this.id
                        },
                        cEffectiveFormId: function() {
                            return this.effectiveFormId || this.viewId
                        },
                        hasAlerts: function() {
                            return 0 !== m.a.getters["auth/alerts/all"](this.viewId).length
                        },
                        cancelKind: function() {
                            return this.submitButton ? "up-btn-link" : "up-btn-default"
                        }
                    },
                    watch: {
                        hasAlerts: function(t) {
                            this.$el.classList.toggle("has-alerts", t)
                        },
                        title: function(t) {
                            this.$refs.modal.pageTitle = t
                        },
                        hideFooter: function(t) {
                            this.$refs.modal.classList.toggle("hide-footer", !!t)
                        },
                        inverseFooter: function(t) {
                            this.$refs.modal.modalFooterInverse = t
                        },
                        ariaLabel: function(t) {
                            this.$refs.modal.ariaLabel = t
                        },
                        form: function(t) {
                            this.view = t
                        }
                    },
                    mounted: function() {
                        var t = this.$refs.modal;
                        t.isSticky = this.sticky, t.pageTitle = this.title, t.ariaLabel = "undefinedTitle", t.modalFooterInverse = this.inverseFooter, t.setAttribute("id", this.id), t.componentOnReady().then((function() {
                            var e = t.shadowRoot;
                            if (void 0 !== _()(e)) {
                                var n = document.createElement("style");
                                n.innerHTML = "\n                       .modal-footer { border: 0 !important; }\n                       .modal-footer.modal-footer-inverse {\n                          border-top: var(--border-base) !important;\n                          padding-top: 15px !important;\n                        }\n                        @media (min-width:768px) {\n                           .modal-footer, .modal-sticky .modal-content > .modal-footer:not(.modal-footer-inverse)  {\n                               padding: 5px 30px var(--card-section-padding) !important;\n                               border-top: 0 !important;\n                            }\n                           .modal-footer.modal-footer-inverse {\n                              padding-top: var(--card-section-padding) !important;\n                            }\n                        }\n                    ", e.appendChild(n)
                            }
                        })), m.a.dispatch("auth/modal/registerModalRef", {
                            id: this.id,
                            object: t
                        })
                    },
                    methods: {
                        onSwitch: function(t) {
                            var e = this;
                            this.view = t, this.$emit("switched", t), setTimeout((function() {
                                e.$refs.modal.focus()
                            }), 100)
                        },
                        close: function(t) {
                            var e = this;
                            ("success" !== t || this.closeOnSubmit) && setTimeout((function() {
                                m.a.dispatch("auth/modal/close", e.id)
                            }), 100)
                        }
                    },
                    components: {
                        FormControls: l.a,
                        FormControl: d.a,
                        Alerts: f.a
                    }
                },
                S = (n(976), Object(a.a)(k, y, [], !1, null, "72c8f06c", null));
            S.options.__file = "node_modules/@upwork/auth-common/components/stencil-modal.vue";
            var E = S.exports,
                x = {
                    data: function() {
                        var t = b;
                        return "undefined" == typeof window || window.$nuxt || (t = E), {
                            modalType: t
                        }
                    }
                },
                C = Object(a.a)(x, r, [], !1, null, null, null);
            C.options.__file = "node_modules/@upwork/auth-common/components/modal.vue";
            e.a = C.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", t._l(t.alerts, (function(e, r) {
                    return n("up-c-alert", {
                        key: r,
                        attrs: {
                            type: e.type,
                            close: e.closable || !1
                        },
                        on: {
                            "alert-close": function(n) {
                                return t.close(e, r)
                            }
                        }
                    }, [n("span", {
                        domProps: {
                            innerHTML: t._s(e.message)
                        }
                    })])
                })), 1)
            };
            r._withStripped = !0;
            var i = n(1);
            var o = {
                    components: {
                        UpCAlert: n(918).a
                    },
                    props: {
                        context: {
                            type: String,
                            required: !1
                        }
                    },
                    computed: {
                        alerts: function() {
                            return i.a.getters["auth/alerts/all"](this.context)
                        }
                    },
                    methods: {
                        close: function(t, e) {
                            i.a.dispatch("auth/alerts/close", {
                                context: this.context,
                                id: t.id,
                                index: e,
                                alert: t
                            })
                        }
                    },
                    watch: {
                        alerts: function(t) {
                            t && t.length && ! function(t) {
                                var e = t.getBoundingClientRect();
                                if (e.bottom < 0 || e.top > document.documentElement.clientHeight) return !1;
                                var n = t.parentNode;
                                do {
                                    var r = n.getBoundingClientRect();
                                    if (e.top > r.bottom || e.bottom < r.top) return !1;
                                    n = n.parentNode
                                } while (n && n.getBoundingClientRect);
                                return !0
                            }(this.$el) && this.$el.scrollIntoView()
                        }
                    }
                },
                s = n(0),
                a = Object(s.a)(o, r, [], !1, null, null, null);
            a.options.__file = "node_modules/@upwork/auth-common/components/alerts.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "up-illustration"
                }, [e(this.illustration, {
                    tag: "component"
                })], 1)
            };
            r._withStripped = !0;
            var i = n(842),
                o = {
                    injectStyles: [n.n(i).a],
                    name: "UpCIllustrationV2",
                    props: {
                        illustration: {
                            default: null,
                            type: [Object, Function],
                            required: !0
                        }
                    }
                },
                s = n(0),
                a = Object(s.a)(o, r, [], !1, null, null, null);
            a.options.__file = "node_modules/@upwork/vue-components-core/src/illustration-v2/illustration.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return w
            }));
            var r = n(2),
                i = n.n(r),
                o = n(35),
                s = n.n(o),
                a = n(18),
                u = n.n(a),
                c = n(19),
                l = n.n(c),
                d = n(655),
                f = n.n(d),
                h = n(57),
                p = n.n(h),
                m = n(48),
                v = n.n(m),
                g = n(691),
                b = n(708);

            function y() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }
            var w = function(t) {
                v()(r, t);
                var e, n = (e = r, function() {
                    var t, n = p()(e);
                    if (y()) {
                        var r = p()(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return f()(this, t)
                });

                function r(t) {
                    return u()(this, r), n.call(this, t)
                }
                return l()(r, [{
                    key: "switchTo",
                    value: function(t) {
                        return this.extend(t), this.setLastObject(t), this
                    }
                }, {
                    key: "convertFormId",
                    value: function(t) {
                        if ("object" === s()(t) && (t = r.getId(b.a.extend(t))), "string" != typeof t && null !== t) throw new Error("formId has to be string, call ViewState.extend(..) first");
                        return t
                    }
                }], [{
                    key: "dummy",
                    value: function() {
                        var t;
                        return t = {}, i()(t, b.a.ID, "dummy"), i()(t, "render", (function() {})), t
                    }
                }, {
                    key: "getId",
                    value: function(t) {
                        return t ? t.ID || t[b.a.ID] : null
                    }
                }]), r
            }(g.a)
        }, , , ,
        function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    class: this.classes
                }, [e(this.component, {
                    tag: "component"
                })], 1)
            };
            r._withStripped = !0;
            var i = n(2),
                o = n.n(i),
                s = n(836),
                a = {
                    injectStyles: [n.n(s).a],
                    name: "UpCIcon",
                    props: {
                        name: {
                            default: "",
                            type: String,
                            required: !0
                        },
                        size: {
                            default: "",
                            type: String,
                            validator: function(t) {
                                return ["", "xs", "sm", "md", "lg"].includes(t)
                            }
                        }
                    },
                    data: function() {
                        var t = this;
                        return {
                            component: function() {
                                return n(61)("./".concat(t.name, ".vue"))
                            }
                        }
                    },
                    computed: {
                        classes: function() {
                            return o()({
                                "up-icon": !0
                            }, this.size, this.size)
                        }
                    },
                    watch: {
                        name: {
                            handler: function(t) {
                                var e = this,
                                    r = n(61)("./".concat(t, ".vue"));
                                r.then((function() {
                                    e.component = function() {
                                        return r
                                    }
                                }))
                            },
                            immediate: !0
                        }
                    }
                },
                u = n(0),
                c = Object(u.a)(a, r, [], !1, null, null, null);
            c.options.__file = "node_modules/@upwork/vue-components-core/src/icon/icon.vue";
            e.
            default = c.exports
        },
        function(t, e, n) {
            var r = n(974);
            t.exports = function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && r(t, e)
            }
        },
        function(t, e, n) {},
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/login"
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("up-c-popover", t._g(t._b({
                    ref: "popover",
                    attrs: {
                        size: "lg",
                        trigger: t.trigger,
                        closeButton: !1
                    },
                    on: {
                        open: function(e) {
                            return t.onOpen()
                        }
                    }
                }, "up-c-popover", t.$attrs, !1), t.$listeners), [n("h4", [t._t("title")], 2), t._v(" "), t._t("default"), t._v(" "), n("up-c-icon", {
                    staticClass: "cursor-pointer tool-tip",
                    attrs: {
                        slot: "reference",
                        "aria-label": t.ariaLabel,
                        name: "question-circle"
                    },
                    nativeOn: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onEnter()
                        }
                    },
                    slot: "reference"
                })], 2)
            };
            r._withStripped = !0;
            var i = n(738),
                o = n(47),
                s = {
                    props: {
                        ariaLabel: String,
                        trigger: {
                            type: String,
                            default: "click"
                        }
                    },
                    methods: {
                        onOpen: function() {
                            var t = this;
                            setTimeout((function() {
                                t.$refs.popover.$el.focus()
                            }), 100)
                        },
                        onEnter: function() {
                            this.$refs.popover.open()
                        }
                    },
                    components: {
                        UpCPopover: i.a,
                        UpCIcon: o.
                        default
                    }
                },
                a = (n(1050), n(0)),
                u = Object(a.a)(s, r, [], !1, null, null, null);
            u.options.__file = "node_modules/@upwork/auth-common/components/inline-popover.vue";
            e.a = u.exports
        }, ,
        function(t, e, n) {
            "use strict";
            var r = n(9),
                i = n(26),
                o = (n(727).a, n(750).a),
                s = n(4),
                a = n.n(s),
                u = n(8),
                c = n.n(u),
                l = n(707),
                d = function(t) {
                    return function() {
                        var e = c()(a.a.mark((function e(n, o, s) {
                            var u, c;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t && l.a.set(t), u = i.a.getModeFromResponseData(n.data)) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", n);
                                    case 4:
                                        if (449 !== n.status) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 7, i.a.getModalNameFromMode(u, {
                                            skipCombinedCheck: (o.context.component || {}).szSkipCombinedCheck
                                        });
                                    case 7:
                                        return c = e.sent, e.abrupt("return", r.a.dispatch("auth/sensitiveZone/triggered", {
                                            requestCallback: function() {
                                                return s()
                                            },
                                            modalName: c,
                                            mode: u
                                        }).catch((function(t) {
                                            var e = (t || {}).cancelMessage;
                                            if (e) {
                                                var r = new Response,
                                                    i = Object.assign(n.data, {
                                                        alerts: {
                                                            top: [{
                                                                message: e,
                                                                type: "danger"
                                                            }]
                                                        },
                                                        cancelMessage: e
                                                    });
                                                return r.data = i, r.json = function() {
                                                    return Promise.resolve(i)
                                                }, r
                                            }
                                        })));
                                    case 9:
                                        return r.a.dispatch("auth/sensitiveZone/verified", u), e.abrupt("return", n);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                };
            n(32);
            o.addInterceptor(d())
        }, ,
        function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(748);
            e.a = {
                mounted: function() {
                    this.biometricInit()
                },
                computed: {
                    isBiometricEnabledOnDevice: function() {
                        return r.a.getters["auth/biometric/isEnabledOnDevice"]
                    },
                    isBiometricAvailable: function() {
                        return r.a.getters["auth/biometric/isAvailable"]
                    },
                    isBiometricEnabledInApp: function() {
                        return r.a.getters["auth/biometric/isEnabledInApp"]
                    },
                    biometricUidOnDevice: function() {
                        return r.a.getters["auth/biometric/uidOnDevice"]
                    },
                    biometricMainSupportedType: function() {
                        return r.a.getters["auth/biometric/mainSupportedType"]
                    },
                    availableBiometricLabel: function() {
                        var t;
                        return null !== (t = this.knownBiometricHumanReadableName) && void 0 !== t ? t : "biometric recognition using your facial features, fingerprint or some other method"
                    },
                    availableBiometricCapitalizedTitle: function() {
                        return this.availableBiometricTitle.charAt(0).toUpperCase() + this.availableBiometricTitle.slice(1)
                    },
                    availableBiometricTitle: function() {
                        var t;
                        return null !== (t = this.knownBiometricHumanReadableName) && void 0 !== t ? t : "face or fingerprint recognition"
                    },
                    knownBiometricHumanReadableName: function() {
                        switch (this.biometricMainSupportedType) {
                            case i.a.FACE_ID:
                                return "Face ID";
                            case i.a.TOUCH_ID:
                                return "Touch ID"
                        }
                        return null
                    }
                },
                methods: {
                    biometricInit: function() {
                        return r.a.dispatch("auth/biometric/init")
                    }
                }
            }
        }, ,
        function(t, e) {
            function n(e) {
                return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, n(e)
            }
            t.exports = n
        },
        function(t, e, n) {
            var r = n(964),
                i = n(965),
                o = n(893),
                s = n(966);
            t.exports = function(t) {
                return r(t) || i(t) || o(t) || s()
            }
        },
        function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    class: this.classes
                }, [e(this.icon, {
                    tag: "component"
                })], 1)
            };
            r._withStripped = !0;
            var i = n(2),
                o = n.n(i),
                s = n(836),
                a = {
                    injectStyles: [n.n(s).a],
                    name: "UpCIconV2",
                    props: {
                        icon: {
                            default: null,
                            type: [Object, Function]
                        },
                        size: {
                            default: "",
                            type: String,
                            validator: function(t) {
                                return ["", "xs", "sm", "md", "lg"].includes(t)
                            }
                        }
                    },
                    computed: {
                        classes: function() {
                            return o()({
                                "up-icon": !0
                            }, this.size, this.size)
                        }
                    }
                },
                u = n(0),
                c = Object(u.a)(a, r, [], !1, null, null, null);
            c.options.__file = "node_modules/@upwork/vue-components-core/src/icon-v2/icon.vue";
            e.
            default = c.exports
        }, , , ,
        function(t, e, n) {},
        function(t, e, n) {
            "use strict";
            (function(t) {
                var n = function() {
                        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                        var r = Array(t),
                            i = 0;
                        for (e = 0; e < n; e++)
                            for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                        return r
                    },
                    r = {
                        defaults: {},
                        errorType: null,
                        polyfills: {
                            fetch: null,
                            FormData: null,
                            URLSearchParams: null,
                            performance: null,
                            PerformanceObserver: null,
                            AbortController: null
                        },
                        polyfill: function(e, r) {
                            for (var i = void 0 === r ? {} : r, o = i.doThrow, s = void 0 === o || o, a = i.instance, u = void 0 !== a && a, c = [], l = 2; l < arguments.length; l++) c[l - 2] = arguments[l];
                            var d = this.polyfills[e] || ("undefined" != typeof self ? self[e] : null) || (void 0 !== t ? t[e] : null);
                            if (s && !d) throw new Error(e + " is not defined");
                            return u && d ? new(d.bind.apply(d, n([void 0], c))) : d
                        }
                    };
                e.a = r
            }).call(this, n(768))
        },
        function(t, e, n) {
            "use strict";
            var r = n(999),
                i = n(904),
                o = n(1019),
                s = n(721),
                a = n(907),
                u = n(1020),
                c = n(1023),
                l = n(900);
            r({
                target: "Promise",
                proto: !0,
                real: !0,
                forced: !!o && s((function() {
                    o.prototype.
                    finally.call({
                        then: function() {}
                    }, (function() {}))
                }))
            }, {
                finally: function(t) {
                    var e = u(this, a("Promise")),
                        n = "function" == typeof t;
                    return this.then(n ? function(n) {
                        return c(e, t()).then((function() {
                            return n
                        }))
                    } : t, n ? function(n) {
                        return c(e, t()).then((function() {
                            throw n
                        }))
                    } : t)
                }
            }), i || "function" != typeof o || o.prototype.
            finally || l(o.prototype, "finally", a("Promise").prototype.finally)
        }, ,
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-password"
        },
        function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t) {
                    var n = t[e];
                    return n || r(t.$parent, e)
                }
            }
            e.a = {
                domId: function(t, e) {
                    var n = r(t.$parent, "domId");
                    return n ? n + "_" + e : e
                },
                domName: function(t, e) {
                    var n = r(t.$parent, "domName");
                    return n ? n + "[" + e + "]" : e
                },
                formId: function(t) {
                    return r(t.$parent, "formId")
                }
            }
        }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        function(t, e, n) {
            "use strict";
            var r, i = n(35),
                o = n.n(i),
                s = {};
            e.a = {
                showAlert: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    this.post("up/dialogs/v1/ALERT", Object.assign({
                        title: t,
                        message: e,
                        isDismissible: !0
                    }, n))
                },
                post: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this.init();
                    if (!n) return Promise.resolve({});
                    e.id || (e.id = "a".concat(Date.now(), "_").concat(Math.round(1e4 * Math.random()))), "object" !== o()(t) && (t = {
                        type: t,
                        payload: e
                    }), r || (r = !0, this.onMessage((function(t) {
                        var e, n = null == t || null === (e = t.payload) || void 0 === e ? void 0 : e.id,
                            r = s[n];
                        r && (r(t), delete s[n])
                    })));
                    var i = new Promise((function(t, n) {
                        s[e.id] = function(e) {
                            if ("/events/SUCCESS" === ((null == e ? void 0 : e.type) || "").substr(-"/events/SUCCESS".length)) return t(e);
                            n(e)
                        }
                    }));
                    return n.postMessage(window.__ANDROID_BRIDGE__ ? JSON.stringify(t) : t), i
                },
                onMessage: function(t) {
                    if (window.__NATIVE_BRIDGE__ || (window.__NATIVE_BRIDGE__ = this.init()), window.__NATIVE_BRIDGE__) {
                        var e = window.__NATIVE_BRIDGE__.onMessage;
                        window.__NATIVE_BRIDGE__.onMessage = function(n) {
                            e && e(n), t(n)
                        }
                    }
                },
                init: function() {
                    if ("undefined" != typeof window) return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.__IOS_BRIDGE__ ? window.webkit.messageHandlers.__IOS_BRIDGE__ : window.__ANDROID_BRIDGE__
                }
            }
        },
        function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                if (void 0 === n && (n = {}), !e.codes) {
                    e.codes = {};
                    for (var r = 0; r < e.chars.length; ++r) e.codes[e.chars[r]] = r
                }
                if (!n.loose && t.length * e.bits & 7) throw new SyntaxError("Invalid padding");
                for (var i = t.length;
                    "=" === t[i - 1];)
                    if (--i, !(n.loose || (t.length - i) * e.bits & 7)) throw new SyntaxError("Invalid padding");
                for (var o = new(n.out || Uint8Array)(i * e.bits / 8 | 0), s = 0, a = 0, u = 0, c = 0; c < i; ++c) {
                    var l = e.codes[t[c]];
                    if (void 0 === l) throw new SyntaxError("Invalid character " + t[c]);
                    a = a << e.bits | l, (s += e.bits) >= 8 && (s -= 8, o[u++] = 255 & a >> s)
                }
                if (s >= e.bits || 255 & a << 8 - s) throw new SyntaxError("Unexpected end of data");
                return o
            }

            function i(t, e, n) {
                void 0 === n && (n = {});
                for (var r = n.pad, i = void 0 === r || r, o = (1 << e.bits) - 1, s = "", a = 0, u = 0, c = 0; c < t.length; ++c)
                    for (u = u << 8 | 255 & t[c], a += 8; a > e.bits;) a -= e.bits, s += e.chars[o & u >> a];
                if (a && (s += e.chars[o & u << e.bits - a]), i)
                    for (; s.length * e.bits & 7;) s += "=";
                return s
            }
            var o = {
                    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bits: 6
                },
                s = function(t, e) {
                    return r(t, o, e)
                },
                a = function(t, e) {
                    return i(t, o, e)
                };
            e.a = {
                parse: function(t) {
                    try {
                        return s(t)
                    } catch (n) {
                        var e = t.length % 4;
                        if (1 === e) throw n;
                        return s(t + (2 === e ? "==" : "="))
                    }
                },
                stringify: function(t) {
                    return a(t)
                }
            }
        }, , ,
        function(t, e, n) {
            "use strict";
            e.a = {
                SEND: 1,
                VALIDATE: 2,
                EXPIRED: 4
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                computed: {
                    domId: function() {
                        return this.$parent ? this.$parent.domId : ""
                    },
                    domName: function() {
                        return this.$parent ? this.$parent.domName : ""
                    },
                    formId: function() {
                        return this.$parent && this.$parent.formId
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(656);
            e.a = {
                mixins: [r.a],
                props: {
                    message: {
                        type: String,
                        default: ""
                    },
                    selector: {
                        type: String,
                        required: !0
                    },
                    name: {
                        type: String,
                        default: "regexp"
                    },
                    inverse: Boolean
                },
                methods: {
                    validate: function(t) {
                        var e = this.selector,
                            n = "",
                            r = e.lastIndexOf("/");
                        "/" === e.substr(0, 1) && r > 0 && (n = (e = e.substr(1, r - 1)).substr(r + 1));
                        var i = new RegExp(e, n).test(t);
                        return this.inverse && (i = !i), i ? Promise.resolve() : Promise.reject()
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(656);
            e.a = {
                mixins: [r.a],
                props: {
                    message: {
                        type: String,
                        required: !0
                    },
                    name: {
                        type: String,
                        required: !0
                    },
                    callback: {
                        type: Function,
                        required: !0
                    }
                },
                methods: {
                    validate: function(t) {
                        return this.callback(t)
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1);
            e.a = {
                computed: {
                    email: function() {
                        return r.a.getters["auth/challenge/email/id"] || r.a.getters["auth/user/info"].email
                    }
                },
                created: function() {
                    r.a.getters["auth/challenge/email/id"] || r.a.dispatch("auth/user/initInfo")
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1);
            e.a = {
                computed: {
                    hasOtpChallenge: function() {
                        return r.a.getters["auth/challenge/hasOtpChallenge"]
                    },
                    hasTotp: function() {
                        return !!r.a.getters["auth/challenge/totp/uid"]
                    },
                    hasPhone: function() {
                        return !!r.a.getters["auth/challenge/phone/uid"]
                    },
                    hasSecurityQuestion: function() {
                        return !!r.a.getters["auth/securityQuestion/securityQuestion"]
                    },
                    hasMobilePush: function() {
                        return !!r.a.getters["auth/challenge/push/uid"]
                    },
                    hasFido2: function() {
                        return !!r.a.getters["auth/challenge/fido2/uid"]
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("input-group", {
                    attrs: {
                        id: t.id,
                        required: t.required
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function(e) {
                            return [n("checkbox", {
                                staticClass: "mb-0 auth-checkbox",
                                attrs: {
                                    disabled: t.disabled,
                                    "has-error": e.hasError
                                },
                                nativeOn: {
                                    click: function(e) {
                                        return t.changeEvent()
                                    }
                                }
                            }, [n("input", {
                                ref: "input",
                                attrs: {
                                    slot: "input",
                                    type: t.type,
                                    id: t.domId,
                                    name: t.domName
                                },
                                domProps: {
                                    value: t.val,
                                    checked: t.checked
                                },
                                slot: "input"
                            }), t._v(" "), t._t("default", null, {
                                slot: "label"
                            })], 2)]
                        }
                    }], null, !0)
                })
            };
            r._withStripped = !0;
            var i = n(668),
                o = n(657),
                s = n(832),
                a = n(68),
                u = (n(13), {
                    mixins: [o.a],
                    props: {
                        type: {
                            default: "checkbox"
                        },
                        name: String,
                        checked: {},
                        disabled: Boolean,
                        val: {
                            default: !0
                        }
                    },
                    computed: {
                        domName: function() {
                            return a.a.domName(this, this.name || this.id)
                        }
                    },
                    mounted: function() {
                        void 0 !== this.checked && this.forceChecked(this.checked)
                    },
                    methods: {
                        changeEvent: function() {
                            var t = this;
                            clearTimeout(this.changeEventTimeout), this.changeEventTimeout = setTimeout((function() {
                                var e = t.isChecked();
                                t.forceChecked(e), t.$emit(e ? "manually-checked" : "manually-unchecked")
                            }), 300)
                        },
                        isChecked: function() {
                            return this.$refs.input.checked
                        },
                        getValue: function() {
                            return this.isRadio() && !this.isChecked() ? void 0 : this.value
                        },
                        forceChecked: function(t) {
                            this.$refs.input.checked = t, this.value = t ? this.val : !!this.isRadio() && void 0
                        },
                        isRadio: function() {
                            return "radio" === this.type
                        },
                        focus: function() {
                            var t = this.$el.querySelector("label");
                            t && t.focus()
                        }
                    },
                    watch: {
                        checked: function(t) {
                            this.forceChecked(t)
                        },
                        value: function(t) {
                            !0 === t && (this.$refs.input.checked = !0)
                        }
                    },
                    components: {
                        InputGroup: i.a,
                        Checkbox: s.a
                    }
                }),
                c = (n(983), n(0)),
                l = Object(c.a)(u, r, [], !1, null, "47c8d48e", null);
            l.options.__file = "node_modules/@upwork/auth-common/components/inputs/checkbox.vue";
            e.a = l.exports
        },
        function(t, e) {
            t.exports = function(t) {
                if (null == t) throw new TypeError("Cannot destructure undefined")
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(729),
                i = n(835),
                o = n(730);
            e.a = {
                reset: r.a,
                init: i.a,
                thankYou: "/ab/account-security/reset-security-question/thank-you",
                trouble: "/ab/account-security/reset-security-question/trouble",
                success: "/ab/account-security/reset-security-question/success",
                expired: "/ab/account-security/reset-security-question/expired",
                sent: o.a
            }
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.communicationProtocol = {
                inited: !1,
                listeners: {},
                init: function() {
                    var t = this;
                    if (!this.inited) {
                        this.inited = !0, this.iosBridge = window.webkit && window.webkit.messageHandlers.__IOS_BRIDGE__, this.androidBridge = window.__ANDROID_BRIDGE__;
                        var e = window.__NATIVE_BRIDGE__ && window.__NATIVE_BRIDGE__.onMessage;
                        window.__NATIVE_BRIDGE__ || (window.__NATIVE_BRIDGE__ = this.iosBridge || this.androidBridge), window.__NATIVE_BRIDGE__ && (window.__NATIVE_BRIDGE__.onMessage = function(n) {
                            e && e(n), t.onMessage(n)
                        })
                    }
                },
                on: function(t, e) {
                    this.init(), this.listeners[t] = this.listeners[t] || [], this.listeners[t].push(e)
                },
                off: function(t) {
                    delete this.listeners[t]
                },
                postMessage: function(t) {
                    this.init(), this.iosBridge ? this.iosBridge.postMessage(t) : this.androidBridge && this.androidBridge.postMessage(JSON.stringify(t))
                },
                onMessage: function(t) {
                    (this.listeners[t.type] || []).forEach((function(e) {
                        return e(t.payload)
                    }))
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(20),
                i = n(834).a,
                o = n(23),
                s = {},
                a = 0;
            e.a = function(t, e, n) {
                var u = s[t];
                return u || (u = Object(r.a)(t + "?" + (new Date).getTime() + ++a, [i(), Object(o.a)(e)]).get().res().catch((function() {
                    delete s[t]
                })).finally((function() {
                    n || delete s[t]
                })), s[t] = u, u)
            }
        },
        function(t, e, n) {
            var r = n(35),
                i = n(973);
            t.exports = function(t, e) {
                return !e || "object" !== r(e) && "function" != typeof e ? i(t) : e
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1),
                i = n(663);
            e.a = {
                mixins: [i.a],
                props: {
                    forInput: String,
                    context: String,
                    message: String,
                    enabled: {
                        type: Boolean,
                        default: !0
                    }
                },
                created: function() {
                    r.a.dispatch("auth/form/registerValidator", this)
                },
                destroyed: function() {
                    r.a.dispatch("auth/form/unregisterValidator", this)
                },
                computed: {
                    inputId: function() {
                        return this.forInput || this.proposedInputId
                    }
                },
                data: function() {
                    return {
                        proposedInputId: ""
                    }
                },
                methods: {
                    validate: function(t) {
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return Promise.resolve()
                    },
                    proposeInputId: function(t) {
                        this.proposedInputId = t
                    }
                },
                render: function(t) {
                    return t()
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(663),
                i = n(1);
            e.a = {
                mixins: [r.a],
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    inputClass: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    },
                    required: {
                        type: Boolean,
                        default: !0
                    },
                    defaultValue: {},
                    valueConverter: Function,
                    storeValue: Boolean
                },
                data: function() {
                    return {
                        internalValue: void 0
                    }
                },
                computed: {
                    storageKey: function() {
                        return "auth." + this.formId + "." + this.id
                    },
                    hasLabel: function() {
                        return !!this.$slots.
                        default
                    },
                    value: {
                        get: function() {
                            return this.internalValue
                        },
                        set: function(t) {
                            this.internalValue = t
                        }
                    },
                    label: function() {
                        if (this.ariaLabel) return this.ariaLabel;
                        var t = this.$slots.
                        default;
                        return (t && t[0] && t[0].text ? t[0].text.trim() : "") || this.placeholder
                    }
                },
                created: function() {
                    this.isRegistered = i.a.dispatch("auth/form/registerInput", this)
                },
                mounted: function() {
                    if (this.isRegistered) {
                        if (this.storeValue) try {
                            this.value = JSON.parse(localStorage.getItem(this.storageKey))
                        } catch (t) {}
                        void 0 !== this.value && null !== this.value || void 0 === this.defaultValue || (this.value = this.defaultValue, this.$emit("input", this.value))
                    }
                },
                destroyed: function() {
                    i.a.dispatch("auth/form/unregisterInput", this)
                },
                methods: {
                    clear: function() {
                        this.value = void 0
                    },
                    focus: function() {}
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(874);
            e.a = function(t) {
                return {
                    created: function() {
                        this.bc = new r.a, this.changeContext(t)
                    },
                    methods: {
                        changeContext: function(t) {
                            this.bc.changeContext(t)
                        }
                    }
                }
            }
        },
        function(t, e, n) {
            (function(e) {
                var r = n(35),
                    i = function(t) {
                        return t && t.Math == Math && t
                    };
                t.exports = i("object" == ("undefined" == typeof globalThis ? "undefined" : r(globalThis)) && globalThis) || i("object" == ("undefined" == typeof window ? "undefined" : r(window)) && window) || i("object" == ("undefined" == typeof self ? "undefined" : r(self)) && self) || i("object" == (void 0 === e ? "undefined" : r(e)) && e) || Function("return this")()
            }).call(this, n(768))
        },
        function(t, e, n) {
            "use strict";
            var r = n(35),
                i = n.n(r),
                o = function() {
                    return (o = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                s = function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                        i = 0;
                    for (e = 0; e < n; e++)
                        for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                    return r
                },
                a = function t(e, n, r) {
                    if (void 0 === r && (r = !1), !e || !n || "object" !== i()(e) || "object" !== i()(n)) return e;
                    var a = o({}, e);
                    for (var u in n) n.hasOwnProperty(u) && (n[u] instanceof Array && e[u] instanceof Array ? a[u] = r ? s(e[u], n[u]) : n[u] : "object" === i()(n[u]) && "object" === i()(e[u]) ? a[u] = t(e[u], n[u], r) : a[u] = n[u]);
                    return a
                },
                u = n(64),
                c = function(t, e, n, r) {
                    if (!t.getEntriesByName) return !1;
                    var i = t.getEntriesByName(e);
                    return !!(i && i.length > 0) && (n(i.reverse()[0]), r.clearMeasures && r.clearMeasures(e), l.callbacks.delete(e), l.callbacks.size < 1 && (l.observer.disconnect(), r.clearResourceTimings && r.clearResourceTimings()), !0)
                },
                l = {
                    callbacks: new Map,
                    observer: null,
                    observe: function(t, e) {
                        if (t && e) {
                            var n = u.a.polyfill("performance", {
                                doThrow: !1
                            });
                            (function(t, e) {
                                return !l.observer && t && e && (l.observer = new e((function(e) {
                                    l.callbacks.forEach((function(n, r) {
                                        c(e, r, n, t)
                                    }))
                                })), t.clearResourceTimings && t.clearResourceTimings()), l.observer
                            })(n, u.a.polyfill("PerformanceObserver", {
                                doThrow: !1
                            })) && (c(n, t, e, n) || (l.callbacks.size < 1 && l.observer.observe({
                                entryTypes: ["resource", "measure"]
                            }), l.callbacks.set(t, e)))
                        }
                    }
                },
                d = l,
                f = function(t) {
                    this.error = t
                },
                h = function() {
                    return (h = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                p = function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                        i = 0;
                    for (e = 0; e < n; e++)
                        for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                    return r
                },
                m = function() {
                    function t(t, e, n, r, i, o) {
                        void 0 === n && (n = new Map), void 0 === r && (r = []), void 0 === i && (i = []), void 0 === o && (o = []), this._url = t, this._options = e, this._catchers = n, this._resolvers = r, this._middlewares = i, this._deferredChain = o
                    }
                    return t.factory = function(e, n) {
                        return void 0 === e && (e = ""), void 0 === n && (n = {}), new t(e, n)
                    }, t.prototype.selfFactory = function(e) {
                        var n = void 0 === e ? {} : e,
                            r = n.url,
                            i = void 0 === r ? this._url : r,
                            o = n.options,
                            s = void 0 === o ? this._options : o,
                            a = n.catchers,
                            u = void 0 === a ? this._catchers : a,
                            c = n.resolvers,
                            l = void 0 === c ? this._resolvers : c,
                            d = n.middlewares,
                            f = void 0 === d ? this._middlewares : d,
                            m = n.deferredChain,
                            v = void 0 === m ? this._deferredChain : m;
                        return new t(i, h({}, s), new Map(u), p(l), p(f), p(v))
                    }, t.prototype.defaults = function(t, e) {
                        return void 0 === e && (e = !1), u.a.defaults = e ? a(u.a.defaults, t) : t, this
                    }, t.prototype.errorType = function(t) {
                        return u.a.errorType = t, this
                    }, t.prototype.polyfills = function(t) {
                        return u.a.polyfills = h(h({}, u.a.polyfills), t), this
                    }, t.prototype.url = function(t, e) {
                        if (void 0 === e && (e = !1), e) return this.selfFactory({
                            url: t
                        });
                        var n = this._url.split("?");
                        return this.selfFactory({
                            url: n.length > 1 ? n[0] + t + "?" + n[1] : this._url + t
                        })
                    }, t.prototype.options = function(t, e) {
                        return void 0 === e && (e = !0), this.selfFactory({
                            options: e ? a(this._options, t) : t
                        })
                    }, t.prototype.query = function(t, e) {
                        return void 0 === e && (e = !1), this.selfFactory({
                            url: v(this._url, t, e)
                        })
                    }, t.prototype.headers = function(t) {
                        return this.selfFactory({
                            options: a(this._options, {
                                headers: t || {}
                            })
                        })
                    }, t.prototype.accept = function(t) {
                        return this.headers({
                            Accept: t
                        })
                    }, t.prototype.content = function(t) {
                        return this.headers({
                            "Content-Type": t
                        })
                    }, t.prototype.auth = function(t) {
                        return this.headers({
                            Authorization: t
                        })
                    }, t.prototype.catcher = function(t, e) {
                        var n = new Map(this._catchers);
                        return n.set(t, e), this.selfFactory({
                            catchers: n
                        })
                    }, t.prototype.signal = function(t) {
                        return this.selfFactory({
                            options: h(h({}, this._options), {
                                signal: t.signal
                            })
                        })
                    }, t.prototype.resolve = function(t, e) {
                        return void 0 === e && (e = !1), this.selfFactory({
                            resolvers: e ? [t] : p(this._resolvers, [t])
                        })
                    }, t.prototype.defer = function(t, e) {
                        return void 0 === e && (e = !1), this.selfFactory({
                            deferredChain: e ? [t] : p(this._deferredChain, [t])
                        })
                    }, t.prototype.middlewares = function(t, e) {
                        return void 0 === e && (e = !1), this.selfFactory({
                            middlewares: e ? t : p(this._middlewares, t)
                        })
                    }, t.prototype.method = function(t, e, n) {
                        void 0 === e && (e = {}), void 0 === n && (n = null);
                        var r = n ? "object" === i()(n) ? this.json(n) : this.body(n) : this;
                        return function(t) {
                            var e = t._url,
                                n = t._catchers,
                                r = t._resolvers,
                                i = t._middlewares,
                                o = t._options,
                                s = new Map(n),
                                c = a(u.a.defaults, o),
                                l = u.a.polyfill("AbortController", {
                                    doThrow: !1,
                                    instance: !0
                                });
                            !c.signal && l && (c.signal = l.signal);
                            var h = {
                                    ref: null,
                                    clear: function() {
                                        h.ref && (clearTimeout(h.ref), h.ref = null)
                                    }
                                },
                                p = function(t) {
                                    return function(e) {
                                        return 0 === t.length ? e : 1 === t.length ? t[0](e) : t.reduceRight((function(n, r, i) {
                                            return i === t.length - 2 ? r(n(e)) : r(n)
                                        }))
                                    }
                                }(i)(u.a.polyfill("fetch"))(e, c),
                                m = p.
                            catch((function(t) {
                                    throw new f(t)
                                })).then((function(t) {
                                    return h.clear(), t.ok ? t : t[u.a.errorType || "text"]().then((function(e) {
                                        var n = new Error(e);
                                        throw n[u.a.errorType || "text"] = e, n.status = t.status, n.response = t, n
                                    }))
                                })),
                                v = function(e) {
                                    return e.
                                    catch((function(e) {
                                        h.clear();
                                        var n = e instanceof f ? e.error : e;
                                        if (e instanceof f && s.has("__fromFetch")) return s.get("__fromFetch")(n, t);
                                        if (s.has(n.status)) return s.get(n.status)(n, t);
                                        if (s.has(n.name)) return s.get(n.name)(n, t);
                                        throw n
                                    }))
                                }, g = function(t) {
                                    return function(e) {
                                        return v(t ? m.then((function(e) {
                                            return e && e[t]()
                                        })).then((function(t) {
                                            return e ? e(t) : t
                                        })) : m.then((function(t) {
                                            return e ? e(t) : t
                                        })))
                                    }
                                }, b = {
                                    res: g(null),
                                    json: g("json"),
                                    blob: g("blob"),
                                    formData: g("formData"),
                                    arrayBuffer: g("arrayBuffer"),
                                    text: g("text"),
                                    perfs: function(t) {
                                        return p.then((function(e) {
                                            return d.observe(e.url, t)
                                        })), b
                                    },
                                    setTimeout: function(t) {
                                        function e(e, n) {
                                            return t.apply(this, arguments)
                                        }
                                        return e.toString = function() {
                                            return t.toString()
                                        }, e
                                    }((function(t, e) {
                                        return void 0 === e && (e = l), h.clear(), h.ref = setTimeout((function() {
                                            return e.abort()
                                        }), t), b
                                    })),
                                    controller: function() {
                                        return [l, b]
                                    },
                                    error: function(t, e) {
                                        return s.set(t, e), b
                                    },
                                    badRequest: function(t) {
                                        return b.error(400, t)
                                    },
                                    unauthorized: function(t) {
                                        return b.error(401, t)
                                    },
                                    forbidden: function(t) {
                                        return b.error(403, t)
                                    },
                                    notFound: function(t) {
                                        return b.error(404, t)
                                    },
                                    timeout: function(t) {
                                        return b.error(408, t)
                                    },
                                    internalError: function(t) {
                                        return b.error(500, t)
                                    },
                                    fetchError: function(t) {
                                        return b.error("__fromFetch", t)
                                    },
                                    onAbort: function(t) {
                                        return b.error("AbortError", t)
                                    }
                                };
                            return r.reduce((function(e, n) {
                                return n(e, t)
                            }), b)
                        }((r = r.options(h(h({}, e), {
                            method: t
                        })))._deferredChain.reduce((function(t, e) {
                            return e(t, t._url, t._options)
                        }), r))
                    }, t.prototype.get = function(t) {
                        return this.method("GET", t)
                    }, t.prototype.delete = function(t) {
                        return this.method("DELETE", t)
                    }, t.prototype.put = function(t, e) {
                        return this.method("PUT", e, t)
                    }, t.prototype.post = function(t, e) {
                        return this.method("POST", e, t)
                    }, t.prototype.patch = function(t, e) {
                        return this.method("PATCH", e, t)
                    }, t.prototype.head = function(t) {
                        return this.method("HEAD", t)
                    }, t.prototype.opts = function(t) {
                        return this.method("OPTIONS", t)
                    }, t.prototype.replay = function(t) {
                        return this.method(this._options.method, t)
                    }, t.prototype.body = function(t) {
                        return this.selfFactory({
                            options: h(h({}, this._options), {
                                body: t
                            })
                        })
                    }, t.prototype.json = function(t) {
                        return this.content("application/json").body(JSON.stringify(t))
                    }, t.prototype.formData = function(t, e) {
                        return void 0 === e && (e = !1), this.body(function t(e, n, r, o) {
                            void 0 === n && (n = !1);
                            void 0 === r && (r = u.a.polyfill("FormData", {
                                instance: !0
                            }));
                            void 0 === o && (o = []);
                            return Object.entries(e).forEach((function(e) {
                                var s = e[0],
                                    a = e[1],
                                    u = o.reduce((function(t, e) {
                                        return t ? t + "[" + e + "]" : e
                                    }), null);
                                if (u = u ? u + "[" + s + "]" : s, a instanceof Array)
                                    for (var c = 0, l = a; c < l.length; c++) {
                                        var d = l[c];
                                        r.append(u + "[]", d)
                                    } else !n || "object" !== i()(a) || n instanceof Array && n.includes(s) ? r.append(u, a) : null !== a && t(a, n, r, p(o, [s]))
                            })), r
                        }(t, e))
                    }, t.prototype.formUrl = function(t) {
                        return this.body("string" == typeof t ? t : (e = t, Object.keys(e).map((function(t) {
                            var n = e[t];
                            return n instanceof Array ? n.map((function(e) {
                                return g(t, e)
                            })).join("&") : g(t, n)
                        })).join("&"))).content("application/x-www-form-urlencoded");
                        var e
                    }, t
                }(),
                v = function(t, e, n) {
                    var r;
                    if ("string" == typeof e) r = e;
                    else {
                        var i = u.a.polyfill("URLSearchParams", {
                            instance: !0
                        });
                        for (var o in e)
                            if (e[o] instanceof Array)
                                for (var s = 0, a = e[o]; s < a.length; s++) {
                                    var c = a[s];
                                    i.append(o, c)
                                } else i.append(o, e[o]);
                        r = i.toString()
                    }
                    var l = t.split("?");
                    return n || l.length < 2 ? l[0] + "?" + r : t + "&" + r
                };

            function g(t, e) {
                return encodeURIComponent(t) + "=" + encodeURIComponent("object" === i()(e) ? JSON.stringify(e) : "" + e)
            }
            var b = m.factory;
            b.
            default = m.factory;
            e.a = b
        },
        function(t, e, n) {}, ,
        function(t, e, n) {
            "use strict";
            var r = n(68);
            e.a = {
                computed: {
                    domId: function() {
                        return r.a.domId(this, this.id)
                    },
                    domName: function() {
                        return r.a.domName(this, this.id)
                    },
                    formId: function() {
                        return r.a.formId(this)
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                recoveryHelp: "recoveryHelp",
                selfHelpClose: "selfHelpClose"
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(24),
                i = n.n(r);

            function o(t) {
                var e = (new Date).getTime(),
                    n = {};
                try {
                    n = JSON.parse(localStorage.getItem("otp-sent-time") || "{}")
                } catch (t) {}
                var r = (n[t] || 0) - e;
                r < 0 && (r = 0, n[t] = e + 3e4), Object.entries(n).forEach((function(t) {
                    var r = i()(t, 2),
                        o = r[0];
                    r[1] < e && delete n[o]
                }));
                try {
                    localStorage.setItem("otp-sent-time", JSON.stringify(n))
                } catch (t) {}
                return r
            }
            e.a = {
                props: {
                    challengeUid: String,
                    initResendCountdownOnLoad: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        secondsLeftToSend: 0
                    }
                },
                mounted: function() {
                    this.initResendCountdownOnLoad && o(this.uid)
                },
                computed: {
                    uid: function() {
                        return this.challengeUid
                    }
                },
                methods: {
                    isResendAllowedOrRunCountdown: function() {
                        var t = o(this.uid);
                        return 0 !== t ? (this.setSendCountdown(t), !1) : (this.$emit("resend"), !0)
                    },
                    setSendCountdown: function(t) {
                        var e = this;
                        this.secondsLeftToSend = Math.round(t / 1e3);
                        var n = (new Date).getTime() + t,
                            r = setInterval((function() {
                                var t = Math.round((n - (new Date).getTime()) / 1e3);
                                t <= 0 && (t = 0, clearInterval(r)), e.secondsLeftToSend = t
                            }), 500)
                    }
                }
            }
        }, ,
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n(t.formContainer, {
                    tag: "component",
                    attrs: {
                        id: t.id,
                        name: t.name
                    }
                }, [n("div", {
                    staticClass: "text-center align-items-center"
                }, [n("up-c-illustration-v2", {
                    attrs: {
                        illustration: t.illustration
                    }
                }), t._v(" "), n("h2", {
                    staticClass: "my-20"
                }, [t._t("title", [t._v("Confirm that it's you")])], 2)], 1), t._v(" "), n("div", {
                    directives: [{
                        name: "aria-live",
                        rawName: "v-aria-live"
                    }]
                }, [t._t("default")], 2), t._v(" "), t.showInput ? n("div", {
                    staticClass: "mb-10 text-left"
                }, [n(t.otpInput, {
                    tag: "component",
                    attrs: {
                        id: "otp",
                        limit: t.otpCodeLength
                    }
                }, [t.notAvailable ? n("div", {
                    attrs: {
                        slot: "inline-alert"
                    },
                    slot: "inline-alert"
                }, [n("div", {
                    staticClass: "up-form-message up-form-message-error pl-0 mb-5"
                }, [t._v("\n                This method is no longer available. "), n("span", {
                    staticClass: "try-another-method"
                }, [t._v("Try another method.")])])]) : t.allowResend ? n("div", {
                    staticClass: "mt-10 text-left",
                    attrs: {
                        slot: "after-alert-hint"
                    },
                    slot: "after-alert-hint"
                }, [n("resend-link", {
                    directives: [{
                        name: "click-event",
                        rawName: "v-click-event",
                        value: t.resendOtpEvent,
                        expression: "resendOtpEvent"
                    }],
                    attrs: {
                        "show-label": !1,
                        "challenge-uid": t.uid,
                        "send-in-progress": t.sendInProgress
                    },
                    on: {
                        resend: t.onResend
                    }
                }, [n("span", {
                    attrs: {
                        slot: "link"
                    },
                    slot: "link"
                }, [t._v("Resend code")])])], 1) : t._e()])], 1) : n("hidden", {
                    attrs: {
                        id: "otp",
                        val: "000000"
                    }
                }), t._v(" "), t._t("extra-actions"), t._v(" "), t.showRememberDevice ? n("div", {
                    staticClass: "text-left"
                }, [n("checkbox", {
                    attrs: {
                        id: "remember",
                        required: !1,
                        "store-value": !0,
                        "default-value": !0
                    }
                }, [t._v("\n      Remember this device\n    ")]), t._v(" "), n("div", {
                    staticClass: "d-none-modal pb-30"
                })], 1) : t._e(), t._v(" "), n("resend-message", {
                    staticClass: "text-left mb-10",
                    attrs: {
                        "seconds-left-to-send": t.secondsLeftToSend
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "uid",
                        val: t.uid
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "name",
                        val: t.challengeName
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "type",
                        val: t.type
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "limitExceeded",
                        val: t.limitExceeded
                    }
                })], 2)
            };
            r._withStripped = !0;
            var i = n(47),
                o = n(650),
                s = n(38),
                a = n(27),
                u = n(720),
                c = n(10),
                l = n(665),
                d = n(644),
                f = n(42),
                h = n(744),
                p = n(669),
                m = n(68),
                v = n(706),
                g = n(1),
                b = n(733),
                y = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("a-input", {
                        attrs: {
                            id: t.id,
                            type: "tel",
                            maxlength: t.limit,
                            placeholder: "Enter 6-digit code here",
                            "aria-label": "code"
                        },
                        on: {
                            input: function(e) {
                                return t.$emit("input", t.value)
                            }
                        },
                        model: {
                            value: t.value,
                            callback: function(e) {
                                t.value = e
                            },
                            expression: "value"
                        }
                    }, [t._l(t.$slots, (function(e, n) {
                        return t._t(n, null, {
                            slot: n
                        })
                    }))], 2), t._v(" "), n("code-validator", {
                        attrs: {
                            "for-input": t.id,
                            limit: t.limit
                        }
                    })], 1)
                };
            y._withStripped = !0;
            var w = n(33),
                _ = n(645),
                k = n(704),
                S = {
                    mixins: [_.a],
                    props: {
                        id: {
                            type: String,
                            required: !0
                        },
                        limit: {
                            type: Number,
                            default: 6
                        }
                    },
                    data: function() {
                        return {
                            value: null
                        }
                    },
                    components: {
                        AInput: w.a,
                        CodeValidator: k.a
                    }
                },
                E = n(0),
                x = Object(E.a)(S, y, [], !1, null, null, null);
            x.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/inputs/otp-code.vue";
            var C = x.exports,
                O = n(843),
                I = (n(31), n(781), n(13), n(34), n(63), n(661), {
                    mixins: [c.a, O.a, l.a],
                    props: {
                        id: {
                            type: String,
                            required: !0
                        },
                        name: {
                            type: String,
                            default: "deviceAuthOtp"
                        },
                        resendOnSubmit: Boolean,
                        allowSend: Boolean,
                        allowResend: Boolean,
                        customResend: Boolean,
                        challengeName: {
                            type: String,
                            required: !0
                        },
                        maxValidationTries: {
                            type: Number,
                            default: 0
                        },
                        inputType: {
                            type: String,
                            default: "separate"
                        },
                        action: {
                            type: String,
                            default: "/ab/account-security/device-authorization/check-otp"
                        },
                        sendConfig: {
                            type: Object,
                            default: function() {}
                        },
                        showRememberDevice: {
                            type: Boolean,
                            default: !0
                        },
                        illustration: {
                            type: Function,
                            default: function() {
                                return n.e(2).then(n.bind(null, 72))
                            }
                        },
                        notAvailable: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            otpCodeLength: 6,
                            secondsLeftToSend: 0,
                            resendOtpEvent: "resendOtpEvent"
                        }
                    },
                    computed: {
                        uid: function() {
                            return g.a.getters["auth/challenge/".concat(this.challengeName, "/uid")]
                        },
                        type: function() {
                            return g.a.getters["auth/challenge/".concat(this.challengeName, "/type")]
                        },
                        showInput: function() {
                            return "none" !== this.inputType
                        },
                        otpInput: function() {
                            return "simple" === this.inputType ? C : u.a
                        },
                        responseInterceptors: function() {
                            return [Object(v.a)(this.challengeName, d.a.VALIDATE, this.maxValidationTries)]
                        },
                        limitExceeded: function() {
                            return g.a.getters["auth/challenge/limitExceeded"]
                        },
                        subFormId: function() {
                            return this.id || m.a.formId(this)
                        }
                    },
                    watch: {
                        uid: function(t) {
                            g.a.dispatch("auth/form/setSubmitDisabled", {
                                formId: this.subFormId,
                                disabled: !t
                            })
                        }
                    },
                    mounted: function() {
                        this.uid || g.a.dispatch("auth/form/setSubmitDisabled", {
                            formId: this.subFormId,
                            disabled: !0
                        }), this.allowSend && this.send(this.subFormId, !0)
                    },
                    methods: {
                        onResend: function() {
                            var t = this;
                            (this.customResend ? Promise.resolve() : this.send(this.subFormId)).then((function() {
                                return t.$emit("resend")
                            }))
                        },
                        onValidateResponse: function(t) {
                            return void 0 === t.data.eventCode
                        },
                        onBeforeSubmit: function() {
                            return this.notAvailable ? (g.a.dispatch("auth/challenge/".concat(this.challengeName, "/allowSwitch"), !0), g.a.dispatch("auth/challenge/".concat(this.challengeName, "/markLimit"), d.a.SEND), g.a.dispatch("auth/sensitiveZone/deviceAuthorization/controls/resetBehavior"), Promise.reject()) : this.resendOnSubmit ? ((this.customResend || this.isResendAllowedOrRunCountdown()) && this.onResend(), Promise.reject()) : Promise.resolve()
                        }
                    },
                    directives: {
                        AriaLive: b.a,
                        ClickEvent: s.a
                    },
                    components: {
                        OtpCode: C,
                        OtpCodeSeparate: u.a,
                        Checkbox: o.a,
                        UpCIllustrationV2: f.a,
                        Hidden: a.a,
                        UpCIcon: i.
                        default,
                        ResendLink: h.a,
                        ResendMessage: p.a
                    }
                }),
                A = (n(988), n(989), Object(E.a)(I, r, [], !1, null, "023e0174", null));
            A.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/components/otp-form.vue";
            e.a = A.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "up-form-group",
                    class: t.rawClass
                }, [t._t("default", null, {
                    hasError: t.hasErrors
                }), t._v(" "), t._t("hint"), t._v(" "), t._t("inline-alert", [n("inline-alert", {
                    attrs: {
                        "form-id": t.formId,
                        context: t.id
                    }
                })]), t._v(" "), t._t("after-alert-hint"), t._v(" "), t._t("required", [n("required", {
                    attrs: {
                        enabled: t.required,
                        "for-input": t.id
                    }
                })])], 2)
            };
            r._withStripped = !0;
            var i = n(671),
                o = n(1),
                s = {
                    mixins: [n(656).a],
                    props: {
                        message: {
                            type: String,
                            default: "This field is required"
                        },
                        name: {
                            type: String,
                            default: "required"
                        }
                    },
                    methods: {
                        validate: function(t) {
                            return t || 0 === t ? Promise.resolve() : Promise.reject()
                        }
                    }
                },
                a = n(645),
                u = n(754),
                c = {
                    injectStyles: [n.n(u).a],
                    mixins: [a.a],
                    props: {
                        id: {
                            type: String,
                            required: !0
                        },
                        required: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: {
                        hasErrors: function() {
                            var t = o.a.getters["auth/form/inputAlerts"](this.formId);
                            return 0 !== Object.keys(t[this.id] || {}).length
                        },
                        rawClass: function() {
                            return {
                                "has-error": this.hasErrors
                            }
                        }
                    },
                    components: {
                        InlineAlert: i.a,
                        Required: s
                    }
                },
                l = (n(979), n(0)),
                d = Object(l.a)(c, r, [], !1, null, "17f0650e", null);
            d.options.__file = "node_modules/@upwork/auth-common/components/inputs/group.vue";
            e.a = d.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return 0 !== this.secondsLeftToSend ? e("div", {
                    staticClass: "up-form-message up-form-message-error",
                    attrs: {
                        role: "alert"
                    }
                }, [e("up-c-icon", {
                    attrs: {
                        name: "exclamation-circle"
                    }
                }), this._v("\n    Please wait at least " + this._s(this.secondsLeftToSend) + " seconds before trying again.\n")], 1) : this._e()
            };
            r._withStripped = !0;
            var i = n(47),
                o = {
                    props: {
                        secondsLeftToSend: Number
                    },
                    components: {
                        UpCIcon: i.
                        default
                    }
                },
                s = n(0),
                a = Object(s.a)(o, r, [], !1, null, null, null);
            a.options.__file = "node_modules/@upwork/auth-common/components/resend-message.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("span", [e("span", {
                    staticClass: "phone-bullets"
                }, [this._v("(â—â—â—)Â â—â—â—")]), this._v("Â "), e("span", {
                    staticClass: "auth-phone-number"
                }, [this._v(this._s(this.normalizedPhone))])])
            };
            r._withStripped = !0;
            var i = {
                    props: {
                        phoneNumber: String
                    },
                    computed: {
                        normalizedPhone: function() {
                            return (this.phoneNumber || "").substr(-4)
                        }
                    }
                },
                o = n(0),
                s = Object(o.a)(i, r, [], !1, null, null, null);
            s.options.__file = "node_modules/@upwork/auth-common/components/obfuscated-phone.vue";
            e.a = s.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return this.messageObject ? e("inline-alert", {
                    attrs: {
                        "aria-label": this.ariaLabel,
                        context: this.context
                    }
                }, [e("span", {
                    attrs: {
                        slot: "default"
                    },
                    domProps: {
                        innerHTML: this._s(this.message)
                    },
                    slot: "default"
                })]) : this._e()
            };
            r._withStripped = !0;
            var i = n(1),
                o = n(672),
                s = n(731),
                a = n(34),
                u = n.n(a),
                c = n(13),
                l = n.n(c),
                d = n(781),
                f = {
                    injectStyles: [n.n(d).a, u.a, l.a],
                    mixins: [s.a],
                    props: {
                        formId: String,
                        context: String
                    },
                    computed: {
                        inputAlerts: function() {
                            return i.a.getters["auth/form/inputAlerts"](this.getTargetFormId())
                        },
                        messageObject: function() {
                            return this.inputAlerts[this.context]
                        },
                        message: function() {
                            var t = this.messageObject;
                            if (t) {
                                var e = t[0];
                                return e.message || e
                            }
                            return ""
                        },
                        ariaLabel: function() {
                            return (i.a.getters["auth/form/input"](this.getTargetFormId(), this.context) || {}).label || ""
                        }
                    },
                    components: {
                        InlineAlert: o.a
                    }
                },
                h = n(0),
                p = Object(h.a)(f, r, [], !1, null, null, null);
            p.options.__file = "node_modules/@upwork/auth-common/components/inline-input-alert.vue";
            e.a = p.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "up-form-message up-form-message-error pl-0 mb-5",
                    attrs: {
                        role: "alert",
                        "aria-describedby": this.ariaDescribedby
                    }
                }, [e("div", {
                    staticClass: "d-inline-flex"
                }, [e("up-c-icon", {
                    staticClass: "static-icon-size",
                    attrs: {
                        name: "exclamation-circle"
                    }
                }), this._v(" "), e("div", {
                    staticClass: "d-block",
                    attrs: {
                        id: this.ariaDescribedby
                    }
                }, [this._t("default")], 2)], 1)])
            };
            r._withStripped = !0;
            var i = n(47),
                o = (n(63), {
                    props: {
                        context: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        ariaDescribedby: function() {
                            return "".concat(this.context, "-message")
                        }
                    },
                    components: {
                        UpCIcon: i.
                        default
                    }
                }),
                s = (n(978), n(0)),
                a = Object(s.a)(o, r, [], !1, null, "0467ac48", null);
            a.options.__file = "node_modules/@upwork/auth-common/components/inline-alert.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            e.a = "/signup/home"
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                fix: "fixErrors",
                unexpected: "undefinedError"
            }
        }, , , , , , , , , ,
        function(t, e, n) {
            "use strict";
            var r = n(24),
                i = n.n(r),
                o = {
                    xs: 0,
                    sm: 480,
                    md: 768,
                    lg: 992,
                    xl: 1200
                };

            function s(t, e, n) {
                var r = Object.keys(t).find((function(e) {
                    return t[e].matches
                }));
                if (r) {
                    var i = r,
                        s = Object.keys(o).find((function(t) {
                            return String(o[t]) === r
                        })),
                        a = "xs" === s || "sm" === s,
                        u = !a;
                    n.size = i, n.breakpoint = s, n.sizes = o, n.mobile = a, n.desktop = u, Array.from(e).forEach((function(t) {
                        return t({
                            size: i,
                            breakpoint: s,
                            mobile: a,
                            desktop: u,
                            sizes: o
                        })
                    }))
                }
            }
            var a = {},
                u = new Set,
                c = !1;

            function l() {
                if (!c) {
                    c = !0;
                    var t = [o.xs, o.sm, o.md, o.lg, o.xl].map((function(t, e, n) {
                            return [t, n[e + 1]]
                        })),
                        e = {};
                    t.forEach((function(t) {
                        var n = i()(t, 2),
                            r = n[0],
                            o = n[1];
                        e[r] = window.matchMedia("screen and (min-width: ".concat(r, "px)").concat(o ? " and (max-width: ".concat(o - 1, "px)") : "")), e[r].addListener((function() {
                            return s(e, u, a)
                        }))
                    })), s(e, u, a)
                }
                return {
                    mediaData: a,
                    listeners: u
                }
            }
            e.a = {
                data: function() {
                    return {
                        breakpoint: null,
                        size: null,
                        sizes: null,
                        mobile: null,
                        desktop: null
                    }
                },
                install: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mq",
                        n = l(),
                        r = n.mediaData,
                        i = n.listeners,
                        o = function(n) {
                            return Object.assign(t[e], n)
                        };
                    i.add(o), o(r), t.$on("hook:beforeDestroy", (function() {
                        return i.delete(o)
                    }))
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(24),
                i = n.n(r);
            e.a = {
                getValueFromNameSelector: function(t) {
                    var e = document.cookie.match(new RegExp("(; *|^)" + t + "\\s*=\\s*([^;]*)"));
                    return e && 3 === e.length ? e[2] : ""
                },
                getPrefix: function() {
                    return this.nuxtPrefix() || this.agatePrefix() || ""
                },
                agatePrefix: function() {
                    if ("undefined" != typeof Applet)
                        for (var t = 0, e = Object.entries({
                                ccstCookieName: "oauth2_global_js_token",
                                csrfTokenCookieName: "XSRF-TOKEN"
                            }); t < e.length; t++) {
                            var n = i()(e[t], 2),
                                r = n[0],
                                o = n[1],
                                s = Applet.getVar(r);
                            if (!s) return;
                            var a = s.indexOf(o);
                            if (-1 === a) return;
                            return s.substr(0, a)
                        }
                },
                nuxtPrefix: function() {
                    var t = window;
                    return ["$nuxt", "$options", "$config", "cookiePrefix"].some((function(e) {
                        if (!(t = t[e])) return !0
                    })), t
                }
            }
        }, ,
        function(t, e, n) {}, , ,
        function(t, e, n) {
            "use strict";
            var r = n(1);
            e.a = function(t) {
                return function(e, n) {
                    if (!n.locked) {
                        var i = e.data.eventCode;
                        i && r.a.dispatch("auth/response/code", {
                            code: i,
                            context: t
                        })
                    }
                    return e
                }
            }
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            }));
            var r = n(18),
                i = n.n(r),
                o = n(19),
                s = n.n(o),
                a = n(1),
                u = n(674),
                c = n(709),
                l = n(708),
                d = function() {
                    function t(e) {
                        var n = this;
                        i()(this, t), this.subscribedActions = [], this.subscribedMutations = [], this.stateCallback = e, this.lastObject = null, this.lastCondition = null, this.unSubscribeAction = a.a.subscribeAction((function(t) {
                            n.applySubscriptions(n.subscribedActions, t)
                        })), this.unSubscribe = a.a.subscribe((function(t) {
                            n.applySubscriptions(n.subscribedMutations, t)
                        }))
                    }
                    return s()(t, [{
                        key: "destroy",
                        value: function() {
                            this.unSubscribeAction(), this.unSubscribe()
                        }
                    }, {
                        key: "condition",
                        value: function(t) {
                            return this.lastCondition = t, this
                        }
                    }, {
                        key: "setLastObject",
                        value: function(t) {
                            return this.lastCondition = null, this.lastObject = t, this
                        }
                    }, {
                        key: "getLastObject",
                        value: function() {
                            return Promise.resolve(this.lastObject)
                        }
                    }, {
                        key: "onAction",
                        value: function(t, e) {
                            return this.pushSubscriptionConfig(this.subscribedActions, t, e), this
                        }
                    }, {
                        key: "onMutation",
                        value: function(t, e) {
                            return this.pushSubscriptionConfig(this.subscribedMutations, t, e), this
                        }
                    }, {
                        key: "pushSubscriptionConfig",
                        value: function(t, e, n) {
                            var r = this.getLastObject();
                            r && t.push({
                                type: e,
                                payloadFilter: n,
                                obj: r,
                                condition: this.lastCondition
                            })
                        }
                    }, {
                        key: "onSubmit",
                        value: function(t) {
                            return this.onAction("auth/form/submit", this.convertFormId(t))
                        }
                    }, {
                        key: "onSuccessSubmit",
                        value: function(t) {
                            return this.onMutation("auth/form/formState", {
                                formId: this.convertFormId(t),
                                status: c.a.SUBMITTED
                            })
                        }
                    }, {
                        key: "onFailedSubmit",
                        value: function(t) {
                            return this.onMutation("auth/form/formState", {
                                formId: this.convertFormId(t),
                                status: c.a.INVALID
                            })
                        }
                    }, {
                        key: "onCancel",
                        value: function(t) {
                            return this.onAction("auth/form/cancel", this.convertFormId(t))
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            return this.onAction("auth/event/click", t)
                        }
                    }, {
                        key: "onEvent",
                        value: function(t, e) {
                            return this.onAction("auth/event/custom", {
                                eventName: t,
                                context: this.convertFormId(e)
                            })
                        }
                    }, {
                        key: "onLogout",
                        value: function(t) {
                            return this.onAction("auth/user/logout", t)
                        }
                    }, {
                        key: "onUnexpectedError",
                        value: function(t) {
                            return this.onAction("auth/alerts/set", {
                                context: t,
                                id: u.a.unexpected
                            })
                        }
                    }, {
                        key: "onValidationError",
                        value: function(t) {
                            return this.onMutation("auth/form/inputAlert", {
                                formId: this.convertFormId(t)
                            })
                        }
                    }, {
                        key: "onResponse",
                        value: function(t, e) {
                            var n = {
                                code: t
                            };
                            return e && (n.context = this.convertFormId(e)), this.onAction("auth/response/code", n)
                        }
                    }, {
                        key: "now",
                        value: function() {
                            return this.getLastObject().then(this.stateCallback), this
                        }
                    }, {
                        key: "applySubscriptions",
                        value: function(t, e) {
                            var n = this;
                            t.forEach((function(t) {
                                n.checkStoreEvent(e, t) && t.obj.then((function(t) {
                                    n.stateCallback(t, e.payload)
                                }))
                            }))
                        }
                    }, {
                        key: "checkStoreEvent",
                        value: function(t, e) {
                            if (e.condition && !e.condition()) return !1;
                            if (t.type !== e.type) return !1;
                            var n = e.payloadFilter;
                            if (!n) return !0;
                            if (t.payload === n) return !0;
                            if (Object.keys(t.payload || {}).length < Object.keys(n).length) return !1;
                            for (var r in n)
                                if (n.hasOwnProperty(r) && t.payload[r] !== n[r]) return !1;
                            return !0
                        }
                    }, {
                        key: "extend",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return t && (l.a.extend(t), Object.assign(t, e)), t
                        }
                    }, {
                        key: "convertFormId",
                        value: function(t) {
                            return t
                        }
                    }]), t
                }()
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                direct: "direct",
                custom: "custom"
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                data: function() {
                    return {
                        view: null,
                        controlsSideClass: "text-right"
                    }
                },
                computed: {
                    submitLabel: function() {
                        return (this.view || {}).submitLabel
                    },
                    cancelLabel: function() {
                        return (this.view || {}).cancelLabel
                    },
                    closeOnSubmit: function() {
                        return (this.view || {}).closeOnSubmit || !1
                    },
                    cancelButton: function() {
                        return (this.view || {}).cancelButton || !1
                    },
                    submitButton: function() {
                        var t = (this.view || {}).submitButton;
                        return void 0 === t || t
                    },
                    formControlsClass: function() {
                        return "side" === (this.view || {}).formControlsAlignment ? this.controlsSideClass : "text-center"
                    },
                    inverseFooter: function() {
                        return (this.view || {}).inverseFooter || !1
                    },
                    title: function() {
                        return (this.view || {}).title || ""
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1);
            e.a = {
                computed: {
                    phoneNumber: function() {
                        var t = window.Applet ? Applet.getVar("phoneNumber") : void 0;
                        return r.a.getters["auth/challenge/phone/id"] || t
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/phone/init"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/push-notification/init"
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("div", {
                    staticClass: "doc-card mb-10"
                }, [n("up-c-popover", {
                    attrs: {
                        size: "lg",
                        trigger: "focus",
                        placement: "right",
                        closeButton: !1
                    }
                }, [n("div", {
                    attrs: {
                        "aria-live": "polite"
                    }
                }, [n("h4", [t._v("Use the following tips to make your password stronger:")]), t._v(" "), n("ol", [n("li", [t._v("Make sure your password is unique. Never reuse passwords.")]), t._v(" "), n("li", [t._v("Avoid obvious choices (12345, password).")]), t._v(" "), n("li", [t._v("Use a variety of characters, including special characters ($, &, etc.).")]), t._v(" "), n("li", [t._v("Longer passwords are better.")])])]), t._v(" "), n("a", {
                    staticClass: "cursor-pointer",
                    attrs: {
                        slot: "reference"
                    },
                    slot: "reference"
                }, [t._v("Tips for creating a stronger password")])])], 1), t._v(" "), n("a-input", {
                    ref: "password",
                    attrs: {
                        id: "password",
                        type: t.isPasswordVisible ? "text" : "password",
                        required: "true"
                    },
                    on: {
                        input: function(e) {
                            return t.validateInput()
                        }
                    }
                }, [t._v("\n        New password\n        "), n("up-c-checkbox", {
                    staticClass: "pb-0 float-right",
                    attrs: {
                        id: "showPassword"
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.isPasswordVisible,
                        expression: "isPasswordVisible"
                    }],
                    attrs: {
                        slot: "input",
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.isPasswordVisible) ? t._i(t.isPasswordVisible, null) > -1 : t.isPasswordVisible
                    },
                    on: {
                        change: function(e) {
                            var n = t.isPasswordVisible,
                                r = e.target,
                                i = !!r.checked;
                            if (Array.isArray(n)) {
                                var o = t._i(n, null);
                                r.checked ? o < 0 && (t.isPasswordVisible = n.concat([null])) : o > -1 && (t.isPasswordVisible = n.slice(0, o).concat(n.slice(o + 1)))
                            } else t.isPasswordVisible = i
                        }
                    },
                    slot: "input"
                }), t._v(" "), n("span", {
                    attrs: {
                        slot: "label"
                    },
                    slot: "label"
                }, [t._v("Show password")])]), t._v(" "), n("div", {
                    attrs: {
                        slot: "hint",
                        "aria-live": "polite"
                    },
                    slot: "hint"
                }, [n("state-component", {
                    attrs: {
                        state: t.state
                    }
                }), t._v(" "), n("checked", {
                    attrs: {
                        checked: t.hasSymbols
                    }
                }, [t._v("Symbols")]), t._v(" "), n("checked", {
                    attrs: {
                        checked: t.hasNumbers
                    }
                }, [t._v("Numbers")]), t._v(" "), n("div", {
                    staticClass: "clear-left"
                })], 1)], 1), t._v(" "), n("min-length", {
                    attrs: {
                        limit: 8,
                        message: "Your password is too short"
                    }
                }), t._v(" "), n("max-length", {
                    attrs: {
                        limit: 4e3,
                        message: "Your password is too long"
                    }
                }), t._v(" "), n("regexp", {
                    attrs: {
                        selector: "/^(?=.*?[a-z\\x80-\\xFF])(?=.*?[0-9!\"#$%&'()*+,\\-.\\/:;<=>?@\\[\\\\\\\\\\]^_`{|}~]).+$/i",
                        message: "Password should include 1 letter and 1 number or symbol"
                    }
                }), t._v(" "), n("custom", {
                    attrs: {
                        name: "passwordValidator",
                        callback: t.isBlacklistedValidator,
                        message: "The password youâ€™ve chosen is not allowed"
                    }
                }), t._v(" "), n("custom", {
                    attrs: {
                        name: "passwordEmailValidator",
                        callback: t.hasEmailValidator,
                        message: "Your password may not contain your email address"
                    }
                }), t._v(" "), n("custom", {
                    attrs: {
                        name: "passwordCompromisedValidator",
                        callback: t.isCompromisedValidator,
                        message: "The password you've chosen is not allowed because it's known to be compromised"
                    }
                }), t._v(" "), n("custom", {
                    attrs: {
                        name: "passwordPreviouslyUsed",
                        callback: t.isPreviouslyUsedValidator,
                        message: "The password you've chosen is not allowed because it's previously been used"
                    }
                }), t._v(" "), n("a-input", {
                    ref: "confirm",
                    attrs: {
                        id: "confirmPassword",
                        type: "password",
                        "value-converter": t.skipFromSubmitConverter,
                        required: "true"
                    }
                }, [t._v("Confirm New Password")]), t._v(" "), n("custom", {
                    attrs: {
                        name: "passwordMatchValidator",
                        callback: t.arePasswordsMatch,
                        message: "Passwords do not match"
                    }
                })], 1)
            };
            r._withStripped = !0;
            var i = n(24),
                o = n.n(i),
                s = n(33),
                a = n(646),
                u = {
                    mixins: [n(656).a],
                    props: {
                        message: {
                            type: String,
                            default: ""
                        },
                        name: {
                            type: String,
                            default: "minLength"
                        },
                        limit: {
                            type: Number,
                            required: !0
                        }
                    },
                    methods: {
                        validate: function(t) {
                            return t && t.length >= this.limit ? Promise.resolve() : Promise.reject()
                        }
                    }
                },
                c = n(837),
                l = n(647),
                d = n(645),
                f = n(738),
                h = n(832),
                p = n(763),
                m = n(20),
                v = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "text-muted mt-10 mr-10 float-right"
                    }, [n("div", {
                        staticClass: "sr-only"
                    }, [t._v(t._s(t.checked ? "contains" : "not contains") + " "), t._t("default")], 2), t._v(" "), n("up-c-icon", {
                        class: t.iconClass,
                        attrs: {
                            size: "xs",
                            name: t.iconName
                        }
                    }), t._v(" "), t._t("default")], 2)
                };
            v._withStripped = !0;
            var g = n(47),
                b = {
                    props: {
                        checked: Boolean
                    },
                    components: {
                        UpCIcon: g.
                        default
                    },
                    computed: {
                        iconClass: function() {
                            return this.checked ? "text-success" : null === this.checked ? "text-muted" : "text-warning"
                        },
                        iconName: function() {
                            return this.checked ? "check" : "close"
                        }
                    }
                },
                y = n(0),
                w = Object(y.a)(b, v, [], !1, null, null, null);
            w.options.__file = "node_modules/@upwork/sensitive-zone/components/set-password/components/checked.vue";
            var _ = w.exports,
                k = {
                    STRONG: 1,
                    NOT_STRONG: 2,
                    IN_PROGRESS: 3
                },
                S = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "mt-10 float-left",
                        class: this.iconClass
                    }, [this.iconName ? e("up-c-icon", {
                        attrs: {
                            size: "xs",
                            name: this.iconName
                        }
                    }) : this._e(), e("span", {
                        attrs: {
                            "aria-live": "assertive"
                        }
                    }, [this._v(this._s(this.text))])], 1)
                };
            S._withStripped = !0;
            var E = {
                    props: {
                        state: String
                    },
                    components: {
                        UpCIcon: g.
                        default,
                        State: k
                    },
                    computed: {
                        iconClass: function() {
                            switch (this.state) {
                                case k.STRONG:
                                    return "text-success";
                                case k.NOT_STRONG:
                                    return "text-warning";
                                default:
                                    return "text-muted"
                            }
                        },
                        text: function() {
                            switch (this.state) {
                                case k.STRONG:
                                    return "Strong";
                                case k.NOT_STRONG:
                                    return "Not strong";
                                default:
                                    return null
                            }
                        },
                        iconName: function() {
                            return this.state === k.IN_PROGRESS ? "loading" : null
                        }
                    }
                },
                x = Object(y.a)(E, S, [], !1, null, null, null);
            x.options.__file = "node_modules/@upwork/sensitive-zone/components/set-password/components/strong.vue";
            var C = x.exports,
                O = {
                    mixins: [d.a],
                    props: {
                        userNid: String
                    },
                    data: function() {
                        return {
                            isPasswordVisible: !1,
                            hasSymbols: null,
                            hasNumbers: null,
                            state: null
                        }
                    },
                    methods: {
                        hasSymbolsNumbers: function() {
                            var t = this,
                                e = this.$refs.password.value;
                            Object.entries({
                                hasSymbols: /[^\w\s]/,
                                hasNumbers: /[0-9]/
                            }).forEach((function(n) {
                                var r = o()(n, 2),
                                    i = r[0],
                                    s = r[1];
                                t[i] = !(!e || !e.match(s))
                            }))
                        },
                        validateInput: function() {
                            var t = this;
                            this.validatorTimeout && clearTimeout(this.validatorTimeout), this.hasSymbolsNumbers(), this.state = k.IN_PROGRESS, this.errorCode = null, p.a.validate(this.$refs.password.formId, [this.$refs.password.id]).then((function() {
                                return t.validatorTimeout = setTimeout(t.passwordValidator, 500)
                            })).
                            catch((function() {
                                return t.state = k.NOT_STRONG
                            }))
                        },
                        arePasswordsMatch: function() {
                            return this.$refs.password.value === this.$refs.confirm.value ? Promise.resolve() : Promise.reject()
                        },
                        passwordValidator: function() {
                            var t = this;
                            return this.$refs.password.value ? Object(m.a)("/ab/account-security/validate-password").post({
                                password: this.$refs.password.value,
                                userNid: this.userNid
                            }).json((function(e) {
                                t.state = !0 === e.status ? k.STRONG : k.NOT_STRONG, t.errorCode = e.error
                            })) : Promise.reject()
                        },
                        isCompromisedValidator: function() {
                            return "PASSWORD_COMPROMISED" === this.errorCode ? Promise.reject() : Promise.resolve()
                        },
                        isPreviouslyUsedValidator: function() {
                            return "PASSWORD_PREVIOUSLY_USED" === this.errorCode ? Promise.reject() : Promise.resolve()
                        },
                        isBlacklistedValidator: function() {
                            return "PASSWORD_BLACKLISTED" === this.errorCode ? Promise.reject() : Promise.resolve()
                        },
                        hasEmailValidator: function() {
                            return "PASSWORD_EMAIL_MATCH" === this.errorCode ? Promise.reject() : Promise.resolve()
                        },
                        skipFromSubmitConverter: function() {
                            return null
                        }
                    },
                    components: {
                        AInput: s.a,
                        Regexp: a.a,
                        MinLength: u,
                        MaxLength: c.a,
                        Custom: l.a,
                        upCPopover: f.a,
                        upCCheckbox: h.a,
                        FormValidator: p.a,
                        checked: _,
                        stateComponent: C
                    }
                },
                I = (n(981), Object(y.a)(O, r, [], !1, null, "731e41e0", null));
            I.options.__file = "node_modules/@upwork/sensitive-zone/components/set-password/inputs/set-password-inputs-new-policy.vue";
            e.a = I.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("input-group", {
                    attrs: {
                        id: t.id,
                        required: t.required
                    }
                }, [t.hasLabel ? n("label", {
                    staticClass: "up-label",
                    attrs: {
                        for: t.domId
                    }
                }, [t._t("default")], 2) : t._e(), t._v(" "), n("dropdown", {
                    staticClass: "auth-select",
                    attrs: {
                        id: t.domId,
                        title: t.selectedLabel,
                        items: t.items
                    },
                    on: {
                        select: t.selectItem
                    },
                    model: {
                        value: t.selected,
                        callback: function(e) {
                            t.selected = e
                        },
                        expression: "selected"
                    }
                }, [n("span", {
                    attrs: {
                        slot: "label"
                    },
                    domProps: {
                        innerHTML: t._s(t.selectedLabel)
                    },
                    slot: "label"
                })]), t._v(" "), t.required ? n("custom", {
                    attrs: {
                        slot: "required",
                        name: "required",
                        "for-input": t.id,
                        callback: t.requiredValidator,
                        message: "This field is required."
                    },
                    slot: "required"
                }) : t._e()], 1)
            };
            r._withStripped = !0;
            var i = n(668),
                o = n(657),
                s = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "up-dropdown",
                        class: {
                            open: t.isOpen,
                                "up-dropdown-menu-nested": t.isNested,
                                "up-has-error": t.error,
                                "up-dropdown-menu-natural-width": t.naturalWidthMenu
                        }
                    }, [n("up-c-dropdown-toggle", {
                        ref: "toggle",
                        class: t.classes,
                        attrs: {
                            id: "dropdown-label-" + t.id,
                            "aria-labelledby": t.dropdownToggleAriaLabelledby,
                            disabled: t.disabled,
                            open: t.isOpen,
                            size: t.size
                        },
                        on: {
                            keyup: function(e) {
                                if (!e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"])) return null;
                                e.preventDefault()
                            },
                            keydown: [
                                function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]) ? null : (e.preventDefault(), t.openDropdownKeyboard(e))
                                },
                                function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.openDropdownKeyboard(e))
                                },
                                function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.preventDefault(), t.onDownPress(e))
                                },
                                function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "home", void 0, e.key, void 0) ? null : t.onHomePress(e)
                                },
                                function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "end", void 0, e.key, void 0) ? null : t.onEndPress(e)
                                },
                                function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "tab", 9, e.key, "Tab") ? null : t.setTabPress(e)
                                },
                                function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : (e.preventDefault(), t.close(!0))
                                },
                                function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : (e.preventDefault(), t.close(!0))
                                }
                            ],
                            click: t.open
                        }
                    }, [t._t("label", [t._v("\n      " + t._s(t.internalSelected && t.internalSelected.length ? t.getSelectedLabel() : t.title) + "\n    ")], {
                        item: t.internalSelected,
                        title: t.title
                    })], 2), t._v(" "), !t.openNativeMenu && t.isOpen ? n("up-c-dropdown-menu", {
                        ref: "menu",
                        attrs: {
                            "aria-labelledby": t.ariaLabelledby,
                            items: t.menuItems,
                            groups: t.groupItems,
                            title: t.title,
                            "checkable-behavior": t.checkableBehaviorType,
                            search: t.search,
                            "search-placeholder": t.searchPlaceholder,
                            "search-label": t.searchLabel,
                            loading: t.loading,
                            "item-key": t.itemKey,
                            "item-link": t.itemLink,
                            "item-text": t.itemText,
                            "item-sublabel": t.isNested ? "" : t.itemSublabel,
                            "nested-key": t.nestedKey,
                            "group-key": t.groupKey,
                            "group-text": t.groupText,
                            "group-items-key": t.groupItemsKey,
                            "is-nested": t.isNested,
                            "disable-check-mark": t.disableCheckMark,
                            "html-as-text": t.htmlAsText,
                            "menu-class": t.menuClass
                        },
                        on: {
                            "menu-loaded": t.onMenuLoaded,
                            close: t.close,
                            select: t.onSelect,
                            groupSelect: t.groupSelect,
                            cancel: t.onCancel,
                            search: t.onSearch,
                            "filter-message": t.filterMessage
                        }
                    }) : t._e()], 1)
                };
            s._withStripped = !0;
            var a = n(2),
                u = n.n(a),
                c = n(4),
                l = n.n(c),
                d = n(58),
                f = n.n(d),
                h = n(8),
                p = n.n(h),
                m = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("button", t._g({
                        staticClass: "up-btn up-btn-default up-dropdown-toggle",
                        class: {
                            "up-dropdown-toggle-open": t.open,
                                "up-btn-sm": "sm" === t.size
                        },
                        attrs: {
                            "aria-expanded": t.open ? "true" : "false",
                            disabled: t.disabled,
                            type: "button"
                        }
                    }, t.$listeners), [n("div", {
                        staticClass: "up-dropdown-toggle-title"
                    }, [n("span", {
                        staticClass: "flex-1 ellipsis"
                    }, [t._t("default")], 2), t._v(" "), n("up-c-icon-v2", {
                        staticClass: "up-dropdown-icon",
                        class: {
                            disabled: t.disabled
                        },
                        attrs: {
                            icon: t.dropdownCaretIcon,
                            size: "sm"
                        }
                    })], 1)])
                };
            m._withStripped = !0;
            var v = n(31),
                g = n.n(v),
                b = n(929),
                y = n.n(b),
                w = n(59),
                _ = {
                    injectStyles: [g.a, y.a],
                    name: "UpCDropdownToggle",
                    components: {
                        UpCIconV2: w.
                        default
                    },
                    props: {
                        size: {
                            default: "md",
                            type: String
                        },
                        disabled: {
                            default: !1,
                            type: Boolean
                        },
                        open: {
                            default: !1,
                            type: Boolean
                        }
                    },
                    data: function() {
                        return {
                            dropdownCaretIcon: function() {
                                return n.e(26).then(n.bind(null, 430))
                            }
                        }
                    }
                },
                k = n(0),
                S = Object(k.a)(_, m, [], !1, null, null, null);
            S.options.__file = "node_modules/@upwork/vue-components-core/src/dropdown-toggle/dropdown-toggle.vue";
            var E = S.exports,
                x = n(930),
                C = n.n(x),
                O = n(890),
                I = n(872),
                A = n(769);

            function T(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? T(Object(n), !0).forEach((function(e) {
                        u()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function R(t, e) {
                return Array.isArray(t) ? t.map((function(t) {
                    var n = P({}, t);
                    return n._origin = t, Array.isArray(t[e]) && (n[e] = R(t[e], e)), n
                })) : []
            }

            function N(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? N(Object(n), !0).forEach((function(e) {
                        u()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var D = {
                    injectStyles: [C.a],
                    name: "UpCDropdown",
                    components: {
                        upCDropdownToggle: E,
                        upCDropdownMenu: function() {
                            return Promise.all([n.e(12), n.e(65)]).then(n.bind(null, 1533)).then((function(t) {
                                return t.
                                default || t
                            }))
                        }
                    },
                    model: {
                        prop: "selected",
                        event: "change"
                    },
                    props: {
                        items: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        groups: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        checkableBehavior: {
                            type: String,
                            validator: function(t) {
                                return ["single", "multiple", "none"].includes(t)
                            },
                            default: "single"
                        },
                        multi: {
                            type: Boolean,
                            default: !1
                        },
                        title: {
                            type: String,
                            default: null
                        },
                        size: {
                            type: String,
                            default: "md"
                        },
                        width: {
                            type: String,
                            default: null,
                            validator: function(t) {
                                return ["xs", "sm", "md", "lg", "xlg"].indexOf(t) > -1
                            }
                        },
                        naturalWidthMenu: {
                            type: Boolean,
                            default: !1
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        error: {
                            type: Boolean,
                            default: !1
                        },
                        search: {
                            type: Boolean,
                            default: !1
                        },
                        searchPlaceholder: {
                            type: String,
                            default: ""
                        },
                        searchLabel: {
                            type: String,
                            default: "Search"
                        },
                        loading: {
                            type: Boolean,
                            default: !1
                        },
                        selected: {
                            type: [Array, Object],
                            default: null
                        },
                        itemLink: {
                            type: String,
                            default: ""
                        },
                        itemKey: {
                            type: String,
                            default: "id"
                        },
                        itemText: {
                            type: String,
                            default: "label"
                        },
                        itemSublabel: {
                            type: String,
                            default: ""
                        },
                        groupKey: {
                            type: String,
                            default: "id"
                        },
                        groupText: {
                            type: String,
                            default: "label"
                        },
                        groupItemsKey: {
                            type: String,
                            default: "items"
                        },
                        nestedKey: {
                            type: String,
                            default: "items"
                        },
                        disableCheckMark: {
                            type: Boolean,
                            default: !1
                        },
                        ariaLabelledby: {
                            type: String,
                            default: null
                        },
                        htmlAsText: {
                            type: Boolean,
                            default: !0
                        },
                        menuClass: {
                            type: String,
                            default: null
                        }
                    },
                    data: function() {
                        return {
                            isOpen: !1,
                            isNativeApp: Object(O.a)(),
                            openNativeMenu: null,
                            internalSelected: [],
                            lastSelected: [],
                            isNativeAppOpen: !1,
                            nativeQueryString: "",
                            nativeAppId: "",
                            menuItems: [],
                            groupItems: [],
                            isOpenedWithKeyboard: !1,
                            id: null
                        }
                    },
                    computed: {
                        isNested: function() {
                            var t = this;
                            return this.menuItems.some((function(e) {
                                return Array.isArray(e[t.nestedKey])
                            }))
                        },
                        classes: function() {
                            return this.width ? "width-".concat(this.width) : ""
                        },
                        checkableBehaviorType: function() {
                            return this.multi ? "multiple" : this.checkableBehavior
                        },
                        dropdownToggleAriaLabelledby: function() {
                            return [this.ariaLabelledby, "dropdown-label-".concat(this.id)].filter(Boolean).join(" ")
                        }
                    },
                    watch: {
                        items: {
                            immediate: !0,
                            handler: function(t, e) {
                                var n, r;
                                (e || t && t.length) && (this.menuItems = R(this.items, this.nestedKey), this.isNested && t.length && (n = this.menuItems, r = this.nestedKey, function t(e) {
                                    for (var n = !0, i = 0; i < e.length; i += 1) {
                                        var o = e[i];
                                        !e[0][r] && o[r] && (n = !1), e[0][r] && !o[r] && (n = !1), Array.isArray(o[r]) && (n = n && t(o[r]))
                                    }
                                    return n
                                }(n) || console.error("All selectable items must be at the same depth within the menus")), t.length && function(t) {
                                    if (Array.isArray(t.items) && t.items.length) {
                                        var e = t.items.every((function(e) {
                                            return e[t.itemText] && "string" == typeof e[t.itemText]
                                        }));
                                        t.items.every((function(e) {
                                            return e[t.itemKey] && "string" == typeof e[t.itemKey]
                                        })) ? e ? t.itemLink && "multiple" === t.checkableBehavior && console.error("Dropdown with link should not be checkable behavior multiple") : console.error("Each menu items should have ".concat(t.itemText, " property and type should be string")) : console.error("Each menu items should have ".concat(t.itemKey, " property and type should be string"))
                                    }
                                }({
                                    items: this.menuItems,
                                    itemKey: this.itemKey,
                                    itemText: this.itemText,
                                    itemLink: this.itemLink,
                                    checkableBehavior: this.checkableBehavior
                                }), this.mergeNewItemsWithSelectedItemState(this.menuItems, this.internalSelected), this.isNativeAppOpen && this.updateNativePayload())
                            }
                        },
                        groups: {
                            immediate: !0,
                            handler: function(t, e) {
                                var n, r, i;
                                (e || t && t.length) && (this.groupItems = (n = this.groups, r = this.groupItemsKey, i = this.nestedKey, n.map((function(t) {
                                    var e = P({}, t);
                                    return e[r] = R(t[r], i), e
                                }))), t.length && function(t) {
                                    if (Array.isArray(t.groups) && t.groups.length)
                                        if (t.groups.every((function(t, e, n) {
                                                return t.checkableBehavior === n[0].checkableBehavior
                                            }))) {
                                            var e = !t.itemLink || t.groups.every((function(t) {
                                                    return "multiple" !== t.checkableBehavior
                                                })),
                                                n = t.groups.every((function(e) {
                                                    return e[t.groupKey] && "string" == typeof e[t.groupKey]
                                                })),
                                                r = t.groups.every((function(e) {
                                                    return !Array.isArray(e[t.groupItems]) || e[t.groupItems].every((function(e) {
                                                        return e[t.itemKey] && "string" == typeof e[t.itemKey]
                                                    }))
                                                })),
                                                i = t.groups.every((function(e) {
                                                    return !Array.isArray(e[t.groupItems]) || e[t.groupItems].every((function(e) {
                                                        return e[t.itemText] && "string" == typeof e[t.itemText]
                                                    }))
                                                }));
                                            n ? r ? i ? e || console.error("Group dropdown with link should not be checkable behavior multiple") : console.error("Each menu items should have ".concat(t.itemText, " property and type should be string")) : console.error("Each menu items should have ".concat(t.itemKey, " property and type should be string")) : console.error("Each group items should have ".concat(t.groupKey, " property and type should be string"))
                                        } else console.error("Checkable behavior of each group should be same")
                                }({
                                    groups: this.groupItems,
                                    groupKey: this.groupKey,
                                    groupItems: this.groupItemsKey,
                                    itemKey: this.itemKey,
                                    itemText: this.itemText,
                                    itemLink: this.itemLink
                                }))
                            }
                        },
                        selected: {
                            immediate: !0,
                            handler: function(t, e) {
                                var n = Array.isArray(t) && t.length,
                                    r = !e && (t || n);
                                this.setDefaultSelectedValues({
                                    shouldNotEmitChange: r
                                })
                            }
                        },
                        internalSelected: {
                            immediate: !0,
                            handler: function(t) {
                                this.groupItems.length ? this.setGroupSelectedProp(this.groupItems, t) : this.setSelectedProp(this.menuItems, t)
                            }
                        }
                    },
                    mounted: function() {
                        this.id = Object(A.a)().toString()
                    },
                    methods: {
                        open: function() {
                            var t = this;
                            return p()(l.a.mark((function e() {
                                var n, r, i, o;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.isNativeApp || null !== t.openNativeMenu) {
                                                e.next = 6;
                                                break
                                            }
                                            return n = "", t.search ? n = "search" : t.isNested ? n = "nested" : t.menuItems && !t.groupItems.length ? "single" === t.checkableBehaviorType ? n = "single-select" : "multiple" === t.checkableBehaviorType && (n = "multi-select") : t.groupItems && t.groupItems.length && ("single" === t.groupItems[0].checkableBehavior ? n = "single-select" : "multiple" === t.groupItems[0].checkableBehavior && (n = "multi-select")), e.next = 5, I.a.isNativeFeatureAvailable("menus", n);
                                        case 5:
                                            t.openNativeMenu = e.sent;
                                        case 6:
                                            if (t.isOpen = !0, t.lastSelected = f()(t.internalSelected), !t.openNativeMenu) {
                                                e.next = 23;
                                                break
                                            }
                                            return r = "modal", !t.isNested && !t.search && t.menuItems.length < 6 && t.groupItems.length <= 0 && (r = "dialog"), t.isNativeAppOpen = !0, i = {
                                                itemKey: t.itemKey,
                                                itemText: t.itemText,
                                                nestedKey: t.nestedKey
                                            }, t.itemSublabel && (i.itemSublabel = t.itemSublabel), t.menuItems && !t.groupItems.length ? i.items = t.menuItems : t.groupItems && t.groupItems.length && (i.groups = t.groupItems, i.groupKey = t.groupKey, i.groupText = t.groupText, i.groupItemsKey = t.groupItemsKey), e.next = 17, I.c.open({
                                                type: r,
                                                menuData: i,
                                                title: t.title,
                                                checkableBehavior: t.checkableBehaviorType,
                                                hasFiltering: t.search,
                                                query: "",
                                                queryPlaceholder: t.searchPlaceholder,
                                                filteringCallback: t.onNativeQueryChange,
                                                enableFiltering: !0
                                            });
                                        case 17:
                                            o = e.sent, t.isNativeAppOpen = !1, t.nativeAppId = "", t.nativeQueryString = "", t.syncNativeSelection(o), t.close();
                                        case 23:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        onNativeQueryChange: function(t, e, n) {
                            var r = this;
                            this.nativeAppId = t, this.nativeQueryString = e;
                            var i = this.groupItems.length && this.groupItems.some((function(t) {
                                return "multiple" === t.checkableBehavior
                            }));
                            ("multiple" === this.checkableBehaviorType || i) && this.syncNativeSelection(n), this.$nextTick((function() {
                                r.updateNativePayload()
                            })), this.$emit("search", e)
                        },
                        updateNativePayload: function() {
                            var t = "modal";
                            !this.isNested && !this.search && this.menuItems.length < 6 && this.groupItems.length <= 0 && (t = "dialog");
                            var e = {
                                itemKey: this.itemKey,
                                itemText: this.itemText,
                                nestedKey: this.nestedKey
                            };
                            this.itemSublabel && (e.itemSublabel = this.itemSublabel), this.menuItems && !this.groupItems.length ? e.items = this.menuItems : this.groupItems && this.groupItems.length && (e.groups = this.groupItems, e.groupKey = this.groupKey, e.groupText = this.groupText, e.groupItemsKey = this.groupItemsKey), I.c.update({
                                type: t,
                                id: this.nativeAppId,
                                query: this.nativeQueryString,
                                queryPlaceholder: this.searchPlaceholder,
                                menuData: e,
                                title: this.title,
                                checkableBehavior: this.checkableBehaviorType,
                                hasFiltering: this.search,
                                enableFiltering: !0
                            })
                        },
                        syncNativeSelection: function(t) {
                            var e = this;
                            if (t && t.length)
                                if (this.menuItems && !this.groupItems.length)
                                    if ("multiple" === this.checkableBehaviorType) {
                                        var n = [];
                                        t.forEach((function(t) {
                                            var r = e.internalSelected.find((function(n) {
                                                return n[e.itemKey] === t[e.itemKey]
                                            }));
                                            (!r && t.isChecked || r && !t.isChecked) && (t.isChecked = !t.isChecked, n.push(t))
                                        })), n.forEach((function(t) {
                                            e.onSelect(t)
                                        }))
                                    } else {
                                        var r = t.find((function(t) {
                                            return t.isChecked
                                        }));
                                        r.isChecked = !r.isChecked, this.onSelect(r)
                                    }
                            else if (this.groupItems && this.groupItems.length) {
                                var i = [],
                                    o = this.internalSelected.map((function(t) {
                                        return t[e.itemKey]
                                    }));
                                t.forEach((function(t) {
                                    var n = null;
                                    e.groupItems.every((function(r) {
                                        return Array.isArray(r[e.groupItemsKey]) && (n = r[e.groupItemsKey].find((function(n) {
                                            return n[e.itemKey] === t[e.itemKey]
                                        }))) && ("multiple" !== r.checkableBehavior && t.isChecked && o.indexOf(t[e.itemKey]) < 0 || "multiple" === r.checkableBehavior && (t.isChecked && o.indexOf(t[e.itemKey]) < 0 || !t.isChecked && o.indexOf(t[e.itemKey]) >= 0)) && (t.isChecked = !t.isChecked, i.push({
                                            groupId: r[e.groupKey],
                                            checkableBehavior: r.checkableBehavior,
                                            item: t
                                        })), !n
                                    }))
                                })), i.forEach((function(t) {
                                    e.groupSelect(t)
                                }))
                            }
                        },
                        close: function(t) {
                            this.isOpen = !1, this.isOpenedWithKeyboard = !1, this.lastSelected = [], t && this.focus(), this.$emit("close")
                        },
                        isSelectedChanged: function() {
                            var t = this,
                                e = [];
                            Array.isArray(this.selected) ? e = this.selected.filter((function(e) {
                                if (e && e[t.itemKey]) return e
                            })).map((function(e) {
                                return e[t.itemKey]
                            })) : this.selected && this.selected[this.itemKey] && e.push(this.selected[this.itemKey]);
                            var n = this.internalSelected.map((function(e) {
                                return e[t.itemKey]
                            }));
                            return !(e.length === n.length && e.every((function(t) {
                                return n.indexOf(t) >= 0
                            })))
                        },
                        emitEvent: function() {
                            if ("multiple" === this.checkableBehaviorType || this.groupItems.length) {
                                var t = this.internalSelected.map((function(t) {
                                    return t._origin
                                }));
                                this.$emit("change", t)
                            } else this.$emit("change", this.internalSelected.length ? this.internalSelected[0]._origin : null)
                        },
                        setDefaultSelectedValues: function(t) {
                            var e = this,
                                n = t.shouldNotEmitChange;
                            if (this.isSelectedChanged()) {
                                if (this.groupItems.length) {
                                    var r = {},
                                        i = function(t) {
                                            t && e.groupItems.forEach((function(n) {
                                                var i = n[e.groupItemsKey].find((function(n) {
                                                    return n[e.itemKey] === t[e.itemKey]
                                                }));
                                                if (i && "none" !== n.checkableBehavior) {
                                                    var o = n.checkableBehaviorParentId && "single" === n.checkableBehavior ? n.checkableBehaviorParentId : n[e.groupKey];
                                                    r[o] || (r[o] = []), "single" === n.checkableBehavior ? r[o][0] = j({
                                                        isChecked: !0
                                                    }, i) : r[o].push(j({
                                                        isChecked: !0
                                                    }, i))
                                                }
                                            }))
                                        };
                                    Array.isArray(this.selected) ? this.selected.forEach((function(t) {
                                        i(t)
                                    })) : i(this.selected), this.internalSelected = f()([].concat.apply([], Object.values(r)))
                                } else if (this.menuItems) {
                                    for (var o = [], s = f()(this.menuItems), a = [], u = function(t) {
                                            if (t) {
                                                var n = a.find((function(n) {
                                                    return n[e.itemKey] === t[e.itemKey]
                                                }));
                                                !n || n[e.nestedKey] && n[e.nestedKey].length || (delete n[e.nestedKey], o.push(j({
                                                    isChecked: !0
                                                }, n)))
                                            }
                                        }; s.length;) {
                                        var c = s.pop();
                                        Array.isArray(c[this.nestedKey]) && s.push.apply(s, f()(c[this.nestedKey])), a.push(j({}, c))
                                    }
                                    Array.isArray(this.selected) ? this.selected.forEach((function(t) {
                                        u(t)
                                    })) : u(this.selected), "multiple" === this.checkableBehaviorType ? this.internalSelected = [].concat(o) : "single" === this.checkableBehaviorType && o.length ? this.internalSelected = [o[o.length - 1]] : this.internalSelected = []
                                }
                                n || this.emitEvent()
                            }
                        },
                        setSelectedProp: function(t, e) {
                            var n = this;
                            t.forEach((function(r, i) {
                                r.isChecked = Boolean(e.find((function(t) {
                                    return t[n.itemKey] === r[n.itemKey]
                                }))), n.$set(t, i, r), Array.isArray(r[n.nestedKey]) && n.setSelectedProp(r[n.nestedKey], e)
                            }))
                        },
                        setGroupSelectedProp: function(t, e) {
                            var n = this;
                            t.forEach((function(t) {
                                n.setSelectedProp(t[n.groupItemsKey], e)
                            }))
                        },
                        getSelectedLabel: function() {
                            var t = this;
                            return this.internalSelected.map((function(e) {
                                return e[t.itemText]
                            })).join(", ")
                        },
                        openDropdownKeyboard: function() {
                            this.isOpenedWithKeyboard = !0, this.open()
                        },
                        onMenuLoaded: function() {
                            this.isOpenedWithKeyboard && (this.setMenuFocus({
                                keyCode: 40
                            }), this.isOpenedWithKeyboard = !1)
                        },
                        onDownPress: function(t) {
                            this.isOpen ? this.setMenuFocus(t) : this.openDropdownKeyboard()
                        },
                        onHomePress: function(t) {
                            this.isOpen && (t.preventDefault(), this.setMenuFocus(t))
                        },
                        onEndPress: function(t) {
                            this.isOpen && (t.preventDefault(), this.setMenuFocus(t))
                        },
                        setTabPress: function(t) {
                            t.shiftKey ? this.close() : this.isOpen && (t.preventDefault(), this.setMenuFocus(t))
                        },
                        focus: function() {
                            this.$refs.toggle.$el.focus()
                        },
                        setMenuFocus: function(t) {
                            var e = t.keyCode;
                            this.search && 35 !== e && 36 !== e ? this.$refs.menu.onFocusInput() : this.$refs.menu.setMenuFocus(e)
                        },
                        onSearch: function(t) {
                            this.$emit("search", t)
                        },
                        onSelect: function(t, e, n, r) {
                            var i = this,
                                o = n || this.checkableBehaviorType,
                                s = r || this.menuItems;
                            if (t) {
                                if (this.$emit("select", t._origin), "none" !== o) {
                                    if ("multiple" === o && t.isChecked) {
                                        var a = -1;
                                        return this.internalSelected.forEach((function(e, n) {
                                            e[i.itemKey] === t[i.itemKey] && (a = n)
                                        })), a >= 0 && this.internalSelected.splice(a, 1), void this.emitEvent()
                                    }
                                    if ("multiple" !== o) {
                                        var u = -1;
                                        this.internalSelected.forEach((function(t, e) {
                                            if (i.menuItems && !i.groupItems.length) u = 0;
                                            else if (i.groupItems.length) {
                                                Boolean(s.find((function(e) {
                                                    return e[i.itemKey] === t[i.itemKey]
                                                }))) && (u = e)
                                            }
                                        })), u >= 0 && this.internalSelected.splice(u, 1)
                                    }
                                    this.internalSelected.push(t), this.emitEvent()
                                }
                                t.onSelect && t.onSelect(), this.isNativeApp && t[this.itemLink] && (window.location = t[this.itemLink]), e && this.focus()
                            }
                        },
                        groupSelect: function(t, e) {
                            var n = this,
                                r = this.groupItems.find((function(e) {
                                    return e[n.groupKey] === t.groupId
                                }));
                            if ("single" !== r.checkableBehavior) this.onSelect(t.item, e, r.checkableBehavior, r[this.groupItemsKey]);
                            else {
                                var i = r[this.groupItemsKey];
                                this.groupItems.forEach((function(t) {
                                    (r.checkableBehaviorParentId && (r.checkableBehaviorParentId === t[n.groupKey] || r.checkableBehaviorParentId === t.checkableBehaviorParentId) || r[n.groupKey] === t.checkableBehaviorParentId) && (i = i.concat(t[n.groupItemsKey]))
                                })), this.onSelect(t.item, e, r.checkableBehavior, i)
                            }
                        },
                        onCancel: function() {
                            this.internalSelected = f()(this.lastSelected), this.emitEvent(), this.lastSelected = [], this.isOpen = !1
                        },
                        mergeNewItemsWithSelectedItemState: function(t, e, n) {
                            var r = this;
                            n = n || e.map((function(t) {
                                return t[r.itemKey]
                            })), t.map((function(t) {
                                if (Array.isArray(t[r.nestedKey])) r.mergeNewItemsWithSelectedItemState(t[r.nestedKey], e, n);
                                else if (-1 !== n.indexOf(t[r.itemKey])) {
                                    t.isChecked = !0;
                                    var i = e.findIndex((function(e) {
                                        return t[r.itemKey] === e[r.itemKey]
                                    })); - 1 !== i && e.splice(i, 1, t)
                                }
                            }))
                        },
                        filterMessage: function(t) {
                            this.$emit("filter-message", t)
                        }
                    }
                },
                B = Object(k.a)(D, s, [], !1, null, null, null);
            B.options.__file = "node_modules/@upwork/vue-components-core/src/dropdown/dropdown.vue";
            var L = B.exports,
                M = n(647),
                $ = {
                    mixins: [o.a],
                    props: {
                        items: Array,
                        placeholder: {
                            type: String,
                            default: ""
                        },
                        labelConvertor: Function
                    },
                    data: function() {
                        return {
                            selected: {
                                id: "",
                                label: this.placeholder
                            }
                        }
                    },
                    computed: {
                        value: function() {
                            return this.selected
                        },
                        selectedLabel: function() {
                            return this.labelConvertor ? this.labelConvertor(this.selected) : this.selected.label
                        }
                    },
                    methods: {
                        selectItem: function(t) {
                            this.selected = t, this.$emit("input", t)
                        },
                        requiredValidator: function() {
                            return void 0 !== this.selected.id && this.selected.id || 0 === this.selected.id ? Promise.resolve() : Promise.reject()
                        }
                    },
                    components: {
                        InputGroup: i.a,
                        Dropdown: L,
                        Custom: M.a
                    }
                },
                U = (n(982), Object(k.a)($, r, [], !1, null, "a69231f2", null));
            U.options.__file = "node_modules/@upwork/auth-common/components/inputs/dropdown.vue";
            e.a = U.exports
        },
        function(t, e, n) {
            "use strict";
            var r = n(14),
                i = n(741),
                o = n(736),
                s = n(863),
                a = n(737),
                u = n(740),
                c = function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("self-help-form", {
                        attrs: {
                            id: this.id,
                            name: this.name,
                            "redirect-url": this.getRedirectUrl
                        }
                    }, [this._v("\n  " + this._s(this.getMessage) + "\n")])
                };
            c._withStripped = !0;
            var l = n(743),
                d = n(747),
                f = {
                    components: {
                        SelfHelpForm: l.a
                    },
                    mixins: [d.a],
                    props: {
                        id: {
                            default: "settings-self-help"
                        },
                        name: {
                            default: "settingsSelfHelp"
                        }
                    },
                    data: function() {
                        return {
                            redirectUrl: "https://support.upwork.com/hc/en-us/requests/new?ticket_form_id=360000464433&self_help=access_settings",
                            message: "It looks like youâ€™re having trouble accessing Settings. We can help!"
                        }
                    }
                },
                h = n(0),
                p = Object(h.a)(f, c, [], !1, null, null, null);
            p.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/self-help.vue";
            var m = p.exports,
                v = n(28),
                g = n(9),
                b = n(664);
            e.a = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.a,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a,
                    c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.a,
                    l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.a,
                    d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : s.a,
                    f = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : m,
                    p = g.a.getters["auth/challenge/availableOtpNames"],
                    w = [t.extend(e, {
                        challengeName: r.c.FIDO2,
                        submitLabel: "Retry"
                    }), t.extend(n, {
                        challengeName: r.c.TOTP
                    }), t.extend(Object(v.a)() ? null : c, {
                        challengeName: r.c.PUSH
                    }), t.extend(l, {
                        challengeName: r.c.PHONE
                    })].filter((function(t) {
                        return null !== t && -1 !== p.indexOf(t.challengeName)
                    })),
                    _ = [];
                w.forEach((function(t) {
                    g.a.getters["auth/challenge/".concat(t.challengeName, "/default")] ? _.unshift(t) : _.push(t)
                })), d && _.push(t.extend(d, {
                    challengeName: r.c.EMAIL
                })), f && g.a.getters["auth/securityQuestion/securityQuestion"] && _.push(t.extend(f, {
                    challengeName: r.c.SQ
                }));
                for (var k = _[0], S = k, E = 1, x = _.length; E < x; E++) y(t, S, _[E]), S = _[E];
                var C = t.extend(h, {
                    submitLabel: "Proceed",
                    hideStandAloneFooter: !1,
                    formControlsAlignment: "side",
                    inverseFooter: !0
                });
                return y(t, S, C), t.switchTo(C).onClick(b.a.recoveryHelp), t.switchTo(k)
            };

            function y(t, e, n) {
                t.switchTo(n).condition((function() {
                    return g.a.getters["auth/challenge/".concat(e.challengeName, "/allowSwitch")]
                })).onAction("auth/challenge/".concat(e.challengeName, "/markLimit"))
            }
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("form-controls", t._b({}, "form-controls", t.$attrs, !1), [t.isChallenge ? n("form-control", {
                    attrs: {
                        id: "tryAnother",
                        type: "cancel",
                        action: t.cancelClick
                    }
                }, [t._v(t._s(t.getCancelLabel))]) : t._e(), t._v(" "), n("form-control", {
                    attrs: {
                        id: "next",
                        type: "continue"
                    }
                }, [t._v(t._s(t.getSubmitLabel))])], 1)
            };
            r._withStripped = !0;
            var i = n(644),
                o = n(6),
                s = n(11),
                a = n(731),
                u = n(1),
                c = n(692),
                l = {
                    mixins: [a.a],
                    props: {
                        challengeName: String,
                        submitLabel: {
                            type: String,
                            default: "Next"
                        }
                    },
                    computed: {
                        isChallenge: function() {
                            return !!this.challengeName
                        },
                        getCancelLabel: function() {
                            var t = u.a.getters["auth/sensitiveZone/deviceAuthorization/controls/cancelLabel"];
                            return void 0 !== t ? t : "Try another method"
                        },
                        getSubmitLabel: function() {
                            var t = u.a.getters["auth/sensitiveZone/deviceAuthorization/controls/submitLabel"];
                            return void 0 !== t ? t : this.submitLabel
                        }
                    },
                    methods: {
                        cancelClick: function() {
                            u.a.getters["auth/sensitiveZone/deviceAuthorization/controls/behavior"] === c.a.custom ? u.a.dispatch("auth/sensitiveZone/deviceAuthorization/controls/cancel") : (u.a.dispatch("auth/challenge/".concat(this.challengeName, "/allowSwitch"), !0), u.a.dispatch("auth/challenge/".concat(this.challengeName, "/markLimit"), i.a.SEND), u.a.dispatch("auth/sensitiveZone/deviceAuthorization/controls/resetBehavior"))
                        }
                    },
                    components: {
                        FormControls: s.a,
                        FormControl: o.a
                    }
                },
                d = n(0),
                f = Object(d.a)(l, r, [], !1, null, null, null);
            f.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/components/controls.vue";
            e.a = f.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement;
                return (this._self._c || t)("div", [this._t("default")], 2)
            };
            r._withStripped = !0;
            var i = n(663),
                o = {
                    props: {
                        id: {
                            type: String,
                            required: !0
                        }
                    },
                    mixins: [i.a]
                },
                s = n(0),
                a = Object(s.a)(o, r, [], !1, null, null, null);
            a.options.__file = "node_modules/@upwork/auth-common/components/form-group.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("dropdown", {
                    ref: "dropdown",
                    attrs: {
                        id: "question",
                        items: t.predefined,
                        required: !0,
                        "value-converter": t.valueConverter
                    },
                    on: {
                        input: t.changed
                    }
                }, [t._t("newQuestionLabel", [t._v("\n            New Question\n        ")])], 2), t._v(" "), t.isCustomQuestion ? n("a-input", {
                    ref: "customQuestion",
                    attrs: {
                        id: "customQuestion",
                        required: t.isCustomQuestion
                    }
                }, [t._v("\n        Custom question\n    ")]) : t._e(), t._v(" "), n("min-max-alphanumeric", {
                    attrs: {
                        "for-input": "customQuestion",
                        "message-prefix": "Question"
                    }
                }), t._v(" "), n("a-input", {
                    attrs: {
                        id: "answer",
                        "aria-label": "Answer to the New Question"
                    }
                }, [t._v("Answer")]), t._v(" "), n("min-max-alphanumeric", {
                    attrs: {
                        "for-input": "answer",
                        "message-prefix": "Answer"
                    }
                })], 1)
            };
            r._withStripped = !0;
            var i = n(928),
                o = n(33),
                s = n(698),
                a = n(645),
                u = n(838),
                c = {
                    mixins: [a.a],
                    data: function() {
                        return {
                            predefined: i.map((function(t) {
                                return {
                                    id: t,
                                    label: t
                                }
                            })),
                            isCustomQuestion: !1
                        }
                    },
                    mounted: function() {
                        this.$refs.dropdown.selectItem(this.predefined[Math.floor(Math.random() * this.predefined.length)]), this.predefined.push({
                            id: "other",
                            label: "Other..."
                        })
                    },
                    methods: {
                        changed: function(t) {
                            this.isCustomQuestion = "other" === t.id
                        },
                        valueConverter: function(t) {
                            return "other" === t.id ? "other" : t.label
                        },
                        getQuestion: function() {
                            var t = this.$refs.dropdown.value;
                            return "other" !== t.id ? t.label : this.$refs.customQuestion.value
                        }
                    },
                    components: {
                        AInput: o.a,
                        Dropdown: s.a,
                        MinMaxAlphanumeric: u.a
                    }
                },
                l = n(0),
                d = Object(l.a)(c, r, [], !1, null, null, null);
            d.options.__file = "node_modules/@upwork/sensitive-zone/components/security-question/inputs/security-question-and-answer.vue";
            e.a = d.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("checkbox", {
                    attrs: {
                        id: "lockingNotice",
                        required: !0
                    }
                }, [this._v("\n        I understand my account will be locked if I am unable to answer this question\n    ")]), this._v(" "), e("checkbox", {
                    attrs: {
                        id: "remember",
                        required: !1
                    }
                }, [this._v("\n        Keep me logged in on this device\n    ")])], 1)
            };
            r._withStripped = !0;
            var i = n(645),
                o = n(650),
                s = {
                    mixins: [i.a],
                    components: {
                        Checkbox: o.a
                    }
                },
                a = n(0),
                u = Object(a.a)(s, r, [], !1, null, null, null);
            u.options.__file = "node_modules/@upwork/sensitive-zone/components/security-question/inputs/security-question-options.vue";
            e.a = u.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement;
                return (this._self._c || t)("custom", {
                    attrs: {
                        name: "otpDigitsOnly",
                        "for-input": this.forInput,
                        message: this.message,
                        callback: this.sixDigitValidator
                    }
                })
            };
            r._withStripped = !0;
            var i = n(647),
                o = {
                    props: {
                        limit: {
                            type: Number,
                            default: 6
                        },
                        forInput: String
                    },
                    computed: {
                        message: function() {
                            return "Code should consist of " + this.limit + " digits"
                        }
                    },
                    methods: {
                        sixDigitValidator: function(t) {
                            return /^[0-9]{6}$/.test(t) ? Promise.resolve() : Promise.reject()
                        }
                    },
                    components: {
                        Custom: i.a
                    }
                },
                s = n(0),
                a = Object(s.a)(o, r, [], !1, null, null, null);
            a.options.__file = "node_modules/@upwork/auth-common/components/validators/otp-code.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "up-loader-container"
                }, [this._t("default"), this._v(" "), e("div", {
                    staticClass: "up-loader-overlay",
                    class: {
                        "is-open": this.locked
                    },
                    attrs: {
                        role: "status",
                        "aria-busy": this.locked ? "true" : "false",
                        "aria-live": this.locked ? "polite" : void 0,
                        "aria-label": "Section is loading"
                    }
                }, [this._t("loaderMessage"), this._v(" "), e("up-c-icon", {
                    attrs: {
                        name: "spinner",
                        size: "lg"
                    }
                })], 2)], 2)
            };
            r._withStripped = !0;
            var i = n(47),
                o = (n(687), {
                    props: {
                        locked: Boolean
                    },
                    components: {
                        UpCIcon: i.
                        default
                    }
                }),
                s = (n(1034), n(0)),
                a = Object(s.a)(o, r, [], !1, null, "b48f689a", null);
            a.options.__file = "node_modules/@upwork/auth-common/components/loader.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            var r = n(1),
                i = "incorrect_otp",
                o = "exceeded";
            e.a = function(t, e, n) {
                var s = 0;
                return function(a) {
                    var u = a.data;
                    if (u) {
                        var c = u.eventCode;
                        return n && i === c && ++s >= n && (c = o), o === c && r.a.dispatch("auth/challenge/" + t + "/markLimit", e), a
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = null;
            e.a = {
                set: function(t) {
                    r = t
                },
                get: function() {
                    return r
                },
                getModalTtlKey: function(t) {
                    return "modal_".concat(t, "_ttl")
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = 0;
            e.a = {
                ID: "vsID",
                extend: function(t) {
                    return t && !t[this.ID] && (t[this.ID] = "vs" + ++r), t
                }
            }
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = {
                SUBMITTING: "submitting",
                SUBMITTED: "submitted",
                INVALID: "invalid",
                CANCELED: "canceled"
            }
        },
        function(t, e) {
            var n, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(t) {
                if (!t) throw new Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, e.getSymbolTotalCodewords = function(t) {
                return r[t]
            }, e.getBCHDigit = function(t) {
                for (var e = 0; 0 !== t;) e++, t >>>= 1;
                return e
            }, e.setToSJISFunction = function(t) {
                if ("function" != typeof t) throw new Error('"toSJISFunc" is not a valid function.');
                n = t
            }, e.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, e.toSJIS = function(t) {
                return n(t)
            }
        },
        function(t, e, n) {
            var r = n(912),
                i = n(913);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, e.MIXED = {
                bit: -1
            }, e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits) throw new Error("Invalid mode: " + t);
                if (!r.isValid(e)) throw new Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
            }, e.getBestModeForData = function(t) {
                return i.testNumeric(t) ? e.NUMERIC : i.testAlphanumeric(t) ? e.ALPHANUMERIC : i.testKanji(t) ? e.KANJI : e.BYTE
            }, e.toString = function(t) {
                if (t && t.id) return t.id;
                throw new Error("Invalid mode")
            }, e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "numeric":
                                return e.NUMERIC;
                            case "alphanumeric":
                                return e.ALPHANUMERIC;
                            case "kanji":
                                return e.KANJI;
                            case "byte":
                                return e.BYTE;
                            default:
                                throw new Error("Unknown mode: " + t)
                        }
                    }(t)
                } catch (t) {
                    return n
                }
            }
        }, , , , , , ,
        function(t, e, n) {
            "use strict";
            e.a = Object.freeze({
                SETTINGS: 1,
                MAIN: 2,
                LOG_OUT: 3
            })
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "row flex-1"
                }, [n("div", {
                    staticClass: "col-md-12"
                }, [n("illustration"), t._v(" "), n("a-form", {
                    attrs: {
                        id: t.id,
                        name: t.name
                    }
                }, [t.isBiometricEnabledOnDevice ? n("div", [n("div", {
                    staticClass: "mb-10"
                }, [t._v("\n                    Would you like to enable " + t._s(t.availableBiometricLabel) + "? It's a quicker and more secure alternative\n                    to entering your password. This feature is available when using your mobile app.\n                ")]), t._v(" "), n("div", [t._v('You can turn this feature on or off anytime from "Settings/Password & security" in your mobile app.')])]) : n("div", [n("div", {
                    staticClass: "mb-10"
                }, [t._v("If youâ€™d like to use " + t._s(t.availableBiometricLabel) + " for authenticating on Upwork. you must first enable it on your device.")]), t._v(" "), n("div", [n("a", {
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: function(e) {
                            return t.openSettings()
                        }
                    }
                }, [t._v("\n                    Go to system Settings")]), t._v(" on your device to do so now,\n                    Then return Upwork and enable this feature in Settings > Password & security > Authentication Options.\n                ")])])])], 1)])
            };
            r._withStripped = !0;
            var i = n(4),
                o = n.n(i),
                s = n(8),
                a = n.n(s),
                u = n(10),
                c = n(55),
                l = n(7),
                d = n(29),
                f = n(640),
                h = n(3),
                p = n(955),
                m = n(17),
                v = n(9);

            function g() {
                var t = window.navigator.userAgent;
                return Object(m.b)(t) ? "iOS" : Object(m.a)(t) ? "Android" : "Undefined"
            }
            var b = {
                    submitLabel: "Enable",
                    cancelLabel: "No, thanks",
                    mixins: [u.a, c.a, h.a],
                    props: {
                        name: {
                            default: "setFido2App"
                        }
                    },
                    mounted: function() {
                        var t = this;
                        return a()(o.a.mark((function e() {
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f.a.onMessage((function(e) {
                                            "up/lifecycle/v1/APPLICATION_CHANGED" === e.type && "foregrounded" === e.payload.event && t.biometricInit()
                                        })), e.next = 3, t.biometricInit();
                                    case 3:
                                        t.biometricEnabledDependentActions();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    methods: {
                        biometricEnabledDependentActions: function() {
                            this.setControlsForView(), this.isBiometricEnabledOnDevice && v.a.dispatch("auth/biometric/setEnrolmentShown")
                        },
                        setControlsForView: function() {
                            v.a.dispatch("auth/form/controls", {
                                formId: this.id,
                                controls: this.isBiometricEnabledOnDevice ? [] : [{
                                    type: "cancel",
                                    kind: "up-btn-default",
                                    label: "Cancel"
                                }]
                            })
                        },
                        openSettings: function() {
                            this.$eventLog("openSettingsEvent"), f.a.post("up/navigation/v1/OPEN_DEVICE_SETTINGS")
                        },
                        onCustomSubmit: function() {
                            return !!this.isConfirmed || this.createCredentials().then((function() {
                                return Promise.reject(!1)
                            }))
                        },
                        createCredentials: function() {
                            var t = this;
                            return a()(o.a.mark((function e() {
                                var n, r, i, s;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            v.a.dispatch("auth/webauthn/add/setAuthenticatorAttachment", "platform"), n = {
                                                context: t.id,
                                                name: "primary ".concat(g(), " ").concat((new Date).toISOString()),
                                                primary: !0
                                            }, r = 2;
                                        case 3:
                                            return e.next = 5, v.a.dispatch("auth/webauthn/add/init", n);
                                        case 5:
                                            return e.next = 7, v.a.dispatch("auth/webauthn/add/createCredentials", n);
                                        case 7:
                                            return e.next = 9, v.a.dispatch("auth/webauthn/add/finalize", n);
                                        case 9:
                                            i = e.sent;
                                        case 10:
                                            if (i.retry && --r) {
                                                e.next = 3;
                                                break
                                            }
                                        case 11:
                                            (s = i.uid) ? (v.a.dispatch("auth/challenge/fido2Primary/setList", i.fido2Primary), v.a.dispatch("auth/challenge/fido2Primary/setUid", s), v.a.dispatch("auth/biometric/enableForCurrentUser", {
                                                fido2Uid: s,
                                                rawId: v.a.getters["auth/webauthn/add/credentials"].stringifiedRawId
                                            }), t.isConfirmed = !0, v.a.dispatch("auth/form/submit", t.id)) : d.a.setUndefinedError(t.id);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        logEvents: function(t) {
                            var e = this;
                            t.subLocation("mobile_app_biometric_auth_set_up"), this.biometricInit().then((function() {
                                t.impression("biometric_setup_modal_shown").data((function() {
                                    return {
                                        system_settings_enabled: e.isBiometricEnabledOnDevice
                                    }
                                })).now()
                            })), t.click("enable").onSubmit(this.id), t.impression("biometric_auth_enabled_successfully").onSuccessSubmit(this.id), t.impression("biometric_auth_enable_failure").onUnexpectedError(this.id), t.click("no_thanks").condition((function() {
                                return e.isBiometricEnabledOnDevice
                            })).onCancel(this.id), t.click("cancel").onCancel(this.id), t.click("goto_system_settings").onEvent("openSettingsEvent")
                        }
                    },
                    watch: {
                        isBiometricEnabledOnDevice: function() {
                            this.biometricEnabledDependentActions()
                        }
                    },
                    components: {
                        AForm: l.a,
                        Illustration: p.
                        default
                    }
                },
                y = n(0),
                w = Object(y.a)(b, r, [], !1, null, null, null);
            w.options.__file = "node_modules/@upwork/sensitive-zone/components/set-fido2-app/form.vue";
            e.a = w.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("input-group", {
                    attrs: {
                        id: t.id,
                        required: t.required
                    }
                }, [t.hasLabel ? n("label", {
                    staticClass: "up-label",
                    attrs: {
                        for: t.domId
                    }
                }, [t._t("default")], 2) : t._e(), t._v(" "), n("div", {
                    staticClass: "code-container"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.inputValue,
                        expression: "inputValue"
                    }],
                    ref: "input",
                    attrs: {
                        type: "tel",
                        id: t.domId,
                        placeholder: " ",
                        maxlength: t.maxlength,
                        "aria-label": "code"
                    },
                    domProps: {
                        value: t.inputValue
                    },
                    on: {
                        input: [
                            function(e) {
                                e.target.composing || (t.inputValue = e.target.value)
                            },
                            function(e) {
                                return t.onChange()
                            }
                        ],
                        keydown: function(e) {
                            return t.onKeyDown(e)
                        }
                    }
                }), t._v(" "), t._l(t.limit, (function(e) {
                    return n("div", {
                        key: e,
                        staticClass: "underline",
                        class: t.isFilled(e) ? "filled" : ""
                    })
                }))], 2), t._v(" "), t._t("hint", null, {
                    slot: "hint"
                }), t._v(" "), t._t("after-alert-hint", null, {
                    slot: "after-alert-hint"
                })], 2), t._v(" "), n("code-validator", {
                    attrs: {
                        limit: t.limit,
                        "for-input": t.id
                    }
                })], 1)
            };
            r._withStripped = !0;
            var i = n(668),
                o = n(657),
                s = n(704),
                a = {
                    mixins: [o.a],
                    props: {
                        id: {
                            type: String,
                            required: !0
                        },
                        limit: {
                            type: Number,
                            default: 6
                        }
                    },
                    data: function() {
                        return {
                            inputValue: ""
                        }
                    },
                    computed: {
                        maxlength: function() {
                            return 2 * this.limit - 1
                        }
                    },
                    methods: {
                        onChange: function() {
                            var t = this.removeChar(this.inputValue).replace(/ */g, ""),
                                e = t.split("").join(" ");
                            if (t.length < this.limit && 0 !== t.length && (e += " "), e !== this.inputValue) {
                                var n = this.$refs.input;
                                n.classList.add("hide-caret"), this.adjustCaret(e).then((function() {
                                    n.classList.remove("hide-caret")
                                })), this.inputValue = e
                            }
                            this.internalValue = t, this.$emit("input", this.internalValue)
                        },
                        removeChar: function(t) {
                            var e = this.$refs.input;
                            if (e.selectionStart !== e.selectionEnd) return t;
                            var n = this.findChangePos(t);
                            if (-1 === n) return t;
                            switch (this.lastKeyCode) {
                                case 8:
                                    return t.substr(0, n) + t.substr(n + 1);
                                case 46:
                                    return t.substr(0, n + 1) + t.substr(n + 2)
                            }
                            return t
                        },
                        findChangePos: function(t) {
                            var e = t.search(/\S\S/);
                            return -1 !== e ? e : -1 !== (e = t.search(/\s\s/)) || 2 * this.limit - 1 === t.length ? -1 : t.search(/\S$/)
                        },
                        adjustCaret: function(t) {
                            var e = this;
                            return new Promise((function(t) {
                                if ("" === e.internalValue) return t();
                                var n = e.$refs.input,
                                    r = n.selectionStart,
                                    i = n.selectionEnd;
                                setTimeout((function() {
                                    n.selectionStart = e.adjustCaretPart(r), n.selectionEnd = e.adjustCaretPart(i), t()
                                }), 10)
                            }))
                        },
                        adjustCaretPart: function(t) {
                            return 0 == t % 2 ? t : t + this.getAdjustDirection()
                        },
                        getAdjustDirection: function() {
                            switch (this.lastKeyCode) {
                                case 8:
                                case 37:
                                    return -1;
                                case 46:
                                    return 0
                            }
                            return 1
                        },
                        onKeyDown: function(t) {
                            this.lastKeyCode = t.keyCode
                        },
                        isFilled: function(t) {
                            return !!this.internalValue && this.internalValue.length >= t
                        },
                        focus: function() {
                            var t = this.$refs.input;
                            t && t.focus()
                        }
                    },
                    components: {
                        InputGroup: i.a,
                        CodeValidator: s.a
                    }
                },
                u = (n(987), n(0)),
                c = Object(u.a)(a, r, [], !1, null, "6dfffedb", null);
            c.options.__file = "node_modules/@upwork/auth-common/components/inputs/otp-code-separate.vue";
            e.a = c.exports
        },
        function(t, e) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        },
        function(t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return n.call(t, e)
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(878);
            o.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }();
            var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

            function o(t, e, n) {
                return o.TYPED_ARRAY_SUPPORT || this instanceof o ? "number" == typeof t ? u(this, t) : function(t, e, n, r) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return function(t, e, n, r) {
                        if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                        var i;
                        i = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                        o.TYPED_ARRAY_SUPPORT ? i.__proto__ = o.prototype : i = c(t, i);
                        return i
                    }(t, e, n, r);
                    if ("string" == typeof e) return function(t, e) {
                        var n = 0 | d(e),
                            r = a(t, n),
                            i = r.write(e);
                        i !== n && (r = r.slice(0, i));
                        return r
                    }(t, e);
                    return function(t, e) {
                        if (o.isBuffer(e)) {
                            var n = 0 | s(e.length),
                                r = a(t, n);
                            return 0 === r.length || e.copy(r, 0, 0, n), r
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (i = e.length) != i ? a(t, 0) : c(t, e);
                            if ("Buffer" === e.type && Array.isArray(e.data)) return c(t, e.data)
                        }
                        var i;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }(this, t, e, n) : new o(t, e, n)
            }

            function s(t) {
                if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                return 0 | t
            }

            function a(t, e) {
                var n;
                return o.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(e)).__proto__ = o.prototype : (null === (n = t) && (n = new o(e)), n.length = e), n
            }

            function u(t, e) {
                var n = a(t, e < 0 ? 0 : 0 | s(e));
                if (!o.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < e; ++r) n[r] = 0;
                return n
            }

            function c(t, e) {
                for (var n = e.length < 0 ? 0 : 0 | s(e.length), r = a(t, n), i = 0; i < n; i += 1) r[i] = 255 & e[i];
                return r
            }

            function l(t, e) {
                var n;
                e = e || 1 / 0;
                for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                    if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }

            function d(t) {
                return o.isBuffer(t) ? t.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) ? t.byteLength : ("string" != typeof t && (t = "" + t), 0 === t.length ? 0 : l(t).length)
            }
            o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            })), o.prototype.write = function(t, e, n) {
                void 0 === e || void 0 === n && "string" == typeof e ? (n = this.length, e = 0) : isFinite(e) && (e |= 0, isFinite(n) ? n |= 0 : n = void 0);
                var r = this.length - e;
                if ((void 0 === n || n > r) && (n = r), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                return function(t, e, n, r) {
                    return function(t, e, n, r) {
                        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                        return i
                    }(l(e, t.length - n), t, n, r)
                }(this, t, e, n)
            }, o.prototype.slice = function(t, e) {
                var n, r = this.length;
                if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), o.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = o.prototype;
                else {
                    var i = e - t;
                    n = new o(i, void 0);
                    for (var s = 0; s < i; ++s) n[s] = this[s + t]
                }
                return n
            }, o.prototype.copy = function(t, e, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var i, s = r - n;
                if (this === t && n < e && e < r)
                    for (i = s - 1; i >= 0; --i) t[i + e] = this[i + n];
                else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < s; ++i) t[i + e] = this[i + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
                return s
            }, o.prototype.fill = function(t, e, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (e = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === t.length) {
                        var r = t.charCodeAt(0);
                        r < 256 && (t = r)
                    }
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                if (n <= e) return this;
                var i;
                if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                    for (i = e; i < n; ++i) this[i] = t;
                else {
                    var s = o.isBuffer(t) ? t : new o(t),
                        a = s.length;
                    for (i = 0; i < n - e; ++i) this[i + e] = s[i % a]
                }
                return this
            }, o.concat = function(t, e) {
                if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return a(null, 0);
                var n;
                if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                var i = u(null, e),
                    s = 0;
                for (n = 0; n < t.length; ++n) {
                    var c = t[n];
                    if (!o.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
                    c.copy(i, s), s += c.length
                }
                return i
            }, o.byteLength = d, o.prototype._isBuffer = !0, o.isBuffer = function(t) {
                return !(null == t || !t._isBuffer)
            }, t.exports.alloc = function(t) {
                var e = new o(t);
                return e.fill(0), e
            }, t.exports.from = function(t) {
                return new o(t)
            }
        },
        function(t, e, n) {},
        function(t, e, n) {}, ,
        function(t, e, n) {
            "use strict";
            var r = n(764);
            e.a = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return function(e) {
                    return function(n, i) {
                        return function o() {
                            return r.a.extendHeaders(i.headers), e(n, i).
                            catch((function() {
                                return {
                                    data: {}
                                }
                            })).then((function(t) {
                                return t.data ? t : t.clone().json().
                                catch((function() {
                                    return {}
                                })).then((function(e) {
                                    return t.data = e, t
                                }))
                            })).then((function(e) {
                                return t.reduce((function(t, n) {
                                    return t.then((function() {
                                        return Promise.resolve(n(e, i, o)).then((function(t) {
                                            return e = t || e
                                        }))
                                    }))
                                }), Promise.resolve(e))
                            }))
                        }()
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/logout"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-security-question/update/{code}"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-security-question/sent"
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                methods: {
                    getTargetFormId: function() {
                        var t = this.forForm || this.formId || function t(e) {
                            if (e) {
                                var n = e.forForm || e.formId;
                                return n || t(e.$parent)
                            }
                        }(this.$parent);
                        if (void 0 === t) throw new Error("element is not in form or for-form/form-id is not defined in element or in its parent");
                        return t
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1),
                i = "auth/securityQuestion/securityQuestion";
            e.a = {
                props: {
                    lockVisualSqChange: Boolean
                },
                computed: {
                    securityQuestion: function() {
                        return this.lockVisualSqChange ? null : r.a.getters[i]
                    }
                },
                created: function() {
                    r.a.getters[i] || r.a.dispatch("auth/securityQuestion/init")
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                inserted: function(t, e) {
                    setTimeout((function() {
                        var n = document.createElement("div");
                        n.classList.add("sr-only"), n.setAttribute("aria-live", void 0 !== e.value ? e.value : "polite"), n.innerHTML = t.innerHTML, t.parentElement.insertBefore(n, t)
                    }), 300)
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(844);
            e.a = {
                waitForConfirm: function(t) {
                    return new Promise((function(e) {
                        var n = r.a.openWebsocketWithToken(t);
                        n.onmessage = function(t) {
                            try {
                                if ("authPushNotificationConfirmed" !== JSON.parse(t.data).eventName) return
                            } catch (t) {
                                return
                            }
                            n.close()
                        }, n.onclose = function() {
                            e()
                        }, setTimeout((function() {
                            return n.close()
                        }), 3e4)
                    }))
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/fido2/visitor/init-verify"
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "auth-growable-flex"
                }, [n(t.view, t._b({
                    tag: "component",
                    attrs: {
                        id: t.viewId
                    }
                }, "component", t.$attrs, !1), [t._l(t.$slots, (function(e, n) {
                    return t._t(n, null, {
                        slot: n
                    })
                }))], 2)], 1)
            };
            r._withStripped = !0;
            var i = n(22),
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("send-form", t._g(t._b({
                        staticClass: "text-center phone-form",
                        attrs: {
                            "challenge-name": t.challengeName,
                            id: t.id,
                            illustration: t.illustration
                        }
                    }, "send-form", t.$attrs, !1), t.$listeners), [t._l(t.$slots, (function(e, n) {
                        return t._t(n, null, {
                            slot: n
                        })
                    })), t._v(" "), n("div", {
                        staticClass: "mb-20"
                    }, [n("div", {
                        staticClass: "mb-10 text-left"
                    }, [n("strong", [t._v("Get a text message verification code")])]), t._v(" "), n("div", {
                        staticClass: "mb-10 text-left"
                    }, [t._v("\n            Select "), n("strong", [t._v("Send")]), t._v(" to receive a verification code to\n            "), n("obfuscated-phone", {
                        attrs: {
                            "phone-number": t.phoneNumber
                        }
                    }), t._v(".\n        ")], 1)])], 2)
                };
            o._withStripped = !0;
            var s = n(694),
                a = n(745),
                u = n(670),
                c = n(3),
                l = n(12),
                d = n(14),
                f = (n(13), n(63), n(661), {
                    mixins: [l.a, s.a, c.a],
                    data: function() {
                        return {
                            challengeName: d.c.PHONE,
                            illustration: function() {
                                return n.e(39).then(n.bind(null, 78))
                            }
                        }
                    },
                    methods: {
                        logEvents: function(t) {
                            t.subLocation("device_authorization_sms_otp"), t.impression("sms_otp_challenge_impression").now(), t.click("send").onClick("next_continue"), t.click("try_another_method").onClick("tryAnother_cancel")
                        }
                    },
                    components: {
                        SendForm: a.a,
                        ObfuscatedPhone: u.a
                    }
                }),
                h = n(0),
                p = Object(h.a)(f, o, [], !1, null, null, null);
            p.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/phone/init-send.vue";
            var m = p.exports,
                v = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("otp-form", t._g(t._b({
                        staticClass: "text-center phone-form",
                        attrs: {
                            "challenge-name": t.challengeName,
                            "allow-send": !1,
                            "allow-resend": !0,
                            "input-type": "simple",
                            "success-send-message": "Weâ€™ve sent an SMS message containing a code to your mobile device.",
                            "init-resend-countdown-on-load": !1,
                            id: t.id,
                            illustration: t.illustration,
                            "not-available": t.limitExceeded
                        }
                    }, "otp-form", t.$attrs, !1), t.$listeners), [n("span", {
                        attrs: {
                            slot: "title"
                        },
                        slot: "title"
                    }, [t._v("We sent a text message to your mobile device")]), t._v(" "), n("div", {
                        staticClass: "mb-20"
                    }, [n("div", {
                        staticClass: "mb-10 text-left"
                    }, [t._v("\n            A text message with a verification code was sent to\n            "), n("obfuscated-phone", {
                        attrs: {
                            "phone-number": t.phoneNumber
                        }
                    })], 1)])])
                };
            v._withStripped = !0;
            var g = n(667),
                b = n(1),
                y = {
                    mixins: [s.a, c.a],
                    formControlsAlignment: "side",
                    cancelButton: !0,
                    closeOnSubmit: !0,
                    props: {
                        id: String
                    },
                    data: function() {
                        return {
                            challengeName: d.c.PHONE,
                            illustration: function() {
                                return n.e(38).then(n.bind(null, 79))
                            }
                        }
                    },
                    computed: {
                        limitExceeded: function() {
                            return b.a.getters["auth/challenge/phone/limits"] > 0
                        }
                    },
                    methods: {
                        logEvents: function(t) {
                            t.subLocation("device_authorization_sms_otp"), t.impression("modal_impression").now(), t.click("resend_code").onClick("resendOtpEvent"), t.click("authorize_button_success").onSuccessSubmit(this.id), t.click("authorize_button_fail").onValidationError(this.id), t.click("try_another_method").onClick("tryAnother_cancel"), t.click("next").onClick("next_continue")
                        }
                    },
                    components: {
                        OtpForm: g.a,
                        ObfuscatedPhone: u.a
                    }
                },
                w = Object(h.a)(y, v, [], !1, null, null, null);
            w.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/phone/form.vue";
            var _ = w.exports,
                k = (n(692), {
                    mixins: [i.a],
                    props: {
                        id: String
                    },
                    created: function() {
                        b.a.dispatch("auth/challenge/phone/resetLimit"), b.a.dispatch("auth/challenge/phone/allowSwitch", !1), b.a.dispatch("auth/sensitiveZone/deviceAuthorization/controls/resetBehavior"), b.a.getters["auth/challenge/phone/limits"] && b.a.dispatch("auth/sensitiveZone/deviceAuthorization/controls/enableCustomBehavior"), b.a.subscribeAction((function(t) {
                            "auth/challenge/phone/markLimit" === t.type && b.a.dispatch("auth/sensitiveZone/deviceAuthorization/controls/enableCustomBehavior")
                        }))
                    },
                    methods: {
                        viewState: function(t) {
                            t.switchTo(t.extend(m, {
                                submitLabel: "Send",
                                formControlsAlignment: "side",
                                closeOnSubmit: !1
                            })).now(), t.switchTo(t.extend(_, {
                                formControlsAlignment: "side"
                            })).onSuccessSubmit(m)
                        }
                    }
                }),
                S = Object(h.a)(k, r, [], !1, null, null, null);
            S.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/phone.vue";
            e.a = S.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "auth-growable-flex"
                }, [n(t.view, t._b({
                    tag: "component",
                    attrs: {
                        id: t.viewId
                    }
                }, "component", t.$attrs, !1), [t._l(t.$slots, (function(e, n) {
                    return t._t(n, null, {
                        slot: n
                    })
                }))], 2)], 1)
            };
            r._withStripped = !0;
            var i = n(22),
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("send-form", t._g(t._b({
                        staticClass: "text-center push-form",
                        attrs: {
                            "challenge-name": t.challengeName,
                            "is-initial-send": !0,
                            "init-resend-countdown-on-load": !1,
                            id: t.id,
                            illustration: t.illustration
                        }
                    }, "send-form", t.$attrs, !1), t.$listeners), [t._l(t.$slots, (function(e, n) {
                        return t._t(n, null, {
                            slot: n
                        })
                    })), t._v(" "), n("div", {
                        staticClass: "mb-20"
                    }, [n("div", {
                        staticClass: "mb-10 text-left"
                    }, [n("strong", [t._v("Get a notification sent to your mobile device")])]), t._v(" "), n("div", {
                        staticClass: "mb-10 text-left"
                    }, [t._v("\n            Select "), n("strong", [t._v("Send")]), t._v(" to receive a confirmation prompt in the Upwork app on your mobile device.\n            You must be signed into the app to receive the prompt.\n        ")])])], 2)
                };
            o._withStripped = !0;
            var s = n(14),
                a = n(694),
                u = n(745),
                c = n(3),
                l = n(12),
                d = (n(13), n(63), n(661), {
                    mixins: [l.a, a.a, c.a],
                    data: function() {
                        return {
                            challengeName: s.c.PUSH,
                            illustration: function() {
                                return n.e(10).then(n.bind(null, 81))
                            }
                        }
                    },
                    methods: {
                        logEvents: function(t) {
                            t.subLocation("device_authorization_map"), t.impression("map_challenge_impression").now(), t.click("send").onClick("next_continue"), t.click("try_another_method").onClick("tryAnother_cancel")
                        }
                    },
                    components: {
                        SendForm: u.a
                    }
                }),
                f = n(0),
                h = Object(f.a)(d, o, [], !1, null, null, null);
            h.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/push/init-send.vue";
            var p = h.exports,
                m = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("otp-form", t._g(t._b({
                        staticClass: "push-form text-left",
                        attrs: {
                            id: t.id,
                            "challenge-name": t.challengeName,
                            "success-send-message": "As you requested, we resent the prompt to your mobile device.",
                            "input-type": "none",
                            "is-initial-send": !1,
                            "do-not-disable-submit": !0,
                            "init-resend-countdown-on-load": !1,
                            "resend-on-submit": t.resendOnSubmit,
                            illustration: t.illustration,
                            "send-config": t.sendConfig
                        },
                        on: {
                            resend: function(e) {
                                return t.onResend()
                            }
                        }
                    }, "otp-form", t.$attrs, !1), t.$listeners), [n("span", {
                        attrs: {
                            slot: "title",
                            "aria-live": "polite"
                        },
                        slot: "title"
                    }, [t._v("Weâ€™ve sent a notification to your mobile device")]), t._v(" "), n("p", {
                        staticClass: "mb-10 text-left"
                    }, [t._v("\n        Open the notification from your mobile device and select "), n("strong", [t._v("Confirm")]), t._v(" in the Upwork app.\n    ")]), t._v(" "), n("p", {
                        staticClass: "mb-10 text-left"
                    }, [t._v("\n        If you donâ€™t see the notification, select "), n("strong", [t._v("Resend")]), t._v(" below.\n    ")])])
                };
            m._withStripped = !0;
            var v = n(4),
                g = n.n(v),
                b = n(8),
                y = n.n(b),
                w = n(38),
                _ = n(644),
                k = n(667),
                S = n(68),
                E = n(734),
                x = n(9),
                C = {
                    mixins: [c.a],
                    props: {
                        id: String,
                        sendConfig: {
                            type: Object,
                            default: function() {}
                        }
                    },
                    data: function() {
                        return {
                            challengeName: s.c.PUSH,
                            checkCount: 0,
                            resendCount: 3,
                            resendOnSubmit: !0,
                            isDestroyed: !1,
                            illustration: function() {
                                return n.e(36).then(n.bind(null, 82))
                            }
                        }
                    },
                    computed: {
                        subFormId: function() {
                            return this.id || S.a.formId(this)
                        }
                    },
                    mounted: function() {
                        this.checkSeveralTimes()
                    },
                    destroyed: function() {
                        this.isDestroyed = !0
                    },
                    methods: {
                        checkSeveralTimes: function() {
                            var t = this;
                            return y()(g.a.mark((function e() {
                                var n;
                                return g.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = t.checkCount, t.checkCount = 30, !(n > 0)) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (e.t0 = !t.isDestroyed && t.checkCount > 0, !e.t0) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 8, t.check();
                                        case 8:
                                            e.t0 = !e.sent;
                                        case 9:
                                            if (!e.t0) {
                                                e.next = 13;
                                                break
                                            }
                                            t.checkCount--, e.next = 4;
                                            break;
                                        case 13:
                                            t.$eventLog("timedOutEvent");
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        check: function() {
                            var t = this;
                            return new Promise((function(e) {
                                var n, r;
                                E.a.waitForConfirm(null === (n = t.sendConfig) || void 0 === n || null === (r = n.meta) || void 0 === r ? void 0 : r.authToken).then((function() {
                                    t.resendOnSubmit = !1, t.$nextTick((function() {
                                        e(x.a.dispatch("auth/form/submit", t.id)), setTimeout((function() {
                                            return t.resendOnSubmit = !0
                                        }), 100)
                                    }))
                                }))
                            }))
                        },
                        switchToFallback: function() {
                            x.a.dispatch("auth/challenge/push/markLimit", _.a.SEND)
                        },
                        onResend: function() {
                            this.checkSeveralTimes(), --this.resendCount <= 0 && this.switchToFallback()
                        },
                        logEvents: function(t) {
                            t.subLocation("device_authorization_map"), t.click("resend").onClick("next_continue"), t.click("try_another_method").onClick("tryAnother_cancel"), t.click("timed_out_notification").onEvent("timedOutEvent")
                        }
                    },
                    directives: {
                        ClickEvent: w.a
                    },
                    components: {
                        OtpForm: k.a
                    }
                },
                O = (n(993), Object(f.a)(C, m, [], !1, null, "84af0d00", null));
            O.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/push/form.vue";
            var I = O.exports,
                A = {
                    mixins: [i.a],
                    props: {
                        id: String
                    },
                    methods: {
                        viewState: function(t) {
                            t.switchTo(t.extend(p, {
                                submitLabel: "Send",
                                formControlsAlignment: "side",
                                closeOnSubmit: !1
                            })).now(), t.switchTo(t.extend(I, {
                                submitLabel: "Resend",
                                formControlsAlignment: "side",
                                closeOnSubmit: !1
                            })).onSuccessSubmit(p)
                        }
                    }
                },
                T = Object(f.a)(A, r, [], !1, null, null, null);
            T.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/push.vue";
            e.a = T.exports
        },
        function(t, e, n) {
            "use strict";
            var r = n(923),
                i = n.n(r),
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n(t.tagName, {
                        tag: "component"
                    }, [t._t("reference"), t._v(" "), n("up-transition-intro", {
                        on: {
                            "after-leave": t.doDestroy
                        }
                    }, [n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShown,
                            expression: "isShown"
                        }],
                        ref: "popper",
                        class: [t.containerClasses, {
                            "up-popover-appended-to-body": t.appendToBody
                        }],
                        attrs: {
                            id: t.popperID,
                            role: "tooltip"
                        },
                        on: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.close(e)
                            }
                        }
                    }, [n("div", {
                        ref: "popperLayout",
                        class: t.classes
                    }, [n("div", {
                        staticClass: "popper-wrapper"
                    }, [n("div", {
                        staticClass: "popper-inner"
                    }, [t.closeButton && !t.disabled ? n("button", {
                        staticClass: "up-btn-reset up-popper-close",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: t.close
                        }
                    }, [n("span", {
                        staticClass: "sr-only"
                    }, [t._v("Close the tooltip")]), t._v(" "), n("up-c-icon-v2", {
                        attrs: {
                            icon: t.closeIcon
                        }
                    })], 1) : t._e(), t._v(" "), t.disabled ? t._e() : n("div", {
                        staticClass: "popper-content"
                    }, [t._t("default")], 2), t._v(" "), t.visibleArrow ? n("div", {
                        staticClass: "arrow",
                        attrs: {
                            "x-arrow": ""
                        }
                    }) : t._e()])])])])])], 2)
                };
            o._withStripped = !0;
            var s = n(4),
                a = n.n(s),
                u = n(8),
                c = n.n(u),
                l = n(58),
                d = n.n(l),
                f = n(2),
                h = n.n(f),
                p = n(924),
                m = n.n(p),
                v = n(59),
                g = n(892);

            function b(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(n), !0).forEach((function(e) {
                        h()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function w(t, e, n) {
                t && e && n && t.addEventListener(e, n, !1)
            }

            function _(t, e, n) {
                t && e && t.removeEventListener(e, n, !1)
            }
            var k = 1;
            var S = {
                    injectStyles: [m.a],
                    name: "UpCPopper",
                    components: {
                        UpCIconV2: v.
                        default,
                        UpTransitionIntro: g.a
                    },
                    props: {
                        tagName: {
                            type: String,
                            default: "span"
                        },
                        customClass: {
                            type: String,
                            default: ""
                        },
                        target: {
                            type: String,
                            default: null
                        },
                        trigger: {
                            type: String,
                            default: "hover",
                            validator: function(t) {
                                return ["none", "click", "hover", "focus", "blur"].indexOf(t) > -1
                            }
                        },
                        autoClose: {
                            type: Boolean,
                            default: !0
                        },
                        delayOnMouseOver: {
                            type: Number,
                            default: 10
                        },
                        delayOnMouseOut: {
                            type: Number,
                            default: 200
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        appendToBody: {
                            type: Boolean,
                            default: !1
                        },
                        visibleArrow: {
                            type: Boolean,
                            default: !0
                        },
                        closeButton: {
                            type: Boolean,
                            default: !1
                        },
                        size: {
                            type: String,
                            default: "md",
                            validator: function(t) {
                                return ["sm", "md", "lg"].indexOf(t) > -1
                            }
                        },
                        placement: {
                            type: String,
                            default: "top",
                            validator: function(t) {
                                return ["top", "bottom", "left", "right"].indexOf(t) > -1
                            }
                        },
                        options: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {
                            closeIcon: function() {
                                return n.e(1).then(n.bind(null, 71))
                            },
                            popperJSLoaded: !1,
                            referenceElm: null,
                            popperJS: null,
                            showPopper: !1,
                            currentPlacement: "",
                            popperOptions: {},
                            popperID: "popper_".concat(k++),
                            focusable: [],
                            setFocusToTrigger: !0,
                            isClosing: !1
                        }
                    },
                    computed: {
                        isShown: function() {
                            return !this.disabled && this.showPopper && this.popperJSLoaded
                        },
                        containerClasses: function() {
                            var t;
                            return t = {
                                popper: !0
                            }, h()(t, this.$options.containerClass, !!this.$options.containerClass), h()(t, this.customClass, !0), t
                        },
                        classes: function() {
                            return h()({}, "size-".concat(this.size), !0)
                        }
                    },
                    watch: {
                        showPopper: function(t) {
                            var e = this;
                            t ? (this.$emit("open", this), this.popperJS && this.popperJS.enableEventListeners(), this.updatePopper(), this.focusable = d()(this.$refs.popper.querySelectorAll("a[href], area[href], input:not(:disabled), button:not(:disabled),\n            select:not(:disabled), textarea:not(:disabled), audio[controls],\n            video[controls], iframe, object, embed, [tabindex], [contenteditable]")).filter((function(t) {
                                return t.matches("".concat(t.tagName, ':not([tabindex^="-"])'))
                            })), this.focusable.length && (this.focusable[0].addEventListener("keydown", this.keydownFirst), this.focusable[this.focusable.length - 1].addEventListener("keydown", this.keydownLast))) : (this.popperJS && this.popperJS.disableEventListeners(), this.focusable = [], this.$emit("close", this), this.setFocusToTrigger ? setTimeout((function() {
                                e.isClosing = !0, e.referenceElm.focus()
                            }), 0) : this.setFocusToTrigger = !0)
                        },
                        disabled: function(t) {
                            t && (this.showPopper = !1)
                        }
                    },
                    mounted: function() {
                        this.appendedToBody = !1;
                        var t = this.options.placement || this.placement,
                            e = y({}, this.popperOptions.modifiers || {}, {}, this.options.modifiers || {});
                        switch (this.popperOptions = y({}, this.popperOptions, {}, this.options, {
                            modifiers: e,
                            placement: t
                        }), this.referenceElm = this.target ? document.querySelector(this.target) : this.$slots.reference[0].elm, this.popper = this.$refs.popperLayout, this.referenceElm.classList.add("up-popper-trigger"), !["INPUT", "BUTTON", "SELECT"].includes(this.referenceElm.tagName) && "none" !== this.trigger && (this.referenceElm.tabIndex = 0, this.referenceElm.getAttribute("role") || this.referenceElm.setAttribute("role", "button")), this.referenceElm.getAttribute("aria-describedby") || this.referenceElm.setAttribute("aria-describedby", this.popperID), this.trigger) {
                            case "click":
                                w(this.referenceElm, "click", this.toggle), w(document, "click", this.handleDocumentClick);
                                break;
                            case "hover":
                                w(this.referenceElm, "mouseover", this.onMouseOver), w(this.referenceElm, "mouseout", this.onMouseOut), w(this.popper, "mouseover", this.onMouseOver), w(this.popper, "mouseout", this.onMouseOut), w(this.referenceElm, "focus", this.onFocus), w(this.referenceElm, "blur", this.onBlur);
                                break;
                            case "focus":
                                w(this.referenceElm, "focus", this.onFocus), w(this.referenceElm, "blur", this.onBlur);
                                break;
                            case "blur":
                                w(this.referenceElm, "blur", this.open), w(this.referenceElm, "focus", this.close)
                        }
                        "none" !== this.trigger && w(this.referenceElm, "keydown", this.handleKeydown)
                    },
                    destroyed: function() {
                        this.destroyPopper()
                    },
                    methods: {
                        toggle: function() {
                            clearTimeout(this.timer), this.showPopper = !this.showPopper
                        },
                        open: function() {
                            this.disabled || (clearTimeout(this.timer), this.showPopper = !0)
                        },
                        close: function() {
                            clearTimeout(this.timer), this.showPopper = !1
                        },
                        doDestroy: function() {
                            this.popperJS && (this.popperJS.destroy(), this.popperJS = null), this.appendedToBody && (this.appendedToBody = !1, document.body.removeChild(this.popper.parentElement))
                        },
                        createPopper: function() {
                            var t = this;
                            return c()(a.a.mark((function e() {
                                var r, i;
                                return a.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, n.e(68).then(n.bind(null, 1529));
                                        case 2:
                                            r = e.sent, i = r.
                                            default, t.popperJSLoaded = !0, t.$nextTick((function() {
                                                t.appendToBody && !t.appendedToBody && (t.appendedToBody = !0, document.body.appendChild(t.popper.parentElement)), t.popperJS && t.popperJS.destroy && t.popperJS.destroy(), t.popperOptions.onCreate = function() {
                                                    t.$emit("created", t), t.$nextTick(t.updatePopper)
                                                }, t.popperJS = new i(t.referenceElm, t.popper, t.popperOptions)
                                            }));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        destroyPopper: function() {
                            clearTimeout(this.timer), _(this.referenceElm, "click", this.toggle), _(this.referenceElm, "focus", this.onFocus), _(this.referenceElm, "focus", this.close), _(this.referenceElm, "blur", this.open), _(this.referenceElm, "blur", this.onBlur), _(this.referenceElm, "mouseout", this.onMouseOut), _(this.referenceElm, "mouseover", this.onMouseOver), _(this.popper, "mouseout", this.onMouseOut), _(this.popper, "mouseover", this.onMouseOver), _(document, "click", this.handleDocumentClick), _(this.referenceElm, "keydown", this.handleKeydown), this.showPopper = !1, this.doDestroy()
                        },
                        updatePopper: function() {
                            this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper()
                        },
                        onMouseOver: function() {
                            var t = this;
                            clearTimeout(this.timer), this.timer = setTimeout((function() {
                                t.showPopper = !0
                            }), this.delayOnMouseOver)
                        },
                        onMouseOut: function() {
                            var t = this;
                            clearTimeout(this.timer), this.timer = setTimeout((function() {
                                t.showPopper = !1
                            }), this.delayOnMouseOut)
                        },
                        handleDocumentClick: function(t) {
                            (this.disabled || this.autoClose) && this.$el && this.referenceElm && !this.elementContains(this.$el, t.target) && !this.elementContains(this.referenceElm, t.target) && this.popper && !this.elementContains(this.popper, t.target) && this.close()
                        },
                        handleKeydown: function(t) {
                            9 !== t.keyCode || t.shiftKey ? 27 === t.keyCode ? this.close() : 32 === t.keyCode && (t.preventDefault(), "click" === this.trigger && this.toggle()) : this.focusable && this.focusable.length && (t.preventDefault(), this.focusable[0].focus())
                        },
                        keydownFirst: function(t) {
                            9 === t.keyCode && t.shiftKey && (t.preventDefault(), this.referenceElm.focus())
                        },
                        elementContains: function(t, e) {
                            return !(!t || "function" != typeof t.contains) && t.contains(e)
                        },
                        onFocus: function() {
                            this.isClosing ? this.isClosing = !1 : this.open()
                        },
                        onBlur: function() {
                            var t = this;
                            setTimeout((function() {
                                var e = document.activeElement === document.body ? null : document.activeElement;
                                !t.elementContains(t.$refs.popper, e) && t.showPopper && (t.setFocusToTrigger = !1, t.close())
                            }), 0)
                        },
                        keydownLast: function(t) {
                            9 !== t.keyCode || t.shiftKey || ("hover" !== this.trigger && "focus" !== this.trigger || (this.setFocusToTrigger = !1, this.close()), this.appendToBody && ("hover" !== this.trigger && "focus" !== this.trigger || (this.isClosing = !0), this.referenceElm.focus()))
                        }
                    }
                },
                E = n(0),
                x = Object(E.a)(S, o, [], !1, null, null, null);
            x.options.__file = "node_modules/@upwork/vue-components-core/src/popper/popper.vue";
            var C = x.exports,
                O = n(684),
                I = {
                    injectStyles: [i.a],
                    name: "UpCPopover",
                    extends: C,
                    containerClass: "up-popover",
                    props: {
                        closeButton: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            mq: O.a.data()
                        }
                    },
                    beforeMount: function() {
                        var t = this;
                        O.a.install(this), this.popperOptions = Object.assign(this.popperOptions, {
                            modifiers: {
                                fixedWidth: {
                                    enabled: !0,
                                    fn: function(e) {
                                        return "xs" === t.mq.breakpoint && (e.offsets.popper.left = 20), e
                                    },
                                    order: 499
                                },
                                preventOverflow: {
                                    padding: 0
                                },
                                offset: {
                                    left: 0
                                }
                            }
                        })
                    }
                },
                A = Object(E.a)(I, void 0, void 0, !1, null, null, null);
            A.options.__file = "node_modules/@upwork/vue-components-core/src/popover/popover.vue";
            e.a = A.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n(t.formContainer, {
                    tag: "component",
                    attrs: {
                        id: t.id,
                        name: t.name
                    }
                }, [n("div", {
                    staticClass: "text-center align-items-center"
                }, [n("up-c-illustration-v2", {
                    attrs: {
                        illustration: t.illustration
                    }
                }), t._v(" "), n("h2", {
                    staticClass: "my-20"
                }, [t._t("title", [t._v("Confirm that it's you")])], 2)], 1), t._v(" "), n("div", {
                    staticClass: "up-form-group"
                }, [n("label", {
                    staticClass: "up-label"
                }, [t._v("Answer your security question")]), t._v(" "), n("p", [t._v("\n            Enter the answer to the security question you set with Upwork.\n        ")])]), t._v(" "), n("a-input", {
                    attrs: {
                        id: "answer",
                        type: "password"
                    }
                }, [t._v("\n        " + t._s(t.securityQuestion) + "\n\n        "), n("div", {
                    staticClass: "my-10",
                    attrs: {
                        slot: "after-alert-hint"
                    },
                    slot: "after-alert-hint"
                }, [n("a", {
                    directives: [{
                        name: "click-event",
                        rawName: "v-click-event",
                        value: t.recoveryHelp,
                        expression: "recoveryHelp"
                    }],
                    attrs: {
                        id: "forgot-your-answer",
                        href: t.resetLink
                    },
                    on: {
                        click: t.forgotAnswerClick
                    }
                }, [t._v("\n                Forgot your security answer?\n            ")])])]), t._v(" "), n("regexp", {
                    attrs: {
                        selector: "\\S",
                        message: "Incorrect answer"
                    }
                }), t._v(" "), t.showRememberDevice ? n("checkbox", {
                    ref: "remember",
                    attrs: {
                        id: "remember",
                        required: !1,
                        "store-value": !0
                    }
                }, [t._v("\n        Keep me logged in on this device\n    ")]) : t._e()], 1)
            };
            r._withStripped = !0;
            var i = n(42),
                o = n(10),
                s = n(3),
                a = n(732),
                u = n(7),
                c = n(33),
                l = n(650),
                d = n(646),
                f = n(38),
                h = n(835),
                p = n(1),
                m = n(664),
                v = (n(13), n(754), {
                    mixins: [o.a, a.a, s.a],
                    directives: {
                        ClickEvent: f.a
                    },
                    props: {
                        name: {
                            default: "deviceAuth"
                        },
                        action: {
                            type: String,
                            default: "/ab/account-security/device-authorization"
                        },
                        showRememberDevice: {
                            type: Boolean,
                            default: !0
                        },
                        checkResetInProgress: {
                            type: Boolean,
                            default: !0
                        },
                        forgetHelpLink: Boolean
                    },
                    data: function() {
                        return {
                            illustration: function() {
                                return n.e(37).then(n.bind(null, 69))
                            },
                            recoveryHelp: m.a.recoveryHelp
                        }
                    },
                    computed: {
                        resetLink: function() {
                            return h.a
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.checkResetInProgress && !p.a.getters["auth/securityQuestion/reset/isAcknowledged"] && p.a.dispatch("auth/securityQuestion/reset/checkInProgress").then((function(e) {
                            e && p.a.dispatch("auth/securityQuestion/reset/showAcknowledgeMessage", t.id)
                        }))
                    },
                    methods: {
                        logEvents: function(t) {
                            var e = this;
                            t.subLocation("device_authorization_sq"), t.impression("sq_challenge_impression").now(), t.impression("error_event_serverside_error").onUnexpectedError(), t.impression("error_event_validation_error").onValidationError(), t.impression("error_event_incorrect_answer").onResponse("incorrect_answer", this.id), t.click("success_event_question_answered").onSuccessSubmit(), t.click("forgot_answer").onClick("forgot-your-answer"), t.click("authorize").data((function() {
                                return {
                                    state_keep_me_signed_in: (p.a.getters["auth/form/input"](e.id, "remember") || {}).value
                                }
                            })).onSuccessSubmit(), t.click("next").onClick("next_continue"), t.click("try_another_method").onClick("tryAnother_cancel")
                        },
                        forgotAnswerClick: function(t) {
                            t.preventDefault(), this.forgetHelpLink || p.a.dispatch("auth/securityQuestion/reset/start", {
                                context: this.id,
                                initUrl: "/ab/account-security/reset-security-question/entry-point"
                            })
                        }
                    },
                    components: {
                        Checkbox: l.a,
                        AForm: u.a,
                        AInput: c.a,
                        Regexp: d.a,
                        UpCIllustrationV2: i.a
                    }
                }),
                g = n(0),
                b = Object(g.a)(v, r, [], !1, null, null, null);
            b.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth/form.vue";
            e.a = b.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("otp-form", t._g(t._b({
                    staticClass: "push-form text-left",
                    attrs: {
                        "challenge-name": t.challengeName,
                        action: t.action,
                        "allow-send": !1,
                        "allow-resend": !1,
                        "custom-resend": !0,
                        "success-send-message": "Weâ€™ve sent the prompt to your mobile device.",
                        "input-type": "none",
                        "resend-on-submit": t.resendOnSubmit,
                        id: t.id
                    },
                    on: {
                        resend: t.checkSecurityKey
                    }
                }, "otp-form", t.$attrs, !1), t.$listeners), [n("h3", {
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [t._v("Is this you?")]), t._v(" "), n("p", {
                    staticClass: "text-left"
                }, [t._v("\n        Use your security key\n    ")]), t._v(" "), n("p", [t._v("\n        Didn't receive the prompt or have used wrong key? click "), n("strong", [t._v("Retry")])]), t._v(" "), n("web-authn-fields", {
                    attrs: {
                        credentials: t.credentials
                    }
                })], 1)
            };
            r._withStripped = !0;
            var i = n(4),
                o = n.n(i),
                s = n(8),
                a = n.n(s),
                u = n(29),
                c = n(14),
                l = n(667),
                d = n(68),
                f = n(27),
                h = n(9),
                p = n(742),
                m = {
                    submitLabel: "Retry",
                    formControlsAlignment: "side",
                    cancelButton: !0,
                    submitButton: !0,
                    closeOnSubmit: !0,
                    props: {
                        id: String,
                        sendConfig: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        action: {
                            type: String,
                            default: "/ab/account-security/device-authorization/check-fido2"
                        }
                    },
                    data: function() {
                        return {
                            challengeName: c.c.FIDO2,
                            credentials: {},
                            resendOnSubmit: !0
                        }
                    },
                    computed: {
                        subFormId: function() {
                            return this.id || d.a.formId(this)
                        },
                        isSubmitDisabled: function() {
                            return h.a.getters["auth/form/submitDisabled"](this.subFormId)
                        }
                    },
                    mounted: function() {
                        this.checkSecurityKey()
                    },
                    methods: {
                        checkSecurityKey: function() {
                            var t = this;
                            return a()(o.a.mark((function e() {
                                var n, r;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return u.a.clear(t.subFormId), e.next = 3, h.a.dispatch("auth/webauthn/verify/init", {
                                                formId: t.subFormId,
                                                url: t.sendConfig.url,
                                                authToken: null === (n = t.sendConfig) || void 0 === n || null === (r = n.meta) || void 0 === r ? void 0 : r.authToken
                                            });
                                        case 3:
                                            return e.prev = 3, e.next = 6, h.a.dispatch("auth/webauthn/verify/createCredentials");
                                        case 6:
                                            t.credentials = e.sent, t.resendOnSubmit = !1, t.$nextTick((function() {
                                                h.a.dispatch("auth/form/submit", t.subFormId), setTimeout((function() {
                                                    return t.resendOnSubmit = !0
                                                }), 100)
                                            })), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.
                                            catch(3), u.a.add(t.subFormId, [{
                                                id: "fido2",
                                                message: "Security key is incorrect, please provide another one",
                                                type: "danger",
                                                closable: !0
                                            }]);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 11]
                                ])
                            })))()
                        }
                    },
                    components: {
                        OtpForm: l.a,
                        Hidden: f.a,
                        WebAuthnFields: p.a
                    }
                },
                v = (n(994), n(0)),
                g = Object(v.a)(m, r, [], !1, null, "11372b6a", null);
            g.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/fido2.vue";
            e.a = g.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("otp-form", t._g(t._b({
                    staticClass: "totp-form",
                    attrs: {
                        "challenge-name": t.challengeName,
                        "max-validation-tries": 3,
                        "input-type": "simple",
                        illustration: t.illustration
                    }
                }, "otp-form", t.$attrs, !1), t.$listeners), [t._l(t.$slots, (function(e, n) {
                    return t._t(n, null, {
                        slot: n
                    })
                })), t._v(" "), n("div", {
                    staticClass: "mb-20"
                }, [n("div", {
                    staticClass: "mb-10 text-left"
                }, [n("strong", [t._v("Open your authenticator app on your mobile device")])]), t._v(" "), n("div", {
                    staticClass: "mb-10 text-left"
                }, [t._v("\n            Enter the generated code in the box below.\n        ")])])], 2)
            };
            r._withStripped = !0;
            var i = n(667),
                o = n(38),
                s = n(14),
                a = n(3),
                u = s.c.TOTP,
                c = {
                    ID: u,
                    mixins: [a.a],
                    formControlsAlignment: "side",
                    cancelButton: !0,
                    closeOnSubmit: !0,
                    data: function() {
                        return {
                            challengeName: u,
                            illustration: function() {
                                return n.e(31).then(n.bind(null, 70))
                            }
                        }
                    },
                    directives: {
                        ClickEvent: o.a
                    },
                    components: {
                        OtpForm: i.a
                    },
                    methods: {
                        logEvents: function(t) {
                            t.subLocation("device_authorization_totp"), t.impression("totp_challenge_impression").now(), t.impression("error_event_validation_error").onValidationError(), t.impression("error_event_incorrect_totp_otp").onResponse("incorrect_otp"), t.impression("confirm_button_success").onSuccessSubmit(u), t.click("next").onClick("next_continue"), t.click("try_another_method").onClick("tryAnother_cancel")
                        }
                    }
                },
                l = (n(990), n(0)),
                d = Object(l.a)(c, r, [], !1, null, "72247720", null);
            d.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/totp.vue";
            e.a = d.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("hidden", {
                    attrs: {
                        id: "fidoId",
                        val: t.fidoId
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "rawId",
                        val: t.rawId
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "fidoType",
                        val: t.fidoType
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "clientDataJson",
                        val: t.clientDataJson
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "authenticatorData",
                        val: t.authenticatorData
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "signature",
                        val: t.signature
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "rpId",
                        val: t.rpId
                    }
                }), t._v(" "), n("hidden", {
                    attrs: {
                        id: "origin",
                        val: t.origin
                    }
                })], 1)
            };
            r._withStripped = !0;
            var i = n(641),
                o = n(28),
                s = n(27),
                a = {
                    props: {
                        credentials: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    computed: {
                        fidoId: function() {
                            return this.credentials.id
                        },
                        rawId: function() {
                            return i.a.stringify(new Uint8Array(this.credentials.rawId))
                        },
                        fidoType: function() {
                            return this.credentials.type
                        },
                        clientDataJson: function() {
                            return this.response ? i.a.stringify(Object(o.a)() ? Uint8Array.from(this.response.clientDataJSON, (function(t) {
                                return t.charCodeAt(0)
                            })) : new Uint8Array(this.response.clientDataJSON)) : ""
                        },
                        authenticatorData: function() {
                            return this.response ? i.a.stringify(new Uint8Array(this.response.authenticatorData)) : ""
                        },
                        signature: function() {
                            return this.response ? i.a.stringify(new Uint8Array(this.response.signature)) : ""
                        },
                        response: function() {
                            return this.credentials.response
                        },
                        rpId: function() {
                            return window.location.host
                        },
                        origin: function() {
                            return window.location.origin
                        }
                    },
                    components: {
                        Hidden: s.a
                    }
                },
                u = n(0),
                c = Object(u.a)(a, r, [], !1, null, null, null);
            c.options.__file = "node_modules/@upwork/sensitive-zone/components/webauthn-fields.vue";
            e.a = c.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("a-form", {
                    staticClass: "text-center",
                    attrs: {
                        id: t.id,
                        name: t.name
                    }
                }, [n("div", {
                    staticClass: "auth-growable-flex align-items-center"
                }, [n("illustration", {
                    attrs: {
                        name: "alert"
                    }
                }), t._v(" "), n("div", {
                    attrs: {
                        "aria-live": "polite"
                    }
                }, [n("h2", {
                    staticClass: "mt-20"
                }, [t._v("Having trouble?")]), t._v(" "), n("div", {
                    staticClass: "mb-20 mx-0 mx-sm-20"
                }, [n("p", {
                    staticClass: "mb-20"
                }, [t._t("default")], 2), t._v(" "), n("p", [t._v("\n          Click "), n("strong", [t._v("Proceed")]), t._v(" and submit the information requested\n          there. Weâ€™ll review it and be in touch as soon as possible to help.\n        ")])])])], 1)])
            };
            r._withStripped = !0;
            var i = n(25),
                o = n(12),
                s = n(3),
                a = n(37),
                u = n(7),
                c = n(664),
                l = {
                    components: {
                        AForm: u.a,
                        Illustration: i.a
                    },
                    mixins: [s.a, o.a],
                    props: {
                        id: {
                            type: String,
                            default: "self-help"
                        },
                        name: {
                            type: String,
                            default: "selfHelp"
                        },
                        redirectUrl: {
                            type: String,
                            required: !0
                        }
                    },
                    methods: {
                        logEvents: function(t) {
                            t.subLocation("having_trouble"), t.impression("having_trouble_screen").now(), t.click("proceed").onSubmit(), t.click("close").onClick(c.a.selfHelpClose)
                        },
                        onCustomSubmit: function() {
                            return a.a.navigate(this.redirectUrl), !0
                        }
                    }
                },
                d = n(0),
                f = Object(d.a)(l, r, [], !1, null, null, null);
            f.options.__file = "node_modules/@upwork/sensitive-zone/components/self-help/form.vue";
            e.a = f.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.showLabel ? t._t("label", [t._v("Didn't receive your code?")]) : t._e(), t._v(" "), n("button", {
                    staticClass: "up-btn up-btn-link p-0 m-0 resend-link",
                    attrs: {
                        disabled: t.sendInProgress,
                        type: "button",
                        "aria-label": "Resend code"
                    },
                    on: {
                        click: function(e) {
                            return t.isResendAllowedOrRunCountdown()
                        }
                    }
                }, [t._t("link", [t._v("Resend")])], 2), t._v(" "), n("resend-message", {
                    attrs: {
                        "seconds-left-to-send": t.secondsLeftToSend
                    }
                })], 2)
            };
            r._withStripped = !0;
            var i = n(669),
                o = n(665),
                s = (n(31), n(13), n(34), n(63), {
                    mixins: [o.a],
                    props: {
                        sendInProgress: Boolean,
                        initResendCountdownOnLoad: {
                            type: Boolean,
                            default: !1
                        },
                        showLabel: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    components: {
                        ResendMessage: i.a
                    }
                }),
                a = n(0),
                u = Object(a.a)(s, r, [], !1, null, null, null);
            u.options.__file = "node_modules/@upwork/auth-common/components/resend-link.vue";
            e.a = u.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n(t.formContainer, {
                    tag: "component",
                    attrs: {
                        id: t.id,
                        name: t.name
                    }
                }, [n("div", {
                    staticClass: "text-center align-items-center"
                }, [n("up-c-illustration-v2", {
                    staticClass: "illustration",
                    attrs: {
                        illustration: t.illustration
                    }
                }), t._v(" "), n("h2", {
                    staticClass: "my-20"
                }, [t._t("title", [t._v("Confirm that it's you")])], 2)], 1), t._v(" "), n("div", {
                    directives: [{
                        name: "aria-live",
                        rawName: "v-aria-live"
                    }]
                }, [t._t("default")], 2), t._v(" "), n("resend-message", {
                    staticClass: "text-left mb-10",
                    attrs: {
                        "seconds-left-to-send": t.secondsLeftToSend
                    }
                })], 1)
            };
            r._withStripped = !0;
            var i = n(12),
                o = n(42),
                s = n(68),
                a = n(1),
                u = n(733),
                c = n(669),
                l = n(665),
                d = n(843),
                f = (n(31), n(781), n(13), n(34), n(63), n(661), {
                    mixins: [i.a, d.a, l.a],
                    directives: {
                        AriaLive: u.a
                    },
                    props: {
                        name: {
                            type: String,
                            default: "deviceAuthSendOtp"
                        },
                        challengeName: {
                            type: String,
                            required: !0
                        },
                        sendConfig: {
                            type: Object,
                            default: function() {}
                        },
                        isInitialSend: {
                            type: Boolean,
                            default: !0
                        },
                        initResendCountdownOnLoad: {
                            type: Boolean,
                            default: !1
                        },
                        checkUid: {
                            type: Boolean,
                            default: !0
                        },
                        illustration: {
                            type: Function,
                            default: function() {
                                return n.e(2).then(n.bind(null, 72))
                            }
                        }
                    },
                    data: function() {
                        return {
                            resendOtpEvent: "resendOtpEvent"
                        }
                    },
                    computed: {
                        uid: function() {
                            return a.a.getters["auth/challenge/".concat(this.challengeName, "/uid")]
                        },
                        subFormId: function() {
                            return this.id || s.a.formId(this)
                        },
                        requestDataConverter: function() {
                            return null
                        }
                    },
                    watch: {
                        uid: function(t) {
                            a.a.dispatch("auth/form/setSubmitDisabled", {
                                formId: this.subFormId,
                                disabled: !t
                            })
                        }
                    },
                    mounted: function() {
                        !this.uid && this.checkUid && a.a.dispatch("auth/form/setSubmitDisabled", {
                            formId: this.subFormId,
                            disabled: !0
                        })
                    },
                    methods: {
                        onCustomSubmit: function() {
                            var t = this;
                            return this.isResendAllowedOrRunCountdown() ? this.send(this.id, this.isInitialSend).then((function() {
                                return t.$emit("resend"), !0
                            })) : Promise.reject(!1)
                        }
                    },
                    components: {
                        UpCIllustrationV2: o.a,
                        ResendMessage: c.a
                    }
                }),
                h = (n(991), n(0)),
                p = Object(h.a)(f, r, [], !1, null, "38e58d79", null);
            p.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/components/send-form.vue";
            e.a = p.exports
        },
        function(t, e, n) {
            "use strict";
            var r = n(35),
                i = n.n(r),
                o = n(18),
                s = n.n(o),
                a = n(19),
                u = n.n(a),
                c = n(655),
                l = n.n(c),
                d = n(57),
                f = n.n(d),
                h = n(48),
                p = n.n(h),
                m = n(691),
                v = n(43),
                g = n(708);

            function b() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }
            var y = function(t) {
                p()(r, t);
                var e, n = (e = r, function() {
                    var t, n = f()(e);
                    if (b()) {
                        var r = f()(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return l()(this, t)
                });

                function r() {
                    return s()(this, r), n.call(this, (function(t) {
                        t()
                    }))
                }
                return u()(r, [{
                    key: "do",
                    value: function(t) {
                        return this.setLastObject(t), this
                    }
                }, {
                    key: "convertFormId",
                    value: function(t) {
                        if ("object" === i()(t) && (t = v.a.getId(g.a.extend(t))), "string" != typeof t && null !== t) throw new Error("formId has to be string, or view must be managed by ViewState");
                        return t
                    }
                }]), r
            }(m.a);
            e.a = {
                created: function() {
                    this.eventsObject = new y(this.id), this.actionState && this.actionState(this.eventsObject)
                },
                destroyed: function() {
                    this.eventsObject.destroy()
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(1);
            e.a = {
                computed: {
                    getMessage: function() {
                        return r.a.getters["auth/challenge/phone/limits"] > 0 ? "It looks like youâ€™re having trouble with the code we sent to you by text message. We can help!" : this.message
                    },
                    getRedirectUrl: function() {
                        return r.a.getters["auth/challenge/phone/limits"] > 0 ? "https://support.upwork.com/hc/en-us/requests/new?ticket_form_id=360000464433&self_help=trouble_code&nonce=" + ((t = new Date).setMonth(t.getMonth() + 1), new Date(t).valueOf()) : this.redirectUrl;
                        var t
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                FACE_ID: "biometryTypeFaceID",
                TOUCH_ID: "biometryTypeTouchID"
            }
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return k
            })), n.d(e, "c", (function() {
                return w
            })), n.d(e, "b", (function() {
                return E
            }));
            var r = n(4),
                i = n.n(r),
                o = n(8),
                s = n.n(o),
                a = n(660);
            n(35);

            function u(t, e) {
                if (void 0 === e && (e = decodeURIComponent), "string" != typeof t || !t) return null;
                var n = new RegExp("(?:^|; )" + t.replace(/[.*+?^$|[\](){}\\-]/g, "\\$&") + "(?:=([^;]*))?(?:;|$)").exec(document.cookie);
                return null === n ? null : "function" == typeof e ? e(n[1]) : n[1]
            }
            var c = n(2),
                l = n.n(c);

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        l()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var h = function(t, e) {
                    return f({}, t, {
                        headers: f({}, t.headers, {
                            Authorization: "Bearer ".concat(e)
                        })
                    })
                },
                p = new Map,
                m = function(t) {
                    var e = t.getToken,
                        n = t.onAuthFail,
                        r = t.skipReAuth,
                        o = t.reAuth,
                        a = t.errorMsg;
                    return function(t) {
                        return function() {
                            var u = s()(i.a.mark((function u(c, l) {
                                var d, f, m, v, g;
                                return i.a.wrap((function(u) {
                                    for (;;) switch (u.prev = u.next) {
                                        case 0:
                                            if (d = l.$logger || console, !p.has(o)) {
                                                u.next = 10;
                                                break
                                            }
                                            return u.prev = 2, u.next = 5, p.get(o);
                                        case 5:
                                            u.next = 10;
                                            break;
                                        case 7:
                                            throw u.prev = 7, u.t0 = u.
                                            catch(2), new TypeError(a || "failed fetch access token");
                                        case 10:
                                            if (f = e(l), m = function() {
                                                    l.suppressLog || d.warn("auth fail, url: ".concat(c))
                                                }, v = function() {
                                                    var u = s()(i.a.mark((function s() {
                                                        var u;
                                                        return i.a.wrap((function(i) {
                                                            for (;;) switch (i.prev = i.next) {
                                                                case 0:
                                                                    if (!r) {
                                                                        i.next = 6;
                                                                        break
                                                                    }
                                                                    if (m(), !n) {
                                                                        i.next = 5;
                                                                        break
                                                                    }
                                                                    return i.next = 5, n();
                                                                case 5:
                                                                    throw new TypeError("authorization fail");
                                                                case 6:
                                                                    if (f = void 0, i.prev = 7, !p.has(o)) {
                                                                        i.next = 13;
                                                                        break
                                                                    }
                                                                    return i.next = 11, p.get(o);
                                                                case 11:
                                                                    i.next = 17;
                                                                    break;
                                                                case 13:
                                                                    return u = o(l), p.set(o, u), i.next = 17, u;
                                                                case 17:
                                                                    f = e(l), i.next = 23;
                                                                    break;
                                                                case 20:
                                                                    i.prev = 20, i.t0 = i.
                                                                    catch(7), l.suppressLog || (d.error("failed get access token, url: ".concat(c)), d.error(i.t0));
                                                                case 23:
                                                                    if (p.delete(o), f) {
                                                                        i.next = 30;
                                                                        break
                                                                    }
                                                                    if (m(), !n) {
                                                                        i.next = 29;
                                                                        break
                                                                    }
                                                                    return i.next = 29, n();
                                                                case 29:
                                                                    throw new TypeError(a || "failed fetch access token");
                                                                case 30:
                                                                    return l.reAuth = !0, i.abrupt("return", t(c, h(l, f)));
                                                                case 32:
                                                                case "end":
                                                                    return i.stop()
                                                            }
                                                        }), s, null, [
                                                            [7, 20]
                                                        ])
                                                    })));
                                                    return function() {
                                                        return u.apply(this, arguments)
                                                    }
                                                }(), f) {
                                                u.next = 15;
                                                break
                                            }
                                            return u.abrupt("return", v());
                                        case 15:
                                            return u.next = 17, t(c, h(l, f));
                                        case 17:
                                            if (g = u.sent, (l.unauthStatus || [401]).includes(g.status)) {
                                                u.next = 21;
                                                break
                                            }
                                            return u.abrupt("return", g);
                                        case 21:
                                            return u.abrupt("return", v());
                                        case 22:
                                        case "end":
                                            return u.stop()
                                    }
                                }), u, null, [
                                    [2, 7]
                                ])
                            })));
                            return function(t, e) {
                                return u.apply(this, arguments)
                            }
                        }()
                    }
                },
                v = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.ccstCookieName,
                        n = t.getCookie,
                        r = t.suppressLog,
                        i = t.$logger || console,
                        o = n(e);
                    if (o) return o;
                    r || i.error("Not able to provide the CCST token from the cookie.")
                },
                g = function() {
                    var t = s()(i.a.mark((function t(e) {
                        var n, r, o, s;
                        return i.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.cookieName, r = e.$logger || console, o = "", (s = e.getCookie(n)) || !e.csrfEndpoint) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 7, e.wretch().url(e.csrfEndpoint).get().res();
                                case 7:
                                    s = e.getCookie(e.cookieName);
                                case 8:
                                    return s ? o = s : r.error('Unable to get CSRF token from "'.concat(n, '" cookie.')), t.abrupt("return", o);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();

            function b(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(n), !0).forEach((function(e) {
                        l()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var w = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = {
                            Accept: "application/json, text/plain, */*",
                            "x-odesk-user-agent": "oDesk LM"
                        };
                    return t.excludeXRequestedWithHeader || (e["x-requested-with"] = "XMLHttpRequest"),
                        function(n) {
                            return function() {
                                var r = s()(i.a.mark((function r(o, s) {
                                    var c, d, f, h;
                                    return i.a.wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (c = t.csrfTokenCookieName, d = t.csrfTokenHeaderName, !(f = c && "GET" !== s.method)) {
                                                    r.next = 6;
                                                    break
                                                }
                                                return r.next = 5, g({
                                                    cookieName: c,
                                                    getCookie: t.getCookie || u,
                                                    csrfEndpoint: t.csrfEndpoint,
                                                    wretch: s.wretch || a.a,
                                                    $logger: s.$logger
                                                });
                                            case 5:
                                                h = r.sent;
                                            case 6:
                                                return r.abrupt("return", n(o, y({}, s, {
                                                    headers: y({}, e, {}, f ? l()({}, d || "x-odesk-csrf-token", h) : {}, {}, s.headers)
                                                })));
                                            case 7:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })));
                                return function(t, e) {
                                    return r.apply(this, arguments)
                                }
                            }()
                        }
                },
                _ = function() {
                    var t = s()(i.a.mark((function t() {
                        var e, n = arguments;
                        return i.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = n.length > 0 && void 0 !== n[0] ? n[0] : "", t.next = 3, Object(a.a)().middlewares([w()]).url("".concat(e, "/ab/account-security/login")).get().res();
                                case 3:
                                    if ("unauthenticated" !== t.sent.headers.get("x-upwork-authentication")) {
                                        t.next = 6;
                                        break
                                    }
                                    throw new Error("unauthenticated");
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                k = function(t) {
                    var e = t.ccstCookieName,
                        n = t.onAuthFail,
                        r = t.skipReAuth,
                        i = t.baseUrl;
                    if ("string" != typeof e) throw new TypeError("Must provide ccstCookieName string value");
                    return m({
                        getToken: function(n) {
                            return v({
                                getCookie: t.getCookie || u,
                                suppressLog: n.suppressLog,
                                $logger: n.$logger,
                                ccstCookieName: e
                            })
                        },
                        reAuth: function() {
                            return _(i)
                        },
                        errorMsg: "failed fetch ccst token",
                        onAuthFail: n,
                        skipReAuth: r
                    })
                },
                S = {
                    dev: "https://apiplatform.dev.agate.upwork.com/graphql",
                    staging: "https://api-staging.upwork.com/graphql",
                    prod: "https://api.upwork.com/graphql",
                    prodOregon: "https://beta-api.upwork.com/graphql"
                },
                E = function(t) {
                    var e = t.env,
                        n = t.orgUid;
                    return function(t) {
                        return function(r, i) {
                            var o = i.$logger || console;
                            return n && (i.headers["X-Upwork-API-TenantId"] = n), t(S[e], i).then((function(t) {
                                return t.ok && t.clone().json().then((function(e) {
                                    if (e.errors) {
                                        var n = t.headers.get("vnd-eo-trace-id");
                                        o.error("graphql errors: ".concat(JSON.stringify(e.errors), ", request body: ").concat(i.body, ", traceId: ").concat(n))
                                    }
                                })), t
                            }))
                        }
                    }
                },
                x = n(889),
                C = n.n(x);

            function O(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var I = function t(e) {
                return function(n) {
                    return function(r, o) {
                        var a = e.cacheInfo || t.cacheInfo;
                        a.networkSkipped || (a.networkSkipped = {}), a.memoryCache || (a.memoryCache = {
                            store: {},
                            set: function(t, e, n) {
                                this.store[t] = {
                                    value: e,
                                    expireTime: new Date(Date.now() + n).getTime()
                                }
                            },
                            get: function(t) {
                                var e = this.store[t];
                                return e ? e.expireTime < Date.now() ? (delete this.store[t], null) : e.value : null
                            }
                        });
                        var u = a.networkSkipped,
                            c = a.memoryCache,
                            d = e.cacheKey(r, o),
                            f = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? O(Object(n), !0).forEach((function(e) {
                                        l()(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({}, e, {}, o),
                            h = f.storage,
                            p = f.onSuccess,
                            m = f.onError,
                            v = f.strategy,
                            g = f.cacheIfSkipNetwork,
                            b = f.ttl,
                            y = f.invalidateCache,
                            w = [h || "localStorage"];
                        g && !w.includes("localStorage") && w.push("localStorage");
                        var _ = !1,
                            k = !1;
                        "cacheFirst" === v && (_ = !0, k = !1), "cacheAndNetwork" === v && (_ = !0, k = !0), e.skipNetwork && !u[d] ? (_ = !0, k = !1, u[d] = !0) : g && (k = !0), y && (_ = !1, k = !0);
                        var S, E, x = function(t, e) {
                                var n = b || 36e5;
                                w.includes("memory") ? c.set(t, e, n) : C.a.set(t, e, n / 6e4)
                            },
                            I = _ ? (S = d, E = null, w.includes("memory") && (E = c.get(S)), w.includes("localStorage") && null === E && (E = C.a.get(S)), E) : null,
                            A = null;
                        return (k = k || !I) && (A = n(r, o).then(function() {
                            var t = s()(i.a.mark((function t(n) {
                                var s, a;
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!(s = n.ok) || !e.isGraphql) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.next = 4, n.clone().json();
                                        case 4:
                                            s = !t.sent.errors;
                                        case 5:
                                            if (!s) {
                                                t.next = 13;
                                                break
                                            }
                                            return t.next = 8, n.clone().json();
                                        case 8:
                                            a = t.sent, x(e.cacheKey(r, o), a), p && p(a, !1), t.next = 14;
                                            break;
                                        case 13:
                                            m && m(n, !!I);
                                        case 14:
                                            return t.abrupt("return", n);
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()).catch((function(t) {
                            throw m && m(t, !!I), t
                        }))), I ? (p && p(I, !0), Promise.resolve(new(o.Response || Response)(JSON.stringify(I)))) : A
                    }
                }
            };
            I.cacheInfo = {}
        },
        function(t, e, n) {
            "use strict";
            var r = n(875),
                i = n(833),
                o = n(727),
                s = n(834),
                a = n(50),
                u = n(4),
                c = n.n(u),
                l = n(8),
                d = n.n(l),
                f = n(767),
                h = [
                    function(t, e, n) {
                        return 401 !== t.status || e.tokenRefreshWasPerformed ? t : (e.tokenRefreshWasPerformed = !0, Object(r.a)(a.a).middlewares([Object(i.a)(), Object(o.a)([Object(s.a)()])], !0).get().res((function() {
                            return n()
                        })))
                    }
                ],
                p = [
                    function(t) {
                        return function(e, n) {
                            return function r() {
                                return t(e, n).then(function() {
                                    var t = d()(c.a.mark((function t(n) {
                                        var i;
                                        return c.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, f.a.externalCaptchaRequested(n);
                                                case 2:
                                                    if (!(i = t.sent)) {
                                                        t.next = 7;
                                                        break
                                                    }
                                                    return t.next = 6, f.a.handle(i, e);
                                                case 6:
                                                    return t.abrupt("return", r());
                                                case 7:
                                                    return t.abrupt("return", n);
                                                case 8:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }())
                            }()
                        }
                    }
                ],
                m = {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json"
                };
            e.a = {
                getInterceptors: function() {
                    return h
                },
                getMiddlewares: function() {
                    return p
                },
                getHeaders: function() {
                    return Object.assign({}, m)
                },
                addInterceptor: function(t) {
                    h.push(t)
                },
                setHeader: function(t, e) {
                    m[t] = e
                }
            }
        },
        function(t, e, n) {
            var r = n(35);
            t.exports = function(t) {
                return "object" === r(t) ? null !== t : "function" == typeof t
            }
        }, , ,
        function(t, e, n) {}, , , , , , , , ,
        function(t, e, n) {
            "use strict";
            var r = n(1);
            e.a = {
                validate: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = r.a.getters["auth/form/validators"](t),
                        i = Object.values(r.a.getters["auth/form/inputs"](t));
                    i = i.filter((function(t) {
                        return 0 === e.length || e.includes(t.id)
                    }));
                    var o = {};
                    i.forEach((function(t) {
                        o[t.id] = t.value
                    }));
                    var s = [];
                    return i.forEach((function(t) {
                        Object.values(n[t.id] || {}).forEach((function(e) {
                            e.enabled && s.push(e.validate(t.value, o).catch((function() {
                                return {
                                    input: t,
                                    context: e.context,
                                    validator: e.name,
                                    message: e.message
                                }
                            })))
                        }))
                    })), Promise.all(s).then((function(t) {
                        var e = {};
                        return t.forEach((function(t) {
                            if (t) {
                                var n = t.context || t.input.id,
                                    r = e[n] || [];
                                r.push({
                                    message: t.message
                                }), e[n] = r
                            }
                        })), !Object.keys(e).length || Promise.reject({
                            alerts: {
                                input: e
                            }
                        })
                    }))
                }
            }
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var r = n(18),
                i = n.n(r),
                o = n(19),
                s = n.n(o),
                a = n(685),
                u = function() {
                    function t() {
                        i()(this, t)
                    }
                    return s()(t, null, [{
                        key: "extendHeaders",
                        value: function(e) {
                            return e[Object.keys(e).find((function(t) {
                                return t === "X-Odesk-Csrf-Token".toLowerCase()
                            })) || "X-Odesk-Csrf-Token"] = t.getCookieValue(), e
                        }
                    }, {
                        key: "getCookieValue",
                        value: function() {
                            return a.a.getValueFromNameSelector((t = function() {
                                var t = "undefined" != typeof window && window.Applet ? Applet.getVar("csrfTokenCookieName") : void 0;
                                if (t) return t;
                                var e = a.a.nuxtPrefix();
                                return e ? e + "XSRF-TOKEN" : void 0
                            }()) ? "(?:^| )" + t : "XSRF-TOKEN");
                            var t
                        }
                    }]), t
                }()
        },
        function(t, e, n) {
            "use strict";
            var r = n(17),
                i = n(28);
            e.a = {
                isMobileApp: function() {
                    return Object(i.a)()
                },
                isUta: function() {
                    return /Upwork\/(\d+\.\d+\.\d+)/.test(window.navigator.userAgent)
                },
                isApp: function() {
                    return this.isUta() || this.isMobileApp()
                },
                isAndroidApp: function() {
                    return this.isMobileApp() && Object(r.a)(window.navigator.userAgent)
                },
                isIosApp: function() {
                    return this.isMobileApp() && Object(r.b)(window.navigator.userAgent)
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "row flex-1"
                }, [n("div", {
                    staticClass: "col-md-10"
                }, [n("a-form", {
                    attrs: {
                        id: t.id,
                        name: t.name
                    }
                }, [n("div", {
                    staticClass: "mb-30"
                }, [n("a-input", {
                    attrs: {
                        id: "oldPassword",
                        type: "password"
                    }
                }, [t._v("\n                    Old Password\n                ")]), t._v(" "), n("regexp", {
                    attrs: {
                        selector: "/\\S/",
                        message: 'Your old password was incorrect. Please contact <a href="https://support.upwork.com/hc/en-us" target="_blank">customer support</a>. Please try again'
                    }
                })], 1), t._v(" "), n("set-password-inputs"), t._v(" "), t.allowRevoke ? n("checkbox", {
                    staticClass: "pt-30",
                    attrs: {
                        required: !1,
                        id: "revokeRequested",
                        "default-value": !0
                    }
                }, [t._v("\n                All devices will be required to sign in with new password\n            ")]) : t._e()], 1)], 1)])
            };
            r._withStripped = !0;
            var i = n(10),
                o = n(7),
                s = n(697),
                a = n(1),
                u = n(650),
                c = n(33),
                l = n(645),
                d = n(646),
                f = n(37),
                h = n(3),
                p = n(841),
                m = (n(13), {
                    ID: "changePassword",
                    title: "Change password",
                    submitLabel: "Save",
                    formControlsAlignment: "side",
                    cancelButton: !0,
                    closeOnSubmit: !0,
                    inverseFooter: !0,
                    mixins: [i.a, l.a, h.a],
                    props: {
                        name: {
                            default: "changePassword"
                        },
                        action: {
                            type: String,
                            default: "/ab/account-security/change-password"
                        },
                        allowRevoke: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.onSuccessSubmit((function() {
                            a.a.dispatch("auth/password/updated")
                        })), this.onCancel((function() {
                            t.successSubmitRedirectUrl && f.a.navigate(t.successSubmitRedirectUrl)
                        }))
                    },
                    methods: {
                        logEvents: function(t) {
                            t.subLocation(p.a), t.impression("error_event_serverside_error").onUnexpectedError(this.id), t.impression("error_event_validation_error").onValidationError(this.id), t.click("success_event_password_changed").onSuccessSubmit(this.id), t.click("save").onSubmit(this.id), t.click("cancel").onCancel(this.id)
                        }
                    },
                    components: {
                        SetPasswordInputs: s.a,
                        AForm: o.a,
                        Checkbox: u.a,
                        AInput: c.a,
                        Regexp: d.a
                    }
                }),
                v = (n(986), n(0)),
                g = Object(v.a)(m, r, [], !1, null, "7b352772", null);
            g.options.__file = "node_modules/@upwork/sensitive-zone/components/change-password/form.vue";
            e.a = g.exports
        },
        function(t, e, n) {
            "use strict";
            var r = n(4),
                i = n.n(r),
                o = n(8),
                s = n.n(o),
                a = "cloudflare",
                u = "perimeterX",
                c = {};
            e.a = {
                externalCaptchaRequested: function(t) {
                    return s()(i.a.mark((function e() {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (403 !== t.status) {
                                        e.next = 9;
                                        break
                                    }
                                    if (null == t.headers.get("cf-chl-bypass")) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", a);
                                case 3:
                                    return e.next = 5, t.clone().text();
                                case 5:
                                    if (e.t0 = e.sent.indexOf("www.perimeterx.com"), e.t1 = -1, e.t0 === e.t1) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", u);
                                case 9:
                                    return e.abrupt("return", !1);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                handle: function(t, e) {
                    return s()(i.a.mark((function n() {
                        var r;
                        return i.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (!(r = c[t])) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.abrupt("return", r);
                                case 3:
                                    return n.next = 5, Promise.all(Object.values(c));
                                case 5:
                                    return r = l(e), c[t] = r, n.abrupt("return", r.then((function() {
                                        delete c[t]
                                    })));
                                case 8:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                }
            };

            function l(t) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = s()(i.a.mark((function t(e) {
                    var n;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, f(e);
                            case 2:
                                n = t.sent;
                            case 3:
                                return t.next = 5, m(n);
                            case 5:
                                return t.next = 7, h(e);
                            case 7:
                                if (!t.sent) {
                                    t.next = 3;
                                    break
                                }
                            case 8:
                                n.remove();
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function f(t) {
                var e = document.createElement("iframe");
                Object.assign(e.style, {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    "z-index": 99999999,
                    backgroundColor: "white",
                    top: 0
                }), e.setAttribute("id", "externalChallenge"), e.innerText = "Please wait...", document.body.appendChild(e);
                var n = new Promise((function(t) {
                    e.onload = function() {
                        e.onload = void 0, e.prevContentDocument = e.contentDocument, t(e)
                    }
                }));
                return e.src = t, n
            }

            function h(t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = s()(i.a.mark((function t(e) {
                    var n;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, fetch(e);
                            case 2:
                                return n = t.sent, t.abrupt("return", 403 !== n.status);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function m(t) {
                return new Promise((function(e) {
                    var n = setInterval((function() {
                        t.contentDocument !== t.prevContentDocument && (t.prevContentDocument = t.contentDocument, clearInterval(n), e())
                    }), 300)
                }))
            }
        },
        function(t, e, n) {
            var r, i = n(35);
            r = function() {
                return this
            }();
            try {
                r = r || new Function("return this")()
            } catch (t) {
                "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window)
            }
            t.exports = r
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            var r = 0;

            function i() {
                return r += 1
            }
        },
        function(t, e, n) {
            var r = n(721);
            t.exports = !r((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        function(t, e, n) {
            var r = n(770),
                i = n(899),
                o = n(896);
            t.exports = r ? function(t, e, n) {
                return i.f(t, e, o(1, n))
            } : function(t, e, n) {
                return t[e] = n, t
            }
        },
        function(t, e, n) {
            var r = n(751);
            t.exports = function(t) {
                if (!r(t)) throw TypeError(String(t) + " is not an object");
                return t
            }
        },
        function(t, e, n) {
            "use strict";
            (function(t) {
                var r = n(4),
                    i = n.n(r),
                    o = n(8),
                    s = n.n(o),
                    a = n(2),
                    u = n.n(a);

                function c(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function l(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(n), !0).forEach((function(e) {
                            u()(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }
                var d = 0;
                e.a = {
                    name: "NuxtModal",
                    props: {
                        modalName: {
                            type: String,
                            default: ""
                        },
                        footerInverse: {
                            default: !1,
                            type: Boolean
                        },
                        stickyHeader: {
                            default: !1,
                            type: Boolean
                        },
                        sticky: {
                            default: !1,
                            type: Boolean
                        },
                        size: {
                            validator: function(t) {
                                return ["sm", "md", "lg"].indexOf(t) > -1
                            },
                            default: "md",
                            type: String
                        },
                        showCloseIcon: {
                            default: !0,
                            type: Boolean
                        },
                        manualControl: {
                            default: !1,
                            type: Boolean
                        },
                        component: {
                            type: Object,
                            default: null
                        }
                    },
                    data: function() {
                        return {
                            upCModal: function() {
                                return Promise.all([n.e(5), n.e(6), n.e(14), n.e(15), n.e(77)]).then(n.bind(null, 1136))
                            },
                            upCSlider: function() {
                                return Promise.all([n.e(5), n.e(6), n.e(14), n.e(73)]).then(n.bind(null, 1139))
                            },
                            upCSliderNative: function() {
                                return n.e(78).then(n.bind(null, 1140))
                            },
                            upCModalNative: function() {
                                return Promise.all([n.e(5), n.e(15), n.e(397)]).then(n.bind(null, 1137))
                            },
                            title: null,
                            navType: null,
                            routeName: null,
                            fromRoute: null,
                            canUseHistoryBack: !0
                        }
                    },
                    computed: {
                        currentComponent: function() {
                            return this.component ? this.component : this.navType ? "slider" === this.navType ? this.$isNativeApp ? this.upCSliderNative : this.upCSlider : this.$isNativeApp ? this.upCModalNative : this.upCModal : null
                        }
                    },
                    created: function() {
                        t.client && 0 === d && document.body.classList.add("up-page-modal"), d += 1;
                        var e = this.$modal(),
                            n = e.routeName,
                            r = e.navType,
                            i = e.title;
                        this.navType = r, this.title = i, this.routeName = n, this.$nuxt.$on("routeChanged", this.onRouteChanged)
                    },
                    destroyed: function() {
                        d -= 1, t.client && 0 === d && document.body.classList.remove("up-page-modal"), this.$nuxt.$off("routeChanged", this.onRouteChanged)
                    },
                    methods: {
                        onRouteChanged: function(t, e) {
                            this.fromRoute = e
                        },
                        onCreated: function() {
                            this.$emit("ready")
                        },
                        onDismiss: function() {
                            this.$emit("modal-dismiss")
                        },
                        onOpened: function() {
                            this.$setModalIsOpening(!1)
                        },
                        onClose: function() {
                            var t = this.$modalRoutes[this.routeName].getPrevRoute();
                            if (this.canUseHistoryBack && this.fromRoute && this.fromRoute.name === t.name) window.history.back();
                            else {
                                var e = this.$route.query,
                                    n = JSON.parse(e._modalInfo || "") || [];
                                n.pop();
                                var r = n.slice(-1)[0] || {},
                                    i = r.navType,
                                    o = r.title;
                                this.$router.push({
                                    name: t.name,
                                    params: l({
                                        $params: {
                                            navDir: "pop"
                                        }
                                    }, this.$route.params),
                                    query: l({}, e, {
                                        pageTitle: o || void 0,
                                        _navType: i || void 0,
                                        _modalInfo: n.length ? JSON.stringify(n) : void 0
                                    })
                                })
                            }
                        },
                        close: function() {
                            this.canUseHistoryBack = !1, this.$isNativeApp ? this.onClose() : this.$refs.modal.close()
                        },
                        updateTitle: function(t) {
                            var e = this;
                            return s()(i.a.mark((function r() {
                                var o, s, a;
                                return i.a.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (e.title !== t) {
                                                r.next = 2;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 2:
                                            if (e.title = t, !e.$isNativeApp) {
                                                r.next = 9;
                                                break
                                            }
                                            return r.next = 6, Promise.all([n.e(6), n.e(83)]).then(n.bind(null, 1141));
                                        case 6:
                                            o = r.sent, o.communicationProtocol.postMessage({
                                                type: "up/page/v1/UPDATE",
                                                payload: {
                                                    pageTitle: t
                                                }
                                            });
                                        case 9:
                                            s = e.$route.query, (a = JSON.parse(s._modalInfo || "") || []).length > 0 && (a[a.length - 1].title = t), e.$router.replace({
                                                query: l({}, s, {
                                                    pageTitle: t,
                                                    _modalInfo: JSON.stringify(a)
                                                })
                                            });
                                        case 13:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        }
                    }
                }
            }).call(this, n(959))
        },
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {}, ,
        function(t, e, n) {}, , , , , , , , , , , , , , , ,
        function(t, e, n) {}, ,
        function(t, e, n) {}, , , , , , , , , , , ,
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    class: {
                        "up-checkbox": "radio" !== t.type,
                            "up-radio": "radio" === t.type
                    }
                }, [n("label", {
                    staticClass: "up-checkbox-label",
                    class: {
                        disabled: t.disabled,
                            "has-error": t.error
                    }
                }, [t._t("input"), t._v(" "), n("span", {
                    staticClass: "up-checkbox-replacement-helper"
                }, ["radio" !== t.type ? n("up-c-icon-v2", {
                    staticClass: "check",
                    attrs: {
                        icon: t.checkIcon,
                        size: "xs"
                    }
                }) : t._e(), t._v(" "), "radio" !== t.type ? n("up-c-icon-v2", {
                    staticClass: "indeterminate",
                    attrs: {
                        icon: t.indeterminateIcon,
                        size: "xs"
                    }
                }) : t._e()], 1), t._v(" "), t._t("label")], 2)])
            };
            r._withStripped = !0;
            var i = n(927),
                o = n.n(i),
                s = n(59),
                a = {
                    injectStyles: [o.a],
                    name: "UpCCheckbox",
                    components: {
                        UpCIconV2: s.
                        default
                    },
                    props: {
                        hasError: {
                            type: Boolean,
                            default: !1
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        isIndeterminateState: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            indeterminateIcon: function() {
                                return n.e(27).then(n.bind(null, 336))
                            },
                            checkIcon: function() {
                                return n.e(7).then(n.bind(null, 335))
                            },
                            type: "checkbox",
                            errorState: null
                        }
                    },
                    computed: {
                        error: function() {
                            return null === this.errorState ? this.hasError : !!this.errorState
                        }
                    },
                    created: function() {
                        this.$slots.input && this.setInputAttributes()
                    },
                    mounted: function() {
                        this.$slots.input && this.$slots.input[0].elm.addEventListener("change", this.onInputChanged)
                    },
                    updated: function() {
                        this.$slots.input && this.setInputAttributes()
                    },
                    methods: {
                        setInputAttributes: function() {
                            this.$slots.input[0].data.attrs.disabled = !!this.disabled, "radio" === this.$slots.input[0].data.attrs.type && (this.type = "radio")
                        },
                        onInputChanged: function() {
                            this.$parent.$emit("changed", this)
                        },
                        isInputChecked: function() {
                            return this.$slots.input && this.$slots.input[0].elm.checked
                        }
                    }
                },
                u = n(0),
                c = Object(u.a)(a, r, [], !1, null, null, null);
            c.options.__file = "node_modules/@upwork/vue-components-core/src/checkbox/checkbox.vue";
            e.a = c.exports
        },
        function(t, e, n) {
            "use strict";
            var r = n(764),
                i = n(50);
            e.a = function() {
                return function(t) {
                    return function(e, n) {
                        return (r.a.getCookieValue() ? Promise.resolve() : fetch(i.a + "?" + (new Date).getTime(), {
                            credentials: "same-origin",
                            redirect: "manual"
                        })).
                        catch((function() {
                            return !0
                        })).then((function() {
                            return r.a.extendHeaders(n.headers), t(e, n)
                        }))
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = function() {
                return function(t, e, n) {
                    return t.ok || e.retryCounter <= 0 ? (e.locked = !1, t) : (void 0 === e.retryCounter ? e.retryCounter = 2 : e.retryCounter--, e.locked = !0, n())
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-security-question"
        },
        function(t, e, n) {},
        function(t, e, n) {
            "use strict";
            var r = n(656);
            e.a = {
                mixins: [r.a],
                props: {
                    message: {
                        type: String,
                        default: ""
                    },
                    name: {
                        type: String,
                        default: "maxLength"
                    },
                    limit: {
                        type: Number,
                        required: !0
                    }
                },
                methods: {
                    validate: function(t) {
                        return t && t.length <= this.limit ? Promise.resolve() : Promise.reject()
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(656);
            e.a = {
                mixins: [r.a],
                props: {
                    messagePrefix: {
                        type: String,
                        default: "Value"
                    },
                    minLen: {
                        type: Number,
                        default: 4
                    },
                    maxLen: {
                        type: Number,
                        default: 60
                    },
                    forInput: String
                },
                methods: {
                    validate: function(t) {
                        return t && t.length >= this.minLen && t.length <= this.maxLen && new RegExp("\\w{".concat(this.minLen, ",").concat(this.maxLen, "}")).test(t) ? Promise.resolve() : Promise.reject()
                    }
                },
                computed: {
                    message: function() {
                        return "".concat(this.messagePrefix, " should be ").concat(this.minLen, " to ").concat(this.maxLen, " characters long (only latin characters are allowed)")
                    }
                }
            }
        },
        function(t, e, n) {
            var r = n(985);

            function i(e, n, o) {
                return "undefined" != typeof Reflect && Reflect.get ? t.exports = i = Reflect.get : t.exports = i = function(t, e, n) {
                    var i = r(t, e);
                    if (i) {
                        var o = Object.getOwnPropertyDescriptor(i, e);
                        return o.get ? o.get.call(n) : o.value
                    }
                }, i(e, n, o || e)
            }
            t.exports = i
        },
        function(t, e, n) {
            "use strict";
            var r = n(1);
            e.a = {
                methods: {
                    $storeEvent: function(t, e) {
                        r.a.dispatch("auth/event/custom", {
                            eventName: t,
                            context: e || this.id
                        })
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = "password"
        },
        function(t, e, n) {},
        function(t, e, n) {
            "use strict";
            var r = n(29),
                i = n(1);
            e.a = {
                props: {
                    sendConfig: {
                        type: Object,
                        default: function() {}
                    },
                    successSendMessage: String
                },
                data: function() {
                    return {
                        sendInProgress: !1
                    }
                },
                methods: {
                    send: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.a.close(t, "successSendMessage"), this.sendInProgress = !0, i.a.dispatch("auth/challenge/".concat(this.challengeName, "/sendOtp"), {
                            context: t,
                            init: n,
                            config: this.sendConfig
                        }).then((function() {
                            !n && e.successSendMessage && r.a.add(t, [{
                                id: "successSendMessage",
                                message: e.successSendMessage,
                                manualRemoveOnly: !0
                            }])
                        })).
                        finally((function() {
                            return e.sendInProgress = !1
                        }))
                    }
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(685);
            e.a = {
                openWebsocketWithToken: function(t) {
                    t || (t = r.a.getValueFromNameSelector(r.a.getPrefix() + "oauth2_global_js_token"));
                    var e = window.NUXT_APP_CONFIG ? NUXT_APP_CONFIG.transportLayerEndpoint : Applet.getVar("transport_layer_url");
                    if (!e) throw new Error("Transport layer endpoint is not defined");
                    return new WebSocket("".concat(e, "?app=AccountSecurity&libVersion=4.8.0&oauth2_token=").concat(t, "&X-Atmosphere-tracking-id=0&X-Atmosphere-Framework=2.3.8-javascript&X-Atmosphere-Transport=websocket&X-Atmosphere-TrackMessageSize=true&X-atmo-protocol=true"))
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = "reenter_password"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/switch-otp-challenge"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/send-otp"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/sso"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/tickets/additional-verification"
        },
        function(t, e, n) {
            var r = n(1051),
                i = n(1052),
                o = n(1073),
                s = n(1074);

            function a(t, e, n, o, s) {
                var a = [].slice.call(arguments, 1),
                    u = a.length,
                    c = "function" == typeof a[u - 1];
                if (!c && !r()) throw new Error("Callback required as last argument");
                if (!c) {
                    if (u < 1) throw new Error("Too few arguments provided");
                    return 1 === u ? (n = e, e = o = void 0) : 2 !== u || e.getContext || (o = n, n = e, e = void 0), new Promise((function(r, s) {
                        try {
                            var a = i.create(n, o);
                            r(t(a, e, o))
                        } catch (t) {
                            s(t)
                        }
                    }))
                }
                if (u < 2) throw new Error("Too few arguments provided");
                2 === u ? (s = n, n = e, e = o = void 0) : 3 === u && (e.getContext && void 0 === s ? (s = o, o = void 0) : (s = o, o = n, n = e, e = void 0));
                try {
                    var l = i.create(n, o);
                    s(null, t(l, e, o))
                } catch (t) {
                    s(t)
                }
            }
            e.create = i.create, e.toCanvas = a.bind(null, o.render), e.toDataURL = a.bind(null, o.renderToDataURL), e.toString = a.bind(null, (function(t, e, n) {
                return s.render(t, n)
            }))
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/totp/init"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/totp/confirm"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/phone/support"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/phone/validate"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/push-notification/check-init"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-security-question/submit"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-security-question/check-code"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-security-question/contact-us"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/device-authorization/visitor/send-otp"
        },
        function(t, e, n) {
            "use strict";
            var r = n(4),
                i = n.n(r),
                o = n(8),
                s = n.n(o),
                a = {
                    install: function(t) {
                        var e, r;
                        t.prototype.createToaster = function() {
                            var o = s()(i.a.mark((function o(s) {
                                var a, u, c;
                                return i.a.wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            if (r) {
                                                i.next = 8;
                                                break
                                            }
                                            return i.next = 3, n.e(70).then(n.bind(null, 1135)).then((function(t) {
                                                return t.
                                                default || t
                                            }));
                                        case 3:
                                            return a = i.sent, i.next = 6, Promise.all([n.e(12), n.e(69)]).then(n.bind(null, 1138)).then((function(t) {
                                                return t.
                                                default || t
                                            }));
                                        case 6:
                                            e = i.sent, r = new a;
                                        case 8:
                                            return r.hasContainer() || (u = t.extend(e), c = new u({}), r.setContainer(c), c.$mount(), document.body.appendChild(c.$el)), i.abrupt("return", r.getContainer().addToaster(s));
                                        case 10:
                                        case "end":
                                            return i.stop()
                                    }
                                }), o)
                            })));
                            return function(t) {
                                return o.apply(this, arguments)
                            }
                        }()
                    }
                };
            e.a = a
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/fido2/remove"
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "auth-growable-flex"
                }, [e(this.view, this._g(this._b({
                    tag: "component",
                    staticClass: "auth-growable-flex",
                    attrs: {
                        id: this.viewId,
                        "allow-revoke": !1
                    }
                }, "component", this.$attrs, !1), this.$listeners))], 1)
            };
            r._withStripped = !0;
            var i = n(22),
                o = n(746),
                s = n(55),
                a = n(26),
                u = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "up-form-group"
                    }, [n("label", {
                        staticClass: "up-label"
                    }, [t._v("Email")]), t._v(" "), n("p", {
                        staticClass: "form-control-static m-0 auth-email"
                    }, [t._v(t._s(t.email))]), t._v(" "), n("div", {
                        staticClass: "mt-10"
                    }, [n("a", {
                        directives: [{
                            name: "click-event",
                            rawName: "v-click-event"
                        }],
                        attrs: {
                            id: "reenter-password-not-you",
                            href: t.logoutUrl,
                            "aria-label": "Not you. Return to login"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.logout("not_you")
                            }
                        }
                    }, [t._v("\n                Not you?\n            ")])])]), t._v(" "), n("a-form", {
                        attrs: {
                            id: t.id,
                            name: t.name
                        }
                    }, [n("password", {
                        attrs: {
                            id: "password",
                            "input-class": {
                                "width-md": 1
                            },
                            required: !t.hasAlternativeChallenge
                        },
                        on: {
                            onBiometricClick: function(e) {
                                return t.onBiometricClick()
                            }
                        }
                    }, [t._v("\n            Password\n\n            "), n("div", {
                        staticClass: "mt-10",
                        attrs: {
                            slot: "after-alert-hint"
                        },
                        slot: "after-alert-hint"
                    }, [n("a", {
                        directives: [{
                            name: "click-event",
                            rawName: "v-click-event"
                        }],
                        attrs: {
                            id: "reenter-password-forgot",
                            href: t.resetPasswordUrl
                        }
                    }, [t._v("\n                    Forgot password?\n                ")])])]), t._v(" "), n("regexp", {
                        attrs: {
                            enabled: !1,
                            selector: "\\S",
                            message: "Should contain at least one non-space character"
                        }
                    }), t._v(" "), n("a-hidden", {
                        attrs: {
                            id: "biometricEligible",
                            required: !t.hasAlternativeChallenge,
                            val: t.biometricEligible
                        }
                    }), t._v(" "), t.webAuthNCredentials ? n("form-group", {
                        attrs: {
                            id: "webauthn"
                        }
                    }, [n("web-authn-fields", {
                        attrs: {
                            credentials: t.webAuthNCredentials
                        }
                    })], 1) : t._e()], 1)], 1)
                };
            u._withStripped = !0;
            var c = n(4),
                l = n.n(c),
                d = n(8),
                f = n.n(d),
                h = n(7),
                p = n(867),
                m = n(27),
                v = n(646),
                g = n(10),
                b = n(648),
                y = n(1),
                w = n(728),
                _ = {
                    data: function() {
                        return {
                            logoutUrl: w.a
                        }
                    },
                    methods: {
                        logout: function(t) {
                            y.a.dispatch("auth/user/logout", t)
                        }
                    }
                },
                k = n(38),
                S = n(37),
                E = n(3),
                x = n(67),
                C = n(50),
                O = n(845),
                I = n(742),
                A = n(701),
                T = (n(754), n(13), n(640)),
                P = {
                    ID: "reenterPassword",
                    mixins: [g.a, b.a, s.a, _, E.a, o.a],
                    directives: {
                        ClickEvent: k.a
                    },
                    props: {
                        name: {
                            default: "sensitiveZone"
                        },
                        action: {
                            type: String,
                            default: "/ab/account-security/reenter-password"
                        }
                    },
                    data: function() {
                        return {
                            webAuthNCredentials: null,
                            isWebAuthNSubmit: !1,
                            resetPasswordUrl: x.a
                        }
                    },
                    computed: {
                        biometricEligible: function() {
                            return this.isBiometricEnabledOnDevice && !this.isBiometricEnabledInApp && !y.a.getters["auth/biometric/enrolmentWasShown"] && !y.a.getters["auth/webauthn/add/inProgress"]
                        },
                        hasAlternativeChallenge: function() {
                            return null !== this.webAuthNCredentials
                        }
                    },
                    mounted: function() {
                        var t = this;
                        y.a.dispatch("auth/sensitiveZone/setCloseBehavior", {
                            mode: a.a.Modes.REENTER_PASSWORD,
                            action: "normal"
                        }), this.biometricInit().then((function() {
                            t.isBiometricEnabledInApp && t.checkSecurityKey()
                        }))
                    },
                    methods: {
                        onValidateResponse: function(t) {
                            return void 0 === t.data.eventCode
                        },
                        actionState: function(t) {
                            var e = this;
                            t.do((function() {
                                S.a.navigate(C.a)
                            })).onResponse("logout", this.id), t.do((function() {
                                T.a.showAlert("Re-enter password to enable ".concat(e.availableBiometricTitle), "Your ".concat(e.availableBiometricTitle, " is disabled. Please re-enter password to enable it."), {
                                    actions: [{
                                        id: "ok-id",
                                        label: "Ok"
                                    }]
                                })
                            })).onAction("auth/biometric/changed")
                        },
                        onBiometricClick: function() {
                            y.a.getters["auth/form/submitDisabled"](this.id) || this.checkSecurityKey()
                        },
                        onBeforeSubmit: function() {
                            return this.isWebAuthNSubmit = null !== this.webAuthNCredentials, Promise.resolve()
                        },
                        checkSecurityKey: function() {
                            var t = this;
                            return f()(l.a.mark((function e() {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, y.a.dispatch("auth/webauthn/verify/init", {
                                                formId: t.id,
                                                primary: !0
                                            });
                                        case 2:
                                            return e.prev = 2, e.next = 5, y.a.dispatch("auth/webauthn/verify/createCredentials");
                                        case 5:
                                            t.webAuthNCredentials = e.sent, t.$nextTick((function() {
                                                y.a.dispatch("auth/form/submit", t.id), setTimeout((function() {
                                                    t.webAuthNCredentials = null
                                                }), 100)
                                            })), e.next = 11;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.
                                            catch(2);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 9]
                                ])
                            })))()
                        },
                        logEvents: function(t) {
                            var e = this;
                            t.subLocation(O.a), t.impression("error_event_biometric_auth").condition((function() {
                                return e.isWebAuthNSubmit
                            })).onUnexpectedError(this.id), t.impression("error_event_serverside_error").onUnexpectedError(this.id), t.impression("error_event_validation_error").onValidationError(this.id), t.click("not_you").onClick("reenter-password-not-you"), t.click("biometric_auth_icon").onClick("biometricIcon"), t.click("forgot_password").onClick("reenter-password-forgot"), t.click("continue").onSubmit(this.id), t.impression("successfull_biometric_auth").condition((function() {
                                return e.isWebAuthNSubmit
                            })).onSuccessSubmit(this.id), t.click("success_event_pass_provided").onSuccessSubmit(this.id), t.click("cancel").onCancel(this.id)
                        }
                    },
                    components: {
                        AForm: h.a,
                        Password: p.a,
                        AHidden: m.a,
                        Regexp: v.a,
                        WebAuthnFields: I.a,
                        FormGroup: A.a
                    }
                },
                R = n(0),
                N = Object(R.a)(P, u, [], !1, null, null, null);
            N.options.__file = "node_modules/@upwork/sensitive-zone/components/reenter-password/forms/reenter.vue";
            var j = N.exports,
                D = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("password-alert", t._g(t._b({
                        attrs: {
                            name: "weak",
                            "success-submit-redirect-url": t.successSubmitRedirectUrl
                        },
                        on: {
                            onCancel: t.onCancel
                        }
                    }, "password-alert", t.$attrs, !1), t.$listeners), [n("span", {
                        attrs: {
                            slot: "title"
                        },
                        slot: "title"
                    }, [t._v("Protect your account")]), t._v("\n    Your password is not strong and may put your account at risk. We recommend updating it now.\n    "), n("a", {
                        attrs: {
                            href: t.securityLink,
                            target: "_blank"
                        }
                    }, [t._v("Learn more")])])
                };
            D._withStripped = !0;
            var B = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "text-center align-items-center"
                }, [e("illustration", {
                    staticClass: "illustration",
                    attrs: {
                        name: "password"
                    }
                }), this._v(" "), e("div", {
                    directives: [{
                        name: "aria-live",
                        rawName: "v-aria-live"
                    }]
                }, [e("h2", {
                    staticClass: "mt-10"
                }, [this._t("title")], 2), this._v(" "), e("div", {
                    staticClass: "row mb-10"
                }, [e("div", {
                    staticClass: "col-md-12"
                }, [this._t("default")], 2)])])], 1)
            };
            B._withStripped = !0;
            var L = n(12),
                M = n(25),
                $ = n(733),
                U = n(9),
                F = (n(724), n(725), {
                    mixins: [L.a],
                    mounted: function() {
                        this.preloadInfo()
                    },
                    computed: {
                        successSubmitRedirectUrl: function() {
                            return null
                        }
                    },
                    directives: {
                        AriaLive: $.a
                    },
                    methods: {
                        onCustomSubmit: function() {
                            var t = this;
                            return this.preloadInfo().then((function() {
                                return U.a.getters["auth/securityQuestion/securityQuestion"] ? {} : (S.a.setContext(t).navigate(x.a), Promise.reject())
                            }))
                        },
                        preloadInfo: function() {
                            return U.a.dispatch("auth/securityQuestion/init")
                        }
                    },
                    components: {
                        Illustration: M.a
                    }
                }),
                V = Object(R.a)(F, B, [], !1, null, null, null);
            V.options.__file = "node_modules/@upwork/sensitive-zone/components/reenter-password/forms/password-alert.vue";
            var q = V.exports,
                z = {
                    props: {
                        successSubmitRedirectUrl: String
                    },
                    data: function() {
                        return {
                            securityLink: "https://support.upwork.com/hc/en-us/articles/211067688-General-Electronic-Security"
                        }
                    },
                    created: function() {
                        U.a.dispatch("auth/sensitiveZone/setCloseBehavior", {
                            mode: a.a.Modes.REENTER_PASSWORD,
                            action: "verified"
                        })
                    },
                    methods: {
                        onCancel: function() {
                            this.successSubmitRedirectUrl && S.a.navigate(this.successSubmitRedirectUrl)
                        }
                    },
                    components: {
                        PasswordAlert: q
                    }
                },
                K = Object(R.a)(z, D, [], !1, null, null, null);
            K.options.__file = "node_modules/@upwork/sensitive-zone/components/reenter-password/forms/weak.vue";
            var H = K.exports,
                Y = function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("password-alert", this._g(this._b({
                        attrs: {
                            name: "expired"
                        }
                    }, "password-alert", this.$attrs, !1), this.$listeners), [e("span", {
                        attrs: {
                            slot: "title"
                        },
                        slot: "title"
                    }, [this._v("Update you password")]), this._v("\n    Your password has expired. Please Update your password now.\n")])
                };
            Y._withStripped = !0;
            var Q = {
                    components: {
                        PasswordAlert: q
                    }
                },
                W = Object(R.a)(Q, Y, [], !1, null, null, null);
            W.options.__file = "node_modules/@upwork/sensitive-zone/components/reenter-password/forms/expired.vue";
            var G = W.exports,
                J = n(766),
                X = function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("set-fido2-app-form", this._g(this._b({
                        attrs: {
                            "success-submit-redirect-url": this.successSubmitRedirectUrl
                        },
                        on: {
                            onCancel: this.onCancel
                        }
                    }, "set-fido2-app-form", this.$attrs, !1), this.$listeners))
                };
            X._withStripped = !0;
            var Z = n(719),
                tt = {
                    props: {
                        successSubmitRedirectUrl: String
                    },
                    mounted: function() {
                        U.a.dispatch("auth/sensitiveZone/setCloseBehavior", {
                            mode: a.a.Modes.REENTER_PASSWORD,
                            action: "verified"
                        })
                    },
                    methods: {
                        onCancel: function() {
                            this.successSubmitRedirectUrl && Location.navigate(this.successSubmitRedirectUrl)
                        }
                    },
                    components: {
                        SetFido2AppForm: Z.a
                    }
                },
                et = Object(R.a)(tt, X, [], !1, null, null, null);
            et.options.__file = "node_modules/@upwork/sensitive-zone/components/reenter-password/forms/fido2-app-interstitial.vue";
            var nt = et.exports,
                rt = {
                    mixins: [i.a, o.a, s.a],
                    methods: {
                        actionState: function(t) {
                            t.do((function() {
                                U.a.dispatch("auth/sensitiveZone/verified", a.a.Modes.REENTER_PASSWORD)
                            })).onSuccessSubmit(J.a)
                        },
                        viewState: function(t) {
                            var e = this;
                            t.switchTo(t.extend(j, {
                                title: "Re-enter password",
                                submitLabel: "Continue",
                                formControlsAlignment: "side",
                                cancelButton: !0,
                                closeOnSubmit: !0,
                                inverseFooter: !0
                            })).now(), t.switchTo(t.extend(H, {
                                ID: "weekForm",
                                title: "Protect your account",
                                submitLabel: "Update"
                            })).onResponse("weakPassword", j), t.switchTo(t.extend(G, {
                                title: "Update your password",
                                submitLabel: "Continue"
                            })).onResponse("passwordExpired", j), t.switchTo(J.a).onSuccessSubmit(H).onSuccessSubmit(G), this.biometricInit().then((function() {
                                t.switchTo(t.extend(nt, {
                                    title: e.availableBiometricCapitalizedTitle,
                                    submitLabel: "Enable",
                                    cancelLabel: "No, thanks",
                                    cancelButton: !0,
                                    closeOnSubmit: !0
                                })).onResponse("fido2Propose", j)
                            }))
                        }
                    }
                },
                it = Object(R.a)(rt, r, [], !1, null, null, null);
            it.options.__file = "node_modules/@upwork/sensitive-zone/components/reenter-password/form.vue";
            e.a = it.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "auth-growable-flex"
                }, [n(t.view, t._b({
                    tag: "component",
                    attrs: {
                        id: t.viewId
                    }
                }, "component", t.$attrs, !1), [t._l(t.$slots, (function(e, n) {
                    return t._t(n, null, {
                        slot: n
                    })
                }))], 2)], 1)
            };
            r._withStripped = !0;
            var i = n(22),
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("send-form", t._g(t._b({
                        staticClass: "text-center phone-form",
                        attrs: {
                            "challenge-name": t.challengeName,
                            id: t.id,
                            illustration: t.illustration,
                            "check-uid": !1
                        }
                    }, "send-form", t.$attrs, !1), t.$listeners), [t._l(t.$slots, (function(e, n) {
                        return t._t(n, null, {
                            slot: n
                        })
                    })), t._v(" "), n("div", {
                        staticClass: "mb-20"
                    }, [n("div", {
                        staticClass: "mb-10 text-left"
                    }, [n("strong", [t._v("Get a text message verification code by email")])]), t._v(" "), n("div", {
                        staticClass: "mb-10 text-left"
                    }, [t._v("\n            Select "), n("strong", [t._v("Send")]), t._v(" to receive a verification code to "), n("span", {
                        staticClass: "auth-email"
                    }, [t._v(t._s(t.email))]), t._v(".\n            The email containing the code should arrive within minutes.\n        ")])])], 2)
                };
            o._withStripped = !0;
            var s = n(648),
                a = n(745),
                u = n(670),
                c = n(12),
                l = n(14),
                d = (n(13), n(63), n(661), {
                    mixins: [c.a, s.a],
                    data: function() {
                        return {
                            challengeName: l.c.EMAIL,
                            illustration: function() {
                                return n.e(9).then(n.bind(null, 80))
                            }
                        }
                    },
                    components: {
                        SendForm: a.a,
                        ObfuscatedPhone: u.a
                    }
                }),
                f = n(0),
                h = Object(f.a)(d, o, [], !1, null, null, null);
            h.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/email/init-send.vue";
            var p = h.exports,
                m = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("otp-form", t._g(t._b({
                        staticClass: "email-form",
                        attrs: {
                            "challenge-name": t.challengeName,
                            "allow-send": !0,
                            "allow-resend": !1,
                            "input-type": "simple",
                            illustration: t.illustration
                        }
                    }, "otp-form", t.$attrs, !1), t.$listeners), [n("p", {
                        staticClass: "text-left"
                    }, [t._v("\n        We've sent an email to "), n("strong", {
                        staticClass: "auth-email"
                    }, [t._v(t._s(t.email))]), t._v(" with a six digit code.\n        Enter the code in the code box below and press "), n("strong", [t._v("Next")]), t._v(".\n    ")])])
                };
            m._withStripped = !0;
            var v = n(667),
                g = (n(34), n(724), n(725), {
                    submitLabel: "Next",
                    formControlsAlignment: "side",
                    closeOnSubmit: !0,
                    cancelButton: !0,
                    mixins: [s.a],
                    data: function() {
                        return {
                            challengeName: l.c.EMAIL,
                            illustration: function() {
                                return n.e(11).then(n.bind(null, 73))
                            }
                        }
                    },
                    components: {
                        OtpForm: v.a
                    }
                }),
                b = (n(992), Object(f.a)(g, m, [], !1, null, "0b87e100", null));
            b.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/email/form.vue";
            var y = b.exports,
                w = {
                    mixins: [i.a],
                    props: {
                        id: String
                    },
                    methods: {
                        viewState: function(t) {
                            t.switchTo(t.extend(p, {
                                submitLabel: "Send",
                                formControlsAlignment: "side",
                                closeOnSubmit: !1
                            })).now(), t.switchTo(t.extend(y, {
                                submitLabel: "Next",
                                formControlsAlignment: "side"
                            })).onSuccessSubmit(p)
                        }
                    }
                },
                _ = Object(f.a)(w, r, [], !1, null, null, null);
            _.options.__file = "node_modules/@upwork/sensitive-zone/components/device-auth-otp/forms/email.vue";
            e.a = _.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("a-form", {
                    attrs: {
                        id: t.id,
                        name: t.name
                    }
                }, [t.securityQuestion ? n("p", [t._v("\n        Before you can set a new security question, youâ€™ll have to answer your current one correctly.\n    ")]) : n("p", [t._v("\n        Youâ€™ll be prompted to answer your security question when we need\n        to verify your identity, so be sure to choose a question only you know the answer to.\n    ")]), t._v(" "), n("div", {
                    staticClass: "row mb-20"
                }, [n("div", {
                    staticClass: "col-md-9"
                }, [t.securityQuestion ? n("div", [n("div", {
                    staticClass: "up-form-group"
                }, [n("label", {
                    staticClass: "up-label"
                }, [t._v("Current Question")]), t._v(" "), n("p", {
                    staticClass: "form-control-static"
                }, [t._v(t._s(t.securityQuestion))])]), t._v(" "), n("a-input", {
                    attrs: {
                        "aria-label": "Answer to the Current Question",
                        id: "currentAnswer"
                    }
                }, [t._v("Answer")]), t._v(" "), n("min-max-alphanumeric", {
                    attrs: {
                        "message-prefix": "Answer"
                    }
                }), t._v(" "), n("hr")], 1) : t._e(), t._v(" "), n("security-question-and-answer", {
                    ref: "questionAndAnswer"
                }, [n("span", {
                    attrs: {
                        slot: "newQuestionLabel"
                    },
                    slot: "newQuestionLabel"
                }, [t._v("\n                    " + t._s(t.securityQuestion ? "New Question" : "Question") + "\n                ")])])], 1)]), t._v(" "), n("security-question-options")], 1)
            };
            r._withStripped = !0;
            var i = n(1),
                o = n(10),
                s = n(732),
                a = n(7),
                u = n(33),
                c = n(838),
                l = n(703),
                d = n(702),
                f = (n(13), n(724), n(725), n(754), {
                    mixins: [o.a, s.a],
                    props: {
                        name: {
                            default: "securityQuestion"
                        },
                        action: {
                            type: String,
                            default: "/ab/account-security/security-question"
                        }
                    },
                    data: function() {
                        return {
                            szSkipCombinedCheck: !0
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.onSuccessSubmit((function() {
                            i.a.dispatch("auth/securityQuestion/update", t.$refs.questionAndAnswer.getQuestion())
                        }))
                    },
                    components: {
                        SecurityQuestionAndAnswer: d.a,
                        SecurityQuestionOptions: l.a,
                        AInput: u.a,
                        MinMaxAlphanumeric: c.a,
                        AForm: a.a
                    }
                }),
                h = n(0),
                p = Object(h.a)(f, r, [], !1, null, null, null);
            p.options.__file = "node_modules/@upwork/sensitive-zone/components/security-question/form.vue";
            e.a = p.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("modal", {
                    attrs: {
                        id: this.id,
                        form: this.form,
                        "form-attrs": this.$attrs,
                        sticky: !0,
                        "inverse-footer": !0,
                        title: "Security question"
                    }
                }, [e("div", [e("client-only", [e("router-view")], 1)], 1)])
            };
            r._withStripped = !0;
            n(53);
            var i = n(40),
                o = n(6),
                s = n(3),
                a = n(864),
                u = {
                    layout: "modal",
                    mixins: [s.a],
                    cancelMessage: "You must set up your security question before you can continue.",
                    props: {
                        id: String
                    },
                    data: function() {
                        return {
                            form: a.a
                        }
                    },
                    methods: {
                        logEvents: function(t) {
                            t.subLocation("security_question"), t.impression("security_question_impression").now(), t.impression("success_event_sq_changed").onSuccessSubmit(this.id), t.impression("error_event_serverside_error").onUnexpectedError(this.id), t.impression("error_event_validation_error").onValidationError(this.id), t.click("cancel").onCancel(this.id), t.click("save").onSubmit(this.id)
                        }
                    },
                    components: {
                        Modal: i.a,
                        FormControl: o.a
                    }
                },
                c = n(0),
                l = Object(c.a)(u, r, [], !1, null, null, null);
            l.options.__file = "node_modules/@upwork/sensitive-zone/components/security-question/modal.vue";
            e.a = l.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "up-illustration"
                }, [e(this.component, {
                    tag: "component"
                })], 1)
            };
            r._withStripped = !0;
            var i = n(842),
                o = {
                    injectStyles: [n.n(i).a],
                    name: "UpCIllustration",
                    props: {
                        name: {
                            default: "",
                            type: String,
                            required: !0
                        }
                    },
                    data: function() {
                        var t = this;
                        return {
                            component: function() {
                                return n(62)("./".concat(t.name, ".vue"))
                            }
                        }
                    },
                    watch: {
                        name: {
                            handler: function(t) {
                                var e = this,
                                    r = n(62)("./".concat(t, ".vue"));
                                r.then((function() {
                                    e.component = function() {
                                        return r
                                    }
                                }))
                            },
                            immediate: !0
                        }
                    }
                },
                s = n(0),
                a = Object(s.a)(o, r, [], !1, null, null, null);
            a.options.__file = "node_modules/@upwork/vue-components-core/src/illustration/illustration.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("a-input", t._g(t._b({
                    attrs: {
                        type: "password",
                        autocomplete: "current-password",
                        "input-wrapper-class": t.inputWrapper
                    }
                }, "a-input", t.$attrs, !1), t.$listeners), [t._l(t.$slots, (function(e, n) {
                    return t._t(n, null, {
                        slot: n
                    })
                })), t._v(" "), t.isBiometricEnabledInApp ? n("div", {
                    staticClass: "biometric-block",
                    attrs: {
                        slot: "append-block"
                    },
                    slot: "append-block"
                }, [n("div", {
                    staticClass: "tap-area",
                    on: {
                        click: function(e) {
                            return t.onBiometricClick()
                        }
                    }
                }), t._v(" "), n("biometric-icon", {
                    staticClass: "biometric-icon",
                    attrs: {
                        disabled: t.isSubmitDisabled
                    }
                })], 1) : t._e()], 2)
            };
            r._withStripped = !0;
            var i = n(33),
                o = n(869),
                s = n(55),
                a = n(9),
                u = n(68),
                c = (n(13), {
                    mixins: [s.a],
                    computed: {
                        isSubmitDisabled: function() {
                            return a.a.getters["auth/form/submitDisabled"](u.a.formId(this))
                        },
                        inputWrapper: function() {
                            return {
                                "auth-input-has-biometrics": this.isBiometricEnabledInApp
                            }
                        }
                    },
                    methods: {
                        onBiometricClick: function() {
                            this.isSubmitDisabled || (a.a.dispatch("auth/event/click", "biometricIcon"), this.$emit("onBiometricClick"))
                        }
                    },
                    components: {
                        AInput: i.a,
                        BiometricIcon: o.a
                    }
                }),
                l = (n(997), n(0)),
                d = Object(l.a)(c, r, [], !1, null, null, null);
            d.options.__file = "node_modules/@upwork/auth-common/components/inputs/password.vue";
            e.a = d.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("input-group", {
                    class: t.getClass,
                    attrs: {
                        id: t.id,
                        required: t.required,
                        tabindex: "-1"
                    }
                }, [t.unavailable ? n("label", {
                    staticClass: "up-label",
                    attrs: {
                        for: t.domId
                    }
                }, [t._t("default")], 2) : t._e(), t._v(" "), n("div", {
                    ref: "captcha",
                    staticClass: "display-inline-block",
                    attrs: {
                        id: t.nodeId,
                        "data-captcha": ""
                    }
                }), t._v(" "), n("custom", {
                    attrs: {
                        name: "availabilityValidator",
                        callback: t.availabilityValidator,
                        message: "We cannot verify your login due to network restrictions and/or traffic blocking at your location."
                    }
                })], 1)
            };
            r._withStripped = !0;
            var i, o = n(4),
                s = n.n(o),
                a = n(8),
                u = n.n(a),
                c = n(668),
                l = n(657),
                d = n(1),
                f = n(647);

            function h() {
                return i || (i = new Promise((function(t, e) {
                    var n = document.createElement("script");
                    n.onload = function() {
                        ! function t(e) {
                            var n = window.grecaptcha;
                            n && n.render ? e(n) : setTimeout((function() {
                                return t(e)
                            }), 300)
                        }(t)
                    }, n.onerror = function(t) {
                        e(t)
                    }, n.type = "text/javascript", n.src = "https://www.recaptcha.net/recaptcha/api.js?render=explicit", n.async = !0, n.defer = !0, document.head.appendChild(n)
                }))), i
            }
            h().
            catch();
            var p = {
                    mixins: [l.a],
                    created: function() {
                        var t = this;
                        h().then((function(e) {
                            void 0 === t.widgetId ? t.widgetId = e.render(t.$refs.captcha, {
                                sitekey: d.a.getters["auth/captcha/siteKey"],
                                callback: function(e) {
                                    return t.value = e
                                },
                                "expired-callback": function() {
                                    return t.reset()
                                }
                            }) : t.reset()
                        })).
                        catch((function(e) {
                            t.unavailable = !0
                        }))
                    },
                    computed: {
                        getClass: function() {
                            return this.unavailable ? "text-left" : "text-center"
                        }
                    },
                    components: {
                        InputGroup: c.a,
                        Custom: f.a
                    },
                    data: function() {
                        return {
                            nodeId: "g-recaptcha",
                            unavailable: !1,
                            focusedTries: 0
                        }
                    },
                    methods: {
                        reset: function() {
                            var t = this;
                            return u()(s.a.mark((function e() {
                                var n, r;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = null, document.activeElement && (n = null !== document.activeElement.closest("#" + t.nodeId)), e.next = 4, h();
                                        case 4:
                                            if (r = e.sent, void 0 !== t.widgetId) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 7:
                                            r.reset(t.widgetId), t.value = "", n && t.focus();
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        availabilityValidator: function() {
                            return this.unavailable ? Promise.reject() : Promise.resolve()
                        },
                        focus: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
                            if (!(e <= 0)) {
                                var n = this.$refs.captcha.querySelector("iframe");
                                if (!n) return setTimeout((function() {
                                    return t.focus(e - 1)
                                }), 500);
                                n.focus()
                            }
                        }
                    }
                },
                m = n(0),
                v = Object(m.a)(p, r, [], !1, null, null, null);
            v.options.__file = "node_modules/@upwork/auth-common/components/inputs/captcha.vue";
            e.a = v.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement;
                return (this._self._c || t)(this.icon, {
                    tag: "component",
                    class: {
                        "biometric-icon": !0,
                        "biometric-icon-disabled": this.disabled
                    }
                })
            };
            r._withStripped = !0;
            var i = n(4),
                o = n.n(i),
                s = n(8),
                a = n.n(s),
                u = n(1),
                c = n(765),
                l = n(748);

            function d() {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = a()(o.a.mark((function t() {
                    return o.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!c.a.isAndroidApp()) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", (function() {
                                    return n.e(84).then(n.bind(null, 1540))
                                }));
                            case 2:
                                return t.next = 4, u.a.dispatch("auth/biometric/init", !0);
                            case 4:
                                t.t0 = u.a.getters["auth/biometric/mainSupportedType"], t.next = t.t0 === l.a.FACE_ID ? 7 : t.t0 === l.a.TOUCH_ID ? 8 : 9;
                                break;
                            case 7:
                                return t.abrupt("return", (function() {
                                    return n.e(86).then(n.bind(null, 1541))
                                }));
                            case 8:
                                return t.abrupt("return", (function() {
                                    return n.e(87).then(n.bind(null, 1542))
                                }));
                            case 9:
                                return t.abrupt("return", (function() {
                                    return n.e(85).then(n.bind(null, 1543))
                                }));
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var h = {
                    props: {
                        disabled: Boolean
                    },
                    data: function() {
                        return {
                            icon: {}
                        }
                    },
                    mounted: function() {
                        var t = this;
                        return a()(o.a.mark((function e() {
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, d();
                                    case 2:
                                        t.icon = e.sent;
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                },
                p = (n(996), n(0)),
                m = Object(p.a)(h, r, [], !1, null, null, null);
            m.options.__file = "node_modules/@upwork/auth-common/components/icons/biometrics/icon.vue";
            e.a = m.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    class: {
                        disabled: t.disabled,
                            checkbox: "radio" !== t.type,
                            radio: "radio" === t.type
                    }
                }, [n("label", [t._t("input"), t._v(" "), n("span", {
                    staticClass: "checkbox-replacement-helper",
                    class: {
                        "has-error": t.isError
                    }
                }, ["radio" !== t.type ? n("up-c-icon", {
                    attrs: {
                        title: "check",
                        name: "check",
                        label: "Check",
                        size: "xs"
                    }
                }) : t._e()], 1), t._v(" "), t._t("label")], 2)])
            };
            r._withStripped = !0;
            var i = {
                    name: "UpCCheckbox",
                    props: {
                        disabled: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            isError: !1,
                            type: "checkbox"
                        }
                    },
                    mounted: function() {
                        if (this.$slots.input) {
                            var t = this.$slots.input[0].elm;
                            this.setDisabledAttribute(), this.setType(), t.addEventListener("change", this.onInputChanged)
                        }
                    },
                    updated: function() {
                        this.$slots.input && (this.setDisabledAttribute(), this.setType())
                    },
                    methods: {
                        setDisabledAttribute: function() {
                            this.$slots.input[0].elm.disabled = !!this.disabled
                        },
                        setType: function() {
                            "radio" === this.$slots.input[0].elm.type && (this.type = "radio")
                        },
                        onInputChanged: function() {
                            this.$parent.$emit("changed")
                        },
                        isInputChecked: function() {
                            return this.$slots.input && this.$slots.input[0].elm.checked
                        }
                    }
                },
                o = (n(1076), n(0)),
                s = Object(o.a)(i, r, [], !1, null, "305e9888", null);
            s.options.__file = "node_modules/@upwork/up-c-checkbox/src/checkbox.vue";
            e.a = s.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement;
                return (this._self._c || t)("checkbox", this._g(this._b({
                    ref: "obj",
                    attrs: {
                        required: !1,
                        type: "radio"
                    }
                }, "checkbox", this.$attrs, !1), this.$listeners), [this._t("default"), this._v(" "), this._t("hint", null, {
                    slot: "hint"
                })], 2)
            };
            r._withStripped = !0;
            var i = n(650),
                o = (n(13), {
                    methods: {
                        isChecked: function() {
                            return this.$refs.obj.isChecked()
                        },
                        focus: function() {
                            this.$refs.obj.focus()
                        }
                    },
                    components: {
                        Checkbox: i.a
                    }
                }),
                s = n(0),
                a = Object(s.a)(o, r, [], !1, null, null, null);
            a.options.__file = "node_modules/@upwork/auth-common/components/inputs/radio.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return g
            })), n.d(e, "a", (function() {
                return s
            })), n.d(e, "b", (function() {
                return _
            }));
            var r = n(58),
                i = n.n(r),
                o = n(887),
                s = {
                    inited: !1,
                    listeners: {},
                    featuresDetected: {},
                    featureDetectionCallbacks: {},
                    failbackAvailableFeatures: ["transition-meta", "page-meta", "navigation-meta", "sso-meta"],
                    init: function() {
                        var t = this;
                        if (!this.inited) {
                            this.inited = !0, this.iosBridge = window.webkit && window.webkit.messageHandlers.__IOS_BRIDGE__, this.androidBridge = window.__ANDROID_BRIDGE__;
                            var e = window.__NATIVE_BRIDGE__ && window.__NATIVE_BRIDGE__.onMessage;
                            window.__NATIVE_BRIDGE__ || (window.__NATIVE_BRIDGE__ = this.iosBridge || this.androidBridge), window.__NATIVE_BRIDGE__ && (window.__NATIVE_BRIDGE__.onMessage = function(n) {
                                e && e(n), t.onMessage(n)
                            })
                        }
                    },
                    on: function(t, e, n) {
                        this.init(), this.listeners[e] || (this.listeners[e] = {}), this.listeners[e][t] = n
                    },
                    off: function(t, e) {
                        delete this.listeners[e][t]
                    },
                    postMessage: function(t) {
                        this.init(), this.iosBridge ? this.iosBridge.postMessage(t) : this.androidBridge && this.androidBridge.postMessage(JSON.stringify(t))
                    },
                    onMessage: function(t) {
                        var e = t.payload.id;
                        this.listeners[e] && this.listeners[e][t.type] && this.listeners[e][t.type](t.payload)
                    },
                    isNewerVersion: function(t, e) {
                        var n = t.split("."),
                            r = e.split(".");
                        if (!r.length || !n.length) return !1;
                        for (var i = 0; i < r.length; ++i) {
                            var o = parseInt(r[i]) || 0,
                                s = parseInt(n[i]) || 0;
                            if (o !== s) return o > s
                        }
                        return !0
                    },
                    isFeatureDetectionFailback: function() {
                        var t = /(Freelancer)/gi.test(navigator.userAgent),
                            e = navigator.userAgent.match(/[^/]+$/)[0].replace(/\([^()]*\)/, "").trim();
                        return Object(o.b)(navigator.userAgent) ? t ? !this.isNewerVersion("1.12.2", e) : !this.isNewerVersion("1.9.2", e) : Object(o.a)(navigator.userAgent) ? t ? !this.isNewerVersion("1.10.0", e) : !this.isNewerVersion("1.8.0", e) : void 0
                    },
                    onFeatureDetected: function(t, e) {
                        var n = t.id,
                            r = t.features,
                            i = r && r.length ? r : e;
                        this.featuresDetected[n] = i, this.featureDetectionCallbacks[n] && (this.featureDetectionCallbacks[n].forEach((function(t) {
                            t(i)
                        })), delete this.featureDetectionCallbacks[n])
                    },
                    isNativeFeatureAvailable: function(t, e) {
                        var n = this,
                            r = "".concat(t, "-meta");
                        return new Promise((function(i) {
                            if (n.isFeatureDetectionFailback()) {
                                var o = n.failbackAvailableFeatures.indexOf(r) >= 0;
                                i(o)
                            } else if (void 0 !== n.featuresDetected[r]) e && Array.isArray(n.featuresDetected[r]) ? i(!(n.featuresDetected[r].indexOf(e) < 0)) : i(Boolean(n.featuresDetected[r]));
                            else {
                                n.listeners[r] || (n.postMessage({
                                    type: "up/".concat(t, "/META"),
                                    payload: {
                                        id: r
                                    }
                                }), n.on("up/".concat(t, "/META/events/SUCCESS"), r, (function(t) {
                                    return n.onFeatureDetected(t, !0)
                                })), n.on("up/".concat(t, "/v1/UNKNOWN"), r, (function(t) {
                                    return n.onFeatureDetected(t, !1)
                                })), n.on("up/".concat(t, "/META/events/ERROR"), r, (function(t) {
                                    return n.onFeatureDetected(t, !1)
                                })));
                                n.featureDetectionCallbacks[r] || (n.featureDetectionCallbacks[r] = []), n.featureDetectionCallbacks[r].push((function(o) {
                                    n.listeners[r] && (n.off("up/".concat(t, "/META/events/SUCCESS"), r), n.off("up/".concat(t, "/v1/UNKNOWN"), r), n.off("up/".concat(t, "/META/events/ERROR"), r)), e && Array.isArray(o) ? i(!(o.indexOf(e) < 0)) : i(Boolean(o))
                                }))
                            }
                        }))
                    }
                },
                a = 0,
                u = {},
                c = {};

            function l(t) {
                var e = t.id;
                u[e] && (u[e](), delete u[e], delete c[e])
            }

            function d(t) {
                return function(t) {
                    var e = JSON.parse(JSON.stringify(t)),
                        n = [];
                    for (; e.length;) {
                        var r = e.pop();
                        r.items && r.items.length && (r.items.forEach((function(t) {
                            t.groups && e.push.apply(e, i()(t.groups))
                        })), n.push.apply(n, i()(r.items)))
                    }
                    return n
                }(t.groups).map((function(t) {
                    var e = {};
                    return e.id = t.id, e.isChecked = t.isChecked, e
                }))
            }

            function f(t, e, n, r) {
                for (var o = [], s = [], a = i()(c[e]); a.length;) {
                    var u = a.pop();
                    Array.isArray(u[r]) && a.push.apply(a, i()(u[r])), s.push(u)
                }
                return t.forEach((function(t) {
                    var e = s.find((function(e) {
                        return e[n] === t.id
                    }));
                    e && (e.isChecked = Boolean(t.isChecked), o.push(e))
                })), o
            }

            function h(t, e) {
                return e ? t.filter((function(t) {
                    var n = t.label.toLowerCase();
                    return t.subLabel && (n += t.subLabel.toLowerCase()), n.indexOf(e.toLowerCase()) >= 0
                })) : t
            }
            var p = {
                bottomSheet: "BOTTOM_SHEET",
                dialog: "DIALOG",
                modal: "MODAL"
            };

            function m(t, e, n) {
                var r = e.items && e.items.length ? e.items : [];
                return [{
                    checkableBehavior: r.some((function(t) {
                        return Array.isArray(t[e.nestedKey])
                    })) ? "none" : n,
                    id: t,
                    items: r.map((function(t) {
                        var r = {
                            id: t[e.itemKey],
                            label: t[e.itemText],
                            icon: t.icon,
                            isChecked: t.isChecked
                        };
                        if (e.itemSublabel && (r.subLabel = t[e.itemSublabel]), Array.isArray(t[e.nestedKey])) {
                            var i = {
                                items: t[e.nestedKey],
                                itemText: e.itemText,
                                itemKey: e.itemKey,
                                nestedKey: e.nestedKey
                            };
                            e.itemSublabel && (i.itemSublabel = e.itemSublabel), r.groups = m(t[e.itemKey], i, n)
                        }
                        return r
                    }))
                }]
            }

            function v(t) {
                return t.groups.map((function(e) {
                    var n = {
                        id: e[t.groupKey],
                        label: e[t.groupText],
                        checkableBehavior: e.checkableBehavior || "none",
                        items: e[t.groupItemsKey].map((function(e) {
                            var n = {
                                id: e[t.itemKey],
                                label: e[t.itemText],
                                icon: e.icon,
                                isChecked: e.isChecked
                            };
                            return t.itemSublabel && (n.subLabel = e[t.itemSublabel]), n
                        }))
                    };
                    return e.checkableBehaviorParentId && (n.checkableBehaviorParentId = e.checkableBehaviorParentId), n
                }))
            }
            var g = {
                    open: function(t) {
                        a += 1;
                        var e = t.id || "sheet-id-".concat(a),
                            n = !!t.hasFiltering && t.hasFiltering,
                            r = t.query ? t.query : "",
                            i = p[t.type],
                            o = [];
                        if (o = Array.isArray(t.menuData.groups) ? v(t.menuData) : m("group-id", t.menuData, t.checkableBehavior ? t.checkableBehavior : "none"), n && s.on("up/menus/v1/".concat(i, "/EVENTS/QUERY_CHANGED"), e, (function(e) {
                                return function(t, e, n, r) {
                                    var i = t.query,
                                        o = t.id;
                                    r && r(o, i, f(d(t), o, e, n))
                                }(e, t.menuData.itemKey, t.menuData.nestedKey, t.filteringCallback)
                            })), s.on("up/menus/v1/".concat(i, "/EVENTS/QUERY_SUBMITTED"), e, (function(e) {
                                return function(t, e) {
                                    var n = t.query,
                                        r = t.id;
                                    e && e(r, n)
                                }(e, t.submitCallback)
                            })), s.on("up/menus/v1/".concat(i, "/EVENTS/DONE"), e, (function(e) {
                                return function(t, e, n) {
                                    var r = t.id;
                                    u[r] && (u[r](f(d(t), r, e, n)), delete u[r], delete c[r])
                                }(e, t.menuData.itemKey, t.menuData.nestedKey)
                            })), s.on("up/menus/v1/".concat(i, "/EVENTS/DISMISSED"), e, l), Array.isArray(t.menuData.groups)) {
                            var g = [];
                            t.menuData.groups.forEach((function(e) {
                                Array.isArray(e[t.menuData.groupItemsKey]) && (g = g.concat(e[t.menuData.groupItemsKey]))
                            })), c[e] = g
                        } else c[e] = t.menuData.items;
                        return r && o.forEach((function(e, n) {
                            var i = t.enableFiltering ? h(e.items, r) : e.items;
                            e.items = i
                        })), s.postMessage({
                            type: "up/menus/v1/".concat(i, "/PUSH"),
                            payload: {
                                id: e,
                                title: t.title ? t.title : "",
                                isTokenizer: !!t.isTokenizer,
                                hasFiltering: n,
                                query: r,
                                queryPlaceholder: t.queryPlaceholder ? t.queryPlaceholder : "",
                                groups: o
                            }
                        }), new Promise((function(r) {
                            u[e] = function(i) {
                                ! function(t, e, n) {
                                    var r = p[t];
                                    n && s.off("up/menus/v1/".concat(r, "/EVENTS/QUERY_CHANGED"), e), s.off("up/menus/v1/".concat(r, "/EVENTS/DONE"), e), s.off("up/menus/v1/".concat(r, "/EVENTS/DISMISSED"), e)
                                }(t.type, e, n), Array.isArray(i) ? r(i) : r(null)
                            }
                        }))
                    },
                    update: function(t) {
                        var e = p[t.type],
                            n = [];
                        n = Array.isArray(t.menuData.groups) ? v(t.menuData) : m("group-id", t.menuData, t.checkableBehavior ? t.checkableBehavior : "none");
                        var r = {
                            id: t.id,
                            title: t.title ? t.title : "",
                            isTokenizer: !!t.isTokenizer,
                            hasFiltering: !!t.hasFiltering && t.hasFiltering,
                            query: t.query,
                            queryPlaceholder: t.queryPlaceholder ? t.queryPlaceholder : "",
                            groups: n
                        };
                        if (Array.isArray(t.menuData.groups)) {
                            var i = [];
                            t.menuData.groups.forEach((function(e) {
                                Array.isArray(e[t.menuData.groupItemsKey]) && (i = i.concat(e[t.menuData.groupItemsKey]))
                            })), c[t.id] = i
                        } else c[t.id] = t.menuData.items;
                        t.isTokenizer || r.groups.forEach((function(e, n) {
                            var r = t.enableFiltering ? h(e.items, t.query) : e.items;
                            e.items = r
                        })), s.postMessage({
                            payload: r,
                            type: "up/menus/v1/".concat(e, "/UPDATE")
                        })
                    },
                    close: function(t) {
                        var e = p[t.type],
                            n = void 0 === t.isAnimated || !!t.isAnimated,
                            r = {
                                id: t.id,
                                isAnimated: n
                            };
                        s.postMessage({
                            payload: r,
                            type: "up/menus/v1/".concat(e, "/DISMISS")
                        })
                    }
                },
                b = 0,
                y = {};

            function w(t) {
                var e = t.id;
                y[e] && (y[e](t.actionId), delete y[e])
            }
            var _ = {
                open: function(t) {
                    var e = "dialog-id".concat(b += 1);
                    if (s.on("up/dialogs/v1/ALERT/EVENTS/ACTION_SELECTED", e, w), !t.message) throw new Error('required parameter "message" is missing');
                    return s.postMessage({
                        type: "up/dialogs/v1/ALERT",
                        payload: {
                            id: e,
                            title: t.title,
                            message: t.message,
                            isDismissible: !1,
                            actions: t.actions.map((function(t) {
                                return {
                                    id: t.id,
                                    label: t.label
                                }
                            })).reverse()
                        }
                    }), new Promise((function(n) {
                        y[e] = function(r) {
                            s.off("up/dialogs/v1/ALERT/EVENTS/ACTION_SELECTED", e);
                            var i = null;
                            r && (i = t.actions.find((function(t) {
                                return t.id === r
                            }))), n(i)
                        }
                    }))
                }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(18),
                i = n.n(r),
                o = n(19),
                s = n.n(o),
                a = n(655),
                u = n.n(a),
                c = n(57),
                l = n.n(c),
                d = n(48),
                f = n.n(d),
                h = n(691),
                p = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i()(this, t), n.type = n.type || "success", n.duration = n.duration || 5e3, this.message = e, this.data = Object.assign({}, n)
                    }
                    return s()(t, [{
                        key: "getData",
                        value: function() {
                            var t = this;
                            return Promise.resolve(this.message).then((function(e) {
                                return Object.assign({
                                    content: e
                                }, t.data)
                            }))
                        }
                    }]), t
                }();

            function m() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }
            var v = function(t) {
                f()(r, t);
                var e, n = (e = r, function() {
                    var t, n = l()(e);
                    if (m()) {
                        var r = l()(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return u()(this, t)
                });

                function r(t) {
                    var e;
                    return i()(this, r), (e = n.call(this, (function(e) {
                        setTimeout((function() {
                            e.getData().then((function(e) {
                                t.createToaster(e)
                            }))
                        }), 100)
                    }))).formId = t.id, e.commonData = {}, e
                }
                return s()(r, [{
                    key: "type",
                    value: function(t) {
                        this.commonData.type = t
                    }
                }, {
                    key: "duration",
                    value: function(t) {
                        this.commonData.duration = t
                    }
                }, {
                    key: "show",
                    value: function(t) {
                        return this.setLastObject(new p(t, this.commonData)), this
                    }
                }, {
                    key: "convertFormId",
                    value: function(t) {
                        return t || this.formId
                    }
                }]), r
            }(h.a);
            e.a = {
                created: function() {
                    this.eventsObject = new v(this), this.showToast && this.showToast(this.eventsObject)
                },
                destroyed: function() {
                    this.eventsObject.destroy()
                }
            }
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return R
            }));
            var r = n(18),
                i = n.n(r),
                o = n(19),
                s = n.n(o),
                a = n(4),
                u = n.n(a),
                c = n(8),
                l = n.n(c),
                d = n(660);

            function f(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            var h, p, m, v = function(t, e) {
                    return n = void 0, r = void 0, o = function() {
                        return f(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e.api.url(e.endpoint || "/upi/jslogger").formUrl(t).post()];
                                case 1:
                                    return [2, n.sent()]
                            }
                        }))
                    }, new((i = void 0) || (i = Promise))((function(t, e) {
                        function s(t) {
                            try {
                                u(o.next(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(o.throw(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function u(e) {
                            e.done ? t(e.value) : new i((function(t) {
                                t(e.value)
                            })).then(s, a)
                        }
                        u((o = o.apply(n, r || [])).next())
                    }));
                    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
                    var n, r, i, o
                },
                g = n(749),
                b = "https://bcdn-test.upwork.com/scripts/181e494/29ba9f4e.js",
                y = "https://bcdn.upwork.com/scripts/18ea09da/18ea09da.js",
                w = "max-age=".concat(3600),
                _ = null,
                k = function() {
                    var t = l()(u.a.mark((function t() {
                        var e, n, r = arguments;
                        return u.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = r.length > 0 && void 0 !== r[0] ? r[0] : "bc error", n = r.length > 1 && void 0 !== r[1] ? r[1] : null, t.next = 4, v({
                                        message: e,
                                        trace: n,
                                        visitorId: h.visitor_id,
                                        userNid: h["".concat(p, "recognized")],
                                        url: window.location.pathname
                                    }, {
                                        api: Object(d.a)()
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                S = function() {
                    h = Object.fromEntries(document.cookie.split("; ").map((function(t) {
                        return t.split("=")
                    }))), p = h.cookie_prefix || ""
                },
                E = function() {
                    return h["".concat(p, "oauth2_global_js_token")] || null
                },
                x = function() {
                    return h["".concat(p).concat("upwork_bc")]
                },
                C = function() {
                    switch (window.location.hostname.includes("staging.platform.usw2.upwork") ? "stage.upwork.com" : window.location.hostname) {
                        case "www.upwork.com":
                            return "prod";
                        case "beta.upwork.com":
                            return "prodOregon";
                        case "stage.upwork.com":
                            return "staging";
                        default:
                            return "dev"
                    }
                },
                O = function() {
                    S();
                    var t = x();
                    t && (document.cookie = "".concat(p).concat("upwork_bc", "=").concat(t, ";max-age=-1;path=/"), window.cdApi.setCustomerSessionId(""))
                },
                I = function() {
                    var t = +(x() || "").split("_")[0];
                    return t ? Math.max(36e5 - (new Date - new Date(t)), 5e3) : (k("Cookie does not contain timestamp"), O(), 5e3)
                },
                A = function() {
                    var t = x();
                    if (!t) {
                        var e = h.visitor_id || Math.floor(1e11 * Math.random());
                        t = "".concat((new Date).getTime(), "_").concat(e), document.cookie = "".concat(p).concat("upwork_bc", "=").concat(t, ";").concat(w, ";path=/")
                    }
                    window.cdApi.setCustomerSessionId(t), S()
                },
                T = function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "PERIODIC";
                    S(), clearTimeout(_);
                    var n = x();
                    if (n) {
                        if (window.cdApi.setCustomerSessionId(n), "LOGIN" !== e) return void(_ = setTimeout(t, I()))
                    } else A();
                    (n = x()) ? (_ = setTimeout(t, I()), E() && Object(d.a)().middlewares([Object(g.a)({
                        ccstCookieName: "".concat(p, "oauth2_global_js_token")
                    }), Object(g.b)({
                        env: C()
                    })]).post({
                        query: "\n        mutation (\n          $request: BCInitRequest!\n        ) {\n          initiateBCSession (\n            request: $request\n          )\n        }\n      ",
                        variables: {
                            request: {
                                sessionId: n,
                                activityName: e
                            }
                        }
                    }).json().then((function(t) {
                        if (t.errors || !t.data) return O(), void k("Session init request gql error", JSON.stringify(t.errors));
                        "SUCCESS" !== t.data.initiateBCSession && (O(), k("Session init request was not successful!"))
                    })).catch((function(t) {
                        "LOGIN" === e && ["Failed to fetch", "NetworkError when attempting to fetch resource."].includes(t.message) || k("Session init request network error", JSON.stringify(t, ["name", "message", "stack"]))
                    }))) : k("Cookie was not set")
                },
                P = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return new Promise((function(n, r) {
                        var i = {
                                initSession: T,
                                voidSession: O,
                                changeContext: function(t) {
                                    return window.cdApi.changeContext(t)
                                }
                            },
                            o = function() {
                                t && i.changeContext(t), e ? (S(), A()) : T(), window.bc_global = i, n(i)
                            },
                            s = function() {
                                var t = C().includes("prod"),
                                    e = document.createElement("script");
                                e.type = "text/javascript", e.src = t ? y : b, e.onload = o, e.onerror = r, document.body.appendChild(e)
                            };
                        "loading" !== document.readyState ? s() : document.addEventListener("DOMContentLoaded", s)
                    }))
                },
                R = function() {
                    function t() {
                        i()(this, t)
                    }
                    return s()(t, [{
                        key: "init",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return m || (m = new Promise((function(e) {
                                P(t, !0).then((function(t) {
                                    e(t)
                                })).
                                catch((function(t) {
                                    return console.log(t)
                                }))
                            }))), m
                        }
                    }, {
                        key: "initSession",
                        value: function(t) {
                            this.init(t).then((function(e) {
                                return e.initSession(t)
                            }))
                        }
                    }, {
                        key: "changeContext",
                        value: function(t) {
                            this.init().then((function(e) {
                                return e.changeContext(t)
                            }))
                        }
                    }]), t
                }()
        },
        function(t, e, n) {
            "use strict";
            var r = n(58),
                i = n.n(r),
                o = n(660),
                s = n(833),
                a = n(727),
                u = n(18),
                c = n.n(u),
                l = n(19),
                d = n.n(l),
                f = function() {
                    function t() {
                        c()(this, t), this.locks = {}, this.retryCounter = {}
                    }
                    return d()(t, [{
                        key: "lock",
                        value: function(t) {
                            this.locks[t] = !0
                        }
                    }, {
                        key: "release",
                        value: function(t) {
                            delete this.locks[t]
                        }
                    }, {
                        key: "isLocked",
                        value: function() {
                            return 0 !== Object.keys(this.locks).length
                        }
                    }, {
                        key: "retryAllowed",
                        value: function(t) {
                            var e = this.retryCounter[t] || 3;
                            return e--, this.retryCounter[t] = e, e >= 0 ? Promise.resolve() : Promise.reject()
                        }
                    }]), t
                }(),
                h = n(750);
            e.a = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return Object(o.a)(t).options({
                    context: n
                }).headers(h.a.getHeaders()).middlewares([].concat(i()(h.a.getMiddlewares()), [Object(s.a)(), Object(a.a)([].concat(i()(h.a.getInterceptors()), i()(e)))])).options({
                    credentials: "same-origin",
                    requestInfo: new f
                })
            }
        },
        function(t, e, n) {
            var r = n(1001),
                i = n(1003);
            t.exports = function(t) {
                return r(i(t))
            }
        },
        function(t, e, n) {
            var r = n(659),
                i = n(771);
            t.exports = function(t, e) {
                try {
                    i(r, t, e)
                } catch (n) {
                    r[t] = e
                }
                return e
            }
        },
        function(t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == n.call(t)
            }
        },
        function(t, e) {
            e.L = {
                bit: 1
            }, e.M = {
                bit: 0
            }, e.Q = {
                bit: 3
            }, e.H = {
                bit: 2
            }, e.isValid = function(t) {
                return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw new Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "l":
                            case "low":
                                return e.L;
                            case "m":
                            case "medium":
                                return e.M;
                            case "q":
                            case "quartile":
                                return e.Q;
                            case "h":
                            case "high":
                                return e.H;
                            default:
                                throw new Error("Unknown EC Level: " + t)
                        }
                    }(t)
                } catch (t) {
                    return n
                }
            }
        }, , , , , , , ,
        function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return r
            })), n.d(e, "a", (function() {
                return i
            }));
            var r = function(t) {
                    return /(iPad|iPhone|iPod)/gi.test(t)
                },
                i = function(t) {
                    return /(Android)/gi.test(t)
                }
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/push-notification/delete"
        },
        function(t, e, n) {
            var r, i, o;
            i = [], void 0 === (o = "function" == typeof(r = function() {
                var t, e, n = 6e4,
                    r = b(n),
                    i = "",
                    o = !1;

                function s() {
                    var e = "__lscachetest__";
                    if (void 0 !== t) return t;
                    try {
                        if (!localStorage) return !1
                    } catch (t) {
                        return !1
                    }
                    try {
                        f(e, "__lscachetest__"), h(e), t = !0
                    } catch (e) {
                        t = !(!a(e) || !localStorage.length)
                    }
                    return t
                }

                function a(t) {
                    return t && ("QUOTA_EXCEEDED_ERR" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name || "QuotaExceededError" === t.name)
                }

                function u() {
                    return void 0 === e && (e = null != window.JSON), e
                }

                function c(t) {
                    return t + "-cacheexpiration"
                }

                function l() {
                    return Math.floor((new Date).getTime() / n)
                }

                function d(t) {
                    return localStorage.getItem("lscache-" + i + t)
                }

                function f(t, e) {
                    localStorage.removeItem("lscache-" + i + t), localStorage.setItem("lscache-" + i + t, e)
                }

                function h(t) {
                    localStorage.removeItem("lscache-" + i + t)
                }

                function p(t) {
                    for (var e = new RegExp("^lscache-" + i.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&") + "(.*)"), n = localStorage.length - 1; n >= 0; --n) {
                        var r = localStorage.key(n);
                        (r = (r = r && r.match(e)) && r[1]) && r.indexOf("-cacheexpiration") < 0 && t(r, c(r))
                    }
                }

                function m(t) {
                    var e = c(t);
                    h(t), h(e)
                }

                function v(t) {
                    var e = c(t),
                        n = d(e);
                    if (n) {
                        var r = parseInt(n, 10);
                        if (l() >= r) return h(t), h(e), !0
                    }
                }

                function g(t, e) {
                    o && "console" in window && "function" == typeof window.console.warn && (window.console.warn("lscache - " + t), e && window.console.warn("lscache - The error was: " + e.message))
                }

                function b(t) {
                    return Math.floor(864e13 / t)
                }
                return {
                    set: function(t, e, n) {
                        if (!s()) return !1;
                        if (!u()) return !1;
                        try {
                            e = JSON.stringify(e)
                        } catch (t) {
                            return !1
                        }
                        try {
                            f(t, e)
                        } catch (n) {
                            if (!a(n)) return g("Could not add item with key '" + t + "'", n), !1;
                            var i, o = [];
                            p((function(t, e) {
                                var n = d(e);
                                n = n ? parseInt(n, 10) : r, o.push({
                                    key: t,
                                    size: (d(t) || "").length,
                                    expiration: n
                                })
                            })), o.sort((function(t, e) {
                                return e.expiration - t.expiration
                            }));
                            for (var v = (e || "").length; o.length && v > 0;) i = o.pop(), g("Cache is full, removing item with key '" + t + "'"), m(i.key), v -= i.size;
                            try {
                                f(t, e)
                            } catch (e) {
                                return g("Could not add item with key '" + t + "', perhaps it's too big?", e), !1
                            }
                        }
                        return n ? f(c(t), (l() + n).toString(10)) : h(c(t)), !0
                    },
                    get: function(t) {
                        if (!s()) return null;
                        if (v(t)) return null;
                        var e = d(t);
                        if (!e || !u()) return e;
                        try {
                            return JSON.parse(e)
                        } catch (t) {
                            return e
                        }
                    },
                    remove: function(t) {
                        s() && m(t)
                    },
                    supported: function() {
                        return s()
                    },
                    flush: function() {
                        s() && p((function(t) {
                            m(t)
                        }))
                    },
                    flushExpired: function() {
                        s() && p((function(t) {
                            v(t)
                        }))
                    },
                    setBucket: function(t) {
                        i = t
                    },
                    resetBucket: function() {
                        i = ""
                    },
                    getExpiryMilliseconds: function() {
                        return n
                    },
                    setExpiryMilliseconds: function(t) {
                        r = b(n = t)
                    },
                    enableWarnings: function(t) {
                        o = t
                    }
                }
            }) ? r.apply(e, i) : r) || (t.exports = o)
        },
        function(t, e, n) {
            "use strict";
            var r;

            function i(t) {
                return r || (r = "undefined" != typeof navigator ? navigator.userAgent : ""), /Upwork (Android|iOS)/.test(t || r)
            }
            n.d(e, "a", (function() {
                return i
            }))
        },
        function(t, e, n) {},
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement;
                return (this._self._c || t)("up-transition", this._g(this._b({
                    attrs: {
                        name: "intro"
                    }
                }, "up-transition", this.$attrs, !1), this.$listeners), [this._t("default")], 2)
            };
            r._withStripped = !0;
            var i = function() {
                var t = this.$createElement;
                return (this._self._c || t)("transition", this._g(this._b({
                    attrs: {
                        name: this.transitionName
                    }
                }, "transition", this.$attrs, !1), this.$listeners), [this._t("default")], 2)
            };
            i._withStripped = !0;
            var o = n(925),
                s = {
                    injectStyles: [n.n(o).a],
                    name: "UpTransition",
                    props: {
                        name: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        transitionName: function() {
                            return "up-transition-".concat(this.name)
                        }
                    }
                },
                a = n(0),
                u = Object(a.a)(s, i, [], !1, null, null, null);
            u.options.__file = "node_modules/@upwork/vue-components-core/src/transition/transition.vue";
            var c = u.exports,
                l = n(926),
                d = {
                    name: "UpTransitionIntro",
                    injectStyles: [n.n(l).a],
                    components: {
                        UpTransition: c
                    }
                },
                f = Object(a.a)(d, r, [], !1, null, null, null);
            f.options.__file = "node_modules/@upwork/vue-components-core/src/transition/intro.vue";
            e.a = f.exports
        },
        function(t, e, n) {
            var r = n(894);
            t.exports = function(t, e) {
                if (t) {
                    if ("string" == typeof t) return r(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
                }
            }
        },
        function(t, e) {
            t.exports = function(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
        },
        function(t, e, n) {
            var r = n(770),
                i = n(1e3),
                o = n(896),
                s = n(876),
                a = n(897),
                u = n(722),
                c = n(898),
                l = Object.getOwnPropertyDescriptor;
            e.f = r ? l : function(t, e) {
                if (t = s(t), e = a(e, !0), c) try {
                    return l(t, e)
                } catch (t) {}
                if (u(t, e)) return o(!i.f.call(t, e), t[e])
            }
        },
        function(t, e) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        },
        function(t, e, n) {
            var r = n(751);
            t.exports = function(t, e) {
                if (!r(t)) return t;
                var n, i;
                if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
                if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        function(t, e, n) {
            var r = n(770),
                i = n(721),
                o = n(1004);
            t.exports = !r && !i((function() {
                return 7 != Object.defineProperty(o("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        function(t, e, n) {
            var r = n(770),
                i = n(898),
                o = n(772),
                s = n(897),
                a = Object.defineProperty;
            e.f = r ? a : function(t, e, n) {
                if (o(t), e = s(e, !0), o(n), i) try {
                    return a(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        },
        function(t, e, n) {
            var r = n(659),
                i = n(771),
                o = n(722),
                s = n(877),
                a = n(901),
                u = n(1005),
                c = u.get,
                l = u.enforce,
                d = String(String).split("String");
            (t.exports = function(t, e, n, a) {
                var u = !!a && !!a.unsafe,
                    c = !!a && !!a.enumerable,
                    f = !!a && !!a.noTargetGet;
                "function" == typeof n && ("string" != typeof e || o(n, "name") || i(n, "name", e), l(n).source = d.join("string" == typeof e ? e : "")), t !== r ? (u ? !f && t[e] && (c = !0) : delete t[e], c ? t[e] = n : i(t, e, n)) : c ? t[e] = n : s(e, n)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && c(this).source || a(this)
            }))
        },
        function(t, e, n) {
            var r = n(902),
                i = Function.toString;
            "function" != typeof r.inspectSource && (r.inspectSource = function(t) {
                return i.call(t)
            }), t.exports = r.inspectSource
        },
        function(t, e, n) {
            var r = n(659),
                i = n(877),
                o = r["__core-js_shared__"] || i("__core-js_shared__", {});
            t.exports = o
        },
        function(t, e, n) {
            var r = n(904),
                i = n(902);
            (t.exports = function(t, e) {
                return i[t] || (i[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.6.4",
                mode: r ? "pure" : "global",
                copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)"
            })
        },
        function(t, e) {
            t.exports = !1
        },
        function(t, e) {
            var n = 0,
                r = Math.random();
            t.exports = function(t) {
                return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
            }
        },
        function(t, e) {
            t.exports = {}
        },
        function(t, e, n) {
            var r = n(1010),
                i = n(659),
                o = function(t) {
                    return "function" == typeof t ? t : void 0
                };
            t.exports = function(t, e) {
                return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e]
            }
        },
        function(t, e) {
            var n = Math.ceil,
                r = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
            }
        },
        function(t, e) {
            t.exports = function(t) {
                if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
                return t
            }
        },
        function(t, e, n) {
            var r = n(721);
            t.exports = !!Object.getOwnPropertySymbols && !r((function() {
                return !String(Symbol())
            }))
        },
        function(t, e, n) {
            var r = n(879),
                i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return i[4 * (t - 1) + 0];
                    case r.M:
                        return i[4 * (t - 1) + 1];
                    case r.Q:
                        return i[4 * (t - 1) + 2];
                    case r.H:
                        return i[4 * (t - 1) + 3];
                    default:
                        return
                }
            }, e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return o[4 * (t - 1) + 0];
                    case r.M:
                        return o[4 * (t - 1) + 1];
                    case r.Q:
                        return o[4 * (t - 1) + 2];
                    case r.H:
                        return o[4 * (t - 1) + 3];
                    default:
                        return
                }
            }
        },
        function(t, e) {
            e.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        function(t, e) {
            var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
            e.KANJI = new RegExp(n, "g"), e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(r, "g"), e.NUMERIC = new RegExp("[0-9]+", "g"), e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
            var i = new RegExp("^" + n + "$"),
                o = new RegExp("^[0-9]+$"),
                s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(t) {
                return i.test(t)
            }, e.testNumeric = function(t) {
                return o.test(t)
            }, e.testAlphanumeric = function(t) {
                return s.test(t)
            }
        },
        function(t, e) {
            function n(t) {
                if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw new Error("Color should be defined as hex string");
                var e = t.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + t);
                3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(t) {
                    return [t, t]
                })))), 6 === e.length && e.push("F", "F");
                var n = parseInt(e.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(t) {
                t || (t = {}), t.color || (t.color = {});
                var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                    r = t.width && t.width >= 21 ? t.width : void 0,
                    i = t.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : i,
                    margin: e,
                    color: {
                        dark: n(t.color.dark || "#000000ff"),
                        light: n(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }, e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }, e.getImageWidth = function(t, n) {
                var r = e.getScale(t, n);
                return Math.floor((t + 2 * n.margin) * r)
            }, e.qrToImageData = function(t, n, r) {
                for (var i = n.modules.size, o = n.modules.data, s = e.getScale(i, r), a = Math.floor((i + 2 * r.margin) * s), u = r.margin * s, c = [r.color.light, r.color.dark], l = 0; l < a; l++)
                    for (var d = 0; d < a; d++) {
                        var f = 4 * (l * a + d),
                            h = r.color.light;
                        if (l >= u && d >= u && l < a - u && d < a - u) h = c[o[Math.floor((l - u) / s) * i + Math.floor((d - u) / s)] ? 1 : 0];
                        t[f++] = h.r, t[f++] = h.g, t[f++] = h.b, t[f] = h.a
                    }
            }
        },
        function(t, e, n) {}, , ,
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "up-alert",
                    class: [t.alertClass],
                    attrs: {
                        role: "alert"
                    }
                }, ["notification" !== t.type ? n("div", {
                    staticClass: "up-alert-icon"
                }, [n("up-c-icon-v2", {
                    attrs: {
                        icon: t.icon,
                        size: ["success", "info"].indexOf(t.type) > -1 ? "sm" : "md"
                    }
                })], 1) : t._e(), t._v(" "), n("div", {
                    staticClass: "up-alert-content break"
                }, [t.lineClampLines > 0 ? n("div", {
                    staticClass: "d-md-none"
                }, [n("up-c-line-clamp", {
                    attrs: {
                        lines: t.lineClampLines
                    }
                }, [n("span", [t._t("default")], 2)])], 1) : t._e(), t._v(" "), n("div", {
                    class: [t.lineClampLines > 0 ? "d-none d-md-block" : ""]
                }, [t._t("default")], 2)]), t._v(" "), t.close ? n("button", {
                    staticClass: "up-btn-reset up-alert-close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return t.closeAlert()
                        }
                    }
                }, [n("span", {
                    staticClass: "sr-only"
                }, [t._v("Close the alert")]), t._v(" "), n("up-c-icon-v2", {
                    attrs: {
                        icon: t.closeIcon,
                        size: "sm"
                    }
                })], 1) : t._e()])
            };
            r._withStripped = !0;
            var i = n(919),
                o = n.n(i),
                s = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        ref: "wrapper",
                        staticClass: "up-line-clamp-wrapper"
                    }, [n("resize-observer", {
                        on: {
                            notify: t.handleResize
                        }
                    }), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.expanded,
                            expression: "!expanded"
                        }],
                        ref: "lineClampContainer",
                        staticClass: "up-line-clamp"
                    }, [n("span", {
                        ref: "lineClamp"
                    })]), t._v(" "), n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.truncated,
                            expression: "truncated"
                        }],
                        ref: "moreButton"
                    }, [t._v(t._s(t.ellipsis) + "\n    "), t.expandable ? n("button", {
                        ref: "lineClamp-more-btn",
                        staticClass: "up-btn-link",
                        attrs: {
                            "aria-expanded": t.expanded ? "true" : "false",
                            "aria-controls": "up-lineclamp-" + t.id,
                            type: "button"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.toggle()
                            }
                        }
                    }, [n("span", {
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [t._v(t._s(t.labelMore))]), t._v(" "), n("span", {
                        staticClass: "sr-only"
                    }, [t._v("Show more text")])]) : t._e()]), t._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.expanded,
                            expression: "expanded"
                        }],
                        staticClass: "up-line-clamp-expanded",
                        attrs: {
                            id: "up-lineclamp-" + t.id
                        }
                    }, [n("span", {
                        ref: "slot-container"
                    }, [t._t("default")], 2), t._v("\n    Â "), n("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.truncated,
                            expression: "truncated"
                        }],
                        ref: "lineClamp-less-btn",
                        staticClass: "up-btn-link",
                        attrs: {
                            "aria-expanded": t.expanded ? "true" : "false",
                            "aria-controls": "up-lineclamp-" + t.id,
                            type: "button"
                        },
                        on: {
                            click: function(e) {
                                return t.toggle()
                            }
                        }
                    }, [n("span", {
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [t._v(t._s(t.labelLess))]), t._v(" "), n("span", {
                        staticClass: "sr-only"
                    }, [t._v("Show less text")])])]), t._v(" "), n("div", {
                        ref: "origin",
                        staticClass: "up-line-clamp-origin"
                    }, [t._t("default")], 2)], 1)
                };
            s._withStripped = !0;
            var a = n(922),
                u = (n(972), n(920)),
                c = n(921),
                l = n.n(c),
                d = n(31),
                f = n.n(d),
                h = n(35),
                p = n.n(h),
                m = /[ .,;!?'â€˜â€™â€œâ€\-â€“â€”]+$/;

            function v(t, e, n) {
                var r, i = t.textContent;
                if (t.textContent = "", !(e.scrollHeight <= n)) return !1;
                for (t.textContent = i; i.length > 1 && -1 !== (r = i.lastIndexOf(" "));) {
                    if (t.textContent = i.substring(0, r), e.scrollHeight <= n) {
                        t.textContent = i;
                        break
                    }
                    i = t.textContent
                }
                return function(t, e, n) {
                    for (var r = t.textContent, i = r.length; i > 1;) {
                        if (i = (r = r.substring(0, i - 1).replace(m, "")).length, t.textContent = r, e.scrollHeight <= n) return !0
                    }
                    return !1
                }(t, e, n)
            }

            function g(t, e, n, r, i, o) {
                var s, a = t.childNodes,
                    u = a.length - 1;
                0 === o && (s = function(t, e) {
                    var n, r = document.createElement("span");
                    return r.innerText = t, "string" == typeof e ? (n = document.createElement("a")).text = e : "object" === p()(e) && (n = e), n && r.appendChild(n), r
                }(r, i), e.append(s));
                for (var c = o; u > -1;) {
                    c += 1;
                    var l = a[u];
                    u -= 1;
                    var d = l.nodeType;
                    if (d === Node.ELEMENT_NODE && g(l, e, n, r, i, c) || d === Node.TEXT_NODE && v(l, e, n)) return s && s.remove(), !0;
                    if (l.remove(), e.scrollHeight <= n) return !0
                }
                return !1
            }
            var b = n(769),
                y = {
                    injectStyles: [l.a, f.a],
                    name: "UpCLineClamp",
                    components: {
                        ResizeObserver: u.a
                    },
                    props: {
                        lines: {
                            type: Number,
                            default: 3,
                            required: !0
                        },
                        labelLess: {
                            type: String,
                            default: "less"
                        },
                        labelMore: {
                            type: String,
                            default: "more"
                        },
                        expandable: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            truncated: !1,
                            expanded: !1,
                            ellipsis: "â€¦",
                            animationFrameRequestId: null,
                            observer: null,
                            id: null
                        }
                    },
                    watch: {
                        lines: function() {
                            this.updateLineClamp()
                        }
                    },
                    beforeMount: function() {
                        this.updateLineClamp = Object(a.throttle)(50, this.updateLineClamp)
                    },
                    mounted: function() {
                        var t = this;
                        this.id = Object(b.a)().toString(), this.updateLineClamp(), this.observer = new MutationObserver(this.onSlotChange);
                        var e = this.$refs["slot-container"];
                        document.fonts && document.fonts.ready && (document.fonts.ready.then((function() {
                            t.updateLineClamp()
                        })), this.observer.observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))
                    },
                    beforeDestroy: function() {
                        cancelAnimationFrame(this.animationFrameRequestId), this.observer.disconnect()
                    },
                    methods: {
                        onSlotChange: function() {
                            this.updateLineClamp()
                        },
                        scrollBack: function(t, e) {
                            window.scrollTo(t, e)
                        },
                        toggle: function() {
                            var t = this;
                            this.expanded = !this.expanded, this.$emit("toggle", {
                                expanded: this.expanded
                            }), setTimeout((function() {
                                var e = window.scrollX,
                                    n = window.scrollY;
                                t.expanded ? t.$refs["lineClamp-less-btn"].focus() : t.$refs["lineClamp-more-btn"].focus(), t.scrollBack(e, n)
                            }), 100)
                        },
                        updateLineClamp: function(t) {
                            if (this.$refs.origin) {
                                var e = this.$refs.origin.cloneNode(!0);
                                if (e) {
                                    var n = this.$refs,
                                        r = n.lineClamp,
                                        i = n.lineClampContainer,
                                        o = n.moreButton;
                                    e.removeAttribute("class"), e.style.width = null, r.children.length && r.removeChild(this.$refs.lineClamp.firstChild), r.appendChild(e), this.expanded && i.classList.add("recalculation");
                                    var s = this.expandable ? this.labelMore : "",
                                        a = function(t, e, n, r) {
                                            t.style.cssText += "overflow:hidden;overflow-wrap:break-word;word-wrap:break-word";
                                            var i = Math.round((e || 1) * parseFloat(window.getComputedStyle(t).lineHeight));
                                            return !(t.scrollHeight <= i) && g(t, t, i, r, n, 0)
                                        }(e, this.lines, s, "".concat(this.ellipsis, " "));
                                    this.truncated = a, a && (o.parentElement.removeChild(o), r.firstChild.appendChild(o)), this.expanded && i.classList.remove("recalculation"), "function" == typeof t && t()
                                }
                            }
                        },
                        handleResize: function() {
                            this.updateLineClamp()
                        }
                    }
                },
                w = n(0),
                _ = Object(w.a)(y, s, [], !1, null, null, null);
            _.options.__file = "node_modules/@upwork/vue-components-core/src/line-clamp/line-clamp.vue";
            var k = _.exports,
                S = n(59),
                E = n(63),
                x = n.n(E),
                C = {
                    info: function() {
                        return n.e(29).then(n.bind(null, 75))
                    },
                    success: function() {
                        return n.e(24).then(n.bind(null, 76))
                    },
                    warning: function() {
                        return n.e(8).then(n.bind(null, 77))
                    },
                    danger: function() {
                        return n.e(8).then(n.bind(null, 77))
                    },
                    notification: function() {
                        return null
                    }
                },
                O = {
                    injectStyles: [o.a, x.a],
                    name: "UpCAlert",
                    components: {
                        upCLineClamp: k,
                        UpCIconV2: S.
                        default
                    },
                    props: {
                        type: {
                            type: String,
                            default: "warning"
                        },
                        close: {
                            type: Boolean,
                            default: !1
                        },
                        lineClampLines: {
                            type: Number,
                            default: 3
                        }
                    },
                    data: function() {
                        return {
                            closeIcon: function() {
                                return n.e(1).then(n.bind(null, 71))
                            }
                        }
                    },
                    computed: {
                        alertType: function(t) {
                            return -1 === Object.keys(C).indexOf(t.type) ? "warning" : t.type
                        },
                        alertClass: function(t) {
                            return "up-alert-".concat(t.alertType)
                        },
                        icon: function(t) {
                            return C[t.alertType]
                        }
                    },
                    methods: {
                        closeAlert: function() {
                            var t = this;
                            this.$emit("alert-close"), setTimeout((function() {
                                t.$destroy(), t.$el.remove()
                            }))
                        }
                    }
                },
                I = Object(w.a)(O, r, [], !1, null, null, null);
            I.options.__file = "node_modules/@upwork/vue-components-core/src/alert/alert.vue";
            e.a = I.exports
        },
        function(t, e, n) {},
        function(t, e, n) {
            "use strict";
            (function(t) {
                var r;

                function i() {
                    i.init || (i.init = !0, r = -1 !== function() {
                        var t = window.navigator.userAgent,
                            e = t.indexOf("MSIE ");
                        if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                        if (t.indexOf("Trident/") > 0) {
                            var n = t.indexOf("rv:");
                            return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10)
                        }
                        var r = t.indexOf("Edge/");
                        return r > 0 ? parseInt(t.substring(r + 5, t.indexOf(".", r)), 10) : -1
                    }())
                }
                n.d(e, "a", (function() {
                    return a
                }));
                var o = {
                        name: "ResizeObserver",
                        mounted: function() {
                            var t = this;
                            i(), this.$nextTick((function() {
                                t._w = t.$el.offsetWidth, t._h = t.$el.offsetHeight
                            }));
                            var e = document.createElement("object");
                            this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", r && this.$el.appendChild(e), e.data = "about:blank", r || this.$el.appendChild(e)
                        },
                        beforeDestroy: function() {
                            this.removeResizeHandlers()
                        },
                        methods: {
                            compareAndNotify: function() {
                                this._w === this.$el.offsetWidth && this._h === this.$el.offsetHeight || (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.$emit("notify", {
                                    width: this._w,
                                    height: this._h
                                }))
                            },
                            addResizeHandlers: function() {
                                this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify()
                            },
                            removeResizeHandlers: function() {
                                this._resizeObject && this._resizeObject.onload && (!r && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null)
                            }
                        }
                    },
                    s = function() {
                        var t = this.$createElement;
                        return (this._self._c || t)("div", {
                            staticClass: "resize-observer",
                            attrs: {
                                tabindex: "-1"
                            }
                        })
                    };
                s._withStripped = !0;
                var a = function(t, e, n, r, i, o, s, a, u, c) {
                    "boolean" != typeof s && (u = a, a = s, s = !1);
                    var l, d = "function" == typeof n ? n.options : n;
                    if (t && t.render && (d.render = t.render, d.staticRenderFns = t.staticRenderFns, d._compiled = !0, i && (d.functional = !0)), r && (d._scopeId = r), o ? (l = function(t) {
                            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), e && e.call(this, u(t)), t && t._registeredComponents && t._registeredComponents.add(o)
                        }, d._ssrRegister = l) : e && (l = s ? function(t) {
                            e.call(this, c(t, this.$root.$options.shadowRoot))
                        } : function(t) {
                            e.call(this, a(t))
                        }), l)
                        if (d.functional) {
                            var f = d.render;
                            d.render = function(t, e) {
                                return l.call(e), f(t, e)
                            }
                        } else {
                            var h = d.beforeCreate;
                            d.beforeCreate = h ? [].concat(h, l) : [l]
                        }
                    return n
                }({
                    render: s,
                    staticRenderFns: []
                }, void 0, o, "data-v-2b830392", !1, void 0, !1, void 0, void 0, void 0);
                var u = {
                        version: "0.5.0",
                        install: function(t) {
                            t.component("resize-observer", a), t.component("ResizeObserver", a)
                        }
                    },
                    c = null;
                "undefined" != typeof window ? c = window.Vue : void 0 !== t && (c = t.Vue), c && c.use(u)
            }).call(this, n(768))
        },
        function(t, e, n) {},
        function(t, e, n) {
            var r, i, o, s, a = n(35);
            s = function(t) {
                "use strict";

                function e(t, e, n, r) {
                    var i, o = !1,
                        s = 0;

                    function a() {
                        i && clearTimeout(i)
                    }

                    function u() {
                        for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
                        var d = this,
                            f = Date.now() - s;

                        function h() {
                            s = Date.now(), n.apply(d, c)
                        }

                        function p() {
                            i = void 0
                        }
                        o || (r && !i && h(), a(), void 0 === r && f > t ? h() : !0 !== e && (i = setTimeout(r ? p : h, void 0 === r ? t - f : t)))
                    }
                    return "boolean" != typeof e && (r = n, n = e, e = void 0), u.cancel = function() {
                        a(), o = !0
                    }, u
                }
                t.debounce = function(t, n, r) {
                    return void 0 === r ? e(t, n, !1) : e(t, r, !1 !== n)
                }, t.throttle = e, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, "object" === a(e) && void 0 !== t ? s(e) : (i = [e], void 0 === (o = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = o))
        },
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {},
        function(t) {
            t.exports = JSON.parse('["Your mother\'s maiden name","Your first pet\'s name","The name of your elementary school","Your elementary school mascot","Your best friend\'s nickname","Your favorite sports team","Your favorite writer","Your favorite actor","Your favorite singer","Your favorite song","The name of the street you grew up on","Make and model of your first car","The city where you first met your spouse"]')
        },
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/clear-cookies"
        },
        function(t, e, n) {
            "use strict";
            var r = document.querySelectorAll("[data-prerender] input");
            e.a = {
                mounted: function() {
                    var t = this,
                        e = [];
                    r.forEach((function(n) {
                        var r = t.$el.querySelector("input#" + n.getAttribute("id"));
                        r && n.value ? (r.value = n.value, r.dispatchEvent(new Event("input")), r.selectionStart = n.selectionStart, r.selectionEnd = n.selectionEnd) : e.push(n)
                    })), r = e
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = function(t, e) {
                window.io_global_object_name = "IGLOO";
                var n = new Promise((function(t) {
                        window.IGLOO = window.IGLOO || {
                            enable_flash: !1,
                            bb_callback: function(e, n) {
                                n && t(e)
                            },
                            loader: {
                                uri_hook: "/iojs",
                                version: "general5"
                            }
                        }
                    })),
                    r = function() {
                        var t = document.createElement("script");
                        t.type = "text/javascript", t.src = "https://assets.static-upwork.com/iovation/5.2.2/loader_only.js", document.body.appendChild(t)
                    };
                "loading" !== document.readyState ? r() : document.addEventListener("DOMContentLoaded", r);
                var i = {
                    bbPromise: n,
                    getBlackbox: function() {
                        return window.IGLOO.getBlackbox()
                    }
                };
                return t ? e("iovation", i) : i
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/password-and-security"
        },
        function(t, e, n) {
            "use strict";
            e.a = "https://support.upwork.com/hc/en-us/requests/new?ticket_form_id=360000464433&self_help=account_login"
        },
        function(t, e, n) {
            "use strict";
            e.a = "https://support.upwork.com/hc/en-us/requests/new?ticket_form_id=360000464433&self_help=security_question_reset"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/oauth2/authorize"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/push-notification/confirm"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/report/confirm"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-password/update"
        },
        function(t, e, n) {
            "use strict";
            var r = n(14),
                i = n(1);
            e.a = function() {
                return function(t) {
                    var e = t.data;
                    if (!e) return t;
                    var n = e.challenges;
                    n && Object.values(r.c).forEach((function(t) {
                        var e = n[t];
                        e && (i.a.dispatch("auth/challenge/".concat(t, "/setUid"), e.uid), e.default && i.a.dispatch("auth/challenge/setDefault", t))
                    })), n.securityQuestion && i.a.dispatch("auth/securityQuestion/sync", n.securityQuestion);
                    var o = n[r.c.PHONE];
                    return o && o.number && i.a.dispatch("auth/challenge/phone/setId", o.number), t
                }
            }
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-password/exchange"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/reset-password/challenge"
        },
        function(t, e, n) {
            "use strict";
            e.a = "https://support.upwork.com/hc/en-us/requests/new?ticket_form_id=360000464433&self_help=update_password"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/saml2"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/totp/delete"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/phone/delete"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/verification-settings/update"
        },
        function(t, e, n) {
            "use strict";
            e.a = "/ab/account-security/verification-settings/info"
        },
        function(t, e, n) {}, ,
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this.$createElement;
                return (this._self._c || t)("div", [this._t("default")], 2)
            };
            r._withStripped = !0;
            var i = {
                    mixins: [n(663).a],
                    props: {
                        id: {
                            type: String,
                            required: !0
                        }
                    }
                },
                o = n(0),
                s = Object(o.a)(i, r, [], !1, null, null, null);
            s.options.__file = "node_modules/@upwork/auth-common/components/inputs/name-scope.vue";
            e.a = s.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        "aria-live": "polite"
                    }
                }, [n("div", {
                    staticClass: "up-loader-overlay",
                    class: {
                        "is-open": t.loading,
                            "up-loader-fullpage": t.fullPage
                    },
                    attrs: {
                        "data-cy": "loader-overlay"
                    }
                }, [n("up-c-icon-v2", {
                    attrs: {
                        slot: "spinner-icon",
                        icon: t.spinnerIcon,
                        size: t.iconSize,
                        "data-cy": "loader-icon"
                    },
                    slot: "spinner-icon"
                })], 1), t._v(" "), t.loading ? n("div", {
                    staticClass: "sr-only",
                    attrs: {
                        "data-cy": "loader-live-region"
                    }
                }, [t._v("\n    " + t._s(t.statusMessage) + "\n  ")]) : t._e()])
            };
            r._withStripped = !0;
            var i = n(687),
                o = n.n(i),
                s = n(59),
                a = {
                    injectStyles: [o.a],
                    name: "UpCLoader",
                    components: {
                        UpCIconV2: s.
                        default
                    },
                    props: {
                        loading: {
                            type: Boolean,
                            default: !1
                        },
                        statusMessage: {
                            type: String,
                            default: "Loading"
                        },
                        fullPage: {
                            type: Boolean,
                            default: null
                        },
                        iconSize: {
                            type: String,
                            default: "lg"
                        }
                    },
                    data: function() {
                        return {
                            spinnerIcon: function() {
                                return n.e(4).then(n.bind(null, 337))
                            }
                        }
                    }
                },
                u = n(0),
                c = Object(u.a)(a, r, [], !1, null, null, null);
            c.options.__file = "node_modules/@upwork/vue-components-core/src/loader/loader.vue";
            e.a = c.exports
        },
        function(t, e, n) {
            "use strict";
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("button", {
                    staticClass: "up-switch",
                    class: t.classNames,
                    attrs: {
                        "aria-pressed": t.checked ? "true" : "false",
                        type: "button"
                    },
                    on: {
                        click: t.onChange
                    }
                }, [n("div", {
                    staticClass: "up-toggler-bar"
                }, [t.isSizeSm ? t._e() : n("span", {
                    staticClass: "up-toggler-text"
                }, [t._v(" ON ")]), t._v(" "), n("span", {
                    staticClass: "up-toggler-icon"
                }), t._v(" "), t.isSizeSm ? t._e() : n("span", {
                    staticClass: "up-toggler-text"
                }, [t._v(" OFF ")])])])
            };
            r._withStripped = !0;
            var i = n(950),
                o = {
                    injectStyles: [n.n(i).a],
                    name: "UpCSwitch",
                    model: {
                        prop: "checked",
                        event: "change"
                    },
                    props: {
                        size: {
                            validator: function(t) {
                                return ["sm", ""].includes(t)
                            },
                            default: "",
                            type: String
                        },
                        checked: {
                            default: !1,
                            type: Boolean
                        }
                    },
                    computed: {
                        classNames: function() {
                            return {
                                "up-switch-on": this.checked,
                                "up-switch-off": !this.checked,
                                "up-switch-sm": this.isSizeSm
                            }
                        },
                        isSizeSm: function() {
                            return "sm" === this.size
                        }
                    },
                    methods: {
                        onChange: function() {
                            this.$emit("change", !this.checked)
                        }
                    }
                },
                s = n(0),
                a = Object(s.a)(o, r, [], !1, null, null, null);
            a.options.__file = "node_modules/@upwork/vue-components-core/src/switch/switch.vue";
            e.a = a.exports
        },
        function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "biometric-illustration"
                }, [e("biometric-icon", {
                    staticClass: "biometric-icon"
                })], 1)
            };
            r._withStripped = !0;
            var i = {
                    components: {
                        BiometricIcon: n(869).a
                    }
                },
                o = (n(998), n(0)),
                s = Object(o.a)(i, r, [], !1, null, null, null);
            s.options.__file = "node_modules/@upwork/sensitive-zone/components/set-fido2-app/illustration.vue";
            e.
            default = s.exports
        },
        function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return w
            }));
            var r = n(2),
                i = n.n(r),
                o = n(4),
                s = n.n(o),
                a = n(8),
                u = n.n(a),
                c = n(718);

            function l(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var d = {
                    storage: null
                },
                f = {
                    state: function() {
                        return d
                    },
                    actions: {
                        load: function(t) {
                            var e = t.commit;
                            try {
                                e("setStorage", JSON.parse(localStorage.getItem("rmt-user-storage")))
                            } catch (t) {}
                        },
                        setItem: function(t, e) {
                            var n = t.commit,
                                r = t.state;
                            n("setItem", {
                                itemKey: e.itemKey,
                                itemValue: e.itemValue
                            }), localStorage.setItem("rmt-user-storage", JSON.stringify(r.storage))
                        }
                    },
                    mutations: {
                        setStorage: function(t, e) {
                            t.storage = e || {}
                        },
                        setItem: function(t, e) {
                            var n = e.itemKey,
                                r = e.itemValue;
                            null === t.storage && (t.storage = {}), t.storage = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? l(Object(n), !0).forEach((function(e) {
                                        i()(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({}, t.storage, i()({}, n, r))
                        }
                    },
                    getters: {
                        getItem: function(t) {
                            var e = t.storage;
                            return function(t, n) {
                                return null === e ? n : e[t]
                            }
                        }
                    }
                };

            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(n), !0).forEach((function(e) {
                        i()(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var m = "RemoteWorkforceNuxt",
                v = function(t) {
                    return function() {
                        var e = function(e, n) {
                            return t === e ? n : null
                        };
                        return {
                            user: null,
                            currentApp: t,
                            pending: !1,
                            error: null,
                            navigationRoute: [],
                            items: [{
                                id: "settings",
                                label: "Settings",
                                to: e(m, "/settings"),
                                href: "/remote/settings",
                                type: c.a.SETTINGS,
                                iconName: "settings",
                                items: [{
                                    id: "my-info",
                                    label: "My Info",
                                    iconName: "user",
                                    to: e(m, "/settings/my-info"),
                                    href: "/remote/settings/my-info",
                                    disabled: !1
                                }, {
                                    id: "company-details",
                                    label: "Company Details",
                                    iconName: "enterprise",
                                    to: e(m, "/settings/company-details"),
                                    href: "/remote/settings/company-details",
                                    disabled: !0
                                }, {
                                    id: "billing-methods",
                                    label: "Billing Methods",
                                    iconName: "make-payment",
                                    to: e(m, "/settings/billing-methods"),
                                    href: "/remote/settings/billing-methods",
                                    disabled: !1
                                }, {
                                    id: "password-and-security",
                                    label: "Password & Security",
                                    iconName: "password",
                                    href: "/ab/account-security/password-and-security?remote",
                                    disabled: !1
                                }, {
                                    id: "connected-services",
                                    label: "Connected Services",
                                    iconName: "link",
                                    to: e(m, "/settings/connected-services"),
                                    href: "/remote/settings/connected-services",
                                    disabled: !1
                                }]
                            }, {
                                id: "logOut",
                                label: "Log out",
                                iconName: "remove",
                                type: c.a.LOG_OUT
                            }, {
                                id: "home",
                                label: "Home",
                                to: e(m, "/"),
                                href: "/remote",
                                type: c.a.MAIN
                            }, {
                                id: "talent-onboarding",
                                label: "Talent Onboarding",
                                to: e(m, "/talent/onboarding"),
                                href: "/remote/talent/onboarding",
                                type: c.a.MAIN
                            }, {
                                id: "talent-hired",
                                label: "Hired Talent",
                                to: e(m, "/talent/hired"),
                                href: "/remote/talent/hired",
                                type: c.a.MAIN
                            }, {
                                id: "billing-history",
                                label: "Billing History",
                                to: e(m, "/billing-history"),
                                href: "/remote/billing-history",
                                type: c.a.MAIN
                            }]
                        }
                    }
                },
                g = {
                    isMenuItemActive: function(t) {
                        return function(e) {
                            return t.navigationRoute.includes(e.id)
                        }
                    },
                    settingsItems: function(t) {
                        return t.items.find((function(t) {
                            return "settings" === t.id
                        })).items
                    }
                },
                b = {
                    setUser: function(t, e) {
                        t.user = e
                    },
                    setPending: function(t, e) {
                        t.pending = e
                    },
                    setError: function(t, e) {
                        t.error = e
                    },
                    setNavigationRoute: function(t, e) {
                        t.navigationRoute = e
                    }
                },
                y = {
                    fetchUser: function(t) {
                        var e = this;
                        return u()(s.a.mark((function n() {
                            var r, i;
                            return s.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = t.commit, !t.state.user) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return r("setPending", !0), n.prev = 4, n.next = 7, e.$httpGql().post({
                                            query: "query {\n            user { name, photoUrl }\n          }"
                                        }).json();
                                    case 7:
                                        i = n.sent, r("setUser", i.data.user), n.next = 14;
                                        break;
                                    case 11:
                                        n.prev = 11, n.t0 = n.
                                        catch(4), r("setError", !0);
                                    case 14:
                                        r("setPending", !1);
                                    case 15:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [4, 11]
                            ])
                        })))()
                    }
                };

            function w(t, e) {
                t.hasModule("rmtNavigation") || t.registerModule("rmtNavigation", {
                    namespaced: !0,
                    state: v(e),
                    getters: g,
                    mutations: b,
                    actions: y,
                    modules: {
                        uiStorage: p({}, f, {
                            namespaced: !0
                        })
                    }
                }, {
                    preserveState: !!t.state.rmtNavigation
                })
            }
        },
        function(t, e, n) {},
        function(t, e, n) {},
        function(t, e) {
            var n, r, i = t.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function s() {
                throw new Error("clearTimeout has not been defined")
            }

            function a(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : o
                } catch (t) {
                    n = o
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (t) {
                    r = s
                }
            }();
            var u, c = [],
                l = !1,
                d = -1;

            function f() {
                l && u && (l = !1, u.length ? c = u.concat(c) : d = -1, c.length && h())
            }

            function h() {
                if (!l) {
                    var t = a(f);
                    l = !0;
                    for (var e = c.length; e;) {
                        for (u = c, c = []; ++d < e;) u && u[d].run();
                        d = -1, e = c.length
                    }
                    u = null, l = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function p(t, e) {
                this.fun = t, this.array = e
            }

            function m() {}
            i.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                c.push(new p(t, e)), 1 !== c.length || l || a(h)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(t) {
                return []
            }, i.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        }, ,
        function(t, e) {
            t.exports = function(t) {
                if (Array.isArray(t)) return t
            }
        },
        function(t, e) {
            t.exports = function(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        i = !0, o = t
                    } finally {
                        try {
                            r || null == a.
                            return || a.
                            return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }
            }
        },
        function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        function(t, e, n) {
            var r = n(894);
            t.exports = function(t) {
                if (Array.isArray(t)) return r(t)
            }
        },
        function(t, e) {
            t.exports = function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }
        },
        function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        function(t, e, n) {
            (function(t) {
                var e = n(35),
                    r = function(t) {
                        "use strict";
                        var n = Object.prototype,
                            r = n.hasOwnProperty,
                            i = "function" == typeof Symbol ? Symbol : {},
                            o = i.iterator || "@@iterator",
                            s = i.asyncIterator || "@@asyncIterator",
                            a = i.toStringTag || "@@toStringTag";

                        function u(t, e, n, r) {
                            var i = e && e.prototype instanceof d ? e : d,
                                o = Object.create(i.prototype),
                                s = new S(r || []);
                            return o._invoke = function(t, e, n) {
                                var r = "suspendedStart";
                                return function(i, o) {
                                    if ("executing" === r) throw new Error("Generator is already running");
                                    if ("completed" === r) {
                                        if ("throw" === i) throw o;
                                        return x()
                                    }
                                    for (n.method = i, n.arg = o;;) {
                                        var s = n.delegate;
                                        if (s) {
                                            var a = w(s, n);
                                            if (a) {
                                                if (a === l) continue;
                                                return a
                                            }
                                        }
                                        if ("next" === n.method) n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                                            n.dispatchException(n.arg)
                                        } else "return" === n.method && n.abrupt("return", n.arg);
                                        r = "executing";
                                        var u = c(t, e, n);
                                        if ("normal" === u.type) {
                                            if (r = n.done ? "completed" : "suspendedYield", u.arg === l) continue;
                                            return {
                                                value: u.arg,
                                                done: n.done
                                            }
                                        }
                                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                                    }
                                }
                            }(t, n, s), o
                        }

                        function c(t, e, n) {
                            try {
                                return {
                                    type: "normal",
                                    arg: t.call(e, n)
                                }
                            } catch (t) {
                                return {
                                    type: "throw",
                                    arg: t
                                }
                            }
                        }
                        t.wrap = u;
                        var l = {};

                        function d() {}

                        function f() {}

                        function h() {}
                        var p = {};
                        p[o] = function() {
                            return this
                        };
                        var m = Object.getPrototypeOf,
                            v = m && m(m(E([])));
                        v && v !== n && r.call(v, o) && (p = v);
                        var g = h.prototype = d.prototype = Object.create(p);

                        function b(t) {
                            ["next", "throw", "return"].forEach((function(e) {
                                t[e] = function(t) {
                                    return this._invoke(e, t)
                                }
                            }))
                        }

                        function y(t, n) {
                            var i;
                            this._invoke = function(o, s) {
                                function a() {
                                    return new n((function(i, a) {
                                        ! function i(o, s, a, u) {
                                            var l = c(t[o], t, s);
                                            if ("throw" !== l.type) {
                                                var d = l.arg,
                                                    f = d.value;
                                                return f && "object" === e(f) && r.call(f, "__await") ? n.resolve(f.__await).then((function(t) {
                                                    i("next", t, a, u)
                                                }), (function(t) {
                                                    i("throw", t, a, u)
                                                })) : n.resolve(f).then((function(t) {
                                                    d.value = t, a(d)
                                                }), (function(t) {
                                                    return i("throw", t, a, u)
                                                }))
                                            }
                                            u(l.arg)
                                        }(o, s, i, a)
                                    }))
                                }
                                return i = i ? i.then(a, a) : a()
                            }
                        }

                        function w(t, e) {
                            var n = t.iterator[e.method];
                            if (void 0 === n) {
                                if (e.delegate = null, "throw" === e.method) {
                                    if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return l
                            }
                            var r = c(n, t.iterator, e.arg);
                            if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
                            var i = r.arg;
                            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                        }

                        function _(t) {
                            var e = {
                                tryLoc: t[0]
                            };
                            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                        }

                        function k(t) {
                            var e = t.completion || {};
                            e.type = "normal", delete e.arg, t.completion = e
                        }

                        function S(t) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], t.forEach(_, this), this.reset(!0)
                        }

                        function E(t) {
                            if (t) {
                                var e = t[o];
                                if (e) return e.call(t);
                                if ("function" == typeof t.next) return t;
                                if (!isNaN(t.length)) {
                                    var n = -1,
                                        i = function e() {
                                            for (; ++n < t.length;)
                                                if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                            return e.value = void 0, e.done = !0, e
                                        };
                                    return i.next = i
                                }
                            }
                            return {
                                next: x
                            }
                        }

                        function x() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return f.prototype = g.constructor = h, h.constructor = f, h[a] = f.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                        }, t.mark = function(t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, a in t || (t[a] = "GeneratorFunction")), t.prototype = Object.create(g), t
                        }, t.awrap = function(t) {
                            return {
                                __await: t
                            }
                        }, b(y.prototype), y.prototype[s] = function() {
                            return this
                        }, t.AsyncIterator = y, t.async = function(e, n, r, i, o) {
                            void 0 === o && (o = Promise);
                            var s = new y(u(e, n, r, i), o);
                            return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                                return t.done ? t.value : s.next()
                            }))
                        }, b(g), g[a] = "Generator", g[o] = function() {
                            return this
                        }, g.toString = function() {
                            return "[object Generator]"
                        }, t.keys = function(t) {
                            var e = [];
                            for (var n in t) e.push(n);
                            return e.reverse(),
                                function n() {
                                    for (; e.length;) {
                                        var r = e.pop();
                                        if (r in t) return n.value = r, n.done = !1, n
                                    }
                                    return n.done = !0, n
                                }
                        }, t.values = E, S.prototype = {
                            constructor: S,
                            reset: function(t) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                                    for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval
                            },
                            dispatchException: function(t) {
                                if (this.done) throw t;
                                var e = this;

                                function n(n, r) {
                                    return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                                }
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var o = this.tryEntries[i],
                                        s = o.completion;
                                    if ("root" === o.tryLoc) return n("end");
                                    if (o.tryLoc <= this.prev) {
                                        var a = r.call(o, "catchLoc"),
                                            u = r.call(o, "finallyLoc");
                                        if (a && u) {
                                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                        } else if (a) {
                                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                        } else {
                                            if (!u) throw new Error("try statement without catch or finally");
                                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(t, e) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var i = this.tryEntries[n];
                                    if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                        var o = i;
                                        break
                                    }
                                }
                                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                                var s = o ? o.completion : {};
                                return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(s)
                            },
                            complete: function(t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                            },
                            finish: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), l
                                }
                            },
                            catch: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.tryLoc === t) {
                                        var r = n.completion;
                                        if ("throw" === r.type) {
                                            var i = r.arg;
                                            k(n)
                                        }
                                        return i
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(t, e, n) {
                                return this.delegate = {
                                    iterator: E(t),
                                    resultName: e,
                                    nextLoc: n
                                }, "next" === this.method && (this.arg = void 0), l
                            }
                        }, t
                    }("object" === e(t) ? t.exports : {});
                try {
                    regeneratorRuntime = r
                } catch (t) {
                    Function("r", "regeneratorRuntime = r")(r)
                }
            }).call(this, n(968)(t))
        },
        function(t, e) {
            t.exports = function(t) {
                return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }), t.webpackPolyfill = 1), t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(774);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(775);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(776);
            n.n(r).a
        },
        function(t, e, n) {},
        function(t, e) {
            t.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
        },
        function(t, e) {
            function n(e, r) {
                return t.exports = n = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, n(e, r)
            }
            t.exports = n
        },
        function(t, e, n) {
            "use strict";
            var r = n(777);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(778);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(779);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(780);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(782);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(783);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(784);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(785);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(786);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(787);
            n.n(r).a
        },
        function(t, e, n) {
            var r = n(57);
            t.exports = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)););
                return t
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(788);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(789);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(790);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(791);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(792);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(793);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(794);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(795);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(796);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(797);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(798);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(799);
            n.n(r).a
        },
        function(t, e, n) {
            "use strict";
            var r = n(800);
            n.n(r).a
        },
        function(t, e, n) {
            var r = n(35),
                i = n(659),
                o = n(895).f,
                s = n(771),
                a = n(900),
                u = n(877),
                c = n(1008),
                l = n(1018);
            t.exports = function(t, e) {
                var n, d, f, h, p, m = t.target,
                    v = t.global,
                    g = t.stat;
                if (n = v ? i : g ? i[m] || u(m, {}) : (i[m] || {}).prototype)
                    for (d in e) {
                        if (h = e[d], f = t.noTargetGet ? (p = o(n, d)) && p.value : n[d], !l(v ? d : m + (g ? "." : "#") + d, t.forced) && void 0 !== f) {
                            if (r(h) === r(f)) continue;
                            c(h, f)
                        }(t.sham || f && f.sham) && s(h, "sham", !0), a(n, d, h, t)
                    }
            }
        },
        function(t, e, n) {
            "use strict";
            var r = {}.propertyIsEnumerable,
                i = Object.getOwnPropertyDescriptor,
                o = i && !r.call({
                    1: 2
                }, 1);
            e.f = o ? function(t) {
                var e = i(this, t);
                return !!e && e.enumerable
            } : r
        },
        function(t, e, n) {
            var r = n(721),
                i = n(1002),
                o = "".split;
            t.exports = r((function() {
                return !Object("z").propertyIsEnumerable(0)
            })) ? function(t) {
                return "String" == i(t) ? o.call(t, "") : Object(t)
            } : Object
        },
        function(t, e) {
            var n = {}.toString;
            t.exports = function(t) {
                return n.call(t).slice(8, -1)
            }
        },
        function(t, e) {
            t.exports = function(t) {
                if (null == t) throw TypeError("Can't call method on " + t);
                return t
            }
        },
        function(t, e, n) {
            var r = n(659),
                i = n(751),
                o = r.document,
                s = i(o) && i(o.createElement);
            t.exports = function(t) {
                return s ? o.createElement(t) : {}
            }
        },
        function(t, e, n) {
            var r, i, o, s = n(1006),
                a = n(659),
                u = n(751),
                c = n(771),
                l = n(722),
                d = n(1007),
                f = n(906),
                h = a.WeakMap;
            if (s) {
                var p = new h,
                    m = p.get,
                    v = p.has,
                    g = p.set;
                r = function(t, e) {
                    return g.call(p, t, e), e
                }, i = function(t) {
                    return m.call(p, t) || {}
                }, o = function(t) {
                    return v.call(p, t)
                }
            } else {
                var b = d("state");
                f[b] = !0, r = function(t, e) {
                    return c(t, b, e), e
                }, i = function(t) {
                    return l(t, b) ? t[b] : {}
                }, o = function(t) {
                    return l(t, b)
                }
            }
            t.exports = {
                set: r,
                get: i,
                has: o,
                enforce: function(t) {
                    return o(t) ? i(t) : r(t, {})
                },
                getterFor: function(t) {
                    return function(e) {
                        var n;
                        if (!u(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                        return n
                    }
                }
            }
        },
        function(t, e, n) {
            var r = n(659),
                i = n(901),
                o = r.WeakMap;
            t.exports = "function" == typeof o && /native code/.test(i(o))
        },
        function(t, e, n) {
            var r = n(903),
                i = n(905),
                o = r("keys");
            t.exports = function(t) {
                return o[t] || (o[t] = i(t))
            }
        },
        function(t, e, n) {
            var r = n(722),
                i = n(1009),
                o = n(895),
                s = n(899);
            t.exports = function(t, e) {
                for (var n = i(e), a = s.f, u = o.f, c = 0; c < n.length; c++) {
                    var l = n[c];
                    r(t, l) || a(t, l, u(e, l))
                }
            }
        },
        function(t, e, n) {
            var r = n(907),
                i = n(1011),
                o = n(1017),
                s = n(772);
            t.exports = r("Reflect", "ownKeys") || function(t) {
                var e = i.f(s(t)),
                    n = o.f;
                return n ? e.concat(n(t)) : e
            }
        },
        function(t, e, n) {
            var r = n(659);
            t.exports = r
        },
        function(t, e, n) {
            var r = n(1012),
                i = n(1016).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return r(t, i)
            }
        },
        function(t, e, n) {
            var r = n(722),
                i = n(876),
                o = n(1013).indexOf,
                s = n(906);
            t.exports = function(t, e) {
                var n, a = i(t),
                    u = 0,
                    c = [];
                for (n in a) !r(s, n) && r(a, n) && c.push(n);
                for (; e.length > u;) r(a, n = e[u++]) && (~o(c, n) || c.push(n));
                return c
            }
        },
        function(t, e, n) {
            var r = n(876),
                i = n(1014),
                o = n(1015),
                s = function(t) {
                    return function(e, n, s) {
                        var a, u = r(e),
                            c = i(u.length),
                            l = o(s, c);
                        if (t && n != n) {
                            for (; c > l;)
                                if ((a = u[l++]) != a) return !0
                        } else
                            for (; c > l; l++)
                                if ((t || l in u) && u[l] === n) return t || l || 0; return !t && -1
                    }
                };
            t.exports = {
                includes: s(!0),
                indexOf: s(!1)
            }
        },
        function(t, e, n) {
            var r = n(908),
                i = Math.min;
            t.exports = function(t) {
                return t > 0 ? i(r(t), 9007199254740991) : 0
            }
        },
        function(t, e, n) {
            var r = n(908),
                i = Math.max,
                o = Math.min;
            t.exports = function(t, e) {
                var n = r(t);
                return n < 0 ? i(n + e, 0) : o(n, e)
            }
        },
        function(t, e) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        function(t, e) {
            e.f = Object.getOwnPropertySymbols
        },
        function(t, e, n) {
            var r = n(721),
                i = /#|\.prototype\./,
                o = function(t, e) {
                    var n = a[s(t)];
                    return n == c || n != u && ("function" == typeof e ? r(e) : !!e)
                },
                s = o.normalize = function(t) {
                    return String(t).replace(i, ".").toLowerCase()
                },
                a = o.data = {},
                u = o.NATIVE = "N",
                c = o.POLYFILL = "P";
            t.exports = o
        },
        function(t, e, n) {
            var r = n(659);
            t.exports = r.Promise
        },
        function(t, e, n) {
            var r = n(772),
                i = n(909),
                o = n(1021)("species");
            t.exports = function(t, e) {
                var n, s = r(t).constructor;
                return void 0 === s || null == (n = r(s)[o]) ? e : i(n)
            }
        },
        function(t, e, n) {
            var r = n(659),
                i = n(903),
                o = n(722),
                s = n(905),
                a = n(910),
                u = n(1022),
                c = i("wks"),
                l = r.Symbol,
                d = u ? l : l && l.withoutSetter || s;
            t.exports = function(t) {
                return o(c, t) || (a && o(l, t) ? c[t] = l[t] : c[t] = d("Symbol." + t)), c[t]
            }
        },
        function(t, e, n) {
            var r = n(35),
                i = n(910);
            t.exports = i && !Symbol.sham && "symbol" == r(Symbol.iterator)
        },
        function(t, e, n) {
            var r = n(772),
                i = n(751),
                o = n(1024);
            t.exports = function(t, e) {
                if (r(t), i(e) && e.constructor === t) return e;
                var n = o.f(t);
                return (0, n.resolve)(e), n.promise
            }
        },
        function(t, e, n) {
            "use strict";
            var r = n(909),
                i = function(t) {
                    var e, n;
                    this.promise = new t((function(t, r) {
                        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                        e = t, n = r
                    })), this.resolve = r(e), this.reject = r(n)
                };
            t.exports.f = function(t) {
                return new i(t)
            }
        }, , , , , , , , , ,
        function(t, e, n) {
            "use strict";
            var r = n(802);
            n.n(r).a
        }, , , , , , , , , , , , , , , ,
        function(t, e, n) {
            "use strict";
            var r = n(818);
            n.n(r).a
        },
        function(t, e) {
            t.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        function(t, e, n) {
            var r = n(723),
                i = n(710),
                o = n(879),
                s = n(1053),
                a = n(1054),
                u = n(1055),
                c = n(1056),
                l = n(1057),
                d = n(911),
                f = n(1058),
                h = n(1065),
                p = n(1066),
                m = n(711),
                v = n(1067),
                g = n(878);

            function b(t, e, n) {
                var r, i, o = t.size,
                    s = p.getEncodedBits(e, n);
                for (r = 0; r < 15; r++) i = 1 == (s >> r & 1), r < 6 ? t.set(r, 8, i, !0) : r < 8 ? t.set(r + 1, 8, i, !0) : t.set(o - 15 + r, 8, i, !0), r < 8 ? t.set(8, o - r - 1, i, !0) : r < 9 ? t.set(8, 15 - r - 1 + 1, i, !0) : t.set(8, 15 - r - 1, i, !0);
                t.set(o - 8, 8, 1, !0)
            }

            function y(t, e, n) {
                var o = new s;
                n.forEach((function(e) {
                    o.put(e.mode.bit, 4), o.put(e.getLength(), m.getCharCountIndicator(e.mode, t)), e.write(o)
                }));
                var a = 8 * (i.getSymbolTotalCodewords(t) - d.getTotalCodewordsCount(t, e));
                for (o.getLengthInBits() + 4 <= a && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                for (var u = (a - o.getLengthInBits()) / 8, c = 0; c < u; c++) o.put(c % 2 ? 17 : 236, 8);
                return function(t, e, n) {
                    for (var o = i.getSymbolTotalCodewords(e), s = d.getTotalCodewordsCount(e, n), a = o - s, u = d.getBlocksCount(e, n), c = u - o % u, l = Math.floor(o / u), h = Math.floor(a / u), p = h + 1, m = l - h, v = new f(m), g = 0, b = new Array(u), y = new Array(u), w = 0, _ = r.from(t.buffer), k = 0; k < u; k++) {
                        var S = k < c ? h : p;
                        b[k] = _.slice(g, g + S), y[k] = v.encode(b[k]), g += S, w = Math.max(w, S)
                    }
                    var E, x, C = r.alloc(o),
                        O = 0;
                    for (E = 0; E < w; E++)
                        for (x = 0; x < u; x++) E < b[x].length && (C[O++] = b[x][E]);
                    for (E = 0; E < m; E++)
                        for (x = 0; x < u; x++) C[O++] = y[x][E];
                    return C
                }(o, t, e)
            }

            function w(t, e, n, r) {
                var o;
                if (g(t)) o = v.fromArray(t);
                else {
                    if ("string" != typeof t) throw new Error("Invalid data");
                    var s = e;
                    if (!s) {
                        var d = v.rawSplit(t);
                        s = h.getBestVersionForData(d, n)
                    }
                    o = v.fromString(t, s || 40)
                }
                var f = h.getBestVersionForData(o, n);
                if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
                if (e) {
                    if (e < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
                } else e = f;
                var p = y(e, n, o),
                    m = i.getSymbolSize(e),
                    w = new a(m);
                return function(t, e) {
                        for (var n = t.size, r = c.getPositions(e), i = 0; i < r.length; i++)
                            for (var o = r[i][0], s = r[i][1], a = -1; a <= 7; a++)
                                if (!(o + a <= -1 || n <= o + a))
                                    for (var u = -1; u <= 7; u++) s + u <= -1 || n <= s + u || (a >= 0 && a <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === a || 6 === a) || a >= 2 && a <= 4 && u >= 2 && u <= 4 ? t.set(o + a, s + u, !0, !0) : t.set(o + a, s + u, !1, !0))
                    }(w, e),
                    function(t) {
                        for (var e = t.size, n = 8; n < e - 8; n++) {
                            var r = n % 2 == 0;
                            t.set(n, 6, r, !0), t.set(6, n, r, !0)
                        }
                    }(w),
                    function(t, e) {
                        for (var n = u.getPositions(e), r = 0; r < n.length; r++)
                            for (var i = n[r][0], o = n[r][1], s = -2; s <= 2; s++)
                                for (var a = -2; a <= 2; a++) - 2 === s || 2 === s || -2 === a || 2 === a || 0 === s && 0 === a ? t.set(i + s, o + a, !0, !0) : t.set(i + s, o + a, !1, !0)
                    }(w, e), b(w, n, 0), e >= 7 && function(t, e) {
                        for (var n, r, i, o = t.size, s = h.getEncodedBits(e), a = 0; a < 18; a++) n = Math.floor(a / 3), r = a % 3 + o - 8 - 3, i = 1 == (s >> a & 1), t.set(n, r, i, !0), t.set(r, n, i, !0)
                    }(w, e),
                    function(t, e) {
                        for (var n = t.size, r = -1, i = n - 1, o = 7, s = 0, a = n - 1; a > 0; a -= 2)
                            for (6 === a && a--;;) {
                                for (var u = 0; u < 2; u++)
                                    if (!t.isReserved(i, a - u)) {
                                        var c = !1;
                                        s < e.length && (c = 1 == (e[s] >>> o & 1)), t.set(i, a - u, c), -1 === --o && (s++, o = 7)
                                    }
                                if ((i += r) < 0 || n <= i) {
                                    i -= r, r = -r;
                                    break
                                }
                            }
                    }(w, p), isNaN(r) && (r = l.getBestMask(w, b.bind(null, w, n))), l.applyMask(r, w), b(w, n, r), {
                        modules: w,
                        version: e,
                        errorCorrectionLevel: n,
                        maskPattern: r,
                        segments: o
                    }
            }
            e.create = function(t, e) {
                if (void 0 === t || "" === t) throw new Error("No input text");
                var n, r, s = o.M;
                return void 0 !== e && (s = o.from(e.errorCorrectionLevel, o.M), n = h.from(e.version), r = l.from(e.maskPattern), e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)), w(t, n, s, r)
            }
        },
        function(t, e) {
            function n() {
                this.buffer = [], this.length = 0
            }
            n.prototype = {
                get: function(t) {
                    var e = Math.floor(t / 8);
                    return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                },
                put: function(t, e) {
                    for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = n
        },
        function(t, e, n) {
            var r = n(723);

            function i(t) {
                if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = t, this.data = r.alloc(t * t), this.reservedBit = r.alloc(t * t)
            }
            i.prototype.set = function(t, e, n, r) {
                var i = t * this.size + e;
                this.data[i] = n, r && (this.reservedBit[i] = !0)
            }, i.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }, i.prototype.xor = function(t, e, n) {
                this.data[t * this.size + e] ^= n
            }, i.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }, t.exports = i
        },
        function(t, e, n) {
            var r = n(710).getSymbolSize;
            e.getRowColCoords = function(t) {
                if (1 === t) return [];
                for (var e = Math.floor(t / 7) + 2, n = r(t), i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)), o = [n - 7], s = 1; s < e - 1; s++) o[s] = o[s - 1] - i;
                return o.push(6), o.reverse()
            }, e.getPositions = function(t) {
                for (var n = [], r = e.getRowColCoords(t), i = r.length, o = 0; o < i; o++)
                    for (var s = 0; s < i; s++) 0 === o && 0 === s || 0 === o && s === i - 1 || o === i - 1 && 0 === s || n.push([r[o], r[s]]);
                return n
            }
        },
        function(t, e, n) {
            var r = n(710).getSymbolSize;
            e.getPositions = function(t) {
                var e = r(t);
                return [
                    [0, 0],
                    [e - 7, 0],
                    [0, e - 7]
                ]
            }
        },
        function(t, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            var n = 3,
                r = 3,
                i = 40,
                o = 10;

            function s(t, n, r) {
                switch (t) {
                    case e.Patterns.PATTERN000:
                        return (n + r) % 2 == 0;
                    case e.Patterns.PATTERN001:
                        return n % 2 == 0;
                    case e.Patterns.PATTERN010:
                        return r % 3 == 0;
                    case e.Patterns.PATTERN011:
                        return (n + r) % 3 == 0;
                    case e.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                    case e.Patterns.PATTERN101:
                        return n * r % 2 + n * r % 3 == 0;
                    case e.Patterns.PATTERN110:
                        return (n * r % 2 + n * r % 3) % 2 == 0;
                    case e.Patterns.PATTERN111:
                        return (n * r % 3 + (n + r) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + t)
                }
            }
            e.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }, e.getPenaltyN1 = function(t) {
                for (var e = t.size, r = 0, i = 0, o = 0, s = null, a = null, u = 0; u < e; u++) {
                    i = o = 0, s = a = null;
                    for (var c = 0; c < e; c++) {
                        var l = t.get(u, c);
                        l === s ? i++ : (i >= 5 && (r += n + (i - 5)), s = l, i = 1), (l = t.get(c, u)) === a ? o++ : (o >= 5 && (r += n + (o - 5)), a = l, o = 1)
                    }
                    i >= 5 && (r += n + (i - 5)), o >= 5 && (r += n + (o - 5))
                }
                return r
            }, e.getPenaltyN2 = function(t) {
                for (var e = t.size, n = 0, i = 0; i < e - 1; i++)
                    for (var o = 0; o < e - 1; o++) {
                        var s = t.get(i, o) + t.get(i, o + 1) + t.get(i + 1, o) + t.get(i + 1, o + 1);
                        4 !== s && 0 !== s || n++
                    }
                return n * r
            }, e.getPenaltyN3 = function(t) {
                for (var e = t.size, n = 0, r = 0, o = 0, s = 0; s < e; s++) {
                    r = o = 0;
                    for (var a = 0; a < e; a++) r = r << 1 & 2047 | t.get(s, a), a >= 10 && (1488 === r || 93 === r) && n++, o = o << 1 & 2047 | t.get(a, s), a >= 10 && (1488 === o || 93 === o) && n++
                }
                return n * i
            }, e.getPenaltyN4 = function(t) {
                for (var e = 0, n = t.data.length, r = 0; r < n; r++) e += t.data[r];
                return Math.abs(Math.ceil(100 * e / n / 5) - 10) * o
            }, e.applyMask = function(t, e) {
                for (var n = e.size, r = 0; r < n; r++)
                    for (var i = 0; i < n; i++) e.isReserved(i, r) || e.xor(i, r, s(t, i, r))
            }, e.getBestMask = function(t, n) {
                for (var r = Object.keys(e.Patterns).length, i = 0, o = 1 / 0, s = 0; s < r; s++) {
                    n(s), e.applyMask(s, t);
                    var a = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(s, t), a < o && (o = a, i = s)
                }
                return i
            }
        },
        function(t, e, n) {
            var r = n(723),
                i = n(1059),
                o = n(1061).Buffer;

            function s(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            s.prototype.initialize = function(t) {
                this.degree = t, this.genPoly = i.generateECPolynomial(this.degree)
            }, s.prototype.encode = function(t) {
                if (!this.genPoly) throw new Error("Encoder not initialized");
                var e = r.alloc(this.degree),
                    n = o.concat([t, e], t.length + this.degree),
                    s = i.mod(n, this.genPoly),
                    a = this.degree - s.length;
                if (a > 0) {
                    var u = r.alloc(this.degree);
                    return s.copy(u, a), u
                }
                return s
            }, t.exports = s
        },
        function(t, e, n) {
            var r = n(723),
                i = n(1060);
            e.mul = function(t, e) {
                for (var n = r.alloc(t.length + e.length - 1), o = 0; o < t.length; o++)
                    for (var s = 0; s < e.length; s++) n[o + s] ^= i.mul(t[o], e[s]);
                return n
            }, e.mod = function(t, e) {
                for (var n = r.from(t); n.length - e.length >= 0;) {
                    for (var o = n[0], s = 0; s < e.length; s++) n[s] ^= i.mul(e[s], o);
                    for (var a = 0; a < n.length && 0 === n[a];) a++;
                    n = n.slice(a)
                }
                return n
            }, e.generateECPolynomial = function(t) {
                for (var n = r.from([1]), o = 0; o < t; o++) n = e.mul(n, [1, i.exp(o)]);
                return n
            }
        },
        function(t, e, n) {
            var r = n(723),
                i = r.alloc(512),
                o = r.alloc(256);
            ! function() {
                for (var t = 1, e = 0; e < 255; e++) i[e] = t, o[t] = e, 256 & (t <<= 1) && (t ^= 285);
                for (e = 255; e < 512; e++) i[e] = i[e - 255]
            }(), e.log = function(t) {
                if (t < 1) throw new Error("log(" + t + ")");
                return o[t]
            }, e.exp = function(t) {
                return i[t]
            }, e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : i[o[t] + o[e]]
            }
        },
        function(t, e, n) {
            "use strict";
            (function(t) {
                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <http://feross.org>
                 * @license  MIT
                 */
                var r = n(1062),
                    i = n(1063),
                    o = n(1064);

                function s() {
                    return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function a(t, e) {
                    if (s() < e) throw new RangeError("Invalid typed array length");
                    return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t
                }

                function u(t, e, n) {
                    if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                        return d(this, t)
                    }
                    return c(this, t, e, n)
                }

                function c(t, e, n, r) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                        if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                        e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                        u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = f(t, e);
                        return t
                    }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                        "string" == typeof n && "" !== n || (n = "utf8");
                        if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                        var r = 0 | p(e, n),
                            i = (t = a(t, r)).write(e, n);
                        i !== r && (t = t.slice(0, i));
                        return t
                    }(t, e, n) : function(t, e) {
                        if (u.isBuffer(e)) {
                            var n = 0 | h(e.length);
                            return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : f(t, e);
                            if ("Buffer" === e.type && o(e.data)) return f(t, e.data)
                        }
                        var r;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }

                function l(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function d(t, e) {
                    if (l(e), t = a(t, e < 0 ? 0 : 0 | h(e)), !u.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < e; ++n) t[n] = 0;
                    return t
                }

                function f(t, e) {
                    var n = e.length < 0 ? 0 : 0 | h(e.length);
                    t = a(t, n);
                    for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                    return t
                }

                function h(t) {
                    if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                    return 0 | t
                }

                function p(t, e) {
                    if (u.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var n = t.length;
                    if (0 === n) return 0;
                    for (var r = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return U(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return F(t).length;
                        default:
                            if (r) return U(t).length;
                            e = ("" + e).toLowerCase(), r = !0
                    }
                }

                function m(t, e, n) {
                    var r = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8");;) switch (t) {
                        case "hex":
                            return A(this, e, n);
                        case "utf8":
                        case "utf-8":
                            return C(this, e, n);
                        case "ascii":
                            return O(this, e, n);
                        case "latin1":
                        case "binary":
                            return I(this, e, n);
                        case "base64":
                            return x(this, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return T(this, e, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), r = !0
                    }
                }

                function v(t, e, n) {
                    var r = t[e];
                    t[e] = t[n], t[n] = r
                }

                function g(t, e, n, r, i) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                        if (i) return -1;
                        n = t.length - 1
                    } else if (n < 0) {
                        if (!i) return -1;
                        n = 0
                    }
                    if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, n, r, i);
                    if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [e], n, r, i);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function b(t, e, n, r, i) {
                    var o, s = 1,
                        a = t.length,
                        u = e.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        s = 2, a /= 2, u /= 2, n /= 2
                    }

                    function c(t, e) {
                        return 1 === s ? t[e] : t.readUInt16BE(e * s)
                    }
                    if (i) {
                        var l = -1;
                        for (o = n; o < a; o++)
                            if (c(t, o) === c(e, -1 === l ? 0 : o - l)) {
                                if (-1 === l && (l = o), o - l + 1 === u) return l * s
                            } else -1 !== l && (o -= o - l), l = -1
                    } else
                        for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
                            for (var d = !0, f = 0; f < u; f++)
                                if (c(t, o + f) !== c(e, f)) {
                                    d = !1;
                                    break
                                }
                            if (d) return o
                        }
                    return -1
                }

                function y(t, e, n, r) {
                    n = Number(n) || 0;
                    var i = t.length - n;
                    r ? (r = Number(r)) > i && (r = i) : r = i;
                    var o = e.length;
                    if (o % 2 != 0) throw new TypeError("Invalid hex string");
                    r > o / 2 && (r = o / 2);
                    for (var s = 0; s < r; ++s) {
                        var a = parseInt(e.substr(2 * s, 2), 16);
                        if (isNaN(a)) return s;
                        t[n + s] = a
                    }
                    return s
                }

                function w(t, e, n, r) {
                    return V(U(e, t.length - n), t, n, r)
                }

                function _(t, e, n, r) {
                    return V(function(t) {
                        for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                        return e
                    }(e), t, n, r)
                }

                function k(t, e, n, r) {
                    return _(t, e, n, r)
                }

                function S(t, e, n, r) {
                    return V(F(e), t, n, r)
                }

                function E(t, e, n, r) {
                    return V(function(t, e) {
                        for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                        return o
                    }(e, t.length - n), t, n, r)
                }

                function x(t, e, n) {
                    return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
                }

                function C(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var r = [], i = e; i < n;) {
                        var o, s, a, u, c = t[i],
                            l = null,
                            d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                        if (i + d <= n) switch (d) {
                            case 1:
                                c < 128 && (l = c);
                                break;
                            case 2:
                                128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                                break;
                            case 3:
                                o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                break;
                            case 4:
                                o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                        }
                        null === l ? (l = 65533, d = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += d
                    }
                    return function(t) {
                        var e = t.length;
                        if (e <= 4096) return String.fromCharCode.apply(String, t);
                        var n = "",
                            r = 0;
                        for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
                        return n
                    }(r)
                }
                e.Buffer = u, e.SlowBuffer = function(t) {
                    +t != t && (t = 0);
                    return u.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function(t) {
                    return t.__proto__ = u.prototype, t
                }, u.from = function(t, e, n) {
                    return c(null, t, e, n)
                }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                    value: null,
                    configurable: !0
                })), u.alloc = function(t, e, n) {
                    return function(t, e, n, r) {
                        return l(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e)
                    }(null, t, e, n)
                }, u.allocUnsafe = function(t) {
                    return d(null, t)
                }, u.allocUnsafeSlow = function(t) {
                    return d(null, t)
                }, u.isBuffer = function(t) {
                    return !(null == t || !t._isBuffer)
                }, u.compare = function(t, e) {
                    if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                    if (t === e) return 0;
                    for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
                        if (t[i] !== e[i]) {
                            n = t[i], r = e[i];
                            break
                        }
                    return n < r ? -1 : r < n ? 1 : 0
                }, u.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, u.concat = function(t, e) {
                    if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return u.alloc(0);
                    var n;
                    if (void 0 === e)
                        for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                    var r = u.allocUnsafe(e),
                        i = 0;
                    for (n = 0; n < t.length; ++n) {
                        var s = t[n];
                        if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                        s.copy(r, i), i += s.length
                    }
                    return r
                }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) v(this, e, e + 1);
                    return this
                }, u.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
                    return this
                }, u.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
                    return this
                }, u.prototype.toString = function() {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : m.apply(this, arguments)
                }, u.prototype.equals = function(t) {
                    if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === u.compare(this, t)
                }, u.prototype.inspect = function() {
                    var t = "",
                        n = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
                }, u.prototype.compare = function(t, e, n, r, i) {
                    if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                    if (r >= i && e >= n) return 0;
                    if (r >= i) return -1;
                    if (e >= n) return 1;
                    if (this === t) return 0;
                    for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(o, s), c = this.slice(r, i), l = t.slice(e, n), d = 0; d < a; ++d)
                        if (c[d] !== l[d]) {
                            o = c[d], s = l[d];
                            break
                        }
                    return o < s ? -1 : s < o ? 1 : 0
                }, u.prototype.includes = function(t, e, n) {
                    return -1 !== this.indexOf(t, e, n)
                }, u.prototype.indexOf = function(t, e, n) {
                    return g(this, t, e, n, !0)
                }, u.prototype.lastIndexOf = function(t, e, n) {
                    return g(this, t, e, n, !1)
                }, u.prototype.write = function(t, e, n, r) {
                    if (void 0 === e) r = "utf8", n = this.length, e = 0;
                    else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                    else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var i = this.length - e;
                    if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var o = !1;;) switch (r) {
                        case "hex":
                            return y(this, t, e, n);
                        case "utf8":
                        case "utf-8":
                            return w(this, t, e, n);
                        case "ascii":
                            return _(this, t, e, n);
                        case "latin1":
                        case "binary":
                            return k(this, t, e, n);
                        case "base64":
                            return S(this, t, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return E(this, t, e, n);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), o = !0
                    }
                }, u.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };

                function O(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
                    return r
                }

                function I(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
                    return r
                }

                function A(t, e, n) {
                    var r = t.length;
                    (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var i = "", o = e; o < n; ++o) i += $(t[o]);
                    return i
                }

                function T(t, e, n) {
                    for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                    return i
                }

                function P(t, e, n) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function R(t, e, n, r, i, o) {
                    if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > t.length) throw new RangeError("Index out of range")
                }

                function N(t, e, n, r) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
                }

                function j(t, e, n, r) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
                }

                function D(t, e, n, r, i, o) {
                    if (n + r > t.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function B(t, e, n, r, o) {
                    return o || D(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4
                }

                function L(t, e, n, r, o) {
                    return o || D(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8
                }
                u.prototype.slice = function(t, e) {
                    var n, r = this.length;
                    if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = u.prototype;
                    else {
                        var i = e - t;
                        n = new u(i, void 0);
                        for (var o = 0; o < i; ++o) n[o] = this[o + t]
                    }
                    return n
                }, u.prototype.readUIntLE = function(t, e, n) {
                    t |= 0, e |= 0, n || P(t, e, this.length);
                    for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                    return r
                }, u.prototype.readUIntBE = function(t, e, n) {
                    t |= 0, e |= 0, n || P(t, e, this.length);
                    for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
                    return r
                }, u.prototype.readUInt8 = function(t, e) {
                    return e || P(t, 1, this.length), this[t]
                }, u.prototype.readUInt16LE = function(t, e) {
                    return e || P(t, 2, this.length), this[t] | this[t + 1] << 8
                }, u.prototype.readUInt16BE = function(t, e) {
                    return e || P(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, u.prototype.readUInt32LE = function(t, e) {
                    return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, u.prototype.readUInt32BE = function(t, e) {
                    return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, u.prototype.readIntLE = function(t, e, n) {
                    t |= 0, e |= 0, n || P(t, e, this.length);
                    for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                    return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
                }, u.prototype.readIntBE = function(t, e, n) {
                    t |= 0, e |= 0, n || P(t, e, this.length);
                    for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
                }, u.prototype.readInt8 = function(t, e) {
                    return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, u.prototype.readInt16LE = function(t, e) {
                    e || P(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt16BE = function(t, e) {
                    e || P(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt32LE = function(t, e) {
                    return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, u.prototype.readInt32BE = function(t, e) {
                    return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, u.prototype.readFloatLE = function(t, e) {
                    return e || P(t, 4, this.length), i.read(this, t, !0, 23, 4)
                }, u.prototype.readFloatBE = function(t, e) {
                    return e || P(t, 4, this.length), i.read(this, t, !1, 23, 4)
                }, u.prototype.readDoubleLE = function(t, e) {
                    return e || P(t, 8, this.length), i.read(this, t, !0, 52, 8)
                }, u.prototype.readDoubleBE = function(t, e) {
                    return e || P(t, 8, this.length), i.read(this, t, !1, 52, 8)
                }, u.prototype.writeUIntLE = function(t, e, n, r) {
                    (t = +t, e |= 0, n |= 0, r) || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var i = 1,
                        o = 0;
                    for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
                    return e + n
                }, u.prototype.writeUIntBE = function(t, e, n, r) {
                    (t = +t, e |= 0, n |= 0, r) || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var i = n - 1,
                        o = 1;
                    for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                    return e + n
                }, u.prototype.writeUInt8 = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                }, u.prototype.writeUInt16LE = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
                }, u.prototype.writeUInt16BE = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
                }, u.prototype.writeUInt32LE = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : j(this, t, e, !0), e + 4
                }, u.prototype.writeUInt32BE = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : j(this, t, e, !1), e + 4
                }, u.prototype.writeIntLE = function(t, e, n, r) {
                    if (t = +t, e |= 0, !r) {
                        var i = Math.pow(2, 8 * n - 1);
                        R(this, t, e, n, i - 1, -i)
                    }
                    var o = 0,
                        s = 1,
                        a = 0;
                    for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                    return e + n
                }, u.prototype.writeIntBE = function(t, e, n, r) {
                    if (t = +t, e |= 0, !r) {
                        var i = Math.pow(2, 8 * n - 1);
                        R(this, t, e, n, i - 1, -i)
                    }
                    var o = n - 1,
                        s = 1,
                        a = 0;
                    for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                    return e + n
                }, u.prototype.writeInt8 = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, u.prototype.writeInt16LE = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2
                }, u.prototype.writeInt16BE = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2
                }, u.prototype.writeInt32LE = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : j(this, t, e, !0), e + 4
                }, u.prototype.writeInt32BE = function(t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : j(this, t, e, !1), e + 4
                }, u.prototype.writeFloatLE = function(t, e, n) {
                    return B(this, t, e, !0, n)
                }, u.prototype.writeFloatBE = function(t, e, n) {
                    return B(this, t, e, !1, n)
                }, u.prototype.writeDoubleLE = function(t, e, n) {
                    return L(this, t, e, !0, n)
                }, u.prototype.writeDoubleBE = function(t, e, n) {
                    return L(this, t, e, !1, n)
                }, u.prototype.copy = function(t, e, n, r) {
                    if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                    var i, o = r - n;
                    if (this === t && n < e && e < r)
                        for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
                    else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                        for (i = 0; i < o; ++i) t[i + e] = this[i + n];
                    else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                    return o
                }, u.prototype.fill = function(t, e, n, r) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                            var i = t.charCodeAt(0);
                            i < 256 && (t = i)
                        }
                        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                    } else "number" == typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                    if (n <= e) return this;
                    var o;
                    if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                        for (o = e; o < n; ++o) this[o] = t;
                    else {
                        var s = u.isBuffer(t) ? t : U(new u(t, r).toString()),
                            a = s.length;
                        for (o = 0; o < n - e; ++o) this[o + e] = s[o % a]
                    }
                    return this
                };
                var M = /[^+\/0-9A-Za-z-_]/g;

                function $(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }

                function U(t, e) {
                    var n;
                    e = e || 1 / 0;
                    for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                        if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                            if (!i) {
                                if (n > 56319) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (s + 1 === r) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                i = n;
                                continue
                            }
                            if (n < 56320) {
                                (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                                continue
                            }
                            n = 65536 + (i - 55296 << 10 | n - 56320)
                        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                        if (i = null, n < 128) {
                            if ((e -= 1) < 0) break;
                            o.push(n)
                        } else if (n < 2048) {
                            if ((e -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((e -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }

                function F(t) {
                    return r.toByteArray(function(t) {
                        if ((t = function(t) {
                                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                            }(t).replace(M, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function V(t, e, n, r) {
                    for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                    return i
                }
            }).call(this, n(768))
        },
        function(t, e, n) {
            "use strict";
            e.byteLength = function(t) {
                var e = c(t),
                    n = e[0],
                    r = e[1];
                return 3 * (n + r) / 4 - r
            }, e.toByteArray = function(t) {
                var e, n, r = c(t),
                    s = r[0],
                    a = r[1],
                    u = new o(function(t, e, n) {
                        return 3 * (e + n) / 4 - n
                    }(0, s, a)),
                    l = 0,
                    d = a > 0 ? s - 4 : s;
                for (n = 0; n < d; n += 4) e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)], u[l++] = e >> 16 & 255, u[l++] = e >> 8 & 255, u[l++] = 255 & e;
                2 === a && (e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4, u[l++] = 255 & e);
                1 === a && (e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2, u[l++] = e >> 8 & 255, u[l++] = 255 & e);
                return u
            }, e.fromByteArray = function(t) {
                for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) o.push(l(t, s, s + 16383 > a ? a : s + 16383));
                1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
                return o.join("")
            };
            for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) r[a] = s[a], i[s.charCodeAt(a)] = a;

            function c(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = t.indexOf("=");
                return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
            }

            function l(t, e, n) {
                for (var i, o, s = [], a = e; a < n; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
                return s.join("")
            }
            i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
        },
        function(t, e) {
            e.read = function(t, e, n, r, i) {
                var o, s, a = 8 * i - r - 1,
                    u = (1 << a) - 1,
                    c = u >> 1,
                    l = -7,
                    d = n ? i - 1 : 0,
                    f = n ? -1 : 1,
                    h = t[e + d];
                for (d += f, o = h & (1 << -l) - 1, h >>= -l, l += a; l > 0; o = 256 * o + t[e + d], d += f, l -= 8);
                for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + t[e + d], d += f, l -= 8);
                if (0 === o) o = 1 - c;
                else {
                    if (o === u) return s ? NaN : 1 / 0 * (h ? -1 : 1);
                    s += Math.pow(2, r), o -= c
                }
                return (h ? -1 : 1) * s * Math.pow(2, o - r)
            }, e.write = function(t, e, n, r, i, o) {
                var s, a, u, c = 8 * o - i - 1,
                    l = (1 << c) - 1,
                    d = l >> 1,
                    f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    h = r ? 0 : o - 1,
                    p = r ? 1 : -1,
                    m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + d >= 1 ? f / u : f * Math.pow(2, 1 - d)) * u >= 2 && (s++, u /= 2), s + d >= l ? (a = 0, s = l) : s + d >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += d) : (a = e * Math.pow(2, d - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + h] = 255 & a, h += p, a /= 256, i -= 8);
                for (s = s << i | a, c += i; c > 0; t[n + h] = 255 & s, h += p, s /= 256, c -= 8);
                t[n + h - p] |= 128 * m
            }
        },
        function(t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == n.call(t)
            }
        },
        function(t, e, n) {
            var r = n(710),
                i = n(911),
                o = n(879),
                s = n(711),
                a = n(912),
                u = n(878),
                c = r.getBCHDigit(7973);

            function l(t, e) {
                return s.getCharCountIndicator(t, e) + 4
            }

            function d(t, e) {
                var n = 0;
                return t.forEach((function(t) {
                    var r = l(t.mode, e);
                    n += r + t.getBitsLength()
                })), n
            }
            e.from = function(t, e) {
                return a.isValid(t) ? parseInt(t, 10) : e
            }, e.getCapacity = function(t, e, n) {
                if (!a.isValid(t)) throw new Error("Invalid QR Code version");
                void 0 === n && (n = s.BYTE);
                var o = 8 * (r.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e));
                if (n === s.MIXED) return o;
                var u = o - l(n, t);
                switch (n) {
                    case s.NUMERIC:
                        return Math.floor(u / 10 * 3);
                    case s.ALPHANUMERIC:
                        return Math.floor(u / 11 * 2);
                    case s.KANJI:
                        return Math.floor(u / 13);
                    case s.BYTE:
                    default:
                        return Math.floor(u / 8)
                }
            }, e.getBestVersionForData = function(t, n) {
                var r, i = o.from(n, o.M);
                if (u(t)) {
                    if (t.length > 1) return function(t, n) {
                        for (var r = 1; r <= 40; r++) {
                            if (d(t, r) <= e.getCapacity(r, n, s.MIXED)) return r
                        }
                    }(t, i);
                    if (0 === t.length) return 1;
                    r = t[0]
                } else r = t;
                return function(t, n, r) {
                    for (var i = 1; i <= 40; i++)
                        if (n <= e.getCapacity(i, r, t)) return i
                }(r.mode, r.getLength(), i)
            }, e.getEncodedBits = function(t) {
                if (!a.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
                for (var e = t << 12; r.getBCHDigit(e) - c >= 0;) e ^= 7973 << r.getBCHDigit(e) - c;
                return t << 12 | e
            }
        },
        function(t, e, n) {
            var r = n(710),
                i = r.getBCHDigit(1335);
            e.getEncodedBits = function(t, e) {
                for (var n = t.bit << 3 | e, o = n << 10; r.getBCHDigit(o) - i >= 0;) o ^= 1335 << r.getBCHDigit(o) - i;
                return 21522 ^ (n << 10 | o)
            }
        },
        function(t, e, n) {
            var r = n(711),
                i = n(1068),
                o = n(1069),
                s = n(1070),
                a = n(1071),
                u = n(913),
                c = n(710),
                l = n(1072);

            function d(t) {
                return unescape(encodeURIComponent(t)).length
            }

            function f(t, e, n) {
                for (var r, i = []; null !== (r = t.exec(n));) i.push({
                    data: r[0],
                    index: r.index,
                    mode: e,
                    length: r[0].length
                });
                return i
            }

            function h(t) {
                var e, n, i = f(u.NUMERIC, r.NUMERIC, t),
                    o = f(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
                return c.isKanjiModeEnabled() ? (e = f(u.BYTE, r.BYTE, t), n = f(u.KANJI, r.KANJI, t)) : (e = f(u.BYTE_KANJI, r.BYTE, t), n = []), i.concat(o, e, n).sort((function(t, e) {
                    return t.index - e.index
                })).map((function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                }))
            }

            function p(t, e) {
                switch (e) {
                    case r.NUMERIC:
                        return i.getBitsLength(t);
                    case r.ALPHANUMERIC:
                        return o.getBitsLength(t);
                    case r.KANJI:
                        return a.getBitsLength(t);
                    case r.BYTE:
                        return s.getBitsLength(t)
                }
            }

            function m(t, e) {
                var n, u = r.getBestModeForData(t);
                if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(u));
                switch (n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new i(t);
                    case r.ALPHANUMERIC:
                        return new o(t);
                    case r.KANJI:
                        return new a(t);
                    case r.BYTE:
                        return new s(t)
                }
            }
            e.fromArray = function(t) {
                return t.reduce((function(t, e) {
                    return "string" == typeof e ? t.push(m(e, null)) : e.data && t.push(m(e.data, e.mode)), t
                }), [])
            }, e.fromString = function(t, n) {
                for (var i = function(t, e) {
                        for (var n = {}, i = {
                                start: {}
                            }, o = ["start"], s = 0; s < t.length; s++) {
                            for (var a = t[s], u = [], c = 0; c < a.length; c++) {
                                var l = a[c],
                                    d = "" + s + c;
                                u.push(d), n[d] = {
                                    node: l,
                                    lastCount: 0
                                }, i[d] = {};
                                for (var f = 0; f < o.length; f++) {
                                    var h = o[f];
                                    n[h] && n[h].node.mode === l.mode ? (i[h][d] = p(n[h].lastCount + l.length, l.mode) - p(n[h].lastCount, l.mode), n[h].lastCount += l.length) : (n[h] && (n[h].lastCount = l.length), i[h][d] = p(l.length, l.mode) + 4 + r.getCharCountIndicator(l.mode, e))
                                }
                            }
                            o = u
                        }
                        for (f = 0; f < o.length; f++) i[o[f]].end = 0;
                        return {
                            map: i,
                            table: n
                        }
                    }(function(t) {
                        for (var e = [], n = 0; n < t.length; n++) {
                            var i = t[n];
                            switch (i.mode) {
                                case r.NUMERIC:
                                    e.push([i, {
                                        data: i.data,
                                        mode: r.ALPHANUMERIC,
                                        length: i.length
                                    }, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    e.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: i.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    e.push([i, {
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: d(i.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    e.push([{
                                        data: i.data,
                                        mode: r.BYTE,
                                        length: d(i.data)
                                    }])
                            }
                        }
                        return e
                    }(h(t, c.isKanjiModeEnabled())), n), o = l.find_path(i.map, "start", "end"), s = [], a = 1; a < o.length - 1; a++) s.push(i.table[o[a]].node);
                return e.fromArray(function(t) {
                    return t.reduce((function(t, e) {
                        var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                        return n && n.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t)
                    }), [])
                }(s))
            }, e.rawSplit = function(t) {
                return e.fromArray(h(t, c.isKanjiModeEnabled()))
            }
        },
        function(t, e, n) {
            var r = n(711);

            function i(t) {
                this.mode = r.NUMERIC, this.data = t.toString()
            }
            i.getBitsLength = function(t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(t) {
                var e, n, r;
                for (e = 0; e + 3 <= this.data.length; e += 3) n = this.data.substr(e, 3), r = parseInt(n, 10), t.put(r, 10);
                var i = this.data.length - e;
                i > 0 && (n = this.data.substr(e), r = parseInt(n, 10), t.put(r, 3 * i + 1))
            }, t.exports = i
        },
        function(t, e, n) {
            var r = n(711),
                i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function o(t) {
                this.mode = r.ALPHANUMERIC, this.data = t
            }
            o.getBitsLength = function(t) {
                return 11 * Math.floor(t / 2) + t % 2 * 6
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                var e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    var n = 45 * i.indexOf(this.data[e]);
                    n += i.indexOf(this.data[e + 1]), t.put(n, 11)
                }
                this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6)
            }, t.exports = o
        },
        function(t, e, n) {
            var r = n(723),
                i = n(711);

            function o(t) {
                this.mode = i.BYTE, this.data = r.from(t)
            }
            o.getBitsLength = function(t) {
                return 8 * t
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                for (var e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
            }, t.exports = o
        },
        function(t, e, n) {
            var r = n(711),
                i = n(710);

            function o(t) {
                this.mode = r.KANJI, this.data = t
            }
            o.getBitsLength = function(t) {
                return 13 * t
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                var e;
                for (e = 0; e < this.data.length; e++) {
                    var n = i.toSJIS(this.data[e]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else {
                        if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                        n -= 49472
                    }
                    n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13)
                }
            }, t.exports = o
        },
        function(t, e, n) {
            "use strict";
            var r = {
                single_source_shortest_paths: function(t, e, n) {
                    var i = {},
                        o = {};
                    o[e] = 0;
                    var s, a, u, c, l, d, f, h = r.PriorityQueue.make();
                    for (h.push(e, 0); !h.empty();)
                        for (u in a = (s = h.pop()).value, c = s.cost, l = t[a] || {}) l.hasOwnProperty(u) && (d = c + l[u], f = o[u], (void 0 === o[u] || f > d) && (o[u] = d, h.push(u, d), i[u] = a));
                    if (void 0 !== n && void 0 === o[n]) {
                        var p = ["Could not find a path from ", e, " to ", n, "."].join("");
                        throw new Error(p)
                    }
                    return i
                },
                extract_shortest_path_from_predecessor_list: function(t, e) {
                    for (var n = [], r = e; r;) n.push(r), t[r], r = t[r];
                    return n.reverse(), n
                },
                find_path: function(t, e, n) {
                    var i = r.single_source_shortest_paths(t, e, n);
                    return r.extract_shortest_path_from_predecessor_list(i, n)
                },
                PriorityQueue: {
                    make: function(t) {
                        var e, n = r.PriorityQueue,
                            i = {};
                        for (e in t = t || {}, n) n.hasOwnProperty(e) && (i[e] = n[e]);
                        return i.queue = [], i.sorter = t.sorter || n.default_sorter, i
                    },
                    default_sorter: function(t, e) {
                        return t.cost - e.cost
                    },
                    push: function(t, e) {
                        var n = {
                            value: t,
                            cost: e
                        };
                        this.queue.push(n), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            t.exports = r
        },
        function(t, e, n) {
            var r = n(914);
            e.render = function(t, e, n) {
                var i = n,
                    o = e;
                void 0 !== i || e && e.getContext || (i = e, e = void 0), e || (o = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (t) {
                        throw new Error("You need to specify a canvas element")
                    }
                }()), i = r.getOptions(i);
                var s = r.getImageWidth(t.modules.size, i),
                    a = o.getContext("2d"),
                    u = a.createImageData(s, s);
                return r.qrToImageData(u.data, t, i),
                    function(t, e, n) {
                        t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = n, e.width = n, e.style.height = n + "px", e.style.width = n + "px"
                    }(a, o, s), a.putImageData(u, 0, 0), o
            }, e.renderToDataURL = function(t, n, r) {
                var i = r;
                void 0 !== i || n && n.getContext || (i = n, n = void 0), i || (i = {});
                var o = e.render(t, n, i),
                    s = i.type || "image/png",
                    a = i.rendererOpts || {};
                return o.toDataURL(s, a.quality)
            }
        },
        function(t, e, n) {
            var r = n(914);

            function i(t, e) {
                var n = t.a / 255,
                    r = e + '="' + t.hex + '"';
                return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function o(t, e, n) {
                var r = t + e;
                return void 0 !== n && (r += " " + n), r
            }
            e.render = function(t, e, n) {
                var s = r.getOptions(e),
                    a = t.modules.size,
                    u = t.modules.data,
                    c = a + 2 * s.margin,
                    l = s.color.light.a ? "<path " + i(s.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
                    d = "<path " + i(s.color.dark, "stroke") + ' d="' + function(t, e, n) {
                        for (var r = "", i = 0, s = !1, a = 0, u = 0; u < t.length; u++) {
                            var c = Math.floor(u % e),
                                l = Math.floor(u / e);
                            c || s || (s = !0), t[u] ? (a++, u > 0 && c > 0 && t[u - 1] || (r += s ? o("M", c + n, .5 + l + n) : o("m", i, 0), i = 0, s = !1), c + 1 < e && t[u + 1] || (r += o("h", a), a = 0)) : i++
                        }
                        return r
                    }(u, a, s.margin) + '"/>',
                    f = 'viewBox="0 0 ' + c + " " + c + '"',
                    h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + l + d + "</svg>\n";
                return "function" == typeof n && n(null, h), h
            }
        }, ,
        function(t, e, n) {
            "use strict";
            var r = n(820);
            n.n(r).a
        }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        function(t, e) {
            ! function(t, e) {
                "use strict";
                if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
                else {
                    var n = [];
                    i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.USE_MUTATION_OBSERVER = !0, i.prototype.observe = function(t) {
                        if (!this._observationTargets.some((function(e) {
                                return e.element == t
                            }))) {
                            if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({
                                element: t,
                                entry: null
                            }), this._monitorIntersections(), this._checkForIntersections()
                        }
                    }, i.prototype.unobserve = function(t) {
                        this._observationTargets = this._observationTargets.filter((function(e) {
                            return e.element != t
                        })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                    }, i.prototype.disconnect = function() {
                        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                    }, i.prototype.takeRecords = function() {
                        var t = this._queuedEntries.slice();
                        return this._queuedEntries = [], t
                    }, i.prototype._initThresholds = function(t) {
                        var e = t || [0];
                        return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, n) {
                            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return t !== n[e - 1]
                        }))
                    }, i.prototype._parseRootMargin = function(t) {
                        var e = (t || "0px").split(/\s+/).map((function(t) {
                            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                            if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(e[1]),
                                unit: e[2]
                            }
                        }));
                        return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                    }, i.prototype._monitorIntersections = function() {
                        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(t, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))))
                    }, i.prototype._unmonitorIntersections = function() {
                        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                    }, i.prototype._checkForIntersections = function() {
                        var e = this._rootIsInDom(),
                            n = e ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                        this._observationTargets.forEach((function(i) {
                            var o = i.element,
                                s = a(o),
                                u = this._rootContainsTarget(o),
                                c = i.entry,
                                l = e && u && this._computeTargetAndRootIntersection(o, n),
                                d = i.entry = new r({
                                    time: t.performance && performance.now && performance.now(),
                                    target: o,
                                    boundingClientRect: s,
                                    rootBounds: n,
                                    intersectionRect: l
                                });
                            c ? e && u ? this._hasCrossedThreshold(c, d) && this._queuedEntries.push(d) : c && c.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
                        }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }, i.prototype._computeTargetAndRootIntersection = function(n, r) {
                        if ("none" != t.getComputedStyle(n).display) {
                            for (var i, o, s, u, l, d, f, h, p = a(n), m = c(n), v = !1; !v;) {
                                var g = null,
                                    b = 1 == m.nodeType ? t.getComputedStyle(m) : {};
                                if ("none" == b.display) return;
                                if (m == this.root || m == e ? (v = !0, g = r) : m != e.body && m != e.documentElement && "visible" != b.overflow && (g = a(m)), g && (i = g, o = p, s = void 0, u = void 0, l = void 0, d = void 0, f = void 0, h = void 0, s = Math.max(i.top, o.top), u = Math.min(i.bottom, o.bottom), l = Math.max(i.left, o.left), d = Math.min(i.right, o.right), h = u - s, !(p = (f = d - l) >= 0 && h >= 0 && {
                                        top: s,
                                        bottom: u,
                                        left: l,
                                        right: d,
                                        width: f,
                                        height: h
                                    }))) break;
                                m = c(m)
                            }
                            return p
                        }
                    }, i.prototype._getRootRect = function() {
                        var t;
                        if (this.root) t = a(this.root);
                        else {
                            var n = e.documentElement,
                                r = e.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || r.clientWidth,
                                width: n.clientWidth || r.clientWidth,
                                bottom: n.clientHeight || r.clientHeight,
                                height: n.clientHeight || r.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(t)
                    }, i.prototype._expandRectByRootMargin = function(t) {
                        var e = this._rootMarginValues.map((function(e, n) {
                                return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                            })),
                            n = {
                                top: t.top - e[0],
                                right: t.right + e[1],
                                bottom: t.bottom + e[2],
                                left: t.left - e[3]
                            };
                        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                    }, i.prototype._hasCrossedThreshold = function(t, e) {
                        var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                            r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                        if (n !== r)
                            for (var i = 0; i < this.thresholds.length; i++) {
                                var o = this.thresholds[i];
                                if (o == n || o == r || o < n != o < r) return !0
                            }
                    }, i.prototype._rootIsInDom = function() {
                        return !this.root || u(e, this.root)
                    }, i.prototype._rootContainsTarget = function(t) {
                        return u(this.root || e, t)
                    }, i.prototype._registerInstance = function() {
                        n.indexOf(this) < 0 && n.push(this)
                    }, i.prototype._unregisterInstance = function() {
                        var t = n.indexOf(this); - 1 != t && n.splice(t, 1)
                    }, t.IntersectionObserver = i, t.IntersectionObserverEntry = r
                }

                function r(t) {
                    this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }, this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        n = e.width * e.height,
                        r = this.intersectionRect,
                        i = r.width * r.height;
                    this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function i(t, e) {
                    var n, r, i, o = e || {};
                    if ("function" != typeof t) throw new Error("callback must be a function");
                    if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
                        i || (i = setTimeout((function() {
                            n(), i = null
                        }), r))
                    }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
                        return t.value + t.unit
                    })).join(" ")
                }

                function o(t, e, n, r) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
                }

                function s(t, e, n, r) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
                }

                function a(t) {
                    var e;
                    try {
                        e = t.getBoundingClientRect()
                    } catch (t) {}
                    return e ? (e.width && e.height || (e = {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    }), e) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function u(t, e) {
                    for (var n = e; n;) {
                        if (n == t) return !0;
                        n = c(n)
                    }
                    return !1
                }

                function c(t) {
                    var e = t.parentNode;
                    return e && 11 == e.nodeType && e.host ? e.host : e
                }
            }(window, document)
        }
    ]
]);