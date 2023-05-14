import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminHome } from './AdminHome';

const AdminRoute = () => {
  return (
    <AdminHome>
      <Outlet/>
    </AdminHome>
  );
}

export default AdminRoute;