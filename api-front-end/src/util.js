
const API_HOST_LOCAL = "http://localhost:4000/";
const API_HOST = "https://api-projectssaleh.herokuapp.com/";

export default function getCountryAPI () {
    let api;
    if(process.env.NODE_ENV === 'production')
        api = API_HOST;
    else
        api = API_HOST_LOCAL;
    return api;
}