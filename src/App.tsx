import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import  Project_page  from "./pages/projects_page";
import Contact_Page from "./pages/contact";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Home/> }/>
          <Route path="/home" element={<Home/>}/>

          <Route path="/projects_page" element={<Project_page/>}/>
          <Route path="/contact" element={<Contact_Page/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
