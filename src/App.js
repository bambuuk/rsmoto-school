import { useEffect } from "react";

import AboutBikes from "./components/AboutBikes";
import AboutStudying from "./components/AboutStudying";
import CustomerContacts from "./components/CustomerContacts";
import Gifts from "./components/Gifts";
import Header from "./components/Header";
import Instructor from "./components/Instructor";
import Promo from "./components/Promo";
import Application from "./components/Application";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Promo />
        <AboutStudying />
        <Instructor />
        <CustomerContacts />
        <AboutBikes />
        <Gifts />
        <Application />
      </main>
      <Footer />
    </div>
  );
}

export default App;
