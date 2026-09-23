import './Rodape.css';
import { NOME_DA_LOJA, RESPONSAVEL, TELEFONE, WHATSAPP, INSTAGRAM, INSTAGRAM_USUARIO, EMAIL } from '../data/contato';

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-bloco">
        <h3 className="rodape-titulo">{NOME_DA_LOJA}</h3>
        <p>Doceria gourmet</p>
        <p>{RESPONSAVEL}</p>
      </div>
      <div className="rodape-bloco">
        <h3 className="rodape-titulo">Contato</h3>
        <p><a className="rodape-link" href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp {TELEFONE}</a></p>
        <p><a className="rodape-link" href={'mailto:' + EMAIL}>{EMAIL}</a></p>
      </div>
      <div className="rodape-bloco">
        <h3 className="rodape-titulo">Redes</h3>
        <p><a className="rodape-link" href={INSTAGRAM} target="_blank" rel="noreferrer">{INSTAGRAM_USUARIO}</a></p>
        <p>Atendimento por encomenda</p>
      </div>
    </footer>
  );
}

export default Rodape;
