import { lazy } from 'react';

const SignUpScreen = lazy(() => import('../src/pages/SignUp/SignUp'));
const LoginScreen = lazy(() => import('../src/pages/Login/Login'));
const HomeScreen = lazy(() => import('../src/pages/Home/Home'));
const ProfileScreen = lazy(() => import('../src/pages/Profile/Profile'));
const FriendsPollsScreen = lazy(() => import('../src/pages/FriendsPolls/FriendsPolls'));

export { SignUpScreen, LoginScreen, HomeScreen, ProfileScreen, FriendsPollsScreen };
