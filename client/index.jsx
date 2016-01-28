Index = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        };
    },
    componentDidMount() {
        var currentUser = this.data.currentUser;

        if(currentUser) {
            Session.set('currentUser', currentUser);
        }
    },
    render() {
        return(
            <div>
                <Page>
                    {this.props.content}
                </Page>
            </div>
        );
    }
});