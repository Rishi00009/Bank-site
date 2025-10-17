import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Pages/Page1';
import './App.css';
import Intro from './Pages/Intro';
import Overview from './Pages/Overview';
import TypesofBF from './Pages/TyesofBF';
import LoanProducts from './Pages/LoanProducts';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/types" element={<TypesofBF />} />
          <Route path="/loans" element={<LoanProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;