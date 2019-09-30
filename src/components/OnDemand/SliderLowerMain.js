import React, { Component } from 'react'
import SliderItem from './SliderItem';
import uuid from 'uuid';
export default class SliderLowerMain extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SliderItemId: [],
            hover: false,
            hoverId: ""
        }
        this.onHover = this.onHover.bind(this);
        this.offHover = this.offHover.bind(this);
    }
    componentDidMount() {
        this.populateSliderItemId();
    }
    
    populateSliderItemId() {
        var idList = []
        for (var i = 0; i < 6; i++) {
            idList.push(uuid.v4());
        }
        this.setState({
            SliderItemId: idList
        })
    }

    showSlideItem() {
        var {SliderItemId} = this.state;
        var {movies} = this.props;
        var {onHover,offHover} = this;
        var allSliderItem = SliderItemId.map(function (id, index) {
            var order = "";
            if (index === 0){
                order="First";
            }else if (index === SliderItemId.length-1) {
                order="Last";
            }
            // else {
            //     order="Mid"
            // }
            return <SliderItem movie={movies[index]} offHover={offHover} onHover={onHover} key={id} id={id} className={order}/>
         })
         return allSliderItem;
    }

    showSlideItemShift() {
        var {SliderItemId,hoverId} = this.state;
        var {movies} = this.props;
        var hoverIdIndex = SliderItemId.indexOf(hoverId);
        var {onHover,offHover} = this;
        var allSliderItem = SliderItemId.map(function (id, index) {
            var order = "";
            if (index === 0){
                order="First";
            }else if (index === SliderItemId.length-1) {
                order="Last";
            }
            else {
                order="Mid"
            }

            if (hoverIdIndex === 0 && index !== 0) {
                order = order.concat(" shiftRight")
            }else if (hoverIdIndex === SliderItemId.length-1 && index !== SliderItemId.length-1) {
                order = order.concat(" shiftLeft")
            } 
            else if(index < hoverIdIndex) {
                order = order.concat(" shiftLeftMid")
            }else if(hoverIdIndex < index ) {
                order = order.concat(" shiftRightMid")
            }
            return <SliderItem movie={movies[index]} offHover={offHover} onHover={onHover} key={id} id={id} className={order}/>
         })
         return allSliderItem;
    }

    onHover(id) {
        this.setState({
            hover: true,
            hoverId: id
        })
    }

    offHover(id) {
        this.setState({
            hover: false,
            hoverId: ""
        })
    }

    render() {
        var allSliderItem = this.state.hover ? this.showSlideItemShift() : this.showSlideItem();
        return (
            <div className={[this.props.className, "Slider-Main"].join(" ")}>
                {allSliderItem}
            </div>
        )
    }
}
