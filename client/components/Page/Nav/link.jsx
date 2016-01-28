Link = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        className: React.PropTypes.string,
        icon: React.PropTypes.string
    },
    render() {
        var url = this.props.url;
        var name = this.props.name;
        var className = this.props.className;
        var icon = this.props.icon;

        if(name == 'ME') {
            url = FlowRouter.path('/me/' + Meteor.userId());
        }

        if(icon) {
            icon = <i className="material-icons">{icon}</i>;
        }

        return <a className={className} href={url}>{icon}{name}</a>;
    }
});