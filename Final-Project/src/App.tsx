
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default App;
