import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export default function CardProduct({children}) {
    return(
        <div className="w-full max-w-xs border border-gray-950 rounded-lg shadow bg-gray-500 flex flex-col justify-between">
            {children}
        </div>
    );
}

function Header({image}) {
    return(
        <>
            <img 
                src={image}
                alt="" 
                className="p-8 h-60 w-full object-cover"
            />
        </>
    );
}

function Body({title, id, children}) {
    return(
        <div className="px-8 h-full">
            <Link to={`/product/${id}`} >
                <h5 className="text-2xl font-semibold text-white tracking-tight">{title}</h5>
                <p className="text-white py-2">
                    {children.substring(0, 100)}
                </p>
        </Link>
        </div>
    );
}

function Footer({price, id}) {
    const dispatch = useDispatch();

    return(
        <div className="flex items-center justify-between px-8 py-2">
            <span className="font-bold text-white text-[18px]">Rp. {price}</span>
            <Button classname="bg-blue-500" onClick={() => dispatch(addToCart({id, qty: 1}))}>Add to Cart</Button>
        </div>
    );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;