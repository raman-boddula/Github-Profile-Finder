import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboards";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
