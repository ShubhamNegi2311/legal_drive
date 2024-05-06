import React, {createContext} from 'react';

type AuthenticationContextType = {
  isLoggedIn: boolean;
  setUserLoggedIn: (val: boolean) => void;
};
export const AuthenticationContext = createContext<AuthenticationContextType>(
  {} as AuthenticationContextType,
);
type Props = {
  children?: React.ReactNode;
};
const AuthenticationContextProvider = ({children}: Props) => {
  const [isLoggedIn, setLoginValue] = React.useState<boolean>(false);
  const setUserLoggedIn = (value: boolean) => {
    setLoginValue(value);
  };
  const values = {
    isLoggedIn,
    setUserLoggedIn,
  };

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
