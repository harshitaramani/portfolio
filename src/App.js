import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
// import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      {/* <SocialLinks /> */}
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
