export default function Input(props) {
    const {type, placeholder, name} = props;

    return(
        <input 
            type={type}
            name={name}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
            placeholder={placeholder}
            id={name}
        />
    )
}