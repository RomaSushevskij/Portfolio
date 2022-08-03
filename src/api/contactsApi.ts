import {apiConfig} from "./config";
import axios from "axios";

type FormDataType = {
    name: string;
    email: string;
    message: string;
}

export const contactsApi = {
    async sendMessage({name, email, message}: FormDataType) {
        const response = await apiConfig.post<string>('sendMessage', {
            name, email, message
        });
        return response.data
    }
}