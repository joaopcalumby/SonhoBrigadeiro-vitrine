import './App.css';
import Cabecalho from './components/Cabecalho';
import Destaque from './components/Destaque';
import Sobre from './components/Sobre';
import Cardapio from './components/Cardapio';
import Encomenda from './components/Encomenda';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="pagina">
      <Cabecalho />
      <main>
        <Destaque />
        <Sobre />
        <Cardapio />
        <Encomenda />
      </main>
      <Rodape />
    </div>
  );
}

export default App;
