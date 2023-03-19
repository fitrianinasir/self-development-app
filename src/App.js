import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login.js'
import Register from './Pages/Register/Register'

import CssBaseline from '@mui/material/CssBaseline'

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
       <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
