import { MenuProps } from 'antd';

export const COMPONENTS = {
  SIGNIN: 'component-signin',
  SIGNUP: 'component-signup',
  RESET_PASSWORD: 'component-reset-password',
  EDIT_USER_PROFILE: 'component-edit-user-profile',
};

export const COMPONENT_ITEMS: MenuProps['items'] = [
  {
    label: 'SignIn',
    key: COMPONENTS.SIGNIN,
  },
  {
    label: 'SignUp',
    key: COMPONENTS.SIGNUP,
  },
  {
    label: 'Reset Password',
    key: COMPONENTS.RESET_PASSWORD,
  },
  {
    label: 'Edit User Profile',
    key: COMPONENTS.EDIT_USER_PROFILE,
  },
];
