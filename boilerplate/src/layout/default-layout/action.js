const action = {
    logout(event) {
            event.preventDefault()

            console.log(this.props, 'props')
            
            this.props.logout()
            window.$utility.showSucessMessage('Successfully logged out!');
            this.props.history.history.push('/login');
    }
}

export default action;