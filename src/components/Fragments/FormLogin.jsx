import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

export default function FormLogin() {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        window.location.href = "/products";
    }

    return(
        <form onSubmit={handleLogin}>
            <InputForm
                label="Email"
                name="email"
                type="text"
                placeholder="example@email.com" 
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
        </form>
    );
}