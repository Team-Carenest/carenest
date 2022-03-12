import './App.css';
import Welcome from './components/welcome/Welcome';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;