import './Doce.css';

function Doce(props) {
  return (
    <article className="doce">
      <img className="doce-imagem" src={props.imagem} alt={props.alt} />
      <div className="doce-corpo">
        <h3 className="doce-nome">{props.nome}</h3>
        <p className="doce-descricao">{props.descricao}</p>
        <p className="doce-preco">{props.preco}</p>
        <p className="doce-sabores">{props.sabores}</p>
      </div>
    </article>
  );
}

export default Doce;
