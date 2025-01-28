import "./App.css";
import Barchart from "./components/Barchart/Barchart";
import Features from "./components/Features/Fetures";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold  text-center m-5">My Featured Gym</h1>
      <Navbar/>
      <Features/>
      <Barchart/>
    </>
  );
}

export default App;
