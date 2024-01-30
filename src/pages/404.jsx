import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return(
        <div className="flex justify-center items-center min-h-screen flex-col">
            <h1 className="text-3xl font-bold">Oopss</h1>
            <p className="my-5 text-2xl">Sorry, an unexpected has occured</p>
            <p className="text-2xl text-red-600">{error.statusText || error.message}</p>
        </div>
    )
}