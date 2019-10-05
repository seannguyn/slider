import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        // var footer = [0,1,2,3].map((num)=> <h1 key={num}>{num}</h1>)
        return (
            <div id={"Footer"} style={{marginTop:"5%", width:" 100%", height: "200px", backgroundColor:"blue"}}>
                Footer, etc
            </div>
        )
    }
}