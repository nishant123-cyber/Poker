import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Lobby from './pages/Lobby';
import Game from './pages/Game';

function App(): JSX.Element {
  const { user } = useAuthStore();

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
          </>
        ) : (
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/game/:tableId" element={<Game />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
