import './Cabecalho.css';
import Menu from './Menu';
// import logo from '../images/logo.png';
import { NOME_DA_LOJA } from '../data/contato';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-marca">
        {/* <img className="cabecalho-logo" src={logo} alt="Logotipo da doceria Sonho de Brigadeiro" /> */}
        <div>
          <h1 className="cabecalho-nome">{NOME_DA_LOJA}</h1>
          <p className="cabecalho-assinatura">Doceria gourmet</p>
        </div>
      </div>
      <Menu />
    </header>
  );
}

export default Cabecalho;
