import React from "react";
import Navigation from "./components/Navigation";
import HeroCarousel from "./components/HeroCarousel";
import Menu from "./components/Menu";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div style={{ backgroundColor: "#2c2c2c" }}>
      <Navigation />
      <HeroCarousel />
      <Menu />
      <BookingForm />
    </div>
  );
}

export default App;
