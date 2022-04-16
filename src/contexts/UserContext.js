import { createContext } from 'react';

export const UserContext = createContext({
  id: null,
  access_token: null,
  token_type: 'bearer',
  expires_in: null,
  refresh_token: null,
  created_at: null
});
