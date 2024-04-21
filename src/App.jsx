import Home from "./component/Home";
import SocialLinks from "./component/SocialLinks";
import  NavBar  from "./component/navbar";
import About from "./component/About";
import Skills from './component/Skills'
import Projects from "./component/Projects";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
        <NavBar/>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <SocialLinks/>
    </div>
  )
}

export default App;