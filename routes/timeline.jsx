FlowRouter.route('/timeline', {
    name: 'timeline',
    action() {
        if(Meteor.user()) {
            ReactLayout.render(Index, {
                content: <Timeline />
            });
        } else {
            FlowRouter.redirect('/');
        }
    }
});