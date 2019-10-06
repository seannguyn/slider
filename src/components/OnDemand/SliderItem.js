import React, { Component } from 'react'
import axios from 'axios'
export default class SliderItem extends Component {
    constructor(props) {
        super(props);
        ["update", "reset"].forEach((method) => {
            this[method] = this[method].bind(this);
          });

        this.videoRef = React.createRef();

        this.state = this.initialState = {
            isRunning: false,
            timeElapsed: 0,
            url:"",
            called: false
        }
        
    }

    reset() {
        clearInterval(this.timer);
        this.setState({...this.initialState});
    }

    startTimer() {
        this.startTime = Date.now();
        this.timer = setInterval(this.update, 10);
    }

    update() {
        const delta = Date.now() - this.startTime;

        this.setState({timeElapsed: this.state.timeElapsed + delta},()=>{
            if (this.state.timeElapsed > 50 && !this.state.called) {
                this.setState({called: true},()=>{
                    this.props.onHover(this.props.id)
                })
            }
        });
        this.startTime = Date.now();
    }


    async onHover(id) {
        this.startTimer();
        // this.props.onHover(id);  

        await axios({
            url: 'https:d18t36kckh43xl.cloudfront.net/testVid2.mov',
            method: 'GET',
            responseType: 'blob', // important
        })
            .then((response) => {
            const url = URL.createObjectURL(new Blob([response.data]));
            this.setState({
                url: url
            })
        })
            .catch((error) => {
            console.log(error);
        });

    }
    offHover() {
        this.reset();
        this.props.offHover();
    }

    render() {
        var {movie} = this.props;  
        return (
            <div onMouseLeave={this.offHover.bind(this)} onMouseEnter={this.onHover.bind(this, this.props.id)} className={[this.props.className, "Slider-Item"].join(" ")}>
                <img src={movie.imgURL} alt=""/>
                <div className="content">
                    <div className="overlay">
                        <img src={movie.imgURL} alt=""/>
                        {/* <video className={"Slider-Item-Video"} loop muted src={this.state.url} type="video/mp4"></video> */}
                    </div>
                </div>
            </div>
        )
    }
}
