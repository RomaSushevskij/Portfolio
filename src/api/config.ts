import axios from "axios";


export const apiConfig = axios.create({
    baseURL: "https://node-gmail-smtp.herokuapp.com/"
})