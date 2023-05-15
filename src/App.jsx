import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Test from "./pages/Test";

const Home = lazy(() => import("./pages/Home"));

function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
