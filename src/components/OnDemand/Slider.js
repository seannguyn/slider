import React, { Component } from 'react'
import SliderUpper from './SliderUpper';
import SliderLower from './SliderLower';

export default class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusId: 0
        }
    }

    changeSliderStatus(statusId) {
        this.setState({
            statusId: statusId
        })
    }

    render() {
        
        return (
            <div className="Slider">
                <SliderUpper status={this.state.statusId} title={this.props.sliderId}/>
                <SliderLower changeSliderStatus={this.changeSliderStatus.bind(this)} sliderId={this.props.sliderId} sliderLowerData={this.props.sliderLowerData}/>
            </div>
        )
    }
}
