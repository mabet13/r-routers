import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hamburgers-5924f.firebaseio.com/'
});

export default instance;