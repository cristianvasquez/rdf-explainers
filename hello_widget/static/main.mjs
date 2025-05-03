function Mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yr = { exports: {} }, Y = yr.exports = {}, Ce, $e;
function Yn() {
  throw new Error("setTimeout has not been defined");
}
function zn() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Ce = setTimeout : Ce = Yn;
  } catch {
    Ce = Yn;
  }
  try {
    typeof clearTimeout == "function" ? $e = clearTimeout : $e = zn;
  } catch {
    $e = zn;
  }
})();
function Or(e) {
  if (Ce === setTimeout)
    return setTimeout(e, 0);
  if ((Ce === Yn || !Ce) && setTimeout)
    return Ce = setTimeout, setTimeout(e, 0);
  try {
    return Ce(e, 0);
  } catch {
    try {
      return Ce.call(null, e, 0);
    } catch {
      return Ce.call(this, e, 0);
    }
  }
}
function Ri(e) {
  if ($e === clearTimeout)
    return clearTimeout(e);
  if (($e === zn || !$e) && clearTimeout)
    return $e = clearTimeout, clearTimeout(e);
  try {
    return $e(e);
  } catch {
    try {
      return $e.call(null, e);
    } catch {
      return $e.call(this, e);
    }
  }
}
var Ue = [], bt = !1, ft, rn = -1;
function Fi() {
  !bt || !ft || (bt = !1, ft.length ? Ue = ft.concat(Ue) : rn = -1, Ue.length && wr());
}
function wr() {
  if (!bt) {
    var e = Or(Fi);
    bt = !0;
    for (var t = Ue.length; t; ) {
      for (ft = Ue, Ue = []; ++rn < t; )
        ft && ft[rn].run();
      rn = -1, t = Ue.length;
    }
    ft = null, bt = !1, Ri(e);
  }
}
Y.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
  Ue.push(new Dr(e, t)), Ue.length === 1 && !bt && Or(wr);
};
function Dr(e, t) {
  this.fun = e, this.array = t;
}
Dr.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Y.title = "browser";
Y.browser = !0;
Y.env = {};
Y.argv = [];
Y.version = "";
Y.versions = {};
function We() {
}
Y.on = We;
Y.addListener = We;
Y.once = We;
Y.off = We;
Y.removeListener = We;
Y.removeAllListeners = We;
Y.emit = We;
Y.prependListener = We;
Y.prependOnceListener = We;
Y.listeners = function(e) {
  return [];
};
Y.binding = function(e) {
  throw new Error("process.binding is not supported");
};
Y.cwd = function() {
  return "/";
};
Y.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
Y.umask = function() {
  return 0;
};
var ji = yr.exports;
const f = /* @__PURE__ */ Mi(ji), Lo = globalThis || void 0 || self;
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const W = f.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, jt = f.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, Hi = () => !1, Gt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), hn = (e) => e.startsWith("onUpdate:"), Z = Object.assign, po = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Li = Object.prototype.hasOwnProperty, H = (e, t) => Li.call(e, t), $ = Array.isArray, yt = (e) => xn(e) === "[object Map]", Ui = (e) => xn(e) === "[object Set]", P = (e) => typeof e == "function", J = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", ho = (e) => (q(e) || P(e)) && P(e.then) && P(e.catch), Ki = Object.prototype.toString, xn = (e) => Ki.call(e), go = (e) => xn(e).slice(8, -1), Wi = (e) => xn(e) === "[object Object]", mo = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ Be(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bi = /* @__PURE__ */ Be(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Vn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ki = /-(\w)/g, be = Vn(
  (e) => e.replace(ki, (t, n) => n ? n.toUpperCase() : "")
), qi = /\B([A-Z])/g, nt = Vn(
  (e) => e.replace(qi, "-$1").toLowerCase()
), Tn = Vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), lt = Vn(
  (e) => e ? `on${Tn(e)}` : ""
), ut = (e, t) => !Object.is(e, t), Pt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Gi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Uo;
const Jt = () => Uo || (Uo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof Lo < "u" ? Lo : {});
function _o(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = J(o) ? Qi(o) : _o(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (J(e) || q(e))
    return e;
}
const Ji = /;(?![^(]*\))/g, Yi = /:([^]+)/, zi = /\/\*[^]*?\*\//g;
function Qi(e) {
  const t = {};
  return e.replace(zi, "").split(Ji).forEach((n) => {
    if (n) {
      const o = n.split(Yi);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function vo(e) {
  let t = "";
  if (J(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = vo(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xi = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Zi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", es = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ts = /* @__PURE__ */ Be(Xi), ns = /* @__PURE__ */ Be(Zi), os = /* @__PURE__ */ Be(es), rs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", is = /* @__PURE__ */ Be(rs);
function xr(e) {
  return !!e || e === "";
}
function Re(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pe;
class ss {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pe, !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = pe;
      try {
        return pe = this, t();
      } finally {
        pe = n;
      }
    } else f.env.NODE_ENV !== "production" && Re("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    pe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    pe = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ls() {
  return pe;
}
let L;
const Hn = /* @__PURE__ */ new WeakSet();
class Vr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && pe.active && pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Hn.has(this) && (Hn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Sr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ko(this), Cr(this);
    const t = L, n = ye;
    L = this, ye = !0;
    try {
      return this.fn();
    } finally {
      f.env.NODE_ENV !== "production" && L !== this && Re(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), $r(this), L = t, ye = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        bo(t);
      this.deps = this.depsTail = void 0, Ko(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Hn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Qn(this) && this.run();
  }
  get dirty() {
    return Qn(this);
  }
}
let Tr = 0, Lt, Ut;
function Sr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ut, Ut = e;
    return;
  }
  e.next = Lt, Lt = e;
}
function Eo() {
  Tr++;
}
function No() {
  if (--Tr > 0)
    return;
  if (Ut) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Lt; ) {
    let t = Lt;
    for (Lt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Cr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $r(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), bo(o), cs(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function Qn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Pr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Pr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wt))
    return;
  e.globalVersion = Wt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Qn(e)) {
    e.flags &= -3;
    return;
  }
  const n = L, o = ye;
  L = e, ye = !0;
  try {
    Cr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ut(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    L = n, ye = o, $r(e), e.flags &= -3;
  }
}
function bo(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), f.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      bo(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function cs(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ye = !0;
const Ar = [];
function ke() {
  Ar.push(ye), ye = !1;
}
function qe() {
  const e = Ar.pop();
  ye = e === void 0 ? !0 : e;
}
function Ko(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = L;
    L = void 0;
    try {
      t();
    } finally {
      L = n;
    }
  }
}
let Wt = 0;
class fs {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ir {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, f.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!L || !ye || L === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== L)
      n = this.activeLink = new fs(L, this), L.deps ? (n.prevDep = L.depsTail, L.depsTail.nextDep = n, L.depsTail = n) : L.deps = L.depsTail = n, Mr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = L.depsTail, n.nextDep = void 0, L.depsTail.nextDep = n, L.depsTail = n, L.deps === n && (L.deps = o);
    }
    return f.env.NODE_ENV !== "production" && L.onTrack && L.onTrack(
      Z(
        {
          effect: L
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Wt++, this.notify(t);
  }
  notify(t) {
    Eo();
    try {
      if (f.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Z(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      No();
    }
  }
}
function Mr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Mr(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), f.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Xn = /* @__PURE__ */ new WeakMap(), at = Symbol(
  f.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Zn = Symbol(
  f.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Bt = Symbol(
  f.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function z(e, t, n) {
  if (ye && L) {
    let o = Xn.get(e);
    o || Xn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new Ir()), r.map = o, r.key = n), f.env.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function Ae(e, t, n, o, r, i) {
  const s = Xn.get(e);
  if (!s) {
    Wt++;
    return;
  }
  const c = (a) => {
    a && (f.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: i
    }) : a.trigger());
  };
  if (Eo(), t === "clear")
    s.forEach(c);
  else {
    const a = $(e), g = a && mo(n);
    if (a && n === "length") {
      const p = Number(o);
      s.forEach((d, m) => {
        (m === "length" || m === Bt || !xt(m) && m >= p) && c(d);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && c(s.get(n)), g && c(s.get(Bt)), t) {
        case "add":
          a ? g && c(s.get("length")) : (c(s.get(at)), yt(e) && c(s.get(Zn)));
          break;
        case "delete":
          a || (c(s.get(at)), yt(e) && c(s.get(Zn)));
          break;
        case "set":
          yt(e) && c(s.get(at));
          break;
      }
  }
  No();
}
function _t(e) {
  const t = M(e);
  return t === e ? t : (z(t, "iterate", Bt), me(e) ? t : t.map(he));
}
function yo(e) {
  return z(e = M(e), "iterate", Bt), e;
}
const us = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ln(this, Symbol.iterator, he);
  },
  concat(...e) {
    return _t(this).concat(
      ...e.map((t) => $(t) ? _t(t) : t)
    );
  },
  entries() {
    return Ln(this, "entries", (e) => (e[1] = he(e[1]), e));
  },
  every(e, t) {
    return He(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return He(this, "filter", e, t, (n) => n.map(he), arguments);
  },
  find(e, t) {
    return He(this, "find", e, t, he, arguments);
  },
  findIndex(e, t) {
    return He(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return He(this, "findLast", e, t, he, arguments);
  },
  findLastIndex(e, t) {
    return He(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return He(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Un(this, "includes", e);
  },
  indexOf(...e) {
    return Un(this, "indexOf", e);
  },
  join(e) {
    return _t(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Un(this, "lastIndexOf", e);
  },
  map(e, t) {
    return He(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return At(this, "pop");
  },
  push(...e) {
    return At(this, "push", e);
  },
  reduce(e, ...t) {
    return Wo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Wo(this, "reduceRight", e, t);
  },
  shift() {
    return At(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return He(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return At(this, "splice", e);
  },
  toReversed() {
    return _t(this).toReversed();
  },
  toSorted(e) {
    return _t(this).toSorted(e);
  },
  toSpliced(...e) {
    return _t(this).toSpliced(...e);
  },
  unshift(...e) {
    return At(this, "unshift", e);
  },
  values() {
    return Ln(this, "values", he);
  }
};
function Ln(e, t, n) {
  const o = yo(e), r = o[t]();
  return o !== e && !me(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const as = Array.prototype;
function He(e, t, n, o, r, i) {
  const s = yo(e), c = s !== e && !me(e), a = s[t];
  if (a !== as[t]) {
    const d = a.apply(e, i);
    return c ? he(d) : d;
  }
  let g = n;
  s !== e && (c ? g = function(d, m) {
    return n.call(this, he(d), m, e);
  } : n.length > 2 && (g = function(d, m) {
    return n.call(this, d, m, e);
  }));
  const p = a.call(s, g, o);
  return c && r ? r(p) : p;
}
function Wo(e, t, n, o) {
  const r = yo(e);
  let i = n;
  return r !== e && (me(e) ? n.length > 3 && (i = function(s, c, a) {
    return n.call(this, s, c, a, e);
  }) : i = function(s, c, a) {
    return n.call(this, s, he(c), a, e);
  }), r[t](i, ...o);
}
function Un(e, t, n) {
  const o = M(e);
  z(o, "iterate", Bt);
  const r = o[t](...n);
  return (r === -1 || r === !1) && mn(n[0]) ? (n[0] = M(n[0]), o[t](...n)) : r;
}
function At(e, t, n = []) {
  ke(), Eo();
  const o = M(e)[t].apply(e, n);
  return No(), qe(), o;
}
const ds = /* @__PURE__ */ Be("__proto__,__v_isRef,__isVue"), Rr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xt)
);
function ps(e) {
  xt(e) || (e = String(e));
  const t = M(this);
  return z(t, "has", e), t.hasOwnProperty(e);
}
class Fr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (r ? i ? Wr : Kr : i ? Ur : Lr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = $(t);
    if (!r) {
      let a;
      if (s && (a = us[n]))
        return a;
      if (n === "hasOwnProperty")
        return ps;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      X(t) ? t : o
    );
    return (xt(n) ? Rr.has(n) : ds(n)) || (r || z(t, "get", n), i) ? c : X(c) ? s && mo(n) ? c : c.value : q(c) ? r ? Br(c) : Oo(c) : c;
  }
}
class jr extends Fr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = ot(i);
      if (!me(o) && !ot(o) && (i = M(i), o = M(o)), !$(t) && X(i) && !X(o))
        return a ? !1 : (i.value = o, !0);
    }
    const s = $(t) && mo(n) ? Number(n) < t.length : H(t, n), c = Reflect.set(
      t,
      n,
      o,
      X(t) ? t : r
    );
    return t === M(r) && (s ? ut(o, i) && Ae(t, "set", n, o, i) : Ae(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = H(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && Ae(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!xt(n) || !Rr.has(n)) && z(t, "has", n), o;
  }
  ownKeys(t) {
    return z(
      t,
      "iterate",
      $(t) ? "length" : at
    ), Reflect.ownKeys(t);
  }
}
class Hr extends Fr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return f.env.NODE_ENV !== "production" && Re(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return f.env.NODE_ENV !== "production" && Re(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const hs = /* @__PURE__ */ new jr(), gs = /* @__PURE__ */ new Hr(), ms = /* @__PURE__ */ new jr(!0), _s = /* @__PURE__ */ new Hr(!0), eo = (e) => e, tn = (e) => Reflect.getPrototypeOf(e);
function vs(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = M(r), s = yt(i), c = e === "entries" || e === Symbol.iterator && s, a = e === "keys" && s, g = r[e](...o), p = n ? eo : t ? to : he;
    return !t && z(
      i,
      "iterate",
      a ? Zn : at
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = g.next();
        return m ? { value: d, done: m } : {
          value: c ? [p(d[0]), p(d[1])] : p(d),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function nn(e) {
  return function(...t) {
    if (f.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Re(
        `${Tn(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Es(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, s = M(i), c = M(r);
      e || (ut(r, c) && z(s, "get", r), z(s, "get", c));
      const { has: a } = tn(s), g = t ? eo : e ? to : he;
      if (a.call(s, r))
        return g(i.get(r));
      if (a.call(s, c))
        return g(i.get(c));
      i !== s && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && z(M(r), "iterate", at), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, s = M(i), c = M(r);
      return e || (ut(r, c) && z(s, "has", r), z(s, "has", c)), r === c ? i.has(r) : i.has(r) || i.has(c);
    },
    forEach(r, i) {
      const s = this, c = s.__v_raw, a = M(c), g = t ? eo : e ? to : he;
      return !e && z(a, "iterate", at), c.forEach((p, d) => r.call(i, g(p), g(d), s));
    }
  };
  return Z(
    n,
    e ? {
      add: nn("add"),
      set: nn("set"),
      delete: nn("delete"),
      clear: nn("clear")
    } : {
      add(r) {
        !t && !me(r) && !ot(r) && (r = M(r));
        const i = M(this);
        return tn(i).has.call(i, r) || (i.add(r), Ae(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !me(i) && !ot(i) && (i = M(i));
        const s = M(this), { has: c, get: a } = tn(s);
        let g = c.call(s, r);
        g ? f.env.NODE_ENV !== "production" && Bo(s, c, r) : (r = M(r), g = c.call(s, r));
        const p = a.call(s, r);
        return s.set(r, i), g ? ut(i, p) && Ae(s, "set", r, i, p) : Ae(s, "add", r, i), this;
      },
      delete(r) {
        const i = M(this), { has: s, get: c } = tn(i);
        let a = s.call(i, r);
        a ? f.env.NODE_ENV !== "production" && Bo(i, s, r) : (r = M(r), a = s.call(i, r));
        const g = c ? c.call(i, r) : void 0, p = i.delete(r);
        return a && Ae(i, "delete", r, void 0, g), p;
      },
      clear() {
        const r = M(this), i = r.size !== 0, s = f.env.NODE_ENV !== "production" ? yt(r) ? new Map(r) : new Set(r) : void 0, c = r.clear();
        return i && Ae(
          r,
          "clear",
          void 0,
          void 0,
          s
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = vs(r, e, t);
  }), n;
}
function Sn(e, t) {
  const n = Es(e, t);
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    H(n, r) && r in o ? n : o,
    r,
    i
  );
}
const Ns = {
  get: /* @__PURE__ */ Sn(!1, !1)
}, bs = {
  get: /* @__PURE__ */ Sn(!1, !0)
}, ys = {
  get: /* @__PURE__ */ Sn(!0, !1)
}, Os = {
  get: /* @__PURE__ */ Sn(!0, !0)
};
function Bo(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const r = go(e);
    Re(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Lr = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap();
function ws(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ds(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ws(go(e));
}
function Oo(e) {
  return ot(e) ? e : Cn(
    e,
    !1,
    hs,
    Ns,
    Lr
  );
}
function xs(e) {
  return Cn(
    e,
    !1,
    ms,
    bs,
    Ur
  );
}
function Br(e) {
  return Cn(
    e,
    !0,
    gs,
    ys,
    Kr
  );
}
function Ie(e) {
  return Cn(
    e,
    !0,
    _s,
    Os,
    Wr
  );
}
function Cn(e, t, n, o, r) {
  if (!q(e))
    return f.env.NODE_ENV !== "production" && Re(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const s = Ds(e);
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, c), c;
}
function Ot(e) {
  return ot(e) ? Ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ot(e) {
  return !!(e && e.__v_isReadonly);
}
function me(e) {
  return !!(e && e.__v_isShallow);
}
function mn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Vs(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && gn(e, "__v_skip", !0), e;
}
const he = (e) => q(e) ? Oo(e) : e, to = (e) => q(e) ? Br(e) : e;
function X(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ts(e) {
  return X(e) ? e.value : e;
}
const Ss = {
  get: (e, t, n) => t === "__v_raw" ? e : Ts(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return X(r) && !X(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function kr(e) {
  return Ot(e) ? e : new Proxy(e, Ss);
}
class Cs {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ir(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    L !== this)
      return Sr(this, !0), !0;
    f.env.NODE_ENV;
  }
  get value() {
    const t = f.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Pr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : f.env.NODE_ENV !== "production" && Re("Write operation failed: computed value is readonly");
  }
}
function $s(e, t, n = !1) {
  let o, r;
  P(e) ? o = e : (o = e.get, r = e.set);
  const i = new Cs(o, r, n);
  return f.env.NODE_ENV, i;
}
const on = {}, _n = /* @__PURE__ */ new WeakMap();
let ct;
function Ps(e, t = !1, n = ct) {
  if (n) {
    let o = _n.get(n);
    o || _n.set(n, o = []), o.push(e);
  } else f.env.NODE_ENV !== "production" && !t && Re(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function As(e, t, n = W) {
  const { immediate: o, deep: r, once: i, scheduler: s, augmentJob: c, call: a } = n, g = (T) => {
    (n.onWarn || Re)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (T) => r ? T : me(T) || r === !1 || r === 0 ? Ze(T, 1) : Ze(T);
  let d, m, D, S, I = !1, ne = !1;
  if (X(e) ? (m = () => e.value, I = me(e)) : Ot(e) ? (m = () => p(e), I = !0) : $(e) ? (ne = !0, I = e.some((T) => Ot(T) || me(T)), m = () => e.map((T) => {
    if (X(T))
      return T.value;
    if (Ot(T))
      return p(T);
    if (P(T))
      return a ? a(T, 2) : T();
    f.env.NODE_ENV !== "production" && g(T);
  })) : P(e) ? t ? m = a ? () => a(e, 2) : e : m = () => {
    if (D) {
      ke();
      try {
        D();
      } finally {
        qe();
      }
    }
    const T = ct;
    ct = d;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      ct = T;
    }
  } : (m = Q, f.env.NODE_ENV !== "production" && g(e)), t && r) {
    const T = m, ee = r === !0 ? 1 / 0 : r;
    m = () => Ze(T(), ee);
  }
  const B = ls(), G = () => {
    d.stop(), B && B.active && po(B.effects, d);
  };
  if (i && t) {
    const T = t;
    t = (...ee) => {
      T(...ee), G();
    };
  }
  let U = ne ? new Array(e.length).fill(on) : on;
  const ue = (T) => {
    if (!(!(d.flags & 1) || !d.dirty && !T))
      if (t) {
        const ee = d.run();
        if (r || I || (ne ? ee.some((_e, oe) => ut(_e, U[oe])) : ut(ee, U))) {
          D && D();
          const _e = ct;
          ct = d;
          try {
            const oe = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              U === on ? void 0 : ne && U[0] === on ? [] : U,
              S
            ];
            a ? a(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            ), U = ee;
          } finally {
            ct = _e;
          }
        }
      } else
        d.run();
  };
  return c && c(ue), d = new Vr(m), d.scheduler = s ? () => s(ue, !1) : ue, S = (T) => Ps(T, !1, d), D = d.onStop = () => {
    const T = _n.get(d);
    if (T) {
      if (a)
        a(T, 4);
      else
        for (const ee of T) ee();
      _n.delete(d);
    }
  }, f.env.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? o ? ue(!0) : U = d.run() : s ? s(ue.bind(null, !0), !0) : d.run(), G.pause = d.pause.bind(d), G.resume = d.resume.bind(d), G.stop = G, G;
}
function Ze(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, X(e))
    Ze(e.value, t, n);
  else if ($(e))
    for (let o = 0; o < e.length; o++)
      Ze(e[o], t, n);
  else if (Ui(e) || yt(e))
    e.forEach((o) => {
      Ze(o, t, n);
    });
  else if (Wi(e)) {
    for (const o in e)
      Ze(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Ze(e[o], t, n);
  }
  return e;
}
const dt = [];
function sn(e) {
  dt.push(e);
}
function ln() {
  dt.pop();
}
let Kn = !1;
function O(e, ...t) {
  if (Kn) return;
  Kn = !0, ke();
  const n = dt.length ? dt[dt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Is();
  if (o)
    Vt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, c;
          return (c = (s = i.toString) == null ? void 0 : s.call(i)) != null ? c : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${Mn(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Ms(r)), console.warn(...i);
  }
  qe(), Kn = !1;
}
function Is() {
  let e = dt[dt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ms(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Rs(n));
  }), t;
}
function Rs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Mn(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...Fs(e.props), i] : [r + i];
}
function Fs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...qr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function qr(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : X(t) ? (t = qr(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const wo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Vt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Yt(r, t, n);
  }
}
function Fe(e, t, n, o) {
  if (P(e)) {
    const r = Vt(e, t, n, o);
    return r && ho(r) && r.catch((i) => {
      Yt(i, t, n);
    }), r;
  }
  if ($(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Fe(e[i], t, n, o));
    return r;
  } else f.env.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Yt(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || W;
  if (t) {
    let c = t.parent;
    const a = t.proxy, g = f.env.NODE_ENV !== "production" ? wo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let d = 0; d < p.length; d++)
          if (p[d](e, a, g) === !1)
            return;
      }
      c = c.parent;
    }
    if (i) {
      ke(), Vt(i, null, 10, [
        e,
        a,
        g
      ]), qe();
      return;
    }
  }
  js(e, n, r, o, s);
}
function js(e, t, n, o = !0, r = !1) {
  if (f.env.NODE_ENV !== "production") {
    const i = wo[t];
    if (n && sn(n), O(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && ln(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const se = [];
let Se = -1;
const wt = [];
let Qe = null, Nt = 0;
const Gr = /* @__PURE__ */ Promise.resolve();
let vn = null;
const Hs = 100;
function Ls(e) {
  const t = vn || Gr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Us(e) {
  let t = Se + 1, n = se.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = se[o], i = kt(r);
    i < e || i === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function $n(e) {
  if (!(e.flags & 1)) {
    const t = kt(e), n = se[se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= kt(n) ? se.push(e) : se.splice(Us(t), 0, e), e.flags |= 1, Jr();
  }
}
function Jr() {
  vn || (vn = Gr.then(Qr));
}
function Yr(e) {
  $(e) ? wt.push(...e) : Qe && e.id === -1 ? Qe.splice(Nt + 1, 0, e) : e.flags & 1 || (wt.push(e), e.flags |= 1), Jr();
}
function ko(e, t, n = Se + 1) {
  for (f.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < se.length; n++) {
    const o = se[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || f.env.NODE_ENV !== "production" && Do(t, o))
        continue;
      se.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function zr(e) {
  if (wt.length) {
    const t = [...new Set(wt)].sort(
      (n, o) => kt(n) - kt(o)
    );
    if (wt.length = 0, Qe) {
      Qe.push(...t);
      return;
    }
    for (Qe = t, f.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Nt = 0; Nt < Qe.length; Nt++) {
      const n = Qe[Nt];
      f.env.NODE_ENV !== "production" && Do(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Qe = null, Nt = 0;
  }
}
const kt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qr(e) {
  f.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = f.env.NODE_ENV !== "production" ? (n) => Do(e, n) : Q;
  try {
    for (Se = 0; Se < se.length; Se++) {
      const n = se[Se];
      if (n && !(n.flags & 8)) {
        if (f.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Vt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Se < se.length; Se++) {
      const n = se[Se];
      n && (n.flags &= -2);
    }
    Se = -1, se.length = 0, zr(e), vn = null, (se.length || wt.length) && Qr(e);
  }
}
function Do(e, t) {
  const n = e.get(t) || 0;
  if (n > Hs) {
    const o = t.i, r = o && Ci(o.type);
    return Yt(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Me = !1;
const cn = /* @__PURE__ */ new Map();
f.env.NODE_ENV !== "production" && (Jt().__VUE_HMR_RUNTIME__ = {
  createRecord: Wn(Xr),
  rerender: Wn(Bs),
  reload: Wn(ks)
});
const gt = /* @__PURE__ */ new Map();
function Ks(e) {
  const t = e.type.__hmrId;
  let n = gt.get(t);
  n || (Xr(t, e.type), n = gt.get(t)), n.instances.add(e);
}
function Ws(e) {
  gt.get(e.type.__hmrId).instances.delete(e);
}
function Xr(e, t) {
  return gt.has(e) ? !1 : (gt.set(e, {
    initialDef: En(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function En(e) {
  return $i(e) ? e.__vccOpts : e;
}
function Bs(e, t) {
  const n = gt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, En(o.type).render = t), o.renderCache = [], Me = !0, o.update(), Me = !1;
  }));
}
function ks(e, t) {
  const n = gt.get(e);
  if (!n) return;
  t = En(t), qo(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const i = o[r], s = En(i.type);
    let c = cn.get(s);
    c || (s !== n.initialDef && qo(s, t), cn.set(s, c = /* @__PURE__ */ new Set())), c.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (c.add(i), i.ceReload(t.styles), c.delete(i)) : i.parent ? $n(() => {
      Me = !0, i.parent.update(), Me = !1, c.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  Yr(() => {
    cn.clear();
  });
}
function qo(e, t) {
  Z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Wn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ne, Rt = [], no = !1;
function zt(e, ...t) {
  Ne ? Ne.emit(e, ...t) : no || Rt.push({ event: e, args: t });
}
function xo(e, t) {
  var n, o;
  Ne = e, Ne ? (Ne.enabled = !0, Rt.forEach(({ event: r, args: i }) => Ne.emit(r, ...i)), Rt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    xo(i, t);
  }), setTimeout(() => {
    Ne || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, no = !0, Rt = []);
  }, 3e3)) : (no = !0, Rt = []);
}
function qs(e, t) {
  zt("app:init", e, t, {
    Fragment: Pe,
    Text: Qt,
    Comment: Oe,
    Static: an
  });
}
function Gs(e) {
  zt("app:unmount", e);
}
const Js = /* @__PURE__ */ Vo(
  "component:added"
  /* COMPONENT_ADDED */
), Zr = /* @__PURE__ */ Vo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ys = /* @__PURE__ */ Vo(
  "component:removed"
  /* COMPONENT_REMOVED */
), zs = (e) => {
  Ne && typeof Ne.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ne.cleanupBuffer(e) && Ys(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Vo(e) {
  return (t) => {
    zt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Qs = /* @__PURE__ */ ei(
  "perf:start"
  /* PERFORMANCE_START */
), Xs = /* @__PURE__ */ ei(
  "perf:end"
  /* PERFORMANCE_END */
);
function ei(e) {
  return (t, n, o) => {
    zt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Zs(e, t, n) {
  zt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ge = null, ti = null;
function Nn(e) {
  const t = ge;
  return ge = e, ti = e && e.type.__scopeId || null, t;
}
function el(e, t = ge, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && rr(-1);
    const i = Nn(t);
    let s;
    try {
      s = e(...r);
    } finally {
      Nn(i), o._d && rr(1);
    }
    return f.env.NODE_ENV !== "production" && Zr(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ni(e) {
  Bi(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function it(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const c = r[s];
    i && (c.oldValue = i[s].value);
    let a = c.dir[o];
    a && (ke(), Fe(a, n, 8, [
      e.el,
      c,
      e,
      t
    ]), qe());
  }
}
const tl = Symbol("_vte"), nl = (e) => e.__isTeleport;
function To(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, To(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function oi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ol = /* @__PURE__ */ new WeakSet();
function bn(e, t, n, o, r = !1) {
  if ($(e)) {
    e.forEach(
      (S, I) => bn(
        S,
        t && ($(t) ? t[I] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Kt(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && bn(e, t, n, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? Mo(o.component) : o.el, s = r ? null : i, { i: c, r: a } = e;
  if (f.env.NODE_ENV !== "production" && !c) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const g = t && t.r, p = c.refs === W ? c.refs = {} : c.refs, d = c.setupState, m = M(d), D = d === W ? () => !1 : (S) => f.env.NODE_ENV !== "production" && (H(m, S) && !X(m[S]) && O(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), ol.has(m[S])) ? !1 : H(m, S);
  if (g != null && g !== a && (J(g) ? (p[g] = null, D(g) && (d[g] = null)) : X(g) && (g.value = null)), P(a))
    Vt(a, c, 12, [s, p]);
  else {
    const S = J(a), I = X(a);
    if (S || I) {
      const ne = () => {
        if (e.f) {
          const B = S ? D(a) ? d[a] : p[a] : a.value;
          r ? $(B) && po(B, i) : $(B) ? B.includes(i) || B.push(i) : S ? (p[a] = [i], D(a) && (d[a] = p[a])) : (a.value = [i], e.k && (p[e.k] = a.value));
        } else S ? (p[a] = s, D(a) && (d[a] = s)) : I ? (a.value = s, e.k && (p[e.k] = s)) : f.env.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
      };
      s ? (ne.id = -1, de(ne, n)) : ne();
    } else f.env.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
  }
}
Jt().requestIdleCallback;
Jt().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, So = (e) => e.type.__isKeepAlive;
function rl(e, t) {
  ri(e, "a", t);
}
function il(e, t) {
  ri(e, "da", t);
}
function ri(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Pn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      So(r.parent.vnode) && sl(o, t, n, r), r = r.parent;
  }
}
function sl(e, t, n, o) {
  const r = Pn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ii(() => {
    po(o[t], r);
  }, n);
}
function Pn(e, t, n = te, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      ke();
      const c = Xt(n), a = Fe(t, n, e, s);
      return c(), qe(), a;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (f.env.NODE_ENV !== "production") {
    const r = lt(wo[e].replace(/ hook$/, ""));
    O(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ge = (e) => (t, n = te) => {
  (!qt || e === "sp") && Pn(e, (...o) => t(...o), n);
}, ll = Ge("bm"), cl = Ge("m"), fl = Ge(
  "bu"
), ul = Ge("u"), al = Ge(
  "bum"
), ii = Ge("um"), dl = Ge(
  "sp"
), pl = Ge("rtg"), hl = Ge("rtc");
function gl(e, t = te) {
  Pn("ec", e, t);
}
const ml = Symbol.for("v-ndc"), oo = (e) => e ? Ti(e) ? Mo(e) : oo(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => f.env.NODE_ENV !== "production" ? Ie(e.props) : e.props,
    $attrs: (e) => f.env.NODE_ENV !== "production" ? Ie(e.attrs) : e.attrs,
    $slots: (e) => f.env.NODE_ENV !== "production" ? Ie(e.slots) : e.slots,
    $refs: (e) => f.env.NODE_ENV !== "production" ? Ie(e.refs) : e.refs,
    $parent: (e) => oo(e.parent),
    $root: (e) => oo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ci(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $n(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ls.bind(e.proxy)),
    $watch: (e) => Yl.bind(e)
  })
), Co = (e) => e === "_" || e === "$", Bn = (e, t) => e !== W && !e.__isScriptSetup && H(e, t), si = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: c, appContext: a } = e;
    if (f.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let g;
    if (t[0] !== "$") {
      const D = s[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Bn(o, t))
          return s[t] = 1, o[t];
        if (r !== W && H(r, t))
          return s[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (g = e.propsOptions[0]) && H(g, t)
        )
          return s[t] = 3, i[t];
        if (n !== W && H(n, t))
          return s[t] = 4, n[t];
        ro && (s[t] = 0);
      }
    }
    const p = pt[t];
    let d, m;
    if (p)
      return t === "$attrs" ? (z(e.attrs, "get", ""), f.env.NODE_ENV !== "production" && wn()) : f.env.NODE_ENV !== "production" && t === "$slots" && z(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== W && H(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      m = a.config.globalProperties, H(m, t)
    )
      return m[t];
    f.env.NODE_ENV !== "production" && ge && (!J(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== W && Co(t[0]) && H(r, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ge && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return Bn(r, t) ? (r[t] = n, !0) : f.env.NODE_ENV !== "production" && r.__isScriptSetup && H(r, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (f.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (f.env.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (f.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, s) {
    let c;
    return !!n[s] || e !== W && H(e, s) || Bn(t, s) || (c = i[0]) && H(c, s) || H(o, s) || H(pt, s) || H(r.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
f.env.NODE_ENV !== "production" && (si.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function _l(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(pt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => pt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Q
    });
  }), t;
}
function vl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Q
    });
  });
}
function El(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Co(o[0])) {
        O(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Q
      });
    }
  });
}
function Go(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Nl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ro = !0;
function bl(e) {
  const t = ci(e), n = e.proxy, o = e.ctx;
  ro = !1, t.beforeCreate && Jo(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: s,
    watch: c,
    provide: a,
    inject: g,
    // lifecycle
    created: p,
    beforeMount: d,
    mounted: m,
    beforeUpdate: D,
    updated: S,
    activated: I,
    deactivated: ne,
    beforeDestroy: B,
    beforeUnmount: G,
    destroyed: U,
    unmounted: ue,
    render: T,
    renderTracked: ee,
    renderTriggered: _e,
    errorCaptured: oe,
    serverPrefetch: le,
    // public API
    expose: je,
    inheritAttrs: Je,
    // assets
    components: ve,
    directives: Zt,
    filters: Ro
  } = t, Ye = f.env.NODE_ENV !== "production" ? Nl() : null;
  if (f.env.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const R in F)
        Ye("Props", R);
  }
  if (g && yl(g, o, Ye), s)
    for (const F in s) {
      const R = s[F];
      P(R) ? (f.env.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: R.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = R.bind(n), f.env.NODE_ENV !== "production" && Ye("Methods", F)) : f.env.NODE_ENV !== "production" && O(
        `Method "${F}" has type "${typeof R}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    f.env.NODE_ENV !== "production" && !P(r) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = r.call(n, n);
    if (f.env.NODE_ENV !== "production" && ho(F) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !q(F))
      f.env.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = Oo(F), f.env.NODE_ENV !== "production")
      for (const R in F)
        Ye("Data", R), Co(R[0]) || Object.defineProperty(o, R, {
          configurable: !0,
          enumerable: !0,
          get: () => F[R],
          set: Q
        });
  }
  if (ro = !0, i)
    for (const F in i) {
      const R = i[F], we = P(R) ? R.bind(n, n) : P(R.get) ? R.get.bind(n, n) : Q;
      f.env.NODE_ENV !== "production" && we === Q && O(`Computed property "${F}" has no getter.`);
      const Rn = !P(R) && P(R.set) ? R.set.bind(n) : f.env.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : Q, Tt = Nc({
        get: we,
        set: Rn
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (mt) => Tt.value = mt
      }), f.env.NODE_ENV !== "production" && Ye("Computed", F);
    }
  if (c)
    for (const F in c)
      li(c[F], o, n, F);
  if (a) {
    const F = P(a) ? a.call(n) : a;
    Reflect.ownKeys(F).forEach((R) => {
      Tl(R, F[R]);
    });
  }
  p && Jo(p, e, "c");
  function ce(F, R) {
    $(R) ? R.forEach((we) => F(we.bind(n))) : R && F(R.bind(n));
  }
  if (ce(ll, d), ce(cl, m), ce(fl, D), ce(ul, S), ce(rl, I), ce(il, ne), ce(gl, oe), ce(hl, ee), ce(pl, _e), ce(al, G), ce(ii, ue), ce(dl, le), $(je))
    if (je.length) {
      const F = e.exposed || (e.exposed = {});
      je.forEach((R) => {
        Object.defineProperty(F, R, {
          get: () => n[R],
          set: (we) => n[R] = we
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Q && (e.render = T), Je != null && (e.inheritAttrs = Je), ve && (e.components = ve), Zt && (e.directives = Zt), le && oi(e);
}
function yl(e, t, n = Q) {
  $(e) && (e = io(e));
  for (const o in e) {
    const r = e[o];
    let i;
    q(r) ? "default" in r ? i = fn(
      r.from || o,
      r.default,
      !0
    ) : i = fn(r.from || o) : i = fn(r), X(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[o] = i, f.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Jo(e, t, n) {
  Fe(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function li(e, t, n, o) {
  let r = o.includes(".") ? bi(n, o) : () => n[o];
  if (J(e)) {
    const i = t[e];
    P(i) ? qn(r, i) : f.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, i);
  } else if (P(e))
    qn(r, e.bind(n));
  else if (q(e))
    if ($(e))
      e.forEach((i) => li(i, t, n, o));
    else {
      const i = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(i) ? qn(r, i, e) : f.env.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else f.env.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function ci(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = i.get(t);
  let a;
  return c ? a = c : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach(
    (g) => yn(a, g, s, !0)
  ), yn(a, t, s)), q(t) && i.set(t, a), a;
}
function yn(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && yn(e, i, n, !0), r && r.forEach(
    (s) => yn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      f.env.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Ol[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const Ol = {
  data: Yo,
  props: zo,
  emits: zo,
  // objects
  methods: Ft,
  computed: Ft,
  // lifecycle
  beforeCreate: ie,
  created: ie,
  beforeMount: ie,
  mounted: ie,
  beforeUpdate: ie,
  updated: ie,
  beforeDestroy: ie,
  beforeUnmount: ie,
  destroyed: ie,
  unmounted: ie,
  activated: ie,
  deactivated: ie,
  errorCaptured: ie,
  serverPrefetch: ie,
  // assets
  components: Ft,
  directives: Ft,
  // watch
  watch: Dl,
  // provide / inject
  provide: Yo,
  inject: wl
};
function Yo(e, t) {
  return t ? e ? function() {
    return Z(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function wl(e, t) {
  return Ft(io(e), io(t));
}
function io(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ft(e, t) {
  return e ? Z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zo(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Z(
    /* @__PURE__ */ Object.create(null),
    Go(e),
    Go(t ?? {})
  ) : t;
}
function Dl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Z(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ie(e[o], t[o]);
  return n;
}
function fi() {
  return {
    app: null,
    config: {
      isNativeTag: Hi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let xl = 0;
function Vl(e, t) {
  return function(o, r = null) {
    P(o) || (o = Z({}, o)), r != null && !q(r) && (f.env.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), r = null);
    const i = fi(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let a = !1;
    const g = i.app = {
      _uid: xl++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: cr,
      get config() {
        return i.config;
      },
      set config(p) {
        f.env.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...d) {
        return s.has(p) ? f.env.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : p && P(p.install) ? (s.add(p), p.install(g, ...d)) : P(p) ? (s.add(p), p(g, ...d)) : f.env.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), g;
      },
      mixin(p) {
        return i.mixins.includes(p) ? f.env.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : i.mixins.push(p), g;
      },
      component(p, d) {
        return f.env.NODE_ENV !== "production" && uo(p, i.config), d ? (f.env.NODE_ENV !== "production" && i.components[p] && O(`Component "${p}" has already been registered in target app.`), i.components[p] = d, g) : i.components[p];
      },
      directive(p, d) {
        return f.env.NODE_ENV !== "production" && ni(p), d ? (f.env.NODE_ENV !== "production" && i.directives[p] && O(`Directive "${p}" has already been registered in target app.`), i.directives[p] = d, g) : i.directives[p];
      },
      mount(p, d, m) {
        if (a)
          f.env.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          f.env.NODE_ENV !== "production" && p.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = g._ceVNode || ht(o, r);
          return D.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), f.env.NODE_ENV !== "production" && (i.reload = () => {
            e(
              rt(D),
              p,
              m
            );
          }), e(D, p, m), a = !0, g._container = p, p.__vue_app__ = g, f.env.NODE_ENV !== "production" && (g._instance = D.component, qs(g, cr)), Mo(D.component);
        }
      },
      onUnmount(p) {
        f.env.NODE_ENV !== "production" && typeof p != "function" && O(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), c.push(p);
      },
      unmount() {
        a ? (Fe(
          c,
          g._instance,
          16
        ), e(null, g._container), f.env.NODE_ENV !== "production" && (g._instance = null, Gs(g)), delete g._container.__vue_app__) : f.env.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(p, d) {
        return f.env.NODE_ENV !== "production" && p in i.provides && O(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), i.provides[p] = d, g;
      },
      runWithContext(p) {
        const d = Dt;
        Dt = g;
        try {
          return p();
        } finally {
          Dt = d;
        }
      }
    };
    return g;
  };
}
let Dt = null;
function Tl(e, t) {
  if (!te)
    f.env.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = te.provides;
    const o = te.parent && te.parent.provides;
    o === n && (n = te.provides = Object.create(o)), n[e] = t;
  }
}
function fn(e, t, n = !1) {
  const o = te || ge;
  if (o || Dt) {
    const r = Dt ? Dt._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(o && o.proxy) : t;
    f.env.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else f.env.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const ui = {}, ai = () => Object.create(ui), di = (e) => Object.getPrototypeOf(e) === ui;
function Sl(e, t, n, o = !1) {
  const r = {}, i = ai();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  f.env.NODE_ENV !== "production" && gi(t || {}, r, e), n ? e.props = o ? r : xs(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Cl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function $l(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, c = M(r), [a] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(f.env.NODE_ENV !== "production" && Cl(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let m = p[d];
        if (An(e.emitsOptions, m))
          continue;
        const D = t[m];
        if (a)
          if (H(i, m))
            D !== i[m] && (i[m] = D, g = !0);
          else {
            const S = be(m);
            r[S] = so(
              a,
              c,
              S,
              D,
              e,
              !1
            );
          }
        else
          D !== i[m] && (i[m] = D, g = !0);
      }
    }
  } else {
    pi(e, t, r, i) && (g = !0);
    let p;
    for (const d in c)
      (!t || // for camelCase
      !H(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = nt(d)) === d || !H(t, p))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[p] !== void 0) && (r[d] = so(
        a,
        c,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== c)
      for (const d in i)
        (!t || !H(t, d)) && (delete i[d], g = !0);
  }
  g && Ae(e.attrs, "set", ""), f.env.NODE_ENV !== "production" && gi(t || {}, r, e);
}
function pi(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let a in t) {
      if (Ht(a))
        continue;
      const g = t[a];
      let p;
      r && H(r, p = be(a)) ? !i || !i.includes(p) ? n[p] = g : (c || (c = {}))[p] = g : An(e.emitsOptions, a) || (!(a in o) || g !== o[a]) && (o[a] = g, s = !0);
    }
  if (i) {
    const a = M(n), g = c || W;
    for (let p = 0; p < i.length; p++) {
      const d = i[p];
      n[d] = so(
        r,
        a,
        d,
        g[d],
        e,
        !H(g, d)
      );
    }
  }
  return s;
}
function so(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const c = H(s, "default");
    if (c && o === void 0) {
      const a = s.default;
      if (s.type !== Function && !s.skipFactory && P(a)) {
        const { propsDefaults: g } = r;
        if (n in g)
          o = g[n];
        else {
          const p = Xt(r);
          o = g[n] = a.call(
            null,
            t
          ), p();
        }
      } else
        o = a;
      r.ce && r.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (i && !c ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === nt(n)) && (o = !0));
  }
  return o;
}
const Pl = /* @__PURE__ */ new WeakMap();
function hi(e, t, n = !1) {
  const o = n ? Pl : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, c = [];
  let a = !1;
  if (!P(e)) {
    const p = (d) => {
      a = !0;
      const [m, D] = hi(d, t, !0);
      Z(s, m), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!i && !a)
    return q(e) && o.set(e, jt), jt;
  if ($(i))
    for (let p = 0; p < i.length; p++) {
      f.env.NODE_ENV !== "production" && !J(i[p]) && O("props must be strings when using array syntax.", i[p]);
      const d = be(i[p]);
      Qo(d) && (s[d] = W);
    }
  else if (i) {
    f.env.NODE_ENV !== "production" && !q(i) && O("invalid props options", i);
    for (const p in i) {
      const d = be(p);
      if (Qo(d)) {
        const m = i[p], D = s[d] = $(m) || P(m) ? { type: m } : Z({}, m), S = D.type;
        let I = !1, ne = !0;
        if ($(S))
          for (let B = 0; B < S.length; ++B) {
            const G = S[B], U = P(G) && G.name;
            if (U === "Boolean") {
              I = !0;
              break;
            } else U === "String" && (ne = !1);
          }
        else
          I = P(S) && S.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = I, D[
          1
          /* shouldCastTrue */
        ] = ne, (I || H(D, "default")) && c.push(d);
      }
    }
  }
  const g = [s, c];
  return q(e) && o.set(e, g), g;
}
function Qo(e) {
  return e[0] !== "$" && !Ht(e) ? !0 : (f.env.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Al(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gi(e, t, n) {
  const o = M(t), r = n.propsOptions[0], i = Object.keys(e).map((s) => be(s));
  for (const s in r) {
    let c = r[s];
    c != null && Il(
      s,
      o[s],
      c,
      f.env.NODE_ENV !== "production" ? Ie(o) : o,
      !i.includes(s)
    );
  }
}
function Il(e, t, n, o, r) {
  const { type: i, required: s, validator: c, skipCheck: a } = n;
  if (s && r) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !a) {
      let g = !1;
      const p = $(i) ? i : [i], d = [];
      for (let m = 0; m < p.length && !g; m++) {
        const { valid: D, expectedType: S } = Rl(t, p[m]);
        d.push(S || ""), g = D;
      }
      if (!g) {
        O(Fl(e, t, d));
        return;
      }
    }
    c && !c(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ml = /* @__PURE__ */ Be(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Rl(e, t) {
  let n;
  const o = Al(t);
  if (o === "null")
    n = e === null;
  else if (Ml(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = q(e) : o === "Array" ? n = $(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Fl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Tn).join(" | ")}`;
  const r = n[0], i = go(t), s = Xo(t, r), c = Xo(t, i);
  return n.length === 1 && Zo(r) && !jl(r, i) && (o += ` with value ${s}`), o += `, got ${i} `, Zo(i) && (o += `with value ${c}.`), o;
}
function Xo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Zo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function jl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const mi = (e) => e[0] === "_" || e === "$stable", $o = (e) => $(e) ? e.map(Ee) : [Ee(e)], Hl = (e, t, n) => {
  if (t._n)
    return t;
  const o = el((...r) => (f.env.NODE_ENV !== "production" && te && (!n || n.root === te.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), $o(t(...r))), n);
  return o._c = !1, o;
}, _i = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (mi(r)) continue;
    const i = e[r];
    if (P(i))
      t[r] = Hl(r, i, o);
    else if (i != null) {
      f.env.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const s = $o(i);
      t[r] = () => s;
    }
  }
}, vi = (e, t) => {
  f.env.NODE_ENV !== "production" && !So(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = $o(t);
  e.slots.default = () => n;
}, lo = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, Ll = (e, t, n) => {
  const o = e.slots = ai();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (lo(o, t, n), n && gn(o, "_", r, !0)) : _i(t, o);
  } else t && vi(e, t);
}, Ul = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, s = W;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? f.env.NODE_ENV !== "production" && Me ? (lo(r, t, n), Ae(e, "set", "$slots")) : n && c === 1 ? i = !1 : lo(r, t, n) : (i = !t.$stable, _i(t, r)), s = t;
  } else t && (vi(e, t), s = { default: 1 });
  if (i)
    for (const c in r)
      !mi(c) && s[c] == null && delete r[c];
};
let It, et;
function vt(e, t) {
  e.appContext.config.performance && On() && et.mark(`vue-${t}-${e.uid}`), f.env.NODE_ENV !== "production" && Qs(e, t, On() ? et.now() : Date.now());
}
function Et(e, t) {
  if (e.appContext.config.performance && On()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    et.mark(o), et.measure(
      `<${Mn(e, e.type)}> ${t}`,
      n,
      o
    ), et.clearMarks(n), et.clearMarks(o);
  }
  f.env.NODE_ENV !== "production" && Xs(e, t, On() ? et.now() : Date.now());
}
function On() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, et = window.performance) : It = !1), It;
}
function Kl() {
  const e = [];
  if (f.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const de = nc;
function Wl(e) {
  return Bl(e);
}
function Bl(e, t) {
  Kl();
  const n = Jt();
  n.__VUE__ = !0, f.env.NODE_ENV !== "production" && xo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: s,
    createText: c,
    createComment: a,
    setText: g,
    setElementText: p,
    parentNode: d,
    nextSibling: m,
    setScopeId: D = Q,
    insertStaticContent: S
  } = e, I = (l, u, h, E = null, _ = null, v = null, w = void 0, y = null, b = f.env.NODE_ENV !== "production" && Me ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !Mt(l, u) && (E = en(l), ze(l, _, v, !0), l = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: N, ref: C, shapeFlag: x } = u;
    switch (N) {
      case Qt:
        ne(l, u, h, E);
        break;
      case Oe:
        B(l, u, h, E);
        break;
      case an:
        l == null ? G(u, h, E, w) : f.env.NODE_ENV !== "production" && U(l, u, h, w);
        break;
      case Pe:
        Zt(
          l,
          u,
          h,
          E,
          _,
          v,
          w,
          y,
          b
        );
        break;
      default:
        x & 1 ? ee(
          l,
          u,
          h,
          E,
          _,
          v,
          w,
          y,
          b
        ) : x & 6 ? Ro(
          l,
          u,
          h,
          E,
          _,
          v,
          w,
          y,
          b
        ) : x & 64 || x & 128 ? N.process(
          l,
          u,
          h,
          E,
          _,
          v,
          w,
          y,
          b,
          Ct
        ) : f.env.NODE_ENV !== "production" && O("Invalid VNode type:", N, `(${typeof N})`);
    }
    C != null && _ && bn(C, l && l.ref, v, u || l, !u);
  }, ne = (l, u, h, E) => {
    if (l == null)
      o(
        u.el = c(u.children),
        h,
        E
      );
    else {
      const _ = u.el = l.el;
      u.children !== l.children && g(_, u.children);
    }
  }, B = (l, u, h, E) => {
    l == null ? o(
      u.el = a(u.children || ""),
      h,
      E
    ) : u.el = l.el;
  }, G = (l, u, h, E) => {
    [l.el, l.anchor] = S(
      l.children,
      u,
      h,
      E,
      l.el,
      l.anchor
    );
  }, U = (l, u, h, E) => {
    if (u.children !== l.children) {
      const _ = m(l.anchor);
      T(l), [u.el, u.anchor] = S(
        u.children,
        h,
        _,
        E
      );
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, ue = ({ el: l, anchor: u }, h, E) => {
    let _;
    for (; l && l !== u; )
      _ = m(l), o(l, h, E), l = _;
    o(u, h, E);
  }, T = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = m(l), r(l), l = h;
    r(u);
  }, ee = (l, u, h, E, _, v, w, y, b) => {
    u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), l == null ? _e(
      u,
      h,
      E,
      _,
      v,
      w,
      y,
      b
    ) : je(
      l,
      u,
      _,
      v,
      w,
      y,
      b
    );
  }, _e = (l, u, h, E, _, v, w, y) => {
    let b, N;
    const { props: C, shapeFlag: x, transition: V, dirs: A } = l;
    if (b = l.el = s(
      l.type,
      v,
      C && C.is,
      C
    ), x & 8 ? p(b, l.children) : x & 16 && le(
      l.children,
      b,
      null,
      E,
      _,
      kn(l, v),
      w,
      y
    ), A && it(l, null, E, "created"), oe(b, l, l.scopeId, w, E), C) {
      for (const k in C)
        k !== "value" && !Ht(k) && i(b, k, null, C[k], v, E);
      "value" in C && i(b, "value", null, C.value, v), (N = C.onVnodeBeforeMount) && Te(N, E, l);
    }
    f.env.NODE_ENV !== "production" && (gn(b, "__vnode", l, !0), gn(b, "__vueParentComponent", E, !0)), A && it(l, null, E, "beforeMount");
    const j = kl(_, V);
    j && V.beforeEnter(b), o(b, u, h), ((N = C && C.onVnodeMounted) || j || A) && de(() => {
      N && Te(N, E, l), j && V.enter(b), A && it(l, null, E, "mounted");
    }, _);
  }, oe = (l, u, h, E, _) => {
    if (h && D(l, h), E)
      for (let v = 0; v < E.length; v++)
        D(l, E[v]);
    if (_) {
      let v = _.subTree;
      if (f.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Po(v.children) || v), u === v || wi(v.type) && (v.ssContent === u || v.ssFallback === u)) {
        const w = _.vnode;
        oe(
          l,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, le = (l, u, h, E, _, v, w, y, b = 0) => {
    for (let N = b; N < l.length; N++) {
      const C = l[N] = y ? Xe(l[N]) : Ee(l[N]);
      I(
        null,
        C,
        u,
        h,
        E,
        _,
        v,
        w,
        y
      );
    }
  }, je = (l, u, h, E, _, v, w) => {
    const y = u.el = l.el;
    f.env.NODE_ENV !== "production" && (y.__vnode = u);
    let { patchFlag: b, dynamicChildren: N, dirs: C } = u;
    b |= l.patchFlag & 16;
    const x = l.props || W, V = u.props || W;
    let A;
    if (h && st(h, !1), (A = V.onVnodeBeforeUpdate) && Te(A, h, u, l), C && it(u, l, h, "beforeUpdate"), h && st(h, !0), f.env.NODE_ENV !== "production" && Me && (b = 0, w = !1, N = null), (x.innerHTML && V.innerHTML == null || x.textContent && V.textContent == null) && p(y, ""), N ? (Je(
      l.dynamicChildren,
      N,
      y,
      h,
      E,
      kn(u, _),
      v
    ), f.env.NODE_ENV !== "production" && un(l, u)) : w || we(
      l,
      u,
      y,
      null,
      h,
      E,
      kn(u, _),
      v,
      !1
    ), b > 0) {
      if (b & 16)
        ve(y, x, V, h, _);
      else if (b & 2 && x.class !== V.class && i(y, "class", null, V.class, _), b & 4 && i(y, "style", x.style, V.style, _), b & 8) {
        const j = u.dynamicProps;
        for (let k = 0; k < j.length; k++) {
          const K = j[k], ae = x[K], fe = V[K];
          (fe !== ae || K === "value") && i(y, K, ae, fe, _, h);
        }
      }
      b & 1 && l.children !== u.children && p(y, u.children);
    } else !w && N == null && ve(y, x, V, h, _);
    ((A = V.onVnodeUpdated) || C) && de(() => {
      A && Te(A, h, u, l), C && it(u, l, h, "updated");
    }, E);
  }, Je = (l, u, h, E, _, v, w) => {
    for (let y = 0; y < u.length; y++) {
      const b = l[y], N = u[y], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === Pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mt(b, N) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? d(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      I(
        b,
        N,
        C,
        null,
        E,
        _,
        v,
        w,
        !0
      );
    }
  }, ve = (l, u, h, E, _) => {
    if (u !== h) {
      if (u !== W)
        for (const v in u)
          !Ht(v) && !(v in h) && i(
            l,
            v,
            u[v],
            null,
            _,
            E
          );
      for (const v in h) {
        if (Ht(v)) continue;
        const w = h[v], y = u[v];
        w !== y && v !== "value" && i(l, v, y, w, _, E);
      }
      "value" in h && i(l, "value", u.value, h.value, _);
    }
  }, Zt = (l, u, h, E, _, v, w, y, b) => {
    const N = u.el = l ? l.el : c(""), C = u.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: V, slotScopeIds: A } = u;
    f.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Me || x & 2048) && (x = 0, b = !1, V = null), A && (y = y ? y.concat(A) : A), l == null ? (o(N, h, E), o(C, h, E), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      C,
      _,
      v,
      w,
      y,
      b
    )) : x > 0 && x & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Je(
      l.dynamicChildren,
      V,
      h,
      _,
      v,
      w,
      y
    ), f.env.NODE_ENV !== "production" ? un(l, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && un(
        l,
        u,
        !0
        /* shallow */
      )
    )) : we(
      l,
      u,
      h,
      C,
      _,
      v,
      w,
      y,
      b
    );
  }, Ro = (l, u, h, E, _, v, w, y, b) => {
    u.slotScopeIds = y, l == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      h,
      E,
      w,
      b
    ) : Ye(
      u,
      h,
      E,
      _,
      v,
      w,
      b
    ) : ce(l, u, b);
  }, Ye = (l, u, h, E, _, v, w) => {
    const y = l.component = uc(
      l,
      E,
      _
    );
    if (f.env.NODE_ENV !== "production" && y.type.__hmrId && Ks(y), f.env.NODE_ENV !== "production" && (sn(l), vt(y, "mount")), So(l) && (y.ctx.renderer = Ct), f.env.NODE_ENV !== "production" && vt(y, "init"), pc(y, !1, w), f.env.NODE_ENV !== "production" && Et(y, "init"), y.asyncDep) {
      if (f.env.NODE_ENV !== "production" && Me && (l.el = null), _ && _.registerDep(y, F, w), !l.el) {
        const b = y.subTree = ht(Oe);
        B(null, b, u, h);
      }
    } else
      F(
        y,
        l,
        u,
        h,
        _,
        v,
        w
      );
    f.env.NODE_ENV !== "production" && (ln(), Et(y, "mount"));
  }, ce = (l, u, h) => {
    const E = u.component = l.component;
    if (ec(l, u, h))
      if (E.asyncDep && !E.asyncResolved) {
        f.env.NODE_ENV !== "production" && sn(u), R(E, u, h), f.env.NODE_ENV !== "production" && ln();
        return;
      } else
        E.next = u, E.update();
    else
      u.el = l.el, E.vnode = u;
  }, F = (l, u, h, E, _, v, w) => {
    const y = () => {
      if (l.isMounted) {
        let { next: x, bu: V, u: A, parent: j, vnode: k } = l;
        {
          const xe = Ei(l);
          if (xe) {
            x && (x.el = k.el, R(l, x, w)), xe.asyncDep.then(() => {
              l.isUnmounted || y();
            });
            return;
          }
        }
        let K = x, ae;
        f.env.NODE_ENV !== "production" && sn(x || l.vnode), st(l, !1), x ? (x.el = k.el, R(l, x, w)) : x = k, V && Pt(V), (ae = x.props && x.props.onVnodeBeforeUpdate) && Te(ae, j, x, k), st(l, !0), f.env.NODE_ENV !== "production" && vt(l, "render");
        const fe = tr(l);
        f.env.NODE_ENV !== "production" && Et(l, "render");
        const De = l.subTree;
        l.subTree = fe, f.env.NODE_ENV !== "production" && vt(l, "patch"), I(
          De,
          fe,
          // parent may have changed if it's in a teleport
          d(De.el),
          // anchor may have changed if it's in a fragment
          en(De),
          l,
          _,
          v
        ), f.env.NODE_ENV !== "production" && Et(l, "patch"), x.el = fe.el, K === null && tc(l, fe.el), A && de(A, _), (ae = x.props && x.props.onVnodeUpdated) && de(
          () => Te(ae, j, x, k),
          _
        ), f.env.NODE_ENV !== "production" && Zr(l), f.env.NODE_ENV !== "production" && ln();
      } else {
        let x;
        const { el: V, props: A } = u, { bm: j, m: k, parent: K, root: ae, type: fe } = l, De = Kt(u);
        st(l, !1), j && Pt(j), !De && (x = A && A.onVnodeBeforeMount) && Te(x, K, u), st(l, !0);
        {
          ae.ce && ae.ce._injectChildStyle(fe), f.env.NODE_ENV !== "production" && vt(l, "render");
          const xe = l.subTree = tr(l);
          f.env.NODE_ENV !== "production" && Et(l, "render"), f.env.NODE_ENV !== "production" && vt(l, "patch"), I(
            null,
            xe,
            h,
            E,
            l,
            _,
            v
          ), f.env.NODE_ENV !== "production" && Et(l, "patch"), u.el = xe.el;
        }
        if (k && de(k, _), !De && (x = A && A.onVnodeMounted)) {
          const xe = u;
          de(
            () => Te(x, K, xe),
            _
          );
        }
        (u.shapeFlag & 256 || K && Kt(K.vnode) && K.vnode.shapeFlag & 256) && l.a && de(l.a, _), l.isMounted = !0, f.env.NODE_ENV !== "production" && Js(l), u = h = E = null;
      }
    };
    l.scope.on();
    const b = l.effect = new Vr(y);
    l.scope.off();
    const N = l.update = b.run.bind(b), C = l.job = b.runIfDirty.bind(b);
    C.i = l, C.id = l.uid, b.scheduler = () => $n(C), st(l, !0), f.env.NODE_ENV !== "production" && (b.onTrack = l.rtc ? (x) => Pt(l.rtc, x) : void 0, b.onTrigger = l.rtg ? (x) => Pt(l.rtg, x) : void 0), N();
  }, R = (l, u, h) => {
    u.component = l;
    const E = l.vnode.props;
    l.vnode = u, l.next = null, $l(l, u.props, E, h), Ul(l, u.children, h), ke(), ko(l), qe();
  }, we = (l, u, h, E, _, v, w, y, b = !1) => {
    const N = l && l.children, C = l ? l.shapeFlag : 0, x = u.children, { patchFlag: V, shapeFlag: A } = u;
    if (V > 0) {
      if (V & 128) {
        Tt(
          N,
          x,
          h,
          E,
          _,
          v,
          w,
          y,
          b
        );
        return;
      } else if (V & 256) {
        Rn(
          N,
          x,
          h,
          E,
          _,
          v,
          w,
          y,
          b
        );
        return;
      }
    }
    A & 8 ? (C & 16 && St(N, _, v), x !== N && p(h, x)) : C & 16 ? A & 16 ? Tt(
      N,
      x,
      h,
      E,
      _,
      v,
      w,
      y,
      b
    ) : St(N, _, v, !0) : (C & 8 && p(h, ""), A & 16 && le(
      x,
      h,
      E,
      _,
      v,
      w,
      y,
      b
    ));
  }, Rn = (l, u, h, E, _, v, w, y, b) => {
    l = l || jt, u = u || jt;
    const N = l.length, C = u.length, x = Math.min(N, C);
    let V;
    for (V = 0; V < x; V++) {
      const A = u[V] = b ? Xe(u[V]) : Ee(u[V]);
      I(
        l[V],
        A,
        h,
        null,
        _,
        v,
        w,
        y,
        b
      );
    }
    N > C ? St(
      l,
      _,
      v,
      !0,
      !1,
      x
    ) : le(
      u,
      h,
      E,
      _,
      v,
      w,
      y,
      b,
      x
    );
  }, Tt = (l, u, h, E, _, v, w, y, b) => {
    let N = 0;
    const C = u.length;
    let x = l.length - 1, V = C - 1;
    for (; N <= x && N <= V; ) {
      const A = l[N], j = u[N] = b ? Xe(u[N]) : Ee(u[N]);
      if (Mt(A, j))
        I(
          A,
          j,
          h,
          null,
          _,
          v,
          w,
          y,
          b
        );
      else
        break;
      N++;
    }
    for (; N <= x && N <= V; ) {
      const A = l[x], j = u[V] = b ? Xe(u[V]) : Ee(u[V]);
      if (Mt(A, j))
        I(
          A,
          j,
          h,
          null,
          _,
          v,
          w,
          y,
          b
        );
      else
        break;
      x--, V--;
    }
    if (N > x) {
      if (N <= V) {
        const A = V + 1, j = A < C ? u[A].el : E;
        for (; N <= V; )
          I(
            null,
            u[N] = b ? Xe(u[N]) : Ee(u[N]),
            h,
            j,
            _,
            v,
            w,
            y,
            b
          ), N++;
      }
    } else if (N > V)
      for (; N <= x; )
        ze(l[N], _, v, !0), N++;
    else {
      const A = N, j = N, k = /* @__PURE__ */ new Map();
      for (N = j; N <= V; N++) {
        const re = u[N] = b ? Xe(u[N]) : Ee(u[N]);
        re.key != null && (f.env.NODE_ENV !== "production" && k.has(re.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(re.key),
          "Make sure keys are unique."
        ), k.set(re.key, N));
      }
      let K, ae = 0;
      const fe = V - j + 1;
      let De = !1, xe = 0;
      const $t = new Array(fe);
      for (N = 0; N < fe; N++) $t[N] = 0;
      for (N = A; N <= x; N++) {
        const re = l[N];
        if (ae >= fe) {
          ze(re, _, v, !0);
          continue;
        }
        let Ve;
        if (re.key != null)
          Ve = k.get(re.key);
        else
          for (K = j; K <= V; K++)
            if ($t[K - j] === 0 && Mt(re, u[K])) {
              Ve = K;
              break;
            }
        Ve === void 0 ? ze(re, _, v, !0) : ($t[Ve - j] = N + 1, Ve >= xe ? xe = Ve : De = !0, I(
          re,
          u[Ve],
          h,
          null,
          _,
          v,
          w,
          y,
          b
        ), ae++);
      }
      const jo = De ? ql($t) : jt;
      for (K = jo.length - 1, N = fe - 1; N >= 0; N--) {
        const re = j + N, Ve = u[re], Ho = re + 1 < C ? u[re + 1].el : E;
        $t[N] === 0 ? I(
          null,
          Ve,
          h,
          Ho,
          _,
          v,
          w,
          y,
          b
        ) : De && (K < 0 || N !== jo[K] ? mt(Ve, h, Ho, 2) : K--);
      }
    }
  }, mt = (l, u, h, E, _ = null) => {
    const { el: v, type: w, transition: y, children: b, shapeFlag: N } = l;
    if (N & 6) {
      mt(l.component.subTree, u, h, E);
      return;
    }
    if (N & 128) {
      l.suspense.move(u, h, E);
      return;
    }
    if (N & 64) {
      w.move(l, u, h, Ct);
      return;
    }
    if (w === Pe) {
      o(v, u, h);
      for (let x = 0; x < b.length; x++)
        mt(b[x], u, h, E);
      o(l.anchor, u, h);
      return;
    }
    if (w === an) {
      ue(l, u, h);
      return;
    }
    if (E !== 2 && N & 1 && y)
      if (E === 0)
        y.beforeEnter(v), o(v, u, h), de(() => y.enter(v), _);
      else {
        const { leave: x, delayLeave: V, afterLeave: A } = y, j = () => o(v, u, h), k = () => {
          x(v, () => {
            j(), A && A();
          });
        };
        V ? V(v, j, k) : k();
      }
    else
      o(v, u, h);
  }, ze = (l, u, h, E = !1, _ = !1) => {
    const {
      type: v,
      props: w,
      ref: y,
      children: b,
      dynamicChildren: N,
      shapeFlag: C,
      patchFlag: x,
      dirs: V,
      cacheIndex: A
    } = l;
    if (x === -2 && (_ = !1), y != null && bn(y, null, h, l, !0), A != null && (u.renderCache[A] = void 0), C & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const j = C & 1 && V, k = !Kt(l);
    let K;
    if (k && (K = w && w.onVnodeBeforeUnmount) && Te(K, u, l), C & 6)
      Ii(l.component, h, E);
    else {
      if (C & 128) {
        l.suspense.unmount(h, E);
        return;
      }
      j && it(l, null, u, "beforeUnmount"), C & 64 ? l.type.remove(
        l,
        u,
        h,
        Ct,
        E
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Pe || x > 0 && x & 64) ? St(
        N,
        u,
        h,
        !1,
        !0
      ) : (v === Pe && x & 384 || !_ && C & 16) && St(b, u, h), E && Fn(l);
    }
    (k && (K = w && w.onVnodeUnmounted) || j) && de(() => {
      K && Te(K, u, l), j && it(l, null, u, "unmounted");
    }, h);
  }, Fn = (l) => {
    const { type: u, el: h, anchor: E, transition: _ } = l;
    if (u === Pe) {
      f.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && _ && !_.persisted ? l.children.forEach((w) => {
        w.type === Oe ? r(w.el) : Fn(w);
      }) : Ai(h, E);
      return;
    }
    if (u === an) {
      T(l);
      return;
    }
    const v = () => {
      r(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: y } = _, b = () => w(h, v);
      y ? y(l.el, v, b) : b();
    } else
      v();
  }, Ai = (l, u) => {
    let h;
    for (; l !== u; )
      h = m(l), r(l), l = h;
    r(u);
  }, Ii = (l, u, h) => {
    f.env.NODE_ENV !== "production" && l.type.__hmrId && Ws(l);
    const { bum: E, scope: _, job: v, subTree: w, um: y, m: b, a: N } = l;
    er(b), er(N), E && Pt(E), _.stop(), v && (v.flags |= 8, ze(w, l, u, h)), y && de(y, u), de(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), f.env.NODE_ENV !== "production" && zs(l);
  }, St = (l, u, h, E = !1, _ = !1, v = 0) => {
    for (let w = v; w < l.length; w++)
      ze(l[w], u, h, E, _);
  }, en = (l) => {
    if (l.shapeFlag & 6)
      return en(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const u = m(l.anchor || l.el), h = u && u[tl];
    return h ? m(h) : u;
  };
  let jn = !1;
  const Fo = (l, u, h) => {
    l == null ? u._vnode && ze(u._vnode, null, null, !0) : I(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = l, jn || (jn = !0, ko(), zr(), jn = !1);
  }, Ct = {
    p: I,
    um: ze,
    m: mt,
    r: Fn,
    mt: Ye,
    mc: le,
    pc: we,
    pbc: Je,
    n: en,
    o: e
  };
  return {
    render: Fo,
    hydrate: void 0,
    createApp: Vl(Fo)
  };
}
function kn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function st({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function kl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function un(e, t, n = !1) {
  const o = e.children, r = t.children;
  if ($(o) && $(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = Xe(r[i]), c.el = s.el), !n && c.patchFlag !== -2 && un(s, c)), c.type === Qt && (c.el = s.el), f.env.NODE_ENV !== "production" && c.type === Oe && !c.el && (c.el = s.el);
    }
}
function ql(e) {
  const t = e.slice(), n = [0];
  let o, r, i, s, c;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const g = e[o];
    if (g !== 0) {
      if (r = n[n.length - 1], e[r] < g) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        c = i + s >> 1, e[n[c]] < g ? i = c + 1 : s = c;
      g < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
function Ei(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ei(t);
}
function er(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Gl = Symbol.for("v-scx"), Jl = () => {
  {
    const e = fn(Gl);
    return e || f.env.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function qn(e, t, n) {
  return f.env.NODE_ENV !== "production" && !P(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ni(e, t, n);
}
function Ni(e, t, n = W) {
  const { immediate: o, deep: r, flush: i, once: s } = n;
  f.env.NODE_ENV !== "production" && !t && (o !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = Z({}, n);
  f.env.NODE_ENV !== "production" && (c.onWarn = O);
  const a = t && o || !t && i !== "post";
  let g;
  if (qt) {
    if (i === "sync") {
      const D = Jl();
      g = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!a) {
      const D = () => {
      };
      return D.stop = Q, D.resume = Q, D.pause = Q, D;
    }
  }
  const p = te;
  c.call = (D, S, I) => Fe(D, p, S, I);
  let d = !1;
  i === "post" ? c.scheduler = (D) => {
    de(D, p && p.suspense);
  } : i !== "sync" && (d = !0, c.scheduler = (D, S) => {
    S ? D() : $n(D);
  }), c.augmentJob = (D) => {
    t && (D.flags |= 4), d && (D.flags |= 2, p && (D.id = p.uid, D.i = p));
  };
  const m = As(e, t, c);
  return qt && (g ? g.push(m) : a && m()), m;
}
function Yl(e, t, n) {
  const o = this.proxy, r = J(e) ? e.includes(".") ? bi(o, e) : () => o[e] : e.bind(o, o);
  let i;
  P(t) ? i = t : (i = t.handler, n = t);
  const s = Xt(this), c = Ni(r, i.bind(o), n);
  return s(), c;
}
function bi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const zl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${be(t)}Modifiers`] || e[`${nt(t)}Modifiers`];
function Ql(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || W;
  if (f.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [d]
    } = e;
    if (p)
      if (!(t in p))
        (!d || !(lt(be(t)) in d)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${lt(be(t))}" prop.`
        );
      else {
        const m = p[t];
        P(m) && (m(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), s = i && zl(o, t.slice(7));
  if (s && (s.trim && (r = n.map((p) => J(p) ? p.trim() : p)), s.number && (r = n.map(Gi))), f.env.NODE_ENV !== "production" && Zs(e, t, r), f.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[lt(p)] && O(
      `Event "${p}" is emitted in component ${Mn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${nt(
        t
      )}" instead of "${t}".`
    );
  }
  let c, a = o[c = lt(t)] || // also try camelCase event handler (#2249)
  o[c = lt(be(t))];
  !a && i && (a = o[c = lt(nt(t))]), a && Fe(
    a,
    e,
    6,
    r
  );
  const g = o[c + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Fe(
      g,
      e,
      6,
      r
    );
  }
}
function yi(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, c = !1;
  if (!P(e)) {
    const a = (g) => {
      const p = yi(g, t, !0);
      p && (c = !0, Z(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !c ? (q(e) && o.set(e, null), null) : ($(i) ? i.forEach((a) => s[a] = null) : Z(s, i), q(e) && o.set(e, s), s);
}
function An(e, t) {
  return !e || !Gt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, nt(t)) || H(e, t));
}
let co = !1;
function wn() {
  co = !0;
}
function tr(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [i],
    slots: s,
    attrs: c,
    emit: a,
    render: g,
    renderCache: p,
    props: d,
    data: m,
    setupState: D,
    ctx: S,
    inheritAttrs: I
  } = e, ne = Nn(e);
  let B, G;
  f.env.NODE_ENV !== "production" && (co = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = r || o, ee = f.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(T, {
        get(_e, oe, le) {
          return O(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(_e, oe, le);
        }
      }) : T;
      B = Ee(
        g.call(
          ee,
          T,
          p,
          f.env.NODE_ENV !== "production" ? Ie(d) : d,
          D,
          m,
          S
        )
      ), G = c;
    } else {
      const T = t;
      f.env.NODE_ENV !== "production" && c === d && wn(), B = Ee(
        T.length > 1 ? T(
          f.env.NODE_ENV !== "production" ? Ie(d) : d,
          f.env.NODE_ENV !== "production" ? {
            get attrs() {
              return wn(), Ie(c);
            },
            slots: s,
            emit: a
          } : { attrs: c, slots: s, emit: a }
        ) : T(
          f.env.NODE_ENV !== "production" ? Ie(d) : d,
          null
        )
      ), G = t.props ? c : Xl(c);
    }
  } catch (T) {
    Yt(T, e, 1), B = ht(Oe);
  }
  let U = B, ue;
  if (f.env.NODE_ENV !== "production" && B.patchFlag > 0 && B.patchFlag & 2048 && ([U, ue] = Oi(B)), G && I !== !1) {
    const T = Object.keys(G), { shapeFlag: ee } = U;
    if (T.length) {
      if (ee & 7)
        i && T.some(hn) && (G = Zl(
          G,
          i
        )), U = rt(U, G, !1, !0);
      else if (f.env.NODE_ENV !== "production" && !co && U.type !== Oe) {
        const _e = Object.keys(c), oe = [], le = [];
        for (let je = 0, Je = _e.length; je < Je; je++) {
          const ve = _e[je];
          Gt(ve) ? hn(ve) || oe.push(ve[2].toLowerCase() + ve.slice(3)) : le.push(ve);
        }
        le.length && O(
          `Extraneous non-props attributes (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), oe.length && O(
          `Extraneous non-emits event listeners (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (f.env.NODE_ENV !== "production" && !nr(U) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = rt(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (f.env.NODE_ENV !== "production" && !nr(U) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), To(U, n.transition)), f.env.NODE_ENV !== "production" && ue ? ue(U) : B = U, Nn(ne), B;
}
const Oi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Po(t, !1);
  if (o) {
    if (f.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Oi(o);
  } else return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, s = (c) => {
    t[r] = c, n && (i > -1 ? n[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ee(o), s];
};
function Po(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (In(r)) {
      if (r.type !== Oe || r.children === "v-if") {
        if (n)
          return;
        if (n = r, f.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Po(n.children);
      }
    } else
      return;
  }
  return n;
}
const Xl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Gt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zl = (e, t) => {
  const n = {};
  for (const o in e)
    (!hn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, nr = (e) => e.shapeFlag & 7 || e.type === Oe;
function ec(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: s, children: c, patchFlag: a } = t, g = i.emitsOptions;
  if (f.env.NODE_ENV !== "production" && (r || c) && Me || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? or(o, s, g) : !!s;
    if (a & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const m = p[d];
        if (s[m] !== o[m] && !An(g, m))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? or(o, s, g) : !0 : !!s;
  return !1;
}
function or(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !An(n, i))
      return !0;
  }
  return !1;
}
function tc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const wi = (e) => e.__isSuspense;
function nc(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : Yr(e);
}
const Pe = Symbol.for("v-fgt"), Qt = Symbol.for("v-txt"), Oe = Symbol.for("v-cmt"), an = Symbol.for("v-stc");
let tt = null, Ao = 1;
function rr(e, t = !1) {
  Ao += e, e < 0 && tt && t && (tt.hasOnce = !0);
}
function In(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Mt(e, t) {
  if (f.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = cn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const oc = (...e) => xi(
  ...e
), Di = ({ key: e }) => e ?? null, dn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || X(e) || P(e) ? { i: ge, r: e, k: t, f: !!n } : e : null);
function rc(e, t = null, n = null, o = 0, r = null, i = e === Pe ? 0 : 1, s = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Di(t),
    ref: t && dn(t),
    scopeId: ti,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  };
  return c ? (Io(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= J(n) ? 8 : 16), f.env.NODE_ENV !== "production" && a.key !== a.key && O("VNode created with invalid key (NaN). VNode type:", a.type), Ao > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  tt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && tt.push(a), a;
}
const ht = f.env.NODE_ENV !== "production" ? oc : xi;
function xi(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === ml) && (f.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = Oe), In(e)) {
    const c = rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Io(c, n), Ao > 0 && !i && tt && (c.shapeFlag & 6 ? tt[tt.indexOf(e)] = c : tt.push(c)), c.patchFlag = -2, c;
  }
  if ($i(e) && (e = e.__vccOpts), t) {
    t = ic(t);
    let { class: c, style: a } = t;
    c && !J(c) && (t.class = vo(c)), q(a) && (mn(a) && !$(a) && (a = Z({}, a)), t.style = _o(a));
  }
  const s = J(e) ? 1 : wi(e) ? 128 : nl(e) ? 64 : q(e) ? 4 : P(e) ? 2 : 0;
  return f.env.NODE_ENV !== "production" && s & 4 && mn(e) && (e = M(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), rc(
    e,
    t,
    n,
    o,
    r,
    s,
    i,
    !0
  );
}
function ic(e) {
  return e ? mn(e) || di(e) ? Z({}, e) : e : null;
}
function rt(e, t, n = !1, o = !1) {
  const { props: r, ref: i, patchFlag: s, children: c, transition: a } = e, g = t ? lc(r || {}, t) : r, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && Di(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? $(i) ? i.concat(dn(t)) : [i, dn(t)] : dn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f.env.NODE_ENV !== "production" && s === -1 && $(c) ? c.map(Vi) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Pe ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rt(e.ssContent),
    ssFallback: e.ssFallback && rt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && To(
    p,
    a.clone(p)
  ), p;
}
function Vi(e) {
  const t = rt(e);
  return $(e.children) && (t.children = e.children.map(Vi)), t;
}
function sc(e = " ", t = 0) {
  return ht(Qt, null, e, t);
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? ht(Oe) : $(e) ? ht(
    Pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : In(e) ? Xe(e) : ht(Qt, null, String(e));
}
function Xe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rt(e);
}
function Io(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Io(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !di(t) ? t._ctx = ge : r === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else P(t) ? (t = { default: t, _ctx: ge }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [sc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function lc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = vo([t.class, o.class]));
      else if (r === "style")
        t.style = _o([t.style, o.style]);
      else if (Gt(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !($(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Te(e, t, n, o = null) {
  Fe(e, t, 7, [
    n,
    o
  ]);
}
const cc = fi();
let fc = 0;
function uc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || cc, i = {
    uid: fc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ss(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: hi(o, r),
    emitsOptions: yi(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return f.env.NODE_ENV !== "production" ? i.ctx = _l(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ql.bind(null, i), e.ce && e.ce(i), i;
}
let te = null;
const ac = () => te || ge;
let Dn, fo;
{
  const e = Jt(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
      r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
    };
  };
  Dn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), fo = t(
    "__VUE_SSR_SETTERS__",
    (n) => qt = n
  );
}
const Xt = (e) => {
  const t = te;
  return Dn(e), e.scope.on(), () => {
    e.scope.off(), Dn(t);
  };
}, ir = () => {
  te && te.scope.off(), Dn(null);
}, dc = /* @__PURE__ */ Be("slot,component");
function uo(e, { isNativeTag: t }) {
  (dc(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ti(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function pc(e, t = !1, n = !1) {
  t && fo(t);
  const { props: o, children: r } = e.vnode, i = Ti(e);
  Sl(e, o, i, t), Ll(e, r, n);
  const s = i ? hc(e, t) : void 0;
  return t && fo(!1), s;
}
function hc(e, t) {
  var n;
  const o = e.type;
  if (f.env.NODE_ENV !== "production") {
    if (o.name && uo(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        uo(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        ni(i[s]);
    }
    o.compilerOptions && gc() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, si), f.env.NODE_ENV !== "production" && vl(e);
  const { setup: r } = o;
  if (r) {
    ke();
    const i = e.setupContext = r.length > 1 ? _c(e) : null, s = Xt(e), c = Vt(
      r,
      e,
      0,
      [
        f.env.NODE_ENV !== "production" ? Ie(e.props) : e.props,
        i
      ]
    ), a = ho(c);
    if (qe(), s(), (a || e.sp) && !Kt(e) && oi(e), a) {
      if (c.then(ir, ir), t)
        return c.then((g) => {
          sr(e, g, t);
        }).catch((g) => {
          Yt(g, e, 0);
        });
      if (e.asyncDep = c, f.env.NODE_ENV !== "production" && !e.suspense) {
        const g = (n = o.name) != null ? n : "Anonymous";
        O(
          `Component <${g}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      sr(e, c, t);
  } else
    Si(e, t);
}
function sr(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (f.env.NODE_ENV !== "production" && In(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), f.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = kr(t), f.env.NODE_ENV !== "production" && El(e)) : f.env.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Si(e, n);
}
const gc = () => !0;
function Si(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Q);
  {
    const r = Xt(e);
    ke();
    try {
      bl(e);
    } finally {
      qe(), r();
    }
  }
  f.env.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", o));
}
const lr = f.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return wn(), z(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return z(e, "get", ""), e[t];
  }
};
function mc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return z(e, "get", "$slots"), t[n];
    }
  });
}
function _c(e) {
  const t = (n) => {
    if (f.env.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : X(n) && (o = "ref")), o !== "object" && O(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (f.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, lr));
      },
      get slots() {
        return o || (o = mc(e));
      },
      get emit() {
        return (r, ...i) => e.emit(r, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, lr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Mo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(kr(Vs(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in pt)
        return pt[n](e);
    },
    has(t, n) {
      return n in t || n in pt;
    }
  })) : e.proxy;
}
const vc = /(?:^|[-_])(\w)/g, Ec = (e) => e.replace(vc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ci(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Mn(e, t, n = !1) {
  let o = Ci(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Ec(o) : n ? "App" : "Anonymous";
}
function $i(e) {
  return P(e) && "__vccOpts" in e;
}
const Nc = (e, t) => {
  const n = $s(e, t, qt);
  if (f.env.NODE_ENV !== "production") {
    const o = ac();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function bc() {
  if (f.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(d) {
      return q(d) ? d.__isVue ? ["div", e, "VueInstance"] : X(d) ? [
        "div",
        {},
        ["span", e, p(d)],
        "<",
        // avoid debugger accessing value affecting behavior
        c("_value" in d ? d._value : d),
        ">"
      ] : Ot(d) ? [
        "div",
        {},
        ["span", e, me(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${ot(d) ? " (readonly)" : ""}`
      ] : ot(d) ? [
        "div",
        {},
        ["span", e, me(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const m = [];
    d.type.props && d.props && m.push(s("props", M(d.props))), d.setupState !== W && m.push(s("setup", d.setupState)), d.data !== W && m.push(s("data", M(d.data)));
    const D = a(d, "computed");
    D && m.push(s("computed", D));
    const S = a(d, "inject");
    return S && m.push(s("injected", S)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), m;
  }
  function s(d, m) {
    return m = Z({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(m[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, m = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : q(d) ? ["object", { object: m ? M(d) : d }] : ["span", n, String(d)];
  }
  function a(d, m) {
    const D = d.type;
    if (P(D))
      return;
    const S = {};
    for (const I in d.ctx)
      g(D, I, m) && (S[I] = d.ctx[I]);
    return S;
  }
  function g(d, m, D) {
    const S = d[D];
    if ($(S) && S.includes(m) || q(S) && m in S || d.extends && g(d.extends, m, D) || d.mixins && d.mixins.some((I) => g(I, m, D)))
      return !0;
  }
  function p(d) {
    return me(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const cr = "3.5.13", Ke = f.env.NODE_ENV !== "production" ? O : Q;
f.env.NODE_ENV;
f.env.NODE_ENV;
let ao;
const fr = typeof window < "u" && window.trustedTypes;
if (fr)
  try {
    ao = /* @__PURE__ */ fr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    f.env.NODE_ENV !== "production" && Ke(`Error creating trusted types policy: ${e}`);
  }
const Pi = ao ? (e) => ao.createHTML(e) : (e) => e, yc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", Le = typeof document < "u" ? document : null, ur = Le && /* @__PURE__ */ Le.createElement("template"), wc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Le.createElementNS(yc, e) : t === "mathml" ? Le.createElementNS(Oc, e) : n ? Le.createElement(e, { is: n }) : Le.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Le.createTextNode(e),
  createComment: (e) => Le.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Le.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      ur.innerHTML = Pi(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ur.content;
      if (o === "svg" || o === "mathml") {
        const a = c.firstChild;
        for (; a.firstChild; )
          c.appendChild(a.firstChild);
        c.removeChild(a);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Dc = Symbol("_vtc");
function xc(e, t, n) {
  const o = e[Dc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ar = Symbol("_vod"), Vc = Symbol("_vsh");
f.env.NODE_ENV;
const Tc = Symbol(f.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Sc = /(^|;)\s*display\s*:/;
function Cc(e, t, n) {
  const o = e.style, r = J(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (J(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          n[c] == null && pn(o, c, "");
        }
      else
        for (const s in t)
          n[s] == null && pn(o, s, "");
    for (const s in n)
      s === "display" && (i = !0), pn(o, s, n[s]);
  } else if (r) {
    if (t !== n) {
      const s = o[Tc];
      s && (n += ";" + s), o.cssText = n, i = Sc.test(n);
    }
  } else t && e.removeAttribute("style");
  ar in e && (e[ar] = i ? o.display : "", e[Vc] && (o.display = "none"));
}
const $c = /[^\\];\s*$/, dr = /\s*!important$/;
function pn(e, t, n) {
  if ($(n))
    n.forEach((o) => pn(e, t, o));
  else if (n == null && (n = ""), f.env.NODE_ENV !== "production" && $c.test(n) && Ke(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Pc(e, t);
    dr.test(n) ? e.setProperty(
      nt(o),
      n.replace(dr, ""),
      "important"
    ) : e[o] = n;
  }
}
const pr = ["Webkit", "Moz", "ms"], Gn = {};
function Pc(e, t) {
  const n = Gn[t];
  if (n)
    return n;
  let o = be(t);
  if (o !== "filter" && o in e)
    return Gn[t] = o;
  o = Tn(o);
  for (let r = 0; r < pr.length; r++) {
    const i = pr[r] + o;
    if (i in e)
      return Gn[t] = i;
  }
  return t;
}
const hr = "http://www.w3.org/1999/xlink";
function gr(e, t, n, o, r, i = is(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(hr, t.slice(6, t.length)) : e.setAttributeNS(hr, t, n) : n == null || i && !xr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : xt(n) ? String(n) : n
  );
}
function mr(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Pi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const c = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = xr(n) : n == null && c === "string" ? (n = "", s = !0) : c === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    f.env.NODE_ENV !== "production" && !s && Ke(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  s && e.removeAttribute(r || t);
}
function Ac(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ic(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const _r = Symbol("_vei");
function Mc(e, t, n, o, r = null) {
  const i = e[_r] || (e[_r] = {}), s = i[t];
  if (o && s)
    s.value = f.env.NODE_ENV !== "production" ? Er(o, t) : o;
  else {
    const [c, a] = Rc(t);
    if (o) {
      const g = i[t] = Hc(
        f.env.NODE_ENV !== "production" ? Er(o, t) : o,
        r
      );
      Ac(e, c, g, a);
    } else s && (Ic(e, c, s, a), i[t] = void 0);
  }
}
const vr = /(?:Once|Passive|Capture)$/;
function Rc(e) {
  let t;
  if (vr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(vr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let Jn = 0;
const Fc = /* @__PURE__ */ Promise.resolve(), jc = () => Jn || (Fc.then(() => Jn = 0), Jn = Date.now());
function Hc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Fe(
      Lc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = jc(), n;
}
function Er(e, t) {
  return P(e) || $(e) ? e : (Ke(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Q);
}
function Lc(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const Nr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Uc = (e, t, n, o, r, i) => {
  const s = r === "svg";
  t === "class" ? xc(e, o, s) : t === "style" ? Cc(e, n, o) : Gt(t) ? hn(t) || Mc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, o, s)) ? (mr(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && gr(e, t, o, s, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(o)) ? mr(e, be(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), gr(e, t, o, s));
};
function Kc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Nr(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Nr(t) && J(n) ? !1 : t in e;
}
const Wc = /* @__PURE__ */ Z({ patchProp: Uc }, wc);
let br;
function Bc() {
  return br || (br = Wl(Wc));
}
const kc = (...e) => {
  const t = Bc().createApp(...e);
  f.env.NODE_ENV !== "production" && (Gc(t), Jc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Yc(o);
    if (!r) return;
    const i = t._component;
    !P(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const s = n(r, !1, qc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
  }, t;
};
function qc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ts(t) || ns(t) || os(t),
    writable: !1
  });
}
function Jc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ke(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ke(o), n;
      },
      set() {
        Ke(o);
      }
    });
  }
}
function Yc(e) {
  if (J(e)) {
    const t = document.querySelector(e);
    return f.env.NODE_ENV !== "production" && !t && Ke(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return f.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ke(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function zc() {
  bc();
}
f.env.NODE_ENV !== "production" && zc();
const Qc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Xc = {};
function Zc(e, t) {
  return " Hello world ";
}
const ef = /* @__PURE__ */ Qc(Xc, [["render", Zc]]);
function tf({ model: e, el: t }) {
  const n = kc(ef);
  return console.log("mounting on", t), n.mount(t), () => n.unmount();
}
const of = { render: tf };
export {
  of as default
};
