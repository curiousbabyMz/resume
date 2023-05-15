import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

// module?.["hot"]?.accept();

const container = document.querySelector("#app") || document.body;
const root = createRoot(container);
root.render(<App />);
