
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";

import { Private } from "./Private";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin"element={<Private> <Admin/> </Private>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
