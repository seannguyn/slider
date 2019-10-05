import React, { Component } from 'react'

export default class SliderUpperTitle extends Component {
    render() {
        return (
            <div className={"Slider-Title"}>
                {this.props.title}
            </div>
        )
    }
}
