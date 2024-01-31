import Input from "./Input";
import Label from "./Label";
import { forwardRef } from "react";


const InputForm = forwardRef((props, ref) => {
    const {name, label, type, placeholder} = props;

    return(
        <div className="mb-6">
            <Label name={name}>{label}</Label>
            <Input 
                name={name}
                placeholder={placeholder}
                type={type}
                id={name}
                ref={ref}
            />
        </div>
    )
})

export default InputForm;
