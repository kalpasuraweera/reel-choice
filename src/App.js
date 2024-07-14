import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useEffect, useState } from "react";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/history" element={<h1>History</h1>} />
            <Route path="/about/team" element={<h1>Team</h1>} />
            <Route path="/about/services" element={<h1>Services</h1>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:name" element={<h1>Contact Us</h1>} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
