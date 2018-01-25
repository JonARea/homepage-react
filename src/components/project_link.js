import React, { Component } from 'react'
import '../styles/project_links.css'
import { selectBox } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import QuoteGenerator from '../containers/quote_generator'
import Weather from '../containers/weather'
import Calculator from './calculator'
import Simon from '../containers/simon'


  class ProjectLink extends Component {

    render() {
      return (
        <li className='link project'
                onClick={() => this.props.selectBox(this.switchProjects())}>
            {this.props.title}
        </li>
      )
    }

    switchProjects() {
      switch (this.props.title) {
        case 'Quote_generator':
          return <QuoteGenerator />
        case 'Weather':
          return <Weather />
        case 'Calculator':
          return <Calculator />
        case 'Simon':
          return <Simon />
        default:
          return null
      }
    }
  }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBox }, dispatch)
}

export default connect(null, mapDispatchToProps)(ProjectLink);
