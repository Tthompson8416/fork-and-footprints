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
import Recipe2 from "./pages/Recipe2";
import Recipe3 from "./pages/Recipe3";
import Recipe4 from "./pages/Recipe4";
import Recipe5 from "./pages/Recipe5";
import Recipe6 from "./pages/Recipe6";
import Recipe7 from "./pages/Recipe7";
import Recipe8 from "./pages/Recipe8";
import Recipe9 from "./pages/Recipe9";
import Recipe10 from "./pages/Recipe10";
import Recipe11 from "./pages/Recipe11";
import Recipe13 from "./pages/Recipe13";
import Recipe14 from "./pages/Recipe14";
import Recipe15 from "./pages/Recipe15";
import Recipe16 from "./pages/Recipe16";
import Recipe17 from "./pages/Recipe17";
import Recipe18 from "./pages/Recipe18";
import Recipe19 from "./pages/Recipe19";
import Recipe20 from "./pages/Recipe20";
import Recipe21 from "./pages/Recipe21";
import Recipe22 from "./pages/Recipe22";
import Recipe23 from "./pages/Recipe23";
import Recipe24 from "./pages/Recipe24";
import Recipe25 from "./pages/Recipe25";
import Recipe26 from "./pages/Recipe26";
import Recipe27 from "./pages/Recipe27";
import Recipe28 from "./pages/Recipe28";
import Recipe29 from "./pages/Recipe29";
import Recipe30 from "./pages/Recipe30";
import Recipe31 from "./pages/Recipe31";
import Recipe32 from "./pages/Recipe32";
import Recipe33 from "./pages/Recipe33";



function App() {
  return (
    <Router basename="/fork-and-footprints">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worldmap" element={<WorldMap />} />
          <Route path="/recipes" element={<RecipeCollection />} />
          <Route path="/recipes/recipe1" element={<Recipe1 />} />
          <Route path="/recipes/recipe1" element={<Recipe2 />} />
          <Route path="/recipes/recipe1" element={<Recipe3 />} />
          <Route path="/recipes/recipe1" element={<Recipe4 />} />
          <Route path="/recipes/recipe1" element={<Recipe5 />} />
          <Route path="/recipes/recipe1" element={<Recipe6 />} />
          <Route path="/recipes/recipe1" element={<Recipe7 />} />
          <Route path="/recipes/recipe1" element={<Recipe8 />} />
          <Route path="/recipes/recipe1" element={<Recipe9 />} />
          <Route path="/recipes/recipe1" element={<Recipe10 />} />
          <Route path="/recipes/recipe1" element={<Recipe11 />} />
          <Route path="/recipes/recipe1" element={<Recipe12 />} />
          <Route path="/recipes/recipe1" element={<Recipe13/>} />
          <Route path="/recipes/recipe1" element={<Recipe14/>} />
          <Route path="/recipes/recipe1" element={<Recipe15/>} />
          <Route path="/recipes/recipe1" element={<Recipe16/>} />
          <Route path="/recipes/recipe1" element={<Recipe17/>} />
          <Route path="/recipes/recipe1" element={<Recipe18/>} />
          <Route path="/recipes/recipe1" element={<Recipe19/>} />
          <Route path="/recipes/recipe1" element={<Recipe20/>} />
          <Route path="/recipes/recipe1" element={<Recipe21 />} />
          <Route path="/recipes/recipe1" element={<Recipe22/>} />
          <Route path="/recipes/recipe1" element={<Recipe23/>} />
          <Route path="/recipes/recipe1" element={<Recipe24 />} />
          <Route path="/recipes/recipe1" element={<Recipe25/>} />
          <Route path="/recipes/recipe1" element={<Recipe26/>} />
          <Route path="/recipes/recipe1" element={<Recipe27/>} />
          <Route path="/recipes/recipe1" element={<Recipe28/>} />
          <Route path="/recipes/recipe1" element={<Recipe29/>} />
          <Route path="/recipes/recipe1" element={<Recipe30/>} />
          <Route path="/recipes/recipe1" element={<Recipe31/>} />
          <Route path="/recipes/recipe1" element={<Recipe32/>} />
          <Route path="/recipes/recipe1" element={<Recipe33/>} />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;