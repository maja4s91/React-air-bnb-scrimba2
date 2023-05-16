import { useState } from "react";
import Navbar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </>
  );
}

export default App;
