import Page from "./pages/page";
import Login from "./pages/Login";
import { MantineProvider } from "@mantine/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// This is new
function App() {
  return (
    <MantineProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
