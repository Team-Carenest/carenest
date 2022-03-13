import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Welcome from './components/welcome/Welcome';
import Login from './components/welcome/Login';
import Register from './components/welcome/Register';
import SearchPage from './components/SearchPage/SearchPage';

import ParentProfile from './components/profiles/ParentProfile';
import MessagePage from './components/messaging/MessagePage';

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/parent" element={<ParentProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/parent/search" element={<SearchPage />} />
        <Route path="/parent/messaging/maria-ament" element={<MessagePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;