import LandingPage from "./pages/LandingPage/LandingPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/ContactPage/Contact";
import { Navigate } from "react-router-dom";

export default function App (){

  return(
    <LandingPage/>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

