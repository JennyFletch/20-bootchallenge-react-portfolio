// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="portfolio">
        <Project />
      </div>
      <Footer />
    </div>
  );
}

export default App;
