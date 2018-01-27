import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/content-detail.css'
import Simon from './simon'

class ContentDetail extends Component {

  render() {
    return (
      <div className={this.props.fixed ? 'content-detail fixed' : 'content-detail simon'} >
        {this.props.project &&
        <div className="container-simon">
          <h2>Take a break to relive your childhood.</h2>
          <h3>Turn up the volume and click the on-switch to start. How long can you follow the pattern?</h3>
          <h3>Javascript, HTML and CSS.
          </h3>
          <Simon />
        </div>
        ||
        this.props.activePage
        ||
        this.props.contents.projects}
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
