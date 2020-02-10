import React from 'react';

import SpotifyLogin from 'react-spotify-login';

const Login = () => {
  const onSuccess = response => {
    console.log(response);
  };
  const onFailure = response => console.error(response);
  return (
    <div>
      <SpotifyLogin
        clientId='06e092ef90ba49e380c9349cc4302613'
        redirectUri='http://localhost:3000'
        scope='user-follow-modify user-follow-read user-library-read user-top-read'
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default Login;
