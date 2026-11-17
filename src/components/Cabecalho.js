import './Cabecalho.css';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import logo from '../images/assinatura-horizontal.svg';
import { NOME_DA_LOJA } from '../data/contato';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1 className="cabecalho-marca">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img className="cabecalho-logo" src={logo} alt={NOME_DA_LOJA} />
        </Link>
      </h1>
      <Menu />
    </header>
  );
}

export default Cabecalho;
