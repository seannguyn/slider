import React, { Component } from 'react'
import Slider from './Slider';
import { connect } from 'react-redux';
import { fetchContent } from '../../reduxActions/onDemandActions';

const onDemandGameStyle = {
    width: "100%",
    height: "auto",
    overflowY: "auto",
    overflowX: "hidden",
}

class OnDemandGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            startIndex: 0,
            deltaIndex: 8,
            currentSlide: [],
            position: 0,
            clientHeight: 0,
            scrollHeight: 0
        }
    }

    // fetch movies from Server, display from: startIndex -> deltaIndex
    // then set the scrollHeight, clientHeight (height of this component), and ready = true (to display)

    componentDidMount() {
        var {startIndex,deltaIndex} = this.state;
        this.props.dispatch(fetchContent())
        .then(response => {
            let subset = response.payload.slice(startIndex, startIndex+deltaIndex)
            this.setState({
                ready: true,
                currentSlide: subset,
                clientHeight: this.scroller.clientHeight,
                scrollHeight: this.scroller.clientHeight*0.22*subset.length,
                startIndex: startIndex+deltaIndex
            });
        });  
    }
    
    loadMore() {
        var {startIndex,deltaIndex} = this.state;
        var {content} = this.props;

        if (startIndex < content.length) {
            // prevent OutOfBounds error for endIndex
            var endIndex = startIndex + deltaIndex;
            endIndex = endIndex - content.length > 0 ? content.length : endIndex;
            
            let subset = content.slice(startIndex, endIndex);
            
            this.setState({
                startIndex: endIndex,
                currentSlide: this.state.currentSlide.concat(subset),
                scrollHeight: this.state.clientHeight*0.22*this.state.currentSlide.concat(subset).length
            })  
        }
    }

    renderSlider() {
        return this.state.currentSlide.map(function (content) {
            return <Slider key={content.title} sliderId={content.title} sliderLowerData={content.data}/>
        });
    }

    handleScroll = () => {

        var {clientHeight,position,scrollHeight} = this.state;

        if (this.scroller.scrollTop > (scrollHeight - clientHeight)*0.8 && this.scroller.scrollTop > position) {
            this.loadMore();
            this.setState({position: this.scroller.scrollTop})
        }
    };

    render() {
        const {ready} = this.state;

        var slider = ready ? this.renderSlider() : "";

        return (
            <div 
                onScroll={this.handleScroll}
                ref={(scroller) => {
                    this.scroller = scroller;
                }} 
                style={onDemandGameStyle} className="On-Demand-Game"
            >
                {slider}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    content: state.onDemand.content,
});

export default connect(mapStateToProps)(OnDemandGame);
