import './assets/css/App.css';
import Navbar from './components/NavBar';
import Weatherpanel from './components/WeatherPanel'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Weatherpanel />
    </div>
  );
}

export default App;
