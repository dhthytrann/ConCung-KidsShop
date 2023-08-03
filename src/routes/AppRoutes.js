import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CATEGORIES_PAGE,
  CHECKOUT_PAGE,
  CONTACT_PAGE,
  MY_ACCOUNT_PAGE,
  PRODUCTS_PAGE,
} from "../settings/constant";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layout/auth-layout";
import Default from "../layout/default";
import Login from "../containers/Auth/Login/Login";
import Register from "../containers/Auth/Register/Register";
import Loader from "../components/Loader/Loader";
import pMinDelay from "p-min-delay";

const LoginPage = React.lazy(() => import("../containers/Auth/Login/Login"));
const RegisterPage = React.lazy(() =>
  pMinDelay(import("../containers/Auth/Register/Register"), 600)
);

const HomePage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/Home/Home"), 600)
);
const CategoriesPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/Categories/Categories"), 600)
);
const ProductsPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/Products/Products"), 600)
);
const ContactPage = React.lazy(() =>
  pMinDelay(import("../containers/DefaultPage/Contact/Contact"), 600)
);

const MyAccountPage = React.lazy(() =>
  pMinDelay(import("../containers/PrivatePage/MyAccount/MyAccount"), 600)
);
const CheckOutPage = React.lazy(() =>
  pMinDelay(import("../containers/PrivatePage/CheckOut/CheckOut"), 600)
);

const AppRoutes = () => {
  const Notfound = () => {
    return <>Notfound</>;
  };

  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Default */}

      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <Default />
          </React.Suspense>
        }
      >
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <HomePage />
            </React.Suspense>
          }
        />

        <Route
          path={CATEGORIES_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <CategoriesPage />
            </React.Suspense>
          }
        />

        <Route
          path={PRODUCTS_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <ProductsPage />
            </React.Suspense>
          }
        />

        <Route
          path={CONTACT_PAGE}
          element={
            <React.Suspense fallback={<Loader />}>
              <ContactPage />
            </React.Suspense>
          }
        />

        <Route
          path={MY_ACCOUNT_PAGE}
          element={
            <PrivateRoute>
              <React.Suspense fallback={<Loader />}>
                <MyAccountPage />
              </React.Suspense>
            </PrivateRoute>
          }
        />

        <Route
          path={CHECKOUT_PAGE}
          element={
            <PrivateRoute>
              <React.Suspense fallback={<Loader />}>
                <CheckOutPage />
              </React.Suspense>
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
