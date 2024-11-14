import clsx from 'clsx';
import React from 'react';


export interface AppHeaderProps {
  className?: string;
  styles?: React.CSSProperties;
}

function AppHeader(props: AppHeaderProps) {
  const { className } = props;
  return (
    <header className={clsx('app-header', 'bg-white shadow-md p-4', className)} >
      AppHeader
    </header>
  );
}

export default AppHeader;
