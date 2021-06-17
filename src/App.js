import "./App.css";
import Cover from "./components/Head";
import Info from "./components/Info";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Cover />
      <Info />
      <Details />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
