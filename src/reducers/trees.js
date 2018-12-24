import {UPDATE_TREES } from '../actions/trees'
import {USER_LOGOUT} from '../actions/users'

export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null
    
   

    case UPDATE_TREES:
      return payload.reduce((trees, tree) => {
        trees[tree.id] = tree
        return trees
      }, {})

    default:
      return state
  }
}