import AboutStudying from "./components/AboutStudying";
import CustomerContacts from "./components/CustomerContacts";
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
      </main>
    </div>
  );
}

export default App;
