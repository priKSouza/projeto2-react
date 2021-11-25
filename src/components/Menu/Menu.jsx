import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return(
        <ul className="navbar">
            <li>
                <Link className="link" to='/'>Home</Link>
            </li>
            <li>
                <Link className="link" to='/sobre'>Sobre</Link>
            </li>
            <li>
                <Link className="link" to='/portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link className="link" to='/contato'>Contato</Link>
            </li>
        </ul>
    )
}

export default Menu