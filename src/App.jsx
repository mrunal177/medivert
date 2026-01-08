import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Landingpage from "./components/landingpage";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <>
      <Navbar />
      <Landingpage />
    </>
  );
}

export default App;
