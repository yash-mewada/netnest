import "../ResetPassword/ResetPassword.css";

function ResetPassword() {
  return (
    <div className="parent-container">
      <div className="container">
        <h1>Reset Password</h1>
        <p>Enter your registered email to proceed</p>
        <div>
          <input type="text" placeholder="i.e Example@gmail.com"></input>
          <buton className="otp-next">Next</buton>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
