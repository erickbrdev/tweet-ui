import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import Sidebar from "./components/Sidebar";
import Tweet from "./components/Tweet";
import Header from "./components/Header";
import { Separator } from "./components/Separator";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// TS = Ferramenta de tipagem estática para o JavaScript
// Tipagem estática: Mecanismo para evitar erros ENQUANTO a gente ta desenvolvendo nosso app

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
