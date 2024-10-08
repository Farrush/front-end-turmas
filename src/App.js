import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Turmas from './pages/Turmas';
import AdicionarTurma from './pages/AdicionarTurma';
import AtualizarTurma from './pages/AtualizarTurma';
import Cabecalho from './components/Cabecalho';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Router basename='/'>
          <Cabecalho/>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/login' Component={Login}/>
            <Route path='/turmas' Component={Turmas}/>
            <Route path='/inserir' Component={AdicionarTurma}/>
            <Route path="/alterar/:id" Component={AtualizarTurma}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
