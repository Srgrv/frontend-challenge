import "./App.css";

// components
import Header from "./components/Header";
import AllCats from "./components/Allcats";

function App() {
  return (
    <div className="container mx-auto max-w-1440px bg-pink-300 pl-[62px] pr-[62px]">
      <Header />
      <AllCats />
    </div>
  );
}

export default App;
