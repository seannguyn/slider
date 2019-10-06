import React, { Component } from 'react'
import SliderUpper from './SliderUpper';
import SliderLower from './SliderLower';

export default class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusId: 0,
            showProgress: false,
        }
    }

    changeSliderStatus(statusId) {
        this.setState({
            statusId: statusId
        })
    }

    toggleProgress(value) {        
        this.setState({
            showProgress: value
        })
    }

    render() {
        var {showProgress} = this.state;
        return (
            <div className="Slider">
                <SliderUpper showProgress={showProgress} status={this.state.statusId} title={this.props.sliderId}/>
                <SliderLower toggleProgress={this.toggleProgress.bind(this)} changeSliderStatus={this.changeSliderStatus.bind(this)} sliderId={this.props.sliderId} sliderLowerData={this.props.sliderLowerData}/>
            </div>
        )
    }
}
