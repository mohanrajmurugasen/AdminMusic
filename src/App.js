import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/users/signIn";
import SignUp from "./components/users/signup";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
