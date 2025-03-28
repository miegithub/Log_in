import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import { ScrollToTop } from "./components/common/ScrollToTop";


export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Redirect to SignIn if no match */}
          <Route path="*" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}
