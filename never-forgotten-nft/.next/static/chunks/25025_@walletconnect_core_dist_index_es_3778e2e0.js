(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/core/dist/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CORE_CONTEXT": (()=>Z),
    "CORE_DEFAULT": (()=>et),
    "CORE_PROTOCOL": (()=>De),
    "CORE_STORAGE_OPTIONS": (()=>tt),
    "CORE_STORAGE_PREFIX": (()=>z),
    "CORE_VERSION": (()=>Ze),
    "CRYPTO_CLIENT_SEED": (()=>ye),
    "CRYPTO_CONTEXT": (()=>it),
    "CRYPTO_JWT_TTL": (()=>st),
    "Core": (()=>Br),
    "Crypto": (()=>At),
    "ECHO_CONTEXT": (()=>Pt),
    "ECHO_URL": (()=>xt),
    "EXPIRER_CONTEXT": (()=>Rt),
    "EXPIRER_DEFAULT_TTL": (()=>vr),
    "EXPIRER_EVENTS": (()=>C),
    "EXPIRER_STORAGE_VERSION": (()=>Tt),
    "EchoClient": (()=>Ht),
    "Expirer": (()=>Gt),
    "HISTORY_CONTEXT": (()=>Ct),
    "HISTORY_EVENTS": (()=>I),
    "HISTORY_STORAGE_VERSION": (()=>_t),
    "JsonRpcHistory": (()=>jt),
    "KEYCHAIN_CONTEXT": (()=>rt),
    "KEYCHAIN_STORAGE_VERSION": (()=>nt),
    "KeyChain": (()=>Ot),
    "MESSAGES_CONTEXT": (()=>ot),
    "MESSAGES_STORAGE_VERSION": (()=>at),
    "MessageTracker": (()=>zt),
    "PAIRING_CONTEXT": (()=>vt),
    "PAIRING_DEFAULT_TTL": (()=>wr),
    "PAIRING_EVENTS": (()=>V),
    "PAIRING_RPC_OPTS": (()=>F),
    "PAIRING_STORAGE_VERSION": (()=>It),
    "PENDING_SUB_RESOLUTION_TIMEOUT": (()=>wt),
    "PUBLISHER_CONTEXT": (()=>ct),
    "PUBLISHER_DEFAULT_TTL": (()=>ht),
    "Pairing": (()=>qt),
    "RELAYER_CONTEXT": (()=>dt),
    "RELAYER_DEFAULT_LOGGER": (()=>ut),
    "RELAYER_DEFAULT_PROTOCOL": (()=>lt),
    "RELAYER_DEFAULT_RELAY_URL": (()=>me),
    "RELAYER_EVENTS": (()=>v),
    "RELAYER_FAILOVER_RELAY_URL": (()=>be),
    "RELAYER_PROVIDER_EVENTS": (()=>f),
    "RELAYER_RECONNECT_TIMEOUT": (()=>pt),
    "RELAYER_SDK_VERSION": (()=>Dt),
    "RELAYER_STORAGE_OPTIONS": (()=>fr),
    "RELAYER_SUBSCRIBER_SUFFIX": (()=>gt),
    "RELAYER_TRANSPORT_CUTOFF": (()=>yt),
    "Relayer": (()=>kt),
    "STORE_STORAGE_VERSION": (()=>mt),
    "SUBSCRIBER_CONTEXT": (()=>ft),
    "SUBSCRIBER_DEFAULT_TTL": (()=>Er),
    "SUBSCRIBER_EVENTS": (()=>S),
    "SUBSCRIBER_STORAGE_VERSION": (()=>Et),
    "Store": (()=>Vt),
    "Subscriber": (()=>Ut),
    "TRUSTED_VERIFY_URLS": (()=>St),
    "VERIFY_CONTEXT": (()=>ee),
    "VERIFY_FALLBACK_SERVER": (()=>te),
    "VERIFY_SERVER": (()=>k),
    "Verify": (()=>Yt),
    "WALLETCONNECT_CLIENT_ID": (()=>bt),
    "default": (()=>ie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/events/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/keyvaluestorage/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/heartbeat/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__ = __turbopack_context__.i("[project]/node_modules/pino/browser.js [app-client] (ecmascript) <export default as pino>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/types/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/relay-auth/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/utils/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/uint8arrays/esm/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uint8arrays/esm/src/to-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/time/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/jsonrpc-provider/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/jsonrpc-provider/dist/esm/provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash.isequal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$fetch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/fetch/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Ji(n, e) {
    if (n.length >= 255) throw new TypeError("Alphabet too long");
    for(var t = new Uint8Array(256), i = 0; i < t.length; i++)t[i] = 255;
    for(var s = 0; s < n.length; s++){
        var r = n.charAt(s), o = r.charCodeAt(0);
        if (t[o] !== 255) throw new TypeError(r + " is ambiguous");
        t[o] = s;
    }
    var a = n.length, h = n.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
    function g(u) {
        if (u instanceof Uint8Array || (ArrayBuffer.isView(u) ? u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : Array.isArray(u) && (u = Uint8Array.from(u))), !(u instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (u.length === 0) return "";
        for(var p = 0, _ = 0, D = 0, P = u.length; D !== P && u[D] === 0;)D++, p++;
        for(var x = (P - D) * d + 1 >>> 0, E = new Uint8Array(x); D !== P;){
            for(var O = u[D], N = 0, R = x - 1; (O !== 0 || N < _) && R !== -1; R--, N++)O += 256 * E[R] >>> 0, E[R] = O % a >>> 0, O = O / a >>> 0;
            if (O !== 0) throw new Error("Non-zero carry");
            _ = N, D++;
        }
        for(var A = x - _; A !== x && E[A] === 0;)A++;
        for(var j = h.repeat(p); A < x; ++A)j += n.charAt(E[A]);
        return j;
    }
    function m(u) {
        if (typeof u != "string") throw new TypeError("Expected String");
        if (u.length === 0) return new Uint8Array;
        var p = 0;
        if (u[p] !== " ") {
            for(var _ = 0, D = 0; u[p] === h;)_++, p++;
            for(var P = (u.length - p) * l + 1 >>> 0, x = new Uint8Array(P); u[p];){
                var E = t[u.charCodeAt(p)];
                if (E === 255) return;
                for(var O = 0, N = P - 1; (E !== 0 || O < D) && N !== -1; N--, O++)E += a * x[N] >>> 0, x[N] = E % 256 >>> 0, E = E / 256 >>> 0;
                if (E !== 0) throw new Error("Non-zero carry");
                D = O, p++;
            }
            if (u[p] !== " ") {
                for(var R = P - D; R !== P && x[R] === 0;)R++;
                for(var A = new Uint8Array(_ + (P - R)), j = _; R !== P;)A[j++] = x[R++];
                return A;
            }
        }
    }
    function L(u) {
        var p = m(u);
        if (p) return p;
        throw new Error(`Non-${e} character`);
    }
    return {
        encode: g,
        decodeUnsafe: m,
        decode: L
    };
}
var Xi = Ji, Wi = Xi;
const Ue = (n)=>{
    if (n instanceof Uint8Array && n.constructor.name === "Uint8Array") return n;
    if (n instanceof ArrayBuffer) return new Uint8Array(n);
    if (ArrayBuffer.isView(n)) return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    throw new Error("Unknown type, must be binary type");
}, Qi = (n)=>new TextEncoder().encode(n), Zi = (n)=>new TextDecoder().decode(n);
class es {
    constructor(e, t, i){
        this.name = e, this.prefix = t, this.baseEncode = i;
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type");
    }
}
class ts {
    constructor(e, t, i){
        if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(e) {
        return $e(this, e);
    }
}
class is {
    constructor(e){
        this.decoders = e;
    }
    or(e) {
        return $e(this, e);
    }
    decode(e) {
        const t = e[0], i = this.decoders[t];
        if (i) return i.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const $e = (n, e)=>new is({
        ...n.decoders || {
            [n.prefix]: n
        },
        ...e.decoders || {
            [e.prefix]: e
        }
    });
class ss {
    constructor(e, t, i, s){
        this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new es(e, t, i), this.decoder = new ts(e, t, s);
    }
    encode(e) {
        return this.encoder.encode(e);
    }
    decode(e) {
        return this.decoder.decode(e);
    }
}
const Q = ({ name: n, prefix: e, encode: t, decode: i })=>new ss(n, e, t, i), K = ({ prefix: n, name: e, alphabet: t })=>{
    const { encode: i, decode: s } = Wi(t, e);
    return Q({
        prefix: n,
        name: e,
        encode: i,
        decode: (r)=>Ue(s(r))
    });
}, rs = (n, e, t, i)=>{
    const s = {};
    for(let d = 0; d < e.length; ++d)s[e[d]] = d;
    let r = n.length;
    for(; n[r - 1] === "=";)--r;
    const o = new Uint8Array(r * t / 8 | 0);
    let a = 0, h = 0, l = 0;
    for(let d = 0; d < r; ++d){
        const g = s[n[d]];
        if (g === void 0) throw new SyntaxError(`Non-${i} character`);
        h = h << t | g, a += t, a >= 8 && (a -= 8, o[l++] = 255 & h >> a);
    }
    if (a >= t || 255 & h << 8 - a) throw new SyntaxError("Unexpected end of data");
    return o;
}, ns = (n, e, t)=>{
    const i = e[e.length - 1] === "=", s = (1 << t) - 1;
    let r = "", o = 0, a = 0;
    for(let h = 0; h < n.length; ++h)for(a = a << 8 | n[h], o += 8; o > t;)o -= t, r += e[s & a >> o];
    if (o && (r += e[s & a << t - o]), i) for(; r.length * t & 7;)r += "=";
    return r;
}, y = ({ name: n, prefix: e, bitsPerChar: t, alphabet: i })=>Q({
        prefix: e,
        name: n,
        encode (s) {
            return ns(s, i, t);
        },
        decode (s) {
            return rs(s, i, t, n);
        }
    }), os = Q({
    prefix: "\0",
    name: "identity",
    encode: (n)=>Zi(n),
    decode: (n)=>Qi(n)
});
var as = Object.freeze({
    __proto__: null,
    identity: os
});
const hs = y({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var cs = Object.freeze({
    __proto__: null,
    base2: hs
});
const ls = y({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var us = Object.freeze({
    __proto__: null,
    base8: ls
});
const ds = K({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var gs = Object.freeze({
    __proto__: null,
    base10: ds
});
const ps = y({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
}), Ds = y({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var ys = Object.freeze({
    __proto__: null,
    base16: ps,
    base16upper: Ds
});
const ms = y({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
}), bs = y({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
}), fs = y({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
}), Es = y({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
}), ws = y({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
}), vs = y({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
}), Is = y({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
}), Cs = y({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
}), _s = y({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var Rs = Object.freeze({
    __proto__: null,
    base32: ms,
    base32upper: bs,
    base32pad: fs,
    base32padupper: Es,
    base32hex: ws,
    base32hexupper: vs,
    base32hexpad: Is,
    base32hexpadupper: Cs,
    base32z: _s
});
const Ts = K({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Ss = K({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var Ps = Object.freeze({
    __proto__: null,
    base36: Ts,
    base36upper: Ss
});
const xs = K({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Os = K({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var As = Object.freeze({
    __proto__: null,
    base58btc: xs,
    base58flickr: Os
});
const zs = y({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
}), Ns = y({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
}), Ls = y({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
}), Us = y({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var $s = Object.freeze({
    __proto__: null,
    base64: zs,
    base64pad: Ns,
    base64url: Ls,
    base64urlpad: Us
});
const Fe = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), Fs = Fe.reduce((n, e, t)=>(n[t] = e, n), []), ks = Fe.reduce((n, e, t)=>(n[e.codePointAt(0)] = t, n), []);
function Bs(n) {
    return n.reduce((e, t)=>(e += Fs[t], e), "");
}
function Ms(n) {
    const e = [];
    for (const t of n){
        const i = ks[t.codePointAt(0)];
        if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
        e.push(i);
    }
    return new Uint8Array(e);
}
const Ks = Q({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: Bs,
    decode: Ms
});
var Vs = Object.freeze({
    __proto__: null,
    base256emoji: Ks
}), qs = Be, ke = 128, js = 127, Gs = ~js, Ys = Math.pow(2, 31);
function Be(n, e, t) {
    e = e || [], t = t || 0;
    for(var i = t; n >= Ys;)e[t++] = n & 255 | ke, n /= 128;
    for(; n & Gs;)e[t++] = n & 255 | ke, n >>>= 7;
    return e[t] = n | 0, Be.bytes = t - i + 1, e;
}
var Hs = de, Js = 128, Me = 127;
function de(n, i) {
    var t = 0, i = i || 0, s = 0, r = i, o, a = n.length;
    do {
        if (r >= a) throw de.bytes = 0, new RangeError("Could not decode varint");
        o = n[r++], t += s < 28 ? (o & Me) << s : (o & Me) * Math.pow(2, s), s += 7;
    }while (o >= Js)
    return de.bytes = r - i, t;
}
var Xs = Math.pow(2, 7), Ws = Math.pow(2, 14), Qs = Math.pow(2, 21), Zs = Math.pow(2, 28), er = Math.pow(2, 35), tr = Math.pow(2, 42), ir = Math.pow(2, 49), sr = Math.pow(2, 56), rr = Math.pow(2, 63), nr = function(n) {
    return n < Xs ? 1 : n < Ws ? 2 : n < Qs ? 3 : n < Zs ? 4 : n < er ? 5 : n < tr ? 6 : n < ir ? 7 : n < sr ? 8 : n < rr ? 9 : 10;
}, or = {
    encode: qs,
    decode: Hs,
    encodingLength: nr
}, Ke = or;
const Ve = (n, e, t = 0)=>(Ke.encode(n, e, t), e), qe = (n)=>Ke.encodingLength(n), ge = (n, e)=>{
    const t = e.byteLength, i = qe(n), s = i + qe(t), r = new Uint8Array(s + t);
    return Ve(n, r, 0), Ve(t, r, i), r.set(e, s), new ar(n, t, e, r);
};
class ar {
    constructor(e, t, i, s){
        this.code = e, this.size = t, this.digest = i, this.bytes = s;
    }
}
const je = ({ name: n, code: e, encode: t })=>new hr(n, e, t);
class hr {
    constructor(e, t, i){
        this.name = e, this.code = t, this.encode = i;
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? ge(this.code, t) : t.then((i)=>ge(this.code, i));
        } else throw Error("Unknown type, must be binary type");
    }
}
const Ge = (n)=>async (e)=>new Uint8Array(await crypto.subtle.digest(n, e)), cr = je({
    name: "sha2-256",
    code: 18,
    encode: Ge("SHA-256")
}), lr = je({
    name: "sha2-512",
    code: 19,
    encode: Ge("SHA-512")
});
var ur = Object.freeze({
    __proto__: null,
    sha256: cr,
    sha512: lr
});
const Ye = 0, dr = "identity", He = Ue, gr = (n)=>ge(Ye, He(n)), pr = {
    code: Ye,
    name: dr,
    encode: He,
    digest: gr
};
var Dr = Object.freeze({
    __proto__: null,
    identity: pr
});
new TextEncoder, new TextDecoder;
const Je = {
    ...as,
    ...cs,
    ...us,
    ...gs,
    ...ys,
    ...Rs,
    ...Ps,
    ...As,
    ...$s,
    ...Vs
};
({
    ...ur,
    ...Dr
});
function Xe(n) {
    return globalThis.Buffer != null ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n;
}
function yr(n = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xe(globalThis.Buffer.allocUnsafe(n)) : new Uint8Array(n);
}
function We(n, e, t, i) {
    return {
        name: n,
        prefix: e,
        encoder: {
            name: n,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: i
        }
    };
}
const Qe = We("utf8", "u", (n)=>"u" + new TextDecoder("utf8").decode(n), (n)=>new TextEncoder().encode(n.substring(1))), pe = We("ascii", "a", (n)=>{
    let e = "a";
    for(let t = 0; t < n.length; t++)e += String.fromCharCode(n[t]);
    return e;
}, (n)=>{
    n = n.substring(1);
    const e = yr(n.length);
    for(let t = 0; t < n.length; t++)e[t] = n.charCodeAt(t);
    return e;
}), mr = {
    utf8: Qe,
    "utf-8": Qe,
    hex: Je.base16,
    latin1: pe,
    ascii: pe,
    binary: pe,
    ...Je
};
function br(n, e = "utf8") {
    const t = mr[e];
    if (!t) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xe(globalThis.Buffer.from(n, "utf-8")) : t.decoder.decode(`${t.prefix}${n}`);
}
const De = "wc", Ze = 2, Z = "core", z = `${De}@2:${Z}:`, et = {
    name: Z,
    logger: "error"
}, tt = {
    database: ":memory:"
}, it = "crypto", ye = "client_ed25519_seed", st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"], rt = "keychain", nt = "0.3", ot = "messages", at = "0.3", ht = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIX_HOURS"], ct = "publisher", lt = "irn", ut = "error", me = "wss://relay.walletconnect.com", be = "wss://relay.walletconnect.org", dt = "relayer", v = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}, gt = "_subscription", f = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}, pt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_SECOND"], fr = {
    database: ":memory:"
}, Dt = "2.12.2", yt = 1e4, mt = "0.3", bt = "WALLETCONNECT_CLIENT_ID", S = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}, Er = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], ft = "subscription", Et = "0.3", wt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_SECONDS"] * 1e3, vt = "pairing", It = "0.3", wr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], F = {
    wc_pairingDelete: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        }
    }
}, V = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}, I = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}, Ct = "history", _t = "0.3", Rt = "expirer", C = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}, Tt = "0.3", vr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_DAY"], ee = "verify-api", k = "https://verify.walletconnect.com", te = "https://verify.walletconnect.org", St = [
    k,
    te
], Pt = "echo", xt = "https://echo.walletconnect.com";
class Ot {
    constructor(e, t){
        this.core = e, this.logger = t, this.keychain = new Map, this.name = rt, this.version = nt, this.initialized = !1, this.storagePrefix = z, this.init = async ()=>{
            if (!this.initialized) {
                const i = await this.getKeyChain();
                typeof i < "u" && (this.keychain = i), this.initialized = !0;
            }
        }, this.has = (i)=>(this.isInitialized(), this.keychain.has(i)), this.set = async (i, s)=>{
            this.isInitialized(), this.keychain.set(i, s), await this.persist();
        }, this.get = (i)=>{
            this.isInitialized();
            const s = this.keychain.get(i);
            if (typeof s > "u") {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${i}`);
                throw new Error(r);
            }
            return s;
        }, this.del = async (i)=>{
            this.isInitialized(), this.keychain.delete(i), await this.persist();
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setKeyChain(this.keychain);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class At {
    constructor(e, t, i){
        this.core = e, this.logger = t, this.name = it, this.initialized = !1, this.init = async ()=>{
            this.initialized || (await this.keychain.init(), this.initialized = !0);
        }, this.hasKeys = (s)=>(this.isInitialized(), this.keychain.has(s)), this.getClientId = async ()=>{
            this.isInitialized();
            const s = await this.getClientSeed(), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateKeyPair"])(s);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeIss"])(r.publicKey);
        }, this.generateKeyPair = ()=>{
            this.isInitialized();
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateKeyPair"])();
            return this.setPrivateKey(s.publicKey, s.privateKey);
        }, this.signJWT = async (s)=>{
            this.isInitialized();
            const r = await this.getClientSeed(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateKeyPair"])(r), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), h = st;
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signJWT"])(a, s, h, o);
        }, this.generateSharedKey = (s, r, o)=>{
            this.isInitialized();
            const a = this.getPrivateKey(s), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deriveSymKey"])(a, r);
            return this.setSymKey(h, o);
        }, this.setSymKey = async (s, r)=>{
            this.isInitialized();
            const o = r || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(s);
            return await this.keychain.set(o, s), o;
        }, this.deleteKeyPair = async (s)=>{
            this.isInitialized(), await this.keychain.del(s);
        }, this.deleteSymKey = async (s)=>{
            this.isInitialized(), await this.keychain.del(s);
        }, this.encode = async (s, r, o)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateEncoding"])(o), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])(r);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const m = a.senderPublicKey, L = a.receiverPublicKey;
                s = await this.generateSharedKey(m, L);
            }
            const l = this.getSymKey(s), { type: d, senderPublicKey: g } = a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encrypt"])({
                type: d,
                symKey: l,
                message: h,
                senderPublicKey: g
            });
        }, this.decode = async (s, r, o)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateDecoding"])(r, o);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const h = a.receiverPublicKey, l = a.senderPublicKey;
                s = await this.generateSharedKey(h, l);
            }
            try {
                const h = this.getSymKey(s), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decrypt"])({
                    symKey: h,
                    encoded: r
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonParse"])(l);
            } catch (h) {
                this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(h);
            }
        }, this.getPayloadType = (s)=>{
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"])(s);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeTypeByte"])(r.type);
        }, this.getPayloadSenderPublicKey = (s)=>{
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"])(s);
            return r.senderPublicKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(r.senderPublicKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE16"]) : void 0;
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.keychain = i || new Ot(this.core, this.logger);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e;
    }
    getPrivateKey(e) {
        return this.keychain.get(e);
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(ye);
        } catch  {
            e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), await this.keychain.set(ye, e);
        }
        return br(e, "base16");
    }
    getSymKey(e) {
        return this.keychain.get(e);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class zt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMessageTracker"] {
    constructor(e, t){
        super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = ot, this.version = at, this.initialized = !1, this.storagePrefix = z, this.init = async ()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const i = await this.getRelayerMessages();
                    typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    });
                } catch (i) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
                } finally{
                    this.initialized = !0;
                }
            }
        }, this.set = async (i, s)=>{
            this.isInitialized();
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(s);
            let o = this.messages.get(i);
            return typeof o > "u" && (o = {}), typeof o[r] < "u" || (o[r] = s, this.messages.set(i, o), await this.persist()), r;
        }, this.get = (i)=>{
            this.isInitialized();
            let s = this.messages.get(i);
            return typeof s > "u" && (s = {}), s;
        }, this.has = (i, s)=>{
            this.isInitialized();
            const r = this.get(i), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(s);
            return typeof r[o] < "u";
        }, this.del = async (i)=>{
            this.isInitialized(), this.messages.delete(i), await this.persist();
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e, this.name), this.core = t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setRelayerMessages(this.messages);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Ir extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IPublisher"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"], this.name = ct, this.queue = new Map, this.publishTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), this.failedPublishTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_SECOND"]), this.needsTransportRestart = !1, this.publish = async (i, s, r)=>{
            var o;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: i,
                    message: s,
                    opts: r
                }
            });
            const a = r?.ttl || ht, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(r), l = r?.prompt || !1, d = r?.tag || 0, g = r?.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), m = {
                topic: i,
                message: s,
                opts: {
                    ttl: a,
                    relay: h,
                    prompt: l,
                    tag: d,
                    id: g
                }
            }, L = `Failed to publish payload, please try again. id:${g} tag:${d}`, u = Date.now();
            let p, _ = 1;
            try {
                for(; p === void 0;){
                    if (Date.now() - u > this.publishTimeout) throw new Error(L);
                    this.logger.trace({
                        id: g,
                        attempts: _
                    }, `publisher.publish - attempt ${_}`), p = await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.rpcPublish(i, s, a, h, l, d, g).catch((D)=>this.logger.warn(D)), this.publishTimeout, L), _++, p || await new Promise((D)=>setTimeout(D, this.failedPublishTimeout));
                }
                this.relayer.events.emit(v.publish, m), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: g,
                        topic: i,
                        message: s,
                        opts: r
                    }
                });
            } catch (D) {
                if (this.logger.debug("Failed to Publish Payload"), this.logger.error(D), (o = r?.internal) != null && o.throwOnFailedPublish) throw D;
                this.queue.set(g, m);
            }
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.registerEventListeners();
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    rpcPublish(e, t, i, s, r, o, a) {
        var h, l, d, g;
        const m = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(s.protocol).publish,
            params: {
                topic: e,
                message: t,
                ttl: i,
                prompt: r,
                tag: o
            },
            id: a
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"])((h = m.params) == null ? void 0 : h.prompt) && ((l = m.params) == null || delete l.prompt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"])((d = m.params) == null ? void 0 : d.tag) && ((g = m.params) == null || delete g.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: m
        }), this.relayer.request(m);
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e);
    }
    checkQueue() {
        this.queue.forEach(async (e)=>{
            const { topic: t, message: i, opts: s } = e;
            await this.publish(t, i, s);
        });
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(v.connection_stalled);
                return;
            }
            this.checkQueue();
        }), this.relayer.on(v.message_ack, (e)=>{
            this.removeRequestFromQueue(e.id.toString());
        });
    }
}
class Cr {
    constructor(){
        this.map = new Map, this.set = (e, t)=>{
            const i = this.get(e);
            this.exists(e, t) || this.map.set(e, [
                ...i,
                t
            ]);
        }, this.get = (e)=>this.map.get(e) || [], this.exists = (e, t)=>this.get(e).includes(t), this.delete = (e, t)=>{
            if (typeof t > "u") {
                this.map.delete(e);
                return;
            }
            if (!this.map.has(e)) return;
            const i = this.get(e);
            if (!this.exists(e, t)) return;
            const s = i.filter((r)=>r !== t);
            if (!s.length) {
                this.map.delete(e);
                return;
            }
            this.map.set(e, s);
        }, this.clear = ()=>{
            this.map.clear();
        };
    }
    get topics() {
        return Array.from(this.map.keys());
    }
}
var _r = Object.defineProperty, Rr = Object.defineProperties, Tr = Object.getOwnPropertyDescriptors, Nt = Object.getOwnPropertySymbols, Sr = Object.prototype.hasOwnProperty, Pr = Object.prototype.propertyIsEnumerable, Lt = (n, e, t)=>e in n ? _r(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t, q = (n, e)=>{
    for(var t in e || (e = {}))Sr.call(e, t) && Lt(n, t, e[t]);
    if (Nt) for (var t of Nt(e))Pr.call(e, t) && Lt(n, t, e[t]);
    return n;
}, fe = (n, e)=>Rr(n, Tr(e));
class Ut extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ISubscriber"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Cr, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"], this.name = ft, this.version = Et, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = z, this.subscribeTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
        }, this.subscribe = async (i, s)=>{
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: i,
                    opts: s
                }
            });
            try {
                const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(s), o = {
                    topic: i,
                    relay: r
                };
                this.pending.set(i, o);
                const a = await this.rpcSubscribe(i, r);
                return typeof a == "string" && (this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: i,
                        opts: s
                    }
                })), a;
            } catch (r) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r), r;
            }
        }, this.unsubscribe = async (i, s)=>{
            await this.restartToComplete(), this.isInitialized(), typeof s?.id < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
        }, this.isSubscribed = async (i)=>{
            if (this.topics.includes(i)) return !0;
            const s = `${this.pendingSubscriptionWatchLabel}_${i}`;
            return await new Promise((r, o)=>{
                const a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Watch"];
                a.start(s);
                const h = setInterval(()=>{
                    !this.pending.has(i) && this.topics.includes(i) && (clearInterval(h), a.stop(s), r(!0)), a.elapsed(s) >= wt && (clearInterval(h), a.stop(s), o(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
            }).catch(()=>!1);
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.start = async ()=>{
            await this.onConnect();
        }, this.stop = async ()=>{
            await this.onDisconnect();
        }, this.restart = async ()=>{
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.clientId = "";
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.subscriptions.size;
    }
    get ids() {
        return Array.from(this.subscriptions.keys());
    }
    get values() {
        return Array.from(this.subscriptions.values());
    }
    get topics() {
        return this.topicMap.topics;
    }
    hasSubscription(e, t) {
        let i = !1;
        try {
            i = this.getSubscription(e).topic === t;
        } catch  {}
        return i;
    }
    onEnable() {
        this.cached = [], this.initialized = !0;
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
    }
    async unsubscribeByTopic(e, t) {
        const i = this.topicMap.get(e);
        await Promise.all(i.map(async (s)=>await this.unsubscribeById(e, s, t)));
    }
    async unsubscribeById(e, t, i) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: i
            }
        });
        try {
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(i);
            await this.rpcUnsubscribe(e, t, s);
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, r), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: i
                }
            });
        } catch (s) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
        }
    }
    async rpcSubscribe(e, t) {
        const i = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            return await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(i).catch((s)=>this.logger.warn(s)), this.subscribeTimeout) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(e + this.clientId) : null;
        } catch  {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(v.connection_stalled);
        }
        return null;
    }
    async rpcBatchSubscribe(e) {
        if (!e.length) return;
        const t = e[0].relay, i = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).batchSubscribe,
            params: {
                topics: e.map((s)=>s.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            return await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(i).catch((s)=>this.logger.warn(s)), this.subscribeTimeout);
        } catch  {
            this.relayer.events.emit(v.connection_stalled);
        }
    }
    rpcUnsubscribe(e, t, i) {
        const s = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(i.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        }), this.relayer.request(s);
    }
    onSubscribe(e, t) {
        this.setSubscription(e, fe(q({}, t), {
            id: e
        })), this.pending.delete(t.topic);
    }
    onBatchSubscribe(e) {
        e.length && e.forEach((t)=>{
            this.setSubscription(t.id, q({}, t)), this.pending.delete(t.topic);
        });
    }
    async onUnsubscribe(e, t, i) {
        this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, t) {
        this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }), this.addSubscription(e, t);
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, q({}, t)), this.topicMap.set(t.topic, e), this.events.emit(S.created, t);
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i);
        }
        return t;
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const i = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(S.deleted, fe(q({}, i), {
            reason: t
        }));
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(S.sync);
    }
    async reset() {
        if (this.cached.length) {
            const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for(let t = 0; t < e; t++){
                const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(i);
            }
        }
        this.events.emit(S.resubscribed);
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
        }
    }
    async batchSubscribe(e) {
        if (!e.length) return;
        const t = await this.rpcBatchSubscribe(e);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidArray"])(t) && this.onBatchSubscribe(t.map((i, s)=>fe(q({}, e[s]), {
                id: i
            })));
    }
    async onConnect() {
        await this.restart(), this.onEnable();
    }
    onDisconnect() {
        this.onDisable();
    }
    async checkPending() {
        if (!this.initialized || !this.relayer.connected) return;
        const e = [];
        this.pending.forEach((t)=>{
            e.push(t);
        }), await this.batchSubscribe(e);
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, async ()=>{
            await this.checkPending();
        }), this.events.on(S.created, async (e)=>{
            const t = S.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        }), this.events.on(S.deleted, async (e)=>{
            const t = S.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise((e)=>{
            const t = setInterval(()=>{
                this.restartInProgress || (clearInterval(t), e());
            }, this.pollingInterval);
        });
    }
}
var xr = Object.defineProperty, $t = Object.getOwnPropertySymbols, Or = Object.prototype.hasOwnProperty, Ar = Object.prototype.propertyIsEnumerable, Ft = (n, e, t)=>e in n ? xr(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t, zr = (n, e)=>{
    for(var t in e || (e = {}))Or.call(e, t) && Ft(n, t, e[t]);
    if ($t) for (var t of $t(e))Ar.call(e, t) && Ft(n, t, e[t]);
    return n;
};
class kt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IRelayer"] {
    constructor(e){
        super(e), this.protocol = "wc", this.version = 2, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"], this.name = dt, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = [
            "socket hang up",
            "socket stalled",
            "interrupted"
        ], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.heartBeatTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_SECOND"]), this.request = async (t)=>{
            var i, s;
            this.logger.debug("Publishing Request Payload");
            const r = t.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString();
            await this.toEstablishConnection();
            try {
                const o = this.provider.request(t);
                this.requestsInFlight.set(r, {
                    promise: o,
                    request: t
                }), this.logger.trace({
                    id: r,
                    method: t.method,
                    topic: (i = t.params) == null ? void 0 : i.topic
                }, "relayer.request - attempt to publish...");
                const a = await new Promise(async (h, l)=>{
                    const d = ()=>{
                        l(new Error(`relayer.request - publish interrupted, id: ${r}`));
                    };
                    this.provider.on(f.disconnect, d);
                    const g = await o;
                    this.provider.off(f.disconnect, d), h(g);
                });
                return this.logger.trace({
                    id: r,
                    method: t.method,
                    topic: (s = t.params) == null ? void 0 : s.topic
                }, "relayer.request - published"), a;
            } catch (o) {
                throw this.logger.debug(`Failed to Publish Request: ${r}`), o;
            } finally{
                this.requestsInFlight.delete(r);
            }
        }, this.resetPingTimeout = ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNode"])()) try {
                clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(()=>{
                    var t, i, s;
                    (s = (i = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i.socket) == null || s.terminate();
                }, this.heartBeatTimeout);
            } catch (t) {
                this.logger.warn(t);
            }
        }, this.onPayloadHandler = (t)=>{
            this.onProviderPayload(t), this.resetPingTimeout();
        }, this.onConnectHandler = ()=>{
            this.startPingTimeout(), this.events.emit(v.connect);
        }, this.onDisconnectHandler = ()=>{
            this.onProviderDisconnect();
        }, this.onProviderErrorHandler = (t)=>{
            this.logger.error(t), this.events.emit(v.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
        }, this.registerProviderListeners = ()=>{
            this.provider.on(f.payload, this.onPayloadHandler), this.provider.on(f.connect, this.onConnectHandler), this.provider.on(f.disconnect, this.onDisconnectHandler), this.provider.on(f.error, this.onProviderErrorHandler);
        }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e.logger, this.name) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: e.logger || ut
        })), this.messages = new zt(this.logger, e.core), this.subscriber = new Ut(this, this.logger), this.publisher = new Ir(this, this.logger), this.relayUrl = e?.relayUrl || me, this.projectId = e.projectId, this.bundleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBundleId"])(), this.provider = {};
    }
    async init() {
        this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([
            this.messages.init(),
            this.subscriber.init()
        ]);
        try {
            await this.transportOpen();
        } catch  {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${be}...`), await this.restartTransport(be);
        }
        this.initialized = !0, setTimeout(async ()=>{
            this.subscriber.topics.length === 0 && this.subscriber.pending.size === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
        }, yt);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get connected() {
        var e, t, i;
        return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 1;
    }
    get connecting() {
        var e, t, i;
        return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 0;
    }
    async publish(e, t, i) {
        this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now()
        });
    }
    async subscribe(e, t) {
        var i;
        this.isInitialized();
        let s = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "", r;
        const o = (a)=>{
            a.topic === e && (this.subscriber.off(S.created, o), r());
        };
        return await Promise.all([
            new Promise((a)=>{
                r = a, this.subscriber.on(S.created, o);
            }),
            new Promise(async (a)=>{
                s = await this.subscriber.subscribe(e, t) || s, a();
            })
        ]), s;
    }
    async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t);
    }
    on(e, t) {
        this.events.on(e, t);
    }
    once(e, t) {
        this.events.once(e, t);
    }
    off(e, t) {
        this.events.off(e, t);
    }
    removeListener(e, t) {
        this.events.removeListener(e, t);
    }
    async transportDisconnect() {
        if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
            await Promise.all(Array.from(this.requestsInFlight.values()).map((e)=>e.promise));
        } catch (e) {
            this.logger.warn(e);
        }
        this.hasExperiencedNetworkDisruption || this.connected ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(()=>this.onProviderDisconnect()) : this.onProviderDisconnect();
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, await this.transportDisconnect();
    }
    async transportOpen(e) {
        await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect(), await this.createProvider()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
        try {
            await new Promise(async (t, i)=>{
                const s = ()=>{
                    this.provider.off(f.disconnect, s), i(new Error("Connection interrupted while trying to subscribe"));
                };
                this.provider.on(f.disconnect, s), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.provider.connect(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((r)=>{
                    i(r);
                }), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = !1, t();
            });
        } catch (t) {
            this.logger.error(t);
            const i = t;
            if (!this.isConnectionStalled(i.message)) throw t;
        } finally{
            this.connectionAttemptInProgress = !1;
        }
    }
    async restartTransport(e) {
        this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.createProvider(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOnline"])()) throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    startPingTimeout() {
        var e, t, i, s, r;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNode"])()) try {
            (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((r = (s = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : s.socket) == null || r.once("ping", ()=>{
                this.resetPingTimeout();
            })), this.resetPingTimeout();
        } catch (o) {
            this.logger.warn(o);
        }
    }
    isConnectionStalled(e) {
        return this.staleConnectionErrors.some((t)=>e.includes(t));
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelayRpcUrl"])({
            sdkVersion: Dt,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))), this.registerProviderListeners();
    }
    async recordMessageEvent(e) {
        const { topic: t, message: i } = e;
        await this.messages.set(t, i);
    }
    async shouldIgnoreMessageEvent(e) {
        const { topic: t, message: i } = e;
        if (!i || i.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
        if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
        const s = this.messages.has(t, i);
        return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s;
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(e)) {
            if (!e.method.endsWith(gt)) return;
            const t = e.params, { topic: i, message: s, publishedAt: r } = t.data, o = {
                topic: i,
                message: s,
                publishedAt: r
            };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(zr({
                type: "event",
                event: t.id
            }, o)), this.events.emit(t.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o);
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(e) && this.events.emit(v.message_ack, e);
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(v.message, e), await this.recordMessageEvent(e));
    }
    async acknowledgePayload(e) {
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(e.id, !0);
        await this.provider.connection.send(t);
    }
    unregisterProviderListeners() {
        this.provider.off(f.payload, this.onPayloadHandler), this.provider.off(f.connect, this.onConnectHandler), this.provider.off(f.disconnect, this.onDisconnectHandler), this.provider.off(f.error, this.onProviderErrorHandler);
    }
    async registerEventListeners() {
        let e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOnline"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToNetworkChange"])(async (t)=>{
            e !== t && (e = t, t ? await this.restartTransport().catch((i)=>this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
        });
    }
    async onProviderDisconnect() {
        await this.subscriber.stop(), this.events.emit(v.disconnect), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && setTimeout(async ()=>{
            await this.transportOpen().catch((e)=>this.logger.error(e));
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(pt));
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async toEstablishConnection() {
        await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e)=>{
            const t = setInterval(()=>{
                this.connected && (clearInterval(t), e());
            }, this.connectionStatusPollingInterval);
        }), await this.transportOpen());
    }
}
var Nr = Object.defineProperty, Bt = Object.getOwnPropertySymbols, Lr = Object.prototype.hasOwnProperty, Ur = Object.prototype.propertyIsEnumerable, Mt = (n, e, t)=>e in n ? Nr(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t, Kt = (n, e)=>{
    for(var t in e || (e = {}))Lr.call(e, t) && Mt(n, t, e[t]);
    if (Bt) for (var t of Bt(e))Ur.call(e, t) && Mt(n, t, e[t]);
    return n;
};
class Vt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IStore"] {
    constructor(e, t, i, s = z, r = void 0){
        super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = new Map, this.version = mt, this.cached = [], this.initialized = !1, this.storagePrefix = z, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o)=>{
                this.getKey && o !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"])(o) ? this.map.set(this.getKey(o), o) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProposalStruct"])(o) ? this.map.set(o.id, o) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSessionStruct"])(o) && this.map.set(o.topic, o);
            }), this.cached = [], this.initialized = !0);
        }, this.set = async (o, a)=>{
            this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: o,
                value: a
            }), this.map.set(o, a), await this.persist());
        }, this.get = (o)=>(this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                type: "method",
                method: "get",
                key: o
            }), this.getData(o)), this.getAll = (o)=>(this.isInitialized(), o ? this.values.filter((a)=>Object.keys(o).every((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a[h], o[h]))) : this.values), this.update = async (o, a)=>{
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: o,
                update: a
            });
            const h = Kt(Kt({}, this.getData(o)), a);
            this.map.set(o, h), await this.persist();
        }, this.delete = async (o, a)=>{
            this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: o,
                reason: a
            }), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.storagePrefix = s, this.getKey = r;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.map.size;
    }
    get keys() {
        return Array.from(this.map.keys());
    }
    get values() {
        return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
        this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            if (this.recentlyDeleted.includes(e)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                throw this.logger.error(s), new Error(s);
            }
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(i), new Error(i);
        }
        return t;
    }
    async persist() {
        await this.setDataStore(this.values);
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class qt {
    constructor(e, t){
        this.core = e, this.logger = t, this.name = vt, this.version = It, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], this.initialized = !1, this.storagePrefix = z, this.ignoredPayloadTypes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPE_1"]
        ], this.registeredMethods = [], this.init = async ()=>{
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
        }, this.register = ({ methods: i })=>{
            this.isInitialized(), this.registeredMethods = [
                ...new Set([
                    ...this.registeredMethods,
                    ...i
                ])
            ];
        }, this.create = async (i)=>{
            this.isInitialized();
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), r = await this.core.crypto.setSymKey(s), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), a = {
                protocol: lt
            }, h = {
                topic: r,
                expiry: o,
                relay: a,
                active: !1
            }, l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUri"])({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: r,
                symKey: s,
                relay: a,
                expiryTimestamp: o,
                methods: i?.methods
            });
            return await this.pairings.set(r, h), await this.core.relayer.subscribe(r), this.core.expirer.set(r, o), {
                topic: r,
                uri: l
            };
        }, this.pair = async (i)=>{
            this.isInitialized(), this.isValidPair(i);
            const { topic: s, symKey: r, relay: o, expiryTimestamp: a, methods: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUri"])(i.uri);
            let l;
            if (this.pairings.keys.includes(s) && (l = this.pairings.get(s), l.active)) throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
            const d = a || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), g = {
                topic: s,
                relay: o,
                expiry: d,
                active: !1,
                methods: h
            };
            return await this.pairings.set(s, g), this.core.expirer.set(s, d), i.activatePairing && await this.activate({
                topic: s
            }), this.events.emit(V.create, g), this.core.crypto.keychain.has(s) || await this.core.crypto.setSymKey(r, s), await this.core.relayer.subscribe(s, {
                relay: o
            }), g;
        }, this.activate = async ({ topic: i })=>{
            this.isInitialized();
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THIRTY_DAYS"]);
            await this.pairings.update(i, {
                active: !0,
                expiry: s
            }), this.core.expirer.set(i, s);
        }, this.ping = async (i)=>{
            this.isInitialized(), await this.isValidPing(i);
            const { topic: s } = i;
            if (this.pairings.keys.includes(s)) {
                const r = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a, reject: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelayedPromise"])();
                this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), ({ error: l })=>{
                    l ? h(l) : a();
                }), await o();
            }
        }, this.updateExpiry = async ({ topic: i, expiry: s })=>{
            this.isInitialized(), await this.pairings.update(i, {
                expiry: s
            });
        }, this.updateMetadata = async ({ topic: i, metadata: s })=>{
            this.isInitialized(), await this.pairings.update(i, {
                peerMetadata: s
            });
        }, this.getPairings = ()=>(this.isInitialized(), this.pairings.values), this.disconnect = async (i)=>{
            this.isInitialized(), await this.isValidDisconnect(i);
            const { topic: s } = i;
            this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), await this.deletePairing(s));
        }, this.sendRequest = async (i, s, r)=>{
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(s, r), a = await this.core.crypto.encode(i, o), h = F[s].req;
            return this.core.history.set(i, o), this.core.relayer.publish(i, a, h), o.id;
        }, this.sendResult = async (i, s, r)=>{
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(i, r), a = await this.core.crypto.encode(s, o), h = await this.core.history.get(s, i), l = F[h.request.method].res;
            await this.core.relayer.publish(s, a, l), await this.core.history.resolve(o);
        }, this.sendError = async (i, s, r)=>{
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcError"])(i, r), a = await this.core.crypto.encode(s, o), h = await this.core.history.get(s, i), l = F[h.request.method] ? F[h.request.method].res : F.unregistered_method.res;
            await this.core.relayer.publish(s, a, l), await this.core.history.resolve(o);
        }, this.deletePairing = async (i, s)=>{
            await this.core.relayer.unsubscribe(i), await Promise.all([
                this.pairings.delete(i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(i),
                s ? Promise.resolve() : this.core.expirer.del(i)
            ]);
        }, this.cleanup = async ()=>{
            const i = this.pairings.getAll().filter((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpired"])(s.expiry));
            await Promise.all(i.map((s)=>this.deletePairing(s.topic)));
        }, this.onRelayEventRequest = (i)=>{
            const { topic: s, payload: r } = i;
            switch(r.method){
                case "wc_pairingPing":
                    return this.onPairingPingRequest(s, r);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(s, r);
                default:
                    return this.onUnknownRpcMethodRequest(s, r);
            }
        }, this.onRelayEventResponse = async (i)=>{
            const { topic: s, payload: r } = i, o = (await this.core.history.get(s, r.id)).request.method;
            switch(o){
                case "wc_pairingPing":
                    return this.onPairingPingResponse(s, r);
                default:
                    return this.onUnknownRpcMethodResponse(o);
            }
        }, this.onPairingPingRequest = async (i, s)=>{
            const { id: r } = s;
            try {
                this.isValidPing({
                    topic: i
                }), await this.sendResult(r, i, !0), this.events.emit(V.ping, {
                    id: r,
                    topic: i
                });
            } catch (o) {
                await this.sendError(r, i, o), this.logger.error(o);
            }
        }, this.onPairingPingResponse = (i, s)=>{
            const { id: r } = s;
            setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(s) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(s) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), {
                    error: s.error
                });
            }, 500);
        }, this.onPairingDeleteRequest = async (i, s)=>{
            const { id: r } = s;
            try {
                this.isValidDisconnect({
                    topic: i
                }), await this.deletePairing(i), this.events.emit(V.delete, {
                    id: r,
                    topic: i
                });
            } catch (o) {
                await this.sendError(r, i, o), this.logger.error(o);
            }
        }, this.onUnknownRpcMethodRequest = async (i, s)=>{
            const { id: r, method: o } = s;
            try {
                if (this.registeredMethods.includes(o)) return;
                const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", o);
                await this.sendError(r, i, a), this.logger.error(a);
            } catch (a) {
                await this.sendError(r, i, a), this.logger.error(a);
            }
        }, this.onUnknownRpcMethodResponse = (i)=>{
            this.registeredMethods.includes(i) || this.logger.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", i));
        }, this.isValidPair = (i)=>{
            var s;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(i)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() params: ${i}`);
                throw new Error(o);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidUrl"])(i.uri)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
                throw new Error(o);
            }
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseUri"])(i.uri);
            if (!((s = r?.relay) != null && s.protocol)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(o);
            }
            if (!(r != null && r.symKey)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(o);
            }
            if (r != null && r.expiryTimestamp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(r?.expiryTimestamp) < Date.now()) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(o);
            }
        }, this.isValidPing = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(i)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `ping() params: ${i}`);
                throw new Error(r);
            }
            const { topic: s } = i;
            await this.isValidPairingTopic(s);
        }, this.isValidDisconnect = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidParams"])(i)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                throw new Error(r);
            }
            const { topic: s } = i;
            await this.isValidPairingTopic(s);
        }, this.isValidPairingTopic = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidString"])(i, !1)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                throw new Error(s);
            }
            if (!this.pairings.keys.includes(i)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                throw new Error(s);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExpired"])(this.pairings.get(i).expiry)) {
                await this.deletePairing(i);
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `pairing topic: ${i}`);
                throw new Error(s);
            }
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.pairings = new Vt(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(v.message, async (e)=>{
            const { topic: t, message: i } = e;
            if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
            const s = await this.core.crypto.decode(t, i);
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({
                    topic: t,
                    payload: s
                })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({
                    topic: t,
                    payload: s
                }), this.core.history.delete(t, s.id));
            } catch (r) {
                this.logger.error(r);
            }
        });
    }
    registerExpirerEvents() {
        this.core.expirer.on(C.expired, async (e)=>{
            const { topic: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpirerTarget"])(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(V.expire, {
                topic: t
            }));
        });
    }
}
class jt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IJsonRpcHistory"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"], this.name = Ct, this.version = _t, this.cached = [], this.initialized = !1, this.storagePrefix = z, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i)=>this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.set = (i, s, r)=>{
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                type: "method",
                method: "set",
                topic: i,
                request: s,
                chainId: r
            }), this.records.has(s.id)) return;
            const o = {
                id: s.id,
                topic: i,
                request: {
                    method: s.method,
                    params: s.params || null
                },
                chainId: r,
                expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THIRTY_DAYS"])
            };
            this.records.set(o.id, o), this.persist(), this.events.emit(I.created, o);
        }, this.resolve = async (i)=>{
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                type: "method",
                method: "update",
                response: i
            }), !this.records.has(i.id)) return;
            const s = await this.getRecord(i.id);
            typeof s.response > "u" && (s.response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJsonRpcError"])(i) ? {
                error: i.error
            } : {
                result: i.result
            }, this.records.set(s.id, s), this.persist(), this.events.emit(I.updated, s));
        }, this.get = async (i, s)=>(this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                type: "method",
                method: "get",
                topic: i,
                id: s
            }), await this.getRecord(s)), this.delete = (i, s)=>{
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: s
            }), this.values.forEach((r)=>{
                if (r.topic === i) {
                    if (typeof s < "u" && r.id !== s) return;
                    this.records.delete(r.id), this.events.emit(I.deleted, r);
                }
            }), this.persist();
        }, this.exists = async (i, s)=>(this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1), this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get size() {
        return this.records.size;
    }
    get keys() {
        return Array.from(this.records.keys());
    }
    get values() {
        return Array.from(this.records.values());
    }
    get pending() {
        const e = [];
        return this.values.forEach((t)=>{
            if (typeof t.response < "u") return;
            const i = {
                topic: t.topic,
                request: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(i);
        }), e;
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i);
        }
        return t;
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(I.sync);
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
        }
    }
    registerEventListeners() {
        this.events.on(I.created, (e)=>{
            const t = I.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.events.on(I.updated, (e)=>{
            const t = I.updated;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.events.on(I.deleted, (e)=>{
            const t = I.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            this.cleanup();
        });
    }
    cleanup() {
        try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(I.deleted, t, !1), e = !0);
            }), e && this.persist();
        } catch (e) {
            this.logger.warn(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Gt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IExpirer"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"], this.name = Rt, this.version = Tt, this.cached = [], this.initialized = !1, this.storagePrefix = z, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i)=>this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.has = (i)=>{
            try {
                const s = this.formatTarget(i);
                return typeof this.getExpiration(s) < "u";
            } catch  {
                return !1;
            }
        }, this.set = (i, s)=>{
            this.isInitialized();
            const r = this.formatTarget(i), o = {
                target: r,
                expiry: s
            };
            this.expirations.set(r, o), this.checkExpiry(r, o), this.events.emit(C.created, {
                target: r,
                expiration: o
            });
        }, this.get = (i)=>{
            this.isInitialized();
            const s = this.formatTarget(i);
            return this.getExpiration(s);
        }, this.del = (i)=>{
            if (this.isInitialized(), this.has(i)) {
                const s = this.formatTarget(i), r = this.getExpiration(s);
                this.expirations.delete(s), this.events.emit(C.deleted, {
                    target: s,
                    expiration: r
                });
            }
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.expirations.size;
    }
    get keys() {
        return Array.from(this.expirations.keys());
    }
    get values() {
        return Array.from(this.expirations.values());
    }
    formatTarget(e) {
        if (typeof e == "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTopicTarget"])(e);
        if (typeof e == "number") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIdTarget"])(e);
        const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t);
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(C.sync);
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.warn(i), new Error(i);
        }
        return t;
    }
    checkExpiry(e, t) {
        const { expiry: i } = t;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(i) - Date.now() <= 0 && this.expire(e, t);
    }
    expire(e, t) {
        this.expirations.delete(e), this.events.emit(C.expired, {
            target: e,
            expiration: t
        });
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((e, t)=>this.checkExpiry(t, e));
    }
    registerEventListeners() {
        this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>this.checkExpirations()), this.events.on(C.created, (e)=>{
            const t = C.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(C.expired, (e)=>{
            const t = C.expired;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(C.deleted, (e)=>{
            const t = C.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Yt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IVerify"] {
    constructor(e, t){
        super(e, t), this.projectId = e, this.logger = t, this.name = ee, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i)=>{
            if (this.verifyDisabled || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactNative"])() || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])()) return;
            const s = this.getVerifyUrl(i?.verifyUrl);
            this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
            try {
                await this.createIframe();
            } catch (r) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r);
            }
            if (!this.initialized) {
                this.removeIframe(), this.verifyUrl = te;
                try {
                    await this.createIframe();
                } catch (r) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r), this.verifyDisabled = !0;
                }
            }
        }, this.register = async (i)=>{
            this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
        }, this.resolve = async (i)=>{
            if (this.isDevEnv) return "";
            const s = this.getVerifyUrl(i?.verifyUrl);
            let r;
            try {
                r = await this.fetchAttestation(i.attestationId, s);
            } catch (o) {
                this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${s}`), this.logger.info(o), r = await this.fetchAttestation(i.attestationId, te);
            }
            return r;
        }, this.fetchAttestation = async (i, s)=>{
            this.logger.info(`resolving attestation: ${i} from url: ${s}`);
            const r = this.startAbortTimer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 2), o = await fetch(`${s}/attestation/${i}`, {
                signal: this.abortController.signal
            });
            return clearTimeout(r), o.status === 200 ? await o.json() : void 0;
        }, this.addToQueue = (i)=>{
            this.queue.push(i);
        }, this.processQueue = ()=>{
            this.queue.length !== 0 && (this.queue.forEach((i)=>this.sendPost(i)), this.queue = []);
        }, this.sendPost = (i)=>{
            var s;
            try {
                if (!this.iframe) return;
                (s = this.iframe.contentWindow) == null || s.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
            } catch  {}
        }, this.createIframe = async ()=>{
            let i;
            const s = (r)=>{
                r.data === "verify_ready" && (this.onInit(), window.removeEventListener("message", s), i());
            };
            await Promise.race([
                new Promise((r)=>{
                    const o = document.getElementById(ee);
                    if (o) return this.iframe = o, this.onInit(), r();
                    window.addEventListener("message", s);
                    const a = document.createElement("iframe");
                    a.id = ee, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, i = r;
                }),
                new Promise((r, o)=>setTimeout(()=>{
                        window.removeEventListener("message", s), o("verify iframe load timeout");
                    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_SECONDS"])))
            ]);
        }, this.onInit = ()=>{
            this.initialized = !0, this.processQueue();
        }, this.removeIframe = ()=>{
            this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
        }, this.getVerifyUrl = (i)=>{
            let s = i || k;
            return St.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${k}`), s = k), s;
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.verifyUrl = k, this.abortController = new AbortController, this.isDevEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNode"])() && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.IS_VITEST;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController, setTimeout(()=>this.abortController.abort(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(e));
    }
}
class Ht extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEchoClient"] {
    constructor(e, t){
        super(e, t), this.projectId = e, this.logger = t, this.context = Pt, this.registerDeviceToken = async (i)=>{
            const { clientId: s, token: r, notificationType: o, enableEncrypted: a = !1 } = i, h = `${xt}/${this.projectId}/clients`;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$fetch$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: s,
                    type: o,
                    token: r,
                    always_raw: a
                })
            });
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.context);
    }
}
var $r = Object.defineProperty, Jt = Object.getOwnPropertySymbols, Fr = Object.prototype.hasOwnProperty, kr = Object.prototype.propertyIsEnumerable, Xt = (n, e, t)=>e in n ? $r(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t, Wt = (n, e)=>{
    for(var t in e || (e = {}))Fr.call(e, t) && Xt(n, t, e[t]);
    if (Jt) for (var t of Jt(e))kr.call(e, t) && Xt(n, t, e[t]);
    return n;
};
class ie extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICore"] {
    constructor(e){
        var t;
        super(e), this.protocol = De, this.version = Ze, this.name = Z, this.events = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"], this.initialized = !1, this.on = (o, a)=>this.events.on(o, a), this.once = (o, a)=>this.events.once(o, a), this.off = (o, a)=>this.events.off(o, a), this.removeListener = (o, a)=>this.events.removeListener(o, a), this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || me, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: typeof e?.logger == "string" && e.logger ? e.logger : et.logger
        }), { logger: s, chunkLoggerController: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlatformLogger"])({
            opts: i,
            maxSizeInBytes: e?.maxLogBlobSizeInBytes,
            loggerOverride: e?.logger
        });
        this.logChunkController = r, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async ()=>{
            var o, a;
            (o = this.logChunkController) != null && o.downloadLogsBlobInBrowser && ((a = this.logChunkController) == null || a.downloadLogsBlobInBrowser({
                clientId: await this.crypto.getClientId()
            }));
        }), this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(s, this.name), this.heartbeat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeartBeat"], this.crypto = new At(this, this.logger, e?.keychain), this.history = new jt(this, this.logger), this.expirer = new Gt(this, this.logger), this.storage = e != null && e.storage ? e.storage : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](Wt(Wt({}, tt), e?.storageOptions)), this.relayer = new kt({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new qt(this, this.logger), this.verify = new Yt(this.projectId || "", this.logger), this.echoClient = new Ht(this.projectId || "", this.logger);
    }
    static async init(e) {
        const t = new ie(e);
        await t.initialize();
        const i = await t.crypto.getClientId();
        return await t.storage.setItem(bt, i), t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async start() {
        this.initialized || await this.initialize();
    }
    async getLogsBlob() {
        var e;
        return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({
            clientId: await this.crypto.getClientId()
        });
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
        }
    }
}
const Br = ie;
;
 //# sourceMappingURL=index.es.js.map
}}),
}]);

//# sourceMappingURL=25025_%40walletconnect_core_dist_index_es_3778e2e0.js.map