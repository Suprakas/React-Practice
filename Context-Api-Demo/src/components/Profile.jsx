import useAuth from "../hooks/useAuth"

const Profile = () => {
    const { user } = useAuth();
    if(!user) return <p>Please Login</p>
return <h2>
        User: {user.name}
    </h2>
}

export default Profile;