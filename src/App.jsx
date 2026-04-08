
import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import MainContent from "./components/MainContent";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        <WelcomeScreen onOpen={() => setOpen(true)} />
      ) : (
        <MainContent />
      )}
    </>
  );
}

export default App;