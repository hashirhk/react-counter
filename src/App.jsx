import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const refresh = () => {
    setCount(0);
  };

  return (
    <div
      className="h-[100vh] flex items-center justify-center flex-col space-y-7 text-white bg-black"
    >
      <div>
      <h1 className="text-4xl font-extrabold tracking-wide mb-4 bg-gradient-to-tr from-orange-500 to-purple-800 bg-clip-text text-transparent">
  Hashiiii Counter!!!
</h1>

      </div>

      <span className="text-5xl font-semibold mb-4">{count}</span>

      <div className="flex space-x-5">
        <button
          className="bg-green-500 rounded-lg px-6 py-3 shadow-lg transform transition duration-300 hover:bg-green-400 hover:-translate-y-1"
          onClick={increase}
        >
          Add
        </button>
        <button
          className="bg-red-500 rounded-lg px-6 py-3 shadow-lg transform transition duration-300 hover:bg-red-400 hover:-translate-y-1"
          onClick={decrease}
        >
          Subtract
        </button>
        <button
          className="bg-blue-500 rounded-lg px-6 py-3 shadow-lg transform transition duration-300 hover:bg-blue-400 hover:-translate-y-1"
          onClick={refresh}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
