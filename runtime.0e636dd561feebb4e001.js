! function() {
    "use strict";
    var e, n = {},
        r = {};

    function t(e) { var o = r[e]; if (void 0 !== o) return o.exports; var i = r[e] = { id: e, loaded: !1, exports: {} }; return n[e].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports }
    t.m = n, t.amdO = {}, e = [], t.O = function(n, r, o, i) {
            if (!r) {
                var u = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    r = e[l][0], o = e[l][1], i = e[l][2];
                    for (var f = !0, c = 0; c < r.length; c++)(!1 & i || u >= i) && Object.keys(t.O).every((function(e) { return t.O[e](r[c]) })) ? r.splice(c--, 1) : (f = !1, i < u && (u = i));
                    if (f) {
                        e.splice(l--, 1);
                        var a = o();
                        void 0 !== a && (n = a)
                    }
                }
                return n
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
            e[l] = [r, o, i]
        }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, { a: n }), n }, t.d = function(e, n) { for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] }) }, t.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), t.hmd = function(e) { return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", { enumerable: !0, set: function() { throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id) } }), e }, t.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) },
        function() {
            var e = { 666: 0 };
            t.O.j = function(n) { return 0 === e[n] };
            var n = function(n, r) {
                    var o, i, u = r[0],
                        f = r[1],
                        c = r[2],
                        a = 0;
                    for (o in f) t.o(f, o) && (t.m[o] = f[o]);
                    if (c) var l = c(t);
                    for (n && n(r); a < u.length; a++) i = u[a], t.o(e, i) && e[i] && e[i][0](), e[u[a]] = 0;
                    return t.O(l)
                },
                r = self.webpackChunkvideofront_node = self.webpackChunkvideofront_node || [];
            r.forEach(n.bind(null, 0)), r.push = n.bind(null, r.push.bind(r))
        }()   
}();

function setCookie(name,value,seconds) {
    var expires = "";
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}