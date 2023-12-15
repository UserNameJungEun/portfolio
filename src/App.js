import "./App.css";
// import { Routes, Route } from "react-router-dom";

import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Main from "./Pages/Main/Main";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Project from "./Pages/Project/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe />
      <Project />

      {/* <Route path="/Main" element={<Main />} />
        <Route path="/AboutMe" element={<AboutMe />} /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
