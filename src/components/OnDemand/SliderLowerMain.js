import React, { Component } from 'react'
import SliderItem from './SliderItem';
import uuid from 'uuid';

const hoverStateInit = {
    isRunning: false,
    timeElapsed: 0,
    hover: false,
    hoverId: "",
}

export default class SliderLowerMain extends Component {

    constructor(props) {
        
        super(props);
        // IT HAS TO BE IN THIS POSITION
        ["onHover","offHover","update", "reset"].forEach((method) => {
            this[method] = this[method].bind(this);
        });
        this.state = {
            SliderItemId: [],
            ...hoverStateInit
        }
        
        this.onHover = this.onHover.bind(this);
        this.offHover = this.offHover.bind(this);
    }
    componentDidMount() {
        this.populateSliderItemId();
    }

    reset() {
        clearInterval(this.timer);
        this.setState({
            ...hoverStateInit
        })
    }
    startTimer() {
        clearInterval(this.timer);
        this.startTime = Date.now();
        this.timer = setInterval(this.update, 10);
    }

    update() {
        const delta = Date.now() - this.startTime;

        this.setState({timeElapsed: this.state.timeElapsed + delta});
        this.startTime = Date.now();
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

            // if you dont include these lines, weird scale effect will happen
            if (index === 0){
                order="FirstStatic";
            }else if (index === SliderItemId.length-1) {
                order="LastStatic";
            }

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
        this.startTimer();
        this.setState({
            hover: true,
            hoverId: id
        })
    }

    offHover() {
        this.setState({
            hover: false,
            hoverId: ""
        })
    }

    render() {
        var allSliderItem = this.state.hover && this.state.hoverId !== "" && this.state.timeElapsed > 500 ? this.showSlideItemShift() : this.showSlideItem();
        return (
            <div onMouseLeave={this.reset}
            className={[this.props.className, "Slider-Main"].join(" ")}>
                {allSliderItem}
            </div>
        )
    }
}
