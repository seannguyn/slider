import React, { Component } from 'react'
import SliderUpperStatusCircle from './SliderUpperStatusCircle';
const sliderUpperStatusStyle = {
    width: "14.79636%",
    float: "right",
    height: "30px",
    paddingTop: "1%",
    position: "absolute",
    top: "40%",
    right: "4.46%",
    // border: "1px solid blue"
}
export default class SliderUpperStatus extends Component {
    render() {
        return (
            <div style={sliderUpperStatusStyle}>
                <SliderUpperStatusCircle/>
                <SliderUpperStatusCircle/>
                <SliderUpperStatusCircle/>
                <SliderUpperStatusCircle/>
                <SliderUpperStatusCircle/>
                <SliderUpperStatusCircle/>
            </div>
        )
    }
}
