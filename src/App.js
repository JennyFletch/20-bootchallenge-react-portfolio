import './normalize.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {

  return (
    <div className="App">
      
      <Router>
        <Header />
          
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
            <Route exact path="*" element={<About />} />
          </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
