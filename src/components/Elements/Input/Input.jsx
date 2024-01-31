import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const {type, placeholder, name} = props;

    return(
        <input 
            type={type}
            name={name}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
            placeholder={placeholder}
            id={name}
            ref={ref}
        />
    )
})

export default Input;