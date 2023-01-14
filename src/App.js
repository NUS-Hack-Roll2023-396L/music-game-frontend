import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SelectSongPage from "./pages/SelectSongPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar/>
      <main className="bg-primary" style={{height: 'calc(100vh - 40px)'}}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/select-song" element={<SelectSongPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
