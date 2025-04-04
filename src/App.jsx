import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";

const App = () => {
  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <Section title="Indiana Jones" query="Indiana Jones" />
        <Section title="Back to the Future" query="Back to the Future" />
        <Section title="Resident Evil" query="Resident Evil" />
        <Section title="The Karate Kid" query="The Karate Kid" />
        <Section title="Star Trek" query="Star Trek" />
        <Section title="Matrix" query="Matrix" />
        <Section title="Star Wars" query="Star Wars" />
        <Section title="Lord of the Rings" query="Lord of the Rings" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
