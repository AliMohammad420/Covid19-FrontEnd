import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Route, Routes } from 'react-router-dom'
import { MyRecords } from "./components/myRecords/MyRecords";
import { AllCountries } from "./components/allCountries/AllCountries";

import CovidContextProvider from "./components/context/CovidContext";

function App() {
  return (
    <div className="App">
      <CovidContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allCountries" element={<AllCountries />} />
          <Route path="/myRecords" element={<MyRecords />} />
        </Routes>
        <Footer />
      </CovidContextProvider>

    </div>
  );
}

export default App;
