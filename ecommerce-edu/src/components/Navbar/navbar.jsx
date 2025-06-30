import { Link } from "react-router-dom"; //acho que naão ta funcionando ainda

function navbar() {
    <>
    return(
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <link to="/" className="text-2x1 font-bold text-yellow-400">
            EduStore
            </link>
            <ul className="flex space-x-6">
                <li><link to="/" className="hover:text-yellow-300">Home</link></li>
                <li><link to="product" className="hover:text-yellow-300">Produtos</link></li>
                <li><link to="/cart" className="hover:text-yellow-300">Carrinho</link></li>
                <li><link to="/login" className="hover:text-yellow-300">Login</link></li>
            </ul>
        </nav>
    )
    
    </>
}

export default navbar;