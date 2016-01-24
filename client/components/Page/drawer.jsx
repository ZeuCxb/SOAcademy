Drawer = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        links: React.PropTypes.array.isRequired
    },
    copy(obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    deleteStyles(links) {
        var drawerLinks = this.copy(links);

        drawerLinks.map(function(link) {
            delete link.style;
            return link;
        });

        return drawerLinks;
    },
    render() {
        var title = this.props.title;
        var links = this.props.links;

        var drawerLinks = this.deleteStyles(links);

        return(
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title mdl-color-text--pink">{title}</span>
                <Nav links={drawerLinks} />
            </div>
        );
    }
});