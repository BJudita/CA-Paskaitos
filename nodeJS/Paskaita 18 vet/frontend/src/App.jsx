import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PetList from "./pages/PetPages/PetList";
import MedicationList from "./pages/MedicationPages/MedicationList";
import PetLogs from "./pages/LogsPages/PetLogs";
import AddPetForm from "./pages/PetPages/PetForm";
import AddMedForm from "./pages/MedicationPages/MedicationForm";

function App() {
  return (
    <>
    <div className="inner-body">
    <header>
      <div className="logo">Pawsitively Purrfect</div>
      <div className="menu">
        <p><a href="http://localhost:5174/pets">Pets</a></p>
        <p><a href="http://localhost:5174/medications">Medications</a></p>
        </div>
    </header>
    <Router>
      <Routes>
        <Route path="/pets" element={<PetList />} />
        <Route path="/pets/new" element={<AddPetForm/>} />
        <Route path="/medications" element={<MedicationList />} />
        <Route path="/medications/new" element={<AddMedForm />} />
        <Route path="/logs/pet/:id" element={<PetLogs />} />
      </Routes>
    </Router>
   </div> </>
  );
}

export default App;
