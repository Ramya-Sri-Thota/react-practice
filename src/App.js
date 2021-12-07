import React from "react";
import { Navbar } from "./Practice/Navbar";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Practice/components/Home";
import { Features } from "./Practice/components/Features";
import { Pricing } from "./Practice/components/Pricing";
import { Services } from "./Practice/components/Services";
import { Contact } from "./Practice/components/Contact";
import { PropsPass } from "./Practice/PropsPass";
import { Counter } from "./Practice/components/Counter";
import { CounterComponents } from "./Practice/components/CounterComponents";
import { Task } from "./Practice/Task";
import TextChange from "./Practice/TextChange";
import { TextAlwaysChange } from "./Practice/components/TextAlwaysChange";
import { ShowHide } from "./Practice/showHide";
import { Slides } from "./Practice/components/Slides";
import { CardList } from "./Practice/CardList";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route exact path="/" element={<Home />}></Route>
    //     <Route exact path="/features" element={<Features />}></Route>
    //     <Route exact path="/pricing" element={<Pricing />}></Route>
    //     <Route exact path="/services" element={<Services />}></Route>
    //     <Route exact path="/contact" element={<Contact />}></Route>
    //   </Routes>
    // </BrowserRouter>
    // <PropsPass />
    // <Task />
    // <TextChange />
    // <TextAlwaysChange />
    //<ShowHide />
    //<Slides />
    <CardList name="ramya" />
  );
};

export default App;
