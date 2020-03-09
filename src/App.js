import React, {Component} from 'react'
import Header from './Components/Header'
import ToDO from './Components/ToDo'
import Planner from './Components/Planner'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
        plannerList: []
    }

    this.removeThis = this.removeThis.bind(this)
}

componentDidMount() {
  axios.get('http://localhost:4444/api/plannerList')
    .then(res => {
        this.setState({
            plannerList: res.data.planner
        })
    })
    .catch(error => {
        console.log('component error', error)
    })
}

  addToPlanner = (e) => {
    let newData = e.target.id;
    console.log(newData)
    axios.post('http://localhost:4444/api/plannerList', {newData})
      .then(res => {
          console.log('status Text', res.statusText)
          this.setState({
              plannerList: [...res.data]
          })
      })
  }


  removeThis = (body) => {
    axios.delete(`http://localhost:4444/api/plannerList/${body}`)
      .then(res => {
        console.log('del response', res)
        this.setState({
          plannerList: res.data
        })
      })
  }

  render() {
      console.log(this.state.plannerList)
      return (
      <div className='App'>
        <Header />
        <ToDO addToPlanner={this.addToPlanner}/>
        <Planner plannerList={this.state.plannerList} removeThis={this.removeThis} />
      </div>
    )
  }
}

export default App;
