import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { LayoutWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutWrapper>
  );
};
