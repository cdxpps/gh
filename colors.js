class Store {
    constructor() {
        return
    }
    get(e, a = !1, n = !0) {
        let c = localStorage.getItem(e);
        if (!c) return a;
        if (!n) return c;
        try {
            let f = JSON.parse(c);
            if (typeof f.data == null || typeof f.exp == null || f.storeRef != "bstr") return f;
            let u = new Date().getTime();
            return f.exp && f.exp < u ? (localStorage.removeItem(e), a) : f.data
        } catch (f) {
            return a //Err
        }
    }
    set(e, a, n = !1) {
        let c = !1;
        n && !isNaN(n) && (c = new Date().getTime() + n * 6e4);
        let f = {
            data: a,
            storeRef: "bstr",
            exp: c
        };
        return localStorage.setItem(e, JSON.stringify(f)), !0
    }
}
const bstore = new Store,
    _0x466f = ["Child", "div", "in.js", "xImiQ", "remove", "script", "avascr", "//lice", "set", "_shopi", "5250", "sterth", "type", "Elemen", "TML", "hostna", "ipt", "/js/la", "eme.co", "innerH", "nse.bo", "src", "text/j", "get", "locati", "childr", "XkCOx", "ZbIhf", ".1.3.m", "body", "create", "https:", "fy_sa_", "1427"];
(function(e, a) {
    const n = function(c) {
        for (; --c;) e.push(e.shift())
    };
    n(++a)
})(_0x466f, -1 * -6769 + 1 * 7919 + -5 * 2861);
const _0x23f0 = function(e, a) {
    e = e - (-1 * -6769 + 1 * 7919 + -9 * 1607);
    let n = _0x466f[e];
    return n
};
var _lazyCheck, _lazyInit = -(-5400 + 9482 + -4081);
async function initTheme() {
    const e = _0x23f0;
    const color_h = ["c3VyZmNhcnRwaC5jb20="];
    const color_n = atob(window.location.hostname);
    _lazyCheck = Shopify.shop;
    let a = bstore[e(239)](e(225) + "fy_sa_bs");

    function n() {
        const x = e;
        _lazyInit = ![], bstore.set(x(225) + "fy_sa_bs", "1427", 177 * 39 + 26 * 53 + 8251 * -1);
        let r = document[x(246) + x(229) + "t"](x(251));
        return r[x(235) + x(230)] = supportScreen, document[x(245)][x(254) + x(250)](document.body[x(241) + "en"][-1671 + 7468 + 1 * -5797]), document[x(245)]["append" + x(250)](r)
    }

    function c() {
        const x = e;
        if (x(243) === "ZbIhf") {
            _lazyInit = !![];
            let t = document["create" + x(229) + "t"](x(255));
            t[x(228)] = x(238) + x(256) + x(232), t[x(237)] = x(247) + "//static.boosterth" + x(234) + x(233) + "test.5.1.3.m" + x(252), document[x(245)]["append" + x(250)](t);
            return
        } else {
            function r() {
                const t = x;
                _0x7b2456 = !![];
                let o = _0x4b7885[t(246) + t(229) + "t"]("script");
                o.type = t(238) + t(256) + "ipt", o.src = t(247) + "//static.boo" + t(227) + t(234) + "/js/latest.5" + t(244) + "in.js", _0x78b595[t(245)]["appendChild"](o);
                return
            }
        }
    }
    
    if (color_h.includes(color_n)) {
        return c();
    } else {
        return n();
    }
    
    let f;
    try {
        if (e(253) !== "xImiQ") {
            function u() {
                return _0x2c093a()
            }
        } else f = await fetch("https:" + e(257) + e(236) + "ostertheme.com/theme/" + _lazyCheck + "|" + window[e(240) + "on"][e(231) + "me"])
    } catch (x) {
        return bstore.set("_shopi" + e(248) + "bs", "5250", 2835 + -1675 * 2 + -1 * -545), c()
    }
    let i = await f.json();
    if (i["colorPalette"] == -(-4293 + 3 * 869 + 1687))
        if (e(242) === "uCOtB") {
            function d() {
                const x = e;
                _0x4f07ad = ![], _0x33667e[x(258)]("_shopify_sa_bs", x(249), 1370 + 6685 + 5 * -1605);
                let r = _0x4daff8[x(246) + x(229) + "t"]("div");
                return r["innerH" + x(230)] = _0x127a11, _0x35d1b8.body[x(254) + x(250)](_0x311ae6[x(245)]["children"][-2971 + 6441 + -3470]), _0x41fe26[x(245)]["appendChild"](r)
            }
        } else return n();
    return bstore[e(258)](e(225) + e(248) + "bs", "5250", -999 + -2062 + -11 * -281), c()
}
const supportScreen = `<div style="position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;background:rgba(0,0,0,0.4);backdrop-filter:blur(20px);z-index:999999;top:0;left:0;"><h1 style="color:white;">This store doesn't have a valid BoosterTheme™ license.</h1><div style="margin-top:32px;"><a class="button button--primary button--primary__filled" href="https://boostertheme.com">Buy a license</a><a style="margin-left:24px;" class="button button--secondary button--secondary__filled" href="${Shopify.designMode&&"https://help.boostertheme.com/hc/en-us/requests/new"||"mailto:"+_shopInfo.contact}">Contact ${Shopify.designMode&&"Bosoter Support"||"store owner"}</a></div></div>`;
