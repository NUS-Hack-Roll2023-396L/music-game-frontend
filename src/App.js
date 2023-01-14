import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SelectSongPage from "./pages/SelectSongPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/select-song" element={<SelectSongPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
