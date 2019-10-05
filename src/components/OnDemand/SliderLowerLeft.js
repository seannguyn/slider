import React, { Component } from 'react'

export default class SliderLowerLeft extends Component {

    moveLeft() {
        this.props.moveLeft();
    }

    render() {
        return (
            <div onClick={this.moveLeft.bind(this)} className={"Slider-Left"}>
                <i className="zmdi zmdi-chevron-left"></i>
            </div>
        )
    }
}
