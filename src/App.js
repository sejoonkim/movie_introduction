import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/movie/:id" component={Movie} />
    </BrowserRouter>
  );
}

export default App;
