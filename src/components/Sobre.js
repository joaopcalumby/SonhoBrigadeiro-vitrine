import './Sobre.css';
import { RESPONSAVEL } from '../data/contato';

function Sobre() {
  return (
    <section className="sobre secao" id="sobre">
      <h2 className="secao-titulo">Sobre a doceria</h2>
      <hr className="secao-linha" />
      <div className="sobre-conteudo">
        <p className="sobre-texto">
          A <strong>Sonho de Brigadeiro</strong> é uma doceria gourmet conduzida por{' '}
          {RESPONSAVEL}. Não trabalhamos com vitrine pronta: cada pedido é produzido depois
          de encomendado, com os sabores e a quantidade combinados com o cliente.
        </p>
        <h3 className="sobre-subtitulo">Como encomendar</h3>
        <ol className="sobre-passos">
          <li>Escolha os produtos e os sabores no cardápio abaixo.</li>
          <li>Preencha o formulário de encomenda com a quantidade e a data desejada.</li>
          <li>Envie a mensagem pelo WhatsApp para fechar o pedido.</li>
        </ol>
      </div>
    </section>
  );
}

export default Sobre;
