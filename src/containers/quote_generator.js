import React, { Component } from 'react'
import { get_quote } from '../actions/get_quote'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import tweet from '../images/tweet.png'
import '../styles/quote_generator.css'

class QuoteGenerator extends Component {
  render() {

    const QUOTE = this.props.quote.quoteText
    const AUTHOR = this.props.quote.quoteAuthor
    return (
      <div className='quote'>
        <button className='btn'
                onClick={() => this.props.get_quote() } >
            New Quote
        </button>
        <br/>
        {QUOTE || 'Nothing like a random quote to inspire'}
        <p className='author'>
        {AUTHOR}
        </p>
        <a className="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=Hello%20world">
            Tweet this
        </a>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      quote: state.quote
    }
  }

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ get_quote }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(QuoteGenerator);
