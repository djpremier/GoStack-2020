import React, { FC } from 'react';

import { AuthProvider } from './auth';

const AppProvider: FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
