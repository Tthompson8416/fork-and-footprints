import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WorldMap from "./pages/WorldMap";
import CountryDetail from "./pages/CountryDetail";
import RecipeCollection from "./pages/RecipeCollection";
import Recipe1 from "./pages/Recipe1";
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
import Recipe12 from "./pages/Recipe12";
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

          <Route
            path="/fork-and-footprints/recipes/belgium/recipe1"
            element={<Recipe1 />}
          />
          <Route
            path="/fork-and-footprints/recipes/belgium/recipe2"
            element={<Recipe2 />}
          />
          <Route
            path="/fork-and-footprints/recipes/belgium/recipe3"
            element={<Recipe3 />}
          />

          <Route
            path="/fork-and-footprints/recipes/belize/recipe1"
            element={<Recipe4 />}
          />
          <Route
            path="/fork-and-footprints/recipes/belize/recipe2"
            element={<Recipe5 />}
          />
          <Route
            path="/fork-and-footprints/recipes/belize/recipe3"
            element={<Recipe6 />}
          />

          <Route
            path="/fork-and-footprints/recipes/canada/recipe1"
            element={<Recipe7 />}
          />
          <Route
            path="/fork-and-footprints/recipes/canada/recipe2"
            element={<Recipe8 />}
          />
          <Route
            path="/fork-and-footprints/recipes/canada/recipe3"
            element={<Recipe9 />}
          />

          <Route
            path="/fork-and-footprints/recipes/croatia/recipe1"
            element={<Recipe10 />}
          />
          <Route
            path="/fork-and-footprints/recipes/croatia/recipe2"
            element={<Recipe11 />}
          />
          <Route
            path="/fork-and-footprints/recipes/croatia/recipe3"
            element={<Recipe12 />}
          />

          <Route
            path="/fork-and-footprints/recipes/france/recipe1"
            element={<Recipe13 />}
          />
          <Route
            path="/fork-and-footprints/recipes/france/recipe2"
            element={<Recipe14 />}
          />
          <Route
            path="/fork-and-footprints/recipes/france/recipe3"
            element={<Recipe15 />}
          />

          <Route
            path="/fork-and-footprints/recipes/germany/recipe1"
            element={<Recipe16 />}
          />
          <Route
            path="/fork-and-footprints/recipes/germany/recipe2"
            element={<Recipe17 />}
          />
          <Route
            path="/fork-and-footprints/recipes/germany/recipe3"
            element={<Recipe18 />}
          />

          <Route
            path="/fork-and-footprints/recipes/italy/recipe1"
            element={<Recipe19 />}
          />
          <Route
            path="/fork-and-footprints/recipes/italy/recipe2"
            element={<Recipe20 />}
          />
          <Route
            path="/fork-and-footprints/recipes/italy/recipe3"
            element={<Recipe21 />}
          />

          <Route
            path="/fork-and-footprints/recipes/mexico/recipe1"
            element={<Recipe22 />}
          />
          <Route
            path="/fork-and-footprints/recipes/mexico/recipe2"
            element={<Recipe23 />}
          />
          <Route
            path="/fork-and-footprints/recipes/mexico/recipe3"
            element={<Recipe24 />}
          />

          <Route
            path="/fork-and-footprints/recipes/netherlands/recipe1"
            element={<Recipe25 />}
          />
          <Route
            path="/fork-and-footprints/recipes/netherlands/recipe2"
            element={<Recipe26 />}
          />
          <Route
            path="/fork-and-footprints/recipes/netherlands/recipe3"
            element={<Recipe27 />}
          />

          <Route
            path="/fork-and-footprints/recipes/portugal/recipe1"
            element={<Recipe28 />}
          />
          <Route
            path="/fork-and-footprints/recipes/portugal/recipe2"
            element={<Recipe29 />}
          />
          <Route
            path="/fork-and-footprints/recipes/portugal/recipe3"
            element={<Recipe30 />}
          />

          <Route
            path="/fork-and-footprints/recipes/spain/recipe1"
            element={<Recipe31 />}
          />
          <Route
            path="/fork-and-footprints/recipes/spain/recipe2"
            element={<Recipe32 />}
          />
          <Route
            path="/fork-and-footprints/recipes/spain/recipe3"
            element={<Recipe33 />}
          />

          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
