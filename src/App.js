import { useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import Prices from "./components/prices/Prices";
import Terms from "./components/ui/Terms";

function App() {
  const [toggleTerms, setToggleTerms] = useState(false);
  const handleToggleTerms = ( )=> {
    setToggleTerms(!toggleTerms)
  }
  return (
    <div className="App">

        <Navbar/>
        <Header/>
        <Prices handleToggleTerms={handleToggleTerms}/>
        <Contact/>
        <Footer handleToggleTerms={handleToggleTerms}/>
        {toggleTerms && <Terms closeModal={handleToggleTerms}/>}
    </div>
  );
}

export default App;
