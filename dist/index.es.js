import { watch as wn, inject as Kt, provide as wi, onUnmounted as ts, onBeforeUnmount as is, ref as Pn, onMounted as es, markRaw as ns, h as os } from "vue";
const ss = (c) => !c || typeof c.charAt != "function" ? c : c.charAt(0).toUpperCase() + c.slice(1), At = (c) => typeof c == "function", rs = (c, d, h) => {
  for (const g in h) {
    const _ = "set" + ss(g);
    c[_] ? wn(
      () => h[g],
      (C, v) => {
        c[_](C, v);
      }
    ) : d[_] && wn(
      () => h[g],
      (C) => {
        d[_](C);
      }
    );
  }
}, Jt = (c, d, h = {}) => {
  const g = { ...h };
  for (const _ in c) {
    const C = d[_], v = c[_];
    C && (C && C.custom === !0 || v !== void 0 && (g[_] = v));
  }
  return g;
}, as = (c) => {
  const d = {};
  for (const h in c)
    if (h.startsWith("on") && !h.startsWith("onUpdate") && h !== "onReady") {
      const g = h.slice(2).toLocaleLowerCase();
      d[g] = c[h];
    }
  return d;
}, hs = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || void 0, us = "useGlobalLeaflet", ls = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, cs = (c) => ({ options: c.options, methods: {} }), xn = {
  ...ls,
  pane: {
    type: String
  },
  attribution: {
    type: String
  },
  name: {
    type: String,
    custom: !0
  },
  layerType: {
    type: String,
    custom: !0
  },
  visible: {
    type: Boolean,
    custom: !0,
    default: !0
  }
}, ds = (c, d, h) => {
  const g = Kt("addLayer"), _ = Kt("removeLayer"), {
    options: C,
    methods: v
  } = cs(c), H = Jt(c, xn, C), m = () => g({ leafletObject: d.value }), G = () => _({ leafletObject: d.value }), W = {
    ...v,
    setAttribution(M) {
      G(), d.value.options.attribution = M, c.visible && m();
    },
    setName() {
      G(), c.visible && m();
    },
    setLayerType() {
      G(), c.visible && m();
    },
    setVisible(M) {
      d.value && (M ? m() : G());
    },
    bindPopup({ leafletObject: M }) {
      if (!d.value || !At(d.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      d.value.bindPopup(M);
    },
    bindTooltip({ leafletObject: M }) {
      if (!d.value || !At(d.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      d.value.bindTooltip(M);
    },
    unbindTooltip() {
      d.value && (At(d.value.closeTooltip) && d.value.closeTooltip(), At(d.value.unbindTooltip) && d.value.unbindTooltip());
    },
    unbindPopup() {
      d.value && (At(d.value.closePopup) && d.value.closePopup(), At(d.value.unbindPopup) && d.value.unbindPopup());
    },
    updateVisibleProp(M) {
      h.emit("update:visible", M);
    }
  };
  return wi("bindPopup", W.bindPopup), wi("bindTooltip", W.bindTooltip), wi("unbindTooltip", W.unbindTooltip), wi("unbindPopup", W.unbindPopup), ts(() => {
    W.unbindPopup(), W.unbindTooltip(), G();
  }), { options: H, methods: W };
}, Ln = {
  ...xn,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, fs = (c, d, h) => {
  const { options: g, methods: _ } = ds(
    c,
    d,
    h
  );
  return { options: Jt(
    c,
    Ln,
    g
  ), methods: _ };
}, bn = {
  ...Ln,
  stroke: {
    type: Boolean,
    default: void 0
  },
  color: {
    type: String
  },
  weight: {
    type: Number
  },
  opacity: {
    type: Number
  },
  lineCap: {
    type: String
  },
  lineJoin: {
    type: String
  },
  dashArray: {
    type: String
  },
  dashOffset: {
    type: String
  },
  fill: {
    type: Boolean,
    default: void 0
  },
  fillColor: {
    type: String
  },
  fillOpacity: {
    type: Number
  },
  fillRule: {
    type: String
  },
  className: {
    type: String
  }
}, _s = (c, d, h) => {
  const {
    options: g,
    methods: _
  } = fs(c, d, h), C = Jt(
    c,
    bn,
    g
  ), v = Kt("removeLayer"), H = {
    ..._,
    setStroke(m) {
      d.value.setStyle({ stroke: m });
    },
    setColor(m) {
      d.value.setStyle({ color: m });
    },
    setWeight(m) {
      d.value.setStyle({ weight: m });
    },
    setOpacity(m) {
      d.value.setStyle({ opacity: m });
    },
    setLineCap(m) {
      d.value.setStyle({ lineCap: m });
    },
    setLineJoin(m) {
      d.value.setStyle({ lineJoin: m });
    },
    setDashArray(m) {
      d.value.setStyle({ dashArray: m });
    },
    setDashOffset(m) {
      d.value.setStyle({ dashOffset: m });
    },
    setFill(m) {
      d.value.setStyle({ fill: m });
    },
    setFillColor(m) {
      d.value.setStyle({ fillColor: m });
    },
    setFillOpacity(m) {
      d.value.setStyle({ fillOpacity: m });
    },
    setFillRule(m) {
      d.value.setStyle({ fillRule: m });
    },
    setClassName(m) {
      d.value.setStyle({ className: m });
    }
  };
  return is(() => {
    v({ leafletObject: d.value });
  }), { options: C, methods: H };
}, Tn = {
  ...bn,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: !0,
    custom: !0
  }
}, ms = (c, d, h) => {
  const { options: g, methods: _ } = _s(
    c,
    d,
    h
  ), C = Jt(c, Tn, g), v = {
    ..._,
    setRadius(H) {
      d.value.setRadius(H);
    },
    setLatLng(H) {
      d.value.setLatLng(H);
    }
  };
  return { options: C, methods: v };
}, Mn = {
  ...Tn,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, ps = (c, d, h) => {
  const {
    options: g,
    methods: _
  } = ms(c, d, h), C = Jt(
    c,
    Mn,
    g
  ), v = {
    ..._
  };
  return { options: C, methods: v };
};
var vs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pi = {}, gs = {
  get exports() {
    return Pi;
  },
  set exports(c) {
    Pi = c;
  }
};
/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(c, d) {
  (function(h, g) {
    g(d);
  })(vs, function(h) {
    var g = "1.9.3";
    function _(t) {
      var i, e, n, o;
      for (e = 1, n = arguments.length; e < n; e++) {
        o = arguments[e];
        for (i in o)
          t[i] = o[i];
      }
      return t;
    }
    var C = Object.create || function() {
      function t() {
      }
      return function(i) {
        return t.prototype = i, new t();
      };
    }();
    function v(t, i) {
      var e = Array.prototype.slice;
      if (t.bind)
        return t.bind.apply(t, e.call(arguments, 1));
      var n = e.call(arguments, 2);
      return function() {
        return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
      };
    }
    var H = 0;
    function m(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++H), t._leaflet_id;
    }
    function G(t, i, e) {
      var n, o, s, r;
      return r = function() {
        n = !1, o && (s.apply(e, o), o = !1);
      }, s = function() {
        n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0);
      }, s;
    }
    function W(t, i, e) {
      var n = i[1], o = i[0], s = n - o;
      return t === n && e ? t : ((t - o) % s + s) % s + o;
    }
    function M() {
      return !1;
    }
    function q(t, i) {
      if (i === !1)
        return t;
      var e = Math.pow(10, i === void 0 ? 6 : i);
      return Math.round(t * e) / e;
    }
    function N(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function K(t) {
      return N(t).split(/\s+/);
    }
    function S(t, i) {
      Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? C(t.options) : {});
      for (var e in i)
        t.options[e] = i[e];
      return t.options;
    }
    function mt(t, i, e) {
      var n = [];
      for (var o in t)
        n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
      return (!i || i.indexOf("?") === -1 ? "?" : "&") + n.join("&");
    }
    var it = /\{ *([\w_ -]+) *\}/g;
    function $t(t, i) {
      return t.replace(it, function(e, n) {
        var o = i[n];
        if (o === void 0)
          throw new Error("No value provided for variable " + e);
        return typeof o == "function" && (o = o(i)), o;
      });
    }
    var et = Array.isArray || function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    function xi(t, i) {
      for (var e = 0; e < t.length; e++)
        if (t[e] === i)
          return e;
      return -1;
    }
    var Qt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function Li(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var se = 0;
    function re(t) {
      var i = +new Date(), e = Math.max(0, 16 - (i - se));
      return se = i + e, window.setTimeout(t, e);
    }
    var bi = window.requestAnimationFrame || Li("RequestAnimationFrame") || re, ae = window.cancelAnimationFrame || Li("CancelAnimationFrame") || Li("CancelRequestAnimationFrame") || function(t) {
      window.clearTimeout(t);
    };
    function V(t, i, e) {
      if (e && bi === re)
        t.call(i);
      else
        return bi.call(window, v(t, i));
    }
    function J(t) {
      t && ae.call(window, t);
    }
    var Sn = {
      __proto__: null,
      extend: _,
      create: C,
      bind: v,
      get lastId() {
        return H;
      },
      stamp: m,
      throttle: G,
      wrapNum: W,
      falseFn: M,
      formatNum: q,
      trim: N,
      splitWords: K,
      setOptions: S,
      getParamString: mt,
      template: $t,
      isArray: et,
      indexOf: xi,
      emptyImageUrl: Qt,
      requestFn: bi,
      cancelFn: ae,
      requestAnimFrame: V,
      cancelAnimFrame: J
    };
    function ut() {
    }
    ut.extend = function(t) {
      var i = function() {
        S(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, e = i.__super__ = this.prototype, n = C(e);
      n.constructor = i, i.prototype = n;
      for (var o in this)
        Object.prototype.hasOwnProperty.call(this, o) && o !== "prototype" && o !== "__super__" && (i[o] = this[o]);
      return t.statics && _(i, t.statics), t.includes && (Cn(t.includes), _.apply(null, [n].concat(t.includes))), _(n, t), delete n.statics, delete n.includes, n.options && (n.options = e.options ? C(e.options) : {}, _(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
        if (!this._initHooksCalled) {
          e.callInitHooks && e.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var s = 0, r = n._initHooks.length; s < r; s++)
            n._initHooks[s].call(this);
        }
      }, i;
    }, ut.include = function(t) {
      var i = this.prototype.options;
      return _(this.prototype, t), t.options && (this.prototype.options = i, this.mergeOptions(t.options)), this;
    }, ut.mergeOptions = function(t) {
      return _(this.prototype.options, t), this;
    }, ut.addInitHook = function(t) {
      var i = Array.prototype.slice.call(arguments, 1), e = typeof t == "function" ? t : function() {
        this[t].apply(this, i);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this;
    };
    function Cn(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = et(t) ? t : [t];
        for (var i = 0; i < t.length; i++)
          t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var X = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(t, i, e) {
        if (typeof t == "object")
          for (var n in t)
            this._on(n, t[n], i);
        else {
          t = K(t);
          for (var o = 0, s = t.length; o < s; o++)
            this._on(t[o], i, e);
        }
        return this;
      },
      /* @method off(type: String, fn?: Function, context?: Object): this
       * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
       *
       * @alternative
       * @method off(eventMap: Object): this
       * Removes a set of type/listener pairs.
       *
       * @alternative
       * @method off: this
       * Removes all listeners to all events on the object. This includes implicitly attached events.
       */
      off: function(t, i, e) {
        if (!arguments.length)
          delete this._events;
        else if (typeof t == "object")
          for (var n in t)
            this._off(n, t[n], i);
        else {
          t = K(t);
          for (var o = arguments.length === 1, s = 0, r = t.length; s < r; s++)
            o ? this._off(t[s]) : this._off(t[s], i, e);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(t, i, e, n) {
        if (typeof i != "function") {
          console.warn("wrong listener type: " + typeof i);
          return;
        }
        if (this._listens(t, i, e) === !1) {
          e === this && (e = void 0);
          var o = { fn: i, ctx: e };
          n && (o.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(o);
        }
      },
      _off: function(t, i, e) {
        var n, o, s;
        if (this._events && (n = this._events[t], !!n)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (o = 0, s = n.length; o < s; o++)
                n[o].fn = M;
            delete this._events[t];
            return;
          }
          if (typeof i != "function") {
            console.warn("wrong listener type: " + typeof i);
            return;
          }
          var r = this._listens(t, i, e);
          if (r !== !1) {
            var a = n[r];
            this._firingCount && (a.fn = M, this._events[t] = n = n.slice()), n.splice(r, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(t, i, e) {
        if (!this.listens(t, e))
          return this;
        var n = _({}, i, {
          type: t,
          target: this,
          sourceTarget: i && i.sourceTarget || this
        });
        if (this._events) {
          var o = this._events[t];
          if (o) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var s = 0, r = o.length; s < r; s++) {
              var a = o[s], u = a.fn;
              a.once && this.off(t, u, a.ctx), u.call(a.ctx || this, n);
            }
            this._firingCount--;
          }
        }
        return e && this._propagateEvent(n), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(t, i, e, n) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var o = i;
        typeof i != "function" && (n = !!i, o = void 0, e = void 0);
        var s = this._events && this._events[t];
        if (s && s.length && this._listens(t, o, e) !== !1)
          return !0;
        if (n) {
          for (var r in this._eventParents)
            if (this._eventParents[r].listens(t, i, e, n))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(t, i, e) {
        if (!this._events)
          return !1;
        var n = this._events[t] || [];
        if (!i)
          return !!n.length;
        e === this && (e = void 0);
        for (var o = 0, s = n.length; o < s; o++)
          if (n[o].fn === i && n[o].ctx === e)
            return o;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(t, i, e) {
        if (typeof t == "object")
          for (var n in t)
            this._on(n, t[n], i, !0);
        else {
          t = K(t);
          for (var o = 0, s = t.length; o < s; o++)
            this._on(t[o], i, e, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[m(t)] = t, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(t) {
        return this._eventParents && delete this._eventParents[m(t)], this;
      },
      _propagateEvent: function(t) {
        for (var i in this._eventParents)
          this._eventParents[i].fire(t.type, _({
            layer: t.target,
            propagatedFrom: t.target
          }, t), !0);
      }
    };
    X.addEventListener = X.on, X.removeEventListener = X.clearAllEventListeners = X.off, X.addOneTimeEventListener = X.once, X.fireEvent = X.fire, X.hasEventListeners = X.listens;
    var It = ut.extend(X);
    function P(t, i, e) {
      this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i;
    }
    var he = Math.trunc || function(t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
    P.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new P(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(t) {
        return this.clone()._add(w(t));
      },
      _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(t) {
        return this.clone()._subtract(w(t));
      },
      _subtract: function(t) {
        return this.x -= t.x, this.y -= t.y, this;
      },
      // @method divideBy(num: Number): Point
      // Returns the result of division of the current point by the given number.
      divideBy: function(t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function(t) {
        return this.x /= t, this.y /= t, this;
      },
      // @method multiplyBy(num: Number): Point
      // Returns the result of multiplication of the current point by the given number.
      multiplyBy: function(t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function(t) {
        return this.x *= t, this.y *= t, this;
      },
      // @method scaleBy(scale: Point): Point
      // Multiply each coordinate of the current point by each coordinate of
      // `scale`. In linear algebra terms, multiply the point by the
      // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
      // defined by `scale`.
      scaleBy: function(t) {
        return new P(this.x * t.x, this.y * t.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(t) {
        return new P(this.x / t.x, this.y / t.y);
      },
      // @method round(): Point
      // Returns a copy of the current point with rounded coordinates.
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      // @method floor(): Point
      // Returns a copy of the current point with floored coordinates (rounded down).
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      // @method ceil(): Point
      // Returns a copy of the current point with ceiled coordinates (rounded up).
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      // @method trunc(): Point
      // Returns a copy of the current point with truncated coordinates (rounded towards zero).
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = he(this.x), this.y = he(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(t) {
        t = w(t);
        var i = t.x - this.x, e = t.y - this.y;
        return Math.sqrt(i * i + e * e);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(t) {
        return t = w(t), t.x === this.x && t.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(t) {
        return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + q(this.x) + ", " + q(this.y) + ")";
      }
    };
    function w(t, i, e) {
      return t instanceof P ? t : et(t) ? new P(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new P(t.x, t.y) : new P(t, i, e);
    }
    function A(t, i) {
      if (t)
        for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
          this.extend(e[n]);
    }
    A.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var i, e;
        if (!t)
          return this;
        if (t instanceof P || typeof t[0] == "number" || "x" in t)
          i = e = w(t);
        else if (t = j(t), i = t.min, e = t.max, !i || !e)
          return this;
        return !this.min && !this.max ? (this.min = i.clone(), this.max = e.clone()) : (this.min.x = Math.min(i.x, this.min.x), this.max.x = Math.max(e.x, this.max.x), this.min.y = Math.min(i.y, this.min.y), this.max.y = Math.max(e.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(t) {
        return w(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return w(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return w(this.max.x, this.min.y);
      },
      // @method getTopLeft(): Point
      // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
      getTopLeft: function() {
        return this.min;
      },
      // @method getBottomRight(): Point
      // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
      getBottomRight: function() {
        return this.max;
      },
      // @method getSize(): Point
      // Returns the size of the given bounds
      getSize: function() {
        return this.max.subtract(this.min);
      },
      // @method contains(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains(point: Point): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        var i, e;
        return typeof t[0] == "number" || t instanceof P ? t = w(t) : t = j(t), t instanceof A ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(t) {
        t = j(t);
        var i = this.min, e = this.max, n = t.min, o = t.max, s = o.x >= i.x && n.x <= e.x, r = o.y >= i.y && n.y <= e.y;
        return s && r;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(t) {
        t = j(t);
        var i = this.min, e = this.max, n = t.min, o = t.max, s = o.x > i.x && n.x < e.x, r = o.y > i.y && n.y < e.y;
        return s && r;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this.min && this.max);
      },
      // @method pad(bufferRatio: Number): Bounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var i = this.min, e = this.max, n = Math.abs(i.x - e.x) * t, o = Math.abs(i.y - e.y) * t;
        return j(
          w(i.x - n, i.y - o),
          w(e.x + n, e.y + o)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(t) {
        return t ? (t = j(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
      }
    };
    function j(t, i) {
      return !t || t instanceof A ? t : new A(t, i);
    }
    function Y(t, i) {
      if (t)
        for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
          this.extend(e[n]);
    }
    Y.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var i = this._southWest, e = this._northEast, n, o;
        if (t instanceof E)
          n = t, o = t;
        else if (t instanceof Y) {
          if (n = t._southWest, o = t._northEast, !n || !o)
            return this;
        } else
          return t ? this.extend(O(t) || F(t)) : this;
        return !i && !e ? (this._southWest = new E(n.lat, n.lng), this._northEast = new E(o.lat, o.lng)) : (i.lat = Math.min(n.lat, i.lat), i.lng = Math.min(n.lng, i.lng), e.lat = Math.max(o.lat, e.lat), e.lng = Math.max(o.lng, e.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var i = this._southWest, e = this._northEast, n = Math.abs(i.lat - e.lat) * t, o = Math.abs(i.lng - e.lng) * t;
        return new Y(
          new E(i.lat - n, i.lng - o),
          new E(e.lat + n, e.lng + o)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new E(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      // @method getSouthWest(): LatLng
      // Returns the south-west point of the bounds.
      getSouthWest: function() {
        return this._southWest;
      },
      // @method getNorthEast(): LatLng
      // Returns the north-east point of the bounds.
      getNorthEast: function() {
        return this._northEast;
      },
      // @method getNorthWest(): LatLng
      // Returns the north-west point of the bounds.
      getNorthWest: function() {
        return new E(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new E(this.getSouth(), this.getEast());
      },
      // @method getWest(): Number
      // Returns the west longitude of the bounds
      getWest: function() {
        return this._southWest.lng;
      },
      // @method getSouth(): Number
      // Returns the south latitude of the bounds
      getSouth: function() {
        return this._southWest.lat;
      },
      // @method getEast(): Number
      // Returns the east longitude of the bounds
      getEast: function() {
        return this._northEast.lng;
      },
      // @method getNorth(): Number
      // Returns the north latitude of the bounds
      getNorth: function() {
        return this._northEast.lat;
      },
      // @method contains(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains (latlng: LatLng): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        typeof t[0] == "number" || t instanceof E || "lat" in t ? t = O(t) : t = F(t);
        var i = this._southWest, e = this._northEast, n, o;
        return t instanceof Y ? (n = t.getSouthWest(), o = t.getNorthEast()) : n = o = t, n.lat >= i.lat && o.lat <= e.lat && n.lng >= i.lng && o.lng <= e.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(t) {
        t = F(t);
        var i = this._southWest, e = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat >= i.lat && n.lat <= e.lat, r = o.lng >= i.lng && n.lng <= e.lng;
        return s && r;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(t) {
        t = F(t);
        var i = this._southWest, e = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat > i.lat && n.lat < e.lat, r = o.lng > i.lng && n.lng < e.lng;
        return s && r;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, i) {
        return t ? (t = F(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function F(t, i) {
      return t instanceof Y ? t : new Y(t, i);
    }
    function E(t, i, e) {
      if (isNaN(t) || isNaN(i))
        throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
      this.lat = +t, this.lng = +i, e !== void 0 && (this.alt = +e);
    }
    E.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, i) {
        if (!t)
          return !1;
        t = O(t);
        var e = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return e <= (i === void 0 ? 1e-9 : i);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(t) {
        return "LatLng(" + q(this.lat, t) + ", " + q(this.lng, t) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(t) {
        return pt.distance(this, O(t));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return pt.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(t) {
        var i = 180 * t / 40075017, e = i / Math.cos(Math.PI / 180 * this.lat);
        return F(
          [this.lat - i, this.lng - e],
          [this.lat + i, this.lng + e]
        );
      },
      clone: function() {
        return new E(this.lat, this.lng, this.alt);
      }
    };
    function O(t, i, e) {
      return t instanceof E ? t : et(t) && typeof t[0] != "object" ? t.length === 3 ? new E(t[0], t[1], t[2]) : t.length === 2 ? new E(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new E(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : i === void 0 ? null : new E(t, i, e);
    }
    var lt = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(t, i) {
        var e = this.projection.project(t), n = this.scale(i);
        return this.transformation._transform(e, n);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(t, i) {
        var e = this.scale(i), n = this.transformation.untransform(t, e);
        return this.projection.unproject(n);
      },
      // @method project(latlng: LatLng): Point
      // Projects geographical coordinates into coordinates in units accepted for
      // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
      project: function(t) {
        return this.projection.project(t);
      },
      // @method unproject(point: Point): LatLng
      // Given a projected coordinate returns the corresponding LatLng.
      // The inverse of `project`.
      unproject: function(t) {
        return this.projection.unproject(t);
      },
      // @method scale(zoom: Number): Number
      // Returns the scale used when transforming projected coordinates into
      // pixel coordinates for a particular zoom. For example, it returns
      // `256 * 2^zoom` for Mercator-based CRS.
      scale: function(t) {
        return 256 * Math.pow(2, t);
      },
      // @method zoom(scale: Number): Number
      // Inverse of `scale()`, returns the zoom level corresponding to a scale
      // factor of `scale`.
      zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      // @method getProjectedBounds(zoom: Number): Bounds
      // Returns the projection's bounds scaled and transformed for the provided `zoom`.
      getProjectedBounds: function(t) {
        if (this.infinite)
          return null;
        var i = this.projection.bounds, e = this.scale(t), n = this.transformation.transform(i.min, e), o = this.transformation.transform(i.max, e);
        return new A(n, o);
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates.
      // @property code: String
      // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
      //
      // @property wrapLng: Number[]
      // An array of two numbers defining whether the longitude (horizontal) coordinate
      // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
      // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
      //
      // @property wrapLat: Number[]
      // Like `wrapLng`, but for the latitude (vertical) axis.
      // wrapLng: [min, max],
      // wrapLat: [min, max],
      // @property infinite: Boolean
      // If true, the coordinate space will be unbounded (infinite in both axes)
      infinite: !1,
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where lat and lng has been wrapped according to the
      // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
      wrapLatLng: function(t) {
        var i = this.wrapLng ? W(t.lng, this.wrapLng, !0) : t.lng, e = this.wrapLat ? W(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
        return new E(e, i, n);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(t) {
        var i = t.getCenter(), e = this.wrapLatLng(i), n = i.lat - e.lat, o = i.lng - e.lng;
        if (n === 0 && o === 0)
          return t;
        var s = t.getSouthWest(), r = t.getNorthEast(), a = new E(s.lat - n, s.lng - o), u = new E(r.lat - n, r.lng - o);
        return new Y(a, u);
      }
    }, pt = _({}, lt, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(t, i) {
        var e = Math.PI / 180, n = t.lat * e, o = i.lat * e, s = Math.sin((i.lat - t.lat) * e / 2), r = Math.sin((i.lng - t.lng) * e / 2), a = s * s + Math.cos(n) * Math.cos(o) * r * r, u = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.R * u;
      }
    }), ue = 6378137, Ti = {
      R: ue,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var i = Math.PI / 180, e = this.MAX_LATITUDE, n = Math.max(Math.min(e, t.lat), -e), o = Math.sin(n * i);
        return new P(
          this.R * t.lng * i,
          this.R * Math.log((1 + o) / (1 - o)) / 2
        );
      },
      unproject: function(t) {
        var i = 180 / Math.PI;
        return new E(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i,
          t.x * i / this.R
        );
      },
      bounds: function() {
        var t = ue * Math.PI;
        return new A([-t, -t], [t, t]);
      }()
    };
    function Mi(t, i, e, n) {
      if (et(t)) {
        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
        return;
      }
      this._a = t, this._b = i, this._c = e, this._d = n;
    }
    Mi.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(t, i) {
        return this._transform(t.clone(), i);
      },
      // destructive transform (faster)
      _transform: function(t, i) {
        return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(t, i) {
        return i = i || 1, new P(
          (t.x / i - this._b) / this._a,
          (t.y / i - this._d) / this._c
        );
      }
    };
    function Bt(t, i, e, n) {
      return new Mi(t, i, e, n);
    }
    var Si = _({}, pt, {
      code: "EPSG:3857",
      projection: Ti,
      transformation: function() {
        var t = 0.5 / (Math.PI * Ti.R);
        return Bt(t, 0.5, -t, 0.5);
      }()
    }), zn = _({}, Si, {
      code: "EPSG:900913"
    });
    function le(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function ce(t, i) {
      var e = "", n, o, s, r, a, u;
      for (n = 0, s = t.length; n < s; n++) {
        for (a = t[n], o = 0, r = a.length; o < r; o++)
          u = a[o], e += (o ? "L" : "M") + u.x + " " + u.y;
        e += i ? p.svg ? "z" : "x" : "";
      }
      return e || "M0 0";
    }
    var Ci = document.documentElement.style, ti = "ActiveXObject" in window, kn = ti && !document.addEventListener, de = "msLaunchUri" in navigator && !("documentMode" in document), zi = st("webkit"), fe = st("android"), _e = st("android 2") || st("android 3"), En = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), On = fe && st("Google") && En < 537 && !("AudioNode" in window), ki = !!window.opera, me = !de && st("chrome"), pe = st("gecko") && !zi && !ki && !ti, Zn = !me && st("safari"), ve = st("phantom"), ge = "OTransition" in Ci, An = navigator.platform.indexOf("Win") === 0, ye = ti && "transition" in Ci, Ei = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !_e, we = "MozPerspective" in Ci, In = !window.L_DISABLE_3D && (ye || Ei || we) && !ge && !ve, Nt = typeof orientation < "u" || st("mobile"), Bn = Nt && zi, Nn = Nt && Ei, Pe = !window.PointerEvent && window.MSPointerEvent, xe = !!(window.PointerEvent || Pe), Le = "ontouchstart" in window || !!window.TouchEvent, Dn = !window.L_NO_TOUCH && (Le || xe), Rn = Nt && ki, Fn = Nt && pe, Hn = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Wn = function() {
      var t = !1;
      try {
        var i = Object.defineProperty({}, "passive", {
          get: function() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", M, i), window.removeEventListener("testPassiveEventSupport", M, i);
      } catch {
      }
      return t;
    }(), Un = function() {
      return !!document.createElement("canvas").getContext;
    }(), Oi = !!(document.createElementNS && le("svg").createSVGRect), Gn = !!Oi && function() {
      var t = document.createElement("div");
      return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), qn = !Oi && function() {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var i = t.firstChild;
        return i.style.behavior = "url(#default#VML)", i && typeof i.adj == "object";
      } catch {
        return !1;
      }
    }(), Vn = navigator.platform.indexOf("Mac") === 0, jn = navigator.platform.indexOf("Linux") === 0;
    function st(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var p = {
      ie: ti,
      ielt9: kn,
      edge: de,
      webkit: zi,
      android: fe,
      android23: _e,
      androidStock: On,
      opera: ki,
      chrome: me,
      gecko: pe,
      safari: Zn,
      phantom: ve,
      opera12: ge,
      win: An,
      ie3d: ye,
      webkit3d: Ei,
      gecko3d: we,
      any3d: In,
      mobile: Nt,
      mobileWebkit: Bn,
      mobileWebkit3d: Nn,
      msPointer: Pe,
      pointer: xe,
      touch: Dn,
      touchNative: Le,
      mobileOpera: Rn,
      mobileGecko: Fn,
      retina: Hn,
      passiveEvents: Wn,
      canvas: Un,
      svg: Oi,
      vml: qn,
      inlineSvg: Gn,
      mac: Vn,
      linux: jn
    }, be = p.msPointer ? "MSPointerDown" : "pointerdown", Te = p.msPointer ? "MSPointerMove" : "pointermove", Me = p.msPointer ? "MSPointerUp" : "pointerup", Se = p.msPointer ? "MSPointerCancel" : "pointercancel", Zi = {
      touchstart: be,
      touchmove: Te,
      touchend: Me,
      touchcancel: Se
    }, Ce = {
      touchstart: Qn,
      touchmove: ii,
      touchend: ii,
      touchcancel: ii
    }, Mt = {}, ze = !1;
    function Yn(t, i, e) {
      return i === "touchstart" && $n(), Ce[i] ? (e = Ce[i].bind(this, e), t.addEventListener(Zi[i], e, !1), e) : (console.warn("wrong event specified:", i), M);
    }
    function Xn(t, i, e) {
      if (!Zi[i]) {
        console.warn("wrong event specified:", i);
        return;
      }
      t.removeEventListener(Zi[i], e, !1);
    }
    function Kn(t) {
      Mt[t.pointerId] = t;
    }
    function Jn(t) {
      Mt[t.pointerId] && (Mt[t.pointerId] = t);
    }
    function ke(t) {
      delete Mt[t.pointerId];
    }
    function $n() {
      ze || (document.addEventListener(be, Kn, !0), document.addEventListener(Te, Jn, !0), document.addEventListener(Me, ke, !0), document.addEventListener(Se, ke, !0), ze = !0);
    }
    function ii(t, i) {
      if (i.pointerType !== (i.MSPOINTER_TYPE_MOUSE || "mouse")) {
        i.touches = [];
        for (var e in Mt)
          i.touches.push(Mt[e]);
        i.changedTouches = [i], t(i);
      }
    }
    function Qn(t, i) {
      i.MSPOINTER_TYPE_TOUCH && i.pointerType === i.MSPOINTER_TYPE_TOUCH && U(i), ii(t, i);
    }
    function to(t) {
      var i = {}, e, n;
      for (n in t)
        e = t[n], i[n] = e && e.bind ? e.bind(t) : e;
      return t = i, i.type = "dblclick", i.detail = 2, i.isTrusted = !1, i._simulated = !0, i;
    }
    var io = 200;
    function eo(t, i) {
      t.addEventListener("dblclick", i);
      var e = 0, n;
      function o(s) {
        if (s.detail !== 1) {
          n = s.detail;
          return;
        }
        if (!(s.pointerType === "mouse" || s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents)) {
          var r = Ie(s);
          if (!(r.some(function(u) {
            return u instanceof HTMLLabelElement && u.attributes.for;
          }) && !r.some(function(u) {
            return u instanceof HTMLInputElement || u instanceof HTMLSelectElement;
          }))) {
            var a = Date.now();
            a - e <= io ? (n++, n === 2 && i(to(s))) : n = 1, e = a;
          }
        }
      }
      return t.addEventListener("click", o), {
        dblclick: i,
        simDblclick: o
      };
    }
    function no(t, i) {
      t.removeEventListener("dblclick", i.dblclick), t.removeEventListener("click", i.simDblclick);
    }
    var Ai = oi(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), Dt = oi(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), Ee = Dt === "webkitTransition" || Dt === "OTransition" ? Dt + "End" : "transitionend";
    function Oe(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function Rt(t, i) {
      var e = t.style[i] || t.currentStyle && t.currentStyle[i];
      if ((!e || e === "auto") && document.defaultView) {
        var n = document.defaultView.getComputedStyle(t, null);
        e = n ? n[i] : null;
      }
      return e === "auto" ? null : e;
    }
    function k(t, i, e) {
      var n = document.createElement(t);
      return n.className = i || "", e && e.appendChild(n), n;
    }
    function I(t) {
      var i = t.parentNode;
      i && i.removeChild(t);
    }
    function ei(t) {
      for (; t.firstChild; )
        t.removeChild(t.firstChild);
    }
    function St(t) {
      var i = t.parentNode;
      i && i.lastChild !== t && i.appendChild(t);
    }
    function Ct(t) {
      var i = t.parentNode;
      i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
    }
    function Ii(t, i) {
      if (t.classList !== void 0)
        return t.classList.contains(i);
      var e = ni(t);
      return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
    }
    function b(t, i) {
      if (t.classList !== void 0)
        for (var e = K(i), n = 0, o = e.length; n < o; n++)
          t.classList.add(e[n]);
      else if (!Ii(t, i)) {
        var s = ni(t);
        Bi(t, (s ? s + " " : "") + i);
      }
    }
    function B(t, i) {
      t.classList !== void 0 ? t.classList.remove(i) : Bi(t, N((" " + ni(t) + " ").replace(" " + i + " ", " ")));
    }
    function Bi(t, i) {
      t.className.baseVal === void 0 ? t.className = i : t.className.baseVal = i;
    }
    function ni(t) {
      return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
    }
    function $(t, i) {
      "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && oo(t, i);
    }
    function oo(t, i) {
      var e = !1, n = "DXImageTransform.Microsoft.Alpha";
      try {
        e = t.filters.item(n);
      } catch {
        if (i === 1)
          return;
      }
      i = Math.round(i * 100), e ? (e.Enabled = i !== 100, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")";
    }
    function oi(t) {
      for (var i = document.documentElement.style, e = 0; e < t.length; e++)
        if (t[e] in i)
          return t[e];
      return !1;
    }
    function wt(t, i, e) {
      var n = i || new P(0, 0);
      t.style[Ai] = (p.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "");
    }
    function D(t, i) {
      t._leaflet_pos = i, p.any3d ? wt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px");
    }
    function Pt(t) {
      return t._leaflet_pos || new P(0, 0);
    }
    var Ft, Ht, Ni;
    if ("onselectstart" in document)
      Ft = function() {
        x(window, "selectstart", U);
      }, Ht = function() {
        Z(window, "selectstart", U);
      };
    else {
      var Wt = oi(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      Ft = function() {
        if (Wt) {
          var t = document.documentElement.style;
          Ni = t[Wt], t[Wt] = "none";
        }
      }, Ht = function() {
        Wt && (document.documentElement.style[Wt] = Ni, Ni = void 0);
      };
    }
    function Di() {
      x(window, "dragstart", U);
    }
    function Ri() {
      Z(window, "dragstart", U);
    }
    var si, Fi;
    function Hi(t) {
      for (; t.tabIndex === -1; )
        t = t.parentNode;
      t.style && (ri(), si = t, Fi = t.style.outline, t.style.outline = "none", x(window, "keydown", ri));
    }
    function ri() {
      si && (si.style.outline = Fi, si = void 0, Fi = void 0, Z(window, "keydown", ri));
    }
    function Ze(t) {
      do
        t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function Wi(t) {
      var i = t.getBoundingClientRect();
      return {
        x: i.width / t.offsetWidth || 1,
        y: i.height / t.offsetHeight || 1,
        boundingClientRect: i
      };
    }
    var so = {
      __proto__: null,
      TRANSFORM: Ai,
      TRANSITION: Dt,
      TRANSITION_END: Ee,
      get: Oe,
      getStyle: Rt,
      create: k,
      remove: I,
      empty: ei,
      toFront: St,
      toBack: Ct,
      hasClass: Ii,
      addClass: b,
      removeClass: B,
      setClass: Bi,
      getClass: ni,
      setOpacity: $,
      testProp: oi,
      setTransform: wt,
      setPosition: D,
      getPosition: Pt,
      get disableTextSelection() {
        return Ft;
      },
      get enableTextSelection() {
        return Ht;
      },
      disableImageDrag: Di,
      enableImageDrag: Ri,
      preventOutline: Hi,
      restoreOutline: ri,
      getSizedParentNode: Ze,
      getScale: Wi
    };
    function x(t, i, e, n) {
      if (i && typeof i == "object")
        for (var o in i)
          Gi(t, o, i[o], e);
      else {
        i = K(i);
        for (var s = 0, r = i.length; s < r; s++)
          Gi(t, i[s], e, n);
      }
      return this;
    }
    var rt = "_leaflet_events";
    function Z(t, i, e, n) {
      if (arguments.length === 1)
        Ae(t), delete t[rt];
      else if (i && typeof i == "object")
        for (var o in i)
          qi(t, o, i[o], e);
      else if (i = K(i), arguments.length === 2)
        Ae(t, function(a) {
          return xi(i, a) !== -1;
        });
      else
        for (var s = 0, r = i.length; s < r; s++)
          qi(t, i[s], e, n);
      return this;
    }
    function Ae(t, i) {
      for (var e in t[rt]) {
        var n = e.split(/\d/)[0];
        (!i || i(n)) && qi(t, n, null, null, e);
      }
    }
    var Ui = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function Gi(t, i, e, n) {
      var o = i + m(e) + (n ? "_" + m(n) : "");
      if (t[rt] && t[rt][o])
        return this;
      var s = function(a) {
        return e.call(n || t, a || window.event);
      }, r = s;
      !p.touchNative && p.pointer && i.indexOf("touch") === 0 ? s = Yn(t, i, s) : p.touch && i === "dblclick" ? s = eo(t, s) : "addEventListener" in t ? i === "touchstart" || i === "touchmove" || i === "wheel" || i === "mousewheel" ? t.addEventListener(Ui[i] || i, s, p.passiveEvents ? { passive: !1 } : !1) : i === "mouseenter" || i === "mouseleave" ? (s = function(a) {
        a = a || window.event, ji(t, a) && r(a);
      }, t.addEventListener(Ui[i], s, !1)) : t.addEventListener(i, r, !1) : t.attachEvent("on" + i, s), t[rt] = t[rt] || {}, t[rt][o] = s;
    }
    function qi(t, i, e, n, o) {
      o = o || i + m(e) + (n ? "_" + m(n) : "");
      var s = t[rt] && t[rt][o];
      if (!s)
        return this;
      !p.touchNative && p.pointer && i.indexOf("touch") === 0 ? Xn(t, i, s) : p.touch && i === "dblclick" ? no(t, s) : "removeEventListener" in t ? t.removeEventListener(Ui[i] || i, s, !1) : t.detachEvent("on" + i, s), t[rt][o] = null;
    }
    function xt(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
    }
    function Vi(t) {
      return Gi(t, "wheel", xt), this;
    }
    function Ut(t) {
      return x(t, "mousedown touchstart dblclick contextmenu", xt), t._leaflet_disable_click = !0, this;
    }
    function U(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    }
    function Lt(t) {
      return U(t), xt(t), this;
    }
    function Ie(t) {
      if (t.composedPath)
        return t.composedPath();
      for (var i = [], e = t.target; e; )
        i.push(e), e = e.parentNode;
      return i;
    }
    function Be(t, i) {
      if (!i)
        return new P(t.clientX, t.clientY);
      var e = Wi(i), n = e.boundingClientRect;
      return new P(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (t.clientX - n.left) / e.x - i.clientLeft,
        (t.clientY - n.top) / e.y - i.clientTop
      );
    }
    var ro = p.linux && p.chrome ? window.devicePixelRatio : p.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function Ne(t) {
      return p.edge ? t.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        t.deltaY && t.deltaMode === 0 ? -t.deltaY / ro : (
          // Pixels
          t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
            // Lines
            t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
              // Pages
              t.deltaX || t.deltaZ ? 0 : (
                // Skip horizontal/depth wheel events
                t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                  // Legacy IE pixels
                  t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                    // Legacy Moz lines
                    t.detail ? t.detail / -32765 * 60 : (
                      // Legacy Moz pages
                      0
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    function ji(t, i) {
      var e = i.relatedTarget;
      if (!e)
        return !0;
      try {
        for (; e && e !== t; )
          e = e.parentNode;
      } catch {
        return !1;
      }
      return e !== t;
    }
    var ao = {
      __proto__: null,
      on: x,
      off: Z,
      stopPropagation: xt,
      disableScrollPropagation: Vi,
      disableClickPropagation: Ut,
      preventDefault: U,
      stop: Lt,
      getPropagationPath: Ie,
      getMousePosition: Be,
      getWheelDelta: Ne,
      isExternalTarget: ji,
      addListener: x,
      removeListener: Z
    }, De = It.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(t, i, e, n) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = e || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = Pt(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = V(this._animate, this), this._step();
      },
      _step: function(t) {
        var i = +new Date() - this._startTime, e = this._duration * 1e3;
        i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, i) {
        var e = this._startPos.add(this._offset.multiplyBy(t));
        i && e._round(), D(this._el, e), this.fire("step");
      },
      _complete: function() {
        J(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), z = It.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: Si,
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: void 0,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: void 0,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: void 0,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: void 0,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: void 0,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: void 0,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: !0,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: !0,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: !0,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // Precision limit of a 32-bit float
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: !0
      },
      initialize: function(t, i) {
        i = S(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = v(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), i.zoom !== void 0 && (this._zoom = this._limitZoom(i.zoom)), i.center && i.zoom !== void 0 && this.setView(O(i.center), i.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Dt && p.any3d && !p.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), x(this._proxy, Ee, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(t, i, e) {
        if (i = i === void 0 ? this._zoom : this._limitZoom(i), t = this._limitCenter(O(t), i, this.options.maxBounds), e = e || {}, this._stop(), this._loaded && !e.reset && e !== !0) {
          e.animate !== void 0 && (e.zoom = _({ animate: e.animate }, e.zoom), e.pan = _({ animate: e.animate, duration: e.duration }, e.pan));
          var n = this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom) : this._tryAnimatedPan(t, e.pan);
          if (n)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, i, e.pan && e.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(t, i) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: i }) : (this._zoom = t, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(t, i) {
        return t = t || (p.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(t, i) {
        return t = t || (p.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(t, i, e) {
        var n = this.getZoomScale(i), o = this.getSize().divideBy(2), s = t instanceof P ? t : this.latLngToContainerPoint(t), r = s.subtract(o).multiplyBy(1 - 1 / n), a = this.containerPointToLatLng(o.add(r));
        return this.setView(a, i, { zoom: e });
      },
      _getBoundsCenterZoom: function(t, i) {
        i = i || {}, t = t.getBounds ? t.getBounds() : F(t);
        var e = w(i.paddingTopLeft || i.padding || [0, 0]), n = w(i.paddingBottomRight || i.padding || [0, 0]), o = this.getBoundsZoom(t, !1, e.add(n));
        if (o = typeof i.maxZoom == "number" ? Math.min(i.maxZoom, o) : o, o === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: o
          };
        var s = n.subtract(e).divideBy(2), r = this.project(t.getSouthWest(), o), a = this.project(t.getNorthEast(), o), u = this.unproject(r.add(a).divideBy(2).add(s), o);
        return {
          center: u,
          zoom: o
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(t, i) {
        if (t = F(t), !t.isValid())
          throw new Error("Bounds are not valid.");
        var e = this._getBoundsCenterZoom(t, i);
        return this.setView(e.center, e.zoom, i);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(t, i) {
        return this.setView(t, this._zoom, { pan: i });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(t, i) {
        if (t = w(t).round(), i = i || {}, !t.x && !t.y)
          return this.fire("moveend");
        if (i.animate !== !0 && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new De(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), i.noMoveStart || this.fire("movestart"), i.animate !== !1) {
          b(this._mapPane, "leaflet-pan-anim");
          var e = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, e, i.duration || 0.25, i.easeLinearity);
        } else
          this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(t, i, e) {
        if (e = e || {}, e.animate === !1 || !p.any3d)
          return this.setView(t, i, e);
        this._stop();
        var n = this.project(this.getCenter()), o = this.project(t), s = this.getSize(), r = this._zoom;
        t = O(t), i = i === void 0 ? r : i;
        var a = Math.max(s.x, s.y), u = a * this.getZoomScale(r, i), l = o.distanceTo(n) || 1, f = 1.42, y = f * f;
        function T(R) {
          var yi = R ? -1 : 1, Ko = R ? u : a, Jo = u * u - a * a + yi * y * y * l * l, $o = 2 * Ko * y * l, oe = Jo / $o, yn = Math.sqrt(oe * oe + 1) - oe, Qo = yn < 1e-9 ? -18 : Math.log(yn);
          return Qo;
        }
        function tt(R) {
          return (Math.exp(R) - Math.exp(-R)) / 2;
        }
        function Tt(R) {
          return (Math.exp(R) + Math.exp(-R)) / 2;
        }
        function gi(R) {
          return tt(R) / Tt(R);
        }
        var yt = T(0);
        function ne(R) {
          return a * (Tt(yt) / Tt(yt + f * R));
        }
        function Vo(R) {
          return a * (Tt(yt) * gi(yt + f * R) - tt(yt)) / y;
        }
        function jo(R) {
          return 1 - Math.pow(1 - R, 1.5);
        }
        var Yo = Date.now(), vn = (T(1) - yt) / f, Xo = e.duration ? 1e3 * e.duration : 1e3 * vn * 0.8;
        function gn() {
          var R = (Date.now() - Yo) / Xo, yi = jo(R) * vn;
          R <= 1 ? (this._flyToFrame = V(gn, this), this._move(
            this.unproject(n.add(o.subtract(n).multiplyBy(Vo(yi) / l)), r),
            this.getScaleZoom(a / ne(yi), r),
            { flyTo: !0 }
          )) : this._move(t, i)._moveEnd(!0);
        }
        return this._moveStart(!0, e.noMoveStart), gn.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(t, i) {
        var e = this._getBoundsCenterZoom(t, i);
        return this.flyTo(e.center, e.zoom, i);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(t) {
        return t = F(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(t) {
        var i = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(t) {
        var i = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(t, i) {
        this._enforcingBounds = !0;
        var e = this.getCenter(), n = this._limitCenter(e, this._zoom, F(t));
        return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(t, i) {
        i = i || {};
        var e = w(i.paddingTopLeft || i.padding || [0, 0]), n = w(i.paddingBottomRight || i.padding || [0, 0]), o = this.project(this.getCenter()), s = this.project(t), r = this.getPixelBounds(), a = j([r.min.add(e), r.max.subtract(n)]), u = a.getSize();
        if (!a.contains(s)) {
          this._enforcingBounds = !0;
          var l = s.subtract(a.getCenter()), f = a.extend(s).getSize().subtract(u);
          o.x += l.x < 0 ? -f.x : f.x, o.y += l.y < 0 ? -f.y : f.y, this.panTo(this.unproject(o), i), this._enforcingBounds = !1;
        }
        return this;
      },
      // @method invalidateSize(options: Zoom/pan options): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default. If `options.pan` is `false`, panning will not occur.
      // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
      // that it doesn't happen often even if the method is called many
      // times in a row.
      // @alternative
      // @method invalidateSize(animate: Boolean): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default.
      invalidateSize: function(t) {
        if (!this._loaded)
          return this;
        t = _({
          animate: !1,
          pan: !0
        }, t === !0 ? { animate: !0 } : t);
        var i = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var e = this.getSize(), n = i.divideBy(2).round(), o = e.divideBy(2).round(), s = n.subtract(o);
        return !s.x && !s.y ? this : (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(v(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: i,
          newSize: e
        }));
      },
      // @section Methods for modifying map state
      // @method stop(): this
      // Stops the currently running `panTo` or `flyTo` animation, if any.
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      // @section Geolocation methods
      // @method locate(options?: Locate options): this
      // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
      // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
      // and optionally sets the map view to the user's location with respect to
      // detection accuracy (or to the world view if geolocation failed).
      // Note that, if your page doesn't use HTTPS, this method will fail in
      // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
      // See `Locate options` for more details.
      locate: function(t) {
        if (t = this._locateOptions = _({
          timeout: 1e4,
          watch: !1
          // setView: false
          // maxZoom: <Number>
          // maximumAge: 0
          // enableHighAccuracy: false
        }, t), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var i = v(this._handleGeolocationResponse, this), e = v(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, e, t) : navigator.geolocation.getCurrentPosition(i, e, t), this;
      },
      // @method stopLocate(): this
      // Stops watching location previously initiated by `map.locate({watch: true})`
      // and aborts resetting the map view if map.locate was called with
      // `{setView: true}`.
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(t) {
        if (this._container._leaflet_id) {
          var i = t.code, e = t.message || (i === 1 ? "permission denied" : i === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: i,
            message: "Geolocation error: " + e + "."
          });
        }
      },
      _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var i = t.coords.latitude, e = t.coords.longitude, n = new E(i, e), o = n.toBounds(t.coords.accuracy * 2), s = this._locateOptions;
          if (s.setView) {
            var r = this.getBoundsZoom(o);
            this.setView(n, s.maxZoom ? Math.min(r, s.maxZoom) : r);
          }
          var a = {
            latlng: n,
            bounds: o,
            timestamp: t.timestamp
          };
          for (var u in t.coords)
            typeof t.coords[u] == "number" && (a[u] = t.coords[u]);
          this.fire("locationfound", a);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(t, i) {
        if (!i)
          return this;
        var e = this[t] = new i(this);
        return this._handlers.push(e), this.options[t] && e.enable(), this;
      },
      // @method remove(): this
      // Destroys the map and clears all related event listeners.
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), I(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (J(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          I(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(t, i) {
        var e = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = k("div", e, i || this._mapPane);
        return t && (this._panes[t] = n), n;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      // @method getZoom(): Number
      // Returns the current zoom level of the map view
      getZoom: function() {
        return this._zoom;
      },
      // @method getBounds(): LatLngBounds
      // Returns the geographical bounds visible in the current map view
      getBounds: function() {
        var t = this.getPixelBounds(), i = this.unproject(t.getBottomLeft()), e = this.unproject(t.getTopRight());
        return new Y(i, e);
      },
      // @method getMinZoom(): Number
      // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      // @method getMaxZoom(): Number
      // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
      // Returns the maximum zoom level on which the given bounds fit to the map
      // view in its entirety. If `inside` (optional) is set to `true`, the method
      // instead returns the minimum zoom level on which the map view fits into
      // the given bounds in its entirety.
      getBoundsZoom: function(t, i, e) {
        t = F(t), e = w(e || [0, 0]);
        var n = this.getZoom() || 0, o = this.getMinZoom(), s = this.getMaxZoom(), r = t.getNorthWest(), a = t.getSouthEast(), u = this.getSize().subtract(e), l = j(this.project(a, n), this.project(r, n)).getSize(), f = p.any3d ? this.options.zoomSnap : 1, y = u.x / l.x, T = u.y / l.y, tt = i ? Math.max(y, T) : Math.min(y, T);
        return n = this.getScaleZoom(tt, n), f && (n = Math.round(n / (f / 100)) * (f / 100), n = i ? Math.ceil(n / f) * f : Math.floor(n / f) * f), Math.max(o, Math.min(s, n));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new P(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(t, i) {
        var e = this._getTopLeftPoint(t, i);
        return new A(e, e.add(this.getSize()));
      },
      // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
      // the map pane? "left point of the map layer" can be confusing, specially
      // since there can be negative offsets.
      // @method getPixelOrigin(): Point
      // Returns the projected pixel coordinates of the top left point of
      // the map layer (useful in custom layer and overlay implementations).
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      // @method getPixelWorldBounds(zoom?: Number): Bounds
      // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
      // If `zoom` is omitted, the map's current zoom level is used.
      getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
      },
      // @section Other Methods
      // @method getPane(pane: String|HTMLElement): HTMLElement
      // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
      getPane: function(t) {
        return typeof t == "string" ? this._panes[t] : t;
      },
      // @method getPanes(): Object
      // Returns a plain object containing the names of all [panes](#map-pane) as keys and
      // the panes as values.
      getPanes: function() {
        return this._panes;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the map.
      getContainer: function() {
        return this._container;
      },
      // @section Conversion Methods
      // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
      // Returns the scale factor to be applied to a map transition from zoom level
      // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
      getZoomScale: function(t, i) {
        var e = this.options.crs;
        return i = i === void 0 ? this._zoom : i, e.scale(t) / e.scale(i);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(t, i) {
        var e = this.options.crs;
        i = i === void 0 ? this._zoom : i;
        var n = e.zoom(t * e.scale(i));
        return isNaN(n) ? 1 / 0 : n;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(t, i) {
        return i = i === void 0 ? this._zoom : i, this.options.crs.latLngToPoint(O(t), i);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(t, i) {
        return i = i === void 0 ? this._zoom : i, this.options.crs.pointToLatLng(w(t), i);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(t) {
        var i = w(t).add(this.getPixelOrigin());
        return this.unproject(i);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(t) {
        var i = this.project(O(t))._round();
        return i._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(O(t));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(F(t));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(t, i) {
        return this.options.crs.distance(O(t), O(i));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(t) {
        return w(t).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(t) {
        return w(t).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(t) {
        var i = this.containerPointToLayerPoint(w(t));
        return this.layerPointToLatLng(i);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(O(t)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(t) {
        return Be(t, this._container);
      },
      // @method mouseEventToLayerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to
      // the [origin pixel](#map-getpixelorigin) where the event took place.
      mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      // @method mouseEventToLatLng(ev: MouseEvent): LatLng
      // Given a MouseEvent object, returns geographical coordinate where the
      // event took place.
      mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      // map initialization methods
      _initContainer: function(t) {
        var i = this._container = Oe(t);
        if (i) {
          if (i._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else
          throw new Error("Map container not found.");
        x(i, "scroll", this._onScroll, this), this._containerId = m(i);
      },
      _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && p.any3d, b(t, "leaflet-container" + (p.touch ? " leaflet-touch" : "") + (p.retina ? " leaflet-retina" : "") + (p.ielt9 ? " leaflet-oldie" : "") + (p.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var i = Rt(t, "position");
        i !== "absolute" && i !== "relative" && i !== "fixed" && i !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), D(this._mapPane, new P(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (b(t.markerPane, "leaflet-zoom-hide"), b(t.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(t, i, e) {
        D(this._mapPane, new P(0, 0));
        var n = !this._loaded;
        this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
        var o = this._zoom !== i;
        this._moveStart(o, e)._move(t, i)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
      },
      _moveStart: function(t, i) {
        return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
      },
      _move: function(t, i, e, n) {
        i === void 0 && (i = this._zoom);
        var o = this._zoom !== i;
        return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? e && e.pinch && this.fire("zoom", e) : ((o || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)), this;
      },
      _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return J(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        D(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      },
      // DOM event handling
      // @section Interaction events
      _initEvents: function(t) {
        this._targets = {}, this._targets[m(this._container)] = this;
        var i = t ? Z : x;
        i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), p.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        J(this._resizeRequest), this._resizeRequest = V(
          function() {
            this.invalidateSize({ debounceMoveend: !0 });
          },
          this
        );
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(t, i) {
        for (var e = [], n, o = i === "mouseout" || i === "mouseover", s = t.target || t.srcElement, r = !1; s; ) {
          if (n = this._targets[m(s)], n && (i === "click" || i === "preclick") && this._draggableMoved(n)) {
            r = !0;
            break;
          }
          if (n && n.listens(i, !0) && (o && !ji(s, t) || (e.push(n), o)) || s === this._container)
            break;
          s = s.parentNode;
        }
        return !e.length && !r && !o && this.listens(i, !0) && (e = [this]), e;
      },
      _isClickDisabled: function(t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click)
            return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function(t) {
        var i = t.target || t.srcElement;
        if (!(!this._loaded || i._leaflet_disable_events || t.type === "click" && this._isClickDisabled(i))) {
          var e = t.type;
          e === "mousedown" && Hi(i), this._fireDOMEvent(t, e);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(t, i, e) {
        if (t.type === "click") {
          var n = _({}, t);
          n.type = "preclick", this._fireDOMEvent(n, n.type, e);
        }
        var o = this._findEventTargets(t, i);
        if (e) {
          for (var s = [], r = 0; r < e.length; r++)
            e[r].listens(i, !0) && s.push(e[r]);
          o = s.concat(o);
        }
        if (o.length) {
          i === "contextmenu" && U(t);
          var a = o[0], u = {
            originalEvent: t
          };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var l = a.getLatLng && (!a._radius || a._radius <= 10);
            u.containerPoint = l ? this.latLngToContainerPoint(a.getLatLng()) : this.mouseEventToContainerPoint(t), u.layerPoint = this.containerPointToLayerPoint(u.containerPoint), u.latlng = l ? a.getLatLng() : this.layerPointToLatLng(u.layerPoint);
          }
          for (r = 0; r < o.length; r++)
            if (o[r].fire(i, u, !0), u.originalEvent._stopped || o[r].options.bubblingMouseEvents === !1 && xi(this._mouseEvents, i) !== -1)
              return;
        }
      },
      _draggableMoved: function(t) {
        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var t = 0, i = this._handlers.length; t < i; t++)
          this._handlers[t].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(t, i) {
        return this._loaded ? t.call(i || this, { target: this }) : this.on("load", t, i), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return Pt(this._mapPane) || new P(0, 0);
      },
      _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function(t, i) {
        var e = t && i !== void 0 ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin();
        return e.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(t, i) {
        var e = this.getSize()._divideBy(2);
        return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return this.project(t, i)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function(t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return j([
          this.project(t.getSouthWest(), i)._subtract(n),
          this.project(t.getNorthWest(), i)._subtract(n),
          this.project(t.getSouthEast(), i)._subtract(n),
          this.project(t.getNorthEast(), i)._subtract(n)
        ]);
      },
      // layer point of the current center
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function(t, i, e) {
        if (!e)
          return t;
        var n = this.project(t, i), o = this.getSize().divideBy(2), s = new A(n.subtract(o), n.add(o)), r = this._getBoundsOffset(s, e, i);
        return Math.abs(r.x) <= 1 && Math.abs(r.y) <= 1 ? t : this.unproject(n.add(r), i);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(t, i) {
        if (!i)
          return t;
        var e = this.getPixelBounds(), n = new A(e.min.add(t), e.max.add(t));
        return t.add(this._getBoundsOffset(n, i));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(t, i, e) {
        var n = j(
          this.project(i.getNorthEast(), e),
          this.project(i.getSouthWest(), e)
        ), o = n.min.subtract(t.min), s = n.max.subtract(t.max), r = this._rebound(o.x, -s.x), a = this._rebound(o.y, -s.y);
        return new P(r, a);
      },
      _rebound: function(t, i) {
        return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
      },
      _limitZoom: function(t) {
        var i = this.getMinZoom(), e = this.getMaxZoom(), n = p.any3d ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        B(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(t, i) {
        var e = this._getCenterOffset(t)._trunc();
        return (i && i.animate) !== !0 && !this.getSize().contains(e) ? !1 : (this.panBy(e, i), !0);
      },
      _createAnimProxy: function() {
        var t = this._proxy = k("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(i) {
          var e = Ai, n = this._proxy.style[e];
          wt(this._proxy, this.project(i.center, i.zoom), this.getZoomScale(i.zoom, 1)), n === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        I(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var t = this.getCenter(), i = this.getZoom();
        wt(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
      },
      _catchTransitionEnd: function(t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(t, i, e) {
        if (this._animatingZoom)
          return !0;
        if (e = e || {}, !this._zoomAnimated || e.animate === !1 || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var n = this.getZoomScale(i), o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return e.animate !== !0 && !this.getSize().contains(o) ? !1 : (V(function() {
          this._moveStart(!0, !1)._animateZoom(t, i, !0);
        }, this), !0);
      },
      _animateZoom: function(t, i, e, n) {
        this._mapPane && (e && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, b(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: i,
          noUpdate: n
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(v(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && B(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function ho(t, i) {
      return new z(t, i);
    }
    var nt = ut.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(t) {
        S(this, t);
      },
      /* @section
       * Classes extending L.Control will inherit the following methods:
       *
       * @method getPosition: string
       * Returns the position of the control.
       */
      getPosition: function() {
        return this.options.position;
      },
      // @method setPosition(position: string): this
      // Sets the position of the control.
      setPosition: function(t) {
        var i = this._map;
        return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTMLElement that contains the control.
      getContainer: function() {
        return this._container;
      },
      // @method addTo(map: Map): this
      // Adds the control to the given map.
      addTo: function(t) {
        this.remove(), this._map = t;
        var i = this._container = this.onAdd(t), e = this.getPosition(), n = t._controlCorners[e];
        return b(i, "leaflet-control"), e.indexOf("bottom") !== -1 ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (I(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      }
    }), Gt = function(t) {
      return new nt(t);
    };
    z.include({
      // @method addControl(control: Control): this
      // Adds the given control to the map
      addControl: function(t) {
        return t.addTo(this), this;
      },
      // @method removeControl(control: Control): this
      // Removes the given control from the map
      removeControl: function(t) {
        return t.remove(), this;
      },
      _initControlPos: function() {
        var t = this._controlCorners = {}, i = "leaflet-", e = this._controlContainer = k("div", i + "control-container", this._container);
        function n(o, s) {
          var r = i + o + " " + i + s;
          t[o + s] = k("div", r, e);
        }
        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
      },
      _clearControlPos: function() {
        for (var t in this._controlCorners)
          I(this._controlCorners[t]);
        I(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var Re = nt.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
        collapsed: !0,
        position: "topright",
        // @option autoZIndex: Boolean = true
        // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
        autoZIndex: !0,
        // @option hideSingleBase: Boolean = false
        // If `true`, the base layers in the control will be hidden when there is only one.
        hideSingleBase: !1,
        // @option sortLayers: Boolean = false
        // Whether to sort the layers. When `false`, layers will keep the order
        // in which they were added to the control.
        sortLayers: !1,
        // @option sortFunction: Function = *
        // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
        // that will be used for sorting the layers, when `sortLayers` is `true`.
        // The function receives both the `L.Layer` instances and their names, as in
        // `sortFunction(layerA, layerB, nameA, nameB)`.
        // By default, it sorts layers alphabetically by their name.
        sortFunction: function(t, i, e, n) {
          return e < n ? -1 : n < e ? 1 : 0;
        }
      },
      initialize: function(t, i, e) {
        S(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
        for (var n in t)
          this._addLayer(t[n], n);
        for (n in i)
          this._addLayer(i[n], n, !0);
      },
      onAdd: function(t) {
        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++)
          this._layers[i].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(t) {
        return nt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(t, i) {
        return this._addLayer(t, i), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(t, i) {
        return this._addLayer(t, i, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(t) {
        t.off("add remove", this._onLayerChange, this);
        var i = this._getLayer(m(t));
        return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        b(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (b(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : B(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return B(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var t = "leaflet-control-layers", i = this._container = k("div", t), e = this.options.collapsed;
        i.setAttribute("aria-haspopup", !0), Ut(i), Vi(i);
        var n = this._section = k("section", t + "-list");
        e && (this._map.on("click", this.collapse, this), x(i, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var o = this._layersLink = k("a", t + "-toggle", i);
        o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), x(o, {
          keydown: function(s) {
            s.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(s) {
            U(s), this._expandSafely();
          }
        }, this), e || this.expand(), this._baseLayersList = k("div", t + "-base", n), this._separator = k("div", t + "-separator", n), this._overlaysList = k("div", t + "-overlays", n), i.appendChild(n);
      },
      _getLayer: function(t) {
        for (var i = 0; i < this._layers.length; i++)
          if (this._layers[i] && m(this._layers[i].layer) === t)
            return this._layers[i];
      },
      _addLayer: function(t, i, e) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: i,
          overlay: e
        }), this.options.sortLayers && this._layers.sort(v(function(n, o) {
          return this.options.sortFunction(n.layer, o.layer, n.name, o.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        ei(this._baseLayersList), ei(this._overlaysList), this._layerControlInputs = [];
        var t, i, e, n, o = 0;
        for (e = 0; e < this._layers.length; e++)
          n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this;
      },
      _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var i = this._getLayer(m(t.target)), e = i.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
        e && this._map.fire(e, i);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(t, i) {
        var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
        return n.innerHTML = e, n.firstChild;
      },
      _addItem: function(t) {
        var i = document.createElement("label"), e = this._map.hasLayer(t.layer), n;
        t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = e) : n = this._createRadioElement("leaflet-base-layers_" + m(this), e), this._layerControlInputs.push(n), n.layerId = m(t.layer), x(n, "click", this._onInputClick, this);
        var o = document.createElement("span");
        o.innerHTML = " " + t.name;
        var s = document.createElement("span");
        i.appendChild(s), s.appendChild(n), s.appendChild(o);
        var r = t.overlay ? this._overlaysList : this._baseLayersList;
        return r.appendChild(i), this._checkDisabledLayers(), i;
      },
      _onInputClick: function() {
        var t = this._layerControlInputs, i, e, n = [], o = [];
        this._handlingClick = !0;
        for (var s = t.length - 1; s >= 0; s--)
          i = t[s], e = this._getLayer(i.layerId).layer, i.checked ? n.push(e) : i.checked || o.push(e);
        for (s = 0; s < o.length; s++)
          this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
        for (s = 0; s < n.length; s++)
          this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
        this._handlingClick = !1, this._refocusOnMap();
      },
      _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, i, e, n = this._map.getZoom(), o = t.length - 1; o >= 0; o--)
          i = t[o], e = this._getLayer(i.layerId).layer, i.disabled = e.options.minZoom !== void 0 && n < e.options.minZoom || e.options.maxZoom !== void 0 && n > e.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var t = this._section;
        x(t, "click", U), this.expand(), setTimeout(function() {
          Z(t, "click", U);
        });
      }
    }), uo = function(t, i, e) {
      return new Re(t, i, e);
    }, Yi = nt.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '<span aria-hidden="true">+</span>'
        // The text set on the 'zoom in' button.
        zoomInText: '<span aria-hidden="true">+</span>',
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
        // The text set on the 'zoom out' button.
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(t) {
        var i = "leaflet-control-zoom", e = k("div", i + " leaflet-bar"), n = this.options;
        return this._zoomInButton = this._createButton(
          n.zoomInText,
          n.zoomInTitle,
          i + "-in",
          e,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          n.zoomOutText,
          n.zoomOutTitle,
          i + "-out",
          e,
          this._zoomOut
        ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e;
      },
      onRemove: function(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function(t, i, e, n, o) {
        var s = k("a", e, n);
        return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), Ut(s), x(s, "click", Lt), x(s, "click", o, this), x(s, "click", this._refocusOnMap, this), s;
      },
      _updateDisabled: function() {
        var t = this._map, i = "leaflet-disabled";
        B(this._zoomInButton, i), B(this._zoomOutButton, i), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (b(this._zoomOutButton, i), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (b(this._zoomInButton, i), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    z.mergeOptions({
      zoomControl: !0
    }), z.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new Yi(), this.addControl(this.zoomControl));
    });
    var lo = function(t) {
      return new Yi(t);
    }, Fe = nt.extend({
      // @section
      // @aka Control.Scale options
      options: {
        position: "bottomleft",
        // @option maxWidth: Number = 100
        // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        maxWidth: 100,
        // @option metric: Boolean = True
        // Whether to show the metric scale line (m/km).
        metric: !0,
        // @option imperial: Boolean = True
        // Whether to show the imperial scale line (mi/ft).
        imperial: !0
        // @option updateWhenIdle: Boolean = false
        // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
      },
      onAdd: function(t) {
        var i = "leaflet-control-scale", e = k("div", i), n = this.options;
        return this._addScales(n, i + "-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e;
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(t, i, e) {
        t.metric && (this._mScale = k("div", i, e)), t.imperial && (this._iScale = k("div", i, e));
      },
      _update: function() {
        var t = this._map, i = t.getSize().y / 2, e = t.distance(
          t.containerPointToLatLng([0, i]),
          t.containerPointToLatLng([this.options.maxWidth, i])
        );
        this._updateScales(e);
      },
      _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function(t) {
        var i = this._getRoundNum(t), e = i < 1e3 ? i + " m" : i / 1e3 + " km";
        this._updateScale(this._mScale, e, i / t);
      },
      _updateImperial: function(t) {
        var i = t * 3.2808399, e, n, o;
        i > 5280 ? (e = i / 5280, n = this._getRoundNum(e), this._updateScale(this._iScale, n + " mi", n / e)) : (o = this._getRoundNum(i), this._updateScale(this._iScale, o + " ft", o / i));
      },
      _updateScale: function(t, i, e) {
        t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i;
      },
      _getRoundNum: function(t) {
        var i = Math.pow(10, (Math.floor(t) + "").length - 1), e = t / i;
        return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e;
      }
    }), co = function(t) {
      return new Fe(t);
    }, fo = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Xi = nt.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (p.inlineSvg ? fo + " " : "") + "Leaflet</a>"
      },
      initialize: function(t) {
        S(this, t), this._attributions = {};
      },
      onAdd: function(t) {
        t.attributionControl = this, this._container = k("div", "leaflet-control-attribution"), Ut(this._container);
        for (var i in t._layers)
          t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(t) {
        t.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      },
      // @method setPrefix(prefix: String|false): this
      // The HTML text shown before the attributions. Pass `false` to disable.
      setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
      addAttribution: function(t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
      },
      // @method removeAttribution(text: String): this
      // Removes an attribution text.
      removeAttribution: function(t) {
        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var t = [];
          for (var i in this._attributions)
            this._attributions[i] && t.push(i);
          var e = [];
          this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    z.mergeOptions({
      attributionControl: !0
    }), z.addInitHook(function() {
      this.options.attributionControl && new Xi().addTo(this);
    });
    var _o = function(t) {
      return new Xi(t);
    };
    nt.Layers = Re, nt.Zoom = Yi, nt.Scale = Fe, nt.Attribution = Xi, Gt.layers = uo, Gt.zoom = lo, Gt.scale = co, Gt.attribution = _o;
    var at = ut.extend({
      initialize: function(t) {
        this._map = t;
      },
      // @method enable(): this
      // Enables the handler
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      // @method disable(): this
      // Disables the handler
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      // @method enabled(): Boolean
      // Returns `true` if the handler is enabled
      enabled: function() {
        return !!this._enabled;
      }
      // @section Extension methods
      // Classes inheriting from `Handler` must implement the two following methods:
      // @method addHooks()
      // Called when the handler is enabled, should add event hooks.
      // @method removeHooks()
      // Called when the handler is disabled, should remove the event hooks added previously.
    });
    at.addTo = function(t, i) {
      return t.addHandler(i, this), this;
    };
    var mo = { Events: X }, He = p.touch ? "touchstart mousedown" : "mousedown", vt = It.extend({
      options: {
        // @section
        // @aka Draggable options
        // @option clickTolerance: Number = 3
        // The max number of pixels a user can shift the mouse pointer during a click
        // for it to be considered a valid click (as opposed to a mouse drag).
        clickTolerance: 3
      },
      // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
      // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
      initialize: function(t, i, e, n) {
        S(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (x(this._dragStartTarget, He, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (vt._dragging === this && this.finishDrag(!0), Z(this._dragStartTarget, He, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(t) {
        if (this._enabled && (this._moved = !1, !Ii(this._element, "leaflet-zoom-anim"))) {
          if (t.touches && t.touches.length !== 1) {
            vt._dragging === this && this.finishDrag();
            return;
          }
          if (!(vt._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (vt._dragging = this, this._preventOutline && Hi(this._element), Di(), Ft(), !this._moving)) {
            this.fire("down");
            var i = t.touches ? t.touches[0] : t, e = Ze(this._element);
            this._startPoint = new P(i.clientX, i.clientY), this._startPos = Pt(this._element), this._parentScale = Wi(e);
            var n = t.type === "mousedown";
            x(document, n ? "mousemove" : "touchmove", this._onMove, this), x(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(t) {
        if (this._enabled) {
          if (t.touches && t.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var i = t.touches && t.touches.length === 1 ? t.touches[0] : t, e = new P(i.clientX, i.clientY)._subtract(this._startPoint);
          !e.x && !e.y || Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, U(t), this._moved || (this.fire("dragstart"), this._moved = !0, b(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), b(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, this._lastEvent = t, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), D(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(t) {
        B(document.body, "leaflet-dragging"), this._lastTarget && (B(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Z(document, "mousemove touchmove", this._onMove, this), Z(document, "mouseup touchend touchcancel", this._onUp, this), Ri(), Ht(), this._moved && this._moving && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        }), this._moving = !1, vt._dragging = !1;
      }
    });
    function We(t, i) {
      if (!i || !t.length)
        return t.slice();
      var e = i * i;
      return t = go(t, e), t = vo(t, e), t;
    }
    function Ue(t, i, e) {
      return Math.sqrt(qt(t, i, e, !0));
    }
    function po(t, i, e) {
      return qt(t, i, e);
    }
    function vo(t, i) {
      var e = t.length, n = typeof Uint8Array != void 0 + "" ? Uint8Array : Array, o = new n(e);
      o[0] = o[e - 1] = 1, Ki(t, o, i, 0, e - 1);
      var s, r = [];
      for (s = 0; s < e; s++)
        o[s] && r.push(t[s]);
      return r;
    }
    function Ki(t, i, e, n, o) {
      var s = 0, r, a, u;
      for (a = n + 1; a <= o - 1; a++)
        u = qt(t[a], t[n], t[o], !0), u > s && (r = a, s = u);
      s > e && (i[r] = 1, Ki(t, i, e, n, r), Ki(t, i, e, r, o));
    }
    function go(t, i) {
      for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
        yo(t[n], t[o]) > i && (e.push(t[n]), o = n);
      return o < s - 1 && e.push(t[s - 1]), e;
    }
    var Ge;
    function qe(t, i, e, n, o) {
      var s = n ? Ge : bt(t, e), r = bt(i, e), a, u, l;
      for (Ge = r; ; ) {
        if (!(s | r))
          return [t, i];
        if (s & r)
          return !1;
        a = s || r, u = ai(t, i, a, e, o), l = bt(u, e), a === s ? (t = u, s = l) : (i = u, r = l);
      }
    }
    function ai(t, i, e, n, o) {
      var s = i.x - t.x, r = i.y - t.y, a = n.min, u = n.max, l, f;
      return e & 8 ? (l = t.x + s * (u.y - t.y) / r, f = u.y) : e & 4 ? (l = t.x + s * (a.y - t.y) / r, f = a.y) : e & 2 ? (l = u.x, f = t.y + r * (u.x - t.x) / s) : e & 1 && (l = a.x, f = t.y + r * (a.x - t.x) / s), new P(l, f, o);
    }
    function bt(t, i) {
      var e = 0;
      return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e;
    }
    function yo(t, i) {
      var e = i.x - t.x, n = i.y - t.y;
      return e * e + n * n;
    }
    function qt(t, i, e, n) {
      var o = i.x, s = i.y, r = e.x - o, a = e.y - s, u = r * r + a * a, l;
      return u > 0 && (l = ((t.x - o) * r + (t.y - s) * a) / u, l > 1 ? (o = e.x, s = e.y) : l > 0 && (o += r * l, s += a * l)), r = t.x - o, a = t.y - s, n ? r * r + a * a : new P(o, s);
    }
    function Q(t) {
      return !et(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
    }
    function Ve(t) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Q(t);
    }
    function je(t, i) {
      var e, n, o, s, r, a, u, l;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Q(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var f = [];
      for (var y in t)
        f.push(i.project(O(t[y])));
      var T = f.length;
      for (e = 0, n = 0; e < T - 1; e++)
        n += f[e].distanceTo(f[e + 1]) / 2;
      if (n === 0)
        l = f[0];
      else
        for (e = 0, s = 0; e < T - 1; e++)
          if (r = f[e], a = f[e + 1], o = r.distanceTo(a), s += o, s > n) {
            u = (s - n) / o, l = [
              a.x - u * (a.x - r.x),
              a.y - u * (a.y - r.y)
            ];
            break;
          }
      return i.unproject(w(l));
    }
    var wo = {
      __proto__: null,
      simplify: We,
      pointToSegmentDistance: Ue,
      closestPointOnSegment: po,
      clipSegment: qe,
      _getEdgeIntersection: ai,
      _getBitCode: bt,
      _sqClosestPointOnSegment: qt,
      isFlat: Q,
      _flat: Ve,
      polylineCenter: je
    };
    function Ye(t, i, e) {
      var n, o = [1, 4, 2, 8], s, r, a, u, l, f, y, T;
      for (s = 0, f = t.length; s < f; s++)
        t[s]._code = bt(t[s], i);
      for (a = 0; a < 4; a++) {
        for (y = o[a], n = [], s = 0, f = t.length, r = f - 1; s < f; r = s++)
          u = t[s], l = t[r], u._code & y ? l._code & y || (T = ai(l, u, y, i, e), T._code = bt(T, i), n.push(T)) : (l._code & y && (T = ai(l, u, y, i, e), T._code = bt(T, i), n.push(T)), n.push(u));
        t = n;
      }
      return t;
    }
    function Xe(t, i) {
      var e, n, o, s, r, a, u, l, f;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Q(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var y = [];
      for (var T in t)
        y.push(i.project(O(t[T])));
      var tt = y.length;
      for (a = u = l = 0, e = 0, n = tt - 1; e < tt; n = e++)
        o = y[e], s = y[n], r = o.y * s.x - s.y * o.x, u += (o.x + s.x) * r, l += (o.y + s.y) * r, a += r * 3;
      return a === 0 ? f = y[0] : f = [u / a, l / a], i.unproject(w(f));
    }
    var Po = {
      __proto__: null,
      clipPolygon: Ye,
      polygonCenter: Xe
    }, Ji = {
      project: function(t) {
        return new P(t.lng, t.lat);
      },
      unproject: function(t) {
        return new E(t.y, t.x);
      },
      bounds: new A([-180, -90], [180, 90])
    }, $i = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new A([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(t) {
        var i = Math.PI / 180, e = this.R, n = t.lat * i, o = this.R_MINOR / e, s = Math.sqrt(1 - o * o), r = s * Math.sin(n), a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
        return n = -e * Math.log(Math.max(a, 1e-10)), new P(t.lng * i * e, n);
      },
      unproject: function(t) {
        for (var i = 180 / Math.PI, e = this.R, n = this.R_MINOR / e, o = Math.sqrt(1 - n * n), s = Math.exp(-t.y / e), r = Math.PI / 2 - 2 * Math.atan(s), a = 0, u = 0.1, l; a < 15 && Math.abs(u) > 1e-7; a++)
          l = o * Math.sin(r), l = Math.pow((1 - l) / (1 + l), o / 2), u = Math.PI / 2 - 2 * Math.atan(s * l) - r, r += u;
        return new E(r * i, t.x * i / e);
      }
    }, xo = {
      __proto__: null,
      LonLat: Ji,
      Mercator: $i,
      SphericalMercator: Ti
    }, Lo = _({}, pt, {
      code: "EPSG:3395",
      projection: $i,
      transformation: function() {
        var t = 0.5 / (Math.PI * $i.R);
        return Bt(t, 0.5, -t, 0.5);
      }()
    }), Ke = _({}, pt, {
      code: "EPSG:4326",
      projection: Ji,
      transformation: Bt(1 / 180, 1, -1 / 180, 0.5)
    }), bo = _({}, lt, {
      projection: Ji,
      transformation: Bt(1, 0, -1, 0),
      scale: function(t) {
        return Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function(t, i) {
        var e = i.lng - t.lng, n = i.lat - t.lat;
        return Math.sqrt(e * e + n * n);
      },
      infinite: !0
    });
    lt.Earth = pt, lt.EPSG3395 = Lo, lt.EPSG3857 = Si, lt.EPSG900913 = zn, lt.EPSG4326 = Ke, lt.Simple = bo;
    var ot = It.extend({
      // Classes extending `L.Layer` will inherit the following options:
      options: {
        // @option pane: String = 'overlayPane'
        // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
        pane: "overlayPane",
        // @option attribution: String = null
        // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
        attribution: null,
        bubblingMouseEvents: !0
      },
      /* @section
       * Classes extending `L.Layer` will inherit the following methods:
       *
       * @method addTo(map: Map|LayerGroup): this
       * Adds the layer to the given map or layer group.
       */
      addTo: function(t) {
        return t.addLayer(this), this;
      },
      // @method remove: this
      // Removes the layer from the map it is currently active on.
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      // @method removeFrom(map: Map): this
      // Removes the layer from the given map
      //
      // @alternative
      // @method removeFrom(group: LayerGroup): this
      // Removes the layer from the given `LayerGroup`
      removeFrom: function(t) {
        return t && t.removeLayer(this), this;
      },
      // @method getPane(name? : String): HTMLElement
      // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
      getPane: function(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function(t) {
        return this._map._targets[m(t)] = this, this;
      },
      removeInteractiveTarget: function(t) {
        return delete this._map._targets[m(t)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(t) {
        var i = t.target;
        if (i.hasLayer(this)) {
          if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
            var e = this.getEvents();
            i.on(e, this), this.once("remove", function() {
              i.off(e, this);
            }, this);
          }
          this.onAdd(i), this.fire("add"), i.fire("layeradd", { layer: this });
        }
      }
    });
    z.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(t) {
        if (!t._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var i = m(t);
        return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(t) {
        var i = m(t);
        return this._layers[i] ? (this._loaded && t.onRemove(this), delete this._layers[i], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(t) {
        return m(t) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(t, i) {
        for (var e in this._layers)
          t.call(i, this._layers[e]);
        return this;
      },
      _addLayers: function(t) {
        t = t ? et(t) ? t : [t] : [];
        for (var i = 0, e = t.length; i < e; i++)
          this.addLayer(t[i]);
      },
      _addZoomLimit: function(t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[m(t)] = t, this._updateZoomLevels());
      },
      _removeZoomLimit: function(t) {
        var i = m(t);
        this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var t = 1 / 0, i = -1 / 0, e = this._getZoomSpan();
        for (var n in this._zoomBoundLayers) {
          var o = this._zoomBoundLayers[n].options;
          t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom), i = o.maxZoom === void 0 ? i : Math.max(i, o.maxZoom);
        }
        this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var zt = ot.extend({
      initialize: function(t, i) {
        S(this, i), this._layers = {};
        var e, n;
        if (t)
          for (e = 0, n = t.length; e < n; e++)
            this.addLayer(t[e]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(t) {
        var i = this.getLayerId(t);
        return this._layers[i] = t, this._map && this._map.addLayer(t), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(t) {
        var i = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(t) {
        var i = typeof t == "number" ? t : this.getLayerId(t);
        return i in this._layers;
      },
      // @method clearLayers(): this
      // Removes all the layers from the group.
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      // @method invoke(methodName: String, …): this
      // Calls `methodName` on every layer contained in this group, passing any
      // additional parameters. Has no effect if the layers contained do not
      // implement `methodName`.
      invoke: function(t) {
        var i = Array.prototype.slice.call(arguments, 1), e, n;
        for (e in this._layers)
          n = this._layers[e], n[t] && n[t].apply(n, i);
        return this;
      },
      onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      },
      // @method eachLayer(fn: Function, context?: Object): this
      // Iterates over the layers of the group, optionally specifying context of the iterator function.
      // ```js
      // group.eachLayer(function (layer) {
      // 	layer.bindPopup('Hello');
      // });
      // ```
      eachLayer: function(t, i) {
        for (var e in this._layers)
          t.call(i, this._layers[e]);
        return this;
      },
      // @method getLayer(id: Number): Layer
      // Returns the layer with the given internal ID.
      getLayer: function(t) {
        return this._layers[t];
      },
      // @method getLayers(): Layer[]
      // Returns an array of all the layers added to the group.
      getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      // @method setZIndex(zIndex: Number): this
      // Calls `setZIndex` on every layer contained in this group, passing the z-index.
      setZIndex: function(t) {
        return this.invoke("setZIndex", t);
      },
      // @method getLayerId(layer: Layer): Number
      // Returns the internal ID for a layer
      getLayerId: function(t) {
        return m(t);
      }
    }), To = function(t, i) {
      return new zt(t, i);
    }, ct = zt.extend({
      addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), zt.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      },
      removeLayer: function(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), zt.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
      },
      // @method setStyle(style: Path options): this
      // Sets the given path options to each layer of the group that has a `setStyle` method.
      setStyle: function(t) {
        return this.invoke("setStyle", t);
      },
      // @method bringToFront(): this
      // Brings the layer group to the top of all other layers
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      // @method bringToBack(): this
      // Brings the layer group to the back of all other layers
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      // @method getBounds(): LatLngBounds
      // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
      getBounds: function() {
        var t = new Y();
        for (var i in this._layers) {
          var e = this._layers[i];
          t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
        }
        return t;
      }
    }), Mo = function(t, i) {
      return new ct(t, i);
    }, kt = ut.extend({
      /* @section
       * @aka Icon options
       *
       * @option iconUrl: String = null
       * **(required)** The URL to the icon image (absolute or relative to your script path).
       *
       * @option iconRetinaUrl: String = null
       * The URL to a retina sized version of the icon image (absolute or relative to your
       * script path). Used for Retina screen devices.
       *
       * @option iconSize: Point = null
       * Size of the icon image in pixels.
       *
       * @option iconAnchor: Point = null
       * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
       * will be aligned so that this point is at the marker's geographical location. Centered
       * by default if size is specified, also can be set in CSS with negative margins.
       *
       * @option popupAnchor: Point = [0, 0]
       * The coordinates of the point from which popups will "open", relative to the icon anchor.
       *
       * @option tooltipAnchor: Point = [0, 0]
       * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
       *
       * @option shadowUrl: String = null
       * The URL to the icon shadow image. If not specified, no shadow image will be created.
       *
       * @option shadowRetinaUrl: String = null
       *
       * @option shadowSize: Point = null
       * Size of the shadow image in pixels.
       *
       * @option shadowAnchor: Point = null
       * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
       * as iconAnchor if not specified).
       *
       * @option className: String = ''
       * A custom class name to assign to both icon and shadow images. Empty by default.
       */
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1
      },
      initialize: function(t) {
        S(this, t);
      },
      // @method createIcon(oldIcon?: HTMLElement): HTMLElement
      // Called internally when the icon has to be shown, returns a `<img>` HTML element
      // styled according to the options.
      createIcon: function(t) {
        return this._createIcon("icon", t);
      },
      // @method createShadow(oldIcon?: HTMLElement): HTMLElement
      // As `createIcon`, but for the shadow beneath it.
      createShadow: function(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function(t, i) {
        var e = this._getIconUrl(t);
        if (!e) {
          if (t === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n = this._createImg(e, i && i.tagName === "IMG" ? i : null);
        return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n;
      },
      _setIconStyles: function(t, i) {
        var e = this.options, n = e[i + "Size"];
        typeof n == "number" && (n = [n, n]);
        var o = w(n), s = w(i === "shadow" && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
        t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
      },
      _createImg: function(t, i) {
        return i = i || document.createElement("img"), i.src = t, i;
      },
      _getIconUrl: function(t) {
        return p.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
    function So(t) {
      return new kt(t);
    }
    var Vt = kt.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(t) {
        return typeof Vt.imagePath != "string" && (Vt.imagePath = this._detectIconPath()), (this.options.imagePath || Vt.imagePath) + kt.prototype._getIconUrl.call(this, t);
      },
      _stripUrl: function(t) {
        var i = function(e, n, o) {
          var s = n.exec(e);
          return s && s[o];
        };
        return t = i(t, /^url\((['"])?(.+)\1\)$/, 2), t && i(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var t = k("div", "leaflet-default-icon-path", document.body), i = Rt(t, "background-image") || Rt(t, "backgroundImage");
        if (document.body.removeChild(t), i = this._stripUrl(i), i)
          return i;
        var e = document.querySelector('link[href$="leaflet.css"]');
        return e ? e.href.substring(0, e.href.length - 11 - 1) : "";
      }
    }), Je = at.extend({
      initialize: function(t) {
        this._marker = t;
      },
      addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new vt(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), b(t, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && B(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var i = this._marker, e = i._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, s = Pt(i._icon), r = e.getPixelBounds(), a = e.getPixelOrigin(), u = j(
          r.min._subtract(a).add(o),
          r.max._subtract(a).subtract(o)
        );
        if (!u.contains(s)) {
          var l = w(
            (Math.max(u.max.x, s.x) - u.max.x) / (r.max.x - u.max.x) - (Math.min(u.min.x, s.x) - u.min.x) / (r.min.x - u.min.x),
            (Math.max(u.max.y, s.y) - u.max.y) / (r.max.y - u.max.y) - (Math.min(u.min.y, s.y) - u.min.y) / (r.min.y - u.min.y)
          ).multiplyBy(n);
          e.panBy(l, { animate: !1 }), this._draggable._newPos._add(l), this._draggable._startPos._add(l), D(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = V(this._adjustPan.bind(this, t));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan && (J(this._panRequest), this._panRequest = V(this._adjustPan.bind(this, t)));
      },
      _onDrag: function(t) {
        var i = this._marker, e = i._shadow, n = Pt(i._icon), o = i._map.layerPointToLatLng(n);
        e && D(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function(t) {
        J(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }), hi = ot.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new Vt(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        title: "",
        // @option alt: String = 'Marker'
        // Text for the `alt` attribute of the icon image.
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        alt: "Marker",
        // @option zIndexOffset: Number = 0
        // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
        zIndexOffset: 0,
        // @option opacity: Number = 1.0
        // The opacity of the marker.
        opacity: 1,
        // @option riseOnHover: Boolean = false
        // If `true`, the marker will get on top of others when you hover the mouse over it.
        riseOnHover: !1,
        // @option riseOffset: Number = 250
        // The z-index offset used for the `riseOnHover` feature.
        riseOffset: 250,
        // @option pane: String = 'markerPane'
        // `Map pane` where the markers icon will be added.
        pane: "markerPane",
        // @option shadowPane: String = 'shadowPane'
        // `Map pane` where the markers shadow will be added.
        shadowPane: "shadowPane",
        // @option bubblingMouseEvents: Boolean = false
        // When `true`, a mouse event on this marker will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !1,
        // @option autoPanOnFocus: Boolean = true
        // When `true`, the map will pan whenever the marker is focused (via
        // e.g. pressing `tab` on the keyboard) to ensure the marker is
        // visible within the map's bounds
        autoPanOnFocus: !0,
        // @section Draggable marker options
        // @option draggable: Boolean = false
        // Whether the marker is draggable with mouse/touch or not.
        draggable: !1,
        // @option autoPan: Boolean = false
        // Whether to pan the map when dragging this marker near its edge or not.
        autoPan: !1,
        // @option autoPanPadding: Point = Point(50, 50)
        // Distance (in pixels to the left/right and to the top/bottom) of the
        // map edge to start panning the map.
        autoPanPadding: [50, 50],
        // @option autoPanSpeed: Number = 10
        // Number of pixels the map should pan by.
        autoPanSpeed: 10
      },
      /* @section
       *
       * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
       */
      initialize: function(t, i) {
        S(this, i), this._latlng = O(t);
      },
      onAdd: function(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      // @method getLatLng: LatLng
      // Returns the current geographical position of the marker.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Changes the marker position to the given point.
      setLatLng: function(t) {
        var i = this._latlng;
        return this._latlng = O(t), this.update(), this.fire("move", { oldLatLng: i, latlng: this._latlng });
      },
      // @method setZIndexOffset(offset: Number): this
      // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
      setZIndexOffset: function(t) {
        return this.options.zIndexOffset = t, this.update();
      },
      // @method getIcon: Icon
      // Returns the current icon used by the marker
      getIcon: function() {
        return this.options.icon;
      },
      // @method setIcon(icon: Icon): this
      // Changes the marker icon.
      setIcon: function(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function() {
        var t = this.options, i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), e = t.icon.createIcon(this._icon), n = !1;
        e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), e.tagName === "IMG" && (e.alt = t.alt || "")), b(e, i), t.keyboard && (e.tabIndex = "0", e.setAttribute("role", "button")), this._icon = e, t.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && x(e, "focus", this._panOnFocus, this);
        var o = t.icon.createShadow(this._shadow), s = !1;
        o !== this._shadow && (this._removeShadow(), s = !0), o && (b(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && Z(this._icon, "focus", this._panOnFocus, this), I(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && I(this._shadow), this._shadow = null;
      },
      _setPos: function(t) {
        this._icon && D(this._icon, t), this._shadow && D(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function(t) {
        var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(i);
      },
      _initInteraction: function() {
        if (this.options.interactive && (b(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Je)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Je(this), t && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && $(this._icon, t), this._shadow && $(this._shadow, t);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var t = this._map;
        if (t) {
          var i = this.options.icon.options, e = i.iconSize ? w(i.iconSize) : w(0, 0), n = i.iconAnchor ? w(i.iconAnchor) : w(0, 0);
          t.panInside(this._latlng, {
            paddingTopLeft: n,
            paddingBottomRight: e.subtract(n)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function Co(t, i) {
      return new hi(t, i);
    }
    var gt = ot.extend({
      // @section
      // @aka Path options
      options: {
        // @option stroke: Boolean = true
        // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
        stroke: !0,
        // @option color: String = '#3388ff'
        // Stroke color
        color: "#3388ff",
        // @option weight: Number = 3
        // Stroke width in pixels
        weight: 3,
        // @option opacity: Number = 1.0
        // Stroke opacity
        opacity: 1,
        // @option lineCap: String= 'round'
        // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
        lineCap: "round",
        // @option lineJoin: String = 'round'
        // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
        lineJoin: "round",
        // @option dashArray: String = null
        // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashArray: null,
        // @option dashOffset: String = null
        // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashOffset: null,
        // @option fill: Boolean = depends
        // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
        fill: !1,
        // @option fillColor: String = *
        // Fill color. Defaults to the value of the [`color`](#path-color) option
        fillColor: null,
        // @option fillOpacity: Number = 0.2
        // Fill opacity.
        fillOpacity: 0.2,
        // @option fillRule: String = 'evenodd'
        // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
        fillRule: "evenodd",
        // className: '',
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option bubblingMouseEvents: Boolean = true
        // When `true`, a mouse event on this path will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !0
      },
      beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      // @method redraw(): this
      // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      // @method setStyle(style: Path options): this
      // Changes the appearance of a Path based on the options in the `Path options` object.
      setStyle: function(t) {
        return S(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all path layers.
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all path layers.
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), ui = gt.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(t, i) {
        S(this, i), this._latlng = O(t), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(t) {
        var i = this._latlng;
        return this._latlng = O(t), this.redraw(), this.fire("move", { oldLatLng: i, latlng: this._latlng });
      },
      // @method getLatLng(): LatLng
      // Returns the current geographical position of the circle marker
      getLatLng: function() {
        return this._latlng;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle marker. Units are in pixels.
      setRadius: function(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of the circle
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(t) {
        var i = t && t.radius || this._radius;
        return gt.prototype.setStyle.call(this, t), this.setRadius(i), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var t = this._radius, i = this._radiusY || t, e = this._clickTolerance(), n = [t + e, i + e];
        this._pxBounds = new A(this._point.subtract(n), this._point.add(n));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function zo(t, i) {
      return new ui(t, i);
    }
    var Qi = ui.extend({
      initialize: function(t, i, e) {
        if (typeof i == "number" && (i = _({}, e, { radius: i })), S(this, i), this._latlng = O(t), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle. Units are in meters.
      setRadius: function(t) {
        return this._mRadius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of a circle. Units are in meters.
      getRadius: function() {
        return this._mRadius;
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new Y(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: gt.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng, i = this._latlng.lat, e = this._map, n = e.options.crs;
        if (n.distance === pt.distance) {
          var o = Math.PI / 180, s = this._mRadius / pt.R / o, r = e.project([i + s, t]), a = e.project([i - s, t]), u = r.add(a).divideBy(2), l = e.unproject(u).lat, f = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(l * o)) / (Math.cos(i * o) * Math.cos(l * o))) / o;
          (isNaN(f) || f === 0) && (f = s / Math.cos(Math.PI / 180 * i)), this._point = u.subtract(e.getPixelOrigin()), this._radius = isNaN(f) ? 0 : u.x - e.project([l, t - f]).x, this._radiusY = u.y - r.y;
        } else {
          var y = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(y).x;
        }
        this._updateBounds();
      }
    });
    function ko(t, i, e) {
      return new Qi(t, i, e);
    }
    var dt = gt.extend({
      // @section
      // @aka Polyline options
      options: {
        // @option smoothFactor: Number = 1.0
        // How much to simplify the polyline on each zoom level. More means
        // better performance and smoother look, and less means more accurate representation.
        smoothFactor: 1,
        // @option noClip: Boolean = false
        // Disable polyline clipping.
        noClip: !1
      },
      initialize: function(t, i) {
        S(this, i), this._setLatLngs(t);
      },
      // @method getLatLngs(): LatLng[]
      // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
      getLatLngs: function() {
        return this._latlngs;
      },
      // @method setLatLngs(latlngs: LatLng[]): this
      // Replaces all the points in the polyline with the given array of geographical points.
      setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      },
      // @method isEmpty(): Boolean
      // Returns `true` if the Polyline has no LatLngs.
      isEmpty: function() {
        return !this._latlngs.length;
      },
      // @method closestLayerPoint(p: Point): Point
      // Returns the point closest to `p` on the Polyline.
      closestLayerPoint: function(t) {
        for (var i = 1 / 0, e = null, n = qt, o, s, r = 0, a = this._parts.length; r < a; r++)
          for (var u = this._parts[r], l = 1, f = u.length; l < f; l++) {
            o = u[l - 1], s = u[l];
            var y = n(t, o, s, !0);
            y < i && (i = y, e = n(t, o, s));
          }
        return e && (e.distance = Math.sqrt(i)), e;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return je(this._defaultShape(), this._map.options.crs);
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        return this._bounds;
      },
      // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
      // Adds a given point to the polyline. By default, adds to the first ring of
      // the polyline in case of a multi-polyline, but can be overridden by passing
      // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
      addLatLng: function(t, i) {
        return i = i || this._defaultShape(), t = O(t), i.push(t), this._bounds.extend(t), this.redraw();
      },
      _setLatLngs: function(t) {
        this._bounds = new Y(), this._latlngs = this._convertLatLngs(t);
      },
      _defaultShape: function() {
        return Q(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(t) {
        for (var i = [], e = Q(t), n = 0, o = t.length; n < o; n++)
          e ? (i[n] = O(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
        return i;
      },
      _project: function() {
        var t = new A();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      },
      _updateBounds: function() {
        var t = this._clickTolerance(), i = new P(t, t);
        this._rawPxBounds && (this._pxBounds = new A([
          this._rawPxBounds.min.subtract(i),
          this._rawPxBounds.max.add(i)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(t, i, e) {
        var n = t[0] instanceof E, o = t.length, s, r;
        if (n) {
          for (r = [], s = 0; s < o; s++)
            r[s] = this._map.latLngToLayerPoint(t[s]), e.extend(r[s]);
          i.push(r);
        } else
          for (s = 0; s < o; s++)
            this._projectLatlngs(t[s], i, e);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var i = this._parts, e, n, o, s, r, a, u;
          for (e = 0, o = 0, s = this._rings.length; e < s; e++)
            for (u = this._rings[e], n = 0, r = u.length; n < r - 1; n++)
              a = qe(u[n], u[n + 1], t, n, !0), a && (i[o] = i[o] || [], i[o].push(a[0]), (a[1] !== u[n + 1] || n === r - 2) && (i[o].push(a[1]), o++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++)
          t[e] = We(t[e], i);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t, i) {
        var e, n, o, s, r, a, u = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (e = 0, s = this._parts.length; e < s; e++)
          for (a = this._parts[e], n = 0, r = a.length, o = r - 1; n < r; o = n++)
            if (!(!i && n === 0) && Ue(t, a[o], a[n]) <= u)
              return !0;
        return !1;
      }
    });
    function Eo(t, i) {
      return new dt(t, i);
    }
    dt._flat = Ve;
    var Et = dt.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Xe(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(t) {
        var i = dt.prototype._convertLatLngs.call(this, t), e = i.length;
        return e >= 2 && i[0] instanceof E && i[0].equals(i[e - 1]) && i.pop(), i;
      },
      _setLatLngs: function(t) {
        dt.prototype._setLatLngs.call(this, t), Q(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return Q(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds, i = this.options.weight, e = new P(i, i);
        if (t = new A(t.min.subtract(e), t.max.add(e)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var n = 0, o = this._rings.length, s; n < o; n++)
            s = Ye(this._rings[n], t, !0), s.length && this._parts.push(s);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        var i = !1, e, n, o, s, r, a, u, l;
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (s = 0, u = this._parts.length; s < u; s++)
          for (e = this._parts[s], r = 0, l = e.length, a = l - 1; r < l; a = r++)
            n = e[r], o = e[a], n.y > t.y != o.y > t.y && t.x < (o.x - n.x) * (t.y - n.y) / (o.y - n.y) + n.x && (i = !i);
        return i || dt.prototype._containsPoint.call(this, t, !0);
      }
    });
    function Oo(t, i) {
      return new Et(t, i);
    }
    var ft = ct.extend({
      /* @section
       * @aka GeoJSON options
       *
       * @option pointToLayer: Function = *
       * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
       * called when data is added, passing the GeoJSON point feature and its `LatLng`.
       * The default is to spawn a default `Marker`:
       * ```js
       * function(geoJsonPoint, latlng) {
       * 	return L.marker(latlng);
       * }
       * ```
       *
       * @option style: Function = *
       * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
       * called internally when data is added.
       * The default value is to not override any defaults:
       * ```js
       * function (geoJsonFeature) {
       * 	return {}
       * }
       * ```
       *
       * @option onEachFeature: Function = *
       * A `Function` that will be called once for each created `Feature`, after it has
       * been created and styled. Useful for attaching events and popups to features.
       * The default is to do nothing with the newly created layers:
       * ```js
       * function (feature, layer) {}
       * ```
       *
       * @option filter: Function = *
       * A `Function` that will be used to decide whether to include a feature or not.
       * The default is to include all features:
       * ```js
       * function (geoJsonFeature) {
       * 	return true;
       * }
       * ```
       * Note: dynamically changing the `filter` option will have effect only on newly
       * added data. It will _not_ re-evaluate already included features.
       *
       * @option coordsToLatLng: Function = *
       * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
       * The default is the `coordsToLatLng` static method.
       *
       * @option markersInheritOptions: Boolean = false
       * Whether default Markers for "Point" type Features inherit from group options.
       */
      initialize: function(t, i) {
        S(this, i), this._layers = {}, t && this.addData(t);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(t) {
        var i = et(t) ? t : t.features, e, n, o;
        if (i) {
          for (e = 0, n = i.length; e < n; e++)
            o = i[e], (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t))
          return this;
        var r = li(t, s);
        return r ? (r.feature = fi(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = _({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
      },
      // @method setStyle( <Function> style ): this
      // Changes styles of GeoJSON vector layers with the given style function.
      setStyle: function(t) {
        return this.eachLayer(function(i) {
          this._setLayerStyle(i, t);
        }, this);
      },
      _setLayerStyle: function(t, i) {
        t.setStyle && (typeof i == "function" && (i = i(t.feature)), t.setStyle(i));
      }
    });
    function li(t, i) {
      var e = t.type === "Feature" ? t.geometry : t, n = e ? e.coordinates : null, o = [], s = i && i.pointToLayer, r = i && i.coordsToLatLng || te, a, u, l, f;
      if (!n && !e)
        return null;
      switch (e.type) {
        case "Point":
          return a = r(n), $e(s, t, a, i);
        case "MultiPoint":
          for (l = 0, f = n.length; l < f; l++)
            a = r(n[l]), o.push($e(s, t, a, i));
          return new ct(o);
        case "LineString":
        case "MultiLineString":
          return u = ci(n, e.type === "LineString" ? 0 : 1, r), new dt(u, i);
        case "Polygon":
        case "MultiPolygon":
          return u = ci(n, e.type === "Polygon" ? 1 : 2, r), new Et(u, i);
        case "GeometryCollection":
          for (l = 0, f = e.geometries.length; l < f; l++) {
            var y = li({
              geometry: e.geometries[l],
              type: "Feature",
              properties: t.properties
            }, i);
            y && o.push(y);
          }
          return new ct(o);
        case "FeatureCollection":
          for (l = 0, f = e.features.length; l < f; l++) {
            var T = li(e.features[l], i);
            T && o.push(T);
          }
          return new ct(o);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function $e(t, i, e, n) {
      return t ? t(i, e) : new hi(e, n && n.markersInheritOptions && n);
    }
    function te(t) {
      return new E(t[1], t[0], t[2]);
    }
    function ci(t, i, e) {
      for (var n = [], o = 0, s = t.length, r; o < s; o++)
        r = i ? ci(t[o], i - 1, e) : (e || te)(t[o]), n.push(r);
      return n;
    }
    function ie(t, i) {
      return t = O(t), t.alt !== void 0 ? [q(t.lng, i), q(t.lat, i), q(t.alt, i)] : [q(t.lng, i), q(t.lat, i)];
    }
    function di(t, i, e, n) {
      for (var o = [], s = 0, r = t.length; s < r; s++)
        o.push(i ? di(t[s], Q(t[s]) ? 0 : i - 1, e, n) : ie(t[s], n));
      return !i && e && o.push(o[0].slice()), o;
    }
    function Ot(t, i) {
      return t.feature ? _({}, t.feature, { geometry: i }) : fi(i);
    }
    function fi(t) {
      return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
    var ee = {
      toGeoJSON: function(t) {
        return Ot(this, {
          type: "Point",
          coordinates: ie(this.getLatLng(), t)
        });
      }
    };
    hi.include(ee), Qi.include(ee), ui.include(ee), dt.include({
      toGeoJSON: function(t) {
        var i = !Q(this._latlngs), e = di(this._latlngs, i ? 1 : 0, !1, t);
        return Ot(this, {
          type: (i ? "Multi" : "") + "LineString",
          coordinates: e
        });
      }
    }), Et.include({
      toGeoJSON: function(t) {
        var i = !Q(this._latlngs), e = i && !Q(this._latlngs[0]), n = di(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
        return i || (n = [n]), Ot(this, {
          type: (e ? "Multi" : "") + "Polygon",
          coordinates: n
        });
      }
    }), zt.include({
      toMultiPoint: function(t) {
        var i = [];
        return this.eachLayer(function(e) {
          i.push(e.toGeoJSON(t).geometry.coordinates);
        }), Ot(this, {
          type: "MultiPoint",
          coordinates: i
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(t) {
        var i = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (i === "MultiPoint")
          return this.toMultiPoint(t);
        var e = i === "GeometryCollection", n = [];
        return this.eachLayer(function(o) {
          if (o.toGeoJSON) {
            var s = o.toGeoJSON(t);
            if (e)
              n.push(s.geometry);
            else {
              var r = fi(s);
              r.type === "FeatureCollection" ? n.push.apply(n, r.features) : n.push(r);
            }
          }
        }), e ? Ot(this, {
          geometries: n,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: n
        };
      }
    });
    function Qe(t, i) {
      return new ft(t, i);
    }
    var Zo = Qe, _i = ot.extend({
      // @section
      // @aka ImageOverlay options
      options: {
        // @option opacity: Number = 1.0
        // The opacity of the image overlay.
        opacity: 1,
        // @option alt: String = ''
        // Text for the `alt` attribute of the image (useful for accessibility).
        alt: "",
        // @option interactive: Boolean = false
        // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
        interactive: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the image.
        // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option errorOverlayUrl: String = ''
        // URL to the overlay image to show in place of the overlay that failed to load.
        errorOverlayUrl: "",
        // @option zIndex: Number = 1
        // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
        zIndex: 1,
        // @option className: String = ''
        // A custom class name to assign to the image. Empty by default.
        className: ""
      },
      initialize: function(t, i, e) {
        this._url = t, this._bounds = F(i), S(this, e);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (b(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        I(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      // @method setOpacity(opacity: Number): this
      // Sets the opacity of the overlay.
      setOpacity: function(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      },
      setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all overlays.
      bringToFront: function() {
        return this._map && St(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Ct(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(t) {
        return this._bounds = F(t), this._map && this._reset(), this;
      },
      getEvents: function() {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method setZIndex(value: Number): this
      // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method getBounds(): LatLngBounds
      // Get the bounds that this ImageOverlay covers
      getBounds: function() {
        return this._bounds;
      },
      // @method getElement(): HTMLElement
      // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
      // used by this overlay.
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var t = this._url.tagName === "IMG", i = this._image = t ? this._url : k("img");
        if (b(i, "leaflet-image-layer"), this._zoomAnimated && b(i, "leaflet-zoom-animated"), this.options.className && b(i, this.options.className), i.onselectstart = M, i.onmousemove = M, i.onload = v(this.fire, this, "load"), i.onerror = v(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = i.src;
          return;
        }
        i.src = this._url, i.alt = this.options.alt;
      },
      _animateZoom: function(t) {
        var i = this._map.getZoomScale(t.zoom), e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        wt(this._image, e, i);
      },
      _reset: function() {
        var t = this._image, i = new A(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), e = i.getSize();
        D(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px";
      },
      _updateOpacity: function() {
        $(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      },
      // @method getCenter(): LatLng
      // Returns the center of the ImageOverlay.
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), Ao = function(t, i, e) {
      return new _i(t, i, e);
    }, tn = _i.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        // On some browsers autoplay will only work with `muted: true`
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1,
        // @option playsInline: Boolean = true
        // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
        playsInline: !0
      },
      _initImage: function() {
        var t = this._url.tagName === "VIDEO", i = this._image = t ? this._url : k("video");
        if (b(i, "leaflet-image-layer"), this._zoomAnimated && b(i, "leaflet-zoom-animated"), this.options.className && b(i, this.options.className), i.onselectstart = M, i.onmousemove = M, i.onloadeddata = v(this.fire, this, "load"), t) {
          for (var e = i.getElementsByTagName("source"), n = [], o = 0; o < e.length; o++)
            n.push(e[o].src);
          this._url = e.length > 0 ? n : [i.src];
          return;
        }
        et(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i.style, "objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop, i.muted = !!this.options.muted, i.playsInline = !!this.options.playsInline;
        for (var s = 0; s < this._url.length; s++) {
          var r = k("source");
          r.src = this._url[s], i.appendChild(r);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Io(t, i, e) {
      return new tn(t, i, e);
    }
    var en = _i.extend({
      _initImage: function() {
        var t = this._image = this._url;
        b(t, "leaflet-image-layer"), this._zoomAnimated && b(t, "leaflet-zoom-animated"), this.options.className && b(t, this.options.className), t.onselectstart = M, t.onmousemove = M;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function Bo(t, i, e) {
      return new en(t, i, e);
    }
    var ht = ot.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option interactive: Boolean = false
        // If true, the popup/tooltip will listen to the mouse events.
        interactive: !1,
        // @option offset: Point = Point(0, 0)
        // The offset of the overlay position.
        offset: [0, 0],
        // @option className: String = ''
        // A custom CSS class name to assign to the overlay.
        className: "",
        // @option pane: String = undefined
        // `Map pane` where the overlay will be added.
        pane: void 0,
        // @option content: String|HTMLElement|Function = ''
        // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
        // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
        content: ""
      },
      initialize: function(t, i) {
        t && (t instanceof E || et(t)) ? (this._latlng = O(t), S(this, i)) : (S(this, t), this._source = i), this.options.content && (this._content = this.options.content);
      },
      // @method openOn(map: Map): this
      // Adds the overlay to the map.
      // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
      },
      // @method close(): this
      // Closes the overlay.
      // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
      // and `layer.closePopup()`/`.closeTooltip()`.
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      // @method toggle(layer?: Layer): this
      // Opens or closes the overlay bound to layer depending on its current state.
      // Argument may be omitted only for overlay bound to layer.
      // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
      toggle: function(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      },
      onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && $(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && $(this._container, 1), this.bringToFront(), this.options.interactive && (b(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(t) {
        t._fadeAnimated ? ($(this._container, 0), this._removeTimeout = setTimeout(v(I, void 0, this._container), 200)) : I(this._container), this.options.interactive && (B(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      // @namespace DivOverlay
      // @method getLatLng: LatLng
      // Returns the geographical point of the overlay.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the overlay will open.
      setLatLng: function(t) {
        return this._latlng = O(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the overlay.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
      // The function should return a `String` or `HTMLElement` to be used in the overlay.
      setContent: function(t) {
        return this._content = t, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the overlay.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var t = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method isOpen: Boolean
      // Returns `true` when the overlay is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this overlay in front of other overlays (in the same map pane).
      bringToFront: function() {
        return this._map && St(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && Ct(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(t) {
        var i = this._source;
        if (!i._map)
          return !1;
        if (i instanceof ct) {
          i = null;
          var e = this._source._layers;
          for (var n in e)
            if (e[n]._map) {
              i = e[n];
              break;
            }
          if (!i)
            return !1;
          this._source = i;
        }
        if (!t)
          if (i.getCenter)
            t = i.getCenter();
          else if (i.getLatLng)
            t = i.getLatLng();
          else if (i.getBounds)
            t = i.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var t = this._contentNode, i = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof i == "string")
            t.innerHTML = i;
          else {
            for (; t.hasChildNodes(); )
              t.removeChild(t.firstChild);
            t.appendChild(i);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng), i = w(this.options.offset), e = this._getAnchor();
          this._zoomAnimated ? D(this._container, t.add(e)) : i = i.add(t).add(e);
          var n = this._containerBottom = -i.y, o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
          this._container.style.bottom = n + "px", this._container.style.left = o + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    z.include({
      _initOverlay: function(t, i, e, n) {
        var o = i;
        return o instanceof t || (o = new t(n).setContent(i)), e && o.setLatLng(e), o;
      }
    }), ot.include({
      _initOverlay: function(t, i, e, n) {
        var o = e;
        return o instanceof t ? (S(o, n), o._source = this) : (o = i && !n ? i : new t(n, this), o.setContent(e)), o;
      }
    });
    var mi = ht.extend({
      // @section
      // @aka Popup options
      options: {
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane",
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position.
        offset: [0, 7],
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
        // The scrollable container can be styled using the
        // `leaflet-popup-scrolled` CSS class selector.
        maxHeight: null,
        // @option autoPan: Boolean = true
        // Set it to `false` if you don't want the map to do panning animation
        // to fit the opened popup.
        autoPan: !0,
        // @option autoPanPaddingTopLeft: Point = null
        // The margin between the popup and the top left corner of the map
        // view after autopanning was performed.
        autoPanPaddingTopLeft: null,
        // @option autoPanPaddingBottomRight: Point = null
        // The margin between the popup and the bottom right corner of the map
        // view after autopanning was performed.
        autoPanPaddingBottomRight: null,
        // @option autoPanPadding: Point = Point(5, 5)
        // Equivalent of setting both top left and bottom right autopan padding to the same value.
        autoPanPadding: [5, 5],
        // @option keepInView: Boolean = false
        // Set it to `true` if you want to prevent users from panning the popup
        // off of the screen while it is open.
        keepInView: !1,
        // @option closeButton: Boolean = true
        // Controls the presence of a close button in the popup.
        closeButton: !0,
        // @option autoClose: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the popup closing when another popup is opened.
        autoClose: !0,
        // @option closeOnEscapeKey: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the ESC key for closing of the popup.
        closeOnEscapeKey: !0,
        // @option closeOnClick: Boolean = *
        // Set it if you want to override the default behavior of the popup closing when user clicks
        // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: ""
      },
      // @namespace Popup
      // @method openOn(map: Map): this
      // Alternative to `map.openPopup(popup)`.
      // Adds the popup to the map and closes the previous one.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, ht.prototype.openOn.call(this, t);
      },
      onAdd: function(t) {
        ht.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof gt || this._source.on("preclick", xt));
      },
      onRemove: function(t) {
        ht.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof gt || this._source.off("preclick", xt));
      },
      getEvents: function() {
        var t = ht.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function() {
        var t = "leaflet-popup", i = this._container = k(
          "div",
          t + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), e = this._wrapper = k("div", t + "-content-wrapper", i);
        if (this._contentNode = k("div", t + "-content", e), Ut(i), Vi(this._contentNode), x(i, "contextmenu", xt), this._tipContainer = k("div", t + "-tip-container", i), this._tip = k("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var n = this._closeButton = k("a", t + "-close-button", i);
          n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', x(n, "click", function(o) {
            U(o), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode, i = t.style;
        i.width = "", i.whiteSpace = "nowrap";
        var e = t.offsetWidth;
        e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
        var n = t.offsetHeight, o = this.options.maxHeight, s = "leaflet-popup-scrolled";
        o && n > o ? (i.height = o + "px", b(t, s)) : B(t, s), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(t) {
        var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), e = this._getAnchor();
        D(this._container, i.add(e));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var t = this._map, i = parseInt(Rt(this._container, "marginBottom"), 10) || 0, e = this._container.offsetHeight + i, n = this._containerWidth, o = new P(this._containerLeft, -e - this._containerBottom);
          o._add(Pt(this._container));
          var s = t.layerPointToContainerPoint(o), r = w(this.options.autoPanPadding), a = w(this.options.autoPanPaddingTopLeft || r), u = w(this.options.autoPanPaddingBottomRight || r), l = t.getSize(), f = 0, y = 0;
          s.x + n + u.x > l.x && (f = s.x + n - l.x + u.x), s.x - f - a.x < 0 && (f = s.x - a.x), s.y + e + u.y > l.y && (y = s.y + e - l.y + u.y), s.y - y - a.y < 0 && (y = s.y - a.y), (f || y) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([f, y]));
        }
      },
      _getAnchor: function() {
        return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), No = function(t, i) {
      return new mi(t, i);
    };
    z.mergeOptions({
      closePopupOnClick: !0
    }), z.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(t, i, e) {
        return this._initOverlay(mi, t, i, e).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(t) {
        return t = arguments.length ? t : this._popup, t && t.close(), this;
      }
    }), ot.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(t, i) {
        return this._popup = this._initOverlay(mi, this._popup, t, i), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      // @method unbindPopup(): this
      // Removes the popup previously bound with `bindPopup`.
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      // @method openPopup(latlng?: LatLng): this
      // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
      openPopup: function(t) {
        return this._popup && (this instanceof ct || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      // @method isPopupOpen(): boolean
      // Returns `true` if the popup bound to this layer is currently open.
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      // @method setPopupContent(content: String|HTMLElement|Popup): this
      // Sets the content of the popup bound to this layer.
      setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      // @method getPopup(): Popup
      // Returns the popup bound to this layer.
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(t) {
        if (!(!this._popup || !this._map)) {
          Lt(t);
          var i = t.layer || t.target;
          if (this._popup._source === i && !(i instanceof gt)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
            return;
          }
          this._popup._source = i, this.openPopup(t.latlng);
        }
      },
      _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      }
    });
    var pi = ht.extend({
      // @section
      // @aka Tooltip options
      options: {
        // @option pane: String = 'tooltipPane'
        // `Map pane` where the tooltip will be added.
        pane: "tooltipPane",
        // @option offset: Point = Point(0, 0)
        // Optional offset of the tooltip position.
        offset: [0, 0],
        // @option direction: String = 'auto'
        // Direction where to open the tooltip. Possible values are: `right`, `left`,
        // `top`, `bottom`, `center`, `auto`.
        // `auto` will dynamically switch between `right` and `left` according to the tooltip
        // position on the map.
        direction: "auto",
        // @option permanent: Boolean = false
        // Whether to open the tooltip permanently or only on mouseover.
        permanent: !1,
        // @option sticky: Boolean = false
        // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
        sticky: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(t) {
        ht.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(t) {
        ht.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var t = ht.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function() {
        var t = "leaflet-tooltip", i = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = k("div", i), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + m(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(t) {
        var i, e, n = this._map, o = this._container, s = n.latLngToContainerPoint(n.getCenter()), r = n.layerPointToContainerPoint(t), a = this.options.direction, u = o.offsetWidth, l = o.offsetHeight, f = w(this.options.offset), y = this._getAnchor();
        a === "top" ? (i = u / 2, e = l) : a === "bottom" ? (i = u / 2, e = 0) : a === "center" ? (i = u / 2, e = l / 2) : a === "right" ? (i = 0, e = l / 2) : a === "left" ? (i = u, e = l / 2) : r.x < s.x ? (a = "right", i = 0, e = l / 2) : (a = "left", i = u + (f.x + y.x) * 2, e = l / 2), t = t.subtract(w(i, e, !0)).add(f).add(y), B(o, "leaflet-tooltip-right"), B(o, "leaflet-tooltip-left"), B(o, "leaflet-tooltip-top"), B(o, "leaflet-tooltip-bottom"), b(o, "leaflet-tooltip-" + a), D(o, t);
      },
      _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function(t) {
        this.options.opacity = t, this._container && $(this._container, t);
      },
      _animateZoom: function(t) {
        var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(i);
      },
      _getAnchor: function() {
        return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), Do = function(t, i) {
      return new pi(t, i);
    };
    z.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(t, i, e) {
        return this._initOverlay(pi, t, i, e).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(t) {
        return t.close(), this;
      }
    }), ot.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(t, i) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(pi, this._tooltip, t, i), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(t) {
        if (!(!t && this._tooltipHandlersAdded)) {
          var i = t ? "off" : "on", e = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, e.click = this._openTooltip, this._map ? this._addFocusListeners() : e.add = this._addFocusListeners), this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), this[i](e), this._tooltipHandlersAdded = !t;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(t) {
        return this._tooltip && (this instanceof ct || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        if (this._tooltip)
          return this._tooltip.close();
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      // @method isTooltipOpen(): boolean
      // Returns `true` if the tooltip bound to this layer is currently open.
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
      // Sets the content of the tooltip bound to this layer.
      setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      // @method getTooltip(): Tooltip
      // Returns the tooltip bound to this layer.
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(t) {
        var i = t.getElement();
        i && (x(i, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), x(i, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(t) {
        var i = t.getElement();
        i && i.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(t) {
        !this._tooltip || !this._map || this._map.dragging && this._map.dragging.moving() || (this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0));
      },
      _moveTooltip: function(t) {
        var i = t.latlng, e, n;
        this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(e), i = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(i);
      }
    });
    var nn = kt.extend({
      options: {
        // @section
        // @aka DivIcon options
        iconSize: [12, 12],
        // also can be set through CSS
        // iconAnchor: (Point),
        // popupAnchor: (Point),
        // @option html: String|HTMLElement = ''
        // Custom HTML code to put inside the div element, empty by default. Alternatively,
        // an instance of `HTMLElement`.
        html: !1,
        // @option bgPos: Point = [0, 0]
        // Optional relative position of the background, in pixels
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(t) {
        var i = t && t.tagName === "DIV" ? t : document.createElement("div"), e = this.options;
        if (e.html instanceof Element ? (ei(i), i.appendChild(e.html)) : i.innerHTML = e.html !== !1 ? e.html : "", e.bgPos) {
          var n = w(e.bgPos);
          i.style.backgroundPosition = -n.x + "px " + -n.y + "px";
        }
        return this._setIconStyles(i, "icon"), i;
      },
      createShadow: function() {
        return null;
      }
    });
    function Ro(t) {
      return new nn(t);
    }
    kt.Default = Vt;
    var jt = ot.extend({
      // @section
      // @aka GridLayer options
      options: {
        // @option tileSize: Number|Point = 256
        // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
        tileSize: 256,
        // @option opacity: Number = 1.0
        // Opacity of the tiles. Can be used in the `createTile()` function.
        opacity: 1,
        // @option updateWhenIdle: Boolean = (depends)
        // Load new tiles only when panning ends.
        // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
        // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
        // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
        updateWhenIdle: p.mobile,
        // @option updateWhenZooming: Boolean = true
        // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
        updateWhenZooming: !0,
        // @option updateInterval: Number = 200
        // Tiles will not update more than once every `updateInterval` milliseconds when panning.
        updateInterval: 200,
        // @option zIndex: Number = 1
        // The explicit zIndex of the tile layer.
        zIndex: 1,
        // @option bounds: LatLngBounds = undefined
        // If set, tiles will only be loaded inside the set `LatLngBounds`.
        bounds: null,
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = undefined
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: void 0,
        // @option maxNativeZoom: Number = undefined
        // Maximum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
        // from `maxNativeZoom` level and auto-scaled.
        maxNativeZoom: void 0,
        // @option minNativeZoom: Number = undefined
        // Minimum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
        // from `minNativeZoom` level and auto-scaled.
        minNativeZoom: void 0,
        // @option noWrap: Boolean = false
        // Whether the layer is wrapped around the antimeridian. If `true`, the
        // GridLayer will only be displayed once at low zoom levels. Has no
        // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
        // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
        // tiles outside the CRS limits.
        noWrap: !1,
        // @option pane: String = 'tilePane'
        // `Map pane` where the grid layer will be added.
        pane: "tilePane",
        // @option className: String = ''
        // A custom class name to assign to the tile layer. Empty by default.
        className: "",
        // @option keepBuffer: Number = 2
        // When panning the map, keep this many rows and columns of tiles before unloading them.
        keepBuffer: 2
      },
      initialize: function(t) {
        S(this, t);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(), I(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (St(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Ct(this._container), this._setAutoZIndex(Math.min)), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the tiles for this layer.
      getContainer: function() {
        return this._container;
      },
      // @method setOpacity(opacity: Number): this
      // Changes the [opacity](#gridlayer-opacity) of the grid layer.
      setOpacity: function(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      },
      // @method setZIndex(zIndex: Number): this
      // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method isLoading: Boolean
      // Returns `true` if any tile in the grid layer has not finished loading.
      isLoading: function() {
        return this._loading;
      },
      // @method redraw: this
      // Causes the layer to clear all the tiles and request them again.
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = G(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @section Extension methods
      // Layers extending `GridLayer` shall reimplement the following method.
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, must be overridden by classes extending `GridLayer`.
      // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
      // is specified, it must be called when the tile has finished loading and drawing.
      createTile: function() {
        return document.createElement("div");
      },
      // @section
      // @method getTileSize: Point
      // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
      getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof P ? t : new P(t, t);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (var i = this.getPane().children, e = -t(-1 / 0, 1 / 0), n = 0, o = i.length, s; n < o; n++)
          s = i[n].style.zIndex, i[n] !== this._container && s && (e = t(e, +s));
        isFinite(e) && (this.options.zIndex = e + t(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !p.ielt9) {
          $(this._container, this.options.opacity);
          var t = +new Date(), i = !1, e = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (!(!o.current || !o.loaded)) {
              var s = Math.min(1, (t - o.loaded) / 200);
              $(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0);
            }
          }
          e && !this._noPrune && this._pruneTiles(), i && (J(this._fadeFrame), this._fadeFrame = V(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: M,
      _initContainer: function() {
        this._container || (this._container = k("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom, i = this.options.maxZoom;
        if (t !== void 0) {
          for (var e in this._levels)
            e = Number(e), this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (I(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
          var n = this._levels[t], o = this._map;
          return n || (n = this._levels[t] = {}, n.el = k("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), M(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
        }
      },
      _onUpdateLevel: M,
      _onRemoveLevel: M,
      _onCreateLevel: M,
      _pruneTiles: function() {
        if (this._map) {
          var t, i, e = this._map.getZoom();
          if (e > this.options.maxZoom || e < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles)
            i = this._tiles[t], i.retain = i.current;
          for (t in this._tiles)
            if (i = this._tiles[t], i.current && !i.active) {
              var n = i.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          for (t in this._tiles)
            this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function(t) {
        for (var i in this._tiles)
          this._tiles[i].coords.z === t && this._removeTile(i);
      },
      _removeAllTiles: function() {
        for (var t in this._tiles)
          this._removeTile(t);
      },
      _invalidateAll: function() {
        for (var t in this._levels)
          I(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(t, i, e, n) {
        var o = Math.floor(t / 2), s = Math.floor(i / 2), r = e - 1, a = new P(+o, +s);
        a.z = +r;
        var u = this._tileCoordsToKey(a), l = this._tiles[u];
        return l && l.active ? (l.retain = !0, !0) : (l && l.loaded && (l.retain = !0), r > n ? this._retainParent(o, s, r, n) : !1);
      },
      _retainChildren: function(t, i, e, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * i; s < 2 * i + 2; s++) {
            var r = new P(o, s);
            r.z = e + 1;
            var a = this._tileCoordsToKey(r), u = this._tiles[a];
            if (u && u.active) {
              u.retain = !0;
              continue;
            } else
              u && u.loaded && (u.retain = !0);
            e + 1 < n && this._retainChildren(o, s, e + 1, n);
          }
      },
      _resetView: function(t) {
        var i = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
      },
      _animateZoom: function(t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function(t) {
        var i = this.options;
        return i.minNativeZoom !== void 0 && t < i.minNativeZoom ? i.minNativeZoom : i.maxNativeZoom !== void 0 && i.maxNativeZoom < t ? i.maxNativeZoom : t;
      },
      _setView: function(t, i, e, n) {
        var o = Math.round(i);
        this.options.maxZoom !== void 0 && o > this.options.maxZoom || this.options.minZoom !== void 0 && o < this.options.minZoom ? o = void 0 : o = this._clampZoom(o);
        var s = this.options.updateWhenZooming && o !== this._tileZoom;
        (!n || s) && (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), o !== void 0 && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i);
      },
      _setZoomTransforms: function(t, i) {
        for (var e in this._levels)
          this._setZoomTransform(this._levels[e], t, i);
      },
      _setZoomTransform: function(t, i, e) {
        var n = this._map.getZoomScale(e, t.zoom), o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
        p.any3d ? wt(t.el, o, n) : D(t.el, o);
      },
      _resetGrid: function() {
        var t = this._map, i = t.options.crs, e = this._tileSize = this.getTileSize(), n = this._tileZoom, o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [
          Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x),
          Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)
        ], this._wrapY = i.wrapLat && !this.options.noWrap && [
          Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x),
          Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(t) {
        var i = this._map, e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(), n = i.getZoomScale(e, this._tileZoom), o = i.project(t, this._tileZoom).floor(), s = i.getSize().divideBy(n * 2);
        return new A(o.subtract(s), o.add(s));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(t) {
        var i = this._map;
        if (i) {
          var e = this._clampZoom(i.getZoom());
          if (t === void 0 && (t = i.getCenter()), this._tileZoom !== void 0) {
            var n = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(n), s = o.getCenter(), r = [], a = this.options.keepBuffer, u = new A(
              o.getBottomLeft().subtract([a, -a]),
              o.getTopRight().add([a, -a])
            );
            if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var l in this._tiles) {
              var f = this._tiles[l].coords;
              (f.z !== this._tileZoom || !u.contains(new P(f.x, f.y))) && (this._tiles[l].current = !1);
            }
            if (Math.abs(e - this._tileZoom) > 1) {
              this._setView(t, e);
              return;
            }
            for (var y = o.min.y; y <= o.max.y; y++)
              for (var T = o.min.x; T <= o.max.x; T++) {
                var tt = new P(T, y);
                if (tt.z = this._tileZoom, !!this._isValidTile(tt)) {
                  var Tt = this._tiles[this._tileCoordsToKey(tt)];
                  Tt ? Tt.current = !0 : r.push(tt);
                }
              }
            if (r.sort(function(yt, ne) {
              return yt.distanceTo(s) - ne.distanceTo(s);
            }), r.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var gi = document.createDocumentFragment();
              for (T = 0; T < r.length; T++)
                this._addTile(r[T], gi);
              this._level.el.appendChild(gi);
            }
          }
        }
      },
      _isValidTile: function(t) {
        var i = this._map.options.crs;
        if (!i.infinite) {
          var e = this._globalTileRange;
          if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var n = this._tileCoordsToBounds(t);
        return F(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var i = this._map, e = this.getTileSize(), n = t.scaleBy(e), o = n.add(e), s = i.unproject(n, t.z), r = i.unproject(o, t.z);
        return [s, r];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(t) {
        var i = this._tileCoordsToNwSe(t), e = new Y(i[0], i[1]);
        return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(t) {
        var i = t.split(":"), e = new P(+i[0], +i[1]);
        return e.z = +i[2], e;
      },
      _removeTile: function(t) {
        var i = this._tiles[t];
        i && (I(i.el), delete this._tiles[t], this.fire("tileunload", {
          tile: i.el,
          coords: this._keyToTileCoords(t)
        }));
      },
      _initTile: function(t) {
        b(t, "leaflet-tile");
        var i = this.getTileSize();
        t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = M, t.onmousemove = M, p.ielt9 && this.options.opacity < 1 && $(t, this.options.opacity);
      },
      _addTile: function(t, i) {
        var e = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), v(this._tileReady, this, t));
        this._initTile(o), this.createTile.length < 2 && V(v(this._tileReady, this, t, null, o)), D(o, e), this._tiles[n] = {
          el: o,
          coords: t,
          current: !0
        }, i.appendChild(o), this.fire("tileloadstart", {
          tile: o,
          coords: t
        });
      },
      _tileReady: function(t, i, e) {
        i && this.fire("tileerror", {
          error: i,
          tile: e,
          coords: t
        });
        var n = this._tileCoordsToKey(t);
        e = this._tiles[n], e && (e.loaded = +new Date(), this._map._fadeAnimated ? ($(e.el, 0), J(this._fadeFrame), this._fadeFrame = V(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), i || (b(e.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: e.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), p.ielt9 || !this._map._fadeAnimated ? V(this._pruneTiles, this) : setTimeout(v(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var i = new P(
          this._wrapX ? W(t.x, this._wrapX) : t.x,
          this._wrapY ? W(t.y, this._wrapY) : t.y
        );
        return i.z = t.z, i;
      },
      _pxBoundsToTileRange: function(t) {
        var i = this.getTileSize();
        return new A(
          t.min.unscaleBy(i).floor(),
          t.max.unscaleBy(i).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var t in this._tiles)
          if (!this._tiles[t].loaded)
            return !1;
        return !0;
      }
    });
    function Fo(t) {
      return new jt(t);
    }
    var Zt = jt.extend({
      // @section
      // @aka TileLayer options
      options: {
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = 18
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: 18,
        // @option subdomains: String|String[] = 'abc'
        // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
        subdomains: "abc",
        // @option errorTileUrl: String = ''
        // URL to the tile image to show in place of the tile that failed to load.
        errorTileUrl: "",
        // @option zoomOffset: Number = 0
        // The zoom number used in tile URLs will be offset with this value.
        zoomOffset: 0,
        // @option tms: Boolean = false
        // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
        tms: !1,
        // @option zoomReverse: Boolean = false
        // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
        zoomReverse: !1,
        // @option detectRetina: Boolean = false
        // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
        detectRetina: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option referrerPolicy: Boolean|String = false
        // Whether the referrerPolicy attribute will be added to the tiles.
        // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
        // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
        // (e.g. to validate an API token).
        // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
        referrerPolicy: !1
      },
      initialize: function(t, i) {
        this._url = t, i = S(this, i), i.detectRetina && p.retina && i.maxZoom > 0 ? (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom = Math.min(i.maxZoom, i.minZoom + 1)) : (i.zoomOffset++, i.maxZoom = Math.max(i.minZoom, i.maxZoom - 1)), i.minZoom = Math.max(0, i.minZoom)) : i.zoomReverse ? i.minZoom = Math.min(i.maxZoom, i.minZoom) : i.maxZoom = Math.max(i.minZoom, i.maxZoom), typeof i.subdomains == "string" && (i.subdomains = i.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(t, i) {
        return this._url === t && i === void 0 && (i = !0), this._url = t, i || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(t, i) {
        var e = document.createElement("img");
        return x(e, "load", v(this._tileOnLoad, this, i, e)), x(e, "error", v(this._tileOnError, this, i, e)), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (e.referrerPolicy = this.options.referrerPolicy), e.alt = "", e.src = this.getTileUrl(t), e;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(t) {
        var i = {
          r: p.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var e = this._globalTileRange.max.y - t.y;
          this.options.tms && (i.y = e), i["-y"] = e;
        }
        return $t(this._url, _(i, this.options));
      },
      _tileOnLoad: function(t, i) {
        p.ielt9 ? setTimeout(v(t, this, null, i), 0) : t(null, i);
      },
      _tileOnError: function(t, i, e) {
        var n = this.options.errorTileUrl;
        n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
      },
      _onTileRemove: function(t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var t = this._tileZoom, i = this.options.maxZoom, e = this.options.zoomReverse, n = this.options.zoomOffset;
        return e && (t = i - t), t + n;
      },
      _getSubdomain: function(t) {
        var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[i];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var t, i;
        for (t in this._tiles)
          if (this._tiles[t].coords.z !== this._tileZoom && (i = this._tiles[t].el, i.onload = M, i.onerror = M, !i.complete)) {
            i.src = Qt;
            var e = this._tiles[t].coords;
            I(i), delete this._tiles[t], this.fire("tileabort", {
              tile: i,
              coords: e
            });
          }
      },
      _removeTile: function(t) {
        var i = this._tiles[t];
        if (i)
          return i.el.setAttribute("src", Qt), jt.prototype._removeTile.call(this, t);
      },
      _tileReady: function(t, i, e) {
        if (!(!this._map || e && e.getAttribute("src") === Qt))
          return jt.prototype._tileReady.call(this, t, i, e);
      }
    });
    function on(t, i) {
      return new Zt(t, i);
    }
    var sn = Zt.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        // @option layers: String = ''
        // **(required)** Comma-separated list of WMS layers to show.
        layers: "",
        // @option styles: String = ''
        // Comma-separated list of WMS styles.
        styles: "",
        // @option format: String = 'image/jpeg'
        // WMS image format (use `'image/png'` for layers with transparency).
        format: "image/jpeg",
        // @option transparent: Boolean = false
        // If `true`, the WMS service will return images with transparency.
        transparent: !1,
        // @option version: String = '1.1.1'
        // Version of the WMS service to use
        version: "1.1.1"
      },
      options: {
        // @option crs: CRS = null
        // Coordinate Reference System to use for the WMS requests, defaults to
        // map CRS. Don't change this if you're not sure what it means.
        crs: null,
        // @option uppercase: Boolean = false
        // If `true`, WMS request parameter keys will be uppercase.
        uppercase: !1
      },
      initialize: function(t, i) {
        this._url = t;
        var e = _({}, this.defaultWmsParams);
        for (var n in i)
          n in this.options || (e[n] = i[n]);
        i = S(this, i);
        var o = i.detectRetina && p.retina ? 2 : 1, s = this.getTileSize();
        e.width = s.x * o, e.height = s.y * o, this.wmsParams = e;
      },
      onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[i] = this._crs.code, Zt.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var i = this._tileCoordsToNwSe(t), e = this._crs, n = j(e.project(i[0]), e.project(i[1])), o = n.min, s = n.max, r = (this._wmsVersion >= 1.3 && this._crs === Ke ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","), a = Zt.prototype.getTileUrl.call(this, t);
        return a + mt(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(t, i) {
        return _(this.wmsParams, t), i || this.redraw(), this;
      }
    });
    function Ho(t, i) {
      return new sn(t, i);
    }
    Zt.WMS = sn, on.wms = Ho;
    var _t = ot.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(t) {
        S(this, t), m(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), this._zoomAnimated && b(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(t, i) {
        var e = this._map.getZoomScale(i, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), o = this._map.project(this._center, i), s = n.multiplyBy(-e).add(o).subtract(this._map._getNewPixelOrigin(t, i));
        p.any3d ? wt(this._container, s, e) : D(this._container, s);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers)
          this._layers[t]._reset();
      },
      _onZoomEnd: function() {
        for (var t in this._layers)
          this._layers[t]._project();
      },
      _updatePaths: function() {
        for (var t in this._layers)
          this._layers[t]._update();
      },
      _update: function() {
        var t = this.options.padding, i = this._map.getSize(), e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
        this._bounds = new A(e, e.add(i.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), rn = _t.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var t = _t.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        _t.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        x(t, "mousemove", this._onMouseMove, this), x(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), x(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function() {
        J(this._redrawRequest), delete this._ctx, I(this._container), Z(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var t;
          this._redrawBounds = null;
          for (var i in this._layers)
            t = this._layers[i], t._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          _t.prototype._update.call(this);
          var t = this._bounds, i = this._container, e = t.getSize(), n = p.retina ? 2 : 1;
          D(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", p.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      },
      _reset: function() {
        _t.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(t) {
        this._updateDashArray(t), this._layers[m(t)] = t;
        var i = t._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(t) {
        this._requestRedraw(t);
      },
      _removePath: function(t) {
        var i = t._order, e = i.next, n = i.prev;
        e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[m(t)], this._requestRedraw(t);
      },
      _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          var i = t.options.dashArray.split(/[, ]+/), e = [], n, o;
          for (o = 0; o < i.length; o++) {
            if (n = Number(i[o]), isNaN(n))
              return;
            e.push(n);
          }
          t.options._dashArray = e;
        } else
          t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || V(this._redraw, this));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var i = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new A(), this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var t = this._redrawBounds;
        if (t) {
          var i = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var t, i = this._redrawBounds;
        if (this._ctx.save(), i) {
          var e = i.getSize();
          this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next)
          t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(t, i) {
        if (this._drawing) {
          var e, n, o, s, r = t._parts, a = r.length, u = this._ctx;
          if (a) {
            for (u.beginPath(), e = 0; e < a; e++) {
              for (n = 0, o = r[e].length; n < o; n++)
                s = r[e][n], u[n ? "lineTo" : "moveTo"](s.x, s.y);
              i && u.closePath();
            }
            this._fillStroke(u, t);
          }
        }
      },
      _updateCircle: function(t) {
        if (!(!this._drawing || t._empty())) {
          var i = t._point, e = this._ctx, n = Math.max(Math.round(t._radius), 1), o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
          o !== 1 && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, Math.PI * 2, !1), o !== 1 && e.restore(), this._fillStroke(e, t);
        }
      },
      _fillStroke: function(t, i) {
        var e = i.options;
        e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && e.weight !== 0 && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(t) {
        for (var i = this._map.mouseEventToLayerPoint(t), e, n, o = this._drawFirst; o; o = o.next)
          e = o.layer, e.options.interactive && e._containsPoint(i) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(e)) && (n = e);
        this._fireEvent(n ? [n] : !1, t);
      },
      _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var i = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, i);
        }
      },
      _handleMouseOut: function(t) {
        var i = this._hoveredLayer;
        i && (B(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(t, i) {
        if (!this._mouseHoverThrottled) {
          for (var e, n, o = this._drawFirst; o; o = o.next)
            e = o.layer, e.options.interactive && e._containsPoint(i) && (n = e);
          n !== this._hoveredLayer && (this._handleMouseOut(t), n && (b(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(v(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(t, i, e) {
        this._map._fireDOMEvent(i, e || i.type, t);
      },
      _bringToFront: function(t) {
        var i = t._order;
        if (i) {
          var e = i.next, n = i.prev;
          if (e)
            e.prev = n;
          else
            return;
          n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t);
        }
      },
      _bringToBack: function(t) {
        var i = t._order;
        if (i) {
          var e = i.next, n = i.prev;
          if (n)
            n.next = e;
          else
            return;
          e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t);
        }
      }
    });
    function an(t) {
      return p.canvas ? new rn(t) : null;
    }
    var Yt = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch {
      }
      return function(t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), Wo = {
      _initContainer: function() {
        this._container = k("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (_t.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(t) {
        var i = t._container = Yt("shape");
        b(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = Yt("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[m(t)] = t;
      },
      _addPath: function(t) {
        var i = t._container;
        this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i);
      },
      _removePath: function(t) {
        var i = t._container;
        I(i), t.removeInteractiveTarget(i), delete this._layers[m(t)];
      },
      _updateStyle: function(t) {
        var i = t._stroke, e = t._fill, n = t.options, o = t._container;
        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = Yt("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = et(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = Yt("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null);
      },
      _updateCircle: function(t) {
        var i = t._point.round(), e = Math.round(t._radius), n = Math.round(t._radiusY || e);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0," + 65535 * 360);
      },
      _setPath: function(t, i) {
        t._path.v = i;
      },
      _bringToFront: function(t) {
        St(t._container);
      },
      _bringToBack: function(t) {
        Ct(t._container);
      }
    }, vi = p.vml ? Yt : le, Xt = _t.extend({
      _initContainer: function() {
        this._container = vi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = vi("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        I(this._container), Z(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          _t.prototype._update.call(this);
          var t = this._bounds, i = t.getSize(), e = this._container;
          (!this._svgSize || !this._svgSize.equals(i)) && (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), D(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(t) {
        var i = t._path = vi("path");
        t.options.className && b(i, t.options.className), t.options.interactive && b(i, "leaflet-interactive"), this._updateStyle(t), this._layers[m(t)] = t;
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        I(t._path), t.removeInteractiveTarget(t._path), delete this._layers[m(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var i = t._path, e = t.options;
        i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"));
      },
      _updatePoly: function(t, i) {
        this._setPath(t, ce(t._parts, i));
      },
      _updateCircle: function(t) {
        var i = t._point, e = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || e, o = "a" + e + "," + n + " 0 1,0 ", s = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + o + e * 2 + ",0 " + o + -e * 2 + ",0 ";
        this._setPath(t, s);
      },
      _setPath: function(t, i) {
        t._path.setAttribute("d", i);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(t) {
        St(t._path);
      },
      _bringToBack: function(t) {
        Ct(t._path);
      }
    });
    p.vml && Xt.include(Wo);
    function hn(t) {
      return p.svg || p.vml ? new Xt(t) : null;
    }
    z.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(t) {
        var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
        return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i;
      },
      _getPaneRenderer: function(t) {
        if (t === "overlayPane" || t === void 0)
          return !1;
        var i = this._paneRenderers[t];
        return i === void 0 && (i = this._createRenderer({ pane: t }), this._paneRenderers[t] = i), i;
      },
      _createRenderer: function(t) {
        return this.options.preferCanvas && an(t) || hn(t);
      }
    });
    var un = Et.extend({
      initialize: function(t, i) {
        Et.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function(t) {
        return t = F(t), [
          t.getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast()
        ];
      }
    });
    function Uo(t, i) {
      return new un(t, i);
    }
    Xt.create = vi, Xt.pointsToPath = ce, ft.geometryToLayer = li, ft.coordsToLatLng = te, ft.coordsToLatLngs = ci, ft.latLngToCoords = ie, ft.latLngsToCoords = di, ft.getFeature = Ot, ft.asFeature = fi, z.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var ln = at.extend({
      initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function() {
        x(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        Z(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        I(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(t) {
        if (!t.shiftKey || t.which !== 1 && t.button !== 1)
          return !1;
        this._clearDeferredResetState(), this._resetState(), Ft(), Di(), this._startPoint = this._map.mouseEventToContainerPoint(t), x(document, {
          contextmenu: Lt,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(t) {
        this._moved || (this._moved = !0, this._box = k("div", "leaflet-zoom-box", this._container), b(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var i = new A(this._point, this._startPoint), e = i.getSize();
        D(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px";
      },
      _finish: function() {
        this._moved && (I(this._box), B(this._container, "leaflet-crosshair")), Ht(), Ri(), Z(document, {
          contextmenu: Lt,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(v(this._resetState, this), 0);
          var i = new Y(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i });
        }
      },
      _onKeyDown: function(t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    z.addInitHook("addHandler", "boxZoom", ln), z.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var cn = at.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(t) {
        var i = this._map, e = i.getZoom(), n = i.options.zoomDelta, o = t.originalEvent.shiftKey ? e - n : e + n;
        i.options.doubleClickZoom === "center" ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o);
      }
    });
    z.addInitHook("addHandler", "doubleClickZoom", cn), z.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map is draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default.
      inertia: !0,
      // @option inertiaDeceleration: Number = 3000
      // The rate with which the inertial movement slows down, in pixels/second².
      inertiaDeceleration: 3400,
      // px/s^2
      // @option inertiaMaxSpeed: Number = Infinity
      // Max speed of the inertial movement, in pixels/second.
      inertiaMaxSpeed: 1 / 0,
      // px/s
      // @option easeLinearity: Number = 0.2
      easeLinearity: 0.2,
      // TODO refactor, move to CRS
      // @option worldCopyJump: Boolean = false
      // With this option enabled, the map tracks when you pan to another "copy"
      // of the world and seamlessly jumps to the original one so that all overlays
      // like markers and vector layers are still visible.
      worldCopyJump: !1,
      // @option maxBoundsViscosity: Number = 0.0
      // If `maxBounds` is set, this option will control how solid the bounds
      // are when dragging the map around. The default value of `0.0` allows the
      // user to drag outside the bounds at normal speed, higher values will
      // slow down map dragging outside bounds, and `1.0` makes the bounds fully
      // solid, preventing the user from dragging outside the bounds.
      maxBoundsViscosity: 0
    });
    var dn = at.extend({
      addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new vt(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        b(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        B(this._map._container, "leaflet-grab"), B(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var t = this._map;
        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var i = F(this._map.options.maxBounds);
          this._offsetLimit = j(
            this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(t) {
        if (this._map.options.inertia) {
          var i = this._lastTime = +new Date(), e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(e), this._times.push(i), this._prunePositions(i);
        }
        this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function(t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var t = this._map.getSize().divideBy(2), i = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(t, i) {
        return t - (t - i) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos), i = this._offsetLimit;
          t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
        }
      },
      _onPreDragWrap: function() {
        var t = this._worldWidth, i = Math.round(t / 2), e = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - i + e) % t + i - e, s = (n + i + e) % t - i - e, r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r;
      },
      _onDragEnd: function(t) {
        var i = this._map, e = i.options, n = !e.inertia || t.noInertia || this._times.length < 2;
        if (i.fire("dragend", t), n)
          i.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var o = this._lastPos.subtract(this._positions[0]), s = (this._lastTime - this._times[0]) / 1e3, r = e.easeLinearity, a = o.multiplyBy(r / s), u = a.distanceTo([0, 0]), l = Math.min(e.inertiaMaxSpeed, u), f = a.multiplyBy(l / u), y = l / (e.inertiaDeceleration * r), T = f.multiplyBy(-y / 2).round();
          !T.x && !T.y ? i.fire("moveend") : (T = i._limitOffset(T, i.options.maxBounds), V(function() {
            i.panBy(T, {
              duration: y,
              easeLinearity: r,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    z.addInitHook("addHandler", "dragging", dn), z.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var fn = at.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), x(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), Z(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var t = document.body, i = document.documentElement, e = t.scrollTop || i.scrollTop, n = t.scrollLeft || i.scrollLeft;
          this._map._container.focus(), window.scrollTo(n, e);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(t) {
        var i = this._panKeys = {}, e = this.keyCodes, n, o;
        for (n = 0, o = e.left.length; n < o; n++)
          i[e.left[n]] = [-1 * t, 0];
        for (n = 0, o = e.right.length; n < o; n++)
          i[e.right[n]] = [t, 0];
        for (n = 0, o = e.down.length; n < o; n++)
          i[e.down[n]] = [0, t];
        for (n = 0, o = e.up.length; n < o; n++)
          i[e.up[n]] = [0, -1 * t];
      },
      _setZoomDelta: function(t) {
        var i = this._zoomKeys = {}, e = this.keyCodes, n, o;
        for (n = 0, o = e.zoomIn.length; n < o; n++)
          i[e.zoomIn[n]] = t;
        for (n = 0, o = e.zoomOut.length; n < o; n++)
          i[e.zoomOut[n]] = -t;
      },
      _addHooks: function() {
        x(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        Z(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var i = t.keyCode, e = this._map, n;
          if (i in this._panKeys) {
            if (!e._panAnim || !e._panAnim._inProgress)
              if (n = this._panKeys[i], t.shiftKey && (n = w(n).multiplyBy(3)), e.options.maxBounds && (n = e._limitOffset(w(n), e.options.maxBounds)), e.options.worldCopyJump) {
                var o = e.wrapLatLng(e.unproject(e.project(e.getCenter()).add(n)));
                e.panTo(o);
              } else
                e.panBy(n);
          } else if (i in this._zoomKeys)
            e.setZoom(e.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
          else if (i === 27 && e._popup && e._popup.options.closeOnEscapeKey)
            e.closePopup();
          else
            return;
          Lt(t);
        }
      }
    });
    z.addInitHook("addHandler", "keyboard", fn), z.mergeOptions({
      // @section Mouse wheel options
      // @option scrollWheelZoom: Boolean|String = true
      // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
      // it will zoom to the center of the view regardless of where the mouse was.
      scrollWheelZoom: !0,
      // @option wheelDebounceTime: Number = 40
      // Limits the rate at which a wheel can fire (in milliseconds). By default
      // user can't zoom via wheel more often than once per 40 ms.
      wheelDebounceTime: 40,
      // @option wheelPxPerZoomLevel: Number = 60
      // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
      // mean a change of one full zoom level. Smaller values will make wheel-zooming
      // faster (and vice versa).
      wheelPxPerZoomLevel: 60
    });
    var _n = at.extend({
      addHooks: function() {
        x(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        Z(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(t) {
        var i = Ne(t), e = this._map.options.wheelDebounceTime;
        this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
        var n = Math.max(e - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(v(this._performZoom, this), n), Lt(t);
      },
      _performZoom: function() {
        var t = this._map, i = t.getZoom(), e = this._map.options.zoomSnap || 0;
        t._stop();
        var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, s = e ? Math.ceil(o / e) * e : o, r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
        this._delta = 0, this._startTime = null, r && (t.options.scrollWheelZoom === "center" ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r));
      }
    });
    z.addInitHook("addHandler", "scrollWheelZoom", _n);
    var Go = 600;
    z.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: p.touchNative && p.safari && p.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var mn = at.extend({
      addHooks: function() {
        x(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        Z(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(t) {
        if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
          var i = t.touches[0];
          this._startPos = this._newPos = new P(i.clientX, i.clientY), this._holdTimeout = setTimeout(v(function() {
            this._cancel(), this._isTapValid() && (x(document, "touchend", U), x(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", i));
          }, this), Go), x(document, "touchend touchcancel contextmenu", this._cancel, this), x(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        Z(document, "touchend", U), Z(document, "touchend touchcancel", t);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), Z(document, "touchend touchcancel contextmenu", this._cancel, this), Z(document, "touchmove", this._onMove, this);
      },
      _onMove: function(t) {
        var i = t.touches[0];
        this._newPos = new P(i.clientX, i.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(t, i) {
        var e = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: i.screenX,
          screenY: i.screenY,
          clientX: i.clientX,
          clientY: i.clientY
          // button: 2,
          // buttons: 2
        });
        e._simulated = !0, i.target.dispatchEvent(e);
      }
    });
    z.addInitHook("addHandler", "tapHold", mn), z.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: p.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var pn = at.extend({
      addHooks: function() {
        b(this._map._container, "leaflet-touch-zoom"), x(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        B(this._map._container, "leaflet-touch-zoom"), Z(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(t) {
        var i = this._map;
        if (!(!t.touches || t.touches.length !== 2 || i._animatingZoom || this._zooming)) {
          var e = i.mouseEventToContainerPoint(t.touches[0]), n = i.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), i.options.touchZoom !== "center" && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), x(document, "touchmove", this._onTouchMove, this), x(document, "touchend touchcancel", this._onTouchEnd, this), U(t);
        }
      },
      _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var i = this._map, e = i.mouseEventToContainerPoint(t.touches[0]), n = i.mouseEventToContainerPoint(t.touches[1]), o = e.distanceTo(n) / this._startDist;
          if (this._zoom = i.getScaleZoom(o, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && o < 1 || this._zoom > i.getMaxZoom() && o > 1) && (this._zoom = i._limitZoom(this._zoom)), i.options.touchZoom === "center") {
            if (this._center = this._startLatLng, o === 1)
              return;
          } else {
            var s = e._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (o === 1 && s.x === 0 && s.y === 0)
              return;
            this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
          }
          this._moved || (i._moveStart(!0, !1), this._moved = !0), J(this._animRequest);
          var r = v(i._move, i, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = V(r, this, !0), U(t);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, J(this._animRequest), Z(document, "touchmove", this._onTouchMove, this), Z(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    z.addInitHook("addHandler", "touchZoom", pn), z.BoxZoom = ln, z.DoubleClickZoom = cn, z.Drag = dn, z.Keyboard = fn, z.ScrollWheelZoom = _n, z.TapHold = mn, z.TouchZoom = pn, h.Bounds = A, h.Browser = p, h.CRS = lt, h.Canvas = rn, h.Circle = Qi, h.CircleMarker = ui, h.Class = ut, h.Control = nt, h.DivIcon = nn, h.DivOverlay = ht, h.DomEvent = ao, h.DomUtil = so, h.Draggable = vt, h.Evented = It, h.FeatureGroup = ct, h.GeoJSON = ft, h.GridLayer = jt, h.Handler = at, h.Icon = kt, h.ImageOverlay = _i, h.LatLng = E, h.LatLngBounds = Y, h.Layer = ot, h.LayerGroup = zt, h.LineUtil = wo, h.Map = z, h.Marker = hi, h.Mixin = mo, h.Path = gt, h.Point = P, h.PolyUtil = Po, h.Polygon = Et, h.Polyline = dt, h.Popup = mi, h.PosAnimation = De, h.Projection = xo, h.Rectangle = un, h.Renderer = _t, h.SVG = Xt, h.SVGOverlay = en, h.TileLayer = Zt, h.Tooltip = pi, h.Transformation = Mi, h.Util = Sn, h.VideoOverlay = tn, h.bind = v, h.bounds = j, h.canvas = an, h.circle = ko, h.circleMarker = zo, h.control = Gt, h.divIcon = Ro, h.extend = _, h.featureGroup = Mo, h.geoJSON = Qe, h.geoJson = Zo, h.gridLayer = Fo, h.icon = So, h.imageOverlay = Ao, h.latLng = O, h.latLngBounds = F, h.layerGroup = To, h.map = ho, h.marker = Co, h.point = w, h.polygon = Oo, h.polyline = Eo, h.popup = No, h.rectangle = Uo, h.setOptions = S, h.stamp = m, h.svg = hn, h.svgOverlay = Bo, h.tileLayer = on, h.tooltip = Do, h.transformation = Bt, h.version = g, h.videoOverlay = Io;
    var qo = window.L;
    h.noConflict = function() {
      return window.L = qo, this;
    }, window.L = h;
  });
})(gs, Pi);
const ys = Pi;
L.SVG.include({
  _updateEllipse: function(c) {
    c._point;
    var d = c._radiusX, h = c._radiusY, g = c._tiltDeg, _ = c._endPointParams, C = "M" + _.x0 + "," + _.y0 + "A" + d + "," + h + "," + g + "," + _.largeArc + "," + _.sweep + "," + _.x1 + "," + _.y1 + " z";
    this._setPath(c, C);
  }
});
L.Canvas.include({
  _updateEllipse: function(c) {
    if (!c._empty()) {
      var d = c._point, h = this._ctx, g = c._radiusX, _ = (c._radiusY || g) / g;
      this._drawnLayers[c._leaflet_id] = c, h.save(), h.translate(d.x, d.y), c._tilt !== 0 && h.rotate(c._tilt), _ !== 1 && h.scale(1, _), h.beginPath(), h.arc(0, 0, g, 0, Math.PI * 2), h.restore(), this._fillStroke(h, c);
    }
  }
});
L.Ellipse = L.Path.extend({
  options: {
    fill: !0,
    startAngle: 0,
    endAngle: 359.9
  },
  initialize: function(c, d, h, g) {
    L.setOptions(this, g), this._latlng = L.latLng(c), h ? this._tiltDeg = h : this._tiltDeg = 0, d && (this._mRadiusX = d[0], this._mRadiusY = d[1]);
  },
  setRadius: function(c) {
    return this._mRadiusX = c[0], this._mRadiusY = c[1], this.redraw();
  },
  getRadius: function() {
    return new L.point(this._mRadiusX, this._mRadiusY);
  },
  setTilt: function(c) {
    return this._tiltDeg = c, this.redraw();
  },
  getBounds: function() {
    var c = this._getLngRadius(), d = this._getLatRadius(), h = this._latlng;
    return new L.LatLngBounds(
      [h.lat - d, h.lng - c],
      [h.lat + d, h.lng + c]
    );
  },
  // @method setLatLng(latLng: LatLng): this
  // Sets the position of a circle marker to a new location.
  setLatLng: function(c) {
    return this._latlng = L.latLng(c), this.redraw(), this.fire("move", { latlng: this._latlng });
  },
  // @method getLatLng(): LatLng
  // Returns the current geographical position of the circle marker
  getLatLng: function() {
    return this._latlng;
  },
  setStyle: L.Path.prototype.setStyle,
  _project: function() {
    var c = this._getLngRadius(), d = this._getLatRadius(), h = this._latlng, g = this._map.latLngToLayerPoint([h.lat, h.lng - c]), _ = this._map.latLngToLayerPoint([h.lat - d, h.lng]);
    this._point = this._map.latLngToLayerPoint(h), this._radiusX = Math.max(this._point.x - g.x, 1), this._radiusY = Math.max(_.y - this._point.y, 1), this._tilt = Math.PI * this._tiltDeg / 180, this._endPointParams = this._centerPointToEndPoint(), this._updateBounds();
  },
  _updateBounds: function() {
    var c = Math.sin(this._tilt), d = Math.cos(this._tilt), h = c * c, g = d * d, _ = this._radiusX * this._radiusX, C = this._radiusY * this._radiusY, v = Math.sqrt(_ * g + C * h), H = Math.sqrt(_ * h + C * g), m = this._clickTolerance(), G = [v + m, H + m];
    this._pxBounds = new L.Bounds(this._point.subtract(G), this._point.add(G));
  },
  _update: function() {
    this._map && this._updatePath();
  },
  _updatePath: function() {
    this._renderer._updateEllipse(this);
  },
  _getLatRadius: function() {
    return this._mRadiusY / 40075017 * 360;
  },
  _getLngRadius: function() {
    return this._mRadiusX / 40075017 * 360 / Math.cos(Math.PI / 180 * this._latlng.lat);
  },
  _centerPointToEndPoint: function() {
    var c = this._point, d = this._radiusX, h = this._radiusY, g = (this.options.startAngle + this.options.endAngle) * (Math.PI / 180), _ = this.options.startAngle * (Math.PI / 180), C = this.options.endAngle, v = this._tiltDeg * (Math.PI / 180), H = c.x + Math.cos(v) * d * Math.cos(_) + Math.sin(-v) * h * Math.sin(_), m = c.y + Math.sin(v) * d * Math.cos(_) + Math.cos(v) * h * Math.sin(_), G = c.x + Math.cos(v) * d * Math.cos(g) + Math.sin(-v) * h * Math.sin(g), W = c.y + Math.sin(v) * d * Math.cos(g) + Math.cos(v) * h * Math.sin(g), M = C > 180 ? 1 : 0, q = C > 0 ? 1 : 0;
    return {
      x0: H,
      y0: m,
      tilt: v,
      largeArc: M,
      sweep: q,
      x1: G,
      y1: W
    };
  },
  _empty: function() {
    return this._radiusX && this._radiusY && !this._renderer._bounds.intersects(this._pxBounds);
  },
  _containsPoint: function(c) {
    var d = Math.sin(this._tilt), h = Math.cos(this._tilt), g = c.x - this._point.x, _ = c.y - this._point.y, C = h * g + d * _, v = d * g - h * _;
    return C * C / (this._radiusX * this._radiusX) + v * v / (this._radiusY * this._radiusY) <= 1;
  }
});
L.ellipse = function(c, d, h, g) {
  return new L.Ellipse(c, d, h, g);
};
const ws = (c, d) => {
  if (c && d.default)
    return os("div", { style: { display: "none" } }, d.default());
}, xs = {
  name: "LEllipse",
  props: {
    ...Mn,
    radius: {
      type: [Object, Array],
      required: !0
    },
    tilt: {
      type: Number,
      default: 0
    }
  },
  setup(c, d) {
    const h = Pn({}), g = Pn(!1), _ = Kt("addLayer"), C = Kt(us), { options: v, methods: H } = ps(c, h, d);
    return es(async () => {
      const { SVG: m, Canvas: G, DomEvent: W, _renderer: M } = C ? hs.L : await import("./leaflet-src.esm-337e0d64.js");
      console.log(M), m.include({
        _updateEllipse: function(N) {
          N._point;
          const K = N._radiusX, S = N._radiusY, mt = N._tiltDeg, it = N._endPointParams, $t = "M" + it.x0 + "," + it.y0 + "A" + K + "," + S + "," + mt + "," + it.largeArc + "," + it.sweep + "," + it.x1 + "," + it.y1 + " z";
          this._setPath(N, $t);
        }
      }), G.include({
        _updateEllipse: function(N) {
          if (N._empty())
            return;
          const K = N._point, S = this._ctx, mt = N._radiusX, it = (N._radiusY || mt) / mt;
          this._drawnLayers[N._leaflet_id] = N, S.save(), S.translate(K.x, K.y), N._tilt !== 0 && S.rotate(N._tilt), it !== 1 && S.scale(1, it), S.beginPath(), S.arc(0, 0, mt, 0, Math.PI * 2), S.restore(), this._fillStroke(S, N);
        }
      }), h.value = ns(
        ys.ellipse(c.latLng, c.radius, c.tilt, v)
      );
      const q = as(d.attrs);
      W.on(h.value, q), rs(H, h.value, c), _({
        ...c,
        ...H,
        leafletObject: h.value
      }), g.value = !0;
    }), { ready: g };
  },
  render() {
    return ws(this.ready, this.$slots);
  }
};
export {
  xs as default
};
