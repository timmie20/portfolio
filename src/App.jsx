import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AppProvider } from "./context/AppContext";
import AssignmentLayout from "./AssignmentLayout";
import AssignmentHome from "./pages/AssignmentHome";
import About from "./pages/About";
import Contact from "./pages/contact";
import Assignment from "./pages/Assignment";

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/assignment" element={<AssignmentLayout />}>
            <Route index element={<AssignmentHome />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="assignment" element={<Assignment />} />
          </Route>
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
