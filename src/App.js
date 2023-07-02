import About from "./componets/About";
import Home from "./componets/Home";
import NavBar from "./componets/NavBar";
import SocialLinks from "./componets/SocialLinks";
import Project from "./componets/Project";
import Experience from "./componets/Experience";
import Contact from "./componets/Contact";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <About/>
    <Project/>
    <Experience/>
    <Contact/>
    <SocialLinks/>
    </div>
  );
}

export default App;
