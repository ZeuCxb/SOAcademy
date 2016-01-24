Submit = React.createClass({
    propTypes: {
        style: React.PropTypes.string,
        value: React.PropTypes.any.isRequired
    },
    render() {
        var style = this.props.style;
        var value = this.props.value;

        if(!style) {
            style = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
        }

        return(
            <button type="submit" className={style}>{value}</button>
        );
    }
});