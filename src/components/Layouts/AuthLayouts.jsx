import { Link } from "react-router-dom";

export default function AuthLayouts({title, type, children}) {
    return(
        <div className='flex min-h-screen justify-center items-center'>
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