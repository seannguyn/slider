import React, { Component } from 'react'

export default class SliderItem extends Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
        this.state = {
            timeoutOnMouseOver:false,
        }
    }
    onHover(id) {
        this.videoRef.play();
        this.props.onHover(id);

        // If they were already a programmed setTimeout
        // stop it, and run a new one
        // if (this.state.timeoutOnMouseOver) {
        //     clearTimeout(this.timeoutOnMouseOver);
        // }

        // this.timeoutOnMouseOver = setTimeout(() => {
        //     this.videoRef.play();
        //     this.props.onHover(id);
        //     this.setState({
        //         timeoutOnMouseOver: false
        //     });
        // }, 200);
    }
    offHover() {
        this.videoRef.pause();
        this.props.offHover();
        // if (this.state.timeoutOnMouseOver) {
        //     clearTimeout(this.timeoutOnMouseOver);
        // }

        // this.timeoutOnMouseOver = setTimeout(() => {
        //     this.videoRef.pause();
        //     this.props.offHover();
        //     this.setState({
        //         timeoutOnMouseOver: false
        //     });
        // }, 200);
    }
    handleRef = (video) => {
        this.videoRef = video;
    };

    render() {
        var {movie} = this.props;        
        return (
            <div onMouseLeave={this.offHover.bind(this)} onMouseEnter={this.onHover.bind(this, this.props.id)} className={[this.props.className, "Slider-Item"].join(" ")}>
                <img src={movie.imgURL} alt=""/>
                <div className="content">
                    <div className="overlay">
                        <video ref={this.handleRef} className="Slider-Item-Video" loop muted src={movie.trailerURL} type="video/mp4"/>
                    </div>
                </div>
            </div>
        )
    }
}
