/* REACT */
import React from 'react';
import {View} from 'react-native';

/** CUSTOM MODULE */

/** STYLE */
import {style} from './style';
import {verticalScale} from '../../../styling/mixins';

interface SpaceViewProps {
  height?: number;
  width?: number;
}

const SpaceView: React.FC<SpaceViewProps> = props => {
  const viewStyle = style(
    props.height ? verticalScale(props.height) : '0%',
    props.width ? verticalScale(props.width) : '0%',
  );
  return <View style={viewStyle.container} />;
};

export default SpaceView;
