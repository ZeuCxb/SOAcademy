Footer = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        links: React.PropTypes.array.isRequired
    },
    render() {
        var title = this.props.title;
        var links = this.props.links;

        return(
            <footer className="mdl-mini-footer">
                <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">{title}</div>
                    <ul className="mdl-mini-footer__link-list">
                        {links.map(function(link){
                            return(
                                <li key={link._id}>
                                    <Link name={link.name} url={link.url} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </footer>
        );
    }
});