import { useUser } from "./UserContext";

function Profile() {
      // Open tap — get data directly from tank
    const {user, setUser} = useUser();
    
    return (
        <div>
        <p>I am in Profile, user name is : {user} </p>
              {/* Updates user for ALL components */}
        <button onClick={() => setUser("John")}> Click Me</button> 
        </div>
    );
}

export default Profile;