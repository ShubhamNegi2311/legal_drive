import {View, Platform} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {BaseText} from '../atoms/text';
type TaskItemProps = {
  task: string;
};
const TaskItem = (props: TaskItemProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <CheckBox
        boxType={'square'}
        style={{backgroundColor:'red'}}
        tintColors={{
          true: Platform.OS === 'android' ? '#6a9963' : '#dbfed6',
          false: '#9c9c9c',
        }}
        onCheckColor="#6a9963"
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <BaseText>{props.task}</BaseText>
    </View>
  );
};

export default TaskItem;
