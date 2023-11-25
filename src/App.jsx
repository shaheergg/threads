import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Feed from "./pages/Feed";
import Search from "./pages/Search";

function App() {
  return (
    <div className="text-content">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
