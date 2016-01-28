FlowRouter.route('/', {
    name: 'home',
    action() {
        if(!Meteor.user()) {
            ReactLayout.render(Index, {
                content: <Home />
            });
        } else {
            FlowRouter.redirect('/timeline');
        }
    }
});