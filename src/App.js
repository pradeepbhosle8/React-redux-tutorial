
import './App.css';
import Navbar from './layout/Navbar';

import Sidebar from './layout/Sidebar';
import Home from './pages/Screens/Home';
import About from './pages/Screens/About';
import Contact from './pages/Screens/Contact';
import Faq from './pages/Screens/Faq';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Navbar />

  
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          
        </Routes>
     </Router>
    
    </>
  );
}

export default App;
