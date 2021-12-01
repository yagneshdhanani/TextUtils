import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import CustomAlert from "./components/CustomAlert";

const colorArr = [
  {
    type: "primary",
    name: "Blue",
    color: "#112f82",
    backgroundColor: "#051c42",
  },
  {
    type: "secondary",
    name: "Gray",
    color: "#5e6161",
    backgroundColor: "#434444",
  },
  {
    type: "success",
    color: "#1f502a",
    name: "Green",
    backgroundColor: "#092403",
  },
  {
    type: "danger",
    color: "#992124",
    name: "Red",
    backgroundColor: "#64080a",
  },
  {
    type: "warning",
    color: "#d3cd17",
    name: "Yellow",
    backgroundColor: "#a39e0a",
  },
  {
    type: "info",
    color: "#1dcbdb",
    name: "Sky Blue",
    backgroundColor: "#0a96a3",
  },
  {
    type: "dark",
    color: "#383838",
    name: "Dark",
    backgroundColor: "#141414",
  },
  {
    type: "light",
    color: "#d6e3da",
    name: "Light",
    backgroundColor: "#c1c1c1",
  },
];

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
