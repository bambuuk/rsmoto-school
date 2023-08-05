import AboutBikes from "./components/AboutBikes";
import AboutStudying from "./components/AboutStudying";
import CustomerContacts from "./components/CustomerContacts";
import Gifts from "./components/Gifts";
import Header from "./components/Header";
import Instructor from "./components/Instructor";
import Promo from "./components/Promo";
import Application from './components/Application';

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
        <Application />
      </main>
    </div>
  );
}

export default App;
