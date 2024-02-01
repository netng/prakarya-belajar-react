import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTotalDispatch, useTotalPrice } from "../../context/TotalPriceContext";

const TableCart = ({products}) => {
    const carts = useSelector((state) => state.cart.data);
    // const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useTotalDispatch();
    const { total } = useTotalPrice();

    useEffect(() => {
        if (products.length > 0 && carts.length > 0) {
            const sum = carts.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
    
            // setTotalPrice(sum);
            dispatch({
                type: "UPDATE",
                payload: {
                    total: sum
                }
            })
            localStorage.setItem("carts", JSON.stringify(carts));
        }
    }, [carts])

    return (
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
                    <td className="font-semibold">{total.toLocaleString("id-ID", { style: "currency", currency: "IDR"})}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableCart;
