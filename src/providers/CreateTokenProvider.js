import { APIService } from '../services/APIService';

export const createTokenProvider = () => {
  let _token = localStorage.getItem('REACT_TOKEN_AUTH')
    ? JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH') || '')
    : null;

  const getExpirationDate = () => {
    if (!_token) return;
    return new Date(1000 * (_token.created_at + _token.expires_in));
  };

  const isExpired = () => {
    if (!_token) return;
    return Date.now() > getExpirationDate();
  };

  const getToken = async () => {
    if (!_token) {
      return null;
    }

    if (isExpired()) {
      const res = await APIService().fetchRefreshToken({
        refresh_token: _token.refresh_token
      });
      if (res.status === 200) {
        setToken(res.data);
      }
    }

    return _token && _token.access_token;
  };

  const getRoles = () => {
    if (!_token) {
      return [];
    }

    return _token && _token.roles;
  };

  const isLoggedIn = () => {
    return !!_token;
  };

  let observers = [];

  const subscribe = (observer) => {
    observers.push(observer);
  };

  const unsubscribe = (observer) => {
    observers = observers.filter((_observer) => _observer !== observer);
  };

  const notify = () => {
    const isLogged = isLoggedIn();
    observers.forEach((observer) => observer(isLogged));
  };

  const setToken = (token) => {
    if (token) {
      localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
    } else {
      localStorage.removeItem('REACT_TOKEN_AUTH');
    }
    _token = token;
    notify();
  };

  return {
    getRoles,
    getToken,
    isLoggedIn,
    setToken,
    subscribe,
    unsubscribe
  };
};
