import React from 'react';
import cn from 'classnames';

export const Container = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div className={cn('mx-auto max-w-7xl px-2 sm:px-6', classNames)}>
      {children}
    </div>
  );
};
