import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/content-detail.css'

class ContentDetail extends Component {

  render() {
    return (
      <div className='content-detail' style={{backgroundImage: `url(${this.props.backgroundImage})`}} >
        {this.props.activePage || this.props.contents.projects}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activePage: state.showDetail,
    contents: state.contents,
    backgroundImage: state.changeBackground
  }
}

export default connect(mapStateToProps)(ContentDetail)
