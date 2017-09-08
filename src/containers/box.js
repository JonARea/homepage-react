import React, { Component } from 'react'
import '../styles/box.css'
import { BOX_SELECTED, selectBox } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

  class Box extends Component {
    state = {
      clicked: false
    }

    render() {
      const title = this.props.title

      return (
        <li>
          <div className={
            this.state.clicked ? 'box clicked-box' : 'box'
          }
                onClick={() => this.props.selectBox(this.props.pageList[title])}
                onMouseDown={()=> this.setState({clicked: true})}
                onMouseUp={()=> this.setState({clicked: false})}>
            <h2>{title}</h2>
          </div>
        </li>
      )
    }
  }


function mapStateToProps(state) {

    return {
      pageList: state.contents
    }
  }
function mapDispatchToProps(dispatch) {

  return bindActionCreators({ selectBox: selectBox }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Box);
