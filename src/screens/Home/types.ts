import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '~/routes/types';

export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
