import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = React.lazy(
  () => import(/* webpackChunkName Home */ "../Pages/Home")
);
const Count = React.lazy(
  () => import(/* webpackChunkName Count */ "../Pages/Count")
);

const RootRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </Router>
  );
};

export default RootRouter;
