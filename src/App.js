import './App.css';
import Menu from './components/Menu/Menu';
import Citas from './components/Citas';
import Episodios from './components/Episodios/Episodios';
import Personajes from './components/Personajes';
import Home from './components/Home/Home';
import Footer from './components/Footer';

function App() {
  const currentURL = window.location.pathname;

  function renderContent(){
    switch (currentURL) {
      case "/":
        return <Home/>
      case "/personajes":
        return <Personajes/>
      case "/episodios":
        return <Episodios/>
      case "/citas":
          return <Citas/>
      default:
        return <Home/>
    }
  }

  return (
    <div className="App">
      <Menu/>
      <main>
        {renderContent()}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
