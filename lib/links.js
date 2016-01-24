LINKS = [
    {'_id': 1, 'name': 'HOME', 'url': FlowRouter.path('/')},
    {'_id': 2, 'name': 'ABOUT', 'url': FlowRouter.path('/')},
    {'_id': 3, 'name': 'DEV', 'url': FlowRouter.path('/')},
    {'_id': 4, 'name': 'LOG ON', 'url': FlowRouter.path('/logon'), ifLogged: false},
    {'_id': 5, 'name': 'LOG OUT', 'url': FlowRouter.path('/logout'), ifLogged: true},
    {'_id': 6, 'name': 'LOG IN', 'url': FlowRouter.path('/login'), 'style': 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--pink', ifLogged: false}
];

FOOTER_LINKS = [
    {'_id': 1, 'name': 'Help', 'url': FlowRouter.path('/')},
    {'_id': 2, 'name': 'Privacy & Terms', 'url': FlowRouter.path('/')}
];