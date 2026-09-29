import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001",
    withCredentials: true
});

export const getProducts = (params) => api.get("/products", { params });
export const getProductById = (id) => api.get(`/products/${id}`);

export default api;