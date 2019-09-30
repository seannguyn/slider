import axios from 'axios';
import {
    GET_CONTENT
} from './types';

export async function fetchContent() {
    const request = await axios.get(`https://ec2-54-234-28-156.compute-1.amazonaws.com/landingPage`)
                .then(response => {return response.data;})
                .catch(error => console.log(error));    

    return {
        type: GET_CONTENT,
        payload: request
    }
}

export function moveSliderLowerMain(index) {

}

// https://ec2-54-234-28-156.compute-1.amazonaws.com/landingPage

// https://jsonplaceholder.typicode.com/users