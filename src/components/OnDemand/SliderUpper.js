import React, { Component } from 'react'
import SliderUpperTitle from './SliderUpperTitle';
import SliderUpperStatus from './SliderUpperStatus';
import { connect } from 'react-redux';

class SliderUpper extends Component {
    render() {        
        return (
            <div className="Slider-Upper">
                <SliderUpperTitle title={this.props.title}/>
                <SliderUpperStatus status={this.props.status} showProgress={this.props.showProgress}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    content: state.onDemand.content,
});

export default connect(mapStateToProps)(SliderUpper);
