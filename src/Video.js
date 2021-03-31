import React, { Component } from 'react'
import './App.css'

export default class Video extends Component {
  render() {
    return (
      <div>

        <video className="vd" width="320" height="240" controls></video>


      </div>
    )
  }
}
