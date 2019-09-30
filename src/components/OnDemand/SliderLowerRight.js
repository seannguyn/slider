import React, { Component } from 'react'

const sliderLowerRightStyle={
    width: "3%",
    height: "100%",
    position: "absolute",
    right: "0",
    backgroundColor: "rgba(20, 20, 20, 0.5)",
    float: "left",
    color: "white",
    fontFamily: "Material design iconic font, sans-serif", 
    fontWeight: "400",
    fontSize: "300%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    opacity: "0.8",
    zIndex: "99",
    /* border: 1px solid green, */
}

export default class SliderLowerRight extends Component {
    moveRight() {
        this.props.moveRight();
    }

    render() {
        return (
            <div onClick={this.moveRight.bind(this)} style={sliderLowerRightStyle}>
                <i className="zmdi zmdi-chevron-right"></i>
            </div>
        )
    }
}
