import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "./App.css";

import colorArr from "./config/color";

import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import CustomAlert from "./components/CustomAlert";

import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    switch (type) {
      case "success":
        NotificationManager.success(message, "", 1000);
        break;
      case "warning":
        NotificationManager.warning(message, "", 1000);
        break;
      case "info":
        NotificationManager.info(message, "", 1000);
        break;

      default:
        break;
    }
    // setAlert({
    //   message,
    //   type,
    // });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const clrObj = colorArr.find((cl) => cl.type === mode);

  const toggleMode = () => {
    document.body.style.backgroundColor = clrObj.color;
    showAlert(`${clrObj.name} Mode has been enabled!`, "info");
  };
  useEffect(() => {
    toggleMode();
    // eslint-disable-next-line
  }, [mode]);

  return (
    // <>
    <Router>
      <NavBar setMode={setMode} title="TextUtils" />
      <CustomAlert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="Try TextUtils - word counter, character counter, remove extra spaces"
              mode={mode}
              showAlert={showAlert}
              clrObj={clrObj}
            />
          }
        />
        <Route
          exact
          path="/about"
          element={<About mode={mode} clrObj={clrObj} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <NotificationContainer />
    </Router>
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
