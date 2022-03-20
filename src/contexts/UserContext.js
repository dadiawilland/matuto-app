import { createContext } from "react";

export const OnboardingErrorContext = createContext({
  id: null,
  email: null,
  access_token: null,
  token_type: 'bearer',
  expires_in: null,
  refresh_token: null,
  created_at: null,
});