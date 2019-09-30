import React, { Component } from 'react'

// const unfocused = {
//     opacity: "0.1",
// }
export default class SliderUpperStatusCircle extends Component {
    render() {
        return (
            <div className={["Slider-Status-Circle", this.props.circleStyle].join(" ")}>
                
            </div>
        )
    }
}
