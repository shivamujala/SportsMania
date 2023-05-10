import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import User from "./components/user";
import CreateTournament from "./components/user/CreateTournament";
import ManagePlayer from "./components/user/ManagePlayer";
import ManageScores from "./components/user/ManageScore";
import Register from "./components/main/Register";
import UserAuth from "./auth/UserAuth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Navigate to="/main/home" />} />
            <Route path="main" element={<Main />} >
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Register />} />
            </Route>
            <Route path="user" element={ <UserAuth> <User /> </UserAuth>} >
                <Route path="createtournament" element={<CreateTournament />} />
                <Route path="ManagePlayer" element={<ManagePlayer />} />
                <Route path="ManageScores" element={<ManageScores />} />
                <Route path="ManageTeam" element={<CreateTournament />} />
                <Route path="createtournament" element={<CreateTournament />} />
                

            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
