import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Welcome from './components/welcome/Welcome';
import LoginRegister from './components/welcome/LoginRegister';

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;