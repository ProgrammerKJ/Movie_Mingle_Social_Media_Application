import React, { useContext } from "react";
import {
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Profile from "./Profile/Profile";
import { Watchlist } from "./components/watchlist/Watchlist";
import { Watched } from "./components/watchedWatchlist/Watched";
import { Add } from "./components/addWatchlist/Add";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import "../src/lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/globalStateContext";

const queryClient = new QueryClient();

function App() {
  const { currentUser } = useContext(AuthContext);

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar />
          <div style={{ display: "flex" }}>
            <Leftbar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <Rightbar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const SecuredRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <SecuredRoute>
          <Layout />
        </SecuredRoute>
      ),
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/watchlist",
      element: <Watchlist />,
    },
    {
      path: "/watched",
      element: <Watched />,
    },
    {
      path: "/addMovie",
      element: <Add />,
    },
  ]);

  return (
    <div>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </div>
  );
}

export default App;
