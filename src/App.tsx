import React, { useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import MainTransitionContext from '~/AppContext';

import Routes from './routes';

const App: React.FC = () => {
  const [topBorderRadius] = useState(
    new Animated.Value(Dimensions.get('window').height / 2)
  );
  const [bottomBorderRadius] = useState(new Animated.Value(0));
  const [translateY] = useState(
    new Animated.Value(Dimensions.get('window').height)
  );

  function startTransition() {
    topBorderRadius.setValue(Dimensions.get('window').height / 2);
    bottomBorderRadius.setValue(0);
    translateY.setValue(Dimensions.get('window').height);

    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
        }),
        Animated.timing(topBorderRadius, {
          toValue: 0,
          duration: 300,
        }),
      ]),
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -Dimensions.get('window').height,
          duration: 300,
        }),
        Animated.timing(bottomBorderRadius, {
          toValue: Dimensions.get('window').height / 2,
          duration: 300,
        }),
      ]),
    ]).start();
  }

  return (
    <>
      <MainTransitionContext.Provider
        value={{
          startTransition,
          topBorderRadius,
          bottomBorderRadius,
          translateY,
        }}
      >
        <Routes />
      </MainTransitionContext.Provider>
    </>
  );
};

export default App;
