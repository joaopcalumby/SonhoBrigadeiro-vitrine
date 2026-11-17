import './Encomendar.css';
import { useState, useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import Encomenda from '../components/Encomenda';
import { buscarProdutos } from '../data/banco';
import { WHATSAPP } from '../data/contato';
import { formatarPreco } from '../data/formatos';

function Encomendar() {
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
    <section className="encomendar secao">
      <p className="secao-chamada">Do seu jeito</p>
      <h2 className="secao-titulo">Encomendar</h2>
      <hr className="secao-linha" />

      {carregando ? <p className="aviso">Carregando os produtos...</p> : null}

      {erro ? (
        <p className="aviso">
          <FiAlertCircle />
          <span>
            O formulário está fora do ar agora. Faça sua encomenda pelo{' '}
            <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>.
          </span>
        </p>
      ) : null}

      {produtos.length > 0 ? (
        <div className="encomendar-conteudo">
          <Encomenda produtos={produtos} />

          <div className="encomendar-tabela-area">
            <h3 className="encomendar-subtitulo">Resumo de preços</h3>
            <table className="encomendar-tabela">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Medida</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.nome}</td>
                    <td>{produto.medida === 'cento' ? 'Cento' : 'Unidade'}</td>
                    <td>{formatarPreco(produto.preco)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Valores sujeitos a alteração conforme a encomenda.</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Encomendar;
