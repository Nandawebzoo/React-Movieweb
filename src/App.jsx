import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MoveflixCard from "./components/card";
import Hero from "./components/hero";
import ContactForm from "./components/ContactForm";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AppShell from "./components/appshell";
import Homepage from "./pages/homepage";
import Library from "./pages/library";
import Contact from "./pages/contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppShell />}>
      <Route index element={<Homepage />} />
      <Route path="Library" element={<Library />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
