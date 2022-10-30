import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost/SinglePost";
function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<SinglePost />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
