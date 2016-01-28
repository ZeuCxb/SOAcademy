FlowRouter.route('/news', {
    name: 'news',
    action() {
        if(Meteor.user()) {
            ReactLayout.render(Index, {
                content: <News />
            });
        } else {
            FlowRouter.redirect('/');
        }
    }
});