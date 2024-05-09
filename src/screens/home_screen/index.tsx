import React, {useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {style} from './style';
import {BaseText} from '../../components/atoms/text';
import {BLACK, Colors, WHITE} from '../../styling/colors';
import {
  HS_15,
  HS_20,
  HS_50,
  MS_15,
  MS_20,
  MS_25,
  MS_30,
  VS_10,
  VS_15,
  VS_20,
  VS_3,
} from '../../styling/mixins';
import Bell_Icon from 'react-native-vector-icons/Octicons';
import Search_Icon from 'react-native-vector-icons/AntDesign';
import Sliders_Icon from 'react-native-vector-icons/FontAwesome6';

import ImageComponent from '../../components/atoms/image_component';
import {FAB} from 'react-native-paper';
import ProgressStatusComponent from '../../components/progress_status_component';
import {Calendar} from 'react-native-calendars';
import CheckBox from '@react-native-community/checkbox';
const WELCOME = 'Welcome to asldj aljk asfljdk akjfls flksjflfjld sjlj';
const HomeScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selected, setSelected] = useState('');

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
            <BaseText color={WHITE} fontSize={MS_15} style={{flexWrap: 'wrap'}}>
              {WELCOME}
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
          <TextInput
            style={style.searchInput}
            placeholder="Search"
            placeholderTextColor="#afafb1"
          />
          <View style={style.iconContainer}>
            <Search_Icon name="search1" color={BLACK} size={MS_25} />
            <Sliders_Icon name="sliders" color={BLACK} size={MS_25} />
          </View>
        </View>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <ProgressStatusComponent />
          <View
            style={{
              marginVertical: VS_20,
              borderRadius: MS_15,
              backgroundColor: WHITE,
            }}>
            <Calendar
              style={{
                borderTopRightRadius: MS_15,
                borderTopLeftRadius: MS_15,
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: Colors.primary,
                },
              }}
              onDayPress={day => {
                console.log('selected day', day);
                setSelected(day.dateString);
              }}
              theme={{
                todayTextColor: Colors.primary,
              }}
            />
            <View
              style={{
                width: '95%',
                height: VS_3,
                backgroundColor: Colors.background,
                alignSelf: 'center',
                marginVertical: VS_10,
              }}
            />
            <View
              style={{
                paddingHorizontal: HS_20,
                paddingVertical: VS_15,
              }}>
              <BaseText fontSize={MS_25} color="#9c9c9c">
                Tasks Today
              </BaseText>
              <View style={{}}>
                <CheckBox
                  boxType={'square'}
                  // disabled={false}
                  style={{}}
                  tintColors={{true: '#6a9963', false: '#9c9c9c'}}
                  onCheckColor="#6a9963"
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <BaseText>sfjdsd;f;l</BaseText>
              </View>
              <View>
                <CheckBox
                  boxType={'square'}
                  // disabled={false}
                  style={{}}
                  tintColors={{true: '#6a9963', false: '#9c9c9c'}}
                  onCheckColor="#6a9963"
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <FAB icon="plus" color={WHITE} style={style.Fab} />
    </View>
  );
};

export default HomeScreen;
