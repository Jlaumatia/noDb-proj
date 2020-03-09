import React, {Component} from 'react';
import axios from 'axios';
// import data from '../data/data.json'

class ToDo extends Component {
    constructor(props) {
        super()
        this.state = {
            indoorData: [],
            outdoorData: [],
        }

    }    
    
    componentDidMount(){
        axios.get('http://localhost:4444/api/indoorList')
            .then(res => {
                this.setState({
                    indoorData: res.data.indoor
                })
            })
            .catch(error => {
                console.log('component error', error)
            })

        axios.get('http://localhost:4444/api/outdoorList')
            .then(res => {
                this.setState({
                    outdoorData: res.data.outdoor
                })
            })
            .catch(error => {
                console.log('component error', error)
            })
    }

    
    
    
    render() {  
        const {addToPlanner} = this.props;

        const indoorList = 
        this.state.indoorData.map((activity, index) => {
            return (
                
                <li key={index}>
                    {activity}
                    <button onClick={addToPlanner} id={activity}>add</button>
                
                </li>
            )
        } )


        const outdoorList =
            this.state.outdoorData.map((activity,index) => {
               return (
               <li key={index}>
                   {activity}
                   <button onClick={this.props.addToPlanner} id={activity}>add</button>
               </li>
               )
            })
        
        
        return(
            <div className="activity-box">
                <div className='text-box'>
                   <h2>Outdoor:</h2> 
                </div>
                
                    <div className="outdoor">
                        <ul>
                            {outdoorList}
                        </ul>
                    </div>
                    <div className='text-box'>
                       <h2>Indoor:</h2> 
                    </div>
                
                    <div className="indoor">
                        {indoorList}
                    </div>
            </div>
        )
    }

}

export default ToDo;