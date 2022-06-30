import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
