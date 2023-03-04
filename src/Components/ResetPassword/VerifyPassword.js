function VerifyPassword() {
  return (
    <div className="verify-parent-container">
      <div className="verify-container">
        <h1>Reset Password</h1>
        <p>Create your new password</p>
        <div>
          <input type="password" placeholder="i.e Example@gmail.com"></input>
          <input type="password" placeholder="i.e Example@gmail.com"></input>
          <buton className="otp-next">Next</buton>
        </div>
      </div>
    </div>
  );
}

export default VerifyPassword;
