import React from 'react';
import {style} from './style';
import {
  Button,
  ButtonText,
  Image,
  Input,
  InputField,
  SafeAreaView,
  Text,
  View,
} from '@gluestack-ui/themed';
import {
  HS_10,
  HS_20,
  HS_40,
  MS_14,
  MS_16,
  MS_18,
  VS_10,
  VS_2,
  VS_20,
} from 'styles/mixins';
import {
  ButtonColor,
  DIVIDER_COLOR,
  GRAY,
  PRIMARY,
  TextColor,
} from 'styles/colors';
import CountryPicker from 'rn-country-picker';
import {AuthenticationContext} from 'contexts/AuthenticationContext';
import GoogleIcon from 'assets/images/google-icon.svg';
import WhatsAppIcon from 'assets/images/whatsApp_icon.svg';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigations/types';
import {Alert} from 'react-native';
type Props = NativeStackScreenProps<RootStackParamList, 'loginScreen'>;

const LoginScreen = (props: Props) => {
  const {navigation} = props;
  const {setUserCountryCode, setUserNumber, countryCode, number} =
    React.useContext(AuthenticationContext);

  React.useEffect(() => {
    console.log(number);
  }, [number]);
  const [isFocused, setFocused] = React.useState(false);
  const nextHandler = () => {
    if (number) {
      console.log(countryCode);
      navigation.navigate('otpScreen');
    } else {
      Alert.alert('Number is not empty');
    }
  };
  return (
    <SafeAreaView style={style.mainContainer}>
      <View height={'55%'} justifyContent="center" alignItems="center">
        <Image
          source={require('../../assets/images/login.png')}
          style={style.img}
          resizeMode="contain"
        />
      </View>
      <View style={style.lowerContainer}>
        <Text
          fontSize={MS_18}
          bold={true}
          color={TextColor.GRAY}
          paddingBottom={VS_10}>
          Welcome to Legal Drive
        </Text>
        <Text fontSize={MS_14} color={TextColor.GRAY100}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
        <View
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          marginVertical={VS_20}
          gap={HS_20}>
          <CountryPicker
            // containerStyle={style.countryPicker}
            hideCountryFlag={false}
            countryCode={countryCode}
            animationType={'slide'}
            selectedCountryTextStyle={style.selectedCountryTextStyle}
            countryNameTextStyle={style.countryNameTextStyle}
            searchBarPlaceHolder={'Search'}
            // searchBarStyle={style.searchBarStyle}
            countryFlagStyle={style.countryFlagStyle}
            selectedValue={setUserCountryCode}
          />

          <Input
            style={style.numberInput}
            borderColor={isFocused ? PRIMARY : GRAY}
            variant="outline">
            <InputField
              keyboardType="numeric"
              fontSize={MS_16}
              placeholder="Mobile Number"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChangeText={setUserNumber}
            />
          </Input>
        </View>
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          paddingVertical={VS_10}>
          <View bgColor={DIVIDER_COLOR} height={VS_2} w={'45%'} />
          <Text paddingHorizontal={HS_10}>OR</Text>
          <View bgColor={DIVIDER_COLOR} height={VS_2} w={'45%'} />
        </View>

        <View
          flexDirection="row"
          justifyContent="center"
          gap={HS_20}
          marginTop={VS_10}>
          <View
            flexDirection="row"
            gap={HS_10}
            borderRadius={HS_10}
            bg={ButtonColor.BACKGROUND}
            paddingHorizontal={HS_40}
            paddingVertical={VS_10}
            alignItems="center">
            <GoogleIcon />
            <Text>Google</Text>
          </View>
          <View
            flexDirection="row"
            gap={HS_10}
            borderRadius={HS_10}
            bg={ButtonColor.BACKGROUND}
            paddingHorizontal={HS_20}
            paddingVertical={VS_10}
            alignItems="center">
            <WhatsAppIcon />
            <Text>WhatsAppIcon</Text>
          </View>
        </View>
        <Button onPress={nextHandler}>
          <ButtonText>Next </ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
