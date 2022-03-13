import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Welcome from './components/welcome/Welcome';
import Login from './components/welcome/Login';
import Register from './components/welcome/Register';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/parent/search" element={<SearchPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;