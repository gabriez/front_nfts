import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./Contexts/AppProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_API_KEY}`);

function App() {
  return (
    <AppProvider>
      <div className="FontRegular">
        <HashRouter>
          <Elements stripe={stripePromise}>
            <AppRoutes />
          </Elements>
        </HashRouter>
      </div>
    </AppProvider>
  );
}

export default App;
