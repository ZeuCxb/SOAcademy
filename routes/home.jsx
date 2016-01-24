FlowRouter.route('/', {
    name: 'home',
    action() {
        ReactLayout.render(Index, {
            content: <Home />
        });
    }
});