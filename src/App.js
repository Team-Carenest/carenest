import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Welcome from './components/welcome/Welcome';
import Login from './components/welcome/Login';
import Register from './components/welcome/Register';
import SearchPage from './components/SearchPage/SearchPage';
import "./components/profiles/profileCard.css"
import ParentProfile from './components/profiles/ParentProfile';
import NannyProfile from './components/profiles/NannyProfile';
import MessagePage from './components/messaging/MessagePage';
import Calendar from './components/calendar/Calendar';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App-header">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/parent/elsie" element={<ParentProfile />} />
        <Route path="/nanny/maria" element={<NannyProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/parent/search" element={<SearchPage />} />
        <Route path="/parent/messaging/maria-ament" element={<MessagePage />} />
        <Route path="/nanny/maria/schedule" element={<Calendar />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;