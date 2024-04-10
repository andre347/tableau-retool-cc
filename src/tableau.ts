// @ts-nocheck
/*! For license information please see tableau.embedding.3.9.0-pre.32.min.js.LICENSE.txt */
var e = {
    5611: (e, t, r) => {
      r(3132)
      var n = r(9276)
      e.exports = n.Number.isInteger
    },
    2316: (e, t, r) => {
      r(4586)
      var n = r(9276)
      e.exports = n.Number.isNaN
    },
    47: (e, t, r) => {
      r(3105)
      var n = r(9276)
      e.exports = n.Object.assign
    },
    7111: (e, t, r) => {
      var n = r(9859),
        i = r(6733),
        a = r(9821),
        o = n.TypeError
      e.exports = function (e) {
        if (i(e)) return e
        throw o(a(e) + ' is not a function')
      }
    },
    1176: (e, t, r) => {
      var n = r(9859),
        i = r(5052),
        a = n.String,
        o = n.TypeError
      e.exports = function (e) {
        if (i(e)) return e
        throw o(a(e) + ' is not an object')
      }
    },
    9540: (e, t, r) => {
      var n = r(905),
        i = r(3231),
        a = r(9646),
        o = function (e) {
          return function (t, r, o) {
            var s,
              l = n(t),
              u = a(l),
              c = i(o, u)
            if (e && r != r) {
              for (; u > c; ) if ((s = l[c++]) != s) return !0
            } else for (; u > c; c++) if ((e || c in l) && l[c] === r) return e || c || 0
            return !e && -1
          }
        }
      e.exports = { includes: o(!0), indexOf: o(!1) }
    },
    7079: (e, t, r) => {
      var n = r(5968),
        i = n({}.toString),
        a = n(''.slice)
      e.exports = function (e) {
        return a(i(e), 8, -1)
      }
    },
    7081: (e, t, r) => {
      var n = r(8270),
        i = r(4826),
        a = r(7933),
        o = r(1787)
      e.exports = function (e, t) {
        for (var r = i(t), s = o.f, l = a.f, u = 0; u < r.length; u++) {
          var c = r[u]
          n(e, c) || s(e, c, l(t, c))
        }
      }
    },
    5762: (e, t, r) => {
      var n = r(7400),
        i = r(1787),
        a = r(5358)
      e.exports = n
        ? function (e, t, r) {
            return i.f(e, t, a(1, r))
          }
        : function (e, t, r) {
            return (e[t] = r), e
          }
    },
    5358: (e) => {
      e.exports = function (e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
      }
    },
    7400: (e, t, r) => {
      var n = r(4229)
      e.exports = !n(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7
            },
          })[1]
        )
      })
    },
    2635: (e, t, r) => {
      var n = r(9859),
        i = r(5052),
        a = n.document,
        o = i(a) && i(a.createElement)
      e.exports = function (e) {
        return o ? a.createElement(e) : {}
      }
    },
    598: (e, t, r) => {
      var n = r(1333)
      e.exports = n('navigator', 'userAgent') || ''
    },
    6358: (e, t, r) => {
      var n,
        i,
        a = r(9859),
        o = r(598),
        s = a.process,
        l = a.Deno,
        u = (s && s.versions) || (l && l.version),
        c = u && u.v8
      c && (i = (n = c.split('.'))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
        !i && o && (!(n = o.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/)) && (i = +n[1]),
        (e.exports = i)
    },
    3837: (e) => {
      e.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ]
    },
    3103: (e, t, r) => {
      var n = r(9859),
        i = r(7933).f,
        a = r(5762),
        o = r(7487),
        s = r(2079),
        l = r(7081),
        u = r(6541)
      e.exports = function (e, t) {
        var r,
          c,
          d,
          p,
          h,
          m = e.target,
          y = e.global,
          g = e.stat
        if ((r = y ? n : g ? n[m] || s(m, {}) : (n[m] || {}).prototype))
          for (c in t) {
            if (
              ((p = t[c]),
              (d = e.noTargetGet ? (h = i(r, c)) && h.value : r[c]),
              !u(y ? c : m + (g ? '.' : '#') + c, e.forced) && void 0 !== d)
            ) {
              if (typeof p == typeof d) continue
              l(p, d)
            }
            ;(e.sham || (d && d.sham)) && a(p, 'sham', !0), o(r, c, p, e)
          }
      }
    },
    4229: (e) => {
      e.exports = function (e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    },
    266: (e) => {
      var t = Function.prototype.call
      e.exports = t.bind
        ? t.bind(t)
        : function () {
            return t.apply(t, arguments)
          }
    },
    1805: (e, t, r) => {
      var n = r(7400),
        i = r(8270),
        a = Function.prototype,
        o = n && Object.getOwnPropertyDescriptor,
        s = i(a, 'name'),
        l = s && 'something' === function () {}.name,
        u = s && (!n || (n && o(a, 'name').configurable))
      e.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: u }
    },
    5968: (e) => {
      var t = Function.prototype,
        r = t.bind,
        n = t.call,
        i = r && r.bind(n)
      e.exports = r
        ? function (e) {
            return e && i(n, e)
          }
        : function (e) {
            return (
              e &&
              function () {
                return n.apply(e, arguments)
              }
            )
          }
    },
    1333: (e, t, r) => {
      var n = r(9859),
        i = r(6733),
        a = function (e) {
          return i(e) ? e : void 0
        }
      e.exports = function (e, t) {
        return arguments.length < 2 ? a(n[e]) : n[e] && n[e][t]
      }
    },
    5300: (e, t, r) => {
      var n = r(7111)
      e.exports = function (e, t) {
        var r = e[t]
        return null == r ? void 0 : n(r)
      }
    },
    9859: (e, t, r) => {
      var n = function (e) {
        return e && e.Math == Math && e
      }
      e.exports =
        n('object' == typeof globalThis && globalThis) ||
        n('object' == typeof window && window) ||
        n('object' == typeof self && self) ||
        n('object' == typeof r.g && r.g) ||
        (function () {
          return this
        })() ||
        Function('return this')()
    },
    8270: (e, t, r) => {
      var n = r(5968),
        i = r(2991),
        a = n({}.hasOwnProperty)
      e.exports =
        Object.hasOwn ||
        function (e, t) {
          return a(i(e), t)
        }
    },
    5977: (e) => {
      e.exports = {}
    },
    4394: (e, t, r) => {
      var n = r(7400),
        i = r(4229),
        a = r(2635)
      e.exports =
        !n &&
        !i(function () {
          return (
            7 !=
            Object.defineProperty(a('div'), 'a', {
              get: function () {
                return 7
              },
            }).a
          )
        })
    },
    9337: (e, t, r) => {
      var n = r(9859),
        i = r(5968),
        a = r(4229),
        o = r(7079),
        s = n.Object,
        l = i(''.split)
      e.exports = a(function () {
        return !s('z').propertyIsEnumerable(0)
      })
        ? function (e) {
            return 'String' == o(e) ? l(e, '') : s(e)
          }
        : s
    },
    8511: (e, t, r) => {
      var n = r(5968),
        i = r(6733),
        a = r(5353),
        o = n(Function.toString)
      i(a.inspectSource) ||
        (a.inspectSource = function (e) {
          return o(e)
        }),
        (e.exports = a.inspectSource)
    },
    6407: (e, t, r) => {
      var n,
        i,
        a,
        o = r(8694),
        s = r(9859),
        l = r(5968),
        u = r(5052),
        c = r(5762),
        d = r(8270),
        p = r(5353),
        h = r(4399),
        m = r(5977),
        y = 'Object already initialized',
        g = s.TypeError,
        f = s.WeakMap
      if (o || p.state) {
        var b = p.state || (p.state = new f()),
          v = l(b.get),
          I = l(b.has),
          S = l(b.set)
        ;(n = function (e, t) {
          if (I(b, e)) throw new g(y)
          return (t.facade = e), S(b, e, t), t
        }),
          (i = function (e) {
            return v(b, e) || {}
          }),
          (a = function (e) {
            return I(b, e)
          })
      } else {
        var T = h('state')
        ;(m[T] = !0),
          (n = function (e, t) {
            if (d(e, T)) throw new g(y)
            return (t.facade = e), c(e, T, t), t
          }),
          (i = function (e) {
            return d(e, T) ? e[T] : {}
          }),
          (a = function (e) {
            return d(e, T)
          })
      }
      e.exports = {
        set: n,
        get: i,
        has: a,
        enforce: function (e) {
          return a(e) ? i(e) : n(e, {})
        },
        getterFor: function (e) {
          return function (t) {
            var r
            if (!u(t) || (r = i(t)).type !== e) throw g('Incompatible receiver, ' + e + ' required')
            return r
          }
        },
      }
    },
    6733: (e) => {
      e.exports = function (e) {
        return 'function' == typeof e
      }
    },
    6541: (e, t, r) => {
      var n = r(4229),
        i = r(6733),
        a = /#|\.prototype\./,
        o = function (e, t) {
          var r = l[s(e)]
          return r == c || (r != u && (i(t) ? n(t) : !!t))
        },
        s = (o.normalize = function (e) {
          return String(e).replace(a, '.').toLowerCase()
        }),
        l = (o.data = {}),
        u = (o.NATIVE = 'N'),
        c = (o.POLYFILL = 'P')
      e.exports = o
    },
    2292: (e, t, r) => {
      var n = r(5052),
        i = Math.floor
      e.exports =
        Number.isInteger ||
        function (e) {
          return !n(e) && isFinite(e) && i(e) === e
        }
    },
    5052: (e, t, r) => {
      var n = r(6733)
      e.exports = function (e) {
        return 'object' == typeof e ? null !== e : n(e)
      }
    },
    4231: (e) => {
      e.exports = !1
    },
    9395: (e, t, r) => {
      var n = r(9859),
        i = r(1333),
        a = r(6733),
        o = r(1321),
        s = r(6969),
        l = n.Object
      e.exports = s
        ? function (e) {
            return 'symbol' == typeof e
          }
        : function (e) {
            var t = i('Symbol')
            return a(t) && o(t.prototype, l(e))
          }
    },
    9646: (e, t, r) => {
      var n = r(4237)
      e.exports = function (e) {
        return n(e.length)
      }
    },
    3839: (e, t, r) => {
      var n = r(6358),
        i = r(4229)
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !i(function () {
          var e = Symbol()
          return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && n && n < 41)
        })
    },
    8694: (e, t, r) => {
      var n = r(9859),
        i = r(6733),
        a = r(8511),
        o = n.WeakMap
      e.exports = i(o) && /native code/.test(a(o))
    },
    7888: (e, t, r) => {
      var n = r(7400),
        i = r(5968),
        a = r(266),
        o = r(4229),
        s = r(5632),
        l = r(894),
        u = r(9195),
        c = r(2991),
        d = r(9337),
        p = Object.assign,
        h = Object.defineProperty,
        m = i([].concat)
      e.exports =
        !p ||
        o(function () {
          if (
            n &&
            1 !==
              p(
                { b: 1 },
                p(
                  h({}, 'a', {
                    enumerable: !0,
                    get: function () {
                      h(this, 'b', { value: 3, enumerable: !1 })
                    },
                  }),
                  { b: 2 },
                ),
              ).b
          )
            return !0
          var e = {},
            t = {},
            r = Symbol(),
            i = 'abcdefghijklmnopqrst'
          return (
            (e[r] = 7),
            i.split('').forEach(function (e) {
              t[e] = e
            }),
            7 != p({}, e)[r] || s(p({}, t)).join('') != i
          )
        })
          ? function (e, t) {
              for (var r = c(e), i = arguments.length, o = 1, p = l.f, h = u.f; i > o; )
                for (var y, g = d(arguments[o++]), f = p ? m(s(g), p(g)) : s(g), b = f.length, v = 0; b > v; )
                  (y = f[v++]), (n && !a(h, g, y)) || (r[y] = g[y])
              return r
            }
          : p
    },
    1787: (e, t, r) => {
      var n = r(9859),
        i = r(7400),
        a = r(4394),
        o = r(1176),
        s = r(9310),
        l = n.TypeError,
        u = Object.defineProperty
      t.f = i
        ? u
        : function (e, t, r) {
            if ((o(e), (t = s(t)), o(r), a))
              try {
                return u(e, t, r)
              } catch (e) {}
            if ('get' in r || 'set' in r) throw l('Accessors not supported')
            return 'value' in r && (e[t] = r.value), e
          }
    },
    7933: (e, t, r) => {
      var n = r(7400),
        i = r(266),
        a = r(9195),
        o = r(5358),
        s = r(905),
        l = r(9310),
        u = r(8270),
        c = r(4394),
        d = Object.getOwnPropertyDescriptor
      t.f = n
        ? d
        : function (e, t) {
            if (((e = s(e)), (t = l(t)), c))
              try {
                return d(e, t)
              } catch (e) {}
            if (u(e, t)) return o(!i(a.f, e, t), e[t])
          }
    },
    8151: (e, t, r) => {
      var n = r(140),
        i = r(3837).concat('length', 'prototype')
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return n(e, i)
        }
    },
    894: (e, t) => {
      t.f = Object.getOwnPropertySymbols
    },
    1321: (e, t, r) => {
      var n = r(5968)
      e.exports = n({}.isPrototypeOf)
    },
    140: (e, t, r) => {
      var n = r(5968),
        i = r(8270),
        a = r(905),
        o = r(9540).indexOf,
        s = r(5977),
        l = n([].push)
      e.exports = function (e, t) {
        var r,
          n = a(e),
          u = 0,
          c = []
        for (r in n) !i(s, r) && i(n, r) && l(c, r)
        for (; t.length > u; ) i(n, (r = t[u++])) && (~o(c, r) || l(c, r))
        return c
      }
    },
    5632: (e, t, r) => {
      var n = r(140),
        i = r(3837)
      e.exports =
        Object.keys ||
        function (e) {
          return n(e, i)
        }
    },
    9195: (e, t) => {
      var r = {}.propertyIsEnumerable,
        n = Object.getOwnPropertyDescriptor,
        i = n && !r.call({ 1: 2 }, 1)
      t.f = i
        ? function (e) {
            var t = n(this, e)
            return !!t && t.enumerable
          }
        : r
    },
    2914: (e, t, r) => {
      var n = r(9859),
        i = r(266),
        a = r(6733),
        o = r(5052),
        s = n.TypeError
      e.exports = function (e, t) {
        var r, n
        if ('string' === t && a((r = e.toString)) && !o((n = i(r, e)))) return n
        if (a((r = e.valueOf)) && !o((n = i(r, e)))) return n
        if ('string' !== t && a((r = e.toString)) && !o((n = i(r, e)))) return n
        throw s("Can't convert object to primitive value")
      }
    },
    4826: (e, t, r) => {
      var n = r(1333),
        i = r(5968),
        a = r(8151),
        o = r(894),
        s = r(1176),
        l = i([].concat)
      e.exports =
        n('Reflect', 'ownKeys') ||
        function (e) {
          var t = a.f(s(e)),
            r = o.f
          return r ? l(t, r(e)) : t
        }
    },
    9276: (e, t, r) => {
      var n = r(9859)
      e.exports = n
    },
    7487: (e, t, r) => {
      var n = r(9859),
        i = r(6733),
        a = r(8270),
        o = r(5762),
        s = r(2079),
        l = r(8511),
        u = r(6407),
        c = r(1805).CONFIGURABLE,
        d = u.get,
        p = u.enforce,
        h = String(String).split('String')
      ;(e.exports = function (e, t, r, l) {
        var u,
          d = !!l && !!l.unsafe,
          m = !!l && !!l.enumerable,
          y = !!l && !!l.noTargetGet,
          g = l && void 0 !== l.name ? l.name : t
        i(r) &&
          ('Symbol(' === String(g).slice(0, 7) && (g = '[' + String(g).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
          (!a(r, 'name') || (c && r.name !== g)) && o(r, 'name', g),
          (u = p(r)).source || (u.source = h.join('string' == typeof g ? g : ''))),
          e !== n ? (d ? !y && e[t] && (m = !0) : delete e[t], m ? (e[t] = r) : o(e, t, r)) : m ? (e[t] = r) : s(t, r)
      })(Function.prototype, 'toString', function () {
        return (i(this) && d(this).source) || l(this)
      })
    },
    8885: (e, t, r) => {
      var n = r(9859).TypeError
      e.exports = function (e) {
        if (null == e) throw n("Can't call method on " + e)
        return e
      }
    },
    2079: (e, t, r) => {
      var n = r(9859),
        i = Object.defineProperty
      e.exports = function (e, t) {
        try {
          i(n, e, { value: t, configurable: !0, writable: !0 })
        } catch (r) {
          n[e] = t
        }
        return t
      }
    },
    4399: (e, t, r) => {
      var n = r(3036),
        i = r(1441),
        a = n('keys')
      e.exports = function (e) {
        return a[e] || (a[e] = i(e))
      }
    },
    5353: (e, t, r) => {
      var n = r(9859),
        i = r(2079),
        a = '__core-js_shared__',
        o = n[a] || i(a, {})
      e.exports = o
    },
    3036: (e, t, r) => {
      var n = r(4231),
        i = r(5353)
      ;(e.exports = function (e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: '3.19.0',
        mode: n ? 'pure' : 'global',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
      })
    },
    3231: (e, t, r) => {
      var n = r(3329),
        i = Math.max,
        a = Math.min
      e.exports = function (e, t) {
        var r = n(e)
        return r < 0 ? i(r + t, 0) : a(r, t)
      }
    },
    905: (e, t, r) => {
      var n = r(9337),
        i = r(8885)
      e.exports = function (e) {
        return n(i(e))
      }
    },
    3329: (e) => {
      var t = Math.ceil,
        r = Math.floor
      e.exports = function (e) {
        var n = +e
        return n != n || 0 === n ? 0 : (n > 0 ? r : t)(n)
      }
    },
    4237: (e, t, r) => {
      var n = r(3329),
        i = Math.min
      e.exports = function (e) {
        return e > 0 ? i(n(e), 9007199254740991) : 0
      }
    },
    2991: (e, t, r) => {
      var n = r(9859),
        i = r(8885),
        a = n.Object
      e.exports = function (e) {
        return a(i(e))
      }
    },
    2066: (e, t, r) => {
      var n = r(9859),
        i = r(266),
        a = r(5052),
        o = r(9395),
        s = r(5300),
        l = r(2914),
        u = r(95),
        c = n.TypeError,
        d = u('toPrimitive')
      e.exports = function (e, t) {
        if (!a(e) || o(e)) return e
        var r,
          n = s(e, d)
        if (n) {
          if ((void 0 === t && (t = 'default'), (r = i(n, e, t)), !a(r) || o(r))) return r
          throw c("Can't convert object to primitive value")
        }
        return void 0 === t && (t = 'number'), l(e, t)
      }
    },
    9310: (e, t, r) => {
      var n = r(2066),
        i = r(9395)
      e.exports = function (e) {
        var t = n(e, 'string')
        return i(t) ? t : t + ''
      }
    },
    9821: (e, t, r) => {
      var n = r(9859).String
      e.exports = function (e) {
        try {
          return n(e)
        } catch (e) {
          return 'Object'
        }
      }
    },
    1441: (e, t, r) => {
      var n = r(5968),
        i = 0,
        a = Math.random(),
        o = n((1).toString)
      e.exports = function (e) {
        return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + o(++i + a, 36)
      }
    },
    6969: (e, t, r) => {
      var n = r(3839)
      e.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator
    },
    95: (e, t, r) => {
      var n = r(9859),
        i = r(3036),
        a = r(8270),
        o = r(1441),
        s = r(3839),
        l = r(6969),
        u = i('wks'),
        c = n.Symbol,
        d = c && c.for,
        p = l ? c : (c && c.withoutSetter) || o
      e.exports = function (e) {
        if (!a(u, e) || (!s && 'string' != typeof u[e])) {
          var t = 'Symbol.' + e
          s && a(c, e) ? (u[e] = c[e]) : (u[e] = l && d ? d(t) : p(t))
        }
        return u[e]
      }
    },
    3132: (e, t, r) => {
      r(3103)({ target: 'Number', stat: !0 }, { isInteger: r(2292) })
    },
    4586: (e, t, r) => {
      r(3103)(
        { target: 'Number', stat: !0 },
        {
          isNaN: function (e) {
            return e != e
          },
        },
      )
    },
    3105: (e, t, r) => {
      var n = r(3103),
        i = r(7888)
      n({ target: 'Object', stat: !0, forced: Object.assign !== i }, { assign: i })
    },
    2541: (e) => {
      !(function () {
        var t = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i')
        function r(e) {
          for (var t = '', r = 0; r < e; r++) t += ((65536 * (1 + Math.random())) | 0).toString(16).substring(1)
          return t
        }
        function n(e) {
          if (!e) throw new TypeError('Invalid argument; `value` has no value.')
          ;(this.value = n.EMPTY),
            e && e instanceof n
              ? (this.value = e.toString())
              : e && '[object String]' === Object.prototype.toString.call(e) && n.isGuid(e) && (this.value = e),
            (this.equals = function (e) {
              return n.isGuid(e) && this.value == e
            }),
            (this.isEmpty = function () {
              return this.value === n.EMPTY
            }),
            (this.toString = function () {
              return this.value
            }),
            (this.toJSON = function () {
              return this.value
            })
        }
        ;(n.EMPTY = '00000000-0000-0000-0000-000000000000'),
          (n.isGuid = function (e) {
            return e && (e instanceof n || t.test(e.toString()))
          }),
          (n.create = function () {
            return new n([r(2), r(1), r(1), r(1), r(3)].join('-'))
          }),
          (n.raw = function () {
            return [r(2), r(1), r(1), r(1), r(3)].join('-')
          }),
          e.exports ? (e.exports = n) : 'undefined' != typeof window && (window.Guid = n)
      })()
    },
    53: function (e, t, r) {
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, a) {
            function o(e) {
              try {
                l(n.next(e))
              } catch (e) {
                a(e)
              }
            }
            function s(e) {
              try {
                l(n.throw(e))
              } catch (e) {
                a(e)
              }
            }
            function l(e) {
              var t
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t)
                      })).then(o, s)
            }
            l((n = n.apply(e, t || [])).next())
          })
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = r(1750),
        a = r(5740),
        o = r(2848),
        s = r(3630),
        l = r(6809)
      class u extends l.TableauWebComponent {
        constructor() {
          super()
        }
        static get observedAttributes() {
          return [...super.observedAttributes, ...Object.values(i.AskDataAttributes)]
        }
        updateRenderingIfInitialized(e) {
          return n(this, void 0, void 0, function* () {
            if (this._initialized)
              return s.WebComponentManager.unregisterWebComponent(this._embeddingIdCounter), this.updateRendering(e)
          })
        }
        updateRendering(e) {
          return n(this, void 0, void 0, function* () {
            try {
              if (((this._initialized = !0), !e))
                return void console.debug(
                  `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`,
                )
              if ((yield this.auth(o.getSiteId(e))) === l.TableauAuthResponse.Failure)
                return void console.debug('Authentication failed.')
              if (!this.src)
                return void console.debug(
                  `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`,
                )
              if (!this.iframe) return void console.debug('No iframe available to update the src.')
              const t = this.readCustomParamsFromChildren()
              this._embeddingIdCounter = s.WebComponentManager.registerWebComponent(this)
              const r = a.createAskDataUrl(this.src, this.constructOptions(), this._embeddingIdCounter, t).toString()
              return (this.iframe.src = r), void this.raiseIframeSrcUpdatedNotification()
            } catch (e) {
              console.warn(e)
            }
          })
        }
        constructOptions() {
          return {
            origin: this.origin,
            showEmbed: this.showEmbed,
            showPin: this.showPin,
            showSave: this.showSave,
            showShare: this.showShare,
            token: this.token,
            iframeAuth: this.iframeAuth,
            debug: this.debug,
          }
        }
        get origin() {
          return this.getAttribute(i.AskDataAttributes.Origin) || void 0
        }
        set origin(e) {
          e ? this.setAttribute(i.AskDataAttributes.Origin, e) : this.removeAttribute(i.AskDataAttributes.Origin)
        }
        get showEmbed() {
          return this.hasAttribute(i.AskDataAttributes.ShowEmbed)
        }
        set showEmbed(e) {
          e ? this.setAttribute(i.AskDataAttributes.ShowEmbed, '') : this.removeAttribute(i.AskDataAttributes.ShowEmbed)
        }
        get showPin() {
          return this.hasAttribute(i.AskDataAttributes.ShowPin)
        }
        set showPin(e) {
          e ? this.setAttribute(i.AskDataAttributes.ShowPin, '') : this.removeAttribute(i.AskDataAttributes.ShowPin)
        }
        get showShare() {
          return this.hasAttribute(i.AskDataAttributes.ShowShare)
        }
        set showShare(e) {
          e ? this.setAttribute(i.AskDataAttributes.ShowShare, '') : this.removeAttribute(i.AskDataAttributes.ShowShare)
        }
        get showSave() {
          return this.hasAttribute(i.AskDataAttributes.ShowSave)
        }
        set showSave(e) {
          e ? this.setAttribute(i.AskDataAttributes.ShowSave, '') : this.removeAttribute(i.AskDataAttributes.ShowSave)
        }
      }
      t.TableauAskData = u
    },
    123: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = n(r(1750)),
        a = r(4695),
        o = r(3126),
        s = r(9429),
        l = r(6801)
      class u extends l.TableauVizBase {
        static get observedAttributes() {
          return [...super.observedAttributes, ...Object.values(i.VizAuthoringAttributes)]
        }
        getAttributeEvents() {
          return [
            [
              i.VizSharedAttributes.OnEditInDesktopButtonClicked,
              i.EmbeddingTableauEventType.EditInDesktopButtonClicked,
            ],
            [i.VizSharedAttributes.OnFirstInteractive, i.EmbeddingTableauEventType.FirstInteractive],
            [i.VizSharedAttributes.OnFirstVizSizeKnown, i.EmbeddingTableauEventType.FirstVizSizeKnown],
            [i.VizAuthoringAttributes.OnWorkbookPublished, i.EmbeddingTableauEventType.WorkbookPublished],
            [i.VizAuthoringAttributes.OnWorkbookPublishedAs, i.EmbeddingTableauEventType.WorkbookPublishedAs],
            [i.VizAuthoringAttributes.OnWorkbookReadyToClose, i.EmbeddingTableauEventType.WorkbookReadyToClose],
            [i.VizAttributes.OnReadyToReceiveAuthToken, i.EmbeddingTableauEventType.ReadyToReceiveAuthToken],
          ]
        }
        createFrameUrlWithParams() {
          const e = this.constructVizqlOptions(),
            t = this.readCustomParamsFromChildren()
          return s.createVizUrl(this.src, s.EmbeddingUrlMode.Authoring, e, this._embeddingIdCounter, [], [], t)
        }
        constructVizqlOptions() {
          return {
            token: this.token,
            touchOptimize: this.touchOptimize,
            hideEditInDesktopButton: this.hideEditInDesktopButton,
            suppressDefaultEditBehavior: this.suppressDefaultEditBehavior,
            hideCloseButton: this.hideCloseButton,
            debug: this.debug,
            iframeAuth: this.iframeAuth,
          }
        }
        getRegisteredEvents() {
          return super.getRegisteredEvents().concat([
            [
              a.NotificationId.WorkbookPublished,
              () => !0,
              () => this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.WorkbookPublished)),
            ],
            [a.NotificationId.WorkbookPublishedAs, () => !0, (e) => this.handleWorkbookPublishedAsEvent(e)],
            [
              a.NotificationId.WorkbookReadyToClose,
              () => !0,
              () => this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.WorkbookReadyToClose)),
            ],
          ])
        }
        handleWorkbookPublishedAsEvent(e) {
          const t = { newUrl: e.newUrl }
          this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.WorkbookPublishedAs, { detail: t }))
        }
        set hideCloseButton(e) {
          e
            ? this.setAttribute(i.VizAuthoringAttributes.HideCloseButton, '')
            : this.removeAttribute(i.VizAuthoringAttributes.HideCloseButton)
        }
        get hideCloseButton() {
          return this.hasAttribute(i.VizAuthoringAttributes.HideCloseButton)
        }
        get workbook() {
          return new o.AuthoringWorkbook(this.vizImpl.workbookImpl, this.vizImpl.embeddingId)
        }
        setAuthToken(e) {
          this.vizImpl.setAuthToken(e)
        }
      }
      t.TableauAuthoringViz = u
    },
    8520: function (e, t, r) {
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, a) {
            function o(e) {
              try {
                l(n.next(e))
              } catch (e) {
                a(e)
              }
            }
            function s(e) {
              try {
                l(n.throw(e))
              } catch (e) {
                a(e)
              }
            }
            function l(e) {
              var t
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t)
                      })).then(o, s)
            }
            l((n = n.apply(e, t || [])).next())
          })
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = r(1750),
        a = r(7726),
        o = r(2848),
        s = r(3630),
        l = r(6809)
      class u extends l.TableauWebComponent {
        constructor() {
          super()
        }
        static get observedAttributes() {
          return [...super.observedAttributes, ...Object.values(i.PulseAttributes)]
        }
        updateRenderingIfInitialized(e) {
          return n(this, void 0, void 0, function* () {
            if (this._initialized)
              return s.WebComponentManager.unregisterWebComponent(this._embeddingIdCounter), this.updateRendering(e)
          })
        }
        updateRendering(e) {
          return n(this, void 0, void 0, function* () {
            try {
              if (((this._initialized = !0), !e))
                return void console.debug(
                  `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`,
                )
              if (!this.token)
                return void console.debug(
                  `A token needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`,
                )
              if ((yield this.auth(o.getSiteIdForPulse(e))) === l.TableauAuthResponse.Failure)
                return void console.debug('Authentication failed.')
              if (!this.src)
                return void console.debug(
                  `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`,
                )
              if (!this.iframe) return void console.debug('No iframe available to update the src.')
              const t = this.readCustomParamsFromChildren()
              this._embeddingIdCounter = s.WebComponentManager.registerWebComponent(this)
              const r = a.createPulseUrl(this.src, this.constructOptions(), t).toString()
              return (this.iframe.src = r), void this.raiseIframeSrcUpdatedNotification()
            } catch (e) {
              console.warn(e)
            }
          })
        }
        constructOptions() {
          const e = { token: this.token }
          return this.disableExploreFilter && (e.disableExploreFilter = this.disableExploreFilter), e
        }
        get disableExploreFilter() {
          return this.hasAttribute(i.PulseAttributes.DisableExploreFilter)
        }
        set disableExploreFilter(e) {
          e
            ? this.setAttribute(i.PulseAttributes.DisableExploreFilter, '')
            : this.removeAttribute(i.PulseAttributes.DisableExploreFilter)
        }
      }
      t.TableauPulse = u
    },
    4882: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = n(r(1750)),
        a = r(4695),
        o = r(4007),
        s = r(4031),
        l = r(9973),
        u = r(8460),
        c = r(6208),
        d = r(9288),
        p = r(6203),
        h = r(3504),
        m = r(9429),
        y = r(6451),
        g = r(3630),
        f = r(6801)
      class b extends f.TableauVizBase {
        constructor() {
          super(...arguments), (this.preInitFilters = [])
        }
        readFiltersFromChild() {
          const e = []
          return (
            [].forEach.call(this.children, (t) => {
              t.localName === i.VizChildElements.VizFilter &&
                t.getAttribute(i.VizChildElementAttributes.Field) &&
                void 0 !== t.getAttribute(i.VizChildElementAttributes.Value) &&
                e.push({
                  field: t.getAttribute(i.VizChildElementAttributes.Field),
                  value: t.getAttribute(i.VizChildElementAttributes.Value),
                })
            }),
            e
          )
        }
        readParametersFromChild() {
          const e = []
          return (
            [].forEach.call(this.children, (t) => {
              t.localName === i.VizChildElements.VizParameter &&
                t.getAttribute(i.VizChildElementAttributes.Name) &&
                t.getAttribute(i.VizChildElementAttributes.Value) &&
                e.push({
                  name: t.getAttribute(i.VizChildElementAttributes.Name),
                  value: t.getAttribute(i.VizChildElementAttributes.Value),
                })
            }),
            e
          )
        }
        static get observedAttributes() {
          return [...super.observedAttributes, ...Object.values(i.VizAttributes)]
        }
        disconnectedCallback() {
          ;(this.preInitFilters = []), super.disconnectedCallback()
        }
        createFrameUrlWithParams() {
          const e = this.constructVizqlOptions(),
            t = this.readFiltersFromChild().concat(this.preInitFilters),
            r = this.readParametersFromChild(),
            n = this.readCustomParamsFromChildren()
          return m.createVizUrl(this.src, m.EmbeddingUrlMode.Viewing, e, this._embeddingIdCounter, t, r, n)
        }
        constructVizqlOptions() {
          return {
            disableUrlActionsPopups: this.disableUrlActionsPopups,
            hideTabs: this.hideTabs,
            toolbar: this.toolbar,
            instanceIdToClone: this.instanceIdToClone,
            device: this.device,
            token: this.token,
            touchOptimize: this.touchOptimize,
            hideEditButton: this.hideEditButton,
            hideEditInDesktopButton: this.hideEditInDesktopButton,
            suppressDefaultEditBehavior: this.suppressDefaultEditBehavior,
            debug: this.debug,
            iframeAuth: this.iframeAuth,
          }
        }
        getAttributeEvents() {
          return [
            [i.VizAttributes.OnCustomMarkContextMenuEvent, i.EmbeddingTableauEventType.CustomMarkContextMenuEvent],
            [i.VizAttributes.OnEditButtonClicked, i.EmbeddingTableauEventType.EditButtonClicked],
            [
              i.VizSharedAttributes.OnEditInDesktopButtonClicked,
              i.EmbeddingTableauEventType.EditInDesktopButtonClicked,
            ],
            [i.VizAttributes.OnFilterChanged, i.EmbeddingTableauEventType.FilterChanged],
            [i.VizSharedAttributes.OnFirstInteractive, i.EmbeddingTableauEventType.FirstInteractive],
            [i.VizSharedAttributes.OnFirstVizSizeKnown, i.EmbeddingTableauEventType.FirstVizSizeKnown],
            [i.VizAttributes.OnMarkSelectionChanged, i.EmbeddingTableauEventType.MarkSelectionChanged],
            [i.VizAttributes.OnParameterChanged, i.EmbeddingTableauEventType.ParameterChanged],
            [i.VizAttributes.OnTabSwitched, i.EmbeddingTableauEventType.TabSwitched],
            [i.VizAttributes.OnToolbarStateChanged, i.EmbeddingTableauEventType.ToolbarStateChanged],
            [i.VizAttributes.OnUrlAction, i.EmbeddingTableauEventType.UrlAction],
            [i.VizAttributes.OnCustomViewLoaded, i.EmbeddingTableauEventType.CustomViewLoaded],
            [i.VizAttributes.OnCustomViewRemoved, i.EmbeddingTableauEventType.CustomViewRemoved],
            [i.VizAttributes.OnCustomViewSaved, i.EmbeddingTableauEventType.CustomViewSaved],
            [i.VizAttributes.OnCustomViewSetDefault, i.EmbeddingTableauEventType.CustomViewSetDefault],
            [i.VizAttributes.OnStoryPointSwitched, i.EmbeddingTableauEventType.StoryPointSwitched],
            [i.VizAttributes.OnSummaryDataChanged, i.EmbeddingTableauEventType.SummaryDataChanged],
            [i.VizAttributes.OnReadyToReceiveAuthToken, i.EmbeddingTableauEventType.ReadyToReceiveAuthToken],
          ]
        }
        getRegisteredEvents() {
          return super.getRegisteredEvents().concat([
            [
              a.NotificationId.SelectedMarksChanged,
              (e) => this.shouldNotifyEvent(e),
              (e) => this.handleSelectedMarksChangedEvent(e),
            ],
            [
              a.NotificationId.FilterChanged,
              (e) => this.shouldNotifyEvent(e.visualId),
              (e) => this.handleFilterChangedEvent(e),
            ],
            [a.NotificationId.EditButtonClicked, () => !0, () => this.handleEditButtonClicked()],
            [
              a.NotificationId.CustomMarkContextMenuClicked,
              (e) => this.shouldNotifyEvent(e.visualId),
              (e) => this.handleCustomMarkClickedContextMenuEvent(e),
            ],
            [a.NotificationId.ParameterChanged, () => !0, (e) => this.handleParameterChangedEvent(e)],
            [a.NotificationId.UrlAction, () => !0, (e) => this.handleUrlAction(e)],
            [a.NotificationId.StoryPointSwitched, () => !0, (e) => this.handleStoryPointSwitch(e)],
            [
              a.NotificationId.SummaryDataChanged,
              (e) => this.shouldNotifyEvent(e.visualId),
              (e) => this.handleSummaryDataChangedEvent(e),
            ],
          ])
        }
        shouldNotifyEvent(e) {
          switch (this.workbook.activeSheet.sheetType) {
            case i.SheetType.Worksheet:
              return this.workbook.activeSheet.name === e.worksheet
            case i.SheetType.Dashboard:
              return 1 === this.workbook.activeSheet.worksheets.filter((t) => t.name === e.worksheet).length
            case i.SheetType.Story: {
              const t = this.workbook.activeSheet.activeStoryPoint.containedSheet
              return (
                !!t &&
                (t.sheetType === i.SheetType.Worksheet
                  ? t.name === e.worksheet
                  : t.sheetType === i.SheetType.Dashboard &&
                    1 === t.worksheets.filter((t) => t.name === e.worksheet).length)
              )
            }
            default:
              return !1
          }
        }
        handleSelectedMarksChangedEvent(e) {
          const t = new u.MarksSelectedEvent(this.getWorksheetForNotificationHandler(e))
          this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.MarkSelectionChanged, { detail: t }))
        }
        handleFilterChangedEvent(e) {
          const t = new l.FilterChangedEvent(
            this.getWorksheetForNotificationHandler(e.visualId),
            e.fieldName,
            e.fieldId,
          )
          this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.FilterChanged, { detail: t }))
        }
        handleSummaryDataChangedEvent(e) {
          const t = new p.SummaryDataChangedEvent(this.getWorksheetForNotificationHandler(e.visualId))
          this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.SummaryDataChanged, { detail: t }))
        }
        handleEditButtonClicked() {
          this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.EditButtonClicked))
        }
        handleCustomMarkClickedContextMenuEvent(e) {
          const t = new s.CustomMarkContextMenuEvent(
            this.getWorksheetForNotificationHandler(e.visualId),
            e.contextMenuId,
          )
          this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.CustomMarkContextMenuEvent, { detail: t }))
        }
        handleParameterChangedEvent(e) {
          const t = new c.ParameterChangedEvent(e, this.vizImpl.embeddingId)
          this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.ParameterChanged, { detail: t }))
        }
        handleUrlAction(e) {
          const t = new h.UrlActionEvent(e.url, e.target)
          this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.UrlAction, { detail: t }))
        }
        handleStoryPointSwitch(e) {
          const t = this.vizImpl.workbookImpl.activeSheet,
            r = t.storyPointsInfo.find((e) => !0 === e.active)
          if (t.activeStoryPoint && r && t.activeStoryPoint.index !== e.index) {
            t.updateStory(e)
            const n = new d.StoryPointSwitchedEvent(r, t.activeStoryPoint, this.vizImpl.workbookImpl)
            this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.StoryPointSwitched, { detail: n }))
          }
        }
        getWorksheetForNotificationHandler(e) {
          let t
          switch (this.workbook.activeSheet.sheetType) {
            case i.SheetType.Worksheet:
              t = this.workbook.activeSheet
              break
            case i.SheetType.Dashboard: {
              const r = this.workbook.activeSheet.worksheets.filter((t) => t.name === e.worksheet)
              if (1 !== r.length) throw new o.TableauError(i.EmbeddingErrorCodes.IndexOutOfRange, 'Worksheet not found')
              t = r[0]
              break
            }
            case i.SheetType.Story: {
              const r = this.workbook.activeSheet.activeStoryPoint.containedSheet
              if (!r) throw new o.TableauError(i.EmbeddingErrorCodes.IndexOutOfRange, 'Worksheet not found')
              if (r.sheetType === i.SheetType.Worksheet) t = r
              else {
                if (r.sheetType !== i.SheetType.Dashboard)
                  throw new o.TableauError(i.EmbeddingErrorCodes.ImplementationError, 'Could not find sheetType')
                {
                  const n = r.worksheets.filter((t) => t.name === e.worksheet)
                  if (1 !== n.length)
                    throw new o.TableauError(i.EmbeddingErrorCodes.IndexOutOfRange, 'Worksheet not found')
                  t = n[0]
                }
              }
              break
            }
            default:
              throw new o.TableauError(i.EmbeddingErrorCodes.ImplementationError, 'Could not find sheetType')
          }
          return t
        }
        get disableUrlActionsPopups() {
          return this.hasAttribute(i.VizAttributes.DisableUrlActionsPopups)
        }
        set disableUrlActionsPopups(e) {
          e
            ? this.setAttribute(i.VizAttributes.DisableUrlActionsPopups, '')
            : this.removeAttribute(i.VizAttributes.DisableUrlActionsPopups)
        }
        get hideTabs() {
          return this.hasAttribute(i.VizAttributes.HideTabs)
        }
        set hideTabs(e) {
          e ? this.setAttribute(i.VizAttributes.HideTabs, '') : this.removeAttribute(i.VizAttributes.HideTabs)
        }
        get toolbar() {
          const e = f.attributeToEnumKey(this.getAttribute(i.VizAttributes.Toolbar))
          return i.Toolbar[e] || f.TableauVizBase.VizAttributeDefaults.toolbar
        }
        set toolbar(e) {
          e && this.setAttribute(i.VizAttributes.Toolbar, e)
        }
        get instanceIdToClone() {
          const e = this.getAttribute(i.VizAttributes.InstanceIdToClone)
          if (e) return e
        }
        set instanceIdToClone(e) {
          e
            ? this.setAttribute(i.VizAttributes.InstanceIdToClone, e)
            : this.removeAttribute(i.VizAttributes.InstanceIdToClone)
        }
        get device() {
          const e = f.attributeToEnumKey(this.getAttribute(i.VizAttributes.Device))
          return i.DeviceType[e] || f.TableauVizBase.VizAttributeDefaults.device
        }
        set device(e) {
          this.setAttribute(i.VizAttributes.Device, e)
        }
        get hideEditButton() {
          return this.hasAttribute(i.VizAttributes.HideEditButton)
        }
        set hideEditButton(e) {
          e
            ? this.setAttribute(i.VizAttributes.HideEditButton, '')
            : this.removeAttribute(i.VizAttributes.HideEditButton)
        }
        get automaticUpdatesArePaused() {
          return this.vizImpl.automaticUpdatesArePaused
        }
        pauseAutomaticUpdatesAsync() {
          return this.vizImpl.pauseAutomaticUpdatesAsync()
        }
        resumeAutomaticUpdatesAsync() {
          return this.vizImpl.resumeAutomaticUpdatesAsync()
        }
        toggleAutomaticUpdatesAsync() {
          return this.vizImpl.toggleAutomaticUpdatesAsync()
        }
        revertAllAsync() {
          return this.vizImpl.revertAllAsync()
        }
        refreshDataAsync() {
          return this.vizImpl.refreshDataAsync()
        }
        exportImageAsync() {
          return this.vizImpl.exportImageAsync()
        }
        exportCrosstabAsync(e, t) {
          return this.vizImpl.exportCrosstabAsync(e, t)
        }
        exportDataAsync(e, t) {
          return this.vizImpl.exportDataAsync(e, t)
        }
        exportPowerPointAsync(e) {
          return this.vizImpl.exportPowerPointAsync(e)
        }
        exportPDFAsync(e, t) {
          return this.vizImpl.exportPDFAsync(e, t)
        }
        displayDialogAsync(e) {
          return this.vizImpl.displayDialogAsync(e)
        }
        redoAsync() {
          return this.vizImpl.redoAsync()
        }
        undoAsync() {
          return this.vizImpl.undoAsync()
        }
        setAuthToken(e) {
          this.vizImpl.setAuthToken(e)
        }
        addFilter(e, t) {
          this.preInitFilters.push({ field: e, value: t }),
            g.WebComponentManager.synchronizeRender(this.updateRenderingIfInitialized.bind(this, this.src))
        }
        get workbook() {
          return new y.Workbook(this.vizImpl.workbookImpl)
        }
      }
      t.TableauViz = b
    },
    6801: function (e, t, r) {
      var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, a) {
              function o(e) {
                try {
                  l(n.next(e))
                } catch (e) {
                  a(e)
                }
              }
              function s(e) {
                try {
                  l(n.throw(e))
                } catch (e) {
                  a(e)
                }
              }
              function l(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, s)
              }
              l((n = n.apply(e, t || [])).next())
            })
          },
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
            return (t.default = e), t
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const a = i(r(1750)),
        o = r(4695),
        s = r(4007),
        l = r(416),
        u = r(2848),
        c = r(3630),
        d = r(6809)
      class p extends d.TableauWebComponent {
        disconnectedCallback() {
          super.disconnectedCallback(), this._vizImpl && this._vizImpl.dispose()
        }
        static get observedAttributes() {
          return [...super.observedAttributes, ...Object.values(a.VizSharedAttributes)]
        }
        updateRenderingIfInitialized(e) {
          return n(this, void 0, void 0, function* () {
            if (this._initialized)
              return (
                this._vizImpl && this._vizImpl.dispose(),
                c.WebComponentManager.unregisterWebComponent(this._embeddingIdCounter),
                this.updateRendering(e)
              )
          })
        }
        updateRendering(e) {
          return n(this, void 0, void 0, function* () {
            try {
              if (((this._initialized = !0), !e))
                return void console.debug(
                  `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`,
                )
              if ((yield this.auth(u.getSiteId(e))) === d.TableauAuthResponse.Failure)
                return void console.debug('Authentication failed.')
              if (!this.src)
                return void console.debug(
                  `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`,
                )
              if (!this.iframe) return void console.debug('No iframe available to update the src.')
              ;(this._embeddingIdCounter = c.WebComponentManager.registerWebComponent(this)),
                this.registerAttributeEvents()
              const t = this.createFrameUrlWithParams()
              return (
                (this._vizImpl = this.createAndInitializeVizImpl(t)),
                (this.iframe.src = t.toString()),
                void this.raiseIframeSrcUpdatedNotification()
              )
            } catch (e) {
              console.debug(e)
            }
          })
        }
        createAndInitializeVizImpl(e) {
          const t = new l.VizImpl(this, this.iframe, e, this._embeddingIdCounter)
          return t.initializeViz(), t
        }
        registerAttributeEvents() {
          this.getAttributeEvents().forEach((e) => {
            const [t, r] = e
            this.registerCallback(t, r)
          })
        }
        initializeEvents() {
          let e
          try {
            e = s.ApiServiceRegistry.get(this.vizImpl.embeddingId).getService('notification-service')
          } catch (e) {
            throw new s.TableauError(a.EmbeddingErrorCodes.EventInitializationError, 'Event initialization failed')
          }
          const t = this.getRegisteredEvents()
          for (const [r, n, i] of t) e.registerHandler(r, n, i)
        }
        getRegisteredEvents() {
          return [
            [
              o.NotificationId.EditInDesktopButtonClicked,
              () => !0,
              () => this.dispatchEvent(new CustomEvent(a.EmbeddingTableauEventType.EditInDesktopButtonClicked)),
            ],
          ]
        }
        get touchOptimize() {
          return this.hasAttribute(a.VizSharedAttributes.TouchOptimize)
        }
        set touchOptimize(e) {
          e
            ? this.setAttribute(a.VizSharedAttributes.TouchOptimize, '')
            : this.removeAttribute(a.VizSharedAttributes.TouchOptimize)
        }
        get vizImpl() {
          return this._vizImpl
        }
        get hideEditInDesktopButton() {
          return this.hasAttribute(a.VizSharedAttributes.HideEditInDesktopButton)
        }
        set hideEditInDesktopButton(e) {
          e
            ? this.setAttribute(a.VizSharedAttributes.HideEditInDesktopButton, '')
            : this.removeAttribute(a.VizSharedAttributes.HideEditInDesktopButton)
        }
        get suppressDefaultEditBehavior() {
          return this.hasAttribute(a.VizSharedAttributes.SuppressDefaultEditBehavior)
        }
        set suppressDefaultEditBehavior(e) {
          e
            ? this.setAttribute(a.VizSharedAttributes.SuppressDefaultEditBehavior, '')
            : this.removeAttribute(a.VizSharedAttributes.SuppressDefaultEditBehavior)
        }
        get disableVersionCheck() {
          return this.hasAttribute(a.VizSharedAttributes.DisableVersionCheck)
        }
        set disableVersionCheck(e) {
          e
            ? this.setAttribute(a.VizSharedAttributes.DisableVersionCheck, '')
            : this.removeAttribute(a.VizSharedAttributes.DisableVersionCheck)
        }
        getCurrentSrcAsync() {
          return this.vizImpl.getCurrentSrcAsync()
        }
      }
      ;(t.TableauVizBase = p),
        (p.VizAttributeDefaults = { device: a.DeviceType.Default, toolbar: a.Toolbar.Bottom }),
        (t.attributeToEnumKey = function (e) {
          if (!e || e.length < 1) return ''
          const t = e.toLowerCase()
          return t[0].toUpperCase() + t.substring(1)
        })
    },
    6809: function (e, t, r) {
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, a) {
            function o(e) {
              try {
                l(n.next(e))
              } catch (e) {
                a(e)
              }
            }
            function s(e) {
              try {
                l(n.throw(e))
              } catch (e) {
                a(e)
              }
            }
            function l(e) {
              var t
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t)
                      })).then(o, s)
            }
            l((n = n.apply(e, t || [])).next())
          })
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = r(1750),
        a = r(3101),
        o = r(9701),
        s = r(3630)
      var l
      !(function (e) {
        ;(e.Skip = 'skip'), (e.Success = 'success'), (e.Failure = 'failure')
      })((l = t.TableauAuthResponse || (t.TableauAuthResponse = {}))),
        (t.getLocalizedTitle = (e) => {
          const t = {
            en: 'Data Visualization',
            'en-GB': 'Data Visualisation',
            fr: 'Visualisation de données',
            es: 'Visualización de datos',
            it: 'Visualizzazione dati',
            pt: 'Visualização de dados',
            ja: 'データ ビジュアライゼーション',
            de: 'Datenvisualisierung',
            ko: '데이터 비주얼리제이션',
            'zh-CN': '数据可视化',
            'zh-TW': '資料可視化',
          }
          return t[e] || t[e.substr(0, 2)] || t.en
        })
      class u extends HTMLElement {
        constructor() {
          super(),
            (this._initialized = !1),
            (this._embeddingIdCounter = 0),
            (this._fixedSize = !1),
            this.attachShadow({ mode: 'open' })
        }
        disconnectedCallback() {
          var e
          this._iframe && (null === (e = this.shadowRoot) || void 0 === e || e.removeChild(this._iframe)),
            s.WebComponentManager.clearOrigin(this.src, this.forceTokenSync),
            s.WebComponentManager.unregisterWebComponent(this._embeddingIdCounter),
            (this._initialized = !1)
        }
        connectedCallback() {
          'loading' === document.readyState
            ? document.addEventListener('DOMContentLoaded', () => {
                this.initialize()
              })
            : this.initialize()
        }
        attributeChangedCallback(e, t, r) {
          ;(t || t !== r) &&
            (e !== i.WebComponentAttributes.Width && e !== i.WebComponentAttributes.Height
              ? (e === i.WebComponentAttributes.Token &&
                  t &&
                  t !== r &&
                  s.WebComponentManager.clearOrigin(this.src, this.forceTokenSync),
                s.WebComponentManager.synchronizeRender(this.updateRenderingIfInitialized.bind(this, this.src)))
              : this.setFrameSize())
        }
        static get observedAttributes() {
          return Object.values(i.WebComponentAttributes)
        }
        initialize() {
          this._initialized ||
            ((this.style.display = 'flex'),
            this.setupFrame(),
            this.registerAttributeAuthErrorEvent(),
            s.WebComponentManager.synchronizeRender(this.updateRendering.bind(this, this.src)))
        }
        get fixedSize() {
          return this._fixedSize
        }
        readCustomParamsFromChildren() {
          const e = []
          return (
            Array.from(this.children).forEach((t) => {
              t.localName === i.WebComponentChildElements.CustomParameter &&
                t.getAttribute(i.WebComponentChildElementAttributes.Name) &&
                t.getAttribute(i.WebComponentChildElementAttributes.Value) &&
                e.push({
                  name: t.getAttribute(i.WebComponentChildElementAttributes.Name),
                  value: t.getAttribute(i.WebComponentChildElementAttributes.Value),
                })
            }),
            e
          )
        }
        setupFrame() {
          this._iframe = document.createElement('iframe')
          const e = navigator.language,
            r = t.getLocalizedTitle(e)
          this._iframe.setAttribute('title', r),
            this._iframe.setAttribute('allowTransparency', 'true'),
            this._iframe.setAttribute('allowFullScreen', 'true'),
            (this._iframe.style.margin = '0px'),
            (this._iframe.style.padding = '0px'),
            (this._iframe.style.border = 'none'),
            (this._iframe.style.position = 'relative'),
            (this._iframe.id = this.id),
            (this._iframe.name = this.id),
            this.setFrameSize(),
            this.shadowRoot && this.shadowRoot.appendChild(this._iframe)
        }
        setFrameSize() {
          this._iframe && ((this._iframe.style.height = this.height), (this._iframe.style.width = this.width))
        }
        computeElementSize() {
          const e = this.getPixelAttribute(i.WebComponentAttributes.Height),
            t = this.getPixelAttribute(i.WebComponentAttributes.Width)
          if (e && t) return (this._fixedSize = !0), { height: e, width: t }
          if (this.parentElement) {
            const { height: e, width: t } = o.HtmlElementHelpers.getContentSize(this.parentElement)
            if (e && t) return (this._fixedSize = !0), { height: `${e}px`, width: `${t}px` }
          }
          return (this._fixedSize = !1), { height: u.AttributeDefaults.height, width: u.AttributeDefaults.width }
        }
        get src() {
          return this.getAttribute(i.WebComponentAttributes.Src)
        }
        set src(e) {
          e && this.setAttribute(i.WebComponentAttributes.Src, e)
        }
        get forceTokenSync() {
          return this.hasAttribute(i.WebComponentAttributes.ForceTokenSync)
        }
        set forceTokenSync(e) {
          e
            ? this.setAttribute(i.WebComponentAttributes.ForceTokenSync, '')
            : this.removeAttribute(i.WebComponentAttributes.ForceTokenSync)
        }
        get width() {
          return this.computeElementSize().width
        }
        set width(e) {
          this.setAttribute(i.WebComponentAttributes.Width, e)
        }
        get height() {
          return this.computeElementSize().height
        }
        set height(e) {
          this.setAttribute(i.WebComponentAttributes.Height, e)
        }
        get debug() {
          return this.hasAttribute(i.WebComponentAttributes.Debug)
        }
        set debug(e) {
          e
            ? this.setAttribute(i.WebComponentAttributes.Debug, '')
            : this.removeAttribute(i.WebComponentAttributes.Debug)
        }
        get token() {
          const e = this.getAttribute(i.WebComponentAttributes.Token)
          if (e) return e
        }
        set token(e) {
          e
            ? this.setAttribute(i.WebComponentAttributes.Token, e)
            : this.removeAttribute(i.WebComponentAttributes.Token)
        }
        get iframeAuth() {
          return this.hasAttribute(i.WebComponentAttributes.IframeAuth)
        }
        set iframeAuth(e) {
          e
            ? this.setAttribute(i.WebComponentAttributes.IframeAuth, '')
            : this.removeAttribute(i.WebComponentAttributes.IframeAuth)
        }
        getPixelAttribute(e) {
          const t = this.getAttribute(e)
          return t && '' !== t ? (isNaN(Number(t)) ? t : `${Math.round(Number(t))}px`) : ''
        }
        get iframe() {
          return this._iframe
        }
        registerAttributeAuthErrorEvent() {
          this.getWebComponentAttributeEvents().forEach((e) => {
            const [t, r] = e
            this.registerCallback(t, r)
          })
        }
        getWebComponentAttributeEvents() {
          return [[i.WebComponentAttributes.OnVizLoadError, i.EmbeddingTableauEventType.VizLoadError]]
        }
        registerCallback(e, t) {
          const r = this.getAttribute(e)
          r && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(r) && window[r] && this.addEventListener(t, window[r])
        }
        auth(e) {
          return n(this, void 0, void 0, function* () {
            try {
              if (!this.src) return l.Skip
              if (!this.token) return l.Skip
              if (this.iframeAuth) return l.Skip
              if (!s.WebComponentManager.authRequired(this.src, this.forceTokenSync)) return l.Skip
              const t = `${new URL(this.src).origin.toString()}/vizportal/api/web/v1/auth/embed/signin`,
                r = { siteName: e, jwt: this.token },
                n = {
                  method: 'POST',
                  credentials: 'include',
                  headers: { 'content-type': 'application/json' },
                  body: JSON.stringify(r),
                },
                a = yield fetch(t, n)
              if (a.ok) return s.WebComponentManager.updateSignedInOrigin(this.src, this.forceTokenSync), l.Success
              const o = yield a.text(),
                u = { statusCode: a.status, errorMessage: o }
              return this.isFallbackToRedirectAuthNeeded(u)
                ? ((this.iframeAuth = !0), console.debug('Auth Fallback trigger'), l.Failure)
                : (this.raiseVizLoadErrorNotification(i.EmbeddingErrorCodes.AuthFailed, u), l.Failure)
            } catch (e) {
              return this.raiseVizLoadErrorNotification(i.EmbeddingErrorCodes.UnknownAuthError, e), l.Failure
            }
          })
        }
        isFallbackToRedirectAuthNeeded(e) {
          try {
            if (404 === e.statusCode) return !0
            if (401 === e.statusCode) {
              let t = JSON.parse(e.errorMessage).result.errors
              if (t && t.length > 0 && 67 === t[0].code) return !0
            }
            return !1
          } catch (e) {
            return console.error('Parsing error: ' + e), !1
          }
        }
        raiseIframeSrcUpdatedNotification() {
          this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.IframeSrcUpdated))
        }
        raiseVizLoadErrorNotification(e, t) {
          try {
            console.error(t)
            const r = new a.VizLoadErrorEvent(e, JSON.stringify(t))
            this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.VizLoadError, { detail: r }))
          } catch (e) {
            const t = new a.VizLoadErrorEvent(i.EmbeddingErrorCodes.UnknownAuthError, '')
            this.dispatchEvent(new CustomEvent(i.EmbeddingTableauEventType.VizLoadError, { detail: t }))
          }
        }
      }
      ;(t.TableauWebComponent = u), (u.AttributeDefaults = { width: '800px', height: '600px' })
    },
    4031: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1750),
        i = r(5408)
      class a extends i.TableauWorksheetEvent {
        constructor(e, t) {
          super(n.EmbeddingTableauEventType.CustomMarkContextMenuEvent, e), (this._contextMenuId = t)
        }
        getContextMenuId() {
          return this._contextMenuId
        }
        getSelectedMarksAsync() {
          return this.worksheet.getSelectedMarksAsync()
        }
      }
      t.CustomMarkContextMenuEvent = a
    },
    9973: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1750),
        i = r(4007),
        a = r(5408)
      class o extends a.TableauWorksheetEvent {
        constructor(e, t, r) {
          super(n.EmbeddingTableauEventType.FilterChanged, e), (this._fieldName = t), (this._fieldId = r)
        }
        get fieldName() {
          return this._fieldName
        }
        get fieldId() {
          return this._fieldId
        }
        getFilterAsync() {
          return this.worksheet.getFiltersAsync().then((e) => {
            const t = this.fieldId
              ? e.find((e) => e.fieldId === this.fieldId, this)
              : e.find((e) => e.fieldName === this.fieldName, this)
            if (!t)
              throw new i.TableauError(
                n.EmbeddingErrorCodes.FilterMissingOrNotImplemented,
                `Cannot find filter: ${this._fieldName}.`,
              )
            return t
          })
        }
      }
      t.FilterChangedEvent = o
    },
    5538: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.FirstVizSizeKnownEvent = class {
          constructor(e) {
            this._vizSize = e
          }
          get vizSize() {
            return this._vizSize
          }
        })
    },
    8460: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1750),
        i = r(5408)
      class a extends i.TableauWorksheetEvent {
        constructor(e) {
          super(n.EmbeddingTableauEventType.MarkSelectionChanged, e)
        }
        getMarksAsync() {
          return this.worksheet.getSelectedMarksAsync()
        }
      }
      t.MarksSelectedEvent = a
    },
    6208: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1750),
        i = r(4007),
        a = r(1062)
      t.ParameterChangedEvent = class {
        constructor(e, t) {
          ;(this._globalFieldName = e), (this._embeddingId = t)
        }
        getParameterAsync() {
          return i.ApiServiceRegistry.get(this._embeddingId)
            .getService('parameters-service')
            .findParameterByGlobalFieldNameAsync(this._globalFieldName)
            .then((e) => {
              if (void 0 === e)
                throw new i.TableauError(
                  n.EmbeddingErrorCodes.MissingParameter,
                  `Cannot find parameter: ${this._globalFieldName}`,
                )
              return new a.Parameter(e)
            })
        }
      }
    },
    9288: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1970),
        i = r(3440)
      t.StoryPointSwitchedEvent = class {
        constructor(e, t, r) {
          ;(this._oldStoryPointInfoImpl = e), (this._currStoryPointImpl = t), (this._workbookImpl = r)
        }
        get oldStoryPointInfo() {
          return new i.StoryPointInfo(this._oldStoryPointInfoImpl, this._workbookImpl)
        }
        get newStoryPoint() {
          return new n.StoryPoint(this._currStoryPointImpl, this._workbookImpl)
        }
      }
    },
    6203: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1750),
        i = r(5408)
      class a extends i.TableauWorksheetEvent {
        constructor(e) {
          super(n.EmbeddingTableauEventType.SummaryDataChanged, e)
        }
      }
      t.SummaryDataChangedEvent = a
    },
    7722: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.TabSwitchedEvent = class {
          constructor(e, t) {
            ;(this._oldSheetName = e), (this._newSheetName = t)
          }
          get oldSheetName() {
            return this._oldSheetName
          }
          get newSheetName() {
            return this._newSheetName
          }
        })
    },
    696: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.TableauSheetEvent = class {
          constructor(e, t) {
            this._sheet = t
          }
          get sheet() {
            return this._sheet
          }
        })
    },
    5408: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(696)
      class i extends n.TableauSheetEvent {
        constructor(e, t) {
          super(e, t), (this._worksheet = t)
        }
        get worksheet() {
          return this._worksheet
        }
      }
      t.TableauWorksheetEvent = i
    },
    1912: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ToolbarStateChangedEvent = class {
          constructor(e, t) {
            ;(this._canRedo = e), (this._canUndo = t)
          }
          get canRedo() {
            return this._canRedo
          }
          get canUndo() {
            return this._canUndo
          }
        })
    },
    3504: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.UrlActionEvent = class {
          constructor(e, t) {
            ;(this._url = e), (this._target = t)
          }
          get url() {
            return this._url
          }
          get target() {
            return this._target
          }
        })
    },
    3101: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.VizLoadErrorEvent = class {
          constructor(e, t) {
            ;(this._errorCode = e), (this._message = t)
          }
          get message() {
            return this._message
          }
          get errorCode() {
            return this._errorCode
          }
        })
    },
    1799: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(4007)
      t.AuthoringWorksheetImpl = class {
        constructor(e) {
          this._registryId = e
        }
        getAbstractQueryWithDataModel() {
          return n.ApiServiceRegistry.get(this._registryId)
            .getService('EmbeddingVizApiService')
            .getEmbeddingAbstractQueryAsync()
        }
        getVizStateWithDataModel() {
          return n.ApiServiceRegistry.get(this._registryId)
            .getService('EmbeddingVizApiService')
            .getEmbeddingVizStateWithDataModelAsync()
        }
        setVizStateWithDataModel(e) {
          return n.ApiServiceRegistry.get(this._registryId)
            .getService('EmbeddingVizApiService')
            .setEmbeddingVizStateWithDataModelAsync(e)
        }
      }
    },
    9733: function (e, t, r) {
      var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, a) {
              function o(e) {
                try {
                  l(n.next(e))
                } catch (e) {
                  a(e)
                }
              }
              function s(e) {
                try {
                  l(n.throw(e))
                } catch (e) {
                  a(e)
                }
              }
              function l(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, s)
              }
              l((n = n.apply(e, t || [])).next())
            })
          },
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
            return (t.default = e), t
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const a = i(r(1750)),
        o = r(4695),
        s = r(4007)
      class l extends s.WorkbookImpl {
        constructor(e, t) {
          super(),
            (this._registryId = t),
            (this._publishedSheetsInfo = []),
            (this._customViews = new Map()),
            (this._name = e.workbookName),
            (this._canDownloadWorkbook = e.canDownloadWorkbook),
            this.initializeWorkbook(e)
        }
        get activeSheet() {
          return this._activeSheetImpl
        }
        get publishedSheetsInfo() {
          return this._publishedSheetsInfo
        }
        get name() {
          return this._name
        }
        get canDownloadWorkbook() {
          return this._canDownloadWorkbook
        }
        get pendingTabSwitchPromise() {
          return this._pendingTabSwitchPromise
        }
        get pendingShowCustomViewPromise() {
          return this._pendingShowCustomViewPromise
        }
        clearPendingShowCustomViewPromise() {
          this._pendingShowCustomViewPromise = void 0
        }
        get activeCustomView() {
          return this._currentCustomView
        }
        activateSheetAsync(e) {
          s.ErrorHelpers.verifyParameter(e, 'sheetNameOrIndex')
          let t = this.convertSheetIndexToSheetName(e)
          return (
            s.ErrorHelpers.verifyParameterType(t, 'string', 'sheetNameOrIndex'),
            this.validatePublishedSheet(t) || this.verifyDashboardSheets(t),
            this._activeSheetImpl && t === this._activeSheetImpl.name
              ? new Promise((e, t) => {
                  e(this)
                })
              : (s.ApiServiceRegistry.get(this._registryId).getService('viz-service').activateSheetAsync(t),
                new Promise((e, t) => {
                  this._pendingTabSwitchPromise = { resolve: e, reject: t }
                }))
          )
        }
        getParametersAsync() {
          return s.ApiServiceRegistry.get(this._registryId).getService('parameters-service').getAllParametersAsync()
        }
        changeParameterValueAsync(e, t) {
          return n(this, void 0, void 0, function* () {
            s.ErrorHelpers.verifyParameter(e, 'parameterName')
            const r = s.ApiServiceRegistry.get(this._registryId).getService('parameters-service'),
              n = yield r.findParameterByNameAsync(e)
            return n ? n.changeValueAsync(t).then(() => n) : void 0
          })
        }
        updateExistingActiveSheetReferences(e) {
          if (this._activeSheetImpl) {
            if (this._activeSheetImpl.name === e) return
            ;(this._activeSheetImpl.active = !1),
              this._publishedSheetsInfo.forEach((e, t) => {
                e.name === this._activeSheetImpl.name && (e.active = !1)
              })
          }
        }
        processCustomViews(e, t) {
          var r
          const n = null === (r = t.currentView) || void 0 === r ? void 0 : r.luid
          let i = []
          switch (e) {
            case o.NotificationId.CustomViewsLoaded:
            case o.NotificationId.CustomViewSaved:
              this.refreshCustomViewCache(t), n && i.push(this._customViews.get(n))
              break
            case o.NotificationId.CustomViewRemoved: {
              let e = new Map(this._customViews)
              this._customViews.clear(),
                t.customViewsList.map((t) => {
                  this._customViews.set(t.luid, new s.CustomViewImpl(t, this._registryId)), e.delete(t.luid)
                })
              for (let t of e.values()) i.push(t)
              break
            }
            case o.NotificationId.CustomViewSetDefault: {
              this.refreshCustomViewCache(t)
              const e = t.customViewsList.find((e) => e.isDefault)
              e && i.push(new s.CustomViewImpl(e, this._registryId))
              break
            }
          }
          return (this._currentCustomView = n ? this._customViews.get(n) : void 0), i
        }
        refreshCustomViewCache(e) {
          this._customViews.clear(),
            e.customViewsList.map((e) => {
              this._customViews.set(e.luid, new s.CustomViewImpl(e, this._registryId))
            })
        }
        revertAllAsync() {
          return s.ApiServiceRegistry.get(this._registryId).getService('ToolbarService').revertAllAsync()
        }
        getCustomViewsAsync() {
          return s.ApiServiceRegistry.get(this._registryId).getService('viz-service').getCustomViewsAsync()
        }
        showCustomViewAsync(e) {
          return (
            s.ApiServiceRegistry.get(this._registryId).getService('viz-service').showCustomViewAsync(e),
            new Promise((e, t) => {
              this._pendingShowCustomViewPromise = { resolve: e, reject: t }
            })
          )
        }
        removeCustomViewAsync(e) {
          return s.ApiServiceRegistry.get(this._registryId).getService('viz-service').removeCustomViewAsync(e)
        }
        saveCustomViewAsync(e) {
          return s.ApiServiceRegistry.get(this._registryId).getService('viz-service').saveCustomViewAsync(e)
        }
        setActiveCustomViewAsDefaultAsync() {
          return s.ApiServiceRegistry.get(this._registryId)
            .getService('viz-service')
            .setActiveCustomViewAsDefaultAsync()
        }
        initializeWorkbook(e) {
          e.publishedSheets.forEach((t, r) => {
            const n = s.SheetUtils.getSheetSizeFromSizeConstraints(t.sizeConstraint),
              i = t.name === e.currWorksheetName,
              o = s.SheetUtils.getSheetTypeEnum(t.sheetType),
              l = new s.SheetInfoImpl(t.name, o, n, r, i, !1, t.url)
            if ((this._publishedSheetsInfo.push(l), i))
              switch (l.sheetType) {
                case a.SheetType.Worksheet: {
                  const e = { worksheet: l.name }
                  this._activeSheetImpl = new s.WorksheetImpl(l, this._registryId, e, null, null)
                  break
                }
                case a.SheetType.Dashboard: {
                  const t = { sheetName: l.name, isDashboard: !0 }
                  this._activeSheetImpl = new s.DashboardImpl(l, e.dashboardZones, t, this._registryId, null)
                  break
                }
                case a.SheetType.Story:
                  if (!e.story)
                    throw new s.TableauError(
                      a.SharedErrorCodes.ServerError,
                      'Unable to receive story information from Tableau',
                    )
                  this._activeSheetImpl = new s.StoryImpl(l, e.story, e.publishedSheets, this._registryId)
                  break
                default:
                  throw new s.TableauError(a.SharedErrorCodes.ServerError, 'Invalid SheetType')
              }
          })
        }
        convertSheetIndexToSheetName(e) {
          if ('number' == typeof e) {
            const t = e
            if (this.publishedSheetsInfo[t]) return this.publishedSheetsInfo[t].name
            throw new s.TableauError(a.EmbeddingErrorCodes.IndexOutOfRange, `Index ${t} is out of range.`)
          }
          return e
        }
        validatePublishedSheet(e) {
          return void 0 !== this.publishedSheetsInfo.find((t) => t.name === e)
        }
        verifyDashboardSheets(e) {
          if (this._activeSheetImpl.sheetType === a.SheetType.Dashboard) {
            let t = this._activeSheetImpl,
              r = t.worksheetsImpl.findIndex((t) => t.name === e)
            if (-1 !== r) {
              if (t.worksheetsImpl[r].hidden)
                throw new s.TableauError(a.SharedErrorCodes.ServerError, 'Cannot activate hidden sheet')
              return
            }
          }
          throw new s.TableauError(a.EmbeddingErrorCodes.SheetNotInWorkbook, 'Sheet is not found in Workbook')
        }
      }
      t.EmbeddingWorkbookImpl = l
    },
    416: function (e, t, r) {
      var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, a) {
              function o(e) {
                try {
                  l(n.next(e))
                } catch (e) {
                  a(e)
                }
              }
              function s(e) {
                try {
                  l(n.throw(e))
                } catch (e) {
                  a(e)
                }
              }
              function l(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, s)
              }
              l((n = n.apply(e, t || [])).next())
            })
          },
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
            return (t.default = e), t
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const a = i(r(1750)),
        o = r(3069),
        s = r(4695),
        l = r(4007),
        u = r(6809),
        c = r(5538),
        d = r(7722),
        p = r(1912),
        h = r(9733),
        m = r(206),
        y = r(9767),
        g = r(7193),
        f = r(4104),
        b = r(9701)
      t.VizImpl = class {
        constructor(e, t, r, n) {
          if (
            ((this._viz = e),
            (this._iframe = t),
            (this._frameUrl = r),
            (this._embeddingId = n),
            (this._automaticUpdatesArePaused = !1),
            (this._resizeEventType = 'resize'),
            !this._iframe)
          )
            throw new l.TableauError(a.EmbeddingErrorCodes.InternalError, 'Iframe has not been created yet')
        }
        get workbookImpl() {
          return this._workbookImpl
        }
        get iframe() {
          return this._iframe
        }
        get embeddingId() {
          return this._embeddingId
        }
        get exportScenariosForPdfAndPowerPoint() {
          return {
            currentSheetName: this._workbookImpl.activeSheet.name,
            exportableSheetNamesFromDashboard: this.exportableSheetNamesFromDashboard,
            exportableSheetNamesFromWorkbook: this.exportableSheetNamesFromWorkbook,
          }
        }
        get exportableSheetNamesFromDashboard() {
          const e = this._workbookImpl.activeSheet
          return e && e.sheetType === a.SheetType.Dashboard ? e.getWorksheetNamesFromZones() : []
        }
        get exportableSheetNamesFromWorkbook() {
          const e = []
          if (this._workbookImpl) for (const t of this._workbookImpl.publishedSheetsInfo) e.push(t.name)
          return e
        }
        get automaticUpdatesArePaused() {
          return this._automaticUpdatesArePaused
        }
        set automaticUpdatesArePaused(e) {
          this._automaticUpdatesArePaused = e
        }
        getVisualIdForSheetName(e) {
          var t, r, n
          const i = this._workbookImpl.activeSheet
          switch (i.sheetType) {
            case a.SheetType.Worksheet:
              if (i.name === e) return i.visualId
              break
            case a.SheetType.Dashboard: {
              const t = i
              for (const r of t.getWorksheetNamesFromZones()) if (r === e) return { worksheet: r, dashboard: t.name }
              break
            }
            case a.SheetType.Story: {
              const o = i,
                s = null === (t = o.activeStoryPoint) || void 0 === t ? void 0 : t.containedSheet
              if (s && s.sheetType === a.SheetType.Worksheet && s.name === e) {
                const e = Object.assign({}, s.visualId)
                return (
                  (e.dashboard = e.worksheet),
                  (e.storyboard = o.name),
                  (e.storyPointID = null === (r = o.activeStoryPoint) || void 0 === r ? void 0 : r.storyPointId),
                  e
                )
              }
              if (s && s.sheetType === a.SheetType.Dashboard) {
                const t = s
                for (const r of t.getWorksheetNamesFromZones())
                  if (r === e)
                    return {
                      worksheet: r,
                      dashboard: t.name,
                      storyboard: o.name,
                      storyPointID: null === (n = o.activeStoryPoint) || void 0 === n ? void 0 : n.storyPointId,
                    }
              }
              break
            }
            default:
              throw new l.TableauError(a.SharedErrorCodes.ServerError, 'Invalid SheetType')
          }
          throw new l.TableauError(
            a.SharedErrorCodes.InvalidParameter,
            'sheetName parameter must belong to a worksheet within the current view',
          )
        }
        get exportableWorksheetNames() {
          var e
          const t = this._workbookImpl.activeSheet
          switch (t.sheetType) {
            case a.SheetType.Worksheet:
              return [t.name]
            case a.SheetType.Dashboard:
              return t.getWorksheetNamesFromZones()
            case a.SheetType.Story: {
              const r = null === (e = t.activeStoryPoint) || void 0 === e ? void 0 : e.containedSheet
              if (r && r.sheetType === a.SheetType.Worksheet) return [r.name]
              if (r && r.sheetType === a.SheetType.Dashboard) return r.getWorksheetNamesFromZones()
              break
            }
          }
          return []
        }
        initializeViz() {
          const e = this._iframe.contentWindow
          if (!e) throw new l.TableauError(a.EmbeddingErrorCodes.InternalError, 'Iframe has not been created yet')
          try {
            ;(this._messenger = new s.CrossFrameMessenger(window, e, this._frameUrl.origin)),
              (this._dispatcher = new l.CrossFrameDispatcher(this._messenger)),
              g.registerInitializationEmbeddingServices(this._dispatcher, this.embeddingId),
              f.registerAuthServices(this._dispatcher, this.embeddingId)
            const t = l.ApiServiceRegistry.get(this.embeddingId).getService('initialization-service'),
              r = t.registerHandler(
                s.NotificationId.FirstVizSizeKnown,
                () => !0,
                (e) => {
                  this.handleVizSizeKnownEvent(e), r()
                },
              ),
              n = t.registerHandler(
                s.NotificationId.VizInteractive,
                () => !0,
                (e) => {
                  this.handleVizInteractiveEvent(e), n()
                },
              )
            t.registerHandler(
              s.NotificationId.ReadyToReceiveAuthToken,
              () => !0,
              () => {
                this._viz.dispatchEvent(new CustomEvent(a.EmbeddingTableauEventType.ReadyToReceiveAuthToken, {}))
              },
            ),
              t.registerHandler(
                s.NotificationId.ToolbarStateChanged,
                () => !0,
                (e) => this.handleToolbarStateEvent(e),
              ),
              t.registerHandler(
                s.NotificationId.TabSwitched,
                () => !0,
                (e) => this.handleTabSwitch(e),
              ),
              t.registerHandler(
                s.NotificationId.CustomViewsLoaded,
                () => !0,
                (e) => this.handleCustomViews(e),
              ),
              t.registerHandler(
                s.NotificationId.CustomViewRemoved,
                () => !0,
                (e) => this.handleCustomViewRemoved(e),
              ),
              t.registerHandler(
                s.NotificationId.CustomViewSaved,
                () => !0,
                (e) => this.handleCustomViewSaved(e),
              ),
              t.registerHandler(
                s.NotificationId.CustomViewSetDefault,
                () => !0,
                (e) => this.handleCustomViewSetDefault(e),
              ),
              this._messenger.startListening()
          } catch (e) {
            throw new l.TableauError(a.EmbeddingErrorCodes.InternalError, 'Unexpected error during initialization.')
          }
        }
        dispose() {
          this._messenger && this._messenger.stopListening(), this.removeWindowResizeHandler()
        }
        getCurrentSrcAsync() {
          return l.ApiServiceRegistry.get(this.embeddingId).getService('viz-service').getCurrentSrcAsync()
        }
        revertAllAsync() {
          return l.ApiServiceRegistry.get(this.embeddingId).getService('ToolbarService').revertAllAsync()
        }
        redoAsync() {
          return l.ApiServiceRegistry.get(this.embeddingId).getService('ToolbarService').redoAsync()
        }
        undoAsync() {
          return l.ApiServiceRegistry.get(this.embeddingId).getService('ToolbarService').undoAsync()
        }
        refreshDataAsync() {
          return l.ApiServiceRegistry.get(this.embeddingId).getService('data-source-service').refreshAsync()
        }
        pauseAutomaticUpdatesAsync() {
          return this._automaticUpdatesArePaused ? Promise.resolve() : this.setAutoUpdateAsync(!1)
        }
        resumeAutomaticUpdatesAsync() {
          return this._automaticUpdatesArePaused ? this.setAutoUpdateAsync(!0) : Promise.resolve()
        }
        toggleAutomaticUpdatesAsync() {
          return this.setAutoUpdateAsync(this._automaticUpdatesArePaused)
        }
        exportImageAsync() {
          return l.ApiServiceRegistry.get(this.embeddingId).getService('ToolbarService').exportImageAsync()
        }
        exportCrosstabAsync(e, t) {
          return n(this, void 0, void 0, function* () {
            const r = l.ApiServiceRegistry.get(this.embeddingId).getService('export-service')
            yield r.exportCrosstabAsync(e, t, this.exportableWorksheetNames, this._workbookImpl.activeSheet.sheetType)
          })
        }
        exportDataAsync(e, t = l.ExportHelpers.DefaultDataOptions) {
          return l.ApiServiceRegistry.get(this.embeddingId)
            .getService('export-service')
            .exportDataAsync(this.getVisualIdForSheetName(e), t)
        }
        exportPowerPointAsync(e = []) {
          return n(this, void 0, void 0, function* () {
            const t = l.ApiServiceRegistry.get(this.embeddingId).getService('export-service'),
              r = this.exportScenariosForPdfAndPowerPoint
            0 === e.length && e.push(r.currentSheetName), yield t.exportPowerPointAsync(e, r)
          })
        }
        exportPDFAsync(e = [], t = l.ExportHelpers.DefaultPDFOptions) {
          return n(this, void 0, void 0, function* () {
            const r = l.ApiServiceRegistry.get(this.embeddingId).getService('export-service'),
              n = this.exportScenariosForPdfAndPowerPoint
            0 === e.length && e.push(n.currentSheetName), yield r.exportPDFAsync(e, t, n)
          })
        }
        displayDialogAsync(e) {
          const t = l.ApiServiceRegistry.get(this.embeddingId).getService('ToolbarService')
          switch (e) {
            case o.TableauDialogType.ExportWorkbook:
              if (!this.workbookImpl.canDownloadWorkbook)
                throw new l.TableauError(
                  a.EmbeddingErrorCodes.DownloadWorkbookNotAllowed,
                  'Download workbook is not allowed',
                )
              return t.displayDownloadWorkbookDialogAsync()
            case o.TableauDialogType.ExportPDF:
              return t.displayExportPdfDialogAsync()
            case o.TableauDialogType.ExportPowerPoint:
              return t.displayExportPowerpointDialogAsync()
            case o.TableauDialogType.ExportData:
              return t.displayExportDataDialogAsync()
            case o.TableauDialogType.ExportCrossTab:
              return t.displayExportCrosstabDialogAsync()
            case o.TableauDialogType.Share:
              return t.displayShareDialogAsync()
            default:
              throw new l.TableauError(a.EmbeddingErrorCodes.UnknownDialogType, 'Unknown dialog type')
          }
        }
        setAuthToken(e) {
          l.ApiServiceRegistry.get(this.embeddingId).getService('authentication').setAuthToken(e)
        }
        setAutoUpdateAsync(e) {
          return l.ApiServiceRegistry.get(this.embeddingId)
            .getService('ToolbarService')
            .setAutoUpdateAsync(e)
            .then(() => {
              this._automaticUpdatesArePaused = !e
            })
        }
        isVersionCompatible(e) {
          return (
            !!e &&
            (s.VersionLessThan(s.INTERNAL_CONTRACT_VERSION, e) || s.VersionEqualTo(s.INTERNAL_CONTRACT_VERSION, e))
          )
        }
        updateIframeTitle(e) {
          this._iframe.setAttribute(
            'title',
            u.getLocalizedTitle(navigator.language) + ': ' + e.workbookName + ': ' + e.currWorksheetName,
          )
        }
        handleVizInteractiveEvent(e) {
          if (!this._viz.disableVersionCheck && !this.isVersionCompatible(e.platformVersion))
            throw (
              (this._messenger.stopListening(),
              new l.TableauError(
                a.EmbeddingErrorCodes.IncompatibleVersionError,
                'The version of the Embedding library is not compatible with the version of Tableau. The visualization will load, but the Embedding API methods and events are not available.',
              ))
            )
          this.updateIframeTitle(e),
            l.registerAllSharedServices(this._dispatcher, this.embeddingId),
            g.registerAllEmbeddingServices(this._dispatcher, this.embeddingId),
            this._viz.initializeEvents(),
            (this._workbookImpl = new h.EmbeddingWorkbookImpl(e, this.embeddingId))
          let t = []
          this._customViewsTemp &&
            (t = this._workbookImpl.processCustomViews(s.NotificationId.CustomViewsLoaded, this._customViewsTemp)),
            this._viz.dispatchEvent(new CustomEvent(a.EmbeddingTableauEventType.FirstInteractive)),
            this._customViewsTemp &&
              (this.sendCustomViewEvents(a.EmbeddingTableauEventType.CustomViewLoaded, t),
              (this._customViewsTemp = null))
        }
        handleVizSizeKnownEvent(e) {
          const t = l.SheetUtils.getSheetSizeFromSizeConstraints(e.sheetSize)
          this._vizSize = new y.VizSize(t, e.chromeHeight)
          const r = new c.FirstVizSizeKnownEvent(this._vizSize)
          this._viz.dispatchEvent(new CustomEvent(a.EmbeddingTableauEventType.FirstVizSizeKnown, { detail: r })),
            this._viz.fixedSize || (this.refreshSize(), this.addWindowResizeHandler())
        }
        refreshSize() {
          const { height: e, width: t } = this.calculateLayoutSize()
          e !== this._vizSize.chromeHeight &&
            ((this._iframe.style.height = e + 'px'), (this._iframe.style.width = t + 'px'))
        }
        calculateLayoutSize() {
          const e = this._viz.parentElement
              ? b.HtmlElementHelpers.getContentSize(this._viz.parentElement)
              : { height: 0, width: 0 },
            { chromeHeight: t, sheetSize: r } = this._vizSize
          let n = 0,
            i = 0
          const o = r.minSize || { height: 0, width: 0 },
            s = r.maxSize || { height: 0, width: 0 }
          if (r.behavior === a.SheetSizeBehavior.Exactly) (n = s.width), (i = s.height + t)
          else {
            let u, c, d, p
            switch (r.behavior) {
              case a.SheetSizeBehavior.Range:
                ;(u = o.width),
                  (c = s.width),
                  (d = o.height + t),
                  (p = s.height + t),
                  (n = Math.max(u, Math.min(c, e.width))),
                  (i = Math.max(d, Math.min(p, e.height)))
                break
              case a.SheetSizeBehavior.AtLeast:
                ;(u = o.width), (d = o.height + t), (n = Math.max(u, e.width)), (i = Math.max(d, e.height))
                break
              case a.SheetSizeBehavior.AtMost:
                ;(c = s.width), (p = s.height + t), (n = Math.min(c, e.width)), (i = Math.min(p, e.height))
                break
              case a.SheetSizeBehavior.Automatic:
                ;(n = e.width), (i = Math.max(e.height, t))
                break
              default:
                throw new l.TableauError(
                  a.EmbeddingErrorCodes.InvalidSizeBehavior,
                  'Unknown SheetSizeBehavior for viz: ' + r.behavior,
                )
            }
          }
          return { height: i, width: n }
        }
        removeWindowResizeHandler() {
          this._windowResizeHandler && window.removeEventListener(this._resizeEventType, this._windowResizeHandler)
        }
        addWindowResizeHandler() {
          this._windowResizeHandler ||
            ((this._windowResizeHandler = this.refreshSize.bind(this)),
            window.addEventListener(this._resizeEventType, this._windowResizeHandler))
        }
        handleToolbarStateEvent(e) {
          const t = new p.ToolbarStateChangedEvent(e.toolbarState.canRedo, e.toolbarState.canUndo)
          this._viz.dispatchEvent(new CustomEvent(a.EmbeddingTableauEventType.ToolbarStateChanged, { detail: t }))
        }
        handleTabSwitch(e) {
          if (!this._workbookImpl) return
          if (!e.oldSheetName) return
          this.updateIframeTitle(e)
          const t = this._workbookImpl.pendingTabSwitchPromise
          this._workbookImpl.updateExistingActiveSheetReferences(e.currWorksheetName),
            (this._workbookImpl = new h.EmbeddingWorkbookImpl(e, this.embeddingId)),
            t && t.resolve(this._workbookImpl)
          const r = new d.TabSwitchedEvent(e.oldSheetName, e.currWorksheetName)
          this._viz.dispatchEvent(new CustomEvent(a.EmbeddingTableauEventType.TabSwitched, { detail: r }))
        }
        handleCustomViews(e) {
          if (this._workbookImpl) {
            const t = this._workbookImpl.processCustomViews(s.NotificationId.CustomViewsLoaded, e),
              r = this._workbookImpl.pendingShowCustomViewPromise
            r &&
              (t[0] ? r.resolve(t[0]) : r.reject('No custom view.'),
              this._workbookImpl.clearPendingShowCustomViewPromise()),
              this.sendCustomViewEvents(a.EmbeddingTableauEventType.CustomViewLoaded, t)
          } else this._customViewsTemp = e
        }
        handleCustomViewRemoved(e) {
          const t = this._workbookImpl.processCustomViews(s.NotificationId.CustomViewRemoved, e)
          this.sendCustomViewEvents(a.EmbeddingTableauEventType.CustomViewRemoved, t)
        }
        handleCustomViewSaved(e) {
          const t = this._workbookImpl.processCustomViews(s.NotificationId.CustomViewSaved, e)
          this.sendCustomViewEvents(a.EmbeddingTableauEventType.CustomViewSaved, t)
        }
        handleCustomViewSetDefault(e) {
          const t = this._workbookImpl.processCustomViews(s.NotificationId.CustomViewSetDefault, e)
          this.sendCustomViewEvents(a.EmbeddingTableauEventType.CustomViewSetDefault, t)
        }
        sendCustomViewEvents(e, t) {
          for (let r of t)
            if (r) {
              const t = { customView: new m.CustomView(r, this._workbookImpl) }
              this._viz.dispatchEvent(new CustomEvent(e, { detail: t }))
            }
        }
      }
    },
    3126: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = n(r(1750)),
        a = r(4007),
        o = r(1799),
        s = r(8279)
      t.AuthoringWorkbook = class {
        constructor(e, t) {
          ;(this._workbookImpl = e), (this._registryId = t)
        }
        get activeSheet() {
          if (this._workbookImpl.activeSheet.sheetType === i.SheetType.Worksheet) {
            const e = new o.AuthoringWorksheetImpl(this._registryId)
            return new s.AuthoringWorksheet(e)
          }
          throw new a.TableauError(
            i.EmbeddingErrorCodes.InvalidSheetType,
            'Worksheet type not yet supported in Authoring',
          )
        }
      }
    },
    8279: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.AuthoringWorksheet = class {
          constructor(e) {
            this._authoringWorksheetImpl = e
          }
          getAbstractQueryWithDataModelAsync() {
            return this._authoringWorksheetImpl.getAbstractQueryWithDataModel()
          }
          getVizStateWithDataModelAsync() {
            return this._authoringWorksheetImpl.getVizStateWithDataModel()
          }
          setVizStateWithDataModelAsync(e) {
            return this._authoringWorksheetImpl.setVizStateWithDataModel(e)
          }
        })
    },
    206: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(6451)
      class i {
        constructor(e, t) {
          ;(this._customViewImpl = e), (this._workbookImpl = t)
        }
        get name() {
          return this._customViewImpl.name
        }
        set name(e) {
          this._customViewImpl.name = e
        }
        get shared() {
          return this._customViewImpl.shared
        }
        set shared(e) {
          this._customViewImpl.shared = e
        }
        get default() {
          return this._customViewImpl.isDefault
        }
        set default(e) {
          this._customViewImpl.isDefault = e
        }
        get ownerName() {
          return this._customViewImpl.ownerName
        }
        get url() {
          return this._customViewImpl.url
        }
        get workbook() {
          return new n.Workbook(this._workbookImpl)
        }
        saveAsync() {
          return this._customViewImpl.saveAsync().then((e) => new i(e, this._workbookImpl))
        }
      }
      t.CustomView = i
    },
    1262: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(6397),
        i = r(7996),
        a = r(1970),
        o = r(5334)
      class s extends i.Sheet {
        constructor(e, t) {
          super(e, t), (this._dashboardImpl = e), e.initializeWithPublicInterfaces()
        }
        get objects() {
          return this._dashboardImpl.objects.map((e) => new n.DashboardObject(e, this._workbookImpl))
        }
        get worksheets() {
          return this._dashboardImpl.worksheetsImpl.map((e) => new o.Worksheet(e, this._workbookImpl))
        }
        get parentStoryPoint() {
          return null == this._dashboardImpl.parentStoryPoint
            ? null
            : new a.StoryPoint(this._dashboardImpl.parentStoryPoint, this._workbookImpl)
        }
        getFiltersAsync() {
          return this._dashboardImpl.getFiltersAsync()
        }
        applyFilterAsync(e, t, r, n) {
          return this._dashboardImpl.applyFilterAsync(e, t, r, n)
        }
      }
      t.Dashboard = s
    },
    6397: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1262),
        i = r(5334)
      t.DashboardObject = class {
        constructor(e, t) {
          ;(this._dashboardObjectImpl = e), (this._workbookImpl = t)
        }
        get dashboard() {
          return new n.Dashboard(this._dashboardObjectImpl.dashboardImpl, this._workbookImpl)
        }
        get type() {
          return this._dashboardObjectImpl.type
        }
        get position() {
          return this._dashboardObjectImpl.position
        }
        get size() {
          return this._dashboardObjectImpl.size
        }
        get worksheet() {
          if (this._dashboardObjectImpl.worksheetImpl)
            return new i.Worksheet(this._dashboardObjectImpl.worksheetImpl, this._workbookImpl)
        }
        get name() {
          return this._dashboardObjectImpl.name
        }
        get isFloating() {
          return this._dashboardObjectImpl.isFloating
        }
        get isVisible() {
          return this._dashboardObjectImpl.isVisible
        }
        get id() {
          return this._dashboardObjectImpl.id
        }
      }
    },
    5740: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1750),
        i = r(4695),
        a = r(4007),
        o = r(2848)
      t.createAskDataUrl = function (e, t, r, l) {
        const u = e.split('?')[0]
        let c
        try {
          ;(c = new URL(u)), o.validateUrl(c)
        } catch (e) {
          throw new a.TableauError(n.EmbeddingErrorCodes.InvalidUrl, e.message)
        }
        const d = (function (e, t) {
            const r = new Map(),
              n = `${i.INTERNAL_CONTRACT_VERSION.major}.${i.INTERNAL_CONTRACT_VERSION.minor}.${i.INTERNAL_CONTRACT_VERSION.fix}`
            r.set(i.AskDataOptionNames.ApiInternalVersion, n)
            const o = a.ApiVersion.Instance.formattedValue
            return (
              r.set(i.AskDataOptionNames.ApiExternalVersion, o),
              r.set(i.AskDataOptionNames.ApiID, `embhost${t}`),
              r.set(i.AskDataOptionNames.AskDataWebComponent, 'true'),
              r
            )
          })(0, r),
          p = new s(c).appendDefaultParameters(d).appendUserOptions(t).appendCustomParams(l)
        return t.iframeAuth && p.setToken(t.token), p.build()
      }
      class s extends o.EmbeddingUrlBuilder {
        constructor(e) {
          super(), (this._url = e), (this._optionNames = i.AskDataOptionNames)
        }
        sanitizeParameterValue(e, t) {
          return this.sanitizeValue(t)
        }
      }
      t.EmbeddingAskDataUrlBuilder = s
    },
    7726: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1750),
        i = r(4695),
        a = r(4007),
        o = r(2848)
      t.createPulseUrl = function (e, t, r) {
        const l = e.split('?')[0]
        let u
        try {
          ;(u = new URL(l)), o.validateUrl(u)
        } catch (e) {
          throw new a.TableauError(n.EmbeddingErrorCodes.InvalidUrl, e.message)
        }
        const c = (function (e) {
          const t = new Map(),
            r = `${i.INTERNAL_CONTRACT_VERSION.major}.${i.INTERNAL_CONTRACT_VERSION.minor}.${i.INTERNAL_CONTRACT_VERSION.fix}`
          t.set(i.PulseOptionNames.ApiInternalVersion, r), t.set(i.PulseOptionNames.embed, 'y')
          const n = a.ApiVersion.Instance.formattedValue
          return t.set(i.PulseOptionNames.ApiExternalVersion, n), t.set(i.PulseOptionNames.PulseWebComponent, 'true'), t
        })()
        return new s(u).appendDefaultParameters(c).appendUserOptions(t).appendCustomParams(r).build()
      }
      class s extends o.EmbeddingUrlBuilder {
        constructor(e) {
          super(), (this._url = e), (this._optionNames = i.PulseOptionNames)
        }
        sanitizeParameterValue(e, t) {
          return this.sanitizeValue(t)
        }
      }
      t.EmbeddingPulseUrlBuilder = s
    },
    2848: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.SANITIZED_VALUES = { YES_VALUE: 'y', NO_VALUE: 'n' })
      const r = new Set(['https:', 'http:'])
      function n(e) {
        let t = e.toString()
        return (t = t.replace('/#/site/', '/t/').replace('/#/', '/')), new URL(t)
      }
      ;(t.EmbeddingUrlBuilder = class {
        build() {
          return this._url
        }
        appendDefaultParameters(e) {
          for (const t of e.keys()) {
            const r = e.get(t)
            r && !this._url.searchParams.has(t) && this._url.searchParams.append(t, r)
          }
          return this
        }
        appendUserOptions(e) {
          for (const t of Object.keys(e)) {
            if (null === e[t] || void 0 === e[t]) continue
            const r = this._optionNames[t]
            if (!r) continue
            const n = this.sanitizeParameterValue(r, e[t])
            this._url.searchParams.append(r, n)
          }
          return this
        }
        appendCustomParams(e) {
          for (const t of e) this._url.searchParams.set(t.name, t.value)
          return this
        }
        setToken(e) {
          if (this._token) throw new Error(`The token has already been set to ${this._token}`)
          if (!e) return this
          this._token = e
          const t = this._url.toString().substring(this._url.origin.length)
          return (
            (this._url = new URL(`${this._url.origin}/vizportal/api/web/v1/auth/embed/target`)),
            this._url.searchParams.append('token', e),
            this._url.searchParams.append('target', t),
            this
          )
        }
        sanitizeValue(e) {
          const r = String(e)
          switch (r) {
            case 'true':
              return t.SANITIZED_VALUES.YES_VALUE
            case 'false':
              return t.SANITIZED_VALUES.NO_VALUE
            default:
              return r
          }
        }
      }),
        (t.validateUrl = function (e) {
          !(function (e) {
            const t = e.protocol
            if (!r.has(t))
              throw new Error(
                `Invalid protocol in URL '${e}'. The protocols supported are ${Array.from(r).join(', ')}.`,
              )
          })(e)
        }),
        (t.getSiteIdForPulse = function (e) {
          const t = n(new URL(e.toString()))
            .pathname.split('/')
            .filter((e) => e)
          return 0 === t.length ? '' : 'site' === t[0] ? t[1] : 'pulse' === t[0] && 'site' === t[1] ? t[2] : ''
        }),
        (t.getSiteId = function (e) {
          const t = n(new URL(e.toString()))
            .pathname.split('/')
            .filter((e) => e)
          return 0 === t.length || 't' !== t[0] || t.length < 2 ? '' : t[1]
        }),
        (t.canonicalizeVizPortalRoutingHashes = n)
    },
    9429: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1750),
        i = r(4695),
        a = r(4007),
        o = r(2848),
        s = r(909)
      var l
      !(function (e) {
        ;(e[(e.Viewing = 0)] = 'Viewing'), (e[(e.Authoring = 1)] = 'Authoring')
      })((l = t.EmbeddingUrlMode || (t.EmbeddingUrlMode = {})))
      const u = new Map([
        [l.Viewing, s.VizUrlMode.Viewing],
        [l.Authoring, s.VizUrlMode.Authoring],
      ])
      class c extends o.EmbeddingUrlBuilder {
        constructor(e) {
          super(), (this._url = e), (this._optionNames = i.VizOptionNames)
        }
        appendFilters(e) {
          for (const t of e) this._url.searchParams.append(t.field, t.value)
          return this
        }
        appendParams(e) {
          for (const t of e) this._url.searchParams.append(t.name, t.value)
          return this
        }
        sanitizeParameterValue(e, t) {
          let r
          switch (e) {
            case i.VizOptionNames.hideTabs:
              r = this.sanitizeValue(!t)
              break
            case i.VizOptionNames.toolbar:
              r = this.sanitizeValue(t !== n.Toolbar.Hidden && t)
              break
            default:
              r = this.sanitizeValue(t)
          }
          return r
        }
      }
      ;(t.EmbeddingVizUrlBuilder = c),
        (t.createVizUrl = function (e, t, r, l, d, p, h) {
          if (!e)
            throw new a.TableauError(
              n.EmbeddingErrorCodes.InternalError,
              'We should not have attempted to render the component without a src',
            )
          const m = u.get(t)
          if (!m) throw new a.TableauError(n.EmbeddingErrorCodes.InternalError, `'${t}' is not yet supported.`)
          const y = e.split('?')[0]
          let g
          try {
            ;(g = new URL(y)), o.validateUrl(g)
          } catch (e) {
            throw new a.TableauError(n.EmbeddingErrorCodes.InvalidUrl, e.message)
          }
          try {
            g = s.VizUrl.create(y).withMode(m).toURL()
          } catch (e) {}
          const f = (function (e, t) {
              const r = new Map()
              r.set(i.VizOptionNames.Embed, o.SANITIZED_VALUES.YES_VALUE),
                r.set(i.VizOptionNames.ApiID, `embhost${t}`),
                'public.tableau.com' === e.hostname && r.set(i.VizOptionNames.ShowVizHome, o.SANITIZED_VALUES.NO_VALUE)
              const n = `${i.INTERNAL_CONTRACT_VERSION.major}.${i.INTERNAL_CONTRACT_VERSION.minor}.${i.INTERNAL_CONTRACT_VERSION.fix}`
              r.set(i.VizOptionNames.ApiInternalVersion, n)
              const s = a.ApiVersion.Instance.formattedValue
              return (
                r.set(i.VizOptionNames.ApiExternalVersion, s),
                r.set(i.VizOptionNames.NavType, '0'),
                r.set(i.VizOptionNames.NavSrc, 'Opt'),
                r
              )
            })(g, l),
            b = new c(g)
              .appendDefaultParameters(f)
              .appendUserOptions(r)
              .appendFilters(d)
              .appendParams(p)
              .appendCustomParams(h)
          return r.iframeAuth && b.setToken(r.token), b.build()
        })
    },
    1062: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Parameter = class {
          constructor(e) {
            this.parameterImpl = e
          }
          get name() {
            return this.parameterImpl.name
          }
          get currentValue() {
            return this.parameterImpl.currentValue
          }
          get dataType() {
            return this.parameterImpl.dataType
          }
          get allowableValues() {
            return this.parameterImpl.allowableValues
          }
          get id() {
            return this.parameterImpl.id
          }
          changeValueAsync(e) {
            return this.parameterImpl.changeValueAsync(e)
          }
        })
    },
    7996: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = n(r(1750)),
        a = r(4007),
        o = r(6451)
      t.Sheet = class {
        constructor(e, t) {
          ;(this._sheetImpl = e), (this._workbookImpl = t)
        }
        get isHidden() {
          return this._sheetImpl.hidden
        }
        get isActive() {
          return this._sheetImpl.active
        }
        get name() {
          return this._sheetImpl.name
        }
        get sheetType() {
          return this._sheetImpl.sheetType
        }
        get size() {
          if (a.SheetUtils.isValidSheetSize(this._sheetImpl.size)) return this._sheetImpl.size
          throw new a.TableauError(i.EmbeddingErrorCodes.NotImplemented, 'Not implemented')
        }
        get url() {
          if (this.isHidden)
            throw new a.TableauError(i.EmbeddingErrorCodes.NoUrlForHiddenWorksheet, 'No URL for hidden worksheet')
          return this._sheetImpl.url
        }
        get index() {
          return this._sheetImpl.index
        }
        get workbook() {
          return new o.Workbook(this._workbookImpl)
        }
        changeSizeAsync(e) {
          return this._sheetImpl.changeSizeAsync(e)
        }
      }
    },
    8826: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = n(r(1750)),
        a = r(4007),
        o = r(6451)
      t.SheetInfo = class {
        constructor(e, t) {
          ;(this._sheetInfoImpl = e), (this._workbookImpl = t)
        }
        get name() {
          return this._sheetInfoImpl.name
        }
        get sheetType() {
          return this._sheetInfoImpl.sheetType
        }
        get index() {
          if (void 0 !== this._sheetInfoImpl.index) return this._sheetInfoImpl.index
          throw new a.TableauError(i.EmbeddingErrorCodes.ImplementationError, 'index not implemented')
        }
        get isActive() {
          return !!this._sheetInfoImpl.isActive && this._sheetInfoImpl.isActive
        }
        get isHidden() {
          return !!this._sheetInfoImpl.isHidden && this._sheetInfoImpl.isHidden
        }
        get workbook() {
          return new o.Workbook(this._workbookImpl)
        }
        get url() {
          return this._sheetInfoImpl.url ? this._sheetInfoImpl.url : ''
        }
        get size() {
          if (a.SheetUtils.isValidSheetSize(this._sheetInfoImpl.sheetSize)) return this._sheetInfoImpl.sheetSize
          throw new a.TableauError(i.EmbeddingErrorCodes.NotImplemented, 'Not implemented')
        }
      }
    },
    8894: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = n(r(1750)),
        a = r(4007),
        o = r(7996),
        s = r(1970),
        l = r(3440)
      class u extends o.Sheet {
        constructor(e, t) {
          super(e, t), (this._storyImpl = e)
        }
        get activeStoryPoint() {
          if (!this._storyImpl.activeStoryPoint)
            throw new a.TableauError(
              i.EmbeddingErrorCodes.ImplementationError,
              'Active story point has not been initialized',
            )
          return new s.StoryPoint(this._storyImpl.activeStoryPoint, this._workbookImpl)
        }
        get storyPointsInfo() {
          return this._storyImpl.storyPointsInfo.map((e) => new l.StoryPointInfo(e, this._workbookImpl))
        }
        activateNextStoryPointAsync() {
          return this._storyImpl.activateNextStoryPointAsync().then((e) => new s.StoryPoint(e, this._workbookImpl))
        }
        activatePreviousStoryPointAsync() {
          return this._storyImpl.activatePreviousStoryPointAsync().then((e) => new s.StoryPoint(e, this._workbookImpl))
        }
        activateStoryPointAsync(e) {
          return this._storyImpl.activateStoryPointAsync(e).then((e) => new s.StoryPoint(e, this._workbookImpl))
        }
        revertStoryPointAsync(e) {
          return this._storyImpl.revertStoryPointAsync(e).then((e) => new l.StoryPointInfo(e, this._workbookImpl))
        }
      }
      t.Story = u
    },
    1970: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = n(r(1750)),
        a = r(4007),
        o = r(1262),
        s = r(8894),
        l = r(5334)
      t.StoryPoint = class {
        constructor(e, t) {
          ;(this._storyPointImpl = e), (this._workbookImpl = t)
        }
        get index() {
          return this._storyPointImpl.index
        }
        get caption() {
          return this._storyPointImpl.caption
        }
        get active() {
          return this._storyPointImpl.active
        }
        get updated() {
          return this._storyPointImpl.updated
        }
        get containedSheet() {
          const e = this._storyPointImpl.containedSheet
          if (e)
            switch (e.sheetType) {
              case i.SheetType.Worksheet:
                return new l.Worksheet(e, this._workbookImpl)
              case i.SheetType.Dashboard:
                return new o.Dashboard(e, this._workbookImpl)
              case i.SheetType.Story:
                throw new a.TableauError(
                  i.EmbeddingErrorCodes.ImplementationError,
                  'A story cannot contain another story',
                )
              default:
                throw new a.TableauError(
                  i.EmbeddingErrorCodes.ImplementationError,
                  'Unable to initialize contained sheet',
                )
            }
        }
        get parentStory() {
          return new s.Story(this._storyPointImpl.parentStory, this._workbookImpl)
        }
      }
    },
    3440: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(8894)
      t.StoryPointInfo = class {
        constructor(e, t) {
          ;(this._storyPointInfoImpl = e), (this._workbookImpl = t)
        }
        get index() {
          return this._storyPointInfoImpl.index
        }
        get caption() {
          return this._storyPointInfoImpl.caption
        }
        get active() {
          return this._storyPointInfoImpl.active
        }
        get updated() {
          return this._storyPointInfoImpl.updated
        }
        get parentStory() {
          return new n.Story(this._storyPointInfoImpl.parentStory, this._workbookImpl)
        }
      }
    },
    9767: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.VizSize = class {
          constructor(e, t) {
            ;(this._sheetSize = e), (this._chromeHeight = t)
          }
          get sheetSize() {
            return this._sheetSize
          }
          get chromeHeight() {
            return this._chromeHeight
          }
        })
    },
    909: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(2848)
      t.VizUrlMode = { Viewing: 'views', Authoring: 'authoring' }
      class i {
        constructor(e, t) {
          ;(this._url = e), (this._segments = t)
        }
        get mode() {
          return this._segments.mode
        }
        get siteId() {
          return this._segments.siteId
        }
        get workbookId() {
          return this._segments.workbookId
        }
        get sheetId() {
          return this._segments.sheetId
        }
        get customView() {
          return this._segments.customView
        }
        static create(e) {
          const t = n.canonicalizeVizPortalRoutingHashes(new URL(e.toString())),
            r = i._parsePathName(t.pathname)
          return (t.pathname = i._buildPathName(r)), new i(t, r)
        }
        toURL() {
          return new URL(this.toString())
        }
        toString() {
          return this._url.toString()
        }
        withMode(e) {
          if (this._segments.mode === e) return this
          const t = this._getSegmentsForMode(e)
          return this._makeVizUrlFromPathSegments(t)
        }
        withCustomView(e) {
          var t
          if (
            e.luid === (null === (t = this.customView) || void 0 === t ? void 0 : t.luid) &&
            e.name === this.customView.name
          )
            return this
          const r = this._getSegmentsForMode(this.mode)
          return (r.customView = e), this._makeVizUrlFromPathSegments(r)
        }
        withSheetId(e) {
          if (this.sheetId === e) return this
          const t = Object.assign(Object.assign({}, this._segments), { sheetId: e })
          return this._makeVizUrlFromPathSegments(t)
        }
        withWorkbookId(e) {
          if (this.workbookId === e) return this
          const t = Object.assign(Object.assign({}, this._segments), { workbookId: e })
          return this._makeVizUrlFromPathSegments(t)
        }
        _getSegmentsForMode(e) {
          return (
            e === t.VizUrlMode.Authoring && (this._segments.customView = void 0),
            Object.assign(Object.assign({}, this._segments), { mode: e })
          )
        }
        _makeVizUrlFromPathSegments(e) {
          const t = i._buildPathName(e),
            r = new URL(this._url.toString())
          return (r.pathname = t), new i(r, e)
        }
        static _parsePathName(e) {
          var r, n, i
          const a = e.split('/').filter((e) => e)
          if (0 === a.length) throw new Error('Invalid path name')
          let o
          if ('t' === a[0]) {
            if (a.length < 2) throw new Error(`Invalid site in path '${e}'`)
            ;(o = a[1]), a.splice(0, 2)
          }
          const s = a.shift()
          if (!s) throw new Error(`Missing mode in path '${e}'`)
          const l = s
          if (!Object.values(t.VizUrlMode).includes(l)) throw new Error(`Invalid Viz Url Mode '${s}' in path '${e}'`)
          if (0 === a.length) throw new Error(`Missing workbook/sheet name in path '${e}'`)
          const u = null != (r = a.shift()) ? r : '',
            c = a.shift()
          if (0 !== a.length && 2 !== a.length)
            throw new Error(`Invalid path name: unknown parts after sheet id: '${e}'`)
          let d
          return (
            2 === a.length && (d = { luid: null != (n = a.shift()) ? n : '', name: null != (i = a.shift()) ? i : '' }),
            { mode: l, siteId: o, workbookId: u, sheetId: c, customView: d }
          )
        }
        static _buildPathName(e) {
          const r = []
          return (
            e.siteId && (r.push('t'), r.push(e.siteId)),
            r.push(e.mode),
            e.workbookId && r.push(e.workbookId),
            e.sheetId && r.push(e.sheetId),
            e.customView && e.mode === t.VizUrlMode.Viewing && (r.push(e.customView.luid), r.push(e.customView.name)),
            r.join('/')
          )
        }
      }
      t.VizUrl = i
    },
    6451: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      const i = n(r(1750)),
        a = r(4007),
        o = r(206),
        s = r(1262),
        l = r(1062),
        u = r(8826),
        c = r(8894),
        d = r(5334)
      t.Workbook = class {
        constructor(e) {
          this._workbookImpl = e
        }
        get activeSheet() {
          switch (this._workbookImpl.activeSheet.sheetType) {
            case i.SheetType.Worksheet:
              return new d.Worksheet(this._workbookImpl.activeSheet, this._workbookImpl)
            case i.SheetType.Dashboard:
              return new s.Dashboard(this._workbookImpl.activeSheet, this._workbookImpl)
            case i.SheetType.Story:
              return new c.Story(this._workbookImpl.activeSheet, this._workbookImpl)
            default:
              throw new a.TableauError(i.EmbeddingErrorCodes.ImplementationError, 'Unable to initialize ActiveSheet')
          }
        }
        get publishedSheetsInfo() {
          return this._workbookImpl.publishedSheetsInfo.map((e) => new u.SheetInfo(e, this._workbookImpl))
        }
        get name() {
          return this._workbookImpl.name
        }
        get activeCustomView() {
          return this._workbookImpl.activeCustomView
            ? new o.CustomView(this._workbookImpl.activeCustomView, this._workbookImpl)
            : void 0
        }
        activateSheetAsync(e) {
          return this._workbookImpl
            .activateSheetAsync(e)
            .then((e) => (this._workbookImpl !== e && (this._workbookImpl = e), this.activeSheet))
        }
        revertAllAsync() {
          return this._workbookImpl.revertAllAsync()
        }
        getCustomViewsAsync() {
          return this._workbookImpl
            .getCustomViewsAsync()
            .then((e) => e.map((e) => new o.CustomView(e, this._workbookImpl)))
        }
        showCustomViewAsync(e) {
          return this._workbookImpl.showCustomViewAsync(e).then((e) => new o.CustomView(e, this._workbookImpl))
        }
        removeCustomViewAsync(e) {
          return this._workbookImpl.removeCustomViewAsync(e).then((e) => new o.CustomView(e, this._workbookImpl))
        }
        saveCustomViewAsync(e) {
          return this._workbookImpl.saveCustomViewAsync(e).then((e) => new o.CustomView(e, this._workbookImpl))
        }
        setActiveCustomViewAsDefaultAsync() {
          return this._workbookImpl.setActiveCustomViewAsDefaultAsync()
        }
        getParametersAsync() {
          return this._workbookImpl.getParametersAsync().then((e) => e.map((e) => new l.Parameter(e)))
        }
        changeParameterValueAsync(e, t) {
          return this._workbookImpl.changeParameterValueAsync(e, t).then((t) => {
            if (t) return new l.Parameter(t)
            throw new a.TableauError(i.EmbeddingErrorCodes.InvalidParameter, `Invalid parameter:  ${e}`)
          })
        }
      }
    },
    5334: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1262),
        i = r(7996),
        a = r(1970)
      class o extends i.Sheet {
        constructor(e, t) {
          super(e, t), (this._worksheetImpl = e)
        }
        get parentDashboard() {
          return null == this._worksheetImpl.parentDashboard
            ? null
            : new n.Dashboard(this._worksheetImpl.parentDashboard, this._workbookImpl)
        }
        get parentStoryPoint() {
          return null == this._worksheetImpl.parentStoryPoint
            ? null
            : new a.StoryPoint(this._worksheetImpl.parentStoryPoint, this._workbookImpl)
        }
        getDataSourcesAsync() {
          return this._worksheetImpl.getDataSourcesAsync()
        }
        getSummaryDataAsync(e) {
          return this._worksheetImpl.getSummaryDataAsync(e)
        }
        getSummaryDataReaderAsync(e, t) {
          return this._worksheetImpl.getSummaryDataReaderAsync(e, t)
        }
        getSummaryColumnsInfoAsync() {
          return this._worksheetImpl.getSummaryColumnsInfoAsync()
        }
        getUnderlyingDataAsync(e) {
          return (
            console.warn(
              'Worksheet.getUnderlyingDataAsync is deprecated. Please use Worksheet.getUnderlyingTablesAsync and Worksheet.getUnderlyingTableDataAsync',
            ),
            this._worksheetImpl.getUnderlyingDataAsync(e)
          )
        }
        getUnderlyingTablesAsync() {
          return this._worksheetImpl.getUnderlyingTablesAsync()
        }
        getUnderlyingTableDataAsync(e, t) {
          return this._worksheetImpl.getUnderlyingTableDataAsync(e, t)
        }
        getUnderlyingTableDataReaderAsync(e, t, r) {
          return this._worksheetImpl.getUnderlyingTableDataReaderAsync(e, t, r)
        }
        getFiltersAsync() {
          return this._worksheetImpl.getFiltersAsync()
        }
        applyFilterAsync(e, t, r, n) {
          return this._worksheetImpl.applyFilterAsync(e, t, r, n)
        }
        applyRangeFilterAsync(e, t) {
          return this._worksheetImpl.applyRangeFilterAsync(e, t)
        }
        clearFilterAsync(e) {
          return this._worksheetImpl.clearFilterAsync(e)
        }
        applyRelativeDateFilterAsync(e, t) {
          return this._worksheetImpl.applyRelativeDateFilterAsync(e, t)
        }
        applyHierarchicalFilterAsync(e, t, r, n) {
          return this._worksheetImpl.applyHierarchicalFilterAsync(e, t, r, n)
        }
        clearSelectedMarksAsync() {
          return this._worksheetImpl.clearSelectedMarksAsync()
        }
        getSelectedMarksAsync() {
          return this._worksheetImpl.getSelectedMarksAsync()
        }
        annotateMarkAsync(e, t) {
          return this._worksheetImpl.annotateMarkAsync(e, t)
        }
        getAnnotationsAsync() {
          return this._worksheetImpl.getAnnotationsAsync()
        }
        removeAnnotationAsync(e) {
          return this._worksheetImpl.removeAnnotationAsync(e)
        }
        selectMarksByValueAsync(e, t) {
          return this._worksheetImpl.selectMarksByValueAsync(e, t)
        }
        appendContextMenuAsync(e, t) {
          return this._worksheetImpl.appendContextMenuAsync(e, t)
        }
        removeContextMenuAsync(e, t) {
          return this._worksheetImpl.removeContextMenuAsync(e, t)
        }
        executeContextMenuAsync(e, t) {
          return this._worksheetImpl.executeContextMenuAsync(e, t)
        }
        renameContextMenuAsync(e, t, r) {
          return this._worksheetImpl.renameContextMenuAsync(e, t, r)
        }
        getVisualSpecificationAsync() {
          return this._worksheetImpl.getVisualSpecificationAsync()
        }
      }
      t.Worksheet = o
    },
    1107: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(4695),
        i = r(4007)
      class a extends i.ServiceImplBase {
        get serviceName() {
          return 'authentication'
        }
        setAuthToken(e) {
          const t = { authToken: e }
          return this.execute(n.VerbId.Authenticate, t).then((e) => {})
        }
      }
      t.AuthServiceImpl = a
    },
    9241: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(1750),
        i = r(4695),
        a = r(4007)
      class o extends a.ServiceImplBase {
        get serviceName() {
          return 'EmbeddingVizApiService'
        }
        getEmbeddingVizStateWithDataModelAsync() {
          const e = i.VerbId.GetVizStateWithDataModel,
            t = { [i.ParameterId.FunctionName]: 'getVizStateWithDataModel' }
          return this.execute(e, t).then((e) => {
            const t = e.result
            return this.checkForErrorParameter(t), { vizStateWithDataModel: t[i.ParameterId.VizAPIStateWithDataModel] }
          })
        }
        checkForErrorParameter(e) {
          if (e[i.ParameterId.VizAPIStateWarningMsg])
            throw new a.TableauError(n.ErrorCodes.InternalError, e[i.ParameterId.VizAPIStateWarningMsg])
        }
        setEmbeddingVizStateWithDataModelAsync(e) {
          const t = i.VerbId.SetVizStateWithDataModel,
            r = {
              [i.ParameterId.FunctionName]: 'setVizStateWithDataModel',
              [i.ParameterId.VizAPIStateWithDataModel]: e.vizStateWithDataModel,
            }
          return this.execute(t, r).then((e) => {
            if (0 !== Object.keys(e.result).length) {
              const t = e.result
              throw new a.TableauError(n.ErrorCodes.InternalError, t)
            }
          })
        }
        getEmbeddingAbstractQueryAsync() {
          const e = i.VerbId.GetEmbeddingAbstractQueryWithDataModel,
            t = { [i.ParameterId.FunctionName]: 'getEmbeddingAbstractQuery' }
          return this.execute(e, t).then((e) => e.result)
        }
      }
      t.EmbeddingVizApiServiceImpl = o
    },
    8345: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(4007)
      class i extends n.NotificationServiceImplBase {
        get serviceName() {
          return 'initialization-service'
        }
      }
      t.InitializationServiceImpl = i
    },
    4450: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(4695),
        i = r(4007)
      class a extends i.ServiceImplBase {
        get serviceName() {
          return 'ToolbarService'
        }
        revertAllAsync() {
          const e = n.VerbId.RevertWorkbook,
            t = { [n.ParameterId.FunctionName]: 'revertAllAsync' }
          return this.execute(e, t).then((e) => {})
        }
        redoAsync() {
          const e = n.VerbId.Redo,
            t = { [n.ParameterId.FunctionName]: 'redoAsync' }
          return this.execute(e, t).then((e) => {})
        }
        undoAsync() {
          const e = n.VerbId.Undo,
            t = { [n.ParameterId.FunctionName]: 'undoAsync' }
          return this.execute(e, t).then((e) => {})
        }
        exportImageAsync() {
          const e = n.VerbId.ExportImage,
            t = { [n.ParameterId.FunctionName]: 'exportImageAsync' }
          return this.execute(e, t).then((e) => {})
        }
        setAutoUpdateAsync(e) {
          const t = n.VerbId.SetAutoUpdate,
            r = { [n.ParameterId.FunctionName]: 'setAutoUpdateAsync', [n.ParameterId.State]: e }
          return this.execute(t, r).then(() => {})
        }
        displayDownloadWorkbookDialogAsync() {
          const e = n.VerbId.DownloadWorkbook,
            t = { [n.ParameterId.FunctionName]: 'displayDialogAsync(Workbook)' }
          return this.execute(e, t).then((e) => {})
        }
        displayExportPdfDialogAsync() {
          const e = n.VerbId.ExportPdf,
            t = { [n.ParameterId.FunctionName]: 'displayDialogAsync(ExportPDF)' }
          return this.execute(e, t).then((e) => {})
        }
        displayExportPowerpointDialogAsync() {
          const e = n.VerbId.ExportPowerpoint,
            t = { [n.ParameterId.FunctionName]: 'displayDialogAsync(ExportPowerPoint)' }
          return this.execute(e, t).then((e) => {})
        }
        displayExportDataDialogAsync() {
          const e = n.VerbId.ExportData,
            t = { [n.ParameterId.FunctionName]: 'displayDialogAsync(ExportData)' }
          return this.execute(e, t).then((e) => {})
        }
        displayExportCrosstabDialogAsync() {
          const e = n.VerbId.ExportCrosstab,
            t = { [n.ParameterId.FunctionName]: 'displayDialogAsync(ExportCrossTab)' }
          return this.execute(e, t).then((e) => {})
        }
        displayShareDialogAsync() {
          const e = n.VerbId.Share,
            t = { [n.ParameterId.FunctionName]: 'displayDialogAsync(Share)' }
          return this.execute(e, t).then((e) => {})
        }
      }
      t.ToolbarServiceImpl = a
    },
    4104: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(4007),
        i = r(1107),
        a = r(9241),
        o = r(8345),
        s = r(4450)
      ;(t.registerAllEmbeddingServices = function (e, t) {
        const r = n.ApiServiceRegistry.get(t)
        r.registerService(new n.ClientInfoServiceImpl(e, t)),
          r.registerService(new a.EmbeddingVizApiServiceImpl(e, t)),
          r.registerService(new n.SizeServiceImpl(e, t)),
          r.registerService(new n.StoryActivationServiceImpl(e, t)),
          r.registerService(new s.ToolbarServiceImpl(e, t))
      }),
        (t.registerInitializationEmbeddingServices = function (e, t) {
          n.ApiServiceRegistry.get(t).registerService(new o.InitializationServiceImpl(e))
        }),
        (t.registerAuthServices = function (e, t) {
          n.ApiServiceRegistry.get(t).registerService(new i.AuthServiceImpl(e, t))
        })
    },
    7193: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4104)
      ;(t.registerAllEmbeddingServices = n.registerAllEmbeddingServices),
        (t.registerInitializationEmbeddingServices = n.registerInitializationEmbeddingServices)
    },
    9701: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      class r {}
      ;(t.HtmlElementHelpers = r),
        (r.getContentSize = (e) => {
          const t = window.getComputedStyle(e),
            r = parseInt(t.paddingLeft, 10) || 0,
            n = parseInt(t.paddingTop, 10) || 0,
            i = parseInt(t.paddingRight, 10) || 0,
            a = parseInt(t.paddingBottom, 10) || 0
          return { width: e.clientWidth - Math.round(r + i), height: e.clientHeight - Math.round(n + a) }
        })
    },
    5620: function (e, t) {
      var r =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, a) {
            function o(e) {
              try {
                l(n.next(e))
              } catch (e) {
                a(e)
              }
            }
            function s(e) {
              try {
                l(n.throw(e))
              } catch (e) {
                a(e)
              }
            }
            function l(e) {
              var t
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t)
                      })).then(o, s)
            }
            l((n = n.apply(e, t || [])).next())
          })
        }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.PromiseQueue = class {
          constructor() {
            ;(this.queue = []), (this.pending = 0), (this.concurrency = 1)
          }
          add(e) {
            return new Promise((t, n) => {
              this.queue.push(() =>
                r(this, void 0, void 0, function* () {
                  try {
                    const r = yield e()
                    t(r)
                  } catch (e) {
                    n(e)
                  } finally {
                    this.pending--, this.poll()
                  }
                }),
              )
            })
          }
          poll() {
            if (this.pending < this.concurrency && this.queue.length > 0) {
              const e = this.queue.shift()
              this.pending++, e()
            }
          }
          size() {
            return this.queue.length
          }
        })
    },
    3630: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(5620)
      class i {
        static authRequired(e, t) {
          if (!t) return !0
          try {
            const t = new URL(e)
            if (this.signedInOrigins.has(t.origin)) return !1
          } catch (e) {
            return !0
          }
          return !0
        }
        static updateSignedInOrigin(e, t) {
          if (t)
            try {
              const t = new URL(e)
              this.signedInOrigins.add(t.origin)
            } catch (e) {
              return
            }
        }
        static clearOrigin(e, t) {
          if (t && e)
            try {
              const t = new URL(e)
              this.signedInOrigins.delete(t.origin)
            } catch (e) {
              return
            }
        }
        static registerWebComponent(e) {
          const t = this.embeddingIndex
          return this.webComponents.set(t, e), this.embeddingIndex++, t
        }
        static unregisterWebComponent(e) {
          this.webComponents.delete(e)
        }
        static getWebComponents() {
          const e = new Map()
          return (
            this.webComponents.forEach((t, r) => {
              e.set(r, t)
            }),
            e
          )
        }
        static synchronizeRender(e) {
          const t = this.queue.add(e)
          return this.queue.poll(), t
        }
        static clear() {
          this.webComponents.clear()
        }
      }
      ;(t.WebComponentManager = i),
        (i.embeddingIndex = 0),
        (i.webComponents = new Map()),
        (i.queue = new n.PromiseQueue()),
        (i.signedInOrigins = new Set())
    },
    9654: (e, t, r) => {
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), n(r(2996))
      var i = r(3069)
      ;(t.ApiMenuType = i.ApiMenuType),
        (t.CrosstabFileFormat = i.CrosstabFileFormat),
        (t.DeviceType = i.DeviceType),
        (t.EmbeddingErrorCodes = i.EmbeddingErrorCodes),
        (t.EmbeddingTableauEventType = i.TableauEventType),
        (t.FileFormats = i.FileFormats),
        (t.PrintOrientation = i.PrintOrientation),
        (t.PrintPageSize = i.PrintPageSize),
        (t.PrintScaling = i.PrintScaling),
        (t.SheetSizeBehavior = i.SheetSizeBehavior),
        (t.TableauDialogType = i.TableauDialogType),
        (t.Toolbar = i.Toolbar),
        n(r(5625)),
        n(r(7940)),
        n(r(7154)),
        n(r(6408))
    },
    1615: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(423)
      ;(t.ErrorCodes = n.ErrorCodes),
        (t.ExtensionContext = n.ExtensionContext),
        (t.ExtensionMode = n.ExtensionMode),
        (t.TableauEventType = n.TableauEventType),
        (t.VizImageEncodingType = n.VizImageEncodingType),
        (t.VizImagePaletteType = n.VizImagePaletteType),
        (t.VizImageSizeSettingAlignmentType = n.VizImageSizeSettingAlignmentType),
        (t.VizImageSizeSettingType = n.VizImageSizeSettingType),
        (t.VizImageSortDirectionType = n.VizImageSortDirectionType),
        (function (e) {
          for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
        })(r(6408))
    },
    1750: (e, t, r) => {
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), n(r(9654)), n(r(1615))
    },
    2996: (e, t) => {
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((r = t.AskDataAttributes || (t.AskDataAttributes = {})).Origin = 'origin'),
        (r.ShowEmbed = 'show-embed'),
        (r.ShowPin = 'show-pin'),
        (r.ShowSave = 'show-save'),
        (r.ShowShare = 'show-share')
    },
    3069: (e, t) => {
      var r, n, i, a, o, s, l, u, c, d, p, h, m
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((m = t.CrosstabFileFormat || (t.CrosstabFileFormat = {})).CSV = 'csv'),
        (m.Excel = 'xlsx'),
        ((h = t.DeviceType || (t.DeviceType = {})).Default = 'default'),
        (h.Desktop = 'desktop'),
        (h.Tablet = 'tablet'),
        (h.Phone = 'phone'),
        ((p = t.EmbeddingErrorCodes || (t.EmbeddingErrorCodes = {})).AuthFailed = 'auth-failed'),
        (p.BrowserNotCapable = 'browser-not-capable'),
        (p.DownloadWorkbookNotAllowed = 'download-workbook-not-allowed'),
        (p.FilterCannotBePerformed = 'filter-cannot-be-performed'),
        (p.IndexOutOfRange = 'index-out-of-range'),
        (p.InternalError = 'internal-error'),
        (p.InvalidCustomViewName = 'invalid-custom-view-name'),
        (p.InvalidDateParameter = 'invalid-date-parameter'),
        (p.invalidFilterFieldNameOrValue = 'invalid-filter-field-name'),
        (p.InvalidParameter = 'invalid-parameter'),
        (p.InvalidSize = 'invalid-size'),
        (p.InvalidSheetType = 'invalid-sheet-type'),
        (p.InvalidSizeBehavior = 'invalid-size-behavior'),
        (p.InvalidSizeBehaviorOnWorksheet = 'invalid-size-behavior-on-worksheet'),
        (p.InvalidUrl = 'invalid-url'),
        (p.MissingMaxSize = 'missing-max-size'),
        (p.MissingMinSize = 'missing-min-size'),
        (p.MissingMinMaxSize = 'missing-min-max-size'),
        (p.MissingParameter = 'missing-parameter'),
        (p.MissingRangeNForRelativeDateFilters = 'missing-range-n-for-relative-date-filters'),
        (p.NoUrlForHiddenWorksheet = 'no-url-for-hidden-worksheet'),
        (p.NoUrlOrParentElementNotFound = 'no-url-or-parent-element-not-found'),
        (p.NotActiveSheet = 'not-active-sheet'),
        (p.NullOrEmptyParameter = 'null-or-empty-parameter'),
        (p.SheetNotInWorkbook = 'sheet-not-in-workbook'),
        (p.StaleDataReference = 'stale-data-reference'),
        (p.UnknownAuthError = 'unknown-auth-error'),
        (p.UnsupportedEventName = 'unsupported-event-name'),
        (p.VizAlreadyInManager = 'viz-already-in-manager'),
        (p.ImplementationError = 'wrong-implementation'),
        (p.NotImplemented = 'not-implemented'),
        (p.EventInitializationError = 'event-initialization-error'),
        (p.IncompatibleVersionError = 'incompatible-version-error'),
        (p.UnknownDialogType = 'unknown-dialog-type'),
        (p.FilterMissingOrNotImplemented = 'filter-missing-not-implemented'),
        (p.StoryPointIdMismatch = 'storypoint-id-mismatch'),
        ((d = t.FileFormats || (t.FileFormats = {})).PDF = 'pdf'),
        (d.PNG = 'png'),
        ((c = t.PrintOrientation || (t.PrintOrientation = {})).Portrait = 'portrait'),
        (c.Landscape = 'landscape'),
        ((u = t.PrintPageSize || (t.PrintPageSize = {})).Letter = 'letter'),
        (u.Legal = 'legal'),
        (u.Note = 'note'),
        (u.Folio = 'folio'),
        (u.Tabloid = 'tabloid'),
        (u.Ledger = 'ledger'),
        (u.Statement = 'statement'),
        (u.Executive = 'executive'),
        (u.A3 = 'A3'),
        (u.A4 = 'A4'),
        (u.A5 = 'A5'),
        (u.B4 = 'B4'),
        (u.B5 = 'B5'),
        (u.Quarto = 'quarto'),
        (u.Unspecified = 'unspecified'),
        ((l = t.PrintScaling || (t.PrintScaling = {})).Automatic = 'automatic'),
        (l.Perc25 = '25%'),
        (l.Perc50 = '50%'),
        (l.Perc60 = '60%'),
        (l.Perc75 = '75%'),
        (l.Perc80 = '80%'),
        (l.Perc90 = '90%'),
        (l.Perc100 = '100%'),
        (l.Perc200 = '200%'),
        (l.Perc400 = '400%'),
        (l.AtMost1PageHigh = 'at-most-1-page-high'),
        (l.AtMost2PagesHigh = 'at-most-2-pages-high'),
        (l.AtMost1PageWide = 'at-most-1-page-wide'),
        (l.AtMost2PagesWide = 'at-most-2-pages-wide'),
        ((s = t.RevertVizSelection || (t.RevertVizSelection = {})).All = 'all'),
        (s.Axes = 'axes'),
        (s.Filters = 'filters'),
        (s.Sorts = 'sorts'),
        (s.Shelves = 'shelves'),
        ((o = t.ToolbarButtons || (t.ToolbarButtons = {})).Alerts = 'alerts'),
        (o.AskData = 'askData'),
        (o.CustomViews = 'customViews'),
        (o.DataDetails = 'dataDetails'),
        (o.Share = 'share'),
        (o.Subscribe = 'subscribe'),
        ((a = t.Toolbar || (t.Toolbar = {})).Top = 'top'),
        (a.Bottom = 'bottom'),
        (a.Hidden = 'hidden'),
        ((i = t.SheetSizeBehavior || (t.SheetSizeBehavior = {})).Automatic = 'automatic'),
        (i.Exactly = 'exactly'),
        (i.Range = 'range'),
        (i.AtLeast = 'atleast'),
        (i.AtMost = 'atmost'),
        ((n = t.TableauEventType || (t.TableauEventType = {})).CustomViewLoaded = 'customviewloaded'),
        (n.CustomViewRemoved = 'customviewremoved'),
        (n.CustomViewSaved = 'customviewsaved'),
        (n.CustomViewSetDefault = 'customviewsetdefault'),
        (n.EditButtonClicked = 'editbuttonclicked'),
        (n.EditInDesktopButtonClicked = 'editindesktopbuttonclicked'),
        (n.FilterChanged = 'filterchanged'),
        (n.FirstVizSizeKnown = 'firstvizsizeknown'),
        (n.FirstInteractive = 'firstinteractive'),
        (n.CustomMarkContextMenuEvent = 'custommarkcontextmenu'),
        (n.MarkSelectionChanged = 'markselectionchanged'),
        (n.ParameterChanged = 'parameterchanged'),
        (n.ToolbarStateChanged = 'toolbarstatechanged'),
        (n.WorkbookReadyToClose = 'workbookreadytoclose'),
        (n.WorkbookPublished = 'workbookpublished'),
        (n.WorkbookPublishedAs = 'workbookpublishedas'),
        (n.UrlAction = 'urlaction'),
        (n.TabSwitched = 'tabswitched'),
        (n.StoryPointSwitched = 'storypointswitched'),
        (n.VizLoadError = 'vizloaderror'),
        (n.IframeSrcUpdated = 'iframesrcupdated'),
        (n.SummaryDataChanged = 'summarydatachanged'),
        (n.ReadyToReceiveAuthToken = 'readytoreceiveauthtoken'),
        ((t.ApiMenuType || (t.ApiMenuType = {})).Ubertip = 'ubertip'),
        ((r = t.TableauDialogType || (t.TableauDialogType = {})).ExportPDF = 'export-pdf'),
        (r.ExportPowerPoint = 'export-powerpoint'),
        (r.ExportData = 'export-data'),
        (r.ExportCrossTab = 'export-cross-tab'),
        (r.ExportWorkbook = 'export-workbook'),
        (r.Share = 'share')
    },
    5625: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((t.PulseAttributes || (t.PulseAttributes = {})).DisableExploreFilter = 'disable-explore-filter')
    },
    7940: (e, t) => {
      var r, n, i, a, o
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((o = t.VizSharedAttributes || (t.VizSharedAttributes = {})).TouchOptimize = 'touch-optimize'),
        (o.HideEditInDesktopButton = 'hide-edit-in-desktop-button'),
        (o.SuppressDefaultEditBehavior = 'suppress-default-edit-behavior'),
        (o.DisableVersionCheck = 'disable-version-check'),
        (o.OnEditInDesktopButtonClicked = 'onEditInDesktopButtonClicked'),
        (o.OnFirstVizSizeKnown = 'onFirstVizSizeKnown'),
        (o.OnFirstInteractive = 'onFirstInteractive'),
        ((a = t.VizAttributes || (t.VizAttributes = {})).DisableUrlActionsPopups = 'disable-url-actions'),
        (a.HideTabs = 'hide-tabs'),
        (a.Toolbar = 'toolbar'),
        (a.InstanceIdToClone = 'instance-id-to-clone'),
        (a.Device = 'device'),
        (a.HideEditButton = 'hide-edit-button'),
        (a.OnEditButtonClicked = 'onEditButtonClicked'),
        (a.OnFilterChanged = 'onFilterChanged'),
        (a.OnCustomMarkContextMenuEvent = 'onCustomMarkContextMenuEvent'),
        (a.OnMarkSelectionChanged = 'onMarkSelectionChanged'),
        (a.OnParameterChanged = 'onParameterChanged'),
        (a.OnToolbarStateChanged = 'onToolbarStateChanged'),
        (a.OnUrlAction = 'onUrlAction'),
        (a.OnTabSwitched = 'onTabSwitched'),
        (a.OnCustomViewLoaded = 'onCustomViewLoaded'),
        (a.OnCustomViewRemoved = 'onCustomViewRemoved'),
        (a.OnCustomViewSaved = 'onCustomViewSaved'),
        (a.OnCustomViewSetDefault = 'onCustomViewSetDefault'),
        (a.OnStoryPointSwitched = 'onStoryPointSwitched'),
        (a.OnSummaryDataChanged = 'onSummaryDataChanged'),
        (a.OnReadyToReceiveAuthToken = 'onReadyToReceiveAuthToken'),
        ((i = t.VizAuthoringAttributes || (t.VizAuthoringAttributes = {})).OnWorkbookPublished = 'onWorkbookPublished'),
        (i.OnWorkbookPublishedAs = 'onWorkbookPublishedAs'),
        (i.OnWorkbookReadyToClose = 'onWorkbookReadyToClose'),
        (i.HideCloseButton = 'hide-close-button'),
        ((n = t.VizChildElements || (t.VizChildElements = {})).VizFilter = 'viz-filter'),
        (n.VizParameter = 'viz-parameter'),
        (n.CustomParameter = 'custom-parameter'),
        ((r = t.VizChildElementAttributes || (t.VizChildElementAttributes = {})).Field = 'field'),
        (r.Value = 'value'),
        (r.Name = 'name')
    },
    7154: (e, t) => {
      var r, n
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((n = t.WebComponentAttributes || (t.WebComponentAttributes = {})).Src = 'src'),
        (n.Width = 'width'),
        (n.Height = 'height'),
        (n.Token = 'token'),
        (n.Debug = 'debug'),
        (n.IframeAuth = 'iframe-auth'),
        (n.OnVizLoadError = 'onvizloaderror'),
        (n.ForceTokenSync = 'force-token-sync'),
        ((t.WebComponentChildElements || (t.WebComponentChildElements = {})).CustomParameter = 'custom-parameter'),
        ((r = t.WebComponentChildElementAttributes || (t.WebComponentChildElementAttributes = {})).Field = 'field'),
        (r.Value = 'value'),
        (r.Name = 'name')
    },
    423: (e) => {
      var t
      !(function (e) {
        var t, r, n, i, a, o, s, l, u
        ;((u = e.ErrorCodes || (e.ErrorCodes = {})).APINotInitialized = 'api-not-initialized'),
          (u.VisibilityError = 'visibility-error'),
          (u.DialogAlreadyOpen = 'dialog-already-open'),
          (u.DialogClosedByUser = 'dialog-closed-by-user'),
          (u.InternalError = 'internal-error'),
          (u.InvalidDomainDialog = 'invalid-dialog-domain'),
          (u.InvalidParameter = 'invalid-parameter'),
          (u.MissingFilter = 'missing-filter'),
          (u.MissingParameter = 'missing-parameter'),
          (u.ServerError = 'server-error'),
          (u.SettingSaveInProgress = 'setting-save-in-progress'),
          (u.UnsupportedEventName = 'unsupported-event-name'),
          (u.UnsupportedMethodForDataSourceType = 'unsupported-method-for-data-source-type'),
          ((l = e.ExtensionContext || (e.ExtensionContext = {})).Desktop = 'desktop'),
          (l.Server = 'server'),
          ((s = e.ExtensionMode || (e.ExtensionMode = {})).Authoring = 'authoring'),
          (s.Viewing = 'viewing'),
          ((o = e.TableauEventType || (e.TableauEventType = {})).FilterChanged = 'filter-changed'),
          (o.MarkSelectionChanged = 'mark-selection-changed'),
          (o.SummaryDataChanged = 'summary-data-changed'),
          (o.ParameterChanged = 'parameter-changed'),
          (o.SettingsChanged = 'settings-changed'),
          (o.DashboardLayoutChanged = 'dashboard-layout-changed'),
          (o.WorkbookFormattingChanged = 'workbook-formatting-changed'),
          ((a = e.VizImageEncodingType || (e.VizImageEncodingType = {})).Discrete = 'discrete'),
          (a.Continuous = 'continuous'),
          ((i = e.VizImageSortDirectionType || (e.VizImageSortDirectionType = {})).Ascending = 'ascending'),
          (i.Descending = 'descending'),
          ((n = e.VizImagePaletteType || (e.VizImagePaletteType = {})).CustomDiverging = 'custom-diverging'),
          (n.CustomSequential = 'custom-sequential'),
          ((r = e.VizImageSizeSettingType || (e.VizImageSizeSettingType = {})).Fixed = 'fixed'),
          (r.Manual = 'manual'),
          ((t = e.VizImageSizeSettingAlignmentType || (e.VizImageSizeSettingAlignmentType = {})).Right = 'right'),
          (t.Left = 'left'),
          (t.Center = 'center')
      })(t || (t = {})),
        (e.exports = t)
    },
    6818: (e, t) => {
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((r = t.SharedErrorCodes || (t.SharedErrorCodes = {})).CrosstabCreationError = 'crosstab-creation-error'),
        (r.DataCreationError = 'data-creation-error'),
        (r.InvalidAggregationFieldName = 'invalid-aggregation-field-name'),
        (r.InvalidFilterFieldName = 'invalid-filter-name'),
        (r.InvalidFilterFieldValue = 'invalid-filter-fieldValue'),
        (r.InvalidSelectionDate = 'invalid-selection-date'),
        (r.InvalidSelectionFieldName = 'invalid-selection-fieldName'),
        (r.InvalidSelectionValue = 'invalid-selection-value'),
        (r.InvalidSelectionSheet = 'invalid-selection-sheet'),
        (r.InternalError = 'internal-error'),
        (r.InvalidParameter = 'invalid-parameter'),
        (r.PDFCreationError = 'pdf-creation-error'),
        (r.PowerPointCreationError = 'powerpoint-creation-error'),
        (r.NotActiveSheet = 'not-active-sheet'),
        (r.ImplementationError = 'wrong-implementation'),
        (r.ApiExecutionError = 'api-execution-error'),
        (r.ServerError = 'server-error'),
        (r.Timeout = 'timeout')
    },
    4953: function (e) {
      var t,
        r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                  return e
                }),
              r.apply(this, arguments)
            )
          }
      !(function (e) {
        var t, n, i, a, o, s, l, u, c, d, p, h, m, y, g, f, b, v, I, S, T, A, _, w, P, E, C, D, k
        ;((k = e.AnalyticsObjectType || (e.AnalyticsObjectType = {})).Cluster = 'cluster'),
          (k.Forecast = 'forecast'),
          (k.TrendLine = 'trend-line'),
          ((D = e.AnnotationType || (e.AnnotationType = {})).Mark = 'mark'),
          (D.Point = 'point'),
          (D.Area = 'area'),
          ((C = e.ColumnType || (e.ColumnType = {})).Discrete = 'discrete'),
          (C.Continuous = 'continuous'),
          ((E = e.ClassNameKey || (e.ClassNameKey = {})).WorksheetTitle = 'tableau-worksheet-title'),
          (E.Worksheet = 'tableau-worksheet'),
          (E.Tooltip = 'tableau-tooltip'),
          (E.StoryTitle = 'tableau-story-title'),
          (E.DashboardTitle = 'tableau-dashboard-title'),
          ((P = e.DashboardObjectType || (e.DashboardObjectType = {})).Blank = 'blank'),
          (P.Worksheet = 'worksheet'),
          (P.QuickFilter = 'quick-filter'),
          (P.ParameterControl = 'parameter-control'),
          (P.PageFilter = 'page-filter'),
          (P.Legend = 'legend'),
          (P.Title = 'title'),
          (P.Text = 'text'),
          (P.Image = 'image'),
          (P.WebPage = 'web-page'),
          (P.Extension = 'extension'),
          (function (e) {
            ;(e.Show = 'show'), (e.Hide = 'hide')
          })((t = e.DashboardObjectVisibilityType || (e.DashboardObjectVisibilityType = {}))),
          ((w = e.DataType || (e.DataType = {})).String = 'string'),
          (w.Int = 'int'),
          (w.Float = 'float'),
          (w.Bool = 'bool'),
          (w.Date = 'date'),
          (w.DateTime = 'date-time'),
          (w.Spatial = 'spatial'),
          (w.Unknown = 'unknown'),
          ((_ = e.DashboardLayoutChange || (e.DashboardLayoutChange = {})).Added = 'added'),
          (_.Removed = 'removed'),
          (_.IsFloatingChanged = 'is-floating-changed'),
          (_.IsVisibleChanged = 'is-visible-changed'),
          (_.PositionChanged = 'position-changed'),
          (_.SizeChanged = 'size-changed'),
          (_.NameChanged = 'name-changed'),
          (_.Selected = 'selected'),
          (_.Deselected = 'deselected'),
          (_.DashboardChanged = 'dashboard-changed'),
          ((A = e.DateRangeType || (e.DateRangeType = {})).Last = 'last'),
          (A.LastN = 'last-n'),
          (A.Next = 'next'),
          (A.NextN = 'next-n'),
          (A.Current = 'current'),
          (A.ToDate = 'to-date'),
          ((T = e.DialogStyle || (e.DialogStyle = {})).Window = 'window'),
          (T.Modal = 'modal'),
          (T.Modeless = 'modeless'),
          ((S = e.EncodingType || (e.EncodingType = {})).Column = 'column'),
          (S.Row = 'row'),
          (S.Page = 'page'),
          (S.Filter = 'filter'),
          (S.MarksType = 'marks-type'),
          (S.MeasureValues = 'measure-values'),
          (S.Color = 'color'),
          (S.Size = 'size'),
          (S.Label = 'label'),
          (S.Detail = 'detail'),
          (S.Tooltip = 'tooltip'),
          (S.Shape = 'shape'),
          (S.Path = 'path'),
          (S.Angle = 'angle'),
          (S.Geometry = 'geometry'),
          (S.Custom = 'custom'),
          ((I = e.FieldAggregationType || (e.FieldAggregationType = {})).Sum = 'sum'),
          (I.Avg = 'avg'),
          (I.Min = 'min'),
          (I.Max = 'max'),
          (I.Stdev = 'stdev'),
          (I.Stdevp = 'stdevp'),
          (I.Var = 'var'),
          (I.Varp = 'varp'),
          (I.Collect = 'collect'),
          (I.Count = 'count'),
          (I.Countd = 'countd'),
          (I.Median = 'median'),
          (I.Attr = 'attr'),
          (I.None = 'none'),
          (I.Year = 'year'),
          (I.Qtr = 'qtr'),
          (I.Month = 'month'),
          (I.Day = 'day'),
          (I.Hour = 'hour'),
          (I.Minute = 'minute'),
          (I.Second = 'second'),
          (I.Week = 'week'),
          (I.Weekday = 'weekday'),
          (I.MonthYear = 'month-year'),
          (I.Mdy = 'mdy'),
          (I.End = 'end'),
          (I.TruncYear = 'trunc-year'),
          (I.TruncQtr = 'trunc-qtr'),
          (I.TruncMonth = 'trunc-month'),
          (I.TruncWeek = 'trunc-week'),
          (I.TruncDay = 'trunc-day'),
          (I.TruncHour = 'trunc-hour'),
          (I.TruncMinute = 'trunc-minute'),
          (I.TruncSecond = 'trunc-second'),
          (I.Quart1 = 'quart1'),
          (I.Quart3 = 'quart3'),
          (I.Skewness = 'skewness'),
          (I.Kurtosis = 'kurtosis'),
          (I.InOut = 'in-out'),
          (I.User = 'user'),
          ((v = e.FieldRoleType || (e.FieldRoleType = {})).Dimension = 'dimension'),
          (v.Measure = 'measure'),
          (v.Unknown = 'unknown'),
          ((b = e.FilterType || (e.FilterType = {})).Categorical = 'categorical'),
          (b.Range = 'range'),
          (b.Hierarchical = 'hierarchical'),
          (b.RelativeDate = 'relative-date'),
          ((f = e.FilterUpdateType || (e.FilterUpdateType = {})).Add = 'add'),
          (f.All = 'all'),
          (f.Replace = 'replace'),
          (f.Remove = 'remove'),
          ((g = e.FilterDomainType || (e.FilterDomainType = {})).Relevant = 'relevant'),
          (g.Database = 'database'),
          ((y = e.FilterNullOption || (e.FilterNullOption = {})).NullValues = 'null-values'),
          (y.NonNullValues = 'non-null-values'),
          (y.AllValues = 'all-values'),
          ((m = e.IncludeDataValuesOption || (e.IncludeDataValuesOption = {})).AllValues = 'all-values'),
          (m.OnlyNativeValues = 'only-native-values'),
          (m.OnlyFormattedValues = 'only-formatted-values'),
          ((h = e.MarkType || (e.MarkType = {})).Bar = 'bar'),
          (h.Line = 'line'),
          (h.Area = 'area'),
          (h.Square = 'square'),
          (h.Circle = 'circle'),
          (h.Shape = 'shape'),
          (h.Text = 'text'),
          (h.Map = 'map'),
          (h.Pie = 'pie'),
          (h.GanttBar = 'gantt-bar'),
          (h.Polygon = 'polygon'),
          (h.Heatmap = 'heatmap'),
          (h.VizExtension = 'viz-extension'),
          ((p = e.ParameterValueType || (e.ParameterValueType = {})).All = 'all'),
          (p.List = 'list'),
          (p.Range = 'range'),
          ((d = e.PeriodType || (e.PeriodType = {})).Years = 'years'),
          (d.Quarters = 'quarters'),
          (d.Months = 'months'),
          (d.Weeks = 'weeks'),
          (d.Days = 'days'),
          (d.Hours = 'hours'),
          (d.Minutes = 'minutes'),
          (d.Seconds = 'seconds'),
          ((c = e.QuickTableCalcType || (e.QuickTableCalcType = {})).RunningTotal = 'running-total'),
          (c.Difference = 'difference'),
          (c.PercentDifference = 'percent-difference'),
          (c.PercentOfTotal = 'percent-of-total'),
          (c.Rank = 'rank'),
          (c.Percentile = 'percentile'),
          (c.MovingAverage = 'moving-average'),
          (c.YTDTotal = 'ytd-total'),
          (c.CompoundGrowthRate = 'compound-growth-rate'),
          (c.YearOverYearGrowth = 'year-over-year-growth'),
          (c.YTDGrowth = 'ytd-growth'),
          (c.Undefined = 'undefined'),
          ((u = e.SelectionUpdateType || (e.SelectionUpdateType = {})).Replace = 'select-replace'),
          (u.Add = 'select-add'),
          (u.Remove = 'select-remove'),
          ((l = e.SelectOptions || (e.SelectOptions = {})).Simple = 'select-options-simple'),
          (l.Toggle = 'select-options-toggle'),
          ((s = e.SheetType || (e.SheetType = {})).Dashboard = 'dashboard'),
          (s.Story = 'story'),
          (s.Worksheet = 'worksheet'),
          ((o = e.SortDirection || (e.SortDirection = {})).Increasing = 'increasing'),
          (o.Decreasing = 'decreasing'),
          ((a = e.TrendLineModelType || (e.TrendLineModelType = {})).Linear = 'linear'),
          (a.Logarithmic = 'logarithmic'),
          (a.Exponential = 'exponential'),
          (a.Polynomial = 'polynomial'),
          ((i = e.ReplaySpeedType || (e.ReplaySpeedType = {})).Slow = 'slow'),
          (i.Normal = 'normal'),
          (i.Fast = 'fast'),
          ((n = e.HierarchicalLevelSelectionState || (e.HierarchicalLevelSelectionState = {})).AllSelected =
            'all-selected'),
          (n.NoneSelected = 'none-selected'),
          (n.SomeSelected = 'some-selected'),
          (n.UnknownSelected = 'unknown-selected'),
          (e.ZoneVisibilityType = r({}, t))
      })(t || (t = {})),
        (e.exports = t)
    },
    6408: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e) {
          for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
        })(r(6818))
      var n = r(4953)
      ;(t.AnalyticsObjectType = n.AnalyticsObjectType),
        (t.AnnotationType = n.AnnotationType),
        (t.ClassNameKey = n.ClassNameKey),
        (t.ColumnType = n.ColumnType),
        (t.DashboardLayoutChange = n.DashboardLayoutChange),
        (t.DashboardObjectType = n.DashboardObjectType),
        (t.DashboardObjectVisibilityType = n.DashboardObjectVisibilityType),
        (t.DataType = n.DataType),
        (t.DateRangeType = n.DateRangeType),
        (t.DialogStyle = n.DialogStyle),
        (t.EncodingType = n.EncodingType),
        (t.FieldAggregationType = n.FieldAggregationType),
        (t.FieldRoleType = n.FieldRoleType),
        (t.FilterDomainType = n.FilterDomainType),
        (t.FilterNullOption = n.FilterNullOption),
        (t.FilterType = n.FilterType),
        (t.FilterUpdateType = n.FilterUpdateType),
        (t.HierarchicalLevelSelectionState = n.HierarchicalLevelSelectionState),
        (t.IncludeDataValuesOption = n.IncludeDataValuesOption),
        (t.MarkType = n.MarkType),
        (t.ParameterValueType = n.ParameterValueType),
        (t.PeriodType = n.PeriodType),
        (t.QuickTableCalcType = n.QuickTableCalcType),
        (t.ReplaySpeedType = n.ReplaySpeedType),
        (t.SelectOptions = n.SelectOptions),
        (t.SelectionUpdateType = n.SelectionUpdateType),
        (t.SheetType = n.SheetType),
        (t.SortDirection = n.SortDirection),
        (t.TrendLineModelType = n.TrendLineModelType),
        (t.ZoneVisibilityType = n.ZoneVisibilityType)
    },
    4695: (e, t, r) => {
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), r(5611), r(2316), r(47)
      var i = r(2725)
      ;(t.INTERNAL_CONTRACT_VERSION = i),
        n(r(7850)),
        n(r(4063)),
        n(r(5879)),
        n(r(5257)),
        n(r(5681)),
        n(r(967)),
        n(r(2912)),
        n(r(8075)),
        n(r(550)),
        n(r(3590)),
        n(r(9394)),
        n(r(408)),
        n(r(3526)),
        (t.MESSAGING_VERSION = { major: 1, minor: 0, fix: 0 })
    },
    7850: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4063),
        i = (function () {
          function e() {}
          return (
            (e.isSpecial = function (e) {
              return e.length > 2 && '%' === e[0] && '%' === e[e.length - 1]
            }),
            (e.parseBoolean = function (e) {
              var t = e.toLowerCase()
              return 'true' !== t && 'false' !== t ? this.specialValueIndicator : 'true' === t
            }),
            (e.parseNumber = function (e) {
              var t = Number(e)
              return isNaN(t) ? this.specialValueIndicator : t
            }),
            (e.parseDate = function (e) {
              var t = new Date(e)
              return Number.isNaN(t.getTime()) ? null : t
            }),
            (e.parseDateTime = function (e) {
              var t = e.replace(' ', 'T').concat('Z'),
                r = new Date(t)
              return Number.isNaN(r.getTime()) ? null : r
            }),
            (e.convertValueAsStringToValue = function (e, t) {
              if (null != e) {
                if (this.isSpecial(e)) return e
                switch (t) {
                  case n.DataType.Bool:
                    return this.parseBoolean(e)
                  case n.DataType.Int:
                  case n.DataType.Float:
                    return this.parseNumber(e)
                  case n.DataType.Date:
                    return null === this.parseDate(e) ? this.specialValueIndicator : e
                  case n.DataType.DateTime:
                    return null === this.parseDateTime(e) ? this.specialValueIndicator : e
                  case n.DataType.Spatial:
                  case n.DataType.String:
                  default:
                    return e
                }
              }
            }),
            (e.convertValueToNativeValue = function (e, t) {
              if (null == e) return null
              switch (t) {
                case n.DataType.Bool:
                case n.DataType.Int:
                case n.DataType.Float:
                  return 'string' == typeof e ? null : e
                case n.DataType.Date:
                  return this.parseDate(e)
                case n.DataType.DateTime:
                  return this.parseDateTime(e)
                case n.DataType.String:
                  return this.isSpecial(e) ? null : e
                case n.DataType.Spatial:
                default:
                  return e
              }
            }),
            (e.convertStringValueToNativeValue = function (e, t) {
              return this.convertValueToNativeValue(this.convertValueAsStringToValue(e, t), t)
            }),
            (e.specialValueIndicator = '%null%'),
            e
          )
        })()
      t.DataTypeConverter = i
    },
    4063: (e, t) => {
      var r, n, i, a, o, s, l, u, c, d, p, h, m, y, g, f, b, v, I, S, T, A, _, w, P, E, C, D, k, O, V, x, N
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((N = t.ExtensionContext || (t.ExtensionContext = {})).Desktop = 'desktop'),
        (N.Server = 'server'),
        (N.Unknown = 'unknown'),
        ((x = t.ExtensionMode || (t.ExtensionMode = {})).Authoring = 'authoring'),
        (x.Viewing = 'viewing'),
        (x.Unknown = 'unknown'),
        ((V = t.AnnotateEnum || (t.AnnotateEnum = {})).Mark = 'mark'),
        (V.Point = 'point'),
        (V.Area = 'area'),
        ((O = t.ColumnType || (t.ColumnType = {})).Discrete = 'discrete'),
        (O.Continuous = 'continuous'),
        ((k = t.DashboardObjectType || (t.DashboardObjectType = {})).Blank = 'blank'),
        (k.Worksheet = 'worksheet'),
        (k.QuickFilter = 'quick-filter'),
        (k.ParameterControl = 'parameter-control'),
        (k.PageFilter = 'page-filter'),
        (k.Legend = 'legend'),
        (k.Title = 'title'),
        (k.Text = 'text'),
        (k.Image = 'image'),
        (k.WebPage = 'web-page'),
        (k.Extension = 'extension'),
        ((D = t.DataType || (t.DataType = {})).String = 'string'),
        (D.Int = 'int'),
        (D.Float = 'float'),
        (D.Bool = 'bool'),
        (D.Date = 'date'),
        (D.DateTime = 'date-time'),
        (D.Spatial = 'spatial'),
        (D.Unknown = 'unknown'),
        ((C = t.DialogStyle || (t.DialogStyle = {})).Window = 'window'),
        (C.Modal = 'modal'),
        (C.Modeless = 'modeless'),
        ((E = t.EncodedDataType || (t.EncodedDataType = {})).Number = 'number'),
        (E.String = 'string'),
        (E.Date = 'date'),
        (E.Boolean = 'boolean'),
        ((P = t.ErrorCodes || (t.ErrorCodes = {})).INITIALIZATION_ERROR = 'initialization-error'),
        (P.INTERNAL_ERROR = 'internal-error'),
        (P.MISSING_ENUM_MAPPING = 'missing-enum-mapping'),
        (P.MISSING_PARAMETER = 'missing-parameter'),
        (P.PERMISSION_DENIED = 'permission-denied'),
        (P.PRES_MODEL_PARSING_ERROR = 'pres-model-parsing-error'),
        (P.VERSION_NOT_CONFIGURED = 'version-not-configured'),
        (P.VISIBILITY_ERROR = 'visibility-error'),
        (P.UNKNOWN_VERB_ID = 'unknown-verb-id'),
        ((w = t.FieldAggregationType || (t.FieldAggregationType = {})).Sum = 'sum'),
        (w.Avg = 'avg'),
        (w.Min = 'min'),
        (w.Max = 'max'),
        (w.Stdev = 'stdev'),
        (w.Stdevp = 'stdevp'),
        (w.Var = 'var'),
        (w.Varp = 'varp'),
        (w.Collect = 'collect'),
        (w.Count = 'count'),
        (w.Countd = 'countd'),
        (w.Median = 'median'),
        (w.Attr = 'attr'),
        (w.None = 'none'),
        (w.Year = 'year'),
        (w.Qtr = 'qtr'),
        (w.Month = 'month'),
        (w.Day = 'day'),
        (w.Hour = 'hour'),
        (w.Minute = 'minute'),
        (w.Second = 'second'),
        (w.Week = 'week'),
        (w.Weekday = 'weekday'),
        (w.MonthYear = 'month-year'),
        (w.Mdy = 'mdy'),
        (w.End = 'end'),
        (w.TruncYear = 'trunc-year'),
        (w.TruncQtr = 'trunc-qtr'),
        (w.TruncMonth = 'trunc-month'),
        (w.TruncWeek = 'trunc-week'),
        (w.TruncDay = 'trunc-day'),
        (w.TruncHour = 'trunc-hour'),
        (w.TruncMinute = 'trunc-minute'),
        (w.TruncSecond = 'trunc-second'),
        (w.Quart1 = 'quart1'),
        (w.Quart3 = 'quart3'),
        (w.Skewness = 'skewness'),
        (w.Kurtosis = 'kurtosis'),
        (w.InOut = 'in-out'),
        (w.User = 'user'),
        ((_ = t.FieldRoleType || (t.FieldRoleType = {})).Dimension = 'dimension'),
        (_.Measure = 'measure'),
        (_.Unknown = 'unknown'),
        ((A = t.FilterUpdateType || (t.FilterUpdateType = {})).Add = 'add'),
        (A.All = 'all'),
        (A.Replace = 'replace'),
        (A.Remove = 'remove'),
        ((T = t.SheetType || (t.SheetType = {})).Dashboard = 'dashboard'),
        (T.Story = 'story'),
        (T.Worksheet = 'worksheet'),
        ((S = t.DomainRestrictionType || (t.DomainRestrictionType = {})).All = 'all'),
        (S.List = 'list'),
        (S.Range = 'range'),
        ((I = t.DateStepPeriod || (t.DateStepPeriod = {})).Years = 'years'),
        (I.Quarters = 'quarters'),
        (I.Months = 'months'),
        (I.Weeks = 'weeks'),
        (I.Days = 'days'),
        (I.Hours = 'hours'),
        (I.Minutes = 'minutes'),
        (I.Seconds = 'seconds'),
        ((v = t.FilterNullOption || (t.FilterNullOption = {})).NullValues = 'nullvalues'),
        (v.NonNullValues = 'nonnullvalues'),
        (v.AllValues = 'allvalues'),
        ((b = t.FilterDomainType || (t.FilterDomainType = {})).Relevant = 'relevant'),
        (b.Database = 'database'),
        ((f = t.SelectionUpdateType || (t.SelectionUpdateType = {})).Replace = 'select-replace'),
        (f.Add = 'select-add'),
        (f.Remove = 'select-remove'),
        ((g = t.SelectOptions || (t.SelectOptions = {})).Simple = 'select-options-simple'),
        (g.Toggle = 'select-options-toggle'),
        (g.Menu = 'select-options-menu'),
        (g.Range = 'select-options-range'),
        (g.Search = 'select-options-search'),
        ((y = t.QuantitativeIncludedValues || (t.QuantitativeIncludedValues = {})).IncludeNull = 'include-null'),
        (y.IncludeNonNull = 'include-non-null'),
        (y.IncludeAll = 'include-all'),
        ((m = t.HierarchicalLevelSelectionState || (t.HierarchicalLevelSelectionState = {})).AllSelected =
          'all-selected'),
        (m.NoneSelected = 'none-selected'),
        (m.SomeSelected = 'some-selected'),
        (m.UnknownSelected = 'unknown-selected'),
        ((h = t.MarkType || (t.MarkType = {})).Bar = 'bar'),
        (h.Line = 'line'),
        (h.Area = 'area'),
        (h.Square = 'square'),
        (h.Circle = 'circle'),
        (h.Shape = 'shape'),
        (h.Text = 'text'),
        (h.Map = 'map'),
        (h.Pie = 'pie'),
        (h.GanttBar = 'gantt-bar'),
        (h.Polygon = 'polygon'),
        (h.Heatmap = 'heatmap'),
        (h.VizExtension = 'viz-extension'),
        ((p = t.FilterType || (t.FilterType = {})).Categorical = 'categorical'),
        (p.Range = 'range'),
        (p.RelativeDate = 'relativeDate'),
        (p.Hierarchical = 'hierarchical'),
        ((d = t.DateRangeType || (t.DateRangeType = {})).Last = 'last'),
        (d.LastN = 'lastN'),
        (d.Next = 'next'),
        (d.NextN = 'nextN'),
        (d.Current = 'current'),
        (d.ToDate = 'toDate'),
        ((c = t.ExtensionDialogResult || (t.ExtensionDialogResult = {})).DialogAlreadyOpen = 'dialog-already-open'),
        (c.InvalidDomain = 'invalid-domain'),
        (c.Success = 'success'),
        ((u = t.ApiShowDataTableSentinel || (t.ApiShowDataTableSentinel = {})).SingleTableId =
          'single-table-id-sentinel'),
        (u.SingleTableCaption = 'Single table id sentinel'),
        ((l = t.ApiShowDataTableFormat || (t.ApiShowDataTableFormat = {})).NativeValuesOnly = 'native-values-only'),
        (l.FormattedValuesOnly = 'formatted-values-only'),
        (l.NativeAndFormattedValues = 'native-and-formatted-values'),
        ((s = t.PageSizeOption || (t.PageSizeOption = {})).Letter = 'letter'),
        (s.Legal = 'legal'),
        (s.Note = 'note'),
        (s.Folio = 'folio'),
        (s.Tabloid = 'tabloid'),
        (s.Ledger = 'ledger'),
        (s.Statement = 'statement'),
        (s.Executive = 'executive'),
        (s.A3 = 'a3'),
        (s.A4 = 'a4'),
        (s.A5 = 'a5'),
        (s.B4 = 'b4'),
        (s.B5 = 'b5'),
        (s.Quarto = 'quarto'),
        (s.Unspecified = 'unspecified'),
        ((o = t.PageOrientation || (t.PageOrientation = {})).Printer = 'printer'),
        (o.Portrait = 'portrait'),
        (o.Landscape = 'landscape'),
        ((a = t.ScaleMode || (t.ScaleMode = {})).ScaleAuto = 'auto'),
        (a.ScalePercentage = 'percent'),
        (a.ScaleFitPages = 'fit-pages'),
        ((i = t.PageScalingOption || (t.PageScalingOption = {})).ScalePctAuto = 'auto'),
        (i.ScalePct400 = 'pct400'),
        (i.ScalePct200 = 'pct200'),
        (i.ScalePct100 = 'pct100'),
        (i.ScalePct90 = 'pct90'),
        (i.ScalePct80 = 'pct80'),
        (i.ScalePct75 = 'pct75'),
        (i.ScalePct60 = 'pct60'),
        (i.ScalePct50 = 'pct50'),
        (i.ScalePct25 = 'pct25'),
        ((n = t.FitPages || (t.FitPages = {})).FitOneHigh = 'fit0x1'),
        (n.FitTwoHigh = 'fit0x2'),
        (n.FitOneWide = 'fit1x0'),
        (n.FitTwoWide = 'fit2x0'),
        ((r = t.EncodingType || (t.EncodingType = {})).Color = 'color'),
        (r.Size = 'size'),
        (r.Label = 'label'),
        (r.Detail = 'detail'),
        (r.Tooltip = 'tooltip'),
        (r.Shape = 'shape'),
        (r.Path = 'path'),
        (r.Angle = 'angle'),
        (r.Geometry = 'geometry'),
        (r.Custom = 'custom')
    },
    5879: (e, t) => {
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((r = t.NotificationId || (t.NotificationId = {})).CustomMarkContextMenuClicked =
          'custom-mark-context-menu-clicked'),
        (r.ContextMenuClick = 'context-menu-click'),
        (r.CustomViewRemoved = 'custom-view-removed'),
        (r.CustomViewSaved = 'custom-view-saved'),
        (r.CustomViewSetDefault = 'custom-view-set-default'),
        (r.CustomViewsLoaded = 'custom-views-loaded'),
        (r.DashboardLayoutChanged = 'dashboard-layout-changed'),
        (r.EditButtonClicked = 'edit-button-clicked'),
        (r.EditInDesktopButtonClicked = 'edit-in-desktop-button-clicked'),
        (r.ExtensionDialogUpdate = 'extension-dialog-update'),
        (r.FilterChanged = 'filter-changed'),
        (r.FirstVizSizeKnown = 'first-viz-size-known'),
        (r.ParameterChanged = 'parameter-changed'),
        (r.SelectedMarksChanged = 'selected-marks-changed'),
        (r.SettingsChanged = 'settings-changed'),
        (r.SummaryDataChanged = 'summary-data-changed'),
        (r.TestConversionNotification = 'test-conversion-notification'),
        (r.ToolbarStateChanged = 'toolbar-state-changed'),
        (r.VizInteractive = 'viz-interactive'),
        (r.AskDataInteractive = 'ask-data-interactive'),
        (r.WorkbookReadyToClose = 'workbook-ready-to-close'),
        (r.WorkbookFormattingChanged = 'workbook-formatting-changed'),
        (r.WorkbookPublished = 'workbook-published'),
        (r.WorkbookPublishedAs = 'workbook-published-as'),
        (r.UrlAction = 'url-action'),
        (r.TabSwitched = 'tab-switched'),
        (r.StoryPointSwitched = 'story-point-switched'),
        (r.ReadyToReceiveAuthToken = 'ready-to-receive-auth-token')
    },
    5257: (e, t) => {
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((r = t.ParameterId || (t.ParameterId = {})).ActiveTablesInfo = 'active-tables-info'),
        (r.AnchorDate = 'anchor-date'),
        (r.AnnotateEnum = 'annotate-enum'),
        (r.AnnotationList = 'annotation-list'),
        (r.CategoricalDomain = 'categorical-domain'),
        (r.ClickThroughEnabled = 'click-through-enabled'),
        (r.ColumnsToInclude = 'columns-to-include'),
        (r.ColumnsToIncludeById = 'columns-to-include-by-id'),
        (r.ConnectionDescriptionSummaries = 'connection-description-summaries'),
        (r.CurrentSheetType = 'current-sheet-type'),
        (r.CustomView = 'custom-view'),
        (r.CustomViewIsDefault = 'custom-view-is-default'),
        (r.CustomViewIsPublic = 'custom-view-is-public'),
        (r.CustomViewLuid = 'custom-view-luid'),
        (r.CustomViewName = 'custom-view-name'),
        (r.CustomViews = 'custom-views'),
        (r.Dashboard = 'dashboard'),
        (r.DashboardFilters = 'dashboard-filters'),
        (r.DashboardName = 'dashboard'),
        (r.DashboardObjectPositionAndSizeUpdate = 'dashboard-object-position-and-size-update'),
        (r.DashboardObjectPositionAndSizeUpdateList = 'dashboard-object-position-and-size-update-list'),
        (r.DataRowIndex = 'data-row-index'),
        (r.DataSchema = 'data-schema'),
        (r.DataSource = 'data-source'),
        (r.DataSourceDataTable = 'data-source-data-table'),
        (r.DataSourceId = 'data-source-id'),
        (r.DataSourceName = 'data-source-name'),
        (r.DataTable = 'data-table'),
        (r.DataTableReader = 'data-table-reader'),
        (r.DateRangeType = 'date-range-type'),
        (r.DeltaTimeMs = 'delta-time-ms'),
        (r.DimValSelectionModels = 'dimensionValueSelectionModels'),
        (r.DomainType = 'domain-type'),
        (r.EmbeddingAbstractQuery = 'embedding-abstract-query'),
        (r.EmbeddingBootstrapInfo = 'embedding-bootstrap-info'),
        (r.ExportCrosstabSheetMap = 'export-crosstab-sheet-map'),
        (r.ExportFile = 'export-file'),
        (r.ExportOriginUrl = 'export-origin-url'),
        (r.ExportPdfOptions = 'export-pdf-options'),
        (r.ExtensionBootstrapInfo = 'extension-bootstrap-info'),
        (r.ExtensionContextMenuIds = 'extension-context-menu-ids'),
        (r.ExtensionDialogH = 'extension-dialog-height'),
        (r.ExtensionDialogPayload = 'extension-dialog-payload'),
        (r.ExtensionDialogResult = 'extension-dialog-result'),
        (r.ExtensionDialogStyle = 'extension-dialog-style'),
        (r.ExtensionDialogUrl = 'extension-dialog-url'),
        (r.ExtensionDialogW = 'extension-dialog-width'),
        (r.ExtensionLocator = 'extension-locator'),
        (r.ExtensionSettingsInfo = 'extension-settings-info'),
        (r.ExtensionZoneId = 'extension-zone-id'),
        (r.ExternalMenuDescription = 'external-menu-description'),
        (r.ExternalMenuHeader = 'external-menu-header'),
        (r.ExternalMenuItemDisplayName = 'external-menu-item-display-name'),
        (r.ExternalMenuItemId = 'external-menu-item-id'),
        (r.Field = 'field'),
        (r.FieldId = 'field-id'),
        (r.FieldName = 'field-name'),
        (r.FilterLevels = 'filter-levels'),
        (r.FilterRangeMax = 'filter-range-max'),
        (r.FilterRangeMin = 'filter-range-min'),
        (r.FilterRangeNullOption = 'filter-range-null-option'),
        (r.FilterUpdateType = 'filter-update-type'),
        (r.FilterValues = 'filter-values'),
        (r.FontNameListItems = 'font-name-list-items'),
        (r.FormattedText = 'formatted-text'),
        (r.FunctionName = 'function-name'),
        (r.HierValSelectionModels = 'hierarchicalValueSelectionModels'),
        (r.HighlightedData = 'highlighted-data'),
        (r.HoverTupleInteraction = 'hover-tuple-interaction'),
        (r.IgnoreAliases = 'ignore-aliases'),
        (r.IgnoreSelection = 'ignore-selection'),
        (r.IncludeAllColumns = 'include-all-columns'),
        (r.InvalidAggFieldName = 'invalid-agg-field-name'),
        (r.InvalidDates = 'invalid-dates'),
        (r.InvalidFieldCaption = 'invalid-field-caption'),
        (r.InvalidFields = 'invalid-fields'),
        (r.InvalidValues = 'invalid-values'),
        (r.IsExcludeMode = 'is-exclude'),
        (r.IsExtensionDialog = 'is-extension-dialog'),
        (r.JoinDescription = 'join-description'),
        (r.LogicalTableId = 'logical-table-id'),
        (r.LogicalTableInfoList = 'logical-table-info-list'),
        (r.MaxHeight = 'max-height'),
        (r.MaxRows = 'max-rows'),
        (r.MaxWidth = 'max-width'),
        (r.MinHeight = 'min-height'),
        (r.MinWidth = 'min-width'),
        (r.PageRowCount = 'page-row-count'),
        (r.ParameterCaption = 'paremeter-caption'),
        (r.ParameterError = 'parameter-error'),
        (r.ParameterFieldName = 'parameter-field-name'),
        (r.ParameterInfo = 'parameter-info'),
        (r.ParameterInfos = 'parameter-infos'),
        (r.ParameterValue = 'parameter-value'),
        (r.PeriodType = 'period-type'),
        (r.QuantitativeDomain = 'quantitative-dmain'),
        (r.QuantRangeSelectionModels = 'quantativeRangeSelectionModels'),
        (r.RangeN = 'range-n'),
        (r.ReplaySpeed = 'replay-speed'),
        (r.SelectedData = 'selected-data'),
        (r.SelectedSheetNames = 'selected-sheet-names'),
        (r.Selection = 'selection'),
        (r.SelectionList = 'selection-list'),
        (r.SelectionUpdateType = 'selectionUpdateType'),
        (r.SelectTuplesInteraction = 'select-tuples-interaction'),
        (r.SendNotifications = 'send-notifications'),
        (r.SettingsValues = 'settings-values'),
        (r.SharedFilterSheets = 'shared-filter-sheets'),
        (r.SharedFiltersInfo = 'shared-filters-info'),
        (r.SheetIdentifier = 'sheet-identifier'),
        (r.SheetName = 'sheet-name'),
        (r.SheetPath = 'sheet-path'),
        (r.ShouldRefreshDS = 'should-refresh-ds'),
        (r.ShowDataTableFormat = 'show-data-table-format'),
        (r.State = 'state'),
        (r.StoryPointIndex = 'story-point-index'),
        (r.StoryPointInfo = 'story-point-info'),
        (r.SwitchToSheetName = 'switch-to-sheet-name'),
        (r.TargetPoint = 'target-point'),
        (r.TestConversionParameter = 'test-conversion-parameter'),
        (r.Text = 'formatted-text'),
        (r.TooltipContext = 'tooltip-context'),
        (r.UnderlyingDataTable = 'underlying-data-table'),
        (r.UnderlyingSummaryDataTable = 'underlying-summary-data-table'),
        (r.Url = 'url'),
        (r.UseTabDelimiters = 'use-tab-delimiters'),
        (r.ViewDataTableCacheId = 'view-data-table-cache-id'),
        (r.ViewDataTableId = 'view-data-table-id'),
        (r.VisualId = 'visual-id'),
        (r.VisualSpecification = 'visual-specification'),
        (r.VizAPIInputJson = 'vizapi-input-json'),
        (r.VizAPIStateWithDataModel = 'vizapi-state-with-data-model'),
        (r.VizAPIStateWarningMsg = 'vizapi-state-warning-msg'),
        (r.VizAPISVG = 'vizapi-svg'),
        (r.WorksheetName = 'worksheet-name'),
        (r.WorksheetFilters = 'worksheet-filters'),
        (r.ZoneIdsVisibilityMap = 'zone-ids-visibility-map')
    },
    5681: (e, t) => {
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((r = t.VerbId || (t.VerbId = {})).ActivateNextStoryPoint = 'activate-next-story-point'),
        (r.ActivatePreviousStoryPoint = 'activate-previous-story-point'),
        (r.ActivateSheet = 'activateSheet'),
        (r.ActivateStoryPoint = 'activate-story-point'),
        (r.AppendExternalMenuItem = 'append-external-menu-item'),
        (r.ApplyCategoricalFilter = 'categorical-filter'),
        (r.ApplyRangeFilter = 'range-filter'),
        (r.ApplyRelativeDateFilter = 'apply-relative-date-Filter'),
        (r.Authenticate = 'authenticate'),
        (r.BlockExtension = 'block-extension'),
        (r.ChangeParameterValue = 'change-parameter-value'),
        (r.ChangeSharedFilter = 'change-shared-filter'),
        (r.ClearFilter = 'clear-filter'),
        (r.ClearSelectedMarks = 'clear-selected-marks'),
        (r.CloseDialog = 'close-dialog'),
        (r.CreateAnnotation = 'create-annotation'),
        (r.DashboardCategoricalFilter = 'dashboard-categorical-filter'),
        (r.DisplayDialog = 'display-dialog'),
        (r.DownloadWorkbook = 'download-workbook'),
        (r.ExecuteExternalMenuItem = 'execute-external-menu-item'),
        (r.ExportCrosstab = 'export-crosstab'),
        (r.ExportCrosstabCsvDownload = 'export-crosstab-csv-download'),
        (r.ExportCrosstabExcelDownload = 'export-crosstab-excel-download'),
        (r.ExportData = 'export-data'),
        (r.ExportDataDownload = 'export-data-download'),
        (r.ExportImage = 'export-image'),
        (r.ExportPdf = 'export-pdf'),
        (r.ExportPdfDownload = 'export-pdf-download'),
        (r.ExportPowerpoint = 'export-powerpoint'),
        (r.ExportPowerpointDownload = 'export-powerpoint-download'),
        (r.FindParameter = 'find-parameter'),
        (r.GetActiveTables = 'get-active-tables'),
        (r.GetAllDataSources = 'get-all-data-sources'),
        (r.GetAnnotations = 'get-annotations'),
        (r.GetCategoricalDomain = 'get-categorical-domain'),
        (r.GetConnectionDescriptionSummaries = 'get-connection-description-summaries'),
        (r.GetCurrentSrc = 'get-current-src'),
        (r.GetCustomViews = 'get-custom-views'),
        (r.GetDashboardFilters = 'get-dashboard-filters'),
        (r.GetDataSource = 'get-datasource'),
        (r.GetDataSourceData = 'get-datasource-data'),
        (r.GetDataSources = 'get-data-sources'),
        (r.GetDataSummaryData = 'get-summary-data'),
        (r.GetDataSummaryDataReader = 'get-summary-data-reader'),
        (r.GetDataTableReaderPage = 'get-data-table-reader-page'),
        (r.GetEmbeddingAbstractQueryWithDataModel = 'get-embedding-abstract-query-with-data-model'),
        (r.GetEmbeddingClientInfo = 'get-embedding-client-info'),
        (r.GetVizStateWithDataModel = 'get-viz-state-with-data-model'),
        (r.GetExportCrosstabSheetMap = 'get-export-crosstab-sheet-map'),
        (r.GetExportPdfOptions = 'get-export-pdf-options'),
        (r.GetField = 'get-field'),
        (r.GetFieldAndDataSource = 'get-field-and-datasource'),
        (r.GetVisualSpecification = 'get-visual-specification'),
        (r.GetFilters = 'get-filters'),
        (r.GetFonts = 'get-fonts'),
        (r.GetHighlightedMarks = 'get-highlighted-marks'),
        (r.GetJoinDescription = 'get-join-description'),
        (r.GetLogicalTableData = 'get-logical-table-data'),
        (r.GetLogicalTableDataReader = 'get-logical-table-data-reader'),
        (r.GetLogicalTables = 'get-logical-tables'),
        (r.GetParametersForSheet = 'get-parameters-for-sheet'),
        (r.GetRangeDomain = 'get-range-domain'),
        (r.GetSelectedMarks = 'get-selected-marks'),
        (r.GetSharedFilter = 'get-shared-filter'),
        (r.GetUnderlyingData = 'get-underlying-data'),
        (r.GetUnderlyingTableData = 'get-underlying-table-data'),
        (r.GetUnderlyingTableDataReader = 'get-underlying-table-data-reader'),
        (r.GetUnderlyingTables = 'get-underlying-tables'),
        (r.HierarchicalFilter = 'hierachical-filter'),
        (r.InitializeExtension = 'initialize-extension'),
        (r.MoveAndResizeZones = 'move-and-resize-zones'),
        (r.RaiseHoverTupleNotification = 'raise-hover-tuple-notification'),
        (r.RaiseSelectTuplesNotification = 'raise-select-tuples-notification'),
        (r.Redo = 'redo'),
        (r.RefreshDataSource = 'refresh-data-source'),
        (r.ReleaseDataTableReader = 'release-data-table-reader'),
        (r.RemoveAnnotation = 'remove-annotation'),
        (r.RemoveCustomView = 'remove-custom-view'),
        (r.RemoveExternalMenuItem = 'remove-external-menu-item'),
        (r.RenameExternalMenu = 'rename-external-menu'),
        (r.ReplayAnimation = 'replay-animation'),
        (r.RevertStoryPoint = 'revert-story-point'),
        (r.RevertWorkbook = 'revert-workbook'),
        (r.SaveExtensionSettings = 'save-extension-settings'),
        (r.SaveWorkbookAsCustomView = 'save-workbook-as-custom-view'),
        (r.SelectByValue = 'select-by-value'),
        (r.SetActiveCustomViewAsDefault = 'set-active-custom-view-as-default'),
        (r.SetAutoUpdate = 'set-auto-update'),
        (r.SetClickThrough = 'set-click-through'),
        (r.SetVizStateWithDataModel = 'set-viz-state-with-data-model'),
        (r.SetSheetSize = 'set-sheet-size'),
        (r.SetZoneVisibility = 'set-zone-visibility'),
        (r.Share = 'share'),
        (r.ShowCustomView = 'show-custom-view'),
        (r.TestConversionVerb = 'test-conversion-verb'),
        (r.Undo = 'undo'),
        (r.UpdateCustomView = 'update-custom-view'),
        (r.VizAPI = 'viz-api')
    },
    967: (e, t) => {
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((r = t.AskDataOptionNames || (t.AskDataOptionNames = {})).token = 'token'),
        (r.origin = 'origin'),
        (r.showEmbed = 'showEmbed'),
        (r.showPin = 'showPin'),
        (r.showSave = 'showSave'),
        (r.showShare = 'showShare'),
        (r.debug = ':jsdebug'),
        (r.ApiID = ':apiID'),
        (r.ApiExternalVersion = ':apiExternalVersion'),
        (r.ApiInternalVersion = ':apiInternalVersion'),
        (r.AskDataWebComponent = ':askDataWebComponent')
    },
    2912: (e, t) => {
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((r = t.PulseOptionNames || (t.PulseOptionNames = {})).embed = 'embed'),
        (r.token = 'token'),
        (r.disableExploreFilter = 'disableExploreFilter'),
        (r.ApiExternalVersion = ':apiExternalVersion'),
        (r.ApiInternalVersion = ':apiInternalVersion'),
        (r.PulseWebComponent = ':pulseWebComponent')
    },
    8075: (e, t) => {
      var r, n, i
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e) {
          ;(e.ONE = '1'),
            (e.ALERTS = ':alerts'),
            (e.ALIAS = 'alias'),
            (e.ALLOW_DEFERRED_BOOTSTRAP = ':allowDeferredBootstrap'),
            (e.ALLOW_AUTOGEN_WORKSHEET_PHONE_LAYOUTS = 'allowAutogenWorksheetPhoneLayouts'),
            (e.API_ID = ':apiID'),
            (e.APP = ':app'),
            (e.ATTACHMENT = 'attachment'),
            (e.IS_IPAD_APP = 'app'),
            (e.ANIMATE_TRANSITION = ':animate_transition'),
            (e.ASCENDING = 'ascending'),
            (e.AUTHENTICATION = 'authentication'),
            (e.ATTRIBUTES = 'attributes'),
            (e.AUTHORING_SHEET = ':authSheet'),
            (e.AXIS = 'axis'),
            (e.BOOTSTRAP_WHEN_NOTIFIED = ':bootstrapWhenNotified'),
            (e.BROWSER_BACK_BUTTON_UNDO = ':browserBackButtonUndo'),
            (e.BROWSER_RENDERING_ON = 'isBrowserRendering'),
            (e.BROWSER_RENDERING_THRESHOLD = 'browserRenderingThreshold'),
            (e.CHARSET = 'charset'),
            (e.CLIENT_DIMENSION = 'clientDimension'),
            (e.CLIENT_IP = 'client_ip'),
            (e.CLIENT_NUM = 'clientNum'),
            (e.COLON_EMBEDDED = ':embedded'),
            (e.COLON_MOBILE = ':mobile'),
            (e.COLON_DEEP_LINKING_DISABLED = ':deepLinkingDisabled'),
            (e.COLON_WATERMARK = ':watermark'),
            (e.COMMENTS = ':comments'),
            (e.COMMENTING_ENABLED = ':commentingEnabled'),
            (e.COMMENTING_MENTIONS_ENABLED = ':commentingMentions'),
            (e.CONNECTION = 'connection'),
            (e.CREATED_BY_FEATURE = 'createdByFeature'),
            (e.CRYPTED_PASSWORD = 'crypted'),
            (e.CSSDEBUG = ':cssdebug'),
            (e.CSV = 'csv'),
            (e.CUSTOM_VIEWS = ':customViews'),
            (e.CV = ':cv'),
            (e.CV_ID = 'cvId'),
            (e.DASHBOARD_PORT_SIZE = 'dashboardPortSize'),
            (e.DATA_DETAILS = ':dataDetails'),
            (e.DATASOURCE = 'datasource'),
            (e.DEBUG = ':debug'),
            (e.DELAY = ':delay'),
            (e.DEPTH = 'depth'),
            (e.DEVICE_TYPE = ':device'),
            (e.DEVICE_PIXEL_RATIO = 'devicePixelRatio'),
            (e.DEVICE_PREVIEW_MODE = ':devicepreviewmode'),
            (e.DIMENSIONS = ':dimensions'),
            (e.DISABLE_SHARED_SESSIONS = ':disable_shared_sessions'),
            (e.DISABLE_URL_ACTIONS_POPUPS = ':disableUrlActionsPopups'),
            (e.DIRECTION = 'direction'),
            (e.DISPLAY_OVERLAY = ':display_overlay'),
            (e.DISPLAY_SHARE = ':display_share'),
            (e.DISPLAY_SPINNER = ':display_spinner'),
            (e.DISPLAY_STATIC_IMAGE = ':display_static_image'),
            (e.DISPLAY_TABS = 'display_tabs'),
            (e.DISPLAY_VIEW_COUNT = ':display_count'),
            (e.IGNORE_STICKY_SESSION = ':ignore_sticky_session'),
            (e.INCREMENT_VIEW_COUNT = ':increment_view_count'),
            (e.DOCMODE = 'docmode'),
            (e.DOMAIN = 'domain'),
            (e.DO_WORK = 'do_work'),
            (e.DX = 'dx'),
            (e.DY = 'dy'),
            (e.EDIT_DATA_ALERT = ':editDataAlert'),
            (e.EMBED = ':embed'),
            (e.EMBEDDED = 'embedded'),
            (e.ENCRYPTED = 'encrypted'),
            (e.API_EXTERNAL_VERSION = ':apiExternalVersion'),
            (e.API_INTERNAL_VERSION = ':apiInternalVersion'),
            (e.EXCLUDE = 'exclude'),
            (e.EXPORT_FORMAT = ':export_format'),
            (e.FIELDNAME = 'fieldname'),
            (e.FIELD_NAME = 'field_name'),
            (e.FIELD_SEP = 'field_sep'),
            (e.FILE = 'file'),
            (e.FILTER_TILE_SIZE = 'filterTileSize'),
            (e.FN = 'fn'),
            (e.FOCUS = 'focus'),
            (e.FORCE_CACHE = 'force_cache'),
            (e.FORMAT = 'format'),
            (e.FORMAT_DATA_VALUE_LOCALLY = 'formatDataValueLocally'),
            (e.FROM_WG = ':from_wg'),
            (e.GRAPHQL_DATABASE_ID = ':graphQLDatabaseId'),
            (e.GRAPHQL_TABLE_ID = ':graphQLTableId'),
            (e.GUID = ':guid'),
            (e.H = 'h'),
            (e.HIDDEN = 'hidden'),
            (e.HIDE_CLOSE_BUTTON = ':hideCloseButton'),
            (e.HIDE_EDIT_BUTTON = ':hideEditButton'),
            (e.HIDE_EDIT_IN_DESKTOP_BUTTON = ':hideEditInDesktopButton'),
            (e.HIGH_DPI = ':highdpi'),
            (e.IMAGE_SIZE_LIMIT = 'imageSizeLimit'),
            (e.TRANSPARENT_LINE_MARKS_LIMIT = 'transparentLineMarkLimit'),
            (e.CLIENT_RENDER_PIXEL_LIMIT = 'clientRenderPixelLimit'),
            (e.IN = 'in'),
            (e.INSTANCE_ID = ':iid'),
            (e.IS_GUEST_REDIRECT_FROM_VIZPORTAL = ':isGuestRedirectFromVizportal'),
            (e.IS_MARK_ANIMATION_ENABLED = 'isMarkAnimationEnabled'),
            (e.IS_VIZPORTAL = ':isVizPortal'),
            (e.INPUT_ = 'input_string'),
            (e.JSDEBUG = ':jsdebug'),
            (e.JSON = 'json'),
            (e.JSON_ONLY = ':jsonOnly'),
            (e.KEEPFILE = 'keepfile'),
            (e.KEY = 'key'),
            (e.LANGUAGE = 'language'),
            (e.LANGUAGE_REQUESTED = ':language'),
            (e.LINKTARGET = ':linktarget'),
            (e.LOAD_ORDER_ID = ':loadOrderID'),
            (e.LOAD_NEWEST_REVISION = ':loadNewestRevision'),
            (e.LOCAL_PATHS = ':localPaths'),
            (e.LOCALE = 'locale'),
            (e.LOCATION_ID = 'locationid'),
            (e.LOCATION_TYPE = 'locationtype'),
            (e.WORKBOOK_LOCALE = 'workbookLocale'),
            (e.MAXROWS = 'maxrows'),
            (e.MAX_AGE = 'maxAge'),
            (e.MAX_ROWS = 'maxRows'),
            (e.METHOD = 'method'),
            (e.MOBILE = 'mobile'),
            (e.MODIFIER = 'modifier'),
            (e.NAME = 'name'),
            (e.NAV_TYPE = 'navType'),
            (e.NAV_SRC = 'navSrc'),
            (e.NOATTACHMENT = 'no-attachment'),
            (e.NO_OVERWRITE = 'no_overwrite'),
            (e.OPEN_AUTHORING_IN_TOP_WINDOW = ':openAuthoringInTopWindow'),
            (e.OPENID_HD = ':openid_hd'),
            (e.OPENID_LOGIN_HINT = ':openid_login_hint'),
            (e.OAUTHREQUEST = 'oauthrequest'),
            (e.OAUTH_CREDENTIAL_IDS = 'oauth_credential_ids'),
            (e.OFFLINE_MODE = ':offlinemode'),
            (e.ORIGIN = ':origin'),
            (e.OVERLAY = ':overlay'),
            (e.P = 'p'),
            (e.PATH = 'path'),
            (e.PANE_RESOLVER_X = 'paneResolverX'),
            (e.PANE_RESOLVER_Y = 'paneResolverY'),
            (e.PARAM = 'param'),
            (e.PARENT_ID = 'parent_id'),
            (e.PASSWORD = 'password'),
            (e.PATTERN = 'pattern'),
            (e.PIXEL_RATIO = ':pixelratio'),
            (e.PREFIX = ':prefix'),
            (e.PREVIEW = ':preview'),
            (e.PRIMARY_CONTENT_URL = 'primary_content_url'),
            (e.PROJECT = 'project'),
            (e.PROTOCOL = 'protocol'),
            (e.PSEUDO = ':pseudo'),
            (e.QUERY = 'query'),
            (e.R = 'r'),
            (e.RANGE_TYPE = 'range_type'),
            (e.RECORD_SEP = 'record_sep'),
            (e.RECORD_CLIENT_PERFORMANCE = ':record_client_performance'),
            (e.RECORD_PERFORMANCE = ':record_performance'),
            (e.RECOVER_OLD_SESSION_ID = ':recover_old_session_id'),
            (e.RECOVER_SESSION_STATE_TICKETS = ':recover_session_state_tickets'),
            (e.REFRESH = ':refresh'),
            (e.REFRESHUNMODIFIED = ':refreshunmodified'),
            (e.REGION = 'region'),
            (e.RELOAD_ON_CUSTOM_VIEW_SAVE = ':reloadOnCustomViewSave'),
            (e.RENDER = ':render'),
            (e.RENDER_MAPS_CLIENT_SIDE = 'renderMapsClientSide'),
            (e.RETRY = ':retry'),
            (e.REUSE = 'reuse'),
            (e.REUSE_FOREVER = 'reuse_forever'),
            (e.REVERT = ':revert'),
            (e.SAVE_DB_PASSWORDS = 'save_db_passwords'),
            (e.SELECT_X = 'select_x'),
            (e.SELECT_Y = 'select_y'),
            (e.SESSION_FEATURE_PREFIX = ':ff_'),
            (e.SESSION_FLAGS = ':session_feature_flags'),
            (e.SHARE_BUTTON = 'share_button'),
            (e.SHEET_ID = 'sheet_id'),
            (e.SHARED = 'shared'),
            (e.SHOWALL = 'showall'),
            (e.SHOW_APP_BANNER = ':showAppBanner'),
            (e.SHOW_ASK_DATA = ':showAskData'),
            (e.SHOW_PARAMS = 'showParams'),
            (e.SHOW_SHARE_OPTIONS = ':showShareOptions'),
            (e.SIZE = ':size'),
            (e.SOURCE = 'source'),
            (e.STATE = 'state'),
            (e.STICKY_SESSION_KEY = 'stickySessionKey'),
            (e.SUBSCRIPTIONS = ':subscriptions'),
            (e.SUMMARY = 'summary'),
            (e.SUPPRESS_DEFAULT_EDIT_BEHAVIOR = ':suppressDefaultEditBehavior'),
            (e.SYNC_SESSION = ':sync_session'),
            (e.SYNC_SESSION_STATE = 'sync_session_state'),
            (e.TABS = ':tabs'),
            (e.TARGET = 'target'),
            (e.TARGET_SITE = 'target_site'),
            (e.TOOLBAR = ':toolbar'),
            (e.TOOLTIP = ':tooltip'),
            (e.TS = 'ts'),
            (e.UNDERLYING_TABLE_ID = 'underlying_table_id'),
            (e.UNDERLYING_TABLE_CAPTION = 'underlying_table_caption'),
            (e.UPDATE_TYPE = 'update_type'),
            (e.USE_GUEST = ':useGuest'),
            (e.USE_INLINE_IMAGES = 'use_inline_images'),
            (e.USERAGENT = 'useragent'),
            (e.USERNAME = 'username'),
            (e.VALUE = 'value'),
            (e.VERBOSE_MODE = 'verboseMode'),
            (e.VIEW_ID = 'views_id'),
            (e.VIZ_SNAPSHOT_ID = 'viz_snapshot_id'),
            (e.VW = ':vw'),
            (e.W = 'w'),
            (e.WORKSHEET_PORT_SIZE = 'worksheetPortSize'),
            (e.WATERMARK = 'watermark'),
            (e.WATERMARK_MARGIN = ':watermark_margin'),
            (e.WB = ':wb'),
            (e.WHICH = 'which'),
            (e.X = 'x'),
            (e.Y = 'y'),
            (e.ZID = 'zid'),
            (e.ZONE_ID = 'zone_id'),
            (e.KEYCHAIN_VERSION = 'keychain_version'),
            (e.DATASOURCE_ID = 'datasource_id'),
            (e.DATASOURCE_NAME = 'datasource_name'),
            (e.LENS_ID = 'lens_id'),
            (e.WIDTH = 'width'),
            (e.HEIGHT = 'height'),
            (e.LAYOUT_VIEWS = 'views'),
            (e.LAYOUT_MENUS = 'menus'),
            (e.LAYOUT_GEOMETRY = 'geometry'),
            (e.LAYOUT_PAGES = 'pages'),
            (e.LAYOUT_CACHEURL = 'cacheurl'),
            (e.LAYOUT_SHEET = 'sheet'),
            (e.LAYOUT_DEPTH = 'depth')
        })(r || (r = {})),
        (function (e) {
          e.SHOW_VIZ_HOME = ':showVizHome'
        })(n || (n = {})),
        ((i = t.VizOptionNames || (t.VizOptionNames = {})).Size = ':size'),
        (i.Embed = ':embed'),
        (i.ApiInternalVersion = ':apiInternalVersion'),
        (i.ApiExternalVersion = ':apiExternalVersion'),
        (i.ShowVizHome = ':showVizHome'),
        (i.Jsdebug = ':jsdebug'),
        (i.BootstrapWhenNotified = ':bootstrapWhenNotified'),
        (i.NavType = 'navType'),
        (i.NavSrc = 'navSrc'),
        (i.debug = ':jsdebug'),
        (i.ApiID = ':apiID'),
        (i.disableUrlActionsPopups = ':disableUrlActionsPopups'),
        (i.hideTabs = ':tabs'),
        (i.toolbar = ':toolbar'),
        (i.device = ':device'),
        (i.instanceIdToClone = ':iid'),
        (i.touchOptimize = 'mobile'),
        (i.hideEditButton = ':hideEditButton'),
        (i.hideEditInDesktopButton = ':hideEditInDesktopButton'),
        (i.suppressDefaultEditBehavior = ':suppressDefaultEditBehavior'),
        (i.hideCloseButton = ':hideCloseButton')
    },
    550: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(2541),
        i = r(4695),
        a = r(3475),
        o = r(7443),
        s = r(3590),
        l = (function () {
          function e(e, t, r) {
            ;(this.thisWindow = e), (this.otherWindow = t), (this.otherWindowOrigin = r)
          }
          return (
            (e.prototype.startListening = function () {
              var e = this
              if (!this.unregisterFunction) {
                var t = this.onMessageReceived.bind(this)
                this.thisWindow.addEventListener('message', t, !0),
                  (this.unregisterFunction = function () {
                    return e.thisWindow.removeEventListener('message', t, !0)
                  })
              }
            }),
            (e.prototype.stopListening = function () {
              this.unregisterFunction && (this.unregisterFunction(), (this.unregisterFunction = void 0))
            }),
            (e.prototype.setInitializeMessageHandler = function (e) {
              this.initializeMessageHandler = e
            }),
            (e.prototype.setCommandResponseMessageHandler = function (e) {
              this.commandResponseMessageHandler = e
            }),
            (e.prototype.setCommandMessageHandler = function (e) {
              this.commandMessageHandler = e
            }),
            (e.prototype.setNotificationMessageHandler = function (e) {
              this.notificationMessageHandler = e
            }),
            (e.prototype.setHandshakeMessageHandler = function (e) {
              this.handshakeMessageHandler = e
            }),
            (e.prototype.prepareInitializationMessage = function (e, t, r) {
              var i = {
                msgGuid: n.raw(),
                msgType: s.MessageType.Initialize,
                crossFrameVersion: t,
                apiVersion: e,
                options: r,
              }
              return this.prepareMessage(i)
            }),
            (e.prototype.prepareCommandMessage = function (e, t) {
              var r = { msgGuid: n.raw(), msgType: s.MessageType.Command, verbId: e, parameters: t }
              return this.prepareMessage(r)
            }),
            (e.prototype.prepareCommandResponseMessage = function (e, t, r) {
              var i = { msgGuid: n.raw(), msgType: s.MessageType.CommandResponse, commandGuid: e, data: t, error: r }
              return r && (i.error = JSON.parse(JSON.stringify(r))), this.prepareMessage(i)
            }),
            (e.prototype.prepareNotificationMessage = function (e, t) {
              var r = { msgGuid: n.raw(), msgType: s.MessageType.Notification, notificationId: e, data: t }
              return this.prepareMessage(r)
            }),
            (e.prototype.prepareAckMessage = function () {
              var e = { msgGuid: n.raw(), msgType: s.MessageType.Ack, platformVersion: i.INTERNAL_CONTRACT_VERSION }
              return this.prepareMessage(e)
            }),
            (e.prototype.prepareMessage = function (e) {
              if (!this.otherWindow || !this.otherWindowOrigin)
                throw 'Other window not initialized, cannot dispatch messages'
              return new a.CrossFramePreparedMessage(e, this.otherWindow, this.otherWindowOrigin)
            }),
            (e.prototype.onMessageReceived = function (e) {
              if ((!this.otherWindow || e.source === this.otherWindow) && e.data) {
                var t = e.data
                if (o.isMessage(t))
                  switch (t.msgType) {
                    case s.MessageType.Initialize:
                      if (!o.isInitMessage(t) || !this.initializeMessageHandler) return
                      this.initializeMessageHandler(t, e.source)
                      break
                    case s.MessageType.CommandResponse:
                      if (!o.isCommandResponseMessage(t) || !this.commandResponseMessageHandler) return
                      this.commandResponseMessageHandler(t, e.source)
                      break
                    case s.MessageType.Command:
                      if (!o.isCommandMessage(t) || !this.commandMessageHandler) return
                      this.commandMessageHandler(t, e.source)
                      break
                    case s.MessageType.Notification:
                      if (!o.isNotificationMessage(t) || !this.notificationMessageHandler) return
                      this.notificationMessageHandler(t, e.source)
                      break
                    case s.MessageType.Handshake:
                      if (!o.isHandshakeMessage(t) || !this.handshakeMessageHandler) return
                      this.handshakeMessageHandler(t, e.source)
                  }
              }
            }),
            (e.prototype.setOtherWindow = function (e) {
              this.otherWindow = e
            }),
            (e.prototype.setOtherWindowOrigin = function (e) {
              this.otherWindowOrigin = e
            }),
            e
          )
        })()
      t.CrossFrameMessenger = l
    },
    3475: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e, t, r) {
          ;(this._message = e), (this._target = t), (this._origin = r)
        }
        return (
          Object.defineProperty(e.prototype, 'messageGuid', {
            get: function () {
              return this._message.msgGuid
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.send = function () {
            return this._target.postMessage(this._message, this._origin), this
          }),
          e
        )
      })()
      t.CrossFramePreparedMessage = r
    },
    7443: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(2541),
        i = r(5879),
        a = r(3590),
        o = new Set([
          i.NotificationId.EditButtonClicked,
          i.NotificationId.EditInDesktopButtonClicked,
          i.NotificationId.WorkbookPublished,
          i.NotificationId.WorkbookReadyToClose,
          i.NotificationId.ReadyToReceiveAuthToken,
        ])
      function s(e) {
        if (!e) return !1
        var t = e
        return !(
          !(t && t.msgGuid && t.msgType) ||
          !n.isGuid(t.msgGuid) ||
          'string' != typeof t.msgType ||
          [
            a.MessageType.Command,
            a.MessageType.CommandResponse,
            a.MessageType.Initialize,
            a.MessageType.Notification,
            a.MessageType.Handshake,
          ].indexOf(t.msgType) < 0
        )
      }
      function l(e) {
        if (!e) return !1
        var t = e
        return (
          'object' == typeof t && 'number' == typeof t.fix && 'number' == typeof t.minor && 'number' == typeof t.major
        )
      }
      ;(t.isMessage = s),
        (t.isVersion = l),
        (t.isInitMessage = function (e) {
          if (!s(e)) return !1
          var t = e
          return !!(
            t.msgType === a.MessageType.Initialize &&
            t.apiVersion &&
            l(t.apiVersion) &&
            t.crossFrameVersion &&
            l(t.crossFrameVersion)
          )
        }),
        (t.isCommandResponseMessage = function (e) {
          if (!s(e)) return !1
          var t = e
          return !(t.msgType !== a.MessageType.CommandResponse || !n.isGuid(t.commandGuid) || (!t.data && !t.error))
        }),
        (t.isCommandMessage = function (e) {
          if (!s(e)) return !1
          var t = e
          return !(
            t.msgType !== a.MessageType.Command ||
            !t.parameters ||
            'object' != typeof t.parameters ||
            !t.verbId ||
            'string' != typeof t.verbId
          )
        }),
        (t.isNotificationMessage = function (e) {
          if (!s(e)) return !1
          var t = e
          return !(
            t.msgType !== a.MessageType.Notification ||
            (!t.data && !o.has(t.notificationId)) ||
            !t.notificationId ||
            'string' != typeof t.notificationId
          )
        }),
        (t.isHandshakeMessage = function (e) {
          return !!s(e) && e.msgType === a.MessageType.Handshake
        })
    },
    3590: (e, t) => {
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((r = t.MessageType || (t.MessageType = {})).Initialize = 'initialize'),
        (r.Notification = 'notification'),
        (r.Command = 'command'),
        (r.CommandResponse = 'command-response'),
        (r.Handshake = 'v-handshake'),
        (r.Ack = 'v-ack')
    },
    7104: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e() {}
        return (
          (e.prototype.upgradeExecuteCall = function (e, t) {
            return { verb: e, parameters: t }
          }),
          (e.prototype.downgradeExecuteReturn = function (e) {
            return e
          }),
          (e.prototype.downgradeNotification = function (e) {
            return e
          }),
          e
        )
      })()
      t.IdentityVersionConverter = r
    },
    9415: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e, t, r, n, i) {
          if (
            ((this._externalMajorVersion = e),
            (this._platformMajorVersion = t),
            (this._upgradeExecuteTranslations = r),
            (this._downgradeExecuteTranslations = n),
            (this._downgradeNotificationTranslations = i),
            this._externalMajorVersion > this._platformMajorVersion)
          )
            throw new Error(
              'Cannot convert between external version ' +
                this._externalMajorVersion +
                ' and ' +
                this._platformMajorVersion,
            )
        }
        return (
          (e.fromData = function (e, t, r, n, i) {
            return new this(e.major, t.major, r, n, i)
          }),
          (e.prototype.upgradeExecuteCall = function (e, t) {
            for (var r = { verb: e, parameters: t }, n = 0, i = this._upgradeExecuteTranslations; n < i.length; n++)
              r = (0, i[n])(r.verb, r.parameters)
            return r
          }),
          (e.prototype.downgradeExecuteReturn = function (e) {
            for (var t = e, r = 0, n = this._downgradeExecuteTranslations; r < n.length; r++) t = (0, n[r])(t)
            return t
          }),
          (e.prototype.downgradeNotification = function (e) {
            for (var t = e, r = 0, n = this._downgradeNotificationTranslations; r < n.length; r++) t = (0, n[r])(t)
            return t
          }),
          e
        )
      })()
      t.StackingVersionConverter = r
    },
    9394: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(7104),
        i = r(9415),
        a = r(5039)
      function o(e, t) {
        return e.major === t.major && e.minor === t.minor
      }
      function s(e, t, r, a, s) {
        var u = e.major,
          c = e.minor,
          d = t.major
        if (u > d)
          throw new Error(
            'External version must be less than or equal to platform version.\n    externalMajorVersion=' +
              u +
              ' platformMajorVersion=' +
              d,
          )
        if (o(e, t)) return new n.IdentityVersionConverter()
        var p = l(u, d, c, r),
          h = l(u, d, c, a),
          m = l(u, d, c, s)
        return h.reverse(), m.reverse(), i.StackingVersionConverter.fromData(e, t, p, h, m)
      }
      function l(e, t, r, n) {
        for (var i = [], a = e; a <= t; a++)
          if (a in n)
            for (var o = a === e ? r : 0, s = u(Object.keys(n[a])), l = o; l <= s; l++)
              l in n[a] && i.push.apply(i, n[a][l])
        return i
      }
      function u(e) {
        return e
          .map(function (e) {
            return Number(e)
          })
          .reduce(function (e, t) {
            return e > t ? e : t
          })
      }
      ;(t.VersionLessThan = function (e, t) {
        return !(e.major > t.major) && (e.major < t.major || e.minor < t.minor)
      }),
        (t.VersionEqualTo = o),
        (t.ExecuteMinorUpgrades = { 1: { 9: [] } }),
        (t.ExecuteMinorDowngrades = { 1: { 5: [a.DowngradeWorksheetNames], 9: [] } }),
        (t.NotificationMinorDowngrades = { 1: { 9: [], 10: [a.DowngradeFlipboardZoneID] } }),
        (t.CreateVersionConverter = function (e, r) {
          return s(e, r, t.ExecuteMinorUpgrades, t.ExecuteMinorDowngrades, t.NotificationMinorDowngrades)
        }),
        (t.CreateVersionConverterWithTranslators = s),
        (t.GetMaximumMinorIndex = u)
    },
    5039: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(5879)
      ;(t.DowngradeWorksheetNames = function (e) {
        var t = e.result
        return (
          void 0 !== t.extensionDashboardInfo &&
            t.extensionDashboardInfo.zones.forEach(function (e) {
              e.sheetInfo && (e.name = e.sheetInfo.name)
            }),
          e
        )
      }),
        (t.DowngradeFlipboardZoneID = function (e) {
          if (e.notificationId === n.NotificationId.SelectedMarksChanged) {
            var t = e.data
            void 0 === t.flipboardZoneID && (t.flipboardZoneID = 0)
          }
          return e
        })
    },
    408: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e() {}
        return (
          (e.prototype.downgradeExecuteCall = function (e, t) {
            return { verb: e, parameters: t }
          }),
          (e.prototype.upgradeExecuteReturn = function (e, t, r) {
            return e
          }),
          (e.prototype.upgradeNotification = function (e) {
            return e
          }),
          e
        )
      })()
      t.ExternalIdentityVersionConverter = r
    },
    8241: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e, t, r, n, i) {
          if (
            ((this._externalVersion = e),
            (this._platformVersion = t),
            (this._downgradeExecuteCallTranslations = r),
            (this._upgradeExecuteReturnTranslations = n),
            (this._upgradeNotificationTranslations = i),
            this._externalVersion.major > this._platformVersion.major)
          )
            throw new Error(
              'Cannot convert between external version ' +
                this._externalVersion.major +
                '\n      and ' +
                this._platformVersion.major,
            )
        }
        return (
          (e.prototype.downgradeExecuteCall = function (e, t) {
            for (
              var r = { verb: e, parameters: t }, n = 0, i = this._downgradeExecuteCallTranslations;
              n < i.length;
              n++
            )
              r = (0, i[n])(r.verb, r.parameters)
            return r
          }),
          (e.prototype.upgradeExecuteReturn = function (e, t, r) {
            for (var n = e, i = 0, a = this._upgradeExecuteReturnTranslations; i < a.length; i++) n = (0, a[i])(n, t, r)
            return n
          }),
          (e.prototype.upgradeNotification = function (e) {
            for (var t = e, r = 0, n = this._upgradeNotificationTranslations; r < n.length; r++) t = (0, n[r])(t)
            return t
          }),
          e
        )
      })()
      t.ExternalStackingVersionConverter = r
    },
    3526: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(9394),
        i = r(408),
        a = r(8241),
        o = r(7354)
      function s(e, t, r, o, s) {
        var u = e.major,
          c = t.major,
          d = t.minor
        if (u > c)
          throw new Error(
            'External version must be less than or equal to platform version.\n    externalMajorVersion=' +
              u +
              ' platformMajorVersion=' +
              c,
          )
        if (u < c || n.VersionEqualTo(e, t)) return new i.ExternalIdentityVersionConverter()
        var p = l(c, d, r),
          h = l(c, d, o),
          m = l(c, d, s)
        return p.reverse(), new a.ExternalStackingVersionConverter(e, t, p, h, m)
      }
      function l(e, t, r) {
        var i = []
        if (e in r)
          for (var a = t, o = n.GetMaximumMinorIndex(Object.keys(r[e])), s = a; s <= o; s++)
            s in r[e] && i.push.apply(i, r[e][s])
        return i
      }
      ;(t.ExecuteMinorDowngradeCallExternal = {
        1: { 9: [], 13: [o.DowngradeUnderlyingTableDataAsync, o.DowngradeLogicalTableDataAsync] },
      }),
        (t.ExecuteMinorUpgradeReturnExternal = {
          1: { 9: [o.UpgradeDataTableTypes], 29: [o.UpgradeDataTableRowsAndColumns] },
        }),
        (t.ExecuteMinorUpgradeNotification = { 1: { 9: [] } }),
        (t.CreateExternalCompatibleVersionConverter = function (e, r) {
          return s(
            e,
            r,
            t.ExecuteMinorDowngradeCallExternal,
            t.ExecuteMinorUpgradeReturnExternal,
            t.ExecuteMinorUpgradeNotification,
          )
        }),
        (t.CreateExternalCompatibleVersionConverterWithTranslators = s)
    },
    7354: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4695)
      function i(e) {
        void 0 !== e &&
          void 0 !== e.dataTable &&
          Array.isArray(e.dataTable) &&
          e.dataTable.forEach(function (t) {
            t.forEach(function (t, r) {
              var i = t.value
              null !== i && (t.value = n.DataTypeConverter.convertValueAsStringToValue(i, e.headers[r].dataType))
            })
          })
      }
      function a(e, t) {
        if (t[n.ParameterId.LogicalTableId] !== n.ApiShowDataTableSentinel.SingleTableId)
          throw new Error('Invalid logical table id passed to ' + e + '.')
      }
      ;(t.UpgradeDataTableTypes = function (e, t, r) {
        if (!e) return e
        var n = e.result
        if (void 0 !== n.data && void 0 !== n.isSummary) return i(n.data), e
        var a = e.result
        return void 0 !== a.data && Array.isArray(a.data)
          ? (a.data.forEach(function (e) {
              i(e)
            }),
            e)
          : e
      }),
        (t.DowngradeUnderlyingTableDataAsync = function (e, t) {
          return (
            e === n.VerbId.GetUnderlyingTableData && (a(e, t), (e = n.VerbId.GetUnderlyingData)),
            { verb: e, parameters: t }
          )
        }),
        (t.DowngradeLogicalTableDataAsync = function (e, t) {
          return (
            e === n.VerbId.GetLogicalTableData && (a(e, t), (e = n.VerbId.GetDataSourceData)),
            { verb: e, parameters: t }
          )
        }),
        (t.UpgradeDataTableRowsAndColumns = function (e, t, r) {
          return (
            (function (e) {
              return e === n.VerbId.GetDataSummaryData
            })(t) &&
              r[n.ParameterId.MaxRows] &&
              (e = (function (e, t) {
                var r = e.result
                return r.data && Array.isArray(r.data.dataTable)
                  ? (t > 0 && t < r.data.dataTable.length && (r.data.dataTable.length = t), e)
                  : e
              })(e, r[n.ParameterId.MaxRows])),
            (function (e) {
              return (
                e === n.VerbId.GetDataSummaryData ||
                e === n.VerbId.GetUnderlyingTableData ||
                e === n.VerbId.GetLogicalTableData ||
                e === n.VerbId.GetDataSourceData ||
                e === n.VerbId.GetUnderlyingData
              )
            })(t) &&
              r[n.ParameterId.ColumnsToIncludeById] &&
              (e = (function (e, t) {
                if (0 === t.length) return e
                var r = e.result
                if (!r.data || !Array.isArray(r.data.dataTable) || !Array.isArray(r.data.headers)) return e
                var n = r.data.headers.filter(function (e, r) {
                  return t.find(function (t) {
                    return t === e.fieldName
                  })
                })
                r.data.dataTable.forEach(function (e, t) {
                  r.data.dataTable[t] = e.filter(function (e, t) {
                    return (
                      -1 !==
                      n.findIndex(function (e) {
                        return e.index === t
                      })
                    )
                  })
                })
                var i = 0
                return (
                  (r.data.headers = n.map(function (e) {
                    return (e.index = i++), e
                  })),
                  e
                )
              })(e, r[n.ParameterId.ColumnsToIncludeById])),
            e
          )
        })
    },
    4007: (e, t, r) => {
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = r(8395)
      ;(t.ApiVersion = i.ApiVersion), n(r(241))
      var a = r(8024)
      t.CrossFrameDispatcher = a.CrossFrameDispatcher
      var o = r(6411)
      t.DataSource = o.DataSource
      var s = r(2336)
      t.ExternalToInternalEnumMappings = s.ExternalToInternalEnumMappings
      var l = r(5126)
      t.InternalToExternalEnumMappings = l.InternalToExternalEnumMappings
      var u = r(3682)
      t.EventListenerManager = u.EventListenerManager
      var c = r(2131)
      t.Field = c.Field
      var d = r(2913)
      t.CustomViewImpl = d.CustomViewImpl
      var p = r(4657)
      t.DashboardImpl = p.DashboardImpl
      var h = r(3333)
      t.DashboardObjectImpl = h.DashboardObjectImpl
      var m = r(1234)
      t.DataSourceImpl = m.DataSourceImpl
      var y = r(6560)
      t.ParameterImpl = y.ParameterImpl
      var g = r(1878)
      t.SheetImpl = g.SheetImpl
      var f = r(6749)
      t.SheetInfoImpl = f.SheetInfoImpl
      var b = r(4217)
      t.SingleEventManagerImpl = b.SingleEventManagerImpl
      var v = r(8194)
      t.StoryImpl = v.StoryImpl
      var I = r(757)
      t.StoryPointImpl = I.StoryPointImpl
      var S = r(8519)
      t.StoryPointInfoImpl = S.StoryPointInfoImpl
      var T = r(3826)
      t.WorkbookImpl = T.WorkbookImpl
      var A = r(928)
      t.WorksheetImpl = A.WorksheetImpl
      var _ = r(2391)
      ;(t.Point = _.Point), n(r(7458)), n(r(9887))
      var w = r(6292)
      t.ClientInfoServiceImpl = w.ClientInfoServiceImpl
      var P = r(2294)
      t.NotificationServiceImpl = P.NotificationServiceImpl
      var E = r(333)
      ;(t.NotificationServiceImplBase = E.NotificationServiceImplBase), (t.Registration = E.Registration)
      var C = r(1167)
      t.ServiceImplBase = C.ServiceImplBase
      var D = r(8226)
      t.SizeServiceImpl = D.SizeServiceImpl
      var k = r(2812)
      t.StoryActivationServiceImpl = k.StoryActivationServiceImpl
      var O = r(1554)
      t.TableauError = O.TableauError
      var V = r(9685)
      t.Deferred = V.Deferred
      var x = r(316)
      t.ErrorHelpers = x.ErrorHelpers
      var N = r(2561)
      t.ExportHelpers = N.ExportHelpers
      var M = r(489)
      t.SheetUtils = M.SheetUtils
      var F = r(6081)
      t.VersionNumber = F.VersionNumber
      var R = r(107)
      t.VersionedExternalApiDispatcher = R.VersionedExternalApiDispatcher
    },
    8395: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(6081),
        i = (function () {
          function e() {}
          return (
            Object.defineProperty(e, 'Instance', {
              get: function () {
                return e._instance
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.SetVersionNumber = function (t, r) {
              e._instance = new n.VersionNumber(t, r)
            }),
            e
          )
        })()
      t.ApiVersion = i
    },
    5458: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e) {
          this._connectionInfo = e
        }
        return (
          Object.defineProperty(e.prototype, 'name', {
            get: function () {
              return this._connectionInfo.name
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'id', {
            get: function () {
              return this._connectionInfo.id
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'serverURI', {
            get: function () {
              return this._connectionInfo.serverURI
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'type', {
            get: function () {
              return this._connectionInfo.type
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.ConnectionSummary = r
    },
    241: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4695),
        i = r(8024)
      t.doCrossFrameBootstrap = function (e, t, r) {
        return new Promise(function (a, o) {
          var s
          ;(s = (function (e) {
            try {
              return e.self !== e.parent
            } catch (e) {
              return !0
            }
          })(e)
            ? e.parent
            : e.opener) ||
            o('This extension is not running inside an iframe, desktop, or popup window. Initialization failed.')
          var l = new n.CrossFrameMessenger(e, s, '*'),
            u = l.prepareInitializationMessage(t, n.MESSAGING_VERSION, r)
          l.setCommandResponseMessageHandler(function (e) {
            e.commandGuid === u.messageGuid &&
              a(function () {
                return new i.CrossFrameDispatcher(l)
              })
          }),
            l.startListening(),
            u.send()
        })
      }
    },
    8024: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = (function () {
          function e(e) {
            if (
              ((this._messenger = e), (this._pendingPromises = {}), (this._notificationHandlers = []), !this._messenger)
            )
              throw 'Missing messenger object'
            this._messenger.setCommandResponseMessageHandler(this.onCommandResponse.bind(this)),
              this._messenger.setNotificationMessageHandler(this.onNotification.bind(this))
          }
          return (
            (e.prototype.execute = function (e, t) {
              var r = this,
                n = this._messenger.prepareCommandMessage(e, t),
                i = new Promise(function (e, t) {
                  r._pendingPromises[n.messageGuid] = { resolve: e, reject: t }
                })
              return n.send(), i
            }),
            (e.prototype.registerNotificationHandler = function (e) {
              this._notificationHandlers.push(e)
            }),
            (e.prototype.unregisterNotificationHandler = function (e) {
              this._notificationHandlers = this._notificationHandlers.filter(function (t) {
                return t !== e
              })
            }),
            (e.prototype.onCommandResponse = function (e) {
              if (!(Object.keys(this._pendingPromises).indexOf(e.commandGuid) < 0)) {
                var t = this._pendingPromises[e.commandGuid]
                e.error && t.reject(e.error),
                  e.data && t.resolve({ result: e.data }),
                  delete this._pendingPromises[e.commandGuid]
              }
            }),
            (e.prototype.onNotification = function (e) {
              for (var t = 0, r = this._notificationHandlers; t < r.length; t++) {
                var i = r[t]
                try {
                  i({ notificationId: e.notificationId, data: e.data })
                } catch (e) {
                  if (e.errorCode === n.EmbeddingErrorCodes.IncompatibleVersionError) throw e
                }
              }
            }),
            e
          )
        })()
      t.CrossFrameDispatcher = i
    },
    6411: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e) {
          this._dataSourceImpl = e
        }
        return (
          Object.defineProperty(e.prototype, 'name', {
            get: function () {
              return this._dataSourceImpl.name
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'id', {
            get: function () {
              return this._dataSourceImpl.id
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'fields', {
            get: function () {
              return this._dataSourceImpl.fields
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'extractUpdateTime', {
            get: function () {
              return this._dataSourceImpl.extractUpdateTime
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'isExtract', {
            get: function () {
              return this._dataSourceImpl.isExtract
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'isPublished', {
            get: function () {
              return this._dataSourceImpl.isPublished
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.publishedUrl = function () {
            return this._dataSourceImpl.publishedUrl()
          }),
          (e.prototype.refreshAsync = function () {
            return this._dataSourceImpl.refreshAsync()
          }),
          (e.prototype.getActiveTablesAsync = function () {
            return (
              console.warn(
                'DataSource.getActiveTablesAsync is deprecated. Please use DataSource.getLogicalTablesAsync.',
              ),
              this._dataSourceImpl.getActiveTablesAsync()
            )
          }),
          (e.prototype.getConnectionSummariesAsync = function () {
            return this._dataSourceImpl.getConnectionSummariesAsync()
          }),
          (e.prototype.getUnderlyingDataAsync = function (e) {
            return (
              console.warn(
                'DataSource.getUnderlyingDataAsync is deprecated. Please use DataSource.getLogicalTablesAsync and DataSource.getLogicalTableDataAsync.',
              ),
              this._dataSourceImpl.getUnderlyingDataAsync(e)
            )
          }),
          (e.prototype.getLogicalTablesAsync = function () {
            return this._dataSourceImpl.getLogicalTablesAsync()
          }),
          (e.prototype.getLogicalTableDataAsync = function (e, t) {
            return this._dataSourceImpl.getLogicalTableDataAsync(e, t)
          }),
          (e.prototype.getLogicalTableDataReaderAsync = function (e, t, r) {
            return this._dataSourceImpl.getLogicalTableDataReaderAsync(e, t, r)
          }),
          e
        )
      })()
      t.DataSource = r
    },
    2336: (e, t, r) => {
      var n, i, a, o, s, l, u, c, d, p
      Object.defineProperty(t, '__esModule', { value: !0 })
      var h = r(1750),
        m = r(4695),
        y = r(4406),
        g = (function () {
          function e() {}
          return (
            (e.filterDomainType = new y.EnumConverter(
              (((n = {})[h.FilterDomainType.Relevant] = m.FilterDomainType.Relevant),
              (n[h.FilterDomainType.Database] = m.FilterDomainType.Database),
              n),
            )),
            (e.nullOptions = new y.EnumConverter(
              (((i = {})[h.FilterNullOption.AllValues] = m.FilterNullOption.AllValues),
              (i[h.FilterNullOption.NonNullValues] = m.FilterNullOption.NonNullValues),
              (i[h.FilterNullOption.NullValues] = m.FilterNullOption.NullValues),
              i),
            )),
            (e.filterUpdateType = new y.EnumConverter(
              (((a = {})[h.FilterUpdateType.Add] = m.FilterUpdateType.Add),
              (a[h.FilterUpdateType.All] = m.FilterUpdateType.All),
              (a[h.FilterUpdateType.Remove] = m.FilterUpdateType.Remove),
              (a[h.FilterUpdateType.Replace] = m.FilterUpdateType.Replace),
              a),
            )),
            (e.setVisibilityType = new y.EnumConverter(
              (((o = {})[h.ZoneVisibilityType.Show] = !0), (o[h.ZoneVisibilityType.Hide] = !1), o),
            )),
            (e.setReplaySpeedType = new y.EnumConverter(
              (((s = {})[h.ReplaySpeedType.Slow] = 2),
              (s[h.ReplaySpeedType.Normal] = 1),
              (s[h.ReplaySpeedType.Fast] = 0.5),
              s),
            )),
            (e.sheetType = new y.EnumConverter(
              (((l = {})[h.SheetType.Dashboard] = m.SheetType.Dashboard),
              (l[h.SheetType.Worksheet] = m.SheetType.Worksheet),
              (l[h.SheetType.Story] = m.SheetType.Story),
              l),
            )),
            (e.showDataTableFormatType = new y.EnumConverter(
              (((u = {})[h.IncludeDataValuesOption.AllValues] = m.ApiShowDataTableFormat.NativeAndFormattedValues),
              (u[h.IncludeDataValuesOption.OnlyNativeValues] = m.ApiShowDataTableFormat.NativeValuesOnly),
              (u[h.IncludeDataValuesOption.OnlyFormattedValues] = m.ApiShowDataTableFormat.FormattedValuesOnly),
              u),
            )),
            (e.periodType = new y.EnumConverter(
              (((c = {})[h.PeriodType.Years] = m.DateStepPeriod.Years),
              (c[h.PeriodType.Quarters] = m.DateStepPeriod.Quarters),
              (c[h.PeriodType.Months] = m.DateStepPeriod.Months),
              (c[h.PeriodType.Weeks] = m.DateStepPeriod.Weeks),
              (c[h.PeriodType.Days] = m.DateStepPeriod.Days),
              (c[h.PeriodType.Hours] = m.DateStepPeriod.Hours),
              (c[h.PeriodType.Minutes] = m.DateStepPeriod.Minutes),
              (c[h.PeriodType.Seconds] = m.DateStepPeriod.Seconds),
              c),
            )),
            (e.dateRangeType = new y.EnumConverter(
              (((d = {})[h.DateRangeType.Last] = m.DateRangeType.Last),
              (d[h.DateRangeType.LastN] = m.DateRangeType.LastN),
              (d[h.DateRangeType.Next] = m.DateRangeType.Next),
              (d[h.DateRangeType.NextN] = m.DateRangeType.NextN),
              (d[h.DateRangeType.Current] = m.DateRangeType.Current),
              (d[h.DateRangeType.ToDate] = m.DateRangeType.ToDate),
              d),
            )),
            (e.dialogStyles = new y.EnumConverter(
              (((p = {})[h.DialogStyle.Window] = m.DialogStyle.Window),
              (p[h.DialogStyle.Modal] = m.DialogStyle.Modal),
              (p[h.DialogStyle.Modeless] = m.DialogStyle.Modeless),
              p),
            )),
            e
          )
        })()
      t.ExternalToInternalEnumMappings = g
    },
    5126: (e, t, r) => {
      var n, i, a, o, s, l, u, c, d, p, h, m, y, g, f, b, v, I
      Object.defineProperty(t, '__esModule', { value: !0 })
      var S = r(1750),
        T = r(4695),
        A = r(4406),
        _ = (function () {
          function e() {}
          return (
            (e.extensionContext = new A.EnumConverter(
              (((n = {})[T.ExtensionContext.Desktop] = S.ExtensionContext.Desktop),
              (n[T.ExtensionContext.Server] = S.ExtensionContext.Server),
              n),
            )),
            (e.extensionMode = new A.EnumConverter(
              (((i = {})[T.ExtensionMode.Authoring] = S.ExtensionMode.Authoring),
              (i[T.ExtensionMode.Viewing] = S.ExtensionMode.Viewing),
              i),
            )),
            (e.columnType = new A.EnumConverter(
              (((a = {})[T.ColumnType.Continuous] = S.ColumnType.Continuous),
              (a[T.ColumnType.Discrete] = S.ColumnType.Discrete),
              a),
            )),
            (e.fieldAggregationType = new A.EnumConverter(
              (((o = {})[T.FieldAggregationType.Attr] = S.FieldAggregationType.Attr),
              (o[T.FieldAggregationType.Avg] = S.FieldAggregationType.Avg),
              (o[T.FieldAggregationType.Collect] = S.FieldAggregationType.Collect),
              (o[T.FieldAggregationType.Count] = S.FieldAggregationType.Count),
              (o[T.FieldAggregationType.Countd] = S.FieldAggregationType.Countd),
              (o[T.FieldAggregationType.Day] = S.FieldAggregationType.Day),
              (o[T.FieldAggregationType.End] = S.FieldAggregationType.End),
              (o[T.FieldAggregationType.Hour] = S.FieldAggregationType.Hour),
              (o[T.FieldAggregationType.InOut] = S.FieldAggregationType.InOut),
              (o[T.FieldAggregationType.Kurtosis] = S.FieldAggregationType.Kurtosis),
              (o[T.FieldAggregationType.Max] = S.FieldAggregationType.Max),
              (o[T.FieldAggregationType.Mdy] = S.FieldAggregationType.Mdy),
              (o[T.FieldAggregationType.Median] = S.FieldAggregationType.Median),
              (o[T.FieldAggregationType.Min] = S.FieldAggregationType.Min),
              (o[T.FieldAggregationType.Minute] = S.FieldAggregationType.Minute),
              (o[T.FieldAggregationType.MonthYear] = S.FieldAggregationType.MonthYear),
              (o[T.FieldAggregationType.None] = S.FieldAggregationType.None),
              (o[T.FieldAggregationType.Qtr] = S.FieldAggregationType.Qtr),
              (o[T.FieldAggregationType.Quart1] = S.FieldAggregationType.Quart1),
              (o[T.FieldAggregationType.Quart3] = S.FieldAggregationType.Quart3),
              (o[T.FieldAggregationType.Second] = S.FieldAggregationType.Second),
              (o[T.FieldAggregationType.Skewness] = S.FieldAggregationType.Skewness),
              (o[T.FieldAggregationType.Stdev] = S.FieldAggregationType.Stdev),
              (o[T.FieldAggregationType.Stdevp] = S.FieldAggregationType.Stdevp),
              (o[T.FieldAggregationType.Sum] = S.FieldAggregationType.Sum),
              (o[T.FieldAggregationType.TruncDay] = S.FieldAggregationType.TruncDay),
              (o[T.FieldAggregationType.TruncHour] = S.FieldAggregationType.TruncHour),
              (o[T.FieldAggregationType.TruncMinute] = S.FieldAggregationType.TruncMinute),
              (o[T.FieldAggregationType.TruncMonth] = S.FieldAggregationType.TruncMonth),
              (o[T.FieldAggregationType.TruncQtr] = S.FieldAggregationType.TruncQtr),
              (o[T.FieldAggregationType.TruncSecond] = S.FieldAggregationType.TruncSecond),
              (o[T.FieldAggregationType.TruncWeek] = S.FieldAggregationType.TruncWeek),
              (o[T.FieldAggregationType.TruncYear] = S.FieldAggregationType.TruncYear),
              (o[T.FieldAggregationType.User] = S.FieldAggregationType.User),
              (o[T.FieldAggregationType.Var] = S.FieldAggregationType.Var),
              (o[T.FieldAggregationType.Varp] = S.FieldAggregationType.Varp),
              (o[T.FieldAggregationType.Week] = S.FieldAggregationType.Week),
              (o[T.FieldAggregationType.Weekday] = S.FieldAggregationType.Weekday),
              (o[T.FieldAggregationType.Year] = S.FieldAggregationType.Year),
              o),
            )),
            (e.fieldRoleType = new A.EnumConverter(
              (((s = {})[T.FieldRoleType.Dimension] = S.FieldRoleType.Dimension),
              (s[T.FieldRoleType.Measure] = S.FieldRoleType.Measure),
              (s[T.FieldRoleType.Unknown] = S.FieldRoleType.Unknown),
              s),
            )),
            (e.sheetType = new A.EnumConverter(
              (((l = {})[T.SheetType.Dashboard] = S.SheetType.Dashboard),
              (l[T.SheetType.Story] = S.SheetType.Story),
              (l[T.SheetType.Worksheet] = S.SheetType.Worksheet),
              l),
            )),
            (e.dashboardObjectType = new A.EnumConverter(
              (((u = {})[T.DashboardObjectType.Extension] = S.DashboardObjectType.Extension),
              (u[T.DashboardObjectType.Blank] = S.DashboardObjectType.Blank),
              (u[T.DashboardObjectType.Image] = S.DashboardObjectType.Image),
              (u[T.DashboardObjectType.Legend] = S.DashboardObjectType.Legend),
              (u[T.DashboardObjectType.PageFilter] = S.DashboardObjectType.PageFilter),
              (u[T.DashboardObjectType.ParameterControl] = S.DashboardObjectType.ParameterControl),
              (u[T.DashboardObjectType.QuickFilter] = S.DashboardObjectType.QuickFilter),
              (u[T.DashboardObjectType.Text] = S.DashboardObjectType.Text),
              (u[T.DashboardObjectType.Title] = S.DashboardObjectType.Title),
              (u[T.DashboardObjectType.WebPage] = S.DashboardObjectType.WebPage),
              (u[T.DashboardObjectType.Worksheet] = S.DashboardObjectType.Worksheet),
              u),
            )),
            (e.dataType = new A.EnumConverter(
              (((c = {})[T.DataType.Bool] = S.DataType.Bool),
              (c[T.DataType.Date] = S.DataType.Date),
              (c[T.DataType.DateTime] = S.DataType.DateTime),
              (c[T.DataType.Float] = S.DataType.Float),
              (c[T.DataType.Int] = S.DataType.Int),
              (c[T.DataType.String] = S.DataType.String),
              c),
            )),
            (e.filterUpdateType = new A.EnumConverter(
              (((d = {})[T.FilterUpdateType.Add] = S.FilterUpdateType.Add),
              (d[T.FilterUpdateType.All] = S.FilterUpdateType.All),
              (d[T.FilterUpdateType.Remove] = S.FilterUpdateType.Remove),
              (d[T.FilterUpdateType.Replace] = S.FilterUpdateType.Replace),
              d),
            )),
            (e.allowableValues = new A.EnumConverter(
              (((p = {})[T.DomainRestrictionType.All] = S.ParameterValueType.All),
              (p[T.DomainRestrictionType.List] = S.ParameterValueType.List),
              (p[T.DomainRestrictionType.Range] = S.ParameterValueType.Range),
              p),
            )),
            (e.dateStepPeriod = new A.EnumConverter(
              (((h = {})[T.DateStepPeriod.Years] = S.PeriodType.Years),
              (h[T.DateStepPeriod.Quarters] = S.PeriodType.Quarters),
              (h[T.DateStepPeriod.Months] = S.PeriodType.Months),
              (h[T.DateStepPeriod.Weeks] = S.PeriodType.Weeks),
              (h[T.DateStepPeriod.Days] = S.PeriodType.Days),
              (h[T.DateStepPeriod.Hours] = S.PeriodType.Hours),
              (h[T.DateStepPeriod.Minutes] = S.PeriodType.Minutes),
              (h[T.DateStepPeriod.Seconds] = S.PeriodType.Seconds),
              h),
            )),
            (e.dateRangeType = new A.EnumConverter(
              (((m = {})[T.DateRangeType.Current] = S.DateRangeType.Current),
              (m[T.DateRangeType.Last] = S.DateRangeType.Last),
              (m[T.DateRangeType.LastN] = S.DateRangeType.LastN),
              (m[T.DateRangeType.Next] = S.DateRangeType.Next),
              (m[T.DateRangeType.NextN] = S.DateRangeType.NextN),
              (m[T.DateRangeType.ToDate] = S.DateRangeType.ToDate),
              m),
            )),
            (e.errorCode = new A.EnumConverter(
              (((y = {})[T.ErrorCodes.INITIALIZATION_ERROR] = S.ErrorCodes.InternalError),
              (y[T.ErrorCodes.INTERNAL_ERROR] = S.ErrorCodes.InternalError),
              (y[T.ErrorCodes.MISSING_ENUM_MAPPING] = S.ErrorCodes.InternalError),
              (y[T.ErrorCodes.MISSING_PARAMETER] = S.ErrorCodes.InternalError),
              (y[T.ErrorCodes.PERMISSION_DENIED] = S.ErrorCodes.InternalError),
              (y[T.ErrorCodes.PRES_MODEL_PARSING_ERROR] = S.ErrorCodes.InternalError),
              (y[T.ErrorCodes.UNKNOWN_VERB_ID] = S.ErrorCodes.InternalError),
              (y[T.ErrorCodes.VERSION_NOT_CONFIGURED] = S.ErrorCodes.APINotInitialized),
              (y[T.ErrorCodes.VISIBILITY_ERROR] = S.ErrorCodes.VisibilityError),
              y),
              S.ErrorCodes.InternalError,
            )),
            (e.filterType = new A.EnumConverter(
              (((g = {})[T.FilterType.Categorical] = S.FilterType.Categorical),
              (g[T.FilterType.Range] = S.FilterType.Range),
              (g[T.FilterType.RelativeDate] = S.FilterType.RelativeDate),
              (g[T.FilterType.Hierarchical] = S.FilterType.Hierarchical),
              g),
            )),
            (e.classNameKey = new A.EnumConverter(
              (((f = {})['tableau-dashboard-title'] = S.ClassNameKey.DashboardTitle),
              (f['tableau-story-title'] = S.ClassNameKey.StoryTitle),
              (f['tableau-tooltip'] = S.ClassNameKey.Tooltip),
              (f['tableau-worksheet'] = S.ClassNameKey.Worksheet),
              (f['tableau-worksheet-title'] = S.ClassNameKey.WorksheetTitle),
              (f['dashboard-title'] = S.ClassNameKey.DashboardTitle),
              (f['story-title'] = S.ClassNameKey.StoryTitle),
              (f.tooltip = S.ClassNameKey.Tooltip),
              (f.worksheet = S.ClassNameKey.Worksheet),
              (f['worksheet-title'] = S.ClassNameKey.WorksheetTitle),
              f),
            )),
            (e.hierarchicalLevelSelectionState = new A.EnumConverter(
              (((b = {})[T.HierarchicalLevelSelectionState.AllSelected] =
                S.HierarchicalLevelSelectionState.AllSelected),
              (b[T.HierarchicalLevelSelectionState.NoneSelected] = S.HierarchicalLevelSelectionState.NoneSelected),
              (b[T.HierarchicalLevelSelectionState.SomeSelected] = S.HierarchicalLevelSelectionState.SomeSelected),
              (b[T.HierarchicalLevelSelectionState.UnknownSelected] =
                S.HierarchicalLevelSelectionState.UnknownSelected),
              b),
            )),
            (e.annotationType = new A.EnumConverter(
              (((v = {})[T.AnnotateEnum.Area] = S.AnnotationType.Area),
              (v[T.AnnotateEnum.Mark] = S.AnnotationType.Mark),
              (v[T.AnnotateEnum.Point] = S.AnnotationType.Point),
              v),
            )),
            (e.markType = new A.EnumConverter(
              (((I = {})[T.MarkType.Area] = S.MarkType.Area),
              (I[T.MarkType.Bar] = S.MarkType.Bar),
              (I[T.MarkType.Circle] = S.MarkType.Circle),
              (I[T.MarkType.GanttBar] = S.MarkType.GanttBar),
              (I[T.MarkType.Heatmap] = S.MarkType.Heatmap),
              (I[T.MarkType.Line] = S.MarkType.Line),
              (I[T.MarkType.Map] = S.MarkType.Map),
              (I[T.MarkType.Pie] = S.MarkType.Pie),
              (I[T.MarkType.Polygon] = S.MarkType.Polygon),
              (I[T.MarkType.Shape] = S.MarkType.Shape),
              (I[T.MarkType.Square] = S.MarkType.Square),
              (I[T.MarkType.Text] = S.MarkType.Text),
              (I[T.MarkType.VizExtension] = S.MarkType.VizExtension),
              I),
            )),
            e
          )
        })()
      t.InternalToExternalEnumMappings = _
    },
    3682: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(1554),
        a = (function () {
          function e() {
            this._eventListenerManagers = {}
          }
          return (
            (e.prototype.addEventListener = function (e, t) {
              if (!this._eventListenerManagers.hasOwnProperty(e))
                throw new i.TableauError(
                  n.ErrorCodes.UnsupportedEventName,
                  'Cannot add event, unsupported event type: ' + e,
                )
              return this._eventListenerManagers[e].addEventListener(t)
            }),
            (e.prototype.removeEventListener = function (e, t) {
              if (!this._eventListenerManagers.hasOwnProperty(e))
                throw new i.TableauError(
                  n.ErrorCodes.UnsupportedEventName,
                  'Cannot remove event, unsupported event type: ' + e,
                )
              return this._eventListenerManagers[e].removeEventListener(t)
            }),
            (e.prototype.addNewEventType = function (e) {
              this._eventListenerManagers[e.eventType] = e
            }),
            e
          )
        })()
      t.EventListenerManager = a
    },
    2131: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(316),
        i = (function () {
          function e(e) {
            this._fieldImpl = e
          }
          return (
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return this._fieldImpl.name
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'id', {
              get: function () {
                return this._fieldImpl.id
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'description', {
              get: function () {
                return this._fieldImpl.description
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'dataType', {
              get: function () {
                return this._fieldImpl.dataType
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'aggregation', {
              get: function () {
                return this._fieldImpl.aggregation
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'dataSource', {
              get: function () {
                return this._fieldImpl.dataSource
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'role', {
              get: function () {
                return this._fieldImpl.role
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isHidden', {
              get: function () {
                return this._fieldImpl.isHidden
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isGenerated', {
              get: function () {
                return this._fieldImpl.isGenerated
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isCalculatedField', {
              get: function () {
                return this._fieldImpl.isCalculatedField
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'columnType', {
              get: function () {
                throw n.ErrorHelpers.apiNotImplemented('Field.columnType')
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isCombinedField', {
              get: function () {
                return this._fieldImpl.isCombinedField
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          )
        })()
      t.Field = i
    },
    2913: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4007),
        i = (function () {
          function e(e, t) {
            ;(this._registryId = t),
              (this._luid = e.luid),
              (this._name = e.name),
              (this._shared = e.shared),
              (this._isDefault = e.isDefault),
              (this._ownerName = e.owner.userFriendlyName),
              (this._url = e.url)
          }
          return (
            Object.defineProperty(e.prototype, 'luid', {
              get: function () {
                return this._luid
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return this._name
              },
              set: function (e) {
                this._name = e
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'shared', {
              get: function () {
                return this._shared
              },
              set: function (e) {
                this._shared = e
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isDefault', {
              get: function () {
                return this._isDefault
              },
              set: function (e) {
                this._isDefault = e
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'ownerName', {
              get: function () {
                return this._ownerName
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'url', {
              get: function () {
                return this._url
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.saveAsync = function () {
              return n.ApiServiceRegistry.get(this._registryId).getService('viz-service').saveAsync(this)
            }),
            e
          )
        })()
      t.CustomViewImpl = i
    },
    4657: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(1750),
        s = r(4695),
        l = r(5126),
        u = r(2391),
        c = r(9887),
        d = r(1554),
        p = r(316),
        h = r(3333),
        m = r(1878),
        y = r(6749),
        g = r(928),
        f = (function (e) {
          function t(t, r, n, i, a, o) {
            void 0 === o && (o = 0)
            var s = e.call(this, t, i) || this
            return (
              (s._zones = r), (s._sheetPath = n), (s._parentStoryPointImpl = a), (s._activeDashboardObjectId = o), s
            )
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'worksheetsImpl', {
              get: function () {
                return this._worksheetsImpl
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'objects', {
              get: function () {
                return this._objects
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'parentStoryPoint', {
              get: function () {
                return this._parentStoryPointImpl
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'activeDashboardObjectId', {
              get: function () {
                return this._activeDashboardObjectId
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'activeDashboardName', {
              get: function () {
                return this._sheetPath.sheetName
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.initializeWithPublicInterfaces = function () {
              ;(this._worksheetsImpl = new Array()), (this._objects = new Array()), (this.zoneMap = new Map())
              for (var e = 0, t = this._zones; e < t.length; e++) {
                var r = t[e],
                  n = void 0,
                  i = { width: r.width, height: r.height }
                if (r.zoneType === s.DashboardObjectType.Worksheet) {
                  var a = '',
                    c = '',
                    d = !1
                  r.sheetInfo ? ((a = r.sheetInfo.name), (d = '' === (c = r.sheetInfo.url || ''))) : (a = r.name)
                  var p = new y.SheetInfoImpl(a, o.SheetType.Worksheet, i, this._worksheetsImpl.length, !1, d, c),
                    m = {
                      worksheet: a,
                      dashboard: this._sheetInfoImpl.name,
                      storyboard: this._sheetPath.storyboard,
                      flipboardZoneID: this._sheetPath.flipboardZoneID,
                      storyPointID: this._sheetPath.storyPointID,
                    }
                  ;(n = new g.WorksheetImpl(p, this._registryId, m, this, this._parentStoryPointImpl)),
                    this._worksheetsImpl.push(n)
                }
                var f = new u.Point(r.x, r.y),
                  b = new h.DashboardObjectImpl(
                    this,
                    l.InternalToExternalEnumMappings.dashboardObjectType.convert(r.zoneType),
                    f,
                    i,
                    n,
                    r.name,
                    void 0 !== r.isFloating && r.isFloating,
                    void 0 === r.isVisible || r.isVisible,
                    r.zoneId,
                  )
                this._objects.push(b), this.zoneMap.set(r.zoneId, b)
              }
            }),
            (t.prototype.setDashboardObjectVisibilityAsync = function (e) {
              return c.ApiServiceRegistry.get(this._registryId)
                .getService('zone-service')
                .setVisibilityAsync(this.name, this.zoneMap, e)
            }),
            (t.prototype.getDashboardObjectById = function (e) {
              return this.zoneMap.get(e)
            }),
            (t.prototype.updateZones = function (e, t, r) {
              var n = this
              void 0 === t && (t = 0), void 0 === r && (r = '')
              var i = this._objects,
                a = this.zoneMap,
                s = this._activeDashboardObjectId,
                l = this._sheetPath.sheetName
              ;(this._zones = e),
                (this._activeDashboardObjectId = t),
                (this._sheetPath.sheetName = r),
                (this._sheetInfoImpl.name = r),
                this.initializeWithPublicInterfaces()
              var u = this._objects,
                c = this.zoneMap,
                d = new Map()
              return (
                i.forEach(function (e) {
                  var t = e.id
                  if (c.has(t)) {
                    var r = c.get(t)
                    e.isFloating !== r.isFloating && n.addChange(t, d, o.DashboardLayoutChange.IsFloatingChanged),
                      e.isVisible !== r.isVisible && n.addChange(t, d, o.DashboardLayoutChange.IsVisibleChanged),
                      e.name !== r.name && n.addChange(t, d, o.DashboardLayoutChange.NameChanged),
                      (e.position.x === r.position.x && e.position.y === r.position.y) ||
                        n.addChange(t, d, o.DashboardLayoutChange.PositionChanged),
                      (e.size.width === r.size.width && e.size.height === r.size.height) ||
                        n.addChange(t, d, o.DashboardLayoutChange.SizeChanged)
                  } else n.addChange(t, d, o.DashboardLayoutChange.Removed)
                }),
                u.forEach(function (e) {
                  a.has(e.id) || n.addChange(e.id, d, o.DashboardLayoutChange.Added)
                }),
                s !== t &&
                  (0 !== t && this.addChange(t, d, o.DashboardLayoutChange.Selected),
                  0 !== s && this.addChange(s, d, o.DashboardLayoutChange.Deselected)),
                l !== r && this.addChange(0, d, o.DashboardLayoutChange.DashboardChanged),
                d
              )
            }),
            (t.prototype.addChange = function (e, t, r) {
              t.has(e) || t.set(e, []), t.get(e).push(r)
            }),
            (t.prototype.moveAndResizeDashboardObjectsAsync = function (e) {
              return c.ApiServiceRegistry.get(this._registryId)
                .getService('zone-service')
                .moveAndResizeAsync(this.name, this.zoneMap, e)
            }),
            (t.prototype.replayAnimationAsync = function (e) {
              return c.ApiServiceRegistry.get(this._registryId).getService('animation-service').replayAsync(e)
            }),
            (t.prototype.getFiltersAsync = function () {
              return (
                this.verifyActiveSheetOrEmbeddedInActiveStoryPoint(),
                c.ApiServiceRegistry.get(this._registryId).getService('filter-service').getDashboardFiltersAsync()
              )
            }),
            (t.prototype.applyFilterAsync = function (e, t, r, n) {
              if (
                (p.ErrorHelpers.verifyEnumValue(r, a.FilterUpdateType, 'FilterUpdateType'),
                p.ErrorHelpers.verifyStringParameter(e, 'fieldName'),
                !Array.isArray(t))
              )
                throw new d.TableauError(
                  o.ErrorCodes.InvalidParameter,
                  'values parameter for applyDashboardFilterAsync must be an array',
                )
              return (
                this.verifyActiveSheetOrEmbeddedInActiveStoryPoint(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('filter-service')
                  .applyDashboardFilterAsync(e, t, r, n)
              )
            }),
            (t.prototype.getWorksheetNamesFromZones = function () {
              for (var e = [], t = 0, r = this._zones; t < r.length; t++) {
                var n = r[t]
                if (n.zoneType === s.DashboardObjectType.Worksheet) {
                  var i = n.sheetInfo ? n.sheetInfo.name : n.name
                  e.push(i)
                }
              }
              return e
            }),
            (t.prototype.verifyActiveSheetOrEmbeddedInActiveStoryPoint = function () {
              var e = this.active,
                t = null != this.parentStoryPoint && this.parentStoryPoint.active
              if (!e && !t)
                throw new d.TableauError(o.SharedErrorCodes.NotActiveSheet, 'Operation not allowed on non-active sheet')
            }),
            t
          )
        })(m.SheetImpl)
      t.DashboardImpl = f
    },
    3333: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e, t, r, n, i, a, o, s, l) {
          ;(this._dashboardImpl = e),
            (this._type = t),
            (this._position = r),
            (this._size = n),
            (this._worksheetImpl = i),
            (this._name = a),
            (this._isFloating = o),
            (this._isVisible = s),
            (this._id = l)
        }
        return (
          Object.defineProperty(e.prototype, 'dashboardImpl', {
            get: function () {
              return this._dashboardImpl
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'type', {
            get: function () {
              return this._type
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'position', {
            get: function () {
              return this._position
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'size', {
            get: function () {
              return this._size
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'worksheetImpl', {
            get: function () {
              return this._worksheetImpl
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'name', {
            get: function () {
              return this._name
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'isFloating', {
            get: function () {
              return this._isFloating
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'isVisible', {
            get: function () {
              return this._isVisible
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'id', {
            get: function () {
              return this._id
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.DashboardObjectImpl = r
    },
    1234: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(5458),
        a = r(2131),
        o = r(1110),
        s = r(9887),
        l = r(1738),
        u = r(316),
        c = r(8695),
        d = (function () {
          function e(e, t) {
            var r = this
            ;(this._dataSourceInfo = e),
              (this._registryId = t),
              (this._fields = e.fields.map(function (e) {
                var t = new c.FieldImpl(e, r)
                return new a.Field(t)
              }))
          }
          return (
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return this._dataSourceInfo.name
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'id', {
              get: function () {
                return this._dataSourceInfo.id
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'extractUpdateTime', {
              get: function () {
                return this._dataSourceInfo.extractUpdateTime
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'fields', {
              get: function () {
                return this._fields
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isExtract', {
              get: function () {
                return this._dataSourceInfo.isExtract
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isPublished', {
              get: function () {
                return this._dataSourceInfo.isPublished
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.publishedUrl = function () {
              return this._dataSourceInfo.publishedUrl
            }),
            (e.prototype.getMaxPageRowLimit = function () {
              return 1e4
            }),
            (e.prototype.refreshAsync = function () {
              return s.ApiServiceRegistry.get(this._registryId)
                .getService('data-source-service')
                .refreshAsync(this._dataSourceInfo.id)
            }),
            (e.prototype.getConnectionSummariesAsync = function () {
              return s.ApiServiceRegistry.get(this._registryId)
                .getService('data-source-service')
                .getConnectionSummariesAsync(this._dataSourceInfo.id)
                .then(function (e) {
                  return e.map(function (e) {
                    return new i.ConnectionSummary(e)
                  })
                })
            }),
            (e.prototype.getActiveTablesAsync = function () {
              return s.ApiServiceRegistry.get(this._registryId)
                .getService('data-source-service')
                .getActiveTablesAsync(this._dataSourceInfo.id)
                .then(function (e) {
                  return e.map(function (e) {
                    return new l.TableSummary(e)
                  })
                })
            }),
            (e.prototype.getUnderlyingDataAsync = function (e) {
              return (
                (e = e || {}),
                s.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getDataSourceDataAsync(
                    this.id,
                    !!e.ignoreAliases,
                    e.maxRows || 0,
                    e.columnsToInclude || [],
                    e.columnsToIncludeById || [],
                    e.includeDataValuesOption || n.IncludeDataValuesOption.AllValues,
                  )
              )
            }),
            (e.prototype.getLogicalTableDataAsync = function (e, t) {
              return (
                (t = t || {}),
                s.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getLogicalTableDataAsync(
                    this.id,
                    e,
                    !!t.ignoreAliases,
                    t.maxRows || 0,
                    t.columnsToInclude || [],
                    t.columnsToIncludeById || [],
                    t.includeDataValuesOption || n.IncludeDataValuesOption.AllValues,
                  )
              )
            }),
            (e.prototype.getLogicalTableDataReaderAsync = function (e, t, r) {
              return (
                (r = r || {}),
                s.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getLogicalTableDataReaderAsync(
                    this.id,
                    e,
                    t || this.getMaxPageRowLimit(),
                    !!r.ignoreAliases,
                    r.columnsToIncludeById || [],
                    r.includeDataValuesOption || n.IncludeDataValuesOption.AllValues,
                  )
              )
            }),
            (e.prototype.initializeWithPublicInterfaces = function (e) {
              u.ErrorHelpers.verifyInternalValue(e, 'dataSource'),
                (this._fields = this._dataSourceInfo.fields.map(function (t) {
                  var r = new c.FieldImpl(t, e)
                  return new a.Field(r)
                }))
            }),
            (e.prototype.getLogicalTablesAsync = function () {
              return s.ApiServiceRegistry.get(this._registryId)
                .getService('data-source-service')
                .getLogicalTablesAsync(this.id)
                .then(function (e) {
                  return e.map(function (e) {
                    return new o.LogicalTable(e)
                  })
                })
            }),
            e
          )
        })()
      t.DataSourceImpl = d
    },
    8695: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(5126),
        a = (function () {
          function e(e, t) {
            ;(this._fieldInfo = e), (this._parentDataSource = t)
          }
          return (
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return this._fieldInfo.name
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'id', {
              get: function () {
                return this._fieldInfo.id
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'description', {
              get: function () {
                return this._fieldInfo.description
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'dataType', {
              get: function () {
                var e
                return null != (e = this._fieldInfo.dataType) ? e : n.DataType.Unknown
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'aggregation', {
              get: function () {
                return i.InternalToExternalEnumMappings.fieldAggregationType.convert(this._fieldInfo.aggregation)
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'dataSource', {
              get: function () {
                if (!this._parentDataSource)
                  throw new Error(
                    "Data source information is not available for this field. Please use getFieldAsync method to get field's data source information",
                  )
                return this._parentDataSource
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'role', {
              get: function () {
                return i.InternalToExternalEnumMappings.fieldRoleType.convert(this._fieldInfo.role)
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isHidden', {
              get: function () {
                return this._fieldInfo.isHidden
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isGenerated', {
              get: function () {
                return this._fieldInfo.isGenerated
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isCalculatedField', {
              get: function () {
                return this._fieldInfo.isCalculatedField
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isCombinedField', {
              get: function () {
                return this._fieldInfo.isCombinedField
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          )
        })()
      t.FieldImpl = a
    },
    6560: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(5126),
        a = r(9887),
        o = r(8175),
        s = r(316),
        l = r(6077),
        u = (function () {
          function e(e, t) {
            ;(this._registryId = t), this.setParameterInfo(e)
          }
          return (
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return this._parameterInfo.name
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'currentValue', {
              get: function () {
                return o.DataValueFactory.MakeParameterDataValue(
                  this._parameterInfo.currentValue,
                  this._parameterInfo.dataType,
                )
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'dataType', {
              get: function () {
                return i.InternalToExternalEnumMappings.dataType.convert(this._parameterInfo.dataType)
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'id', {
              get: function () {
                return this._globalFieldName
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'allowableValues', {
              get: function () {
                return this._allowableValues
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.changeValueAsync = function (e) {
              var t = this
              s.ErrorHelpers.verifyParameter(e, 'newValue')
              var r = l.Param.serializeParameterValue(e)
              return a.ApiServiceRegistry.get(this._registryId)
                .getService('parameters-service')
                .changeParameterValueAsync(this._globalFieldName, r)
                .then(function (e) {
                  return t.setParameterInfo(e), t.currentValue
                })
            }),
            (e.prototype.setParameterInfo = function (e) {
              ;(this._parameterInfo = e), (this._globalFieldName = e.fieldName)
              var t,
                r,
                a,
                s,
                l,
                u = i.InternalToExternalEnumMappings.allowableValues.convert(e.allowableValuesType)
              u === n.ParameterValueType.List
                ? (t = (e.allowableValues || []).map(function (t) {
                    return o.DataValueFactory.MakeParameterDataValue(t, e.dataType)
                  }))
                : u === n.ParameterValueType.Range &&
                  ((r = e.minValue && o.DataValueFactory.MakeParameterDataValue(e.minValue, e.dataType)),
                  (a = e.maxValue && o.DataValueFactory.MakeParameterDataValue(e.maxValue, e.dataType)),
                  (s = e.stepSize),
                  (l = e.dateStepPeriod && i.InternalToExternalEnumMappings.dateStepPeriod.convert(e.dateStepPeriod))),
                (this._allowableValues = {
                  type: u,
                  allowableValues: t,
                  minValue: r,
                  maxValue: a,
                  stepSize: s,
                  dateStepPeriod: l,
                })
            }),
            e
          )
        })()
      t.ParameterImpl = u
    },
    1878: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(9887),
        a = r(1554),
        o = r(316),
        s = r(6077),
        l = r(489),
        u = (function () {
          function e(e, t) {
            ;(this._sheetInfoImpl = e), (this._registryId = t)
          }
          return (
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return this._sheetInfoImpl.name
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'sheetType', {
              get: function () {
                return this._sheetInfoImpl.sheetType
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'sheetPath', {
              get: function () {
                return this._sheetInfoImpl.sheetPath
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'size', {
              get: function () {
                return this._sheetInfoImpl.sheetSize
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'hidden', {
              get: function () {
                if (void 0 !== this._sheetInfoImpl.isHidden) return this._sheetInfoImpl.isHidden
                throw new a.TableauError(n.EmbeddingErrorCodes.ImplementationError, 'isHidden not implemented')
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'active', {
              get: function () {
                if (void 0 !== this._sheetInfoImpl.isActive) return this._sheetInfoImpl.isActive
                throw new a.TableauError(n.EmbeddingErrorCodes.ImplementationError, 'active not implemented')
              },
              set: function (e) {
                void 0 !== this._sheetInfoImpl.isActive && (this._sheetInfoImpl.active = e)
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'index', {
              get: function () {
                if (void 0 !== this._sheetInfoImpl.index) return this._sheetInfoImpl.index
                throw new a.TableauError(n.EmbeddingErrorCodes.ImplementationError, 'index not implemented')
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'url', {
              get: function () {
                if (void 0 !== this._sheetInfoImpl.url) return this._sheetInfoImpl.url
                throw new a.TableauError(n.EmbeddingErrorCodes.ImplementationError, 'url not implemented')
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.getSheetSize = function () {
              if (!l.SheetUtils.isValidSheetSize(this.size))
                throw new a.TableauError(n.EmbeddingErrorCodes.InternalError, 'size is not of type SheetSize')
              return this.size
            }),
            (e.prototype.findParameterAsync = function (e) {
              return (
                o.ErrorHelpers.verifyParameter(e, 'parameterName'),
                i.ApiServiceRegistry.get(this._registryId).getService('parameters-service').findParameterByNameAsync(e)
              )
            }),
            (e.prototype.getParametersAsync = function () {
              return i.ApiServiceRegistry.get(this._registryId)
                .getService('parameters-service')
                .getParametersForSheetAsync(this.sheetPath)
            }),
            (e.prototype.changeSizeAsync = function (e) {
              var t = this,
                r = new a.TableauError(n.EmbeddingErrorCodes.InvalidSize, 'Invalid sheet size parameter')
              if (!e || !e.behavior) throw r
              var o = this.normalizeSheetSize(e),
                s = o.behavior === n.SheetSizeBehavior.Automatic
              if (!s && !o.minSize && !o.maxSize) throw r
              if (!s && this.sheetType === n.SheetType.Worksheet)
                throw new a.TableauError(
                  n.EmbeddingErrorCodes.InvalidSizeBehaviorOnWorksheet,
                  'Only SheetSizeBehavior.Automatic is allowed on Worksheets',
                )
              if (s && this.getSheetSize().behavior === o.behavior) return Promise.resolve(e)
              var u = this.processNewSize(o)
              return i.ApiServiceRegistry.get(this._registryId)
                .getService('size-service')
                .changeSizeAsync(this.name, u)
                .then(function () {
                  return i.ApiServiceRegistry.get(t._registryId)
                    .getService('client-info-service')
                    .getClientInfoAsync()
                    .then(function (e) {
                      var r = e.publishedSheets.find(function (e) {
                        return e.name === t.name
                      })
                      if (!r)
                        throw new a.TableauError(
                          n.SharedErrorCodes.InternalError,
                          "Can't find sheet with name " + t.name,
                        )
                      var i = l.SheetUtils.getSheetSizeFromSizeConstraints(r.sizeConstraint)
                      return (t._sheetInfoImpl.sheetSize = i), i
                    })
                })
            }),
            (e.prototype.normalizeSheetSize = function (t) {
              var r = t.behavior
              return (
                o.ErrorHelpers.verifyEnumValue(r, n.SheetSizeBehavior, 'SheetSizeBehavior'),
                { behavior: r, minSize: e.parseDimensions(t.minSize), maxSize: e.parseDimensions(t.maxSize) }
              )
            }),
            (e.prototype.processNewSize = function (e) {
              var t,
                r,
                i,
                o,
                l = e.behavior,
                u = e.minSize,
                c = e.maxSize,
                d = !s.Param.isNullOrUndefined(null === (t = u) || void 0 === t ? void 0 : t.width),
                p = !s.Param.isNullOrUndefined(null === (r = u) || void 0 === r ? void 0 : r.height),
                h = !s.Param.isNullOrUndefined(null === (i = c) || void 0 === i ? void 0 : i.width),
                m = !s.Param.isNullOrUndefined(null === (o = c) || void 0 === o ? void 0 : o.height),
                y = d && p,
                g = h && m
              switch (l) {
                case n.SheetSizeBehavior.Automatic:
                  return { behavior: l }
                case n.SheetSizeBehavior.AtMost:
                  if (!c || !g)
                    throw new a.TableauError(
                      n.EmbeddingErrorCodes.MissingMaxSize,
                      'Missing maxSize for SheetSizeBehavior.AtMost',
                    )
                  if ((b = { width: c.width, height: c.height }).width < 0 || b.height < 0)
                    throw new a.TableauError(n.EmbeddingErrorCodes.InvalidSize, 'Size value cannot be less than zero')
                  return { behavior: l, maxSize: b }
                case n.SheetSizeBehavior.AtLeast:
                  if (!u || !y)
                    throw new a.TableauError(
                      n.EmbeddingErrorCodes.MissingMinSize,
                      'Missing minSize for SheetSizeBehavior.AtLeast',
                    )
                  if ((f = { width: u.width, height: u.height }).width < 0 || f.height < 0)
                    throw new a.TableauError(n.EmbeddingErrorCodes.InvalidSize, 'Size value cannot be less than zero')
                  return { behavior: l, minSize: f }
                case n.SheetSizeBehavior.Range:
                  if (!(u && c && y && g))
                    throw new a.TableauError(
                      n.EmbeddingErrorCodes.MissingMinMaxSize,
                      'Missing minSize or maxSize for SheetSizeBehavior.Range',
                    )
                  var f = { width: u.width, height: u.height },
                    b = { width: c.width, height: c.height }
                  if (
                    f.width < 0 ||
                    f.height < 0 ||
                    b.width < 0 ||
                    b.height < 0 ||
                    f.width > b.width ||
                    f.height > b.height
                  )
                    throw new a.TableauError(
                      n.EmbeddingErrorCodes.InvalidSize,
                      'Missing minSize or maxSize for SheetSizeBehavior.Range',
                    )
                  return { behavior: l, minSize: f, maxSize: b }
                case n.SheetSizeBehavior.Exactly:
                  if (u && c) {
                    if (y && g) {
                      if (
                        ((f = { width: u.width, height: u.height }),
                        (b = { width: c.width, height: c.height }),
                        f.width !== b.width || f.height !== b.height)
                      )
                        throw new a.TableauError(
                          n.EmbeddingErrorCodes.InvalidSize,
                          'Conflicting size values for SheetSizeBehavior.Exactly',
                        )
                      return { behavior: l, minSize: f, maxSize: b }
                    }
                    if (y) return { behavior: l, minSize: (f = { width: u.width, height: u.height }), maxSize: f }
                    if (g) return { behavior: l, minSize: (b = { width: c.width, height: c.height }), maxSize: b }
                  }
                  throw new a.TableauError(n.EmbeddingErrorCodes.InvalidSize, 'Invalid sheet size parameter')
                default:
                  throw new a.TableauError(n.SharedErrorCodes.InternalError, 'Unsupported sheet size behavior: ' + l)
              }
            }),
            (e.parseDimensions = function (e) {
              var t = { width: void 0, height: void 0 }
              if (!e) return t
              var r = s.Param.tryParseNumber(e.width),
                n = r.success,
                i = r.parsed,
                a = s.Param.tryParseNumber(e.height),
                o = a.success,
                l = a.parsed
              return n && o ? { width: i, height: l } : n ? { width: i } : o ? { height: l } : t
            }),
            e
          )
        })()
      t.SheetImpl = u
    },
    6749: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = (function () {
          function e(e, t, r, n, i, a, o) {
            ;(this._name = e),
              (this._sheetType = t),
              (this._sheetSize = r),
              (this._index = n),
              (this._isActive = i),
              (this._isHidden = a),
              (this._url = o)
          }
          return (
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return this._name
              },
              set: function (e) {
                this._name = e
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'sheetSize', {
              get: function () {
                return this._sheetSize
              },
              set: function (e) {
                this._sheetSize = e
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'sheetType', {
              get: function () {
                return this._sheetType
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'sheetPath', {
              get: function () {
                return { sheetName: this.name, isDashboard: this.sheetType === n.SheetType.Dashboard }
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'index', {
              get: function () {
                return this._index
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isActive', {
              get: function () {
                return this._isActive
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'active', {
              set: function (e) {
                this._isActive = e
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isHidden', {
              get: function () {
                return this._isHidden
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'url', {
              get: function () {
                return this._url
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          )
        })()
      t.SheetInfoImpl = i
    },
    4217: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e) {
          ;(this._eventType = e), (this._handlers = [])
        }
        return (
          Object.defineProperty(e.prototype, 'eventType', {
            get: function () {
              return this._eventType
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.addEventListener = function (e) {
            var t = this
            return (
              this._handlers.push(e),
              function () {
                return t.removeEventListener(e)
              }
            )
          }),
          (e.prototype.removeEventListener = function (e) {
            var t = this._handlers.length
            return (
              (this._handlers = this._handlers.filter(function (t) {
                return t !== e
              })),
              t > this._handlers.length
            )
          }),
          (e.prototype.triggerEvent = function (e) {
            for (var t = 0, r = this._handlers; t < r.length; t++) {
              var n = r[t]
              try {
                n(e())
              } catch (e) {
                continue
              }
            }
          }),
          e
        )
      })()
      t.SingleEventManagerImpl = r
    },
    8194: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(9887),
        s = r(1554),
        l = r(316),
        u = r(8634),
        c = r(1878),
        d = r(757),
        p = r(8519),
        h = (function (e) {
          function t(t, r, n, i) {
            var a = e.call(this, t, i) || this
            return (
              (a._sheetInfoImpl = t),
              (a._publishedSheetInfos = n),
              (a._registryId = i),
              (a._storyPointInfoImpls = []),
              (a._deferred = new u.ShortLivedDeferred()),
              a.initializeStory(r),
              a
            )
          }
          return (
            i(t, e),
            (t.prototype.initializeStory = function (e) {
              var t = this
              e.storyPoints.forEach(function (r) {
                var n = r.index === e.activeStoryPointIndex,
                  i = new p.StoryPointInfoImpl(r.caption, r.index, r.storyPointId, n, r.updated, t)
                t._storyPointInfoImpls.push(i),
                  n &&
                    (t._activeStoryPointImpl = new d.StoryPointImpl(
                      i,
                      t._publishedSheetInfos,
                      t._registryId,
                      r.containedSheetInfo,
                    ))
              })
            }),
            (t.prototype.updateStoryInfo = function (e, t) {
              if (this._storyPointInfoImpls) {
                var r = this._storyPointInfoImpls[e]
                if (r.storyPointId !== t.storyPointId)
                  throw new s.TableauError(
                    a.EmbeddingErrorCodes.StoryPointIdMismatch,
                    "We should not be updating a story point when the IDs don't match. Existing storyPointID=" +
                      r.storyPointId +
                      ', newStoryPointID=' +
                      t.storyPointId,
                  )
                ;(r.caption = t.caption),
                  (r.updated = t.updated),
                  this._activeStoryPointImpl.storyPointId === t.storyPointId &&
                    (this._activeStoryPointImpl.updated = r.updated)
              }
            }),
            (t.prototype.updateStory = function (e) {
              var t = this
              this._storyPointInfoImpls &&
                (this._storyPointInfoImpls.forEach(function (r) {
                  r.storyPointId === e.storyPointId
                    ? ((r.caption = e.caption),
                      (r.index = e.index),
                      (r.active = !0),
                      (r.updated = e.updated),
                      (t._activeStoryPointImpl = new d.StoryPointImpl(
                        r,
                        t._publishedSheetInfos,
                        t._registryId,
                        e.containedSheetInfo,
                      )))
                    : (r.active = !1)
                }),
                this.activeStoryPoint && this._deferred.resolve(this.activeStoryPoint))
            }),
            Object.defineProperty(t.prototype, 'activeStoryPoint', {
              get: function () {
                return this._activeStoryPointImpl
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'storyPointsInfo', {
              get: function () {
                return this._storyPointInfoImpls
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'isActive', {
              get: function () {
                return this._sheetInfoImpl.active
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'isHidden', {
              get: function () {
                return !!this._sheetInfoImpl.isHidden
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.activateNextStoryPointAsync = function () {
              if (this._activeStoryPointImpl.index === this._storyPointInfoImpls.length - 1)
                return Promise.resolve(this._activeStoryPointImpl)
              var e = this._deferred.getNewPromiseOrThrowIfBusy()
              return (
                o.ApiServiceRegistry.get(this._registryId)
                  .getService('story-activation-service')
                  .activateNextStoryPointAsync(),
                e
              )
            }),
            (t.prototype.activatePreviousStoryPointAsync = function () {
              if (0 === this._activeStoryPointImpl.index) return Promise.resolve(this._activeStoryPointImpl)
              var e = this._deferred.getNewPromiseOrThrowIfBusy()
              return (
                o.ApiServiceRegistry.get(this._registryId)
                  .getService('story-activation-service')
                  .activatePreviousStoryPointAsync(),
                e
              )
            }),
            (t.prototype.activateStoryPointAsync = function (e) {
              if (
                (l.ErrorHelpers.verifyParameter(e, 'index'),
                l.ErrorHelpers.verifyParameterType(e, 'number', 'index'),
                e < 0 || e >= this._storyPointInfoImpls.length)
              )
                throw new s.TableauError(
                  a.EmbeddingErrorCodes.IndexOutOfRange,
                  'The index passed to this command is out of range.',
                )
              if (e === this._activeStoryPointImpl.index) return Promise.resolve(this._activeStoryPointImpl)
              var t = this._deferred.getNewPromiseOrThrowIfBusy()
              return (
                o.ApiServiceRegistry.get(this._registryId)
                  .getService('story-activation-service')
                  .activateStoryPointAsync(e),
                t
              )
            }),
            (t.prototype.revertStoryPointAsync = function (e) {
              var t = this
              if (
                (l.ErrorHelpers.verifyParameter(e, 'index'),
                l.ErrorHelpers.verifyParameterType(e, 'number', 'index'),
                e < 0 || e >= this._storyPointInfoImpls.length)
              )
                throw new s.TableauError(
                  a.EmbeddingErrorCodes.IndexOutOfRange,
                  'The index passed to this command is out of range.',
                )
              return o.ApiServiceRegistry.get(this._registryId)
                .getService('story-activation-service')
                .revertStoryPointAsync(e)
                .then(function (e) {
                  return (
                    t.updateStoryInfo(e.index, e),
                    new p.StoryPointInfoImpl(e.caption, e.index, e.storyPointId, !1, e.updated, t)
                  )
                })
            }),
            (t.prototype.clearPendingPromises = function () {
              this._deferred && this._deferred.reject('All pending promises cleared')
            }),
            t
          )
        })(c.SheetImpl)
      t.StoryImpl = h
    },
    757: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(1554),
        a = r(489),
        o = r(4657),
        s = r(6749),
        l = r(928),
        u = (function () {
          function e(e, t, r, n) {
            ;(this._storyPointInfoImpl = e), n && (this._containedSheetImpl = this.createContainedSheet(n, t, r))
          }
          return (
            Object.defineProperty(e.prototype, 'index', {
              get: function () {
                return this._storyPointInfoImpl.index
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'caption', {
              get: function () {
                return this._storyPointInfoImpl.caption
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'active', {
              get: function () {
                return this._storyPointInfoImpl.active
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'updated', {
              get: function () {
                return this._storyPointInfoImpl.updated
              },
              set: function (e) {
                this._storyPointInfoImpl.updated = e
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'parentStory', {
              get: function () {
                return this._storyPointInfoImpl.parentStory
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'containedSheet', {
              get: function () {
                return this._containedSheetImpl
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'storyPointId', {
              get: function () {
                return this._storyPointInfoImpl.storyPointId
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.createContainedSheet = function (e, t, r) {
              var u,
                c = a.SheetUtils.getPublishedSheetInfoByName(e.name, t),
                d = a.SheetUtils.createAutomaticSize(),
                p = void 0 === c,
                h = c ? c.url : '',
                m = new s.SheetInfoImpl(e.name, a.SheetUtils.getSheetTypeEnum(e.sheetType), d, -1, !1, p, h)
              switch (m.sheetType) {
                case n.SheetType.Worksheet:
                  var y = { worksheet: m.name }
                  u = new l.WorksheetImpl(m, r, y, null, this)
                  break
                case n.SheetType.Dashboard:
                  var g = { sheetName: m.name, isDashboard: !0 }
                  u = new o.DashboardImpl(m, e.dashboardZones, g, r, this)
                  break
                default:
                  throw new i.TableauError(n.SharedErrorCodes.ServerError, 'Invalid SheetType')
              }
              return u
            }),
            e
          )
        })()
      t.StoryPointImpl = u
    },
    8519: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e, t, r, n, i, a) {
          ;(this._caption = e),
            (this._index = t),
            (this._storyPointId = r),
            (this._active = n),
            (this._updated = i),
            (this._parentStoryImpl = a)
        }
        return (
          Object.defineProperty(e.prototype, 'caption', {
            get: function () {
              return this._caption
            },
            set: function (e) {
              this._caption = e
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'index', {
            get: function () {
              return this._index
            },
            set: function (e) {
              this._index = e
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'storyPointId', {
            get: function () {
              return this._storyPointId
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'active', {
            get: function () {
              return this._active
            },
            set: function (e) {
              this._active = e
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'updated', {
            get: function () {
              return this._updated
            },
            set: function (e) {
              this._updated = e
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'parentStory', {
            get: function () {
              return this._parentStoryImpl
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.StoryPointInfoImpl = r
    },
    3826: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      t.WorkbookImpl = function () {}
    },
    928: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(1750),
        s = r(6411),
        l = r(1110),
        u = r(850),
        c = r(9887),
        d = r(1554),
        p = r(316),
        h = r(1234),
        m = (function (e) {
          function t(t, r, n, i, a) {
            var o = e.call(this, t, r) || this
            return (o._visualId = n), (o._parentDashboardImpl = i), (o._parentStoryPointImpl = a), o
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'parentDashboard', {
              get: function () {
                return this._parentDashboardImpl
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'parentStoryPoint', {
              get: function () {
                return this._parentStoryPointImpl
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'visualId', {
              get: function () {
                return this._visualId
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getMaxPageRowLimit = function () {
              return 1e4
            }),
            (t.prototype.applyFilterAsync = function (e, t, r, n) {
              return (
                p.ErrorHelpers.verifyEnumValue(r, a.FilterUpdateType, 'Contract.FilterUpdateType'),
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('filter-service')
                  .applyFilterAsync(this.visualId, e, t, r, n)
              )
            }),
            (t.prototype.applyRangeFilterAsync = function (e, t) {
              return (
                p.ErrorHelpers.verifyParameter(e, 'fieldName'),
                p.ErrorHelpers.verifyParameter(t, 'filterOptions'),
                t.nullOption
                  ? p.ErrorHelpers.verifyEnumValue(t.nullOption, o.FilterNullOption, 'FilterNullOption')
                  : p.ErrorHelpers.verifyRangeParamType(t.min, t.max),
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('filter-service')
                  .applyRangeFilterAsync(this.visualId, e, t)
              )
            }),
            (t.prototype.applyHierarchicalFilterAsync = function (e, t, r, n) {
              if (
                (p.ErrorHelpers.verifyParameter(e, 'fieldName'),
                p.ErrorHelpers.verifyParameter(t, 'values'),
                p.ErrorHelpers.verifyEnumValue(r, a.FilterUpdateType, 'Contract.FilterUpdateType'),
                !Array.isArray(t) && !t.levels)
              )
                throw new d.TableauError(
                  o.ErrorCodes.InvalidParameter,
                  'values parameter for applyHierarchicalFilterAsync must be an array or contain a levels key',
                )
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('filter-service')
                  .applyHierarchicalFilterAsync(this.visualId, e, t, r, n)
              )
            }),
            (t.prototype.clearFilterAsync = function (e) {
              return (
                p.ErrorHelpers.verifyParameter(e, 'fieldName'),
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('filter-service')
                  .clearFilterAsync(this.visualId, e)
              )
            }),
            (t.prototype.applyRelativeDateFilterAsync = function (e, t) {
              return (
                p.ErrorHelpers.verifyStringParameter(e, 'fieldName'),
                p.ErrorHelpers.verifyParameter(t, 'options'),
                p.ErrorHelpers.verifyEnumValue(t.periodType, o.PeriodType, 'PeriodType'),
                p.ErrorHelpers.verifyEnumValue(t.rangeType, o.DateRangeType, 'DateRangeType'),
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('filter-service')
                  .applyRelativeDateFilterAsync(this.visualId, e, t)
              )
            }),
            (t.prototype.getDataSourcesAsync = function () {
              var e = this
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('data-source-service')
                  .getDataSourcesAsync(this.visualId)
                  .then(function (t) {
                    var r = t,
                      n = r.worksheetDataSchemaMap[e.name],
                      i = [],
                      a = n.primaryDataSource
                    i.push(e.createDataSourceFromInfo(r.dataSources[a]))
                    for (var o = 0, s = n.referencedDataSourceList; o < s.length; o++) {
                      var l = s[o]
                      l !== a && i.push(e.createDataSourceFromInfo(r.dataSources[l]))
                    }
                    return i
                  })
              )
            }),
            (t.prototype.getFiltersAsync = function () {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId).getService('filter-service').getFiltersAsync(this.visualId)
              )
            }),
            (t.prototype.getSelectedMarksAsync = function () {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getSelectedMarksAsync(this.visualId)
              )
            }),
            (t.prototype.getHighlightedMarksAsync = function () {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getHighlightedMarksAsync(this.visualId)
              )
            }),
            (t.prototype.getSummaryDataAsync = function (e) {
              return (
                this.verifyActiveSheet(),
                (e = e || {}),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getUnderlyingDataAsync(
                    this.visualId,
                    u.GetDataType.Summary,
                    !!e.ignoreAliases,
                    !!e.ignoreSelection,
                    !0,
                    e.columnsToIncludeById || [],
                    e.maxRows || 0,
                    e.includeDataValuesOption || o.IncludeDataValuesOption.AllValues,
                  )
              )
            }),
            (t.prototype.getSummaryDataReaderAsync = function (e, t) {
              return (
                this.verifyActiveSheet(),
                (t = t || {}),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getSummaryDataReaderAsync(
                    this.visualId,
                    e || this.getMaxPageRowLimit(),
                    !!t.ignoreAliases,
                    !!t.ignoreSelection,
                    !0,
                    t.columnsToIncludeById || [],
                    t.includeDataValuesOption || o.IncludeDataValuesOption.AllValues,
                  )
              )
            }),
            (t.prototype.getVisualSpecificationAsync = function () {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('visual-model-service')
                  .getVisualSpecificationAsync(this.visualId)
              )
            }),
            (t.prototype.getSummaryColumnsInfoAsync = function () {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getSummaryColumnsInfoAsync(this.visualId)
              )
            }),
            (t.prototype.getUnderlyingDataAsync = function (e) {
              return (
                this.verifyActiveSheet(),
                (e = e || {}),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getUnderlyingDataAsync(
                    this.visualId,
                    u.GetDataType.Underlying,
                    !!e.ignoreAliases,
                    !!e.ignoreSelection,
                    !!e.includeAllColumns,
                    e.columnsToIncludeById || [],
                    e.maxRows || 0,
                    e.includeDataValuesOption || o.IncludeDataValuesOption.AllValues,
                  )
              )
            }),
            (t.prototype.getUnderlyingTablesAsync = function () {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('data-source-service')
                  .getUnderlyingTablesAsync(this.visualId)
                  .then(function (e) {
                    return e.map(function (e) {
                      return new l.LogicalTable(e)
                    })
                  })
              )
            }),
            (t.prototype.getUnderlyingTableDataAsync = function (e, t) {
              return (
                this.verifyActiveSheet(),
                (t = t || {}),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getUnderlyingTableDataAsync(
                    this.visualId,
                    e,
                    !!t.ignoreAliases,
                    !!t.ignoreSelection,
                    !!t.includeAllColumns,
                    t.columnsToIncludeById || [],
                    t.maxRows || 0,
                    t.includeDataValuesOption || o.IncludeDataValuesOption.AllValues,
                  )
              )
            }),
            (t.prototype.getUnderlyingTableDataReaderAsync = function (e, t, r) {
              return (
                this.verifyActiveSheet(),
                (r = r || {}),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getUnderlyingTableDataReaderAsync(
                    this.visualId,
                    e,
                    t || this.getMaxPageRowLimit(),
                    !!r.ignoreAliases,
                    !!r.ignoreSelection,
                    !!r.includeAllColumns,
                    r.columnsToIncludeById || [],
                    r.includeDataValuesOption || o.IncludeDataValuesOption.AllValues,
                  )
              )
            }),
            (t.prototype.clearSelectedMarksAsync = function () {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('selection-service')
                  .clearSelectedMarksAsync(this.visualId)
              )
            }),
            (t.prototype.selectMarksByValueAsync = function (e, t) {
              return (
                p.ErrorHelpers.verifyParameter(e, 'fieldName'),
                p.ErrorHelpers.verifyEnumValue(t, o.SelectionUpdateType, 'SelectionUpdateType'),
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('selection-service')
                  .selectMarksByValueAsync(this.visualId, e, t)
              )
            }),
            (t.prototype.selectMarksByIdAsync = function (e, t) {
              return (
                p.ErrorHelpers.verifyParameter(e, 'fieldName'),
                p.ErrorHelpers.verifyEnumValue(t, o.SelectionUpdateType, 'SelectionUpdateType'),
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('selection-service')
                  .selectMarksByIdAsync(this.visualId, e, t)
              )
            }),
            (t.prototype.annotateMarkAsync = function (e, t) {
              return (
                p.ErrorHelpers.verifyParameter(e, 'mark'),
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('annotation-service')
                  .annotateMarkAsync(this.visualId, e, t)
              )
            }),
            (t.prototype.getAnnotationsAsync = function () {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('annotation-service')
                  .getAnnotationsAsync(this.visualId)
              )
            }),
            (t.prototype.removeAnnotationAsync = function (e) {
              return (
                p.ErrorHelpers.verifyParameter(e, 'annotation'),
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('annotation-service')
                  .removeAnnotationAsync(this.visualId, e)
              )
            }),
            (t.prototype.appendContextMenuAsync = function (e, t) {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('external-context-menu-service')
                  .appendContextMenuAsync(this.visualId.worksheet, e, t)
              )
            }),
            (t.prototype.removeContextMenuAsync = function (e, t) {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('external-context-menu-service')
                  .removeContextMenuAsync(this.visualId.worksheet, e, t)
              )
            }),
            (t.prototype.executeContextMenuAsync = function (e, t) {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('external-context-menu-service')
                  .executeContextMenuAsync(this.visualId.worksheet, e, t)
              )
            }),
            (t.prototype.renameContextMenuAsync = function (e, t, r) {
              return (
                this.verifyActiveSheet(),
                c.ApiServiceRegistry.get(this._registryId)
                  .getService('external-context-menu-service')
                  .renameContextMenuAsync(this.visualId.worksheet, e, t, r)
              )
            }),
            (t.prototype.hoverTupleAsync = function (e, t) {
              return this.isInsideDashboardExtension()
                ? Promise.reject(
                    new d.TableauError(
                      a.SharedErrorCodes.ImplementationError,
                      'hoverTupleAsync is not supported in dashboard extensions',
                    ),
                  )
                : c.ApiServiceRegistry.get(this._registryId)
                    .getService('selection-service')
                    .hoverTupleAsync(this.visualId, e, t)
            }),
            (t.prototype.selectTuplesAsync = function (e, t, r) {
              return this.isInsideDashboardExtension()
                ? Promise.reject(
                    new d.TableauError(
                      a.SharedErrorCodes.ImplementationError,
                      'selectTuplesAsync is not supported in dashboard extensions',
                    ),
                  )
                : c.ApiServiceRegistry.get(this._registryId)
                    .getService('selection-service')
                    .selectTuplesAsync(this.visualId, e, t, r)
            }),
            (t.prototype.createDataSourceFromInfo = function (e) {
              var t = new h.DataSourceImpl(e, this._registryId),
                r = new s.DataSource(t)
              return t.initializeWithPublicInterfaces(r), r
            }),
            (t.prototype.verifyActiveSheet = function () {
              var e = this.active,
                t = this.isInsideActiveDashboard(),
                r = this.isInsideActiveStoryPoint()
              if (!e && !t && !r)
                throw new d.TableauError(o.SharedErrorCodes.NotActiveSheet, 'Operation not allowed on non-active sheet')
            }),
            (t.prototype.isInsideActiveStoryPoint = function () {
              return this._parentStoryPointImpl && this._parentStoryPointImpl.active
            }),
            (t.prototype.isInsideActiveDashboard = function () {
              return this._parentDashboardImpl && this._parentDashboardImpl.active
            }),
            (t.prototype.isInsideDashboardExtension = function () {
              return null !== this._parentDashboardImpl
            }),
            t
          )
        })(r(1878).SheetImpl)
      t.WorksheetImpl = m
    },
    1110: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e) {
          this._logicalTable = e
        }
        return (
          Object.defineProperty(e.prototype, 'id', {
            get: function () {
              return this._logicalTable.id
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'caption', {
            get: function () {
              return this._logicalTable.caption
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.LogicalTable = r
    },
    3416: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(9887),
        s = r(316),
        l = (function () {
          function e(e, t, r, n, i) {
            ;(this._worksheetName = e),
              (this._fieldName = t),
              (this._filterType = r),
              (this._fieldId = n),
              (this._registryId = i)
          }
          return (
            Object.defineProperty(e.prototype, 'worksheetName', {
              get: function () {
                return this._worksheetName
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'fieldName', {
              get: function () {
                return this._fieldName
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'fieldId', {
              get: function () {
                return this._fieldId
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'filterType', {
              get: function () {
                return this._filterType
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.getFieldAsync = function () {
              return o.ApiServiceRegistry.get(this._registryId)
                .getService('data-source-service')
                .getFieldAsync(this._fieldId)
            }),
            (e.prototype.getAppliedWorksheetsAsync = function () {
              return o.ApiServiceRegistry.get(this._registryId)
                .getService('filter-service')
                .getAppliedWorksheetsAsync(this._worksheetName, this._fieldId)
            }),
            (e.prototype.setAppliedWorksheetsAsync = function (e) {
              s.ErrorHelpers.verifyParameter(e, 'applyToWorksheets')
              var t = new Set(e)
              return o.ApiServiceRegistry.get(this._registryId)
                .getService('filter-service')
                .setAppliedWorksheetsAsync(this._worksheetName, this._fieldName, this._fieldId, Array.from(t))
            }),
            e
          )
        })()
      t.Filter = l
      var u = (function (e) {
        function t(t, r, n, i, a, o, s, l) {
          var u = e.call(this, t, r, i, n, a) || this
          return (u._appliedValues = o), (u._isExcludeMode = s), (u._isAllSelected = l), u
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, 'isAllSelected', {
            get: function () {
              return this._isAllSelected
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'appliedValues', {
            get: function () {
              return this._appliedValues
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'isExcludeMode', {
            get: function () {
              return this._isExcludeMode
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.getDomainAsync = function (e) {
            return (
              e || (e = a.FilterDomainType.Relevant),
              s.ErrorHelpers.verifyEnumValue(e, a.FilterDomainType, 'FilterDomainType'),
              o.ApiServiceRegistry.get(this._registryId)
                .getService('filter-service')
                .getCategoricalDomainAsync(this._worksheetName, this._fieldId, e)
            )
          }),
          t
        )
      })(l)
      t.CategoricalFilter = u
      var c = (function () {
        function e(e, t, r) {
          ;(this._value = e), (this._hierarchicalPath = t), (this._level = r)
        }
        return (
          Object.defineProperty(e.prototype, 'value', {
            get: function () {
              return this._value
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'hierarchicalPath', {
            get: function () {
              return this._hierarchicalPath
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'level', {
            get: function () {
              return this._level
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.HierarchicalDataValue = c
      var d = (function () {
        function e(e, t) {
          ;(this._name = e), (this._levelSelectionState = t)
        }
        return (
          Object.defineProperty(e.prototype, 'name', {
            get: function () {
              return this._name
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'levelSelectionState', {
            get: function () {
              return this._levelSelectionState
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.HierarchicalLevelDetail = d
      var p = (function (e) {
        function t(t, r, n, i, a, o, s, l, u, c, d) {
          var p = e.call(this, t, r, i, n, a) || this
          return (
            (p._dimensionName = o),
            (p._hierarchyCaption = s),
            (p._numberOfLevels = l),
            (p._levelDetails = u),
            (p._appliedValues = c),
            (p._isAllSelected = d),
            p
          )
        }
        return (
          i(t, e),
          (t.prototype.getDomainAsync = function (e) {
            throw new Error('Method not implemented.')
          }),
          Object.defineProperty(t.prototype, 'dimensionName', {
            get: function () {
              return this._dimensionName
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'hierarchyCaption', {
            get: function () {
              return this._hierarchyCaption
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'numberOfLevels', {
            get: function () {
              return this._numberOfLevels
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'levelDetails', {
            get: function () {
              return this._levelDetails
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'isAllSelected', {
            get: function () {
              return this._isAllSelected
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'appliedValues', {
            get: function () {
              return this._appliedValues
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        )
      })(l)
      t.HierarchicalFilter = p
      var h = (function (e) {
        function t(t, r, n, i, a, o, s, l) {
          var u = e.call(this, t, r, i, n, a) || this
          return (u._min = o), (u._max = s), (u._includeNullValues = l), u
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, 'minValue', {
            get: function () {
              return this._min
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'maxValue', {
            get: function () {
              return this._max
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'includeNullValues', {
            get: function () {
              return this._includeNullValues
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.getDomainAsync = function (e) {
            var t = o.ApiServiceRegistry.get(this._registryId).getService('filter-service')
            return (
              e || (e = a.FilterDomainType.Relevant),
              s.ErrorHelpers.verifyEnumValue(e, a.FilterDomainType, 'FilterDomainType'),
              t.getRangeDomainAsync(this._worksheetName, this._fieldId, e)
            )
          }),
          t
        )
      })(l)
      t.RangeFilter = h
      var m = (function (e) {
        function t(t, r, n, i, a, o, s, l, u) {
          var c = e.call(this, t, r, i, n, a) || this
          return (c._anchorDate = o), (c._periodType = s), (c._rangeType = l), (c._rangeN = u), c
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, 'anchorDate', {
            get: function () {
              return this._anchorDate
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'periodType', {
            get: function () {
              return this._periodType
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'rangeType', {
            get: function () {
              return this._rangeType
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'rangeN', {
            get: function () {
              return this._rangeN
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        )
      })(l)
      t.RelativeDateFilter = m
      var y = (function () {
        function e(e, t) {
          ;(this._values = e), (this._domainType = t)
        }
        return (
          Object.defineProperty(e.prototype, 'values', {
            get: function () {
              return this._values
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'type', {
            get: function () {
              return this._domainType
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.CategoricalDomain = y
      var g = (function () {
        function e(e, t, r) {
          ;(this._min = e), (this._max = t), (this._domainType = r)
        }
        return (
          Object.defineProperty(e.prototype, 'type', {
            get: function () {
              return this._domainType
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'min', {
            get: function () {
              return this._min
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'max', {
            get: function () {
              return this._max
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.RangeDomain = g
    },
    4284: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e, t, r, n, i, a) {
          ;(this._data = e),
            (this._columns = t),
            (this._totalRowCount = r),
            (this._isTotalRowCountLimited = n),
            (this._isSummaryData = i),
            (this._marksInfo = a),
            (this._name = i ? 'Summary Data Table' : 'Underlying Data Table')
        }
        return (
          Object.defineProperty(e.prototype, 'name', {
            get: function () {
              return this._name
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'data', {
            get: function () {
              return this._data
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'columns', {
            get: function () {
              return this._columns
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'marksInfo', {
            get: function () {
              return this._marksInfo
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'totalRowCount', {
            get: function () {
              return this._totalRowCount
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'isTotalRowCountLimited', {
            get: function () {
              return this._isTotalRowCountLimited
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'isSummaryData', {
            get: function () {
              return this._isSummaryData
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.DataTable = r
      var n = (function () {
        function e(e, t, r) {
          ;(this._type = e), (this._color = t), (this._tupleId = r)
        }
        return (
          Object.defineProperty(e.prototype, 'type', {
            get: function () {
              return this._type
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'color', {
            get: function () {
              return this._color
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'tupleId', {
            get: function () {
              return this._tupleId
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.MarkInfo = n
      var i = (function () {
        function e(e, t, r, n, i) {
          ;(this._fieldName = e), (this._fieldId = t), (this._dataType = r), (this._isReferenced = n), (this._index = i)
        }
        return (
          Object.defineProperty(e.prototype, 'fieldName', {
            get: function () {
              return this._fieldName
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'fieldId', {
            get: function () {
              return this._fieldId
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'dataType', {
            get: function () {
              return this._dataType
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'isReferenced', {
            get: function () {
              return this._isReferenced
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'index', {
            get: function () {
              return this._index
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.Column = i
      var a = (function () {
        function e(e, t, r) {
          ;(this._value = e), (this._nativeValue = t), (this._formattedValue = r)
        }
        return (
          Object.defineProperty(e.prototype, 'value', {
            get: function () {
              return this._value
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'nativeValue', {
            get: function () {
              return this._nativeValue
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'formattedValue', {
            get: function () {
              return this._formattedValue
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.DataValue = a
    },
    2513: function (e, t, r) {
      var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, a) {
              function o(e) {
                try {
                  l(n.next(e))
                } catch (e) {
                  a(e)
                }
              }
              function s(e) {
                try {
                  l(n.throw(e))
                } catch (e) {
                  a(e)
                }
              }
              function l(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, s)
              }
              l((n = n.apply(e, t || [])).next())
            })
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              i,
              a,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1]
                  return i[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (a = { next: s(0), throw: s(1), return: s(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function () {
                  return this
                }),
              a
            )
            function s(a) {
              return function (s) {
                return (function (a) {
                  if (r) throw new TypeError('Generator is already executing.')
                  for (; o; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                          !(i = i.call(n, a[1])).done)
                      )
                        return i
                      switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                        case 0:
                        case 1:
                          i = a
                          break
                        case 4:
                          return o.label++, { value: a[1], done: !1 }
                        case 5:
                          o.label++, (n = a[1]), (a = [0])
                          continue
                        case 7:
                          ;(a = o.ops.pop()), o.trys.pop()
                          continue
                        default:
                          if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                            o = 0
                            continue
                          }
                          if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                            o.label = a[1]
                            break
                          }
                          if (6 === a[0] && o.label < i[1]) {
                            ;(o.label = i[1]), (i = a)
                            break
                          }
                          if (i && o.label < i[2]) {
                            ;(o.label = i[2]), o.ops.push(a)
                            break
                          }
                          i[2] && o.ops.pop(), o.trys.pop()
                          continue
                      }
                      a = t.call(e, o)
                    } catch (e) {
                      ;(a = [6, e]), (n = 0)
                    } finally {
                      r = i = 0
                    }
                  if (5 & a[0]) throw a[1]
                  return { value: a[0] ? a[1] : void 0, done: !0 }
                })([a, s])
              }
            }
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(9887),
        o = r(316),
        s = (function () {
          function e(e, t, r, n) {
            ;(this._id = e),
              (this._totalRowCount = t),
              (this._pageRowCount = r),
              (this._registryId = n),
              (this._pageCount = Math.ceil(t / r))
          }
          return (
            Object.defineProperty(e.prototype, 'totalRowCount', {
              get: function () {
                return this._totalRowCount
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'pageCount', {
              get: function () {
                return this._pageCount
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.getPageAsync = function (e) {
              return (
                o.ErrorHelpers.verifyRange(e, 0, this._pageCount),
                a.ApiServiceRegistry.get(this._registryId)
                  .getService('get-data-service')
                  .getPageAsync(this._id, e, this._pageRowCount)
              )
            }),
            (e.prototype.getAllPagesAsync = function (e) {
              return n(this, void 0, void 0, function () {
                var t, r, n, a, o, s, l, u, c, d
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, this.getPageAsync(0)]
                    case 1:
                      ;(t = i.sent()),
                        (e = e || this.totalRowCount),
                        (r = Math.min(e, this.totalRowCount)),
                        (n = Math.ceil(r / this._pageRowCount)),
                        (a = Math.min(n, 400)),
                        (o = a < n),
                        (s = []),
                        (l = 1),
                        (i.label = 2)
                    case 2:
                      return l < a ? [4, this.getPageAsync(l)] : [3, 5]
                    case 3:
                      ;(u = i.sent()), s.push(u.data), (i.label = 4)
                    case 4:
                      return l++, [3, 2]
                    case 5:
                      return (
                        ((c = (d = t.data).concat.apply(d, s)).length = r),
                        [
                          2,
                          {
                            name: t.name,
                            data: c,
                            columns: t.columns,
                            totalRowCount: o ? a * this._pageRowCount : r,
                            isTotalRowCountLimited: o,
                            isSummaryData: t.isSummaryData,
                          },
                        ]
                      )
                  }
                })
              })
            }),
            (e.prototype.releaseAsync = function () {
              return a.ApiServiceRegistry.get(this._registryId).getService('get-data-service').releaseAsync(this._id)
            }),
            e
          )
        })()
      t.DataTableReader = s
    },
    1426: function (e, t) {
      var r,
        n =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (
              (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              r(e, t)
            )
          }),
          function (e, t) {
            function n() {
              this.constructor = e
            }
            r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = function () {}
      t.SelectionModel = i
      var a = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (t.selectValues = []), t
        }
        return n(t, e), t
      })(i)
      t.ValueSelectionModel = a
      var o = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return n(t, e), t
      })(a)
      t.HierarchicalSelectionModel = o
      var s = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return n(t, e), t
      })(i)
      t.RangeSelectionModel = s
      var l = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return n(t, e), t
      })(a)
      t.DimensionSelectionModel = l
      t.TupleSelectionModel = function () {
        this.objectIds = []
      }
      t.SelectionModelsContainer = function () {
        ;(this.hierModelArr = []), (this.dimModelArr = []), (this.quantModelArr = [])
      }
      t.SelectTuplesInteractionModel = function (e, t, r, n) {
        void 0 === t && (t = []),
          (this.visualIdPresModel = e),
          (this.tupleIds = t),
          (this.selectOptions = r),
          (this.tooltipContext = n)
      }
      t.HoverTupleInteractionModel = function (e, t, r) {
        ;(this.visualIdPresModel = e), (this.tupleId = t), (this.tooltipContext = r)
      }
    },
    2391: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e, t) {
          ;(this._x = e), (this._y = t)
        }
        return (
          Object.defineProperty(e.prototype, 'x', {
            get: function () {
              return this._x
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'y', {
            get: function () {
              return this._y
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.Point = r
    },
    850: (e, t) => {
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        ((r = t.GetDataType || (t.GetDataType = {})).Summary = 'summary'),
        (r.Underlying = 'underlying')
    },
    7458: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(9887),
        i = r(8929),
        a = r(903),
        o = r(194),
        s = r(4886),
        l = r(2429),
        u = r(879),
        c = r(5210),
        d = r(2294),
        p = r(7658),
        h = r(7132),
        m = r(8226),
        y = r(5268),
        g = r(8434),
        f = r(8009)
      t.registerAllSharedServices = function (e, t, r) {
        n.ApiServiceRegistry.get(t).registerService(new i.AnimationServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new o.DataSourceServiceImpl(e, t, r)),
          n.ApiServiceRegistry.get(t).registerService(new s.ExportServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new c.GetDataServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new u.FilterServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new d.NotificationServiceImpl(e)),
          n.ApiServiceRegistry.get(t).registerService(new p.ParametersServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new h.SelectionServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new a.AnnotationServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new f.ZoneServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new m.SizeServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new y.VisualModelServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new g.VizServiceImpl(e, t)),
          n.ApiServiceRegistry.get(t).registerService(new l.ExternalContextMenuServiceImpl(e, t))
      }
    },
    9887: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(1554)
      window.__tableauApiServiceRegistry = window.__tableauApiServiceRegistry || {}
      var a = (function () {
          function e() {
            this._services = {}
          }
          return (
            (e.prototype.registerService = function (e) {
              this._services[e.serviceName] = e
            }),
            (e.prototype.getService = function (e) {
              if (!this._services.hasOwnProperty(e))
                throw new i.TableauError(n.ErrorCodes.InternalError, 'Service not registered: ' + e)
              return this._services[e]
            }),
            e
          )
        })(),
        o = (function () {
          function e() {}
          return (
            (e.get = function (t) {
              if (
                ((window.__tableauApiServiceRegistry && window.__tableauApiServiceRegistry[t]) ||
                  e.setInstance(t, new a()),
                !window.__tableauApiServiceRegistry[t])
              )
                throw new i.TableauError(n.ErrorCodes.InternalError, 'Service registry failed')
              return window.__tableauApiServiceRegistry[t]
            }),
            (e.setInstance = function (e, t) {
              window.__tableauApiServiceRegistry || (window.__tableauApiServiceRegistry = {}),
                (window.__tableauApiServiceRegistry[e] = t)
            }),
            (e.clearRegistry = function () {
              window.__tableauApiServiceRegistry = {}
            }),
            e
          )
        })()
      t.ApiServiceRegistry = o
    },
    8929: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(4695),
        s = r(2336),
        l = r(316),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'animation-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.replayAsync = function (e) {
              var t,
                r = (((t = {})[o.ParameterId.ReplaySpeed] = 1), t)
              return (
                l.ErrorHelpers.verifyEnumValue(e, a.ReplaySpeedType, 'ReplaySpeedType'),
                (r[o.ParameterId.ReplaySpeed] = s.ExternalToInternalEnumMappings.setReplaySpeedType.convert(e)),
                this.execute(o.VerbId.ReplayAnimation, r).then(function (e) {})
              )
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.AnimationServiceImpl = u
    },
    903: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(4695),
        s = r(5126),
        l = r(1426),
        u = r(1554),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'annotation-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.annotateMarkAsync = function (e, t, r) {
              var n,
                i = this.parseMarkSelectionIds([t]),
                a = '<formatted-text><run>' + r + '</run></formatted-text>',
                s =
                  (((n = {})[o.ParameterId.FunctionName] = 'annotateMarkAsync'),
                  (n[o.ParameterId.VisualId] = e),
                  (n[o.ParameterId.AnnotateEnum] = o.AnnotateEnum.Mark),
                  (n[o.ParameterId.TargetPoint] = { x: 0, y: 0 }),
                  (n[o.ParameterId.SelectionList] = [i.selection]),
                  (n[o.ParameterId.FormattedText] = a),
                  n)
              return this.execute(o.VerbId.CreateAnnotation, s).then(function (e) {})
            }),
            (t.prototype.getAnnotationsAsync = function (e) {
              var t,
                r = this,
                n = (((t = {})[o.ParameterId.FunctionName] = 'getAnnotationsAsync'), (t[o.ParameterId.VisualId] = e), t)
              return this.execute(o.VerbId.GetAnnotations, n).then(function (e) {
                var t = e.result
                return r.annotationFilterMap(t)
              })
            }),
            (t.prototype.removeAnnotationAsync = function (e, t) {
              var r,
                n = this.parseAnnotationSelectionIds([t]),
                i =
                  (((r = {})[o.ParameterId.FunctionName] = 'removeAnnotationAsync'),
                  (r[o.ParameterId.VisualId] = e),
                  (r[o.ParameterId.SelectionList] = [n.selection]),
                  r)
              return this.execute(o.VerbId.RemoveAnnotation, i).then(function (e) {})
            }),
            (t.prototype.parseMarkSelectionIds = function (e) {
              var t = [],
                r = new l.SelectionModelsContainer()
              if (
                (e.forEach(function (e) {
                  var r = e.tupleId
                  if (!(null != r && r > 0)) throw new u.TableauError(a.ErrorCodes.InternalError, 'invalid tupleId')
                  t.push(r.toString())
                }),
                0 !== t.length)
              ) {
                var n = new l.TupleSelectionModel()
                ;(n.selectionType = 'tuples'), (n.objectIds = t), (r.selection = n)
              }
              return r
            }),
            (t.prototype.parseAnnotationSelectionIds = function (e) {
              var t = [],
                r = new l.SelectionModelsContainer()
              if (
                (e.forEach(function (e) {
                  var r = e.annotationId
                  if (!(null != r && r >= 0))
                    throw new u.TableauError(a.ErrorCodes.InternalError, 'invalid annotationId')
                  t.push(r.toString())
                }),
                0 !== t.length)
              ) {
                var n = new l.TupleSelectionModel()
                ;(n.selectionType = 'annotations'), (n.objectIds = t), (r.selection = n)
              }
              return r
            }),
            (t.prototype.mapAnnotation = function (e) {
              return {
                annotationHTML: e.annotationText,
                annotationId: e.annotationId,
                annotationText: e.annotationPlainText,
                annotationType: s.InternalToExternalEnumMappings.annotationType.convert(e.annotateEnum),
                tupleId: e.tupleId,
              }
            }),
            (t.prototype.annotationFilterMap = function (e) {
              var t = this
              return e.map(function (e) {
                return t.mapAnnotation(e)
              })
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.AnnotationServiceImpl = c
    },
    6292: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(4695),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'client-info-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getClientInfoAsync = function () {
              var e,
                t = a.VerbId.GetEmbeddingClientInfo,
                r = (((e = {})[a.ParameterId.FunctionName] = 'getClientInfoAsync'), e)
              return this.execute(t, r).then(function (e) {
                return e.result
              })
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.ClientInfoServiceImpl = o
    },
    194: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(4695),
        s = r(4695),
        l = r(6411),
        u = r(2131),
        c = r(1234),
        d = r(8695),
        p = r(1554),
        h = r(1167)
      t.SENTINEL_LOGICAL_TABLE_INFO = {
        id: o.ApiShowDataTableSentinel.SingleTableId,
        caption: o.ApiShowDataTableSentinel.SingleTableCaption,
      }
      var m = { major: 1, minor: 20, fix: 1 },
        y = (function (e) {
          function r(t, r, n) {
            void 0 === n && (n = m)
            var i = e.call(this, t, r) || this
            return (i._platformVersion = n), i
          }
          return (
            i(r, e),
            Object.defineProperty(r.prototype, 'serviceName', {
              get: function () {
                return 'data-source-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (r.prototype.refreshAsync = function (e) {
              var t,
                r =
                  (((t = {})[s.ParameterId.FunctionName] = 'refreshAsync'),
                  (t[s.ParameterId.DeltaTimeMs] = 0),
                  (t[s.ParameterId.ShouldRefreshDS] = !0),
                  t)
              return (
                e && (r[s.ParameterId.DataSourceId] = e),
                this.execute(s.VerbId.RefreshDataSource, r).then(function (e) {})
              )
            }),
            (r.prototype.getActiveTablesAsync = function (e) {
              var t,
                r =
                  (((t = {})[s.ParameterId.FunctionName] = 'getActiveTablesAsync'),
                  (t[s.ParameterId.DataSourceId] = e),
                  t)
              return this.execute(s.VerbId.GetActiveTables, r).then(function (t) {
                var r = t.result
                if (0 === r.tables.length)
                  throw new p.TableauError(
                    a.ErrorCodes.UnsupportedMethodForDataSourceType,
                    'getActiveTables is not supported for: ' + e,
                  )
                return r.tables
              })
            }),
            (r.prototype.getDataSourcesAsync = function (e) {
              var t,
                r = (((t = {})[s.ParameterId.FunctionName] = 'getDataSourcesAsync'), (t[s.ParameterId.VisualId] = e), t)
              return this.execute(s.VerbId.GetDataSources, r).then(function (e) {
                return e.result
              })
            }),
            (r.prototype.getAllDataSourcesAsync = function () {
              var e,
                t = (((e = {})[s.ParameterId.FunctionName] = 'getAllDataSourcesAsync'), e)
              return this.execute(s.VerbId.GetAllDataSources, t).then(function (e) {
                return e.result
              })
            }),
            (r.prototype.getConnectionSummariesAsync = function (e) {
              var t,
                r =
                  (((t = {})[s.ParameterId.FunctionName] = 'getConnectionSummariesAsync'),
                  (t[s.ParameterId.DataSourceId] = e),
                  t)
              return this.execute(s.VerbId.GetConnectionDescriptionSummaries, r).then(function (e) {
                return e.result
              })
            }),
            (r.prototype.getFieldAsync = function (e) {
              var t,
                r = this,
                n = s.VerbId.GetFieldAndDataSource,
                i = (((t = {})[s.ParameterId.FunctionName] = 'getFieldAsync'), (t[s.ParameterId.FieldId] = e), t)
              return this.execute(n, i).then(function (e) {
                var t = e.result[s.ParameterId.DataSource],
                  n = e.result[s.ParameterId.Field]
                return r.convertField(n, r.convertDataSource(t))
              })
            }),
            (r.prototype.getLogicalTablesAsync = function (e) {
              var r
              if (!this.isObjectModelSupportedByPlatform())
                return new Promise(function (e) {
                  return e([t.SENTINEL_LOGICAL_TABLE_INFO])
                })
              var n =
                (((r = {})[s.ParameterId.FunctionName] = 'getLogicalTablesAsync'),
                (r[s.ParameterId.DataSourceId] = e),
                r)
              return this.execute(s.VerbId.GetLogicalTables, n).then(function (e) {
                return e.result
              })
            }),
            (r.prototype.getUnderlyingTablesAsync = function (e) {
              var r
              if (!this.isObjectModelSupportedByPlatform())
                return new Promise(function (e) {
                  return e([t.SENTINEL_LOGICAL_TABLE_INFO])
                })
              var n =
                (((r = {})[s.ParameterId.FunctionName] = 'getUnderlyingTablesAsync'),
                (r[s.ParameterId.VisualId] = e),
                r)
              return this.execute(s.VerbId.GetUnderlyingTables, n).then(function (e) {
                return e.result
              })
            }),
            (r.prototype.convertField = function (e, t) {
              return new u.Field(new d.FieldImpl(e, t))
            }),
            (r.prototype.convertDataSource = function (e) {
              return new l.DataSource(new c.DataSourceImpl(e, this._registryId))
            }),
            (r.prototype.isObjectModelSupportedByPlatform = function () {
              return o.VersionLessThan({ major: 1, minor: 13, fix: 0 }, this._platformVersion)
            }),
            r
          )
        })(h.ServiceImplBase)
      t.DataSourceServiceImpl = y
    },
    4886: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          }),
        a =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, a) {
              function o(e) {
                try {
                  l(n.next(e))
                } catch (e) {
                  a(e)
                }
              }
              function s(e) {
                try {
                  l(n.throw(e))
                } catch (e) {
                  a(e)
                }
              }
              function l(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, s)
              }
              l((n = n.apply(e, t || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              i,
              a,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1]
                  return i[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (a = { next: s(0), throw: s(1), return: s(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function () {
                  return this
                }),
              a
            )
            function s(a) {
              return function (s) {
                return (function (a) {
                  if (r) throw new TypeError('Generator is already executing.')
                  for (; o; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                          !(i = i.call(n, a[1])).done)
                      )
                        return i
                      switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                        case 0:
                        case 1:
                          i = a
                          break
                        case 4:
                          return o.label++, { value: a[1], done: !1 }
                        case 5:
                          o.label++, (n = a[1]), (a = [0])
                          continue
                        case 7:
                          ;(a = o.ops.pop()), o.trys.pop()
                          continue
                        default:
                          if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                            o = 0
                            continue
                          }
                          if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                            o.label = a[1]
                            break
                          }
                          if (6 === a[0] && o.label < i[1]) {
                            ;(o.label = i[1]), (i = a)
                            break
                          }
                          if (i && o.label < i[2]) {
                            ;(o.label = i[2]), o.ops.push(a)
                            break
                          }
                          i[2] && o.ops.pop(), o.trys.pop()
                          continue
                      }
                      a = t.call(e, o)
                    } catch (e) {
                      ;(a = [6, e]), (n = 0)
                    } finally {
                      r = i = 0
                    }
                  if (5 & a[0]) throw a[1]
                  return { value: a[0] ? a[1] : void 0, done: !0 }
                })([a, s])
              }
            }
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var s = r(4695),
        l = r(1750),
        u = r(2336),
        c = r(2561),
        d = r(316),
        p = r(1554),
        h = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'export-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getExportCrosstabSheetMapAsync = function (e) {
              var t,
                r = s.VerbId.GetExportCrosstabSheetMap,
                n =
                  (((t = {})[s.ParameterId.FunctionName] = 'getExportCrosstabSheetMapAsync'),
                  (t[s.ParameterId.CurrentSheetType] = u.ExternalToInternalEnumMappings.sheetType.convert(e)),
                  t)
              return this.execute(r, n).then(function (e) {
                return e.result
              })
            }),
            (t.prototype.exportCrosstabAsync = function (e, t, r, n) {
              return a(this, void 0, void 0, function () {
                var i, a, u, c
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        d.ErrorHelpers.verifySheetName(r, e),
                        d.ErrorHelpers.verifyEnumValue(t, l.CrosstabFileFormat, 'CrosstabFileFormat'),
                        [4, this.getExportCrosstabSheetMapAsync(n)]
                      )
                    case 1:
                      if (!(i = o.sent())[e])
                        throw new p.TableauError(l.SharedErrorCodes.InternalError, 'missing sheet doc id from sheetMap')
                      switch (
                        (((c = {})[s.ParameterId.FunctionName] = 'exportCrosstabAsync'),
                        (c[s.ParameterId.SheetIdentifier] = i[e]),
                        (c[s.ParameterId.SendNotifications] = !0),
                        (a = c),
                        t)
                      ) {
                        case l.CrosstabFileFormat.CSV:
                          ;(u = s.VerbId.ExportCrosstabCsvDownload), (a[s.ParameterId.UseTabDelimiters] = !0)
                          break
                        case l.CrosstabFileFormat.Excel:
                          u = s.VerbId.ExportCrosstabExcelDownload
                          break
                        default:
                          throw new p.TableauError(
                            l.SharedErrorCodes.InternalError,
                            'unsupported Crosstab file format.',
                          )
                      }
                      return [
                        2,
                        this.execute(u, a)
                          .then(function (e) {
                            return e.result
                          })
                          .catch(function () {
                            throw new p.TableauError(
                              l.SharedErrorCodes.CrosstabCreationError,
                              'An unexpected error occurred while generating the document.',
                            )
                          }),
                      ]
                  }
                })
              })
            }),
            (t.prototype.exportDataAsync = function (e, t) {
              var r, n
              d.ErrorHelpers.verifyExportDataOptions(t)
              var i = new Set(t.columnsToIncludeById),
                a = Array.from(i),
                o = s.VerbId.ExportDataDownload,
                u =
                  (((r = {})[s.ParameterId.FunctionName] = 'exportDataAsync'),
                  (r[s.ParameterId.VisualId] = e),
                  (r[s.ParameterId.IgnoreAliases] = null != (n = t.ignoreAliases) && n),
                  (r[s.ParameterId.ColumnsToIncludeById] = a),
                  r)
              return this.execute(o, u)
                .then(function () {})
                .catch(function () {
                  throw new p.TableauError(
                    l.SharedErrorCodes.DataCreationError,
                    'An unexpected error occurred while generating the document.',
                  )
                })
            }),
            (t.prototype.exportPowerPointAsync = function (e, t) {
              var r
              d.ErrorHelpers.verifySheetNamesForPDFAndPPT(e, t)
              var n = s.VerbId.ExportPowerpointDownload,
                i =
                  (((r = {})[s.ParameterId.FunctionName] = 'exportPowerPointAsync'),
                  (r[s.ParameterId.ExportOriginUrl] = ''),
                  (r[s.ParameterId.SelectedSheetNames] = e),
                  r)
              return this.execute(n, i)
                .then(function (e) {
                  return e.result
                })
                .catch(function () {
                  throw new p.TableauError(
                    l.SharedErrorCodes.PowerPointCreationError,
                    'An error occured while attempting to generate the PowerPoint file.',
                  )
                })
            }),
            (t.prototype.exportPDFAsync = function (e, t, r) {
              return a(this, void 0, void 0, function () {
                var n, i, a, u
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        d.ErrorHelpers.verifyExportPDFOptions(t),
                        d.ErrorHelpers.verifySheetNamesForPDFAndPPT(e, r),
                        [4, this.getExportPDFOptionsAsync()]
                      )
                    case 1:
                      return (
                        (n = o.sent()),
                        c.ExportHelpers.updateInternalExportPDFOptions(n, t, e),
                        (i = s.VerbId.ExportPdfDownload),
                        ((u = {})[s.ParameterId.FunctionName] = 'exportPDFAsync'),
                        (u[s.ParameterId.ExportPdfOptions] = n),
                        (a = u),
                        [
                          2,
                          this.execute(i, a)
                            .then(function (e) {
                              return e.result
                            })
                            .catch(function () {
                              throw new p.TableauError(
                                l.SharedErrorCodes.PDFCreationError,
                                'Unable to create PDF because something went wrong. Try again.',
                              )
                            }),
                        ]
                      )
                  }
                })
              })
            }),
            (t.prototype.getExportPDFOptionsAsync = function () {
              var e,
                t = s.VerbId.GetExportPdfOptions,
                r = (((e = {})[s.ParameterId.FunctionName] = 'getExportPdfOptionsAsync'), e)
              return this.execute(t, r).then(function (e) {
                return e.result
              })
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.ExportServiceImpl = h
    },
    2429: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(4695),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'external-context-menu-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.appendContextMenuAsync = function (e, t, r) {
              var n,
                i = a.VerbId.AppendExternalMenuItem,
                o =
                  (((n = {})[a.ParameterId.FunctionName] = 'appendContextMenuAsync'),
                  (n[a.ParameterId.WorksheetName] = e),
                  (n[a.ParameterId.ExternalMenuItemDisplayName] = r.displayName),
                  n)
              return this.execute(i, o).then(function (e) {
                return e.result
              })
            }),
            (t.prototype.removeContextMenuAsync = function (e, t, r) {
              var n,
                i = a.VerbId.RemoveExternalMenuItem,
                o =
                  (((n = {})[a.ParameterId.FunctionName] = 'removeContextMenuAsync'),
                  (n[a.ParameterId.WorksheetName] = e),
                  (n[a.ParameterId.ExternalMenuItemId] = r),
                  n)
              return this.execute(i, o).then(function (e) {})
            }),
            (t.prototype.executeContextMenuAsync = function (e, t, r) {
              var n,
                i = a.VerbId.ExecuteExternalMenuItem,
                o =
                  (((n = {})[a.ParameterId.FunctionName] = 'executeContextMenuAsync'),
                  (n[a.ParameterId.WorksheetName] = e),
                  (n[a.ParameterId.ExternalMenuItemId] = r),
                  n)
              return this.execute(i, o).then(function (e) {})
            }),
            (t.prototype.renameContextMenuAsync = function (e, t, r, n) {
              var i,
                o = a.VerbId.RenameExternalMenu,
                s =
                  (((i = {})[a.ParameterId.FunctionName] = 'renameContextMenuAsync'),
                  (i[a.ParameterId.WorksheetName] = e),
                  (i[a.ParameterId.ExternalMenuHeader] = r),
                  (i[a.ParameterId.ExternalMenuDescription] = n),
                  i)
              return this.execute(o, s).then(function (e) {})
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.ExternalContextMenuServiceImpl = o
    },
    879: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          }),
        a =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, a) {
              function o(e) {
                try {
                  l(n.next(e))
                } catch (e) {
                  a(e)
                }
              }
              function s(e) {
                try {
                  l(n.throw(e))
                } catch (e) {
                  a(e)
                }
              }
              function l(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(o, s)
              }
              l((n = n.apply(e, t || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              i,
              a,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1]
                  return i[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (a = { next: s(0), throw: s(1), return: s(2) }),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function () {
                  return this
                }),
              a
            )
            function s(a) {
              return function (s) {
                return (function (a) {
                  if (r) throw new TypeError('Generator is already executing.')
                  for (; o; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                          !(i = i.call(n, a[1])).done)
                      )
                        return i
                      switch (((n = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                        case 0:
                        case 1:
                          i = a
                          break
                        case 4:
                          return o.label++, { value: a[1], done: !1 }
                        case 5:
                          o.label++, (n = a[1]), (a = [0])
                          continue
                        case 7:
                          ;(a = o.ops.pop()), o.trys.pop()
                          continue
                        default:
                          if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || (6 !== a[0] && 2 !== a[0]))) {
                            o = 0
                            continue
                          }
                          if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                            o.label = a[1]
                            break
                          }
                          if (6 === a[0] && o.label < i[1]) {
                            ;(o.label = i[1]), (i = a)
                            break
                          }
                          if (i && o.label < i[2]) {
                            ;(o.label = i[2]), o.ops.push(a)
                            break
                          }
                          i[2] && o.ops.pop(), o.trys.pop()
                          continue
                      }
                      a = t.call(e, o)
                    } catch (e) {
                      ;(a = [6, e]), (n = 0)
                    } finally {
                      r = i = 0
                    }
                  if (5 & a[0]) throw a[1]
                  return { value: a[0] ? a[1] : void 0, done: !0 }
                })([a, s])
              }
            }
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var s = r(1750),
        l = r(4695),
        u = r(4695),
        c = r(4007),
        d = r(2336),
        p = r(5126),
        h = r(3416),
        m = r(8175),
        y = r(6077),
        g = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'filter-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.applyFilterAsync = function (e, t, r, n, i) {
              var a,
                o = u.VerbId.ApplyCategoricalFilter,
                l = (((a = {})[u.ParameterId.FunctionName] = 'applyFilterAsync'), a)
              if (((l[u.ParameterId.VisualId] = e), (l[u.ParameterId.FieldName] = t), !Array.isArray(r)))
                throw new c.TableauError(
                  s.ErrorCodes.InvalidParameter,
                  'values parameter for applyFilterAsync must be an array',
                )
              return (
                (l[u.ParameterId.FilterValues] = r),
                (l[u.ParameterId.FilterUpdateType] = d.ExternalToInternalEnumMappings.filterUpdateType.convert(n)),
                (l[u.ParameterId.IsExcludeMode] = void 0 !== i && void 0 !== i.isExcludeMode && i.isExcludeMode),
                this.execute(o, l).then(function (e) {
                  return t
                })
              )
            }),
            (t.prototype.applyRangeFilterAsync = function (e, t, r) {
              var n,
                i = this,
                a = u.VerbId.ApplyRangeFilter,
                o = (((n = {})[u.ParameterId.FunctionName] = 'applyRangeFilterAsync'), n)
              if (void 0 !== r.min && null !== r.min) {
                var s
                ;(s = r.min instanceof Date ? y.Param.serializeDateForPlatform(r.min) : r.min),
                  (o[u.ParameterId.FilterRangeMin] = s)
              }
              if (void 0 !== r.max && null !== r.max) {
                var l
                ;(l = r.max instanceof Date ? y.Param.serializeDateForPlatform(r.max) : r.max),
                  (o[u.ParameterId.FilterRangeMax] = l)
              }
              return (
                r.nullOption &&
                  (o[u.ParameterId.FilterRangeNullOption] = d.ExternalToInternalEnumMappings.nullOptions.convert(
                    r.nullOption,
                  )),
                (o[u.ParameterId.FieldName] = t),
                (o[u.ParameterId.VisualId] = e),
                this.execute(a, o).then(function (e) {
                  return i.apiFilterHandlerCheckForCommandError(e.result), t
                })
              )
            }),
            (t.prototype.applyHierarchicalFilterAsync = function (e, t, r, n, i) {
              var a,
                o = u.VerbId.HierarchicalFilter,
                s = (((a = {})[u.ParameterId.FunctionName] = 'applyHierarchicalFilterAsync'), a)
              ;(s[u.ParameterId.VisualId] = e), (s[u.ParameterId.FieldName] = t)
              var l = r.levels
              return (
                Array.isArray(l) && l.length > 0
                  ? (s[u.ParameterId.FilterLevels] = l)
                  : r.length > 0
                    ? (s[u.ParameterId.FilterValues] = r)
                    : (s[u.ParameterId.FilterLevels] = []),
                (s[u.ParameterId.FilterUpdateType] = d.ExternalToInternalEnumMappings.filterUpdateType.convert(n)),
                (s[u.ParameterId.IsExcludeMode] = i && !!i.isExcludeMode),
                this.execute(o, s).then(function (e) {
                  return t
                })
              )
            }),
            (t.prototype.clearFilterAsync = function (e, t) {
              var r,
                n = u.VerbId.ClearFilter,
                i = (((r = {})[u.ParameterId.FunctionName] = 'clearFilterAsync'), r)
              return (
                (i[u.ParameterId.VisualId] = e),
                (i[u.ParameterId.FieldName] = t),
                this.execute(n, i).then(function (e) {
                  return t
                })
              )
            }),
            (t.prototype.applyRelativeDateFilterAsync = function (e, t, r) {
              var n,
                i = u.VerbId.ApplyRelativeDateFilter,
                a = (((n = {})[u.ParameterId.FunctionName] = 'applyRelativeDateFilterAsync'), n)
              if (
                ((a[u.ParameterId.VisualId] = e),
                (a[u.ParameterId.FieldName] = t),
                (a[u.ParameterId.PeriodType] = d.ExternalToInternalEnumMappings.periodType.convert(r.periodType)),
                (a[u.ParameterId.DateRangeType] = d.ExternalToInternalEnumMappings.dateRangeType.convert(r.rangeType)),
                r.rangeType === s.DateRangeType.LastN || r.rangeType === s.DateRangeType.NextN)
              ) {
                if (void 0 === r.rangeN || null === r.rangeN)
                  throw new c.TableauError(
                    s.EmbeddingErrorCodes.MissingRangeNForRelativeDateFilters,
                    'Missing rangeN field for a relative date filter of LASTN or NEXTN.',
                  )
                a[u.ParameterId.RangeN] = r.rangeN
              }
              return (
                void 0 !== r.anchorDate &&
                  null !== r.anchorDate &&
                  (a[u.ParameterId.AnchorDate] = this.convertAnchorDate(r.anchorDate)),
                this.execute(i, a).then(function (e) {
                  return e.result
                })
              )
            }),
            (t.prototype.getFiltersAsync = function (e) {
              var t,
                r = this,
                n = u.VerbId.GetFilters,
                i = (((t = {})[u.ParameterId.FunctionName] = 'getFiltersAsync'), t)
              return (
                (i[u.ParameterId.VisualId] = e),
                this.execute(n, i).then(function (e) {
                  var t = e.result
                  return r.convertDomainFilters(t)
                })
              )
            }),
            (t.prototype.getCategoricalDomainAsync = function (e, t, r) {
              var n,
                i = this,
                a = u.VerbId.GetCategoricalDomain,
                o = (((n = {})[u.ParameterId.FunctionName] = 'getCategoricalDomainAsync'), n)
              return (
                (o[u.ParameterId.VisualId] = { worksheet: e }),
                (o[u.ParameterId.FieldId] = t),
                (o[u.ParameterId.DomainType] = d.ExternalToInternalEnumMappings.filterDomainType.convert(r)),
                this.execute(a, o).then(function (e) {
                  var t = e.result
                  return i.convertCategoricalDomain(t, r)
                })
              )
            }),
            (t.prototype.getRangeDomainAsync = function (e, t, r) {
              var n,
                i = this,
                a = u.VerbId.GetRangeDomain,
                o = (((n = {})[u.ParameterId.FunctionName] = 'getRangeDomainAsync'), n)
              return (
                (o[u.ParameterId.VisualId] = { worksheet: e }),
                (o[u.ParameterId.FieldId] = t),
                (o[u.ParameterId.DomainType] = d.ExternalToInternalEnumMappings.filterDomainType.convert(r)),
                this.execute(a, o).then(function (e) {
                  var t = e.result
                  return i.convertRangeDomain(t, r)
                })
              )
            }),
            (t.prototype.getDashboardFiltersAsync = function () {
              var e,
                t = this,
                r = u.VerbId.GetDashboardFilters,
                n = (((e = {})[u.ParameterId.FunctionName] = 'getDashboardFiltersAsync'), e)
              return this.execute(r, n).then(function (e) {
                var r = e.result
                return t.convertDomainFilters(r)
              })
            }),
            (t.prototype.applyDashboardFilterAsync = function (e, t, r, n) {
              var i,
                a = u.VerbId.DashboardCategoricalFilter,
                o = (((i = {})[u.ParameterId.FunctionName] = 'applyDashboardFilterAsync'), i)
              return (
                (o[u.ParameterId.FieldName] = e),
                (o[u.ParameterId.FilterValues] = t),
                (o[u.ParameterId.FilterUpdateType] = d.ExternalToInternalEnumMappings.filterUpdateType.convert(r)),
                (o[u.ParameterId.IsExcludeMode] = n && !!n.isExcludeMode),
                this.execute(a, o).then(function (e) {
                  return e.result
                })
              )
            }),
            (t.prototype.getAppliedWorksheetsAsync = function (e, t) {
              var r
              return a(this, void 0, void 0, function () {
                var n, i
                return o(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return [4, this.executeGetAppliedWorksheets(e, t, 'getAppliedWorksheetsAsync')]
                    case 1:
                      return (
                        (n = a.sent()),
                        (i = []),
                        null === (r = n.worksheets) ||
                          void 0 === r ||
                          r.map(function (e) {
                            e.isSelected && i.push(e.worksheetName)
                          }),
                        [2, i]
                      )
                  }
                })
              })
            }),
            (t.prototype.setAppliedWorksheetsAsync = function (e, t, r, n) {
              return a(this, void 0, void 0, function () {
                var i, a, l, d, p
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, this.executeGetAppliedWorksheets(e, r, 'getAppliedWorksheetsAsyncInternal')]
                    case 1:
                      if (!(i = o.sent()) || !i.worksheets)
                        throw new c.TableauError(
                          s.SharedErrorCodes.InternalError,
                          'This filter does not apply to multiple worksheets',
                        )
                      if (
                        ((a = []),
                        (l = ''),
                        i.worksheets.forEach(function (e) {
                          e.isActive && (l = e.worksheetName), (e.isSelected || e.isEnabled) && a.push(e.worksheetName)
                        }),
                        '' === l)
                      )
                        throw new c.TableauError(s.SharedErrorCodes.InternalError, 'No active worksheet')
                      if (!n.includes(l))
                        throw new c.TableauError(
                          s.SharedErrorCodes.InternalError,
                          l + ' must be included in the applied worksheets',
                        )
                      return (
                        n.forEach(function (e) {
                          if (!a.includes(e))
                            throw new c.TableauError(
                              s.SharedErrorCodes.InternalError,
                              'The field ' + t + " isn't applicable to the worksheet " + e,
                            )
                        }),
                        (d = u.VerbId.ChangeSharedFilter),
                        ((p = {})[u.ParameterId.FunctionName] = 'setAppliedWorksheetsAsync'),
                        (p[u.ParameterId.VisualId] = { worksheet: e }),
                        (p[u.ParameterId.FieldId] = r),
                        (p[u.ParameterId.SharedFilterSheets] = n),
                        [
                          2,
                          this.execute(d, p).then(function (e) {
                            return n
                          }),
                        ]
                      )
                  }
                })
              })
            }),
            (t.prototype.executeGetAppliedWorksheets = function (e, t, r) {
              var n = u.VerbId.GetSharedFilter,
                i = {}
              return (
                (i[u.ParameterId.FunctionName] = r),
                (i[u.ParameterId.VisualId] = { worksheet: e }),
                (i[u.ParameterId.FieldId] = t),
                this.execute(n, i).then(function (e) {
                  return e.result
                })
              )
            }),
            (t.prototype.convertDomainFilters = function (e) {
              var t = this,
                r = []
              return (
                e.forEach(function (e) {
                  switch (e.filterType) {
                    case u.FilterType.Categorical:
                      if (!(n = e)) throw new Error('Invalid Categorical Filter')
                      r.push(t.convertCategoricalFilter(n))
                      break
                    case u.FilterType.Hierarchical:
                      if (!(n = e)) throw new Error('Invalid Hierarchical Filter')
                      r.push(t.convertHierarchicalFilter(n))
                      break
                    case u.FilterType.Range:
                      if (!(n = e)) throw new Error('Invalid Range Filter')
                      r.push(t.convertRangeFilter(n))
                      break
                    case u.FilterType.RelativeDate:
                      var n
                      if (!(n = e)) throw new Error('Invalid Relative Date Filter')
                      r.push(t.convertRelativeDateFilter(n))
                  }
                }),
                r
              )
            }),
            (t.prototype.convertCategoricalFilter = function (e) {
              var t = e.values.map(function (e) {
                return m.DataValueFactory.MakeFilterDataValue(e)
              })
              return new h.CategoricalFilter(
                e.visualId.worksheet,
                e.fieldCaption,
                e.fieldName,
                u.FilterType.Categorical,
                this._registryId,
                t,
                e.isExclude,
                e.isAllSelected,
              )
            }),
            (t.prototype.convertHierarchicalFilter = function (e) {
              var t = e.values.map(function (e) {
                  return new h.HierarchicalDataValue(
                    m.DataValueFactory.MakeFilterDataValue(e.value),
                    e.hierarchicalPath,
                    e.level,
                  )
                }),
                r = e.levelInfo.map(function (e) {
                  return new h.HierarchicalLevelDetail(
                    e.name,
                    p.InternalToExternalEnumMappings.hierarchicalLevelSelectionState.convert(e.levelSelectionState),
                  )
                })
              return new h.HierarchicalFilter(
                e.visualId.worksheet,
                e.fieldCaption,
                e.fieldName,
                u.FilterType.Hierarchical,
                this._registryId,
                e.dimensionName,
                e.hierarchyCaption,
                e.levels,
                r,
                t,
                e.isAllSelected,
              )
            }),
            (t.prototype.convertRangeFilter = function (e) {
              var t = m.DataValueFactory.MakeFilterDataValue(e.min),
                r = m.DataValueFactory.MakeFilterDataValue(e.max)
              return new h.RangeFilter(
                e.visualId.worksheet,
                e.fieldCaption,
                e.fieldName,
                u.FilterType.Range,
                this._registryId,
                t,
                r,
                e.includeNullValues,
              )
            }),
            (t.prototype.convertRelativeDateFilter = function (e) {
              var t = m.DataValueFactory.MakeFilterDataValue(e.anchorDate)
              return new h.RelativeDateFilter(
                e.visualId.worksheet,
                e.fieldCaption,
                e.fieldName,
                s.FilterType.RelativeDate,
                this._registryId,
                t,
                p.InternalToExternalEnumMappings.dateStepPeriod.convert(e.periodType),
                p.InternalToExternalEnumMappings.dateRangeType.convert(e.rangeType),
                e.rangeN,
              )
            }),
            (t.prototype.convertCategoricalDomain = function (e, t) {
              var r = e.values.map(function (e) {
                return m.DataValueFactory.MakeFilterDataValue(e)
              })
              return new h.CategoricalDomain(r, t)
            }),
            (t.prototype.convertRangeDomain = function (e, t) {
              var r = m.DataValueFactory.MakeFilterDataValue(e.min),
                n = m.DataValueFactory.MakeFilterDataValue(e.max)
              return new h.RangeDomain(r, n, t)
            }),
            (t.prototype.convertAnchorDate = function (e) {
              var t = e.getUTCFullYear(),
                r = e.getUTCMonth() + 1,
                n = e.getUTCDate(),
                i = e.getUTCHours(),
                a = e.getUTCMinutes(),
                o = e.getUTCSeconds()
              if (isNaN(t) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a) || isNaN(o))
                throw new c.TableauError(
                  s.EmbeddingErrorCodes.InvalidDateParameter,
                  'Invalid date parameter: anchorDate',
                )
              return t + '-' + r + '-' + n + ' ' + i + ':' + a + ':' + o
            }),
            (t.prototype.apiFilterHandlerCheckForCommandError = function (e) {
              if (e[l.ParameterId.ParameterError]) {
                if (e[l.ParameterId.InvalidFieldCaption])
                  throw new c.TableauError(
                    s.SharedErrorCodes.InvalidFilterFieldName,
                    e[l.ParameterId.InvalidFieldCaption],
                  )
                if (e[l.ParameterId.InvalidValues])
                  throw new c.TableauError(s.SharedErrorCodes.InvalidFilterFieldValue, e[l.ParameterId.InvalidValues])
                if (e[l.ParameterId.InvalidAggFieldName])
                  throw new c.TableauError(
                    s.SharedErrorCodes.InvalidAggregationFieldName,
                    e[l.ParameterId.InvalidAggFieldName],
                  )
                throw new c.TableauError(s.SharedErrorCodes.ServerError, 'Server Error')
              }
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.FilterServiceImpl = g
    },
    5210: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(4695),
        s = r(2280),
        l = r(4007),
        u = r(2336),
        c = r(4284),
        d = r(2513),
        p = r(8175),
        h = r(850),
        m = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this
            return (t.viewDataTableCacheId = s.v4()), t
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'get-data-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getMaxRowLimit = function () {
              return 1e4
            }),
            (t.prototype.getViewDataTableCacheId = function () {
              return this.viewDataTableCacheId
            }),
            (t.prototype.getLimitedMaxRows = function (e) {
              var t = this.getMaxRowLimit() + 1
              return e > 0 && e < t ? e : t
            }),
            (t.prototype.getUnderlyingDataAsync = function (e, t, r, n, i, a, s, l) {
              var c,
                d = this,
                p = t === h.GetDataType.Summary,
                m = p ? 'getSummaryDataAsync' : 'getUnderlyingDataAsync',
                y = p ? o.VerbId.GetDataSummaryData : o.VerbId.GetUnderlyingData,
                g = y === o.VerbId.GetUnderlyingData ? this.getLimitedMaxRows(s) : s,
                f = (((c = {})[o.ParameterId.FunctionName] = m), c)
              return (
                (f[o.ParameterId.VisualId] = e),
                (f[o.ParameterId.IgnoreAliases] = r),
                (f[o.ParameterId.IgnoreSelection] = n),
                (f[o.ParameterId.IncludeAllColumns] = i),
                (f[o.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(a)),
                (f[o.ParameterId.MaxRows] = g),
                (f[o.ParameterId.ShowDataTableFormat] =
                  u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(l)),
                this.execute(y, f).then(function (e) {
                  var t = e.result
                  return d.processResultsTable(t.data, t.isSummary)
                })
              )
            }),
            (t.prototype.getSummaryDataReaderAsync = function (e, t, r, n, i, a, s) {
              var l,
                c = this,
                p =
                  (((l = {})[o.ParameterId.FunctionName] = 'getSummaryDataReaderAsync'),
                  (l[o.ParameterId.ViewDataTableCacheId] = this.getViewDataTableCacheId()),
                  (l[o.ParameterId.VisualId] = e),
                  (l[o.ParameterId.PageRowCount] = t),
                  (l[o.ParameterId.IgnoreAliases] = r),
                  (l[o.ParameterId.IgnoreSelection] = n),
                  (l[o.ParameterId.IncludeAllColumns] = i),
                  (l[o.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(a)),
                  (l[o.ParameterId.ShowDataTableFormat] =
                    u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(s)),
                  l)
              return this.execute(o.VerbId.GetDataSummaryDataReader, p).then(function (e) {
                var r = e.result
                return new d.DataTableReader(r.id, r.totalRowCount, t, c._registryId)
              })
            }),
            (t.prototype.getSummaryColumnsInfoAsync = function (e) {
              var t,
                r = o.VerbId.GetDataSummaryData,
                n =
                  (((t = {})[o.ParameterId.FunctionName] = 'getSummaryColumnsInfoAsync'),
                  (t[o.ParameterId.VisualId] = e),
                  (t[o.ParameterId.IgnoreAliases] = !0),
                  (t[o.ParameterId.IgnoreSelection] = !0),
                  (t[o.ParameterId.IncludeAllColumns] = !0),
                  (t[o.ParameterId.MaxRows] = 1),
                  (t[o.ParameterId.ShowDataTableFormat] = o.ApiShowDataTableFormat.NativeValuesOnly),
                  t)
              return this.execute(r, n).then(function (e) {
                return e.result.data.headers.map(function (e) {
                  return new c.Column(e.fieldCaption, e.fieldName, e.dataType, e.isReferenced, e.index)
                })
              })
            }),
            (t.prototype.getSelectedMarksAsync = function (e) {
              var t,
                r = this,
                n =
                  (((t = {})[o.ParameterId.FunctionName] = 'getSelectedMarksAsync'), (t[o.ParameterId.VisualId] = e), t)
              return this.execute(o.VerbId.GetSelectedMarks, n).then(function (e) {
                return {
                  data: e.result.data.map(function (e) {
                    return r.processResultsTable(e, !0)
                  }),
                }
              })
            }),
            (t.prototype.getHighlightedMarksAsync = function (e) {
              var t,
                r = this,
                n =
                  (((t = {})[o.ParameterId.FunctionName] = 'getHighlightedMarksAsync'),
                  (t[o.ParameterId.VisualId] = e),
                  t)
              return this.execute(o.VerbId.GetHighlightedMarks, n).then(function (e) {
                return {
                  data: e.result.data.map(function (e) {
                    return r.processResultsTable(e, !0)
                  }),
                }
              })
            }),
            (t.prototype.getDataSourceDataAsync = function (e, t, r, n, i, a) {
              var s,
                l = this,
                c =
                  (((s = {})[o.ParameterId.FunctionName] = 'getDataSourceDataAsync'),
                  (s[o.ParameterId.DataSourceId] = e),
                  (s[o.ParameterId.IgnoreAliases] = t),
                  (s[o.ParameterId.MaxRows] = this.getLimitedMaxRows(r)),
                  (s[o.ParameterId.ColumnsToInclude] = this.verifyIncludeColumnArray(n)),
                  (s[o.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(i)),
                  (s[o.ParameterId.ShowDataTableFormat] =
                    u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(a)),
                  s)
              return this.execute(o.VerbId.GetDataSourceData, c).then(function (e) {
                var t = e.result
                return l.processResultsTable(t.data, !1)
              })
            }),
            (t.prototype.getLogicalTableDataAsync = function (e, t, r, n, i, a, s) {
              var l,
                c = this,
                d =
                  (((l = {})[o.ParameterId.FunctionName] = 'getLogicalTableDataAsync'),
                  (l[o.ParameterId.ColumnsToInclude] = i),
                  (l[o.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(a)),
                  (l[o.ParameterId.DataSourceId] = e),
                  (l[o.ParameterId.IgnoreAliases] = r),
                  (l[o.ParameterId.LogicalTableId] = t),
                  (l[o.ParameterId.MaxRows] = this.getLimitedMaxRows(n)),
                  (l[o.ParameterId.ShowDataTableFormat] =
                    u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(s)),
                  l)
              return this.execute(o.VerbId.GetLogicalTableData, d).then(function (e) {
                var t = e.result
                return c.processResultsTable(t.data, !1)
              })
            }),
            (t.prototype.getLogicalTableDataReaderAsync = function (e, t, r, n, i, a) {
              var s,
                l = this,
                c =
                  (((s = {})[o.ParameterId.FunctionName] = 'getLogicalTableDataReaderAsync'),
                  (s[o.ParameterId.ViewDataTableCacheId] = this.getViewDataTableCacheId()),
                  (s[o.ParameterId.DataSourceId] = e),
                  (s[o.ParameterId.LogicalTableId] = t),
                  (s[o.ParameterId.PageRowCount] = r),
                  (s[o.ParameterId.IgnoreAliases] = n),
                  (s[o.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(i)),
                  (s[o.ParameterId.ShowDataTableFormat] =
                    u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(a)),
                  s)
              return this.execute(o.VerbId.GetLogicalTableDataReader, c).then(function (e) {
                var t = e.result
                return new d.DataTableReader(t.id, t.totalRowCount, r, l._registryId)
              })
            }),
            (t.prototype.getUnderlyingTableDataAsync = function (e, t, r, n, i, a, s, l) {
              var c,
                d = this,
                p =
                  (((c = {})[o.ParameterId.FunctionName] = 'getUnderlyingTableDataAsync'),
                  (c[o.ParameterId.VisualId] = e),
                  (c[o.ParameterId.LogicalTableId] = t),
                  (c[o.ParameterId.IgnoreAliases] = r),
                  (c[o.ParameterId.IgnoreSelection] = n),
                  (c[o.ParameterId.IncludeAllColumns] = i),
                  (c[o.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(a)),
                  (c[o.ParameterId.MaxRows] = this.getLimitedMaxRows(s)),
                  (c[o.ParameterId.ShowDataTableFormat] =
                    u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(l)),
                  c)
              return this.execute(o.VerbId.GetUnderlyingTableData, p).then(function (e) {
                var t = e.result
                return d.processResultsTable(t.data, !1)
              })
            }),
            (t.prototype.getUnderlyingTableDataReaderAsync = function (e, t, r, n, i, a, s, l) {
              var c,
                p = this,
                h =
                  (((c = {})[o.ParameterId.FunctionName] = 'getUnderlyingTableDataReaderAsync'),
                  (c[o.ParameterId.ViewDataTableCacheId] = this.getViewDataTableCacheId()),
                  (c[o.ParameterId.VisualId] = e),
                  (c[o.ParameterId.LogicalTableId] = t),
                  (c[o.ParameterId.IgnoreAliases] = n),
                  (c[o.ParameterId.IgnoreSelection] = i),
                  (c[o.ParameterId.IncludeAllColumns] = a),
                  (c[o.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(s)),
                  (c[o.ParameterId.ShowDataTableFormat] =
                    u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(l)),
                  (c[o.ParameterId.PageRowCount] = r),
                  c)
              return this.execute(o.VerbId.GetUnderlyingTableDataReader, h).then(function (e) {
                var t = e.result
                return new d.DataTableReader(t.id, t.totalRowCount, r, p._registryId)
              })
            }),
            (t.prototype.getPageAsync = function (e, r, n) {
              var i,
                a = this,
                s =
                  (((i = {})[o.ParameterId.FunctionName] = 'getPageAsync'),
                  (i[o.ParameterId.ViewDataTableCacheId] = this.getViewDataTableCacheId()),
                  (i[o.ParameterId.ViewDataTableId] = e),
                  (i[o.ParameterId.DataRowIndex] = r * n),
                  i)
              return this.execute(o.VerbId.GetDataTableReaderPage, s).then(function (r) {
                var n = r.result
                return a.processResultsPage(n, e === t.summaryTableId)
              })
            }),
            (t.prototype.releaseAsync = function (e) {
              var t,
                r =
                  (((t = {})[o.ParameterId.FunctionName] = 'release'),
                  (t[o.ParameterId.ViewDataTableCacheId] = this.getViewDataTableCacheId()),
                  (t[o.ParameterId.ViewDataTableId] = e),
                  t)
              return this.execute(o.VerbId.ReleaseDataTableReader, r).then(function (e) {})
            }),
            (t.prototype.verifyIncludeColumnArray = function (e) {
              if (!Array.isArray(e))
                throw new l.TableauError(
                  a.ErrorCodes.InvalidParameter,
                  'columnsToInclude and columnsToIncludeById must be valid arrays',
                )
              var t = new Set(e)
              return Array.from(t)
            }),
            (t.prototype.processResultsTable = function (e, t) {
              var r,
                n = e.headers.map(function (e) {
                  return new c.Column(e.fieldCaption, e.fieldName, e.dataType, e.isReferenced, e.index)
                })
              e.marks &&
                (r = e.marks.map(function (e) {
                  return new c.MarkInfo(e.type, e.color, e.tupleId)
                }))
              var i = !1 === t && e.dataTable.length === this.getMaxRowLimit() + 1
              i && (e.dataTable.length -= 1)
              var a = e.dataTable.map(function (e) {
                return e.map(function (e, t) {
                  return p.DataValueFactory.MakeTableDataValue(e, n[t].dataType)
                })
              })
              return r ? new c.DataTable(a, n, a.length, i, t, r) : new c.DataTable(a, n, a.length, i, t)
            }),
            (t.prototype.processResultsPage = function (e, t) {
              var r,
                n = e.headers.map(function (e) {
                  return new c.Column(e.fieldCaption, e.fieldName, e.dataType, e.isReferenced, e.index)
                })
              e.marks &&
                (r = e.marks.map(function (e) {
                  return new c.MarkInfo(e.type, e.color, e.tupleId)
                }))
              var i = e.dataTable.map(function (e) {
                return e.map(function (e, t) {
                  return p.DataValueFactory.MakeTableDataValue(e, n[t].dataType)
                })
              })
              return r ? new c.DataTable(i, n, i.length, !1, t, r) : new c.DataTable(i, n, i.length, !1, t)
            }),
            (t.summaryTableId = ''),
            t
          )
        })(r(1167).ServiceImplBase)
      t.GetDataServiceImpl = m
    },
    2294: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this
        }
        return (
          i(t, e),
          Object.defineProperty(t.prototype, 'serviceName', {
            get: function () {
              return 'notification-service'
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        )
      })(r(333).NotificationServiceImplBase)
      t.NotificationServiceImpl = a
    },
    333: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e, t) {
          ;(this._filterFn = e), (this._callbackFn = t)
        }
        return (
          (e.prototype.onNotification = function (e) {
            this._filterFn(e) && this._callbackFn(e)
          }),
          e
        )
      })()
      t.Registration = r
      var n = (function () {
        function e(e) {
          ;(this.dispatcher = e),
            (this._handlers = {}),
            this.dispatcher.registerNotificationHandler(this.onNotification.bind(this))
        }
        return (
          (e.prototype.registerHandler = function (e, t, n) {
            var i = this,
              a = this._handlers[e] || new Array(),
              o = new r(t, n)
            return (
              a.push(o),
              (this._handlers[e] = a),
              function () {
                return i.removeRegistration(e, o)
              }
            )
          }),
          (e.prototype.hasHandlersForNotificationType = function (e) {
            return this._handlers.hasOwnProperty(e)
          }),
          (e.prototype.onNotification = function (e) {
            this.hasHandlersForNotificationType(e.notificationId) &&
              this._handlers[e.notificationId].forEach(function (t) {
                return t.onNotification(e.data)
              })
          }),
          (e.prototype.removeRegistration = function (e, t) {
            this.hasHandlersForNotificationType(e) &&
              (this._handlers[e] = this._handlers[e].filter(function (e) {
                return e !== t
              }))
          }),
          e
        )
      })()
      t.NotificationServiceImplBase = n
    },
    7658: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(4695),
        s = r(6560),
        l = r(1554),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'parameters-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getParametersForSheetAsync = function (e) {
              var t,
                r =
                  (((t = {})[o.ParameterId.FunctionName] = 'getParametersForSheetAsync'),
                  (t[o.ParameterId.SheetPath] = e),
                  t)
              return this.getParametersAsync(r)
            }),
            (t.prototype.getAllParametersAsync = function () {
              var e,
                t = (((e = {})[o.ParameterId.FunctionName] = 'getParametersForSheetAsync'), e)
              return this.getParametersAsync(t)
            }),
            (t.prototype.getParametersAsync = function (e) {
              var t = this
              return this.execute(o.VerbId.GetParametersForSheet, e).then(function (e) {
                return e.result.map(function (e) {
                  return new s.ParameterImpl(e, t._registryId)
                })
              })
            }),
            (t.prototype.changeParameterValueAsync = function (e, t) {
              var r,
                n =
                  (((r = {})[o.ParameterId.FunctionName] = 'changeParameterValueAsync'),
                  (r[o.ParameterId.ParameterFieldName] = e),
                  (r[o.ParameterId.ParameterValue] = t),
                  r)
              return this.execute(o.VerbId.ChangeParameterValue, n).then(function (e) {
                return e.result
              })
            }),
            (t.prototype.findParameterByNameAsync = function (e) {
              return this.findParameterAsync(e, void 0)
            }),
            (t.prototype.findParameterByGlobalFieldNameAsync = function (e) {
              return this.findParameterAsync(void 0, e)
            }),
            (t.prototype.findParameterAsync = function (e, t) {
              var r,
                n = this,
                i = (((r = {})[o.ParameterId.FunctionName] = 'findParameterAsync'), r)
              if (void 0 !== e) i[o.ParameterId.ParameterCaption] = e
              else {
                if (void 0 === t)
                  throw new l.TableauError(
                    a.ErrorCodes.InvalidParameter,
                    'name or fieldName must be provided to find parameter',
                  )
                i[o.ParameterId.ParameterFieldName] = t
              }
              return this.execute(o.VerbId.FindParameter, i).then(function (e) {
                if ('fieldName' in e.result) {
                  var t = e.result
                  return new s.ParameterImpl(t, n._registryId)
                }
              })
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.ParametersServiceImpl = u
    },
    7132: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(4695),
        s = r(1426),
        l = r(1554),
        u = r(6077),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'selection-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.clearSelectedMarksAsync = function (e) {
              var t,
                r =
                  (((t = {})[o.ParameterId.FunctionName] = 'clearSelectedMarksAsync'),
                  (t[o.ParameterId.VisualId] = e),
                  t)
              return this.execute(o.VerbId.ClearSelectedMarks, r).then(function (e) {})
            }),
            (t.prototype.selectMarksByValueAsync = function (e, t, r) {
              var n,
                i = this
              if (0 === t.length)
                throw new l.TableauError(
                  a.ErrorCodes.InvalidParameter,
                  'Selection criteria missing for selecting marks by value',
                )
              var s = this.validateSelectionUpdateType(r),
                u = this.parseSelectionMarks(t),
                c =
                  (((n = {})[o.ParameterId.FunctionName] = 'selectMarksByValueAsync'),
                  (n[o.ParameterId.VisualId] = e),
                  (n[o.ParameterId.SelectionUpdateType] = s),
                  n)
              return (
                u.hierModelArr && u.hierModelArr.length && (c[o.ParameterId.HierValSelectionModels] = u.hierModelArr),
                u.quantModelArr &&
                  u.quantModelArr.length &&
                  (c[o.ParameterId.QuantRangeSelectionModels] = u.quantModelArr),
                u.dimModelArr && u.dimModelArr.length && (c[o.ParameterId.DimValSelectionModels] = u.dimModelArr),
                this.execute(o.VerbId.SelectByValue, c).then(function (e) {
                  i.apiFilterHandlerCheckForCommandError(e.result)
                })
              )
            }),
            (t.prototype.hoverTupleAsync = function (e, t, r) {
              var n,
                i = new s.HoverTupleInteractionModel(e, t, r),
                a =
                  (((n = {})[o.ParameterId.FunctionName] = 'hoverTupleAsync'),
                  (n[o.ParameterId.HoverTupleInteraction] = i),
                  n)
              return this.execute(o.VerbId.RaiseHoverTupleNotification, a).then(function (e) {})
            }),
            (t.prototype.selectTuplesAsync = function (e, t, r, n) {
              var i,
                a = this.validateSelectOption(r),
                l = new s.SelectTuplesInteractionModel(e, t, a, n),
                u =
                  (((i = {})[o.ParameterId.FunctionName] = 'selectTuplesAsync'),
                  (i[o.ParameterId.SelectTuplesInteraction] = l),
                  i)
              return this.execute(o.VerbId.RaiseSelectTuplesNotification, u).then(function (e) {})
            }),
            (t.prototype.apiFilterHandlerCheckForCommandError = function (e) {
              if (e[o.ParameterId.ParameterError]) {
                if (e[o.ParameterId.InvalidFields])
                  throw new l.TableauError(a.SharedErrorCodes.InvalidSelectionFieldName, e[o.ParameterId.InvalidFields])
                if (e[o.ParameterId.InvalidValues])
                  throw new l.TableauError(a.SharedErrorCodes.InvalidSelectionValue, e[o.ParameterId.InvalidValues])
                if (e[o.ParameterId.InvalidDates])
                  throw new l.TableauError(a.SharedErrorCodes.InvalidSelectionDate, e[o.ParameterId.InvalidDates])
              }
            }),
            (t.prototype.selectMarksByIdAsync = function (e, t, r) {
              var n
              if (0 === t.length)
                throw new l.TableauError(a.ErrorCodes.InvalidParameter, 'Marks info missing for selecting marks by Id')
              var i = this.validateSelectionUpdateType(r),
                s = this.parseSelectionIds(t),
                u =
                  (((n = {})[o.ParameterId.FunctionName] = 'selectMarksByIdAsync'),
                  (n[o.ParameterId.VisualId] = e),
                  (n[o.ParameterId.SelectionUpdateType] = i),
                  (n[o.ParameterId.Selection] = s.selection),
                  n)
              return this.execute(o.VerbId.SelectByValue, u).then(function (e) {})
            }),
            (t.prototype.parseSelectionIds = function (e) {
              for (var t = [], r = new s.SelectionModelsContainer(), n = 0; n < e.length; n++) {
                var i = e[n].tupleId
                if (null == i) throw new l.TableauError(a.ErrorCodes.InternalError, 'tupleId parsing error')
                t.push(i.toString())
              }
              if (0 !== t.length) {
                var o = new s.TupleSelectionModel()
                ;(o.selectionType = 'tuples'), (o.objectIds = t), (r.selection = o)
              }
              return r
            }),
            (t.prototype.parseSelectionMarks = function (e) {
              for (var t = new s.SelectionModelsContainer(), r = 0; r < e.length; r++) {
                var n = e[r]
                if (!n.fieldName || void 0 === n.value || null === n.value)
                  throw new l.TableauError(a.ErrorCodes.InternalError, 'Selection Criteria parsing error')
                var i = new RegExp('([[A-Za-z0-9]+]).*', 'g'),
                  o = n.value
                if (i.test(n.fieldName)) {
                  var u = this.addToParamsList(n.fieldName, n.value)
                  t.hierModelArr.push(u)
                } else if (void 0 !== o.min && void 0 !== o.max) {
                  var c = this.addToRangeParamsList(n.fieldName, o)
                  t.quantModelArr.push(c)
                } else {
                  var d = this.addToParamsList(n.fieldName, n.value)
                  t.dimModelArr.push(d)
                }
              }
              return t
            }),
            (t.prototype.addToParamsList = function (e, t) {
              var r = new s.ValueSelectionModel(),
                n = []
              if (t instanceof Array)
                for (var i = t, a = 0; a < i.length; a++) n.push(u.Param.serializeParameterValue(i[a]))
              else n.push(u.Param.serializeParameterValue(t))
              return (r.qualifiedFieldCaption = e), (r.selectValues = n), r
            }),
            (t.prototype.addToRangeParamsList = function (e, t) {
              var r = new s.RangeSelectionModel()
              return (
                (r.qualifiedFieldCaption = e),
                void 0 !== t.max && null !== t.max && (r.maxValue = u.Param.serializeParameterValue(t.max)),
                void 0 !== t.min && null !== t.min && (r.minValue = u.Param.serializeParameterValue(t.min)),
                (r.included = this.validateNullOptionType(t.nullOption)),
                r
              )
            }),
            (t.prototype.validateSelectionUpdateType = function (e) {
              return e === a.SelectionUpdateType.Replace
                ? o.SelectionUpdateType.Replace
                : e === a.SelectionUpdateType.Add
                  ? o.SelectionUpdateType.Add
                  : e === a.SelectionUpdateType.Remove
                    ? o.SelectionUpdateType.Remove
                    : o.SelectionUpdateType.Replace
            }),
            (t.prototype.validateNullOptionType = function (e) {
              if (e) {
                if (e === a.FilterNullOption.NullValues) return o.QuantitativeIncludedValues.IncludeNull
                if (e === a.FilterNullOption.NonNullValues) return o.QuantitativeIncludedValues.IncludeNonNull
                if (e === a.FilterNullOption.AllValues) return o.QuantitativeIncludedValues.IncludeAll
              }
              return o.QuantitativeIncludedValues.IncludeAll
            }),
            (t.prototype.validateSelectOption = function (e) {
              if (e === a.SelectOptions.Simple) return o.SelectOptions.Simple
              if (e === a.SelectOptions.Toggle) return o.SelectOptions.Toggle
              throw new l.TableauError(
                a.ErrorCodes.InvalidParameter,
                'Only simple and toggle select options are currently supported',
              )
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.SelectionServiceImpl = c
    },
    1167: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(5126),
        i = r(1554),
        a = r(4406),
        o = (function () {
          function e(e, t) {
            ;(this._dispatcher = e), (this._registryId = t)
          }
          return (
            (e.prototype.execute = function (e, t) {
              return this._dispatcher.execute(e, t).catch(function (e) {
                var t = e,
                  r = n.InternalToExternalEnumMappings.errorCode.convert(t.errorCode, a.ShouldThrow.No)
                throw new i.TableauError(r, t.message)
              })
            }),
            e
          )
        })()
      t.ServiceImplBase = o
    },
    8226: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(4695),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'size-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.changeSizeAsync = function (e, t) {
              var r,
                n,
                i,
                o,
                s,
                l =
                  (((r = {})[a.ParameterId.FunctionName] = 'changeSizeAsync'),
                  (r[a.ParameterId.SheetName] = e),
                  (r[a.ParameterId.MinHeight] = (null === (n = t.minSize) || void 0 === n ? void 0 : n.height) || 0),
                  (r[a.ParameterId.MinWidth] = (null === (i = t.minSize) || void 0 === i ? void 0 : i.width) || 0),
                  (r[a.ParameterId.MaxHeight] = (null === (o = t.maxSize) || void 0 === o ? void 0 : o.height) || 0),
                  (r[a.ParameterId.MaxWidth] = (null === (s = t.maxSize) || void 0 === s ? void 0 : s.width) || 0),
                  r)
              return this.execute(a.VerbId.SetSheetSize, l).then(function (e) {})
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.SizeServiceImpl = o
    },
    2812: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(4695),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'story-activation-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.activateNextStoryPointAsync = function () {
              var e,
                t = a.VerbId.ActivateNextStoryPoint,
                r = (((e = {})[a.ParameterId.FunctionName] = 'activateNextStoryPointAsync'), e)
              return this.execute(t, r).then(function (e) {})
            }),
            (t.prototype.activatePreviousStoryPointAsync = function () {
              var e,
                t = a.VerbId.ActivatePreviousStoryPoint,
                r = (((e = {})[a.ParameterId.FunctionName] = 'activatePreviousStoryPointAsync'), e)
              return this.execute(t, r).then(function (e) {})
            }),
            (t.prototype.activateStoryPointAsync = function (e) {
              var t,
                r = a.VerbId.ActivateStoryPoint,
                n = (((t = {})[a.ParameterId.FunctionName] = 'activateStoryPointAsync'), t)
              return (n[a.ParameterId.StoryPointIndex] = e), this.execute(r, n).then(function (e) {})
            }),
            (t.prototype.revertStoryPointAsync = function (e) {
              var t,
                r = a.VerbId.RevertStoryPoint,
                n = (((t = {})[a.ParameterId.FunctionName] = 'revertStoryPointAsync'), t)
              return (
                (n[a.ParameterId.StoryPointIndex] = e),
                this.execute(r, n).then(function (e) {
                  return e.result
                })
              )
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.StoryActivationServiceImpl = o
    },
    5268: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(4695),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'visual-model-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getVisualSpecificationAsync = function (e) {
              var t,
                r =
                  (((t = {})[a.ParameterId.FunctionName] = 'getVisualSpecificationAsync'),
                  (t[a.ParameterId.WorksheetName] = e.worksheet),
                  t)
              return this.execute(a.VerbId.GetVisualSpecification, r).then(function (e) {
                return e.result
              })
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.VisualModelServiceImpl = o
    },
    8434: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(4695),
        o = r(2913),
        s = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'viz-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.createVizImageAsync = function (e) {
              var t,
                r =
                  (((t = {})[a.ParameterId.FunctionName] = 'createVizImageAsync'),
                  (t[a.ParameterId.VizAPIInputJson] = JSON.stringify(e)),
                  t)
              return this.execute(a.VerbId.VizAPI, r).then(function (e) {
                return e.result
              })
            }),
            (t.prototype.activateSheetAsync = function (e) {
              var t,
                r =
                  (((t = {})[a.ParameterId.FunctionName] = 'activateSheetAsync'),
                  (t[a.ParameterId.SwitchToSheetName] = e),
                  t)
              return this.execute(a.VerbId.ActivateSheet, r).then(function () {})
            }),
            (t.prototype.getCustomViewsAsync = function () {
              var e,
                t = this,
                r = (((e = {})[a.ParameterId.FunctionName] = 'getCustomViewsAsync'), e)
              return this.execute(a.VerbId.GetCustomViews, r).then(function (e) {
                return e.result.map(function (e) {
                  return new o.CustomViewImpl(e, t._registryId)
                })
              })
            }),
            (t.prototype.showCustomViewAsync = function (e) {
              var t,
                r = this,
                n =
                  (((t = {})[a.ParameterId.FunctionName] = 'showCustomViewAsync'),
                  (t[a.ParameterId.CustomViewName] = e),
                  t)
              return this.execute(a.VerbId.ShowCustomView, n).then(function (e) {
                var t = e.result
                return new o.CustomViewImpl(t, r._registryId)
              })
            }),
            (t.prototype.removeCustomViewAsync = function (e) {
              var t,
                r = this,
                n =
                  (((t = {})[a.ParameterId.FunctionName] = 'removeCustomViewAsync'),
                  (t[a.ParameterId.CustomViewName] = e),
                  t)
              return this.execute(a.VerbId.RemoveCustomView, n).then(function (e) {
                var t = e.result
                return new o.CustomViewImpl(t, r._registryId)
              })
            }),
            (t.prototype.saveCustomViewAsync = function (e) {
              var t,
                r = this,
                n =
                  (((t = {})[a.ParameterId.FunctionName] = 'saveCustomViewAsync'),
                  (t[a.ParameterId.CustomViewName] = e),
                  (t[a.ParameterId.CustomViewIsDefault] = !1),
                  t)
              return this.execute(a.VerbId.SaveWorkbookAsCustomView, n).then(function (e) {
                var t = e.result
                return new o.CustomViewImpl(t, r._registryId)
              })
            }),
            (t.prototype.setActiveCustomViewAsDefaultAsync = function () {
              var e,
                t = (((e = {})[a.ParameterId.FunctionName] = 'setActiveCustomViewAsDefaultAsync'), e)
              return this.execute(a.VerbId.SetActiveCustomViewAsDefault, t).then(function () {})
            }),
            (t.prototype.saveAsync = function (e) {
              var t,
                r = this,
                n =
                  (((t = {})[a.ParameterId.FunctionName] = 'saveAsync'),
                  (t[a.ParameterId.CustomViewLuid] = e.luid),
                  (t[a.ParameterId.CustomViewName] = e.name),
                  (t[a.ParameterId.CustomViewIsDefault] = e.isDefault),
                  (t[a.ParameterId.CustomViewIsPublic] = e.shared),
                  t)
              return this.execute(a.VerbId.UpdateCustomView, n).then(function (e) {
                var t = e.result
                return new o.CustomViewImpl(t, r._registryId)
              })
            }),
            (t.prototype.getCurrentSrcAsync = function () {
              var e,
                t = (((e = {})[a.ParameterId.FunctionName] = 'getCurrentSrcAsync'), e)
              return this.execute(a.VerbId.GetCurrentSrc, t).then(function (e) {
                return e.result
              })
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.VizServiceImpl = s
    },
    8009: function (e, t, r) {
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              n(e, t)
            )
          }),
          function (e, t) {
            function r() {
              this.constructor = e
            }
            n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = r(1750),
        o = r(4695),
        s = r(2336),
        l = r(316),
        u = r(6077),
        c = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'serviceName', {
              get: function () {
                return 'zone-service'
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.setVisibilityAsync = function (e, t, r) {
              var n,
                i =
                  (((n = {})[o.ParameterId.FunctionName] = 'setVisibilityAsync'),
                  (n[o.ParameterId.Dashboard] = e),
                  (n[o.ParameterId.ZoneIdsVisibilityMap] = {}),
                  n)
              return (
                u.Param.convertParameterToMap(r, 'zoneVisibilityMap').forEach(function (e, r) {
                  l.ErrorHelpers.verifyZoneIsValid(t, Number.parseInt(r, 10)),
                    l.ErrorHelpers.verifyEnumValue(e, a.DashboardObjectVisibilityType, 'DashboardObjectVisibilityType'),
                    (i[o.ParameterId.ZoneIdsVisibilityMap][r] =
                      s.ExternalToInternalEnumMappings.setVisibilityType.convert(e))
                }),
                this.execute(o.VerbId.SetZoneVisibility, i).then(function (e) {})
              )
            }),
            (t.prototype.moveAndResizeAsync = function (e, t, r) {
              var n,
                i =
                  (((n = {})[o.ParameterId.Dashboard] = e),
                  (n[o.ParameterId.DashboardObjectPositionAndSizeUpdateList] = r),
                  n)
              return (
                r.forEach(function (e) {
                  l.ErrorHelpers.verifyZoneIsValidAndFloating(t, e.dashboardObjectID),
                    l.ErrorHelpers.verifyWidthAndHeightOfDashboardObjectPositionAndSizeUpdate(e)
                }),
                this.execute(o.VerbId.MoveAndResizeZones, i).then(function (e) {})
              )
            }),
            t
          )
        })(r(1167).ServiceImplBase)
      t.ZoneServiceImpl = c
    },
    1738: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e(e) {
          this._tableInfo = e
        }
        return (
          Object.defineProperty(e.prototype, 'name', {
            get: function () {
              return this._tableInfo.name
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'id', {
            get: function () {
              return this._tableInfo.id
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'connectionId', {
            get: function () {
              return this._tableInfo.connectionId
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'customSQL', {
            get: function () {
              return this._tableInfo.customSQL
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        )
      })()
      t.TableSummary = r
    },
    1554: function (e, t) {
      var r,
        n =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (
              (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                }),
              r(e, t)
            )
          }),
          function (e, t) {
            function n() {
              this.constructor = e
            }
            r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
          })
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = (function (e) {
        function t(r, n) {
          var i = e.call(this, r + ': ' + n) || this
          return (i._errorCode = r), Object.setPrototypeOf(i, t.prototype), i
        }
        return (
          n(t, e),
          Object.defineProperty(t.prototype, 'errorCode', {
            get: function () {
              return this._errorCode
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        )
      })(Error)
      t.TableauError = i
    },
    8175: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4695),
        i = r(4284),
        a = (function () {
          function e() {}
          return (
            (e.MakeParameterDataValue = function (e, t) {
              return new i.DataValue(
                e.value,
                n.DataTypeConverter.convertStringValueToNativeValue(e.value, t),
                e.formattedValue,
              )
            }),
            (e.MakeFilterDataValue = function (e) {
              return new i.DataValue(e.value, e.value, e.formattedValue)
            }),
            (e.MakeTableDataValue = function (e, t) {
              return new i.DataValue(
                e.value,
                void 0 !== e.value ? n.DataTypeConverter.convertValueToNativeValue(e.value, t) : void 0,
                e.formattedValue,
              )
            }),
            e
          )
        })()
      t.DataValueFactory = a
    },
    9685: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = (function () {
        function e() {
          var e = this
          this._promise = new Promise(function (t, r) {
            ;(e._resolve = t), (e._reject = r)
          })
        }
        return (
          Object.defineProperty(e.prototype, 'promise', {
            get: function () {
              return this._promise
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.resolve = function (e) {
            this._resolve && this._resolve(e)
          }),
          (e.prototype.reject = function (e) {
            this._reject && this._reject(e)
          }),
          e
        )
      })()
      ;(t.Deferred = r), (t.UnregisterTimeoutInMilliseconds = 3e4)
    },
    4406: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        i = r(1750),
        a = r(1554),
        o = (function () {
          function e(e, t) {
            ;(this._mappings = e), (this._defaultVal = t)
          }
          return (
            (e.prototype.convert = function (e, t) {
              if ((void 0 === t && (t = n.Yes), this._mappings.hasOwnProperty(e))) return this._mappings[e]
              if (void 0 !== this._defaultVal && t !== n.Yes) return this._defaultVal
              throw new a.TableauError(i.ErrorCodes.InternalError, 'Enum Mapping not found for: ' + e)
            }),
            e
          )
        })()
      ;(t.EnumConverter = o),
        (function (e) {
          ;(e.Yes = 'yes'), (e.No = 'no')
        })((n = t.ShouldThrow || (t.ShouldThrow = {})))
    },
    316: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(1554),
        a = r(6077),
        o = (function () {
          function e() {}
          return (
            (e.apiNotImplemented = function (e) {
              return new i.TableauError(n.SharedErrorCodes.InternalError, e + ' API not yet implemented.')
            }),
            (e.verifyInternalValue = function (e, t) {
              if (null == e)
                throw new i.TableauError(n.SharedErrorCodes.InternalError, e + ' is invalid value for: ' + t)
            }),
            (e.verifyParameter = function (e, t) {
              if (null == e)
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  e + ' is invalid value for parameter: ' + t,
                )
            }),
            (e.verifyParameterType = function (e, t, r) {
              if (typeof e !== t)
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  e + ' has invalid type for parameter: ' + r + '.',
                )
            }),
            (e.verifyStringParameter = function (e, t) {
              if (null == e || '' === e)
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  e + ' is invalid value for paramter: ' + t,
                )
            }),
            (e.verifyEnumValue = function (e, t, r) {
              var a = !1
              if (
                (Object.keys(t).forEach(function (r) {
                  t[r] === e.toString() && (a = !0)
                }),
                !a)
              )
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  e + ' is invalid value for enum: ' + r + '.',
                )
            }),
            (e.verifyRange = function (e, t, r) {
              if (!(t <= e && e < r))
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  e + ' is invalid value for range: [' + t + '..' + r + ')',
                )
            }),
            (e.verifyRangeParamType = function (e, t) {
              if (!e && !t)
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  'Unexpected invalid param value, at least one of min or max is required.',
                )
              if (e && !a.Param.isTypeNumber(e) && !a.Param.isTypeDate(e))
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  'Unexpected invalid param value, only Date and number are allowed for parameter min.',
                )
              if (t && !a.Param.isTypeNumber(t) && !a.Param.isTypeDate(t))
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  'Unexpected invalid param value, only Date and number are allowed for parameter max.',
                )
              if (e && t && typeof e != typeof t)
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  'Unexpected invalid param value, parameters min and max should be of the same type.',
                )
            }),
            (e.verifyZoneIsValid = function (e, t) {
              if (!e.has(t))
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  'Unexpected invalid param value, Dashboard Object Id: ' + t + ' is not present in dashboard.',
                )
            }),
            (e.verifyZoneIsValidAndFloating = function (e, t) {
              if (!e.has(t) || !e.get(t).isFloating)
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  'Unexpected invalid param value, Dashboard Object Id: ' +
                    t +
                    ' is not present or is a fixed zone in the dashboard.',
                )
            }),
            (e.verifyWidthAndHeightOfDashboardObjectPositionAndSizeUpdate = function (e) {
              if (e.width < 0 || e.height < 0)
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  'Unexpected invalid param value for dashboard object ID ' +
                    e.dashboardObjectID +
                    ': negative widths and heights are not allowed.',
                )
            }),
            (e.verifySheetName = function (e, t) {
              if (!e.includes(t))
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidSelectionSheet,
                  'sheetName parameter must belong to a worksheet within the current view',
                )
            }),
            (e.verifyExportDataOptions = function (e) {
              if (
                (!a.Param.isNullOrUndefined(e.ignoreAliases) && !a.Param.isTypeBool(e.ignoreAliases)) ||
                (!a.Param.isNullOrUndefined(e.columnsToIncludeById) && !Array.isArray(e.columnsToIncludeById))
              )
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  'options paramater must be of type ExportDataOptions',
                )
            }),
            (e.verifySheetNamesForPDFAndPPT = function (e, t) {
              if (!Array.isArray(e))
                throw new i.TableauError(n.SharedErrorCodes.InvalidParameter, 'sheetNames parameter must be an array')
              if (0 === e.length)
                throw new i.TableauError(n.SharedErrorCodes.InternalError, 'sheetNames should not be empty')
              if (
                !e.every(function (e) {
                  return t.exportableSheetNamesFromDashboard.includes(e)
                }) &&
                !(
                  e.every(function (e) {
                    return t.exportableSheetNamesFromWorkbook.includes(e)
                  }) ||
                  (1 === e.length && e[0] === t.currentSheetName)
                )
              )
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidSelectionSheet,
                  'sheetNames parameter must have all its entries be exportable sheet names from the dashboard or all its entries be exportable sheet names from the workbook',
                )
            }),
            (e.verifyExportPDFOptions = function (e) {
              try {
                this.verifyEnumValue(e.orientation, n.PrintOrientation, 'PrintOrientation'),
                  this.verifyEnumValue(e.pageSize, n.PrintPageSize, 'PrintPageSize'),
                  this.verifyEnumValue(e.scaling, n.PrintScaling, 'PrintScaling')
              } catch (e) {
                throw new i.TableauError(
                  n.SharedErrorCodes.InvalidParameter,
                  'options parameter must be of type ExportPDFOptions',
                )
              }
            }),
            e
          )
        })()
      t.ErrorHelpers = o
    },
    2561: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4695),
        i = r(1750),
        a = r(1554),
        o = (function () {
          function e() {}
          return (
            (e.updateInternalExportPDFOptions = function (e, t, r) {
              ;(e.currentSheet = r[0]), this.updateExportLayoutOptions(e, t), this.updateSheetOptions(e, r)
            }),
            (e.updateExportLayoutOptions = function (e, t) {
              var r = e.exportLayoutOptions
              switch (
                ((r.imageHeight = this.DefaultLayoutOptions.imageHeight),
                (r.imageWidth = this.DefaultLayoutOptions.imageWidth),
                t.orientation)
              ) {
                case i.PrintOrientation.Landscape:
                  r.pageOrientationOption = n.PageOrientation.Landscape
                  break
                case i.PrintOrientation.Portrait:
                  r.pageOrientationOption = n.PageOrientation.Portrait
                  break
                default:
                  throw new a.TableauError(i.SharedErrorCodes.InternalError, 'invalid orientation for ExportPDFOption')
              }
              switch (t.pageSize) {
                case i.PrintPageSize.A3:
                  r.pageSizeOption = n.PageSizeOption.A3
                  break
                case i.PrintPageSize.A4:
                  r.pageSizeOption = n.PageSizeOption.A4
                  break
                case i.PrintPageSize.A5:
                  r.pageSizeOption = n.PageSizeOption.A5
                  break
                case i.PrintPageSize.B4:
                  r.pageSizeOption = n.PageSizeOption.B4
                  break
                case i.PrintPageSize.B5:
                  r.pageSizeOption = n.PageSizeOption.B5
                  break
                case i.PrintPageSize.Executive:
                  r.pageSizeOption = n.PageSizeOption.Executive
                  break
                case i.PrintPageSize.Folio:
                  r.pageSizeOption = n.PageSizeOption.Folio
                  break
                case i.PrintPageSize.Ledger:
                  r.pageSizeOption = n.PageSizeOption.Ledger
                  break
                case i.PrintPageSize.Legal:
                  r.pageSizeOption = n.PageSizeOption.Legal
                  break
                case i.PrintPageSize.Letter:
                  r.pageSizeOption = n.PageSizeOption.Letter
                  break
                case i.PrintPageSize.Note:
                  r.pageSizeOption = n.PageSizeOption.Note
                  break
                case i.PrintPageSize.Quarto:
                  r.pageSizeOption = n.PageSizeOption.Quarto
                  break
                case i.PrintPageSize.Statement:
                  r.pageSizeOption = n.PageSizeOption.Statement
                  break
                case i.PrintPageSize.Tabloid:
                  r.pageSizeOption = n.PageSizeOption.Tabloid
                  break
                case i.PrintPageSize.Unspecified:
                  r.pageSizeOption = n.PageSizeOption.Unspecified
                  break
                default:
                  throw new a.TableauError(i.SharedErrorCodes.InternalError, 'invalid pageSize for ExportPDFOption')
              }
              switch (t.scaling) {
                case i.PrintScaling.AtMost1PageHigh:
                  this.setFitAndScaleValues(r, n.FitPages.FitOneHigh)
                  break
                case i.PrintScaling.AtMost1PageWide:
                  this.setFitAndScaleValues(r, n.FitPages.FitOneWide)
                  break
                case i.PrintScaling.AtMost2PagesHigh:
                  this.setFitAndScaleValues(r, n.FitPages.FitTwoHigh)
                  break
                case i.PrintScaling.AtMost2PagesWide:
                  this.setFitAndScaleValues(r, n.FitPages.FitTwoWide)
                  break
                case i.PrintScaling.Automatic:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePctAuto)
                  break
                case i.PrintScaling.Perc100:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePct100)
                  break
                case i.PrintScaling.Perc200:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePct200)
                  break
                case i.PrintScaling.Perc25:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePct25)
                  break
                case i.PrintScaling.Perc400:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePct400)
                  break
                case i.PrintScaling.Perc50:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePct50)
                  break
                case i.PrintScaling.Perc60:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePct60)
                  break
                case i.PrintScaling.Perc75:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePct75)
                  break
                case i.PrintScaling.Perc80:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePct80)
                  break
                case i.PrintScaling.Perc90:
                  this.setFitAndScaleValues(r, n.PageScalingOption.ScalePct90)
                  break
                default:
                  throw new a.TableauError(i.SharedErrorCodes.InternalError, 'invalid scaling for ExportPDFOption')
              }
            }),
            (e.updateSheetOptions = function (e, t) {
              for (var r = e.exportLayoutOptions, n = 0, i = e.sheetOptions; n < i.length; n++) {
                var a = i[n]
                ;(a.exportLayoutOptions = r), (a.isSelected = t.includes(a.sheet))
              }
            }),
            (e.setFitAndScaleValues = function (e, t) {
              var r,
                i = this.DefaultLayoutOptions,
                a = i.pageFitHorizontal,
                o = i.pageFitVertical,
                s = i.pageScaleMode,
                l = i.pageScalePercent,
                u = this.fitRegex.exec(t),
                c = this.pctRegex.exec(t)
              u
                ? ((a = (r = u.slice(1).map(function (e) {
                    return Number(e)
                  }))[0]),
                  (o = r[1]),
                  (s = n.ScaleMode.ScaleFitPages))
                : c &&
                  ((l = c.slice(1).map(function (e) {
                    return Number(e)
                  })[0]),
                  (s = n.ScaleMode.ScalePercentage)),
                (e.pageFitHorizontal = a),
                (e.pageFitVertical = o),
                (e.pageScaleMode = s),
                (e.pageScalePercent = l)
            }),
            (e.DefaultDataOptions = { ignoreAliases: !1, columnsToIncludeById: [] }),
            (e.DefaultPDFOptions = {
              scaling: i.PrintScaling.Automatic,
              pageSize: i.PrintPageSize.Letter,
              orientation: i.PrintOrientation.Portrait,
            }),
            (e.DefaultLayoutOptions = {
              imageHeight: 0,
              imageWidth: 0,
              pageFitHorizontal: 1,
              pageFitVertical: 1,
              pageOrientationOption: n.PageOrientation.Portrait,
              pageScaleMode: n.ScaleMode.ScaleAuto,
              pageScalePercent: 100,
              pageSizeOption: n.PageSizeOption.Letter,
            }),
            (e.fitRegex = new RegExp('fit([0-9]+)x([0-9]+)')),
            (e.pctRegex = new RegExp('pct([0-9]+)')),
            e
          )
        })()
      t.ExportHelpers = o
    },
    6077: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(1554),
        a = r(316),
        o = (function () {
          function e() {}
          return (
            (e.serializeDateForPlatform = function (e) {
              return (
                e.getUTCFullYear() +
                '-' +
                (e.getUTCMonth() + 1) +
                '-' +
                e.getUTCDate() +
                ' ' +
                e.getUTCHours() +
                ':' +
                e.getUTCMinutes() +
                ':' +
                e.getUTCSeconds()
              )
            }),
            (e.serializeBooleanForPlatform = function (e) {
              return e ? 'true' : 'false'
            }),
            (e.serializeNumberForPlatform = function (e) {
              return e.toString(10)
            }),
            (e.isTypeNumber = function (e) {
              return 'number' == typeof e || e instanceof Number
            }),
            (e.isTypeDate = function (e) {
              return e instanceof Date
            }),
            (e.isTypeString = function (e) {
              return 'string' == typeof e || e instanceof String
            }),
            (e.isTypeBool = function (e) {
              return 'boolean' == typeof e || e instanceof Boolean
            }),
            (e.isNullOrUndefined = function (e) {
              return null == e
            }),
            (e.serializeParameterValue = function (t) {
              if (e.isTypeNumber(t)) return e.serializeNumberForPlatform(t)
              if (e.isTypeDate(t)) return e.serializeDateForPlatform(t)
              if (e.isTypeBool(t)) return e.serializeBooleanForPlatform(t)
              if (e.isTypeString(t)) return t
              throw new i.TableauError(n.ErrorCodes.InternalError, 'Unexpected invalid value for: ' + t)
            }),
            (e.convertParameterToMap = function (e, t) {
              if ((a.ErrorHelpers.verifyParameterType(e, 'object', t), Array.isArray(e)))
                throw new i.TableauError(n.ErrorCodes.InvalidParameter, 'Expecting object or Map for: ' + t + '.')
              return e instanceof Map ? e : new Map(Object.entries(e))
            }),
            (e.tryParseNumber = function (t) {
              if (e.isNullOrUndefined(t)) return { success: !1 }
              if (e.isTypeNumber(t)) return { parsed: t, success: !0 }
              var r = t.toString()
              if ('NaN' === r) return { parsed: NaN, success: !0 }
              var n = parseFloat(r)
              return isNaN(n) ? { success: !1 } : { parsed: n, success: !0 }
            }),
            e
          )
        })()
      t.Param = o
    },
    489: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(4695),
        a = r(1554),
        o = (function () {
          function e() {}
          return (
            (e.getSheetSizeFromSizeConstraints = function (e) {
              var t = e.minWidth,
                r = e.minHeight,
                i = e.maxWidth,
                a = e.maxHeight
              if (0 === r && 0 === t)
                return 0 === a && 0 === i
                  ? { behavior: n.SheetSizeBehavior.Automatic }
                  : { behavior: n.SheetSizeBehavior.AtMost, maxSize: { width: i, height: a } }
              if (0 === a && 0 === i) return { behavior: n.SheetSizeBehavior.AtLeast, minSize: { width: t, height: r } }
              if (a === r && i === t && t > 0)
                return {
                  behavior: n.SheetSizeBehavior.Exactly,
                  minSize: { width: t, height: r },
                  maxSize: { width: t, height: r },
                }
              var o = 0 === t && 0 === i
              return {
                behavior: n.SheetSizeBehavior.Range,
                minSize: { width: t, height: r },
                maxSize: { width: o ? 2147483647 : i, height: a },
              }
            }),
            (e.createAutomaticSize = function () {
              return {
                behavior: n.SheetSizeBehavior.Automatic,
                minSize: { width: 0, height: 0 },
                maxSize: { width: 0, height: 0 },
              }
            }),
            (e.getPublishedSheetInfoByName = function (e, t) {
              return t.find(function (t) {
                return t.name === e
              })
            }),
            (e.getSheetTypeEnum = function (e) {
              var t
              switch (e) {
                case i.SheetType.Worksheet:
                  t = n.SheetType.Worksheet
                  break
                case i.SheetType.Dashboard:
                  t = n.SheetType.Dashboard
                  break
                case i.SheetType.Story:
                  t = n.SheetType.Story
                  break
                default:
                  throw new a.TableauError(n.SharedErrorCodes.ServerError, 'Invalid SheetType')
              }
              return t
            }),
            (e.isValidSheetSize = function (e) {
              return void 0 !== e.behavior
            }),
            e
          )
        })()
      t.SheetUtils = o
    },
    8634: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(1554),
        a = r(9685),
        o = (function () {
          function e(e) {
            void 0 === e && (e = a.UnregisterTimeoutInMilliseconds), (this._timeoutInMilliseconds = e)
          }
          return (
            (e.prototype.getNewPromiseOrThrowIfBusy = function () {
              var e = this
              if (this._deferred)
                throw new i.TableauError(
                  n.SharedErrorCodes.ApiExecutionError,
                  'This api cannot be executed till previous call is resolved.',
                )
              return (
                (this._deferred = new a.Deferred()),
                (this._timeoutId = setTimeout(function () {
                  var t = new i.TableauError(
                    n.SharedErrorCodes.Timeout,
                    'Api failed to complete in ' + e._timeoutInMilliseconds / 1e3 + ' seconds',
                  )
                  e.reject(t)
                }, this._timeoutInMilliseconds)),
                this._deferred.promise
              )
            }),
            (e.prototype.resolve = function (e) {
              this._deferred && (clearTimeout(this._timeoutId), this._deferred.resolve(e), (this._deferred = void 0))
            }),
            (e.prototype.reject = function (e) {
              this._deferred && (clearTimeout(this._timeoutId), this._deferred.reject(e), (this._deferred = void 0))
            }),
            e
          )
        })()
      t.ShortLivedDeferred = o
    },
    6081: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(1750),
        i = r(1554),
        a = (function () {
          function e(e, t) {
            var r = e.split('-')
            this.build = this.getBuildNumber(r[1])
            var a = (e = r[0]).split('.').map(function (e) {
              return parseInt(e, 10)
            })
            if (3 !== a.length) throw new i.TableauError(n.ErrorCodes.InternalError, 'Invalid version number: ' + e)
            ;(this.major = a[0]), (this.minor = a[1]), (this.fix = a[2]), (this.isAlpha = t)
          }
          return (
            (e.prototype.getBuildNumber = function (e) {
              if (!e) return -1
              var t = e.split('.')
              return t[1] ? parseInt(t[1], 10) : -1
            }),
            Object.defineProperty(e.prototype, 'formattedValue', {
              get: function () {
                return this.major + '.' + this.minor + '.' + this.fix
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'fullFormattedValue', {
              get: function () {
                return this.major + '.' + this.minor + '.' + this.fix + '-pre.' + this.build
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          )
        })()
      t.VersionNumber = a
    },
    107: (e, t, r) => {
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4695),
        i = (function () {
          function e(e, t) {
            var r = this
            ;(this._apiDelegateDispatcher = e),
              (this._versionConverter = n.CreateExternalCompatibleVersionConverter(n.INTERNAL_CONTRACT_VERSION, t)),
              (this._notificationHandlers = []),
              e.registerNotificationHandler(function (e) {
                if (0 !== r._notificationHandlers.length) {
                  var t = r._versionConverter.upgradeNotification(e)
                  r._notificationHandlers.forEach(function (e) {
                    e(t)
                  })
                }
              })
          }
          return (
            (e.needsVersionConverter = function (e) {
              return n.VersionLessThan(e, n.INTERNAL_CONTRACT_VERSION)
            }),
            (e.prototype.execute = function (e, t) {
              var r = this
              try {
                var n = this._versionConverter.downgradeExecuteCall(e, t)
                return this._apiDelegateDispatcher.execute(n.verb, n.parameters).then(function (n) {
                  return r._versionConverter.upgradeExecuteReturn(n, e, t)
                })
              } catch (e) {
                return Promise.reject(e)
              }
            }),
            (e.prototype.registerNotificationHandler = function (e) {
              this._notificationHandlers.push(e)
            }),
            (e.prototype.unregisterNotificationHandler = function (e) {
              this._notificationHandlers = this._notificationHandlers.filter(function (t) {
                return t !== e
              })
            }),
            e
          )
        })()
      t.VersionedExternalApiDispatcher = i
    },
    2280: (e, t, r) => {
      var n
      r.r(t),
        r.d(t, {
          NIL: () => k,
          parse: () => g,
          stringify: () => c,
          v1: () => y,
          v3: () => w,
          v4: () => P,
          v5: () => D,
          validate: () => s,
          version: () => O,
        })
      var i = new Uint8Array(16)
      function a() {
        if (
          !n &&
          !(n =
            ('undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ('undefined' != typeof msCrypto &&
              'function' == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
          )
        return n(i)
      }
      const o =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        s = function (e) {
          return 'string' == typeof e && o.test(e)
        }
      for (var l = [], u = 0; u < 256; ++u) l.push((u + 256).toString(16).substr(1))
      const c = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = (
            l[e[t + 0]] +
            l[e[t + 1]] +
            l[e[t + 2]] +
            l[e[t + 3]] +
            '-' +
            l[e[t + 4]] +
            l[e[t + 5]] +
            '-' +
            l[e[t + 6]] +
            l[e[t + 7]] +
            '-' +
            l[e[t + 8]] +
            l[e[t + 9]] +
            '-' +
            l[e[t + 10]] +
            l[e[t + 11]] +
            l[e[t + 12]] +
            l[e[t + 13]] +
            l[e[t + 14]] +
            l[e[t + 15]]
          ).toLowerCase()
        if (!s(r)) throw TypeError('Stringified UUID is invalid')
        return r
      }
      var d,
        p,
        h = 0,
        m = 0
      const y = function (e, t, r) {
          var n = (t && r) || 0,
            i = t || new Array(16),
            o = (e = e || {}).node || d,
            s = void 0 !== e.clockseq ? e.clockseq : p
          if (null == o || null == s) {
            var l = e.random || (e.rng || a)()
            null == o && (o = d = [1 | l[0], l[1], l[2], l[3], l[4], l[5]]),
              null == s && (s = p = 16383 & ((l[6] << 8) | l[7]))
          }
          var u = void 0 !== e.msecs ? e.msecs : Date.now(),
            y = void 0 !== e.nsecs ? e.nsecs : m + 1,
            g = u - h + (y - m) / 1e4
          if (
            (g < 0 && void 0 === e.clockseq && (s = (s + 1) & 16383),
            (g < 0 || u > h) && void 0 === e.nsecs && (y = 0),
            y >= 1e4)
          )
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
          ;(h = u), (m = y), (p = s)
          var f = (1e4 * (268435455 & (u += 122192928e5)) + y) % 4294967296
          ;(i[n++] = (f >>> 24) & 255), (i[n++] = (f >>> 16) & 255), (i[n++] = (f >>> 8) & 255), (i[n++] = 255 & f)
          var b = ((u / 4294967296) * 1e4) & 268435455
          ;(i[n++] = (b >>> 8) & 255),
            (i[n++] = 255 & b),
            (i[n++] = ((b >>> 24) & 15) | 16),
            (i[n++] = (b >>> 16) & 255),
            (i[n++] = (s >>> 8) | 128),
            (i[n++] = 255 & s)
          for (var v = 0; v < 6; ++v) i[n + v] = o[v]
          return t || c(i)
        },
        g = function (e) {
          if (!s(e)) throw TypeError('Invalid UUID')
          var t,
            r = new Uint8Array(16)
          return (
            (r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
            (r[1] = (t >>> 16) & 255),
            (r[2] = (t >>> 8) & 255),
            (r[3] = 255 & t),
            (r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
            (r[5] = 255 & t),
            (r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
            (r[7] = 255 & t),
            (r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
            (r[9] = 255 & t),
            (r[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
            (r[11] = (t / 4294967296) & 255),
            (r[12] = (t >>> 24) & 255),
            (r[13] = (t >>> 16) & 255),
            (r[14] = (t >>> 8) & 255),
            (r[15] = 255 & t),
            r
          )
        }
      function f(e, t, r) {
        function n(e, n, i, a) {
          if (
            ('string' == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e))
                for (var t = [], r = 0; r < e.length; ++r) t.push(e.charCodeAt(r))
                return t
              })(e)),
            'string' == typeof n && (n = g(n)),
            16 !== n.length)
          )
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)')
          var o = new Uint8Array(16 + e.length)
          if ((o.set(n), o.set(e, n.length), ((o = r(o))[6] = (15 & o[6]) | t), (o[8] = (63 & o[8]) | 128), i)) {
            a = a || 0
            for (var s = 0; s < 16; ++s) i[a + s] = o[s]
            return i
          }
          return c(o)
        }
        try {
          n.name = e
        } catch (e) {}
        return (n.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'), (n.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'), n
      }
      function b(e) {
        return 14 + (((e + 64) >>> 9) << 4) + 1
      }
      function v(e, t) {
        var r = (65535 & e) + (65535 & t)
        return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r)
      }
      function I(e, t, r, n, i, a) {
        return v(((o = v(v(t, e), v(n, a))) << (s = i)) | (o >>> (32 - s)), r)
        var o, s
      }
      function S(e, t, r, n, i, a, o) {
        return I((t & r) | (~t & n), e, t, i, a, o)
      }
      function T(e, t, r, n, i, a, o) {
        return I((t & n) | (r & ~n), e, t, i, a, o)
      }
      function A(e, t, r, n, i, a, o) {
        return I(t ^ r ^ n, e, t, i, a, o)
      }
      function _(e, t, r, n, i, a, o) {
        return I(r ^ (t | ~n), e, t, i, a, o)
      }
      const w = f('v3', 48, function (e) {
          if ('string' == typeof e) {
            var t = unescape(encodeURIComponent(e))
            e = new Uint8Array(t.length)
            for (var r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r)
          }
          return (function (e) {
            for (var t = [], r = 32 * e.length, n = '0123456789abcdef', i = 0; i < r; i += 8) {
              var a = (e[i >> 5] >>> i % 32) & 255,
                o = parseInt(n.charAt((a >>> 4) & 15) + n.charAt(15 & a), 16)
              t.push(o)
            }
            return t
          })(
            (function (e, t) {
              ;(e[t >> 5] |= 128 << t % 32), (e[b(t) - 1] = t)
              for (var r = 1732584193, n = -271733879, i = -1732584194, a = 271733878, o = 0; o < e.length; o += 16) {
                var s = r,
                  l = n,
                  u = i,
                  c = a
                ;(r = S(r, n, i, a, e[o], 7, -680876936)),
                  (a = S(a, r, n, i, e[o + 1], 12, -389564586)),
                  (i = S(i, a, r, n, e[o + 2], 17, 606105819)),
                  (n = S(n, i, a, r, e[o + 3], 22, -1044525330)),
                  (r = S(r, n, i, a, e[o + 4], 7, -176418897)),
                  (a = S(a, r, n, i, e[o + 5], 12, 1200080426)),
                  (i = S(i, a, r, n, e[o + 6], 17, -1473231341)),
                  (n = S(n, i, a, r, e[o + 7], 22, -45705983)),
                  (r = S(r, n, i, a, e[o + 8], 7, 1770035416)),
                  (a = S(a, r, n, i, e[o + 9], 12, -1958414417)),
                  (i = S(i, a, r, n, e[o + 10], 17, -42063)),
                  (n = S(n, i, a, r, e[o + 11], 22, -1990404162)),
                  (r = S(r, n, i, a, e[o + 12], 7, 1804603682)),
                  (a = S(a, r, n, i, e[o + 13], 12, -40341101)),
                  (i = S(i, a, r, n, e[o + 14], 17, -1502002290)),
                  (r = T(r, (n = S(n, i, a, r, e[o + 15], 22, 1236535329)), i, a, e[o + 1], 5, -165796510)),
                  (a = T(a, r, n, i, e[o + 6], 9, -1069501632)),
                  (i = T(i, a, r, n, e[o + 11], 14, 643717713)),
                  (n = T(n, i, a, r, e[o], 20, -373897302)),
                  (r = T(r, n, i, a, e[o + 5], 5, -701558691)),
                  (a = T(a, r, n, i, e[o + 10], 9, 38016083)),
                  (i = T(i, a, r, n, e[o + 15], 14, -660478335)),
                  (n = T(n, i, a, r, e[o + 4], 20, -405537848)),
                  (r = T(r, n, i, a, e[o + 9], 5, 568446438)),
                  (a = T(a, r, n, i, e[o + 14], 9, -1019803690)),
                  (i = T(i, a, r, n, e[o + 3], 14, -187363961)),
                  (n = T(n, i, a, r, e[o + 8], 20, 1163531501)),
                  (r = T(r, n, i, a, e[o + 13], 5, -1444681467)),
                  (a = T(a, r, n, i, e[o + 2], 9, -51403784)),
                  (i = T(i, a, r, n, e[o + 7], 14, 1735328473)),
                  (r = A(r, (n = T(n, i, a, r, e[o + 12], 20, -1926607734)), i, a, e[o + 5], 4, -378558)),
                  (a = A(a, r, n, i, e[o + 8], 11, -2022574463)),
                  (i = A(i, a, r, n, e[o + 11], 16, 1839030562)),
                  (n = A(n, i, a, r, e[o + 14], 23, -35309556)),
                  (r = A(r, n, i, a, e[o + 1], 4, -1530992060)),
                  (a = A(a, r, n, i, e[o + 4], 11, 1272893353)),
                  (i = A(i, a, r, n, e[o + 7], 16, -155497632)),
                  (n = A(n, i, a, r, e[o + 10], 23, -1094730640)),
                  (r = A(r, n, i, a, e[o + 13], 4, 681279174)),
                  (a = A(a, r, n, i, e[o], 11, -358537222)),
                  (i = A(i, a, r, n, e[o + 3], 16, -722521979)),
                  (n = A(n, i, a, r, e[o + 6], 23, 76029189)),
                  (r = A(r, n, i, a, e[o + 9], 4, -640364487)),
                  (a = A(a, r, n, i, e[o + 12], 11, -421815835)),
                  (i = A(i, a, r, n, e[o + 15], 16, 530742520)),
                  (r = _(r, (n = A(n, i, a, r, e[o + 2], 23, -995338651)), i, a, e[o], 6, -198630844)),
                  (a = _(a, r, n, i, e[o + 7], 10, 1126891415)),
                  (i = _(i, a, r, n, e[o + 14], 15, -1416354905)),
                  (n = _(n, i, a, r, e[o + 5], 21, -57434055)),
                  (r = _(r, n, i, a, e[o + 12], 6, 1700485571)),
                  (a = _(a, r, n, i, e[o + 3], 10, -1894986606)),
                  (i = _(i, a, r, n, e[o + 10], 15, -1051523)),
                  (n = _(n, i, a, r, e[o + 1], 21, -2054922799)),
                  (r = _(r, n, i, a, e[o + 8], 6, 1873313359)),
                  (a = _(a, r, n, i, e[o + 15], 10, -30611744)),
                  (i = _(i, a, r, n, e[o + 6], 15, -1560198380)),
                  (n = _(n, i, a, r, e[o + 13], 21, 1309151649)),
                  (r = _(r, n, i, a, e[o + 4], 6, -145523070)),
                  (a = _(a, r, n, i, e[o + 11], 10, -1120210379)),
                  (i = _(i, a, r, n, e[o + 2], 15, 718787259)),
                  (n = _(n, i, a, r, e[o + 9], 21, -343485551)),
                  (r = v(r, s)),
                  (n = v(n, l)),
                  (i = v(i, u)),
                  (a = v(a, c))
              }
              return [r, n, i, a]
            })(
              (function (e) {
                if (0 === e.length) return []
                for (var t = 8 * e.length, r = new Uint32Array(b(t)), n = 0; n < t; n += 8)
                  r[n >> 5] |= (255 & e[n / 8]) << n % 32
                return r
              })(e),
              8 * e.length,
            ),
          )
        }),
        P = function (e, t, r) {
          var n = (e = e || {}).random || (e.rng || a)()
          if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
            r = r || 0
            for (var i = 0; i < 16; ++i) t[r + i] = n[i]
            return t
          }
          return c(n)
        }
      function E(e, t, r, n) {
        switch (e) {
          case 0:
            return (t & r) ^ (~t & n)
          case 1:
          case 3:
            return t ^ r ^ n
          case 2:
            return (t & r) ^ (t & n) ^ (r & n)
        }
      }
      function C(e, t) {
        return (e << t) | (e >>> (32 - t))
      }
      const D = f('v5', 80, function (e) {
          var t = [1518500249, 1859775393, 2400959708, 3395469782],
            r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
          if ('string' == typeof e) {
            var n = unescape(encodeURIComponent(e))
            e = []
            for (var i = 0; i < n.length; ++i) e.push(n.charCodeAt(i))
          } else Array.isArray(e) || (e = Array.prototype.slice.call(e))
          e.push(128)
          for (var a = e.length / 4 + 2, o = Math.ceil(a / 16), s = new Array(o), l = 0; l < o; ++l) {
            for (var u = new Uint32Array(16), c = 0; c < 16; ++c)
              u[c] =
                (e[64 * l + 4 * c] << 24) |
                (e[64 * l + 4 * c + 1] << 16) |
                (e[64 * l + 4 * c + 2] << 8) |
                e[64 * l + 4 * c + 3]
            s[l] = u
          }
          ;(s[o - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
            (s[o - 1][14] = Math.floor(s[o - 1][14])),
            (s[o - 1][15] = (8 * (e.length - 1)) & 4294967295)
          for (var d = 0; d < o; ++d) {
            for (var p = new Uint32Array(80), h = 0; h < 16; ++h) p[h] = s[d][h]
            for (var m = 16; m < 80; ++m) p[m] = C(p[m - 3] ^ p[m - 8] ^ p[m - 14] ^ p[m - 16], 1)
            for (var y = r[0], g = r[1], f = r[2], b = r[3], v = r[4], I = 0; I < 80; ++I) {
              var S = Math.floor(I / 20),
                T = (C(y, 5) + E(S, g, f, b) + v + t[S] + p[I]) >>> 0
              ;(v = b), (b = f), (f = C(g, 30) >>> 0), (g = y), (y = T)
            }
            ;(r[0] = (r[0] + y) >>> 0),
              (r[1] = (r[1] + g) >>> 0),
              (r[2] = (r[2] + f) >>> 0),
              (r[3] = (r[3] + b) >>> 0),
              (r[4] = (r[4] + v) >>> 0)
          }
          return [
            (r[0] >> 24) & 255,
            (r[0] >> 16) & 255,
            (r[0] >> 8) & 255,
            255 & r[0],
            (r[1] >> 24) & 255,
            (r[1] >> 16) & 255,
            (r[1] >> 8) & 255,
            255 & r[1],
            (r[2] >> 24) & 255,
            (r[2] >> 16) & 255,
            (r[2] >> 8) & 255,
            255 & r[2],
            (r[3] >> 24) & 255,
            (r[3] >> 16) & 255,
            (r[3] >> 8) & 255,
            255 & r[3],
            (r[4] >> 24) & 255,
            (r[4] >> 16) & 255,
            (r[4] >> 8) & 255,
            255 & r[4],
          ]
        }),
        k = '00000000-0000-0000-0000-000000000000',
        O = function (e) {
          if (!s(e)) throw TypeError('Invalid UUID')
          return parseInt(e.substr(14, 1), 16)
        }
    },
    2725: (e) => {
      e.exports = JSON.parse('{"major":1,"minor":152,"fix":0}')
    },
  },
  t = {}
function r(n) {
  var i = t[n]
  if (void 0 !== i) return i.exports
  var a = (t[n] = { exports: {} })
  return e[n].call(a.exports, a, a.exports, r), a.exports
}
;(r.d = (e, t) => {
  for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
}),
  (r.g = (function () {
    if ('object' == typeof globalThis) return globalThis
    try {
      return this || new Function('return this')()
    } catch (e) {
      if ('object' == typeof window) return window
    }
  })()),
  (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
  (r.r = (e) => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 })
  })
var n = {}
;(() => {
  var e = n
  Object.defineProperty(e, 'X$', { value: !0 })
  const t = r(1750),
    i = r(4007),
    a = r(53),
    o = r(123),
    s = r(8520),
    l = r(4882),
    u = 'undefined' != typeof VERSION_IS_ALPHA && VERSION_IS_ALPHA
  function c(e, t) {
    try {
      window.customElements.get(e)
        ? console.warn(`Custom element '${e}' is already defined.`)
        : window.customElements.define(e, t)
    } catch (t) {
      console.error(`Error defining custom element '${e}':`, t)
    }
  }
  i.ApiVersion.SetVersionNumber('3.9.0-pre.32', u),
    'customElements' in window
      ? (c('tableau-viz', l.TableauViz),
        c('tableau-authoring-viz', o.TableauAuthoringViz),
        c('tableau-ask-data', a.TableauAskData),
        c('tableau-pulse', s.TableauPulse))
      : console.error('Custom Elements API is not supported in this browser.')
  const d = Object.assign(Object.assign({}, t.EmbeddingErrorCodes), t.SharedErrorCodes)
  e.SM = d
  var p = r(1750)
  ;(e.qP = p.AnalyticsObjectType),
    (e.JJ = p.AnnotationType),
    (e.qI = p.ApiMenuType),
    (e.G3 = p.ClassNameKey),
    (e.QD = p.ColumnType),
    (e.V9 = p.CrosstabFileFormat),
    (e.bZ = p.DashboardLayoutChange),
    (e.LN = p.DashboardObjectType),
    (e.g = p.DataType),
    (e.NU = p.DateRangeType),
    (e.Yi = p.DeviceType),
    (e.nF = p.EncodingType),
    (e.TP = p.FieldAggregationType),
    (e.yS = p.FieldRoleType),
    (e.jn = p.FileFormats),
    (e.iV = p.FilterDomainType),
    (e.JW = p.FilterNullOption),
    (e.vA = p.FilterType),
    (e._0 = p.FilterUpdateType),
    (e.Bd = p.HierarchicalLevelSelectionState),
    (e.Sc = p.IncludeDataValuesOption),
    (e.ZU = p.MarkType),
    (e.fc = p.ParameterValueType),
    (e.tN = p.PeriodType),
    (e.Y4 = p.PrintOrientation),
    (e.yw = p.PrintPageSize),
    (e.A1 = p.PrintScaling),
    (e.d = p.QuickTableCalcType),
    (e.hP = p.SelectionUpdateType),
    (e.Hx = p.SheetSizeBehavior),
    (e.jy = p.SheetType),
    (e.Sr = p.SortDirection),
    (e.MU = p.TableauDialogType),
    (e.Xb = p.EmbeddingTableauEventType),
    (e.o8 = p.Toolbar),
    (e.Tx = p.TrendLineModelType)
  var h = r(53)
  e.CG = h.TableauAskData
  var m = r(123)
  e.Wx = m.TableauAuthoringViz
  var y = r(8520)
  e.rk = y.TableauPulse
  var g = r(4882)
  e.P4 = g.TableauViz
})()
var i = n.qP,
  a = n.JJ,
  o = n.qI,
  s = n.G3,
  l = n.QD,
  u = n.V9,
  c = n.bZ,
  d = n.LN,
  p = n.g,
  h = n.NU,
  m = n.Yi,
  y = n.nF,
  g = n.SM,
  f = n.TP,
  b = n.yS,
  v = n.jn,
  I = n.iV,
  S = n.JW,
  T = n.vA,
  A = n._0,
  _ = n.Bd,
  w = n.Sc,
  P = n.ZU,
  E = n.fc,
  C = n.tN,
  D = n.Y4,
  k = n.yw,
  O = n.A1,
  V = n.d,
  x = n.hP,
  N = n.Hx,
  M = n.jy,
  F = n.Sr,
  R = n.CG,
  z = n.Wx,
  j = n.MU,
  U = n.Xb,
  L = n.rk,
  W = n.P4,
  H = n.o8,
  B = n.Tx,
  G = n.X$
export {
  i as AnalyticsObjectType,
  a as AnnotationType,
  o as ApiMenuType,
  s as ClassNameKey,
  l as ColumnType,
  u as CrosstabFileFormat,
  c as DashboardLayoutChange,
  d as DashboardObjectType,
  p as DataType,
  h as DateRangeType,
  m as DeviceType,
  y as EncodingType,
  g as ErrorCodes,
  f as FieldAggregationType,
  b as FieldRoleType,
  v as FileFormats,
  I as FilterDomainType,
  S as FilterNullOption,
  T as FilterType,
  A as FilterUpdateType,
  _ as HierarchicalLevelSelectionState,
  w as IncludeDataValuesOption,
  P as MarkType,
  E as ParameterValueType,
  C as PeriodType,
  D as PrintOrientation,
  k as PrintPageSize,
  O as PrintScaling,
  V as QuickTableCalcType,
  x as SelectionUpdateType,
  N as SheetSizeBehavior,
  M as SheetType,
  F as SortDirection,
  R as TableauAskData,
  z as TableauAuthoringViz,
  j as TableauDialogType,
  U as TableauEventType,
  L as TableauPulse,
  W as TableauViz,
  H as Toolbar,
  B as TrendLineModelType,
  G as __esModule,
}
//# sourceMappingURL=tableau.embedding.3.9.0-pre.32.min.js.map
