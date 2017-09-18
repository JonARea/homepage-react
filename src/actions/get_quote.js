import $ from 'jquery'


export const GET_QUOTE = 'GET_QUOTE'

export function get_quote () {

  let request = $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    })

    return {
      type: GET_QUOTE,
      payload: request
    }
}
