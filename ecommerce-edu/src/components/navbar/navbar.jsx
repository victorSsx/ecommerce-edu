import { Link } from "react-router-dom";

function Navbar() {
    <>
    return(
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <link to="/" className="text-2x1 font-bold text-yellow-400">
            EduStore
            </link>
            <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
                <li><Link to="product" className="hover:text-yellow-300">Produtos</Link></li>
                <li><Link to="/cart" className="hover:text-yellow-300">Carrinho</Link></li>
                <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
            </ul>
        </nav>
    )
    
    </>
}

export default Navbar;