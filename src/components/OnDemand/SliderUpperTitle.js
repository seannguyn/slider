import React, { Component } from 'react'
const sliderUpperTitleStyle = {
    marginLeft: "4.46%",
    width: "14.79636%",
    height: "30px",
    float: "left",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    color: "white",
    fontSize: "150%",
    position: "absolute",
    top: "40%",
}
export default class SliderUpperTitle extends Component {
    render() {
        return (
            <div style={sliderUpperTitleStyle}>
                Trending
            </div>
        )
    }
}
