import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Liked from "./pages/Liked";
import Playlist from "./pages/Playlist";
import Notfound from "./pages/Notfound";
import Search from "./pages/Search";
import Layout from "./Layout";
// import Footer from "./components/Footer";

function App() {

  const Approuter = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/liked",
          element: <Liked />
        },
        {
          path: "/playlist",
          element: <Playlist />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "*",
          element: <Notfound />
        }]
      }
    ]);
  return (
    <>
    <RouterProvider
    router={Approuter}
    />
    </>
  )
}

export default App
