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
        c = a(15),
        r = a.n(c),
        s = a(10),
        m = a(13),
        i = a(42),
        o = a(12)
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
      d.set('environment', 'dev'),
        d.set('stripeKey', 'pk_test_iLBJPOsVfX4R9gwEno6IAT1I00anXxSYv3'),
        d.set('stripeProductId', 'price_1GqkzjAdnCjPNFayzpl0BIAa'),
        d.set('clientId', '1042039161298.2009809350645')
      var p = a(45),
        f = a(20),
        h = { auth: !1, authData: {}, signup: {}, logoutRequested: !1 },
        b = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : h,
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
        b,
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
        S = a(11),
        j = a.n(S),
        A = a(17),
        O = a.n(A),
        D = a(46),
        B = a.n(D),
        z = a(87),
        P = a(88),
        _ = a(89),
        C = Object(N.h)(
          Object(s.b)(
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
              c = e.setUser,
              r = e.requestLogout,
              s = e.authData,
              i = Object(n.useState)(''),
              o = Object(k.a)(i, 2),
              u = o[0],
              E = o[1],
              d = Object({
                NODE_ENV: 'production',
                PUBLIC_URL: 'http://localhost:3000',
                REACT_APP_CLIENT_ID: '1042039161298.2009809350645',
                REACT_APP_ENV: 'dev',
                REACT_APP_STRIPE_API_KEY:
                  'pk_test_iLBJPOsVfX4R9gwEno6IAT1I00anXxSYv3',
                REACT_APP_STRIPE_SECRET_KEY:
                  'sk_test_0xz2S1R8uqoYB3GHIcyi7fCC00W2GR9xCg',
                REACT_APP_STRIPE_PRODUCT_ID: 'price_1GqkzjAdnCjPNFayzpl0BIAa',
              }).PAYMENT_FEATURE_ENABLED,
              p = s.avatarSmall
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
                          m.b,
                          {
                            to: ''.concat(
                              'http://localhost:3000',
                              '/price/pricing',
                            ),
                          },
                          l.a.createElement(z.a, null),
                          'Pricing',
                        ),
                      ),
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement(
                          m.b,
                          {
                            to: ''.concat(
                              'http://localhost:3000',
                              '/app/account/payment',
                            ),
                          },
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
                            c({}),
                            r(),
                            t.push(''.concat('http://localhost:3000', '/login'))
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
                          m.b,
                          { to: '/dashboard/default' },
                          l.a.createElement('img', {
                            className: 'blur-up lazyloaded dashboard-logo',
                            src: O.a,
                            alt: '',
                          }),
                          l.a.createElement('img', {
                            className: 'blur-up lazyloaded dashboard-logo',
                            src: O.a,
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
                    'Copyright 2020 \xa9 Lunch Poll All rights reserved.',
                  ),
                ),
              ),
            ),
          )
        },
        R = function (e) {
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
        U = a(26),
        I = a.n(U),
        L = function (e, t) {
          return (function () {
            var a = Object(w.a)(
              y.a.mark(function a(n, l) {
                var c, r, s, m, i
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
                          if (
                            ((c = j.a.get('lunch-session')),
                            console.log('authToken: ', c),
                            c)
                          ) {
                            a.next = 7
                            break
                          }
                          return a.abrupt('return', {
                            authed: !1,
                            message: 'no token to auth with',
                          })
                        case 7:
                          return (
                            (r = {
                              method: 'PUT',
                              body: JSON.stringify({ authToken: c }),
                              headers: { 'Content-Type': 'application/json' },
                            }),
                            (a.prev = 8),
                            (a.next = 11),
                            fetch(''.concat(E, '/check-auth'), r)
                          )
                        case 11:
                          if ((s = a.sent).ok) {
                            a.next = 17
                            break
                          }
                          throw (
                            (j.a.remove('lunch-session'),
                            n({ type: 'SET_AUTH', value: !1 }),
                            '/' === t.pathname
                              ? e.push(''.concat('http://localhost:3000', '/'))
                              : e.push(
                                  ''.concat('http://localhost:3000', '/login'),
                                ),
                            new Error('Failed initializeAuth'))
                          )
                        case 17:
                          return (a.next = 19), s.json()
                        case 19:
                          if ((m = a.sent).authed) {
                            a.next = 22
                            break
                          }
                          throw new Error('auth failed')
                        case 22:
                          ;(i = I()(m.token)),
                            n({
                              type: 'ADD_USER',
                              value: Object(f.a)({ token: m.token }, i),
                            }),
                            n({ type: 'SET_AUTH', value: !0 }),
                            (a.next = 31)
                          break
                        case 27:
                          return (
                            (a.prev = 27),
                            (a.t0 = a.catch(8)),
                            console.error(a.t0),
                            a.abrupt('return', { authed: !1, message: a.t0 })
                          )
                        case 31:
                        case 'end':
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[8, 27]],
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
                    console.log('myData in update hook: ', t),
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
                      c = t.multiSelectOption,
                      r = t.pagination,
                      s = this.state,
                      m = s.myData,
                      i = s.pageSize,
                      u = []
                    for (var E in m[0]) {
                      var d = this.renderEditable
                      'image' === E && (d = null),
                        'status' === E && (d = null),
                        'avtar' === E && (d = null),
                        'vendor' === E && (d = null),
                        'skill' === E && (d = null),
                        'user' === E && (d = null),
                        l.a.isValidElement(m[0][E]) &&
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
                      !0 === c
                        ? m.length &&
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
                                        var a = m
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
                          data: m,
                          columns: u,
                          defaultPageSize: i,
                          className: a,
                          showPagination: r,
                          noDataText:
                            'No data right now, head to Slack and add some with `/lunch add`',
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
                        c(e, n), c(t, l)
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
            c = function (e, t) {
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
            c = e.onDelete
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
                          onDelete: c,
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
        X = Object(s.b)(
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
                        var n, l, c, r, s
                        return y.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = a()),
                                    (l = n.authData),
                                    (e.prev = 1),
                                    (c = {
                                      method: 'POST',
                                      body: JSON.stringify({ userData: l }),
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    }),
                                    console.log('GET SPOTS???'),
                                    (e.next = 6),
                                    fetch(''.concat(E, '/spots/get'), c)
                                  )
                                case 6:
                                  if (
                                    ((r = e.sent),
                                    console.log('response: ', r),
                                    r.ok)
                                  ) {
                                    e.next = 10
                                    break
                                  }
                                  throw new Error('Failed initializeAuth')
                                case 10:
                                  return (e.next = 12), r.json()
                                case 12:
                                  ;(s = e.sent),
                                    console.log('body: ', s),
                                    t({ type: 'SET_USERS_SPOTS', value: s }),
                                    (e.next = 19)
                                  break
                                case 17:
                                  ;(e.prev = 17), (e.t0 = e.catch(1))
                                case 19:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 17]],
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
                        var l, c, r, s, m, i, o
                        return y.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    console.log('state: ', n()),
                                    (l = n()),
                                    (c = l.authData),
                                    (r = l.usersSpots),
                                    console.log('spots: ', a),
                                    console.log('usersSpots: ', r),
                                    (e.prev = 4),
                                    (s = {
                                      method: 'POST',
                                      body: JSON.stringify({
                                        userData: c,
                                        spots: a,
                                      }),
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    }),
                                    (e.next = 8),
                                    fetch(''.concat(E, '/spots/delete'), s)
                                  )
                                case 8:
                                  if (
                                    ((m = e.sent),
                                    console.log('response: ', m),
                                    m.ok)
                                  ) {
                                    e.next = 12
                                    break
                                  }
                                  throw new Error('Failed initializeAuth')
                                case 12:
                                  return (e.next = 14), m.json()
                                case 14:
                                  ;(i = e.sent),
                                    console.log('body: ', i),
                                    (o = r.filter(function (e) {
                                      return !a.includes(e.id)
                                    })),
                                    console.log('updatedList: ', o),
                                    t({ type: 'SET_USERS_SPOTS', value: o }),
                                    (e.next = 23)
                                  break
                                case 21:
                                  ;(e.prev = 21), (e.t0 = e.catch(4))
                                case 23:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[4, 21]],
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
            c = e.removeSpots,
            r = e.auth,
            s = e.authData,
            m = Object(n.useState)(!1),
            i = Object(k.a)(m, 2),
            o = i[0],
            u = i[1],
            E = Object(n.useState)([]),
            d = Object(k.a)(E, 2),
            p = d[0],
            f = d[1]
          Object(n.useEffect)(function () {
            r && Object.keys(s).length && (u(!0), a())
          }, []),
            Object(n.useEffect)(
              function () {
                if (t) {
                  u(!0)
                  var e = h(t)
                  f(e), u(!1)
                }
              },
              [t],
            )
          var h = function (e) {
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
              c(e)
            },
          })
        }),
        Q = a(49),
        K = a(22),
        Z = function (e) {
          return (function () {
            var t = Object(w.a)(
              y.a.mark(function t(a, n) {
                var l, c, r, s, m, i, o, u, d, p, f
                return y.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (l = n()),
                            (c = l.authData),
                            (r = c.stripeId),
                            (s = c.status),
                            (m = c.teamId),
                            (i = c.trialPeriodStart),
                            (o = e.id),
                            (u = void 0 === o ? '' : o),
                            (d = {
                              method: 'POST',
                              body: JSON.stringify({
                                paymentMethodId: u,
                                customerId: r,
                                status: s,
                                teamId: m,
                                trialPeriodStart: i,
                              }),
                              headers: { 'Content-Type': 'application/json' },
                            }),
                            console.log('options', d),
                            (t.prev = 4),
                            (t.next = 7),
                            fetch(
                              ''.concat(E, '/payment/create-subscription'),
                              d,
                            )
                          )
                        case 7:
                          return (
                            (p = t.sent),
                            console.log('response', p),
                            (t.next = 11),
                            p.json()
                          )
                        case 11:
                          return (
                            (f = t.sent),
                            console.log('body', f),
                            t.abrupt('return', f)
                          )
                        case 16:
                          return (
                            (t.prev = 16),
                            (t.t0 = t.catch(4)),
                            console.error(t.t0),
                            t.abrupt('return', { authed: !1, message: t.t0 })
                          )
                        case 20:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[4, 16]],
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
                var l, c, r, s, m, i, o, u, d
                return y.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (l = n()),
                            (c = l.authData),
                            (r = c.teamId),
                            (s = c.stripeId),
                            (m = e.id),
                            (i = void 0 === m ? '' : m),
                            (o = {
                              method: 'POST',
                              body: JSON.stringify({
                                customerId: s,
                                paymentMethodId: i,
                                teamId: r,
                              }),
                              headers: { 'Content-Type': 'application/json' },
                            }),
                            console.log('options', o),
                            (t.prev = 4),
                            (t.next = 7),
                            fetch(
                              ''.concat(E, '/payment/update-subscription'),
                              o,
                            )
                          )
                        case 7:
                          return (
                            (u = t.sent),
                            console.log('response', u),
                            (t.next = 11),
                            u.json()
                          )
                        case 11:
                          return (
                            (d = t.sent),
                            console.log('body', d),
                            t.abrupt('return', d)
                          )
                        case 16:
                          return (
                            (t.prev = 16),
                            (t.t0 = t.catch(4)),
                            console.error(t.t0),
                            t.abrupt('return', { authed: !1, message: t.t0 })
                          )
                        case 20:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[4, 16]],
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
                var n, l, c, r, s
                return y.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = a()),
                            (l = n.authData.stripeId),
                            (c = {
                              method: 'GET',
                              body: JSON.stringify({ customerId: l }),
                              headers: { 'Content-Type': 'application/json' },
                            }),
                            (e.prev = 2),
                            (e.next = 5),
                            fetch(''.concat(E, '/payment/get-payments'), c)
                          )
                        case 5:
                          return (
                            (r = e.sent),
                            console.log('response', r),
                            (e.next = 9),
                            r.json()
                          )
                        case 9:
                          return (
                            (s = e.sent),
                            console.log('body', s),
                            e.abrupt('return', s)
                          )
                        case 14:
                          return (
                            (e.prev = 14),
                            (e.t0 = e.catch(2)),
                            console.error(e.t0),
                            e.abrupt('return', { authed: !1, message: e.t0 })
                          )
                        case 18:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[2, 14]],
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
        ce = function (e) {
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
        re = Object(s.b)(le, ce)(function (e) {
          e.authData
          var t = e.createSub,
            a = e.editPayment,
            c = e.updateSub,
            r = Object(K.useStripe)(),
            s = Object(K.useElements)(),
            m = Object(n.useState)(!1),
            i = Object(k.a)(m, 2),
            o = (i[0], i[1]),
            u = (function () {
              var e = Object(w.a)(
                y.a.mark(function e(n) {
                  var l, m, i
                  return y.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.preventDefault(),
                              (e.prev = 1),
                              (e.next = 4),
                              r.createPaymentMethod({
                                type: 'card',
                                card: s.getElement(K.CardElement),
                              })
                            )
                          case 4:
                            if (
                              ((l = e.sent),
                              (m = l.error),
                              (i = l.paymentMethod),
                              !m)
                            ) {
                              e.next = 9
                              break
                            }
                            throw new Error('error processing card')
                          case 9:
                            a ? c(i) : t(i), m && o(!1), (e.next = 16)
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
              { type: 'submit', disabled: !r },
              'Pay',
            ),
          )
        }),
        se = Object(s.b)(le, ce)(function (e) {
          var t = e.authData,
            a = e.getPayments,
            c = Object(n.useState)(!1),
            r = Object(k.a)(c, 2),
            s = r[0],
            m = r[1]
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
            t.status !== ae || s
              ? l.a.createElement(
                  'div',
                  { className: 'container-fluid credit-card' },
                  l.a.createElement(
                    'div',
                    { className: 'row' },
                    l.a.createElement(
                      'div',
                      { className: 'col-xl-8' },
                      s &&
                        l.a.createElement(
                          'button',
                          {
                            onClick: function () {
                              m(!1)
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
                              l.a.createElement(re, { editPayment: s }),
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
                        m(!0)
                      },
                    },
                    'Edit',
                  ),
                ),
          )
        }),
        me = function () {
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
        Ee =
          (Object(N.h)(function () {
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
                              l.a.createElement('img', { src: O.a, alt: '' }),
                              l.a.createElement(
                                'h3',
                                { className: 'signup-title' },
                                'Lunch Poll',
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
                                      '1042039161298.2009809350645',
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
          function (e) {
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
          }),
        de = Object(s.b)(null, function (e) {
          return {
            addCompanyInfo: function (t) {
              return e({ type: 'COMPANY_SIGNUP_INFO', value: t })
            },
          }
        })(function (e) {
          var t = e.addCompanyInfo,
            a = Object(n.useState)(!0),
            c = Object(k.a)(a, 2),
            r = c[0],
            s = c[1],
            m = Object(n.useState)({}),
            i = Object(k.a)(m, 2),
            o = i[0],
            u = i[1],
            d = Object(n.useState)({ status: !1, to: '' }),
            p = Object(k.a)(d, 2),
            f = p[0],
            h = p[1]
          Object(n.useEffect)(
            function () {
              ;(function () {
                var e = Object(w.a)(
                  y.a.mark(function e() {
                    var a, n, l, c
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
                              ;(c = e.sent), u(c), t(c), (e.next = 16)
                              break
                            case 13:
                              ;(e.prev = 13),
                                (e.t0 = e.catch(2)),
                                console.log('err: ', e.t0)
                            case 16:
                              return (e.prev = 16), s(!1), e.finish(16)
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
          var b = (function () {
            var e = Object(w.a)(
              y.a.mark(function e(t) {
                var a, n, l
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
                          if ((n = e.sent).ok) {
                            e.next = 7
                            break
                          }
                          throw new Error('No slack Auth')
                        case 7:
                          return (e.next = 9), n.json()
                        case 9:
                          ;(l = e.sent),
                            console.log('body', l),
                            h({ status: !0, to: '/app/dashboard/default' }),
                            (e.next = 18)
                          break
                        case 14:
                          ;(e.prev = 14),
                            (e.t0 = e.catch(1)),
                            console.error(e.t0),
                            h({ status: !0, to: '/app/dashboard/default' })
                        case 18:
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
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
          return r
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
                    l.a.createElement(Ee, {
                      label: 'Yes',
                      onClick: function (e) {
                        return b(!0)
                      },
                    }),
                    l.a.createElement(Ee, {
                      label: 'No',
                      onClick: function (e) {
                        return b(!1)
                      },
                    }),
                  ),
                ),
              )
        }),
        pe = function () {
          return l.a.createElement(
            'a',
            {
              href: 'https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email&client_id='.concat(
                '1042039161298.2009809350645',
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
        fe =
          (Object(N.h)(function () {
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
                                src: O.a,
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
                                l.a.createElement(pe, null),
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
          a(51)),
        he = a.n(fe),
        be = function (e) {
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
                        '1042039161298.2009809350645',
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
                      'div',
                      { className: 'slack-signup-wrapper' },
                      l.a.createElement(
                        'a',
                        {
                          href: 'https://slack.com/oauth/v2/authorize?client_id='.concat(
                            '1042039161298.2009809350645',
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
                      l.a.createElement('img', { src: he.a }),
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        ge =
          (Object(N.h)(function () {
            return l.a.createElement(
              'div',
              null,
              l.a.createElement(
                'div',
                { className: 'page-wrapper' },
                l.a.createElement(be, null),
              ),
            )
          }),
          Object(N.h)(
            Object(s.b)(
              function (e) {
                var t = e.auth,
                  a = void 0 !== t && t,
                  n = e.authData,
                  l = void 0 === n ? {} : n,
                  c = e.logoutRequested
                return {
                  auth: a,
                  authData: l,
                  logoutRequested: void 0 !== c && c,
                }
              },
              function (e) {
                return {
                  setAuth: function (t) {
                    return e({ type: 'SET_AUTH', value: t })
                  },
                  initializeAuth: function (t, a) {
                    return e(L(t, a))
                  },
                }
              },
            )(function (e) {
              var t = e.history,
                a = e.setAuth,
                c = e.auth,
                r = e.authData,
                s = e.initializeAuth,
                m = e.logoutRequested,
                i = Object(N.g)(),
                o = Object(n.useState)(!1),
                u = Object(k.a)(o, 2),
                E = u[0],
                d = u[1],
                p = Object(n.useState)(!0),
                f = Object(k.a)(p, 2),
                h = f[0],
                b = f[1]
              Object(n.useEffect)(function () {
                g()
              }, []),
                Object(n.useEffect)(
                  function () {
                    c && Object.keys(r).length
                      ? v()
                      : (console.log('checking auth at logout'), m && d(!1))
                  },
                  [c, r],
                )
              var g = (function () {
                  var e = Object(w.a)(
                    y.a.mark(function e() {
                      var n
                      return y.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (console.log('checkingAuth at login!'),
                                b(!0),
                                !c || !Object.keys(r).length)
                              ) {
                                e.next = 5
                                break
                              }
                              return d(!0), e.abrupt('return', b(!1))
                            case 5:
                              if (
                                ((n = j.a.get('lunch-session')),
                                console.log('existingCookie', n),
                                !n)
                              ) {
                                e.next = 9
                                break
                              }
                              return e.abrupt('return', s(t, i))
                            case 9:
                              a(!1), d(!1), b(!1)
                            case 12:
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
                  j.a.set('lunch-session', r.token, { expires: 7 }),
                    d(!0),
                    b(!1)
                }
              return (
                console.log('checkingAuth: ', h),
                console.log('loggedIn: ', E),
                l.a.createElement(
                  l.a.Fragment,
                  null,
                  h
                    ? l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(Y, { show: !0 }),
                      )
                    : l.a.createElement(
                        l.a.Fragment,
                        null,
                        l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            R,
                            null,
                            l.a.createElement(
                              N.d,
                              null,
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat(
                                  'http://localhost:3000',
                                  '/app',
                                ),
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat(
                                      'http://localhost:3000',
                                      '/app/dashboard/default',
                                    ),
                                  })
                                },
                              }),
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat(
                                  'http://localhost:3000',
                                  '/signup/welcome',
                                ),
                                component: de,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat(
                                  'http://localhost:3000',
                                  '/app/dashboard/default',
                                ),
                                component: X,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat(
                                  'http://localhost:3000',
                                  '/app/table/datatable',
                                ),
                                component: q,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat(
                                  'http://localhost:3000',
                                  '/app/users/userEdit',
                                ),
                                component: ue,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat(
                                  'http://localhost:3000',
                                  '/app/account/payment',
                                ),
                                component: se,
                              }),
                              l.a.createElement(N.b, {
                                path: ''.concat(
                                  'http://localhost:3000',
                                  '/price/pricing',
                                ),
                                component: me,
                              }),
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat(
                                  'http://localhost:3000',
                                  '/login',
                                ),
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat(
                                      'http://localhost:3000',
                                      '/app/dashboard/default',
                                    ),
                                  })
                                },
                              }),
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat(
                                  'http://localhost:3000',
                                  '/signup',
                                ),
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat(
                                      'http://localhost:3000',
                                      '/app/dashboard/default',
                                    ),
                                  })
                                },
                              }),
                              l.a.createElement(N.b, {
                                exact: !0,
                                path: ''.concat('http://localhost:3000', '/'),
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat(
                                      'http://localhost:3000',
                                      '/app/dashboard/default',
                                    ),
                                  })
                                },
                              }),
                              l.a.createElement(N.b, {
                                path: '*',
                                render: function () {
                                  return l.a.createElement(N.a, {
                                    to: ''.concat(
                                      'http://localhost:3000',
                                      '/app/dashboard/default',
                                    ),
                                  })
                                },
                              }),
                            ),
                          ),
                        ),
                      ),
                )
              )
            }),
          )),
        ve = function () {
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
                            l.a.createElement('img', { src: O.a, alt: '' }),
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
        Ne = function () {
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
                            l.a.createElement('img', { src: O.a, alt: '' }),
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
        xe = a(52),
        ye = a.n(xe),
        we = Object(s.b)(null, function (e) {
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
            c = Object(n.useState)(!0),
            r = Object(k.a)(c, 2),
            s = r[0],
            m = r[1],
            i = Object(n.useState)({ status: !1, to: '' }),
            u = Object(k.a)(i, 2),
            d = u[0],
            p = u[1],
            h = Object(N.g)()
          return (
            Object(n.useEffect)(
              function () {
                var e = (function () {
                    var e = Object(w.a)(
                      y.a.mark(function e(n) {
                        var l, c, r, s, i, u, d, b
                        return y.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((l = n.code),
                                    (c = n.error),
                                    (r = n.state),
                                    console.log('location!!!!!!!: ', h),
                                    c && console.log('error!: ', c),
                                    l || r)
                                  ) {
                                    e.next = 5
                                    break
                                  }
                                  return e.abrupt(
                                    'return',
                                    p({ status: !0, to: '/signup/new' }),
                                  )
                                case 5:
                                  return (
                                    (s = {
                                      method: 'POST',
                                      body: JSON.stringify({
                                        code: l,
                                        state: r,
                                      }),
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                    }),
                                    (e.prev = 6),
                                    (e.next = 9),
                                    fetch(''.concat(E, '/oauth'), s)
                                  )
                                case 9:
                                  if ((i = e.sent).ok) {
                                    e.next = 12
                                    break
                                  }
                                  throw new Error('No slack Auth')
                                case 12:
                                  return (e.next = 14), i.json()
                                case 14:
                                  if (((u = e.sent), 403 !== i.status)) {
                                    e.next = 17
                                    break
                                  }
                                  throw new Error('Stripe Error')
                                case 17:
                                  if (
                                    'login.signup' !== r &&
                                    ('login' !== r ||
                                      'authed new user' !== u.message)
                                  ) {
                                    e.next = 26
                                    break
                                  }
                                  j.a.set('lunch-session', u.token, {
                                    expires: 7,
                                  }),
                                    (d = I()(u.token)),
                                    t(Object(f.a)({ token: u.token }, d)),
                                    a(!0),
                                    m(!1),
                                    p({ status: !0, to: '/signup/welcome' }),
                                    (e.next = 46)
                                  break
                                case 26:
                                  if (
                                    'authed existing user' !== u.message ||
                                    !u.token
                                  ) {
                                    e.next = 36
                                    break
                                  }
                                  j.a.set('lunch-session', u.token, {
                                    expires: 7,
                                  }),
                                    (b = I()(u.token)),
                                    a(!0),
                                    t(Object(f.a)({ token: u.token }, b)),
                                    m(!1),
                                    p({
                                      status: !0,
                                      to: '/app/dashboard/default',
                                    }),
                                    o.b.success(
                                      'Already a signed up, redirecting you to the dashboard',
                                    ),
                                    (e.next = 46)
                                  break
                                case 36:
                                  if ('signup needed' !== u.message) {
                                    e.next = 40
                                    break
                                  }
                                  ;(window.location = 'https://slack.com/oauth/v2/authorize?client_id='.concat(
                                    '1042039161298.2009809350645',
                                    '&scope=commands,app_mentions:read,channels:history,channels:manage,chat:write,chat:write.public,im:history,im:write,incoming-webhook,mpim:write,users:read&user_scope=chat:write,identify,im:write,channels:write,groups:write,mpim:write&state=signup',
                                  )),
                                    (e.next = 46)
                                  break
                                case 40:
                                  if (
                                    'existing user' !== u.message ||
                                    !u.token
                                  ) {
                                    e.next = 45
                                    break
                                  }
                                  console.log('need to finish sign up'),
                                    (window.location = 'https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email,&client_id='.concat(
                                      '1042039161298.2009809350645',
                                      '&state=login.signup',
                                    )),
                                    (e.next = 46)
                                  break
                                case 45:
                                  throw new Error('error ahoy')
                                case 46:
                                  e.next = 54
                                  break
                                case 48:
                                  ;(e.prev = 48),
                                    (e.t0 = e.catch(6)),
                                    o.b.error('Something went wrong'),
                                    m(!1),
                                    p({ status: !0, to: '/signup/new' }),
                                    console.error(e.t0)
                                case 54:
                                case 'end':
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[6, 48]],
                        )
                      }),
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })(),
                  n = window.location.search.substring(1),
                  l = ye.a.parse(n)
                if ((console.log('parsed in slack auth', l), l.error))
                  return m(!1), p({ status: !0, to: '/signup/new' })
                Object.keys(l).length
                  ? e(l)
                  : p({ status: !0, to: '/signup/new' })
              },
              [t, a],
            ),
            l.a.createElement(
              l.a.Fragment,
              null,
              s
                ? l.a.createElement(Y, { show: !0 })
                : d.status && l.a.createElement(N.a, { to: d.to }),
            )
          )
        }),
        ke = function () {
          return l.a.createElement(
            N.d,
            null,
            l.a.createElement(N.b, {
              exact: !0,
              path: ''.concat('http://localhost:3000', '/'),
              component: ge,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('http://localhost:3000', '/app'),
              component: ge,
            }),
            l.a.createElement(N.b, {
              exact: !0,
              path: ''.concat('http://localhost:3000', '/slack-auth'),
              component: we,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('http://localhost:3000', '/signup'),
              component: ge,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('http://localhost:3000', '/login'),
              component: ge,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('http://localhost:3000', '/pages/forgetPwd'),
              component: ve,
            }),
            l.a.createElement(N.b, {
              path: ''.concat('http://localhost:3000', '/pages/resetPwd'),
              component: Ne,
            }),
            l.a.createElement(N.b, { component: ge }),
          )
        },
        Se = function () {
          return l.a.createElement(
            'div',
            { className: 'App' },
            l.a.createElement(
              s.a,
              { store: v },
              l.a.createElement(
                m.a,
                { basename: '/' },
                l.a.createElement(
                  i.a,
                  null,
                  l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(ke, null),
                    l.a.createElement(o.a, null),
                  ),
                ),
              ),
            ),
          )
        }
      r.a.render(l.a.createElement(Se, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister()
          })
    },
  },
  [[57, 1, 2]],
])
//# sourceMappingURL=main.55c4ae9b.chunk.js.map
