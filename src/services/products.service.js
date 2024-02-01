import axios from "axios";

export const getProducts = async (callback) => {
    // try {
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     callback(response.data);
    // } catch (error) {
    //     callback(error);
    // }

    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

export const getDetailProduct = async (id, callback) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            callback(error);
        })
}