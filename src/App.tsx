import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import  Project_page  from "./pages/projects_page";



function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Home/> }/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects_page" element={<Project_page/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
