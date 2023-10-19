import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import LogIn from './Components/SigningIn/LogIn';
import PetInformation from './Components/PetManagement/PetInformation';
import ServiceOffered from './Components/ServiceListing/ServiceOffered';
import SignUp from './Components/SigningUp/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from './Components/Master/Master';

function App() {


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="master" element={< Master />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="service" element={<ServiceOffered />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="petinformation" element={<PetInformation />} />
          <Route path="/" element={<LogIn />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
