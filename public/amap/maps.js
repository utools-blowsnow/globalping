(function (config) {
    var ba = navigator.userAgent.toLowerCase(), ca = window, fa = document, ga = fa.documentElement;

    function ma(a) {
        return -1 !== ba.indexOf(a)
    }

    var na = /([a-z0-9]*\d+[a-z0-9]*)/;

    function pa() {
        var a = qa;
        if (!a) return null;
        var a = a.toLowerCase(), b = null;
        if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
        a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
        if (0 <= a.indexOf("intel")) {
            b = ["Intel"];
            0 <= a.indexOf("mobile") && b.push("Mobile");
            (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
            if (0 <= a.indexOf("haswell")) b.push("Haswell"); else if (0 <= a.indexOf("ivy")) b.push("HD 4000"); else if (0 <= a.indexOf("sandy")) b.push("HD 3000"); else if (0 <= a.indexOf("ironlake")) b.push("HD");
            else {
                0 <= a.indexOf("hd") && b.push("HD");
                var c = a.match(na);
                c && c[1] && b.push(c[1].toUpperCase())
            }
            return b = b.join(" ")
        }
        return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
            b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(na)) && c[1] && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") &&
        b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(na)) && c[1] && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
    }

    var ra = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
        sa = "ActiveXObject" in ca,
        va = "devicePixelRatio" in ca && 1 < ca.devicePixelRatio || sa && "matchMedia" in ca && ca.matchMedia("(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches,
        wa = ma("windows nt"), xa = -1 !== ba.search(/windows nt [1-5]\./),
        ya = -1 !== ba.search(/windows nt 5\.[12]/), za = xa && !ya;
    ma("windows nt 10");
    var Da = ma("windows phone"), Ea = ma("macintosh"), Fa = ma("Mb2345Browser"),
        Ga = ma("ipad;") || ma("ipad "), Ja = Ga && va, Ka = ma("ipod touch;"),
        La = ma("iphone;") || ma("iphone "), Ma = La || Ga || Ka,
        Na = Ma && -1 !== ba.search(/ os [456]_/);
    Ma && ba.search(/ os [4-8]_/);
    Ma && ba.search(/ os [78]_/);
    Ma && ma("os 8_");
    var Qa = Ma && ma("os 10_"), Ra = Ma && ma("os 15_"), Sa = Ma && ma("os 16_"),
        Ta = ma("android"), Ua = 0;
    Ta && (Ua = parseInt(ba.split("android ")[1]) || 0);
    var Va = Ta && 4 > Ua;
    Ta && 5 <= Ua || ba.search(/android 4.4/);
    var Wa = Ta ? "android" : Ma ? "ios" : wa ? "windows" : Ea ? "mac" : "other",
        Xa = sa && !ca.XMLHttpRequest, Ya = sa && !fa.querySelector,
        Za = sa && !fa.addEventListener, $a = sa && ma("msie 9"), ab = sa && ma("msie 10"),
        bb = sa && ma("rv:11"), cb = Za || $a, db = ma("edge"), eb = ma("qtweb"),
        fb = ma("ucbrowser"), gb = ma("alipay") || Ta && fb, hb = ma("miuibrowser"),
        ib = ma("micromessenger"), jb = ma("mqqbrowser"), kb = ma("baidubrowser"),
        chrome = (ma("chrome") || ma("crios")) && !ib && !kb && !jb && !db && !hb,
        lb = chrome && ma("chromium"),
        mb = chrome && !lb && (30 < parseInt(ba.split("chrome/")[1]) ||
            30 < parseInt(ba.split("crios/")[1])), nb = ma("firefox"),
        ob = nb && 27 < parseInt(ba.split("firefox/")[1]),
        pb = (Ea || Ma) && ma("safari") && ma("version/"),
        qb = Ea && pb && 7 < parseInt(ba.split("version/")[1]), rb = Ma && ma("aliapp"),
        sb = Ma && (!jb && !fb && !ib && !chrome && !nb && !pb || rb && !fb),
        tb = Ta || Ma || Da || ma("mobile"), ub = "ontouchstart" in fa,
        vb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints,
        wb = ca.navigator && !!ca.navigator.maxTouchPoints, xb = !ub && (wb || vb), yb = ub || xb,
        zb = function () {
            if (!tb) return ca.devicePixelRatio ||
                1;
            var a = document.getElementsByTagName("meta");
            if (window.parent && window.parent !== window) try {
                if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta"); else return 1
            } catch (b) {
                return 1
            }
            for (var c = a.length - 1; 0 <= c; c -= 1) if ("viewport" === a[c].name) {
                var c = a[c].content, d;
                -1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
                a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
                c = -1 !== c.indexOf("maximum-scale") ?
                    parseFloat(c.split("maximum-scale=")[1]) : Infinity;
                if (d) {
                    if (c >= a) return d > c ? c : d < a ? a : d
                } else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
                console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
                return null
            }
        }(), Ab = va && (!tb || !!zb && 1 <= zb), Bb = sa && "transition" in ga.style,
        Cb = !!fa.createElementNS && !!fa.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        Db = fa.createElement("canvas"), Eb = !(!Db || !Db.getContext),
        Fb = window.URL || window.webkitURL,
        Gb = !0 !== window.disableWorker && !sa && !db && !(fb &&
            Ta) && window.Worker && Fb && Fb.createObjectURL && window.Blob, Jb = "", qa = "",
        Kb = 0, Lb = window.forceWebGL ? {alpha: !0, antialias: !0, depth: !0} : {
            alpha: !0,
            antialias: !0,
            depth: !0,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !0,
            stencil: !0
        }, Mb = function () {
            if (!window.forceWebGL && (!Eb || !Gb || sb && rb && !fb)) return !1;
            for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
                try {
                    b = Db.getContext(a[c], Lb)
                } catch (d) {
                }
                if (b) {
                    if (b.drawingBufferWidth !== Db.width || b.drawingBufferHeight !== Db.height) break;
                    if (window.forceWebGL) return Jb =
                        a[c], Kb = Infinity, !0;
                    if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension) break;
                    Kb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
                    var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
                    if (!e) break;
                    Kb = Math.min(Kb, e[0], e[1]);
                    pb && "mac" === Wa && (Kb = Math.min(Kb, 4096));
                    e = Math.max(screen.width, screen.height);
                    Ab && (e *= Math.min(2, window.devicePixelRatio || 1));
                    if (e > Kb) break;
                    if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break;
                    qa = b.getExtension("WEBGL_debug_renderer_info") ?
                        b.getParameter(37446) : null;
                    if ((b = pa()) && -1 !== ra.indexOf(b)) break;
                    Jb = a[c];
                    return !0
                }
            }
            return !1
        }(), Nb = Mb && (mb || ob || qb) && ("mac" === Wa || "windows" === Wa) && !tb,
        Ob = !window.Uint8Array || !Eb || eb || Da || tb && nb || $a || Na || Ja || Ka || Va || ma("gt-n710") || za,
        Pb = !Ob && !Nb, Qb = Nb ? "vw" : Ob ? "d" : Pb ? "dv" : "v", Rb = ma("webkit"),
        Sb = "WebKitCSSMatrix" in ca && "m11" in new window.WebKitCSSMatrix,
        Tb = "MozPerspective" in ga.style, Ub = "OTransition" in ga.style,
        Vb = Bb || Sb || Tb || Ub, Wb = void 0 !== config[8] ? config[8] : !0,
        Xb = void 0 !== config[9] ? config[9] : !0, Yb =
            void 0 !== config[10] ? config[10] : !0, Zb = void 0 !== config[11] ? config[11] : !0,
        $b = void 0 !== config[12] ? config[12] : null, ac = !Cb && tb && Eb, bc = !0;
    try {
        if ("undefined" === typeof ca.localStorage) bc = !1; else {
            var cc = (new Date).getTime() + "";
            ca.localStorage.setItem("_test", cc);
            ca.localStorage.getItem("_test") !== cc && (bc = !1);
            ca.localStorage.removeItem("_test")
        }
    } catch (dc) {
        bc = !1
    }
    var ec = parseInt(ba.split("chrome/")[1]), fc = Wb && Eb;
    config.l = {
        Zra: Ga,
        $ra: La,
        size: La ? 100 : Ta ? 200 : 500,
        pz: Ea,
        gAa: wa,
        GD: Ma,
        mFa: Qa,
        BJ: Ra,
        CJ: Sa,
        Zl: Ta,
        ima: Va,
        P3: gb,
        Fz: Wa,
        XH: kb,
        lwa: jb,
        CE: pb,
        H$: ib,
        Gs: sa,
        Ai: Xa,
        wv: Ya,
        n5: $a,
        m5: ab,
        Ve: Za,
        p5: cb,
        csa: bb,
        ypa: db,
        fsa: sa && !bb,
        dua: Fa,
        Kv: bc,
        Oi: fc && bc && Zb && !tb && chrome,
        mf: $b,
        geolocation: tb || sa && !Za || db,
        vza: fb,
        tL: fb && !chrome,
        chrome: chrome,
        n3: !0,
        eR: nb,
        ba: tb,
        qua: tb && Rb,
        L6: tb && Sb,
        pua: tb && ca.opera,
        Kc: va,
        BL: zb,
        ja: Ab,
        Uf: yb,
        N6: vb,
        JT: wb,
        U7: xb,
        yna: chrome && 57 <= ec,
        zna: !tb && chrome && 64 <= ec,
        G$: Rb,
        dsa: Bb,
        FL: Sb,
        pqa: Tb,
        iva: Ub,
        TH: Vb,
        Fn: Cb,
        kl: Eb,
        JS: Gb,
        lA: Yb,
        Nf: Nb,
        D$: Jb,
        E$: Lb,
        WR: qa,
        bua: Kb,
        HAa: !1,
        Yp: Wb && !Ob,
        X1: Wb ? Qb : "d",
        t2: Wb ? Mb : !1,
        eL: fc,
        sp: Wb && Mb,
        yFa: Wb && (!Ob || Mb),
        xq: Xb && !!ca.WebSocket && !kb,
        jGa: ac,
        rva: Eb || ac ? "c" : "d"
    };
    var gc = config;
    config = void 0;
    var hc = {
        overlay: ["style"],
        "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
        "AMap.IndoorMap3D": ["Map3D"],
        "AMap.MarkerList": ["AMap.TplUtils"],
        Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer", "rbush"],
        "AMap.Heatmap": ["AMap.CustomLayer"],
        "AMap.DistrictLayer": ["MVT"],
        vectorForeign: ["gridmap", "MVT"],
        "AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"],
        "AMap.LabelsLayer": ["rbush", "promise"]
    };
    window.AMap ? (window.AMap.version = "1698916239216", window.AMap.xL = {
        yM: function (a) {
            a(gc)
        }
    }) : window.AMap = {
        version: "1698916239216", xL: {
            yM: function (a) {
                a(gc)
            }
        }
    };
    gc.Fk = "1698916239216";
    gc.Tu = hc;
    for (var ic = document.head || document.getElementsByTagName("head")[0], jc = '.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layers canvas{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:85px;height:16px;bottom:.1px;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1.5px;left:4px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{overflow:hidden;position:absolute;background-image:url(http://webapi.amap.com/images/arrows.png)}.bottom-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:center 12px;top:100%;margin-top:-9px;left:50%;margin-left:-10px}.bottom-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -46px;top:100%;margin-top:-9px}.bottom-right .amap-info-sharp-old{height:12px;width:13px;top:-1px;background-position:-56px -46px;left:100%;margin-left:-13px;top:100%;margin-top:-9px}.middle-left .amap-info-sharp-old{height:20px;width:12px;background-position:left;top:50%;margin-top:-10px;margin-left:-11px}.center .amap-info-sharp-old{display:none}.middle-right .amap-info-sharp-old{height:20px;margin-right:0;width:12px;background-position:right;left:100%;margin-left:-9px;top:50%;margin-top:-10px}.top-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:top;top:0;margin-top:-3px;left:50%;margin-left:-10px}.top-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -3px;top:0;margin-top:-3px}.top-right .amap-info-sharp-old{height:12px;width:13px;background-position:-56px -3px;left:100%;margin-left:-13px;top:0;margin-top:-3px}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(2px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.5)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}.amap-info-content-ie8{border:1px solid #9c9c9c}'.replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" +
        gc[2].split(",")[0] + "/"), kc = null, lc = 0, mc = ic.childNodes.length; lc < mc; lc++) if (1 === ic.childNodes[lc].nodeType) {
        kc = ic.childNodes[lc];
        break
    }
    if (jc) if (ic) {
        var nc = document.createElement("style");
        nc.setAttribute("type", "text/css");
        nc.setAttribute("class", "AMap.style");
        nc.styleSheet ? nc.styleSheet.cssText = jc : nc.innerHTML = jc;
        kc ? ic.insertBefore(nc, kc) : ic.appendChild(nc)
    } else document.write("<style type='text/css'>" + jc + "</style>");
    var g = g || {Ca: {Ke: 0, mr: [], Gj: {}}}, z = {q: {}, control: {}, B: {}};
    g.VDa = function (a) {
        var b = Function;
        return function () {
            return (new b("return " + a))()
        }
    }();
    g.CLASS_NAME = "AMap";
    g.c = g.BuryPoint = {};
    g.c.add = g.BuryPoint.add = function (a, b, c) {
        a.A5 || a.C || !(a = a.CLASS_NAME) || (a = a.replace("AMap.", ""), g.BA.np(a, b, c))
    };
    var oc = {lang: 1, baseRender: 1, overlayRender: 1, viewMode: 1};
    g.c.ya = g.BuryPoint.addOptions = function (a, b) {
        if (!a.kva) if (b && (b.innerLayer || b.innerOverlay)) a.A5 = !0; else {
            a.kva = !0;
            var c = a.CLASS_NAME;
            if (c) {
                c = c.replace("AMap.", "");
                g.BA.np(c);
                b = b || {};
                for (var d in b) b.hasOwnProperty(d) && ("Map" === c && d in oc ? g.BA.np(c, d, b[d]) : g.BA.np(c, d))
            }
        }
    };
    g.da = function () {
    };
    g.da.extend = g.da.extend = function (a) {
        function b() {
        }

        function c() {
            var a = this.initialize || this.A;
            a && a.apply(this, arguments);
            if (!d && this.Ni) {
                a = document.createElement("style");
                a.setAttribute("type", "text/css");
                this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
                this.Ni = this.Ni.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.o.Hb + "/");
                a.styleSheet ? a.styleSheet.cssText = this.Ni : a.innerHTML = this.Ni;
                for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b.childNodes.length; e < f; e++) if (1 ===
                    b.childNodes[e].nodeType) {
                    c = b.childNodes[e];
                    break
                }
                c ? b.insertBefore(a, c) : b.appendChild(a)
            }
            d = !0
        }

        var d = !1;
        b.prototype = this.prototype;
        var e = new b;
        e.constructor = c;
        c.prototype = e;
        c.prototype.Dh = c.prototype["super"] = function (a) {
            return a.callee.ma.apply(this, a)
        };
        for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
        a.y9 && (g.extend(c, a.y9), a.y9 = null);
        a.ka && (g.extend.apply(null, [e].concat(a.ka)), a.ka = null);
        a.w && e.w && (a.w = g.extend({}, e.w, a.w));
        var h = e.constructor.Csa, k = {};
        if (void 0 !== h) for (f in h) h.hasOwnProperty(f) &&
        (k[h[f]] = f);
        for (f in a) if (Object.prototype.hasOwnProperty.call(a, f)) {
            var l = f, m = f;
            h && k[f] && (m = k[f]);
            "function" === typeof a[l] && "function" === typeof e[m] && (a[l].ma = e[m])
        }
        g.extend(e, a);
        a.toString && (e.toString = a.toString);
        c.cd = this.prototype;
        return c
    };
    g.da.Ib = g.da.include = function (a) {
        g.extend(this.prototype, a)
    };
    g.extend = function (a) {
        var b = Array.prototype.slice.call(arguments, 1), c, d, e, f;
        d = 0;
        for (e = b.length; d < e; d += 1) if (f = b[d] || {}, Object.assign) Object.assign(a, f); else for (c in f) Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
        return a
    };
    g.da.Yb = function (a) {
        for (var b in a) if (a.hasOwnProperty(b)) {
            var c = a[b];
            if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]); else for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
        }
    };
    g.BA = {
        Gj: {}, getKey: function (a, b) {
            a = a || "";
            return void 0 !== b && a ? a + "@" + b : a
        }, np: function (a, b, c) {
            this.Gj[a] || (this.Gj[a] = {});
            b = this.getKey(b, c);
            void 0 == this.Gj[a][b] && (this.Gj[a][b] = 0)
        }, send: function () {
            var a = [], b;
            for (b in this.Gj) if (this.Gj.hasOwnProperty(b)) {
                var c = this.Gj[b], d = [], e;
                for (e in c) c.hasOwnProperty(e) && 0 == c[e] && (d.push(e), c[e] = 1);
                d.length && a.push(b + "~" + d.join(","))
            }
            a.length && (a = ["type=nfl", "k=" + g.o.key, "m=" + (g.l.ba ? 1 : 0), "pf=" + g.l.Fz, "v=" + g.o.Xl, "branch=JSAPI", "log=" + a.join("!")], a = g.o.Cc + "://webapi.amap.com/count?" +
                a.join("&"), new g.kb.Ab(a))
        }
    };
    setInterval(function () {
        g.BA.send()
    }, 1E4);
    g.va = {
        h: function (a, b, c, d, e) {
            if (this.we(a, b, c || this)) return this;
            var f = this.nf = this.nf || {};
            f[a] = f[a] || [];
            e ? f[a].unshift({yb: b, cf: c || this, Dj: d}) : f[a].push({
                yb: b,
                cf: c || this,
                Dj: d
            });
            return this
        }, we: function (a, b, c) {
            var d = this.nf;
            if (b && c) {
                if (d && a in d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (d[a][e].yb === b && d[a][e].cf === c) return !0;
                return !1
            }
            return d && a in d && d[a] && 0 < d[a].length
        }, G: function (a, b, c) {
            if (!this.we(a)) return this;
            var d = this.nf;
            if (d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (!(d[a][e].yb !== b && "mv" !==
                b || c && d[a][e].cf !== c)) {
                d[a].splice(e, 1);
                d[a].length || (d[a] = null);
                break
            }
            return this
        }, fK: function (a, b) {
            if (!this.we(a)) return this;
            var c = this.nf;
            if (c && c[a]) for (var d = 0; d < c[a].length; d += 1) if (!b || c[a][d].cf === b) {
                c[a].splice(d, 1);
                c[a].length || (c[a] = null);
                break
            }
            return this
        }, r: function (a, b) {
            if (!this.we(a)) return this;
            var c = {type: a};
            void 0 !== b && (b instanceof Array ? (c = b.slice(0), c.type = a) : "string" === typeof b || "number" === typeof b || "boolean" === typeof b ? c.value = b : g.a.HJ(b) ? c.value = b : c = g.extend(c, b));
            for (var d =
                [].concat(this.nf[a]), e = 0; e < d.length; e += 1) d[e].yb && (d[e].yb.call(d[e].cf || this, c), d[e] && d[e].Dj && this.nf[a] && this.nf[a].splice(e, 1));
            return this
        }, ui: function (a) {
            a ? this.nf && this.nf[a] && (this.nf[a] = null) : this.nf = null;
            return this
        }
    };
    g.va.on || (g.va.on = g.va.h);
    g.va.off || (g.va.off = g.va.G);
    g.va.emit || (g.va.emit = g.va.r);
    g.$e = {
        set: function (a, b, c) {
            var d = this.Il;
            if (d && d[a]) {
                var d = d[a], e = "set" + this.M4(a);
                if (d[e]) {
                    var f = !1;
                    !0 == d.C ? f = !0 : d.C = !0;
                    d[e](b, c);
                    f || (d.C = !1);
                    c || this.EK(a, b)
                } else d.set(a, b, c)
            } else (this.De = this.De || {})[a] = b, c || this.EK(a, b)
        }, M4: function () {
            var a = {};
            return function (b) {
                a[b] || (a[b] = b.charAt(0).toUpperCase() + b.substr(1));
                return a[b]
            }
        }(), get: function (a, b, c) {
            var d, e = this.Il;
            d = "get" + this.M4(a);
            if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.C ? a = !0 : c.C = !0, b = c[d](b), a || (c.C = !1), b) : c.get(a, b);
            if (!c && this[d]) return a =
                !1, !0 == this.C ? a = !0 : this.C = !0, b = this[d](b), a || (this.C = !1), b;
            if (this.De && this.De.hasOwnProperty(a)) return this.De[a]
        }, X: function (a, b, c) {
            this.Il || (this.Il = {});
            this.Il[a] !== b && (b.h(a, function (b) {
                this.EK(a, b)
            }, this), this.Il[a] = b, c || this.EK(a))
        }, bf: function (a, b, c) {
            for (var d = 0; d < a.length; d += 1) this.X(a[d], b, !c)
        }, yl: function (a) {
            this.Il && this.Il[a] && (this.Il[a].G(a, "mv", this), this.Il[a] = void 0)
        }, zl: function () {
            if (this.Il) for (var a in this.Il) this.Il.hasOwnProperty(a) && this.yl(a)
        }, EK: function (a, b) {
            var c = a + "Changed";
            if (this[c]) this[c](b);
            this.r(a, b)
        }, CFa: function (a, b, c) {
            var d = new (g.da.extend({ka: [g.va, g.$e]}));
            d.eQ = function () {
                for (var b = !0, e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
                b && (d.zl(), c())
            };
            for (var e = 0; e < a.length; e += 1) d.X(a[e], b)
        }, kf: function (a, b) {
            var c, d;
            for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
        }
    };
    g.o = {
        localStorage: !0,
        SH: 500,
        Be: !0,
        Ee: {
            dark: "#202020",
            blue_night: "#090d20",
            test: "#033447",
            mapv: "#000001",
            techblue: "#000b11",
            insight: "#19212a",
            "default": "#fcf9f2"
        },
        gK: {
            normal: "normal",
            dark: "dark",
            light: "light",
            fresh: "fresh",
            test: "blue",
            blue_night: "blue",
            mapv: "darkblue",
            insight: "grey"
        },
        key: "6f025e700cbacbb0bb866712d20bb35c",
        Cc: "http",
        Td: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
        fd: "http://restapi.amap.com",
        Hb: "http://webapi.amap.com",
        rK: "http://gaode.com",
        Mv: "http://m.amap.com",
        QD: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
        VJ: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
        BU: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
        RK: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
        SK: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
        VE: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
        zL: "http://vector.amap.com",
        yL: "vdata.amap.com",
        lAa: "ws",
        UI: "http://a.amap.com/jsapi/static/image/",
        Wn: 0,
        Xa: "",
        fv: ""
    };

    function pc(a) {
        g.da.Tu = a.Tu;
        g.l = a.l;
        g.Xva = a[7];
        a.l = null;
        g.o.Hb = a[2].split(",")[0];
        g.o.Fk = a.Fk;
        g.o.PJ = a.PJ;
        var b = g.o.Cc = g.o.Hb.split(":")[0];
        "https" === b && (g.o.lAa = "wss", g.o.fd = g.o.fd.replace("http", "https"), g.o.QD = g.o.QD.replace("http", "https"), g.o.VJ = g.o.VJ.replace("http", "https"), g.o.BU = g.o.BU.replace("http", "https"), g.o.RK = g.o.RK.replace("http", "https"), g.o.SK = g.o.SK.replace("http", "https"), g.o.VE = g.o.VE.replace("http", "https"), g.o.zL = g.o.zL.replace("http", "https"), g.o.UI = g.o.UI.replace("http",
            "https"));
        var c = window.location.href;
        0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
        -1 != c.indexOf("?") && (c = c.substr(0, c.indexOf("?")));
        g.o.iqa = c;
        c = encodeURIComponent(c);
        g.o.Ao = c;
        g.o.Ii = g.o.Hb + "/theme/v1.3/markers/" + (g.l.Kc ? "b" : "n");
        var d = document.createElement("style");
        d.type = "text/css";
        g.o.Hoa = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
        var e = ".amap-container{cursor:" + g.o.Hoa + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
        d.styleSheet ? (b = function () {
            try {
                d.styleSheet.cssText = e
            } catch (a) {
            }
        }, d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
        (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
        g.o.mode = Number(a[3]);
        g.o.Td = a[1];
        g.o.key = a[0];
        g.o.Xl = a[4];
        g.o.Nc = a[5];
        g.o.Tla = a[6];
        g.o.a6 = a[19];
        window._AMapSecurityConfig && (window._AMapSecurityConfig.securityJsCode ? (g.o.Xa = window._AMapSecurityConfig.securityJsCode, g.o.fv = "") : window._AMapSecurityConfig.serviceHost && (g.o.fv =
            window._AMapSecurityConfig.serviceHost, g.o.fd = g.o.fv, b = "", b = (b = "https" === g.o.fd.split(":")[0] ? g.o.fd.replace(/https:\/\/\S+?\//g, "") : g.o.fd.replace(/http:\/\/\S+?\//g, "")) && b.split("/")[0], c = window.location.hostname, "_AMapService" !== b && ("127.0.0.1" === c || "localhost" === c ? window.alert("\u4f7f\u7528 JSAPI \u5b89\u5168\u6a21\u5f0f\uff0c\u4ee3\u7406\u670d\u52a1\u8bf7\u4ee5_AMapService \u4f5c\u4e3a\u4e00\u7ea7\u8def\u7531") : "undefined" !== typeof console && console.log("<AMap JSAPI> \u4f7f\u7528 JSAPI \u5b89\u5168\u6a21\u5f0f\uff0c\u4ee3\u7406\u670d\u52a1\u8bf7\u4ee5_AMapService \u4f5c\u4e3a\u4e00\u7ea7\u8def\u7531"))));
        g.o.UQ = a[13];
        qc()
    }

    function qc() {
        try {
            if (window.localStorage) for (var a = window.localStorage.length; 0 <= a; a -= 1) {
                var b = window.localStorage.key(a);
                if (b && "_AMap_" === b.slice(0, 6)) {
                    var c = window.localStorage.getItem(b), c = JSON.parse(c || {});
                    "_AMap_anole" === b ? c.version !== g.l.mf && window.localStorage.removeItem(b) : "_AMap_data.tileKeys" === b ? c.vdataVer === g.l.mf && c.apiVer === g.o.Fk || window.localStorage.removeItem(b) : c.version !== g.o.Fk && window.localStorage.removeItem(b)
                }
            }
        } catch (d) {
        }
    }

    window.AMap && window.AMap.xL && window.AMap.xL.yM && window.AMap.xL.yM(pc);
    g.Nm = {Ru: Math.PI / 180, pwa: 180 / Math.PI, SQ: 6378137};
    (function () {
        function a(a) {
            return "undefined" === typeof a ? "" : a
        }

        g.ai = {
            kra: function (b) {
                b.name = a(b.name);
                var c = [b.y, b.x, b.name];
                if (g.l.ba) {
                    var d = [g.o.Mv + "/callAPP?", "src=jsapi_q"];
                    d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                    d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
                    d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
                        b.y + "&lon=" + b.x));
                    d.push("&mo=" + encodeURIComponent(g.o.Mv + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
                    return d.join("")
                }
                return g.o.rK + "?q=" + c.join(",") + "&src=jsapi_q"
            }, y4: function (b) {
                b.name = a(b.name);
                b.address = a(b.address);
                b.x = a(b.x);
                b.y = a(b.y);
                var c = [b.id, b.y, b.x, b.name, b.address];
                if (g.l.ba) {
                    var d = [g.o.Mv + "/callAPP?", "src=jsapi_p"];
                    d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    d.push("&android=" +
                        encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
                    d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    return d.join("")
                }
                return g.o.rK + "?p=" + c.join(",") + "&src=jsapi_p"
            }, w4: function (b) {
                if (g.l.ba) {
                    var c = [g.o.Mv + "/callAPP?", "src=jsapi_detail"];
                    c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    b.name = a(b.name);
                    b.x = a(b.x);
                    b.y =
                        a(b.y);
                    c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
                    c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    c.push("&mo=" + encodeURIComponent(g.o.Mv + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
                    return c.join("")
                }
                return g.o.rK + "/detail/" + b.id + "?src=jsapi_detail"
            }, NR: function (b) {
                b.sname = a(b.sname);
                "" === b.sname &&
                (b.sname = "\u8d77\u70b9");
                b.dname = a(b.dname);
                "" === b.dname && (b.dname = "\u7ec8\u70b9");
                b.mcount = a(b.mcount);
                b.my = a(b.my);
                b.mx = a(b.mx);
                b.mname = a(b.mname);
                var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
                if (g.l.ba) {
                    var d = [g.o.Mv + "/callAPP?", "src=jsapi_r_" + b.t];
                    d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    var e = b.t;
                    0 === b.t ? e = 2 : 2 === b.t && (e = 4);
                    d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
                    d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    d.push("&mo=" + encodeURIComponent(g.o.Mv +
                        "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
                    return d.join("")
                }
                return g.o.rK + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
            }, ot: function (a) {
                g.l.ba ? window.location.href = a : window.open(a)
            }
        }
    })();
    "function" !== typeof Object.keys && (Object.keys = function (a) {
        var b = [], c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    });
    g.a = {
        CLASS_NAME: "AMap.Util",
        fL: [],
        Fa: 268435456,
        ep: [215440491, 106744817],
        kr: function () {
            var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            return function (b, c) {
                var d = [], e;
                c = c || a.length;
                if (b) for (e = 0; e < b; e++) d[e] = a[0 | Math.random() * c]; else {
                    var f;
                    d[8] = d[13] = d[18] = d[23] = "-";
                    d[14] = "4";
                    for (e = 0; 36 > e; e++) d[e] || (f = 0 | 16 * Math.random(), d[e] = a[19 === e ? f & 3 | 8 : f])
                }
                return d.join("")
            }
        }(),
        lR: {
            start: function (a) {
                a.startTime = new Date;
                a.mt = [];
                var b = (new Date).getTime();
                a.id = requestAnimationFrame(function d() {
                    var e =
                        (new Date).getTime();
                    a.mt.push(e - b);
                    b = e;
                    a.id = requestAnimationFrame(d)
                })
            }, cancel: function (a) {
                a.id && cancelAnimationFrame(a.id)
            }, stop: function (a) {
                a.moa = new Date - a.startTime;
                this.cancel(a);
                a.lR = Math.round(1E3 / (a.moa / (a.mt.length + 1)))
            }
        },
        J4: function (a, b, c) {
            var d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !1;
            if (a === b) return b;
            switch (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "linear") {
                case "ease":
                    c = g.Nw.GI(0.25, 0.1, 0.25, 1)(c);
                    break;
                case "ease-in":
                    c = g.Nw.GI(0.42, 0, 1, 1)(c);
                    break;
                case "ease-out":
                    c =
                        g.Nw.GI(0, 0, 0.58, 1)(c);
                    break;
                case "ease-in-out":
                    c = g.Nw.GI(0.42, 0, 0.58, 1)(c)
            }
            var e = a + (b - a) * c;
            d && (e >>= 0);
            return e
        },
        createObjectURL: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "text/javascript; charset=utf-8",
                c = null;
            try {
                c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], {type: b}))
            } catch (d) {
                c = null
            }
            return c
        },
        revokeObjectURL: function (a) {
            (window.URL || window.webkitURL).revokeObjectURL(a)
        },
        SCa: function (a) {
            for (var b = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = c;
            return b
        },
        oD: function (a) {
            var b =
                {};
            if (g.a.kk(a, "object")) for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
            return b
        },
        Pf: function (a, b) {
            for (var c = 0, d = b.length; c < d; c += 1) a.push(b[c])
        },
        create: "function" === typeof Object.create ? Object.create : function (a, b) {
            function c() {
            }

            c.prototype = a;
            var d = new c, e;
            for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]);
            return d
        },
        eb: function (a) {
            if ("object" === typeof a && null !== a) {
                if (a.a7 || this.kk(a, "Float32Array") || this.kk(a, "Uint16Array")) return a;
                var b = this.isArray(a) ? [] : {}, c;
                for (c in a) a.hasOwnProperty(c) && (b[c] = g.a.eb(a[c]));
                return b
            }
            return a
        },
        N5: function (a) {
            return (a | 0) === a
        },
        Lxa: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function (a, b) {
            for (var c in b) a[c] = b[c]
        },
        Qh: function (a) {
            return "function" === typeof a
        },
        mma: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "webgl";
            if (!a) return a;
            for (var c = [], d = 0, e = a.length; d < e; d += 2) {
                var f = parseInt(a.substr(d, 2), 16);
                if ("webgl" === b || "rgba" === b && 0 === d) f = this.xb(f / 255, 3);
                c.push(f)
            }
            c.push(c.shift());
            return c
        },
        Ts: function () {
        },
        keys: "function" === typeof Object.keys ?
            Object.keys : function (a) {
                var b = [], c;
                for (c in a) a.hasOwnProperty(c) && b.push(c);
                return b
            },
        map: function (a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = [];
            if (a && a.length) g.a.Ub(a, function () {
                for (var e = arguments.length, f = Array(e), h = 0; h < e; h++) f[h] = arguments[h];
                d[f[1]] = b.apply(c || a, f)
            }); else return a;
            return d
        },
        forEach: function (a, b) {
            if (a && a.length) {
                var c = a.length;
                if (0 < c && (b(a[0], 0), 1 < c)) {
                    b(a[1], 1);
                    for (var d = 2; d < c; d++) b(a[d], d)
                }
            }
        },
        Ub: function (a, b) {
            var c = 2 < arguments.length && void 0 !==
            arguments[2] ? arguments[2] : null;
            if (a && a.length) for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++) ;
        },
        find: function (a, b) {
            for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++) if ("function" === typeof b) {
                if (b.call(c, a[d], d, a)) return a[d]
            } else if (a[d] === b) return a[d];
            return null
        },
        HJ: function (a) {
            return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
        },
        Bw: function (a, b) {
            var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
                d, e;
            "v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
            var f, h, k, l, m;
            h = [];
            k = NaN;
            l = 0;
            for (m = a.length; l < m; l++) f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k + f - e), k = NaN);
            return h
        },
        uxa: function (a, b) {
            for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
                var f = c * e, h = f + c;
                h > b.length && (h = b.length);
                for (; f < h; f += 1) a(b[f])
            }
        },
        qDa: function (a) {
            if (/^rgba\(/.test(a)) return this.aw(a);
            var b = a = this.nI(a);
            "#" === a[0] && (a = a.substring(1), 3 === a.length && (a =
                a.replace(/./g, function (a) {
                    return a + a
                })), b = this.Tr(8 === a.length ? a : "ff" + a));
            return this.aw(b)
        },
        nI: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                a = a.toLowerCase(), b = {
                    aliceblue: "#f0f8ff",
                    antiquewhite: "#faebd7",
                    aqua: "#00ffff",
                    aquamarine: "#7fffd4",
                    azure: "#f0ffff",
                    beige: "#f5f5dc",
                    bisque: "#ffe4c4",
                    black: "#000000",
                    blanchedalmond: "#ffebcd",
                    blue: "#0000ff",
                    blueviolet: "#8a2be2",
                    brown: "#a52a2a",
                    burlywood: "#deb887",
                    cadetblue: "#5f9ea0",
                    chartreuse: "#7fff00",
                    chocolate: "#d2691e",
                    coral: "#ff7f50",
                    cornflowerblue: "#6495ed",
                    cornsilk: "#fff8dc",
                    crimson: "#dc143c",
                    cyan: "#00ffff",
                    darkblue: "#00008b",
                    darkcyan: "#008b8b",
                    darkgoldenrod: "#b8860b",
                    darkgray: "#a9a9a9",
                    darkgreen: "#006400",
                    darkkhaki: "#bdb76b",
                    darkmagenta: "#8b008b",
                    darkolivegreen: "#556b2f",
                    darkorange: "#ff8c00",
                    darkorchid: "#9932cc",
                    darkred: "#8b0000",
                    darksalmon: "#e9967a",
                    darkseagreen: "#8fbc8f",
                    darkslateblue: "#483d8b",
                    darkslategray: "#2f4f4f",
                    darkturquoise: "#00ced1",
                    darkviolet: "#9400d3",
                    deeppink: "#ff1493",
                    deepskyblue: "#00bfff",
                    dimgray: "#696969",
                    dodgerblue: "#1e90ff",
                    firebrick: "#b22222",
                    floralwhite: "#fffaf0",
                    forestgreen: "#228b22",
                    fuchsia: "#ff00ff",
                    gainsboro: "#dcdcdc",
                    ghostwhite: "#f8f8ff",
                    gold: "#ffd700",
                    goldenrod: "#daa520",
                    gray: "#808080",
                    green: "#008000",
                    greenyellow: "#adff2f",
                    honeydew: "#f0fff0",
                    hotpink: "#ff69b4",
                    indianred: "#cd5c5c",
                    indigo: "#4b0082",
                    ivory: "#fffff0",
                    khaki: "#f0e68c",
                    lavender: "#e6e6fa",
                    lavenderblush: "#fff0f5",
                    lawngreen: "#7cfc00",
                    lemonchiffon: "#fffacd",
                    lightblue: "#add8e6",
                    lightcoral: "#f08080",
                    lightcyan: "#e0ffff",
                    lightgoldenrodyellow: "#fafad2",
                    lightgrey: "#d3d3d3",
                    lightgreen: "#90ee90",
                    lightpink: "#ffb6c1",
                    lightsalmon: "#ffa07a",
                    lightseagreen: "#20b2aa",
                    lightskyblue: "#87cefa",
                    lightslategray: "#778899",
                    lightsteelblue: "#b0c4de",
                    lightyellow: "#ffffe0",
                    lime: "#00ff00",
                    limegreen: "#32cd32",
                    linen: "#faf0e6",
                    magenta: "#ff00ff",
                    maroon: "#800000",
                    mediumaquamarine: "#66cdaa",
                    mediumblue: "#0000cd",
                    mediumorchid: "#ba55d3",
                    mediumpurple: "#9370d8",
                    mediumseagreen: "#3cb371",
                    mediumslateblue: "#7b68ee",
                    mediumspringgreen: "#00fa9a",
                    mediumturquoise: "#48d1cc",
                    mediumvioletred: "#c71585",
                    midnightblue: "#191970",
                    mintcream: "#f5fffa",
                    mistyrose: "#ffe4e1",
                    moccasin: "#ffe4b5",
                    navajowhite: "#ffdead",
                    navy: "#000080",
                    oldlace: "#fdf5e6",
                    olive: "#808000",
                    olivedrab: "#6b8e23",
                    orange: "#ffa500",
                    orangered: "#ff4500",
                    orchid: "#da70d6",
                    palegoldenrod: "#eee8aa",
                    palegreen: "#98fb98",
                    paleturquoise: "#afeeee",
                    palevioletred: "#d87093",
                    papayawhip: "#ffefd5",
                    peachpuff: "#ffdab9",
                    peru: "#cd853f",
                    pink: "#ffc0cb",
                    plum: "#dda0dd",
                    powderblue: "#b0e0e6",
                    purple: "#800080",
                    rebeccapurple: "#663399",
                    red: "#ff0000",
                    rosybrown: "#bc8f8f",
                    royalblue: "#4169e1",
                    saddlebrown: "#8b4513",
                    salmon: "#fa8072",
                    sandybrown: "#f4a460",
                    seagreen: "#2e8b57",
                    seashell: "#fff5ee",
                    sienna: "#a0522d",
                    silver: "#c0c0c0",
                    skyblue: "#87ceeb",
                    slateblue: "#6a5acd",
                    slategray: "#708090",
                    snow: "#fffafa",
                    springgreen: "#00ff7f",
                    steelblue: "#4682b4",
                    tan: "#d2b48c",
                    teal: "#008080",
                    thistle: "#d8bfd8",
                    tomato: "#ff6347",
                    turquoise: "#40e0d0",
                    violet: "#ee82ee",
                    wheat: "#f5deb3",
                    white: "#ffffff",
                    whitesmoke: "#f5f5f5",
                    yellow: "#ffff00",
                    yellowgreen: "#9acd32"
                };
            return "string" === typeof a ? b[a.toLowerCase()] ?
                b[a.toLowerCase()] : a : a
        },
        HI: function (a, b, c) {
            var d, e;
            d = Math.floor(c / 2);
            e = c - d;
            d = (1 << d) - 1 << e;
            e = (1 << e) - 1;
            return [c, a & d | b & e, b & d | a & e]
        },
        II: function (a) {
            return a ? encodeURIComponent(a) : ""
        },
        $c: function (a, b, c, d) {
            c = a[b].i[c];
            if ("undefined" === typeof c) return null;
            a = a[b].s;
            if ("number" === typeof c) return a[c];
            for (; "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d);) ;
            d = c[d.toString()];
            return "number" === typeof d ? a[d] : null
        },
        aw: function (a) {
            a = a.split(",");
            a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
            a[1] = parseFloat(a[1]) / 255;
            a[2] = parseFloat(a[2]) / 255;
            a[3] = parseFloat(a[3]);
            return a
        },
        hxa: function (a) {
            a = a.split(",");
            a[0] = parseFloat(a[0].split("rgb(")[1]) / 255;
            a[1] = parseFloat(a[1]) / 255;
            a[2] = parseFloat(a[2]) / 255;
            return a
        },
        wU: function (a) {
            return "rgba(" + 255 * a[0] + "," + 255 * a[1] + "," + 255 * a[2] + "," + a[3] + ")"
        },
        Una: function (a) {
            return this.wU(this.am(a))
        },
        am: function (a) {
            if (a instanceof Array) return 3 == a.length && a.push(1), a;
            a = this.nI(a);
            if (0 == a.indexOf("#")) {
                if (4 === a.length) return a = a.substr(1).replace(/./g, function (a) {
                    return a + a
                }), this.qp(a);
                if (7 == a.length) return this.qp(a.substr(1));
                if (9 == a.length) return a = a.substr(1), this.Zk(a.substr(6) + a.substr(0, 6))
            } else {
                if (0 == a.indexOf("rgb(")) return a = this.hxa(a), a.push(1), a;
                if (0 == a.indexOf("rgba(")) return this.aw(a)
            }
        },
        G8: function (a) {
            return g.a.Tr("ff" + a)
        },
        Tr: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
            b.push((b.shift() / 255).toFixed(2));
            return "rgba(" + b.join(",") + ")"
        },
        qp: function (a) {
            return g.a.Zk("ff" + a)
        },
        Zk: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c,
                2), 16) / 255);
            b.push(b.shift());
            return b
        },
        vh: function (a) {
            for (var b in a) if (a.hasOwnProperty(b)) return !1;
            return !0
        },
        Ho: function (a, b) {
            0 <= b && a.splice(b, 1);
            return a
        },
        hya: function (a, b) {
            return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b
        },
        Ey: function (a, b) {
            var c = g.a.indexOf(a, b);
            return g.a.Ho(a, c)
        },
        filter: function (a, b, c) {
            var d = [];
            g.a.Ub(a, function (a, f) {
                b.call(c, a, f) && d.push(a)
            });
            return d
        },
        indexOf: function (a, b) {
            if (!a || !a.length) return -1;
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c += 1) if (a[c] ===
                b) return c;
            return -1
        },
        eD: function (a, b) {
            return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1
        },
        bind: function () {
            var a = !1;
            Function.prototype.bind && (a = !0);
            return function (b, c) {
                var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
                return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function () {
                    return b.apply(c, d || arguments)
                }
            }
        }(),
        vb: function (a, b) {
            b = b || {};
            a.w = g.extend({}, a.w, b);
            return a.w
        },
        Lna: function (a, b, c) {
            return "function" == typeof b ? this.NP(a, !0, this.Gma(b,
                c, 1)) : this.NP(a, !0)
        },
        NP: function (a, b, c, d, e, f, h) {
            var k;
            c && (k = e ? c(a, d, e) : c(a));
            if (void 0 !== k) return k;
            if (!this.S5(a)) return a;
            if (d = this.isArray(a)) {
                if (k = this.tsa(a), !b) return this.oma(a, k)
            } else {
                var l = Object.prototype.toString.call(a), m = "[object Function]" == l;
                if ("[object Object]" == l || "[object Arguments]" == l || m && !e) {
                    if (k = this.usa(m ? {} : a), !b) return this.xma(k, a)
                } else return e ? a : {}
            }
            f || (f = []);
            h || (h = []);
            for (e = f.length; e--;) if (f[e] == a) return h[e];
            f.push(a);
            h.push(k);
            (d ? this.pma : this.Cma)(a, function (d, e) {
                k[e] =
                    g.a.NP(d, b, c, e, a, f, h)
            });
            return k
        },
        xma: function (a, b) {
            return null == b ? a : this.Ama(b, Object.keys(b), a)
        },
        S5: function (a) {
            var b = typeof a;
            return !!a && ("object" == b || "function" == b)
        },
        vFa: function (a) {
            return !!a && "object" == typeof a
        },
        tFa: function (a) {
            return "number" == typeof a && -1 < a && 0 == a % 1 && 9007199254740991 >= a
        },
        tsa: function (a) {
            var b = a.length, c = new a.constructor(b);
            b && "string" == typeof a[0] && Object.hasOwnProperty.call(a, "index") && (c.index = a.index, c.input = a.input);
            return c
        },
        oma: function (a, b) {
            var c = -1, d = a.length;
            for (b ||
                 (b = Array(d)); ++c < d;) b[c] = a[c];
            return b
        },
        usa: function (a) {
            a = a.constructor;
            "function" == typeof a && a instanceof a || (a = Object);
            return new a
        },
        Gma: function (a, b, c) {
            if ("function" != typeof a) return this.vv;
            if (void 0 === b) return a;
            switch (c) {
                case 1:
                    return function (c) {
                        return a.call(b, c)
                    };
                case 3:
                    return function (c, e, f) {
                        return a.call(b, c, e, f)
                    };
                case 4:
                    return function (c, e, f, h) {
                        return a.call(b, c, e, f, h)
                    };
                case 5:
                    return function (c, e, f, h, k) {
                        return a.call(b, c, e, f, h, k)
                    }
            }
            return function () {
                return a.apply(b, arguments)
            }
        },
        pma: function (a,
                       b) {
            for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a);) ;
            return a
        },
        vv: function (a) {
            return a
        },
        noa: function (a) {
            return function (b, c, d) {
                var e = g.a.Iya(b);
                d = d(b);
                for (var f = d.length, h = a ? f : -1; a ? h-- : ++h < f;) {
                    var k = d[h];
                    if (!1 === c(e[k], k, e)) break
                }
                return b
            }
        },
        Cma: function (a, b) {
            return g.a.noa()(a, b, Object.keys)
        },
        Iya: function (a) {
            return g.a.S5(a) ? a : Object(a)
        },
        Ama: function (a, b, c) {
            c || (c = {});
            for (var d = -1, e = b.length; ++d < e;) {
                var f = b[d];
                c[f] = a[f]
            }
            return c
        },
        B3: function () {
            return !1
        },
        join: function (a, b) {
            if (a.join) return a.join(b);
            var c = [], d;
            for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
            return c.join(b)
        },
        j4: function (a, b) {
            return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
        },
        zb: function () {
            var a = 0;
            return function (b) {
                b._amap_id || (a += 1, b._amap_id = a);
                return b._amap_id
            }
        }(),
        Cpa: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        eg: Date.now ? function () {
            return Date.now()
        } : function () {
            return (new Date).getTime()
        },
        ND: function (a, b, c, d) {
            var e;
            if (d) {
                var f = 0, h, k = this.eg;
                e = function () {
                    h = k();
                    if (h - f < b) return !1;
                    f = h;
                    a.apply(c,
                        arguments)
                }
            } else {
                var l, m, n;
                n = function () {
                    l = !1;
                    m && (e.apply(c, m), m = !1)
                };
                e = function () {
                    l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b))
                }
            }
            return e
        },
        xb: function (a, b) {
            if (a === a << 0) return a;
            var c = Math.pow(10, b || 0);
            return Math.round(parseFloat(a) * c) / c
        },
        isArray: Array.isArray ? Array.isArray : function (a) {
            return this.kk(a, "array")
        },
        kk: function (a, b) {
            return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
        },
        ka: "function" === typeof Array.prototype.ka ? function (a, b) {
                return a.ka(b)
            } :
            function (a, b) {
                return -1 !== this.indexOf(a, b)
            },
        C9: function (a) {
            var b = 0;
            if (0 === a.length) return b;
            for (var c, d = 0, e = a.length; d < e; d += 1) c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b;
            return b
        },
        DDa: function (a, b) {
            b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
            for (var c = "", d = 0, e = a.length; d < e; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
            return c
        },
        Koa: function (a, b) {
            var c = (a + "").slice(-2), d = (b + "").slice(-2);
            a = a.slice(0, -2);
            b = b.slice(0, -2);
            var e = parseInt((d + c).slice(1)), f = Math.ceil(e / 250) % 2 ? 1 : -1,
                d = parseInt("1" +
                    d) / 3E3;
            a -= parseInt("1" + c) / 3E3 * f;
            b -= d * (1 < e / 500 ? 1 : -1);
            return new g.U(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
        },
        f7: function (a) {
            return "undefined" !== typeof JSON && JSON.stringify ? g.a.C9(JSON.stringify(a)) : null
        },
        LHa: function (a, b) {
            if (b || !a.hasOwnProperty("_amap_hash")) {
                var c = g.a.f7(a);
                c && (a._amap_hash = c)
            }
            return a._amap_hash
        },
        iepngFix: function (a) {
            function b() {
                for (var a; c.length;) a = c.shift(), window.DD_belatedPNG.fixPng(a);
                d.HS = !0
            }

            this.R7 || (this.R7 = [], this.HS = !1);
            var c = this.R7, d = this;
            if ("img" === a.tagName.toLowerCase()) c.push(a);
            else {
                a = a.getElementsByTagName("*");
                for (var e = 0; e < a.length; e += 1) c.push(a[e])
            }
            window.DD_belatedPNG && this.HS ? setTimeout(function () {
                b()
            }, 100) : this.HS || g.ub.load("AMap.FixPng", b)
        },
        Ka: function (a) {
            if (g.a.isArray(a)) if (g.a.isArray(a[0])) for (var b = 0; b < a.length; b += 1) a[b] = g.a.Ka(a[b]); else if (b = typeof a[0], "string" === b || "number" === b) return new g.U(a[0], a[1]);
            return a
        },
        nAa: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 1) b[c] = [a[c].x, a[c].y];
            return b
        },
        Mq: function (a) {
            return g.a.isArray(a) ? new g.zd(a[0], a[1]) :
                a
        },
        GP: function (a) {
            var b = a.type, c = a.YU, d = a.error;
            a = new g.kb.XMLHttpRequest(a.url, {
                Gd: void 0 === b ? "GET" : b,
                S2: a.data,
                tU: "text/plain"
            });
            a.h("complete", function (a) {
                a = JSON.parse(a.data);
                c && c(a)
            }, this);
            a.h("error", function () {
                var a = {errmsg: "REQUEST_FAILED"};
                d && d(a)
            }, this)
        },
        wta: function () {
            return new Promise(function (a, b) {
                window || b({code: "0", fT: "\u9738\u4e0b\u52a0\u8f7d\u5931\u8d25"});
                if (window.__AMap_web_baxia__) a({
                    code: "2",
                    fT: "\u9738\u4e0b\u5df2\u52a0\u8f7d\uff0c\u65e0\u9700\u91cd\u590d\u52a0\u8f7d"
                }); else {
                    window.__AMap_web_baxia__ =
                        !0;
                    var c = document.body || document.head, d = document.createElement("script");
                    d.type = "text/javascript";
                    d.src = "//g.alicdn.com/??AWSC/AWSC/awsc.js,sd/baxia-entry/baxiaCommon.js";
                    d.onerror = function () {
                        b({code: "0", fT: "\u9738\u4e0b\u52a0\u8f7d\u5931\u8d25"})
                    };
                    d.onload = function () {
                        a({code: "1", fT: "\u9738\u4e0b\u52a0\u8f7d\u6210\u529f"})
                    };
                    c.appendChild(d)
                }
            })
        }
    };
    (function () {
        function a(a) {
            window.clearTimeout(a)
        }

        function b(a) {
            var b, c, d = ["webkit", "moz", "o", "ms"];
            for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
            return c
        }

        function c(a) {
            var b = +new Date, c = Math.max(0, (g.l.Zl ? 50 : 20) - (b - d));
            d = b + c;
            return window.setTimeout(a, c)
        }

        var d = 0, e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
            f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
        g.a.Xc = function (a, b, c, d) {
            if (c) b ? g.a.bind(a, b).call(b, d) : a(); else return e(function () {
                b ?
                    g.a.bind(a, b).call(b, d) : a()
            })
        };
        g.a.si = function (a) {
            a && f.call(window, a)
        }
    })();
    g.a.uU = window.requestIdleCallback ? function (a, b) {
        return window.requestIdleCallback(a, b)
    } : function (a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, c = g.a.eg();
        return setTimeout(function () {
            a({
                didTimeout: !1, timeRemaining: function () {
                    return Math.max(0, 70 - (g.a.eg() - c))
                }
            })
        }, b.timeout || 0)
    };
    g.a.cQ = window.cancelIdleCallback ? function (a) {
        return window.cancelIdleCallback(a)
    } : function (a) {
        clearTimeout(a)
    };
    (function (a) {
        var b = 1, c = {};
        a.a.Jxa = function (a, b) {
            if (c[a]) {
                var f = c[a];
                f.IE = 1;
                f.result = b;
                if (f.pn) {
                    for (var h = f.pn, k = 0, l = h.length; k < l; k++) h[k].call(null, b);
                    f.pn = null
                }
            }
        };
        a.a.Hna = function (a) {
            c[a] = null
        };
        a.a.Xza = function (a, b) {
            if (c[a]) {
                var f = c[a];
                0 < f.IE ? b(null, f.result) : (f.pn || (f.pn = []), f.pn.push(b))
            } else b(null, a)
        };
        a.a.HR = function (d, e) {
            var f = navigator.geolocation;
            if (!a.l.GD || "https:" === document.location.protocol) return d(null, f);
            var h;
            e && e.Yza && (h = "f" + b++, c[h] = {IE: 0});
            var k = null, l = !1;
            e && e.timeout && (k = setTimeout(function () {
                k =
                    void 0;
                d({code: 3, info: "TIME_OUT", message: "Get geolocation time out."});
                l = !0
            }, e.timeout));
            f.getCurrentPosition(function () {
                l || (clearTimeout(k), k = void 0, d(null, f))
            }, function (b) {
                l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.ub.load("AMap.GeoRemoteLoc", function () {
                    d(null, a.vaa, h)
                }) : d(null, f))
            }, {timeout: 1E3});
            return h
        }
    })(g);
    (function (a) {
        var b = a.da.extend({
            ka: [a.va], A: function () {
            }
        });
        a.Mj = new b
    })(g);
    (function (a) {
        var b = a.da.extend({
            ka: [a.va], A: function () {
                this.sga()
            }, sga: function () {
                a.Mj && a.Mj.h("vecTileParsed.buildings", this.Zfa, this)
            }, L5: function (a) {
                return a.map.JZ
            }, Xqa: function (a) {
                return this.L5(a) ? a.map.SN : null
            }, Gxa: function (a, b) {
                if (b) {
                    var e = b.map;
                    e && (e.SN ? e.SN.toString() : "") !== (a ? a.toString() : "") && (e.SN = a || [], e.set("display", 0))
                }
            }, b9: function (a, b) {
                if (b) {
                    var e = b.map;
                    e && e.JZ !== a && (e.JZ = a, e.set("display", 0))
                }
            }, WBa: function () {
            }, FZ: function (a, b) {
                if (a) for (var e = 0, f = a.length; e < f; e++) a[e] && 0 > b.indexOf(a[e]) &&
                b.push(a[e])
            }, F3: function (b) {
                if (!b) return null;
                b = b.map.la;
                for (var d = 0, e = b.length; d < e; d++) if (a.q.fi && b[d] instanceof a.q.fi && b[d].ha && b[d].ha.length && (-1 !== b[d].ha.indexOf("building") || -1 !== b[d].ha.indexOf("poilabel")) && b[d].Ra) {
                    var f = b[d].S.get("tiles", null, !0);
                    if (f && f.length) return b[d]
                }
                return null
            }, uqa: function (a) {
                if (a = this.F3(a)) {
                    if (a = a.S.get("tiles", null, !0)) a = a[0]; else return null;
                    if (!a || !a.length) return null;
                    for (var b = [], e = 0, f = a.length; e < f; e++) {
                        var h = a[e];
                        h.qe && h.qe.uf && this.FZ(h.qe.uf, b)
                    }
                    return b
                }
            },
            Zfa: function (a) {
                if (a.tp && a.tp.qe) {
                    var b = a.tp.qe.uf;
                    if (b) {
                        var e = [];
                        this.FZ(b, e);
                        this.r("vecTileParsed.builds.found", {q2: e, tp: a.tp})
                    }
                }
            }
        });
        a.Nj = new b
    })(g);
    (function (a) {
        function b() {
            return {
                checkup: function () {
                    var a = Array.prototype.slice.call(arguments, 0);
                    a.pop()(null, a)
                }
            }
        }

        function c(a) {
            return {
                injectCode: function (b, c) {
                    var d = null, e = null;
                    try {
                        d = (new Function("self", b))(a)
                    } catch (f) {
                        console.error("error", e), e = f.toString()
                    }
                    c(e, d)
                }
            }
        }

        function d(a) {
            function b(c, d) {
                function e(a, b, c) {
                    a = {bA: Date.now(), Qz: h, error: a, result: b, Iq: !1, el: !1};
                    if (c) for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f]);
                    d(a)
                }

                var f = c.jS, h = c.Qz, l = c.oQ, m = c.DC, n = c.nma || [], p = a._wkHandlers[f];
                p ? p[l] ? m ?
                    p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + f)
            }

            var c = [], d = null, e = null;
            for (d in this._wkHandlers) -1 !== d.indexOf("_def_") && (e = this._wkHandlers.eGa = d);
            "function" === typeof this._wkHandlers[e].A && this._wkHandlers[e].A.call(this._wkHandlers[e]);
            a.Au = function (a) {
                c.push.apply(c, a)
            };
            a.addEventListener("message", function (d) {
                function e(b) {
                    if (t) {
                        t.push(b);
                        var d = !!b.Iq;
                        d || n++;
                        b = n >= h || b.el;
                        if (d || b) {
                            d = 1 < t.length ? {bxa: t} : t[0];
                            d.bA = Date.now();
                            d.tHa = p;
                            if (c.length) {
                                try {
                                    a.postMessage(d,
                                        c)
                                } catch (f) {
                                    a.postMessage(d), console.error(f)
                                }
                                c.length = 0
                            } else a.postMessage(d);
                            t.length = 0;
                            b && (e = t = null)
                        }
                    } else console.error("Seemed callback already sent!!", b, b.result.mc)
                }

                var f = d.data;
                d = f.$wa || [f];
                for (var h = d.length, n = 0, p = Date.now() - f.bA, t = [], f = 0; f < h; f++) b(d[f], e)
            }, !1)
        }

        function e(d, h) {
            this.w = a.extend({batchSend: !0, lazy: !1, libPolyfills: null}, h);
            this.Sp = [];
            this.YA = this.w.clientId || "w" + f++;
            this.w.onReady && this.pT(this.w.onReady);
            this.oG = this.bfa();
            if ("function" === typeof d) {
                var m = {};
                m[this.oG] = d;
                d = m
            }
            d[e.VR] =
                c;
            d[this.NY()] = b;
            this.EG = d;
            this.RB(null);
            this.w.lazy || this.oy();
            a.Nra || !1 === this.w.hostWorker || (a.Nra = this);
            this.mo && this.mo.A && this.mo.A.call(this.mo)
        }

        var f = 1, h = 1;
        a.extend(e, {
            VR: "_g_", Uxa: function (a) {
                if (!a.ica) {
                    var b = [];
                    a.addEventListener("message", function (a) {
                        a = a.data;
                        a = a.bxa || [a];
                        for (var c = 0, d = a.length; c < d; c++) {
                            var e = a[c], f;
                            a:{
                                f = e.Qz;
                                for (var h = !e.el, k = 0, v = b.length; k < v; k++) {
                                    var w = b[k];
                                    if (f === w.Qz) {
                                        h || b.splice(k, 1);
                                        f = w;
                                        break a
                                    }
                                }
                                f = void 0
                            }
                            f && f.DC(e.error, e.result, !0)
                        }
                    }, !1);
                    a.Xba = b;
                    a.ica = !0
                }
            }
        });
        a.extend(e.prototype,
            {
                bfa: function () {
                    return "_def_" + this.YA
                }, NY: function () {
                    return "_cln_" + this.YA
                }, pka: function () {
                    var a = Array.prototype.slice.call(arguments, 0);
                    this.D0 = a;
                    if (this.Tx) {
                        for (var b = 0, c = this.Tx.length; b < c; b++) this.Tx[b].apply(null, a);
                        this.Tx.length = 0
                    }
                }, Au: function (a) {
                    this.gka && this.Sp.push.apply(this.Sp, a)
                }, pT: function (a) {
                    this.D0 ? a.apply(null, this.D0) : (this.Tx || (this.Tx = []), this.Tx.push(a))
                }, oy: function (b) {
                    var c = this;
                    if (!c.KX) {
                        c.KX = !0;
                        var d = function (d, e) {
                            d && a.l.JS && console.warn(d);
                            c.pka.call(c, d, e);
                            b && b(d, e)
                        };
                        a.l.JS ? this.cka(function (a, b) {
                            b ? this.zga(b, function (a, c) {
                                a ? d(a) : (this.RB(c), this.CP = c, this.Sp.length = 0, this.mo = null, d(null, {
                                    Ema: b,
                                    iAa: c
                                }))
                            }) : d("Worker start failed!")
                        }) : d("Worker not supported!")
                    }
                }, xf: function (b, c) {
                    var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.Ts,
                        f = this;
                    b = b || f.oG;
                    var h = {};
                    if (a.a.kk(c, "object")) {
                        var q = "return {", r;
                        for (r in c) if (c.hasOwnProperty(r)) var s = c[r],
                            q = "function" === typeof s ? q + ("\n\t" + r + ": " + s.toString() + ",") : "object" === typeof s ? q + ("\n\t" + r + ": " + JSON.stringify(s) +
                                ",") : q + ("\n\t" + r + ': "' + s + '",');
                        c = new Function(q + "\n}")
                    }
                    f.pX(b, c, h);
                    f.RB(null, h);
                    f.pT(function (a) {
                        a ? d(a) : f.CP ? (a = f.UY(c, f.EN(f.YA, b), !0), f.CP.sendMessage(e.VR + ":injectCode", a, function (a, b) {
                            a || f.RB(f.CP, h);
                            d(a, b)
                        })) : d("Worker msger missing!!")
                    })
                }, EN: function (a, b) {
                    if (!a || !b) throw Error("clientId or ns missing!!");
                    return a + "_" + b
                }, zfa: function (a, b, c) {
                    function d() {
                        var b = Array.prototype.slice.call(arguments, 0);
                        c.sendMessage.apply(c, [a].concat(b))
                    }

                    var e = this;
                    if (!c) return function () {
                        var a = b.apply(e.mo, arguments);
                        e.KX || "untilCall" === e.w.lazy && e.oy();
                        return a
                    };
                    d._proxy2Worker = !0;
                    return d
                }, ada: function (a) {
                    var b = {}, c;
                    for (c in a) a.hasOwnProperty(c) && this.pX(c, a[c], b);
                    return b
                }, pX: function (a, b, c) {
                    b = b.call(null, !1);
                    for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.oG && (c[d] = b[d]))
                }, RB: function (a, b) {
                    if (!b) this.mo || (this.mo = this.ada(this.EG)), b = this.mo; else if (this.mo) for (var c in b) b.hasOwnProperty(c) && (this.mo[c] = b[c]);
                    for (c in b) if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        "function" === typeof d && (this[c] = this.zfa(c,
                            d, a))
                    }
                    this.gka = !!a
                }, UY: function (a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
                        d = a.toString(), e, d = d.replace(/^function([^\(]*)\(/, function () {
                            e = "_prep_h" + h++;
                            return "function " + e + "("
                        });
                    return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
                        b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t" : (console.error("No function match!!"), !1)
                }, cka: function (a) {
                    var b = this.YA, c = [], d;
                    for (d in this.EG) if (this.EG.hasOwnProperty(d)) {
                        var f = this.UY(this.EG[d], this.EN(b, d));
                        f && c.push(f)
                    }
                    b = this.w.libPolyfills || [];
                    d = 0;
                    for (f = b.length; d < f; d++) b[d] = "(" + b[d].toString() + ")(self);";
                    var h = b.join(";\n") + ";\n" + c.join(";\n"), c = this.w.hostWorker, r = this;
                    c && c !== r ? c.pT(function (b, c) {
                        b ? a.call(r, b) : c.iAa.sendMessage(e.VR + ":injectCode", h, function (b) {
                            b ? a.call(r, b) : a.call(r, null, c.Ema)
                        })
                    }) : a.call(r, null, r.tla(h))
                }, tla: function (b) {
                    b = ["self._wkHandlers={};", b, "(" + d.toString() + ")(self)"].join("");
                    var c;
                    try {
                        var e =
                            a.a.createObjectURL(b);
                        c = new Worker(e);
                        setTimeout(function () {
                            a.a.revokeObjectURL(e);
                            e = null
                        }, 5E3)
                    } catch (f) {
                        return
                    }
                    return c
                }, Uda: function (b) {
                    var c = 1, d = b.Xba, e = this, f = !!e.w.batchSend;
                    return function (h) {
                        var r = Array.prototype.slice.call(arguments, 1),
                            s = "function" === typeof r[r.length - 1] ? r.pop() : null, u = e.YA,
                            v = h.split(":"), w = e.oG;
                        1 < v.length && (h = v[1], w = v[0]);
                        r = {
                            bA: a.a.eg(),
                            jS: e.EN(u, w),
                            DC: !!s,
                            Qz: u + "_" + c++,
                            oQ: h,
                            nma: r
                        };
                        s && d.push({oQ: r.oQ, jS: r.jS, bA: r.bA, Qz: r.Qz, DC: s});
                        f ? e.Dca(b, r) : e.Rx(b, r)
                    }
                }, Rx: function (a, b) {
                    if (this.Sp.length) {
                        try {
                            a.postMessage(b,
                                this.Sp)
                        } catch (c) {
                            a.postMessage(b), console.error(c)
                        }
                        this.Sp.length = 0
                    } else a.postMessage(b)
                }, Dca: function (b, c) {
                    b.yO || (b.yO = []);
                    b.yO.push(c);
                    if (!b.u0) {
                        var d = this;
                        b.u0 = setTimeout(function () {
                            b.u0 = null;
                            var c = b.yO;
                            c.length && (d.Rx(b, 1 === c.length ? c[0] : {
                                bA: a.a.eg(),
                                $wa: c
                            }), c.length = 0)
                        }, 0)
                    }
                }, kla: function (a) {
                    var b = this;
                    a.addEventListener("error", function (a) {
                        console.error(a);
                        b.RB(null)
                    }, !1);
                    e.Uxa(a)
                }, zga: function (a, b) {
                    var c = this;
                    c.kla(a);
                    var d = this.Uda(a);
                    if (e.zda) b.call(c, null, {sendMessage: d}); else {
                        e.zda = !0;
                        var f = [c.NY() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function (a, e) {
                            var h = !0;
                            if (a || !e || e.length !== f.length - 2) h = !1; else for (var k = 0, v = e.length; k < v; k++) if (e[k] !== f[k + 1]) {
                                h = !1;
                                break
                            }
                            h ? b.call(c, null, {sendMessage: d}) : (console.error(a), b.call(c, "Self checkup failed!!"))
                        }];
                        d.apply(c, f)
                    }
                }
            });
        a.KA = e
    })(g);
    (function () {
        if (!g.WL) {
            g.WL = {tba: {}, DD: {}};
            var a = g.WL, b = g.WL.tba, c = g.a, d = g.o;
            b.start = function (b) {
                a.DD[b.id] = {
                    K: b.K, time: {y5: c.eg()}, cna: function () {
                        return c.eg() - this.time.y5
                    }
                }
            };
            b.end = function (b) {
                var d = a.DD[b.id], e = d.time, d = c.bind(d.cna, d), l = b.index, m = b.key;
                "function" !== typeof b.Nc && (b.Nc = function () {
                });
                if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d()); else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d(); else return b.Nc(Error("Duplicate Invoke"));
                b.Nc(null)
            };
            b.push = function (b) {
                var c = a.DD[b.id].time,
                    d = b.key, e = b.Kg;
                "function" !== typeof b.Nc && (b.Nc = function () {
                });
                if (void 0 === c[d]) c[d] = e; else return b.Nc(Error("Duplicate Invoke"));
                b.Nc(null)
            };
            b.send = function (b) {
                var c = d.Cc + "://webapi.amap.com/count?",
                    k = g.extend(e({K: a.DD[b.id].K}), b.params || {}), l = g.a;
                b.params && b.params.rs && !b.params.type && (b = a.DD[b.id].time, delete b.y5, k = g.extend(k, b));
                b = [];
                for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
                b.push("jl=" + (d.PJ ? 1 : 0));
                if (l.kk(window.performance, "performance") &&
                    l.kk(window.performance.getEntriesByType, "function")) {
                    var n = 0, p = ["webapi.amap.com", "jsapi-test.amap.test", "localhost"],
                        q = ["/maps", "/css"];
                    l.Ub(window.performance.getEntriesByType("resource"), function (a) {
                        var b = void 0, c = void 0;
                        a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
                        a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
                        b && c && l.ka(p, b) && l.ka(q, c) && (n += parseInt(a.responseEnd - a.startTime))
                    });
                    0 !== n && b.push("sd=" + n)
                }
                new g.kb.Ab(c + b.join("&"))
            };
            var e = function (a) {
                var b = g.l;
                a = g.f.W3(a.K);
                return {
                    type: "q",
                    resolution: a.width + "*" + a.height,
                    k: d.key,
                    u: d.Ao,
                    iw: b.Nf ? 1 : 0,
                    cw: b.t2 ? 1 : 0,
                    gc: b.WR,
                    m: b.ba ? 1 : 0,
                    cv: b.Yp ? 1 : 0,
                    pf: b.Fz,
                    dpr: window.devicePixelRatio,
                    screenwidth: screen.width,
                    scale: b.BL || 0,
                    detect: b.ja ? 1 : 0,
                    v: d.Xl
                }
            }
        }
    })();
    (function () {
        if (!g.KL) {
            var a = g.a.oD({o: "Conf", extend: "extend", l: "Browser", Bw: "uncodeCoords"});
            g.KL = function () {
                var b = new g.KA(function () {
                    return {
                        A: function () {
                            this.tx = {pk: 0, oE: 0};
                            this.Tk = {};
                            this.ro = [];
                            this.Rp = {};
                            this.Wj = {};
                            this.Tt = 0;
                            this.h_ = 500
                        }, yh: function (a, b) {
                            var e = a.Od, f = a.Je, h = "building" === a.ha[0];
                            (f && e !== this.tx.oE && this.tx.oE || !f && !h && e !== this.tx.pk && this.tx.pk) && this.Rla(!!f);
                            f ? this.tx.oE = e : h || (this.tx.pk = e);
                            this.xta(a, b)
                        }, Rla: function (a) {
                            if (a) this.kX(); else if (!a && Object.keys(this.Tk).length) for (var b in this.Tk) this.Tk.hasOwnProperty(b) &&
                            (a = this.Tk[b], a.Ot || a.abort())
                        }, Rya: function () {
                            this.Tt > this.h_ && this.fU(Object.keys(this.Wj).slice(0, Math.floor(this.h_ / 2)))
                        }, fU: function (a) {
                            for (var b = 0, e = a.length; b < e; b++) delete this.Wj[a[b]];
                            this.Tt -= a.length
                        }, PC: function (a) {
                            var b = a.ha;
                            a = a.Je;
                            var e = new XMLHttpRequest;
                            e.Oq = "";
                            e.AE = [(new Date).getTime() + "_" + Math.random(), a ? 1 : 0, b.join("|")].join("-");
                            return e
                        }, d5: function (a, b, e) {
                            var f = this, h = a.Jb, k = a.Je, l = [], m = h.filter(function (a) {
                                var b = f.Wj[a.key];
                                if (b) {
                                    if (b.$Z) return !0;
                                    l.push(a.key)
                                }
                                return !1
                            }), n =
                                !1;
                            if (m.length && ((n = m.length === h.length) || "function" !== typeof b || b(a, m), !k)) {
                                var p = [];
                                m.forEach(function (a) {
                                    a = a.key;
                                    p.push.apply(p, f.Wj[a]);
                                    delete f.Wj[a]
                                });
                                this.Tt -= m.length;
                                this.Ws(this.extend({}, a, {fF: p, Od: a.Od, Dn: n}), e)
                            }
                            !k && l.length && this.fU(l);
                            this.Rya();
                            return n
                        }, xta: function (a, b) {
                            function e(e, f) {
                                var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
                                if (p.Tk[q.AE] || p.oga(q)) {
                                    var n = e.split("|");
                                    f && (n[0] = f + n[0]);
                                    var t = n, x = "";
                                    n[n.length - 1] && (x = n[n.length - 1], t = n.splice(0, n.length - 1));
                                    if (k) for (var n =
                                        0, y = t.length; n < y; n++) {
                                        if (t[n]) {
                                            var E = JSON.parse(t[n]);
                                            if (E.length) {
                                                var C = E[0].split("-").slice(0, -1).join("/");
                                                p.Wj[C] ? p.Wj[C].push(E) : (p.Wj[C] = [E], p.Tt++);
                                                m && (p.Wj[C].$Z = !0)
                                            }
                                        }
                                    } else p.Ws(p.extend({}, a, {fF: t, Od: h, Dn: m, BS: !0}), b);
                                    return x
                                }
                                r || (p.Ml(l, b), r = !0)
                            }

                            var f = this, h = a.Od, k = a.Je, l = a.Jb, m = a.url;
                            if (!this.d5(a, function (a, b) {
                                var c = a.Jb, d = a.url, e = d.match(/&t=([^&]+)/)[1].split(";");
                                b.reverse().forEach(function (a) {
                                    a = c.indexOf(a);
                                    -1 !== a && e.splice(a, 1)
                                });
                                a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";"))
                            }, b)) {
                                if (this.dC() &&
                                    (this.kX(), k)) {
                                    this.Ml(l, b);
                                    return
                                }
                                var n = 0, p = this, q = this.PC(a);
                                k ? this.ro.push(q) : (this.Tk[q.AE] = q, q.Jb = l, q.Nc = b);
                                var r = !1;
                                q.onreadystatechange = function () {
                                    if (4 === q.readyState && 0 === q.status) q.Ot || (q.Ot = !0, f.Ml(l, b), q.onreadystatechange = null, k ? f.I0(q) : delete f.Tk[q.AE]), q = null; else if (!q.Ot) if (3 === q.readyState) {
                                        var h = q.responseText.substring(n);
                                        q.Oq = e(h, q.Oq);
                                        n = q.responseText.length
                                    } else 4 === q.readyState && (h = q.responseText.substring(n), a.Di && (h += "|"), e(h, q.Oq, !0), q.Oq = "", k ? f.I0(q) : delete f.Tk[q.AE],
                                        q = null)
                                };
                                q.onerror = function () {
                                };
                                q.open("GET", m, !0);
                                q.send();
                                k && (q.Y9 = l.map(function (a) {
                                    return a.key
                                }))
                            }
                        }, bE: function (a) {
                            function b(d, p, r) {
                                var s = [r, d, p].join("/");
                                d = e.filter(function (a) {
                                    return a.key === s
                                })[0];
                                18 < k && !n && (s += "/" + k);
                                if (d && "loaded" !== d.status && -1 !== m.indexOf(t)) if ("limg" === t) p = h[1], d.td = p, "string" === typeof p.b && (p.b = w.cB(p.b)), r = "", (r = "object" === typeof p.u ? p.u.url : p.u) && (p.u = {
                                    url: r,
                                    Dk: "limg-" + d.key + "-" + f
                                }); else {
                                    p = {
                                        Ig: d.ta,
                                        Pi: s,
                                        Oa: h,
                                        Gd: t,
                                        ly: a.Fu,
                                        HD: "building" === t,
                                        Ci: "poilabel" === t || "roadlabel" ===
                                            t || "building" === t && q
                                    };
                                    if ("poilabel" === t || "roadlabel" === t) p.td = d.td;
                                    t === m[m.length - 1] && (d.status = "loaded");
                                    l.push(p)
                                }
                            }

                            var e = a.Jb, f = a.OS, h = a.RC, k = a.Od, l = a.Pc, m = a.ha,
                                n = a.Nf, p = a.ZR, q = a.Be, r = h[0].split("-"),
                                s = parseInt(r[1]), u = parseInt(r[2]), v = parseInt(r[0]),
                                w = this, t = r[3], r = Math.pow(2, v);
                            10 > v && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v));
                            b(s, u, v)
                        }, I0: function (a) {
                            for (var b = this.ro.length - 1; 0 <= b; b--) this.ro[b] === a && this.ro.splice(b, 1)
                        }, oga: function (a) {
                            for (var b = 0, e = this.ro.length; b < e; b++) if (this.ro[b] === a) return !0;
                            return !1
                        }, dC: function () {
                            return Object.keys(this.Tk).length ? !0 : !1
                        }, kX: function () {
                            if (this.ro.length) {
                                for (var a = this.ro.length - 1; 0 <= a; a--) {
                                    var b = this.ro[a];
                                    b.Ot || b.abort();
                                    b.Y9 && this.fU(b.Y9)
                                }
                                this.ro.length = 0
                            }
                        }, Ml: function (a, b) {
                            b(null, {Jb: a, T5: !0, disabled: this.disabled}, {el: !0})
                        }
                    }
                }, {batchSend: !1});
                b.xf(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.o) + ",\n      " + a.extend + ": " + g.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords + ": " +
                    g.a.Bw.toString() + "\n     }"));
                return b
            }
        }
    })();
    g.f = {
        CLASS_NAME: "DomUtil", get: function (a) {
            return "string" === typeof a ? document.getElementById(a) : a
        }, JD: function (a, b, c) {
            return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.f.An(a.parentNode, c) ? g.f.JD(a.parentNode, b) : !1
        }, No: function (a) {
            if (!a) return [0, 0];
            var b = a.offsetWidth, c = a.offsetHeight;
            b && c || !a.childNodes[0] || (b = b || a.childNodes[0].offsetWidth, c = c || a.childNodes[0].offsetHeight);
            window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
            return [b, c]
        }, QFa: function (a, b) {
            var c = document.head || document.getElementsByTagName("head")[0];
            if (c) {
                var d = document.createElement("link");
                d.setAttribute("rel", "stylesheet");
                d.setAttribute("type", "text/css");
                d.setAttribute("href", a);
                b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
            } else document.write("<link rel='stylesheet' href='" + a + "'/>")
        }, $c: function (a, b) {
            var c = a.style[b];
            !c && a.currentStyle && (c = a.currentStyle[b]);
            c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
                null)) ? c[b] : null);
            c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
            c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
            return "auto" === c ? null : c
        }, nJ: function (a) {
            if (a) return new g.zd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.Gs ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0)
        }, W3: function (a) {
            return new g.zd(a.clientWidth, a.clientHeight)
        }, UR: function (a) {
            var b = 0, c = 0, d = a, e = document.body, f = document.documentElement,
                h, k = g.l.wv;
            do {
                b += d.offsetTop || 0;
                c += d.offsetLeft || 0;
                b += parseInt(g.f.$c(d, "borderTopWidth"), 10) || 0;
                c += parseInt(g.f.$c(d, "borderLeftWidth"), 10) || 0;
                h = g.f.$c(d, "position");
                if (d.offsetParent === e && "absolute" === h) break;
                if ("fixed" === h) {
                    b += e.scrollTop || f.scrollTop || 0;
                    c += e.scrollLeft || f.scrollLeft || 0;
                    break
                }
                d = d.offsetParent
            } while (d);
            d = a;
            do {
                if (d === e) break;
                b -= d.scrollTop || 0;
                c -= d.scrollLeft || 0;
                g.f.cpa() || !g.l.G$ && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== g.f.$c(d, "overflow-y") && "hidden" !== g.f.$c(d, "overflow") &&
                (c += 17));
                d = d.parentNode
            } while (d);
            return new g.H(c, b)
        }, cpa: function () {
            g.f.nea || (g.f.nea = !0, g.f.mea = "ltr" === g.f.$c(document.body, "direction"));
            return g.f.mea
        }, create: function (a, b, c, d) {
            a = document.createElement(a);
            c && (a.className = c);
            b && (d && "before" === d ? b.insertBefore(a, b.firstChild) : b.appendChild(a));
            return a
        }, f3: function () {
            document.selection && document.selection.empty && document.selection.empty();
            this.jja || (this.jja = document.onselectstart, document.onselectstart = g.a.B3)
        }, s3: function () {
        }, Kya: function (a,
                          b, c) {
            c ? this.Wa(a, b) : this.fb(a, b)
        }, An: function (a, b) {
            if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
        }, Wa: function (a, b) {
            a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.f.An(a, b) || (a.className += (a.className ? " " : "") + b))
        }, zxa: function (a, b) {
            a && (a.className = b || "")
        }, fb: function (a, b) {
            function c(a, c) {
                return c === b ? "" : a
            }

            a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
        }, t4: function (a,
                         b) {
            return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
        }, Yq: function (a, b) {
            if (a.style) if ("opacity" in a.style) a.style.opacity = b; else if ("filter" in a.style) {
                var c = Math.round(100 * b);
                a.style.filter = "";
                100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
            }
        }, bV: function (a) {
            for (var b = document.documentElement.style, c = 0; c < a.length; c +=
                1) if (a[c] in b) return a[c];
            return !1
        }, K4: function (a) {
            var b = g.l.FL;
            return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
        }, OEa: function (a, b) {
            return g.f.K4(b.add(b.Pd(-1 * a))) + (" scale(" + a + ") ")
        }, f9: function (a, b, c) {
            a.bj = b;
            !c && g.l.TH ? (b = g.f.K4(b), c = a.style[g.f.qg].split("rotate"), 1 < c.length ? (c[0] = b, a.style[g.f.qg] = c.join("rotate")) : a.style[g.f.qg] = b, g.l.L6 && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
        }, Wd: function (a) {
            a.bj || (a.bj = a.style.left ?
                new g.H(parseInt(a.style.left), parseInt(a.style.top)) : new g.H(0, 0));
            return a.bj
        }, CHa: function (a, b) {
            a = a instanceof Array ? a : [a];
            for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
        }, Y8: function (a, b) {
            ";" !== b[b.length - 1] && (b += ";");
            return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
        }, ab: function (a, b) {
            a = a instanceof Array ? a : [a];
            for (var c = 0; c < a.length; c += 1) for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
            return this
        }, Kz: function (a) {
            for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
        },
        remove: function (a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }, rotate: function (a, b, c) {
            var d = g.f.qg;
            c = c || {x: a.clientWidth / 2, y: a.clientHeight / 2};
            d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[g.f.qt[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
        }, G4: function (a, b, c) {
            var d = g.f.qg;
            c = c ||
                {x: a.clientWidth / 2, y: a.clientHeight / 2};
            return d ? g.f.qt[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.f.qt[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
        }, zm: function (a, b, c) {
            a.width = b;
            a.height = c
        }, getElementsByClassName: function (a, b, c) {
            b = b || "*";
            c = c || document;
            if (c.getElementsByClassName) return c.getElementsByClassName(a);
            b = c.getElementsByTagName(b);
            a = RegExp("(^|\\s)" + a + "(\\s|$)");
            c = [];
            for (var d = 0, e; d < b.length; d++) e = b[d], a.test(e.className) && c.push(e);
            return c
        }, fillText: function (a, b) {
            if (a) return void 0 !== a.textContent ?
                a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
        }
    };
    (function () {
        var a = g.f.bV(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
            b;
        g.extend(g.f, {
            f3: function () {
                g.F.h(window, "selectstart", g.F.preventDefault);
                if (a) {
                    var c = document.documentElement.style;
                    "none" !== c[a] && (b = c[a], c[a] = "none")
                }
            }, s3: function () {
                g.F.G(window, "selectstart", g.F.preventDefault);
                a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
            }, Voa: function () {
                g.F.h(window, "dragstart", g.F.preventDefault)
            }, Epa: function () {
                g.F.G(window, "dragstart", g.F.preventDefault)
            }
        })
    })();
    g.f.qg = g.f.bV(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
    g.f.qt = {
        transform: "transform",
        WebkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        MozTransform: "-moz-transform",
        msTransform: "-ms-transform"
    };
    g.f.LF = g.f.bV(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
    g.f.iBa = "webkitTransition" === g.f.LF || "OTransition" === g.f.LF ? g.f.LF + "End" : "transitionend";
    g.F = {
        h: function (a, b, c, d) {
            function e(b) {
                b = b || window.event;
                b.target = b.target || b.srcElement;
                return c.call(d || a, b, k)
            }

            var f = g.a.zb(a) + "_" + g.a.zb(c) + "_" + g.a.zb(d || a), h = b + f;
            if (a[h]) return this;
            var k = b;
            g.l.eR && "mousewheel" === b && (b = "DOMMouseScroll");
            if (g.l.Gs && ("mouseover" === b || "mouseout" === b)) {
                var l = e;
                b = "mouseover" === b ? "mouseenter" : "mouseleave";
                e = function (a) {
                    l(a)
                }
            }
            if (g.l.U7 && 0 === b.indexOf("touch")) return a[h] = e, this.Zla(a, b, e, f);
            g.l.Uf && "dblclick" === b && this.Xla && this.Xla(a, e, f);
            "addEventListener" in a ? a.addEventListener(b,
                e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
            a[h] = e;
            return this
        }, Dj: function (a, b, c, d) {
            var e = this;
            this.h(a, b, function h(k) {
                e.G(a, b, h, d);
                return c.call(d || a, k || window.event, b)
            }, d)
        }, G: function (a, b, c, d) {
            c = g.a.zb(a) + "_" + g.a.zb(c) + "_" + g.a.zb(d || a);
            d = b + c;
            var e = a[d];
            g.l.eR && "mousewheel" === b && (b = "DOMMouseScroll");
            !g.l.Gs || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
            g.l.U7 && -1 < b.indexOf("touch") ? this.Gwa(a, b, c) : g.l.Uf && "dblclick" === b && this.Cwa ? this.Cwa(a, c) :
                "removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
            a[d] = void 0;
            return this
        }, IHa: function (a, b) {
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b.target.dispatchEvent(c)
        }, dma: function (a) {
            a.af = "info";
            g.l.Ve && g.F.stopPropagation(a)
        }, stopPropagation: function (a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        },
        iya: function (a) {
            var b = g.F.dma;
            g.l.Uf && (g.F.h(a, "touchstart", b, this), g.F.h(a, "touchmove", b, this), g.F.h(a, "touchend", b, this));
            g.l.ba || (g.F.h(a, "mousedown", b, this), g.F.h(a, "mouseup", b, this), g.F.h(a, "mousemove", b, this), g.F.h(a, "mousewheel", b, this));
            g.l.JT && (g.F.h(a, "pointerdown", b, this), g.F.h(a, "pointerup", b, this), g.F.h(a, "pointermove", b, this));
            g.l.N6 && (g.F.h(a, "MSPointerDown", b, this), g.F.h(a, "MSPointerUp", b, this), g.F.h(a, "MSPointerMove", b, this))
        }, preventDefault: function (a) {
            a.preventDefault ? a.preventDefault() :
                a.returnValue = !1;
            return this
        }, stop: function (a) {
            return g.F.preventDefault(a).stopPropagation(a)
        }, yxa: function (a) {
            return a && a.getBoundingClientRect ? (a.uM = a.getBoundingClientRect(), a.WW = [a.clientLeft, a.clientTop], !0) : !1
        }, zza: function (a) {
            a.uM && (a.uM = null, a.WW = null)
        }, Tpa: function (a, b) {
            var c = b.uM || b.getBoundingClientRect(), d = b.WW || [b.clientLeft, b.clientTop];
            return new g.H(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
        }, mm: function (a, b) {
            if (b && b.getBoundingClientRect) return this.Tpa(a, b);
            var c = document.body,
                d = document.documentElement,
                c = new g.H(g.l.Uf ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.Uf ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
            return b ? c.bb(g.f.UR(b)) : c
        }, Q5: function (a) {
            return 1 === a.which || 0 === a.button || 1 === a.button
        }
    };
    g.extend(g.F, {
        xO: [], l_: !1, Zla: function (a, b, c, d) {
            switch (b) {
                case "touchstart":
                    return this.bma(a, b, c, d);
                case "touchend":
                    return this.$la(a, b, c, d);
                case "touchmove":
                    return this.ama(a, b, c, d)
            }
        }, Po: function (a) {
            if (g.l.JT) return a;
            switch (a) {
                case "pointerdown":
                    return "MSPointerDown";
                case "pointerup":
                    return "MSPointerUp";
                case "pointercancel":
                    return "MSPointerCancel";
                case "pointermove":
                    return "MSPointerMove"
            }
        }, bma: function (a, b, c, d) {
            function e(a) {
                for (var b = !1, d = 0; d < f.length; d += 1) if (f[d].pointerId === a.pointerId) {
                    b = !0;
                    break
                }
                b || f.push(a);
                a.touches = f.slice();
                a.changedTouches = [a];
                c(a)
            }

            var f = this.xO;
            a["_amap_touchstart" + d] = e;
            a.addEventListener(this.Po("pointerdown"), e, !1);
            this.l_ || (a = function (a) {
                for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
                    f.splice(b, 1);
                    break
                }
            }, document.documentElement.addEventListener(this.Po("pointerup"), a, !1), document.documentElement.addEventListener(this.Po("pointercancel"), a, !1), this.l_ = !0);
            return this
        }, ama: function (a, b, c, d) {
            function e(a) {
                if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
                    0 !== a.buttons) {
                    for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
                        f[b] = a;
                        break
                    }
                    a.touches = f.slice();
                    a.changedTouches = [a];
                    c(a)
                }
            }

            var f = this.xO;
            a["_amap_touchmove" + d] = e;
            a.addEventListener(this.Po("pointermove"), e, !1);
            return this
        }, $la: function (a, b, c, d) {
            function e(a) {
                for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
                    f.splice(b, 1);
                    break
                }
                a.touches = f.slice();
                a.changedTouches = [a];
                c(a)
            }

            var f = this.xO;
            a["_amap_touchend" + d] = e;
            a.addEventListener(this.Po("pointerup"), e, !1);
            a.addEventListener(this.Po("pointercancel"),
                e, !1);
            return this
        }, Gwa: function (a, b, c) {
            c = a["_amap_" + b + c];
            switch (b) {
                case "touchstart":
                    a.removeEventListener(this.Po("pointerdown"), c, !1);
                    break;
                case "touchmove":
                    a.removeEventListener(this.Po("pointermove"), c, !1);
                    break;
                case "touchend":
                    a.removeEventListener(this.Po("pointerup"), c, !1), a.removeEventListener(this.Po("pointercancel"), c, !1)
            }
            return this
        }
    });
    (function () {
        function a(a) {
            var b = a.target || a.srcElement;
            b.gX && f(b.gX);
            b.gX = e(function () {
                var c = b.Dp;
                if (c && c.Cp) for (var d = 0; d < c.Cp.length; d += 1) c.Cp[d].call(c, a)
            })
        }

        function b() {
            var b = this.contentDocument.defaultView;
            b.Dp = this.gca;
            b.addEventListener("resize", a);
            a.call(b, {target: b})
        }

        var c = document.attachEvent, d = navigator.userAgent.match(/(Trident|Edge)/), e = g.a.Xc,
            f = g.a.si;
        g.extend(g.F, {
            cma: function (e, f) {
                if (!e.Cp) if (e.Cp = [], c) e.Dp = e, e.attachEvent("onresize", a); else {
                    "static" === window.getComputedStyle(e).position &&
                    (e.style.position = "relative");
                    var l = e.Dp = document.createElement("object");
                    l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
                    l.gca = e;
                    l.onload = b;
                    l.type = "text/html";
                    d && e.appendChild(l);
                    l.data = "about:blank";
                    d || e.appendChild(l)
                }
                e.Cp.push(f)
            }, YGa: function (b, d) {
                b.Cp.splice(b.Cp.indexOf(d), 1);
                b.Cp.length || (c ? b.detachEvent("onresize", a) : (b.Dp.contentDocument.defaultView.removeEventListener("resize",
                    a), b.Dp = !b.removeChild(b.Dp)))
            }, Ina: function (a) {
                a.Cp = null;
                if (a.Dp) {
                    var b = a.Dp;
                    b.parentNode === a && b.parentNode.removeChild(b);
                    a.Dp = null
                }
            }
        })
    })();
    g.ub = {
        rua: g.o.Hb + "/maps", Tu: g.da.Tu, $S: 0, Ez: [], Ou: {}, Gg: function (a, b) {
            function c() {
                d += 1;
                d === e.length && b && b()
            }

            a.length || b();
            for (var d = 0, e = [], f = 0; f < a.length; f += 1) {
                var h = this.Tu[a[f]];
                if (h) for (var k = 0; k < h.length; k += 1) e.push(h[k]);
                e.push(a[f])
            }
            for (f = 0; f < e.length; f += 1) this.aR(e[f], c)
        }, KD: function (a) {
            for (var b = 0; b < a.length; b += 1) if (1 !== this.SC(a[b]).status) return !1;
            return !0
        }, aR: function (a, b) {
            var c = this.SC(a);
            if (1 === c.status) b && b(); else {
                b && c.py.push(b);
                try {
                    if (g.l.Kv && window.localStorage) {
                        var d = window.localStorage["_AMap_" +
                        a];
                        d && (d = JSON.parse(d), d.version === g.o.Fk ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
                    }
                } catch (e) {
                }
                if (0 === c.status) {
                    this.jwa(a);
                    var f = this;
                    f.$S || (f.$S = 1, window.setTimeout(function () {
                        f.$S = 0;
                        var a = f.rua + "/modules?v=" + g.o.Xl + "&key=" + g.o.key + "&m=" + f.Ez.join(",") + "&vrs=" + g.o.Fk;
                        g.ub.Rt(f.Ez.join(","));
                        f.Ez = [];
                        c.WK = f.Ita(a)
                    }, 1));
                    c.status = -1
                }
            }
        }, Rt: function (a) {
            a = ["s=rsv3&product=JsModule&key=" + g.o.key, "m=" + a];
            g.o.Xa && a.push("jscode=" + g.o.Xa);
            a = g.o.fd + "/v3/log/init?" + a.join("&");
            new g.kb.Ab(a, {callback: "callback"})
        }, load: function (a, b) {
            var c = this.Tu[a];
            if (c) {
                for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
                d.push(a);
                for (var f = 0, c = function () {
                    f += 1;
                    f === d.length && b && b()
                }, e = 0; e < d.length; e += 1) this.aR(d[e], c)
            } else this.aR(a, b)
        }, jwa: function (a) {
            for (var b = 0; b < this.Ez.length; b += 1) if (this.Ez[b] === a) return;
            this.Ez.push(a)
        }, On: function (a, b) {
            var c = this.SC(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.status = 1;
            for (var e = 0, f = c.py.length; e < f; e += 1) c.py[e]();
            c.py = []
        }, sd: function (a,
                         b) {
            var c = this;
            c.timeout = setTimeout(function () {
                1 !== c.Ou[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, 5E3)
        }, SC: function (a) {
            this.Ou[a] || (this.Ou[a] = {}, this.Ou[a].status = 0, this.Ou[a].py = []);
            return this.Ou[a]
        }, remove: function (a) {
            this.Ou[a] = null
        }, Ita: function (a) {
            g.o.mode && (a += "&mode=" + g.o.mode);
            var b = document.createElement("script");
            b.charset = "utf-8";
            a && 0 === a.indexOf(g.o.Hb) && (b.crossOrigin = "Anonymous");
            b.src = a;
            document.body.appendChild(b);
            return b
        }
    };
    window._jsload_ = function (a, b, c) {
        var d = g.ub.SC(a);
        d.WK && 0 <= g.a.indexOf(document.body.childNodes, d.WK) && document.body.removeChild(d.WK);
        d.WK = null;
        try {
            if (!c && window.localStorage && b && "" !== b && g.l.Kv) {
                var e = window.localStorage["_AMap_" + a], e = e || "{}", e = JSON.parse(e);
                e.version !== g.o.Fk || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    version: g.o.Fk,
                    script: b
                })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    version: g.o.Fk,
                    script: b,
                    css: e.css
                }))
            }
        } catch (f) {
        }
        g.ub.On(a, b)
    };
    window._cssload_ = function (a, b, c) {
        try {
            !c && window.localStorage && b && "" !== b && g.l.Kv && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                css: b,
                version: g.o.Fk
            }))
        } catch (d) {
        }
        var e = document.createElement("style");
        e.type = "text/css";
        -1 === g.o.Hb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g.o.Hb.split("://")[1]));
        "https" === g.o.Cc && (b = b.replace(/http:/gi, "https:"));
        e.styleSheet ? (a = function () {
            try {
                e.styleSheet.cssText = b
            } catch (a) {
            }
        }, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
        a = document.head || document.getElementsByTagName("head")[0];
        2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
    };
    (function (a) {
        var b = g.l;
        if (!g.indexedDB && b.Oi) {
            var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
                d = a.IDBKeyRange || a.vIa || a.cGa || a.bGa;
            if (c) {
                var e = g.a, f = null;
                a = "amap-jsapi" + (a.JAa ? "-debug" : "");
                var h = g.extend({}, g.va), k;
                try {
                    k = c.open(a), k.onsuccess = function () {
                        f = this.result;
                        h.r("dbReady", {status: "success"})
                    }, k.onerror = function () {
                        h.r("dbReady", {status: "error"})
                    }, k.onblocked = function () {
                        h.r("dbReady", {status: "blocked"})
                    }, k.onupgradeneeded = function (a) {
                        a.currentTarget.result.createObjectStore("tile",
                            {keyPath: "tileKey"})
                    }
                } catch (l) {
                    b.Oi = !1
                } finally {
                    if (!b.Oi) return
                }
                var b = function (a) {
                    return function () {
                        try {
                            return a.apply(this, arguments)
                        } catch (b) {
                            var c = arguments[arguments.length - 1];
                            "function" === typeof c && setTimeout(function () {
                                c({code: 4, JI: b})
                            }, 1)
                        }
                    }
                }, m = b(function (a, b) {
                    return null === f ? (setTimeout(function () {
                        b && b({code: 3})
                    }, 1), null) : f.transaction("tile", a).objectStore("tile")
                });
                g.indexedDB = {
                    mC: function (a, b) {
                        f ? "function" === typeof a && a() : h.h("dbReady", function (c) {
                            "success" === c.status ? "function" === typeof a &&
                                a() : "function" === typeof b && b({code: 3, status: status})
                        })
                    }, count: b(function (a) {
                        var b = this, c = arguments;
                        this.mC(function () {
                            b.Rt.apply(b, c)
                        }, a)
                    }), Rt: b(function (a) {
                        var b = m("readonly", a).count();
                        b.onsuccess = function () {
                            a(null, b.result)
                        };
                        b.onerror = function () {
                            a({code: 7})
                        }
                    }), get: b(function (a, b, c) {
                        var d = this, e = setTimeout(function () {
                            e && (e = null, c && c({code: 7}))
                        }, b.timeout || 1E3);
                        this.mC(function () {
                            d.Pea.call(d, a, function (a, b) {
                                e && (clearTimeout(e), e = null, c(a, b))
                            })
                        }, c)
                    }), Pea: b(function (a, b) {
                        var c = m("readonly", b);
                        if (e.isArray(a)) {
                            var d,
                                f;
                            (function () {
                                function e(b) {
                                    var f = c.get(a[b]);
                                    f.onsuccess = function (a) {
                                        a.target.result && (d[b] = a.target.result);
                                        h()
                                    };
                                    f.onerror = h
                                }

                                function h() {
                                    f++;
                                    f === a.length && b(null, d)
                                }

                                d = [];
                                for (var k = f = 0, l = a.length; k < l; k++) e(k)
                            })()
                        } else {
                            var h = c.get(a);
                            h.onsuccess = function (a) {
                                b && b(null, a.target.result)
                            };
                            h.onerror = function () {
                                b && b({code: 1})
                            }
                        }
                    }), add: b(function (a, b) {
                        var c = this, d = arguments;
                        this.mC(function () {
                            c.kca.apply(c, d)
                        }, b)
                    }), kca: b(function (a, b) {
                        function c() {
                            0 === --f && b(null)
                        }

                        e.isArray(a) || (a = [a]);
                        var d = a.length, f =
                            d, h = 0, k = Math.ceil(d / 5), l = setInterval(function () {
                            if (h++ < k) {
                                var e = 5 * h;
                                e > d && (e = d);
                                for (var f = m("readwrite", b), s = 5 * (h - 1); s < e; s++) {
                                    var E = f.put(a[s]);
                                    E.onsuccess = E.onerror = c
                                }
                            } else clearInterval(l)
                        }, 32)
                    }), remove: b(function (a, b) {
                        var c = this, d = arguments;
                        this.mC(function () {
                            c.wka.apply(c, d)
                        }, b)
                    }), wka: b(function (a, b) {
                        var c = m("readwrite", b);
                        e.isArray(a) || (a = [a]);
                        a = a.sort();
                        c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function (c) {
                            if (c = c.target.result) {
                                if (e.ka(c.value.tileKey, a)) c["delete"]();
                                for (var d = -1,
                                         f = 0, h = a.length; f < h; f++) if (a[f] > c.value.tileKey) {
                                    d = f;
                                    break
                                }
                                c["continue"](a[d])
                            } else b && b(null)
                        }
                    }), clear: b(function (a) {
                        var b = this, c = arguments;
                        this.mC(function () {
                            b.dG.apply(b, c)
                        }, a)
                    }), dG: b(function (a) {
                        var b = m("readwrite", a).clear();
                        b.onsuccess = function () {
                            a && a(null)
                        };
                        b.onerror = function () {
                            a && a({code: 2})
                        }
                    })
                }
            } else b.Oi = !1
        }
    })(window);
    (function () {
        function a(a) {
            u.data.keys = u.data.keys.filter(function (b) {
                return !r.ka(a, b)
            }).concat(a)
        }

        function b(a) {
            var b = g.o.Fk + "|" + a.Pi.replace(/\//g, ",") + "|" + (a.Nf ? "w" : "v") + "|", c;
            c = a.ja;
            var d = a.Be;
            c = [c ? 1 : 0, q.ba ? 1 : 0, d ? 1 : 0].join();
            return b + c + "|" + m(a.url)
        }

        function c() {
            u.data.keys.length >= u.YL && d()
        }

        function d() {
            var a = u.data.keys.length, b = Math.floor(a / 2);
            a > u.YL && (b = Math.floor(a - u.YL / 2));
            a = u.data.keys.slice(0, b);
            u.data.keys = u.data.keys.slice(b + 1);
            s.remove(a, function (a) {
                a && 3 === a.code && (q.Oi = !1)
            })
        }

        function e() {
            var a =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.Ts;
            k();
            w.setItem(u.key, u.data, !0);
            f(a)
        }

        function f(a) {
            q.Oi && s && s.clear(function (b) {
                b && 3 === b.code && (q.Oi = !1);
                a()
            })
        }

        function h() {
            k();
            var a = w.getItem(u.key, !0);
            a && (a.vdataVer === u.data.vdataVer && a.apiVer === u.data.apiVer ? u.data = a : e())
        }

        function k() {
            u.data = {vdataVer: q.mf, apiVer: g.o.Fk, keys: [], config: {}, fsTiles: {}};
            u.rt = {}
        }

        function l(a) {
            a && (u.data.vdataVer = a, q.mf = a)
        }

        function m(a) {
            var b = "limg";
            /flds=([^&]+)/.test(a) && (b = RegExp.$1);
            return b
        }

        function n(a) {
            if ("object" ===
                typeof a && null !== a) {
                var b = [];
                if (r.isArray(a)) if (Object.keys(a).length == a.length) b = a.map(function (a) {
                    return n(a)
                }); else {
                    b.push("__arrayObject");
                    var c = {}, d;
                    for (d in a) (0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d]));
                    b.push(c);
                    b.push(a.map(function (a) {
                        return n(a)
                    }))
                } else if (r.kk(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(a)); else if (r.kk(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a)); else for (d in b = {}, a) a.hasOwnProperty(d) &&
                (b[d] = n(a[d]));
                return b
            }
            return a
        }

        function p(a) {
            if ("object" === typeof a && null !== a) {
                var b = {};
                if (r.isArray(a)) if ("__Float32Array" === a[0]) b = new Float32Array(a[1]); else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]); else if ("__arrayObject" === a[0]) {
                    b = p(a[2]);
                    a = a[1];
                    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
                } else b = a.map(function (a) {
                    return p(a)
                }); else for (c in a) a.hasOwnProperty(c) && (b[c] = p(a[c]));
                return b
            }
            return a
        }

        var q = g.l, r = g.a;
        if (!g.Oj && q.Oi) {
            var s = g.indexedDB, u = {YL: 1E3, key: "_AMap_data.tileKeys"},
                v = [], w = {
                    getItem: function (a, b) {
                        var c = localStorage.getItem(a);
                        if (c && b) {
                            var d;
                            try {
                                d = JSON.parse(c)
                            } catch (e) {
                                d = null
                            }
                            c = d
                        }
                        return c
                    }, setItem: function (a, b, c) {
                        var d = b;
                        c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.mqa).length && (b.mqa = {}, d = JSON.stringify(b)));
                        try {
                            localStorage.setItem(a, d)
                        } catch (f) {
                            e()
                        }
                    }
                };
            g.Oj = {
                clear: e, get: function (c, d) {
                    function f(a) {
                        var b = {lS: l, K6: G, ZFa: w, Ug: u.data.config};
                        a && B.length && (/\|limg/.test(B[0]) ? b.q6 = a.map(function (a) {
                            return JSON.parse(a.data)
                        }).filter(function (a) {
                            return a &&
                                a.key
                        }) : b.Pc = h(a));
                        d && d(null, b);
                        w.length && (l = [], G = [])
                    }

                    function h(a) {
                        var b = [];
                        m(c.url).split(",").forEach(function (c) {
                            a.forEach(function (a) {
                                if (a = JSON.parse(a.data[c])) {
                                    var d = a.Ig;
                                    a.Ig = new g.rr(d.z, d.x, d.y);
                                    a.Ig.T = d.T;
                                    b.push(a)
                                }
                            })
                        });
                        return b
                    }

                    var k = "FS" === c.type;
                    if (!q.Kv || !(k || q.Oi && 0 !== u.data.keys.length)) return d({code: 1});
                    var l = [], w = [], B = [], G = [], H = [];
                    c.Cya.forEach(function (a) {
                        var d = !1, e = b({Pi: a.key, url: c.url, Nf: c.Nf, ja: c.q.ja, Be: c.Be});
                        k && (v.push(e), u.data.fsTiles[e] && (l.push(a), B.push(e), H.push({
                            data: p(u.data.fsTiles[e]),
                            tileKey: e
                        }), d = !0));
                        d || (q.Oi && r.ka(u.data.keys, e) ? (B.push(e), w.push(a)) : G.push(a))
                    });
                    if (k && 0 === w.length || 0 === B.length) return f(H);
                    k && H.length && H.forEach(function (a) {
                        a = r.indexOf(B, a.tileKey);
                        B.splice(a, 1)
                    });
                    s.get(B, {timeout: c.timeout || 1E3}, function (b, c) {
                        if (b || c.length !== B.length) b && 3 === b.code ? q.Oi = !1 : e(), G = w, w = [], f(null); else {
                            if (k) for (var d = c.length - 1; 0 <= d; d--) {
                                var h = c[d];
                                h && h.data ? u.data.fsTiles[h.tileKey] = n(h.data) : G.push(w.splice(d, 1)[0])
                            }
                            l = w;
                            w = [];
                            f(c);
                            a(B)
                        }
                    });
                    (G.length || w.length) && f(H)
                }, Cw: function (a) {
                    a.Jb.forEach(function (c) {
                        c =
                            b({Pi: c.key, url: a.url, Nf: a.Nf, ja: a.q.ja, Be: a.Be});
                        u.rt[c] && delete u.rt[c]
                    })
                }, set: function (a, c) {
                    a.mf && a.mf !== u.data.vdataVer && (l(a.mf), e(), c && c({code: 2}));
                    !a.td && a.Pc ? a.Pc.forEach(function (c) {
                        var d = b({Pi: c.Pi, url: a.url, Nf: a.Nf, ja: a.q.ja, Be: a.Be});
                        if (q.Oi || r.ka(v, d)) {
                            var e = u.rt[d] || {};
                            e[c.Gd] = c.Oa;
                            u.rt[d] = e
                        }
                    }) : a.data && a.data.forEach(function (c) {
                        var d = b({Pi: c.key, url: a.url, Nf: a.Nf, ja: a.q.ja, Be: a.Be});
                        if (q.Oi || r.ka(v, d)) u.rt[d] = c.data
                    });
                    u.data.config = {"x-vd-v": a["x-vd-v"], tv: a.tv, bgc: a.bgc}
                }, flush: function () {
                    var a =
                        !0;
                    return function () {
                        var b = this;
                        if (a) {
                            if (Object.keys(u.data.fsTiles).length) for (var c in u.data.fsTiles) u.data.fsTiles.hasOwnProperty(c) && !r.ka(v, c) && delete u.data.fsTiles[c];
                            q.Oi ? s.count(function (a, c) {
                                a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []), f(function () {
                                    b.tG(!0)
                                })) : b.tG(!0))
                            }) : b.tG(!0);
                            a = !1
                        } else b.tG()
                    }
                }(), tG: function () {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1,
                        b = {}, d = [], f = Object.keys(u.rt), h = [];
                    f.length ? (f.forEach(function (a) {
                        var c = u.rt[a];
                        a.split("|").pop().split(",").every(function (a) {
                            return "limg" ===
                            a ? !0 : c && void 0 !== c[a]
                        }) ? (r.ka(u.data.keys, a) || (h.push(a), d.push({
                            tileKey: a,
                            data: c
                        })), r.ka(v, a) && void 0 === u.data.fsTiles[a] && (u.data.fsTiles[a] = c)) : b[a] = c
                    }), d.length && (q.Oi ? s.add(d, function (a) {
                        a ? 3 !== a.code ? e() : q.Oi = !1 : (u.data.keys = u.data.keys.concat(h), w.setItem(u.key, u.data, !0), c())
                    }) : w.setItem(u.key, u.data, !0)), u.rt = b) : (a && w.setItem(u.key, u.data, !0), c())
                }
            };
            h()
        }
    })();
    g.U = g.da.extend({
        A: function (a, b, c) {
            var d = parseFloat(b), e = parseFloat(a);
            if (isNaN(a) || isNaN(b)) throw "Invalid Object: LngLat(" + e + ", " + d + ")";
            !0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
            this.Q = d;
            this.R = e;
            this.lng = Math.round(1E6 * e) / 1E6;
            this.lat = Math.round(1E6 * d) / 1E6
        }, DR: function () {
            return g.a.xb(this.R, 6)
        }, AR: function () {
            return g.a.xb(this.Q, 6)
        }, add: function (a, b) {
            return new g.U(this.R + a.R, this.Q + a.Q, b)
        }, bb: function (a, b) {
            return new g.U(this.R - a.R, this.Q - a.Q, b)
        }, nd: function (a,
                         b) {
            return new g.U(this.R / a, this.Q / a, b)
        }, Pd: function (a, b) {
            return new g.U(this.R * a, this.Q * a, b)
        }, He: function (a) {
            return g.Ht.distance(this, a)
        }, offset: function (a, b) {
            if (isNaN(a) || isNaN(b)) return !1;
            var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.Q * Math.PI / 180)),
                c = this.R + 180 * c / Math.PI, d = 2 * Math.asin(Math.round(b) / 12756274);
            return new g.U(c, this.Q + 180 * d / Math.PI)
        }, hb: function (a) {
            a = g.a.Ka(a);
            return a instanceof g.U ? 1E-9 >= Math.max(Math.abs(this.Q - a.Q), Math.abs(this.R - a.R)) : !1
        }, toString: function () {
            return g.a.xb(this.R,
                6) + "," + g.a.xb(this.Q, 6)
        }, xl: function () {
            return [this.R, this.Q]
        }, eb: function () {
            var a = this.controlPoints, b = new g.U(this.R, this.Q);
            a && (b.controlPoints = [].concat(a));
            return b
        }
    });
    g.U.Tqa = function (a, b, c) {
        c = c + 1 || Math.round(Math.abs(a.R - b.R));
        if (!c || 0.001 > Math.abs(a.R - b.R)) return [];
        var d = [], e = Math.PI, f = g.Nm.Ru, h = g.Nm.pwa, k = Math.asin, l = Math.sqrt,
            m = Math.sin, n = Math.pow, p = Math.cos, q = Math.atan2, r = a.Q * f;
        a = a.R * f;
        var s = b.Q * f;
        b = b.R * f;
        for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, w, t, f = 1; f < c; f += 1) u = 1 / c * f, v = m((1 - u) * k) / m(k), w = m(u * k) / m(k), u = v * p(r) * p(a) + w * p(s) * p(b), t = v * p(r) * m(a) + w * p(s) * m(b), v = v * m(r) + w * m(s), v = q(v, l(n(u, 2) + n(t, 2))), u = q(t, u), b > a ? (u < a && (u += 2 * e), u > b && (u -= 2 * e)) :
            (u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.U(u * h, v * h, !0));
        return d
    };
    g.U.Yb({
        DR: "getLng",
        AR: "getLat",
        add: "add",
        bb: "subtract",
        nd: "divideBy",
        Pd: "multiplyBy",
        He: "distance",
        offset: "offset",
        hb: "equals",
        toString: "toString"
    });
    g.pe = g.da.extend({
        A: function () {
            this.CLASS_NAME = "AMap.Bounds";
            var a = null, b = null;
            if (1 === arguments.length && arguments[0] instanceof Array) a = new g.U(arguments[0][0], arguments[0][1], !0), b = new g.U(arguments[0][2], arguments[0][3], !0); else if (2 === arguments.length) a = g.a.Ka(arguments[0]), b = g.a.Ka(arguments[1]); else if (4 === arguments.length) a = new g.U(arguments[0], arguments[1]), b = new g.U(arguments[2], arguments[3]); else if (0 === arguments.length) a = new g.U(-180, -90), b = new g.U(180, 90); else throw "Invalid Object: Bounds(" +
            arguments.join(",") + ")";
            this.wc = a;
            this.oc = b
        }, lv: function () {
            return this.wc
        }, Sy: function () {
            return this.oc
        }, ek: function () {
            return new g.U(this.wc.R, this.oc.Q, !0)
        }, Qo: function () {
            return new g.U(this.oc.R, this.wc.Q, !0)
        }, contains: function (a) {
            var b = this.wc, c = this.oc, d;
            if (a instanceof g.vp) return this.hV().contains(a);
            a instanceof g.pe ? (d = a.wc, a = a.oc) : d = a = g.a.Ka(a);
            var e = d.R, f = b.R, h = a.R, k = c.R;
            f > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
            return d.Q >= b.Q && a.Q <= c.Q && e >= f && h <= k
        }, $g: function (a) {
            var b = this.wc, c = this.oc,
                d = a.wc;
            a = a.oc;
            var e = a.R >= b.R && d.R <= c.R;
            return a.Q >= b.Q && d.Q <= c.Q && e
        }, yi: function () {
            return new g.U(this.wc.R > this.oc.R ? (this.wc.R + this.oc.R + 360) / 2 % 360 : (this.wc.R + this.oc.R) / 2, (this.wc.Q + this.oc.Q) / 2)
        }, extend: function (a) {
            this.wc.R = Math.min(this.wc.R, a.R);
            this.wc.Q = Math.min(this.wc.Q, a.Q);
            this.oc.R = Math.max(this.oc.R, a.R);
            this.oc.Q = Math.max(this.oc.Q, a.Q);
            return this
        }, yza: function (a) {
            return this.extend(a.wc).extend(a.oc)
        }, toString: function () {
            return this.wc.toString() + ";" + this.oc.toString()
        }, eb: function () {
            return new g.pe(this.wc.eb(),
                this.oc.eb())
        }, hb: function (a) {
            return a instanceof g.pe ? this.wc.hb(a.wc) && this.oc.hb(a.oc) : !1
        }, wj: function () {
            return Math.abs(this.oc.R - this.wc.R)
        }, uj: function () {
            return Math.abs(this.wc.Q - this.oc.Q)
        }, hV: function (a) {
            var b = [this.lv(), this.Qo(), this.Sy(), this.ek()];
            a && b.push(this.lv());
            return new g.vp(b)
        }, Gya: function (a) {
            return new g.Xf(a.lc(this.ek(), 20), a.lc(this.Qo(), 20))
        }, vR: function (a, b) {
            return this.hV(b).vR(a)
        }, sR: function (a) {
            return this.Gya(a).yi()
        }
    });
    g.pe.Yb({
        lv: "getSouthWest",
        Sy: "getNorthEast",
        ek: "getNorthWest",
        Qo: "getSouthEast",
        contains: "contains",
        $g: "intersects",
        yi: "getCenter",
        extend: "extend"
    });
    g.H = g.da.extend({
        A: function (a, b, c) {
            if (isNaN(a) || isNaN(b)) throw "Invalid Object: Pixel(" + a + ", " + b + ")";
            this.x = c ? Math.round(a) : Number(a);
            this.y = c ? Math.round(b) : Number(b)
        }, wf: function () {
            return this.x
        }, ve: function () {
            return this.y
        }, add: function (a, b) {
            return new g.H(this.x + a.x, this.y + a.y, b)
        }, bb: function (a, b) {
            return new g.H(this.x - a.x, this.y - a.y, b)
        }, nd: function (a, b) {
            return new g.H(this.x / a, this.y / a, b)
        }, Pd: function (a, b) {
            return new g.H(this.x * a, this.y * a, b)
        }, He: function (a) {
            var b = a.x - this.x;
            a = a.y - this.y;
            return Math.sqrt(b *
                b + a * a)
        }, floor: function () {
            return new g.H(Math.floor(this.x), Math.floor(this.y))
        }, round: function () {
            return new g.H(this.x, this.y, !0)
        }, hb: function (a) {
            return a instanceof g.H && this.x === a.x && this.y === a.y
        }, eb: function (a) {
            return new g.H(this.x, this.y, a)
        }, toString: function () {
            return this.x + "," + this.y
        }, xl: function () {
            return [this.x, this.y]
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, direction: function () {
            var a = this.x, b = this.y;
            if (0 === a && 0 === b) return null;
            if (0 === a) return 0 < b ? 90 : 270;
            var c = 180 *
                Math.atan(b / a) / Math.PI;
            return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
        }, Nu: function (a) {
            var b = this.length(), c = a.length();
            return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
        }, Aoa: function (a) {
            var b = this.length(), c = a.length();
            return b && c ? (this.x * a.x + this.y * a.y) / c / b : null
        }, toFixed: function (a) {
            this.x = g.a.xb(this.x, a);
            this.y = g.a.xb(this.y, a);
            return this
        }
    });
    g.H.Yb({
        wf: "getX",
        ve: "getY",
        add: "add",
        bb: "subtract",
        nd: "divideBy",
        Pd: "multiplyBy",
        He: "distance",
        hb: "equals",
        toString: "toString"
    });
    g.zd = g.da.extend({
        A: function (a, b, c) {
            if (isNaN(a) || isNaN(b)) throw "Invalid Object: Size(" + a + ", " + b + ")";
            this.width = c ? Math.round(a) : Number(a);
            this.height = c ? Math.round(b) : Number(b)
        }, eb: function () {
            return new g.zd(this.width, this.height)
        }, wj: function () {
            return this.width
        }, uj: function () {
            return this.height
        }, RE: function () {
            return new g.H(this.wj(), this.uj())
        }, contains: function (a) {
            return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
        }, hb: function (a) {
            return a instanceof g.zd && this.width ===
                a.width && this.height === a.height
        }, toString: function () {
            return this.wj() + "," + this.uj()
        }
    });
    g.zd.Yb({wj: "getWidth", uj: "getHeight", toString: "toString"});
    g.vp = g.da.extend({
        A: function (a) {
            this.CLASS_NAME = "AMap.ArrayBounds";
            a = g.a.Ka(a);
            this.path = [];
            for (var b = 0; b < a.length; b += 1) this.path.push([a[b].R, a[b].Q]);
            this.bounds = this.Td = a
        }, contains: function (a, b) {
            if (a instanceof g.vp) return g.Ht.isRingInRing(a.path, this.path);
            a instanceof g.H ? a = [a.x, a.y] : a instanceof g.U && (a = [a.R, a.Q]);
            return g.yd.Ud(a, this.path, b)
        }, toBounds: function () {
            for (var a = new g.pe(180, 90, -180, -90), b = this.Td.length - 1; 0 <= b; b -= 1) a.extend(this.Td[b]);
            return a
        }, vR: function (a) {
            for (var b = [], c = 0; c <
            this.path.length; c += 1) b[c] = a.lc(this.path[c], 20);
            return b
        }, sR: function (a) {
            return this.toBounds().sR(a)
        }, yi: function () {
            return this.toBounds().yi()
        }, toString: function () {
            return this.path.join(";")
        }
    });
    g.vp.Yb({contains: "contains", yi: "getCenter"});
    g.iaa = g.vp.extend({
        A: function (a) {
            this.CLASS_NAME = "AMap.CoordsBounds";
            this.path = a;
            if (a[0] instanceof g.H) {
                this.path = [];
                for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y])
            }
            this.bounds = this.Td = a
        }, toString: function () {
            return this.path.join(";")
        }
    });
    g.Xf = g.da.extend({
        A: function () {
            if (2 === arguments.length) this.kc = arguments[0], this.Xd = arguments[1]; else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
                var a = arguments[0] instanceof Array ? arguments[0] : arguments;
                this.kc = new g.H(a[0], a[1]);
                this.Xd = new g.H(a[2], a[3])
            } else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
        }, yi: function (a) {
            return new g.H((this.kc.x + this.Xd.x) / 2, (this.kc.y + this.Xd.y) / 2, a)
        }, contains: function (a) {
            var b;
            a instanceof g.Xf ? (b = a.kc, a = a.Xd) :
                b = a;
            return b.x > this.kc.x && a.x < this.Xd.x && b.y > this.kc.y && a.y < this.Xd.y
        }, wj: function () {
            return this.Xd.x - this.kc.x
        }, uj: function () {
            return this.Xd.y - this.kc.y
        }, $g: function (a, b) {
            b || 0 === b || (b = 20);
            var c = this.kc, d = this.Xd, e = a.kc, f = a.Xd, h = f.y >= c.y - b && e.y <= d.y + b;
            return f.x >= c.x - b && e.x <= d.x + b && h
        }, toString: function () {
            return this.kc + ";" + this.Xd
        }, eb: function () {
            return new g.Xf(this.kc.eb(), this.Xd.eb())
        }
    });
    g.I = {};
    g.I.TP = function (a) {
        for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) g.I.KI(b, a[c]);
        return b
    };
    g.I.e2 = function (a, b, c) {
        var d = Math.min.apply(null, a);
        a = Math.max.apply(null, a);
        var e = Math.min.apply(null, b);
        b = Math.max.apply(null, b);
        return g.I.woa(d, a, e, b, c)
    };
    g.I.buffer = function (a, b) {
        a[0] -= b;
        a[1] -= b;
        a[2] += b;
        a[3] += b
    };
    g.I.eb = function (a) {
        return a.slice()
    };
    g.I.Ud = function (a, b) {
        return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
    };
    g.I.R2 = function (a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    };
    g.I.vDa = function () {
        return [Infinity, Infinity, -Infinity, -Infinity]
    };
    g.I.woa = function (a, b, c, d, e) {
        return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
    };
    g.I.empty = function (a) {
        a[0] = a[1] = Infinity;
        a[2] = a[3] = -Infinity;
        return a
    };
    g.I.hb = function (a, b) {
        return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
    };
    g.I.extend = function (a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3])
    };
    g.I.KI = function (a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    };
    g.I.oEa = function (a) {
        return [a[0], a[1]]
    };
    g.I.pEa = function (a) {
        return [a[2], a[1]]
    };
    g.I.yi = function (a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    };
    g.I.BEa = function (a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        c = Math.sin(c);
        f = [-f, -f, f, f];
        d = [-d, d, -d, d];
        var h, k, l;
        for (h = 0; 4 > h; h += 1) k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
        return g.I.e2(f, d, e)
    };
    g.I.uj = function (a) {
        return a[3] - a[1]
    };
    g.I.PEa = function (a) {
        return [a[2] - a[0], a[3] - a[1]]
    };
    g.I.UEa = function (a) {
        return [a[0], a[3]]
    };
    g.I.VEa = function (a) {
        return [a[2], a[3]]
    };
    g.I.wj = function (a) {
        return a[2] - a[0]
    };
    g.I.$g = function (a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    };
    g.I.vh = function (a) {
        return a[2] < a[0] || a[3] < a[1]
    };
    g.I.normalize = function (a, b) {
        return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
    };
    g.I.wHa = function (a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1), d = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= d;
        a[3] += d
    };
    g.I.touches = function (a, b) {
        return g.I.$g(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
    };
    g.I.transform = function (a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        return g.I.e2([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
    };
    g.pe.Ib({
        A: function () {
            var a = g.pe.prototype.A;
            return function () {
                a.apply(this, arguments);
                this.southwest = this.wc;
                this.northeast = this.oc
            }
        }(), extend: function () {
            var a = g.pe.prototype.extend;
            return function () {
                a.apply(this, arguments);
                this.wc.lng = this.wc.R;
                this.wc.lat = this.wc.Q;
                this.oc.lng = this.oc.R;
                this.oc.lat = this.oc.Q;
                return this
            }
        }()
    });
    g.MF = g.da.extend({
        A: function (a, b, c, d) {
            this.iX = a;
            this.yX = b;
            this.MX = c;
            this.iY = d
        }, transform: function (a, b) {
            return this.w1(a.eb(), b)
        }, w1: function (a, b) {
            b = b || 1;
            a.x = b * (this.iX * a.x + this.yX);
            a.y = b * (this.MX * a.y + this.iY);
            return a
        }, Aza: function (a, b) {
            b = b || 1;
            return new g.H((a.x / b - this.yX) / this.iX, (a.y / b - this.iY) / this.MX)
        }
    });
    g.Bp = g.da.extend({
        A: function (a) {
            this.XL = a.MAX_LATITUDE || 85.0511287798;
            a.project && a.unproject && (this.lc = a.project, this.Xh = a.unproject)
        }
    });
    g.Bp.tW = {
        lc: function (a) {
            return new g.H(a.R, a.Q)
        }, Xh: function (a, b) {
            return new g.U(a.x, a.y, b)
        }
    };
    g.Bp.uba = new g.Bp({
        MAX_LATITUDE: 85.0511287798, project: function (a) {
            var b = Math.PI / 180, c = this.XL, c = Math.max(Math.min(c, a.Q), -c);
            a = a.R * b;
            b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
            return new g.H(a, b, !1)
        }, unproject: function (a, b) {
            var c = 180 / Math.PI;
            return new g.U(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
        }
    });
    g.Bp.xW = {
        XL: 85.0840591556, jM: 6356752.3142, iM: 6378137, lc: function (a) {
            var b = Math.PI / 180, c = this.XL, d = Math.max(Math.min(c, a.Q), -c), e = this.iM,
                c = this.jM;
            a = a.R * b * e;
            b *= d;
            e = c / e;
            e = Math.sqrt(1 - e * e);
            d = e * Math.sin(b);
            d = Math.pow((1 - d) / (1 + d), 0.5 * e);
            b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
            b = -c * Math.log(b);
            return new g.H(a, b)
        }, Xh: function (a, b) {
            for (var c = 180 / Math.PI, d = this.iM, e = this.jM, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h),
                l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
            return new g.U(f, h * c, b)
        }
    };
    g.$h = {};
    g.$h.rF = {
        OD: function (a, b) {
            var c = this.Qf.lc(a), d = this.scale(b);
            return this.WE.w1(c, d)
        }, nE: function (a, b, c) {
            b = this.scale(b);
            a = this.WE.Aza(a, b);
            return this.Qf.Xh(a, c)
        }, lc: function (a) {
            return this.Qf.lc(a)
        }, scale: function (a) {
            return 256 << a
        }, oq: function (a) {
            return 12756274 * Math.PI / (256 * Math.pow(2, a))
        }
    };
    g.$h.LL = g.extend({}, g.$h.rF, {
        code: "EPSG:3857",
        Qf: g.Bp.uba,
        WE: new g.MF(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
        lc: function (a) {
            return this.Qf.lc(a).Pd(6378137)
        }
    });
    g.$h.dW = g.extend({}, g.$h.rF, {
        code: "EPSG:3395", Qf: g.Bp.xW, WE: function () {
            var a = g.Bp.xW;
            return new g.MF(0.5 / (Math.PI * a.iM), 0.5, -0.5 / (Math.PI * a.jM), 0.5)
        }()
    });
    g.$h.eW = g.extend({}, g.$h.rF, {
        code: "EPSG:4326",
        Qf: g.Bp.tW,
        WE: new g.MF(1 / 360, 0.5, -1 / 360, 0.25)
    });
    g.$h.eBa = g.extend({}, g.$h.rF, {Qf: g.Bp.tW, WE: new g.MF(1, 0, 1, 0)});
    g.UJ = {
        lc: function (a, b) {
            a = g.a.Ka(a);
            return this.nj.OD(a, b || this.get("zoom"))
        }, Xh: function (a, b, c) {
            return this.nj.nE(a, b || this.get("zoom"), c)
        }, uta: function (a, b) {
            return this.lc(a, b)
        }, lEa: function (a, b) {
            return this.Xh(a, b)
        }, aq: function (a, b, c) {
            g.c.add(this, "containerToLngLat");
            var d = this.get("size").RE().nd(2);
            if (a.hb(d) && !c) return this.get("center");
            a = this.zg(a, b, c);
            return this.Qd(a)
        }, Ns: function (a, b) {
            g.c.add(this, "lngLatToContainer");
            var c = 0;
            b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) :
                b);
            var d = this.Cb(a);
            return this.Zd(d, null, c)
        }, Cb: function (a) {
            a = g.a.Ka(a);
            return this.lc(a, 20)
        }, Qd: function (a) {
            return a ? this.Xh(a, 20) : a
        }, OJ: function (a) {
            a = g.a.Ka(a);
            return this.lc(a, 20).bb(g.a.ec)
        }, r6: function (a, b) {
            b || (a = g.a.Ka(a));
            var c = [], d = !1;
            void 0 === a[0].length && (d = !0);
            for (var c = [], e = 0, f = a.length; e < f; e += 1) if (d) {
                var h = this.lc(a[e], 20).bb(g.a.ec);
                c[e] = [h.x, h.y]
            } else c[e] = this.r6(a[e], !0);
            return c
        }, qqa: function (a) {
            return this.Xh(a.add(g.a.ec), 20)
        }, mEa: function (a) {
            return this.Zd(a.add(g.a.ec))
        }, uEa: function (a) {
            return a ?
                this.lc(this.get("center"), a) : this.get("centerPixel")
        }, NBa: function (a) {
            return (new g.H(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).nd(0.14929107086948487)
        }, y7: function (a) {
            return new g.H(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y)
        }
    };
    z.PF = g.da.extend({
        ka: [g.va, g.$e],
        w: {center: new g.U(116.397128, 39.916527), zoom: 13, rotation: 0, crs: "EPSG3857"},
        A: function (a) {
            this.CLASS_NAME = "AMap.View2D";
            g.c.ya(this, a);
            a = a || {};
            a.center && (a.center = g.a.Ka(a.center));
            this.w = a
        }
    });
    z.Sb = g.da.extend({
        ka: [g.va, g.$e, g.UJ], w: {
            features: "all",
            showLabel: !0,
            dragEnable: !0,
            showIndoorMap: g.l.ba ? !1 : !0,
            lang: "zh_cn",
            keyboardEnable: !0,
            doubleClickZoom: !0,
            scrollWheel: !0,
            zoomEnable: !0,
            jogEnable: !0,
            continuousZoomEnable: !0,
            resizeEnable: !1,
            animateEnable: !0,
            rotateEnable: !1,
            labelzIndex: 99,
            showFog: !0,
            touchZoom: !0,
            zooms: [3, g.l.ba ? g.l.Kc ? 19 : 20 : 18],
            defaultCursor: "",
            limitBounds: null,
            logoUrl: g.o.Hb + "/theme/v1.3/logo@1x.png",
            logoUrlRetina: g.o.Hb + "/theme/v1.3/logo@2x.png",
            copyright: "\x3c!--v1.4.16--\x3e &copy " +
                (new Date).getFullYear() + " AutoNavi ",
            isHotspot: !g.l.ba,
            baseRender: g.l.X1,
            overlayRender: g.l.rva,
            mapStyle: "amap://styles/normal",
            showBuildingBlock: g.l.Nf,
            crs: "EPSG3857",
            rotation: 0,
            pitch: 0,
            yaw: 0,
            scale: 1,
            center: new g.U(116.397128, 39.916527),
            zoom: 13,
            detectRetina: !0,
            pitchEnable: !1,
            buildingAnimation: !1,
            maxPitch: 83,
            turboMode: !0,
            preloadMode: !1,
            workerMode: !0
        }, poiOnAMAP: function (a) {
            g.c.add(this, "poiOnAMAP");
            var b = {}, c = g.a.Ka(a.location);
            b.id = a.id;
            c && (b.y = c.Q, b.x = c.R);
            b.name = a.name;
            b.address = a.address;
            g.ai.ot(g.ai.y4(b))
        },
        detailOnAMAP: function (a) {
            g.c.add(this, "detailOnAMAP");
            var b = {}, c = g.a.Ka(a.location);
            b.id = a.id;
            c && (b.y = c.Q, b.x = c.R);
            b.name = a.name;
            g.ai.ot(g.ai.w4(b))
        }, setLabelzIndex: function (a) {
            g.c.add(this, "setLabelzIndex");
            return this.set("labelzIndex", a)
        }, getLabelzIndex: function () {
            return this.get("labelzIndex", null, !0)
        }, setVectorMapForeign: function (a) {
            if (g.l.Yp) {
                var b = this.e7(a);
                a = b[0];
                var c = b[1];
                this.set("name_field", c, !0);
                this.set("vectorMapForeign", a, !0);
                var d = this, b = [];
                a && (b.push("gridmap"), b.push("MVT", "vectorForeign"),
                    b.push("labelcanvas"));
                g.ub.Gg(b, function () {
                    d.v6(function () {
                        d.map && (d.map.Gi = !0, d.map.GG && d.map.GG(), d.map.Se && d.map.Se instanceof g.Sb.EF && d.map.Se.je && d.map.Se.je.S && (d.map.Se.je.S.fI(), d.map.Se.je.S.P6 = c, d.map.Se.je.S.reload()), d.set("display"))
                    })
                })
            }
        }, setMapStyle: function (a) {
            g.c.add(this, "setMapStyle");
            a = a || "normal";
            -1 === a.indexOf("amap://styles/") ? g.o.gK[a] ? this.set("styleUrl", "amap://styles/" + g.o.gK[a]) : this.set("styleUrl", "") : this.set("styleUrl", a);
            this.bT()
        }, getMapStyle: function () {
            return this.get("styleUrl") ||
                this.get("mapStyle", null, !0)
        }, getFeatures: function () {
            return this.get("features", null, !0)
        }, setFeatures: function (a) {
            g.c.add(this, "setFeatures");
            this.set("features", a)
        }, setLang: function (a) {
            g.c.add(this, "setLang", a);
            "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.get("lang", null, !0) || (this.set("lang", a), this.ik && this.ik.E8(this))
        }, getLang: function () {
            return this.get("lang", null, !0)
        }, setCity: function (a, b) {
            g.c.add(this, "setCity");
            var c = this,
                d = g.o.fd + "/v3/config/district?subdistrict=0&extensions=all&key=" + g.o.key +
                    "&s=rsv3&output=json&keywords=" + a;
            g.o.Xa && (d += "&jscode=" + g.o.Xa);
            (new g.kb.Ab(d, {callback: "callback"})).h("complete", function (d) {
                var f = d.districts;
                if (f && f.length) {
                    d = f[0];
                    /[^\w]+/.test(a) && (f = g.a.find(f, function (b) {
                        return b.name === a
                    })) && f !== d && (d = f);
                    try {
                        var h = d.center.split(","), k;
                        switch (d.level) {
                            case "city":
                                k = 10;
                                break;
                            case "province":
                                k = 7;
                                break;
                            case "district":
                                k = 12;
                                break;
                            case "country":
                                k = 4;
                                break;
                            default:
                                k = 12
                        }
                        -1 !== d.name.indexOf("\u5e02") && (k = 10);
                        c.C = !0;
                        c.setZoomAndCenter(k, new g.U(h[0], h[1]), !0);
                        c.C =
                            !1;
                        b && b.call(c, h, k)
                    } catch (l) {
                    }
                }
            }, this)
        }, getScreenShot: function (a, b) {
            g.c.add(this, "getScreenShot");
            return this.map && g.l.kl ? this.map.I4(a, b) : ""
        }, getCity: function (a, b) {
            g.c.add(this, "getCity");
            var c = g.o.fd + "/v3/geocode/regeo?&extensions=&&key=" + g.o.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
            g.o.Xa && (c += "&jscode=" + g.o.Xa);
            (new g.kb.Ab(c, {
                callback: "callback",
                jy: !0,
                Gd: "REGEO"
            })).h("complete", function (b) {
                b = b.regeocode.addressComponent;
                a({
                    province: b.province,
                    city: b.city instanceof
                    Array ? "" : b.city,
                    citycode: b.citycode instanceof Array ? "" : b.citycode,
                    district: b.district instanceof Array ? "" : b.district
                })
            }, this)
        }, A: function (a, b) {
            b = g.extend({}, b);
            this.id = g.a.zb(this);
            this.CLASS_NAME = "AMap.Map";
            g.c.ya(this, b);
            this.C = !0;
            b = b || {};
            b.mapStyle && g.o.gK[b.mapStyle] && (b.mapStyle = "amap://styles/" + g.o.gK[b.mapStyle]);
            b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl = "amap://styles/normal";
            b.bgColor && g.extend(g.o.Ee, b.bgColor);
            b.maxPitch &&
            (b.maxPitch = Math.min(this.w.maxPitch, Math.max(b.maxPitch, 0)));
            b.pitch && (b.pitch = Math.min(b.maxPitch || this.w.maxPitch, Math.max(b.pitch, 0)));
            "3D" !== b.viewMode && (b.pitch = 0);
            g.o.Xr = b.buildingColor || null;
            b.mobile && (g.l.ba = !0);
            b.noPoi && (g.o.Dua = !0);
            b.editEnable = g.o.UQ ? b.editEnable : !1;
            b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1);
            void 0 !== b.nolimg && (b.nolimg_param = b.nolimg);
            "3D" === b.viewMode && g.l.sp && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock;
            this.xq = !!b.enableSocket;
            b.server && (g.o.fd = b.server);
            b.vdataUrl && (g.o.yL = b.vdataUrl);
            if ("string" === typeof a) {
                if (a = this.K = document.getElementById(a), !a) return
            } else "DIV" === a.tagName && (this.K = a);
            if (this.K.___amap___) {
                var c = this.K.___amap___;
                c.C = !0;
                c.destroy();
                c.C = !1
            }
            this.K.___amap___ = this;
            var c = this.w.zooms[1], d = this.w.zooms[0];
            b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.ba ? g.l.Kc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
            b.forceZooms && (b.zooms = b.forceZooms);
            b = this.ona(b);
            c = this.getSize(!0);
            b.center && (b.center =
                g.a.Ka(b.center));
            this.nj = this.xoa(b.crs || this.w.crs, b.center || this.w.center);
            this.tma(c, b);
            d = b.lang;
            "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
            g.f.qg || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1);
            b.preloadMode = !1;
            g.l.JS ? !1 !== b.workerMode && (z.Sb.Rt ? (b.workerMode = !1, z.Sb.Rt++) : z.Sb.Rt = 1) : b.workerMode = !1;
            b.layers && (d = b.layers, delete b.layers, b.layers = d);
            b.baseRender = b.baseRender || g.l.X1;
            b.forceVector && (b.baseRender = g.l.Nf ? "vw" : "v");
            b.disableVector && (b.baseRender = "d");
            "dom" === b.renderer && (b.baseRender =
                "d", b.overlayRender = "d");
            c = Math.max(c.width, c.height);
            g.l.ja && (c *= Math.min(2, window.devicePixelRatio || 1));
            "vw" === b.baseRender && c > g.l.bua && (b.baseRender = "dv");
            c = b.vectorMapForeign;
            "d" == b.baseRender && c && (b.vectorMapForeign = !1);
            c && !g.l.Yp && (b.vectorMapForeign = !1);
            c = this.e7(b.vectorMapForeign);
            b.vectorMapForeign = c[0];
            b.name_field = c[1];
            b.turboMode = !1;
            g.a.vb(this, b);
            this.kf(this.w);
            "rotateEnable" in b || "3D" !== b.viewMode || !g.l.sp || this.set("rotateEnable", !0);
            "pitchEnable" in b || "3D" !== b.viewMode || !g.l.sp ||
            this.set("pitchEnable", !0);
            c = this.get("zoom", null, !0);
            "3D" === this.get("viewMode") && g.l.sp || (c = Math.round(c));
            d = this.get("zooms");
            c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
            this.set("zoom", c);
            this.w.zoom = c;
            this.zoa(this.w);
            this.fQ();
            var e = this;
            this.kf({overlays: [], infos: {}, controls: {}});
            var f = [];
            b.vectorMapForeign && f.push("gridmap");
            b.vectorMapForeign && g.l.Yp && f.push("MVT", "vectorForeign");
            b.forceVector && (f.push("vectorlayer"), f.push("overlay"));
            "3D" === b.viewMode && g.l.sp && f.push("Map3D");
            g.l.kl && (b.vectorMapForeign ||
                b.mapStyle || b.nolimg) && f.push("labelcanvas");
            b.editEnable && f.push("edit");
            g.l.kl && (f.push("AMap.IndoorMap"), -1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
            this.ja = g.l.ja && this.get("detectRetina");
            this.y$(b);
            this.C = !1;
            e = this;
            this.Mta(function () {
                e.v6(function () {
                    g.ub.Gg(f, function () {
                        if (!e.get("destroy")) {
                            var b = new g.Sb(a, e);
                            if (g.Ue) {
                                var c = (g.Ue[0] || g.Ue).stylemaps["50001:1"].browserStyle[0].split("&");
                                b.XF = [c[0], c[4]]
                            }
                            b.bf("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view,
                                !0);
                            b.h("complete", function () {
                                var a = {};
                                b.J && "3D" == b.J.type && (a.canvas = b.J.xa, a.gl = b.J.ca);
                                this.r("complete", a)
                            }, e, !0);
                            b.nj = e.nj;
                            e.bf(["zoomSlow", "panTo", "targetLevel", "render"], b);
                            b.bf(["size", "bounds"], e);
                            e.loaded = !0;
                            e.r("coreMapCreated");
                            g.l.kl && e.Vla();
                            e.C = !0;
                            "3D" === e.view.type && (e.AmbientLight || (e.AmbientLight = new g.Vw.TV([1, 1, 1], 0.9)), e.DirectionLight || (e.DirectionLight = new g.Vw.cW([0, -1, 1], [1, 1, 1], 0.1)));
                            e.C = !1
                        }
                    })
                })
            });
            g.o.a6 && "1" === g.o.a6 && new z.q.mb.Pba({innerLayer: !0, map: this})
        }, e7: function (a) {
            if (a) {
                if ("string" ==
                    typeof a && "style_" === a.substr(0, 6)) return [a];
                switch (a) {
                    case !0:
                    case "Chinese_Simplified":
                        return ["style_zh_cn"];
                    case "English":
                        return ["style_en"];
                    case "Local":
                        return ["style_local"];
                    case "Chinese_Traditional":
                        return ["style_en", ["coalesce", "{name_zh-Hant}", "{name}"]];
                    default:
                        return ["style_zh_cn"]
                }
            } else return [!1]
        }, v6: function (a) {
            try {
                var b = this.get("vectorMapForeign");
                if (b) if (g.SJ = 0, g.RJ = 0, "string" == typeof b && "style_" == b.substr(0, 6)) {
                    var c = this, d, e = b.slice(6);
                    32 == e.length ? (c.ls = !0, g.o.gqa = g.o.UI + "style_local/",
                        d = g.o.fd + "/v4/sdk/map/styles?styleid=" + e + "&key=" + g.o.key + "&sdkType=abroad_js_json&s=rsv3", d += "&platform=JS&logversion=2.0", d += "&appname=" + g.o.Ao, d += "&csid=" + g.a.kr(), d += "&sdkversion=" + g.o.Xl, g.o.Xa && (d += "&jscode=" + g.o.Xa)) : (c.ls = !1, g.o.gqa = g.o.UI + b + "/", d = g.o.Hb + "/styles/foreign/web_v8_" + b + ".json");
                    var f = new g.kb.XMLHttpRequest(d, {
                        tU: "application/json",
                        responseType: "json"
                    });
                    f.h("complete", function (b) {
                        if (b && b.data && !b.data.TDa) {
                            if (b.data.style) b = b.data; else if ("string" === typeof b.data) b = JSON.parse(b.data);
                            else {
                                c.set("vectorMapForeign", !1);
                                c.ls = !1;
                                a();
                                return
                            }
                            var d = b.hole;
                            if (d) {
                                g.ry = [];
                                for (var e = 0, f = d.length; e < f - 1; e += 2) {
                                    var h = c.lc([d[e + 1], d[e]], 16);
                                    g.ry.push([h.x >> 0, h.y >> 0])
                                }
                            }
                            (d = b.style) && d.layers && (g.Vta = d.layers, b.zoomlevel && (g.SJ = b.zoomlevel[0], g.RJ = b.zoomlevel[1]))
                        } else c.ls = !1, c.set("vectorMapForeign", !1);
                        a()
                    }, this);
                    f.h("error", function () {
                        c.ls = !1;
                        c.set("vectorMapForeign", !1);
                        a()
                    }, this)
                } else this.ls = !1, this.set("vectorMapForeign", !1), a(); else this.ls = !1, this.set("vectorMapForeign", !1), a()
            } catch (h) {
                this.ls =
                    !1, this.set("vectorMapForeign", !1), a()
            }
        }, Mta: function (a) {
            function b() {
                var a = AMap.anole, b = {}, c = [], d = 0, e = void 0;
                if (a) {
                    for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""), a = 0, f = e.length; a < f; a++) void 0 === b[e[a]] && (b[e[a]] = d++, c.push(e[a]));
                    c.reverse();
                    d = 0;
                    for (a = e.length; d < a; d++) e[d] = c[b[e[d]]];
                    a = e.join("");
                    g.Ue = eval(a);
                    delete AMap.anole
                }
            }

            if (g.l.Ve || g.Ue) a(); else {
                var c = !0;
                if (window.__AMapStyleSource) c = !1; else try {
                    var d = JSON.parse(localStorage.getItem("_AMap_anole"));
                    d && d.version === g.l.mf &&
                    d.script && 100 < d.script.length ? eval(d.script) : c = !1
                } catch (e) {
                    c = !1
                }
                if (c) b(), a(); else {
                    var f = document.createElement("script");
                    f.xDa = "anonymous";
                    f.id = "amap_anole_js";
                    f.src = window.__AMapStyleSource || g.o.Cc + "://vdata.amap.com/style?v=" + g.o.Xl + "&key=" + g.o.key + "&mapstyle=normal";
                    c = document;
                    (c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(f);
                    f.onload = function () {
                        if (!g.Ue) {
                            if (AMap.anole && !window.__AMapStyleSource && g.l.Kv) try {
                                var c = {
                                    version: g.l.mf,
                                    script: "AMap['anole']=" + JSON.stringify(AMap.anole)
                                };
                                localStorage.setItem("_AMap_anole", JSON.stringify(c))
                            } catch (d) {
                            }
                            b()
                        }
                        a();
                        f.parentNode.removeChild(f)
                    }
                }
            }
        }, getViewMode_: function () {
            return this.view.type
        }, wqa: function (a, b, c) {
            var d = new g.U(a[4], a[5]);
            if ((a = new g.pe(a[0], a[1], a[2], a[3])) && b && d) {
                for (var e = c[1]; e > c[0]; e -= 1) {
                    var f = this.lc(a.wc, e), h = this.lc(a.oc, e);
                    if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break
                }
                return [d, Math.min(e + 1, c[1])]
            }
            return null
        }, tma: function (a, b) {
            if (!(b && b.center && b.zoom)) {
                var c = this.wqa(g.o.Td, a, b.zooms);
                b.center = b.center ||
                    c && c[0];
                "number" !== typeof b.zoom && (b.zoom = c && c[1])
            }
        }, xoa: function (a, b) {
            if (b instanceof g.U) {
                if ("string" === typeof a) {
                    switch (a) {
                        case "EPSG3395":
                            return g.$h.dW;
                        case "EPSG4326":
                            return g.$h.eW
                    }
                    return g.$h.LL
                }
                if (a.pointToLngLat && a.lngLatToPoint) return {
                    nE: a.pointToLngLat,
                    OD: a.lngLatToPoint,
                    oq: a.getResolution
                };
                throw "illegal projection";
            }
            var c = this.get("zoom", null, !0);
            return {
                oq: function (a) {
                    return Math.pow(2, c - a)
                }, OD: function () {
                }, nE: function () {
                }
            }
        }, Sxa: function (a, b) {
            this.ex && this.ex.stop();
            var c = ["pitch", "rotation",
                "zoom", "center"], d = {}, e = !1, f;
            for (f in a) if (a.hasOwnProperty(f) && -1 !== g.a.indexOf(c, f)) {
                var h = this.get(f);
                void 0 === h || h === a[f] || h.hb && h.hb(a[f]) || (d[f] = this.get(f), e = !0)
            }
            e && (this.ex = new g.Lj(d, a, null, 0), this.ex.transition = function (a, c, e) {
                e /= b || 300;
                if (1 <= e) return c;
                var f = {}, h;
                for (h in d) d.hasOwnProperty(h) && (f[h] = "center" === h ? a[h].add(c[h].bb(a[h]).Pd(e)) : a[h] + (c[h] - a[h]) * e);
                return f
            }, this.ex.Kq = function (b) {
                b === a && (this.ex.stop(), this.Hd = null);
                for (var c in b) b.hasOwnProperty(c) && ("center" === c ? (this.C =
                    !0, this.setCenter(b[c], !0), this.C = !1) : this.set(c, b[c]))
            }, this.ex.On(this))
        }, zoa: function (a) {
            "3D" === this.get("viewMode") && g.l.sp ? (this.set("baseRender", "vw"), this.view = new g.tM(this, a)) : this.view = new g.PF(this, a);
            this.s5()
        }, s5: function () {
            this.Ci = "d" < this.get("baseRender") || "3D" === this.view.type
        }, featuresChanged: function () {
            this.fQ()
        }, bT: function () {
            this.fQ();
            this.OU()
        }, OU: function () {
            if (this.sm) {
                var a = !0;
                this.C = !0;
                var b = this.getMapStyle();
                if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !==
                    b) a = !1;
                for (var b = this.getLayers(), c = this.C = !1, d = 0, e = b.length; d < e; d += 1) {
                    if (b.hasOwnProperty(d) && "AMap.IndoorMap" === b[d].CLASS_NAME && b[d] !== this.sm) {
                        a = !1;
                        break
                    }
                    b[d].wq && b[d].wq() && b[d].get("visible") && (c = !0)
                }
                (a = c && a) && this.sm.getMap() !== this && this.sm.setMap(this);
                this.sm.set("visible", a)
            }
        }, fQ: function () {
            this.y$();
            if (this.view && "3D" !== this.view.type) {
                var a = this.get("baseRender");
                if (a && !("dv" < a)) {
                    var b = this.get("features", null, !0);
                    this.C = !0;
                    var c = this.getMapStyle();
                    this.C = !1;
                    var d = this.get("editEnable");
                    b && c && (g.l.Yp && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.yT = a) : this.yT && (this.set("baseRender", this.yT), this.yT = null));
                    this.s5()
                }
            }
        }, Vla: function () {
            var a = this;
            !a.sm && a.K && (a.indoorMap = a.sm = new AMap.IndoorMap({innerLayer: !0}), a.OU(), g.a.Xc(function () {
                a.r("indoor_create", {target: a});
                a.set("display")
            }))
        }, layersChanged: function () {
            this.C = !0;
            var a = this.getLayers();
            this.aK = this.C = !1;
            for (var b = 0; b < a.length; b += 1) a[b].C = !0, a[b].getMap() !== this && a[b].setMap(this),
                a[b].C = !1, a[b].aK && (this.aK = !0);
            this.OU()
        }, getMapNumber: function () {
            if (this.map) return this.map.vE()
        }, getAdcode: function () {
            g.c.add(this, "getAdcode");
            return g.o.Tla
        }, y$: function () {
            function a() {
                var a = !1;
                g.a.Ub(b.w.layers, function (b) {
                    if (b.HG && b.constructor === z.q.mb) return a = !0, !1
                }, b);
                if (g.a.ka(["d", "dv"], b.get("baseRender")) || !g.a.ka(["normal", "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1;
                return a
            }

            if (!this.i8) {
                var b = this, c = a(), d = this.get("rasterLayer");
                if (d && !c) this.uk(d), this.set("rasterLayer", void 0); else if (!d && c && this.get("layers")) {
                    d = new z.q.mb({innerLayer: !0, map: this, Wv: !0, zIndex: 0});
                    d.Nsa = !0;
                    if (this.w.layers) {
                        var e = null;
                        g.a.Ub(this.w.layers, function (a) {
                            a instanceof z.q.mb && a.HG && (null === e || a.get("zIndex") > e.get("zIndex")) && (e = a)
                        });
                        e && d.bf(["zIndex", "opacity", "zooms", "visible"], e)
                    }
                    this.set("rasterLayer", d, !0)
                }
            }
        }, ona: function (a) {
            a || (a = {});
            if (a.hasOwnProperty("defaultLayer")) {
                a.layers =
                    [a.defaultLayer];
                var b = a.defaultLayer;
                b.JP = !0;
                this.set("defaultLayer", b, !0)
            }
            a.layers && 0 !== a.layers.length ? this.set("defaultLayer", a.layers[0], !0) : (b = new z.q.mb({innerLayer: !0}), a.layers = [b], b.JP = !0, this.set("defaultLayer", b, !0));
            if (b = a.view) b.w.rotation && (a.rotation = b.w.rotation), b.w.center && (a.center = b.w.center), b.w.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.w.zoom))), b.w.crs && (a.crs = b.w.crs);
            a.level && !a.zoom && (a.zoom = a.level);
            return a
        }, setLimitBounds: function (a) {
            g.c.add(this, "setLimitBounds");
            a instanceof g.vp && (a.C = !0, a = a.toBounds(), a.C = !1);
            a instanceof g.pe || (a = null);
            this.set("limitBounds", a)
        }, clearLimitBounds: function () {
            g.c.add(this, "clearLimitBounds");
            this.set("limitBounds", null)
        }, getLimitBounds: function () {
            g.c.add(this, "getLimitBounds");
            return this.get("limitBounds", null, !0)
        }, RH: function (a) {
            var b = this.get("layers");
            if (!(0 <= g.a.indexOf(b, a)) && (b.push(a), this.set("layers", b), a.zB)) {
                a = a.getLayers();
                for (var b = -1, c = a.length; ++b < c;) {
                    var d = a[b];
                    d instanceof z.q.Zb || !d.setMap || d.setMap(this)
                }
            }
        },
        uC: function (a) {
            var b = this.get("overlays");
            0 <= g.a.indexOf(b, a) || (a instanceof z.B.Un ? (this.get("overlays").push(a), this.vy instanceof z.B.Un && (this.vy.C = !0, this.vy.close(), this.vy.C = !1), this.vy = a, this.set("contextmenu", a, !0)) : (a instanceof z.B.Ze && (this.tm instanceof z.B.Ze && this.Lz(this.tm), this.tm = a), this.get("overlays").push(a)), this.r("overlays"))
        }, uk: function (a) {
            var b = this.get("layers"), c = g.a.indexOf(b, a);
            if (-1 !== c) {
                if (a.zB) for (c = b.length; -1 < --c;) {
                    var d = b[c];
                    d.$A !== a && d !== a || b.splice(c, 1)
                } else a.$A &&
                a.$A.Zka(a), b = g.a.Ho(b, c);
                this.set("layers", b);
                if (a.zB) for (a = a.getLayers(), b = -1, c = a.length; ++b < c;) d = a[b], d instanceof z.q.Zb || !d.setMap || d.setMap()
            }
        }, getZooms: function () {
            return this.get("zooms", null, !0)
        }, setZooms: function (a) {
            return this.set("zooms", a, !0)
        }, Lz: function (a) {
            var b = this.get("overlays");
            this.set("overlays", g.a.Ho(b, g.a.indexOf(b, a)))
        }, getTileCoordByLngLat: function (a, b, c) {
            b = b || 256;
            this.C = !0;
            c = c || Math.round(this.getZoom());
            this.C = !1;
            a = this.lc(a, c);
            c = new g.rr(c, Math.floor(a.x / b), Math.floor(a.y /
                b));
            c.cD = a.x % b;
            c.dD = a.y % b;
            return c
        }, setZoom: function (a, b) {
            g.c.add(this, "setZoom");
            a = this.iD(a);
            var c = this.get("zooms");
            a > c[1] && (a = c[1]);
            a < c[0] && (a = c[0]);
            this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.r("zoomstart"), this.r("zoomchange"), this.r("zoomend")) : this.set("zoomSlow", a))
        }, getZoom: function (a) {
            g.c.add(this, "getZoom");
            return a ? this.get("zoom", null, !0) : this.iD(this.get("targetLevel") || this.get("zoom", null, !0))
        }, getCenter: function () {
            g.c.add(this, "getCenter");
            return this.get("center",
                null, !0)
        }, setCenter: function (a, b) {
            g.c.add(this, "setCenter");
            a = g.a.Ka(a);
            b || !this.loaded ? (this.r("movestart"), this.set("center", a), this.r("mapmove"), this.map ? this.map.r("moveend") : this.r("moveend")) : (this.C = !0, this.panTo(a), this.C = !1)
        }, getCoordsBound: function () {
            return this.view.lm()
        }, getCoordsBoundByZoom: function (a) {
            return this.view.tqa(a)
        }, setRotation: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            g.c.add(this, "setRotation");
            !g.l.Ve && this.get("rotateEnable") && this.set("rotation",
                a)
        }, getRotation: function () {
            g.c.add(this, "getRotation");
            return this.get("rotation")
        }, setPitch: function (a) {
            g.c.add(this, "setPitch");
            a = Math.min(this.get("maxPitch"), Math.max(a, 0));
            "3D" === this.view.type && this.get("pitchEnable") && this.set("pitch", a)
        }, getPitch: function () {
            g.c.add(this, "getRotation");
            return "3D" === this.view.type ? this.get("pitch") : 0
        }, getStatus: function () {
            g.c.add(this, "getStatus");
            for (var a = "isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "),
                     b = {}, c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0);
            return b
        }, setStatus: function (a) {
            g.c.add(this, "setStatus");
            for (var b in a) a.hasOwnProperty(b) && -1 !== "isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) && this.set(b, a[b])
        }, getResolution: function (a, b) {
            g.c.add(this, "getResolution");
            var c = (a = g.a.Ka(a)) ? a.Q : this.get("center", null, !0).Q;
            return this.nj.oq(b || this.get("zoom")) *
                Math.cos(c * Math.PI / 180)
        }, getScale: function (a) {
            g.c.add(this, "getScale");
            this.C = !0;
            a = this.getResolution() * (a || 96) / 0.0254;
            this.C = !1;
            return a
        }, getDefaultCursor: function () {
            g.c.add(this, "getDefaultCursor");
            return this.get("defaultCursor", null, !0) || "url(" + g.o.Hb + "/theme/v1.3/openhand.cur),default"
        }, setDefaultCursor: function (a) {
            g.c.add(this, "setDefaultCursor");
            return this.set("defaultCursor", a, !0)
        }, zoomIn: function (a) {
            g.c.add(this, "zoomIn");
            this.C = !0;
            this.setZoom(this.getZoom() + 1, a);
            this.C = !1
        }, zoomOut: function (a) {
            g.c.add(this,
                "zoomOut");
            this.C = !0;
            this.setZoom(this.getZoom() - 1, a);
            this.C = !1
        }, iD: function (a) {
            return this.view && "3D" === this.view.type ? g.a.xb(a, 4) : Math.round(a)
        }, setZoomAndCenter: function (a, b, c) {
            g.c.add(this, "setZoomAndCenter");
            b = g.a.Ka(b);
            a = this.iD(a);
            var d = this.get("zooms");
            a > d[1] && (a = d[1]);
            a < d[0] && (a = d[0]);
            this.C = !0;
            this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0));
            this.C = !1
        }, clearMap: function () {
            g.c.add(this, "clearMap");
            for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map",
                null, !0);
            this.set("overlays", []);
            if (this.map && this.map.la) for (a = this.map.la, b = a.length - 1; 0 <= b; b -= 1) if (a[b].S instanceof z.q.PL) {
                var c = a[b].S;
                c.C = !0;
                c.setMap(null);
                c.C = !1
            }
        }, destroy: function () {
            g.c.add(this, "destroy");
            this.sm && (this.sm.setMap(), this.indoorMap = this.sm = null);
            this.set("overlays", []);
            this.set("defaultLayer", null);
            this.set("layers", []);
            var a = this.get("controls");
            a.remove = [];
            for (var b in a.Nd) a.Nd.hasOwnProperty(b) && a.remove.push(a.Nd[b]);
            a.Nd = [];
            a.add = [];
            this.set("controls", a);
            this.set("destroy",
                !0);
            this.Ra = !1;
            this.zl();
            this.w = this.K = null;
            this.Hc && this.Hc.zl();
            this.Hc = null;
            this.view && this.view.zl();
            this.view = null;
            this.ui();
            z.Sb.Rt--
        }, addControl: function (a) {
            g.c.add(this, "addControl");
            var b = g.a.zb(a), c = this.get("controls") || {};
            c.Nd = c.Nd || {};
            c.Nd[b] || (c.Nd[b] = a);
            c.add = c.add || [];
            c.add.push(a);
            this.set("controls", c)
        }, removeControl: function (a) {
            g.c.add(this, "removeControl");
            var b = g.a.zb(a), c = this.get("controls") || {};
            c.Nd = c.Nd || {};
            c.Nd[b] && delete c.Nd[b];
            c.remove = c.remove || [];
            c.remove.push(a);
            this.set("controls",
                c)
        }, clearControl: function () {
            g.c.add(this, "clearControl");
            var a = this.get("controls") || {};
            a.remove = a.remove || [];
            a.Nd = a.Nd || {};
            for (var b in a.Nd) a.Nd.hasOwnProperty(b) && (a.remove.push(a.Nd[b]), delete a.Nd[b]);
            this.set("controls", a)
        }, plugin: function (a, b) {
            g.c.add(this, "plugin");
            "string" === typeof a && (a = [a]);
            for (var c = [], d = 0; d < a.length; d += 1) {
                var e = a[d].split(".");
                2 < e.length || (2 == e.length ? "AMap" === e[0] && (window.AMap[e[1]] || c.push(a[d])) : c.push(a[d]))
            }
            if (0 === c.length) return b(), this;
            g.ub.Gg(c, b);
            return this
        },
        clearInfoWindow: function () {
            g.c.add(this, "clearInfoWindow");
            var a = this.get("overlays");
            a && 0 !== a.length && this.tm && (this.tm.C = !0, this.tm.close(), this.tm.C = !1)
        }, remove: function (a) {
            g.c.add(this, "remove");
            a instanceof Array || (a = [a]);
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                c.C = !0;
                c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null));
                c.C = !1
            }
        }, add: function (a) {
            g.c.add(this, "add");
            a instanceof Array || (a = [a]);
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                c.C = !0;
                if (c.getMap && c.getMap() !== this) if (c.open) continue;
                else c.setMap && c.setMap(this);
                c.C = !1
            }
        }, getAllOverlays: function (a, b) {
            g.c.add(this, "getAllOverlays");
            var c = this.get("overlays");
            if (a) {
                for (var d = "amap." + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1) d !== c[f].CLASS_NAME.toLowerCase() || !b && (c[f].Da || c[f].isOfficial) || e.push(c[f]);
                return e
            }
            if (!b) {
                e = [];
                for (f = 0; f < c.length; f += 1) c[f].Da || c[f].isOfficial || e.push(c[f]);
                c = e
            }
            d = this.get("layers");
            e = [];
            if (d) for (var f = 0, h = d.length; f < h; f += 1) d[f] instanceof z.q.PL && e.push(d[f]), d[f].lb && (e = e.concat(d[f].lb));
            return c.concat(e)
        },
        triggerResize: function () {
            this.map && this.map.ZO()
        }, refreshSize: function () {
            this.gG = this.a4()
        }, a4: function () {
            return g.f.W3(this.K)
        }, getSize: function () {
            g.c.add(this, "getSize");
            (!this.gG || 10 > this.gG.width * this.gG.height) && this.refreshSize();
            return this.gG
        }, getContainer: function () {
            g.c.add(this, "getContainer");
            return this.K
        }, panTo: function (a) {
            g.c.add(this, "panTo");
            a = g.a.Ka(a);
            this.loaded ? this.set("panTo", a) : (this.C = !0, this.setCenter(a), this.C = !1)
        }, panBy: function (a, b, c) {
            g.c.add(this, "panBy");
            this.C = !0;
            var d =
                this.get("rotation") * Math.PI / 180, e = a * Math.cos(d) + Math.sin(d) * b;
            a = -Math.sin(d) * a + Math.cos(d) * b;
            b = this.loaded && this.map && this.map.Hd ? this.map.Hd.J9 : this.get("centerCoords");
            d = Math.pow(2, 20 - this.getZoom());
            e = b.add(new g.H(-e * d, -a * d));
            e = this.Qd(e);
            !this.loaded || c ? this.setCenter(e, c) : this.set("panTo", e);
            this.C = !1
        }, setFitView: function (a, b, c, d) {
            g.c.add(this, "setFitView");
            this.C = !0;
            var e = this.get("size"), f = e.height;
            if (!e.width || !f) return !0;
            if (a = this.u4(a)) {
                if (c = this.dJ(a, 0, new g.H(40, 40), c, d)) b = b || !this.getBounds().contains(a.yi()) ||
                    g.l.ba && 1 < Math.abs(c[0] + this.get("zoom", null, !0)), this.setZoomAndCenter(c[0], c[1], b);
                this.C = !1;
                return a
            }
        }, u4: function (a) {
            if (a) if (a instanceof z.B.Fh) a = [a]; else {
                if (!(a instanceof Array)) return null
            } else this.C = !0, a = this.getAllOverlays(), this.C = !1;
            if (a) {
                for (var b, c = 0; c < a.length; c += 1) {
                    var d = a[c];
                    if (d.get("visible") && !(d instanceof z.B.Ze || d instanceof z.B.Un)) {
                        d.C = !0;
                        var e = d.getBounds();
                        d.C = !1;
                        e && (b = b ? b.yza(e) : e.eb())
                    }
                }
                return b
            }
        }, getBounds: function (a) {
            g.c.add(this, "getBounds");
            var b = this.view.Md();
            return a &&
            b.toBounds ? (b.C = !0, a = b.toBounds(), b.C = !1, a) : b
        }, setBounds: function (a, b, c, d, e, f) {
            g.c.add(this, "setBounds");
            c = this.dJ(a, b, c, e, f);
            d = d || g.l.ba && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
            this.C = !0;
            this.setZoomAndCenter(c[0], c[1], d);
            this.C = !1;
            return a
        }, g4: function (a, b, c, d, e) {
            a = this.u4(a);
            return this.dJ(a, b, c, d, e)
        }, getCoordsBoundByZoomIn3D: function (a) {
            this.WH || (this.WH = new g.tM);
            this.C = !0;
            var b = this.getRotation(), c = this.getPitch(), d = this.getSize(!0).eb();
            this.C = !1;
            a = {size: d, zoom: a, rotation: b, pitch: c, centerCoords: this.get("centerCoords")};
            this.WH.kf(a, !0);
            this.WH.jr();
            return this.WH.lm()
        }, dJ: function (a, b, c, d, e) {
            b = b ? Number(b) : 0;
            this.C = !0;
            var f = this.getRotation(), h = this.getPitch(), k = this.getSize(!0).eb(),
                l = this.view.type;
            this.C = !1;
            var m = a.sR(this);
            a = a.vR(this);
            this.yC || (this.yC = "3D" === l ? new g.tM : new g.PF);
            this.yC.kf({size: k, zoom: 3, rotation: f, pitch: h, centerCoords: m}, !0);
            var n = h = 0;
            d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y);
            e = e || (g.l.ba ? 17 : 18);
            c = this.get("zooms");
            d =
                c[0];
            var p = Infinity, q = Infinity;
            do {
                this.yC.kf({zoom: d}, !0);
                "3D" === l && this.yC.jr();
                for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1) var v = this.yC.Zd(a[u]), p = Math.min(p, v.x), r = Math.max(r, v.x), q = Math.min(q, v.y), s = Math.max(s, v.y);
                p = r - p;
                q = s - q;
                if (p > k.width || q > k.height) {
                    d -= 1;
                    break
                }
                d += 1
            } while (d <= c[1]);
            d = Math.min(c[1], e, Math.max(c[0], d + b));
            d = Math.floor(d);
            b = Math.pow(2, 20 - d);
            e = f * Math.PI / 180;
            f = h * Math.cos(e) + Math.sin(e) * n;
            e = -Math.sin(e) * h + Math.cos(e) * n;
            m = m.bb(new g.H(f * b, e * b));
            m = this.Xh(m, 20);
            return [d, m]
        }, setLayers: function (a) {
            g.c.add(this, "setLayers");
            for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
            this.set("layers", a)
        }, getLayers: function () {
            g.c.add(this, "getLayers");
            var a = this.get("layers", null, !0), a = a.slice();
            if (this.C) {
                for (var b = [], c = -1, d = a.length; ++c < d;) {
                    var e = a[c];
                    if (e.zB) for (var e = e.getLayers(), f = -1, h = e.length; ++f < h;) {
                        var k = e[f];
                        k instanceof z.q.Zb && -1 === g.a.indexOf(a, k) && b.push(k)
                    }
                }
                a = a.concat(b)
            } else for (b = a.length; -1 < --b;) a[b].$A && a.splice(b, 1);
            return a
        }, getDefaultLayer: function () {
            g.c.add(this,
                "getDefaultLayer");
            return this.get("defaultLayer", null, !0)
        }, setDefaultLayer: function (a) {
            if (a) {
                g.c.add(this, "setDefaultLayer");
                this.C = !0;
                a.JP = !0;
                var b = this.get("defaultLayer"), c = this.get("layers");
                if (b) {
                    if (a === b) {
                        a.setMap(this);
                        return
                    }
                    b.JP = !1;
                    c = g.a.Ho(c, g.a.indexOf(c, b))
                }
                this.set("defaultLayer", a, !0);
                a.C = !0;
                -1 === g.a.indexOf(c, a) && c.push(a);
                a.C = !1;
                this.setLayers(c);
                this.C = !1
            }
        }, pixelToLngLat: function (a, b) {
            g.c.add(this, "pixelToLngLat");
            return this.Xh(a, b)
        }, lnglatToPixel: function (a, b) {
            g.c.add(this, "lnglatToPixel");
            return this.lc(a, b)
        }, drawPolyline: function (a) {
            g.c.add(this, "drawPolyline");
            this.set("draw", "polyline");
            this.set("drawStyle", a || {strokeColor: "#006600", rb: 0.9})
        }, render: function (a) {
            g.c.add(this, "render");
            this.map && this.map.set("display", a ? 1 : 0)
        }, setMask: function (a) {
            g.c.add(this, "setMask");
            this.set("mask", a);
            this.map && (this.map.XJ = !0, this.map.set("display"))
        }, drawPolygon: function (a) {
            g.c.add(this, "drawPolygon");
            this.set("draw", "polygon");
            this.set("drawStyle", a || {
                strokeColor: "#006600", rb: 0.9, fillColor: "#FFAA00",
                me: 0.9
            })
        }, drawCircle: function (a) {
            g.c.add(this, "drawCircle");
            this.set("draw", "circle");
            this.set("drawStyle", a || {
                strokeColor: "#006600",
                rb: 0.9,
                fillColor: "#006600",
                me: 0.9
            })
        }, tD: function () {
            return this.view.tD()
        }, getCameraState: function () {
            g.c.add(this, "getCameraState");
            if (this.view && "3D" == this.view.type) return this.view.V3()
        }, endDraw: function () {
            this.set("draw", null)
        }, isGoogleTileVisible: function () {
            return this.map.isForeignMapVisible()
        }, isForeignMapVisible: function () {
            if (this.get("gridForeignMap") || this.get("vectorForeignMap")) return this.map &&
                this.map.Dga()
        }, Zd: function (a, b, c) {
            g.c.add(this, "p20ToContainer");
            return this.view.Zd(a, b, c)
        }, zg: function (a, b, c) {
            g.c.add(this, "containerToP20");
            return this.view.zg(a, b, c)
        }, getObject3DByContainerPos: function (a, b, c) {
            g.c.add(this, "getObject3DByContainerPos");
            if ("2D" === this.view.type || !this.map || !this.map.J) return null;
            this.C = !0;
            this.view.zg(a);
            var d = this.view.Z3(a), e = this.map.J.ST, f = this.view.dc,
                h = this.get("zoom", null, !0), h = Math.pow(2, 20 - h);
            b = b || this.getLayers();
            this.C = !1;
            for (var k = [], l = 0; l < b.length; l +=
                1) {
                var m = b[l];
                m instanceof z.q.Pm && (m = m.mp(e, d, f, h, a)) && k.push(m)
            }
            return c ? k : k.length ? (k.sort(function (a, b) {
                return a.Vd - b.Vd
            }), {index: k[0].index, point: k[0].mE, distance: k[0].Vd, object: k[0].object}) : null
        }, gJ: function (a) {
            var b = this.get("layers", null, !0), b = b.slice();
            if (this.C) {
                for (var c = [], d = -1, e = b.length; ++d < e;) {
                    var f = b[d];
                    if (f.zB) for (var f = f.FEa(), h = -1, k = f.length; ++h < k;) {
                        var l = f[h];
                        -1 === g.a.indexOf(b, l) && c.push(l)
                    }
                }
                b = b.concat(c)
            }
            return b.filter(function (b) {
                return b instanceof z.q.Pm && (a ? -1 < a.indexOf(b) :
                    !0)
            })
        }, queryObjectIndexFromFboByContainerPos: function (a, b) {
            g.c.add(this, "queryObjectIndexFromFboByContainerPos");
            if ("2D" === this.view.type || !this.map || !this.map.J) return null;
            var c = this.diffFilterLayers(b), d = this.gJ(b), e = this.getSize();
            if (c) this.$G = this.view.Me.eb(), this.ZG = this.view.dc.eb(); else if (this.$G && this.ZG) {
                if (c = this.ZG.$u(this.view.dc), c = !(this.$G.$u(this.view.Me) && c)) this.$G = this.view.Me.eb(), this.ZG = this.view.dc.eb()
            } else this.$G = this.view.Me.eb(), this.ZG = this.view.dc.eb();
            if (c) this.map.Qq(d);
            else {
                for (var f = 0; f < d.length; f += 1) {
                    var h = d[f];
                    if (h instanceof z.q.Pm && h.Ura()) {
                        c = !0;
                        break
                    }
                }
                c && this.map.Qq(d)
            }
            return this.map.Ry().nwa(a, e)
        }, diffFilterLayers: function (a) {
            a = a || [];
            if (!this.lu || this.lu.length !== a.length) return this.lu = a ? a.slice(0) : [], !0;
            for (var b = 0; b < this.lu.length;) {
                if (this.lu[b] !== a[b]) return this.lu = a ? a.slice(0) : [], !0;
                b++
            }
            this.lu = a ? a.slice(0) : []
        }
    });
    z.Sb.Yb({
        OJ: "lngLatToGeodeticCoord",
        qqa: "geodeticCoordToLngLat",
        dJ: "getFitZoomAndCenterByBounds",
        g4: "getFitZoomAndCenterByOverlays",
        Ns: "lnglatTocontainer",
        lnglatTocontainer: "lngLatToContainer",
        aq: "containTolnglat",
        containTolnglat: "containerToLngLat",
        Cb: "lngLatToP20",
        Qd: "p20ToLngLat",
        Zd: "p20ToContainer",
        zg: "containerToP20",
        lc: "project",
        Xh: "unproject",
        queryObjectIndexFromFboByContainerPos: "pickObject3DByContainerPos"
    });
    z.Sb.Ib({
        isHotspotChanged: function () {
            if ("undefined" !== typeof this.wD && (this.Ona(), this.get("isHotspot"))) {
                var a = this.get("layers", null, !0);
                a && a.length && !this.wD && this.aK && this.dva()
            }
        }, dva: function () {
            if (this.ik) this.g5(); else {
                var a = this;
                this.C = !0;
                this.plugin("AMap.HotSpot", function () {
                    if (!a.wD) {
                        if (!a.ik) {
                            var b = new g.ci;
                            new z.B.Ze({innerOverlay: !0});
                            a.ik = b
                        }
                        a.g5()
                    }
                });
                this.C = !1
            }
        }, Ona: function () {
            this.ik && this.Yra()
        }, r7: function (a) {
            a.type = "hotspotover";
            a.isIndoorPOI = !1;
            this.r("hotspotover", a)
        }, p7: function (a) {
            a.type =
                "hotspotclick";
            a.isIndoorPOI = !1;
            this.r("hotspotclick", a)
        }, q7: function (a) {
            a.type = "hotspotout";
            a.isIndoorPOI = !1;
            this.r("hotspotout", a)
        }, g5: function () {
            var a = this.ik;
            this.ik.C = !0;
            this.ik.setMap(this);
            this.ik.C = !1;
            a.h("mouseover", this.r7, this);
            a.h("click", this.p7, this);
            a.h("mouseout", this.q7, this)
        }, Yra: function () {
            var a = this.ik;
            a.G("mouseover", this.r7, this);
            a.G("click", this.p7, this);
            a.G("mouseout", this.q7, this);
            this.ik.C = !0;
            this.ik.setMap(null);
            this.ik.C = !1;
            this.ik = null
        }
    });
    z.event = {
        Y: function (a, b, c, d) {
            g.F.h(a, b, c, d);
            return new g.uF(0, a, b, c, d)
        }, Wla: function () {
        }, addListener: function (a, b, c, d) {
            g.a.Qh(a.addListener) ? a.addListener(b, c, d) : (a.we || (a.we = g.va.we), g.va.h.call(a, b, c, d));
            return new g.uF(1, a, b, c, d)
        }, fy: function (a, b, c, d) {
            g.a.Qh(a.fy) ? a.fy(b, c, d) : (a.we || (a.we = g.va.we), g.va.h.call(a, b, c, d, !0));
            return new g.uF(1, a, b, c, d)
        }, mI: function (a) {
            g.a.Qh(a.mI) ? a.mI() : g.va.ui.call(a)
        }, Ju: function (a, b) {
            g.a.Qh(a.Ju) ? a.Ju(b) : g.va.ui.call(a, b)
        }, removeListener: function (a) {
            a instanceof
            g.uF && (g.a.Qh(a.Bi.removeListener) ? a.Bi.removeListener(a) : 0 === a.type ? g.F.G(a.Bi, a.YQ, a.fS, a.cf) : 1 === a.type && (a.Bi.we || (a.Bi.we = g.va.we), g.va.G.call(a.Bi, a.YQ, a.fS, a.cf)))
        }, O: function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            g.a.Qh(a.O) ? a.O.apply(a, c) : (a.we || (a.we = g.va.we), g.va.r.apply(a, c))
        }
    };
    g.uF = g.da.extend({
        A: function (a, b, c, d, e) {
            this.type = a;
            this.Bi = b;
            this.YQ = c;
            this.fS = d;
            this.cf = e
        }
    });
    var rc = {
        Y: "addDomListener",
        Wla: "addDomListenerOnce",
        addListener: "addListener",
        fy: "addListenerOnce",
        mI: "clearInstanceListeners",
        Ju: "clearListeners",
        removeListener: "removeListener",
        O: "trigger"
    }, sc;
    for (sc in rc) rc.hasOwnProperty(sc) && (z.event[rc[sc]] = z.event[sc]);
    g.event = z.event;
    z.q.Zb = g.da.extend({
        ka: [g.va, g.$e], A: function (a) {
            (new Date).getTime();
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
            g.a.vb(this, a);
            this.w.map && (a = this.w.map, delete this.w.map, this.w.map = a);
            this.kf(this.w)
        }, getContainer: function () {
            g.c.add(this, "getContainer");
            if (this.q && this.q.M) return this.q.M.vj()
        }, getZooms: function () {
            return this.get("zooms", null, !0)
        }, setOpacity: function (a) {
            g.c.add(this, "setOpacity");
            a !== this.get("opacity", null, !0) && this.set("opacity", a)
        }, getOpacity: function () {
            return this.get("opacity",
                null, !0)
        }, show: function () {
            g.c.add(this, "show");
            this.set("visible", !0);
            if (this.Hq) {
                var a = this.get("map", null, !0);
                a && a.set("layers", a.get("layers", null, !0))
            }
        }, hide: function () {
            g.c.add(this, "hide");
            this.set("visible", !1);
            if (this.Hq) {
                var a = this.get("map", null, !0);
                a && a.set("layers", a.get("layers", null, !0))
            }
        }, setMap: function (a) {
            g.c.add(this, "setMap");
            var b = this.get("map");
            if (a) b && a !== b && b.uk(this), this.set("map", a); else if (b && (b.uk(this), this.set("map", null, !0), this.ri = !1, this.hg && this.hg(), this.onRemove)) this.onRemove()
        },
        getMap: function () {
            g.c.add(this, "getMap");
            return this.get("map", null, !0)
        }, mapChanged: function () {
            var a = this.get("map");
            a && a.RH(this)
        }, setzIndex: function (a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        }, getzIndex: function () {
            return this.get("zIndex", null, !0)
        }
    });
    z.q.mb = z.q.Zb.extend({
        w: {
            tileSize: 256,
            visible: !0,
            opacity: 1,
            zIndex: 0,
            noLimg: 1,
            zooms: [3, 20],
            getTileUrl: g.l.ba ? g.o.VE : g.o.QD,
            errorUrl: g.a.Cpa,
            detectRetina: !0,
            className: "amap-layer",
            mapNumber: "",
            merge: !1,
            sort: !1,
            cacheSize: g.l.size
        }, A: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
            g.c.ya(this, a);
            (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
            this.vna(a);
            var b = a.zooms;
            b && b[1] >= this.qk[0] ? (b[0] < this.qk[0] && (b[0] = this.qk[0]), b[1] > this.qk[1] && (b[1] = this.qk[1])) : a.zooms = [this.qk[0], this.qk[1]];
            arguments.callee.ma.call(this, a);
            a.Wv && (this.Wv = !0);
            this.HG = this.wq()
        }, setTextIndex: function (a) {
            g.c.add(this, "setTextIndex");
            this.set("textIndex", a)
        }, wq: function () {
            if (this.get("createTile")) return !1;
            var a = this.get("getTileUrl");
            return a && a !== g.o.QD && a !== g.o.VE ? !1 : !0
        }, z2: function () {
            if (!this.wq()) return !1;
            var a = this.get("map");
            return a && a.Ci && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
        }, C4: function (a) {
            var b = g.o.VJ;
            g.l.ja && this.get("detectRetina") && (b = g.o.VJ.replace("scl=1", "scl=2"));
            a && (b = b.replace("ltype=3",
                "ltype=11"));
            return b
        }, cg: function (a) {
            var b = this.z2(), c = this.get("map");
            this.wq() && this.set("mapNumber", "GS(2021)6375");
            if (this.Wv) return new g.q.mb(this, a, this.Ar(this.C4(!0)), this.w.maxDataZoom, !0);
            if (b) if (this.Hq = !0, g.q.fi) {
                if ("dv" === c.get("baseRender") && !this.get("watermark")) {
                    var b = c.get("showBuildingBlock"),
                        d = new g.q.mb(this, a, this.Ar(this.C4(!b)), void 0, !0);
                    b && (d.Ij = new g.q.qd(new z.q.mb({
                        zooms: [16, 20],
                        innerLayer: !0
                    }), a, ["building"]), d.Ij.type = "\u697c\u5757\u56fe\u5c42", d.Ij.bf(["visible",
                        "opacity", "zIndex"], d, !0), d.Ij.CC(c.get("mapStyle") || "normal"));
                    d.type = "\u6805\u683c\u5e95\u56fe";
                    return d
                }
                if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.D.view.type ? (c = new g.q.qd(this, a, ["region", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe", b = new z.q.mb({
                    zooms: [17, 20],
                    zIndex: 50,
                    innerLayer: !0
                }), c.Ij = new g.q.qd(b, a, ["building"]), c.Ij.gf = 17, c.Ij.type = "\u697c\u5757\u56fe\u5c42", c.Ij.az = 1, c.Ij.bf(["visible", "merge", "sort", "opacity"], c, !0), b.X("rejectMapMask", this, !0)) : (c = new g.q.qd(this,
                    a, ["region", "building", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe"), a.Dma = c
            } else return ["vectorlayer", "overlay"]; else return this.Hq = !1, new g.q.mb(this, a, null, this.w.maxDataZoom)
        }, getTileUrlChanged: function () {
            var a = this.get("getTileUrl");
            if (a === g.o.QD || a === g.o.VE || a === g.o.RK) this.aK = !0;
            "string" === typeof a && (a = this.Ar(a));
            this.set("tileFun", a)
        }, vna: function (a) {
            this.qk || (this.qk = [this.w.zooms[0], this.w.zooms[1]]);
            var b;
            a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
            g.l.ba && g.l.ja && this.w.detectRetina &&
            !b && (this.qk[1] -= 1)
        }, getTiles: function () {
            g.c.add(this, "getTiles");
            var a = this.get("tiles", null, !0);
            if (a && a.length) a = a[0]; else return [];
            for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
            return b
        }, reload: function () {
            g.c.add(this, "reload");
            this.set("reload", 1)
        }, ct: function () {
            this.C = !0;
            var a = this.get("map", null, !0);
            this.setMap(null);
            this.ri = !1;
            this.setMap(a);
            this.C = !1
        }, setTileUrl: function (a) {
            g.c.add(this, "setTileUrl");
            this.z2() ? (this.set("getTileUrl", a), this.ct()) :
                this.set("getTileUrl", a)
        }, Ar: function (a) {
            var b = this, c, d, e;
            return function (f, h, k) {
                f = (f + Math.pow(2, k)) % Math.pow(2, k);
                if ("number" !== typeof (f + h + k)) return null;
                var l = b.get("map"), m = "zh_cn";
                l && (m = l.get("lang") || "zh_cn");
                k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
                if (!c) {
                    if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""), e = e.split(",");
                    c = !0
                }
                e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length]));
                return k
            }
        }, getTileUrl: function (a, b, c) {
            g.c.add(this, "getTileUrl");
            return this.get("tileFun", null, !0)(a, b, c)
        }, getZooms: function (a) {
            a || g.c.add(this, "getZooms");
            return this.get("zooms", null, !0)
        }
    });
    z.q.mb.IW = z.q.mb.extend({
        w: {
            getTileUrl: g.o.BU,
            zooms: [3, 20],
            zIndex: 2,
            maxDataZoom: 18,
            detectRetina: !1,
            mapNumber: "GS\u4eac(2022)1061",
            className: "amap-layer amap-satellite",
            cacheSize: g.l.size
        }, A: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.Satellite";
            g.c.ya(this, a);
            this.qk = [3, 20];
            arguments.callee.ma.apply(this, arguments)
        }
    });
    z.q.mb.FW = z.q.mb.extend({
        w: {
            getTileUrl: g.o.RK,
            zooms: [3, 20],
            zIndex: 3,
            type: "overlayer",
            maxDataZoom: 18,
            className: "amap-layer amap-roadnet",
            cacheSize: g.l.size
        }, A: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.RoadNet";
            g.c.ya(this, a);
            this.qk = [3, 20];
            arguments.callee.ma.apply(this, arguments)
        }, cg: function (a) {
            if (this.get("map").Ci) {
                this.Hq = !0;
                var b = g.o.SK;
                g.l.ja && this.get("detectRetina") && (b = g.o.SK.replace("scl=1", "scl=2"));
                a = new g.q.mb(this, a, this.Ar(b), this.w.maxDataZoom)
            } else this.Hq = !1, a = new g.q.mb(this,
                a);
            return a
        }
    });
    z.q.mb.QW = z.q.mb.extend({
        w: {
            getTileUrl: function (a, b, c) {
                return g.o.Cc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
            },
            zooms: [6, 20],
            zIndex: 4,
            type: "overlayer",
            autoRefresh: !1,
            interval: 180,
            maxDataZoom: 17,
            alwaysRender: !g.l.n3,
            className: "amap-layer amap-traffic",
            cacheSize: g.l.size
        }, A: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.Traffic";
            g.c.ya(this, a);
            this.qk = [6, 20];
            arguments.callee.ma.apply(this, arguments);
            this.C = !0;
            this.startRefresh();
            this.C = !1
        }, stopRefresh: function () {
            g.c.add(this,
                "stopRefresh");
            this.FK && (clearInterval(this.FK), this.FK = null)
        }, startRefresh: function () {
            g.c.add(this, "startRefresh");
            if (this.get("autoRefresh") && !this.FK) {
                var a = this;
                this.FK = setInterval(function () {
                    a.C = !0;
                    a.reload();
                    a.C = !1;
                    a.r("refresh")
                }, Math.max(1E3 * (this.get("interval") || 180), 1E4))
            }
        }, reload: function () {
            g.c.add(this, "reload");
            g.a.Xc(function () {
                this.set("reload")
            }, this)
        }, hg: function () {
            this.C = !0;
            this.stopRefresh();
            this.get("map") && this.get("map").G("zoomstart", this.reload, this);
            this.C = !1
        }, cg: function (a) {
            var b =
                this.get("map"), b = a.D;
            b.h("zoomstart", this.reload, this);
            return "d" !== b.get("baseRender") ? g.q.cx ? a = new g.q.cx(this, a) : ["vt"] : a = new g.q.mb(this, a, null, this.w.maxDataZoom)
        }
    });
    z.q.mb.AA = z.q.mb.extend({
        w: {
            zooms: [3, 20],
            zIndex: 12,
            detectRetina: !1,
            className: "amap-layer amap-flexible",
            cacheSize: g.l.size
        }, A: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
            g.c.ya(this, a);
            this.Osa = !0;
            arguments.callee.ma.call(this, a)
        }, setCreateTile: function (a) {
            g.c.add(this, "setCreateTile");
            "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
        }, getCreateTile: function () {
            return this.get("createTile", null, !0)
        }
    });
    z.q.mb.Mba = z.q.mb.AA.extend({
        w: {
            zooms: [3, 20],
            zIndex: 12,
            tileSize: 512,
            detectRetina: !1,
            className: "amap-layer amap-wms",
            cacheSize: g.l.size,
            url: "",
            params: ""
        }, A: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.WMS";
            g.c.ya(this, a);
            arguments.callee.ma.call(this, a);
            this.Dw();
            var b = this, c = this.get("tileSize");
            this.set("createTile", function (a, e, f, h, k) {
                var l = Math.pow(2, 20 - f) * c;
                f = new g.H(l * a, l * (e + 1));
                a = new g.H(l * (a + 1), l * e);
                e = g.UJ.y7(f);
                a = g.UJ.y7(a);
                var m = document.createElement("img");
                "3D" === b.Vf && (m.crossOrigin = "anonymous");
                g.F.h(m, "load", function () {
                    h(m)
                });
                g.F.h(m, "error", function () {
                    k(m)
                });
                m.src = this.url + "&BBOX=" + e + "," + a
            })
        }, Dw: function () {
            var a = this.get("url", null, !0), b = this.get("params", null, !0),
                c = this.get("tileSize");
            b.WIDTH = c;
            b.HEIGHT = c;
            b.CRS = b.CRS || "EPSG:3857";
            b.REQUEST = "GetMap";
            b.SERVICE = "WMS";
            b.FORMAT = b.FORMAT || "image/png";
            b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
            delete b.BBOX;
            this.url = a + "?" + g.a.join(b, "&");
            this.C = !0;
            this.reload();
            this.C = !1
        }, setUrl: function (a) {
            g.c.add(this, "setUrl");
            this.set("url",
                a, !0);
            this.Dw()
        }, getUrl: function () {
            g.c.add(this, "getUrl");
            return this.get("url", null, !0)
        }, setParams: function (a) {
            g.c.add(this, "setParams");
            g.extend(this.get("params", null, !0), a || {});
            this.Dw()
        }, getParams: function () {
            g.c.add(this, "getParams");
            return this.get("params", null, !0)
        }
    });
    z.q.mb.Nba = z.q.mb.AA.extend({
        w: {
            zooms: [3, 20],
            tileSize: 256,
            zIndex: 12,
            detectRetina: !1,
            className: "amap-layer amap-wmts",
            cacheSize: g.l.size
        }, A: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.WMTS";
            g.c.ya(this, a);
            arguments.callee.ma.call(this, a);
            this.Dw();
            var b = this;
            this.get("tileSize");
            this.set("createTile", function (a, d, e, f, h) {
                var k = document.createElement("img");
                "3D" === b.Vf && (k.crossOrigin = "anonymous");
                g.F.h(k, "load", function () {
                    f(k)
                });
                g.F.h(k, "error", function () {
                    h(k)
                });
                k.src = this.url + "&TileMatrix=" + e + "&TileRow=" +
                    d + "&TileCol=" + a
            })
        }, Dw: function () {
            var a = this.get("url", null, !0), b = this.get("params", null, !0);
            b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
            b.Request = "GetTile";
            b.Service = "WMTS";
            b.Format = b.Format || "image/png";
            this.url = a + "?" + g.a.join(b, "&");
            this.C = !0;
            this.reload();
            this.C = !1
        }, setUrl: function (a) {
            g.c.add(this, "setUrl");
            this.set("url", a, !0);
            this.Dw()
        }, getUrl: function () {
            g.c.add(this, "getUrl");
            return this.get("url", null, !0)
        }, setParams: function (a) {
            g.c.add(this, "setParams");
            g.extend(this.get("params", null, !0),
                a || {});
            this.Dw()
        }, getParams: function () {
            g.c.add(this, "getParams");
            return this.get("params", null, !0)
        }
    });
    z.q.mb.OL = z.q.mb.AA.extend({
        w: {detectRetina: !0, zooms: [10, 18], zIndex: 2}, A: function (a) {
            arguments.callee.ma.apply(this, arguments);
            var b = this;
            this.set("createTile", function (a, d, e, f, h) {
                var k = b.De.map.map;
                k.Se.PE(a, d, e, function (l) {
                    if (l) h(); else {
                        var m = document.createElement("img");
                        "3D" === b.Vf && (m.crossOrigin = "anonymous");
                        g.F.h(m, "load", function () {
                            f(m)
                        });
                        g.F.h(m, "error", function () {
                            h(m)
                        });
                        m.src = function (a, c, d) {
                            var e = "zh_cn";
                            b && b.get && k && (e = k.get("lang") || "zh_cn");
                            return g.o.Cc + "://grid.amap.com/grid/" + d + "/" +
                                a + "/" + c + "?src=jsapi&key=" + g.o.key + "&lang=" + e + "&dpiType=" + (g.l.Kc ? "wprd" : "webrd")
                        }(a, d, e)
                    }
                })
            })
        }
    });
    z.q.mb.Pba = z.q.mb.extend({
        w: {
            getTileUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAGFBMVEUAAABOVWNOVWVNVWJOVWNNVV9OVWNOVWT0TI68AAAACHRSTlMAIwkPFQQbHt8aTjEAAAVJSURBVHja7MGBAAAAAICg/akXqQIAAAAAAAAAYHbqXrlNIArD8MvCipbD8tOCoyQtZCzSQpKx2sX2xC1IdtSyiSLffpyZ3AKoCE9zyvNW32q1Wq1Wq9VqtVqt/lPvKq7H8jDKxNUEUShZE3ElFj8OvrK5VkATobNnd60A1UnLXrKyvUaAqh4l206cnN2k4cDigqj/ud8MMB5V3rcsSxcoc2P6zz8qRF5qV7AkfesitpLWjUiLGBPIogFbJ5eYWrYu/xK0KkutloTF+KPITiVQPxr7sGcTGwLjEstCNtmurMigvPzai9hwyigHXwbmd4O6s36MdxwFysTLdid0MWqx+BXzc43kVif3nWRj4UukX+8NUH8wLEFvRQzg/p6+DZ5jynwC+m8tC9g6OT6m76A73hv6CW3QIpeBoGAJ9XG030UKyop8LylceDK3PwZm58eqAChf5Vy29Ie95N8MdP5C++NNYWKhkfPNIRwIJR8LEpR7+s0i6kp3BrrdnXKXiMDYvuIVlWhm93AH5OjPMlDfGNWdY4KUcPiYg2Vuai85BPHWyfNA/zkTKRKClCDqX5idaiT/UkApkhRAKO6T154IIlTF/AKRceKEestANRVBWvNxqm04MTtVgH8sglQn8NXqRmRAxf0oB2eXWH1vwLIpfBPE/zbwQwRJ+FyEv5idP+Ad9oYno5NwAuRc4MdwAjTz840qRQ5oVzn1vqkYAZVAbZmftiiR8VxWsBm6W5GWrkDtc7hnfltX+SLHrvIq4NbJuYBy10juWMC78e2hGie61Gt5GMX9BvAk/2ots3t7mI0FBOn2NfNa6my3iQA2iWUBWuQnZQu+yEvdVdyDHwNL7F7QPrzwKZzwJlB5E22kAFAJS7D8Yb/eldMGwiiO/9GNlk+rSytxS4uMZVqJxFa7IDtutcaOW+Tg8PoJSV5BotHvBfbM7MyePc8ib+CEeOG8ILJDV+65iOiBFVQSJAuwFEuRhrOrLPmXYEoPHHWaRkaBGxuJczAEY38jCd3TuGtGTW3i8Ad1KVF+BgznrOnl3bPVbRtQLsrNjW/IolZTajg/imj6MJdoC7/S8vEkr+zJ/v65iUY/X+jBzMTbfaXZlzs5LeafXALsGizl0r154cZf91VsVnC28z9h7qFMGE/gic7NjEzQSzk8ZQ2W1EZUXUALTkj3ls/x9tGHdDVvT4n25O4wi5wAOwCXHhjPvxMFIwnymSnGm+abP19nxSikczXgBracFhE4eW2i6ug6E3Xi3Uq6L50nsluDF1rBzERQV/F274TYvl8aRffcoDZy0OnWlz8n31+G/oNMFW4UOl813atF2k+N7UzW++pS/rkc0iKAX/Tii0jurAMYNXcSmJkeFdHMfESwoGtzgGW+1OOm1GTHHze1kcSbmHibKnpQ6noLh13hTJYvtKFVSdtghzONpelB+i4KTMyjyIsdqDbOx0csRQ+m/3c24MU7kQS3iaby5k3gJ93bxNDG1QSgLL/l0gCG+sP0M7I38QrW2vatB8VpFCIBkCXwSvdGr2ez4gmw4ssl6DJwg/IFdiv64Jgoz/ZVgHsrojRY6t1Wjnzg9RVgM01FEoy8S5zArsm+hCx9+mJKSd8yzW2ya6so4VlnbQGavrTt56ZIV0CZFplsceRMnxbfRVbOCiw1Probhffh0qc7UenMHGE3cUJI6Nvr4lTFDyFum1iKa1jKQS8VngLFNaTF3EQBbsGVjCS62QvX4/mX4tdcjR3LIdFcjxsnXFfOYDAYDAaDwWAwGAwGg9/twYEAAAAAgCB/60GuAAAAAAAAAOAnLYvrtEzzqQMAAAAASUVORK5CYII=",
            zooms: [3,
                20],
            zIndex: 2,
            maxDataZoom: 18,
            detectRetina: !1,
            cacheSize: g.l.size
        }, A: function (a) {
            this.CLASS_NAME = "AMap.TileLayer.Watermark";
            g.c.ya(this, a);
            this.qk = [3, 20];
            arguments.callee.ma.apply(this, arguments)
        }
    });
    z.q.hd = z.q.Zb.extend({
        w: {
            visible: !0,
            zooms: [3, 25],
            type: "overlay",
            zIndex: 5,
            alwaysRender: !0
        }, A: function (a) {
            this.A5 = !0;
            arguments.callee.ma.apply(this, arguments)
        }, cg: function (a) {
            return new g.q.hd(this, a)
        }
    });
    z.q.aaa = z.q.Zb.extend({
        w: {zooms: [14, 20], zIndex: 8, visible: !0, merge: !0, sort: !1},
        A: function (a) {
            this.CLASS_NAME = "AMap.Buildings";
            g.c.ya(this, a);
            a = a || {};
            a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0]));
            arguments.callee.ma.apply(this, arguments)
        },
        wq: function () {
            return !1
        },
        cg: function (a) {
            if (g.l.Yp) return a = new g.q.Jba(this, a), a.az = this.get("heightFactor") || 1, a
        },
        setStyle: function (a) {
            this.set("customStyle", a);
            g.c.add(this, "setStyle")
        }
    });
    z.q.HL = z.q.Zb.extend({
        w: {visible: !0, zooms: [3, g.l.ba ? 20 : 18], opacity: 1, type: "overlay", zIndex: 6},
        A: function (a) {
            arguments.callee.ma.apply(this, arguments)
        },
        cg: function (a) {
            return g.q.DA ? new g.q.DA(this, a) : ["imagelayer"]
        },
        getMap: function () {
            g.c.add(this, "getMap");
            return this.De.map
        },
        show: function () {
            g.c.add(this, "show");
            this.set("visible", !0);
            this.r("options")
        },
        getOpacity: function () {
            g.c.add(this, "getOpacity");
            return this.get("opacity", null, !0)
        },
        setOpacity: function (a) {
            g.c.add(this, "setOpacity");
            this.set("opacity",
                a)
        },
        getBounds: function () {
            g.c.add(this, "getBounds");
            return this.get("bounds", null, !0).eb()
        },
        setBounds: function (a) {
            g.c.add(this, "setBounds");
            this.r("bounds", a);
            this.C = !0;
            this.setOptions({bounds: a});
            this.C = !1
        },
        hide: function () {
            g.c.add(this, "hide");
            this.set("visible", !1);
            this.r("options")
        },
        setOptions: function (a) {
            g.c.add(this, "setOptions");
            this.kf(a);
            this.r("options")
        },
        getOptions: function () {
            g.c.add(this, "getOptions");
            var a = {}, b;
            for (b in this.w) this.w.hasOwnProperty(b) && (a[b] = this.get(b));
            return a
        },
        getElement: function () {
            return this.q.M ?
                this.q.M.Pb : this.q.Cf ? this.q.Cf.Pb : null
        }
    });
    z.q.DA = z.q.HL.extend({
        A: function (a) {
            this.CLASS_NAME = "AMap.ImageLayer";
            g.c.ya(this, a);
            a && a.url && (a.__source__ = a.url);
            arguments.callee.ma.apply(this, arguments)
        }, getImageUrl: function () {
            g.c.add(this, "getImageUrl");
            return this.get("__source__")
        }, setImageUrl: function (a) {
            g.c.add(this, "setImageUrl");
            return this.set("__source__", a)
        }
    });
    z.q.Lba = z.q.HL.extend({
        A: function (a) {
            this.CLASS_NAME = "AMap.VideoLayer";
            g.c.ya(this, a);
            a && a.url && (a.__source__ = a.url);
            arguments.callee.ma.apply(this, arguments)
        }, play: function () {
            var a = this.getElement();
            a && a.play && a.play()
        }, pause: function () {
            var a = this.getElement();
            a && a.pause && a.pause()
        }, getVideoUrl: function () {
            g.c.add(this, "getVideoUrl");
            return this.get("__source__")
        }, setVideoUrl: function (a) {
            g.c.add(this, "setVideoUrl");
            return this.set("__source__", a)
        }
    });
    z.q.caa = z.q.HL.extend({
        A: function (a) {
            this.CLASS_NAME = "AMap.CanvasLayer";
            g.c.ya(this, a);
            a && a.canvas && (a.__source__ = a.canvas);
            arguments.callee.ma.apply(this, arguments)
        }, getCanvas: function () {
            g.c.add(this, "getCanvas");
            return this.get("__source__")
        }, setCanvas: function (a) {
            g.c.add(this, "setCanvas");
            return this.set("__source__", a)
        }, reFresh: function () {
            this.q && (this.q.ME = !0, this.q.set("display"))
        }
    });
    z.q.Waa = z.q.Zb.extend({
        w: {
            visible: !0,
            zooms: [3, 20],
            type: "overlay",
            zIndex: 5,
            cursor: "pointer",
            alwaysRender: !0,
            stable: !0,
            bubble: !0,
            rejectMapMask: !0,
            className: "amap-mass"
        }, A: function (a, b) {
            this.CLASS_NAME = "AMap.MassMarks";
            g.c.ya(this, b);
            g.l.kl && (this.Aj = !0, b.size && (b.size = g.a.Mq(b.size)), this.C = !0, this.setData(a), g.a.vb(this, b), b.style ? (this.kf(this.w, !0), this.setStyle(b.style)) : this.setStyle(this.w), this.C = !1)
        }, clear: function () {
            g.c.add(this, "clear");
            this.set("dataSources", "")
        }, getStyle: function () {
            g.c.add(this,
                "getStyle");
            return this.Em
        }, setStyle: function (a) {
            g.c.add(this, "setStyle");
            if (a instanceof Array) {
                for (var b = 0; b < a.length; b += 1) a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = g.a.Mq(a[b].size), a.Bf = Math.max(a.Bf || 0, a[b].size.width + a[b].anchor.x), a.jg = Math.max(a.Bf || 0, a[b].size.height + a[b].anchor.y);
                this.Em = a
            } else a.size && (a.size = g.a.Mq(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.kf(a, !0), this.Em = {
                anchor: this.get("anchor"),
                url: this.get("url"),
                size: this.get("size"),
                rotation_: this.get("rotation_")
            },
                this.Em.Bf = this.Em.size.width + this.Em.anchor.x, this.Em.jg = this.Em.size.height + this.Em.anchor.y;
            this.r("style")
        }, setData: function (a) {
            g.c.add(this, "setData");
            this.set("dataSources", a)
        }, getData: function () {
            g.c.add(this, "getData");
            return this.get("datas") || this.get("dataSources")
        }, setMap: function (a) {
            g.c.add(this, "setMap");
            g.l.kl && (a ? (this.get("map") && this.get("map").uk(this), this.set("map", a)) : this.get("map") && (this.get("map").uk(this), this.set("map", null, !0), this.ri = !1, this.hg && this.hg()))
        }, cg: function (a) {
            return g.ub.KD(["cvector"]) ?
                (a = new g.q.hd(this, a), this.X("datas", a), a) : ["cvector"]
        }
    });
    z.q.gaa = z.q.Zb.extend({
        A: function (a) {
            this.CLASS_NAME = "AMap.CompositeLayer";
            this.zB = !0;
            g.a.vb(this, a);
            this.Xm = [];
            this.kf(this.w)
        }, opacityChanged: function () {
            for (var a = this.get("opacity", null, !0), b = -1, c = this.Xm.length; ++b < c;) this.Xm[b].setOpacity(a)
        }, addLayer: function (a) {
            if (!this.has(a)) {
                a.$A = this;
                var b = this.get("map");
                a.setMap(b);
                this.Xm.push(a)
            }
            return this
        }, removeLayer: function (a) {
            this.has(a) && a.setMap(null);
            return this
        }, Zka: function (a) {
            if (this.has(a)) {
                delete a.$A;
                var b = this.Xm;
                a = g.a.indexOf(b, a);
                g.a.Ho(b, a)
            }
        }, has: function (a) {
            return -1 !== g.a.indexOf(this.Xm, a)
        }, show: function () {
            for (var a = -1, b = this.Xm.length; ++a < b;) this.Xm[a].show()
        }, hide: function () {
            for (var a = -1, b = this.Xm.length; ++a < b;) this.Xm[a].hide()
        }, setzIndex: function (a, b) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a);
            var c = this.Xm;
            if ("undefined" === typeof b) for (var d = -1, e = c.length; ++d < e;) {
                var f = c[d];
                f.setzIndex(a)
            } else (f = c[b]) && f.setzIndex(a)
        }, cg: function (a) {
            this.e = a
        }, getLayers: function () {
            return this.Xm
        }
    });
    z.q.sr = z.q.Zb.extend({
        Kaa: {
            visible: !0,
            zIndex: 121,
            opacity: 1,
            zooms: [3, 20],
            collision: !0,
            animation: !0,
            alwaysRender: !0
        }, w: {zooms: [3, 20]}, rP: null, _markerBindArray: {}, A: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelsLayer";
            a = a || {};
            g.c.ya(this, a);
            arguments.callee.ma.apply(this, arguments);
            this.w = this.Kaa;
            g.a.vb(this, a);
            this.kf(this.w);
            this.Yf = [];
            this.lb = [];
            this.Qu = []
        }, getCollision: function () {
            return this.get("collision", null, !0)
        }, setCollision: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ?
                arguments[0] : !0;
            this.set("collision", a);
            this.w.collision = a;
            this.g && this.g.vb(this.w, this.Yf)
        }, getOpacity: function () {
            return this.get("opacity", null, !0)
        }, setOpacity: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
            this.set("opacity", a);
            this.w.opacity = a;
            this.g && this.g.vb(this.w, this.Yf)
        }, getzIndex: function () {
            return this.get("zIndex", null, !0)
        }, setzIndex: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 120;
            this.set("zIndex", a);
            this.w.zIndex = a;
            this.g && this.g.vb(this.w,
                this.Yf)
        }, getAnimation: function () {
            return this.get("animation", null, !0)
        }, setAnimation: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
            this.set("animation", a);
            this.w.animation = a;
            this.g && this.g.vb(this.w, this.Yf)
        }, getZooms: function () {
            return this.get("zooms", null, !0)
        }, setZooms: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [3, 20];
            this.set("zooms", a);
            this.w.zooms = a;
            this.g && this.g.vb(this.w, this.Yf)
        }, add: function (a) {
            g.c.add(this, "add");
            if (a) {
                a = "[object Array]" !==
                Object.prototype.toString.apply(a) ? [a] : a;
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (c) {
                        c.g = this;
                        var d = c.w, e = {
                            data: {
                                id: c._LabelMarkerId || void 0,
                                name: d.title || "",
                                position: this.tfa(d.position) || void 0,
                                rank: d.rank || void 0
                            },
                            opts: {
                                zooms: d.zooms || void 0,
                                opacity: "number" === typeof d.opacity ? d.opacity : 1,
                                zIndex: "number" === typeof d.zIndex ? d.zIndex : 1,
                                height: "number" === typeof d.height ? d.height : 0,
                                icon: {},
                                text: {}
                            }
                        };
                        if (d.icon) {
                            var f = d.icon, h = f.size, k = f.clipSize;
                            h && (f.size = this.yG(h));
                            k && (f.clipSize = this.yG(k));
                            e.opts.icon =
                                d.icon
                        }
                        d.text && (e.opts.text = d.text, d.text.content && (e.data.txt = d.text.content), (d = (d = e.opts.text.style) && d.padding) && (e.opts.text.style.padding = this.yha(d)));
                        this.Yf.push(e);
                        this.lb.push(c);
                        this._markerBindArray[c._LabelMarkerId] = c
                    }
                }
                this.Jo();
                b = a.length;
                for (c = 0; c < b; c++) (e = a[c]) && e.V8 && e.V8()
            }
        }, getMarkers: function () {
            return this.lb
        }, remove: function (a) {
            g.c.add(this, "remove");
            if (a) {
                var b = void 0,
                    b = "[object Array]" !== Object.prototype.toString.apply(a) ? [a] : a;
                if (this.Yf) {
                    for (a = 0; a < b.length; a++) {
                        var c = this.wn(this.Yf,
                            b[a]);
                        -1 !== c && (this.Yf.splice(c, 1), this.lb.splice(c, 1))
                    }
                    this.Jo()
                }
            }
        }, clear: function () {
            g.c.add(this, "clear");
            this.g && this.g.clear();
            this.Yf = [];
            this.lb = []
        }, setPosition: function () {
        }, positionChanged: function () {
        }, on: function (a) {
            g.c.add(this, "on");
            this.g ? (this.Dh(arguments), this.g.b2(a)) : this.Qu.push(arguments)
        }, off: function (a) {
            g.c.add(this, "off");
            this.g && this.g.t$(a)
        }, Jo: function () {
            this.g && this.g.Sz(this.Yf)
        }, Sz: function (a) {
            this.$0(a)
        }, MU: function (a, b) {
            var c = this.rP;
            a && (b ? (c && c._LabelMarkerId !== a._LabelMarkerId &&
            c.setTop(!1), this.rP = a) : this.rP = null)
        }, zR: function (a) {
            if (this.g) return this.g.zR(a)
        }, wn: function (a, b) {
            for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++) if (a[d].data.id === c) return d;
            return -1
        }, removeItem: function () {
        }, cg: function (a) {
            this.get("map") || this.set("map", a.D, !0);
            if (g.q.sr) {
                this.g = new g.q.sr(this, a);
                this.Yf && this.Jo();
                a = this.Qu;
                if (a.length) {
                    for (var b = 0; b < a.length; b++) this.on.apply(this, a[b]);
                    this.Qu = []
                }
                return this.g
            }
            return ["AMap.LabelsLayer"]
        }, q4: function (a) {
            if (a) return this._markerBindArray[a] ||
                null
        }, BZ: function () {
            var a = this;
            return g.a.ND(function (b) {
                var c = a.g;
                c ? c.Sz(b) : a.vD = b
            }, 100)
        }, Jf: function (a) {
            return "undefined" === typeof a
        }, UZ: function (a) {
            return "string" === typeof a
        }, Gga: function (a) {
            return "number" === typeof a
        }, yG: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            return this.Jf(a.width) || this.Jf(a.height) ? this.UZ(a) ? a.split(",") : this.Gga(a) ? [a, a] : a : [a.width, a.height]
        }, tfa: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            return this.Jf(a.R) ||
            this.Jf(a.Q) ? this.UZ(a) ? a.split(",") : a : [a.R, a.Q]
        }, yha: function (a) {
            "string" === typeof a && (a = a.trim(), a = a.split(" "));
            if ("[object Array]" === Object.prototype.toString.apply(a)) {
                for (var b = a.length, c = 0; c < b; c++) {
                    var d = parseInt(a[c]);
                    a[c] = isNaN(d) ? 3 : d
                }
                switch (b) {
                    case 0:
                        a = [3, 3, 3, 3];
                        break;
                    case 1:
                        a = [a[0], a[0], a[0], a[0]];
                        break;
                    case 2:
                        a = [a[0], a[1], a[0], a[1]];
                        break;
                    case 3:
                        a = [a[0], a[1], a[2], a[1]]
                }
                return a
            }
            return [3, 3, 3, 3]
        }
    });
    z.q.PL = z.q.DA.extend({
        A: function (a, b, c) {
            this.CLASS_NAME = "AMap.GroundImage";
            g.c.ya(this, c);
            c = c || {};
            this.ah = !0;
            var d = parseFloat(c.opacity);
            isNaN(d) && (d = 1);
            arguments.callee.ma.call(this, {
                url: a,
                bounds: b,
                clickable: c.clickable,
                opacity: d,
                map: c.map,
                zooms: c.zooms || [3, 20]
            });
            this.CLASS_NAME = "AMap.GroundImage"
        }, Uua: function (a) {
            this.get("bounds").contains(a.lnglat) && (a.target = this, this.r("click", a))
        }, Vua: function (a) {
            this.get("bounds").contains(a.lnglat) && (a.target = this, this.r("dblclick", a))
        }, setMap: function (a) {
            g.c.add(this,
                "setMap");
            a ? (this.get("map") && (this.get("map").uk(this), this.J2 && z.event.removeListener(this.J2), this.a3 && z.event.removeListener(this.a3)), this.set("map", a)) : this.get("map") && (this.get("map").uk(this), this.De.map = null)
        }, mapChanged: function () {
            this.get("map") && (this.get("map").RH(this), this.get("clickable") && (this.J2 = z.event.addListener(this.get("map"), "click", this.Uua, this), this.a3 = z.event.addListener(this.get("map"), "dblclick", this.Vua, this)))
        }
    });
    z.B.Fh = g.da.extend({
        ka: [g.va, g.$e, {Ka: g.a.Ka}],
        w: {extData: {}, bubble: !1, clickable: !0, draggable: !1},
        A: function () {
            this.OG = g.a.zb(this)
        },
        EEa: function () {
            return this.OG
        },
        iDa: function () {
            this.C = !0;
            this.get("map", null, !0) && this.setMap(this.get("map"));
            this.C = !1
        },
        mapChanged: function () {
            this.get("map", null, !0) && this.get("map", null, !0).uC(this)
        },
        fR: function (a) {
            var b = 0;
            a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
            return b
        },
        setHeight: function (a) {
            this.height = a = a || 0;
            a = this.fR(a);
            this.set("altitude",
                a)
        },
        getHeight: function () {
            return this.height
        },
        show: function () {
            g.c.add(this, "show");
            !0 != this.get("visible", null, !0) && this.set("visible", !0)
        },
        hide: function () {
            g.c.add(this, "hide");
            !1 != this.get("visible", null, !0) && this.set("visible", !1)
        },
        setMap: function (a) {
            g.c.add(this, "setMap");
            a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).Lz(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).Lz(this), this.set("map", null, !0)))
        },
        getMap: function () {
            g.c.add(this,
                "getMap");
            return this.get("map", null, !0)
        },
        setExtData: function (a) {
            g.c.add(this, "setExtData");
            this.set("extData", a)
        },
        positionChanged: function () {
        },
        getExtData: function () {
            g.c.add(this, "getExtData");
            return this.get("extData", null, !0)
        },
        getVisible: function () {
            return this.get("visible", null, !0)
        }
    });
    z.B.hd = z.B.Fh.extend({
        A: function (a) {
            z.B.hd.cd.A.apply(this, arguments)
        }, show: function () {
            g.c.add(this, "show");
            !1 == this.get("visible", null, !0) && (this.set("visible", !0), this.r("show", {
                type: "show",
                target: this
            }))
        }, hide: function () {
            g.c.add(this, "hide");
            !0 == this.get("visible", null, !0) && (this.set("visible", !1), this.r("hide", {
                type: "hide",
                target: this
            }))
        }, getVisible: function () {
            g.c.add(this, "getVisible");
            return this.get("visible", null, !0)
        }, getOptions: function () {
            g.c.add(this, "getOptions");
            var a = {},
                b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable draggable".split(" "),
                c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg".split(" "),
                d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"],
                e = ["center", "radius", "texture"], f = ["bounds", "texture"], h = [];
            this instanceof z.B.$b && (h = b.concat(c));
            this instanceof z.B.Ec && (h = b.concat(d));
            this instanceof z.B.hh && (h = b.concat(e).concat(d));
            this instanceof z.B.Gt && (h = b.concat(e).concat(d));
            this instanceof z.B.Nt && (h = b.concat(d).concat(f));
            for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null,
                !0);
            return a
        }, setOptions: function (a) {
            g.c.add(this, "setOptions");
            a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.Ka(a.path));
            a.center && (a.center = this.Ka(a.center));
            var b;
            a.hasOwnProperty("map") && (b = a.map, delete a.map);
            this.kf(a);
            void 0 !== b && (this.setMap(b), a.map = b);
            this.r("options");
            this.r("change", {type: "change", target: this})
        }, setzIndex: function (a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        }, getzIndex: function () {
            g.c.add(this, "getzIndex");
            return this.get("zIndex", null,
                !0)
        }, setDraggable: function (a) {
            g.c.add(this, "setDraggable");
            this.set("draggable", a)
        }
    });
    z.B.gM = z.B.hd.extend({
        w: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            lineJoin: "miter",
            lineCap: "butt",
            path: []
        }, A: function (a) {
            z.B.gM.cd.A.apply(this, arguments)
        }, setPath: function (a, b) {
            g.c.add(this, "setPath");
            a && a.length || (a = []);
            a = this.Ka(a);
            this.B && this.B.get("deltaPos") && this.B.set("deltaPos", [0, 0], !0);
            this.set("path", a);
            this.r("change", {type: "change", target: this});
            b || this.r("setPath")
        }, getPath: function () {
            g.c.add(this, "getPath");
            return this.P2()
        }, reset: function () {
            var a = this.P2();
            this.B.set("deltaPos", [0, 0], !0);
            this.setPath(a)
        }, P2: function () {
            var a = this.get("path", null, !0);
            this.B && this.B.get("deltaPos") && (a = this.B.Ut(a, this.B.get("deltaPos")));
            return a
        }
    });
    z.B.di = g.da.extend({
        ka: [g.va, g.$e],
        w: {
            size: new g.zd(36, 36),
            imageOffset: new g.H(0, 0),
            image: g.o.Hb + "/theme/v1.3/markers/0.png",
            imageSize: null
        },
        A: function (a) {
            this.CLASS_NAME = "AMap.Icon";
            g.c.ya(this, a);
            a = a || {};
            a.size && (a.size = g.a.Mq(a.size));
            a.imageSize && (a.imageSize = g.a.Mq(a.imageSize));
            g.a.vb(this, a);
            this.kf(this.w)
        },
        setImageSize: function (a) {
            g.c.add(this, "setImageSize");
            a = g.a.Mq(a);
            this.set("imageSize", a)
        },
        getImageSize: function () {
            g.c.add(this, "getImageSize");
            return this.get("imageSize", null, !0)
        }
    });
    z.B.Uaa = g.da.extend({
        ka: [g.va, g.$e], w: {coords: [], type: ""}, A: function (a) {
            this.CLASS_NAME = "AMap.MarkerShape";
            g.c.ya(this, a);
            g.a.vb(this, a);
            this.kf(this.w)
        }
    });
    z.B.wb = z.B.Fh.extend({
        w: {
            cursor: "pointer",
            visible: !0,
            zIndex: 100,
            angle: 0,
            textAlign: "left",
            verticalAlign: "top",
            autoRotation: !1,
            opacity: 1,
            offset: new g.H(-9, -31),
            size: new g.H(19, 33),
            raiseOnDrag: !1,
            topWhenClick: !1,
            topWhenMouseOver: !1,
            animation: "AMAP_ANIMATION_NONE"
        }, A: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Marker";
            g.c.ya(this, a);
            a = a || {};
            this.ah = !0;
            this.nha = g.a.zb(this);
            this.C = !0;
            a.position && (a.position = this.Ka(a.position));
            a.height && this.setHeight(a.height);
            g.a.vb(this, a);
            g.l.Ve && (this.w.angle =
                0);
            this.kf(this.w, !0);
            this.mapChanged();
            this.C = !1
        }, getAnchor: function () {
            g.c.add(this, "getAnchor");
            return this.get("anchor", null, !0)
        }, setAnchor: function (a) {
            g.c.add(this, "setAnchor");
            this.set("anchor", a)
        }, getId: function () {
            g.c.add(this, "getId");
            return this.nha
        }, setRaiseOnDrag: function (a) {
            g.c.add(this, "setRaiseOnDrag");
            this.set("raiseOnDrag", a)
        }, setPosition: function (a, b) {
            g.c.add(this, "setPosition");
            a = this.Ka(a);
            void 0 !== b && (this.C = !0, this.setHeight(b), this.C = !1);
            this.set("position", a)
        }, getPosition: function () {
            g.c.add(this,
                "getPosition");
            return this.get("position", null, !0)
        }, getBounds: function () {
            var a = this.get("position", null, !0).eb();
            return new g.pe(a, a.eb())
        }, mapChanged: function () {
            this.yl("zoom");
            var a = this.get("map", null, !0);
            a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.uC(this), this.X("zoom", a))
        }, getZooms: function () {
            g.c.add(this, "getZooms");
            return this.get("zooms", null, !0)
        }, zoomChanged: function () {
            var a = this.get("zooms", null, !0);
            if (a) {
                var b = this.get("zoom");
                b < a[0] || b > a[1] ? this.set("outOfZooms",
                    !0) : this.set("outOfZooms", !1);
                this.B && this.B.qva()
            }
        }, setIcon: function (a) {
            g.c.add(this, "setIcon");
            this.set("icon", a)
        }, getIcon: function () {
            g.c.add(this, "getIcon");
            return this.get("icon", null, !0)
        }, setContent: function (a) {
            g.c.add(this, "setContent");
            this.set("content", a)
        }, getContent: function () {
            g.c.add(this, "getContent");
            return this.get("content", null, !0)
        }, getContentDom: function () {
            return this.get("contentDom", null, !0)
        }, hide: function () {
            g.c.add(this, "hide");
            !0 == this.get("visible", null, !0) && this.set("visible",
                !1)
        }, show: function () {
            g.c.add(this, "show");
            !1 == this.get("visible", null, !0) && this.set("visible", !0)
        }, setCursor: function (a) {
            g.c.add(this, "setCursor");
            this.set("cursor", a)
        }, setRotation: function (a) {
            g.c.add(this, "setRotation");
            g.l.Ve || this.set("angle", a)
        }, setAngle: function (a) {
            g.c.add(this, "setAngle");
            g.l.Ve || "number" !== typeof a || this.set("angle", a)
        }, getAngle: function () {
            g.c.add(this, "getAngle");
            return this.get("angle", null, !0)
        }, setOffset: function (a) {
            g.c.add(this, "setOffset");
            this.set("offset", a)
        }, getOffset: function () {
            g.c.add(this,
                "getOffset");
            return this.get("offset", null, !0)
        }, setTextAlign: function (a) {
            g.c.add(this, "setTextAlign");
            this.set("textAlign", a)
        }, getTextAlign: function () {
            g.c.add(this, "getTextAlign");
            return this.get("textAlign", null, !0)
        }, setVerticalAlign: function (a) {
            g.c.add(this, "setVerticalAlign");
            this.set("verticalAlign", a)
        }, getVerticalAlign: function () {
            g.c.add(this, "getVerticalAlign");
            return this.get("verticalAlign", null, !0)
        }, setzIndex: function (a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        }, getzIndex: function () {
            g.c.add(this,
                "getzIndex");
            return this.get("zIndex", null, !0)
        }, setOpacity: function (a) {
            g.c.add(this, "setOpacity");
            this.set("opacity", a)
        }, setDraggable: function (a) {
            g.c.add(this, "setDraggable");
            this.set("draggable", a)
        }, getDraggable: function () {
            g.c.add(this, "getDraggable");
            return this.get("draggable", null, !0)
        }, moveTo: function (a, b, c) {
            g.c.add(this, "moveTo");
            a = this.Ka(a);
            this.set("move", {Of: a, speed: b, yb: c})
        }, moveAlong: function (a, b, c, d) {
            g.c.add(this, "moveAlong");
            if (!(2 > a.length)) {
                a = this.Ka(a);
                for (var e = [a[0]], f = a[0], h = 1; h <
                a.length; h += 1) f.hb(a[h]) || (e.push(a[h]), f = a[h]);
                this.set("move", {Of: e, speed: b, yb: c, Bna: d})
            }
        }, stopMove: function () {
            g.c.add(this, "stopMove");
            this.set("move", !1)
        }, pauseMove: function () {
            g.c.add(this, "pauseMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "pause";
            this.set("move", a);
            return !0
        }, resumeMove: function () {
            g.c.add(this, "resumeMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "resume";
            this.set("move", a);
            return !0
        }, setShadow: function (a) {
            g.c.add(this, "setShadow");
            this.set("shadow", a)
        }, getShadow: function () {
            g.c.add(this,
                "getShadow");
            return this.get("shadow", null, !0)
        }, setClickable: function (a) {
            g.c.add(this, "setClickable");
            a !== this.get("clickable", null, !0) && this.set("clickable", a)
        }, getClickable: function () {
            g.c.add(this, "getClickable");
            return this.get("clickable", null, !0)
        }, setTitle: function (a, b) {
            g.c.add(this, "setTitle");
            "string" === typeof a && this.set("title", a, b)
        }, getTitle: function () {
            g.c.add(this, "getTitle");
            return this.get("title", null, !0)
        }, setLabel: function (a) {
            g.c.add(this, "setLabel");
            a && !g.a.vh(a) && (a = g.extend({}, this.get("label"),
                a));
            this.set("label", a)
        }, getLabel: function () {
            g.c.add(this, "getLabel");
            return this.get("label", null, !0)
        }, setTop: function (a, b) {
            g.c.add(this, "setTop");
            this.set("isTop", a, b)
        }, getTop: function () {
            g.c.add(this, "getTop");
            return this.get("isTop", null, !0)
        }, setShape: function (a, b) {
            g.c.add(this, "setShape");
            this.set("shape", a, b)
        }, getShape: function () {
            g.c.add(this, "getShape");
            return this.get("shape", null, !0)
        }, setAnimation: function (a, b) {
            g.c.add(this, "setAnimation");
            this.set("animation", a, b)
        }, getAnimation: function () {
            g.c.add(this,
                "getAnimation");
            return this.get("animation", null, !0)
        }, getMap: function () {
            g.c.add(this, "getMap");
            return this.get("map", null, !0)
        }, markOnAMAP: function (a) {
            g.c.add(this, "markOnAMAP");
            a = a || {};
            var b = {};
            b.name = a.name || this.get("name", null, !0) || "";
            a = this.Ka(a.position) || this.get("position", null, !0);
            b.y = a.Q;
            b.x = a.R;
            g.ai.ot(g.ai.kra(b))
        }
    });
    z.B.Naa = z.B.Fh.extend({
        Yaa: Math.pow(2, 31),
        w: {
            position: null,
            zooms: [3, 20],
            opacity: 1,
            visible: !0,
            zIndex: 1,
            rank: 1,
            extData: null
        },
        A: function (a) {
            a = a || {};
            this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelMarker";
            g.c.ya(this, a);
            arguments.callee.ma.apply(this, arguments);
            this._LabelMarkerId = g.a.zb(this);
            g.a.vb(this, a);
            this.kf(this.w, !0);
            this.v3 = []
        },
        wn: function (a, b) {
            for (var c = b._LabelMarkerId || null, d = 0, e = a.length; d < e; d++) if (a[d].data.id === c) return d;
            return -1
        },
        V8: function () {
            var a = this.v3 || [];
            if (a.length) {
                for (var b = 0,
                         c = a.length; b < c; b++) this.on.apply(this, a[b]);
                this.v3 = []
            }
        },
        jJ: function () {
            var a = this.g;
            if (!a) return null;
            var a = a.Yf || [], b = this.wn(a, this);
            return -1 !== b ? a[b] : null
        },
        getName: function () {
            g.c.add(this, "getName");
            return this.w.name
        },
        setName: function (a) {
            g.c.add(this, "setName");
            this.w.name = a;
            var b = this.jJ();
            b && (b.opts.title = a)
        },
        getBounds: function () {
            g.c.add(this, "getBounds");
            var a = this.get("position", null, !0);
            try {
                return "string" === typeof a ? a = new g.U(a.split(",")) : "[object Array]" == Object.prototype.toString.apply(a) &&
                    (a = new g.U(a[0], a[1])), new g.pe(a, a.eb())
            } catch (b) {
                return null
            }
        },
        getPosition: function () {
            g.c.add(this, "getPosition");
            var a = this.g.Yf, b = this.wn(a, this);
            return -1 !== b ? a[b].data.position : null
        },
        setPosition: function (a) {
            g.c.add(this, "setPosition");
            this.w.position = a;
            var b = this.g;
            if (b) {
                var c = b.Yf, d = this.wn(c, this);
                -1 !== d && (c[d].data.position = a, b.Jo())
            }
        },
        getZooms: function () {
            g.c.add(this, "getZooms");
            var a = this.g.Yf, b = this.wn(a, this);
            return -1 !== b ? a[b].opts.zooms : null
        },
        setZooms: function (a) {
            g.c.add(this, "setZooms");
            this.w.zooms = a;
            var b = this.g;
            if (b) {
                var c = b.Yf || [], d = this.wn(c, this);
                -1 !== d && (c[d].opts.zooms = a, b.Jo())
            }
        },
        getOpacity: function () {
            g.c.add(this, "getOpacity");
            var a = this.g.Yf, b = this.wn(a, this);
            return -1 !== b ? a[b].opts.opacity : null
        },
        setOpacity: function (a) {
            g.c.add(this, "setOpacity");
            this.w.opacity = a;
            var b = this.g;
            if (b) {
                var c = b.Yf, d = this.wn(c, this);
                -1 !== d && (c[d].opts.opacity = a, b.Jo())
            }
        },
        getzIndex: function () {
            g.c.add(this, "getzIndex");
            if (this.jJ()) return this.w.zIndex
        },
        setzIndex: function (a) {
            g.c.add(this, "setzIndex");
            this.w.zIndex = a;
            var b = this.jJ();
            b && (b.opts.zIndex = a, this.g.Jo())
        },
        getRank: function () {
            g.c.add(this, "getRank");
            return this.w.rank
        },
        setRank: function (a) {
            g.c.add(this, "setZIndex");
            var b = this.jJ();
            this.w.rank = a;
            b && (b.data.rank = a, this.g.Jo())
        },
        getIcon: function () {
            g.c.add(this, "getIcon");
            return this.w.icon
        },
        setIcon: function (a) {
            g.c.add(this, "setIcon");
            this.w.icon = this.w.icon ? g.extend({}, this.w.icon, a) : a;
            var b = this.g;
            if (b) {
                var b = b.Yf, c = this.wn(b, this);
                if (-1 !== c) {
                    var d = a.size, e = a.clipSize;
                    d && (a.size = this.g.yG(d));
                    e && (a.clipSize = this.g.yG(e));
                    b[c].opts.icon = g.extend({}, b[c].opts.icon, a);
                    this.g.Jo()
                }
            }
        },
        getText: function () {
            g.c.add(this, "getText");
            return this.w.text
        },
        setText: function (a) {
            g.c.add(this, "setText");
            this.w.text = this.w.text ? g.extend({}, this.w.text, a) : a;
            var b = this.g;
            if (b) {
                var b = b.Yf, c = this.wn(b, this);
                -1 !== c && (b[c].data.txt = void 0 == a.content ? b[c].data.txt : a.content, b[c].opts.text = g.extend({}, b[c].opts.text, a), a.style && (b[c].opts.text.style = g.extend({}, b[c].opts.text.style, a.style)), this.g.Jo())
            }
        },
        setTop: function () {
            var a =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
            g.c.add(this, "setTop");
            this.g && this.g.MU(this, a);
            a ? (this.Eca = this.w.zIndex, this.setzIndex(this.Yaa)) : this.setzIndex(this.Eca || this.w.zIndex)
        },
        getVisible: function () {
            g.c.add(this, "getVisible");
            var a = this.w.visible;
            this.g && a && (a = !this.g.zR(this._LabelMarkerId));
            return a
        },
        getExtData: function () {
            g.c.add(this, "getExtData");
            return this.w.extData
        },
        setExtData: function (a) {
            g.c.add(this, "setExtData");
            this.w.extData = a
        },
        getOptions: function () {
            return this.w
        },
        show: function () {
            g.c.add(this, "show");
            this.w.visible = !0;
            this.g && this.g.add(this);
            return this
        },
        hide: function () {
            g.c.add(this, "hide");
            this.w.visible = !1;
            this.g && this.g.remove(this);
            return this
        }
    });
    z.B.Un = z.B.Fh.extend({
        w: {visible: !1, items: []}, A: function (a) {
            this.CLASS_NAME = "AMap.ContextMenu";
            g.c.ya(this, a);
            this.ah = !0;
            g.a.vb(this, a);
            this.w.items = [];
            this.kf(this.w)
        }, addItem: function (a, b, c) {
            g.c.add(this, "addItem");
            this.get("items").push({Rn: a, yb: b, mK: c});
            this.r("items")
        }, removeItem: function (a, b) {
            g.c.add(this, "removeItem");
            var c = this.get("items"), d, e;
            for (e = 0; e < c.length; e += 1) if (d = c[e], d.Rn === a && d.yb === b) {
                c.splice(e, 1);
                break
            }
            this.r("items")
        }, open: function (a, b) {
            g.c.add(this, "open");
            this.C = !0;
            b = g.a.Ka(b);
            this.set("position", b);
            this.map ? this.map && this.map !== a && (this.map.Lz(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
            this.r("open", {type: "open", target: this});
            this.C = !1
        }, close: function () {
            g.c.add(this, "close");
            this.C = !0;
            this.setMap(null);
            this.map && (this.map = this.map.vy = null, this.r("close", {
                type: "close",
                target: this
            }));
            this.C = !1
        }
    });
    z.B.Ze = z.B.Fh.extend({
        w: {
            visible: !0,
            offset: new g.H(0, 0),
            showShadow: !1,
            closeWhenClickMap: !1,
            retainWhenClose: !0,
            autoMove: !0,
            altitude: 0,
            anchor: "bottom-center"
        }, A: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow";
            g.c.ya(this, a);
            a = a || {};
            this.ah = !0;
            a && a.size && (a.size = g.a.Mq(a.size));
            g.a.vb(this, a);
            this.kf(this.w);
            a.position && this.set("position", g.a.Ka(a.position), !0);
            a.height && this.set("altitude", this.fR(a.height), !0)
        }, open: function (a, b, c) {
            g.c.add(this, "open");
            b = g.a.Ka(b);
            if (a && !this.kL && (b =
                b || this.get("position", null, !0))) {
                this.r("change", {type: "change", target: this});
                c = this.fR(c) || this.get("altitude");
                var d = this.get("map", null, !0);
                d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a.tm && a.tm.close(), this.set("position", b, !0), this.set("altitude", c, !0), this.C = !0, this.setMap(a), this.C = !1);
                this.r("open", {type: "open", target: this})
            }
        }, close: function () {
            g.c.add(this, "close");
            this.B && this.B.map && (this.C = !0, this.setMap(null), this.map = null, this.r("change", {
                type: "change",
                target: this
            }),
                this.C = !1)
        }, getAnchor: function () {
            g.c.add(this, "getAnchor");
            return this.get("anchor", null, !0)
        }, setAnchor: function (a) {
            g.c.add(this, "setAnchor");
            this.set("anchor", a);
            this.r("change", {type: "change", target: this})
        }, setContent: function (a) {
            g.c.add(this, "setContent");
            this.set("content", a);
            this.r("change", {type: "change", target: this})
        }, getContentU: function () {
            g.c.add(this, "getContentU");
            return this.get("content", null, !0)
        }, getContentDom: function () {
            return this.get("contentDom", null, !0)
        }, getContent: function () {
            g.c.add(this,
                "getContent");
            return this.get("content", null, !0)
        }, setPosition: function (a) {
            g.c.add(this, "setPosition");
            a = g.a.Ka(a);
            this.set("position", a);
            this.r("change", {type: "change", target: this})
        }, setOffset: function (a) {
            g.c.add(this, "setOffset");
            this.set("offset", a);
            this.r("change", {type: "change", target: this})
        }, getPosition: function () {
            g.c.add(this, "getPosition");
            return this.get("position", null, !0)
        }, setSize: function (a) {
            g.c.add(this, "setSize");
            a = g.a.Mq(a);
            this.set("size", a);
            this.r("change", {type: "change", target: this})
        },
        getSize: function (a) {
            g.c.add(this, "getSize");
            var b = this.get("size", null, !0);
            if (b) return b;
            if (this.B && !a) return new g.zd(this.B.qh.offsetWidth, this.B.qh.offsetHeight)
        }, getIsOpen: function () {
            g.c.add(this, "getIsOpen");
            return !!this.get("map")
        }
    });
    z.B.$b = z.B.gM.extend({
        w: {
            isOutline: !1,
            outlineColor: "#000000",
            geodesic: !1,
            dirColor: "white",
            showDir: !1,
            borderWeight: 1
        }, A: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Polyline";
            g.c.ya(this, a);
            this.C = !0;
            z.B.$b.cd.A.apply(this, arguments);
            this.ah = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
            a.path && (a.path = this.Ka(a.path));
            g.a.vb(this, a);
            this.setOptions(this.w);
            this.C = !1
        }, getLength: function () {
            g.c.add(this, "getLength");
            for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].He(a[c +
            1]);
            return parseFloat(b.toFixed(2))
        }, getBounds: function () {
            var a = this.get("path");
            if (!a || !a.length) return null;
            for (var b = new g.pe(180, 90, -180, -90), c = a.length - 1; 0 <= c; c -= 1) b.extend(a[c]);
            return b
        }
    });
    (function (a) {
        function b(a, b, c, d) {
            if (1 <= a) return d;
            var e = 1 - a;
            return e * e * b + 2 * e * a * c + a * a * d
        }

        function c(a, b, c, d, e) {
            if (1 <= a) return e;
            var f = 3 * (c[0] - b[0]), h = 3 * (d[0] - c[0]) - f, s = 3 * (c[1] - b[1]);
            c = 3 * (d[1] - c[1]) - s;
            return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]]
        }

        function d(a, c, d, e) {
            return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
        }

        function e(b, c) {
            c = a.a.Ka(c);
            return b.OD(c, 20).xl()
        }

        function f(b, c) {
            a.a.isArray(c) && (c = new a.H(c[0], c[1]));
            return b.nE(c,
                20)
        }

        function h(b, f, h, n, p, q) {
            var r = null;
            if (b && h && h.length) {
                b = [b];
                b.push.apply(b, h);
                b.push(f);
                h = 0;
                for (r = b.length; h < r; h++) b[h] = e(n, b[h]);
                h = a.extend({tolerance: 4, interpolateNumLimit: [3, 300]}, q);
                q = h.tolerance;
                h = h.interpolateNumLimit;
                q = Math.max(2, q);
                for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var w = b[u], t = b[u + 1], r = r + Math.abs(t[0] - w[0]), s = s + Math.abs(t[1] - w[1]);
                a:{
                    p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q)));
                    q = null;
                    switch (b.length) {
                        case 3:
                            q = d;
                            break;
                        case 4:
                            q = c;
                            break;
                        default:
                            r = null;
                            break a
                    }
                    h = [];
                    r = [0].concat(b);
                    for (s = 1; s < p - 2; s++) r[0] = s / p, h.push(q.apply(null, r));
                    h.push(b[b.length - 1]);
                    r = h
                }
            }
            return r || [e(n, f)]
        }

        a.Nw = {
            SGa: d, yDa: c, GI: function () {
                function a(b, c, d) {
                    return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b
                }

                function b(a) {
                    return a
                }

                var c = {}, d = "function" === typeof Float32Array;
                return function (e, f, h, s) {
                    function u(b) {
                        if (0 === b) b = 0; else if (1 === b) b = 1; else {
                            for (var c = 0, d = 1; 10 !== d && w[d] <= b; ++d) c += 0.1;
                            --d;
                            var d = c + (b - w[d]) / (w[d + 1] - w[d]) * 0.1,
                                l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                            if (0.001 <= l) {
                                for (c = 0; 4 > c; ++c) {
                                    l = 3 *
                                        (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                                    if (0 === l) break;
                                    d -= (a(d, e, h) - b) / l
                                }
                                b = d
                            } else if (0 === l) b = d; else {
                                var d = c, c = c + 0.1, m, n = 0;
                                do m = d + (c - d) / 2, l = a(m, e, h) - b, 0 < l ? c = m : d = m; while (1E-7 < Math.abs(l) && 10 > ++n);
                                b = m
                            }
                            b = a(b, f, s)
                        }
                        return b
                    }

                    if (!(0 <= e && 1 >= e && 0 <= h && 1 >= h)) throw Error("bezier x values must be in [0, 1] range");
                    var v = arguments.toString();
                    if (c[v]) return c[v];
                    if (e === f && h === s) return b;
                    for (var w = d ? new Float32Array(11) : Array(11), t = 0; 11 > t; ++t) w[t] = a(0.1 * t, e, h);
                    return c[v] = u
                }
            }(), l4: function (a, b, c, d) {
                var e, f, r = [];
                e = 0;
                for (f =
                         a.length; e < f; e += 1) r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
                return r
            }, Yqa: function (a, b, c, d) {
                a = this.l4(a, b, c, d);
                c = [];
                d = 0;
                for (var e = a.length; d < e; d++) c.push(f(b, a[d]));
                return c
            }
        }
    })(g);
    z.B.uA = z.B.$b.extend({
        w: {tolerance: 4, interpolateNumLimit: [3, 300]}, A: function (a) {
            this.CLASS_NAME = "AMap.BezierCurve";
            g.c.ya(this, a);
            z.B.uA.cd.A.apply(this, arguments)
        }, getLength: function () {
            g.c.add(this, "getLength");
            this.get("map");
            this.C = !0;
            var a = this.getInterpolateLngLats();
            this.C = !1;
            return g.Ht.distanceOfLine(a)
        }, getInterpolateLngLats: function () {
            g.c.add(this, "getInterpolateLngLats");
            var a = this.get("map");
            return g.Nw.Yqa(this.get("path"), a && a.nj || g.$h.LL, Math.pow(2, 2), this.w)
        }, getSerializedPath: function () {
            g.c.add(this,
                "getSerializedPath");
            for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (e instanceof g.U) {
                    var f = [];
                    if (e.controlPoints) for (var h = 0, k = e.controlPoints.length; h < k; h++) f.push(e.controlPoints[h].DR()), f.push(e.controlPoints[h].AR());
                    f.push(e.DR());
                    f.push(e.AR());
                    b.push(f)
                } else b.push(e)
            }
            return b
        }, Ka: function (a) {
            var b = typeof a[0];
            if (g.a.isArray(a) && "object" === b) {
                for (b = 0; b < a.length; b += 1) a[b] = this.Fja(a[b]);
                return a
            }
            return [this.xGa(a)]
        }, Fja: function (a) {
            var b;
            if (a instanceof g.U) b =
                a; else {
                b = typeof a[0];
                var c, d, e = [];
                if ("string" === b || "number" === b) {
                    d = a.length;
                    if (d % 2) throw Error("LngLat number should be even, now it's " + d);
                    b = new g.U(a[d - 2], a[d - 1]);
                    c = 0;
                    for (d -= 2; c < d; c += 2) e.push(new g.U(a[c], a[c + 1]))
                } else if (g.a.isArray(a[0])) for (d = a.length, b = new g.U(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++) e.push(new g.U(a[c][0], a[c][1])); else throw Error("AMap.LngLat expected, now it's " + a);
                b && e.length && (b.controlPoints = g.a.Ka(e))
            }
            if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
            return b
        }
    });
    z.B.Ec = z.B.gM.extend({
        A: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Polygon";
            g.c.ya(this, a);
            this.C = !0;
            z.B.Ec.cd.A.apply(this, arguments);
            this.ah = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            a.path && (a.path = this.Ka(a.path));
            g.a.vb(this, g.extend({fillColor: "#FFAA00", fillOpacity: 0.9}, a));
            this.setOptions(this.w);
            this.C = !1
        }, A4: function (a) {
            var b = 6378137 * Math.PI / 180, c = 0, d = a.length;
            if (3 > d) return 0;
            for (var e = 0; e < d - 1; e += 1) var f = a[e], h = a[e + 1], k = f.R * b * Math.cos(f.Q * Math.PI / 180), f = f.Q * b, l = h.R *
                b * Math.cos(h.Q * Math.PI / 180), c = c + (k * h.Q * b - l * f);
            e = a[e];
            a = a[0];
            d = e.R * b * Math.cos(e.Q * Math.PI / 180);
            e = e.Q * b;
            h = a.R * b * Math.cos(a.Q * Math.PI / 180);
            c += d * a.Q * b - h * e;
            return 0.5 * Math.abs(c)
        }, eK: function (a) {
            return a.length ? a[0] instanceof g.U ? [[a]] : a[0] instanceof Array && a[0][0] instanceof g.U ? [a] : a : a
        }, getArea: function () {
            g.c.add(this, "getArea");
            for (var a = this.get("path", null, !0), a = this.eK(a), b = 0, c = 0, d = a.length; c < d; c += 1) for (var e = a[c], b = b + this.A4(e[0]), f = 1; f < e.length; f += 1) b -= this.A4(e[f]);
            return Number(b.toFixed(2))
        },
        toString: function () {
            g.c.add(this, "toString");
            for (var a = this.get("path"), a = this.eK(a), b = [], c = 0, d = a.length; c < d; c += 1) {
                for (var e = a[c], f = [], h = 0, k = e.length; h < k; h += 1) f.push(e[h].join(";"));
                b.push(f.join("|"))
            }
            return b.join("^")
        }, getBounds: function () {
            var a = this.get("path");
            if (a && a.length) {
                for (var a = this.eK(a), b = new g.pe(180, 90, -180, -90), c = 0, d = a.length; c < d; c += 1) for (var e = a[c][0], f = e.length - 1; 0 <= f; f -= 1) b.extend(e[f]);
                return b
            }
            return null
        }, contains: function (a) {
            g.c.add(this, "contains");
            a = g.a.Ka(a);
            var b = this.get("path"),
                b = this.eK(b);
            a = [a.R, a.Q];
            for (var c = 0, d = b.length; c < d; c += 1) {
                for (var e = b[c], f = !1, h = 0, k = e.length; h < k && (f = this.jna(e[h]), g.yd.vq(f) || f.reverse(), f = g.yd.Ud(a, f, 0 === h ? !0 : !1), 0 < h && (f = !f), f); h += 1) ;
                if (f) return !0
            }
            return !1
        }, jna: function (a) {
            for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].R, a[c].Q]);
            return b
        }
    });
    z.B.hh = z.B.hd.extend({
        w: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            radius: 1E3,
            fillColor: "#006600",
            fillOpacity: 0.9,
            unit: "miter"
        }, A: function (a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
            g.c.ya(this, a);
            this.C = !0;
            z.B.hh.cd.A.apply(this, arguments);
            a = a || {};
            a.center && (a.center = g.a.Ka(a.center));
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            g.a.kk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius);
            g.a.vb(this, a);
            this.ah = this.w.center ? !0 : !1;
            this.setOptions(this.w);
            this.C = !1
        }, setCenter: function (a, b) {
            g.c.add(this, "setCenter");
            (a = g.a.Ka(a)) && a instanceof g.U && (this.B && this.B.get("deltaPos") && this.B.set("deltaPos", [0, 0], !0), this.set("center", a), this.r("change", {
                type: "change",
                target: this
            }), this.ah || (this.ah = !0, this.get("map") && this.get("map").r("overlays")), b || this.r("setCenter"))
        }, getCenter: function () {
            g.c.add(this, "getCenter");
            var a = this.get("center", null, !0);
            this.B && this.B.get("deltaPos") && (a =
                this.B.Ut([a], this.B.get("deltaPos"))[0]);
            return a
        }, reset: function () {
            var a = this.get("center", null, !0);
            this.B && this.B.get("deltaPos") && (a = this.B.Ut([a], this.B.get("deltaPos"))[0], this.B.set("deltaPos", [0, 0], !0));
            this.set("center", a)
        }, setRadius: function (a, b) {
            g.c.add(this, "setRadius");
            this.set("radius", a);
            this.r("change", {type: "change", target: this});
            b || this.r("setRadius")
        }, getPath: function (a) {
            g.c.add(this, "getPath");
            a = a || 36;
            for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e = 0; e <
            a; e += 1) {
                var f = Math.PI * e / a * 2, h = Math.cos(f) * c, f = Math.sin(f) * c;
                d.push(b.offset(h, f))
            }
            return d
        }, getRadius: function () {
            g.c.add(this, "getRadius");
            return this.get("radius", null, !0)
        }, getBounds: function () {
            var a = this.get("center"), b = this.get("radius");
            if (!a) return null;
            var c = a.offset(-b, -b), a = a.offset(b, b);
            return new g.pe(c, a)
        }, contains: function (a) {
            g.c.add(this, "contains");
            return this.get("center").He(a) <= this.get("radius") ? !0 : !1
        }
    });
    z.B.ZV = z.B.hh.extend({
        A: function (a) {
            this.CLASS_NAME = "AMap.CircleMarker";
            g.c.ya(this, a);
            a = a || {};
            a.unit = "px";
            void 0 === a.radius ? a.radius = 20 : g.a.kk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20));
            z.B.ZV.cd.A.apply(this, arguments)
        }, getBounds: function () {
            this.C = !0;
            var a = this.getCenter();
            this.C = !1;
            return new g.pe(a, a.eb())
        }, contains: function (a) {
            g.c.add(this, "contains");
            this.C = !0;
            var b = this.getMap();
            this.C = !1;
            if (!b) return !1;
            var c = this.get("center");
            b.C = !0;
            var d = !1;
            c.He(a) <=
            this.get("radius") * b.getResolution(c) && (d = !0);
            b.C = !1;
            return d
        }
    });
    var vc = g.da.extend({
        A: function (a) {
            var b = Array(3), c;
            c = a instanceof Array ? a : a instanceof g.Gl || a instanceof g.Pa ? a.elements : arguments;
            b[0] = c[0] || 0;
            b[1] = c[1] || 0;
            b[2] = c[2] || 0;
            this.elements = b
        }, length: function () {
            return Math.sqrt(this.p6())
        }, p6: function () {
            var a = this.elements;
            return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
        }, normalize: function () {
            var a = this.elements, b = a[0], c = a[1], d = a[2],
                e = Math.sqrt(b * b + c * c + d * d);
            if (e) {
                if (1 === e) return this
            } else return a[0] = 0, a[1] = 0, a[2] = 0, this;
            e = 1 / e;
            a[0] = b * e;
            a[1] = c * e;
            a[2] = d * e;
            return this
        },
        eb: function () {
            return new g.Pa(this)
        }, copy: function (a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            return this
        }, set: function (a, b, c) {
            var d = this.elements;
            d[0] = a;
            d[1] = b;
            d[2] = c
        }, hb: function (a) {
            var b = this.elements;
            a = a.elements;
            return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
        }, Ln: function (a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            return this
        }, add: function (a) {
            var b = this.elements;
            a = a.elements;
            b[0] += a[0];
            b[1] += a[1];
            b[2] += a[2];
            return this
        }, fma: function (a, b) {
            var c = a.elements, d = b.elements,
                e = this.elements;
            e[0] = c[0] + d[0];
            e[1] = c[1] + d[1];
            e[2] = c[2] + d[2];
            return this
        }, sub: function (a) {
            a = a.elements;
            var b = this.elements;
            b[0] -= a[0];
            b[1] -= a[1];
            b[2] -= a[2];
            return this
        }, Xz: function (a, b) {
            var c = a.elements, d = b.elements, e = this.elements;
            e[0] = c[0] - d[0];
            e[1] = c[1] - d[1];
            e[2] = c[2] - d[2];
            return this
        }, js: function (a) {
            a = a.elements;
            var b = this.elements;
            b[0] = b[1] * a[2] - b[2] * a[1];
            b[1] = b[2] * a[0] - b[0] * a[2];
            b[2] = b[0] * a[1] - b[1] * a[0];
            return this
        }, zy: function (a, b) {
            var c = a.elements, d = b.elements, e = this.elements;
            e[0] = c[1] * d[2] -
                c[2] * d[1];
            e[1] = c[2] * d[0] - c[0] * d[2];
            e[2] = c[0] * d[1] - c[1] * d[0];
            return this
        }, Mf: function (a) {
            a = a.elements;
            var b = this.elements;
            return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
        }, He: function (a) {
            return Math.sqrt(this.h3(a))
        }, h3: function (a) {
            var b = a.elements, c = this.elements;
            a = c[0] - b[0];
            var d = c[1] - b[1], b = c[2] - b[2];
            return a * a + d * d + b * b
        }, tf: function (a) {
            var b = this.elements[0], c = this.elements[1], d = this.elements[2];
            a = a.elements;
            var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
            this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
            this.elements[1] =
                (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
            this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
            return this
        }
    });
    g.Pa = vc;
    g.Pa.Yb({
        Mf: "dot",
        eb: "clone",
        add: "add",
        sub: "sub",
        fma: "addVectors",
        Xz: "subVectors",
        zy: "crossVectors",
        normalize: "normalize",
        length: "length"
    });
    var wc = g.da.extend({
        A: function (a) {
            var b = Array(4), c;
            c = a instanceof Array ? a : arguments;
            b[0] = c[0];
            b[1] = c[1];
            b[2] = c[2];
            b[3] = c[3] || 1;
            this.elements = b
        }, copy: function (a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = void 0 !== a[3] ? a[3] : 1;
            return this
        }, multiply: function (a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            b[3] *= a
        }, tf: function (a) {
            var b = this.elements[0], c = this.elements[1], d = this.elements[2],
                e = this.elements[3];
            a = a.elements;
            this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
            this.elements[1] =
                a[1] * b + a[5] * c + a[9] * d + a[13] * e;
            this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
            this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
            return this
        }
    });
    g.Gl = wc;

    function xc(a, b) {
        this.xz = void 0 !== a ? a : new g.Pa(1, 0, 0);
        this.MC = void 0 !== b ? b : 0
    }

    g.Yw = xc;
    xc.prototype = {
        set: function (a, b) {
            this.xz.copy(a);
            this.MC = b;
            return this
        }, normalize: function () {
            var a = 1 / this.xz.length();
            this.xz.Ln(a);
            this.MC *= a;
            return this
        }, zI: function (a) {
            return this.xz.Mf(a) + this.MC
        }
    };

    function yc(a, b, c, d, e) {
        a.xz.set(b, c, d);
        a.MC = e;
        return a
    };

    function Ic(a, b, c, d, e, f) {
        this.kE = [void 0 !== a ? a : new g.Yw, void 0 !== b ? b : new g.Yw, void 0 !== c ? c : new g.Yw, void 0 !== d ? d : new g.Yw, void 0 !== e ? e : new g.Yw, void 0 !== f ? f : new g.Yw]
    }

    g.iW = Ic;
    Ic.prototype = {
        set: function (a, b, c, d, e, f) {
            var h = this.kE;
            h[0].copy(a);
            h[1].copy(b);
            h[2].copy(c);
            h[3].copy(d);
            h[4].copy(e);
            h[5].copy(f);
            return this
        }, eb: function () {
            return (new g.iW).copy(this)
        }, copy: function (a) {
            for (var b = this.kE, c = 0; 6 > c; c++) b[c].copy(a.kE[c]);
            return this
        }, AJ: function () {
            var a = new g.Pa, b = new g.Pa, c = a.elements, d = b.elements;
            return function (e) {
                var f = this.kE, h = e.max.elements;
                e = e.min.elements;
                for (var k = 0; 6 > k; k++) {
                    var l = f[k], m = l.xz.elements;
                    c[0] = 0 < m[0] ? e[0] : h[0];
                    d[0] = 0 < m[0] ? h[0] : e[0];
                    c[1] = 0 < m[1] ?
                        e[1] : h[1];
                    d[1] = 0 < m[1] ? h[1] : e[1];
                    c[2] = 0 < m[2] ? e[2] : h[2];
                    d[2] = 0 < m[2] ? h[2] : e[2];
                    m = l.zI(a);
                    l = l.zI(b);
                    if (0 > m && 0 > l) return !1
                }
                return !0
            }
        }()
    };
    (function (a) {
        function b(a) {
            this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }

        a.fM = function (a) {
            this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]]
        };
        b.prototype.GU = function () {
            var a = this.elements;
            a[0] = 1;
            a[4] = 0;
            a[8] = 0;
            a[12] = 0;
            a[1] = 0;
            a[5] = 1;
            a[9] = 0;
            a[13] = 0;
            a[2] = 0;
            a[6] = 0;
            a[10] = 1;
            a[14] = 0;
            a[3] = 0;
            a[7] = 0;
            a[11] = 0;
            a[15] = 1
        };
        b.prototype.set = function (a) {
            if (a.elements !== this.elements) return this.elements = a.elements.slice(0),
                this
        };
        b.prototype.toFixed = function (b) {
            for (var d = this.elements, e = 0; 16 > e; ++e) 0 !== d[e] && (d[e] = a.a.xb(d[e], b));
            return this
        };
        b.prototype.concat = function (a) {
            var b, e, f, h, k, l, m;
            e = b = this.elements;
            f = a.elements;
            if (b === f) for (f = Array(16), a = 0; 16 > a; ++a) f[a] = b[a];
            for (a = 0; 4 > a; a++) h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11], b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15];
            return this
        };
        b.multiply = function (b, d) {
            var e = Array(16), f, h,
                k, l, m, n, p;
            k = h = b.elements;
            l = d.elements;
            if (h === l) for (f = 0; 16 > f; ++f) e[f] = h[f];
            for (f = 0; 4 > f; f++) h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11], e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15];
            return new a.Dc(e)
        };
        b.prototype.multiply = b.prototype.concat;
        b.prototype.Bh = function (b) {
            var d = this.elements;
            b = b.elements;
            var e = new a.Gl, f = e.elements;
            f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
            f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
                d[13];
            f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
            f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
            return e
        };
        b.prototype.eA = function () {
            var a, b;
            a = this.elements;
            b = a[1];
            a[1] = a[4];
            a[4] = b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this
        };
        b.prototype.Hxa = function (a) {
            var b, e, f;
            b = a.elements;
            a = this.elements;
            e = [];
            e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]);
            e[4] = -b[4] *
                (b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]);
            e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]);
            e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]);
            e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]);
            e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]);
            e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
                (b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]);
            e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]);
            e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]);
            e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]);
            e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]);
            e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] -
                b[2] * b[5]);
            e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]);
            e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]);
            e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]);
            e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]);
            f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
            if (0 === f) return this;
            f = 1 / f;
            for (b = 0; 16 > b; b++) a[b] = e[b] * f;
            return this
        };
        b.prototype.Eg = function () {
            return (new b).Hxa(this)
        };
        b.prototype.JU = function (a, b, e, f, h, k) {
            var l, m, n, p;
            if (a === b || e === f || h === k) throw "null frustum";
            m = 1 / (b - a);
            n = 1 / (f - e);
            p = 1 / (k - h);
            l = this.elements;
            l[0] = 2 * m;
            l[1] = 0;
            l[2] = 0;
            l[3] = 0;
            l[4] = 0;
            l[5] = 2 * n;
            l[6] = 0;
            l[7] = 0;
            l[8] = 0;
            l[9] = 0;
            l[10] = -2 * p;
            l[11] = 0;
            l[12] = -(b + a) * m;
            l[13] = -(f + e) * n;
            l[14] = -(k + h) * p;
            l[15] = 1;
            return this
        };
        b.prototype.ova = function (a, d, e, f, h, k) {
            return this.concat((new b).JU(a, d, e, f, h, k))
        };
        b.prototype.Fxa = function (a, b, e, f, h, k) {
            var l, m, n, p;
            if (a === b || f === e || h === k) throw "null frustum";
            if (0 >= h) throw "near <= 0";
            if (0 >=
                k) throw "far <= 0";
            m = 1 / (b - a);
            n = 1 / (f - e);
            p = 1 / (k - h);
            l = this.elements;
            l[0] = 2 * h * m;
            l[1] = 0;
            l[2] = 0;
            l[3] = 0;
            l[4] = 0;
            l[5] = 2 * h * n;
            l[6] = 0;
            l[7] = 0;
            l[8] = (b + a) * m;
            l[9] = (f + e) * n;
            l[10] = -(k + h) * p;
            l[11] = -1;
            l[12] = 0;
            l[13] = 0;
            l[14] = -2 * h * k * p;
            l[15] = 0;
            return this
        };
        b.prototype.pR = function (a, d, e, f, h, k) {
            return this.concat((new b).Fxa(a, d, e, f, h, k))
        };
        b.prototype.e9 = function (a, b, e, f) {
            var h, k;
            if (e === f || 0 === b) throw "null frustum";
            if (0 >= e) throw "near <= 0";
            if (0 >= f) throw "far <= 0";
            a /= 2;
            k = Math.sin(a);
            if (0 === k) throw "null frustum";
            h = 1 / (f - e);
            k = Math.cos(a) /
                k;
            a = this.elements;
            a[0] = k / b;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = k;
            a[6] = 0;
            a[7] = 0;
            a[8] = 0;
            a[9] = 0;
            a[10] = -(f + e) * h;
            a[11] = -1;
            a[12] = 0;
            a[13] = 0;
            a[14] = -2 * e * f * h;
            a[15] = 0;
            return this
        };
        b.prototype.perspective = function (a, d, e, f) {
            return this.concat((new b).e9(a, d, e, f))
        };
        b.prototype.gw = function (a, b, e) {
            var f = this.elements;
            f[0] = a;
            f[4] = 0;
            f[8] = 0;
            f[12] = 0;
            f[1] = 0;
            f[5] = b;
            f[9] = 0;
            f[13] = 0;
            f[2] = 0;
            f[6] = 0;
            f[10] = e;
            f[14] = 0;
            f[3] = 0;
            f[7] = 0;
            f[11] = 0;
            f[15] = 1;
            return this
        };
        b.prototype.scale = function (a, b, e) {
            var f = this.elements;
            f[0] *= a;
            f[4] *= b;
            f[8] *= e;
            f[1] *= a;
            f[5] *= b;
            f[9] *= e;
            f[2] *= a;
            f[6] *= b;
            f[10] *= e;
            f[3] *= a;
            f[7] *= b;
            f[11] *= e;
            return this
        };
        b.prototype.h9 = function (a, b, e) {
            var f = this.elements;
            f[12] = a;
            f[13] = b;
            f[14] = e;
            return this
        };
        b.prototype.translate = function (a, b, e) {
            var f = this.elements;
            f[12] += f[0] * a + f[4] * b + f[8] * e;
            f[13] += f[1] * a + f[5] * b + f[9] * e;
            f[14] += f[2] * a + f[6] * b + f[10] * e;
            f[15] += f[3] * a + f[7] * b + f[11] * e;
            return this
        };
        b.prototype.Tz = function (a, b, e, f) {
            var h, k, l, m, n, p, q, r;
            a = Math.PI * a / 180;
            h = this.elements;
            k = Math.sin(a);
            a = Math.cos(a);
            0 !== b && 0 === e && 0 === f ?
                (0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === f ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), 1 !== l && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k,
                    r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0);
            h[15] = 1;
            return this
        };
        b.prototype.rotate = function (a, d, e, f) {
            return this.concat((new b).Tz(a, d, e, f))
        };
        b.prototype.ft = function (a) {
            return this.rotate(a, 1, 0, 0)
        };
        b.prototype.gt = function (a) {
            return this.rotate(a, 0, 1, 0)
        };
        b.prototype.ht = function (a) {
            return this.rotate(a, 0, 0, 1)
        };
        b.prototype.$u = function (a) {
            for (var b = 0, e = this.elements.length; b < e; b++) if (this.elements[b] !==
                a.elements[b]) return !1;
            return !0
        };
        b.prototype.eb = function () {
            return new b(this.elements.slice(0))
        };
        a.Dc = b
    })(g);
    z.B.Gt = z.B.Ec.extend({
        w: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            radius: [1E3, 1E3],
            fillColor: "#006600",
            fillOpacity: 0.9
        }, A: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.CLASS_NAME = "AMap.Ellipse";
            g.c.ya(this, b);
            var b = g.extend({}, this.w, b), c = this.Wr(b);
            b.path = c;
            z.B.Gt.cd.A.call(this, b);
            this.set("path", c);
            this.get("center") && this.get("map") || (this.ah = !1);
            this.on("movepoly", function (b) {
                var c =
                    a.get("map");
                b = c.Qd(c.Cb(a.get("center")).add(b.tK));
                "3D" === c.view.type && a.set("deltaPos", [0, 0], !0);
                a.set("center", b)
            })
        }, Wr: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = [],
                c = a.center || this.get("center"), d = a.map || this.get("map");
            if (c && d) for (var c = g.a.Ka(c), e = a.radius || this.get("radius"), f = d.Cb(c), a = f.x, f = f.y, h = g.a.map(e, function (a) {
                return a / d.getResolution(c, 20)
            }), e = h[0], h = h[1], k = g.l.ba, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
                var n = m * l, n = {
                    x: a + e * Math.cos(n), y: f +
                        h * Math.sin(n)
                };
                b.push(d.Qd(n))
            }
            return b
        }, mapChanged: function () {
            g.a.Qh(z.B.Gt.cd.mapChanged) && z.B.Gt.cd.mapChanged.apply(this);
            this.C = !0;
            this.setPath(this.Wr());
            this.C = !1;
            !this.ah && this.get("map") && (this.ah = !0, this.get("map").r("overlays"))
        }, setCenter: function (a, b) {
            g.c.add(this, "setCenter");
            (a = g.a.Ka(a)) && a instanceof g.U && (this.B && this.B.get("deltaPos") && this.B.set("deltaPos", [0, 0], !0), this.set("center", a), this.set("path", this.Wr()), this.ah || (this.ah = !0, this.get("map") && this.get("map").r("overlays")),
            b || (this.r("setCenter"), this.r("change", {type: "change", target: this})))
        }, setRadius: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            g.c.add(this, "setRadius");
            a && 2 === a.length && (this.set("radius", a), this.set("path", this.Wr()), b || (this.r("change", {
                type: "change",
                target: this
            }), this.r("setPath")))
        }, setOptions: function (a) {
            z.B.Gt.cd.setOptions.call(this, a);
            this.C = !0;
            a.radius && this.setRadius(a.radius, !0);
            a.center && this.setCenter(a.center, !0);
            this.C = !1
        }, getRadius: function () {
            g.c.add(this,
                "getRadius");
            return this.get("radius", null, !0)
        }, getCenter: function () {
            g.c.add(this, "getCenter");
            var a = this.get("center", null, !0);
            this.B && this.B.get("deltaPos") && this.B.Ut([a], this.B.get("deltaPos"))[0];
            return a
        }
    });
    z.B.Nt = z.B.Ec.extend({
        w: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            fillColor: "#006600",
            fillOpacity: 0.9
        }, A: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.CLASS_NAME = "AMap.Rectangle";
            g.c.ya(this, b);
            b = g.extend({}, this.w, b);
            this.C = !0;
            var c = this.Wr(b);
            b.path = c;
            z.B.Nt.cd.A.call(this, b);
            this.setPath(c);
            this.w.bounds && this.get("map") || (this.ah = !1);
            this.on("movepoly", function (b) {
                var c = a.get("map"),
                    f = a.get("bounds"), h = c.Qd(c.Cb(f.wc).add(b.tK));
                b = c.Qd(c.Cb(f.oc).add(b.tK));
                "3D" === c.view.type && a.set("deltaPos", [0, 0]);
                a.set("bounds", new g.pe(h, b))
            });
            this.C = !1
        }, Wr: function () {
            var a = [],
                b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
            if (b) {
                b.C = !0;
                var c = b.getSouthWest(), d = b.getNorthEast();
                b.C = !1;
                g.a.Ub([new g.U(c.R, c.Q, !0), new g.U(d.R, c.Q, !0), new g.U(d.R, d.Q, !0), new g.U(c.R, d.Q, !0)], function (b) {
                    return a.push(b)
                })
            }
            return a
        }, mapChanged: function () {
            g.a.Qh(z.B.Nt.cd.mapChanged) &&
            z.B.Nt.cd.mapChanged.apply(this);
            this.C = !0;
            this.setPath(this.Wr());
            this.C = !1;
            !this.ah && this.get("map") && (this.ah = !0, this.get("map").r("overlays"))
        }, setOptions: function (a) {
            this.C = !0;
            z.B.Nt.cd.setOptions.call(this, a);
            a.bounds && this.setBounds(a.bounds, !0);
            this.C = !1
        }, setBounds: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            g.c.add(this, "setBounds");
            a && a instanceof g.pe && (this.set("bounds", a), this.set("path", this.Wr()), this.ah || (this.ah = !0, this.get("map") && this.get("map").r("overlays")),
            b || (this.r("change", {type: "change", target: this}), this.r("setBounds")))
        }, getBounds: function () {
            g.c.add(this, "getBounds");
            return this.get("bounds", null, !0)
        }
    });
    z.B.OW = z.B.wb.extend({
        w: {text: "", textAlign: "center", verticalAlign: "middle", offset: new g.H(0, 0)},
        A: function (a) {
            this.CLASS_NAME = "AMap.Text";
            g.c.ya(this, a);
            z.B.OW.cd.A.apply(this, arguments);
            this.rga();
            this.C = !0;
            this.setText(this.get("text"));
            this.setStyle(this.get("style"));
            this.C = !1
        },
        rga: function () {
            if (!this.lC) {
                var a = document.createElement("div");
                a.className = "amap-overlay-text-container";
                this.lC = a
            }
        },
        getText: function () {
            g.c.add(this, "getText");
            return this.get("text", null, !0)
        },
        setText: function (a) {
            g.c.add(this,
                "setText");
            a || 0 === a || (a = "");
            g.f.Kya(this.lC, "amap-overlay-text-empty", !a);
            g.c.add(this, "setText");
            this.set("text", a);
            this.lC.innerHTML = a;
            this.m8()
        },
        setStyle: function (a) {
            g.c.add(this, "setStyle");
            a = a || {};
            for (var b in a) a.hasOwnProperty(b) && (this.lC.style[b] = a[b]);
            this.m8()
        },
        m8: function () {
            this.C = !0;
            this.setContent(this.lC);
            this.setShadow(this.getShadow());
            this.C = !1
        }
    });
    g.lW = {
        find: function (a) {
            return g.a.find(this.ix || [], a)
        }, ZI: function () {
            return this.ix || []
        }, Nd: function (a) {
            return null !== this.find(a)
        }, add: function (a) {
            var b = this,
                c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Ts,
                d = this.ix || (this.ix = []);
            g.a.isArray(a) ? g.a.Ub(a, function (a) {
                b.add(a, c)
            }) : null === this.find(a) && (d.push(a), c(a));
            return this
        }, remove: function (a) {
            var b = this,
                c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Ts,
                d = this.ix;
            if (d) if (g.a.isArray(a)) g.a.Ub(a, function (a) {
                b.remove(a,
                    c)
            }); else {
                var e = g.a.indexOf(d, a);
                -1 !== e && (c(d[e]), d.splice(e, 1))
            }
            return this
        }, clear: function () {
            this.Ub(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Ts);
            this.ix = [];
            return this
        }, Ub: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Ts,
                b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            g.a.Ub(this.ix || [], function () {
                for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                c = d[0];
                g.a.Qh(c.Ub) ? c.Ub(a, b) : a.apply(b || c, d)
            });
            return this
        }, Uo: function (a) {
            for (var b =
                arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.Ub(function (b) {
                b && g.a.Qh(b[a]) && b[a].apply(b, c)
            });
            return this
        }, h: function (a) {
            var b = arguments;
            this.Ub(function (a) {
                a.on.apply(a, b)
            });
            return this
        }, G: function (a) {
            var b = arguments;
            this.Ub(function (a) {
                a.off.apply(a, b)
            });
            return this
        }, addListener: function () {
            this.h.apply(this, arguments)
        }, fy: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Ts,
                c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            this.Ub(function (d) {
                d.on.call(d,
                    event, function () {
                        b();
                        d.off(a)
                    }, c)
            })
        }, removeListener: function (a) {
            this.G(a.YQ, a.fS, a.cf)
        }, O: function (a, b) {
            this.Ub(function (c) {
                c.emit(a, b)
            })
        }
    };
    z.B.Xn = z.B.Fh.extend({
        ka: [g.lW], A: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            this.CLASS_NAME = "AMap.OverlayGroup";
            g.c.ya(this);
            z.B.Xn.cd.A.apply(this);
            this.map = null;
            this.add(a)
        }, vc: function (a) {
            g.c.add(this, "setMap");
            this.Uo("setMap", a);
            this.Uo("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        }, mapChanged: function () {
        }, uC: function (a) {
            var b = this;
            g.c.add(this, "addOverlay");
            this.add(a, function (a) {
                b.map && (a.C = !0, a.setMap(b.map), a.C = !1)
            });
            return this
        }, Lz: function (a) {
            var b =
                this;
            g.c.add(this, "removeOverlay");
            this.remove(a, function (a) {
                a.C = !0;
                a.getMap() === b.map && a.setMap(null);
                a.C = !1
            });
            return this
        }, md: function () {
            var a = this;
            g.c.add(this, "clearOverlays");
            this.clear(function (b) {
                b.C = !0;
                b.getMap() === a.map && b.setMap(null);
                b.C = !1
            });
            return this
        }, bz: function () {
            g.c.add(this, "hide");
            this.Uo("hide");
            return this
        }, show: function () {
            g.c.add(this, "show");
            this.Uo("show");
            return this
        }, vb: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            g.c.add(this, "setOptions");
            this.Uo("setOptions", a);
            return this
        }
    });
    z.B.Xn.Yb({
        find: "getOverlay",
        ZI: "getOverlays",
        uC: ["addOverlay", "addOverlays"],
        Nd: "hasOverlay",
        Lz: ["removeOverlay", "removeOverlays"],
        md: "clearOverlays",
        Ub: "eachOverlay",
        vc: "setMap",
        vb: "setOptions",
        show: "show",
        bz: "hide",
        h: "on",
        G: "off"
    });
    (function (a, b) {
        function c(a, b) {
            if (!a.length) return !1;
            for (var c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1
            }
            return !0
        }

        function d(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates);
            return b
        }

        function e(a) {
            if (!a || !a.length) return [];
            a = b.a.Ka(a);
            for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].xl();
            a[a.length - 1].hb(a[0]) || c.push(a[0].xl());
            return c
        }

        function f(a) {
            if (!a) return [];
            a = b.a.Ka(a);
            b.a.isArray(a[0]) ||
            (a = [a]);
            for (var c = [], d = 0, f = a.length; d < f; d++) c[d] = e(a[d]);
            return c
        }

        a.B.jW = a.B.Xn.extend({
            A: function (c) {
                this.CLASS_NAME = "AMap.GeoJSON";
                b.c.ya(this, c);
                a.B.jW.cd.A.call(this, []);
                this.C = !0;
                this.w = b.extend({
                    getMarker: function (b, c) {
                        return new a.B.wb({innerOverlay: !0, position: c})
                    }, getPolyline: function (b, c) {
                        return new a.B.$b({path: c, innerOverlay: !0})
                    }, getPolygon: function (b, c) {
                        return new a.B.Ec({path: c, innerOverlay: !0})
                    }, coordsToLatLng: function (a) {
                        return a
                    }
                }, c);
                if (!this.w.coordsToLatLngs) {
                    var d = this.w.coordsToLatLng;
                    this.w.coordsToLatLngs = function (a) {
                        for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[c]));
                        return b
                    }
                }
                this.importData(this.w.geoJSON);
                this.C = !1
            }, importData: function (a) {
                b.c.add(this, "importData");
                if (a && (a = this.mga(a), a.length)) {
                    this.clearOverlays();
                    this.uC(a);
                    var c = this.w.map;
                    if (c) for (var d = 0, e = a.length; d < e; d++) a[d].C = !0, a[d].setMap(c), a[d].C = !1
                }
            }, toGeoJSON: function () {
                b.c.add(this, "toGeoJSON");
                for (var a = this.ZI(), c = [], d = 0, e = a.length; d < e; d++) a[d].C = !0, c[d] = a[d].toGeoJSON(), a[d].C = !1;
                return c
            },
            mga: function (a) {
                if (a) {
                    b.a.isArray(a) || (a = [a]);
                    for (var c = [], d = 0, e = a.length; d < e; d++) {
                        var f = this.nga(a[d]);
                        f && c.push(f)
                    }
                    return c
                }
            }, HX: function (a) {
                var b = "Feature" === a.type ? a.geometry : a,
                    b = this.w.coordsToLatLng(b ? b.coordinates : null), b = this.w.getMarker(a, b);
                this.Nr(a, b);
                return b
            }, dda: function (c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) e.push(this.HX(b.extend({}, c, {
                    type: "Feature",
                    properties: {_isAmap: !0, _pointIndex: f, _parentProperities: c.properties},
                    geometry: {
                        type: "Point",
                        coordinates: d[f]
                    }
                })));
                d = new a.B.Xn(e);
                this.Nr(c, d);
                return d
            }, GX: function (a) {
                var b = "Feature" === a.type ? a.geometry : a,
                    b = this.w.coordsToLatLngs(b ? b.coordinates : null),
                    b = this.w.getPolyline(a, b);
                this.Nr(a, b);
                return b
            }, cda: function (c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) e.push(this.GX(b.extend({}, c, {
                    type: "Feature",
                    properties: {
                        _isAmap: !0,
                        _lineStringIndex: f,
                        _parentProperities: c.properties
                    },
                    geometry: {type: "LineString", coordinates: d[f]}
                })));
                d = new a.B.Xn(e);
                this.Nr(c, d);
                return d
            }, IX: function (a) {
                for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++) c.push(this.w.coordsToLatLngs(b[d]));
                b = this.w.getPolygon(a, c);
                this.Nr(a, b);
                return b
            }, eda: function (c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) e.push(this.IX(b.extend({}, c, {
                    type: "Feature",
                    properties: {_isAmap: !0, _polygonIndex: f, _parentProperities: c.properties},
                    geometry: {type: "Polygon", coordinates: d[f]}
                })));
                d = new a.B.Xn(e);
                this.Nr(c, d);
                return d
            }, Xca: function (c) {
                for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], f = 0, n = d.length; f < n; f++) e.push(this.PN(b.extend({}, c, {
                    type: "Feature",
                    properties: {_isAmap: !0, _geometryIndex: f, _parentProperities: c.properties},
                    geometry: d[f]
                })));
                d = new a.B.Xn(e);
                this.Nr(c, d);
                return d
            }, nga: function (b) {
                if (b) switch (b.type) {
                    case "Feature":
                        return this.PN(b);
                    case "FeatureCollection":
                        for (var c = b.features, d = [], e = 0, f = c.length; e < f; e++) {
                            var p = this.PN(c[e]);
                            p && d.push(p)
                        }
                        c = new a.B.Xn(d);
                        this.Nr(b, c);
                        return c;
                    default:
                        throw Error("Invalid GeoJSON object." + b.type);
                }
            }, Nr: function (a, c) {
                c && a.properties && c.setExtData && (c.C = !0, c.setExtData(b.extend({}, c.getExtData() || {}, {_geoJsonProperties: a.properties})), c.C = !1)
            }, PN: function (a) {
                var b = "Feature" === a.type ? a.geometry : a;
                if (!(b && b.coordinates || b)) return null;
                switch (b.type) {
                    case "Point":
                        return this.HX(a);
                    case "MultiPoint":
                        return this.dda(a);
                    case "LineString":
                        return this.GX(a);
                    case "MultiLineString":
                        return this.cda(a);
                    case "Polygon":
                        return this.IX(a);
                    case "MultiPolygon":
                        return this.eda(a);
                    case "GeometryCollection":
                        return this.Xca(a);
                    default:
                        throw Error("Invalid GeoJSON geometry." + b.type);
                }
            }
        });
        a.B.Xn.Ib({
            toGeoJSON: function (a) {
                b.c.add(this, "toGeoJSON");
                a = a || this.ZI();
                for (var e = [], f = 0, m = a.length; f < m; f++) a[f].toGeoJSON && (a[f].C = !0, e[f] = a[f].toGeoJSON(), a[f].C = !1);
                this.C = !0;
                a = this.getExtData() || {};
                this.C = !1;
                if (c(e, "Point")) e = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "MultiPoint", coordinates: d(e)}
                }; else if (c(e, "LineString")) e = {
                    type: "Feature", properties: a._geoJsonProperties ||
                        {}, geometry: {type: "MultiLineString", coordinates: d(e)}
                }; else if (c(e, "Polygon")) e = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "MultiPolygon", coordinates: d(e)}
                }; else if (c(e, "*")) {
                    a = a._geoJsonProperties || {};
                    for (var f = [], m = 0, n = e.length; m < n; m++) f.push(e[m].geometry);
                    e = {
                        type: "Feature",
                        properties: a,
                        geometry: {type: "GeometryCollection", geometries: f}
                    }
                } else e = {
                    type: "FeatureCollection",
                    properties: a._geoJsonProperties || {},
                    features: e
                };
                return e
            }
        });
        a.B.wb.Ib({
            toGeoJSON: function () {
                b.c.add(this,
                    "toGeoJSON");
                this.C = !0;
                var a = this.getExtData() || {}, c = this.getPosition().xl();
                this.C = !1;
                return {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "Point", coordinates: c}
                }
            }
        });
        a.B.$b.Ib({
            toGeoJSON: function () {
                b.c.add(this, "toGeoJSON");
                this.C = !0;
                var a = this.getExtData() || {}, c = this.getPath();
                this.C = !1;
                return {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "LineString", coordinates: e(c)}
                }
            }
        });
        a.B.Ec.Ib({
            toGeoJSON: function () {
                b.c.add(this, "toGeoJSON");
                this.C = !0;
                var a = this.getExtData() ||
                    {}, c = this.getPath();
                this.C = !1;
                if (b.a.isArray(c[0]) && b.a.isArray(c[0][0])) {
                    for (var d = [], e = 0; e < c.length; e += 1) d.push(f(c[e]));
                    return {
                        type: "Feature",
                        properties: a._geoJsonProperties || {},
                        geometry: {type: "MultiPolygon", coordinates: d}
                    }
                }
                return {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {type: "Polygon", coordinates: f(c)}
                }
            }
        })
    })(z, g);
    z.q.UL = z.q.Zb.extend({
        ka: [g.lW], A: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            this.CLASS_NAME = "AMap.LayerGroup";
            g.c.ya(this, b);
            z.q.UL.cd.A.call(this, b);
            this.map = null;
            this.add(a)
        }, vc: function (a) {
            g.c.add(this, "setMap");
            this.Uo("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        }, mapChanged: function () {
        }, RH: function (a) {
            var b = this;
            g.c.add(this, "addLayer");
            this.add(a, function (a) {
                b.map && (a.C = !0, a.setMap(b.map), a.C = !1)
            });
            return this
        }, uk: function (a) {
            var b = this;
            g.c.add(this,
                "removeLayer");
            this.remove(a, function (a) {
                a.C = !0;
                a.getMap() === b.map && a.setMap(null);
                a.C = !1
            });
            return this
        }, Gna: function () {
            var a = this;
            g.c.add(this, "clearLayers");
            this.clear(function (b) {
                b.C = !0;
                b.getMap() === a.map && b.setMap(null);
                b.C = !1
            });
            return this
        }, bz: function () {
            g.c.add(this, "hide");
            this.Uo("hide");
            return this
        }, show: function () {
            g.c.add(this, "show");
            this.Uo("show");
            return this
        }, reload: function () {
            this.Uo("reload");
            return this
        }, vb: function () {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] :
                {};
            g.c.add(this, "setOptions");
            var c = g.a.keys(b);
            g.a.Ub(c, function (c) {
                a.Uo("set", c, b[c])
            });
            return this
        }
    });
    z.q.UL.Yb({
        find: "getLayer",
        ZI: "getLayers",
        RH: ["addLayer", "addLayers"],
        Nd: "hasLayer",
        uk: ["removeLayer", "removeLayers"],
        Gna: "clearLayers",
        Ub: "eachLayer",
        vc: "setMap",
        vb: "setOptions",
        show: "show",
        bz: "hide",
        reload: "reload",
        h: "on",
        G: "off"
    });
    g.dba = z.Sb.extend({
        A: function (a, b) {
            b && (b.center = b.position, b.zoom = 11);
            arguments.callee.ma.apply(this, arguments);
            window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
        }
    });
    g.eba = z.B.wb.extend({
        A: function (a) {
            arguments.callee.ma.apply(this, arguments)
        }
    });
    g.yd = {
        os: function (a, b) {
            for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1) c = Math.min(c, g.yd.cya(a, [b[d], b[e]]));
            return Math.sqrt(c)
        }, cya: function (a, b) {
            return this.dL(a, this.K2(a, b))
        }, dL: function (a, b) {
            var c = a[0] - b[0], d = a[1] - b[1];
            return c * c + d * d
        }, NGa: function (a, b, c, d) {
            d = d || 1E-6;
            if (c[0] === b[0]) {
                var e = Math.min(b[1], c[1]);
                b = Math.max(b[1], c[1]);
                return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
            }
            var e = Math.min(b[0], c[0]), f = Math.max(b[0], c[0]);
            return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
                a[0] >= e && a[0] <= f
        }, K2: function (a, b) {
            var c = a[0], d = a[1], e = b[0], f = b[1], h = e[0], e = e[1], k = f[0], f = f[1],
                l = k - h, m = f - e,
                c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
            0 >= c || (1 <= c ? (h = k, e = f) : (h += c * l, e += c * m));
            return [h, e]
        }, vq: function (a) {
            for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1) h = a[k], f = h[0], h = h[1], c += (f - e) * (h + d), e = f, d = h;
            return 0 < c
        }, Ud: function (a, b, c) {
            var d = a[0];
            a = a[1];
            var e = !1, f, h, k, l, m = b.length, n = 0;
            for (l = m - 1; n < m; l = n, n += 1) {
                var p = !1;
                f = b[n][0];
                h = b[n][1];
                k = b[l][0];
                l = b[l][1];
                if (f === d && h === a || k ===
                    d && l === a) return c ? !0 : !1;
                if (h < a === l >= a) {
                    f = (k - f) * (a - h) / (l - h) + f;
                    if (d === f) return c ? !0 : !1;
                    p = d < f
                }
                p && (e = !e)
            }
            return e
        }, V7: function (a, b) {
            function c(a, b, c, d) {
                var e = [a[0] - b[0], a[1] - b[1]], f = [c[0] - d[0], c[1] - d[1]];
                a = a[0] * b[1] - a[1] * b[0];
                c = c[0] * d[1] - c[1] * d[0];
                d = 1 / (e[0] * f[1] - e[1] * f[0]);
                return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d]
            }

            function d(a, b, c) {
                return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
            }

            var e, f, h, k, l = a;
            e = b[b.length - 2];
            for (var m = 0, n = b.length - 1; m < n; m++) {
                f = b[m];
                var p = l, l = [];
                h = p[p.length - 1];
                for (var q = 0, r =
                    p.length; q < r; q++) k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)), h = k;
                e = f
            }
            if (3 > l.length) return [];
            l.push(l[0]);
            return l
        }
    };
    (function (a) {
        function b(b, c) {
            var d;
            a:{
                switch (b) {
                    case "EPSG3395":
                        d = a.$h.dW;
                        break a;
                    case "EPSG4326":
                        d = a.$h.eW;
                        break a
                }
                d = a.$h.LL
            }
            return {
                project: function (b) {
                    a.a.isArray(b) && (b = new a.U(b[0], b[1]));
                    return d.OD(b, c).xl()
                }, unproject: function (b) {
                    a.a.isArray(b) && (b = new a.H(b[0], b[1]));
                    return d.nE(b, c).xl()
                }, normalizePoint: function (b) {
                    return a.a.Ka(b)
                }, distance: function (b, c) {
                    c = this.normalizePoint(c);
                    if (a.a.isArray(c)) return this.distanceToLine(b, c);
                    b = this.normalizePoint(b);
                    var d = a.Nm.Ru, e = Math.cos, f = b.Q * d, h =
                            c.Q * d, k = 2 * a.Nm.SQ, d = c.R * d - b.R * d,
                        e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2;
                    return k * Math.asin(Math.sqrt(e))
                }, ringArea: function (b) {
                    b = this.normalizeLine(b);
                    var c = a.Nm.SQ * a.Nm.Ru, d = 0, e = b.length;
                    if (3 > e) return 0;
                    for (var f = 0; f < e - 1; f += 1) var h = b[f], k = b[f + 1], u = h.R * c * Math.cos(h.Q * a.Nm.Ru), h = h.Q * c, v = k.R * c * Math.cos(k.Q * a.Nm.Ru), d = d + (u * k.Q * c - v * h);
                    f = b[f];
                    b = b[0];
                    e = f.R * c * Math.cos(f.Q * a.Nm.Ru);
                    f = f.Q * c;
                    k = b.R * c * Math.cos(b.Q * a.Nm.Ru);
                    d += e * b.Q * c - k * f;
                    return 0.5 * Math.abs(d)
                }, sphericalCalotteArea: function (b) {
                    var c = a.Nm.SQ;
                    b = c - c *
                        Math.cos(b / c);
                    return 2 * Math.PI * c * b
                }
            }
        }

        function c() {
            return {
                normalizePoint: function (a) {
                    return a && a.x && a.y ? [a.x, a.y] : a
                }, distance: function (a, b) {
                    var c = a[0] - b[0], d = a[1] - b[1];
                    return Math.sqrt(c * c + d * d)
                }, project: function (a) {
                    return a
                }, unproject: function (a) {
                    return a
                }, ringArea: function (a) {
                    for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
                        var q = a[p - 1], r = a[p];
                        b[0] = e[0] - r[0];
                        b[1] = e[1] - r[1];
                        c[0] = e[0] - q[0];
                        c[1] = e[1] - q[1];
                        d += b[0] * c[1] - b[1] * c[0]
                    }
                    return d / 2
                }
            }
        }

        function d(a) {
            for (var b = 0, c = a.length, d = 0; d < c - 1; d++) var e =
                a[d], n = a[d + 1], b = b + (n[0] - e[0]) * (n[1] + e[1]);
            if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]);
            return 0 >= b
        }

        function e(b) {
            this.CLASS_NAME = "AMap.GeometryUtil";
            this.Wb = a.extend({onSegmentTolerance: 5, crs: "EPSG3857", maxZoom: 20}, b);
            this.setCrs(this.Wb.crs)
        }

        a.extend(e.prototype, {
            clone: function (b) {
                return new e(a.extend({}, this.Wb, b))
            }, isPoint: function (b) {
                return b && (b instanceof a.U || a.a.isArray(b) && !isNaN(b[0]))
            }, normalizePoint: function (a) {
                return a
            }, normalizeLine: function (a) {
                for (var b =
                    [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
                return b
            }, normalizeMultiLines: function (b) {
                a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
                for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d]));
                return c
            }, setCrs: function (d) {
                a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Wb.maxZoom))
            }, distance: function () {
                throw Error("distance Not implemented!");
            }, Ix: function (a, b) {
                a = this.normalizeLine(a);
                this.isPoint(a[0]) || (a = a[0]);
                for (var c = [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d]));
                !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse());
                return c
            }, jka: function (a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c]));
                return b
            }, closestOnSegment: function (b, c, d) {
                b = a.yd.K2(this.project(b), this.Ix([c, d]));
                return this.unproject(b)
            }, closestOnLine: function (a, b) {
                b = this.normalizeLine(b);
                for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
                    var p = this.closestOnSegment(a, b[e], b[e + 1]), q = this.distance(a, p);
                    q < c && (c = q, d = p)
                }
                return d
            }, distanceToSegment: function (a,
                                            b, c) {
                return this.distanceToLine(a, [b, c])
            }, distanceToLine: function (a, b) {
                b = this.normalizeLine(b);
                this.isPoint(b[0]) || (b = b[0]);
                for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]), c = Math.min(c, this.distance(a, n));
                return c
            }, distanceToPolygon: function (a, b) {
                return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b)
            }, isPointOnSegment: function (a, b, c, d) {
                if (!d && 0 !== d || 0 > d) d = this.Wb.onSegmentTolerance;
                return this.distanceToSegment(a, b, c) <= d
            }, isPointOnLine: function (a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e - 1; d++) if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0;
                return !1
            }, isPointOnRing: function (a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0;
                return !1
            }, isPointOnPolygon: function (a, b, c) {
                b = this.normalizeMultiLines(b);
                for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnRing(a, b[d], c)) return !0;
                return !1
            }, makesureClockwise: function (a) {
                d(a) || (a = [].concat(a), a.reverse());
                return a
            }, makesureAntiClockwise: function (a) {
                d(a) &&
                (a = [].concat(a), a.reverse());
                return a
            }, isPointInRing: function (b, c, d) {
                d || (c = this.normalizeLine(c));
                c = this.Ix(c, !0);
                return a.yd.Ud(this.project(b), c, !1)
            }, isRingInRing: function (a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) if (!this.isPointInRing(a[d], b, c)) return !1;
                d = 0;
                for (e = b.length; d < e; d++) if (this.isPointInRing(b[d], a, c)) return !1;
                return !0
            }, isPointInPolygon: function (a, b) {
                b = this.normalizeMultiLines(b);
                for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d && (c = !c), c); d += 1) ;
                return c
            }, doesSegmentsIntersect: function (a,
                                                b, c, d, e) {
                e = e ? [a, b, c, d] : this.Ix([a, b, c, d]);
                a = e[0];
                b = e[1];
                c = e[2];
                d = e[3];
                e = !1;
                var n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]),
                    p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]);
                a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]);
                0 !== a && (b = n / a, a = p / a, 0 <= b && 1 >= b && 0 <= a && 1 >= a && (e = !0));
                return e
            }, doesSegmentLineIntersect: function (a, b, c) {
                c = this.normalizeLine(c);
                for (var d = 0, e = c.length; d < e - 1; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0;
                return !1
            }, doesSegmentRingIntersect: function (a, b, c, d) {
                d ||
                (c = this.normalizeLine(c));
                for (var e = 0, n = c.length; e < n; e++) if (this.doesSegmentsIntersect(a, b, c[e], c[e === n - 1 ? 0 : e + 1], d)) return !0;
                return !1
            }, doesSegmentPolygonIntersect: function (a, b, c) {
                c = this.normalizeMultiLines(c);
                for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentRingIntersect(a, b, c[d])) return !0;
                return !1
            }, doesLineLineIntersect: function (a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0;
                return !1
            }, doesLineRingIntersect: function (a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0;
                return !1
            }, doesPolygonPolygonIntersect: function (a, b) {
                return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1
            }, doesPolygonContainsPolygon: function (a, b, c) {
                return this.isRingInRing(b, a, !0) || (c ? this.doesRingRingIntersect(b, a, !0) : !1)
            }, doesRingRingIntersect: function (a, b, c) {
                c || (a = this.normalizeLine(a));
                for (var d = 0, e = a.length; d < e; d++) if (this.doesSegmentRingIntersect(a[d], a[d === e - 1 ?
                    0 : d + 1], b, c)) return !0;
                return !1
            }, HP: function (a, b) {
                for (var c = 0, d = 0; d < a.length - 1; d += 1) {
                    var e = this.distance(a[d], a[d + 1]);
                    if (e + c < b) c += e; else return c = (b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d + 1][1] - a[d][1]), d]
                }
                return null
            }, YX: function (a, b) {
                function c() {
                    var a = [e[0] - n[0], e[1] - n[1]], b = [p[0] - q[0], p[1] - q[1]],
                        d = e[0] * n[1] - e[1] * n[0], f = p[0] * q[1] - p[1] * q[0],
                        h = 1 / (a[0] * b[1] - a[1] * b[0]);
                    return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h]
                }

                function d(a) {
                    return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
                }

                a = this.makesureAntiClockwise(a);
                b = this.makesureClockwise(b);
                var e, n, p, q, r = a;
                e = b[b.length - 1];
                for (var s = 0, u = b.length; s < u; s++) {
                    n = b[s];
                    var v = r, r = [];
                    p = v[v.length - 1];
                    for (var w = 0, t = v.length; w < t; w++) q = v[w], d(q) ? (d(p) || r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q;
                    e = n
                }
                return r
            }, ringRingClip: function (a, b) {
                a = this.Ix(a);
                b = this.Ix(b);
                var c = this.YX(a, b);
                0 == c.length && (c = this.YX(b, a));
                return this.jka(c)
            }, ringArea: function () {
                throw Error("distance Not implemented!");
            }, distanceOfLine: function (a) {
                a = this.normalizeLine(a);
                for (var b = 0, c = 0, d = a.length; c <
                d - 1; c++) b += this.distance(a[c], a[c + 1]);
                return b
            }, isClockwise: function (a) {
                a = this.Ix(a);
                return d(a)
            }
        });
        a.Ht = new e;
        a.ei = new e;
        a.ei.setCrs("plane")
    })(g);
    g.NL = function () {
        var a = {};
        (function () {
            function b(a) {
                for (var b = 0, e = a.length, f = 0; f < e - 1; f++) var h = a[f], k = a[f + 1], b = b + (k[0] - h[0]) * (k[1] + h[1]);
                if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1]) h = a[e - 1], k = a[0], b += (k[0] - h[0]) * (k[1] + h[1]);
                return 0 >= b
            }

            a.Uta = function (a) {
                b(a) && (a = [].concat(a), a.reverse());
                return a
            };
            a.H5 = b
        })();
        (function () {
            function b(a) {
                var b = a.length;
                2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
            }

            function c(a, b) {
                for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
            }

            a.Wh = function (a, e) {
                var f =
                        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                    h = arguments[3];
                e = e || [];
                var k = [], l = [];
                b(a);
                c(k, a);
                var m = a.length;
                e.forEach(b);
                for (var n = 0; n < e.length; n++) l.push(m), m += e[n].length, c(k, e[n]);
                l = (this.oL ? this.oL : g.Fc.oL)(k, l);
                if (h) {
                    f = [];
                    for (n = 0; n < l.length; n += 1) h = 2 * l[n], f.push([k[h], k[h + 1]]);
                    return f
                }
                if (f) for (n = 0; n < l.length; n += 1) l[n] += f;
                return l
            }
        })();
        return a
    };
    (function (a) {
        a.tF = function () {
            function a(b, c, d, e, f) {
                for (var h, k = 0, l = c, n = d - e; l < d; l += e) k += (b[n] - b[l]) * (b[l + 1] + b[n + 1]), n = l;
                if (f === 0 < k) for (f = c; f < d; f += e) h = r(f, b[f], b[f + 1], h); else for (f = d - e; f >= c; f -= e) h = r(f, b[f], b[f + 1], h);
                h && m(h, h.next) && (s(h), h = h.next);
                return h
            }

            function c(a, b) {
                if (!a) return a;
                b || (b = a);
                var c = a, d;
                do if (d = !1, c.z9 || !m(c, c.next) && 0 !== l(c.Ia, c, c.next)) c = c.next; else {
                    s(c);
                    c = b = c.Ia;
                    if (c === c.next) break;
                    d = !0
                } while (d || c !== b);
                return b
            }

            function d(a, b, e, f, r, u, C) {
                if (a) {
                    if (!C && u) {
                        var D = a, A = D;
                        do null === A.z &&
                        (A.z = h(A.x, A.y, f, r, u)), A.kp = A.Ia, A = A.pl = A.next; while (A !== D);
                        A.kp.pl = null;
                        A.kp = null;
                        var D = A, B, G, H, I, P, L, M = 1;
                        do {
                            A = D;
                            H = D = null;
                            for (I = 0; A;) {
                                I++;
                                G = A;
                                for (B = P = 0; B < M && (P++, G = G.pl, G); B++) ;
                                for (L = M; 0 < P || 0 < L && G;) 0 !== P && (0 === L || !G || A.z <= G.z) ? (B = A, A = A.pl, P--) : (B = G, G = G.pl, L--), H ? H.pl = B : D = B, B.kp = H, H = B;
                                A = G
                            }
                            H.pl = null;
                            M *= 2
                        } while (1 < I)
                    }
                    for (D = a; a.Ia !== a.next;) {
                        A = a.Ia;
                        G = a.next;
                        if (u) a:if (H = a.Ia, I = a.next, 0 <= l(H, a, I)) H = !1; else {
                            P = h(H.x < a.x ? H.x < I.x ? H.x : I.x : a.x < I.x ? a.x : I.x, H.y < a.y ? H.y < I.y ? H.y : I.y : a.y < I.y ? a.y : I.y, f, r, u);
                            M = h(H.x >
                            a.x ? H.x > I.x ? H.x : I.x : a.x > I.x ? a.x : I.x, H.y > a.y ? H.y > I.y ? H.y : I.y : a.y > I.y ? a.y : I.y, f, r, u);
                            for (B = a.pl; B && B.z <= M;) {
                                if (B !== a.Ia && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && 0 <= l(B.Ia, B, B.next)) {
                                    H = !1;
                                    break a
                                }
                                B = B.pl
                            }
                            for (B = a.kp; B && B.z >= P;) {
                                if (B !== a.Ia && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && 0 <= l(B.Ia, B, B.next)) {
                                    H = !1;
                                    break a
                                }
                                B = B.kp
                            }
                            H = !0
                        } else a:if (H = a.Ia, I = a.next, 0 <= l(H, a, I)) H = !1; else {
                            for (P = a.next.next; P !== a.Ia;) {
                                if (k(H.x, H.y, a.x, a.y, I.x, I.y, P.x, P.y) && 0 <= l(P.Ia, P, P.next)) {
                                    H = !1;
                                    break a
                                }
                                P = P.next
                            }
                            H = !0
                        }
                        if (H) b.push(A.xe /
                            e), b.push(a.xe / e), b.push(G.xe / e), s(a), D = a = G.next; else if (a = G, a === D) {
                            if (C) if (1 === C) {
                                C = b;
                                D = e;
                                A = a;
                                do G = A.Ia, H = A.next.next, !m(G, H) && n(G, A, A.next, H) && p(G, H) && p(H, G) && (C.push(G.xe / D), C.push(A.xe / D), C.push(H.xe / D), s(A), s(A.next), A = a = H), A = A.next; while (A !== a);
                                a = A;
                                d(a, b, e, f, r, u, 2)
                            } else {
                                if (2 === C) a:{
                                    C = a;
                                    do {
                                        for (D = C.next.next; D !== C.Ia;) {
                                            if (A = C.xe !== D.xe) if (A = void 0, A = C.next.xe !== D.xe) if (A = void 0, A = C.Ia.xe !== D.xe) {
                                                A = A = void 0;
                                                b:{
                                                    A = C;
                                                    do {
                                                        if (A.xe !== C.xe && A.next.xe !== C.xe && A.xe !== D.xe && A.next.xe !== D.xe && n(A, A.next, C,
                                                            D)) {
                                                            A = !0;
                                                            break b
                                                        }
                                                        A = A.next
                                                    } while (A !== C);
                                                    A = !1
                                                }
                                                if (A = !A) if (A = void 0, A = p(C, D)) if (A = void 0, A = p(D, C)) {
                                                    A = C;
                                                    G = !1;
                                                    H = (C.x + D.x) / 2;
                                                    I = (C.y + D.y) / 2;
                                                    do A.y > I !== A.next.y > I && A.next.y !== A.y && H < (A.next.x - A.x) * (I - A.y) / (A.next.y - A.y) + A.x && (G = !G), A = A.next; while (A !== C);
                                                    A = G
                                                }
                                            }
                                            if (A) {
                                                a = q(C, D);
                                                C = c(C, C.next);
                                                a = c(a, a.next);
                                                d(C, b, e, f, r, u);
                                                d(a, b, e, f, r, u);
                                                break a
                                            }
                                            D = D.next
                                        }
                                        C = C.next
                                    } while (C !== a)
                                }
                            } else d(c(a), b, e, f, r, u, 1);
                            break
                        }
                    }
                }
            }

            function e(a, b) {
                return a.x - b.x
            }

            function f(a, b) {
                var c = b, d = a.x, e = a.y, f = -Infinity, h;
                do {
                    if (e <= c.y && e >= c.next.y &&
                        c.next.y !== c.y) {
                        var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
                        if (l <= d && l > f) {
                            f = l;
                            if (l === d) {
                                if (e === c.y) return c;
                                if (e === c.next.y) return c.next
                            }
                            h = c.x < c.next.x ? c : c.next
                        }
                    }
                    c = c.next
                } while (c !== b);
                if (!h) return null;
                if (d === f) return h.Ia;
                for (var l = h, m = h.x, n = h.y, r = Infinity, s, c = h.next; c !== l;) d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (s = Math.abs(e - c.y) / (d - c.x), (s < r || s === r && c.x > h.x) && p(c, a) && (h = c, r = s)), c = c.next;
                return h
            }

            function h(a, b, c, d, e) {
                a = 32767 * (a - c) * e;
                b = 32767 * (b - d) * e;
                a = (a | a << 8) & 16711935;
                a = (a | a << 4) & 252645135;
                a = (a | a << 2) & 858993459;
                b = (b | b << 8) & 16711935;
                b = (b | b << 4) & 252645135;
                b = (b | b << 2) & 858993459;
                return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
            }

            function k(a, b, c, d, e, f, h, k) {
                return 0 <= (e - h) * (b - k) - (a - h) * (f - k) && 0 <= (a - h) * (d - k) - (c - h) * (b - k) && 0 <= (c - h) * (f - k) - (e - h) * (d - k)
            }

            function l(a, b, c) {
                return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
            }

            function m(a, b) {
                return a.x === b.x && a.y === b.y
            }

            function n(a, b, c, d) {
                return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !== 0 < l(c, d, b)
            }

            function p(a,
                       b) {
                return 0 > l(a.Ia, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Ia, b) : 0 > l(a, b, a.Ia) || 0 > l(a, a.next, b)
            }

            function q(a, b) {
                var c = new u(a.xe, a.x, a.y), d = new u(b.xe, b.x, b.y), e = a.next, f = b.Ia;
                a.next = b;
                b.Ia = a;
                c.next = e;
                e.Ia = c;
                d.next = c;
                c.Ia = d;
                f.next = d;
                d.Ia = f;
                return d
            }

            function r(a, b, c, d) {
                a = new u(a, b, c);
                d ? (a.next = d.next, a.Ia = d, d.next.Ia = a, d.next = a) : (a.Ia = a, a.next = a);
                return a
            }

            function s(a) {
                a.next.Ia = a.Ia;
                a.Ia.next = a.next;
                a.kp && (a.kp.pl = a.pl);
                a.pl && (a.pl.kp = a.kp)
            }

            function u(a, b, c) {
                this.xe = a;
                this.x = b;
                this.y = c;
                this.pl = this.kp =
                    this.z = this.next = this.Ia = null;
                this.z9 = !1
            }

            return {
                oL: function (h, k, l) {
                    l = l || 2;
                    var m = k && k.length, n = m ? k[0] * l : h.length, p = a(h, 0, n, l, !0),
                        r = [];
                    if (!p) return r;
                    var s, u, B, G;
                    if (m) {
                        var H = l, m = [], I, P, L;
                        G = 0;
                        for (I = k.length; G < I; G++) {
                            P = k[G] * H;
                            L = G < I - 1 ? k[G + 1] * H : h.length;
                            P = a(h, P, L, H, !1);
                            P === P.next && (P.z9 = !0);
                            var M = L = P;
                            do L.x < M.x && (M = L), L = L.next; while (L !== P);
                            m.push(M)
                        }
                        m.sort(e);
                        for (G = 0; G < m.length; G++) {
                            k = m[G];
                            H = p;
                            if (H = f(k, H)) k = q(H, k), c(k, k.next);
                            p = c(p, p.next)
                        }
                    }
                    if (h.length > 80 * l) {
                        s = B = h[0];
                        u = m = h[1];
                        for (H = l; H < n; H += l) G = h[H], k =
                            h[H + 1], G < s && (s = G), k < u && (u = k), G > B && (B = G), k > m && (m = k);
                        B = Math.max(B - s, m - u);
                        B = 0 !== B ? 1 / B : 0
                    }
                    d(p, r, l, s, u, B);
                    return r
                }
            }
        };
        a.kaa = a.tF()
    })(g);
    (function (a) {
        function b(a) {
            var b = a.length;
            2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
        }

        function c(a, b) {
            for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
        }

        a.$n = {
            pi: function (a) {
                for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++) c += a[h][0] * a[k][1] - a[k][0] * a[h][1];
                return 0.5 * c
            }, H5: function (b) {
                return 0 > a.$n.pi(b)
            }, normalize: function (b) {
                var c;
                if (b) {
                    c = [];
                    for (var f = 0, h = b.length; f < h; f += 1) c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a.U ? [b[f].R, b[f].Q] : b[f] instanceof a.H ? [b[f].x, b[f].y] :
                        b[f]
                }
                return c
            }, Wh: function (d, e) {
                e = e || [];
                var f = [], h = [];
                b(d);
                c(f, d);
                var k = d.length;
                e.forEach(b);
                for (var l = 0; l < e.length; l++) h.push(k), k += e[l].length, c(f, e[l]);
                return a.kaa.oL(f, h)
            }
        }
    })(g);
    g.sI = function (a, b, c) {
        g.c.add({CLASS_NAME: "convertFrom"}, b);
        var d = g.o.fd + "/v3/assistant/coordinate/convert";
        a = g.a.Ka(a);
        var e = [];
        if (a instanceof Array) {
            for (var f = 0, h = a.length; f < h; f += 1) e.push(a[f] + "");
            e = e.join(";")
        } else e = a + "";
        b = ["key=" + g.o.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
        g.o.Xa && b.push("jscode=" + g.o.Xa);
        d += 0 < b.length ? "?" + b.join("&") : "";
        d = new g.kb.Ab(d, {callback: "callback"});
        d.h("complete", function (a) {
            if ("1" === a.status) {
                a = a.locations.split(";");
                for (var b = 0; b < a.length; b += 1) {
                    var d =
                        a[b].split(",");
                    a[b] = new AMap.LngLat(d[0], d[1])
                }
                c && "function" === typeof c && c("complete", {info: "ok", locations: a})
            } else c && "function" === typeof c && c("error", a.info)
        }, this);
        d.h("error", function (a) {
            c && "function" === typeof c && c("error", a.info)
        }, this)
    };
    g.kb = g.kb || {};
    g.kb.lM = g.da.extend({
        ka: [g.va], A: function (a, b) {
            this.w = {callback: "cbk", type: "json", charset: "utf-8"};
            b = b || {};
            g.a.vb(this, b);
            this.url = a;
            this.send(a, b.Gd, b.S2, b.tU, b.responseType)
        }, send: function (a) {
            var b = g.f.create("script");
            b.type = "text/javascript";
            b.charset = this.w.charset;
            var c = this;
            g.l.Ve ? b.onreadystatechange = function () {
                "loaded" !== this.readyState && "complete" !== this.readyState || c.r("complete")
            } : (b.onload = function () {
                c.r("complete")
            }, b.onerror = function () {
                c.r("error", {status: 0, info: "service error", url: a})
            });
            b.src = a;
            document.getElementsByTagName("head")[0].appendChild(b)
        }
    });
    g.kb.Ab = g.kb.lM.extend({
        pna: function () {
            if (g.a.U8) return g.a.fL.push(this), !0
        }, dxa: function () {
            this.r("error", {info: "TIME_OUT_A"})
        }, send: function (a, b, c, d) {
            function e() {
                window[f] = null;
                try {
                    window[f] = null
                } catch (a) {
                }
                h.onerror = null;
                h.parentNode && h.parentNode.removeChild(h)
            }

            if (!this.w.jy || !this.pna()) {
                a = encodeURI(a);
                var f = this.w.fun;
                if (!f || window[f]) f = g.a.j4("jsonp_", 6) + "_";
                var h = document.createElement("script");
                h.type = "text/javascript";
                h.charset = "utf-8";
                h.async = !0;
                var k = this;
                g.l.Ve || (h.onerror = function () {
                    e();
                    k.r("error", {info: "REQUEST_FAILED", url: a})
                });
                window[f] = function (a) {
                    e();
                    if (k.w.callbackFunction) k.w.callbackFunction.call(k.w.context, a); else if (3E4 === a.errcode && a.data) g.a.U8 = !0, g.ub.load("AMap.AntiCrabFrame", function () {
                        g.a.jy || (g.a.jy = new g.W$);
                        g.a.fL.push(k);
                        g.a.jy.open(k.w.Gd, a.data.host, k.hE || "", k.url)
                    }); else {
                        if (a instanceof Array || "string" === typeof a) a = {data: a};
                        a.kEa = f;
                        k.r("complete", a)
                    }
                };
                b = "?";
                -1 !== a.indexOf("?") && (b = "&");
                b = a + b + this.w.callback + "=" + f;
                if (-1 !== a.indexOf(g.o.fd + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") ||
                    -1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + ("&appname=" + g.o.Ao), b += "&csid=" + g.a.kr(), b += "&sdkversion=" + g.o.Xl;
                if (c = this.w.II) {
                    var l = [], m;
                    for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m]));
                    k.hE = l.join("&")
                }
                h.src = d ? b + "&rereq=true" : b;
                g.kb.Ab.oea = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0];
                g.kb.Ab.oea.appendChild(h)
            }
        }
    });
    g.kb.XMLHttpRequest = g.kb.lM.extend({
        send: function (a, b, c, d, e) {
            var f = this;
            if ((g.l.Ve || g.l.n5) && window.XDomainRequest) {
                var h = this.P$ = new XDomainRequest;
                h.onerror = function (b) {
                    f.r("error", {url: a, data: b})
                };
                h.onload = function () {
                    f.r("complete", {url: a, data: h.responseText})
                };
                h.open(b || "GET", a);
                setTimeout(function () {
                    h.send(c || void 0)
                }, 0)
            } else {
                var k = this.P$ = new XMLHttpRequest;
                k.onreadystatechange = function () {
                    4 === k.readyState && 200 === k.status ? f.r("complete", {
                        url: a,
                        data: "arraybuffer" === k.responseType || "json" === k.responseType ?
                            k.response : k.responseText
                    }) : 404 === k.status && (k.abort(), f.r("error", {url: a, data: "404"}))
                };
                k.onerror = function (b) {
                    k.abort();
                    f.r("error", {url: a, data: b})
                };
                k.open(b || "GET", a);
                "POST" === b && k.setRequestHeader("Content-Type", d || "application/x-www-form-urlencoded");
                e && (k.responseType = e);
                k.send(c || void 0)
            }
        }, abort: function () {
            this.P$.abort()
        }
    });
    for (var $ = {
        v: "1.4.22",
        Pixel: g.H,
        LngLat: g.U,
        Size: g.zd,
        Bounds: g.pe,
        ArrayBounds: g.vp,
        PixelBounds: g.Xf,
        Panorama: g.dba,
        PanoramaMarker: g.eba,
        Map: z.Sb,
        View2D: z.PF,
        GroundImage: z.q.PL,
        Marker: z.B.wb,
        ImageMarker: z.B.NAa,
        Text: z.B.OW,
        Icon: z.B.di,
        MarkerShape: z.B.Uaa,
        Polyline: z.B.$b,
        BezierCurve: z.B.uA,
        Polygon: z.B.Ec,
        Circle: z.B.hh,
        CircleMarker: z.B.ZV,
        Ellipse: z.B.Gt,
        Rectangle: z.B.Nt,
        ContextMenu: z.B.Un,
        InfoWindow: z.B.Ze,
        Buildings: z.q.aaa,
        TileLayer: z.q.mb,
        ImageLayer: z.q.DA,
        CanvasLayer: z.q.caa,
        VideoLayer: z.q.Lba,
        VectorLayer: z.q.hd,
        MassMarks: z.q.Waa,
        CompositeLayer: z.q.gaa,
        LabelsLayer: z.q.sr,
        LabelMarker: z.B.Naa,
        LayerGroup: z.q.UL,
        OverlayGroup: z.B.Xn,
        GeoJSON: z.B.jW,
        CANVAS: "canvas",
        DOM: "dom",
        convertFrom: g.sI,
        Http: {JSONP: g.kb.Ab},
        event: {CLASS_NAME: "AMap.event"}
    }, Jc = "addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger".split(" "), Kc = 0; Kc < Jc.length; Kc += 1) $.event[Jc[Kc]] = function () {
        var a = g.event[Jc[Kc]], b = Jc[Kc];
        return function () {
            g.c.ya($.event);
            g.c.add($.event,
                b);
            return a.apply(g.event, Array.prototype.slice.call(arguments))
        }
    }();
    $.GeometryUtil = {CLASS_NAME: "AMap.GeometryUtil"};
    for (var Lc = "distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon".split(" "), Kc =
        0; Kc < Lc.length; Kc += 1) $.GeometryUtil[Lc[Kc]] = function () {
        var a = g.Ht[Lc[Kc]], b = Lc[Kc];
        return function () {
            g.c.ya($.GeometryUtil);
            g.c.add($.GeometryUtil, b);
            return a.apply(g.Ht, Array.prototype.slice.call(arguments))
        }
    }();
    $.GeometryUtil.triangulateShape = function (a, b) {
        g.c.ya($.GeometryUtil);
        g.c.add($.GeometryUtil, "triangulateShape");
        a = g.$n.normalize(a);
        b = g.$n.normalize(b);
        return g.$n.Wh(a, b)
    };
    $.PlaneGeometryUtil = {CLASS_NAME: "AMap.PlaneGeometryUtil"};
    for (Kc = 0; Kc < Lc.length; Kc += 1) $.PlaneGeometryUtil[Lc[Kc]] = function () {
        var a = g.ei[Lc[Kc]], b = Lc[Kc];
        return function () {
            g.c.ya($.PlaneGeometryUtil);
            g.c.add($.PlaneGeometryUtil, b);
            return a.apply(g.ei, Array.prototype.slice.call(arguments))
        }
    }();
    $.PlaneGeometryUtil.triangulateShape = function (a, b) {
        g.c.ya($.PlaneGeometryUtil);
        g.c.add($.PlaneGeometryUtil, "triangulateShape");
        a = g.$n.normalize(a);
        b = g.$n.normalize(b);
        return g.$n.Wh(a, b)
    };
    $.plugin = $.service = z.Sb.prototype.plugin;
    $.TileLayer.Satellite = z.q.mb.IW;
    $.TileLayer.RoadNet = z.q.mb.FW;
    $.TileLayer.google = z.q.mb.OL;
    $.TileLayer.Flexible = z.q.mb.AA;
    $.TileLayer.WMS = z.q.mb.Mba;
    $.TileLayer.WMTS = z.q.mb.Nba;
    $.TileLayer.Traffic = z.q.mb.QW;
    $.Panorama.Events = z.event;
    $.TileLayer.PanoramaLayer = z.q.mb.VAa;
    $.UA = {
        ie: g.l.Gs,
        ielt9: g.l.Ve,
        ielt11: g.l.fsa,
        mobile: g.l.ba,
        android: g.l.Zl,
        ios: g.l.GD
    };
    $.Browser = {
        ua: navigator.userAgent,
        mobile: g.l.ba,
        plat: g.l.Fz,
        mac: g.l.pz,
        windows: g.l.gAa,
        ios: g.l.GD,
        iPad: g.l.Zra,
        iPhone: g.l.$ra,
        android: g.l.Zl,
        android23: g.l.ima,
        chrome: g.l.chrome,
        firefox: g.l.eR,
        safari: g.l.CE,
        wechat: g.l.H$,
        uc: g.l.vza,
        qq: g.l.lwa,
        ie: g.l.Gs,
        ie6: g.l.Ai,
        ie7: g.l.wv,
        ie8: g.l.Ve && !g.l.wv && !g.l.Ai,
        ie9: g.l.n5,
        ie10: g.l.m5,
        ie11: g.l.csa,
        edge: g.l.ypa,
        ielt9: g.l.Ve,
        baidu: g.l.XH,
        isLocalStorage: g.l.Kv,
        isGeolocation: !!navigator.geolocation,
        mobileWebkit: g.l.qua,
        mobileWebkit3d: g.l.L6,
        mobileOpera: !!g.l.pua,
        retina: g.l.Kc,
        touch: !!g.l.Uf,
        msPointer: !!g.l.N6,
        pointer: !!g.l.JT,
        webkit: g.l.G$,
        ie3d: g.l.dsa,
        webkit3d: g.l.FL,
        gecko3d: g.l.pqa,
        opera3d: g.l.iva,
        any3d: g.l.TH,
        isCanvas: g.l.kl,
        isSvg: g.l.Fn,
        isVML: g.l.Gs,
        isWorker: !!window.Worker,
        isWebsocket: !!window.WebSocket,
        isWebGL: function () {
            for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
                try {
                    c = a.getContext(b[d])
                } catch (e) {
                }
                if (c) if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break; else return !0
            }
            return !1
        }
    };
    $.Util = {CLASS_NAME: "AMap.Util"};
    var Mc = {
        colorNameToHex: g.a.nI,
        rgbHex2Rgba: g.a.G8,
        argbHex2Rgba: g.a.Tr,
        isEmpty: g.a.vh,
        deleteItemFromArray: g.a.Ey,
        deleteItemFromArrayByIndex: g.a.Ho,
        indexOf: g.a.indexOf,
        format: g.a.xb,
        isArray: g.a.isArray,
        isDOM: g.a.HJ,
        includes: g.a.ka,
        requestIdleCallback: g.a.uU,
        cancelIdleCallback: g.a.cQ,
        requestAnimFrame: g.a.Xc,
        cancelAnimFrame: g.a.si,
        color2RgbaArray: g.a.am,
        color2Rgba: g.a.Una,
        loadBaxia: g.a.wta
    };
    for (Kc in Mc) Mc.hasOwnProperty(Kc) && "function" == typeof Mc[Kc] && ($.Util[Kc] = function () {
        var a = Kc;
        return function () {
            g.c.ya($.Util);
            g.c.add($.Util, a);
            return Mc[a].apply(g.a, Array.prototype.slice.call(arguments))
        }
    }());
    $.DomUtil = {CLASS_NAME: "AMap.DomUtil"};
    var Nc = {
        getViewport: g.f.nJ,
        getViewportOffset: g.f.UR,
        create: g.f.create,
        setClass: g.f.zxa,
        hasClass: g.f.An,
        addClass: g.f.Wa,
        removeClass: g.f.fb,
        setOpacity: g.f.Yq,
        rotate: g.f.rotate,
        setCss: g.f.ab,
        empty: g.f.Kz,
        remove: g.f.remove,
        TRANSFORM: g.f.qg,
        TRANSITION: g.f.LF
    };
    for (Kc in Nc) Nc.hasOwnProperty(Kc) && "function" == typeof Nc[Kc] && ($.DomUtil[Kc] = function () {
        var a = Kc;
        return function () {
            g.c.ya($.DomUtil);
            g.c.add($.DomUtil, a);
            return Nc[a].apply(g.f, Array.prototype.slice.call(arguments))
        }
    }());
    var Oc = g.o;
    $.User = {key: Oc.key};
    window.AMap = $;
    window.AMap.BuryPoint = g.BuryPoint;
    window.AMap.Class = g.da;
    g.Lj = g.da.extend({
        A: function (a, b, c, d) {
            this.start = a;
            this.end = b;
            this.transition = c;
            this.precision = d || 0;
            this.dw = !1;
            this.update = g.a.bind(this.update, this);
            return this
        }, On: function (a) {
            this.ih = this.startTime = +new Date;
            this.frames = 0;
            this.dw = !0;
            this.zo = g.a.Xc(this.update);
            this.Wia = g.a.bind(this.Kq, a || this)
        }, update: function () {
            this.frames += 1;
            var a = +new Date, b = a - this.startTime,
                b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.ih) : null;
            "number" === typeof b && Math.abs(b - this.end) < this.precision ?
                (this.stop(), b = this.end) : this.zo = g.a.Xc(this.update);
            this.ih = a;
            this.Wia(b)
        }, stop: function (a) {
            g.a.si(this.zo);
            a && this.update();
            this.dw = !1
        }
    });
    g.Lj.Easing = {
        Linear: {
            None: function (a) {
                return a
            }
        }, Bounce: {
            In: function (a) {
                return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
            }, Out: function (a) {
                return g.Lj.Easing.Bounce.In(1 - a)
            }
        }, Cubic: {
            In: function (a) {
                return 1 - a * a * a
            }, Out: function (a) {
                a = 1 - a;
                return 1 - a * a * a
            }
        }
    };
    g.Sb = g.da.extend({
        ka: [g.va, g.$e, g.UJ], A: function (a, b) {
            this.pc = g.a.bind(this.pc, this);
            this.D = b;
            this.nj = b.nj;
            this.Dm = "";
            this.sg = this.Kf = this.fj = !1;
            this.Vm = {};
            this.K = a;
            this.aha();
            this.zsa();
            this.X("zooms", b, !0);
            this.X("size", b, !0);
            this.X("limitBounds", b);
            this.X("view", b);
            this.X("nolimg", b, !0);
            this.X("mapNumber", b, !0);
            this.X("lang", b, !0);
            this.X("features", b, !0);
            this.X("styleID", b, !0);
            this.X("forceBig", b, !0);
            this.X("mode", b, !0);
            this.X("showBuildingBlock", b, !0);
            this.X("mapStyle", b);
            var c = this.get("mapStyle");
            this.Ee = g.o.Ee[c] || g.o.Ee["default"];
            this.MH = "#a3ccff";
            this.qu = b.get("skyColor") || "#cce0ff";
            g.o.UQ && this.X("editEnable", b);
            g.o.UQ && this.Dd ? this.X("style", b, !0) : this.X("styleUrl", b);
            this.X("hightlight", b, !0);
            this.X("labelzIndex", b, !0);
            if (g.l.eL) {
                c = new z.q.mb({innerLayer: !0, zIndex: b.get("labelzIndex"), visible: !1});
                this.Hc = new g.q.Qj(c, this, ["point", "road"]);
                this.Hc.type = "\u77e2\u91cf\u6807\u6ce8";
                var d = this.D.get("defaultLayer");
                d && c.X("rejectMapMask", d, !0);
                b.labelsLayer = this.Hc.S;
                this.Hc.S.h("complete",
                    this.Dr, this, !0);
                this.Hc.S.h("renderComplete", this.Dr, this);
                this.Hc.AB = this.Hc.Di = !0
            }
            this.X("isHotspot", b, !0);
            this.X("layers", b);
            this.X("overlays", b);
            this.X("infos", b, !0);
            this.X("contextmenus", b, !0);
            this.X("controls", b);
            this.X("bounds", b);
            this.X("draw", b);
            this.bf("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender vectorMapForeign".split(" "), b);
            this.bf("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "),
                b, !0);
            this.get("jogEnable") ? this.yv = !0 : this.yv = !1;
            this.qga();
            this.xga();
            this.GG && this.GG();
            this.X("resizeEnable", b);
            this.D.map = this;
            c = this.get("size");
            c = c.width * c.height / 65536;
            g.l.Kc && 3 < c && (this.YH = !0);
            this.V = {Cd: !1};
            this.OK()
        }, editEnableChanged: function () {
            this.Dd = this.get("editEnable")
        }, labelzIndexChanged: function () {
            this.Hc && this.Hc.set("zIndex", this.get("labelzIndex"))
        }, styleChanged: function () {
            this.Gi = !0
        }, mapStyleChanged: function () {
            if (this.D.Ci) {
                this.Dm && (this.set("style", ""), this.Pu = this.Dm = "");
                var a = this.get("mapStyle");
                this.Gi = !0;
                this.Ee = g.o.Ee[a] || g.o.Ee["default"];
                this.vE()
            }
        }, styleUrlChanged: function () {
            if (this.D.Ci) {
                var a = this.get("styleUrl") || "";
                if (a !== this.Dm) {
                    var b = -1 !== a.indexOf("?isPublic=true"), a = a.substr(0, 46),
                        c = a.split("amap://styles/")[1];
                    if ("normal" === c) this.Dm = "", this.set("nolimg", !!this.D.get("nolimg_param")), this.set("style", ""), this.Pu = ""; else {
                        this.jA = !0;
                        this.set("nolimg", !0);
                        var d;
                        32 > c.length ? d = g.o.Cc + "://webapi.amap.com/style2?name=" + c + "&key=" + g.o.key : (d = g.o.Cc + "://webapi.amap.com/v4/map/styles2?styleid=" +
                            c + "&s=rsv3&key=" + g.o.key + (b ? "&ispublic=1" : ""), g.o.Xa ? d += "&jscode=" + g.o.Xa : g.o.fv && (d = g.o.fv + "/v4/map/styles2?styleid=" + c + "&s=rsv3&key=" + g.o.key + (b ? "&ispublic=1" : "")));
                        b = new g.kb.Ab(d, {callback: "callback"});
                        b.h("complete", function (a) {
                            a.data && a.data.layer && this.set("layerStyle", JSON.parse(a.data.layer));
                            a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
                            this.jA = !1
                        }, this);
                        b.h("error", function () {
                            this.jA = !1
                        }, this);
                        this.Dm = a;
                        this.vE()
                    }
                }
            }
        }, W8: function (a) {
            this.K.style.background =
                a
        }, rqa: function (a) {
            var b = this.get("center");
            if (a.contains(b)) return null;
            a = g.Ht.closestOnLine(b, a.hV().path);
            return new g.U(a[0], a[1])
        }, rna: function () {
            var a = this.get("limitBounds"), b = this.get("bounds");
            b.wc && b.wc.R > b.oc.R && (b.oc.R += 360);
            if (!a.contains(b)) {
                if (b instanceof g.vp) return this.rqa(a, b);
                var c = this.get("center").eb();
                a.wj() < b.wj() ? c.R = a.yi().R : (a.wc.R > b.wc.R && (c.R += a.wc.R - b.wc.R), a.oc.R < b.oc.R && (c.R += a.oc.R - b.oc.R));
                a.uj() < b.uj() ? c.Q = a.yi().Q : (a.wc.Q > b.wc.Q && (c.Q += a.wc.Q - b.wc.Q), a.oc.Q < b.oc.Q &&
                (c.Q += a.oc.Q - b.oc.Q));
                return c
            }
        }, ZO: function () {
            var a = this.SU;
            this.D.refreshSize();
            var b = this.get("size");
            b && a && !b.hb(a) && (this.SU = b, this.jt = !0, this.set("display"), this.D8(b), this.get("resizeEnable") && this.qa("resize", {
                Jua: a,
                X6: b
            }))
        }, q0: function () {
            var a = this;
            a.ZO();
            a.TO = setTimeout(function () {
                a.q0()
            }, 200)
        }, vda: function () {
            this.TO && (clearTimeout(this.TO), this.TO = null)
        }, aha: function () {
            this.D.C = !0;
            this.SU = this.D.getSize();
            this.D.C = !1;
            if (g.l.Ve || g.l.H$ && g.l.GD || g.l.dua) this.q0(); else {
                var a = this;
                g.F.cma(this.K,
                    function (b) {
                        a.ZO(b)
                    })
            }
        }, zsa: function () {
            var a = this.K;
            g.f.Wa(a, "amap-container");
            var b = {};
            b.ad = g.f.create("div", a, "amap-maps");
            this.Nl = g.f.create("div", a);
            this.Nl.style.display = "none";
            b.Zr = g.f.create("div", b.ad, "amap-drags");
            b.q = g.f.create("div", b.Zr, "amap-layers");
            b.B = g.f.create("div", b.Zr, "amap-overlays");
            b.controls = g.f.create("div", a, "amap-controls");
            b.aT = g.f.create("a", a, "amap-logo");
            g.f.create("img", b.aT).src = g.l.Kc ? this.D.w.logoUrlRetina : this.D.w.logoUrl;
            b.sn = g.f.create("div", a, "amap-copyright");
            b.sn.style.display = "none";
            350 < g.f.nJ(this.K).width && (b.sn.innerHTML = this.D.w.copyright, b.sn.A6 = g.f.create("span", b.sn, "amap-mcode"), this.vE());
            this.Ya = b
        }, vE: function () {
            var a = this.get("layers");
            if (a) {
                for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
                    var e = a[d].get("mapNumber"), f = a[d].get("zIndex", null, !0);
                    e && f > b && a[d].get("visible") && (c = e, b = f)
                }
                this.set("mapNumber", c);
                this.D.C = !0;
                a = this.D.getMapStyle();
                this.D.C = !1;
                "GS(2021)6375" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Ya.sn.style.visibility =
                    "hidden");
                c && this.Ya.sn.A6 && (this.Ya.sn.A6.innerHTML = "- " + c + "\u53f7", this.Ya.sn.style.visibility = "visible");
                return c
            }
        }, DY: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
            g.Oj && (a ? g.Oj.flush() : this.J3 || (this.J3 = g.a.Xc(function () {
                g.Oj.flush();
                this.J3 = null
            }, this)))
        }, gU: function (a) {
            var b = this, c = this.D.get("rasterLayer");
            c && (this.D.set("rasterLayer", void 0), this.D.i8 = !0, this.D.Wv = this.D.Ra, this.wi && (this.wi.xD = !1), c.q && (c.q.ZD = !0), a || (this.hU = g.a.uU(function () {
                b.hU = null;
                b.D &&
                b.D.uk(c)
            })));
            a && this.hU && g.a.cQ(this.hU)
        }, Dr: function () {
            function a() {
                for (var a = d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
                    var e = a[c].get("zooms");
                    if (!(a[c].Aj || a[c].Wv || a[c].w5 || !e || b > e[1] || b < e[0] || !a[c].get("visible") || a[c].q && a[c].q.ha && 0 === a[c].q.ha.length || a[c].q && a[c].q.ZD || a[c].q && a[c].q.Ra)) return !1
                }
                a = d.D.get("features");
                return ("all" === a || g.a.ka(a, "point")) && d.Hc && d.Hc.get("visible") && 0 < d.Hc.ha.length && !d.Hc.Ra && !d.Hc.qo ? !1 : !0
            }

            function b() {
                d.D && d.D.sm && d.D.sm.QB && d.D.sm.QB();
                d.D.b8 =
                    1;
                d.DY();
                d.set("display");
                d.QS = !0
            }

            function c() {
                g.a.Xc(function () {
                    this.r("complete")
                }, d);
                d.D.Ra = !0;
                d.set("display")
            }

            if (!this.xI) if (this.QS) this.DY(); else {
                var d = this, e = this.D.get("rasterLayer"), f = a();
                e ? (e.q && e.q.Ra && (this.D.Ra || c()), f && (this.D.Ra || c(), this.gU(), b())) : f && (this.D.Ra || c(), b(), this.D.i8 = !0)
            }
        }, layersChanged: function () {
            this.la = this.la || [];
            for (var a = this.get("layers"), b = this.la.length - 1; 0 <= b; b -= 1) this.la[b] === this.vd || this.la[b] === this.at || this.la[b].AB || this.la[b].S.AB || -1 !== g.a.indexOf(a,
                this.la[b].S) || (this.la[b].hg(), this.la[b].Ij && this.la[b].Ij.hg(), this.la[b].S.G("complete", this.Dr, this), this.la[b].S.G("renderComplete", this.Dr, this), this.la = g.a.Ho(this.la, b));
            for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1) if (!a[b].w5) if (a[b].ri) -1 === g.a.indexOf(this.la, a[b].q) && this.la.push(a[b].q); else {
                var f = this.cg(a[b]);
                f && (this.la.push(f), a[b].ri = !0, a[b].q = f);
                a[b].h("complete", this.Dr, this, !0);
                a[b].h("renderComplete", this.Dr, this)
            }
            for (b = 0; b < this.la.length; b += 1) f = this.la[b].S,
            f.Hq && f.get("visible") && (c = !0, !1 === f.get("detectRetina") && (d = !1), e = f.get("textIndex") || e);
            this.Hc && (c || "3D" !== this.D.view.type ? this.Hc.qo = !1 : (c = g.a.find(a, function (a) {
                if (z.q.Jt && a instanceof z.q.Jt && a.get("visible")) return !0
            }), this.Hc.qo = c = !!c));
            a = g.a.indexOf(this.la, this.Hc);
            c && this.D.get("showLabel") ? (-1 === a && this.la.push(this.Hc), this.Hc.ja = d && g.l.ja, this.Hc.CC(this.get("mapStyle") || "normal"), this.Hc.set("zIndex", e), this.Hc.set("visible", !0), this.D.wD = !0, this.D.get("isHotspot") ? this.Hc.bva() : this.Hc.lQ()) :
                (this.Hc && (this.Hc.set("visible", !1), this.D.wD = !1, this.Hc.lQ()), this.D.wD = !1);
            this.D.isHotspotChanged();
            this.set("display", 0);
            this.vE()
        }, isHotspotChanged: function () {
            this.layersChanged()
        }, controlsChanged: function () {
            var a = this.get("controls"), b, c;
            if (a.add && 0 < a.add.length) for (; 0 < a.add.length;) b = a.add.shift(), (c = b.zu || b.addTo) && c.call(b, this.D, this.Ya.controls); else if (a.remove && a.remove.length) for (; 0 < a.remove.length;) b = a.remove.shift(), (c = b.Yv || b.removeFrom) && c.call(b, this.D, this.Ya.controls)
        }, D1: function () {
            if (!this.xI) {
                var a =
                    this;
                this.I1 = !1;
                a.vd || (a.vd = new g.q.hd(new z.q.hd, a), a.vd.Bf = 36, a.vd.jg = 36, a.vd.set("zIndex", 120), a.la.push(a.vd), a.vd.YC = !0);
                for (var b = a.get("overlays"), c = [], d = 0; d < a.Wc.length; d += 1) -1 === g.a.indexOf(b, a.Wc[d].Mb) && (a.Wc[d].Mb instanceof z.B.Ze || a.Wc[d].Mb instanceof z.B.Un ? a.Wc[d].hg() : (a.vd && a.Wc[d] instanceof g.B.wb ? (a.vd.bh = g.a.Ey(a.vd.bh, a.Wc[d].L), a.vd.p8([a.Wc[d].L])) : a.at && a.at.p8([a.Wc[d].L]), a.Wc[d].L.fa ? (g.f.remove(a.Wc[d].L.fa), a.Wc[d].L.fa = null) : a.Wc[d].L.Ma && (g.f.remove(a.Wc[d].L.Ma.Ph),
                    g.f.remove(a.Wc[d].L.Ma.Rc), g.f.remove(a.Wc[d].L.Ma.dir), a.Wc[d].L.Ma = null), a.Wc[d].Hn && a.Wc[d].Hn.stop(), a.Wc[d].zh && a.Wc[d].zh.stop(), a.Wc[d].Mb.ri = !1, a.Wc[d].Mb.zl(), a.Wc[d].Mb.B = null, a.Wc[d].Mb = null, a.Wc[d].L.Yoa(), a.Wc[d].L = null, a.Wc[d].zl(), a.Wc[d].De = null, a.Wc[d].ui(), a.Wc[d].map = null), c.push(a.Wc[d]));
                for (d = 0; d < c.length; d += 1) a.Wc = g.a.Ho(a.Wc, g.a.indexOf(a.Wc, c[d]));
                var e = [], f = [];
                g.a.uxa(function (b) {
                    if (!b.ri && b.ah) {
                        var c = b.B || a.Xma(b);
                        c && (a.Wc.push(c), c instanceof g.B.Ze || c instanceof g.B.Un ?
                            c.Vs(a) : c instanceof g.B.wb ? e.push(c.L) : f.push(c.L), b.ri = !0)
                    }
                }, b);
                e.length && a.vd.ey(e);
                f.length && (a.at || (a.at = new g.q.hd(new z.q.hd, a), a.at.set("zIndex", 110), a.la.push(a.at)), a.at.ey(f));
                a.set("display", 0)
            }
        }, overlaysChanged: function () {
            this.Wc = this.Wc || [];
            this.get("overlays") && 0 === this.get("overlays").length ? this.D1() : this.I1 || (g.a.Xc(this.D1, this), this.I1 = !0)
        }, contextmenusChanged: function () {
            var a = this.get("contextmenu");
            if (a) {
                var b = this;
                g.ub.load("overlay", function () {
                    b.vy = new g.B.Un(a, b);
                    b.set("display",
                        0)
                })
            }
        }, infosChanged: function () {
            var a = this.get("infos");
            if (a) {
                this.tm = this.tm || {};
                var b, c = this;
                g.ub.load("overlay", function () {
                    for (var d in a) a.hasOwnProperty(d) && (b = a[d], c.tm[d] = c.tm[d] || new g.B.Ze(b, c))
                })
            }
        }, Xma: function (a) {
            var b = null;
            if (a instanceof z.B.wb) b = new g.B.wb(a, this); else if (a instanceof z.B.Un) b = new g.B.Un(a, this); else if (a instanceof z.B.Ze) b = new g.B.Ze(a, this); else {
                var c = ["overlay"];
                "d" === this.get("overlayRender") ? (c.push("dvector"), g.l.Fn ? c.push("svg") : c.push("vml")) : c.push("cvector");
                if (!this.Rza && !g.ub.KD(c)) {
                    var d = this;
                    g.ub.Gg(c, function () {
                        this.Rza = !0;
                        d.overlaysChanged()
                    });
                    return
                }
                a instanceof z.B.Ec ? b = new g.B.Ec(a, this) : a instanceof z.B.uA ? b = new g.B.uA(a, this) : a instanceof z.B.$b ? b = new g.B.$b(a, this) : a instanceof z.B.hh ? b = new g.B.hh(a, this) : a instanceof z.B.Gt ? b = new g.B.Ec(a, this) : a instanceof z.B.Nt && (b = new g.B.Ec(a, this))
            }
            return b
        }, R3: function () {
            var a = this.Ee;
            this.Pu && (!this.Se || !this.Se.Jp || this.D && this.D.ls) && (a = "function" === typeof this.Pu ? this.Pu(this.wi.P.zoom) : this.Pu);
            return a
        }, QCa: function () {
            function a() {
            }

            var b = new g.q.hd, c = [], d = new g.U(116.405467, 39.907761);
            new g.style.Og.di;
            for (var e = 0; 100 > e; e += 1) for (var f = 0; 100 > f; f += 1) {
                var h = new g.U(d.R + 0.02 * f, d.Q + 0.02 * e), h = new g.bi({
                    name: "point" + (100 * e + f),
                    map: this,
                    W: new g.Aa.Ng(this.Cb(h))
                });
                c[100 * e + f] = h;
                h.h("hover", a, h)
            }
            b.ey(c);
            this.la.push(b)
        }, nc: function () {
        }, OCa: function (a) {
            var b = new g.q.hd, c = [], c = (new g.waa({map: this})).VT(a);
            b.ey(c);
            this.la.push(b);
            this.set("display", 0)
        }, cg: function (a) {
            var b = this;
            a = a.cg(this);
            if (!a) return null;
            if (a.length && "string" == typeof a[0]) g.ub.Gg(a, function () {
                b.layersChanged()
            }); else return a;
            return null
        }, JEa: function () {
            return this.Ya
        }, ZGa: function () {
            this.set("display", 0)
        }, displayChanged: function (a) {
            this.v1 || this.OK(a)
        }, OK: function (a) {
            if (a) if (g.a.si(this.zE), g.l.Zl) {
                var b = this;
                setTimeout(function () {
                    b.pc()
                }, 0)
            } else this.pc(); else this.Gw || (this.zE = g.a.Xc(this.pc), this.Gw = !0)
        }, pc: function () {
            this.zE = null;
            if (!this.xI) {
                this.r("render");
                this.Gw = !1;
                var a = {};
                if (this.la && (a.size = this.D.get("size"), a.size.width &&
                a.size.height)) {
                    for (var b = this.D.view.type, c = [], d = 0, e = this.la.length; d < e; d += 1) this.la[d].Vf && this.la[d].Vf !== b ? this.la[d].Ra = !0 : (c.push(this.la[d]), this.la[d].Ij && c.push(this.la[d].Ij));
                    c.sort(function (a, b) {
                        var c = a.get("zIndex"), d = b.get("zIndex");
                        return c > d ? 1 : c === d ? a.hx > b.hx ? 1 : -1 : -1
                    });
                    a.la = c;
                    c = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                    a.a2 = 15E5 < a.size.width * a.size.height * c * c;
                    a.xD = !!this.D.get("rasterLayer");
                    a.ba = g.l.ba;
                    a.lang = this.get("lang");
                    a.P = this.D.tD();
                    a.Vf = b;
                    this.D.C = !0;
                    a.T = this.D.getResolution([0,
                        0]);
                    a.Eq = this.D.get("mapStyle");
                    a.Gi = this.Gi;
                    this.D.C = !1;
                    a.Cd = this.sg;
                    a.dpa = this.Vm;
                    a.he = this.fj;
                    a.hf = this.Kf;
                    a.UE = this.Kf && g.l.ba;
                    a.mL = g.l.ba && this.fj;
                    a.pt = g.l.ba && this.sg;
                    this.pt = a.pt;
                    b = this.get("targetLevel") || a.P.zoom;
                    a.up = a.P.zoom > b;
                    a.Hf = a.P.zoom > b ? "zoomOut" : a.P.zoom < b ? "zoomIn" : "stable";
                    a.yua = !0;
                    a.YH = this.YH;
                    for (var b = !1, f, c = !1, d = 0; d < this.la.length; d += 1) this.la[d].Ei && this.la[d].S.get("visible") && a.P.zoom <= this.la[d].S.get("zooms")[1] && (a.lU = !0), this.la[d].ne().Kc && (b = !0);
                    for (d = 0; d < this.la.length; d +=
                        1) this.la[d].S.QP && a.lU && (!this.fj && this.la[d].S.get("visible") && (f = this.la[d].S.QP(), f.rFa = 1, f.zoom = a.P.zoom), c = !0);
                    this.pb = [];
                    c && f && this.pb !== f && (this.pb = f);
                    a.pb = this.pb;
                    a.Kc = b;
                    a.scale = Math.pow(2, a.P.zoom - a.P.oe);
                    this.wi = a;
                    this.Oc = this.D.get("mask");
                    a.Oc = this.Oc;
                    a.XJ = this.XJ;
                    if (f = this.Ry()) f.pc(a), this.Gi = this.kR = this.XJ = !1
                }
            }
        }, Qq: function (a) {
            if (!this.xI) {
                var b = {};
                if (this.la && (b.size = this.D.get("size"), b.size.width && b.size.height)) {
                    for (var c = this.D.view.type, d = [], e = 0, f = this.la.length; e < f; e += 1) this.la[e].Vf &&
                    this.la[e].Vf !== c || !(this.la[e] instanceof g.q.Pm) || 0 > a.indexOf(this.la[e].S) || (d.push(this.la[e]), this.la[e].Ij && d.push(this.la[e].Ij));
                    d.sort(function (a, b) {
                        var c = a.get("zIndex"), d = b.get("zIndex");
                        return c > d ? 1 : c === d ? a.hx > b.hx ? 1 : -1 : -1
                    });
                    b.la = d;
                    a = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                    b.a2 = 15E5 < b.size.width * b.size.height * a * a;
                    b.xD = !!this.D.get("rasterLayer");
                    b.ba = g.l.ba;
                    b.lang = this.get("lang");
                    b.P = this.D.tD();
                    b.Vf = c;
                    this.D.C = !0;
                    b.T = this.D.getResolution([0, 0]);
                    b.Eq = this.D.get("mapStyle");
                    b.Gi =
                        this.Gi;
                    this.D.C = !1;
                    b.Cd = this.sg;
                    b.dpa = this.Vm;
                    b.he = this.fj;
                    b.hf = this.Kf;
                    b.UE = this.Kf && g.l.ba;
                    b.mL = g.l.ba && this.fj;
                    b.pt = g.l.ba && this.sg;
                    this.pt = b.pt;
                    c = this.get("targetLevel") || b.P.zoom;
                    b.up = b.P.zoom > c;
                    b.Hf = b.P.zoom > c ? "zoomOut" : b.P.zoom < c ? "zoomIn" : "stable";
                    b.yua = !0;
                    b.YH = this.YH;
                    c = !1;
                    for (a = 0; a < this.la.length; a += 1) this.la[a].ne().Kc && (c = !0);
                    this.pb = [];
                    b.pb = this.pb;
                    b.Kc = c;
                    b.scale = Math.pow(2, b.P.zoom - b.P.oe);
                    this.wi = b;
                    this.Oc = this.D.get("mask");
                    b.Oc = this.Oc;
                    (c = this.Ry()) && c.Qq(b)
                }
            }
        }, Ry: function () {
            if (!this.J ||
                this.J.type !== this.D.view.type || this.J.Tta) if (this.J = null, "3D" == this.D.view.type) {
                var a = this;
                g.ub.load("Map3D", function () {
                    a.J || (a.J = new g.Ea.DF(a), a.set("display"))
                })
            } else this.J = new g.M.canvas.Sb(this);
            return this.J
        }, Cqa: function () {
            var a = [], b = this.get("controls").Nd, c;
            for (c in b) b[c].Ty && b[c].Ty() && a.push(b[c].Ty());
            return a
        }, destroyChanged: function () {
            this.xI = 1;
            this.gU(!0);
            this.V = {};
            this.Hc && (this.Hc.S.G("complete", this.Dr, this), this.Hc.hg(), this.la = g.a.Ho(this.la, g.a.indexOf(this.la, this.Hc)));
            this.Se && this.Se.je && this.Se.je.S && this.Se.je.S.setMap();
            this.Uka && clearTimeout(this.Uka);
            this.yka();
            this.Bha();
            this.CO && this.CO();
            this.Ela();
            this.zl();
            this.D = this.D.map = null;
            this.K = this.K.___amap___ = null;
            this.ui();
            this.Ie && (this.Ie.stop(), this.Ie = null);
            this.Wf && (this.Wf.stop(), this.Wf = null);
            this.Hd && (this.Hd.stop(), this.Hd = null);
            this.J && this.J.Lf && this.J.Lf();
            this.J = null
        }, Ela: function () {
            var a = this.K;
            this.vda();
            g.F.Ina(a);
            g.f.Kz(a);
            this.Nl = null;
            g.f.fb(a, "amap-container");
            this.Ya = null
        }, jogEnableChanged: function () {
            this.get("jogEnable") ?
                this.yv = !0 : this.yv = !1
        }, drawChanged: function () {
            var a = this, b, c, d = this.get("draw");
            if (d) {
                this.uq || (this.uq = []);
                b = 0;
                for (c = this.uq.length; b < c; b += 1) this.uq[b].Dwa();
                g.ub.load("interaction", function () {
                    var b = new g.PAa({type: d, q: a.at}, a);
                    a.uq.push(b);
                    a.loaded = !0
                })
            } else if (this.uq) for (b = 0, c = this.uq.length; b < c; b += 1) this.uq[b].Dwa(), this.uq[b].mDa(), this.G("click", this.uq[b].ZEa, this)
        }, Zd: function (a, b, c) {
            return this.D.view.Zd(a, b, c)
        }, zg: function (a, b, c) {
            return this.D.view.zg(a, b, c)
        }, I4: function (a, b) {
            var c = this.get("size"),
                d = document.createElement("canvas");
            a = a || c.width;
            b = b || c.height;
            d.width = a;
            d.height = b;
            for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this.Ya.q.childNodes, k = [], l = 0; l < h.length; l += 1) k.push(h[l]);
            k.sort(function (a, b) {
                return a.style.zIndex - b.style.zIndex
            });
            for (l = 0; l < k.length; l += 1) {
                var m = k[l];
                if (g.f.An(m, "amap-layer") || g.f.An(m, "amap-e") || g.f.An(m, "amap-labels")) if ("CANVAS" === m.tagName) {
                    var h = c, n = e, p = parseFloat(m.style.width) || m.width,
                        q = parseFloat(m.style.height) || m.height, r = 1;
                    m.style.transform &&
                    (r = parseFloat(m.style.transform.split("(")[1]));
                    f.drawImage(m, n, h, p * r, q * r)
                } else if ("DIV" === m.tagName) for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
                    var v = r[u];
                    if ("CANVAS" === v.tagName || "IMG" === v.tagName) h = parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style.width) || v.width, q = parseFloat(v.style.height) || v.height, f.drawImage(v, n + m, h + s, p, q)
                }
            }
            return d.toDataURL()
        }
    });
    g.Sb.Ib({
        qga: function () {
            this.FB = !1;
            g.l.Uf && ("3D" === this.D.view.type ? this.Nca() : this.Lca());
            g.l.ba || this.Ica()
        }, yka: function () {
            g.l.Uf && ("3D" === this.D.view.type ? this.Gha() : this.Fha());
            g.l.ba || (this.Cha(), this.q_())
        }, rotateEnableChanged: function () {
            this.kxa = this.get("rotateEnable");
            g.l.Uf && this.c2 && "3D" !== this.D.view.type && (this.kxa ? this.c2() : this.Iua())
        }, zoomEnableChanged: function () {
            this.get("zoomEnable") ? (g.l.Uf && this.SP && "3D" !== this.D.view.type && this.SP(), g.l.ba || this.Kca()) : (g.l.Uf && this.lT && this.lT(),
            g.l.ba || this.q_())
        }, mousewheelChanged: function () {
        }, ZS: function (a) {
            a && (this.FB = a.uu)
        }, Aw: function () {
            this.FB = !1
        }, Mi: function (a, b, c, d) {
            var e, f = {};
            a || (a = window.event);
            var h = g.F.mm(a, this.Ya.ad);
            g.l.Uf && ("touchend" !== a.type ? this.V.Wga = h : h = this.V.Wga);
            f.Db = h;
            f.Ta = this.zg(h);
            f.Ta && (f.Ta = f.Ta.toFixed(3));
            f.Of = this.Qd(f.Ta);
            c || (c = this.FB ? this.FB ? [this.FB] : null : this.gfa(f.Ta, d)) && 0 < c.length && c[0].vo && (e = c[0].vo, f.uu = c[0]);
            e || "info" === a.af || (e = this);
            f.kd = e;
            f.PBa = a.altKey;
            f.ctrlKey = a.ctrlKey;
            f.button = void 0 ===
            a.button ? 0 : a.button;
            f.zT = a;
            e && "AMap.LabelMarker" === e.CLASS_NAME && (f.lnglat = f.Of, f.pixel = f.Db, f.target = e, f.data = e.ZW, f.originEvent = a);
            b || g.F.preventDefault(a);
            return f
        }, $N: function (a) {
            return a && a !== this && a !== document
        }, UO: function () {
            var a = this.V;
            a.gg && (a.bk.Db.x === a.gg.x && a.bk.Db.y === a.gg.y ? a.Kf = !1 : (a.Kf = !0, a.Gp || (a.kq.r("dragstart", a.jq), a.Gp = !0), a.kq.r("dragging", a.bk), a.gg = a.bk.Db))
        }, aya: function (a) {
            for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c]));
            return b
        }, Sv: function (a, b, c) {
            return a &&
                b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
        }, gfa: function (a, b) {
            var c = this.Ry();
            if (!c) return null;
            var d, e = this;
            this.la.sort(function (a, b) {
                return a.get("zIndex") > b.get("zIndex") ? -1 : 1
            });
            c.nq(a, this.la, function (a) {
                d = a;
                d = e.aya(d)
            }, function () {
                d = []
            }, b);
            return d
        }
    });
    g.Sb.Ib({
        xga: function () {
            this.Vm = {};
            this.h("moveend", this.l7, this);
            g.l.Zl && (g.l.tL || g.l.XH) && this.h("zoomend", this.MV, this);
            this.h("movestart", this.m7, this);
            this.h("zoomstart", this.t7, this);
            this.h("zoomend", this.s7, this);
            this.JM();
            this.jB = 0;
            this.IY = {};
            "undefined" === typeof window.requestAnimationFrame && (this.jB = 2)
        }, t7: function () {
            2 !== this.jB && 12 === this.get("zoom") && (this.jB = 1, g.a.lR.start(this.IY));
            this.fj = !0
        }, s7: function () {
            1 === this.jB && 13 !== this.get("zoom") && (this.jB = 0, g.a.lR.cancel(this.IY));
            this.fj =
                !1;
            this.set("display")
        }, Z0: function (a, b) {
            this.Vm.left = 0 < a;
            this.Vm.right = 0 > a;
            this.Vm.dF = 0 < b;
            this.Vm.IQ = 0 > b
        }, ou: function () {
            this.Vm.left = !1;
            this.Vm.right = !1;
            this.Vm.dF = !1;
            this.Vm.IQ = !1
        }, Bha: function () {
            this.G("moveend", this.l7, this);
            g.l.Zl && (g.l.tL || g.l.XH) && this.G("zoomend", this.MV, this);
            this.G("movestart", this.m7, this);
            this.G("zoomstart", this.t7, this);
            this.G("zoomend", this.s7, this);
            this.Dha()
        }, l7: function (a) {
            this.Kf = !1;
            this.ou();
            this.D8();
            !a.R5 && this.D.get("limitBounds", null, !0) ? (a = this.rna()) && !a.hb(this.get("center")) ?
                this.YK(this.get("zoom"), a, !1, !0) : this.qa("moveend") : this.qa("moveend");
            this.set("display")
        }, m7: function () {
            this.Kf = !0;
            this.ou()
        }, dragEnableChanged: function () {
            (this.ZC = this.get("dragEnable")) ? this.IM() : this.BO()
        }, qa: function (a, b) {
            if (this.D.we(a)) {
                var c;
                b && (c = b.X6 ? {type: a, newsize: b.X6, oldsize: b.Jua} : {
                    type: a,
                    pixel: b.Db,
                    target: this.D,
                    lnglat: b.Of,
                    originEvent: b.zT
                });
                this.D.r(a, c)
            }
        }, JM: function () {
            this.h("click", this.C_);
            this.h("dblclick", this.G_);
            g.l.Uf && this.AX();
            g.l.ba || this.Jca()
        }, Dha: function () {
            this.G("click",
                this.C_);
            this.G("dblclick", this.G_);
            g.l.Uf && this.r_();
            g.l.ba || this.Eha()
        }, eH: function (a, b) {
            var c = this.get("targetLevel") || this.get("zoom"),
                c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
                c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
            c === this.get("zoom") || this.Wf && this.Wf.dw && c === this.Wf.end || this.sA(c, !1, a)
        }, C_: function (a) {
            this.qa("click", a)
        }, G_: function (a) {
            this.get("doubleClickZoom") && this.get("zoomEnable") && this.eH(a.Ta, 1);
            this.qa("dblclick", a)
        }, wCa: function (a) {
            this.eH(a.RHa, a.M9);
            this.qa("touchend",
                a)
        }, IM: function () {
            this.ZC && ("3D" === this.D.view.type ? (this.h("dragstart", this.M_), this.h("dragging", this.I_), this.h("dragend", this.K_)) : (this.h("dragstart", this.L_), this.h("dragging", this.H_), this.h("dragend", this.J_)))
        }, BO: function () {
            this.ZC || ("3D" === this.D.view.type ? (this.G("dragstart", this.M_), this.G("dragging", this.I_), this.G("dragend", this.K_)) : (this.G("dragstart", this.L_), this.G("dragging", this.H_), this.G("dragend", this.J_)))
        }, L_: function (a) {
            this.ZS(a);
            this.ou();
            this.sg = !0;
            this.V.Iy = a.Db.x;
            this.V.$C =
                a.Db.y;
            this.Ie && (this.Ie.stop(), this.ws(!0));
            this.qa("dragstart");
            this.qa("movestart");
            this.r("movestart", a);
            this.gya()
        }, H_: function () {
            var a = this.V, b = a.bk.Db.x - a.Iy, c = a.bk.Db.y - a.$C;
            if (c || b) {
                this.V.Kf = !0;
                this.Z0(b, c);
                a.Iy = a.bk.Db.x;
                a.$C = a.bk.Db.y;
                var a = b, d = c, e = this.rotation;
                e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c);
                a = this.get("centerCoords").bb((new g.H(a, d)).Pd(this.T));
                (d = this.B2(a)) && (c = Math.round(this.Zd(d).bb(this.Zd(a)).y));
                this.ap(this.Ya.Zr, b, c);
                a.x =
                    (a.x + g.a.Fa) % g.a.Fa;
                this.set("centerCoords", a, !0);
                this.set("center", this.Qd(a), !0);
                this.yv && (this.ih ? (a = new Date, this.$t = 100 < a - this.ih ? new g.H(0, 0) : new g.H(b, c), this.ih = a) : this.ih = new Date);
                this.qa("dragging");
                this.qa("mapmove")
            } else this.V.Kf = !1, this.$t = null, this.ou()
        }, ap: function (a, b, c) {
            if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
                var d = parseFloat(a.style.top) || 0, e = parseFloat(a.style.left) || 0, f = "";
                this.rotation && (f = g.f.qt[g.f.qg] + ":rotate(" + this.rotation + "deg);overflow:visible;");
                a.style.cssText = "position:absolute;top:" +
                    (d + c) + "px;left:" + (e + b) + "px;" + f
            }
        }, B2: function (a) {
            var b = this.D.view.cX(), c = this.SU.height * this.T / 2;
            return a.y < b.hc + c ? (a.y = b.hc + c, a) : a.y > b.tc - c ? (a.y = b.tc - c, a) : null
        }, J_: function () {
            this.Aw();
            100 < new Date - this.ih && (this.$t = null);
            this.V.gg = null;
            this.sg = !1;
            this.ou();
            this.qa("dragend");
            if (this.yv && this.$t) if (this.V.Kf) {
                var a = this.$t, b = new g.H(0, 0);
                this.Ie = new g.Lj(a, b, function (a, b, e) {
                    return 600 <= e ? b : a.Pd(1 - Math.pow(e / 600, 2)).floor()
                }, 1);
                this.Ie.Kq = function (a) {
                    if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.Ie.stop(),
                        this.r("moveend"), this.ws(), this.$t = this.ih = null; else {
                        var b = a.x, e = a.y, f = this.rotation;
                        f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) * a.y);
                        b = this.get("centerCoords").bb((new g.H(b, e)).Pd(this.T));
                        e = this.B2(b);
                        f = a.y;
                        e && (f = Math.round(this.Zd(e).bb(this.Zd(b)).y));
                        this.ap(this.Ya.Zr, a.x, f);
                        b.x = (b.x + g.a.Fa) % g.a.Fa;
                        this.set("centerCoords", b, !0);
                        this.set("center", this.Qd(b), !0);
                        this.qa("mapmove")
                    }
                };
                this.Ie.On(this)
            } else this.r("moveend"), this.ws(!0), this.$t = this.ih = null;
            else this.r("moveend"), this.ws(), this.$t = this.ih = null
        }, gya: function () {
            if (!this.V.refresh) {
                var a = this, b = null;
                this.V.refresh = setInterval(function () {
                    b !== a.V.gg && (a.set("display", 0), b = a.V.gg)
                }, g.l.ba ? 400 : 100)
            }
        }, MV: function () {
            if (g.l.Zl && (g.l.tL || g.l.XH)) {
                for (var a = this.Ya.q.childNodes, b = 0; b < a.length; b += 1) {
                    var c = a[b];
                    c instanceof HTMLCanvasElement && (c.width = 0);
                    "amap-e" === c.className && (c.style.height = "0")
                }
                for (b = 0; b < this.la.length; b += 1) c = this.la[b], "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap &&
                (c.wu && (c.wu.width = 0), c.Zx && (c.Zx.width = 0))
            }
        }, ws: function (a) {
            this.V.refresh && (clearInterval(this.V.refresh), this.V.refresh = null);
            a || (this.MV(), this.set("display", 0))
        }, D8: function (a) {
            this.set("refresh", a)
        }
    });
    g.Sb.Ib({
        setZoomSlow: function (a) {
            this.YK(a, null, !this.get("animateEnable"))
        }, setPanTo: function (a) {
            this.YK(null, a, !this.get("animateEnable"))
        }, zoomAndCenterChanged: function (a) {
            var b = a[0];
            b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
            b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
            this.YK(b, a[1], a[2] || !this.get("animateEnable"))
        }, zoomChanged: function () {
            this.T = Math.pow(2, 20 - this.get("zoom"));
            this.r("closeOverlays");
            this.set("display")
        }, rotationChanged: function (a) {
            this.rotation = this.get("rotation");
            this.D.r("rotate", {rotation: this.rotation || 0});
            !0 !== a && this.set("display", 0)
        }, pitchChanged: function () {
            this.pitch = this.get("pitch");
            this.D.r("pitch", {pitch: this.pitch || 0});
            this.set("display", 0)
        }, centerCoordsChanged: function () {
            this.r("closeOverlays");
            this.UBa ? this.OK(!0) : this.OK(!1)
        }
    });
    g.SW = g.da.extend({
        ka: [g.va, g.$e], A: function (a, b) {
            this.type = "2D";
            this.kf(b, !0);
            a && this.Hma(a)
        }, Hma: function (a) {
            this.map = a;
            this.bf(["size", "refresh", "maxPitch"], a);
            this.centerChanged();
            a.bf(["zoom", "center", "centerCoords", "rotation", "pitch"], this)
        }, cX: function () {
            this.zM || this.aoa();
            return this.zM
        }, aoa: function () {
            var a;
            if (this.get("center") instanceof g.U) {
                a = new g.pe(-180, -85, 180, 85);
                var b = this.map.Cb(a.ek());
                a = this.map.Cb(a.Qo());
                this.zM = {Jc: b.x, hc: b.y, Ic: a.x, tc: a.y}
            } else a = this.map.get("limitBounds",
                null, !0), this.zM = {Jc: a[0], hc: a[1], Ic: a[2], tc: a[3]}
        }, tD: function () {
            var a = this.map, b = this.get("zoom");
            return {
                zoom: b,
                ph: this.get("center"),
                Ha: this.lm(),
                nb: this.get("centerCoords"),
                rotation: parseInt(this.get("rotation")),
                Qf: a.get("crs"),
                T: Math.pow(2, 20 - b),
                oe: Math.round(b),
                Hg: Math.pow(2, 20 - Math.round(this.get("zoom")))
            }
        }, centerChanged: function () {
            this.set("centerCoords", this.map.Cb(this.get("center")).toFixed(3), !0)
        }, centerCoordsChanged: function () {
            var a = this.map;
            a.C = !0;
            var b = this.cX(), c = this.get("centerCoords"),
                d = a.getSize();
            a.C = !1;
            var e = this.get("zoom", null, !0), a = this.get("center", null, !0),
                d = d.height * Math.pow(2, 20 - e) / 2;
            a instanceof g.U ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Ic && (c.x = b.Ic);
            c.y < b.hc + d ? c.y = b.hc + d : c.y > b.tc - d && (c.y = b.tc - d);
            this.set("center", this.map.Qd(c), !0)
        }
    });
    g.PF = g.SW.extend({
        lm: function () {
            var a = this.get("size"), b = this.get("centerCoords"),
                c = parseInt(this.get("rotation")) % 360, d = this.get("zoom", null, !0),
                e = Math.pow(2, 20 - d), c = Math.PI * c / 180,
                a = new g.H((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
                e = new g.Xf(b.bb(a.Pd(e)), b.add(a.Pd(e))), c = this.map.get("targetLevel");
            if (c > d - 1) {
                var f = Math.pow(2, 20 - c);
                e.S$ = new g.Xf(b.bb(a.Pd(f)), b.add(a.Pd(f)))
            }
            e.K9 = c || d;
            e.Ac = a;
            return e
        }, tqa: function (a) {
            var b =
                    this.get("size"), c = this.get("centerCoords"),
                d = parseInt(this.get("rotation")) % 360, d = Math.PI * d / 180,
                b = new g.H((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2);
            a = Math.pow(2, 20 - a);
            return new g.Xf(c.bb(b.Pd(a)), c.add(b.Pd(a)))
        }, Md: function () {
            var a = this.lm(), b = a.Xd.x, c = a.kc.y, a = new g.H(a.kc.x, a.Xd.y),
                b = new g.H(b, c);
            return new g.pe(this.map.Qd(a), this.map.Qd(b))
        }, zoomChanged: function () {
        }, Zd: function (a, b) {
            this.get("size");
            var c =
                a.eb(), d = this.get("centerCoords"), e = c.bb(d);
            e.x < -g.a.Fa / 2 ? e.x += g.a.Fa : e.x > g.a.Fa / 2 && (e.x -= g.a.Fa);
            var c = this.get("size").RE().nd(2), f = this.get("rotation") * Math.PI / 180,
                d = e.x * Math.cos(f) - Math.sin(f) * e.y,
                e = Math.sin(f) * e.x + Math.cos(f) * e.y;
            return c.add((new g.H(d, e)).Pd(Math.pow(2, (b || this.get("zoom")) - 20)))
        }, zg: function (a, b) {
            var c = this.get("size").RE().nd(2), d = a.bb(c),
                e = this.get("rotation") * Math.PI / 180, c = d.x * Math.cos(e) + Math.sin(e) * d.y,
                d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
                c = this.get("centerCoords").add((new g.H(c,
                    d)).Pd(Math.pow(2, 20 - (b || this.get("zoom")))));
            c.x = (c.x + 268435456) % 268435456;
            return c
        }
    });
    g.tM = g.SW.extend({
        A: function (a, b) {
            this.Me = new g.Dc;
            this.dc = new g.Dc([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
            arguments.callee.ma.apply(this, arguments);
            this.scale = 1;
            this.type = "3D";
            this.oA = null;
            this.Y7 = "";
            this.P = ["", 0, 0, "", 0];
            this.oA = {}
        }, refreshChanged: function () {
            this.jr()
        }, zoomChanged: function (a) {
            this.jr();
            this.P[4] = a
        }, centerChanged: function (a) {
            arguments.callee.ma.apply(this, arguments);
            this.jr()
        }, centerCoordsChanged: function (a) {
            arguments.callee.ma.apply(this, arguments);
            this.jr();
            this.P[0] = a.toString()
        },
        rotationChanged: function (a) {
            this.jr();
            this.P[2] = a
        }, pitchChanged: function (a) {
            this.De.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0));
            this.jr();
            this.P[1] = a
        }, jr: function () {
            if (!this.Iza() && (this.vL(), this.Zoa(), this.map)) {
                var a = this, b = function () {
                    a.map.camera = a.V3();
                    a.map.r("camerachange", {map: a.map, camera: a.map.camera})
                };
                a.map.Ra ? b() : this.map.h("complete", b, this)
            }
        }, V3: function () {
            return {
                height: this.qn,
                fov: this.hqa,
                aspect: this.wC,
                near: this.uz,
                far: this.NI,
                position: this.dna,
                rotation: this.De.rotation,
                pitch: this.De.pitch
            }
        },
        Zoa: function () {
            this.Xga = g.a.eg()
        }, Wo: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300;
            return g.a.eg() - this.Xga > a
        }, vL: function () {
            var a = this.get("centerCoords"), b = this.get("pitch"), c = this.get("rotation"),
                d = (new g.Dc).h9(-a.x + g.a.ec.x, -a.y + g.a.ec.y, 0);
            this.dna = {x: a.x - g.a.ec.x, y: a.y - g.a.ec.y};
            a = (new g.Dc).Tz(180 - b, 1, 0, 0);
            this.N7 = (new g.Dc).set(a);
            c = (new g.Dc).Tz(c, 0, 0, 1);
            this.Uq = (new g.Dc).set(c);
            this.fqa = d.Eg();
            this.dc = (new g.Dc).h9(0, 0, -this.qn).multiply(a.multiply(c.multiply(d))).toFixed(8);
            this.dc.ef = this.dc.Eg()
        }, Iza: function (a) {
            a = a || this.get("zoom");
            var b = this.get("size"), c = b.width, b = b.height;
            if (!c || !b) return !0;
            this.wC = c /= b;
            b = b / 2 * Math.pow(2, 20 - a);
            a = g.a.xb((56 - a) * Math.PI / 180, 2);
            var d = g.a.xb(b / Math.tan(a / 2), 0);
            2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
            this.hqa = a;
            this.qn = d;
            this.uz = this.qn / 10;
            this.NI = 50 * this.qn;
            this.Ioa = (this.qn - this.uz) / (this.NI - this.uz);
            this.Me.e9(a, c, this.uz, this.NI);
            this.Me.ef = this.Me.Eg();
            a = this.Me;
            var c = new g.iW, b = c.kE, e = this.Me.elements, d = e[0], f = e[1], h = e[2],
                k = e[3], l =
                    e[4], m = e[5], n = e[6], p = e[7], q = e[8], r = e[9], s = e[10], u = e[11],
                v = e[12], w = e[13], t = e[14], e = e[15];
            yc(b[0], k - d, p - l, u - q, e - v).normalize();
            yc(b[1], k + d, p + l, u + q, e + v).normalize();
            yc(b[2], k + f, p + m, u + r, e + w).normalize();
            yc(b[3], k - f, p - m, u - r, e - w).normalize();
            yc(b[4], k - h, p - n, u - s, e - t).normalize();
            yc(b[5], k + h, p + n, u + s, e + t).normalize();
            a.pR = c
        }, tD: function () {
            var a = this.map;
            a.map.jt && (this.jr(), this.P[3] = a.get("size").toString());
            var b = this.P.toString();
            if (b !== this.Y7) {
                var c = this.get("zoom"), d = this.oA;
                d.zoom = c;
                d.wC = this.wC;
                d.top =
                    this.top;
                d.Ha = this.lm();
                d.nb = this.get("centerCoords");
                d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0;
                d.pitch = this.get("pitch") || 0;
                d.IIa = this.get("yaw");
                d.Qf = a.get("crs");
                d.T = Math.pow(2, 20 - c);
                d.oe = Math.round(c);
                d.v7 = Math.floor(c);
                d.Hg = Math.pow(2, 20 - d.oe);
                d.jva = Math.pow(2, 20 - d.v7);
                d.Me = this.Me;
                d.dc = this.dc;
                this.Y7 = d.key = b
            }
            this.oA.ph = this.get("center");
            this.oA.hr = g.a.eg();
            this.oA.Wo = this.Wo();
            return this.oA
        }, lm: function () {
            var a = this.get("size"), b = a.width, a = a.height;
            if (!b || !a) return null;
            var c, d;
            d = 0;
            var e = new g.H(0, d);
            c = this.zg(e, !0);
            if (55 < this.De.pitch || !c) for (; !c;) d += a / 40, e.y = d, c = this.zg(e, !0);
            this.top = d / a;
            e.x = b;
            d = this.zg(e, !0);
            var f = 0, h = this.De.zoom;
            50 <= this.De.pitch && 18 <= h && (f = 0);
            e.y = a + f;
            f = this.zg(e, !0);
            e.x = 0;
            h = this.zg(e, !0);
            c = [c.xl(), d.xl(), f.xl(), h.xl(), c.xl()];
            c = new g.iaa(c);
            e.x = b / 2;
            e.y = a + 256;
            c.aQ = this.zg(e, !0);
            return c
        }, Md: function () {
            var a = this.lm();
            if (a) {
                for (var b = [], c = 0; c < a.path.length; c += 1) {
                    var d = this.map.Qd(new g.H(a.path[c][0], a.path[c][1]));
                    b.push(d)
                }
                return new g.vp(b)
            }
        },
        Zd: function (a, b, c) {
            a.z = c || 0;
            a = this.O6([a]);
            a = a[0];
            return new g.H(a.x, a.y)
        }, Z3: function (a) {
            var b = this.get("size");
            a = new g.Gl([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
            a.multiply(this.uz);
            return this.Me.ef.Bh(a)
        }, zg: function (a, b, c) {
            var d;
            this.map ? (this.map.C = !0, d = this.map.getSize(!0), this.map.C = !1) : d = this.get("size");
            var e = a.x / d.width * 2 - 1;
            d = 1 - a.y / d.height * 2;
            a = new g.Gl([e, d, -1, 1]);
            a.multiply(this.uz);
            if (!this.Me.ef) return null;
            a = this.Me.ef.Bh(a);
            e = new g.Gl([e, d, 1, 1]);
            e.multiply(this.NI);
            d = this.Me.ef.Bh(e);
            var f = this.dc.ef, e = f.Bh(a).elements;
            a = f.Bh(d).elements;
            c = (e[2] - (-c || 0)) / (e[2] - a[2]);
            if (0 > a[2] || 0 > c || b && c > 2.5 * this.Ioa) return null;
            b = e[0] - c * (e[0] - a[0]);
            c = e[1] - c * (e[1] - a[1]);
            return isNaN(b) || isNaN(c) ? null : (new g.H(b, c)).add(g.a.ec)
        }, O6: function (a) {
            for (var b = this.get("centerCoords"), c = g.a.ec.x, d = g.a.ec.y, e = this.get("size"), f = g.a.Fa, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.Gl([0, 0, 0, 1]), m = l.elements, n = new g.H(0, 0), p = g.Dc.multiply(this.Me, this.dc), q = 0, r = a.length; q < r; q++) if (a[q]) {
                a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
                    n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0);
                h < n.x ? n.x -= f : b > n.x && (n.x += f);
                m[0] = n.x - c;
                m[1] = n.y - d;
                m[2] = n.z;
                var s = p.Bh(l);
                s.multiply(1 / s.elements[3]);
                k[q] = {
                    x: (s.elements[0] + 1) / 2 * e.width,
                    y: (-s.elements[1] + 1) / 2 * e.height,
                    z: s.elements[2]
                }
            }
            return k
        }, jAa: function (a) {
            var b = this.get("size");
            a = this.Me.Bh(this.dc.Bh((new g.Gl).copy(a)));
            a.multiply(1 / a.elements[3]);
            b = new g.H((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height);
            b.z = a.elements[2];
            return b
        }
    });
    g.a.ec = new g.H(215440491, 106744817);
    g.Sb.Ib({
        w2: function (a, b, c) {
            var d = this;
            d.kF ? (clearTimeout(d.kF), d.kF = null) : (d.qa("zoomstart", {zoom: a}), d.r("zoomstart"));
            d.kF = setTimeout(function () {
                d.kF = null;
                d.qa("zoomend", {zoom: a});
                d.qa("zoomchange", {zoom: a});
                d.r("zoomend")
            }, 150);
            a = g.a.xb(a, 2);
            d.sA(a, !0, b, c)
        }, sA: function (a, b, c, d) {
            var e = this.get("zoom");
            if (e !== a) {
                var f = this.get("zooms");
                "3D" !== this.D.view.type && (g.l.ba || g.l.Ve) && (b = !0);
                a = a || e;
                a = Math.min(Math.max(a, f[0]), f[1]);
                var h = a !== e, k = !!c;
                this.Ie && (this.Ie.stop(), this.Ie = null);
                c = c || this.get("centerCoords");
                var l = this.Zd(c);
                c = function (c) {
                    b || (c = g.a.xb(c, 2));
                    var d = this.zg(l);
                    this.set("zoom", c);
                    var e = this.zg(l), d = e && e ? e.bb(d) : new g.H(0, 0);
                    this.set("centerCoords", this.get("centerCoords").bb(d).toFixed(3));
                    d.x && d.y && this.qa("mapmove");
                    c === a && a << 0 === a && (this.set("targetLevel", null), h && !this.kF && (this.qa("zoomchange"), this.qa("zoomend")), this.r("zoomend"), k && this.r("moveend"), this.Wf = null)
                };
                var m;
                this.Hd && this.Hd.dw && (this.Hd.stop(), this.Hd.hS && (d = !0), this.Hd.uD && (m = !0), this.Hd = null, this.set("targetLevel",
                    null));
                this.Wf && this.Wf.dw && (this.Wf.stop(), d = !0, this.Wf.uD && (m = !0), this.Wf = null, this.set("targetLevel", null));
                h && !d && this.qa("zoomstart");
                k && !m && this.qa("movestart");
                this.r("zoomstart");
                b ? c.call(this, a) : (this.Wf = new g.Lj(e, a, null, 0.04), this.Wf.hS = h, this.Wf.uD = k, this.Wf.transition = function (a, b, c) {
                    return c >= g.o.SH ? b : (b - a) * (1 - Math.pow(1 - c / g.o.SH, 4)) + a
                }, this.Wf.Kq = c, this.Wf.On(this, !0), this.set("targetLevel", a))
            }
        }, YK: function (a, b, c, d) {
            var e = null;
            a || (a = this.Hd ? this.Hd.rya : this.get("targetLevel") || this.get("zoom"));
            var e = b ? this.Cb(b).toFixed(3) : this.Hd ? this.Hd.J9 : this.get("centerCoords"),
                f = a !== this.get("zoom"), h = !e.hb(this.get("centerCoords")), k = b = !1;
            this.Wf && this.Wf.dw && (this.Wf.stop(), b = !0, this.Wf.uD && (k = !0), this.Wf = null, this.set("targetLevel", null));
            this.Hd && this.Hd.dw && (this.Hd.stop(), this.Hd.hS && (b = !0), this.Hd.uD && (k = !0), this.Hd = null, this.set("targetLevel", null));
            this.Ie && (this.Ie.stop(), this.Ie = null);
            if (f || h) {
                if (!this.D.view.lm().contains(e) || f && "3D" !== this.D.view.type && (g.l.ba || g.l.Ve)) c = !0;
                if (c) f && (b ||
                (this.r("zoomstart"), this.qa("zoomstart")), this.set("zoom", a), this.qa("zoomchange"), this.qa("zoomend"), this.r("zoomend")), h && (k || d || (this.qa("movestart"), this.r("movestart")), this.set("centerCoords", e), this.qa("mapmove"), this.r("moveend", {R5: d})), this.set("targetLevel", null); else {
                    this.set("targetLevel", a);
                    var l = a - this.get("zoom"), m = e.bb(this.get("centerCoords")).toFixed(3);
                    this.Hd = new g.Lj(1, 0, null, 0.001);
                    this.Hd.hS = f;
                    this.Hd.uD = h;
                    this.Hd.J9 = e;
                    this.Hd.rya = a;
                    this.Hd.transition = function (a, b, c) {
                        return Math.pow(1 -
                            Math.min(g.o.SH, c) / g.o.SH, 2)
                    };
                    this.Hd.Kq = function (b) {
                        0.02 > b ? (this.Hd && (this.Hd.stop(), this.Hd = null), f && (this.set("zoom", a), this.qa("zoomchange"), this.qa("zoomend"), f = !1, this.r("zoomend")), h && (this.set("centerCoords", e), this.r("mapmove"), this.r("moveend", {R5: d})), this.set("targetLevel", null)) : (f && this.set("zoom", a - l * b), h && (b = e.bb(m.Pd(b)).toFixed(3), this.set("centerCoords", b), this.qa("mapmove")));
                        this.set("display", 1)
                    };
                    this.Hd.On(this);
                    f && !b && (this.r("zoomstart"), this.qa("zoomstart"));
                    !h || k || d || (this.r("movestart"),
                        this.qa("movestart"))
                }
            }
        }
    });
    g.q = {};
    g.q.Zb = g.da.extend({
        ka: [g.va, g.$e], A: function (a, b) {
            this.S = a;
            this.Za = [3, 18];
            this.hx = g.a.zb(this);
            a && this.bf(["opacity", "visible", "zIndex", "zooms"], a);
            a.Vf = b.D.view.type;
            this.e = b;
            this.X("display", b)
        }, hg: function () {
            this.Ei && this.lQ();
            if (g.Ca && g.Ca.mr && g.Ca.mr.length) {
                var a = g.a.indexOf(g.Ca.mr, this);
                -1 !== a && (g.Ca.mr = g.a.Ho(g.Ca.mr, a))
            }
            if (a = this.Ob) {
                if (a.length) for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode.removeChild(a[b]); else a.parentNode && a.parentNode.removeChild(a);
                this.Ob = null
            }
            this.S.hg && this.S.hg();
            this.S.ri = !1;
            this.S.q = null;
            this.zl();
            var c;
            this.M && (this.M.ak(), this.M = null, c = "-" + this.mc);
            this.Cf && (this.Cf.ak(), this.Cf = null, c = "-" + this.mc);
            if (c) for (var d in g.Ca.Gj) g.a.eD(d, c) && delete g.Ca.Gj[d]
        }, qa: function (a, b) {
            this.S.r(a, b)
        }, visibleChanged: function () {
            this.set("display", 0)
        }, zIndexChanged: function () {
            this.set("display", 0)
        }, IU: function (a) {
            g.f.Yq(a, this.opacity)
        }, opacityChanged: function () {
            var a = this.get("opacity");
            this.opacity = Math.min(Math.max(0, a), 1);
            if (a = this.Ob) if (a.length) for (var b = 0; b < a.length; b +=
                1) this.IU(a[b]); else this.IU(a);
            this.e && this.e.D && "3D" == this.e.D.view.type && this.set("display", 0)
        }, zn: function () {
            return this.e.Oc && !this.S.get("rejectMapMask")
        }, cJ: function () {
            var a = this.get("bounds");
            if (a) {
                if (a instanceof g.pe) {
                    var b = a.ek(), a = a.Qo(), c = this.e.Cb(new g.U(180, 0)).x, d = this.e.Cb(b),
                        e = this.e.Cb(a), f = this.e.get("center");
                    b.R > a.R && (0 < f.R ? e.x += c : d.x -= c);
                    this.I = [d.x, d.y, e.x, e.y]
                } else a instanceof g.Xf ? this.I = [a.kc.x, a.kc.y, a.Xd.x, a.Xd.y] : a instanceof g.QF && "3D" === this.S.Vf && (b = a.path[1], d =
                    this.e.Cb(a.path[0]), e = this.e.Cb(b), this.I = [d.x, d.y, e.x, e.y, a.T8, a.height]);
                return this.I
            }
            return null
        }
    });
    var Pc = function () {
        function a(a) {
            this.TF[g.a.zb(a)] = a;
            return this
        }

        function b(a) {
            this.TF[g.a.zb(a)] = null;
            return this
        }

        return function () {
            function c() {
                var a = c.TF, b, f = [], h;
                for (h in a) a.hasOwnProperty(h) && f.push(a[h]);
                for (a = f.length - 1; 0 <= a; a -= 1) h = f[a].apply(this, arguments), void 0 !== h && (b = h);
                return b
            }

            c.TF = {};
            c.O1 = a;
            c.XGa = b;
            return c
        }
    }();
    g.pg = g.da.extend({
        ka: [g.va], A: function (a, b) {
            this.Kp = a | 0;
            this.WF = !!b;
            this.count = 0;
            this.lK = Pc();
            this.clear();
            this.EB = []
        }, vh: function () {
            return !this.count
        }, oFa: function () {
            return this.count >= this.Kp
        }, FHa: function (a) {
            this.Kp !== a && (this.Kp = a | 0) && this.y1(this.Kp)
        }, Nd: function (a) {
            return !!this.e[a]
        }, get: function (a, b) {
            var c = this.AY(a);
            return c ? c.value : b
        }, set: function (a, b) {
            var c = this.AY(a);
            c ? c.value = b : (c = new g.pg.vr(a, b), this.e[a] = c, this.vB(c), this.count += 1, this.count > this.Kp && this.y1(this.Kp))
        }, Cw: function (a) {
            this.remove(a)
        },
        remove: function (a) {
            return this.e.hasOwnProperty(a) && this.WB(this.e[a]) ? !0 : !1
        }, forEach: function (a, b) {
            for (var c = this.dd.next; c !== this.dd; c = c.next) a.call(b, c.value, c.key, this)
        }, sK: function (a, b) {
            return this.e.hasOwnProperty(a) ? this.e[a].value : b
        }, AGa: function () {
            return this.dd.next.value
        }, BGa: function () {
            return this.dd.Ia.value
        }, shift: function () {
            return this.r0(this.dd.next)
        }, G2: function () {
            this.EB.length = 0
        }, y6: function (a) {
            this.EB.push(a)
        }, push: function (a) {
            a = new g.pg.vr("", a);
            0 === this.count ? (this.dd.Ia = null,
                a.Ia = this.dd, this.dd.next = a) : (this.kC.next = a, a.Ia = this.kC);
            this.count += 1;
            this.kC = a
        }, xza: function (a) {
            a = new g.pg.vr("", a);
            0 === this.count ? (this.dd.Ia = null, a.Ia = this.dd, this.kC = this.dd.next = a) : (this.dd.next.Ia = a, a.next = this.dd.next, a.Ia = this.dd, this.dd.next = a);
            this.count += 1
        }, Bua: function () {
            if (this.count) {
                this.count -= 1;
                var a = this.dd.next;
                a.next ? (a.next.Ia = this.dd, this.dd.next = a.next) : (this.dd.next = null, this.kC = this.dd.Ia = null);
                a.next = null;
                a.Ia = null;
                return a.value
            }
            return null
        }, pop: function () {
            return this.r0(this.dd.Ia)
        },
        AY: function (a) {
            if (this.e.hasOwnProperty(a)) return a = this.e[a], this.WF && (a.remove(), this.vB(a)), a
        }, vB: function (a) {
            this.WF ? (a.next = this.dd.next, a.Ia = this.dd, this.dd.next = a, a.next.Ia = a) : (a.Ia = this.dd.Ia, a.next = this.dd, this.dd.Ia = a, a.Ia.next = a)
        }, y1: function (a) {
            if (!(this.count <= a || this.count < 2 * this.EB.length)) {
                for (var b = this.WF ? this.dd.Ia : this.dd.next, c = {}, d = 0, e = this.EB.length; d < e; d++) c[this.EB[d]] = !0;
                for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.WF ? b.Ia : b.next, b.key && !c[b.key] && this.WB(b) && this.lK(b.value),
                    b = d, b !== this.dd && b !== this.kC);) ;
            }
        }, WB: function (a) {
            if (this.zC && !1 == this.zC(a.value)) return !1;
            a.remove();
            delete this.e[a.key];
            this.count -= 1;
            return !0
        }, r0: function (a) {
            this.dd !== a && (this.zC && console.log("Warnning!!!"), this.WB(a));
            return a.value
        }, clear: function () {
            this.e = {};
            this.dd = new g.pg.vr("", null);
            this.dd.Ia = this.dd.next = this.dd;
            this.count = 0
        }
    });
    g.pg.vr = function (a, b) {
        this.key = a;
        this.value = b
    };
    g.pg.vr.prototype.Ia = null;
    g.pg.vr.prototype.next = null;
    g.pg.vr.prototype.remove = function () {
        this.Ia.next = this.next;
        this.next.Ia = this.Ia;
        this.next = this.Ia = null
    };

    function Qc(a, b, c) {
        this.url = a;
        this.Nc = b;
        this.jR = c;
        this.rn = this.PK = !1
    }

    function Rc(a, b, c) {
        var d = Sc;
        return function () {
            return d.call(this, a, b, c)
        }
    }

    function Sc(a, b, c) {
        a.RDa = +new Date;
        a.loaded = b;
        clearTimeout(a.Fya);
        var d = a.Ota;
        d.Mn.remove(a.url) && d.Yga();
        d = a.Ssa ? a.ha : a.Ba;
        a.ha = null;
        (c || b || a.jR) && a.Nc(b ? d : null, a);
        a.Z5 ? (a.Z5.ui(), a.Z5 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.Ba = null)
    }

    g.yF = g.da.extend({
        RBa: "assets/image/blank.gif", A: function (a, b, c) {
            this.timeout = b || 15E3;
            this.Pq = new g.pg(1024);
            this.Mn = new g.pg(1024);
            this.Q2 = a;
            this.XQ = c
        }, QM: function (a) {
            a && this.Mn.count >= this.Q2 && (a = this.Mn.dd.Ia.value, a.rn && (this.Mn.remove(a.url), this.jX(a)));
            for (; this.Pq.count && !(this.Mn.count >= this.Q2);) this.kea(this.Pq.shift())
        }, Yga: function () {
            if (!this.TX) {
                this.TX = !0;
                var a = this;
                setTimeout(function () {
                    a.TX = !1;
                    a.QM()
                }, 0)
            }
        }, kea: function (a) {
            var b = document.createElement("img");
            a.jqa && (b.crossOrigin =
                "anonymous");
            b.src = a.url;
            a.Ba = b;
            a.Ota = this;
            a.startTime = +new Date;
            a.PK = !0;
            b.complete ? Sc(a, !0) : (this.Mn.set(a.url, a), b.onload = Rc(a, !0), b.onerror = Rc(a, !1, !0), b.onabort = Rc(a, !1), a.Fya = setTimeout(Rc(a, !1, !0), this.timeout))
        }, jX: function (a) {
            a.PK && (Sc(a, !1), a.rn = !0, a.NCa = !0)
        }, NFa: function (a, b, c) {
            return this.oz(a.url, b, c, !0, a.ta.z + "_" + a.ta.x + "_" + a.ta.y)
        }, oz: function (a, b, c, d, e) {
            var f = this.Mn.get(a);
            if (f && f.rn) f.rn = !1, f.Nc = b, f.jR = c; else {
                f = new Qc(a, b, c);
                f.Ssa = d;
                f.key = e;
                if (this.Pq.get(g.a.zb(f))) return;
                this.Pq.set(g.a.zb(f),
                    f);
                this.QM(!0)
            }
            return f
        }, Dta: function (a, b, c) {
            var d = this.Mn.get(a);
            if (d && d.rn) d.rn = !1, d.Nc = b, d.jR = c; else {
                d = new Qc(a, b, c);
                d.jqa = !0;
                if (this.Pq.get(g.a.zb(d))) return;
                this.Pq.set(g.a.zb(d), d);
                this.QM(!0)
            }
            return d
        }, u2: function (a) {
            a.rn || (a.rn = !0, this.Pq.remove(g.a.zb(a)))
        }, clear: function (a) {
            this.Pq.forEach(function (a) {
                a.rn = !0
            });
            this.Pq.clear();
            if (a) for (; 0 < this.Mn.length;) a = this.Mn.pop(), this.jX(a); else this.Mn.forEach(function (a) {
                a.rn = !0
            })
        }
    });

    function Tc(a, b, c) {
        this.z = a;
        this.x = b;
        this.y = c
    }

    Tc.prototype.eb = function () {
        return new Tc(this.z, this.x, this.y)
    };
    Tc.prototype.toString = function () {
        return this.z + "/" + this.x + "/" + this.y
    };
    g.mb = function (a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
        this.ta = a;
        this.key = a.toString();
        this.Je = b
    };
    g.rr = Tc;
    g.q.mb = g.q.Zb.extend({
        A: function (a, b, c, d, e) {
            arguments.callee.ma.apply(this, arguments);
            this.X("tileSize", a);
            this.X("tiles", a);
            this.bf(["zooms", "type", "detectRetina", "errorUrl"], a);
            a.HG && (this.X("lang", b, !0), this.X("mapStyle", b, !0), this.X("style", b, !0), this.X("features", b, !0));
            var f = "overlayer" === a.get("type") || !1 === a.get("blend");
            this.Jl = !1;
            var h = b.get("size"), h = h.width * h.height / 65536;
            this.ja = g.l.ba && g.l.ja && this.get("detectRetina");
            g.l.Kc && g.l.ba && 9 < h && (this.Jl = !1);
            this.Zi = !f && !a.Wv;
            this.$i = !f && !a.Wv;
            this.jL = c;
            this.X("reload", a);
            a.Osa ? this.X("createTile", a) : this.X("tileFun", a);
            this.gf = d;
            this.qS = e
        }, langChanged: function () {
            this.set("reload");
            this.S.ct()
        }, styleChanged: function () {
            this.e.Dd || (this.set("reload"), this.S.ct())
        }, featuresChanged: function () {
            this.set("reload");
            this.S.ct()
        }, reloadChanged: function () {
            this.set("display", 0)
        }, tileFunChanged: function () {
            var a = this.jL || this.get("tileFun");
            this.Do = function (b, c, d) {
                var e = a(b.ta.x, b.ta.y, b.ta.z);
                if (!b.Ks || b.Ks.rn) b.loaded = !1, b.Ks = ("3D" === this.e.D.view.type ?
                    g.rm.Dta : g.rm.oz).call(g.rm, e, function (a) {
                    b.Ks = null;
                    a ? c(a) : d()
                }, !1)
            }
        }, createTileChanged: function () {
            this.S.C = !0;
            var a = this.S.getCreateTile();
            this.S.C = !1;
            this.Do = function (b, c, d) {
                a.call(this.g.S, b.ta.x, b.ta.y, b.ta.z, c, d, b)
            };
            this.set("reload")
        }, ne: function () {
            var a = this.S.get("zooms", null, !0);
            this.S.Nsa && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]);
            return {
                Fd: this.S.get("tileSize"),
                visible: this.S.get("visible"),
                I: this.cJ(),
                Za: a,
                aI: this.Jl,
                Zi: this.Zi,
                $i: this.$i,
                opacity: this.S.get("opacity"),
                Do: this.S.get("createTile"),
                Ro: this.jL || this.S.get("tileFun"),
                Kc: this.S.Hq ? !1 : this.S.get("detectRetina") && g.l.ja && g.l.ba,
                Oc: this.zn()
            }
        }, bm: function (a) {
            if (g.M.ce.Ui) return new g.M.ce.Ui(this, a)
        }
    });
    g.rm = new g.yF(6, null);
    g.q.hd = g.q.Zb.extend({
        A: function (a, b) {
            this.Ua = Math.min(2, window.devicePixelRatio || 1);
            this.Kc = g.l.ja;
            this.map = b;
            this.fr = 0;
            this.om = !1;
            this.jg = this.Bf = 0;
            this.bh = [];
            arguments.callee.ma.apply(this, arguments);
            this.Nv = [];
            this.gm = new g.q.qaa;
            a && (this.X("style", a), this.X("cursor", a, !0), this.dya = a.get("stable") || !1, this.X("dataSources", a), this.X("bubble", a));
            this.X("display", b);
            this.Fca()
        }, ne: function () {
            return {
                visible: this.get("visible"),
                Za: this.get("zooms"),
                opacity: this.get("opacity"),
                zIndex: this.get("zIndex"),
                hy: this.S.get("alwaysRender") || !1,
                Oc: this.zn()
            }
        }, dataSourcesChanged: function () {
            var a = this.get("dataSources");
            a && a.length ? "string" === typeof a ? (new g.kb.Ab(a)).h("complete", function (a) {
                this.D7(a.data);
                this.ns = a.data;
                this.om = !0;
                this.set("display");
                this.Ra = !0;
                this.S.r("complete")
            }, this) : a.length && (this.D7(a), this.ns = a, this.om = !0, this.set("display"), this.Ra = !0, this.S.r("complete")) : this.clear()
        }, getDatas: function () {
            return this.ns
        }, Cza: function () {
            if (this.S.Aj) {
                var a = this.Em;
                this.Bf = a.Bf;
                this.jg = a.jg
            }
        },
        qa: function (a, b) {
            var c = {
                type: a,
                data: "mouseout" === a ? this.Vga || null : b.uu.ib,
                target: this.S,
                originEvent: b.zT
            };
            this.Vga = "mouseout" === a ? null : b.uu.ib;
            this.S.r(a, c)
        }, sc: function (a) {
            this.qa(a.type, a)
        }, Fca: function () {
            this.h("click", this.sc);
            this.h("dblclick", this.sc);
            this.h("mousedown", this.sc);
            this.h("mouseup", this.sc);
            this.h("mouseover", this.sc);
            this.h("mouseout", this.sc);
            this.h("touchstart", this.sc);
            this.h("touchend", this.sc)
        }, KCa: function () {
            this.G("click", this.sc);
            this.G("dblclick", this.sc);
            this.G("mousedown",
                this.sc);
            this.G("mouseup", this.sc);
            this.G("mouseover", this.sc);
            this.G("mouseout", this.sc);
            this.G("touchstart", this.sc);
            this.G("touchend", this.sc)
        }, styleChanged: function () {
            this.Em = this.get("style");
            this.Cza();
            this.set("display", 0)
        }, D7: function (a) {
            if (a) {
                this.clear();
                for (var b = 0; b < a.length; b += 1) {
                    var c = a[b].lnglat;
                    a[b].lnglat = g.a.Ka(c);
                    c = this.map.Cb(c);
                    c = new g.bi({name: "point-" + g.a.zb(this), W: new g.Aa.Ng([c.x, c.y], !0)});
                    c.vo = this;
                    c.ib = a[b];
                    this.QH(c)
                }
            }
        }, hra: function (a) {
            if ("geojson" === a) return new g.waa({map: this.map});
            if ("topjson" === a) return new g.mBa({map: this.map});
            if ("subway" === a) return new g.hBa({map: this.map})
        }, Pva: function (a) {
            if (a) {
                var b = [], b = [], c = {};
                if (a.rules) {
                    for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
                        for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k].fill && (f[k] = new g.style.Og.gW(h[k].fill)), h[k].stroke && (f[k] = new g.style.Og.LW(h[k].stroke));
                        h = f;
                        b[d].gL = h;
                        b[d] = new g.style.oba(b[d])
                    }
                    c.rules = b
                }
                if (a.symbolizers) {
                    b = a.symbolizers;
                    a = 0;
                    for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new g.style.Og.gW(b[a].fill)),
                    b[a].stroke && (b[a] = new g.style.Og.LW(b[a].stroke));
                    c.gL = b
                }
                a = new g.oM(c)
            } else a = new g.oM({});
            this.set("style", a);
            return a
        }, GCa: function (a, b) {
            var c = new g.kb.Ab(a);
            c.h("complete", function (c) {
                c = this.ha[a] = this.hra(b).VT(c);
                this.ey(c);
                this.qa("complete")
            }, this);
            c.h("error", this.nc, this)
        }, qwa: function (a) {
            "px" === a.target.get("unit") ? (this.Bf = Math.max(a.ul, this.Bf), this.jg = Math.max(a.ul, this.jg)) : a.ul > this.Ps && (this.Ps = a.ul, this.rz = this.Ps / this.map.D.nj.oq(20))
        }, QH: function (a) {
            this.gm.add(a);
            if (!this.YC &&
                !this.S.Aj) {
                if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
                    a.h("rad", this.qwa, this);
                    var b = a.get("radius");
                    b.length && (b = Math.max.apply(null, b));
                    "px" === a.get("unit") ? (this.Bf = Math.max(b, this.Bf), this.jg = Math.max(b, this.jg)) : this.Ps ? b > this.Ps && (this.Ps = b, this.rz = this.Ps / this.map.D.nj.oq(20)) : (this.Ps = b, this.rz = this.Ps / this.map.D.nj.oq(20))
                }
                b = a.get("strokeWeight") || 0;
                if (!this.sz || b > this.sz) this.sz = b
            }
            this.dya || a.X("feature", this, !0)
        }, ey: function (a) {
            this.om = !0;
            for (var b = 0, c = a.length; b <
            c; b += 1) this.QH(a[b])
        }, clear: function () {
            this.om = !0;
            this.ns = [];
            this.gm.clear();
            this.set("display", 0)
        }, yn: function (a) {
            var b, c;
            b = this.gm.yn([a[0] + g.a.Fa, a[1], a[2] + g.a.Fa, a[3]]);
            c = this.gm.yn([a[0] - g.a.Fa, a[1], a[2] - g.a.Fa, a[3]]);
            a = this.gm.yn(a);
            return g.extend(a, g.extend(b, c))
        }, GEa: function (a) {
            var b, c = this.get("style"), d = a.vl;
            c instanceof g.oM || (c = this.Pva(c));
            if (d && 0 < d.length) b = c.U2(d, a); else {
                if (c.N8.length || c.vl.length) b = c.voa(a);
                b || (b = a.Kqa())
            }
            return b
        }, XR: function (a) {
            function b(a, b) {
                return a.hm - b.hm
            }

            var c = [], d, e, f, h, k, l = {};
            for (d in a) if (a.hasOwnProperty(d)) {
                f = a[d];
                h = f.get("zIndex");
                for (e in l) if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
                "undefined" === typeof l[h] && (c.push([[], [], h]), l[h] = c.length - 1);
                h = c[l[h]];
                h[0].push(f)
            }
            c.sort(this.$xa);
            a = 0;
            for (d = c.length; a < d; a += 1) c[a][0].sort(b);
            return c
        }, featureChanged: function (a) {
            this.om = !0;
            var b = a.target, c = b.fc();
            0 !== this.gm.Pqa([g.a.zb(b)]).length && (this.gm.remove(b, a.Pv), c && !a.Ooa && this.gm.add(b))
        }, p8: function (a) {
            this.om = !0;
            for (var b, c = 0, d = a.length; c <
            d; c += 1) b = a[c], b.W.Pv = null, b.vs(!0), b.yl("feature")
        }, KHa: function (a, b) {
            return a[1].zIndex === b[1].zIndex ? g.a.zb(a[1]) - g.a.zb(b[1]) : a[1].zIndex - b[1].zIndex
        }, $xa: function (a, b) {
            return a[2] - b[2]
        }, xHa: function (a) {
            return a.MEa() === g.q.rBa.aBa
        }, bm: function (a) {
            return this.YC ? new g.M.Le.Hl(this, a) : "c" === this.map.get("overlayRender") && g.M.canvas.Hl ? new g.M.canvas.Hl(this, a) : g.M.ce.Hl && "d" === this.map.get("overlayRender") ? new g.M.ce.Hl(this, a) : null
        }
    });
    g.q.hd.Ib({
        cm: function (a) {
            return this.YC ? new g.Ea.Le.Hl(this, a) : this.S.Aj ? new g.Ea.Xaa(this, a) : new g.Ea.Hl(this, a)
        }
    });
    g.q.qaa = g.da.extend({
        A: function () {
            this.clear()
        }, clear: function () {
            this.sq = [];
            this.RT = new g.Mk
        }, add: function (a) {
            var b = g.a.zb(a), c = a.fc();
            this.sq[b] || (this.count += 1, this.sq[b] = a, c && !g.I.hb(c.Md(), [Infinity, Infinity, -Infinity, -Infinity]) && this.RT.Is(c.Md(), a))
        }, AEa: function () {
            return this.sq
        }, yn: function (a) {
            return this.RT.nxa(a)
        }, Pqa: function (a) {
            var b = a.length, c = [], d;
            for (d = 0; d < b; d += 1) this.sq[a[d]] && c.push(this.sq[a[d]]);
            return c
        }, remove: function (a, b) {
            var c = g.a.zb(a).toString(), d = a.fc();
            this.sq[c] && (this.sq[c] =
                null, d && (c = "undefined" !== typeof b ? b : d.Md(), this.RT.remove(c, a)))
        }
    });
    g.Mk = g.da.extend({
        A: function (a) {
            this.E6 = "undefined" !== typeof a ? a : 6;
            this.YJ = Math.floor(this.E6 / 2);
            this.TK = {I: [Infinity, Infinity, -Infinity, -Infinity], Kb: []};
            this.count = 0
        }, xna: function (a, b) {
            var c = -1, d = [], e;
            d.push(b);
            var f = b.Kb;
            do {
                -1 !== c && (d.push(f[c]), f = f[c].Kb, c = -1);
                for (var h = f.length - 1; 0 <= h; h -= 1) {
                    var k = f[h];
                    if ("undefined" !== typeof k.We) {
                        c = -1;
                        break
                    }
                    var l = g.Mk.Vz(k.I[2] - k.I[0], k.I[3] - k.I[1], k.Kb.length + 1),
                        k = g.Mk.Vz((k.I[2] > a.I[2] ? k.I[2] : a.I[2]) - (k.I[0] < a.I[0] ? k.I[0] : a.I[0]), (k.I[3] > a.I[3] ? k.I[3] : a.I[3]) -
                            (k.I[1] < a.I[1] ? k.I[1] : a.I[1]), k.Kb.length + 2);
                    if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
                }
            } while (-1 !== c);
            return d
        }, Is: function (a, b, c) {
            a = {I: a, We: b};
            "undefined" !== typeof c && (a.type = c);
            this.B5(a, this.TK);
            this.count += 1
        }, B5: function (a, b) {
            var c;
            if (0 === b.Kb.length) b.I = g.I.eb(a.I), b.Kb.push(a); else {
                var d = this.xna(a, b), e = a;
                do {
                    if (c && "undefined" !== typeof c.Kb && 0 === c.Kb.length) {
                        var f = c;
                        c = d.pop();
                        for (var h = 0, k = c.Kb.length; h < k; h += 1) if (c.Kb[h] === f || 0 === c.Kb[h].Kb.length) {
                            c.Kb.splice(h, 1);
                            break
                        }
                    } else c = d.pop();
                    f =
                        e instanceof Array;
                    if ("undefined" !== typeof e.We || "undefined" !== typeof e.Kb || f) {
                        if (f) {
                            f = 0;
                            for (h = e.length; f < h; f += 1) g.I.extend(c.I, e[f].I);
                            c.Kb = c.Kb.concat(e)
                        } else g.I.extend(c.I, e.I), c.Kb.push(e);
                        if (c.Kb.length <= this.E6) if (0 < d.length) e = {I: g.I.eb(c.I)}; else break; else e = f = this.rta(c.Kb), 1 > d.length && (c.Kb.push(f[0]), d.push(c), e = f[1])
                    } else g.I.extend(c.I, e.I), e = {I: g.I.eb(c.I)}
                } while (0 < d.length)
            }
        }, rta: function (a) {
            for (var b = this.Uva(a); 0 < a.length;) this.Vva(a, b[0], b[1]);
            return b
        }, Uva: function (a) {
            for (var b =
                a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; 0 <= f; f -= 1) {
                var h = a[f];
                h.I[0] > a[c].I[0] ? c = f : h.I[2] < a[b].I[1] && (b = f);
                h.I[1] > a[e].I[1] ? e = f : h.I[3] < a[d].I[3] && (d = f)
            }
            Math.abs(a[b].I[2] - a[c].I[0]) > Math.abs(a[d].I[3] - a[e].I[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]);
            return [{I: g.I.eb(b.I), Kb: [b]}, {I: g.I.eb(c.I), Kb: [c]}]
        }, Vva: function (a, b, c) {
            for (var d = g.Mk.Vz(b.I[2] - b.I[0], b.I[3] - b.I[1],
                b.Kb.length + 1), e = g.Mk.Vz(c.I[2] - c.I[0], c.I[3] - c.I[1], c.Kb.length + 1), f, h, k, l = a.length - 1; 0 <= l; l -= 1) {
                var m = a[l],
                    n = [b.I[0] < m.I[0] ? b.I[0] : m.I[0], b.I[2] > m.I[2] ? b.I[2] : m.I[2], b.I[1] < m.I[1] ? b.I[1] : m.I[1], b.I[3] > m.I[3] ? b.I[3] : m.I[3]],
                    n = Math.abs(g.Mk.Vz(n[1] - n[0], n[3] - n[2], b.Kb.length + 2) - d),
                    m = [c.I[0] < m.I[0] ? c.I[0] : m.I[0], c.I[2] > m.I[2] ? c.I[2] : m.I[2], c.I[1] < m.I[1] ? c.I[1] : m.I[1], c.I[3] > m.I[3] ? c.I[3] : m.I[3]],
                    m = Math.abs(g.Mk.Vz(m[1] - m[0], m[3] - m[2], c.Kb.length + 2) - e),
                    p = Math.abs(m - n);
                if (!h || !f || p < f) h = l, f = p, k = m < n ? c :
                    b
            }
            d = a.splice(h, 1)[0];
            b.Kb.length + a.length + 1 <= this.YJ ? (b.Kb.push(d), g.I.extend(b.I, d.I)) : c.Kb.length + a.length + 1 <= this.YJ ? (c.Kb.push(d), g.I.extend(c.I, d.I)) : (k.Kb.push(d), g.I.extend(k.I, d.I))
        }, remove: function (a, b) {
            var c = [];
            c[0] = {I: a};
            (c[1] = b) || (c[1] = !1);
            c[2] = this.TK;
            this.count -= 1;
            if (!1 === c[1]) {
                var d = 0, e = [];
                do d = e.length, e = e.concat(this.s8.apply(this, c)); while (d !== e.length);
                return e
            }
            return this.s8.apply(this, c)
        }, s8: function (a, b, c) {
            var d = [], e = [], f = [];
            if (!a || !g.I.$g(a.I, c.I)) return f;
            a = g.I.eb(a.I);
            var h;
            e.push(c.Kb.length);
            d.push(c);
            do {
                c = d.pop();
                var k = e.pop() - 1;
                if ("undefined" !== typeof b) for (; 0 <= k;) {
                    var l = c.Kb[k];
                    if (g.I.$g(a, l.I)) if (b && "undefined" !== typeof l.We && l.We === b || !b && ("undefined" !== typeof l.We || g.I.R2(a, l.I))) {
                        "undefined" !== typeof l.Kb ? (f = this.Pz(l, !0, [], l), c.Kb.splice(k, 1)) : f = c.Kb.splice(k, 1);
                        g.Mk.aU(c);
                        b = void 0;
                        c.Kb.length < this.YJ && (h = this.Pz(c, !0, [], c));
                        break
                    } else "undefined" !== typeof l.Kb && (e.push(k), d.push(c), c = l, k = l.Kb.length);
                    k -= 1
                } else if ("undefined" !== typeof h) {
                    c.Kb.splice(k + 1, 1);
                    0 < c.Kb.length && g.Mk.aU(c);
                    k = 0;
                    for (l = h.length; k < l; k += 1) this.B5(h[k], c);
                    h.length = 0;
                    0 === d.length && 1 >= c.Kb.length ? (h = this.Pz(c, !0, h, c), c.Kb.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.Kb.length < this.YJ ? (h = this.Pz(c, !0, h, c), c.Kb.length = 0) : h = void 0
                } else g.Mk.aU(c)
            } while (0 < d.length);
            return f
        }, search: function (a, b) {
            return this.Pz({I: a}, !1, [], this.TK, b)
        }, nxa: function (a, b) {
            return this.Pz({I: a}, !1, [], this.TK, b, !0)
        }, Pz: function (a, b, c, d, e, f) {
            var h = {}, k = [];
            if (!g.I.$g(a.I, d.I)) return f ? h : c;
            k.push(d.Kb);
            do {
                d = k.pop();
                for (var l = d.length - 1; 0 <= l; l -= 1) {
                    var m = d[l];
                    if (g.I.$g(a.I, m.I)) if ("undefined" !== typeof m.Kb) k.push(m.Kb); else if ("undefined" !== typeof m.We) if (b) c.push(m); else if ("undefined" === typeof e || m.type === e) m = m.We, "undefined" !== typeof f ? h[g.a.zb(m)] = m : c.push(m)
                }
            } while (0 < k.length);
            return "undefined" !== typeof f ? h : c
        }
    });
    g.Mk.aU = function (a) {
        var b = a.Kb.length, c = a.I;
        if (0 === b) g.I.empty(c); else {
            var d = a.Kb[0].I;
            c[0] = d[0];
            c[2] = d[2];
            c[1] = d[1];
            c[3] = d[3];
            for (d = 1; d < b; d += 1) g.I.extend(c, a.Kb[d].I)
        }
    };
    g.Mk.Vz = function (a, b, c) {
        var d = (a + b) / 2;
        a *= b;
        return a * c / (a / (d * d))
    };
    g.B = g.B || {};
    g.B.Fh = g.da.extend({
        ka: [g.va, g.$e],
        zva: ["position", "altitude", "visible", "clickable", "bubble"],
        A: function (a, b) {
            this.map = b;
            this.bf(this.zva, a);
            this.X("zIndex", a);
            this.X("draggable", a);
            g.l.Uf && this.Mca();
            g.l.ba || this.JM();
            this.Mb = a;
            this.Mb.B = this
        },
        draggableChanged: function () {
            this.get("draggable") ? this.IM() : this.BO()
        },
        qa: function (a, b) {
            var c;
            c = b ? {
                type: a,
                pixel: b.Db,
                target: this.Mb,
                lnglat: b.Of,
                originEvent: b.zT
            } : {type: a};
            this.Mb && this.Mb.r(a, c)
        },
        sc: function (a) {
            ("click" !== a.type && "rightclick" !== a.type && "dblclick" !==
                a.type && "longclick" !== a.type || this.get("clickable")) && this.qa(a.type, a)
        },
        HM: function () {
            this.h("click", this.sc);
            this.h("rightclick", this.sc);
            this.h("longclick", this.sc);
            this.h("longpress", this.sc);
            this.h("dblclick", this.sc)
        },
        A1: function () {
            this.G("click", this.sc);
            this.G("rightclick", this.sc);
            this.G("longclick", this.sc);
            this.G("longpress", this.sc);
            this.G("dblclick", this.sc)
        },
        JM: function () {
            this.get("clickable") && this.HM();
            this.h("mousemove", this.sc);
            this.h("mouseout", this.sc);
            this.h("mouseover", this.sc);
            this.h("mousedown", this.sc);
            this.h("mouseup", this.sc)
        },
        LCa: function () {
            this.A1();
            this.G("mousemove", this.sc);
            this.G("mouseout", this.sc);
            this.G("mouseover", this.sc);
            this.G("mousedown", this.sc);
            this.G("mouseup", this.sc)
        },
        clickableChanged: function () {
            this.get("clickable") ? this.HM() : this.A1()
        },
        Mca: function () {
            this.get("clickable") && this.HM();
            this.h("touchstart", this.sc, this);
            this.h("touchmove", this.sc, this);
            this.h("touchend", this.sc, this)
        },
        IM: function () {
            this.h("dragstart", this.gu);
            this.h("dragging", this.eu);
            this.h("dragend", this.fu)
        },
        gu: function (a) {
            this.map.ZS(a);
            this.gg = a.Db;
            this.e6 = a.Ta;
            this.d6 = a.Of;
            this.qa("dragstart", a)
        },
        eu: function (a) {
            var b = this.map.D.view.type;
            if ("2D" == b) {
                var c = a.Db.bb(this.gg), b = c.x, c = c.y;
                this.gg = a.Db;
                var d = this.map.get("rotation") * Math.PI / 180,
                    e = b * Math.cos(d) + Math.sin(d) * c, b = -Math.sin(d) * b + Math.cos(d) * c;
                this.ap(new g.H(e, b));
                this.qa("dragging", a)
            } else "3D" == b && a.Ta && (c = a.Db.bb(this.gg), b = c.x, c = c.y, e = a.Ta.bb(this.e6), a.Of.bb(this.d6), this.gg = a.Db, "function" === typeof this.tz && this.tz(b,
                c, e), this.e6 = a.Ta, this.d6 = a.Of, this.qa("dragging", a))
        },
        fu: function (a) {
            this.map.Aw();
            "3D" == this.map.D.view.type && this.Mb.reset && this.Mb.reset();
            this.qa("dragend", a)
        },
        BO: function () {
            this.G("dragstart", this.gu);
            this.G("dragging", this.eu);
            this.G("dragend", this.fu)
        },
        BN: function (a) {
            var b, c, d = [];
            if (a) for (b = 0, c = a.length; b < c; b += 1) d.push(this.CN(a[b]));
            return d
        },
        CN: function (a) {
            a = this.map.Cb(a);
            return [a.x, a.y]
        },
        ig: function (a) {
            var b = this.L.ob || this.map.get("centerCoords"),
                c = Math.pow(2, 20 - this.map.get("zoom"));
            return [(a[0] - b.x) / c, (a[1] - b.y) / c]
        },
        Ut: function (a, b) {
            var c = this.map.D, d = [], e = !1;
            a[0] instanceof Array && "number" !== typeof a[0][0] && (e = !0);
            if (e) for (var e = 0, f = a.length; e < f; e++) {
                for (var h = [], k = 0, l = a[e].length; k < l; k++) {
                    var m = c.Cb(a[e][k]);
                    m.x += b[0];
                    m.y += b[1];
                    h.push(c.Qd(m))
                }
                d.push(h)
            } else for (e = 0, f = a.length; e < f; e++) h = c.Cb(a[e]), h.x += b[0], h.y += b[1], d.push(c.Qd(h));
            return d
        }
    });
    g.B.wb = g.B.Fh.extend({
        hE: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor".split(" "),
        jma: {
            AMAP_ANIMATION_NONE: !1,
            AMAP_ANIMATION_DROP: g.Lj.Easing.Bounce,
            AMAP_ANIMATION_BOUNCE: g.Lj.Easing.Cubic
        },
        A: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.bf(this.hE, a);
            this.X("move", a);
            this.Zma();
            this.Hu();
            this.set("AnimationOffset", new g.H(0, 0), !0);
            this.X("raiseOnDrag", a);
            this.X("animation",
                a)
        },
        TN: function (a, b, c) {
            var d = this.get("animation");
            if (d && "AMAP_ANIMATION_NONE" !== d) {
                var e = this;
                this.Hn = new g.Lj;
                this.Hn.transition = function (c, h, k) {
                    if ("AMAP_ANIMATION_NONE" === d) return 0;
                    if (a && 600 <= k) return e.Hn.stop(), 0;
                    c = 0 === Math.floor(k / 600) % 2 ? "Out" : "In";
                    "out" === b ? c = "Out" : "in" === b && (c = "In");
                    return e.jma[d][c](k % 600 / 600)
                };
                c = c || 40;
                this.Hn.Kq = function (a) {
                    e.set("AnimationOffset", e.EO.add(new g.H(0, -1 * c * a)))
                };
                this.EO = new g.H(0, 0);
                this.Hn.On()
            }
        },
        AnimationOffsetChanged: function () {
            this.positionChanged()
        },
        C0: function () {
            this.Hn && (this.Hn.stop(), this.set("AnimationOffset", this.EO));
            this.set("AnimationOffset", new g.H(0, -40));
            if (this.pr) this.pr.set("position", this.get("position")); else {
                var a = new z.B.wb({
                    zIndex: this.get("zIndex") - 1,
                    icon: new z.B.di({
                        image: g.o.Hb + "/theme/v1.3/dragCross.png",
                        size: new g.zd(14, 11),
                        innerOverlay: !0
                    }),
                    offset: new g.H(-4, -5),
                    position: this.get("position"),
                    innerOverlay: !0
                });
                a.Da = !0;
                this.pr = a
            }
            this.pr.C = !0;
            this.pr.setMap(this.map.D);
            this.pr.C = !1
        },
        oY: function () {
            this.set("animation", "AMAP_ANIMATION_DROP",
                !0);
            this.TN(!0, "in");
            this.pr.C = !0;
            this.pr.C = !1
        },
        animationChanged: function () {
            this.Hn && (this.Hn.stop(), this.set("AnimationOffset", this.EO), this.Hn = null);
            var a = this.get("animation");
            a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.TN(!0, "in", 100) : this.TN())
        },
        sg: function () {
            this.pr && this.pr.set("position", this.get("position"))
        },
        raiseOnDragChanged: function () {
            this.get("raiseOnDrag") ? (this.h("dragstart", this.C0, this), this.h("dragging", this.sg, this), this.h("dragend", this.oY, this)) : (this.G("dragstart",
                this.C0, this), this.G("dragging", this.sg, this), this.G("dragend", this.oY, this))
        },
        ap: function (a) {
            var b = this.get("position");
            a = this.map.Cb(b).add(a.Pd(Math.pow(2, 20 - this.map.get("zoom"))));
            b instanceof g.U ? this.set("position", this.map.Qd(a)) : this.set("position", a)
        },
        tz: function (a, b) {
            var c = this.get("position"), d = this.get("altitude"), c = this.map.Ns(c, d),
                d = this.map.aq(new g.H(c.x + a, c.y + b), null, d);
            this.set("position", d)
        },
        Zma: function () {
            var a = this.get("content"), b = this.get("shadow"), c = this.get("offset"),
                d = this.get("label"),
                e, f = this;
            e = a ? this.h2(a, c) : this.WP(this.get("icon"), function () {
                f.L && f.L.fa ? (g.l.Ai && g.a.iepngFix(e), f.offsetChanged(), f.uL()) : f.map && f.map.set("display")
            });
            this.set("contentDom", e, !0);
            b && (a = this.n2(b, c), this.set("shadowDom", a, !0));
            d && d.content && this.set("labelDom", this.XP(d.content), !0)
        },
        XP: function (a) {
            var b = document.createElement("div");
            b.className = "amap-marker-label";
            b.innerHTML = a;
            return b
        },
        Hu: function () {
            var a = this.get("position");
            if (this.map && a && !this.L) {
                var b = this.map, a = this.map.Cb(a), a = this.L =
                    new g.bi({name: "marker-" + g.a.zb(this), map: b, W: new g.Aa.Ng([a.x, a.y])});
                a.Vp = this.Mb.CLASS_NAME;
                a.vo = this;
                this.X("coords", a, !0);
                a.bf("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
            }
        },
        getParams: function () {
            return {
                zIndex: this.get("zIndex"),
                Tp: this.get("angle"),
                Vg: this.get("contentDom"),
                LJ: this.get("labelDom"),
                j9: this.get("shadowDom"),
                opacity: this.get("opacity"),
                altitude: this.get("altitude"),
                title: this.get("title"),
                label: this.get("label"),
                pF: this.get("AnimationOffset"),
                verticalAlign: this.get("verticalAlign"),
                textAlign: this.get("textAlign"),
                offset: this.get("offset"),
                W5: this.get("isTop"),
                shape: this.get("shape"),
                visible: this.get("visible") && !this.Mb.get("outOfZooms"),
                anchor: this.get("anchor")
            }
        },
        offsetChanged: function () {
            function a(a) {
                var c = b.get("offset"), f = b.get("AnimationOffset"), h = b.get("verticalAlign"),
                    k = b.get("textAlign"), l = Math.round(a.x) + c.x + f.x;
                a = Math.round(a.y) + c.y + f.y;
                var f = b.get("anchor"), m = b.L.Xj || g.f.No(b.L.Vg);
                b.L.Xj = m;
                c = m[0];
                m = m[1];
                f && (f = f.split("-"), 2 === f.length ? (k = f[1], h = f[0]) : 1 === f.length &&
                    "center" === f[0] && (k = "center", h = "middle"));
                switch (k) {
                    case "center":
                        l -= c / 2;
                        break;
                    case "right":
                        l -= c
                }
                switch (h) {
                    case "middle":
                        a -= m / 2;
                        break;
                    case "bottom":
                        a -= m
                }
                b.L.fa.style.left = l + "px";
                b.L.fa.style.top = a + "px"
            }

            if (this.map) if (this.L && this.L.fa) {
                var b = this, c = this.map.D.view.type;
                "2D" == c ? (c = this.map.Cb(this.get("position")), c = c.bb(this.L.Na).nd(Math.pow(2, 20 - this.map.get("zoom"))), this.L.fa && (this.L.fa.NB && this.L.fa.parentNode !== this.L.fa.NB ? this.map.set("display") : a(c))) : "3D" == c && (c = this.get("position"), c =
                    this.map.Ns(c, this.get("altitude")), this.L.fa && (this.L.fa.NB && this.L.fa.parentNode !== this.L.fa.NB ? this.map.set("display") : a(c)))
            } else this.map.set("display")
        },
        altitudeChanged: function () {
            this.offsetChanged()
        },
        positionChanged: function () {
            if (this.L) {
                var a = this.map.Cb(this.get("position"));
                this.set("coords", [a.x, a.y]);
                this.map && (this.L.hba = !0, this.offsetChanged())
            }
        },
        anchorChanged: function () {
            this.UF()
        },
        textAlignChanged: function () {
            this.UF()
        },
        verticalAlignChanged: function () {
            this.UF()
        },
        UF: function () {
            this.L &&
            (this.L.Xj = null, this.L.se = !0, this.map && (this.map.vd.nm = !0, this.map.set("display")))
        },
        contentChanged: function () {
            if (this.L) {
                this.L.Xj = null;
                this.map.vd.nm = !0;
                -1 === g.a.indexOf(this.map.vd.bh, this.L) && this.map.vd.bh.push(this.L);
                var a = this.get("contentDom");
                this.L.fa && this.L.fa === a.parentNode && this.L.fa.removeChild(a);
                var a = this.get("content"), b = this.get("offset"), a = this.h2(a, b);
                this.set("contentDom", a);
                this.L.fa ? (g.l.Ai && g.a.iepngFix(a), this.L.fa.appendChild(a), this.L.Vg = a, this.offsetChanged(), this.uL()) :
                    this.map && this.map.set("display");
                this.titleChanged()
            }
        },
        iconChanged: function () {
            if (this.L && !this.get("content")) {
                this.L.Xj = null;
                this.map.vd.nm = !0;
                -1 === g.a.indexOf(this.map.vd.bh, this.L) && this.map.vd.bh.push(this.L);
                this.L.fa && this.get("contentDom") && this.L.fa.removeChild(this.get("contentDom"));
                var a = this.get("icon");
                this.get("offset");
                var b = this, c = this.WP(a, function () {
                    b.L && b.L.fa ? (g.l.Ai && g.a.iepngFix(c), b.offsetChanged(), b.uL()) : b.map && b.map.set("display")
                });
                this.set("contentDom", c);
                this.L.fa && (this.L.fa.appendChild(c),
                    this.L.Vg = c);
                this.titleChanged()
            }
        },
        shadowChanged: function () {
            if (this.L) {
                var a = this.get("shadowDom");
                this.L.fa && a && a.parentNode === this.L.fa && this.L.fa.removeChild(a);
                if (a = this.get("shadow")) {
                    var b = this.get("offset"), a = this.n2(a, b);
                    this.set("shadowDom", a);
                    this.L.fa && this.L.fa.appendChild(a)
                }
            }
        },
        titleChanged: function () {
            this.L && this.L.Vg && "string" === typeof this.get("title") && this.L.Vg && this.get("title") && (this.L.Vg.title = this.get("title"))
        },
        uL: function (a, b) {
            a = a || this.get("label");
            b = b || this.get("labelDom");
            if (a && b) {
                var c = a.direction, d = this.L.Xj || g.f.No(this.L.Vg), e = d[0], d = d[1],
                    f = g.f.No(b), h = f[0], k = f[1];
                this.L.Fv = f;
                var l = f = 0;
                switch (c) {
                    case "top":
                        f = -k;
                        l = (e - h) / 2;
                        break;
                    case "right":
                        f = (d - k) / 2;
                        l = e;
                        break;
                    case "bottom":
                        f = d;
                        l = (e - h) / 2;
                        break;
                    case "left":
                        f = (d - k) / 2;
                        l = -h;
                        break;
                    case "center":
                        f = (d - k) / 2, l = (e - h) / 2
                }
                a.offset && (f += a.offset.y, l += a.offset.x);
                b.style.top = f + "px";
                b.style.left = l + "px"
            }
        },
        labelChanged: function (a) {
            a = a || this.get("label");
            if (this.L && this.L.fa) {
                this.L.Fv = null;
                var b = this.L.fa, c = this.get("labelDom");
                c && c.parentNode === b && b.removeChild(c);
                a && a.content && (c = "", a.content && (c = this.XP(a.content), b.appendChild(c), this.uL(a, c)), this.set("labelDom", c))
            } else a && a.content ? this.set("labelDom", this.XP(a.content), !0) : this.set("labelDom", null)
        },
        isTopChanged: function () {
            var a = this.map.vd.lL, b = this.get("isTop"), c = this.get("zIndex");
            a ? a === this ? this.L && this.L.fa && (this.L.fa.style.zIndex = b ? this.map.vd.fr + 10 : c, this.map.vd.lL = b ? this : null) : (a.L && a.L.fa && (a.L.fa.style.zIndex = b ? a.get("zIndex") : this.map.vd.fr + 10), this.L &&
            this.L.fa && (this.L.fa.style.zIndex = b ? this.map.vd.fr + 10 : c), this.map.vd.lL = b ? this : a) : (this.map.vd.lL = this, this.L && this.L.fa && (this.L.fa.style.zIndex = b ? this.map.vd.fr + 10 : c))
        },
        visibleChanged: function () {
            this.L && this.L.fa && (this.get("visible") && !this.Mb.get("outOfZooms") ? this.L.fa.style.display = "block" : this.L.fa.style.display = "none")
        },
        qva: function () {
            this.visibleChanged()
        },
        angleChanged: function () {
            if (!g.l.Ve && this.L && this.L.fa) {
                var a = this.L, b = a.get("params"), c = b.textAlign, d = b.verticalAlign,
                    e = b.offset, b = e.x,
                    e = e.y;
                this.UF();
                if ("AMap.Text" == a.Vp) {
                    var e = b = 0, f = a.Xj || g.f.No(a.Vg), h = f[0], k = f[1];
                    a.Xj = f;
                    switch (c) {
                        case "center":
                            b = h / 2;
                            break;
                        case "right":
                            b = h
                    }
                    switch (d) {
                        case "middle":
                            e = k / 2;
                            break;
                        case "bottom":
                            e = k
                    }
                } else b = -b, e = -e;
                g.f.rotate(this.L.fa, this.get("angle") || 0, {x: b, y: e})
            }
        },
        zIndexChanged: function () {
            var a = this.get("zIndex");
            if (a > this.map.vd.fr) {
                this.map.vd.fr = a;
                var b = this.map.vd.lL;
                b && b.L && b.L.fa && (b.L.fa.style.zIndex = a + 10)
            }
            this.L && this.L.fa && (this.L.fa.style.zIndex = this.get("isTop") ? this.map.vd.fr + 10 : this.get("zIndex"))
        },
        opacityChanged: function () {
            var a = this.get("contentDom"), b = this.get("shadowDom");
            a && g.f.Yq(a, this.get("opacity"));
            b && g.f.Yq(b, this.get("opacity"))
        },
        h2: function (a) {
            var b;
            b = document.createElement("div");
            b.className = "amap-marker-content";
            "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
            g.f.Yq(b, this.get("opacity"));
            return b
        },
        WP: function (a, b) {
            var c, d = 0, e = 0, f, h, k, l, m, n;
            a ? ("string" === typeof a ? (c = a, n = !0) : (c = a.get("image"), e = a.get("size"),
                f = a.get("imageSize"), d = e.width, e = e.height, f && (l = f.width, m = f.height)), f = "string" !== typeof a ? a.get("imageOffset") : {
                x: 0,
                y: 0
            }) : (c = g.o.Ii + "/mark_bs.png", f = {x: 0, y: 0}, d = 19, e = 33, l = 19, m = 33);
            h = document.createElement("div");
            h.className = "amap-icon";
            h.style.position = "absolute";
            h.style.overflow = n ? "inherit" : "hidden";
            d && (h.style.width = d + "px");
            e && (h.style.height = e + "px");
            k = document.createElement("img");
            l && m && (k.style.width = l + "px", k.style.height = m + "px");
            k.style.top = f.y + "px";
            k.style.left = f.x + "px";
            h.appendChild(k);
            g.f.Yq(g.l.Ve &&
            n ? k : h, this.get("opacity"));
            d && e || (h.BM = !1);
            g.F.h(k, "load", function q() {
                this.L && (this.L.Xj = null);
                this.map && this.map.vd && (this.map.vd.nm = !0);
                g.F.G(k, "load", q, this);
                if (this.L && this.L.fa) {
                    var a = this.get("labelDom");
                    a && this.L.fa.appendChild(a)
                }
                h.BM = !0;
                b && b()
            }, this);
            k.src = c;
            return h
        },
        n2: function (a) {
            a = this.WP(a);
            a.style.zIndex = -1;
            return a
        },
        moveChanged: function () {
            var a = this.get("move");
            if (!1 === a) return this.kya();
            void 0 !== a && ("pause" === a.action ? this.Sva() : "[object Array]" === Object.prototype.toString.call(a.Of) ?
                a.Of && ("resume" === a.action && this.PG ? this.moveTo(a.Of[a.Of.Mp || 0], a.speed, a.yb) : (this.PG && this.r("movestop"), a.Of.Mp = 0, this.set("position", a.Of[0]), this.uua(a.Of, a.speed, a.yb, a.Bna))) : this.moveTo(a.Of, a.speed, a.yb, !0))
        },
        moveTo: function (a, b, c, d) {
            if (!(0 >= b)) {
                var e = this.get("position");
                a.bb(e);
                var f = Math.round(a.He(e) / 1E3 / b * 36E5);
                if (0 === f) return this.r("moveend");
                this.zh && (this.zh.stop(), this.zh = null);
                this.zh = new g.Lj(e, a);
                c = c || function (a) {
                    return a
                };
                this.zh.transition = function (a, b, d) {
                    if (d >= f) return b;
                    var e = (b.R - a.R) * c(d / f) + a.R;
                    a = (b.Q - a.Q) * c(d / f) + a.Q;
                    return new g.U(e, a)
                };
                this.zh.Kq = function (b) {
                    this.set("position", b);
                    d && this.Mb.r("moving", {
                        target: this.Mb,
                        passedPath: [this.zh.start, this.get("position")]
                    });
                    this.r("moving");
                    b.hb(a) && (this.zh && (this.zh.stop(), this.zh = null), this.Mb.r("moveend", {target: this.Mb}), this.r("moveend"))
                };
                this.get("autoRotation") && !g.l.Ve && (b = "2D" == (this.map.D.view.type || "2D") ? this.dfa(e, a) : this.efa(e, a), this.set("angle", b));
                this.zh.On(this)
            }
        },
        kya: function () {
            this.zh && (this.zh.stop(),
                this.zh = null, this.r("movestop"))
        },
        Sva: function () {
            this.zh && (this.zh.stop(), this.zh = null, this.r("movepause"))
        },
        uua: function (a, b, c, d) {
            function e() {
                var b = a.slice(0, a.Mp || 0);
                b.push(this.get("position"));
                this.Mb.r("moving", {target: this.Mb, passedPath: b})
            }

            function f() {
                a.Mp < a.length - 1 ? (a.Mp += 1, this.moveTo(a[a.Mp], b, c)) : (this.qa("movealong"), d ? (a.Mp = 0, this.set("position", a[0]), this.moveTo(a[a.Mp], b, c)) : this.r("movestop"))
            }

            var h = Math.min(a.Mp || 0, a.length - 1);
            this.PG || (this.PG = !0, this.h("moving", e, this), this.h("moveend",
                f, this), this.h("movestop", function l() {
                this.PG = !1;
                this.G("moveend", f, this);
                this.G("moving", e, this);
                this.G("movestop", l, this)
            }, this));
            this.moveTo(a[h], b, c)
        },
        efa: function (a, b) {
            var c = this.map, d = c.Ns(a), c = c.Ns(b), e = 0;
            c.He(d);
            var f = c.y - d.y, h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return g.a.xb(180 * e / Math.PI, 1)
        },
        dfa: function (a, b) {
            var c = this.map, d = c.Cb(a), c = c.Cb(b), e = 0;
            c.He(d);
            var f = c.y -
                d.y, h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return g.a.xb(180 * e / Math.PI, 1)
        }
    });
    g.B.Un = g.B.Fh.extend({
        A: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.X("items", a, !0);
            this.X("content", a, !0);
            this.X("resolution", b);
            this.X("centerCoords", b);
            this.Up = a
        }, Vs: function (a) {
            this.Zg();
            this.vt();
            this.Gm();
            this.yl("resolution");
            this.yl("centerCoords");
            this.yl("render");
            this.X("resolution", a);
            this.X("centerCoords", a);
            this.X("render", a);
            this.map.h("movestart", this.bn, this);
            this.map.h("mapmove", this.bn, this);
            this.map.h("zoomstart", this.bn, this);
            this.map.h("click", this.bn, this);
            this.map.h("closeOverlays", this.bn, this);
            this.map.h("rotate", this.bn, this)
        }, bn: function () {
            this.Up.map && (this.Up.C = !0, this.Up.close(), this.Up.C = !1)
        }, mapChanged: function () {
        }, positionChanged: function () {
            this.Gm()
        }, renderChanged: function () {
            this.Gm()
        }, Zg: function () {
            this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K), this.K = null);
            var a = g.f.create("div", null, "amap-menu");
            g.F.h(a, "mousedown", function (a) {
                g.F.stopPropagation(a)
            }, this);
            this.K = a;
            this.map.Ya.B.appendChild(this.K)
        }, vt: function () {
            var a =
                this, b = this.K;
            b.innerHTML = "";
            var c = this.get("content");
            if ("object" === typeof c) b.appendChild(c); else if ("string" === typeof c) b.innerHTML = c; else if ((c = this.get("items")) && c.length) {
                var d = g.f.create("ul", b, "amap-menu-outer");
                c.sort(function (a, b) {
                    return isNaN(a.mK) || isNaN(b.mK) ? 0 : a.mK - b.mK
                });
                for (b = 0; b < c.length; b += 1) (function (b) {
                    var c = b.Rn, h = b.yb, k = g.f.create("li", d);
                    k.innerHTML = c;
                    g.F.h(k, "click", function () {
                        h.call(k);
                        a.Up.C = !0;
                        a.Up.close();
                        a.Up.C = !1
                    }, k)
                })(c[b])
            } else this.K.innerHTML = ""
        }, Gm: function () {
            var a =
                this.map, b = this.K;
            a && b && (this.map.get("zoom"), b = this.get("position"), b = a.Ns(b), a = b.y, b = b.x, this.K.style.right = "", this.K.style.bottom = "", this.K.style.left = b + "px", this.K.style.top = a + "px")
        }, hg: function () {
            this.K && (this.map.G("click", this.XBa, this), this.map.Ya.B.removeChild(this.K), this.Up.ri = !1, this.K = this.Up.De.map = null, this.map.G("movestart", this.bn, this), this.map.G("zoomstart", this.bn, this), this.map.G("click", this.bn, this), this.map.G("closeOverlays", this.bn, this), this.map.G("rotate", this.bn, this))
        },
        visibleChanged: function () {
            this.K && (this.get("visible") ? this.K.style.display = "block" : this.K.style.display = "none")
        }, itemsChanged: function () {
            this.K && this.vt()
        }
    });
    g.B.Ze = g.B.Fh.extend({
        A: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.bf("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor".split(" "), a);
            this.X("retainWhenClose", a, !0);
            a.X("toBeClose", this);
            this.sf = a
        }, Vs: function (a) {
            this.doa || (this.Zg(), this.vt());
            this.yl("resolution");
            this.yl("centerCoords");
            this.yl("render");
            this.X("resolution", a);
            this.X("centerCoords", a);
            this.X("render", a);
            this.map = a;
            a.Ya.B.appendChild(this.Rc);
            this.DV();
            this.Gm();
            this.rX();
            this.doa = !0;
            this.Tna();
            this.Mb.r("onAdd", {type: "onAdd", target: this.Mb})
        }, Zg: function () {
            var a = g.f.create("div");
            a.className = "amap-info";
            var b = g.f.create("div", a, "amap-info-shadowContainer"), c = g.f.create("div", a),
                d = this.get("anchor"), e = "amap-info-contentContainer";
            d && (e = d + " amap-info-contentContainer");
            d = g.f.create("div", c, e);
            a.style.position = "absolute";
            c.style.position = "absolute";
            c.style.bottom = "0px";
            c.style.left = "0px";
            b.style.position = "absolute";
            this.Rc = a;
            this.Ph = c;
            this.NU = b;
            this.qh =
                d;
            this.set("contentDom", this.qh, !0)
        }, vt: function () {
            var a = this.get("contentU");
            if (a) {
                var b = this.get("isCustom"), c = this.qh, d = this.NU;
                c.innerHTML = "";
                var e = null;
                if (b) {
                    if ("string" === typeof a) c.innerHTML = a; else if (a instanceof Array) for (e = 0; e < a.length; e += 1) c.appendChild(a[e]); else c.appendChild(a);
                    e = c;
                    d.parentNode && d.parentNode.removeChild(d)
                } else {
                    e = "amap-info-content amap-info-outer";
                    g.l.Ve && (e += " amap-info-content-ie8");
                    e = this.qsa = d = g.f.create("div", c, e);
                    "string" === typeof a ? d.innerHTML = a : d.appendChild(a);
                    this.foa = d;
                    a = g.f.create("a", this.qsa, "amap-info-close");
                    a.innerHTML = "\u00d7";
                    this.kQ = a;
                    a.href = "javascript: void(0)";
                    g.l.Uf && (g.F.h(a, "touchstart", function (a) {
                        g.F.stop(a)
                    }, this), g.F.h(a, "touchend", function (a) {
                        g.F.stop(a);
                        this.sf.C = !0;
                        this.sf.close();
                        this.sf.C = !1
                    }, this), g.F.h(a, "click", function (a) {
                        g.F.stop(a);
                        this.sf.C = !0;
                        this.sf.close();
                        this.sf.C = !1
                    }, this));
                    g.l.ba || (g.F.h(a, "mousedown", function (a) {
                        g.F.stop(a)
                    }, this), g.F.h(a, "click", function (a) {
                            g.F.stop(a);
                            this.sf.C = !0;
                            this.sf.close();
                            this.sf.C = !1
                        },
                        this));
                    if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"), 0 !== a.height && (d.style.height = a.height + "px");
                    this.get("anchor");
                    g.f.create("div", c, g.l.Ve ? "amap-info-sharp-old" : "amap-info-sharp");
                    this.NU.style.display = "block"
                }
                g.F.iya(e)
            }
        }, DV: function () {
            var a = this.get("isCustom"), b = this.get("showShadow");
            if (!a && b) {
                var a = this.NU, b = g.f.nJ(this.qh), c = b.height - 23, d = b.width;
                if (g.l.Ai || g.l.wv) c = this.qh.childNodes[0].offsetHeight, d = this.qh.childNodes[0].offsetWidth + 26;
                b = "background-image:url(" + g.o.Hb +
                    (g.l.Ai ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
                a.innerHTML = "";
                var e = [], f;
                f = e[1] = {};
                f.height = 0.5 * c + 4;
                f.width = d;
                f.offsetX = 400;
                f.offsetY = 16;
                f.top = -f.height - 10 - 15;
                f.left = 23;
                f = e[2] = {};
                f.height = e[1].height;
                f.width = e[1].height;
                f.offsetX = 1075 - f.width;
                f.offsetY = e[1].offsetY;
                f.top = e[1].top;
                f.left = 23 + e[1].width;
                f = e[3] = {};
                f.height = 10;
                f.width = 22;
                f.offsetX = 30;
                f.offsetY = 445;
                f.top = -25;
                f.left = 23 + (g.l.wv || g.l.Ai ? 5 : 0);
                f = e[4] = {};
                f.height = 10;
                f.width = d / 2 - 15 - e[3].left - e[3].width;
                f.offsetX = 132;
                f.offsetY = 445;
                f.top =
                    -25;
                f.left = e[3].left + e[3].width;
                f = e[5] = {};
                f.height = 10;
                f.width = 70;
                f.offsetX = 80;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[4].left + e[4].width;
                f = e[6] = {};
                f.height = 10;
                f.width = d - e[5].left - e[5].width;
                f.offsetX = 132;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[5].left + e[5].width;
                f = e[7] = {};
                f.height = 10;
                f.width = 30;
                f.offsetX = 621;
                f.offsetY = 445;
                f.top = -25;
                f.left = d;
                f = e[8] = {};
                f.height = 15;
                f.width = 70;
                f.offsetX = 47;
                f.offsetY = 470;
                f.top = -15;
                f.left = d / 2 - 15;
                for (c = 1; 8 >= c; c += 1) d = g.f.create("div", a), f = [], f.push("position:absolute;"), f.push(b), f.push("top:" +
                    e[c].top + "px;"), f.push("left:" + e[c].left + "px;"), f.push("width:" + e[c].width + "px;"), f.push("height:" + e[c].height + "px;"), f.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"), d.style.cssText = f.join("")
            }
        }, oIa: function () {
        }, Gm: function () {
            var a = this.map, b = this.Rc, c = this.get("position"), d = this.get("anchor");
            if (a && b && c) {
                a = a.Ns(c, this.get("altitude"));
                d && (this.qh.className = d + " amap-info-contentContainer");
                var e = g.f.nJ(this.qh);
                if (g.l.Ai || g.l.wv) e.width = this.qh.childNodes[0].offsetWidth + 14;
                b = e.height;
                c = this.get("offset");
                this.get("isCustom");
                e = e.width;
                this.Rc.style.left = Math.round(a.x - e / 2 + (c.x || 0)) + "px";
                this.Rc.style.top = Math.round(a.y + (c.y || 0)) + "px";
                if (d) {
                    var f;
                    "center" == d ? (d = "center", f = "middle") : (f = d.split("-"), d = f[1], f = f[0]);
                    switch (f) {
                        case "middle":
                            this.Rc.style.top = Math.round(a.y + b / 2 + (c.y || 0)) + "px";
                            break;
                        case "top":
                            this.Rc.style.top = Math.round(a.y + b + (c.y || 0)) + "px"
                    }
                    switch (d) {
                        case "left":
                            this.Rc.style.left = Math.round(a.x + (c.x || 0)) + "px";
                            break;
                        case "right":
                            this.Rc.style.left = Math.round(a.x -
                                e + (c.x || 0)) + "px"
                    }
                }
                d = this.foa;
                if (this.kQ && d.childNodes[0]) {
                    for (b = a = 0; b < d.childNodes.length; b += 1) a += d.childNodes[0].clientHeight || 0;
                    a > (this.get("size").height || d.clientHeight) ? this.kQ.style.right = "20px" : this.kQ.style.right = "5px"
                }
            }
        }, Hda: function () {
            var a = new g.H(2 - this.qh.offsetWidth / 2, 2 - this.qh.offsetHeight),
                b = this.get("offset") || new g.H(0, 0), c = this.get("anchor");
            if (c) {
                var a = this.qh.offsetWidth, d = this.qh.offsetHeight, e, f, h = 2 - a / 2,
                    k = 2 - d;
                c && (c = c.split("-"), 2 === c.length ? (e = c[1], f = c[0]) : 1 === c.length && "center" ===
                    c[0] && (e = "center", f = "middle"));
                switch (e) {
                    case "left":
                        h = 2;
                        break;
                    case "right":
                        h = -a
                }
                switch (f) {
                    case "middle":
                        k = -d / 2;
                        break;
                    case "top":
                        k = -2
                }
                a = new g.H(h, k)
            }
            this.get("isCustom") || (a = a.add(new g.H(0, -23)));
            return a.add(b)
        }, altitudeChanged: function () {
            this.Gm()
        }, rX: function () {
            if (this.get("position") && this.get("autoMove") && this.qh) {
                for (var a = this.map, b = new g.zd(this.qh.offsetWidth, this.qh.offsetHeight), c = a.Ns(this.get("position"), this.get("altitude")).add(this.Hda()), d = c.add(b.RE()), e = a.get("size"), f = a.Cqa(),
                         h = 0, k = 0, l = 0; l < f.length; l += 1) {
                    var m = f[l], n = 0, p = 0;
                    0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.wj() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.wj() - m[1] - (d.x + h), p = e.uj() - m[2] - (d.y + k), 0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h), p = e.uj() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
                }
                c = c.add(new g.H(h, k));
                d = d.add(new g.H(h,
                    k));
                l = f = 0;
                0 > c.x || b.wj() > e.wj() ? f = 20 - c.x : e.wj() < d.x && (f = e.wj() - d.x - 25);
                0 > c.y || b.uj() > e.uj() ? l = 5 - c.y : e.uj() < d.y && (l = e.uj() - d.y - 15);
                f += h;
                l += k;
                if (f || l) a.D.C = !0, a.D.panBy(f, l), a.D.C = !1
            }
        }, Tna: function () {
            this.get("closeWhenClickMap") && (this.map.h("clickstart", this.E_, this, !1), this.map.h("clickend", this.D_, this, !1))
        }, E_: function () {
            this.sf.ri && (this.sf.C = !0, this.sf.getIsOpen() && (this.sf.kL = !0), this.sf.C = !1)
        }, D_: function () {
            this.sf.ri && (this.sf.kL && (this.sf.C = !0, this.sf.close(), this.sf.C = !1), this.sf.kL = !1)
        },
        hg: function () {
            this.Rc && this.map && (this.sf.kL = !1, this.get("closeWhenClickMap") && (this.map.G("clickstart", this.E_, this), this.map.G("clickend", this.D_, this)), this.get("retainWhenClose") ? this.map.Nl.appendChild(this.Rc) : (this.Rc.parentNode === this.map.Ya.B && this.map.Ya.B.removeChild(this.Rc), this.sf.B = null), this.map = null, this.sf.ri = !1, this.Mb.r("close", {
                type: "close",
                target: this.Mb
            }))
        }, gCa: function () {
            if (!this.get("isCustom")) return this.qh.offsetWidth;
            for (var a = this.hi, b = a.firstChild, c = a.lastChild; b && c &&
            b.style && c.style && b === c;) a = b, b = a.firstChild, c = a.lastChild;
            a = g.f.$c(a, "width");
            return a = parseInt(a.replace("px", ""), 10)
        }, renderChanged: function () {
            this.Gm()
        }, positionChanged: function () {
            this.map && this.Rc && (this.Gm(), this.rX())
        }, anchorChanged: function () {
            this.positionChanged()
        }, offsetChanged: function () {
            this.positionChanged()
        }, contentChanged: function () {
            this.vt();
            this.DV();
            this.Gm()
        }, sizeChanged: function () {
            this.vt();
            this.DV();
            this.Gm()
        }
    });
    g.Aa = {};
    g.Aa.Pe = g.da.extend({
        ka: [g.va, g.$e], A: function () {
        }, hv: function () {
            var a = this.Md();
            a.ph || (a.ph = g.I.yi(a));
            return a.ph
        }, eb: function () {
            return new this.A(this.za)
        }, uR: function () {
            return this.za
        }, setCoords: function (a) {
            this.X8(a)
        }, X8: function (a) {
            this.Pv = this.Md();
            this.yg = null;
            if (g.Aa.zp && this instanceof g.Aa.zp) {
                var b = a.length;
                this.ke = this.ke.slice(0, b);
                for (var c = 0; c < b; c += 1) if (this.ke[c]) this.ke[c].X8(a[c]); else {
                    var d = new g.Aa.Ec(a[c]);
                    this.ke[c] = d
                }
            } else if (g.Aa.Ec && this instanceof g.Aa.Ec) {
                b = a.length;
                this.Rf =
                    Array(b);
                for (var e, c = 0; c < b; c += 1) if (d = a[c], e = new g.Aa.VL(d), this.Rf[c] = e, 0 === c) {
                    if (0 === d.length) break;
                    e.vq(d) || d.reverse()
                } else 0 !== d.length && e.vq(d) && d.reverse()
            } else this.za = a
        }
    });
    g.Aa.Qe = g.extend({}, {
        Xw: "point",
        RL: "linestring",
        sW: "linearring",
        GF: "polygon",
        cM: "multipoint",
        bM: "multilinestring",
        CF: "multipolygon",
        LAa: "geometrycollection"
    });
    g.bi = g.da.extend({
        ka: [g.va, g.$e], A: function (a) {
            a = a || {};
            a.yB && (this.yB = a.yB);
            a.VN && (this.VN = a.VN);
            a.NZ && (this.NZ = a.NZ);
            this.map = a.map;
            this.hm = a.wN || g.a.zb(this);
            this.name = a.name || "";
            this.se = !1;
            this.set("visible", !0, !0);
            this.FU(a.W);
            this.vl = a.gL;
            this.style = a.style
        }, Yoa: function () {
            this.name = this.map = null;
            this.style = this.vl = this.vo = this.l6 = this.W = this.W.Oa = null;
            this.zl();
            this.ui()
        }, wra: function () {
            return this.vl
        }, Oxa: function (a) {
            this.vl = a;
            this.zIndex = this.vl[0].Jk || this.zIndex
        }, fc: function () {
            return this.W
        },
        FU: function (a) {
            a && (this.W = a, this.X("coords", a, !0), this.yB || this.VN) && (a.X("radius", this), a.X("center", this), a.X("resolution", this), a.X("strokeWeight", this))
        }, setStyle: function (a) {
            this.Oxa(a);
            this.vs()
        }, coordsChanged: function () {
            this.vs()
        }, radiusChanged: function () {
            this.W.Pv = this.W.Md();
            this.W.yg = null;
            this.vs()
        }, vs: function (a) {
            this.set("feature", {
                target: this,
                Ooa: a,
                Pv: this.W.Pv || this.W.Md(),
                Aua: this.W.Md()
            });
            this.W.Pv = this.W.Md()
        }, visibleChanged: function () {
            this.vs()
        }, SEa: function (a) {
            for (var b = 0; b < this.vl.length; b +=
                1) {
                var c = this.vl[b];
                if (a.hb(c.wy(this))) return c
            }
        }, Kqa: function () {
            var a = this.fc(), b = [];
            a.zi() === g.Aa.Qe.GF || a.zi() === g.Aa.Qe.CF ? b.push(new g.style.Ce.Ec({
                fillColor: "#78cdd1",
                me: 0.2,
                strokeColor: "#122e29",
                rb: 0.5,
                qc: 1
            })) : a.zi() === g.Aa.Qe.RL || a.zi() === g.Aa.Qe.sW || a.zi() === g.Aa.Qe.bM ? b.push(new g.style.Ce.yp({
                color: "#888888",
                width: 1,
                zIndex: 10
            })) : a.zi() !== g.Aa.Qe.Xw && a.zi() !== g.Aa.Qe.cM || b.push(new g.style.Ce.di({
                url: g.o.Hb + "/theme/v1.3/markers/0.png",
                width: 36,
                height: 36,
                rotation: 0,
                FIa: -12,
                HIa: -36,
                zIndex: 100
            }));
            return b
        }
    });
    g.bi.GAa = "geometry";
    g.Aa.Ng = g.Aa.Pe.extend({
        A: function (a, b) {
            this.za = a;
            this.Aj = b;
            this.yg = null
        }, Md: function () {
            if (!this.yg) {
                var a = this.za[0], b = this.za[1];
                if (this.Aj) this.yg = [a, b, a, b]; else {
                    var c = this.get("radius"),
                        d = this.get("resolution") * this.get("strokeWeight") || 0,
                        c = c ? c / Math.cos(Math.PI * this.get("center").Q / 180) : 0;
                    this.yg = [a - c - d, b - c - d, a + c + d, b + c + d]
                }
            }
            return this.yg
        }, zi: function () {
            return g.Aa.Qe.Xw
        }
    });
    g.M = {canvas: {}, ce: {}, Ye: {}, Le: {}};
    g.M.Zb = g.da.extend({
        ka: [g.va, g.$e], A: function (a, b) {
            this.g = a;
            this.Aj = a.S.Aj;
            this.J = b;
            this.e = b.e;
            this.X("display", b)
        }, ak: function () {
            this.Jq && this.Jq();
            this.zl();
            this.e = this.J = this.g = null
        }, nq: function (a, b, c, d) {
            var e = this.zoom;
            c = [];
            var f = this.g;
            if (Math.floor(e) !== e) b(c, f); else {
                a = [a.x, a.y];
                if (f.nm) {
                    for (var e = f.bh, h = !0, k = [], l = 0; l < e.length; l += 1) {
                        var m = e[l].Vg;
                        if (m) if (m.parentNode && m.parentNode.parentNode && this.J && m.parentNode.parentNode !== this.J.Nl && "none" !== m.parentNode.style.display) {
                            var n = g.f.No(m), m =
                                n[0], n = n[1];
                            if (m && n) {
                                var p = Math.max(Math.abs(e[l].get("offset").x), Math.abs(e[l].get("offset").y)) + Math.max(m, n);
                                f.Bf = Math.max(f.Bf, p);
                                f.jg = Math.max(f.jg, p);
                                e[l].width = m;
                                e[l].height = n
                            } else h = !1, k.push(e[l])
                        } else h = !1, k.push(e[l])
                    }
                    h ? (f.nm = !1, f.bh = []) : f.bh = k
                }
                e = Math.max(f.Bf, f.sz || 0) * this.T;
                h = Math.max(f.jg, f.sz || 0) * this.T;
                k = 0;
                f.rz && (k = f.rz / Math.cos(Math.PI * this.e.get("center").Q / 180));
                h = Math.max(h, k || 0);
                e = Math.max(e, k || 0);
                if (e = f.yn([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
                    for (var q in e) if (e.hasOwnProperty(q) &&
                        (h = e[q], h.get("visible") && !h.get("noSelect"))) if (k = h.fc(), k instanceof g.Aa.Ng) if (this.Aj) {
                        l = this.g.Em;
                        l instanceof Array && (l = "number" === typeof h.ib.style && l[h.ib.style] ? l[h.ib.style] : l[0]);
                        var m = l.size.width * this.T, n = l.size.height * this.T,
                            p = l.anchor.x * this.T, r = l.anchor.y * this.T, k = k.za,
                            s = l.rotation_, u = [a[0], a[1]];
                        if (s) {
                            var v = (a[0] - k[0]) / this.T, w = (a[1] - k[1]) / this.T, t = s,
                                s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x,
                                v = v * x + w * s;
                            u[0] = k[0] + t * this.T;
                            u[1] = k[1] + v * this.T
                        }
                        m = g.I.TP([[u[0] - m + p, u[1] - n + r], [u[0] + p, u[1] +
                        r]]);
                        g.I.Ud(m, k) && c.push(h)
                    } else if ("undefined" !== typeof k.get("radius")) l = k.za, l = new g.H(l[0], l[1]), m = new g.H(a[0], a[1]), k = k.get("radius"), "px" === h.get("unit") ? m.He(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.He(l) * Math.cos(h.get("center").Q * Math.PI / 180) <= k / this.Dq * Math.pow(2, 20 - this.zoom) && c.push(h); else if ("AMap.Text" == h.Vp) l = h.get("params"), l.visible && h.fa && g.f.JD(d, h.fa, "amap-markers") && c.push(h); else {
                        if (l = h.get("params"), l.visible && h.fa) if (l.shape) for (k = k.za, s = l.Tp % 360, u = [a[0], a[1]], s && (v = (a[0] -
                            k[0]) / this.T, w = (a[1] - k[1]) / this.T, t = Math.PI * s / 180, s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x, v = v * x + w * s, u[0] = k[0] + t * this.T, u[1] = k[1] + v * this.T), m = h.width * this.T, n = h.height * this.T, p = l.offset.x * this.T, r = l.offset.y * this.T, m = g.I.TP([[u[0] - m - p, u[1] - n - r], [u[0] - p, u[1] - r]]), k[0] instanceof Array || (k = [k]), n = k.length - 1; 0 <= n; n -= 1) {
                            if (g.I.Ud(m, k[n])) {
                                l.shape ? this.ID(h, u, k) && c.push(h) : c.push(h);
                                break
                            }
                        } else g.f.JD(d, h.fa, "amap-markers") && c.push(h)
                    } else k.Ud ? k.Ud(a) && c.push(h) : k.Gy && 1.8 * k.Gy(a) <= h.get("strokeWeight") *
                        this.T && c.push(h);
                    this.Aj ? c.sort(function (a, b) {
                        return a.hm > b.hm ? -1 : 1
                    }) : c.sort(function (a, b) {
                        return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.hm > b.hm ? -1 : 1
                    });
                    b(c, f)
                } else b([], f)
            }
        }, ID: function (a, b, c) {
            var d = (b[0] - c[0][0]) / this.T;
            b = (b[1] - c[0][1]) / this.T;
            a = a.get("params");
            c = a.offset;
            var d = [d - c.x, b - c.y], e;
            a = a.shape;
            if ("circle" === a.w.type) {
                if (b = a.w.coords[0], c = a.w.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.w.coords[2]) return !0
            } else {
                if ("poly" ===
                    a.w.type) return e = a.w.coords, e = this.iI(e), g.yd.Ud(d, e);
                if ("rect" === a.w.type) return e = a.w.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [[a, b], [c, b], [c, e], [a, e]], g.yd.Ud(d, e)
            }
            return !1
        }, iI: function (a) {
            for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]);
            return b
        }, k4: function (a, b, c, d, e, f, h) {
            var k = ["position:absolute;"];
            k.push("top:" + Math.round(c) + "px;");
            k.push("left:" + Math.round(b) + "px;");
            k.push("width:" + Math.round(d) + "px;");
            k.push("height:" + Math.round(e) + "px;");
            1 > f && ("opacity" in a.style ? (k.push("opacity"),
                k.push(":"), k.push(f), k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(");")));
            k.push("z-index:" + h + ";");
            k.join("");
            g.f.Y8(a, k.join(""))
        }
    });
    g.M.Sb = g.da.extend({
        ka: [g.va, g.$e], A: function (a) {
            this.e = a;
            this.type = "2D";
            this.Hj = g.a.xb(a.get("zoom"), 1);
            this.Nl = a.Nl;
            this.K = a.Ya.q;
            this.X("display", a);
            this.X("rotateEnable", a);
            this.X("style", a);
            this.X("zoom", a);
            this.X("hightlight", a)
        }, nT: function (a) {
            this.Ee = a || g.a.Zk("ff" + this.e.Ee.slice(1))
        }, nq: function (a, b, c, d, e) {
            function f(a, d) {
                a.length && (k[g.a.indexOf(b, d)] = a);
                l -= 1;
                0 >= l && (c(k), l = 0)
            }

            for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1) m = b[p], (m instanceof g.q.hd || "AMap.LabelLayer" === m.CLASS_NAME) &&
            m.get("visible") && (n.push(this.Bs(m)), l += 1);
            for (h = 0; h < n.length; h += 1) n[h].nq(a, f, d, e)
        }
    });
    g.X2 = {
        mD: function (a, b, c) {
            for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) {
                var m = b[k];
                if (m < a) d = c[m], f = m; else {
                    e = c[m];
                    h = m;
                    break
                }
            }
            null === d ? (d = e, f = h) : null === e && (e = d, h = f);
            return {Iz: f, dK: h, Nq: d, YD: e}
        }, zra: function (a) {
            var b = this, c = g.a, d = [], e = {};
            c.Ub(a.nodes, function (a) {
                !1 !== a.value && null !== a.value && (e[a.zoom] = g.o.Cc + "://" + a.value, d.push(a.zoom))
            });
            return function (a) {
                a = c.xb(a, 1);
                void 0 === e[a] && (e[a] = b.mD(a, d, e).Nq);
                return e[a]
            }
        }, gra: function (a) {
            var b = this, c = g.a, d = [], e = {}, f = a.transitional;
            c.Ub(a.nodes,
                function (a) {
                    null !== a.value && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
                });
            return function (a) {
                a = c.xb(a, 1);
                if (void 0 === e[a]) {
                    var k = b.mD(a, d, e);
                    e[a] = f && "none" !== f && k.dK !== k.Iz && k.Nq !== k.YD ? c.J4(k.Nq, k.YD, (a - k.Iz) / (k.dK - k.Iz), f) : k.Nq
                }
                return e[a]
            }
        }, sqa: function (a) {
            var b = this, c = g.a, d = [], e = {};
            c.Ub(a.nodes, function (a) {
                null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
            });
            return function (a) {
                a = c.xb(a, 1);
                void 0 === e[a] && (e[a] = b.mD(a, d, e).Nq);
                return e[a]
            }
        }, r4: function (a) {
            var b = this, c = g.a, d = [], e = {};
            c.Ub(a.nodes,
                function (a) {
                    null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
                });
            return function (a) {
                a = c.xb(a, 1);
                void 0 === e[a] && (e[a] = b.mD(a, d, e).Nq);
                return e[a]
            }
        }, Aqa: function (a, b, c) {
            var d = this, e = g.a, f = [], h = {}, k = a.transitional;
            e.Ub(a.nodes, function (a) {
                a.value && (h[a.zoom] = e.mma(a.value, c ? "rgba" : "webgl"), f.push(a.zoom))
            });
            return function (a) {
                var b = null;
                a = e.xb(a, 1);
                if (void 0 === h[a]) {
                    var b = d.mD(a, f, h), n = b.Nq;
                    if (k && "none" !== k && b.Iz !== b.dK && b.Nq.join("") !== b.YD.join("")) for (var n = n.slice(0), p = (a - b.Iz) / (b.dK - b.Iz), q = 0, r =
                        b.YD.length; q < r; q++) n[q] = e.J4(b.Nq[q], b.YD[q], p, k);
                    h[a] = n
                }
                b = h[a];
                return c && b ? "rgba(" + b.join(",") + ")" : b || ""
            }
        }, Dz: function (a, b, c, d) {
            var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, f;
            for (f in c) if (c.hasOwnProperty(f)) {
                var h = c[f];
                void 0 !== b[h] ? (b[h].nodes && 1 < b[h].nodes.length && b[h].nodes.sort(function (a, b) {
                    return a.zoom - b.zoom
                }), a[f] = e.Isa ? {
                    Ye: d.call(this, b[h], c[f]),
                    canvas: d.call(this, b[h], c[f], !0)
                } : d.call(this, b[h], c[f])) : e.Hsa && (a[f] = !0)
            }
        }, Tr: function (a, b) {
            for (var c = [], d = 0, e = a.length; d <
            e; d += 2) {
                var f = 0,
                    f = "str" === b ? g.a.xb(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.a.xb(parseInt(a.substr(d, 2), 16) / 255, 3);
                c.push(f)
            }
            return c.length ? (c.push(c.shift()), "str" === b ? "rgba(" + c.join(",") + ")" : c) : ""
        }, G7: function (a, b, c, d) {
            var e = {}, f = {visible: "visible", PU: "showLabel", xk: "showIcon"},
                h = [["color", {color: "color"}, {opacity: "opacity"}], ["fillColor", {fillColor: "fillColor"}, {me: "fillOpacity"}], ["strokeColor", {strokeColor: "strokeColor"}, {rb: "strokeOpacity"}], ["textFillColor", {uya: "textFillColor"}, {vya: "textFillOpacity"}],
                    ["textStrokeColor", {xya: "textStrokeColor"}, {yya: "textStrokeOpacity"}], ["backgroundColor", {backgroundColor: "backgroundColor"}, {vma: "backgroundOpacity"}]],
                k = {fontSize: "fontSize"},
                l = {fillWidth: "fillWidth", strokeWidth: "strokeWidth"};
            if (a.styles) {
                a = a.styles;
                this.Dz(e, a, f, this.sqa, {Hsa: !0});
                this.Dz(e, a, k, this.r4, {Wsa: !0});
                this.Dz(e, a, l, this.r4, {Wsa: !0});
                k = 0;
                for (l = h.length; k < l; k++) {
                    var m = h[k];
                    a[m[0]] ? this.Dz(e, a, m[1], this.Aqa, {Isa: !0}) : this.Dz(e, a, m[2], this.gra)
                }
                a.texture && (this.Dz(e, a, {Ja: "texture"}, this.zra),
                    e.gd = [], g.a.Ub(a.texture.nodes, function (a) {
                    a.value && e.gd.push(g.o.Cc + "://" + a.value)
                }))
            } else {
                for (var n in f) if (f.hasOwnProperty(n)) {
                    var p = f[n];
                    e[n] = void 0 === a[p] ? !0 : a[p]
                }
                f = 0;
                for (n = h.length; f < n; f++) {
                    var q = h[f], p = g.a.keys(q[1])[0], r = q[1][p], s = g.a.keys(q[2])[0],
                        q = q[2][s];
                    void 0 !== a[r] ? e[p] = {
                        canvas: this.Tr(a[r], "str"),
                        Ye: this.Tr(a[r])
                    } : e[s] = a[q]
                }
                for (m in k) k.hasOwnProperty(m) && void 0 !== a[m] && (e[m] = a[m]);
                for (var u in l) l.hasOwnProperty(u) && void 0 !== a[u] && (e[u] = a[u]);
                a.texture && (e.Ja = g.o.Cc + "://" + a.texture)
            }
            b[c] ||
            (b[c] = {});
            b[c][d] = e
        }, ET: function (a, b) {
            if (a) for (var c = Object.keys(a), d = 0; d < c.length; d++) for (var e = c[d], f = Object.keys(a[e]), h = 0; h < f.length; h++) {
                var k = f[h];
                a[e][k] && this.G7(a[e][k], b, e, k)
            }
        }, vGa: function (a, b, c, d) {
            if (a) for (var e in a) if (a.hasOwnProperty(e) && g.a.kk(a[e], "object")) {
                var f = a[e];
                console.log(e + "--");
                var h = e;
                c && (h = c + ":" + e);
                if (f.detailedType) this.G7(f, b, h), this.ET(f.detailedType, b, h, f); else if (f.subType) this.ET(f.subType, b, h); else if (void 0 !== f.code) for (var k in d) d.hasOwnProperty(k) && !g.a.ka(["isDetailed",
                    "detailedType", "styles"], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k])
            }
        }, AV: function (a) {
            if (!this.em || this.em.zoom != a) {
                var b = g.a.Qh, c = {zoom: a}, d;
                for (d in this.be) if (this.be.hasOwnProperty(d)) {
                    var e = this.be[d];
                    c[d] = {};
                    for (var f in e) if (e.hasOwnProperty(f)) {
                        var h = e[f];
                        if (h) {
                            c[d][f] = {};
                            for (var k in h) h.hasOwnProperty(k) && void 0 !== h[k] && (c[d][f][k] = {}, h[k].Ye ? (b(h[k].Ye) ? c[d][f][k].Ye = h[k].Ye(a) : c[d][f][k].Ye = h[k].Ye, b(h[k].canvas) ? c[d][f][k].canvas = h[k].canvas(a) : c[d][f][k].canvas = h[k].canvas) : b(h[k]) ?
                                c[d][f][k] = h[k](a) : c[d][f][k] = h[k])
                        } else c[d][f] = h
                    }
                }
                this.em = c
            }
        }, styleChanged: function () {
            if (this.e.D.Ci) {
                var a = this.get("style");
                this.hl.SA || (this.hl = g.a.bind(this.hl, this), this.lq = g.a.bind(this.lq, this), this.hl.SA = !0);
                var b = g.a;
                if (a) {
                    var c = {};
                    this.ET(a, c);
                    this.be = c
                } else this.be = null;
                var d, e, f, h, k;
                this.be && (d = this.be[30001] && this.be[30001][1], e = this.be[30001] && this.be[30001][2], f = this.be["00001"] && this.be["00001"][1], h = this.be["00001"] && this.be["00001"][2], k = this.be[50001] && this.be[50001][1]);
                var l,
                    m, n, p, q, r, a = this.Hj;
                if (d) {
                    c = "rgba(0, 0, 0, 0)";
                    if (d.visible) {
                        var s = this.lq(b.G8(this.e.Ee.substr(1)), d.opacity, d.color, !0, a);
                        s && (c = this.Dt(s, d.visible, "rgba(0, 0, 0, 0)"), s = this.hl(b.qp(this.e.Ee.substr(1)), d.opacity, d.color, !0, a), l = this.Dt(s, d.visible))
                    }
                    this.e.Pu = c
                } else this.e.Pu = "";
                e && e.visible && (m = this.hl(b.qp(this.e.MH.substr(1)), e.opacity, e.color, !0, a), m = this.Dt(m, e.visible));
                f && f.visible && (n = this.hl(b.qp(this.e.qu.substr(1)), void 0, f.color, !0, a), n = this.Dt(n, f.visible), p = this.Dt(n, f.visible));
                h && h.visible && (d = h.color, !d && f && f.color && (d = f.color), p = this.hl(b.qp(this.e.qu.substr(1)), void 0, d, !0, a), p = this.Dt(p, h.visible));
                k && (k.visible ? (q = this.hl(b.Zk(this.e.XF[0]), void 0, k.fillColor, !0, a), q = this.Dt(q, k.visible), r = this.hl(b.Zk(this.e.XF[1]), void 0, k.strokeColor, !0, a), r = this.Dt(r, k.visible)) : (q = [1, 1, 1, 0], r = [1, 1, 1, 0]));
                this.nT && this.nT(l, m, n, [q, r], p);
                this.w$ ? this.w$(this.be) : this.set("display");
                delete this.em;
                this.AV(a)
            }
        }, Dt: function (a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] :
                [0, 0, 0, 0], d = g.a.Qh;
            if (d(a) && d(b)) {
                var e = a;
                a = function (a) {
                    return b(a) ? e(a) : c
                }
            }
            return a
        }, lq: function (a, b, c, d, e) {
            if (a) {
                if (void 0 !== b) return a = a.split(","), c = b, "function" === typeof b && (c = b(e)), a[3] = g.a.xb(c, 3) + ")", a.join(",");
                if (c) return "function" === typeof c.canvas ? d ? c.canvas : c.canvas(e) : c.canvas
            }
            return a
        }, hl: function (a, b, c, d, e) {
            if (a) {
                if (b) return c = b, "function" === typeof b && (c = b(e)), [a[0], a[1], a[2], g.a.xb(c, 3)];
                if (c) return "function" === typeof c.Ye ? d ? c.Ye : c.Ye(e) : c.Ye
            }
            return a
        }, sD: function (a, b) {
            var c = this.be;
            if (c && a) {
                var d = a.split(":"), e = d[0], d = d[1];
                if (c[e]) {
                    this.em && b && b == this.em.zoom && (c = this.em);
                    if (c[e][d]) return c[e][d];
                    if (c[e].all) return c[e].all
                }
            }
        }, QEa: function (a, b, c) {
            var d = this.be;
            if (d) {
                this.em && c && c == this.em.zoom && (d = this.em);
                if (b || 0 === b) if (b = d[a + ":" + b]) return b;
                return d[a]
            }
        }, km: function (a, b, c, d, e) {
            var f = null, h = a;
            d = d ? this.lq : this.hl;
            e = e || this.Hj;
            if (f = this.sD(b, e)) if ("function" === typeof f.visible && !f.visible(e) || !1 === f.visible) h = ""; else {
                var h = 1, k = "";
                if (c) if (f.fillColor || f.me) h = f.me, k = f.fillColor;
                else {
                    if (f.color || f.opacity) h = f.opacity, k = f.color
                } else if (f.strokeColor || f.rb) h = f.rb, k = f.strokeColor; else if (f.color || f.opacity) h = f.opacity, k = f.color;
                h = d(a, h, k, !1, e)
            }
            this.Es === b && (h = this.jv(h || a));
            return h
        }, $c: function (a, b, c) {
            var d = this.be;
            if (d) {
                this.em && c && c == this.em.zoom && (d = this.em);
                if (b || 0 === b) if (b = d[a + ":" + b]) return b;
                return d[a]
            }
        }, nv: function (a, b) {
            var c = null;
            return c = this.sD(a, b || this.Hj)
        }, zs: function (a, b, c, d) {
            c = c ? this.lq : this.hl;
            var e = null, f = a;
            d = d || this.Hj;
            (e = this.sD(b, d)) && (f = "function" === typeof e.visible &&
            !e.visible(d) || !1 === e.visible ? "" : c(a, e.opacity, e.color, !1, d));
            this.Es === b && (f = this.jv(f || a));
            return f
        }, Py: function (a, b, c, d, e, f) {
            var h = a, k = b, l = c, m = !0, n = !0, p, q = 1;
            f = f || this.Hj;
            var r = this.sD(d, f);
            r && ("function" === typeof r.visible && !r.visible(f) || !1 === r.visible || "function" === typeof r.PU && !r.PU(f) || !1 === r.PU ? (n = m = !1, h = k = l = "") : (h = this.lq(a, r.vya, r.uya, !1, f), k = this.lq(b, r.yya, r.xya, !1, f), l = this.lq(c, r.vma, r.backgroundColor, !1, f), m = "function" === typeof r.xk ? r.xk(f) : r.xk, r.fontSize && (p = "function" === typeof r.fontSize ?
                r.fontSize(f) : r.fontSize, p = 12 <= p ? p : 12, p = 22 >= p ? p : 22), p && g.l.Kc && (p *= 2)));
            f = !1;
            this.Es === d ? f = !0 : void 0 !== e && this.Es === d + "-" + e && (f = !0);
            f && (h = this.jv(h || a), k = this.jv(k || b), l = this.jv(l || c), q = 1 - 1.6 * this.AD, n = m = !0);
            return [h, k, l, m, n, q, p]
        }, Oy: function (a, b, c, d, e) {
            var f = null, h = a, k = b;
            d = d ? this.lq : this.hl;
            var l = e || this.Hj;
            if (f = this.sD(c, e)) "function" === typeof f.visible && !f.visible(l) || !1 === f.visible ? h = k = "" : (h = d(a, f.me, f.fillColor, !1, l), k = d(b, f.rb, f.strokeColor, !1, l));
            this.Es === c && (b = k || b, h = this.jv(h || a), k = this.jv(b));
            return [h, k]
        }
    };
    g.M.Sb.Ib(g.X2);
    g.M.canvas.Sb = g.M.Sb.extend({
        A: function (a) {
            arguments.callee.ma.apply(this, arguments)
        }, Bs: function (a) {
            if (!a.M) {
                var b = a.bm(this);
                b && !b.qoa && (a.M = b)
            }
            return a.M
        }, pc: function (a) {
            var b = this.e.R3();
            b && this.ZT !== b && this.e.D.Ci && (this.e.W8(b), this.ZT = b);
            this.e.Ya.Zr.style.cssText = "";
            var c = a.la, b = a.P, d = this.e.D.get("features"), e = a.size.width,
                f = a.size.height;
            this.Hj = "vw" === this.e.D.De.baseRender ? g.a.xb(b.zoom, 1) : a.P.oe;
            this.T = b.T;
            if (!this.Na || 1E4 < Math.abs(b.nb.x - this.Na.x) / this.T || 1E4 < Math.abs(b.nb.y - this.Na.y) /
                this.T) this.Na = b.nb;
            this.Na.x - b.nb.x < -g.a.Fa / 2 ? this.Na = new g.H(this.Na.x + g.a.Fa, this.Na.y) : this.Na.x - b.nb.x > g.a.Fa / 2 && (this.Na = new g.H(this.Na.x - g.a.Fa, this.Na.y));
            for (var h = 0; h < c.length; h += 1) {
                var k = c[h], l = this.Bs(k), m = c[h].ne();
                if (l && l.g) if (!m.visible || k.ZD || m.Za[0] > b.zoom || m.Za[1] < b.zoom || k.ha && 0 === k.ha.length) {
                    if (l = l.vj()) if (l.length) for (m = 0; m < l.length; m += 1) l[m].parentNode === this.K && this.K.removeChild(l[m]); else l.parentNode === this.K && this.K.removeChild(l)
                } else if (this.JJ(k, d)) {
                    l.pc(a, m);
                    l.lk &&
                    (a.ue = l.ue);
                    var k = l.vj(), n, p, q = l.transform;
                    if (!q || !k || l.Di && !this.e.D.Ra) c[h].zj && k.parentNode !== this.K && (this.K.appendChild(k), c[h].Ob = k); else {
                        c[h].Ob = k;
                        k.length || (k = [k], q = [q]);
                        for (var r = 0; r < k.length; r += 1) if (n = k[r], p = q[r], !p.bz) {
                            var s = p.translate.x, u = p.translate.y;
                            c[h].IJ || (s = g.a.xb(s, 2), u = g.a.xb(u, 2));
                            var v = p.scale;
                            1E-5 > Math.abs(s) && (s = 0);
                            1E-5 > Math.abs(u) && (u = 0);
                            var w = [];
                            w.push("position:absolute");
                            w.push("z-index:" + (p.Jk || c[h].get("zIndex")));
                            c[h].YC ? (w.push("top:" + Math.floor(f / 2 + u) + "px"), w.push("left:" +
                                Math.floor(e / 2 + s) + "px")) : n.P5 ? (w.push("height:" + n.height * v + "px"), w.push("width:" + n.width * v + "px"), w.push("top:" + (f / 2 - u * v) + "px"), w.push("left:" + (e / 2 - s * v) + "px")) : (1 !== v && (w.push(g.f.qt[g.f.qg] + "-origin:" + s + "px " + u + "px"), w.push(g.f.qt[g.f.qg] + ":scale3d(" + v + "," + v + ",1)")), w.push("top:" + Math.floor(f / 2 - u) + "px"), w.push("left:" + Math.floor(e / 2 - s) + "px"), w.push("display:block"), l.ll && (w.push("height:" + n.height + "px"), w.push("width:" + n.width + "px")));
                            l.IJ || 1 === m.opacity || "number" !== typeof m.opacity || w.push(g.f.t4(n,
                                m.opacity));
                            n.parentNode !== this.K && this.K.appendChild(n);
                            g.f.Y8(n, w.join(";"))
                        }
                    }
                }
            }
            a = this.e.Ya.Zr;
            k = this.e.Ya.q;
            c = this.e.Ya.B;
            g.f.qg && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.f.qg + "Origin"] = e / 2 + "px " + f / 2 + "px", a.style[g.f.qg] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", k.style.overflow = "visible", c.style.overflow = "visible") : (a.style.cssText = "", k.style.cssText = "-webkit-transform: translateZ(0);", c.style.cssText = "");
            this.e.jt = !1
        }, JJ: function (a, b) {
            if ("all" === b || void 0 === a.Yl) return !0;
            for (var c = 0, d = a.Yl.length; c < d; c++) if (g.a.ka(b, "region" === a.Yl[c] ? "bg" : a.Yl[c])) return !0;
            return !1
        }, zoomChanged: function () {
            var a = this.e.get("zoom");
            this.Hj = "vw" === this.e.D.De.baseRender ? g.a.xb(a, 1) : Math.round(a);
            this.be && this.AV(this.Hj)
        }
    });
    g.M.Ui = g.M.Zb.extend({
        A: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.X("reload", a, !0);
            var c = a.S.get("cacheSize");
            if (this.e && this.e.D) {
                var d = this.e.D.get("tileCacheSize");
                d && 0 < d && (c = d)
            }
            this.oa = new g.pg(c);
            var e = this;
            this.oa.lK.O1(function (a) {
                e.dB(a)
            });
            this.oa.zC = function (a) {
                return a.qb ? (a.qb.Tg -= 1, 0 == a.qb.Tg && (a.Cv = !1), delete a.qb, !0) : a.Cv ? a.Tg ? !1 : !0 : !0
            };
            this.jd = 1;
            this.ao = 50;
            this.tX = !0;
            this.g.oa = this.oa;
            this.rm = new g.yF(6, null, a.XQ);
            new g.yF(5, null, a.XQ)
        }, Jq: function () {
            this.clear();
            this.Jg = null;
            this.oa.clear();
            this.oa.zC = null;
            this.oa = this.oa.lK.TF = null;
            this.Lc && (this.Lc.G("tiles", this.dE, this), this.Lc.G("ack", this.cE, this), this.Lc.G("disable", this.aE, this), this.Lc = null);
            this.e.G("zoomend", this.dk, this);
            this.e.G("moveend", this.dk, this)
        }, reloadChanged: function () {
            this.g && (this.g.Ra = !1);
            this.oa.clear();
            this.reload = !0;
            this.set("display")
        }, yh: function (a, b, c) {
            function d(b) {
                a.loaded = !0;
                e.g && (a.status = "loaded", a.Ba = !0, a.ld = b, e.set("display", 0), "function" === typeof c && c())
            }

            var e = this;
            a.status = "loading";
            this.g.Do && this.g.Do.call(this, a, d, function () {
                a.loaded = !0;
                e.g && (a.status = "loaded", a.Ba = !0, e.set("display", 0), "function" === typeof c && c())
            })
        }, fIa: function (a, b, c, d) {
            var e = [];
            c = c || 18;
            b = Math.pow(2, b - c);
            for (var f = 0; f < a.length; f += 1) {
                var h = a[f].ta, k = Math.floor(h.x / b), h = Math.floor(h.y / b);
                if (d) {
                    if (k = c + "/" + k + "/" + h, (h = this.oa.get(k)) && "loaded" == h.status) continue
                } else h = new g.rr(c, k, h), k = h + "", h = new g.mb(h);
                !e[k] && h && (e.push(h), e[k] = 1)
            }
            return e
        }, OI: function (a, b) {
            var c = this, d = this;
            if (this.g.wH) {
                var e,
                    f, h, k, l, m, n, p = function () {
                        var p = 0;
                        for (e = a.length - 1; 0 <= e; e -= 1) f = a[e], p += f.length;
                        if (0 == p) return b.call(c, a), {wL: void 0};
                        d.iV = a;
                        for (e = a.length - 1; 0 <= e; e -= 1) for (f = a[e], h = [], k = [], f.$T = h, f.Ov = k, l = f.length - 1; 0 <= l; l -= 1) m = f[l], n = m.ta, c.g.e.Se.PE(n.x, n.y, n.z, function () {
                            var c = l;
                            return function (e) {
                                e ? h.push(f[c]) : k.push(f[c]);
                                p -= 1;
                                if (0 == p) {
                                    for (e = a.length - 1; 0 <= e; e -= 1) {
                                        var l = a[e];
                                        a[e] = l.$T;
                                        if (l.Ov) for (var m = l.Ov.length - 1; 0 <= m; m -= 1) {
                                            var n = l.Ov[m];
                                            n.status = "loaded";
                                            n.loaded = !0;
                                            n.Ba = !0
                                        }
                                    }
                                    b.call(d, a)
                                }
                            }
                        }())
                    }();
                if ("object" ===
                    typeof p) return p.wL
            } else b.call(this, a)
        }, uw: function (a, b, c) {
            if (a = this.oa.get(a + "/" + b + "/" + c)) {
                if (a.Cv) return a;
                if (a.qb) return a.qb;
                a.Cv = !0;
                a.Tg = 0;
                return a
            }
        }, lJ: function (a) {
            var b = a.ta;
            a = b.x;
            var c = b.y, b = b.z, d = Math.pow(2, b), e = (a + d) % d, f = e + d, d = e - d,
                h = null;
            e !== a && (h = this.uw(b, e, c));
            h || d === a || (h = this.uw(b, d, c));
            h || f === a || (h = this.uw(b, f, c));
            return h
        }, Gn: function (a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            if ((!this.lk || !this.hf && !this.he) && a.length) if (this.KK) this.bK = !0; else {
                for (var c =
                    a.length - 1; 0 <= c; c -= 1) {
                    var d = a[c];
                    if (d.length) for (var e = Math.pow(2, 20 - d[0].ta.z), c = d.length - 1; 0 <= c; c--) {
                        var f = d[c], h = f.ta;
                        h.T = e;
                        f.ra = {};
                        f.cl = 0;
                        if (10 > h.z) {
                            var k = this.lJ(f);
                            k && (f.qb = k, f.status = "loaded", f.Ba = !0, k.Tg += 1, f.cl = (h.x - k.ta.x) / Math.pow(2, h.z), d.splice(c, 1), this.set("display", 0))
                        }
                        this.oa.set(f.key, f);
                        !b && f.Je ? f.Je = !1 : f.status = "loading"
                    }
                }
                var l = this;
                this.OI(a, function (a) {
                    for (var c = a.length - 1; 0 <= c; c -= 1) {
                        var d = a[c];
                        if (d.length) if (l.Ei) {
                            if (l.e.jA) break;
                            var e = d[0].ta.z;
                            l.jw(d, l.ll ? 1 : 0);
                            for (var f = 0,
                                     h = 0; f < d.length;) l.XS(d.slice(10 * h, 10 * h + 10), e, b), f += 10, h += 1
                        } else for (e = function () {
                            var a = d.length;
                            return function () {
                                --a
                            }
                        }(), l.jw(d), l.Aq += d.length, f = d.length - 1; 0 <= f; f -= 1) l.yh(d[f], l.rm, e)
                    }
                })
            }
        }, Vy: function (a, b) {
            var c = this.oa.get(a + "");
            c || b || (c = new g.mb(a.eb()));
            return c
        }, bL: function (a, b) {
            return this.Fd * Math.pow(2, a - b)
        }, dB: function (a) {
            a.Ks && this.rm.u2(a.Ks);
            a.PK = !1;
            a.loaded = !1;
            this.Lf && this.Lf(a)
        }, uy: function (a, b) {
            var c = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0) || this.gb,
                d = a.Xd.x, e = a.Xd.y,
                f = a.kc.x, h = a.kc.y;
            new g.H(0, 0);
            var k = this.bL(20, c);
            b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new g.H(Math.floor(b[0] / k), Math.floor(b[1] / k)));
            d /= k;
            e /= k;
            d = {
                Ic: 0 === d % 1 ? d - 1 : Math.floor(d),
                tc: 0 === e % 1 ? e - 1 : Math.floor(e),
                Jc: Math.floor(f / k),
                hc: Math.floor(h / k)
            };
            d.tE = d.Ic - d.Jc + 1;
            d.CK = d.tc - d.hc + 1;
            d.z = c;
            d.T = this.T * Math.pow(2, this.zoom - c);
            d.Xy = Math.ceil(d.tE / 2);
            return d
        }, xv: function (a, b, c) {
            return b < a.Jc || b > a.Ic || c < a.hc || c > a.tc ? !1 : !0
        }, jw: function (a, b) {
            if (a.length) {
                var c =
                    this.nb.nd(this.Fd << 20 - a[0].ta.z), d = Math.floor(c.x), e = Math.floor(c.y);
                a.sort(function (a, c) {
                    var k = a.ta, l = c.ta, m = k.x - d, k = k.y - e, n = l.x - d, l = l.y - e;
                    return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
                })
            }
        }, clear: function () {
            this.rm.clear()
        }, ip: function (a, b) {
            this.wg = !1;
            this.clear();
            this.$i = b.$i;
            this.Zi = b.Zi;
            this.Fd = b.Fd;
            var c = a.P;
            this.Qf = b.Qf || a.P.Qf;
            this.ph = c.ph;
            this.size = a.size;
            this.rotation = c.rotation;
            this.nb = c.nb;
            this.Ha = a.P.Ha;
            this.Hf = a.Hf;
            this.he = a.he;
            this.hf = a.hf;
            this.zoom = c.zoom;
            this.oe = c.oe;
            this.gb = "AMap.MapBox" == this.g.S.CLASS_NAME ?
                Math.max(2, this.oe - g.o.Wn) : !1 === this.Ei && !this.g.qS && this.g.ja ? this.oe + 1 : this.oe;
            this.gf && this.gb > this.gf && (this.gb = this.gf);
            this.$o && this.gb < this.$o && (this.gb = this.$o);
            this.T = c.T;
            this.Hg = c.Hg;
            c = a.P.Ha;
            this.rk = this.uy(c, b.I);
            this.Jw = c.S$ ? this.uy(c.S$, b.I) : null;
            var c = this.rk, d = this.Ha.K9, e = null, e = d < this.zoom && this.Jw ? this.Jw : c,
                f = [], h = [], k, l = [], m = [], n = [], p = new g.rr(0, 0, 0), q, r = this.zoom,
                m = this.Pk || "", s = {}, u = {}, v, w, t, x, y, E;
            this.fe = 1E6 * Math.random() << 0;
            for (q = m.length - 1; 0 <= q; q -= 1) if (k = m[q], !(k.kx < b.opacity)) if (p.z =
                k.ta.z, p.x = k.ta.x, p.y = k.ta.y, p.z === this.gb) s[p + ""] |= 16; else if (p.z < this.gb) {
                if (s[p + ""] |= 64, this.$i) for (x = this.gb - p.z, v = Math.max(c.Jc, p.x << x), r = Math.min(c.Ic, (p.x + 1 << x) - 1), w = Math.max(c.hc, p.y << x), t = Math.min(c.tc, (p.y + 1 << x) - 1), p.z = this.gb, x = v; x <= r; x += 1) for (p.x = x, y = w; y <= t; y += 1) p.y = y, E = p + "", s[E] |= 32, u[E] = u[E] ? Math.max(k.ta.z, u[E]) : k.ta.z
            } else if (this.Zi) for (v = 1; p.z >= this.gb;) {
                s[p + ""] |= v;
                v = p.x >> 1;
                w = p.y >> 1;
                r = v << 1;
                t = w << 1;
                k = 0;
                for (x = 2; 0 < x; x -= 1) for (p.x = r + x, y = 2; 0 < y; y -= 1) p.y = t + y, s[p + ""] & 5 && (k += 1);
                p.z -= 1;
                p.x =
                    v;
                p.y = w;
                v = 4 === k ? 4 : 2
            }
            m = [];
            p.z = this.gb;
            q = !0;
            this.oa.G2();
            for (x = e.Jc; x <= e.Ic; x += 1) for (p.x = x, y = e.hc; y <= e.tc; y += 1) p.y = y, k = this.Vy(p), this.cu(k), v = !1, k.Ba ? (k.fe = this.fe, this.xv(c, x, y) && (m.push(k), this.Jl && (k.jd !== this.jd || 1 > k.kx) && (v = !0))) : (q = !1, this.xv(c, x, y) && (v = !0), k.status && !k.Je || this.oe !== d || this.Jw && !this.xv(this.Jw, x, y) || l.push(k)), v && n.push(k);
            q ? this.hD || (this.hD = !0) : this.g.Ra = !1;
            this.wg = q;
            m.length && this.hD && (f.push(m), m.wg = q);
            h.push(l);
            e = !1;
            if (this.Zi) {
                n = n.slice(0);
                l = [];
                for (q = n.length - 1; 0 <= q; q -=
                    1) k = n[q], s[k.key] & 4 || l.push(k);
                k = b.Za[1];
                for (r = this.gb + 1; n.length && r <= k; r += 1) {
                    m = [];
                    d = n;
                    n = [];
                    p.z = r;
                    for (q = d.length - 1; 0 <= q; q -= 1) if (x = d[q], v = s[x.key], v & 7) for (v = x.ta.x << 1, w = x.ta.y << 1, x = 1; 0 <= x; x -= 1) for (p.x = v + x, y = 1; 0 <= y; y -= 1) p.y = w + y, E = p + "", t = this.oa.sK(E), s[E] & 5 && t && t.Ba ? (t.KB = !0, t.fe = this.fe, m.push(t), this.cu(t)) : n.push(new g.mb(p.eb()));
                    m.length && (e = !0, f.push(m))
                }
                n = l
            }
            if (!e && this.$i) for (x = !f.length || this.ll ? b.Za[0] : Math.max(b.Za[0], this.gb - 2), Math.max(x, this.gb - this.iha), r = this.gb - 1; n.length && r >= x; r -= 1) {
                m =
                    [];
                y = {};
                d = n;
                n = [];
                for (q = d.length - 1; 0 <= q; q -= 1) k = d[q], p.z = r, p.x = k.ta.x >> 1, p.y = k.ta.y >> 1, k = this.Vy(p), y[k.key] || (y[k.key] = 1, v = !1, k.Ba && (!this.ija || s[k.key] & 64) ? (p.x = Math.min(c.Ic, Math.max(c.Jc, p.x << this.gb - r)), p.y = Math.min(c.tc, Math.max(c.hc, p.y << this.gb - r)), p.z = this.gb, E = p + "", "number" === typeof u[E] && k.ta.z > u[E] ? v = !0 : k.KB = !0, k.fe = this.fe, m.push(k), this.cu(k)) : v = !0, v && n.push(k));
                m.length && f.push(m)
            }
            this.iV = h;
            this.Jv = this.Aq = 0;
            this.Gn(h);
            this.Jg = f;
            this.g.set("tiles", f)
        }, cu: function (a) {
            this.oa.y6(a.JFa)
        },
        KR: function (a, b) {
            for (var c = [], d = this.e.D.getCoordsBoundByZoom(a), d = this.uy(d, b, a), e = d.Jc; e < d.Ic; e++) for (var f = d.hc; f < d.tc; f++) {
                var h = [a, e, f].join("/");
                this.oa.Nd(h) || c.push(new g.mb(new g.rr(a, e, f), !0))
            }
            return c
        }, QX: function () {
            var a = this.e.D;
            return a.b8 && a.get("preloadMode") && 200 <= this.oa.Kp && this.g.S.wq() && "stable" != this.Hf && this.ay && this.ay() && this.zoom !== this.gb
        }, oE: function (a, b) {
            var c = b.I, d = b.Za;
            if (this.QX() && this.gb >= d[0] + 1) {
                var d = [], e = null,
                    e = "zoomOut" === this.Hf ? Math.floor(this.zoom) : Math.ceil(this.zoom),
                    e = this.KR(e, c);
                e.length && d.push(e);
                d.length && this.Gn(d, !0)
            }
        }
    });
    g.M.ce.Ui = g.M.Ui.extend({
        A: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.ao = 120;
            this.Ei = !1;
            this.Zg();
            this.gf = a.gf;
            this.$o = a.$o
        }, vj: function () {
            return this.Ob
        }, Zg: function () {
            this.Ob = document.createElement("div");
            this.Ob.className = this.g.S.get("className") || "amap-layer";
            this.ev = document.createDocumentFragment()
        }, $v: function (a) {
            var b = Math.pow(2, a.P.zoom - this.Df), c = a.P.nb.bb(this.Ls).nd(this.ym);
            this.transform = {translate: this.transform.translate.add(c), scale: b, rotate: 0};
            this.nb = a.P.nb
        },
        RP: function (a, b) {
            this.Na = this.J.Na;
            this.Df = this.oe;
            this.ym = this.Hg;
            this.ze = !1;
            this.currentTime = +new Date;
            this.FV = b.FV;
            var c = this.rk;
            this.Jl = this.ao && b.aI;
            var d = this.Jg, e = 256 * c.tE, c = 256 * c.CK;
            this.he = this.zoom << 0 !== this.zoom;
            var f = this.nb.bb(this.Na);
            f.x < -g.a.Fa / 2 ? f.x += g.a.Fa : f.x > g.a.Fa / 2 && (f.x -= g.a.Fa);
            this.dQ = f.nd(this.Hg);
            return [d, e, c, b]
        }, Nz: function (a, b) {
            var c = this.RP(a, b);
            this.dt.apply(this, c);
            this.Oe(a);
            this.wg && !this.g.Ra && (c = this.g, c.Ra = !0, c.Ld ? c.qa("renderComplete") : (c.Ld = !0, c.qa("complete")))
        },
        pc: function (a, b) {
            this.up = a.up;
            this.hf = a.hf;
            this.ip(a, b);
            this.Ls && g.l.Zl && (a.he || a.hf) ? this.$v(a, b) : this.Nz(a, b);
            this.Ls = this.nb;
            this.ze && this.set("display", 0)
        }, Zv: function () {
            for (var a = this.Ob.childNodes, b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].jd !== this.jd && this.Ob.removeChild(a[b])
        }, sE: function (a, b) {
            return a.hc === b.hc && a.Jc === b.Jc && a.tc === b.tc && a.Ic === b.Ic
        }, dt: function (a) {
            var b = this.jd;
            this.jd += 1;
            var c = !1, d, e, f;
            e = !1;
            var h = [], k, l;
            for (d = a.length - 1; 0 <= d; d -= 1) if (f = a[d], f.length) {
                e = f[0].ta.z;
                var m, n, p = this.bL(this.oe,
                    e), q = !1;
                this.lk && f.wg && f[0].ta.z == this.gb && (k = [], l = [], q = !0);
                for (var r = f.length - 1; 0 <= r; r -= 1) {
                    n = f[r];
                    q && n.ha && (k.push.apply(k, n.ha), l.push(n.ta + ""));
                    this.qU(n);
                    if (this.Na === n.Na && n.Df === this.Df) {
                        var s = n.ld;
                        if (s && s.parentNode === this.Ob && 1 === n.kx) {
                            h.push(n);
                            s.jd = this.jd;
                            n.jd = this.jd;
                            continue
                        }
                    }
                    n.Na = this.Na;
                    n.Df = this.Df;
                    m = n.ta;
                    var c = !0,
                        u = (new g.H((m.x << 20 - e) * this.Fd, (m.y << 20 - e) * this.Fd)).bb(this.Na),
                        u = u.nd(this.Hg);
                    u.x = g.a.xb(u.x, 1);
                    u.y = g.a.xb(u.y, 1);
                    var v = 1;
                    if (!n.pY || this.tX && n.jd !== b) n.pY = this.currentTime;
                    this.Jl && !n.KB ? (v = Math.max(0, Math.abs(m.z - this.zoom) - 1), v = Math.min(1, (this.currentTime - n.pY) / (1 / Math.pow(1.32, v) * this.ao)), 1 !== v && (this.ze = !0)) : n.KB = !1;
                    n.jd = this.jd;
                    n.kx = v;
                    n.Ba ? (s = n.ld, !s && n.qb && n.qb.ld && ("CANVAS" === n.qb.ld.tagName ? (s = document.createElement("canvas"), s.width = n.qb.ld.width, s.height = n.qb.ld.height, s.getContext("2d").drawImage(n.qb.ld, 0, 0, s.width, s.height), n.ld = s, n.qb.Tg -= 1, n.qb = null, n.cl = 0) : "IMG" === n.qb.ld.tagName ? (s = document.createElement("img"), s.src = n.qb.ld.src, n.ld = s, n.qb.Tg -= 1,
                        n.qb = null, n.cl = 0) : s = n.qb.ld), 0 !== v && s && (this.k4(s, u.x, u.y, p, p, v, m.z), s.parentNode !== this.Ob && (g.l.Ai && "overlayer" === this.g.get("type") && (s.style.display = "none"), this.ev.appendChild(s)), s.jd = this.jd, n.oe = this.oe, h.push(n))) : n.fe = null
                }
                e = !0
            }
            this.lk && k && (r = l.sort().join(";"), k.KS = r, r !== this.ue.KS && (this.ue = k));
            1 < a.length && (this.ze = !0);
            this.Pk = h;
            this.Zv();
            this.Ob.appendChild(this.ev);
            return c || !e
        }, qU: function () {
        }, Oe: function () {
            this.transform = {
                translate: this.dQ,
                scale: Math.pow(2, this.zoom - this.oe),
                rotate: 0
            }
        }
    });
    window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.DQ = function (a, b, c, d, e) {
        "undefined" === typeof e && (e = [10, 10]);
        this.moveTo(a, b);
        var f = c - a, h = d - b, k = Math.floor(Math.sqrt(f * f + h * h));
        d = f / k;
        c = h / k;
        e.Fg = 0;
        for (var l = [], f = this.uI, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.Fg += e[q], l[q] = {
            cD: e[q] * d,
            dD: e[q] * c,
            hz: h += e[q]
        }, f -= e[q], 0 > f && !p && (m = q, n = -f, p = !0);
        for (p = 0; n + p <= k;) n < e[m] ? (f = n * d, h = n * c) : (f = l[m].cD, h = l[m].dD), a += f, b += h, this.JE ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.JE = !this.JE, n = e[(m + 1) %
        e.length], m = (m + 1) % e.length;
        k -= p;
        a += k * d;
        b += k * c;
        this.JE ? this.moveTo(a, b) : this.lineTo(a, b);
        this.uI = (this.uI + p + k) % e.Fg
    }, window.CanvasRenderingContext2D.prototype.Eoa = function (a, b, c, d) {
        "undefined" === typeof d && (d = [10, 10]);
        var e = 2 * Math.PI * c, f = 0 >= d ? e : Math.round(e / (d[0] + d[1])),
            h = (d[0] + d[1]) / e * 2 * Math.PI;
        d = d[0] / e * 2 * Math.PI;
        for (e = 0; e < f; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke()
    });
    g.M.Le.Hl = g.M.Ui.extend({
        A: function (a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.Zg()
        }, OR: function () {
            return this.$a.$U
        }, vj: function () {
            return this.Ob
        }, Zg: function () {
            this.Ob = document.createElement("div");
            this.Ob.className = "amap-markers";
            this.$a = new g.M.Le.hd(this.Ob);
            this.$a.g = this.g;
            this.J.K.appendChild(this.Ob)
        }, wt: function (a, b) {
            this.ev = b.ev;
            this.kz = b;
            this.Qf = a.P.Qf;
            this.T = a.P.T;
            this.zoom = a.P.zoom;
            this.size = a.size;
            this.Ha = a.P.Ha;
            this.Dq = a.T;
            this.ob = a.P.nb;
            this.ph = a.P.ph;
            var c = !1;
            if (!this.Na ||
                500 < Math.abs(this.ob.x - this.Na.x) / this.T || 500 < Math.abs(this.ob.y - this.Na.y) / this.T) c = !0;
            if (c || this.zoom << 0 !== this.zoom || this.Df !== this.zoom) this.Na = this.ob, this.Df = this.zoom
        }, mv: function (a) {
            var b = a.P.Ha.Ac.y * this.T;
            a = a.P.Ha.Ac.x * this.T;
            return [this.ob.x - a, this.ob.y - b, this.ob.x + a, this.ob.y + b]
        }, Zv: function () {
            if (this.Th && this.Th) for (var a in this.Th) if (this.Th.hasOwnProperty(a)) {
                var b = this.Th[a];
                b.fe !== this.fe && b.fa && this.J.Nl.appendChild(b.fa)
            }
        }, pc: function (a, b) {
            this.fe = 1E6 * Math.random() << 0;
            this.wt(a,
                b);
            this.P = a.P;
            this.size = a.size;
            var c = this.g;
            this.Fd = 256;
            var d, e;
            e = this.mv(a);
            var f = 0;
            c.nm && (f = 50 * this.T);
            e[0] -= this.g.Bf * this.T + f;
            e[1] -= this.g.jg * this.T + f;
            e[2] += this.g.Bf * this.T + f;
            e[3] += this.g.jg * this.T + f;
            c = c.yn(e);
            for (d in c) c.hasOwnProperty(d) && (c[d].fe = this.fe, c[d].l6 = this);
            this.Zv(c);
            this.wt.call(this.$a, a, b);
            this.$a.yE(c);
            this.Th = c;
            this.Oe(a)
        }, Oe: function () {
            var a = Math.pow(2, this.zoom - this.oe);
            this.transform = {translate: this.Na.bb(this.ob).nd(this.T), scale: a, rotate: 0}
        }
    });
    g.M.Le.hd = g.da.extend({
        A: function (a) {
            this.ql = a
        }, yE: function (a, b) {
            var c = document.createDocumentFragment(), d = b && b.CS ? null : {}, e = !0, f;
            for (f in a) if (a.hasOwnProperty(f)) {
                var h = a[f], k, l = h.get("params");
                if (h.fa) k = h.fa; else {
                    k = g.f.create("div");
                    k.className = "amap-marker";
                    var m = l.Vg, n = l.j9, p = l.LJ;
                    m && k.appendChild(m);
                    n && k.appendChild(n);
                    p && !1 !== m.BM && k.appendChild(p);
                    h.fa = k;
                    h.Vg = m;
                    if (n = l.title) m.title = n;
                    this.g.nm = !0;
                    -1 === g.a.indexOf(this.g.bh, h) && this.g.bh.push(h);
                    h.se = !0
                }
                var p = l.offset, q = p.x, r = p.y, s = l.textAlign,
                    u = l.verticalAlign, n = l.anchor, m = !1, v, w;
                n && (n = n.split("-"), 2 === n.length ? (s = n[1], u = n[0]) : 1 === n.length && "center" === n[0] && (s = "center", u = "middle"));
                var t, n = t = 0;
                if ("AMap.Text" == h.Vp || "AMap.Marker" == h.Vp) {
                    if (w = v = 0, k.parentNode !== this.ql && d && (m = !0, d[f] = h, e = !1), !m) {
                        h.se || !h.Xj ? (t = g.f.No(h.Vg), h.Xj = t) : t = h.Xj;
                        n = t[0];
                        t = t[1];
                        switch (s) {
                            case "center":
                                v = n / 2;
                                break;
                            case "right":
                                v = n
                        }
                        switch (u) {
                            case "middle":
                                w = t / 2;
                                break;
                            case "bottom":
                                w = t
                        }
                        q -= v;
                        r -= w
                    }
                } else v = -q, w = -r;
                var x, y;
                if (!m) if (h.se) {
                    var E = [];
                    x = this.Mu(h.W.za);
                    h.Na =
                        this.Na;
                    y = l.pF;
                    r = Math.round(x[1] + r + y.y);
                    q = Math.round(x[0] + q + y.x);
                    E.push("top:" + r + "px");
                    E.push("left:" + q + "px");
                    E.push("z-index:" + (l.W5 ? this.g.fr + 10 : l.zIndex));
                    if (!g.l.Ve) {
                        r = v;
                        q = w;
                        if ("AMap.Marker" == h.Vp) {
                            r = -p.x;
                            q = -p.y;
                            switch (s) {
                                case "center":
                                    r = -p.x + n / 2;
                                    q = -p.y + t / 2;
                                    break;
                                case "right":
                                    r = -p.x + n
                            }
                            switch (u) {
                                case "middle":
                                    q = -p.y + t / 2;
                                    break;
                                case "bottom":
                                    q = -p.y + t
                            }
                        }
                        E.push(g.f.G4(k, l.Tp, {x: r, y: q}))
                    }
                    E.push("display:" + (l.visible ? "block" : "none") + ";");
                    k.style.cssText = E.join(";");
                    if ((p = l.label) && p.content) {
                        l = l.LJ;
                        s =
                            p.direction;
                        r = null;
                        h.Fv || (r = g.f.No(l), h.Fv = r);
                        u = (r = h.Fv) && r[0];
                        w = r && r[1];
                        q = r = 0;
                        if (s && u && w) switch (s) {
                            case "top":
                                r = -w;
                                q = (n - u) / 2;
                                break;
                            case "right":
                                r = (t - w) / 2;
                                q = n;
                                break;
                            case "bottom":
                                r = t;
                                q = (n - u) / 2;
                                break;
                            case "left":
                                r = (t - w) / 2;
                                q = -u;
                                break;
                            case "center":
                                r = (t - w) / 2, q = (n - u) / 2
                        }
                        p.offset ? (r = r + p.offset.y + "px", q = q + p.offset.x + "px") : (r += "px", q += "px");
                        l.style.top = r;
                        l.style.left = q
                    }
                } else if (h.hba || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.ql || h.Na !== this.Na) x = this.Mu(h.W.za), h.Na = this.Na, y = l.pF,
                    r = Math.round(x[1] + r + y.y), q = Math.round(x[0] + q + y.x), k.style.top = r + "px", k.style.left = q + "px";
                h.zoom = this.zoom;
                k.parentNode !== this.ql && (g.l.Ai && g.a.iepngFix(k), c.appendChild(k));
                h.se = m;
                k.NB = this.ql
            }
            this.ql.appendChild(c);
            e || this.yE(d, {CS: !0})
        }, Mu: function (a) {
            var b = a[0] - this.Na.x;
            b > g.a.Fa / 2 ? b -= g.a.Fa : b < -g.a.Fa / 2 && (b += g.a.Fa);
            return [b / this.T, (a[1] - this.Na.y) / this.T]
        }
    });
    var Oc = g.o, Uc = g.l, hc = g.da.Tu, Vc = g.Xva, fa = document, Wc = !0, Xc = [];
    Uc.Uf && Xc.push("touch");
    Uc.ba || Xc.push("mouse");
    Uc.eL && (Xc.push("vectorlayer", "overlay"), Uc.sp ? Xc.push("wgl") : Xc.push("cgl"));
    if (Vc) {
        for (var Yc = [], Zc = Vc.split(","), Kc = 0; Kc < Zc.length; Kc += 1) {
            var $c = Zc[Kc];
            hc[$c] && Yc.push.apply(Yc, hc[$c]);
            Yc.push($c)
        }
        Xc = Xc.concat(Yc)
    }
    Xc.push("sync");
    if (Uc.Kv) {
        var ad = !0, bd = [], cd = [];
        try {
            for (var Kc = 0, dd = Xc.length; Kc < dd; Kc++) {
                var ed = JSON.parse(localStorage.getItem("_AMap_" + Xc[Kc]));
                if (ed && ed.version === Oc.Fk) bd.push(ed.script), ed.css && cd.push(ed.css); else {
                    bd = void 0;
                    ad = !1;
                    break
                }
            }
        } catch (fd) {
            bd = cd = void 0, ad = !1
        }
        if (ad) try {
            cd.length && gd();
            var hd = bd.join(";");
            eval(hd)
        } catch (id) {
            Wc = !1
        } else Wc = !1
    } else Wc = !1;
    if (Wc) for (Kc = 0; Kc < Xc.length; Kc += 1) g.ub.SC(Xc[Kc]).status = 1; else Oc.PJ = !1, jd();

    function kd() {
        for (var a = fa.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1) if (0 === a[c].src.indexOf(Oc.Hb + "/maps?")) {
            b = a[c];
            break
        }
        return Oc.Nc || b && b.async
    }

    function jd() {
        var a = Oc.Hb + "/maps/modules?v=" + Oc.Xl + "&key=" + Oc.key + "&vrs=" + Oc.Fk + "&m=" + Xc.join(",");
        kd() ? ld(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function () {
            fa.getElementById("amap_plus_js") || ld(a)
        }, 1))
    }

    function ld(a) {
        var b = fa.createElement("script");
        b.charset = "utf-8";
        b.src = a;
        b.id = "amap_plus_js";
        (a = fa.head || fa.getElementsByTagName("head")[0] || fa.body) && a.appendChild(b)
    }

    function gd() {
        var a = cd.join("\n"), b = fa.createElement("style");
        b.type = "text/css";
        -1 === Oc.Hb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, Oc.Hb.split("://")[1]));
        "https" === Oc.Cc && (a = a.replace(/http:/gi, "https:"));
        if (b.styleSheet) {
            var c = function () {
                try {
                    b.styleSheet.cssText = a
                } catch (c) {
                }
            };
            b.styleSheet.disabled ? setTimeout(c, 10) : c()
        } else b.appendChild(fa.createTextNode(a));
        c = fa.head || fa.getElementsByTagName("head")[0];
        2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
    }
    ;
    (typeof _cssload_ == "function") && _cssload_("logo", ".amap-logo{display:block!important;pointer-events:none;}", true)
})(["158c902c6fbe986ef1cc2f9099a1aa4a", [115.438705, 28.157839, 116.565482, 29.122388, 115.892151, 28.676493], "https://webapi.amap.com", 1, "1.4.24", null, "360100", "", true, false, false, true, "20230103011500-20201123-1", false, "A", "3_23_10_10_00", "https", "webapi.amap.com", 1, "0"])
