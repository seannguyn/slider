import React, { Component } from 'react'
import OnDemandGame from './OnDemand/OnDemandGame';

class Home extends Component {
    render() {
        return (
            
            <div>
                <OnDemandGame/>
                {/* <div className="overlay"></div> */}
            </div>
        )
    }
}

export default Home;
