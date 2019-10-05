import React, { Component } from 'react'
import Slider from './Slider';
import { connect } from 'react-redux';

class OnDemand extends Component {
    
    renderSlider() {        
        return this.props.slider.map(function (content) {            
            return <Slider key={content.title} sliderId={content.title} status={content.status} sliderLowerData={content.data}/>
        });
    }


    render() {
        var slider = this.renderSlider();
        return (
            <div className="On-Demand" style={{height:this.props.height}} ref={(scroller) => {this.scroller = scroller}}>
                {slider}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    content: state.onDemand.content,
});

export default connect(mapStateToProps)(OnDemand);