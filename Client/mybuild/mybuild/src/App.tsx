import { BrowserRouter } from "react-router-dom";
import HomeRoute from "./components/Home/Board/Routes/HomeRoute";
import LandingPage from "./components/Landing/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <LandingPage />
      <HomeRoute />
    </BrowserRouter>
  );
};

export default App;
