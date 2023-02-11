import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio'
import Contacto from './components/paginas/Contacto'
import Premios from './components/paginas/Premios'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Premios' element={<Premios/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
