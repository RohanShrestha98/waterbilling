import React from 'react'
import "./coustomer.css"
import Header from './Header'

export default function Bills(props) {
  return (
    <div className='rightUserPart'>
    <Header name={"Bills"} user={props.user} data={props.data} username={props.username} email={props.email}/>
  </div>
  )
}
