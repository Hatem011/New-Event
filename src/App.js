import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from "./Components/Intro/Intro"
import About from "./Components/About/About"
import Overview from "./Components/Overview/Overview"
import WatchVideo from './Components/WatchVideo/WatchVideo';
import Speakers from './Components/Speakers/Speakers';
import Programs from './Components/Programs/Programs';
import Sponsers from './Components/Sponsers/Sponsers';
import Register from './Components/Register/Register';
import Acordion from './Components/Acordion/Acordion';
import Venue from './Components/Venue/Venue';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Overview/>
      <WatchVideo/>
      <Speakers/>
      <Programs/>
      <Register/>
      <Acordion/>
      <Venue/>
      <Sponsers/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
