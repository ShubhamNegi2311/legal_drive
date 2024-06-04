import React from 'react';
import {RootStackParamList} from 'navigations/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {style} from './style';
import {
  Image,
  Text,
  View,
  Pressable,
  Button,
  ButtonText,
  ButtonSpinner,
} from '@gluestack-ui/themed';
import {ButtonColor, TextColor} from 'styles/colors';
import {MS_18, VS_10, MS_14, VS_20, HS_5, MS_8, VS_30} from 'styles/mixins';
import EditIcon from 'assets/images/edit-2.svg';
import OTPInput from 'components/organisms/OTPInput';
import RotationRight from 'assets/images/rotate-right.svg';
import {AuthenticationContext} from 'contexts/AuthenticationContext';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<RootStackParamList, 'otpScreen'>;

const OtpScreen = (props: Props) => {
  const {navigation} = props;
  const {setUserLoggedIn, countryCode, number} = React.useContext(
    AuthenticationContext,
  );
  const [otpText, setOTP] = React.useState<string>('');
  const verifyingHandler = async () => {
    try {
      await AsyncStorage.setItem('PHONE_NUMBER', countryCode + number);
      if (otpText === '1111') {
        setUserLoggedIn(true);
      } else {
        Alert.alert('Wrong OTP.....');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={style.mainContainer}>
      <View style={style.upperContainer}>
        <Image
          style={style.img}
          source={require('../../assets/images/otp_image.png')}
        />
      </View>
      <View style={style.lowerContainer}>
        <View>
          <Text
            fontSize={MS_18}
            bold={true}
            color={TextColor.GRAY}
            paddingBottom={VS_10}>
            Welcome to Legal Drive
          </Text>

          <Text
            fontSize={MS_14}
            color={TextColor.GRAY100}
            justifyContent="center"
            verticalAlign="middle">
            We will auto verify the OTP send to your mobile number {number}
            <Pressable flexDirection="row" onPress={() => navigation.goBack()}>
              <EditIcon />
              <Text color={TextColor.PRIMARY} fontSize={MS_14}>
                Edit
              </Text>
            </Pressable>
          </Text>
          <OTPInput
            onChange={(code: any) => {
              setOTP(code);
            }}
          />
          <Text
            alignSelf="center"
            color={TextColor.LIGHT_BLACK}
            fontSize={MS_14}>
            Waiting for OTP - 00:28s
          </Text>
          <View
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap={HS_5}
            paddingVertical={VS_20}>
            <RotationRight />
            <Text fontSize={MS_14} color={ButtonColor.PRIMARY700}>
              Resend OTP
            </Text>
          </View>
        </View>
        <Button
          onPress={verifyingHandler}
          marginBottom={VS_30}
          isDisabled={false}
          bg={ButtonColor.PRIMARY700}
          py={VS_10}
          borderRadius={MS_8}>
          {true ? <ButtonSpinner mr="$1" color={'#04d3f3'} /> : false}

          <ButtonText fontWeight="$medium" fontSize={MS_14}>
            Verifying…
          </ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default OtpScreen;
