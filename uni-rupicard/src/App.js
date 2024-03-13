import logo from "./logo.svg";
import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <img src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png" /> */}
      <div className="bg image1">
        <FirstPage />
      </div>
      <div className="bg image2">
        <SecondPage />
      </div>
      <div className="bg image3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
