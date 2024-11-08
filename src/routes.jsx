import React, { Suspense, Fragment, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import AdminLayout from "./layouts/AdminLayout";

import { BASE_URL } from "./config/constant";

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
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Element props={true} />
                  )}
                </Layout>
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
    exact: "true",
    path: "/auth/signin",
    element: lazy(() => import("./views/auth/SignIn")),
  },
  {
    exact: "true",
    path: "/auth/forgotpassword",
    element: lazy(() => import("./views/auth/Forgotpassword")),
  },
  {
    exact: "true",
    path: "/auth/resetpassword",
    element: lazy(() => import("./views/auth/Resetpassword")),
  },
  {
    exact: "true",
    path: "/dev-forms/details-form",
    element: lazy(() => import("./views/dev-forms/DevForm")),
  },
  {
    path: "*",
    layout: AdminLayout,
    routes: [
      // Company list
      // {
      //   path: '*',
      //   exact: 'true',
      //   element: () => <Navigate to={BASE_URL} />
      // },
      {
        path: "*",
        element: () => <Navigate to={BASE_URL} replace />,
      },

      {
        exact: "true",
        path: "/company/create-new-project",
        element: lazy(() => import("./views/company/CreateNewProject")),
      },
      {
        exact: "true",
        path: "/admin-template/admin-module-list",
        element: lazy(() => import("./views/admin-template/AdminModuleList")),
      },
    ],
  },
];

export default routes;
