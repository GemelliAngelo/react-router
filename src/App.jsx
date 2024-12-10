import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/Posts" Component={PostsPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
