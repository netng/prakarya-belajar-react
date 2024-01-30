export default function Label(props) {
    const {name, children} = props;

    return(
        <label 
            htmlFor={name}
            className="block text-slate-700 text-sm font-bold mb-2"
        >
            {children}
        </label>
    )
}