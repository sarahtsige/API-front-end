
const API_HOST_LOCAL = "http://localhost:4000/";
const API_HOST = "https://api-projectssaleh.herokuapp.com/";

export default function getCountryAPI () {
    if(process.env.NODE_ENV === 'production')
        return API_HOST;
    else
        return API_HOST_LOCAL;
}