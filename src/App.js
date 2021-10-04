import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import CardContent from './components/CardContent/CardContent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <SearchBar />
      </header>
     <body>
      <CardContent />
     </body>
    </div>
  );
}

export default App;
