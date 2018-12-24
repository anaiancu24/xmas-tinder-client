import React, {PureComponent} from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default class SignupForm extends PureComponent {
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
      <div className="signup-form">
  			<form onSubmit={this.handleSubmit}>
				<div>
  				<label>
            Email 
            <Input type="email" name="email" value={this.state.email || ''} onChange={ this.handleChange } />
          </label>
					</div>
					<div>

  				<label>
            First name 
  					<Input type="text" name="firstName" value={this.state.firstName || ''} onChange={ this.handleChange } />
  				</label>
					</div>
					<div>

  				<label>
            Last name  
  					<Input type="text" name="lastName" value={this.state.lastName || ''} onChange={ this.handleChange } />
  				</label>
					</div>
					<div>

  				<label>
            Password 
  					<Input type="password" name="password" value={this.state.password || ''} onChange={ this.handleChange } />
  				</label>
					</div>
					<div>

  				<label>
            Confirm password 
  					<Input type="password" name="confirmPassword" value={this.state.confirmPassword || ''} onChange={ this.handleChange } />
  				</label>
					</div>

  				{
  					this.state.password &&
  					this.state.confirmPassword &&
  					this.state.password !== this.state.confirmPassword &&
  					<p style={{color:'red'}}>The passwords do not match!</p>
  				}
<div>
  				<Button type="submit">Sign up</Button>
					</div>
  			</form>
      </div>
		)
	}
}