import React, { Component } from 'react'

export default class Button extends Component {
 constructor(props) {
   super(props)
   this.id = `${this.props.name}-button`
 }

 render() {
   return (
     <div className='button' id={this.id} onMouseDown={this.props.clickButton}>
     </div>
   )
 }
}
