import axios from "axios";


const instance = axios.create();
instance.defaults.baseURL = "https://absg-a9871-default-rtdb.firebaseio.com/";

export default instance;

// const instance = axios.create();
// instance.defaults.baseURL = 'https://work-1-b6be6-default-rtdb.firebaseio.com';

// export default instance;