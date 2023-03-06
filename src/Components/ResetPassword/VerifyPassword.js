import "./VerifyPassword.css";
function VerifyPassword() {
  return (
    <div className="verify-parent-container">
      <div className="verify-container">
        <h1>Reset Password</h1>
        <p>Create your new password</p>
        <form>
          <div className="form-control">
            <input type="password" placeholder="New password"></input>
            <input type="password" placeholder="Type it again"></input>
            <buton className="done">Done</buton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifyPassword;
