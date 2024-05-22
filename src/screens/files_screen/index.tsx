import {FlatList} from 'react-native';
import React from 'react';
import {style} from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import Sliders_Icon from 'react-native-vector-icons/FontAwesome6';
import Dot_Icon from 'react-native-vector-icons/Entypo';
import SpaceView from 'components/atoms/space_view';
import {WHITE, BLACK, TextColor, PRIMARY} from 'styles/colors';
import {MS_20, MS_25, MS_30, VS_5, HS_70} from 'styles/mixins';
import {
  AddIcon,
  Fab,
  FabIcon,
  Input,
  InputField,
  SafeAreaView,
  Text,
  View,
} from '@gluestack-ui/themed';

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
    <SafeAreaView style={style.mainContainer}>
      <View style={style.upperContainer}>
        <Icon
          name="arrowleft"
          color={WHITE}
          size={MS_20}
          style={style.arrowIcon}
        />
        <Text color={WHITE} bold={true} fontSize={'$xl'}>
          Files
        </Text>
      </View>
      <View style={style.lowerContainer}>
        <View style={style.inputContainer}>
          <Input style={style.searchInput} variant="underlined">
            <InputField placeholder="Search" color="#afafb1" />
          </Input>
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
                  <View style={{gap: VS_5, flex: 1, flexGrow: 1}}>
                    <Text
                      fontSize={'$xl'}
                      numberOfLines={1}
                      flex={1}
                      flexGrow={1}>
                      {item.name}
                    </Text>
                    <Text
                      color={TextColor.GRAY}
                      fontSize={'$md'}
                      flex={1}
                      flexGrow={1}>
                      {item.date}
                    </Text>
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
          ListFooterComponent={<SpaceView height={HS_70} />}
        />
      </View>
      <Fab
        size="lg"
        placement="bottom right"
        bgColor={PRIMARY}
        isHovered={false}
        isDisabled={false}
        isPressed={false}>
        <FabIcon as={AddIcon} size="lg" />
      </Fab>
    </SafeAreaView>
  );
};

export default FilesScreen;
