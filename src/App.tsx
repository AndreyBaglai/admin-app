import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/layout/Topbar";
import Sidebar from "./components/layout/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Invoices from "./pages/Invoices";
import Bar from "./pages/Bar";
import ProfileForm from "./pages/ProfileForm";
// import Line from "./pages/line";
import Pie from "./pages/Pie";
import FAQ from "./pages/Faq";
// import Geography from "./pages/geography";
import Calendar from "./pages/Calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/profile-form" element={<ProfileForm />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                {/*<Route path="/line" element={<Line />} />
            
              <Route path="/geography" element={<Geography />} />
              */}
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
