// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
        {/* <Routes>
          <Route index element={<Home/> }/>
          <Route path="/home" element={<Home/>}/>
        </Routes> */}
        <Home/>
    </div>
  );
}

export default App;
