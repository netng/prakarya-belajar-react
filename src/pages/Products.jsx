import { useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/products.service";
import { getUsername, logout } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";

const token = localStorage.getItem("token");

function ProductsPage() {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const username = useLogin();

    useEffect(() => {
        setCarts(JSON.parse(localStorage.getItem("carts")) || []);
    }, [])

    useEffect(() => {
        if (products.length > 0 && carts.length > 0) {
            const sum = carts.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
    
            setTotalPrice(sum);
            localStorage.setItem("carts", JSON.stringify(carts));
        }
    }, [carts, products])

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
            console.log("data", data);
        });
    }, [])

    


    const handleLogout = () => {
        logout();
    }

    
    const handleAddToCart = (id) => {
        const currentItem = carts.find((item) => item.id === id);

        if (currentItem) {
            setCarts(carts.map(item => item.id === currentItem.id ? {...currentItem, qty: currentItem.qty + 1} : item));
        } else {
            setCarts([
                ...carts,
                {
                    id,
                    qty: 1
                }
            ])
        }
    }
    return (
        <>
            <div className="flex items-center justify-between bg-blue-400 mb-8 py-2 relative shadow">
                <div className="logo text-white font-bold text-4xl px-4">SuperShoes</div>
                <div className="profile text-[1rem] font-semibold text-white pr-4">
                    Hello, {username}
                    <Button classname="bg-blue-600 ml-2" onClick={handleLogout}>Logout</Button>
                </div>
            </div>
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
                                    handleAddToCart={() => handleAddToCart(product.id)}
                                    price={product.price}
                                />
                            </CardProduct>
                        ))
                    }
                </div>
                <div className="w-1/4">
                    <h1 className="text-4xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 && carts.map((item) => {
                                    const product = products.find((product) => product.id === item.id);
                                    console.log(product);

                                    return (
                                        <tr key={item.id}>
                                            <td>{product.title}</td>
                                            <td>Rp. {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR"})}</td>
                                            <td>{item.qty}</td>
                                            <td>{(item.qty * product.price).toLocaleString("id-ID", { style: "currency", currency: "IDR"})}</td>
                                        </tr>
                                    )
                                })

                            }
                            <tr>
                                <td colSpan={4} className="border-2"></td>
                            </tr>
                            <tr>
                                <td colSpan={3} className="py-4 font-semibold">Total Price</td>
                                <td className="font-semibold">{totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR"})}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ProductsPage;