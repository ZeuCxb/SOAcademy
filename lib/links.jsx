LINKS = [
    {'_id': 1, 'name': 'HOME', 'icon': 'home', 'url': FlowRouter.path('/'), ifLogged: false},
    {'_id': 2, 'name': 'ABOUT', 'icon': 'description', 'url': FlowRouter.path('/'), ifLogged: false},
    {'_id': 3, 'name': 'DEV', 'icon': 'code', 'url': FlowRouter.path('/'), ifLogged: false},
    {'_id': 4, 'name': 'LOG ON', 'icon': 'account_box', 'url': FlowRouter.path('/logon'), ifLogged: false},
    {'_id': 5, 'name': 'LOG IN', 'url': FlowRouter.path('/login'), 'style': 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--pink', ifLogged: false},

    {'_id': 6, 'name': 'ME', 'icon': 'account_box', 'url': '', ifLogged: true},
    {'_id': 7, 'name': 'NEWS', 'icon': 'notifications', 'url': FlowRouter.path('/news'), ifLogged: true},
    {'_id': 8, 'name': 'TIMELINE', 'icon': 'receipt', 'url': FlowRouter.path('/timeline'), ifLogged: true},
    {'_id': 9, 'name': 'LOG OUT', 'icon': 'exit_to_app', 'url': FlowRouter.path('/logout'), ifLogged: true},
];

FOOTER_LINKS = [
    {'_id': 1, 'name': 'Help', 'url': FlowRouter.path('/')},
    {'_id': 2, 'name': 'Privacy & Terms', 'url': FlowRouter.path('/')}
];