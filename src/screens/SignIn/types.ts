import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '~/routes/types';

export type SignInScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;
