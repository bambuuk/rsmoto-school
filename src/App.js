import AboutStudying from "./components/AboutStudying";
import Header from "./components/Header";
import Promo from "./components/Promo";


function App() {
  return (
    <div className="App ">
      <Header />
      <main>
        <Promo />
        <AboutStudying />
      </main>
    </div>
  );
}

export default App;
