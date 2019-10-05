import React, { Component } from 'react'

export default class SliderUpperStatusCircle extends Component {
    render() {
        return (
            <div className={["Slider-Status-Circle", this.props.circleStyle].join(" ")}></div>
        )
    }
}
