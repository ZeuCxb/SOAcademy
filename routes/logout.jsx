FlowRouter.route('/logout', {
    name: 'logout',
    action() {
        if(Meteor.user()) {
            Meteor.logout();
            FlowRouter.redirect('/');
        } else {
            FlowRouter.redirect('/');
        }
    }
});