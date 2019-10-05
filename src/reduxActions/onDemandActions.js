// import axios from 'axios';
import {
    GET_CONTENT,
} from './types';

import {data} from '../constant/constant'

export async function fetchContent() {
    // const request = await axios.get(`https://ec2-54-234-28-156.compute-1.amazonaws.com/landingPage`)
    //             .then(response => {
    //                 var normalizedData = []
    //                 for (var i = 0; i < response.data.length; i++) {
    //                     response.data[i].status = 0;
    //                     normalizedData.push(response.data[i])
    //                 }
    //                 return normalizedData;
    //             })
    //             .catch(error => console.log(error));    

    const request = data.map((slider)=>{
        slider.status = 0
        return slider;
    })
    
    return {
        type: GET_CONTENT,
        payload: request
    }
}

// https://ec2-54-234-28-156.compute-1.amazonaws.com/landingPage

// https://jsonplaceholder.typicode.com/users