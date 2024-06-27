import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

const AuthApp = lazy(() => import("src/features/AuthApp"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>page spinner</div>}>
        <AuthApp />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
