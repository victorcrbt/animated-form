import React, { useContext } from 'react';
import { Animated, Dimensions } from 'react-native';

import MainTransitionContext from '../../AppContext';

const MainTransition: React.FC = () => {
  const { topBorderRadius, bottomBorderRadius, translateY } = useContext(
    MainTransitionContext
  );

  return (
    <Animated.View
      style={{
        backgroundColor: '#6923F5',
        width: Dimensions.get('window').height,
        borderTopRightRadius: topBorderRadius,
        borderTopLeftRadius: topBorderRadius,
        borderBottomRightRadius: bottomBorderRadius,
        borderBottomLeftRadius: bottomBorderRadius,
        height: Dimensions.get('window').height,
        transform: [{ translateY }],
        position: 'absolute',
        zIndex: 100,
        alignSelf: 'center',
      }}
    />
  );
};

export default MainTransition;
