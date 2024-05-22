import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {BLACK, PRIMARY, SECONDARY, TextColor} from 'styles/colors';
import {style} from './style';
import {
  View,
  Text,
  ThreeDotsIcon,
  Icon,
  ChevronDownIcon,
} from '@gluestack-ui/themed';

const ProgressStatusComponent = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.headingBar}>
        <Text bold={true}>Files</Text>
        <View style={style.customBar}>
          <View style={style.monthContainer}>
            <Text color={BLACK} fontSize={'$xs'}>
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
            <Text style={style.fileNum} fontSize={'$3xl'}>
              146
            </Text>
            <Text color={TextColor.GRAY}>Total files</Text>
          </View>
        </View>
      </View>
      <View style={style.lowerContainer}>
        <View style={style.lowerContainerRow}>
          <View style={style.pendingLeftBar} />
          <View>
            <Text>Pending Files</Text>
            <Text fontSize={'$3xl'}>100</Text>
          </View>
        </View>
        <View style={style.lowerContainerRow}>
          <View>
            <Text>Disposed Files</Text>
            <Text fontSize={'$3xl'} style={style.rightPendingText}>
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
