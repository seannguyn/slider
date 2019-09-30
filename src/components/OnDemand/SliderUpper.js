import React, { Component } from 'react'
import SliderUpperTitle from './SliderUpperTitle';
import SliderUpperStatus from './SliderUpperStatus';
import { connect } from 'react-redux';

const sliderUpperStyle = {
    width: "100%",
    height: "30%",
    position: "relative",
    // border: "1px solid white"
}

class SliderUpper extends Component {
    handleClick() {
        console.log(this.props);
    }
    render() {        
        return (
            <div onClick={this.handleClick.bind(this)} style={sliderUpperStyle} className="SliderUpper">
                <SliderUpperTitle title={this.props.title}/>
                <SliderUpperStatus status={this.props.status}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    content: state.onDemand.content,
});

export default connect(mapStateToProps)(SliderUpper);
