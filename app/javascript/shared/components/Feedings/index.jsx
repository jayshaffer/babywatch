import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import moment from 'moment-timezone'
import Feeding from './feeding'
import classNames from 'classnames'
import Button from './button'

class Feedings extends React.Component{

    constructor(props){
        super(props)
        this.state = {feedings: [], time: this.currentTimeFormatted()}
    }

    componentWillMount(){
        this.refresh()
        setInterval(() => {
            this.setState(...this.state, {time: this.currentTimeFormatted()})
        }, 1000)
    }

    refresh(){
        axios.get('/api/v1/feedings').then((response) => {
            this.setState(...this.state, {feedings: response.data.feedings})
        })
    }

    currentTime(){
        return moment()
    }

    currentTimeFormatted(){
        return this.currentTime().tz('America/Denver').format('hh:mm ss A')
    }

    nextScheduled(){
        let time = moment()
        if(this.state.feedings.length > 0){
            time = moment(this.state.feedings[0].createdAt).add(2, 'hours')
        }
        return <Feeding className={classNames('next', {'expired': time < this.currentTime()})} time={time}></Feeding> 
    }

    lastFeeding(){
        if(this.state.feedings.length > 0){
            return <Feeding className="previous" time={this.state.feedings[0].createdAt}></Feeding> 
        }
        else{
            return null
        }
    }

    createNewFeeding(){
        axios.post('/api/v1/feedings')
        .then(() => {
           this.refresh() 
        })
    }

    render(){
        return(
            <div>
                <div>
                    <div className="title">
                        Next
                        <Button onClick={() => {this.createNewFeeding()}}></Button>
                     </div>
                    {this.nextScheduled()}
                </div>
                <div>
                    <div className="title"> Last Feeding</div>
                    {this.lastFeeding()}
                </div>
            </div>
            
       )
    }
}

export default Feedings