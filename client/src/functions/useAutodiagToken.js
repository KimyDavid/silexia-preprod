import { useState } from 'react';

export default function useAutodiagToken() {
  const getToken = () => {
    const savedProgression = localStorage.getItem('silexia_autodiag_token');
    return savedProgression ? JSON.parse(savedProgression) : {};
  }

  const [autodiagToken, setAutodiagToken] = useState(getToken());

  const saveAutodiag = progression => {
    localStorage.setItem('silexia_autodiag_token', JSON.stringify(progression));
    setAutodiagToken(progression);
  };

  return {
    setAutodiagToken: saveAutodiag,
    autodiagToken
  }
}