import React, {PureComponent} from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Email</label>
					<Input type="email" name="email" id="email" value={this.state.email || ''} onChange={ this.handleChange } />
				</div>

				<div>
					<label>Password</label>
					<Input type="password" name="password" id="password" value={this.state.password || ''} onChange={ this.handleChange } />
				</div>
				

				<Button type="submit">Login</Button>
			
			</form>
		)
	}
}