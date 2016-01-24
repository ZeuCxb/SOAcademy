Link = React.createClass({
    propTypes: {
        url: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        className: React.PropTypes.string
    },
    render() {
        var url = this.props.url;
        var name = this.props.name;
        var className = this.props.className;

        return <a className={className} href={url}>{name}</a>;
    }
});