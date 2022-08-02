import AppSecure from "./components/AppSecure";
import { QuoteProvider } from "./context/QuoteProvider";

function App() {
  return (
    <QuoteProvider>
      <AppSecure />;
    </QuoteProvider>
  );
}

export default App;
