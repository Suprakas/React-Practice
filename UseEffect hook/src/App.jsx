// stage 1 -> Fetching API data!


// import { useState } from 'react'

// import './App.css'
// import { useEffect } from 'react';

// function App() {

//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);

//   if(loading){
//     return <h2>loading.....</h2>
//   }
  
//   return (
//     <div>
//       <h2>Users list</h2>
//       {
//         users.map((user) => (
//           <div key={user.id}>
//             <p>Name : {user.name}</p>
//             <p>Email: {user.email}</p>
//             <hr/>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default App

// Stage 2 — Fetch based on user input

// import './App.css'
// import { useState, useEffect } from "react";

// function App() {

//   const [userId, setUserId] = useState(1);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then((res) => res.json())
//     .then((data) => {
//       setUser(data);
//       setLoading(false);
//     });
//   },[userId])

//   return(
//     <div>
//       <h2>Fetch User by ID</h2>
//       <button onClick={() => setUserId(userId - 1)} disabled={userId === 1}>Previous</button>
//       <span>USER ID : {userId}</span>
//       <button onClick={() => setUserId(userId + 1)} disabled={userId === 10}>Next</button>

//       {
//         loading ? (<h3>Loading... </h3>) : (
//           <div>
//             <p>User Name : {user.name}</p>
//             <p>Email : {user.email}</p>
//             <p>Phone : {user.phone}</p>
//             <p>City : {user.address.city}</p>
//           </div>
//       )}
//     </div>
//   )
// }

// export default App;

// Stage 3 -> Cleanup function! ( trickiest concept in interviews)

import { useState, useEffect } from "react";

function App() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if(!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1 );
    }, 1000)

    //Cleanup Function

    return () => {
      clearInterval(timer);
      console.log("Cleanup ran - time cleared !!");
    };
  }, [isRunning]);

  return (
    <div>
      <h2> Timer : {seconds} seconds</h2>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => { setSeconds(0); setIsRunning(false); }}>Reset</button>
    </div>
  )
}

export default App