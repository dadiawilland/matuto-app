import { useEffect, useState } from 'react';
import { createTokenProvider } from './CreateTokenProvider';
import { getRolesMap } from '../utils/utils';

export const createAuthProvider = () => {
  const tokenProvider = createTokenProvider();

  const login = (newTokens) => {
    tokenProvider.setToken(newTokens);
  };

  const logout = () => {
    tokenProvider.setToken(null);
  };

  const authFetch = async (input, init) => {
    const token = await tokenProvider.getToken();

    init = init || {};

    init.headers = {
      ...init.headers,
      Authorization: `Bearer ${token}`
    };

    return fetch(input, init);
  };

  const getAccessToken = async () => {
    return await tokenProvider.getToken();
  };

  const useAuth = () => {
    const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());

    useEffect(() => {
      const listener = (newIsLogged) => {
        setIsLogged(newIsLogged);
      };

      tokenProvider.subscribe(listener);
      return () => {
        tokenProvider.unsubscribe(listener);
      };
    }, []);

    return [isLogged];
  };

  const roles = () => {
    const roleIdList = tokenProvider.getRoles();

    return getRolesMap(roleIdList);
  };

  const getId = () => {
    return tokenProvider.getId();
  };

  return {
    authFetch,
    getAccessToken,
    getId,
    login,
    logout,
    roles,
    useAuth
  };
};

export const {
  useAuth,
  getAccessToken,
  getId,
  authFetch,
  login,
  logout,
  roles
} = createAuthProvider();
