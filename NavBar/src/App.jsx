
import { useState } from "react";
import "./styles/styles.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
   <nav>
    <span>Logo</span>
    {open &&
    (
      <div>
        <a href="#">home</a>
        <a href="#">products</a>
        <a href="#">about</a>
      </div>
    )}

    <button onClick={() => setOpen(!open)}>=</button>

   </nav>
  )
}

export default App
