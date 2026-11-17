import './Doce.css';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { formatarPreco } from '../data/formatos';

function Doce(props) {
  const [mostrarSabores, setMostrarSabores] = useState(false);

  const alternarSabores = () => {
    setMostrarSabores(!mostrarSabores);
  };

  return (
    <article className="doce">
      <img className="doce-imagem" src={props.imagem} alt={props.alt} />
      <div className="doce-corpo">
        <h3 className="doce-nome">{props.nome}</h3>
        <p className="doce-descricao">{props.descricao}</p>
        <p className="doce-preco">
          {formatarPreco(props.preco)}
          <span className="doce-medida">{props.medida === 'cento' ? ' o cento' : ' a unidade'}</span>
        </p>
        <button className="doce-botao" type="button" onClick={alternarSabores}>
          {mostrarSabores ? 'Esconder sabores' : 'Ver sabores'}
          {mostrarSabores ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {mostrarSabores ? <p className="doce-sabores">{props.sabores}</p> : null}
      </div>
    </article>
  );
}

export default Doce;
