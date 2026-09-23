import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-lista">
        <li><a className="menu-link" href="#inicio">Início</a></li>
        <li><a className="menu-link" href="#sobre">Sobre</a></li>
        <li><a className="menu-link" href="#cardapio">Cardápio</a></li>
        <li><a className="menu-link" href="#encomenda">Encomendar</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
