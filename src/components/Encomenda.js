import './Encomenda.css';
import { useState } from 'react';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { registrarEncomenda } from '../data/banco';
import { WHATSAPP, TELEFONE } from '../data/contato';
import { formatarPreco, formatarData, dataDeHoje } from '../data/formatos';

function Encomenda(props) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [produtoId, setProdutoId] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [data, setData] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [aviso, setAviso] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);

  const produtoEscolhido = props.produtos.find((produto) => produto.id === Number(produtoId));
  const quantidadeValida = Number(quantidade) > 0;
  const total = produtoEscolhido && quantidadeValida ? produtoEscolhido.preco * Number(quantidade) : 0;

  let rotuloQuantidade = 'Quantidade';
  if (produtoEscolhido) {
    rotuloQuantidade = produtoEscolhido.medida === 'cento' ? 'Quantidade (centos)' : 'Quantidade (unidades)';
  }

  const enviar = async () => {
    if (nome.trim() === '' || telefone.trim() === '' || produtoId === '' || quantidade === '' || data === '') {
      setAviso('Preencha nome, telefone, produto, quantidade e data.');
      return;
    }
    if (!quantidadeValida) {
      setAviso('A quantidade precisa ser maior que zero.');
      return;
    }

    setAviso('');
    setErroEnvio(false);
    setEnviando(true);
    try {
      await registrarEncomenda({
        nome: nome.trim(),
        telefone: telefone.trim(),
        produto_id: Number(produtoId),
        quantidade: Number(quantidade),
        data_entrega: data,
        observacoes: observacoes.trim(),
      });
      setEnviado(true);
    } catch {
      setErroEnvio(true);
    } finally {
      setEnviando(false);
    }
  };

  const novaEncomenda = () => {
    setNome('');
    setTelefone('');
    setProdutoId('');
    setQuantidade('');
    setData('');
    setObservacoes('');
    setEnviado(false);
  };

  if (enviado) {
    const medida = produtoEscolhido.medida === 'cento' ? 'cento(s)' : 'unidade(s)';
    const mensagem =
      'Olá! Acabei de registrar uma encomenda pelo site.\n' +
      'Nome: ' + nome.trim() + '\n' +
      'Pedido: ' + quantidade + ' ' + medida + ' de ' + produtoEscolhido.nome + '\n' +
      'Entrega: ' + formatarData(data) + '\n' +
      'Total estimado: ' + formatarPreco(total) +
      (observacoes.trim() !== '' ? '\nObservações: ' + observacoes.trim() : '');

    return (
      <div className="encomenda-formulario encomenda-sucesso">
        <FiCheckCircle className="encomenda-sucesso-icone" />
        <h3 className="encomenda-subtitulo">Encomenda recebida, {nome.trim()}!</h3>
        <p>
          {quantidade} {medida} de {produtoEscolhido.nome} para {formatarData(data)}, total estimado
          de {formatarPreco(total)}.
        </p>
        <p>Agora é só confirmar pelo WhatsApp para combinar o pagamento e a entrega.</p>
        <a className="botao" href={WHATSAPP + '?text=' + encodeURIComponent(mensagem)} target="_blank" rel="noreferrer">
          <FaWhatsapp /> Confirmar pelo WhatsApp
        </a>
        <button className="botao botao-contorno" type="button" onClick={novaEncomenda}>
          Fazer outra encomenda
        </button>
      </div>
    );
  }

  return (
    <form className="encomenda-formulario">
      <fieldset className="encomenda-grupo">
        <legend className="encomenda-legenda">Seus dados</legend>
        <label className="encomenda-rotulo" htmlFor="nome">Nome completo</label>
        <input className="encomenda-campo" type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} />

        <label className="encomenda-rotulo" htmlFor="telefone">Telefone</label>
        <input className="encomenda-campo" type="tel" id="telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
      </fieldset>

      <fieldset className="encomenda-grupo">
        <legend className="encomenda-legenda">Seu pedido</legend>
        <label className="encomenda-rotulo" htmlFor="produto">Produto</label>
        <select className="encomenda-campo" id="produto" value={produtoId} onChange={(event) => setProdutoId(event.target.value)}>
          <option value="">Escolha um produto</option>
          {props.produtos.map((produto) => (
            <option key={produto.id} value={produto.id}>{produto.nome}</option>
          ))}
        </select>

        <label className="encomenda-rotulo" htmlFor="quantidade">{rotuloQuantidade}</label>
        <input className="encomenda-campo" type="number" id="quantidade" min="1" value={quantidade} onChange={(event) => setQuantidade(event.target.value)} />

        <label className="encomenda-rotulo" htmlFor="data">Data da entrega</label>
        <input className="encomenda-campo" type="date" id="data" min={dataDeHoje()} value={data} onChange={(event) => setData(event.target.value)} />

        <label className="encomenda-rotulo" htmlFor="observacoes">Sabores e observações</label>
        <textarea className="encomenda-campo" id="observacoes" rows="4" value={observacoes} onChange={(event) => setObservacoes(event.target.value)}></textarea>
      </fieldset>

      {total > 0 ? <p className="encomenda-total">Total estimado: {formatarPreco(total)}</p> : null}

      {aviso !== '' ? <p className="encomenda-alerta"><FiAlertCircle /> {aviso}</p> : null}

      {erroEnvio ? (
        <p className="encomenda-alerta">
          <FiAlertCircle /> Não conseguimos registrar sua encomenda. Tente de novo ou chame no WhatsApp {TELEFONE}.
        </p>
      ) : null}

      <button className="botao" type="button" onClick={enviar} disabled={enviando}>
        <FiSend /> {enviando ? 'Enviando...' : 'Enviar encomenda'}
      </button>
      <p className="encomenda-observacao">
        A encomenda fica registrada aqui e é confirmada pelo WhatsApp, onde o pagamento e a entrega
        são combinados diretamente com a doceria.
      </p>
    </form>
  );
}

export default Encomenda;
