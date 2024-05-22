import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {style} from './style';
import {View, Text} from '@gluestack-ui/themed';
import {TextColor} from 'styles/colors';
type TaskItemProps = {
  task: string;
};
const TaskItem = (props: TaskItemProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // const fun = () => {
  //   setToggleCheckBox(!toggleCheckBox);
  //   console.log(toggleCheckBox);
  // };

  return (
    <View style={style.mainContainer}>
      <CheckBox
        onClick={() => setToggleCheckBox(!toggleCheckBox)}
        isChecked={toggleCheckBox}
        checkBoxColor="#dbfed6"
        checkedCheckBoxColor="#6a9963"
        uncheckedCheckBoxColor="#9c9c9c"
      />
      {/* <Checkbox size="md" value={''} onChange={fun} $checked-bg=''>
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>{props.task}</CheckboxLabel>
      </Checkbox> */}
      <Text
        color={toggleCheckBox ? TextColor.GRAY : TextColor.BLACK}
        strikeThrough={toggleCheckBox}
        width={'93%'}
        onPress={() => setToggleCheckBox(!toggleCheckBox)}>
        {props.task}
      </Text>
    </View>
  );
};

export default TaskItem;
