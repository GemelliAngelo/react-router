// # IMPORT ROUTES FUNCTION
import { BrowserRouter, Routes, Route } from "react-router-dom";

// # IMPORT ROUTES PAGES

// *Layout
import DefaultLayout from "./layouts/DefaultLayout";

// * Navbar Routes
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";

// * Redirect Routes
import ShowPostPage from "./pages/ShowPostPage";
import NotFound from "./pages/NotFound";

// # IMPORT CONTEXT
import { PostsContextProvider } from "./contexts/PostsContext";

function App() {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/posts" Component={PostsPage} />
            <Route path="/posts/:id" Component={ShowPostPage} />
            <Route path="/not-found" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContextProvider>
  );
}

export default App;
