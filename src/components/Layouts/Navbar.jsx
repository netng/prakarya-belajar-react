import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { logout } from "../../services/auth.service";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const carts = useSelector((state) => state.cart.data);
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    const {total} = useTotalPrice();

    useEffect(() => {
        const sum = carts.reduce((acc, item) => {
            return acc + item.qty
        }, 0);
        setTotalCart(sum);
    }, [carts]);
    
    const handleLogout = () => {
        logout();
    }

    const handleDarkMode = (isDarkMode) => {
        setIsDarkMode(isDarkMode)
        localStorage.setItem("dark-mode", isDarkMode);
    }

    return (
        <div className="flex items-center justify-between bg-blue-400 mb-8 py-2 relative shadow">
            <div className="logo text-white font-bold text-4xl px-4">SalesNeat</div>
            <div className="flex items-center profile text-[1rem] font-semibold text-white pr-4">
                Hello, {username}
                <Button classname="bg-blue-600 ml-2" onClick={handleLogout}>Logout</Button>
                <div className="bg-black rounded-lg p-2 ml-4">Total items: {totalCart} | Total price: {total}</div>
                <button className="bg-blue-500 p-2 rounded text-white ml-2" onClick={() => handleDarkMode(!isDarkMode)}>{isDarkMode ? "Light" : "Dark" }</button>
            </div>
        </div>
    )
}

export default Navbar;