import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registrer from "./components/Registrer";
import AddFormateur from "./pages/AddFormateur";
import EditUser from "./pages/EditUser";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registrer" element={<Registrer />} />

          <Route path="/formateur" element={<AddFormateur />} />
          <Route path="/users/" element={<EditUser/>} />
          
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
