import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {PRIMARY, SECONDARY, TextColor} from 'styles/colors';
import {style} from './style';
import {
  View,
  Text,
  ThreeDotsIcon,
  Icon,
  ChevronDownIcon,
} from '@gluestack-ui/themed';
import {MS_10, MS_12, MS_14, MS_18, MS_28, VS_15} from 'styles/mixins';

const ProgressStatusComponent = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.headingBar}>
        <Text fontSize={MS_14} bold={true} color={TextColor.GRAY}>
          Files
        </Text>
        <View style={style.customBar}>
          <View style={style.monthContainer}>
            <Text color={TextColor.LIGHT_BLACK} fontSize={MS_12}>
              This Month
            </Text>
            <Icon as={ChevronDownIcon} w="$4" h="$4" />
          </View>
          <View style={style.dotIconContainer}>
            <Icon as={ThreeDotsIcon} w="$4" h="$4" />
          </View>
        </View>
      </View>
      <View style={style.progressBarContainer}>
        <AnimatedCircularProgress
          lineCap="round"
          size={280}
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
            <Text style={style.fileNum} fontSize={MS_28} color={TextColor.GRAY}>
              146
            </Text>
            <Text color={TextColor.GRAY} fontSize={MS_14}>
              Total files
            </Text>
          </View>
        </View>
      </View>
      <View style={style.lowerContainer}>
        <View style={style.lowerContainerRow}>
          <View style={style.pendingLeftBar} />
          <View gap={VS_15}>
            <Text fontSize={MS_10} color={TextColor.GRAY}>
              Pending Files
            </Text>
            <Text fontSize={MS_18} color={TextColor.GRAY}>
              100
            </Text>
          </View>
        </View>
        <View style={style.lowerContainerRow}>
          <View gap={VS_15}>
            <Text fontSize={MS_10} color={TextColor.GRAY}>
              Disposed Files
            </Text>
            <Text fontSize={MS_18} color={TextColor.GRAY} textAlign="right">
              46
            </Text>
          </View>
          <View style={style.pendingRightBar} />
        </View>
      </View>
    </View>
  );
};

export default ProgressStatusComponent;
