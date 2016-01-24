Logon = React.createClass({
    mixins: [Validation],
    componentDidMount() {
        document.title = 'CSC - Log On'
    },
    submitForm(event) {
        event.preventDefault();

        // TextFields
        var email = this.refs.email;
        var name = this.refs.name;
        var nick = this.refs.nick;
        var pass = this.refs.pass;
        var passConf = this.refs.passConf;

        // Validation
        if(this.isEmpty(email) && this.isEmpty(nick) && this.isEmpty(name) && this.isEmpty(pass) && this.isEmpty(passConf)) {
            if(pass.state.value == passConf.state.value) {
                Accounts.createUser({
                    email: email.state.value,
                    name: name.state.value,
                    nick: nick.state.value,
                    password: pass.state.value
                }, (error) => {
                    if(error) {
                        if(error.reason == 'Email already exists.') {
                            email.setState({value: ''});

                            this.setError(email);

                            return false;
                        }

                        console.log(error.reason);
                    } else {
                        FlowRouter.go('/');
                    }
                });
            } else {
                passConf.setState({value: ''});

                this.setError(passConf);

                return false;
            }
        } else {
            return false;
        }
    },
    render() {
        return(
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--1-col"></div>
                <form onSubmit={this.submitForm} className="mdl-cell--10-col">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--6-col">
                            <TextField type="email" id="email" ref="email" placeholder="Email" />
                        </div>

                        <div className="mdl-cell mdl-cell--6-col">
                            <TextField type="text" id="nick" ref="nick" placeholder="Nick" />
                        </div>
                    </div>

                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col">
                            <TextField type="text" id="name" ref="name" placeholder="Name" />
                        </div>
                    </div>

                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--6-col">
                            <TextField type="password" id="pass" ref="pass" placeholder="Password" />
                        </div>

                        <div className="mdl-cell mdl-cell--6-col">
                            <TextField type="password" id="passConf" ref="passConf" placeholder="Password (confirmation)" />
                        </div>
                    </div>

                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col mdl-typography--text-right">
                            <Submit value="Log On"/>
                        </div>
                    </div>
                </form>
                <div className="mdl-cell mdl-cell--1-col"></div>
            </div>
        );
    }
});