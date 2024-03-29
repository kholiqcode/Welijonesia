import { CardStyleInterpolators } from '@react-navigation/stack';
import { CustomerAuth, Splash, Verification } from '../screens';

// const forFade = ({ current }) => ({
//   cardStyle: {
//     opacity: current.progress.interpolate({
//       inputRange: [0, 0.5, 0.9, 1],
//       outputRange: [0, 0.25, 0.7, 1],
//     }),
//   },
// });

// const horizontalAnimation = ({ current, layouts }) => ({
//   cardStyle: {
//     transform: [
//       {
//         translateX: current.progress.interpolate({
//           inputRange: [0, 1],
//           outputRange: [layouts.screen.width, 0],
//         }),
//       },
//     ],
//   },
// });

const authRoutes = [
  {
    name: 'Splash',
    component: Splash,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    },
  },
  {
    name: 'CustomerAuth',
    component: CustomerAuth,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    },
  },
  {
    name: 'Verification',
    component: Verification,
    options: {
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
    },
  },
];

export default authRoutes;
