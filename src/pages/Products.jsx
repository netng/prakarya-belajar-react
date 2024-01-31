import { useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/products.service";
import { getUsername, logout } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

const token = localStorage.getItem("token");

function ProductsPage() {
    // const [carts, setCarts] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    useLogin();

    // useEffect(() => {
    //     setCarts(JSON.parse(localStorage.getItem("carts")) || []);
    // }, [])

    // useEffect(() => {
    //     if (products.length > 0 && carts.length > 0) {
    //         const sum = carts.reduce((acc, item) => {
    //             const product = products.find((product) => product.id === item.id);
    //             return acc + product.price * item.qty;
    //         }, 0);
    
    //         setTotalPrice(sum);
    //         localStorage.setItem("carts", JSON.stringify(carts));
    //     }
    // }, [carts, products])

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
            console.log("data", data);
        });
    }, [])

    


    const handleLogout = () => {
        logout();
    }

    
    // const handleAddToCart = (id) => {
    //     const currentItem = carts.find((item) => item.id === id);

    //     if (currentItem) {
    //         setCarts(carts.map(item => item.id === currentItem.id ? {...currentItem, qty: currentItem.qty + 1} : item));
    //     } else {
    //         setCarts([
    //             ...carts,
    //             {
    //                 id,
    //                 qty: 1
    //             }
    //         ])
    //     }
    // }
    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="w-3/4 flex flex-wrap gap-2">
                    {
                        products.length > 0 && products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />
                                <CardProduct.Body title={product.title} id={product.id}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer 
                                    id={product.id}
                                    price={product.price}
                                />
                            </CardProduct>
                        ))
                    }
                </div>
                <div className="w-1/4">
                    <h1 className="text-4xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
        </>
    );
}

export default ProductsPage;