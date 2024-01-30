import Button from "../Elements/Button";
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
                className="p-8"
            />
        </>
    );
}

function Body({name, children}) {
    return(
        <div className="px-8 h-full">
            <a href="" >
                <h5 className="text-2xl font-semibold text-white tracking-tight">{name}</h5>
                <p className="text-white py-2">
                    {children}
                </p>
        </a>
        </div>
    );
}

function Footer({price, handleAddToCart}) {
    return(
        <div className="flex items-center justify-between px-8 py-2">
            <span className="font-bold text-white text-[18px]">Rp. {price}</span>
            <Button classname="bg-blue-500" onClick={handleAddToCart}>Add to Cart</Button>
        </div>
    );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;