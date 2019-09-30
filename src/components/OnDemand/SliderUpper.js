import React, { Component } from 'react'
import SliderUpperTitle from './SliderUpperTitle';
import SliderUpperStatus from './SliderUpperStatus';

const sliderUpperStyle = {
    width: "100%",
    height: "30%",
    position: "relative",
    // border: "1px solid white"
}

export default class SliderUpper extends Component {
    handleClick() {
        console.log(this.props.sliderUpperId);
        
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)} style={sliderUpperStyle} className="SliderUpper">
                <SliderUpperTitle/>
                <SliderUpperStatus/>
            </div>
        )
    }
}
