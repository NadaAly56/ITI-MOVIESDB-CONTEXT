import './App.css';
import Movies from './Components/Movies';
import MovieContextProvider from './Context/MovieContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MovieContextProvider/>
      </header>
      
    </div>
  );
}

export default App;
