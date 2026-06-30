function Dashboard(): JSX.Element {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Chips Balance</h3>
          <p className="text-3xl font-bold text-green-500 mt-2">10,000</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Games Played</h3>
          <p className="text-3xl font-bold text-blue-500 mt-2">0</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Win Rate</h3>
          <p className="text-3xl font-bold text-yellow-500 mt-2">0%</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <p className="text-gray-400">No recent activity</p>
      </div>
    </div>
  );
}

export default Dashboard;
