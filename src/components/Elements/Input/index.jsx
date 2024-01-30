import Input from "./Input";
import Label from "./Label";

export default function InputForm(props) {
    const {name, label, type, placeholder} = props;

    return(
        <div className="mb-6">
            <Label name={name}>{label}</Label>
            <Input 
                name={name}
                placeholder={placeholder}
                type={type}
                id={name}
            />
        </div>
    )
}