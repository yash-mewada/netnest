import "../Login/Login.css";
import Image from "../Login/Students.png";

function Login() {
  return (
    <div className="Login-Page">
      <div className="image-container">
        <img src={Image} alt="Students" />
      </div>

      <form className="LoginContainer">
        <h1>Welcome Back : )</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <h4>Forgot Password?</h4>
        <button className="LoginButton" type="submit">
          Log In
        </button>
        <h3>Or Sign In Using</h3>
        <button className="GoogleButton">Google</button>
      </form>
    </div>
  );
}

export default Login;
