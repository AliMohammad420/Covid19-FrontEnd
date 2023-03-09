import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import CovidContextProvider from "./components/context/CovidContext";

function App() {
  return (
    <div className="App">
      <Header />
      <CovidContextProvider>
        <Main />
      </CovidContextProvider>
      <Footer />
    </div>
  );
}

export default App;
