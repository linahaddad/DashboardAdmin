import React from "react";
import { Routes, Route } from "react-router-dom";
import AppRoutes from "../../Routes/index";

function PageContent() {
  return (
    <Routes>
      <Route element={<AppRoutes />} />
    </Routes>
  );
}

export default PageContent;
