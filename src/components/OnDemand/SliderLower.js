import React, { Component } from 'react'
import SliderLowerLeft from './SliderLowerLeft';
import SliderLowerRight from './SliderLowerRight';
import SliderLowerMain from './SliderLowerMain';
import uuid from "uuid";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SliderLower extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0, 
            SliderLowerMainMovie: [],
        }
    }
    componentDidMount() {
        this.populateSliderLowerMainId();
    }
    
    populateSliderLowerMainId() {
        var {sliderLowerData} =this.props;
        
        // for each SliderLowerMain, populate 6 movies. There are 5 SliderLowerMain, 6 movies each. Therefore 30 movies in a slider
        var SliderLowerMainMovie = []
        for (var i = 0; i < 5; i++) {
            var movies = {
                id: uuid.v4(),
                movies: []
            }
            for (var j = 0; j < 6; j++) {
                movies.movies.push(sliderLowerData[i*6+j]);
            }
            SliderLowerMainMovie.push(movies);
        }
        this.setState({
            SliderLowerMainMovie: SliderLowerMainMovie
        })
    }

    showActiveSlide() {
        // get the status of current slideId
        
        var {activeIndex} = this.state;
        var allSliderMain = this.state.SliderLowerMainMovie.map(function (object, index) {
            /// if index === 0 ( it is first element in array ) then show it
            var hide = (index === activeIndex) ? '' : 'Slider-Main-Hide';
            return <SliderLowerMain key={object.id} id={object.id} movies={object.movies} className={hide} />
         });
         return allSliderMain;
    }

    moveLeft() {
        var {activeIndex} = this.state;
        this.setState({
            activeIndex: activeIndex - 1 < 0 ? 4 : activeIndex - 1,
        },() => this.props.changeSliderStatus(this.state.activeIndex));
        
    }

    moveRight() {
        var {activeIndex} = this.state;
        this.setState({
            activeIndex: activeIndex + 1 > 4 ? 0 : activeIndex + 1,
        },() => this.props.changeSliderStatus(this.state.activeIndex))
    }

    enter(){
        this.props.toggleProgress(true);
    }

    leave() {
        this.props.toggleProgress(false)
    }

    render() {
        var allSliderMain = this.showActiveSlide();
        return (
            <div onMouseEnter={this.enter.bind(this)} onMouseLeave={this.leave.bind(this)} className={"Slider-Wrapper"}>
                <SliderLowerLeft moveLeft={this.moveLeft.bind(this)}/>
                {allSliderMain}
                <SliderLowerRight moveRight={this.moveRight.bind(this)}/>
            </div>
        )
    }
}

SliderLower.propTypes = {
    sliderLowerData: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    content: state.onDemand.content,
});

export default connect(mapStateToProps)(SliderLower);
