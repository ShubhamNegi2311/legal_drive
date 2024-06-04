import React from 'react';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import {BLACK, WHITE} from 'styles/colors';
import SignOut from 'assets/images/sign_out.svg';
import Update from 'assets/images/Group.svg';
import {
  HS_10,
  HS_120,
  HS_130,
  HS_20,
  MS_12,
  MS_16,
  MS_18,
  MS_20,
  VS_10,
  VS_20,
  VS_25,
  VS_30,
} from 'styles/mixins';
import {SafeAreaView, Text, View} from '@gluestack-ui/themed';
import {style} from './style';
import ImageComponent from 'components/atoms/image_component';
import AppInfoComponent from 'components/app_info_component';
import SpaceView from 'components/atoms/space_view';
import Call from 'assets/images/call.svg';
import Message from 'assets/images/messages.svg';
import MessageEdit from 'assets/images/message-edit.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthenticationContext} from 'contexts/AuthenticationContext';

const ProfileScreen = () => {
  const {setUserLoggedIn} = React.useContext(AuthenticationContext);
  const signoutHandler = async () => {
    setUserLoggedIn(false);
    try {
      await AsyncStorage.clear();
    } catch (error) {}
    setUserLoggedIn(false);
  };
  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.upperContainer}>
        <ArrowIcon
          name="arrowleft"
          color={WHITE}
          size={MS_20}
          style={style.arrowIcon}
        />
        <Text color={WHITE} bold={true} fontSize={MS_18}>
          Profile
        </Text>
      </View>
      <View style={style.lowerContainer}>
        <View height={HS_120}>
          <View
            position="absolute"
            top={-VS_30}
            alignSelf="center"
            height={HS_130}
            width={HS_130}
            backgroundColor={WHITE}
            borderRadius={HS_130 / 2}>
            <ImageComponent
              height={HS_130}
              width={HS_130}
              uri={'https://reactnativepaper.com/'}
              borderRadius={HS_130 / 2}
            />
          </View>
        </View>
        <View
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={HS_20}
          paddingHorizontal={HS_10}>
          <Text numberOfLines={1} flexShrink={1} fontSize={MS_16} bold={true}>
            Maki Zenin
          </Text>
          <MessageEdit />
        </View>
        <Text alignSelf="center" fontSize={MS_12}>
          Admin
        </Text>
        <View
          flexDirection="row"
          justifyContent="space-around"
          paddingHorizontal={HS_10}
          backgroundColor={'rgba(103, 119, 239, 0.07)'}
          paddingVertical={VS_10}
          marginVertical={VS_25}>
          <View flexDirection="row" gap={HS_10} flexGrow={1} flexShrink={1}>
            <Call />
            <Text
              color={BLACK}
              numberOfLines={1}
              flexShrink={1}
              flexGrow={1}
              fontSize={MS_12}>
              8434615941
            </Text>
          </View>
          <View flexDirection="row" gap={HS_10} flexGrow={1} flexShrink={1}>
            <Message />
            <Text
              color={BLACK}
              flexShrink={1}
              flexGrow={1}
              numberOfLines={1}
              fontSize={MS_12}>
              r.g.rdffs@aol.com
            </Text>
          </View>
        </View>
        <AppInfoComponent
          onPress={() => {}}
          heading="Check for App Update"
          subHeading="Latest software update"
          IconComponent={<Update />}
        />
        <SpaceView height={VS_20} />
        <AppInfoComponent
          onPress={signoutHandler}
          heading="Sign out"
          subHeading="Sign out from your account"
          IconComponent={<SignOut />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
