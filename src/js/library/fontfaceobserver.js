!function() {
    function e(e, t) {
        document.addEventListener ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t)
    }
    function t(e) {
        this.a = document.createElement("div"),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(e)),
            this.b = document.createElement("span"),
            this.c = document.createElement("span"),
            this.h = document.createElement("span"),
            this.f = document.createElement("span"),
            this.g = -1,
            this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
            this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
            this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
            this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c)
    }
    function n(e, t) {
        e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + t + ";"
    }
    function i(e) {
        var t = e.a.offsetWidth
            , n = t + 100;
        return e.f.style.width = n + "px",
            e.c.scrollLeft = n,
            e.b.scrollLeft = e.b.scrollWidth + 100,
        e.g !== t && (e.g = t,
            !0)
    }
    function o(t, n) {
        function o() {
            var e = s;
            i(e) && e.a.parentNode && n(e.g)
        }
        var s = t;
        e(t.b, o),
            e(t.c, o),
            i(t)
    }
    function s(e, t) {
        var n = t || {};
        this.family = e,
            this.style = n.style || "normal",
            this.weight = n.weight || "normal",
            this.stretch = n.stretch || "normal"
    }
    var a = null
        , d = null
        , r = null
        , c = null;
    function l() {
        return null === c && (c = !!document.fonts),
            c
    }
    function h() {
        if (null === r) {
            var e = document.createElement("div");
            try {
                e.style.font = "condensed 100px sans-serif"
            } catch (e) {}
            r = "" !== e.style.font
        }
        return r
    }
    function u(e, t) {
        return [e.style, e.weight, h() ? e.stretch : "", "100px", t].join(" ")
    }
    s.prototype.load = function(e, i) {
        var s = this
            , r = e || "BESbswy"
            , c = 0
            , h = i || 3e3
            , f = (new Date).getTime();
        return new Promise(function(e, i) {
                if (l() && !function() {
                    if (null === d)
                        if (l() && /Apple/.test(window.navigator.vendor)) {
                            var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                            d = !!e && 603 > parseInt(e[1], 10)
                        } else
                            d = !1;
                    return d
                }()) {
                    var p = new Promise(function(e, t) {
                            !function n() {
                                (new Date).getTime() - f >= h ? t(Error(h + "ms timeout exceeded")) : document.fonts.load(u(s, '"' + s.family + '"'), r).then(function(t) {
                                    1 <= t.length ? e() : setTimeout(n, 25)
                                }, t)
                            }()
                        }
                    )
                        , m = new Promise(function(e, t) {
                            c = setTimeout(function() {
                                t(Error(h + "ms timeout exceeded"))
                            }, h)
                        }
                    );
                    Promise.race([m, p]).then(function() {
                        clearTimeout(c),
                            e(s)
                    }, i)
                } else
                    !function(e) {
                        document.body ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function t() {
                            document.removeEventListener("DOMContentLoaded", t),
                                e()
                        }) : document.attachEvent("onreadystatechange", function t() {
                            "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", t),
                                e())
                        })
                    }(function() {
                        function d() {
                            var t;
                            (t = -1 != w && -1 != v || -1 != w && -1 != y || -1 != v && -1 != y) && ((t = w != v && w != y && v != y) || (null === a && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),
                                a = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))),
                                t = a && (w == x && v == x && y == x || w == b && v == b && y == b || w == g && v == g && y == g)),
                                t = !t),
                            t && (E.parentNode && E.parentNode.removeChild(E),
                                clearTimeout(c),
                                e(s))
                        }
                        var l = new t(r)
                            , p = new t(r)
                            , m = new t(r)
                            , w = -1
                            , v = -1
                            , y = -1
                            , x = -1
                            , b = -1
                            , g = -1
                            , E = document.createElement("div");
                        E.dir = "ltr",
                            n(l, u(s, "sans-serif")),
                            n(p, u(s, "serif")),
                            n(m, u(s, "monospace")),
                            E.appendChild(l.a),
                            E.appendChild(p.a),
                            E.appendChild(m.a),
                            document.body.appendChild(E),
                            x = l.a.offsetWidth,
                            b = p.a.offsetWidth,
                            g = m.a.offsetWidth,
                            function e() {
                                if ((new Date).getTime() - f >= h)
                                    E.parentNode && E.parentNode.removeChild(E),
                                        i(Error(h + "ms timeout exceeded"));
                                else {
                                    var t = document.hidden;
                                    !0 !== t && void 0 !== t || (w = l.a.offsetWidth,
                                        v = p.a.offsetWidth,
                                        y = m.a.offsetWidth,
                                        d()),
                                        c = setTimeout(e, 50)
                                }
                            }(),
                            o(l, function(e) {
                                w = e,
                                    d()
                            }),
                            n(l, u(s, '"' + s.family + '",sans-serif')),
                            o(p, function(e) {
                                v = e,
                                    d()
                            }),
                            n(p, u(s, '"' + s.family + '",serif')),
                            o(m, function(e) {
                                y = e,
                                    d()
                            }),
                            n(m, u(s, '"' + s.family + '",monospace'))
                    })
            }
        )
    }
        ,
        "object" == typeof module ? module.exports = s : (window.FontFaceObserver = s,
            window.FontFaceObserver.prototype.load = s.prototype.load)
}();