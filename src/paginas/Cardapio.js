import './Cardapio.css';
import { useState, useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import Doce from '../components/Doce';
import { buscarProdutos } from '../data/banco';
import { WHATSAPP } from '../data/contato';

function Cardapio() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    buscarProdutos()
      .then((lista) => setProdutos(lista))
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }, []);

  return (
    <section className="cardapio secao">
      <p className="secao-chamada">Feitos por encomenda</p>
      <h2 className="secao-titulo">Cardápio</h2>
      <hr className="secao-linha" />

      {carregando ? <p className="aviso">Carregando o cardápio...</p> : null}

      {erro ? (
        <p className="aviso">
          <FiAlertCircle />
          <span>
            Não foi possível carregar o cardápio agora. Fale com a gente pelo{' '}
            <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>.
          </span>
        </p>
      ) : null}

      <div className="cardapio-lista">
        {produtos.map((produto) => (
          <Doce
            key={produto.id}
            imagem={produto.imagem}
            alt={produto.alt}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            medida={produto.medida}
            sabores={produto.sabores}
          />
        ))}
      </div>
    </section>
  );
}

export default Cardapio;
