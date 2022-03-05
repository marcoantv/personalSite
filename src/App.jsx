import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Aboutme from "./components/aboutme/Aboutme";
import Contact from "./components/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Aboutme />
        <Contact />
        </div>
    </div>
  );
}

export default App;
