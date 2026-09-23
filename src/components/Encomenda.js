import './Encomenda.css';
import { WHATSAPP, TELEFONE } from '../data/contato';

function Encomenda() {
  return (
    <section className="encomenda secao" id="encomenda">
      <h2 className="secao-titulo">Encomendar</h2>
      <hr className="secao-linha" />
      <div className="encomenda-conteudo">
        <form className="encomenda-formulario">
          <fieldset className="encomenda-grupo">
            <legend className="encomenda-legenda">Seus dados</legend>
            <label className="encomenda-rotulo" htmlFor="nome">Nome completo</label>
            <input className="encomenda-campo" type="text" id="nome" name="nome" />

            <label className="encomenda-rotulo" htmlFor="telefone">Telefone</label>
            <input className="encomenda-campo" type="tel" id="telefone" name="telefone" />
          </fieldset>

          <fieldset className="encomenda-grupo">
            <legend className="encomenda-legenda">Seu pedido</legend>
            <label className="encomenda-rotulo" htmlFor="produto">Produto</label>
            <select className="encomenda-campo" id="produto" name="produto">
              <option value="tradicionais">Brigadeiros tradicionais</option>
              <option value="especiais">Brigadeiros especiais</option>
              <option value="coxinhas">Coxinhas doces</option>
              <option value="charutinhos">Charutinhos</option>
              <option value="cupcakes">Cupcakes</option>
            </select>

            <label className="encomenda-rotulo" htmlFor="quantidade">Quantidade</label>
            <input className="encomenda-campo" type="number" id="quantidade" name="quantidade" min="1" />

            <label className="encomenda-rotulo" htmlFor="data">Data da entrega</label>
            <input className="encomenda-campo" type="date" id="data" name="data" />

            <label className="encomenda-rotulo" htmlFor="observacoes">Sabores e observações</label>
            <textarea className="encomenda-campo" id="observacoes" name="observacoes" rows="4"></textarea>
          </fieldset>

          <a className="botao" href={WHATSAPP} target="_blank" rel="noreferrer">
            Enviar pelo WhatsApp
          </a>
          <p className="encomenda-aviso">
            O pedido é fechado pelo WhatsApp {TELEFONE}, onde a confirmação e o pagamento
            são combinados diretamente com a doceria.
          </p>
        </form>

        <div className="encomenda-tabela-area">
          <h3 className="encomenda-subtitulo">Resumo de preços</h3>
          <table className="encomenda-tabela">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Medida</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brigadeiros tradicionais</td>
                <td>Cento</td>
                <td>R$ 160,00</td>
              </tr>
              <tr>
                <td>Brigadeiros especiais</td>
                <td>Cento</td>
                <td>R$ 170,00</td>
              </tr>
              <tr>
                <td>Coxinhas doces</td>
                <td>Unidade</td>
                <td>R$ 7,00</td>
              </tr>
              <tr>
                <td>Charutinhos</td>
                <td>Unidade</td>
                <td>R$ 6,00</td>
              </tr>
              <tr>
                <td>Cupcakes</td>
                <td>Unidade</td>
                <td>R$ 8,00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Valores sujeitos a alteração conforme a encomenda.</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Encomenda;
