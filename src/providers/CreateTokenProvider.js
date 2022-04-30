export const createTokenProvider = () => {
  let _token = localStorage.getItem('REACT_TOKEN_AUTH')
    ? JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH') || '')
    : null;

  console.log(_token);
  console.log(new Date(1000 * _token.created_at));
  console.log(new Date(1000 * (_token.created_at + _token.expires_in)));

  const getExpirationDate = (jwtToken) => {
    if (!jwtToken) {
      return null;
    }

    const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

    // multiply by 1000 to convert seconds into milliseconds
    return jwt && jwt.exp ? jwt.exp * 1000 : null;
  };

  const isExpired = (exp) => {
    if (!exp) {
      return false;
    }

    return Date.now() > exp;
  };

  const getToken = async () => {
    if (!_token) {
      return null;
    }
    console.log('asd');
    console.log(_token);

    if (isExpired(getExpirationDate(_token.accessToken))) {
      const updatedToken = await fetch('/update-token', {
        method: 'POST',
        body: _token.refreshToken
      }).then((r) => r.json());

      setToken(updatedToken);
    }

    return _token && _token.accessToken;
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
    getToken,
    isLoggedIn,
    setToken,
    subscribe,
    unsubscribe
  };
};
