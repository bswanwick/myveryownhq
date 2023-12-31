const fm = function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
      i.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
};
fm();
var Ei = { exports: {} },
  $ = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var yc = Object.getOwnPropertySymbols,
  dm = Object.prototype.hasOwnProperty,
  pm = Object.prototype.propertyIsEnumerable;
function gm(e) {
  if (e == null)
    throw new TypeError('Object.assign cannot be called with null or undefined');
  return Object(e);
}
function mm() {
  try {
    if (!Object.assign) return !1;
    var e = new String('abc');
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (s) {
      return t[s];
    });
    if (r.join('') !== '0123456789') return !1;
    var i = {};
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (s) {
        i[s] = s;
      }),
      Object.keys(Object.assign({}, i)).join('') === 'abcdefghijklmnopqrst'
    );
  } catch {
    return !1;
  }
}
var Cf = mm()
  ? Object.assign
  : function (e, t) {
      for (var n, r = gm(e), i, s = 1; s < arguments.length; s++) {
        n = Object(arguments[s]);
        for (var o in n) dm.call(n, o) && (r[o] = n[o]);
        if (yc) {
          i = yc(n);
          for (var l = 0; l < i.length; l++) pm.call(n, i[l]) && (r[i[l]] = n[i[l]]);
        }
      }
      return r;
    };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xa = Cf,
  Zn = 60103,
  Pf = 60106;
$.Fragment = 60107;
$.StrictMode = 60108;
$.Profiler = 60114;
var Af = 60109,
  Rf = 60110,
  Nf = 60112;
$.Suspense = 60113;
var Of = 60115,
  Lf = 60116;
if (typeof Symbol == 'function' && Symbol.for) {
  var Fe = Symbol.for;
  (Zn = Fe('react.element')),
    (Pf = Fe('react.portal')),
    ($.Fragment = Fe('react.fragment')),
    ($.StrictMode = Fe('react.strict_mode')),
    ($.Profiler = Fe('react.profiler')),
    (Af = Fe('react.provider')),
    (Rf = Fe('react.context')),
    (Nf = Fe('react.forward_ref')),
    ($.Suspense = Fe('react.suspense')),
    (Of = Fe('react.memo')),
    (Lf = Fe('react.lazy'));
}
var _c = typeof Symbol == 'function' && Symbol.iterator;
function vm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (_c && e[_c]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
function Si(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Df = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xf = {};
function er(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = xf), (this.updater = n || Df);
}
er.prototype.isReactComponent = {};
er.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null) throw Error(Si(85));
  this.updater.enqueueSetState(this, e, t, 'setState');
};
er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Mf() {}
Mf.prototype = er.prototype;
function Ma(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = xf), (this.updater = n || Df);
}
var $a = (Ma.prototype = new Mf());
$a.constructor = Ma;
xa($a, er.prototype);
$a.isPureReactComponent = !0;
var Ua = { current: null },
  $f = Object.prototype.hasOwnProperty,
  Uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ff(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = '' + t.key), t))
      $f.call(t, r) && !Uf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Zn, type: e, key: s, ref: o, props: i, _owner: Ua.current };
}
function ym(e, t) {
  return {
    $$typeof: Zn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fa(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zn;
}
function _m(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wc = /\/+/g;
function Go(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? _m('' + e.key)
    : t.toString(36);
}
function as(e, t, n, r, i) {
  var s = typeof e;
  (s === 'undefined' || s === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Zn:
          case Pf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + Go(o, 0) : r),
      Array.isArray(i)
        ? ((n = ''),
          e != null && (n = e.replace(wc, '$&/') + '/'),
          as(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (Fa(i) &&
            (i = ym(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ''
                  : ('' + i.key).replace(wc, '$&/') + '/') +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Array.isArray(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + Go(s, l);
      o += as(s, t, n, a, i);
    }
  else if (((a = vm(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Go(s, l++)), (o += as(s, t, n, a, i));
  else if (s === 'object')
    throw (
      ((t = '' + e),
      Error(
        Si(
          31,
          t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t,
        ),
      ))
    );
  return o;
}
function bi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    as(e, r, '', '', function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function wm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 && ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        },
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var jf = { current: null };
function ft() {
  var e = jf.current;
  if (e === null) throw Error(Si(321));
  return e;
}
var Em = {
  ReactCurrentDispatcher: jf,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: Ua,
  IsSomeRendererActing: { current: !1 },
  assign: xa,
};
$.Children = {
  map: bi,
  forEach: function (e, t, n) {
    bi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      bi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      bi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fa(e)) throw Error(Si(143));
    return e;
  },
};
$.Component = er;
$.PureComponent = Ma;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
$.cloneElement = function (e, t, n) {
  if (e == null) throw Error(Si(267, e));
  var r = xa({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Ua.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      $f.call(t, a) &&
        !Uf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Zn, type: e.type, key: i, ref: s, props: r, _owner: o };
};
$.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: Rf,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: Af, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = Ff;
$.createFactory = function (e) {
  var t = Ff.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: Nf, render: e };
};
$.isValidElement = Fa;
$.lazy = function (e) {
  return { $$typeof: Lf, _payload: { _status: -1, _result: e }, _init: wm };
};
$.memo = function (e, t) {
  return { $$typeof: Of, type: e, compare: t === void 0 ? null : t };
};
$.useCallback = function (e, t) {
  return ft().useCallback(e, t);
};
$.useContext = function (e, t) {
  return ft().useContext(e, t);
};
$.useDebugValue = function () {};
$.useEffect = function (e, t) {
  return ft().useEffect(e, t);
};
$.useImperativeHandle = function (e, t, n) {
  return ft().useImperativeHandle(e, t, n);
};
$.useLayoutEffect = function (e, t) {
  return ft().useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return ft().useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return ft().useReducer(e, t, n);
};
$.useRef = function (e) {
  return ft().useRef(e);
};
$.useState = function (e) {
  return ft().useState(e);
};
$.version = '17.0.2';
Ei.exports = $;
var Sm = Ei.exports,
  Bf = { exports: {} },
  Ue = {},
  Vf = { exports: {} },
  zf = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, r, i;
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  if (typeof window == 'undefined' || typeof MessageChannel != 'function') {
    var a = null,
      u = null,
      d = function () {
        if (a !== null)
          try {
            var S = e.unstable_now();
            a(!0, S), (a = null);
          } catch (O) {
            throw (setTimeout(d, 0), O);
          }
      };
    (t = function (S) {
      a !== null ? setTimeout(t, 0, S) : ((a = S), setTimeout(d, 0));
    }),
      (n = function (S, O) {
        u = setTimeout(S, O);
      }),
      (r = function () {
        clearTimeout(u);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (i = e.unstable_forceFrameRate = function () {});
  } else {
    var y = window.setTimeout,
      p = window.clearTimeout;
    if (typeof console != 'undefined') {
      var w = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != 'function' &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        typeof w != 'function' &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          );
    }
    var T = !1,
      k = null,
      f = -1,
      c = 5,
      h = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= h;
    }),
      (i = function () {}),
      (e.unstable_forceFrameRate = function (S) {
        0 > S || 125 < S
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (c = 0 < S ? Math.floor(1e3 / S) : 5);
      });
    var g = new MessageChannel(),
      m = g.port2;
    (g.port1.onmessage = function () {
      if (k !== null) {
        var S = e.unstable_now();
        h = S + c;
        try {
          k(!0, S) ? m.postMessage(null) : ((T = !1), (k = null));
        } catch (O) {
          throw (m.postMessage(null), O);
        }
      } else T = !1;
    }),
      (t = function (S) {
        (k = S), T || ((T = !0), m.postMessage(null));
      }),
      (n = function (S, O) {
        f = y(function () {
          S(e.unstable_now());
        }, O);
      }),
      (r = function () {
        p(f), (f = -1);
      });
  }
  function A(S, O) {
    var x = S.length;
    S.push(O);
    e: for (;;) {
      var G = (x - 1) >>> 1,
        re = S[G];
      if (re !== void 0 && 0 < N(re, O)) (S[G] = O), (S[x] = re), (x = G);
      else break e;
    }
  }
  function _(S) {
    return (S = S[0]), S === void 0 ? null : S;
  }
  function P(S) {
    var O = S[0];
    if (O !== void 0) {
      var x = S.pop();
      if (x !== O) {
        S[0] = x;
        e: for (var G = 0, re = S.length; G < re; ) {
          var Kt = 2 * (G + 1) - 1,
            qt = S[Kt],
            hr = Kt + 1,
            _n = S[hr];
          if (qt !== void 0 && 0 > N(qt, x))
            _n !== void 0 && 0 > N(_n, qt)
              ? ((S[G] = _n), (S[hr] = x), (G = hr))
              : ((S[G] = qt), (S[Kt] = x), (G = Kt));
          else if (_n !== void 0 && 0 > N(_n, x)) (S[G] = _n), (S[hr] = x), (G = hr);
          else break e;
        }
      }
      return O;
    }
    return null;
  }
  function N(S, O) {
    var x = S.sortIndex - O.sortIndex;
    return x !== 0 ? x : S.id - O.id;
  }
  var C = [],
    Q = [],
    zo = 1,
    Ae = null,
    ue = 3,
    Wi = !1,
    Gt = !1,
    cr = !1;
  function Ho(S) {
    for (var O = _(Q); O !== null; ) {
      if (O.callback === null) P(Q);
      else if (O.startTime <= S) P(Q), (O.sortIndex = O.expirationTime), A(C, O);
      else break;
      O = _(Q);
    }
  }
  function Wo(S) {
    if (((cr = !1), Ho(S), !Gt))
      if (_(C) !== null) (Gt = !0), t(bo);
      else {
        var O = _(Q);
        O !== null && n(Wo, O.startTime - S);
      }
  }
  function bo(S, O) {
    (Gt = !1), cr && ((cr = !1), r()), (Wi = !0);
    var x = ue;
    try {
      for (
        Ho(O), Ae = _(C);
        Ae !== null && (!(Ae.expirationTime > O) || (S && !e.unstable_shouldYield()));

      ) {
        var G = Ae.callback;
        if (typeof G == 'function') {
          (Ae.callback = null), (ue = Ae.priorityLevel);
          var re = G(Ae.expirationTime <= O);
          (O = e.unstable_now()),
            typeof re == 'function' ? (Ae.callback = re) : Ae === _(C) && P(C),
            Ho(O);
        } else P(C);
        Ae = _(C);
      }
      if (Ae !== null) var Kt = !0;
      else {
        var qt = _(Q);
        qt !== null && n(Wo, qt.startTime - O), (Kt = !1);
      }
      return Kt;
    } finally {
      (Ae = null), (ue = x), (Wi = !1);
    }
  }
  var hm = i;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      Gt || Wi || ((Gt = !0), t(bo));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return ue;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return _(C);
    }),
    (e.unstable_next = function (S) {
      switch (ue) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = ue;
      }
      var x = ue;
      ue = O;
      try {
        return S();
      } finally {
        ue = x;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = hm),
    (e.unstable_runWithPriority = function (S, O) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var x = ue;
      ue = S;
      try {
        return O();
      } finally {
        ue = x;
      }
    }),
    (e.unstable_scheduleCallback = function (S, O, x) {
      var G = e.unstable_now();
      switch (
        (typeof x == 'object' && x !== null
          ? ((x = x.delay), (x = typeof x == 'number' && 0 < x ? G + x : G))
          : (x = G),
        S)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = x + re),
        (S = {
          id: zo++,
          callback: O,
          priorityLevel: S,
          startTime: x,
          expirationTime: re,
          sortIndex: -1,
        }),
        x > G
          ? ((S.sortIndex = x),
            A(Q, S),
            _(C) === null && S === _(Q) && (cr ? r() : (cr = !0), n(Wo, x - G)))
          : ((S.sortIndex = re), A(C, S), Gt || Wi || ((Gt = !0), t(bo))),
        S
      );
    }),
    (e.unstable_wrapCallback = function (S) {
      var O = ue;
      return function () {
        var x = ue;
        ue = O;
        try {
          return S.apply(this, arguments);
        } finally {
          ue = x;
        }
      };
    });
})(zf);
Vf.exports = zf;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ao = Ei.exports,
  H = Cf,
  ee = Vf.exports;
function v(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
if (!ao) throw Error(v(227));
var Hf = new Set(),
  qr = {};
function gn(e, t) {
  Kn(e, t), Kn(e + 'Capture', t);
}
function Kn(e, t) {
  for (qr[e] = t, e = 0; e < t.length; e++) Hf.add(t[e]);
}
var at = !(
    typeof window == 'undefined' ||
    typeof window.document == 'undefined' ||
    typeof window.document.createElement == 'undefined'
  ),
  Im =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ec = Object.prototype.hasOwnProperty,
  Sc = {},
  Ic = {};
function Tm(e) {
  return Ec.call(Ic, e)
    ? !0
    : Ec.call(Sc, e)
    ? !1
    : Im.test(e)
    ? (Ic[e] = !0)
    : ((Sc[e] = !0), !1);
}
function km(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Cm(e, t, n, r) {
  if (t === null || typeof t == 'undefined' || km(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ae = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ae[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ae[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
  function (e) {
    ae[e] = new we(e, 2, !1, e, null, !1, !1);
  },
);
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ae[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ae[e] = new we(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ae[e] = new we(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ae[e] = new we(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ae[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ja = /[\-:]([a-z])/g;
function Ba(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ja, Ba);
    ae[t] = new we(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ja, Ba);
    ae[t] = new we(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ja, Ba);
  ae[t] = new we(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ae[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new we(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ae[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Va(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null,
    s =
      i !== null
        ? i.type === 0
        : r
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== 'o' && t[0] !== 'O') ||
            (t[1] !== 'n' && t[1] !== 'N')
          );
  s ||
    (Cm(t, n, i, r) && (n = null),
    r || i === null
      ? Tm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mn = ao.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pr = 60103,
  Qt = 60106,
  mt = 60107,
  za = 60108,
  xr = 60114,
  Ha = 60109,
  Wa = 60110,
  uo = 60112,
  Mr = 60113,
  Is = 60120,
  co = 60115,
  ba = 60116,
  Ga = 60121,
  Ka = 60128,
  Wf = 60129,
  qa = 60130,
  Rl = 60131;
if (typeof Symbol == 'function' && Symbol.for) {
  var Z = Symbol.for;
  (Pr = Z('react.element')),
    (Qt = Z('react.portal')),
    (mt = Z('react.fragment')),
    (za = Z('react.strict_mode')),
    (xr = Z('react.profiler')),
    (Ha = Z('react.provider')),
    (Wa = Z('react.context')),
    (uo = Z('react.forward_ref')),
    (Mr = Z('react.suspense')),
    (Is = Z('react.suspense_list')),
    (co = Z('react.memo')),
    (ba = Z('react.lazy')),
    (Ga = Z('react.block')),
    Z('react.scope'),
    (Ka = Z('react.opaque.id')),
    (Wf = Z('react.debug_trace_mode')),
    (qa = Z('react.offscreen')),
    (Rl = Z('react.legacy_hidden'));
}
var Tc = typeof Symbol == 'function' && Symbol.iterator;
function fr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Tc && e[Tc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Ko;
function Ar(e) {
  if (Ko === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ko = (t && t[1]) || '';
    }
  return (
    `
` +
    Ko +
    e
  );
}
var qo = !1;
function Gi(e, t) {
  if (!e || qo) return '';
  qo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var i = a.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l]))
                return (
                  `
` + i[o].replace(' at new ', ' at ')
                );
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (qo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ar(e) : '';
}
function Pm(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type);
    case 16:
      return Ar('Lazy');
    case 13:
      return Ar('Suspense');
    case 19:
      return Ar('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Gi(e.type, !1)), e;
    case 11:
      return (e = Gi(e.type.render, !1)), e;
    case 22:
      return (e = Gi(e.type._render, !1)), e;
    case 1:
      return (e = Gi(e.type, !0)), e;
    default:
      return '';
  }
}
function Ln(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case mt:
      return 'Fragment';
    case Qt:
      return 'Portal';
    case xr:
      return 'Profiler';
    case za:
      return 'StrictMode';
    case Mr:
      return 'Suspense';
    case Is:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Wa:
        return (e.displayName || 'Context') + '.Consumer';
      case Ha:
        return (e._context.displayName || 'Context') + '.Provider';
      case uo:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ''),
          e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        );
      case co:
        return Ln(e.type);
      case Ga:
        return Ln(e._render);
      case ba:
        (t = e._payload), (e = e._init);
        try {
          return Ln(e(t));
        } catch {}
    }
  return null;
}
function Mt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e;
    default:
      return '';
  }
}
function bf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  );
}
function Am(e) {
  var t = bf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != 'undefined' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = '' + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ki(e) {
  e._valueTracker || (e._valueTracker = Am(e));
}
function Gf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = bf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ts(e) {
  if (
    ((e = e || (typeof document != 'undefined' ? document : void 0)),
    typeof e == 'undefined')
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Nl(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function kc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Kf(e, t) {
  (t = t.checked), t != null && Va(e, 'checked', t, !1);
}
function Ol(e, t) {
  Kf(e, t);
  var n = Mt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Ll(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ll(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null)))
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Ll(e, t, n) {
  (t !== 'number' || Ts(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
function Rm(e) {
  var t = '';
  return (
    ao.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function Dl(e, t) {
  return (e = H({ children: void 0 }, t)), (t = Rm(t.children)) && (e.children = t), e;
}
function Dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Mt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function xl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Pc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(v(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(v(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function qf(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ac(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
var Ml = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg',
};
function Xf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function $l(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Xf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var qi,
  Yf = (function (e) {
    return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== Ml.svg || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        qi = qi || document.createElement('div'),
          qi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = qi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $r = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Nm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys($r).forEach(function (e) {
  Nm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($r[t] = $r[e]);
  });
});
function Qf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || ($r.hasOwnProperty(e) && $r[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Jf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Qf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Om = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ul(e, t) {
  if (t) {
    if (Om[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(v(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(v(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == 'object' &&
          '__html' in t.dangerouslySetInnerHTML
        )
      )
        throw Error(v(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(v(62));
  }
}
function Fl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
function Xa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jl = null,
  xn = null,
  Mn = null;
function Rc(e) {
  if ((e = Ti(e))) {
    if (typeof jl != 'function') throw Error(v(280));
    var t = e.stateNode;
    t && ((t = vo(t)), jl(e.stateNode, e.type, t));
  }
}
function Zf(e) {
  xn ? (Mn ? Mn.push(e) : (Mn = [e])) : (xn = e);
}
function ed() {
  if (xn) {
    var e = xn,
      t = Mn;
    if (((Mn = xn = null), Rc(e), t)) for (e = 0; e < t.length; e++) Rc(t[e]);
  }
}
function Ya(e, t) {
  return e(t);
}
function td(e, t, n, r, i) {
  return e(t, n, r, i);
}
function Qa() {}
var nd = Ya,
  Jt = !1,
  Xo = !1;
function Ja() {
  (xn !== null || Mn !== null) && (Qa(), ed());
}
function Lm(e, t, n) {
  if (Xo) return e(t, n);
  Xo = !0;
  try {
    return nd(e, t, n);
  } finally {
    (Xo = !1), Ja();
  }
}
function Yr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(v(231, t, typeof n));
  return n;
}
var Bl = !1;
if (at)
  try {
    var dr = {};
    Object.defineProperty(dr, 'passive', {
      get: function () {
        Bl = !0;
      },
    }),
      window.addEventListener('test', dr, dr),
      window.removeEventListener('test', dr, dr);
  } catch {
    Bl = !1;
  }
function Dm(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Ur = !1,
  ks = null,
  Cs = !1,
  Vl = null,
  xm = {
    onError: function (e) {
      (Ur = !0), (ks = e);
    },
  };
function Mm(e, t, n, r, i, s, o, l, a) {
  (Ur = !1), (ks = null), Dm.apply(xm, arguments);
}
function $m(e, t, n, r, i, s, o, l, a) {
  if ((Mm.apply(this, arguments), Ur)) {
    if (Ur) {
      var u = ks;
      (Ur = !1), (ks = null);
    } else throw Error(v(198));
    Cs || ((Cs = !0), (Vl = u));
  }
}
function vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Nc(e) {
  if (vn(e) !== e) throw Error(v(188));
}
function Um(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(v(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Nc(i), e;
        if (s === r) return Nc(i), t;
        s = s.sibling;
      }
      throw Error(v(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(v(189));
      }
    }
    if (n.alternate !== r) throw Error(v(190));
  }
  if (n.tag !== 3) throw Error(v(188));
  return n.stateNode.current === n ? e : t;
}
function id(e) {
  if (((e = Um(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function Oc(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var sd,
  Za,
  od,
  ld,
  zl = !1,
  ze = [],
  Tt = null,
  kt = null,
  Ct = null,
  Qr = new Map(),
  Jr = new Map(),
  pr = [],
  Lc =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Hl(e, t, n, r, i) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: i,
    targetContainers: [r],
  };
}
function Dc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Tt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      kt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Ct = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Qr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Jr.delete(t.pointerId);
  }
}
function gr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = Hl(t, n, r, i, s)), t !== null && ((t = Ti(t)), t !== null && Za(t)), e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Fm(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Tt = gr(Tt, e, t, n, r, i)), !0;
    case 'dragenter':
      return (kt = gr(kt, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Ct = gr(Ct, e, t, n, r, i)), !0;
    case 'pointerover':
      var s = i.pointerId;
      return Qr.set(s, gr(Qr.get(s) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (s = i.pointerId), Jr.set(s, gr(Jr.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function jm(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rd(n)), t !== null)) {
          (e.blockedOn = t),
            ld(e.lanePriority, function () {
              ee.unstable_runWithPriority(e.priority, function () {
                od(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function us(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ru(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return (t = Ti(n)), t !== null && Za(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xc(e, t, n) {
  us(e) && n.delete(t);
}
function Bm() {
  for (zl = !1; 0 < ze.length; ) {
    var e = ze[0];
    if (e.blockedOn !== null) {
      (e = Ti(e.blockedOn)), e !== null && sd(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ru(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && ze.shift();
  }
  Tt !== null && us(Tt) && (Tt = null),
    kt !== null && us(kt) && (kt = null),
    Ct !== null && us(Ct) && (Ct = null),
    Qr.forEach(xc),
    Jr.forEach(xc);
}
function mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zl || ((zl = !0), ee.unstable_scheduleCallback(ee.unstable_NormalPriority, Bm)));
}
function ad(e) {
  function t(i) {
    return mr(i, e);
  }
  if (0 < ze.length) {
    mr(ze[0], e);
    for (var n = 1; n < ze.length; n++) {
      var r = ze[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Tt !== null && mr(Tt, e),
      kt !== null && mr(kt, e),
      Ct !== null && mr(Ct, e),
      Qr.forEach(t),
      Jr.forEach(t),
      n = 0;
    n < pr.length;
    n++
  )
    (r = pr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pr.length && ((n = pr[0]), n.blockedOn === null); )
    jm(n), n.blockedOn === null && pr.shift();
}
function Xi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Tn = {
    animationend: Xi('Animation', 'AnimationEnd'),
    animationiteration: Xi('Animation', 'AnimationIteration'),
    animationstart: Xi('Animation', 'AnimationStart'),
    transitionend: Xi('Transition', 'TransitionEnd'),
  },
  Yo = {},
  ud = {};
at &&
  ((ud = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  'TransitionEvent' in window || delete Tn.transitionend.transition);
function ho(e) {
  if (Yo[e]) return Yo[e];
  if (!Tn[e]) return e;
  var t = Tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ud) return (Yo[e] = t[n]);
  return e;
}
var cd = ho('animationend'),
  hd = ho('animationiteration'),
  fd = ho('animationstart'),
  dd = ho('transitionend'),
  pd = new Map(),
  eu = new Map(),
  Vm = [
    'abort',
    'abort',
    cd,
    'animationEnd',
    hd,
    'animationIteration',
    fd,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    dd,
    'transitionEnd',
    'waiting',
    'waiting',
  ];
function tu(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      i = e[n + 1];
    (i = 'on' + (i[0].toUpperCase() + i.slice(1))),
      eu.set(r, t),
      pd.set(r, i),
      gn(i, [r]);
  }
}
var zm = ee.unstable_now;
zm();
var j = 8;
function Sn(e) {
  if ((1 & e) !== 0) return (j = 15), 1;
  if ((2 & e) !== 0) return (j = 14), 2;
  if ((4 & e) !== 0) return (j = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((j = 12), t)
    : (e & 32) !== 0
    ? ((j = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((j = 10), t)
        : (e & 256) !== 0
        ? ((j = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((j = 8), t)
            : (e & 4096) !== 0
            ? ((j = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((j = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((j = 5), t)
                    : e & 67108864
                    ? ((j = 4), 67108864)
                    : (e & 134217728) !== 0
                    ? ((j = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((j = 2), t)
                        : (1073741824 & e) !== 0
                        ? ((j = 1), 1073741824)
                        : ((j = 8), e))))));
}
function Hm(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Wm(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(v(358, e));
  }
}
function Zr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return (j = 0);
  var r = 0,
    i = 0,
    s = e.expiredLanes,
    o = e.suspendedLanes,
    l = e.pingedLanes;
  if (s !== 0) (r = s), (i = j = 15);
  else if (((s = n & 134217727), s !== 0)) {
    var a = s & ~o;
    a !== 0 ? ((r = Sn(a)), (i = j)) : ((l &= s), l !== 0 && ((r = Sn(l)), (i = j)));
  } else
    (s = n & ~o), s !== 0 ? ((r = Sn(s)), (i = j)) : l !== 0 && ((r = Sn(l)), (i = j));
  if (r === 0) return 0;
  if (
    ((r = 31 - $t(r)),
    (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
    t !== 0 && t !== r && (t & o) === 0)
  ) {
    if ((Sn(t), i <= j)) return t;
    j = i;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $t(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function gd(e) {
  return (
    (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ps(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = In(24 & ~t)), e === 0 ? Ps(10, t) : e;
    case 10:
      return (e = In(192 & ~t)), e === 0 ? Ps(8, t) : e;
    case 8:
      return (
        (e = In(3584 & ~t)), e === 0 && ((e = In(4186112 & ~t)), e === 0 && (e = 512)), e
      );
    case 2:
      return (t = In(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(v(358, e));
}
function In(e) {
  return e & -e;
}
function Qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fo(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
var $t = Math.clz32 ? Math.clz32 : Km,
  bm = Math.log,
  Gm = Math.LN2;
function Km(e) {
  return e === 0 ? 32 : (31 - ((bm(e) / Gm) | 0)) | 0;
}
var qm = ee.unstable_UserBlockingPriority,
  Xm = ee.unstable_runWithPriority,
  cs = !0;
function Ym(e, t, n, r) {
  Jt || Qa();
  var i = nu,
    s = Jt;
  Jt = !0;
  try {
    td(i, e, t, n, r);
  } finally {
    (Jt = s) || Ja();
  }
}
function Qm(e, t, n, r) {
  Xm(qm, nu.bind(null, e, t, n, r));
}
function nu(e, t, n, r) {
  if (cs) {
    var i;
    if ((i = (t & 4) === 0) && 0 < ze.length && -1 < Lc.indexOf(e))
      (e = Hl(null, e, t, n, r)), ze.push(e);
    else {
      var s = ru(e, t, n, r);
      if (s === null) i && Dc(e, r);
      else {
        if (i) {
          if (-1 < Lc.indexOf(e)) {
            (e = Hl(s, e, t, n, r)), ze.push(e);
            return;
          }
          if (Fm(s, e, t, n, r)) return;
          Dc(e, r);
        }
        Ad(e, t, r, null, n);
      }
    }
  }
}
function ru(e, t, n, r) {
  var i = Xa(r);
  if (((i = Zt(i)), i !== null)) {
    var s = vn(i);
    if (s === null) i = null;
    else {
      var o = s.tag;
      if (o === 13) {
        if (((i = rd(s)), i !== null)) return i;
        i = null;
      } else if (o === 3) {
        if (s.stateNode.hydrate) return s.tag === 3 ? s.stateNode.containerInfo : null;
        i = null;
      } else s !== i && (i = null);
    }
  }
  return Ad(e, t, r, i, n), null;
}
var Et = null,
  iu = null,
  hs = null;
function md() {
  if (hs) return hs;
  var e,
    t = iu,
    n = t.length,
    r,
    i = 'value' in Et ? Et.value : Et.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (hs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fs(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yi() {
  return !0;
}
function Mc() {
  return !1;
}
function Pe(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Yi
        : Mc),
      (this.isPropagationStopped = Mc),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Yi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yi));
      },
      persist: function () {},
      isPersistent: Yi,
    }),
    t
  );
}
var tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  su = Pe(tr),
  Ii = H({}, tr, { view: 0, detail: 0 }),
  Jm = Pe(Ii),
  Jo,
  Zo,
  vr,
  po = H({}, Ii, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ou,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== vr &&
            (vr && e.type === 'mousemove'
              ? ((Jo = e.screenX - vr.screenX), (Zo = e.screenY - vr.screenY))
              : (Zo = Jo = 0),
            (vr = e)),
          Jo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Zo;
    },
  }),
  $c = Pe(po),
  Zm = H({}, po, { dataTransfer: 0 }),
  ev = Pe(Zm),
  tv = H({}, Ii, { relatedTarget: 0 }),
  el = Pe(tv),
  nv = H({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rv = Pe(nv),
  iv = H({}, tr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sv = Pe(iv),
  ov = H({}, tr, { data: 0 }),
  Uc = Pe(ov),
  lv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  av = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  uv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function cv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = uv[e]) ? !!t[e] : !1;
}
function ou() {
  return cv;
}
var hv = H({}, Ii, {
    key: function (e) {
      if (e.key) {
        var t = lv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = fs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? av[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ou,
    charCode: function (e) {
      return e.type === 'keypress' ? fs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? fs(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  fv = Pe(hv),
  dv = H({}, po, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fc = Pe(dv),
  pv = H({}, Ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ou,
  }),
  gv = Pe(pv),
  mv = H({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vv = Pe(mv),
  yv = H({}, po, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _v = Pe(yv),
  wv = [9, 13, 27, 32],
  lu = at && 'CompositionEvent' in window,
  Fr = null;
at && 'documentMode' in document && (Fr = document.documentMode);
var Ev = at && 'TextEvent' in window && !Fr,
  vd = at && (!lu || (Fr && 8 < Fr && 11 >= Fr)),
  jc = String.fromCharCode(32),
  Bc = !1;
function yd(e, t) {
  switch (e) {
    case 'keyup':
      return wv.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function _d(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var kn = !1;
function Sv(e, t) {
  switch (e) {
    case 'compositionend':
      return _d(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Bc = !0), jc);
    case 'textInput':
      return (e = t.data), e === jc && Bc ? null : e;
    default:
      return null;
  }
}
function Iv(e, t) {
  if (kn)
    return e === 'compositionend' || (!lu && yd(e, t))
      ? ((e = md()), (hs = iu = Et = null), (kn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return vd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Tv = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Tv[e.type] : t === 'textarea';
}
function wd(e, t, n, r) {
  Zf(r),
    (t = As(t, 'onChange')),
    0 < t.length &&
      ((n = new su('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jr = null,
  ei = null;
function kv(e) {
  kd(e, 0);
}
function go(e) {
  var t = Pn(e);
  if (Gf(t)) return e;
}
function Cv(e, t) {
  if (e === 'change') return t;
}
var Ed = !1;
if (at) {
  var tl;
  if (at) {
    var nl = 'oninput' in document;
    if (!nl) {
      var zc = document.createElement('div');
      zc.setAttribute('oninput', 'return;'), (nl = typeof zc.oninput == 'function');
    }
    tl = nl;
  } else tl = !1;
  Ed = tl && (!document.documentMode || 9 < document.documentMode);
}
function Hc() {
  jr && (jr.detachEvent('onpropertychange', Sd), (ei = jr = null));
}
function Sd(e) {
  if (e.propertyName === 'value' && go(ei)) {
    var t = [];
    if ((wd(t, ei, e, Xa(e)), (e = kv), Jt)) e(t);
    else {
      Jt = !0;
      try {
        Ya(e, t);
      } finally {
        (Jt = !1), Ja();
      }
    }
  }
}
function Pv(e, t, n) {
  e === 'focusin'
    ? (Hc(), (jr = t), (ei = n), jr.attachEvent('onpropertychange', Sd))
    : e === 'focusout' && Hc();
}
function Av(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return go(ei);
}
function Rv(e, t) {
  if (e === 'click') return go(t);
}
function Nv(e, t) {
  if (e === 'input' || e === 'change') return go(t);
}
function Ov(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ne = typeof Object.is == 'function' ? Object.is : Ov,
  Lv = Object.prototype.hasOwnProperty;
function ti(e, t) {
  if (Ne(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++)
    if (!Lv.call(t, n[r]) || !Ne(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function Wc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function bc(e, t) {
  var n = Wc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Wc(n);
  }
}
function Id(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Id(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gc() {
  for (var e = window, t = Ts(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ts(e.document);
  }
  return t;
}
function Wl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
var Dv = at && 'documentMode' in document && 11 >= document.documentMode,
  Cn = null,
  bl = null,
  Br = null,
  Gl = !1;
function Kc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gl ||
    Cn == null ||
    Cn !== Ts(r) ||
    ((r = Cn),
    'selectionStart' in r && Wl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Br && ti(Br, r)) ||
      ((Br = r),
      (r = As(bl, 'onSelect')),
      0 < r.length &&
        ((t = new su('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Cn))));
}
tu(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
);
tu(
  'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
    ' ',
  ),
  1,
);
tu(Vm, 2);
for (
  var qc =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' ',
      ),
    rl = 0;
  rl < qc.length;
  rl++
)
  eu.set(qc[rl], 0);
Kn('onMouseEnter', ['mouseout', 'mouseover']);
Kn('onMouseLeave', ['mouseout', 'mouseover']);
Kn('onPointerEnter', ['pointerout', 'pointerover']);
Kn('onPointerLeave', ['pointerout', 'pointerover']);
gn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' '),
);
gn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
gn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
gn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
gn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
gn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Rr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Td = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Rr));
function Xc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), $m(r, t, void 0, e), (e.currentTarget = null);
}
function kd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          Xc(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Xc(i, l, u), (s = a);
        }
    }
  }
  if (Cs) throw ((e = Vl), (Cs = !1), (Vl = null), e);
}
function B(e, t) {
  var n = Nd(t),
    r = e + '__bubble';
  n.has(r) || (Pd(t, e, 2, !1), n.add(r));
}
var Yc = '_reactListening' + Math.random().toString(36).slice(2);
function Cd(e) {
  e[Yc] ||
    ((e[Yc] = !0),
    Hf.forEach(function (t) {
      Td.has(t) || Qc(t, !1, e, null), Qc(t, !0, e, null);
    }));
}
function Qc(e, t, n, r) {
  var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    s = n;
  if (
    (e === 'selectionchange' && n.nodeType !== 9 && (s = n.ownerDocument),
    r !== null && !t && Td.has(e))
  ) {
    if (e !== 'scroll') return;
    (i |= 2), (s = r);
  }
  var o = Nd(s),
    l = e + '__' + (t ? 'capture' : 'bubble');
  o.has(l) || (t && (i |= 4), Pd(s, e, i, t), o.add(l));
}
function Pd(e, t, n, r) {
  var i = eu.get(t);
  switch (i === void 0 ? 2 : i) {
    case 0:
      i = Ym;
      break;
    case 1:
      i = Qm;
      break;
    default:
      i = nu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Bl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ad(e, t, n, r, i) {
  var s = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Zt(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Lm(function () {
    var u = s,
      d = Xa(n),
      y = [];
    e: {
      var p = pd.get(e);
      if (p !== void 0) {
        var w = su,
          T = e;
        switch (e) {
          case 'keypress':
            if (fs(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = fv;
            break;
          case 'focusin':
            (T = 'focus'), (w = el);
            break;
          case 'focusout':
            (T = 'blur'), (w = el);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = el;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = $c;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = ev;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = gv;
            break;
          case cd:
          case hd:
          case fd:
            w = rv;
            break;
          case dd:
            w = vv;
            break;
          case 'scroll':
            w = Jm;
            break;
          case 'wheel':
            w = _v;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = sv;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Fc;
        }
        var k = (t & 4) !== 0,
          f = !k && e === 'scroll',
          c = k ? (p !== null ? p + 'Capture' : null) : p;
        k = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var m = g.stateNode;
          if (
            (g.tag === 5 &&
              m !== null &&
              ((g = m), c !== null && ((m = Yr(h, c)), m != null && k.push(ni(h, m, g)))),
            f)
          )
            break;
          h = h.return;
        }
        0 < k.length &&
          ((p = new w(p, T, null, n, d)), y.push({ event: p, listeners: k }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          p &&
            (t & 16) === 0 &&
            (T = n.relatedTarget || n.fromElement) &&
            (Zt(T) || T[nr]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((T = n.relatedTarget || n.toElement),
              (w = u),
              (T = T ? Zt(T) : null),
              T !== null &&
                ((f = vn(T)), T !== f || (T.tag !== 5 && T.tag !== 6)) &&
                (T = null))
            : ((w = null), (T = u)),
          w !== T)
        ) {
          if (
            ((k = $c),
            (m = 'onMouseLeave'),
            (c = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = Fc), (m = 'onPointerLeave'), (c = 'onPointerEnter'), (h = 'pointer')),
            (f = w == null ? p : Pn(w)),
            (g = T == null ? p : Pn(T)),
            (p = new k(m, h + 'leave', w, n, d)),
            (p.target = f),
            (p.relatedTarget = g),
            (m = null),
            Zt(d) === u &&
              ((k = new k(c, h + 'enter', T, n, d)),
              (k.target = g),
              (k.relatedTarget = f),
              (m = k)),
            (f = m),
            w && T)
          )
            t: {
              for (k = w, c = T, h = 0, g = k; g; g = wn(g)) h++;
              for (g = 0, m = c; m; m = wn(m)) g++;
              for (; 0 < h - g; ) (k = wn(k)), h--;
              for (; 0 < g - h; ) (c = wn(c)), g--;
              for (; h--; ) {
                if (k === c || (c !== null && k === c.alternate)) break t;
                (k = wn(k)), (c = wn(c));
              }
              k = null;
            }
          else k = null;
          w !== null && Jc(y, p, w, k, !1),
            T !== null && f !== null && Jc(y, f, T, k, !0);
        }
      }
      e: {
        if (
          ((p = u ? Pn(u) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && p.type === 'file'))
        )
          var A = Cv;
        else if (Vc(p))
          if (Ed) A = Nv;
          else {
            A = Av;
            var _ = Pv;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (A = Rv);
        if (A && (A = A(e, u))) {
          wd(y, A, n, d);
          break e;
        }
        _ && _(e, p, u),
          e === 'focusout' &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === 'number' &&
            Ll(p, 'number', p.value);
      }
      switch (((_ = u ? Pn(u) : window), e)) {
        case 'focusin':
          (Vc(_) || _.contentEditable === 'true') && ((Cn = _), (bl = u), (Br = null));
          break;
        case 'focusout':
          Br = bl = Cn = null;
          break;
        case 'mousedown':
          Gl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Gl = !1), Kc(y, n, d);
          break;
        case 'selectionchange':
          if (Dv) break;
        case 'keydown':
        case 'keyup':
          Kc(y, n, d);
      }
      var P;
      if (lu)
        e: {
          switch (e) {
            case 'compositionstart':
              var N = 'onCompositionStart';
              break e;
            case 'compositionend':
              N = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              N = 'onCompositionUpdate';
              break e;
          }
          N = void 0;
        }
      else
        kn
          ? yd(e, n) && (N = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart');
      N &&
        (vd &&
          n.locale !== 'ko' &&
          (kn || N !== 'onCompositionStart'
            ? N === 'onCompositionEnd' && kn && (P = md())
            : ((Et = d), (iu = 'value' in Et ? Et.value : Et.textContent), (kn = !0))),
        (_ = As(u, N)),
        0 < _.length &&
          ((N = new Uc(N, e, null, n, d)),
          y.push({ event: N, listeners: _ }),
          P ? (N.data = P) : ((P = _d(n)), P !== null && (N.data = P)))),
        (P = Ev ? Sv(e, n) : Iv(e, n)) &&
          ((u = As(u, 'onBeforeInput')),
          0 < u.length &&
            ((d = new Uc('onBeforeInput', 'beforeinput', null, n, d)),
            y.push({ event: d, listeners: u }),
            (d.data = P)));
    }
    kd(y, t);
  });
}
function ni(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function As(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Yr(e, n)),
      s != null && r.unshift(ni(e, s, i)),
      (s = Yr(e, t)),
      s != null && r.push(ni(e, s, i))),
      (e = e.return);
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Yr(n, s)), a != null && o.unshift(ni(n, a, l)))
        : i || ((a = Yr(n, s)), a != null && o.push(ni(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
function Rs() {}
var il = null,
  sl = null;
function Rd(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus;
  }
  return !1;
}
function Kl(e, t) {
  return (
    e === 'textarea' ||
    e === 'option' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zc = typeof setTimeout == 'function' ? setTimeout : void 0,
  xv = typeof clearTimeout == 'function' ? clearTimeout : void 0;
function au(e) {
  e.nodeType === 1
    ? (e.textContent = '')
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''));
}
function $n(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function eh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ol = 0;
function Mv(e) {
  return { $$typeof: Ka, toString: e, valueOf: e };
}
var mo = Math.random().toString(36).slice(2),
  St = '__reactFiber$' + mo,
  Ns = '__reactProps$' + mo,
  nr = '__reactContainer$' + mo,
  th = '__reactEvents$' + mo;
function Zt(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nr] || n[St])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = eh(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = eh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ti(e) {
  return (
    (e = e[St] || e[nr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(v(33));
}
function vo(e) {
  return e[Ns] || null;
}
function Nd(e) {
  var t = e[th];
  return t === void 0 && (t = e[th] = new Set()), t;
}
var ql = [],
  An = -1;
function Vt(e) {
  return { current: e };
}
function z(e) {
  0 > An || ((e.current = ql[An]), (ql[An] = null), An--);
}
function b(e, t) {
  An++, (ql[An] = e.current), (e.current = t);
}
var Ut = {},
  me = Vt(Ut),
  Ie = Vt(!1),
  un = Ut;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Os() {
  z(Ie), z(me);
}
function nh(e, t, n) {
  if (me.current !== Ut) throw Error(v(168));
  b(me, t), b(Ie, n);
}
function Od(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(v(108, Ln(t) || 'Unknown', i));
  return H({}, n, r);
}
function ds(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ut),
    (un = me.current),
    b(me, e),
    b(Ie, Ie.current),
    !0
  );
}
function rh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(v(169));
  n
    ? ((e = Od(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      z(Ie),
      z(me),
      b(me, e))
    : z(Ie),
    b(Ie, n);
}
var uu = null,
  on = null,
  $v = ee.unstable_runWithPriority,
  cu = ee.unstable_scheduleCallback,
  Xl = ee.unstable_cancelCallback,
  Uv = ee.unstable_shouldYield,
  ih = ee.unstable_requestPaint,
  Yl = ee.unstable_now,
  Fv = ee.unstable_getCurrentPriorityLevel,
  yo = ee.unstable_ImmediatePriority,
  Ld = ee.unstable_UserBlockingPriority,
  Dd = ee.unstable_NormalPriority,
  xd = ee.unstable_LowPriority,
  Md = ee.unstable_IdlePriority,
  ll = {},
  jv = ih !== void 0 ? ih : function () {},
  et = null,
  ps = null,
  al = !1,
  sh = Yl(),
  fe =
    1e4 > sh
      ? Yl
      : function () {
          return Yl() - sh;
        };
function Xn() {
  switch (Fv()) {
    case yo:
      return 99;
    case Ld:
      return 98;
    case Dd:
      return 97;
    case xd:
      return 96;
    case Md:
      return 95;
    default:
      throw Error(v(332));
  }
}
function $d(e) {
  switch (e) {
    case 99:
      return yo;
    case 98:
      return Ld;
    case 97:
      return Dd;
    case 96:
      return xd;
    case 95:
      return Md;
    default:
      throw Error(v(332));
  }
}
function cn(e, t) {
  return (e = $d(e)), $v(e, t);
}
function ri(e, t, n) {
  return (e = $d(e)), cu(e, t, n);
}
function Je() {
  if (ps !== null) {
    var e = ps;
    (ps = null), Xl(e);
  }
  Ud();
}
function Ud() {
  if (!al && et !== null) {
    al = !0;
    var e = 0;
    try {
      var t = et;
      cn(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (et = null);
    } catch (n) {
      throw (et !== null && (et = et.slice(e + 1)), cu(yo, Je), n);
    } finally {
      al = !1;
    }
  }
}
var Bv = mn.ReactCurrentBatchConfig;
function je(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ls = Vt(null),
  Ds = null,
  Rn = null,
  xs = null;
function hu() {
  xs = Rn = Ds = null;
}
function fu(e) {
  var t = Ls.current;
  z(Ls), (e.type._context._currentValue = t);
}
function Fd(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function Un(e, t) {
  (Ds = e),
    (xs = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Be = !0), (e.firstContext = null));
}
function xe(e, t) {
  if (xs !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != 'number' || t === 1073741823) && ((xs = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      Rn === null)
    ) {
      if (Ds === null) throw Error(v(308));
      (Rn = t), (Ds.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else Rn = Rn.next = t;
  return e._currentValue;
}
var gt = !1;
function du(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function jd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Pt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function At(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
}
function oh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ii(e, t, n, r) {
  var i = e.updateQueue;
  gt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var d = e.alternate;
    if (d !== null) {
      d = d.updateQueue;
      var y = d.lastBaseUpdate;
      y !== o &&
        (y === null ? (d.firstBaseUpdate = u) : (y.next = u), (d.lastBaseUpdate = a));
    }
  }
  if (s !== null) {
    (y = i.baseState), (o = 0), (d = u = a = null);
    do {
      l = s.lane;
      var p = s.eventTime;
      if ((r & l) === l) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            T = s;
          switch (((l = t), (p = n), T.tag)) {
            case 1:
              if (((w = T.payload), typeof w == 'function')) {
                y = w.call(p, y, l);
                break e;
              }
              y = w;
              break e;
            case 3:
              w.flags = (w.flags & -4097) | 64;
            case 0:
              if (
                ((w = T.payload),
                (l = typeof w == 'function' ? w.call(p, y, l) : w),
                l == null)
              )
                break e;
              y = H({}, y, l);
              break e;
            case 2:
              gt = !0;
          }
        }
        s.callback !== null &&
          ((e.flags |= 32), (l = i.effects), l === null ? (i.effects = [s]) : l.push(s));
      } else
        (p = {
          eventTime: p,
          lane: l,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = p), (a = y)) : (d = d.next = p),
          (o |= l);
      if (((s = s.next), s === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (s = l.next), (l.next = null), (i.lastBaseUpdate = l), (i.shared.pending = null);
      }
    } while (1);
    d === null && (a = y),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (Ci |= o),
      (e.lanes = o),
      (e.memoizedState = y);
  }
}
function lh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(v(191, i));
        i.call(r);
      }
    }
}
var Bd = new ao.Component().refs;
function Ms(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      i = Rt(e),
      s = Pt(r, i);
    (s.payload = t), n != null && (s.callback = n), At(e, s), Nt(e, i, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      i = Rt(e),
      s = Pt(r, i);
    (s.tag = 1), (s.payload = t), n != null && (s.callback = n), At(e, s), Nt(e, i, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = Rt(e),
      i = Pt(n, r);
    (i.tag = 2), t != null && (i.callback = t), At(e, i), Nt(e, r, n);
  },
};
function ah(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ti(n, r) || !ti(i, s)
      : !0
  );
}
function Vd(e, t, n) {
  var r = !1,
    i = Ut,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = xe(s))
      : ((i = Te(t) ? un : me.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? qn(e, i) : Ut)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _o),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function uh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function Ql(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Bd), du(e);
  var s = t.contextType;
  typeof s == 'object' && s !== null
    ? (i.context = xe(s))
    : ((s = Te(t) ? un : me.current), (i.context = qn(e, s))),
    ii(e, n, i, r),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (Ms(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && _o.enqueueReplaceState(i, i.state, null),
      ii(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4);
}
var Qi = Array.isArray;
function yr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(v(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(v(147, e));
      var i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var o = r.refs;
            o === Bd && (o = r.refs = {}), s === null ? delete o[i] : (o[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(v(284));
    if (!n._owner) throw Error(v(290, e));
  }
  return e;
}
function Ji(e, t) {
  if (e.type !== 'textarea')
    throw Error(
      v(
        31,
        Object.prototype.toString.call(t) === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : t,
      ),
    );
}
function zd(e) {
  function t(f, c) {
    if (e) {
      var h = f.lastEffect;
      h !== null
        ? ((h.nextEffect = c), (f.lastEffect = c))
        : (f.firstEffect = f.lastEffect = c),
        (c.nextEffect = null),
        (c.flags = 8);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function i(f, c) {
    return (f = jt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function s(f, c, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((f.flags = 2), c) : h)
            : ((f.flags = 2), c))
        : c
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags = 2), f;
  }
  function l(f, c, h, g) {
    return c === null || c.tag !== 6
      ? ((c = dl(h, f.mode, g)), (c.return = f), c)
      : ((c = i(c, h)), (c.return = f), c);
  }
  function a(f, c, h, g) {
    return c !== null && c.elementType === h.type
      ? ((g = i(c, h.props)), (g.ref = yr(f, c, h)), (g.return = f), g)
      : ((g = ys(h.type, h.key, h.props, null, f.mode, g)),
        (g.ref = yr(f, c, h)),
        (g.return = f),
        g);
  }
  function u(f, c, h, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = pl(h, f.mode, g)), (c.return = f), c)
      : ((c = i(c, h.children || [])), (c.return = f), c);
  }
  function d(f, c, h, g, m) {
    return c === null || c.tag !== 7
      ? ((c = Vn(h, f.mode, g, m)), (c.return = f), c)
      : ((c = i(c, h)), (c.return = f), c);
  }
  function y(f, c, h) {
    if (typeof c == 'string' || typeof c == 'number')
      return (c = dl('' + c, f.mode, h)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case Pr:
          return (
            (h = ys(c.type, c.key, c.props, null, f.mode, h)),
            (h.ref = yr(f, null, c)),
            (h.return = f),
            h
          );
        case Qt:
          return (c = pl(c, f.mode, h)), (c.return = f), c;
      }
      if (Qi(c) || fr(c)) return (c = Vn(c, f.mode, h, null)), (c.return = f), c;
      Ji(f, c);
    }
    return null;
  }
  function p(f, c, h, g) {
    var m = c !== null ? c.key : null;
    if (typeof h == 'string' || typeof h == 'number')
      return m !== null ? null : l(f, c, '' + h, g);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Pr:
          return h.key === m
            ? h.type === mt
              ? d(f, c, h.props.children, g, m)
              : a(f, c, h, g)
            : null;
        case Qt:
          return h.key === m ? u(f, c, h, g) : null;
      }
      if (Qi(h) || fr(h)) return m !== null ? null : d(f, c, h, g, null);
      Ji(f, h);
    }
    return null;
  }
  function w(f, c, h, g, m) {
    if (typeof g == 'string' || typeof g == 'number')
      return (f = f.get(h) || null), l(c, f, '' + g, m);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Pr:
          return (
            (f = f.get(g.key === null ? h : g.key) || null),
            g.type === mt ? d(c, f, g.props.children, m, g.key) : a(c, f, g, m)
          );
        case Qt:
          return (f = f.get(g.key === null ? h : g.key) || null), u(c, f, g, m);
      }
      if (Qi(g) || fr(g)) return (f = f.get(h) || null), d(c, f, g, m, null);
      Ji(c, g);
    }
    return null;
  }
  function T(f, c, h, g) {
    for (
      var m = null, A = null, _ = c, P = (c = 0), N = null;
      _ !== null && P < h.length;
      P++
    ) {
      _.index > P ? ((N = _), (_ = null)) : (N = _.sibling);
      var C = p(f, _, h[P], g);
      if (C === null) {
        _ === null && (_ = N);
        break;
      }
      e && _ && C.alternate === null && t(f, _),
        (c = s(C, c, P)),
        A === null ? (m = C) : (A.sibling = C),
        (A = C),
        (_ = N);
    }
    if (P === h.length) return n(f, _), m;
    if (_ === null) {
      for (; P < h.length; P++)
        (_ = y(f, h[P], g)),
          _ !== null &&
            ((c = s(_, c, P)), A === null ? (m = _) : (A.sibling = _), (A = _));
      return m;
    }
    for (_ = r(f, _); P < h.length; P++)
      (N = w(_, f, P, h[P], g)),
        N !== null &&
          (e && N.alternate !== null && _.delete(N.key === null ? P : N.key),
          (c = s(N, c, P)),
          A === null ? (m = N) : (A.sibling = N),
          (A = N));
    return (
      e &&
        _.forEach(function (Q) {
          return t(f, Q);
        }),
      m
    );
  }
  function k(f, c, h, g) {
    var m = fr(h);
    if (typeof m != 'function') throw Error(v(150));
    if (((h = m.call(h)), h == null)) throw Error(v(151));
    for (
      var A = (m = null), _ = c, P = (c = 0), N = null, C = h.next();
      _ !== null && !C.done;
      P++, C = h.next()
    ) {
      _.index > P ? ((N = _), (_ = null)) : (N = _.sibling);
      var Q = p(f, _, C.value, g);
      if (Q === null) {
        _ === null && (_ = N);
        break;
      }
      e && _ && Q.alternate === null && t(f, _),
        (c = s(Q, c, P)),
        A === null ? (m = Q) : (A.sibling = Q),
        (A = Q),
        (_ = N);
    }
    if (C.done) return n(f, _), m;
    if (_ === null) {
      for (; !C.done; P++, C = h.next())
        (C = y(f, C.value, g)),
          C !== null &&
            ((c = s(C, c, P)), A === null ? (m = C) : (A.sibling = C), (A = C));
      return m;
    }
    for (_ = r(f, _); !C.done; P++, C = h.next())
      (C = w(_, f, P, C.value, g)),
        C !== null &&
          (e && C.alternate !== null && _.delete(C.key === null ? P : C.key),
          (c = s(C, c, P)),
          A === null ? (m = C) : (A.sibling = C),
          (A = C));
    return (
      e &&
        _.forEach(function (zo) {
          return t(f, zo);
        }),
      m
    );
  }
  return function (f, c, h, g) {
    var m = typeof h == 'object' && h !== null && h.type === mt && h.key === null;
    m && (h = h.props.children);
    var A = typeof h == 'object' && h !== null;
    if (A)
      switch (h.$$typeof) {
        case Pr:
          e: {
            for (A = h.key, m = c; m !== null; ) {
              if (m.key === A) {
                switch (m.tag) {
                  case 7:
                    if (h.type === mt) {
                      n(f, m.sibling),
                        (c = i(m, h.props.children)),
                        (c.return = f),
                        (f = c);
                      break e;
                    }
                    break;
                  default:
                    if (m.elementType === h.type) {
                      n(f, m.sibling),
                        (c = i(m, h.props)),
                        (c.ref = yr(f, m, h)),
                        (c.return = f),
                        (f = c);
                      break e;
                    }
                }
                n(f, m);
                break;
              } else t(f, m);
              m = m.sibling;
            }
            h.type === mt
              ? ((c = Vn(h.props.children, f.mode, g, h.key)), (c.return = f), (f = c))
              : ((g = ys(h.type, h.key, h.props, null, f.mode, g)),
                (g.ref = yr(f, c, h)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Qt:
          e: {
            for (m = h.key; c !== null; ) {
              if (c.key === m)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(f, c.sibling), (c = i(c, h.children || [])), (c.return = f), (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = pl(h, f.mode, g)), (c.return = f), (f = c);
          }
          return o(f);
      }
    if (typeof h == 'string' || typeof h == 'number')
      return (
        (h = '' + h),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = i(c, h)), (c.return = f), (f = c))
          : (n(f, c), (c = dl(h, f.mode, g)), (c.return = f), (f = c)),
        o(f)
      );
    if (Qi(h)) return T(f, c, h, g);
    if (fr(h)) return k(f, c, h, g);
    if ((A && Ji(f, h), typeof h == 'undefined' && !m))
      switch (f.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(v(152, Ln(f.type) || 'Component'));
      }
    return n(f, c);
  };
}
var $s = zd(!0),
  Hd = zd(!1),
  ki = {},
  Ke = Vt(ki),
  si = Vt(ki),
  oi = Vt(ki);
function en(e) {
  if (e === ki) throw Error(v(174));
  return e;
}
function Jl(e, t) {
  switch ((b(oi, t), b(si, e), b(Ke, ki), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $l(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $l(t, e));
  }
  z(Ke), b(Ke, t);
}
function Yn() {
  z(Ke), z(si), z(oi);
}
function ch(e) {
  en(oi.current);
  var t = en(Ke.current),
    n = $l(t, e.type);
  t !== n && (b(si, e), b(Ke, n));
}
function pu(e) {
  si.current === e && (z(Ke), z(si));
}
var W = Vt(0);
function Us(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var nt = null,
  It = null,
  qe = !1;
function Wd(e, t) {
  var n = Oe(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.type = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function hh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function Zl(e) {
  if (qe) {
    var t = It;
    if (t) {
      var n = t;
      if (!hh(e, t)) {
        if (((t = $n(n.nextSibling)), !t || !hh(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (qe = !1), (nt = e);
          return;
        }
        Wd(nt, n);
      }
      (nt = e), (It = $n(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (qe = !1), (nt = e);
  }
}
function fh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  nt = e;
}
function Zi(e) {
  if (e !== nt) return !1;
  if (!qe) return fh(e), (qe = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== 'head' && t !== 'body' && !Kl(t, e.memoizedProps)))
    for (t = It; t; ) Wd(e, t), (t = $n(t.nextSibling));
  if ((fh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(v(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              It = $n(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      It = null;
    }
  } else It = nt ? $n(e.stateNode.nextSibling) : null;
  return !0;
}
function ul() {
  (It = nt = null), (qe = !1);
}
var Fn = [];
function gu() {
  for (var e = 0; e < Fn.length; e++) Fn[e]._workInProgressVersionPrimary = null;
  Fn.length = 0;
}
var Vr = mn.ReactCurrentDispatcher,
  De = mn.ReactCurrentBatchConfig,
  li = 0,
  K = null,
  ce = null,
  ie = null,
  Fs = !1,
  zr = !1;
function Ee() {
  throw Error(v(321));
}
function mu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ne(e[n], t[n])) return !1;
  return !0;
}
function vu(e, t, n, r, i, s) {
  if (
    ((li = s),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vr.current = e === null || e.memoizedState === null ? zv : Hv),
    (e = n(r, i)),
    zr)
  ) {
    s = 0;
    do {
      if (((zr = !1), !(25 > s))) throw Error(v(301));
      (s += 1),
        (ie = ce = null),
        (t.updateQueue = null),
        (Vr.current = Wv),
        (e = n(r, i));
    } while (zr);
  }
  if (
    ((Vr.current = zs),
    (t = ce !== null && ce.next !== null),
    (li = 0),
    (ie = ce = K = null),
    (Fs = !1),
    t)
  )
    throw Error(v(300));
  return e;
}
function tn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (K.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function yn() {
  if (ce === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = ie === null ? K.memoizedState : ie.next;
  if (t !== null) (ie = t), (ce = e);
  else {
    if (e === null) throw Error(v(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      ie === null ? (K.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function He(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function _r(e) {
  var t = yn(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = ce,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (i = i.next), (r = r.baseState);
    var l = (o = s = null),
      a = i;
    do {
      var u = a.lane;
      if ((li & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: a.action,
              eagerReducer: a.eagerReducer,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.eagerReducer === e ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: u,
          action: a.action,
          eagerReducer: a.eagerReducer,
          eagerState: a.eagerState,
          next: null,
        };
        l === null ? ((o = l = d), (s = r)) : (l = l.next = d), (K.lanes |= u), (Ci |= u);
      }
      a = a.next;
    } while (a !== null && a !== i);
    l === null ? (s = r) : (l.next = o),
      Ne(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function wr(e) {
  var t = yn(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ne(s, t.memoizedState) || (Be = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function dh(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var i = t._workInProgressVersionPrimary;
  if (
    (i !== null
      ? (e = i === r)
      : ((e = e.mutableReadLanes),
        (e = (li & e) === e) && ((t._workInProgressVersionPrimary = r), Fn.push(t))),
    e)
  )
    return n(t._source);
  throw (Fn.push(t), Error(v(350)));
}
function bd(e, t, n, r) {
  var i = _e;
  if (i === null) throw Error(v(349));
  var s = t._getVersion,
    o = s(t._source),
    l = Vr.current,
    a = l.useState(function () {
      return dh(i, t, n);
    }),
    u = a[1],
    d = a[0];
  a = ie;
  var y = e.memoizedState,
    p = y.refs,
    w = p.getSnapshot,
    T = y.source;
  y = y.subscribe;
  var k = K;
  return (
    (e.memoizedState = { refs: p, source: t, subscribe: r }),
    l.useEffect(
      function () {
        (p.getSnapshot = n), (p.setSnapshot = u);
        var f = s(t._source);
        if (!Ne(o, f)) {
          (f = n(t._source)),
            Ne(d, f) || (u(f), (f = Rt(k)), (i.mutableReadLanes |= f & i.pendingLanes)),
            (f = i.mutableReadLanes),
            (i.entangledLanes |= f);
          for (var c = i.entanglements, h = f; 0 < h; ) {
            var g = 31 - $t(h),
              m = 1 << g;
            (c[g] |= f), (h &= ~m);
          }
        }
      },
      [n, t, r],
    ),
    l.useEffect(
      function () {
        return r(t._source, function () {
          var f = p.getSnapshot,
            c = p.setSnapshot;
          try {
            c(f(t._source));
            var h = Rt(k);
            i.mutableReadLanes |= h & i.pendingLanes;
          } catch (g) {
            c(function () {
              throw g;
            });
          }
        });
      },
      [t, r],
    ),
    (Ne(w, n) && Ne(T, t) && Ne(y, r)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: He,
        lastRenderedState: d,
      }),
      (e.dispatch = u = wu.bind(null, K, e)),
      (a.queue = e),
      (a.baseQueue = null),
      (d = dh(i, t, n)),
      (a.memoizedState = a.baseState = d)),
    d
  );
}
function Gd(e, t, n) {
  var r = yn();
  return bd(r, e, t, n);
}
function Er(e) {
  var t = tn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      { pending: null, dispatch: null, lastRenderedReducer: He, lastRenderedState: e }),
    (e = e.dispatch = wu.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function js(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null }), (K.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ph(e) {
  var t = tn();
  return (e = { current: e }), (t.memoizedState = e);
}
function Bs() {
  return yn().memoizedState;
}
function ea(e, t, n, r) {
  var i = tn();
  (K.flags |= e), (i.memoizedState = js(1 | t, n, void 0, r === void 0 ? null : r));
}
function yu(e, t, n, r) {
  var i = yn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ce !== null) {
    var o = ce.memoizedState;
    if (((s = o.destroy), r !== null && mu(r, o.deps))) {
      js(t, n, s, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = js(1 | t, n, s, r));
}
function gh(e, t) {
  return ea(516, 4, e, t);
}
function Vs(e, t) {
  return yu(516, 4, e, t);
}
function Kd(e, t) {
  return yu(4, 2, e, t);
}
function qd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xd(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), yu(4, 2, qd.bind(null, t, e), n);
}
function _u() {}
function Yd(e, t) {
  var n = yn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Qd(e, t) {
  var n = yn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vv(e, t) {
  var n = Xn();
  cn(98 > n ? 98 : n, function () {
    e(!0);
  }),
    cn(97 < n ? 97 : n, function () {
      var r = De.transition;
      De.transition = 1;
      try {
        e(!1), t();
      } finally {
        De.transition = r;
      }
    });
}
function wu(e, t, n) {
  var r = Ce(),
    i = Rt(e),
    s = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null },
    o = t.pending;
  if (
    (o === null ? (s.next = s) : ((s.next = o.next), (o.next = s)),
    (t.pending = s),
    (o = e.alternate),
    e === K || (o !== null && o === K))
  )
    zr = Fs = !0;
  else {
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((s.eagerReducer = o), (s.eagerState = a), Ne(a, l))) return;
      } catch {
      } finally {
      }
    Nt(e, i, r);
  }
}
var zs = {
    readContext: xe,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useOpaqueIdentifier: Ee,
    unstable_isNewReconciler: !1,
  },
  zv = {
    readContext: xe,
    useCallback: function (e, t) {
      return (tn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xe,
    useEffect: gh,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), ea(4, 2, qd.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return ea(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tn();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = tn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = wu.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: ph,
    useState: Er,
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = Er(e),
        n = t[0],
        r = t[1];
      return (
        gh(
          function () {
            var i = De.transition;
            De.transition = 1;
            try {
              r(e);
            } finally {
              De.transition = i;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = Er(!1),
        t = e[0];
      return (e = Vv.bind(null, e[1])), ph(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = tn();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        bd(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (qe) {
        var e = !1,
          t = Mv(function () {
            throw (e || ((e = !0), n('r:' + (ol++).toString(36))), Error(v(355)));
          }),
          n = Er(t)[1];
        return (
          (K.mode & 2) === 0 &&
            ((K.flags |= 516),
            js(
              5,
              function () {
                n('r:' + (ol++).toString(36));
              },
              void 0,
              null,
            )),
          t
        );
      }
      return (t = 'r:' + (ol++).toString(36)), Er(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  Hv = {
    readContext: xe,
    useCallback: Yd,
    useContext: xe,
    useEffect: Vs,
    useImperativeHandle: Xd,
    useLayoutEffect: Kd,
    useMemo: Qd,
    useReducer: _r,
    useRef: Bs,
    useState: function () {
      return _r(He);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = _r(He),
        n = t[0],
        r = t[1];
      return (
        Vs(
          function () {
            var i = De.transition;
            De.transition = 1;
            try {
              r(e);
            } finally {
              De.transition = i;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = _r(He)[0];
      return [Bs().current, e];
    },
    useMutableSource: Gd,
    useOpaqueIdentifier: function () {
      return _r(He)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Wv = {
    readContext: xe,
    useCallback: Yd,
    useContext: xe,
    useEffect: Vs,
    useImperativeHandle: Xd,
    useLayoutEffect: Kd,
    useMemo: Qd,
    useReducer: wr,
    useRef: Bs,
    useState: function () {
      return wr(He);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = wr(He),
        n = t[0],
        r = t[1];
      return (
        Vs(
          function () {
            var i = De.transition;
            De.transition = 1;
            try {
              r(e);
            } finally {
              De.transition = i;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = wr(He)[0];
      return [Bs().current, e];
    },
    useMutableSource: Gd,
    useOpaqueIdentifier: function () {
      return wr(He)[0];
    },
    unstable_isNewReconciler: !1,
  },
  bv = mn.ReactCurrentOwner,
  Be = !1;
function Se(e, t, n, r) {
  t.child = e === null ? Hd(t, null, n, r) : $s(t, e.child, n, r);
}
function mh(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Un(t, i),
    (r = vu(e, t, n, r, s, i)),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), rt(e, t, i))
      : ((t.flags |= 1), Se(e, t, r, i), t.child)
  );
}
function vh(e, t, n, r, i, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Cu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Jd(e, t, o, r, i, s))
      : ((e = ys(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (o = e.child),
    (i & s) === 0 &&
    ((i = o.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : ti),
    n(i, r) && e.ref === t.ref)
      ? rt(e, t, s)
      : ((t.flags |= 1), (e = jt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e))
  );
}
function Jd(e, t, n, r, i, s) {
  if (e !== null && ti(e.memoizedProps, r) && e.ref === t.ref)
    if (((Be = !1), (s & i) !== 0)) (e.flags & 16384) !== 0 && (Be = !0);
    else return (t.lanes = e.lanes), rt(e, t, s);
  return ta(e, t, n, r, s);
}
function cl(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden' || r.mode === 'unstable-defer-without-hiding')
    if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), ts(t, n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0 }), ts(t, s !== null ? s.baseLanes : n);
    else
      return (
        (e = s !== null ? s.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        ts(t, e),
        null
      );
  else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), ts(t, r);
  return Se(e, t, i, n), t.child;
}
function Zd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && (t.flags |= 128);
}
function ta(e, t, n, r, i) {
  var s = Te(n) ? un : me.current;
  return (
    (s = qn(t, s)),
    Un(t, i),
    (n = vu(e, t, n, r, s, i)),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), rt(e, t, i))
      : ((t.flags |= 1), Se(e, t, n, i), t.child)
  );
}
function yh(e, t, n, r, i) {
  if (Te(n)) {
    var s = !0;
    ds(t);
  } else s = !1;
  if ((Un(t, i), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Vd(t, n, r),
      Ql(t, n, r, i),
      (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = xe(u))
      : ((u = Te(n) ? un : me.current), (u = qn(t, u)));
    var d = n.getDerivedStateFromProps,
      y = typeof d == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    y ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && uh(t, o, r, u)),
      (gt = !1);
    var p = t.memoizedState;
    (o.state = p),
      ii(t, r, o, i),
      (a = t.memoizedState),
      l !== r || p !== a || Ie.current || gt
        ? (typeof d == 'function' && (Ms(t, n, d, r), (a = t.memoizedState)),
          (l = gt || ah(t, n, l, r, p, a, u))
            ? (y ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4), (r = !1));
  } else {
    (o = t.stateNode),
      jd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : je(t.type, l)),
      (o.props = u),
      (y = t.pendingProps),
      (p = o.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = xe(a))
        : ((a = Te(n) ? un : me.current), (a = qn(t, a)));
    var w = n.getDerivedStateFromProps;
    (d = typeof w == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== y || p !== a) && uh(t, o, r, a)),
      (gt = !1),
      (p = t.memoizedState),
      (o.state = p),
      ii(t, r, o, i);
    var T = t.memoizedState;
    l !== y || p !== T || Ie.current || gt
      ? (typeof w == 'function' && (Ms(t, n, w, r), (T = t.memoizedState)),
        (u = gt || ah(t, n, u, r, p, T, a))
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, T, a),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, T, a)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 256))
          : (typeof o.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = T)),
        (o.props = r),
        (o.state = T),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return na(e, t, n, r, s, i);
}
function na(e, t, n, r, i, s) {
  Zd(e, t);
  var o = (t.flags & 64) !== 0;
  if (!r && !o) return i && rh(t, n, !1), rt(e, t, s);
  (r = t.stateNode), (bv.current = t);
  var l = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = $s(t, e.child, null, s)), (t.child = $s(t, null, l, s)))
      : Se(e, t, l, s),
    (t.memoizedState = r.state),
    i && rh(t, n, !0),
    t.child
  );
}
function _h(e) {
  var t = e.stateNode;
  t.pendingContext
    ? nh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && nh(e, t.context, !1),
    Jl(e, t.containerInfo);
}
var es = { dehydrated: null, retryLane: 0 };
function wh(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    s = !1,
    o;
  return (
    (o = (t.flags & 64) !== 0) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (i |= 1),
    b(W, i & 1),
    e === null
      ? (r.fallback !== void 0 && Zl(t),
        (e = r.children),
        (i = r.fallback),
        s
          ? ((e = Eh(t, e, i, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = es),
            e)
          : typeof r.unstable_expectedLoadTime == 'number'
          ? ((e = Eh(t, e, i, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = es),
            (t.lanes = 33554432),
            e)
          : ((n = Pu({ mode: 'visible', children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? s
        ? ((r = Ih(e, t, r.children, r.fallback, n)),
          (s = t.child),
          (i = e.child.memoizedState),
          (s.memoizedState =
            i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
          (s.childLanes = e.childLanes & ~n),
          (t.memoizedState = es),
          r)
        : ((n = Sh(e, t, r.children, n)), (t.memoizedState = null), n)
      : s
      ? ((r = Ih(e, t, r.children, r.fallback, n)),
        (s = t.child),
        (i = e.child.memoizedState),
        (s.memoizedState =
          i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = es),
        r)
      : ((n = Sh(e, t, r.children, n)), (t.memoizedState = null), n)
  );
}
function Eh(e, t, n, r) {
  var i = e.mode,
    s = e.child;
  return (
    (t = { mode: 'hidden', children: t }),
    (i & 2) === 0 && s !== null
      ? ((s.childLanes = 0), (s.pendingProps = t))
      : (s = Pu(t, i, 0, null)),
    (n = Vn(n, i, r, null)),
    (s.return = e),
    (n.return = e),
    (s.sibling = n),
    (e.child = s),
    n
  );
}
function Sh(e, t, n, r) {
  var i = e.child;
  return (
    (e = i.sibling),
    (n = jt(i, { mode: 'visible', children: n })),
    (t.mode & 2) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function Ih(e, t, n, r, i) {
  var s = t.mode,
    o = e.child;
  e = o.sibling;
  var l = { mode: 'hidden', children: n };
  return (
    (s & 2) === 0 && t.child !== o
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = l),
        (o = n.lastEffect),
        o !== null
          ? ((t.firstEffect = n.firstEffect), (t.lastEffect = o), (o.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = jt(o, l)),
    e !== null ? (r = jt(e, r)) : ((r = Vn(r, s, i, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function Th(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Fd(e.return, t);
}
function hl(e, t, n, r, i, s) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
        lastEffect: s,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i),
      (o.lastEffect = s));
}
function kh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Se(e, t, r.children, n), (r = W.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Th(e, n);
        else if (e.tag === 19) Th(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(W, r), (t.mode & 2) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && Us(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          hl(t, !1, i, n, s, t.lastEffect);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Us(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        hl(t, !0, n, null, s, t.lastEffect);
        break;
      case 'together':
        hl(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ci |= t.lanes),
    (n & t.childLanes) !== 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(v(153));
    if (t.child !== null) {
      for (
        e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling), (n = n.sibling = jt(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var ep, ra, tp, np;
ep = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ra = function () {};
tp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), en(Ke.current);
    var s = null;
    switch (n) {
      case 'input':
        (i = Nl(e, i)), (r = Nl(e, r)), (s = []);
        break;
      case 'option':
        (i = Dl(e, i)), (r = Dl(e, r)), (s = []);
        break;
      case 'select':
        (i = H({}, i, { value: void 0 })), (r = H({}, r, { value: void 0 })), (s = []);
        break;
      case 'textarea':
        (i = xl(e, i)), (r = xl(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Rs);
    }
    Ul(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (qr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in a)
              a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (s = s || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (qr.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && B('scroll', e),
                  s || l === a || (s = []))
                : typeof a == 'object' && a !== null && a.$$typeof === Ka
                ? a.toString()
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push('style', n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
np = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!qe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Gv(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Te(t.type) && Os(), null;
    case 3:
      return (
        Yn(),
        z(Ie),
        z(me),
        gu(),
        (r = t.stateNode),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Zi(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        ra(t),
        null
      );
    case 5:
      pu(t);
      var i = en(oi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        tp(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(v(166));
          return null;
        }
        if (((e = en(Ke.current)), Zi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[St] = t), (r[Ns] = s), n)) {
            case 'dialog':
              B('cancel', r), B('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              B('load', r);
              break;
            case 'video':
            case 'audio':
              for (e = 0; e < Rr.length; e++) B(Rr[e], r);
              break;
            case 'source':
              B('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              B('error', r), B('load', r);
              break;
            case 'details':
              B('toggle', r);
              break;
            case 'input':
              kc(r, s), B('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }), B('invalid', r);
              break;
            case 'textarea':
              Pc(r, s), B('invalid', r);
          }
          Ul(n, s), (e = null);
          for (var o in s)
            s.hasOwnProperty(o) &&
              ((i = s[o]),
              o === 'children'
                ? typeof i == 'string'
                  ? r.textContent !== i && (e = ['children', i])
                  : typeof i == 'number' &&
                    r.textContent !== '' + i &&
                    (e = ['children', '' + i])
                : qr.hasOwnProperty(o) &&
                  i != null &&
                  o === 'onScroll' &&
                  B('scroll', r));
          switch (n) {
            case 'input':
              Ki(r), Cc(r, s, !0);
              break;
            case 'textarea':
              Ki(r), Ac(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = Rs);
          }
          (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          switch (
            ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === Ml.html && (e = Xf(n)),
            e === Ml.html
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[St] = t),
            (e[Ns] = r),
            ep(e, t, !1, !1),
            (t.stateNode = e),
            (o = Fl(n, r)),
            n)
          ) {
            case 'dialog':
              B('cancel', e), B('close', e), (i = r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              B('load', e), (i = r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Rr.length; i++) B(Rr[i], e);
              i = r;
              break;
            case 'source':
              B('error', e), (i = r);
              break;
            case 'img':
            case 'image':
            case 'link':
              B('error', e), B('load', e), (i = r);
              break;
            case 'details':
              B('toggle', e), (i = r);
              break;
            case 'input':
              kc(e, r), (i = Nl(e, r)), B('invalid', e);
              break;
            case 'option':
              i = Dl(e, r);
              break;
            case 'select':
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (i = H({}, r, { value: void 0 })),
                B('invalid', e);
              break;
            case 'textarea':
              Pc(e, r), (i = xl(e, r)), B('invalid', e);
              break;
            default:
              i = r;
          }
          Ul(n, i);
          var l = i;
          for (s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === 'style'
                ? Jf(e, a)
                : s === 'dangerouslySetInnerHTML'
                ? ((a = a ? a.__html : void 0), a != null && Yf(e, a))
                : s === 'children'
                ? typeof a == 'string'
                  ? (n !== 'textarea' || a !== '') && Xr(e, a)
                  : typeof a == 'number' && Xr(e, '' + a)
                : s !== 'suppressContentEditableWarning' &&
                  s !== 'suppressHydrationWarning' &&
                  s !== 'autoFocus' &&
                  (qr.hasOwnProperty(s)
                    ? a != null && s === 'onScroll' && B('scroll', e)
                    : a != null && Va(e, s, a, o));
            }
          switch (n) {
            case 'input':
              Ki(e), Cc(e, r, !1);
              break;
            case 'textarea':
              Ki(e), Ac(e);
              break;
            case 'option':
              r.value != null && e.setAttribute('value', '' + Mt(r.value));
              break;
            case 'select':
              (e.multiple = !!r.multiple),
                (s = r.value),
                s != null
                  ? Dn(e, !!r.multiple, s, !1)
                  : r.defaultValue != null && Dn(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof i.onClick == 'function' && (e.onclick = Rs);
          }
          Rd(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) np(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(v(166));
        (n = en(oi.current)),
          en(Ke.current),
          Zi(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[St] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[St] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        z(W),
        (r = t.memoizedState),
        (t.flags & 64) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && Zi(t)
              : (n = e.memoizedState !== null),
            r &&
              !n &&
              (t.mode & 2) !== 0 &&
              ((e === null && t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (W.current & 1) !== 0
                ? se === 0 && (se = 3)
                : ((se === 0 || se === 3) && (se = 4),
                  _e === null ||
                    ((Ci & 134217727) === 0 && (ir & 134217727) === 0) ||
                    jn(_e, de))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return Yn(), ra(t), e === null && Cd(t.stateNode.containerInfo), null;
    case 10:
      return fu(t), null;
    case 17:
      return Te(t.type) && Os(), null;
    case 19:
      if ((z(W), (r = t.memoizedState), r === null)) return null;
      if (((s = (t.flags & 64) !== 0), (o = r.rendering), o === null))
        if (s) Sr(r, !1);
        else {
          if (se !== 0 || (e !== null && (e.flags & 64) !== 0))
            for (e = t.child; e !== null; ) {
              if (((o = Us(e)), o !== null)) {
                for (
                  t.flags |= 64,
                    Sr(r, !1),
                    s = o.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 2),
                    (s.nextEffect = null),
                    (s.firstEffect = null),
                    (s.lastEffect = null),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return b(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            fe() > ua &&
            ((t.flags |= 64), (s = !0), Sr(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!s)
          if (((e = Us(o)), e !== null)) {
            if (
              ((t.flags |= 64),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(r, !0),
              r.tail === null && r.tailMode === 'hidden' && !o.alternate && !qe)
            )
              return (
                (t = t.lastEffect = r.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * fe() - r.renderingStartTime > ua &&
              n !== 1073741824 &&
              ((t.flags |= 64), (s = !0), Sr(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = r.last), n !== null ? (n.sibling = o) : (t.child = o), (r.last = o));
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = fe()),
          (n.sibling = null),
          (t = W.current),
          b(W, s ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        ku(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== 'unstable-defer-without-hiding' &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(v(156, t.tag));
}
function Kv(e) {
  switch (e.tag) {
    case 1:
      Te(e.type) && Os();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((Yn(), z(Ie), z(me), gu(), (t = e.flags), (t & 64) !== 0)) throw Error(v(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return pu(e), null;
    case 13:
      return z(W), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 19:
      return z(W), null;
    case 4:
      return Yn(), null;
    case 10:
      return fu(e), null;
    case 23:
    case 24:
      return ku(), null;
    default:
      return null;
  }
}
function Eu(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Pm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i };
}
function ia(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qv = typeof WeakMap == 'function' ? WeakMap : Map;
function rp(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ws || ((Ws = !0), (ca = r)), ia(e, t);
    }),
    n
  );
}
function ip(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    n.payload = function () {
      return ia(e, t), r(i);
    };
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        typeof r != 'function' &&
          (We === null ? (We = new Set([this])) : We.add(this), ia(e, t));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
var Xv = typeof WeakSet == 'function' ? WeakSet : Set;
function Ch(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (n) {
        Ot(e, n);
      }
    else t.current = null;
}
function Yv(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : je(t.type, n),
            r,
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && au(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(v(163));
}
function Qv(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (((t = n.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (((t = n.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        e = t = t.next;
        do {
          var i = e;
          (r = i.next),
            (i = i.tag),
            (i & 4) !== 0 && (i & 1) !== 0 && (dp(n, e), sy(n, e)),
            (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type ? t.memoizedProps : je(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate,
              ))),
        (t = n.updateQueue),
        t !== null && lh(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        lh(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode),
        t === null && n.flags & 4 && Rd(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && ad(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(v(163));
}
function Ph(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t)
        (r = r.style),
          typeof r.setProperty == 'function'
            ? r.setProperty('display', 'none', 'important')
            : (r.display = 'none');
      else {
        r = n.stateNode;
        var i = n.memoizedProps.style;
        (i = i != null && i.hasOwnProperty('display') ? i.display : null),
          (r.style.display = Qf('display', i));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Ah(e, t) {
  if (on && typeof on.onCommitFiberUnmount == 'function')
    try {
      on.onCommitFiberUnmount(uu, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
        var n = (e = e.next);
        do {
          var r = n,
            i = r.destroy;
          if (((r = r.tag), i !== void 0))
            if ((r & 4) !== 0) dp(t, n);
            else {
              r = t;
              try {
                i();
              } catch (s) {
                Ot(r, s);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if ((Ch(t), (e = t.stateNode), typeof e.componentWillUnmount == 'function'))
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (s) {
          Ot(t, s);
        }
      break;
    case 5:
      Ch(t);
      break;
    case 4:
      sp(e, t);
  }
}
function Rh(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function Nh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Oh(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Nh(t)) break e;
      t = t.return;
    }
    throw Error(v(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(v(161));
  }
  n.flags & 16 && (Xr(t, ''), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Nh(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? sa(e, n, t) : oa(e, n, t);
}
function sa(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Rs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sa(e, t, n), e = e.sibling; e !== null; ) sa(e, t, n), (e = e.sibling);
}
function oa(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oa(e, t, n), e = e.sibling; e !== null; ) oa(e, t, n), (e = e.sibling);
}
function sp(e, t) {
  for (var n = t, r = !1, i, s; ; ) {
    if (!r) {
      r = n.return;
      e: for (;;) {
        if (r === null) throw Error(v(160));
        switch (((i = r.stateNode), r.tag)) {
          case 5:
            s = !1;
            break e;
          case 3:
            (i = i.containerInfo), (s = !0);
            break e;
          case 4:
            (i = i.containerInfo), (s = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var o = e, l = n, a = l; ; )
        if ((Ah(o, a), a.child !== null && a.tag !== 4))
          (a.child.return = a), (a = a.child);
        else {
          if (a === l) break e;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === l) break e;
            a = a.return;
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      s
        ? ((o = i),
          (l = n.stateNode),
          o.nodeType === 8 ? o.parentNode.removeChild(l) : o.removeChild(l))
        : i.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (i = n.stateNode.containerInfo), (s = !0), (n.child.return = n), (n = n.child);
        continue;
      }
    } else if ((Ah(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (r = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function fl(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next);
        do
          (r.tag & 3) === 3 &&
            ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
            (r = r.next);
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps;
        var i = e !== null ? e.memoizedProps : r;
        e = t.type;
        var s = t.updateQueue;
        if (((t.updateQueue = null), s !== null)) {
          for (
            n[Ns] = r,
              e === 'input' && r.type === 'radio' && r.name != null && Kf(n, r),
              Fl(e, i),
              t = Fl(e, r),
              i = 0;
            i < s.length;
            i += 2
          ) {
            var o = s[i],
              l = s[i + 1];
            o === 'style'
              ? Jf(n, l)
              : o === 'dangerouslySetInnerHTML'
              ? Yf(n, l)
              : o === 'children'
              ? Xr(n, l)
              : Va(n, o, l, t);
          }
          switch (e) {
            case 'input':
              Ol(n, r);
              break;
            case 'textarea':
              qf(n, r);
              break;
            case 'select':
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (s = r.value),
                s != null
                  ? Dn(n, !!r.multiple, s, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? Dn(n, !!r.multiple, r.defaultValue, !0)
                      : Dn(n, !!r.multiple, r.multiple ? [] : '', !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(v(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), ad(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((Tu = fe()), Ph(t.child, !0)), Lh(t);
      return;
    case 19:
      Lh(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Ph(t, t.memoizedState !== null);
      return;
  }
  throw Error(v(163));
}
function Lh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xv()),
      t.forEach(function (r) {
        var i = ay.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Jv(e, t) {
  return e !== null && ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var Zv = Math.ceil,
  Hs = mn.ReactCurrentDispatcher,
  Su = mn.ReactCurrentOwner,
  R = 0,
  _e = null,
  J = null,
  de = 0,
  hn = 0,
  la = Vt(0),
  se = 0,
  wo = null,
  rr = 0,
  Ci = 0,
  ir = 0,
  Iu = 0,
  aa = null,
  Tu = 0,
  ua = 1 / 0;
function sr() {
  ua = fe() + 500;
}
var I = null,
  Ws = !1,
  ca = null,
  We = null,
  Ft = !1,
  Hr = null,
  Nr = 90,
  ha = [],
  fa = [],
  lt = null,
  Wr = 0,
  da = null,
  gs = -1,
  tt = 0,
  ms = 0,
  br = null,
  vs = !1;
function Ce() {
  return (R & 48) !== 0 ? fe() : gs !== -1 ? gs : (gs = fe());
}
function Rt(e) {
  if (((e = e.mode), (e & 2) === 0)) return 1;
  if ((e & 4) === 0) return Xn() === 99 ? 1 : 2;
  if ((tt === 0 && (tt = rr), Bv.transition !== 0)) {
    ms !== 0 && (ms = aa !== null ? aa.pendingLanes : 0), (e = tt);
    var t = 4186112 & ~ms;
    return (
      (t &= -t), t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)), t
    );
  }
  return (
    (e = Xn()),
    (R & 4) !== 0 && e === 98 ? (e = Ps(12, tt)) : ((e = Hm(e)), (e = Ps(e, tt))),
    e
  );
}
function Nt(e, t, n) {
  if (50 < Wr) throw ((Wr = 0), (da = null), Error(v(185)));
  if (((e = Eo(e, t)), e === null)) return null;
  fo(e, t, n), e === _e && ((ir |= t), se === 4 && jn(e, de));
  var r = Xn();
  t === 1
    ? (R & 8) !== 0 && (R & 48) === 0
      ? pa(e)
      : (Me(e, n), R === 0 && (sr(), Je()))
    : ((R & 4) === 0 ||
        (r !== 98 && r !== 99) ||
        (lt === null ? (lt = new Set([e])) : lt.add(e)),
      Me(e, n)),
    (aa = e);
}
function Eo(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function Me(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      i = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - $t(o),
      a = 1 << l,
      u = s[l];
    if (u === -1) {
      if ((a & r) === 0 || (a & i) !== 0) {
        (u = t), Sn(a);
        var d = j;
        s[l] = 10 <= d ? u + 250 : 6 <= d ? u + 5e3 : -1;
      }
    } else u <= t && (e.expiredLanes |= a);
    o &= ~a;
  }
  if (((r = Zr(e, e === _e ? de : 0)), (t = j), r === 0))
    n !== null && (n !== ll && Xl(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== ll && Xl(n);
    }
    t === 15
      ? ((n = pa.bind(null, e)),
        et === null ? ((et = [n]), (ps = cu(yo, Ud))) : et.push(n),
        (n = ll))
      : t === 14
      ? (n = ri(99, pa.bind(null, e)))
      : ((n = Wm(t)), (n = ri(n, op.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function op(e) {
  if (((gs = -1), (ms = tt = 0), (R & 48) !== 0)) throw Error(v(327));
  var t = e.callbackNode;
  if (zt() && e.callbackNode !== t) return null;
  var n = Zr(e, e === _e ? de : 0);
  if (n === 0) return null;
  var r = n,
    i = R;
  R |= 16;
  var s = cp();
  (_e !== e || de !== r) && (sr(), Bn(e, r));
  do
    try {
      ny();
      break;
    } catch (l) {
      up(e, l);
    }
  while (1);
  if (
    (hu(),
    (Hs.current = s),
    (R = i),
    J !== null ? (r = 0) : ((_e = null), (de = 0), (r = se)),
    (rr & ir) !== 0)
  )
    Bn(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((R |= 64),
        e.hydrate && ((e.hydrate = !1), au(e.containerInfo)),
        (n = gd(e)),
        n !== 0 && (r = Or(e, n))),
      r === 1)
    )
      throw ((t = wo), Bn(e, 0), jn(e, n), Me(e, fe()), t);
    switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
      case 0:
      case 1:
        throw Error(v(345));
      case 2:
        Xt(e);
        break;
      case 3:
        if ((jn(e, n), (n & 62914560) === n && ((r = Tu + 500 - fe()), 10 < r))) {
          if (Zr(e, 0) !== 0) break;
          if (((i = e.suspendedLanes), (i & n) !== n)) {
            Ce(), (e.pingedLanes |= e.suspendedLanes & i);
            break;
          }
          e.timeoutHandle = Zc(Xt.bind(null, e), r);
          break;
        }
        Xt(e);
        break;
      case 4:
        if ((jn(e, n), (n & 4186112) === n)) break;
        for (r = e.eventTimes, i = -1; 0 < n; ) {
          var o = 31 - $t(n);
          (s = 1 << o), (o = r[o]), o > i && (i = o), (n &= ~s);
        }
        if (
          ((n = i),
          (n = fe() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * Zv(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = Zc(Xt.bind(null, e), n);
          break;
        }
        Xt(e);
        break;
      case 5:
        Xt(e);
        break;
      default:
        throw Error(v(329));
    }
  }
  return Me(e, fe()), e.callbackNode === t ? op.bind(null, e) : null;
}
function jn(e, t) {
  for (
    t &= ~Iu, t &= ~ir, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pa(e) {
  if ((R & 48) !== 0) throw Error(v(327));
  if ((zt(), e === _e && (e.expiredLanes & de) !== 0)) {
    var t = de,
      n = Or(e, t);
    (rr & ir) !== 0 && ((t = Zr(e, t)), (n = Or(e, t)));
  } else (t = Zr(e, 0)), (n = Or(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((R |= 64),
      e.hydrate && ((e.hydrate = !1), au(e.containerInfo)),
      (t = gd(e)),
      t !== 0 && (n = Or(e, t))),
    n === 1)
  )
    throw ((n = wo), Bn(e, 0), jn(e, t), Me(e, fe()), n);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Xt(e),
    Me(e, fe()),
    null
  );
}
function ey() {
  if (lt !== null) {
    var e = lt;
    (lt = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), Me(t, fe());
      });
  }
  Je();
}
function lp(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && (sr(), Je());
  }
}
function ap(e, t) {
  var n = R;
  (R &= -2), (R |= 8);
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && (sr(), Je());
  }
}
function ts(e, t) {
  b(la, hn), (hn |= t), (rr |= t);
}
function ku() {
  (hn = la.current), z(la);
}
function Bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xv(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && Os();
          break;
        case 3:
          Yn(), z(Ie), z(me), gu();
          break;
        case 5:
          pu(r);
          break;
        case 4:
          Yn();
          break;
        case 13:
          z(W);
          break;
        case 19:
          z(W);
          break;
        case 10:
          fu(r);
          break;
        case 23:
        case 24:
          ku();
      }
      n = n.return;
    }
  (_e = e),
    (J = jt(e.current, null)),
    (de = hn = rr = t),
    (se = 0),
    (wo = null),
    (Iu = ir = Ci = 0);
}
function up(e, t) {
  do {
    var n = J;
    try {
      if ((hu(), (Vr.current = zs), Fs)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Fs = !1;
      }
      if (
        ((li = 0),
        (ie = ce = K = null),
        (zr = !1),
        (Su.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (wo = t), (J = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = de),
          (l.flags |= 2048),
          (l.firstEffect = l.lastEffect = null),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a;
          if ((l.mode & 2) === 0) {
            var d = l.alternate;
            d
              ? ((l.updateQueue = d.updateQueue),
                (l.memoizedState = d.memoizedState),
                (l.lanes = d.lanes))
              : ((l.updateQueue = null), (l.memoizedState = null));
          }
          var y = (W.current & 1) !== 0,
            p = o;
          do {
            var w;
            if ((w = p.tag === 13)) {
              var T = p.memoizedState;
              if (T !== null) w = T.dehydrated !== null;
              else {
                var k = p.memoizedProps;
                w =
                  k.fallback === void 0
                    ? !1
                    : k.unstable_avoidThisFallback !== !0
                    ? !0
                    : !y;
              }
            }
            if (w) {
              var f = p.updateQueue;
              if (f === null) {
                var c = new Set();
                c.add(u), (p.updateQueue = c);
              } else f.add(u);
              if ((p.mode & 2) === 0) {
                if (
                  ((p.flags |= 64), (l.flags |= 16384), (l.flags &= -2981), l.tag === 1)
                )
                  if (l.alternate === null) l.tag = 17;
                  else {
                    var h = Pt(-1, 1);
                    (h.tag = 2), At(l, h);
                  }
                l.lanes |= 1;
                break e;
              }
              (a = void 0), (l = t);
              var g = s.pingCache;
              if (
                (g === null
                  ? ((g = s.pingCache = new qv()), (a = new Set()), g.set(u, a))
                  : ((a = g.get(u)), a === void 0 && ((a = new Set()), g.set(u, a))),
                !a.has(l))
              ) {
                a.add(l);
                var m = ly.bind(null, s, u, l);
                u.then(m, m);
              }
              (p.flags |= 4096), (p.lanes = t);
              break e;
            }
            p = p.return;
          } while (p !== null);
          a = Error(
            (Ln(l.type) || 'A React component') +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`,
          );
        }
        se !== 5 && (se = 2), (a = Eu(a, l)), (p = o);
        do {
          switch (p.tag) {
            case 3:
              (s = a), (p.flags |= 4096), (t &= -t), (p.lanes |= t);
              var A = rp(p, s, t);
              oh(p, A);
              break e;
            case 1:
              s = a;
              var _ = p.type,
                P = p.stateNode;
              if (
                (p.flags & 64) === 0 &&
                (typeof _.getDerivedStateFromError == 'function' ||
                  (P !== null &&
                    typeof P.componentDidCatch == 'function' &&
                    (We === null || !We.has(P))))
              ) {
                (p.flags |= 4096), (t &= -t), (p.lanes |= t);
                var N = ip(p, s, t);
                oh(p, N);
                break e;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      fp(n);
    } catch (C) {
      (t = C), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function cp() {
  var e = Hs.current;
  return (Hs.current = zs), e === null ? zs : e;
}
function Or(e, t) {
  var n = R;
  R |= 16;
  var r = cp();
  (_e === e && de === t) || Bn(e, t);
  do
    try {
      ty();
      break;
    } catch (i) {
      up(e, i);
    }
  while (1);
  if ((hu(), (R = n), (Hs.current = r), J !== null)) throw Error(v(261));
  return (_e = null), (de = 0), se;
}
function ty() {
  for (; J !== null; ) hp(J);
}
function ny() {
  for (; J !== null && !Uv(); ) hp(J);
}
function hp(e) {
  var t = pp(e.alternate, e, hn);
  (e.memoizedProps = e.pendingProps), t === null ? fp(e) : (J = t), (Su.current = null);
}
function fp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 2048) === 0)) {
      if (((n = Gv(n, t, hn)), n !== null)) {
        J = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          (hn & 1073741824) !== 0 ||
          (n.mode & 4) === 0)
      ) {
        for (var r = 0, i = n.child; i !== null; )
          (r |= i.lanes | i.childLanes), (i = i.sibling);
        n.childLanes = r;
      }
      e !== null &&
        (e.flags & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (((n = Kv(t)), n !== null)) {
        (n.flags &= 2047), (J = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Xt(e) {
  var t = Xn();
  return cn(99, ry.bind(null, e, t)), null;
}
function ry(e, t) {
  do zt();
  while (Hr !== null);
  if ((R & 48) !== 0) throw Error(v(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(v(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    i = r,
    s = e.pendingLanes & ~i;
  (e.pendingLanes = i),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= i),
    (e.mutableReadLanes &= i),
    (e.entangledLanes &= i),
    (i = e.entanglements);
  for (var o = e.eventTimes, l = e.expirationTimes; 0 < s; ) {
    var a = 31 - $t(s),
      u = 1 << a;
    (i[a] = 0), (o[a] = -1), (l[a] = -1), (s &= ~u);
  }
  if (
    (lt !== null && (r & 24) === 0 && lt.has(e) && lt.delete(e),
    e === _e && ((J = _e = null), (de = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (((i = R), (R |= 32), (Su.current = null), (il = cs), (o = Gc()), Wl(o))) {
      if ('selectionStart' in o) l = { start: o.selectionStart, end: o.selectionEnd };
      else
        e: if (
          ((l = ((l = o.ownerDocument) && l.defaultView) || window),
          (u = l.getSelection && l.getSelection()) && u.rangeCount !== 0)
        ) {
          (l = u.anchorNode),
            (s = u.anchorOffset),
            (a = u.focusNode),
            (u = u.focusOffset);
          try {
            l.nodeType, a.nodeType;
          } catch {
            l = null;
            break e;
          }
          var d = 0,
            y = -1,
            p = -1,
            w = 0,
            T = 0,
            k = o,
            f = null;
          t: for (;;) {
            for (
              var c;
              k !== l || (s !== 0 && k.nodeType !== 3) || (y = d + s),
                k !== a || (u !== 0 && k.nodeType !== 3) || (p = d + u),
                k.nodeType === 3 && (d += k.nodeValue.length),
                (c = k.firstChild) !== null;

            )
              (f = k), (k = c);
            for (;;) {
              if (k === o) break t;
              if (
                (f === l && ++w === s && (y = d),
                f === a && ++T === u && (p = d),
                (c = k.nextSibling) !== null)
              )
                break;
              (k = f), (f = k.parentNode);
            }
            k = c;
          }
          l = y === -1 || p === -1 ? null : { start: y, end: p };
        } else l = null;
      l = l || { start: 0, end: 0 };
    } else l = null;
    (sl = { focusedElem: o, selectionRange: l }),
      (cs = !1),
      (br = null),
      (vs = !1),
      (I = r);
    do
      try {
        iy();
      } catch (C) {
        if (I === null) throw Error(v(330));
        Ot(I, C), (I = I.nextEffect);
      }
    while (I !== null);
    (br = null), (I = r);
    do
      try {
        for (o = e; I !== null; ) {
          var h = I.flags;
          if ((h & 16 && Xr(I.stateNode, ''), h & 128)) {
            var g = I.alternate;
            if (g !== null) {
              var m = g.ref;
              m !== null && (typeof m == 'function' ? m(null) : (m.current = null));
            }
          }
          switch (h & 1038) {
            case 2:
              Oh(I), (I.flags &= -3);
              break;
            case 6:
              Oh(I), (I.flags &= -3), fl(I.alternate, I);
              break;
            case 1024:
              I.flags &= -1025;
              break;
            case 1028:
              (I.flags &= -1025), fl(I.alternate, I);
              break;
            case 4:
              fl(I.alternate, I);
              break;
            case 8:
              (l = I), sp(o, l);
              var A = l.alternate;
              Rh(l), A !== null && Rh(A);
          }
          I = I.nextEffect;
        }
      } catch (C) {
        if (I === null) throw Error(v(330));
        Ot(I, C), (I = I.nextEffect);
      }
    while (I !== null);
    if (
      ((m = sl),
      (g = Gc()),
      (h = m.focusedElem),
      (o = m.selectionRange),
      g !== h && h && h.ownerDocument && Id(h.ownerDocument.documentElement, h))
    ) {
      for (
        o !== null &&
          Wl(h) &&
          ((g = o.start),
          (m = o.end),
          m === void 0 && (m = g),
          ('selectionStart' in h)
            ? ((h.selectionStart = g), (h.selectionEnd = Math.min(m, h.value.length)))
            : ((m = ((g = h.ownerDocument || document) && g.defaultView) || window),
              m.getSelection &&
                ((m = m.getSelection()),
                (l = h.textContent.length),
                (A = Math.min(o.start, l)),
                (o = o.end === void 0 ? A : Math.min(o.end, l)),
                !m.extend && A > o && ((l = o), (o = A), (A = l)),
                (l = bc(h, A)),
                (s = bc(h, o)),
                l &&
                  s &&
                  (m.rangeCount !== 1 ||
                    m.anchorNode !== l.node ||
                    m.anchorOffset !== l.offset ||
                    m.focusNode !== s.node ||
                    m.focusOffset !== s.offset) &&
                  ((g = g.createRange()),
                  g.setStart(l.node, l.offset),
                  m.removeAllRanges(),
                  A > o
                    ? (m.addRange(g), m.extend(s.node, s.offset))
                    : (g.setEnd(s.node, s.offset), m.addRange(g)))))),
          g = [],
          m = h;
        (m = m.parentNode);

      )
        m.nodeType === 1 && g.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
      for (typeof h.focus == 'function' && h.focus(), h = 0; h < g.length; h++)
        (m = g[h]), (m.element.scrollLeft = m.left), (m.element.scrollTop = m.top);
    }
    (cs = !!il), (sl = il = null), (e.current = n), (I = r);
    do
      try {
        for (h = e; I !== null; ) {
          var _ = I.flags;
          if ((_ & 36 && Qv(h, I.alternate, I), _ & 128)) {
            g = void 0;
            var P = I.ref;
            if (P !== null) {
              var N = I.stateNode;
              switch (I.tag) {
                case 5:
                  g = N;
                  break;
                default:
                  g = N;
              }
              typeof P == 'function' ? P(g) : (P.current = g);
            }
          }
          I = I.nextEffect;
        }
      } catch (C) {
        if (I === null) throw Error(v(330));
        Ot(I, C), (I = I.nextEffect);
      }
    while (I !== null);
    (I = null), jv(), (R = i);
  } else e.current = n;
  if (Ft) (Ft = !1), (Hr = e), (Nr = t);
  else
    for (I = r; I !== null; )
      (t = I.nextEffect),
        (I.nextEffect = null),
        I.flags & 8 && ((_ = I), (_.sibling = null), (_.stateNode = null)),
        (I = t);
  if (
    ((r = e.pendingLanes),
    r === 0 && (We = null),
    r === 1 ? (e === da ? Wr++ : ((Wr = 0), (da = e))) : (Wr = 0),
    (n = n.stateNode),
    on && typeof on.onCommitFiberRoot == 'function')
  )
    try {
      on.onCommitFiberRoot(uu, n, void 0, (n.current.flags & 64) === 64);
    } catch {}
  if ((Me(e, fe()), Ws)) throw ((Ws = !1), (e = ca), (ca = null), e);
  return (R & 8) !== 0 || Je(), null;
}
function iy() {
  for (; I !== null; ) {
    var e = I.alternate;
    vs ||
      br === null ||
      ((I.flags & 8) !== 0
        ? Oc(I, br) && (vs = !0)
        : I.tag === 13 && Jv(e, I) && Oc(I, br) && (vs = !0));
    var t = I.flags;
    (t & 256) !== 0 && Yv(e, I),
      (t & 512) === 0 ||
        Ft ||
        ((Ft = !0),
        ri(97, function () {
          return zt(), null;
        })),
      (I = I.nextEffect);
  }
}
function zt() {
  if (Nr !== 90) {
    var e = 97 < Nr ? 97 : Nr;
    return (Nr = 90), cn(e, oy);
  }
  return !1;
}
function sy(e, t) {
  ha.push(t, e),
    Ft ||
      ((Ft = !0),
      ri(97, function () {
        return zt(), null;
      }));
}
function dp(e, t) {
  fa.push(t, e),
    Ft ||
      ((Ft = !0),
      ri(97, function () {
        return zt(), null;
      }));
}
function oy() {
  if (Hr === null) return !1;
  var e = Hr;
  if (((Hr = null), (R & 48) !== 0)) throw Error(v(331));
  var t = R;
  R |= 32;
  var n = fa;
  fa = [];
  for (var r = 0; r < n.length; r += 2) {
    var i = n[r],
      s = n[r + 1],
      o = i.destroy;
    if (((i.destroy = void 0), typeof o == 'function'))
      try {
        o();
      } catch (a) {
        if (s === null) throw Error(v(330));
        Ot(s, a);
      }
  }
  for (n = ha, ha = [], r = 0; r < n.length; r += 2) {
    (i = n[r]), (s = n[r + 1]);
    try {
      var l = i.create;
      i.destroy = l();
    } catch (a) {
      if (s === null) throw Error(v(330));
      Ot(s, a);
    }
  }
  for (l = e.current.firstEffect; l !== null; )
    (e = l.nextEffect),
      (l.nextEffect = null),
      l.flags & 8 && ((l.sibling = null), (l.stateNode = null)),
      (l = e);
  return (R = t), Je(), !0;
}
function Dh(e, t, n) {
  (t = Eu(n, t)),
    (t = rp(e, t, 1)),
    At(e, t),
    (t = Ce()),
    (e = Eo(e, 1)),
    e !== null && (fo(e, 1, t), Me(e, t));
}
function Ot(e, t) {
  if (e.tag === 3) Dh(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        Dh(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (We === null || !We.has(r)))
        ) {
          e = Eu(t, e);
          var i = ip(n, e, 1);
          if ((At(n, i), (i = Ce()), (n = Eo(n, 1)), n !== null)) fo(n, 1, i), Me(n, i);
          else if (
            typeof r.componentDidCatch == 'function' &&
            (We === null || !We.has(r))
          )
            try {
              r.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      n = n.return;
    }
}
function ly(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _e === e &&
      (de & n) === n &&
      (se === 4 || (se === 3 && (de & 62914560) === de && 500 > fe() - Tu)
        ? Bn(e, 0)
        : (Iu |= n)),
    Me(e, t);
}
function ay(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) === 0
        ? (t = 1)
        : (t & 4) === 0
        ? (t = Xn() === 99 ? 1 : 2)
        : (tt === 0 && (tt = rr), (t = In(62914560 & ~tt)), t === 0 && (t = 4194304))),
    (n = Ce()),
    (e = Eo(e, t)),
    e !== null && (fo(e, t, n), Me(e, n));
}
var pp;
pp = function (e, t, n) {
  var r = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Be = !0;
    else if ((n & r) !== 0) Be = (e.flags & 16384) !== 0;
    else {
      switch (((Be = !1), t.tag)) {
        case 3:
          _h(t), ul();
          break;
        case 5:
          ch(t);
          break;
        case 1:
          Te(t.type) && ds(t);
          break;
        case 4:
          Jl(t, t.stateNode.containerInfo);
          break;
        case 10:
          r = t.memoizedProps.value;
          var i = t.type._context;
          b(Ls, i._currentValue), (i._currentValue = r);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (n & t.child.childLanes) !== 0
              ? wh(e, t, n)
              : (b(W, W.current & 1), (t = rt(e, t, n)), t !== null ? t.sibling : null);
          b(W, W.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
            if (r) return kh(e, t, n);
            t.flags |= 64;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            b(W, W.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), cl(e, t, n);
      }
      return rt(e, t, n);
    }
  else Be = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (i = qn(t, me.current)),
        Un(t, n),
        (i = vu(null, t, r, e, i, n)),
        (t.flags |= 1),
        typeof i == 'object' &&
          i !== null &&
          typeof i.render == 'function' &&
          i.$$typeof === void 0)
      ) {
        if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), Te(r))) {
          var s = !0;
          ds(t);
        } else s = !1;
        (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
          du(t);
        var o = r.getDerivedStateFromProps;
        typeof o == 'function' && Ms(t, r, o, e),
          (i.updater = _o),
          (t.stateNode = i),
          (i._reactInternals = t),
          Ql(t, r, e, n),
          (t = na(null, t, r, !0, s, n));
      } else (t.tag = 0), Se(null, t, i, n), (t = t.child);
      return t;
    case 16:
      i = t.elementType;
      e: {
        switch (
          (e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (s = i._init),
          (i = s(i._payload)),
          (t.type = i),
          (s = t.tag = cy(i)),
          (e = je(i, e)),
          s)
        ) {
          case 0:
            t = ta(null, t, i, e, n);
            break e;
          case 1:
            t = yh(null, t, i, e, n);
            break e;
          case 11:
            t = mh(null, t, i, e, n);
            break e;
          case 14:
            t = vh(null, t, i, je(i.type, e), r, n);
            break e;
        }
        throw Error(v(306, i, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        ta(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        yh(e, t, r, i, n)
      );
    case 3:
      if ((_h(t), (r = t.updateQueue), e === null || r === null)) throw Error(v(282));
      if (
        ((r = t.pendingProps),
        (i = t.memoizedState),
        (i = i !== null ? i.element : null),
        jd(e, t),
        ii(t, r, null, n),
        (r = t.memoizedState.element),
        r === i)
      )
        ul(), (t = rt(e, t, n));
      else {
        if (
          ((i = t.stateNode),
          (s = i.hydrate) &&
            ((It = $n(t.stateNode.containerInfo.firstChild)), (nt = t), (s = qe = !0)),
          s)
        ) {
          if (((e = i.mutableSourceEagerHydrationData), e != null))
            for (i = 0; i < e.length; i += 2)
              (s = e[i]), (s._workInProgressVersionPrimary = e[i + 1]), Fn.push(s);
          for (n = Hd(t, null, r, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else Se(e, t, r, n), ul();
        t = t.child;
      }
      return t;
    case 5:
      return (
        ch(t),
        e === null && Zl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Kl(r, i) ? (o = null) : s !== null && Kl(r, s) && (t.flags |= 16),
        Zd(e, t),
        Se(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Zl(t), null;
    case 13:
      return wh(e, t, n);
    case 4:
      return (
        Jl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $s(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        mh(e, t, r, i, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context), (i = t.pendingProps), (o = t.memoizedProps), (s = i.value);
        var l = t.type._context;
        if ((b(Ls, l._currentValue), (l._currentValue = s), o !== null))
          if (
            ((l = o.value),
            (s = Ne(l, s)
              ? 0
              : (typeof r._calculateChangedBits == 'function'
                  ? r._calculateChangedBits(l, s)
                  : 1073741823) | 0),
            s === 0)
          ) {
            if (o.children === i.children && !Ie.current) {
              t = rt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                o = l.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r && (u.observedBits & s) !== 0) {
                    l.tag === 1 && ((u = Pt(-1, n & -n)), (u.tag = 2), At(l, u)),
                      (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      Fd(l.return, n),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else o = l.tag === 10 && l.type === t.type ? null : l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        Se(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (s = t.pendingProps),
        (r = s.children),
        Un(t, n),
        (i = xe(i, s.unstable_observedBits)),
        (r = r(i)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (s = je(i, t.pendingProps)),
        (s = je(i.type, s)),
        vh(e, t, i, s, r, n)
      );
    case 15:
      return Jd(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        Te(r) ? ((e = !0), ds(t)) : (e = !1),
        Un(t, n),
        Vd(t, r, i),
        Ql(t, r, i, n),
        na(null, t, r, !0, e, n)
      );
    case 19:
      return kh(e, t, n);
    case 23:
      return cl(e, t, n);
    case 24:
      return cl(e, t, n);
  }
  throw Error(v(156, t.tag));
};
function uy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Oe(e, t, n, r) {
  return new uy(e, t, n, r);
}
function Cu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function cy(e) {
  if (typeof e == 'function') return Cu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === uo)) return 11;
    if (e === co) return 14;
  }
  return 2;
}
function jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ys(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Cu(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case mt:
        return Vn(n.children, i, s, t);
      case Wf:
        (o = 8), (i |= 16);
        break;
      case za:
        (o = 8), (i |= 1);
        break;
      case xr:
        return (
          (e = Oe(12, n, t, i | 8)), (e.elementType = xr), (e.type = xr), (e.lanes = s), e
        );
      case Mr:
        return (
          (e = Oe(13, n, t, i)), (e.type = Mr), (e.elementType = Mr), (e.lanes = s), e
        );
      case Is:
        return (e = Oe(19, n, t, i)), (e.elementType = Is), (e.lanes = s), e;
      case qa:
        return Pu(n, i, s, t);
      case Rl:
        return (e = Oe(24, n, t, i)), (e.elementType = Rl), (e.lanes = s), e;
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ha:
              o = 10;
              break e;
            case Wa:
              o = 9;
              break e;
            case uo:
              o = 11;
              break e;
            case co:
              o = 14;
              break e;
            case ba:
              (o = 16), (r = null);
              break e;
            case Ga:
              o = 22;
              break e;
          }
        throw Error(v(130, e == null ? e : typeof e, ''));
    }
  return (t = Oe(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
}
function Vn(e, t, n, r) {
  return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function Pu(e, t, n, r) {
  return (e = Oe(23, e, r, t)), (e.elementType = qa), (e.lanes = n), e;
}
function dl(e, t, n) {
  return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function pl(e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function hy(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qo(0)),
    (this.expirationTimes = Qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qo(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function fy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bs(e, t, n, r) {
  var i = t.current,
    s = Ce(),
    o = Rt(i);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (vn(n) !== n || n.tag !== 1) throw Error(v(170));
      var l = n;
      do {
        switch (l.tag) {
          case 3:
            l = l.stateNode.context;
            break t;
          case 1:
            if (Te(l.type)) {
              l = l.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        l = l.return;
      } while (l !== null);
      throw Error(v(171));
    }
    if (n.tag === 1) {
      var a = n.type;
      if (Te(a)) {
        n = Od(n, a, l);
        break e;
      }
    }
    n = l;
  } else n = Ut;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Pt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    At(i, t),
    Nt(i, o, s),
    o
  );
}
function gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Au(e, t) {
  xh(e, t), (e = e.alternate) && xh(e, t);
}
function dy() {
  return null;
}
function Ru(e, t, n) {
  var r =
    (n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources) ||
    null;
  if (
    ((n = new hy(e, t, n != null && n.hydrate === !0)),
    (t = Oe(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    du(t),
    (e[nr] = n.current),
    Cd(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e];
      var i = t._getVersion;
      (i = i(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, i])
          : n.mutableSourceEagerHydrationData.push(t, i);
    }
  this._internalRoot = n;
}
Ru.prototype.render = function (e) {
  bs(e, this._internalRoot, null, null);
};
Ru.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  bs(null, e, null, function () {
    t[nr] = null;
  });
};
function Pi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function py(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute('data-reactroot')))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new Ru(e, 0, t ? { hydrate: !0 } : void 0);
}
function So(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s._internalRoot;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var u = gl(o);
        l.call(u);
      };
    }
    bs(t, o, e, i);
  } else {
    if (
      ((s = n._reactRootContainer = py(n, r)),
      (o = s._internalRoot),
      typeof i == 'function')
    ) {
      var a = i;
      i = function () {
        var u = gl(o);
        a.call(u);
      };
    }
    ap(function () {
      bs(t, o, e, i);
    });
  }
  return gl(o);
}
sd = function (e) {
  if (e.tag === 13) {
    var t = Ce();
    Nt(e, 4, t), Au(e, 4);
  }
};
Za = function (e) {
  if (e.tag === 13) {
    var t = Ce();
    Nt(e, 67108864, t), Au(e, 67108864);
  }
};
od = function (e) {
  if (e.tag === 13) {
    var t = Ce(),
      n = Rt(e);
    Nt(e, n, t), Au(e, n);
  }
};
ld = function (e, t) {
  return t();
};
jl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ol(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = vo(r);
            if (!i) throw Error(v(90));
            Gf(r), Ol(r, i);
          }
        }
      }
      break;
    case 'textarea':
      qf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
  }
};
Ya = lp;
td = function (e, t, n, r, i) {
  var s = R;
  R |= 4;
  try {
    return cn(98, e.bind(null, t, n, r, i));
  } finally {
    (R = s), R === 0 && (sr(), Je());
  }
};
Qa = function () {
  (R & 49) === 0 && (ey(), zt());
};
nd = function (e, t) {
  var n = R;
  R |= 2;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && (sr(), Je());
  }
};
function gp(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pi(t)) throw Error(v(200));
  return fy(e, t, null, n);
}
var gy = { Events: [Ti, Pn, vo, Zf, ed, zt, { current: !1 }] },
  Ir = {
    findFiberByHostInstance: Zt,
    bundleType: 0,
    version: '17.0.2',
    rendererPackageName: 'react-dom',
  },
  my = {
    bundleType: Ir.bundleType,
    version: Ir.version,
    rendererPackageName: Ir.rendererPackageName,
    rendererConfig: Ir.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = id(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ir.findFiberByHostInstance || dy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined') {
  var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ns.isDisabled && ns.supportsFiber)
    try {
      (uu = ns.inject(my)), (on = ns);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy;
Ue.createPortal = gp;
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(v(188)) : Error(v(268, Object.keys(e)));
  return (e = id(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e, t) {
  var n = R;
  if ((n & 48) !== 0) return e(t);
  R |= 1;
  try {
    if (e) return cn(99, e.bind(null, t));
  } finally {
    (R = n), Je();
  }
};
Ue.hydrate = function (e, t, n) {
  if (!Pi(t)) throw Error(v(200));
  return So(null, e, t, !0, n);
};
Ue.render = function (e, t, n) {
  if (!Pi(t)) throw Error(v(200));
  return So(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!Pi(e)) throw Error(v(40));
  return e._reactRootContainer
    ? (ap(function () {
        So(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nr] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = lp;
Ue.unstable_createPortal = function (e, t) {
  return gp(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pi(n)) throw Error(v(200));
  if (e == null || e._reactInternals === void 0) throw Error(v(38));
  return So(e, t, n, !1, r);
};
Ue.version = '17.0.2';
function mp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp);
    } catch (e) {
      console.error(e);
    }
}
mp(), (Bf.exports = Ue);
var vy = Bf.exports;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vp = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  yy = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = e[n++],
          o = e[n++],
          l = e[n++],
          a = (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) - 65536;
        (t[r++] = String.fromCharCode(55296 + (a >> 10))),
          (t[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const s = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(((i & 15) << 12) | ((s & 63) << 6) | (o & 63));
      }
    }
    return t.join('');
  },
  yp = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(e, t) {
      if (!Array.isArray(e)) throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const s = e[i],
          o = i + 1 < e.length,
          l = o ? e[i + 1] : 0,
          a = i + 2 < e.length,
          u = a ? e[i + 2] : 0,
          d = s >> 2,
          y = ((s & 3) << 4) | (l >> 4);
        let p = ((l & 15) << 2) | (u >> 6),
          w = u & 63;
        a || ((w = 64), o || (p = 64)), r.push(n[d], n[y], n[p], n[w]);
      }
      return r.join('');
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(vp(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : yy(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const s = n[e.charAt(i++)],
          l = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const y = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, s == null || l == null || u == null || y == null)) throw new _y();
        const p = (s << 2) | (l >> 4);
        if ((r.push(p), u !== 64)) {
          const w = ((l << 4) & 240) | (u >> 2);
          if ((r.push(w), y !== 64)) {
            const T = ((u << 6) & 192) | y;
            r.push(T);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class _y extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const wy = function (e) {
    const t = vp(e);
    return yp.encodeByteArray(t, !0);
  },
  Gs = function (e) {
    return wy(e).replace(/\./g, '');
  },
  _p = function (e) {
    try {
      return yp.decodeString(e, !0);
    } catch (t) {
      console.error('base64Decode failed: ', t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ey() {
  if (typeof self != 'undefined') return self;
  if (typeof window != 'undefined') return window;
  if (typeof global != 'undefined') return global;
  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sy = () => Ey().__FIREBASE_DEFAULTS__,
  Iy = () => {
    if (typeof process == 'undefined' || typeof process.env == 'undefined') return;
    const e = {}.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  Ty = () => {
    if (typeof document == 'undefined') return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && _p(e[1]);
    return t && JSON.parse(t);
  },
  Nu = () => {
    try {
      return Sy() || Iy() || Ty();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  wp = (e) => {
    var t, n;
    return (n = (t = Nu()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  ky = (e) => {
    const t = wp(e);
    if (!t) return;
    const n = t.lastIndexOf(':');
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(n + 1), 10);
    return t[0] === '[' ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
  },
  Ep = () => {
    var e;
    return (e = Nu()) === null || e === void 0 ? void 0 : e.config;
  },
  Sp = (e) => {
    var t;
    return (t = Nu()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cy {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == 'function' &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Py(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.',
    );
  const n = { alg: 'none', type: 'JWT' },
    r = t || 'demo-project',
    i = e.iat || 0,
    s = e.sub || e.user_id;
  if (!s) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
      {
        iss: `https://securetoken.google.com/${r}`,
        aud: r,
        iat: i,
        exp: i + 3600,
        auth_time: i,
        sub: s,
        user_id: s,
        firebase: { sign_in_provider: 'custom', identities: {} },
      },
      e,
    ),
    l = '';
  return [Gs(JSON.stringify(n)), Gs(JSON.stringify(o)), l].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ve() {
  return typeof navigator != 'undefined' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function Ay() {
  return (
    typeof window != 'undefined' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())
  );
}
function Ry() {
  const e =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
      ? browser.runtime
      : void 0;
  return typeof e == 'object' && e.id !== void 0;
}
function Ny() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function Oy() {
  const e = ve();
  return e.indexOf('MSIE ') >= 0 || e.indexOf('Trident/') >= 0;
}
function Ly() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function Dy() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          t(((s = i.error) === null || s === void 0 ? void 0 : s.message) || '');
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xy = 'FirebaseError';
class dt extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = xy),
      Object.setPrototypeOf(this, dt.prototype),
      Error.captureStackTrace && Error.captureStackTrace(this, Ai.prototype.create);
  }
}
class Ai {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      s = this.errors[t],
      o = s ? My(s, r) : 'Error',
      l = `${this.serviceName}: ${o} (${i}).`;
    return new dt(i, l, r);
  }
}
function My(e, t) {
  return e.replace($y, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const $y = /\{\$([^}]+)}/g;
function Uy(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function Ks(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = e[i],
      o = t[i];
    if (Mh(s) && Mh(o)) {
      if (!Ks(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Mh(e) {
  return e !== null && typeof e == 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ri(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + '=' + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + '=' + encodeURIComponent(r));
  return t.length ? '&' + t.join('&') : '';
}
function Fy(e, t) {
  const n = new jy(e, t);
  return n.subscribe.bind(n);
}
class jy {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error('Missing Observer.');
    By(t, ['next', 'error', 'complete'])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = ml),
      i.error === void 0 && (i.error = ml),
      i.complete === void 0 && (i.complete = ml);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console != 'undefined' && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function By(e, t) {
  if (typeof e != 'object' || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == 'function') return !0;
  return !1;
}
function ml() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ht(e) {
  return e && e._delegate ? e._delegate : e;
}
class fn {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yt = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vy {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new Cy();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier),
      i = (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (Hy(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Yt });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(t = Yt) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => '_delete' in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Yt) {
    return this.instances.has(t);
  }
  getOptions(t = Yt) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({ instanceIdentifier: r, options: n });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set();
    s.add(t), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && t(o, i),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (!!r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: zy(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Yt) {
    return this.component ? (this.component.multipleInstances ? t : Yt) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function zy(e) {
  return e === Yt ? void 0 : e;
}
function Hy(e) {
  return e.instantiationMode === 'EAGER';
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wy {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`,
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new Vy(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var U;
(function (e) {
  (e[(e.DEBUG = 0)] = 'DEBUG'),
    (e[(e.VERBOSE = 1)] = 'VERBOSE'),
    (e[(e.INFO = 2)] = 'INFO'),
    (e[(e.WARN = 3)] = 'WARN'),
    (e[(e.ERROR = 4)] = 'ERROR'),
    (e[(e.SILENT = 5)] = 'SILENT');
})(U || (U = {}));
const by = {
    debug: U.DEBUG,
    verbose: U.VERBOSE,
    info: U.INFO,
    warn: U.WARN,
    error: U.ERROR,
    silent: U.SILENT,
  },
  Gy = U.INFO,
  Ky = {
    [U.DEBUG]: 'log',
    [U.VERBOSE]: 'log',
    [U.INFO]: 'info',
    [U.WARN]: 'warn',
    [U.ERROR]: 'error',
  },
  qy = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = Ky[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
  };
class Ou {
  constructor(t) {
    (this.name = t),
      (this._logLevel = Gy),
      (this._logHandler = qy),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in U)) throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == 'string' ? by[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, U.DEBUG, ...t),
      this._logHandler(this, U.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, U.VERBOSE, ...t),
      this._logHandler(this, U.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, U.INFO, ...t),
      this._logHandler(this, U.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, U.WARN, ...t),
      this._logHandler(this, U.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, U.ERROR, ...t),
      this._logHandler(this, U.ERROR, ...t);
  }
}
const Xy = (e, t) => t.some((n) => e instanceof n);
let $h, Uh;
function Yy() {
  return $h || ($h = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function Qy() {
  return (
    Uh ||
    (Uh = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Ip = new WeakMap(),
  ga = new WeakMap(),
  Tp = new WeakMap(),
  vl = new WeakMap(),
  Lu = new WeakMap();
function Jy(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener('success', s), e.removeEventListener('error', o);
      },
      s = () => {
        n(Lt(e.result)), i();
      },
      o = () => {
        r(e.error), i();
      };
    e.addEventListener('success', s), e.addEventListener('error', o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Ip.set(n, e);
      })
      .catch(() => {}),
    Lu.set(t, e),
    t
  );
}
function Zy(e) {
  if (ga.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener('complete', s),
          e.removeEventListener('error', o),
          e.removeEventListener('abort', o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(e.error || new DOMException('AbortError', 'AbortError')), i();
      };
    e.addEventListener('complete', s),
      e.addEventListener('error', o),
      e.addEventListener('abort', o);
  });
  ga.set(e, t);
}
let ma = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === 'done') return ga.get(e);
      if (t === 'objectStoreNames') return e.objectStoreNames || Tp.get(e);
      if (t === 'store')
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return Lt(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === 'done' || t === 'store') ? !0 : t in e;
  },
};
function e0(e) {
  ma = e(ma);
}
function t0(e) {
  return e === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(yl(this), t, ...n);
        return Tp.set(r, t.sort ? t.sort() : [t]), Lt(r);
      }
    : Qy().includes(e)
    ? function (...t) {
        return e.apply(yl(this), t), Lt(Ip.get(this));
      }
    : function (...t) {
        return Lt(e.apply(yl(this), t));
      };
}
function n0(e) {
  return typeof e == 'function'
    ? t0(e)
    : (e instanceof IDBTransaction && Zy(e), Xy(e, Yy()) ? new Proxy(e, ma) : e);
}
function Lt(e) {
  if (e instanceof IDBRequest) return Jy(e);
  if (vl.has(e)) return vl.get(e);
  const t = n0(e);
  return t !== e && (vl.set(e, t), Lu.set(t, e)), t;
}
const yl = (e) => Lu.get(e);
function r0(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(e, t),
    l = Lt(o);
  return (
    r &&
      o.addEventListener('upgradeneeded', (a) => {
        r(Lt(o.result), a.oldVersion, a.newVersion, Lt(o.transaction), a);
      }),
    n && o.addEventListener('blocked', (a) => n(a.oldVersion, a.newVersion, a)),
    l
      .then((a) => {
        s && a.addEventListener('close', () => s()),
          i &&
            a.addEventListener('versionchange', (u) => i(u.oldVersion, u.newVersion, u));
      })
      .catch(() => {}),
    l
  );
}
const i0 = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  s0 = ['put', 'add', 'delete', 'clear'],
  _l = new Map();
function Fh(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == 'string')) return;
  if (_l.get(t)) return _l.get(t);
  const n = t.replace(/FromIndex$/, ''),
    r = t !== n,
    i = s0.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || i0.includes(n))) return;
  const s = async function (o, ...l) {
    const a = this.transaction(o, i ? 'readwrite' : 'readonly');
    let u = a.store;
    return (
      r && (u = u.index(l.shift())), (await Promise.all([u[n](...l), i && a.done]))[0]
    );
  };
  return _l.set(t, s), s;
}
e0((e) => ({
  ...e,
  get: (t, n, r) => Fh(t, n) || e.get(t, n, r),
  has: (t, n) => !!Fh(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o0 {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (l0(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(' ');
  }
}
function l0(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === 'VERSION';
}
const va = '@firebase/app',
  jh = '0.9.18';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dn = new Ou('@firebase/app'),
  a0 = '@firebase/app-compat',
  u0 = '@firebase/analytics-compat',
  c0 = '@firebase/analytics',
  h0 = '@firebase/app-check-compat',
  f0 = '@firebase/app-check',
  d0 = '@firebase/auth',
  p0 = '@firebase/auth-compat',
  g0 = '@firebase/database',
  m0 = '@firebase/database-compat',
  v0 = '@firebase/functions',
  y0 = '@firebase/functions-compat',
  _0 = '@firebase/installations',
  w0 = '@firebase/installations-compat',
  E0 = '@firebase/messaging',
  S0 = '@firebase/messaging-compat',
  I0 = '@firebase/performance',
  T0 = '@firebase/performance-compat',
  k0 = '@firebase/remote-config',
  C0 = '@firebase/remote-config-compat',
  P0 = '@firebase/storage',
  A0 = '@firebase/storage-compat',
  R0 = '@firebase/firestore',
  N0 = '@firebase/firestore-compat',
  O0 = 'firebase',
  L0 = '10.3.1';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ya = '[DEFAULT]',
  D0 = {
    [va]: 'fire-core',
    [a0]: 'fire-core-compat',
    [c0]: 'fire-analytics',
    [u0]: 'fire-analytics-compat',
    [f0]: 'fire-app-check',
    [h0]: 'fire-app-check-compat',
    [d0]: 'fire-auth',
    [p0]: 'fire-auth-compat',
    [g0]: 'fire-rtdb',
    [m0]: 'fire-rtdb-compat',
    [v0]: 'fire-fn',
    [y0]: 'fire-fn-compat',
    [_0]: 'fire-iid',
    [w0]: 'fire-iid-compat',
    [E0]: 'fire-fcm',
    [S0]: 'fire-fcm-compat',
    [I0]: 'fire-perf',
    [T0]: 'fire-perf-compat',
    [k0]: 'fire-rc',
    [C0]: 'fire-rc-compat',
    [P0]: 'fire-gcs',
    [A0]: 'fire-gcs-compat',
    [R0]: 'fire-fst',
    [N0]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [O0]: 'fire-js-all',
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qs = new Map(),
  _a = new Map();
function x0(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    dn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n);
  }
}
function Qn(e) {
  const t = e.name;
  if (_a.has(t))
    return dn.debug(`There were multiple attempts to register component ${t}.`), !1;
  _a.set(t, e);
  for (const n of qs.values()) x0(n, e);
  return !0;
}
function Du(e, t) {
  const n = e.container.getProvider('heartbeat').getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const M0 = {
    ['no-app']:
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    ['bad-app-name']: "Illegal App name: '{$appName}",
    ['duplicate-app']:
      "Firebase App named '{$appName}' already exists with different options or config",
    ['app-deleted']: "Firebase App named '{$appName}' already deleted",
    ['no-options']:
      'Need to provide options, when not being deployed to hosting via source.',
    ['invalid-app-argument']:
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    ['invalid-log-argument']: 'First argument to `onLog` must be null or a function.',
    ['idb-open']:
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    ['idb-get']:
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    ['idb-set']:
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    ['idb-delete']:
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
  },
  Dt = new Ai('app', 'Firebase', M0);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $0 {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new fn('app', () => this, 'PUBLIC'));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Dt.create('app-deleted', { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const or = L0;
function kp(e, t = {}) {
  let n = e;
  typeof t != 'object' && (t = { name: t });
  const r = Object.assign({ name: ya, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != 'string' || !i) throw Dt.create('bad-app-name', { appName: String(i) });
  if ((n || (n = Ep()), !n)) throw Dt.create('no-options');
  const s = qs.get(i);
  if (s) {
    if (Ks(n, s.options) && Ks(r, s.config)) return s;
    throw Dt.create('duplicate-app', { appName: i });
  }
  const o = new Wy(i);
  for (const a of _a.values()) o.addComponent(a);
  const l = new $0(n, r, o);
  return qs.set(i, l), l;
}
function Cp(e = ya) {
  const t = qs.get(e);
  if (!t && e === ya && Ep()) return kp();
  if (!t) throw Dt.create('no-app', { appName: e });
  return t;
}
function xt(e, t, n) {
  var r;
  let i = (r = D0[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (s || o) {
    const l = [`Unable to register library "${i}" with version "${t}":`];
    s && l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
      s && o && l.push('and'),
      o && l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
      dn.warn(l.join(' '));
    return;
  }
  Qn(new fn(`${i}-version`, () => ({ library: i, version: t }), 'VERSION'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const U0 = 'firebase-heartbeat-database',
  F0 = 1,
  ai = 'firebase-heartbeat-store';
let wl = null;
function Pp() {
  return (
    wl ||
      (wl = r0(U0, F0, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              e.createObjectStore(ai);
          }
        },
      }).catch((e) => {
        throw Dt.create('idb-open', { originalErrorMessage: e.message });
      })),
    wl
  );
}
async function j0(e) {
  try {
    return await (await Pp()).transaction(ai).objectStore(ai).get(Ap(e));
  } catch (t) {
    if (t instanceof dt) dn.warn(t.message);
    else {
      const n = Dt.create('idb-get', {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      dn.warn(n.message);
    }
  }
}
async function Bh(e, t) {
  try {
    const r = (await Pp()).transaction(ai, 'readwrite');
    await r.objectStore(ai).put(t, Ap(e)), await r.done;
  } catch (n) {
    if (n instanceof dt) dn.warn(n.message);
    else {
      const r = Dt.create('idb-set', {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      dn.warn(r.message);
    }
  }
}
function Ap(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const B0 = 1024,
  V0 = 30 * 24 * 60 * 60 * 1e3;
class z0 {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider('app').getImmediate();
    (this._storage = new W0(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider('platform-logger')
        .getImmediate()
        .getPlatformInfoString(),
      r = Vh();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(
          (i) => {
            const s = new Date(i.date).valueOf();
            return Date.now() - s <= V0;
          },
        )),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
    )
      return '';
    const t = Vh(),
      { heartbeatsToSend: n, unsentEntries: r } = H0(this._heartbeatsCache.heartbeats),
      i = Gs(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = t),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function Vh() {
  return new Date().toISOString().substring(0, 10);
}
function H0(e, t = B0) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), zh(n) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), zh(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class W0 {
  constructor(t) {
    (this.app = t), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Ly()
      ? Dy()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await j0(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Bh(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Bh(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function zh(e) {
  return Gs(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function b0(e) {
  Qn(new fn('platform-logger', (t) => new o0(t), 'PRIVATE')),
    Qn(new fn('heartbeat', (t) => new z0(t), 'PRIVATE')),
    xt(va, jh, e),
    xt(va, jh, 'esm2017'),
    xt('fire-js', '');
}
b0('');
var G0 = 'firebase',
  K0 = '10.3.1';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ xt(G0, K0, 'app');
function xu(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Rp() {
  return {
    ['dependent-sdk-initialized-before-auth']:
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
  };
}
const q0 = Rp,
  Np = new Ai('auth', 'Firebase', Rp());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xs = new Ou('@firebase/auth');
function X0(e, ...t) {
  Xs.logLevel <= U.WARN && Xs.warn(`Auth (${or}): ${e}`, ...t);
}
function _s(e, ...t) {
  Xs.logLevel <= U.ERROR && Xs.error(`Auth (${or}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ut(e, ...t) {
  throw Mu(e, ...t);
}
function Xe(e, ...t) {
  return Mu(e, ...t);
}
function Y0(e, t, n) {
  const r = Object.assign(Object.assign({}, q0()), { [t]: n });
  return new Ai('auth', 'Firebase', r).create(t, { appName: e.name });
}
function Mu(e, ...t) {
  if (typeof e != 'string') {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return Np.create(e, ...t);
}
function D(e, t, ...n) {
  if (!e) throw Mu(t, ...n);
}
function it(e) {
  const t = 'INTERNAL ASSERTION FAILED: ' + e;
  throw (_s(t), new Error(t));
}
function ct(e, t) {
  e || it(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wa() {
  var e;
  return (
    (typeof self != 'undefined' &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ''
  );
}
function Q0() {
  return Hh() === 'http:' || Hh() === 'https:';
}
function Hh() {
  var e;
  return (
    (typeof self != 'undefined' &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function J0() {
  return typeof navigator != 'undefined' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (Q0() || Ry() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function Z0() {
  if (typeof navigator == 'undefined') return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ni {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      ct(n > t, 'Short delay should be less than long delay!'),
      (this.isMobile = Ay() || Ny());
  }
  get() {
    return J0()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $u(e, t) {
  ct(e.emulator, 'Emulator should always be set here');
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith('/') ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Op {
  static initialize(t, n, r) {
    (this.fetchImpl = t), n && (this.headersImpl = n), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self != 'undefined' && 'fetch' in self) return self.fetch;
    it(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self != 'undefined' && 'Headers' in self) return self.Headers;
    it(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self != 'undefined' && 'Response' in self) return self.Response;
    it(
      'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const e1 = {
  CREDENTIAL_MISMATCH: 'custom-token-mismatch',
  MISSING_CUSTOM_TOKEN: 'internal-error',
  INVALID_IDENTIFIER: 'invalid-email',
  MISSING_CONTINUE_URI: 'internal-error',
  INVALID_PASSWORD: 'wrong-password',
  MISSING_PASSWORD: 'missing-password',
  EMAIL_EXISTS: 'email-already-in-use',
  PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
  INVALID_IDP_RESPONSE: 'invalid-credential',
  INVALID_PENDING_TOKEN: 'invalid-credential',
  FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
  MISSING_REQ_TYPE: 'internal-error',
  EMAIL_NOT_FOUND: 'user-not-found',
  RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
  EXPIRED_OOB_CODE: 'expired-action-code',
  INVALID_OOB_CODE: 'invalid-action-code',
  MISSING_OOB_CODE: 'internal-error',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
  INVALID_ID_TOKEN: 'invalid-user-token',
  TOKEN_EXPIRED: 'user-token-expired',
  USER_NOT_FOUND: 'user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
  INVALID_CODE: 'invalid-verification-code',
  INVALID_SESSION_INFO: 'invalid-verification-id',
  INVALID_TEMPORARY_PROOF: 'invalid-credential',
  MISSING_SESSION_INFO: 'missing-verification-id',
  SESSION_EXPIRED: 'code-expired',
  MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
  UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
  INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
  ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
  INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
  MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
  MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
  MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
  SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
  BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
  RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
  MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
  INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
  INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
  MISSING_CLIENT_TYPE: 'missing-client-type',
  MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
  INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
  INVALID_REQ_TYPE: 'invalid-req-type',
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const t1 = new Ni(3e4, 6e4);
function Uu(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function Oi(e, t, n, r, i = {}) {
  return Lp(e, i, async () => {
    let s = {},
      o = {};
    r && (t === 'GET' ? (o = r) : (s = { body: JSON.stringify(r) }));
    const l = Ri(Object.assign({ key: e.config.apiKey }, o)).slice(1),
      a = await e._getAdditionalHeaders();
    return (
      (a['Content-Type'] = 'application/json'),
      e.languageCode && (a['X-Firebase-Locale'] = e.languageCode),
      Op.fetch()(
        xp(e, e.config.apiHost, n, l),
        Object.assign({ method: t, headers: a, referrerPolicy: 'no-referrer' }, s),
      )
    );
  });
}
async function Lp(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, e1), t);
  try {
    const i = new n1(e),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ('needConfirmation' in o)
      throw rs(e, 'account-exists-with-different-credential', o);
    if (s.ok && !('errorMessage' in o)) return o;
    {
      const l = s.ok ? o.errorMessage : o.error.message,
        [a, u] = l.split(' : ');
      if (a === 'FEDERATED_USER_ID_ALREADY_LINKED')
        throw rs(e, 'credential-already-in-use', o);
      if (a === 'EMAIL_EXISTS') throw rs(e, 'email-already-in-use', o);
      if (a === 'USER_DISABLED') throw rs(e, 'user-disabled', o);
      const d = r[a] || a.toLowerCase().replace(/[_\s]+/g, '-');
      if (u) throw Y0(e, d, u);
      ut(e, d);
    }
  } catch (i) {
    if (i instanceof dt) throw i;
    ut(e, 'network-request-failed', { message: String(i) });
  }
}
async function Dp(e, t, n, r, i = {}) {
  const s = await Oi(e, t, n, r, i);
  return (
    'mfaPendingCredential' in s &&
      ut(e, 'multi-factor-auth-required', { _serverResponse: s }),
    s
  );
}
function xp(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? $u(e.config, i) : `${e.config.apiScheme}://${i}`;
}
class n1 {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(Xe(this.auth, 'network-request-failed')),
          t1.get(),
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function rs(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = Xe(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function r1(e, t) {
  return Oi(e, 'POST', '/v1/accounts:delete', t);
}
async function i1(e, t) {
  return Oi(e, 'POST', '/v1/accounts:lookup', t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gr(e) {
  if (!!e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function s1(e, t = !1) {
  const n = Ht(e),
    r = await n.getIdToken(t),
    i = Fu(r);
  D(i && i.exp && i.auth_time && i.iat, n.auth, 'internal-error');
  const s = typeof i.firebase == 'object' ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Gr(El(i.auth_time)),
    issuedAtTime: Gr(El(i.iat)),
    expirationTime: Gr(El(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function El(e) {
  return Number(e) * 1e3;
}
function Fu(e) {
  const [t, n, r] = e.split('.');
  if (t === void 0 || n === void 0 || r === void 0)
    return _s('JWT malformed, contained fewer than 3 sections'), null;
  try {
    const i = _p(n);
    return i ? JSON.parse(i) : (_s('Failed to decode base64 JWT payload'), null);
  } catch (i) {
    return (
      _s('Caught error parsing JWT payload as JSON', i == null ? void 0 : i.toString()),
      null
    );
  }
}
function o1(e) {
  const t = Fu(e);
  return (
    D(t, 'internal-error'),
    D(typeof t.exp != 'undefined', 'internal-error'),
    D(typeof t.iat != 'undefined', 'internal-error'),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ui(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof dt && l1(r) && e.auth.currentUser === e && (await e.auth.signOut()),
      r)
    );
  }
}
function l1({ code: e }) {
  return e === 'auth/user-disabled' || e === 'auth/user-token-expired';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a1 {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    !this.isRunning ||
      ((this.isRunning = !1), this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === 'auth/network-request-failed' &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mp {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Gr(this.lastLoginAt)),
      (this.creationTime = Gr(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ys(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await ui(e, i1(n, { idToken: r }));
  D(i == null ? void 0 : i.users.length, n, 'internal-error');
  const s = i.users[0];
  e._notifyReloadListener(s);
  const o =
      !((t = s.providerUserInfo) === null || t === void 0) && t.length
        ? h1(s.providerUserInfo)
        : [],
    l = c1(e.providerData, o),
    a = e.isAnonymous,
    u = !(e.email && s.passwordHash) && !(l != null && l.length),
    d = a ? u : !1,
    y = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: l,
      metadata: new Mp(s.createdAt, s.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(e, y);
}
async function u1(e) {
  const t = Ht(e);
  await Ys(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t);
}
function c1(e, t) {
  return [...e.filter((r) => !t.some((i) => i.providerId === r.providerId)), ...t];
}
function h1(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = xu(t, ['providerId']);
    return {
      providerId: n,
      uid: r.rawId || '',
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function f1(e, t) {
  const n = await Lp(e, {}, async () => {
    const r = Ri({ grant_type: 'refresh_token', refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: s } = e.config,
      o = xp(e, i, '/v1/token', `key=${s}`),
      l = await e._getAdditionalHeaders();
    return (
      (l['Content-Type'] = 'application/x-www-form-urlencoded'),
      Op.fetch()(o, { method: 'POST', headers: l, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ci {
  constructor() {
    (this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    D(t.idToken, 'internal-error'),
      D(typeof t.idToken != 'undefined', 'internal-error'),
      D(typeof t.refreshToken != 'undefined', 'internal-error');
    const n =
      'expiresIn' in t && typeof t.expiresIn != 'undefined'
        ? Number(t.expiresIn)
        : o1(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  async getToken(t, n = !1) {
    return (
      D(!this.accessToken || this.refreshToken, t, 'user-token-expired'),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
        ? (await this.refresh(t, this.refreshToken), this.accessToken)
        : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await f1(t, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new ci();
    return (
      r &&
        (D(typeof r == 'string', 'internal-error', { appName: t }), (o.refreshToken = r)),
      i &&
        (D(typeof i == 'string', 'internal-error', { appName: t }), (o.accessToken = i)),
      s &&
        (D(typeof s == 'number', 'internal-error', { appName: t }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new ci(), this.toJSON());
  }
  _performRefresh() {
    return it('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pt(e, t) {
  D(typeof e == 'string' || typeof e == 'undefined', 'internal-error', { appName: t });
}
class ln {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      s = xu(t, ['uid', 'auth', 'stsTokenManager']);
    (this.providerId = 'firebase'),
      (this.proactiveRefresh = new a1(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Mp(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await ui(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      D(n, this.auth, 'internal-error'),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return s1(this, t);
  }
  reload() {
    return u1(this);
  }
  _assign(t) {
    this !== t &&
      (D(this.uid === t.uid, this.auth, 'internal-error'),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new ln(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      }),
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    D(!this.reloadListener, this.auth, 'internal-error'),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo), (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await Ys(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const t = await this.getIdToken();
    return (
      await ui(this, r1(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON(),
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name },
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || '';
  }
  static _fromJSON(t, n) {
    var r, i, s, o, l, a, u, d;
    const y = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      p = (i = n.email) !== null && i !== void 0 ? i : void 0,
      w = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      T = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      k = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
      f = (a = n._redirectEventId) !== null && a !== void 0 ? a : void 0,
      c = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      h = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0,
      {
        uid: g,
        emailVerified: m,
        isAnonymous: A,
        providerData: _,
        stsTokenManager: P,
      } = n;
    D(g && P, t, 'internal-error');
    const N = ci.fromJSON(this.name, P);
    D(typeof g == 'string', t, 'internal-error'),
      pt(y, t.name),
      pt(p, t.name),
      D(typeof m == 'boolean', t, 'internal-error'),
      D(typeof A == 'boolean', t, 'internal-error'),
      pt(w, t.name),
      pt(T, t.name),
      pt(k, t.name),
      pt(f, t.name),
      pt(c, t.name),
      pt(h, t.name);
    const C = new ln({
      uid: g,
      auth: t,
      email: p,
      emailVerified: m,
      displayName: y,
      isAnonymous: A,
      photoURL: T,
      phoneNumber: w,
      tenantId: k,
      stsTokenManager: N,
      createdAt: c,
      lastLoginAt: h,
    });
    return (
      _ && Array.isArray(_) && (C.providerData = _.map((Q) => Object.assign({}, Q))),
      f && (C._redirectEventId = f),
      C
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new ci();
    i.updateFromServerResponse(n);
    const s = new ln({ uid: n.localId, auth: t, stsTokenManager: i, isAnonymous: r });
    return await Ys(s), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wh = new Map();
function st(e) {
  ct(e instanceof Function, 'Expected a class definition');
  let t = Wh.get(e);
  return t
    ? (ct(t instanceof e, 'Instance stored in cache mismatched with class'), t)
    : ((t = new e()), Wh.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $p {
  constructor() {
    (this.type = 'NONE'), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
$p.type = 'NONE';
const bh = $p;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ws(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class zn {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = ws(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = ws('persistence', i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? ln._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = 'authUser') {
    if (!n.length) return new zn(st(bh), t, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        }),
      )
    ).filter((u) => u);
    let s = i[0] || st(bh);
    const o = ws(r, t.config.apiKey, t.name);
    let l = null;
    for (const u of n)
      try {
        const d = await u._get(o);
        if (d) {
          const y = ln._fromJSON(t, d);
          u !== s && (l = y), (s = u);
          break;
        }
      } catch {}
    const a = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !a.length
      ? new zn(s, t, r)
      : ((s = a[0]),
        l && (await s._set(o, l.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== s)
              try {
                await u._remove(o);
              } catch {}
          }),
        ),
        new zn(s, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gh(e) {
  const t = e.toLowerCase();
  if (t.includes('opera/') || t.includes('opr/') || t.includes('opios/')) return 'Opera';
  if (jp(t)) return 'IEMobile';
  if (t.includes('msie') || t.includes('trident/')) return 'IE';
  if (t.includes('edge/')) return 'Edge';
  if (Up(t)) return 'Firefox';
  if (t.includes('silk/')) return 'Silk';
  if (Vp(t)) return 'Blackberry';
  if (zp(t)) return 'Webos';
  if (ju(t)) return 'Safari';
  if ((t.includes('chrome/') || Fp(t)) && !t.includes('edge/')) return 'Chrome';
  if (Bp(t)) return 'Android';
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return 'Other';
}
function Up(e = ve()) {
  return /firefox\//i.test(e);
}
function ju(e = ve()) {
  const t = e.toLowerCase();
  return (
    t.includes('safari/') &&
    !t.includes('chrome/') &&
    !t.includes('crios/') &&
    !t.includes('android')
  );
}
function Fp(e = ve()) {
  return /crios\//i.test(e);
}
function jp(e = ve()) {
  return /iemobile/i.test(e);
}
function Bp(e = ve()) {
  return /android/i.test(e);
}
function Vp(e = ve()) {
  return /blackberry/i.test(e);
}
function zp(e = ve()) {
  return /webos/i.test(e);
}
function Io(e = ve()) {
  return /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e));
}
function d1(e = ve()) {
  var t;
  return Io(e) && !!(!((t = window.navigator) === null || t === void 0) && t.standalone);
}
function p1() {
  return Oy() && document.documentMode === 10;
}
function Hp(e = ve()) {
  return Io(e) || Bp(e) || zp(e) || Vp(e) || /windows phone/i.test(e) || jp(e);
}
function g1() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wp(e, t = []) {
  let n;
  switch (e) {
    case 'Browser':
      n = Gh(ve());
      break;
    case 'Worker':
      n = `${Gh(ve())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(',') : 'FirebaseCore-web';
  return `${n}/JsCore/${or}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class m1 {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (s) =>
      new Promise((o, l) => {
        try {
          const a = t(s);
          o(a);
        } catch (a) {
          l(a);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create('login-blocked', {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function v1(e, t = {}) {
  return Oi(e, 'GET', '/v2/passwordPolicy', Uu(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const y1 = 6;
class _1 {
  constructor(t) {
    var n, r, i, s;
    const o = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = o.minPasswordLength) !== null && n !== void 0 ? n : y1),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' &&
        (this.enforcementState = 'OFF'),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = t.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join('')) !== null && i !== void 0
          ? i
          : ''),
      (this.forceUpgradeOnSignin =
        (s = t.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, i, s, o, l;
    const a = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, a),
      this.validatePasswordCharacterOptions(t, a),
      a.isValid &&
        (a.isValid = (n = a.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      a.isValid &&
        (a.isValid = (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      a.isValid &&
        (a.isValid = (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      a.isValid &&
        (a.isValid = (s = a.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
      a.isValid &&
        (a.isValid = (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      a.isValid &&
        (a.isValid =
          (l = a.containsNonAlphanumericCharacter) !== null && l !== void 0 ? l : !0),
      a
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      i && (n.meetsMaxPasswordLength = t.length <= i);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < t.length; i++)
      (r = t.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= 'a' && r <= 'z',
          r >= 'A' && r <= 'Z',
          r >= '0' && r <= '9',
          this.allowedNonAlphanumericCharacters.includes(r),
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w1 {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Kh(this)),
      (this.idTokenSubscription = new Kh(this)),
      (this.beforeStateQueue = new m1(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Np),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = st(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await zn.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId,
        l = i == null ? void 0 : i._redirectEventId,
        a = await this.tryRedirectSignIn(t);
      (!o || o === l) && (a == null ? void 0 : a.user) && ((i = a.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o),
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      D(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await Ys(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = Z0();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    const n = t ? Ht(t) : null;
    return (
      n && D(n.auth.config.apiKey === this.config.apiKey, this, 'invalid-user-token'),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && D(this.tenantId === t.tenantId, this, 'tenant-id-mismatch'),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(t) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(st(t));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create('unsupported-password-policy-schema-version', {}),
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await v1(this),
      n = new _1(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new Ai('auth', 'Firebase', t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && st(t)) || this._popupRedirectResolver;
      D(n, this, 'argument-error'),
        (this.redirectPersistenceManager = await zn.create(
          this,
          [st(n._redirectPersistence)],
          'redirectUser',
        )),
        (this.redirectUser = await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) ===
      t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !== null &&
      n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r), this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == 'function' ? n : n.next.bind(n);
    let o = !1;
    const l = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (
      (D(l, this, 'internal-error'),
      l.then(() => {
        o || s(this.currentUser);
      }),
      typeof n == 'function')
    ) {
      const a = t.addObserver(n, r, i);
      return () => {
        (o = !0), a();
      };
    } else {
      const a = t.addObserver(n);
      return () => {
        (o = !0), a();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return D(this.persistenceManager, this, 'internal-error'), this.persistenceManager;
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = Wp(this.config.clientPlatform, this._getFrameworks())));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { ['X-Client-Version']: this.clientVersion };
    this.app.options.appId && (n['X-Firebase-gmpid'] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n['X-Firebase-Client'] = r);
    const i = await this._getAppCheckToken();
    return i && (n['X-Firebase-AppCheck'] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({ optional: !0 })) ===
      null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null && n.error && X0(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function To(e) {
  return Ht(e);
}
class Kh {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = Fy((n) => (this.observer = n)));
  }
  get next() {
    return (
      D(this.observer, this.auth, 'internal-error'),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E1() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName('head')) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
function S1(e) {
  return new Promise((t, n) => {
    const r = document.createElement('script');
    r.setAttribute('src', e),
      (r.onload = t),
      (r.onerror = (i) => {
        const s = Xe('internal-error');
        (s.customData = i), n(s);
      }),
      (r.type = 'text/javascript'),
      (r.charset = 'UTF-8'),
      E1().appendChild(r);
  });
}
function I1(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function T1(e, t) {
  const n = Du(e, 'auth');
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Ks(s, t != null ? t : {})) return i;
    ut(i, 'already-initialized');
  }
  return n.initialize({ options: t });
}
function k1(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(st);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(r, t == null ? void 0 : t.popupRedirectResolver);
}
function C1(e, t, n) {
  const r = To(e);
  D(r._canInitEmulator, r, 'emulator-config-failed'),
    D(/^https?:\/\//.test(t), r, 'invalid-emulator-scheme');
  const i = !!(n != null && n.disableWarnings),
    s = bp(t),
    { host: o, port: l } = P1(t),
    a = l === null ? '' : `:${l}`;
  (r.config.emulator = { url: `${s}//${o}${a}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: l,
      protocol: s.replace(':', ''),
      options: Object.freeze({ disableWarnings: i }),
    })),
    i || A1();
}
function bp(e) {
  const t = e.indexOf(':');
  return t < 0 ? '' : e.substr(0, t + 1);
}
function P1(e) {
  const t = bp(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: '', port: null };
  const r = n[2].split('@').pop() || '',
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: qh(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(':');
    return { host: s, port: qh(o) };
  }
}
function qh(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function A1() {
  function e() {
    const t = document.createElement('p'),
      n = t.style;
    (t.innerText = 'Running in emulator mode. Do not use with production credentials.'),
      (n.position = 'fixed'),
      (n.width = '100%'),
      (n.backgroundColor = '#ffffff'),
      (n.border = '.1em solid #000000'),
      (n.color = '#b50000'),
      (n.bottom = '0px'),
      (n.left = '0px'),
      (n.margin = '0px'),
      (n.zIndex = '10000'),
      (n.textAlign = 'center'),
      t.classList.add('firebase-emulator-warning'),
      document.body.appendChild(t);
  }
  typeof console != 'undefined' &&
    typeof console.info == 'function' &&
    console.info(
      'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.',
    ),
    typeof window != 'undefined' &&
      typeof document != 'undefined' &&
      (document.readyState === 'loading'
        ? window.addEventListener('DOMContentLoaded', e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gp {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return it('not implemented');
  }
  _getIdTokenResponse(t) {
    return it('not implemented');
  }
  _linkToIdToken(t, n) {
    return it('not implemented');
  }
  _getReauthenticationResolver(t) {
    return it('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Hn(e, t) {
  return Dp(e, 'POST', '/v1/accounts:signInWithIdp', Uu(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const R1 = 'http://localhost';
class pn extends Gp {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new pn(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : ut('argument-error'),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == 'string' ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      s = xu(n, ['providerId', 'signInMethod']);
    if (!r || !i) return null;
    const o = new pn(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Hn(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Hn(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Hn(t, n);
  }
  buildRequest() {
    const t = { requestUri: R1, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = Ri(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kp {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Li extends Kp {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vt extends Li {
  constructor() {
    super('facebook.com');
  }
  static credential(t) {
    return pn._fromParams({
      providerId: vt.PROVIDER_ID,
      signInMethod: vt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return vt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return vt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !('oauthAccessToken' in t) || !t.oauthAccessToken) return null;
    try {
      return vt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
vt.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
vt.PROVIDER_ID = 'facebook.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yt extends Li {
  constructor() {
    super('google.com'), this.addScope('profile');
  }
  static credential(t, n) {
    return pn._fromParams({
      providerId: yt.PROVIDER_ID,
      signInMethod: yt.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return yt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return yt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return yt.credential(n, r);
    } catch {
      return null;
    }
  }
}
yt.GOOGLE_SIGN_IN_METHOD = 'google.com';
yt.PROVIDER_ID = 'google.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _t extends Li {
  constructor() {
    super('github.com');
  }
  static credential(t) {
    return pn._fromParams({
      providerId: _t.PROVIDER_ID,
      signInMethod: _t.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return _t.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return _t.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !('oauthAccessToken' in t) || !t.oauthAccessToken) return null;
    try {
      return _t.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
_t.GITHUB_SIGN_IN_METHOD = 'github.com';
_t.PROVIDER_ID = 'github.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wt extends Li {
  constructor() {
    super('twitter.com');
  }
  static credential(t, n) {
    return pn._fromParams({
      providerId: wt.PROVIDER_ID,
      signInMethod: wt.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return wt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return wt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return wt.credential(n, r);
    } catch {
      return null;
    }
  }
}
wt.TWITTER_SIGN_IN_METHOD = 'twitter.com';
wt.PROVIDER_ID = 'twitter.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function N1(e, t) {
  return Dp(e, 'POST', '/v1/accounts:signUp', Uu(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bt {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const s = await ln._fromIdTokenResponse(t, r, i),
      o = Xh(r);
    return new Bt({ user: s, providerId: o, _tokenResponse: r, operationType: n });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = Xh(r);
    return new Bt({ user: t, providerId: i, _tokenResponse: r, operationType: n });
  }
}
function Xh(e) {
  return e.providerId ? e.providerId : 'phoneNumber' in e ? 'phone' : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function O1(e) {
  var t;
  const n = To(e);
  if (
    (await n._initializationPromise,
    !((t = n.currentUser) === null || t === void 0) && t.isAnonymous)
  )
    return new Bt({ user: n.currentUser, providerId: null, operationType: 'signIn' });
  const r = await N1(n, { returnSecureToken: !0 }),
    i = await Bt._fromIdTokenResponse(n, 'signIn', r, !0);
  return await n._updateCurrentUser(i.user), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qs extends dt {
  constructor(t, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Qs.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (s = t.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new Qs(t, n, r, i);
  }
}
function qp(e, t, n, r) {
  return (
    t === 'reauthenticate' ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)
  ).catch((s) => {
    throw s.code === 'auth/multi-factor-auth-required'
      ? Qs._fromErrorAndOperation(e, s, t, r)
      : s;
  });
}
async function L1(e, t, n = !1) {
  const r = await ui(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return Bt._forOperation(e, 'link', r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function D1(e, t, n = !1) {
  const { auth: r } = e,
    i = 'reauthenticate';
  try {
    const s = await ui(e, qp(r, i, t, e), n);
    D(s.idToken, r, 'internal-error');
    const o = Fu(s.idToken);
    D(o, r, 'internal-error');
    const { sub: l } = o;
    return D(e.uid === l, r, 'user-mismatch'), Bt._forOperation(e, i, s);
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === 'auth/user-not-found' && ut(r, 'user-mismatch'),
      s)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function x1(e, t, n = !1) {
  const r = 'signIn',
    i = await qp(e, r, t),
    s = await Bt._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(s.user)), s;
}
function M1(e, t, n, r) {
  return Ht(e).onIdTokenChanged(t, n, r);
}
function $1(e, t, n) {
  return Ht(e).beforeAuthStateChanged(t, n);
}
function U1(e, t, n, r) {
  return Ht(e).onAuthStateChanged(t, n, r);
}
const Js = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xp {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Js, '1'),
          this.storage.removeItem(Js),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function F1() {
  const e = ve();
  return ju(e) || Io(e);
}
const j1 = 1e3,
  B1 = 10;
class Yp extends Xp {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = F1() && g1()),
      (this.fallbackToPolling = Hp()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((o, l, a) => {
        this.notifyListeners(o, a);
      });
      return;
    }
    const r = t.key;
    if (
      (n ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced)
    ) {
      const o = this.storage.getItem(r);
      if (t.newValue !== o)
        t.newValue !== null
          ? this.storage.setItem(r, t.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    p1() && s !== t.newValue && t.newValue !== t.oldValue ? setTimeout(i, B1) : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: t, oldValue: n, newValue: r }),
            !0,
          );
        });
      }, j1));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener('storage', this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener('storage', this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()), (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
Yp.type = 'LOCAL';
const V1 = Yp;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qp extends Xp {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Qp.type = 'SESSION';
const Jp = Qp;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function z1(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        const n = await t;
        return { fulfilled: !0, value: n };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    }),
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ko {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new ko(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: 'ack', eventId: r, eventType: i });
    const l = Array.from(o).map(async (u) => u(n.origin, s)),
      a = await z1(l);
    n.ports[0].postMessage({ status: 'done', eventId: r, eventType: i, response: a });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener('message', this.boundEventHandler);
  }
}
ko.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bu(e = '', t = 10) {
  let n = '';
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H1 {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener('message', t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel != 'undefined' ? new MessageChannel() : null;
    if (!i) throw new Error('connection_unavailable');
    let s, o;
    return new Promise((l, a) => {
      const u = Bu('', 20);
      i.port1.start();
      const d = setTimeout(() => {
        a(new Error('unsupported_event'));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(y) {
          const p = y;
          if (p.data.eventId === u)
            switch (p.data.status) {
              case 'ack':
                clearTimeout(d),
                  (s = setTimeout(() => {
                    a(new Error('timeout'));
                  }, 3e3));
                break;
              case 'done':
                clearTimeout(s), l(p.data.response);
                break;
              default:
                clearTimeout(d), clearTimeout(s), a(new Error('invalid_response'));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener('message', o.onMessage),
        this.target.postMessage({ eventType: t, eventId: u, data: n }, [i.port2]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ye() {
  return window;
}
function W1(e) {
  Ye().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zp() {
  return (
    typeof Ye().WorkerGlobalScope != 'undefined' &&
    typeof Ye().importScripts == 'function'
  );
}
async function b1() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function G1() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null || e === void 0
      ? void 0
      : e.controller) || null
  );
}
function K1() {
  return Zp() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eg = 'firebaseLocalStorageDb',
  q1 = 1,
  Zs = 'firebaseLocalStorage',
  tg = 'fbase_key';
class Di {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener('success', () => {
        t(this.request.result);
      }),
        this.request.addEventListener('error', () => {
          n(this.request.error);
        });
    });
  }
}
function Co(e, t) {
  return e.transaction([Zs], t ? 'readwrite' : 'readonly').objectStore(Zs);
}
function X1() {
  const e = indexedDB.deleteDatabase(eg);
  return new Di(e).toPromise();
}
function Ea() {
  const e = indexedDB.open(eg, q1);
  return new Promise((t, n) => {
    e.addEventListener('error', () => {
      n(e.error);
    }),
      e.addEventListener('upgradeneeded', () => {
        const r = e.result;
        try {
          r.createObjectStore(Zs, { keyPath: tg });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener('success', async () => {
        const r = e.result;
        r.objectStoreNames.contains(Zs) ? t(r) : (r.close(), await X1(), t(await Ea()));
      });
  });
}
async function Yh(e, t, n) {
  const r = Co(e, !0).put({ [tg]: t, value: n });
  return new Di(r).toPromise();
}
async function Y1(e, t) {
  const n = Co(e, !1).get(t),
    r = await new Di(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Qh(e, t) {
  const n = Co(e, !0).delete(t);
  return new Di(n).toPromise();
}
const Q1 = 800,
  J1 = 3;
class ng {
  constructor() {
    (this.type = 'LOCAL'),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(
        () => {},
        () => {},
      ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Ea()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > J1) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Zp() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = ko._getInstance(K1())),
      this.receiver._subscribe('keyChanged', async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe('ping', async (t, n) => ['keyChanged']);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await b1()), !this.activeServiceWorker)) return;
    this.sender = new H1(this.activeServiceWorker);
    const r = await this.sender._send('ping', {}, 800);
    !r ||
      (((t = r[0]) === null || t === void 0 ? void 0 : t.fulfilled) &&
        ((n = r[0]) === null || n === void 0 ? void 0 : n.value.includes('keyChanged')) &&
        (this.serviceWorkerReceiverAvailable = !0));
  }
  async notifyServiceWorker(t) {
    if (!(!this.sender || !this.activeServiceWorker || G1() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          'keyChanged',
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50,
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await Ea();
      return await Yh(t, Js, '1'), await Qh(t, Js), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Yh(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      ),
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => Y1(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Qh(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      ),
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const s = Co(i, !1).getAll();
      return new Di(s).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    for (const { fbase_key: i, value: s } of t)
      r.add(i),
        JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
          (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), Q1));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
ng.type = 'LOCAL';
const Z1 = ng;
new Ni(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e_(e, t) {
  return t
    ? st(t)
    : (D(e._popupRedirectResolver, e, 'argument-error'), e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vu extends Gp {
  constructor(t) {
    super('custom', 'custom'), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Hn(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Hn(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Hn(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function t_(e) {
  return x1(e.auth, new Vu(e), e.bypassAuthState);
}
function n_(e) {
  const { auth: t, user: n } = e;
  return D(n, t, 'internal-error'), D1(n, new Vu(e), e.bypassAuthState);
}
async function r_(e) {
  const { auth: t, user: n } = e;
  return D(n, t, 'internal-error'), L1(n, new Vu(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rg {
  constructor(t, n, r, i, s = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: l,
    } = t;
    if (o) {
      this.reject(o);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(a));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return t_;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return r_;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return n_;
      default:
        ut(this.auth, 'internal-error');
    }
  }
  resolve(t) {
    ct(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    ct(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const i_ = new Ni(2e3, 1e4);
class Nn extends rg {
  constructor(t, n, r, i, s) {
    super(t, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Nn.currentPopupAction && Nn.currentPopupAction.cancel(),
      (Nn.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return D(t, this.auth, 'internal-error'), t;
  }
  async onExecution() {
    ct(this.filter.length === 1, 'Popup operations only handle one event');
    const t = Bu();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t,
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(Xe(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0 ? void 0 : t.associatedEvent) ||
      null
    );
  }
  cancel() {
    this.reject(Xe(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Nn.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) ===
            null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null), this.reject(Xe(this.auth, 'popup-closed-by-user'));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, i_.get());
    };
    t();
  }
}
Nn.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const s_ = 'pendingRedirect',
  Es = new Map();
class o_ extends rg {
  constructor(t, n, r = !1) {
    super(
      t,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      n,
      void 0,
      r,
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = Es.get(this.auth._key());
    if (!t) {
      try {
        const r = (await l_(this.resolver, this.auth)) ? await super.execute() : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      Es.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState || Es.set(this.auth._key(), () => Promise.resolve(null)), t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === 'signInViaRedirect') return super.onAuthEvent(t);
    if (t.type === 'unknown') {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function l_(e, t) {
  const n = c_(t),
    r = u_(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === 'true';
  return await r._remove(n), i;
}
function a_(e, t) {
  Es.set(e._key(), t);
}
function u_(e) {
  return st(e._redirectPersistence);
}
function c_(e) {
  return ws(s_, e.config.apiKey, e.name);
}
async function h_(e, t, n = !1) {
  const r = To(e),
    i = e_(r, t),
    o = await new o_(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, t)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const f_ = 10 * 60 * 1e3;
class d_ {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !p_(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !ig(t)) {
      const i =
        ((r = t.error.code) === null || r === void 0 ? void 0 : r.split('auth/')[1]) ||
        'internal-error';
      n.onError(Xe(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= f_ && this.cachedEventUids.clear(),
      this.cachedEventUids.has(Jh(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(Jh(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function Jh(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter((t) => t).join('-');
}
function ig({ type: e, error: t }) {
  return e === 'unknown' && (t == null ? void 0 : t.code) === 'auth/no-auth-event';
}
function p_(e) {
  switch (e.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return ig(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function g_(e, t = {}) {
  return Oi(e, 'GET', '/v1/projects', t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const m_ = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  v_ = /^https?/;
async function y_(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await g_(e);
  for (const n of t)
    try {
      if (__(n)) return;
    } catch {}
  ut(e, 'unauthorized-domain');
}
function __(e) {
  const t = wa(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith('chrome-extension://')) {
    const o = new URL(e);
    return o.hostname === '' && r === ''
      ? n === 'chrome-extension:' &&
          e.replace('chrome-extension://', '') === t.replace('chrome-extension://', '')
      : n === 'chrome-extension:' && o.hostname === r;
  }
  if (!v_.test(n)) return !1;
  if (m_.test(e)) return r === e;
  const i = e.replace(/\./g, '\\.');
  return new RegExp('^(.+\\.' + i + '|' + i + ')$', 'i').test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const w_ = new Ni(3e4, 6e4);
function Zh() {
  const e = Ye().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function E_(e) {
  return new Promise((t, n) => {
    var r, i, s;
    function o() {
      Zh(),
        gapi.load('gapi.iframes', {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Zh(), n(Xe(e, 'network-request-failed'));
          },
          timeout: w_.get(),
        });
    }
    if (
      !(
        (i = (r = Ye().gapi) === null || r === void 0 ? void 0 : r.iframes) === null ||
        i === void 0
      ) &&
      i.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((s = Ye().gapi) === null || s === void 0) && s.load) o();
    else {
      const l = I1('iframefcb');
      return (
        (Ye()[l] = () => {
          gapi.load ? o() : n(Xe(e, 'network-request-failed'));
        }),
        S1(`https://apis.google.com/js/api.js?onload=${l}`).catch((a) => n(a))
      );
    }
  }).catch((t) => {
    throw ((Ss = null), t);
  });
}
let Ss = null;
function S_(e) {
  return (Ss = Ss || E_(e)), Ss;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const I_ = new Ni(5e3, 15e3),
  T_ = '__/auth/iframe',
  k_ = 'emulator/auth/iframe',
  C_ = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1',
  },
  P_ = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'],
  ]);
function A_(e) {
  const t = e.config;
  D(t.authDomain, e, 'auth-domain-config-required');
  const n = t.emulator ? $u(t, k_) : `https://${e.config.authDomain}/${T_}`,
    r = { apiKey: t.apiKey, appName: e.name, v: or },
    i = P_.get(e.config.apiHost);
  i && (r.eid = i);
  const s = e._getFrameworks();
  return s.length && (r.fw = s.join(',')), `${n}?${Ri(r).slice(1)}`;
}
async function R_(e) {
  const t = await S_(e),
    n = Ye().gapi;
  return (
    D(n, e, 'internal-error'),
    t.open(
      {
        where: document.body,
        url: A_(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: C_,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = Xe(e, 'network-request-failed'),
            l = Ye().setTimeout(() => {
              s(o);
            }, I_.get());
          function a() {
            Ye().clearTimeout(l), i(r);
          }
          r.ping(a).then(a, () => {
            s(o);
          });
        }),
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const N_ = { location: 'yes', resizable: 'yes', statusbar: 'yes', toolbar: 'no' },
  O_ = 500,
  L_ = 600,
  D_ = '_blank',
  x_ = 'http://localhost';
class ef {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function M_(e, t, n, r = O_, i = L_) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = '';
  const a = Object.assign(Object.assign({}, N_), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    u = ve().toLowerCase();
  n && (l = Fp(u) ? D_ : n), Up(u) && ((t = t || x_), (a.scrollbars = 'yes'));
  const d = Object.entries(a).reduce((p, [w, T]) => `${p}${w}=${T},`, '');
  if (d1(u) && l !== '_self') return $_(t || '', l), new ef(null);
  const y = window.open(t || '', l, d);
  D(y, e, 'popup-blocked');
  try {
    y.focus();
  } catch {}
  return new ef(y);
}
function $_(e, t) {
  const n = document.createElement('a');
  (n.href = e), (n.target = t);
  const r = document.createEvent('MouseEvent');
  r.initMouseEvent('click', !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const U_ = '__/auth/handler',
  F_ = 'emulator/auth/handler',
  j_ = encodeURIComponent('fac');
async function tf(e, t, n, r, i, s) {
  D(e.config.authDomain, e, 'auth-domain-config-required'),
    D(e.config.apiKey, e, 'invalid-api-key');
  const o = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: or,
    eventId: i,
  };
  if (t instanceof Kp) {
    t.setDefaultLanguage(e.languageCode),
      (o.providerId = t.providerId || ''),
      Uy(t.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [d, y] of Object.entries(s || {})) o[d] = y;
  }
  if (t instanceof Li) {
    const d = t.getScopes().filter((y) => y !== '');
    d.length > 0 && (o.scopes = d.join(','));
  }
  e.tenantId && (o.tid = e.tenantId);
  const l = o;
  for (const d of Object.keys(l)) l[d] === void 0 && delete l[d];
  const a = await e._getAppCheckToken(),
    u = a ? `#${j_}=${encodeURIComponent(a)}` : '';
  return `${B_(e)}?${Ri(l).slice(1)}${u}`;
}
function B_({ config: e }) {
  return e.emulator ? $u(e, F_) : `https://${e.authDomain}/${U_}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sl = 'webStorageSupport';
class V_ {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Jp),
      (this._completeRedirectFn = h_),
      (this._overrideRedirectResult = a_);
  }
  async _openPopup(t, n, r, i) {
    var s;
    ct(
      (s = this.eventManagers[t._key()]) === null || s === void 0 ? void 0 : s.manager,
      '_initialize() not called before _openPopup()',
    );
    const o = await tf(t, n, r, wa(), i);
    return M_(t, o, Bu());
  }
  async _openRedirect(t, n, r, i) {
    await this._originValidation(t);
    const s = await tf(t, n, r, wa(), i);
    return W1(s), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (ct(s, 'If manager is not set, promise should be'), s);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await R_(t),
      r = new d_(t);
    return (
      n.register(
        'authEvent',
        (i) => (
          D(i == null ? void 0 : i.authEvent, t, 'invalid-auth-event'),
          { status: r.onEvent(i.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      Sl,
      { type: Sl },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[Sl];
        o !== void 0 && n(!!o), ut(t, 'internal-error');
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] || (this.originValidationPromises[n] = y_(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Hp() || ju() || Io();
  }
}
const z_ = V_;
var nf = '@firebase/auth',
  rf = '1.3.0';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H_ {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) || null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    !n || (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    D(this.auth._initializationPromise, 'dependent-sdk-initialized-before-auth');
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function W_(e) {
  switch (e) {
    case 'Node':
      return 'node';
    case 'ReactNative':
      return 'rn';
    case 'Worker':
      return 'webworker';
    case 'Cordova':
      return 'cordova';
    default:
      return;
  }
}
function b_(e) {
  Qn(
    new fn(
      'auth',
      (t, { options: n }) => {
        const r = t.getProvider('app').getImmediate(),
          i = t.getProvider('heartbeat'),
          s = t.getProvider('app-check-internal'),
          { apiKey: o, authDomain: l } = r.options;
        D(o && !o.includes(':'), 'invalid-api-key', { appName: r.name });
        const a = {
            apiKey: o,
            authDomain: l,
            clientPlatform: e,
            apiHost: 'identitytoolkit.googleapis.com',
            tokenApiHost: 'securetoken.googleapis.com',
            apiScheme: 'https',
            sdkClientVersion: Wp(e),
          },
          u = new w1(r, i, s, a);
        return k1(u, n), u;
      },
      'PUBLIC',
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider('auth-internal').initialize();
      }),
  ),
    Qn(
      new fn(
        'auth-internal',
        (t) => {
          const n = To(t.getProvider('auth').getImmediate());
          return ((r) => new H_(r))(n);
        },
        'PRIVATE',
      ).setInstantiationMode('EXPLICIT'),
    ),
    xt(nf, rf, W_(e)),
    xt(nf, rf, 'esm2017');
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const G_ = 5 * 60,
  K_ = Sp('authIdTokenMaxAge') || G_;
let sf = null;
const q_ = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > K_) return;
  const i = n == null ? void 0 : n.token;
  sf !== i &&
    ((sf = i),
    await fetch(e, {
      method: i ? 'POST' : 'DELETE',
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function X_(e = Cp()) {
  const t = Du(e, 'auth');
  if (t.isInitialized()) return t.getImmediate();
  const n = T1(e, { popupRedirectResolver: z_, persistence: [Z1, V1, Jp] }),
    r = Sp('authTokenSyncURL');
  if (r) {
    const s = q_(r);
    $1(n, s, () => s(n.currentUser)), M1(n, (o) => s(o));
  }
  const i = wp('auth');
  return i && C1(n, `http://${i}`), n;
}
b_('Browser');
var Y_ =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  E,
  zu = zu || {},
  L = Y_ || self;
function Po(e) {
  var t = typeof e;
  return (
    (t = t != 'object' ? t : e ? (Array.isArray(e) ? 'array' : t) : 'null'),
    t == 'array' || (t == 'object' && typeof e.length == 'number')
  );
}
function xi(e) {
  var t = typeof e;
  return (t == 'object' && e != null) || t == 'function';
}
function Q_(e) {
  return (Object.prototype.hasOwnProperty.call(e, Il) && e[Il]) || (e[Il] = ++J_);
}
var Il = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
  J_ = 0;
function Z_(e, t, n) {
  return e.call.apply(e.bind, arguments);
}
function ew(e, t, n) {
  if (!e) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), e.apply(t, i);
    };
  }
  return function () {
    return e.apply(t, arguments);
  };
}
function pe(e, t, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf('native code') != -1
      ? (pe = Z_)
      : (pe = ew),
    pe.apply(null, arguments)
  );
}
function is(e, t) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), e.apply(this, r);
  };
}
function ne(e, t) {
  function n() {}
  (n.prototype = t.prototype),
    (e.$ = t.prototype),
    (e.prototype = new n()),
    (e.prototype.constructor = e),
    (e.ac = function (r, i, s) {
      for (var o = Array(arguments.length - 2), l = 2; l < arguments.length; l++)
        o[l - 2] = arguments[l];
      return t.prototype[i].apply(r, o);
    });
}
function Wt() {
  (this.s = this.s), (this.o = this.o);
}
var tw = 0;
Wt.prototype.s = !1;
Wt.prototype.sa = function () {
  !this.s && ((this.s = !0), this.N(), tw != 0) && Q_(this);
};
Wt.prototype.N = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const sg = Array.prototype.indexOf
  ? function (e, t) {
      return Array.prototype.indexOf.call(e, t, void 0);
    }
  : function (e, t) {
      if (typeof e == 'string')
        return typeof t != 'string' || t.length != 1 ? -1 : e.indexOf(t, 0);
      for (let n = 0; n < e.length; n++) if (n in e && e[n] === t) return n;
      return -1;
    };
function Hu(e) {
  const t = e.length;
  if (0 < t) {
    const n = Array(t);
    for (let r = 0; r < t; r++) n[r] = e[r];
    return n;
  }
  return [];
}
function of(e, t) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (Po(r)) {
      const i = e.length || 0,
        s = r.length || 0;
      e.length = i + s;
      for (let o = 0; o < s; o++) e[i + o] = r[o];
    } else e.push(r);
  }
}
function ge(e, t) {
  (this.type = e), (this.g = this.target = t), (this.defaultPrevented = !1);
}
ge.prototype.h = function () {
  this.defaultPrevented = !0;
};
var nw = (function () {
  if (!L.addEventListener || !Object.defineProperty) return !1;
  var e = !1,
    t = Object.defineProperty({}, 'passive', {
      get: function () {
        e = !0;
      },
    });
  try {
    L.addEventListener('test', () => {}, t), L.removeEventListener('test', () => {}, t);
  } catch {}
  return e;
})();
function hi(e) {
  return /^[\s\xa0]*$/.test(e);
}
function Ao() {
  var e = L.navigator;
  return e && (e = e.userAgent) ? e : '';
}
function Ve(e) {
  return Ao().indexOf(e) != -1;
}
function Wu(e) {
  return Wu[' '](e), e;
}
Wu[' '] = function () {};
function rw(e, t) {
  var n = Yw;
  return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : (n[e] = t(e));
}
var iw = Ve('Opera'),
  fi = Ve('Trident') || Ve('MSIE'),
  og = Ve('Edge'),
  Sa = og || fi,
  lg =
    Ve('Gecko') &&
    !(Ao().toLowerCase().indexOf('webkit') != -1 && !Ve('Edge')) &&
    !(Ve('Trident') || Ve('MSIE')) &&
    !Ve('Edge'),
  sw = Ao().toLowerCase().indexOf('webkit') != -1 && !Ve('Edge');
function ag() {
  var e = L.document;
  return e ? e.documentMode : void 0;
}
e: {
  var lf = '',
    Tl = (function () {
      var e = Ao();
      if (lg) return /rv:([^\);]+)(\)|;)/.exec(e);
      if (og) return /Edge\/([\d\.]+)/.exec(e);
      if (fi) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);
      if (sw) return /WebKit\/(\S+)/.exec(e);
      if (iw) return /(?:Version)[ \/]?(\S+)/.exec(e);
    })();
  if ((Tl && (lf = Tl ? Tl[1] : ''), fi)) {
    var af = ag();
    if (af != null && af > parseFloat(lf)) break e;
  }
}
L.document && fi && ag();
function di(e, t) {
  if (
    (ge.call(this, e ? e.type : ''),
    (this.relatedTarget = this.g = this.target = null),
    (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
    (this.key = ''),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ''),
    (this.i = null),
    e)
  ) {
    var n = (this.type = e.type),
      r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
    if (((this.target = e.target || e.srcElement), (this.g = t), (t = e.relatedTarget))) {
      if (lg) {
        e: {
          try {
            Wu(t.nodeName);
            var i = !0;
            break e;
          } catch {}
          i = !1;
        }
        i || (t = null);
      }
    } else n == 'mouseover' ? (t = e.fromElement) : n == 'mouseout' && (t = e.toElement);
    (this.relatedTarget = t),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = e.clientX !== void 0 ? e.clientX : e.pageX),
          (this.clientY = e.clientY !== void 0 ? e.clientY : e.pageY),
          (this.screenX = e.screenX || 0),
          (this.screenY = e.screenY || 0)),
      (this.button = e.button),
      (this.key = e.key || ''),
      (this.ctrlKey = e.ctrlKey),
      (this.altKey = e.altKey),
      (this.shiftKey = e.shiftKey),
      (this.metaKey = e.metaKey),
      (this.pointerId = e.pointerId || 0),
      (this.pointerType =
        typeof e.pointerType == 'string' ? e.pointerType : ow[e.pointerType] || ''),
      (this.state = e.state),
      (this.i = e),
      e.defaultPrevented && di.$.h.call(this);
  }
}
ne(di, ge);
var ow = { 2: 'touch', 3: 'pen', 4: 'mouse' };
di.prototype.h = function () {
  di.$.h.call(this);
  var e = this.i;
  e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
};
var Mi = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
  lw = 0;
function aw(e, t, n, r, i) {
  (this.listener = e),
    (this.proxy = null),
    (this.src = t),
    (this.type = n),
    (this.capture = !!r),
    (this.la = i),
    (this.key = ++lw),
    (this.fa = this.ia = !1);
}
function Ro(e) {
  (e.fa = !0), (e.listener = null), (e.proxy = null), (e.src = null), (e.la = null);
}
function bu(e, t, n) {
  for (const r in e) t.call(n, e[r], r, e);
}
function uw(e, t) {
  for (const n in e) t.call(void 0, e[n], n, e);
}
function ug(e) {
  const t = {};
  for (const n in e) t[n] = e[n];
  return t;
}
const uf =
  'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
    ' ',
  );
function cg(e, t) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) e[n] = r[n];
    for (let s = 0; s < uf.length; s++)
      (n = uf[s]), Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
}
function No(e) {
  (this.src = e), (this.g = {}), (this.h = 0);
}
No.prototype.add = function (e, t, n, r, i) {
  var s = e.toString();
  (e = this.g[s]), e || ((e = this.g[s] = []), this.h++);
  var o = Ta(e, t, r, i);
  return (
    -1 < o
      ? ((t = e[o]), n || (t.ia = !1))
      : ((t = new aw(t, this.src, s, !!r, i)), (t.ia = n), e.push(t)),
    t
  );
};
function Ia(e, t) {
  var n = t.type;
  if (n in e.g) {
    var r = e.g[n],
      i = sg(r, t),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (Ro(t), e.g[n].length == 0 && (delete e.g[n], e.h--));
  }
}
function Ta(e, t, n, r) {
  for (var i = 0; i < e.length; ++i) {
    var s = e[i];
    if (!s.fa && s.listener == t && s.capture == !!n && s.la == r) return i;
  }
  return -1;
}
var Gu = 'closure_lm_' + ((1e6 * Math.random()) | 0),
  kl = {};
function hg(e, t, n, r, i) {
  if (r && r.once) return dg(e, t, n, r, i);
  if (Array.isArray(t)) {
    for (var s = 0; s < t.length; s++) hg(e, t[s], n, r, i);
    return null;
  }
  return (
    (n = Xu(n)),
    e && e[Mi] ? e.O(t, n, xi(r) ? !!r.capture : !!r, i) : fg(e, t, n, !1, r, i)
  );
}
function fg(e, t, n, r, i, s) {
  if (!t) throw Error('Invalid event type');
  var o = xi(i) ? !!i.capture : !!i,
    l = qu(e);
  if ((l || (e[Gu] = l = new No(e)), (n = l.add(t, n, r, o, s)), n.proxy)) return n;
  if (((r = cw()), (n.proxy = r), (r.src = e), (r.listener = n), e.addEventListener))
    nw || (i = o), i === void 0 && (i = !1), e.addEventListener(t.toString(), r, i);
  else if (e.attachEvent) e.attachEvent(gg(t.toString()), r);
  else if (e.addListener && e.removeListener) e.addListener(r);
  else throw Error('addEventListener and attachEvent are unavailable.');
  return n;
}
function cw() {
  function e(n) {
    return t.call(e.src, e.listener, n);
  }
  const t = hw;
  return e;
}
function dg(e, t, n, r, i) {
  if (Array.isArray(t)) {
    for (var s = 0; s < t.length; s++) dg(e, t[s], n, r, i);
    return null;
  }
  return (
    (n = Xu(n)),
    e && e[Mi] ? e.P(t, n, xi(r) ? !!r.capture : !!r, i) : fg(e, t, n, !0, r, i)
  );
}
function pg(e, t, n, r, i) {
  if (Array.isArray(t)) for (var s = 0; s < t.length; s++) pg(e, t[s], n, r, i);
  else
    (r = xi(r) ? !!r.capture : !!r),
      (n = Xu(n)),
      e && e[Mi]
        ? ((e = e.i),
          (t = String(t).toString()),
          t in e.g &&
            ((s = e.g[t]),
            (n = Ta(s, n, r, i)),
            -1 < n &&
              (Ro(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete e.g[t], e.h--))))
        : e &&
          (e = qu(e)) &&
          ((t = e.g[t.toString()]),
          (e = -1),
          t && (e = Ta(t, n, r, i)),
          (n = -1 < e ? t[e] : null) && Ku(n));
}
function Ku(e) {
  if (typeof e != 'number' && e && !e.fa) {
    var t = e.src;
    if (t && t[Mi]) Ia(t.i, e);
    else {
      var n = e.type,
        r = e.proxy;
      t.removeEventListener
        ? t.removeEventListener(n, r, e.capture)
        : t.detachEvent
        ? t.detachEvent(gg(n), r)
        : t.addListener && t.removeListener && t.removeListener(r),
        (n = qu(t)) ? (Ia(n, e), n.h == 0 && ((n.src = null), (t[Gu] = null))) : Ro(e);
    }
  }
}
function gg(e) {
  return e in kl ? kl[e] : (kl[e] = 'on' + e);
}
function hw(e, t) {
  if (e.fa) e = !0;
  else {
    t = new di(t, this);
    var n = e.listener,
      r = e.la || e.src;
    e.ia && Ku(e), (e = n.call(r, t));
  }
  return e;
}
function qu(e) {
  return (e = e[Gu]), e instanceof No ? e : null;
}
var Cl = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
function Xu(e) {
  return typeof e == 'function'
    ? e
    : (e[Cl] ||
        (e[Cl] = function (t) {
          return e.handleEvent(t);
        }),
      e[Cl]);
}
function te() {
  Wt.call(this), (this.i = new No(this)), (this.S = this), (this.J = null);
}
ne(te, Wt);
te.prototype[Mi] = !0;
te.prototype.removeEventListener = function (e, t, n, r) {
  pg(this, e, t, n, r);
};
function le(e, t) {
  var n,
    r = e.J;
  if (r) for (n = []; r; r = r.J) n.push(r);
  if (((e = e.S), (r = t.type || t), typeof t == 'string')) t = new ge(t, e);
  else if (t instanceof ge) t.target = t.target || e;
  else {
    var i = t;
    (t = new ge(r, e)), cg(t, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (t.g = n[s]);
      i = ss(o, r, !0, t) && i;
    }
  if (((o = t.g = e), (i = ss(o, r, !0, t) && i), (i = ss(o, r, !1, t) && i), n))
    for (s = 0; s < n.length; s++) (o = t.g = n[s]), (i = ss(o, r, !1, t) && i);
}
te.prototype.N = function () {
  if ((te.$.N.call(this), this.i)) {
    var e = this.i,
      t;
    for (t in e.g) {
      for (var n = e.g[t], r = 0; r < n.length; r++) Ro(n[r]);
      delete e.g[t], e.h--;
    }
  }
  this.J = null;
};
te.prototype.O = function (e, t, n, r) {
  return this.i.add(String(e), t, !1, n, r);
};
te.prototype.P = function (e, t, n, r) {
  return this.i.add(String(e), t, !0, n, r);
};
function ss(e, t, n, r) {
  if (((t = e.i.g[String(t)]), !t)) return !0;
  t = t.concat();
  for (var i = !0, s = 0; s < t.length; ++s) {
    var o = t[s];
    if (o && !o.fa && o.capture == n) {
      var l = o.listener,
        a = o.la || o.src;
      o.ia && Ia(e.i, o), (i = l.call(a, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Yu = L.JSON.stringify;
class fw {
  constructor(t, n) {
    (this.i = t), (this.j = n), (this.h = 0), (this.g = null);
  }
  get() {
    let t;
    return (
      0 < this.h
        ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
        : (t = this.i()),
      t
    );
  }
}
function dw() {
  var e = Qu;
  let t = null;
  return e.g && ((t = e.g), (e.g = e.g.next), e.g || (e.h = null), (t.next = null)), t;
}
class pw {
  constructor() {
    this.h = this.g = null;
  }
  add(t, n) {
    const r = mg.get();
    r.set(t, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var mg = new fw(
  () => new gw(),
  (e) => e.reset(),
);
class gw {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(t, n) {
    (this.h = t), (this.g = n), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function mw(e) {
  var t = 1;
  e = e.split(':');
  const n = [];
  for (; 0 < t && e.length; ) n.push(e.shift()), t--;
  return e.length && n.push(e.join(':')), n;
}
function vw(e) {
  L.setTimeout(() => {
    throw e;
  }, 0);
}
let pi,
  gi = !1,
  Qu = new pw(),
  vg = () => {
    const e = L.Promise.resolve(void 0);
    pi = () => {
      e.then(yw);
    };
  };
var yw = () => {
  for (var e; (e = dw()); ) {
    try {
      e.h.call(e.g);
    } catch (n) {
      vw(n);
    }
    var t = mg;
    t.j(e), 100 > t.h && (t.h++, (e.next = t.g), (t.g = e));
  }
  gi = !1;
};
function Oo(e, t) {
  te.call(this),
    (this.h = e || 1),
    (this.g = t || L),
    (this.j = pe(this.qb, this)),
    (this.l = Date.now());
}
ne(Oo, te);
E = Oo.prototype;
E.ga = !1;
E.T = null;
E.qb = function () {
  if (this.ga) {
    var e = Date.now() - this.l;
    0 < e && e < 0.8 * this.h
      ? (this.T = this.g.setTimeout(this.j, this.h - e))
      : (this.T && (this.g.clearTimeout(this.T), (this.T = null)),
        le(this, 'tick'),
        this.ga && (Ju(this), this.start()));
  }
};
E.start = function () {
  (this.ga = !0),
    this.T || ((this.T = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function Ju(e) {
  (e.ga = !1), e.T && (e.g.clearTimeout(e.T), (e.T = null));
}
E.N = function () {
  Oo.$.N.call(this), Ju(this), delete this.g;
};
function Zu(e, t, n) {
  if (typeof e == 'function') n && (e = pe(e, n));
  else if (e && typeof e.handleEvent == 'function') e = pe(e.handleEvent, e);
  else throw Error('Invalid listener argument');
  return 2147483647 < Number(t) ? -1 : L.setTimeout(e, t || 0);
}
function yg(e) {
  e.g = Zu(() => {
    (e.g = null), e.i && ((e.i = !1), yg(e));
  }, e.j);
  const t = e.h;
  (e.h = null), e.m.apply(null, t);
}
class _w extends Wt {
  constructor(t, n) {
    super(), (this.m = t), (this.j = n), (this.h = null), (this.i = !1), (this.g = null);
  }
  l(t) {
    (this.h = arguments), this.g ? (this.i = !0) : yg(this);
  }
  N() {
    super.N(),
      this.g && (L.clearTimeout(this.g), (this.g = null), (this.i = !1), (this.h = null));
  }
}
function mi(e) {
  Wt.call(this), (this.h = e), (this.g = {});
}
ne(mi, Wt);
var cf = [];
function _g(e, t, n, r) {
  Array.isArray(n) || (n && (cf[0] = n.toString()), (n = cf));
  for (var i = 0; i < n.length; i++) {
    var s = hg(t, n[i], r || e.handleEvent, !1, e.h || e);
    if (!s) break;
    e.g[s.key] = s;
  }
}
function wg(e) {
  bu(
    e.g,
    function (t, n) {
      this.g.hasOwnProperty(n) && Ku(t);
    },
    e,
  ),
    (e.g = {});
}
mi.prototype.N = function () {
  mi.$.N.call(this), wg(this);
};
mi.prototype.handleEvent = function () {
  throw Error('EventHandler.handleEvent not implemented');
};
function Lo() {
  this.g = !0;
}
Lo.prototype.Ea = function () {
  this.g = !1;
};
function ww(e, t, n, r, i, s) {
  e.info(function () {
    if (e.g)
      if (s)
        for (var o = '', l = s.split('&'), a = 0; a < l.length; a++) {
          var u = l[a].split('=');
          if (1 < u.length) {
            var d = u[0];
            u = u[1];
            var y = d.split('_');
            o =
              2 <= y.length && y[1] == 'type'
                ? o + (d + '=' + u + '&')
                : o + (d + '=redacted&');
          }
        }
      else o = null;
    else o = s;
    return (
      'XMLHTTP REQ (' +
      r +
      ') [attempt ' +
      i +
      ']: ' +
      t +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function Ew(e, t, n, r, i, s, o) {
  e.info(function () {
    return (
      'XMLHTTP RESP (' +
      r +
      ') [ attempt ' +
      i +
      ']: ' +
      t +
      `
` +
      n +
      `
` +
      s +
      ' ' +
      o
    );
  });
}
function On(e, t, n, r) {
  e.info(function () {
    return 'XMLHTTP TEXT (' + t + '): ' + Iw(e, n) + (r ? ' ' + r : '');
  });
}
function Sw(e, t) {
  e.info(function () {
    return 'TIMEOUT: ' + t;
  });
}
Lo.prototype.info = function () {};
function Iw(e, t) {
  if (!e.g) return t;
  if (!t) return null;
  try {
    var n = JSON.parse(t);
    if (n) {
      for (e = 0; e < n.length; e++)
        if (Array.isArray(n[e])) {
          var r = n[e];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != 'noop' && s != 'stop' && s != 'close')
                for (var o = 1; o < i.length; o++) i[o] = '';
            }
          }
        }
    }
    return Yu(n);
  } catch {
    return t;
  }
}
var lr = {},
  hf = null;
function ec() {
  return (hf = hf || new te());
}
lr.Ta = 'serverreachability';
function Eg(e) {
  ge.call(this, lr.Ta, e);
}
ne(Eg, ge);
function vi(e) {
  const t = ec();
  le(t, new Eg(t));
}
lr.STAT_EVENT = 'statevent';
function Sg(e, t) {
  ge.call(this, lr.STAT_EVENT, e), (this.stat = t);
}
ne(Sg, ge);
function ye(e) {
  const t = ec();
  le(t, new Sg(t, e));
}
lr.Ua = 'timingevent';
function Ig(e, t) {
  ge.call(this, lr.Ua, e), (this.size = t);
}
ne(Ig, ge);
function $i(e, t) {
  if (typeof e != 'function') throw Error('Fn must not be null and must be a function');
  return L.setTimeout(function () {
    e();
  }, t);
}
var tc = {
    NO_ERROR: 0,
    rb: 1,
    Eb: 2,
    Db: 3,
    yb: 4,
    Cb: 5,
    Fb: 6,
    Qa: 7,
    TIMEOUT: 8,
    Ib: 9,
  },
  Tw = {
    wb: 'complete',
    Sb: 'success',
    Ra: 'error',
    Qa: 'abort',
    Kb: 'ready',
    Lb: 'readystatechange',
    TIMEOUT: 'timeout',
    Gb: 'incrementaldata',
    Jb: 'progress',
    zb: 'downloadprogress',
    $b: 'uploadprogress',
  };
function nc() {}
nc.prototype.h = null;
function ff(e) {
  return e.h || (e.h = e.i());
}
function kw() {}
var Ui = { OPEN: 'a', vb: 'b', Ra: 'c', Hb: 'd' };
function rc() {
  ge.call(this, 'd');
}
ne(rc, ge);
function ic() {
  ge.call(this, 'c');
}
ne(ic, ge);
var ka;
function Do() {}
ne(Do, nc);
Do.prototype.g = function () {
  return new XMLHttpRequest();
};
Do.prototype.i = function () {
  return {};
};
ka = new Do();
function Fi(e, t, n, r) {
  (this.l = e),
    (this.j = t),
    (this.m = n),
    (this.W = r || 1),
    (this.U = new mi(this)),
    (this.P = Cw),
    (e = Sa ? 125 : void 0),
    (this.V = new Oo(e)),
    (this.I = null),
    (this.i = !1),
    (this.s = this.A = this.v = this.L = this.G = this.Y = this.B = null),
    (this.F = []),
    (this.g = null),
    (this.C = 0),
    (this.o = this.u = null),
    (this.ca = -1),
    (this.J = !1),
    (this.O = 0),
    (this.M = null),
    (this.ba = this.K = this.aa = this.S = !1),
    (this.h = new Tg());
}
function Tg() {
  (this.i = null), (this.g = ''), (this.h = !1);
}
var Cw = 45e3,
  Ca = {},
  eo = {};
E = Fi.prototype;
E.setTimeout = function (e) {
  this.P = e;
};
function Pa(e, t, n) {
  (e.L = 1), (e.v = Mo(ht(t))), (e.s = n), (e.S = !0), kg(e, null);
}
function kg(e, t) {
  (e.G = Date.now()), ji(e), (e.A = ht(e.v));
  var n = e.A,
    r = e.W;
  Array.isArray(r) || (r = [String(r)]),
    Dg(n.i, 't', r),
    (e.C = 0),
    (n = e.l.J),
    (e.h = new Tg()),
    (e.g = em(e.l, n ? t : null, !e.s)),
    0 < e.O && (e.M = new _w(pe(e.Pa, e, e.g), e.O)),
    _g(e.U, e.g, 'readystatechange', e.nb),
    (t = e.I ? ug(e.I) : {}),
    e.s
      ? (e.u || (e.u = 'POST'),
        (t['Content-Type'] = 'application/x-www-form-urlencoded'),
        e.g.ha(e.A, e.u, e.s, t))
      : ((e.u = 'GET'), e.g.ha(e.A, e.u, null, t)),
    vi(),
    ww(e.j, e.u, e.A, e.m, e.W, e.s);
}
E.nb = function (e) {
  e = e.target;
  const t = this.M;
  t && be(e) == 3 ? t.l() : this.Pa(e);
};
E.Pa = function (e) {
  try {
    if (e == this.g)
      e: {
        const d = be(this.g);
        var t = this.g.Ia();
        const y = this.g.da();
        if (
          !(3 > d) &&
          (d != 3 || Sa || (this.g && (this.h.h || this.g.ja() || mf(this.g))))
        ) {
          this.J || d != 4 || t == 7 || (t == 8 || 0 >= y ? vi(3) : vi(2)), xo(this);
          var n = this.g.da();
          this.ca = n;
          t: if (Cg(this)) {
            var r = mf(this.g);
            e = '';
            var i = r.length,
              s = be(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder == 'undefined') {
                nn(this), Kr(this);
                var o = '';
                break t;
              }
              this.h.i = new L.TextDecoder();
            }
            for (t = 0; t < i; t++)
              (this.h.h = !0), (e += this.h.i.decode(r[t], { stream: s && t == i - 1 }));
            r.splice(0, i), (this.h.g += e), (this.C = 0), (o = this.h.g);
          } else o = this.g.ja();
          if (
            ((this.i = n == 200),
            Ew(this.j, this.u, this.A, this.m, this.W, d, n),
            this.i)
          ) {
            if (this.aa && !this.K) {
              t: {
                if (this.g) {
                  var l,
                    a = this.g;
                  if (
                    (l = a.g ? a.g.getResponseHeader('X-HTTP-Initial-Response') : null) &&
                    !hi(l)
                  ) {
                    var u = l;
                    break t;
                  }
                }
                u = null;
              }
              if ((n = u))
                On(
                  this.j,
                  this.m,
                  n,
                  'Initial handshake response via X-HTTP-Initial-Response',
                ),
                  (this.K = !0),
                  Aa(this, n);
              else {
                (this.i = !1), (this.o = 3), ye(12), nn(this), Kr(this);
                break e;
              }
            }
            this.S
              ? (Pg(this, d, o),
                Sa &&
                  this.i &&
                  d == 3 &&
                  (_g(this.U, this.V, 'tick', this.mb), this.V.start()))
              : (On(this.j, this.m, o, null), Aa(this, o)),
              d == 4 && nn(this),
              this.i &&
                !this.J &&
                (d == 4 ? Yg(this.l, this) : ((this.i = !1), ji(this)));
          } else
            Kw(this.g),
              n == 400 && 0 < o.indexOf('Unknown SID')
                ? ((this.o = 3), ye(12))
                : ((this.o = 0), ye(13)),
              nn(this),
              Kr(this);
        }
      }
  } catch {
  } finally {
  }
};
function Cg(e) {
  return e.g ? e.u == 'GET' && e.L != 2 && e.l.Ha : !1;
}
function Pg(e, t, n) {
  let r = !0,
    i;
  for (; !e.J && e.C < n.length; )
    if (((i = Pw(e, n)), i == eo)) {
      t == 4 && ((e.o = 4), ye(14), (r = !1)),
        On(e.j, e.m, null, '[Incomplete Response]');
      break;
    } else if (i == Ca) {
      (e.o = 4), ye(15), On(e.j, e.m, n, '[Invalid Chunk]'), (r = !1);
      break;
    } else On(e.j, e.m, i, null), Aa(e, i);
  Cg(e) && i != eo && i != Ca && ((e.h.g = ''), (e.C = 0)),
    t != 4 || n.length != 0 || e.h.h || ((e.o = 1), ye(16), (r = !1)),
    (e.i = e.i && r),
    r
      ? 0 < n.length &&
        !e.ba &&
        ((e.ba = !0),
        (t = e.l),
        t.g == e &&
          t.ca &&
          !t.M &&
          (t.l.info('Great, no buffering proxy detected. Bytes received: ' + n.length),
          cc(t),
          (t.M = !0),
          ye(11)))
      : (On(e.j, e.m, n, '[Invalid Chunked Response]'), nn(e), Kr(e));
}
E.mb = function () {
  if (this.g) {
    var e = be(this.g),
      t = this.g.ja();
    this.C < t.length && (xo(this), Pg(this, e, t), this.i && e != 4 && ji(this));
  }
};
function Pw(e, t) {
  var n = e.C,
    r = t.indexOf(
      `
`,
      n,
    );
  return r == -1
    ? eo
    : ((n = Number(t.substring(n, r))),
      isNaN(n)
        ? Ca
        : ((r += 1),
          r + n > t.length ? eo : ((t = t.slice(r, r + n)), (e.C = r + n), t)));
}
E.cancel = function () {
  (this.J = !0), nn(this);
};
function ji(e) {
  (e.Y = Date.now() + e.P), Ag(e, e.P);
}
function Ag(e, t) {
  if (e.B != null) throw Error('WatchDog timer not null');
  e.B = $i(pe(e.lb, e), t);
}
function xo(e) {
  e.B && (L.clearTimeout(e.B), (e.B = null));
}
E.lb = function () {
  this.B = null;
  const e = Date.now();
  0 <= e - this.Y
    ? (Sw(this.j, this.A),
      this.L != 2 && (vi(), ye(17)),
      nn(this),
      (this.o = 2),
      Kr(this))
    : Ag(this, this.Y - e);
};
function Kr(e) {
  e.l.H == 0 || e.J || Yg(e.l, e);
}
function nn(e) {
  xo(e);
  var t = e.M;
  t && typeof t.sa == 'function' && t.sa(),
    (e.M = null),
    Ju(e.V),
    wg(e.U),
    e.g && ((t = e.g), (e.g = null), t.abort(), t.sa());
}
function Aa(e, t) {
  try {
    var n = e.l;
    if (n.H != 0 && (n.g == e || Ra(n.i, e))) {
      if (!e.K && Ra(n.i, e) && n.H == 3) {
        try {
          var r = n.Ja.g.parse(t);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.G + 3e3 < e.G) ro(n), jo(n);
                else break e;
              uc(n), ye(18);
            }
          } else
            (n.Fa = i[1]),
              0 < n.Fa - n.V &&
                37500 > i[2] &&
                n.G &&
                n.A == 0 &&
                !n.v &&
                (n.v = $i(pe(n.ib, n), 6e3));
          if (1 >= $g(n.i) && n.oa) {
            try {
              n.oa();
            } catch {}
            n.oa = void 0;
          }
        } else rn(n, 11);
      } else if (((e.K || n.g == e) && ro(n), !hi(t)))
        for (i = n.Ja.g.parse(t), t = 0; t < i.length; t++) {
          let u = i[t];
          if (((n.V = u[0]), (u = u[1]), n.H == 2))
            if (u[0] == 'c') {
              (n.K = u[1]), (n.pa = u[2]);
              const d = u[3];
              d != null && ((n.ra = d), n.l.info('VER=' + n.ra));
              const y = u[4];
              y != null && ((n.Ga = y), n.l.info('SVER=' + n.Ga));
              const p = u[5];
              p != null &&
                typeof p == 'number' &&
                0 < p &&
                ((r = 1.5 * p), (n.L = r), n.l.info('backChannelRequestTimeoutMs_=' + r)),
                (r = n);
              const w = e.g;
              if (w) {
                const T = w.g ? w.g.getResponseHeader('X-Client-Wire-Protocol') : null;
                if (T) {
                  var s = r.i;
                  s.g ||
                    (T.indexOf('spdy') == -1 &&
                      T.indexOf('quic') == -1 &&
                      T.indexOf('h2') == -1) ||
                    ((s.j = s.l), (s.g = new Set()), s.h && (sc(s, s.h), (s.h = null)));
                }
                if (r.F) {
                  const k = w.g ? w.g.getResponseHeader('X-HTTP-Session-Id') : null;
                  k && ((r.Da = k), V(r.I, r.F, k));
                }
              }
              (n.H = 3),
                n.h && n.h.Ba(),
                n.ca &&
                  ((n.S = Date.now() - e.G), n.l.info('Handshake RTT: ' + n.S + 'ms')),
                (r = n);
              var o = e;
              if (((r.wa = Zg(r, r.J ? r.pa : null, r.Y)), o.K)) {
                Ug(r.i, o);
                var l = o,
                  a = r.L;
                a && l.setTimeout(a), l.B && (xo(l), ji(l)), (r.g = o);
              } else qg(r);
              0 < n.j.length && Bo(n);
            } else (u[0] != 'stop' && u[0] != 'close') || rn(n, 7);
          else
            n.H == 3 &&
              (u[0] == 'stop' || u[0] == 'close'
                ? u[0] == 'stop'
                  ? rn(n, 7)
                  : ac(n)
                : u[0] != 'noop' && n.h && n.h.Aa(u),
              (n.A = 0));
        }
    }
    vi(4);
  } catch {}
}
function Aw(e) {
  if (e.Z && typeof e.Z == 'function') return e.Z();
  if (
    (typeof Map != 'undefined' && e instanceof Map) ||
    (typeof Set != 'undefined' && e instanceof Set)
  )
    return Array.from(e.values());
  if (typeof e == 'string') return e.split('');
  if (Po(e)) {
    for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
    return t;
  }
  (t = []), (n = 0);
  for (r in e) t[n++] = e[r];
  return t;
}
function Rw(e) {
  if (e.ta && typeof e.ta == 'function') return e.ta();
  if (!e.Z || typeof e.Z != 'function') {
    if (typeof Map != 'undefined' && e instanceof Map) return Array.from(e.keys());
    if (!(typeof Set != 'undefined' && e instanceof Set)) {
      if (Po(e) || typeof e == 'string') {
        var t = [];
        e = e.length;
        for (var n = 0; n < e; n++) t.push(n);
        return t;
      }
      (t = []), (n = 0);
      for (const r in e) t[n++] = r;
      return t;
    }
  }
}
function Rg(e, t) {
  if (e.forEach && typeof e.forEach == 'function') e.forEach(t, void 0);
  else if (Po(e) || typeof e == 'string') Array.prototype.forEach.call(e, t, void 0);
  else
    for (var n = Rw(e), r = Aw(e), i = r.length, s = 0; s < i; s++)
      t.call(void 0, r[s], n && n[s], e);
}
var Ng = RegExp(
  '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
);
function Nw(e, t) {
  if (e) {
    e = e.split('&');
    for (var n = 0; n < e.length; n++) {
      var r = e[n].indexOf('='),
        i = null;
      if (0 <= r) {
        var s = e[n].substring(0, r);
        i = e[n].substring(r + 1);
      } else s = e[n];
      t(s, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '');
    }
  }
}
function an(e) {
  if (
    ((this.g = this.s = this.j = ''),
    (this.m = null),
    (this.o = this.l = ''),
    (this.h = !1),
    e instanceof an)
  ) {
    (this.h = e.h),
      to(this, e.j),
      (this.s = e.s),
      (this.g = e.g),
      no(this, e.m),
      (this.l = e.l);
    var t = e.i,
      n = new yi();
    (n.i = t.i), t.g && ((n.g = new Map(t.g)), (n.h = t.h)), df(this, n), (this.o = e.o);
  } else
    e && (t = String(e).match(Ng))
      ? ((this.h = !1),
        to(this, t[1] || '', !0),
        (this.s = Lr(t[2] || '')),
        (this.g = Lr(t[3] || '', !0)),
        no(this, t[4]),
        (this.l = Lr(t[5] || '', !0)),
        df(this, t[6] || '', !0),
        (this.o = Lr(t[7] || '')))
      : ((this.h = !1), (this.i = new yi(null, this.h)));
}
an.prototype.toString = function () {
  var e = [],
    t = this.j;
  t && e.push(Dr(t, pf, !0), ':');
  var n = this.g;
  return (
    (n || t == 'file') &&
      (e.push('//'),
      (t = this.s) && e.push(Dr(t, pf, !0), '@'),
      e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
      (n = this.m),
      n != null && e.push(':', String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != '/' && e.push('/'),
      e.push(Dr(n, n.charAt(0) == '/' ? Dw : Lw, !0))),
    (n = this.i.toString()) && e.push('?', n),
    (n = this.o) && e.push('#', Dr(n, Mw)),
    e.join('')
  );
};
function ht(e) {
  return new an(e);
}
function to(e, t, n) {
  (e.j = n ? Lr(t, !0) : t), e.j && (e.j = e.j.replace(/:$/, ''));
}
function no(e, t) {
  if (t) {
    if (((t = Number(t)), isNaN(t) || 0 > t)) throw Error('Bad port number ' + t);
    e.m = t;
  } else e.m = null;
}
function df(e, t, n) {
  t instanceof yi
    ? ((e.i = t), $w(e.i, e.h))
    : (n || (t = Dr(t, xw)), (e.i = new yi(t, e.h)));
}
function V(e, t, n) {
  e.i.set(t, n);
}
function Mo(e) {
  return (
    V(
      e,
      'zx',
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36),
    ),
    e
  );
}
function Lr(e, t) {
  return e ? (t ? decodeURI(e.replace(/%25/g, '%2525')) : decodeURIComponent(e)) : '';
}
function Dr(e, t, n) {
  return typeof e == 'string'
    ? ((e = encodeURI(e).replace(t, Ow)),
      n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
      e)
    : null;
}
function Ow(e) {
  return (
    (e = e.charCodeAt(0)), '%' + ((e >> 4) & 15).toString(16) + (e & 15).toString(16)
  );
}
var pf = /[#\/\?@]/g,
  Lw = /[#\?:]/g,
  Dw = /[#\?]/g,
  xw = /[#\?@]/g,
  Mw = /#/g;
function yi(e, t) {
  (this.h = this.g = null), (this.i = e || null), (this.j = !!t);
}
function bt(e) {
  e.g ||
    ((e.g = new Map()),
    (e.h = 0),
    e.i &&
      Nw(e.i, function (t, n) {
        e.add(decodeURIComponent(t.replace(/\+/g, ' ')), n);
      }));
}
E = yi.prototype;
E.add = function (e, t) {
  bt(this), (this.i = null), (e = ar(this, e));
  var n = this.g.get(e);
  return n || this.g.set(e, (n = [])), n.push(t), (this.h += 1), this;
};
function Og(e, t) {
  bt(e),
    (t = ar(e, t)),
    e.g.has(t) && ((e.i = null), (e.h -= e.g.get(t).length), e.g.delete(t));
}
function Lg(e, t) {
  return bt(e), (t = ar(e, t)), e.g.has(t);
}
E.forEach = function (e, t) {
  bt(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        e.call(t, i, r, this);
      }, this);
    }, this);
};
E.ta = function () {
  bt(this);
  const e = Array.from(this.g.values()),
    t = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < t.length; r++) {
    const i = e[r];
    for (let s = 0; s < i.length; s++) n.push(t[r]);
  }
  return n;
};
E.Z = function (e) {
  bt(this);
  let t = [];
  if (typeof e == 'string') Lg(this, e) && (t = t.concat(this.g.get(ar(this, e))));
  else {
    e = Array.from(this.g.values());
    for (let n = 0; n < e.length; n++) t = t.concat(e[n]);
  }
  return t;
};
E.set = function (e, t) {
  return (
    bt(this),
    (this.i = null),
    (e = ar(this, e)),
    Lg(this, e) && (this.h -= this.g.get(e).length),
    this.g.set(e, [t]),
    (this.h += 1),
    this
  );
};
E.get = function (e, t) {
  return e ? ((e = this.Z(e)), 0 < e.length ? String(e[0]) : t) : t;
};
function Dg(e, t, n) {
  Og(e, t), 0 < n.length && ((e.i = null), e.g.set(ar(e, t), Hu(n)), (e.h += n.length));
}
E.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return '';
  const e = [],
    t = Array.from(this.g.keys());
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    const s = encodeURIComponent(String(r)),
      o = this.Z(r);
    for (r = 0; r < o.length; r++) {
      var i = s;
      o[r] !== '' && (i += '=' + encodeURIComponent(String(o[r]))), e.push(i);
    }
  }
  return (this.i = e.join('&'));
};
function ar(e, t) {
  return (t = String(t)), e.j && (t = t.toLowerCase()), t;
}
function $w(e, t) {
  t &&
    !e.j &&
    (bt(e),
    (e.i = null),
    e.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Og(this, r), Dg(this, i, n));
    }, e)),
    (e.j = t);
}
var Uw = class {
  constructor(e, t) {
    (this.g = e), (this.map = t);
  }
};
function xg(e) {
  (this.l = e || Fw),
    L.PerformanceNavigationTiming
      ? ((e = L.performance.getEntriesByType('navigation')),
        (e =
          0 < e.length && (e[0].nextHopProtocol == 'hq' || e[0].nextHopProtocol == 'h2')))
      : (e = !!(L.g && L.g.Ka && L.g.Ka() && L.g.Ka().ec)),
    (this.j = e ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var Fw = 10;
function Mg(e) {
  return e.h ? !0 : e.g ? e.g.size >= e.j : !1;
}
function $g(e) {
  return e.h ? 1 : e.g ? e.g.size : 0;
}
function Ra(e, t) {
  return e.h ? e.h == t : e.g ? e.g.has(t) : !1;
}
function sc(e, t) {
  e.g ? e.g.add(t) : (e.h = t);
}
function Ug(e, t) {
  e.h && e.h == t ? (e.h = null) : e.g && e.g.has(t) && e.g.delete(t);
}
xg.prototype.cancel = function () {
  if (((this.i = Fg(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const e of this.g.values()) e.cancel();
    this.g.clear();
  }
};
function Fg(e) {
  if (e.h != null) return e.i.concat(e.h.F);
  if (e.g != null && e.g.size !== 0) {
    let t = e.i;
    for (const n of e.g.values()) t = t.concat(n.F);
    return t;
  }
  return Hu(e.i);
}
var jw = class {
  stringify(e) {
    return L.JSON.stringify(e, void 0);
  }
  parse(e) {
    return L.JSON.parse(e, void 0);
  }
};
function Bw() {
  this.g = new jw();
}
function Vw(e, t, n) {
  const r = n || '';
  try {
    Rg(e, function (i, s) {
      let o = i;
      xi(i) && (o = Yu(i)), t.push(r + s + '=' + encodeURIComponent(o));
    });
  } catch (i) {
    throw (t.push(r + 'type=' + encodeURIComponent('_badmap')), i);
  }
}
function zw(e, t) {
  const n = new Lo();
  if (L.Image) {
    const r = new Image();
    (r.onload = is(os, n, r, 'TestLoadImage: loaded', !0, t)),
      (r.onerror = is(os, n, r, 'TestLoadImage: error', !1, t)),
      (r.onabort = is(os, n, r, 'TestLoadImage: abort', !1, t)),
      (r.ontimeout = is(os, n, r, 'TestLoadImage: timeout', !1, t)),
      L.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = e);
  } else t(!1);
}
function os(e, t, n, r, i) {
  try {
    (t.onload = null), (t.onerror = null), (t.onabort = null), (t.ontimeout = null), i(r);
  } catch {}
}
function $o(e) {
  (this.l = e.fc || null), (this.j = e.ob || !1);
}
ne($o, nc);
$o.prototype.g = function () {
  return new Uo(this.l, this.j);
};
$o.prototype.i = (function (e) {
  return function () {
    return e;
  };
})({});
function Uo(e, t) {
  te.call(this),
    (this.F = e),
    (this.u = t),
    (this.m = void 0),
    (this.readyState = oc),
    (this.status = 0),
    (this.responseType = this.responseText = this.response = this.statusText = ''),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = 'GET'),
    (this.B = ''),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
ne(Uo, te);
var oc = 0;
E = Uo.prototype;
E.open = function (e, t) {
  if (this.readyState != oc) throw (this.abort(), Error('Error reopening a connection'));
  (this.C = e), (this.B = t), (this.readyState = 1), _i(this);
};
E.send = function (e) {
  if (this.readyState != 1) throw (this.abort(), Error('need to call open() first. '));
  this.g = !0;
  const t = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  e && (t.body = e),
    (this.F || L)
      .fetch(new Request(this.B, t))
      .then(this.$a.bind(this), this.ka.bind(this));
};
E.abort = function () {
  (this.response = this.responseText = ''),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel('Request was aborted.').catch(() => {}),
    1 <= this.readyState && this.g && this.readyState != 4 && ((this.g = !1), Bi(this)),
    (this.readyState = oc);
};
E.$a = function (e) {
  if (
    this.g &&
    ((this.l = e),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = e.headers),
      (this.readyState = 2),
      _i(this)),
    this.g && ((this.readyState = 3), _i(this), this.g))
  )
    if (this.responseType === 'arraybuffer')
      e.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
    else if (typeof L.ReadableStream != 'undefined' && 'body' in e) {
      if (((this.j = e.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.',
          );
        this.response = [];
      } else (this.response = this.responseText = ''), (this.A = new TextDecoder());
      jg(this);
    } else e.text().then(this.Za.bind(this), this.ka.bind(this));
};
function jg(e) {
  e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e));
}
E.Xa = function (e) {
  if (this.g) {
    if (this.u && e.value) this.response.push(e.value);
    else if (!this.u) {
      var t = e.value ? e.value : new Uint8Array(0);
      (t = this.A.decode(t, { stream: !e.done })) &&
        (this.response = this.responseText += t);
    }
    e.done ? Bi(this) : _i(this), this.readyState == 3 && jg(this);
  }
};
E.Za = function (e) {
  this.g && ((this.response = this.responseText = e), Bi(this));
};
E.Ya = function (e) {
  this.g && ((this.response = e), Bi(this));
};
E.ka = function () {
  this.g && Bi(this);
};
function Bi(e) {
  (e.readyState = 4), (e.l = null), (e.j = null), (e.A = null), _i(e);
}
E.setRequestHeader = function (e, t) {
  this.v.append(e, t);
};
E.getResponseHeader = function (e) {
  return (this.h && this.h.get(e.toLowerCase())) || '';
};
E.getAllResponseHeaders = function () {
  if (!this.h) return '';
  const e = [],
    t = this.h.entries();
  for (var n = t.next(); !n.done; )
    (n = n.value), e.push(n[0] + ': ' + n[1]), (n = t.next());
  return e.join(`\r
`);
};
function _i(e) {
  e.onreadystatechange && e.onreadystatechange.call(e);
}
Object.defineProperty(Uo.prototype, 'withCredentials', {
  get: function () {
    return this.m === 'include';
  },
  set: function (e) {
    this.m = e ? 'include' : 'same-origin';
  },
});
var Hw = L.JSON.parse;
function q(e) {
  te.call(this),
    (this.headers = new Map()),
    (this.u = e || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.I = ''),
    (this.m = 0),
    (this.j = ''),
    (this.l = this.G = this.v = this.F = !1),
    (this.B = 0),
    (this.A = null),
    (this.K = Bg),
    (this.L = this.M = !1);
}
ne(q, te);
var Bg = '',
  Ww = /^https?$/i,
  bw = ['POST', 'PUT'];
E = q.prototype;
E.Oa = function (e) {
  this.M = e;
};
E.ha = function (e, t, n, r) {
  if (this.g)
    throw Error(
      '[goog.net.XhrIo] Object is active with another request=' +
        this.I +
        '; newUri=' +
        e,
    );
  (t = t ? t.toUpperCase() : 'GET'),
    (this.I = e),
    (this.j = ''),
    (this.m = 0),
    (this.F = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : ka.g()),
    (this.C = this.u ? ff(this.u) : ff(ka)),
    (this.g.onreadystatechange = pe(this.La, this));
  try {
    (this.G = !0), this.g.open(t, String(e), !0), (this.G = !1);
  } catch (s) {
    gf(this, s);
    return;
  }
  if (((e = n || ''), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype) for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == 'function' && typeof r.get == 'function')
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error('Unknown input type for opt_headers: ' + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == 'content-type')),
    (i = L.FormData && e instanceof L.FormData),
    !(0 <= sg(bw, t)) ||
      r ||
      i ||
      n.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.K && (this.g.responseType = this.K),
    'withCredentials' in this.g &&
      this.g.withCredentials !== this.M &&
      (this.g.withCredentials = this.M);
  try {
    Hg(this),
      0 < this.B &&
        ((this.L = Gw(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = pe(this.ua, this)))
          : (this.A = Zu(this.ua, this.B, this))),
      (this.v = !0),
      this.g.send(e),
      (this.v = !1);
  } catch (s) {
    gf(this, s);
  }
};
function Gw(e) {
  return fi && typeof e.timeout == 'number' && e.ontimeout !== void 0;
}
E.ua = function () {
  typeof zu != 'undefined' &&
    this.g &&
    ((this.j = 'Timed out after ' + this.B + 'ms, aborting'),
    (this.m = 8),
    le(this, 'timeout'),
    this.abort(8));
};
function gf(e, t) {
  (e.h = !1),
    e.g && ((e.l = !0), e.g.abort(), (e.l = !1)),
    (e.j = t),
    (e.m = 5),
    Vg(e),
    Fo(e);
}
function Vg(e) {
  e.F || ((e.F = !0), le(e, 'complete'), le(e, 'error'));
}
E.abort = function (e) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = e || 7),
    le(this, 'complete'),
    le(this, 'abort'),
    Fo(this));
};
E.N = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    Fo(this, !0)),
    q.$.N.call(this);
};
E.La = function () {
  this.s || (this.G || this.v || this.l ? zg(this) : this.kb());
};
E.kb = function () {
  zg(this);
};
function zg(e) {
  if (e.h && typeof zu != 'undefined' && (!e.C[1] || be(e) != 4 || e.da() != 2)) {
    if (e.v && be(e) == 4) Zu(e.La, 0, e);
    else if ((le(e, 'readystatechange'), be(e) == 4)) {
      e.h = !1;
      try {
        const o = e.da();
        e: switch (o) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var t = !0;
            break e;
          default:
            t = !1;
        }
        var n;
        if (!(n = t)) {
          var r;
          if ((r = o === 0)) {
            var i = String(e.I).match(Ng)[1] || null;
            !i &&
              L.self &&
              L.self.location &&
              (i = L.self.location.protocol.slice(0, -1)),
              (r = !Ww.test(i ? i.toLowerCase() : ''));
          }
          n = r;
        }
        if (n) le(e, 'complete'), le(e, 'success');
        else {
          e.m = 6;
          try {
            var s = 2 < be(e) ? e.g.statusText : '';
          } catch {
            s = '';
          }
          (e.j = s + ' [' + e.da() + ']'), Vg(e);
        }
      } finally {
        Fo(e);
      }
    }
  }
}
function Fo(e, t) {
  if (e.g) {
    Hg(e);
    const n = e.g,
      r = e.C[0] ? () => {} : null;
    (e.g = null), (e.C = null), t || le(e, 'ready');
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function Hg(e) {
  e.g && e.L && (e.g.ontimeout = null), e.A && (L.clearTimeout(e.A), (e.A = null));
}
E.isActive = function () {
  return !!this.g;
};
function be(e) {
  return e.g ? e.g.readyState : 0;
}
E.da = function () {
  try {
    return 2 < be(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
E.ja = function () {
  try {
    return this.g ? this.g.responseText : '';
  } catch {
    return '';
  }
};
E.Wa = function (e) {
  if (this.g) {
    var t = this.g.responseText;
    return e && t.indexOf(e) == 0 && (t = t.substring(e.length)), Hw(t);
  }
};
function mf(e) {
  try {
    if (!e.g) return null;
    if ('response' in e.g) return e.g.response;
    switch (e.K) {
      case Bg:
      case 'text':
        return e.g.responseText;
      case 'arraybuffer':
        if ('mozResponseArrayBuffer' in e.g) return e.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
function Kw(e) {
  const t = {};
  e = ((e.g && 2 <= be(e) && e.g.getAllResponseHeaders()) || '').split(`\r
`);
  for (let r = 0; r < e.length; r++) {
    if (hi(e[r])) continue;
    var n = mw(e[r]);
    const i = n[0];
    if (((n = n[1]), typeof n != 'string')) continue;
    n = n.trim();
    const s = t[i] || [];
    (t[i] = s), s.push(n);
  }
  uw(t, function (r) {
    return r.join(', ');
  });
}
E.Ia = function () {
  return this.m;
};
E.Sa = function () {
  return typeof this.j == 'string' ? this.j : String(this.j);
};
function Wg(e) {
  let t = '';
  return (
    bu(e, function (n, r) {
      (t += r),
        (t += ':'),
        (t += n),
        (t += `\r
`);
    }),
    t
  );
}
function lc(e, t, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = Wg(n)),
    typeof e == 'string' ? n != null && encodeURIComponent(String(n)) : V(e, t, n));
}
function Tr(e, t, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[e]) || t;
}
function bg(e) {
  (this.Ga = 0),
    (this.j = []),
    (this.l = new Lo()),
    (this.pa =
      this.wa =
      this.I =
      this.Y =
      this.g =
      this.Da =
      this.F =
      this.na =
      this.o =
      this.U =
      this.s =
        null),
    (this.fb = this.W = 0),
    (this.cb = Tr('failFast', !1, e)),
    (this.G = this.v = this.u = this.m = this.h = null),
    (this.aa = !0),
    (this.Fa = this.V = -1),
    (this.ba = this.A = this.C = 0),
    (this.ab = Tr('baseRetryDelayMs', 5e3, e)),
    (this.hb = Tr('retryDelaySeedMs', 1e4, e)),
    (this.eb = Tr('forwardChannelMaxRetries', 2, e)),
    (this.xa = Tr('forwardChannelRequestTimeoutMs', 2e4, e)),
    (this.va = (e && e.xmlHttpFactory) || void 0),
    (this.Ha = (e && e.dc) || !1),
    (this.L = void 0),
    (this.J = (e && e.supportsCrossDomainXhr) || !1),
    (this.K = ''),
    (this.i = new xg(e && e.concurrentRequestLimit)),
    (this.Ja = new Bw()),
    (this.P = (e && e.fastHandshake) || !1),
    (this.O = (e && e.encodeInitMessageHeaders) || !1),
    this.P && this.O && (this.O = !1),
    (this.bb = (e && e.bc) || !1),
    e && e.Ea && this.l.Ea(),
    e && e.forceLongPolling && (this.aa = !1),
    (this.ca = (!this.P && this.aa && e && e.detectBufferingProxy) || !1),
    (this.qa = void 0),
    e &&
      e.longPollingTimeout &&
      0 < e.longPollingTimeout &&
      (this.qa = e.longPollingTimeout),
    (this.oa = void 0),
    (this.S = 0),
    (this.M = !1),
    (this.ma = this.B = null);
}
E = bg.prototype;
E.ra = 8;
E.H = 1;
function ac(e) {
  if ((Gg(e), e.H == 3)) {
    var t = e.W++,
      n = ht(e.I);
    if (
      (V(n, 'SID', e.K),
      V(n, 'RID', t),
      V(n, 'TYPE', 'terminate'),
      Vi(e, n),
      (t = new Fi(e, e.l, t)),
      (t.L = 2),
      (t.v = Mo(ht(n))),
      (n = !1),
      L.navigator && L.navigator.sendBeacon)
    )
      try {
        n = L.navigator.sendBeacon(t.v.toString(), '');
      } catch {}
    !n && L.Image && ((new Image().src = t.v), (n = !0)),
      n || ((t.g = em(t.l, null)), t.g.ha(t.v)),
      (t.G = Date.now()),
      ji(t);
  }
  Jg(e);
}
function jo(e) {
  e.g && (cc(e), e.g.cancel(), (e.g = null));
}
function Gg(e) {
  jo(e),
    e.u && (L.clearTimeout(e.u), (e.u = null)),
    ro(e),
    e.i.cancel(),
    e.m && (typeof e.m == 'number' && L.clearTimeout(e.m), (e.m = null));
}
function Bo(e) {
  if (!Mg(e.i) && !e.m) {
    e.m = !0;
    var t = e.Na;
    pi || vg(), gi || (pi(), (gi = !0)), Qu.add(t, e), (e.C = 0);
  }
}
function qw(e, t) {
  return $g(e.i) >= e.i.j - (e.m ? 1 : 0)
    ? !1
    : e.m
    ? ((e.j = t.F.concat(e.j)), !0)
    : e.H == 1 || e.H == 2 || e.C >= (e.cb ? 0 : e.eb)
    ? !1
    : ((e.m = $i(pe(e.Na, e, t), Qg(e, e.C))), e.C++, !0);
}
E.Na = function (e) {
  if (this.m)
    if (((this.m = null), this.H == 1)) {
      if (!e) {
        (this.W = Math.floor(1e5 * Math.random())), (e = this.W++);
        const i = new Fi(this, this.l, e);
        let s = this.s;
        if (
          (this.U && (s ? ((s = ug(s)), cg(s, this.U)) : (s = this.U)),
          this.o !== null || this.O || ((i.I = s), (s = null)),
          this.P)
        )
          e: {
            for (var t = 0, n = 0; n < this.j.length; n++) {
              t: {
                var r = this.j[n];
                if ('__data__' in r.map && ((r = r.map.__data__), typeof r == 'string')) {
                  r = r.length;
                  break t;
                }
                r = void 0;
              }
              if (r === void 0) break;
              if (((t += r), 4096 < t)) {
                t = n;
                break e;
              }
              if (t === 4096 || n === this.j.length - 1) {
                t = n + 1;
                break e;
              }
            }
            t = 1e3;
          }
        else t = 1e3;
        (t = Kg(this, i, t)),
          (n = ht(this.I)),
          V(n, 'RID', e),
          V(n, 'CVER', 22),
          this.F && V(n, 'X-HTTP-Session-Id', this.F),
          Vi(this, n),
          s &&
            (this.O
              ? (t = 'headers=' + encodeURIComponent(String(Wg(s))) + '&' + t)
              : this.o && lc(n, this.o, s)),
          sc(this.i, i),
          this.bb && V(n, 'TYPE', 'init'),
          this.P
            ? (V(n, '$req', t), V(n, 'SID', 'null'), (i.aa = !0), Pa(i, n, null))
            : Pa(i, n, t),
          (this.H = 2);
      }
    } else
      this.H == 3 && (e ? vf(this, e) : this.j.length == 0 || Mg(this.i) || vf(this));
};
function vf(e, t) {
  var n;
  t ? (n = t.m) : (n = e.W++);
  const r = ht(e.I);
  V(r, 'SID', e.K),
    V(r, 'RID', n),
    V(r, 'AID', e.V),
    Vi(e, r),
    e.o && e.s && lc(r, e.o, e.s),
    (n = new Fi(e, e.l, n, e.C + 1)),
    e.o === null && (n.I = e.s),
    t && (e.j = t.F.concat(e.j)),
    (t = Kg(e, n, 1e3)),
    n.setTimeout(Math.round(0.5 * e.xa) + Math.round(0.5 * e.xa * Math.random())),
    sc(e.i, n),
    Pa(n, r, t);
}
function Vi(e, t) {
  e.na &&
    bu(e.na, function (n, r) {
      V(t, r, n);
    }),
    e.h &&
      Rg({}, function (n, r) {
        V(t, r, n);
      });
}
function Kg(e, t, n) {
  n = Math.min(e.j.length, n);
  var r = e.h ? pe(e.h.Va, e.h, e) : null;
  e: {
    var i = e.j;
    let s = -1;
    for (;;) {
      const o = ['count=' + n];
      s == -1
        ? 0 < n
          ? ((s = i[0].g), o.push('ofs=' + s))
          : (s = 0)
        : o.push('ofs=' + s);
      let l = !0;
      for (let a = 0; a < n; a++) {
        let u = i[a].g;
        const d = i[a].map;
        if (((u -= s), 0 > u)) (s = Math.max(0, i[a].g - 100)), (l = !1);
        else
          try {
            Vw(d, o, 'req' + u + '_');
          } catch {
            r && r(d);
          }
      }
      if (l) {
        r = o.join('&');
        break e;
      }
    }
  }
  return (e = e.j.splice(0, n)), (t.F = e), r;
}
function qg(e) {
  if (!e.g && !e.u) {
    e.ba = 1;
    var t = e.Ma;
    pi || vg(), gi || (pi(), (gi = !0)), Qu.add(t, e), (e.A = 0);
  }
}
function uc(e) {
  return e.g || e.u || 3 <= e.A
    ? !1
    : (e.ba++, (e.u = $i(pe(e.Ma, e), Qg(e, e.A))), e.A++, !0);
}
E.Ma = function () {
  if (
    ((this.u = null), Xg(this), this.ca && !(this.M || this.g == null || 0 >= this.S))
  ) {
    var e = 2 * this.S;
    this.l.info('BP detection timer enabled: ' + e), (this.B = $i(pe(this.jb, this), e));
  }
};
E.jb = function () {
  this.B &&
    ((this.B = null),
    this.l.info('BP detection timeout reached.'),
    this.l.info('Buffering proxy detected and switch to long-polling!'),
    (this.G = !1),
    (this.M = !0),
    ye(10),
    jo(this),
    Xg(this));
};
function cc(e) {
  e.B != null && (L.clearTimeout(e.B), (e.B = null));
}
function Xg(e) {
  (e.g = new Fi(e, e.l, 'rpc', e.ba)), e.o === null && (e.g.I = e.s), (e.g.O = 0);
  var t = ht(e.wa);
  V(t, 'RID', 'rpc'),
    V(t, 'SID', e.K),
    V(t, 'AID', e.V),
    V(t, 'CI', e.G ? '0' : '1'),
    !e.G && e.qa && V(t, 'TO', e.qa),
    V(t, 'TYPE', 'xmlhttp'),
    Vi(e, t),
    e.o && e.s && lc(t, e.o, e.s),
    e.L && e.g.setTimeout(e.L);
  var n = e.g;
  (e = e.pa), (n.L = 1), (n.v = Mo(ht(t))), (n.s = null), (n.S = !0), kg(n, e);
}
E.ib = function () {
  this.v != null && ((this.v = null), jo(this), uc(this), ye(19));
};
function ro(e) {
  e.v != null && (L.clearTimeout(e.v), (e.v = null));
}
function Yg(e, t) {
  var n = null;
  if (e.g == t) {
    ro(e), cc(e), (e.g = null);
    var r = 2;
  } else if (Ra(e.i, t)) (n = t.F), Ug(e.i, t), (r = 1);
  else return;
  if (e.H != 0) {
    if (t.i)
      if (r == 1) {
        (n = t.s ? t.s.length : 0), (t = Date.now() - t.G);
        var i = e.C;
        (r = ec()), le(r, new Ig(r, n)), Bo(e);
      } else qg(e);
    else if (
      ((i = t.o),
      i == 3 || (i == 0 && 0 < t.ca) || !((r == 1 && qw(e, t)) || (r == 2 && uc(e))))
    )
      switch ((n && 0 < n.length && ((t = e.i), (t.i = t.i.concat(n))), i)) {
        case 1:
          rn(e, 5);
          break;
        case 4:
          rn(e, 10);
          break;
        case 3:
          rn(e, 6);
          break;
        default:
          rn(e, 2);
      }
  }
}
function Qg(e, t) {
  let n = e.ab + Math.floor(Math.random() * e.hb);
  return e.isActive() || (n *= 2), n * t;
}
function rn(e, t) {
  if ((e.l.info('Error code ' + t), t == 2)) {
    var n = null;
    e.h && (n = null);
    var r = pe(e.pb, e);
    n ||
      ((n = new an('//www.google.com/images/cleardot.gif')),
      (L.location && L.location.protocol == 'http') || to(n, 'https'),
      Mo(n)),
      zw(n.toString(), r);
  } else ye(2);
  (e.H = 0), e.h && e.h.za(t), Jg(e), Gg(e);
}
E.pb = function (e) {
  e
    ? (this.l.info('Successfully pinged google.com'), ye(2))
    : (this.l.info('Failed to ping google.com'), ye(1));
};
function Jg(e) {
  if (((e.H = 0), (e.ma = []), e.h)) {
    const t = Fg(e.i);
    (t.length != 0 || e.j.length != 0) &&
      (of(e.ma, t), of(e.ma, e.j), (e.i.i.length = 0), Hu(e.j), (e.j.length = 0)),
      e.h.ya();
  }
}
function Zg(e, t, n) {
  var r = n instanceof an ? ht(n) : new an(n);
  if (r.g != '') t && (r.g = t + '.' + r.g), no(r, r.m);
  else {
    var i = L.location;
    (r = i.protocol), (t = t ? t + '.' + i.hostname : i.hostname), (i = +i.port);
    var s = new an(null);
    r && to(s, r), t && (s.g = t), i && no(s, i), n && (s.l = n), (r = s);
  }
  return (n = e.F), (t = e.Da), n && t && V(r, n, t), V(r, 'VER', e.ra), Vi(e, r), r;
}
function em(e, t, n) {
  if (t && !e.J) throw Error("Can't create secondary domain capable XhrIo object.");
  return (t = n && e.Ha && !e.va ? new q(new $o({ ob: !0 })) : new q(e.va)), t.Oa(e.J), t;
}
E.isActive = function () {
  return !!this.h && this.h.isActive(this);
};
function tm() {}
E = tm.prototype;
E.Ba = function () {};
E.Aa = function () {};
E.za = function () {};
E.ya = function () {};
E.isActive = function () {
  return !0;
};
E.Va = function () {};
function $e(e, t) {
  te.call(this),
    (this.g = new bg(t)),
    (this.l = e),
    (this.h = (t && t.messageUrlParams) || null),
    (e = (t && t.messageHeaders) || null),
    t &&
      t.clientProtocolHeaderRequired &&
      (e
        ? (e['X-Client-Protocol'] = 'webchannel')
        : (e = { 'X-Client-Protocol': 'webchannel' })),
    (this.g.s = e),
    (e = (t && t.initMessageHeaders) || null),
    t &&
      t.messageContentType &&
      (e
        ? (e['X-WebChannel-Content-Type'] = t.messageContentType)
        : (e = { 'X-WebChannel-Content-Type': t.messageContentType })),
    t &&
      t.Ca &&
      (e
        ? (e['X-WebChannel-Client-Profile'] = t.Ca)
        : (e = { 'X-WebChannel-Client-Profile': t.Ca })),
    (this.g.U = e),
    (e = t && t.cc) && !hi(e) && (this.g.o = e),
    (this.A = (t && t.supportsCrossDomainXhr) || !1),
    (this.v = (t && t.sendRawJson) || !1),
    (t = t && t.httpSessionIdParam) &&
      !hi(t) &&
      ((this.g.F = t),
      (e = this.h),
      e !== null && t in e && ((e = this.h), t in e && delete e[t])),
    (this.j = new ur(this));
}
ne($e, te);
$e.prototype.m = function () {
  (this.g.h = this.j), this.A && (this.g.J = !0);
  var e = this.g,
    t = this.l,
    n = this.h || void 0;
  ye(0), (e.Y = t), (e.na = n || {}), (e.G = e.aa), (e.I = Zg(e, null, e.Y)), Bo(e);
};
$e.prototype.close = function () {
  ac(this.g);
};
$e.prototype.u = function (e) {
  var t = this.g;
  if (typeof e == 'string') {
    var n = {};
    (n.__data__ = e), (e = n);
  } else this.v && ((n = {}), (n.__data__ = Yu(e)), (e = n));
  t.j.push(new Uw(t.fb++, e)), t.H == 3 && Bo(t);
};
$e.prototype.N = function () {
  (this.g.h = null), delete this.j, ac(this.g), delete this.g, $e.$.N.call(this);
};
function nm(e) {
  rc.call(this),
    e.__headers__ &&
      ((this.headers = e.__headers__),
      (this.statusCode = e.__status__),
      delete e.__headers__,
      delete e.__status__);
  var t = e.__sm__;
  if (t) {
    e: {
      for (const n in t) {
        e = n;
        break e;
      }
      e = void 0;
    }
    (this.i = e) && ((e = this.i), (t = t !== null && e in t ? t[e] : void 0)),
      (this.data = t);
  } else this.data = e;
}
ne(nm, rc);
function rm() {
  ic.call(this), (this.status = 1);
}
ne(rm, ic);
function ur(e) {
  this.g = e;
}
ne(ur, tm);
ur.prototype.Ba = function () {
  le(this.g, 'a');
};
ur.prototype.Aa = function (e) {
  le(this.g, new nm(e));
};
ur.prototype.za = function (e) {
  le(this.g, new rm());
};
ur.prototype.ya = function () {
  le(this.g, 'b');
};
function Xw() {
  this.blockSize = -1;
}
function Qe() {
  (this.blockSize = -1),
    (this.blockSize = 64),
    (this.g = Array(4)),
    (this.m = Array(this.blockSize)),
    (this.i = this.h = 0),
    this.reset();
}
ne(Qe, Xw);
Qe.prototype.reset = function () {
  (this.g[0] = 1732584193),
    (this.g[1] = 4023233417),
    (this.g[2] = 2562383102),
    (this.g[3] = 271733878),
    (this.i = this.h = 0);
};
function Pl(e, t, n) {
  n || (n = 0);
  var r = Array(16);
  if (typeof t == 'string')
    for (var i = 0; 16 > i; ++i)
      r[i] =
        t.charCodeAt(n++) |
        (t.charCodeAt(n++) << 8) |
        (t.charCodeAt(n++) << 16) |
        (t.charCodeAt(n++) << 24);
  else
    for (i = 0; 16 > i; ++i)
      r[i] = t[n++] | (t[n++] << 8) | (t[n++] << 16) | (t[n++] << 24);
  (t = e.g[0]), (n = e.g[1]), (i = e.g[2]);
  var s = e.g[3],
    o = (t + (s ^ (n & (i ^ s))) + r[0] + 3614090360) & 4294967295;
  (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[1] + 3905402710) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[2] + 606105819) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[3] + 3250441966) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (n & (i ^ s))) + r[4] + 4118548399) & 4294967295),
    (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[5] + 1200080426) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[6] + 2821735955) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[7] + 4249261313) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (n & (i ^ s))) + r[8] + 1770035416) & 4294967295),
    (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[9] + 2336552879) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[10] + 4294925233) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[11] + 2304563134) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (n & (i ^ s))) + r[12] + 1804603682) & 4294967295),
    (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[13] + 4254626195) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[14] + 2792965006) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[15] + 1236535329) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (i ^ (s & (n ^ i))) + r[1] + 4129170786) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[6] + 3225465664) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[11] + 643717713) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[0] + 3921069994) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (i ^ (s & (n ^ i))) + r[5] + 3593408605) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[10] + 38016083) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[15] + 3634488961) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[4] + 3889429448) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (i ^ (s & (n ^ i))) + r[9] + 568446438) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[14] + 3275163606) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[3] + 4107603335) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[8] + 1163531501) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (i ^ (s & (n ^ i))) + r[13] + 2850285829) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[2] + 4243563512) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[7] + 1735328473) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[12] + 2368359562) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (n ^ i ^ s) + r[5] + 4294588738) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[8] + 2272392833) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[11] + 1839030562) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[14] + 4259657740) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (n ^ i ^ s) + r[1] + 2763975236) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[4] + 1272893353) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[7] + 4139469664) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[10] + 3200236656) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (n ^ i ^ s) + r[13] + 681279174) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[0] + 3936430074) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[3] + 3572445317) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[6] + 76029189) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (n ^ i ^ s) + r[9] + 3654602809) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[12] + 3873151461) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[15] + 530742520) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[2] + 3299628645) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (i ^ (n | ~s)) + r[0] + 4096336452) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[7] + 1126891415) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[14] + 2878612391) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[5] + 4237533241) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (i ^ (n | ~s)) + r[12] + 1700485571) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[3] + 2399980690) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[10] + 4293915773) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[1] + 2240044497) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (i ^ (n | ~s)) + r[8] + 1873313359) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[15] + 4264355552) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[6] + 2734768916) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[13] + 1309151649) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (i ^ (n | ~s)) + r[4] + 4149444226) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[11] + 3174756917) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[2] + 718787259) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[9] + 3951481745) & 4294967295),
    (e.g[0] = (e.g[0] + t) & 4294967295),
    (e.g[1] = (e.g[1] + (i + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
    (e.g[2] = (e.g[2] + i) & 4294967295),
    (e.g[3] = (e.g[3] + s) & 4294967295);
}
Qe.prototype.j = function (e, t) {
  t === void 0 && (t = e.length);
  for (var n = t - this.blockSize, r = this.m, i = this.h, s = 0; s < t; ) {
    if (i == 0) for (; s <= n; ) Pl(this, e, s), (s += this.blockSize);
    if (typeof e == 'string') {
      for (; s < t; )
        if (((r[i++] = e.charCodeAt(s++)), i == this.blockSize)) {
          Pl(this, r), (i = 0);
          break;
        }
    } else
      for (; s < t; )
        if (((r[i++] = e[s++]), i == this.blockSize)) {
          Pl(this, r), (i = 0);
          break;
        }
  }
  (this.h = i), (this.i += t);
};
Qe.prototype.l = function () {
  var e = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
  e[0] = 128;
  for (var t = 1; t < e.length - 8; ++t) e[t] = 0;
  var n = 8 * this.i;
  for (t = e.length - 8; t < e.length; ++t) (e[t] = n & 255), (n /= 256);
  for (this.j(e), e = Array(16), t = n = 0; 4 > t; ++t)
    for (var r = 0; 32 > r; r += 8) e[n++] = (this.g[t] >>> r) & 255;
  return e;
};
function F(e, t) {
  this.h = t;
  for (var n = [], r = !0, i = e.length - 1; 0 <= i; i--) {
    var s = e[i] | 0;
    (r && s == t) || ((n[i] = s), (r = !1));
  }
  this.g = n;
}
var Yw = {};
function hc(e) {
  return -128 <= e && 128 > e
    ? rw(e, function (t) {
        return new F([t | 0], 0 > t ? -1 : 0);
      })
    : new F([e | 0], 0 > e ? -1 : 0);
}
function Ge(e) {
  if (isNaN(e) || !isFinite(e)) return Wn;
  if (0 > e) return oe(Ge(-e));
  for (var t = [], n = 1, r = 0; e >= n; r++) (t[r] = (e / n) | 0), (n *= Na);
  return new F(t, 0);
}
function im(e, t) {
  if (e.length == 0) throw Error('number format error: empty string');
  if (((t = t || 10), 2 > t || 36 < t)) throw Error('radix out of range: ' + t);
  if (e.charAt(0) == '-') return oe(im(e.substring(1), t));
  if (0 <= e.indexOf('-')) throw Error('number format error: interior "-" character');
  for (var n = Ge(Math.pow(t, 8)), r = Wn, i = 0; i < e.length; i += 8) {
    var s = Math.min(8, e.length - i),
      o = parseInt(e.substring(i, i + s), t);
    8 > s
      ? ((s = Ge(Math.pow(t, s))), (r = r.R(s).add(Ge(o))))
      : ((r = r.R(n)), (r = r.add(Ge(o))));
  }
  return r;
}
var Na = 4294967296,
  Wn = hc(0),
  Oa = hc(1),
  yf = hc(16777216);
E = F.prototype;
E.ea = function () {
  if (Le(this)) return -oe(this).ea();
  for (var e = 0, t = 1, n = 0; n < this.g.length; n++) {
    var r = this.D(n);
    (e += (0 <= r ? r : Na + r) * t), (t *= Na);
  }
  return e;
};
E.toString = function (e) {
  if (((e = e || 10), 2 > e || 36 < e)) throw Error('radix out of range: ' + e);
  if (ot(this)) return '0';
  if (Le(this)) return '-' + oe(this).toString(e);
  for (var t = Ge(Math.pow(e, 6)), n = this, r = ''; ; ) {
    var i = so(n, t).g;
    n = io(n, i.R(t));
    var s = ((0 < n.g.length ? n.g[0] : n.h) >>> 0).toString(e);
    if (((n = i), ot(n))) return s + r;
    for (; 6 > s.length; ) s = '0' + s;
    r = s + r;
  }
};
E.D = function (e) {
  return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h;
};
function ot(e) {
  if (e.h != 0) return !1;
  for (var t = 0; t < e.g.length; t++) if (e.g[t] != 0) return !1;
  return !0;
}
function Le(e) {
  return e.h == -1;
}
E.X = function (e) {
  return (e = io(this, e)), Le(e) ? -1 : ot(e) ? 0 : 1;
};
function oe(e) {
  for (var t = e.g.length, n = [], r = 0; r < t; r++) n[r] = ~e.g[r];
  return new F(n, ~e.h).add(Oa);
}
E.abs = function () {
  return Le(this) ? oe(this) : this;
};
E.add = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0, i = 0; i <= t; i++) {
    var s = r + (this.D(i) & 65535) + (e.D(i) & 65535),
      o = (s >>> 16) + (this.D(i) >>> 16) + (e.D(i) >>> 16);
    (r = o >>> 16), (s &= 65535), (o &= 65535), (n[i] = (o << 16) | s);
  }
  return new F(n, n[n.length - 1] & -2147483648 ? -1 : 0);
};
function io(e, t) {
  return e.add(oe(t));
}
E.R = function (e) {
  if (ot(this) || ot(e)) return Wn;
  if (Le(this)) return Le(e) ? oe(this).R(oe(e)) : oe(oe(this).R(e));
  if (Le(e)) return oe(this.R(oe(e)));
  if (0 > this.X(yf) && 0 > e.X(yf)) return Ge(this.ea() * e.ea());
  for (var t = this.g.length + e.g.length, n = [], r = 0; r < 2 * t; r++) n[r] = 0;
  for (r = 0; r < this.g.length; r++)
    for (var i = 0; i < e.g.length; i++) {
      var s = this.D(r) >>> 16,
        o = this.D(r) & 65535,
        l = e.D(i) >>> 16,
        a = e.D(i) & 65535;
      (n[2 * r + 2 * i] += o * a),
        ls(n, 2 * r + 2 * i),
        (n[2 * r + 2 * i + 1] += s * a),
        ls(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 1] += o * l),
        ls(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 2] += s * l),
        ls(n, 2 * r + 2 * i + 2);
    }
  for (r = 0; r < t; r++) n[r] = (n[2 * r + 1] << 16) | n[2 * r];
  for (r = t; r < 2 * t; r++) n[r] = 0;
  return new F(n, 0);
};
function ls(e, t) {
  for (; (e[t] & 65535) != e[t]; ) (e[t + 1] += e[t] >>> 16), (e[t] &= 65535), t++;
}
function kr(e, t) {
  (this.g = e), (this.h = t);
}
function so(e, t) {
  if (ot(t)) throw Error('division by zero');
  if (ot(e)) return new kr(Wn, Wn);
  if (Le(e)) return (t = so(oe(e), t)), new kr(oe(t.g), oe(t.h));
  if (Le(t)) return (t = so(e, oe(t))), new kr(oe(t.g), t.h);
  if (30 < e.g.length) {
    if (Le(e) || Le(t)) throw Error('slowDivide_ only works with positive integers.');
    for (var n = Oa, r = t; 0 >= r.X(e); ) (n = _f(n)), (r = _f(r));
    var i = En(n, 1),
      s = En(r, 1);
    for (r = En(r, 2), n = En(n, 2); !ot(r); ) {
      var o = s.add(r);
      0 >= o.X(e) && ((i = i.add(n)), (s = o)), (r = En(r, 1)), (n = En(n, 1));
    }
    return (t = io(e, i.R(t))), new kr(i, t);
  }
  for (i = Wn; 0 <= e.X(t); ) {
    for (
      n = Math.max(1, Math.floor(e.ea() / t.ea())),
        r = Math.ceil(Math.log(n) / Math.LN2),
        r = 48 >= r ? 1 : Math.pow(2, r - 48),
        s = Ge(n),
        o = s.R(t);
      Le(o) || 0 < o.X(e);

    )
      (n -= r), (s = Ge(n)), (o = s.R(t));
    ot(s) && (s = Oa), (i = i.add(s)), (e = io(e, o));
  }
  return new kr(i, e);
}
E.gb = function (e) {
  return so(this, e).h;
};
E.and = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++)
    n[r] = this.D(r) & e.D(r);
  return new F(n, this.h & e.h);
};
E.or = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++)
    n[r] = this.D(r) | e.D(r);
  return new F(n, this.h | e.h);
};
E.xor = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++)
    n[r] = this.D(r) ^ e.D(r);
  return new F(n, this.h ^ e.h);
};
function _f(e) {
  for (var t = e.g.length + 1, n = [], r = 0; r < t; r++)
    n[r] = (e.D(r) << 1) | (e.D(r - 1) >>> 31);
  return new F(n, e.h);
}
function En(e, t) {
  var n = t >> 5;
  t %= 32;
  for (var r = e.g.length - n, i = [], s = 0; s < r; s++)
    i[s] = 0 < t ? (e.D(s + n) >>> t) | (e.D(s + n + 1) << (32 - t)) : e.D(s + n);
  return new F(i, e.h);
}
$e.prototype.send = $e.prototype.u;
$e.prototype.open = $e.prototype.m;
$e.prototype.close = $e.prototype.close;
tc.NO_ERROR = 0;
tc.TIMEOUT = 8;
tc.HTTP_ERROR = 6;
Tw.COMPLETE = 'complete';
kw.EventType = Ui;
Ui.OPEN = 'a';
Ui.CLOSE = 'b';
Ui.ERROR = 'c';
Ui.MESSAGE = 'd';
te.prototype.listen = te.prototype.O;
q.prototype.listenOnce = q.prototype.P;
q.prototype.getLastError = q.prototype.Sa;
q.prototype.getLastErrorCode = q.prototype.Ia;
q.prototype.getStatus = q.prototype.da;
q.prototype.getResponseJson = q.prototype.Wa;
q.prototype.getResponseText = q.prototype.ja;
q.prototype.send = q.prototype.ha;
q.prototype.setWithCredentials = q.prototype.Oa;
Qe.prototype.digest = Qe.prototype.l;
Qe.prototype.reset = Qe.prototype.reset;
Qe.prototype.update = Qe.prototype.j;
F.prototype.add = F.prototype.add;
F.prototype.multiply = F.prototype.R;
F.prototype.modulo = F.prototype.gb;
F.prototype.compare = F.prototype.X;
F.prototype.toNumber = F.prototype.ea;
F.prototype.toString = F.prototype.toString;
F.prototype.getBits = F.prototype.D;
F.fromNumber = Ge;
F.fromString = im;
var Qw = F;
const wf = '@firebase/firestore';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class he {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
(he.UNAUTHENTICATED = new he(null)),
  (he.GOOGLE_CREDENTIALS = new he('google-credentials-uid')),
  (he.FIRST_PARTY = new he('first-party-uid')),
  (he.MOCK_USER = new he('mock-user'));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let zi = '10.3.1';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jn = new Ou('@firebase/firestore');
function ke(e, ...t) {
  if (Jn.logLevel <= U.DEBUG) {
    const n = t.map(dc);
    Jn.debug(`Firestore (${zi}): ${e}`, ...n);
  }
}
function fc(e, ...t) {
  if (Jn.logLevel <= U.ERROR) {
    const n = t.map(dc);
    Jn.error(`Firestore (${zi}): ${e}`, ...n);
  }
}
function Jw(e, ...t) {
  if (Jn.logLevel <= U.WARN) {
    const n = t.map(dc);
    Jn.warn(`Firestore (${zi}): ${e}`, ...n);
  }
}
function dc(e) {
  if (typeof e == 'string') return e;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n);
    })(e);
  } catch {
    return e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wi(e = 'Unexpected state') {
  const t = `FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: ` + e;
  throw (fc(t), new Error(t));
}
function La(e, t) {
  e || wi();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const X = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss',
};
class Y extends dt {
  constructor(t, n) {
    super(t, n),
      (this.code = t),
      (this.message = n),
      (this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bn {
  constructor() {
    this.promise = new Promise((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sm {
  constructor(t, n) {
    (this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${t}`);
  }
}
class Zw {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, n) {
    t.enqueueRetryable(() => n(he.UNAUTHENTICATED));
  }
  shutdown() {}
}
class eE {
  constructor(t) {
    (this.token = t), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(t, n) {
    (this.changeListener = n), t.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class tE {
  constructor(t) {
    (this.t = t),
      (this.currentUser = he.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(t, n) {
    let r = this.i;
    const i = (a) => (this.i !== r ? ((r = this.i), n(a)) : Promise.resolve());
    let s = new bn();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new bn()),
        t.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const a = s;
        t.enqueueRetryable(async () => {
          await a.promise, await i(this.currentUser);
        });
      },
      l = (a) => {
        ke('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = a),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((a) => l(a)),
      setTimeout(() => {
        if (!this.auth) {
          const a = this.t.getImmediate({ optional: !0 });
          a
            ? l(a)
            : (ke('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              s.resolve(),
              (s = new bn()));
        }
      }, 0),
      o();
  }
  getToken() {
    const t = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== t
                ? (ke(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.',
                  ),
                  this.getToken())
                : r
                ? (La(typeof r.accessToken == 'string'),
                  new sm(r.accessToken, this.currentUser))
                : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const t = this.auth && this.auth.getUid();
    return La(t === null || typeof t == 'string'), new he(t);
  }
}
class nE {
  constructor(t, n, r) {
    (this.l = t),
      (this.h = n),
      (this.P = r),
      (this.type = 'FirstParty'),
      (this.user = he.FIRST_PARTY),
      (this.I = new Map());
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set('X-Goog-AuthUser', this.l);
    const t = this.T();
    return (
      t && this.I.set('Authorization', t),
      this.h && this.I.set('X-Goog-Iam-Authorization-Token', this.h),
      this.I
    );
  }
}
class rE {
  constructor(t, n, r) {
    (this.l = t), (this.h = n), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new nE(this.l, this.h, this.P));
  }
  start(t, n) {
    t.enqueueRetryable(() => n(he.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class iE {
  constructor(t) {
    (this.value = t),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set('x-firebase-appcheck', this.value);
  }
}
class sE {
  constructor(t) {
    (this.A = t), (this.forceRefresh = !1), (this.appCheck = null), (this.R = null);
  }
  start(t, n) {
    const r = (s) => {
      s.error != null &&
        ke(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`,
        );
      const o = s.token !== this.R;
      return (
        (this.R = s.token),
        ke('FirebaseAppCheckTokenProvider', `Received ${o ? 'new' : 'existing'} token.`),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      t.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      ke('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.A.getImmediate({ optional: !0 });
          s ? i(s) : ke('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected');
        }
      }, 0);
  }
  getToken() {
    const t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(t)
            .then((n) =>
              n
                ? (La(typeof n.token == 'string'), (this.R = n.token), new iE(n.token))
                : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oE(e) {
  const t = typeof self != 'undefined' && (self.crypto || self.msCrypto),
    n = new Uint8Array(e);
  if (t && typeof t.getRandomValues == 'function') t.getRandomValues(n);
  else for (let r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lE {
  static V() {
    const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      n = Math.floor(256 / t.length) * t.length;
    let r = '';
    for (; r.length < 20; ) {
      const i = oE(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += t.charAt(i[s] % t.length));
    }
    return r;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oo {
  constructor(t, n, r) {
    n === void 0 ? (n = 0) : n > t.length && wi(),
      r === void 0 ? (r = t.length - n) : r > t.length - n && wi(),
      (this.segments = t),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return oo.comparator(this, t) === 0;
  }
  child(t) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      t instanceof oo
        ? t.forEach((r) => {
            n.push(r);
          })
        : n.push(t),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return (
      (t = t === void 0 ? 1 : t),
      this.construct(this.segments, this.offset + t, this.length - t)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return !1;
    for (let n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return !1;
    for (let n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
    return !0;
  }
  forEach(t) {
    for (let n = this.offset, r = this.limit(); n < r; n++) t(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, n) {
    const r = Math.min(t.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = t.get(i),
        o = n.get(i);
      if (s < o) return -1;
      if (s > o) return 1;
    }
    return t.length < n.length ? -1 : t.length > n.length ? 1 : 0;
  }
}
class Re extends oo {
  construct(t, n, r) {
    return new Re(t, n, r);
  }
  canonicalString() {
    return this.toArray().join('/');
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...t) {
    const n = [];
    for (const r of t) {
      if (r.indexOf('//') >= 0)
        throw new Y(
          X.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`,
        );
      n.push(...r.split('/').filter((i) => i.length > 0));
    }
    return new Re(n);
  }
  static emptyPath() {
    return new Re([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sn {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new sn(Re.fromString(t));
  }
  static fromName(t) {
    return new sn(Re.fromString(t).popFirst(5));
  }
  static empty() {
    return new sn(Re.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return t !== null && Re.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, n) {
    return Re.comparator(t.path, n.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  static fromSegments(t) {
    return new sn(new Re(t.slice()));
  }
}
function om(e) {
  return e.name === 'IndexedDbTransactionError';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aE {
  constructor(t, n, r, i, s, o, l, a, u) {
    (this.databaseId = t),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = l),
      (this.longPollingOptions = a),
      (this.useFetchStreams = u);
  }
}
class lo {
  constructor(t, n) {
    (this.projectId = t), (this.database = n || '(default)');
  }
  static empty() {
    return new lo('', '');
  }
  get isDefaultDatabase() {
    return this.database === '(default)';
  }
  isEqual(t) {
    return (
      t instanceof lo && t.projectId === this.projectId && t.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uE {
  constructor(t, n = null, r = [], i = [], s = null, o = 'F', l = null, a = null) {
    (this.path = t),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = l),
      (this.endAt = a),
      (this.Pe = null),
      (this.Ie = null),
      (this.de = null),
      this.startAt,
      this.endAt;
  }
}
function cE(e) {
  return new uE(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ef, M;
((M = Ef || (Ef = {}))[(M.OK = 0)] = 'OK'),
  (M[(M.CANCELLED = 1)] = 'CANCELLED'),
  (M[(M.UNKNOWN = 2)] = 'UNKNOWN'),
  (M[(M.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (M[(M.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (M[(M.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (M[(M.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (M[(M.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (M[(M.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (M[(M.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (M[(M.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (M[(M.ABORTED = 10)] = 'ABORTED'),
  (M[(M.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (M[(M.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (M[(M.INTERNAL = 13)] = 'INTERNAL'),
  (M[(M.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (M[(M.DATA_LOSS = 15)] = 'DATA_LOSS');
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new Qw([4294967295, 4294967295], 0);
function Al() {
  return typeof document != 'undefined' ? document : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hE {
  constructor(t, n, r = 1e3, i = 1.5, s = 6e4) {
    (this._i = t),
      (this.timerId = n),
      (this.xo = r),
      (this.Oo = i),
      (this.No = s),
      (this.Bo = 0),
      (this.Lo = null),
      (this.ko = Date.now()),
      this.reset();
  }
  reset() {
    this.Bo = 0;
  }
  qo() {
    this.Bo = this.No;
  }
  Qo(t) {
    this.cancel();
    const n = Math.floor(this.Bo + this.Ko()),
      r = Math.max(0, Date.now() - this.ko),
      i = Math.max(0, n - r);
    i > 0 &&
      ke(
        'ExponentialBackoff',
        `Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`,
      ),
      (this.Lo = this._i.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.ko = Date.now()), t()),
      )),
      (this.Bo *= this.Oo),
      this.Bo < this.xo && (this.Bo = this.xo),
      this.Bo > this.No && (this.Bo = this.No);
  }
  $o() {
    this.Lo !== null && (this.Lo.skipDelay(), (this.Lo = null));
  }
  cancel() {
    this.Lo !== null && (this.Lo.cancel(), (this.Lo = null));
  }
  Ko() {
    return (Math.random() - 0.5) * this.Bo;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pc {
  constructor(t, n, r, i, s) {
    (this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new bn()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, n, r, i, s) {
    const o = Date.now() + r,
      l = new pc(t, n, o, i, s);
    return l.start(r), l;
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new Y(X.CANCELLED, 'Operation cancelled' + (t ? ': ' + t : '')),
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve(),
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function fE(e, t) {
  if ((fc('AsyncQueue', `${t}: ${e}`), om(e))) return new Y(X.UNAVAILABLE, `${t}: ${e}`);
  throw e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dE {
  constructor(t, n, r, i) {
    (this.authCredentials = t),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = he.UNAUTHENTICATED),
      (this.clientId = lE.V()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        ke('FirestoreClient', 'Received user=', s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          ke('FirestoreClient', 'Received new app check token=', s),
          this.appCheckCredentialListener(s, this.user)
        ),
      );
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new Y(X.FAILED_PRECONDITION, 'The client has already been terminated.');
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new bn();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents && (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            t.resolve();
        } catch (n) {
          const r = fE(n, 'Failed to shutdown persistence');
          t.reject(r);
        }
      }),
      t.promise
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lm(e) {
  const t = {};
  return e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds), t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sf = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pE(e, t, n) {
  if (!n)
    throw new Y(
      X.INVALID_ARGUMENT,
      `Function ${e}() cannot be called with an empty ${t}.`,
    );
}
function gE(e, t, n, r) {
  if (t === !0 && r === !0)
    throw new Y(X.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function If(e) {
  if (sn.isDocumentKey(e))
    throw new Y(
      X.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`,
    );
}
function mE(e) {
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  if (typeof e == 'string')
    return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if (typeof e == 'number' || typeof e == 'boolean') return '' + e;
  if (typeof e == 'object') {
    if (e instanceof Array) return 'an array';
    {
      const t = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(e);
      return t ? `a custom ${t} object` : 'an object';
    }
  }
  return typeof e == 'function' ? 'a function' : wi();
}
function vE(e, t) {
  if (('_delegate' in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new Y(
        X.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?',
      );
    {
      const n = mE(e);
      throw new Y(X.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
    }
  }
  return e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tf {
  constructor(t) {
    var n, r;
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new Y(
          X.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set",
        );
      (this.host = 'firestore.googleapis.com'), (this.ssl = !0);
    } else (this.host = t.host), (this.ssl = (n = t.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
        throw new Y(X.INVALID_ARGUMENT, 'cacheSizeBytes must be at least 1048576');
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    gE(
      'experimentalForceLongPolling',
      t.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      t.experimentalAutoDetectLongPolling,
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : t.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = lm(
        (r = t.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {},
      )),
      (function (s) {
        if (s.timeoutSeconds !== void 0) {
          if (isNaN(s.timeoutSeconds))
            throw new Y(
              X.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`,
            );
          if (s.timeoutSeconds < 5)
            throw new Y(
              X.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`,
            );
          if (s.timeoutSeconds > 30)
            throw new Y(
              X.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`,
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!t.useFetchStreams);
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds;
      })(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
}
class gc {
  constructor(t, n, r, i) {
    (this._authCredentials = t),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new Tf({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new Y(
        X.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available",
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new Y(
        X.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.',
      );
    (this._settings = new Tf(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new Zw();
          switch (r.type) {
            case 'firstParty':
              return new rE(
                r.sessionIndex || '0',
                r.iamToken || null,
                r.authTokenFactory || null,
              );
            case 'provider':
              return r.client;
            default:
              throw new Y(
                X.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type',
              );
          }
        })(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return { app: this._app, databaseId: this._databaseId, settings: this._settings };
  }
  _terminate() {
    return (
      (function (n) {
        const r = Sf.get(n);
        r && (ke('ComponentProvider', 'Removing Datastore'), Sf.delete(n), r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function yE(e, t, n, r = {}) {
  var i;
  const s = (e = vE(e, gc))._getSettings(),
    o = `${t}:${n}`;
  if (
    (s.host !== 'firestore.googleapis.com' &&
      s.host !== o &&
      Jw(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.',
      ),
    e._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
    r.mockUserToken)
  ) {
    let l, a;
    if (typeof r.mockUserToken == 'string') (l = r.mockUserToken), (a = he.MOCK_USER);
    else {
      l = Py(
        r.mockUserToken,
        (i = e._app) === null || i === void 0 ? void 0 : i.options.projectId,
      );
      const u = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!u)
        throw new Y(
          X.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!",
        );
      a = new he(u);
    }
    e._authCredentials = new eE(new sm(l, a));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mc {
  constructor(t, n, r) {
    (this.converter = n), (this._query = r), (this.type = 'query'), (this.firestore = t);
  }
  withConverter(t) {
    return new mc(this.firestore, t, this._query);
  }
}
class Vo {
  constructor(t, n, r) {
    (this.converter = n), (this._key = r), (this.type = 'document'), (this.firestore = t);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new Gn(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new Vo(this.firestore, t, this._key);
  }
}
class Gn extends mc {
  constructor(t, n, r) {
    super(t, n, cE(r)), (this._path = r), (this.type = 'collection');
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new Vo(this.firestore, null, new sn(t));
  }
  withConverter(t) {
    return new Gn(this.firestore, t, this._path);
  }
}
function _E(e, t, ...n) {
  if (((e = Ht(e)), pE('collection', 'path', t), e instanceof gc)) {
    const r = Re.fromString(t, ...n);
    return If(r), new Gn(e, null, r);
  }
  {
    if (!(e instanceof Vo || e instanceof Gn))
      throw new Y(
        X.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore',
      );
    const r = e._path.child(Re.fromString(t, ...n));
    return If(r), new Gn(e.firestore, null, r);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wE {
  constructor() {
    (this.Za = Promise.resolve()),
      (this.Xa = []),
      (this.eu = !1),
      (this.tu = []),
      (this.nu = null),
      (this.ru = !1),
      (this.iu = !1),
      (this.su = []),
      (this.Ho = new hE(this, 'async_queue_retry')),
      (this.ou = () => {
        const n = Al();
        n && ke('AsyncQueue', 'Visibility state changed to ' + n.visibilityState),
          this.Ho.$o();
      });
    const t = Al();
    t &&
      typeof t.addEventListener == 'function' &&
      t.addEventListener('visibilitychange', this.ou);
  }
  get isShuttingDown() {
    return this.eu;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this._u(), this.au(t);
  }
  enterRestrictedMode(t) {
    if (!this.eu) {
      (this.eu = !0), (this.iu = t || !1);
      const n = Al();
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.ou);
    }
  }
  enqueue(t) {
    if ((this._u(), this.eu)) return new Promise(() => {});
    const n = new bn();
    return this.au(() =>
      this.eu && this.iu ? Promise.resolve() : (t().then(n.resolve, n.reject), n.promise),
    ).then(() => n.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.Xa.push(t), this.uu()));
  }
  async uu() {
    if (this.Xa.length !== 0) {
      try {
        await this.Xa[0](), this.Xa.shift(), this.Ho.reset();
      } catch (t) {
        if (!om(t)) throw t;
        ke('AsyncQueue', 'Operation failed with retryable error: ' + t);
      }
      this.Xa.length > 0 && this.Ho.Qo(() => this.uu());
    }
  }
  au(t) {
    const n = this.Za.then(
      () => (
        (this.ru = !0),
        t()
          .catch((r) => {
            (this.nu = r), (this.ru = !1);
            const i = (function (o) {
              let l = o.message || '';
              return (
                o.stack &&
                  (l = o.stack.includes(o.message)
                    ? o.stack
                    : o.message +
                      `
` +
                      o.stack),
                l
              );
            })(r);
            throw (fc('INTERNAL UNHANDLED ERROR: ', i), r);
          })
          .then((r) => ((this.ru = !1), r))
      ),
    );
    return (this.Za = n), n;
  }
  enqueueAfterDelay(t, n, r) {
    this._u(), this.su.indexOf(t) > -1 && (n = 0);
    const i = pc.createAndSchedule(this, t, n, r, (s) => this.cu(s));
    return this.tu.push(i), i;
  }
  _u() {
    this.nu && wi();
  }
  verifyOperationInProgress() {}
  async lu() {
    let t;
    do (t = this.Za), await t;
    while (t !== this.Za);
  }
  hu(t) {
    for (const n of this.tu) if (n.timerId === t) return !0;
    return !1;
  }
  Pu(t) {
    return this.lu().then(() => {
      this.tu.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.tu) if ((n.skipDelay(), t !== 'all' && n.timerId === t)) break;
      return this.lu();
    });
  }
  Iu(t) {
    this.su.push(t);
  }
  cu(t) {
    const n = this.tu.indexOf(t);
    this.tu.splice(n, 1);
  }
}
class EE extends gc {
  constructor(t, n, r, i) {
    super(t, n, r, i),
      (this.type = 'firestore'),
      (this._queue = (function () {
        return new wE();
      })()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || '[DEFAULT]');
  }
  _terminate() {
    return this._firestoreClient || IE(this), this._firestoreClient.terminate();
  }
}
function SE(e, t) {
  const n = typeof e == 'object' ? e : Cp(),
    r = typeof e == 'string' ? e : t || '(default)',
    i = Du(n, 'firestore').getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = ky('firestore');
    s && yE(i, ...s);
  }
  return i;
}
function IE(e) {
  var t, n, r;
  const i = e._freezeSettings(),
    s = (function (l, a, u, d) {
      return new aE(
        l,
        a,
        u,
        d.host,
        d.ssl,
        d.experimentalForceLongPolling,
        d.experimentalAutoDetectLongPolling,
        lm(d.experimentalLongPollingOptions),
        d.useFetchStreams,
      );
    })(
      e._databaseId,
      ((t = e._app) === null || t === void 0 ? void 0 : t.options.appId) || '',
      e._persistenceKey,
      i,
    );
  (e._firestoreClient = new dE(e._authCredentials, e._appCheckCredentials, e._queue, s)),
    ((n = i.localCache) === null || n === void 0
      ? void 0
      : n._offlineComponentProvider) &&
      ((r = i.localCache) === null || r === void 0
        ? void 0
        : r._onlineComponentProvider) &&
      (e._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: i.localCache.kind,
        _offline: i.localCache._offlineComponentProvider,
        _online: i.localCache._onlineComponentProvider,
      });
}
(function (t, n = !0) {
  (function (i) {
    zi = i;
  })(or),
    Qn(
      new fn(
        'firestore',
        (r, { instanceIdentifier: i, options: s }) => {
          const o = r.getProvider('app').getImmediate(),
            l = new EE(
              new tE(r.getProvider('auth-internal')),
              new sE(r.getProvider('app-check-internal')),
              (function (u, d) {
                if (!Object.prototype.hasOwnProperty.apply(u.options, ['projectId']))
                  throw new Y(
                    X.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.',
                  );
                return new lo(u.options.projectId, d);
              })(o, i),
              o,
            );
          return (s = Object.assign({ useFetchStreams: n }, s)), l._setSettings(s), l;
        },
        'PUBLIC',
      ).setMultipleInstances(!0),
    ),
    xt(wf, '4.1.3', t),
    xt(wf, '4.1.3', 'esm2017');
})();
var TE = '/assets/logo.6000b0e9.svg',
  vc = { exports: {} },
  Hi = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kE = Ei.exports,
  am = 60103;
Hi.Fragment = 60107;
if (typeof Symbol == 'function' && Symbol.for) {
  var kf = Symbol.for;
  (am = kf('react.element')), (Hi.Fragment = kf('react.fragment'));
}
var CE = kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  PE = Object.prototype.hasOwnProperty,
  AE = { key: !0, ref: !0, __self: !0, __source: !0 };
function um(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) PE.call(t, r) && !AE.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: am, type: e, key: s, ref: o, props: i, _owner: CE.current };
}
Hi.jsx = um;
Hi.jsxs = um;
vc.exports = Hi;
const Ze = vc.exports.jsx,
  Cr = vc.exports.jsxs,
  RE = {
    apiKey: 'AIzaSyDRZuDB6eIDLYpvEKYMfPza9__D76n_ToI',
    authDomain: 'myveryownhq.firebaseapp.com',
    databaseURL: 'https://myveryownhq-default-rtdb.firebaseio.com',
    projectId: 'myveryownhq',
    storageBucket: 'myveryownhq.appspot.com',
    messagingSenderId: '1073445984840',
    appId: '1:1073445984840:web:4e3f88374066e4f8ce567d',
    measurementId: 'G-RJP4DLFKGD',
  };
kp(RE);
const Da = X_(),
  cm = SE();
U1(Da, (e) => {
  console.log('[myveryownhq] onAuthStateChanged: ', { user: e }), e != null && NE(e);
});
function NE(e) {
  const t = _E(cm, `messages/${e.uid}`);
  console.log('[myveryownhq] syncData: ', { messagesRef: t });
}
function OE() {
  const [e, t] = Ei.exports.useState(0);
  return Ze('div', {
    className: 'App',
    children: Cr('header', {
      className: 'App-header',
      children: [
        Ze('img', { src: TE, className: 'App-logo', alt: 'logo' }),
        Cr('p', {
          className: 'header',
          children: [
            '\u{1F680} Vite + React + Typescript \u{1F918} & ',
            Ze('br', {}),
            'Eslint \u{1F525}+ Prettier',
          ],
        }),
        Cr('div', {
          className: 'body',
          children: [
            Cr('button', {
              onClick: () => t((n) => n + 1),
              children: ['\u{1FA82} Press to increment: ', e],
            }),
            Ze('button', {
              onClick: () => O1(Da),
              children: '\u{1FA82} Login Anonymously',
            }),
            Ze('code', { children: JSON.stringify({ auth: Da, db: cm }) }),
            Cr('p', {
              children: [
                Ze('a', {
                  className: 'App-link',
                  href: 'https://reactjs.org',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: 'Learn React',
                }),
                ' | ',
                Ze('a', {
                  className: 'App-link',
                  href: 'https://vitejs.dev/guide/features.html',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: 'Vite Docs',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
vy.render(Ze(Sm.StrictMode, { children: Ze(OE, {}) }), document.getElementById('root'));
