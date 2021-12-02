import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import CustomAlert from "./components/CustomAlert";

import colorArr from "./config/color";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const clrObj = colorArr.find((cl) => cl.type === mode);

  const toggleMode = () => {
    document.body.style.backgroundColor = clrObj.color;
    showAlert(`${clrObj.name} Mode has been enabled!`, "success");
  };
  useEffect(() => {
    toggleMode();
    // eslint-disable-next-line
  }, [mode]);

  return (
    <>
      <NavBar mode={mode} setMode={setMode} clrObj={clrObj} title="TextUtils" />
      <CustomAlert alert={alert} />
      {/* <Routes>
        <Route
          exact
          path="/"
          element={ */}
      <TextForm
        heading="Enter the text to analyze below"
        mode={mode}
        showAlert={showAlert}
        clrObj={clrObj}
      />
      {/* }
        />
        <Route exact path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;

// if (mode === "light") {
// setMode("dark");
//   document.body.style.backgroundColor = "#042743";
//   showAlert("Dark Mode has been enabled!", "success");
// } else {
//   document.body.style.backgroundColor = "white";
// setMode("light");
//   showAlert("Light Mode has been enabled!", "success");
// }
