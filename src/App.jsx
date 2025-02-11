import { Navbar } from "./components/Navbar";
import Home from "./components/home";
import Aboute from "./components/Aboute";
import Project from "./components/Project";
import { Footer } from "./components/Footer";



function App(){
  return(
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home />
      <Aboute/>
      <Project/>
      <Footer/>

    </div>
  )
}

export default App;