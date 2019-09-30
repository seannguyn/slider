import React, { Component } from 'react'
import SliderUpperStatusCircle from './SliderUpperStatusCircle';
import { connect } from 'react-redux';

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
                
        return (
            <div style={sliderUpperStatusStyle}>
                {statusCircles}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    content: state.onDemand.content,
});

export default connect(mapStateToProps)(SliderUpperStatus);