import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App";
import FormSample from "../components/FormSample";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/form" element={<FormSample />} />
    </>,
  ),
);
