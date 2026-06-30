function Lobby(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Poker Tables</h1>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
          Create Table
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 cursor-pointer">
          <h3 className="text-xl font-bold text-white">Table 1</h3>
          <p className="text-gray-400 mt-2">2/4 players</p>
          <p className="text-yellow-500 mt-2">$0.50/$1.00</p>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Join Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
