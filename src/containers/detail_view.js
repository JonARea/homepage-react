import React, { Component } from 'react'
import { connect } from 'react-redux'
import { homepage } from '../components/home'
import '../styles/content-detail.css'

class ContentDetail extends Component {

  render() {

    return (
      <div className='content-detail'>
        {this.props.activePage || this.props.contents.homepage}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    activePage: state.showDetail,
    contents: state.contents
  }
}

export default connect(mapStateToProps)(ContentDetail)
