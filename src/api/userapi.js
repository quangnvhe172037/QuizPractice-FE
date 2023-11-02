import axios from "axios";
import jwtDecode from "jwt-decode";
import BASE_URL from "./baseapi";
const API_URL = BASE_URL;
const token = localStorage.getItem("token");

const getPublishContent = () => {
    return axios.get(API_URL + "home",);
};

const getCustomerBoard = () => {
    return axios.get(`${BASE_URL}/api/test/customer`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    });
}


const getAdminBoard = () => {
    return axios.get(`${BASE_URL}/api/test/admin`, {
        headers: {
            "Content-Type": "application/json", // Đặt Content-Type là application/json
            Authorization: `Bearer ${token}`,
        },
    });
}
const getExpertBoard = () => {
    return axios.get(`${BASE_URL}/api/test/expert`, {
        headers: {
            "Content-Type": "application/json", // Đặt Content-Type là application/json
            Authorization: `Bearer ${token}`,
        },
    });
};

const userapi = {
    getPublishContent, getAdminBoard, getExpertBoard, getCustomerBoard
};

export default userapi;