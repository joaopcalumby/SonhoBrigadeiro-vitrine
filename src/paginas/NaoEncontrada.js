import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

function NaoEncontrada() {
  return (
    <section className="secao nao-encontrada">
      <h2 className="secao-titulo">Página não encontrada</h2>
      <hr className="secao-linha" />
      <p className="aviso">Esse endereço não existe, mas os brigadeiros continuam esperando por você.</p>
      <p className="nao-encontrada-acao">
        <Link className="botao" to="/">
          <FiHome /> Voltar ao início
        </Link>
      </p>
    </section>
  );
}

export default NaoEncontrada;
