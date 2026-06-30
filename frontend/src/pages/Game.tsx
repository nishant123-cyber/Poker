import { useParams } from 'react-router-dom';

function Game(): JSX.Element {
  const { tableId } = useParams();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="poker-table w-4/5 h-3/4 border-4 border-yellow-600 shadow-2xl">
        <div className="flex justify-center items-center h-full">
          <p className="text-2xl text-white">Poker Table {tableId}</p>
        </div>
      </div>
    </div>
  );
}

export default Game;
