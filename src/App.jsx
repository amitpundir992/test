import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Error } from "./pages/Error404";
import { Blog } from "./pages/blog-single";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404Error" element={<Error />} />
        <Route path="/blog-single" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
