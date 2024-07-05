import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componants/Navbar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Search from "./pages/Search";
import List from "./pages/List";
import Imgslider from "./pages/Imgslider";
import Checklist from "./pages/Checklist";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/List" element={<List />} />
          <Route path="/Imgslider" element={<Imgslider />} />
          <Route path="/Checklist" element={<Checklist />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
