import "./App.css";
import Login from "./Components/Login/Login.js";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import OTP from "./Components/ResetPassword/OTP";
import VerifyPassword from "./Components/ResetPassword/VerifyPassword";

function App() {
  return (
    <div className="App">
      {/* <Login />*/}
      {/* <ResetPassword /> */}
      {/* <OTP /> */}
      <VerifyPassword />
    </div>
  );
}

export default App;
