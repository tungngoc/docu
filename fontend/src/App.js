import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import CategoryList from "./components/Categories/CategoryList";
import HomeCards from "./components/Post/HomeCards/HomeCards";
function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <HomeBanner></HomeBanner>
      <CategoryList></CategoryList>
      <HomeCards></HomeCards>
      <Footer></Footer>
    </div>
  );
}

export default App;
