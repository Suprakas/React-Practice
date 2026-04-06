import Profile from './Profile'

function Home(){
      // Middleman flat — doesn't need user data *
      // No props passed — context handles it!
    return(
        <div>
            <p>Home page</p>
            <Profile />
        </div>
    );
}

export default Home;