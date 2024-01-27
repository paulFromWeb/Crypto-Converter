import "./App.css";
import Home from "./pages/Home";
import { CryptoContextProvider } from "./context/crypto-context";

function App() {
  return (
    <>
      <CryptoContextProvider>
        {/* Here should be React.Router but we need only 1 page so I did it so */}
        <Home />
      </CryptoContextProvider>
    </>
  );
}

export default App;
