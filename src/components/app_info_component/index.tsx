import {Pressable, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import {WHITE, TextColor} from 'styles/colors';
import {HS_10, HS_15, HS_20, MS_12, MS_14, VS_32} from 'styles/mixins';
import ArrowUp from 'assets/images/arrow-up.svg';
type AppInfoComponentProps = {
  heading: string;
  subHeading: string;
  IconComponent: React.ReactNode;
  onPress: () => void;
};
const AppInfoComponent = (props: AppInfoComponentProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      backgroundColor={WHITE}
      marginHorizontal={HS_20}
      flexDirection="row"
      paddingHorizontal={HS_15}
      paddingVertical={VS_32}
      borderRadius={HS_10}
      alignItems="center"
      justifyContent="space-between">
      <View
        flexDirection="row"
        gap={HS_10}
        flexShrink={1}
        flexGrow={1}
        alignItems="center">
        {props.IconComponent}
        <View>
          <Text
            fontSize={MS_14}
            color={TextColor.GRAY}
            numberOfLines={1}
            flexShrink={1}
            flexGrow={1}>
            {props.heading}
          </Text>
          <Text
            fontSize={MS_12}
            color={TextColor.LIGHT_BLACK}
            numberOfLines={1}
            flexShrink={1}
            flexGrow={1}>
            {props.subHeading}
          </Text>
        </View>
      </View>
      <ArrowUp />
    </Pressable>
  );
};

export default AppInfoComponent;
