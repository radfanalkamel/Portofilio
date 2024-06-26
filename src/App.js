import React from "react";
import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/About/AboutMe";
import Skills from "./Pages/Skills/Skills";
import MyWork from "./Pages/Mywork/MyWork";
import Contact from "./Pages/Contact/Contact";
import Mycv from "./Pages/Radfanalkamel/Mycv";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/نبذة_عني" element={<AboutMe />} />

          <Route path="/سيرتي_الذاتية" element={<Mycv />} />

          <Route path="/مهاراتي" element={<Skills />} />

          <Route path="/أعمالي" element={<MyWork />} />
          
          <Route path="/contact" element={<Contact />} />

          <Route path="/RadfanAlkamel" element={<Mycv />} />
        </Routes>
      </Layout>
  );
}

export default App;
