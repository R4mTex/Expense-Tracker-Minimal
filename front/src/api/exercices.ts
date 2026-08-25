import axios from "axios";
import { amountFaker } from "../data/amountData";

export async function getTodos() {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getTodoById(id: any) {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getAllAmounts() {
    try {
        //const response = await api.get(`users`);
        const response = amountFaker;
        return response;
    } catch (error) {
        return error;
    }
}
