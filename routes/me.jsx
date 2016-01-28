FlowRouter.route('/me/:_id', {
    name: 'me',
    action(params) {
        if(Meteor.user()) {
            var _id = params._id;

            ReactLayout.render(Index, {
                content: <Me _id={_id} />
            });
        } else {
            FlowRouter.redirect('/');
        }
    }
});