import React, { Component } from 'react'
import { Home } from './Components/Home'
import { ListModal } from './Components/ListModal'
import { Modal } from './Components/Modal'
import { Modal2 } from './Components/Modal2'
import { SearchModal } from './Components/SearchModal'

export class App extends Component {

  state = {
    selectedModal: false,
    modal: null,
    buttonModal: null,
    searchModal: null,
    maximize: false
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

  setModal = (id) =>{
    this.setState({
      modal: id
    })
  }

  setButtonModal = (id) =>{
    this.setState({
      buttonModal: id
    })
  }

  setSearch = (id) =>{
    this.setState({
      searchModal: id
    })
  }

  maximizeFunction = () =>{
    if(this.state.maximize===false){
    document.documentElement.requestFullscreen().then(()=>{
      this.setState({
        maximize: true
      });
    }).catch(()=>{
      this.setState({
        maximize: false
      })
    });
  }
  else{
    console.log('window is already full');
    this.setState({
      maximize: false
    })
  }
}

minimizeFunction = () =>{
  document.exitFullscreen().then(()=>{
    this.setState({
      maximize: false
    })
  })
}

  render() {
    return (
      <div className="wrapper">
        <Home setSelectedModal={this.setSelectedModal} setModal={this.setModal} setButtonModal={this.setButtonModal} setSearch={this.setSearch}
        maximize={this.state.maximize} maximizeFunction={this.maximizeFunction} minimizeFunction={this.minimizeFunction} />
        {this.state.selectedModal && <Modal dismissModal={this.dismissModal} />}
        {this.state.modal && <Modal2 modal={this.state.modal} setModal={this.setModal}/>}
        {this.state.buttonModal && <ListModal buttonModal={this.state.buttonModal} setButtonModal={this.setButtonModal} setModal={this.setModal}/>}
        {this.state.searchModal && <SearchModal searchModal={this.state.searchModal} setSearch={this.setSearch}/>}
      </div>
    )
  }
}

export default App
