import React, {createContext} from 'react';

type AuthenticationContextType = {
  isLoggedIn: boolean;
  number: string;
  countryCode: string;
  setUserLoggedIn: (val: boolean) => void;
  setUserNumber: (val: string) => void;
  setUserCountryCode: (val: string) => void;
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

  const [number, setNumber] = React.useState<string>('');
  const setUserNumber = (value: string) => {
    setNumber(value);
  };

  const [countryCode, setCountryCode] = React.useState('91');
  const setUserCountryCode = (value: string) => {
    setCountryCode(value);
  };

  const values = {
    isLoggedIn,
    number,
    countryCode,
    setUserLoggedIn,
    setUserNumber,
    setUserCountryCode,
  };

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
