import { MenuProps } from 'antd';

export const COMPONENTS = {
  SIGNIN: 'component-signin',
  SIGNUP: 'component-signup',
  RESET_PASSWORD: 'component-reset-password',
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
];
