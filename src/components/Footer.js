import React, { Component } from 'react'
import "./footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='left-text'>API Project - React & Reqres</div>
        <div className='right-text'>Made by Marcelo Meneses</div>
      </div>
    )
  }
}
