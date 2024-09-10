import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./homePage.jsx";
import Project1 from "./weather-project.jsx";
import Project2 from "./blog-site.jsx";
import Project3 from "./ecommerce_site.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather-project" element={<Project1 />} />
        <Route path="/blog-site" element={<Project2 />} />
        <Route path="/ecommerce-site" element={<Project3 />} />
      </Routes>
    </Router>
  );
}

export default App;