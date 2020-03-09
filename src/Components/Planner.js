import React, { Component } from 'react';
// import axios from 'axios'

export default class Planner extends Component {
    constructor(props) {
        super();
    }

    // componentDidMount() {
    //     axios.get('http://localhost:4444/api/plannerList')
    //         .then(res => {
    //             this.setState({
    //                 plannerList: res.data.planner
    //             })
    //         })
    //         .catch(error => {
    //             console.log('component error', error)
    //         })
    // }



    render() {
        console.log(this.props)
        const plannerList =
            this.props.plannerList.map((activity, index) => {
               return (
               <div key={index}>
                   <li>{activity}</li>
                   <button onClick={() => this.props.removeThis(activity)}>remove</button>
               </div>
               )
            })

        return (
            <div className='planner'>
                {plannerList}
            </div>
        )
    }
}
