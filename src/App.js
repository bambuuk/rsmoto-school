import AboutBikes from "./components/AboutBikes";
import AboutStudying from "./components/AboutStudying";
import CustomerContacts from "./components/CustomerContacts";
import Gifts from "./components/Gifts";
import Header from "./components/Header";
import Instructor from "./components/Instructor";
import Promo from "./components/Promo";


function App() {
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
      </main>
    </div>
  );
}

export default App;
