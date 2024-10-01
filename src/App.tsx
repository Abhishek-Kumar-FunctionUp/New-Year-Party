import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistrantList from "./pages/RegistrantList";
import Header from "./components/Header";
import { store } from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrants" element={<RegistrantList />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
