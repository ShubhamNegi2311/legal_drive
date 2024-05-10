import {View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
// import CheckBox from '@react-native-community/checkbox';
import {BaseText} from 'components/atoms/text';
import {style} from './style';
type TaskItemProps = {
  task: string;
};
const TaskItem = (props: TaskItemProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={style.mainContainer}>
      <CheckBox
        onClick={() => setToggleCheckBox(!toggleCheckBox)}
        isChecked={toggleCheckBox}
        checkBoxColor="#dbfed6"
        checkedCheckBoxColor="#6a9963"
        uncheckedCheckBoxColor="#9c9c9c"
      />
      <BaseText
        style={{width: '93%'}}
        onPress={() => setToggleCheckBox(!toggleCheckBox)}>
        {props.task}
      </BaseText>
    </View>
  );
};

export default TaskItem;
