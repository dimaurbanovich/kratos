import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ui/login" element={<Login />} />
      <Route path="/ui/welcome" element={<Welcome />} />
      <Route path="/ui/login" element={<Login />} />
    </Routes>
  );
}

export default App;
