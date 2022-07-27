import { useState } from "react";
import Footer from "./Components/Footer";
import FormInput from "./Components/FormInput";
import Header from "./Components/Header";
import Main1 from "./Components/Main1";
import Main2 from "./Components/Main2";
import Main3 from "./Components/Main3";
import Main4 from "./Components/Main4";
import "./styles/main.scss";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="wrapper">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <FormInput />
      <Footer />
    </div>
  );
};

export default App;
