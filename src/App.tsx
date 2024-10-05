import { useEffect } from "react";
import AOS from "aos";


function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
     <h1 className="text-4xl text-red-300">djhddhghgthfgh</h1>
    </>
  )
}

export default App
