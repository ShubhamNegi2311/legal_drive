import React from 'react';
import {TextInput, View} from 'react-native';
import {style} from './style';
import {BaseText} from '../../components/atoms/text';
import {BLACK, WHITE} from '../../styling/colors';
import {
  HS_15,
  HS_20,
  HS_50,
  MS_15,
  MS_20,
  MS_25,
  MS_30,
} from '../../styling/mixins';
import Bell_Icon from 'react-native-vector-icons/Octicons';
import Search_Icon from 'react-native-vector-icons/AntDesign';
import Sliders_Icon from 'react-native-vector-icons/FontAwesome6';
import ImageComponent from '../../components/atoms/image_component';

const HomeScreen = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.upperContainer}>
        <View style={{flexDirection: 'row', gap: HS_20}}>
          <ImageComponent
            height={HS_50}
            width={HS_50}
            uri={'https://reactnativepaper.com/'}
            borderRadius={HS_15}
          />
          <View>
            <BaseText color={WHITE} fontSize={MS_15}>
              Welcome
            </BaseText>
            <BaseText color={WHITE} textType={'bold'} fontSize={MS_20}>
              Sahil Rawat
            </BaseText>
          </View>
        </View>
        <View>
          <Bell_Icon name="bell" color={WHITE} size={MS_30} />
        </View>
      </View>
      <View style={style.lowerContainer}>
        <View style={style.inputContainer}>
          <TextInput style={style.searchInput} placeholder="Search" />
          <View style={style.iconContainer}>
            <Search_Icon name="search1" color={BLACK} size={MS_25} />
            <Sliders_Icon name="sliders" color={BLACK} size={MS_25} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
