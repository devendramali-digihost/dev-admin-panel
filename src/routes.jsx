import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    path: '/auth/signin',
    element: lazy(() => import('./views/auth/SignIn'))
  },
  {
    exact: 'true',
    path: '/auth/forgotpassword',
    element: lazy(() => import('./views/auth/Forgotpassword'))
  },
  {
    exact: 'true',
    path: '/auth/resetpassword',
    element: lazy(() => import('./views/auth/Resetpassword'))
  },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/app/dashboard/default',
        element: lazy(() => import('./views/dashboard'))
      },

      {
        exact: 'true',
        path: '/forms/form-basic',
        element: lazy(() => import('./views/forms/FormsElements'))
      },
      {
        exact: 'true',
        path: '/forms/form-companysignup',
        element: lazy(() => import('./views/forms/CompanySignUp'))
      },
      {
        exact: 'true',
        path: '/create-page/create-new-page',
        element: lazy(() => import('./views/create-page/CreateNewPage'))
      },
      {
        exact: 'true',
        path: '/tables/bootstrap',
        element: lazy(() => import('./views/tables/BootstrapTable'))
      },
      // Company list
      {
        exact: 'true',
        path: '/company/company-list',
        element: lazy(() => import('./views/company/CompanyList'))
      },
      {
        exact: 'true',
        path: '/company/edit-company',
        element: lazy(() => import('./views/company/EditCompany'))
      },
      {
        exact: 'true',
        path: '/profile/my-profile',
        element: lazy(() => import('./views/profile/MyProfile'))
      },
      // Company list
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default routes;
