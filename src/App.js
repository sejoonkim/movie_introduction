import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

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
