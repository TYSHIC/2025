import { Route, Routes, useLocation } from "react-router-dom";

import About from "./pages/about.jsx";
import Courses from "./pages/courses.jsx";
import Footer from "./pages/footer.jsx";
import Header from "./pages/header.jsx";
import Home from "./pages/home.jsx";
import Other from "./pages/other.jsx";

function App() {
    const location = useLocation();

    const showFooter = location.pathname !== "/";

    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/other" element={<Other />} />
                </Routes>
            </main>
            {showFooter && <Footer />}
        </div>
    );
}

export default App;
