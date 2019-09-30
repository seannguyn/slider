import React, { Component } from 'react'
import SliderUpper from './SliderUpper';
import SliderLower from './SliderLower';
const sliderStyle = {
    width: "100%",
    height: "20%",
    position: "relative",
    // border: "2px solid blue",
    marginTop: "2%",
}
export default class Slider extends Component {
    
    // componentDidMount() {
    //     console.log("oooooooo "+this.scroller.clientHeight+" oooooooo");
    // }
    

    handleClick() {

    }

    render() {
        
        return (
            <div ref={(scroller) => {
                this.scroller = scroller;
            }} onClick={this.handleClick.bind(this)} className="Slider" style={sliderStyle}>
                <SliderUpper status={this.props.status} title={this.props.sliderId}/>
                <SliderLower sliderId={this.props.sliderId} sliderLowerData={this.props.sliderLowerData}/>
            </div>
        )
    }
}
