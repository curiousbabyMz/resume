import React, { StrictMode } from "react";
import Resume from "./views/Resume";
import ThreejsDemo from "./views/ThreejsDemo";
import { createHashRouter as createRouter, RouterProvider } from "react-router-dom";

const router = createRouter([
  {
    path: "resume",
    element: <Resume />,
  },
  {
    path: "three",
    element: <ThreejsDemo />,
  },
]);

export default () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
