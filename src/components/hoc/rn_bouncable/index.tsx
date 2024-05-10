/* REACT */
import * as React from 'react';
import {
  Animated,
  ViewStyle,
  StyleProp,
  Pressable,
  PressableProps,
} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
export interface IRNBounceableProps extends PressableProps {
  onPress?: () => void;
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
  useNativeDriver?: boolean;
  children?: React.ReactNode;
  style?: CustomStyleProp;
}

export const RNBounceable: React.FC<IRNBounceableProps> = props => {
  const bounceValue = new Animated.Value(1);

  function bounceAnimation(
    value: number,
    velocity: number,
    bounciness: number,
  ) {
    const {useNativeDriver = true} = props;
    const animation = Animated.spring(bounceValue, {
      toValue: value,
      velocity,
      bounciness,
      useNativeDriver,
    });
    animation.start();
  }

  const {
    bounceEffectIn = 0.93,
    bounceEffectOut = 1,
    bounceVelocityIn = 0.2,
    bounceVelocityOut = 0.4,
    bouncinessIn = 0,
    bouncinessOut = 0,
    children,
    style,
    onPress,
  } = props;

  return (
    <AnimatedPressable
      // TODO: Uncomment this if any issue occured ragarding to the props of pressable
      // {...this.props}
      disabled={props.disabled}
      style={[{transform: [{scale: bounceValue}]}, style]}
      onPressIn={() => {
        bounceAnimation(bounceEffectIn, bounceVelocityIn, bouncinessIn);
      }}
      onPressOut={() => {
        bounceAnimation(bounceEffectOut, bounceVelocityOut, bouncinessOut);
        //   onPress;
      }}
      onPress={onPress}>
      {children}
    </AnimatedPressable>
  );
};

export default RNBounceable;
