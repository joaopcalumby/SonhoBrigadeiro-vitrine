import './Menu.css';
import { NavLink } from 'react-router-dom';
import { FiHome, FiBookOpen, FiShoppingBag } from 'react-icons/fi';

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-lista">
        <li>
          <NavLink className="menu-link" to="/" onClick={() => window.scrollTo(0, 0)}>
            <FiHome /> Início
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-link" to="/cardapio" onClick={() => window.scrollTo(0, 0)}>
            <FiBookOpen /> Cardápio
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-link" to="/encomendar" onClick={() => window.scrollTo(0, 0)}>
            <FiShoppingBag /> Encomendar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
