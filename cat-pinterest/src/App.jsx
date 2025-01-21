import "./App.css";
import { Routes, Route } from "react-router-dom";

// context
import { CatsProvider } from "./contexts/CatsContext";

// components
import Header from "./components/Header";
import AllCats from "./components/Allcats";
import FavoritesCats from "./components/FavoritesCats";

function App() {
  return (
    <CatsProvider>
      <div className="container mx-auto max-w-1440px">
        <Header />
        <Routes>
          <Route path="/" element={<AllCats />} />
          <Route path="/favorites" element={<FavoritesCats />} />
        </Routes>
        {/* <AllCats className="pl-[62px] pr-[62px]" /> */}
      </div>
    </CatsProvider>
  );
}

export default App;
