import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

export default function FormLogin() {
    const [loginFailed, setLoginFailed] = useState(null);

    const handleLogin = (event) => {
        event.preventDefault();
        // window.location.href = "/products";
        const dataLogin = {
            username: event.target.username.value,
            password: event.target.password.value,
        }

        login(dataLogin, (status, res) => {
            if (status) {
                localStorage.setItem("token", res.token);
                setLoginFailed(null);
                window.location.href = "/products";
            } else {
                setLoginFailed(res);
            }
        })
    }

    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return(
        <form onSubmit={handleLogin}>
            <InputForm
                label="Username"
                name="username"
                type="text"
                placeholder="Johnd"
                ref={usernameRef}
            />

            <InputForm
                label="Password"
                name="password"
                type="password"
                placeholder="*****" 
            />

            <Button type="submit" classname="bg-blue-400 w-full">
                Login
            </Button>

            { loginFailed && <p className="text-red-500 mt-4 text-center">{loginFailed}</p> }

        </form>
        
    );
}