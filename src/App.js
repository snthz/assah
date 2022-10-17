import Header from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import Prices from "./components/prices/Prices";

function App() {
  return (
    <div className="App">

        <Navbar/>
        <Header/>
        <Prices/>
    </div>
  );
}

export default App;
