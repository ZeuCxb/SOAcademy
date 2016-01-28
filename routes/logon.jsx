FlowRouter.route('/logon', {
    name: 'logon',
    subscriptions(params, queryParams) {
        this.register('myPost', Meteor.subscribe('createMe', params.postId));
    },
    action() {
        ReactLayout.render(Index, {
            content: <Logon />
        });
    }
});