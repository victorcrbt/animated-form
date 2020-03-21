import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './types';

import MainTransition from '~/components/MainTransition';
import Home from '~/screens/Home';
import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

import MainTransitionContext from '~/AppContext';

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  const { startTransition } = useContext(MainTransitionContext);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#fff' },
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {
                  duration: 500,
                },
              },
              close: {
                animation: 'timing',
                config: {
                  duration: 500,
                },
              },
            },
            cardStyleInterpolator: ({ current, next, layouts }) => {
              const translateY = current.progress.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [layouts.screen.height, layouts.screen.height, 0],
              });

              const opacity = current.progress.interpolate({
                inputRange: [-100, 0, 1],
                outputRange: [0, 0, 1],
              });

              return {
                cardStyle: {
                  // transform: [{ translateY }],
                  opacity,
                },
              };
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>

      <MainTransition />
    </>
  );
};

export default Routes;
