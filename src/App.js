import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import CardContent from './components/CardContent/CardContent';
import SearchContext from './context/SearchContext';

function App() {

  return (
    <SearchContext>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <SearchBar />
        </header>
      <main>
        <CardContent />
      </main>
      </div>
    </SearchContext>
  );
}

export default App;
