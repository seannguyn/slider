import React, { Component } from 'react'
import SliderLowerLeft from './SliderLowerLeft';
import SliderLowerRight from './SliderLowerRight';
import SliderLowerMain from './SliderLowerMain';
import uuid from "uuid";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moveSliderLeft, moveSliderRight } from '../../reduxActions/onDemandActions';

const sliderLowerStyle = {
    width: "100%",
    height: "65%",
    position: "absolute",
    bottom: "0",
    left: "0",
    /* margin-top: 10%, */
    margin: "0%",
}
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
        var sliderStatus = this.props.content.filter((obj)=> {
            
            return obj.title === this.props.sliderId
        })

        var allSliderMain = this.state.SliderLowerMainMovie.map(function (object, index) {
            /// if index === 0 ( it is first element in array ) then show it
            var hide = (index === sliderStatus[0].status) ? '' : 'Slider-Main-Hide';
            return <SliderLowerMain key={object.id} id={object.id} movies={object.movies} className={hide} />
         })
         return allSliderMain;
    }

    moveLeft() {
        this.props.dispatch(moveSliderLeft(this.props.sliderId))
        this.forceUpdate();
    }

    moveRight() {
        this.props.dispatch(moveSliderRight(this.props.sliderId));
        this.forceUpdate();
    }

    render() {
        var allSliderMain = this.showActiveSlide();
        
        return (
            <div style={sliderLowerStyle}>
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
