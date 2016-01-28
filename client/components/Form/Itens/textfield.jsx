TextField = React.createClass({
    propTypes: {
        type: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {value: '', error: false};
    },
    changeValue(event) {
        this.setState({value: event.target.value});
    },
    render() {
        var type = this.props.type;
        var id = this.props.id;
        var placeholder = this.props.placeholder;

        var error = this.state.error;
        var value = this.state.value;

        var className = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield';

        if(error) {
            className += ' is-invalid';
        }

        return(
            <div className={className}>
                <input className="mdl-textfield__input" type={type} id={id} value={value} onChange={this.changeValue} />
                <label className="mdl-textfield__label" htmlFor={id}>{placeholder}</label>
            </div>
        );
    }
});