import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorFallBack from '@/app/components/layouts/error-fallback';
import { Spinner } from '@/app/components/ui/spinner';

export interface AppProviderProps extends React.PropsWithChildren<object> {
  styles?: React.CSSProperties;
}


function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return (
    <React.Suspense
      fallback={
        <Spinner />
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <HelmetProvider>
          <Router >{children}</Router>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default React.memo(AppProvider);
