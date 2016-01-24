FlowRouter.route('/logon', {
    name: 'logon',
    action() {
        ReactLayout.render(Index, {
            content: <Logon />
        });
    }
});