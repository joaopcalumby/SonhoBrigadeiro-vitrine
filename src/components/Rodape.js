import './Rodape.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import carimbo from '../images/carimbo-negativa.svg';
import { NOME_DA_LOJA, RESPONSAVEL, TELEFONE, WHATSAPP, INSTAGRAM, INSTAGRAM_USUARIO, EMAIL } from '../data/contato';

function Rodape() {
  return (
    <footer className="rodape">
      <img className="rodape-carimbo" src={carimbo} alt={'Carimbo da ' + NOME_DA_LOJA} />
      <div className="rodape-bloco">
        <h3 className="rodape-titulo">A doceria</h3>
        <p>{NOME_DA_LOJA}</p>
        <p>{RESPONSAVEL}</p>
        <p>Atendimento por encomenda</p>
      </div>
      <div className="rodape-bloco">
        <h3 className="rodape-titulo">Contato</h3>
        <p>
          <a className="rodape-link" href={WHATSAPP} target="_blank" rel="noreferrer">
            <FaWhatsapp /> {TELEFONE}
          </a>
        </p>
        <p>
          <a className="rodape-link" href={'mailto:' + EMAIL}>
            <FiMail /> {EMAIL}
          </a>
        </p>
        <p>
          <a className="rodape-link" href={INSTAGRAM} target="_blank" rel="noreferrer">
            <FaInstagram /> {INSTAGRAM_USUARIO}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
