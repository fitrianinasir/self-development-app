import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login/Login.js'
import Register from './Pages/Register/Register'
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import ProjectManager from "./Pages/ProjectManager/ProjectManager.js";
import MoneyManager from "./Pages/MoneyManager/MoneyManager.js";
import HabitTracker from './Pages/HabitTracker/HabitTracker.js'
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
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/money-manager",
      element: <MoneyManager />,
    },
    {
      path: "/habit-tracker",
      element: <HabitTracker />,
    },
    {
      path: "/project-manager",
      element: <ProjectManager />,
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
