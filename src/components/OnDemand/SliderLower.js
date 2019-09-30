import React, { Component } from 'react'
import SliderLowerLeft from './SliderLowerLeft';
import SliderLowerRight from './SliderLowerRight';
import SliderLowerMain from './SliderLowerMain';
import uuid from "uuid";
import PropTypes from 'prop-types';

const sliderLowerStyle = {
    width: "100%",
    height: "65%",
    position: "absolute",
    bottom: "0",
    left: "0",
    /* margin-top: 10%, */
    margin: "0%",
}
export default class SliderLower extends Component {

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
        // console.log(sliderLowerData);

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

        // ,() => {
        //     console.log(this.state.SliderLowerMainId);
        // })
    }

    showActiveSlide() {
        var {activeIndex} = this.state;
        
        var allSliderMain = this.state.SliderLowerMainMovie.map(function (object, index) {
            /// if index === 0 ( it is first element in array ) then show it
            var hide = (index === activeIndex) ? '' : 'Slider-Main-Hide';
            return <SliderLowerMain key={object.id} id={object.id} movies={object.movies} className={hide} />
         })
         return allSliderMain;
    }

    moveLeft() {
        var {activeIndex,SliderLowerMainMovie} = this.state;
        this.setState({
            activeIndex: activeIndex - 1 < 0 ? SliderLowerMainMovie.length - 1 : activeIndex-1
        },() => {
            console.log("Silder: "+this.props.sliderId+", Move left: "+ this.state.activeIndex+" "+this.state.SliderLowerMainMovie[activeIndex]);
        })
    }

    moveRight() {
        var {activeIndex,SliderLowerMainMovie} = this.state;
        this.setState({
            activeIndex: activeIndex + 1 > SliderLowerMainMovie.length - 1 ? 0 : activeIndex+1
        },() => {
            console.log("Silder: "+this.props.sliderId+", Move right: "+ this.state.activeIndex+" "+this.state.SliderLowerMainMovie[activeIndex]);
        })
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
