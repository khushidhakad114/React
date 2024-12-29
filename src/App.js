import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Login />
        <Footer />
      </div>
    </div>
  );
}

export default App;
