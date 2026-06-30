import { Outlet, Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { LogOut } from 'lucide-react';

function Layout(): JSX.Element {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="text-2xl font-bold text-red-500">
                🃏 Poker
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/lobby" className="text-gray-300 hover:text-white">
                Lobby
              </Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
              <span className="text-gray-300">{user?.username}</span>
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
