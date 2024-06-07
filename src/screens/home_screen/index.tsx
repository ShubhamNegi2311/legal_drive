import React, {useState} from 'react';
import {style} from './style';

import Bell_Icon from 'react-native-vector-icons/Octicons';
import Search_Icon from 'react-native-vector-icons/AntDesign';
import Sliders_Icon from 'react-native-vector-icons/FontAwesome6';

import ImageComponent from 'components/atoms/image_component';
import ProgressStatusComponent from 'components/progress_status_component';
import {Calendar} from 'react-native-calendars';
import TaskItem from 'components/task_item_component';
import SpaceView from 'components/atoms/space_view';
import {WHITE, BLACK, PRIMARY} from 'styles/colors';
import {HS_50, HS_15, MS_15, MS_25, VS_20, MS_14, MS_18} from 'styles/mixins';
import {
  AddIcon,
  Fab,
  FabIcon,
  Input,
  InputField,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from '@gluestack-ui/themed';
import {FlatList} from 'react-native';

const WELCOME = 'Welcome';
const HomeScreen = () => {
  const [selected, setSelected] = useState('');
  const tasksOfTheDay = [
    'Wake up at 7:00 AM',
    'Brush teeth and wash face',
    'Exercise for 30 minutes',
    'Eat a healthy breakfast',

    'Wrap up work tasks for the day',
    'Cook and have dinner',
    'Spend quality time with family or friendsa a ad aa dl',
    'Relax and unwind with a book or favorite TV show',
    'Prepare clothes and items for tomorrow',
  ];
  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.upperContainer}>
        <View style={style.screenHeader}>
          <ImageComponent
            height={HS_50}
            width={HS_50}
            uri={'https://reacttivepaper.com/'}
            borderRadius={HS_15}
          />
          <View style={style.headerText}>
            <Text color={WHITE} fontSize={MS_14} numberOfLines={1}>
              {WELCOME}
            </Text>
            <Text color={WHITE} fontSize={MS_18} numberOfLines={1} bold={true}>
              Maki Zenin
            </Text>
          </View>
        </View>
        <Bell_Icon name="bell" color={WHITE} size={MS_25} />
      </View>
      <View style={style.lowerContainer}>
        <View style={style.inputContainer}>
          <Input style={style.searchInput} variant="underlined">
            <InputField placeholder="Search" color="#afafb1" />
          </Input>
          <View style={style.iconContainer}>
            <Search_Icon name="search1" color={BLACK} size={MS_25} />
            <Sliders_Icon name="sliders" color={BLACK} size={MS_25} />
          </View>
        </View>
        <ScrollView
          style={style.scrollView}
          showsVerticalScrollIndicator={false}>
          <ProgressStatusComponent />
          <View
            style={{
              marginVertical: VS_20,
              borderRadius: MS_15,
              backgroundColor: WHITE,
            }}>
            <Calendar
              hideExtraDays={true}
              style={{
                borderTopRightRadius: MS_15,
                borderTopLeftRadius: MS_15,
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: PRIMARY,
                },
              }}
              onDayPress={day => {
                console.log('selected day', day);
                setSelected(day.dateString);
              }}
              theme={{
                todayTextColor: PRIMARY,
              }}
            />
            <View style={style.hsBar} />
            <View style={style.taskContainer}>
              <Text fontSize={MS_15} color="#9c9c9c">
                Tasks Today
              </Text>
              <FlatList
                scrollEnabled={false}
                data={tasksOfTheDay}
                showsVerticalScrollIndicator={false}
                renderItem={({item}: {item: string}) => {
                  return <TaskItem task={item} />;
                }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={<SpaceView height={HS_50} />}
              />
            </View>
          </View>
        </ScrollView>
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

export default HomeScreen;
