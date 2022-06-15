import './App.css';
import MainPage from './sections/Main/Main';
import Filtered from './sections/Filtered/Filtered';
import Header from './components/Header/Header';
import { CharactersContextProvider } from './providers/CharactersContext';

function App() {
  return (
    <div className="App">
      <CharactersContextProvider>
        <Header/>
        <MainPage/>
        <Filtered/>
      </CharactersContextProvider>
    </div>
  );
}

export default App;
