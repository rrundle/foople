;(window.webpackJsonpfoople = window.webpackJsonpfoople || []).push([
  [0],
  {
    17: function (e, t, a) {
      e.exports = a.p + 'static/media/lunch-poll-logo.c784b059.svg'
    },
    27: function (e, t, a) {},
    46: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAG1BMVEXu7u4AAACysrI7OzvQ0NCUlJR3d3dZWVloaGjDwUyOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAmklEQVRYhe3RQQrCMBCF4YdkkmsUvIIHmFXXRbS67MLsXeT+OFM0SlUal8L7oIU/kDJJASIiIiJqE+zR1wVd9MJWJReMJ63t8ex3MmqPFCZca1uU2p+GirpHlA4TNoO9rC2y91dRL5BecQCOSb2j4jx3wxbZoXHLYzCkPHfDYPX4RQbvteP7V++XHBSd99olu19/JREREdGfuAHXNB+Jwuby0AAAAABJRU5ErkJggg=='
    },
    50: function (e, t, a) {
      e.exports = a.p + 'static/media/7.5191071c.jpg'
    },
    51: function (e, t, a) {
      e.exports = a.p + 'static/media/Slack_screencast.52c80961.gif'
    },
    57: function (e, t, a) {
      e.exports = a(84)
    },
    84: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        l = a.n(n),
        r = a(15),
        c = a.n(r),
        m = a(11),
        s = a(13),
        i = a(42),
        o = a(10)
      a(21),
        a(27),
        Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
            ),
        )
      var u = a(19)
      a(75).config()
      var E = 'http://localhost:2999',
        d = new Map()
      d.set(
        'environment',
        Object({
          NODE_ENV: 'production',
          PUBLIC_URL: '',
          REACT_APP_CLIENT_ID: '1042026065250.2926712584193',
        }).REACT_APP_ENV,
      ),
        d.set(
          'stripeKey',
          Object({
            NODE_ENV: 'production',
            PUBLIC_URL: '',
            REACT_APP_CLIENT_ID: '1042026065250.2926712584193',
          }).REACT_APP_STRIPE_API_KEY,
        ),
        d.set(
          'stripeProductId',
          Object({
            NODE_ENV: 'production',
            PUBLIC_URL: '',
            REACT_APP_CLIENT_ID: '1042026065250.2926712584193',
          }).REACT_APP_STRIPE_PRODUCT_ID,
        ),
        d.set('clientId', '1042026065250.2926712584193')
      var p = a(45),
        f = a(20),
        b = { auth: !1, authData: {}, signup: {}, logoutRequested: !1 },
        h = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'ADD_USER':
              return Object.assign({}, e, { authData: t.value })
            case 'COMPANY_SIGNUP_INFO':
              return Object.assign({}, e, { signup: t.value })
            case 'SET_AUTH':
              return Object.assign({}, e, {
                auth: t.value,
                logoutRequested: !1,
              })
            case 'SET_USERS_SPOTS':
              return Object.assign({}, e, { usersSpots: t.value })
            case 'REQUEST_LOGOUT':
              return Object.assign({}, e, { logoutRequested: !0 })
            default:
              return Object(f.a)({}, e)
          }
        }
      var g = Object(u.d)(
        h,
        Object(u.c)(
          Object(u.a)(p.a),
          window.devToolsExtension
            ? window.devToolsExtension()
            : function (e) {
                return e
              },
        ),
      )
      g.subscribe(function () {
        return console.log(g.getState())
      })
      g.subscribe(function () {
        !(function (e) {
          try {
            var t = JSON.stringify(e)
            localStorage.setItem('state', t)
          } catch (a) {
            return
          }
        })(g.getState())
      })
      var v = g,
        N = a(8),
        x = a(3),
        y = a.n(x),
        w = a(5),
        k = a(7),
        S = a(12),
        j = a.n(S),
        O = a(17),
        A = a.n(O),
        D = a(46),
        B = a.n(D),
        z = a(87),
        P = a(88),
        _ = a(89),
        C = Object(N.h)(
          Object(m.b)(
            function (e) {
              return { authData: e.authData }
            },
            function (e) {
              return {
                setAuth: function (t) {
                  return e({ type: 'SET_AUTH', value: t })
                },
                setUser: function (t) {
                  return e({ type: 'ADD_USER', value: t })
                },
                requestLogout: function () {
                  return e({ type: 'REQUEST_LOGOUT' })
                },
              }
            },
          )(function (e) {
            var t = e.history,
              a = e.setAuth,
              r = e.setUser,
              c = e.requestLogout,
              m = e.authData,
              i = Object(n.useState)(''),
              o = Object(k.a)(i, 2),
              u = o[0],
              E = o[1],
              d = Object({
                NODE_ENV: 'production',
                PUBLIC_URL: '',
                REACT_APP_CLIENT_ID: '1042026065250.2926712584193',
              }).PAYMENT_FEATURE_ENABLED,
              p = m.avatarSmall
            Object(n.useEffect)(function () {
              E(p || B.a)
            }, [])
            return l.a.createElement(
              n.Fragment,
              null,
              l.a.createElement(
                'li',
                { className: 'onhover-dropdown' },
                l.a.createElement(
                  'div',
                  { className: 'media align-items-center' },
                  l.a.createElement('img', {
                    className:
                      'align-self-center pull-right rounded-circle blur-up lazyloaded',
                    src: u,
                    alt: 'header-user',
                  }),
                ),
                l.a.createElement(
                  'ul',
                  {
                    className:
                      'profile-dropdown onhover-show-div p-20 profile-dropdown-hover',
                  },
                  d &&
                    l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement(
                          s.b,
                          { to: ''.concat('', '/price/pricing') },
                          l.a.createElement(z.a, null),
                          'Pricing',
                        ),
                      ),
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement(
                          s.b,
                          { to: ''.concat('', '/app/account/payment') },
                          l.a.createElement(P.a, null),
                          'Billing',
                        ),
                      ),
                    ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      'a',
                      {
                        onClick: function () {
                          localStorage.removeItem('profileURL'),
                            j.a.remove('lunch-session'),
                            a(!1),
                            r({}),
                            c(),
                            t.push(''.concat('', '/login'))
                        },
                        href: '#!',
                      },
                      l.a.createElement(_.a, null),
                      ' Log out',
                    ),
                  ),
                ),
              ),
            )
          }),
        ),
        T =
          (a(90),
          a(91),
          a(92),
          function () {
            return l.a.createElement(
              n.Fragment,
              null,
              l.a.createElement(
                'div',
                { className: 'page-main-header' },
                l.a.createElement(
                  'div',
                  { className: 'main-header-right row' },
                  l.a.createElement(
                    'div',
                    { className: 'mobile-sidebar d-block' },
                    l.a.createElement(
                      'div',
                      { className: 'media-body text-right switch-sm' },
                      l.a.createElement(
                        'div',
                        { className: 'logo-wrapper-full compactLogo' },
                        l.a.createElement(
                          s.b,
                          { to: '/dashboard/default' },
                          l.a.createElement('img', {
                            className: 'blur-up lazyloaded dashboard-logo',
                            src: A.a,
                            alt: '',
                          }),
                          l.a.createElement('img', {
                            className: 'blur-up lazyloaded dashboard-logo',
                            src: A.a,
                            alt: '',
                          }),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'logo-text' },
                          'Foople',
                        ),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'nav-right col p-0' },
                    l.a.createElement(
                      'ul',
                      { className: 'nav-menus open' },
                      l.a.createElement('li', {
                        className: 'onhover-dropdown',
                      }),
                      l.a.createElement(C, null),
                    ),
                  ),
                  l.a.createElement(
                    'script',
                    {
                      id: 'result-template',
                      type: 'text/x-handlebars-template',
                    },
                    l.a.createElement(
                      'div',
                      { className: 'ProfileCard u-cf' },
                      l.a.createElement(
                        'div',
                        { className: 'ProfileCard-avatar' },
                        l.a.createElement(
                          'svg',
                          {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '24',
                            height: '24',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            className: 'feather feather-airplay m-0',
                          },
                          l.a.createElement('path', {
                            d:
                              'M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1',
                          }),
                          l.a.createElement('polygon', {
                            points: '12 15 17 21 7 21 12 15',
                          }),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'ProfileCard-details' },
                        l.a.createElement('div', {
                          className: 'ProfileCard-realName',
                        }),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    'script',
                    {
                      id: 'empty-template',
                      type: 'text/x-handlebars-template',
                    },
                    l.a.createElement(
                      'div',
                      { className: 'EmptyMessage' },
                      'Your search turned up 0 results. This most likely means the backend is down, yikes!',
                    ),
                  ),
                ),
              ),
            )
          }),
        M = function (e) {
          return l.a.createElement(
            'footer',
            { className: 'footer' },
            l.a.createElement(
              'div',
              { className: 'container-fluid' },
              l.a.createElement(
                'div',
                { className: 'row' },
                l.a.createElement(
                  'div',
                  { className: 'col-md-6 footer-copyright' },
                  l.a.createElement(
                    'p',
                    { className: 'mb-0' },
                    'Copyright '.concat(
                      new Date().getFullYear(),
                      '\xa9 Foople All rights reserved.',
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        U = function (e) {
          var t = e.children
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              'div',
              { className: 'page-wrapper' },
              l.a.createElement(
                'div',
                { className: 'page-body-wrapper' },
                l.a.createElement(T, null),
                l.a.createElement('div', { className: 'page-body' }, t),
                l.a.createElement(M, null),
              ),
            ),
            l.a.createElement(o.a, null),
          )
        },
        R = a(26),
        L = a.n(R),
        I = function (e, t) {
          return (function () {
            var a = Object(w.a)(
              y.a.mark(function a(n, l) {
                var r, c, m, s, i
                return y.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (!l().auth) {
                            a.next = 3
                            break
                          }
                          return a.abrupt('return', {
                            authed: !0,
                            message: 'already authed',
                          })
                        case 3:
                          if ((r = j.a.get('lunch-session'))) {
                            a.next = 6
                            break
                          }
                          return a.abrupt('return', {
                            authed: !1,
                            message: 'no token to auth with',
                          })
                        case 6:
                          return (
                            (c = {
                              method: 'PUT',
                              body: JSON.stringify({ authToken: r }),
                              headers: { 'Content-Type': 'application/json' },
                            }),
                            (a.prev = 7),
                            (a.next = 10),
                            fetch(''.concat(E, '/check-auth'), c)
                          )
                        case 10:
                          if ((m = a.sent).ok) {
                            a.next = 16
                            break
                          }
                          throw (
                            (j.a.remove('lunch-session'),
                            n({ type: 'SET_AUTH', value: !1 }),
                            '/' === t.pathname
                              ? e.push(''.concat('', '/'))
                              : e.push(''.concat('', '/login')),
                            new Error('Failed initializeAuth'))
                          )
                        case 16:
                          return (a.next = 18), m.json()
                        case 18:
                          if ((s = a.sent).authed) {
                            a.next = 21
                            break
                          }
                          throw new Error('auth failed')
                        case 21:
                          ;(i = L()(s.token)),
                            n({
                              type: 'ADD_USER',
                              value: Object(f.a)({ token: s.token }, i),
                            }),
                            n({ type: 'SET_AUTH', value: !0 }),
                            (a.next = 30)
                          break
                        case 26:
                          return (
                            (a.prev = 26),
                            (a.t0 = a.catch(7)),
                            console.error(a.t0),
                            a.abrupt('return', { authed: !1, message: a.t0 })
                          )
                        case 30:
                        case 'end':
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[7, 26]],
                )
              }),
            )
            return function (e, t) {
              return a.apply(this, arguments)
            }
          })()
        },
        G = a(55),
        V = a(47),
        H = a(48),
        F = a(56),
        J = a(54),
        $ = a(53),
        W =
          (a(81),
          (function (e) {
            Object(F.a)(a, e)
            var t = Object(J.a)(a)
            function a(e) {
              var n
              return (
                Object(V.a)(this, a),
                ((n = t.call(this, e)).selectRow = function (e, t) {
                  e.target.checked
                    ? (n.state.checkedValues.push(t),
                      n.setState({ checkedValues: n.state.checkedValues }))
                    : n.setState({
                        checkedValues: n.state.checkedValues.filter(function (
                          e,
                          a,
                        ) {
                          return t !== e
                        }),
                      })
                }),
                (n.handleRemoveRow = function () {
                  n.setState({ loading: !0 })
                  var e = n.state.checkedValues
                  n.props.onDelete(e)
                }),
                (n.renderEditable = function (e) {
                  var t = n.state.myData
                  return t[e.index]
                    ? l.a.createElement('div', {
                        style: { backgroundColor: '#fafafa' },
                        contentEditable: !0,
                        suppressContentEditableWarning: !0,
                        onBlur: function (a) {
                          var l = Object(G.a)(t)
                          ;(l[e.index][e.column.id] = a.target.innerHTML),
                            n.setState({ myData: l })
                        },
                        dangerouslySetInnerHTML: {
                          __html: t[e.index][e.column.id],
                        },
                      })
                    : null
                }),
                (n.renderComponent = function (e) {
                  var t = n.state.myData
                  return t[e.index]
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        t[e.index][e.column.id],
                      )
                    : null
                }),
                (n.state = {
                  checkedValues: [],
                  myData: n.props.myData,
                  loading: !1,
                  pageSize: n.props.pageSize,
                }),
                n
              )
            }
            return (
              Object(H.a)(a, [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props.myData,
                      a = e.myData
                    t.length !== a.length &&
                      (this.setState({
                        myData: t,
                        loading: !1,
                        pageSize: t.length,
                      }),
                      t.length < a.length &&
                        o.b.success('Successfully Deleted Spot!'))
                  },
                },
                {
                  key: 'Capitalize',
                  value: function (e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = this.props,
                      a = t.myClass,
                      r = t.multiSelectOption,
                      c = t.pagination,
                      m = this.state,
                      s = m.myData,
                      i = m.pageSize,
                      u = []
                    for (var E in s[0]) {
                      var d = this.renderEditable
                      'image' === E && (d = null),
                        'status' === E && (d = null),
                        'avtar' === E && (d = null),
                        'vendor' === E && (d = null),
                        'skill' === E && (d = null),
                        'user' === E && (d = null),
                        l.a.isValidElement(s[0][E]) &&
                          (d = this.renderComponent),
                        'id' !== E &&
                          u.push({
                            Header: l.a.createElement(
                              'b',
                              null,
                              this.Capitalize(E.toString()),
                            ),
                            accessor: E,
                            Cell: d,
                            style: { textAlign: 'center' },
                          })
                    }
                    return (
                      !0 === r
                        ? s.length &&
                          u.push({
                            Header: l.a.createElement(
                              'button',
                              {
                                className:
                                  'btn btn-danger btn-sm btn-delete mb-0 b-r-4',
                                disabled: this.state.loading,
                                onClick: function (t) {
                                  window.confirm(
                                    'Are you sure you wish to delete this item?',
                                  ) && e.handleRemoveRow()
                                },
                              },
                              this.state.loading ? '...' : 'Delete',
                            ),
                            id: 'delete',
                            accessor: function (e) {
                              return 'delete'
                            },
                            sortable: !1,
                            style: { textAlign: 'center' },
                            Cell: function (t) {
                              return l.a.createElement(
                                'div',
                                null,
                                l.a.createElement(
                                  'span',
                                  null,
                                  l.a.createElement('input', {
                                    type: 'checkbox',
                                    name: t.original.id,
                                    checked: e.state.checkedValues.includes(
                                      t.original.id,
                                    ),
                                    onChange: function (a) {
                                      return e.selectRow(a, t.original.id)
                                    },
                                  }),
                                ),
                              )
                            },
                          })
                        : u.push({
                            Header: l.a.createElement('b', null, 'Action'),
                            id: 'delete',
                            accessor: function (e) {
                              return 'delete'
                            },
                            Cell: function (t) {
                              return l.a.createElement(
                                'div',
                                null,
                                l.a.createElement(
                                  'span',
                                  {
                                    onClick: function () {
                                      if (
                                        window.confirm(
                                          'Are you sure you wish to delete this item?',
                                        )
                                      ) {
                                        var a = s
                                        a.splice(t.index, 1),
                                          e.setState({ myData: a })
                                      }
                                      o.b.success('Successfully Deleted !')
                                    },
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-trash',
                                    style: {
                                      width: 35,
                                      fontSize: 16,
                                      padding: 11,
                                      color: '#e4566e',
                                    },
                                  }),
                                ),
                                l.a.createElement(
                                  'span',
                                  null,
                                  l.a.createElement('i', {
                                    className: 'fa fa-pencil',
                                    style: {
                                      width: 35,
                                      fontSize: 16,
                                      padding: 11,
                                      color: 'rgb(40, 167, 69)',
                                    },
                                  }),
                                ),
                              )
                            },
                            style: { textAlign: 'center' },
                            sortable: !1,
                          }),
                      l.a.createElement(
                        n.Fragment,
                        null,
                        l.a.createElement($.a, {
                          data: s,
                          columns: u,
                          defaultPageSize: i,
                          className: a,
                          showPagination: c,
                          noDataText:
                            'No spots right now, head to Slack and add some with `/lunch add`',
                        }),
                        l.a.createElement(o.a, null),
                      )
                    )
                  },
                },
              ]),
              a
            )
          })(n.Component)),
        Y = function (e) {
          var t = e.show
          Object(n.useEffect)(
            function () {
              t &&
                (function () {
                  var e = document.querySelector('.lunch-logo-bottom'),
                    t = document.querySelector('.lunch-logo-top'),
                    n = e.getTotalLength(),
                    l = t.getTotalLength()
                  setInterval(function () {
                    a(e, n),
                      a(t, n),
                      setTimeout(function () {
                        r(e, n), r(t, l)
                      }, 1e3)
                  }, 2e3)
                })()
            },
            [t],
          )
          var a = function (e, t) {
              ;(e.style.transition = e.style.WebkitTransition = 'none'),
                (e.style.strokeDasharray = ''.concat(t, ' ').concat(t)),
                (e.style.strokeDashoffset = 0),
                (e.style.strokeWidth = '5'),
                e.getBoundingClientRect(),
                (e.style.transition = e.style.WebkitTransition = 'stroke-dashoffset '.concat(
                  1e3,
                  'ms ease-in-out',
                )),
                (e.style.strokeDashoffset = t)
            },
            r = function (e, t) {
              ;(e.style.strokeDashoffset = t), (e.style.strokeDashoffset = '0')
            }
          return t
            ? l.a.createElement(
                'div',
                { className: 'spinner-wrapper' },
                l.a.createElement(
                  'svg',
                  {
                    height: '100px',
                    width: '100px',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    version: '1.1',
                    x: '0px',
                    y: '0px',
                    viewBox: '0 0 100 100',
                  },
                  l.a.createElement(
                    'g',
                    null,
                    l.a.createElement('path', {
                      className: 'lunch-logo-top',
                      fill: 'none',
                      d:
                        'M31.423,20.466c-1.35-2.024-4.274-2.873-6.496-1.885l-1.896,0.843c-2.222,0.988-3.464-0.109-2.76-2.438   l2.979-9.829c0.706-2.329,3.224-3.792,5.596-3.253l37.672,8.573c2.372,0.539,3.41,2.755,2.306,4.923l-3.47,6.809   c-1.104,2.168-3.417,2.534-5.137,0.814l-1.228-1.228c-1.721-1.72-4.785-2.024-6.809-0.674l-0.124,0.082   c-2.024,1.35-4.99,0.957-6.592-0.873c-1.6-1.829-4.608-2.286-6.683-1.015l-1.052,0.645c-2.074,1.271-4.876,0.654-6.227-1.37   L31.423,20.466z',
                      stroke: '#BE915B',
                      strokeWidth: '5',
                    }),
                    l.a.createElement('path', {
                      className: 'lunch-logo-bottom',
                      fill: 'none',
                      d:
                        'M82.446,60.198c-0.154-2.429-1.13-6.217-2.168-8.418l-2.332-4.949c-1.038-2.201-2.246-5.959-2.687-8.353   l-2.056-11.223c-0.44-2.393-0.99-2.37-1.225,0.052l-1.486,15.399c-0.233,2.422-0.458,4.52-0.498,4.663   c-0.04,0.144-0.932,2.056-1.981,4.252l-0.492,1.025c-1.05,2.195-1.88,5.981-1.842,8.414l0.296,19.449   c0.038,2.432,1.45,2.988,3.138,1.235c0,0,1.188-1.231,4.738-1.264c1.776-0.004,3.683,0.62,5.589,1.97   c0.7,0.494,0.866,1.465,0.37,2.163c-0.494,0.699-1.465,0.865-2.162,0.371c-1.509-1.06-1.509-1.06-1.509-1.06   c-1.258-0.188-3.962,0.736-6.006,2.056c0,0-2.446,1.576-3.562,3.86c-0.378,0.732-0.378,0.732-0.378,0.732   c-0.1,0.246-0.544,0.886-0.99,1.422c0,0,0,0-0.624,0c-0.096,0-0.192-0.01-0.288-0.025c-0.728-0.133-0.728-0.133-0.728-0.133   c-0.299-0.754-0.572-3.359-0.608-5.794l-0.384-25.3c-0.036-2.432-0.055-4.532-0.042-4.664c0.014-0.132,0.985-2.25,2.036-4.444   l0.525-1.104c1.051-2.194,2.103-5.972,2.337-8.394l1.554-16.072c0.234-2.422-0.402-2.593-1.414-0.381l-1.826,3.987   c-1.012,2.212-3.248,2.614-4.969,0.894l-2.616-2.616c-1.72-1.72-4.784-2.024-6.808-0.674l-0.126,0.083   c-2.024,1.35-4.99,0.957-6.59-0.873S40,24.161,37.896,25.382l-0.944,0.549c-2.104,1.221-4.948,0.661-6.32-1.245   c-1.372-1.906-2.898-1.517-3.39,0.866l-1.61,7.788c-0.492,2.383-2.206,5.831-3.808,7.662l-1.418,1.62   c-1.602,1.831-3.002,5.318-3.11,7.749l-1.158,25.761c-0.108,2.429,1.676,5.089,3.968,5.906l38.242,13.659   c2.292,0.818,5.965,0.636,8.163-0.408l13.633-6.464c2.198-1.044,3.87-3.885,3.716-6.312L82.446,60.198z',
                      stroke: '#BE915B',
                      strokeWidth: '5',
                    }),
                  ),
                ),
                l.a.createElement(
                  'div',
                  { className: 'spinner-text' },
                  'Packing lunches...',
                ),
              )
            : null
        },
        q = function (e) {
          var t = e.loading,
            a = e.data,
            n = void 0 === a ? [] : a,
            r = e.onDelete
          return t
            ? l.a.createElement(Y, { show: !0 })
            : l.a.createElement(
                'div',
                { className: 'container-fluid' },
                l.a.createElement(
                  'div',
                  { className: 'row' },
                  l.a.createElement(
                    'div',
                    { className: 'col-sm-12' },
                    l.a.createElement(
                      'div',
                      { className: 'card' },
                      l.a.createElement(
                        'div',
                        { className: 'card-header' },
                        l.a.createElement('h5', null, 'Food Spots'),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'card-body datatable-react' },
                        l.a.createElement(W, {
                          onDelete: r,
                          multiSelectOption: !0,
                          myData: n,
                          pageSize: n.length,
                          pagination: !1,
                          class: '-striped -highlight',
                        }),
                      ),
                    ),
                  ),
                ),
              )
        },
        X = Object(m.b)(
          function (e) {
            var t = e.usersSpots,
              a = e.auth,
              n = void 0 !== a && a,
              l = e.authData
            return { usersSpots: t, auth: n, authData: void 0 === l ? {} : l }
          },
          function (e) {
            return {
              getSpots: function () {
                return e(
                  (function () {
                    var e = Object(w.a)(
                      y.a.mark(function e(t, a) {
                        var n, l, r, c, m
                        return y.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = a()),
                                    (l = n.authData),
                                    (e.prev = 1),
                                    (r = {
                                      method: 'POST',
                                      body: JSON.stringify({ userData: l }),
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    }),
                                    (e.next = 5),
                                    fetch(''.concat(E, '/spots/get'), r)
                                  )
                                case 5:
                                  if ((c = e.sent).ok) {
                                    e.next = 8
                                    break
                                  }
                                  throw new Error('Failed initializeAuth')
                                case 8:
                                  return (e.next = 10), c.json()
                                case 10:
                                  ;(m = e.sent),
                                    t({ type: 'SET_USERS_SPOTS', value: m }),
                                    (e.next = 16)
                                  break
                                case 14:
                                  ;(e.prev = 14), (e.t0 = e.catch(1))
                                case 16:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 14]],
                        )
                      }),
                    )
                    return function (t, a) {
                      return e.apply(this, arguments)
                    }
                  })(),
                )
              },
              removeSpots: function (t) {
                return e(
                  ((a = t),
                  (function () {
                    var e = Object(w.a)(
                      y.a.mark(function e(t, n) {
                        var l, r, c, m, s, i
                        return y.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (l = n()),
                                    (r = l.authData),
                                    (c = l.usersSpots),
                                    (e.prev = 1),
                                    (m = {
                                      method: 'POST',
                                      body: JSON.stringify({
                                        userData: r,
                                        spots: a,
                                      }),
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    }),
                                    (e.next = 5),
                                    fetch(''.concat(E, '/spots/delete'), m)
                                  )
                                case 5:
                                  if ((s = e.sent).ok) {
                                    e.next = 8
                                    break
                                  }
                                  throw new Error('Failed initializeAuth')
                                case 8:
                                  return (e.next = 10), s.json()
                                case 10:
                                  ;(i = c.filter(function (e) {
                                    return !a.includes(e.id)
                                  })),
                                    t({ type: 'SET_USERS_SPOTS', value: i }),
                                    (e.next = 16)
                                  break
                                case 14:
                                  ;(e.prev = 14), (e.t0 = e.catch(1))
                                case 16:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 14]],
                        )
                      }),
                    )
                    return function (t, a) {
                      return e.apply(this, arguments)
                    }
                  })()),
                )
                var a
              },
            }
          },
        )(function (e) {
          var t = e.usersSpots,
            a = e.getSpots,
            r = e.removeSpots,
            c = e.auth,
            m = e.authData,
            s = Object(n.useState)(!1),
            i = Object(k.a)(s, 2),
            o = i[0],
            u = i[1],
            E = Object(n.useState)([]),
            d = Object(k.a)(E, 2),
            p = d[0],
            f = d[1]
          Object(n.useEffect)(function () {
            c && Object.keys(m).length && (u(!0), a())
          }, []),
            Object(n.useEffect)(
              function () {
                if (t) {
                  u(!0)
                  var e = b(t)
                  f(e), u(!1)
                }
              },
              [t],
            )
          var b = function (e) {
            return e.map(function (e) {
              var t = e.url,
                a = e.name
              return {
                id: e.id,
                restaurant: a,
                'Added By': 'Michael Scott',
                'Yelp Link': l.a.createElement(
                  'a',
                  { href: t, target: '_blank', rel: 'noopener noreferrer' },
                  t,
                ),
                'Voted For': '',
              }
            })
          }
          return l.a.createElement(q, {
            data: p,
            loading: o,
            onDelete: function (e) {
              r(e)
            },
          })
        }),
        Q = a(49),
        K = a(22),
        Z = function (e) {
          return (function () {
            var t = Object(w.a)(
              y.a.mark(function t(a, n) {
                var l, r, c, m, s, i, o, u, d, p, f
                return y.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (l = n()),
                            (r = l.authData),
                            (c = r.stripeId),
                            (m = r.status),
                            (s = r.teamId),
                            (i = r.trialPeriodStart),
                            (o = e.id),
                            (u = void 0 === o ? '' : o),
                            (d = {
                              method: 'POST',
                              body: JSON.stringify({
                                paymentMethodId: u,
                                customerId: c,
                                status: m,
                                teamId: s,
                                trialPeriodStart: i,
                              }),
                              headers: { 'Content-Type': 'application/json' },
                            }),
                            (t.prev = 3),
                            (t.next = 6),
                            fetch(
                              ''.concat(E, '/payment/create-subscription'),
                              d,
                            )
                          )
                        case 6:
                          return (p = t.sent), (t.next = 9), p.json()
                        case 9:
                          return (f = t.sent), t.abrupt('return', f)
                        case 13:
                          return (
                            (t.prev = 13),
                            (t.t0 = t.catch(3)),
                            console.error(t.t0),
                            t.abrupt('return', { authed: !1, message: t.t0 })
                          )
                        case 17:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[3, 13]],
                )
              }),
            )
            return function (e, a) {
              return t.apply(this, arguments)
            }
          })()
        },
        ee = function (e) {
          return (function () {
            var t = Object(w.a)(
              y.a.mark(function t(a, n) {
                var l, r, c, m, s, i, o, u, d
                return y.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (l = n()),
                            (r = l.authData),
                            (c = r.teamId),
                            (m = r.stripeId),
                            (s = e.id),
                            (i = void 0 === s ? '' : s),
                            (o = {
                              method: 'POST',
                              body: JSON.stringify({
                                customerId: m,
                                paymentMethodId: i,
                                teamId: c,
                              }),
                              headers: { 'Content-Type': 'application/json' },
                            }),
                            (t.prev = 3),
                            (t.next = 6),
                            fetch(
                              ''.concat(E, '/payment/update-subscription'),
                              o,
                            )
                          )
                        case 6:
                          return (u = t.sent), (t.next = 9), u.json()
                        case 9:
                          return (d = t.sent), t.abrupt('return', d)
                        case 13:
                          return (
                            (t.prev = 13),
                            (t.t0 = t.catch(3)),
                            console.error(t.t0),
                            t.abrupt('return', { authed: !1, message: t.t0 })
                          )
                        case 17:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[3, 13]],
                )
              }),
            )
            return function (e, a) {
              return t.apply(this, arguments)
            }
          })()
        },
        te = function () {
          return (function () {
            var e = Object(w.a)(
              y.a.mark(function e(t, a) {
                var n, l, r, c, m
                return y.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = a()),
                            (l = n.authData.stripeId),
                            (r = {
                              method: 'GET',
                              body: JSON.stringify({ customerId: l }),
                              headers: { 'Content-Type': 'application/json' },
                            }),
                            (e.prev = 2),
                            (e.next = 5),
                            fetch(''.concat(E, '/payment/get-payments'), r)
                          )
                        case 5:
                          return (c = e.sent), (e.next = 8), c.json()
                        case 8:
                          return (m = e.sent), e.abrupt('return', m)
                        case 12:
                          return (
                            (e.prev = 12),
                            (e.t0 = e.catch(2)),
                            console.error(e.t0),
                            e.abrupt('return', { authed: !1, message: e.t0 })
                          )
                        case 16:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[2, 12]],
                )
              }),
            )
            return function (t, a) {
              return e.apply(this, arguments)
            }
          })()
        },
        ae = 'active',
        ne = Object(Q.a)(d.get('stripeKey')),
        le = function (e) {
          var t = e.authData
          return { authData: void 0 === t ? {} : t }
        },
        re = function (e) {
          return {
            createSub: function (t) {
              return e(Z(t))
            },
            updateSub: function (t) {
              return e(ee(t))
            },
            getPayments: function () {
              return e(te())
            },
          }
        },
        ce = Object(m.b)(le, re)(function (e) {
          e.authData
          var t = e.createSub,
            a = e.editPayment,
            r = e.updateSub,
            c = Object(K.useStripe)(),
            m = Object(K.useElements)(),
            s = Object(n.useState)(!1),
            i = Object(k.a)(s, 2),
            o = (i[0], i[1]),
            u = (function () {
              var e = Object(w.a)(
                y.a.mark(function e(n) {
                  var l, s, i
                  return y.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.preventDefault(),
                              (e.prev = 1),
                              (e.next = 4),
                              c.createPaymentMethod({
                                type: 'card',
                                card: m.getElement(K.CardElement),
                              })
                            )
                          case 4:
                            if (
                              ((l = e.sent),
                              (s = l.error),
                              (i = l.paymentMethod),
                              !s)
                            ) {
                              e.next = 9
                              break
                            }
                            throw new Error('error processing card')
                          case 9:
                            a ? r(i) : t(i), s && o(!1), (e.next = 16)
                            break
                          case 13:
                            ;(e.prev = 13), (e.t0 = e.catch(1)), o(!0)
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 13]],
                  )
                }),
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()
          return l.a.createElement(
            'form',
            { onSubmit: u, style: { width: '100%' } },
            l.a.createElement(K.CardElement, null),
            l.a.createElement(
              'button',
              { type: 'submit', disabled: !c },
              'Pay',
            ),
          )
        }),
        me = Object(m.b)(le, re)(function (e) {
          var t = e.authData,
            a = e.getPayments,
            r = Object(n.useState)(!1),
            c = Object(k.a)(r, 2),
            m = c[0],
            s = c[1]
          Object(n.useEffect)(function () {
            a()
          }, [])
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              'div',
              null,
              l.a.createElement(
                'h3',
                null,
                'Account Status: '.concat(t.status),
              ),
            ),
            t.status !== ae || m
              ? l.a.createElement(
                  'div',
                  { className: 'container-fluid credit-card' },
                  l.a.createElement(
                    'div',
                    { className: 'row' },
                    l.a.createElement(
                      'div',
                      { className: 'col-xl-8' },
                      m &&
                        l.a.createElement(
                          'button',
                          {
                            onClick: function () {
                              s(!1)
                            },
                          },
                          'cancel',
                        ),
                      l.a.createElement(
                        'div',
                        { className: 'card height-equal' },
                        l.a.createElement(
                          'div',
                          { className: 'card-header' },
                          l.a.createElement('h5', null, 'Credit card '),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'card-body' },
                          l.a.createElement(
                            'div',
                            { className: 'row' },
                            l.a.createElement(
                              K.Elements,
                              { stripe: ne },
                              l.a.createElement(ce, { editPayment: m }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                )
              : l.a.createElement(
                  'div',
                  null,
                  l.a.createElement('div', null, 'Card ending in 1234'),
                  l.a.createElement(
                    'button',
                    {
                      onClick: function () {
                        s(!0)
                      },
                    },
                    'Edit',
                  ),
                ),
          )
        }),
        se = function () {
          return l.a.createElement(
            n.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'container-fluid' },
              l.a.createElement(
                'div',
                { className: 'row' },
                l.a.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  l.a.createElement(
                    'div',
                    { className: 'card' },
                    l.a.createElement(
                      'div',
                      { className: 'card-header' },
                      l.a.createElement('h5', null, 'Simple Pricing Card'),
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'card-body row pricing-content' },
                      l.a.createElement(
                        'div',
                        { className: 'col-xl-3 col-sm-6 xl-50' },
                        l.a.createElement(
                          'div',
                          { className: 'card text-center pricing-simple' },
                          l.a.createElement(
                            'div',
                            { className: 'card-body' },
                            l.a.createElement('h3', null, 'Standard'),
                            l.a.createElement('h1', null, '$15'),
                            l.a.createElement(
                              'h6',
                              { className: 'mb-0' },
                              'Lorum Ipsum',
                            ),
                          ),
                          l.a.createElement(
                            'a',
                            {
                              className: 'btn btn-lg btn-primary btn-block',
                              href: '#javascript',
                            },
                            l.a.createElement(
                              'h5',
                              { className: 'mb-0' },
                              'Purchase',
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'col-xl-3 col-sm-6 xl-50' },
                        l.a.createElement(
                          'div',
                          { className: 'card text-center pricing-simple' },
                          l.a.createElement(
                            'div',
                            { className: 'card-body' },
                            l.a.createElement('h3', null, 'Business'),
                            l.a.createElement('h1', null, '$25'),
                            l.a.createElement(
                              'h6',
                              { className: 'mb-0' },
                              'Lorum Ipsum',
                            ),
                          ),
                          l.a.createElement(
                            'a',
                            {
                              className: 'btn btn-lg btn-primary btn-block',
                              href: '#javascript',
                            },
                            l.a.createElement(
                              'h5',
                              { className: 'mb-0' },
                              'Purchase',
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'col-xl-3 col-sm-6 xl-50' },
                        l.a.createElement(
                          'div',
                          { className: 'card text-center pricing-simple' },
                          l.a.createElement(
                            'div',
                            { className: 'card-body' },
                            l.a.createElement('h3', null, 'Premium'),
                            l.a.createElement('h1', null, '$35'),
                            l.a.createElement(
                              'h6',
                              { className: 'mb-0' },
                              'Lorum Ipsum',
                            ),
                          ),
                          l.a.createElement(
                            'a',
                            {
                              className: 'btn btn-lg btn-primary btn-block',
                              href: '#javascript',
                            },
                            l.a.createElement(
                              'h5',
                              { className: 'mb-0' },
                              'Purchase',
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'col-xl-3 col-sm-6 xl-50' },
                        l.a.createElement(
                          'div',
                          { className: 'card text-center pricing-simple' },
                          l.a.createElement(
                            'div',
                            { className: 'card-body' },
                            l.a.createElement('h3', null, 'Extra'),
                            l.a.createElement('h1', null, '$45'),
                            l.a.createElement(
                              'h6',
                              { className: 'mb-0' },
                              'Lorum Ipsum',
                            ),
                          ),
                          l.a.createElement(
                            'a',
                            {
                              className: 'btn btn-lg btn-primary btn-block',
                              href: '#javascript',
                            },
                            l.a.createElement(
                              'h5',
                              { className: 'mb-0' },
                              'Purchase',
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                l.a.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  l.a.createElement(
                    'div',
                    { className: 'card' },
                    l.a.createElement(
                      'div',
                      { className: 'card-header' },
                      l.a.createElement('h5', null, 'Pricing'),
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'card-body row pricing-content' },
                      l.a.createElement(
                        'div',
                        { className: 'col-md-4' },
                        l.a.createElement(
                          'div',
                          { className: 'pricing-block card text-center' },
                          l.a.createElement(
                            'svg',
                            { x: '0', y: '0', viewBox: '0 0 360 220' },
                            l.a.createElement(
                              'g',
                              null,
                              l.a.createElement('path', {
                                d:
                                  'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48L0.732,193.75z',
                              }),
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                fill: '#fff',
                                'font-size': '78.4489',
                              },
                              '$10',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform:
                                  'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                fill: '#fff',
                                'font-size': '29.0829',
                              },
                              '.99',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 233.9629 115.5303)',
                                fill: '#fff',
                                'font-size': '15.4128',
                              },
                              '/Month',
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'pricing-inner' },
                            l.a.createElement(
                              'h3',
                              { className: 'font-primary' },
                              'Standard',
                            ),
                            l.a.createElement(
                              'ul',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '50GB'),
                                  ' Disk Space',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '50'),
                                  ' Email Accounts',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '50GB'),
                                  ' Bandwidth',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '10'),
                                  ' Subdomains',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '15'),
                                  ' Domains',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'button',
                              {
                                className: 'btn btn-primary btn-lg',
                                type: 'button',
                              },
                              'Subscribe',
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'col-md-4' },
                        l.a.createElement(
                          'div',
                          { className: 'pricing-block card text-center' },
                          l.a.createElement(
                            'svg',
                            { x: '0', y: '0', viewBox: '0 0 360 220' },
                            l.a.createElement(
                              'g',
                              null,
                              l.a.createElement('path', {
                                d:
                                  'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z',
                              }),
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                fill: '#fff',
                                'font-size': '78.4489',
                              },
                              '$20',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform:
                                  'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                fill: '#fff',
                                'font-size': '29.0829',
                              },
                              '.99',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 233.9629 115.5303)',
                                fill: '#fff',
                                'font-size': '15.4128',
                              },
                              '/Month',
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'pricing-inner' },
                            l.a.createElement(
                              'h3',
                              { className: 'font-primary' },
                              'Business',
                            ),
                            l.a.createElement(
                              'ul',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60GB'),
                                  ' Disk Space',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60'),
                                  ' Email Accounts',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60GB'),
                                  ' Bandwidth',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '15'),
                                  ' Subdomains',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '20'),
                                  ' Domains',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'button',
                              {
                                className: 'btn btn-primary btn-lg',
                                type: 'button',
                              },
                              'Subscribe',
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'col-md-4' },
                        l.a.createElement(
                          'div',
                          { className: 'pricing-block card text-center' },
                          l.a.createElement(
                            'svg',
                            { x: '0', y: '0', viewBox: '0 0 360 220' },
                            l.a.createElement(
                              'g',
                              null,
                              l.a.createElement('path', {
                                d:
                                  'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z',
                              }),
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                fill: '#fff',
                                'font-size': '78.4489',
                              },
                              '$30',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform:
                                  'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                fill: '#fff',
                                'font-size': '29.0829',
                              },
                              '.99',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 233.9629 115.5303)',
                                fill: '#fff',
                                'font-size': '15.4128',
                              },
                              '/Month',
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'pricing-inner' },
                            l.a.createElement(
                              'h3',
                              { className: 'font-primary' },
                              'Premium',
                            ),
                            l.a.createElement(
                              'ul',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60GB'),
                                  ' Disk Space',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60'),
                                  ' Email Accounts',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60GB'),
                                  ' Bandwidth',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '15'),
                                  ' Subdomains',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '20'),
                                  ' Domains',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'button',
                              {
                                className: 'btn btn-primary btn-lg',
                                type: 'button',
                              },
                              'Subscribe',
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                l.a.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  l.a.createElement(
                    'div',
                    { className: 'card' },
                    l.a.createElement(
                      'div',
                      { className: 'card-header' },
                      l.a.createElement(
                        'h5',
                        null,
                        'Pricing Table With Border',
                      ),
                    ),
                    l.a.createElement(
                      'div',
                      {
                        className:
                          'card-body row pricing-card-design-2 pricing-content',
                      },
                      l.a.createElement(
                        'div',
                        { className: 'col-md-4' },
                        l.a.createElement(
                          'div',
                          { className: 'pricing-block card text-center' },
                          l.a.createElement(
                            'svg',
                            { x: '0', y: '0', viewBox: '0 0 360 220' },
                            l.a.createElement(
                              'g',
                              null,
                              l.a.createElement('path', {
                                d:
                                  'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z',
                              }),
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                fill: '#fff',
                                'font-size': '78.4489',
                              },
                              '$10',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform:
                                  'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                fill: '#fff',
                                'font-size': '29.0829',
                              },
                              '.99',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 233.9629 115.5303)',
                                fill: '#fff',
                                'font-size': '15.4128',
                              },
                              '/Month',
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'pricing-inner' },
                            l.a.createElement(
                              'h3',
                              { className: 'font-primary' },
                              'Standard',
                            ),
                            l.a.createElement(
                              'ul',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '50GB'),
                                  ' Disk Space',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '50'),
                                  ' Email Accounts',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '50GB'),
                                  ' Bandwidth',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '10'),
                                  ' Subdomains',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '15'),
                                  ' Domains',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'button',
                              {
                                className: 'btn btn-primary btn-lg',
                                type: 'button',
                              },
                              'Subscribe',
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'col-md-4' },
                        l.a.createElement(
                          'div',
                          { className: 'pricing-block card text-center' },
                          l.a.createElement(
                            'svg',
                            { x: '0', y: '0', viewBox: '0 0 360 220' },
                            l.a.createElement(
                              'g',
                              null,
                              l.a.createElement('path', {
                                d:
                                  'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z',
                              }),
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                fill: '#fff',
                                'font-size': '78.4489',
                              },
                              '$20',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform:
                                  'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                fill: '#fff',
                                'font-size': '29.0829',
                              },
                              '.99',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 233.9629 115.5303)',
                                fill: '#fff',
                                'font-size': '15.4128',
                              },
                              '/Month',
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'pricing-inner' },
                            l.a.createElement(
                              'h3',
                              { className: 'font-primary' },
                              'Business',
                            ),
                            l.a.createElement(
                              'ul',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60GB'),
                                  ' Disk Space',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60'),
                                  ' Email Accounts',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60GB'),
                                  ' Bandwidth',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '15'),
                                  ' Subdomains',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '20'),
                                  ' Domains',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'button',
                              {
                                className: 'btn btn-primary btn-lg',
                                type: 'button',
                              },
                              'Subscribe',
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'col-md-4' },
                        l.a.createElement(
                          'div',
                          { className: 'pricing-block card text-center' },
                          l.a.createElement(
                            'svg',
                            { x: '0', y: '0', viewBox: '0 0 360 220' },
                            l.a.createElement(
                              'g',
                              null,
                              l.a.createElement('path', {
                                d:
                                  'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z',
                              }),
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                fill: '#fff',
                                'font-size': '78.4489',
                              },
                              '$30',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform:
                                  'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                fill: '#fff',
                                'font-size': '29.0829',
                              },
                              '.99',
                            ),
                            l.a.createElement(
                              'text',
                              {
                                transform: 'matrix(1 0 0 1 233.9629 115.5303)',
                                fill: '#fff',
                                'font-size': '15.4128',
                              },
                              '/Month',
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'pricing-inner' },
                            l.a.createElement(
                              'h3',
                              { className: 'font-primary' },
                              'Premium',
                            ),
                            l.a.createElement(
                              'ul',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60GB'),
                                  ' Disk Space',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60'),
                                  ' Email Accounts',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '60GB'),
                                  ' Bandwidth',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '15'),
                                  ' Subdomains',
                                ),
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                l.a.createElement(
                                  'h6',
                                  null,
                                  l.a.createElement('b', null, '20'),
                                  ' Domains',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'button',
                              {
                                className: 'btn btn-primary btn-lg',
                                type: 'button',
                              },
                              'Subscribe',
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                l.a.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  l.a.createElement(
                    'div',
                    { className: 'card' },
                    l.a.createElement(
                      'div',
                      { className: 'card-header' },
                      l.a.createElement('h5', null, 'Color Highlight'),
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'card-body pricing-card-design-1' },
                      l.a.createElement(
                        'div',
                        { className: 'row pricing-content' },
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$10',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Standard',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '10'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            {
                              className:
                                'pricing-block card text-center bg-primary pricing-active',
                            },
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$20',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement('h3', null, 'Business'),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '20'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$30',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Premium',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '20'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                l.a.createElement(
                  'div',
                  { className: 'col-sm-12' },
                  l.a.createElement(
                    'div',
                    { className: 'card' },
                    l.a.createElement(
                      'div',
                      { className: 'card-header' },
                      l.a.createElement(
                        'h5',
                        null,
                        'Pricing Table With Ribbons',
                      ),
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'card-body pricing-card-design-3' },
                      l.a.createElement(
                        'div',
                        { className: 'row pricing-content-ribbons' },
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'div',
                              {
                                className:
                                  'ribbon ribbon-bookmark ribbon-vertical-left ribbon-danger',
                              },
                              l.a.createElement('i', {
                                className: 'icofont icofont-love',
                              }),
                            ),
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$10',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Standard',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '10'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$20',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Business',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '20'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$30',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Premium',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '20'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$10',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Standard',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '10'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'div',
                              {
                                className:
                                  'ribbon ribbon-bookmark ribbon-danger',
                              },
                              'Popular',
                            ),
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$20',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Business',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '20'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$30',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Premium',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '20'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$10',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Standard',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '50GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '10'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$20',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Business',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '20'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'col-md-4' },
                          l.a.createElement(
                            'div',
                            { className: 'pricing-block card text-center' },
                            l.a.createElement(
                              'div',
                              {
                                className:
                                  'ribbon ribbon-clip-right ribbon-right ribbon-danger',
                              },
                              'Popular',
                            ),
                            l.a.createElement(
                              'svg',
                              { x: '0', y: '0', viewBox: '0 0 360 220' },
                              l.a.createElement(
                                'g',
                                null,
                                l.a.createElement('path', {
                                  d:
                                    'M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z',
                                }),
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform: 'matrix(1 0 0 1 69.7256 116.2686)',
                                  fill: '#fff',
                                  'font-size': '78.4489',
                                },
                                '$30',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(0.9566 0 0 1 197.3096 83.9121)',
                                  fill: '#fff',
                                  'font-size': '29.0829',
                                },
                                '.99',
                              ),
                              l.a.createElement(
                                'text',
                                {
                                  transform:
                                    'matrix(1 0 0 1 233.9629 115.5303)',
                                  fill: '#fff',
                                  'font-size': '15.4128',
                                },
                                '/Month',
                              ),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'pricing-inner' },
                              l.a.createElement(
                                'h3',
                                { className: 'font-primary' },
                                'Premium',
                              ),
                              l.a.createElement(
                                'ul',
                                { className: 'pricing-inner' },
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Disk Space',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60'),
                                    ' Email Accounts',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '60GB'),
                                    ' Bandwidth',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '15'),
                                    ' Subdomains',
                                  ),
                                ),
                                l.a.createElement(
                                  'li',
                                  null,
                                  l.a.createElement(
                                    'h6',
                                    null,
                                    l.a.createElement('b', null, '20'),
                                    ' Domains',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-primary btn-lg',
                                  type: 'button',
                                },
                                'Subscribe',
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        ie = a(50),
        oe = a.n(ie),
        ue = function () {
          return l.a.createElement(
            n.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'container-fluid' },
              l.a.createElement(
                'div',
                { className: 'edit-profile' },
                l.a.createElement(
                  'div',
                  { className: 'row' },
                  l.a.createElement(
                    'div',
                    { className: 'col-lg-4' },
                    l.a.createElement(
                      'div',
                      { className: 'card' },
                      l.a.createElement(
                        'div',
                        { className: 'card-header' },
                        l.a.createElement(
                          'h4',
                          { className: 'card-title mb-0' },
                          'My Profile',
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'card-options' },
                          l.a.createElement(
                            'a',
                            {
                              className: 'card-options-collapse',
                              href: 'javascript',
                              'data-toggle': 'card-collapse',
                            },
                            l.a.createElement('i', {
                              className: 'fe fe-chevron-up',
                            }),
                          ),
                          l.a.createElement(
                            'a',
                            {
                              className: 'card-options-remove',
                              href: 'javascript',
                              'data-toggle': 'card-remove',
                            },
                            l.a.createElement('i', { className: 'fe fe-x' }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'card-body' },
                        l.a.createElement(
                          'form',
                          null,
                          l.a.createElement(
                            'div',
                            { className: 'row mb-2' },
                            l.a.createElement(
                              'div',
                              { className: 'col-auto' },
                              l.a.createElement('img', {
                                className: 'img-70 rounded-circle',
                                alt: '',
                                src: oe.a,
                              }),
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'col' },
                              l.a.createElement(
                                'h3',
                                { className: 'mb-1' },
                                'MARK JECNO',
                              ),
                              l.a.createElement(
                                'p',
                                { className: 'mb-4' },
                                'DESIGNER',
                              ),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(
                              'h6',
                              { className: 'form-label' },
                              'Bio',
                            ),
                            l.a.createElement('textarea', {
                              className: 'form-control',
                              rows: '5',
                              defaultValue:
                                'On the other hand, we denounce with righteous indignation',
                            }),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(
                              'label',
                              { className: 'form-label' },
                              'Email-Address',
                            ),
                            l.a.createElement('input', {
                              className: 'form-control',
                              placeholder: 'your-email@domain.com',
                            }),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(
                              'label',
                              { className: 'form-label' },
                              'Password',
                            ),
                            l.a.createElement('input', {
                              className: 'form-control',
                              type: 'password',
                              defaultValue: 'password',
                              readOnly: !0,
                            }),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(
                              'label',
                              { className: 'form-label' },
                              'Website',
                            ),
                            l.a.createElement('input', {
                              className: 'form-control',
                              placeholder: 'http://Uplor .com',
                            }),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'form-footer' },
                            l.a.createElement(
                              'button',
                              { className: 'btn btn-primary btn-block' },
                              'Save',
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'col-lg-8' },
                    l.a.createElement(
                      'form',
                      { className: 'card' },
                      l.a.createElement(
                        'div',
                        { className: 'card-header' },
                        l.a.createElement(
                          'h4',
                          { className: 'card-title mb-0' },
                          'Edit Profile',
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'card-options' },
                          l.a.createElement(
                            'a',
                            {
                              className: 'card-options-collapse',
                              href: 'javascript',
                              'data-toggle': 'card-collapse',
                            },
                            l.a.createElement('i', {
                              className: 'fe fe-chevron-up',
                            }),
                          ),
                          l.a.createElement(
                            'a',
                            {
                              className: 'card-options-remove',
                              href: 'javascript',
                              'data-toggle': 'card-remove',
                            },
                            l.a.createElement('i', { className: 'fe fe-x' }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'card-body' },
                        l.a.createElement(
                          'div',
                          { className: 'row' },
                          l.a.createElement(
                            'div',
                            { className: 'col-md-5' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'Company',
                              ),
                              l.a.createElement('input', {
                                className: 'form-control',
                                type: 'text',
                                placeholder: 'Company',
                              }),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'col-sm-6 col-md-3' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'Username',
                              ),
                              l.a.createElement('input', {
                                className: 'form-control',
                                type: 'text',
                                placeholder: 'Username',
                              }),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'col-sm-6 col-md-4' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'Email address',
                              ),
                              l.a.createElement('input', {
                                className: 'form-control',
                                type: 'email',
                                placeholder: 'Email',
                              }),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'col-sm-6 col-md-6' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'First Name',
                              ),
                              l.a.createElement('input', {
                                className: 'form-control',
                                type: 'text',
                                placeholder: 'Company',
                              }),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'col-sm-6 col-md-6' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'Last Name',
                              ),
                              l.a.createElement('input', {
                                className: 'form-control',
                                type: 'text',
                                placeholder: 'Last Name',
                              }),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'col-md-12' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'Address',
                              ),
                              l.a.createElement('input', {
                                className: 'form-control',
                                type: 'text',
                                placeholder: 'Home Address',
                              }),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'col-sm-6 col-md-4' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'City',
                              ),
                              l.a.createElement('input', {
                                className: 'form-control',
                                type: 'text',
                                placeholder: 'City',
                              }),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'col-sm-6 col-md-3' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'Postal Code',
                              ),
                              l.a.createElement('input', {
                                className: 'form-control',
                                type: 'number',
                                placeholder: 'ZIP Code',
                              }),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'col-md-5' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'Country',
                              ),
                              l.a.createElement(
                                'select',
                                { className: 'form-control btn-square' },
                                l.a.createElement(
                                  'option',
                                  { value: '0' },
                                  '--Select--',
                                ),
                                l.a.createElement(
                                  'option',
                                  { value: '1' },
                                  'Germany',
                                ),
                                l.a.createElement(
                                  'option',
                                  { value: '2' },
                                  'Canada',
                                ),
                                l.a.createElement(
                                  'option',
                                  { value: '3' },
                                  'Usa',
                                ),
                                l.a.createElement(
                                  'option',
                                  { value: '4' },
                                  'Aus',
                                ),
                              ),
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'col-md-12' },
                            l.a.createElement(
                              'div',
                              { className: 'form-group mb-0' },
                              l.a.createElement(
                                'label',
                                { className: 'form-label' },
                                'About Me',
                              ),
                              l.a.createElement('textarea', {
                                className: 'form-control',
                                rows: '5',
                                placeholder: 'Enter About your description',
                              }),
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'card-footer text-right' },
                        l.a.createElement(
                          'button',
                          { className: 'btn btn-primary', type: 'submit' },
                          'Update Profile',
                        ),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'col-md-12' },
                    l.a.createElement(
                      'div',
                      { className: 'card' },
                      l.a.createElement(
                        'div',
                        { className: 'card-header' },
                        l.a.createElement(
                          'h4',
                          { className: 'card-title mb-0' },
                          'Add projects And Upload',
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'card-options' },
                          l.a.createElement(
                            'a',
                            {
                              className: 'card-options-collapse',
                              href: 'javascript',
                              'data-toggle': 'card-collapse',
                            },
                            l.a.createElement('i', {
                              className: 'fe fe-chevron-up',
                            }),
                          ),
                          l.a.createElement(
                            'a',
                            {
                              className: 'card-options-remove',
                              href: 'javascript',
                              'data-toggle': 'card-remove',
                            },
                            l.a.createElement('i', { className: 'fe fe-x' }),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'div',
                        { className: 'table-responsive' },
                        l.a.createElement(
                          'table',
                          {
                            className:
                              'table card-table table-vcenter text-nowrap',
                          },
                          l.a.createElement(
                            'thead',
                            null,
                            l.a.createElement(
                              'tr',
                              null,
                              l.a.createElement('th', null, 'Project Name'),
                              l.a.createElement('th', null, 'Date'),
                              l.a.createElement('th', null, 'Status'),
                              l.a.createElement('th', null, 'Price'),
                              l.a.createElement('th', null),
                            ),
                          ),
                          l.a.createElement(
                            'tbody',
                            null,
                            l.a.createElement(
                              'tr',
                              null,
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement(
                                  'a',
                                  {
                                    className: 'text-inherit',
                                    href: 'javascript',
                                  },
                                  'Untrammelled prevents',
                                  ' ',
                                ),
                              ),
                              l.a.createElement('td', null, '28 May 2018'),
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement('span', {
                                  className: 'status-icon bg-success',
                                }),
                                ' ',
                                'Completed',
                              ),
                              l.a.createElement('td', null, '$56,908'),
                              l.a.createElement(
                                'td',
                                { className: 'text-right' },
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-primary btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-pencil',
                                  }),
                                  ' Edit',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-transparent btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-link',
                                  }),
                                  ' Update',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-danger btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-trash',
                                  }),
                                  ' Delete',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'tr',
                              null,
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement(
                                  'a',
                                  {
                                    className: 'text-inherit',
                                    href: 'javascript',
                                  },
                                  'Untrammelled prevents',
                                ),
                              ),
                              l.a.createElement('td', null, '12 June 2018'),
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement('span', {
                                  className: 'status-icon bg-danger',
                                }),
                                ' On going',
                              ),
                              l.a.createElement('td', null, '$45,087'),
                              l.a.createElement(
                                'td',
                                { className: 'text-right' },
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-primary btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-pencil',
                                  }),
                                  ' Edit',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-transparent btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-link',
                                  }),
                                  ' Update',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-danger btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-trash',
                                  }),
                                  ' Delete',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'tr',
                              null,
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement(
                                  'a',
                                  {
                                    className: 'text-inherit',
                                    href: 'javascript',
                                  },
                                  'Untrammelled prevents',
                                ),
                              ),
                              l.a.createElement('td', null, '12 July 2018'),
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement('span', {
                                  className: 'status-icon bg-warning',
                                }),
                                ' ',
                                'Pending',
                              ),
                              l.a.createElement('td', null, '$60,123'),
                              l.a.createElement(
                                'td',
                                { className: 'text-right' },
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-primary btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-pencil',
                                  }),
                                  ' Edit',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-transparent btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-link',
                                  }),
                                  ' Update',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-danger btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-trash',
                                  }),
                                  ' Delete',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'tr',
                              null,
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement(
                                  'a',
                                  {
                                    className: 'text-inherit',
                                    href: 'javascript',
                                  },
                                  'Untrammelled prevents',
                                ),
                              ),
                              l.a.createElement('td', null, '14 June 2018'),
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement('span', {
                                  className: 'status-icon bg-warning',
                                }),
                                ' ',
                                'Pending',
                              ),
                              l.a.createElement('td', null, '$70,435'),
                              l.a.createElement(
                                'td',
                                { className: 'text-right' },
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-primary btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-pencil',
                                  }),
                                  ' Edit',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-transparent btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-link',
                                  }),
                                  ' Update',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-danger btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-trash',
                                  }),
                                  ' Delete',
                                ),
                              ),
                            ),
                            l.a.createElement(
                              'tr',
                              null,
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement(
                                  'a',
                                  {
                                    className: 'text-inherit',
                                    href: 'javascript',
                                  },
                                  'Untrammelled prevents',
                                ),
                              ),
                              l.a.createElement('td', null, '25 June 2018'),
                              l.a.createElement(
                                'td',
                                null,
                                l.a.createElement('span', {
                                  className: 'status-icon bg-success',
                                }),
                                ' ',
                                'Completed',
                              ),
                              l.a.createElement('td', null, '$15,987'),
                              l.a.createElement(
                                'td',
                                { className: 'text-right' },
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-primary btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-pencil',
                                  }),
                                  ' Edit',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-transparent btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-link',
                                  }),
                                  ' Update',
                                ),
                                l.a.createElement(
                                  'button',
                                  {
                                    className: 'btn btn-danger btn-sm',
                                    href: 'javascript',
                                  },
                                  l.a.createElement('i', {
                                    className: 'fa fa-trash',
                                  }),
                                  ' Delete',
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        Ee = Object(N.h)(function () {
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              'div',
              { className: 'page-wrapper' },
              l.a.createElement(
                'div',
                { className: 'container-fluid p-0' },
                l.a.createElement('div', null),
                l.a.createElement(
                  'div',
                  { className: 'authentication-main' },
                  l.a.createElement(
                    'div',
                    { className: 'row' },
                    l.a.createElement(
                      'div',
                      { className: 'col-md-12' },
                      l.a.createElement(
                        'div',
                        { className: 'auth-innerright' },
                        l.a.createElement(
                          'div',
                          { className: 'authentication-box' },
                          l.a.createElement(
                            'div',
                            { className: 'text-center' },
                            l.a.createElement('img', { src: A.a, alt: '' }),
                            l.a.createElement(
                              'h3',
                              { className: 'signup-title' },
                              'Foople',
                            ),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'card mt-4 login-card' },
                            l.a.createElement(
                              'div',
                              { className: 'card-body' },
                              l.a.createElement(
                                'a',
                                {
                                  href: 'https://slack.com/oauth/v2/authorize?client_id='.concat(
                                    '1042026065250.2926712584193',
                                    '&scope=commands,app_mentions:read,channels:history,channels:manage,chat:write,chat:write.public,im:history,im:write,incoming-webhook,mpim:write&user_scope=chat:write,identify,im:write,channels:write,groups:write,mpim:write&state=signup',
                                  ),
                                },
                                l.a.createElement('img', {
                                  alt: 'Add to Slack',
                                  height: '40',
                                  width: '139',
                                  src:
                                    'https://platform.slack-edge.com/img/add_to_slack.png',
                                  srcSet:
                                    'https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x',
                                }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                l.a.createElement(o.a, null),
              ),
            ),
          )
        }),
        de = function (e) {
          var t = e.label,
            a = e.onClick
          return l.a.createElement(
            'button',
            {
              className: 'btn btn-square btn-primary',
              onClick: a,
              type: 'button',
            },
            t,
          )
        },
        pe = function (e) {
          var t = e.label,
            a = e.onClick
          return l.a.createElement(
            'button',
            { className: 'btn', onClick: a, type: 'button' },
            t,
          )
        },
        fe = Object(m.b)(null, function (e) {
          return {
            addCompanyInfo: function (t) {
              return e({ type: 'COMPANY_SIGNUP_INFO', value: t })
            },
          }
        })(function (e) {
          var t = e.addCompanyInfo,
            a = Object(n.useState)(!0),
            r = Object(k.a)(a, 2),
            c = r[0],
            m = r[1],
            s = Object(n.useState)({}),
            i = Object(k.a)(s, 2),
            o = i[0],
            u = i[1],
            d = Object(n.useState)({ status: !1, to: '' }),
            p = Object(k.a)(d, 2),
            f = p[0],
            b = p[1]
          Object(n.useEffect)(
            function () {
              ;(function () {
                var e = Object(w.a)(
                  y.a.mark(function e() {
                    var a, n, l, r
                    return y.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = j.a.get('lunch-session')),
                                (n = {
                                  method: 'POST',
                                  body: JSON.stringify({ code: a }),
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                }),
                                (e.prev = 2),
                                (e.next = 5),
                                fetch(''.concat(E, '/company/get'), n)
                              )
                            case 5:
                              return (l = e.sent), (e.next = 8), l.json()
                            case 8:
                              ;(r = e.sent), u(r), t(r), (e.next = 16)
                              break
                            case 13:
                              ;(e.prev = 13),
                                (e.t0 = e.catch(2)),
                                console.error('err: ', e.t0)
                            case 16:
                              return (e.prev = 16), m(!1), e.finish(16)
                            case 19:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[2, 13, 16, 19]],
                    )
                  }),
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })()()
            },
            [t],
          )
          var h = (function () {
            var e = Object(w.a)(
              y.a.mark(function e(t) {
                var a
                return y.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = {
                              method: 'PUT',
                              body: JSON.stringify({
                                companyInfo: o,
                                welcome: t,
                              }),
                              headers: { 'Content-Type': 'application/json' },
                            }),
                            (e.prev = 1),
                            (e.next = 4),
                            fetch(''.concat(E, '/welcome'), a)
                          )
                        case 4:
                          if (e.sent.ok) {
                            e.next = 7
                            break
                          }
                          throw new Error('No slack Auth')
                        case 7:
                          b({ status: !0, to: '/app/dashboard/default' }),
                            (e.next = 14)
                          break
                        case 10:
                          ;(e.prev = 10),
                            (e.t0 = e.catch(1)),
                            console.error(e.t0),
                            b({ status: !0, to: '/app/dashboard/default' })
                        case 14:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 10]],
                )
              }),
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
          return c
            ? l.a.createElement(Y, { show: !0 })
            : f.status
            ? l.a.createElement(N.a, { to: f.to })
            : l.a.createElement(
                'div',
                { className: 'welcome-page' },
                l.a.createElement(
                  'div',
                  { className: 'welcome-page-content' },
                  l.a.createElement(
                    'div',
                    { className: 'welcome-title' },
                    'Welcome to Foople!',
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'welcome-greeting' },
                    'Can we say hello to the team?',
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'welcome-greeting-description' },
                    "We'll just post a message in Slack letting them know that the app has been installed",
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'welcome-ctas' },
                    l.a.createElement(pe, {
                      label: 'No',
                      onClick: function (e) {
                        return h(!1)
                      },
                    }),
                    l.a.createElement(de, {
                      label: 'Yes',
                      onClick: function (e) {
                        return h(!0)
                      },
                    }),
                  ),
                ),
              )
        }),
        be = function () {
          var e = Object(n.useState)(!0),
            t = Object(k.a)(e, 2),
            a = t[0],
            r = t[1],
            c = Object(n.useState)(!1),
            m = Object(k.a)(c, 2),
            s = m[0],
            i = m[1]
          Object(n.useEffect)(function () {
            o()
          }, [])
          var o = (function () {
            var e = Object(w.a)(
              y.a.mark(function e() {
                return y.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (j.a.get('signup-process')) {
                          e.next = 4
                          break
                        }
                        return r(!1), e.abrupt('return', i(!1))
                      case 4:
                        return r(!0), e.abrupt('return', i(!1))
                      case 6:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
          return l.a.createElement(
            l.a.Fragment,
            null,
            s
              ? l.a.createElement(Y, null)
              : a
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(N.b, {
                    exact: !0,
                    path: ''.concat('', '/signup/welcome'),
                    component: fe,
                  }),
                  l.a.createElement(N.b, {
                    exact: !0,
                    path: ''.concat('', '/signup/new'),
                    component: Ee,
                  }),
                  l.a.createElement(N.b, {
                    exact: !0,
                    path: ''.concat('', '/signup'),
                    render: function () {
                      return l.a.createElement(N.a, {
                        to: ''.concat('', '/signup/new'),
                      })
                    },
                  }),
                )
              : l.a.createElement(N.a, { to: ''.concat('', '/signup/new') }),
          )
        },
        he = function () {
          return l.a.createElement(
            'a',
            {
              href: 'https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email&client_id='.concat(
                '1042026065250.2926712584193',
                '&state=login',
              ),
            },
            l.a.createElement('img', {
              alt: 'Sign in with Slack',
              height: '40',
              width: '172',
              src: 'https://platform.slack-edge.com/img/sign_in_with_slack.png',
              srcSet:
                'https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x',
            }),
          )
        },
        ge = Object(N.h)(function () {
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              'div',
              { className: 'page-wrapper' },
              l.a.createElement(
                'div',
                { className: 'container-fluid p-0' },
                l.a.createElement(
                  'div',
                  { className: 'authentication-main' },
                  l.a.createElement(
                    'div',
                    { className: 'row' },
                    l.a.createElement(
                      'div',
                      { className: 'col-md-12' },
                      l.a.createElement(
                        'div',
                        { className: 'auth-innerright' },
                        l.a.createElement(
                          'div',
                          { className: 'authentication-box' },
                          l.a.createElement(
                            'div',
                            { className: 'text-center home-logo' },
                            l.a.createElement('img', {
                              src: A.a,
                              alt: '',
                              onClick: function () {
                                window.location = '/'
                              },
                            }),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'card mt-4 login-card' },
                            l.a.createElement(
                              'div',
                              { className: 'card-body' },
                              l.a.createElement(he, null),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                l.a.createElement(o.a, null),
              ),
            ),
          )
        }),
        ve = a(51),
        Ne = a.n(ve),
        xe = function (e) {
          e.children, d.get('clientId')
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              'div',
              { className: 'landing-page' },
              l.a.createElement(
                'div',
                { className: 'landing-page-body' },
                l.a.createElement(
                  'nav',
                  { className: 'landing-page-nav' },
                  l.a.createElement(
                    'a',
                    {
                      href: 'https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email&client_id='.concat(
                        '1042026065250.2926712584193',
                        '&state=login',
                      ),
                    },
                    'Login',
                  ),
                ),
                l.a.createElement(
                  'div',
                  { className: 'landing-page-hero' },
                  l.a.createElement(
                    'div',
                    { className: 'landing-page-hero__top' },
                    l.a.createElement(
                      'p',
                      { className: 'landing-title' },
                      'Foople',
                    ),
                    l.a.createElement(
                      'p',
                      { className: 'landing-subtitle' },
                      'The Food Poll',
                    ),
                    l.a.createElement(
                      'p',
                      { className: 'landing-description' },
                      'Create a randomized poll in Slack to decide where to dine. The days of arguing and taking forever to decide where to eat are over.',
                    ),
                    l.a.createElement(
                      'div',
                      { className: 'slack-signup-wrapper' },
                      l.a.createElement(
                        'a',
                        {
                          href: 'https://slack.com/oauth/v2/authorize?client_id='.concat(
                            '1042026065250.2926712584193',
                            '&scope=commands,app_mentions:read,channels:history,channels:manage,chat:write,chat:write.public,im:history,im:write,incoming-webhook,mpim:write,users:read&user_scope=chat:write,identify,im:write,channels:write,groups:write,mpim:write&state=signup',
                          ),
                        },
                        l.a.createElement('img', {
                          alt: 'Add to Slack',
                          height: '40',
                          width: '139',
                          src:
                            'https://platform.slack-edge.com/img/add_to_slack.png',
                          srcSet:
                            'https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x',
                        }),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    'div',
                    { className: 'landing-page-hero__bottom' },
                    l.a.createElement(
                      'div',
                      { className: 'background-hero' },
                      l.a.createElement('img', { src: Ne.a }),
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        ye = Object(N.h)(function () {
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              'div',
              { className: 'page-wrapper' },
              l.a.createElement(xe, null),
            ),
          )
        }),
        we = Object(N.h)(
          Object(m.b)(
            function (e) {
              var t = e.auth,
                a = void 0 !== t && t,
                n = e.authData,
                l = void 0 === n ? {} : n,
                r = e.logoutRequested
              return {
                auth: a,
                authData: l,
                logoutRequested: void 0 !== r && r,
              }
            },
            function (e) {
              return {
                setAuth: function (t) {
                  return e({ type: 'SET_AUTH', value: t })
                },
                initializeAuth: function (t, a) {
                  return e(I(t, a))
                },
              }
            },
          )(function (e) {
            var t = e.history,
              a = e.setAuth,
              r = e.auth,
              c = e.authData,
              m = e.initializeAuth,
              s = e.logoutRequested,
              i = Object(N.g)(),
              o = Object(n.useState)(!1),
              u = Object(k.a)(o, 2),
              E = u[0],
              d = u[1],
              p = Object(n.useState)(!0),
              f = Object(k.a)(p, 2),
              b = f[0],
              h = f[1]
            Object(n.useEffect)(function () {
              g()
            }, []),
              Object(n.useEffect)(
                function () {
                  r && Object.keys(c).length ? v() : s && d(!1)
                },
                [r, c],
              )
            var g = (function () {
                var e = Object(w.a)(
                  y.a.mark(function e() {
                    return y.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((h(!0), !r || !Object.keys(c).length)) {
                              e.next = 4
                              break
                            }
                            return d(!0), e.abrupt('return', h(!1))
                          case 4:
                            if (!j.a.get('lunch-session')) {
                              e.next = 7
                              break
                            }
                            return e.abrupt('return', m(t, i))
                          case 7:
                            a(!1), d(!1), h(!1)
                          case 10:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })(),
              v = function () {
                j.a.set('lunch-session', c.token, { expires: 7 }), d(!0), h(!1)
              }
            return l.a.createElement(
              l.a.Fragment,
              null,
              b
                ? l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(Y, { show: !0 }),
                  )
                : l.a.createElement(
                    l.a.Fragment,
                    null,
                    E
                      ? l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            U,
                            null,
                            l.a.createElement(
                              N.d,
                              null,
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat('', '/app'),
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat('', '/app/dashboard/default'),
                                  })
                                },
                              }),
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat('', '/signup/welcome'),
                                component: fe,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat('', '/app/dashboard/default'),
                                component: X,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat('', '/app/table/datatable'),
                                component: q,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat('', '/app/users/userEdit'),
                                component: ue,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat('', '/app/account/payment'),
                                component: me,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat('', '/price/pricing'),
                                component: se,
                              }),
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat('', '/login'),
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat('', '/app/dashboard/default'),
                                  })
                                },
                              }),
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat('', '/signup'),
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat('', '/app/dashboard/default'),
                                  })
                                },
                              }),
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat('', '/'),
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat('', '/app/dashboard/default'),
                                  })
                                },
                              }),
                              l.a.createElement(N.b, {
                                path: '*',
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat('', '/app/dashboard/default'),
                                  })
                                },
                              }),
                            ),
                          ),
                        )
                      : l.a.createElement(
                          N.d,
                          null,
                          l.a.createElement(N.b, {
                            path: ''.concat('', '/login'),
                            component: ge,
                          }),
                          l.a.createElement(N.b, {
                            path: ''.concat('', '/signup'),
                            component: be,
                          }),
                          l.a.createElement(N.b, {
                            exact: !0,
                            path: ''.concat('', '/'),
                            component: ye,
                          }),
                          l.a.createElement(N.b, {
                            path: '*',
                            render: function () {
                              return l.a.createElement(N.a, {
                                to: ''.concat('', '/login'),
                              })
                            },
                          }),
                        ),
                  ),
            )
          }),
        ),
        ke = function () {
          return l.a.createElement(
            n.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'page-wrapper' },
              l.a.createElement(
                'div',
                { className: 'container-fluid' },
                l.a.createElement(
                  'div',
                  { className: 'authentication-main' },
                  l.a.createElement(
                    'div',
                    { className: 'row' },
                    l.a.createElement(
                      'div',
                      { className: 'col-md-12 p-0' },
                      l.a.createElement(
                        'div',
                        { className: 'auth-innerright' },
                        l.a.createElement(
                          'div',
                          { className: 'reset-password-box' },
                          l.a.createElement(
                            'div',
                            { className: 'text-center' },
                            l.a.createElement('img', { src: A.a, alt: '' }),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'card mt-4 mb-0' },
                            l.a.createElement(
                              'h4',
                              null,
                              'Reset Your Password',
                            ),
                            l.a.createElement(
                              'form',
                              { className: 'theme-form' },
                              l.a.createElement(
                                'div',
                                { className: 'form-group' },
                                l.a.createElement(
                                  'label',
                                  { className: 'col-form-label' },
                                  'Enter Your Mobile Number',
                                ),
                                l.a.createElement(
                                  'div',
                                  { className: 'form-row' },
                                  l.a.createElement(
                                    'div',
                                    { className: 'col-md-2' },
                                    l.a.createElement('input', {
                                      className: 'form-control digits mb-1',
                                      type: 'text',
                                      defaultValue: '+ 91',
                                    }),
                                  ),
                                  l.a.createElement(
                                    'div',
                                    { className: 'col-md-7 col-xl-8' },
                                    l.a.createElement('input', {
                                      className: 'form-control digits mb-1',
                                      type: 'tel',
                                      defaultValue: '000-000-0000',
                                    }),
                                  ),
                                  l.a.createElement(
                                    'div',
                                    { className: 'col-md-2' },
                                    l.a.createElement(
                                      'button',
                                      {
                                        className: 'btn btn-primary m-0',
                                        type: 'submit',
                                      },
                                      'Send',
                                    ),
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'div',
                                { className: 'text-center mt-4 mb-4' },
                                l.a.createElement(
                                  'span',
                                  { className: 'reset-password-link' },
                                  "If don't receive OTP?\xa0\xa0",
                                  l.a.createElement(
                                    'a',
                                    {
                                      className: 'btn-link text-danger',
                                      href: '#javascript',
                                    },
                                    'Resend',
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'div',
                                { className: 'form-group rounded p-4 opt-box' },
                                l.a.createElement(
                                  'label',
                                  { className: 'col-form-label pt-0' },
                                  'Enter OTP',
                                ),
                                l.a.createElement(
                                  'div',
                                  { className: 'form-row' },
                                  l.a.createElement(
                                    'div',
                                    { className: 'col' },
                                    l.a.createElement('input', {
                                      className:
                                        'form-control digits text-center opt-text',
                                      type: 'text',
                                      defaultValue: '00',
                                      maxLength: '2',
                                    }),
                                  ),
                                  l.a.createElement(
                                    'div',
                                    { className: 'col' },
                                    l.a.createElement('input', {
                                      className:
                                        'form-control digits text-center opt-text',
                                      type: 'text',
                                      defaultValue: '00',
                                      maxLength: '2',
                                    }),
                                  ),
                                  l.a.createElement(
                                    'div',
                                    { className: 'col' },
                                    l.a.createElement('input', {
                                      className:
                                        'form-control digits text-center opt-text',
                                      type: 'text',
                                      defaultValue: '00',
                                      maxLength: '2',
                                    }),
                                  ),
                                ),
                              ),
                              l.a.createElement(
                                'h6',
                                { className: 'f-14 mt-4 mb-3' },
                                'CREATE YOUR PASSWORD',
                              ),
                              l.a.createElement(
                                'div',
                                { className: 'form-group' },
                                l.a.createElement(
                                  'label',
                                  { className: 'col-form-label' },
                                  'New Password',
                                ),
                                l.a.createElement('input', {
                                  className: 'form-control',
                                  type: 'password',
                                }),
                              ),
                              l.a.createElement(
                                'div',
                                { className: 'form-group' },
                                l.a.createElement(
                                  'label',
                                  { className: 'col-form-label' },
                                  'Retype Password',
                                ),
                                l.a.createElement('input', {
                                  className: 'form-control',
                                  type: 'password',
                                }),
                              ),
                              l.a.createElement(
                                'div',
                                { className: 'form-group form-row mb-2' },
                                l.a.createElement(
                                  'div',
                                  { className: 'col-md-2' },
                                  l.a.createElement(
                                    'button',
                                    {
                                      className: 'btn btn-primary',
                                      type: 'submit',
                                    },
                                    'Done',
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        Se = function () {
          return l.a.createElement(
            n.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'page-wrapper' },
              l.a.createElement(
                'div',
                { className: 'container-fluid' },
                l.a.createElement(
                  'div',
                  { className: 'authentication-main' },
                  l.a.createElement(
                    'div',
                    { className: 'row' },
                    l.a.createElement(
                      'div',
                      { className: 'col-md-12 p-0' },
                      l.a.createElement(
                        'div',
                        { className: 'auth-innerright' },
                        l.a.createElement(
                          'div',
                          { className: 'authentication-box' },
                          l.a.createElement(
                            'div',
                            { className: 'text-center' },
                            l.a.createElement('img', { src: A.a, alt: '' }),
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'card mt-4 p-4' },
                            l.a.createElement(
                              'form',
                              { className: 'theme-form' },
                              l.a.createElement(
                                'h5',
                                { className: 'f-16 mb-3 f-w-600' },
                                'CREATE YOUR PASSWORD',
                              ),
                              l.a.createElement(
                                'div',
                                { className: 'form-group' },
                                l.a.createElement(
                                  'label',
                                  { className: 'col-form-label' },
                                  'New Password',
                                ),
                                l.a.createElement('input', {
                                  className: 'form-control',
                                  type: 'password',
                                  placeholder: '*****',
                                }),
                              ),
                              l.a.createElement(
                                'div',
                                { className: 'form-group' },
                                l.a.createElement(
                                  'label',
                                  { className: 'col-form-label' },
                                  'Retype Password',
                                ),
                                l.a.createElement('input', {
                                  className: 'form-control',
                                  type: 'password',
                                  placeholder: '*****',
                                }),
                              ),
                              l.a.createElement(
                                'div',
                                { className: 'form-group form-row mb-0' },
                                l.a.createElement(
                                  'div',
                                  { className: 'col-md-2' },
                                  l.a.createElement(
                                    'button',
                                    {
                                      className: 'btn btn-primary',
                                      type: 'submit',
                                    },
                                    'Done',
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        je = a(52),
        Oe = a.n(je),
        Ae = Object(m.b)(null, function (e) {
          return {
            addUser: function (t) {
              return e({ type: 'ADD_USER', value: t })
            },
            setAuth: function (t) {
              return e({ type: 'SET_AUTH', value: t })
            },
          }
        })(function (e) {
          var t = e.addUser,
            a = e.setAuth,
            r = Object(n.useState)(!0),
            c = Object(k.a)(r, 2),
            m = c[0],
            s = c[1],
            i = Object(n.useState)({ status: !1, to: '' }),
            u = Object(k.a)(i, 2),
            d = u[0],
            p = u[1],
            b = Object(N.g)()
          return (
            Object(n.useEffect)(
              function () {
                var e = (function () {
                    var e = Object(w.a)(
                      y.a.mark(function e(n) {
                        var l, r, c, m, i, u, d, b
                        return y.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((l = n.code),
                                    (r = n.error),
                                    (c = n.state),
                                    r &&
                                      console.error(
                                        'error! user likely declined the permissions: ',
                                        r,
                                      ),
                                    l || c)
                                  ) {
                                    e.next = 4
                                    break
                                  }
                                  return e.abrupt(
                                    'return',
                                    p({ status: !0, to: '/signup/new' }),
                                  )
                                case 4:
                                  return (
                                    (m = {
                                      method: 'POST',
                                      body: JSON.stringify({
                                        code: l,
                                        state: c,
                                      }),
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    }),
                                    (e.prev = 5),
                                    (e.next = 8),
                                    fetch(''.concat(E, '/oauth'), m)
                                  )
                                case 8:
                                  if ((i = e.sent).ok) {
                                    e.next = 11
                                    break
                                  }
                                  throw new Error('No slack Auth')
                                case 11:
                                  return (e.next = 13), i.json()
                                case 13:
                                  if (((u = e.sent), 403 !== i.status)) {
                                    e.next = 16
                                    break
                                  }
                                  throw new Error('Stripe Error')
                                case 16:
                                  if (
                                    'login.signup' !== c &&
                                    ('login' !== c ||
                                      'authed new user' !== u.message)
                                  ) {
                                    e.next = 25
                                    break
                                  }
                                  j.a.set('lunch-session', u.token, {
                                    expires: 7,
                                  }),
                                    (d = L()(u.token)),
                                    t(Object(f.a)({ token: u.token }, d)),
                                    a(!0),
                                    s(!1),
                                    p({
                                      status: !0,
                                      to: '/app/dashboard/default',
                                    }),
                                    (e.next = 44)
                                  break
                                case 25:
                                  if (
                                    'authed existing user' !== u.message ||
                                    !u.token
                                  ) {
                                    e.next = 35
                                    break
                                  }
                                  j.a.set('lunch-session', u.token, {
                                    expires: 7,
                                  }),
                                    (b = L()(u.token)),
                                    a(!0),
                                    t(Object(f.a)({ token: u.token }, b)),
                                    s(!1),
                                    p({
                                      status: !0,
                                      to: '/app/dashboard/default',
                                    }),
                                    'login' === c
                                      ? o.b.success('Welcome back!')
                                      : 'signup' === c &&
                                        o.b.success(
                                          'Already signed up, redirecting you to the dashboard',
                                        ),
                                    (e.next = 44)
                                  break
                                case 35:
                                  if ('signup needed' !== u.message) {
                                    e.next = 39
                                    break
                                  }
                                  ;(window.location = 'https://slack.com/oauth/v2/authorize?client_id='.concat(
                                    '1042026065250.2926712584193',
                                    '&scope=commands,app_mentions:read,channels:history,channels:manage,chat:write,chat:write.public,im:history,im:write,incoming-webhook,mpim:write,users:read&user_scope=chat:write,identify,im:write,channels:write,groups:write,mpim:write&state=signup',
                                  )),
                                    (e.next = 44)
                                  break
                                case 39:
                                  if (
                                    'existing user' !== u.message ||
                                    !u.token
                                  ) {
                                    e.next = 43
                                    break
                                  }
                                  ;(window.location = 'https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email,&client_id='.concat(
                                    '1042026065250.2926712584193',
                                    '&state=login.signup',
                                  )),
                                    (e.next = 44)
                                  break
                                case 43:
                                  throw new Error('error ahoy')
                                case 44:
                                  e.next = 52
                                  break
                                case 46:
                                  ;(e.prev = 46),
                                    (e.t0 = e.catch(5)),
                                    o.b.error('Something went wrong'),
                                    s(!1),
                                    p({ status: !0, to: '/signup/new' }),
                                    console.error(e.t0)
                                case 52:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[5, 46]],
                        )
                      }),
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  n = window.location.search.substring(1),
                  l = Oe.a.parse(n)
                if (l.error) return s(!1), p({ status: !0, to: '/signup/new' })
                Object.keys(l).length
                  ? e(l)
                  : p({ status: !0, to: '/signup/new' })
              },
              [t, b, a],
            ),
            l.a.createElement(
              l.a.Fragment,
              null,
              m
                ? l.a.createElement(Y, { show: !0 })
                : d.status && l.a.createElement(N.a, { to: d.to }),
            )
          )
        }),
        De = function () {
          return l.a.createElement(
            N.d,
            null,
            l.a.createElement(N.b, {
              exact: !0,
              path: ''.concat('', '/'),
              component: we,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('', '/app'),
              component: we,
            }),
            l.a.createElement(N.b, {
              exact: !0,
              path: ''.concat('', '/slack-auth'),
              component: Ae,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('', '/signup'),
              component: we,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('', '/login'),
              component: we,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('', '/pages/forgetPwd'),
              component: ke,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('', '/pages/resetPwd'),
              component: Se,
            }),
            l.a.createElement(N.b, { component: we }),
          )
        },
        Be = function () {
          return l.a.createElement(
            'div',
            { className: 'App' },
            l.a.createElement(
              m.a,
              { store: v },
              l.a.createElement(
                s.a,
                { basename: '/' },
                l.a.createElement(
                  i.a,
                  null,
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(De, null),
                    l.a.createElement(o.a, null),
                  ),
                ),
              ),
            ),
          )
        }
      c.a.render(l.a.createElement(Be, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister()
          })
    },
  },
  [[57, 1, 2]],
])
//# sourceMappingURL=main.d2066f21.chunk.js.map
