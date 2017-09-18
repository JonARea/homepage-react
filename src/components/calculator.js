import React from 'react'
import math from 'mathjs'
import '../styles/calculator.css'



function printToScreen(newValue) {
  valueToPrint += newValue
  document.getElementById('screen').innerHTML = valueToPrint
}

let valueToPrint = ''



const Calculator = () => {
  return (
    <div className='calculator container-fluid'>
      <div id='screen'>

      </div>
      <div className='rightside' id='brand-bar'>
        Jexas Instruments
      </div>
      <div id='operation-row'>
        <div onClick={event => printToScreen(event.target.innerHTML)}>
          +
        </div>
        <div onClick={event => printToScreen(event.target.innerHTML)}>
          -
        </div>
        <div onClick={event => printToScreen(event.target.innerHTML)}>
          *
        </div>
        <div onClick={event => printToScreen(event.target.innerHTML)} className='rightside'>
          /
        </div>
      </div>
      <div id='keypad'>
        <div className='key' onClick={event => printToScreen(event.target.innerHTML)}>
          1
        </div>
        <div className='key' onClick={event => printToScreen(event.target.innerHTML)}>
          2
        </div>
        <div className='key rightside' onClick={event => printToScreen(event.target.innerHTML)}>
          3
        </div>
        <div className='key' onClick={event => printToScreen(event.target.innerHTML)}>
          4
        </div>
        <div className='key' onClick={event => printToScreen(event.target.innerHTML)}>
          5
        </div>
        <div className='key rightside' onClick={event => printToScreen(event.target.innerHTML)}>
          6
        </div>
        <div className='key' onClick={event => printToScreen(event.target.innerHTML)}>
          7
        </div>
        <div className='key' onClick={event => printToScreen(event.target.innerHTML)}>
          8
        </div>
        <div className='key rightside' onClick={event => printToScreen(event.target.innerHTML)}>
          9
        </div>
        <div className='key bottomrow' onClick={()=> {
          document.getElementById('screen').innerHTML = ''
          valueToPrint = ''
        }}>
          Clear
        </div>
        <div className='key bottomrow' onClick={event => printToScreen(event.target.innerHTML)}>
          0
        </div>
        <div className='key rightside bottomrow' id='Enter' onClick={() => {
          valueToPrint === '' || valueToPrint.endsWith('+') || valueToPrint.endsWith('-') || valueToPrint.endsWith('/') || valueToPrint.endsWith('*') ?

          document.getElementById('screen').innerHTML = '' :

          document.getElementById('screen').innerHTML = math.eval(document.getElementById('screen').innerHTML)
          valueToPrint = ''
        }}>
          Enter
        </div>
      </div>

    </div>
  )
}

export default Calculator
