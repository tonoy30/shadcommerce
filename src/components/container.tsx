import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto w-full max-w-7xl">{children}</div>;
};
