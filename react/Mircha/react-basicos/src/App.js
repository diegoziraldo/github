import logo from './logo.svg';
import {ComponenteClase, ComponenteFuncional} from './components/Componente';
import { Propiedades } from './components/Propiedades';
import Estado from './components/Estado' 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <section>
        <ComponenteClase msg='Hola soy un componente de clase'/> {/* Aca estamos pasando una propiedad desde el componente. */}
        <ComponenteFuncional msg='Hola soy un componente funcional'/>
        <hr/>
        <Propiedades 
          cadena='Esto es una cadena de texto' 
          numero = {20}
          buleano = {true}
          arreglo = {['pepe',12,'true']}
          objeto = {{Nombre: 'Diego', Apellido: 'Ziraldo'}}
          funcion = {(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<ComponenteClase ComponenteClase msg='Hola soy un componente de clase pasado como Props'/>}
          />
          <hr/>
          <Estado />
      </section>
      </header>
    </div>
  );
}

export default App;
