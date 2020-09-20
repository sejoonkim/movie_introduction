import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Navigation from "./components/Navigation";
import "./App.css";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function App() {
  return (
    <ResponsiveBlock>
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/movie/:id" component={Movie} />
      </BrowserRouter>
    </ResponsiveBlock>
  );
}

export default App;
