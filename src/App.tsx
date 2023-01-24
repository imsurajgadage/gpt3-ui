import { Brands, CTA, Navbar } from "./Components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./Containers";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA /> {/* Click To Action */}
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
