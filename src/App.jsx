import { Button } from "@material-tailwind/react";
import { DefaultStepper } from "./components/DefaultStepper";
import Home from "./pages/Home";
import { DefaultStepper2 } from "./components/DefaultStepper2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyClaimsTable from "./components/MyClaimsTable";
import ProfilePage from "./components/ProfilePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/claims" element={<DefaultStepper2 />} />
      <Route path="/user" element={<DefaultStepper />} />
      <Route path="/myclaims" element={<MyClaimsTable />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
