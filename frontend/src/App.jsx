import { useMemo } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SolanaProvider from "./context/SolanaProvider";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"


const App = () => {
  const endpoint = "https://young-spring-butterfly.solana-devnet.quiknode.pro/2dfccffc7d72dee1340fb39c553f385e68e7f3fa/"

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter()],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <SolanaProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </SolanaProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;