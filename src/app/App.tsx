import { RouterProvider } from "react-router";
import { MotionConfig } from "motion/react";
import { router } from "./routes";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  );
}
