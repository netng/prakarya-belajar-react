import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

export default function AuthLayouts({title, type, children}) {
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);

    return(
        <div className={`flex min-h-screen justify-center items-center ${isDarkMode && "bg-slate-700"}`}>
            <div className="w-full max-w-xs">
                <h1 className="text-blue-600 text-3xl font-bold mb-2">
                    {title}
                </h1>

                <p className='text-slate-500 font-medium mb-8'>
                    Welcome, please enter your details!
                </p>

                {children}
                <Navigation type={type} />
                
            </div>
            <div className="absolute top-2 right-2">
                <button className="bg-blue-500 p-2 rounded text-white" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Light" : "Dark" }</button>
            </div>
        </div>
    );
}

function Navigation({type}) {
    if (type === 'login') {
        return(
            <p className="text-center mt-5">
                Dont have an account?
                <Link 
                    to="/register"
                    className="font-bold text-blue-400 pl-1"
                >Register</Link>
            </p>
        );
    } else {
        return(
            <p className="text-center mt-5">
                Already have an account?
                <Link 
                    to="/login"
                    className="font-bold text-blue-400 pl-1"
                >Login</Link>
            </p>
        );
    }
}