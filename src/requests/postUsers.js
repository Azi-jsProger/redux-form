import { axiosInstance } from "../utils/API/API";

export const postUsers = async (userData) => {
    const response = await axiosInstance.post('/login', userData);
    return response.data;
};
