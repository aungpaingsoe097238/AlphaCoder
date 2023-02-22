import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";

const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
