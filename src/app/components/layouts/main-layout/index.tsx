import clsx from 'clsx';

import AppHeader from '@/app/components/layouts/header';

import './index.scss'

export interface MainLayoutProps extends React.PropsWithChildren<object> {
  className?: string;
  styles?: React.CSSProperties;
}

function MainLayout(props: MainLayoutProps) {
  const { children, className } = props;

  return (
    <div className={clsx('main-layout', 'flex h-screen bg-gray-100', className)} >
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <main className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto bg-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
