import axios from 'axios';
import * as localEnv from './.env.js';

const instance = axios.create({
    baseURL: localEnv.firebaseDB //'https://hamburgers-5924f.firebaseio.com/'
});

export default instance;