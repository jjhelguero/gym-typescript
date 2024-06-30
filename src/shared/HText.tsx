import { isNotNull } from '@/utils/isNotNull';
import React from 'react';

type Props = { children: React.ReactNode; dataTestId?: string };

export const HText = ({ children, dataTestId }: Props) => {
  return (
    <h1
      className='basis-3/5 font-montserrat text-3xl font-bold'
      data-testid={isNotNull(dataTestId) ? dataTestId : undefined}
    >
      {children}
    </h1>
  );
};
