import { useState } from 'react';

export default function useTokenAdmin() {
  const getToken = () => {
    const tokenString = localStorage.getItem('silexia_admin_token');
    const userToken = tokenString !== 'undefined' ? JSON.parse(tokenString) : null;

    return userToken;
  }

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('silexia_admin_token', JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}