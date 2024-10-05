import { useEffect } from "react";
import AOS from "aos";
import { Home } from "./components/Pages";


function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
     <Home />
    </>
  )
}

export default App
