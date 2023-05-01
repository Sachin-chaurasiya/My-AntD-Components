import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { COMPONENTS } from './constants';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import EditUserProfile from './Components/EditUserProfile';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={COMPONENTS.SIGNIN} />} />
      <Route path={COMPONENTS.SIGNIN} element={<SignIn />} />
      <Route path={COMPONENTS.SIGNUP} element={<SignUp />} />
      <Route path={COMPONENTS.RESET_PASSWORD} element={<ResetPassword />} />
      <Route
        path={COMPONENTS.EDIT_USER_PROFILE}
        element={<EditUserProfile />}
      />
    </Routes>
  );
};

export default AppRouter;
