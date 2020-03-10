const action = {
    onEmailChange(e) {
        this.setState({'email': e.target.value});
    },

    onPasswordChange(e) {
        this.setState({'password': e.target.value});
    },

    async login(event) {
        try {
            event.preventDefault()

            if(!this.state.email) window.$message.error('Email is required!');
            if(!this.state.password) window.$message.error('Password is required!');
            
            const result = await window.$http.postWithoutHeaders('login', {
                email: this.state.email,
                password: this.state.password,
            });

            if(!result) return window.$utility.showErrorMessage('Some thing went wrong!')
            
            // save user in local storage or redux

            this.props.login(result)
            
            this.props.history.push('/');
            window.$utility.showSucessMessage('Successfully loggedIn');
        } catch (error) {
            console.log(error)
            window.$utility.showErrorMessage(error.message);
        }
    }
}

export default action;