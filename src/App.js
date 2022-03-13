import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Welcome from './components/welcome/Welcome';
import Login from './components/welcome/Login';
import Register from './components/welcome/Register';
import SearchPage from './components/SearchPage/SearchPage';
import "./components/profiles/profileCard.css"
import "./components/profiles/nannyProfile.css"
import "./components/profiles/parentProfile.css"
import ParentProfile from './components/profiles/ParentProfile';
import NannyProfile from './components/profiles/NannyProfile';
import MessagePage from './components/messaging/MessagePage';

function App() {background-color: #C4C4C4;
  color: black;
  return (
    <div className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/parent/elsie" element={<ParentProfile />} />
        <Route path="/nanny/maria" element={<NannyProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/parent/search" element={<SearchPage />} />
        <Route path="/parent/messaging/maria-ament" element={<MessagePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;