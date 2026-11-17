import './Destaque.css';
import { Link } from 'react-router-dom';
import { FiBookOpen } from 'react-icons/fi';

function Destaque() {
  return (
    <section className="destaque secao">
      <div className="destaque-texto">
        <p className="destaque-chamada">Doceria gourmet</p>
        <h2 className="destaque-titulo">Brigadeiro gourmet feito sob medida</h2>
        <p className="destaque-frase">
          Doces artesanais preparados por encomenda para aniversários, casamentos e
          confraternizações. Você escolhe os sabores, a quantidade e a data.
        </p>
        <div className="destaque-botoes">
          <Link className="botao" to="/encomendar" onClick={() => window.scrollTo(0, 0)}>
            Fazer uma encomenda
          </Link>
          <Link className="botao botao-contorno" to="/cardapio" onClick={() => window.scrollTo(0, 0)}>
            <FiBookOpen /> Ver o cardápio
          </Link>
        </div>
      </div>
      <img
        className="destaque-imagem"
        src="/images/brigadeiros-tradicionais.jpg"
        alt="Brigadeiros gourmet artesanais servidos em forminhas"
      />
    </section>
  );
}

export default Destaque;
