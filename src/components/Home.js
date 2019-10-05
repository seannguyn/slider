import React, { Component } from 'react'
import OnDemandSection from './OnDemand/OnDemandSection';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { fetchContent } from '../reduxActions/onDemandActions';
import uuid from 'uuid';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state= {
            position: 0,
            ready: false,
            currentSlide: [],
            scrollHeight: 0,
            minSlide: 15,
            increment: 5
        }
    }

    componentDidMount() {
        var offsetTop       = document.getElementById("Header").getBoundingClientRect().bottom-document.getElementById("Header").getBoundingClientRect().top;
        var offsetBottom    = document.getElementById("Footer").getBoundingClientRect().bottom-document.getElementById("Footer").getBoundingClientRect().top;

        this.props.dispatch(fetchContent())
        .then(response => {    
            this.setState({
                ready: true,
                currentSlide: response.payload,
                scrollHeight: offsetTop + (this.scroller.clientWidth/1.4) * 3 + offsetBottom - this.scroller.clientHeight,
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    handleScroll = () => {
        
        var {position,scrollHeight} = this.state;

        if (this.scroller.scrollTop > scrollHeight * 0.5 && this.scroller.scrollTop > position) {
            this.loadMore();
        }
    };

    loadMore(){
        var {minSlide,increment,currentSlide} = this.state;
        
        if(minSlide + increment<= currentSlide.length) {
            this.setState({
                minSlide: minSlide + increment
            })
        }
        
    }

    render() {
        var ODS = []
        var {ready,currentSlide,minSlide} = this.state;
        if (ready){
            ODS.push(<OnDemandSection 
                        key={uuid.v4()} 
                        height={this.scroller.clientWidth/1.4} 
                        currentSlide={currentSlide}
                        minSlide={minSlide}/>)
        }
        return (
            
            <div onScroll={this.handleScroll} ref={(scroller) => {this.scroller = scroller}} style={{overflowY:"scroll", height: "100%"}}>
                <Header/>
                {ODS}
                <Footer/>            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    content: state.onDemand.content,
});

export default connect(mapStateToProps)(Home);
