import { createStackNavigator } from '@react-navigation/stack'

export enum MainRoutes {
  SignIn = 'Sign In',
  SignUp = 'Sign Up',
  Welcome = 'Welcome',
  Home = 'Home',
  ConfirmEmail = 'Confirm Email',
  OTP = 'OTP',
  ResetPassword = 'Reset Password',
  Confirmation = 'Confirmation',
  Profile = 'Profile',
  NavBar = 'NavBar',
  Sysco = 'Sysco',
  UsFoods = 'UsFoods',
  EditProfile = 'EditProfile',
  CategoryListScreen = 'CategoryListScreen'
}

export type MainStackParamList = {
  [MainRoutes.SignIn]: undefined
  [MainRoutes.SignUp]: undefined
  [MainRoutes.Welcome]: undefined
  [MainRoutes.Home]: { update: boolean } | undefined // just an example, "update" will later be used for version checks
  [MainRoutes.ConfirmEmail]: undefined
  [MainRoutes.OTP]: undefined
  [MainRoutes.ResetPassword]: undefined
  [MainRoutes.Confirmation]: undefined
  [MainRoutes.Profile]: undefined
  [MainRoutes.NavBar]: undefined
  [MainRoutes.Sysco]: undefined
  [MainRoutes.UsFoods]: undefined
  [MainRoutes.EditProfile]: undefined
  [MainRoutes.CategoryListScreen]: undefined
}

export const MainStack = createStackNavigator<MainStackParamList>()
