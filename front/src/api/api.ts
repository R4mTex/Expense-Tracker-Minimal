import axios, { type AxiosInstance } from "axios";

export function Api() {
    const headers = {
        "Content-Type": "application/json",
    };

    const api: AxiosInstance = axios.create({
        baseURL: "http://localhost:3000",
        headers,
    });

    return api;
}
