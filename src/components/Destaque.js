import './Destaque.css';
import destaque from '../images/destaque.png';
import { WHATSAPP } from '../data/contato';

function Destaque() {
  return (
    <section className="destaque secao" id="inicio">
      <div className="destaque-texto">
        <h2 className="destaque-titulo">Brigadeiro gourmet feito sob medida</h2>
        <p className="destaque-frase">
          Doces artesanais preparados por encomenda para aniversários, casamentos e
          confraternizações. Você escolhe os sabores, a quantidade e a data.
        </p>
        <a className="botao" href={WHATSAPP} target="_blank" rel="noreferrer">
          Fazer uma encomenda
        </a>
      </div>
      <img
        className="destaque-imagem"
        src={destaque}
        alt="Brigadeiros gourmet artesanais servidos em forminhas"
      />
    </section>
  );
}

export default Destaque;
