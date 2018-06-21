import React from 'react'
import moment from 'moment-timezone'
import styles from './index.css'
import classNames from 'classnames'

export default class Feeding extends React.Component{
    render(){
        return (
            <div className={classNames('feeding', this.props.className)}>
                <div className="feeding-detail__small">
                    {moment(this.props.time).tz('America/Denver').format("MM/DD")}
                </div>
                <div className="feeding-detail">
                    {moment(this.props.time).tz('America/Denver').format("hh:mm A")}
                </div>
            </div>
        )
    }
}