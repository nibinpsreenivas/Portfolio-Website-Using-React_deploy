import { useState, useEffect } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Services from "./views/Services";
import Projects from "./views/Projects";
import Certificate from "./views/Certificate";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    document.title = 'Nibin P Sreenivas';
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <ThemeProvider>
      <>

        {!loading ? (
          <div >
           
            <Navbar />
            <Home />
            <About />
            
            <Projects />
            <Certificate />
            <Services />
            <Contact />
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>

  );
}

export default App;
