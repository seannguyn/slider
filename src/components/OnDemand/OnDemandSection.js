import React, { Component } from 'react'
import OnDemand from './OnDemand'
import uuid from 'uuid';

class OnDemandSection extends Component {
    
    renderSlider() {
        const onDemand = []
        var {currentSlide,minSlide} = this.props;
        
        for ( var i = 0; i + 5 <= minSlide; i+=5) {
            let subset = currentSlide.slice(i, i+5);
            onDemand.push(<OnDemand key={uuid.v4()} slider={subset} height={this.props.height}/>)
        }
        return onDemand;
    }

    render() {
        
        var slider = this.renderSlider();
        
        return (
            <div 
                style={{width:"100%", height:"auto"}}
                id={"On-Demand-Section"}
            >
                {slider}
            </div>
        )
    }
}

export default (OnDemandSection);
