import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SelectSongPage from "./pages/SelectSongPage";
import Navbar from "./components/Navbar";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="px-16 py-8 bg-primary">
        {/* <Navbar /> */}
        <main className="" style={{ height: "calc(100vh - 40px)" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/select-song" element={<SelectSongPage />} />
          </Routes>
        </main>
      </div>
    </ChakraProvider>
  );
}

export default App;
