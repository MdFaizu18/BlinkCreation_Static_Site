import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";

import NotFound from "./layouts/error/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // { path: "/about", element: <About /> },
  // { path: "/service", element: <Service /> },
  // { path: "/projects", element: <Projects /> },
  // { path: "/single-project", element: <SingleProject /> },
  // { path: "/blog", element: <Blog /> },
  // { path: "/blog-details", element: <BlogDetails /> },
  // { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> }, // Catch-all route for undefined paths
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
