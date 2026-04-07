

import { useState } from "react";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen bg-pink-100">
      {!opened ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold">You're Invited 💍</h1>
          <button
            onClick={() => setOpened(true)}
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded"
          >
            Open Invitation
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-center text-2xl mt-4">
            John ❤️ Jane
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;