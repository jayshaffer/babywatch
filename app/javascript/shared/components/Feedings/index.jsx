import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import moment from 'moment'
import Feeding from './feeding'
import classNames from 'classnames'

class Feedings extends React.Component{

    constructor(props){
        super(props)
        this.state = {feedings: [], time: this.currentTimeFormatted()}
    }

    componentWillMount(){
        axios.get('/api/v1/feedings').then((response) => {
            this.setState(...this.state, {feedings: response.data.feedings})
        })
        setInterval(() => {
            this.setState(...this.state, {time: this.currentTimeFormatted()})
        }, 1000)
    }

    currentTime(){
        return moment()
    }

    currentTimeFormatted(){
        return this.currentTime().format('hh:mm ss A')
    }

    nextScheduled(){
        let time = moment()
        if(this.state.feedings.length > 0){
            time = moment(this.state.feedings[0].createdAt).add(2, 'hours')
        }
        return <Feeding className={classNames('next', {'expired': time > this.currentTime()})} time={time}></Feeding> 
    }

    render(){
        return(
            <div>
                <div>
                    Current Time: <div className="time"> {this.state.time}</div>
                </div>
                <div>
                    <div className="title"> Next Feeding</div>
                    {this.nextScheduled()}
                </div>
                <div>
                    <div className="title"> Past Feedings</div>
                    {this.state.feedings.map((feeding, index) => {
                        return (
                           <Feeding className="previous" key={index} time={feeding.createdAt}></Feeding> 
                        )
                    })}
                </div>
            </div>
            
       )
    }
}

export default Feedings