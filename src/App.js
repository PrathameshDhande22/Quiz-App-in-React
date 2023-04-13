import "./App.css";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "animate.css";
import { HomePage } from "./Components/Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { QuizPage } from "./Components/Pages/QuizPage";
import { ErrorPage } from "./Components/Pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
