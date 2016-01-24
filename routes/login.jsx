FlowRouter.route('/login', {
    name: 'login',
    action() {
        ReactLayout.render(Index, {
            content: <Login />
        });
    }
});