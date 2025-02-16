import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Food from "./Components/Food";
import Category from "./Components/Category";
function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Hero/>
     <Cards/>
     <Food/>
     <Category/>
    </div>
  );
}

export default App;

