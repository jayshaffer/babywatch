import React from 'react'
import moment from 'moment'
import styles from './index.css'
import classNames from 'classnames'

export default class Feeding extends React.Component{
    render(){
        return (
            <div className={classNames('feeding', this.props.className)}>
                {moment(this.props.time).format("hh:mm A")}
            </div>
        )
    }
}