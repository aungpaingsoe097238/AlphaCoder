import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";

const Home = lazy(() => import("./components/Home"));

function App() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div
          className="cursor"
          style={{
            transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
          }}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
