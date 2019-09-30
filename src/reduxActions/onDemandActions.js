import axios from 'axios';
import {
    GET_CONTENT,
    SLIDER_LEFT,
    SLIDER_RIGHT
} from './types';

export async function fetchContent() {
    const request = await axios.get(`https://ec2-54-234-28-156.compute-1.amazonaws.com/landingPage`)
                .then(response => {
                    var normalizedData = []
                    for (var i = 0; i < response.data.length; i++) {
                        response.data[i].status = 0;
                        normalizedData.push(response.data[i])
                    }
                    return normalizedData;
                })
                .catch(error => console.log(error));    

    return {
        type: GET_CONTENT,
        payload: request
    }
}

export function moveSliderLeft(sliderId) {
    return {
        type: SLIDER_LEFT,
        payload: sliderId
    } 
}

export function moveSliderRight(sliderId) {    
    return {
        type: SLIDER_RIGHT,
        payload: sliderId
    }
}

// https://ec2-54-234-28-156.compute-1.amazonaws.com/landingPage

// https://jsonplaceholder.typicode.com/users