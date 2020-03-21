import React, { useEffect, useState } from 'react';
import { Animated, ViewProps, Dimensions } from 'react-native';

interface Props {
  shouldExecute: boolean;
  direction?: 'toRight' | 'toLeft';
  delay?: number;
  duration?: number;
}

type SlindingViewProps = ViewProps & Props;

const SlidingView: React.FC<SlindingViewProps> = ({
  children,
  shouldExecute,
  delay = 0,
  direction = 'toRight',
  duration = 1000,
}) => {
  const [translateX] = useState(
    direction === 'toRight' ? new Animated.Value(0) : new Animated.Value(200)
  );

  useEffect(() => {
    if (!shouldExecute) {
      translateX.setValue(direction === 'toRight' ? 0 : 200);
    } else {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 100,
          delay,
          duration,
        }),
      ]).start();
    }
  }, [shouldExecute, delay, duration, translateX, direction]);

  return (
    <Animated.View
      style={{
        width: '100%',
        opacity: translateX.interpolate({
          inputRange: [0, 100, 200],
          outputRange: [0, 1, 0],
        }),
        transform: [
          {
            translateX: translateX.interpolate({
              inputRange: [0, 100, 200],
              outputRange: [
                -Dimensions.get('window').width,
                0,
                Dimensions.get('window').width,
              ],
            }),
          },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default SlidingView;
