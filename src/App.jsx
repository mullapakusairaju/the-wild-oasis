import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Error from "./pages/Error";
import AppLayout from "./Layouts/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/dashboard" />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/accounts" element={<Accounts />}></Route>
          <Route path="/bookings" element={<Bookings />}></Route>
          <Route path="/cabins" element={<Cabins />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
