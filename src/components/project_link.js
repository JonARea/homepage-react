import React, { Component } from 'react'
import '../styles/project_links.css'
import { BOX_SELECTED, selectBox } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import QuoteGenerator from '../containers/quote_generator'

  class ProjectLink extends Component {

    state = {
      title: this.props.title
    }


    render() {
      return (
        <li className='link'
                onClick={() => this.props.selectBox(this.projectApp())}>
            <p>{this.state.title}</p>

        </li>
      )
    }

    projectApp() {
      switch (this.state.title) {
        case 'quote_generator':
          return <QuoteGenerator/>
        default: null

      }
    }

  }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBox }, dispatch)
}

export default connect(null, mapDispatchToProps)(ProjectLink);
