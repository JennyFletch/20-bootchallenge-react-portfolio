import './normalize.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact'

function App() {

  return (
    <div className="App">
      
      <Router>
      <Header />
        
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      <Footer />
      </Router>

    </div>
  );
}

export default App;
