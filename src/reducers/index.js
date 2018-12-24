import { combineReducers } from 'redux';
import users from './users'
import login from './login'
import signup from './signup'
import currentUser from './currentUser'



export default combineReducers({
  users,
  login,
  signup,
  currentUser,
 
})