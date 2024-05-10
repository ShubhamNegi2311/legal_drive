import {View} from 'react-native';
import React from 'react';
import {BaseText} from '../atoms/text';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import Dots_Icon from 'react-native-vector-icons/Entypo';
import {PRIMARY, SECONDARY, TextColor} from 'styles/colors';
import {MS_15, MS_12, MS_30} from 'styles/mixins';
import {style} from './style';

const ProgressStatusComponent = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.headingBar}>
        <BaseText textType="bold">Files</BaseText>
        <View style={style.customBar}>
          <View style={style.monthContainer}>
            <BaseText color="#afafb1" fontSize={MS_12}>
              This Month
            </BaseText>
          </View>
          <View style={style.dotIconContainer}>
            <Dots_Icon
              name="dots-three-horizontal"
              color={'#afafb1'}
              size={MS_15}
            />
          </View>
        </View>
      </View>
      <View style={style.progressBarContainer}>
        <AnimatedCircularProgress
          lineCap="round"
          size={250}
          width={15}
          arcSweepAngle={180}
          fill={60}
          rotation={270}
          tintColor={PRIMARY}
          backgroundColor={SECONDARY}
          style={style.progressBar}
        />
        <View style={style.totalfilesContainer}>
          <View style={style.fileNumContainer}>
            <BaseText style={style.fileNum} fontSize={MS_30}>
              146
            </BaseText>
            <BaseText color={TextColor.GRAY}>Total files</BaseText>
          </View>
        </View>
      </View>
      <View style={style.lowerContainer}>
        <View style={style.lowerContainerRow}>
          <View style={style.pendingLeftBar} />
          <View>
            <BaseText>Pending Files</BaseText>
            <BaseText fontSize={MS_30}>100</BaseText>
          </View>
        </View>
        <View style={style.lowerContainerRow}>
          <View>
            <BaseText>Pending Files</BaseText>
            <BaseText fontSize={MS_30} style={style.rightPendingText}>
              100
            </BaseText>
          </View>
          <View style={style.pendingRightBar} />
        </View>
      </View>
    </View>
  );
};

export default ProgressStatusComponent;
