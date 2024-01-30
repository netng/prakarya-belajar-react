import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

export default function FormRegister() {
    return(
        <form action="">
          <InputForm
            label="Fullname"
            name="Fullname"
            type="text"
            placeholder="Input your fullname" 
          />
          
          <InputForm
            label="Email"
            name="Email"
            type="email"
            placeholder="example@email.com" 
          />

          <InputForm
            label="Password"
            name="Password"
            type="password"
            placeholder="*****" 
          />
          
          <InputForm
            label="Password Confirmation"
            name="Password Confirmation"
            type="password"
            placeholder="*****" 
          />

          <Button classname="bg-blue-400 w-full">Login</Button>
        </form>
    );
}