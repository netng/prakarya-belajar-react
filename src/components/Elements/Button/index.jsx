export default function Button(
    {
        onClick = () => {},
        classname = "w-full bg-black",
        children = "Button",
        type="button"
    }) {
        
    return (
      <>
        <button
            type={type}        
            className={`h-10 px-4 rounded-md ${classname} font-semibold text-white hover:bg-blue-200`}
            onClick={onClick}
        >
            {children}
        </button>
      </>
    )
  }