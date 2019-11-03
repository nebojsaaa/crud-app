import config from '../config';
import axios from 'axios';

export const userService = {
    getData
}

function getData (setData) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    axios.get(config.api, requestOptions)
        .then(res => {
            return setData(res.data);
        })
        .catch(err => console.log(err));
}
