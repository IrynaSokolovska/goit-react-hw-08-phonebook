// import styled from 'styled-components';

// export const Layout = styled.div`
//   padding: 0 15px;
//   height: 100vh;
//   max-width: 1200px;
//   margin: 0 auto;
//   background-color: #f4f4fd;
//   box-sizing: border-box;
// `;
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
