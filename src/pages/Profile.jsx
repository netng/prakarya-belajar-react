import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
    const username = useLogin();

    return(
        <>
            <h2>{username} Profile</h2>
        </>
    )
}

export default ProfilePage;