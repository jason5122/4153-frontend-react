import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../css_files/Login.css';

const CLIENT_ID = '995428435527-efr741fda6auid8cove2tmf4crtl6cmr.apps.googleusercontent.com';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log('Google Login Successful:', credentialResponse);
    navigate('/'); // Navigate to home page on successful Google login
  };

  const handleGoogleLoginError = () => {
    console.error('Google Login Failed');
    setError('Google login failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="login-container">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <div className="google-login">
          <h3>Login with Google:</h3>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
