import React, { Component } from 'react'
import './App.css'
import Video from './Video.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faSearch, faCog } from '@fortawesome/free-solid-svg-icons'

export default class App extends Component {
  render() {
    // const element = <FontAwesomeIcon icon={faCoffee} />
    return (
      <body>
        <form>
          {/* <FontAwesomeIcon className="img" icon={faImages} /> */}
          <p className="name">Sign In</p>
          <input className="i"
            type="text"
          />

          <br />

          <input className="i"
            type="text"
          />



          <br />
          <button className="container"> Sign In </button>
          <br />
          <button className="btn1"><FontAwesomeIcon icon={faHome} /></button>
          <button className="btn1"><FontAwesomeIcon icon={faPlus} /></button>
          <button className="btn1"><FontAwesomeIcon icon={faSearch} /></button>
          <button className="btn1"><FontAwesomeIcon icon={faCog} /></button>
          <Video />

          <input className="input1"
            type="text"
          />
          <br />
          <input className="input1"
            type="text"
          />
          <br />
          <input className="input2"
            type="text"
          />
          <br />
          <input className="input3"
            type="text"
            placeholder="Quick Search"
          />

          <br />
          <table className="table">
            <thead>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>

            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

            </tbody>
          </table>

        </form>
      </body>




    );
  }
}
