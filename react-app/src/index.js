import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import store from "./redux/store";
import { Provider } from "react-redux";
=======
>>>>>>> 4c9d5650928c096e9a8a71c6344c626dcb8dafc5

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

