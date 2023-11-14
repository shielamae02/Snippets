import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SolanaProvider from "./context/SolanaProvider";


const App = () => {
  return (
    <SolanaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </SolanaProvider>
  );
};

export default App;