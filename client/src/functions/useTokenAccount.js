import { useState } from 'react';

export default function useTokenAdmin() {
  const getToken = () => {
    const tokenString = localStorage.getItem('silexia_account_token');
    const userToken = tokenString !== '' ? JSON.parse(tokenString) : null;

    return userToken;
  }

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    console.log(userToken);
    localStorage.setItem('silexia_account_token', JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}