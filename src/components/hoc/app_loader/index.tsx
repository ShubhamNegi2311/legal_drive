/* REACT */
import React from 'react';
import { View } from 'react-native';

/** MODULES */
import NetInfo from '@react-native-community/netinfo';

/* CUSTOM MODULES */
import LoaderComponent from 'components/molecules/loader_component';
import NoInternet from 'components/molecules/no_internet';
import { useAppDataContext } from 'contexts/app_data_context';
import { NetworkContext } from 'contexts/network_provider';

/* STYLE */
import { style } from './style';

type AppLoaderProps = {
  children: React.ReactNode;
};

const AppLoader: React.FC<AppLoaderProps> = (props) => {
  const {
    appDataState: { isLoading }
  } = useAppDataContext();
  const { isConnected, setIsConnected } = React.useContext(NetworkContext);

  React.useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = state.isConnected && state.isInternetReachable;
      setIsConnected(offline ?? true);
    });
    return () => removeNetInfoSubscription();
  }, []);

  return (
    <View style={style.mainContainer}>
      {!isConnected ? <NoInternet /> : false}
      {props.children}
      {isLoading ? <LoaderComponent /> : null}
    </View>
  );
};

export default AppLoader;
