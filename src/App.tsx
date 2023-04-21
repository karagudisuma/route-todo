import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component";
import Todo from "./component/Todo";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todo" element={<Todo />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
