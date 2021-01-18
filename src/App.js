import logo from "./logo.svg";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
