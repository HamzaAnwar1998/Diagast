import React, { Component } from 'react'
import { Home } from './Components/Home'
import { Modal } from './Components/Modal'

export class App extends Component {

  state = {
    selectedModal: false
  }

  setSelectedModal = () => {
    this.setState({
      selectedModal: true
    })
  }

  dismissModal = () => {
    this.setState({
      selectedModal: false
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Home setSelectedModal={this.setSelectedModal} />
        {this.state.selectedModal && <Modal dismissModal={this.dismissModal} />}
      </div>
    )
  }
}

export default App
