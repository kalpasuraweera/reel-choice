import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import History from "./pages/History";
import Team from "./pages/Team";
import Values from "./pages/Values";
import PersonContact from "./pages/PersonContact";

export const ThemeContext = createContext();

function App() {
  const [mode, setMode] = useState("dark");

  const changeTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
    localStorage.setItem("theme", mode === "light" ? "dark" : "light");
  };
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setMode(localTheme);
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, changeTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/values" element={<Values />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:name" element={<PersonContact />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
