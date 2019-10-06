import React, { Component } from 'react'
import SliderUpperStatusCircle from './SliderUpperStatusCircle';
import { connect } from 'react-redux';

class SliderUpperStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: [0,1,2,3,4]
        }
    }

    renderStatusCircle() {

        var statusCircles = this.state.ids.map((id) => {
            if (id === this.props.status) {
                return <SliderUpperStatusCircle key={id} circleStyle={"Focused"}/>
            } else {
                return <SliderUpperStatusCircle key={id} circleStyle={"Unfocused"}/>
            }
        })
        statusCircles.reverse();
        return statusCircles;
    }
    render() {
        var statusCircles = this.renderStatusCircle();

        var display={
            display:this.props.showProgress?"block":"none" 
        }
        return (
            <div style={display}className={"Slider-Status"}>
                {statusCircles}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    content: state.onDemand.content,
});

export default connect(mapStateToProps)(SliderUpperStatus);