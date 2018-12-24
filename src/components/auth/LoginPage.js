import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Login</h1>

				<LoginForm onSubmit={this.handleSubmit} />
				<p style={{color:"red"}}>{this.props.error}</p>
			</div>
		)
	}
}

const mapStateToProps =  (state) => ({
		currentUser: state.currentUser,
		error: state.login.error
	
})

export default connect(mapStateToProps, {login})(LoginPage)