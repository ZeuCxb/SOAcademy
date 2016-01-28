Me = React.createClass({
    propTypes: {
        _id: React.PropTypes.string.isRequired
    },
    mixins: [ReactMeteorData],
    getMeteorData() {
        var _id = this.props._id;
        var user = false;

        var handle = Meteor.subscribe('me', _id);

        if(handle.ready()) {
            var user = MeDB.getMe(_id);
        }

        return {
            user: user
        }
    },
    render() {
        var user = this.data.user;

        if(user) {
            var view = <div>
                <Perfil nick={user.nick} about={user.about} _id={user._id} background={user.background} />
                <PostList _id={user._id} />
            </div>;
        } else {
            var view = <Load />;
        }

        return(
            <div>
                {view}
            </div>
        );
    }
});