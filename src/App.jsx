import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Makanan1 from './pages/Makanan1';
import Makanan2 from './pages/Makanan2';
import Makanan3 from './pages/Makanan3';
import Makanan4 from './pages/Makanan4';
import Makanan5 from './pages/Makanan5';
import Makanan6 from './pages/Makanan6';
import Makanan7 from './pages/Makanan7';
import Menuminuman from './pages/Menuminuman';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/Menu1' element={<Makanan1 />} />
        <Route path='/Menu2' element={<Makanan2 />} />
        <Route path='/Menu3' element={<Makanan3 />} />
        <Route path='/Menu4' element={<Makanan4 />} />
        <Route path='/Menu5' element={<Makanan5 />} />
        <Route path='/Menu6' element={<Makanan6 />} />
        <Route path='/Menu7' element={<Makanan7 />} />
        <Route path='/Minuman1' element={<Menuminuman />} />
      </Routes>
    </Router>
  );
}

export default App;
