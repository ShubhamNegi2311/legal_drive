import {View, TextInput, FlatList} from 'react-native';
import React from 'react';
import {style} from './style';
import {BaseText} from '../../components/atoms/text';
import {WHITE, BLACK, TextColor} from '../../styling/colors';
import {MS_12, MS_18, MS_20, MS_25, MS_30, VS_5} from '../../styling/mixins';
import Icon from 'react-native-vector-icons/AntDesign';
import Sliders_Icon from 'react-native-vector-icons/FontAwesome6';
import Dot_Icon from 'react-native-vector-icons/Entypo';
import {FAB} from 'react-native-paper';

type ListProps = {
  name: string;
  date: string;
  file: string;
  color: string;
  backgroundColor: string;
};

const list: ListProps[] = [
  {
    name: 'File Name1',
    date: '20 oct 23 | 23MB',
    file: 'pdffile1',
    color: '#628afd',
    backgroundColor: '#e7e8ff',
  },
  {
    name: 'File Name2',
    date: '21 oct 24 | 12MB',
    file: 'wordfile1',
    color: '#ffb632',
    backgroundColor: '#fff3db',
  },
  {
    name: 'File Name3',
    date: '20 oct 23 | 23MB',
    file: 'pptfile1',
    color: '#d84520',
    backgroundColor: '#ffd9d2',
  },
  {
    name: 'File Name1',
    date: '21 oct 24 | 12MB',
    file: 'exclefile1',
    color: '#249124',
    backgroundColor: '#d6fed4',
  },
  {
    name: 'File Name2',
    date: '20 oct 23 | 23MB',
    file: 'pdffile1',
    color: '#628afd',
    backgroundColor: '#e7e8ff',
  },
  {
    name: 'File Name3',
    date: '21 oct 24 | 12MB',
    file: 'wordfile1',
    color: '#ffb632',
    backgroundColor: '#fff3db',
  },
  {
    name: 'File Name1',
    date: '20 oct 23 | 23MB',
    file: 'pptfile1',
    color: '#d84520',
    backgroundColor: '#ffd9d2',
  },
  {
    name: 'File Name2',
    date: '21 oct 24 | 12MB',
    file: 'exclefile1',
    color: '#249124',
    backgroundColor: '#d6fed4',
  },
  {
    name: 'File Name3',
    date: '20 oct 23 | 23MB',
    file: 'pdffile1',
    color: '#628afd',
    backgroundColor: '#e7e8ff',
  },
  {
    name: 'File Name1',
    date: '21 oct 24 | 12MB',
    file: 'wordfile1',
    color: '#ffb632',
    backgroundColor: '#fff3db',
  },
  {
    name: 'File Name2',
    date: '20 oct 23 | 23MB',
    file: 'pptfile1',
    color: '#d84520',
    backgroundColor: '#ffd9d2',
  },
  {
    name: 'File Name3',
    date: '21 oct 24 | 12MB',
    file: 'exclefile1',
    color: '#249124',
    backgroundColor: '#d6fed4',
  },
  {
    name: 'File Name1',
    date: '20 oct 23 | 23MB',
    file: 'pdffile1',
    color: '#628afd',
    backgroundColor: '#e7e8ff',
  },
  {
    name: 'File Name2',
    date: '21 oct 24 | 12MB',
    file: 'wordfile1',
    color: '#ffb632',
    backgroundColor: '#fff3db',
  },
  {
    name: 'File Name3',
    date: '20 oct 23 | 23MB',
    file: 'pptfile1',
    color: '#d84520',
    backgroundColor: '#ffd9d2',
  },
  {
    name: 'File Name3',
    date: '20 oct 23 | 23MB',
    file: 'pptfile1',
    color: '#d84520',
    backgroundColor: '#ffd9d2',
  },
];

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

        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={({item}: {item: ListProps}) => {
            return (
              <View style={style.itemContainer}>
                <View style={style.itemInfo}>
                  <View
                    style={[
                      style.fileIconContainer,
                      {backgroundColor: item.backgroundColor},
                    ]}>
                    <Icon name={item.file} color={item.color} size={MS_30} />
                  </View>
                  <View style={{gap: VS_5}}>
                    <BaseText fontSize={MS_18}>{item.name}</BaseText>
                    <BaseText color={TextColor.GRAY} fontSize={MS_12}>
                      {item.date}
                    </BaseText>
                  </View>
                </View>
                <Dot_Icon
                  name="dots-three-vertical"
                  color={BLACK}
                  size={MS_25}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <FAB icon="plus" color={WHITE} style={style.Fab} />
    </View>
  );
};

export default FilesScreen;
