PostList = React.createClass({
    propTypes: {
        _id: React.PropTypes.string.isRequired
    },
    mixins: [ReactMeteorData],
    getMeteorData() {
        var _id = this.props._id;
        var posts = false;

        var handle = Meteor.subscribe('post', _id);

        if(handle.ready()) {
            posts = PostDB.getMePosts(_id, 0);
        }

        return {
            posts: posts
        }
    },
    render() {
        var posts = this.data.posts;

        if(posts.length > 0) {
            var view = <div>
                {posts.map(function(post) {
                    return <Post key={post._id} data={post} />;
                })}
            </div>;
        } else {
            var view = <div className="mdl-grid">
                <div className="no-post mdl-cell mdl-cell--12-col mdl-typography--text-center mdl-color-text--red">
                    NO POST YET!
                </div>
            </div>;
        }

        return(
            <div>
                {view}
            </div>
        );
    }
});