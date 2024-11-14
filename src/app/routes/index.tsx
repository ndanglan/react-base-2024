
import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import React, { Suspense } from 'react';

import MainLayout from '@/app/components/layouts/main-layout';
import { Spinner } from '@/app/components/ui/spinner';

const HomePage = React.lazy(() => import('@/app/components/pages/home'));
const ProductDetail = React.lazy(() => import('@/app/components/pages/product-detail'));
const Products = React.lazy(() => import('@/app/components/pages/products'));

export default [
  {
    path: '',
    element: <MainLayout><Outlet /></MainLayout>,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<Spinner />}>
          <HomePage />
        </Suspense>
      },
      {
        path: '/products',
        element: <Suspense fallback={<Spinner />}>
          <Products />
        </Suspense>
      },
      {
        path: '/products/:id',
        element: <Suspense fallback={<Spinner />}>
          <ProductDetail />
        </Suspense>
      }
    ],
  },
  {
    path: '/login',
    element: <Navigate to="/" />,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
] as RouteObject[];
