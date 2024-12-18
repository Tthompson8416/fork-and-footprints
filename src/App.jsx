import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WorldMap from "./pages/WorldMap";
import CountryDetail from "./pages/CountryDetail";
import RecipeCollection from "./pages/RecipeCollection";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worldmap" element={<WorldMap />} />
          <Route path="/recipes" element={<RecipeCollection />} />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;