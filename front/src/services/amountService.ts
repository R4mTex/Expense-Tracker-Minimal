import { Api } from "../api/api";
import axios from "axios";
import type { AmountInterface } from "../interfaces/amountInterface";
//import { amountFaker } from "../data/amountData";
const api = Api();

export async function getAmounts() {
    try {
        const response = await api.get("/amounts");
        //const { data } = amountFaker;
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // erreur Axios
            console.log(error.response?.status);
            const status = error.response?.status;
            if (status === 404) {
                throw new Error("Dépenses introuvables");
            } else if (status === 401) {
                throw new Error("Non authentifié");
            } else if (status === 500) {
                throw new Error("Erreur serveur");
            } else {
                throw error;
            }
        }
        // autre erreur
        throw error;
    }
}

//id : number / string not any

export async function getAmountId(id: any) {
    try {
        const response = await api.get(`/amounts/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function createAmount(data: AmountInterface) {
    try {
        const response = await api.post(`/amounts`, data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function deleteAmountId(id: any) {
    try {
        const response = await api.delete(`/amounts/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function updateAmountId(id: any, updatedAmount: AmountInterface) {
    try {
        const response = await api.put(`/amounts/${id}`, updatedAmount);
        return response.data;
    } catch (error) {
        return error;
    }
}
