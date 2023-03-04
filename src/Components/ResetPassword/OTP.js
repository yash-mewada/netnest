import "../ResetPassword/OTP.css";

function OTP() {
  function handleInputKeyUp(event) {
    const input = event.target;
    const maxLength = input.maxLength;
    const length = input.value.length;
    if (length === maxLength) {
      input.nextSibling.focus();
    }
  }

  return (
    <div className="otp-parent-container">
      <div className="otp-container">
        <h1>Reset Password</h1>
        <p>
          We have sent an OTP (One Time Password) to your registered email
          ph*****@g***.com, please enter <br />
          the 4 digit code to reset your password
        </p>
        <div className="parent-otp-boxes">
          <div className="otp-boxes">
            <input
              type="number"
              className="no-arrows"
              maxLength={1}
              onKeyUp={handleInputKeyUp}
            ></input>
            <input
              type="number"
              className="no-arrows"
              maxLength={1}
              onKeyUp={handleInputKeyUp}
            ></input>
            <input
              type="number"
              className="no-arrows"
              maxLength={1}
              onKeyUp={handleInputKeyUp}
            ></input>
            <input type="number" className="no-arrows" maxLength={1}></input>
          </div>
          <buton className="otp-next">Next</buton>
        </div>
      </div>
    </div>
  );
}

export default OTP;
