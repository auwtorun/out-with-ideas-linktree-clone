import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Page />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;