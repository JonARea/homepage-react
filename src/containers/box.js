import React, { Component } from 'react'
import '../styles/box.css'
import { selectBox } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

  class Box extends Component {
    state = {
      clicked: false
    }

    render() {
      const title = this.props.title
      const id = this.props.id

      return (
        <li>
          <div id={id} className={
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
