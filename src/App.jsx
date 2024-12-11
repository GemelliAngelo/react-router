import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import ShowPostPage from "./pages/ShowPostPage";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
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
  );
}

export default App;
