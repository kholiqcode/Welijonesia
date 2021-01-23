import { Splash } from '../screens';
import ChooseRole from '../screens/Auth/ChooseRole';

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress.interpolate({
      inputRange: [0, 0.5, 0.9, 1],
      outputRange: [0, 0.25, 0.7, 1],
    }),
  },
});

const authRoutes = [
  {
    name: 'Splash',
    component: Splash,
    options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },
  {
    name: 'ChooseRole',
    component: ChooseRole,
    options: {
      headerShown: false,
      cardStyleInterpolator: forFade,
    },
  },
];

export default authRoutes;
