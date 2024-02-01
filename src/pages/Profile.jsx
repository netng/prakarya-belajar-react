import { useTotalPrice } from "../context/TotalPriceContext";
import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
    const username = useLogin();
    const {total} = useTotalPrice();

    return(
        <>
            <h2>{username} Profile, total price: {total}</h2>
        </>
    )
}

export default ProfilePage;