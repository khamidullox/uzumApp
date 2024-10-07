import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectRuter from "./components/ProtectRuter";
import MainLayout from "./layout/MainLayout";
import { useSelector } from "react-redux";
//pages
import { Home, About, Login, Registor, ErrorPage } from "./pages";
import ListOtchet from "./pages/ListOtchet";
//action
import { action as registorAction } from "./pages/Registor";
import { action as loginAction } from "./pages/Login";
import { action as homeAction } from "./pages/Home";
function App() {
  const { user } = useSelector((state) => state.user);
  let routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRuter user={user}>
          <MainLayout />
        </ProtectRuter>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          action: homeAction,
        },
        {
          path: "/about",
          element: <About />,
          action: homeAction,
        },
        {
          path: "/list",
          element: <ListOtchet />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: loginAction,
      errorElement: <ErrorPage />,
    },
    {
      path: "/registor",
      element: user ? <Navigate to="/" /> : <Registor />,
      action: registorAction,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={routers} />;
}
export default App;
