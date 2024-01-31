import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
    axios.post("https://fakestoreapi.com/auth/login", data)
        .then((res) => {
           callback(true, res.data);
        })
        .catch((error) => {
            callback(false, error.response.data);
        })
}

export const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
}

export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    return decoded.user;
}