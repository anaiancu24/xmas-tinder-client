import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {userId} from '../jwt'
import {getTrees} from '../actions/trees'

class Trees extends PureComponent {

  componentWillMount() {
  this.props.getTrees()
  }




  render() {
    
    return (
      <div>
        
              <h2>Find your Xmas Tree Match</h2>
            
         {this.props.trees && Object.values(this.props.trees).map(tree=>(
          <div key={tree.id}>
        <p key={tree.id}><b>{tree.name}:</b></p>
        <img src={tree.pictureURL} alt="sdf"/>
        </div>
        ))} 
        
      </div>
    )
  }
}

const mapStateToProps =  (state) =>  ({
    trees:state.trees,
    currentUser: state.currentUser,
    user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
  
})

export default connect(mapStateToProps, {getTrees})(Trees)
