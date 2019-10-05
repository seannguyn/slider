import React, { Component } from 'react'

export default class SliderLowerRight extends Component {
    moveRight() {
        this.props.moveRight();
    }

    render() {
        return (
            <div onClick={this.moveRight.bind(this)} className={"Slider-Right"}>
                <i className="zmdi zmdi-chevron-right"></i>
            </div>
        )
    }
}
