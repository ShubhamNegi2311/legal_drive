import {View, TextInput, Image} from 'react-native';
import React from 'react';
import {style} from './style';
import {BaseText} from '../../components/atoms/text';
import {WHITE, BLACK, TextColor} from '../../styling/colors';
import {
  HS_20,
  HS_50,
  HS_60,
  MS_12,
  MS_15,
  MS_18,
  MS_20,
  MS_25,
  MS_40,
} from '../../styling/mixins';
import Icon from 'react-native-vector-icons/AntDesign';
import Sliders_Icon from 'react-native-vector-icons/FontAwesome6';
import Dot_Icon from 'react-native-vector-icons/Entypo';

const FilesScreen = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.upperContainer}>
        <Icon
          name="arrowleft"
          color={WHITE}
          size={MS_20}
          style={style.arrowIcon}
        />
        <BaseText color={WHITE} textType={'bold'} fontSize={MS_20}>
          Files
        </BaseText>
      </View>
      <View style={style.lowerContainer}>
        <View style={style.inputContainer}>
          <TextInput style={style.searchInput} placeholder="Search" />
          <View style={style.iconContainer}>
            <Icon name="search1" color={BLACK} size={MS_25} />
            <Sliders_Icon name="sliders" color={BLACK} size={MS_25} />
          </View>
        </View>
        <View style={style.itemContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/default_pdf.jpeg')}
              style={{height: HS_50, width: HS_50}}
            />
            <View>
              <BaseText fontSize={MS_18}>File Name1</BaseText>
              <BaseText color={TextColor.GRAY} fontSize={MS_12}>
                20 oct 24 | 23MB
              </BaseText>
            </View>
          </View>
          <Dot_Icon name="dots-three-vertical" color={BLACK} size={MS_25} />
        </View>
      </View>
    </View>
  );
};

export default FilesScreen;
