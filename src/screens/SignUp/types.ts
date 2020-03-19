import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '~/routes/types';

export type SignUpScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;
