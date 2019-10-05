import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        // var header = [0,1,2,3].map((num)=> <h1 key={num}>{num}</h1>)
        return (
            <div id={"Header"} style={{width:" 100%", height: "200px", backgroundColor:"blue"}}>
                Header, etc
            </div>
        )
    }
}
