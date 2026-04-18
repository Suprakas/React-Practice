import "./styles/styles.css"
import { FaSearch, FaShoppingBag, FaStore, FaUser } from "react-icons/fa";

function App() {

  return (
 <nav className="Navbar flex items-center justify-between px-6 py-4 bg-gray-50 text-black">

    <div className="Navbar-left-section flex items-center gap-x-12">
        <div className="Navbar-logo flex items-center gap-2 text-2xl font-bold">
          <FaStore />
          <span className="Navbar-header">AccessCommerce</span>
        </div>

    <ul className="Navbar-links flex gap-6">
      <li><a href="#">Home</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Product details</a></li>
      <li><a href="#">Cart</a></li>
    </ul>
    </div>

    <div className="Navbar-right-section">

      <div className="flex items-center">
         <div className="Navbar-search flex items-center gap-2.5 outline-1 px-3 py-1">
        <FaSearch className="Navbar-search-icon"/>
        <input type="text" placeholder="Search" className="outline-none"></input>
      </div>

      <div className="Navbar-icons flex items-center gap-4 ml-6">
        <FaUser className="Navbar-icon"/>
        <FaShoppingBag className="Navbar-icon"/>
      </div>
      </div>
    </div>
 </nav>
  )
}

export default App
