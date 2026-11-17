import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Inicio from './paginas/Inicio';
import Cardapio from './paginas/Cardapio';
import Encomendar from './paginas/Encomendar';
import NaoEncontrada from './paginas/NaoEncontrada';

function App() {
  return (
    <Router>
      <div className="pagina">
        <Cabecalho />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/encomendar" element={<Encomendar />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </main>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;
