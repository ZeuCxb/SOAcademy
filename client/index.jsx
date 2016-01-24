Index = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        };
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