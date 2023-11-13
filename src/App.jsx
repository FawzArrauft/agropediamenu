import './App.css';
import Homepagemenu from './components/Homepagemenu';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import Menu4 from './components/Menu4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Minuman1 from './components/Minuman1';
import Minuman2 from './components/Minuman2';
import Menu5 from './components/Menu5';
import Menu6 from './components/Menu6';
import Menu7 from './components/Menu7';
import NewHompage from './components/Newhompage';

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<NewHompage />} />
          <Route path='/Menu1' element={<Menu1 />} />
          <Route path='/Menu2' element={<Menu2 />} />
          <Route path='/Menu3' element={<Menu3 />} />
          <Route path='/Menu4' element={<Menu4 />} />
          <Route path='/Menu5' element={<Menu5 />} />
          <Route path='/Menu6' element={<Menu6 />} />
          <Route path='/Menu7' element={<Menu7 />} />
          <Route path='/Minuman1' element={<Minuman1 />} />
          <Route path='/Minuman2' element={<Minuman2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
