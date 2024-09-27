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
        path: '/company/business-account',
        element: lazy(() => import('./views/company/BusinessAccount'))
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
        path: '/company/domain-verify',
        element: lazy(() => import('./views/company/DomainVerify'))
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
      },
      // Admin
      {
        exact: 'true',
        path: '/template/create-admin',
        element: lazy(() => import('./views/template/CreateAdmin'))
      },
      // {
      //   exact: 'true',
      //   path: '/template/admin-list',
      //   element: lazy(() => import('./views/template/AdminList'))
      // },

      // Buy Domain
      {
        exact: 'true',
        path: '/buy-domain',
        element: lazy(() => import('./views/domain/BuyDomain'))
      },

      //NsVerify
      {
        exact: 'true',
        path: '/ns-verify',
        element: lazy(() => import('./views/domain/NsVerify'))
      },
      // Form Tamplate
      {
        exact: 'true',
        path: '/template/form-template',
        element: lazy(() => import('./views/admin-tamplate/FormTamplate'))
      },
      // Admin template
      {
        exact: 'true',
        path: '/admin-template/create-admin-template',
        element: lazy(() => import('./views/admin-tamplate/CreateAdminTemplate'))
      },
      {
        exact: 'true',
        path: '/company/create-new-project',
        element: lazy(() => import('./views/company/CreateNewProject'))
      },
      {
        exact: 'true',
        path: '/admin-template/admin-module-list',
        element: lazy(() => import('./views/admin-tamplate/AdminModuleList'))
      },
      // Module page
      {
        exact: 'true',
        path: '/create-page/create-module',
        element: lazy(() => import('./views/create-page/CreateModule'))
      }
    ]
  }
];

export default routes;
