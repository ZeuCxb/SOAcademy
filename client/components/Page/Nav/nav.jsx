Nav = React.createClass({
    propTypes: {
        links: React.PropTypes.array.isRequired
    },
    render() {
        var links = this.props.links;

        return (
            <nav className="mdl-navigation">
                {links.map(function(link){
                    var className='mdl-navigation__link';

                    if(link.style) {
                        className = link.style;
                    }

                    if(link.ifLogged) {
                        if(!Meteor.user()) {
                            className += ' hidden';
                        }
                    } else if(link.ifLogged === false) {
                        if(Meteor.user()) {
                            className += ' hidden';
                        }
                    }

                    return <Link key={link._id} name={link.name} url={link.url} className={className} icon={link.icon} />
                })}
            </nav>
        );
    }
});