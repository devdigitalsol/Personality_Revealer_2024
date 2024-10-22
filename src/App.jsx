import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import QuestionList from "./pages/QuestionList";
import Poster from "./pages/Poster";
import Admin from "./pages/Admin";
import Survey from "./pages/Survey";
import Description from "./pages/Description";

function App() {
  // const ScrollToTop = (props) => {
  //   const location = useLocation();
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [location]);

  //   return <>{props.children}</>;
  // };

  return (
    // <ScrollToTop>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<QuestionList />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/description" element={<Description />} />
      <Route path="/poster" element={<Poster />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    // </ScrollToTop>
  );
}

export default App;
