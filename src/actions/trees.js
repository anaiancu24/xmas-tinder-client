import * as request from 'superagent'
import {baseUrl} from '../constants'


export const UPDATE_TREES = 'UPDATE_TREES'


const updateTrees = trees => ({
  type: UPDATE_TREES,
  payload: trees
})


export const getTrees = () => (dispatch) => {

  request
    .get(`${baseUrl}/trees`)
    .then(result => dispatch(updateTrees(result.body)))
    .catch(err => console.error(err))
}