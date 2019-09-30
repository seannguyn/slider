import React, { Component } from 'react'

const sliderLowerLeftStyle ={
    width: "3%",
    height: "100%",
    position: "absolute",
    left: "0",
    backgroundColor: "rgba(20, 20, 20, 0.5)",
    color: "white",
    fontFamily: "Material design iconic font, sans-serif", 
    fontWeight: "400",
    fontSize: "300%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    /* border: 1px solid green, */
    float: "left",
    zIndex: "99",
    opacity: "0.8",
}

export default class SliderLowerLeft extends Component {

    moveLeft() {
        this.props.moveLeft();
    }

    render() {
        return (
            <div onClick={this.moveLeft.bind(this)} style={sliderLowerLeftStyle}>
                <i className="zmdi zmdi-chevron-left"></i>
            </div>
        )
    }
}
