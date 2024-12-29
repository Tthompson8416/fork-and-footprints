import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WorldMap from "./pages/WorldMap";
import CountryDetail from "./pages/CountryDetail";
import RecipeCollection from "./pages/RecipeCollection";
import Recipe1 from "./pages/Recipe1";
import Recipe1 from "./pages/Recipe2";
import Recipe1 from "./pages/Recipe3";
import Recipe1 from "./pages/Recipe4";
import Recipe1 from "./pages/Recipe5";
import Recipe1 from "./pages/Recipe6";
import Recipe1 from "./pages/Recipe7";
import Recipe1 from "./pages/Recipe8";
import Recipe1 from "./pages/Recipe9";
import Recipe1 from "./pages/Recipe10";
import Recipe1 from "./pages/Recipe11";
import Recipe1 from "./pages/Recipe12";
import Recipe1 from "./pages/Recipe13";
import Recipe1 from "./pages/Recipe14";
import Recipe1 from "./pages/Recipe15";
import Recipe1 from "./pages/Recipe16";
import Recipe1 from "./pages/Recipe17";
import Recipe1 from "./pages/Recipe18";
import Recipe1 from "./pages/Recipe19";
import Recipe1 from "./pages/Recipe20";
import Recipe1 from "./pages/Recipe21";
import Recipe1 from "./pages/Recipe22";
import Recipe1 from "./pages/Recipe23";
import Recipe1 from "./pages/Recipe24";
import Recipe1 from "./pages/Recipe25";
import Recipe1 from "./pages/Recipe26";
import Recipe1 from "./pages/Recipe27";
import Recipe1 from "./pages/Recipe28";
import Recipe1 from "./pages/Recipe29";
import Recipe1 from "./pages/Recipe30";
import Recipe1 from "./pages/Recipe31";
import Recipe1 from "./pages/Recipe32";
import Recipe1 from "./pages/Recipe33";



function App() {
  return (
    <Router basename="/fork-and-footprints">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worldmap" element={<WorldMap />} />
          <Route path="/recipes" element={<RecipeCollection />} />
          <Route path="/recipes/recipe1" element={<Recipe1 />} />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;