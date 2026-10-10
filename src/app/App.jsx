import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/common/ScrollProgress";
import CommandPalette from "../components/interactive/CommandPalette";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import About from "../pages/About";
import Credentials from "../pages/Credentials";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <CommandPalette />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;